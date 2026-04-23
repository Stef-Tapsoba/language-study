/**
 * scripts/validate-curriculum.ts
 *
 * Loads all language modules and validates every item against the
 * TypeScript schema defined in src/types/index.ts.
 *
 * Run with:  npx vite-node scripts/validate-curriculum.ts
 *
 * Exit 0 = all clean.  Exit 1 = validation failures found.
 */

import frenchModule from "../src/data/french"
import spanishModule from "../src/data/spanish"
import italianModule from "../src/data/italian"
import japaneseModule from "../src/data/japanese"
import koreanModule from "../src/data/korean"
import type {
    GrammarLesson, VocabItem, Verb, LessonUnit, ReadingPassage,
    ListeningExercise, CultureEpisode, SpeakingPrompt, PhraseLesson,
    QuizQuestion, Example, DialogueExample, GrammarRule, GrammarNote,
    GrammarConjugationTable, GrammarReferenceTable, CultureQuestion,
    ConjugationTable, ConjugationForm,
} from "../src/types"
import {
    TOPIC_TAGS, FUNCTION_TAGS, CEFR_LEVELS,
} from "../src/types"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type LanguageModule = {
    grammar: GrammarLesson[]
    vocab: VocabItem[]
    verbs: Verb[]
    units: LessonUnit[]
    placementQuestions: QuizQuestion[]
    levelQuestions: QuizQuestion[]
    readingPassages?: ReadingPassage[]
    listeningExercises?: ListeningExercise[]
    cultureEpisodes?: CultureEpisode[]
    speakingPrompts?: SpeakingPrompt[]
    phraseLessons?: PhraseLesson[]
    checkpoints?: unknown[]
}

const VALID_LEVELS = new Set(CEFR_LEVELS)
const VALID_TOPIC_TAGS = new Set<string>(TOPIC_TAGS)
const VALID_FUNCTION_TAGS = new Set<string>(FUNCTION_TAGS)

const VALID_PASSAGE_CATEGORIES = new Set([
    "everyday", "culture", "history", "literature", "dialogue",
])
const VALID_CULTURE_CATEGORIES = new Set([
    "food", "customs", "history", "geography", "arts",
    "daily-life", "festivals", "language-note",
])
const VALID_CULTURE_REGIONS = new Set([
    "spain", "mexico", "colombia", "argentina", "peru",
    "latin-america", "all-spanish",
    "france", "quebec", "west-africa", "belgium", "all-french",
    "north-italy", "south-italy", "sicily", "rome", "all-italian",
    "tokyo", "kyoto", "osaka", "rural-japan", "all-japanese",
    "seoul", "busan", "jeju", "all-korean",
])
const VALID_GRAMMAR_EXERCISE_TYPES = new Set([
    "sentence-scramble", "dictation", "script-reading",
])
const VALID_CULTURE_QUESTION_TYPES = new Set([
    "comprehension", "reflection", "comparison",
])
const VALID_NOTE_TYPES = new Set([
    "tip", "warning", "culture", "forward-ref",
])
const VALID_CHECKPOINT_TYPES = new Set(["speaking", "listening", "both"])

// ---------------------------------------------------------------------------
// Error collection
// ---------------------------------------------------------------------------

const errors: string[] = []
let currentLang = ""
let currentSection = ""
let currentId = ""

function err(msg: string) {
    errors.push(`[${currentLang}] [${currentSection}] ${currentId}: ${msg}`)
}

function ctx(lang: string, section: string, id: string) {
    currentLang = lang
    currentSection = section
    currentId = id
}

// ---------------------------------------------------------------------------
// Primitive validators
// ---------------------------------------------------------------------------

function requireString(val: unknown, field: string): boolean {
    if (typeof val !== "string" || val.trim() === "") {
        err(`${field} must be a non-empty string (got ${JSON.stringify(val)})`)
        return false
    }
    return true
}

