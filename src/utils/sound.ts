// utils/sound.ts — Lightweight Web Audio API sound feedback.
//
// Generates tones synthetically — no audio file assets needed.
// All sounds are short (<500 ms) and non-intrusive.
//
// Autoplay policy: Web Audio contexts require a user gesture before playing.
// These functions are always called from within click/tap handlers, so they
// comply automatically.
//
// Silence is graceful: if AudioContext is unavailable (SSR, restricted env),
// calls are no-ops.

// Singleton AudioContext — browsers limit contexts per tab (typically 6).
// Creating one per call would exhaust the limit during rapid answering.
let _ctx: AudioContext | null = null

function ctx(): AudioContext | null {
    try {
        if (_ctx && _ctx.state !== "closed") return _ctx
        const Ctor =
            typeof window !== "undefined"
                ? (window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)
                : undefined
        _ctx = Ctor ? new Ctor() : null
        return _ctx
    } catch {
        return null
    }
}

function tone(
    audioCtx: AudioContext,
    freq: number,
    startAt: number,
    duration: number,
    gain = 0.25,
    type: OscillatorType = "sine"
) {
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    osc.type = type
    osc.frequency.value = freq
    gainNode.gain.setValueAtTime(gain, audioCtx.currentTime + startAt)
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + startAt + duration)
    osc.start(audioCtx.currentTime + startAt)
    osc.stop(audioCtx.currentTime + startAt + duration + 0.01)
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Short ascending chime for a correct answer.
 * Two-note major third (C5 → E5) — pleasant, unobtrusive.
 */
export function playCorrect(): void {
    const c = ctx()
    if (!c) return
    tone(c, 523, 0,    0.12, 0.2)   // C5
    tone(c, 659, 0.1,  0.18, 0.2)   // E5
}

/**
 * Subtle low thud for a wrong answer.
 * Single low tone — communicates "no" without being harsh.
 */
export function playWrong(): void {
    const c = ctx()
    if (!c) return
    tone(c, 220, 0, 0.15, 0.18, "triangle")  // A3
}

/**
 * Ascending fanfare for level-up celebration.
 * Four-note arpeggio — clearly celebratory, distinct from the correct chime.
 */
export function playLevelUp(): void {
    const c = ctx()
    if (!c) return
    tone(c, 523, 0,    0.15, 0.3)   // C5
    tone(c, 659, 0.15, 0.15, 0.3)   // E5
    tone(c, 784, 0.3,  0.15, 0.3)   // G5
    tone(c, 1047, 0.45, 0.35, 0.35) // C6
}
