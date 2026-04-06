/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** When "true", bypasses authentication and injects a debug session.
     *  Active in development via .env.development. Never set in production. */
    readonly VITE_DEBUG: string
    /** Supabase project URL — set in .env.local for Stage 2 */
    readonly VITE_SUPABASE_URL?: string
    /** Supabase publishable (anon) key — set in .env.local for Stage 2 */
    readonly VITE_SUPABASE_ANON_KEY?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
