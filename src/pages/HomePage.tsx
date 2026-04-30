// pages/HomePage.tsx — Authenticated home screen.
//
// Rendered inside AppLayout (sidebar/bottom nav already provided — no NavBar here).
//
// Two branches:
//   NewUserWelcome — no languages started yet
//   ReturningHome  — 2-column desktop layout, single column on mobile

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { useAppBootstrap } from "../hooks/useAppBootstrap"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { useGlobalStreak } from "../hooks/useGlobalStreak"
import { VISIBLE_LANGUAGES, getLanguage } from "../data/languages"
import { getModule, loadModule } from "../data/modules"
import { getUnitsForGoal } from "../data/repo"
import { getGoal } from "../store/preferences"
import { registry } from "../store/registry"
import { useProgress } from "../context/ProgressContext"
import { useStatsStore, getTotalReviews } from "../store/useStatsStore"
import { isUnitUnlocked } from "../domain/unitUnlock"
import { Flag } from "../components/Flag"
import { LevelBadge, levelNames } from "../components/LevelBadge"
import { PhaseTrack, computeUnitPhases } from "../components/PhaseTrack"
import { CheckpointStrip } from "../components/CheckpointStrip"
import { QuickPracticeCard } from "../components/QuickPracticeCard"
import type { CEFRLevel, Checkpoint, LessonUnit, LanguageModule } from "../types"

// ─── Helpers ─────────────────────────────────────────────────────────────────

function timeOfDay(h: number): string {
    if (h >= 5  && h < 12) return "Good morning"
    if (h >= 12 && h < 18) return "Good afternoon"
    if (h >= 18 && h < 22) return "Good evening"
    return "Welcome back"
}

function greeting(name: string): string {
    return `${timeOfDay(new Date().getHours())}, ${name}`
}

function checkpointSubtitle(unitsUntil: number | null): string {
    if (unitsUntil === 0) return "Ready to attempt"
    if (unitsUntil === 1) return "1 unit away"
    return `${unitsUntil ?? 0} units away`
}


// ─── Practice icon SVGs (shared between desktop sidebar and mobile row) ──────

const FlashcardsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="5" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" className="text-verbs" />
        <rect x="9" y="3" width="5" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" className="text-verbs" />
    </svg>
)
const VerbDrillIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 5h10M3 8h7M3 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="text-listening" />
    </svg>
)
const GrammarDrillIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.3" className="text-reading" />
        <path d="M6 8l1.5 1.5L10 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="text-reading" />
    </svg>
)

/** Groups level units into checkpoint blocks using the gate-unit pattern. */
function computeBlocks(levelUnits: LessonUnit[], checkpoints: Checkpoint[]) {
    const blocks: { checkpoint: Checkpoint; units: LessonUnit[] }[] = []
    let start = 0
    levelUnits.forEach((unit, i) => {
        if (unit.checkpointId) {
            const cp = checkpoints.find(c => c.id === unit.checkpointId)
            if (cp) {
                blocks.push({ checkpoint: cp, units: levelUnits.slice(start, i + 1) })
                start = i + 1
            }
        }
    })
    return blocks
}

// ─── New-user welcome ────────────────────────────────────────────────────────

function NewUserWelcome({ displayName, onPick }: Readonly<{ displayName: string; onPick: (id: string) => void }>) {
    return (
        <div className="max-w-xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h1 className="text-2xl font-semibold text-text-pri mb-1">Welcome, {displayName}!</h1>
                <p className="text-sm text-text-sec">Choose the language you want to learn.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VISIBLE_LANGUAGES.map(lang => (
                    <button
                        key={lang.id}
                        onClick={() => onPick(lang.id)}
                        className="bg-surface-card border-hairline border border-border-subtle rounded-2xl p-4 flex items-center gap-4 hover:border-grammar hover:bg-grammar-surface transition-all text-left"
                    >
                        <Flag langId={lang.id} size="lg" />
                        <div>
                            <p className="font-medium text-text-pri">{lang.name}</p>
                            <p className="text-xs text-text-sec">{lang.nativeName}</p>
                        </div>
                    </button>
                ))}
            </div>
            <p className="text-center text-xs text-text-ter mt-4">
                Pick a language → short placement test → start learning
            </p>
        </div>
    )
}

