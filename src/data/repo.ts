// data/repo.ts — Repository pattern: named query functions over the language module cache.
//
// All pages and hooks should call these functions instead of reaching into
// getModule(langId) directly. This creates a single seam for the Supabase
// migration (Stage 2): replace these implementations with async DB calls
// without touching any page code.
//
// NOTE: All functions are synchronous and return from the in-memory cache.
// They return empty arrays / null when the module has not yet loaded — callers
// should ensure loadModule(langId) has resolved before calling these.

import { getModule } from "./modules"
import {
    CEFRLevel,
    GrammarLesson,
    VocabItem,
    Verb,
    LessonUnit,
    ReadingPassage,
    ListeningExercise,
    CultureEpisode,
    QuizQuestion,
    SpeakingPrompt,
} from "../types"
import { scoreUnitForGoal, USER_GOALS, type GoalId } from "./goalConfig"
import { UNIT_TAGS } from "./unitTags"

// ---------------------------------------------------------------------------
// Grammar
// ---------------------------------------------------------------------------

export function getGrammarForLevel(langId: string, level: CEFRLevel): GrammarLesson[] {
    return getModule(langId)?.grammar.filter(g => g.level === level) ?? []
}

export function getGrammarLesson(langId: string, lessonId: string): GrammarLesson | null {
    return getModule(langId)?.grammar.find(g => g.id === lessonId) ?? null
}

// ---------------------------------------------------------------------------
// Vocabulary
// ---------------------------------------------------------------------------

export function getVocabForLevel(langId: string, level: CEFRLevel): VocabItem[] {
    return getModule(langId)?.vocab.filter(v => v.level === level) ?? []
}

export function getVocabItems(langId: string, ids: string[]): VocabItem[] {
    const vocab = getModule(langId)?.vocab ?? []
    return ids.map(id => vocab.find(v => v.id === id)).filter(Boolean) as VocabItem[]
}

// ---------------------------------------------------------------------------
// Verbs
// ---------------------------------------------------------------------------

export function getVerbsForLevel(langId: string, level: CEFRLevel): Verb[] {
    return getModule(langId)?.verbs.filter(v => v.level === level) ?? []
}

export function getVerbs(langId: string, ids: string[]): Verb[] {
    const verbs = getModule(langId)?.verbs ?? []
    return ids.map(id => verbs.find(v => v.id === id)).filter(Boolean) as Verb[]
}

// ---------------------------------------------------------------------------
// Units
// ---------------------------------------------------------------------------

export function getUnitsForLevel(langId: string, level: CEFRLevel): LessonUnit[] {
    return (getModule(langId)?.units ?? [])
        .filter(u => u.level === level)
        .sort((a, b) => a.order - b.order)
        .map(u => {
            if (u.topicTags) return u
            const tags = UNIT_TAGS[u.id]
            if (!tags && import.meta.env.DEV) {
                console.warn(`[unitTags] No tag entry found for unit: ${u.id} — add it to unitTags.ts`)
            }
            return { ...u, topicTags: tags }
        })
}

export function getUnit(langId: string, unitId: string): LessonUnit | null {
    return getModule(langId)?.units?.find(u => u.id === unitId) ?? null
}

/**
 * Returns units for a level sorted by goal relevance (matched units first),
 * then by natural unit order within each group.
 * Units without topicTags are placed after tagged units.
 *
 * @param goalId  The user's selected learning goal from goalConfig.ts
 */
export function getUnitsForGoal(
    langId: string,
    level: CEFRLevel,
    goalId: string
): LessonUnit[] {
    const units = getUnitsForLevel(langId, level)
    if (goalId === "general" || !(goalId in USER_GOALS)) return units
    return [...units].sort((a, b) => {
        const sa = scoreUnitForGoal(a.topicTags, goalId as GoalId)
        const sb = scoreUnitForGoal(b.topicTags, goalId as GoalId)
        if (sb !== sa) return sb - sa   // higher score first
        return a.order - b.order        // natural order as tiebreaker
    })
}

// ---------------------------------------------------------------------------
// Unit-scoped content — used by exercise fetchItems when unitId is provided
// ---------------------------------------------------------------------------

/** Returns only the grammar lessons that belong to the given unit. */
export function getGrammarForUnit(langId: string, unitId: string): GrammarLesson[] {
    const unit = getUnit(langId, unitId)
    if (!unit) return []
    const grammar = getModule(langId)?.grammar ?? []
    return unit.grammarIds.map(id => grammar.find(g => g.id === id)).filter(Boolean) as GrammarLesson[]
}

