import type { Config } from "tailwindcss"

export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary:   "var(--color-primary)",
                secondary: "var(--color-secondary)",
                bg:        "var(--color-bg)",
                surface:   "var(--color-surface)",
                "text-primary":   "var(--color-text-primary)",
                "text-secondary": "var(--color-text-secondary)",
                danger:  "var(--color-danger)",
                success: "var(--color-success)"
            },
            fontFamily: {
                body:    ["var(--font-body)"],
                heading: ["var(--font-heading)"]
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)"
            },
            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)",
                lg: "var(--shadow-lg)"
            }
        }
    },
    plugins: []
} satisfies Config
