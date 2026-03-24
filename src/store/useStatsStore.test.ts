import { describe, it, expect, beforeEach } from "vitest"
import {
    useStatsStore,
    getGlobalStreak,
    getHistory,
    getTotalReviews,
    getOverallAccuracy,
    type StatsData,
} from "./useStatsStore"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Return an ISO date string offset by `daysBack` days from today. */
function dateOffset(daysBack: number): string {
    const d = new Date()
    d.setDate(d.getDate() - daysBack)
    return d.toISOString().slice(0, 10)
}

const today = dateOffset(0)
const yesterday = dateOffset(1)
const twoDaysAgo = dateOffset(2)

// ---------------------------------------------------------------------------
// Store reset between tests
// ---------------------------------------------------------------------------

beforeEach(() => {
    useStatsStore.setState({ data: {} })
})

// ============================================================================
// Write actions
// ============================================================================

describe("recordReview", () => {
    it("increments reviewed, acts, qTotal for an incorrect answer", () => {
        useStatsStore.getState().recordReview("spanish", false)
        const day = useStatsStore.getState().data["spanish"][today]
        expect(day.reviewed).toBe(1)
        expect(day.acts).toBe(1)
        expect(day.qTotal).toBe(1)
        expect(day.correct).toBe(0)
        expect(day.qCorrect).toBe(0)
    })

    it("also increments correct and qCorrect when correct=true", () => {
        useStatsStore.getState().recordReview("spanish", true)
        const day = useStatsStore.getState().data["spanish"][today]
        expect(day.reviewed).toBe(1)
        expect(day.correct).toBe(1)
        expect(day.qCorrect).toBe(1)
    })

    it("accumulates over multiple calls", () => {
        useStatsStore.getState().recordReview("spanish", true)
        useStatsStore.getState().recordReview("spanish", true)
        useStatsStore.getState().recordReview("spanish", false)
        const day = useStatsStore.getState().data["spanish"][today]
        expect(day.reviewed).toBe(3)
        expect(day.correct).toBe(2)
        expect(day.qTotal).toBe(3)
        expect(day.qCorrect).toBe(2)
        expect(day.acts).toBe(3)
    })

    it("creates the day entry if it does not exist (backfill)", () => {
        expect(useStatsStore.getState().data["spanish"]).toBeUndefined()
        useStatsStore.getState().recordReview("spanish", false)
        const day = useStatsStore.getState().data["spanish"][today]
        expect(day).toBeDefined()
        expect(day.reviewed).toBe(1)
    })
})

describe("recordQuizAnswer", () => {
    it("increments acts, qTotal, and qCorrect when correct", () => {
        useStatsStore.getState().recordQuizAnswer("french", true)
        const day = useStatsStore.getState().data["french"][today]
        expect(day.acts).toBe(1)
        expect(day.qTotal).toBe(1)
        expect(day.qCorrect).toBe(1)
        // Should not touch flashcard-specific fields
        expect(day.reviewed).toBe(0)
        expect(day.correct).toBe(0)
    })

    it("increments acts and qTotal but not qCorrect when incorrect", () => {
        useStatsStore.getState().recordQuizAnswer("french", false)
        const day = useStatsStore.getState().data["french"][today]
        expect(day.acts).toBe(1)
        expect(day.qTotal).toBe(1)
        expect(day.qCorrect).toBe(0)
    })
})

describe("recordActivity", () => {
    it("increments acts only — no review or quiz fields change", () => {
        useStatsStore.getState().recordActivity("italian")
        const day = useStatsStore.getState().data["italian"][today]
        expect(day.acts).toBe(1)
        expect(day.reviewed).toBe(0)
        expect(day.correct).toBe(0)
        expect(day.qTotal).toBe(0)
        expect(day.qCorrect).toBe(0)
    })
})

