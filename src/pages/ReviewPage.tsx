// pages/ReviewPage.tsx — Break-return review session at /learn/:langId/review/session
//
// Shows a capped set of SRS-due cards — vocab, grammar points, and verb
// conjugation forms — in a simple flip-card format. Updates SM-2 state on
// each card so the session feeds back into spaced repetition.
// Cap is driven by the learner's break tier:
//   medium   (7–13 days)  → 10 items
//   heavy    (14–27 days) → 15 items
//   critical (28+ days)   → 20 items

import { useState, useMemo } from "react"
import { logError } from "../utils/logger"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { useProgressStore, progressHelpers } from "../store/useProgressStore"
import { updateCard } from "../store/srs"
import { useBreakDetection } from "../hooks/useBreakDetection"
import { getReviewPool, selectReviewSession, ReviewCard } from "../domain/reviewPool"
import { resolvePrimary } from "../utils/localizedText"

import { SpeakButton } from "../components/SpeakButton"
import { VocabDetail } from "../components/VocabDetail"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { useStatsStore } from "../store/useStatsStore"

const TIER_CAP: Record<string, number> = {
    medium:   10,
    heavy:    15,
    critical: 20,
}

/** First sentence of a (possibly localized) explanation, used as a short memory anchor on grammar cards. */
function firstSentence(text: string): string {
    const cut = text.indexOf(". ")
    return cut === -1 ? text : text.slice(0, cut + 1)
}

export function ReviewPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const language = getLanguage(langId)
    const userProgress = useProgressStore(s => s.progress)
    const { level: getLevel, mastered } = progressHelpers(userProgress)
    const level = getLevel(langId)
    const masteredIds = mastered(langId)
    const { tier } = useBreakDetection(langId)

    const cap = TIER_CAP[tier] ?? 10

    // Build the review pool — vocab, grammar, and verb-form cards from
    // unlocked units — then pick an even mix across kinds, capped by tier.
    const reviewItems = useMemo(() => {
        const pool = getReviewPool(langId, level, masteredIds)
        return selectReviewSession(langId, pool, cap)
    }, [langId, level, masteredIds, cap])

    const [index, setIndex]     = useState(0)
    const [flipped, setFlipped] = useState(false)
    const [correct, setCorrect] = useState(0)
    const [done, setDone]       = useState(false)

    const card = reviewItems[index]

    function handleAnswer(knew: boolean) {
        const quality: 1 | 4 = knew ? 4 : 1
        updateCard(langId, card.id, quality).catch(err => logError("ReviewPage.updateCard", err))
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
                    <p className="text-sm text-text-sec">Nothing is due for review right now.</p>
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
                            <ReviewCardBack card={card} langId={langId} level={level} />
                        </CardContent>
                    </Card>
                ) : (
                    <button
                        onClick={() => setFlipped(true)}
                        className="w-full bg-surface-card border border-border-default rounded-2xl px-6 py-8 text-center shadow-sm select-none min-h-[180px] flex flex-col items-center justify-center gap-3 transition-colors hover:border-grammar"
                    >
                        <ReviewCardFront card={card} />
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
                        Tap the card to reveal the answer
                    </p>
                )}
            </main>
        </div>
    )
}

function ReviewCardFront({ card }: Readonly<{ card: ReviewCard }>) {
    if (card.kind === "vocab") {
        return (
            <>
                <p className="text-2xl font-bold text-text-pri">{card.item.word}</p>
                {card.item.romanized && (
                    <p className="text-sm text-indigo-500 dark:text-indigo-400 italic">{card.item.romanized}</p>
                )}
            </>
        )
    }
    if (card.kind === "grammar") {
        return (
            <>
                <p className="text-lg font-semibold text-text-pri">{card.example.translation}</p>
                <p className="text-xs text-text-sec">How would you say this in Korean?</p>
            </>
        )
    }
    // verb
    return (
        <>
            <p className="text-lg font-semibold text-text-pri">
                {card.verb.infinitive} <span className="text-text-sec font-normal">({card.verb.meaning})</span>
            </p>
            <p className="text-sm text-text-sec">{card.tense} · {card.form.pronoun}</p>
            <p className="text-2xl font-bold text-text-pri">___</p>
        </>
    )
}

function ReviewCardBack({ card, langId, level }: Readonly<{ card: ReviewCard; langId: string; level: import("../types").CEFRLevel }>) {
    if (card.kind === "vocab") {
        return (
            <>
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-text-pri">{card.item.word}</p>
                    <SpeakButton text={card.item.word} langId={langId} id={card.item.id} variant="word" />
                </div>
                {card.item.romanized && (
                    <p className="text-xs text-indigo-500 dark:text-indigo-400 italic">{card.item.romanized}</p>
                )}
                <p className="text-xl text-text-sec mt-1">{card.item.translation}</p>
                <VocabDetail item={card.item} langId={langId} variant="card" />
            </>
        )
    }
    if (card.kind === "grammar") {
        return (
            <>
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-text-pri">{card.example.native}</p>
                    <SpeakButton text={card.example.native} langId={langId} />
                </div>
                {card.example.romanized && (
                    <p className="text-xs text-indigo-500 dark:text-indigo-400 italic">{card.example.romanized}</p>
                )}
                <p className="text-sm text-text-sec mt-1">{card.example.translation}</p>
                <div className="mt-2 pt-2 border-t border-border-subtle w-full">
                    <p className="text-xs font-semibold text-text-pri">{card.lesson.title}</p>
                    <p className="text-xs text-text-ter mt-1">{firstSentence(resolvePrimary(card.lesson.explanation, level))}</p>
                </div>
            </>
        )
    }
    // verb
    return (
        <>
            <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-text-pri">{card.form.form}</p>
                <SpeakButton text={card.form.form} langId={langId} />
            </div>
            {card.form.romanized && (
                <p className="text-xs text-indigo-500 dark:text-indigo-400 italic">{card.form.romanized}</p>
            )}
            <p className="text-sm text-text-sec mt-1">{card.verb.infinitive} — {card.verb.meaning}</p>
            <p className="text-xs text-text-ter">{card.tense} · {card.form.pronoun}</p>
        </>
    )
}
