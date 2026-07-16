// store/SupabaseStatsStorage.ts — IStatsStorage backed by Supabase daily_stats table.
//
// Write strategy: awaited atomic SQL increments; on failure the delta is queued
// in the outbox (deltas for the same lang+date are summed) and replayed on
// reconnect. Reads hydrate a local cache on login; the Zustand store handles
// reactivity and swallows rejections (stats are silent-but-reliable).
//
// Atomic increment pattern avoids lost-update races when multiple tabs are open:
//   INSERT ... ON CONFLICT DO UPDATE SET reviewed = daily_stats.reviewed + EXCLUDED.reviewed
// This is handled via the upsert_daily_stat RPC defined in DATABASE_SCHEMA.sql.
// If the RPC is not yet deployed, falls back to a client-side read-modify-write.

import type { SupabaseClient } from "@supabase/supabase-js"
import type { StatsData, DayStats } from "./useStatsStore"
import type { IStatsStorage } from "./IStatsStorage"
import type { Skill } from "../domain/skills"
import { logError } from "../utils/logger"
import { outbox, type IncrementDailyStatArgs, type IncrementSkillStatArgs } from "./outbox"

interface StatRow {
    lang_id: string
    study_date: string
    reviewed: number
    correct: number
    acts: number
    q_total: number
    q_correct: number
}

interface SkillStatRow {
    lang_id: string
    study_date: string
    skill: Skill
    total: number
    correct: number
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
        const [daily, skills] = await Promise.all([
            this.sb
                .from("daily_stats")
                .select("lang_id, study_date, reviewed, correct, acts, q_total, q_correct")
                .eq("user_id", this.userId)
                .limit(5000),
            this.sb
                .from("daily_skill_stats")
                .select("lang_id, study_date, skill, total, correct")
                .eq("user_id", this.userId)
                .limit(5000),
        ])
        if (daily.error) { logError("SupabaseStatsStorage.load", daily.error); return {} }
        // Skill rows are optional enrichment — a missing table (migration not yet
        // applied) must not break the base stats load.
        if (skills.error) logError("SupabaseStatsStorage.load (daily_skill_stats)", skills.error)

