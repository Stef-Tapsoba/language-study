// store/useProgressStore.ts — Zustand store for all user progress state.
//
// Replaces the former ProgressContext. Mutations route through registry.progress
// so that the localStorage/Supabase adapter swap stays invisible to the UI.
//
// Optimistic update pattern: the storage adapter's local cache is written
// synchronously (so the UI updates immediately after refresh), then the async
// storage write settles. Failures land in `mutationError` for the retry banner.
//
// CONSUMPTION PATTERN
// -------------------
//   const progress = useProgressStore(s => s.progress)
//   const { level, completed, mastered } = progressHelpers(progress)
//   const masterUnit = useProgressStore(s => s.masterUnit)   // actions are stable refs
//
// Derived reads (level, completed, …) come from progressHelpers(progress), NOT
// from store methods — subscribing to `s.progress` is what makes them reactive.
// Never select a bare function off the store expecting it to trigger re-renders.
//
// Outside React (actions.ts, import flows):
//   useProgressStore.getState().refreshProgress()

import { create } from "zustand"
import { loadProgress } from "./progress"
import { registry } from "./registry"
import { outbox } from "./outbox"
import { logError } from "../utils/logger"
import { useStatsStore } from "./useStatsStore"
import { CEFRLevel, UserProgress, GoalPlan } from "../types"
import type { ContentType } from "./IProgressStorage"

interface ProgressState {
    progress: UserProgress

    /**
     * True while initUserSession is hydrating from the storage backend.
     * Stage 1 (localStorage): momentary — hydration is synchronous.
     * Stage 2 (Supabase): true between login and first successful hydration.
     * Pages that read progress should render a skeleton/spinner while this is true.
     */
    isHydrating: boolean

    /** Set when initUserSession hydration fails (network / RLS errors). */
    hydrateError: Error | null

    /** Set when a storage mutation fails. Shown by HydrationErrorBanner. */
    mutationError: Error | null
    clearMutationError: () => void

    /**
     * Force a re-read of progress from the storage cache.
     * Call after an external write (e.g. importProgressSnapshot) that bypasses
     * the store's own mutations.
     */
    refreshProgress: () => void

    // Mutations — all async; each awaits the storage write then refreshes state.
    initUserSession: (userId: string) => void   // intentionally void — tracked via isHydrating
    setSelectedLanguage: (langId: string) => Promise<void>
    setCurrentLevel: (langId: string, level: CEFRLevel) => Promise<void>
    markLessonComplete: (langId: string, lessonId: string, contentType: ContentType) => Promise<void>
    masterUnit: (langId: string, unitId: string) => Promise<void>
    resetLanguage: (langId: string) => Promise<void>
    removeLanguage: (langId: string) => Promise<void>
    completeCheckpoint: (langId: string, checkpointId: string) => Promise<void>
    setGoalPlan: (langId: string, plan: GoalPlan | null) => Promise<void>
}

const EMPTY: readonly string[] = Object.freeze([])

/**
 * Derived read helpers over a progress snapshot.
 * Pure and cheap — call it with the subscribed `s.progress` value so the
 * helpers recompute exactly when progress changes.
 */
export function progressHelpers(progress: UserProgress) {
    return {
        level:                (langId: string): CEFRLevel => progress.levels[langId] ?? "A1",
        completed:            (langId: string): string[] => progress.completedLessons[langId] ?? (EMPTY as string[]),
        mastered:             (langId: string): string[] => progress.masteredUnits[langId] ?? (EMPTY as string[]),
        completedCheckpoints: (langId: string): string[] => progress.completedCheckpoints?.[langId] ?? (EMPTY as string[]),
        goalPlan:             (langId: string): GoalPlan | null => progress.goalPlans?.[langId] ?? null,
        startedLanguages:     Object.keys(progress.levels),
        selectedLanguage:     progress.selectedLanguage,
    }
}

// Guards concurrent initUserSession calls for the same user (React StrictMode
// double-invokes effects in dev). The Supabase adapter has its own promise-level
// guard; this one just avoids double state churn in the store.
let _hydratingUserId: string | null = null

