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

// ── Level-up welcome ──────────────────────────────────────────────────────────
// Written by LevelTestPage on advance, read+cleared by DashboardPage on first render.

/** Signal that the user just advanced to a new level (shown as a welcome banner). */
export function setNewLevel(langId: string, level: string): void {
    localStorage.setItem(`ls:new-level:${langId}`, level)
}

/** Returns the new level if a level-up is pending for this language, otherwise null. */
export function getNewLevel(langId: string): string | null {
    return localStorage.getItem(`ls:new-level:${langId}`)
}

/** Clear the pending level-up signal (called after the banner is shown). */
export function clearNewLevel(langId: string): void {
    localStorage.removeItem(`ls:new-level:${langId}`)
}

// ── Learning goal ─────────────────────────────────────────────────────────────
// Goal is stored in UserProgress (via IProgressStorage) for cross-device sync in
// Stage 2. The ls:goal key is retained as a fast local cache and migration fallback.

import { getGoalFromProgress, setGoalInProgress, loadProgress } from "./progress"
import type { GoalId } from "../types"

const GOAL_KEY = "ls:goal"
const VALID_GOAL_IDS = new Set<string>(["traveller", "social", "culture", "general"])

/**
 * Returns the user's goal, validated at runtime.
 * Reads from UserProgress.goal first (Stage 2 syncable),
 * falls back to ls:goal for migration compatibility with existing installs.
 */
export function getGoal(): GoalId {
    const fromProgress = getGoalFromProgress()
    if (fromProgress !== "general") return fromProgress
    const stored = localStorage.getItem(GOAL_KEY)
    return (stored && VALID_GOAL_IDS.has(stored)) ? stored as GoalId : "general"
}

/**
 * Returns true once the user has explicitly set a goal (either in UserProgress or ls:goal).
 * False only for brand-new users who have never reached the goal picker.
 */
export function isGoalSet(): boolean {
    return loadProgress().goal !== undefined || localStorage.getItem(GOAL_KEY) !== null
}

/**
 * Persist the user's goal.
 * Writes to UserProgress (Stage 2 syncable) and caches in ls:goal for fast reads.
 */
export function setGoal(goalId: GoalId): void {
    localStorage.setItem(GOAL_KEY, goalId)
    setGoalInProgress(goalId)
}