describe("resetStats", () => {
    it("removes the language from data entirely", () => {
        useStatsStore.getState().recordReview("spanish", true)
        expect(useStatsStore.getState().data["spanish"]).toBeDefined()
        useStatsStore.getState().resetStats("spanish")
        expect(useStatsStore.getState().data["spanish"]).toBeUndefined()
    })

    it("does not affect other languages", () => {
        useStatsStore.getState().recordReview("spanish", true)
        useStatsStore.getState().recordReview("italian", true)
        useStatsStore.getState().resetStats("spanish")
        expect(useStatsStore.getState().data["italian"]).toBeDefined()
        expect(useStatsStore.getState().data["italian"][today].reviewed).toBe(1)
    })
})

describe("store isolation", () => {
    it("writing for spanish does not affect italian", () => {
        useStatsStore.getState().recordReview("spanish", true)
        useStatsStore.getState().recordQuizAnswer("spanish", true)
        expect(useStatsStore.getState().data["italian"]).toBeUndefined()
    })
})

// ============================================================================
// Legacy data backfill
// ============================================================================

describe("legacy data backfill", () => {
    it("recordActivity on a legacy day (missing acts/qTotal/qCorrect) backfills without NaN/undefined", () => {
        // Simulate data written before acts/qTotal/qCorrect fields existed
        const legacyData: StatsData = {
            spanish: {
                [today]: {
                    reviewed: 5,
                    correct: 3,
                    // acts, qTotal, qCorrect are intentionally absent (legacy)
                } as any,
            },
        }
        useStatsStore.setState({ data: legacyData })
        useStatsStore.getState().recordActivity("spanish")
        const day = useStatsStore.getState().data["spanish"][today]
        expect(day.acts).toBe(1)
        expect(day.qTotal).toBe(0)
        expect(day.qCorrect).toBe(0)
        expect(Number.isNaN(day.acts)).toBe(false)
        expect(Number.isNaN(day.qTotal)).toBe(false)
        expect(Number.isNaN(day.qCorrect)).toBe(false)
        // Original flashcard fields preserved
        expect(day.reviewed).toBe(5)
        expect(day.correct).toBe(3)
    })
})

// ============================================================================
// getGlobalStreak (pure function)
// ============================================================================

