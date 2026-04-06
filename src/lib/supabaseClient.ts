// lib/supabaseClient.ts — Singleton Supabase client.
//
// Imported by all Supabase adapter implementations. Ensures one shared
// connection is used across the app (Supabase recommends a single instance).
//
// Throws at import time if the env vars are missing so misconfiguration
// fails loudly in development rather than silently at runtime.

import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !key) {
    throw new Error(
        "[supabaseClient] VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in .env.local"
    )
}

export const supabase: SupabaseClient = createClient(url, key, {
    auth: {
        // Persist the session in localStorage so the user stays logged in
        // across page refreshes (standard Supabase behaviour).
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
    },
})
