// domain/plateau.test.ts

import { describe, it, expect } from "vitest"
import { detectPlateau, WINDOW_DAYS, MIN_SKILL_ATTEMPTS } from "./plateau"
import type { StatsData, DayStats } from "../store/useStatsStore"
import type { Skill } from "./skills"

const TODAY = "2026-07-15"
const LANG = "fr"

function day(offset: number): string {
    const d = new Date(TODAY + "T00:00:00")
    d.setDate(d.getDate() - offset)
    return d.toISOString().slice(0, 10)
}

function emptyDay(): DayStats {
    return { reviewed: 0, correct: 0, acts: 0, qTotal: 0, qCorrect: 0 }
}

/**
 * Build a StatsData series: recent window (offsets 0-13) and prior window
 * (offsets 14-27) with the given per-skill totals spread over 2 days each.
 */
function series(config: {
    skill?: Skill
    recent?: { t: number; c: number }
    prior?: { t: number; c: number }
    recentReviews?: { reviewed: number; correct: number }
    priorReviews?: { reviewed: number; correct: number }
}): StatsData {
    const langDays: Record<string, DayStats> = {}
    const put = (offset: number, mutate: (d: DayStats) => void) => {
        const key = day(offset)
        langDays[key] = langDays[key] ?? emptyDay()
        mutate(langDays[key])
    }
    if (config.skill && config.recent) {
        put(2, d => { d.skills = { [config.skill!]: { t: config.recent!.t, c: config.recent!.c } } })
    }
    if (config.skill && config.prior) {
        put(WINDOW_DAYS + 2, d => { d.skills = { [config.skill!]: { t: config.prior!.t, c: config.prior!.c } } })
    }
    if (config.recentReviews) {
        put(3, d => { d.reviewed = config.recentReviews!.reviewed; d.correct = config.recentReviews!.correct })
    }
    if (config.priorReviews) {
        put(WINDOW_DAYS + 3, d => { d.reviewed = config.priorReviews!.reviewed; d.correct = config.priorReviews!.correct })
    }
    return { [LANG]: langDays }
}

describe("detectPlateau — guards", () => {
    it("returns none for empty data", () => {
        expect(detectPlateau({}, LANG, TODAY).tier).toBe("none")
    })

    it("never fires below the per-skill volume guard", () => {
        const data = series({
            skill: "CE",
            recent: { t: MIN_SKILL_ATTEMPTS - 1, c: 2 },
            prior:  { t: MIN_SKILL_ATTEMPTS - 1, c: 8 },
        })
        expect(detectPlateau(data, LANG, TODAY).tier).toBe("none")
    })

    it("never fires when only one window has volume", () => {
        const data = series({ skill: "CE", recent: { t: 20, c: 10 } })
        expect(detectPlateau(data, LANG, TODAY).tier).toBe("none")
    })
})

describe("detectPlateau — skill signals", () => {
    it("flags a stagnant skill (no improvement) as notice", () => {
        const data = series({
            skill: "CE",
            recent: { t: 20, c: 14 },   // 70%
            prior:  { t: 20, c: 14 },   // 70% — delta 0
        })
        const r = detectPlateau(data, LANG, TODAY)
        expect(r.tier).toBe("notice")
        expect(r.skills).toEqual([{ skill: "CE", trend: "stagnant", recentPct: 70, priorPct: 70 }])
    })

    it("flags a declining skill as concern", () => {
        const data = series({
            skill: "CO",
            recent: { t: 20, c: 12 },   // 60%
            prior:  { t: 20, c: 16 },   // 80% — delta -20
        })
        const r = detectPlateau(data, LANG, TODAY)
        expect(r.tier).toBe("concern")
        expect(r.skills[0].trend).toBe("declining")
    })

    it("does not flag an improving skill", () => {
        const data = series({
            skill: "EE",
            recent: { t: 20, c: 17 },   // 85%
            prior:  { t: 20, c: 14 },   // 70% — improving
        })
        expect(detectPlateau(data, LANG, TODAY).tier).toBe("none")
    })
})

describe("detectPlateau — retention signal", () => {
    it("flags declining flashcard retention as concern", () => {
        const data = series({
            recentReviews: { reviewed: 30, correct: 18 },   // 60%
            priorReviews:  { reviewed: 30, correct: 24 },   // 80%
        })
        const r = detectPlateau(data, LANG, TODAY)
        expect(r.tier).toBe("concern")
        expect(r.retentionDeclining).toBe(true)
    })

    it("ignores retention below the review volume guard", () => {
        const data = series({
            recentReviews: { reviewed: 10, correct: 3 },
            priorReviews:  { reviewed: 10, correct: 9 },
        })
        expect(detectPlateau(data, LANG, TODAY).retentionDeclining).toBe(false)
    })
})
