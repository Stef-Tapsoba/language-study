// pages/ScriptPage.tsx — Hangul reference page at /learn/:langId/script
//
// A quick-lookup chart of Hangul syllable blocks: every combination of the 19
// initial consonants (14 basic + 5 tense) with the 10 basic vowels (190 open
// syllables), plus the 11 compound vowels shown standalone since they don't
// combine into the grid. Not a drill — just a reference, reachable from the
// Study tab and the home screen's Quick practice list.
// Only meaningful for Korean (script === "hangul").

import { useParams } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { SpeakButton } from "../components/SpeakButton"
import { speak } from "../utils/tts"
import { getLanguage } from "../data/languages"
import { useProgressStore, progressHelpers } from "../store/useProgressStore"
import { SYLLABLE_CONSONANTS, SYLLABLE_VOWELS, syllableGrid } from "../data/korean/syllableGrid"
import { compoundVowels } from "../data/korean/hangulChart"

export function ScriptPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const progress = useProgressStore(s => s.progress)
    const { level: getLevel } = progressHelpers(progress)
    const level = getLevel(langId)

    if (!language) return null

    if (language.script !== "hangul") {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Hangul Reference" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
                <div className="flex flex-col items-center justify-center py-24 text-text-ter px-4 text-center">
                    <p className="text-4xl mb-3">🔤</p>
                    <p className="font-medium">Hangul reference is only available for Korean.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title="Hangul Reference" level={level} backTo="back" fallbackRoute={`/learn/${langId}`} />
            <main className="max-w-3xl mx-auto px-4 py-6">

                {/* Syllable grid */}
                <div className="mb-4">
                    <h1 className="text-lg font-semibold text-text-pri">Syllable chart</h1>
                    <p className="text-xs text-text-sec mt-0.5">
                        Every consonant + basic vowel combination — {SYLLABLE_CONSONANTS.length} × {SYLLABLE_VOWELS.length} = {SYLLABLE_CONSONANTS.length * SYLLABLE_VOWELS.length} syllables
                    </p>
                </div>

                <div className="overflow-x-auto -mx-4 px-4 mb-8">
                    <table className="border-collapse text-center mx-auto">
                        <thead>
                            <tr>
                                <th className="sticky left-0 bg-surface-app" />
                                {SYLLABLE_VOWELS.map(v => (
                                    <th key={v.char} className="px-1.5 pb-2 text-xs font-medium text-text-sec">
                                        <div className="text-base leading-none">{v.char}</div>
                                        <div className="text-[10px] text-text-ter">{v.romanized}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {SYLLABLE_CONSONANTS.map((cons, row) => (
                                <tr key={cons.char}>
                                    <th className="sticky left-0 bg-surface-app pr-2 text-xs font-medium text-text-sec text-right whitespace-nowrap">
                                        <div className="text-base leading-none">{cons.char}</div>
                                        <div className="text-[10px] text-text-ter">{cons.romanized || "–"}</div>
                                    </th>
                                    {syllableGrid[row].map(cell => (
                                        <td key={cell.char} className="p-0.5">
                                            <button
                                                onClick={() => { void speak(cell.char, langId, 0.9) }}
                                                className="w-14 h-14 flex flex-col items-center justify-center rounded-lg bg-surface-card border border-border-subtle hover:bg-surface-elevated hover:border-border-default transition-colors"
                                                aria-label={`${cell.char}, romanized ${cell.romanized}`}
                                            >
                                                <span className="text-xl leading-none text-text-pri">{cell.char}</span>
                                                <span className="text-[10px] text-text-ter mt-1">{cell.romanized}</span>
                                            </button>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Compound vowels — standalone, not part of the grid */}
                <div className="mb-4">
                    <h2 className="text-xs font-semibold text-text-ter uppercase tracking-widest mb-2">
                        Compound Vowels
                    </h2>
                    <p className="text-xs text-text-sec mb-3">
                        These don't combine with every consonant the way basic vowels do — shown here on their own.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {compoundVowels.map(v => (
                            <div
                                key={v.char}
                                className="bg-surface-card border border-border-subtle rounded-2xl p-4 flex flex-col gap-1"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="text-3xl font-bold text-text-pri leading-none">{v.char}</span>
                                    <span className="text-xs font-medium text-text-sec">{v.romanized}</span>
                                </div>
                                <div className="mt-2 pt-2 border-t border-border-subtle flex items-center justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-text-pri truncate">{v.example.word}</p>
                                        <p className="text-[11px] text-text-sec truncate">{v.example.romanized} · {v.example.translation}</p>
                                    </div>
                                    <SpeakButton text={v.example.word} langId={langId} className="p-1.5 min-h-0 min-w-0" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
