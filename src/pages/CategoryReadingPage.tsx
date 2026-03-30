// pages/CategoryReadingPage.tsx — Dedicated reading page for non-culture passage categories
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { useProgress } from "../context/ProgressContext"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { QuizCard } from "../components/QuizCard"
import { Flag } from "../components/Flag"
import { ReadingPassage, PassageCategory } from "../types"
import { getUI, fmt } from "../i18n"

// ---------------------------------------------------------------------------
// Theme config per category
// ---------------------------------------------------------------------------
interface CategoryTheme {
    icon: string
    description: string
    heroBg: string
    heroTitle: string
    heroSub: string
    border: string
    badgeBg: string
    badgeText: string
    btnBg: string
    vocabBg: string
    vocabWord: string
    vocabRom: string
}

const THEMES: Record<string, CategoryTheme> = {
    everyday: {
        icon: "🗓️",
        description: "Daily life, routines, and practical conversations",
        heroBg: "bg-blue-50 dark:bg-blue-900/30 border-b border-blue-200 dark:border-blue-800",
        heroTitle: "text-blue-900 dark:text-blue-100",
        heroSub: "text-blue-700 dark:text-blue-300",
        border: "border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600",
        badgeBg: "bg-blue-100 dark:bg-blue-900/40",
        badgeText: "text-blue-700 dark:text-blue-300",
        btnBg: "bg-blue-600 hover:bg-blue-700",
        vocabBg: "bg-blue-50 dark:bg-blue-900/20",
        vocabWord: "text-blue-900 dark:text-blue-200",
        vocabRom: "text-blue-400 dark:text-blue-500",
    },
    history: {
        icon: "🏛️",
        description: "Historical events, figures, and cultural heritage",
        heroBg: "bg-stone-50 dark:bg-stone-900/30 border-b border-stone-200 dark:border-stone-700",
        heroTitle: "text-stone-900 dark:text-stone-100",
        heroSub: "text-stone-700 dark:text-stone-300",
        border: "border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500",
        badgeBg: "bg-stone-100 dark:bg-stone-800",
        badgeText: "text-stone-700 dark:text-stone-300",
        btnBg: "bg-stone-600 hover:bg-stone-700",
        vocabBg: "bg-stone-50 dark:bg-stone-800/50",
        vocabWord: "text-stone-900 dark:text-stone-200",
        vocabRom: "text-stone-400 dark:text-stone-500",
    },
    dialogue: {
        icon: "💬",
        description: "Conversations, exchanges, and spoken interactions",
        heroBg: "bg-teal-50 dark:bg-teal-900/30 border-b border-teal-200 dark:border-teal-800",
        heroTitle: "text-teal-900 dark:text-teal-100",
        heroSub: "text-teal-700 dark:text-teal-300",
        border: "border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600",
        badgeBg: "bg-teal-100 dark:bg-teal-900/40",
        badgeText: "text-teal-700 dark:text-teal-300",
        btnBg: "bg-teal-600 hover:bg-teal-700",
        vocabBg: "bg-teal-50 dark:bg-teal-900/20",
        vocabWord: "text-teal-900 dark:text-teal-200",
        vocabRom: "text-teal-400 dark:text-teal-500",
    },
    literature: {
        icon: "📚",
        description: "Literary texts, poetry, and classic writing",
        heroBg: "bg-purple-50 dark:bg-purple-900/30 border-b border-purple-200 dark:border-purple-800",
        heroTitle: "text-purple-900 dark:text-purple-100",
        heroSub: "text-purple-700 dark:text-purple-300",
        border: "border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600",
        badgeBg: "bg-purple-100 dark:bg-purple-900/40",
        badgeText: "text-purple-700 dark:text-purple-300",
        btnBg: "bg-purple-600 hover:bg-purple-700",
        vocabBg: "bg-purple-50 dark:bg-purple-900/20",
        vocabWord: "text-purple-900 dark:text-purple-200",
        vocabRom: "text-purple-400 dark:text-purple-500",
    },
}

