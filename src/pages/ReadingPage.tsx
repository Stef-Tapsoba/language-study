// pages/ReadingPage.tsx — Reading category hub + passage browser
import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { useProgress } from "../context/ProgressContext"
import { useStatsStore } from "../store/useStatsStore"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { QuizCard } from "../components/QuizCard"
import { ReadingPassage, PassageCategory } from "../types"
import { getUI, fmt } from "../i18n"

// Category badge colour map
const CATEGORY_COLORS: Record<PassageCategory, string> = {
    everyday: "bg-blue-100 text-blue-700",
    culture: "bg-amber-100 text-amber-700",
    history: "bg-stone-100 text-stone-700",
    literature: "bg-purple-100 text-purple-700",
    dialogue: "bg-teal-100 text-teal-700",
}

function categoryLabel(cat: PassageCategory, ui: ReturnType<typeof getUI>): string {
    const map: Record<PassageCategory, string> = {
        everyday: ui.categoryBadgeEveryday,
        culture: ui.categoryBadgeCulture,
        history: ui.categoryBadgeHistory,
        literature: ui.categoryBadgeLiterature,
        dialogue: ui.categoryBadgeDialogue,
    }
    return map[cat]
}

// How English translation appears, by level (same logic as flashcards)
type TranslationMode = "shown" | "toggle" | "hidden"

function getTranslationMode(level: string): TranslationMode {
    if (level === "A1") return "shown"
    if (level === "A2") return "toggle"
    return "hidden"
}