// ─── Current unit card ───────────────────────────────────────────────────────

interface UnitCardProps {
    unit: LessonUnit; langId: string; level: string
    completed: ReadonlySet<string>; mastered: readonly string[]
}

function CurrentUnitCard({ unit, langId, level, completed, mastered }: Readonly<UnitCardProps>) {
    const reinforcement = registry.progress.getReinforcementState(langId, unit.id)
    const phases = computeUnitPhases(unit, completed, reinforcement, mastered)
    const activePhase = phases.find(p => p.status === "active")
    let ctaLabel: string
    if (activePhase)             ctaLabel = `Continue — ${activePhase.label.toLowerCase()}`
    else if (mastered.includes(unit.id)) ctaLabel = "Review unit"
    else                         ctaLabel = "Start unit"

    return (
        <div className="bg-surface-card border-hairline border border-border-subtle rounded-2xl overflow-hidden">
            <div className="px-4 pt-4 pb-3 flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-text-ter uppercase tracking-widest">{level} · Unit {unit.order}</span>
                    <span className="text-[10px] font-semibold bg-grammar-surface text-grammar px-2 py-0.5 rounded-full">In progress</span>
                </div>
                <div>
                    <p className="text-sm font-semibold text-text-pri leading-snug">{unit.title}</p>
                    {unit.description && typeof unit.description === "string" && (
                        <p className="text-[11px] text-text-sec mt-0.5 leading-relaxed line-clamp-2">{unit.description}</p>
                    )}
                </div>
                <PhaseTrack phases={phases} variant="compact" />
            </div>
            <Link
                to={`/learn/${langId}/units/${unit.id}`}
                className="block mx-4 mb-4 px-4 py-2.5 bg-grammar-surface border-hairline border border-grammar-border rounded-xl text-grammar text-[13px] font-medium text-center hover:bg-grammar-surface/80 transition-colors"
            >
                {ctaLabel}
            </Link>
        </div>
    )
}

// ─── Level-complete card ─────────────────────────────────────────────────────

function LevelCompleteCard({ langId, level }: Readonly<{ langId: string; level: string }>) {
    return (
        <div className="bg-surface-card border-hairline border border-border-subtle rounded-2xl overflow-hidden">
            <div className="px-4 pt-4 pb-3 flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-text-ter uppercase tracking-widest">{level}</span>
                    <span className="text-[10px] font-semibold bg-grammar-surface text-grammar px-2 py-0.5 rounded-full">✓ All units complete</span>
                </div>
                <div>
                    <p className="text-sm font-semibold text-text-pri leading-snug">You've finished all {level} units!</p>
                    <p className="text-[11px] text-text-sec mt-0.5 leading-relaxed">Take the level test to advance to the next level.</p>
                </div>
                <div className="w-full h-1.5 bg-grammar rounded-full" />
            </div>
            <Link
                to={`/learn/${langId}/level-test`}
                className="block mx-4 mb-4 px-4 py-2.5 bg-grammar border-hairline border border-grammar-border rounded-xl text-white text-[13px] font-medium text-center hover:opacity-90 transition-colors"
            >
                Take the {level} Level Test →
            </Link>
        </div>
    )
}

// ─── Upcoming units (left column, desktop only) ───────────────────────────────

interface UpcomingUnitsProps {
    langId: string
    currentUnit: LessonUnit | null
    levelUnits: LessonUnit[]
    mastered: readonly string[]
    completedCheckpoints: readonly string[]
}

