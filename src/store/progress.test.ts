// store/progress.test.ts

import {
    loadProgress,
    initUserSession,
    getSelectedLanguage,
    setSelectedLanguage,
    getCurrentLevel,
    setCurrentLevel,
    getCompletedLessons,
    markLessonComplete,
    getMasteredUnits,
    masterUnit,
    isUnitUnlocked,
    resetLanguageProgress,
    removeLanguage,
    getStartedLanguages,
    resetProgress,
} from "./progress"

const LS_KEY = "ls:progress"

// The module keeps an in-memory write-through cache. Reset it before each test
// so that manual localStorage.setItem() calls are picked up correctly.
beforeEach(() => { resetProgress() })

describe("loadProgress", () => {
    it("returns default progress when localStorage is empty", () => {
        const p = loadProgress()
        expect(p.selectedLanguage).toBeNull()
        expect(p.levels).toEqual({})
        expect(p.completedLessons).toEqual({})
        expect(p.masteredUnits).toEqual({})
    })

    it("returns stored progress merged with defaults", () => {
        localStorage.setItem(LS_KEY, JSON.stringify({ selectedLanguage: "es", levels: { es: "B1" } }))
        const p = loadProgress()
        expect(p.selectedLanguage).toBe("es")
        expect(p.levels.es).toBe("B1")
        expect(p.completedLessons).toEqual({})
    })

    it("returns default on corrupted JSON", () => {
        localStorage.setItem(LS_KEY, "not-valid-json{{{")
        const p = loadProgress()
        expect(p.selectedLanguage).toBeNull()
        expect(p.levels).toEqual({})
    })

    it("returns default on JSON that is not an object", () => {
        localStorage.setItem(LS_KEY, JSON.stringify(null))
        const p = loadProgress()
        expect(p.selectedLanguage).toBeNull()
    })
})

describe("initUserSession", () => {
    it("stores the userId when no prior progress exists", () => {
        initUserSession("user-1")
        const p = loadProgress()
        expect(p.userId).toBe("user-1")
    })

    it("is idempotent — calling twice with the same userId keeps progress", () => {
        initUserSession("user-1")
        setSelectedLanguage("fr")
        initUserSession("user-1")
        // userId matches → progress is preserved
        expect(getSelectedLanguage()).toBe("fr")
    })

    it("wipes progress when a different userId is stored", () => {
        initUserSession("user-1")
        setSelectedLanguage("fr")
        setCurrentLevel("fr", "B1")

        initUserSession("user-2")
        const p = loadProgress()
        expect(p.userId).toBe("user-2")
        expect(p.selectedLanguage).toBeNull()
        expect(p.levels).toEqual({})
    })
})

describe("getSelectedLanguage / setSelectedLanguage", () => {
    it("returns null when nothing is set", () => {
        expect(getSelectedLanguage()).toBeNull()
    })

    it("persists and retrieves the selected language", () => {
        setSelectedLanguage("ja")
        expect(getSelectedLanguage()).toBe("ja")
    })

    it("overwrites a previously set language", () => {
        setSelectedLanguage("es")
        setSelectedLanguage("ko")
        expect(getSelectedLanguage()).toBe("ko")
    })
})

describe("getCurrentLevel / setCurrentLevel", () => {
    it("defaults to A1 for unknown language", () => {
        expect(getCurrentLevel("es")).toBe("A1")
    })

    it("persists the level for a language", () => {
        setCurrentLevel("es", "B2")
        expect(getCurrentLevel("es")).toBe("B2")
    })

    it("stores levels independently per language", () => {
        setCurrentLevel("es", "A2")
        setCurrentLevel("fr", "B1")
        expect(getCurrentLevel("es")).toBe("A2")
        expect(getCurrentLevel("fr")).toBe("B1")
    })
})

describe("getCompletedLessons / markLessonComplete", () => {
    it("returns empty array when no lessons are completed", () => {
        expect(getCompletedLessons("es")).toEqual([])
    })

    it("adds a lesson to the completed list", () => {
        markLessonComplete("es", "lesson-1", "grammar")
        expect(getCompletedLessons("es")).toContain("lesson-1")
    })

    it("is idempotent — marking the same lesson twice does not duplicate", () => {
        markLessonComplete("es", "lesson-1", "grammar")
        markLessonComplete("es", "lesson-1", "grammar")
        const lessons = getCompletedLessons("es")
        expect(lessons.filter(l => l === "lesson-1").length).toBe(1)
    })

    it("accumulates multiple distinct lessons", () => {
        markLessonComplete("es", "lesson-1", "grammar")
        markLessonComplete("es", "lesson-2", "grammar")
        const lessons = getCompletedLessons("es")
        expect(lessons).toContain("lesson-1")
        expect(lessons).toContain("lesson-2")
    })

    it("keeps lessons separate per language", () => {
        markLessonComplete("es", "lesson-1", "grammar")
        markLessonComplete("fr", "lesson-A", "grammar")
        expect(getCompletedLessons("es")).not.toContain("lesson-A")
        expect(getCompletedLessons("fr")).not.toContain("lesson-1")
    })
})

