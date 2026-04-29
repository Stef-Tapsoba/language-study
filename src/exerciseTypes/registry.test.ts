// exerciseTypes/registry.test.ts

import { describe, it, expect } from "vitest"

// Side-effect import: registers all 9 exercise types
import "./index"

import { getExerciseType, getAllExerciseTypes } from "./registry"

// ---------------------------------------------------------------------------
// Expected exercise type ids
// ---------------------------------------------------------------------------

const EXPECTED_IDS = [
    "sentence-scramble",
    "vocab-matching",
    "cloze",
    "dictation",
    "script-reading",
    "dialogue-completion",
    "vocab-in-context",
    "error-correction",
    "speaking",
] as const

// ---------------------------------------------------------------------------
// getAllExerciseTypes
// ---------------------------------------------------------------------------

describe("getAllExerciseTypes", () => {
    it("returns all 9 registered exercise types", () => {
        const all = getAllExerciseTypes()
        expect(all).toHaveLength(9)
    })

    it("contains every expected exercise type id", () => {
        const ids = getAllExerciseTypes().map(def => def.id)
        for (const expected of EXPECTED_IDS) {
            expect(ids).toContain(expected)
        }
    })
})

// ---------------------------------------------------------------------------
// getExerciseType — valid lookups
// ---------------------------------------------------------------------------

describe("getExerciseType", () => {
    it.each(EXPECTED_IDS)("returns a valid definition for '%s'", (id) => {
        const def = getExerciseType(id)
        expect(def).toBeDefined()
        expect(def!.id).toBe(id)
    })

    it("returns undefined for an unknown type", () => {
        expect(getExerciseType("nonexistent-type")).toBeUndefined()
    })
})

// ---------------------------------------------------------------------------
// Each definition has required fields
// ---------------------------------------------------------------------------

describe("exercise type definitions have required fields", () => {
    it.each(EXPECTED_IDS)("'%s' has component, matchMode, contentType, and fetchItems", (id) => {
        const def = getExerciseType(id)!

        // component — a lazy React component (object with $$typeof or _payload)
        expect(def.component).toBeDefined()

        // matchMode — string or null (dictation, strict, loose, or null)
        expect("matchMode" in def).toBe(true)

        // contentType — non-empty string
        expect(typeof def.contentType).toBe("string")
        expect(def.contentType.length).toBeGreaterThan(0)

        // fetchItems — function
        expect(typeof def.fetchItems).toBe("function")
    })

    it.each(EXPECTED_IDS)("'%s' has a non-empty label", (id) => {
        const def = getExerciseType(id)!
        expect(typeof def.label).toBe("string")
        expect(def.label.length).toBeGreaterThan(0)
    })

    it.each(EXPECTED_IDS)("'%s' has a sessionType", (id) => {
        const def = getExerciseType(id)!
        expect(typeof def.sessionType).toBe("string")
        expect(def.sessionType.length).toBeGreaterThan(0)
    })
})
