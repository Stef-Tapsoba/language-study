// pages/UnitPage.tsx — Guided lesson unit with grammar, vocab, and verb card activities
import { useState, useMemo, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { isUnitUnlocked } from "../store/progress"
import { useProgress } from "../context/ProgressContext"
import { useStatsStore } from "../store/useStatsStore"
import { confirmUnitMastery } from "../store/actions"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { QuizCard } from "../components/QuizCard"
import { SpeakButton } from "../components/SpeakButton"
import { LocalizedExplanation } from "../components/LocalizedExplanation"
import { VocabTooltip } from "../components/VocabTooltip"
import { GrammarLesson, LessonUnit, VocabItem, Verb, CEFRLevel, CultureEpisode } from "../types"
import { getUI, fmt, UIStrings } from "../i18n"
import { resolvePrimary } from "../utils/localizedText"
import { useVocabTooltip } from "../hooks/useVocabTooltip"
import type { VocabClickHandler } from "../utils/renderExplanation"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

type Tab = "grammar" | "vocab" | "verbs" | "test"

const CULTURE_CATEGORY_EMOJI: Record<string, string> = {
    food: "🍽️",
    customs: "🤝",
    history: "🏛️",
    geography: "🗺️",
    arts: "🎨",
    "daily-life": "🏡",
    festivals: "🎉",
    "language-note": "💬",
}

// ---------------------------------------------------------------------------
// GrammarAccordion
// ---------------------------------------------------------------------------
function GrammarAccordion({ lesson, done, langId, level, ui, onComplete, onVocabClick }: Readonly<{
    lesson: GrammarLesson; done: boolean; langId: string; level: CEFRLevel; ui: UIStrings; onComplete: () => void
    onVocabClick: VocabClickHandler
}>) {
    const { markLessonComplete } = useProgress()
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={lesson.id} className={`border rounded-2xl px-5 ${done ? "border-green-300 bg-white dark:bg-gray-800" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`}>
                <AccordionTrigger className="py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                        <span className={`text-lg ${done ? "text-green-500" : "text-gray-300 dark:text-gray-600"}`}>{done ? "✓" : "○"}</span>
                        <span className="font-medium text-gray-900 dark:text-gray-100">{lesson.title}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-1">
                        <LocalizedExplanation text={lesson.explanation} level={level} langId={langId} className="mt-2"
                            inlineVocab={lesson.inlineVocab} onVocabClick={onVocabClick} />
                        <div className="mt-4 flex flex-col gap-3">
                            {lesson.examples.map((ex) => (
                                <div key={ex.native} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3">
                                    <div className="flex items-start gap-1">
                                        <p className="flex-1 font-medium text-gray-900 dark:text-gray-100">{ex.native}</p>
                                        <SpeakButton text={ex.speakText ?? ex.native} langId={langId} />
                                    </div>
                                    {ex.romanized && <p className="text-xs text-indigo-500 mt-0.5">{ex.romanized}</p>}
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{ex.translation}</p>
                                </div>
                            ))}
                        </div>
                        {!done && (
                            <button
                                onClick={() => { markLessonComplete(langId, lesson.id, "grammar"); onComplete() }}
                                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-2 text-sm transition-colors"
                            >
                                {ui.markComplete}
                            </button>
                        )}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

// ---------------------------------------------------------------------------
// VocabRow
// ---------------------------------------------------------------------------
function VocabRow({ item, done, langId, ui, onComplete }: Readonly<{
    item: VocabItem; done: boolean; langId: string; ui: UIStrings; onComplete: () => void
}>) {
    const { markLessonComplete } = useProgress()
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={item.id} className={`border rounded-2xl px-4 bg-white dark:bg-gray-800 ${done ? "border-green-300" : "border-gray-200 dark:border-gray-700 hover:border-indigo-300"}`}>
                <AccordionTrigger className="py-3 hover:no-underline">
                    <div className="flex items-center gap-3 w-full pr-2">
                        <span className={`text-base ${done ? "text-green-500" : "text-gray-300 dark:text-gray-600"}`}>{done ? "✓" : "○"}</span>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">{item.word}</span>
                                <SpeakButton text={item.word} langId={langId} />
                            </div>
                            {item.romanized && <span className="text-xs text-indigo-500">{item.romanized}</span>}
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-0.5">
                            <span className="text-sm text-gray-500 dark:text-gray-400 text-right">{item.translation}</span>
                            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full px-2 py-0.5">
                                {item.category}
                            </span>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-1">
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 mb-3">
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.example.native}</p>
                            {item.example.romanized && <p className="text-xs text-indigo-500 mt-0.5">{item.example.romanized}</p>}
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.example.translation}</p>
                        </div>
                        {!done && (
                            <button
                                onClick={() => { markLessonComplete(langId, item.id, "vocab"); onComplete() }}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-2 text-sm transition-colors"
                            >
                                {ui.markLearned}
                            </button>
                        )}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

// ---------------------------------------------------------------------------
// VerbCard
// ---------------------------------------------------------------------------
function VerbCard({ verb, langId }: Readonly<{ verb: Verb; langId: string }>) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={verb.id} className="border border-gray-200 dark:border-gray-700 rounded-2xl px-5 bg-white dark:bg-gray-800">
                <AccordionTrigger className="py-4 hover:no-underline">
                    <div className="flex items-center gap-3 w-full pr-2">
                        <div className="flex-1">
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{verb.infinitive}</span>
                            {verb.romanized && <span className="ml-2 text-xs text-indigo-500">{verb.romanized}</span>}
                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">— {verb.meaning}</span>
                        </div>
                        <SpeakButton text={verb.infinitive} langId={langId} />
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-1">
                        {verb.conjugations.map(conj => (
                            <div key={conj.tense} className="mt-4">
                                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">{conj.tense}</p>
                                <div className="rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                                    {conj.forms.map((f) => (
                                        <div key={f.pronoun} className="flex items-center px-4 py-2.5 text-sm odd:bg-white dark:odd:bg-gray-800 even:bg-gray-50 dark:even:bg-gray-700/30">
                                            <span className="text-gray-500 dark:text-gray-400 w-28 shrink-0">{f.pronoun}</span>
                                            <span className="font-medium text-gray-900 dark:text-gray-100">{f.form}</span>
                                            {f.romanized && <span className="ml-2 text-xs text-indigo-400">{f.romanized}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

// ---------------------------------------------------------------------------
// MistakeReview — collapsible wrong-answer list shown on the done screen
// ---------------------------------------------------------------------------
function MistakeReview({ missed }: Readonly<{ missed: MissedItem[] }>) {
    return (
        <Accordion type="single" collapsible className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
            <AccordionItem value="mistakes" className="border-0 px-5">
                <AccordionTrigger className="text-sm font-semibold text-gray-700 dark:text-gray-300 py-3 hover:no-underline">
                    Review mistakes ({missed.length})
                </AccordionTrigger>
                <AccordionContent>
                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                        {missed.map((m) => (
                            <div key={`${m.prompt}|${m.yourAnswer}`} className="py-3 text-left text-sm">
                                <p className="text-gray-500 dark:text-gray-400 mb-1">{m.prompt}</p>
                                <p className="text-green-700 font-medium">✓ {m.correct}</p>
                                <p className="text-red-500">✗ {m.yourAnswer}</p>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

// ---------------------------------------------------------------------------
// TestDoneScreen — result view after the quiz finishes
// ---------------------------------------------------------------------------
function TestDoneScreen({ score, total, passThreshold, missed, isMastered, didComplete,
    isLastUnit, nextUnit, level, ui, cultureEpisodes, onComplete, onReset, onBack,
    onNavigateNext, onNavigateLevelTest, onNavigateCulture }: Readonly<{
    score: number; total: number; passThreshold: number; missed: MissedItem[]
    isMastered: boolean; didComplete: boolean; isLastUnit: boolean; nextUnit: LessonUnit | null
    level: CEFRLevel; ui: UIStrings
    cultureEpisodes: CultureEpisode[]
    onComplete: () => void; onReset: () => void; onBack: () => void
    onNavigateNext: (id: string) => void; onNavigateLevelTest: () => void
    onNavigateCulture: (id: string) => void
}>) {
    const passed = score >= passThreshold
    return (
        <div className="flex flex-col items-center gap-6 py-8 max-w-sm mx-auto text-center">
            <div className="text-5xl">{passed ? "🏆" : "📚"}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {passed ? ui.unitComplete : ui.keepStudying}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
                {fmt(ui.youAnswered, { score, total })}{" "}
                ({Math.round((score / total) * 100)}%)
            </p>

            {missed.length > 0 && <MistakeReview missed={missed} />}

            {passed && (isMastered || didComplete) && cultureEpisodes.length > 0 && (
                <div className="w-full flex flex-col gap-3">
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide text-center">
                        {ui.cultureUnlockHeading}
                    </p>
                    {cultureEpisodes.map(ep => (
                        <button
                            key={ep.id}
                            onClick={() => onNavigateCulture(ep.id)}
                            className="w-full bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4
                                       flex items-start gap-3 text-left hover:bg-amber-100 transition-colors"
                        >
                            <span className="text-2xl leading-none mt-0.5" aria-hidden="true">
                                {CULTURE_CATEGORY_EMOJI[ep.category] ?? "🌍"}
                            </span>
                            <div className="flex flex-col gap-0.5 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                                    {ep.title.native}
                                </p>
                                <p className="text-xs text-amber-700 leading-snug line-clamp-2">
                                    {ep.subtitle}
                                </p>
                            </div>
                            <span className="ml-auto text-amber-400 text-sm self-center">→</span>
                        </button>
                    ))}
                </div>
            )}

            <div className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 flex flex-col gap-3">
                {passed && !isMastered && !didComplete && (
                    <button onClick={onComplete}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors">
                        {ui.markUnitComplete}
                    </button>
                )}
                {passed && (isMastered || didComplete) && (
                    <>
                        {isLastUnit && (
                            <button onClick={onNavigateLevelTest}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors">
                                Take the {level} Level Test →
                            </button>
                        )}
                        {!isLastUnit && nextUnit && (
                            <button onClick={() => onNavigateNext(nextUnit.id)}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors">
                                Next: {nextUnit.title} →
                            </button>
                        )}
                        <button onClick={onBack}
                            className="w-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-semibold rounded-xl py-2.5 text-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            {ui.backToDashboard}
                        </button>
                    </>
                )}
                {!passed && (
                    <>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            You need {passThreshold} correct to complete this unit. Review the content and try again.
                        </p>
                        <button onClick={onReset}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors">
                            {ui.tryAgain}
                        </button>
                        <button onClick={onBack}
                            className="w-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-semibold rounded-xl py-2.5 text-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            {ui.backToDashboard}
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// TestOutTab — quiz state machine; delegates phase rendering to sub-components
// ---------------------------------------------------------------------------
type QuizPhase = "start" | "playing" | "done"

interface MissedItem { prompt: string; correct: string; yourAnswer: string }

function TestOutTab({ unit, langId, isMastered, nextUnit, isLastUnit, ui, cultureEpisodes,
    onMastered, onBack, onNavigateNext, onNavigateLevelTest, onNavigateCulture }: Readonly<{
    unit: LessonUnit
    langId: string
    isMastered: boolean
    nextUnit: LessonUnit | null
    isLastUnit: boolean
    ui: UIStrings
    cultureEpisodes: CultureEpisode[]
    onMastered: () => void
    onBack: () => void
    onNavigateNext: (unitId: string) => void
    onNavigateLevelTest: () => void
    onNavigateCulture: (id: string) => void
}>) {
    const [phase, setPhase] = useState<QuizPhase>("start")
    const [qIdx, setQIdx] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [score, setScore] = useState(0)
    const [missed, setMissed] = useState<MissedItem[]>([])
    const [didComplete, setDidComplete] = useState(false)

    const questions = unit.testQuestions
    const passThreshold = Math.ceil(questions.length * 0.8)

    function handleSelect(opt: string) { setSelected(opt); setRevealed(true) }

    function handleNext() {
        const correct = selected === questions[qIdx].answer
        useStatsStore.getState().recordQuizAnswer(langId, correct)
        if (!correct && selected) {
            setMissed(m => [...m, { prompt: questions[qIdx].prompt, correct: questions[qIdx].answer, yourAnswer: selected }])
        }
        const newScore = score + (correct ? 1 : 0)
        if (qIdx + 1 >= questions.length) {
            setScore(newScore); setPhase("done")
        } else {
            setScore(newScore); setQIdx(i => i + 1); setSelected(null); setRevealed(false)
        }
    }

    function handleReset() {
        setQIdx(0); setScore(0); setSelected(null); setRevealed(false)
        setMissed([]); setDidComplete(false); setPhase("start")
    }

    function handleComplete() {
        confirmUnitMastery(langId, unit.id).catch(console.error)
        onMastered()
        setDidComplete(true)
    }

    if (!questions.length) {
        return (
            <div className="text-center py-16 text-gray-400 dark:text-gray-500">
                <p className="text-4xl mb-3">🚧</p>
                <p className="font-medium">Test not yet available for this unit.</p>
            </div>
        )
    }

    if (phase === "start") {
        return (
            <div className="flex flex-col items-center gap-6 py-8 max-w-sm mx-auto text-center">
                {isMastered && (
                    <div className="w-full bg-green-50 border border-green-200 rounded-2xl px-4 py-3 flex items-center gap-2 text-green-700">
                        <span className="text-lg">✓</span>
                        <span className="text-sm font-medium">{ui.alreadyCompleted}</span>
                    </div>
                )}
                <div className="text-5xl">📝</div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{ui.testOutTitle}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {questions.length} question{questions.length === 1 ? "" : "s"} &nbsp;·&nbsp;
                        {fmt(ui.levelTestDesc, { pass: passThreshold, total: questions.length, next: "" }).split(" to ")[0]}
                    </p>
                </div>
                <button
                    onClick={() => setPhase("playing")}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 text-sm transition-colors"
                >
                    {isMastered ? ui.retakeTest : ui.startTest}
                </button>
            </div>
        )
    }

    if (phase === "done") {
        return (
            <TestDoneScreen
                score={score} total={questions.length} passThreshold={passThreshold} missed={missed}
                isMastered={isMastered} didComplete={didComplete} isLastUnit={isLastUnit} nextUnit={nextUnit}
                level={unit.level} ui={ui}
                cultureEpisodes={cultureEpisodes}
                onComplete={handleComplete} onReset={handleReset} onBack={onBack}
                onNavigateNext={onNavigateNext} onNavigateLevelTest={onNavigateLevelTest}
                onNavigateCulture={onNavigateCulture}
            />
        )
    }

    // phase === "playing"
    const q = questions[qIdx]
    return (
        <div className="flex flex-col items-center gap-5 max-w-xl mx-auto">
            <div className="w-full flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{fmt(ui.questionOf, { n: qIdx + 1, total: questions.length })}</span>
                <span className="font-medium">{ui.scoreLabel}: {score}</span>
            </div>
            <div className="w-full flex gap-1">
                {questions.map((q, i) => {
                    let dotCls = "h-1.5 flex-1 rounded-full transition-colors "
                    if (i < qIdx) dotCls += "bg-indigo-500"
                    else if (i === qIdx) dotCls += "bg-indigo-300"
                    else dotCls += "bg-gray-200 dark:bg-gray-600"
                    return <div key={q.id} className={dotCls} />
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
                <button
                    onClick={handleNext}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 transition-colors"
                >
                    {qIdx + 1 >= questions.length ? ui.seeResults : ui.nextQuestion}
                </button>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// UnitPage
// ---------------------------------------------------------------------------
export function UnitPage() {
    const { langId = "", unitId = "" } = useParams()
    const navigate = useNavigate()

    const language = getLanguage(langId)
    const mod = getModule(langId)
    const { level: getLevel, completed: getCompleted, mastered: getMastered } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)
    const completed = getCompleted(langId)
    const mastered = getMastered(langId)
    const { activeWord, handleVocabClick, dismissTooltip } = useVocabTooltip(langId)

    const units = mod?.units ?? []
    const unit = units.find(u => u.id === unitId)

    const grammar = useMemo(() => mod?.grammar.filter(g => unit?.grammarIds.includes(g.id)) ?? [], [mod, unit])
    const vocab = useMemo(() => mod?.vocab.filter(v => unit?.vocabIds.includes(v.id)) ?? [], [mod, unit])
    const verbs = useMemo(() => mod?.verbs.filter(v => unit?.verbIds.includes(v.id)) ?? [], [mod, unit])
    const cultureEpisodes = useMemo(() =>
        mod?.cultureEpisodes?.filter(c => unit?.cultureIds?.includes(c.id)) ?? [],
    [mod, unit])

    const tabs = useMemo<{ id: Tab; label: string; count?: number }[]>(() => [
        ...(grammar.length > 0 ? [{ id: "grammar" as Tab, label: ui.unitTabGrammar, count: grammar.length }] : []),
        ...(vocab.length > 0 ? [{ id: "vocab" as Tab, label: ui.unitTabVocab, count: vocab.length }] : []),
        { id: "verbs" as Tab, label: ui.unitTabVerbs, count: verbs.length > 0 ? verbs.length : undefined },
        { id: "test" as Tab, label: ui.unitTabTest },
    ], [grammar, vocab, verbs, ui])

    function firstTab(): Tab {
        if (grammar.length > 0) return "grammar"
        if (vocab.length > 0) return "vocab"
        if (verbs.length > 0) return "verbs"
        return "test"
    }
    const [activeTab, setActiveTab] = useState<Tab>(firstTab)
    useEffect(() => { setActiveTab(firstTab()) }, [unitId])
    const [vocabFilter, setVocabFilter] = useState<"all" | "todo" | "done">("all")

    if (!language || !mod || !unit) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title="Unit" level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-400 dark:text-gray-500">
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="font-medium">Unit not found.</p>
                </main>
            </div>
        )
    }

    const isMastered = mastered.includes(unit.id)
    const levelUnits = units.filter(u => u.level === unit.level).sort((a, b) => a.order - b.order)
    const isLocked = !isUnitUnlocked(langId, unit.id, levelUnits)
    const totalUnits = levelUnits.length
    const isLastUnit = unit.order === totalUnits
    const nextUnit = levelUnits.find(u => u.order === unit.order + 1) ?? null

    if (isLocked) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title={unit.title} level={unit.level} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-16 text-center">
                    <p className="text-5xl mb-4">🔒</p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Unit locked</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">Complete the previous unit to unlock this one.</p>
                    <button
                        onClick={() => navigate(`/learn/${langId}`)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl px-6 py-2.5 text-sm transition-colors"
                    >
                        {ui.backToDashboard}
                    </button>
                </main>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={unit.title} level={unit.level} backTo={`/learn/${langId}`}
                breadcrumb={`${language.name} › Path`} />

            <main className="max-w-3xl mx-auto px-4 py-6">
                {/* Unit header */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 mb-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                                    Unit {unit.order} of {totalUnits}
                                </span>
                                <LevelBadge level={unit.level} />
                                {isMastered && (
                                    <span className="text-xs font-semibold text-green-700 bg-green-100 rounded-full px-2 py-0.5">
                                        ✓ Completed
                                    </span>
                                )}
                            </div>
                            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{unit.title}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{resolvePrimary(unit.description, level)}</p>
                        </div>
                    </div>
                </div>

                {/* Tab bar */}
                <Tabs value={activeTab} onValueChange={v => setActiveTab(v as Tab)} className="mb-0">
                    <TabsList className="w-full h-auto p-1 bg-gray-100 dark:bg-gray-700 rounded-xl mb-6">
                        {tabs.map(tab => {
                            const TAB_COLORS: Record<Tab, string> = {
                                grammar: "data-[state=active]:bg-green-500  data-[state=active]:text-white",
                                vocab:   "data-[state=active]:bg-amber-400  data-[state=active]:text-white",
                                verbs:   "data-[state=active]:bg-red-400    data-[state=active]:text-white",
                                test:    "data-[state=active]:bg-violet-500 data-[state=active]:text-white",
                            }
                            return (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.id}
                                    className={`flex-1 py-2 px-3 text-sm ${TAB_COLORS[tab.id]}`}
                                >
                                    {tab.label}
                                    {tab.count !== undefined && (
                                        <span className="ml-1 text-xs text-current opacity-60">
                                            {tab.count}
                                        </span>
                                    )}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>

                    {/* Tab content */}
                    <TabsContent value="grammar" className="tab-fade">
                        <div className="flex flex-col gap-3">
                            {grammar.map(lesson => (
                                <GrammarAccordion
                                    key={lesson.id}
                                    lesson={lesson}
                                    done={completed.includes(lesson.id)}
                                    langId={langId}
                                    level={level}
                                    ui={ui}
                                    onComplete={() => {}}
                                    onVocabClick={handleVocabClick}
                                />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="vocab" className="tab-fade">
                        {(() => {
                            const vocabDone = vocab.filter(v => completed.includes(v.id)).length
                            let filtered = vocab
                            if (vocabFilter === "done") filtered = vocab.filter(v => completed.includes(v.id))
                            else if (vocabFilter === "todo") filtered = vocab.filter(v => !completed.includes(v.id))
                            return (
                                <div className="flex flex-col gap-3">
                                    {/* Progress + filter */}
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex-1 flex items-center gap-2">
                                            <div className="flex-1 h-1.5 bg-gray-200/70 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-amber-300 to-amber-500 rounded-full transition-[width] duration-700 ease-out"
                                                    style={{ width: `${vocab.length ? vocabDone / vocab.length * 100 : 0}%` }} />
                                            </div>
                                            <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{vocabDone}/{vocab.length}</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {(["all", "todo", "done"] as const).map(f => (
                                                <button key={f} onClick={() => setVocabFilter(f)}
                                                    className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${vocabFilter === f ? "bg-amber-100 text-amber-700" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`}>
                                                    {f === "all" ? `All ${vocab.length}` : null}
                                                    {f === "todo" ? `To do ${vocab.length - vocabDone}` : null}
                                                    {f === "done" ? `Done ${vocabDone}` : null}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    {/* List */}
                                    <div className="flex flex-col gap-2">
                                        {filtered.map(item => (
                                            <VocabRow
                                                key={item.id}
                                                item={item}
                                                done={completed.includes(item.id)}
                                                langId={langId}
                                                ui={ui}
                                                onComplete={() => {}}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )
                        })()}
                    </TabsContent>

                    <TabsContent value="verbs" className="tab-fade">
                        {verbs.length > 0 ? (
                            <div className="flex flex-col gap-3">
                                {verbs.map(verb => (
                                    <VerbCard key={verb.id} verb={verb} langId={langId} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 text-gray-400 dark:text-gray-500">
                                <p className="text-4xl mb-3">🔤</p>
                                <p className="font-medium text-gray-500 dark:text-gray-400">No verbs in this unit.</p>
                                <p className="text-sm mt-1">Verbs are introduced in a later unit.</p>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="test" className="tab-fade">
                        <TestOutTab
                            unit={unit}
                            langId={langId}
                            isMastered={isMastered}
                            nextUnit={nextUnit}
                            isLastUnit={isLastUnit}
                            ui={ui}
                            cultureEpisodes={cultureEpisodes}
                            onMastered={() => {}}
                            onBack={() => navigate(`/learn/${langId}`)}
                            onNavigateNext={(id) => navigate(`/learn/${langId}/units/${id}`, { replace: true })}
                            onNavigateLevelTest={() => navigate(`/learn/${langId}/level-test`)}
                            onNavigateCulture={(id) => navigate(`/learn/${langId}/culture?episode=${id}`)}
                        />
                    </TabsContent>
                </Tabs>
            </main>
            <VocabTooltip activeWord={activeWord} onDismiss={dismissTooltip} />
        </div>
    )
}
