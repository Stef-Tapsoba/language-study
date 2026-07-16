// exerciseTypes/dictation.ts — Dictation exercise type
//
// Exercise: TTS plays a listening exercise script. After hearing the audio at
// least once, the user types what they heard. Evaluated verbatim.
//
// matchMode: "dictation" — no splitting/stripping; accent/case/punctuation tolerant only.

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getListeningForLevel, getListeningForUnit } from "../data/repo"
import type { ListeningExercise } from "../types"

const DictationPage = lazy(() => import("../pages/DictationPage"))

registerExerciseType<ListeningExercise>({
    id: "dictation",
    label: "Dictation",

    // Reuses listening progress tracking.
    contentType: "listening",
    sessionType: "listening",

    // Verbatim reproduction.
    matchMode: "dictation",

    display: { emoji: "🎧", description: "Listen and type what you hear" },

    // CO/CE/EO/EE attribution for per-skill stats (domain/skills.ts)
    skill: "CO",

    fetchItems: async ({ langId, level, unitId }) => {
        if (unitId) return getListeningForUnit(langId, unitId)
        return getListeningForLevel(langId, level)
    },

    component: DictationPage,
})
