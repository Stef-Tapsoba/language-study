// pages/FlashcardsPage.tsx — SRS flashcard session with SM-2 scheduling, 3-D flip, and TTS auto-play
import { useState, useMemo, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getVocabForLevel } from "../data/repo"
import { getCurrentLevel } from "../store/progress"
import { getDueCards, updateCard, getNextDueDate } from "../store/srs"
import { useStatsStore } from "../store/useStatsStore"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { SpeakButton } from "../components/SpeakButton"
import { VocabItem } from "../types"
import { getUI, fmt, UIStrings } from "../i18n"
import { speak } from "../utils/tts"
import { answerMatches } from "../utils/answerMatch"
import { Switch } from "../components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

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

function adaptiveMessage(pct: number): string {
    if (pct >= 90) return "Perfect!"
    if (pct >= 75) return "Great job!"
    if (pct >= 60) return "Good effort!"
    return "Keep it up!"
}

function ResultsScreen({ correct, incorrect, pct, newCardsScheduled, reviewMode, missed, ui, onReview, onRestart }: Readonly<{
    correct: number
    incorrect: number
    pct: number
    newCardsScheduled: number
    reviewMode: boolean
    missed: VocabItem[]
    ui: UIStrings
    onReview: () => void
    onRestart: () => void
}>) {
    return (
        <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
            <div className="text-5xl">{pct >= 80 ? "🎉" : "💪"}</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {reviewMode ? ui.reviewComplete : ui.roundComplete}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic -mt-2">{adaptiveMessage(pct)}</p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 w-full flex justify-around">
                <div>
                    <p className="text-3xl font-bold text-green-600">{correct}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ui.scoreCorrect}</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-red-500">{incorrect}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ui.scoreWrong}</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-indigo-600">{pct}%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ui.scoreLabel}</p>
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
                    className="w-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-400
                               font-semibold rounded-xl py-2.5 text-sm transition-colors"
                >
                    {ui.startOver}
                </button>
            </div>

            <MissedWordReview missed={missed} />
        </main>
    )
}

