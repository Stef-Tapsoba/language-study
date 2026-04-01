// hooks/useAppBootstrap.ts — Sequences progress + stats hydration on login.
//
// Call once near the top of the authenticated app shell (e.g. HomePage).
// Returns `isReady: true` after the session has been initialised AND hydration
// is complete, so pages can gate their render on a fully-loaded state.
//
// isReady is derived from two flags:
//   initialized  — the useEffect has run (session was processed)
//   !isHydrating — the async hydration chain in ProgressContext has settled
//
// This prevents a one-render window where isReady would be true before
// initUserSession had a chance to fire (the effect runs after the first render).
//
// Stage 2: this hook is the single place to add Supabase hydration await logic.
// No page code needs to change — they all read from ProgressContext / useStatsStore
// after bootstrap completes.

import { useEffect, useState } from "react"
import { useAuth } from "../auth/AuthContext"
import { useProgress } from "../context/ProgressContext"

export function useAppBootstrap(): { isReady: boolean } {
    const { session } = useAuth()
    const { initUserSession, isHydrating } = useProgress()
    const [initialized, setInitialized] = useState(false)

    useEffect(() => {
        if (session) {
            initUserSession(session.userId)
        }
        setInitialized(true)
    // initUserSession identity is stable (useCallback); session.userId is the
    // meaningful dependency — re-run only when the logged-in user changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session?.userId])

    // Ready once the effect has run AND the hydration chain has settled.
    // Stage 1 (localStorage): isHydrating is always false after the sync write,
    // so this resolves on the same render that initialized becomes true.
    return { isReady: initialized && !isHydrating }
}
