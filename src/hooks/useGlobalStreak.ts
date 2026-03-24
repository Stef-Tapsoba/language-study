// hooks/useGlobalStreak.ts — Reactive streak integer; re-renders only when the number changes
import { useStatsStore, getGlobalStreak } from "../store/useStatsStore"

/**
 * Returns the current global day streak.
 * Uses a computed-integer selector so the component only re-renders when the
 * streak value itself changes, not on every flashcard flip that touches data.
 */
export function useGlobalStreak(): number {
    return useStatsStore(s => getGlobalStreak(s.data))
}
