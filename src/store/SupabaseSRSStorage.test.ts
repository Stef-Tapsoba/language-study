// store/SupabaseSRSStorage.test.ts

import { describe, it, expect, beforeEach, vi } from "vitest"
import { SupabaseSRSStorage } from "./SupabaseSRSStorage"
import { INITIAL_STATE } from "@myorg/srs"

// ---------------------------------------------------------------------------
// Mock Supabase client
// ---------------------------------------------------------------------------

const mockFrom = vi.fn()
const mockRpc = vi.fn()

const mockSb = {
    from: mockFrom,
    rpc: mockRpc,
    auth: { onAuthStateChange: vi.fn() },
} as unknown as import("@supabase/supabase-js").SupabaseClient

vi.mock("../lib/supabaseClient", () => ({ supabase: mockSb }))
vi.mock("@supabase/supabase-js", () => ({ createClient: () => mockSb }))

// ---------------------------------------------------------------------------
// Builder factory
// ---------------------------------------------------------------------------

/**
 * Creates a Supabase query-builder stub that supports:
 *   .from(table).select(...).eq(...).eq(...)  → resolves to `resolved`
 *   .from(table).upsert(...)                  → resolves to { error: null }
 *
 * Each call to .eq() returns the same builder so chains of any length work.
 * The builder is thenable so `await builder` yields `resolved`.
 */
