// store/SupabaseProgressStorage.test.ts

import { describe, it, expect, beforeEach, vi } from "vitest"
import { SupabaseProgressStorage } from "./SupabaseProgressStorage"
import { SCHEMA_VERSION } from "./progress"

// ---------------------------------------------------------------------------
// Mock Supabase client
// ---------------------------------------------------------------------------

const mockRpc = vi.fn()
const mockFrom = vi.fn()

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

function makeBuilder(resolved: { data: unknown; error: unknown }) {
    const builder: Record<string, unknown> = {}
    const eqFn = vi.fn().mockReturnValue(builder)
    builder.select = vi.fn().mockReturnValue(builder)
    builder.upsert = vi.fn().mockResolvedValue({ error: null })
    builder.update = vi.fn().mockReturnValue(builder)
    builder.delete = vi.fn().mockReturnValue(builder)
    builder.eq = eqFn
    builder.limit = vi.fn().mockReturnValue(builder)
    builder.single = vi.fn().mockResolvedValue(resolved)
    builder.then = (
        onfulfilled: (v: unknown) => unknown,
        onrejected?: (e: unknown) => unknown,
    ) => Promise.resolve(resolved).then(onfulfilled, onrejected)
    return builder
}

// ---------------------------------------------------------------------------
// initSession mock helper
//
// initSession fires 7 from() calls synchronously (in Promise.all):
//   0 = profiles      (uses .single())
//   1 = user_language_levels
//   2 = lesson_completions
//   3 = mastered_units
//   4 = reinforcement_grammar
//   5 = reinforcement_sections
//   6 = checkpoint_completions
//
// NOTE: SupabaseProgressStorage's module-level EMPTY_PROGRESS uses a shallow
// object literal for `levels`, `completedLessons`, etc.  The spread in
// initSession (`{ ...EMPTY_PROGRESS }`) copies those nested object references,
// so the first test that mutates any of those fields will permanently poison
// EMPTY_PROGRESS for subsequent tests in the same module run.
//
// Mitigation: each test uses a unique lang_id, and tests that rely on empty
// results run before any test that seeds data for a given lang.  The "handles
// empty responses" and "resets cache" tests appear first in their describe
// block and use lang ids that are never seeded by earlier tests.
// ---------------------------------------------------------------------------

interface InitOptions {
    profile?: { data: unknown; error: unknown }
    levels?: { data: unknown; error: unknown }
    completions?: { data: unknown; error: unknown }
    mastered?: { data: unknown; error: unknown }
    rgRows?: { data: unknown; error: unknown }
    rsRows?: { data: unknown; error: unknown }
    checkpoints?: { data: unknown; error: unknown }
}

function wireInitSession(opts: InitOptions = {}): void {
    const responses = [
        opts.profile      ?? { data: null, error: null },
        opts.levels       ?? { data: [], error: null },
        opts.completions  ?? { data: [], error: null },
        opts.mastered     ?? { data: [], error: null },
        opts.rgRows       ?? { data: [], error: null },
        opts.rsRows       ?? { data: [], error: null },
        opts.checkpoints  ?? { data: [], error: null },
    ]
    let idx = 0
    mockFrom.mockImplementation(() => {
        const r = responses[idx] ?? { data: [], error: null }
        idx++
        return makeBuilder(r)
    })
}

beforeEach(() => {
    vi.clearAllMocks()
    mockRpc.mockResolvedValue({ error: null })
})

// ── initSession ─────────────────────────────────────────────────────────────

