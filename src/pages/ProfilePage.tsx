// pages/ProfilePage.tsx — User profile, per-language progress stats, and account management
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { useProgressStats, computeProgressStats } from "../hooks/useProgressStats"
import { LANGUAGES } from "../data/languages"
import { loadModule } from "../data/modules"
import { useProgress } from "../context/ProgressContext"
import { resetSRS } from "../store/srs"
import { useStatsStore } from "../store/useStatsStore"
import { useGlobalStreak } from "../hooks/useGlobalStreak"
import { NavBar } from "../components/NavBar"
import { Flag } from "../components/Flag"
import { LEVEL_LABELS } from "../types"
import { SECTION_CONFIG } from "../data/sectionConfig"

// ─── Language card ───────────────────────────────────────────────────────────

function LangCard({ langId, onChanged }: Readonly<{ langId: string; onChanged: () => void }>) {
    const [manageOpen, setManageOpen] = useState(false)
    const lang = LANGUAGES.find(l => l.id === langId)
    const { level: getLevel, resetLanguage, removeLanguage } = useProgress()
    const level = getLevel(langId)
    const { grammar, vocab, verbs, reading, listening, overallPct } = useProgressStats(langId, level)
    if (!lang) return null

    function handleReset() {
        if (!confirm(`Reset all progress for ${lang!.name}? Your level will return to A1.`)) return
        resetLanguage(langId)
        resetSRS(langId)
        useStatsStore.getState().resetStats(langId)
        setManageOpen(false)
        onChanged()
    }

    function handleRemove() {
        if (!confirm(`Remove ${lang!.name} from your courses? This cannot be undone.`)) return
        removeLanguage(langId)
        resetSRS(langId)
        useStatsStore.getState().resetStats(langId)
        onChanged()
    }

    const breakdown = [
        { label: SECTION_CONFIG.grammar.label,   done: grammar.done,   total: grammar.total,   color: SECTION_CONFIG.grammar.color   },
        { label: SECTION_CONFIG.vocab.label,     done: vocab.done,     total: vocab.total,     color: SECTION_CONFIG.vocab.color     },
        { label: SECTION_CONFIG.verbs.label,     done: verbs.done,     total: verbs.total,     color: SECTION_CONFIG.verbs.color     },
        ...(reading.total   > 0 ? [{ label: SECTION_CONFIG.reading.label,   done: reading.done,   total: reading.total,   color: SECTION_CONFIG.reading.color   }] : []),
        ...(listening.total > 0 ? [{ label: SECTION_CONFIG.listening.label, done: listening.done, total: listening.total, color: SECTION_CONFIG.listening.color }] : []),
    ]

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
                    <span className="text-xs font-semibold bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full">
                        {level} · {LEVEL_LABELS[level]}
                    </span>
                </div>

                {/* Overall bar */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-violet-500 rounded-full transition-transform origin-left"
                            style={{ transform: `scaleX(${overallPct / 100})` }} />
                    </div>
                    <span className="text-xs font-semibold text-violet-600 w-10 text-right shrink-0">
                        {overallPct}%
                    </span>
                </div>

                {/* Colored breakdown bars */}
                <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
                    {breakdown.map(({ label, done, total, color }) => (
                        <div key={label} className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 w-20 shrink-0">{label}</span>
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className={`h-full ${color} rounded-full transition-transform origin-left`}
                                    style={{ transform: `scaleX(${total ? done / total : 0})` }} />
                            </div>
                            <span className="text-xs text-gray-400 w-10 text-right shrink-0">{done}/{total}</span>
                        </div>
                    ))}
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

// ─── Export ──────────────────────────────────────────────────────────────────

function exportProgress(): void {
    const data = {
        exportedAt: new Date().toISOString(),
        appVersion: "2.2.0",
        progress: JSON.parse(localStorage.getItem("ls:progress") ?? "{}"),
        srs: JSON.parse(localStorage.getItem("ls:srs") ?? "{}"),
        stats: JSON.parse(localStorage.getItem("ls:stats") ?? "{}"),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `language-study-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function ProfilePage() {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const { displayName, email, initials } = useCurrentUser()
    const { startedLanguages: startedIds, level: getLevel, completed: getCompleted, mastered: getMastered } = useProgress()
    const [tick, setTick] = useState(0)   // force re-render after module loads
    // Load any unloaded language modules so progress bars show real numbers
    useEffect(() => {
        Promise.all(startedIds.map(loadModule)).then(() => setTick(t => t + 1))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // Global stats across all languages — computed with plain function (not hook) so it can run in reduce
    const totalDone = startedIds.reduce((sum, id) => {
        return sum + computeProgressStats(id, getLevel(id), getCompleted(id), getMastered(id)).totalDone
    }, 0)
    const highestLevel = startedIds.reduce<string>((best, id) => {
        const order = ["A1", "A2", "B1", "B2", "C1"]
        const lvl = getLevel(id)
        return order.indexOf(lvl) > order.indexOf(best) ? lvl : best
    }, "A1")
    const streak = useGlobalStreak()

    function onChanged() { setTick(t => t + 1) }

    async function handleLogout() {
        await logout()
        navigate("/", { replace: true })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title="Profile" backTo="back" />

            <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">

                {/* ── User hero ── */}
                <div
                    className="rounded-2xl p-6 shadow-sm text-white"
                    style={{ background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)" }}
                >
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center
                                        text-white text-xl font-bold shrink-0">
                            {initials}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-white text-lg truncate">{displayName}</p>
                            <p className="text-sm text-violet-200 truncate">{email}</p>
                        </div>
                    </div>

                    {/* Stats row */}
                    {startedIds.length > 0 && (
                        <div className="grid grid-cols-4 gap-2 mt-5">
                            <div className="bg-white/15 rounded-xl p-3 text-center">
                                <p className="text-lg font-bold text-white">{totalDone}</p>
                                <p className="text-xs text-violet-200">learned</p>
                            </div>
                            <div className="bg-white/15 rounded-xl p-3 text-center">
                                <p className="text-lg font-bold text-white">{startedIds.length}</p>
                                <p className="text-xs text-violet-200">languages</p>
                            </div>
                            <div className="bg-white/15 rounded-xl p-3 text-center">
                                <p className="text-lg font-bold text-white">{highestLevel}</p>
                                <p className="text-xs text-violet-200">top level</p>
                            </div>
                            <div className="bg-white/15 rounded-xl p-3 text-center">
                                <p className="text-lg font-bold text-white">{streak > 0 ? `${streak}🔥` : "—"}</p>
                                <p className="text-xs text-violet-200">streak</p>
                            </div>
                        </div>
                    )}
                </div>

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

                {/* ── Data & backup ── */}
                <div>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Data & backup
                    </h2>
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        {/* Warning */}
                        <div className="flex gap-3 px-5 py-4 bg-amber-50 border-b border-amber-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                            </svg>
                            <p className="text-sm text-amber-800">
                                Your progress is saved on this device only. Clearing your browser
                                data or switching devices will lose it. Export a backup to keep it safe.
                            </p>
                        </div>
                        {/* Export button */}
                        <button
                            onClick={exportProgress}
                            className="w-full flex items-center justify-between px-5 py-4 text-sm
                                       text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-medium">Export progress backup</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </button>
                    </div>
                </div>

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