describe("getMasteredUnits / masterUnit", () => {
    it("returns empty array when no units mastered", () => {
        expect(getMasteredUnits("es")).toEqual([])
    })

    it("adds a unit to the mastered list", () => {
        masterUnit("es", "unit-1")
        expect(getMasteredUnits("es")).toContain("unit-1")
    })

    it("is idempotent — mastering the same unit twice does not duplicate", () => {
        masterUnit("es", "unit-1")
        masterUnit("es", "unit-1")
        const units = getMasteredUnits("es")
        expect(units.filter(u => u === "unit-1").length).toBe(1)
    })

    it("accumulates multiple distinct units", () => {
        masterUnit("es", "unit-1")
        masterUnit("es", "unit-2")
        const units = getMasteredUnits("es")
        expect(units).toContain("unit-1")
        expect(units).toContain("unit-2")
    })

    it("keeps mastered units separate per language", () => {
        masterUnit("es", "unit-1")
        masterUnit("fr", "unit-A")
        expect(getMasteredUnits("es")).not.toContain("unit-A")
        expect(getMasteredUnits("fr")).not.toContain("unit-1")
    })
})

describe("isUnitUnlocked", () => {
    const units = [
        { id: "u1", order: 1 },
        { id: "u2", order: 2 },
        { id: "u3", order: 3 },
    ]

    it("returns false for an unknown unit id", () => {
        expect(isUnitUnlocked("u-unknown", units, [])).toBe(false)
    })

    it("always unlocks the first unit (order === 1)", () => {
        expect(isUnitUnlocked("u1", units, [])).toBe(true)
    })

    it("locks the second unit when the first is not mastered", () => {
        expect(isUnitUnlocked("u2", units, [])).toBe(false)
    })

    it("unlocks the second unit once the first is mastered", () => {
        masterUnit("es", "u1")
        expect(isUnitUnlocked("u2", units, getMasteredUnits("es"))).toBe(true)
    })

    it("unlocks the third unit once the second is mastered (not just first)", () => {
        masterUnit("es", "u1")
        expect(isUnitUnlocked("u3", units, getMasteredUnits("es"))).toBe(false)
        masterUnit("es", "u2")
        expect(isUnitUnlocked("u3", units, getMasteredUnits("es"))).toBe(true)
    })

    it("returns true when it is the only unit in the list (no predecessor)", () => {
        const sparse = [{ id: "u5", order: 5 }]
        expect(isUnitUnlocked("u5", sparse, [])).toBe(true)
    })

    it("handles non-contiguous order values — gap does not bypass the lock (BUG-006 fix)", () => {
        // orders 1, 2, 4 — unit u4 must require u2 mastered, not unlock freely
        const gapped = [
            { id: "u1", order: 1 },
            { id: "u2", order: 2 },
            { id: "u4", order: 4 },
        ]
        masterUnit("es", "u1")
        expect(isUnitUnlocked("u4", gapped, getMasteredUnits("es"))).toBe(false)
        masterUnit("es", "u2")
        expect(isUnitUnlocked("u4", gapped, getMasteredUnits("es"))).toBe(true)
    })

    it("works correctly when units are passed in unsorted order", () => {
        const unsorted = [
            { id: "u3", order: 3 },
            { id: "u1", order: 1 },
            { id: "u2", order: 2 },
        ]
        masterUnit("es", "u1")
        masterUnit("es", "u2")
        expect(isUnitUnlocked("u3", unsorted, getMasteredUnits("es"))).toBe(true)
    })

    // Checkpoint gate tests
    const unitsWithCheckpoint = [
        { id: "u1", order: 1 },
        { id: "u2", order: 2, checkpointId: "cp-1" },  // u2 closes block 1
        { id: "u3", order: 3 },
    ]

    it("locks the unit after a checkpoint-carrying unit when checkpoint is incomplete", () => {
        masterUnit("ko", "u1")
        masterUnit("ko", "u2")
        // u3 is after u2 which carries checkpointId — checkpoint not done
        expect(isUnitUnlocked("u3", unitsWithCheckpoint, getMasteredUnits("ko"), [])).toBe(false)
    })

    it("unlocks the unit after a checkpoint-carrying unit once checkpoint is complete", () => {
        masterUnit("ko", "u1")
        masterUnit("ko", "u2")
        markCheckpointDone("ko", "cp-1")
        expect(isUnitUnlocked("u3", unitsWithCheckpoint, getMasteredUnits("ko"), getCompletedCheckpoints("ko"))).toBe(true)
    })

    it("skips checkpoint gate when completedCheckpoints param is omitted", () => {
        masterUnit("ko", "u1")
        masterUnit("ko", "u2")
        // No checkpoint arg — gate bypassed for backwards compat
        expect(isUnitUnlocked("u3", unitsWithCheckpoint, getMasteredUnits("ko"))).toBe(true)
    })

    it("does not gate a unit whose preceding unit has no checkpointId", () => {
        masterUnit("ko", "u1")
        // u2 has no checkpointId — u3 (if it existed) would not be gated
        const noCheckpoint = [{ id: "u1", order: 1 }, { id: "u2", order: 2 }]
        expect(isUnitUnlocked("u2", noCheckpoint, getMasteredUnits("ko"), [])).toBe(true)
    })
})

