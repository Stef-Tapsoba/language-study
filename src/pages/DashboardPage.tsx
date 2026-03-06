// pages/DashboardPage.tsx
import { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel, getCompletedLessons, getMasteredUnits, isUnitUnlocked } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { ProgressBar } from "../components/ProgressBar"
import { CEFR_LEVELS, LessonUnit } from "../types"

type DashTab = "path" | "study" | "practice" | "test"

// ---------------------------------------------------------------------------
// SectionCard — navigates to a sub-route
// ---------------------------------------------------------------------------
function SectionCard({ emoji, title, description, to, progress }: {
    emoji: string; title: string; description: string; to: string; progress?: number
}) {
    return (
        <Link
            to={to}
            className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-400
                       hover:shadow-md transition-all flex flex-col gap-2"
        >
            <span className="text-3xl">{emoji}</span>
            <p className="font-semibold text-gray-900">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
            {progress !== undefined && <ProgressBar value={progress} className="mt-1" />}
        </Link>
    )
}

// ---------------------------------------------------------------------------
// UnitRow — one row in the Learning Path list
// ---------------------------------------------------------------------------
function UnitRow({ unit, langId, mastered, allUnits }: {
    unit: LessonUnit; langId: string; mastered: string[]; allUnits: LessonUnit[]
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
                <p className="text-xs text-gray-400 truncate mt-0.5">{unit.description}</p>
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

// ---------------------------------------------------------------------------
// DashboardPage
// ---------------------------------------------------------------------------
export function DashboardPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const completed = getCompletedLessons(langId)
    const mastered = getMasteredUnits(langId)

    const levelUnits = (mod?.units ?? []).filter(u => u.level === level)
    const defaultTab: DashTab = levelUnits.length > 0 ? "path" : "study"
    const [tab, setTab] = useState<DashTab>(defaultTab)

    if (!language || !mod) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Language not found.</p>
            </div>
        )
    }

    const grammarItems = mod.grammar.filter(g => g.level === level)
    const vocabItems = mod.vocab.filter(v => v.level === level)
    const verbItems = mod.verbs.filter(v => v.level === level)

    const grammarDone = grammarItems.filter(g => completed.includes(g.id)).length
    const vocabDone = vocabItems.filter(v => completed.includes(v.id)).length
    const verbDone = verbItems.filter(v => completed.includes(v.id)).length

    const grammarPct = grammarItems.length ? (grammarDone / grammarItems.length) * 100 : 0
    const vocabPct = vocabItems.length ? (vocabDone / vocabItems.length) * 100 : 0
    const verbPct = verbItems.length ? (verbDone / verbItems.length) * 100 : 0

    const levelIndex = CEFR_LEVELS.indexOf(level)
    const canAdvance = levelIndex < CEFR_LEVELS.length - 1
    const masteredCount = levelUnits.filter(u => mastered.includes(u.id)).length

    // Tab definitions
    const tabs: { id: DashTab; label: string; badge?: string }[] = [
        { id: "path", label: "Path", badge: levelUnits.length > 0 ? `${masteredCount}/${levelUnits.length}` : undefined },
        { id: "study", label: "Study" },
        { id: "practice", label: "Practice" },
        { id: "test", label: "Test" },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={`${language.flag} ${language.name}`} level={level} backTo="/home" />

            <main className="max-w-3xl mx-auto px-4 py-6">
                {/* Level header */}
                <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-5 flex items-center gap-4">
                    <div className="text-4xl">{language.flag}</div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-400 mb-0.5">Current level</p>
                        <div className="flex items-center gap-2">
                            <LevelBadge level={level} />
                            <span className="text-gray-700 text-sm">
                                {level === "A1" && "Beginner"}
                                {level === "A2" && "Elementary"}
                                {level === "B1" && "Intermediate"}
                                {level === "B2" && "Upper Intermediate"}
                                {level === "C1" && "Advanced"}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate(`/learn/${langId}/placement`)}
                        className="text-xs text-indigo-600 hover:underline shrink-0"
                    >
                        Change level
                    </button>
                </div>

                {/* Tab bar */}
                <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6">
                    {tabs.map(t => (
                        <button
                            key={t.id}
                            onClick={() => setTab(t.id)}
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
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <SectionCard
                            emoji="📖"
                            title="Grammar"
                            description={`${grammarItems.length} lessons at ${level}`}
                            to={`/learn/${langId}/grammar`}
                            progress={grammarPct}
                        />
                        <SectionCard
                            emoji="📝"
                            title="Vocabulary"
                            description={`${vocabItems.length} words at ${level}`}
                            to={`/learn/${langId}/vocab`}
                            progress={vocabPct}
                        />
                        <SectionCard
                            emoji="🔤"
                            title="Verbs"
                            description={`${verbItems.length} verbs at ${level}`}
                            to={`/learn/${langId}/verbs`}
                            progress={verbPct}
                        />
                    </div>
                )}

                {/* ── PRACTICE ─────────────────────────────────────────── */}
                {tab === "practice" && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <SectionCard
                            emoji="🃏"
                            title="Flashcards"
                            description="Flip cards to drill vocabulary"
                            to={`/learn/${langId}/flashcards`}
                        />
                        <SectionCard
                            emoji="🔡"
                            title="Verb Drill"
                            description="Pick the right conjugation"
                            to={`/learn/${langId}/verb-drill`}
                        />
                        <SectionCard
                            emoji="✏️"
                            title="Grammar Drill"
                            description="Match sentences by meaning"
                            to={`/learn/${langId}/grammar-drill`}
                        />
                    </div>
                )}

                {/* ── TEST ─────────────────────────────────────────────── */}
                {tab === "test" && (
                    canAdvance ? (
                        <button
                            onClick={() => navigate(`/learn/${langId}/level-test`)}
                            className="w-full bg-indigo-50 border border-indigo-200 rounded-2xl p-5
                                       flex items-center justify-between gap-4 hover:bg-indigo-100 transition-colors text-left"
                        >
                            <div>
                                <p className="font-semibold text-indigo-900">Level Test</p>
                                <p className="text-sm text-indigo-700 mt-0.5">
                                    Pass 12 / 15 questions to advance to {CEFR_LEVELS[levelIndex + 1]}
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
