// pages/SentenceScramblePage.tsx — Sentence Scramble exercise
//
// Given a grammar lesson example sentence, words are shuffled into clickable
// tokens. The user clicks tokens to reassemble the sentence in the correct order.
// English translation is shown as the prompt.
//
// Accepts ExerciseComponentProps<GrammarLesson> from the registry shell.

import { useState, useMemo, useEffect } from "react"
import { NavBar } from "../components/NavBar"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { SpeakButton } from "../components/SpeakButton"
import { Button } from "../components/ui/button"
import { playCorrect, playWrong } from "../utils/sound"
import { answerMatches } from "../utils/answerMatch"
import { shuffle } from "../utils/arrayUtils"
import { getUI, fmt } from "../i18n"
import { useStatsStore } from "../store/useStatsStore"
import type { ExerciseComponentProps } from "../exerciseTypes/registry"
import type { GrammarLesson } from "../types"
import { isDialogueExample } from "../types"

// ── Types ─────────────────────────────────────────────────────────────────────

interface ScrambleItem {
    lessonId: string
    lessonTitle: string
    prompt: string           // English translation of what to assemble
    correct: string          // correct native sentence (B turn for dialogues)
    romanized?: string
    langId: string
    /** Set for dialogue items — A's question shown as context above the prompt */
    context?: {
        native: string
        romanized?: string
        translation: string
    }
}

// ── Token segmentation ────────────────────────────────────────────────────────

/**
 * Split a sentence into word tokens, stripping leading/trailing punctuation
 * from each token so that punctuation doesn't reveal word position
 * (e.g. "estás?" → "estás", "¡Hola" → "Hola", "bien." → "bien").
 *
 * answerMatches(..., "strict") strips punctuation from both sides before
 * comparing, so assembled tokens still match the original sentence correctly.
 */
function tokenize(sentence: string): string[] {
    return sentence
        .split(/\s+/)
        .filter(Boolean)
        .map(t => t.replaceAll(/^[\p{P}\p{S}]+|[\p{P}\p{S}]+$/gu, ""))
        .filter(Boolean)
}

// ── Build items ───────────────────────────────────────────────────────────────

function exampleToItem(ex: GrammarLesson["examples"][number], lessonId: string, lessonTitle: string, langId: string): ScrambleItem | null {
    if (isDialogueExample(ex)) {
        const [a, b] = ex.exchanges
        if (tokenize(b.native).length < 3) return null
        return {
            lessonId, lessonTitle, langId,
            prompt: b.translation,
            correct: b.native,
            romanized: b.romanized,
            context: { native: a.native, romanized: a.romanized, translation: a.translation },
        }
    }
    if (tokenize(ex.native).length < 3) return null
    return { lessonId, lessonTitle, langId, prompt: ex.translation, correct: ex.native, romanized: ex.romanized }
}

function buildItems(lessons: GrammarLesson[], langId: string): ScrambleItem[] {
    const items: ScrambleItem[] = []
    for (const lesson of lessons) {
        for (const ex of lesson.examples) {
            const item = exampleToItem(ex, lesson.id, lesson.title, langId)
            if (item) items.push(item)
        }
    }
    return shuffle(items)
}

// ── Done screen wrapper ────────────────────────────────────────────────────────

interface DoneProps {
    score: number
    total: number
    level: import("../types").CEFRLevel
    langId: string
    onRestart: () => void
    missed: { prompt: string; correct: string; yourAnswer: string }[]
}

function SentenceScrambleDone({ score, total, level, langId, onRestart, missed }: Readonly<DoneProps>) {
    const ui = getUI(langId, level)
    return (
        <DrillDoneScreen
            score={score}
            total={total}
            level={level}
            navTitle="Sentence Scramble"
            ui={ui}
            onRestart={onRestart}
            backTo={`/learn/${langId}`}
            missed={missed}
        />
    )
}

// ── Token button ──────────────────────────────────────────────────────────────

interface TokenButtonProps {
    token: string
    onClick: () => void
    variant: "bank" | "selected"
    disabled?: boolean
}

