// domain/plateau.ts — Plateau detection over the per-skill stats series.
//
// Blueprint §2.4: B1 is where most adult learners abandon language study. The
// system must detect stagnation and respond VISIBLY — explicit acknowledgement
// and constructive options, not silence.
//
// Method: compare two adjacent trailing windows (days 0-13 vs 14-27). A signal
// only fires with enough volume in BOTH windows — sparse data must never
// trigger a plateau message (false alarms are worse than silence).
//
// Pure: `today` is injected; no clock reads.

import type { StatsData } from "../store/useStatsStore"
import type { Skill } from "./skills"
import { SKILLS } from "./skills"

export type SkillTrend = "stagnant" | "declining"
export type PlateauTier = "none" | "notice" | "concern"

export interface PlateauResult {
    tier: PlateauTier
    /** Skills with enough volume whose accuracy is flat or falling. */
    skills: Array<{ skill: Skill; trend: SkillTrend; recentPct: number; priorPct: number }>
    /** SRS retention (flashcard correct/reviewed) declining across windows. */
    retentionDeclining: boolean
}

export const WINDOW_DAYS = 14
/** Minimum per-skill attempts in EACH window before the signal is trusted. */
export const MIN_SKILL_ATTEMPTS = 10
/** Minimum flashcard reviews in EACH window for the retention signal. */
export const MIN_RETENTION_REVIEWS = 20
/** Accuracy delta (percentage points) at or below which a skill counts as declining. */
export const DECLINE_DELTA = -5
/** Accuracy delta at or below which a skill counts as stagnant (no improvement). */
export const STAGNANT_DELTA = 2

interface WindowTotals { skillT: Record<Skill, number>; skillC: Record<Skill, number>; reviewed: number; correct: number }

function emptyTotals(): WindowTotals {
    return {
        skillT: { CO: 0, CE: 0, EO: 0, EE: 0 },
        skillC: { CO: 0, CE: 0, EO: 0, EE: 0 },
        reviewed: 0,
        correct: 0,
    }
}

/** Sum stats for the window [today - startOffset - WINDOW_DAYS + 1, today - startOffset]. */
function sumWindow(data: StatsData, langId: string, today: string, startOffset: number): WindowTotals {
    const totals = emptyTotals()
    const langDays = data[langId] ?? {}
    for (let i = startOffset; i < startOffset + WINDOW_DAYS; i++) {
        const d = new Date(today + "T00:00:00")
        d.setDate(d.getDate() - i)
        const day = langDays[d.toISOString().slice(0, 10)]
        if (!day) continue
        totals.reviewed += day.reviewed
        totals.correct += day.correct
        for (const skill of SKILLS) {
            const s = day.skills?.[skill]
            if (!s) continue
            totals.skillT[skill] += s.t
            totals.skillC[skill] += s.c
        }
    }
    return totals
}

export function detectPlateau(data: StatsData, langId: string, today: string): PlateauResult {
    const recent = sumWindow(data, langId, today, 0)
    const prior = sumWindow(data, langId, today, WINDOW_DAYS)

    const skills: PlateauResult["skills"] = []
    for (const skill of SKILLS) {
        const rT = recent.skillT[skill]
        const pT = prior.skillT[skill]
        if (rT < MIN_SKILL_ATTEMPTS || pT < MIN_SKILL_ATTEMPTS) continue
        const recentPct = Math.round(recent.skillC[skill] / rT * 100)
        const priorPct = Math.round(prior.skillC[skill] / pT * 100)
        const delta = recentPct - priorPct
        if (delta <= DECLINE_DELTA) {
            skills.push({ skill, trend: "declining", recentPct, priorPct })
        } else if (delta <= STAGNANT_DELTA) {
            skills.push({ skill, trend: "stagnant", recentPct, priorPct })
        }
    }

    let retentionDeclining = false
    if (recent.reviewed >= MIN_RETENTION_REVIEWS && prior.reviewed >= MIN_RETENTION_REVIEWS) {
        const recentPct = recent.correct / recent.reviewed * 100
        const priorPct = prior.correct / prior.reviewed * 100
        retentionDeclining = recentPct - priorPct <= DECLINE_DELTA
    }

    const anyDeclining = retentionDeclining || skills.some(s => s.trend === "declining")
    const tier: PlateauTier = anyDeclining ? "concern" : (skills.length > 0 ? "notice" : "none")

    return { tier, skills, retentionDeclining }
}
