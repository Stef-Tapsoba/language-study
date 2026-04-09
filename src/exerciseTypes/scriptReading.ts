// exerciseTypes/scriptReading.ts — Kana/Hangul Reading Recognition exercise type
//
// Exercise: Show a Japanese kanji word or Korean word; user selects the correct
// romanized reading from 4 options. Only shown for Japanese and Korean (non-latin
// script languages).
//
// matchMode: null (multiple-choice only)

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getVocabForLevel, getVocabForUnit } from "../data/repo"
import type { VocabItem } from "../types"

const ScriptReadingPage = lazy(() => import("../pages/ScriptReadingPage"))

registerExerciseType<VocabItem>({
    id: "script-reading",
    label: "Script Reading",

    // Reuses vocab progress tracking.
    contentType: "vocab",
    sessionType: "vocab",

    // Multiple-choice only.
    matchMode: null,

    fetchItems: async ({ langId, level, unitId }) => {
        if (unitId) return getVocabForUnit(langId, unitId)
        return getVocabForLevel(langId, level)
    },

    component: ScriptReadingPage,
})
