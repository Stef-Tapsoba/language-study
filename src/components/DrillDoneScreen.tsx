// components/DrillDoneScreen.tsx — shared session-complete screen for verb and grammar drills
import { NavBar } from "./NavBar"
import { CEFRLevel } from "../types"
import { UIStrings } from "../i18n"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

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

function adaptiveMessage(pct: number): string {
    if (pct >= 90) return "Perfect!"
    if (pct >= 75) return "Great job!"
    if (pct >= 60) return "Good effort!"
    return "Keep it up!"
}

export function DrillDoneScreen({ score, total, level, navTitle, ui, onRestart, missed = [], backTo = "/home", encouragement }: Readonly<DrillDoneScreenProps>) {
    const pct = Math.round((score / total) * 100)
    const message = encouragement ?? adaptiveMessage(pct)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={navTitle} level={level} backTo={backTo} />
            <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                <div className="text-5xl">{pct >= 70 ? "🏆" : "💪"}</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{ui.drillComplete}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-1">{message}</p>
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 w-full flex justify-around">
                    <div>
                        <p className="text-3xl font-bold text-green-600">{score}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ui.scoreCorrect}</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-red-500">{total - score}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ui.scoreWrong}</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-indigo-600">{pct}%</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ui.scoreLabel}</p>
                    </div>
                </div>

                {missed.length > 0 && (
                    <Accordion type="single" collapsible className="w-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-left">
                        <AccordionItem value="mistakes" className="border-0 px-5">
                            <AccordionTrigger className="text-sm font-semibold text-gray-700 dark:text-gray-300 py-3 hover:no-underline">
                                Review mistakes ({missed.length})
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {missed.map((item) => (
                                        <div key={`${item.prompt}-${item.correct}`} className="py-3">
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.prompt}</p>
                                            <p className="text-sm font-medium text-green-700">✓ {item.correct}</p>
                                            <p className="text-sm text-red-500">✗ {item.yourAnswer}</p>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
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
