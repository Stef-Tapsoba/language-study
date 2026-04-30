// store/LocalStoragePreferencesStorage.ts — localStorage implementation of IPreferencesStorage.
//
// Delegates to direct localStorage reads/writes, preserving existing ls: keys
// so Stage 1 behaviour is completely unchanged.

import { IPreferencesStorage } from "./IPreferencesStorage"

export class LocalStoragePreferencesStorage implements IPreferencesStorage {
    isTtsAutoplay(): boolean {
        const stored = localStorage.getItem("ls:tts-autoplay")
        return stored === null ? true : stored === "true"
    }

    isOnboarded(langId: string): boolean {
        return !!localStorage.getItem(`ls:onboarded:${langId}`)
    }

    async setTtsAutoplay(enabled: boolean): Promise<void> {
        localStorage.setItem("ls:tts-autoplay", String(enabled))
    }

    async setOnboarded(langId: string): Promise<void> {
        localStorage.setItem(`ls:onboarded:${langId}`, "1")
    }

    async initSession(_userId: string): Promise<void> {
        // No-op — localStorage is already populated from previous sessions.
    }
}
