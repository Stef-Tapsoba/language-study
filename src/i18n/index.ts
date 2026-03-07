// i18n/index.ts
// Returns the appropriate UI string set based on language and CEFR level.
// A1 → always English. A2+ → target language.

import { CEFRLevel } from "../types"
import { UIStrings } from "./strings"
import { en } from "./en"
import { es } from "./es"
import { fr } from "./fr"
import { it } from "./it"
import { ja } from "./ja"
import { ko } from "./ko"

const TARGET_STRINGS: Record<string, UIStrings> = { es, fr, it, ja, ko }

/**
 * Returns the UI string set for the current language + level combination.
 * A1 always returns English; A2 and above return the target language strings.
 */
export function getUI(langId: string, level: CEFRLevel): UIStrings {
    if (level === "A1") return en
    return TARGET_STRINGS[langId] ?? en
}

/**
 * Convenience: interpolate {key} placeholders in a string.
 * e.g. fmt(ui.questionOf, { n: "3", total: "10" }) → "Question 3 of 10"
 */
export function fmt(template: string, vars: Record<string, string | number>): string {
    return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`))
}

export type { UIStrings }
export { en }
