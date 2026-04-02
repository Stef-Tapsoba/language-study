// store/reinforcement.test.ts
// Tests for markReinforcementDone, getReinforcementState (progress.ts)
// and mergeProgress / mergeReinforcement (merge.ts) for the completedReinforcement field.

import { describe, it, expect, beforeEach } from "vitest"
import {
    markReinforcementDone,
    getReinforcementState,
    resetProgress,
    loadProgress,
} from "./progress"
import { mergeProgress } from "./merge"
import type { UserProgress } from "../types"

// Reset the in-memory cache and localStorage before each test.
beforeEach(() => {
    resetProgress()
})

// ---------------------------------------------------------------------------
// getReinforcementState — default empty state
// ---------------------------------------------------------------------------

describe("getReinforcementState", () => {
    it("returns an empty default when nothing has been recorded", () => {
        const state = getReinforcementState("es", "unit-1")
        expect(state.grammarLessonIds).toEqual([])
        expect(state.vocab).toBeUndefined()
        expect(state.verbs).toBeUndefined()
    })

    it("returns empty state for an unknown language", () => {
        const state = getReinforcementState("xx", "unit-1")
        expect(state.grammarLessonIds).toEqual([])
    })

    it("returns empty state for an unknown unit within a known language", () => {
        markReinforcementDone("es", "unit-1", "vocab")
        const state = getReinforcementState("es", "unit-999")
        expect(state.grammarLessonIds).toEqual([])
        expect(state.vocab).toBeUndefined()
    })
})

// ---------------------------------------------------------------------------
// markReinforcementDone — grammar section
// ---------------------------------------------------------------------------

describe("markReinforcementDone — grammar", () => {
    it("adds a lessonId to grammarLessonIds", () => {
        markReinforcementDone("es", "unit-1", "grammar", "lesson-g1")
        const state = getReinforcementState("es", "unit-1")
        expect(state.grammarLessonIds).toContain("lesson-g1")
    })

    it("is idempotent — marking the same grammar lesson twice does not duplicate", () => {
        markReinforcementDone("es", "unit-1", "grammar", "lesson-g1")
        markReinforcementDone("es", "unit-1", "grammar", "lesson-g1")
        const state = getReinforcementState("es", "unit-1")
        expect(state.grammarLessonIds.filter(id => id === "lesson-g1")).toHaveLength(1)
    })

    it("accumulates multiple distinct grammar lesson ids", () => {
        markReinforcementDone("es", "unit-1", "grammar", "lesson-g1")
        markReinforcementDone("es", "unit-1", "grammar", "lesson-g2")
        const state = getReinforcementState("es", "unit-1")
        expect(state.grammarLessonIds).toContain("lesson-g1")
        expect(state.grammarLessonIds).toContain("lesson-g2")
    })

    it("does nothing when grammar section is called without a grammarLessonId", () => {
        markReinforcementDone("es", "unit-1", "grammar") // no lessonId
        const state = getReinforcementState("es", "unit-1")
        expect(state.grammarLessonIds).toEqual([])
    })

    it("stores grammar completion per-unit independently", () => {
        markReinforcementDone("es", "unit-1", "grammar", "lesson-g1")
        markReinforcementDone("es", "unit-2", "grammar", "lesson-g2")
        expect(getReinforcementState("es", "unit-1").grammarLessonIds).toEqual(["lesson-g1"])
        expect(getReinforcementState("es", "unit-2").grammarLessonIds).toEqual(["lesson-g2"])
    })
})

// ---------------------------------------------------------------------------
// markReinforcementDone — vocab section
// ---------------------------------------------------------------------------

describe("markReinforcementDone — vocab", () => {
    it("sets vocab to true", () => {
        markReinforcementDone("es", "unit-1", "vocab")
        expect(getReinforcementState("es", "unit-1").vocab).toBe(true)
    })

    it("is idempotent — calling twice does not corrupt state", () => {
        markReinforcementDone("es", "unit-1", "vocab")
        markReinforcementDone("es", "unit-1", "vocab")
        const state = getReinforcementState("es", "unit-1")
        expect(state.vocab).toBe(true)
        // grammarLessonIds should remain untouched
        expect(state.grammarLessonIds).toEqual([])
    })

    it("does not affect verbs section when only vocab is marked", () => {
        markReinforcementDone("es", "unit-1", "vocab")
        expect(getReinforcementState("es", "unit-1").verbs).toBeUndefined()
    })

    it("keeps grammar state intact when vocab is marked after grammar", () => {
        markReinforcementDone("es", "unit-1", "grammar", "lesson-g1")
        markReinforcementDone("es", "unit-1", "vocab")
        const state = getReinforcementState("es", "unit-1")
        expect(state.grammarLessonIds).toContain("lesson-g1")
        expect(state.vocab).toBe(true)
    })

    it("is stored per-language independently", () => {
        markReinforcementDone("es", "unit-1", "vocab")
        expect(getReinforcementState("fr", "unit-1").vocab).toBeUndefined()
    })
})

