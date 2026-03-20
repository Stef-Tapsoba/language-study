import { GrammarLesson } from "../../../../types"
import { foundationsLessons } from "./foundations"
import { articlesAndAgreementLessons } from "./articles-and-agreement"
import { verbConjugationLessons } from "./verb-conjugation"
import { practicalExpressionsLessons } from "./practical-expressions"
import { adverbsAndDiscourseLessons } from "./adverbs-and-discourse"

export const a1Grammar: GrammarLesson[] = [
    ...foundationsLessons,
    ...articlesAndAgreementLessons,
    ...verbConjugationLessons,
    ...practicalExpressionsLessons,
    ...adverbsAndDiscourseLessons,
]
