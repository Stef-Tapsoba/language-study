// store/SupabaseProgressStorage.ts — IProgressStorage backed by Supabase.
//
// Strategy: write-through local cache (same pattern as LocalStorageProgressStorage).
//   - initSession() fetches all user data from Supabase and populates the cache.
//   - load() returns from the cache synchronously (zero latency for callers).
//   - Every write method updates the cache immediately, then upserts to Supabase async.
//
// This ensures the app remains responsive even on slow connections while
// keeping Supabase as the source of truth.

import type { SupabaseClient } from "@supabase/supabase-js"
import type { CEFRLevel, UserProgress, UnitReinforcementState, GoalId } from "../types"
import type { IProgressStorage, ContentType } from "./IProgressStorage"
import { logError } from "../utils/logger"

// Minimal row shapes returned by Supabase queries
interface LevelRow { lang_id: string; level: string }
interface CompletionRow { lang_id: string; content_type: string; content_id: string }
interface MasteredRow { lang_id: string; unit_id: string }
interface RgRow { lang_id: string; unit_id: string; grammar_lesson_id: string }
interface RsRow { lang_id: string; unit_id: string; section: string }
interface ProfileRow { selected_language: string | null; learning_goal: string | null }

const EMPTY_PROGRESS: UserProgress = {
    schemaVersion: 3,
    selectedLanguage: null,
    levels: {},
    completedLessons: {},
    masteredUnits: {},
}

export class SupabaseProgressStorage implements IProgressStorage {
    private cache: UserProgress = { ...EMPTY_PROGRESS }
    private userId: string | null = null

    constructor(private readonly sb: SupabaseClient) {}

    // ── Synchronous read ──────────────────────────────────────────────────────

    load(): UserProgress {
        return this.cache
    }

    getReinforcementState(langId: string, unitId: string): UnitReinforcementState {
        return this.cache.completedReinforcement?.[langId]?.[unitId]
            ?? { grammarLessonIds: [] }
    }

    // ── Session initialisation ────────────────────────────────────────────────

    async initSession(userId: string): Promise<void> {
        this.userId = userId
        this.cache = { ...EMPTY_PROGRESS, userId, schemaVersion: 3 }

        // Fetch all user data in parallel
        const [profile, levels, completions, mastered, rgRows, rsRows] = await Promise.all([
            this.sb.from("profiles").select("selected_language, learning_goal").eq("id", userId).single<ProfileRow>(),
            this.sb.from("user_language_levels").select("lang_id, level").eq("user_id", userId),
            this.sb.from("lesson_completions").select("lang_id, content_type, content_id").eq("user_id", userId),
            this.sb.from("mastered_units").select("lang_id, unit_id").eq("user_id", userId),
            this.sb.from("reinforcement_grammar").select("lang_id, unit_id, grammar_lesson_id").eq("user_id", userId),
            this.sb.from("reinforcement_sections").select("lang_id, unit_id, section").eq("user_id", userId),
        ])

        // Profile
        if (profile.data) {
            this.cache.selectedLanguage = profile.data.selected_language
            this.cache.goal = (profile.data.learning_goal as GoalId | null) ?? undefined
        }

        // Levels
        for (const row of (levels.data ?? []) as LevelRow[]) {
            this.cache.levels[row.lang_id] = row.level as CEFRLevel
        }

        // Completed lessons (flat array per language)
        for (const row of (completions.data ?? []) as CompletionRow[]) {
            const list = this.cache.completedLessons[row.lang_id] ?? []
            if (!list.includes(row.content_id)) list.push(row.content_id)
            this.cache.completedLessons[row.lang_id] = list
        }

        // Mastered units
        for (const row of (mastered.data ?? []) as MasteredRow[]) {
            const list = this.cache.masteredUnits[row.lang_id] ?? []
            if (!list.includes(row.unit_id)) list.push(row.unit_id)
            this.cache.masteredUnits[row.lang_id] = list
        }

        // Reinforcement — grammar
        for (const row of (rgRows.data ?? []) as RgRow[]) {
            const lang = this.cache.completedReinforcement ?? {}
            const unit = lang[row.lang_id] ?? {}
            const state = unit[row.unit_id] ?? { grammarLessonIds: [] }
            if (!state.grammarLessonIds.includes(row.grammar_lesson_id)) {
                state.grammarLessonIds.push(row.grammar_lesson_id)
            }
            unit[row.unit_id] = state
            lang[row.lang_id] = unit
            this.cache.completedReinforcement = lang
        }

        // Reinforcement — sections
        for (const row of (rsRows.data ?? []) as RsRow[]) {
            const lang = this.cache.completedReinforcement ?? {}
            const unit = lang[row.lang_id] ?? {}
            const state = unit[row.unit_id] ?? { grammarLessonIds: [] }
            if (row.section === "vocab") state.vocab = true
            if (row.section === "verbs") state.verbs = true
            unit[row.unit_id] = state
            lang[row.lang_id] = unit
            this.cache.completedReinforcement = lang
        }
    }

    // ── Writes ────────────────────────────────────────────────────────────────

    async save(progress: UserProgress): Promise<void> {
        this.cache = progress
        // Bulk save via individual upserts — used for import/restore only
        // (not a hot path, so fan-out is acceptable)
        const uid = this.userId
        if (!uid) return
        await Promise.all([
            this.sb.from("profiles").upsert({
                id: uid,
                selected_language: progress.selectedLanguage,
                learning_goal: progress.goal ?? null,
            }),
            ...Object.entries(progress.levels).map(([lang_id, level]) =>
                this.sb.from("user_language_levels").upsert({ user_id: uid, lang_id, level }, { onConflict: "user_id,lang_id" })
            ),
        ]).catch(err => logError("SupabaseProgressStorage.save", err))
    }

