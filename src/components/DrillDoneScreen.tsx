// components/DrillDoneScreen.tsx — shared session-complete screen for verb and grammar drills
import { NavBar } from "./NavBar"
import { CEFRLevel } from "../types"
import { UIStrings } from "../i18n"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { adaptiveMessage } from "../utils/adaptiveMessage"

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
    const message = encouragement ?? adaptiveMessage(pct)

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title={navTitle} level={level} backTo={backTo} />
            <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                <div className="text-5xl">{pct >= 70 ? "🏆" : "💪"}</div>
                <h2 className="text-2xl font-bold text-text-pri">{ui.drillComplete}</h2>
                <p className="text-sm text-text-sec italic mt-1">{message}</p>
                <Card className="w-full">
                    <CardContent className="p-5 flex justify-around">
                        <div>
                            <p className="text-3xl font-bold text-grammar">{score}</p>
                            <p className="text-xs text-text-sec mt-1">{ui.scoreCorrect}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-verbs">{total - score}</p>
                            <p className="text-xs text-text-sec mt-1">{ui.scoreWrong}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-reading">{pct}%</p>
                            <p className="text-xs text-text-sec mt-1">{ui.scoreLabel}</p>
                        </div>
                    </CardContent>
                </Card>

                {missed.length > 0 && (
                    <Accordion type="single" collapsible className="w-full bg-surface-card rounded-2xl border border-border-subtle text-left">
                        <AccordionItem value="mistakes" className="border-0 px-5">
                            <AccordionTrigger className="text-sm font-semibold text-text-sec py-3 hover:no-underline">
                                Review mistakes ({missed.length})
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="divide-y divide-border-subtle">
                                    {missed.map((item) => (
                                        <div key={`${item.prompt}-${item.correct}`} className="py-3">
                                            <p className="text-xs text-text-sec mb-1">{item.prompt}</p>
                                            <p className="text-sm font-medium text-grammar">✓ {item.correct}</p>
                                            <p className="text-sm text-verbs">✗ {item.yourAnswer}</p>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )}

                <Button onClick={onRestart} className="w-full rounded-xl py-2.5 text-sm font-semibold">
                    {ui.tryAgain}
                </Button>
            </main>
        </div>
    )
}
