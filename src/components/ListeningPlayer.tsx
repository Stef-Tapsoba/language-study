// components/ListeningPlayer.tsx — TTS audio player for listening exercises with play/stop and slow/normal rate
import { useState } from "react"
import { UIStrings } from "../i18n"

const LANG_MAP: Record<string, string> = {
    es: "es-ES",
    fr: "fr-FR",
    it: "it-IT",
    ja: "ja-JP",
    ko: "ko-KR",
}

interface Props {
    script: string
    langId: string
    ui: UIStrings
    onEnded?: () => void
}

export function ListeningPlayer({ script, langId, ui, onEnded }: Readonly<Props>) {
    const [playing, setPlaying] = useState(false)
    const [slow, setSlow] = useState(false)

    if (!("speechSynthesis" in window)) return null

    function handlePlay() {
        window.speechSynthesis.cancel()
        const utt = new SpeechSynthesisUtterance(script)
        utt.lang = LANG_MAP[langId] ?? langId
        utt.rate = slow ? 0.7 : 1.0
        utt.onstart = () => setPlaying(true)
        utt.onend = () => { setPlaying(false); onEnded?.() }
        utt.onerror = () => setPlaying(false)
        window.speechSynthesis.speak(utt)
    }

    function handleStop() {
        window.speechSynthesis.cancel()
        setPlaying(false)
    }

    return (
        <div className="w-full bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-3">
            {/* Play / Stop button */}
            <button
                onClick={playing ? handleStop : handlePlay}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-colors ${playing
                        ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
            >
                {playing ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zm6.5 0a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                        </svg>
                        {ui.stopAudio}
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.112V15.89a1.5 1.5 0 002.3 1.271l9.344-5.89a1.5 1.5 0 000-2.542L6.3 2.84z" />
                        </svg>
                        {ui.playAudio}
                    </>
                )}
            </button>

            {/* Speed toggle */}
            <button
                onClick={() => { handleStop(); setSlow(s => !s) }}
                className={`px-3 py-2 rounded-xl text-sm font-medium border transition-colors ${slow
                        ? "border-indigo-300 text-indigo-700 bg-indigo-50"
                        : "border-gray-200 text-gray-500 hover:border-indigo-300"
                    }`}
            >
                {slow ? ui.slowSpeed : ui.normalSpeed}
            </button>

            {/* Playing indicator */}
            {playing && (
                <span className="ml-auto text-xs text-indigo-500 animate-pulse">
                    ▶ {ui.playAudio}…
                </span>
            )}
        </div>
    )
}
