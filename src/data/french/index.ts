import { createLanguageModule } from "../moduleFactory"

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

import { a1Reading } from "./reading/a1"
import { a2Reading } from "./reading/a2"
import { b1Reading } from "./reading/b1"

import { a1Listening } from "./listening/a1"
import { a2Listening } from "./listening/a2"
import { b1Listening } from "./listening/b1"

import { frA1Culture } from "./culture/a1"
import { frA2Culture } from "./culture/a2"
import { frB1Culture } from "./culture/b1"

import { a1PhraseLessons } from "./phraseLessons/a1"
import { a1Checkpoints } from "./checkpoints/a1"
import { a2Checkpoints } from "./checkpoints/a2"

export default createLanguageModule({
    langId: "fr",
    grammar: [a1Grammar, a2Grammar, b1Grammar],
    vocab: [a1Vocab, a2Vocab, b1Vocab],
    verbs: [a1Verbs, a2Verbs, b1Verbs],
    units: [a1Units, a2Units, b1Units],
    placementQuestions,
    levelQuestions,
    readingPassages: [a1Reading, a2Reading, b1Reading],
    listeningExercises: [a1Listening, a2Listening, b1Listening],
    cultureEpisodes: [frA1Culture, frA2Culture, frB1Culture],
    phraseLessons: [a1PhraseLessons],
    checkpoints: [a1Checkpoints, a2Checkpoints],
})
