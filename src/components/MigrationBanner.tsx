// components/MigrationBanner.tsx — One-time migration prompt for Stage 1 → Stage 2.
//
// Shown when the user logs into the Supabase-backed app for the first time
// but has existing progress in localStorage from the old local-only version.
//
// The banner persists until the user migrates or explicitly skips.
// Skipping sets ls:migrated-to-supabase = "1" so it never reappears.

import { useState } from "react"
import { Button } from "./ui/button"
import {
    hasLocalProgressToMigrate,
    migrateLocalStorageToSupabase,
} from "../store/localStorageMigration"
import { useProgress } from "../hooks/useProgress"

export function MigrationBanner() {
    const { refreshProgress } = useProgress()
    const [visible, setVisible] = useState(() => hasLocalProgressToMigrate())
    const [loading, setLoading] = useState(false)
    const [error, setError]   = useState<string | null>(null)

    if (!visible) return null

    async function handleMigrate() {
        setLoading(true)
        setError(null)
        const err = await migrateLocalStorageToSupabase()
        setLoading(false)
        if (err) {
            setError(err)
        } else {
            refreshProgress()
            setVisible(false)
        }
    }

    function handleSkip() {
        // Mark as done so the banner never reappears
        localStorage.setItem("ls:migrated-to-supabase", "1")
        setVisible(false)
    }

    return (
        <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700 rounded-2xl p-4 mb-5 flex gap-3 items-start">
            <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">📦</span>
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-violet-900 dark:text-violet-100 text-sm">
                    We found your previous progress
                </p>
                <p className="text-xs text-violet-700 dark:text-violet-300 mt-0.5 leading-relaxed">
                    Your lessons, vocab, and flashcard history are stored locally on this device.
                    Migrate them to your account so they sync across devices and stay safe in the cloud.
                </p>
                {error && (
                    <p className="text-xs text-red-600 dark:text-red-400 mt-1">⚠ {error} — please try again.</p>
                )}
                <div className="flex items-center gap-3 mt-3">
                    <Button
                        size="sm"
                        onClick={handleMigrate}
                        disabled={loading}
                        className="text-xs rounded-lg"
                    >
                        {loading ? "Migrating…" : "Migrate my progress →"}
                    </Button>
                    <button
                        onClick={handleSkip}
                        disabled={loading}
                        className="text-xs text-violet-500 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Start fresh instead
                    </button>
                </div>
            </div>
        </div>
    )
}
