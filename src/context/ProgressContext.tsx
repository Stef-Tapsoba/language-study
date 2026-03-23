// context/ProgressContext.tsx
// Central React state for all user progress. Wraps store/progress.ts so that
// when we migrate to Supabase (Stage 2), only this file changes.
import { createContext, useContext, useState, useCallback, ReactNode } from "react"
import {
    loadProgress,
    initUserSession as storeInitUserSession,
    setSelectedLanguage as storeSetSelectedLanguage,
    setCurrentLevel as storeSetCurrentLevel,
    markLessonComplete as storeMarkLessonComplete,
    masterUnit as storeMasterUnit,
    resetLanguageProgress as storeResetLanguageProgress,
    removeLanguage as storeRemoveLanguage,
} from "../store/progress"
import { CEFRLevel, UserProgress } from "../types"

interface ProgressContextValue {
    progress: UserProgress

    // Derived read helpers (avoid components parsing raw progress object)
    level: (langId: string) => CEFRLevel
    completed: (langId: string) => string[]
    mastered: (langId: string) => string[]
    startedLanguages: string[]
    selectedLanguage: string | null

    // Mutations — each writes to localStorage then refreshes React state
    initUserSession: (userId: string) => void
    setSelectedLanguage: (langId: string) => void
    setCurrentLevel: (langId: string, level: CEFRLevel) => void
    markLessonComplete: (langId: string, lessonId: string) => void
    masterUnit: (langId: string, unitId: string) => void
    resetLanguage: (langId: string) => void
    removeLanguage: (langId: string) => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
    const [progress, setProgress] = useState<UserProgress>(() => loadProgress())

    const refresh = useCallback(() => setProgress(loadProgress()), [])

    const initUserSession = useCallback((userId: string) => {
        storeInitUserSession(userId)
        refresh()
    }, [refresh])

    const setSelectedLanguage = useCallback((langId: string) => {
        storeSetSelectedLanguage(langId)
        refresh()
    }, [refresh])

    const setCurrentLevel = useCallback((langId: string, level: CEFRLevel) => {
        storeSetCurrentLevel(langId, level)
        refresh()
    }, [refresh])

    const markLessonComplete = useCallback((langId: string, lessonId: string) => {
        storeMarkLessonComplete(langId, lessonId)
        refresh()
    }, [refresh])

    const masterUnit = useCallback((langId: string, unitId: string) => {
        storeMasterUnit(langId, unitId)
        refresh()
    }, [refresh])

    const resetLanguage = useCallback((langId: string) => {
        storeResetLanguageProgress(langId)
        refresh()
    }, [refresh])

    const removeLanguage = useCallback((langId: string) => {
        storeRemoveLanguage(langId)
        refresh()
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

    const value: ProgressContextValue = {
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
    }

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
