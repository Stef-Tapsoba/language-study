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
    hidden?: boolean    // when true, language is not shown in the UI (content preserved)
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
    annotation?: string  // grammar/phonetic note displayed separately from the translation
    /**
     * Explicit scramble tokens for the sentence-scramble exercise.
     * When absent, SentenceScramblePage falls back to whitespace tokenization.
     * Use this when the natural split is morphological rather than by spaces:
     * e.g. "저는 학생이에요." → tokens: ["저는", "학생", "이에요."]
     */
    tokens?: string[]
}

/** A single turn in a dialogue exchange. */
export interface DialogueTurn {
    native: string
    romanized?: string
    translation: string
}

/**
 * A paired dialogue exchange rendered as a grouped card.
 * exchanges[0] is the prompt (A); exchanges[1] is the response (B).
 * The sentence-scramble exercise uses the B turn as its scramble target,
 * with the A turn shown as context.
 * Use a discriminated union check: `"type" in ex && ex.type === "dialogue"`.
 */
export interface DialogueExample {
    type: "dialogue"
    exchanges: [DialogueTurn, DialogueTurn]
    annotation?: string
}

// ---------------------------------------------------------------------------
// Grammar
// ---------------------------------------------------------------------------
export interface InlineVocabEntry {
    word: string
    romanized?: string
    translation: string
}

/**
 * The exercise type shown immediately below a grammar lesson in the unit Grammar tab.
 * Defaults to "sentence-scramble" when absent.
 * Set to "dictation" for pronunciation/phonetics/sounds lessons.
 */
export type GrammarExerciseType = "sentence-scramble" | "dictation" | "script-reading"

/** A single rule card — condition/result pair with quick examples. */
export interface GrammarRule {
    condition: string
    result: string
    /**
     * Optional mechanical shortcut shown between result and examples.
     * For conjugation rules: the stem-derivation step (e.g. "travailler → travaill- + ending").
     */
    heuristic?: string
    /**
     * Quick illustrative examples for the rule.
     * Uses Example[] so Korean/Japanese examples can carry romanization and TTS.
     * Note: rule examples are display-only — sentence-scramble uses lesson.examples, not these.
     */
    examples: Example[]
}

/**
 * A structured conjugation table embedded in a grammar lesson.
 * Supports single-verb and multi-verb comparison tables.
 * Separate from ConjugationTable on Verb (which carries tense metadata).
 */
export interface GrammarConjugationTable {
    pronouns: string[]
    verbs: Array<{
        /** Row header: verb infinitive for conjugationTable, descriptive label for paradigmTable. */
        label: string
        forms: string[]
    }>
}

/**
 * A short typed callout rendered distinctly from explanation prose.
 * Discriminated union: refId is required on forward-ref notes and absent on all others,
 * so the compiler enforces the coupling rather than relying on convention.
 */
export type GrammarNote =
    | { type: "tip" | "warning" | "culture"; content: string }
    | { type: "forward-ref"; content: string; refId: string }

/**
 * Type guard for the discriminated union on GrammarLesson.examples.
 * Use this instead of `"type" in ex` inline checks to avoid `as` casts
 * and ensure future union members are handled exhaustively.
 */
export function isDialogueExample(ex: Example | DialogueExample): ex is DialogueExample {
    return "type" in ex && ex.type === "dialogue"
}

/** A phrase presented as an unanalysed chunk — learn it whole, grammar deferred. */
export interface FixedPhrase {
    native: string
    romanized?: string
    translation: string
    note?: string
}

