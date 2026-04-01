// store/LocalStorageProgressStorage.ts — localStorage implementation of IProgressStorage.
//
// Delegates to the synchronous progress.ts functions which maintain a
// write-through cache. Each write method returns Promise.resolve() immediately
// after the synchronous localStorage write — Stage 2 callers can await without
// any observable delay in Stage 1.

import { CEFRLevel, UserProgress } from "../types"
import { IProgressStorage, ContentType } from "./IProgressStorage"
import {
    loadProgress,
    save as storeSave,
    initUserSession as storeInitSession,
    setSelectedLanguage as storeSetSelectedLanguage,
    markLessonComplete as storeMark,
    masterUnit as storeMaster,
    setCurrentLevel,
    resetLanguageProgress,
    removeLanguage as storeRemove,
} from "./progress"

export class LocalStorageProgressStorage implements IProgressStorage {
    load(): UserProgress {
        return loadProgress()
    }

    async save(progress: UserProgress): Promise<void> {
        storeSave(progress)
    }

    async initSession(userId: string): Promise<void> {
        storeInitSession(userId)
    }

    async setSelectedLanguage(langId: string): Promise<void> {
        storeSetSelectedLanguage(langId)
    }

    // Stage 1: contentType is intentionally unused here — only the flat completedLessons
    // array is stored in localStorage. Stage 2 (SupabaseProgressStorage) will use
    // contentType to route writes to the correct DB table (lesson_completions.content_type).
    async markLessonComplete(langId: string, lessonId: string, contentType: ContentType): Promise<void> {
        storeMark(langId, lessonId, contentType)
    }

    async masterUnit(langId: string, unitId: string): Promise<void> {
        storeMaster(langId, unitId)
    }

    async setLevel(langId: string, level: CEFRLevel): Promise<void> {
        setCurrentLevel(langId, level)
    }

    async resetLanguage(langId: string): Promise<void> {
        resetLanguageProgress(langId)
    }

    async removeLanguage(langId: string): Promise<void> {
        storeRemove(langId)
    }
}
