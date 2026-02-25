// store/progress.ts
// User progress is stored in localStorage under "ls:progress".

import { CEFRLevel, UserProgress } from "../types"

const KEY = "ls:progress"

const DEFAULT: UserProgress = {
    selectedLanguage: null,
    levels: {},
    completedLessons: {}
}

export function loadProgress(): UserProgress {
    try {
        return { ...DEFAULT, ...JSON.parse(localStorage.getItem(KEY) ?? "{}") }
    } catch {
        return { ...DEFAULT }
    }
}

function save(p: UserProgress): void {
    localStorage.setItem(KEY, JSON.stringify(p))
}

export function getSelectedLanguage(): string | null {
    return loadProgress().selectedLanguage
}

export function setSelectedLanguage(langId: string): void {
    const p = loadProgress()
    save({ ...p, selectedLanguage: langId })
}

export function getCurrentLevel(langId: string): CEFRLevel {
    return loadProgress().levels[langId] ?? "A1"
}

export function setCurrentLevel(langId: string, level: CEFRLevel): void {
    const p = loadProgress()
    save({ ...p, levels: { ...p.levels, [langId]: level } })
}

export function getCompletedLessons(langId: string): string[] {
    return loadProgress().completedLessons[langId] ?? []
}

export function markLessonComplete(langId: string, lessonId: string): void {
    const p = loadProgress()
    const existing = p.completedLessons[langId] ?? []
    if (!existing.includes(lessonId)) {
        save({
            ...p,
            completedLessons: {
                ...p.completedLessons,
                [langId]: [...existing, lessonId]
            }
        })
    }
}

export function resetProgress(): void {
    localStorage.removeItem(KEY)
}

/** Returns all langIds that have an explicit level set (i.e. the user has started them). */
export function getStartedLanguages(): string[] {
    return Object.keys(loadProgress().levels)
}

/** Resets level + completed lessons for a single language only. */
export function resetLanguageProgress(langId: string): void {
    const p = loadProgress()
    const levels           = { ...p.levels }
    const completedLessons = { ...p.completedLessons }
    delete levels[langId]
    delete completedLessons[langId]
    const selectedLanguage = p.selectedLanguage === langId ? null : p.selectedLanguage
    save({ selectedLanguage, levels, completedLessons })
}
