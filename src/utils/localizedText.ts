// utils/localizedText.ts
// Resolves LocalizedText (or plain string) into display-ready text based on CEFR level.
// Display logic:
//   A1  — native only
//   A2  — bilingual: native primary, target secondary
//   B1  — bilingual: target primary, native collapsible
//   B2+ — target only
// If target is absent, native is shown at all levels (graceful fallback).

import { CEFRLevel, LocalizedText } from "../types"

export type TextDisplay =
    | { mode: "single"; text: string }
    | { mode: "bilingual-native-primary"; primary: string; secondary: string }
    | { mode: "bilingual-target-primary"; primary: string; secondary: string }

export function toLocalized(text: string | LocalizedText): LocalizedText {
    return typeof text === "string" ? { native: text } : text
}

export function resolveDisplay(
    text: string | LocalizedText,
    level: CEFRLevel
): TextDisplay {
    const lt = toLocalized(text)

    // Graceful fallback — no target translation yet
    if (!lt.target) {
        return { mode: "single", text: lt.native }
    }

    switch (level) {
        case "A1":
            return { mode: "single", text: lt.native }
        case "A2":
            return { mode: "bilingual-native-primary", primary: lt.native, secondary: lt.target }
        case "B1":
            return { mode: "bilingual-target-primary", primary: lt.target, secondary: lt.native }
        case "B2":
        case "C1":
            return { mode: "single", text: lt.target }
    }
}

/** Convenience — returns only the primary display string (no secondary). */
export function resolvePrimary(text: string | LocalizedText, level: CEFRLevel): string {
    const d = resolveDisplay(text, level)
    return d.mode === "single" ? d.text : d.primary
}
