// hooks/useGlobalStreak.test.ts
//
// Tests the useGlobalStreak hook, which wraps getGlobalStreak() from the
// useStatsStore. We manipulate the Zustand store directly (setState) to
// control the stats data, matching the pattern used in useBreakDetection.test.ts.

import { describe, it, expect, beforeEach } from "vitest"
import { renderHook } from "@testing-library/react"
import { useGlobalStreak } from "./useGlobalStreak"
import { useStatsStore, type StatsData } from "../store/useStatsStore"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function dateOffset(daysBack: number): string {
    const d = new Date()
    d.setDate(d.getDate() - daysBack)
    return d.toISOString().slice(0, 10)
}

function dayEntry(acts = 1) {
    return { reviewed: acts, correct: acts, acts, qTotal: acts, qCorrect: acts }
}

// ---------------------------------------------------------------------------
// Store reset between tests
// ---------------------------------------------------------------------------

beforeEach(() => {
    useStatsStore.setState({ data: {} })
})

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("useGlobalStreak", () => {
    it("returns 0 when there is no activity data at all", () => {
        const { result } = renderHook(() => useGlobalStreak())
        expect(result.current).toBe(0)
    })

    it("returns 0 when the only data has zero acts and zero reviewed", () => {
        const data: StatsData = {
            es: {
                [dateOffset(1)]: { reviewed: 0, correct: 0, acts: 0, qTotal: 0, qCorrect: 0 },
            },
        }
        useStatsStore.setState({ data })
        const { result } = renderHook(() => useGlobalStreak())
        expect(result.current).toBe(0)
    })

    it("returns 1 when there is activity only today", () => {
        const data: StatsData = {
            es: { [dateOffset(0)]: dayEntry() },
        }
        useStatsStore.setState({ data })
        const { result } = renderHook(() => useGlobalStreak())
        expect(result.current).toBe(1)
    })

    it("returns 1 when there is activity only yesterday (streak preserved, not yet broken)", () => {
        // The streak counts from yesterday when today has no activity.
        const data: StatsData = {
            es: { [dateOffset(1)]: dayEntry() },
        }
        useStatsStore.setState({ data })
        const { result } = renderHook(() => useGlobalStreak())
        expect(result.current).toBe(1)
    })

    it("returns correct streak for 3 consecutive days ending today", () => {
        const data: StatsData = {
            es: {
                [dateOffset(0)]: dayEntry(),
                [dateOffset(1)]: dayEntry(),
                [dateOffset(2)]: dayEntry(),
            },
        }
        useStatsStore.setState({ data })
        const { result } = renderHook(() => useGlobalStreak())
        expect(result.current).toBe(3)
    })

    it("streak resets to the unbroken tail after a gap", () => {
        // Days 0, 1, 2 are active; day 3 is missing; days 4 and 5 are active.
        // The streak starting from today should be 3 (days 0-2), not 5.
        const data: StatsData = {
            es: {
                [dateOffset(0)]: dayEntry(),
                [dateOffset(1)]: dayEntry(),
                [dateOffset(2)]: dayEntry(),
                // day 3 absent — gap breaks the chain here
                [dateOffset(4)]: dayEntry(),
                [dateOffset(5)]: dayEntry(),
            },
        }
        useStatsStore.setState({ data })
        const { result } = renderHook(() => useGlobalStreak())
        expect(result.current).toBe(3)
    })

    it("counts activity from multiple languages on the same day as a single streak day", () => {
        // Both es and fr have an entry for today — the streak should still be 1,
        // not 2, because it counts calendar days, not language×day combinations.
        const data: StatsData = {
            es: { [dateOffset(0)]: dayEntry() },
            fr: { [dateOffset(0)]: dayEntry() },
        }
        useStatsStore.setState({ data })
        const { result } = renderHook(() => useGlobalStreak())
        expect(result.current).toBe(1)
    })

    it("extends streak when different languages contribute on different days", () => {
        // es active 2 days ago, fr active yesterday, ko active today → streak = 3
        const data: StatsData = {
            es: { [dateOffset(2)]: dayEntry() },
            fr: { [dateOffset(1)]: dayEntry() },
            ko: { [dateOffset(0)]: dayEntry() },
        }
        useStatsStore.setState({ data })
        const { result } = renderHook(() => useGlobalStreak())
        expect(result.current).toBe(3)
    })

    it("a gap in one language does not break the streak if another language covered that day", () => {
        // es: active today and 2 days ago (skips yesterday)
        // fr: active yesterday — fills the gap
        const data: StatsData = {
            es: {
                [dateOffset(0)]: dayEntry(),
                [dateOffset(2)]: dayEntry(),
            },
            fr: {
                [dateOffset(1)]: dayEntry(),
            },
        }
        useStatsStore.setState({ data })
        const { result } = renderHook(() => useGlobalStreak())
        expect(result.current).toBe(3)
    })
})
