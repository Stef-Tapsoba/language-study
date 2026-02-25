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
// Quiz questions (placement + level test)
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
// Language module — what each data file exports
// ---------------------------------------------------------------------------
export interface LanguageModule {
    grammar: GrammarLesson[]
    vocab: VocabItem[]
    verbs: Verb[]
    placementQuestions: QuizQuestion[]   // 2 per level → 10 total across all modules
    levelQuestions: QuizQuestion[]       // 15 per level for the level test
}

// ---------------------------------------------------------------------------
// User progress (stored in localStorage)
// ---------------------------------------------------------------------------
export interface UserProgress {
    selectedLanguage: string | null
    levels: Record<string, CEFRLevel>           // langId → current level
    completedLessons: Record<string, string[]>  // langId → completed lesson ids
}
