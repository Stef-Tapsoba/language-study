// data/languages.ts — Static list of supported language metadata (id, name, nativeName, flag)
import { Language } from "../types"

export const LANGUAGES: Language[] = [
    { id: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", script: "latin" },
    { id: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", script: "latin" },
    { id: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", script: "latin" },
    { id: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", script: "hiragana-kanji" },
    { id: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", script: "hangul" }
]

export function getLanguage(id: string): Language | undefined {
    return LANGUAGES.find(l => l.id === id)
}
