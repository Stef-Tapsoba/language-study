// store/preferences.ts — User preferences stored in localStorage.
//
// Centralises all direct localStorage reads/writes for UI preferences so they
// are easy to find and easy to swap for a Supabase user_preferences row in
// Stage 2 without hunting across page components.
//
// Storage keys managed here:
//   ls:onboarded:{langId}               — "1" once the onboarding banner has been dismissed
//   ls:tts-autoplay                     — "true" | "false" (defaults to true when absent)
//   ls:review-dismissed:{langId}:{date} — "1" when review prompt dismissed for that day
//   ls:goal                             — GoalId selected during onboarding ("general" when absent)
//
// Stage 2: introduce IPreferencesStorage + LocalStoragePreferencesStorage
// and a registry slot so these reads/writes can be swapped for a Supabase
// user_preferences row (enables cross-device preference sync).

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

// ── Review prompt dismissal ───────────────────────────────────────────────────
// Dismissed state is keyed by language + calendar date so the card re-appears
// each new day if the learner is still in a break tier.

function todayKey(langId: string): string {
    return `ls:review-dismissed:${langId}:${new Date().toISOString().slice(0, 10)}`
}

/** Returns true if the review prompt has been dismissed today for this language. */
export function isReviewPromptDismissed(langId: string): boolean {
    return !!localStorage.getItem(todayKey(langId))
}

/** Dismiss the review prompt for today. Resets automatically the next calendar day. */
export function dismissReviewPrompt(langId: string): void {
    localStorage.setItem(todayKey(langId), "1")
}

// ── Learning goal ─────────────────────────────────────────────────────────────

const GOAL_KEY = "ls:goal"

// Runtime whitelist — prevents a corrupted/stale localStorage value producing
// `undefined` when used as a key in USER_GOALS (e.g. USER_GOALS["tourism"]?.icon).
const VALID_GOAL_IDS = new Set(["traveller", "social", "culture", "general"])

/** Returns the stored learning goal ID, validated at runtime. Defaults to "general". */
export function getGoal(): import("../data/goalConfig").GoalId {
    const stored = localStorage.getItem(GOAL_KEY)
    return (stored && VALID_GOAL_IDS.has(stored))
        ? stored as import("../data/goalConfig").GoalId
        : "general"
}

/**
 * Returns true once the user has explicitly set a goal (including "general").
 * False only for brand-new users who have never reached the goal picker.
 * Used by PlacementPage to decide whether to insert the goal picker into the onboarding flow.
 */
export function isGoalSet(): boolean {
    return localStorage.getItem(GOAL_KEY) !== null
}

/** Persist the user's selected learning goal. */
export function setGoal(goalId: string): void {
    localStorage.setItem(GOAL_KEY, goalId)
}
