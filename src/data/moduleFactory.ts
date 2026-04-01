// data/moduleFactory.ts — Factory for assembling LanguageModule from per-level slices.
// Each language index.ts passes arrays of per-level content; this flattens them into
// the single LanguageModule shape expected by the rest of the app.
//
// The factory also stamps every content item with `language: langId`, guaranteeing
// that all assembled items carry their language tag — a requirement for Supabase routing.
// Content files themselves do not need to set `language`; the factory owns that invariant.

import type {
    LanguageModule,
    GrammarLesson,
    VocabItem,
    Verb,
    LessonUnit,
    QuizQuestion,
    ReadingPassage,
    ListeningExercise,
    CultureEpisode,
} from "../types"

export interface LanguageModuleSlices {
    langId: string
    grammar: GrammarLesson[][]
    vocab: VocabItem[][]
    verbs: Verb[][]
    units?: LessonUnit[][]
    placementQuestions: QuizQuestion[]
    levelQuestions: QuizQuestion[]
    readingPassages?: ReadingPassage[][]
    listeningExercises?: ListeningExercise[][]
    cultureEpisodes?: CultureEpisode[][]
}

function stamp<T extends { language?: string }>(items: T[], langId: string): T[] {
    return items.map(item => ({ ...item, language: langId }))
}

export function createLanguageModule(slices: LanguageModuleSlices): LanguageModule {
    const { langId } = slices
    return {
        grammar: stamp(slices.grammar.flat(), langId),
        vocab: stamp(slices.vocab.flat(), langId),
        verbs: stamp(slices.verbs.flat(), langId),
        units: slices.units?.flat() ?? [],
        placementQuestions: slices.placementQuestions,
        levelQuestions: slices.levelQuestions,
        readingPassages: slices.readingPassages ? stamp(slices.readingPassages.flat(), langId) : undefined,
        listeningExercises: slices.listeningExercises ? stamp(slices.listeningExercises.flat(), langId) : undefined,
        cultureEpisodes: slices.cultureEpisodes ? stamp(slices.cultureEpisodes.flat(), langId) : undefined,
    }
}
