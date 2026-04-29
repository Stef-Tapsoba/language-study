// data/korean/index.ts — assembler
// Combines all modular Korean content files into a single LanguageModule export.
// Content improvements over the original monolith:
//   - Present tense (~아/어요) and past tense (~았/었어요) moved from A2 → A1
//   - 오다 (to come) moved from A2 verbs → A1 verbs
//   - 알다 (to know) moved from B1 verbs → A2 verbs
//   - A1 vocab expanded from 10 → 150 items (all with romanized fields)
//   - A1 verbs expanded from 4 → 8 verbs (all with present + past)
//   - A1 grammar expanded from 4 → 12 lessons
//   - 12 A1 units added with test questions
//   - A2 grammar expanded to 4 lessons (고 싶다, 수 있다, 거예요, 고 있다)

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
import { levelTestQuestions } from "./questions/level-tests"

import { a1Reading } from "./reading/a1"
import { a2Reading } from "./reading/a2"
import { b1Reading } from "./reading/b1"

import { a1Listening } from "./listening/a1"
import { a2Listening } from "./listening/a2"
import { b1Listening } from "./listening/b1"

import { koA1Culture } from "./culture/a1"
import { koA2Culture } from "./culture/a2"
import { koB1Culture } from "./culture/b1"

import { a1PhraseLessons } from "./phraseLessons/a1"
import { a1Checkpoints } from "./checkpoints/a1"
import { a2Checkpoints } from "./checkpoints/a2"
import { b1Checkpoints } from "./checkpoints/b1"

export default createLanguageModule({
    langId: "ko",
    grammar: [a1Grammar, a2Grammar, b1Grammar],
    vocab: [a1Vocab, a2Vocab, b1Vocab],
    verbs: [a1Verbs, a2Verbs, b1Verbs],
    units: [a1Units, a2Units, b1Units],
    placementQuestions,
    levelQuestions: levelTestQuestions,
    readingPassages: [a1Reading, a2Reading, b1Reading],
    listeningExercises: [a1Listening, a2Listening, b1Listening],
    cultureEpisodes: [koA1Culture, koA2Culture, koB1Culture],
    phraseLessons: [a1PhraseLessons],
    checkpoints: [a1Checkpoints, a2Checkpoints, b1Checkpoints],
})
