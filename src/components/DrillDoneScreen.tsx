// components/DrillDoneScreen.tsx — shared session-complete screen for verb and grammar drills
import { useState } from "react"
import { NavBar } from "./NavBar"
import { CEFRLevel } from "../types"
import { UIStrings } from "../i18n"

export interface MissedReviewItem {
    prompt: string
    correct: string
    yourAnswer: string
}

interface DrillDoneScreenProps {
    score: number
    total: number
    level: CEFRLevel
    navTitle: string
    ui: UIStrings
    onRestart: () => void
    missed?: MissedReviewItem[]
    /** Where the back button should navigate. Pass `/learn/${langId}` from the caller. */
    backTo?: string
    /** Optional contextual encouragement message shown below the score panel. */
    encouragement?: string
}

export function DrillDoneScreen({ score, total, level, navTitle, ui, onRestart, missed = [], backTo = "/home", encouragement }: Readonly<DrillDoneScreenProps>) {
    const pct = Math.round((score / total) * 100)
    const [reviewOpen, setReviewOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={navTitle} level={level} backTo={backTo} />
            <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                <div className="text-5xl">{pct >= 70 ? "🏆" : "💪"}</div>
                <h2 className="text-2xl font-bold text-gray-900">{ui.drillComplete}</h2>
                {encouragement && (
                    <p className="text-sm text-gray-500 italic mt-1">{encouragement}</p>
                )}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full flex justify-around">
                    <div>
                        <p className="text-3xl font-bold text-green-600">{score}</p>
                        <p className="text-xs text-gray-500 mt-1">{ui.scoreCorrect}</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-red-500">{total - score}</p>
                        <p className="text-xs text-gray-500 mt-1">{ui.scoreWrong}</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-indigo-600">{pct}%</p>
                        <p className="text-xs text-gray-500 mt-1">{ui.scoreLabel}</p>
                    </div>
                </div>

                {missed.length > 0 && (
                    <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden text-left">
                        <button
                            onClick={() => setReviewOpen(o => !o)}
                            className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            <span>Review mistakes ({missed.length})</span>
                            <span className="text-gray-400">{reviewOpen ? "▲" : "▼"}</span>
                        </button>
                        {reviewOpen && (
                            <div className="flex flex-col divide-y divide-gray-100">
                                {missed.map((item) => (
                                    <div key={`${item.prompt}-${item.correct}`} className="px-5 py-3">
                                        <p className="text-xs text-gray-500 mb-1">{item.prompt}</p>
                                        <p className="text-sm font-medium text-green-700">✓ {item.correct}</p>
                                        <p className="text-sm text-red-500">✗ {item.yourAnswer}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <button
                    onClick={onRestart}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                               rounded-xl py-2.5 text-sm transition-colors"
                >
                    {ui.tryAgain}
                </button>
            </main>
        </div>
    )
}