function makeBuilder(resolved: { data: unknown; error: unknown } = { data: [], error: null }) {
    const upsertMock = vi.fn().mockResolvedValue({ error: null })

    const builder: Record<string, unknown> = {
        upsert: upsertMock,
    }

    const eqFn = vi.fn().mockReturnValue(builder)
    builder.select = vi.fn().mockReturnValue(builder)
    builder.eq = eqFn
    builder.limit = vi.fn().mockReturnValue(builder)

    // Make builder thenable (so `const { data, error } = await query` works)
    builder.then = (
        onfulfilled: (v: unknown) => unknown,
        onrejected?: (e: unknown) => unknown,
    ) => Promise.resolve(resolved).then(onfulfilled, onrejected)

    return builder
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface SrsRowSeed {
    lang_id: string
    vocab_id: string
    ease_factor?: number
    review_count?: number
    streak?: number
    next_review_at?: number
    interval_days?: number
}

function seedRow(seed: SrsRowSeed): Record<string, unknown> {
    return {
        lang_id:        seed.lang_id,
        vocab_id:       seed.vocab_id,
        ease_factor:    seed.ease_factor    ?? INITIAL_STATE.easeFactor,
        review_count:   seed.review_count   ?? 0,
        streak:         seed.streak         ?? 0,
        next_review_at: seed.next_review_at ?? 0,
        interval_days:  seed.interval_days  ?? INITIAL_STATE.intervalDays,
    }
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

beforeEach(() => {
    vi.clearAllMocks()
})

// ── hydrate (no langId filter) ────────────────────────────────────────────────

describe("hydrate() — all cards", () => {
    it("fetches all cards when langId is omitted", async () => {
        const rows = [
            seedRow({ lang_id: "es", vocab_id: "v-1", ease_factor: 2.5, review_count: 3, streak: 2 }),
            seedRow({ lang_id: "fr", vocab_id: "v-2", ease_factor: 2.2, review_count: 1, streak: 0 }),
        ]
        mockFrom.mockReturnValue(makeBuilder({ data: rows, error: null }))

        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        await storage.hydrate()

        const esStates = storage.getStates("es")
        expect(esStates["v-1"]).toBeDefined()
        expect(esStates["v-1"].easeFactor).toBe(2.5)
        expect(esStates["v-1"].reviewCount).toBe(3)
        expect(esStates["v-1"].streak).toBe(2)

        const frStates = storage.getStates("fr")
        expect(frStates["v-2"]).toBeDefined()
        expect(frStates["v-2"].easeFactor).toBe(2.2)
    })

    it("returns early without querying when userId is null", async () => {
        const storage = new SupabaseSRSStorage(mockSb)
        // No setUserId call
        await storage.hydrate()
        expect(mockFrom).not.toHaveBeenCalled()
    })

    it("handles empty result set gracefully", async () => {
        mockFrom.mockReturnValue(makeBuilder({ data: [], error: null }))

        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")
        await storage.hydrate()

        expect(storage.getStates("es")).toEqual({})
    })
})

// ── hydrate("es") — lang filter ───────────────────────────────────────────────

describe("hydrate(langId) — filtered fetch", () => {
    it("applies a second .eq('lang_id', langId) filter when langId is provided", async () => {
        const rows = [
            seedRow({ lang_id: "es", vocab_id: "v-es", ease_factor: 2.6 }),
        ]

        const builder = makeBuilder({ data: rows, error: null })
        mockFrom.mockReturnValue(builder)

        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        await storage.hydrate("es")

        // .eq should have been called twice: once for user_id, once for lang_id
        const eqMock = (builder as Record<string, ReturnType<typeof vi.fn>>).eq
        expect(eqMock).toHaveBeenCalledTimes(2)
        expect(eqMock).toHaveBeenCalledWith("user_id", "user-1")
        expect(eqMock).toHaveBeenCalledWith("lang_id", "es")
    })

    it("only calls .eq once for user_id when no langId is provided", async () => {
        const builder = makeBuilder({ data: [], error: null })
        mockFrom.mockReturnValue(builder)

        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        await storage.hydrate()

        const eqMock = (builder as Record<string, ReturnType<typeof vi.fn>>).eq
        expect(eqMock).toHaveBeenCalledTimes(1)
        expect(eqMock).toHaveBeenCalledWith("user_id", "user-1")
    })
})

// ── updateCard ────────────────────────────────────────────────────────────────

describe("updateCard", () => {
    it("calculates SM-2 state, stores in cache, and fires upsert", async () => {
        const upsertMock = vi.fn().mockReturnValue(Promise.resolve({ error: null }))
        const builder = makeBuilder({ data: [], error: null })
        ;(builder as Record<string, unknown>).upsert = upsertMock
        mockFrom.mockReturnValue(builder)

        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        await storage.updateCard("es", "vocab-1", 4)

        const state = storage.getStates("es")["vocab-1"]
        expect(state).toBeDefined()
        expect(state.reviewCount).toBe(1)
        expect(state.streak).toBe(1)
        expect(state.nextReviewAt).toBeGreaterThan(Date.now())

        expect(upsertMock).toHaveBeenCalledWith(
            expect.objectContaining({
                user_id:  "user-1",
                lang_id:  "es",
                vocab_id: "vocab-1",
            }),
            expect.any(Object),
        )
    })

    it("resets streak to 0 on failing review (quality 1)", async () => {
        mockFrom.mockReturnValue(makeBuilder({ data: [], error: null }))
        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        // Pass once to establish a streak, then fail
        await storage.updateCard("es", "vocab-1", 4)
        await storage.updateCard("es", "vocab-1", 1)

        const state = storage.getStates("es")["vocab-1"]
        expect(state.streak).toBe(0)
    })

    it("accumulates reviewCount across multiple calls", async () => {
        mockFrom.mockReturnValue(makeBuilder({ data: [], error: null }))
        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        await storage.updateCard("es", "vocab-1", 4)
        await storage.updateCard("es", "vocab-1", 4)
        await storage.updateCard("es", "vocab-1", 4)

        expect(storage.getStates("es")["vocab-1"].reviewCount).toBe(3)
    })

    it("does nothing when userId is null", async () => {
        const storage = new SupabaseSRSStorage(mockSb)
        await storage.updateCard("es", "vocab-1", 4)
        expect(mockFrom).not.toHaveBeenCalled()
    })

    it("uses INITIAL_STATE as base when card has no prior history", async () => {
        const upsertMock = vi.fn().mockReturnValue(Promise.resolve({ error: null }))
        const builder = makeBuilder({ data: [], error: null })
        ;(builder as Record<string, unknown>).upsert = upsertMock
        mockFrom.mockReturnValue(builder)

        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        // No prior state for "brand-new-vocab"
        await storage.updateCard("es", "brand-new-vocab", 4)

        const upsertPayload = upsertMock.mock.calls[0][0]
        expect(typeof upsertPayload.ease_factor).toBe("number")
        expect(typeof upsertPayload.interval_days).toBe("number")
        expect(upsertPayload.review_count).toBe(1)
    })
})

// ── saveAll ───────────────────────────────────────────────────────────────────

describe("saveAll", () => {
    it("writes all provided cards to Supabase as a single upsert", async () => {
        const upsertMock = vi.fn().mockResolvedValue({ error: null })
        const builder = makeBuilder({ data: null, error: null })
        ;(builder as Record<string, unknown>).upsert = upsertMock
        mockFrom.mockReturnValue(builder)

        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        const srsData = {
            es: {
                "v-1": { ...INITIAL_STATE, reviewCount: 2, streak: 1 },
                "v-2": { ...INITIAL_STATE, reviewCount: 5, streak: 3 },
            },
            fr: {
                "v-3": { ...INITIAL_STATE, reviewCount: 1, streak: 0 },
            },
        }

        await storage.saveAll(srsData)

        expect(mockFrom).toHaveBeenCalledWith("srs_cards")
        const upsertArg = upsertMock.mock.calls[0][0] as unknown[]
        expect(upsertArg).toHaveLength(3)
        expect(upsertArg).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ user_id: "user-1", lang_id: "es", vocab_id: "v-1" }),
                expect.objectContaining({ user_id: "user-1", lang_id: "es", vocab_id: "v-2" }),
                expect.objectContaining({ user_id: "user-1", lang_id: "fr", vocab_id: "v-3" }),
            ]),
        )
    })

    it("skips upsert when data is empty", async () => {
        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        await storage.saveAll({})

        expect(mockFrom).not.toHaveBeenCalled()
    })

    it("does nothing when userId is null", async () => {
        const storage = new SupabaseSRSStorage(mockSb)
        // No setUserId
        await storage.saveAll({ es: { "v-1": { ...INITIAL_STATE } } })
        expect(mockFrom).not.toHaveBeenCalled()
    })

    it("updates in-memory cache so getStates reflects the imported data", async () => {
        const upsertMock = vi.fn().mockResolvedValue({ error: null })
        const builder = makeBuilder({ data: null, error: null })
        ;(builder as Record<string, unknown>).upsert = upsertMock
        mockFrom.mockReturnValue(builder)

        const storage = new SupabaseSRSStorage(mockSb)
        storage.setUserId("user-1")

        await storage.saveAll({
            es: { "v-saved": { ...INITIAL_STATE, reviewCount: 7, streak: 4 } },
        })

        const state = storage.getStates("es")["v-saved"]
        expect(state.reviewCount).toBe(7)
        expect(state.streak).toBe(4)
    })
})

// ── getStates ────────────────────────────────────────────────────────────────

describe("getStates", () => {
    it("returns empty object for an unknown language (no hydration)", () => {
        const storage = new SupabaseSRSStorage(mockSb)
        expect(storage.getStates("xx")).toEqual({})
    })
})
