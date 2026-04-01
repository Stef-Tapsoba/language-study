// components/ExerciseShell.tsx — Generic shell for registry-based exercise types
//
// Reads the exercise type ID from the URL, looks it up in the registry,
// fetches content, and passes ExerciseComponentProps to the type's component.
//
// This is the single route handler for ALL exercises registered in
// src/exerciseTypes/index.ts — adding a new type requires zero changes here.

import { useState, useEffect, useCallback, Suspense } from "react"
import { useParams, Navigate, Link } from "react-router-dom"
import { useProgress } from "../context/ProgressContext"
import { completeLessonItem } from "../store/actions"
import { getExerciseType } from "../exerciseTypes/index"

export function ExerciseShell() {
    const { langId = "", exerciseTypeId = "" } = useParams()
    const { level: getLevel } = useProgress()
    const level = getLevel(langId)

    const def = getExerciseType(exerciseTypeId)

    const [items, setItems] = useState<unknown[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!def) return
        setLoading(true)
        setError(false)
        def.fetchItems({ langId, level })
            .then(result => { setItems(result); setLoading(false) })
            .catch(() => { setError(true); setLoading(false) })
    }, [def, langId, level])

    // Defined unconditionally to satisfy Rules of Hooks.
    // def is always set when onComplete is reachable (the Navigate guard below runs first).
    const onComplete = useCallback((itemId: string) => {
        if (!def) return
        completeLessonItem(langId, itemId, def.contentType).catch(console.error)
    }, [langId, def])

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
            <Component items={items} langId={langId} level={level} onComplete={onComplete} />
        </Suspense>
    )
}
