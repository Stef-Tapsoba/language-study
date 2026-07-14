// domain/reinforcementMapping.ts — Derive reinforcement exercise assignments from content.
//
// All logic is pure / side-effect-free so it is trivially testable and can be
// called from both UnitPage (UI) and ExerciseShell (routing) without risk.

import type { GrammarLesson, GrammarExerciseType, LessonUnit } from "../types"
// Import via the index (not registry.ts directly) so all exercise-type
// definitions are guaranteed registered before labels are looked up.
import { getExerciseType } from "../exerciseTypes/index"

// ---------------------------------------------------------------------------
// Vocab unlock threshold
// ---------------------------------------------------------------------------

/** Default minimum learned-vocab count before the vocab section exercise unlocks. */
export const VOCAB_EXERCISE_THRESHOLD = 5

/**
 * Returns the vocab unlock threshold for a unit.
 * Uses the unit's explicit override if set; falls back to VOCAB_EXERCISE_THRESHOLD.
 * For units with fewer words than the threshold, returns the word count
 * so the exercise can always unlock once all words are reviewed.
 */
export function getVocabUnlockThreshold(unit: LessonUnit): number {
    const explicit = unit.vocabUnlockThreshold
    if (explicit !== undefined) return explicit
    return Math.min(VOCAB_EXERCISE_THRESHOLD, unit.vocabIds.length)
}

/**
 * Returns true when enough vocab items in this unit have been marked as learned.
 * @param completedLessonIds  The flat completedLessons[langId] array.
 */
export function isVocabExerciseUnlocked(
    unit: LessonUnit,
    completedLessonIds: string[]
): boolean {
    const learned = unit.vocabIds.filter(id => completedLessonIds.includes(id)).length
    return learned >= getVocabUnlockThreshold(unit)
}

// ---------------------------------------------------------------------------
// Grammar exercise type resolution
// ---------------------------------------------------------------------------

/**
 * Returns the exercise type to pair with a grammar lesson.
 * Reads lesson.exerciseType when set; defaults to "sentence-scramble".
 */
export function getGrammarExerciseType(lesson: GrammarLesson): GrammarExerciseType {
    return lesson.exerciseType ?? "sentence-scramble"
}

// ---------------------------------------------------------------------------
// Human-readable exercise labels (shown in the unit page rows)
// ---------------------------------------------------------------------------

// Labels come from the exercise-type registry (single source of truth).
// Fallbacks cover ids that are deliberately NOT registered — flashcards is an
// SRS engine outside the registry (see exerciseTypes/registry.ts header).
const FALLBACK_LABELS: Record<string, string> = {
    "flashcards": "Flashcards",
}

export function getExerciseLabel(exerciseTypeId: string): string {
    return getExerciseType(exerciseTypeId)?.label
        ?? FALLBACK_LABELS[exerciseTypeId]
        ?? exerciseTypeId
}
