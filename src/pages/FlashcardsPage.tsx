// pages/FlashcardsPage.tsx
import { useState, useMemo } from "react"
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { VocabItem } from "../types"

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5)
}

type Result = "correct" | "incorrect"

function FlipCard({ item, flipped, onClick }: {
    item: VocabItem
    flipped: boolean
    onClick: () => void
}) {
    return (
        <div className="card-scene w-full max-w-sm mx-auto" style={{ height: 220 }} onClick={onClick}>
            <div className={`card-inner relative w-full h-full cursor-pointer ${flipped ? "flipped" : ""}`}>
                {/* Front */}
                <div className="card-face absolute inset-0 bg-white rounded-2xl border-2 border-gray-200
                                flex flex-col items-center justify-center gap-2 p-6 shadow-md">
                    <p className="text-3xl font-bold text-gray-900 text-center">{item.word}</p>
                    {item.romanized && (
                        <p className="text-sm text-indigo-500">{item.romanized}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">Tap to reveal</p>
                </div>

                {/* Back */}
                <div className="card-back card-face absolute inset-0 bg-indigo-50 rounded-2xl border-2
                                border-indigo-300 flex flex-col items-center justify-center gap-3 p-6 shadow-md">
                    <p className="text-2xl font-bold text-indigo-900 text-center">{item.translation}</p>
                    <div className="bg-white rounded-xl px-4 py-2 text-center">
                        <p className="text-sm text-gray-700">{item.example.native}</p>
                        {item.example.romanized && (
                            <p className="text-xs text-indigo-400 mt-0.5">{item.example.romanized}</p>
                        )}
                        <p className="text-xs text-gray-400 mt-0.5">{item.example.translation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function FlashcardsPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)

    const cards = useMemo(() => shuffle(mod?.vocab.filter(v => v.level === level) ?? []), [langId, level])

    const [index, setIndex] = useState(0)
    const [flipped, setFlipped] = useState(false)
    const [results, setResults] = useState<Result[]>([])
    const [done, setDone] = useState(false)
    const [reviewMode, setReviewMode] = useState(false)
    const [reviewCards, setReviewCards] = useState<VocabItem[]>([])

    if (!language || !mod) return null

    const deck = reviewMode ? reviewCards : cards

    if (cards.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title="Flashcards" level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">No vocabulary at {level} yet</p>
                </div>
            </div>
        )
    }

    function handleResult(r: Result) {
        const newResults = [...results, r]
        setResults(newResults)
        if (index + 1 >= deck.length) {
            setDone(true)
        } else {
            setIndex(i => i + 1)
            setFlipped(false)
        }
    }

    function startReview() {
        const missed = deck.filter((_, i) => results[i] === "incorrect")
        setReviewCards(missed)
        setIndex(0)
        setResults([])
        setFlipped(false)
        setDone(false)
        setReviewMode(true)
    }

    function restart() {
        setIndex(0)
        setResults([])
        setFlipped(false)
        setDone(false)
        setReviewMode(false)
    }

    // Results screen
    if (done) {
        const correct = results.filter(r => r === "correct").length
        const incorrect = results.filter(r => r === "incorrect").length
        const pct = Math.round((correct / deck.length) * 100)

        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title="Flashcards" level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">{pct >= 80 ? "🎉" : "💪"}</div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        {reviewMode ? "Review complete!" : "Round complete!"}
                    </h2>
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full flex justify-around">
                        <div>
                            <p className="text-3xl font-bold text-green-600">{correct}</p>
                            <p className="text-xs text-gray-500 mt-1">Got it</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-red-500">{incorrect}</p>
                            <p className="text-xs text-gray-500 mt-1">Not yet</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-indigo-600">{pct}%</p>
                            <p className="text-xs text-gray-500 mt-1">Score</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        {incorrect > 0 && (
                            <button
                                onClick={startReview}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                           rounded-xl py-2.5 text-sm transition-colors"
                            >
                                Review {incorrect} missed card{incorrect !== 1 ? "s" : ""}
                            </button>
                        )}
                        <button
                            onClick={restart}
                            className="w-full border border-gray-200 text-gray-700 hover:border-indigo-400
                                       font-semibold rounded-xl py-2.5 text-sm transition-colors"
                        >
                            Start over
                        </button>
                    </div>
                </main>
            </div>
        )
    }

    const card = deck[index]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title="Flashcards" level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-sm mx-auto px-4 py-8 flex flex-col items-center gap-6">
                {/* Progress */}
                <div className="w-full flex items-center justify-between text-sm text-gray-500">
                    <span>
                        {reviewMode && <span className="text-indigo-600 font-medium mr-2">Review</span>}
                        {index + 1} / {deck.length}
                    </span>
                    <LevelBadge level={level} />
                </div>
                <div className="w-full flex gap-1">
                    {deck.map((_, i) => (
                        <div key={i} className={`h-1.5 flex-1 rounded-full ${i < index
                                ? results[i] === "correct" ? "bg-green-400" : "bg-red-300"
                                : i === index ? "bg-indigo-300" : "bg-gray-200"
                            }`} />
                    ))}
                </div>

                {/* Card */}
                <FlipCard item={card} flipped={flipped} onClick={() => !flipped && setFlipped(true)} />

                {/* Buttons (only after flip) */}
                {flipped ? (
                    <div className="flex gap-3 w-full max-w-sm">
                        <button
                            onClick={() => handleResult("incorrect")}
                            className="flex-1 border-2 border-red-300 text-red-600 font-semibold
                                       rounded-xl py-3 hover:bg-red-50 transition-colors"
                        >
                            ✗ Not yet
                        </button>
                        <button
                            onClick={() => handleResult("correct")}
                            className="flex-1 border-2 border-green-400 text-green-700 font-semibold
                                       rounded-xl py-3 hover:bg-green-50 transition-colors"
                        >
                            ✓ Got it
                        </button>
                    </div>
                ) : (
                    <p className="text-sm text-gray-400">Tap the card to flip</p>
                )}
            </main>
        </div>
    )
}