function requireNonEmptyArray(val: unknown, field: string): boolean {
    if (!Array.isArray(val) || val.length === 0) {
        err(`${field} must be a non-empty array (got ${JSON.stringify(val)})`)
        return false
    }
    return true
}

function requireEnum(val: unknown, validSet: Set<string>, field: string) {
    if (typeof val !== "string" || !validSet.has(val)) {
        err(`${field} "${val}" is not a valid value (allowed: ${[...validSet].join(", ")})`)
    }
}

function requireLevel(val: unknown, field = "level") {
    requireEnum(val, VALID_LEVELS, field)
}

// ---------------------------------------------------------------------------
// Example / DialogueExample validators
// ---------------------------------------------------------------------------

function validateExample(ex: Example, label: string) {
    requireString(ex.native, `${label}.native`)
    requireString(ex.translation, `${label}.translation`)
    // romanized, speakText, annotation, tokens are all optional — no check needed
}

function validateDialogueExample(ex: DialogueExample, label: string) {
    if (!Array.isArray(ex.exchanges) || ex.exchanges.length !== 2) {
        err(`${label}.exchanges must have exactly 2 turns (got ${ex.exchanges?.length})`)
        return
    }
    ex.exchanges.forEach((turn, i) => {
        requireString(turn.native, `${label}.exchanges[${i}].native`)
        requireString(turn.translation, `${label}.exchanges[${i}].translation`)
    })
}

function validateExampleOrDialogue(
    ex: Example | DialogueExample, label: string,
) {
    if ("type" in ex && ex.type === "dialogue") {
        validateDialogueExample(ex as DialogueExample, label)
    } else {
        validateExample(ex as Example, label)
    }
}

// ---------------------------------------------------------------------------
// QuizQuestion validators
// ---------------------------------------------------------------------------

function validateQuizQuestion(q: QuizQuestion, label: string) {
    requireString(q.id, `${label}.id`)
    requireLevel(q.level, `${label}.level`)
    requireString(q.prompt, `${label}.prompt`)
    if (!Array.isArray(q.options) || q.options.length < 2) {
        err(`${label}.options must have at least 2 items`)
    } else {
        if (!q.options.includes(q.answer)) {
            err(`${label}.answer "${q.answer}" not found in options [${q.options.join(", ")}]`)
        }
    }
    requireString(q.answer, `${label}.answer`)
}

// ---------------------------------------------------------------------------
// GrammarConjugationTable / GrammarReferenceTable
// ---------------------------------------------------------------------------

function validateConjugationTable(table: GrammarConjugationTable, field: string) {
    requireNonEmptyArray(table.pronouns, `${field}.pronouns`)
    requireNonEmptyArray(table.verbs, `${field}.verbs`)
    if (!Array.isArray(table.pronouns) || !Array.isArray(table.verbs)) return
    // pronouns[0] may serve as the row-label header (corresponding to `label`),
    // in which case forms[] has pronouns.length - 1 entries.
    // Both alignments are valid: forms.length === pronouns.length OR === pronouns.length - 1.
    const pronounCount = table.pronouns.length
    table.verbs.forEach((v, i) => {
        if (typeof v.label !== "string") {
            err(`${field}.verbs[${i}].label must be a string (got ${JSON.stringify(v.label)})`)
        }
        if (!Array.isArray(v.forms)) {
            err(`${field}.verbs[${i}].forms must be an array`)
        } else if (v.forms.length !== pronounCount && v.forms.length !== pronounCount - 1) {
            err(`${field}.verbs[${i}].forms length (${v.forms.length}) must be ${pronounCount} or ${pronounCount - 1} (matching pronouns)`)
        }
    })
}

function validateReferenceTable(table: GrammarReferenceTable, field: string) {
    requireNonEmptyArray(table.headers, `${field}.headers`)
    if (!["strip", "keyed"].includes(table.layout)) {
        err(`${field}.layout must be "strip" or "keyed" (got "${table.layout}")`)
    }
    if (!Array.isArray(table.rows)) {
        err(`${field}.rows must be an array`)
    }
}

