// pages/GrammarDrillPage.tsx — Multiple-choice grammar practice drill
//
// A1/A2: Show the English meaning → pick the correct target-language sentence.
// B1+:   Show the target-language sentence → pick the correct English meaning.
//        This shifts the exercise from production-cued to comprehension-cued.
import { useMemo, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getGrammarForLevel } from "../data/repo"
import { getCurrentLevel } from "../store/progress"
import { completeDrillSession } from "../store/actions"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { DrillDoneScreen } from "../components/DrillDoneScreen"
import { useDrill } from "../hooks/useDrill"
import { getUI, fmt } from "../i18n"
import { answerMatches } from "../utils/answerMatch"
import { GrammarLesson } from "../types"

interface DrillQuestion {
    prompt: string    // displayed in the amber banner
    correct: string   // correct answer
    options: string[] // all 4 choices
    lessonId: string
    lessonTitle: string
}

type DrillMode = "multiple-choice" | "fill-in"
type FillState = "idle" | "submitted-correct" | "submitted-wrong"
type UI = ReturnType<typeof getUI>
type DrillHandle = ReturnType<typeof useDrill>

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5)
}

function buildQuestions(lessons: GrammarLesson[], level: string): DrillQuestion[] {
    // Tag each example with its lesson id so we can prefer same-lesson distractors
    const tagged = lessons
        .flatMap(g => g.examples.map(ex => ({ ...ex, lessonId: g.id })))
        .filter((ex, i, arr) => arr.findIndex(e => e.native === ex.native) === i)

    if (tagged.length < 4) return []

    const isFlipped = level !== "A1" && level !== "A2"  // B1+ → target → English

    const lessonTitleMap = Object.fromEntries(lessons.map(g => [g.id, g.title]))

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

// ── Mode option button (reused twice in start screen) ────────────────────────

interface ModeOptionProps {
    readonly icon: string
    readonly label: string
    readonly description: string
    readonly selected: boolean
    readonly onClick: () => void
}

function ModeOption({ icon, label, description, selected, onClick }: ModeOptionProps) {
    const borderCls = selected
        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"
        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
    const labelCls = selected
        ? "text-indigo-900 dark:text-indigo-100"
        : "text-gray-900 dark:text-gray-100"
    return (
        <button onClick={onClick} className={`w-full rounded-2xl border-2 px-5 py-4 text-left transition-colors ${borderCls}`}>
            <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">{icon}</span>
                <div>
                    <p className={`text-sm font-semibold ${labelCls}`}>{label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{description}</p>
                </div>
                {selected && <span className="ml-auto text-indigo-600 text-sm self-center">✓</span>}
            </div>
        </button>
    )
}

// ── Start screen ─────────────────────────────────────────────────────────────

interface StartScreenProps {
    readonly level: string
    readonly ui: UI
    readonly questionCount: number
    readonly drillMode: DrillMode
    readonly setDrillMode: (mode: DrillMode) => void
    readonly onStart: () => void
}

function GrammarDrillStartScreen({ level, ui, questionCount, drillMode, setDrillMode, onStart }: StartScreenProps) {
    return (
        <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
            <p className="text-4xl">📝</p>
            <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{ui.sectionGrammarDrill}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{questionCount} questions · {level}</p>
            </div>
            <div className="w-full flex flex-col gap-3">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-left">
                    Choose a mode
                </p>
                <ModeOption
                    icon="🔤"
                    label="Multiple choice"
                    description="Pick the correct sentence from four options"
                    selected={drillMode === "multiple-choice"}
                    onClick={() => setDrillMode("multiple-choice")}
                />
                <ModeOption
                    icon="⌨️"
                    label="Type the answer"
                    description="Active recall — type the sentence from memory"
                    selected={drillMode === "fill-in"}
                    onClick={() => setDrillMode("fill-in")}
                />
            </div>
            <button
                onClick={onStart}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 text-sm transition-colors"
            >
                Start
            </button>
        </main>
    )
}

// ── Lesson link shown after answer reveal ────────────────────────────────────

function LessonLink({ langId, lessonId, lessonTitle }: Readonly<{ langId: string; lessonId: string; lessonTitle: string }>) {
    if (!lessonTitle) return null
    return (
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            📖{" "}
            <Link to={`/learn/${langId}/grammar/${lessonId}`} className="text-indigo-600 hover:underline">
                {lessonTitle}
            </Link>
        </p>
    )
}

// ── Fill-in mode ─────────────────────────────────────────────────────────────

interface FillInModeProps {
    readonly langId: string
    readonly question: DrillQuestion
    readonly isFlipped: boolean
    readonly languageName: string
    readonly ui: UI
    readonly drill: DrillHandle
    readonly questionsLength: number
    readonly fillInput: string
    readonly fillState: FillState
    readonly onInputChange: (val: string) => void
    readonly onSubmit: () => void
    readonly onNext: () => void
}

function FillInMode({ langId, question, isFlipped, languageName, ui, drill, questionsLength, fillInput, fillState, onInputChange, onSubmit, onNext }: FillInModeProps) {
    const placeholder = isFlipped
        ? "Type the English meaning…"
        : `Type the sentence in ${languageName}… (accents and punctuation optional)`

    const inputClsMap: Record<FillState, string> = {
        "idle": "border-gray-300 dark:border-gray-600 focus:border-indigo-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
        "submitted-correct": "border-green-500 bg-green-50 text-green-900",
        "submitted-wrong": "border-red-400 bg-red-50 text-gray-500 line-through",
    }
    const inputCls = inputClsMap[fillState]

    const isLast = drill.index + 1 >= questionsLength

    return (
        <div className="w-full flex flex-col gap-3">
            <form onSubmit={e => { e.preventDefault(); onSubmit() }} className="w-full">
                <input
                    autoFocus
                    aria-label="Type the translation"
                    value={fillInput}
                    onChange={e => onInputChange(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter" && fillState !== "idle") {
                            e.preventDefault()
                            onNext()
                        }
                    }}
                    placeholder={placeholder}
                    readOnly={fillState !== "idle"}
                    className={`w-full rounded-xl border-2 px-4 py-3 text-sm text-center focus:outline-none transition-colors ${inputCls}`}
                />
            </form>
            {fillState === "submitted-correct" && (
                <div className="w-full bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
                    <span className="text-green-600 text-base">✓</span>
                    <p className="text-sm font-medium text-green-800">Correct!</p>
                </div>
            )}
            {fillState === "submitted-wrong" && (
                <div className="w-full bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex flex-col gap-0.5">
                    <p className="text-xs text-red-500 font-medium">Correct answer:</p>
                    <p className="text-sm font-semibold text-red-800">{question.correct}</p>
                </div>
            )}
            {fillState === "idle" ? (
                <button
                    onClick={onSubmit}
                    disabled={!fillInput.trim()}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold rounded-xl py-3 text-sm transition-colors"
                >
                    Check
                </button>
            ) : (
                <>
                    <LessonLink langId={langId} lessonId={question.lessonId} lessonTitle={question.lessonTitle} />
                    <button
                        onClick={onNext}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 transition-colors"
                    >
                        {isLast ? ui.seeResults : ui.nextQuestion}
                    </button>
                </>
            )}
            <p className="hidden sm:block text-xs text-gray-400 dark:text-gray-500 text-center">Enter to check · Enter again to continue</p>
        </div>
    )
}

// ── Multiple-choice mode ──────────────────────────────────────────────────────

interface MultipleChoiceModeProps {
    readonly langId: string
    readonly question: DrillQuestion
    readonly isFlipped: boolean
    readonly ui: UI
    readonly drill: DrillHandle
    readonly questionsLength: number
    readonly onNext: () => void
}

function MultipleChoiceMode({ langId, question, isFlipped, ui, drill, questionsLength, onNext }: MultipleChoiceModeProps) {
    const isLast = drill.index + 1 >= questionsLength
    return (
        <>
            <QuizCard
                question={isFlipped ? ui.grammarDrillQuestionB1 : ui.grammarDrillQuestion}
                options={question.options}
                selected={drill.selected}
                correct={drill.revealed ? question.correct : null}
                onSelect={drill.handleSelect}
            />
            <p className="hidden sm:block text-xs text-gray-400 dark:text-gray-500">1–4 to select · Enter to continue</p>
            {drill.revealed && (
                <>
                    <LessonLink langId={langId} lessonId={question.lessonId} lessonTitle={question.lessonTitle} />
                    <button
                        onClick={onNext}
                        className="w-full max-w-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 transition-colors"
                    >
                        {isLast ? ui.seeResults : ui.nextQuestion}
                    </button>
                </>
            )}
        </>
    )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export function GrammarDrillPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)
    const isFlipped = level !== "A1" && level !== "A2"

    const questions = useMemo(() => buildQuestions(getGrammarForLevel(langId, level), level), [langId, level])

    const drill = useDrill(questions)

    const [started, setStarted] = useState(false)
    const [drillMode, setDrillMode] = useState<DrillMode>("multiple-choice")
    const [fillInput, setFillInput] = useState("")
    const [fillState, setFillState] = useState<FillState>("idle")

    function handleNext() {
        setFillInput("")
        setFillState("idle")
        drill.handleNext()
    }

    function handleFillSubmit() {
        if (fillState !== "idle" || !fillInput.trim()) return
        const current = questions[drill.index]
        if (!current) return
        const isCorrect = answerMatches(fillInput, current.correct)
        setFillState(isCorrect ? "submitted-correct" : "submitted-wrong")
        drill.handleSelect(isCorrect ? current.correct : fillInput)
    }

    useEffect(() => { if (drill.done) completeDrillSession(langId) }, [drill.done, langId])

    if (!language) return null

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.sectionGrammarDrill} level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">Not enough grammar examples at {level} yet</p>
                </div>
            </div>
        )
    }

    if (!started) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={ui.sectionGrammarDrill} level={level} backTo={`/learn/${langId}`} />
                <GrammarDrillStartScreen
                    level={level}
                    ui={ui}
                    questionCount={questions.length}
                    drillMode={drillMode}
                    setDrillMode={setDrillMode}
                    onStart={() => setStarted(true)}
                />
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
                backTo={`/learn/${langId}`}
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={ui.sectionGrammarDrill} level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <div className="w-full flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{fmt(ui.questionOf, { n: drill.index + 1, total: questions.length })}</span>
                    <span className="font-medium">{ui.scoreLabel}: {drill.score}</span>
                </div>

                {/* Progress strip */}
                <div className="w-full flex gap-1">
                    {questions.map((item, i) => {
                        let dotCls = "bg-gray-200 dark:bg-gray-600"
                        if (i < drill.index) dotCls = "bg-indigo-500"
                        else if (i === drill.index) dotCls = "bg-indigo-300"
                        return <div key={item.prompt} className={`h-1.5 flex-1 rounded-full transition-colors ${dotCls}`} />
                    })}
                </div>

                {/* Instruction banner */}
                <div className="w-full bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 text-center">
                    <p className="text-xs text-amber-600 font-medium uppercase tracking-wide mb-1">
                        {isFlipped ? ui.grammarDrillInstructionB1 : ui.grammarDrillInstruction}
                    </p>
                    <p className="text-lg font-semibold text-amber-900">{q.prompt}</p>
                </div>

                {drillMode === "fill-in" ? (
                    <FillInMode
                        langId={langId}
                        question={q}
                        isFlipped={isFlipped}
                        languageName={language.name}
                        ui={ui}
                        drill={drill}
                        questionsLength={questions.length}
                        fillInput={fillInput}
                        fillState={fillState}
                        onInputChange={val => { if (fillState === "idle") setFillInput(val) }}
                        onSubmit={handleFillSubmit}
                        onNext={handleNext}
                    />
                ) : (
                    <MultipleChoiceMode
                        langId={langId}
                        question={q}
                        isFlipped={isFlipped}
                        ui={ui}
                        drill={drill}
                        questionsLength={questions.length}
                        onNext={handleNext}
                    />
                )}
            </main>
        </div>
    )
}
