// components/GoalProgressCard.tsx — Honest goal-trajectory display.
//
// Blueprint §2.3: when a learner has a time-bound goal, show current vs
// required trajectory and what would need to change — no false reassurance.
// Degrades honestly: no plan → invite; no date → progress only; not enough
// recent mastery events → "pace estimate needs more data".

import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { useProgressStore, progressHelpers } from "../store/useProgressStore"
import { computeTrajectory } from "../domain/goalTrajectory"
import { getUnitsForLevel } from "../data/repo"
import { loadAdvancedModule, isAdvancedLoaded } from "../data/modules"
import { todayStr } from "../store/useStatsStore"
import { CEFRLevel, CEFR_LEVELS } from "../types"

const STATUS_META: Record<string, { icon: string; tone: string; headline: string }> = {
    "ahead":             { icon: "🚀", tone: "text-green-600",  headline: "Ahead of schedule" },
    "on-track":          { icon: "✅", tone: "text-green-600",  headline: "On track" },
    "behind":            { icon: "⚠️", tone: "text-amber-600",  headline: "Behind schedule" },
    "insufficient-data": { icon: "⏳", tone: "text-text-sec",   headline: "Building your pace estimate" },
    "no-date":           { icon: "🎯", tone: "text-text-sec",   headline: "Working toward your target" },
    "achieved":          { icon: "🎉", tone: "text-green-600",  headline: "Target reached" },
}

/**
 * Shared trajectory computation for the card and the sidebar chip.
 * Returns { plan, trajectory } — trajectory is null while the advanced
 * content chunk is still loading (B2/C1 targets).
 */
