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
import { Button } from "../components/ui/button"
import confetti from "canvas-confetti"
import { playLevelUp } from "../utils/sound"

const PASS_THRESHOLD = 12  // out of 15

function progressDotClass(i: number, current: number): string {
    if (i < current) return "bg-grammar"
    if (i === current) return "bg-grammar opacity-40"
    return "bg-border-default"
}

// ---------------------------------------------------------------------------
// LevelUpOverlay — full-screen celebration shown briefly on level advance
// ---------------------------------------------------------------------------
function LevelUpOverlay({ nextLevel, onDone }: Readonly<{ nextLevel: CEFRLevel; onDone: () => void }>) {
    const levelNames: Record<CEFRLevel, string> = {
        A1: "Beginner", A2: "Elementary", B1: "Intermediate",
        B2: "Upper Intermediate", C1: "Advanced",
    }

    // Fire confetti + sound on mount; auto-dismiss after 5 s
    useEffect(() => {
        playLevelUp()

        // Burst from the top-centre of the screen
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { x: 0.5, y: 0.2 },
            colors: ["#6366f1", "#8b5cf6", "#a78bfa", "#fbbf24", "#34d399", "#f472b6"],
        })
        // Second wave slightly delayed for depth
        const second = setTimeout(() => {
            confetti({
                particleCount: 60,
                spread: 120,
                origin: { x: 0.5, y: 0.3 },
                scalar: 0.8,
            })
        }, 350)

        const dismiss = setTimeout(onDone, 5000)
        return () => { clearTimeout(second); clearTimeout(dismiss) }
    }, [onDone])

    return (
        <Dialog open onOpenChange={() => {}}>
            <DialogContent className="text-center max-w-sm border-0 bg-gradient-to-b from-indigo-600 to-violet-700 text-white p-0 overflow-hidden">
                {/* Glow ring */}
                <div className="absolute inset-0 bg-white/5 rounded-xl pointer-events-none" />

                <div className="relative flex flex-col items-center gap-4 px-6 py-8">
                    {/* Trophy — pulsing animation */}
                    <div className="text-6xl animate-bounce" style={{ animationDuration: "1.2s" }}>
                        🏆
                    </div>

                    <DialogHeader className="space-y-1">
                        <DialogTitle className="text-3xl font-extrabold text-white tracking-tight">
                            Level Up!
                        </DialogTitle>
                        <DialogDescription asChild>
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-indigo-200 text-sm">You've reached</p>
                                <div className="bg-white/20 rounded-xl px-5 py-2 mt-1">
                                    <span className="text-2xl font-black text-white tracking-wide">{nextLevel}</span>
                                    <span className="text-indigo-200 text-sm ml-2">— {levelNames[nextLevel]}</span>
                                </div>
                                <p className="text-indigo-200 text-sm mt-2">Keep up the great work 🌟</p>
                            </div>
                        </DialogDescription>
                    </DialogHeader>

                    <Button
                        onClick={onDone}
                        className="mt-2 w-full bg-white text-indigo-700 hover:bg-indigo-50 font-semibold rounded-xl py-2.5"
                    >
                        Continue →
                    </Button>
                </div>
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
                <p className="text-sm text-text-sec mb-3">{ui.currentLevel}</p>
                <div className="flex justify-center mb-4">
                    <LevelBadge level={nextLevel} />
                </div>
                <Button onClick={handleAdvance} className="w-full rounded-xl py-2.5 text-sm font-semibold">
                    {fmt(ui.levelTestAdvanceTo, { next: nextLevel })}
                </Button>
            </>
        )
    }

    if (passed) {
        return (
            <>
                <p className="text-sm text-text-sec mb-4">{ui.levelTestAtHighest}</p>
                <Button onClick={() => navigate(`/learn/${langId}`)} className="w-full rounded-xl py-2.5 text-sm font-semibold">
                    {ui.backToDashboard}
                </Button>
            </>
        )
    }

    return (
        <>
            <p className="text-sm text-text-sec mb-1">
                {fmt(ui.levelTestNeedScore, { pass: PASS_THRESHOLD })}
            </p>
            <p className="text-xs text-text-ter mb-4">
                {ui.sectionGrammar}, {ui.sectionVocab}, {ui.sectionVerbs}
            </p>
            <Button onClick={() => navigate(`/learn/${langId}`)} className="w-full rounded-xl py-2.5 text-sm font-semibold mb-2">
                {ui.backToDashboard}
            </Button>
            <Button variant="outline" onClick={onRetry} className="w-full rounded-xl py-2.5 text-sm font-semibold">
                {ui.tryAgain}
            </Button>
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
            <div className="min-h-screen bg-surface-app">
                <NavBar title={ui.levelTestTitle} level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-16 text-center text-text-ter">
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
            <div className="min-h-screen bg-surface-app">
                <NavBar title={ui.levelTestTitle} level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-16 flex flex-col items-center gap-5 text-center">
                    <p className="text-5xl">📝</p>
                    <LevelBadge level={level} />
                    <h2 className="text-xl font-bold text-text-pri">{ui.levelTestTitle}</h2>
                    {nextLevel && (
                        <p className="text-sm text-text-sec">
                            {fmt(ui.levelTestDesc, { pass: PASS_THRESHOLD, total: questions.length, next: nextLevel })}
                        </p>
                    )}
                    <Button onClick={() => setStarted(true)} className="w-full max-w-xs rounded-xl py-3 text-sm font-semibold">
                        {ui.startTest}
                    </Button>
                </main>
            </div>
        )
    }

    if (done) {
        const passed = score >= PASS_THRESHOLD
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title={ui.levelTestTitle} level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">{passed ? "🏆" : "📚"}</div>
                    <h2 className="text-2xl font-bold text-text-pri">
                        {passed ? ui.levelTestPassed : ui.levelTestKeepPractising}
                    </h2>
                    <p className="text-text-sec">
                        {fmt(ui.youAnswered, { score, total: questions.length })}
                        {" "}({Math.round((score / questions.length) * 100)}%)
                    </p>
                    <div className="bg-surface-card rounded-2xl border border-border-default p-5 w-full">
                        <ResultsActions
                            passed={passed}
                            nextLevel={passed ? nextLevel : null}
                            langId={langId}
                            ui={ui}
                            onRetry={handleRetry}
                        />
                    </div>
                    {missed.length > 0 && (
                        <Accordion type="single" collapsible className="w-full bg-surface-card rounded-2xl border border-border-default text-left">
                            <AccordionItem value="mistakes" className="border-0 px-5">
                                <AccordionTrigger className="text-sm font-semibold text-text-sec py-3 hover:no-underline">
                                    Review mistakes ({missed.length})
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="divide-y divide-border-subtle">
                                        {missed.map(q => (
                                            <div key={q.id} className="py-3">
                                                <p className="text-xs text-text-sec mb-1">{q.prompt}</p>
                                                <p className="text-sm font-medium text-grammar">✓ {q.answer}</p>
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
        <div className="min-h-screen bg-surface-app">
            <NavBar title={ui.levelTestTitle} level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <div className="w-full flex items-center justify-between text-sm text-text-sec">
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
                    <Button onClick={handleNext} className="w-full max-w-xl rounded-xl py-3 font-semibold">
                        {current + 1 >= questions.length ? ui.seeResults : ui.nextQuestion}
                    </Button>
                )}
            </main>
        </div>
    )
}
