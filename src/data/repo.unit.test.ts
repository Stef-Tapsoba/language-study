// data/repo.unit.test.ts
// Tests for getGrammarForUnit, getVocabForUnit, getReviewItemsForUnit.
//
// repo.ts delegates to getModule(langId) which reads a synchronous in-memory
// cache populated by loadModule(). We inject fixtures directly into the cache
// by vi.mocking the modules file.

import { describe, it, expect, vi, beforeEach } from "vitest"
import type { LanguageModule, GrammarLesson, VocabItem, LessonUnit } from "../types"

// ---------------------------------------------------------------------------
// Mock data/modules so we can inject arbitrary LanguageModule fixtures
// ---------------------------------------------------------------------------

const mockModuleStore: Record<string, LanguageModule | null> = {}

vi.mock("./modules", () => ({
    getModule: (langId: string) => mockModuleStore[langId] ?? null,
    loadModule: vi.fn(),
}))

// Import after the mock is in place
import { getGrammarForUnit, getVocabForUnit, getReviewItemsForUnit } from "./repo"

// ---------------------------------------------------------------------------
// Fixture factory helpers
// ---------------------------------------------------------------------------

function makeGrammarLesson(id: string): GrammarLesson {
    return {
        id,
        level: "A1",
        title: `Grammar ${id}`,
        explanation: "Explanation",
        examples: [],
    }
}

function makeVocabItem(id: string): VocabItem {
    return {
        id,
        level: "A1",
        word: id,
        translation: `${id}-en`,
        category: "general",
        example: { native: "ex", translation: "ex-en" },
    }
}

function makeUnit(
    id: string,
    order: number,
    grammarIds: string[],
    vocabIds: string[],
    level: "A1" | "A2" = "A1"
): LessonUnit {
    return {
        id,
        level,
        order,
        title: `Unit ${id}`,
        description: `Description for ${id}`,
        grammarIds,
        vocabIds,
        verbIds: [],
        testQuestions: [],
    }
}

function makeModule(
    units: LessonUnit[],
    grammar: GrammarLesson[],
    vocab: VocabItem[]
): LanguageModule {
    return {
        grammar,
        vocab,
        verbs: [],
        units,
        placementQuestions: [],
        levelQuestions: [],
    }
}

// ---------------------------------------------------------------------------
// Per-test reset
// ---------------------------------------------------------------------------

beforeEach(() => {
    for (const key of Object.keys(mockModuleStore)) {
        delete mockModuleStore[key]
    }
})

// ---------------------------------------------------------------------------
// getGrammarForUnit
// ---------------------------------------------------------------------------

describe("getGrammarForUnit", () => {
    it("returns empty array when the module has not loaded (null)", () => {
        mockModuleStore["es"] = null
        expect(getGrammarForUnit("es", "unit-1")).toEqual([])
    })

    it("returns empty array when the unit does not exist", () => {
        const mod = makeModule([], [makeGrammarLesson("g1")], [])
        mockModuleStore["es"] = mod
        expect(getGrammarForUnit("es", "unit-999")).toEqual([])
    })

    it("returns only the grammar lessons whose ids are in unit.grammarIds", () => {
        const g1 = makeGrammarLesson("g1")
        const g2 = makeGrammarLesson("g2")
        const g3 = makeGrammarLesson("g3")
        const unit = makeUnit("unit-1", 1, ["g1", "g3"], [])
        mockModuleStore["es"] = makeModule([unit], [g1, g2, g3], [])

        const result = getGrammarForUnit("es", "unit-1")
        expect(result).toHaveLength(2)
        const ids = result.map(g => g.id)
        expect(ids).toContain("g1")
        expect(ids).toContain("g3")
        expect(ids).not.toContain("g2")
    })

    it("preserves the order defined by unit.grammarIds (not grammar array order)", () => {
        const g1 = makeGrammarLesson("g1")
        const g2 = makeGrammarLesson("g2")
        const g3 = makeGrammarLesson("g3")
        // Unit declares order: g3, g1, g2
        const unit = makeUnit("unit-1", 1, ["g3", "g1", "g2"], [])
        // Module stores them in a different order
        mockModuleStore["es"] = makeModule([unit], [g1, g2, g3], [])

        const result = getGrammarForUnit("es", "unit-1")
        expect(result.map(g => g.id)).toEqual(["g3", "g1", "g2"])
    })

    it("silently skips grammarIds that do not exist in the module", () => {
        const g1 = makeGrammarLesson("g1")
        const unit = makeUnit("unit-1", 1, ["g1", "g-missing"], [])
        mockModuleStore["es"] = makeModule([unit], [g1], [])

        const result = getGrammarForUnit("es", "unit-1")
        expect(result).toHaveLength(1)
        expect(result[0].id).toBe("g1")
    })

    it("returns empty array when unit has no grammarIds", () => {
        const unit = makeUnit("unit-1", 1, [], [])
        mockModuleStore["es"] = makeModule([unit], [makeGrammarLesson("g1")], [])
        expect(getGrammarForUnit("es", "unit-1")).toEqual([])
    })
})

