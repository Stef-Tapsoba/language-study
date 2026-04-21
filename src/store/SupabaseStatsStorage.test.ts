// store/SupabaseStatsStorage.test.ts

import { describe, it, expect, beforeEach, vi } from "vitest"
import { SupabaseStatsStorage } from "./SupabaseStatsStorage"

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
 * Builds a chainable Supabase query stub.
 * Supports: .select(...).eq(...) → resolves to `resolved`
 *           .upsert(...)          → resolves to `upsertResolved`
 *           .single()             → resolves to `singleResolved`
 */
function makeBuilder(
    resolved: { data: unknown; error: unknown } = { data: [], error: null },
    singleResolved: { data: unknown; error: unknown } = { data: null, error: null },
) {
    const upsertMock = vi.fn().mockResolvedValue({ error: null })
    const singleMock = vi.fn().mockResolvedValue(singleResolved)

    const builder: Record<string, unknown> = {
        upsert: upsertMock,
        single: singleMock,
    }

    const eqFn = vi.fn().mockReturnValue(builder)
    builder.select = vi.fn().mockReturnValue(builder)
    builder.eq = eqFn

    // Thenable so `const { data, error } = await query` works
    builder.then = (
        onfulfilled: (v: unknown) => unknown,
        onrejected?: (e: unknown) => unknown,
    ) => Promise.resolve(resolved).then(onfulfilled, onrejected)

    return builder
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

beforeEach(() => {
    vi.clearAllMocks()
})

// ── load ──────────────────────────────────────────────────────────────────────

describe("load", () => {
    it("returns empty object when userId is null", async () => {
        const storage = new SupabaseStatsStorage(mockSb)
        const result = await storage.load()
        expect(result).toEqual({})
        expect(mockFrom).not.toHaveBeenCalled()
    })

    it("returns formatted StatsData from DB rows", async () => {
        const rows = [
            {
                lang_id:    "es",
                study_date: "2026-04-01",
                reviewed:   10,
                correct:    8,
                acts:       3,
                q_total:    5,
                q_correct:  4,
            },
            {
                lang_id:    "es",
                study_date: "2026-04-02",
                reviewed:   6,
                correct:    5,
                acts:       2,
                q_total:    3,
                q_correct:  2,
            },
            {
                lang_id:    "fr",
                study_date: "2026-04-01",
                reviewed:   4,
                correct:    3,
                acts:       1,
                q_total:    2,
                q_correct:  1,
            },
        ]
        mockFrom.mockReturnValue(makeBuilder({ data: rows, error: null }))

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        const result = await storage.load()

        expect(result["es"]["2026-04-01"]).toEqual({
            reviewed: 10,
            correct:  8,
            acts:     3,
            qTotal:   5,
            qCorrect: 4,
        })
        expect(result["es"]["2026-04-02"]).toEqual({
            reviewed: 6,
            correct:  5,
            acts:     2,
            qTotal:   3,
            qCorrect: 2,
        })
        expect(result["fr"]["2026-04-01"]).toEqual({
            reviewed: 4,
            correct:  3,
            acts:     1,
            qTotal:   2,
            qCorrect: 1,
        })
    })

    it("returns empty object when query returns no rows", async () => {
        mockFrom.mockReturnValue(makeBuilder({ data: [], error: null }))

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        const result = await storage.load()
        expect(result).toEqual({})
    })

    it("returns empty object on query error", async () => {
        mockFrom.mockReturnValue(makeBuilder({ data: null, error: { message: "DB error" } }))

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        const result = await storage.load()
        expect(result).toEqual({})
    })

    it("uses null-coalesced data — handles null data without throwing", async () => {
        mockFrom.mockReturnValue(makeBuilder({ data: null, error: null }))

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        const result = await storage.load()
        expect(result).toEqual({})
    })
})

// ── upsertDelta via recordReview / recordActivity ─────────────────────────────

describe("upsertDelta — RPC call", () => {
    it("calls increment_daily_stat RPC with correct parameters for recordReview (correct)", async () => {
        mockRpc.mockResolvedValue({ error: null })

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        await storage.recordReview("es", "2026-04-15", true)
        // upsertDelta is fire-and-forget; wait for micro-tasks to flush
        await Promise.resolve()

        expect(mockRpc).toHaveBeenCalledWith("increment_daily_stat", {
            p_user_id:   "user-1",
            p_lang_id:   "es",
            p_date:      "2026-04-15",
            p_reviewed:  1,
            p_correct:   1,
            p_acts:      0,
            p_q_total:   0,
            p_q_correct: 0,
        })
    })

    it("calls increment_daily_stat RPC with correct=0 for incorrect review", async () => {
        mockRpc.mockResolvedValue({ error: null })

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        await storage.recordReview("fr", "2026-04-15", false)
        await Promise.resolve()

        expect(mockRpc).toHaveBeenCalledWith("increment_daily_stat", expect.objectContaining({
            p_reviewed:  1,
            p_correct:   0,
        }))
    })

    it("calls increment_daily_stat for recordActivity with acts=1", async () => {
        mockRpc.mockResolvedValue({ error: null })

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        await storage.recordActivity("it", "2026-04-10")
        await Promise.resolve()

        expect(mockRpc).toHaveBeenCalledWith("increment_daily_stat", expect.objectContaining({
            p_lang_id:  "it",
            p_reviewed: 0,
            p_acts:     1,
            p_q_total:  0,
        }))
    })

    it("calls increment_daily_stat for recordQuizAnswer", async () => {
        mockRpc.mockResolvedValue({ error: null })

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        await storage.recordQuizAnswer("es", "2026-04-15", true)
        await Promise.resolve()

        expect(mockRpc).toHaveBeenCalledWith("increment_daily_stat", expect.objectContaining({
            p_q_total:   1,
            p_q_correct: 1,
            p_reviewed:  0,
        }))
    })

    it("does not call RPC when userId is null", async () => {
        const storage = new SupabaseStatsStorage(mockSb)
        // No setUserId
        await storage.recordReview("es", "2026-04-15", true)
        await Promise.resolve()
        expect(mockRpc).not.toHaveBeenCalled()
    })
})

// ── fallback upsert on PGRST202 ───────────────────────────────────────────────

describe("upsertDelta — fallback upsert on RPC error", () => {
    it("falls back to direct upsert when RPC returns an error", async () => {
        // RPC fails → triggers fallbackUpsert
        mockRpc.mockResolvedValue({ error: { message: "PGRST202: function not found" } })

        const existingRow = {
            reviewed:  5,
            correct:   4,
            acts:      2,
            q_total:   3,
            q_correct: 2,
        }

        const upsertMock = vi.fn().mockResolvedValue({ error: null })
        const singleBuilder = makeBuilder(
            { data: existingRow, error: null },
            { data: existingRow, error: null },
        )
        ;(singleBuilder as Record<string, unknown>).upsert = upsertMock
        mockFrom.mockReturnValue(singleBuilder)

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        await storage.recordReview("es", "2026-04-15", true)
        // Let RPC .then() and fallbackUpsert run
        await new Promise((r) => setTimeout(r, 0))

        expect(mockFrom).toHaveBeenCalledWith("daily_stats")
        // The fallback upsert should add the delta to the existing values
        expect(upsertMock).toHaveBeenCalledWith(
            expect.objectContaining({
                user_id:    "user-1",
                lang_id:    "es",
                study_date: "2026-04-15",
                reviewed:   6,   // 5 + 1
                correct:    5,   // 4 + 1
                acts:       2,   // 2 + 0
            }),
            expect.any(Object),
        )
    })

    it("fallback upsert uses zeros when no existing row is found", async () => {
        mockRpc.mockResolvedValue({ error: { message: "PGRST202: function not found" } })

        const upsertMock = vi.fn().mockResolvedValue({ error: null })
        const singleBuilder = makeBuilder(
            { data: null, error: null },
            { data: null, error: null },
        )
        ;(singleBuilder as Record<string, unknown>).upsert = upsertMock
        mockFrom.mockReturnValue(singleBuilder)

        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")

        await storage.recordActivity("es", "2026-04-20")
        await new Promise((r) => setTimeout(r, 0))

        expect(upsertMock).toHaveBeenCalledWith(
            expect.objectContaining({
                reviewed:  0,
                correct:   0,
                acts:      1,
                q_total:   0,
                q_correct: 0,
            }),
            expect.any(Object),
        )
    })
})

// ── flush / resetLanguage (no-ops) ────────────────────────────────────────────

describe("flush and resetLanguage", () => {
    it("flush() resolves without error", async () => {
        const storage = new SupabaseStatsStorage(mockSb)
        await expect(storage.flush()).resolves.toBeUndefined()
    })

    it("resetLanguage() resolves without error and makes no DB calls", async () => {
        const storage = new SupabaseStatsStorage(mockSb)
        storage.setUserId("user-1")
        await expect(storage.resetLanguage("es")).resolves.toBeUndefined()
        expect(mockFrom).not.toHaveBeenCalled()
    })
})