describe("resetLanguageProgress", () => {
    it("resets level to A1 and clears lessons/units for the language", () => {
        setCurrentLevel("es", "B2")
        markLessonComplete("es", "lesson-1", "grammar")
        masterUnit("es", "unit-1")

        resetLanguageProgress("es")

        expect(getCurrentLevel("es")).toBe("A1")
        expect(getCompletedLessons("es")).toEqual([])
        expect(getMasteredUnits("es")).toEqual([])
    })

    it("does not affect other languages", () => {
        setCurrentLevel("es", "B2")
        setCurrentLevel("fr", "A2")
        markLessonComplete("fr", "fr-lesson", "grammar")

        resetLanguageProgress("es")

        expect(getCurrentLevel("fr")).toBe("A2")
        expect(getCompletedLessons("fr")).toContain("fr-lesson")
    })
})

describe("removeLanguage", () => {
    it("removes level, lessons, and mastered units for the language", () => {
        setCurrentLevel("es", "A2")
        markLessonComplete("es", "l1", "grammar")
        masterUnit("es", "u1")

        removeLanguage("es")

        expect(getStartedLanguages()).not.toContain("es")
        expect(getCompletedLessons("es")).toEqual([])
        expect(getMasteredUnits("es")).toEqual([])
    })

    it("clears selectedLanguage when it matches the removed language", () => {
        setSelectedLanguage("es")
        removeLanguage("es")
        expect(getSelectedLanguage()).toBeNull()
    })

    it("preserves selectedLanguage when it differs from removed language", () => {
        setSelectedLanguage("fr")
        removeLanguage("es")
        expect(getSelectedLanguage()).toBe("fr")
    })

    it("does not affect other languages", () => {
        setCurrentLevel("es", "B1")
        setCurrentLevel("fr", "A2")

        removeLanguage("es")

        expect(getCurrentLevel("fr")).toBe("A2")
    })
})

describe("getStartedLanguages", () => {
    it("returns empty array when no languages are started", () => {
        expect(getStartedLanguages()).toEqual([])
    })

    it("returns languages that have an explicit level set", () => {
        setCurrentLevel("es", "A1")
        setCurrentLevel("fr", "B1")
        const started = getStartedLanguages()
        expect(started).toContain("es")
        expect(started).toContain("fr")
    })
})

describe("resetProgress", () => {
    it("clears all progress from localStorage", () => {
        setSelectedLanguage("es")
        setCurrentLevel("es", "B2")
        resetProgress()
        const p = loadProgress()
        expect(p.selectedLanguage).toBeNull()
        expect(p.levels).toEqual({})
    })
})

// ─── Schema migration (BUG-005) ───────────────────────────────────────────────

