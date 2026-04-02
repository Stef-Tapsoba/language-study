// store/actions.ts — Compound progress actions.
//
// Each async function co-locates all state mutations that logically belong
// together, so call sites stay clean and Stage 2 (Supabase sync) has a single
// place to add remote writes — inside these actions, not scattered across pages.
//
// All functions are async so that Stage 2 Supabase writes compose naturally.
// LocalStorage writes inside the storage adapters are synchronous, so Stage 1
// callers see no observable delay.
//
// Usage: import named actions instead of calling store functions directly.
//   Before: masterUnit(langId, unitId); useStatsStore.getState().recordActivity(langId)
//   After:  await completeUnit(langId, unitId, score, total)

import { registry } from "./registry"
import { useStatsStore } from "./useStatsStore"
import type { ContentType, ReinforcementSection } from "./IProgressStorage"
import type { UserProgress } from "../types"
import type { StatsData } from "./useStatsStore"
import type { SRSCardState } from "@myorg/srs"
import { mergeProgress, mergeSRS, mergeStats } from "./merge"

// ---------------------------------------------------------------------------
// Unit completion
// ---------------------------------------------------------------------------

/**
 * Mark a unit as mastered and record quiz results + activity in stats.
 * Use this when quiz answers have NOT already been recorded per-question
 * (i.e. you have the final score and want to batch-record everything at once).
 */
export async function completeUnit(
    langId: string,
    unitId: string,
    quizScore: number,
    quizTotal: number
): Promise<void> {
    await registry.progress.masterUnit(langId, unitId)
    const stats = useStatsStore.getState()
    for (let i = 0; i < quizTotal; i++) {
        stats.recordQuizAnswer(langId, i < quizScore)
    }
    stats.recordActivity(langId)
    // Stage 2: await supabase.from("mastered_units").upsert({ user_id, lang_id, unit_id, completed_at })
}

/**
 * Mark a unit as mastered and record activity only.
 * Use this when quiz answers have ALREADY been recorded per-question
 * (e.g. UnitPage, which calls recordQuizAnswer on each handleNext).
 */
export async function confirmUnitMastery(langId: string, unitId: string): Promise<void> {
    await registry.progress.masterUnit(langId, unitId)
    useStatsStore.getState().recordActivity(langId)
    // Stage 2: await supabase.from("mastered_units").upsert({ user_id, lang_id, unit_id, completed_at })
}

// ---------------------------------------------------------------------------
// Lesson item completion — grammar lesson, vocab item, or verb review
// ---------------------------------------------------------------------------

/**
 * Mark a single lesson item as complete with its content type.
 * The contentType is used by Stage 2 to route to the correct table.
 */
export async function completeLessonItem(
    langId: string,
    lessonId: string,
    contentType: ContentType
): Promise<void> {
    await registry.progress.markLessonComplete(langId, lessonId, contentType)
    // Stage 2: routed by contentType to the appropriate table
}

// ---------------------------------------------------------------------------
// Drill session completion — grammar drill, verb drill, flashcard session
// ---------------------------------------------------------------------------

export type DrillSessionType = "grammar" | "verb" | "flashcard" | "vocab" | "reading" | "listening" | "culture" | "speaking"

/**
 * Record the completion of a drill session.
 * Call this at the end of a drill to record activity in stats.
 */
export async function completeDrillSession(
    langId: string,
    _sessionType: DrillSessionType
): Promise<void> {
    useStatsStore.getState().recordActivity(langId)
    // Stage 2: await supabase.from("drill_sessions").insert({ user_id, lang_id, session_type: _sessionType, completed_at })
}

// ---------------------------------------------------------------------------
// Reading passage completion
// ---------------------------------------------------------------------------

/**
 * Mark a reading passage as read and record quiz answers + activity in stats.
 * @param quizAnswers — array of booleans (true = correct) for each question answered
 */
export async function completeReadingPassage(
    langId: string,
    passageId: string,
    quizAnswers: boolean[]
): Promise<void> {
    await registry.progress.markLessonComplete(langId, passageId, "reading")
    const stats = useStatsStore.getState()
    quizAnswers.forEach(correct => stats.recordQuizAnswer(langId, correct))
    stats.recordActivity(langId)
    // Stage 2: await supabase.from("reading_completions").upsert({ user_id, lang_id, passage_id, score, completed_at })
}

// ---------------------------------------------------------------------------
// Listening exercise completion
// ---------------------------------------------------------------------------

/**
 * Mark a listening exercise as complete and record quiz answers + activity.
 */
