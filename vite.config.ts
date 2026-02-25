import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// Resolve @myorg/* packages directly from their source — no build step needed.
const pkg = (name: string) =>
    path.resolve(__dirname, `../packages/${name}/src`)

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@myorg/auth-core":    pkg("auth-core"),
            "@myorg/api-client":   pkg("api-client"),
            "@myorg/validation":   pkg("validation"),
            "@myorg/theme-tokens": pkg("theme-tokens"),
            "@myorg/storage":      pkg("storage"),
            "@myorg/event-bus":    pkg("event-bus")
        }
    }
})
