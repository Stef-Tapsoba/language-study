// auth/debugSession.ts — Stub session used when VITE_DEBUG=true
//
// Provides a non-expiring mock session so all useAuth() consumers get a
// real session shape without going through the login flow.
// Progress is stored in localStorage under userId "debug-user" — the same
// keys as a normal session since the mock storage is not user-scoped.

import type { Session } from "@myorg/auth-core"

export const DEBUG = import.meta.env.VITE_DEBUG === "true"

export const DEBUG_SESSION: Session = {
    accessToken: "debug-access-token",
    userId: "debug-user",
    expiresAt: Date.now() + 365 * 24 * 60 * 60 * 1000,   // 1 year
}
