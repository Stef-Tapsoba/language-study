// pages/ClozePage.tsx — Cloze from Reading exercise
//
// A sentence from a reading passage is shown with one vocab-gloss word blanked.
// The user types the missing target-language word.
// Accepts ExerciseComponentProps<ReadingPassage>.

import { useState, useMemo, useEffect } from "react"
import { NavBar } from "../components/NavBar"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { SpeakButton } from "../components/SpeakButton"
import { answerMatches } from "../utils/answerMatch"
import { shuffle } from "../utils/arrayUtils"
import { getUI, fmt } from "../i18n"
import { useStatsStore } from "../store/useStatsStore"
import type { ExerciseComponentProps } from "../exerciseTypes/registry"
import type { ReadingPassage } from "../types"

// ── Types ─────────────────────────────────────────────────────────────────────

interface ClozeItem {
    passageId: string
    passageTitle: string
    /** Full sentence with the target word replaced by _____ */
    sentenceWithBlank: string
    /** The complete original sentence (for TTS and display after reveal) */
    fullSentence: string
    /** English translation of the sentence — shown as context so the user knows what to fill in */
    sentenceTranslation: string
    /** The word to type */
    targetWord: string
    /** English meaning of the target word — shown as a secondary hint */
    targetTranslation: string
    /** Romanized reading of targetWord if available */
    romanized?: string
}

type SubmitState = "idle" | "correct" | "wrong"

// ── Build items ───────────────────────────────────────────────────────────────

function splitSentences(text: string): string[] {
    return text.split(/[.!?。！？\n]+/).map(s => s.trim()).filter(Boolean)
}

