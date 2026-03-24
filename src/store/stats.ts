// store/stats.ts — Re-export shim. All implementation lives in useStatsStore.ts.
// Display components (NavBar, StatsTab, ProfilePage, HomePage, DashboardPage) import
// directly from useStatsStore. Activity/drill pages (7 callers) still use this shim.
export {
    useStatsStore,
    getHistory,
    getGlobalStreak,
    getTotalReviews,
    getOverallAccuracy,
} from "./useStatsStore"

// Legacy imperative wrappers — delegate to the store's actions via getState()
import { useStatsStore as _store } from "./useStatsStore"

export function recordReview(langId: string, correct: boolean): void {
    _store.getState().recordReview(langId, correct)
}

export function recordQuizAnswer(langId: string, correct: boolean): void {
    _store.getState().recordQuizAnswer(langId, correct)
}

export function recordActivity(langId: string): void {
    _store.getState().recordActivity(langId)
}

export function resetStats(langId: string): void {
    _store.getState().resetStats(langId)
}
