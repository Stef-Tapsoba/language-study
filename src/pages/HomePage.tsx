// pages/HomePage.tsx — Authenticated home: new-user language-select branch vs returning-user language list
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import { getUserById } from "../auth/mockAuthApi"
import { LANGUAGES } from "../data/languages"
import { getModule, loadModule } from "../data/modules"
import {
    getStartedLanguages,
    getCurrentLevel,
    getCompletedLessons,
    getMasteredUnits,
    setSelectedLanguage,
    getSelectedLanguage,
    initUserSession,
} from "../store/progress"
import { getGlobalStreak, getTotalReviews } from "../store/stats"
import { NavBar } from "../components/NavBar"
import { Flag } from "../components/Flag"
import { ProgressBar } from "../components/ProgressBar"

// ─── helpers ────────────────────────────────────────────────────────────────

function greeting(name: string): string {
    const h = new Date().getHours()
    let time = "Welcome back"
    if (h >= 5 && h < 12) time = "Good morning"
    else if (h >= 12 && h < 18) time = "Good afternoon"
    else if (h >= 18 && h < 22) time = "Good evening"
    return `${time}, ${name}!`
}

const LEVEL_DESC: Record<string, string> = {
    A1: "Beginner", A2: "Elementary",
    B1: "Intermediate", B2: "Upper Intermediate", C1: "Advanced",
}

// ─── New-user branch ─────────────────────────────────────────────────────────

function NewUserWelcome({ displayName, onPick }: Readonly<{
    displayName: string
    onPick: (langId: string) => void
}>) {
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
                            <Flag langId={lang.id} size="lg" />
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

function ReturningHome({ displayName, startedIds }: Readonly<{
    displayName: string
    startedIds: string[]
}>) {
    const navigate = useNavigate()
    const selectedLangId = getSelectedLanguage() ?? startedIds[0]
    const currentLang = LANGUAGES.find(l => l.id === selectedLangId)

    const [mod, setMod] = useState<ReturnType<typeof getModule>>(
        () => selectedLangId ? getModule(selectedLangId) : null
    )
    useEffect(() => {
        if (selectedLangId) loadModule(selectedLangId).then(() => setMod(getModule(selectedLangId)))
    }, [selectedLangId])
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
    const readingItems = (mod?.readingPassages ?? []).filter(r => r.level === level)
    const listeningItems = (mod?.listeningExercises ?? []).filter(l => l.level === level)

    const grammarPct = grammarItems.length ? (grammarItems.filter(g => isDone(g.id)).length / grammarItems.length) * 100 : 0
    const vocabPct = vocabItems.length ? (vocabItems.filter(v => isDone(v.id)).length / vocabItems.length) * 100 : 0
    const verbPct = verbItems.length ? (verbItems.filter(v => isDone(v.id)).length / verbItems.length) * 100 : 0
    const readingPct = readingItems.length ? (readingItems.filter(r => completed.includes(r.id)).length / readingItems.length) * 100 : 0
    const listeningPct = listeningItems.length ? (listeningItems.filter(l => completed.includes(l.id)).length / listeningItems.length) * 100 : 0

    if (!currentLang || !mod) return null

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title="Language Study" showLanguagePicker />

            <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
                {/* Greeting */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{greeting(displayName)}</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Pick up where you left off.</p>
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
                            {level} · {LEVEL_DESC[level]}
                        </span>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                        <div className="bg-white/15 rounded-xl p-3 text-center">
                            <p className="text-lg font-bold text-white">{getTotalReviews(selectedLangId)}</p>
                            <p className="text-xs text-violet-200">cards reviewed</p>
                        </div>
                        <div className="bg-white/15 rounded-xl p-3 text-center">
                            <p className="text-lg font-bold text-white">{getGlobalStreak()}🔥</p>
                            <p className="text-xs text-violet-200">day streak</p>
                        </div>
                        <div className="bg-white/15 rounded-xl p-3 text-center">
                            <p className="text-lg font-bold text-white">
                                {[...grammarItems, ...vocabItems, ...verbItems].filter(x => isDone(x.id)).length}
                            </p>
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
                <div className="bg-white rounded-2xl border border-gray-200 p-5">
                    <h2 className="text-sm font-semibold text-gray-700 mb-4">Progress at {level}</h2>
                    <div className="flex flex-col gap-3">
                        <ProgressBar
                            label={`📖 Grammar  ${grammarItems.filter(g => isDone(g.id)).length}/${grammarItems.length}`}
                            value={grammarPct}
                        />
                        <ProgressBar
                            label={`📝 Vocabulary  ${vocabItems.filter(v => isDone(v.id)).length}/${vocabItems.length}`}
                            value={vocabPct}
                        />
                        <ProgressBar
                            label={`🔤 Verbs  ${verbItems.filter(v => isDone(v.id)).length}/${verbItems.length}`}
                            value={verbPct}
                        />
                        {readingItems.length > 0 && (
                            <ProgressBar
                                label={`📗 Reading  ${readingItems.filter(r => completed.includes(r.id)).length}/${readingItems.length}`}
                                value={readingPct}
                            />
                        )}
                        {listeningItems.length > 0 && (
                            <ProgressBar
                                label={`🎧 Listening  ${listeningItems.filter(l => completed.includes(l.id)).length}/${listeningItems.length}`}
                                value={listeningPct}
                            />
                        )}
                    </div>
                </div>

                {/* ── Quick practice ── */}
                <div>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Quick practice
                    </h2>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {[
                            { emoji: "🃏", label: "Flashcards",    path: `/learn/${selectedLangId}/flashcards`,    bg: "bg-violet-100" },
                            { emoji: "🔡", label: "Verb Drill",    path: `/learn/${selectedLangId}/verb-drill`,    bg: "bg-red-100"    },
                            { emoji: "✏️", label: "Grammar Drill", path: `/learn/${selectedLangId}/grammar-drill`, bg: "bg-green-100"  },
                        ].map(({ emoji, label, path, bg }) => (
                            <button
                                key={label}
                                onClick={() => navigate(path)}
                                className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-4 flex flex-col
                                           items-center gap-2 hover:border-violet-300 hover:shadow-sm
                                           transition-all text-center"
                            >
                                <span className={`text-2xl w-12 h-12 flex items-center justify-center rounded-xl ${bg}`}>
                                    {emoji}
                                </span>
                                <p className="text-xs font-medium text-gray-700">{label}</p>
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
