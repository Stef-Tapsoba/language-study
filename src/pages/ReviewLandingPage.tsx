// pages/ReviewLandingPage.tsx — Review hub at /learn/:langId/review
// Rendered inside AppLayout (sidebar/bottom nav provided — no NavBar here).
// Shows due item count and launches the full-screen SRS session.

import { useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getModule } from "../data/modules"
import { getDueCount } from "../store/srs"
import { useProgress } from "../context/ProgressContext"
import { useBreakDetection } from "../hooks/useBreakDetection"
import { StreakChip } from "../components/StreakChip"
import { useGlobalStreak } from "../hooks/useGlobalStreak"

export function ReviewLandingPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const { level: getLevel } = useProgress()
    const level = getLevel(langId)
    const mod = getModule(langId)
    const { tier, daysSince } = useBreakDetection(langId)
    const streak = useGlobalStreak()

    const dueCount = useMemo(
        () => mod ? getDueCount(langId, mod.vocab.filter(v => v.level === level).map(v => v.id)) : 0,
        [langId, mod, level]
    )

    const hasDue = dueCount > 0

    return (
        <div className="max-w-md mx-auto px-4 py-6 flex flex-col gap-4">
            <div>
                <h1 className="text-lg font-semibold text-text-pri">Review</h1>
                <p className="text-xs text-text-sec mt-0.5">Spaced repetition keeps vocabulary fresh</p>
            </div>

            {/* Due items card */}
            <div className={`rounded-2xl border-hairline border p-5 flex flex-col gap-4 ${
                hasDue
                    ? "bg-grammar-surface border-grammar-border"
                    : "bg-surface-card border-border-subtle"
            }`}>
                <div className="flex items-center gap-4">
                    <span className="text-4xl">{hasDue ? "🔁" : "✅"}</span>
                    <div className="flex-1">
                        {hasDue ? (
                            <>
                                <p className="font-semibold text-text-pri">
                                    {dueCount} {dueCount === 1 ? "item" : "items"} due
                                </p>
                                <p className="text-xs text-text-sec mt-0.5">
                                    {tier === "medium"   && "You've been away a few days — time to catch up"}
                                    {tier === "heavy"    && "It's been a while — let's review what you know"}
                                    {tier === "critical" && "Long break — a focused session will help a lot"}
                                    {(tier === "none" || tier === "light") && "Keep your streak going"}
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="font-semibold text-text-pri">All caught up!</p>
                                <p className="text-xs text-text-sec mt-0.5">
                                    No vocabulary due for review right now. Keep studying to build your queue.
                                </p>
                            </>
                        )}
                    </div>
                </div>

                {hasDue && (
                    <button
                        onClick={() => navigate(`/learn/${langId}/review/session`)}
                        className="w-full py-2.5 rounded-xl bg-grammar text-surface-card text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        Start review session
                    </button>
                )}
            </div>

            {/* Streak info */}
            {streak > 0 && (
                <div className="flex items-center gap-3 px-1">
                    <StreakChip streak={streak} />
                    <p className="text-xs text-text-sec">
                        {daysSince === 0
                            ? "You've studied today — great consistency!"
                            : `Last session ${daysSince} day${daysSince !== 1 ? "s" : ""} ago`}
                    </p>
                </div>
            )}

            {/* Info */}
            <div className="bg-surface-card border-hairline border border-border-subtle rounded-2xl p-4">
                <p className="text-xs font-semibold text-text-pri mb-2">How spaced repetition works</p>
                <p className="text-xs text-text-sec leading-relaxed">
                    Items you find difficult are shown more often. Items you know well are shown less frequently.
                    Short daily sessions are more effective than long infrequent ones.
                </p>
            </div>
        </div>
    )
}
