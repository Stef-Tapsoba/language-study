// exerciseTypes/verbDrill.ts — Verb Conjugation Drill exercise type
//
// Exercise: Given an infinitive, tense, and pronoun, pick the correct
// conjugated form from four options. Distractors prefer same-tense forms.
//
// matchMode: null — multiple-choice only.

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getVerbsForLevel, getVerbsForUnit, getUnitsForLevel } from "../data/repo"
import { getUnlockedContentIds } from "../domain/unitGating"
import { useProgressStore, progressHelpers } from "../store/useProgressStore"
import type { Verb } from "../types"

const VerbDrillPage = lazy(() => import("../pages/VerbDrillPage"))

registerExerciseType<Verb>({
    id: "verb-drill",
    label: "Verb Drill",

    contentType: "verb",
    sessionType: "verb",

    // Multiple-choice only.
    matchMode: null,

    display: { emoji: "🔡", description: "Conjugate verbs in context" },

    // Level-wide launches gate the pool to unlocked units so learners only
    // drill verbs they've plausibly seen. lessonId is ignored — verbs have no
    // lesson granularity.
    fetchItems: async ({ langId, level, unitId }) => {
        if (unitId) return getVerbsForUnit(langId, unitId)

        const allVerbs = getVerbsForLevel(langId, level)
        const units = getUnitsForLevel(langId, level)
        const masteredIds = progressHelpers(useProgressStore.getState().progress).mastered(langId)
        const unlockedIds = getUnlockedContentIds(units, masteredIds, u => u.verbIds)
        const covered = allVerbs.filter(v => unlockedIds.has(v.id))
        // Need ≥2 verbs for meaningful distractors; fall back to all if pool is too small
        return covered.length >= 2 ? covered : allVerbs
    },

    component: VerbDrillPage,
})
