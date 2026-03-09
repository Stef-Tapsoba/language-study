// store/progress.ts
// User progress is stored in localStorage under "ls:progress".

import { CEFRLevel, UserProgress } from "../types"

const KEY = "ls:progress"

const DEFAULT: UserProgress = {
    selectedLanguage: null,
    levels: {},
    completedLessons: {},
    masteredUnits: {}
}

export function loadProgress(): UserProgress {
    try {
        return { ...DEFAULT, ...JSON.parse(localStorage.getItem(KEY) ?? "{}") }
    } catch {
        return { ...DEFAULT }
    }
}

function save(p: UserProgress): void {
    localStorage.setItem(KEY, JSON.stringify(p))
}

/**
 * Called on every authenticated page load. If the stored progress belongs to a
 * different user, wipes it and starts fresh for the new user. Idempotent.
 */
export function initUserSession(userId: string): void {
    const p = loadProgress()
    if (p.userId !== userId) {
        // Different user (or no userId stored) — reset progress for this user
        save({ ...DEFAULT, userId })
    }
}

export function getSelectedLanguage(): string | null {
    return loadProgress().selectedLanguage
}

export function setSelectedLanguage(langId: string): void {
    const p = loadProgress()
    save({ ...p, selectedLanguage: langId })
}

export function getCurrentLevel(langId: string): CEFRLevel {
    return loadProgress().levels[langId] ?? "A1"
}

export function setCurrentLevel(langId: string, level: CEFRLevel): void {
    const p = loadProgress()
    save({ ...p, levels: { ...p.levels, [langId]: level } })
}

export function getCompletedLessons(langId: string): string[] {
    return loadProgress().completedLessons[langId] ?? []
}

export function markLessonComplete(langId: string, lessonId: string): void {
    const p = loadProgress()
    const existing = p.completedLessons[langId] ?? []
    if (!existing.includes(lessonId)) {
        save({
            ...p,
            completedLessons: {
                ...p.completedLessons,
                [langId]: [...existing, lessonId]
            }
        })
    }
}

export function resetProgress(): void {
    localStorage.removeItem(KEY)
}

/** Returns all langIds that have an explicit level set (i.e. the user has started them). */
export function getStartedLanguages(): string[] {
    return Object.keys(loadProgress().levels)
}

/** Resets progress for a language back to A1 but keeps it in the course list. */
export function resetLanguageProgress(langId: string): void {
    const p = loadProgress()
    const completedLessons = { ...p.completedLessons }
    const masteredUnits = { ...p.masteredUnits }
    delete completedLessons[langId]
    delete masteredUnits[langId]
    save({
        ...p,
        levels: { ...p.levels, [langId]: "A1" },
        completedLessons,
        masteredUnits,
    })
}

/** Removes a language completely — level, progress, and mastered units all gone. */
export function removeLanguage(langId: string): void {
    const p = loadProgress()
    const levels = { ...p.levels }
    const completedLessons = { ...p.completedLessons }
    const masteredUnits = { ...p.masteredUnits }
    delete levels[langId]
    delete completedLessons[langId]
    delete masteredUnits[langId]
    const selectedLanguage = p.selectedLanguage === langId ? null : p.selectedLanguage
    save({ ...p, selectedLanguage, levels, completedLessons, masteredUnits })
}

// ---------------------------------------------------------------------------
// Unit mastery helpers
// ---------------------------------------------------------------------------

/** Returns the list of mastered unit IDs for the given language. */
export function getMasteredUnits(langId: string): string[] {
    return loadProgress().masteredUnits[langId] ?? []
}

/** Marks a unit as mastered (completed or tested-out). Idempotent. */
export function masterUnit(langId: string, unitId: string): void {
    const p = loadProgress()
    const existing = p.masteredUnits[langId] ?? []
    if (!existing.includes(unitId)) {
        save({
            ...p,
            masteredUnits: {
                ...p.masteredUnits,
                [langId]: [...existing, unitId]
            }
        })
    }
}

/**
 * Returns true if the unit is available to study.
 * The first unit (order === 1) is always unlocked.
 * Any subsequent unit is unlocked once the previous unit is mastered.
 */
export function isUnitUnlocked(
    langId: string,
    unitId: string,
    allUnits: { id: string; order: number }[]
): boolean {
    const unit = allUnits.find(u => u.id === unitId)
    if (!unit) return false
    if (unit.order === 1) return true
    const prev = allUnits.find(u => u.order === unit.order - 1)
    if (!prev) return true
    return getMasteredUnits(langId).includes(prev.id)
}
