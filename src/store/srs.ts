// src/store/srs.ts — Spaced Repetition System (SM-2 algorithm)
//
// Storage shape: Record<langId, Record<vocabId, SRSCardState>>
// localStorage key: "ls:srs"

import { SRSCardState } from "../types"

const SRS_KEY = "ls:srs"

const DEFAULT_STATE: SRSCardState = {
    nextReviewDate: 0,
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function loadAll(): Record<string, Record<string, SRSCardState>> {
    try {
        const raw = localStorage.getItem(SRS_KEY)
        return raw ? JSON.parse(raw) : {}
    } catch {
        return {}
    }
}

function saveAll(store: Record<string, Record<string, SRSCardState>>): void {
    localStorage.setItem(SRS_KEY, JSON.stringify(store))
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** All card states for a language. */
export function getSRSStates(langId: string): Record<string, SRSCardState> {
    return loadAll()[langId] ?? {}
}

/**
 * Split a vocab list into:
 *   due      — cards with a stored state where nextReviewDate <= now
 *   newCards — cards with no stored state yet (never reviewed)
 */
export function getDueCards(
    langId: string,
    allVocabIds: string[]
): { due: string[]; newCards: string[] } {
    const states = getSRSStates(langId)
    const now = Date.now()
    const due: string[] = []
    const newCards: string[] = []

    for (const id of allVocabIds) {
        const state = states[id]
        if (!state) {
            newCards.push(id)
        } else if (state.nextReviewDate <= now) {
            due.push(id)
        }
    }

    return { due, newCards }
}

/** Count of cards available to study — due cards plus unseen new cards. */
export function getDueCount(langId: string, allVocabIds: string[]): number {
    const { due, newCards } = getDueCards(langId, allVocabIds)
    return due.length + newCards.length
}

/**
 * Update a card's SRS state after a review.
 *   quality 4 = Got It (pass)
 *   quality 1 = Not Yet (fail)
 */
export function updateCard(langId: string, vocabId: string, quality: 1 | 4): void {
    const store = loadAll()
    const langStates = store[langId] ?? {}
    const prev: SRSCardState = langStates[vocabId] ?? { ...DEFAULT_STATE }

    let { interval, easeFactor, repetitions } = prev

    if (quality < 3) {
        // Failed — reset repetitions and shorten interval; small ease penalty
        repetitions = 0
        interval = 1
        easeFactor = Math.max(1.3, easeFactor - 0.2)
    } else {
        // Passed — advance interval using SM-2 schedule
        if (repetitions === 0) {
            interval = 1
        } else if (repetitions === 1) {
            interval = 6
        } else {
            interval = Math.round(interval * easeFactor)
        }
        repetitions++
        // SM-2 ease factor update for quality 4:
        // ef' = ef + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
        //     = ef + (0.1 - 1 * (0.08 + 1 * 0.02)) = ef + 0.0
        // Standard SM-2 keeps ef stable at quality 4; slight increase formula below
        easeFactor = Math.max(
            1.3,
            easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
        )
    }

    const nextReviewDate = Date.now() + interval * 86_400_000

    store[langId] = {
        ...langStates,
        [vocabId]: { nextReviewDate, interval, easeFactor, repetitions },
    }

    saveAll(store)
}

/** Earliest nextReviewDate across all known cards for a language (ms timestamp). */
export function getNextDueDate(langId: string): number | null {
    const states = getSRSStates(langId)
    const dates = Object.values(states)
        .map(s => s.nextReviewDate)
        .filter(d => d > Date.now())
    if (dates.length === 0) return null
    return Math.min(...dates)
}

/** Clear all SRS state for a language (called on language progress reset). */
export function resetSRS(langId: string): void {
    const store = loadAll()
    delete store[langId]
    saveAll(store)
}
