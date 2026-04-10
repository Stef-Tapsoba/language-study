// pages/SpeakingPage.tsx — Speaking (EO) exercise
//
// The user hears the target-language phrase via TTS, reads the English cue,
// and then speaks the phrase aloud. Speech is captured via the Web Speech API
// and evaluated with answerMatches(..., "dictation") — verbatim, accent-tolerant.
//
// Accepts ExerciseComponentProps<SpeakingPrompt>.

import { useState, useMemo, useEffect } from "react"
import { NavBar } from "../components/NavBar"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { speak, TTS_LANG_MAP } from "../utils/tts"
import { answerMatches } from "../utils/answerMatch"
import { shuffle } from "../utils/arrayUtils"
import { useSpeechRecognition } from "../hooks/useSpeechRecognition"
import { getLanguage } from "../data/languages"
import { getUI, fmt } from "../i18n"
import { useStatsStore } from "../store/useStatsStore"
import { Button } from "../components/ui/button"
import type { ExerciseComponentProps } from "../exerciseTypes/registry"
import type { SpeakingPrompt } from "../types"

// ── Types ─────────────────────────────────────────────────────────────────────

type ResultState = "idle" | "correct" | "wrong"
type MissedItem = { prompt: string; correct: string; yourAnswer: string }

// ── Icons ─────────────────────────────────────────────────────────────────────

function MicIcon({ className }: Readonly<{ className?: string }>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M12 1a4 4 0 00-4 4v7a4 4 0 008 0V5a4 4 0 00-4-4z" />
            <path d="M6 10a1 1 0 00-2 0 8 8 0 007 7.938V20H8a1 1 0 000 2h8a1 1 0 000-2h-3v-2.062A8 8 0 0020 10a1 1 0 00-2 0 6 6 0 01-12 0z" />
        </svg>
    )
}

function SpeakerIcon({ className }: Readonly<{ className?: string }>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.112V15.89a1.5 1.5 0 002.3 1.271l9.344-5.89a1.5 1.5 0 000-2.542L6.3 2.84z" />
            <path fillRule="evenodd" d="M12.5 6.5a.75.75 0 01.75.75 5 5 0 010 5.5.75.75 0 01-1.3-.75 3.5 3.5 0 000-4 .75.75 0 01.55-.5z" clipRule="evenodd" />
        </svg>
    )
}

// ── Evaluation helper (extracted to keep SpeakingPage complexity in check) ────

function evaluateTranscript(
    transcript: string,
    item: SpeakingPrompt,
    langId: string,
    onComplete: (id: string) => void,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    setMissed: React.Dispatch<React.SetStateAction<MissedItem[]>>,
): ResultState {
    // "dictation" mode: verbatim, accent/case/punctuation tolerant — correct for ASR output.
    const correct = answerMatches(transcript, item.phrase, "dictation")
    useStatsStore.getState().recordQuizAnswer(langId, correct)
    if (correct) {
        setScore(s => s + 1)
        onComplete(item.id)
        return "correct"
    }
    setMissed(prev => [...prev, { prompt: item.translation, correct: item.phrase, yourAnswer: transcript || "—" }])
    return "wrong"
}

// ── Main page ──────────────────────────────────────────────────────────────────

