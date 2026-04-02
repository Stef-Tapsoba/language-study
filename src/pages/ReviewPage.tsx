// pages/ReviewPage.tsx — Break-return review session at /learn/:langId/review
//
// Shows a capped set of SRS-due vocab items in a simple flip-card format.
// Updates SM-2 state on each card so the session feeds back into spaced repetition.
// Cap is driven by the learner's break tier:
//   medium   (7–13 days)  → 10 items
//   heavy    (14–27 days) → 15 items
//   critical (28+ days)   → 20 items

import { useState, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getVocabForLevel } from "../data/repo"
import { useProgress } from "../context/ProgressContext"
import { getDueCards, updateCard } from "../store/srs"
import { useBreakDetection } from "../hooks/useBreakDetection"
import { NavBar } from "../components/NavBar"
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
        updateCard(langId, item.id, quality).catch(console.error)
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
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title="Review" level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-md mx-auto px-4 py-16 text-center flex flex-col items-center gap-4">
                    <p className="text-5xl">🎉</p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">You're all caught up!</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">No cards are due for review right now.</p>
                    <Button onClick={() => navigate(`/learn/${langId}`)} className="mt-2 rounded-xl px-6 py-2.5 text-sm font-semibold">
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
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title="Review" level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-md mx-auto px-4 py-16 text-center flex flex-col items-center gap-4">
                    <p className="text-5xl">{resultEmoji}</p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Review complete!</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {correct} of {reviewItems.length} remembered ({pct}%)
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 max-w-xs">
                        Good job getting back on track. Your review intervals have been updated.
                    </p>
                    <Button
                        onClick={() => navigate(`/learn/${langId}`)}
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title="Review" level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-md mx-auto px-4 py-8 flex flex-col gap-6">

                {/* Progress */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{index + 1} of {reviewItems.length}</span>
                    <span>{correct} remembered</span>
                </div>
                <Progress value={progress} className="h-1.5" />

                {/* Card — two states rendered separately to avoid nested-button issue:
                    front = <button> (no SpeakButton inside), back = <div> + SpeakButton */}
                {flipped ? (
                    <Card className="min-h-[180px] shadow-sm">
                        <CardContent className="p-6 flex flex-col items-center justify-center gap-3 text-center min-h-[180px]">
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.word}</p>
                                <SpeakButton text={item.word} langId={langId} />
                            </div>
                            {item.romanized && (
                                <p className="text-xs text-indigo-500 dark:text-indigo-400 italic">{item.romanized}</p>
                            )}
                            <p className="text-xl text-gray-600 dark:text-gray-300 mt-1">{item.translation}</p>
                            {item.example && (
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                                    {item.example.native}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                ) : (
                    <button
                        onClick={() => setFlipped(true)}
                        className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-8 text-center shadow-sm select-none min-h-[180px] flex flex-col items-center justify-center gap-3 transition-colors hover:border-indigo-300 dark:hover:border-indigo-600"
                    >
                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{item.word}</p>
                        {item.romanized && (
                            <p className="text-sm text-indigo-500 dark:text-indigo-400 italic">{item.romanized}</p>
                        )}
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Tap to reveal</p>
                    </button>
                )}

                {/* Answer buttons — only visible after flip */}
                {flipped && (
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant="outline"
                            onClick={() => handleAnswer(false)}
                            className="py-3 rounded-xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 font-semibold text-sm hover:bg-red-100 dark:hover:bg-red-900/40 hover:text-red-700"
                        >
                            ✗ Forgot
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleAnswer(true)}
                            className="py-3 rounded-xl border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-semibold text-sm hover:bg-green-100 dark:hover:bg-green-900/40 hover:text-green-700"
                        >
                            ✓ Got it
                        </Button>
                    </div>
                )}

                {!flipped && (
                    <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                        Tap the card to reveal the translation
                    </p>
                )}
            </main>
        </div>
    )
}
