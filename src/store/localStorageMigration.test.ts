// store/localStorageMigration.test.ts

import { describe, it, expect, beforeEach, vi } from "vitest"
import { hasLocalProgressToMigrate, migrateLocalStorageToSupabase } from "./localStorageMigration"

// ---------------------------------------------------------------------------
// Mock importProgressSnapshot from actions so no real Supabase calls are made
// ---------------------------------------------------------------------------

const mockImportProgressSnapshot = vi.fn()

vi.mock("./actions", () => ({
    importProgressSnapshot: (...args: unknown[]) => mockImportProgressSnapshot(...args),
}))

// ---------------------------------------------------------------------------
// Constants mirroring localStorageMigration.ts
// ---------------------------------------------------------------------------

const LS_PROGRESS_KEY    = "ls:progress"
const LS_SRS_KEY         = "ls:srs"
const LS_STATS_KEY       = "ls:stats"
const MIGRATION_DONE_KEY = "ls:migrated-to-supabase"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function setProgress(levels: Record<string, string>) {
    localStorage.setItem(LS_PROGRESS_KEY, JSON.stringify({ levels }))
}

// ---------------------------------------------------------------------------
// hasLocalProgressToMigrate
// ---------------------------------------------------------------------------

describe("hasLocalProgressToMigrate", () => {
    beforeEach(() => {
        // Ensure VITE_SUPABASE_URL is set so the guard doesn't short-circuit
        vi.stubEnv("VITE_SUPABASE_URL", "https://example.supabase.co")
    })

    it("returns false when ls:migrated-to-supabase is set", () => {
        setProgress({ es: "A1" })
        localStorage.setItem(MIGRATION_DONE_KEY, "1")
        expect(hasLocalProgressToMigrate()).toBe(false)
    })

    it("returns false when ls:progress is absent", () => {
        // No ls:progress key in localStorage
        expect(hasLocalProgressToMigrate()).toBe(false)
    })

    it("returns false when levels is empty", () => {
        setProgress({})
        expect(hasLocalProgressToMigrate()).toBe(false)
    })

    it("returns true when levels has at least one key", () => {
        setProgress({ es: "A1" })
        expect(hasLocalProgressToMigrate()).toBe(true)
    })

    it("returns false when VITE_SUPABASE_URL is not set", () => {
        vi.stubEnv("VITE_SUPABASE_URL", "")
        setProgress({ es: "A1" })
        expect(hasLocalProgressToMigrate()).toBe(false)
    })
})

// ---------------------------------------------------------------------------
// migrateLocalStorageToSupabase
// ---------------------------------------------------------------------------

describe("migrateLocalStorageToSupabase", () => {
    beforeEach(() => {
        vi.stubEnv("VITE_SUPABASE_URL", "https://example.supabase.co")
        mockImportProgressSnapshot.mockReset()
    })

    it("calls importProgressSnapshot with parsed progress/srs/stats data", async () => {
        const progress = { levels: { es: "A1" }, selectedLanguage: "es" }
        const srs      = { es: { "v-1": { reviewCount: 2 } } }
        const stats    = { es: { "2026-04-01": { reviewed: 5, correct: 4, acts: 1, qTotal: 3, qCorrect: 2 } } }
        localStorage.setItem(LS_PROGRESS_KEY, JSON.stringify(progress))
        localStorage.setItem(LS_SRS_KEY,      JSON.stringify(srs))
        localStorage.setItem(LS_STATS_KEY,    JSON.stringify(stats))
        mockImportProgressSnapshot.mockResolvedValue(null)

        const result = await migrateLocalStorageToSupabase()

        expect(result).toBeNull()
        expect(mockImportProgressSnapshot).toHaveBeenCalledWith({
            progress,
            srs,
            stats,
        })
    })

    it("on success sets ls:migrated-to-supabase and removes LS keys", async () => {
        setProgress({ es: "A1" })
        localStorage.setItem(LS_SRS_KEY,   JSON.stringify({}))
        localStorage.setItem(LS_STATS_KEY, JSON.stringify({}))
        mockImportProgressSnapshot.mockResolvedValue(null)

        await migrateLocalStorageToSupabase()

        expect(localStorage.getItem(MIGRATION_DONE_KEY)).toBe("1")
        expect(localStorage.getItem(LS_PROGRESS_KEY)).toBeNull()
        expect(localStorage.getItem(LS_SRS_KEY)).toBeNull()
        expect(localStorage.getItem(LS_STATS_KEY)).toBeNull()
    })

    it("on importProgressSnapshot error leaves LS keys untouched", async () => {
        setProgress({ fr: "B1" })
        localStorage.setItem(LS_SRS_KEY,   JSON.stringify({}))
        localStorage.setItem(LS_STATS_KEY, JSON.stringify({}))
        mockImportProgressSnapshot.mockResolvedValue("Import failed — DB error")

        const result = await migrateLocalStorageToSupabase()

        expect(result).toBe("Import failed — DB error")
        // Keys must still be present — migration did not complete
        expect(localStorage.getItem(LS_PROGRESS_KEY)).not.toBeNull()
        expect(localStorage.getItem(LS_SRS_KEY)).not.toBeNull()
        expect(localStorage.getItem(LS_STATS_KEY)).not.toBeNull()
        expect(localStorage.getItem(MIGRATION_DONE_KEY)).toBeNull()
    })

    it("returns an error string when ls:progress contains invalid JSON", async () => {
        // parseKey swallows the JSON.parse exception and returns null,
        // so the outer try-catch is not triggered; instead the "No local progress
        // found" early-return path is hit — verify that path returns an error string.
        localStorage.setItem(LS_PROGRESS_KEY, "not-valid-json{{{")

        const result = await migrateLocalStorageToSupabase()

        expect(typeof result).toBe("string")
        expect(result).toBeTruthy()
        // importProgressSnapshot must NOT have been called because parsing failed
        expect(mockImportProgressSnapshot).not.toHaveBeenCalled()
    })
})
