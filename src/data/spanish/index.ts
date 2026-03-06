// data/spanish/index.ts — assembler
// Combines all modular Spanish content files into a single LanguageModule export.
// src/data/modules.ts imports this file via getModule("es"), so the public API
// is unchanged — all existing pages continue to work without modification.

import { LanguageModule } from "../../types"

import { a1Grammar } from "./grammar/a1"

import { a1Vocab } from "./vocab/a1"

import { a1Verbs } from "./verbs/a1"

import { a1Units } from "./units/a1"

import { placementQuestions } from "./questions/placement"
import { levelTestQuestions } from "./questions/level-tests"

const module: LanguageModule = {
    grammar: [
        ...a1Grammar
    ],
    vocab: [
        ...a1Vocab
    ],
    verbs: [
        ...a1Verbs
    ],
    units: [
        ...a1Units
    ],
    placementQuestions,
    levelQuestions: levelTestQuestions
}

export default module
