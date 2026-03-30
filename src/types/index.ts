// types/index.ts

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1"

export const CEFR_LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1"]

/** Human-readable level names — single source of truth, use instead of local LEVEL_DESC / LEVEL_LABEL copies. */
export const LEVEL_LABELS: Record<CEFRLevel, string> = {
    A1: "Beginner",
    A2: "Elementary",
    B1: "Intermediate",
    B2: "Upper Intermediate",
    C1: "Advanced",
}

// SRSCardState is now provided by @myorg/srs — import it from store/srs or @myorg/srs directly.

export type ScriptType = "latin" | "hiragana-kanji" | "hangul"

export interface Language {
    id: string
    name: string
    nativeName: string
    flag: string
    script: ScriptType
}

// ---------------------------------------------------------------------------
// Localized text — supports immersion progression across CEFR levels
// native: always English (the learner's language for this prototype)
// target: the language being studied — optional, falls back to native when absent
// ---------------------------------------------------------------------------
export interface LocalizedText {
    native: string
    target?: string
}

// ---------------------------------------------------------------------------
// Example type — appears in grammar, vocab, and verb data
// ---------------------------------------------------------------------------
export interface Example {
    native: string
    romanized?: string   // for Japanese / Korean
    translation: string
    speakText?: string   // override what TTS speaks — use when native contains annotations, paired forms, or non-speakable text
}

// ---------------------------------------------------------------------------
// Grammar
// ---------------------------------------------------------------------------
export interface InlineVocabEntry {
    word: string
    romanized?: string
    translation: string
}

export interface GrammarLesson {
    id: string
    language?: string    // e.g. "fr" — stamped by createLanguageModule(); always set on assembled items
    level: CEFRLevel
    title: string
    explanation: string | LocalizedText
    examples: Example[]
    inlineVocab?: InlineVocabEntry[]
}

// ---------------------------------------------------------------------------
// Vocabulary
// ---------------------------------------------------------------------------
export interface VocabItem {
    id: string
    language?: string    // e.g. "fr" — stamped by createLanguageModule(); always set on assembled items
    level: CEFRLevel
    word: string
    romanized?: string
    hiragana?: string    // pure kana reading — shown at A2+ when romaji is hidden
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
    hiragana?: string    // pure kana reading — shown at A2+ when romaji is hidden
}

export interface ConjugationTable {
    tense: string
    forms: ConjugationForm[]
}

export interface Verb {
    id: string
    language?: string    // e.g. "fr" — stamped by createLanguageModule(); always set on assembled items
    level: CEFRLevel
    infinitive: string
    romanized?: string
    hiragana?: string    // pure kana reading of the infinitive — shown at A2+ when romaji is hidden
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
    description: string | LocalizedText  // one-line summary
    grammarIds: string[]      // references GrammarLesson.id
    vocabIds: string[]        // references VocabItem.id
    verbIds: string[]         // references Verb.id
    testQuestions: QuizQuestion[]  // 5–8 questions to test out of this unit
    cultureIds?: string[]     // optional: references CultureEpisode.id for related culture content
    readingIds?: string[]     // optional: references ReadingPassage.id linked to this unit
    listeningIds?: string[]   // optional: references ListeningExercise.id linked to this unit
}

// ---------------------------------------------------------------------------
// Reading (CE — Compréhension Écrite)
// ---------------------------------------------------------------------------
export type PassageCategory = "everyday" | "culture" | "history" | "literature" | "dialogue"

export interface VocabGloss {
    word: string          // target language word as it appears in the passage
    translation: string   // English gloss
    romanized?: string    // for Japanese/Korean
}

export interface ReadingPassage {
    id: string
    language?: string    // e.g. "fr" — stamped by createLanguageModule(); always set on assembled items
    level: CEFRLevel
    category: PassageCategory
    title: string
    body: LocalizedText   // target = target-language passage; native = English translation
    vocabGloss: VocabGloss[]
    questions: QuizQuestion[]
}

// ---------------------------------------------------------------------------
// Listening (CO — Compréhension Orale)
// ---------------------------------------------------------------------------
export interface DialogueLine {
    speaker: string
    text: string
    translation?: string  // English gloss for this line (optional)
}

export interface ListeningExercise {
    id: string
    language?: string    // e.g. "fr" — stamped by createLanguageModule(); always set on assembled items
    level: CEFRLevel
    title: string
    script: string           // flat TTS script (always present)
    translation: string      // English — toggle reference (flat)
    dialogue?: DialogueLine[] // structured speaker turns for display
    questions: QuizQuestion[]
}

// ---------------------------------------------------------------------------
// Culture episodes — richer format than ReadingPassage; includes video,
// photos, cultural vocab notes, and reflection/comparison question types
// ---------------------------------------------------------------------------

export type CultureCategory =
    | "food"
    | "customs"
    | "history"
    | "geography"
    | "arts"
    | "daily-life"
    | "festivals"
    | "language-note"

export type CultureRegion =
    | "spain" | "mexico" | "colombia" | "argentina" | "peru"
    | "latin-america" | "all-spanish"
    | "france" | "quebec" | "west-africa" | "belgium" | "all-french"
    | "north-italy" | "south-italy" | "sicily" | "rome" | "all-italian"
    | "tokyo" | "kyoto" | "osaka" | "rural-japan" | "all-japanese"
    | "seoul" | "busan" | "jeju" | "all-korean"

export interface CulturePhoto {
    url: string
    caption: LocalizedText
    credit?: string
}

export interface CultureVocabItem {
    word: string
    romanized?: string
    translation: string
    culturalNote?: string
}

export interface CultureQuestion {
    id: string
    type: "comprehension" | "reflection" | "comparison"
    prompt: LocalizedText
    // only set for comprehension questions:
    options?: string[]
    answer?: string
}

export interface CultureEpisode {
    id: string
    language: string
    level: CEFRLevel
    category: CultureCategory
    region: CultureRegion
    title: LocalizedText
    subtitle: string           // English tagline shown on browse card
    video?: {
        youtubeId: string
        title: string
        channelName: string
        startSeconds?: number
        captionLang?: string
    }
    photos: CulturePhoto[]
    body: LocalizedText
    simpleTarget?: string          // short A1-level paragraph in the target language; when set, English becomes the primary body
    cultureVocab: CultureVocabItem[]
    questions: CultureQuestion[]
    didYouKnow?: LocalizedText
    relatedIds?: string[]
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
    readingPassages?: ReadingPassage[]
    listeningExercises?: ListeningExercise[]
    cultureEpisodes?: CultureEpisode[]
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