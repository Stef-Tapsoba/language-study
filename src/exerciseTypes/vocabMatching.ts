// exerciseTypes/vocabMatching.ts — Vocab Matching exercise type
//
// Exercise: Two columns — target-language words on the left, English translations
// on the right, shuffled. The user clicks a word on one side and then a word on
// the other side to form a pair. All correct pairs clears the round.
//
// matchMode: null (no typed input; match is exact option-to-option)

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getVocabForLevel } from "../data/repo"
import type { VocabItem } from "../types"

const VocabMatchingPage = lazy(() => import("../pages/VocabMatchingPage"))

registerExerciseType<VocabItem>({
    id: "vocab-matching",
    label: "Vocab Matching",

    // Reuses vocab progress tracking.
    contentType: "vocab",

    // Multiple-choice pairing — no typed input.
    matchMode: null,

    fetchItems: async ({ langId, level }) =>
        Promise.resolve(getVocabForLevel(langId, level)),

    component: VocabMatchingPage,
})
