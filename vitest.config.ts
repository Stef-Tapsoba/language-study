import { defineConfig } from "vitest/config"
import path from "path"

const pkg = (name: string) =>
    path.resolve(__dirname, `../packages/${name}/src`)

export default defineConfig({
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./src/test/setup.ts"],
    },
    resolve: {
        // The @myorg/* aliases point outside the project root, where a second
        // React copy is reachable (../node_modules). Dedupe so hooks in those
        // packages (e.g. quiz-engine's useDrill) share this project's React.
        dedupe: ["react", "react-dom"],
        alias: {
            "@":              path.resolve(__dirname, "./src"),
            "@myorg/auth-core":   pkg("auth-core"),
            "@myorg/api-client":  pkg("api-client"),
            "@myorg/validation":  pkg("validation"),
            "@myorg/storage":     pkg("storage"),
            "@myorg/quiz-engine": pkg("quiz-engine"),
            "@myorg/tts":         pkg("tts"),
            "@myorg/srs":         pkg("srs"),
            "lucide-react":       path.resolve(__dirname, "./src/test/lucide-react-stub.tsx"),
        }
    }
})
