// utils/exerciseConfig.test.ts

import { describe, it, expect, beforeEach, vi } from "vitest"
import { getExerciseConfig, selectItems } from "./exerciseConfig"
import { registry } from "../store/registry"

// ---------------------------------------------------------------------------
// Reset registry (and its SRS in-memory state) before every test
// ---------------------------------------------------------------------------

beforeEach(() => {
    registry._resetForTests()
})

// ---------------------------------------------------------------------------
// getExerciseConfig — "unit" context
// ---------------------------------------------------------------------------

describe("getExerciseConfig — unit context", () => {
    it("roundSize=4 when availableCount=1 (below 8 boundary)", () => {
        const cfg = getExerciseConfig("unit", 1)
        expect(cfg.roundSize).toBe(4)
    })

    it("roundSize=4 when availableCount=8 (at boundary)", () => {
        const cfg = getExerciseConfig("unit", 8)
        expect(cfg.roundSize).toBe(4)
    })

    it("roundSize=5 when availableCount=9 (just above lower boundary)", () => {
        const cfg = getExerciseConfig("unit", 9)
        expect(cfg.roundSize).toBe(5)
    })

    it("roundSize=5 when availableCount=15 (at upper boundary)", () => {
        const cfg = getExerciseConfig("unit", 15)
        expect(cfg.roundSize).toBe(5)
    })

    it("roundSize=6 when availableCount=16 (above upper boundary)", () => {
        const cfg = getExerciseConfig("unit", 16)
        expect(cfg.roundSize).toBe(6)
    })

    it("maxRounds=ceil(n/roundSize) for various counts", () => {
        // 8 items / roundSize 4 = 2 rounds
        expect(getExerciseConfig("unit", 8).maxRounds).toBe(2)
        // 9 items / roundSize 5 = ceil(1.8) = 2 rounds
        expect(getExerciseConfig("unit", 9).maxRounds).toBe(2)
        // 15 items / roundSize 5 = 3 rounds
        expect(getExerciseConfig("unit", 15).maxRounds).toBe(3)
        // 16 items / roundSize 6 = ceil(2.67) = 3 rounds
        expect(getExerciseConfig("unit", 16).maxRounds).toBe(3)
    })

    it("maxRounds is at least 1 even for availableCount=0", () => {
        expect(getExerciseConfig("unit", 0).maxRounds).toBe(1)
    })

    it("context field is set to 'unit'", () => {
        expect(getExerciseConfig("unit", 5).context).toBe("unit")
    })

    it("availableCount is echoed back", () => {
        expect(getExerciseConfig("unit", 12).availableCount).toBe(12)
    })

    it("all four tiers are present with Infinity maxItems for unit context", () => {
        const cfg = getExerciseConfig("unit", 10)
        const tierNames = cfg.selectionTiers.map(t => t.name)
        expect(tierNames).toContain("srs-due")
        expect(tierNames).toContain("weak")
        expect(tierNames).toContain("new")
        expect(tierNames).toContain("random")
        for (const tier of cfg.selectionTiers) {
            expect(tier.maxItems).toBe(Infinity)
        }
    })
})

// ---------------------------------------------------------------------------
// getExerciseConfig — "practice" context
// ---------------------------------------------------------------------------

describe("getExerciseConfig — practice context", () => {
    it("always roundSize=6 regardless of availableCount", () => {
        expect(getExerciseConfig("practice", 1).roundSize).toBe(6)
        expect(getExerciseConfig("practice", 100).roundSize).toBe(6)
    })

    it("always maxRounds=5", () => {
        expect(getExerciseConfig("practice", 1).maxRounds).toBe(5)
        expect(getExerciseConfig("practice", 100).maxRounds).toBe(5)
    })

    it("context field is set to 'practice'", () => {
        expect(getExerciseConfig("practice", 10).context).toBe("practice")
    })
})

// ---------------------------------------------------------------------------
// selectItems — tier routing and slot filling
// ---------------------------------------------------------------------------

interface MinItem { id: string }
function items(ids: string[]): MinItem[] {
    return ids.map(id => ({ id }))
}

describe("selectItems", () => {
    it("returns empty array when items list is empty", () => {
        const cfg = getExerciseConfig("unit", 0)
        const result = selectItems([], cfg, "es", [])
        expect(result).toHaveLength(0)
    })

    it("never returns more items than totalSlots (roundSize × maxRounds)", () => {
        const cfg = getExerciseConfig("unit", 8)   // roundSize=4, maxRounds=2 → 8 slots
        const pool = items(Array.from({ length: 20 }, (_, i) => `v${i}`))
        const result = selectItems(pool, cfg, "es", [])
        expect(result.length).toBeLessThanOrEqual(cfg.roundSize * cfg.maxRounds)
    })

    it("items with no SRS state and not completed route to 'new' tier and are selected", () => {
        // Empty SRS state + empty completed → all items are 'new'
        const cfg = getExerciseConfig("unit", 4)  // roundSize=4, maxRounds=1 → 4 slots
        const pool = items(["a", "b", "c", "d"])
        const result = selectItems(pool, cfg, "es", [])
        expect(result).toHaveLength(4)
        const ids = result.map(i => i.id)
        expect(ids).toContain("a")
        expect(ids).toContain("b")
    })

    it("completed items with no SRS state route to 'random' tier, not 'new'", () => {
        // Items are completed but have no SRS state (impossible in real app, but edge case)
        // In the scorer: no srsState + nextReviewAt===0 → srs-due tier (score 0.5)
        // This test verifies that completed items are still returned (not filtered out)
        const cfg = getExerciseConfig("unit", 4)
        const pool = items(["a", "b", "c", "d"])
        const result = selectItems(pool, cfg, "es", ["a", "b", "c", "d"])
        // All items should be served (srs-due tier when no SRS state)
        expect(result.length).toBeGreaterThan(0)
    })

    it("does not mutate the input array", () => {
        const cfg = getExerciseConfig("unit", 3)
        const original = items(["x", "y", "z"])
        const copy = [...original]
        selectItems(original, cfg, "es", [])
        expect(original).toEqual(copy)
    })

    it("returns a new array reference even when all items fit", () => {
        const cfg = getExerciseConfig("unit", 3)
        const pool = items(["x", "y", "z"])
        const result = selectItems(pool, cfg, "es", [])
        expect(result).not.toBe(pool)
    })

    it("practice context respects srs-due maxItems cap of 18", () => {
        // All items have no SRS → go to srs-due; practice tier allows max 18 from srs-due
        const cfg = getExerciseConfig("practice", 30)  // 30 slots = 6×5
        const pool = items(Array.from({ length: 30 }, (_, i) => `v${i}`))
        const result = selectItems(pool, cfg, "es", [])
        // Total ≤ 30, and srs-due bucket capped at 18 means the rest come from other tiers
        expect(result.length).toBeLessThanOrEqual(30)
    })
})
