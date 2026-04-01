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
}

export function getUnit(langId: string, unitId: string): LessonUnit | null {
    return getModule(langId)?.units?.find(u => u.id === unitId) ?? null
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
