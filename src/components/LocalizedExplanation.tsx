// components/LocalizedExplanation.tsx — Grammar explanation renderer with CEFR-level-aware immersion logic
//
// A1  → English only
// A2  → English + target language below (bilingual, native primary)
// B1  → Target language + collapsible English (bilingual, target primary)
// B2+ → Target language only

import { useState } from "react"
import { CEFRLevel, InlineVocabEntry, LocalizedText } from "../types"
import { resolveDisplay } from "../utils/localizedText"
import { getUI } from "../i18n"
import { renderExplanation, VocabClickHandler } from "../utils/renderExplanation"

interface Props {
    text: string | LocalizedText
    level: CEFRLevel
    langId?: string
    className?: string
    inlineVocab?: InlineVocabEntry[]
    onVocabClick?: VocabClickHandler
}

export function LocalizedExplanation({ text, level, langId = "", className = "", inlineVocab, onVocabClick }: Readonly<Props>) {
    const [expanded, setExpanded] = useState(false)
    const display = resolveDisplay(text, level)
    const ui = getUI(langId, level)
    const vocabOpts = { inlineVocab, onVocabClick }

    if (display.mode === "single") {
        return renderExplanation(display.text, { className, ...vocabOpts })
    }

    if (display.mode === "bilingual-native-primary") {
        return (
            <div className={className}>
                {renderExplanation(display.primary, vocabOpts)}
                <div className="mt-2 pl-3 border-l-2 border-grammar-border">
                    {renderExplanation(display.secondary)}
                </div>
            </div>
        )
    }

    // bilingual-target-primary (B1) — target language shown, English collapsible
    return (
        <div className={className}>
            {renderExplanation(display.primary, vocabOpts)}
            <button
                onClick={() => setExpanded(e => !e)}
                className="mt-2 text-xs text-text-ter hover:text-text-sec flex items-center gap-1 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {expanded ? ui.hideEnglish : ui.showEnglish}
            </button>
            {expanded && (
                <div className="mt-1 pl-3 border-l-2 border-border-default">
                    {renderExplanation(display.secondary)}
                </div>
            )}
        </div>
    )
}
