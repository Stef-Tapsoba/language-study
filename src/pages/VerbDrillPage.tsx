// pages/VerbDrillPage.tsx — Conjugation fill-in-the-blank drill
import { useMemo, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getVerbsForLevel } from "../data/repo"
import { getCurrentLevel } from "../store/progress"
import { completeDrillSession } from "../store/actions"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { LevelBadge } from "../components/LevelBadge"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { useDrill } from "../hooks/useDrill"
import { Verb } from "../types"
import { getUI, fmt } from "../i18n"

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
    const all: Omit<DrillQuestion, "options">[] = []
    for (const verb of verbs) {
        for (const conj of verb.conjugations) {
            for (const form of conj.forms) {
                all.push({ verb, tense: conj.tense, pronoun: form.pronoun, correct: form.form })
            }
        }
    }

    // Group forms by tense for smarter distractor selection
    const formsByTense = new Map<string, string[]>()
    for (const q of all) {
        const bucket = formsByTense.get(q.tense) ?? []
        if (!bucket.includes(q.correct)) bucket.push(q.correct)
        formsByTense.set(q.tense, bucket)
    }

    const allForms = [...new Set(all.map(q => q.correct))]

    return shuffle(all).slice(0, 10).map(q => {
        // Prefer same-tense distractors so wrong answers look plausibly similar
        const sameTense = (formsByTense.get(q.tense) ?? []).filter(f => f !== q.correct)
        const pool = sameTense.length >= 3 ? sameTense : allForms.filter(f => f !== q.correct)
        const distractors = shuffle(pool).slice(0, 3)
        return { ...q, options: shuffle([q.correct, ...distractors]) }
    })
}

function progressDotClass(i: number, index: number): string {
    if (i < index) return "bg-indigo-500"
    if (i === index) return "bg-indigo-300"
    return "bg-gray-200 dark:bg-gray-600"
}

export function VerbDrillPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)

    // At B1+, hide the English meaning — learner should rely on the verb form alone
    const showMeaning = level === "A1" || level === "A2"

    const questions = useMemo(
        () => buildQuestions(getVerbsForLevel(langId, level)),
        [langId, level]
    )

    const drill = useDrill(questions)

    useEffect(() => { if (drill.done) completeDrillSession(langId, "verb").catch(console.error) }, [drill.done, langId])

    if (!language) return null

    if (questions.length === 0) {
        const prevLevelMap: Record<string, string> = { A2: "A1", B1: "A2", B2: "B1", C1: "B2" }
        const prevLevel = prevLevelMap[level] ?? null
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.sectionVerbDrill} level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500 px-4 text-center">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium text-gray-600 dark:text-gray-400 mb-1">
                        {level} content is coming soon!
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        {prevLevel
                            ? `In the meantime, review your ${prevLevel} knowledge or explore Reading and Culture.`
                            : "In the meantime, explore Reading and Culture."}
                    </p>
                    <div className="flex flex-col gap-3 w-full max-w-xs">
                        <Link
                            to={`/learn/${langId}/reading`}
                            className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
                        >
                            Go to Reading
                        </Link>
                        <Link
                            to={`/learn/${langId}`}
                            className="block w-full text-center px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 text-sm font-medium"
                        >
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    if (drill.done) {
        const pct = Math.round((drill.score / questions.length) * 100)
        let encouragement = "Keep practising — it gets easier with repetition."
        if (pct >= 80) encouragement = "Excellent! You're ready to move on."
        else if (pct >= 60) encouragement = "Good progress — review the mistakes and try again."
        return (
            <DrillDoneScreen
                score={drill.score}
                total={questions.length}
                level={level}
                navTitle={ui.sectionVerbDrill}
                ui={ui}
                onRestart={drill.restart}
                backTo={`/learn/${langId}`}
                encouragement={encouragement}
                missed={drill.missed.map(m => ({
                    prompt: `${m.question.verb.infinitive} — ${m.question.tense} — ${m.question.pronoun}`,
                    correct: m.question.correct,
                    yourAnswer: m.yourAnswer,
                }))}
            />
        )
    }

    const q = questions[drill.index]

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={ui.sectionVerbDrill} level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <div className="w-full flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{fmt(ui.questionOf, { n: drill.index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {drill.score}</span>
                </div>

                {/* Progress strip */}
                <div className="w-full flex gap-1">
                    {questions.map((dq, i) => (
                        <div
                            key={`${dq.verb.infinitive}-${dq.tense}-${dq.pronoun}`}
                            className={`h-1.5 flex-1 rounded-full transition-colors ${progressDotClass(i, drill.index)}`}
                        />
                    ))}
                </div>

                {/* Verb context banner */}
                <div className="w-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 px-5 py-3 flex
                                items-center gap-3">
                    <div className="flex-1">
                        <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-1">{q.tense}</span>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                            {q.verb.infinitive}
                            {q.verb.romanized && (
                                <span className="ml-2 text-sm font-normal text-indigo-500">
                                    {q.verb.romanized}
                                </span>
                            )}
                        </p>
                        {/* English meaning: shown at A1/A2, hidden at B1+ */}
                        {showMeaning && (
                            <p className="text-sm text-gray-500 dark:text-gray-400">{q.verb.meaning}</p>
                        )}
                    </div>
                    <LevelBadge level={q.verb.level} />
                </div>

                <QuizCard
                    question={fmt(ui.conjugateFor, { pronoun: q.pronoun })}
                    options={q.options}
                    selected={drill.selected}
                    correct={drill.revealed ? q.correct : null}
                    onSelect={drill.handleSelect}
                />

                <p className="hidden sm:block text-xs text-gray-400 dark:text-gray-500">1–4 to select · Enter to continue</p>

                {drill.revealed && (
                    <button
                        onClick={drill.handleNext}
                        className="w-full max-w-xl bg-indigo-600 hover:bg-indigo-700 text-white
                                   font-semibold rounded-xl py-3 transition-colors"
                    >
                        {drill.index + 1 >= questions.length ? ui.seeResults : ui.nextQuestion}
                    </button>
                )}
            </main>
        </div>
    )
}
