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
// Supabase table (run once in DATABASE_SCHEMA.sql):
//   create table user_preferences (
//     user_id            uuid primary key references auth.users(id) on delete cascade,
//     tts_autoplay       boolean  not null default true,
//     onboarded_languages text[]  not null default '{}'
//   );
//   alter table user_preferences enable row level security;
//   create policy "users manage own preferences" on user_preferences
//     for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

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