export interface GrammarLesson {
    id: string
    language?: string    // e.g. "fr" — stamped by createLanguageModule(); always set on assembled items
    level: CEFRLevel
    title: string
    explanation: string | LocalizedText
    /** Structured rule cards — replaces markdown tables in explanation. */
    rules?: GrammarRule[]
    /** Short typed callouts: tips, warnings, forward references, culture notes. */
    notes?: GrammarNote[]
    /** Phrases to learn as unanalysed chunks at this lesson's level. */
    fixedPhrases?: FixedPhrase[]
    /**
     * Structured verb conjugation table — for verb forms only (present, imperative,
     * passé composé auxiliaries, etc.). Uses the same grid shape as paradigmTable.
     */
    conjugationTable?: GrammarConjugationTable
    /**
     * Structured reference table for non-verb paradigms: possessives, articles,
     * adjective agreement patterns, partitives, être-verb lists, etc.
     * Same grid shape as conjugationTable; rendered with heading "Forms" rather
     * than "Conjugation".
     */
    paradigmTable?: GrammarConjugationTable
    examples: Array<Example | DialogueExample>
    inlineVocab?: InlineVocabEntry[]
    /**
     * Exercise type paired with this lesson in the unit Grammar tab.
     * Defaults to "sentence-scramble" when absent.
     */
    exerciseType?: GrammarExerciseType
    /** Communicative function tags — what does this grammar structure do? */
    fnTags?: FunctionTag[]
    /** Topic tags — only set when intrinsically topic-bound (e.g. Numbers, Food). */
    topicTags?: TopicTag[]
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
    /** Topic tags — optional, supplements category for goal-based filtering. */
    topicTags?: TopicTag[]
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
// Content tagging — topic and function tags for personalized learning paths
// ---------------------------------------------------------------------------

export const TOPIC_TAGS = [
    "identity", "greetings", "food", "shopping", "travel",
    "social", "home", "health", "work", "culture", "numbers", "nature", "family",
] as const

export const FUNCTION_TAGS = [
    "fn:describing", "fn:asking-questions", "fn:expressing-time",
    "fn:expressing-quantity", "fn:giving-instructions", "fn:expressing-opinion",
    "fn:socialising", "fn:narrating", "fn:making-requests", "fn:identifying",
] as const

export type TopicTag    = typeof TOPIC_TAGS[number]
export type FunctionTag = typeof FUNCTION_TAGS[number]
export type ContentTag  = TopicTag | FunctionTag

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
    /**
     * Minimum number of vocab items that must be marked learned before the
     * vocab section exercise unlocks. Defaults to VOCAB_EXERCISE_THRESHOLD (5).
     * Override for units with fewer than 5 vocab items.
     */
    vocabUnlockThreshold?: number
    /**
     * Topic tags for personalized path filtering.
     * 1–3 values from the TopicTag vocabulary. Authoritative source for goal matching.
     * Optional during migration — units without tags are shown to all learners.
     */
    topicTags?: TopicTag[]
    /**
     * Ordered list of phrase lesson IDs shown before grammar lessons in the unit flow.
     * Populated in redesigned A1 curricula that use phrase-first pedagogy.
     */
    phraseLessonIds?: string[]
    /**
     * If set, this unit is the last unit of a curriculum block. The checkpoint with
     * this ID must be completed before the next unit in sequence unlocks.
     */
    checkpointId?: string
}

// ---------------------------------------------------------------------------
// Phrase lessons — communicative phrase-first lessons (no grammar table)
// ---------------------------------------------------------------------------

/**
 * A single row in a phrase lesson's phrase table.
 * `context` is the "when to use it" column shown alongside each phrase.
 */
export interface PhraseEntry {
    native: string
    translation: string
    context: string
    pronunciation?: string   // romanisation or IPA hint for non-Latin scripts
}

/** A single speaker turn in a phrase lesson's mini-dialogue. */
export interface PhraseDialogueLine {
    speaker: string
    native: string
    romanized?: string
    translation?: string
}

/** Lightweight multiple-choice check embedded inside a phrase lesson. */
export interface PhrasePracticeQuestion {
    question: string
    options: string[]
    correctIndex: number
}

/**
 * A phrase-first lesson: scene setter → phrase table → optional mini-dialogue
 * → optional single embedded practice question → speak-aloud prompt.
 *
 * Used for communicative phrase lessons in redesigned A1 curricula.
 */