// ---------------------------------------------------------------------------
// GrammarRule / GrammarNote
// ---------------------------------------------------------------------------

function validateGrammarRule(rule: GrammarRule, label: string) {
    requireString(rule.condition, `${label}.condition`)
    requireString(rule.result, `${label}.result`)
    if (!Array.isArray(rule.examples)) {
        err(`${label}.examples must be an array`)
    } else {
        rule.examples.forEach((ex, i) => validateExample(ex, `${label}.examples[${i}]`))
    }
}

function validateGrammarNote(note: GrammarNote, label: string) {
    requireEnum(note.type, VALID_NOTE_TYPES, `${label}.type`)
    requireString(note.content, `${label}.content`)
    if (note.type === "forward-ref") {
        requireString((note as { type: "forward-ref"; content: string; refId: string }).refId, `${label}.refId`)
    }
}

// ---------------------------------------------------------------------------
// Grammar lessons
// ---------------------------------------------------------------------------

function validateGrammarLesson(g: GrammarLesson) {
    ctx(currentLang, "grammar", g.id ?? "(no id)")
    requireString(g.id, "id")
    requireLevel(g.level)
    requireString(g.title, "title")

    if (typeof g.explanation !== "string" && typeof g.explanation !== "object") {
        err("explanation must be a string or LocalizedText")
    } else if (typeof g.explanation === "object" && g.explanation !== null) {
        requireString((g.explanation as { native?: unknown }).native, "explanation.native")
    }

    g.rules?.forEach((rule, i) => validateGrammarRule(rule, `rules[${i}]`))
    g.notes?.forEach((note, i) => validateGrammarNote(note, `notes[${i}]`))

    g.fixedPhrases?.forEach((fp, i) => {
        requireString(fp.native, `fixedPhrases[${i}].native`)
        requireString(fp.translation, `fixedPhrases[${i}].translation`)
    })

    if (g.conjugationTable) validateConjugationTable(g.conjugationTable, "conjugationTable")
    if (g.paradigmTable) validateConjugationTable(g.paradigmTable, "paradigmTable")
    if (g.referenceTable) validateReferenceTable(g.referenceTable, "referenceTable")

    if (!Array.isArray(g.examples)) {
        err("examples must be an array")
    } else {
        g.examples.forEach((ex, i) => validateExampleOrDialogue(ex, `examples[${i}]`))
    }

    g.inlineVocab?.forEach((iv, i) => {
        requireString(iv.word, `inlineVocab[${i}].word`)
        requireString(iv.translation, `inlineVocab[${i}].translation`)
    })

    if (g.exerciseType !== undefined) {
        requireEnum(g.exerciseType, VALID_GRAMMAR_EXERCISE_TYPES, "exerciseType")
    }

    g.fnTags?.forEach((tag, i) => requireEnum(tag, VALID_FUNCTION_TAGS, `fnTags[${i}]`))
    g.topicTags?.forEach((tag, i) => requireEnum(tag, VALID_TOPIC_TAGS, `topicTags[${i}]`))
}

// ---------------------------------------------------------------------------
// Vocab items
// ---------------------------------------------------------------------------

function validateVocabItem(v: VocabItem) {
    ctx(currentLang, "vocab", v.id ?? "(no id)")
    requireString(v.id, "id")
    requireLevel(v.level)
    requireString(v.word, "word")
    requireString(v.translation, "translation")
    requireString(v.category, "category")

    if (typeof v.example !== "object" || v.example === null) {
        err("example must be an object")
    } else {
        validateExample(v.example, "example")
    }

    v.topicTags?.forEach((tag, i) => requireEnum(tag, VALID_TOPIC_TAGS, `topicTags[${i}]`))
}

// ---------------------------------------------------------------------------
// Verbs
// ---------------------------------------------------------------------------

