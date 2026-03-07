// pages/HomePage.tsx
// Authenticated home page — two branches:
//   • New user (no languages started)  → welcome + language picker
//   • Returning user (has languages)   → personal dashboard
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import { getUserById } from "../auth/mockAuthApi"
import { LANGUAGES } from "../data/languages"
import { getModule } from "../data/modules"
import {
    getStartedLanguages,
    getCurrentLevel,
    getCompletedLessons,
    getMasteredUnits,
    setSelectedLanguage,
    getSelectedLanguage,
    initUserSession,
} from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { ProgressBar } from "../components/ProgressBar"

// ─── helpers ────────────────────────────────────────────────────────────────

function greeting(name: string): string {
    const h = new Date().getHours()
    const time =
        h >= 5 && h < 12 ? "Good morning" :
            h >= 12 && h < 18 ? "Good afternoon" :
                h >= 18 && h < 22 ? "Good evening" : "Welcome back"
    return `${time}, ${name}!`
}

const LEVEL_DESC: Record<string, string> = {
    A1: "Beginner", A2: "Elementary",
    B1: "Intermediate", B2: "Upper Intermediate", C1: "Advanced",
}

// ─── New-user branch ─────────────────────────────────────────────────────────

function NewUserWelcome({ displayName, onPick }: {
    displayName: string
    onPick: (langId: string) => void
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title="Language Study" />
            <main className="max-w-2xl mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <p className="text-4xl mb-4">👋</p>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome, {displayName}!
                    </h1>
                    <p className="text-gray-500">
                        Let's start by choosing the language you want to learn.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {LANGUAGES.map(lang => (
                        <button
                            key={lang.id}
                            onClick={() => onPick(lang.id)}
                            className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center
                                       gap-4 hover:border-indigo-400 hover:shadow-md transition-all text-left"
                        >
                            <span className="text-4xl">{lang.flag}</span>
                            <div>
                                <p className="font-semibold text-gray-900 text-lg">{lang.name}</p>
                                <p className="text-sm text-gray-500">{lang.nativeName}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </main>
        </div>
    )
}

// ─── Returning-user branch ───────────────────────────────────────────────────