describe("getGlobalStreak", () => {
    it("returns 0 for empty data", () => {
        expect(getGlobalStreak({})).toBe(0)
    })

    it("returns 0 when there is no activity today", () => {
        const data: StatsData = {
            spanish: {
                [yesterday]: { reviewed: 3, correct: 2, acts: 1, qTotal: 1, qCorrect: 1 },
            },
        }
        // Yesterday has activity, but today doesn't — streak starts from today so = 0
        expect(getGlobalStreak(data)).toBe(0)
    })

    it("counts consecutive days correctly — 3 days in a row gives streak of 3", () => {
        const data: StatsData = {
            spanish: {
                [today]:      { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
                [yesterday]:  { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
                [twoDaysAgo]: { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
            },
        }
        expect(getGlobalStreak(data)).toBe(3)
    })

    it("stops at the first gap — today + day 3 but not day 2 yields streak of 1", () => {
        // Today has activity, day 2 has none, day 3 has activity — streak = 1
        const data: StatsData = {
            spanish: {
                [today]:      { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
                [twoDaysAgo]: { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
            },
        }
        expect(getGlobalStreak(data)).toBe(1)
    })

    it("counts activity across multiple languages (any language qualifies)", () => {
        const data: StatsData = {
            spanish: {
                [today]:     { reviewed: 0, correct: 0, acts: 1, qTotal: 0, qCorrect: 0 },
                [yesterday]: { reviewed: 0, correct: 0, acts: 0, qTotal: 0, qCorrect: 0 },
            },
            french: {
                // French saves yesterday — together they form a 2-day streak
                [yesterday]: { reviewed: 2, correct: 2, acts: 2, qTotal: 2, qCorrect: 2 },
            },
        }
        expect(getGlobalStreak(data)).toBe(2)
    })
})

// ============================================================================
// getHistory (pure function)
// ============================================================================

describe("getHistory", () => {
    it("returns an array of exactly `days` entries", () => {
        expect(getHistory({}, "spanish", 14)).toHaveLength(14)
        expect(getHistory({}, "spanish", 7)).toHaveLength(7)
    })

    it("pads missing days with reviewed: 0, correct: 0", () => {
        const result = getHistory({}, "spanish", 5)
        for (const entry of result) {
            expect(entry.reviewed).toBe(0)
            expect(entry.correct).toBe(0)
        }
    })

    it("entries are ordered oldest → newest (last entry is today)", () => {
        const result = getHistory({}, "spanish", 5)
        expect(result[result.length - 1].date).toBe(today)
        expect(result[0].date).toBe(dateOffset(4))
    })

    it("fills in real data for a matching date", () => {
        const data: StatsData = {
            spanish: {
                [today]: { reviewed: 7, correct: 5, acts: 3, qTotal: 3, qCorrect: 2 },
            },
        }
        const result = getHistory(data, "spanish", 3)
        const todayEntry = result.find(e => e.date === today)
        expect(todayEntry).toBeDefined()
        expect(todayEntry!.reviewed).toBe(7)
        expect(todayEntry!.correct).toBe(5)
    })

    it("returns all-zero rows for an unknown langId", () => {
        const result = getHistory({}, "nonexistent", 3)
        expect(result.every(e => e.reviewed === 0 && e.correct === 0)).toBe(true)
    })
})

// ============================================================================
// getTotalReviews (pure function)
// ============================================================================

describe("getTotalReviews", () => {
    it("sums all reviewed values across all days", () => {
        const data: StatsData = {
            spanish: {
                [today]:      { reviewed: 4, correct: 3, acts: 1, qTotal: 1, qCorrect: 1 },
                [yesterday]:  { reviewed: 6, correct: 5, acts: 1, qTotal: 1, qCorrect: 1 },
                [twoDaysAgo]: { reviewed: 2, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
            },
        }
        expect(getTotalReviews(data, "spanish")).toBe(12)
    })

    it("returns 0 for an unknown langId", () => {
        expect(getTotalReviews({}, "nonexistent")).toBe(0)
    })

    it("returns 0 when the language has no days", () => {
        const data: StatsData = { spanish: {} }
        expect(getTotalReviews(data, "spanish")).toBe(0)
    })
})

// ============================================================================
// getOverallAccuracy (pure function)
// ============================================================================

describe("getOverallAccuracy", () => {
    it("returns 0 when there are no reviews", () => {
        expect(getOverallAccuracy({}, "spanish")).toBe(0)
    })

    it("returns correct percentage — 8 correct out of 10 → 80", () => {
        const data: StatsData = {
            spanish: {
                [today]: { reviewed: 10, correct: 8, acts: 1, qTotal: 10, qCorrect: 8 },
            },
        }
        expect(getOverallAccuracy(data, "spanish", 14)).toBe(80)
    })

    it("returns 100 when all answers are correct", () => {
        const data: StatsData = {
            spanish: {
                [today]: { reviewed: 5, correct: 5, acts: 1, qTotal: 5, qCorrect: 5 },
            },
        }
        expect(getOverallAccuracy(data, "spanish", 14)).toBe(100)
    })

    it("returns 0 when all answers are wrong", () => {
        const data: StatsData = {
            spanish: {
                [today]: { reviewed: 5, correct: 0, acts: 1, qTotal: 5, qCorrect: 0 },
            },
        }
        expect(getOverallAccuracy(data, "spanish", 14)).toBe(0)
    })

    it("returns 0 for an unknown langId", () => {
        expect(getOverallAccuracy({}, "nonexistent", 14)).toBe(0)
    })

    it("ignores days outside the requested window", () => {
        // Put reviews 20 days ago (outside default 14-day window)
        const data: StatsData = {
            spanish: {
                [dateOffset(20)]: { reviewed: 10, correct: 10, acts: 1, qTotal: 10, qCorrect: 10 },
                [today]:          { reviewed: 10, correct: 5,  acts: 1, qTotal: 10, qCorrect: 5  },
            },
        }
        // Only today's 5/10 should count within the 14-day window
        expect(getOverallAccuracy(data, "spanish", 14)).toBe(50)
    })
})