export const useProgressStore = create<ProgressState>((set, get) => {
    // In Stage 2 (Supabase), registry.progress.load() returns the same cache
    // reference mutated in place. Spreading ensures subscribers always see a
    // new object and re-render.
    const refresh = () => set({ progress: { ...registry.progress.load() } })

    const handleMutationError = (err: unknown) =>
        set({ mutationError: err instanceof Error ? err : new Error(String(err)) })

    /**
     * Shared mutation wrapper.
     *
     * Adapters update their local cache synchronously before the network write
     * settles, so refresh immediately — the UI must reflect the optimistic
     * write without waiting a network round-trip (and even if it fails, the
     * cache keeps the change and the outbox replays it later).
     *
     * Refresh again after settling: destructive ops (resetLanguage,
     * removeLanguage) only mutate the cache after the server confirms.
     */
    const mutate = async (write: () => Promise<void>): Promise<void> => {
        const pending = write()
        refresh()
        try {
            await pending
        } catch (err) {
            handleMutationError(err)
        } finally {
            refresh()
        }
    }

    return {
        progress: loadProgress(),
        isHydrating: false,
        hydrateError: null,
        mutationError: null,

        clearMutationError: () => set({ mutationError: null }),
        refreshProgress: refresh,

        // Resets progress when the userId changes (e.g. different user on a
        // shared device), clears SRS + stats for the old user, then hydrates
        // the stats store from storage for the new user.
        initUserSession: (userId: string) => {
            if (get().isHydrating && _hydratingUserId === userId) return
            _hydratingUserId = userId
            const prev = registry.progress.load()
            set({ isHydrating: true, hydrateError: null })
            // Drain any writes queued while offline BEFORE hydrating, so the
            // fresh server snapshot already reflects them. No-op in Stage 1
            // (outbox unconfigured) or when the queue is empty.
            outbox.setUser(userId)
            outbox.flush()
                .catch((err: unknown) => logError("useProgressStore.initUserSession outbox flush", err))
                .then(() => registry.progress.initSession(userId))
                .then(() => {
                    // If the user changed, wipe the previous user's SRS + stats
                    // before hydrating the new user's data. Both resets must
                    // complete first so hydrate() never merges data across users.
                    if (prev.userId !== userId) {
                        return Promise.all([
                            registry.srs.resetAll(),
                            useStatsStore.getState().resetAllStats(),
                        ])
                    }
                })
                .then(() => useStatsStore.getState().hydrate())
                .then(() => { refresh(); set({ isHydrating: false }) })
                .catch((err: unknown) => {
                    set({
                        isHydrating: false,
                        hydrateError: err instanceof Error ? err : new Error(String(err)),
                    })
                    refresh()
                })
                .finally(() => { _hydratingUserId = null })
        },

        setSelectedLanguage: (langId) => mutate(() => registry.progress.setSelectedLanguage(langId)),
        setCurrentLevel:     (langId, level) => mutate(() => registry.progress.setLevel(langId, level)),
        markLessonComplete:  (langId, lessonId, contentType) =>
            mutate(() => registry.progress.markLessonComplete(langId, lessonId, contentType)),
        masterUnit:          (langId, unitId) => mutate(() => registry.progress.masterUnit(langId, unitId)),
        resetLanguage:       (langId) => mutate(() => registry.progress.resetLanguage(langId)),
        removeLanguage:      (langId) => mutate(() => registry.progress.removeLanguage(langId)),
        completeCheckpoint:  (langId, checkpointId) =>
            mutate(() => registry.progress.markCheckpointComplete(langId, checkpointId)),
        setGoalPlan:         (langId, plan) => mutate(() => registry.progress.setGoalPlan(langId, plan)),
    }
})

/**
 * Reset the store back to freshly-loaded state. ONLY for use in tests —
 * mirrors registry._resetForTests() so each test starts clean.
 */
export function _resetProgressStoreForTests(): void {
    if (import.meta.env.PROD) throw new Error("[useProgressStore] _resetProgressStoreForTests() must not be called in production")
    _hydratingUserId = null
    useProgressStore.setState({
        progress: loadProgress(),
        isHydrating: false,
        hydrateError: null,
        mutationError: null,
    })
}
