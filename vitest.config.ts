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
