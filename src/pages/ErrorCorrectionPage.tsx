// pages/ErrorCorrectionPage.tsx — Error Correction exercise
//
// A sentence with a deliberate grammar mistake is displayed. The user types the
// corrected sentence.
//
// Error items are derived on-the-fly from GrammarLesson examples — no new data
// files required. Each grammar lesson example gets one "broken" variant by
// applying a simple word-swap or deletion rule.
//
// Accepts ExerciseComponentProps<GrammarLesson>.

import { useState, useMemo, useEffect } from "react"
import { NavBar } from "../components/NavBar"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { SpeakButton } from "../components/SpeakButton"
import { answerMatches } from "../utils/answerMatch"
import { shuffle } from "../utils/arrayUtils"
import { getUI, fmt } from "../i18n"
import { completeDrillSession } from "../store/actions"
import { useStatsStore } from "../store/useStatsStore"
import type { ExerciseComponentProps } from "../exerciseTypes/registry"
import type { GrammarLesson } from "../types"

// ── Types ─────────────────────────────────────────────────────────────────────

interface ErrorItem {
    lessonId: string
    lessonTitle: string
    /** The sentence with the introduced error */
    errorSentence: string
    /** The correct sentence */
    correct: string
    /** Hint describing what kind of error was introduced */
    errorHint: string
    romanized?: string
}

type SubmitState = "idle" | "correct" | "wrong"

// ── Error generators ──────────────────────────────────────────────────────────

/**
 * Introduce a simple word-level error into a sentence.
 * Strategies (applied round-robin):
 *   0 — Swap two adjacent words
 *   1 — Duplicate a middle word
 *   2 — Delete a short connecting word (<= 3 chars)
 *   3 — Move the last word to the beginning
 */
function introduceError(
    sentence: string,
    strategy: number
): { errorSentence: string; errorHint: string } | null {
    const words = sentence.split(/(\s+)/).filter(Boolean)
    // Words only (not whitespace tokens)
    const wordIndices = words
        .map((w, i) => ({ w, i }))
        .filter(x => x.w.trim().length > 0)

    if (wordIndices.length < 3) return null

    const strat = strategy % 4

    if (strat === 0) {
        // Swap two adjacent words
        const idx = Math.floor(wordIndices.length / 2) - 1
        const a = wordIndices[idx].i
        const b = wordIndices[idx + 1].i
        const newWords = [...words]
        ;[newWords[a], newWords[b]] = [newWords[b], newWords[a]]
        return {
            errorSentence: newWords.join(""),
            errorHint: "Word order error",
        }
    }

    if (strat === 1) {
        // Duplicate a middle word
        const midIdx = wordIndices[Math.floor(wordIndices.length / 2)].i
        const newWords = [...words]
        newWords.splice(midIdx + 1, 0, words[midIdx], " ")
        return {
            errorSentence: newWords.join(""),
            errorHint: "Duplicate word",
        }
    }

    if (strat === 2) {
        // Delete a short word (preposition/particle/article <= 3 chars)
        const shortWords = wordIndices.filter(x => x.w.length <= 3 && x.w.length >= 1)
        if (shortWords.length === 0) return null
        const target = shortWords[Math.floor(shortWords.length / 2)]
        const newWords = [...words]
        // Remove the word and any preceding whitespace
        const removeAt = target.i
        if (removeAt > 0 && newWords[removeAt - 1].trim() === "") {
            newWords.splice(removeAt - 1, 2)
        } else {
            newWords.splice(removeAt, 1)
        }
        return {
            errorSentence: newWords.join(""),
            errorHint: "Missing word",
        }
    }

    // strat === 3: Move last word to beginning
    const lastWordIdx = wordIndices[wordIndices.length - 1].i
    const lastWord = words[lastWordIdx]
    const newWords = words.filter((_, i) => i !== lastWordIdx)
    // Strip trailing whitespace from end, prepend last word
    const trimmed = newWords.join("").replace(/\s+$/, "")
    return {
        errorSentence: `${lastWord} ${trimmed}`,
        errorHint: "Word in wrong position",
    }
}

// ── Build items ───────────────────────────────────────────────────────────────

