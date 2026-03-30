// store/LocalStorageSRSStorage.ts — localStorage implementation of ISRSStorage.
//
// Owns the SRS_KEY read/write cycle. srs.ts delegates all mutations here
// so that swapping to SupabaseSRSStorage at Stage 2 only requires changing
// the registry — no srs.ts or page code changes.

import { SRSCardState, calcNextReview, INITIAL_STATE } from "@myorg/srs"
import type { SRSQuality } from "@myorg/srs"
import { ISRSStorage } from "./ISRSStorage"

const SRS_KEY = "ls:srs"

// ── v1 → v2 migration (kept here, co-located with the storage layer) ──────────

type LegacyCard = {
    nextReviewDate?: number
    interval?: number
    easeFactor?: number
    repetitions?: number
}

function migrateIfNeeded(
    raw: Record<string, Record<string, unknown>>
): Record<string, Record<string, SRSCardState>> {
    const out: Record<string, Record<string, SRSCardState>> = {}
    for (const [langId, cards] of Object.entries(raw)) {
        out[langId] = {}
        for (const [vocabId, card] of Object.entries(cards)) {
            const c = card as LegacyCard & Partial<SRSCardState>
            if (typeof c.nextReviewAt === "number") {
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

// ── Implementation ────────────────────────────────────────────────────────────

export class LocalStorageSRSStorage implements ISRSStorage {
    private loadAll(): Record<string, Record<string, SRSCardState>> {
        try {
            const raw = localStorage.getItem(SRS_KEY)
            if (!raw) return {}
            return migrateIfNeeded(JSON.parse(raw))
        } catch {
            return {}
        }
    }

    private saveAll(store: Record<string, Record<string, SRSCardState>>): void {
        localStorage.setItem(SRS_KEY, JSON.stringify(store))
    }

    getStates(langId: string): Record<string, SRSCardState> {
        return this.loadAll()[langId] ?? {}
    }

    async updateCard(langId: string, vocabId: string, quality: 1 | 4): Promise<void> {
        const store = this.loadAll()
        const langStates = store[langId] ?? {}
        const prev = langStates[vocabId] ?? { ...INITIAL_STATE }
        const { nextState } = calcNextReview(prev, quality as SRSQuality)
        store[langId] = { ...langStates, [vocabId]: nextState }
        this.saveAll(store)
    }

    async resetLanguage(langId: string): Promise<void> {
        const store = this.loadAll()
        delete store[langId]
        this.saveAll(store)
    }

    async resetAll(): Promise<void> {
        this.saveAll({})
    }
}
