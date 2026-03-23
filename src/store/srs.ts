// store/srs.ts — SM-2 spaced-repetition scheduling, backed by @myorg/srs
//
// This module wraps @myorg/srs (calcNextReview, getDueCards) with the app's
// localStorage persistence layer. The public API is unchanged.
//
// DATA MIGRATION: v1 stored cards as { nextReviewDate, interval, easeFactor, repetitions }.
// The package uses { nextReviewAt, intervalDays, easeFactor, streak, reviewCount }.
// migrateIfNeeded() converts v1 → v2 transparently on first read after upgrade.

import {
    SRSCardState,
    calcNextReview,
    INITIAL_STATE,
} from "@myorg/srs"
import type { SRSQuality } from "@myorg/srs"

export type { SRSCardState } from "@myorg/srs"

const SRS_KEY = "ls:srs"

/** Max new (never-seen) cards introduced per session. */
export const NEW_CARDS_PER_DAY = 10

// ---------------------------------------------------------------------------
// v1 → v2 data migration
// ---------------------------------------------------------------------------

type LegacyCard = {
    nextReviewDate?: number
    interval?: number
    easeFactor?: number
    repetitions?: number
}

/**
 * Detects and migrates v1-format card states to v2.
 * v1 fields: nextReviewDate, interval, repetitions
 * v2 fields: nextReviewAt, intervalDays, streak, reviewCount  (from @myorg/srs)
 * Safe to call on already-v2 data — v2 cards pass through unchanged.
 */
function migrateIfNeeded(
    raw: Record<string, Record<string, unknown>>
): Record<string, Record<string, SRSCardState>> {
    const out: Record<string, Record<string, SRSCardState>> = {}
    for (const [langId, cards] of Object.entries(raw)) {
        out[langId] = {}
        for (const [vocabId, card] of Object.entries(cards)) {
            const c = card as LegacyCard & Partial<SRSCardState>
            if (typeof c.nextReviewAt === "number") {
                // Already v2
                out[langId][vocabId] = c as SRSCardState
            } else {
                // v1 → v2: repetitions approximates both streak and reviewCount
                const reps = c.repetitions ?? 0
                out[langId][vocabId] = {
                    easeFactor:   c.easeFactor   ?? INITIAL_STATE.easeFactor,
                    reviewCount:  reps,
                    streak:       reps,
                    nextReviewAt: c.nextReviewDate ?? INITIAL_STATE.nextReviewAt,
                    intervalDays: c.interval       ?? INITIAL_STATE.intervalDays,
                }
            }
        }
    }
    return out
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function loadAll(): Record<string, Record<string, SRSCardState>> {
    try {
        const raw = localStorage.getItem(SRS_KEY)
        if (!raw) return {}
        return migrateIfNeeded(JSON.parse(raw))
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
 *   due      — cards with a stored state where nextReviewAt <= now
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
        if (!state || state.nextReviewAt === 0) {
            newCards.push(id)
        } else if (state.nextReviewAt <= now) {
            due.push(id)
        }
    }

    return { due, newCards: newCards.slice(0, NEW_CARDS_PER_DAY) }
}

/** Count of cards available to study — due cards plus capped new cards. */
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
    const prev = langStates[vocabId] ?? { ...INITIAL_STATE }

    const { nextState } = calcNextReview(prev, quality as SRSQuality)

    store[langId] = { ...langStates, [vocabId]: nextState }
    saveAll(store)
}

/** Earliest nextReviewAt across all known cards for a language (ms timestamp). */
export function getNextDueDate(langId: string): number | null {
    const states = getSRSStates(langId)
    const dates = Object.values(states)
        .map(s => s.nextReviewAt)
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
