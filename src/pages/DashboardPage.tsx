// pages/DashboardPage.tsx — Learning path view (unit list) for the current CEFR level.
import { useState, useMemo, memo, useEffect, Fragment } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getUnitsForLevel, getUnitsForGoal } from "../data/repo"
import { isUnitUnlocked } from "../store/progressUtils"
import { DEBUG } from "../auth/debugSession"
import { isOnboardingVisible, dismissOnboarding, getGoal, getNewLevel, clearNewLevel } from "../store/preferences"
import { useBreakDetection } from "../hooks/useBreakDetection"
import { ReviewPromptCard } from "../components/ReviewPromptCard"
import { HydrationErrorBanner } from "../components/HydrationErrorBanner"
import { scoreUnitForGoal, USER_GOALS, type GoalId } from "../data/goalConfig"

import { useProgress } from "../context/ProgressContext"
import { getDueCount } from "../store/srs"
import { Flag } from "../components/Flag"
import { LevelBadge } from "../components/LevelBadge"
import { CEFR_LEVELS, CEFRLevel, LessonUnit, Checkpoint } from "../types"
import { useProgressStats } from "../hooks/useProgressStats"
import { resolvePrimary } from "../utils/localizedText"
import { getUI, UIStrings } from "../i18n"
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"


// ---------------------------------------------------------------------------
// UnitRow — one row in the Learning Path list
// ---------------------------------------------------------------------------
const UnitRow = memo(function UnitRow({ unit, langId, level, mastered, allUnits, completed, goalScore, completedCheckpoints }: Readonly<{
    unit: LessonUnit; langId: string; level: CEFRLevel
    mastered: string[]; allUnits: LessonUnit[]; completed: ReadonlySet<string>
    goalScore: number; completedCheckpoints: string[]
}>) {
    const isMastered = mastered.includes(unit.id)
    const unlocked = DEBUG || isUnitUnlocked(unit.id, allUnits, mastered, completedCheckpoints)

    let rowState = "border-border-subtle border-l-4 border-l-border-default bg-surface-elevated opacity-50 cursor-default"
    if (isMastered) rowState = "border-grammar-border border-l-4 border-l-grammar bg-grammar-surface/40 hover:border-grammar"
    else if (unlocked) rowState = "border-border-default border-l-4 border-l-violet-500 bg-surface-card hover:shadow-sm"
    const rowCls = `flex items-start gap-4 px-5 py-4 rounded-2xl border-y border-r transition-all ${rowState}`

    let badgeState = "bg-border-default text-text-ter"
    if (isMastered) badgeState = "bg-grammar text-white"
    else if (unlocked) badgeState = "bg-violet-600 text-white"
    const badgeCls = `shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 ${badgeState}`

    // Content pills shown on unlocked units
    const pills = [
        ...(unit.grammarIds.length > 0 ? [{ label: "Grammar", done: unit.grammarIds.every(id => completed.has(id)), cls: "bg-grammar-surface text-grammar" }] : []),
        ...(unit.vocabIds.length > 0 ? [{ label: "Vocab", done: unit.vocabIds.every(id => completed.has(id)), cls: "bg-vocab-surface text-vocab" }] : []),
        ...(unit.verbIds.length > 0 ? [{ label: "Verbs", done: unit.verbIds.every(id => completed.has(id)), cls: "bg-verbs-surface text-verbs" }] : []),
        ...((unit.readingIds?.length ?? 0) > 0 ? [{ label: "Reading", done: (unit.readingIds ?? []).every(id => completed.has(id)), cls: "bg-reading-surface text-reading" }] : []),
        ...((unit.listeningIds?.length ?? 0) > 0 ? [{ label: "Listening", done: (unit.listeningIds ?? []).every(id => completed.has(id)), cls: "bg-listening-surface text-listening" }] : []),
        ...((unit.cultureIds?.length ?? 0) > 0 ? [{ label: "Culture", done: (unit.cultureIds ?? []).every(id => completed.has(id)), cls: "bg-culture-surface text-culture" }] : []),
        { label: "Test", done: isMastered, cls: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300" },
    ]

    const inner = (
        <div className={rowCls}>
            <span className={badgeCls}>
                {isMastered ? "✓" : unit.order}
            </span>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                    <p className={`font-semibold truncate ${unlocked ? "text-text-pri" : "text-text-ter"}`}>
                        {unit.title}
                    </p>
                    {goalScore > 0 && unlocked && (
                        <Badge variant="outline" className="text-[10px] font-medium shrink-0 text-grammar border-grammar-border bg-grammar-surface">
                            For you
                        </Badge>
                    )}
                </div>
                <p className="text-xs text-text-ter truncate mt-0.5">{resolvePrimary(unit.description, level)}</p>
                {unlocked && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {pills.map(p => (
                            <Badge
                                key={p.label}
                                variant="outline"
                                className={`text-xs font-medium ${p.cls} border-0 ${p.done ? "opacity-60" : ""}`}
                            >
                                {p.done ? `${p.label} ✓` : p.label}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
            {!unlocked && (() => {
                const prevUnit = allUnits.find(u => u.order === unit.order - 1)
                const tipText = prevUnit
                    ? `Complete "${prevUnit.title}" to unlock`
                    : "Complete the previous unit to unlock"
                return (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-text-ter shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label={tipText}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </TooltipTrigger>
                        <TooltipContent>{tipText}</TooltipContent>
                    </Tooltip>
                )
            })()}
        </div>
    )

    if (!unlocked) return inner
    return <Link to={`/learn/${langId}/units/${unit.id}`} className="block">{inner}</Link>
})

// ---------------------------------------------------------------------------
// CheckpointRow — block-end gate card in the Learning Path list
// ---------------------------------------------------------------------------
const CheckpointRow = memo(function CheckpointRow({ checkpoint, langId, gatePassed, isDone }: Readonly<{
    checkpoint: Checkpoint; langId: string
    /** True when the preceding (block-closing) unit is mastered. */
    gatePassed: boolean
    isDone: boolean
}>) {
    let state: "locked" | "available" | "done" = "locked"
    if (isDone) state = "done"
    else if (gatePassed) state = "available"

    const rowCls = [
        "flex items-center gap-4 px-5 py-3 rounded-2xl border-y border-r transition-all",
        state === "done"      && "border-green-200 dark:border-green-800 border-l-4 border-l-green-500 bg-green-50/40 dark:bg-green-900/20",
        state === "available" && "border-amber-200 dark:border-amber-700 border-l-4 border-l-amber-500 bg-amber-50/60 dark:bg-amber-900/20 hover:shadow-sm",
        state === "locked"    && "border-border-subtle border-l-4 border-l-border-default bg-surface-elevated opacity-50 cursor-default",
    ].filter(Boolean).join(" ")

    const iconCls = [
        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm",
        state === "done"      && "bg-green-500 text-white",
        state === "available" && "bg-amber-500 text-white",
        state === "locked"    && "bg-border-default text-text-ter",
    ].filter(Boolean).join(" ")

    const inner = (
        <div className={rowCls}>
            <span className={iconCls} aria-hidden="true">
                {state === "done" ? "✓" : "🎯"}
            </span>
            <div className="flex-1 min-w-0">
                <p className={`font-semibold text-sm truncate ${state === "locked" ? "text-text-ter" : "text-text-pri"}`}>
                    {checkpoint.title}
                </p>
                <p className="text-xs text-text-ter mt-0.5">
                    {state === "done" && "Checkpoint complete"}
                    {state === "available" && "Ready — tap to begin"}
                    {state === "locked" && "Complete the previous unit to unlock"}
                </p>
            </div>
            {state === "done" && (
                <Badge variant="outline" className="text-xs text-green-600 dark:text-green-400 border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 shrink-0">
                    Done
                </Badge>
            )}
            {state === "locked" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-text-ter shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Locked">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )}
        </div>
    )

    if (state === "locked") return inner
    return <Link to={`/learn/${langId}/checkpoints/${checkpoint.id}`} className="block">{inner}</Link>
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
    const { level: getLevel, mastered: getMastered, completedCheckpoints: getCompletedCheckpoints } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)
    const mastered = getMastered(langId)
    const completedCheckpoints = getCompletedCheckpoints(langId)

    // All progress via the shared hook — single source of truth
    const { isDone } = useProgressStats(langId, level)
    // Use repo.getUnitsForLevel — auto-merges topicTags from unitTags.ts lookup
    const levelUnits = useMemo(
        () => getUnitsForLevel(langId, level),
        [langId, level]
    )

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

    const breakDetection = useBreakDetection(langId)
    const [showOnboarding, setShowOnboarding] = useState(() => isOnboardingVisible(langId))
    const [welcomeLevel, setWelcomeLevel] = useState<string | null>(null)

    // Re-read both per-language flags whenever the active language changes.
    useEffect(() => {
        setShowOnboarding(isOnboardingVisible(langId))
        const nl = getNewLevel(langId)
        if (nl) { clearNewLevel(langId); setWelcomeLevel(nl) }
        else setWelcomeLevel(null)
    }, [langId])

    function handleDismissOnboarding() {
        dismissOnboarding(langId)
        setShowOnboarding(false)
    }

    if (!language || !mod) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-text-sec">Language not found.</p>
            </div>
        )
    }

    const levelIndex = CEFR_LEVELS.indexOf(level)
    const canAdvance = levelIndex < CEFR_LEVELS.length - 1
    const masteredCount = levelUnits.filter(u => mastered.includes(u.id)).length

    // Goal-based unit sorting via repo — single source of truth, tags merged via getUnitsForLevel
    const goalId = getGoal()
    const sortedLevelUnits = useMemo(
        () => getUnitsForGoal(langId, level, goalId),
        [langId, level, goalId]
    )


    return (
        <div className="min-h-screen bg-surface-app">
            {/* AppLayout provides the sidebar/bottom nav — no NavBar here */}

            <main className="max-w-3xl mx-auto px-4 py-6">
                <HydrationErrorBanner />
                {/* Level header */}
                <div className="bg-surface-card rounded-2xl border border-border-subtle p-4 mb-5 flex items-center gap-4">
                    <Flag langId={langId} size="lg" />
                    <div className="flex-1">
                        <p className="text-xs text-text-ter mb-0.5">{ui.currentLevel}</p>
                        <div className="flex items-center gap-2">
                            <LevelBadge level={level} />
                            <span className="text-text-sec text-sm">{levelName(level, ui)}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                        <Button
                            variant="link"
                            size="sm"
                            onClick={() => navigate(`/learn/${langId}/placement`)}
                            className="text-xs p-0 h-auto text-grammar"
                        >
                            {ui.changeLevel}
                        </Button>
                        <Button
                            variant="link"
                            size="sm"
                            onClick={() => navigate(`/learn/${langId}/goal?returnTo=/learn/${langId}`)}
                            className="text-xs p-0 h-auto text-text-ter hover:text-grammar"
                        >
                            {USER_GOALS[goalId]?.icon} Goal
                        </Button>
                    </div>
                </div>

                {/* Level-up welcome banner — shown once after advancing to a new level */}
                {welcomeLevel && (
                    <div className="bg-grammar-surface border border-grammar-border rounded-2xl p-4 mb-5 flex gap-4 items-start">
                        <span className="text-2xl shrink-0">🎉</span>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-text-pri text-sm">Welcome to {welcomeLevel}!</p>
                            <p className="text-xs text-text-sec mt-0.5">
                                Your path has been updated with new units. Keep up the momentum.
                            </p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setWelcomeLevel(null)}
                            aria-label="Dismiss"
                            className="w-7 h-7 shrink-0 text-grammar hover:text-grammar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    </div>
                )}

                {/* Level-complete banner — shown when all units are mastered and advancement is available */}
                {masteredCount === levelUnits.length && levelUnits.length > 0 && canAdvance && (
                    <div className="rounded-2xl border border-grammar-border bg-grammar-surface p-4 mb-5 flex items-center gap-4">
                        <span className="text-2xl shrink-0">🏆</span>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-text-pri text-sm">All {level} units complete</p>
                            <p className="text-xs text-text-sec mt-0.5">You're ready to take the level test and advance.</p>
                        </div>
                        <Button
                            size="sm"
                            onClick={() => navigate(`/learn/${langId}/level-test`)}
                            className="shrink-0 rounded-xl"
                        >
                            Level test →
                        </Button>
                    </div>
                )}

                {/* First-visit onboarding card */}
                {showOnboarding && (
                    <div className="bg-grammar-surface border border-grammar-border rounded-2xl p-4 mb-5 flex gap-4 items-start">
                        <span className="text-2xl shrink-0">👋</span>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-text-pri text-sm">Start here</p>
                            <p className="text-xs text-text-sec mt-0.5">
                                Head to the <strong>Path</strong> tab for a guided tour, or jump straight into <strong>Study</strong> to browse lessons.
                                Practice with flashcards and drills, then take a <strong>Level Test</strong> when you're ready to advance.
                            </p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleDismissOnboarding}
                            aria-label="Dismiss"
                            className="w-7 h-7 shrink-0 text-grammar hover:text-grammar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    </div>
                )}

                {/* ── Learning path ──────────────────────────────────────── */}
                <div>
                        <ReviewPromptCard
                            langId={langId}
                            tier={breakDetection.tier}
                            daysSince={breakDetection.daysSince}
                            dueCount={dueCount}
                        />
                        {levelUnits.length > 0 ? (
                            <>
                                {/* Level progress bar */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs text-text-sec shrink-0">{level} progress</span>
                                    <Progress
                                        value={levelUnits.length ? masteredCount / levelUnits.length * 100 : 0}
                                        className="flex-1 h-2"
                                        aria-label={`${level} level progress — ${masteredCount} of ${levelUnits.length} units complete`}
                                    />
                                    <span className="text-xs text-text-sec shrink-0">{masteredCount} of {levelUnits.length}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {sortedLevelUnits.map(unit => {
                                        const checkpoint = unit.checkpointId
                                            ? (mod.checkpoints ?? []).find(cp => cp.id === unit.checkpointId) ?? null
                                            : null
                                        return (
                                            <Fragment key={unit.id}>
                                                <UnitRow
                                                    unit={unit}
                                                    langId={langId}
                                                    level={level}
                                                    mastered={mastered}
                                                    allUnits={levelUnits}
                                                    completed={completed}
                                                    goalScore={scoreUnitForGoal(unit.topicTags, goalId)}
                                                    completedCheckpoints={completedCheckpoints}
                                                />
                                                {checkpoint && (
                                                    <CheckpointRow
                                                        checkpoint={checkpoint}
                                                        langId={langId}
                                                        gatePassed={DEBUG || mastered.includes(unit.id)}
                                                        isDone={completedCheckpoints.includes(checkpoint.id)}
                                                    />
                                                )}
                                            </Fragment>
                                        )
                                    })}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-16 text-text-sec">
                                <p className="text-4xl mb-3">🚧</p>
                                <p className="font-medium text-text-pri">Guided units coming soon for {language.name}.</p>
                            </div>
                        )}
                    </div>
            </main>
        </div>
    )
}