export async function completeListeningExercise(
    langId: string,
    exerciseId: string,
    quizAnswers: boolean[]
): Promise<void> {
    await registry.progress.markLessonComplete(langId, exerciseId, "listening")
    const stats = useStatsStore.getState()
    quizAnswers.forEach(correct => stats.recordQuizAnswer(langId, correct))
    stats.recordActivity(langId)
    // Stage 2: await supabase.from("listening_completions").upsert({ user_id, lang_id, exercise_id, score, completed_at })
}

// ---------------------------------------------------------------------------
// Culture episode completion
// ---------------------------------------------------------------------------

/**
 * Mark a culture episode as read and record activity in stats.
 */
export async function completeCultureEpisode(
    langId: string,
    episodeId: string
): Promise<void> {
    await registry.progress.markLessonComplete(langId, episodeId, "culture")
    useStatsStore.getState().recordActivity(langId)
    // Stage 2: await supabase.from("culture_completions").upsert({ user_id, lang_id, episode_id, completed_at })
}

// ---------------------------------------------------------------------------
// Reinforcement exercise completion
// ---------------------------------------------------------------------------

/**
 * Mark a unit reinforcement exercise as done.
 *
 * @param section         "grammar" | "vocab" | "verbs"
 * @param grammarLessonId Required when section === "grammar".
 *
 * Stage 2: routes to reinforcement_grammar or reinforcement_sections table.
 */
export async function completeReinforcement(
    langId: string,
    unitId: string,
    section: ReinforcementSection,
    grammarLessonId?: string
): Promise<void> {
    await registry.progress.markReinforcementDone(langId, unitId, section, grammarLessonId)
    // Stage 2: await supabase.from(section === "grammar" ? "reinforcement_grammar" : "reinforcement_sections")
    //   .upsert({ user_id, lang_id, unit_id, ...(section === "grammar" ? { grammar_lesson_id } : { section }) })
}

// ---------------------------------------------------------------------------
// Language data reset — progress + SRS + stats
// ---------------------------------------------------------------------------

/**
 * Reset all data for a language: CEFR progress, SRS card states, and study stats.
 * Call this instead of calling resetLanguage + resetSRS + resetStats separately.
 */
export async function resetLanguageData(langId: string): Promise<void> {
    await registry.progress.resetLanguage(langId)
    await registry.srs.resetLanguage(langId)
    await registry.stats.resetLanguage(langId)
    useStatsStore.getState().resetStats(langId)
    // Stage 2: cascade deletes or soft-resets on all per-language tables
}

// ---------------------------------------------------------------------------
// Language removal — complete removal of a language from the learner's profile
// ---------------------------------------------------------------------------

/**
 * Remove a language entirely. Clears level, progress, SRS, and stats.
 */
export async function removeLanguageData(langId: string): Promise<void> {
    await registry.progress.removeLanguage(langId)
    await registry.srs.resetLanguage(langId)
    await registry.stats.resetLanguage(langId)
    useStatsStore.getState().resetStats(langId)
    // Stage 2: delete rows in all per-language tables for this user
}

// ---------------------------------------------------------------------------
// Progress export / import
// ---------------------------------------------------------------------------

export type ProgressSnapshot = {
    exportedAt: string
    appVersion: string
    progress: UserProgress
    srs: Record<string, Record<string, SRSCardState>>
    stats: StatsData
}

/**
 * Collect all user data into a portable snapshot for download.
 * Reads from registry adapters so Stage 2 will export Supabase data transparently.
 */
export async function exportProgressSnapshot(): Promise<ProgressSnapshot> {
    const [srs, stats] = await Promise.all([
        registry.srs.loadAll(),
        registry.stats.load(),
    ])
    return {
        exportedAt:  new Date().toISOString(),
        appVersion:  __APP_VERSION__,
        progress:    registry.progress.load(),
        srs,
        stats,
    }
}

/**
 * Merge an imported snapshot into the current user's data and persist it.
 * Returns null on success, or an error message string on validation failure.
 * Uses smart merge (no downgrades) via store/merge.ts.
 */
export async function importProgressSnapshot(
    snapshot: unknown
): Promise<string | null> {
    const data = snapshot as Partial<ProgressSnapshot>
    if (!data.progress || !data.srs || !data.stats) {
        return "Invalid backup file — missing required fields."
    }

    const [currentSRS, currentStats] = await Promise.all([
        registry.srs.loadAll(),
        registry.stats.load(),
    ])
    const currentProgress = registry.progress.load()

    await Promise.all([
        registry.progress.save(mergeProgress(currentProgress, data.progress)),
        registry.srs.saveAll(mergeSRS(currentSRS, data.srs)),
        registry.stats.saveAll(mergeStats(currentStats, data.stats)),
    ])

    // Re-sync the Zustand stats store so any rendered UI picks up the merged
    // data immediately — without this, the stats store holds pre-import values
    // until the page reloads.
    await useStatsStore.getState().hydrate()

    return null
}