function validateConjugationForm(form: ConjugationForm, label: string) {
    requireString(form.pronoun, `${label}.pronoun`)
    requireString(form.form, `${label}.form`)
}

function validateConjugationTableVerb(table: ConjugationTable, label: string) {
    requireString(table.tense, `${label}.tense`)
    requireNonEmptyArray(table.forms, `${label}.forms`)
    table.forms?.forEach((form, i) => validateConjugationForm(form, `${label}.forms[${i}]`))
}

function validateVerb(v: Verb) {
    ctx(currentLang, "verbs", v.id ?? "(no id)")
    requireString(v.id, "id")
    requireLevel(v.level)
    requireString(v.infinitive, "infinitive")
    requireString(v.meaning, "meaning")
    requireNonEmptyArray(v.conjugations, "conjugations")
    v.conjugations?.forEach((table, i) =>
        validateConjugationTableVerb(table, `conjugations[${i}]`),
    )
}

// ---------------------------------------------------------------------------
// Units
// ---------------------------------------------------------------------------

function validateUnit(
    u: LessonUnit,
    knownGrammarIds: Set<string>,
    knownVocabIds: Set<string>,
    knownVerbIds: Set<string>,
    knownReadingIds: Set<string>,
    knownListeningIds: Set<string>,
    knownCultureIds: Set<string>,
    knownPhraseIds: Set<string>,
) {
    ctx(currentLang, "units", u.id ?? "(no id)")
    requireString(u.id, "id")
    requireLevel(u.level)

    if (typeof u.order !== "number" || u.order < 1) {
        err(`order must be a positive integer (got ${u.order})`)
    }

    requireString(u.title, "title")

    // description can be string or LocalizedText
    if (typeof u.description === "object" && u.description !== null) {
        requireString((u.description as { native?: unknown }).native, "description.native")
    } else {
        requireString(u.description, "description")
    }

    if (!Array.isArray(u.grammarIds)) err("grammarIds must be an array")
    if (!Array.isArray(u.vocabIds)) err("vocabIds must be an array")
    if (!Array.isArray(u.verbIds)) err("verbIds must be an array")

    // Cross-reference checks
    u.grammarIds?.forEach(id => {
        if (!knownGrammarIds.has(id)) err(`grammarIds references unknown grammar id "${id}"`)
    })
    u.vocabIds?.forEach(id => {
        if (!knownVocabIds.has(id)) err(`vocabIds references unknown vocab id "${id}"`)
    })
    u.verbIds?.forEach(id => {
        if (!knownVerbIds.has(id)) err(`verbIds references unknown verb id "${id}"`)
    })
    u.readingIds?.forEach(id => {
        if (!knownReadingIds.has(id)) err(`readingIds references unknown reading id "${id}"`)
    })
    u.listeningIds?.forEach(id => {
        if (!knownListeningIds.has(id)) err(`listeningIds references unknown listening id "${id}"`)
    })
    u.cultureIds?.forEach(id => {
        if (!knownCultureIds.has(id)) err(`cultureIds references unknown culture id "${id}"`)
    })
    u.phraseLessonIds?.forEach(id => {
        if (!knownPhraseIds.has(id)) err(`phraseLessonIds references unknown phrase lesson id "${id}"`)
    })

    // Test questions
    if (!Array.isArray(u.testQuestions)) {
        err("testQuestions must be an array")
    } else {
        u.testQuestions.forEach((q, i) => validateQuizQuestion(q, `testQuestions[${i}]`))
    }

    u.topicTags?.forEach((tag, i) => requireEnum(tag, VALID_TOPIC_TAGS, `topicTags[${i}]`))
}

// ---------------------------------------------------------------------------
// Reading passages
// ---------------------------------------------------------------------------