export interface PhraseLesson {
    id: string
    language?: string   // stamped by createLanguageModule(); not set in data files
    level: CEFRLevel
    title: string
    /** Contextual hook shown before the phrase table — sets the scene. */
    sceneSetter?: string
    phrases: PhraseEntry[]
    /** Structured speaker turns for the mini-dialogue, if any. */
    miniDialogue?: PhraseDialogueLine[]
    /** Single embedded multiple-choice check. */
    practiceQuestion?: PhrasePracticeQuestion
    /** "Say it out loud" self-production prompt shown at lesson end. */
    speakAloud?: string
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
// Speaking (EO — Expression Orale)
// ---------------------------------------------------------------------------
export interface SpeakingPrompt {
    id: string
    language?: string    // stamped by moduleFactory; not set in data files
    level: CEFRLevel
    /** Target-language phrase — TTS speaks this; user must say it aloud */
    phrase: string
    romanized?: string   // for Japanese/Korean
    /** English cue shown to the learner before they speak */
    translation: string
    /** Short phonetic stress note, pronunciation tip, or common-mistake warning */
    hint?: string
}

// ---------------------------------------------------------------------------
// Checkpoint — block-end gate requiring learner self-assessment before next block
// ---------------------------------------------------------------------------

/**
 * A block-end checkpoint. The preceding unit carries `checkpointId` pointing here.
 * After mastering that unit the checkpoint card becomes active in the Path tab.
 * The learner reads the scenario, practises aloud, then self-assesses completion.
 */
export interface Checkpoint {
    id: string
    language?: string   // stamped by createLanguageModule(); not set in data files
    level: CEFRLevel
    /** Block number this checkpoint closes (1-based). */
    block: number
    title: string
    /** Scenario description shown to the learner. */
    scenario: string
    /** What the learner should be able to produce — one bullet per string. */
    speakingPrompts: string[]
    /** Linked listening exercise ID for listening checkpoints. */
    listeningId?: string
    type: "speaking" | "listening" | "both"
}

// ---------------------------------------------------------------------------
// Language module — what each data/*/index.ts assembles and exports
// ---------------------------------------------------------------------------
export interface LanguageModule {
    grammar: GrammarLesson[]
    vocab: VocabItem[]
    verbs: Verb[]
    units: LessonUnit[]                  // always present — norm() in data/modules.ts defaults to []
    placementQuestions: QuizQuestion[]   // 2 per level → 10 total
    levelQuestions: QuizQuestion[]       // 15 per level for the level advancement test
    readingPassages?: ReadingPassage[]
    listeningExercises?: ListeningExercise[]
    cultureEpisodes?: CultureEpisode[]
    speakingPrompts?: SpeakingPrompt[]
    phraseLessons?: PhraseLesson[]
    checkpoints?: Checkpoint[]
}

// ---------------------------------------------------------------------------
// User progress (stored in localStorage)
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Reinforcement exercise completion
// ---------------------------------------------------------------------------

/**
 * Tracks which reinforcement exercises have been completed for a single unit.
 *
 * Grammar uses per-lesson granularity: each GrammarLesson.id in grammarLessonIds
 * means that lesson's paired exercise was completed.
 *
 * Vocab and verbs use section-level granularity: one exercise covers the whole
 * section, so completion is a simple boolean flag.
 */
export interface UnitReinforcementState {
    grammarLessonIds: string[]  // GrammarLesson.ids whose paired exercise is done
    vocab?: true                // vocab section exercise done
    verbs?: true                // verbs section exercise done
}

export interface UserProgress {
    schemaVersion?: number                      // incremented on breaking schema changes
    userId?: string                             // owner of this progress record
    selectedLanguage: string | null
    levels: Record<string, CEFRLevel>           // langId → current level
    completedLessons: Record<string, string[]>  // langId → completed lesson ids (flat, Stage 1)
    masteredUnits: Record<string, string[]>     // langId → mastered unit ids
    /**
     * Per-content-type completion tracking — parallel to completedLessons.
     * Populated alongside completedLessons so Stage 1 behaviour is unchanged.
     * Stage 2 (Supabase): each ContentType maps to a separate DB table;
     * SupabaseProgressStorage.markLessonComplete() will route writes here.
     * Shape: { [langId]: { grammar: [...ids], vocab: [...ids], ... } }
     */
    completedByType?: Record<string, Partial<Record<string, string[]>>>
    /**
     * Reinforcement exercise completion, nested by language → unit.
     * Absent key = nothing done yet (safe default for old saves — no migration needed).
     * Stage 2: maps to reinforcement_grammar + reinforcement_sections Supabase tables.
     */
    completedReinforcement?: Record<string, Record<string, UnitReinforcementState>>
    /**
     * Completed checkpoint IDs, keyed by language.
     * Absent key = no checkpoints done yet (safe default — no migration needed).
     * Stage 2: maps to checkpoint_completions table.
     */
    completedCheckpoints?: Record<string, string[]>
    /**
     * User's selected learning goal (traveller / social / culture / general).
     * Stored here so it syncs cross-device via IProgressStorage in Stage 2.
     * Stage 1 reads fall back to ls:goal for migration compatibility.
     * Stage 2: maps to profiles.learning_goal column.
     */
    goal?: GoalId
}

// ---------------------------------------------------------------------------
// Learning goal — defined here to avoid circular imports with data/goalConfig.ts
// ---------------------------------------------------------------------------

/** User's learning-path preference. Stored in UserProgress for cross-device sync. */
export type GoalId = "traveller" | "social" | "culture" | "general"