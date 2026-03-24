// pages/GrammarLessonPage.tsx — Full grammar lesson detail view
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { useProgress } from "../context/ProgressContext"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { SpeakButton } from "../components/SpeakButton"
import { VocabTooltip } from "../components/VocabTooltip"
import { resolvePrimary } from "../utils/localizedText"
import { renderExplanation } from "../utils/renderExplanation"
import { useVocabTooltip } from "../hooks/useVocabTooltip"

export function GrammarLessonPage() {
    const { langId = "", lessonId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const { level: getLevel, completed: getCompleted, markLessonComplete } = useProgress()
    const level = getLevel(langId)
    const completed = getCompleted(langId)
    const { activeWord, handleVocabClick, dismissTooltip } = useVocabTooltip(langId)

    if (!language || !mod) return null

    const lesson = mod.grammar.find(g => g.id === lessonId)

    if (!lesson) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title="Grammar" level={level} backTo={`/learn/${langId}/grammar`} />
                <main className="max-w-xl mx-auto px-4 py-16 text-center text-gray-400">
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="font-medium">Lesson not found</p>
                </main>
            </div>
        )
    }

    const isDone = completed.includes(lesson.id)
    const explanation = resolvePrimary(lesson.explanation, level)

    function handleMarkComplete() {
        if (!lesson) return
        markLessonComplete(langId, lesson.id)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={lesson.title} level={level} backTo={`/learn/${langId}/grammar`} />
            <main className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">

                {/* Title + level badge */}
                <div className="flex items-start justify-between gap-3">
                    <h1 className="text-2xl font-bold text-gray-900 leading-tight">{lesson.title}</h1>
                    <LevelBadge level={lesson.level} />
                </div>

                {/* Explanation */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Explanation</h2>
                    {renderExplanation(explanation, {
                        inlineVocab: lesson.inlineVocab,
                        onVocabClick: handleVocabClick,
                    })}
                </div>

                <VocabTooltip activeWord={activeWord} onDismiss={dismissTooltip} />

                {/* Examples */}
                {lesson.examples.length > 0 && (
                    <div className="bg-white rounded-2xl border border-gray-200 p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Examples</h2>
                        <div className="flex flex-col gap-3">
                            {lesson.examples.map((ex) => (
                                <div key={ex.native} className="bg-gray-50 rounded-xl p-4 flex items-start gap-2">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <p className="font-semibold text-gray-900">{ex.native}</p>
                                            <SpeakButton text={ex.speakText ?? ex.native} langId={langId} />
                                        </div>
                                        {ex.romanized && (
                                            <p className="text-xs text-indigo-500 mt-0.5">{ex.romanized}</p>
                                        )}
                                        <p className="text-sm text-gray-500 mt-0.5">{ex.translation}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Mark complete */}
                <button
                    onClick={isDone ? undefined : handleMarkComplete}
                    disabled={isDone}
                    className={`w-full font-semibold rounded-xl py-3 text-sm transition-colors border ${isDone
                        ? "border-green-300 text-green-700 bg-green-50 cursor-default"
                        : "border-green-600 bg-green-600 text-white hover:bg-green-700"
                    }`}
                >
                    {isDone ? "✓ Completed" : "Mark as complete"}
                </button>
            </main>
        </div>
    )
}
