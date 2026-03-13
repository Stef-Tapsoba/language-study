// data/spanish/index.ts — assembler
// Combines all modular Spanish content files into a single LanguageModule export.
// src/data/modules.ts imports this file via getModule("es"), so the public API
// is unchanged — all existing pages continue to work without modification.

import { LanguageModule } from "../../types"

import { a1Grammar } from "./grammar/a1"
import { a2Grammar } from "./grammar/a2"
import { b1Grammar } from "./grammar/b1"
import { b2Grammar } from "./grammar/b2"
import { c1Grammar } from "./grammar/c1"

import { a1Vocab } from "./vocab/a1"
import { a2Vocab } from "./vocab/a2"
import { b1Vocab } from "./vocab/b1"
import { b2Vocab } from "./vocab/b2"
import { c1Vocab } from "./vocab/c1"

import { a1Verbs } from "./verbs/a1"
import { a2Verbs } from "./verbs/a2"
import { b1Verbs } from "./verbs/b1"
import { b2Verbs } from "./verbs/b2"
import { c1Verbs } from "./verbs/c1"

import { a1Units } from "./units/a1"
import { a2Units } from "./units/a2"
import { b1Units } from "./units/b1"
import { b2Units } from "./units/b2"
import { c1Units } from "./units/c1"

import { placementQuestions } from "./questions/placement"
import { levelTestQuestions } from "./questions/level-tests"

import { a1Reading } from "./reading/a1"
import { a2Reading } from "./reading/a2"
import { b2Reading } from "./reading/b2"
import { c1Reading } from "./reading/c1"

import { a1Listening } from "./listening/a1"
import { a2Listening } from "./listening/a2"
import { b2Listening } from "./listening/b2"
import { c1Listening } from "./listening/c1"

import { a1Culture } from "./culture/a1"

const module: LanguageModule = {
    grammar: [
        ...a1Grammar,
        ...a2Grammar,
        ...b1Grammar,
        ...b2Grammar,
        ...c1Grammar
    ],
    vocab: [
        ...a1Vocab,
        ...a2Vocab,
        ...b1Vocab,
        ...b2Vocab,
        ...c1Vocab
    ],
    verbs: [
        ...a1Verbs,
        ...a2Verbs,
        ...b1Verbs,
        ...b2Verbs,
        ...c1Verbs
    ],
    units: [
        ...a1Units,
        ...a2Units,
        ...b1Units,
        ...b2Units,
        ...c1Units
    ],
    placementQuestions,
    levelQuestions: levelTestQuestions,
    readingPassages: [...a1Reading, ...a2Reading, ...b2Reading, ...c1Reading],
    listeningExercises: [...a1Listening, ...a2Listening, ...b2Listening, ...c1Listening],
    cultureEpisodes: [...a1Culture]
}

export default module
