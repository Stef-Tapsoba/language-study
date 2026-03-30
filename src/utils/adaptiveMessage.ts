// utils/adaptiveMessage.ts — Motivational message based on a percentage score.
// Single source of truth used by FlashcardsPage and DrillDoneScreen.

export function adaptiveMessage(pct: number): string {
    if (pct >= 90) return "Perfect!"
    if (pct >= 75) return "Great job!"
    if (pct >= 60) return "Good effort!"
    return "Keep it up!"
}
