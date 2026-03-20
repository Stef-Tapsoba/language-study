import { GrammarLesson } from "../../../../types"
import { foundationsLessons } from "./foundations"
import { verbConjugationLessons } from "./verb-conjugation"
import { grammarLessons } from "./grammar"
import { practicalExpressionsLessons } from "./practical-expressions"
import { adverbsAndDiscourseLessons } from "./adverbs-and-discourse"

export const a1Grammar: GrammarLesson[] = [
    ...foundationsLessons,
    ...verbConjugationLessons,
    ...grammarLessons,
    ...practicalExpressionsLessons,
    ...adverbsAndDiscourseLessons,
]
