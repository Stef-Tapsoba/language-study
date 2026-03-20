import { GrammarLesson } from "../../../../types"
import { foundationsLessons } from "./foundations"
import { verbsLessons } from "./verbs"
import { grammarLessons } from "./grammar"
import { practicalExpressionsLessons } from "./practical-expressions"
import { adverbsAndDiscourseLessons } from "./adverbs-and-discourse"

export const a1Grammar: GrammarLesson[] = [
    ...foundationsLessons,
    ...verbsLessons,
    ...grammarLessons,
    ...practicalExpressionsLessons,
    ...adverbsAndDiscourseLessons,
]