function buildClozeItems(passages: ReadingPassage[]): ClozeItem[] {
    const items: ClozeItem[] = []

    for (const passage of passages) {
        const bodyTarget = passage.body.target ?? passage.body.native
        const targetSentences = splitSentences(bodyTarget)
        const nativeSentences = splitSentences(passage.body.native)

        for (const gloss of passage.vocabGloss) {
            // Find the index of the sentence containing the gloss word
            const sentenceIdx = targetSentences.findIndex(s =>
                s.toLowerCase().includes(gloss.word.toLowerCase())
            )
            if (sentenceIdx < 0) continue

            const sentence = targetSentences[sentenceIdx]
            // Use the parallel native sentence as translation context; fall back to passage title
            const sentenceTranslation = nativeSentences[sentenceIdx] ?? passage.title

            // Replace the first occurrence of the word in the sentence.
            // /i flag: helps when the gloss capitalisation differs from the sentence
            // (e.g. sentence-initial position). For CJK scripts the flag is a no-op
            // (no case concept). Known limitation: for CJK the regex may match inside
            // a longer compound rather than at a true word boundary — acceptable for
            // now since the vocabGloss words are authored to appear verbatim in the
            // sentence body.
            const escaped = gloss.word.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`)
            const regex = new RegExp(escaped, "i")
            const sentenceWithBlank = sentence.replace(regex, "_____")
            if (sentenceWithBlank === sentence) continue // no replacement happened

            items.push({
                passageId: passage.id,
                passageTitle: passage.title,
                sentenceWithBlank,
                fullSentence: sentence,
                sentenceTranslation,
                targetWord: gloss.word,
                targetTranslation: gloss.translation,
                romanized: gloss.romanized,
            })
        }
    }

    return shuffle(items).slice(0, 10)
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function ClozePage({ items, langId, level, config: _config, onComplete, onSessionDone }: Readonly<ExerciseComponentProps<ReadingPassage>>) {
    const ui = getUI(langId, level)

    // C-4: sessionKey busts the memo on restart so questions are reshuffled each play
    const [sessionKey, setSessionKey] = useState(0)
    const questions = useMemo(() => buildClozeItems(items), [items, sessionKey])

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
        setSessionKey(k => k + 1)
        setIndex(0)
        setScore(0)
        setDone(false)
        setMissed([])
        setInput("")
        setSubmitState("idle")
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Cloze" level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-text-ter">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">Not enough reading passages at {level} yet</p>
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
                navTitle="Cloze"
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
        const correct = answerMatches(input, q.targetWord, "strict")
        setSubmitState(correct ? "correct" : "wrong")
        useStatsStore.getState().recordQuizAnswer(langId, correct)
        if (correct) {
            setScore(s => s + 1)
            onComplete(q.passageId)
        } else {
            setMissed(prev => [...prev, {
                prompt: q.sentenceWithBlank,
                correct: q.targetWord,
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
        wrong: "border-verbs bg-verbs-surface text-text-sec line-through",
    }

    // Build display sentence with blank highlighted
    const parts = q.sentenceWithBlank.split("_____")

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title="Cloze" level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
                {/* Progress */}
                <div className="flex items-center justify-between text-sm text-text-sec">
                    <span>{fmt(ui.questionOf, { n: index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {score}</span>
                </div>
                <div className="flex gap-1">
                    {questions.map((q, i) => {
                        let cls = "bg-border-default"
                        if (i < index) cls = "bg-indigo-500"
                        else if (i === index) cls = "bg-indigo-300"
                        return <div key={`${q.passageId}:${q.targetWord}`} className={`h-1.5 flex-1 rounded-full transition-colors ${cls}`} />
                    })}
                </div>

                {/* Context: English sentence translation */}
                <div className="bg-reading-surface border border-reading-border rounded-2xl px-5 py-4">
                    <p className="text-xs text-reading font-medium uppercase tracking-wide mb-1">
                        English — from "{q.passageTitle}"
                    </p>
                    <p className="text-base text-text-pri leading-relaxed">
                        {q.sentenceTranslation}
                    </p>
                    <p className="text-xs text-reading mt-2">
                        Missing word meaning: <span className="font-semibold">{q.targetTranslation}</span>
                    </p>
                </div>

                {/* Target sentence with blank */}
                <div className="bg-vocab-surface border border-vocab-border rounded-2xl px-5 py-4">
                    <p className="text-xs text-vocab font-medium uppercase tracking-wide mb-2">
                        Fill in the missing word
                    </p>
                    <p className="text-base font-medium text-text-pri leading-relaxed">
                        {parts[0]}
                        <span className="inline-block bg-amber-200 dark:bg-amber-800 rounded px-2 mx-0.5 font-bold text-amber-800 dark:text-amber-200 min-w-[4rem] text-center">
                            {submitState === "idle" ? "?????" : q.targetWord}
                        </span>
                        {parts[1]}
                    </p>
                </div>

                {/* Input */}
                <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
                    <input
                        autoFocus
                        aria-label="Type the missing word"
                        value={input}
                        onChange={e => { if (submitState === "idle") setInput(e.target.value) }}
                        onKeyDown={e => {
                            if (e.key === "Enter" && submitState !== "idle") {
                                e.preventDefault()
                                handleNext()
                            }
                        }}
                        placeholder="Type the missing word…"
                        readOnly={submitState !== "idle"}
                        className={`w-full rounded-xl border-2 px-4 py-3 text-sm text-center focus:outline-none transition-colors ${inputCls[submitState]}`}
                    />
                </form>

                {/* Feedback */}
                {submitState === "correct" && (
                    <div className="flex items-center gap-2 bg-grammar-surface border border-grammar-border rounded-xl px-4 py-2.5">
                        <span className="text-grammar">✓</span>
                        <p className="text-sm font-medium text-grammar">Correct!</p>
                        <SpeakButton text={q.fullSentence} langId={langId} />
                    </div>
                )}
                {submitState === "wrong" && (
                    <div className="bg-verbs-surface border border-verbs-border rounded-xl px-4 py-3 flex flex-col gap-0.5">
                        <p className="text-xs text-verbs font-medium">Correct word:</p>
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-verbs">{q.targetWord}</p>
                            {q.romanized && (
                                <p className="text-xs text-text-sec">({q.romanized})</p>
                            )}
                            <SpeakButton text={q.fullSentence} langId={langId} />
                        </div>
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

                <p className="hidden sm:block text-xs text-text-ter text-center">
                    Enter to check · Enter again to continue
                </p>
            </main>
        </div>
    )
}
