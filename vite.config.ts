import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { readFileSync } from "node:fs"

// Resolve @myorg/* packages directly from their source — no build step needed.
const pkg = (name: string) =>
    path.resolve(__dirname, `./packages/${name}/src`)

const appVersion = JSON.parse(readFileSync("./package.json", "utf-8")).version as string

export default defineConfig({
    define: {
        __APP_VERSION__: JSON.stringify(appVersion),
    },
    plugins: [react()],
    build: {
        // Language data chunks are lazy-loaded per-language, now split into:
        //   lang-{id}          — A1-B1 base data (loaded on language selection)
        //   lang-{id}-advanced — B2-C1 data (loaded only when user reaches B2)
        // The 500 kB default threshold fires on minified size, not gzip — raise it.
        chunkSizeWarningLimit: 750,
        rollupOptions: {
            output: {
                // Stable chunk names so only changed chunks are cache-busted on redeploy.
                manualChunks(id) {
                    // Advanced (B2–C1) patterns must come before base patterns.
                    if (id.includes("/data/french")   && (id.includes("/b2") || id.includes("/c1") || id.includes("index-advanced"))) return "lang-fr-advanced"
                    if (id.includes("/data/spanish")  && (id.includes("/b2") || id.includes("/c1") || id.includes("index-advanced"))) return "lang-es-advanced"
                    if (id.includes("/data/italian")  && (id.includes("/b2") || id.includes("/c1") || id.includes("index-advanced"))) return "lang-it-advanced"
                    if (id.includes("/data/japanese") && (id.includes("/b2") || id.includes("/c1") || id.includes("index-advanced"))) return "lang-ja-advanced"
                    if (id.includes("/data/korean")   && (id.includes("/b2") || id.includes("/c1") || id.includes("index-advanced"))) return "lang-ko-advanced"
                    // Base (A1–B1) chunks
                    if (id.includes("/data/spanish"))  return "lang-es"
                    if (id.includes("/data/french"))   return "lang-fr"
                    if (id.includes("/data/italian"))  return "lang-it"
                    if (id.includes("/data/japanese")) return "lang-ja"
                    if (id.includes("/data/korean"))   return "lang-ko"
                },
            },
        },
    },
    resolve: {
        alias: {
            "@":              path.resolve(__dirname, "./src"),
            "@myorg/auth-core":   pkg("auth-core"),
            "@myorg/api-client":  pkg("api-client"),   // placeholder — wired at Supabase migration (Stage 2)
            "@myorg/validation":  pkg("validation"),
            "@myorg/storage":     pkg("storage"),
            "@myorg/quiz-engine": pkg("quiz-engine"),
            "@myorg/tts":         pkg("tts"),
            "@myorg/srs":         pkg("srs"),
        }
    }
})
