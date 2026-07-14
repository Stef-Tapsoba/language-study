// exerciseTypes/drillDefs.test.ts — fetchItems behavior for the migrated drills
//
// Verifies unit gating, small-pool fallbacks, and unitId scoping for the
// verb-drill and grammar-drill exercise-type definitions.

import { describe, it, expect, beforeEach, vi } from "vitest"
import type { Verb, GrammarLesson, LessonUnit } from "../types"

// Mock the repo before importing the defs (their fetchItems close over these)
vi.mock("../data/repo", () => ({
    getVerbsForLevel: vi.fn(),
    getVerbsForUnit: vi.fn(),
    getUnitsForLevel: vi.fn(),
    getGrammarForLevel: vi.fn(),
    getGrammarForUnit: vi.fn(),
    getGrammarLesson: vi.fn(),
}))

import * as repo from "../data/repo"
import { useProgressStore } from "../store/useProgressStore"
import { getExerciseType } from "./registry"
import "./verbDrill"
import "./grammarDrill"

const mocked = vi.mocked(repo)

function verb(id: string): Verb {
    return { id, level: "A1", infinitive: id, meaning: id, conjugations: [] } as unknown as Verb
}

function lesson(id: string, exampleCount: number): GrammarLesson {
    return {
        id, level: "A1", title: id,
        examples: Array.from({ length: exampleCount }, (_, i) => ({
            native: `${id}-native-${i}`, translation: `${id}-translation-${i}`,
        })),
    } as unknown as GrammarLesson
}

function unit(id: string, verbIds: string[] = [], grammarIds: string[] = []): LessonUnit {
    return { id, level: "A1", order: 0, title: id, verbIds, grammarIds, vocabIds: [] } as unknown as LessonUnit
}

function seedMastered(langId: string, unitIds: string[]): void {
    useProgressStore.setState({
        progress: {
            selectedLanguage: langId,
            levels: { [langId]: "A1" },
            completedLessons: {},
            masteredUnits: { [langId]: unitIds },
        },
    })
}

beforeEach(() => {
    vi.clearAllMocks()
    seedMastered("fr", [])
})

// ── verb-drill ────────────────────────────────────────────────────────────────

describe("verb-drill fetchItems", () => {
    const def = () => getExerciseType("verb-drill")!

    it("scopes to the unit when unitId is provided", async () => {
        mocked.getVerbsForUnit.mockReturnValue([verb("v1")])
        const items = await def().fetchItems({ langId: "fr", level: "A1", unitId: "u1" })
        expect(mocked.getVerbsForUnit).toHaveBeenCalledWith("fr", "u1")
        expect(items).toEqual([verb("v1")])
    })

    it("gates the level pool to unlocked units", async () => {
        mocked.getVerbsForLevel.mockReturnValue([verb("v1"), verb("v2"), verb("v3"), verb("v4")])
        mocked.getUnitsForLevel.mockReturnValue([
            unit("u1", ["v1", "v2"]),
            unit("u2", ["v3", "v4"]),
        ])
        // u1 not mastered → u2 locked → only u1's verbs
        const items = await def().fetchItems({ langId: "fr", level: "A1" })
        expect((items as Verb[]).map(v => v.id)).toEqual(["v1", "v2"])
    })

    it("includes the next unit's verbs once the previous unit is mastered", async () => {
        seedMastered("fr", ["u1"])
        mocked.getVerbsForLevel.mockReturnValue([verb("v1"), verb("v2"), verb("v3"), verb("v4")])
        mocked.getUnitsForLevel.mockReturnValue([
            unit("u1", ["v1", "v2"]),
            unit("u2", ["v3", "v4"]),
        ])
        const items = await def().fetchItems({ langId: "fr", level: "A1" })
        expect((items as Verb[]).map(v => v.id)).toEqual(["v1", "v2", "v3", "v4"])
    })

    it("falls back to all verbs when the unlocked pool is too small for distractors", async () => {
        mocked.getVerbsForLevel.mockReturnValue([verb("v1"), verb("v2"), verb("v3")])
        mocked.getUnitsForLevel.mockReturnValue([
            unit("u1", ["v1"]),          // only 1 unlocked verb — below the 2-verb minimum
            unit("u2", ["v2", "v3"]),
        ])
        const items = await def().fetchItems({ langId: "fr", level: "A1" })
        expect(items).toHaveLength(3)
    })
})

// ── grammar-drill ─────────────────────────────────────────────────────────────

describe("grammar-drill fetchItems", () => {
    const def = () => getExerciseType("grammar-drill")!

    it("scopes to a single lesson when lessonId is provided", async () => {
        mocked.getGrammarLesson.mockReturnValue(lesson("g1", 4))
        const items = await def().fetchItems({ langId: "fr", level: "A1", lessonId: "g1" })
        expect(mocked.getGrammarLesson).toHaveBeenCalledWith("fr", "g1")
        expect(items).toHaveLength(1)
    })

    it("returns empty when the lesson is not found", async () => {
        mocked.getGrammarLesson.mockReturnValue(null)
        const items = await def().fetchItems({ langId: "fr", level: "A1", lessonId: "missing" })
        expect(items).toEqual([])
    })

    it("scopes to the unit when unitId is provided", async () => {
        mocked.getGrammarForUnit.mockReturnValue([lesson("g1", 4)])
        const items = await def().fetchItems({ langId: "fr", level: "A1", unitId: "u1" })
        expect(mocked.getGrammarForUnit).toHaveBeenCalledWith("fr", "u1")
        expect(items).toHaveLength(1)
    })

    it("gates the level pool to unlocked units when examples suffice", async () => {
        const g1 = lesson("g1", 5)
        const g2 = lesson("g2", 5)
        mocked.getGrammarForLevel.mockReturnValue([g1, g2])
        mocked.getUnitsForLevel.mockReturnValue([
            unit("u1", [], ["g1"]),
            unit("u2", [], ["g2"]),
        ])
        const items = await def().fetchItems({ langId: "fr", level: "A1" })
        expect((items as GrammarLesson[]).map(g => g.id)).toEqual(["g1"])
    })

    it("falls back to all lessons when unlocked examples are below the 4-example minimum", async () => {
        const g1 = lesson("g1", 2)   // unlocked but too few examples
        const g2 = lesson("g2", 5)
        mocked.getGrammarForLevel.mockReturnValue([g1, g2])
        mocked.getUnitsForLevel.mockReturnValue([
            unit("u1", [], ["g1"]),
            unit("u2", [], ["g2"]),
        ])
        const items = await def().fetchItems({ langId: "fr", level: "A1" })
        expect(items).toHaveLength(2)
    })
})