// ---------------------------------------------------------------------------
// PassageBrowse — list of passage cards
// ---------------------------------------------------------------------------
function PassageBrowse({ passages, completed, onSelect, category, ui }: Readonly<{
    passages: ReadingPassage[]
    completed: string[]
    onSelect: (p: ReadingPassage) => void
    category?: PassageCategory
    ui: ReturnType<typeof getUI>
}>) {
    const filtered = category ? passages.filter(p => p.category === category) : passages
    return (
        <div className="flex flex-col gap-3">
            {filtered.map(p => (
                <button
                    key={p.id}
                    onClick={() => onSelect(p)}
                    className="w-full text-left bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4
                               hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[p.category]}`}>
                                    {categoryLabel(p.category, ui)}
                                </span>
                                {completed.includes(p.id) && (
                                    <span className="text-xs text-green-600 font-medium">✓</span>
                                )}
                            </div>
                            <p className="font-semibold text-gray-900 dark:text-gray-100">{p.title}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
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
// PassageRead — read a single passage
// ---------------------------------------------------------------------------
function PassageRead({ passage, langId, level, completed, onBack, ui }: Readonly<{
    passage: ReadingPassage
    langId: string
    level: string
    completed: string[]
    onBack: () => void
    ui: ReturnType<typeof getUI>
}>) {
    const translationMode = getTranslationMode(level)
    const [translationShown, setTranslationShown] = useState(translationMode === "shown")
    const [vocabShown, setVocabShown] = useState(true)
    const [quizOpen, setQuizOpen] = useState(false)
    const [quizIndex, setQuizIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [quizScore, setQuizScore] = useState(0)
    const [quizDone, setQuizDone] = useState(false)
    const [markedRead, setMarkedRead] = useState(completed.includes(passage.id))
    const { markLessonComplete } = useProgress()

    function handleMarkRead() {
        markLessonComplete(langId, passage.id, "reading")
        setMarkedRead(true)
    }

    function handleSelect(opt: string) {
        setSelected(opt)
        setRevealed(true)
    }

    function handleNext() {
        const isCorrect = selected === passage.questions[quizIndex].answer
        useStatsStore.getState().recordQuizAnswer(langId, isCorrect)
        const newScore = quizScore + (isCorrect ? 1 : 0)
        if (quizIndex + 1 >= passage.questions.length) {
            setQuizScore(newScore)
            useStatsStore.getState().recordActivity(langId)
            setQuizDone(true)
        } else {
            setQuizScore(newScore)
            setQuizIndex(i => i + 1)
            setSelected(null)
            setRevealed(false)
        }
    }

    const bodyText = passage.body.target ?? passage.body.native

    return (
        <div className="flex flex-col gap-5 pb-24">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
                <div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[passage.category]}`}>
                        {categoryLabel(passage.category, ui)}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">{passage.title}</h2>
                </div>
                <LevelBadge level={passage.level} />
            </div>

            {/* Body */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                <p className="text-base text-gray-900 dark:text-gray-100 leading-relaxed whitespace-pre-line">{bodyText}</p>

                {/* English translation — A1: shown (collapsible), A2: behind toggle, B1+: absent */}
                {translationMode !== "hidden" && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <button
                            onClick={() => setTranslationShown(v => !v)}
                            className="text-sm text-indigo-600 hover:underline mb-2"
                        >
                            {translationShown ? ui.hideEnglish : ui.showEnglish}
                        </button>
                        {translationShown && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                                {passage.body.native}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Vocab gloss — A1/A2: always shown (collapsible), B1+: collapsible hidden by default */}
            {passage.vocabGloss.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <button
                        onClick={() => setVocabShown(v => !v)}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    >
                        <span>{ui.vocabGlossTitle}</span>
                        <span className="text-gray-400 dark:text-gray-500">{vocabShown ? "▲" : "▼"}</span>
                    </button>
                    {vocabShown && (
                        <div className="px-5 pb-4 grid grid-cols-2 gap-2">
                            {passage.vocabGloss.map(g => (
                                <div key={g.word} className="bg-indigo-50 rounded-xl px-3 py-2">
                                    <p className="text-sm font-semibold text-indigo-900">{g.word}</p>
                                    {g.romanized && (
                                        <p className="text-xs text-indigo-400">{g.romanized}</p>
                                    )}
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{g.translation}</p>
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
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                               rounded-xl py-2.5 text-sm transition-colors"
                >
                    {ui.checkUnderstanding}
                </button>
            ) : quizDone ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 text-center">
                    <div className="text-3xl mb-2">
                        {quizScore === passage.questions.length ? "🎉" : "💪"}
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {fmt(ui.youAnswered, { score: quizScore, total: passage.questions.length })}
                    </p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
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

            {/* Sticky bottom bar — mark as read */}
            <div className="fixed bottom-0 left-0 right-0 z-20 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 pt-3 pb-safe">
                <div className="max-w-xl mx-auto">
                    <button
                        onClick={markedRead ? undefined : handleMarkRead}
                        disabled={markedRead}
                        className={`w-full font-semibold rounded-xl py-3 text-sm transition-colors border ${markedRead
                                ? "border-green-300 text-green-700 bg-green-50 cursor-default"
                                : "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700"
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
// Category hub config
// ---------------------------------------------------------------------------
interface CategoryConfig {
    category: PassageCategory
    icon: string
    href: (langId: string) => string
}

const CATEGORY_HUB: CategoryConfig[] = [
    { category: "everyday",   icon: "🗓️", href: id => `/learn/${id}/reading/everyday` },
    { category: "culture",    icon: "🌍", href: id => `/learn/${id}/culture` },
    { category: "dialogue",   icon: "💬", href: id => `/learn/${id}/reading/dialogue` },
    { category: "history",    icon: "🏛️", href: id => `/learn/${id}/reading/history` },
    { category: "literature", icon: "📚", href: id => `/learn/${id}/reading/literature` },
]

// ---------------------------------------------------------------------------
// ReadingPage — category hub
// ---------------------------------------------------------------------------
export function ReadingPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const { level: getLevel, completed: getCompleted } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)

    if (!language || !mod) return null

    const passages = (mod.readingPassages ?? []).filter(p => p.level === level)
    const completed = getCompleted(langId)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={ui.sectionReading} level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-3">
                {CATEGORY_HUB.map(({ category, icon, href }) => {
                    const count = passages.filter(p => p.category === category).length
                    if (count === 0) return null
                    const done = passages.filter(p => p.category === category && completed.includes(p.id)).length
                    return (
                        <Link
                            key={category}
                            to={href(langId)}
                            className={`bg-white dark:bg-gray-800 rounded-2xl border p-4 flex items-center gap-4
                                        hover:shadow-sm transition-all ${CATEGORY_COLORS[category].replace("text-", "border-").split(" ")[0].replace("bg-", "border-")} border-gray-200 dark:border-gray-700 hover:border-indigo-300`}
                        >
                            <span className="text-3xl">{icon}</span>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[category]}`}>
                                        {categoryLabel(category, ui)}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 dark:text-gray-500">
                                    {done}/{count} complete
                                </p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    )
                })}
                {passages.length === 0 && (
                    <div className="text-center py-16 text-gray-400 dark:text-gray-500">
                        <p className="text-4xl mb-3">🚧</p>
                        <p className="font-medium">{fmt(ui.noPassagesYet, { level })}</p>
                    </div>
                )}
            </main>
        </div>
    )
}
