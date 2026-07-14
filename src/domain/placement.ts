// domain/placement.ts — Gated-threshold placement logic, extracted from PlacementPage.
//
// The learner climbs the CEFR ladder: each level must be passed (>= PASS_RATIO
// of its questions correct) to unlock the next. They are placed at the first
// level they fail — the first level they don't yet know is exactly the level
// they should study.
//
// evaluatePlacement() is incremental: call it after every answer. It reports
// completion as soon as the outcome is decided, which enables early exit —
// a learner who misses two A1 questions is placed at A1 immediately instead
// of sitting through the remaining (harder) questions whose answers the
// algorithm would ignore anyway.

import { CEFRLevel, CEFR_LEVELS, QuizQuestion } from "../types"

/**
 * Sentinel recorded when the learner chooses "I don't know".
 * Never matches a real answer, so it always counts as incorrect — this keeps
 * lucky guesses from inflating placement.
 */
export const IDK_ANSWER = "__idk__"

/** Fraction of a level's questions that must be correct to pass it. */
export const PASS_RATIO = 0.75

/** Correct answers required to pass a level with `count` questions. */
export function passThreshold(count: number): number {
    return Math.ceil(count * PASS_RATIO)
}

export type PlacementResult =
    | { complete: true; level: CEFRLevel }
    | { complete: false }

/**
 * Evaluate placement from the answers given so far.
 *
 * Returns { complete: true, level } as soon as the outcome is decided:
 *   - a level's threshold has become unreachable → place at that level, or
 *   - every level passed → place at the highest level (C1).
 * Returns { complete: false } while the current level still needs answers.
 */
export function evaluatePlacement(
    questions: QuizQuestion[],
    answers: Record<string, string>
): PlacementResult {
    for (const level of CEFR_LEVELS) {
        const levelQuestions = questions.filter(q => q.level === level)
        if (levelQuestions.length === 0) continue

        const threshold = passThreshold(levelQuestions.length)
        let correct = 0
        let answered = 0
        for (const q of levelQuestions) {
            const a = answers[q.id]
            if (a === undefined) continue
            answered++
            if (a === q.answer) correct++
        }

        // Threshold unreachable — even perfect remaining answers can't pass.
        const wrong = answered - correct
        if (wrong > levelQuestions.length - threshold) {
            return { complete: true, level }
        }
        // Level still in play — need more answers before moving up.
        if (answered < levelQuestions.length) {
            return { complete: false }
        }
        // Level fully answered with threshold met — climb to the next one.
    }
    return { complete: true, level: CEFR_LEVELS[CEFR_LEVELS.length - 1] }
}
