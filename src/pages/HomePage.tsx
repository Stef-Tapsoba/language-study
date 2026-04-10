// pages/HomePage.tsx — Authenticated home screen.
//
// Rendered inside AppLayout (sidebar/bottom nav already provided — no NavBar here).
//
// Two branches:
//   NewUserWelcome — no languages started yet, shows language picker
//   ReturningHome  — shows current unit card + checkpoint + quick practice

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppBootstrap } from "../hooks/useAppBootstrap"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { VISIBLE_LANGUAGES, getLanguage } from "../data/languages"
import { getModule, loadModule } from "../data/modules"
import { getReinforcementState } from "../store/progress"
import { useProgress } from "../context/ProgressContext"
import { useStatsStore, getTotalReviews } from "../store/useStatsStore"
import { isUnitUnlocked } from "../store/progressUtils"
import { Flag } from "../components/Flag"
import { PhaseTrack, computeUnitPhases } from "../components/PhaseTrack"
import { CheckpointStrip } from "../components/CheckpointStrip"
import { QuickPracticeCard } from "../components/QuickPracticeCard"
import type { LessonUnit, LanguageModule } from "../types"

// ─── Greeting ────────────────────────────────────────────────────────────────

function timeOfDay(h: number): string {
    if (h >= 5  && h < 12) return "Good morning"
    if (h >= 12 && h < 18) return "Good afternoon"
    if (h >= 18 && h < 22) return "Good evening"
    return "Welcome back"
}

function greeting(name: string): string {
    return `${timeOfDay(new Date().getHours())}, ${name}`
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
    unit: LessonUnit
    langId: string
    level: string
    completed: ReadonlySet<string>
    mastered: readonly string[]
}