// ---------------------------------------------------------------------------
// getVocabForUnit
// ---------------------------------------------------------------------------

describe("getVocabForUnit", () => {
    it("returns empty array when the module has not loaded", () => {
        mockModuleStore["es"] = null
        expect(getVocabForUnit("es", "unit-1")).toEqual([])
    })

    it("returns empty array when the unit does not exist", () => {
        const mod = makeModule([], [], [makeVocabItem("v1")])
        mockModuleStore["es"] = mod
        expect(getVocabForUnit("es", "unit-999")).toEqual([])
    })

    it("returns only vocab items whose ids are in unit.vocabIds", () => {
        const v1 = makeVocabItem("v1")
        const v2 = makeVocabItem("v2")
        const v3 = makeVocabItem("v3")
        const unit = makeUnit("unit-1", 1, [], ["v1", "v3"])
        mockModuleStore["es"] = makeModule([unit], [], [v1, v2, v3])

        const result = getVocabForUnit("es", "unit-1")
        expect(result).toHaveLength(2)
        const ids = result.map(v => v.id)
        expect(ids).toContain("v1")
        expect(ids).toContain("v3")
        expect(ids).not.toContain("v2")
    })

    it("preserves the order defined by unit.vocabIds", () => {
        const v1 = makeVocabItem("v1")
        const v2 = makeVocabItem("v2")
        const v3 = makeVocabItem("v3")
        const unit = makeUnit("unit-1", 1, [], ["v3", "v2", "v1"])
        mockModuleStore["es"] = makeModule([unit], [], [v1, v2, v3])

        const result = getVocabForUnit("es", "unit-1")
        expect(result.map(v => v.id)).toEqual(["v3", "v2", "v1"])
    })

    it("silently skips vocabIds that do not exist in the module", () => {
        const v1 = makeVocabItem("v1")
        const unit = makeUnit("unit-1", 1, [], ["v1", "v-missing"])
        mockModuleStore["es"] = makeModule([unit], [], [v1])

        const result = getVocabForUnit("es", "unit-1")
        expect(result).toHaveLength(1)
        expect(result[0].id).toBe("v1")
    })

    it("returns empty array when unit has no vocabIds", () => {
        const unit = makeUnit("unit-1", 1, [], [])
        mockModuleStore["es"] = makeModule([unit], [], [makeVocabItem("v1")])
        expect(getVocabForUnit("es", "unit-1")).toEqual([])
    })
})

// ---------------------------------------------------------------------------
// getReviewItemsForUnit
// ---------------------------------------------------------------------------

