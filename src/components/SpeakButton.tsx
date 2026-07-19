// components/SpeakButton.tsx — Inline speaker icon button that plays text via pre-generated
// static audio (when available) or the Web Speech API otherwise
import { useState } from "react"
import { speak, SpeakOptions } from "../utils/tts"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface SpeakButtonProps {
    text: string
    langId: string
    className?: string
    /** Content id — when present alongside `variant`, plays pre-generated static audio first. */
    id?: string
    variant?: SpeakOptions["variant"]
}

export function SpeakButton({ text, langId, className = "", id, variant }: Readonly<SpeakButtonProps>) {
    const [speaking, setSpeaking] = useState(false)

    async function handleSpeak(e: React.MouseEvent) {
        e.stopPropagation()
        setSpeaking(true)
        try {
            await speak(text, langId, 0.9, id && variant ? { id, variant } : undefined)
        } finally {
            setSpeaking(false)
        }
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    onClick={handleSpeak}
                    aria-label="Listen"
                    className={`shrink-0 p-2 min-h-[44px] min-w-[44px] rounded-lg transition-colors ${speaking
                            ? "text-grammar bg-grammar-surface"
                            : "text-text-ter hover:text-grammar hover:bg-grammar-surface"
                        } ${className}`}
                >
                    {speaking ? (
                        // Speaker with sound waves (playing)
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.112V15.89a1.5 1.5 0 002.3 1.271l9.344-5.89a1.5 1.5 0 000-2.542L6.3 2.84z" />
                            <path d="M15 10a3 3 0 00-3-3v6a3 3 0 003-3z" />
                        </svg>
                    ) : (
                        // Speaker icon (idle)
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.112V15.89a1.5 1.5 0 002.3 1.271l9.344-5.89a1.5 1.5 0 000-2.542L6.3 2.84z" />
                            <path fillRule="evenodd" d="M12.5 6.5a.75.75 0 01.75.75 5 5 0 010 5.5.75.75 0 01-1.3-.75 3.5 3.5 0 000-4 .75.75 0 01.55-.5z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
            </TooltipTrigger>
            <TooltipContent>Listen</TooltipContent>
        </Tooltip>
    )
}