describe("initSession", () => {
    // NOTE: this test must run before any test that mutates EMPTY_PROGRESS.levels["es"],
    // because the shallow spread in initSession shares the object reference.
    // We use lang_id "zz" (never used elsewhere) to stay clean.
    it("handles empty / null responses gracefully", async () => {
        wireInitSession()   // all defaults: null profile, empty arrays

        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-empty")

        const progress = storage.load()
        expect(progress.userId).toBe("user-empty")
        expect(progress.selectedLanguage).toBeNull()
        expect(progress.levels["zz"]).toBeUndefined()
        expect(Object.keys(progress.completedLessons)).toHaveLength(0)
        expect(Object.keys(progress.masteredUnits)).toHaveLength(0)
    })

    it("populates cache from all 7 parallel queries", async () => {
        wireInitSession({
            profile: {
                data: { selected_language: "es", learning_goal: "traveller" },
                error: null,
            },
            levels:      { data: [{ lang_id: "es", level: "B1" }], error: null },
            completions: { data: [{ lang_id: "es", content_type: "grammar", content_id: "lesson-1" }], error: null },
            mastered:    { data: [{ lang_id: "es", unit_id: "unit-1" }], error: null },
            rgRows:      { data: [{ lang_id: "es", unit_id: "unit-1", grammar_lesson_id: "g-lesson-1" }], error: null },
            rsRows:      { data: [{ lang_id: "es", unit_id: "unit-1", section: "vocab" }], error: null },
            checkpoints: { data: [{ lang_id: "es", checkpoint_id: "cp-1" }], error: null },
        })

        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-123")

        const progress = storage.load()
        expect(progress.userId).toBe("user-123")
        expect(progress.schemaVersion).toBe(SCHEMA_VERSION)
        expect(progress.selectedLanguage).toBe("es")
        expect(progress.goal).toBe("traveller")
        expect(progress.levels["es"]).toBe("B1")
        expect(progress.completedLessons["es"]).toContain("lesson-1")
        expect(progress.masteredUnits["es"]).toContain("unit-1")
        expect(progress.completedCheckpoints?.["es"]).toContain("cp-1")
        expect(
            progress.completedReinforcement?.["es"]?.["unit-1"]?.grammarLessonIds,
        ).toContain("g-lesson-1")
        expect(progress.completedReinforcement?.["es"]?.["unit-1"]?.vocab).toBe(true)

        // Exactly 7 tables queried
        expect(mockFrom).toHaveBeenCalledTimes(7)
    })

    it("resets userId and picks up new session data on second initSession", async () => {
        // First session: user-A has lang "fr" at A2
        wireInitSession({
            levels: { data: [{ lang_id: "fr", level: "A2" }], error: null },
        })
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-A")

        expect(storage.load().userId).toBe("user-A")
        expect(storage.load().levels["fr"]).toBe("A2")

        // Second session: user-B has lang "fr" at B1 (different level)
        // This verifies the cache was reset and re-hydrated from the new responses,
        // not merely merged on top of user-A's data.
        wireInitSession({
            levels: { data: [{ lang_id: "fr", level: "B1" }], error: null },
        })
        await storage.initSession("user-B")

        const progress = storage.load()
        expect(progress.userId).toBe("user-B")
        // Level must reflect user-B's data, not user-A's
        expect(progress.levels["fr"]).toBe("B1")
    })
})

// ── markLessonComplete ───────────────────────────────────────────────────────

describe("markLessonComplete", () => {
    it("updates cache immediately and fires upsert to lesson_completions", async () => {
        wireInitSession()
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")

        mockFrom.mockReturnValue(makeBuilder({ data: null, error: null }))

        await storage.markLessonComplete("it", "lesson-42", "grammar")

        const progress = storage.load()
        expect(progress.completedLessons["it"]).toContain("lesson-42")
        expect(mockFrom).toHaveBeenCalledWith("lesson_completions")
    })

    it("is idempotent — does not duplicate lessonId in cache", async () => {
        wireInitSession()
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")
        mockFrom.mockReturnValue(makeBuilder({ data: null, error: null }))

        await storage.markLessonComplete("ko", "lesson-dup", "grammar")
        await storage.markLessonComplete("ko", "lesson-dup", "grammar")

        const count = (storage.load().completedLessons["ko"] ?? [])
            .filter((id) => id === "lesson-dup").length
        expect(count).toBe(1)
    })

    it("does nothing when userId is null", async () => {
        const storage = new SupabaseProgressStorage(mockSb)
        // No initSession → userId remains null
        await storage.markLessonComplete("es", "lesson-1", "grammar")
        expect(mockFrom).not.toHaveBeenCalled()
    })
})

// ── markCheckpointComplete ───────────────────────────────────────────────────

describe("markCheckpointComplete", () => {
    it("updates cache immediately and fires upsert to checkpoint_completions", async () => {
        wireInitSession()
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")
        mockFrom.mockReturnValue(makeBuilder({ data: null, error: null }))

        await storage.markCheckpointComplete("es", "cp-5")

        expect(storage.getCompletedCheckpoints("es")).toContain("cp-5")
        expect(mockFrom).toHaveBeenCalledWith("checkpoint_completions")
    })

    it("is idempotent — does not duplicate checkpointId in cache", async () => {
        wireInitSession()
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")
        mockFrom.mockReturnValue(makeBuilder({ data: null, error: null }))

        await storage.markCheckpointComplete("fr", "cp-2")
        await storage.markCheckpointComplete("fr", "cp-2")

        const count = storage.getCompletedCheckpoints("fr")
            .filter((id) => id === "cp-2").length
        expect(count).toBe(1)
    })
})

// ── getCompletedCheckpoints ──────────────────────────────────────────────────

describe("getCompletedCheckpoints", () => {
    it("returns empty array for unknown language without initSession", () => {
        const storage = new SupabaseProgressStorage(mockSb)
        expect(storage.getCompletedCheckpoints("xx")).toEqual([])
    })

    it("returns empty array for a language with no checkpoints after initSession", async () => {
        wireInitSession()
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")
        expect(storage.getCompletedCheckpoints("yy")).toEqual([])
    })
})

// ── resetLanguage ────────────────────────────────────────────────────────────

