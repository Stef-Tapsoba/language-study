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

export type SRSStore = {
    schemaVersion: typeof SRS_SCHEMA_VERSION
    [langId: string]: Record<string, SRSCardState> | typeof SRS_SCHEMA_VERSION
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
 */
export function migrateSRSStore(raw: unknown): SRSStore {
    if (!raw || typeof raw !== "object") {
        return { schemaVersion: SRS_SCHEMA_VERSION }
    }

    const obj = raw as Record<string, unknown>
    const version = typeof obj.schemaVersion === "number" ? obj.schemaVersion : 1

    // Strip the schemaVersion key before passing language maps to migration fns
    const { schemaVersion: _, ...langMaps } = obj

    let data = langMaps as Record<string, Record<string, unknown>>

    if (version < 2) {
        data = migrateV1ToV2(data)
    }

    // Future: if (version < 3) { data = migrateV2ToV3(data) }

    return { schemaVersion: SRS_SCHEMA_VERSION, ...data } as SRSStore
}
