// auth/supabaseAuthApi.ts — AuthApi implementation backed by Supabase Auth.
//
// Replaces mockAuthApi for Stage 2. The AuthApi interface only requires
// login() and refresh() — Supabase Auth handles token storage internally.
//
// Registration is handled by signUpWithSupabase() below (not part of AuthApi
// since RegisterPage imports it directly, same as the mock registerUser).

import { supabase } from "../lib/supabaseClient"
import type { AuthApi, Session } from "@myorg/auth-core"

function toSession(accessToken: string, refreshToken: string | undefined, userId: string, expiresAt: number): Session {
    return { accessToken, refreshToken, userId, expiresAt: expiresAt * 1000 }
}

export const supabaseAuthApi: AuthApi = {
    async login(email: string, password: string): Promise<Session> {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error || !data.session) throw new Error(error?.message ?? "Login failed")
        const s = data.session
        return toSession(s.access_token, s.refresh_token, s.user.id, s.expires_at ?? 0)
    },

    async refresh(refreshToken: string): Promise<Session> {
        const { data, error } = await supabase.auth.refreshSession({ refresh_token: refreshToken })
        if (error || !data.session) throw new Error(error?.message ?? "Session refresh failed")
        const s = data.session
        return toSession(s.access_token, s.refresh_token, s.user.id, s.expires_at ?? 0)
    },
}

/**
 * Register a new account with Supabase Auth.
 * Equivalent to mockAuthApi's registerUser() — called from RegisterPage.
 * Throws on error (duplicate email, weak password, etc.).
 */
export async function signUpWithSupabase(
    email: string,
    displayName: string,
    password: string
): Promise<void> {
    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { display_name: displayName },
        },
    })
    if (error) throw new Error(error.message)
}
