// pages/GrammarPage.tsx
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel, getCompletedLessons, markLessonComplete } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { GrammarLesson } from "../types"

function LessonCard({
    lesson,
    done,
    langId,
    onComplete,
}: {
    lesson: GrammarLesson
    done: boolean
    langId: string
    onComplete: () => void
}) {
    const [open, setOpen] = useState(false)

    return (
        <div className={`bg-white border rounded-2xl overflow-hidden transition-all ${done ? "border-green-300" : "border-gray-200"}`}>
            {/* Header */}
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full px-5 py-4 flex items-center gap-3 text-left"
            >
                <span className={`text-lg ${done ? "text-green-500" : "text-gray-300"}`}>
                    {done ? "✓" : "○"}
                </span>
                <span className="flex-1 font-medium text-gray-900">{lesson.title}</span>
                <LevelBadge level={lesson.level} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Body */}
            {open && (
                <div className="px-5 pb-5 border-t border-gray-100">
                    <p className="text-sm text-gray-700 mt-4 leading-relaxed">{lesson.explanation}</p>

                    <div className="mt-4 flex flex-col gap-3">
                        {lesson.examples.map((ex, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-3">
                                <p className="font-medium text-gray-900">{ex.native}</p>
                                {ex.romanized && (
                                    <p className="text-xs text-indigo-500 mt-0.5">{ex.romanized}</p>
                                )}
                                <p className="text-sm text-gray-500 mt-0.5">{ex.translation}</p>
                            </div>
                        ))}
                    </div>

                    {!done && (
                        <button
                            onClick={() => { markLessonComplete(langId, lesson.id); onComplete() }}
                            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold
                                       rounded-xl py-2 text-sm transition-colors"
                        >
                            Mark as complete
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export function GrammarPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const [completed, setCompleted] = useState(() => getCompletedLessons(langId))

    if (!language || !mod) return null

    const lessons = mod.grammar.filter(g => g.level === level)
    const coming = lessons.length === 0

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar
                title="Grammar"
                level={level}
                backTo={`/learn/${langId}`}
            />
            <main className="max-w-3xl mx-auto px-4 py-6">
                <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Grammar</h2>
                    <LevelBadge level={level} />
                    <span className="text-sm text-gray-500 ml-1">
                        {completed.filter(id => lessons.some(l => l.id === id)).length} / {lessons.length} complete
                    </span>
                </div>

                {coming ? (
                    <div className="text-center py-16 text-gray-400">
                        <p className="text-4xl mb-3">🚧</p>
                        <p className="font-medium">Content coming soon for {level}</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {lessons.map(lesson => (
                            <LessonCard
                                key={lesson.id}
                                lesson={lesson}
                                done={completed.includes(lesson.id)}
                                langId={langId}
                                onComplete={() => setCompleted(getCompletedLessons(langId))}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
