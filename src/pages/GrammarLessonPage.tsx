// pages/GrammarLessonPage.tsx — Full grammar lesson detail view
import { useParams, useSearchParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getGrammarLesson } from "../data/repo"
import { useProgress } from "../context/ProgressContext"
import { NavBar } from "../components/NavBar"
import { MarkCompleteButton } from "../components/MarkCompleteButton"
import { LevelBadge } from "../components/LevelBadge"
import { SpeakButton } from "../components/SpeakButton"
import { VocabTooltip } from "../components/VocabTooltip"
import { resolvePrimary } from "../utils/localizedText"
import { renderExplanation, renderInline } from "../utils/renderExplanation"
import { useVocabTooltip } from "../hooks/useVocabTooltip"
import type { GrammarNote, Example } from "../types"

const NOTE_STYLES: Record<GrammarNote["type"], { wrapper: string; label: string; labelText: string }> = {
    tip: {
        wrapper: "bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800",
        label: "text-indigo-600 dark:text-indigo-400",
        labelText: "Tip",
    },
    warning: {
        wrapper: "bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800",
        label: "text-amber-600 dark:text-amber-400",
        labelText: "Note",
    },
    "forward-ref": {
        wrapper: "bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800",
        label: "text-purple-600 dark:text-purple-400",
        labelText: "Coming up",
    },
    culture: {
        wrapper: "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800",
        label: "text-green-600 dark:text-green-400",
        labelText: "Culture",
    },
}

export function GrammarLessonPage() {
    const { langId = "", lessonId = "" } = useParams()
    const [searchParams] = useSearchParams()
    // When navigated from a UnitPage, returnTo brings the back button back to that unit.
    const grammarBack = searchParams.get("returnTo") ?? `/learn/${langId}/grammar`
    const language = getLanguage(langId)
    const { level: getLevel, completed: getCompleted, markLessonComplete } = useProgress()
    const level = getLevel(langId)
    const completed = getCompleted(langId)
    const { activeWord, handleVocabClick, dismissTooltip } = useVocabTooltip(langId)

    if (!language) return null

    const lesson = getGrammarLesson(langId, lessonId)

    if (!lesson) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title="Grammar" level={level} backTo={grammarBack} />
                <main className="max-w-xl mx-auto px-4 py-16 text-center text-gray-400 dark:text-gray-500">
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="font-medium">Lesson not found</p>
                </main>
            </div>
        )
    }

    const isDone = completed.includes(lesson.id)
    const explanation = resolvePrimary(lesson.explanation, level)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={lesson.title} level={level} backTo={grammarBack}
                breadcrumb={`${language.name} › Grammar`} />
            <main className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">

                {/* Title + level badge */}
                <div className="flex items-start justify-between gap-3">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{lesson.title}</h1>
                    <LevelBadge level={lesson.level} />
                </div>

                {/* Explanation */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-white-500 mb-2">Explanation</h2>
                    {renderExplanation(explanation, {
                        inlineVocab: lesson.inlineVocab,
                        onVocabClick: handleVocabClick,
                    })}
                </div>

                <VocabTooltip activeWord={activeWord} onDismiss={dismissTooltip} />

                {/* Rules */}
                {lesson.rules && lesson.rules.length > 0 && (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-3">Rules</h2>
                        <div className="flex flex-col gap-3">
                            {lesson.rules.map((rule) => (
                                <div key={rule.condition} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-sm text-gray-500 dark:text-gray-400 flex-1">{rule.condition}</span>
                                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 shrink-0">{rule.result}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {rule.examples.map((ex) => (
                                            <span key={ex} className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-lg font-medium">{ex}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Notes */}
                {lesson.notes && lesson.notes.length > 0 && (
                    <div className="flex flex-col gap-2">
                        {lesson.notes.map((note) => {
                            const s = NOTE_STYLES[note.type]
                            return (
                                <div key={note.content} className={`rounded-xl p-4 ${s.wrapper}`}>
                                    <span className={`text-xs font-semibold uppercase tracking-wide ${s.label}`}>{s.labelText}</span>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                        {renderInline(note.content, { inlineVocab: lesson.inlineVocab, onVocabClick: handleVocabClick })}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* Fixed phrases */}
                {lesson.fixedPhrases && lesson.fixedPhrases.length > 0 && (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-3">Learn as chunks</h2>
                        <div className="flex flex-col gap-3">
                            {lesson.fixedPhrases.map((phrase) => (
                                <div key={phrase.native} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">{phrase.native}</p>
                                        <SpeakButton text={phrase.native} langId={langId} />
                                    </div>
                                    {phrase.romanized && (
                                        <p className="text-xs text-indigo-500 mt-0.5">{phrase.romanized}</p>
                                    )}
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                                        {renderInline(phrase.translation, { inlineVocab: lesson.inlineVocab, onVocabClick: handleVocabClick })}
                                    </p>
                                    {phrase.note && (
                                        <p className="text-xs text-gray-400 dark:text-gray-500 italic mt-1">{phrase.note}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Examples */}
                {lesson.examples.length > 0 && (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-3">Examples</h2>
                        <div className="flex flex-col gap-3">
                            {lesson.examples.map((ex) => {
                                if ("type" in ex && ex.type === "dialogue") {
                                    const [a, b] = ex.exchanges
                                    return (
                                        <div key={a.native} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden">
                                            {/* A turn — prompt */}
                                            <div className="px-4 pt-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">{a.native}</p>
                                                    <SpeakButton text={a.native} langId={langId} />
                                                </div>
                                                {a.romanized && <p className="text-xs text-indigo-400 mt-0.5">{a.romanized}</p>}
                                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{a.translation}</p>
                                            </div>
                                            {/* B turn — response */}
                                            <div className="px-4 pt-2 pb-4">
                                                <div className="flex items-center gap-2">
                                                    <p className="font-semibold text-gray-900 dark:text-gray-100">{b.native}</p>
                                                    <SpeakButton text={b.native} langId={langId} />
                                                </div>
                                                {b.romanized && <p className="text-xs text-indigo-500 mt-0.5">{b.romanized}</p>}
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{b.translation}</p>
                                            </div>
                                            {ex.annotation && (
                                                <p className="px-4 pb-3 text-xs text-gray-400 dark:text-gray-500 italic -mt-2">{ex.annotation}</p>
                                            )}
                                        </div>
                                    )
                                }
                                const sentence = ex as Example
                                return (
                                    <div key={sentence.native} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                                        <div className="flex items-center gap-2">
                                            <p className="font-semibold text-gray-900 dark:text-gray-100">{sentence.native}</p>
                                            <SpeakButton text={sentence.speakText ?? sentence.native} langId={langId} />
                                        </div>
                                        {sentence.romanized && (
                                            <p className="text-xs text-indigo-500 mt-0.5">{sentence.romanized}</p>
                                        )}
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{sentence.translation}</p>
                                        {sentence.annotation && (
                                            <p className="text-xs text-gray-400 dark:text-gray-500 italic mt-1">{sentence.annotation}</p>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Mark complete */}
                <MarkCompleteButton
                    done={isDone}
                    onClick={() => markLessonComplete(langId, lesson.id, "grammar")}
                    showDoneState
                />
            </main>
        </div>
    )
}
