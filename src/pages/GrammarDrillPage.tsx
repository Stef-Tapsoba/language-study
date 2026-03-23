// pages/GrammarDrillPage.tsx — Multiple-choice grammar practice drill
//
// A1/A2: Show the English meaning → pick the correct target-language sentence.
// B1+:   Show the target-language sentence → pick the correct English meaning.
//        This shifts the exercise from production-cued to comprehension-cued.
import { useMemo, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel } from "../store/progress"
import { recordActivity } from "../store/stats"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { useDrill } from "../hooks/useDrill"
import { getUI, fmt } from "../i18n"

interface DrillQuestion {
    prompt: string    // displayed in the amber banner
    correct: string   // correct answer
    options: string[] // all 4 choices
    lessonId: string
    lessonTitle: string
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

    const lessonTitleMap = Object.fromEntries(mod.grammar.filter(g => g.level === level).map(g => [g.id, g.title]))

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
                lessonId: ex.lessonId,
                lessonTitle: lessonTitleMap[ex.lessonId] ?? "",
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
            lessonId: ex.lessonId,
            lessonTitle: lessonTitleMap[ex.lessonId] ?? "",
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

    const drill = useDrill(questions)

    useEffect(() => { if (drill.done) recordActivity(langId) }, [drill.done, langId])

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

    if (drill.done) {
        return (
            <DrillDoneScreen
                score={drill.score}
                total={questions.length}
                level={level}
                navTitle={ui.sectionGrammarDrill}
                ui={ui}
                onRestart={drill.restart}
                missed={drill.missed.map(m => ({
                    prompt: m.question.prompt,
                    correct: m.question.correct,
                    yourAnswer: m.yourAnswer,
                }))}
            />
        )
    }

    const q = questions[drill.index]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={ui.sectionGrammarDrill} level={level} backTo="back" />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <div className="w-full flex items-center justify-between text-sm text-gray-500">
                    <span>{fmt(ui.questionOf, { n: drill.index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {drill.score}</span>
                </div>

                {/* Progress strip */}
                <div className="w-full flex gap-1">
                    {questions.map((q, i) => {
                        let dotCls = "bg-gray-200"
                        if (i < drill.index) dotCls = "bg-indigo-500"
                        else if (i === drill.index) dotCls = "bg-indigo-300"
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
                    selected={drill.selected}
                    correct={drill.revealed ? q.correct : null}
                    onSelect={drill.handleSelect}
                />

                <p className="hidden sm:block text-xs text-gray-400">1–4 to select · Enter to continue</p>

                {drill.revealed && (
                    <>
                        {q.lessonTitle && (
                            <p className="text-xs text-center text-gray-500">
                                📖{" "}
                                <Link
                                    to={`/learn/${langId}/grammar/${q.lessonId}`}
                                    className="text-indigo-600 hover:underline"
                                >
                                    {q.lessonTitle}
                                </Link>
                            </p>
                        )}
                        <button
                            onClick={drill.handleNext}
                            className="w-full max-w-xl bg-indigo-600 hover:bg-indigo-700 text-white
                                       font-semibold rounded-xl py-3 transition-colors"
                        >
                            {drill.index + 1 >= questions.length ? ui.seeResults : ui.nextQuestion}
                        </button>
                    </>
                )}
            </main>
        </div>
    )
}
