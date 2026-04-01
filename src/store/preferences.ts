// store/preferences.ts — User preferences stored in localStorage.
//
// Centralises all direct localStorage reads/writes for UI preferences so they
// are easy to find and easy to swap for a Supabase user_preferences row in
// Stage 2 without hunting across page components.

// ── Onboarding ────────────────────────────────────────────────────────────────

/** Returns true if the onboarding banner has NOT yet been dismissed for the language. */
export function isOnboardingVisible(langId: string): boolean {
    return !localStorage.getItem(`ls:onboarded:${langId}`)
}

/** Dismiss the onboarding banner for a language. Idempotent. */
export function dismissOnboarding(langId: string): void {
    localStorage.setItem(`ls:onboarded:${langId}`, "1")
}

// ── TTS auto-play ─────────────────────────────────────────────────────────────

/** Returns the persisted TTS auto-play preference (defaults to true when unset). */
export function getTtsAutoplay(): boolean {
    const stored = localStorage.getItem("ls:tts-autoplay")
    return stored === null ? true : stored === "true"
}

/** Persist the TTS auto-play preference. */
export function setTtsAutoplay(enabled: boolean): void {
    localStorage.setItem("ls:tts-autoplay", String(enabled))
}