function validateReadingPassage(r: ReadingPassage) {
    ctx(currentLang, "reading", r.id ?? "(no id)")
    requireString(r.id, "id")
    requireLevel(r.level)
    requireEnum(r.category, VALID_PASSAGE_CATEGORIES, "category")
    requireString(r.title, "title")

    if (!r.body || typeof r.body !== "object") {
        err("body must be a LocalizedText object")
    } else {
        requireString(r.body.native, "body.native")
        // body.target is optional
    }

    if (!Array.isArray(r.vocabGloss)) {
        err("vocabGloss must be an array")
    } else {
        r.vocabGloss.forEach((vg, i) => {
            requireString(vg.word, `vocabGloss[${i}].word`)
            requireString(vg.translation, `vocabGloss[${i}].translation`)
        })
    }

    if (!Array.isArray(r.questions) || r.questions.length === 0) {
        err("questions must be a non-empty array")
    } else {
        r.questions.forEach((q, i) => validateQuizQuestion(q, `questions[${i}]`))
    }
}

// ---------------------------------------------------------------------------
// Listening exercises
// ---------------------------------------------------------------------------

function validateListeningExercise(l: ListeningExercise) {
    ctx(currentLang, "listening", l.id ?? "(no id)")
    requireString(l.id, "id")
    requireLevel(l.level)
    requireString(l.title, "title")
    requireString(l.script, "script")
    requireString(l.translation, "translation")

    l.dialogue?.forEach((line, i) => {
        requireString(line.speaker, `dialogue[${i}].speaker`)
        requireString(line.text, `dialogue[${i}].text`)
    })

    if (!Array.isArray(l.questions) || l.questions.length === 0) {
        err("questions must be a non-empty array")
    } else {
        l.questions.forEach((q, i) => validateQuizQuestion(q, `questions[${i}]`))
    }
}

// ---------------------------------------------------------------------------
// Culture episodes
// ---------------------------------------------------------------------------

function validateCultureQuestion(q: CultureQuestion, label: string) {
    requireString(q.id, `${label}.id`)
    requireEnum(q.type, VALID_CULTURE_QUESTION_TYPES, `${label}.type`)
    if (!q.prompt || typeof q.prompt !== "object") {
        err(`${label}.prompt must be a LocalizedText object`)
    } else {
        requireString(q.prompt.native, `${label}.prompt.native`)
    }
    if (q.type === "comprehension") {
        if (!Array.isArray(q.options) || q.options.length < 2) {
            err(`${label}.options must have at least 2 items for comprehension questions`)
        } else if (q.answer !== undefined && !q.options.includes(q.answer)) {
            err(`${label}.answer "${q.answer}" not found in options`)
        }
    }
}

function validateCultureEpisode(c: CultureEpisode) {
    ctx(currentLang, "culture", c.id ?? "(no id)")
    requireString(c.id, "id")
    requireString(c.language, "language")   // NOT optional on CultureEpisode
    requireLevel(c.level)
    requireEnum(c.category, VALID_CULTURE_CATEGORIES, "category")
    requireEnum(c.region, VALID_CULTURE_REGIONS, "region")

    if (!c.title || typeof c.title !== "object") {
        err("title must be a LocalizedText object")
    } else {
        requireString(c.title.native, "title.native")
    }

    requireString(c.subtitle, "subtitle")

    if (!Array.isArray(c.photos)) {
        err("photos must be an array")
    } else {
        c.photos.forEach((p, i) => {
            requireString(p.url, `photos[${i}].url`)
            if (!p.caption || typeof p.caption !== "object") {
                err(`photos[${i}].caption must be a LocalizedText`)
            } else {
                requireString(p.caption.native, `photos[${i}].caption.native`)
            }
        })
    }

    if (!c.body || typeof c.body !== "object") {
        err("body must be a LocalizedText object")
    } else {
        requireString(c.body.native, "body.native")
    }

    if (!Array.isArray(c.cultureVocab)) {
        err("cultureVocab must be an array")
    } else {
        c.cultureVocab.forEach((cv, i) => {
            requireString(cv.word, `cultureVocab[${i}].word`)
            requireString(cv.translation, `cultureVocab[${i}].translation`)
        })
    }

    if (!Array.isArray(c.questions) || c.questions.length === 0) {
        err("questions must be a non-empty array")
    } else {
        c.questions.forEach((q, i) => validateCultureQuestion(q, `questions[${i}]`))
    }

    if (c.video) {
        requireString(c.video.youtubeId, "video.youtubeId")
        requireString(c.video.title, "video.title")
        requireString(c.video.channelName, "video.channelName")
    }
}

