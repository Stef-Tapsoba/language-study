// pages/PlacementPage.tsx — CEFR placement quiz to determine the user's starting level
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getPlacementQuestions } from "../data/repo"
import { useProgress } from "../context/ProgressContext"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { LevelBadge } from "../components/LevelBadge"
import { CEFRLevel, CEFR_LEVELS } from "../types"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { isGoalSet } from "../store/preferences"

type Tab = "test" | "manual"

function scoreToLevel(score: number): CEFRLevel {
    if (score >= 9) return "B2"
    if (score >= 7) return "B1"
    if (score >= 5) return "A2"
    return "A1"
}

export function PlacementPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const language = getLanguage(langId)
    const { setCurrentLevel } = useProgress()

    const [tab, setTab] = useState<Tab>("test")
    const [introSeen, setIntroSeen] = useState(false)
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [suggested, setSuggested] = useState<CEFRLevel>("A1")

    if (!language) return null

    const questions = getPlacementQuestions(langId)

    function handleSelect(opt: string) {
        setSelected(opt)
        setRevealed(true)
    }

    function handleNext() {
        const newScore = score + (selected === questions[current].answer ? 1 : 0)
        if (current + 1 >= questions.length) {
            const level = scoreToLevel(newScore)
            setSuggested(level)
            setScore(newScore)
            setDone(true)
        } else {
            setScore(newScore)
            setCurrent(c => c + 1)
            setSelected(null)
            setRevealed(false)
        }
    }

    function confirmLevel(level: CEFRLevel) {
        setCurrentLevel(langId, level)
        // First-time users: route through goal picker before hitting the dashboard.
        // Returning users who are changing level skip the picker (goal already set).
        if (!isGoalSet()) {
            navigate(`/learn/${langId}/goal?returnTo=/learn/${langId}`, { replace: true })
        } else {
            navigate(`/learn/${langId}`)
        }
    }

    // Pre-intro screen — shown before the first question of the placement test
    if (!introSeen && tab === "test") {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title={`${language.name} — Placement Test`} backTo="/home" />
                <main className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-5 text-center">
                    <p className="text-5xl">🎯</p>
                    <h2 className="text-xl font-bold text-text-pri">Find your level</h2>
                    <p className="text-text-sec text-sm max-w-sm">
                        Starting at the right level keeps lessons challenging without being overwhelming — and it means you won't waste time on content you already know.
                    </p>
                    <ul className="text-sm text-text-sec space-y-1.5 text-left w-full max-w-xs">
                        <li className="flex items-start gap-2"><span className="text-indigo-400 mt-px">✓</span>{questions.length} quick multiple-choice questions</li>
                        <li className="flex items-start gap-2"><span className="text-indigo-400 mt-px">✓</span>No penalty for wrong answers — just answer honestly</li>
                        <li className="flex items-start gap-2"><span className="text-indigo-400 mt-px">✓</span>You can override the suggestion or change level any time</li>
                    </ul>
                    <div className="flex flex-col gap-3 w-full max-w-xs mt-2">
                        <Button onClick={() => setIntroSeen(true)} className="w-full rounded-xl py-3 text-sm font-semibold">
                            Start placement test
                        </Button>
                        <Button variant="outline" onClick={() => setTab("manual")} className="w-full rounded-xl py-3 text-sm font-semibold">
                            I already know my level
                        </Button>
                    </div>
                </main>
            </div>
        )
    }

    if (done) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title={language.name} backTo="/home" />
                <main className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">🎉</div>
                    <h2 className="text-2xl font-bold text-text-pri">Placement complete!</h2>
                    <p className="text-text-sec">
                        You answered <strong>{score}</strong> out of <strong>{questions.length}</strong> correctly.
                    </p>
                    <div className="bg-surface-card rounded-2xl border border-border-default p-5 w-full">
                        <p className="text-sm text-text-sec mb-3">Suggested level</p>
                        <div className="flex justify-center mb-4">
                            <LevelBadge level={suggested} />
                        </div>
                        <Button onClick={() => confirmLevel(suggested)} className="w-full rounded-xl py-2.5 text-sm font-semibold mb-3">
                            Start at {suggested}
                        </Button>
                        <p className="text-xs text-text-ter mb-2">
                            Not quite right? You know your level better than any test — pick freely:
                        </p>
                        <div className="flex justify-center gap-2 flex-wrap">
                            {CEFR_LEVELS.map(l => (
                                <button
                                    key={l}
                                    onClick={() => confirmLevel(l)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors
                                        ${l === suggested
                                            ? "border-grammar bg-grammar-surface text-grammar"
                                            : "border-border-default text-text-sec hover:border-grammar"}`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-text-ter mt-3">You can also change your level any time from the dashboard.</p>
                    </div>
                </main>
            </div>
        )
    }

    const q = questions[current]

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title={`${language.name} — Placement Test`} backTo="/home" />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                <Tabs value={tab} onValueChange={v => setTab(v as Tab)} className="w-full">
                    <TabsList className="w-full mb-6">
                        <TabsTrigger value="test" className="flex-1">Placement Test</TabsTrigger>
                        <TabsTrigger value="manual" className="flex-1">Set Manually</TabsTrigger>
                    </TabsList>

                    <TabsContent value="test" className="flex flex-col items-center gap-6">
                        <div className="w-full flex items-center justify-between text-sm text-text-sec">
                            <span>Question {current + 1} of {questions.length}</span>
                            <Button variant="link" onClick={() => setTab("manual")} className="p-0 h-auto text-sm text-indigo-600 dark:text-indigo-400">
                                Set level manually
                            </Button>
                        </div>

                        {/* Progress strip */}
                        <div className="w-full flex gap-1">
                            {questions.map((question, i) => {
                                let cls = "h-1.5 flex-1 rounded-full transition-colors "
                                if (i < current) cls += "bg-grammar"
                                else if (i === current) cls += "bg-grammar opacity-40"
                                else cls += "bg-border-default"
                                return <div key={question.id} className={cls} />
                            })}
                        </div>

                        <QuizCard
                            question={q.prompt}
                            options={q.options}
                            selected={selected}
                            correct={revealed ? q.answer : null}
                            onSelect={handleSelect}
                        />

                        {revealed && (
                            <Button onClick={handleNext} className="w-full max-w-xl rounded-xl py-3 font-semibold">
                                {current + 1 >= questions.length ? "See results" : "Next question"}
                            </Button>
                        )}
                    </TabsContent>

                    <TabsContent value="manual">
                        <div className="bg-surface-card rounded-2xl border border-border-default p-6 w-full">
                            <h2 className="font-semibold text-text-pri mb-2">Choose your level</h2>
                            <p className="text-sm text-text-sec mb-5">
                                Pick the level that best matches where you are now. You can change it any time.
                            </p>
                            <div className="flex flex-col gap-3">
                                {CEFR_LEVELS.map(l => (
                                    <button
                                        key={l}
                                        onClick={() => confirmLevel(l)}
                                        className="border border-border-default rounded-xl px-4 py-3 text-left hover:border-grammar hover:bg-grammar-surface transition-colors"
                                    >
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-text-pri">{l}</span>
                                            <span className="text-sm font-medium text-text-sec">
                                                {l === "A1" && "Beginner"}
                                                {l === "A2" && "Elementary"}
                                                {l === "B1" && "Intermediate"}
                                                {l === "B2" && "Upper Intermediate"}
                                                {l === "C1" && "Advanced"}
                                            </span>
                                        </div>
                                        <p className="text-xs text-text-ter mt-0.5">
                                            {l === "A1" && "No prior knowledge — start from the very basics."}
                                            {l === "A2" && "Know greetings and simple phrases; can handle basic everyday situations."}
                                            {l === "B1" && "Can hold simple conversations on familiar topics; understand main points of clear speech."}
                                            {l === "B2" && "Comfortable with complex topics; can converse fluently with native speakers."}
                                            {l === "C1" && "Near-fluent; can express ideas spontaneously with minimal effort."}
                                        </p>
                                    </button>
                                ))}
                            </div>
                            <Button variant="link" onClick={() => setTab("test")} className="mt-4 p-0 h-auto text-sm text-indigo-600 dark:text-indigo-400">
                                Not sure? Take the placement test
                            </Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}
