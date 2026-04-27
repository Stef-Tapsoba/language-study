import { GrammarLesson } from "../../../../types"

import { block1Lessons } from "./block1"
import { block2Lessons } from "./block2"
import { block3Lessons } from "./block3"
import { block4Lessons } from "./block4"
import { block5Lessons } from "./block5"

// French A2 grammar — redesigned 2026-04-24, wired up 2026-04-27
// Block 1 (U1-3):  "What Happened?" — passé composé, imparfait, PC vs Imparfait
// Block 2 (U4-6):  "How Things Compare" — comparatives, relative pronouns, negation
// Block 3 (U7-9):  "Who Did What?" — pronouns (COD/COI/y/en), savoir/connaître
// Block 4 (U10-12): "Future & Conditionals" — futur simple, conditionnel, si clauses
// Block 5 (U13-16): "Life in French" — health, travel, feelings, fluency

export const a2Grammar: GrammarLesson[] = [
    ...block1Lessons,
    ...block2Lessons,
    ...block3Lessons,
    ...block4Lessons,
    ...block5Lessons,
]
