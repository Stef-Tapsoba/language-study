// exerciseTypes/speaking.ts — Speaking (EO) exercise type
//
// Exercise: TTS plays a target-language phrase. The user repeats it aloud.
// The Web Speech API transcribes the attempt and answerMatches() evaluates it.
//
// matchMode: null — answer evaluation is handled inside SpeakingPage using
// answerMatches(..., "strict") directly on the transcript.

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getSpeakingForLevel } from "../data/repo"
import type { SpeakingPrompt } from "../types"

const SpeakingPage = lazy(() => import("../pages/SpeakingPage"))

registerExerciseType<SpeakingPrompt>({
    id: "speaking",
    label: "Speaking",

    // Speaking is a genuinely separate content type (EO — production skill).
    contentType: "speaking",
    sessionType: "speaking",

    // Evaluation is speech-based, handled inside the component.
    matchMode: null,

    fetchItems: async ({ langId, level }) =>
        Promise.resolve(getSpeakingForLevel(langId, level)),

    component: SpeakingPage,
})
