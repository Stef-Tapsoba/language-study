// pages/FlashcardsPage.tsx — SRS flashcard session with SM-2 scheduling, 3-D flip, and TTS auto-play
import { useState, useMemo, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel } from "../store/progress"
import { getDueCards, updateCard, getNextDueDate } from "../store/srs"
import { recordReview } from "../store/stats"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { SpeakButton } from "../components/SpeakButton"
import { VocabItem } from "../types"
import { getUI, fmt, UIStrings } from "../i18n"
import { speak } from "../utils/tts"
import { answerMatches } from "../utils/answerMatch"

const FLIP_MS = 450

// How the English translation appears on the card back, based on CEFR level:
//   "primary"    A1/A2 — shown prominently at the top
//   "secondary"  B1    — shown smaller, below the example
//   "hidden"     B2+   — not shown on the card; toggle button reveals it below
type TranslationMode = "primary" | "secondary" | "hidden"

function getTranslationMode(level: string): TranslationMode {
    if (level === "A1" || level === "A2") return "primary"
    if (level === "B1") return "secondary"
    return "hidden"
}

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5)
}

type Result = "correct" | "incorrect"

function ResultsScreen({ correct, incorrect, pct, newCardsScheduled, reviewMode, ui, onReview, onRestart }: Readonly<{
    correct: number
    incorrect: number
    pct: number
    newCardsScheduled: number
    reviewMode: boolean
    ui: UIStrings
    onReview: () => void
    onRestart: () => void
}>) {
    return (
        <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
            <div className="text-5xl">{pct >= 80 ? "🎉" : "💪"}</div>
            <h2 className="text-2xl font-bold text-gray-900">
                {reviewMode ? ui.reviewComplete : ui.roundComplete}
            </h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full flex justify-around">
                <div>
                    <p className="text-3xl font-bold text-green-600">{correct}</p>
                    <p className="text-xs text-gray-500 mt-1">{ui.scoreCorrect}</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-red-500">{incorrect}</p>
                    <p className="text-xs text-gray-500 mt-1">{ui.scoreWrong}</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-indigo-600">{pct}%</p>
                    <p className="text-xs text-gray-500 mt-1">{ui.scoreLabel}</p>
                </div>
            </div>

            {newCardsScheduled > 0 && (
                <p className="text-sm text-indigo-600">
                    {newCardsScheduled} new card{newCardsScheduled === 1 ? "" : "s"} added to your schedule
                </p>
            )}

            <div className="flex flex-col gap-3 w-full">
                {incorrect > 0 && (
                    <button
                        onClick={onReview}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                   rounded-xl py-2.5 text-sm transition-colors"
                    >
                        {fmt(ui.reviewMissed, { n: incorrect })}
                    </button>
                )}
                <button
                    onClick={onRestart}
                    className="w-full border border-gray-200 text-gray-700 hover:border-indigo-400
                               font-semibold rounded-xl py-2.5 text-sm transition-colors"
                >
                    {ui.startOver}
                </button>
            </div>
        </main>
    )
}

function dotColor(i: number, index: number, results: Result[]): string {
    if (i < index) {
        return results[i] === "correct" ? "bg-green-400" : "bg-red-300"
    }
    if (i === index) return "bg-indigo-300"
    return "bg-gray-200"
}

