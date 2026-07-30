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
import { getSRSStates } from "../store/srs"
import { shuffle } from "../utils/arrayUtils"

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

const KIND_ORDER: ReviewCard["kind"][] = ["vocab", "grammar", "verb"]

/**
 * Buckets one kind's ids into overdue vs never-reviewed, like store/srs's
 * getDueCards — but without its NEW_CARDS_PER_DAY cap. That cap is a
 * per-drill daily-new-card policy; applying it per kind here would starve
 * an all-vocab (or all-vocab+grammar) session down below its target size,
 * since the session's own `cap` (10-15) already bounds new-card exposure.
 */
function splitDueAndNew(langId: string, ids: string[]): { due: string[]; newCards: string[] } {
    const states = getSRSStates(langId)
    const now = Date.now()
    const due: string[] = []
    const newCards: string[] = []
    for (const id of ids) {
        const state = states[id]
        if (!state || state.nextReviewAt === 0) newCards.push(id)
        else if (state.nextReviewAt <= now) due.push(id)
    }
    return { due, newCards }
}

/** Split a session cap evenly across the given kinds, distributing any remainder one-per-kind. */
function splitCapAcrossKinds(cap: number, kinds: ReviewCard["kind"][]): Record<string, number> {
    const base = Math.floor(cap / kinds.length)
    let remainder = cap - base * kinds.length
    const targets: Record<string, number> = {}
    for (const kind of kinds) {
        targets[kind] = base + (remainder > 0 ? 1 : 0)
        if (remainder > 0) remainder--
    }
    return targets
}

/**
 * Picks the cards for one review session: an even split of `cap` across
 * whichever kinds the learner has actually been taught (vocab-only learners
 * get an all-vocab session; vocab+grammar-only get a 50/50 split; all three
 * get roughly a third each). Within a kind, truly overdue cards are
 * preferred over never-seen ones. If a kind can't fill its share (e.g. fully
 * caught up on verbs right now), the leftover slots go to the other kinds
 * so the session still reaches its target size.
 */
export function selectReviewSession(langId: string, pool: ReviewCard[], cap: number): ReviewCard[] {
    const groups: Record<ReviewCard["kind"], ReviewCard[]> = { vocab: [], grammar: [], verb: [] }
    for (const card of pool) groups[card.kind].push(card)

    const presentKinds = KIND_ORDER.filter(kind => groups[kind].length > 0)
    if (presentKinds.length === 0) return []

    const targets = splitCapAcrossKinds(cap, presentKinds)

    // Rank each kind's own cards — overdue first, then never-reviewed — shuffled within each bucket.
    const ranked: Record<string, string[]> = {}
    for (const kind of presentKinds) {
        const { due, newCards } = splitDueAndNew(langId, shuffle(groups[kind].map(c => c.id)))
        ranked[kind] = [...due, ...newCards]
    }

    const picked: Record<string, string[]> = {}
    let shortfall = 0
    for (const kind of presentKinds) {
        const take = Math.min(targets[kind], ranked[kind].length)
        picked[kind] = ranked[kind].slice(0, take)
        shortfall += targets[kind] - take
    }

    // Redistribute any shortfall to kinds with cards left over, round-robin.
    for (let progress = true; shortfall > 0 && progress; ) {
        progress = false
        for (const kind of presentKinds) {
            if (shortfall <= 0) break
            if (picked[kind].length < ranked[kind].length) {
                picked[kind].push(ranked[kind][picked[kind].length])
                shortfall--
                progress = true
            }
        }
    }

    const selectedIds = shuffle(presentKinds.flatMap(kind => picked[kind]))
    const cardMap = new Map(pool.map(c => [c.id, c]))
    return selectedIds.map(id => cardMap.get(id)!).filter(Boolean)
}
