// pages/HomePage.tsx — Authenticated home: new-user language-select branch vs returning-user language list
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppBootstrap } from "../hooks/useAppBootstrap"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { useProgressStats } from "../hooks/useProgressStats"
import { LANGUAGES, VISIBLE_LANGUAGES } from "../data/languages"
import { getModule, loadModule } from "../data/modules"
import { useProgress } from "../context/ProgressContext"
import { useStatsStore, getGlobalStreak, getTotalReviews } from "../store/useStatsStore"
import { NavBar } from "../components/NavBar"
import { Flag } from "../components/Flag"
import { ProgressBar } from "../components/ProgressBar"
import { LEVEL_LABELS } from "../types"

// ─── New-user branch ─────────────────────────────────────────────────────────

function NewUserWelcome({ displayName, onPick }: Readonly<{
    displayName: string
    onPick: (langId: string) => void
}>) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title="Language Study" />
            <main className="max-w-2xl mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <p className="text-4xl mb-4">👋</p>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Welcome, {displayName}!
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Let's start by choosing the language you want to learn.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {VISIBLE_LANGUAGES.map(lang => (
                        <button
                            key={lang.id}
                            onClick={() => onPick(lang.id)}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 flex items-center
                                       gap-4 hover:border-indigo-400 hover:shadow-md transition-all text-left"
                        >
                            <Flag langId={lang.id} size="lg" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{lang.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{lang.nativeName}</p>
                            </div>
                        </button>
                    ))}
                </div>

                <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-2">
                    Pick a language → take a short placement test → start learning at your level
                </p>
            </main>
        </div>
    )
}

// ─── Returning-user branch ───────────────────────────────────────────────────

function greeting(name: string): string {
    const h = new Date().getHours()
    let time = "Welcome back"
    if (h >= 5 && h < 12) time = "Good morning"
    else if (h >= 12 && h < 18) time = "Good afternoon"
    else if (h >= 18 && h < 22) time = "Good evening"
    return `${time}, ${name}!`
}

function ReturningHome({ firstName, startedIds }: Readonly<{
    firstName: string
    startedIds: string[]
}>) {
    const navigate = useNavigate()
    const { selectedLanguage, level: getLevel } = useProgress()
    const selectedLangId = selectedLanguage ?? startedIds[0]
    const currentLang = LANGUAGES.find(l => l.id === selectedLangId)

    const [mod, setMod] = useState<ReturnType<typeof getModule>>(
        () => selectedLangId ? getModule(selectedLangId) : null
    )
    useEffect(() => {
        if (selectedLangId) loadModule(selectedLangId).then(() => setMod(getModule(selectedLangId)))
    }, [selectedLangId])

    const level = getLevel(selectedLangId)
    const { grammar, vocab, verbs, reading, listening } = useProgressStats(selectedLangId, level)
    const statsData = useStatsStore(s => s.data)

    if (!currentLang || !mod) return null

    const itemsLearned = grammar.done + vocab.done + verbs.done
    const totalReviews = getTotalReviews(statsData, selectedLangId)
    const globalStreak = getGlobalStreak(statsData)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title="Language Study" showLanguagePicker />

            <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
                {/* Greeting */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{greeting(firstName)}</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">Pick up where you left off.</p>
                </div>

                {/* ── Continue learning hero ── */}
                <div
                    className="rounded-2xl p-5 shadow-sm text-white"
                    style={{ background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)" }}
                >
                    <div className="flex items-center gap-3 mb-5">
                        <Flag langId={currentLang.id} size="md" />
                        <div className="flex-1">
                            <p className="font-semibold text-white">{currentLang.name}</p>
                            <p className="text-xs text-violet-200">{currentLang.nativeName}</p>
                        </div>
                        <span className="text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full">
                            {level} · {LEVEL_LABELS[level]}
                        </span>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                        <div className="bg-white/15 rounded-xl p-3 text-center">
                            <p className="text-lg font-bold text-white">{totalReviews}</p>
                            <p className="text-xs text-violet-200">cards reviewed</p>
                        </div>
                        <div className="bg-white/15 rounded-xl p-3 text-center">
                            <p className="text-lg font-bold text-white">{globalStreak}🔥</p>
                            <p className="text-xs text-violet-200">day streak</p>
                        </div>
                        <div className="bg-white/15 rounded-xl p-3 text-center">
                            <p className="text-lg font-bold text-white">{itemsLearned}</p>
                            <p className="text-xs text-violet-200">items learned</p>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate(`/learn/${selectedLangId}`)}
                        className="w-full bg-white text-violet-700 font-semibold rounded-xl py-3 text-sm
                                   hover:bg-violet-50 transition-colors"
                    >
                        Continue learning →
                    </button>
                </div>

                {/* ── Progress breakdown ── */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Progress at {level}</h2>
                    <div className="flex flex-col gap-3">
                        <ProgressBar color="grammar"   label={`📖 Grammar  ${grammar.done}/${grammar.total}`}     value={grammar.pct}   />
                        <ProgressBar color="vocab"     label={`📝 Vocabulary  ${vocab.done}/${vocab.total}`}       value={vocab.pct}     />
                        <ProgressBar color="verbs"     label={`⚡ Verbs  ${verbs.done}/${verbs.total}`}            value={verbs.pct}     />
                        {reading.total > 0 && (
                            <ProgressBar color="reading"   label={`📗 Reading  ${reading.done}/${reading.total}`}   value={reading.pct}   />
                        )}
                        {listening.total > 0 && (
                            <ProgressBar color="listening" label={`🎧 Listening  ${listening.done}/${listening.total}`} value={listening.pct} />
                        )}
                    </div>
                </div>

                {/* ── Quick practice ── */}
                <div>
                    <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                        Quick practice
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                        {[
                            { emoji: "🃏", label: "Flashcards",    path: `/learn/${selectedLangId}/flashcards`,    bg: "bg-violet-100" },
                            { emoji: "🔡", label: "Verb Drill",    path: `/learn/${selectedLangId}/verb-drill`,    bg: "bg-red-100"    },
                            { emoji: "✏️", label: "Grammar Drill", path: `/learn/${selectedLangId}/grammar-drill`, bg: "bg-green-100"  },
                        ].map(({ emoji, label, path, bg }) => (
                            <button
                                key={label}
                                onClick={() => navigate(path)}
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-3 sm:p-4 flex flex-col
                                           items-center gap-2 hover:border-violet-300 hover:shadow-sm
                                           transition-all text-center"
                            >
                                <span className={`text-2xl w-12 h-12 flex items-center justify-center rounded-xl ${bg}`}>
                                    {emoji}
                                </span>
                                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{label}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function HomePage() {
    useAppBootstrap()
    const navigate = useNavigate()
    const { firstName } = useCurrentUser()
    const { startedLanguages, setSelectedLanguage } = useProgress()

    const startedIds = startedLanguages

    function handlePick(langId: string) {
        setSelectedLanguage(langId)
        navigate(`/learn/${langId}/placement`)
    }

    if (startedIds.length === 0) {
        return <NewUserWelcome displayName={firstName} onPick={handlePick} />
    }

    return <ReturningHome firstName={firstName} startedIds={startedIds} />
}