describe("schema migration", () => {
    it("stamps schemaVersion=4 on a fresh write", () => {
        setSelectedLanguage("es")
        const p = loadProgress()
        expect(p.schemaVersion).toBe(4)
    })

    it("migrates v0 data: adds missing masteredUnits", () => {
        // Write raw v0 data (no schemaVersion, no masteredUnits)
        localStorage.setItem("ls:progress", JSON.stringify({
            selectedLanguage: "es",
            levels: { es: "A2" },
            completedLessons: { es: ["lesson-1"] },
        }))
        const p = loadProgress()
        expect(p.masteredUnits).toEqual({})
        expect(p.schemaVersion).toBe(4)
        // Original data preserved
        expect(p.selectedLanguage).toBe("es")
        expect(p.levels.es).toBe("A2")
        expect(p.completedLessons.es).toContain("lesson-1")
    })

    it("does not overwrite existing masteredUnits during v0 migration", () => {
        localStorage.setItem("ls:progress", JSON.stringify({
            selectedLanguage: "fr",
            levels: { fr: "B1" },
            completedLessons: {},
            masteredUnits: { fr: ["unit-1"] },
        }))
        const p = loadProgress()
        expect(p.masteredUnits.fr).toContain("unit-1")
    })

    it("already-v1 data is loaded without alteration", () => {
        localStorage.setItem("ls:progress", JSON.stringify({
            schemaVersion: 1,
            selectedLanguage: "ja",
            levels: { ja: "A1" },
            completedLessons: {},
            masteredUnits: {},
        }))
        const p = loadProgress()
        expect(p.schemaVersion).toBe(4)
        expect(p.selectedLanguage).toBe("ja")
    })
})

// ---------------------------------------------------------------------------
// Checkpoint helpers
// ---------------------------------------------------------------------------

import { markCheckpointDone, getCompletedCheckpoints } from "./progress"

describe("getCompletedCheckpoints", () => {
    it("returns empty array for unknown langId", () => {
        expect(getCompletedCheckpoints("ko")).toEqual([])
    })

    it("returns completed checkpoint IDs for a language", () => {
        markCheckpointDone("ko", "ko-cp-a1-1")
        expect(getCompletedCheckpoints("ko")).toContain("ko-cp-a1-1")
    })

    it("does not return checkpoints from a different language", () => {
        markCheckpointDone("ko", "ko-cp-a1-1")
        expect(getCompletedCheckpoints("fr")).toEqual([])
    })
})

describe("markCheckpointDone", () => {
    it("is idempotent — calling twice does not duplicate the entry", () => {
        markCheckpointDone("ko", "ko-cp-a1-1")
        markCheckpointDone("ko", "ko-cp-a1-1")
        expect(getCompletedCheckpoints("ko").filter(id => id === "ko-cp-a1-1")).toHaveLength(1)
    })

    it("persists multiple checkpoints across the same language", () => {
        markCheckpointDone("ko", "ko-cp-a1-1")
        markCheckpointDone("ko", "ko-cp-a1-2")
        const done = getCompletedCheckpoints("ko")
        expect(done).toContain("ko-cp-a1-1")
        expect(done).toContain("ko-cp-a1-2")
    })
})

describe("resetLanguageProgress clears completedCheckpoints", () => {
    it("removes checkpoints for the reset language", () => {
        markCheckpointDone("ko", "ko-cp-a1-1")
        resetLanguageProgress("ko")
        expect(getCompletedCheckpoints("ko")).toEqual([])
    })

    it("does not remove checkpoints for other languages", () => {
        markCheckpointDone("ko", "ko-cp-a1-1")
        markCheckpointDone("fr", "fr-cp-a1-1")
        resetLanguageProgress("ko")
        expect(getCompletedCheckpoints("fr")).toContain("fr-cp-a1-1")
    })
})

describe("removeLanguage clears completedCheckpoints", () => {
    it("removes checkpoints when the language is removed", () => {
        setCurrentLevel("ko", "A1")
        markCheckpointDone("ko", "ko-cp-a1-1")
        removeLanguage("ko")
        expect(getCompletedCheckpoints("ko")).toEqual([])
    })
})

describe("schema migration — v3 data without completedCheckpoints", () => {
    it("hydrates without crashing and returns empty completedCheckpoints", () => {
        localStorage.setItem("ls:progress", JSON.stringify({
            schemaVersion: 3,
            selectedLanguage: "ko",
            levels: { ko: "A1" },
            completedLessons: {},
            masteredUnits: {},
            // no completedCheckpoints field — simulates pre-v4 save
        }))
        const p = loadProgress()
        expect(p.schemaVersion).toBe(4)
        expect(getCompletedCheckpoints("ko")).toEqual([])
    })
})
