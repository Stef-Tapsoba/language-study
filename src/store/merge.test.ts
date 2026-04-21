// store/merge.test.ts

import { describe, it, expect } from "vitest"
import { mergeSRS, mergeStats } from "./merge"
import { INITIAL_STATE } from "@myorg/srs"
import type { SRSCardState } from "@myorg/srs"
import type { StatsData } from "./useStatsStore"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeCard(reviewCount: number, streak = 0): SRSCardState {
    return { ...INITIAL_STATE, reviewCount, streak }
}

function makeDay(reviewed: number, correct: number, acts = 0, qTotal = 0, qCorrect = 0) {
    return { reviewed, correct, acts, qTotal, qCorrect }
}

// ---------------------------------------------------------------------------
// mergeSRS
// ---------------------------------------------------------------------------

describe("mergeSRS", () => {
    it("current card wins when reviewCount is equal", () => {
        const current = { es: { "v-1": makeCard(3, 2) } }
        const imported = { es: { "v-1": makeCard(3, 0) } }
        const result = mergeSRS(current, imported)
        // equal reviewCount → current wins (card.reviewCount >= imp.reviewCount)
        expect(result["es"]["v-1"].streak).toBe(2)
    })

    it("current card wins when reviewCount is greater than imported", () => {
        const current = { es: { "v-1": makeCard(5) } }
        const imported = { es: { "v-1": makeCard(2) } }
        const result = mergeSRS(current, imported)
        expect(result["es"]["v-1"].reviewCount).toBe(5)
    })

    it("imported card wins when imported reviewCount is greater than current", () => {
        const current = { es: { "v-1": makeCard(1) } }
        const imported = { es: { "v-1": makeCard(10) } }
        const result = mergeSRS(current, imported)
        expect(result["es"]["v-1"].reviewCount).toBe(10)
    })

    it("includes cards that are only in imported", () => {
        const current = { es: { "v-1": makeCard(2) } }
        const imported = { es: { "v-1": makeCard(2), "v-only-imported": makeCard(7) } }
        const result = mergeSRS(current, imported)
        expect(result["es"]["v-only-imported"]).toBeDefined()
        expect(result["es"]["v-only-imported"].reviewCount).toBe(7)
    })

    it("includes cards that are only in current", () => {
        const current = { es: { "v-only-current": makeCard(4) } }
        const imported = { es: {} }
        const result = mergeSRS(current, imported)
        expect(result["es"]["v-only-current"]).toBeDefined()
        expect(result["es"]["v-only-current"].reviewCount).toBe(4)
    })

    it("includes languages that are only in imported", () => {
        const current = { es: { "v-1": makeCard(1) } }
        const imported = { fr: { "v-fr": makeCard(3) } }
        const result = mergeSRS(current, imported)
        expect(result["fr"]["v-fr"].reviewCount).toBe(3)
    })

    it("returns empty result when both current and imported are empty", () => {
        expect(mergeSRS({}, {})).toEqual({})
    })

    it("returns imported intact when current is empty", () => {
        const imported = { es: { "v-1": makeCard(5) } }
        const result = mergeSRS({}, imported)
        expect(result["es"]["v-1"].reviewCount).toBe(5)
    })

    it("returns current intact when imported is empty", () => {
        const current = { es: { "v-1": makeCard(3) } }
        const result = mergeSRS(current, {})
        expect(result["es"]["v-1"].reviewCount).toBe(3)
    })
})

// ---------------------------------------------------------------------------
// mergeStats
// ---------------------------------------------------------------------------

describe("mergeStats", () => {
    it("keeps current value per-field when current > imported", () => {
        const current: StatsData = { es: { "2026-04-01": makeDay(10, 8, 3, 5, 4) } }
        const imported: StatsData = { es: { "2026-04-01": makeDay(6, 5, 1, 3, 2) } }
        const result = mergeStats(current, imported)
        expect(result["es"]["2026-04-01"]).toEqual(makeDay(10, 8, 3, 5, 4))
    })

    it("keeps imported value per-field when imported > current", () => {
        const current: StatsData = { es: { "2026-04-01": makeDay(2, 1, 0, 1, 0) } }
        const imported: StatsData = { es: { "2026-04-01": makeDay(9, 7, 4, 6, 5) } }
        const result = mergeStats(current, imported)
        expect(result["es"]["2026-04-01"]).toEqual(makeDay(9, 7, 4, 6, 5))
    })

    it("takes per-field max when fields differ between current and imported", () => {
        const current: StatsData = { es: { "2026-04-01": makeDay(10, 3, 5, 2, 1) } }
        const imported: StatsData = { es: { "2026-04-01": makeDay(4, 8, 1, 7, 6) } }
        const result = mergeStats(current, imported)
        expect(result["es"]["2026-04-01"]).toEqual(makeDay(10, 8, 5, 7, 6))
    })

    it("includes days that are only in imported", () => {
        const current: StatsData = { es: { "2026-04-01": makeDay(5, 4) } }
        const imported: StatsData = { es: { "2026-04-02": makeDay(3, 2) } }
        const result = mergeStats(current, imported)
        expect(result["es"]["2026-04-02"]).toEqual(makeDay(3, 2))
    })

    it("includes days that are only in current", () => {
        const current: StatsData = { es: { "2026-04-03": makeDay(7, 6) } }
        const imported: StatsData = { es: {} }
        const result = mergeStats(current, imported)
        expect(result["es"]["2026-04-03"]).toEqual(makeDay(7, 6))
    })

    it("includes languages that are only in imported", () => {
        const current: StatsData = { es: { "2026-04-01": makeDay(1, 1) } }
        const imported: StatsData = { fr: { "2026-04-01": makeDay(4, 3) } }
        const result = mergeStats(current, imported)
        expect(result["fr"]["2026-04-01"]).toEqual(makeDay(4, 3))
    })

    it("returns empty result when both are empty", () => {
        expect(mergeStats({}, {})).toEqual({})
    })

    it("returns imported intact when current is empty", () => {
        const imported: StatsData = { es: { "2026-04-01": makeDay(5, 4) } }
        const result = mergeStats({}, imported)
        expect(result["es"]["2026-04-01"]).toEqual(makeDay(5, 4))
    })
})
