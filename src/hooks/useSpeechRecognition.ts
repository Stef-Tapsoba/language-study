// hooks/useSpeechRecognition.ts — Web Speech API recognition hook
//
// Wraps the browser SpeechRecognition API in a controlled React hook.
// Returns a simple state machine: idle → listening → done.
//
// BCP-47 locale is passed in so recognition works correctly for each language.

import { useState, useRef, useCallback, useMemo } from "react"

// ── Minimal type declarations for the Web Speech Recognition API ──────────────
// The SpeechRecognition constructor is not included in TypeScript's standard
// DOM lib (only the result/alternative types are). We declare just enough here
// to keep the hook fully typed without an external @types package.

interface SpeechRecognitionResultItem {
    readonly transcript: string
    readonly confidence: number
}

interface SpeechRecognitionSingleResult {
    readonly isFinal: boolean
    readonly length: number
    item(index: number): SpeechRecognitionResultItem
    [index: number]: SpeechRecognitionResultItem
}

interface SpeechRecognitionResultListLike {
    readonly length: number
    item(index: number): SpeechRecognitionSingleResult
    [index: number]: SpeechRecognitionSingleResult
}

interface SpeechRecognitionEventLike extends Event {
    readonly resultIndex: number
    readonly results: SpeechRecognitionResultListLike
}

interface SpeechRecognitionInstance extends EventTarget {
    lang: string
    continuous: boolean
    interimResults: boolean
    onstart: ((this: SpeechRecognitionInstance, ev: Event) => void) | null
    onresult: ((this: SpeechRecognitionInstance, ev: SpeechRecognitionEventLike) => void) | null
    onerror: ((this: SpeechRecognitionInstance, ev: Event) => void) | null
    onend: ((this: SpeechRecognitionInstance, ev: Event) => void) | null
    start(): void
    stop(): void
    abort(): void
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance

// ── Window augmentation ────────────────────────────────────────────────────────

declare global {
    interface Window {
        SpeechRecognition?: SpeechRecognitionConstructor
        webkitSpeechRecognition?: SpeechRecognitionConstructor
    }
}

// ── Types ─────────────────────────────────────────────────────────────────────

export type RecognitionState = "idle" | "listening" | "done"

export interface UseSpeechRecognitionReturn {
    /** Current state of the recognition lifecycle */
    state: RecognitionState
    /** The transcript returned after recognition; empty string until state === "done" */
    transcript: string
    /** False when the browser does not support SpeechRecognition at all */
    isSupported: boolean
    /** Start listening — no-op if already listening or not supported */
    start: () => void
    /** Reset transcript and return to idle — safe to call at any time */
    reset: () => void
}

// ── Hook ──────────────────────────────────────────────────────────────────────

/**
 * useSpeechRecognition — minimal, single-utterance speech recognition hook.
 *
 * @param bcp47 BCP-47 locale tag e.g. "es-ES", "ja-JP"
 */
export function useSpeechRecognition(bcp47: string): UseSpeechRecognitionReturn {
    // Memoised so the constructor reference is stable across renders —
    // prevents start() from being needlessly recreated on every render.
    const SpeechRecognitionCtor = useMemo<SpeechRecognitionConstructor | undefined>(
        () =>
            globalThis.window === undefined
                ? undefined
                : globalThis.window.SpeechRecognition ?? globalThis.window.webkitSpeechRecognition,
        [],
    )

    const isSupported = Boolean(SpeechRecognitionCtor)

    const [state, setState] = useState<RecognitionState>("idle")
    const [transcript, setTranscript] = useState("")

    // Keep a ref to the active recognition instance so we can abort on reset
    const recognitionRef = useRef<SpeechRecognitionInstance | null>(null)

    const start = useCallback(() => {
        if (!SpeechRecognitionCtor) return
        if (state === "listening") return

        // Abort any previous instance to avoid orphaned handlers
        recognitionRef.current?.abort()

        const recognition = new SpeechRecognitionCtor()
        recognition.lang = bcp47
        recognition.continuous = false
        recognition.interimResults = false
        recognitionRef.current = recognition

        recognition.onstart = () => {
            setState("listening")
        }

        recognition.onresult = (event: SpeechRecognitionEventLike) => {
            const result = event.results[event.results.length - 1]
            const text = result[0].transcript.trim()
            setTranscript(text)
            setState("done")
        }

        recognition.onerror = () => {
            setState("idle")
        }

        recognition.onend = () => {
            // If we are still in listening state (no result came back), return to idle
            setState(prev => (prev === "listening" ? "idle" : prev))
        }

        recognition.start()
    }, [SpeechRecognitionCtor, bcp47, state])

    const reset = useCallback(() => {
        recognitionRef.current?.abort()
        recognitionRef.current = null
        setTranscript("")
        setState("idle")
    }, [])

    return { state, transcript, isSupported, start, reset }
}
