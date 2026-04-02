// utils/exerciseConfig.ts — Smart exercise configuration and item selection.
//
// PURPOSE
// -------
// Computes context-aware exercise parameters (round size, max rounds) and
// selects/orders items using a 4-tier priority system driven by SM-2 SRS data.
//
// CONTEXTS
// --------
//   'unit'     — launched from a unit page reinforcement row (small, focused pool)
//   'practice' — launched from the Practice tab (full level corpus)
//   'review'   — launched from a break-return review session (Sprint 3)
//
// TIER SYSTEM
// -----------
// Items are sorted into tiers before filling the session slot cap:
//   1. srs-due  — overdue for SM-2 review (nextReviewAt <= now, or nextReviewAt === 0)
//   2. weak     — easeFactor < 2.0 (historically difficult, not yet due)
//   3. new      — never completed, no SRS state
//   4. random   — seen and not due, not weak
//
// Within each tier, items are sorted by score descending so the most overdue /
// most difficult items surface first.

import { getSRSStates } from "../store/srs"
import type { SRSCardState } from "../store/srs"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ExerciseContext = "unit" | "practice" | "review"
export type TierName = "srs-due" | "weak" | "new" | "random"

export interface SelectionTier {
    name: TierName
    /** Max items to draw from this tier. Default: Infinity (take all available). */
    maxItems: number
}

export interface ExerciseConfig {
    /** Which surface launched this exercise */
    context: ExerciseContext

    /**
     * Items per round (VocabMatching) OR total question cap (SentenceScramble).
     * For SentenceScramble, treat maxRounds as the hard cap on total questions shown.
     */
    roundSize: number

    /** Max number of rounds / total questions served in one session */
    maxRounds: number

    /** Total items available in the pool before selection */
    availableCount: number

    /**
     * Priority tiers for item selection, evaluated in order.
     * ExerciseShell calls selectItems() with these tiers before passing items
     * to the exercise page component.
     */
    selectionTiers: SelectionTier[]
}

// ---------------------------------------------------------------------------
// Config computation
// ---------------------------------------------------------------------------

/**
 * Compute context-aware exercise parameters.
 *
 * Unit context: scales down to available content so exercises feel focused and
 * completable, covering all available items across as few rounds as possible.
 *
 * Practice context: fixed caps (6 items × 5 rounds = 30 max) — learner is
 * free-drilling a large corpus and a longer session is appropriate.
 */
export function getExerciseConfig(
    context: ExerciseContext,
    availableCount: number
): ExerciseConfig {
    if (context === "unit") {
        // Scale to available content — cover all items in the fewest reasonable rounds.
        const roundSize =
            availableCount <= 8  ? 4 :
            availableCount <= 15 ? 5 : 6

        const maxRounds = Math.max(1, Math.ceil(availableCount / roundSize))

        return {
            context,
            roundSize,
            maxRounds,
            availableCount,
            selectionTiers: [
                { name: "srs-due", maxItems: Infinity },
                { name: "weak",    maxItems: Infinity },
                { name: "new",     maxItems: Infinity },
                { name: "random",  maxItems: Infinity },
            ],
        }
    }

    if (context === "review") {
        // Break-return review: slightly smaller than practice, SRS-driven.
        return {
            context,
            roundSize: 5,
            maxRounds: 3,
            availableCount,
            selectionTiers: [
                { name: "srs-due", maxItems: Infinity },
                { name: "weak",    maxItems: 10 },
                { name: "new",     maxItems: 0  },  // review = seen items only
                { name: "random",  maxItems: 5  },
            ],
        }
    }

    // Practice tab: generous fixed caps, SRS-driven selection.
    return {
        context: "practice",
        roundSize: 6,
        maxRounds: 5,
        availableCount,
        selectionTiers: [
            { name: "srs-due", maxItems: 18 },  // up to 3 rounds of due cards
            { name: "weak",    maxItems: 6  },
            { name: "new",     maxItems: 6  },
            { name: "random",  maxItems: Infinity },
        ],
    }
}

