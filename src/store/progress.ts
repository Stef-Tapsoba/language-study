// store/progress.ts — CEFR level, completed lessons, and mastered units (localStorage "ls:progress:{userId}")
//
// Key strategy:
//   Anonymous / pre-login:  "ls:progress"          (legacy key, read-only fallback)
//   Authenticated:          "ls:progress:{userId}"  (user-scoped key, set by initUserSession)
//
// On the first call to initUserSession(userId), if no user-scoped key exists yet,
// the legacy key is migrated forward (copied to the new key then removed) so existing
// users keep all their progress after upgrading.

import { CEFRLevel, UserProgress, UnitReinforcementState, GoalId } from "../types"
import type { ContentType, ReinforcementSection } from "./IProgressStorage"

const LEGACY_KEY = "ls:progress"
const userKey = (userId: string) => `ls:progress:${userId}`

// Bump this whenever a breaking schema change is made (field rename, removal, type change).
// Add a migration branch in `migrate()` for each version increment.
export const SCHEMA_VERSION = 4

const DEFAULT: UserProgress = {
    schemaVersion: SCHEMA_VERSION,
    selectedLanguage: null,
    levels: {},
    completedLessons: {},
    masteredUnits: {},
    completedCheckpoints: {},
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

    // v1 → v2: completedReinforcement introduced. No field migration needed.
    // v2 → v3: goal field introduced. No field migration needed —
    // the field is optional; absent = falls back to ls:goal for migration compat.
    // v3 → v4: completedCheckpoints introduced. No field migration needed —
    // absent key = no checkpoints done yet, which is the correct default.

    return { ...DEFAULT, ...raw, schemaVersion: SCHEMA_VERSION }
}

// In-memory write-through cache — avoids a JSON.parse on every mutation.
// Invalidated to null on key switch (user change) or resetProgress().
let _activeKey = LEGACY_KEY
let _cache: UserProgress | null = null

function readKey(): string { return _activeKey }

export function loadProgress(): UserProgress {
    if (_cache && localStorage.getItem(readKey()) !== null) return _cache
    try {
        const raw = JSON.parse(localStorage.getItem(readKey()) ?? "{}")
        _cache = raw && typeof raw === "object" ? migrate(raw as Record<string, unknown>) : { ...DEFAULT }
    } catch {
        _cache = { ...DEFAULT }
    }
    return _cache as UserProgress
}

export function save(p: UserProgress): void {
    _cache = p
    localStorage.setItem(readKey(), JSON.stringify(p))
}

/**
 * Called on every authenticated page load.
 * - Switches the active storage key to `ls:progress:{userId}`.
 * - On first switch, migrates legacy `ls:progress` data for this user to the
 *   new key (copies then removes the old key) so existing users keep their progress.
 * - If the legacy data belongs to a different user, starts fresh.
 */
