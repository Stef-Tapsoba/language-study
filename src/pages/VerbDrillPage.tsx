// pages/VerbDrillPage.tsx
import { useState, useMemo } from "react"
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { LevelBadge } from "../components/LevelBadge"
import { Verb } from "../types"

interface DrillQuestion {
    verb: Verb
    tense: string
    pronoun: string
    correct: string
    options: string[]
}

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5)
}

function buildQuestions(verbs: Verb[]): DrillQuestion[] {
    // Collect all (verb, tense, form) combos
    const all: Omit<DrillQuestion, "options">[] = []
    for (const verb of verbs) {
        for (const conj of verb.conjugations) {
            for (const form of conj.forms) {
                all.push({ verb, tense: conj.tense, pronoun: form.pronoun, correct: form.form })
            }
        }
    }

    // All unique forms for distractor pool
    const allForms = [...new Set(all.map(q => q.correct))]

    return shuffle(all).slice(0, 10).map(q => {
        const distractors = shuffle(allForms.filter(f => f !== q.correct)).slice(0, 3)
        return { ...q, options: shuffle([q.correct, ...distractors]) }
    })
}

export function VerbDrillPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)

    const questions = useMemo(
        () => buildQuestions(mod?.verbs.filter(v => v.level === level) ?? []),
        [langId, level]
    )

    const [index, setIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)

    if (!language || !mod) return null

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title="Verb Drill" level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">No verbs to drill at {level} yet</p>
                </div>
            </div>
        )
    }

    function handleSelect(opt: string) {
        setSelected(opt)
        setRevealed(true)
    }

    function handleNext() {
        const newScore = score + (selected === questions[index].correct ? 1 : 0)
        if (index + 1 >= questions.length) {
            setScore(newScore)
            setDone(true)
        } else {
            setScore(newScore)
            setIndex(i => i + 1)
            setSelected(null)
            setRevealed(false)
        }
    }

    function restart() {
        setIndex(0); setScore(0); setSelected(null); setRevealed(false); setDone(false)
    }

    if (done) {
        const pct = Math.round((score / questions.length) * 100)
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title="Verb Drill" level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">{pct >= 70 ? "🏆" : "💪"}</div>
                    <h2 className="text-2xl font-bold text-gray-900">Drill complete!</h2>
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full flex justify-around">
                        <div>
                            <p className="text-3xl font-bold text-green-600">{score}</p>
                            <p className="text-xs text-gray-500 mt-1">Correct</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-red-500">{questions.length - score}</p>
                            <p className="text-xs text-gray-500 mt-1">Wrong</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-indigo-600">{pct}%</p>
                            <p className="text-xs text-gray-500 mt-1">Score</p>
                        </div>
                    </div>
                    <button
                        onClick={restart}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                   rounded-xl py-2.5 text-sm transition-colors"
                    >
                        Try again
                    </button>
                </main>
            </div>
        )
    }

    const q = questions[index]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title="Verb Drill" level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <div className="w-full flex items-center justify-between text-sm text-gray-500">
                    <span>Question {index + 1} of {questions.length}</span>
                    <span className="font-medium">Score: {score}</span>
                </div>

                {/* Progress strip */}
                <div className="w-full flex gap-1">
                    {questions.map((_, i) => (
                        <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < index ? "bg-indigo-500" :
                                i === index ? "bg-indigo-300" : "bg-gray-200"
                            }`} />
                    ))}
                </div>

                {/* Verb context banner */}
                <div className="w-full bg-white rounded-2xl border border-gray-200 px-5 py-3 flex
                                items-center gap-3">
                    <div className="flex-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{q.tense}</p>
                        <p className="font-semibold text-gray-900">
                            {q.verb.infinitive}
                            {q.verb.romanized && (
                                <span className="ml-2 text-sm font-normal text-indigo-500">
                                    {q.verb.romanized}
                                </span>
                            )}
                        </p>
                        <p className="text-sm text-gray-500">{q.verb.meaning}</p>
                    </div>
                    <LevelBadge level={q.verb.level} />
                </div>

                <QuizCard
                    question={`Conjugate for: ${q.pronoun}`}
                    options={q.options}
                    selected={selected}
                    correct={revealed ? q.correct : null}
                    onSelect={handleSelect}
                />

                {revealed && (
                    <button
                        onClick={handleNext}
                        className="w-full max-w-xl bg-indigo-600 hover:bg-indigo-700 text-white
                                   font-semibold rounded-xl py-3 transition-colors"
                    >
                        {index + 1 >= questions.length ? "See results" : "Next"}
                    </button>
                )}
            </main>
        </div>
    )
}