// ---------------------------------------------------------------------------
// Item scoring
// ---------------------------------------------------------------------------

interface ScoredItem {
    tier: TierName
    /** 0–1, higher = surface sooner within tier */
    score: number
}

function scoreItem(
    itemId: string,
    srsState: SRSCardState | undefined,
    isCompleted: boolean,
    now: number
): ScoredItem {
    // Tier 1 — SRS due: nextReviewAt === 0 (never reviewed) OR overdue
    if (!srsState || srsState.nextReviewAt === 0 || srsState.nextReviewAt <= now) {
        if (!srsState || srsState.nextReviewAt === 0) {
            // Never reviewed — treat as immediately due, no overdue bonus
            return { tier: "srs-due", score: 0.5 }
        }
        const dayMs = 86_400_000
        const overdueDays = (now - srsState.nextReviewAt) / dayMs
        const overdueScore = Math.min(1, overdueDays / Math.max(1, srsState.intervalDays))
        const diffScore    = Math.max(0, Math.min(1, (2.5 - srsState.easeFactor) / 1.2))
        return { tier: "srs-due", score: 0.5 * overdueScore + 0.5 * diffScore }
    }

    // Tier 2 — weak: has SRS state but historically difficult
    if (srsState.easeFactor < 2.0) {
        const weakScore = Math.min(1, (2.0 - srsState.easeFactor) / 0.7)
        return { tier: "weak", score: weakScore }
    }

    // Tier 3 — new: never completed, no SRS state at all
    if (!isCompleted) {
        return { tier: "new", score: Math.random() }
    }

    // Tier 4 — random: seen before, not due, not weak
    return { tier: "random", score: Math.random() }
}

// ---------------------------------------------------------------------------
// Item selection
// ---------------------------------------------------------------------------

const TIER_ORDER: TierName[] = ["srs-due", "weak", "new", "random"]

/**
 * Select and order items for an exercise session according to config tiers.
 *
 * Items are scored, grouped by tier, sorted within each tier, then filled
 * into `roundSize × maxRounds` slots in tier priority order.
 *
 * Returns a new array. Does not mutate the input.
 *
 * Works for any item type that has an `.id` string field (VocabItem,
 * GrammarLesson, etc.). SRS state is only present for vocab items — grammar
 * items fall through to the "new" or "random" tier naturally.
 */
export function selectItems<T extends { id: string }>(
    items: T[],
    config: ExerciseConfig,
    langId: string,
    completedIds: string[]
): T[] {
    const srsStates   = getSRSStates(langId)
    const completedSet = new Set(completedIds)
    const now          = Date.now()
    const totalSlots   = config.roundSize * config.maxRounds

    // Score every item and bucket by tier
    const buckets: Record<TierName, Array<{ item: T; score: number }>> = {
        "srs-due": [],
        "weak":    [],
        "new":     [],
        "random":  [],
    }

    for (const item of items) {
        const { tier, score } = scoreItem(
            item.id,
            srsStates[item.id] as SRSCardState | undefined,
            completedSet.has(item.id),
            now
        )
        buckets[tier].push({ item, score })
    }

    // Sort descending within each tier
    for (const tier of TIER_ORDER) {
        buckets[tier].sort((a, b) => b.score - a.score)
    }

    // Fill slots from tiers in priority order, respecting per-tier maxItems
    const selected: T[] = []
    for (const tier of TIER_ORDER) {
        if (selected.length >= totalSlots) break
        const tierCfg  = config.selectionTiers.find(t => t.name === tier)
        const tierMax  = tierCfg?.maxItems ?? Infinity
        const slotsLeft = totalSlots - selected.length
        const take      = Math.min(tierMax, slotsLeft, buckets[tier].length)
        for (let i = 0; i < take; i++) {
            selected.push(buckets[tier][i].item)
        }
    }

    return selected
}
