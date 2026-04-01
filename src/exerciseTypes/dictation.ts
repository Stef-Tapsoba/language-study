// exerciseTypes/dictation.ts — Dictation exercise type
//
// Exercise: TTS plays a listening exercise script. After hearing the audio at
// least once, the user types what they heard. Evaluated verbatim.
//
// matchMode: "dictation" — no splitting/stripping; accent/case/punctuation tolerant only.

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getListeningForLevel } from "../data/repo"
import type { ListeningExercise } from "../types"

const DictationPage = lazy(() => import("../pages/DictationPage"))

registerExerciseType<ListeningExercise>({
    id: "dictation",
    label: "Dictation",

    // Reuses listening progress tracking.
    contentType: "listening",

    // Verbatim reproduction.
    matchMode: "dictation",

    fetchItems: async ({ langId, level }) =>
        Promise.resolve(getListeningForLevel(langId, level)),

    component: DictationPage,
})
