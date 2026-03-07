// pages/ListeningPage.tsx
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel, markLessonComplete, getCompletedLessons } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { QuizCard } from "../components/QuizCard"
import { ListeningPlayer } from "../components/ListeningPlayer"
import { ListeningExercise } from "../types"
import { getUI, fmt } from "../i18n"

type TranscriptMode = "shown" | "toggle" | "hidden"

function getTranscriptMode(level: string): TranscriptMode {
    if (level === "A1") return "shown"
    if (level === "A2") return "toggle"
    return "hidden"
}

// ---------------------------------------------------------------------------
// ExerciseBrowse — list of exercise cards
// ---------------------------------------------------------------------------
function ExerciseBrowse({ exercises, completed, onSelect, ui }: Readonly<{
    exercises: ListeningExercise[]
    completed: string[]
    onSelect: (e: ListeningExercise) => void
    ui: ReturnType<typeof getUI>
}>) {
    return (
        <div className="flex flex-col gap-3">
            {exercises.map(ex => (
                <button
                    key={ex.id}
                    onClick={() => onSelect(ex)}
                    className="w-full text-left bg-white rounded-2xl border border-gray-200 p-4
                               hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-indigo-500 text-lg">🎧</span>
                                {completed.includes(ex.id) && (
                                    <span className="text-xs text-green-600 font-medium">✓</span>
                                )}
                            </div>
                            <p className="font-semibold text-gray-900">{ex.title}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{ex.questions.length} Q</p>
                        </div>
                        <LevelBadge level={ex.level} />
                    </div>
                </button>
            ))}
        </div>
    )
}

// ---------------------------------------------------------------------------
// ExerciseListen — listen to a single exercise
// ---------------------------------------------------------------------------
function ExerciseListen({ exercise, langId, level, completed, onBack, ui }: Readonly<{
    exercise: ListeningExercise
    langId: string
    level: string
    completed: string[]
    onBack: () => void
    ui: ReturnType<typeof getUI>
}>) {
    const transcriptMode = getTranscriptMode(level)
    const [transcriptShown, setTranscriptShown] = useState(transcriptMode === "shown")
    const [translationShown, setTranslationShown] = useState(false)
    const [quizOpen, setQuizOpen] = useState(false)
    const [quizIndex, setQuizIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [quizScore, setQuizScore] = useState(0)
    const [quizDone, setQuizDone] = useState(false)
    const [markedListened, setMarkedListened] = useState(completed.includes(exercise.id))

    function handleMarkListened() {
        markLessonComplete(langId, exercise.id)
        setMarkedListened(true)
    }

    function handleSelect(opt: string) {
        setSelected(opt)
        setRevealed(true)
    }

    function handleNext() {
        const newScore = quizScore + (selected === exercise.questions[quizIndex].answer ? 1 : 0)
        if (quizIndex + 1 >= exercise.questions.length) {
            setQuizScore(newScore)
            setQuizDone(true)
        } else {
            setQuizScore(newScore)
            setQuizIndex(i => i + 1)
            setSelected(null)
            setRevealed(false)
        }
    }

    return (
        <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
                <h2 className="text-xl font-bold text-gray-900">{exercise.title}</h2>
                <LevelBadge level={exercise.level} />
            </div>

            {/* Player */}
            <ListeningPlayer
                script={exercise.script}
                langId={langId}
                ui={ui}
                onEnded={() => !quizOpen && setQuizOpen(true)}
            />

            {/* Transcript — A1: shown by default; A2: hidden by default; B1+: not shown */}
            {transcriptMode !== "hidden" && (
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <button
                        onClick={() => setTranscriptShown(v => !v)}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <span>{transcriptShown ? ui.hideTranscript : ui.showTranscript}</span>
                        <span className="text-gray-400">{transcriptShown ? "▲" : "▼"}</span>
                    </button>
                    {transcriptShown && (
                        <p className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">
                            {exercise.script}
                        </p>
                    )}
                </div>
            )}

            {/* English translation — A1/A2: available; B1+: not shown */}
            {(level === "A1" || level === "A2") && (
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <button
                        onClick={() => setTranslationShown(v => !v)}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <span>{translationShown ? ui.hideEnglish : ui.showEnglish}</span>
                        <span className="text-gray-400">{translationShown ? "▲" : "▼"}</span>
                    </button>
                    {translationShown && (
                        <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                            {exercise.translation}
                        </p>
                    )}
                </div>
            )}

            {/* Show questions button */}
            {!quizOpen && (
                <button
                    onClick={() => setQuizOpen(true)}
                    className="w-full border border-indigo-300 text-indigo-700 font-semibold
                               rounded-xl py-2.5 text-sm transition-colors hover:bg-indigo-50"
                >
                    {ui.showQuestions}
                </button>
            )}

            {/* Comprehension quiz */}
            {quizOpen && (
                quizDone ? (
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
                        <div className="text-3xl mb-2">
                            {quizScore === exercise.questions.length ? "🎉" : "💪"}
                        </div>
                        <p className="font-semibold text-gray-900">
                            {fmt(ui.youAnswered, { score: quizScore, total: exercise.questions.length })}
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{fmt(ui.questionOf, { n: quizIndex + 1, total: exercise.questions.length })}</span>
                            <span>{ui.scoreLabel}: {quizScore}</span>
                        </div>
                        <QuizCard
                            question={exercise.questions[quizIndex].prompt}
                            options={exercise.questions[quizIndex].options}
                            selected={selected}
                            correct={revealed ? exercise.questions[quizIndex].answer : null}
                            onSelect={handleSelect}
                        />
                        {revealed && (
                            <button
                                onClick={handleNext}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white
                                           font-semibold rounded-xl py-3 transition-colors"
                            >
                                {quizIndex + 1 >= exercise.questions.length ? ui.seeResults : ui.nextQuestion}
                            </button>
                        )}
                    </div>
                )
            )}

            {/* Mark as listened */}
            <button
                onClick={markedListened ? undefined : handleMarkListened}
                disabled={markedListened}
                className={`w-full font-semibold rounded-xl py-2.5 text-sm transition-colors border ${markedListened
                    ? "border-green-300 text-green-700 bg-green-50 cursor-default"
                    : "border-gray-200 text-gray-700 hover:border-indigo-400"
                    }`}
            >
                {markedListened ? `✓ ${ui.listeningComplete}` : ui.markAsListened}
            </button>

            {/* Back */}
            <button
                onClick={onBack}
                className="text-sm text-indigo-600 hover:underline text-center"
            >
                ← {ui.backToDashboard}
            </button>
        </div>
    )
}

// ---------------------------------------------------------------------------
// ListeningPage
// ---------------------------------------------------------------------------
export function ListeningPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)

    const [selectedExercise, setSelectedExercise] = useState<ListeningExercise | null>(null)

    if (!language || !mod) return null

    const exercises = (mod.listeningExercises ?? []).filter(e => e.level === level)
    const completed = getCompletedLessons(langId)

    if (exercises.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={ui.sectionListening} level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">{fmt(ui.noExercisesYet, { level })}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={ui.sectionListening} level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8">
                {selectedExercise ? (
                    <ExerciseListen
                        exercise={selectedExercise}
                        langId={langId}
                        level={level}
                        completed={completed}
                        onBack={() => setSelectedExercise(null)}
                        ui={ui}
                    />
                ) : (
                    <ExerciseBrowse
                        exercises={exercises}
                        completed={completed}
                        onSelect={setSelectedExercise}
                        ui={ui}
                    />
                )}
            </main>
        </div>
    )
}