// ---------------------------------------------------------------------------
// markReinforcementDone — verbs section
// ---------------------------------------------------------------------------

describe("markReinforcementDone — verbs", () => {
    it("sets verbs to true", () => {
        markReinforcementDone("es", "unit-1", "verbs")
        expect(getReinforcementState("es", "unit-1").verbs).toBe(true)
    })

    it("is idempotent", () => {
        markReinforcementDone("es", "unit-1", "verbs")
        markReinforcementDone("es", "unit-1", "verbs")
        expect(getReinforcementState("es", "unit-1").verbs).toBe(true)
    })
})

// ---------------------------------------------------------------------------
// Persistence — survives a cache invalidation (re-read from localStorage)
// ---------------------------------------------------------------------------

describe("markReinforcementDone — persistence", () => {
    it("state persists to localStorage and is re-read after cache reset", () => {
        markReinforcementDone("es", "unit-1", "grammar", "lesson-g1")
        markReinforcementDone("es", "unit-1", "vocab")

        // Invalidate the in-memory cache by resetting, then re-inject the stored JSON
        const stored = localStorage.getItem("ls:progress")!
        resetProgress()
        localStorage.setItem("ls:progress", stored)

        const state = getReinforcementState("es", "unit-1")
        expect(state.grammarLessonIds).toContain("lesson-g1")
        expect(state.vocab).toBe(true)
    })
})

// ---------------------------------------------------------------------------
// mergeProgress — completedReinforcement union, no downgrades
// ---------------------------------------------------------------------------

const baseProgress: UserProgress = {
    schemaVersion: 2,
    selectedLanguage: null,
    levels: {},
    completedLessons: {},
    masteredUnits: {},
}

describe("mergeProgress — completedReinforcement", () => {
    it("merges grammar lesson ids as a union — no duplicates", () => {
        const current: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: ["g1", "g2"] } },
            },
        }
        const imported: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: ["g2", "g3"] } },
            },
        }
        const merged = mergeProgress(current, imported)
        const ids = merged.completedReinforcement?.es?.["unit-1"]?.grammarLessonIds ?? []
        expect(ids).toContain("g1")
        expect(ids).toContain("g2")
        expect(ids).toContain("g3")
        expect(ids.filter(id => id === "g2")).toHaveLength(1)  // no duplicates
    })

    it("vocab: true is preserved if either side has it (no downgrade)", () => {
        const current: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: [], vocab: true } },
            },
        }
        const imported: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: [] } },  // no vocab on imported
            },
        }
        const merged = mergeProgress(current, imported)
        expect(merged.completedReinforcement?.es?.["unit-1"]?.vocab).toBe(true)
    })

    it("vocab: true from imported side is also preserved", () => {
        const current: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: [] } },
            },
        }
        const imported: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: [], vocab: true } },
            },
        }
        const merged = mergeProgress(current, imported)
        expect(merged.completedReinforcement?.es?.["unit-1"]?.vocab).toBe(true)
    })

    it("verbs: true is preserved if either side has it", () => {
        const current: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: [], verbs: true } },
            },
        }
        const imported: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: [] } },
            },
        }
        const merged = mergeProgress(current, imported)
        expect(merged.completedReinforcement?.es?.["unit-1"]?.verbs).toBe(true)
    })

    it("merges units from both sides under the same language", () => {
        const current: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: ["g1"] } },
            },
        }
        const imported: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-2": { grammarLessonIds: ["g2"] } },
            },
        }
        const merged = mergeProgress(current, imported)
        expect(merged.completedReinforcement?.es?.["unit-1"]?.grammarLessonIds).toContain("g1")
        expect(merged.completedReinforcement?.es?.["unit-2"]?.grammarLessonIds).toContain("g2")
    })

    it("merges languages from both sides", () => {
        const current: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                es: { "unit-1": { grammarLessonIds: ["g1"] } },
            },
        }
        const imported: UserProgress = {
            ...baseProgress,
            completedReinforcement: {
                fr: { "unit-1": { grammarLessonIds: ["gf1"] } },
            },
        }
        const merged = mergeProgress(current, imported)
        expect(merged.completedReinforcement?.es).toBeDefined()
        expect(merged.completedReinforcement?.fr).toBeDefined()
    })

    it("handles undefined completedReinforcement on both sides without throwing", () => {
        const current: UserProgress = { ...baseProgress }
        const imported: UserProgress = { ...baseProgress }
        expect(() => mergeProgress(current, imported)).not.toThrow()
        // Result should be an empty object (or absent) — just no crash
    })

    it("preserves current userId and selectedLanguage after merge", () => {
        const current: UserProgress = {
            ...baseProgress,
            userId: "user-1",
            selectedLanguage: "es",
        }
        const imported: UserProgress = {
            ...baseProgress,
            userId: "user-2",
            selectedLanguage: "fr",
        }
        const merged = mergeProgress(current, imported)
        expect(merged.userId).toBe("user-1")
        expect(merged.selectedLanguage).toBe("es")
    })
})
