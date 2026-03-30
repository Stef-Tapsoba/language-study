// pages/LevelTestPage.tsx — CEFR level-advancement test (pass threshold: 12/15)
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getLevelQuestions } from "../data/repo"
import { useProgress } from "../context/ProgressContext"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { LevelBadge } from "../components/LevelBadge"
import { CEFR_LEVELS, CEFRLevel, QuizQuestion } from "../types"
import { getUI, fmt, UIStrings } from "../i18n"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

const PASS_THRESHOLD = 12  // out of 15

function progressDotClass(i: number, current: number): string {
    if (i < current) return "bg-indigo-500"
    if (i === current) return "bg-indigo-300"
    return "bg-gray-200 dark:bg-gray-600"
}

// ---------------------------------------------------------------------------
// LevelUpOverlay — full-screen celebration shown briefly on level advance
// ---------------------------------------------------------------------------
function LevelUpOverlay({ nextLevel, onDone }: Readonly<{ nextLevel: CEFRLevel; onDone: () => void }>) {
    // Auto-dismiss after 4 s; user can also click Continue early
    useEffect(() => {
        const t = setTimeout(onDone, 4000)
        return () => clearTimeout(t)
    }, [onDone])

    const levelNames: Record<CEFRLevel, string> = {
        A1: "Beginner", A2: "Elementary", B1: "Intermediate",
        B2: "Upper Intermediate", C1: "Advanced",
    }

    return (
        <Dialog open onOpenChange={() => {}}>
            <DialogContent className="text-center max-w-sm">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-indigo-700">🏆 Level Up!</DialogTitle>
                    <DialogDescription asChild>
                        <div className="flex flex-col items-center gap-2 mt-2">
                            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Welcome to {nextLevel}!
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {levelNames[nextLevel]} — keep up the great work.
                            </p>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <button
                    onClick={onDone}
                    className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-2.5 transition-colors"
                >
                    Continue →
                </button>
            </DialogContent>
        </Dialog>
    )
}

