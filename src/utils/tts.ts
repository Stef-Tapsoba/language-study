// utils/tts.ts — app-level TTS wrapper around @myorg/tts
// Maps internal langIds (es, fr, it, ja, ko) to BCP-47 tags before delegating.
// For content with a pre-generated static audio file (see scripts/generate-tts-audio-fr.ts),
// plays that file first and only falls back to live browser TTS if it's missing.
import {
    speakAsync as ttsSpeakAsync,
    cancel as ttsCancel,
    isSpeaking as ttsIsSpeaking,
} from "@myorg/tts"

export const TTS_LANG_MAP: Record<string, string> = {
    es: "es-ES",
    fr: "fr-FR",
    it: "it-IT",
    ja: "ja-JP",
    ko: "ko-KR",
}

export interface SpeakOptions {
    /**
     * Content id — when present alongside `variant`, a pre-generated static audio file is
     * tried first. For "word"/"example"/"verb" this is the vocab/verb item's own id. For
     * "inline" (grammar-lesson vocab tooltips, which have no stable id of their own) this is
     * `hashText(word)` from `utils/hash.ts` — the same hash the batch script uses to name the file.
     */
    id?: string
    variant?: "word" | "example" | "verb" | "inline"
}

let currentAudio: HTMLAudioElement | null = null

function playStaticAudio(url: string, rate: number): Promise<void> {
    return new Promise((resolve, reject) => {
        const audio = new Audio(url)
        audio.playbackRate = rate
        currentAudio = audio
        let settled = false
        const fail = (err: unknown) => {
            if (settled) return
            settled = true
            reject(err instanceof Error ? err : new Error(`audio load/play failed: ${url}`))
        }
        const succeed = () => {
            if (settled) return
            settled = true
            resolve()
        }
        audio.onerror = () => fail(new Error(`audio load/play failed: ${url}`))
        audio.onended = succeed
        audio.play().catch(fail)
    })
}

function speakLive(text: string, langId: string, rate: number): Promise<void> {
    return ttsSpeakAsync(text, TTS_LANG_MAP[langId] ?? langId, rate)
}

/**
 * Speak text for a given language. Accepts either a langId ("es") or a BCP-47 tag ("es-ES").
 * When `opts.id` + `opts.variant` are given, tries the matching pre-generated static audio
 * file first (`/audio/{langId}/{id}-{variant}.mp3`) and falls back to live TTS if it's missing.
 */
export function speak(text: string, langId: string, rate = 0.9, opts?: SpeakOptions): Promise<void> {
    cancel()
    if (opts?.id && opts?.variant) {
        const url = `/audio/${langId}/${opts.id}-${opts.variant}.mp3`
        return playStaticAudio(url, rate).catch(() => speakLive(text, langId, rate))
    }
    return speakLive(text, langId, rate)
}

/** Cancel any in-progress speech — both a playing static audio file and live TTS. */
export function cancel(): void {
    ttsCancel()
    if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
        currentAudio = null
    }
}

/** Returns true if either a static audio file or live TTS is currently playing. */
export function isSpeaking(): boolean {
    return ttsIsSpeaking() || (currentAudio !== null && !currentAudio.paused)
}
