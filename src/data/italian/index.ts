import { LanguageModule } from "../../types"

import { a1Grammar } from "./grammar/a1"
import { a2Grammar } from "./grammar/a2"
import { b1Grammar } from "./grammar/b1"

import { a1Vocab } from "./vocab/a1"
import { a2Vocab } from "./vocab/a2"
import { b1Vocab } from "./vocab/b1"

import { a1Verbs } from "./verbs/a1"
import { a2Verbs } from "./verbs/a2"
import { b1Verbs } from "./verbs/b1"

import { a1Units } from "./units/a1"
import { a2Units } from "./units/a2"
import { b1Units } from "./units/b1"

import { placementQuestions } from "./questions/placement"
import { levelQuestions } from "./questions/level-tests"

const module: LanguageModule = {
    grammar: [...a1Grammar, ...a2Grammar, ...b1Grammar],
    vocab: [...a1Vocab, ...a2Vocab, ...b1Vocab],
    verbs: [...a1Verbs, ...a2Verbs, ...b1Verbs],
    units: [...a1Units, ...a2Units, ...b1Units],
    placementQuestions,
    levelQuestions,
}

export default module
