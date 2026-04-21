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
import { SCHEMA_VERSION } from "./progress"

// Minimal row shapes returned by Supabase queries
interface LevelRow { lang_id: string; level: string }
interface CompletionRow { lang_id: string; content_type: string; content_id: string }
interface MasteredRow { lang_id: string; unit_id: string }
interface RgRow { lang_id: string; unit_id: string; grammar_lesson_id: string }
interface RsRow { lang_id: string; unit_id: string; section: string }
interface ProfileRow { selected_language: string | null; learning_goal: string | null }

// Factory — never share the object literal directly; shallow spread copies object references.
function makeEmptyProgress(): UserProgress {
    return {
        schemaVersion: SCHEMA_VERSION,
        selectedLanguage: null,
        levels: {},
        completedLessons: {},
        masteredUnits: {},
    }
}

export class SupabaseProgressStorage implements IProgressStorage {
    private cache: UserProgress = makeEmptyProgress()
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

    // Guards against concurrent initSession calls for the same user (e.g. React StrictMode
    // double-invoke). If called while a hydration is in flight, returns the existing promise.
    private _hydratingPromise: Promise<void> | null = null
    private _hydratingUserId: string | null = null

    async initSession(userId: string): Promise<void> {
        if (this._hydratingPromise !== null && this._hydratingUserId === userId) {
            return this._hydratingPromise
        }
        this._hydratingUserId = userId
        this._hydratingPromise = this._doInitSession(userId).finally(() => {
            this._hydratingPromise = null
            this._hydratingUserId = null
        })
        return this._hydratingPromise
    }

    private async _doInitSession(userId: string): Promise<void> {
        this.userId = userId

        // Build into a local object first — only assign to this.cache atomically on success
        // so that any writes arriving during hydration don't find an empty cache (EDGE-02).
        const newCache = { ...makeEmptyProgress(), userId }

        // .limit(5000) — Supabase PostgREST silently truncates at 1 000 rows without it.
        const [profile, levels, completions, mastered, rgRows, rsRows, checkpoints] = await Promise.all([
            this.sb.from("profiles").select("selected_language, learning_goal").eq("id", userId).single<ProfileRow>(),
            this.sb.from("user_language_levels").select("lang_id, level").eq("user_id", userId).limit(5000),
            this.sb.from("lesson_completions").select("lang_id, content_type, content_id").eq("user_id", userId).limit(5000),
            this.sb.from("mastered_units").select("lang_id, unit_id").eq("user_id", userId).limit(5000),
            this.sb.from("reinforcement_grammar").select("lang_id, unit_id, grammar_lesson_id").eq("user_id", userId).limit(5000),
            this.sb.from("reinforcement_sections").select("lang_id, unit_id, section").eq("user_id", userId).limit(5000),
            this.sb.from("checkpoint_completions").select("lang_id, checkpoint_id").eq("user_id", userId).limit(5000),
        ])

        if (profile.data) {
            newCache.selectedLanguage = profile.data.selected_language
            newCache.goal = (profile.data.learning_goal as GoalId | null) ?? undefined
        }
        for (const row of (levels.data ?? []) as LevelRow[]) {
            newCache.levels[row.lang_id] = row.level as CEFRLevel
        }
        this.hydrateCompletions(newCache, (completions.data ?? []) as CompletionRow[])
        this.hydrateMastered(newCache, (mastered.data ?? []) as MasteredRow[])
        this.hydrateReinforcement(newCache, (rgRows.data ?? []) as RgRow[], (rsRows.data ?? []) as RsRow[])
        this.hydrateCheckpoints(newCache, (checkpoints.data ?? []) as { lang_id: string; checkpoint_id: string }[])
        // Atomic assignment — all queries resolved successfully
        this.cache = newCache
    }

    private hydrateCompletions(cache: UserProgress, rows: CompletionRow[]): void {
        for (const row of rows) {
            // Flat list (Stage 1 compat)
            const flat = cache.completedLessons[row.lang_id] ?? []
            if (!flat.includes(row.content_id)) flat.push(row.content_id)
            cache.completedLessons[row.lang_id] = flat
            // Typed map (Stage 2 — used by save() to preserve content_type on re-export)
            const byType = cache.completedByType ?? {}
            const langMap = byType[row.lang_id] ?? {}
            const typeList = langMap[row.content_type] ?? []
            if (!typeList.includes(row.content_id)) typeList.push(row.content_id)
            langMap[row.content_type] = typeList
            byType[row.lang_id] = langMap
            cache.completedByType = byType
        }
    }

