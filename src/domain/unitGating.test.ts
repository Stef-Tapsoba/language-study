// domain/unitGating.test.ts

import { describe, it, expect } from "vitest"
import { getUnlockedContentIds } from "./unitGating"
import type { LessonUnit } from "../types"

function unit(id: string, verbIds: string[]): LessonUnit {
    return {
        id,
        level: "A1",
        order: 0,
        title: id,
        grammarIds: [],
        vocabIds: [],
        verbIds,
    } as unknown as LessonUnit
}

const UNITS = [
    unit("u1", ["v1", "v2"]),
    unit("u2", ["v3"]),
    unit("u3", ["v4", "v5"]),
]

describe("getUnlockedContentIds", () => {
    it("always unlocks the first unit", () => {
        const ids = getUnlockedContentIds(UNITS, [], u => u.verbIds)
        expect([...ids]).toEqual(["v1", "v2"])
    })

    it("unlocks a unit when the previous one is mastered", () => {
        const ids = getUnlockedContentIds(UNITS, ["u1"], u => u.verbIds)
        expect([...ids]).toEqual(["v1", "v2", "v3"])
    })

    it("chains through consecutive mastered units", () => {
        const ids = getUnlockedContentIds(UNITS, ["u1", "u2"], u => u.verbIds)
        expect([...ids]).toEqual(["v1", "v2", "v3", "v4", "v5"])
    })

    it("does not unlock past a gap (u3 stays locked when only u2 is mastered)", () => {
        const ids = getUnlockedContentIds(UNITS, ["u2"], u => u.verbIds)
        expect([...ids]).toEqual(["v1", "v2", "v4", "v5"])
    })

    it("returns an empty set for no units", () => {
        expect(getUnlockedContentIds([], ["u1"], u => u.verbIds).size).toBe(0)
    })
})
