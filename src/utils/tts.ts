// src/utils/tts.ts — Web Speech API helpers

export const TTS_LANG_MAP: Record<string, string> = {
    es: "es-ES",
    fr: "fr-FR",
    it: "it-IT",
    ja: "ja-JP",
    ko: "ko-KR",
}

/** Speak text via Web Speech API. No-ops silently if unsupported. */
export function speak(text: string, langId: string, rate = 0.9): void {
    if (!("speechSynthesis" in window)) return
    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    utt.lang = TTS_LANG_MAP[langId] ?? langId
    utt.rate = rate
    window.speechSynthesis.speak(utt)
}
