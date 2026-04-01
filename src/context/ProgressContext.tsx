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

    // Derived read helpers (avoid components parsing raw progress object)
    level: (langId: string) => CEFRLevel
    completed: (langId: string) => string[]
    mastered: (langId: string) => string[]
    startedLanguages: string[]
    selectedLanguage: string | null

    // Mutations — each writes to storage then refreshes React state
    initUserSession: (userId: string) => void
    setSelectedLanguage: (langId: string) => void
    setCurrentLevel: (langId: string, level: CEFRLevel) => void
    markLessonComplete: (langId: string, lessonId: string, contentType: ContentType) => void
    masterUnit: (langId: string, unitId: string) => void
    resetLanguage: (langId: string) => void
    removeLanguage: (langId: string) => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [progress, setProgress] = useState<UserProgress>(() => loadProgress())

    const refresh = useCallback(() => setProgress(loadProgress()), [])

    // initUserSession resets progress when the userId changes (e.g. different
    // user on a shared device) and also clears SRS + stats for the old user,
    // then hydrates the stats store from storage for the new user.
    const initUserSession = useCallback((userId: string) => {
        const prev = loadProgress()
        registry.progress.initSession(userId).catch(console.error)
        if (prev.userId !== userId) {
            registry.srs.resetAll().catch(console.error)
            useStatsStore.getState().resetAllStats()
        }
        useStatsStore.getState().hydrate().catch(console.error)
        refresh()
    }, [refresh])

    const setSelectedLanguage = useCallback((langId: string) => {
        registry.progress.setSelectedLanguage(langId).catch(console.error)
        refresh()
    }, [refresh])

    const setCurrentLevel = useCallback((langId: string, level: CEFRLevel) => {
        registry.progress.setLevel(langId, level).then(refresh).catch(console.error)
    }, [refresh])

    const markLessonComplete = useCallback((langId: string, lessonId: string, contentType: ContentType) => {
        registry.progress.markLessonComplete(langId, lessonId, contentType)
            .then(refresh).catch(console.error)
    }, [refresh])

    const masterUnit = useCallback((langId: string, unitId: string) => {
        registry.progress.masterUnit(langId, unitId).then(refresh).catch(console.error)
    }, [refresh])

    const resetLanguage = useCallback((langId: string) => {
        registry.progress.resetLanguage(langId).then(refresh).catch(console.error)
    }, [refresh])

    const removeLanguage = useCallback((langId: string) => {
        registry.progress.removeLanguage(langId).then(refresh).catch(console.error)
    }, [refresh])

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

    const value = useMemo<ProgressContextValue>(() => ({
        progress,
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
    }), [
        progress,
        level, completed, mastered,
        initUserSession, setSelectedLanguage, setCurrentLevel,
        markLessonComplete, masterUnit, resetLanguage, removeLanguage,
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
