import { GrammarLesson } from "../../../../types"
import { block1Lessons } from "./block1"
import { block2Lessons } from "./block2"
import { block3Lessons } from "./block3"
import { block4Lessons } from "./block4"
import { block5Lessons } from "./block5"

export const a1Grammar: GrammarLesson[] = [
    ...block1Lessons,
    ...block2Lessons,
    ...block3Lessons,
    ...block4Lessons,
    ...block5Lessons,
]
