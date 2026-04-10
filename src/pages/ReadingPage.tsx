// pages/ReadingPage.tsx — Reading category hub + passage browser
import { useState } from "react"
import { useParams, Link, useSearchParams } from "react-router-dom"
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
                    className="w-full text-left bg-surface-card rounded-2xl border border-border-default p-4
                               hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[p.category]}`}>
                                    {categoryLabel(p.category, ui)}
                                </span>
                                {completed.includes(p.id) && (
                                    <span className="text-xs text-grammar font-medium">✓</span>
                                )}
                            </div>
                            <p className="font-semibold text-text-pri">{p.title}</p>
                            <p className="text-xs text-text-ter mt-0.5">
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
                    <h2 className="text-xl font-bold text-text-pri mt-1">{passage.title}</h2>
                </div>
                <LevelBadge level={passage.level} />
            </div>

            {/* Body */}
            <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                <div className="flex flex-col gap-2">
                    {bodyText.split('\n').filter(Boolean).map((line) => (
                        <p key={line} className="text-base text-text-pri leading-relaxed">{line}</p>
                    ))}
                </div>

                {/* English translation — A1: shown (collapsible), A2: behind toggle, B1+: absent */}
                {translationMode !== "hidden" && (
                    <div className="mt-4 pt-4 border-t border-border-subtle">
                        <button
                            onClick={() => setTranslationShown(v => !v)}
                            className="text-sm text-reading hover:underline mb-2"
                        >
                            {translationShown ? ui.hideEnglish : ui.showEnglish}
                        </button>
                        {translationShown && (
                            <div className="flex flex-col gap-1.5">
                                {passage.body.native.split('\n').filter(Boolean).map((line) => (
                                    <p key={line} className="text-sm text-text-sec leading-relaxed">{line}</p>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Vocab gloss — A1/A2: always shown (collapsible), B1+: collapsible hidden by default */}
            {passage.vocabGloss.length > 0 && (
                <div className="bg-surface-card rounded-2xl border border-border-default overflow-hidden">
                    <button
                        onClick={() => setVocabShown(v => !v)}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-text-sec hover:bg-surface-elevated"
                    >
                        <span>{ui.vocabGlossTitle}</span>
                        <span className="text-text-ter">{vocabShown ? "▲" : "▼"}</span>
                    </button>
                    {vocabShown && (
                        <div className="px-5 pb-4 grid grid-cols-2 gap-2">
                            {passage.vocabGloss.map(g => (
                                <div key={g.word} className="bg-grammar-surface rounded-xl px-3 py-2">
                                    <p className="text-sm font-semibold text-grammar">{g.word}</p>
                                    {g.romanized && (
                                        <p className="text-xs text-indigo-500">{g.romanized}</p>
                                    )}
                                    <p className="text-xs text-text-sec">{g.translation}</p>
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
                <div className="bg-surface-card rounded-2xl border border-border-default p-5 text-center">
                    <div className="text-3xl mb-2">
                        {quizScore === passage.questions.length ? "🎉" : "💪"}
                    </div>
                    <p className="font-semibold text-text-pri">
                        {fmt(ui.youAnswered, { score: quizScore, total: passage.questions.length })}
                    </p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-sm text-text-sec">
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
            <div className="fixed bottom-0 left-0 right-0 z-20 bg-surface-card border-t border-border-default px-4 pt-3 pb-safe">
                <div className="max-w-xl mx-auto">
                    <button
                        onClick={markedRead ? undefined : handleMarkRead}
                        disabled={markedRead}
                        className={`w-full font-semibold rounded-xl py-3 text-sm transition-colors border ${markedRead
                                ? "border-grammar-border text-grammar bg-grammar-surface cursor-default"
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
    const [searchParams] = useSearchParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const { level: getLevel, completed: getCompleted } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)
    const completed = getCompleted(langId)

    const [selectedPassage, setSelectedPassage] = useState<ReadingPassage | null>(() => {
        const id = searchParams.get("passage")
        if (!id || !mod) return null
        return (mod.readingPassages ?? []).find((p: ReadingPassage) => p.id === id) ?? null
    })

    if (!language || !mod) return null

    const passages = (mod.readingPassages ?? []).filter(p => p.level === level)

    const handleBack = selectedPassage ? () => setSelectedPassage(null) : undefined

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar
                title={selectedPassage ? selectedPassage.title : ui.sectionReading}
                level={level}
                backTo={`/learn/${langId}`}
                onBack={handleBack}
            />
            <main className="max-w-xl mx-auto px-4 py-6">
                {selectedPassage ? (
                    <PassageRead
                        passage={selectedPassage}
                        langId={langId}
                        level={level}
                        completed={completed}
                        onBack={() => setSelectedPassage(null)}
                        ui={ui}
                    />
                ) : (
                    <div className="flex flex-col gap-3">
                        {CATEGORY_HUB.map(({ category, icon, href }) => {
                            const count = passages.filter(p => p.category === category).length
                            if (count === 0) return null
                            const done = passages.filter(p => p.category === category && completed.includes(p.id)).length
                            return (
                                <Link
                                    key={category}
                                    to={href(langId)}
                                    className={`bg-surface-card rounded-2xl border p-4 flex items-center gap-4
                                                hover:shadow-sm transition-all border-border-default hover:border-grammar`}
                                >
                                    <span className="text-3xl">{icon}</span>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[category]}`}>
                                                {categoryLabel(category, ui)}
                                            </span>
                                        </div>
                                        <p className="text-xs text-text-ter">
                                            {done}/{count} complete
                                        </p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-text-ter" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            )
                        })}
                        {passages.length === 0 && (
                            <div className="text-center py-16 text-text-ter">
                                <p className="text-4xl mb-3">🚧</p>
                                <p className="font-medium">{fmt(ui.noPassagesYet, { level })}</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    )
}
