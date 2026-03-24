// hooks/useGlobalStreak.ts — Reactive streak integer; re-renders only when the number changes
import { useMemo } from "react"
import { useStatsStore, getGlobalStreak } from "../store/useStatsStore"

/**
 * Returns the current global day streak.
 * Extracts `data` as a stable selector so getGlobalStreak (O(365 × languages))
 * only recomputes when the stats data object itself changes, not on every
 * unrelated Zustand state update.
 */
export function useGlobalStreak(): number {
    const data = useStatsStore(s => s.data)
    return useMemo(() => getGlobalStreak(data), [data])
}
