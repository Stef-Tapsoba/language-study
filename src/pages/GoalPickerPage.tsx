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

    const [selected, setSelected] = useState<GoalId>(() => getGoal() as GoalId)

    function handleConfirm() {
        setGoal(selected)
        navigate(returnTo, { replace: true })
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title="Learning Goal" backTo={returnTo} />
            <main className="max-w-md mx-auto px-4 py-10 flex flex-col gap-6">
                <div className="text-center">
                    <p className="text-4xl mb-3">🎯</p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        What's your main goal?
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
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
                                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700",
                            ].join(" ")}
                        >
                            <span className="text-2xl mt-0.5 shrink-0">{goal.icon}</span>
                            <div className="flex-1 min-w-0">
                                <p className={`font-semibold text-sm ${selected === goal.id ? "text-indigo-700 dark:text-indigo-300" : "text-gray-900 dark:text-gray-100"}`}>
                                    {goal.label}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                    {goal.description}
                                </p>
                            </div>
                            <div className={[
                                "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                                selected === goal.id
                                    ? "border-indigo-500 bg-indigo-500"
                                    : "border-gray-300 dark:border-gray-600",
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
