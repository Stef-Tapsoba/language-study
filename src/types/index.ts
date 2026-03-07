// types/index.ts

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1"

export const CEFR_LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1"]

export type ScriptType = "latin" | "hiragana-kanji" | "hangul"

export interface Language {
    id: string
    name: string
    nativeName: string
    flag: string
    script: ScriptType
}

// ---------------------------------------------------------------------------
// Example type — appears in grammar, vocab, and verb data
// ---------------------------------------------------------------------------
export interface Example {
    native: string
    romanized?: string   // for Japanese / Korean
    translation: string
}

// ---------------------------------------------------------------------------
// Grammar
// ---------------------------------------------------------------------------
export interface GrammarLesson {
    id: string
    level: CEFRLevel
    title: string
    explanation: string
    examples: Example[]
}

// ---------------------------------------------------------------------------
// Vocabulary
// ---------------------------------------------------------------------------
export interface VocabItem {
    id: string
    level: CEFRLevel
    word: string
    romanized?: string
    translation: string
    category: string
    example: Example
}

// ---------------------------------------------------------------------------
// Verbs
// ---------------------------------------------------------------------------
export interface ConjugationForm {
    pronoun: string
    form: string
    romanized?: string
}

export interface ConjugationTable {
    tense: string
    forms: ConjugationForm[]
}

export interface Verb {
    id: string
    level: CEFRLevel
    infinitive: string
    romanized?: string
    meaning: string
    conjugations: ConjugationTable[]
}

// ---------------------------------------------------------------------------
// Quiz questions (placement, level test, and unit test-out)
// ---------------------------------------------------------------------------
export interface QuizQuestion {
    id: string
    level: CEFRLevel
    prompt: string
    options: string[]
    answer: string
    hint?: string
}

// ---------------------------------------------------------------------------
// Lesson unit — ordered curriculum block within a level
// ---------------------------------------------------------------------------
export interface LessonUnit {
    id: string                // e.g. "es-a1-u1"
    level: CEFRLevel
    order: number             // 1, 2, 3... sequential within the level
    title: string             // displayed in dashboard
    description: string       // one-line summary
    grammarIds: string[]      // references GrammarLesson.id
    vocabIds: string[]        // references VocabItem.id
    verbIds: string[]         // references Verb.id
    testQuestions: QuizQuestion[]  // 5–8 questions to test out of this unit
}

// ---------------------------------------------------------------------------
// Language module — what each data/*/index.ts assembles and exports
// ---------------------------------------------------------------------------
export interface LanguageModule {
    grammar: GrammarLesson[]
    vocab: VocabItem[]
    verbs: Verb[]
    units?: LessonUnit[]                 // optional until all languages are migrated
    placementQuestions: QuizQuestion[]   // 2 per level → 10 total
    levelQuestions: QuizQuestion[]       // 15 per level for the level advancement test
}

// ---------------------------------------------------------------------------
// User progress (stored in localStorage)
// ---------------------------------------------------------------------------
export interface UserProgress {
    userId?: string                             // owner of this progress record
    selectedLanguage: string | null
    levels: Record<string, CEFRLevel>           // langId → current level
    completedLessons: Record<string, string[]>  // langId → completed lesson ids
    masteredUnits: Record<string, string[]>     // langId → mastered unit ids
}
