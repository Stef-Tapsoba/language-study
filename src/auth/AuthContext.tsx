// auth/AuthContext.tsx — Auth session context and useAuth hook.
//
// Supports two modes based on whether VITE_SUPABASE_URL is set:
//
//   Stage 1 (no Supabase URL):
//     Uses @myorg/auth-core AuthService + mockAuthApi (localStorage users).
//     Unchanged from the original implementation.
//
//   Stage 2 (VITE_SUPABASE_URL set):
//     Drives the session directly from supabase.auth.onAuthStateChange.
//     Supabase owns session storage and auto-refresh — zero timing gaps.
//     @myorg/auth-core AuthService is NOT used in this mode.

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { AuthService, Session } from "@myorg/auth-core"
import { authRegistry } from "./authRegistry"
import { DEBUG, DEBUG_SESSION } from "./debugSession"

const USE_SUPABASE = !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY)

interface AuthContextValue {
    authService: AuthService
    session: Session | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const authService = authRegistry.service
    const [session, setSession] = useState<Session | null>(DEBUG ? DEBUG_SESSION : null)
    const [loading, setLoading] = useState(!DEBUG)

    useEffect(() => {
        if (DEBUG) return

        if (USE_SUPABASE) {
            // ── Stage 2: Supabase-native session management ──────────────────
            // onAuthStateChange fires for:
            //   INITIAL_SESSION — on every page load (replaces getSession())
            //   SIGNED_IN       — after login
            //   TOKEN_REFRESHED — Supabase auto-refresh (no stale token ever)
            //   SIGNED_OUT      — after logout
            // This guarantees the React session state is always in sync with
            // Supabase's token, with zero gaps.
            import("../lib/supabaseClient").then(({ supabase }) => {
                const { data: { subscription } } = supabase.auth.onAuthStateChange(
                    (_event, sbSession) => {
                        if (sbSession) {
                            setSession({
                                accessToken:  sbSession.access_token,
                                refreshToken: sbSession.refresh_token,
                                userId:       sbSession.user.id,
                                expiresAt:    (sbSession.expires_at ?? 0) * 1000,
                            })
                        } else {
                            setSession(null)
                        }
                        setLoading(false)
                    }
                )
                return () => subscription.unsubscribe()
            })
        } else {
            // ── Stage 1: @myorg/auth-core + mockAuthApi ───────────────────────
            authService.getSession().then(s => {
                setSession(s)
                setLoading(false)
            })

            const unsubExpired = authService.events.on("expired", () => setSession(null))
            const unsubLogout  = authService.events.on("logout",  () => setSession(null))
            const unsubLogin   = authService.events.on("login",   () => {
                authService.getSession().then(setSession)
            })
            return () => { unsubExpired(); unsubLogout(); unsubLogin() }
        }
    }, [])

    async function login(email: string, password: string) {
        if (USE_SUPABASE) {
            const { supabase } = await import("../lib/supabaseClient")
            const { error } = await supabase.auth.signInWithPassword({ email, password })
            if (error) throw new Error(error.message)
            // Session state is set by onAuthStateChange — no manual setSession needed
        } else {
            const s = await authService.login(email, password)
            setSession(s)
        }
    }

    async function logout() {
        if (USE_SUPABASE) {
            const { supabase } = await import("../lib/supabaseClient")
            await supabase.auth.signOut()
            // Session state is cleared by onAuthStateChange
        } else {
            await authService.logout()
            setSession(null)
        }
    }

    const value = useMemo(
        () => ({ authService, session, loading, login, logout }),
        // login/logout are stable function references defined in component scope;
        // re-creating the memo object only when session or loading actually changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [session, loading]
    )

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextValue {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>")
    return ctx
}
