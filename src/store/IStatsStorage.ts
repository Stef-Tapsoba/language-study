// store/IStatsStorage.ts — Storage adapter interface for daily study stats.
//
// Stage 1 (current): LocalStorageStatsStorage implements this.
// Stage 2 (Supabase): SupabaseStatsStorage will upsert rows into daily_stats.
//
// useStatsStore (Zustand) owns the in-memory reactive state. IStatsStorage
// owns persistence. On app init, the store hydrates from IStatsStorage.load().
// On each mutation, the store updates its in-memory state and calls the
// corresponding IStatsStorage method to persist the delta.

import type { StatsData } from "./useStatsStore"

export interface IStatsStorage {
    /** Load the full stats history (used to hydrate the in-memory store). */
    load(): Promise<StatsData>

    /** Persist one flashcard review result. */
    recordReview(langId: string, date: string, correct: boolean): Promise<void>

    /** Persist one quiz answer from any non-flashcard activity. */
    recordQuizAnswer(langId: string, date: string, correct: boolean): Promise<void>

    /** Persist any study activity that doesn't produce a quiz result. */
    recordActivity(langId: string, date: string): Promise<void>

    /** Replace all stats data (used for import/restore). */
    saveAll(data: StatsData): Promise<void>

    /** Wipe all stats for a language (called on language reset). */
    resetLanguage(langId: string): Promise<void>

    /**
     * Flush any buffered writes to the storage backend.
     * Stage 1 (localStorage): no-op — writes are synchronous.
     * Stage 2 (Supabase): flushes the pending write queue accumulated during a session.
     * Call on session end, drill completion, and page-hide events.
     */
    flush(): Promise<void>
}
