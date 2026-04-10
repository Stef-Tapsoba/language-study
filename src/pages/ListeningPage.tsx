// pages/ListeningPage.tsx — Listening exercise browser with TTS playback
import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { useProgress } from "../context/ProgressContext"
import { useStatsStore } from "../store/useStatsStore"
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
                    className="w-full text-left bg-surface-card rounded-2xl border border-border-default p-4
                               hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-indigo-500 text-lg">🎧</span>
                                {completed.includes(ex.id) && (
                                    <span className="text-xs text-grammar font-medium">✓</span>
                                )}
                            </div>
                            <p className="font-semibold text-text-pri">{ex.title}</p>
                            <p className="text-xs text-text-ter mt-0.5">{ex.questions.length} Q</p>
                        </div>
                        <LevelBadge level={ex.level} />
                    </div>
                </button>
            ))}
        </div>
    )
}

// ---------------------------------------------------------------------------
// TranscriptContent — dialogue turns or flat script
// ---------------------------------------------------------------------------
function TranscriptContent({ exercise }: Readonly<{ exercise: ListeningExercise }>) {
    if (exercise.dialogue) {
        return (
            <div className="px-5 pb-4 flex flex-col gap-2.5">
                {exercise.dialogue.map((line) => (
                    <div key={`${line.speaker}-${line.text.slice(0, 20)}`} className="flex gap-3 text-sm">
                        <span className="font-semibold text-indigo-600 shrink-0 w-14 pt-0.5 text-right">
                            {line.speaker}
                        </span>
                        <div className="flex-1">
                            <p className="text-text-pri">{line.text}</p>
                            {line.translation && (
                                <p className="text-xs text-text-ter mt-0.5">{line.translation}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <p className="px-5 pb-4 text-sm text-text-sec leading-relaxed">
            {exercise.script}
        </p>
    )
}

// ---------------------------------------------------------------------------
// ComprehensionQuiz — in-exercise quiz state machine
// ---------------------------------------------------------------------------
function ComprehensionQuiz({ exercise, onAnswer, onComplete, ui }: Readonly<{
    exercise: ListeningExercise
    onAnswer: (correct: boolean) => void
    onComplete: () => void
    ui: ReturnType<typeof getUI>
}>) {
    const [quizIndex, setQuizIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [quizScore, setQuizScore] = useState(0)
    const [quizDone, setQuizDone] = useState(false)

    function handleSelect(opt: string) { setSelected(opt); setRevealed(true) }

    function handleNext() {
        const isCorrect = selected === exercise.questions[quizIndex].answer
        onAnswer(isCorrect)
        const newScore = quizScore + (isCorrect ? 1 : 0)
        if (quizIndex + 1 >= exercise.questions.length) {
            onComplete()
            setQuizScore(newScore); setQuizDone(true)
        } else {
            setQuizScore(newScore); setQuizIndex(i => i + 1); setSelected(null); setRevealed(false)
        }
    }

    if (quizDone) {
        return (
            <div className="bg-surface-card rounded-2xl border border-border-default p-5 text-center">
                <div className="text-3xl mb-2">{quizScore === exercise.questions.length ? "🎉" : "💪"}</div>
                <p className="font-semibold text-text-pri">
                    {fmt(ui.youAnswered, { score: quizScore, total: exercise.questions.length })}
                </p>
            </div>
        )
    }

    const q = exercise.questions[quizIndex]
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm text-text-sec">
                <span>{fmt(ui.questionOf, { n: quizIndex + 1, total: exercise.questions.length })}</span>
                <span>{ui.scoreLabel}: {quizScore}</span>
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
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 transition-colors"
                >
                    {quizIndex + 1 >= exercise.questions.length ? ui.seeResults : ui.nextQuestion}
                </button>
            )}
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
    const [markedListened, setMarkedListened] = useState(completed.includes(exercise.id))
    const { markLessonComplete } = useProgress()

    function handleMarkListened() {
        markLessonComplete(langId, exercise.id, "listening")
        setMarkedListened(true)
    }

    return (
        <div className="flex flex-col gap-5 pb-24">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
                <h2 className="text-xl font-bold text-text-pri">{exercise.title}</h2>
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
                <div className="bg-surface-card rounded-2xl border border-border-default overflow-hidden">
                    <button
                        onClick={() => setTranscriptShown(v => !v)}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-text-sec hover:bg-surface-elevated"
                    >
                        <span>{transcriptShown ? ui.hideTranscript : ui.showTranscript}</span>
                        <span className="text-text-ter">{transcriptShown ? "▲" : "▼"}</span>
                    </button>
                    {transcriptShown && <TranscriptContent exercise={exercise} />}
                </div>
            )}

            {/* English translation — A1/A2: available; B1+: not shown */}
            {(level === "A1" || level === "A2") && (
                <div className="bg-surface-card rounded-2xl border border-border-default overflow-hidden">
                    <button
                        onClick={() => setTranslationShown(v => !v)}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-text-sec hover:bg-surface-elevated"
                    >
                        <span>{translationShown ? ui.hideEnglish : ui.showEnglish}</span>
                        <span className="text-text-ter">{translationShown ? "▲" : "▼"}</span>
                    </button>
                    {translationShown && (
                        <p className="px-5 pb-4 text-sm text-text-sec leading-relaxed">
                            {exercise.translation}
                        </p>
                    )}
                </div>
            )}

            {/* Show questions button / comprehension quiz */}
            {quizOpen ? (
                <ComprehensionQuiz exercise={exercise} onAnswer={c => useStatsStore.getState().recordQuizAnswer(langId, c)} onComplete={() => useStatsStore.getState().recordActivity(langId)} ui={ui} />
            ) : (
                <button
                    onClick={() => setQuizOpen(true)}
                    className="w-full border border-grammar-border text-grammar font-semibold rounded-xl py-2.5 text-sm transition-colors hover:bg-grammar-surface"
                >
                    {ui.showQuestions}
                </button>
            )}

            {/* Sticky bottom bar — mark as listened */}
            <div className="fixed bottom-0 left-0 right-0 z-20 bg-surface-card border-t border-border-default px-4 pt-3 pb-safe">
                <div className="max-w-xl mx-auto">
                    <button
                        onClick={markedListened ? undefined : handleMarkListened}
                        disabled={markedListened}
                        className={`w-full font-semibold rounded-xl py-3 text-sm transition-colors border ${markedListened
                                ? "border-grammar-border text-grammar bg-grammar-surface cursor-default"
                                : "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700"
                            }`}
                    >
                        {markedListened ? `✓ ${ui.listeningComplete}` : ui.markAsListened}
                    </button>
                </div>
            </div>
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
    const { level: getLevel, completed: getCompleted } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)

    const [searchParams] = useSearchParams()
    const [selectedExercise, setSelectedExercise] = useState<ListeningExercise | null>(() => {
        const id = searchParams.get("exercise")
        if (!id || !mod) return null
        return (mod.listeningExercises ?? []).find((e: ListeningExercise) => e.id === id) ?? null
    })

    if (!language || !mod) return null

    const exercises = (mod.listeningExercises ?? []).filter(e => e.level === level)
    const completed = getCompleted(langId)

    if (exercises.length === 0) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title={ui.sectionListening} level={level} backTo={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-text-ter">
                    <p className="text-4xl mb-3">🚧</p>
                    <p className="font-medium">{fmt(ui.noExercisesYet, { level })}</p>
                </div>
            </div>
        )
    }

    const handleBack = selectedExercise ? () => setSelectedExercise(null) : undefined

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar
                title={selectedExercise ? selectedExercise.title : ui.sectionListening}
                level={level}
                backTo={`/learn/${langId}`}
                onBack={handleBack}
            />
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
