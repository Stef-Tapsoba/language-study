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

const PASS_THRESHOLD = 12  // out of 15

export function LevelTestPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)

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
                <NavBar title="Level Test" level={level} backTo={`/learn/${langId}`} />
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

    if (done) {
        const passed = score >= PASS_THRESHOLD
        const levelIndex = CEFR_LEVELS.indexOf(level)
        const nextLevel = passed && levelIndex < CEFR_LEVELS.length - 1
            ? CEFR_LEVELS[levelIndex + 1] as CEFRLevel
            : null

        function handleAdvance() {
            if (nextLevel) setCurrentLevel(langId, nextLevel)
            navigate(`/learn/${langId}`)
        }

        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title="Level Test" level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">{passed ? "🏆" : "📚"}</div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        {passed ? "Level passed!" : "Keep practising!"}
                    </h2>
                    <p className="text-gray-600">
                        You answered <strong>{score}</strong> out of <strong>{questions.length}</strong> correctly.
                        {" "}({Math.round((score / questions.length) * 100)}%)
                    </p>

                    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full">
                        {passed && nextLevel ? (
                            <>
                                <p className="text-sm text-gray-500 mb-3">You can now advance to</p>
                                <div className="flex justify-center mb-4">
                                    <LevelBadge level={nextLevel} />
                                </div>
                                <button
                                    onClick={handleAdvance}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                               rounded-xl py-2.5 text-sm transition-colors"
                                >
                                    Advance to {nextLevel}
                                </button>
                            </>
                        ) : passed ? (
                            <>
                                <p className="text-sm text-gray-600 mb-4">
                                    Congratulations — you've reached the highest level!
                                </p>
                                <button
                                    onClick={() => navigate(`/learn/${langId}`)}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                               rounded-xl py-2.5 text-sm transition-colors"
                                >
                                    Back to dashboard
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="text-sm text-gray-600 mb-1">
                                    You need <strong>{PASS_THRESHOLD}</strong> correct answers to advance.
                                </p>
                                <p className="text-xs text-gray-400 mb-4">
                                    Review grammar, vocabulary, and verbs and try again when you're ready.
                                </p>
                                <button
                                    onClick={() => navigate(`/learn/${langId}`)}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                               rounded-xl py-2.5 text-sm transition-colors mb-2"
                                >
                                    Back to dashboard
                                </button>
                                <button
                                    onClick={() => {
                                        setCurrent(0); setScore(0)
                                        setSelected(null); setRevealed(false); setDone(false)
                                    }}
                                    className="w-full border border-indigo-300 text-indigo-700 font-semibold
                                               rounded-xl py-2.5 text-sm transition-colors hover:bg-indigo-50"
                                >
                                    Try again
                                </button>
                            </>
                        )}
                    </div>
                </main>
            </div>
        )
    }

    const q = questions[current]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title="Level Test" level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <div className="w-full flex items-center justify-between text-sm text-gray-500">
                    <span>Question {current + 1} of {questions.length}</span>
                    <span className="font-medium">Score: {score}</span>
                </div>

                {/* Progress strip */}
                <div className="w-full flex gap-1">
                    {questions.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 flex-1 rounded-full transition-colors ${i < current ? "bg-indigo-500" :
                                    i === current ? "bg-indigo-300" :
                                        "bg-gray-200"
                                }`}
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
                        {current + 1 >= questions.length ? "See results" : "Next question"}
                    </button>
                )}
            </main>
        </div>
    )
}
