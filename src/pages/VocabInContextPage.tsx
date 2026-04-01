// pages/VocabInContextPage.tsx — Vocabulary in Context exercise
//
// A reading passage excerpt is shown with one vocab word highlighted.
// The user selects the correct English meaning from 4 multiple-choice options.
// Accepts ExerciseComponentProps<ReadingPassage>.

import { useState, useMemo, useEffect } from "react"
import { NavBar } from "../components/NavBar"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { QuizCard } from "../components/QuizCard"
import { shuffle } from "../utils/arrayUtils"
import { getUI, fmt } from "../i18n"
import { useStatsStore } from "../store/useStatsStore"
import type { ExerciseComponentProps } from "../exerciseTypes/registry"
import type { ReadingPassage } from "../types"

// ── Types ─────────────────────────────────────────────────────────────────────

interface ContextItem {
    passageId: string
    passageTitle: string
    /** Passage excerpt showing the word in context */
    excerpt: string
    /** The highlighted word */
    word: string
    /** Correct English meaning */
    correct: string
    /** 4 options (shuffled, includes correct) */
    options: string[]
}

// ── Build items ───────────────────────────────────────────────────────────────

function buildContextItems(passages: ReadingPassage[]): ContextItem[] {
    const items: ContextItem[] = []

    // Collect all translations for distractors
    const allTranslations = passages.flatMap(p => p.vocabGloss.map(g => g.translation))

    for (const passage of passages) {
        const bodyTarget = passage.body.target ?? passage.body.native
        const sentences = bodyTarget.split(/[.!?。！？\n]+/).map(s => s.trim()).filter(Boolean)

        for (const gloss of passage.vocabGloss) {
            // Find a sentence containing the word
            const sentence = sentences.find(s =>
                s.toLowerCase().includes(gloss.word.toLowerCase())
            )
            if (!sentence) continue

            const distractors = shuffle(
                allTranslations.filter(t => t !== gloss.translation)
            ).slice(0, 3)

            if (distractors.length < 3) continue

            items.push({
                passageId: passage.id,
                passageTitle: passage.title,
                excerpt: sentence,
                word: gloss.word,
                correct: gloss.translation,
                options: shuffle([gloss.translation, ...distractors]),
            })
        }
    }

    return shuffle(items).slice(0, 10)
}

// ── Highlight component ───────────────────────────────────────────────────────

function HighlightedExcerpt({ excerpt, word }: Readonly<{ excerpt: string; word: string }>) {
    // Case-insensitive split on the word
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const regex = new RegExp(`(${escaped})`, "i")
    const parts = excerpt.split(regex)

    return (
        <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <mark key={i} className="bg-yellow-200 dark:bg-yellow-700 text-gray-900 dark:text-yellow-100 rounded px-0.5 font-semibold">
                        {part}
                    </mark>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </p>
    )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function VocabInContextPage({ items, langId, level, onComplete, onSessionDone }: Readonly<ExerciseComponentProps<ReadingPassage>>) {
    const ui = getUI(langId, level)

    const questions = useMemo(() => buildContextItems(items), [items])

    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [missed, setMissed] = useState<{ prompt: string; correct: string; yourAnswer: string }[]>([])
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)

    useEffect(() => {
        setSelected(null)
        setRevealed(false)
    }, [index])

    function handleRestart() {
        setIndex(0)
        setScore(0)
        setDone(false)
        setMissed([])
        setSelected(null)
        setRevealed(false)
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title="Vocabulary in Context" level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500 px-4 text-center">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">Not enough vocab in context at {level} yet</p>
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
                navTitle="Vocabulary in Context"
                ui={ui}
                onRestart={handleRestart}
                backTo={`/learn/${langId}`}
                missed={missed}
            />
        )
    }

    const q = questions[index]
    const isLast = index + 1 >= questions.length

    function handleSelect(opt: string) {
        if (revealed) return
        setSelected(opt)
        setRevealed(true)
        const isCorrect = opt === q.correct
        useStatsStore.getState().recordQuizAnswer(langId, isCorrect)
        if (isCorrect) {
            setScore(s => s + 1)
            onComplete(q.passageId)
        } else {
            setMissed(prev => [...prev, {
                prompt: `"${q.word}" in context`,
                correct: q.correct,
                yourAnswer: opt,
            }])
        }
    }

    function handleNext() {
        if (isLast) {
            onSessionDone()
            setDone(true)
        } else {
            setIndex(i => i + 1)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title="Vocabulary in Context" level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                {/* Progress */}
                <div className="w-full flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{fmt(ui.questionOf, { n: index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {score}</span>
                </div>
                <div className="w-full flex gap-1">
                    {questions.map((_, i) => {
                        let cls = "bg-gray-200 dark:bg-gray-600"
                        if (i < index) cls = "bg-indigo-500"
                        else if (i === index) cls = "bg-indigo-300"
                        return <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${cls}`} />
                    })}
                </div>

                {/* Instruction banner */}
                <div className="w-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl px-5 py-3">
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-medium uppercase tracking-wide mb-1">
                        What does the highlighted word mean?
                    </p>
                    <p className="text-sm text-amber-700 dark:text-amber-300">{q.passageTitle}</p>
                </div>

                {/* Passage excerpt */}
                <div className="w-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                    <HighlightedExcerpt excerpt={q.excerpt} word={q.word} />
                </div>

                {/* Options */}
                <QuizCard
                    question={`What does "${q.word}" mean here?`}
                    options={q.options}
                    selected={selected}
                    correct={revealed ? q.correct : null}
                    onSelect={handleSelect}
                />

                <p className="hidden sm:block text-xs text-gray-400 dark:text-gray-500">
                    1–4 to select · Enter to continue
                </p>

                {revealed && (
                    <button
                        onClick={handleNext}
                        className="w-full max-w-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 transition-colors"
                    >
                        {isLast ? ui.seeResults : ui.nextQuestion}
                    </button>
                )}
            </main>
        </div>
    )
}
