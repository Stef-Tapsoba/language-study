// store/LocalStorageSRSStorage.ts — localStorage implementation of ISRSStorage.
//
// Owns the SRS_KEY read/write cycle. srs.ts delegates all mutations here
// so that swapping to SupabaseSRSStorage at Stage 2 only requires changing
// the registry — no srs.ts or page code changes.

import { SRSCardState, calcNextReview, INITIAL_STATE } from "@myorg/srs"
import type { SRSQuality } from "@myorg/srs"
import { ISRSStorage } from "./ISRSStorage"
import { migrateSRSStore, SRS_SCHEMA_VERSION } from "./srs-migrate"

const SRS_KEY = "ls:srs"

// ── Implementation ────────────────────────────────────────────────────────────

export class LocalStorageSRSStorage implements ISRSStorage {
    private _load(): Record<string, Record<string, SRSCardState>> {
        try {
            const raw = localStorage.getItem(SRS_KEY)
            if (!raw) return {}
            return migrateSRSStore(JSON.parse(raw)).langs
        } catch {
            return {}
        }
    }

    private _save(store: Record<string, Record<string, SRSCardState>>): void {
        // Persist with schemaVersion + nested langs so future loads skip migrations.
        localStorage.setItem(SRS_KEY, JSON.stringify({ schemaVersion: SRS_SCHEMA_VERSION, langs: store }))
    }

    getStates(langId: string): Record<string, SRSCardState> {
        return this._load()[langId] ?? {}
    }

    async loadAll(): Promise<Record<string, Record<string, SRSCardState>>> {
        return this._load()
    }

    async saveAll(data: Record<string, Record<string, SRSCardState>>): Promise<void> {
        this._save(data)
    }

    async updateCard(langId: string, vocabId: string, quality: 1 | 4): Promise<void> {
        const store = this._load()
        const langStates = store[langId] ?? {}
        const prev = langStates[vocabId] ?? { ...INITIAL_STATE }
        const { nextState } = calcNextReview(prev, quality as SRSQuality)
        store[langId] = { ...langStates, [vocabId]: nextState }
        this._save(store)
    }

    async resetLanguage(langId: string): Promise<void> {
        const store = this._load()
        delete store[langId]
        this._save(store)
    }

    async resetAll(): Promise<void> {
        this._save({})
    }

    // Stage 1: getStates() reads directly from localStorage on every call — no
    // in-memory cache to pre-populate, so hydrate() is intentionally a no-op.
    // Stage 2 (SupabaseSRSStorage) overrides this to load cards from the DB.
    async hydrate(_langId?: string): Promise<void> { /* no-op in Stage 1 */ }
}
