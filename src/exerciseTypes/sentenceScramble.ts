// exerciseTypes/sentenceScramble.ts — Sentence Scramble exercise type
//
// Exercise: Given a grammar lesson example sentence, the words are shuffled.
// The user clicks/taps tokens to reassemble the sentence in the correct order.
//
// This file is the TEMPLATE for how all exercise type definitions should look.
// Copy this file when adding a new exercise type.

import { lazy } from "react"
import { registerExerciseType } from "./registry"
import { getGrammarForLevel, getGrammarForUnit } from "../data/repo"
import type { GrammarLesson } from "../types"

// Lazy-load the page component so this exercise type is code-split automatically.
const SentenceScramblePage = lazy(() => import("../pages/SentenceScramblePage"))

registerExerciseType<GrammarLesson>({
    id: "sentence-scramble",
    label: "Sentence Scramble",

    // Grammar examples are the content source; reuses "grammar" progress tracking.
    contentType: "grammar",
    sessionType: "grammar",

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
    fetchItems: async ({ langId, level, unitId }) =>
        Promise.resolve(unitId ? getGrammarForUnit(langId, unitId) : getGrammarForLevel(langId, level)),

    component: SentenceScramblePage,
})