describe("getReviewItemsForUnit", () => {
    it("returns empty array when the module has not loaded", () => {
        mockModuleStore["es"] = null
        expect(getReviewItemsForUnit("es", "unit-2", "A1")).toEqual([])
    })

    it("returns empty array when the currentUnitId does not exist in the level", () => {
        const unit = makeUnit("unit-1", 1, [], ["v1"])
        const v1 = makeVocabItem("v1")
        mockModuleStore["es"] = makeModule([unit], [], [v1])
        expect(getReviewItemsForUnit("es", "unit-999", "A1")).toEqual([])
    })

    it("returns empty array for the first unit (no prior units exist)", () => {
        const unit = makeUnit("unit-1", 1, [], ["v1"])
        const v1 = makeVocabItem("v1")
        mockModuleStore["es"] = makeModule([unit], [], [v1])
        expect(getReviewItemsForUnit("es", "unit-1", "A1")).toEqual([])
    })

    it("returns vocab from all prior units in the same level", () => {
        const v1 = makeVocabItem("v1")
        const v2 = makeVocabItem("v2")
        const v3 = makeVocabItem("v3")
        const unit1 = makeUnit("unit-1", 1, [], ["v1"])
        const unit2 = makeUnit("unit-2", 2, [], ["v2"])
        const unit3 = makeUnit("unit-3", 3, [], ["v3"])
        mockModuleStore["es"] = makeModule([unit1, unit2, unit3], [], [v1, v2, v3])

        // For unit-3, prior units are unit-1 and unit-2
        const result = getReviewItemsForUnit("es", "unit-3", "A1")
        const ids = result.map(v => v.id)
        expect(ids).toContain("v1")
        expect(ids).toContain("v2")
        expect(ids).not.toContain("v3")
    })

    it("does not include vocab from units of a different level", () => {
        const v1 = makeVocabItem("v1")
        const v2 = makeVocabItem("v2")
        const a1Unit = makeUnit("unit-a1", 1, [], ["v1"], "A1")
        const a2Unit = makeUnit("unit-a2", 1, [], ["v2"], "A2")
        const a2Unit2 = makeUnit("unit-a2-2", 2, [], [], "A2")
        mockModuleStore["es"] = makeModule([a1Unit, a2Unit, a2Unit2], [], [v1, v2])

        // Requesting review items for unit-a2-2 (level A2) should only return v2 (from a2Unit)
        const result = getReviewItemsForUnit("es", "unit-a2-2", "A2")
        const ids = result.map(v => v.id)
        expect(ids).toContain("v2")
        expect(ids).not.toContain("v1")  // v1 belongs to A1 unit
    })

    it("returns vocab in order matching the prior units' vocabIds (flattened)", () => {
        const v1 = makeVocabItem("v1")
        const v2 = makeVocabItem("v2")
        const v3 = makeVocabItem("v3")
        const unit1 = makeUnit("unit-1", 1, [], ["v2", "v1"])
        const unit2 = makeUnit("unit-2", 2, [], ["v3"])
        const unit3 = makeUnit("unit-3", 3, [], [])
        mockModuleStore["es"] = makeModule([unit1, unit2, unit3], [], [v1, v2, v3])

        const result = getReviewItemsForUnit("es", "unit-3", "A1")
        // Should be: v2, v1 (from unit-1) then v3 (from unit-2), following unit order
        expect(result.map(v => v.id)).toEqual(["v2", "v1", "v3"])
    })

    it("skips vocab ids that do not exist in the module vocab list", () => {
        const v1 = makeVocabItem("v1")
        const unit1 = makeUnit("unit-1", 1, [], ["v1", "v-missing"])
        const unit2 = makeUnit("unit-2", 2, [], [])
        mockModuleStore["es"] = makeModule([unit1, unit2], [], [v1])

        const result = getReviewItemsForUnit("es", "unit-2", "A1")
        expect(result).toHaveLength(1)
        expect(result[0].id).toBe("v1")
    })

    it("handles units provided in non-ascending order — still uses order field for prior detection", () => {
        const v1 = makeVocabItem("v1")
        const v2 = makeVocabItem("v2")
        // Deliberately pass units in reverse order to the module
        const unit2 = makeUnit("unit-2", 2, [], ["v2"])
        const unit1 = makeUnit("unit-1", 1, [], ["v1"])
        const unit3 = makeUnit("unit-3", 3, [], [])
        mockModuleStore["es"] = makeModule([unit3, unit2, unit1], [], [v1, v2])

        const result = getReviewItemsForUnit("es", "unit-3", "A1")
        const ids = result.map(v => v.id)
        expect(ids).toContain("v1")
        expect(ids).toContain("v2")
    })
})
