// components/PlateauCard.tsx — Visible plateau acknowledgement + interventions.
//
// Blueprint §2.4: when a plateau is detected, respond visibly — explicit
// acknowledgement ("this is normal at this level"), then constructive options:
// review mode (mode shift), a different skill (content reframe), and goal
// recalibration when a time-bound goal exists. Dismissable per ISO week.

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { usePlateauDetection } from "../hooks/usePlateauDetection"
import { dismissPlateauPrompt, isPlateauPromptDismissed } from "../store/preferences"
import { SKILL_LABELS, SKILLS } from "../domain/skills"

export function PlateauCard({ langId }: Readonly<{ langId: string }>) {
    const navigate = useNavigate()
    const result = usePlateauDetection(langId)
    const [dismissed, setDismissed] = useState(() => isPlateauPromptDismissed(langId))

    if (dismissed || result.tier === "none") return null

    const isConcern = result.tier === "concern"
    const affected = result.skills
    const skillNames = affected.map(s => SKILL_LABELS[s.skill].toLowerCase()).join(" and ")

    // Content reframe: suggest a skill that is NOT plateaued
    const affectedSet = new Set(affected.map(s => s.skill))
    const reframeSkill = SKILLS.find(s => !affectedSet.has(s))

    let heading: string
    let body: string
    if (affected.length > 0) {
        heading = isConcern
            ? `Your ${skillNames} accuracy is slipping`
            : `Your ${skillNames} accuracy has been flat`
        body = isConcern
            ? "Recent sessions are landing below your earlier level. That usually means new material is stacking on unconsolidated ground — a review pass tends to fix it."
            : "No movement over the last few weeks. This is completely normal at this stage — plateaus are where consolidation happens. A change of approach helps more than pushing harder."
    } else {
        heading = "Your flashcard retention is dropping"
        body = "You're forgetting more of what you review. Slowing down on new cards and clearing the overdue queue usually turns this around."
    }

    function handleDismiss() {
        dismissPlateauPrompt(langId)
        setDismissed(true)
    }

    return (
        <div className={`${isConcern ? "bg-vocab-surface border-vocab-border" : "bg-reading-surface border-reading-border"} border rounded-2xl p-4 mb-5 flex gap-3 items-start`}>
            <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{isConcern ? "📉" : "🪨"}</span>
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-text-pri text-sm">{heading}</p>
                <p className="text-xs text-text-sec mt-0.5 leading-relaxed">{body}</p>
                <div className="flex items-center gap-4 mt-3 flex-wrap">
                    <button
                        onClick={() => navigate(`/learn/${langId}/review`)}
                        className="text-sm font-semibold text-grammar hover:text-grammar/80 transition-colors"
                    >
                        Review instead of new content →
                    </button>
                    {reframeSkill && affected.length > 0 && (
                        <Link
                            to={`/learn/${langId}/practice`}
                            className="text-xs text-text-sec hover:text-text-pri transition-colors"
                        >
                            Try {SKILL_LABELS[reframeSkill].toLowerCase()} for a change
                        </Link>
                    )}
                    <Link
                        to={`/learn/${langId}/goal?returnTo=/learn/${langId}`}
                        className="text-xs text-text-sec hover:text-text-pri transition-colors"
                    >
                        Adjust goal
                    </Link>
                    <button
                        onClick={handleDismiss}
                        className="text-xs text-text-ter hover:text-text-sec transition-colors"
                    >
                        Dismiss for this week
                    </button>
                </div>
            </div>
            <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                className="text-border-default hover:text-text-sec shrink-0 p-1 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}
