// exerciseTypes/vocabInContext.ts — Vocabulary in Context exercise type
//
// Exercise: A reading passage excerpt is shown with one vocab word highlighted.
// The user selects the correct English meaning from 4 options.
//
// matchMode: null (multiple-choice only)

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getReadingPassagesForLevel } from "../data/repo"
import type { ReadingPassage } from "../types"

const VocabInContextPage = lazy(() => import("../pages/VocabInContextPage"))

registerExerciseType<ReadingPassage>({
    id: "vocab-in-context",
    label: "Vocabulary in Context",

    // Reuses reading progress tracking.
    contentType: "reading",
    sessionType: "reading",

    // Multiple-choice only.
    matchMode: null,

    fetchItems: async ({ langId, level }) =>
        Promise.resolve(getReadingPassagesForLevel(langId, level)),

    component: VocabInContextPage,
})
