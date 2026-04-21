// store/SupabaseStatsStorage.ts — IStatsStorage backed by Supabase daily_stats table.
//
// Write strategy: fire-and-forget upserts using atomic SQL increments.
// Reads hydrate a local cache on login; in-memory Zustand store handles reactivity.
//
// Atomic increment pattern avoids lost-update races when multiple tabs are open:
//   INSERT ... ON CONFLICT DO UPDATE SET reviewed = daily_stats.reviewed + EXCLUDED.reviewed
// This is handled via the upsert_daily_stat RPC defined in DATABASE_SCHEMA.sql.
// If the RPC is not yet deployed, falls back to a client-side read-modify-write.

import type { SupabaseClient } from "@supabase/supabase-js"
import type { StatsData, DayStats } from "./useStatsStore"
import type { IStatsStorage } from "./IStatsStorage"
import { logError } from "../utils/logger"

interface StatRow {
    lang_id: string
    study_date: string
    reviewed: number
    correct: number
    acts: number
    q_total: number
    q_correct: number
}

export class SupabaseStatsStorage implements IStatsStorage {
    private userId: string | null = null

    constructor(private readonly sb: SupabaseClient) {}

    setUserId(userId: string): void {
        this.userId = userId
    }

    // ── Load (called on login to hydrate Zustand store) ───────────────────────

    async load(): Promise<StatsData> {
        if (!this.userId) return {}
        const { data, error } = await this.sb
            .from("daily_stats")
            .select("lang_id, study_date, reviewed, correct, acts, q_total, q_correct")
            .eq("user_id", this.userId)
            .limit(5000)
        if (error) { logError("SupabaseStatsStorage.load", error); return {} }

        const result: StatsData = {}
        for (const row of (data ?? []) as StatRow[]) {
            if (!result[row.lang_id]) result[row.lang_id] = {}
            result[row.lang_id][row.study_date] = {
                reviewed: row.reviewed,
                correct:  row.correct,
                acts:     row.acts,
                qTotal:   row.q_total,
                qCorrect: row.q_correct,
            }
        }
        return result
    }

    // ── Writes (atomic upsert increments) ─────────────────────────────────────

    async recordReview(langId: string, date: string, correct: boolean): Promise<void> {
        this.upsertDelta(langId, date, {
            reviewed: 1,
            correct:  correct ? 1 : 0,
            acts:     0,
            q_total:  0,
            q_correct: 0,
        })
    }

    async recordQuizAnswer(langId: string, date: string, correct: boolean): Promise<void> {
        this.upsertDelta(langId, date, {
            reviewed: 0,
            correct:  0,
            acts:     0,
            q_total:  1,
            q_correct: correct ? 1 : 0,
        })
    }

    async recordActivity(langId: string, date: string): Promise<void> {
        this.upsertDelta(langId, date, {
            reviewed: 0, correct: 0, acts: 1, q_total: 0, q_correct: 0,
        })
    }

    // ── Bulk (export/import) ──────────────────────────────────────────────────

    async saveAll(data: StatsData): Promise<void> {
        if (!this.userId) return
        const rows = Object.entries(data).flatMap(([lang_id, days]) =>
            Object.entries(days).map(([study_date, s]) => ({
                user_id:   this.userId!,
                lang_id,
                study_date,
                reviewed:  s.reviewed,
                correct:   s.correct,
                acts:      s.acts,
                q_total:   s.qTotal,
                q_correct: s.qCorrect,
            }))
        )
        if (rows.length === 0) return
        const { error } = await this.sb.from("daily_stats")
            .upsert(rows, { onConflict: "user_id,lang_id,study_date" })
        if (error) logError("SupabaseStatsStorage.saveAll", error)
    }

    async resetLanguage(langId: string): Promise<void> {
        // Handled by reset_language_data() RPC in SupabaseProgressStorage.resetLanguage
    }

    /** flush() is a no-op — all writes are fire-and-forget on each event. */
    async flush(): Promise<void> {}

    // ── Private helpers ───────────────────────────────────────────────────────

    private upsertDelta(langId: string, date: string, delta: {
        reviewed: number; correct: number; acts: number; q_total: number; q_correct: number
    }): void {
        if (!this.userId) return
        // Upsert with increment: insert if new row, add delta if existing.
        // Supabase upsert sets the full value on conflict, so we use a raw SQL approach
        // via the rpc if available, otherwise fetch-then-upsert.
        this.sb.rpc("increment_daily_stat", {
            p_user_id:   this.userId,
            p_lang_id:   langId,
            p_date:      date,
            p_reviewed:  delta.reviewed,
            p_correct:   delta.correct,
            p_acts:      delta.acts,
            p_q_total:   delta.q_total,
            p_q_correct: delta.q_correct,
        }).then(({ error }) => {
            if (error) {
                // Fallback: client-side read-modify-write (less ideal but functional)
                logError("SupabaseStatsStorage.upsertDelta (RPC missing — run DATABASE_SCHEMA.sql)", error)
                this.fallbackUpsert(langId, date, delta)
            }
        })
    }

    private async fallbackUpsert(langId: string, date: string, delta: {
        reviewed: number; correct: number; acts: number; q_total: number; q_correct: number
    }): Promise<void> {
        if (!this.userId) return
        const { data } = await this.sb.from("daily_stats")
            .select("reviewed, correct, acts, q_total, q_correct")
            .eq("user_id", this.userId).eq("lang_id", langId).eq("study_date", date)
            .single<Omit<StatRow, "lang_id" | "study_date">>()

        const current = data ?? { reviewed: 0, correct: 0, acts: 0, q_total: 0, q_correct: 0 }
        const { error } = await this.sb.from("daily_stats").upsert({
            user_id:   this.userId,
            lang_id:   langId,
            study_date: date,
            reviewed:  current.reviewed  + delta.reviewed,
            correct:   current.correct   + delta.correct,
            acts:      current.acts      + delta.acts,
            q_total:   current.q_total   + delta.q_total,
            q_correct: current.q_correct + delta.q_correct,
        }, { onConflict: "user_id,lang_id,study_date" })
        if (error) logError("SupabaseStatsStorage.fallbackUpsert", error)
    }
}
