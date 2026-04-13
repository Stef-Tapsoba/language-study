// components/ExerciseShell.tsx — Generic shell for registry-based exercise types
//
// Reads the exercise type ID from the URL, looks it up in the registry,
// fetches content, and passes ExerciseComponentProps to the type's component.
//
// This is the single route handler for ALL exercises registered in
// src/exerciseTypes/index.ts — adding a new type requires zero changes here.

import { useState, useEffect, useCallback, useMemo, Suspense } from "react"
import { useParams, useSearchParams, Navigate, Link, useNavigate } from "react-router-dom"
import { useProgress } from "../context/ProgressContext"
import { completeLessonItem, completeDrillSession, completeReinforcement } from "../store/actions"
import { getExerciseType } from "../exerciseTypes/index"
import { getExerciseConfig, selectItems } from "../domain/exerciseConfig"
import { getReviewItemsForUnit } from "../data/repo"
import { getDueCards } from "../store/srs"
import type { VocabItem, CEFRLevel } from "../types"
import type { ReinforcementSection } from "../store/IProgressStorage"
import type { ExerciseContext } from "../domain/exerciseConfig"
import { logError } from "../utils/logger"
import { Skeleton } from "../components/ui/skeleton"

/**
 * Injects prior-unit SRS-due vocab items into an exercise pool.
 * Extracted from ExerciseShell to keep the component focused on React concerns.
 * Returns the original result array if injection is not applicable.
 */
function withCrossUnitReview(
    result: unknown[],
    langId: string,
    unitId: string,
    level: CEFRLevel,
    reviewSlots: number
): unknown[] {
    const priorItems = getReviewItemsForUnit(langId, unitId, level)
    if (priorItems.length === 0) return result
    const priorIds = priorItems.map(v => v.id)
    const { due, newCards } = getDueCards(langId, priorIds)
    const reviewIds = [...due, ...newCards].slice(0, reviewSlots)
    const reviewMap = new Map<string, VocabItem>(priorItems.map(v => [v.id, v]))
    const reviewVocab = reviewIds.map(id => reviewMap.get(id)).filter(Boolean) as unknown[]
    const unitIdSet = new Set(result.map((r: unknown) => (r as { id: string }).id))
    const fresh = reviewVocab.filter(r => !unitIdSet.has((r as { id: string }).id))
    return [...result, ...fresh]
}

