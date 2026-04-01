// store/srs-migrate.ts — Versioned SRS schema migration.
//
// Extracted from LocalStorageSRSStorage so that:
//  - migrations are testable in isolation
//  - adding a v3 migration has a clear, obvious home
//  - Stage 2 (Supabase) can run the same migrations on data loaded from the DB
//
// Schema history:
//   v1 — keys: nextReviewDate, interval, easeFactor, repetitions
//   v2 — keys: nextReviewAt, intervalDays, easeFactor, reviewCount, streak  (current)

import { INITIAL_STATE } from "@myorg/srs"
import type { SRSCardState } from "@myorg/srs"

export const SRS_SCHEMA_VERSION = 2

/**
 * In-memory shape returned by migrateSRSStore and used by LocalStorageSRSStorage.
 * On-disk the store is persisted as { schemaVersion: N, langs: { [langId]: {...} } }.
 * Legacy data (pre-nested format) had lang maps at the top level — migrateSRSStore
 * handles both shapes transparently.
 */
export type SRSStore = {
    schemaVersion: typeof SRS_SCHEMA_VERSION
    langs: Record<string, Record<string, SRSCardState>>
}

type LegacyCardV1 = {
    nextReviewDate?: number
    interval?: number
    easeFactor?: number
    repetitions?: number
}

function migrateV1ToV2(
    raw: Record<string, Record<string, unknown>>
): Record<string, Record<string, SRSCardState>> {
    const out: Record<string, Record<string, SRSCardState>> = {}
    for (const [langId, cards] of Object.entries(raw)) {
        out[langId] = {}
        for (const [vocabId, card] of Object.entries(cards)) {
            const c = card as LegacyCardV1 & Partial<SRSCardState>
            if (typeof c.nextReviewAt === "number") {
                // Already v2 shape — pass through
                out[langId][vocabId] = c as SRSCardState
            } else {
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

/**
 * Migrate raw stored SRS data to the current schema version.
 * Safe to call on already-current data — each migration step is idempotent.
 * Add `if (version < N)` blocks here as the SRSCardState shape evolves.
 *
 * Handles two on-disk formats transparently:
 *   Legacy (pre-nested): { schemaVersion?: N, es: {...}, fr: {...} }
 *   Current (nested):    { schemaVersion: N, langs: { es: {...}, fr: {...} } }
 */
export function migrateSRSStore(raw: unknown): SRSStore {
    if (!raw || typeof raw !== "object") {
        return { schemaVersion: SRS_SCHEMA_VERSION, langs: {} }
    }

    const obj = raw as Record<string, unknown>
    const version = typeof obj.schemaVersion === "number" ? obj.schemaVersion : 1

    // Detect format: new format has a `langs` object key; legacy has lang IDs at the top level.
    let langData: Record<string, Record<string, unknown>>
    if (obj.langs && typeof obj.langs === "object" && !Array.isArray(obj.langs)) {
        langData = obj.langs as Record<string, Record<string, unknown>>
    } else {
        // Legacy flat format — strip schemaVersion and treat the rest as lang maps
        const { schemaVersion: _, ...flatMaps } = obj
        langData = flatMaps as Record<string, Record<string, unknown>>
    }

    if (version < 2) {
        langData = migrateV1ToV2(langData)
    }

    // Future: if (version < 3) { langData = migrateV2ToV3(langData) }

    return { schemaVersion: SRS_SCHEMA_VERSION, langs: langData as Record<string, Record<string, SRSCardState>> }
}