    private hydrateMastered(cache: UserProgress, rows: MasteredRow[]): void {
        for (const row of rows) {
            const list = cache.masteredUnits[row.lang_id] ?? []
            if (!list.includes(row.unit_id)) list.push(row.unit_id)
            cache.masteredUnits[row.lang_id] = list
        }
    }

    private hydrateReinforcement(cache: UserProgress, rgRows: RgRow[], rsRows: RsRow[]): void {
        const lang = cache.completedReinforcement ?? {}
        for (const row of rgRows) {
            const unit = lang[row.lang_id] ?? {}
            const state = unit[row.unit_id] ?? { grammarLessonIds: [] }
            if (!state.grammarLessonIds.includes(row.grammar_lesson_id)) {
                state.grammarLessonIds.push(row.grammar_lesson_id)
            }
            unit[row.unit_id] = state
            lang[row.lang_id] = unit
        }
        for (const row of rsRows) {
            const unit = lang[row.lang_id] ?? {}
            const state = unit[row.unit_id] ?? { grammarLessonIds: [] }
            if (row.section === "vocab") state.vocab = true
            if (row.section === "verbs") state.verbs = true
            unit[row.unit_id] = state
            lang[row.lang_id] = unit
        }
        cache.completedReinforcement = lang
    }

    private hydrateCheckpoints(cache: UserProgress, rows: { lang_id: string; checkpoint_id: string }[]): void {
        // Build result object once instead of spreading on every row (EDGE-05)
        const result: Record<string, string[]> = { ...cache.completedCheckpoints }
        for (const row of rows) {
            const list = result[row.lang_id] ?? []
            if (!list.includes(row.checkpoint_id)) list.push(row.checkpoint_id)
            result[row.lang_id] = list
        }
        cache.completedCheckpoints = result
    }

    // ── Writes ────────────────────────────────────────────────────────────────

    /**
     * Build lesson_completions rows for save().
     * Uses completedByType (typed) when available; falls back to completedLessons
     * with content_type="grammar" for Stage 1 snapshots that lack type information.
     */
    private buildLessonRows(uid: string, progress: UserProgress) {
        return progress.completedByType
            ? this.lessonRowsFromTyped(uid, progress.completedByType)
            : this.lessonRowsFromFlat(uid, progress.completedLessons)
    }

    private lessonRowsFromTyped(uid: string, byType: NonNullable<UserProgress["completedByType"]>) {
        type Row = { user_id: string; lang_id: string; content_type: ContentType; content_id: string }
        return Object.entries(byType).flatMap(([lang_id, types]) =>
            (Object.entries(types) as [ContentType, string[]][]).flatMap(([content_type, ids]) =>
                (ids ?? []).map<Row>(content_id => ({ user_id: uid, lang_id, content_type, content_id }))
            )
        )
    }

    private lessonRowsFromFlat(uid: string, flat: UserProgress["completedLessons"]) {
        // Stage 1 snapshots lack content_type — "grammar" is the safest valid fallback
        return Object.entries(flat).flatMap(([lang_id, ids]) =>
            ids.map(content_id => ({ user_id: uid, lang_id, content_type: "grammar" as ContentType, content_id }))
        )
    }

