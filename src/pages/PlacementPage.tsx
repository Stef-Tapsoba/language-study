// pages/PlacementPage.tsx — CEFR placement quiz to determine the user's starting level
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getPlacementQuestions } from "../data/repo"
import { useProgressStore, progressHelpers } from "../store/useProgressStore"
import { NavBar } from "../components/NavBar"
import { QuizCard } from "../components/QuizCard"
import { LevelBadge } from "../components/LevelBadge"
import { CEFRLevel, CEFR_LEVELS } from "../types"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { isGoalSet } from "../store/preferences"
import { evaluatePlacement, IDK_ANSWER } from "../domain/placement"

type Tab = "test" | "manual"

export function PlacementPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const language = getLanguage(langId)
    const progress = useProgressStore(s => s.progress)
    const { startedLanguages } = progressHelpers(progress)
    const setCurrentLevel = useProgressStore(s => s.setCurrentLevel)

    const [tab, setTab] = useState<Tab>("test")
    const [introSeen, setIntroSeen] = useState(false)
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)

    // Answers keyed by question id — evaluated incrementally by evaluatePlacement()
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})

    const [done, setDone] = useState(false)
    const [suggested, setSuggested] = useState<CEFRLevel>("A1")

    if (!language) return null

    const questions = getPlacementQuestions(langId)

    function handleSelect(opt: string) {
        setSelected(opt)
        setRevealed(true)
    }

    function handleNext() {
        const q = questions[current]

        // Save the user's answer
        const updatedAnswers = { ...userAnswers, [q.id]: selected! }
        setUserAnswers(updatedAnswers)

        // Early exit: finish as soon as the outcome is decided — no point asking
        // harder questions once a level's threshold is unreachable.
        const result = evaluatePlacement(questions, updatedAnswers)
        if (result.complete || current + 1 >= questions.length) {
            setSuggested(result.complete ? result.level : "A1")
            setDone(true)
        } else {
            setCurrent(c => c + 1)
            setSelected(null)
            setRevealed(false)
        }
    }

    function confirmLevel(level: CEFRLevel) {
        const isNewLanguage = !startedLanguages.includes(langId)
        setCurrentLevel(langId, level)
        // Always show goal picker for a new language (even if a goal was previously set
        // for another language). First-time users also route through it.
        if (!isGoalSet() || isNewLanguage) {
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
                        <li className="flex items-start gap-2"><span className="text-indigo-400 mt-px">✓</span>Up to {questions.length} quick multiple-choice questions — it ends early once your level is clear</li>
                        <li className="flex items-start gap-2"><span className="text-indigo-400 mt-px">✓</span>Not sure? Pick "I don't know" — guessing right can place you too high</li>
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
        // Flat score for the UI only — denominator is questions actually asked,
        // since early exit can finish the test before all questions are shown.
        const totalAnswered = Object.keys(userAnswers).length
        const totalCorrect = questions.filter(q => userAnswers[q.id] === q.answer).length

        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title={language.name} backTo="/home" />
                <main className="max-w-xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">🎉</div>
                    <h2 className="text-2xl font-bold text-text-pri">Placement complete!</h2>
                    <p className="text-text-sec">
                        You answered <strong>{totalCorrect}</strong> out of <strong>{totalAnswered}</strong> correctly.
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

                        {/* Honest opt-out — a lucky guess places you too high, so make
                            "I don't know" cheaper than guessing. Counts as incorrect. */}
                        {!revealed && (
                            <Button
                                variant="outline"
                                onClick={() => handleSelect(IDK_ANSWER)}
                                className="w-full max-w-xl rounded-xl py-3 text-sm font-medium text-text-sec"
                            >
                                I don't know
                            </Button>
                        )}

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