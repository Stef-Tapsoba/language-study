// store/statsActivity.test.ts
// Tests for getLastActivityDate (useStatsStore.ts).

import { describe, it, expect } from "vitest"
import { getLastActivityDate, type StatsData } from "./useStatsStore"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function dateOffset(daysBack: number): string {
    const d = new Date()
    d.setDate(d.getDate() - daysBack)
    return d.toISOString().slice(0, 10)
}

const today = dateOffset(0)
const yesterday = dateOffset(1)
const twoDaysAgo = dateOffset(2)
const tenDaysAgo = dateOffset(10)

function activeDay(): { reviewed: number; correct: number; acts: number; qTotal: number; qCorrect: number } {
    return { reviewed: 1, correct: 1, acts: 1, qTotal: 1, qCorrect: 1 }
}

function inactiveDay(): { reviewed: number; correct: number; acts: number; qTotal: number; qCorrect: number } {
    return { reviewed: 0, correct: 0, acts: 0, qTotal: 0, qCorrect: 0 }
}

// ---------------------------------------------------------------------------
// getLastActivityDate
// ---------------------------------------------------------------------------

describe("getLastActivityDate", () => {
    it("returns null for empty StatsData", () => {
        expect(getLastActivityDate({}, "es")).toBeNull()
    })

    it("returns null when the language has no entry in StatsData", () => {
        const data: StatsData = { fr: { [today]: activeDay() } }
        expect(getLastActivityDate(data, "es")).toBeNull()
    })

    it("returns null when the language map is present but empty", () => {
        const data: StatsData = { es: {} }
        expect(getLastActivityDate(data, "es")).toBeNull()
    })

    it("returns null when all days for the language have zero activity", () => {
        const data: StatsData = {
            es: {
                [today]:     inactiveDay(),
                [yesterday]: inactiveDay(),
            },
        }
        expect(getLastActivityDate(data, "es")).toBeNull()
    })

    it("returns the single active date when there is only one entry", () => {
        const data: StatsData = { es: { [today]: activeDay() } }
        expect(getLastActivityDate(data, "es")).toBe(today)
    })

    it("returns today's date when today has activity", () => {
        const data: StatsData = {
            es: {
                [today]:     activeDay(),
                [yesterday]: activeDay(),
            },
        }
        expect(getLastActivityDate(data, "es")).toBe(today)
    })

    it("returns the most recent active date across multiple days", () => {
        const data: StatsData = {
            es: {
                [tenDaysAgo]: activeDay(),
                [twoDaysAgo]: activeDay(),
                [yesterday]:  activeDay(),
            },
        }
        expect(getLastActivityDate(data, "es")).toBe(yesterday)
    })

    it("ignores inactive days (zero acts + zero reviewed) when finding most recent", () => {
        const data: StatsData = {
            es: {
                [yesterday]:  inactiveDay(),   // most recent by date, but inert
                [twoDaysAgo]: activeDay(),      // last real activity
            },
        }
        expect(getLastActivityDate(data, "es")).toBe(twoDaysAgo)
    })

    it("counts a day as active if reviewed > 0 even if acts === 0", () => {
        const data: StatsData = {
            es: {
                [today]: { reviewed: 3, correct: 2, acts: 0, qTotal: 0, qCorrect: 0 },
            },
        }
        expect(getLastActivityDate(data, "es")).toBe(today)
    })

    it("counts a day as active if acts > 0 even if reviewed === 0", () => {
        const data: StatsData = {
            es: {
                [today]: { reviewed: 0, correct: 0, acts: 2, qTotal: 1, qCorrect: 1 },
            },
        }
        expect(getLastActivityDate(data, "es")).toBe(today)
    })

    it("is isolated per language — does not bleed across languages", () => {
        const data: StatsData = {
            es: { [tenDaysAgo]: activeDay() },
            fr: { [today]:      activeDay() },
        }
        expect(getLastActivityDate(data, "es")).toBe(tenDaysAgo)
        expect(getLastActivityDate(data, "fr")).toBe(today)
    })

    it("returns the correct date when dates are stored in non-sorted key order", () => {
        // JavaScript objects don't guarantee insertion order for string keys that
        // happen to sort differently — getLastActivityDate must sort by date value.
        const data: StatsData = {
            es: {
                [today]:      activeDay(),
                [tenDaysAgo]: activeDay(),
                [yesterday]:  activeDay(),
            },
        }
        expect(getLastActivityDate(data, "es")).toBe(today)
    })
})