/** Returns only the vocab items that belong to the given unit. */
export function getVocabForUnit(langId: string, unitId: string): VocabItem[] {
    const unit = getUnit(langId, unitId)
    if (!unit) return []
    const vocab = getModule(langId)?.vocab ?? []
    return unit.vocabIds.map(id => vocab.find(v => v.id === id)).filter(Boolean) as VocabItem[]
}

// ---------------------------------------------------------------------------
// Review pools — Sprint 1 foundation for cross-unit review (Sprint 2)
// ---------------------------------------------------------------------------

/**
 * Returns vocab items from all mastered units that come before `currentUnitId`
 * (by unit order) within the given level.
 *
 * Used by ExerciseShell (Sprint 2) to inject prior-unit SRS-due items into
 * the current exercise pool.
 *
 * Stage 2 (Supabase): replace body only — caller interface is unchanged.
 */
export function getReviewItemsForUnit(
    langId: string,
    currentUnitId: string,
    level: CEFRLevel
): VocabItem[] {
    const mod = getModule(langId)
    if (!mod) return []

    const levelUnits = (mod.units ?? [])
        .filter(u => u.level === level)
        .sort((a, b) => a.order - b.order)

    const currentUnit = levelUnits.find(u => u.id === currentUnitId)
    if (!currentUnit) return []

    const priorVocabIds = levelUnits
        .filter(u => u.order < currentUnit.order)
        .flatMap(u => u.vocabIds)

    const vocabMap = new Map(mod.vocab.map(v => [v.id, v]))
    return priorVocabIds
        .map(id => vocabMap.get(id))
        .filter(Boolean) as VocabItem[]
}

// ---------------------------------------------------------------------------
// Reading
// ---------------------------------------------------------------------------

export function getReadingPassagesForLevel(langId: string, level: CEFRLevel): ReadingPassage[] {
    return getModule(langId)?.readingPassages?.filter(r => r.level === level) ?? []
}

export function getReadingPassage(langId: string, passageId: string): ReadingPassage | null {
    return getModule(langId)?.readingPassages?.find(r => r.id === passageId) ?? null
}

export function getReadingPassages(langId: string, ids: string[]): ReadingPassage[] {
    const passages = getModule(langId)?.readingPassages ?? []
    return ids.map(id => passages.find(r => r.id === id)).filter(Boolean) as ReadingPassage[]
}

// ---------------------------------------------------------------------------
// Listening
// ---------------------------------------------------------------------------

export function getListeningForLevel(langId: string, level: CEFRLevel): ListeningExercise[] {
    return getModule(langId)?.listeningExercises?.filter(l => l.level === level) ?? []
}

export function getListeningExercise(langId: string, exerciseId: string): ListeningExercise | null {
    return getModule(langId)?.listeningExercises?.find(l => l.id === exerciseId) ?? null
}

export function getListeningExercises(langId: string, ids: string[]): ListeningExercise[] {
    const exercises = getModule(langId)?.listeningExercises ?? []
    return ids.map(id => exercises.find(l => l.id === id)).filter(Boolean) as ListeningExercise[]
}

// ---------------------------------------------------------------------------
// Culture
// ---------------------------------------------------------------------------

export function getCultureEpisodesForLevel(langId: string, level: CEFRLevel): CultureEpisode[] {
    return getModule(langId)?.cultureEpisodes?.filter(c => c.level === level) ?? []
}

export function getCultureEpisode(langId: string, episodeId: string): CultureEpisode | null {
    return getModule(langId)?.cultureEpisodes?.find(c => c.id === episodeId) ?? null
}

export function getCultureEpisodes(langId: string, ids: string[]): CultureEpisode[] {
    const episodes = getModule(langId)?.cultureEpisodes ?? []
    return ids.map(id => episodes.find(c => c.id === id)).filter(Boolean) as CultureEpisode[]
}

// ---------------------------------------------------------------------------
// Speaking (EO)
// ---------------------------------------------------------------------------

export function getSpeakingForLevel(langId: string, level: CEFRLevel): SpeakingPrompt[] {
    return getModule(langId)?.speakingPrompts?.filter(s => s.level === level) ?? []
}

// ---------------------------------------------------------------------------
// Placement & level tests
// ---------------------------------------------------------------------------

export function getPlacementQuestions(langId: string): QuizQuestion[] {
    return getModule(langId)?.placementQuestions ?? []
}

export function getLevelQuestions(langId: string, level: CEFRLevel): QuizQuestion[] {
    return getModule(langId)?.levelQuestions.filter(q => q.level === level) ?? []
}
