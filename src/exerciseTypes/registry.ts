// exerciseTypes/registry.ts — Exercise Type Registry
//
// PURPOSE
// -------
// A central contract that every exercise type must fulfill. The registry is
// the single place that knows: what exercise types exist, how to fetch their
// content, which answer-evaluation mode they use, and which React component
// renders them.
//
// WHY THIS EXISTS
// ---------------
// Without a registry, adding a new exercise type requires touching:
//   - a new page component
//   - a route in App.tsx
//   - the unit page (to show the new card)
//   - the dashboard (to track completion)
//   - repo.ts (for content fetching)
//   - IProgressStorage (for progress tracking)
//
// With the registry, adding a new type means creating one definition file and
// importing it in exerciseTypes/index.ts. The rest of the app discovers it
// automatically.
//
// DATABASE MIGRATION (Stage 1 → Stage 2)
// ----------------------------------------
// Each ExerciseTypeDef has a `fetchItems` function — the ONLY thing that changes
// when content moves from TypeScript files to Supabase:
//
//   Stage 1 (current):
//     fetchItems: async ({ langId, level }) =>
//         Promise.resolve(getGrammarForLevel(langId, level))
//
//   Stage 2 (Supabase):
//     fetchItems: async ({ langId, level }) => {
//         const { data } = await supabase
//             .from("grammar_lessons")
//             .select("*")
//             .eq("lang_id", langId)
//             .eq("level", level)
//         return data ?? []
//     }
//
// The component, matchMode, contentType, and route stay identical.
// IProgressStorage already handles the write side of the same migration.
//
// WHAT BELONGS HERE — AND WHAT DELIBERATELY DOESN'T
// --------------------------------------------------
// The registry owns every LINEAR PRACTICE SESSION: a pool of items is fetched,
// selected, and drilled front-to-back in one sitting. All drills live here.
//
// Two kinds of experience are deliberately OUTSIDE the registry — do not
// migrate them, their shape conflicts with the ExerciseShell contract:
//   - Flashcards (pages/FlashcardsPage) — an SRS engine: builds its own
//     due+new deck and records per-card SM-2 grades. The shell's coarse
//     onComplete cannot express card grading.
//   - Content browsers (Reading, Listening, Culture pages) — list → detail
//     navigation with sub-routes, embedded comprehension quizzes, and
//     per-question stats. They are study surfaces, not linear sessions.
//
// Register all NEW linear exercise types here from the start.

import type { LazyExoticComponent, ComponentType } from "react"
import type { CEFRLevel } from "../types"
import type { MatchMode } from "../utils/answerMatch"
import type { ContentType } from "../store/IProgressStorage"
import type { DrillSessionType } from "../store/actions"
import type { ExerciseConfig, ExerciseContext } from "../domain/exerciseConfig"
import type { Skill } from "../domain/skills"

// ---------------------------------------------------------------------------
// Params passed to fetchItems
// ---------------------------------------------------------------------------

export interface ExerciseFetchParams {
    langId: string
    level: CEFRLevel
    /** Optionally scope to a specific unit's content */
    unitId?: string
    /**
     * Optionally scope to a single lesson item (grammar lesson or vocab group).
     * When set, fetchItems should return only content from that lesson.
     * Takes precedence over unitId for filtering granularity.
     */
    lessonId?: string
    /**
     * Launch context — 'unit' | 'practice' | 'review'.
     * Defaults to 'unit' when unitId is present, 'practice' otherwise.
     * fetchItems implementations may use this to vary their query; most ignore it.
     */
    context?: ExerciseContext
}

// ---------------------------------------------------------------------------
// Props every exercise component receives from the shell
// ---------------------------------------------------------------------------

export interface ExerciseComponentProps<TItem = unknown> {
    /** Items returned by fetchItems, already selected and ordered by ExerciseShell */
    items: TItem[]
    langId: string
    level: CEFRLevel
    /** Context-aware sizing and selection config computed by ExerciseShell */
    config: ExerciseConfig
    /**
     * Call when the user successfully completes one item.
     * The shell calls markLessonComplete(langId, itemId, contentType) via actions.ts.
     */
    onComplete: (itemId: string) => void
    /**
     * Call when the user finishes the entire session (all items done / results screen shown).
     * The shell calls completeDrillSession(langId, def.sessionType) — components do not
     * need to import completeDrillSession directly.
     */
    onSessionDone: () => void

