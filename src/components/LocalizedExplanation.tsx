// components/LocalizedExplanation.tsx
// Renders a grammar explanation (or unit description) with level-aware immersion logic.
//
// A1  → English only
// A2  → English + target language below (bilingual, native primary)
// B1  → Target language + collapsible English (bilingual, target primary)
// B2+ → Target language only

import { useState } from "react"
import { CEFRLevel, LocalizedText } from "../types"
import { resolveDisplay } from "../utils/localizedText"
import { getUI } from "../i18n"

interface Props {
    text: string | LocalizedText
    level: CEFRLevel
    langId?: string
    className?: string
}

export function LocalizedExplanation({ text, level, langId = "", className = "" }: Readonly<Props>) {
    const [expanded, setExpanded] = useState(false)
    const display = resolveDisplay(text, level)
    const ui = getUI(langId, level)

    if (display.mode === "single") {
        return <p className={`text-sm text-gray-700 leading-relaxed ${className}`}>{display.text}</p>
    }

    if (display.mode === "bilingual-native-primary") {
        return (
            <div className={className}>
                <p className="text-sm text-gray-700 leading-relaxed">{display.primary}</p>
                <p className="text-sm text-indigo-600 leading-relaxed mt-2 pl-3 border-l-2 border-indigo-200 italic">
                    {display.secondary}
                </p>
            </div>
        )
    }

    // bilingual-target-primary (B1) — target language shown, English collapsible
    return (
        <div className={className}>
            <p className="text-sm text-gray-900 leading-relaxed">{display.primary}</p>
            <button
                onClick={() => setExpanded(e => !e)}
                className="mt-2 text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {expanded ? ui.hideEnglish : ui.showEnglish}
            </button>
            {expanded && (
                <p className="text-sm text-gray-500 leading-relaxed mt-1 pl-3 border-l-2 border-gray-200">
                    {display.secondary}
                </p>
            )}
        </div>
    )
}
