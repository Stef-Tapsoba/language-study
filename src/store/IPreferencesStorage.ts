// store/IPreferencesStorage.ts — Storage adapter interface for user preferences.
//
// Covers preferences that benefit from cross-device sync:
//   - TTS auto-play toggle
//   - Per-language onboarding dismissal
//
// Read methods are synchronous (serve from a write-through cache).
// Write methods are async so the interface is Supabase-ready without further changes.
// LocalStoragePreferencesStorage returns Promise.resolve() immediately after each
// synchronous write — Stage 1 callers see no observable delay.
//
// Supabase table: user_preferences (already in initial migration)
//   user_id     UUID PRIMARY KEY
//   preferences JSONB  { tts_autoplay: boolean, onboarded_languages: string[], theme: string }
//   updated_at  TIMESTAMPTZ
// RLS policy: owner-all (auth.uid() = user_id)

export interface IPreferencesStorage {
    // ── Synchronous reads (write-through cache) ──────────────────────────────

    /** Returns the persisted TTS auto-play preference (defaults to true when unset). */
    isTtsAutoplay(): boolean

    /** Returns true if the onboarding banner has been dismissed for this language. */
    isOnboarded(langId: string): boolean

    // ── Async writes (fire-and-forget at call sites) ──────────────────────────

    /** Persist the TTS auto-play preference. */
    setTtsAutoplay(enabled: boolean): Promise<void>

    /** Mark the onboarding banner as dismissed for a language. Idempotent. */
    setOnboarded(langId: string): Promise<void>

    // ── Session lifecycle ─────────────────────────────────────────────────────

    /**
     * Hydrate the in-memory cache from Supabase for the given user.
     * Called once on login — no-op in LocalStoragePreferencesStorage.
     */
    initSession(userId: string): Promise<void>
}
