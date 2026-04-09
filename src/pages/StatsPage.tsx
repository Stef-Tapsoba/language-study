// pages/StatsPage.tsx — Stats hub at /learn/:langId/stats
// Rendered inside AppLayout. Wraps the existing StatsTab component.

import { useParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { useProgress } from "../context/ProgressContext"
import { StatsTab } from "../components/StatsTab"

export function StatsPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const { level: getLevel } = useProgress()
    const level = getLevel(langId)

    if (!language) return null

    return (
        <div className="max-w-2xl mx-auto px-4 py-6">
            <div className="mb-5">
                <h1 className="text-lg font-semibold text-text-pri">Stats</h1>
                <p className="text-xs text-text-sec mt-0.5">{language.name} · {level}</p>
            </div>
            <StatsTab langId={langId} level={level} />
        </div>
    )
}