function MissedWordReview({ missed }: Readonly<{ missed: VocabItem[] }>) {
    if (missed.length === 0) return null
    return (
        <Accordion type="single" collapsible className="w-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <AccordionItem value="missed" className="border-0 px-5">
                <AccordionTrigger className="text-sm font-semibold text-gray-700 dark:text-gray-300 py-3 hover:no-underline">
                    Review missed words ({missed.length})
                </AccordionTrigger>
                <AccordionContent>
                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                        {missed.map(item => (
                            <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.word}</span>
                                <span className="text-sm text-green-700">{item.translation}</span>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

function dotColor(i: number, index: number, results: Result[]): string {
    if (i < index) {
        return results[i] === "correct" ? "bg-green-400" : "bg-red-300"
    }
    if (i === index) return "bg-indigo-300"
    return "bg-gray-200 dark:bg-gray-600"
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
            className="card-scene w-full max-w-sm mx-auto overflow-hidden"
            style={{ height: "min(200px, 40vh)" }}
            role={(!typedMode && !flipped) ? "button" : undefined}
            tabIndex={(!typedMode && !flipped) ? 0 : undefined}
            onClick={(!typedMode && !flipped) ? onClick : undefined}
            onKeyDown={(!typedMode && !flipped && onClick)
                ? (e) => { if (e.key === "Enter" || e.key === " ") onClick() }
                : undefined}
        >
            <div className={`card-inner relative w-full h-full ${flipped ? "flipped" : ""}`} style={{ willChange: "transform" }}>
                {/* Front */}
                <div className="card-face absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-600
                                flex flex-col items-center justify-center gap-2 p-6 shadow-md">
                    <div className="flex items-start justify-center gap-2 w-full min-w-0">
                        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center break-words flex-1 min-w-0">{item.word}</p>
                        <div className="shrink-0 pt-1">
                            <SpeakButton text={item.word} langId={langId} />
                        </div>
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
                                aria-label="Type the translation"
                                value={typedAnswer}
                                onChange={e => onTypedChange(e.target.value)}
                                placeholder="Type translation…"
                                className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm w-full text-center
                                           focus:outline-none focus:border-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            />
                            <button
                                type="submit"
                                className="text-xs text-indigo-600 hover:underline"
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{ui.tapToReveal}</p>
                    )}
                </div>

                {/* Back */}
                <div className="card-back card-face absolute inset-0 bg-indigo-50 dark:bg-indigo-600 rounded-2xl border-2
                                border-indigo-300 dark:border-indigo-700 flex flex-col items-center justify-center gap-3 p-6 shadow-md">

                    {/* Typed mode result indicator */}
                    {typedMode && typedResult && (
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-2xl">{typedResult === "correct" ? "✅" : "❌"}</div>
                            {typedResult === "wrong" && (
                                <p className="text-xs text-red-500 text-center">
                                    You typed: <span className="font-medium">{typedAnswer}</span>
                                </p>
                            )}
                        </div>
                    )}

                    {/* A1/A2: translation prominent at top */}
                    {translationMode === "primary" && (
                        <p className="text-2xl font-bold text-indigo-900 text-center dark:text-white">{item.translation}</p>
                    )}

                    {/* Example sentence — always shown */}
                    <div className="bg-white dark:bg-gray-700 rounded-xl px-4 py-2 text-center relative">
                        <p className="text-sm text-gray-700 dark:text-gray-300">{item.example.native}</p>
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
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)
    const translationMode = getTranslationMode(level)

    // sessionKey increments on restart to force SRS deck recalculation
    const [sessionKey, setSessionKey] = useState(0)
    const [studyAll, setStudyAll] = useState(false)
    const [started, setStarted] = useState(false)
    const [typedMode, setTypedMode] = useState(false)
    const [ttsEnabled, setTtsEnabled] = useState(() => {
        const stored = localStorage.getItem("ls:tts-autoplay")
        return stored === null ? true : stored === "true"
    })

    const allVocab = useMemo(
        () => getVocabForLevel(langId, level),
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
        if (deck.length === 0 || !ttsEnabled) return
        speak(deck[index].word, langId)
    }, [index, deck, langId, ttsEnabled])

    // Auto-play example sentence when the card is flipped
    useEffect(() => {
        if (!flipped || deck.length === 0 || !ttsEnabled) return
        speak(deck[index].example.native, langId)
    }, [flipped, index, deck, langId, ttsEnabled])

    // Cancel any ongoing speech when leaving the page
    useEffect(() => () => { globalThis.speechSynthesis?.cancel() }, [])

    if (!language) return null

    function handleTtsToggle(enabled: boolean) {
        setTtsEnabled(enabled)
        localStorage.setItem("ls:tts-autoplay", String(enabled))
    }

    // No vocabulary at this level yet
    if (allVocab.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.sectionFlashcards} level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500">
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
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.sectionFlashcards} level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-sm mx-auto px-4 py-16 flex flex-col items-center gap-5 text-center">
                    <p className="text-5xl">✅</p>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">All caught up!</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">No cards due today.</p>
                    {nextStr && (
                        <p className="text-gray-400 dark:text-gray-500 text-xs">Next review: {nextStr}</p>
                    )}
                    <div className="w-full mt-2 bg-amber-50 border border-amber-200 rounded-2xl divide-y divide-amber-200">
                        <div className="flex items-center gap-3 px-4 py-3">
                            <Switch id="typed-mode-caught-up" checked={typedMode} onCheckedChange={setTypedMode} className="data-[state=unchecked]:!bg-amber-300" />
                            <label htmlFor="typed-mode-caught-up" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                                Type answers (test yourself)
                            </label>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3">
                            <Switch id="tts-caught-up" checked={ttsEnabled} onCheckedChange={handleTtsToggle} className="data-[state=unchecked]:!bg-amber-300" />
                            <label htmlFor="tts-caught-up" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                                Auto-play pronunciation
                            </label>
                        </div>
                    </div>
                    <button
                        onClick={() => { setStudyAll(true); setStarted(true) }}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white
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
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.sectionFlashcards} level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-sm mx-auto px-4 py-16 flex flex-col items-center gap-5 text-center">
                    <p className="text-5xl">🃏</p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{srsDeck.length} cards ready</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{due.length} due · {newCardIds.length} new</p>
                    <div className="w-full bg-amber-50 border border-amber-200 rounded-2xl divide-y divide-amber-200">
                        <div className="flex items-center gap-3 px-4 py-3">
                            <Switch id="typed-mode" checked={typedMode} onCheckedChange={setTypedMode} className="data-[state=unchecked]:!bg-amber-300" />
                            <label htmlFor="typed-mode" className="text-sm text-gray-700 cursor-pointer">
                                Type answers (test yourself)
                            </label>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3">
                            <Switch id="tts-enabled" checked={ttsEnabled} onCheckedChange={handleTtsToggle} className="data-[state=unchecked]:!bg-amber-300" />
                            <label htmlFor="tts-enabled" className="text-sm text-gray-700 cursor-pointer">
                                Auto-play pronunciation
                            </label>
                        </div>
                    </div>
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
        useStatsStore.getState().recordReview(langId, r === "correct")

        const newResults = [...results, r]
        setResults(newResults)
        setFlipped(false)
        setTranslationShown(false)
        setTransitioning(true)
        setTimeout(() => {
            setTransitioning(false)
            if (index + 1 >= deck.length) {
                useStatsStore.getState().recordActivity(langId)
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

        const missedItems = deck.filter((_, i) => results[i] === "incorrect")

        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.sectionFlashcards} level={level} backTo={`/learn/${langId}`} />
                <ResultsScreen
                    correct={correct}
                    incorrect={incorrect}
                    pct={pct}
                    newCardsScheduled={newCardsScheduled}
                    reviewMode={reviewMode}
                    missed={missedItems}
                    ui={ui}
                    onReview={startReview}
                    onRestart={restart}
                />
            </div>
        )
    }

    const card = deck[index]

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={ui.sectionFlashcards} level={level} backTo={`/learn/${langId}`}
                breadcrumb={`${language.name} › Practice`} />
            <main className="max-w-sm mx-auto px-4 py-8 flex flex-col items-center gap-6">
                {/* Progress */}
                <div className="w-full flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
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
                    <p className="text-sm text-gray-400 dark:text-gray-500">{ui.tapToReveal}</p>
                )}
            </main>
        </div>
    )
}