function FlipCard({ item, flipped, onClick, translationMode, translationShown, ui, langId,
    typedMode, typedAnswer, onTypedChange, onTypedSubmit, typedResult }: Readonly<{
    item: VocabItem
    flipped: boolean
    onClick: (() => void) | undefined
    translationMode: TranslationMode
    translationShown: boolean
    ui: UIStrings
    langId: string
    typedMode: boolean
    typedAnswer: string
    onTypedChange: (v: string) => void
    onTypedSubmit: () => void
    typedResult: "correct" | "wrong" | null
}>) {
    return (
        <div
            className="card-scene w-full max-w-sm mx-auto"
            style={{ height: 220 }}
            role={(!typedMode && !flipped) ? "button" : undefined}
            tabIndex={(!typedMode && !flipped) ? 0 : undefined}
            onClick={(!typedMode && !flipped) ? onClick : undefined}
            onKeyDown={(!typedMode && !flipped && onClick)
                ? (e) => { if (e.key === "Enter" || e.key === " ") onClick() }
                : undefined}
        >
            <div className={`card-inner relative w-full h-full ${flipped ? "flipped" : ""}`}>
                {/* Front */}
                <div className="card-face absolute inset-0 bg-white rounded-2xl border-2 border-gray-200
                                flex flex-col items-center justify-center gap-2 p-6 shadow-md">
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-3xl font-bold text-gray-900 text-center">{item.word}</p>
                        <SpeakButton text={item.word} langId={langId} />
                    </div>
                    {item.romanized && (
                        <p className="text-sm text-indigo-500">{item.romanized}</p>
                    )}
                    {typedMode && !flipped ? (
                        <form
                            onSubmit={e => { e.preventDefault(); onTypedSubmit() }}
                            className="w-full flex flex-col gap-2 mt-1"
                        >
                            <input
                                autoFocus
                                value={typedAnswer}
                                onChange={e => onTypedChange(e.target.value)}
                                placeholder="Type translation…"
                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full text-center
                                           focus:outline-none focus:border-indigo-400"
                            />
                            <button
                                type="submit"
                                className="text-xs text-indigo-600 hover:underline"
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <p className="text-xs text-gray-400 mt-2">{ui.tapToReveal}</p>
                    )}
                </div>

                {/* Back */}
                <div className="card-back card-face absolute inset-0 bg-indigo-50 rounded-2xl border-2
                                border-indigo-300 flex flex-col items-center justify-center gap-3 p-6 shadow-md">

                    {/* Typed mode result indicator */}
                    {typedMode && typedResult && (
                        <div className="text-2xl">{typedResult === "correct" ? "✅" : "❌"}</div>
                    )}

                    {/* A1/A2: translation prominent at top */}
                    {translationMode === "primary" && (
                        <p className="text-2xl font-bold text-indigo-900 text-center">{item.translation}</p>
                    )}

                    {/* Example sentence — always shown */}
                    <div className="bg-white rounded-xl px-4 py-2 text-center relative">
                        <p className="text-sm text-gray-700">{item.example.native}</p>
                        {item.example.romanized && (
                            <p className="text-xs text-indigo-400 mt-0.5">{item.example.romanized}</p>
                        )}
                        {/* Example gloss: shown at A1/A2/B1, hidden at B2+ */}
                        {translationMode !== "hidden" && (
                            <p className="text-xs text-gray-400 mt-0.5">{item.example.translation}</p>
                        )}
                        <SpeakButton text={item.example.native} langId={langId} className="absolute top-1 right-1" />
                    </div>

                    {/* B1: translation secondary, below example */}
                    {translationMode === "secondary" && (
                        <p className="text-base font-medium text-indigo-700 text-center">{item.translation}</p>
                    )}

                    {/* B2+: translation toggle — shown here if toggled on */}
                    {translationMode === "hidden" && translationShown && (
                        <p className="text-base font-medium text-indigo-700 text-center">{item.translation}</p>
                    )}
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
    const ui = getUI(langId, level)
    const translationMode = getTranslationMode(level)

    // sessionKey increments on restart to force SRS deck recalculation
    const [sessionKey, setSessionKey] = useState(0)
    const [studyAll, setStudyAll] = useState(false)
    const [started, setStarted] = useState(false)
    const [typedMode, setTypedMode] = useState(false)

    const allVocab = useMemo(
        () => mod?.vocab.filter(v => v.level === level) ?? [],
        [langId, level]
    )

    // SRS deck: due cards first, then unseen new cards
    const { due, newCards: newCardIds } = useMemo(
        () => getDueCards(langId, allVocab.map(v => v.id)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [langId, allVocab, sessionKey]
    )

    const srsDeck = useMemo(() => {
        const dueItems = due
            .map(id => allVocab.find(v => v.id === id))
            .filter((v): v is VocabItem => !!v)
        const newItems = newCardIds
            .map(id => allVocab.find(v => v.id === id))
            .filter((v): v is VocabItem => !!v)
        return [...dueItems, ...newItems]
    }, [due, newCardIds, allVocab])

    const shuffleDeck = useMemo(() => shuffle(allVocab), [allVocab, sessionKey]) // eslint-disable-line react-hooks/exhaustive-deps

    const [index, setIndex] = useState(0)
    const [flipped, setFlipped] = useState(false)
    const [transitioning, setTransitioning] = useState(false)
    const [results, setResults] = useState<Result[]>([])
    const [done, setDone] = useState(false)
    const [reviewMode, setReviewMode] = useState(false)
    const [reviewCards, setReviewCards] = useState<VocabItem[]>([])
    const [translationShown, setTranslationShown] = useState(false)
    const [typedAnswer, setTypedAnswer] = useState("")
    const [typedResult, setTypedResult] = useState<"correct" | "wrong" | null>(null)

    const deck = useMemo(() => {
        if (reviewMode) return reviewCards
        if (studyAll) return shuffleDeck
        return srsDeck
    }, [reviewMode, reviewCards, studyAll, shuffleDeck, srsDeck])

    // Auto-play word when a new card appears
    useEffect(() => {
        if (deck.length === 0) return
        speak(deck[index].word, langId)
    }, [index, deck]) // eslint-disable-line react-hooks/exhaustive-deps

    // Auto-play example sentence when the card is flipped
    useEffect(() => {
        if (!flipped || deck.length === 0) return
        speak(deck[index].example.native, langId)
    }, [flipped]) // eslint-disable-line react-hooks/exhaustive-deps

    // Cancel any ongoing speech when leaving the page
    useEffect(() => () => { globalThis.speechSynthesis?.cancel() }, [])

    if (!language || !mod) return null

    // No vocabulary at this level yet
    if (allVocab.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={ui.sectionFlashcards} level={level} backTo="back" />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">No vocabulary at {level} yet</p>
                </div>
            </div>
        )
    }

    // All caught up — no cards due and not in studyAll mode
    if (srsDeck.length === 0 && !studyAll && !reviewMode) {
        const nextMs = getNextDueDate(langId)
        const nextStr = nextMs
            ? new Date(nextMs).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })
            : null

        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={ui.sectionFlashcards} level={level} backTo="back" />
                <main className="max-w-sm mx-auto px-4 py-16 flex flex-col items-center gap-5 text-center">
                    <p className="text-5xl">✅</p>
                    <h2 className="text-2xl font-bold text-gray-900">All caught up!</h2>
                    <p className="text-gray-500 text-sm">No cards due today.</p>
                    {nextStr && (
                        <p className="text-gray-400 text-xs">Next review: {nextStr}</p>
                    )}
                    <label className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                        <input
                            type="checkbox"
                            checked={typedMode}
                            onChange={e => setTypedMode(e.target.checked)}
                        />
                        <span>Type answers (active recall)</span>
                    </label>
                    <button
                        onClick={() => { setStudyAll(true); setStarted(true) }}
                        className="mt-2 w-full border border-gray-200 text-gray-600 hover:border-indigo-400
                                   font-semibold rounded-xl py-3 text-sm transition-colors"
                    >
                        Study all {allVocab.length} cards anyway
                    </button>
                </main>
            </div>
        )
    }

    // Start screen — shown before first card of a new session
    if (!started) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={ui.sectionFlashcards} level={level} backTo="back" />
                <main className="max-w-sm mx-auto px-4 py-16 flex flex-col items-center gap-5 text-center">
                    <p className="text-5xl">🃏</p>
                    <h2 className="text-xl font-bold text-gray-900">{srsDeck.length} cards ready</h2>
                    <p className="text-sm text-gray-500">{due.length} due · {newCardIds.length} new</p>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                            type="checkbox"
                            checked={typedMode}
                            onChange={e => setTypedMode(e.target.checked)}
                        />
                        <span>Type answers (active recall)</span>
                    </label>
                    <button
                        onClick={() => setStarted(true)}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                   rounded-xl py-3 text-sm transition-colors"
                    >
                        Start
                    </button>
                </main>
            </div>
        )
    }

    // Shared reset for both restart() and startReview()
    function resetSession() {
        setIndex(0); setResults([]); setFlipped(false)
        setTranslationShown(false); setDone(false); setReviewMode(false)
        setTypedAnswer(""); setTypedResult(null)
    }

    function handleResult(r: Result) {
        // Persist SRS rating (skip in review mode and studyAll mode)
        if (!reviewMode && !studyAll) {
            updateCard(langId, deck[index].id, r === "correct" ? 4 : 1)
        }
        recordReview(langId, r === "correct")

        const newResults = [...results, r]
        setResults(newResults)
        setFlipped(false)
        setTranslationShown(false)
        setTransitioning(true)
        setTimeout(() => {
            setTransitioning(false)
            if (index + 1 >= deck.length) {
                setDone(true)
            } else {
                setIndex(i => i + 1)
            }
        }, FLIP_MS)
    }

    function handleTypedSubmit() {
        const card = deck[index]
        const match = answerMatches(typedAnswer, card.translation)
        setTypedResult(match ? "correct" : "wrong")
        setFlipped(true)
    }

    function startReview() {
        const missed = deck.filter((_, i) => results[i] === "incorrect")
        setReviewCards(missed)
        setReviewMode(true)
        resetSession()
    }

    function restart() {
        setSessionKey(k => k + 1)
        setStudyAll(false)
        setStarted(false)
        resetSession()
    }

    // Results screen
    if (done) {
        const correct = results.filter(r => r === "correct").length
        const incorrect = results.filter(r => r === "incorrect").length
        const pct = Math.round((correct / deck.length) * 100)
        const newCardsScheduled = reviewMode || studyAll ? 0 : newCardIds.length

        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={ui.sectionFlashcards} level={level} backTo="back" />
                <ResultsScreen
                    correct={correct}
                    incorrect={incorrect}
                    pct={pct}
                    newCardsScheduled={newCardsScheduled}
                    reviewMode={reviewMode}
                    ui={ui}
                    onReview={startReview}
                    onRestart={restart}
                />
            </div>
        )
    }

    const card = deck[index]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={ui.sectionFlashcards} level={level} backTo="back" />
            <main className="max-w-sm mx-auto px-4 py-8 flex flex-col items-center gap-6">
                {/* Progress */}
                <div className="w-full flex items-center justify-between text-sm text-gray-500">
                    <span>
                        {reviewMode && <span className="text-indigo-600 font-medium mr-2">↺</span>}
                        {index + 1} / {deck.length}
                    </span>
                    <LevelBadge level={level} />
                </div>
                <div className="w-full flex gap-1">
                    {deck.map((v, i) => (
                        <div key={v.id} className={`h-1.5 flex-1 rounded-full ${dotColor(i, index, results)}`} />
                    ))}
                </div>

                {/* Card */}
                <FlipCard
                    item={card}
                    flipped={flipped}
                    onClick={flipped ? undefined : () => setFlipped(true)}
                    translationMode={translationMode}
                    translationShown={translationShown}
                    ui={ui}
                    langId={langId}
                    typedMode={typedMode}
                    typedAnswer={typedAnswer}
                    onTypedChange={setTypedAnswer}
                    onTypedSubmit={handleTypedSubmit}
                    typedResult={typedResult}
                />

                {/* B2+ translation toggle — shown after flip */}
                {flipped && translationMode === "hidden" && (
                    <button
                        onClick={() => setTranslationShown(v => !v)}
                        className="text-sm text-indigo-600 hover:underline"
                    >
                        {translationShown ? ui.hideTranslation : ui.showTranslation}
                    </button>
                )}

                {/* Self-rating buttons — only after flip */}
                {flipped && (
                    <div className="flex gap-3 w-full max-w-sm">
                        <button
                            disabled={transitioning}
                            onClick={() => handleResult("incorrect")}
                            className="flex-1 border-2 border-red-300 text-red-600 font-semibold
                                       rounded-xl py-3 hover:bg-red-50 transition-colors disabled:opacity-50"
                        >
                            ✗ {ui.notYet}
                        </button>
                        <button
                            disabled={transitioning}
                            onClick={() => handleResult("correct")}
                            className="flex-1 border-2 border-green-400 text-green-700 font-semibold
                                       rounded-xl py-3 hover:bg-green-50 transition-colors disabled:opacity-50"
                        >
                            ✓ {ui.gotIt}
                        </button>
                    </div>
                )}
                {!flipped && !typedMode && (
                    <p className="text-sm text-gray-400">{ui.tapToReveal}</p>
                )}
            </main>
        </div>
    )
}