// ---------------------------------------------------------------------------
// ResultsActions — the action panel inside the results card (no nested ternaries)
// ---------------------------------------------------------------------------
function ResultsActions({ passed, nextLevel, langId, ui, onRetry }: Readonly<{
    passed: boolean
    nextLevel: CEFRLevel | null
    langId: string
    ui: UIStrings
    onRetry: () => void
}>) {
    const navigate = useNavigate()
    const { setCurrentLevel } = useProgress()
    const [showOverlay, setShowOverlay] = useState(false)

    function handleAdvance() {
        if (nextLevel) {
            setCurrentLevel(langId, nextLevel)
            setShowOverlay(true)
        } else {
            navigate(`/learn/${langId}`)
        }
    }

    if (passed && nextLevel) {
        return (
            <>
                {showOverlay && (
                    <LevelUpOverlay
                        nextLevel={nextLevel}
                        onDone={() => navigate(`/learn/${langId}`)}
                    />
                )}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{ui.currentLevel}</p>
                <div className="flex justify-center mb-4">
                    <LevelBadge level={nextLevel} />
                </div>
                <button
                    onClick={handleAdvance}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                               rounded-xl py-2.5 text-sm transition-colors"
                >
                    {fmt(ui.levelTestAdvanceTo, { next: nextLevel })}
                </button>
            </>
        )
    }

    if (passed) {
        return (
            <>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{ui.levelTestAtHighest}</p>
                <button
                    onClick={() => navigate(`/learn/${langId}`)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                               rounded-xl py-2.5 text-sm transition-colors"
                >
                    {ui.backToDashboard}
                </button>
            </>
        )
    }

    return (
        <>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {fmt(ui.levelTestNeedScore, { pass: PASS_THRESHOLD })}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                {ui.sectionGrammar}, {ui.sectionVocab}, {ui.sectionVerbs}
            </p>
            <button
                onClick={() => navigate(`/learn/${langId}`)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                           rounded-xl py-2.5 text-sm transition-colors mb-2"
            >
                {ui.backToDashboard}
            </button>
            <button
                onClick={onRetry}
                className="w-full border border-indigo-300 text-indigo-700 font-semibold
                           rounded-xl py-2.5 text-sm transition-colors hover:bg-indigo-50"
            >
                {ui.tryAgain}
            </button>
        </>
    )
}

// ---------------------------------------------------------------------------
// LevelTestPage
// ---------------------------------------------------------------------------
export function LevelTestPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const { level: getLevel } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)

    const [started, setStarted] = useState(false)
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [missed, setMissed] = useState<QuizQuestion[]>([])

    if (!language) return null

    const questions = getLevelQuestions(langId, level)

    const levelIndex = CEFR_LEVELS.indexOf(level)
    const nextLevel: CEFRLevel | null = levelIndex < CEFR_LEVELS.length - 1 ? CEFR_LEVELS[levelIndex + 1] : null

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.levelTestTitle} level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-16 text-center text-gray-400 dark:text-gray-500">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">Level test coming soon for {level}</p>
                </main>
            </div>
        )
    }

    function handleSelect(opt: string) {
        setSelected(opt)
        setRevealed(true)
    }

    function handleNext() {
        const q = questions[current]
        const isCorrect = selected === q.answer
        const newScore = score + (isCorrect ? 1 : 0)
        if (!isCorrect && selected !== null) {
            setMissed(prev => [...prev, q])
        }
        if (current + 1 >= questions.length) {
            setScore(newScore)
            setDone(true)
        } else {
            setScore(newScore)
            setCurrent(c => c + 1)
            setSelected(null)
            setRevealed(false)
        }
    }

    function handleRetry() {
        setCurrent(0); setScore(0); setStarted(false)
        setSelected(null); setRevealed(false); setDone(false); setMissed([])
    }

    if (!started) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.levelTestTitle} level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-16 flex flex-col items-center gap-5 text-center">
                    <p className="text-5xl">📝</p>
                    <LevelBadge level={level} />
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{ui.levelTestTitle}</h2>
                    {nextLevel && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {fmt(ui.levelTestDesc, { pass: PASS_THRESHOLD, total: questions.length, next: nextLevel })}
                        </p>
                    )}
                    <button
                        onClick={() => setStarted(true)}
                        className="w-full max-w-xs bg-indigo-600 hover:bg-indigo-700 text-white
                                   font-semibold rounded-xl py-3 text-sm transition-colors"
                    >
                        {ui.startTest}
                    </button>
                </main>
            </div>
        )
    }

    if (done) {
        const passed = score >= PASS_THRESHOLD
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.levelTestTitle} level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">{passed ? "🏆" : "📚"}</div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {passed ? ui.levelTestPassed : ui.levelTestKeepPractising}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {fmt(ui.youAnswered, { score, total: questions.length })}
                        {" "}({Math.round((score / questions.length) * 100)}%)
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 w-full">
                        <ResultsActions
                            passed={passed}
                            nextLevel={passed ? nextLevel : null}
                            langId={langId}
                            ui={ui}
                            onRetry={handleRetry}
                        />
                    </div>
                    {missed.length > 0 && (
                        <Accordion type="single" collapsible className="w-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-left">
                            <AccordionItem value="mistakes" className="border-0 px-5">
                                <AccordionTrigger className="text-sm font-semibold text-gray-700 dark:text-gray-300 py-3 hover:no-underline">
                                    Review mistakes ({missed.length})
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {missed.map(q => (
                                            <div key={q.id} className="py-3">
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{q.prompt}</p>
                                                <p className="text-sm font-medium text-green-700">✓ {q.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )}
                </main>
            </div>
        )
    }

    const q = questions[current]

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={ui.levelTestTitle} level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <div className="w-full flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{fmt(ui.questionOf, { n: current + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {score}</span>
                </div>

                {/* Progress strip */}
                <div className="w-full flex gap-1">
                    {questions.map((lq, i) => (
                        <div
                            key={lq.id}
                            className={`h-1.5 flex-1 rounded-full transition-colors ${progressDotClass(i, current)}`}
                        />
                    ))}
                </div>

                <QuizCard
                    question={q.prompt}
                    options={q.options}
                    selected={selected}
                    correct={revealed ? q.answer : null}
                    onSelect={handleSelect}
                />

                {revealed && (
                    <button
                        onClick={handleNext}
                        className="w-full max-w-xl bg-indigo-600 hover:bg-indigo-700 text-white
                                   font-semibold rounded-xl py-3 transition-colors"
                    >
                        {current + 1 >= questions.length ? ui.seeResults : ui.nextQuestion}
                    </button>
                )}
            </main>
        </div>
    )
}
