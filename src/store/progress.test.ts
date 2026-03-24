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
        markLessonComplete("es", "lesson-1")
        expect(getCompletedLessons("es")).toContain("lesson-1")
    })

    it("is idempotent — marking the same lesson twice does not duplicate", () => {
        markLessonComplete("es", "lesson-1")
        markLessonComplete("es", "lesson-1")
        const lessons = getCompletedLessons("es")
        expect(lessons.filter(l => l === "lesson-1").length).toBe(1)
    })

    it("accumulates multiple distinct lessons", () => {
        markLessonComplete("es", "lesson-1")
        markLessonComplete("es", "lesson-2")
        const lessons = getCompletedLessons("es")
        expect(lessons).toContain("lesson-1")
        expect(lessons).toContain("lesson-2")
    })

    it("keeps lessons separate per language", () => {
        markLessonComplete("es", "lesson-1")
        markLessonComplete("fr", "lesson-A")
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
        expect(isUnitUnlocked("es", "u-unknown", units)).toBe(false)
    })

    it("always unlocks the first unit (order === 1)", () => {
        expect(isUnitUnlocked("es", "u1", units)).toBe(true)
    })

    it("locks the second unit when the first is not mastered", () => {
        expect(isUnitUnlocked("es", "u2", units)).toBe(false)
    })

    it("unlocks the second unit once the first is mastered", () => {
        masterUnit("es", "u1")
        expect(isUnitUnlocked("es", "u2", units)).toBe(true)
    })

    it("unlocks the third unit once the second is mastered (not just first)", () => {
        masterUnit("es", "u1")
        expect(isUnitUnlocked("es", "u3", units)).toBe(false)
        masterUnit("es", "u2")
        expect(isUnitUnlocked("es", "u3", units)).toBe(true)
    })

    it("returns true when there is no previous unit in the list", () => {
        // Edge case: unit whose order-1 has no match in the array
        const sparse = [{ id: "u5", order: 5 }]
        expect(isUnitUnlocked("es", "u5", sparse)).toBe(true)
    })
})

describe("resetLanguageProgress", () => {
    it("resets level to A1 and clears lessons/units for the language", () => {
        setCurrentLevel("es", "B2")
        markLessonComplete("es", "lesson-1")
        masterUnit("es", "unit-1")

        resetLanguageProgress("es")

        expect(getCurrentLevel("es")).toBe("A1")
        expect(getCompletedLessons("es")).toEqual([])
        expect(getMasteredUnits("es")).toEqual([])
    })

    it("does not affect other languages", () => {
        setCurrentLevel("es", "B2")
        setCurrentLevel("fr", "A2")
        markLessonComplete("fr", "fr-lesson")

        resetLanguageProgress("es")

        expect(getCurrentLevel("fr")).toBe("A2")
        expect(getCompletedLessons("fr")).toContain("fr-lesson")
    })
})

describe("removeLanguage", () => {
    it("removes level, lessons, and mastered units for the language", () => {
        setCurrentLevel("es", "A2")
        markLessonComplete("es", "l1")
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
