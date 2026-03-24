import type { Config } from "tailwindcss"

export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Legacy app CSS-var aliases (undefined until backend stage — kept for forward compat)
                primary:   "var(--color-primary)",
                secondary: "var(--color-secondary)",
                bg:        "var(--color-bg)",
                surface:   "var(--color-surface)",
                "text-primary":   "var(--color-text-primary)",
                "text-secondary": "var(--color-text-secondary)",
                danger:  "var(--color-danger)",
                success: "var(--color-success)",
                // shadcn semantic color aliases
                border:      "hsl(var(--border))",
                input:       "hsl(var(--input))",
                ring:        "hsl(var(--ring))",
                background:  "hsl(var(--background))",
                foreground:  "hsl(var(--foreground))",
                card: {
                    DEFAULT:    "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT:    "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                muted: {
                    DEFAULT:    "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT:    "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT:    "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
            },
            fontFamily: {
                body:    ["var(--font-body)"],
                heading: ["var(--font-heading)"]
            },
            borderRadius: {
                // shadcn radius scale — driven by --radius CSS variable
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)",
                lg: "var(--shadow-lg)"
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
} satisfies Config
