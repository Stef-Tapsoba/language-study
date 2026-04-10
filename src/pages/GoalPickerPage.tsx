// pages/GoalPickerPage.tsx — Learning goal selection
//
// Shown after placement test and accessible from ProfilePage.
// The selected goal sorts relevant units to the top of the Path tab
// and adds a "For you" badge to matching units.

import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { Button } from "../components/ui/button"
import { getGoal, setGoal } from "../store/preferences"
import { GOAL_LIST, type GoalId } from "../data/goalConfig"

export function GoalPickerPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const returnTo = searchParams.get("returnTo") ?? "/home"

    const [selected, setSelected] = useState<GoalId>(() => getGoal())

    function handleConfirm() {
        setGoal(selected)
        navigate(returnTo, { replace: true })
    }

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title="Learning Goal" backTo={returnTo} />
            <main className="max-w-md mx-auto px-4 py-10 flex flex-col gap-6">
                <div className="text-center">
                    <p className="text-4xl mb-3">🎯</p>
                    <h2 className="text-xl font-bold text-text-pri mb-1">
                        What's your main goal?
                    </h2>
                    <p className="text-sm text-text-sec">
                        We'll highlight the most relevant units for you. You can change this any time.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {GOAL_LIST.map(goal => (
                        <button
                            key={goal.id}
                            onClick={() => setSelected(goal.id)}
                            className={[
                                "flex items-start gap-4 px-4 py-4 rounded-2xl border-2 text-left transition-colors",
                                selected === goal.id
                                    ? "border-grammar bg-grammar-surface"
                                    : "border-border-default bg-surface-card hover:border-grammar",
                            ].join(" ")}
                        >
                            <span className="text-2xl mt-0.5 shrink-0">{goal.icon}</span>
                            <div className="flex-1 min-w-0">
                                <p className={`font-semibold text-sm ${selected === goal.id ? "text-grammar" : "text-text-pri"}`}>
                                    {goal.label}
                                </p>
                                <p className="text-xs text-text-sec mt-0.5">
                                    {goal.description}
                                </p>
                            </div>
                            <div className={[
                                "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                                selected === goal.id
                                    ? "border-grammar bg-grammar"
                                    : "border-border-default",
                            ].join(" ")}>
                                {selected === goal.id && (
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    ))}
                </div>

                <Button onClick={handleConfirm} className="w-full rounded-xl py-3 font-semibold">
                    Set goal →
                </Button>
            </main>
        </div>
    )
}
