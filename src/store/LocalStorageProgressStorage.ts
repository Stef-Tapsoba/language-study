// store/LocalStorageProgressStorage.ts — localStorage implementation of IProgressStorage.
//
// This is a thin wrapper around the existing progress.ts functions.
// It satisfies the IProgressStorage interface so ProgressContext can
// inject it — and swap it for a SupabaseProgressStorage at Stage 2
// without any page code changing.

import { CEFRLevel, UserProgress } from "../types"
import { IProgressStorage } from "./IProgressStorage"
import {
    loadProgress,
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

    save(_progress: UserProgress): void {
        // progress.ts manages its own write-through cache; direct save
        // is handled internally. This method exists for interface compliance
        // and will be meaningful in the Supabase implementation.
    }

    markLessonComplete(langId: string, lessonId: string): void {
        storeMark(langId, lessonId)
    }

    masterUnit(langId: string, unitId: string): void {
        storeMaster(langId, unitId)
    }

    setLevel(langId: string, level: CEFRLevel): void {
        setCurrentLevel(langId, level)
    }

    resetLanguage(langId: string): void {
        resetLanguageProgress(langId)
    }

    removeLanguage(langId: string): void {
        storeRemove(langId)
    }
}

/** Singleton instance — import this instead of constructing a new one. */
export const localProgressStorage = new LocalStorageProgressStorage()
