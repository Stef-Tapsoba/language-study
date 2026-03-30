// store/srs.ts — SM-2 spaced-repetition scheduling.
//
// ── Package boundary ────────────────────────────────────────────────────────
// @myorg/srs (packages/srs) owns the SM-2 algorithm primitives:
//   • SRSCardState — persistent state stored per card (ease, streak, interval)
//   • SRSQuality   — 0–5 quality rating per SM-2 spec
//   • SRSResult    — { nextState, nextLabel } returned from calcNextReview
//   • calcNextReview(state, quality) → SRSResult   (pure function)
//   • INITIAL_STATE — default card state for a brand-new card
//
// This file (store/srs.ts) is the app's SRS lifecycle layer that sits on top:
//   • Owns session-level policy: NEW_CARDS_PER_DAY cap, due-card selection
//   • Provides synchronous read helpers (getDueCards, getDueCount, getNextDueDate)
//     served from the local in-memory cache in registry.srs
//   • Provides async write helpers (updateCard, resetSRS) routed through
//     registry.srs so the storage backend can be swapped at Stage 2 without
//     any page code changes
//
// Pages and components import from this file — never directly from @myorg/srs.
// ────────────────────────────────────────────────────────────────────────────
//
// Read helpers (getDueCards, getDueCount, getNextDueDate) are synchronous and
// call registry.srs.getStates() which reads from the local cache.
//
// Write operations (updateCard, resetSRS) are async and delegate to
// registry.srs so the storage backend can be swapped at Stage 2 without
// any page code changes.

import type { SRSCardState } from "@myorg/srs"
import { registry } from "./registry"

export type { SRSCardState } from "@myorg/srs"

/** Max new (never-seen) cards introduced per session. */
export const NEW_CARDS_PER_DAY = 10

// ---------------------------------------------------------------------------
// Synchronous read helpers (served from local cache)
// ---------------------------------------------------------------------------

/** All card states for a language. */
export function getSRSStates(langId: string): Record<string, SRSCardState> {
    return registry.srs.getStates(langId)
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

/** Earliest nextReviewAt across all known cards for a language (ms timestamp). */
export function getNextDueDate(langId: string): number | null {
    const states = getSRSStates(langId)
    const dates = Object.values(states)
        .map(s => s.nextReviewAt)
        .filter(d => d > Date.now())
    if (dates.length === 0) return null
    return Math.min(...dates)
}

// ---------------------------------------------------------------------------
// Async write operations (routed through registry)
// ---------------------------------------------------------------------------

/**
 * Update a card's SRS state after a review.
 *   quality 4 = Got It (pass)
 *   quality 1 = Not Yet (fail)
 */
export function updateCard(langId: string, vocabId: string, quality: 1 | 4): Promise<void> {
    return registry.srs.updateCard(langId, vocabId, quality)
}

/** Clear all SRS state for a language (called on language progress reset). */
export function resetSRS(langId: string): Promise<void> {
    return registry.srs.resetLanguage(langId)
}