    async save(progress: UserProgress): Promise<void> {
        const uid = this.userId; if (!uid) return
        this.cache = progress
        // Bulk upsert — used for import/restore only (not a hot path; fan-out is acceptable)
        const lessonRows = this.buildLessonRows(uid, progress)
        const unitRows = Object.entries(progress.masteredUnits).flatMap(([lang_id, ids]) =>
            ids.map(unit_id => ({ user_id: uid, lang_id, unit_id }))
        )
        const checkpointRows = Object.entries(progress.completedCheckpoints ?? {}).flatMap(([lang_id, ids]) =>
            ids.map(checkpoint_id => ({ user_id: uid, lang_id, checkpoint_id }))
        )
        const rgRows = Object.entries(progress.completedReinforcement ?? {}).flatMap(([lang_id, units]) =>
            Object.entries(units).flatMap(([unit_id, state]) =>
                state.grammarLessonIds.map(grammar_lesson_id =>
                    ({ user_id: uid, lang_id, unit_id, grammar_lesson_id })
                )
            )
        )
        const rsRows = Object.entries(progress.completedReinforcement ?? {}).flatMap(([lang_id, units]) =>
            Object.entries(units).flatMap(([unit_id, state]) => [
                ...(state.vocab  ? [{ user_id: uid, lang_id, unit_id, section: "vocab"  }] : []),
                ...(state.verbs  ? [{ user_id: uid, lang_id, unit_id, section: "verbs"  }] : []),
            ])
        )
        await Promise.allSettled([
            this.sb.from("profiles").upsert({
                id: uid,
                selected_language: progress.selectedLanguage,
                learning_goal: progress.goal ?? null,
            }),
            ...Object.entries(progress.levels).map(([lang_id, level]) =>
                this.sb.from("user_language_levels").upsert({ user_id: uid, lang_id, level }, { onConflict: "user_id,lang_id" })
            ),
            lessonRows.length > 0
                ? this.sb.from("lesson_completions").upsert(lessonRows, { onConflict: "user_id,lang_id,content_type,content_id" })
                : Promise.resolve(),
            unitRows.length > 0
                ? this.sb.from("mastered_units").upsert(unitRows, { onConflict: "user_id,lang_id,unit_id" })
                : Promise.resolve(),
            checkpointRows.length > 0
                ? this.sb.from("checkpoint_completions").upsert(checkpointRows, { onConflict: "user_id,lang_id,checkpoint_id" })
                : Promise.resolve(),
            rgRows.length > 0
                ? this.sb.from("reinforcement_grammar").upsert(rgRows, { onConflict: "user_id,lang_id,unit_id,grammar_lesson_id" })
                : Promise.resolve(),
            rsRows.length > 0
                ? this.sb.from("reinforcement_sections").upsert(rsRows, { onConflict: "user_id,lang_id,unit_id,section" })
                : Promise.resolve(),
        // allSettled so every table is attempted even if one fails; partial writes
        // are logged individually. save() is best-effort for import/migration paths.
        ]).then(results => {
            for (const r of results) {
                if (r.status === "rejected") logError("SupabaseProgressStorage.save", r.reason)
            }
        })
    }

    async setSelectedLanguage(langId: string): Promise<void> {
        const uid = this.userId; if (!uid) return
        this.cache.selectedLanguage = langId
        this.sb.from("profiles").update({ selected_language: langId }).eq("id", uid)
            .then(({ error }) => { if (error) logError("setSelectedLanguage", error) })
    }

    async markLessonComplete(langId: string, lessonId: string, contentType: ContentType): Promise<void> {
        const uid = this.userId; if (!uid) return
        const existing = this.cache.completedLessons[langId] ?? []
        if (!existing.includes(lessonId)) {
            this.cache.completedLessons[langId] = [...existing, lessonId]
        }
        this.sb.from("lesson_completions").upsert(
            { user_id: uid, lang_id: langId, content_type: contentType, content_id: lessonId },
            { onConflict: "user_id,lang_id,content_type,content_id" }
        ).then(({ error }) => { if (error) logError("markLessonComplete", error) })
    }

    async markCheckpointComplete(langId: string, checkpointId: string): Promise<void> {
        const uid = this.userId; if (!uid) return
        const existing = this.cache.completedCheckpoints?.[langId] ?? []
        if (!existing.includes(checkpointId)) {
            this.cache.completedCheckpoints = {
                ...this.cache.completedCheckpoints,
                [langId]: [...existing, checkpointId],
            }
        }
        this.sb.from("checkpoint_completions").upsert(
            { user_id: uid, lang_id: langId, checkpoint_id: checkpointId },
            { onConflict: "user_id,lang_id,checkpoint_id" }
        ).then(({ error }) => { if (error) logError("markCheckpointComplete", error) })
    }

    getCompletedCheckpoints(langId: string): string[] {
        return this.cache.completedCheckpoints?.[langId] ?? []
    }

