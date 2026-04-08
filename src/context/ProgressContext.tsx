// context/ProgressContext.tsx
// Central React state for all user progress. Mutations route through
// registry.progress so that swapping to Supabase at Stage 2 only requires
// registering new adapters — no page code changes.
//
// Optimistic update pattern: local cache is written synchronously (so the UI
// updates immediately), then the async storage write fires in the background.
// In Stage 1, LocalStorageProgressStorage resolves synchronously anyway.
import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from "react"
import { loadProgress } from "../store/progress"
import { registry } from "../store/registry"
import { useStatsStore } from "../store/useStatsStore"
import { CEFRLevel, UserProgress } from "../types"
import type { ContentType } from "../store/IProgressStorage"

interface ProgressContextValue {
    progress: UserProgress

    /**
     * True while initSession is hydrating from the storage backend.
     * Stage 1 (localStorage): always false — hydration is synchronous.
     * Stage 2 (Supabase): true between login and first successful hydrate_progress response.
     * Pages that read progress should render a skeleton/spinner while this is true.
     */
    isHydrating: boolean

    /**
     * Set when initSession hydration fails. Null on success or before first call.
     * Stage 2 (Supabase): network or RLS errors surface here.
     * Pages should show a retry banner when this is non-null.
     */
    hydrateError: Error | null

    // Derived read helpers (avoid components parsing raw progress object)
    level: (langId: string) => CEFRLevel
    completed: (langId: string) => string[]
    mastered: (langId: string) => string[]
    startedLanguages: string[]
    selectedLanguage: string | null

    /**
     * Force a re-read of progress from the storage cache.
     * Call this after an external write (e.g. importProgressSnapshot) that writes
     * directly to the registry without going through a ProgressContext mutation.
     * Normal mutations (setCurrentLevel, masterUnit, etc.) call this internally.
     */
    refreshProgress: () => void

    /**
     * Set when a storage mutation fails. Null on success or before the first mutation.
     * Stage 2 (Supabase): network or RLS errors surface here.
     * Pages should show a retry banner when this is non-null.
     */
    mutationError: Error | null
    clearMutationError: () => void

    // Mutations — all async; each awaits the storage write then refreshes React state.
    // Stage 1: resolves synchronously (localStorage). Stage 2: resolves after Supabase write.
    initUserSession: (userId: string) => void   // intentionally void — hydration tracked via isHydrating
    setSelectedLanguage: (langId: string) => Promise<void>
    setCurrentLevel: (langId: string, level: CEFRLevel) => Promise<void>
    markLessonComplete: (langId: string, lessonId: string, contentType: ContentType) => Promise<void>
    masterUnit: (langId: string, unitId: string) => Promise<void>
    resetLanguage: (langId: string) => Promise<void>
    removeLanguage: (langId: string) => Promise<void>
    completedCheckpoints: (langId: string) => string[]
    completeCheckpoint: (langId: string, checkpointId: string) => Promise<void>
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [progress, setProgress] = useState<UserProgress>(() => loadProgress())
    const [isHydrating, setIsHydrating] = useState(false)
    const [hydrateError, setHydrateError] = useState<Error | null>(null)
    const [mutationError, setMutationError] = useState<Error | null>(null)

    const refresh = useCallback(() => setProgress(loadProgress()), [])

    // initUserSession resets progress when the userId changes (e.g. different
    // user on a shared device) and also clears SRS + stats for the old user,
    // then hydrates the stats store from storage for the new user.
    const initUserSession = useCallback((userId: string) => {
        const prev = loadProgress()
        setIsHydrating(true)
        setHydrateError(null)
        registry.progress.initSession(userId)
            .then(() => {
                // If the user changed, wipe the previous user's SRS + stats before
                // hydrating the new user's data. Both resets must complete first so
                // hydrate() never merges data across users.
                if (prev.userId !== userId) {
                    return Promise.all([
                        registry.srs.resetAll(),
                        useStatsStore.getState().resetAllStats(),
                    ])
                }
            })
            .then(() => useStatsStore.getState().hydrate())
            .then(() => { refresh(); setIsHydrating(false) })
            .catch((err: unknown) => {
                setIsHydrating(false)
                setHydrateError(err instanceof Error ? err : new Error(String(err)))
                refresh()
            })
    }, [refresh])