export function initUserSession(userId: string): void {
    const newKey = userKey(userId)
    if (_activeKey !== newKey) {
        _activeKey = newKey
        _cache = null

        // Migrate: if new key is empty, check if legacy key has data for this user
        if (localStorage.getItem(newKey) === null) {
            const legacyRaw = localStorage.getItem(LEGACY_KEY)
            if (legacyRaw !== null) {
                try {
                    const parsed = JSON.parse(legacyRaw)
                    const legacyUserId = parsed?.userId as string | undefined
                    if (!legacyUserId || legacyUserId === userId) {
                        // Belongs to this user — migrate it forward
                        localStorage.setItem(newKey, legacyRaw)
                        localStorage.removeItem(LEGACY_KEY)
                    }
                } catch { /* corrupt legacy data — start fresh */ }
            }
        }
    }

    const p = loadProgress()
    if (p.userId !== userId) {
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

export function markLessonComplete(langId: string, lessonId: string, contentType: ContentType): void {
    const p = loadProgress()
    const existing = p.completedLessons[langId] ?? []
    if (existing.includes(lessonId)) return
    // contentType is intentionally not written to completedByType here.
    // Stage 2 (Supabase): SupabaseProgressStorage.markLessonComplete() routes writes
    // to the lesson_completions table by content_type column — the flat
    // completedLessons array is the sole Stage 1 store.
    void contentType
    save({
        ...p,
        completedLessons: { ...p.completedLessons, [langId]: [...existing, lessonId] },
    })
}

export function resetProgress(): void {
    localStorage.removeItem(readKey())
    _activeKey = LEGACY_KEY
    _cache = null
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
    const completedCheckpoints = { ...p.completedCheckpoints }
    delete completedLessons[langId]
    delete masteredUnits[langId]
    delete completedCheckpoints[langId]
    save({
        ...p,
        levels: { ...p.levels, [langId]: "A1" },
        completedLessons,
        masteredUnits,
        completedCheckpoints,
    })
}

/** Removes a language completely — level, progress, and mastered units all gone. */
export function removeLanguage(langId: string): void {
    const p = loadProgress()
    const levels = { ...p.levels }
    const completedLessons = { ...p.completedLessons }
    const masteredUnits = { ...p.masteredUnits }
    const completedCheckpoints = { ...p.completedCheckpoints }
    delete levels[langId]
    delete completedLessons[langId]
    delete masteredUnits[langId]
    delete completedCheckpoints[langId]
    const selectedLanguage = p.selectedLanguage === langId ? null : p.selectedLanguage
    save({ ...p, selectedLanguage, levels, completedLessons, masteredUnits, completedCheckpoints })
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

// ---------------------------------------------------------------------------
// Reinforcement exercise completion helpers
// ---------------------------------------------------------------------------

const EMPTY_REINFORCEMENT: UnitReinforcementState = Object.freeze({ grammarLessonIds: [] })

/** Returns the reinforcement state for a unit, or an empty default. */
export function getReinforcementState(langId: string, unitId: string): UnitReinforcementState {
    return loadProgress().completedReinforcement?.[langId]?.[unitId] ?? EMPTY_REINFORCEMENT
}

/**
 * Mark a reinforcement exercise as done. Idempotent.
 *
 * @param section         "grammar" | "vocab" | "verbs"
 * @param grammarLessonId Required when section === "grammar".
 */
export function markReinforcementDone(
    langId: string,
    unitId: string,
    section: ReinforcementSection,
    grammarLessonId?: string
): void {
    const p = loadProgress()
    const langMap = p.completedReinforcement?.[langId] ?? {}
    const current = langMap[unitId] ?? { grammarLessonIds: [] }

    let next: UnitReinforcementState
    if (section === "grammar") {
        if (!grammarLessonId) return
        if (current.grammarLessonIds.includes(grammarLessonId)) return
        next = { ...current, grammarLessonIds: [...current.grammarLessonIds, grammarLessonId] }
    } else {
        if (current[section] === true) return
        next = { ...current, [section]: true as const }
    }

    save({
        ...p,
        completedReinforcement: {
            ...p.completedReinforcement,
            [langId]: { ...langMap, [unitId]: next },
        },
    })
}

// ---------------------------------------------------------------------------
// Checkpoint completion helpers
// ---------------------------------------------------------------------------

/** Returns completed checkpoint IDs for a language, or empty array. */
export function getCompletedCheckpoints(langId: string): string[] {
    return loadProgress().completedCheckpoints?.[langId] ?? []
}

/** Marks a checkpoint as completed for a language. Idempotent. */
export function markCheckpointDone(langId: string, checkpointId: string): void {
    const p = loadProgress()
    const existing = p.completedCheckpoints?.[langId] ?? []
    if (existing.includes(checkpointId)) return
    save({
        ...p,
        completedCheckpoints: {
            ...p.completedCheckpoints,
            [langId]: [...existing, checkpointId],
        },
    })
}

// ---------------------------------------------------------------------------
// Learning goal helpers
// ---------------------------------------------------------------------------

/** Returns the stored goal from UserProgress, falling back to ls:goal for migration. */
export function getGoalFromProgress(): GoalId {
    return loadProgress().goal ?? "general"
}

/** Persists the goal in UserProgress (so it syncs via IProgressStorage in Stage 2). */
export function setGoalInProgress(goalId: GoalId): void {
    const p = loadProgress()
    save({ ...p, goal: goalId })
}

export { isUnitUnlocked } from "../domain/unitUnlock"
