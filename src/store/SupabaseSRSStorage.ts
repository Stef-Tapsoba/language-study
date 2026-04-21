// store/SupabaseSRSStorage.ts — ISRSStorage backed by Supabase srs_cards table.
//
// Write-through cache strategy:
//   - hydrate() fetches rows from Supabase → populates local cache
//   - getStates() reads from local cache (synchronous — required by ISRSStorage)
//   - updateCard() runs SM-2 locally, updates cache, upserts to Supabase

import type { SupabaseClient } from "@supabase/supabase-js"
import type { SRSCardState } from "@myorg/srs"
import { calcNextReview, INITIAL_STATE } from "@myorg/srs"
import type { ISRSStorage } from "./ISRSStorage"
import { logError } from "../utils/logger"

// Row shape returned from srs_cards table
interface SrsRow {
    lang_id: string
    vocab_id: string
    ease_factor: number
    review_count: number
    streak: number
    next_review_at: number   // bigint as number in JS
    interval_days: number
}

type SrsCache = Record<string, Record<string, SRSCardState>>

export class SupabaseSRSStorage implements ISRSStorage {
    private cache: SrsCache = {}
    private userId: string | null = null

    constructor(private readonly sb: SupabaseClient) {}

    // Called by AuthContext after login
    setUserId(userId: string): void {
        this.userId = userId
        this.cache = {}
    }

    // ── Synchronous read (must stay sync — srs.ts helpers depend on this) ──────

    getStates(langId: string): Record<string, SRSCardState> {
        return this.cache[langId] ?? {}
    }

    // ── Hydration ─────────────────────────────────────────────────────────────

    async hydrate(langId?: string): Promise<void> {
        if (!this.userId) return
        let query = this.sb
            .from("srs_cards")
            .select("lang_id, vocab_id, ease_factor, review_count, streak, next_review_at, interval_days")
            .eq("user_id", this.userId)
            .limit(5000)
        if (langId) query = query.eq("lang_id", langId)

        const { data, error } = await query
        if (error) { logError("SupabaseSRSStorage.hydrate", error); return }

        for (const row of (data ?? []) as SrsRow[]) {
            if (!this.cache[row.lang_id]) this.cache[row.lang_id] = {}
            this.cache[row.lang_id][row.vocab_id] = {
                easeFactor:   row.ease_factor,
                reviewCount:  row.review_count,
                streak:       row.streak,
                nextReviewAt: row.next_review_at,
                intervalDays: row.interval_days,
            }
        }
    }

    // ── Write ─────────────────────────────────────────────────────────────────

    async updateCard(langId: string, vocabId: string, quality: 1 | 4): Promise<void> {
        const uid = this.userId; if (!uid) return
        const current = this.cache[langId]?.[vocabId] ?? { ...INITIAL_STATE }
        const { nextState } = calcNextReview(current, quality)

        if (!this.cache[langId]) this.cache[langId] = {}
        this.cache[langId][vocabId] = nextState

        this.sb.from("srs_cards").upsert({
            user_id:        uid,
            lang_id:        langId,
            vocab_id:       vocabId,
            ease_factor:    nextState.easeFactor,
            review_count:   nextState.reviewCount,
            streak:         nextState.streak,
            next_review_at: nextState.nextReviewAt,
            interval_days:  nextState.intervalDays,
        }, { onConflict: "user_id,lang_id,vocab_id" })
            .then(({ error }) => { if (error) logError("SupabaseSRSStorage.updateCard", error) })
    }

    async resetLanguage(langId: string): Promise<void> {
        delete this.cache[langId]
        // DB rows are deleted by reset_language_data() RPC in SupabaseProgressStorage.resetLanguage
    }

    async resetAll(): Promise<void> {
        // In-memory only — DB rows are protected by RLS and cannot be read by any other user.
        // Full deletion is handled by account deletion CASCADE or reset_language_data RPC.
        this.cache = {}
    }

    // ── Bulk operations (export/import) ───────────────────────────────────────

    async loadAll(): Promise<SrsCache> {
        if (!this.userId) return {}
        const { data, error } = await this.sb
            .from("srs_cards")
            .select("lang_id, vocab_id, ease_factor, review_count, streak, next_review_at, interval_days")
            .eq("user_id", this.userId)
        if (error) { logError("SupabaseSRSStorage.loadAll", error); return {} }

        const result: SrsCache = {}
        for (const row of (data ?? []) as SrsRow[]) {
            if (!result[row.lang_id]) result[row.lang_id] = {}
            result[row.lang_id][row.vocab_id] = {
                easeFactor:   row.ease_factor,
                reviewCount:  row.review_count,
                streak:       row.streak,
                nextReviewAt: row.next_review_at,
                intervalDays: row.interval_days,
            }
        }
        return result
    }

    async saveAll(data: SrsCache): Promise<void> {
        const uid = this.userId; if (!uid) return
        this.cache = data
        const rows = Object.entries(data).flatMap(([lang_id, cards]) =>
            Object.entries(cards).map(([vocab_id, s]) => ({
                user_id:        uid,
                lang_id,
                vocab_id,
                ease_factor:    s.easeFactor,
                review_count:   s.reviewCount,
                streak:         s.streak,
                next_review_at: s.nextReviewAt,
                interval_days:  s.intervalDays,
            }))
        )
        if (rows.length === 0) return
        const { error } = await this.sb.from("srs_cards")
            .upsert(rows, { onConflict: "user_id,lang_id,vocab_id" })
        if (error) logError("SupabaseSRSStorage.saveAll", error)
    }
}
