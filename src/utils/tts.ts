// utils/tts.ts — app-level TTS wrapper around @myorg/tts
// Maps internal langIds (es, fr, it, ja, ko) to BCP-47 tags before delegating.
import { speak as ttsspeak } from "@myorg/tts"

export { cancel, isSpeaking } from "@myorg/tts"

export const TTS_LANG_MAP: Record<string, string> = {
    es: "es-ES",
    fr: "fr-FR",
    it: "it-IT",
    ja: "ja-JP",
    ko: "ko-KR",
}

/** Speak text for a given language. Accepts either a langId ("es") or a BCP-47 tag ("es-ES"). */
export function speak(text: string, langId: string, rate = 0.9): void {
    ttsspeak(text, TTS_LANG_MAP[langId] ?? langId, rate)
}
