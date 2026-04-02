// hooks/useBreakDetection.test.ts
//
// Tests the calcTier boundary logic (exported indirectly through the hook) and
// the getLastActivityDate integration via a direct import of the pure function.
// The hook itself (useBreakDetection) requires a Zustand store — we test it via
// renderHook + store injection.

import { describe, it, expect, beforeEach, vi, afterEach } from "vitest"
import { renderHook } from "@testing-library/react"
import { useBreakDetection } from "./useBreakDetection"
import { useStatsStore, type StatsData } from "../store/useStatsStore"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function dateOffset(daysBack: number): string {
    const d = new Date()
    d.setDate(d.getDate() - daysBack)
    return d.toISOString().slice(0, 10)
}

function makeData(langId: string, daysBack: number): StatsData {
    return {
        [langId]: {
            [dateOffset(daysBack)]: { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
        },
    }
}

// ---------------------------------------------------------------------------
// Store reset between tests
// ---------------------------------------------------------------------------

beforeEach(() => {
    useStatsStore.setState({ data: {} })
})

afterEach(() => {
    vi.useRealTimers()
})

// ---------------------------------------------------------------------------
// Hook integration — tier boundaries via real daysSince values
// ---------------------------------------------------------------------------

describe("useBreakDetection — tier classification via daysSince", () => {
    it("returns tier='none' and daysSince=-1 when there is no activity history", () => {
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("none")
        expect(result.current.daysSince).toBe(-1)
        expect(result.current.lastActivityDate).toBeNull()
    })

    it("returns tier='none' when last activity was today (0 days ago)", () => {
        useStatsStore.setState({ data: makeData("es", 0) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("none")
        expect(result.current.daysSince).toBe(0)
    })

    it("returns tier='none' when last activity was 1 day ago", () => {
        useStatsStore.setState({ data: makeData("es", 1) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("none")
        expect(result.current.daysSince).toBe(1)
    })

    it("returns tier='none' when last activity was 2 days ago (boundary)", () => {
        useStatsStore.setState({ data: makeData("es", 2) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("none")
        expect(result.current.daysSince).toBe(2)
    })

    it("returns tier='light' when last activity was 3 days ago", () => {
        useStatsStore.setState({ data: makeData("es", 3) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("light")
        expect(result.current.daysSince).toBe(3)
    })

    it("returns tier='light' when last activity was 6 days ago (boundary)", () => {
        useStatsStore.setState({ data: makeData("es", 6) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("light")
        expect(result.current.daysSince).toBe(6)
    })

    it("returns tier='medium' when last activity was 7 days ago", () => {
        useStatsStore.setState({ data: makeData("es", 7) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("medium")
        expect(result.current.daysSince).toBe(7)
    })

    it("returns tier='medium' when last activity was 13 days ago (boundary)", () => {
        useStatsStore.setState({ data: makeData("es", 13) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("medium")
        expect(result.current.daysSince).toBe(13)
    })

    it("returns tier='heavy' when last activity was 14 days ago", () => {
        useStatsStore.setState({ data: makeData("es", 14) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("heavy")
        expect(result.current.daysSince).toBe(14)
    })

    it("returns tier='heavy' when last activity was 27 days ago (boundary)", () => {
        useStatsStore.setState({ data: makeData("es", 27) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("heavy")
        expect(result.current.daysSince).toBe(27)
    })

    it("returns tier='critical' when last activity was 28 days ago", () => {
        useStatsStore.setState({ data: makeData("es", 28) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("critical")
        expect(result.current.daysSince).toBe(28)
    })

    it("returns tier='critical' when last activity was 60 days ago", () => {
        useStatsStore.setState({ data: makeData("es", 60) })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.tier).toBe("critical")
    })
})

describe("useBreakDetection — lastActivityDate returned correctly", () => {
    it("returns the most recent active date string in ISO format", () => {
        const recentDate = dateOffset(3)
        const olderDate = dateOffset(10)
        useStatsStore.setState({
            data: {
                es: {
                    [olderDate]: { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
                    [recentDate]: { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
                },
            },
        })
        const { result } = renderHook(() => useBreakDetection("es"))
        expect(result.current.lastActivityDate).toBe(recentDate)
    })

    it("ignores days with zero acts and zero reviewed (inert entries)", () => {
        const inertDate = dateOffset(1)
        const activeDate = dateOffset(5)
        useStatsStore.setState({
            data: {
                es: {
                    [inertDate]: { reviewed: 0, correct: 0, acts: 0, qTotal: 0, qCorrect: 0 },
                    [activeDate]: { reviewed: 2, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 },
                },
            },
        })
        const { result } = renderHook(() => useBreakDetection("es"))
        // inertDate has no activity, so the last active date is activeDate (5 days ago)
        expect(result.current.lastActivityDate).toBe(activeDate)
        expect(result.current.daysSince).toBe(5)
    })

    it("is isolated per language — uses only the requested langId", () => {
        useStatsStore.setState({
            data: {
                es: { [dateOffset(1)]: { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 } },
                fr: { [dateOffset(10)]: { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 } },
            },
        })
        const { result: esResult } = renderHook(() => useBreakDetection("es"))
        const { result: frResult } = renderHook(() => useBreakDetection("fr"))
        expect(esResult.current.daysSince).toBe(1)
        expect(frResult.current.daysSince).toBe(10)
    })
})
