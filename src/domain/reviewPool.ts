// domain/reviewPool.ts — Builds the SRS review pool across vocab, grammar, and verbs.
//
// A "review card" is one schedulable SM-2 fact. Vocab and grammar are one
// card per content item; verbs are flattened to one card per conjugation
// form (tense + pronoun), since each form is really its own memory fact —
// mirrors the flattening VerbDrillPage.buildQuestions already does for MCQ
// drills.
//
// All three pools are gated to "taught so far" via the same
// getUnlockedContentIds helper the verb/grammar drills already use, so
// review never quizzes content the learner hasn't reached yet.

import { CEFRLevel, Example, GrammarLesson, Verb, VocabItem, ConjugationForm, isDialogueExample } from "../types"
import { getUnitsForLevel, getVocabForLevel, getGrammarForLevel, getVerbsForLevel } from "../data/repo"
import { getUnlockedContentIds } from "./unitGating"

export type ReviewCard =
    | { kind: "vocab"; id: string; item: VocabItem }
    | { kind: "grammar"; id: string; lesson: GrammarLesson; example: Example }
    | { kind: "verb"; id: string; verb: Verb; tense: string; form: ConjugationForm }

/**
 * Picks one example sentence to test for a grammar lesson's review card.
 * Prefers the first non-dialogue example (a plain native/translation pair);
 * falls back to the first turn of a dialogue example. Returns null when the
 * lesson has no example usable as a translation prompt (e.g. script lessons,
 * which are filtered out before this is called anyway).
 */
export function pickPrimaryExample(lesson: GrammarLesson): Example | null {
    for (const ex of lesson.examples) {
        if (!isDialogueExample(ex)) return ex
    }
    const firstDialogue = lesson.examples.find(isDialogueExample)
    if (firstDialogue) {
        const [turn] = firstDialogue.exchanges
        return { native: turn.native, translation: turn.translation, romanized: turn.romanized }
    }
    return null
}

function buildVocabCards(langId: string, level: CEFRLevel, unlockedIds: Set<string>): ReviewCard[] {
    return getVocabForLevel(langId, level)
        .filter(item => unlockedIds.has(item.id))
        .map(item => ({ kind: "vocab", id: item.id, item }))
}

function buildGrammarCards(langId: string, level: CEFRLevel, unlockedIds: Set<string>): ReviewCard[] {
    const cards: ReviewCard[] = []
    for (const lesson of getGrammarForLevel(langId, level)) {
        if (!unlockedIds.has(lesson.id) || lesson.exerciseType === "script-reading") continue
        const example = pickPrimaryExample(lesson)
        if (example) cards.push({ kind: "grammar", id: lesson.id, lesson, example })
    }
    return cards
}

function buildVerbCards(langId: string, level: CEFRLevel, unlockedIds: Set<string>): ReviewCard[] {
    const cards: ReviewCard[] = []
    for (const verb of getVerbsForLevel(langId, level)) {
        if (!unlockedIds.has(verb.id)) continue
        verb.conjugations.forEach((conjugation, ci) => {
            conjugation.forms.forEach((form, fi) => {
                cards.push({ kind: "verb", id: `${verb.id}::${ci}::${fi}`, verb, tense: conjugation.tense, form })
            })
        })
    }
    return cards
}

/** Every vocab/grammar/verb-form card taught so far (unlocked units) at the learner's current level. */
export function getReviewPool(langId: string, level: CEFRLevel, masteredIds: string[]): ReviewCard[] {
    const units = getUnitsForLevel(langId, level)
    const vocabIds = getUnlockedContentIds(units, masteredIds, u => u.vocabIds)
    const grammarIds = getUnlockedContentIds(units, masteredIds, u => u.grammarIds)
    const verbIds = getUnlockedContentIds(units, masteredIds, u => u.verbIds)

    return [
        ...buildVocabCards(langId, level, vocabIds),
        ...buildGrammarCards(langId, level, grammarIds),
        ...buildVerbCards(langId, level, verbIds),
    ]
}
