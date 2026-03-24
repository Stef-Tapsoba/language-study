// components/SpeakButton.tsx — Inline speaker icon button that plays text via Web Speech API
import { useState } from "react"
import { TTS_LANG_MAP } from "../utils/tts"

interface SpeakButtonProps {
    text: string
    langId: string
    className?: string
}

export function SpeakButton({ text, langId, className = "" }: SpeakButtonProps) {
    const [speaking, setSpeaking] = useState(false)

    if (!("speechSynthesis" in window)) return null

    function handleSpeak(e: React.MouseEvent) {
        e.stopPropagation()
        window.speechSynthesis.cancel()
        const utt = new SpeechSynthesisUtterance(text)
        utt.lang = TTS_LANG_MAP[langId] ?? langId
        utt.rate = 0.9
        utt.onstart = () => setSpeaking(true)
        utt.onend = () => setSpeaking(false)
        utt.onerror = () => setSpeaking(false)
        window.speechSynthesis.speak(utt)
    }

    return (
        <button
            onClick={handleSpeak}
            title="Listen"
            aria-label="Listen"
            className={`shrink-0 p-2 min-h-[44px] min-w-[44px] rounded-lg transition-colors ${speaking
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-300 hover:text-indigo-500 hover:bg-gray-100"
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
    )
}
