import { GrammarLesson } from "../../../../types"

import { block1Lessons } from "./block1"
import { block2Lessons } from "./block2"
import { block3Lessons } from "./block3"
import { block4Lessons } from "./block4"
import { block5Lessons } from "./block5"

// French B1 grammar — 14 lessons across 5 blocks (redesign 2026-04-27)
// Block 1 (fr-g-b1-1  – fr-g-b1-2):  Le passé en profondeur
// Block 2 (fr-g-b1-3  – fr-g-b1-6):  Le subjonctif
// Block 3 (fr-g-b1-7  – fr-g-b1-9):  Hypothèses & phrases complexes
// Block 4 (fr-g-b1-10 – fr-g-b1-12): Rapporter, nuancer, expliquer
// Block 5 (fr-g-b1-13 – fr-g-b1-14): Le français authentique

export const b1Grammar: GrammarLesson[] = [
    ...block1Lessons,
    ...block2Lessons,
    ...block3Lessons,
    ...block4Lessons,
    ...block5Lessons,
]
