// pages/GrammarPage.tsx — Grammar lesson browser for the current CEFR level
import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getGrammarForLevel } from "../data/repo"
import { getCurrentLevel, getCompletedLessons } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { GrammarLesson } from "../types"
import { getUI } from "../i18n"

function LessonCard({
    lesson,
    done,
    langId,
}: Readonly<{
    lesson: GrammarLesson
    done: boolean
    langId: string
}>) {
    return (
        <Link
            to={`/learn/${langId}/grammar/${lesson.id}`}
            className={`bg-white border rounded-2xl overflow-hidden transition-all block hover:shadow-sm ${done ? "border-green-300" : "border-gray-200 hover:border-indigo-300"}`}
        >
            <div className="px-5 py-4 flex items-center gap-3">
                <span className={`text-lg ${done ? "text-green-500" : "text-gray-300"}`} aria-hidden="true">
                    {done ? "✓" : "○"}
                </span>
                <span className="sr-only">{done ? "Completed" : "Not yet completed"}</span>
                <span className="flex-1 font-medium text-gray-900 truncate">{lesson.title}</span>
                <LevelBadge level={lesson.level} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-400"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    )
}

export function GrammarPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)
    const [completed] = useState(() => getCompletedLessons(langId))

    if (!language) return null

    const lessons = getGrammarForLevel(langId, level)
    const coming = lessons.length === 0

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar
                title={ui.sectionGrammar}
                level={level}
                backTo={`/learn/${langId}`}
            />
            <main className="max-w-3xl mx-auto px-4 py-6">
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-xl font-bold text-gray-900">{ui.sectionGrammar}</h1>
                    <LevelBadge level={level} />
                    <span className="text-sm text-gray-500 ml-1">
                        {completed.filter(id => lessons.some(l => l.id === id)).length} / {lessons.length} complete
                    </span>
                </div>

                {coming ? (
                    <div className="flex flex-col items-center text-center py-16 text-gray-400 gap-3">
                        <p className="text-4xl">🚧</p>
                        <p className="font-medium text-gray-600">{level} grammar is coming soon!</p>
                        <p className="text-sm text-gray-500">
                            In the meantime, practise what you know with the Grammar Drill or explore Reading.
                        </p>
                        <div className="flex flex-col gap-2 w-full max-w-xs mt-2">
                            <Link
                                to={`/learn/${langId}/grammar-drill`}
                                className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
                            >
                                Go to Grammar Drill
                            </Link>
                            <Link
                                to={`/learn/${langId}`}
                                className="block w-full text-center px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium"
                            >
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {lessons.map(lesson => (
                            <LessonCard
                                key={lesson.id}
                                lesson={lesson}
                                done={completed.includes(lesson.id)}
                                langId={langId}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