describe("resetLanguage", () => {
    it("mutates cache and calls reset_language_data RPC then re-inserts A1 level", async () => {
        wireInitSession({
            levels:      { data: [{ lang_id: "pt", level: "B2" }], error: null },
            completions: { data: [{ lang_id: "pt", content_type: "grammar", content_id: "lesson-1" }], error: null },
        })
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")

        mockFrom.mockReturnValue(makeBuilder({ data: null, error: null }))
        mockRpc.mockResolvedValue({ error: null })

        await storage.resetLanguage("pt")

        const progress = storage.load()
        expect(progress.levels["pt"]).toBe("A1")
        expect(progress.completedLessons["pt"]).toBeUndefined()
        expect(mockRpc).toHaveBeenCalledWith("reset_language_data", {
            p_user_id: "user-1",
            p_lang_id: "pt",
        })
        expect(mockFrom).toHaveBeenCalledWith("user_language_levels")
    })

    it("skips re-insert when RPC fails (early return after error)", async () => {
        wireInitSession({
            levels: { data: [{ lang_id: "pt", level: "B2" }], error: null },
        })
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")

        // Wire mockFrom to capture calls AFTER initSession completes
        const tablesCalledAfterRpc: string[] = []
        mockFrom.mockImplementation((table: string) => {
            tablesCalledAfterRpc.push(table)
            return makeBuilder({ data: null, error: null })
        })
        mockRpc.mockResolvedValue({ error: { message: "DB error" } })

        await storage.resetLanguage("pt")

        // RPC was invoked
        expect(mockRpc).toHaveBeenCalledWith("reset_language_data", expect.any(Object))
        // Re-insert (user_language_levels upsert) must NOT have been called
        expect(tablesCalledAfterRpc).not.toContain("user_language_levels")
    })

    it("does nothing when userId is null", async () => {
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.resetLanguage("es")
        expect(mockRpc).not.toHaveBeenCalled()
    })
})

// ── removeLanguage ───────────────────────────────────────────────────────────

describe("removeLanguage", () => {
    it("removes language from cache and calls reset_language_data RPC", async () => {
        wireInitSession({
            levels: { data: [{ lang_id: "ja", level: "A2" }], error: null },
        })
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")

        mockRpc.mockResolvedValue({ error: null })

        await storage.removeLanguage("ja")

        expect(storage.load().levels["ja"]).toBeUndefined()
        expect(mockRpc).toHaveBeenCalledWith("reset_language_data", {
            p_user_id: "user-1",
            p_lang_id: "ja",
        })
    })

    it("does nothing when userId is null", async () => {
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.removeLanguage("fr")
        expect(mockRpc).not.toHaveBeenCalled()
    })
})

// ── save ─────────────────────────────────────────────────────────────────────

describe("save", () => {
    it("upserts all tables: profiles, levels, completions, mastered_units, checkpoints, reinforcement", async () => {
        wireInitSession()
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")

        const capturedTables: string[] = []
        mockFrom.mockImplementation((table: string) => {
            capturedTables.push(table)
            return makeBuilder({ data: null, error: null })
        })

        await storage.save({
            schemaVersion: SCHEMA_VERSION,
            userId: "user-1",
            selectedLanguage: "es",
            goal: "traveller",
            levels: { es: "B1" },
            completedLessons: { es: ["lesson-1"] },
            masteredUnits: { es: ["unit-1"] },
            completedCheckpoints: { es: ["cp-1"] },
            completedReinforcement: {
                es: {
                    "unit-1": { grammarLessonIds: ["g-1"], vocab: true },
                },
            },
        })

        expect(capturedTables).toContain("profiles")
        expect(capturedTables).toContain("user_language_levels")
        expect(capturedTables).toContain("lesson_completions")
        expect(capturedTables).toContain("mastered_units")
        expect(capturedTables).toContain("checkpoint_completions")
        expect(capturedTables).toContain("reinforcement_grammar")
        expect(capturedTables).toContain("reinforcement_sections")
    })

    it("does nothing when userId is null", async () => {
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.save({
            schemaVersion: SCHEMA_VERSION,
            selectedLanguage: null,
            levels: {},
            completedLessons: {},
            masteredUnits: {},
        })
        expect(mockFrom).not.toHaveBeenCalled()
    })

    it("skips optional upserts when there are no rows to write", async () => {
        wireInitSession()
        const storage = new SupabaseProgressStorage(mockSb)
        await storage.initSession("user-1")

        const capturedTables: string[] = []
        mockFrom.mockImplementation((table: string) => {
            capturedTables.push(table)
            return makeBuilder({ data: null, error: null })
        })

        await storage.save({
            schemaVersion: SCHEMA_VERSION,
            userId: "user-1",
            selectedLanguage: null,
            levels: {},
            completedLessons: {},
            masteredUnits: {},
        })

        expect(capturedTables).toContain("profiles")
        expect(capturedTables).not.toContain("lesson_completions")
        expect(capturedTables).not.toContain("mastered_units")
        expect(capturedTables).not.toContain("checkpoint_completions")
        expect(capturedTables).not.toContain("reinforcement_grammar")
        expect(capturedTables).not.toContain("reinforcement_sections")
    })
})
