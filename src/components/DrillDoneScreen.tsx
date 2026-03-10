// components/DrillDoneScreen.tsx — shared session-complete screen for verb and grammar drills
import { NavBar } from "./NavBar"
import { CEFRLevel } from "../types"
import { UIStrings } from "../i18n"

interface DrillDoneScreenProps {
    score: number
    total: number
    level: CEFRLevel
    navTitle: string
    ui: UIStrings
    onRestart: () => void
}

export function DrillDoneScreen({ score, total, level, navTitle, ui, onRestart }: Readonly<DrillDoneScreenProps>) {
    const pct = Math.round((score / total) * 100)
    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={navTitle} level={level} backTo="back" />
            <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                <div className="text-5xl">{pct >= 70 ? "🏆" : "💪"}</div>
                <h2 className="text-2xl font-bold text-gray-900">{ui.drillComplete}</h2>
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
