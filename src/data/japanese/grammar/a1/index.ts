import { GrammarLesson } from "../../../../types"
import { scriptBasicsLessons } from "./script-basics"
import { coreGrammarLessons } from "./core-grammar"
import { particlesLessons } from "./particles"
import { adjectivesAndVocabLessons } from "./adjectives-and-vocab"
import { adverbsAndExpressionsLessons } from "./adverbs-and-expressions"

export const a1Grammar: GrammarLesson[] = [
    ...scriptBasicsLessons,
    ...coreGrammarLessons,
    ...particlesLessons,
    ...adjectivesAndVocabLessons,
    ...adverbsAndExpressionsLessons,
]
