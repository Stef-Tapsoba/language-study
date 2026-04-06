import { b2Grammar } from "./grammar/b2"
import { c1Grammar } from "./grammar/c1"
import { b2Vocab } from "./vocab/b2"
import { c1Vocab } from "./vocab/c1"
import { b2Verbs } from "./verbs/b2"
import { c1Verbs } from "./verbs/c1"
import { b2Units } from "./units/b2"
import { c1Units } from "./units/c1"
import { b2Reading } from "./reading/b2"
import { c1Reading } from "./reading/c1"
import { b2Listening } from "./listening/b2"
import { c1Listening } from "./listening/c1"
import { b2Culture } from "./culture/b2"
import { c1Culture } from "./culture/c1"

export default {
    grammar:            [b2Grammar, c1Grammar],
    vocab:              [b2Vocab,   c1Vocab],
    verbs:              [b2Verbs,   c1Verbs],
    units:              [b2Units,   c1Units],
    readingPassages:    [b2Reading, c1Reading],
    listeningExercises: [b2Listening, c1Listening],
    cultureEpisodes:    [b2Culture, c1Culture],
}
