// exerciseTypes/grammarDrill.ts — Grammar Drill exercise type
//
// Exercise: A1/A2 show the English meaning → pick the target-language sentence;
// B1+ flips to comprehension-cued (target sentence → pick the English meaning).
// Offers multiple-choice and type-the-answer modes via an in-component chooser.
//
// matchMode: "strict" — the fill-in mode evaluates typed answers with
// answerMatches(input, correct, "strict").

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getGrammarForLevel, getGrammarForUnit, getGrammarLesson, getUnitsForLevel } from "../data/repo"
import { getUnlockedContentIds } from "../domain/unitGating"
import { useProgressStore, progressHelpers } from "../store/useProgressStore"
import type { GrammarLesson } from "../types"

const GrammarDrillPage = lazy(() => import("../pages/GrammarDrillPage"))

registerExerciseType<GrammarLesson>({
    id: "grammar-drill",
    label: "Grammar Drill",

    contentType: "grammar",
    sessionType: "grammar",

    matchMode: "strict",

    display: { emoji: "✏️", description: "Answer grammar questions at your level" },

    fetchItems: async ({ langId, level, unitId, lessonId }) => {
        if (lessonId) {
            const lesson = getGrammarLesson(langId, lessonId)
            return lesson ? [lesson] : []
        }
        if (unitId) return getGrammarForUnit(langId, unitId)

        const allGrammar = getGrammarForLevel(langId, level)
        const units = getUnitsForLevel(langId, level)
        const masteredIds = progressHelpers(useProgressStore.getState().progress).mastered(langId)
        const unlockedIds = getUnlockedContentIds(units, masteredIds, u => u.grammarIds)
        const covered = allGrammar.filter(g => unlockedIds.has(g.id))
        // Need ≥4 distinct examples to build questions; fall back to all if pool is too small
        return covered.flatMap(g => g.examples).length >= 4 ? covered : allGrammar
    },

    component: GrammarDrillPage,
})
