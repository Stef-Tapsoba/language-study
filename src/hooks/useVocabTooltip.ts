// hooks/useVocabTooltip.ts — Shared state + handler for inline vocab tooltips in grammar explanations
import { useState, useCallback } from "react"
import { speak } from "../utils/tts"
import { TOOLTIP_W, ActiveVocabWord } from "../components/VocabTooltip"
import type { VocabClickHandler } from "../utils/renderExplanation"

export function useVocabTooltip(langId: string) {
    const [activeWord, setActiveWord] = useState<ActiveVocabWord | null>(null)

    const handleVocabClick = useCallback<VocabClickHandler>((word, translation, rect) => {
        speak(word, langId)
        const x = Math.max(8, Math.min(rect.left + rect.width / 2 - TOOLTIP_W / 2, window.innerWidth - TOOLTIP_W - 8))
        const above = rect.top > 120
        setActiveWord({ word, translation, x, y: above ? rect.top - 8 : rect.bottom + 8, above })
    }, [langId])

    const dismissTooltip = useCallback(() => setActiveWord(null), [])

    return { activeWord, handleVocabClick, dismissTooltip }
}
