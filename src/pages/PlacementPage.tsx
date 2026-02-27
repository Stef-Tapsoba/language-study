// pages/PlacementPage.tsx
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { setCurrentLevel } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { LevelBadge } from "../components/LevelBadge"
import { CEFRLevel, CEFR_LEVELS } from "../types"

type Tab = "test" | "manual"

function scoreToLevel(score: number): CEFRLevel {
    if (score >= 9) return "B2"
    if (score >= 7) return "B1"
    if (score >= 5) return "A2"
    return "A1"
}

export function PlacementPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const language = getLanguage(langId)
    const mod = getModule(langId)

    const [tab, setTab] = useState<Tab>("test")
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [suggested, setSuggested] = useState<CEFRLevel>("A1")

    if (!language || !mod) return null

    const questions = mod.placementQuestions

    function handleSelect(opt: string) {
        setSelected(opt)
        setRevealed(true)
    }

    function handleNext() {
        const newScore = score + (selected === questions[current].answer ? 1 : 0)
        if (current + 1 >= questions.length) {
            const level = scoreToLevel(newScore)
            setSuggested(level)
            setScore(newScore)
            setDone(true)
        } else {
            setScore(newScore)
            setCurrent(c => c + 1)
            setSelected(null)
            setRevealed(false)
        }
    }

    function confirmLevel(level: CEFRLevel) {
        setCurrentLevel(langId, level)
        navigate(`/learn/${langId}`)
    }

    if (done) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={`${language.flag} ${language.name}`} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">🎉</div>
                    <h2 className="text-2xl font-bold text-gray-900">Placement complete!</h2>
                    <p className="text-gray-600">
                        You answered <strong>{score}</strong> out of <strong>{questions.length}</strong> correctly.
                    </p>
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full">
                        <p className="text-sm text-gray-500 mb-3">Suggested level</p>
                        <div className="flex justify-center mb-4">
                            <LevelBadge level={suggested} />
                        </div>
                        <button
                            onClick={() => confirmLevel(suggested)}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                       rounded-xl py-2.5 text-sm transition-colors mb-3"
                        >
                            Start at {suggested}
                        </button>
                        <p className="text-xs text-gray-400 mb-2">Or choose a different level:</p>
                        <div className="flex justify-center gap-2 flex-wrap">
                            {CEFR_LEVELS.map(l => (
                                <button
                                    key={l}
                                    onClick={() => confirmLevel(l)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors
                                        ${l === suggested
                                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                            : "border-gray-300 text-gray-600 hover:border-indigo-400"}`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    const q = questions[current]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={`${language.flag} Placement Test`} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                {tab === "test" ? (
                    <>
                        <div className="w-full flex items-center justify-between text-sm text-gray-500">
                            <span>Question {current + 1} of {questions.length}</span>
                            <button
                                onClick={() => setTab("manual")}
                                className="text-indigo-600 hover:underline"
                            >
                                Set level manually
                            </button>
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
                    </>
                ) : (
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 w-full">
                        <h2 className="font-semibold text-gray-900 mb-2">Choose your level</h2>
                        <p className="text-sm text-gray-500 mb-5">
                            Select the CEFR level that best describes your current proficiency.
                        </p>
                        <div className="flex flex-col gap-3">
                            {CEFR_LEVELS.map(l => (
                                <button
                                    key={l}
                                    onClick={() => confirmLevel(l)}
                                    className="border border-gray-200 rounded-xl px-4 py-3 text-left
                                               hover:border-indigo-400 hover:bg-indigo-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 mr-2">{l}</span>
                                    <span className="text-sm text-gray-500">
                                        {l === "A1" && "Absolute beginner"}
                                        {l === "A2" && "Elementary"}
                                        {l === "B1" && "Intermediate"}
                                        {l === "B2" && "Upper intermediate"}
                                        {l === "C1" && "Advanced"}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setTab("test")}
                            className="mt-4 text-sm text-indigo-600 hover:underline"
                        >
                            Take the placement test instead
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}
