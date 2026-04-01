// hooks/useAppBootstrap.ts — Sequences progress + stats hydration on login.
//
// Call once near the top of the authenticated app shell (e.g. HomePage).
// Returns `isReady: true` after the session has been initialised, so pages
// can gate their render on hydration being complete.
//
// Stage 2: this hook is the single place to add Supabase hydration await logic.
// No page code needs to change — they all read from ProgressContext / useStatsStore
// after bootstrap completes.

import { useEffect, useState } from "react"
import { useAuth } from "../auth/AuthContext"
import { useProgress } from "../context/ProgressContext"

export function useAppBootstrap(): { isReady: boolean } {
    const { session } = useAuth()
    const { initUserSession } = useProgress()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        if (session) {
            initUserSession(session.userId)
        }
        setIsReady(true)
    // initUserSession is stable (useCallback with no deps that change); session
    // is the meaningful dependency — re-run only when the logged-in user changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session?.userId])

    return { isReady }
}
