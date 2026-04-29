// pages/ReviewPage.tsx — Break-return review session at /learn/:langId/review
//
// Shows a capped set of SRS-due vocab items in a simple flip-card format.
// Updates SM-2 state on each card so the session feeds back into spaced repetition.
// Cap is driven by the learner's break tier:
//   medium   (7–13 days)  → 10 items
//   heavy    (14–27 days) → 15 items
//   critical (28+ days)   → 20 items

import { useState, useMemo } from "react"
import { logError } from "../utils/logger"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getVocabForLevel } from "../data/repo"
import { useProgress } from "../context/ProgressContext"
import { getDueCards, updateCard } from "../store/srs"
import { useBreakDetection } from "../hooks/useBreakDetection"

import { SpeakButton } from "../components/SpeakButton"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { useStatsStore } from "../store/useStatsStore"

const TIER_CAP: Record<string, number> = {
    medium:   10,
    heavy:    15,
    critical: 20,
}

export function ReviewPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const language = getLanguage(langId)
    const { level: getLevel } = useProgress()
    const level = getLevel(langId)
    const { tier } = useBreakDetection(langId)

    const cap = TIER_CAP[tier] ?? 10

    // Build the review pool: SRS-due vocab from the current level, capped by tier
    const reviewItems = useMemo(() => {
        const allVocab = getVocabForLevel(langId, level)
        const allIds   = allVocab.map(v => v.id)
        const { due, newCards } = getDueCards(langId, allIds)
        // Prefer truly overdue cards; fill remainder with never-reviewed
        const selectedIds = [...due, ...newCards].slice(0, cap)
        const vocabMap = new Map(allVocab.map(v => [v.id, v]))
        return selectedIds.map(id => vocabMap.get(id)!).filter(Boolean)
    }, [langId, level, cap])

    const [index, setIndex]     = useState(0)
    const [flipped, setFlipped] = useState(false)
    const [correct, setCorrect] = useState(0)
    const [done, setDone]       = useState(false)

    const item = reviewItems[index]

    function handleAnswer(knew: boolean) {
        const quality: 1 | 4 = knew ? 4 : 1
        updateCard(langId, item.id, quality).catch(err => logError("ReviewPage.updateCard", err))
        useStatsStore.getState().recordQuizAnswer(langId, knew)
        if (knew) setCorrect(c => c + 1)
        const next = index + 1
        if (next >= reviewItems.length) {
            useStatsStore.getState().recordActivity(langId)
            setDone(true)
        } else {
            setIndex(next)
            setFlipped(false)
        }
    }

    if (!language) return null

    // Empty state — no due cards
    if (reviewItems.length === 0) {
        return (
            <div className="bg-surface-app">
                
                <main className="max-w-md mx-auto px-4 py-16 text-center flex flex-col items-center gap-4">
                    <p className="text-5xl">🎉</p>
                    <h2 className="text-xl font-bold text-text-pri">You're all caught up!</h2>
                    <p className="text-sm text-text-sec">No cards are due for review right now.</p>
                    <Button onClick={() => navigate(`/learn/${langId}/review`)} className="mt-2 rounded-xl px-6 py-2.5 text-sm font-semibold">
                        Back to lessons
                    </Button>
                </main>
            </div>
        )
    }

    // Done screen
    if (done) {
        const pct = Math.round((correct / reviewItems.length) * 100)
        let resultEmoji = "💪"
        if (pct >= 80) resultEmoji = "🌟"
        else if (pct >= 50) resultEmoji = "👍"
        return (
            <div className="bg-surface-app">
                
                <main className="max-w-md mx-auto px-4 py-16 text-center flex flex-col items-center gap-4">
                    <p className="text-5xl">{resultEmoji}</p>
                    <h2 className="text-xl font-bold text-text-pri">Review complete!</h2>
                    <p className="text-sm text-text-sec">
                        {correct} of {reviewItems.length} remembered ({pct}%)
                    </p>
                    <p className="text-xs text-text-ter max-w-xs">
                        Good job getting back on track. Your review intervals have been updated.
                    </p>
                    <Button
                        onClick={() => navigate(`/learn/${langId}/review`)}
                        className="mt-2 rounded-xl px-6 py-2.5 text-sm font-semibold"
                    >
                        Continue to lessons →
                    </Button>
                </main>
            </div>
        )
    }

    // Review card
    const progress = ((index) / reviewItems.length) * 100

    return (
        <div className="bg-surface-app min-h-screen">
            {/* Exit button — ReviewPage is full-screen outside AppLayout */}
            <div className="flex items-center justify-between max-w-md mx-auto px-4 pt-6 pb-2">
                <button
                    onClick={() => navigate(`/learn/${langId}/review`)}
                    className="text-xs text-text-sec hover:text-text-pri transition-colors"
                >
                    ← Exit
                </button>
                <span className="text-xs text-text-sec">{index + 1} / {reviewItems.length}</span>
            </div>

            <main className="max-w-md mx-auto px-4 pb-8 flex flex-col gap-6">

                {/* Progress */}
                <div className="flex items-center justify-between text-xs text-text-sec">
                    <span>{index + 1} of {reviewItems.length}</span>
                    <span>{correct} remembered</span>
                </div>
                <Progress value={progress} className="h-1.5" aria-label={`Review progress — ${index + 1} of ${reviewItems.length} cards`} />

                {/* Card — two states rendered separately to avoid nested-button issue:
                    front = <button> (no SpeakButton inside), back = <div> + SpeakButton */}
                {flipped ? (
                    <Card className="min-h-[180px] shadow-sm">
                        <CardContent className="p-6 flex flex-col items-center justify-center gap-3 text-center min-h-[180px]">
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-semibold text-text-pri">{item.word}</p>
                                <SpeakButton text={item.word} langId={langId} />
                            </div>
                            {item.romanized && (
                                <p className="text-xs text-indigo-500 dark:text-indigo-400 italic">{item.romanized}</p>
                            )}
                            <p className="text-xl text-text-sec mt-1">{item.translation}</p>
                            {item.example && (
                                <p className="text-xs text-text-ter mt-2 italic">
                                    {item.example.native}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                ) : (
                    <button
                        onClick={() => setFlipped(true)}
                        className="w-full bg-surface-card border border-border-default rounded-2xl px-6 py-8 text-center shadow-sm select-none min-h-[180px] flex flex-col items-center justify-center gap-3 transition-colors hover:border-grammar"
                    >
                        <p className="text-2xl font-bold text-text-pri">{item.word}</p>
                        {item.romanized && (
                            <p className="text-sm text-indigo-500 dark:text-indigo-400 italic">{item.romanized}</p>
                        )}
                        <p className="text-xs text-text-ter mt-2">Tap to reveal</p>
                    </button>
                )}

                {/* Answer buttons — only visible after flip */}
                {flipped && (
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant="outline"
                            onClick={() => handleAnswer(false)}
                            className="py-3 rounded-xl border-2 border-verbs-border bg-verbs-surface text-verbs font-semibold text-sm hover:bg-verbs-surface/80"
                        >
                            ✗ Forgot
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleAnswer(true)}
                            className="py-3 rounded-xl border-2 border-grammar-border bg-grammar-surface text-grammar font-semibold text-sm hover:bg-grammar-surface/80"
                        >
                            ✓ Got it
                        </Button>
                    </div>
                )}

                {!flipped && (
                    <p className="text-center text-xs text-text-ter">
                        Tap the card to reveal the translation
                    </p>
                )}
            </main>
        </div>
    )
}
