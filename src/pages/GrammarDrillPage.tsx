// pages/GrammarDrillPage.tsx — Multiple-choice grammar practice drill
//
// A1/A2: Show the English meaning → pick the correct target-language sentence.
// B1+:   Show the target-language sentence → pick the correct English meaning.
//        This shifts the exercise from production-cued to comprehension-cued.
import { useState, useMemo } from "react"
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { getUI, fmt } from "../i18n"

interface DrillQuestion {
    prompt: string    // displayed in the amber banner
    correct: string   // correct answer
    options: string[] // all 4 choices
}

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5)
}

function buildQuestions(mod: ReturnType<typeof getModule>, level: string): DrillQuestion[] {
    if (!mod) return []

    // Tag each example with its lesson id so we can prefer same-lesson distractors
    const tagged = mod.grammar
        .filter(g => g.level === level)
        .flatMap(g => g.examples.map(ex => ({ ...ex, lessonId: g.id })))
        .filter((ex, i, arr) => arr.findIndex(e => e.native === ex.native) === i)

    if (tagged.length < 4) return []

    const isFlipped = level !== "A1" && level !== "A2"  // B1+ → target → English

    if (isFlipped) {
        // B1+: target sentence prompt → pick English meaning
        return shuffle(tagged).slice(0, 10).map(ex => {
            const sameLesson = tagged.filter(e => e.lessonId === ex.lessonId && e.translation !== ex.translation).map(e => e.translation)
            const allOthers = tagged.filter(e => e.translation !== ex.translation).map(e => e.translation)
            const pool = sameLesson.length >= 3 ? sameLesson : allOthers
            const distractors = shuffle(pool).slice(0, 3)
            return {
                prompt: ex.native,
                correct: ex.translation,
                options: shuffle([ex.translation, ...distractors]),
            }
        })
    }

    // A1/A2: English prompt → pick target sentence
    return shuffle(tagged).slice(0, 10).map(ex => {
        const sameLesson = tagged.filter(e => e.lessonId === ex.lessonId && e.native !== ex.native).map(e => e.native)
        const allOthers = tagged.filter(e => e.native !== ex.native).map(e => e.native)
        const pool = sameLesson.length >= 3 ? sameLesson : allOthers
        const distractors = shuffle(pool).slice(0, 3)
        return {
            prompt: ex.translation,
            correct: ex.native,
            options: shuffle([ex.native, ...distractors]),
        }
    })
}

export function GrammarDrillPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)
    const isFlipped = level !== "A1" && level !== "A2"

    const questions = useMemo(() => buildQuestions(mod, level), [langId, level])

    const [index, setIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)

    if (!language || !mod) return null

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={ui.sectionGrammarDrill} level={level} backTo="back" />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">Not enough grammar examples at {level} yet</p>
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
                <NavBar title={ui.sectionGrammarDrill} level={level} backTo="back" />
                <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">{pct >= 70 ? "🏆" : "💪"}</div>
                    <h2 className="text-2xl font-bold text-gray-900">{ui.drillComplete}</h2>
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full flex justify-around">
                        <div>
                            <p className="text-3xl font-bold text-green-600">{score}</p>
                            <p className="text-xs text-gray-500 mt-1">{ui.scoreCorrect}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-red-500">{questions.length - score}</p>
                            <p className="text-xs text-gray-500 mt-1">{ui.scoreWrong}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-indigo-600">{pct}%</p>
                            <p className="text-xs text-gray-500 mt-1">{ui.scoreLabel}</p>
                        </div>
                    </div>
                    <button
                        onClick={restart}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                   rounded-xl py-2.5 text-sm transition-colors"
                    >
                        {ui.tryAgain}
                    </button>
                </main>
            </div>
        )
    }

    const q = questions[index]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={ui.sectionGrammarDrill} level={level} backTo="back" />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <div className="w-full flex items-center justify-between text-sm text-gray-500">
                    <span>{fmt(ui.questionOf, { n: index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {score}</span>
                </div>

                {/* Progress strip */}
                <div className="w-full flex gap-1">
                    {questions.map((q, i) => {
                        let dotCls = "bg-gray-200"
                        if (i < index) dotCls = "bg-indigo-500"
                        else if (i === index) dotCls = "bg-indigo-300"
                        return <div key={q.prompt} className={`h-1.5 flex-1 rounded-full transition-colors ${dotCls}`} />
                    })}
                </div>

                {/* Instruction banner */}
                <div className="w-full bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 text-center">
                    <p className="text-xs text-amber-600 font-medium uppercase tracking-wide mb-1">
                        {isFlipped ? ui.grammarDrillInstructionB1 : ui.grammarDrillInstruction}
                    </p>
                    <p className="text-lg font-semibold text-amber-900">{q.prompt}</p>
                </div>

                <QuizCard
                    question={isFlipped ? ui.grammarDrillQuestionB1 : ui.grammarDrillQuestion}
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
                        {index + 1 >= questions.length ? ui.seeResults : ui.nextQuestion}
                    </button>
                )}
            </main>
        </div>
    )
}
