// main.tsx — React entry point.
//
// When VITE_SUPABASE_URL is set, configures the Supabase adapters before
// the React tree mounts so registry.progress/srs/stats use Supabase from
// the first render. Falls back to localStorage adapters (Stage 1) otherwise.

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

async function bootstrap() {
    if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY) {
        // Stage 2 — Supabase adapters
        const [
            { supabase },
            { SupabaseProgressStorage },
            { SupabaseSRSStorage },
            { SupabaseStatsStorage },
            { supabaseAuthApi },
            { AuthService },
            { LocalStorageAdapter },
            { authRegistry },
            { registry },
        ] = await Promise.all([
            import("./lib/supabaseClient"),
            import("./store/SupabaseProgressStorage"),
            import("./store/SupabaseSRSStorage"),
            import("./store/SupabaseStatsStorage"),
            import("./auth/supabaseAuthApi"),
            import("@myorg/auth-core"),
            import("@myorg/storage"),
            import("./auth/authRegistry"),
            import("./store/registry"),
        ])

        const progressStorage = new SupabaseProgressStorage(supabase)
        const srsStorage      = new SupabaseSRSStorage(supabase)
        const statsStorage    = new SupabaseStatsStorage(supabase)

        // Wire the adapters into the registry
        registry.configure({ progress: progressStorage, srs: srsStorage, stats: statsStorage })

        // Wire Supabase auth
        authRegistry.configure(new AuthService(supabaseAuthApi, new LocalStorageAdapter("ls")))

        // Restore existing session — set userId and hydrate SRS + stats
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user.id) {
            const uid = session.user.id
            srsStorage.setUserId(uid)
            statsStorage.setUserId(uid)
            // Hydrate SRS and stats eagerly; progress is hydrated by ProgressContext
            await Promise.all([srsStorage.hydrate(), statsStorage.load()])
        }

        // Keep adapter userIds current on auth state changes.
        // Progress hydration (initSession) is owned by ProgressContext.initUserSession —
        // calling it here too would cause a double-hydration race (F-15).
        supabase.auth.onAuthStateChange((_event, newSession) => {
            const uid = newSession?.user.id ?? null
            if (uid) {
                srsStorage.setUserId(uid)
                statsStorage.setUserId(uid)
                // Re-hydrate SRS on login so cards are ready before ProgressContext boots
                srsStorage.hydrate().catch(err =>
                    console.error("[bootstrap] srsStorage.hydrate failed", err)
                )
            }
        })
    }
    // Stage 1 (no Supabase URL) — registry already defaults to localStorage adapters

    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

bootstrap()