// ---------------------------------------------------------------------------
// Speaking prompts
// ---------------------------------------------------------------------------

function validateSpeakingPrompt(s: SpeakingPrompt) {
    ctx(currentLang, "speaking", s.id ?? "(no id)")
    requireString(s.id, "id")
    requireLevel(s.level)
    requireString(s.phrase, "phrase")
    requireString(s.translation, "translation")
}

// ---------------------------------------------------------------------------
// Phrase lessons
// ---------------------------------------------------------------------------

function validatePhraseLesson(p: PhraseLesson) {
    ctx(currentLang, "phraseLessons", p.id ?? "(no id)")
    requireString(p.id, "id")
    requireLevel(p.level)
    requireString(p.title, "title")

    if (!Array.isArray(p.phrases) || p.phrases.length === 0) {
        err("phrases must be a non-empty array")
    } else {
        p.phrases.forEach((ph, i) => {
            requireString(ph.native, `phrases[${i}].native`)
            requireString(ph.translation, `phrases[${i}].translation`)
            requireString(ph.context, `phrases[${i}].context`)
        })
    }

    p.miniDialogue?.forEach((line, i) => {
        // speaker can be empty string (unnamed)
        if (typeof line.speaker !== "string") err(`miniDialogue[${i}].speaker must be a string`)
        requireString(line.native, `miniDialogue[${i}].native`)
    })

    if (p.practiceQuestion) {
        requireString(p.practiceQuestion.question, "practiceQuestion.question")
        if (!Array.isArray(p.practiceQuestion.options) || p.practiceQuestion.options.length < 2) {
            err("practiceQuestion.options must have at least 2 items")
        }
        if (
            typeof p.practiceQuestion.correctIndex !== "number" ||
            p.practiceQuestion.correctIndex < 0 ||
            p.practiceQuestion.correctIndex >= (p.practiceQuestion.options?.length ?? 0)
        ) {
            err(`practiceQuestion.correctIndex ${p.practiceQuestion.correctIndex} is out of range`)
        }
    }
}

// ---------------------------------------------------------------------------
// Checkpoints
// ---------------------------------------------------------------------------

function validateCheckpoint(c: Record<string, unknown>) {
    ctx(currentLang, "checkpoints", (c.id as string) ?? "(no id)")
    requireString(c.id as string, "id")
    requireLevel(c.level)
    if (typeof c.block !== "number" || c.block < 1) {
        err(`block must be a positive integer (got ${c.block})`)
    }
    requireString(c.title as string, "title")
    requireString(c.scenario as string, "scenario")
    if (!Array.isArray(c.speakingPrompts) || c.speakingPrompts.length === 0) {
        err("speakingPrompts must be a non-empty array")
    }
    requireEnum(c.type as string, VALID_CHECKPOINT_TYPES, "type")
    if (c.type === "listening" || c.type === "both") {
        if (!c.listeningId) err('listeningId is required when type is "listening" or "both"')
    }
}

// ---------------------------------------------------------------------------
// ID uniqueness
// ---------------------------------------------------------------------------

function checkUniqueness(items: Array<{ id?: string }>, section: string) {
    const seen = new Map<string, number>()
    items.forEach((item, i) => {
        if (!item.id) return
        const prev = seen.get(item.id)
        if (prev !== undefined) {
            ctx(currentLang, section, item.id)
            err(`duplicate id — also appears at index ${prev}`)
        } else {
            seen.set(item.id, i)
        }
    })
}

