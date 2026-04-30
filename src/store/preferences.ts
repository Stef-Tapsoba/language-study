// store/preferences.ts — User preferences, routed through the storage registry.
//
// Reads are synchronous (write-through cache in the active adapter).
// Writes are async and fire-and-forget — the UI updates immediately from cache.
//
// Three preference groups:
//   1. ttsAutoplay / onboarded — IPreferencesStorage (registry.preferences)
//      → LocalStoragePreferencesStorage in Stage 1
//      → SupabasePreferencesStorage in Stage 2 (user_preferences table)
//
//   2. goal — IProgressStorage (registry.progress)
//      → already in UserProgress / profiles.learning_goal in Stage 2
//
//   3. Transient UI signals — direct localStorage (never need cross-device sync):
//      ls:review-dismissed:{langId}:{date}  — resets daily
//      ls:new-level:{langId}                — cleared after display
//
import { registry } from "./registry"
import { logError } from "../utils/logger"
import type { GoalId } from "../types"

// ── Onboarding ────────────────────────────────────────────────────────────────

/** Returns true if the onboarding banner has NOT yet been dismissed for the language. */
export function isOnboardingVisible(langId: string): boolean {
    return !registry.preferences.isOnboarded(langId)
}

/** Dismiss the onboarding banner for a language. Idempotent. */
export function dismissOnboarding(langId: string): void {
    registry.preferences.setOnboarded(langId)
        .catch(err => logError("preferences.dismissOnboarding", err))
}

// ── TTS auto-play ─────────────────────────────────────────────────────────────

/** Returns the persisted TTS auto-play preference (defaults to true when unset). */
export function getTtsAutoplay(): boolean {
    return registry.preferences.isTtsAutoplay()
}

/** Persist the TTS auto-play preference. */
export function setTtsAutoplay(enabled: boolean): void {
    registry.preferences.setTtsAutoplay(enabled)
        .catch(err => logError("preferences.setTtsAutoplay", err))
}

// ── Review prompt dismissal ───────────────────────────────────────────────────
// Dismissed state is keyed by language + calendar date so the card re-appears
// each new day. Transient — no cross-device sync needed.

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
// Ephemeral inter-page signal written by LevelTestPage, cleared by DashboardPage.

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
// Stored in UserProgress via registry.progress (→ profiles.learning_goal in Stage 2).
// ls:goal is kept as a fast local cache and migration fallback for existing installs.

const GOAL_KEY = "ls:goal"
const VALID_GOAL_IDS = new Set<string>(["traveller", "social", "culture", "general"])

/**
 * Returns the user's goal, validated at runtime.
 * Reads from registry.progress (Supabase cache in Stage 2, localStorage in Stage 1),
 * falls back to ls:goal for migration compatibility with pre-Stage-2 installs.
 */
export function getGoal(): GoalId {
    const fromProgress = registry.progress.load().goal
    if (fromProgress && fromProgress !== "general") return fromProgress
    const stored = localStorage.getItem(GOAL_KEY)
    return (stored && VALID_GOAL_IDS.has(stored)) ? stored as GoalId : "general"
}

/**
 * Returns true once the user has explicitly set a goal.
 * False only for brand-new users who have never reached the goal picker.
 */
export function isGoalSet(): boolean {
    return registry.progress.load().goal !== undefined
        || localStorage.getItem(GOAL_KEY) !== null
}

/**
 * Persist the user's goal.
 * Routes through registry.progress so it syncs to Supabase in Stage 2.
 * Also caches in ls:goal for fast reads before progress hydration completes.
 */
export function setGoal(goalId: GoalId): void {
    localStorage.setItem(GOAL_KEY, goalId)
    registry.progress.setGoal(goalId)
        .catch(err => logError("preferences.setGoal", err))
}
