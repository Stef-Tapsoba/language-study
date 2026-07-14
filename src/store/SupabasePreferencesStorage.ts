// store/SupabasePreferencesStorage.ts — Supabase implementation of IPreferencesStorage.
//
// Write-through cache pattern:
//   - initSession() hydrates the cache from the user_preferences table on login.
//   - Read methods serve from the in-memory cache — no DB round-trips.
//   - Write methods update the cache synchronously and fire a Supabase UPSERT in the background.
//
// Schema (user_preferences table — see initial migration):
//   user_id     UUID PRIMARY KEY
//   preferences JSONB  { tts_autoplay: boolean, onboarded_languages: string[], theme: string }
//   updated_at  TIMESTAMPTZ

import type { SupabaseClient } from "@supabase/supabase-js"
import { IPreferencesStorage } from "./IPreferencesStorage"
import { logError } from "../utils/logger"
import { syncOrQueue } from "./outbox"

interface PrefsJson {
    tts_autoplay?: boolean
    onboarded_languages?: string[]
    theme?: string
}

interface PrefsRow {
    preferences: PrefsJson
}

export class SupabasePreferencesStorage implements IPreferencesStorage {
    private userId: string | null = null
    private readonly cache: Required<PrefsJson> = {
        tts_autoplay: true,
        onboarded_languages: [],
        theme: "system",
    }

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
        await this.upsert()
    }

    async setOnboarded(langId: string): Promise<void> {
        if (this.cache.onboarded_languages.includes(langId)) return
        this.cache.onboarded_languages = [...this.cache.onboarded_languages, langId]
        await this.upsert()
    }

    // ── Session lifecycle ─────────────────────────────────────────────────────

    async initSession(userId: string): Promise<void> {
        this.userId = userId
        const { data, error } = await this.sb
            .from("user_preferences")
            .select("preferences")
            .eq("user_id", userId)
            .maybeSingle<PrefsRow>()

        if (error) {
            logError("SupabasePreferencesStorage.initSession", error)
            return
        }
        if (data?.preferences) {
            const p = data.preferences
            this.cache.tts_autoplay        = p.tts_autoplay        ?? true
            this.cache.onboarded_languages = p.onboarded_languages ?? []
            this.cache.theme               = p.theme               ?? "system"
        }
        // No row yet → defaults stay. Row is created lazily on first write.
    }

    // ── Private ───────────────────────────────────────────────────────────────

    private async upsert(): Promise<void> {
        if (!this.userId) return
        // Single-row LWW: a queued preferences write is always superseded by a newer one.
        await syncOrQueue(this.sb, {
            kind: "upsert", table: "user_preferences",
            payload: { user_id: this.userId, preferences: { ...this.cache } },
            onConflict: "user_id",
            key: `user_preferences|${this.userId}`,
        })
    }
}
