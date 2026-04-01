// exerciseTypes/cloze.ts — Cloze from Reading exercise type
//
// Exercise: A sentence from a reading passage is shown with one vocab-gloss word
// blanked out. The user types the missing target-language word.
//
// matchMode: "strict" — splits "/" alternatives, accent/case/punctuation tolerant.

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getReadingPassagesForLevel } from "../data/repo"
import type { ReadingPassage } from "../types"

const ClozePage = lazy(() => import("../pages/ClozePage"))

registerExerciseType<ReadingPassage>({
    id: "cloze",
    label: "Cloze",

    // Reuses reading progress tracking.
    contentType: "reading",
    sessionType: "reading",

    // Target-language fill-in.
    matchMode: "strict",

    fetchItems: async ({ langId, level }) =>
        Promise.resolve(getReadingPassagesForLevel(langId, level)),

    component: ClozePage,
})
