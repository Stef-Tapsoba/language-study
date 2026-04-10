// pages/DialogueCompletionPage.tsx — Dialogue Completion exercise
//
// A dialogue passage is displayed with one speaker turn replaced by a blank.
// The user picks the correct response from 4 multiple-choice options.
// Only dialogue-category reading passages are used.
// Accepts ExerciseComponentProps<ReadingPassage>.

import { useState, useMemo, useEffect } from "react"
import { NavBar } from "../components/NavBar"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { QuizCard } from "../components/QuizCard"
import { shuffle } from "../utils/arrayUtils"
import { getUI, fmt } from "../i18n"
import { useStatsStore } from "../store/useStatsStore"
import { Button } from "../components/ui/button"
import type { ExerciseComponentProps } from "../exerciseTypes/registry"
import type { ReadingPassage } from "../types"

// ── Types ─────────────────────────────────────────────────────────────────────

interface DialogueItem {
    passageId: string
    passageTitle: string
    /** Lines before the blank (display only) */
    contextLines: string[]
    /** The blanked line */
    correct: string
    /** 4 options (shuffled, includes correct) */
    options: string[]
    /** Lines after the blank (display only) */
    afterLines: string[]
}

// ── Build items ───────────────────────────────────────────────────────────────

function buildDialogueItems(passages: ReadingPassage[]): DialogueItem[] {
    const dialogues = passages.filter(p => p.category === "dialogue")
    if (dialogues.length === 0) return []

    const items: DialogueItem[] = []

    for (const passage of dialogues) {
        const bodyTarget = passage.body.target ?? passage.body.native
        const lines = bodyTarget.split("\n").map(l => l.trim()).filter(Boolean)

        if (lines.length < 3) continue

        // For each line (except first and last) we can blank it
        for (let i = 1; i < lines.length - 1; i++) {
            const correct = lines[i]

            // Build distractor options from other lines in all dialogues
            const allLines = dialogues.flatMap(d =>
                (d.body.target ?? d.body.native).split("\n").map(l => l.trim()).filter(Boolean)
            )
            const distractors = shuffle(
                allLines.filter(l => l !== correct && l.trim().length > 5)
            ).slice(0, 3)

            if (distractors.length < 3) continue

            items.push({
                passageId: passage.id,
                passageTitle: passage.title,
                contextLines: lines.slice(0, i),
                correct,
                options: shuffle([correct, ...distractors]),
                afterLines: lines.slice(i + 1),
            })
        }
    }

    return shuffle(items).slice(0, 8)
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function DialogueCompletionPage({ items, langId, level, config: _config, onComplete, onSessionDone }: Readonly<ExerciseComponentProps<ReadingPassage>>) {
    const ui = getUI(langId, level)

    const questions = useMemo(() => buildDialogueItems(items), [items])

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
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Dialogue Completion" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-text-ter px-4 text-center">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">No dialogue passages at {level} yet</p>
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
                navTitle="Dialogue Completion"
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
            onComplete(q.passageId)
        } else {
            setMissed(prev => [...prev, {
                prompt: `[...] What comes next in: "${q.contextLines[q.contextLines.length - 1]}"`,
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
            <NavBar title="Dialogue Completion" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
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

                {/* Instruction */}
                <div className="w-full bg-vocab-surface border border-vocab-border rounded-2xl px-5 py-3">
                    <p className="text-xs text-vocab font-medium uppercase tracking-wide mb-1">
                        Complete the dialogue
                    </p>
                    <p className="text-sm font-medium text-text-pri">{q.passageTitle}</p>
                </div>

                {/* Dialogue context */}
                <div className="w-full bg-surface-card rounded-2xl border border-border-default p-4 flex flex-col gap-2">
                    {q.contextLines.map((line, i) => (
                        <p key={i} className="text-sm text-text-pri leading-relaxed">{line}</p>
                    ))}

                    {/* Blank line */}
                    <div className="bg-grammar-surface border-2 border-dashed border-grammar rounded-xl px-3 py-2.5">
                        {revealed ? (
                            <p className="text-sm font-semibold text-grammar">{q.correct}</p>
                        ) : (
                            <p className="text-sm text-grammar/50 italic">???</p>
                        )}
                    </div>

                    {q.afterLines.length > 0 && revealed && q.afterLines.map((line, i) => (
                        <p key={i} className="text-sm text-text-sec leading-relaxed">{line}</p>
                    ))}
                </div>

                {/* Options */}
                <QuizCard
                    question="Choose the correct response:"
                    options={q.options}
                    selected={selected}
                    correct={revealed ? q.correct : null}
                    onSelect={handleSelect}
                />

                <p className="hidden sm:block text-xs text-text-ter">
                    1–4 to select · Enter to continue
                </p>

                {revealed && (
                    <Button onClick={handleNext} className="w-full max-w-xl rounded-xl py-3">
                        {isLast ? ui.seeResults : ui.nextQuestion}
                    </Button>
                )}
            </main>
        </div>
    )
}
