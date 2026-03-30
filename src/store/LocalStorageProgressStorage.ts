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

    // contentType is forwarded for interface compliance but ignored locally —
    // Stage 1 stores everything in the flat completedLessons array.
    // Stage 2 (SupabaseProgressStorage) will route to the appropriate table.
    async markLessonComplete(langId: string, lessonId: string, _contentType: ContentType): Promise<void> {
        storeMark(langId, lessonId)
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
