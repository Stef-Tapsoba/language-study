// pages/CulturePage.tsx — Dedicated cultural insights page
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel, markLessonComplete, getCompletedLessons } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { QuizCard } from "../components/QuizCard"
import { ReadingPassage } from "../types"
import { getUI, fmt } from "../i18n"
import { Flag } from "../components/Flag"

// ---------------------------------------------------------------------------
// CultureBrowse — amber-themed list of culture passages
// ---------------------------------------------------------------------------
function CultureBrowse({ passages, completed, onSelect, ui }: Readonly<{
    passages: ReadingPassage[]
    completed: string[]
    onSelect: (p: ReadingPassage) => void
    ui: ReturnType<typeof getUI>
}>) {
    if (passages.length === 0) {
        return (
            <div className="text-center py-16 text-gray-400">
                <p className="text-4xl mb-3">🌍</p>
                <p className="font-medium">No cultural content at this level yet</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {passages.map(p => (
                <button
                    key={p.id}
                    onClick={() => onSelect(p)}
                    className="w-full text-left bg-white rounded-2xl border border-amber-200 p-4
                               hover:border-amber-400 hover:shadow-sm transition-all"
                >
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                                    {ui.categoryBadgeCulture}
                                </span>
                                {completed.includes(p.id) && (
                                    <span className="text-xs text-green-600 font-medium">✓</span>
                                )}
                            </div>
                            <p className="font-semibold text-gray-900">{p.title}</p>
                            <p className="text-xs text-gray-400 mt-0.5">
                                {p.vocabGloss.length} {ui.vocabGlossTitle.toLowerCase()} · {p.questions.length} Q
                            </p>
                        </div>
                        <LevelBadge level={p.level} />
                    </div>
                </button>
            ))}
        </div>
    )
}

// ---------------------------------------------------------------------------
// CultureRead — full passage reading view
// ---------------------------------------------------------------------------
function CultureRead({ passage, langId, level, completed, ui }: Readonly<{
    passage: ReadingPassage
    langId: string
    level: string
    completed: string[]
    ui: ReturnType<typeof getUI>
}>) {
    const showTranslation = level === "A1" || level === "A2"
    const [translationShown, setTranslationShown] = useState(level === "A1")
    const [vocabShown, setVocabShown] = useState(true)
    const [quizOpen, setQuizOpen] = useState(false)
    const [quizIndex, setQuizIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [quizScore, setQuizScore] = useState(0)
    const [quizDone, setQuizDone] = useState(false)
    const [markedRead, setMarkedRead] = useState(completed.includes(passage.id))

    function handleMarkRead() {
        markLessonComplete(langId, passage.id)
        setMarkedRead(true)
    }

    function handleSelect(opt: string) { setSelected(opt); setRevealed(true) }

    function handleNext() {
        const newScore = quizScore + (selected === passage.questions[quizIndex].answer ? 1 : 0)
        if (quizIndex + 1 >= passage.questions.length) {
            setQuizScore(newScore); setQuizDone(true)
        } else {
            setQuizScore(newScore); setQuizIndex(i => i + 1); setSelected(null); setRevealed(false)
        }
    }

    const bodyText = passage.body.target ?? passage.body.native

    return (
        <div className="flex flex-col gap-5 pb-24">
            <div className="flex items-start justify-between gap-2">
                <div>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                        {ui.categoryBadgeCulture}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mt-1">{passage.title}</h2>
                </div>
                <LevelBadge level={passage.level} />
            </div>

            {/* Body */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <p className="text-base text-gray-900 leading-relaxed whitespace-pre-line">{bodyText}</p>
                {showTranslation && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <button
                            onClick={() => setTranslationShown(v => !v)}
                            className="text-sm text-indigo-600 hover:underline mb-2"
                        >
                            {translationShown ? ui.hideEnglish : ui.showEnglish}
                        </button>
                        {translationShown && (
                            <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                                {passage.body.native}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Vocab gloss */}
            {passage.vocabGloss.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <button
                        onClick={() => setVocabShown(v => !v)}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <span>{ui.vocabGlossTitle}</span>
                        <span className="text-gray-400">{vocabShown ? "▲" : "▼"}</span>
                    </button>
                    {vocabShown && (
                        <div className="px-5 pb-4 grid grid-cols-2 gap-2">
                            {passage.vocabGloss.map(g => (
                                <div key={g.word} className="bg-amber-50 rounded-xl px-3 py-2">
                                    <p className="text-sm font-semibold text-amber-900">{g.word}</p>
                                    {g.romanized && <p className="text-xs text-amber-400">{g.romanized}</p>}
                                    <p className="text-xs text-gray-600">{g.translation}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Comprehension quiz */}
            {!quizOpen ? (
                <button
                    onClick={() => setQuizOpen(true)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold
                               rounded-xl py-2.5 text-sm transition-colors"
                >
                    {ui.checkUnderstanding}
                </button>
            ) : quizDone ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
                    <div className="text-3xl mb-2">{quizScore === passage.questions.length ? "🎉" : "💪"}</div>
                    <p className="font-semibold text-gray-900">
                        {fmt(ui.youAnswered, { score: quizScore, total: passage.questions.length })}
                    </p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{fmt(ui.questionOf, { n: quizIndex + 1, total: passage.questions.length })}</span>
                        <span>{ui.scoreLabel}: {quizScore}</span>
                    </div>
                    <QuizCard
                        question={passage.questions[quizIndex].prompt}
                        options={passage.questions[quizIndex].options}
                        selected={selected}
                        correct={revealed ? passage.questions[quizIndex].answer : null}
                        onSelect={handleSelect}
                    />
                    {revealed && (
                        <button
                            onClick={handleNext}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white
                                       font-semibold rounded-xl py-3 transition-colors"
                        >
                            {quizIndex + 1 >= passage.questions.length ? ui.seeResults : ui.nextQuestion}
                        </button>
                    )}
                </div>
            )}

            {/* Sticky mark-as-read bar */}
            <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-200 px-4 py-3">
                <div className="max-w-xl mx-auto">
                    <button
                        onClick={markedRead ? undefined : handleMarkRead}
                        disabled={markedRead}
                        className={`w-full font-semibold rounded-xl py-3 text-sm transition-colors border ${markedRead
                            ? "border-green-300 text-green-700 bg-green-50 cursor-default"
                            : "border-amber-600 bg-amber-600 text-white hover:bg-amber-700"
                        }`}
                    >
                        {markedRead ? `✓ ${ui.passageComplete}` : ui.markAsRead}
                    </button>
                </div>
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// CulturePage
// ---------------------------------------------------------------------------
export function CulturePage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)

    const [selectedPassage, setSelectedPassage] = useState<ReadingPassage | null>(null)

    if (!language || !mod) return null

    const passages = (mod.readingPassages ?? [])
        .filter(p => p.level === level && p.category === "culture")
    const completed = getCompletedLessons(langId)

    const handleBack = selectedPassage ? () => setSelectedPassage(null) : undefined

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar
                title={selectedPassage ? selectedPassage.title : ui.sectionCulture}
                level={level}
                backTo="back"
                onBack={handleBack}
            />

            {/* Hero banner — only on browse view */}
            {!selectedPassage && (
                <div className="bg-amber-50 border-b border-amber-200 px-4 py-5">
                    <div className="max-w-xl mx-auto flex items-center gap-3">
                        <Flag langId={langId} size="lg" />
                        <div>
                            <p className="font-bold text-amber-900">{language.name} · Cultural Insights</p>
                            <p className="text-xs text-amber-700 mt-0.5">
                                Customs, traditions, and cultural context
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <main className="max-w-xl mx-auto px-4 py-6">
                {selectedPassage ? (
                    <CultureRead
                        passage={selectedPassage}
                        langId={langId}
                        level={level}
                        completed={completed}
                        ui={ui}
                    />
                ) : (
                    <CultureBrowse
                        passages={passages}
                        completed={completed}
                        onSelect={setSelectedPassage}
                        ui={ui}
                    />
                )}
            </main>
        </div>
    )
}
