// exerciseTypes/dialogueCompletion.ts — Dialogue Completion exercise type
//
// Exercise: A dialogue passage is shown with one speaker turn blanked out.
// The user picks the correct response from 4 options.
//
// matchMode: null (multiple-choice only)

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getReadingPassagesForLevel } from "../data/repo"
import type { ReadingPassage } from "../types"

const DialogueCompletionPage = lazy(() => import("../pages/DialogueCompletionPage"))

registerExerciseType<ReadingPassage>({
    id: "dialogue-completion",
    label: "Dialogue Completion",

    // Reuses reading progress tracking.
    contentType: "reading",

    // Multiple-choice only.
    matchMode: null,

    fetchItems: async ({ langId, level }) =>
        Promise.resolve(
            getReadingPassagesForLevel(langId, level).filter(p => p.category === "dialogue")
        ),

    component: DialogueCompletionPage,
})
