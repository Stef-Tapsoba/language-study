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
    getMasteredUnits,
    resetLanguageProgress,
    removeLanguage,
} from "../store/progress"
import { NavBar } from "../components/NavBar"
import { Flag } from "../components/Flag"
import { LevelBadge } from "../components/LevelBadge"
import { ProgressBar } from "../components/ProgressBar"

const LEVEL_LABEL: Record<string, string> = {
    A1: "Beginner", A2: "Elementary",
    B1: "Intermediate", B2: "Upper Intermediate", C1: "Advanced",
}

// ─── per-language stats ──────────────────────────────────────────────────────

interface LangStats {
    grammarDone: number; grammarTotal: number
    vocabDone: number; vocabTotal: number
    verbDone: number; verbTotal: number
    readingDone: number; readingTotal: number
    listeningDone: number; listeningTotal: number
    overallPct: number
    totalDone: number
}

function computeStats(langId: string): LangStats {
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const completed = getCompletedLessons(langId)
    if (!mod) return { grammarDone: 0, grammarTotal: 0, vocabDone: 0, vocabTotal: 0, verbDone: 0, verbTotal: 0, readingDone: 0, readingTotal: 0, listeningDone: 0, listeningTotal: 0, overallPct: 0, totalDone: 0 }

    const masteredItems = new Set(
        (mod.units ?? [])
            .filter(u => getMasteredUnits(langId).includes(u.id))
            .flatMap(u => [...u.grammarIds, ...u.vocabIds, ...u.verbIds])
    )
    const isDone = (id: string) => completed.includes(id) || masteredItems.has(id)

    const grammar = mod.grammar.filter(g => g.level === level)
    const vocab = mod.vocab.filter(v => v.level === level)
    const verbs = mod.verbs.filter(v => v.level === level)
    const reading = (mod.readingPassages ?? []).filter(r => r.level === level)
    const listening = (mod.listeningExercises ?? []).filter(l => l.level === level)

    const grammarDone = grammar.filter(g => isDone(g.id)).length
    const vocabDone = vocab.filter(v => isDone(v.id)).length
    const verbDone = verbs.filter(v => isDone(v.id)).length
    const readingDone = reading.filter(r => completed.includes(r.id)).length
    const listeningDone = listening.filter(l => completed.includes(l.id)).length
    const totalDone = grammarDone + vocabDone + verbDone + readingDone + listeningDone
    const totalItems = grammar.length + vocab.length + verbs.length + reading.length + listening.length
    const overallPct = totalItems ? Math.round(totalDone / totalItems * 100) : 0

    return {
        grammarDone, grammarTotal: grammar.length,
        vocabDone, vocabTotal: vocab.length,
        verbDone, verbTotal: verbs.length,
        readingDone, readingTotal: reading.length,
        listeningDone, listeningTotal: listening.length,
        overallPct, totalDone,
    }
}

// ─── Language card ───────────────────────────────────────────────────────────

