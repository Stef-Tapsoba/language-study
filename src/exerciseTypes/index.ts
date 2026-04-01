// exerciseTypes/index.ts — Registration entry point
//
// Import each exercise type definition here. The side-effect of each import
// is a registerExerciseType() call that adds the type to the registry.
//
// HOW TO ADD A NEW EXERCISE TYPE
// --------------------------------
// 1. Create src/exerciseTypes/<your-type>.ts  (see sentenceScramble.ts as a template)
// 2. Create src/pages/<YourType>Page.tsx      (the exercise component)
// 3. Import the definition file below — one line.
//
// That's it. ExerciseShell handles routing automatically for all registered types
// via the "exercise/:exerciseTypeId" route in App.tsx — no route changes needed.
// No other files need editing.
//
// HOW TO SWAP TO SUPABASE (Stage 2)
// ------------------------------------
// In each definition file, replace the fetchItems body:
//
//   Before:
//     fetchItems: async ({ langId, level }) =>
//         Promise.resolve(getGrammarForLevel(langId, level))
//
//   After:
//     fetchItems: async ({ langId, level }) => {
//         const { data } = await supabase
//             .from("grammar_lessons")
//             .select("*")
//             .eq("lang_id", langId)
//             .eq("level", level)
//         return data ?? []
//     }
//
// Everything else — component, matchMode, contentType, route — stays unchanged.

// ── Registered exercise types ────────────────────────────────────────────────

import "./sentenceScramble"
import "./vocabMatching"
import "./cloze"
import "./dictation"
import "./scriptReading"
import "./dialogueCompletion"
import "./vocabInContext"
import "./errorCorrection"
import "./speaking"

// Re-export registry API so consumers only need one import
export { registerExerciseType, getExerciseType, getAllExerciseTypes } from "./registry"
export type { ExerciseTypeDef, ExerciseComponentProps, ExerciseFetchParams } from "./registry"
