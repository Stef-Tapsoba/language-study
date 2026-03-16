// data/modules.ts — per-language dynamic imports with synchronous cache
//
// getModule(langId)   — sync, returns from cache (used by all pages unchanged)
// loadModule(langId)  — async, fetches the language chunk and populates cache
//
// Vite creates one JS chunk per language; only the active language loads at startup.

import { LanguageModule } from "../types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function norm(raw: any): LanguageModule {
    return { units: [], ...raw }
}

const loaders: Record<string, () => Promise<{ default: unknown }>> = {
    es: () => import("./spanish"),
    fr: () => import("./french"),
    it: () => import("./italian"),
    ja: () => import("./japanese"),
    ko: () => import("./korean"),
}

const cache: Record<string, LanguageModule> = {}

/**
 * Synchronous — returns the cached LanguageModule for langId.
 * Returns null if loadModule() has not yet resolved for this language.
 * All existing page code calls this and reads from cache.
 */
export function getModule(langId: string): LanguageModule | null {
    return cache[langId] ?? null
}

/**
 * Async — fetches the language data chunk and populates the cache.
 * Safe to call multiple times; resolves immediately if already cached.
 * Call this once before navigating to any /learn/:langId route.
 */
export async function loadModule(langId: string): Promise<void> {
    if (cache[langId] || !loaders[langId]) return
    const m = await loaders[langId]()
    cache[langId] = norm(m.default)
}