function TokenButton({ token, onClick, variant, disabled = false }: Readonly<TokenButtonProps>) {
    const cls =
        variant === "bank"
            ? "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 text-gray-900 dark:text-gray-100 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
            : "bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-300 dark:border-indigo-500 text-indigo-900 dark:text-indigo-100 hover:bg-indigo-200"
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 ${cls}`}
        >
            {token}
        </button>
    )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function SentenceScramblePage({ items, langId, level, config, onComplete, onSessionDone }: Readonly<ExerciseComponentProps<GrammarLesson>>) {
    const ui = getUI(langId, level)

    // C-4: sessionKey busts the memo on restart so questions are reshuffled each play
    const [sessionKey, setSessionKey] = useState(0)
    // config.maxRounds represents lesson count, not example count — sentence scramble
    // builds items from lesson *examples*, so we cap by example count not lesson count.
    // Unit context: show up to 5 questions (the user just read the lesson).
    // Practice context: show up to 10.
    const SCRAMBLE_CAP = config.context === "unit" ? 5 : 10
    const questions = useMemo(
        () => buildItems(items, langId).slice(0, SCRAMBLE_CAP),
        [items, langId, SCRAMBLE_CAP, sessionKey]
    )

    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [missed, setMissed] = useState<{ prompt: string; correct: string; yourAnswer: string }[]>([])

    // Per-question state
    const [bankTokens, setBankTokens] = useState<string[]>([])
    const [assembled, setAssembled] = useState<string[]>([])
    const [submitted, setSubmitted] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    // Initialise tokens for the current question
    useEffect(() => {
        if (questions.length === 0) return
        const q = questions[index]
        setBankTokens(shuffle(tokenize(q.correct)))
        setAssembled([])
        setSubmitted(false)
        setIsCorrect(false)
    }, [index, questions])

    function handleRestart() {
        setSessionKey(k => k + 1)
        setIndex(0)
        setScore(0)
        setDone(false)
        setMissed([])
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title="Sentence Scramble" level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">Not enough grammar examples at {level} yet</p>
                </div>
            </div>
        )
    }

    if (done) {
        return (
            <SentenceScrambleDone
                score={score}
                total={questions.length}
                level={level}
                langId={langId}
                onRestart={handleRestart}
                missed={missed}
            />
        )
    }

    const q = questions[index]
    const isLast = index + 1 >= questions.length

    function pickFromBank(i: number) {
        if (submitted) return
        const token = bankTokens[i]
        setBankTokens(prev => prev.filter((_, idx) => idx !== i))
        setAssembled(prev => [...prev, token])
    }

    function returnToBank(i: number) {
        if (submitted) return
        const token = assembled[i]
        setAssembled(prev => prev.filter((_, idx) => idx !== i))
        setBankTokens(prev => [...prev, token])
    }

    function handleClear() {
        if (submitted) return
        setBankTokens(shuffle(tokenize(q.correct)))
        setAssembled([])
    }

    function handleSubmit() {
        if (submitted || assembled.length === 0) return
        const userAnswer = assembled.join(" ")
        const correct = answerMatches(userAnswer, q.correct, "strict")
        setIsCorrect(correct)
        setSubmitted(true)
        useStatsStore.getState().recordQuizAnswer(langId, correct)
        onComplete(q.lessonId)  // always mark attempted — score tracks correctness separately
        if (correct) {
            playCorrect()
            setScore(s => s + 1)
        } else {
            playWrong()
            setMissed(prev => [...prev, { prompt: q.prompt, correct: q.correct, yourAnswer: userAnswer }])
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
            <NavBar title="Sentence Scramble" level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
                {/* Progress */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{fmt(ui.questionOf, { n: index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {score}</span>
                </div>
                <div className="flex gap-1">
                    {questions.map((q, i) => {
                        let cls = "bg-gray-200 dark:bg-gray-600"
                        if (i < index) cls = "bg-indigo-500"
                        else if (i === index) cls = "bg-indigo-300"
                        return <div key={`${q.lessonId}:${q.correct}`} className={`h-1.5 flex-1 rounded-full transition-colors ${cls}`} />
                    })}
                </div>

                {/* Dialogue context — A's question shown when assembling B's response */}
                {q.context && (
                    <div className="bg-gray-100 dark:bg-gray-700/60 rounded-2xl px-5 py-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide mb-1">Context</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{q.context.native}</p>
                        {q.context.romanized && (
                            <p className="text-xs text-indigo-500 mt-0.5">{q.context.romanized}</p>
                        )}
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{q.context.translation}</p>
                    </div>
                )}

                {/* Prompt */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl px-5 py-4">
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-medium uppercase tracking-wide mb-1">
                        Arrange the words in the correct order
                    </p>
                    <p className="text-lg font-semibold text-amber-900 dark:text-amber-100">{q.prompt}</p>
                </div>

                {/* Assembly area */}
                <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-2xl px-4 py-4 min-h-[72px]">
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 font-medium uppercase tracking-wide">
                        Your sentence
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {assembled.length === 0 && (
                            <p className="text-sm text-gray-300 dark:text-gray-600 italic">
                                Click words below to build the sentence…
                            </p>
                        )}
                        {assembled.map((token, i) => (
                            <TokenButton
                                key={`${token}-${i}`}
                                token={token}
                                onClick={() => returnToBank(i)}
                                variant="selected"
                                disabled={submitted}
                            />
                        ))}
                    </div>
                </div>

                {/* Token bank */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {bankTokens.map((token, i) => (
                        <TokenButton
                            key={`${token}-${i}`}
                            token={token}
                            onClick={() => pickFromBank(i)}
                            variant="bank"
                            disabled={submitted}
                        />
                    ))}
                </div>

                {/* Feedback */}
                {submitted && (
                    <div className={`rounded-2xl border px-4 py-3 flex flex-col gap-1 ${isCorrect
                        ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                        : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                    }`}>
                        {isCorrect ? (
                            <p className="text-sm font-semibold text-green-800 dark:text-green-300">Correct!</p>
                        ) : (
                            <>
                                <p className="text-xs text-red-500 dark:text-red-400 font-medium">Correct answer:</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-semibold text-red-800 dark:text-red-300">{q.correct}</p>
                                    <SpeakButton text={q.correct} langId={langId} />
                                </div>
                                {q.romanized && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{q.romanized}</p>
                                )}
                            </>
                        )}
                    </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                    {!submitted && (
                        <Button
                            variant="outline"
                            onClick={handleClear}
                            disabled={assembled.length === 0}
                            className="flex-1 rounded-xl py-3 text-sm font-semibold"
                        >
                            Clear
                        </Button>
                    )}
                    {submitted ? (
                        <Button onClick={handleNext} className="w-full rounded-xl py-3 text-sm font-semibold">
                            {isLast ? ui.seeResults : ui.nextQuestion}
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            disabled={assembled.length === 0}
                            className="flex-[2] rounded-xl py-3 text-sm font-semibold"
                        >
                            Check
                        </Button>
                    )}
                </div>
                <p className="hidden sm:block text-xs text-gray-400 dark:text-gray-500 text-center">
                    Click a word to add it · click it again to remove
                </p>
            </main>
        </div>
    )
}