const VALID_CATEGORIES = ["everyday", "history", "dialogue", "literature"] as const
type CategoryPageCategory = (typeof VALID_CATEGORIES)[number]

function isCategoryPageCategory(cat: string): cat is CategoryPageCategory {
    return (VALID_CATEGORIES as readonly string[]).includes(cat)
}

function getCategoryLabel(category: CategoryPageCategory, ui: ReturnType<typeof getUI>): string {
    const map: Record<CategoryPageCategory, string> = {
        everyday: ui.categoryBadgeEveryday,
        history: ui.categoryBadgeHistory,
        dialogue: ui.categoryBadgeDialogue,
        literature: ui.categoryBadgeLiterature,
    }
    return map[category]
}

// ---------------------------------------------------------------------------
// CategoryBrowse — themed passage list
// ---------------------------------------------------------------------------
function CategoryBrowse({ passages, completed, onSelect, label, theme, ui }: Readonly<{
    passages: ReadingPassage[]
    completed: string[]
    onSelect: (p: ReadingPassage) => void
    label: string
    theme: CategoryTheme
    ui: ReturnType<typeof getUI>
}>) {
    if (passages.length === 0) {
        return (
            <div className="text-center py-16 text-gray-400 dark:text-gray-500">
                <p className="text-4xl mb-3">{theme.icon}</p>
                <p className="font-medium">No {label.toLowerCase()} passages at this level yet</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {passages.map(p => (
                <button
                    key={p.id}
                    onClick={() => onSelect(p)}
                    className={`w-full text-left bg-white dark:bg-gray-800 rounded-2xl border p-4
                                hover:shadow-sm transition-all ${theme.border}`}
                >
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${theme.badgeBg} ${theme.badgeText}`}>
                                    {label}
                                </span>
                                {completed.includes(p.id) && (
                                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">✓</span>
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
// ComprehensionQuiz — owns all quiz state; shown below the passage body
// ---------------------------------------------------------------------------
function ComprehensionQuiz({ passage, theme, ui }: Readonly<{
    passage: ReadingPassage
    theme: CategoryTheme
    ui: ReturnType<typeof getUI>
}>) {
    const [quizOpen, setQuizOpen] = useState(false)
    const [quizIndex, setQuizIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [quizScore, setQuizScore] = useState(0)
    const [quizDone, setQuizDone] = useState(false)

    function handleSelect(opt: string) { setSelected(opt); setRevealed(true) }

    function handleNext() {
        const newScore = quizScore + (selected === passage.questions[quizIndex].answer ? 1 : 0)
        if (quizIndex + 1 >= passage.questions.length) {
            setQuizScore(newScore); setQuizDone(true)
        } else {
            setQuizScore(newScore); setQuizIndex(i => i + 1); setSelected(null); setRevealed(false)
        }
    }

    if (!quizOpen) {
        return (
            <button
                onClick={() => setQuizOpen(true)}
                className={`w-full text-white font-semibold rounded-xl py-2.5 text-sm transition-colors ${theme.btnBg}`}
            >
                {ui.checkUnderstanding}
            </button>
        )
    }

    if (quizDone) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 text-center">
                <div className="text-3xl mb-2">{quizScore === passage.questions.length ? "🎉" : "💪"}</div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {fmt(ui.youAnswered, { score: quizScore, total: passage.questions.length })}
                </p>
            </div>
        )
    }

    const q = passage.questions[quizIndex]
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{fmt(ui.questionOf, { n: quizIndex + 1, total: passage.questions.length })}</span>
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
                    {quizIndex + 1 >= passage.questions.length ? ui.seeResults : ui.nextQuestion}
                </button>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// CategoryRead — full passage reading view
// ---------------------------------------------------------------------------
function CategoryRead({ passage, langId, level, label, completed, theme, ui }: Readonly<{
    passage: ReadingPassage
    langId: string
    level: string
    label: string
    completed: string[]
    theme: CategoryTheme
    ui: ReturnType<typeof getUI>
}>) {
    const showTranslation = level === "A1" || level === "A2"
    const [translationShown, setTranslationShown] = useState(level === "A1")
    const [vocabShown, setVocabShown] = useState(true)
    const [markedRead, setMarkedRead] = useState(completed.includes(passage.id))
    const { markLessonComplete } = useProgress()

    function handleMarkRead() {
        markLessonComplete(langId, passage.id, "reading")
        setMarkedRead(true)
    }

    const bodyText = passage.body.target ?? passage.body.native
    const markReadCls = markedRead
        ? "border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30 cursor-default"
        : `border-transparent text-white ${theme.btnBg}`

    return (
        <div className="flex flex-col gap-5 pb-24">
            <div className="flex items-start justify-between gap-2">
                <div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${theme.badgeBg} ${theme.badgeText}`}>
                        {label}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">{passage.title}</h2>
                </div>
                <LevelBadge level={passage.level} />
            </div>

            {/* Body */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                <p className="text-base text-gray-900 dark:text-gray-100 leading-relaxed whitespace-pre-line">{bodyText}</p>
                {showTranslation && (
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

            {/* Vocab gloss */}
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
                                <div key={g.word} className={`${theme.vocabBg} rounded-xl px-3 py-2`}>
                                    <p className={`text-sm font-semibold ${theme.vocabWord}`}>{g.word}</p>
                                    {g.romanized && <p className={`text-xs ${theme.vocabRom}`}>{g.romanized}</p>}
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{g.translation}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Comprehension quiz */}
            <ComprehensionQuiz passage={passage} theme={theme} ui={ui} />

            {/* Sticky mark-as-read bar */}
            <div className="fixed bottom-0 left-0 right-0 z-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pt-3 pb-safe">
                <div className="max-w-xl mx-auto">
                    <button
                        onClick={markedRead ? undefined : handleMarkRead}
                        disabled={markedRead}
                        className={`w-full font-semibold rounded-xl py-3 text-sm transition-colors border ${markReadCls}`}
                    >
                        {markedRead ? `✓ ${ui.passageComplete}` : ui.markAsRead}
                    </button>
                </div>
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// CategoryReadingPage
// ---------------------------------------------------------------------------
export function CategoryReadingPage() {
    const { langId = "", category = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const { level: getLevel, completed: getCompleted } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)

    const [selectedPassage, setSelectedPassage] = useState<ReadingPassage | null>(null)

    if (!language || !mod) return null
    if (!isCategoryPageCategory(category)) return null

    const theme = THEMES[category]
    const label = getCategoryLabel(category, ui)

    const passages = (mod.readingPassages ?? [])
        .filter(p => p.level === level && p.category === (category as PassageCategory))
    const completed = getCompleted(langId)

    const handleBack = selectedPassage ? () => setSelectedPassage(null) : undefined

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar
                title={selectedPassage ? selectedPassage.title : label}
                level={level}
                backTo={`/learn/${langId}`}
                onBack={handleBack}
            />

            {/* Hero banner — only on browse view */}
            {!selectedPassage && (
                <div className={`px-4 py-5 ${theme.heroBg}`}>
                    <div className="max-w-xl mx-auto flex items-center gap-3">
                        <Flag langId={langId} size="lg" />
                        <div>
                            <p className={`font-bold ${theme.heroTitle}`}>{language.name} · {label}</p>
                            <p className={`text-xs mt-0.5 ${theme.heroSub}`}>{theme.description}</p>
                        </div>
                    </div>
                </div>
            )}

            <main className="max-w-xl mx-auto px-4 py-6">
                {selectedPassage ? (
                    <CategoryRead
                        passage={selectedPassage}
                        langId={langId}
                        level={level}
                        label={label}
                        completed={completed}
                        theme={theme}
                        ui={ui}
                    />
                ) : (
                    <CategoryBrowse
                        passages={passages}
                        completed={completed}
                        onSelect={setSelectedPassage}
                        label={label}
                        theme={theme}
                        ui={ui}
                    />
                )}
            </main>
        </div>
    )
}
