// pages/DashboardPage.tsx
import { useState } from "react"
import { useParams, useNavigate, useSearchParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel, getCompletedLessons, getMasteredUnits, isUnitUnlocked } from "../store/progress"
import { getDueCount } from "../store/srs"
import { getHistory, getTotalReviews } from "../store/stats"
import { NavBar } from "../components/NavBar"
import { Flag } from "../components/Flag"
import { LevelBadge } from "../components/LevelBadge"
import { ProgressBar } from "../components/ProgressBar"
import { CEFR_LEVELS, CEFRLevel, LessonUnit } from "../types"
import { resolvePrimary } from "../utils/localizedText"
import { getUI, fmt, UIStrings } from "../i18n"

type DashTab = "path" | "study" | "practice" | "test" | "stats"

// ---------------------------------------------------------------------------
// Stats tab — 14-day CSS bar chart
// ---------------------------------------------------------------------------
function StatChip({ value, label, icon }: Readonly<{ value: string | number; label: string; icon: string }>) {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-indigo-600">{value}</p>
            <p className="text-xs text-gray-500 mt-1">{icon} {label}</p>
        </div>
    )
}

function StatsTab({ langId }: Readonly<{ langId: string }>) {
    const history = getHistory(langId, 14)
    const total = getTotalReviews(langId)
    const maxReviewed = Math.max(...history.map(d => d.reviewed), 1)
    const allReviewed = history.reduce((s, d) => s + d.reviewed, 0)
    const allCorrect = history.reduce((s, d) => s + d.correct, 0)
    const avgAcc = allReviewed ? Math.round(allCorrect / allReviewed * 100) : 0

    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3">
                <StatChip value={allReviewed} label="reviews (14d)" icon="🃏" />
                <StatChip value={`${avgAcc}%`} label="accuracy (14d)" icon="🎯" />
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Last 14 days</p>
                <div className="flex items-end gap-1" style={{ height: 80 }}>
                    {history.map(day => (
                        <div key={day.date} className="flex-1 flex items-end">
                            <div
                                className="w-full rounded-t bg-indigo-400 transition-all"
                                style={{
                                    height: `${(day.reviewed / maxReviewed) * 100}%`,
                                    minHeight: day.reviewed ? 2 : 0,
                                }}
                                title={`${day.date}: ${day.reviewed} reviews`}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex gap-1 mt-1">
                    {history.map(day => {
                        const d = new Date(day.date + "T00:00:00")
                        return (
                            <div key={day.date} className="flex-1 text-center">
                                {d.getDay() === 1 && (
                                    <span className="text-xs text-gray-300">M</span>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {total === 0 && (
                <p className="text-center text-gray-400 text-sm py-4">
                    Complete a flashcard session to see your stats.
                </p>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// SectionCard — navigates to a sub-route
// ---------------------------------------------------------------------------
function SectionCard({ emoji, title, description, to, progress, badge }: {
    emoji: string; title: string; description: string; to: string; progress?: number; badge?: number
}) {
    return (
        <Link
            to={to}
            className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-400
                       hover:shadow-md transition-all flex flex-col gap-2"
        >
            <div className="flex items-start justify-between">
                <span className="text-3xl">{emoji}</span>
                {badge !== undefined && (
                    <span className="bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 leading-none">
                        {badge}
                    </span>
                )}
            </div>
            <p className="font-semibold text-gray-900">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
            {progress !== undefined && <ProgressBar value={progress} className="mt-1" />}
        </Link>
    )
}

// ---------------------------------------------------------------------------
// UnitRow — one row in the Learning Path list
// ---------------------------------------------------------------------------
function UnitRow({ unit, langId, level, mastered, allUnits }: {
    unit: LessonUnit; langId: string; level: CEFRLevel; mastered: string[]; allUnits: LessonUnit[]
}) {
    const isMastered = mastered.includes(unit.id)
    const unlocked = isUnitUnlocked(langId, unit.id, allUnits)

    let rowCls = "flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all "
    rowCls += isMastered ? "bg-green-50 border-green-200 hover:border-green-400" :
        unlocked ? "bg-white border-gray-200 hover:border-indigo-400 hover:shadow-sm" :
            "bg-gray-50 border-gray-100 opacity-60 cursor-default"

    let badgeCls = "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold "
    badgeCls += isMastered ? "bg-green-200 text-green-800" :
        unlocked ? "bg-indigo-100 text-indigo-700" :
            "bg-gray-200 text-gray-400"

    const inner = (
        <div className={rowCls}>
            <span className={badgeCls}>{unit.order}</span>
            <div className="flex-1 min-w-0">
                <p className={`font-semibold truncate ${unlocked ? "text-gray-900" : "text-gray-400"}`}>
                    {unit.title}
                </p>
                <p className="text-xs text-gray-400 truncate mt-0.5">{resolvePrimary(unit.description, level)}</p>
            </div>
            {isMastered ? (
                <span className="shrink-0 text-green-500 text-lg">✓</span>
            ) : unlocked ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )}
        </div>
    )

    if (!unlocked) return inner
    return <Link to={`/learn/${langId}/units/${unit.id}`} className="block">{inner}</Link>
}

function levelName(level: CEFRLevel, ui: UIStrings): string {
    switch (level) {
        case "A1": return ui.levelBeginner
        case "A2": return ui.levelElementary
        case "B1": return ui.levelIntermediate
        case "B2": return ui.levelUpperIntermediate
        case "C1": return ui.levelAdvanced
    }
}

// ---------------------------------------------------------------------------
// DashboardPage
// ---------------------------------------------------------------------------
export function DashboardPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)
    const completed = getCompletedLessons(langId)
    const mastered = getMasteredUnits(langId)

    const [searchParams, setSearchParams] = useSearchParams()
    const levelUnits = (mod?.units ?? []).filter(u => u.level === level)
    const defaultTab: DashTab = levelUnits.length > 0 ? "path" : "study"
    const [tab, setTab] = useState<DashTab>((searchParams.get("tab") as DashTab | null) ?? defaultTab)

    function switchTab(t: DashTab) {
        setTab(t)
        setSearchParams({ tab: t }, { replace: true })
    }

    if (!language || !mod) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Language not found.</p>
            </div>
        )
    }

    const dueCount = getDueCount(langId, mod.vocab.filter(v => v.level === level).map(v => v.id))

    const grammarItems = mod.grammar.filter(g => g.level === level)
    const vocabItems = mod.vocab.filter(v => v.level === level)
    const verbItems = mod.verbs.filter(v => v.level === level)
    const readingItems = (mod.readingPassages ?? []).filter(r => r.level === level)
    const listeningItems = (mod.listeningExercises ?? []).filter(l => l.level === level)

    const grammarDone = grammarItems.filter(g => completed.includes(g.id)).length
    const vocabDone = vocabItems.filter(v => completed.includes(v.id)).length
    const verbDone = verbItems.filter(v => completed.includes(v.id)).length
    const readingDone = readingItems.filter(r => completed.includes(r.id)).length
    const listeningDone = listeningItems.filter(l => completed.includes(l.id)).length

    const grammarPct = grammarItems.length ? (grammarDone / grammarItems.length) * 100 : 0
    const vocabPct = vocabItems.length ? (vocabDone / vocabItems.length) * 100 : 0
    const verbPct = verbItems.length ? (verbDone / verbItems.length) * 100 : 0
    const readingPct = readingItems.length ? (readingDone / readingItems.length) * 100 : 0
    const listeningPct = listeningItems.length ? (listeningDone / listeningItems.length) * 100 : 0

    const levelIndex = CEFR_LEVELS.indexOf(level)
    const canAdvance = levelIndex < CEFR_LEVELS.length - 1
    const masteredCount = levelUnits.filter(u => mastered.includes(u.id)).length

    const tabs: { id: DashTab; label: string; badge?: string }[] = [
        { id: "path", label: ui.tabPath, badge: levelUnits.length > 0 ? `${masteredCount}/${levelUnits.length}` : undefined },
        { id: "study", label: ui.tabStudy },
        { id: "practice", label: ui.tabPractice },
        { id: "test", label: ui.tabTest },
        { id: "stats", label: "Stats" },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={language.name} level={level} backTo="/home" />

            <main className="max-w-3xl mx-auto px-4 py-6">
                {/* Level header */}
                <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-5 flex items-center gap-4">
                    <Flag langId={langId} size="lg" />
                    <div className="flex-1">
                        <p className="text-xs text-gray-400 mb-0.5">{ui.currentLevel}</p>
                        <div className="flex items-center gap-2">
                            <LevelBadge level={level} />
                            <span className="text-gray-700 text-sm">{levelName(level, ui)}</span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate(`/learn/${langId}/placement`)}
                        className="text-xs text-indigo-600 hover:underline shrink-0"
                    >
                        {ui.changeLevel}
                    </button>
                </div>

                {/* Tab bar */}
                <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6">
                    {tabs.map(t => (
                        <button
                            key={t.id}
                            onClick={() => switchTab(t.id)}
                            className={`flex-1 py-2 px-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${tab === t.id
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {t.label}
                            {t.badge && (
                                <span className={`text-xs font-normal rounded-full px-1.5 py-0.5 ${tab === t.id ? "bg-indigo-100 text-indigo-600" : "bg-gray-200 text-gray-500"
                                    }`}>
                                    {t.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* ── PATH ─────────────────────────────────────────────── */}
                {tab === "path" && (
                    levelUnits.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {levelUnits.map(unit => (
                                <UnitRow
                                    key={unit.id}
                                    unit={unit}
                                    langId={langId}
                                    level={level}
                                    mastered={mastered}
                                    allUnits={levelUnits}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-gray-400">
                            <p className="text-4xl mb-3">🚧</p>
                            <p className="font-medium">Guided units coming soon for {language.name}.</p>
                            <p className="text-sm mt-1">Use the Study tab to browse content directly.</p>
                        </div>
                    )
                )}

                {/* ── STUDY ────────────────────────────────────────────── */}
                {tab === "study" && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <SectionCard
                            emoji="📖"
                            title={ui.sectionGrammar}
                            description={`${grammarItems.length} lessons at ${level}`}
                            to={`/learn/${langId}/grammar`}
                            progress={grammarPct}
                        />
                        <SectionCard
                            emoji="📝"
                            title={ui.sectionVocab}
                            description={`${vocabItems.length} words at ${level}`}
                            to={`/learn/${langId}/vocab`}
                            progress={vocabPct}
                        />
                        <SectionCard
                            emoji="🔤"
                            title={ui.sectionVerbs}
                            description={`${verbItems.length} verbs at ${level}`}
                            to={`/learn/${langId}/verbs`}
                            progress={verbPct}
                        />
                        <SectionCard
                            emoji="📗"
                            title={ui.sectionReading}
                            description={ui.sectionReadingDesc}
                            to={`/learn/${langId}/reading`}
                            progress={readingPct}
                        />
                        <SectionCard
                            emoji="🎧"
                            title={ui.sectionListening}
                            description={ui.sectionListeningDesc}
                            to={`/learn/${langId}/listening`}
                            progress={listeningPct}
                        />
                        <SectionCard
                            emoji="🌍"
                            title={ui.sectionCulture}
                            description={ui.sectionCultureDesc}
                            to={`/learn/${langId}/culture`}
                        />
                    </div>
                )}

                {/* ── PRACTICE ─────────────────────────────────────────── */}
                {tab === "practice" && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <SectionCard
                            emoji="🃏"
                            title={ui.sectionFlashcards}
                            description={ui.sectionFlashcardsDesc}
                            to={`/learn/${langId}/flashcards`}
                            badge={dueCount > 0 ? dueCount : undefined}
                        />
                        <SectionCard
                            emoji="🔡"
                            title={ui.sectionVerbDrill}
                            description={ui.sectionVerbDrillDesc}
                            to={`/learn/${langId}/verb-drill`}
                        />
                        <SectionCard
                            emoji="✏️"
                            title={ui.sectionGrammarDrill}
                            description={ui.sectionGrammarDrillDesc}
                            to={`/learn/${langId}/grammar-drill`}
                        />
                    </div>
                )}

                {/* ── STATS ────────────────────────────────────────────── */}
                {tab === "stats" && <StatsTab langId={langId} />}

                {/* ── TEST ─────────────────────────────────────────────── */}
                {tab === "test" && (
                    canAdvance ? (
                        <button
                            onClick={() => navigate(`/learn/${langId}/level-test`)}
                            className="w-full bg-indigo-50 border border-indigo-200 rounded-2xl p-5
                                       flex items-center justify-between gap-4 hover:bg-indigo-100 transition-colors text-left"
                        >
                            <div>
                                <p className="font-semibold text-indigo-900">{ui.levelTestTitle}</p>
                                <p className="text-sm text-indigo-700 mt-0.5">
                                    {fmt(ui.levelTestDesc, { pass: 12, total: 15, next: CEFR_LEVELS[levelIndex + 1] })}
                                </p>
                            </div>
                            <span className="text-3xl shrink-0">🎯</span>
                        </button>
                    ) : (
                        <div className="text-center py-16 text-gray-400">
                            <p className="text-4xl mb-3">🏆</p>
                            <p className="font-medium">You've reached the highest level!</p>
                        </div>
                    )
                )}
            </main>
        </div>
    )
}
