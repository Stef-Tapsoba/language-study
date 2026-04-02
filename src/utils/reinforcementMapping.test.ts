// utils/reinforcementMapping.test.ts

import { describe, it, expect } from "vitest"
import {
    getVocabUnlockThreshold,
    isVocabExerciseUnlocked,
    getGrammarExerciseType,
    getExerciseLabel,
    VOCAB_EXERCISE_THRESHOLD,
} from "./reinforcementMapping"
import type { LessonUnit, GrammarLesson } from "../types"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeUnit(
    vocabIds: string[],
    overrides: Partial<LessonUnit> = {}
): LessonUnit {
    return {
        id: "test-unit",
        level: "A1",
        order: 1,
        title: "Test",
        description: "Test unit",
        grammarIds: [],
        vocabIds,
        verbIds: [],
        testQuestions: [],
        ...overrides,
    }
}

function makeLesson(overrides: Partial<GrammarLesson> = {}): GrammarLesson {
    return {
        id: "lesson-1",
        level: "A1",
        title: "Test lesson",
        explanation: "Some explanation",
        examples: [],
        ...overrides,
    }
}

// ---------------------------------------------------------------------------
// getVocabUnlockThreshold
// ---------------------------------------------------------------------------

describe("getVocabUnlockThreshold", () => {
    it("returns the default VOCAB_EXERCISE_THRESHOLD (5) for units with 5 or more vocab items", () => {
        const unit = makeUnit(["v1", "v2", "v3", "v4", "v5"])
        expect(getVocabUnlockThreshold(unit)).toBe(5)
    })

    it("returns the vocab count when the unit has fewer than 5 items", () => {
        const unit = makeUnit(["v1", "v2", "v3"])
        expect(getVocabUnlockThreshold(unit)).toBe(3)
    })

    it("returns 0 for a unit with an empty vocabIds array", () => {
        const unit = makeUnit([])
        expect(getVocabUnlockThreshold(unit)).toBe(0)
    })

    it("returns 1 for a unit with exactly 1 vocab item", () => {
        const unit = makeUnit(["v1"])
        expect(getVocabUnlockThreshold(unit)).toBe(1)
    })

    it("uses the explicit vocabUnlockThreshold override when set", () => {
        const unit = makeUnit(["v1", "v2", "v3", "v4", "v5", "v6"], {
            vocabUnlockThreshold: 2,
        })
        expect(getVocabUnlockThreshold(unit)).toBe(2)
    })

    it("respects vocabUnlockThreshold override of 0 (always unlocked)", () => {
        const unit = makeUnit(["v1"], { vocabUnlockThreshold: 0 })
        expect(getVocabUnlockThreshold(unit)).toBe(0)
    })

    it("returns the minimum of 5 and vocab count — never exceeds VOCAB_EXERCISE_THRESHOLD", () => {
        const unit = makeUnit(["v1", "v2", "v3", "v4", "v5", "v6", "v7"])
        expect(getVocabUnlockThreshold(unit)).toBe(VOCAB_EXERCISE_THRESHOLD)
    })
})

// ---------------------------------------------------------------------------
// isVocabExerciseUnlocked
// ---------------------------------------------------------------------------

describe("isVocabExerciseUnlocked", () => {
    it("returns false when no vocab items are completed", () => {
        const unit = makeUnit(["v1", "v2", "v3", "v4", "v5"])
        expect(isVocabExerciseUnlocked(unit, [])).toBe(false)
    })

    it("returns false when fewer than threshold items are completed", () => {
        const unit = makeUnit(["v1", "v2", "v3", "v4", "v5"])
        expect(isVocabExerciseUnlocked(unit, ["v1", "v2", "v3"])).toBe(false)
    })

    it("returns true when exactly threshold items are completed", () => {
        const unit = makeUnit(["v1", "v2", "v3", "v4", "v5"])
        expect(isVocabExerciseUnlocked(unit, ["v1", "v2", "v3", "v4", "v5"])).toBe(true)
    })

    it("returns true when more than threshold items are completed", () => {
        const unit = makeUnit(["v1", "v2", "v3", "v4", "v5", "v6"])
        expect(isVocabExerciseUnlocked(unit, ["v1", "v2", "v3", "v4", "v5", "v6"])).toBe(true)
    })

    it("only counts vocabIds that belong to the unit — ignores unrelated ids", () => {
        const unit = makeUnit(["v1", "v2", "v3", "v4", "v5"])
        // completedLessonIds contains other-unit items plus 4 of ours
        expect(isVocabExerciseUnlocked(unit, ["v1", "v2", "v3", "v4", "other-unit-vocab"])).toBe(false)
    })

    it("is unlocked immediately when threshold is 0 (unit has no vocab)", () => {
        const unit = makeUnit([])
        expect(isVocabExerciseUnlocked(unit, [])).toBe(true)
    })

    it("works with explicit vocabUnlockThreshold: only 2 required", () => {
        const unit = makeUnit(["v1", "v2", "v3"], { vocabUnlockThreshold: 2 })
        expect(isVocabExerciseUnlocked(unit, ["v1", "v2"])).toBe(true)
    })

    it("remains locked when completed list has 1 of 2 required (explicit threshold)", () => {
        const unit = makeUnit(["v1", "v2", "v3"], { vocabUnlockThreshold: 2 })
        expect(isVocabExerciseUnlocked(unit, ["v1"])).toBe(false)
    })
})

// ---------------------------------------------------------------------------
// getGrammarExerciseType
// ---------------------------------------------------------------------------

describe("getGrammarExerciseType", () => {
    it("defaults to 'sentence-scramble' when exerciseType is absent", () => {
        const lesson = makeLesson()
        expect(getGrammarExerciseType(lesson)).toBe("sentence-scramble")
    })

    it("returns 'dictation' when exerciseType is explicitly set", () => {
        const lesson = makeLesson({ exerciseType: "dictation" })
        expect(getGrammarExerciseType(lesson)).toBe("dictation")
    })

    it("returns 'sentence-scramble' when exerciseType is explicitly set to it", () => {
        const lesson = makeLesson({ exerciseType: "sentence-scramble" })
        expect(getGrammarExerciseType(lesson)).toBe("sentence-scramble")
    })
})

// ---------------------------------------------------------------------------
// getExerciseLabel
// ---------------------------------------------------------------------------

describe("getExerciseLabel", () => {
    it("returns 'Sentence scramble' for 'sentence-scramble'", () => {
        expect(getExerciseLabel("sentence-scramble")).toBe("Sentence scramble")
    })

    it("returns 'Dictation' for 'dictation'", () => {
        expect(getExerciseLabel("dictation")).toBe("Dictation")
    })

    it("returns 'Vocab in context' for 'vocab-in-context'", () => {
        expect(getExerciseLabel("vocab-in-context")).toBe("Vocab in context")
    })

    it("returns 'Flashcards' for 'flashcards'", () => {
        expect(getExerciseLabel("flashcards")).toBe("Flashcards")
    })

    it("falls back to the raw id for an unknown exercise type", () => {
        expect(getExerciseLabel("unknown-type")).toBe("unknown-type")
    })

    it("falls back to empty string for empty input", () => {
        expect(getExerciseLabel("")).toBe("")
    })
})
