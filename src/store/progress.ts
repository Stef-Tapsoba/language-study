// store/progress.ts — CEFR level, completed lessons, and mastered units (localStorage "ls:progress")

import { CEFRLevel, UserProgress } from "../types"

const KEY = "ls:progress"

// Bump this whenever a breaking schema change is made (field rename, removal, type change).
// Add a migration branch in `migrate()` for each version increment.
const SCHEMA_VERSION = 1

const DEFAULT: UserProgress = {
    schemaVersion: SCHEMA_VERSION,
    selectedLanguage: null,
    levels: {},
    completedLessons: {},
    masteredUnits: {}
}

/**
 * Migrate raw stored data from an older schema version to the current one.
 * Each `if (version < N)` block is idempotent and runs in order so a user
 * jumping multiple versions gets all migrations applied.
 */
function migrate(raw: Record<string, unknown>): UserProgress {
    let version = typeof raw.schemaVersion === "number" ? raw.schemaVersion : 0

    // v0 → v1: masteredUnits was not always persisted — ensure it exists.
    if (version < 1) {
        if (!raw.masteredUnits || typeof raw.masteredUnits !== "object") {
            raw = { ...raw, masteredUnits: {} }
        }
    }

    // Future migrations go here:
    // if (version < 2) { raw = { ...raw, newField: defaultValue }; version = 2 }

    return { ...DEFAULT, ...raw, schemaVersion: SCHEMA_VERSION }
}

// In-memory write-through cache — avoids a JSON.parse on every mutation.
// Invalidated to null only when resetProgress() wipes the key entirely.
let _cache: UserProgress | null = null

export function loadProgress(): UserProgress {
    if (_cache && localStorage.getItem(KEY) !== null) return _cache
    try {
        const raw = JSON.parse(localStorage.getItem(KEY) ?? "{}")
        _cache = raw && typeof raw === "object" ? migrate(raw as Record<string, unknown>) : { ...DEFAULT }
    } catch {
        _cache = { ...DEFAULT }
    }
    return _cache as UserProgress
}

export function save(p: UserProgress): void {
    _cache = p
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
    _cache = null
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
 * The first unit in sorted order is always unlocked.
 * Any subsequent unit is unlocked once the immediately preceding unit is mastered.
 * Uses index-based lookup so non-contiguous `order` values (e.g. 1, 2, 4) are handled
 * correctly — there is no silent bypass when a gap exists in the ordering.
 */
export function isUnitUnlocked(
    langId: string,
    unitId: string,
    allUnits: { id: string; order: number }[]
): boolean {
    const sorted = [...allUnits].sort((a, b) => a.order - b.order)
    const idx = sorted.findIndex(u => u.id === unitId)
    if (idx < 0) return false
    if (idx === 0) return true
    return getMasteredUnits(langId).includes(sorted[idx - 1].id)
}