function useGoalTrajectory(langId: string, level: CEFRLevel) {
    const progress = useProgressStore(s => s.progress)
    const { goalPlan, mastered } = progressHelpers(progress)
    const plan = goalPlan(langId)

    // B2/C1 unit totals live in the lazy advanced chunk — load it when the
    // target needs it, and re-render once merged.
    const needsAdvanced = plan != null
        && (plan.targetLevel === "B2" || plan.targetLevel === "C1")
        && !isAdvancedLoaded(langId)
    const [advancedReady, setAdvancedReady] = useState(!needsAdvanced)
    useEffect(() => {
        if (!needsAdvanced) { setAdvancedReady(true); return }
        loadAdvancedModule(langId).then(() => setAdvancedReady(true))
    }, [needsAdvanced, langId])

    const trajectory = useMemo(() => {
        if (!plan || !advancedReady) return null
        const masteredIds = new Set(mastered(langId))
        const unitTotalsByLevel: Partial<Record<CEFRLevel, number>> = {}
        const masteredByLevel: Partial<Record<CEFRLevel, number>> = {}
        for (const lvl of CEFR_LEVELS) {
            const units = getUnitsForLevel(langId, lvl)
            unitTotalsByLevel[lvl] = units.length
            masteredByLevel[lvl] = units.filter(u => masteredIds.has(u.id)).length
        }
        return computeTrajectory({
            unitTotalsByLevel,
            masteredByLevel,
            currentLevel: level,
            plan,
            masteredDates: progress.unitMasteredAt?.[langId] ?? {},
            today: todayStr(),
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [plan, advancedReady, langId, level, progress])

    return { plan, trajectory }
}

/**
 * Compact one-liner for the HomePage sidebar level card.
 * Hidden when no goal plan is set (the Stats tab carries the invite).
 */
export function GoalTrajectoryChip({ langId, level }: Readonly<{ langId: string; level: CEFRLevel }>) {
    const { plan, trajectory } = useGoalTrajectory(langId, level)
    if (!plan || !trajectory) return null

    const meta = STATUS_META[trajectory.status]
    const dateLabel = plan.targetDate
        ? new Date(plan.targetDate + "T00:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric" })
        : null

    return (
        <Link
            to={`/learn/${langId}/stats`}
            className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border-subtle text-[11px] hover:opacity-80 transition-opacity"
        >
            <span>🎯</span>
            <span className="text-text-sec">
                {plan.targetLevel}{dateLabel ? ` by ${dateLabel}` : ""}
            </span>
            <span className={`ml-auto font-medium ${meta.tone}`}>
                {meta.icon} {meta.headline}
            </span>
        </Link>
    )
}

export function GoalProgressCard({ langId, level }: Readonly<{ langId: string; level: CEFRLevel }>) {
    const { plan, trajectory } = useGoalTrajectory(langId, level)

    const goalHref = `/learn/${langId}/goal?returnTo=/learn/${langId}/stats`

    if (!plan) {
        return (
            <div className="bg-surface-card rounded-2xl border border-border-default p-4 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div className="flex-1">
                    <p className="text-sm font-semibold text-text-pri">Set a target</p>
                    <p className="text-xs text-text-sec">
                        Pick a level and a date to see whether you're on track.
                    </p>
                </div>
                <Link to={goalHref} className="text-sm font-medium text-indigo-600 dark:text-indigo-400 shrink-0">
                    Set goal →
                </Link>
            </div>
        )
    }

    if (!trajectory) {
        return <div className="bg-surface-card rounded-2xl border border-border-default p-4 h-24 animate-pulse" />
    }

    const meta = STATUS_META[trajectory.status] ?? STATUS_META["no-date"]
    const dateLabel = plan.targetDate
        ? new Date(plan.targetDate + "T00:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
        : null

    return (
        <div className="bg-surface-card rounded-2xl border border-border-default p-4">
            <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold text-text-ter uppercase tracking-wide">
                    Goal: {plan.targetLevel}{dateLabel ? ` by ${dateLabel}` : ""}
                </p>
                <Link to={goalHref} className="text-xs text-indigo-600 dark:text-indigo-400">Adjust</Link>
            </div>

            <p className={`text-sm font-semibold ${meta.tone} mb-2`}>{meta.icon} {meta.headline}</p>

            {/* Progress through the goal span */}
            <div className="h-2 bg-surface-elevated rounded-full overflow-hidden mb-2">
                <div
                    className="h-full bg-indigo-400 rounded-full transition-[width] duration-700 ease-out"
                    style={{ width: `${trajectory.progressPct}%` }}
                />
            </div>
            <p className="text-xs text-text-sec mb-1">
                {trajectory.doneUnits} of {trajectory.doneUnits + trajectory.remainingUnits} units
                to finish {plan.targetLevel} ({trajectory.progressPct}%)
            </p>

            {/* Honest pace line per status */}
            {trajectory.status === "behind" && trajectory.daysLeft !== null && (
                <p className="text-xs text-amber-700 dark:text-amber-400">
                    {trajectory.daysLeft > 0
                        ? <>You need about <strong>{trajectory.requiredPerWeek} units/week</strong> to make it — you're averaging {trajectory.actualPerWeek ?? 0}. Consider more study time or adjusting the date.</>
                        : <>The target date has passed. Adjust the date to get a fresh trajectory — the progress you've made still counts.</>}
                </p>
            )}
            {(trajectory.status === "on-track" || trajectory.status === "ahead") && (
                <p className="text-xs text-text-sec">
                    ~{trajectory.requiredPerWeek} units/week needed · you're averaging {trajectory.actualPerWeek}
                    {trajectory.daysLeft !== null ? ` · ${trajectory.daysLeft} days left` : ""}
                </p>
            )}
            {trajectory.status === "insufficient-data" && (
                <p className="text-xs text-text-sec">
                    ~{trajectory.requiredPerWeek} units/week needed. Master a couple of units and
                    your actual pace will show here — honest estimates need real data.
                </p>
            )}
            {trajectory.status === "achieved" && (
                <p className="text-xs text-text-sec">
                    You've mastered everything up to {plan.targetLevel}. Take the level test — then set the next target.
                </p>
            )}
        </div>
    )
}
