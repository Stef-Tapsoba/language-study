// pages/DictationPage.tsx — Dictation exercise
//
// TTS plays a listening exercise script. After hearing the audio at least once,
// a text input appears and the user types what they heard. Evaluated verbatim
// (dictation mode).
// Accepts ExerciseComponentProps<ListeningExercise>.

import { useState, useMemo, useEffect } from "react"
import { NavBar } from "../components/NavBar"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { ListeningPlayer } from "../components/ListeningPlayer"
import { Button } from "../components/ui/button"
import { answerMatches } from "../utils/answerMatch"
import { shuffle } from "../utils/arrayUtils"
import { getUI, fmt } from "../i18n"
import { useStatsStore } from "../store/useStatsStore"
import type { ExerciseComponentProps } from "../exerciseTypes/registry"
import type { ListeningExercise } from "../types"

// ── Types ─────────────────────────────────────────────────────────────────────

type SubmitState = "idle" | "correct" | "wrong"

// ── Build items ───────────────────────────────────────────────────────────────

/**
 * For dictation we want short, self-contained sentences.
 * We take the script, split on sentence-ending punctuation, and use each
 * sentence as a separate dictation item. Fall back to using the full script
 * when there is only one sentence.
 */
function buildDictationItems(exercises: ListeningExercise[]): { id: string; title: string; sentence: string; translation: string }[] {
    const items: { id: string; title: string; sentence: string; translation: string }[] = []

    for (const ex of exercises) {
        const sentences = ex.script
            .split(/(?<=[.!?。！？])\s+/)
            .map(s => s.trim())
            .filter(s => s.length > 4)

        if (sentences.length <= 1) {
            items.push({
                id: ex.id,
                title: ex.title,
                sentence: ex.script,
                translation: ex.translation,
            })
        } else {
            sentences.slice(0, 3).forEach((sentence, i) => {
                items.push({
                    id: `${ex.id}-s${i}`,
                    title: ex.title,
                    sentence,
                    translation: "",
                })
            })
        }
    }

    return shuffle(items).slice(0, 8)
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function DictationPage({ items, langId, level, config: _config, onComplete, onSessionDone }: Readonly<ExerciseComponentProps<ListeningExercise>>) {
    const ui = getUI(langId, level)

    const questions = useMemo(() => buildDictationItems(items), [items])

    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [missed, setMissed] = useState<{ prompt: string; correct: string; yourAnswer: string }[]>([])

    const [hasPlayed, setHasPlayed] = useState(false)
    const [input, setInput] = useState("")
    const [submitState, setSubmitState] = useState<SubmitState>("idle")

    // Reset per-question state when question changes
    useEffect(() => {
        setHasPlayed(false)
        setInput("")
        setSubmitState("idle")
    }, [index])

    function handleRestart() {
        setIndex(0)
        setScore(0)
        setDone(false)
        setMissed([])
        setHasPlayed(false)
        setInput("")
        setSubmitState("idle")
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Dictation" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-text-ter">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">No listening exercises at {level} yet</p>
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
                navTitle="Dictation"
                ui={ui}
                onRestart={handleRestart}
                backTo="back" fallbackRoute={`/learn/${langId}`}
                missed={missed}
            />
        )
    }

    const q = questions[index]
    const isLast = index + 1 >= questions.length

    function handleSubmit() {
        if (submitState !== "idle" || !input.trim()) return
        const correct = answerMatches(input, q.sentence, "dictation")
        setSubmitState(correct ? "correct" : "wrong")
        useStatsStore.getState().recordQuizAnswer(langId, correct)
        if (correct) {
            setScore(s => s + 1)
            // Base exercise id (strip the -s0, -s1 suffix if present)
            const baseId = q.id.replace(/-s\d+$/, "")
            onComplete(baseId)
        } else {
            setMissed(prev => [...prev, {
                prompt: "What did you hear?",
                correct: q.sentence,
                yourAnswer: input.trim(),
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

    const inputCls: Record<SubmitState, string> = {
        idle: "border-border-default focus:border-grammar bg-surface-card text-text-pri",
        correct: "border-grammar bg-grammar-surface text-text-pri",
        wrong: "border-verbs bg-verbs-surface text-text-sec",
    }

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title="Dictation" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
                {/* Progress */}
                <div className="flex items-center justify-between text-sm text-text-sec">
                    <span>{fmt(ui.questionOf, { n: index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {score}</span>
                </div>
                <div className="flex gap-1">
                    {questions.map((_, i) => {
                        let cls = "bg-border-default"
                        if (i < index) cls = "bg-grammar"
                        else if (i === index) cls = "bg-grammar opacity-40"
                        return <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${cls}`} />
                    })}
                </div>

                {/* Instruction banner */}
                <div className="bg-grammar-surface border border-grammar-border rounded-2xl px-5 py-4 text-center">
                    <p className="text-sm font-semibold text-grammar">
                        {q.title}
                    </p>
                    <p className="text-xs text-grammar mt-1">
                        {hasPlayed ? "Type what you heard" : "Listen to the audio, then type what you hear"}
                    </p>
                </div>

                {/* Player */}
                <ListeningPlayer
                    script={q.sentence}
                    langId={langId}
                    ui={ui}
                    onEnded={() => setHasPlayed(true)}
                />

                {/* Input area — shown after first play */}
                {hasPlayed && (
                    <>
                        <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                            <input
                                autoFocus
                                aria-label="Type what you heard"
                                value={input}
                                onChange={e => { if (submitState === "idle") setInput(e.target.value) }}
                                onKeyDown={e => {
                                    if (e.key === "Enter" && submitState !== "idle") {
                                        e.preventDefault()
                                        handleNext()
                                    }
                                }}
                                placeholder="Type what you heard…"
                                readOnly={submitState !== "idle"}
                                className={`w-full rounded-xl border-2 px-4 py-3 text-sm focus:outline-none transition-colors ${inputCls[submitState]}`}
                            />
                        </form>

                        {/* Feedback */}
                        {submitState === "correct" && (
                            <div className="flex items-center gap-2 bg-grammar-surface border border-grammar-border rounded-xl px-4 py-2.5">
                                <span className="text-grammar">✓</span>
                                <p className="text-sm font-medium text-grammar">Correct!</p>
                            </div>
                        )}
                        {submitState === "wrong" && (
                            <div className="bg-verbs-surface border border-verbs-border rounded-xl px-4 py-3 flex flex-col gap-1">
                                <p className="text-xs text-verbs font-medium">Correct transcript:</p>
                                <p className="text-sm font-semibold text-verbs">{q.sentence}</p>
                            </div>
                        )}

                        {/* Actions */}
                        {submitState === "idle" ? (
                            <Button
                                onClick={handleSubmit}
                                disabled={!input.trim()}
                                className="w-full rounded-xl py-3"
                            >
                                Check
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                className="w-full rounded-xl py-3"
                            >
                                {isLast ? ui.seeResults : ui.nextQuestion}
                            </Button>
                        )}

                        <p className="hidden sm:block text-xs text-text-ter text-center">
                            Enter to check · Enter again to continue
                        </p>
                    </>
                )}

                {!hasPlayed && (
                    <p className="text-sm text-center text-text-ter">
                        Play the audio first to reveal the input field.
                    </p>
                )}
            </main>
        </div>
    )
}
