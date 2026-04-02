// components/ReviewPromptCard.tsx — Break-return review prompt shown in the Path tab.
//
// Shown when useBreakDetection() returns tier medium/heavy/critical.
// Three visual variants; always dismissible for the day.

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { dismissReviewPrompt, isReviewPromptDismissed } from "../store/preferences"
import type { BreakTier } from "../hooks/useBreakDetection"

interface ReviewPromptCardProps {
    langId: string
    tier: BreakTier
    daysSince: number
    dueCount: number
}

type Variant = { bg: string; border: string; icon: string; heading: string; body: string }

function buildVariant(tier: BreakTier, daysSince: number, dueCount: number): Variant {
    const items = dueCount > 0 ? ` ${dueCount} item${dueCount === 1 ? "" : "s"} ready.` : ""
    if (tier === "medium") {
        return {
            bg:      "bg-indigo-50 dark:bg-indigo-900/20",
            border:  "border-indigo-200 dark:border-indigo-700",
            icon:    "👋",
            heading: "Welcome back!",
            body:    `You've been away ${daysSince} day${daysSince === 1 ? "" : "s"}.${items} A quick review will help before continuing.`,
        }
    }
    if (tier === "heavy") {
        return {
            bg:      "bg-amber-50 dark:bg-amber-900/20",
            border:  "border-amber-300 dark:border-amber-700",
            icon:    "🔔",
            heading: `It's been ${daysSince} days`,
            body:    `Your memory needs a refresh.${items} A short review now will save you relearning later.`,
        }
    }
    // critical
    return {
        bg:      "bg-orange-50 dark:bg-orange-900/20",
        border:  "border-orange-300 dark:border-orange-700",
        icon:    "📚",
        heading: "It's been a while",
        body:    `You've been away over a month.${items} We recommend reviewing before continuing so you don't lose your progress.`,
    }
}

export function ReviewPromptCard({ langId, tier, daysSince, dueCount }: Readonly<ReviewPromptCardProps>) {
    const navigate = useNavigate()
    const [dismissed, setDismissed] = useState(() => isReviewPromptDismissed(langId))

    if (dismissed || (tier !== "medium" && tier !== "heavy" && tier !== "critical")) return null

    const v = buildVariant(tier, daysSince, dueCount)

    function handleDismiss() {
        dismissReviewPrompt(langId)
        setDismissed(true)
    }

    return (
        <div className={`${v.bg} border ${v.border} rounded-2xl p-4 mb-5 flex gap-3 items-start`}>
            <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{v.icon}</span>
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{v.heading}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{v.body}</p>
                <div className="flex items-center gap-4 mt-3">
                    <button
                        onClick={() => navigate(`/learn/${langId}/review`)}
                        className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                    >
                        Start review →
                    </button>
                    <button
                        onClick={handleDismiss}
                        className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        Skip for now
                    </button>
                </div>
            </div>
            <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                className="text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 shrink-0 p-1 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}
