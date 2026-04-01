// components/ExerciseShell.tsx — Generic shell for registry-based exercise types
//
// Reads the exercise type ID from the URL, looks it up in the registry,
// fetches content, and passes ExerciseComponentProps to the type's component.
//
// This is the single route handler for ALL exercises registered in
// src/exerciseTypes/index.ts — adding a new type requires zero changes here.

import { useState, useEffect, Suspense } from "react"
import { useParams, Navigate } from "react-router-dom"
import { useProgress } from "../context/ProgressContext"
import { completeLessonItem } from "../store/actions"
import { getExerciseType } from "../exerciseTypes/index"
import "../exerciseTypes/index"   // ensure all types are registered

export function ExerciseShell() {
    const { langId = "", exerciseTypeId = "" } = useParams()
    const { level: getLevel } = useProgress()
    const level = getLevel(langId)

    const def = getExerciseType(exerciseTypeId)

    const [items, setItems] = useState<unknown[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!def) return
        setLoading(true)
        def.fetchItems({ langId, level })
            .then(result => { setItems(result); setLoading(false) })
            .catch(() => setLoading(false))
    }, [def, langId, level])

    if (!def) return <Navigate to={`/learn/${langId}`} replace />

    const Component = def.component

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    function onComplete(itemId: string) {
        completeLessonItem(langId, itemId, def!.contentType).catch(console.error)
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
