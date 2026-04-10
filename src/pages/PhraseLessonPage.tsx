// pages/PhraseLessonPage.tsx — Phrase-first lesson view (scene setter → phrase table → mini-dialogue → quiz → speak-aloud)
import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { useProgress } from "../context/ProgressContext"
import { NavBar } from "../components/NavBar"
import { MarkCompleteButton } from "../components/MarkCompleteButton"
import { LevelBadge } from "../components/LevelBadge"
import { SpeakButton } from "../components/SpeakButton"

export function PhraseLessonPage() {
    const { langId = "", phraseLessonId = "" } = useParams()
    const [searchParams] = useSearchParams()
    const returnTo = searchParams.get("returnTo") ?? `/learn/${langId}`
    const language = getLanguage(langId)
    const { level: getLevel, completed: getCompleted, markLessonComplete } = useProgress()
    const level = getLevel(langId)
    const completed = getCompleted(langId)

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

    if (!language) return null

    const lesson = getModule(langId)?.phraseLessons?.find(p => p.id === phraseLessonId)

    if (!lesson) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Phrases" level={level} backTo={returnTo} />
                <main className="max-w-xl mx-auto px-4 py-16 text-center text-text-ter">
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="font-medium">Lesson not found</p>
                </main>
            </div>
        )
    }

    const isDone = completed.includes(lesson.id)

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title={lesson.title} level={level} backTo={returnTo}
                breadcrumb={`${language.name} › Phrases`} />
            <main className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">

                {/* Title + level badge */}
                <div className="flex items-start justify-between gap-3">
                    <h1 className="text-2xl font-bold text-text-pri leading-tight">{lesson.title}</h1>
                    <LevelBadge level={lesson.level} />
                </div>

                {/* Scene setter */}
                {lesson.sceneSetter && (
                    <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                        <p className="text-sm text-text-sec italic">{lesson.sceneSetter}</p>
                    </div>
                )}

                {/* Phrase table */}
                <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-text-ter mb-3">Key phrases</h2>
                    <div className="flex flex-col gap-3">
                        {lesson.phrases.map((phrase) => (
                            <div key={phrase.native} className="bg-surface-elevated rounded-xl p-4">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base font-bold text-text-pri">{phrase.native}</span>
                                            <SpeakButton text={phrase.native} langId={langId} />
                                        </div>
                                        {phrase.pronunciation && (
                                            <p className="text-xs text-text-ter mt-0.5">{phrase.pronunciation}</p>
                                        )}
                                        <p className="text-sm text-text-sec mt-1">{phrase.translation}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-text-ter border-t border-border-subtle pt-2 mt-2">{phrase.context}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mini-dialogue */}
                {lesson.miniDialogue && lesson.miniDialogue.length > 0 && (
                    <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-wide text-text-ter mb-3">Example conversation</h2>
                        <div className="flex flex-col gap-2">
                            {lesson.miniDialogue.map((line, i) => {
                                const isA = line.speaker === "A"
                                return (
                                    // index key is acceptable here — mini-dialogue lines have no stable id
                                    // and are never reordered
                                    <div key={`${line.speaker}-${i}`} className={`flex gap-3 ${isA ? "" : "flex-row-reverse"}`}>
                                        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                                            ${isA ? "bg-grammar-surface text-grammar" : "bg-vocab-surface text-vocab"}`}>
                                            {line.speaker}
                                        </div>
                                        <div className={`flex-1 ${isA ? "" : "text-right"}`}>
                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                <span className="text-sm font-medium text-text-pri">{line.native}</span>
                                                <SpeakButton text={line.native} langId={langId} />
                                            </div>
                                            {line.romanized && (
                                                <p className="text-xs text-text-ter">{line.romanized}</p>
                                            )}
                                            {line.translation && (
                                                <p className="text-xs text-text-sec mt-0.5">{line.translation}</p>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Practice question */}
                {lesson.practiceQuestion && (() => {
                    const q = lesson.practiceQuestion
                    return (
                        <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                            <h2 className="text-xs font-semibold uppercase tracking-wide text-text-ter mb-3">Quick check</h2>
                            <p className="text-sm font-medium text-text-pri mb-3">{q.question}</p>
                            <div className="flex flex-col gap-2">
                                {q.options.map((option, i) => {
                                    const isCorrect = i === q.correctIndex
                                    const isSelected = selectedAnswer === i
                                    const hasAnswered = selectedAnswer !== null
                                    let bg = "bg-surface-elevated border border-border-subtle"
                                    if (hasAnswered && isCorrect) bg = "bg-grammar-surface border border-grammar-border"
                                    else if (hasAnswered && isSelected && !isCorrect) bg = "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                                    return (
                                        <button
                                            key={option}
                                            disabled={hasAnswered}
                                            onClick={() => setSelectedAnswer(i)}
                                            className={`w-full text-left rounded-xl p-3 text-sm transition-colors ${bg} ${hasAnswered ? "cursor-default" : "hover:bg-surface-hover cursor-pointer"}`}
                                        >
                                            {option}
                                            {hasAnswered && isCorrect && <span className="ml-2 text-grammar font-semibold">✓</span>}
                                            {hasAnswered && isSelected && !isCorrect && <span className="ml-2 text-red-500 font-semibold">✗</span>}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })()}

                {/* Speak-aloud */}
                {lesson.speakAloud && (
                    <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-wide text-text-ter mb-2">Say it out loud</h2>
                        <p className="text-sm text-text-sec">{lesson.speakAloud}</p>
                    </div>
                )}

                {/* Mark complete */}
                <MarkCompleteButton
                    done={isDone}
                    onClick={() => { markLessonComplete(langId, lesson.id, "grammar").catch(() => {}) }}
                />

            </main>
        </div>
    )
}