function ReturningHome({ displayName, startedIds }: {
    displayName: string
    startedIds: string[]
}) {
    const navigate = useNavigate()
    const selectedLangId = getSelectedLanguage() ?? startedIds[0]
    const currentLang = LANGUAGES.find(l => l.id === selectedLangId)
    const otherLangs = LANGUAGES.filter(l => startedIds.includes(l.id) && l.id !== selectedLangId)

    const mod = getModule(selectedLangId)
    const level = getCurrentLevel(selectedLangId)
    const completed = getCompletedLessons(selectedLangId)

    // Items from mastered units count as complete even if not individually marked
    const masteredUnitItems = new Set(
        (mod?.units ?? [])
            .filter(u => getMasteredUnits(selectedLangId).includes(u.id))
            .flatMap(u => [...u.grammarIds, ...u.vocabIds, ...u.verbIds])
    )
    const isDone = (id: string) => completed.includes(id) || masteredUnitItems.has(id)

    const grammarItems = mod?.grammar.filter(g => g.level === level) ?? []
    const vocabItems = mod?.vocab.filter(v => v.level === level) ?? []
    const verbItems = mod?.verbs.filter(v => v.level === level) ?? []

    const grammarPct = grammarItems.length ? (grammarItems.filter(g => isDone(g.id)).length / grammarItems.length) * 100 : 0
    const vocabPct = vocabItems.length ? (vocabItems.filter(v => isDone(v.id)).length / vocabItems.length) * 100 : 0
    const verbPct = verbItems.length ? (verbItems.filter(v => isDone(v.id)).length / verbItems.length) * 100 : 0

    function switchTo(langId: string) {
        setSelectedLanguage(langId)
        navigate(`/learn/${langId}`)
    }

    if (!currentLang || !mod) return null

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title="Language Study" />

            <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
                {/* Greeting */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{greeting(displayName)}</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Pick up where you left off.</p>
                </div>

                {/* ── Primary: Continue learning card ── */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{currentLang.flag}</span>
                        <div className="flex-1">
                            <p className="font-semibold text-gray-900">{currentLang.name}</p>
                            <p className="text-xs text-gray-400">{currentLang.nativeName}</p>
                        </div>
                        <LevelBadge level={level} />
                        <span className="text-xs text-gray-400 hidden sm:block">{LEVEL_DESC[level]}</span>
                    </div>

                    <div className="flex flex-col gap-2 mb-5">
                        <ProgressBar
                            label={`Grammar  ${grammarItems.filter(g => isDone(g.id)).length}/${grammarItems.length}`}
                            value={grammarPct}
                        />
                        <ProgressBar
                            label={`Vocabulary  ${vocabItems.filter(v => isDone(v.id)).length}/${vocabItems.length}`}
                            value={vocabPct}
                        />
                        <ProgressBar
                            label={`Verbs  ${verbItems.filter(v => isDone(v.id)).length}/${verbItems.length}`}
                            value={verbPct}
                        />
                    </div>

                    <button
                        onClick={() => navigate(`/learn/${selectedLangId}`)}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                   rounded-xl py-3 text-sm transition-colors"
                    >
                        Continue learning →
                    </button>
                </div>

                {/* ── Quick practice ── */}
                <div>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Quick practice
                    </h2>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { emoji: "🃏", label: "Flashcards", path: `/learn/${selectedLangId}/flashcards` },
                            { emoji: "🔡", label: "Verb Drill", path: `/learn/${selectedLangId}/verb-drill` },
                            { emoji: "✏️", label: "Grammar Drill", path: `/learn/${selectedLangId}/grammar-drill` },
                        ].map(({ emoji, label, path }) => (
                            <button
                                key={label}
                                onClick={() => navigate(path)}
                                className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col
                                           items-center gap-2 hover:border-indigo-400 hover:shadow-sm
                                           transition-all text-center"
                            >
                                <span className="text-2xl">{emoji}</span>
                                <p className="text-xs font-medium text-gray-700">{label}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Other languages ── */}
                {otherLangs.length > 0 && (
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            Your other languages
                        </h2>
                        <div className="flex flex-col gap-2">
                            {otherLangs.map(lang => {
                                const lvl = getCurrentLevel(lang.id)
                                return (
                                    <div key={lang.id}
                                        className="bg-white border border-gray-200 rounded-2xl px-4 py-3
                                                   flex items-center gap-3">
                                        <span className="text-2xl">{lang.flag}</span>
                                        <span className="flex-1 font-medium text-gray-800 text-sm">
                                            {lang.name}
                                        </span>
                                        <LevelBadge level={lvl} />
                                        <button
                                            onClick={() => switchTo(lang.id)}
                                            className="text-xs text-indigo-600 hover:underline ml-2"
                                        >
                                            Switch →
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* ── Add a language ── */}
                <Link
                    to="/languages"
                    className="text-center text-sm text-indigo-600 hover:underline py-2"
                >
                    + Add another language
                </Link>
            </main>
        </div>
    )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function HomePage() {
    const { session } = useAuth()
    const navigate = useNavigate()

    // Reset progress if a different user has logged in
    if (session) initUserSession(session.userId)

    const userInfo = session ? getUserById(session.userId) : null
    const displayName = userInfo?.displayName?.split(" ")[0] ?? "there"
    const startedIds = getStartedLanguages()

    function handlePick(langId: string) {
        setSelectedLanguage(langId)
        navigate(`/learn/${langId}/placement`)
    }

    if (startedIds.length === 0) {
        return <NewUserWelcome displayName={displayName} onPick={handlePick} />
    }

    return <ReturningHome displayName={displayName} startedIds={startedIds} />
}
