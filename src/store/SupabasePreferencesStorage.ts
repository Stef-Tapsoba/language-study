// store/SupabasePreferencesStorage.ts — Supabase implementation of IPreferencesStorage.
//
// Write-through cache pattern:
//   - initSession() hydrates the cache from the user_preferences table on login.
//   - Read methods (isTtsAutoplay, isOnboarded) serve from the in-memory cache — no DB round-trips.
//   - Write methods update the cache synchronously and fire a Supabase UPSERT in the background.
//
// Required Supabase table (see IPreferencesStorage.ts for full SQL):
//   user_preferences (user_id, tts_autoplay, onboarded_languages)

import type { SupabaseClient } from "@supabase/supabase-js"
import { IPreferencesStorage } from "./IPreferencesStorage"
import { logError } from "../utils/logger"

interface PrefsRow {
    tts_autoplay: boolean
    onboarded_languages: string[]
}

export class SupabasePreferencesStorage implements IPreferencesStorage {
    private userId: string | null = null
    private cache: PrefsRow = { tts_autoplay: true, onboarded_languages: [] }

    constructor(private readonly sb: SupabaseClient) {}

    // ── Synchronous reads ─────────────────────────────────────────────────────

    isTtsAutoplay(): boolean {
        return this.cache.tts_autoplay
    }

    isOnboarded(langId: string): boolean {
        return this.cache.onboarded_languages.includes(langId)
    }

    // ── Async writes ──────────────────────────────────────────────────────────

    async setTtsAutoplay(enabled: boolean): Promise<void> {
        this.cache.tts_autoplay = enabled
        if (!this.userId) return
        this.sb.from("user_preferences")
            .upsert({ user_id: this.userId, tts_autoplay: enabled }, { onConflict: "user_id" })
            .then(({ error }) => { if (error) logError("SupabasePreferencesStorage.setTtsAutoplay", error) })
    }

    async setOnboarded(langId: string): Promise<void> {
        if (this.cache.onboarded_languages.includes(langId)) return
        this.cache.onboarded_languages = [...this.cache.onboarded_languages, langId]
        if (!this.userId) return
        this.sb.from("user_preferences")
            .upsert(
                { user_id: this.userId, onboarded_languages: this.cache.onboarded_languages },
                { onConflict: "user_id" }
            )
            .then(({ error }) => { if (error) logError("SupabasePreferencesStorage.setOnboarded", error) })
    }

    // ── Session lifecycle ─────────────────────────────────────────────────────

    async initSession(userId: string): Promise<void> {
        this.userId = userId
        const { data, error } = await this.sb
            .from("user_preferences")
            .select("tts_autoplay, onboarded_languages")
            .eq("user_id", userId)
            .maybeSingle<PrefsRow>()

        if (error) {
            logError("SupabasePreferencesStorage.initSession", error)
            return
        }
        if (data) {
            this.cache.tts_autoplay = data.tts_autoplay ?? true
            this.cache.onboarded_languages = data.onboarded_languages ?? []
        }
        // If no row exists yet, cache stays at defaults.
        // The row is created lazily on the first setTtsAutoplay / setOnboarded call.
    }
}