    async setSelectedLanguage(langId: string): Promise<void> {
        this.cache.selectedLanguage = langId
        this.sb.from("profiles").update({ selected_language: langId }).eq("id", this.userId!)
            .then(({ error }) => { if (error) logError("setSelectedLanguage", error) })
    }

    async markLessonComplete(langId: string, lessonId: string, contentType: ContentType): Promise<void> {
        // Update cache
        const existing = this.cache.completedLessons[langId] ?? []
        if (!existing.includes(lessonId)) {
            this.cache.completedLessons[langId] = [...existing, lessonId]
        }
        // Upsert to Supabase
        this.sb.from("lesson_completions").upsert(
            { user_id: this.userId!, lang_id: langId, content_type: contentType, content_id: lessonId },
            { onConflict: "user_id,lang_id,content_type,content_id" }
        ).then(({ error }) => { if (error) logError("markLessonComplete", error) })
    }

    async markCheckpointComplete(langId: string, checkpointId: string): Promise<void> {
        const existing = this.cache.completedCheckpoints?.[langId] ?? []
        if (!existing.includes(checkpointId)) {
            this.cache.completedCheckpoints = {
                ...this.cache.completedCheckpoints,
                [langId]: [...existing, checkpointId],
            }
        }
        this.sb.from("checkpoint_completions").upsert(
            { user_id: this.userId!, lang_id: langId, checkpoint_id: checkpointId },
            { onConflict: "user_id,lang_id,checkpoint_id" }
        ).then(({ error }) => { if (error) logError("markCheckpointComplete", error) })
    }

    getCompletedCheckpoints(langId: string): string[] {
        return this.cache.completedCheckpoints?.[langId] ?? []
    }

    async masterUnit(langId: string, unitId: string): Promise<void> {
        const existing = this.cache.masteredUnits[langId] ?? []
        if (!existing.includes(unitId)) {
            this.cache.masteredUnits[langId] = [...existing, unitId]
        }
        this.sb.from("mastered_units").upsert(
            { user_id: this.userId!, lang_id: langId, unit_id: unitId },
            { onConflict: "user_id,lang_id,unit_id" }
        ).then(({ error }) => { if (error) logError("masterUnit", error) })
    }

    async setLevel(langId: string, level: CEFRLevel): Promise<void> {
        this.cache.levels[langId] = level
        this.sb.from("user_language_levels").upsert(
            { user_id: this.userId!, lang_id: langId, level },
            { onConflict: "user_id,lang_id" }
        ).then(({ error }) => { if (error) logError("setLevel", error) })
    }

    async setGoal(goalId: GoalId): Promise<void> {
        this.cache.goal = goalId
        this.sb.from("profiles").update({ learning_goal: goalId }).eq("id", this.userId!)
            .then(({ error }) => { if (error) logError("setGoal", error) })
    }

    async resetLanguage(langId: string): Promise<void> {
        // Update cache
        const { [langId]: _, ...levels } = this.cache.levels
        this.cache.levels = { ...levels, [langId]: "A1" }
        delete this.cache.completedLessons[langId]
        delete this.cache.masteredUnits[langId]
        if (this.cache.completedReinforcement) delete this.cache.completedReinforcement[langId]
        // Atomic DB reset via RPC
        this.sb.rpc("reset_language_data", { p_user_id: this.userId!, p_lang_id: langId })
            .then(({ error }) => { if (error) logError("resetLanguage", error) })
    }

    async removeLanguage(langId: string): Promise<void> {
        const { [langId]: _, ...levels } = this.cache.levels
        this.cache.levels = levels
        delete this.cache.completedLessons[langId]
        delete this.cache.masteredUnits[langId]
        if (this.cache.completedReinforcement) delete this.cache.completedReinforcement[langId]
        // resetLanguage cascade handles table deletes
        this.sb.rpc("reset_language_data", { p_user_id: this.userId!, p_lang_id: langId })
            .then(({ error }) => { if (error) logError("removeLanguage", error) })
    }

    // Overloaded to match IProgressStorage interface
    async markReinforcementDone(langId: string, unitId: string, section: "grammar", grammarLessonId: string): Promise<void>
    async markReinforcementDone(langId: string, unitId: string, section: "vocab" | "verbs"): Promise<void>
    async markReinforcementDone(langId: string, unitId: string, section: string, grammarLessonId?: string): Promise<void> {
        // Update cache
        const lang = this.cache.completedReinforcement ?? {}
        const unit = lang[langId] ?? {}
        const state = unit[unitId] ?? { grammarLessonIds: [] }
        if (section === "grammar" && grammarLessonId && !state.grammarLessonIds.includes(grammarLessonId)) {
            state.grammarLessonIds = [...state.grammarLessonIds, grammarLessonId]
        } else if (section === "vocab") {
            state.vocab = true
        } else if (section === "verbs") {
            state.verbs = true
        }
        unit[unitId] = state
        lang[langId] = unit
        this.cache.completedReinforcement = lang

        // Upsert to correct table
        if (section === "grammar" && grammarLessonId) {
            this.sb.from("reinforcement_grammar").upsert(
                { user_id: this.userId!, lang_id: langId, unit_id: unitId, grammar_lesson_id: grammarLessonId },
                { onConflict: "user_id,lang_id,unit_id,grammar_lesson_id" }
            ).then(({ error }) => { if (error) logError("markReinforcementDone.grammar", error) })
        } else if (section !== "grammar") {
            this.sb.from("reinforcement_sections").upsert(
                { user_id: this.userId!, lang_id: langId, unit_id: unitId, section },
                { onConflict: "user_id,lang_id,unit_id,section" }
            ).then(({ error }) => { if (error) logError("markReinforcementDone.section", error) })
        }
    }
}
