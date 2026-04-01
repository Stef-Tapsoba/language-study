// exerciseTypes/errorCorrection.ts — Error Correction exercise type
//
// Exercise: A sentence with a deliberate grammar mistake is shown. The user
// identifies and corrects the error by typing the corrected sentence.
//
// Items are derived on-the-fly from GrammarLesson examples inside the page
// component — no new data fields required.
//
// matchMode: "dictation" — accent/case/punctuation tolerant; no alternative splitting
// (full-sentence reconstruction doesn't need slash-alternative expansion).

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getGrammarForLevel } from "../data/repo"
import type { GrammarLesson } from "../types"

const ErrorCorrectionPage = lazy(() => import("../pages/ErrorCorrectionPage"))

registerExerciseType<GrammarLesson>({
    id: "error-correction",
    label: "Error Correction",

    // Reuses grammar progress tracking.
    contentType: "grammar",
    sessionType: "grammar",

    // Full-sentence reconstruction — dictation mode (no slash-alternative splitting).
    matchMode: "dictation",

    fetchItems: async ({ langId, level }) =>
        Promise.resolve(getGrammarForLevel(langId, level)),

    component: ErrorCorrectionPage,
})
