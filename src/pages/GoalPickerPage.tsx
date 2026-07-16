// pages/GoalPickerPage.tsx — Learning goal selection (two steps)
//
// Shown after the placement test and reachable from the Dashboard "Goal" link.
// Step 1: topic goal — sorts relevant units to the top of the Path tab.
// Step 2 (optional, skippable): time-bound target — target CEFR level, an
// optional date, and optional minutes/day. Drives the honest trajectory
// display (GoalProgressCard); blueprint §2.3.

import { useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { Button } from "../components/ui/button"
import { getGoal, setGoal } from "../store/preferences"
import { GOAL_LIST, type GoalId } from "../data/goalConfig"
import { useProgressStore, progressHelpers } from "../store/useProgressStore"
import { CEFRLevel, CEFR_LEVELS, LEVEL_LABELS } from "../types"

const MINUTE_OPTIONS = [10, 20, 30, 45]

export function GoalPickerPage() {
    const navigate = useNavigate()
    const { langId = "" } = useParams()
    const [searchParams] = useSearchParams()
    const returnTo = searchParams.get("returnTo") ?? "/home"

    const progress = useProgressStore(s => s.progress)
    const { level: getLevel, goalPlan } = progressHelpers(progress)
    const setGoalPlan = useProgressStore(s => s.setGoalPlan)
    const currentLevel = getLevel(langId)
    const existingPlan = goalPlan(langId)

    const [step, setStep] = useState<1 | 2>(1)
    const [selected, setSelected] = useState<GoalId>(() => getGoal())

    // Step 2 state — pre-filled from an existing plan when editing
    const [targetLevel, setTargetLevel] = useState<CEFRLevel | null>(existingPlan?.targetLevel ?? null)
    const [targetDate, setTargetDate] = useState<string>(existingPlan?.targetDate ?? "")
    const [minutes, setMinutes] = useState<number | null>(existingPlan?.minutesPerDay ?? null)

    // Levels the user can still target: current level and above
    const targetableLevels = CEFR_LEVELS.slice(CEFR_LEVELS.indexOf(currentLevel))

    function handleStep1() {
        setGoal(selected)
        setStep(2)
    }

    async function handleFinish(withTarget: boolean) {
        if (withTarget && targetLevel) {
            await setGoalPlan(langId, {
                targetLevel,
                ...(targetDate ? { targetDate } : {}),
                ...(minutes ? { minutesPerDay: minutes } : {}),
            })
        } else if (!withTarget && existingPlan) {
            // Explicit skip while a plan exists → leave the existing plan untouched
        }
        navigate(returnTo, { replace: true })
    }

    const todayYmd = new Date().toISOString().slice(0, 10)

    if (step === 2) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Set a Target" backTo={returnTo} />
                <main className="max-w-md mx-auto px-4 py-10 flex flex-col gap-6">
                    <div className="text-center">
                        <p className="text-4xl mb-3">📅</p>
                        <h2 className="text-xl font-bold text-text-pri mb-1">Set a target — optional</h2>
                        <p className="text-sm text-text-sec">
                            A level and a date let the app tell you honestly whether you're on
                            track. You can change or remove it any time.
                        </p>
                    </div>

                    {/* Target level */}
                    <div>
                        <p className="text-xs font-semibold text-text-sec uppercase tracking-wide mb-2">Target level</p>
                        <div className="flex gap-2 flex-wrap">
                            {targetableLevels.map(l => (
                                <button
                                    key={l}
                                    onClick={() => setTargetLevel(l === targetLevel ? null : l)}
                                    className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-colors ${
                                        targetLevel === l
                                            ? "border-grammar bg-grammar-surface text-grammar"
                                            : "border-border-default bg-surface-card text-text-sec hover:border-grammar"
                                    }`}
                                >
                                    {l}
                                    <span className="block text-[10px] font-normal">{LEVEL_LABELS[l]}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Target date */}
                    <div>
                        <p className="text-xs font-semibold text-text-sec uppercase tracking-wide mb-2">
                            By when? <span className="normal-case font-normal text-text-ter">(optional — enables on-track tracking)</span>
                        </p>
                        <input
                            type="date"
                            aria-label="Target date"
                            value={targetDate}
                            min={todayYmd}
                            onChange={e => setTargetDate(e.target.value)}
                            className="w-full rounded-xl border-2 border-border-default bg-surface-card px-4 py-3 text-sm text-text-pri focus:outline-none focus:border-grammar"
                        />
                    </div>

                    {/* Minutes per day */}
                    <div>
                        <p className="text-xs font-semibold text-text-sec uppercase tracking-wide mb-2">
                            Time per day? <span className="normal-case font-normal text-text-ter">(optional)</span>
                        </p>
                        <div className="flex gap-2">
                            {MINUTE_OPTIONS.map(m => (
                                <button
                                    key={m}
                                    onClick={() => setMinutes(m === minutes ? null : m)}
                                    className={`flex-1 px-3 py-2 rounded-xl border-2 text-sm font-medium transition-colors ${
                                        minutes === m
                                            ? "border-grammar bg-grammar-surface text-grammar"
                                            : "border-border-default bg-surface-card text-text-sec hover:border-grammar"
                                    }`}
                                >
                                    {m} min
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button
                            onClick={() => handleFinish(true)}
                            disabled={!targetLevel}
                            className="w-full rounded-xl py-3 font-semibold"
                        >
                            Set target →
                        </Button>
                        <Button variant="ghost" onClick={() => handleFinish(false)} className="w-full rounded-xl py-2 text-sm text-text-sec">
                            Skip for now
                        </Button>
                        {existingPlan && (
                            <Button
                                variant="ghost"
                                onClick={async () => { await setGoalPlan(langId, null); navigate(returnTo, { replace: true }) }}
                                className="w-full rounded-xl py-2 text-sm text-verbs"
                            >
                                Remove current target
                            </Button>
                        )}
                    </div>
                </main>
            </div>
        )
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

                <Button onClick={handleStep1} className="w-full rounded-xl py-3 font-semibold">
                    Continue →
                </Button>
            </main>
        </div>
    )
}
