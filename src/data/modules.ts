// data/modules.ts — per-language dynamic imports with synchronous cache
//
// Two-tier loading:
//   loadModule(langId)         — loads base chunk (A1–B1); fast, always needed
//   loadAdvancedModule(langId) — loads advanced chunk (B2–C1); lazy, only for B2+ users
//
// getModule(langId)        — sync, returns from cache (used by all pages unchanged)
// isAdvancedLoaded(langId) — returns true once the advanced chunk has been merged
//
// Vite creates two JS chunks per language:
//   lang-{id}          — A1-B1 data (~120–150 kB gzip)
//   lang-{id}-advanced — B2-C1 data (~100–120 kB gzip), lazy-loaded

import type {
    LanguageModule, GrammarLesson, VocabItem, Verb, LessonUnit,
    ReadingPassage, ListeningExercise, CultureEpisode, SpeakingPrompt,
} from "../types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function norm(raw: any): LanguageModule {
    return { units: [], ...raw }
}

function stamp<T extends { language?: string }>(items: T[], langId: string): T[] {
    return items.map(item => ({ ...item, language: langId }))
}

interface AdvancedSlices {
    grammar:            GrammarLesson[][]
    vocab:              VocabItem[][]
    verbs:              Verb[][]
    units:              LessonUnit[][]
    readingPassages:    ReadingPassage[][]
    listeningExercises: ListeningExercise[][]
    cultureEpisodes:    CultureEpisode[][]
    speakingPrompts?:   SpeakingPrompt[][]
}

const loaders: Record<string, () => Promise<{ default: unknown }>> = {
    es: () => import("./spanish"),
    fr: () => import("./french"),
    it: () => import("./italian"),
    ja: () => import("./japanese"),
    ko: () => import("./korean"),
}

const advancedLoaders: Record<string, () => Promise<{ default: AdvancedSlices }>> = {
    es: () => import("./spanish/index-advanced"),
    fr: () => import("./french/index-advanced"),
    it: () => import("./italian/index-advanced"),
    ja: () => import("./japanese/index-advanced"),
    ko: () => import("./korean/index-advanced"),
}

const cache: Record<string, LanguageModule> = {}
const advancedCache = new Set<string>()
const advancedPromises: Record<string, Promise<void>> = {}

/**
 * Synchronous — returns the cached LanguageModule for langId.
 * Returns null if loadModule() has not yet resolved for this language.
 */
export function getModule(langId: string): LanguageModule | null {
    return cache[langId] ?? null
}

/**
 * Async — fetches the base language chunk (A1–B1) and populates the cache.
 * Safe to call multiple times; resolves immediately if already cached.
 */
export async function loadModule(langId: string): Promise<void> {
    if (cache[langId] || !loaders[langId]) return
    const m = await loaders[langId]()
    cache[langId] = norm(m.default)
}

/** Merge one optional array section into the base module. */
function mergeSection<T extends { language?: string }>(
    base: T[] | undefined,
    slices: T[][] | undefined,
    langId: string,
    assign: (arr: T[]) => void,
): void {
    if (!slices?.length) return
    const items = stamp(slices.flat(), langId)
    if (base) { base.push(...items) } else { assign(items) }
}

/** Fetches the advanced chunk and merges it into the cached base module. */
async function fetchAndMergeAdvanced(langId: string): Promise<void> {
    const base = cache[langId]
    if (!base) return
    const m = await advancedLoaders[langId]()
    const s = m.default
    base.grammar.push(...stamp(s.grammar.flat(), langId))
    base.vocab.push(...stamp(s.vocab.flat(), langId))
    base.verbs.push(...stamp(s.verbs.flat(), langId))
    base.units.push(...s.units.flat())
    mergeSection(base.readingPassages,    s.readingPassages,    langId, arr => { base.readingPassages    = arr })
    mergeSection(base.listeningExercises, s.listeningExercises, langId, arr => { base.listeningExercises = arr })
    mergeSection(base.cultureEpisodes,    s.cultureEpisodes,    langId, arr => { base.cultureEpisodes    = arr })
    mergeSection(base.speakingPrompts,    s.speakingPrompts,    langId, arr => { base.speakingPrompts    = arr })
    advancedCache.add(langId)
}

/**
 * Async — fetches the advanced chunk (B2–C1) and merges it into the existing cache entry.
 * Requires loadModule() to have resolved first.
 * Idempotent — safe to call multiple times.
 */
export async function loadAdvancedModule(langId: string): Promise<void> {
    if (advancedCache.has(langId) || !advancedLoaders[langId]) return
    if (langId in advancedPromises) return advancedPromises[langId]

    advancedPromises[langId] = fetchAndMergeAdvanced(langId)

    return advancedPromises[langId]
}

/** Returns true if the advanced (B2–C1) module has been merged for langId. */
export function isAdvancedLoaded(langId: string): boolean {
    return advancedCache.has(langId)
}
