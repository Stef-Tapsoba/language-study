// pages/ProfilePage.tsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import { getUserById } from "../auth/mockAuthApi"
import { LANGUAGES } from "../data/languages"
import { getModule } from "../data/modules"
import {
    getStartedLanguages,
    getCurrentLevel,
    getCompletedLessons,
    resetLanguageProgress,
    setSelectedLanguage,
} from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { ProgressBar } from "../components/ProgressBar"

const LEVEL_LABEL: Record<string, string> = {
    A1: "Beginner", A2: "Elementary",
    B1: "Intermediate", B2: "Upper Intermediate", C1: "Advanced",
}

export function ProfilePage() {
    const { session, logout } = useAuth()
    const navigate = useNavigate()
    const [tick, setTick] = useState(0)   // force re-render after reset

    const userInfo = session ? getUserById(session.userId) : null
    const displayName = userInfo?.displayName ?? "User"
    const email = userInfo?.email ?? ""
    const initials = displayName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()

    const startedIds = getStartedLanguages()
    const started = LANGUAGES.filter(l => startedIds.includes(l.id))
    const notStarted = LANGUAGES.filter(l => !startedIds.includes(l.id))

    function handleContinue(langId: string) {
        setSelectedLanguage(langId)
        navigate(`/learn/${langId}`)
    }

    function handleReset(langId: string) {
        if (!confirm("Reset all progress for this language?")) return
        resetLanguageProgress(langId)
        setTick(t => t + 1)   // trigger re-render
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title="Profile" />

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* User card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center
                                    text-white text-xl font-bold shrink-0">
                        {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-lg truncate">{displayName}</p>
                        <p className="text-sm text-gray-500 truncate">{email}</p>
                    </div>
                    <button
                        onClick={logout}
                        className="text-sm text-red-500 hover:text-red-700 shrink-0"
                    >
                        Sign out
                    </button>
                </div>

                {/* Languages in progress */}
                {started.length > 0 && (
                    <>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Languages in progress</h2>
                        <div className="flex flex-col gap-4 mb-8">
                            {started.map(lang => {
                                const mod = getModule(lang.id)
                                const level = getCurrentLevel(lang.id)
                                const completed = getCompletedLessons(lang.id)
                                if (!mod) return null

                                const grammarItems = mod.grammar.filter(g => g.level === level)
                                const vocabItems = mod.vocab.filter(v => v.level === level)
                                const verbItems = mod.verbs.filter(v => v.level === level)

                                const grammarDone = grammarItems.filter(g => completed.includes(g.id)).length
                                const vocabDone = vocabItems.filter(v => completed.includes(v.id)).length
                                const verbDone = verbItems.filter(v => completed.includes(v.id)).length

                                return (
                                    <div key={lang.id + tick}
                                        className="bg-white rounded-2xl border border-gray-200 p-5">
                                        {/* Header row */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-3xl">{lang.flag}</span>
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-900">{lang.name}</p>
                                                <p className="text-xs text-gray-400">{lang.nativeName}</p>
                                            </div>
                                            <LevelBadge level={level} />
                                            <span className="text-xs text-gray-400">{LEVEL_LABEL[level]}</span>
                                        </div>

                                        {/* Progress bars */}
                                        <div className="flex flex-col gap-2 mb-4">
                                            <ProgressBar
                                                label={`Grammar  ${grammarDone}/${grammarItems.length}`}
                                                value={grammarItems.length ? (grammarDone / grammarItems.length) * 100 : 0}
                                            />
                                            <ProgressBar
                                                label={`Vocabulary  ${vocabDone}/${vocabItems.length}`}
                                                value={vocabItems.length ? (vocabDone / vocabItems.length) * 100 : 0}
                                            />
                                            <ProgressBar
                                                label={`Verbs  ${verbDone}/${verbItems.length}`}
                                                value={verbItems.length ? (verbDone / verbItems.length) * 100 : 0}
                                            />
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleContinue(lang.id)}
                                                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white
                                                           font-semibold rounded-xl py-2 text-sm transition-colors"
                                            >
                                                Continue learning
                                            </button>
                                            <button
                                                onClick={() => handleReset(lang.id)}
                                                className="px-4 border border-gray-200 text-gray-500
                                                           hover:border-red-300 hover:text-red-500 rounded-xl
                                                           text-sm transition-colors"
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}

                {/* Not started */}
                {notStarted.length > 0 && (
                    <>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">
                            {started.length === 0 ? "Available languages" : "Add a language"}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {notStarted.map(lang => (
                                <button
                                    key={lang.id}
                                    onClick={() => handleContinue(lang.id)}
                                    className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col
                                               items-center gap-2 hover:border-indigo-400 hover:shadow-sm
                                               transition-all text-center"
                                >
                                    <span className="text-3xl">{lang.flag}</span>
                                    <p className="text-sm font-medium text-gray-800">{lang.name}</p>
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}