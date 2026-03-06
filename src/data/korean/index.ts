// data/korean/index.ts — assembler
// Combines all modular Korean content files into a single LanguageModule export.

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
