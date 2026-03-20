import { GrammarLesson } from "../../../../types"
import { scriptAndFoundationsLessons } from "./script-and-foundations"
import { particlesAndTenseLessons } from "./particles-and-tense"
import { vocabularyAndStructuresLessons } from "./vocabulary-and-structures"
import { adverbsAndDiscourseLessons } from "./adverbs-and-discourse"

export const a1Grammar: GrammarLesson[] = [
    ...scriptAndFoundationsLessons,
    ...particlesAndTenseLessons,
    ...vocabularyAndStructuresLessons,
    ...adverbsAndDiscourseLessons,
]
