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
import type { ReinforcementSection } from "../store/IProgressStorage"

export function ExerciseShell() {
    const { langId = "", exerciseTypeId = "" } = useParams()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const { level: getLevel, completed: getCompleted } = useProgress()
    const level = getLevel(langId)
    const completedIds = getCompleted(langId)

    // Reinforcement context — present when launched from a unit page
    const unitId   = searchParams.get("unitId")   ?? undefined
    const section  = searchParams.get("section")  as ReinforcementSection | null ?? undefined
    const lessonId = searchParams.get("lessonId") ?? undefined
    const returnTo = searchParams.get("returnTo") ?? undefined

    const def = getExerciseType(exerciseTypeId)

    const [rawItems, setRawItems] = useState<unknown[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!def) return
        setLoading(true)
        setError(false)
        def.fetchItems({ langId, level, unitId })
            .then(result => { setRawItems(result); setLoading(false) })
            .catch(() => { setError(true); setLoading(false) })
    }, [def, langId, level, unitId])

    // In Practice-tab mode (no unitId), only show items the learner has already
    // encountered — prevents A1-unit-1 learners from seeing the full level corpus.
    // Falls through to the full set if none have been completed yet (new user).
    const items = useMemo(() => {
        if (unitId || completedIds.length === 0) return rawItems
        const seen = rawItems.filter((item: unknown) => {
            const id = (item as { id?: string }).id
            return id !== undefined && completedIds.includes(id)
        })
        return seen.length > 0 ? seen : rawItems
    }, [rawItems, completedIds, unitId])

    // Both callbacks defined unconditionally to satisfy Rules of Hooks.
    // def is always set when they are reachable (the Navigate guard below runs first).
    const onComplete = useCallback((itemId: string) => {
        if (!def) return
        completeLessonItem(langId, itemId, def.contentType).catch(console.error)
    }, [langId, def])

    const onSessionDone = useCallback(() => {
        if (!def) return
        completeDrillSession(langId, def.sessionType).catch(console.error)
        // If launched from a unit page, record reinforcement completion then navigate back
        if (unitId && section) {
            completeReinforcement(langId, unitId, section, lessonId).catch(console.error)
        }
        if (returnTo) {
            navigate(decodeURIComponent(returnTo), { replace: true })
        }
    }, [langId, def, unitId, section, lessonId, returnTo, navigate])

    if (!def) return <Navigate to={`/learn/${langId}`} replace />

    const Component = def.component

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center gap-4 px-4">
                <p className="text-4xl">⚠️</p>
                <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                    Failed to load exercise content.
                </p>
                <Link
                    to={`/learn/${langId}`}
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                    ← Back to dashboard
                </Link>
            </div>
        )
    }

    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <Component items={items} langId={langId} level={level} onComplete={onComplete} onSessionDone={onSessionDone} />
        </Suspense>
    )
}
