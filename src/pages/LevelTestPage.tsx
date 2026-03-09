// pages/LevelTestPage.tsx
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel, setCurrentLevel } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { LevelBadge } from "../components/LevelBadge"
import { CEFR_LEVELS, CEFRLevel } from "../types"
import { getUI, fmt, UIStrings } from "../i18n"

const PASS_THRESHOLD = 12  // out of 15

function progressDotClass(i: number, current: number): string {
    if (i < current) return "bg-indigo-500"
    if (i === current) return "bg-indigo-300"
    return "bg-gray-200"
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

    function handleAdvance() {
        if (nextLevel) setCurrentLevel(langId, nextLevel)
        navigate(`/learn/${langId}`)
    }

    if (passed && nextLevel) {
        return (
            <>
                <p className="text-sm text-gray-500 mb-3">{ui.currentLevel}</p>
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
                <p className="text-sm text-gray-600 mb-4">{ui.levelTestAtHighest}</p>
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
            <p className="text-sm text-gray-600 mb-1">
                {fmt(ui.levelTestNeedScore, { pass: PASS_THRESHOLD })}
            </p>
            <p className="text-xs text-gray-400 mb-4">
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
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)

    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)

    if (!language || !mod) return null

    const questions = mod.levelQuestions.filter(q => q.level === level)

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={ui.levelTestTitle} level={level} backTo="back" />
                <main className="max-w-xl mx-auto px-4 py-16 text-center text-gray-400">
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
        const newScore = score + (selected === questions[current].answer ? 1 : 0)
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
        setCurrent(0); setScore(0)
        setSelected(null); setRevealed(false); setDone(false)
    }

    if (done) {
        const passed = score >= PASS_THRESHOLD
        const levelIndex = CEFR_LEVELS.indexOf(level)
        const nextLevel: CEFRLevel | null =
            passed && levelIndex < CEFR_LEVELS.length - 1
                ? CEFR_LEVELS[levelIndex + 1]
                : null

        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={ui.levelTestTitle} level={level} backTo="back" />
                <main className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">{passed ? "🏆" : "📚"}</div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        {passed ? ui.levelTestPassed : ui.levelTestKeepPractising}
                    </h2>
                    <p className="text-gray-600">
                        {fmt(ui.youAnswered, { score, total: questions.length })}
                        {" "}({Math.round((score / questions.length) * 100)}%)
                    </p>
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full">
                        <ResultsActions
                            passed={passed}
                            nextLevel={nextLevel}
                            langId={langId}
                            ui={ui}
                            onRetry={handleRetry}
                        />
                    </div>
                </main>
            </div>
        )
    }

    const q = questions[current]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={ui.levelTestTitle} level={level} backTo="back" />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <div className="w-full flex items-center justify-between text-sm text-gray-500">
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