    /**
     * The CO/CE/EO/EE competency this exercise trains (from the def), or null
     * for core-knowledge exercises. Pass to recordQuizAnswer(langId, ok, skill)
     * so per-skill stats accumulate.
     */
    skill: Skill | null
}

// ---------------------------------------------------------------------------
// The definition contract every exercise type must fulfill
// ---------------------------------------------------------------------------

export interface ExerciseTypeDef<TItem = unknown> {
    /** Stable unique identifier — used in routes (/learn/:lang/:id), progress keys,
     *  and will map to a Supabase table name in Stage 2. Use kebab-case. */
    id: string

    /** Human-readable name shown in the UI (unit cards, breadcrumbs, etc.) */
    label: string

    /**
     * Maps to IProgressStorage.ContentType.
     * Many new exercise types reuse existing content types:
     *   sentence-scramble → "grammar"
     *   cloze             → "reading"
     *   dictation         → "listening"
     *   vocab-matching    → "vocab"
     * Only add a new ContentType value if the content is genuinely separate
     * from all existing types.
     */
    contentType: ContentType

    /**
     * The DrillSessionType recorded when the user completes a session.
     * Passed to completeDrillSession() by ExerciseShell when onSessionDone() fires —
     * exercise component pages do not call completeDrillSession() directly.
     * Almost always equal to contentType; declared separately for clarity and type safety.
     */
    sessionType: DrillSessionType

    /**
     * Which answerMatches() mode to use for typed answers.
     * null = multiple-choice only — answer evaluation is handled inside the component.
     *
     * See src/utils/answerMatch.ts for full mode documentation.
     *   "loose"     — English translations (strip qualifiers, split alternatives)
     *   "strict"    — Target-language fill-in (split alternatives, keep qualifiers)
     *   "dictation" — Verbatim reproduction (no splitting, accent tolerance only)
     */
    matchMode: MatchMode | null

    /**
     * Content fetcher — the one seam between static files and Supabase.
     * Always returns a Promise so callers are async-ready from day one.
     *
     * Stage 1: wrap the synchronous repo.ts call in Promise.resolve().
     * Stage 2: replace the body with a Supabase query. Nothing else changes.
     */
    fetchItems: (params: ExerciseFetchParams) => Promise<TItem[]>

    /**
     * The React component that renders this exercise.
     * Wrap with React.lazy() so each exercise type is code-split automatically.
     *
     * Example:
     *   component: lazy(() => import("../pages/SentenceScramblePage"))
     */
    component: LazyExoticComponent<ComponentType<ExerciseComponentProps<TItem>>>

    /**
     * The single CO/CE/EO/EE competency this exercise trains, if any.
     * Drives per-skill stats attribution (blueprint §2.1). Omit for
     * core-knowledge exercises (vocab/verb/grammar drills) — they feed
     * all skills and attributing them to one would pollute the signal.
     */
    skill?: Skill

    /**
     * Display metadata for surfaces that enumerate exercise types
     * (PracticePage cards). Card order = registration order in index.ts.
     */
    display?: {
        emoji: string
        description: string
        /** Only show for languages with a non-Latin script (e.g. script-reading). */
        nonLatinOnly?: boolean
    }
}

// ---------------------------------------------------------------------------
// Registry — internal Map + public API
// ---------------------------------------------------------------------------

const _registry = new Map<string, ExerciseTypeDef<unknown>>()

/** Register an exercise type. Call this once per type, at module load time. */
export function registerExerciseType<TItem>(def: ExerciseTypeDef<TItem>): void {
    if (_registry.has(def.id)) {
        console.warn(`[exerciseTypes] Duplicate registration ignored: "${def.id}"`)
        return
    }
    _registry.set(def.id, def as ExerciseTypeDef<unknown>)
}

/** Look up a registered exercise type by its id. Returns undefined if not found. */
export function getExerciseType(id: string): ExerciseTypeDef | undefined {
    return _registry.get(id)
}

/** All registered exercise types in registration order. */
export function getAllExerciseTypes(): ExerciseTypeDef[] {
    return [..._registry.values()]
}