export default function SpeakingPage({
    items,
    langId,
    level,
    config: _config,
    onComplete,
    onSessionDone,
}: Readonly<ExerciseComponentProps<SpeakingPrompt>>) {
    const ui = getUI(langId, level)

    const [sessionKey, setSessionKey] = useState(0)
    const questions = useMemo(
        () => shuffle(items).slice(0, 12),
        // sessionKey forces a new shuffle on restart even if items hasn't changed
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [items, sessionKey],
    )

    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [missed, setMissed] = useState<MissedItem[]>([])
    const [resultState, setResultState] = useState<ResultState>("idle")

    const bcp47 = TTS_LANG_MAP[langId] ?? langId
    const { state: recState, transcript, isSupported, start, reset } = useSpeechRecognition(bcp47)

    const item = questions[index]

    // Auto-play TTS and reset recognition state on each new phrase
    useEffect(() => {
        if (!item) return
        speak(item.phrase, langId)
        reset()
        setResultState("idle")
    }, [index, questions, langId, reset])

    // Evaluate the transcript when recognition completes
    useEffect(() => {
        if (recState !== "done" || !item) return
        const result = evaluateTranscript(transcript, item, langId, onComplete, setScore, setMissed)
        setResultState(result)
    }, [recState, item, transcript, langId, onComplete])

    function handleRestart() {
        reset()
        setResultState("idle")
        setMissed([])
        setDone(false)
        setScore(0)
        setIndex(0)
        setSessionKey(k => k + 1)
    }

    function handleNext() {
        // Reset recognition state before advancing so the evaluation effect
        // cannot re-fire with the new item while recState is still "done".
        reset()
        if (index + 1 >= questions.length) {
            onSessionDone()
            setDone(true)
        } else {
            setIndex(i => i + 1)
        }
    }

    function handleReplay() {
        if (item) speak(item.phrase, langId)
    }

    // Language name for the cue card header — sourced from the language registry
    const langName = getLanguage(langId)?.name ?? "the target language"

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Speaking" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-text-ter">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">No speaking exercises at {level} yet</p>
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
                navTitle="Speaking"
                ui={ui}
                onRestart={handleRestart}
                backTo="back" fallbackRoute={`/learn/${langId}`}
                missed={missed}
            />
        )
    }

    if (!item) return null

    const isLast = index + 1 >= questions.length
    const showResult = resultState !== "idle"

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title="Speaking" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">

                {/* Progress counter + segment bar */}
                <div className="flex items-center justify-between text-sm text-text-sec">
                    <span>{fmt(ui.questionOf, { n: index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {score}</span>
                </div>
                <div className="flex gap-1">
                    {questions.map((q, i) => {
                        let cls = "bg-border-default"
                        if (i < index) cls = "bg-grammar"
                        else if (i === index) cls = "bg-grammar opacity-40"
                        return <div key={q.id} className={`h-1.5 flex-1 rounded-full transition-colors ${cls}`} />
                    })}
                </div>

                {/* Unsupported browser warning */}
                {!isSupported && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-600 rounded-2xl px-5 py-4">
                        <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-1">Microphone not available</p>
                        <p className="text-sm text-yellow-700 dark:text-yellow-400">
                            Speaking exercises require Chrome or Edge. Please open this page in a supported browser.
                        </p>
                    </div>
                )}

                {/* English cue card */}
                <div className="bg-surface-card border border-border-default rounded-2xl px-5 py-5 shadow-sm">
                    <p className="text-xs text-text-ter font-medium uppercase tracking-wide mb-2">
                        Say in {langName}
                    </p>
                    <p className="text-2xl font-bold text-text-pri leading-snug">
                        {item.translation}
                    </p>
                </div>

                {/* Target phrase + replay button */}
                <div className="bg-grammar-surface border border-grammar-border rounded-2xl px-5 py-4 flex flex-col gap-1">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <p className="text-lg font-semibold text-grammar leading-snug break-words">
                                {item.phrase}
                            </p>
                            {item.romanized && (
                                <p className="text-sm text-indigo-500 dark:text-indigo-400 italic">{item.romanized}</p>
                            )}
                        </div>
                        <button
                            onClick={handleReplay}
                            aria-label="Replay pronunciation"
                            className="shrink-0 p-2 min-h-[44px] min-w-[44px] rounded-lg text-grammar hover:bg-grammar-surface transition-colors"
                        >
                            <SpeakerIcon className="w-5 h-5" />
                        </button>
                    </div>
                    {item.hint && (
                        <p className="text-xs text-text-ter mt-1">{item.hint}</p>
                    )}
                </div>

                {/* Mic button — hidden once a result is shown */}
                {isSupported && !showResult && (
                    <div className="flex flex-col items-center gap-3 py-2">
                        <button
                            onClick={recState === "idle" ? start : undefined}
                            aria-label={recState === "listening" ? "Listening…" : "Tap to speak"}
                            disabled={recState === "listening"}
                            className={[
                                "relative w-20 h-20 rounded-full flex items-center justify-center",
                                "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-grammar",
                                recState === "listening"
                                    ? "bg-red-500 text-white cursor-default"
                                    : "bg-grammar hover:opacity-90 active:opacity-75 text-white shadow-lg",
                            ].join(" ")}
                        >
                            {recState === "listening" && (
                                <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-50" aria-hidden="true" />
                            )}
                            <MicIcon className="w-8 h-8 relative z-10" />
                        </button>
                        <p className="text-sm text-text-sec">
                            {recState === "listening" ? "Listening…" : "Tap to speak"}
                        </p>
                    </div>
                )}

                {/* Correct feedback */}
                {showResult && resultState === "correct" && (
                    <div className="bg-grammar-surface border border-grammar-border rounded-xl px-4 py-3 flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="text-grammar font-bold">✓</span>
                            <p className="text-sm font-semibold text-grammar">Great pronunciation!</p>
                        </div>
                        {transcript && (
                            <p className="text-xs text-grammar">Heard: <span className="italic">{transcript}</span></p>
                        )}
                    </div>
                )}

                {/* Wrong feedback */}
                {showResult && resultState === "wrong" && (
                    <div className="bg-verbs-surface border border-verbs-border rounded-xl px-4 py-3 flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                            <span className="text-verbs font-bold">✗</span>
                            <p className="text-sm font-semibold text-verbs">Not quite — try again next time</p>
                        </div>
                        {transcript && (
                            <p className="text-xs text-verbs">Heard: <span className="italic">{transcript}</span></p>
                        )}
                        <p className="text-xs text-verbs font-medium mt-0.5">Correct phrase:</p>
                        <p className="text-sm font-semibold text-verbs">{item.phrase}</p>
                        {item.romanized && (
                            <p className="text-xs text-text-sec italic">{item.romanized}</p>
                        )}
                    </div>
                )}

                {/* Next button — appears after result */}
                {showResult && (
                    <Button onClick={handleNext} className="w-full rounded-xl py-3">
                        {isLast ? ui.seeResults : ui.nextQuestion}
                    </Button>
                )}

                {!showResult && isSupported && (
                    <p className="hidden sm:block text-xs text-text-ter text-center">
                        Tap the microphone and say the phrase out loud
                    </p>
                )}
            </main>
        </div>
    )
}
