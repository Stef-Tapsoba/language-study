// store/actions.ts — Compound progress actions.
//
// Each function co-locates all state mutations that logically belong together,
// so call sites stay clean and Stage 2 (Supabase sync) has a single place to add
// remote writes — inside these actions, not scattered across page components.
//
// Usage: import named actions instead of calling store functions directly in pages.
//   Before: masterUnit(langId, unitId); useStatsStore.getState().recordActivity(langId)
//   After:  completeUnit(langId, unitId)

import { masterUnit, markLessonComplete } from "./progress"
import { useStatsStore } from "./useStatsStore"

// ---------------------------------------------------------------------------
// Unit completion — called when a learner passes a unit's test-out quiz
// ---------------------------------------------------------------------------

/**
 * Mark a unit as mastered and record the activity + quiz result in stats.
 * Call this instead of calling masterUnit + recordActivity separately.
 */
export function completeUnit(
    langId: string,
    unitId: string,
    quizScore: number,
    quizTotal: number
): void {
    masterUnit(langId, unitId)
    const stats = useStatsStore.getState()
    // Record each question result individually so accuracy tracks correctly
    for (let i = 0; i < quizTotal; i++) {
        stats.recordQuizAnswer(langId, i < quizScore)
    }
    stats.recordActivity(langId)
    // Stage 2: await supabase.from("mastered_units").upsert({ user_id, lang_id, unit_id, score, completed_at })
}

// ---------------------------------------------------------------------------
// Lesson item completion — grammar lesson, vocab item, or verb review
// ---------------------------------------------------------------------------

/**
 * Mark a single lesson item (grammar lesson, vocab card, etc.) as complete.
 * Call this instead of calling markLessonComplete directly when a stats
 * side-effect is also needed.
 */
export function completeLessonItem(langId: string, lessonId: string): void {
    markLessonComplete(langId, lessonId)
    // Activity is not recorded per-item — only on drill/session completion.
    // Stage 2: await supabase.from("completed_lessons").upsert({ user_id, lang_id, lesson_id, completed_at })
}

// ---------------------------------------------------------------------------
// Drill session completion — grammar drill, verb drill, flashcard session
// ---------------------------------------------------------------------------

/**
 * Record the completion of any drill session (grammar, verb, or flashcard).
 * Call this at the end of a drill instead of calling recordActivity directly.
 */
export function completeDrillSession(langId: string): void {
    useStatsStore.getState().recordActivity(langId)
    // Stage 2: await supabase.from("drill_sessions").insert({ user_id, lang_id, session_type, completed_at })
}

// ---------------------------------------------------------------------------
// Reading passage completion
// ---------------------------------------------------------------------------

/**
 * Mark a reading passage as read and record activity + quiz answers in stats.
 * @param quizAnswers — array of booleans (true = correct) for each question answered
 */
export function completeReadingPassage(
    langId: string,
    passageId: string,
    quizAnswers: boolean[]
): void {
    markLessonComplete(langId, passageId)
    const stats = useStatsStore.getState()
    quizAnswers.forEach(correct => stats.recordQuizAnswer(langId, correct))
    stats.recordActivity(langId)
    // Stage 2: await supabase.from("reading_completions").upsert({ user_id, lang_id, passage_id, score, completed_at })
}

// ---------------------------------------------------------------------------
// Listening exercise completion
// ---------------------------------------------------------------------------

/**
 * Mark a listening exercise as complete and record activity + quiz answers.
 */
export function completeListeningExercise(
    langId: string,
    exerciseId: string,
    quizAnswers: boolean[]
): void {
    markLessonComplete(langId, exerciseId)
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
export function completeCultureEpisode(langId: string, episodeId: string): void {
    markLessonComplete(langId, episodeId)
    useStatsStore.getState().recordActivity(langId)
    // Stage 2: await supabase.from("culture_completions").upsert({ user_id, lang_id, episode_id, completed_at })
}
