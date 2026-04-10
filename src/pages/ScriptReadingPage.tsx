// pages/ScriptReadingPage.tsx — Kana/Hangul Reading Recognition exercise
//
// Show a Japanese kanji or Korean word; user selects the correct romanized
// reading from 4 options. Only meaningful for Japanese (hiragana-kanji) and
// Korean (hangul) — the page shows an empty state for Latin-script languages.
// Accepts ExerciseComponentProps<VocabItem>.

import { useState, useMemo, useEffect } from "react"
import { NavBar } from "../components/NavBar"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { QuizCard } from "../components/QuizCard"
import { SpeakButton } from "../components/SpeakButton"
import { Button } from "../components/ui/button"
import { shuffle } from "../utils/arrayUtils"
import { getUI, fmt } from "../i18n"
import { getLanguage } from "../data/languages"
import { useStatsStore } from "../store/useStatsStore"
import type { ExerciseComponentProps } from "../exerciseTypes/registry"
import type { VocabItem } from "../types"

// ── Types ─────────────────────────────────────────────────────────────────────

interface ScriptItem {
    vocabId: string
    word: string          // the kanji/hangul word
    correct: string       // the romanized reading
    options: string[]     // 4 options (shuffled, includes correct)
    translation: string   // English meaning (shown after reveal)
}

// ── Build items ───────────────────────────────────────────────────────────────

function buildScriptItems(vocabItems: VocabItem[]): ScriptItem[] {
    // Only items that have a romanized field are usable
    const withRomanized = vocabItems.filter(v => v.romanized && v.romanized.trim())

    if (withRomanized.length < 4) return []

    return shuffle(withRomanized).slice(0, 10).map(item => {
        const correct = item.romanized!
        const distractors = shuffle(
            withRomanized
                .filter(v => v.romanized !== correct)
                .map(v => v.romanized!)
        ).slice(0, 3)
        return {
            vocabId: item.id,
            word: item.word,
            correct,
            options: shuffle([correct, ...distractors]),
            translation: item.translation,
        }
    })
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function ScriptReadingPage({ items, langId, level, config: _config, onComplete, onSessionDone }: Readonly<ExerciseComponentProps<VocabItem>>) {
    const ui = getUI(langId, level)
    const language = getLanguage(langId)

    const questions = useMemo(() => buildScriptItems(items), [items])

    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [missed, setMissed] = useState<{ prompt: string; correct: string; yourAnswer: string }[]>([])
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)

    // Reset per-question state when question changes
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

    // Not applicable for Latin-script languages
    if (language && language.script === "latin") {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Script Reading" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-text-ter px-4 text-center">
                    <p className="text-4xl mb-3">🔤</p>
                    <p className="font-medium">Script Reading is only available for Japanese and Korean.</p>
                </div>
            </div>
        )
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Script Reading" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-text-ter px-4 text-center">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">Not enough vocab with romanized readings at {level} yet</p>
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
                navTitle="Script Reading"
                ui={ui}
                onRestart={handleRestart}
                backTo="back" fallbackRoute={`/learn/${langId}`}
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
            onComplete(q.vocabId)
        } else {
            setMissed(prev => [...prev, {
                prompt: q.word,
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
        <div className="min-h-screen bg-surface-app">
            <NavBar title="Script Reading" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                {/* Progress */}
                <div className="w-full flex items-center justify-between text-sm text-text-sec">
                    <span>{fmt(ui.questionOf, { n: index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {score}</span>
                </div>
                <div className="w-full flex gap-1">
                    {questions.map((_, i) => {
                        let cls = "bg-border-default"
                        if (i < index) cls = "bg-grammar"
                        else if (i === index) cls = "bg-grammar opacity-40"
                        return <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${cls}`} />
                    })}
                </div>

                {/* Word display */}
                <div className="bg-surface-card rounded-3xl border border-border-default shadow-sm px-8 py-8 text-center w-full">
                    <p className="text-xs text-text-ter uppercase tracking-wide mb-3">
                        How do you read this?
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <p className="text-5xl font-bold text-text-pri">{q.word}</p>
                        <SpeakButton text={q.word} langId={langId} />
                    </div>
                    {revealed && (
                        <p className="text-sm text-text-sec mt-3">{q.translation}</p>
                    )}
                </div>

                {/* Quiz options */}
                <QuizCard
                    question="Choose the correct reading:"
                    options={q.options}
                    selected={selected}
                    correct={revealed ? q.correct : null}
                    onSelect={handleSelect}
                />

                <p className="hidden sm:block text-xs text-text-ter">
                    1–4 to select · Enter to continue
                </p>

                {revealed && (
                    <Button
                        onClick={handleNext}
                        className="w-full max-w-xl rounded-xl py-3"
                    >
                        {isLast ? ui.seeResults : ui.nextQuestion}
                    </Button>
                )}
            </main>
        </div>
    )
}
