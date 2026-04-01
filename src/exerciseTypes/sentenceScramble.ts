// exerciseTypes/sentenceScramble.ts — Sentence Scramble exercise type
//
// Exercise: Given a grammar lesson example sentence, the words are shuffled.
// The user clicks/taps tokens to reassemble the sentence in the correct order.
//
// This file is a TEMPLATE for how all exercise type definitions should look.
// Copy this file when adding a new exercise type.
//
// STATUS: definition registered; SentenceScramblePage not yet implemented.
// When the page is ready:
//   1. Uncomment the lazy() import below
//   2. Uncomment the import in exerciseTypes/index.ts

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getGrammarForLevel } from "../data/repo"
import type { GrammarLesson } from "../types"

// Lazy-load the page component so this exercise type is code-split automatically.
// Remove the placeholder and uncomment this line once the page exists:
//   const SentenceScramblePage = lazy(() => import("../pages/SentenceScramblePage"))
const SentenceScramblePage = lazy(() =>
    // TODO: replace with real page once implemented
    Promise.resolve({ default: () => null as unknown as JSX.Element })
)

registerExerciseType<GrammarLesson>({
    id: "sentence-scramble",
    label: "Sentence Scramble",

    // Grammar examples are the content source; reuses "grammar" progress tracking.
    contentType: "grammar",

    // User must reconstruct the exact target-language sentence.
    // "strict": splits " / " alternatives, keeps parentheticals, accent-tolerant.
    matchMode: "strict",

    // ── Content fetcher ───────────────────────────────────────────────────────
    // Stage 1: wraps the synchronous repo.ts call.
    // Stage 2 (Supabase): replace body only:
    //
    //   fetchItems: async ({ langId, level }) => {
    //       const { data } = await supabase
    //           .from("grammar_lessons")
    //           .select("*")
    //           .eq("lang_id", langId)
    //           .eq("level", level)
    //       return data ?? []
    //   }
    //
    fetchItems: async ({ langId, level }) =>
        Promise.resolve(getGrammarForLevel(langId, level)),

    component: SentenceScramblePage,
})
