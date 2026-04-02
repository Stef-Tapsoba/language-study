// hooks/useBreakDetection.ts — Detect how long the user has been away.
//
// Reads the stats store to find the most recent activity date for a language,
// then returns a tier and day-count that the UI uses to decide whether to show
// a break-return review prompt (Sprint 3).
//
// Tiers map to UI treatment in DashboardPage (Sprint 3):
//   none    — 0–2 days away  → no prompt
//   light   — 3–6 days       → Flashcard due-count badge only (already exists)
//   medium  — 7–13 days      → soft indigo card at top of Path tab
//   heavy   — 14–27 days     → prominent amber card at top of Path tab
//   critical — 28+ days      → full-width card with "continue anyway" link
//
// The hook is pure read — no side effects, no writes.

import { useStatsStore, getLastActivityDate } from "../store/useStatsStore"

export type BreakTier = "none" | "light" | "medium" | "heavy" | "critical"

export interface BreakDetectionResult {
    /** How severe the absence is */
    tier: BreakTier
    /** Calendar days since last activity (0 if active today, -1 if no history) */
    daysSince: number
    /** Number of SRS items due — used to populate the review session in Sprint 3 */
    lastActivityDate: string | null
}

function calcTier(days: number): BreakTier {
    if (days < 0)  return "none"       // no history — new user
    if (days <= 2) return "none"
    if (days <= 6) return "light"
    if (days <= 13) return "medium"
    if (days <= 27) return "heavy"
    return "critical"
}

function daysBetween(dateStr: string, today: string): number {
    const msPerDay = 86_400_000
    const a = new Date(dateStr).getTime()
    const b = new Date(today).getTime()
    return Math.floor((b - a) / msPerDay)
}

/**
 * Returns the break tier and days-since-last-activity for the given language.
 * Reactive — updates whenever the stats store changes.
 */
export function useBreakDetection(langId: string): BreakDetectionResult {
    const data = useStatsStore(s => s.data)
    const lastActivityDate = getLastActivityDate(data, langId)

    if (!lastActivityDate) {
        return { tier: "none", daysSince: -1, lastActivityDate: null }
    }

    const today = new Date().toISOString().slice(0, 10)
    const daysSince = daysBetween(lastActivityDate, today)
    return { tier: calcTier(daysSince), daysSince, lastActivityDate }
}
