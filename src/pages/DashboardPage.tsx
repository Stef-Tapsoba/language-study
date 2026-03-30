// pages/DashboardPage.tsx — Per-language dashboard with tabbed navigation (Path, Study, Practice, Test, Stats)
import { useState, useMemo, memo } from "react"
import { useParams, useNavigate, useSearchParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { isUnitUnlocked } from "../store/progress"
import { useProgress } from "../context/ProgressContext"
import { getDueCount } from "../store/srs"
import { useStatsStore, getHistory } from "../store/useStatsStore"
import { NavBar } from "../components/NavBar"
import { StatsTab } from "../components/StatsTab"
import { Flag } from "../components/Flag"
import { LevelBadge } from "../components/LevelBadge"
import { ProgressBar } from "../components/ProgressBar"
import { CEFR_LEVELS, CEFRLevel, LessonUnit } from "../types"
import { SECTION_CONFIG, StudySection } from "../data/sectionConfig"
import { useProgressStats } from "../hooks/useProgressStats"
import { resolvePrimary } from "../utils/localizedText"
import { getUI, UIStrings } from "../i18n"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Alert, AlertDescription } from "../components/ui/alert"
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip"

type DashTab = "path" | "study" | "practice" | "test" | "stats"

// ---------------------------------------------------------------------------
// SectionCard — used by Practice tab
// ---------------------------------------------------------------------------
const SectionCard = memo(function SectionCard({ emoji, title, description, to, progress, badge }: Readonly<{
    emoji: string; title: string; description: string; to: string; progress?: number; badge?: number
}>) {
    return (
        <Link
            to={to}
            className="card-lift bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 flex flex-col gap-2"
        >
            <div className="flex items-start justify-between">
                <span className="text-3xl">{emoji}</span>
                {badge !== undefined && (
                    <span className="bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 leading-none">
                        {badge}
                    </span>
                )}
            </div>
            <p className="font-semibold text-gray-900 dark:text-gray-100">{title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            {progress !== undefined && <ProgressBar value={progress} className="mt-1" color="default" />}
        </Link>
    )
})

// ---------------------------------------------------------------------------
// StudyCard — color-coded cards for the Study tab
// ---------------------------------------------------------------------------
const StudyCard = memo(function StudyCard({ section, title, countDesc, done, total, to }: Readonly<{
    section: StudySection; title: string; countDesc: string
    done?: number; total?: number; to: string
}>) {
    const c = SECTION_CONFIG[section]
    const pct = (done !== undefined && total) ? done / total * 100 : 0
    const ariaLabel = done !== undefined && total !== undefined
        ? `${title} — ${done} of ${total} complete`
        : title
    return (
        <Link to={to} aria-label={ariaLabel} className="card-lift bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden flex flex-col">
            <div className={`h-1.5 ${c.gradient}`} />
            <div className="p-4 flex flex-col gap-2 flex-1">
                <div className={`w-9 h-9 rounded-xl ${c.iconBg} flex items-center justify-center text-xl leading-none`}>
                    {c.emoji}
                </div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{title}</p>
                <p className={`text-xs ${c.iconText} font-medium`}>{countDesc}</p>
                {done !== undefined && total !== undefined && total > 0 && (
                    <div className="mt-1">
                        <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{done} of {total} complete</p>
                        <div className="h-1.5 bg-gray-200/70 rounded-full overflow-hidden">
                            <div className={`h-full ${c.gradient} rounded-full transition-[width] duration-700 ease-out`} style={{ width: `${pct}%` }} />
                        </div>
                    </div>
                )}
            </div>
        </Link>
    )
})

// ---------------------------------------------------------------------------
// UnitRow — one row in the Learning Path list
// ---------------------------------------------------------------------------
const UnitRow = memo(function UnitRow({ unit, langId, level, mastered, allUnits, completed }: Readonly<{
    unit: LessonUnit; langId: string; level: CEFRLevel
    mastered: string[]; allUnits: LessonUnit[]; completed: ReadonlySet<string>
}>) {
    const isMastered = mastered.includes(unit.id)
    const unlocked = isUnitUnlocked(langId, unit.id, allUnits)

    let rowState = "border-gray-100 dark:border-gray-700 border-l-4 border-l-gray-200 dark:border-l-gray-600 bg-gray-50 dark:bg-gray-700/50 opacity-50 cursor-default"
    if (isMastered) rowState = "border-green-200 border-l-4 border-l-green-500 bg-green-50/40 hover:border-green-300"
    else if (unlocked) rowState = "border-gray-200 dark:border-gray-700 border-l-4 border-l-violet-500 bg-white dark:bg-gray-800 hover:shadow-sm"
    const rowCls = `flex items-start gap-4 px-5 py-4 rounded-2xl border-y border-r transition-all ${rowState}`

    let badgeState = "bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500"
    if (isMastered) badgeState = "bg-green-500 text-white"
    else if (unlocked) badgeState = "bg-violet-600 text-white"
    const badgeCls = `shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 ${badgeState}`

    // Content pills shown on unlocked units
    const pills = [
        ...(unit.grammarIds.length > 0 ? [{ label: "Grammar", done: unit.grammarIds.every(id => completed.has(id)), cls: "bg-green-100 text-green-700" }] : []),
        ...(unit.vocabIds.length > 0 ? [{ label: "Vocab", done: unit.vocabIds.every(id => completed.has(id)), cls: "bg-amber-100 text-amber-700" }] : []),
        ...(unit.verbIds.length > 0 ? [{ label: "Verbs", done: unit.verbIds.every(id => completed.has(id)), cls: "bg-red-100 text-red-600" }] : []),
        { label: "Test", done: isMastered, cls: "bg-violet-100 text-violet-700" },
    ]

    const inner = (
        <div className={rowCls}>
            <span className={badgeCls}>
                {isMastered ? "✓" : unit.order}
            </span>
            <div className="flex-1 min-w-0">
                <p className={`font-semibold truncate ${unlocked ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}`}>
                    {unit.title}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 truncate mt-0.5">{resolvePrimary(unit.description, level)}</p>
                {unlocked && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {pills.map(p => (
                            <span key={p.label} className={`text-xs font-medium rounded-full px-2 py-0.5 ${p.cls} ${p.done ? "opacity-60" : ""}`}>
                                {p.done ? `${p.label} ✓` : p.label}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            {!unlocked && (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Locked">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </TooltipTrigger>
                    <TooltipContent>Complete the previous unit to unlock</TooltipContent>
                </Tooltip>
            )}
        </div>
    )

    if (!unlocked) return inner
    return <Link to={`/learn/${langId}/units/${unit.id}`} className="block">{inner}</Link>
})

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
    const { level: getLevel, mastered: getMastered } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)
    const mastered = getMastered(langId)

    // All progress via the shared hook — single source of truth
    const { grammar, vocab, verbs, reading, listening, isDone } = useProgressStats(langId, level)

    const [searchParams, setSearchParams] = useSearchParams()
    const levelUnits = useMemo(
        () => (mod?.units ?? []).filter(u => u.level === level),
        [mod, level]
    )
    const defaultTab: DashTab = levelUnits.length > 0 ? "path" : "study"
    const [tab, setTab] = useState<DashTab>((searchParams.get("tab") as DashTab | null) ?? defaultTab)

    // completed Set for O(1) UnitRow pill checks
    const completed = useMemo<ReadonlySet<string>>(() => {
        if (!mod) return new Set()
        return new Set([
            ...mod.vocab.map(v => v.id).filter(id => isDone(id)),
            ...mod.grammar.map(g => g.id).filter(id => isDone(id)),
            ...mod.verbs.map(v => v.id).filter(id => isDone(id)),
        ])
    }, [mod, isDone])

    const dueCount = useMemo(
        () => mod ? getDueCount(langId, mod.vocab.filter(v => v.level === level).map(v => v.id)) : 0,
        [langId, mod, level]
    )

    const onboardingKey = `ls:onboarded:${langId}`
    const [showOnboarding, setShowOnboarding] = useState(() => !localStorage.getItem(onboardingKey))

    function dismissOnboarding() {
        localStorage.setItem(onboardingKey, "1")
        setShowOnboarding(false)
    }

    function switchTab(t: DashTab) {
        setTab(t)
        setSearchParams({ tab: t }, { replace: true })
    }

    if (!language || !mod) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Language not found.</p>
            </div>
        )
    }

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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={language.name} level={level} backTo="/home" />

            <main className="max-w-3xl mx-auto px-4 py-6">
                {/* Level header */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 mb-5 flex items-center gap-4">
                    <Flag langId={langId} size="lg" />
                    <div className="flex-1">
                        <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{ui.currentLevel}</p>
                        <div className="flex items-center gap-2">
                            <LevelBadge level={level} />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{levelName(level, ui)}</span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate(`/learn/${langId}/placement`)}
                        className="text-xs text-indigo-600 hover:underline shrink-0"
                    >
                        {ui.changeLevel}
                    </button>
                </div>

                {/* First-visit onboarding card */}
                {showOnboarding && (
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-2xl p-4 mb-5 flex gap-4 items-start">
                        <span className="text-2xl shrink-0">👋</span>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-indigo-900 dark:text-indigo-100 text-sm">Start here</p>
                            <p className="text-xs text-indigo-700 dark:text-indigo-300 mt-0.5">
                                Head to the <strong>Path</strong> tab for a guided tour, or jump straight into <strong>Study</strong> to browse lessons.
                                Practice with flashcards and drills, then take a <strong>Level Test</strong> when you're ready to advance.
                            </p>
                        </div>
                        <button
                            onClick={dismissOnboarding}
                            aria-label="Dismiss"
                            className="text-indigo-400 hover:text-indigo-600 dark:text-indigo-500 dark:hover:text-indigo-300 shrink-0 p-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Tab bar */}
                <Tabs value={tab} onValueChange={v => switchTab(v as DashTab)} className="mb-6">
                    <TabsList className="w-full h-auto p-1 bg-gray-100 dark:bg-gray-700 rounded-xl">
                        {tabs.map(t => (
                            <TabsTrigger
                                key={t.id}
                                value={t.id}
                                className="flex-1 min-w-0 py-2 px-2 text-xs sm:text-sm flex items-center justify-center gap-1.5"
                            >
                                {t.label}
                                {t.badge && (
                                    <span className="inline-flex text-xs font-normal rounded-full px-1.5 py-0.5 bg-indigo-100 text-indigo-600 data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-500">
                                        {t.badge}
                                    </span>
                                )}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* ── PATH ─────────────────────────────────────────────── */}
                    <TabsContent value="path" className="tab-fade">
                        {levelUnits.length > 0 ? (
                            <>
                                {/* Level progress bar */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">{level} progress</span>
                                    <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-violet-500 rounded-full transition-all"
                                            style={{ width: `${levelUnits.length ? masteredCount / levelUnits.length * 100 : 0}%` }} />
                                    </div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">{masteredCount} of {levelUnits.length}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {levelUnits.map(unit => (
                                        <UnitRow
                                            key={unit.id}
                                            unit={unit}
                                            langId={langId}
                                            level={level}
                                            mastered={mastered}
                                            allUnits={levelUnits}
                                            completed={completed}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-16 text-gray-400 dark:text-gray-500">
                                <p className="text-4xl mb-3">🚧</p>
                                <p className="font-medium">Guided units coming soon for {language.name}.</p>
                                <p className="text-sm mt-1">Use the Study tab to browse content directly.</p>
                            </div>
                        )}
                    </TabsContent>

                    {/* ── STUDY ────────────────────────────────────────────── */}
                    <TabsContent value="study" className="tab-fade">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <StudyCard
                                section="grammar"
                                title={ui.sectionGrammar}
                                countDesc={`${grammar.total} lessons at ${level}`}
                                done={grammar.done} total={grammar.total}
                                to={`/learn/${langId}/grammar`}
                            />
                            <StudyCard
                                section="vocab"
                                title={ui.sectionVocab}
                                countDesc={`${vocab.total} words at ${level}`}
                                done={vocab.done} total={vocab.total}
                                to={`/learn/${langId}/vocab`}
                            />
                            <StudyCard
                                section="verbs"
                                title={ui.sectionVerbs}
                                countDesc={`${verbs.total} verbs at ${level}`}
                                done={verbs.done} total={verbs.total}
                                to={`/learn/${langId}/verbs`}
                            />
                            <StudyCard
                                section="reading"
                                title={ui.sectionReading}
                                countDesc={`${reading.total} passages at ${level}`}
                                done={reading.done} total={reading.total}
                                to={`/learn/${langId}/reading`}
                            />
                            <StudyCard
                                section="listening"
                                title={ui.sectionListening}
                                countDesc={`${listening.total} exercises at ${level}`}
                                done={listening.done} total={listening.total}
                                to={`/learn/${langId}/listening`}
                            />
                            <StudyCard
                                section="culture"
                                title={ui.sectionCulture}
                                countDesc={ui.sectionCultureDesc}
                                to={`/learn/${langId}/culture`}
                            />
                        </div>
                    </TabsContent>

                    {/* ── PRACTICE ─────────────────────────────────────────── */}
                    <TabsContent value="practice" className="tab-fade">
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
                                badge={(() => {
                                    const verbCount = mod.verbs.filter(v => v.level === level).length
                                    return verbCount > 0 ? verbCount : undefined
                                })()}
                            />
                            <SectionCard
                                emoji="✏️"
                                title={ui.sectionGrammarDrill}
                                description={ui.sectionGrammarDrillDesc}
                                to={`/learn/${langId}/grammar-drill`}
                                badge={(() => {
                                    const gCount = mod.grammar.filter(g => g.level === level).flatMap(g => g.examples).length
                                    return gCount > 0 ? gCount : undefined
                                })()}
                            />
                        </div>
                    </TabsContent>

                    {/* ── STATS ────────────────────────────────────────────── */}
                    <TabsContent value="stats" className="tab-fade">
                        <StatsTab langId={langId} level={level} />
                    </TabsContent>

                    {/* ── TEST ─────────────────────────────────────────────── */}
                    <TabsContent value="test" className="tab-fade">
                        {canAdvance ? (() => {
                            const nextLevel = CEFR_LEVELS[levelIndex + 1]
                            const history14 = getHistory(useStatsStore.getState().data, langId, 14)
                            const reviewed14 = history14.reduce((s, d) => s + d.reviewed, 0)
                            const correct14 = history14.reduce((s, d) => s + d.correct, 0)
                            const srsAcc = reviewed14 ? Math.round(correct14 / reviewed14 * 100) : 0
                            return (
                                <div className="flex flex-col gap-4">
                                    {/* Hero */}
                                    <div className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-2xl p-6 text-white">
                                        <p className="text-sm font-medium text-violet-200 mb-1">{level} → {nextLevel}</p>
                                        <h2 className="text-2xl font-bold mb-0.5">Level test</h2>
                                        <p className="text-violet-200 text-sm">15 questions · pass 12 to advance</p>
                                    </div>
                                    {/* Readiness */}
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                                        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-4">Readiness</p>
                                        <div className="flex flex-col gap-3">
                                            {[
                                                { label: "Grammar covered",    done: grammar.done, total: grammar.total, color: "bg-green-500" },
                                                { label: "Vocabulary learned",  done: vocab.done,   total: vocab.total,   color: "bg-amber-400" },
                                                { label: "Flashcard accuracy",  done: srsAcc,       total: 100,           color: "bg-violet-500", suffix: "%" },
                                            ].map(r => (
                                                <div key={r.label} className="flex items-center gap-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400 flex-1">{r.label}</span>
                                                    <div className="w-28 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                                        <div className={`h-full ${r.color} rounded-full`}
                                                            style={{ width: `${r.total ? r.done / r.total * 100 : 0}%` }} />
                                                    </div>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 w-14 text-right shrink-0">
                                                        {r.suffix ? `${r.done}${r.suffix}` : `${r.done}/${r.total}`}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => navigate(`/learn/${langId}/level-test`)}
                                            className="mt-5 w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl py-3 text-sm transition-colors"
                                        >
                                            Start level test →
                                        </button>
                                    </div>
                                    {/* Tip */}
                                    <Alert className="border-amber-200 bg-amber-50 text-amber-800">
                                        <AlertDescription className="flex gap-3">
                                            <span className="text-amber-500 shrink-0">💡</span>
                                            <span>
                                                You can take the test at any time — but covering more units first improves your chances.
                                                You need 12/15 (80%) to advance to {nextLevel}.
                                            </span>
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            )
                        })() : (
                            <div className="flex flex-col items-center text-center py-16 gap-4 text-gray-400 dark:text-gray-500">
                                <p className="text-4xl">🏆</p>
                                <p className="font-medium text-gray-700 dark:text-gray-300">You've reached the highest level!</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Keep your skills sharp with daily practice.</p>
                                <button
                                    onClick={() => switchTab("practice")}
                                    className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                               rounded-xl px-6 py-2.5 text-sm transition-colors"
                                >
                                    Go to Practice
                                </button>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}
