// data/modules.ts — static map of langId → LanguageModule
import { LanguageModule } from "../types"
import spanish  from "./spanish"
import french   from "./french"
import italian  from "./italian"
import japanese from "./japanese"
import korean   from "./korean"

const MODULES: Record<string, LanguageModule> = {
    es: spanish,
    fr: french,
    it: italian,
    ja: japanese,
    ko: korean,
}

export function getModule(langId: string): LanguageModule | null {
    return MODULES[langId] ?? null
}