    async masterUnit(langId: string, unitId: string): Promise<void> {
        const uid = this.userId; if (!uid) return
        const existing = this.cache.masteredUnits[langId] ?? []
        if (!existing.includes(unitId)) {
            this.cache.masteredUnits[langId] = [...existing, unitId]
        }
        this.sb.from("mastered_units").upsert(
            { user_id: uid, lang_id: langId, unit_id: unitId },
            { onConflict: "user_id,lang_id,unit_id" }
        ).then(({ error }) => { if (error) logError("masterUnit", error) })
    }

    async setLevel(langId: string, level: CEFRLevel): Promise<void> {
        const uid = this.userId; if (!uid) return
        this.cache.levels[langId] = level
        this.sb.from("user_language_levels").upsert(
            { user_id: uid, lang_id: langId, level },
            { onConflict: "user_id,lang_id" }
        ).then(({ error }) => { if (error) logError("setLevel", error) })
    }

    async setGoal(goalId: GoalId): Promise<void> {
        const uid = this.userId; if (!uid) return
        this.cache.goal = goalId
        this.sb.from("profiles").update({ learning_goal: goalId }).eq("id", uid)
            .then(({ error }) => { if (error) logError("setGoal", error) })
    }

    async resetLanguage(langId: string): Promise<void> {
        const uid = this.userId; if (!uid) return
        // Mutate cache only after DB confirms success — prevents cache/DB divergence on failure
        const { error } = await this.sb.rpc("reset_language_data", { p_user_id: uid, p_lang_id: langId })
        if (error) { logError("resetLanguage", error); return }
        const { [langId]: _, ...levels } = this.cache.levels
        this.cache.levels = { ...levels, [langId]: "A1" }
        delete this.cache.completedLessons[langId]
        delete this.cache.masteredUnits[langId]
        if (this.cache.completedReinforcement) delete this.cache.completedReinforcement[langId]
        if (this.cache.completedCheckpoints)   delete this.cache.completedCheckpoints[langId]
        // Await the re-insert — fire-and-forget risks a race if removeLanguage is called
        // immediately after resetLanguage on the same langId (REG-04)
        const { error: reErr } = await this.sb.from("user_language_levels")
            .upsert({ user_id: uid, lang_id: langId, level: "A1" }, { onConflict: "user_id,lang_id" })
        if (reErr) logError("resetLanguage.reinsert", reErr)
    }

    async removeLanguage(langId: string): Promise<void> {
        const uid = this.userId; if (!uid) return
        const { error } = await this.sb.rpc("reset_language_data", { p_user_id: uid, p_lang_id: langId })
        if (error) { logError("removeLanguage", error); return }
        const { [langId]: _, ...levels } = this.cache.levels
        this.cache.levels = levels
        delete this.cache.completedLessons[langId]
        delete this.cache.masteredUnits[langId]
        if (this.cache.completedReinforcement) delete this.cache.completedReinforcement[langId]
        if (this.cache.completedCheckpoints)   delete this.cache.completedCheckpoints[langId]
        // Null the active language so the app doesn't try to reload a removed language on next initSession
        if (this.cache.selectedLanguage === langId) {
            this.cache.selectedLanguage = null
            this.sb.from("profiles").update({ selected_language: null }).eq("id", uid)
                .then(({ error: e }) => { if (e) logError("removeLanguage.clearSelected", e) })
        }
    }

    // Overloaded to match IProgressStorage interface
    async markReinforcementDone(langId: string, unitId: string, section: "grammar", grammarLessonId: string): Promise<void>
    async markReinforcementDone(langId: string, unitId: string, section: "vocab" | "verbs"): Promise<void>
    async markReinforcementDone(langId: string, unitId: string, section: string, grammarLessonId?: string): Promise<void> {
        const uid = this.userId; if (!uid) return
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

        if (section === "grammar" && grammarLessonId) {
            this.sb.from("reinforcement_grammar").upsert(
                { user_id: uid, lang_id: langId, unit_id: unitId, grammar_lesson_id: grammarLessonId },
                { onConflict: "user_id,lang_id,unit_id,grammar_lesson_id" }
            ).then(({ error }) => { if (error) logError("markReinforcementDone.grammar", error) })
        } else if (section !== "grammar") {
            this.sb.from("reinforcement_sections").upsert(
                { user_id: uid, lang_id: langId, unit_id: unitId, section },
                { onConflict: "user_id,lang_id,unit_id,section" }
            ).then(({ error }) => { if (error) logError("markReinforcementDone.section", error) })
        }
    }
}