function buildErrorItems(lessons: GrammarLesson[]): ErrorItem[] {
    const items: ErrorItem[] = []
    let strategyCounter = 0

    for (const lesson of lessons) {
        for (const ex of lesson.examples) {
            // Need at least 3 words for a meaningful error
            const wordCount = ex.native.trim().split(/\s+/).length
            if (wordCount < 3) continue

            const result = introduceError(ex.native, strategyCounter++)
            if (!result) continue

            // Sanity check: errored sentence should differ from correct
            if (result.errorSentence.trim() === ex.native.trim()) continue

            items.push({
                lessonId: lesson.id,
                lessonTitle: lesson.title,
                errorSentence: result.errorSentence,
                correct: ex.native,
                errorHint: result.errorHint,
                romanized: ex.romanized,
            })
        }
    }

    return shuffle(items).slice(0, 10)
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function ErrorCorrectionPage({ items, langId, level, onComplete }: Readonly<ExerciseComponentProps<GrammarLesson>>) {
    const ui = getUI(langId, level)

    const questions = useMemo(() => buildErrorItems(items), [items])

    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [missed, setMissed] = useState<{ prompt: string; correct: string; yourAnswer: string }[]>([])

    const [input, setInput] = useState("")
    const [submitState, setSubmitState] = useState<SubmitState>("idle")

    useEffect(() => {
        setInput("")
        setSubmitState("idle")
    }, [index])

    function handleRestart() {
        setIndex(0)
        setScore(0)
        setDone(false)
        setMissed([])
        setInput("")
        setSubmitState("idle")
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title="Error Correction" level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500 px-4 text-center">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">Not enough grammar examples at {level} yet</p>
                </div>
            </div>
        )
    }

    if (done) {
        return (
            <DrillDoneScreen
                score={score}
                total={questions.length}
                level={level}
                navTitle="Error Correction"
                ui={ui}
                onRestart={handleRestart}
                backTo={`/learn/${langId}`}
                missed={missed}
            />
        )
    }

    const q = questions[index]
    const isLast = index + 1 >= questions.length

    function handleSubmit() {
        if (submitState !== "idle" || !input.trim()) return
        const correct = answerMatches(input, q.correct, "strict")
        setSubmitState(correct ? "correct" : "wrong")
        useStatsStore.getState().recordQuizAnswer(langId, correct)
        if (correct) {
            setScore(s => s + 1)
            onComplete(q.lessonId)
        } else {
            setMissed(prev => [...prev, {
                prompt: q.errorSentence,
                correct: q.correct,
                yourAnswer: input.trim(),
            }])
        }
    }

    function handleNext() {
        if (isLast) {
            completeDrillSession(langId, "grammar").catch(console.error)
            setDone(true)
        } else {
            setIndex(i => i + 1)
        }
    }

    const inputCls: Record<SubmitState, string> = {
        idle: "border-gray-300 dark:border-gray-600 focus:border-indigo-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
        correct: "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100",
        wrong: "border-red-400 bg-red-50 dark:bg-red-900/20 text-gray-500 dark:text-gray-400",
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title="Error Correction" level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
                {/* Progress */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{fmt(ui.questionOf, { n: index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {score}</span>
                </div>
                <div className="flex gap-1">
                    {questions.map((_, i) => {
                        let cls = "bg-gray-200 dark:bg-gray-600"
                        if (i < index) cls = "bg-indigo-500"
                        else if (i === index) cls = "bg-indigo-300"
                        return <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${cls}`} />
                    })}
                </div>

                {/* Instruction banner */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl px-5 py-4">
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-medium uppercase tracking-wide mb-1">
                        Fix the error · {q.lessonTitle}
                    </p>
                    <p className="text-xs text-amber-500 dark:text-amber-500 mb-2">
                        Hint: {q.errorHint}
                    </p>
                    {/* Error sentence with strikethrough-style visual cue */}
                    <div className="flex items-start gap-2">
                        <p className="text-lg font-semibold text-amber-900 dark:text-amber-100 flex-1">
                            {q.errorSentence}
                        </p>
                    </div>
                </div>

                {/* Input */}
                <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 font-medium mb-1.5">
                        Type the corrected sentence:
                    </label>
                    <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                        <input
                            autoFocus
                            aria-label="Type the corrected sentence"
                            value={input}
                            onChange={e => { if (submitState === "idle") setInput(e.target.value) }}
                            onKeyDown={e => {
                                if (e.key === "Enter" && submitState !== "idle") {
                                    e.preventDefault()
                                    handleNext()
                                }
                            }}
                            placeholder="Type the corrected sentence…"
                            readOnly={submitState !== "idle"}
                            className={`w-full rounded-xl border-2 px-4 py-3 text-sm focus:outline-none transition-colors ${inputCls[submitState]}`}
                        />
                    </form>
                </div>

                {/* Feedback */}
                {submitState === "correct" && (
                    <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl px-4 py-2.5">
                        <span className="text-green-600">✓</span>
                        <p className="text-sm font-medium text-green-800 dark:text-green-300">Correct!</p>
                        <SpeakButton text={q.correct} langId={langId} />
                    </div>
                )}
                {submitState === "wrong" && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl px-4 py-3 flex flex-col gap-1">
                        <p className="text-xs text-red-500 dark:text-red-400 font-medium">Correct sentence:</p>
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-red-800 dark:text-red-300">{q.correct}</p>
                            <SpeakButton text={q.correct} langId={langId} />
                        </div>
                        {q.romanized && (
                            <p className="text-xs text-gray-500 dark:text-gray-400">{q.romanized}</p>
                        )}
                    </div>
                )}

                {/* Actions */}
                {submitState === "idle" ? (
                    <button
                        onClick={handleSubmit}
                        disabled={!input.trim()}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold rounded-xl py-3 text-sm transition-colors"
                    >
                        Check
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 text-sm transition-colors"
                    >
                        {isLast ? ui.seeResults : ui.nextQuestion}
                    </button>
                )}

                <p className="hidden sm:block text-xs text-gray-400 dark:text-gray-500 text-center">
                    Enter to check · Enter again to continue
                </p>
            </main>
        </div>
    )
}