// ---------------------------------------------------------------------------
// Module validator
// ---------------------------------------------------------------------------

function validateModule(langId: string, mod: LanguageModule) {
    currentLang = langId
    console.log(`\n  Validating ${langId}...`)

    // Build ID lookup sets for cross-reference checks
    const grammarIds = new Set(mod.grammar.map(g => g.id))
    const vocabIds = new Set(mod.vocab.map(v => v.id))
    const verbIds = new Set(mod.verbs.map(v => v.id))
    const readingIds = new Set(mod.readingPassages?.map(r => r.id) ?? [])
    const listeningIds = new Set(mod.listeningExercises?.map(l => l.id) ?? [])
    const cultureIds = new Set(mod.cultureEpisodes?.map(c => c.id) ?? [])
    const phraseIds = new Set(mod.phraseLessons?.map(p => p.id) ?? [])

    // Uniqueness checks
    checkUniqueness(mod.grammar, "grammar")
    checkUniqueness(mod.vocab, "vocab")
    checkUniqueness(mod.verbs, "verbs")
    checkUniqueness(mod.units, "units")
    if (mod.readingPassages) checkUniqueness(mod.readingPassages, "reading")
    if (mod.listeningExercises) checkUniqueness(mod.listeningExercises, "listening")
    if (mod.cultureEpisodes) checkUniqueness(mod.cultureEpisodes, "culture")
    if (mod.phraseLessons) checkUniqueness(mod.phraseLessons, "phraseLessons")

    // Item validation
    mod.grammar.forEach(g => validateGrammarLesson(g))
    mod.vocab.forEach(v => validateVocabItem(v))
    mod.verbs.forEach(v => validateVerb(v))
    mod.units.forEach(u => validateUnit(
        u, grammarIds, vocabIds, verbIds, readingIds, listeningIds, cultureIds, phraseIds,
    ))
    mod.readingPassages?.forEach(r => validateReadingPassage(r))
    mod.listeningExercises?.forEach(l => validateListeningExercise(l))
    mod.cultureEpisodes?.forEach(c => validateCultureEpisode(c))
    mod.speakingPrompts?.forEach(s => validateSpeakingPrompt(s))
    mod.phraseLessons?.forEach(p => validatePhraseLesson(p))

    // Placement questions
    currentSection = "placementQuestions"
    mod.placementQuestions?.forEach((q, i) => {
        currentId = q.id ?? `[${i}]`
        validateQuizQuestion(q, `placementQuestions[${i}]`)
    })

    // Level questions (flat array)
    currentSection = "levelQuestions"
    mod.levelQuestions?.forEach((q, i) => {
        currentId = q.id ?? `[${i}]`
        validateQuizQuestion(q, `levelQuestions[${i}]`)
    })

    // Checkpoints
    if (mod.checkpoints) {
        checkUniqueness(mod.checkpoints as Array<{ id?: string }>, "checkpoints")
        mod.checkpoints.forEach(c => validateCheckpoint(c as Record<string, unknown>))
    }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const MODULES: Array<[string, LanguageModule]> = [
    ["fr", frenchModule as LanguageModule],
    ["es", spanishModule as LanguageModule],
    ["it", italianModule as LanguageModule],
    ["ja", japaneseModule as LanguageModule],
    ["ko", koreanModule as LanguageModule],
]

console.log("=".repeat(60))
console.log("  Curriculum Validator")
console.log("=".repeat(60))

for (const [langId, mod] of MODULES) {
    validateModule(langId, mod)
}

console.log("\n" + "=".repeat(60))
if (errors.length === 0) {
    console.log("  ✅  All checks passed — zero errors.")
} else {
    console.log(`  ❌  ${errors.length} error(s) found:\n`)
    errors.forEach((e, i) => console.log(`  ${i + 1}. ${e}`))
    console.log()
}
console.log("=".repeat(60))

process.exit(errors.length === 0 ? 0 : 1)
