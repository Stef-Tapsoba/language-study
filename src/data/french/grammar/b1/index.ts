import { GrammarLesson } from "../../../../types"

import { block1Lessons } from "./block1"
import { block2Lessons } from "./block2"
import { block3Lessons } from "./block3"
import { block4Lessons } from "./block4"
import { block5Lessons } from "./block5"

// French B1 grammar — 22 lessons across 5 blocks (gap-analysis revision 2026-04-28)
// Block 1 (fr-g-b1-1  – fr-g-b1-2,  16–17): Le passé en profondeur
// Block 2 (fr-g-b1-3  – fr-g-b1-6,  18):    Le subjonctif (+ subjonctif passé)
// Block 3 (fr-g-b1-7  – fr-g-b1-9,  19–20): Hypothèses & phrases complexes (+ FA, mise en relief)
// Block 4 (fr-g-b1-10 – fr-g-b1-12, 21):    Rapporter, nuancer, expliquer (+ infinitif passé)
// Block 5 (fr-g-b1-13 – fr-g-b1-15, 22):    Le français authentique (+ se faire)

export const b1Grammar: GrammarLesson[] = [
    ...block1Lessons,
    ...block2Lessons,
    ...block3Lessons,
    ...block4Lessons,
    ...block5Lessons,
]
