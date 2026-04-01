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
// EXISTING EXERCISES
// ------------------
// Flashcards, VerbDrill, GrammarDrill, Reading, Listening, Culture are NOT
// registered here yet — they predate the registry and continue working via
// their own pages. Migrate them incrementally if/when needed. Register all
// NEW exercise types here from the start.

import type { LazyExoticComponent, ComponentType } from "react"
import type { CEFRLevel } from "../types"
import type { MatchMode } from "../utils/answerMatch"
import type { ContentType } from "../store/IProgressStorage"

// ---------------------------------------------------------------------------
// Params passed to fetchItems
// ---------------------------------------------------------------------------

export interface ExerciseFetchParams {
    langId: string
    level: CEFRLevel
    /** Optionally scope to a specific unit's content */
    unitId?: string
}

// ---------------------------------------------------------------------------
// Props every exercise component receives from the shell
// ---------------------------------------------------------------------------

export interface ExerciseComponentProps<TItem = unknown> {
    /** Items returned by fetchItems — typed by the specific exercise definition */
    items: TItem[]
    langId: string
    level: CEFRLevel
    /**
     * Call when the user successfully completes one item.
     * The shell calls markLessonComplete(langId, itemId, contentType) via actions.ts.
     */
    onComplete: (itemId: string) => void
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
