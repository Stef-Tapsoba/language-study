import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// Resolve @myorg/* packages directly from their source — no build step needed.
const pkg = (name: string) =>
    path.resolve(__dirname, `./packages/${name}/src`)

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                // Give each language data chunk a stable, predictable name so that
                // only the changed language's chunk is cache-busted on redeploy.
                manualChunks(id) {
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
