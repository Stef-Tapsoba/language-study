// components/HydrationErrorBanner.tsx — shown when ProgressContext.hydrateError is set.
//
// Stage 1: hydrateError is always null (localStorage never fails to hydrate).
// Stage 2: Supabase hydration can fail (network, RLS, token expiry). This banner
//          gives users a visible retry path rather than silently showing stale data.

import { useProgress } from "../context/ProgressContext"
import { Button } from "./ui/button"

export function HydrationErrorBanner() {
    const { hydrateError, mutationError, clearMutationError, refreshProgress } = useProgress()

    if (mutationError) {
        return (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl px-4 py-3 flex items-center gap-3 mb-4">
                <span className="text-amber-500 shrink-0" aria-hidden="true">⚠️</span>
                <p className="text-sm text-amber-800 dark:text-amber-300 flex-1">
                    Couldn't save your latest progress. Check your connection and try again.
                </p>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearMutationError}
                    className="text-amber-700 dark:text-amber-400 shrink-0"
                >
                    Dismiss
                </Button>
            </div>
        )
    }

    if (hydrateError) {
        return (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl px-4 py-3 flex items-center gap-3 mb-4">
                <span className="text-red-500 shrink-0" aria-hidden="true">⚠️</span>
                <p className="text-sm text-red-700 dark:text-red-300 flex-1">
                    Couldn't load your progress. Showing last known data.
                </p>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={refreshProgress}
                    className="text-red-700 dark:text-red-400 shrink-0"
                >
                    Retry
                </Button>
            </div>
        )
    }

    return null
}