export function ExerciseShell() {
    const { langId = "", exerciseTypeId = "" } = useParams()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const { level: getLevel, completed: getCompleted, mastered: getMastered } = useProgress()
    const level = getLevel(langId)
    const completedIds = getCompleted(langId)
    const mastered = getMastered(langId)

    // Reinforcement context — present when launched from a unit page
    const unitId   = searchParams.get("unitId")   ?? undefined
    const section  = searchParams.get("section")  as ReinforcementSection | null ?? undefined
    const lessonId = searchParams.get("lessonId") ?? undefined
    const returnTo = searchParams.get("returnTo") ?? undefined

    const def = getExerciseType(exerciseTypeId)

    // Derive context from URL params: unit exercises have a unitId, everything else is practice
    const context: ExerciseContext = unitId ? "unit" : "practice"

    // Cross-unit review slots — how many prior-unit SRS-due items to inject.
    // Requires >= 4 mastered units before any review is added (professor recommendation).
    const reviewSlots = mastered.length < 4 ? 0 : mastered.length < 10 ? 2 : 3

    const [rawItems, setRawItems] = useState<unknown[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!def) return
        let cancelled = false
        setLoading(true)
        setError(false)
        def.fetchItems({ langId, level, unitId, lessonId, context })
            .then(result => {
                if (cancelled) return
                // Cross-unit review: inject prior-unit SRS-due vocab items when in unit context.
                // Only for vocab exercises — injecting vocab into a grammar exercise makes no sense.
                const canInjectReview =
                    context === "unit" &&
                    unitId !== undefined &&
                    def.contentType === "vocab" &&
                    reviewSlots > 0

                setRawItems(
                    canInjectReview
                        ? withCrossUnitReview(result, langId, unitId!, level, reviewSlots)
                        : result
                )
                setLoading(false)
            })
            .catch(() => { if (!cancelled) { setError(true); setLoading(false) } })
        return () => { cancelled = true }
    }, [def, langId, level, unitId, lessonId, context, reviewSlots])

    // Compute context-aware config (sizing + tier ratios) from available item count
    const config = useMemo(
        () => getExerciseConfig(context, rawItems.length),
        [context, rawItems.length]
    )

    // Select and order items using SM-2 tier system:
    //   srs-due → weak (easeFactor<2.0) → new → random
    // In practice mode this also filters to items the learner has completed,
    // preventing a unit-1 learner from seeing the full level corpus.
    const items = useMemo(
        () => selectItems(rawItems as { id: string }[], config, langId, completedIds),
        [rawItems, config, langId, completedIds]
    )

    // Both callbacks defined unconditionally to satisfy Rules of Hooks.
    // def is always set when they are reachable (the Navigate guard below runs first).
    const onComplete = useCallback((itemId: string) => {
        if (!def) return
        completeLessonItem(langId, itemId, def.contentType).catch(err => logError("ExerciseShell", err))
    }, [langId, def])

    const onSessionDone = useCallback(() => {
        if (!def) return
        completeDrillSession(langId, def.sessionType).catch(err => logError("ExerciseShell", err))
        // If launched from a unit page, record reinforcement completion then navigate back
        if (unitId && section) {
            completeReinforcement(langId, unitId, section, lessonId).catch(err => logError("ExerciseShell", err))
        }
        if (returnTo) {
            navigate(decodeURIComponent(returnTo), { replace: true })
        }
    }, [langId, def, unitId, section, lessonId, returnTo, navigate])

    if (!def) return <Navigate to={`/learn/${langId}`} replace />

    const Component = def.component

    if (loading) {
        return (
            <div className="min-h-screen bg-surface-app">
                {/* NavBar skeleton */}
                <div className="bg-surface-card border-b border-border-subtle h-14 flex items-center px-4 gap-3">
                    <Skeleton className="h-8 w-8 rounded" />
                    <Skeleton className="h-4 w-36 rounded" />
                    <div className="flex-1" />
                    <Skeleton className="h-6 w-12 rounded-full" />
                </div>
                {/* Content skeleton — progress bar + two cards */}
                <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-3 w-20 rounded" />
                        <Skeleton className="h-3 w-16 rounded" />
                    </div>
                    <Skeleton className="h-2 w-full rounded-full" />
                    <Skeleton className="h-32 w-full rounded-2xl" />
                    <div className="flex flex-col gap-2">
                        {[1, 2, 3, 4].map(i => (
                            <Skeleton key={i} className="h-12 w-full rounded-xl" />
                        ))}
                    </div>
                </main>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-surface-app flex flex-col items-center justify-center gap-4 px-4">
                <p className="text-4xl">⚠️</p>
                <p className="text-base font-medium text-text-sec">
                    Failed to load exercise content.
                </p>
                <Link
                    to={`/learn/${langId}`}
                    className="text-sm text-grammar hover:underline"
                >
                    ← Back to dashboard
                </Link>
            </div>
        )
    }

    return (
        <Suspense fallback={
            <div className="min-h-screen bg-surface-app">
                <div className="bg-surface-card border-b border-border-subtle h-14 flex items-center px-4 gap-3">
                    <Skeleton className="h-8 w-8 rounded" />
                    <Skeleton className="h-4 w-36 rounded" />
                    <div className="flex-1" />
                    <Skeleton className="h-6 w-12 rounded-full" />
                </div>
                <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-4">
                    <Skeleton className="h-2 w-full rounded-full" />
                    <Skeleton className="h-32 w-full rounded-2xl" />
                    <div className="flex flex-col gap-2">
                        {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-12 w-full rounded-xl" />)}
                    </div>
                </main>
            </div>
        }>
            <Component items={items} langId={langId} level={level} config={config} onComplete={onComplete} onSessionDone={onSessionDone} />
        </Suspense>
    )
}