    const clearMutationError = useCallback(() => setMutationError(null), [])

    // Shared error handler for all mutations — surfaces errors instead of swallowing them.
    // Stage 1: never fires (localStorage is synchronous and infallible).
    // Stage 2: catches Supabase network / RLS errors so the UI can show a retry banner.
    const handleMutationError = useCallback((err: unknown) => {
        setMutationError(err instanceof Error ? err : new Error(String(err)))
    }, [])

    const setSelectedLanguage = useCallback(async (langId: string): Promise<void> => {
        try {
            await registry.progress.setSelectedLanguage(langId)
            refresh()
        } catch (err) { handleMutationError(err) }
    }, [refresh, handleMutationError])

    const setCurrentLevel = useCallback(async (langId: string, level: CEFRLevel): Promise<void> => {
        try {
            await registry.progress.setLevel(langId, level)
            refresh()
        } catch (err) { handleMutationError(err) }
    }, [refresh, handleMutationError])

    const markLessonComplete = useCallback(async (langId: string, lessonId: string, contentType: ContentType): Promise<void> => {
        try {
            await registry.progress.markLessonComplete(langId, lessonId, contentType)
            refresh()
        } catch (err) { handleMutationError(err) }
    }, [refresh, handleMutationError])

    const masterUnit = useCallback(async (langId: string, unitId: string): Promise<void> => {
        try {
            await registry.progress.masterUnit(langId, unitId)
            refresh()
        } catch (err) { handleMutationError(err) }
    }, [refresh, handleMutationError])

    const resetLanguage = useCallback(async (langId: string): Promise<void> => {
        try {
            await registry.progress.resetLanguage(langId)
            refresh()
        } catch (err) { handleMutationError(err) }
    }, [refresh, handleMutationError])

    const removeLanguage = useCallback(async (langId: string): Promise<void> => {
        try {
            await registry.progress.removeLanguage(langId)
            refresh()
        } catch (err) { handleMutationError(err) }
    }, [refresh, handleMutationError])

    const level = useCallback(
        (langId: string): CEFRLevel => progress.levels[langId] ?? "A1",
        [progress]
    )
    const completed = useCallback(
        (langId: string): string[] => progress.completedLessons[langId] ?? [],
        [progress]
    )
    const mastered = useCallback(
        (langId: string): string[] => progress.masteredUnits[langId] ?? [],
        [progress]
    )
    const completedCheckpoints = useCallback(
        (langId: string): string[] => progress.completedCheckpoints?.[langId] ?? [],
        [progress]
    )

    const completeCheckpoint = useCallback(async (langId: string, checkpointId: string): Promise<void> => {
        try {
            await registry.progress.markCheckpointComplete(langId, checkpointId)
            refresh()
        } catch (err) { handleMutationError(err) }
    }, [refresh, handleMutationError])

    const value = useMemo<ProgressContextValue>(() => ({
        progress,
        isHydrating,
        hydrateError,
        refreshProgress: refresh,
        mutationError,
        clearMutationError,
        level,
        completed,
        mastered,
        startedLanguages: Object.keys(progress.levels),
        selectedLanguage: progress.selectedLanguage,
        initUserSession,
        setSelectedLanguage,
        setCurrentLevel,
        markLessonComplete,
        masterUnit,
        resetLanguage,
        removeLanguage,
        completedCheckpoints,
        completeCheckpoint,
    }), [
        progress, isHydrating, hydrateError, refresh, mutationError, clearMutationError,
        level, completed, mastered, completedCheckpoints,
        initUserSession, setSelectedLanguage, setCurrentLevel,
        markLessonComplete, masterUnit, resetLanguage, removeLanguage, completeCheckpoint,
    ])

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    )
}

export function useProgress(): ProgressContextValue {
    const ctx = useContext(ProgressContext)
    if (!ctx) throw new Error("useProgress must be used inside <ProgressProvider>")
    return ctx
}
