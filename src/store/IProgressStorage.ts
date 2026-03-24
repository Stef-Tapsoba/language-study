// store/IProgressStorage.ts — Storage adapter interface for user progress.
//
// Stage 1 (current): LocalStorageProgressStorage implements this — all reads/writes
//                    go to localStorage, same as before.
// Stage 2 (Supabase): SupabaseProgressStorage will implement this — swap the
//                     adapter in ProgressContext without touching any page code.
//
// The interface is intentionally minimal: it mirrors the 6 operations that
// progress.ts currently performs, lifted into an injectable contract.

import { CEFRLevel, UserProgress } from "../types"

export interface IProgressStorage {
    /** Load the full progress object for the current session. */
    load(): UserProgress

    /** Persist the full progress object. */
    save(progress: UserProgress): void

    /** Mark a single lesson item (grammar, vocab, etc.) as complete. Idempotent. */
    markLessonComplete(langId: string, lessonId: string): void

    /** Mark a unit as mastered. Idempotent. */
    masterUnit(langId: string, unitId: string): void

    /** Advance the learner to a new CEFR level for a language. */
    setLevel(langId: string, level: CEFRLevel): void

    /** Reset all progress for a language back to A1. */
    resetLanguage(langId: string): void

    /** Remove a language entirely (level + all progress). */
    removeLanguage(langId: string): void
}
