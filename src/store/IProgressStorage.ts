// store/IProgressStorage.ts — Storage adapter interface for user progress.
//
// Stage 1 (current): LocalStorageProgressStorage implements this — all reads/writes
//                    go to localStorage, same as before.
// Stage 2 (Supabase): SupabaseProgressStorage will implement this — swap the
//                     adapter via registry.configure() without touching any page code.
//
// All write methods are async so the interface is Stage 2-ready without further
// changes. LocalStorageProgressStorage returns Promise.resolve() immediately after
// the synchronous localStorage write, so Stage 1 callers see no observable delay.
//
// Read methods stay synchronous — they serve from a write-through local cache.
// Stage 2 will hydrate that cache from Supabase once on login.

import { CEFRLevel, UserProgress } from "../types"

/**
 * Distinguishes content types that share the completedLessons namespace locally
 * but will map to separate tables in Supabase (Stage 2).
 *
 * New exercise types registered in src/exerciseTypes/ should reuse an existing
 * ContentType wherever the content is the same:
 *   sentence-scramble → "grammar"
 *   cloze             → "reading"
 *   dictation         → "listening"
 *   vocab-matching    → "vocab"
 *
 * Only add a new value here if the exercise tracks genuinely separate content
 * that does not overlap with any existing type.
 */
export type ContentType =
    | "grammar"
    | "vocab"
    | "verb"
    | "reading"
    | "listening"
    | "culture"

export interface IProgressStorage {
    /**
     * Return the current progress from the write-through in-memory cache.
     *
     * Stage 1 (localStorage): reads the JSON blob directly — cheap.
     * Stage 2 (Supabase): reads from a local cache populated by initSession().
     *   Never issues a DB query. The cache is kept up-to-date by every write method.
     *
     * Contract: callers may call load() after every mutation without performance concern.
     * Do NOT call load() to detect whether hydration has completed — use
     * ProgressContext.isHydrating for that.
     */
    load(): UserProgress

    /** Persist the full progress object (used for bulk writes, e.g. import). */
    save(progress: UserProgress): Promise<void>

    /**
     * Initialise a session for the given user.
     * If the stored progress belongs to a different user, wipes it and starts fresh.
     * Stage 2: upsert a row in users table and hydrate progress from Supabase.
     */
    initSession(userId: string): Promise<void>

    /**
     * Persist the user's active language selection.
     * Stage 2: write to user_preferences table.
     */
    setSelectedLanguage(langId: string): Promise<void>

    /** Mark a single lesson item as complete. Idempotent. */
    markLessonComplete(langId: string, lessonId: string, contentType: ContentType): Promise<void>

    /** Mark a unit as mastered. Idempotent. */
    masterUnit(langId: string, unitId: string): Promise<void>

    /** Advance the learner to a new CEFR level for a language. */
    setLevel(langId: string, level: CEFRLevel): Promise<void>

    /** Reset all progress for a language back to A1. */
    resetLanguage(langId: string): Promise<void>

    /** Remove a language entirely (level + all progress). */
    removeLanguage(langId: string): Promise<void>
}
