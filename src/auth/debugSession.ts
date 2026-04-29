// auth/debugSession.ts — Stub session used when VITE_DEBUG=true
//
// Provides a non-expiring mock session so all useAuth() consumers get a
// real session shape without going through the login flow.
// Progress is stored in localStorage under userId "debug-user" — the same
// keys as a normal session since the mock storage is not user-scoped.

import { useSyncExternalStore } from "react"
import type { Session } from "@myorg/auth-core"

/** Compile-time flag — true when VITE_DEBUG=true. Controls auth bypass. */
export const DEBUG = import.meta.env.VITE_DEBUG === "true"

export const DEBUG_SESSION: Session = {
    accessToken: "debug-access-token",
    userId: "debug-user",
    expiresAt: Date.now() + 365 * 24 * 60 * 60 * 1000,   // 1 year
}

// ---------------------------------------------------------------------------
// Runtime-toggleable "unlock all" — only available when DEBUG is true.
// Allows switching between full-debug (everything unlocked) and real-user
// view without restarting the dev server.
// ---------------------------------------------------------------------------

let unlockAll = DEBUG
const listeners = new Set<() => void>()

function subscribe(fn: () => void) { listeners.add(fn); return () => { listeners.delete(fn) } }
function getSnapshot() { return unlockAll }

export function toggleDebugUnlock(): void {
    if (!DEBUG) return
    unlockAll = !unlockAll
    listeners.forEach(fn => fn())
}

/** Reactive hook — returns true when debug-unlock-all is active. */
export function useDebugUnlock(): boolean {
    return useSyncExternalStore(subscribe, getSnapshot)
}