function LangCard({ langId, onChanged }: Readonly<{ langId: string; onChanged: () => void }>) {
    const [manageOpen, setManageOpen] = useState(false)
    const lang = LANGUAGES.find(l => l.id === langId)
    const level = getCurrentLevel(langId)
    const s = computeStats(langId)
    if (!lang) return null

    function handleReset() {
        if (!confirm(`Reset all progress for ${lang!.name}? Your level will return to A1.`)) return
        resetLanguageProgress(langId)
        setManageOpen(false)
        onChanged()
    }

    function handleRemove() {
        if (!confirm(`Remove ${lang!.name} from your courses? This cannot be undone.`)) return
        removeLanguage(langId)
        onChanged()
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {/* Main content */}
            <div className="p-5">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <Flag langId={langId} size="lg" />
                    <div className="flex-1">
                        <p className="font-semibold text-gray-900">{lang.name}</p>
                        <p className="text-xs text-gray-400">{lang.nativeName}</p>
                    </div>
                    <LevelBadge level={level} />
                    <span className="text-xs text-gray-400 hidden sm:block">{LEVEL_LABEL[level]}</span>
                </div>

                {/* Overall */}
                <div className="mb-1">
                    <ProgressBar label={`Overall  ${s.overallPct}%`} value={s.overallPct} />
                </div>

                {/* 5-bar breakdown */}
                <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-100">
                    <ProgressBar label={`📖 Grammar     ${s.grammarDone}/${s.grammarTotal}`} value={s.grammarTotal ? s.grammarDone / s.grammarTotal * 100 : 0} />
                    <ProgressBar label={`📝 Vocabulary  ${s.vocabDone}/${s.vocabTotal}`} value={s.vocabTotal ? s.vocabDone / s.vocabTotal * 100 : 0} />
                    <ProgressBar label={`🔤 Verbs       ${s.verbDone}/${s.verbTotal}`} value={s.verbTotal ? s.verbDone / s.verbTotal * 100 : 0} />
                    {s.readingTotal > 0 && (
                        <ProgressBar label={`📗 Reading     ${s.readingDone}/${s.readingTotal}`} value={s.readingDone / s.readingTotal * 100} />
                    )}
                    {s.listeningTotal > 0 && (
                        <ProgressBar label={`🎧 Listening   ${s.listeningDone}/${s.listeningTotal}`} value={s.listeningDone / s.listeningTotal * 100} />
                    )}
                </div>
            </div>

            {/* Manage course — collapsed trigger */}
            <button
                onClick={() => setManageOpen(v => !v)}
                className="w-full flex items-center justify-between px-5 py-3 text-sm text-gray-500
                           hover:bg-gray-50 border-t border-gray-100 transition-colors"
            >
                <span className="font-medium">Manage course</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform ${manageOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Danger zone — expanded */}
            {manageOpen && (
                <div className="border-t border-red-100 bg-red-50 px-5 py-4 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold text-gray-800">Reset progress</p>
                            <p className="text-xs text-gray-500 mt-0.5">
                                Clears all completed lessons and mastered units. Level returns to A1.
                            </p>
                        </div>
                        <button
                            onClick={handleReset}
                            className="shrink-0 text-sm font-semibold text-orange-600 hover:text-orange-800
                                       border border-orange-300 hover:border-orange-500 px-3 py-1.5
                                       rounded-lg transition-colors"
                        >
                            Reset ↺
                        </button>
                    </div>
                    <div className="flex items-start justify-between gap-4 pt-3 border-t border-red-200">
                        <div>
                            <p className="text-sm font-semibold text-gray-800">Remove language</p>
                            <p className="text-xs text-gray-500 mt-0.5">
                                Removes this course entirely. Cannot be undone.
                            </p>
                        </div>
                        <button
                            onClick={handleRemove}
                            className="shrink-0 text-sm font-semibold text-red-600 hover:text-red-800
                                       border border-red-300 hover:border-red-500 px-3 py-1.5
                                       rounded-lg transition-colors"
                        >
                            Remove 🗑
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function ProfilePage() {
    const { session, logout } = useAuth()
    const navigate = useNavigate()
    const [tick, setTick] = useState(0)   // force re-render after changes

    const userInfo = session ? getUserById(session.userId) : null
    const displayName = userInfo?.displayName ?? "User"
    const email = userInfo?.email ?? ""
    const initials = displayName.split(" ").map((w: string) => w[0]).join("").slice(0, 2).toUpperCase()

    const startedIds = getStartedLanguages()

    // Global stats across all languages
    const totalDone = startedIds.reduce((sum, id) => sum + computeStats(id).totalDone, 0)
    const highestLevel = startedIds.reduce<string>((best, id) => {
        const order = ["A1", "A2", "B1", "B2", "C1"]
        const lvl = getCurrentLevel(id)
        return order.indexOf(lvl) > order.indexOf(best) ? lvl : best
    }, "A1")

    function onChanged() { setTick(t => t + 1) }

    async function handleLogout() {
        await logout()
        navigate("/", { replace: true })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title="Profile" backTo="back" />

            <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">

                {/* ── User card ── */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center
                                    text-white text-xl font-bold shrink-0">
                        {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-lg truncate">{displayName}</p>
                        <p className="text-sm text-gray-500 truncate">{email}</p>
                    </div>
                </div>

                {/* ── Stats strip ── */}
                {startedIds.length > 0 && (
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { value: totalDone, label: "items learned" },
                            { value: startedIds.length, label: "languages" },
                            { value: highestLevel, label: "top level" },
                        ].map(({ value, label }) => (
                            <div key={label} className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
                                <p className="text-2xl font-bold text-indigo-600">{value}</p>
                                <p className="text-xs text-gray-500 mt-1">{label}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* ── Language cards ── */}
                {startedIds.length > 0 && (
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            Your languages
                        </h2>
                        <div key={tick} className="flex flex-col gap-4">
                            {startedIds.map(langId => (
                                <LangCard key={langId} langId={langId} onChanged={onChanged} />
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Account ── */}
                <div>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Account
                    </h2>
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-between px-5 py-4 text-sm
                                       text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <span className="font-medium">Sign out</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </main>
        </div>
    )
}
