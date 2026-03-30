// store/ISRSStorage.ts — Storage adapter interface for SRS card state.
//
// Stage 1 (current): LocalStorageSRSStorage implements this.
// Stage 2 (Supabase): SupabaseSRSStorage will upsert rows into the srs_cards table.
//
// Read helpers (getDueCards, getNextDueDate, etc.) stay in srs.ts as
// synchronous functions — they read from a local cache that the write
// methods keep up-to-date.

import type { SRSCardState } from "@myorg/srs"

export interface ISRSStorage {
    /** Load all card states for a language. */
    getStates(langId: string): Record<string, SRSCardState>

    /** Persist an updated card state after a review. */
    updateCard(langId: string, vocabId: string, quality: 1 | 4): Promise<void>

    /** Wipe all card states for a language (called on language reset). */
    resetLanguage(langId: string): Promise<void>

    /** Wipe all card states for every language (called on user change). */
    resetAll(): Promise<void>
}
