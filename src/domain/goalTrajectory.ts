// domain/goalTrajectory.ts — Honest trajectory-vs-required computation for
// time-bound goals (blueprint §2.3: "no false reassurance — if a learner is
// behind, they are told so directly but constructively").
//
// Pure: all inputs (including `today`) are passed in; no clock or module reads.

import { CEFRLevel, CEFR_LEVELS, GoalPlan } from "../types"

export type TrajectoryStatus =
    | "no-plan"            // no goal plan set
    | "achieved"           // current level is already past the target
    | "no-date"            // target level set but no date — progress-only display
    | "insufficient-data"  // date set but not enough recent mastery events to estimate pace
    | "ahead"
    | "on-track"
    | "behind"

export interface TrajectoryInput {
    /** Total units per CEFR level for this language (from loaded modules). */
    unitTotalsByLevel: Partial<Record<CEFRLevel, number>>
    /** Mastered unit count per CEFR level. */
    masteredByLevel: Partial<Record<CEFRLevel, number>>
    currentLevel: CEFRLevel
    plan: GoalPlan | null
    /** Mastery dates (YYYY-MM-DD) for this language, unit id → date. */
    masteredDates: Record<string, string>
    /** YYYY-MM-DD — injected for testability. */
    today: string
}

export interface Trajectory {
    status: TrajectoryStatus
    /** Units still to master from the current level through the target level. */
    remainingUnits: number
    /** Units already mastered within the goal span (current..target). */
    doneUnits: number
    /** 0-100 progress through the goal span. */
    progressPct: number
    daysLeft: number | null
    /** Pace needed to hit the date (units/week). */
    requiredPerWeek: number | null
    /** Observed pace over the trailing window (units/week). */
    actualPerWeek: number | null
}

/** Trailing window over which observed pace is measured. */
export const PACE_WINDOW_DAYS = 28
/** Minimum mastery events in the window before a pace estimate is honest. */
const MIN_PACE_EVENTS = 2
/** ±15% band around required pace counts as "on track". */
const ON_TRACK_BAND = 0.15

function daysBetween(fromYmd: string, toYmd: string): number {
    const from = new Date(fromYmd + "T00:00:00")
    const to = new Date(toYmd + "T00:00:00")
    return Math.round((to.getTime() - from.getTime()) / 86_400_000)
}

export function computeTrajectory(input: TrajectoryInput): Trajectory {
    const { unitTotalsByLevel, masteredByLevel, currentLevel, plan, masteredDates, today } = input

    const none: Trajectory = {
        status: "no-plan", remainingUnits: 0, doneUnits: 0, progressPct: 0,
        daysLeft: null, requiredPerWeek: null, actualPerWeek: null,
    }
    if (!plan) return none

    const currentIdx = CEFR_LEVELS.indexOf(currentLevel)
    const targetIdx = CEFR_LEVELS.indexOf(plan.targetLevel)
    if (targetIdx < currentIdx) {
        return { ...none, status: "achieved", progressPct: 100 }
    }

    // Goal span: every level from current through target (inclusive).
    const spanLevels = CEFR_LEVELS.slice(currentIdx, targetIdx + 1)
    let total = 0
    let done = 0
    for (const level of spanLevels) {
        total += unitTotalsByLevel[level] ?? 0
        done += Math.min(masteredByLevel[level] ?? 0, unitTotalsByLevel[level] ?? 0)
    }
    const remaining = Math.max(0, total - done)
    const progressPct = total ? Math.round(done / total * 100) : 0

    if (remaining === 0 && total > 0) {
        // All span content mastered — level test away from the goal.
        return { ...none, status: "achieved", doneUnits: done, progressPct: 100 }
    }

    if (!plan.targetDate) {
        return { ...none, status: "no-date", remainingUnits: remaining, doneUnits: done, progressPct }
    }

    const daysLeft = daysBetween(today, plan.targetDate)
    const requiredPerWeek = daysLeft > 0 ? (remaining / daysLeft) * 7 : Infinity

    // Observed pace: mastery events inside the trailing window.
    const windowStart = new Date(today + "T00:00:00")
    windowStart.setDate(windowStart.getDate() - PACE_WINDOW_DAYS)
    const windowStartStr = windowStart.toISOString().slice(0, 10)
    const recentEvents = Object.values(masteredDates)
        .filter(d => d > windowStartStr && d <= today).length

    if (recentEvents < MIN_PACE_EVENTS) {
        return {
            status: "insufficient-data", remainingUnits: remaining, doneUnits: done, progressPct,
            daysLeft, requiredPerWeek: round1(requiredPerWeek), actualPerWeek: null,
        }
    }

    const actualPerWeek = (recentEvents / PACE_WINDOW_DAYS) * 7

    let status: TrajectoryStatus
    if (daysLeft <= 0) status = "behind"
    else if (actualPerWeek >= requiredPerWeek * (1 + ON_TRACK_BAND)) status = "ahead"
    else if (actualPerWeek >= requiredPerWeek * (1 - ON_TRACK_BAND)) status = "on-track"
    else status = "behind"

    return {
        status, remainingUnits: remaining, doneUnits: done, progressPct,
        daysLeft, requiredPerWeek: round1(requiredPerWeek), actualPerWeek: round1(actualPerWeek),
    }
}

function round1(n: number): number {
    return Number.isFinite(n) ? Math.round(n * 10) / 10 : n
}
