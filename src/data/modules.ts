// data/modules.ts — static map of langId → LanguageModule
import { LanguageModule } from "../types"
import spanish from "./spanish"
import french from "./french"
import italian from "./italian"
import japanese from "./japanese"
import korean from "./korean"

// Ensure `units` always exists. Languages not yet migrated to the modular
// structure don't have the field yet, so we default it to [] here rather
// than editing each large monolithic file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function norm(raw: any): LanguageModule {
    return { units: [], ...raw }
}

const MODULES: Record<string, LanguageModule> = {
    es: norm(spanish),
    fr: norm(french),
    it: norm(italian),
    ja: norm(japanese),
    ko: norm(korean),
}

export function getModule(langId: string): LanguageModule | null {
    return MODULES[langId] ?? null
}
