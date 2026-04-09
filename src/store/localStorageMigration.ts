// store/localStorageMigration.ts — One-time migration of Stage 1 localStorage
// progress data into Supabase for beta testers upgrading to Stage 2.
//
// Problem: beta testers have progress in ls:progress, ls:srs, ls:stats.
// When they log in via Supabase for the first time, SupabaseProgressStorage
// fetches empty data — their progress is stranded in localStorage.
//
// This module:
//   1. Detects whether localStorage has orphaned progress worth migrating.
//   2. Reads it directly from localStorage (bypasses the Supabase registry).
//   3. Calls importProgressSnapshot() which merges it into Supabase.
//   4. Clears the localStorage keys once migration succeeds.

import { importProgressSnapshot } from "./actions"

const LS_PROGRESS_KEY = "ls:progress"
const LS_SRS_KEY      = "ls:srs"
const LS_STATS_KEY    = "ls:stats"
const MIGRATION_DONE_KEY = "ls:migrated-to-supabase"

/**
 * Returns true when localStorage has meaningful Stage 1 progress that hasn't
 * already been migrated. Only relevant in Supabase mode.
 */
export function hasLocalProgressToMigrate(): boolean {
    if (!import.meta.env.VITE_SUPABASE_URL) return false
    if (localStorage.getItem(MIGRATION_DONE_KEY)) return false

    try {
        const raw = localStorage.getItem(LS_PROGRESS_KEY)
        if (!raw) return false
        const data = JSON.parse(raw)
        // Consider it worth migrating if the user has started at least one language
        return Object.keys(data.levels ?? {}).length > 0
    } catch {
        return false
    }
}

/**
 * Reads progress/SRS/stats directly from localStorage and writes them into
 * the Supabase-backed registry via importProgressSnapshot (smart merge).
 *
 * On success: marks migration done and removes the localStorage keys.
 * On failure: leaves localStorage untouched (safe to retry).
 *
 * Returns null on success, or an error string on failure.
 */
export async function migrateLocalStorageToSupabase(): Promise<string | null> {
    try {
        const progress = parseKey(LS_PROGRESS_KEY)
        const srs      = parseKey(LS_SRS_KEY)
        const stats    = parseKey(LS_STATS_KEY)

        if (!progress) return "No local progress found to migrate."

        const error = await importProgressSnapshot({ progress, srs: srs ?? {}, stats: stats ?? {} })
        if (error) return error

        // Mark done and clear Stage 1 keys
        localStorage.setItem(MIGRATION_DONE_KEY, "1")
        localStorage.removeItem(LS_PROGRESS_KEY)
        localStorage.removeItem(LS_SRS_KEY)
        localStorage.removeItem(LS_STATS_KEY)

        return null
    } catch (err) {
        return err instanceof Error ? err.message : "Migration failed."
    }
}

function parseKey(key: string): unknown {
    try {
        const raw = localStorage.getItem(key)
        return raw ? JSON.parse(raw) : null
    } catch {
        return null
    }
}