        const result: StatsData = {}
        for (const row of (daily.data ?? []) as StatRow[]) {
            if (!result[row.lang_id]) result[row.lang_id] = {}
            result[row.lang_id][row.study_date] = {
                reviewed: row.reviewed,
                correct:  row.correct,
                acts:     row.acts,
                qTotal:   row.q_total,
                qCorrect: row.q_correct,
            }
        }
        for (const row of (skills.data ?? []) as SkillStatRow[]) {
            // Skill row without a daily row shouldn't happen, but tolerate it
            const lang = result[row.lang_id] ?? (result[row.lang_id] = {})
            const day = lang[row.study_date]
                ?? (lang[row.study_date] = { reviewed: 0, correct: 0, acts: 0, qTotal: 0, qCorrect: 0 })
            day.skills = { ...day.skills, [row.skill]: { t: row.total, c: row.correct } }
        }
        return result
    }

    // ── Writes (atomic upsert increments) ─────────────────────────────────────

    async recordReview(langId: string, date: string, correct: boolean): Promise<void> {
        await this.upsertDelta(langId, date, {
            reviewed: 1,
            correct:  correct ? 1 : 0,
            acts:     0,
            q_total:  0,
            q_correct: 0,
        })
    }

    async recordQuizAnswer(langId: string, date: string, correct: boolean, skill?: Skill): Promise<void> {
        await this.upsertDelta(langId, date, {
            reviewed: 0,
            correct:  0,
            acts:     0,
            q_total:  1,
            q_correct: correct ? 1 : 0,
        })
        if (skill) await this.upsertSkillDelta(langId, date, skill, correct)
    }

    async recordActivity(langId: string, date: string): Promise<void> {
        await this.upsertDelta(langId, date, {
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
        const skillRows = Object.entries(data).flatMap(([lang_id, days]) =>
            Object.entries(days).flatMap(([study_date, s]) =>
                Object.entries(s.skills ?? {}).map(([skill, v]) => ({
                    user_id:  this.userId!,
                    lang_id,
                    study_date,
                    skill,
                    total:    v.t,
                    correct:  v.c,
                }))
            )
        )
        if (rows.length === 0) return
        const [dailyRes, skillRes] = await Promise.all([
            this.sb.from("daily_stats").upsert(rows, { onConflict: "user_id,lang_id,study_date" }),
            skillRows.length > 0
                ? this.sb.from("daily_skill_stats").upsert(skillRows, { onConflict: "user_id,lang_id,study_date,skill" })
                : Promise.resolve({ error: null }),
        ])
        if (dailyRes.error) logError("SupabaseStatsStorage.saveAll", dailyRes.error)
        if (skillRes.error) logError("SupabaseStatsStorage.saveAll (skills)", skillRes.error)
    }

    async resetLanguage(langId: string): Promise<void> {
        // Handled by reset_language_data() RPC in SupabaseProgressStorage.resetLanguage
    }

    /** flush() drains the shared outbox (queued stat deltas included). */
    async flush(): Promise<void> {
        await outbox.flush()
    }

    // ── Private helpers ───────────────────────────────────────────────────────

    private async upsertDelta(langId: string, date: string, delta: {
        reviewed: number; correct: number; acts: number; q_total: number; q_correct: number
    }): Promise<void> {
        if (!this.userId) return
        // Upsert with increment: insert if new row, add delta if existing.
        // Supabase upsert sets the full value on conflict, so we use a raw SQL approach
        // via the rpc if available, otherwise fetch-then-upsert.
        const args: IncrementDailyStatArgs = {
            p_user_id:   this.userId,
            p_lang_id:   langId,
            p_date:      date,
            p_reviewed:  delta.reviewed,
            p_correct:   delta.correct,
            p_acts:      delta.acts,
            p_q_total:   delta.q_total,
            p_q_correct: delta.q_correct,
        }
        const { error } = await this.sb.rpc("increment_daily_stat", args)
        if (!error) return

        // Fallback: client-side read-modify-write — covers a missing RPC.
        // Vulnerable to lost-update race if multiple tabs are open; deploy the
        // increment_daily_stat RPC (see DATABASE_SCHEMA.sql) in production.
        try {
            await this.fallbackUpsert(langId, date, delta)
        } catch (fallbackErr) {
            // Both paths failed (likely offline) — queue the delta for replay.
            // Same-key deltas are summed in the outbox, so the queue stays small.
            outbox.enqueue({ kind: "rpc-stat", args, key: `stats|${langId}|${date}` })
            throw fallbackErr
        }
    }

    /** Per-skill counterpart of upsertDelta — writes to daily_skill_stats. */
    private async upsertSkillDelta(langId: string, date: string, skill: Skill, correct: boolean): Promise<void> {
        if (!this.userId) return
        const args: IncrementSkillStatArgs = {
            p_user_id: this.userId,
            p_lang_id: langId,
            p_date:    date,
            p_skill:   skill,
            p_total:   1,
            p_correct: correct ? 1 : 0,
        }
        const { error } = await this.sb.rpc("increment_skill_stat", args)
        if (!error) return

        // Fallback: client-side read-modify-write (covers a missing RPC).
        try {
            const { data } = await this.sb.from("daily_skill_stats")
                .select("total, correct")
                .eq("user_id", this.userId).eq("lang_id", langId)
                .eq("study_date", date).eq("skill", skill)
                .maybeSingle<{ total: number; correct: number }>()
            const current = data ?? { total: 0, correct: 0 }
            const { error: upErr } = await this.sb.from("daily_skill_stats").upsert({
                user_id:   this.userId,
                lang_id:   langId,
                study_date: date,
                skill,
                total:     current.total + 1,
                correct:   current.correct + (correct ? 1 : 0),
            }, { onConflict: "user_id,lang_id,study_date,skill" })
            if (upErr) throw upErr
        } catch (fallbackErr) {
            // Both paths failed (likely offline) — queue the delta for replay.
            outbox.enqueue({ kind: "rpc-skill-stat", args, key: `skillstats|${langId}|${date}|${skill}` })
            throw fallbackErr
        }
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
        if (error) {
            logError("SupabaseStatsStorage.fallbackUpsert", error)
            throw error
        }
    }
}