function UpcomingUnits({ langId, currentUnit, levelUnits, mastered, completedCheckpoints }: Readonly<UpcomingUnitsProps>) {
    const currentIdx = currentUnit ? levelUnits.findIndex(u => u.id === currentUnit.id) : -1
    const after = currentIdx >= 0 ? levelUnits.slice(currentIdx + 1, currentIdx + 4) : []
    if (after.length === 0) return null

    return (
        <div className="bg-surface-card border border-border-subtle rounded-2xl overflow-hidden">
            <p className="text-[10px] font-semibold text-text-ter uppercase tracking-widest px-4 pt-4 pb-2">
                Coming up
            </p>
            <div className="flex flex-col divide-y divide-border-subtle">
                {after.map(unit => {
                    const unlocked = isUnitUnlocked(unit.id, levelUnits, mastered, completedCheckpoints)
                    const done = mastered.includes(unit.id)
                    let badgeCls = "bg-border-default text-text-ter"
                    if (done)    badgeCls = "bg-grammar text-white"
                    else if (unlocked) badgeCls = "bg-violet-600 text-white"
                    let unitStatus = "Locked"
                    if (done)    unitStatus = "Completed"
                    else if (unlocked) unitStatus = "Ready to start"
                    return (
                        <div key={unit.id} className={`flex items-center gap-3 px-4 py-3 ${unlocked && !done ? "hover:bg-surface-elevated transition-colors" : ""}`}>
                            <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${badgeCls}`}>
                                {done ? "✓" : unit.order}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium truncate ${unlocked || done ? "text-text-pri" : "text-text-ter"}`}>
                                    {unit.title}
                                </p>
                                <p className="text-[11px] text-text-ter">{unitStatus}</p>
                            </div>
                            {unlocked && !done && (
                                <Link to={`/learn/${langId}/units/${unit.id}`} className="shrink-0">
                                    <ChevronRight size={14} className="text-text-ter" />
                                </Link>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// ─── Checkpoint timeline (right sidebar) ─────────────────────────────────────

interface CheckpointTimelineProps {
    levelCheckpoints: Checkpoint[]
    levelUnits: LessonUnit[]
    mastered: readonly string[]
    completedCheckpoints: readonly string[]
    langId: string
    level: CEFRLevel
}

function CheckpointTimeline({ levelCheckpoints, levelUnits, mastered, completedCheckpoints, langId, level }: Readonly<CheckpointTimelineProps>) {
    if (levelCheckpoints.length === 0) return null

    const blocks = computeBlocks(levelUnits, levelCheckpoints)

    return (
        <div className="bg-surface-card border border-border-subtle rounded-2xl overflow-hidden">
            <p className="text-[10px] font-semibold text-text-ter uppercase tracking-widest px-4 pt-4 pb-2">
                Checkpoints
            </p>
            <div className="flex flex-col p-2 gap-0.5">
                {blocks.map(({ checkpoint: cp, units: blockUnits }) => {
                    const done = completedCheckpoints.includes(cp.id)
                    const masteredInBlock = blockUnits.filter(u => mastered.includes(u.id)).length
                    const blockPct = blockUnits.length > 0 ? masteredInBlock / blockUnits.length : 0
                    const isActive = !done && masteredInBlock > 0
                    const isLocked = !done && masteredInBlock === 0

                    const rowCls = isActive ? "bg-surface-elevated" : ""
                    let dotCls = "border-2 border-border-default text-text-ter"
                    if (done)    dotCls = "bg-grammar text-white"
                    else if (isActive) dotCls = "bg-grammar-surface border-2 border-grammar text-grammar"
                    let titleCls = "text-text-ter"
                    if (done)    titleCls = "text-text-sec line-through decoration-text-ter"
                    else if (isActive) titleCls = "text-text-pri"

                    return (
                        <div key={cp.id} className={`flex items-start gap-3 px-2 py-2.5 rounded-xl ${rowCls}`}>
                            {/* State indicator */}
                            <div className={`w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold ${dotCls}`}>
                                {done ? "✓" : cp.block}
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className={`text-xs font-medium leading-snug ${titleCls}`}>
                                    {cp.title}
                                </p>

                                {/* Block progress bar for active checkpoint */}
                                {isActive && (
                                    <div className="mt-1.5">
                                        <div className="w-full h-1 bg-border-default rounded-full overflow-hidden">
                                            <div
                                                className="h-1 bg-grammar rounded-full transition-[width]"
                                                style={{ width: `${blockPct * 100}%` }}
                                            />
                                        </div>
                                        <p className="text-[10px] text-text-ter mt-0.5">
                                            {masteredInBlock} of {blockUnits.length} units
                                        </p>
                                    </div>
                                )}

                                {done && (
                                    <p className="text-[10px] text-grammar mt-0.5">Completed</p>
                                )}

                                {isLocked && (
                                    <p className="text-[10px] text-text-ter mt-0.5">Not started</p>
                                )}
                            </div>

                            {/* Take checkpoint link for completed blocks that are ready */}
                            {!done && masteredInBlock === blockUnits.length && (
                                <Link
                                    to={`/learn/${langId}/checkpoints/${cp.id}`}
                                    className="shrink-0 text-[10px] font-semibold text-grammar bg-grammar-surface px-2 py-0.5 rounded-full hover:opacity-80 transition-opacity"
                                >
                                    Ready →
                                </Link>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className="px-4 pb-3">
                <Link
                    to={`/learn/${langId}/path`}
                    className="text-[11px] text-text-ter hover:text-grammar transition-colors"
                >
                    View full path →
                </Link>
            </div>
        </div>
    )
}

// ─── Desktop sidebar panel ───────────────────────────────────────────────────

interface SidebarPanelProps {
    langId: string
    level: CEFRLevel
    masteredCount: number
    totalUnits: number
    totalReviews: number
    streak: number
    levelCheckpoints: Checkpoint[]
    levelUnits: LessonUnit[]
    mastered: readonly string[]
    completedCheckpoints: readonly string[]
}

function SidebarPanel({
    langId, level, masteredCount, totalUnits, totalReviews, streak,
    levelCheckpoints, levelUnits, mastered, completedCheckpoints,
}: Readonly<SidebarPanelProps>) {
    const pct = totalUnits > 0 ? Math.round(masteredCount / totalUnits * 100) : 0

    return (
        <div className="flex flex-col gap-4">
            {/* Level progress + streak */}
            <div className="bg-surface-card border border-border-subtle rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <LevelBadge level={level} />
                        <span className="text-xs text-text-sec">{levelNames[level]}</span>
                    </div>
                    <span className="text-xs text-text-ter tabular-nums">{masteredCount} / {totalUnits} units</span>
                </div>
                <div className="w-full h-2 bg-border-default rounded-full overflow-hidden">
                    <div
                        className="h-2 bg-grammar rounded-full transition-[width] duration-500"
                        style={{ width: `${pct}%` }}
                    />
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-[11px] text-text-ter">{pct}% complete</p>
                    {streak > 0 && (
                        <p className="text-[11px] text-streak font-medium">🔥 {streak} day streak</p>
                    )}
                </div>
            </div>

            {/* Checkpoint timeline */}
            <CheckpointTimeline
                levelCheckpoints={levelCheckpoints}
                levelUnits={levelUnits}
                mastered={mastered}
                completedCheckpoints={completedCheckpoints}
                langId={langId}
                level={level}
            />

            {/* Quick practice */}
            <div className="bg-surface-card border border-border-subtle rounded-2xl overflow-hidden">
                <p className="text-[10px] font-semibold text-text-ter uppercase tracking-widest px-4 pt-4 pb-2">
                    Quick practice
                </p>
                <div className="flex flex-col divide-y divide-border-subtle">
                    <Link to={`/learn/${langId}/flashcards`} className="flex items-center gap-3 px-4 py-3 hover:bg-surface-elevated transition-colors">
                        <div className="w-8 h-8 bg-verbs-surface rounded-lg flex items-center justify-center shrink-0">
                            <FlashcardsIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-pri">Flashcards</p>
                            <p className="text-xs text-text-sec">{totalReviews > 0 ? `${totalReviews} due today` : "All caught up"}</p>
                        </div>
                        <ChevronRight size={14} className="text-text-ter shrink-0" />
                    </Link>
                    <Link to={`/learn/${langId}/verb-drill`} className="flex items-center gap-3 px-4 py-3 hover:bg-surface-elevated transition-colors">
                        <div className="w-8 h-8 bg-listening-surface rounded-lg flex items-center justify-center shrink-0">
                            <VerbDrillIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-pri">Verb drill</p>
                            <p className="text-xs text-text-sec">Conjugation practice</p>
                        </div>
                        <ChevronRight size={14} className="text-text-ter shrink-0" />
                    </Link>
                    <Link to={`/learn/${langId}/grammar-drill`} className="flex items-center gap-3 px-4 py-3 hover:bg-surface-elevated transition-colors">
                        <div className="w-8 h-8 bg-reading-surface rounded-lg flex items-center justify-center shrink-0">
                            <GrammarDrillIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-pri">Grammar drill</p>
                            <p className="text-xs text-text-sec">Multiple choice questions</p>
                        </div>
                        <ChevronRight size={14} className="text-text-ter shrink-0" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

// ─── Returning-user home ─────────────────────────────────────────────────────

function ReturningHome({ firstName, langId }: Readonly<{ firstName: string; langId: string }>) {
    const { level: getLevel, completed: getCompleted, mastered: getMastered, completedCheckpoints: getCompletedCheckpoints } = useProgress()
    const level = getLevel(langId)
    const completedArr = getCompleted(langId)
    const mastered = getMastered(langId)
    const completedCheckpoints = getCompletedCheckpoints(langId)
    const completed = new Set(completedArr)
    const statsData = useStatsStore(s => s.data)
    const totalReviews = getTotalReviews(statsData, langId)
    const streak = useGlobalStreak()

    const [mod, setMod] = useState<LanguageModule | null>(() => getModule(langId))
    useEffect(() => {
        if (!mod) loadModule(langId).then(() => setMod(getModule(langId)))
    }, [langId, mod])

    if (!mod) return null

    const levelUnits = mod.units.filter(u => u.level === level).sort((a, b) => a.order - b.order)
    const goalSortedUnits = getUnitsForGoal(langId, level, getGoal())
    const levelCheckpoints = (mod.checkpoints ?? []).filter(cp => cp.level === level)
    const masteredCount = levelUnits.filter(u => mastered.includes(u.id)).length
    const allLevelMastered = levelUnits.length > 0 && levelUnits.every(u => mastered.includes(u.id))

    const currentUnit = allLevelMastered
        ? null
        : goalSortedUnits.find(u =>
            !mastered.includes(u.id) &&
            isUnitUnlocked(u.id, goalSortedUnits, [...mastered], [...completedCheckpoints])
          ) ?? goalSortedUnits[goalSortedUnits.length - 1]

    const upcomingCheckpoint = mod.checkpoints?.find(cp =>
        cp.level === level && !completedCheckpoints.includes(cp.id)
    )
    const gateUnit = upcomingCheckpoint
        ? [...levelUnits].reverse().find((u: LessonUnit) => u.checkpointId === upcomingCheckpoint.id) ?? null
        : null
    const unitsUntilCheckpoint = gateUnit
        ? Math.max(0, gateUnit.order - (currentUnit?.order ?? 0))
        : null

    return (
        <div className="max-w-3xl mx-auto w-full px-4 py-6 lg:py-10">

            {/* Greeting */}
            <div className="mb-6">
                <h1 className="text-2xl lg:text-3xl font-semibold text-text-pri leading-tight">
                    {greeting(firstName)}
                </h1>
                <p className="text-sm text-text-sec mt-1">Pick up where you left off.</p>
            </div>

            {/* Responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_288px] gap-4 lg:gap-6 items-start">

                {/* ── Primary column ─────────────────────────────────────── */}
                <div className="flex flex-col gap-4">
                    {allLevelMastered
                        ? <LevelCompleteCard langId={langId} level={level} />
                        : currentUnit && (
                            <CurrentUnitCard
                                unit={currentUnit}
                                langId={langId}
                                level={level}
                                completed={completed}
                                mastered={mastered}
                            />
                        )
                    }

                    {upcomingCheckpoint && unitsUntilCheckpoint !== null && unitsUntilCheckpoint <= 2 && (
                        <CheckpointStrip
                            title={upcomingCheckpoint.title}
                            subtitle={checkpointSubtitle(unitsUntilCheckpoint)}
                            href={`/learn/${langId}/checkpoints/${upcomingCheckpoint.id}`}
                            state={unitsUntilCheckpoint === 0 ? "ready" : "upcoming"}
                        />
                    )}

                    {/* Coming up — desktop only */}
                    <div className="hidden lg:block">
                        <UpcomingUnits
                            langId={langId}
                            currentUnit={currentUnit}
                            levelUnits={goalSortedUnits}
                            mastered={mastered}
                            completedCheckpoints={completedCheckpoints}
                        />
                    </div>

                    {/* Quick practice — mobile only */}
                    <div className="lg:hidden">
                        <p className="text-[10px] text-text-ter uppercase tracking-widest mb-2">Quick practice</p>
                        <div className="flex gap-2">
                            <QuickPracticeCard
                                label="Flashcards"
                                href={`/learn/${langId}/flashcards`}
                                iconBg="bg-verbs-surface"
                                badge={totalReviews > 0 ? `${totalReviews} due` : undefined}
                                badgeColor="text-verbs"
                                icon={<FlashcardsIcon />}
                            />
                            <QuickPracticeCard
                                label="Verb drill"
                                href={`/learn/${langId}/verb-drill`}
                                iconBg="bg-listening-surface"
                                icon={<VerbDrillIcon />}
                            />
                            <QuickPracticeCard
                                label="Grammar drill"
                                href={`/learn/${langId}/grammar-drill`}
                                iconBg="bg-reading-surface"
                                icon={<GrammarDrillIcon />}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Sidebar (desktop only) ─────────────────────────────── */}
                <div className="hidden lg:block">
                    <SidebarPanel
                        langId={langId}
                        level={level}
                        masteredCount={masteredCount}
                        totalUnits={levelUnits.length}
                        totalReviews={totalReviews}
                        streak={streak}
                        levelCheckpoints={levelCheckpoints}
                        levelUnits={levelUnits}
                        mastered={mastered}
                        completedCheckpoints={completedCheckpoints}
                    />
                </div>
            </div>
        </div>
    )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function HomePage() {
    useAppBootstrap()
    const navigate = useNavigate()
    const { firstName } = useCurrentUser()
    const { startedLanguages, selectedLanguage, setSelectedLanguage } = useProgress()

    function handlePick(langId: string) {
        setSelectedLanguage(langId)
        navigate(`/learn/${langId}/placement`)
    }

    if (startedLanguages.length === 0) {
        return <NewUserWelcome displayName={firstName} onPick={handlePick} />
    }

    const isSelectedStarted = Boolean(selectedLanguage && startedLanguages.includes(selectedLanguage))
    const langId = isSelectedStarted ? selectedLanguage! : startedLanguages[0]
    const lang = getLanguage(langId)
    if (!lang) return null

    return <ReturningHome firstName={firstName} langId={langId} />
}