function CurrentUnitCard({ unit, langId, level, completed, mastered }: Readonly<UnitCardProps>) {
    const reinforcement = getReinforcementState(langId, unit.id)
    const phases = computeUnitPhases(unit, completed, reinforcement, mastered)

    // Determine CTA label from the active phase
    const activePhase = phases.find(p => p.status === "active")
    let ctaLabel: string
    if (activePhase) {
        ctaLabel = `Continue — ${activePhase.label.toLowerCase()}`
    } else if (mastered.includes(unit.id)) {
        ctaLabel = "Review unit"
    } else {
        ctaLabel = "Start unit"
    }

    return (
        <div className="bg-surface-card border-hairline border border-border-subtle rounded-2xl overflow-hidden">
            <div className="px-4 pt-4 pb-3 flex flex-col gap-2.5">
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-text-ter uppercase tracking-widest">
                        {level} · Unit {unit.order}
                    </span>
                    <span className="text-[10px] font-semibold bg-grammar-surface text-grammar px-2 py-0.5 rounded-full">
                        In progress
                    </span>
                </div>

                {/* Title + description */}
                <div>
                    <p className="text-sm font-semibold text-text-pri leading-snug">{unit.title}</p>
                    {unit.description && typeof unit.description === "string" && (
                        <p className="text-[11px] text-text-sec mt-0.5 leading-relaxed line-clamp-2">
                            {unit.description}
                        </p>
                    )}
                </div>

                {/* Phase track */}
                <PhaseTrack phases={phases} variant="compact" />
            </div>

            {/* CTA */}
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
                    <span className="text-[10px] font-semibold bg-grammar-surface text-grammar px-2 py-0.5 rounded-full">
                        ✓ All units complete
                    </span>
                </div>
                <div>
                    <p className="text-sm font-semibold text-text-pri leading-snug">
                        You've finished all {level} units!
                    </p>
                    <p className="text-[11px] text-text-sec mt-0.5 leading-relaxed">
                        Take the level test to advance to the next level.
                    </p>
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

    const [mod, setMod] = useState<LanguageModule | null>(() => getModule(langId))
    useEffect(() => {
        if (!mod) loadModule(langId).then(() => setMod(getModule(langId)))
    }, [langId, mod])

    if (!mod) return null

    const levelUnits = mod.units
        .filter(u => u.level === level)
        .sort((a, b) => a.order - b.order)

    const allLevelMastered = levelUnits.length > 0 && levelUnits.every(u => mastered.includes(u.id))

    // Current unit: first unlocked non-mastered (null when all units are done)
    const currentUnit = allLevelMastered
        ? null
        : levelUnits.find(u =>
            !mastered.includes(u.id) &&
            isUnitUnlocked(u.id, levelUnits, mastered, completedCheckpoints)
          ) ?? levelUnits[levelUnits.length - 1]

    // Upcoming checkpoint (the next one not yet completed)
    const upcomingCheckpoint = mod.checkpoints?.find(cp =>
        cp.level === level && !completedCheckpoints.includes(cp.id)
    )

    // Which unit closes this checkpoint's block? (findLast polyfill — reverse + find)
    const gateUnit = upcomingCheckpoint
        ? [...levelUnits].reverse().find((u: LessonUnit) => u.checkpointId === upcomingCheckpoint.id) ?? null
        : null

    const unitsUntilCheckpoint = gateUnit
        ? Math.max(0, gateUnit.order - (currentUnit?.order ?? 0))
        : null

    return (
        <div className="min-h-full flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full px-4 py-6 flex flex-col gap-4">

            {/* Greeting */}
            <div>
                <p className="text-[11px] text-text-ter uppercase tracking-widest mb-1">
                    {greeting(firstName)}
                </p>
                <h1 className="text-xl font-semibold text-text-pri leading-tight">
                    Pick up where<br />you left off.
                </h1>
            </div>

            {/* Current unit card — or level-complete CTA when all units are done */}
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

            {/* Checkpoint strip — show when ≤2 units away or ready */}
            {upcomingCheckpoint && (unitsUntilCheckpoint !== null && unitsUntilCheckpoint <= 2) && (
                <CheckpointStrip
                    title={upcomingCheckpoint.title}
                    subtitle={
                        unitsUntilCheckpoint === 0
                            ? "Ready to attempt"
                            : `${unitsUntilCheckpoint} unit${unitsUntilCheckpoint !== 1 ? "s" : ""} away`
                    }
                    href={`/learn/${langId}/checkpoints/${upcomingCheckpoint.id}`}
                    state={unitsUntilCheckpoint === 0 ? "ready" : "upcoming"}
                />
            )}

            {/* Quick practice row */}
            <div>
                <p className="text-[10px] text-text-ter uppercase tracking-widest mb-2">Quick practice</p>
                <div className="flex gap-2">
                    <QuickPracticeCard
                        label="Flashcards"
                        href={`/learn/${langId}/flashcards`}
                        iconBg="bg-verbs-surface"
                        badge={totalReviews > 0 ? `${totalReviews} due` : undefined}
                        badgeColor="text-verbs"
                        icon={
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="2" y="3" width="5" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" className="text-verbs" />
                                <rect x="9" y="3" width="5" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" className="text-verbs" />
                            </svg>
                        }
                    />
                    <QuickPracticeCard
                        label="Verb drill"
                        href={`/learn/${langId}/verb-drill`}
                        iconBg="bg-listening-surface"
                        icon={
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 5h10M3 8h7M3 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="text-listening" />
                            </svg>
                        }
                    />
                    <QuickPracticeCard
                        label="Grammar drill"
                        href={`/learn/${langId}/grammar-drill`}
                        iconBg="bg-reading-surface"
                        icon={
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.3" className="text-reading" />
                                <path d="M6 8l1.5 1.5L10 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="text-reading" />
                            </svg>
                        }
                    />
                </div>
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

    // Guard: selectedLanguage may be set to a language that was never started
    // (e.g. user picked French then abandoned placement). Fall back to the first
    // language that has actually been started.
    const isSelectedStarted = Boolean(selectedLanguage && startedLanguages.includes(selectedLanguage))
    const langId = isSelectedStarted ? selectedLanguage! : startedLanguages[0]
    const lang = getLanguage(langId)
    if (!lang) return null

    return <ReturningHome firstName={firstName} langId={langId} />
}
