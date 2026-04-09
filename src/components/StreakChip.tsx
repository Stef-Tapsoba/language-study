// components/StreakChip.tsx — Amber bordered pill displaying the current study streak.
// Matches the mockup's streak treatment: `#1e1a10` background + `#3d3010` border in dark,
// warm amber equivalent in light. Returns null when streak is 0.

import { Flame } from "lucide-react"

interface StreakChipProps {
    streak: number
    /** When true, omits the "days" suffix label — for compact contexts like top bars. */
    compact?: boolean
    className?: string
}

export function StreakChip({ streak, compact = false, className = "" }: Readonly<StreakChipProps>) {
    if (streak === 0) return null
    return (
        <div
            className={`
                inline-flex items-center gap-1 px-2 py-1 rounded-full
                bg-streak-surface border-hairline border border-streak-border
                ${className}
            `}
        >
            <Flame size={11} className="text-streak shrink-0" />
            <span className="text-xs font-semibold text-streak leading-none">{streak}</span>
            {!compact && (
                <span className="text-[10px] text-streak-muted leading-none">
                    {streak === 1 ? "day" : "days"}
                </span>
            )}
        </div>
    )
}
