// pages/UnitPage.tsx — Guided lesson unit with grammar, vocab, and verb card activities
import { useState, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel, getCompletedLessons, markLessonComplete, getMasteredUnits, masterUnit, isUnitUnlocked } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { QuizCard } from "../components/QuizCard"
import { SpeakButton } from "../components/SpeakButton"
import { LocalizedExplanation } from "../components/LocalizedExplanation"
import { GrammarLesson, LessonUnit, VocabItem, Verb, CEFRLevel } from "../types"
import { getUI, fmt, UIStrings } from "../i18n"
import { resolvePrimary } from "../utils/localizedText"

type Tab = "grammar" | "vocab" | "verbs" | "test"

// ---------------------------------------------------------------------------
// GrammarAccordion
// ---------------------------------------------------------------------------
function GrammarAccordion({ lesson, done, langId, level, ui, onComplete }: Readonly<{
    lesson: GrammarLesson; done: boolean; langId: string; level: CEFRLevel; ui: UIStrings; onComplete: () => void
}>) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`bg-white border rounded-2xl overflow-hidden ${done ? "border-green-300" : "border-gray-200"}`}>
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full px-5 py-4 flex items-center gap-3 text-left"
            >
                <span className={`text-lg ${done ? "text-green-500" : "text-gray-300"}`}>{done ? "✓" : "○"}</span>
                <span className="flex-1 font-medium text-gray-900">{lesson.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="px-5 pb-5 border-t border-gray-100">
                    <LocalizedExplanation text={lesson.explanation} level={level} langId={langId} className="mt-4" />
                    <div className="mt-4 flex flex-col gap-3">
                        {lesson.examples.map((ex) => (
                            <div key={ex.native} className="bg-gray-50 rounded-xl p-3">
                                <div className="flex items-start gap-1">
                                    <p className="flex-1 font-medium text-gray-900">{ex.native}</p>
                                    <SpeakButton text={ex.native} langId={langId} />
                                </div>
                                {ex.romanized && <p className="text-xs text-indigo-500 mt-0.5">{ex.romanized}</p>}
                                <p className="text-sm text-gray-500 mt-0.5">{ex.translation}</p>
                            </div>
                        ))}
                    </div>
                    {!done && (
                        <button
                            onClick={() => { markLessonComplete(langId, lesson.id); onComplete() }}
                            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-2 text-sm transition-colors"
                        >
                            {ui.markComplete}
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// VocabRow
// ---------------------------------------------------------------------------
function VocabRow({ item, done, langId, ui, onComplete }: Readonly<{
    item: VocabItem; done: boolean; langId: string; ui: UIStrings; onComplete: () => void
}>) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`bg-white border rounded-2xl overflow-hidden ${done ? "border-green-300" : "border-gray-200 hover:border-indigo-300"}`}>
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full px-4 py-3 flex items-center gap-3 text-left"
            >
                <span className={`text-base ${done ? "text-green-500" : "text-gray-300"}`}>{done ? "✓" : "○"}</span>
                <div className="flex-1 min-w-0">
                    <span className="font-semibold text-gray-900">{item.word}</span>
                    {item.romanized && <span className="ml-2 text-xs text-indigo-500">{item.romanized}</span>}
                </div>
                <SpeakButton text={item.word} langId={langId} />
                <span className="text-sm text-gray-500 shrink-0">{item.translation}</span>
                <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 shrink-0 hidden sm:block">
                    {item.category}
                </span>
            </button>
            {open && (
                <div className="px-4 pb-4 border-t border-gray-100 pt-3">
                    <div className="bg-gray-50 rounded-xl p-3 mb-3">
                        <p className="text-sm font-medium text-gray-800">{item.example.native}</p>
                        {item.example.romanized && <p className="text-xs text-indigo-500 mt-0.5">{item.example.romanized}</p>}
                        <p className="text-xs text-gray-500 mt-1">{item.example.translation}</p>
                    </div>
                    {!done && (
                        <button
                            onClick={() => { markLessonComplete(langId, item.id); onComplete() }}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-2 text-sm transition-colors"
                        >
                            {ui.markLearned}
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// VerbCard
// ---------------------------------------------------------------------------
function VerbCard({ verb, langId }: Readonly<{ verb: Verb; langId: string }>) {
    const [open, setOpen] = useState(false)
    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full px-5 py-4 flex items-center gap-3 text-left"
            >
                <div className="flex-1">
                    <span className="font-semibold text-gray-900">{verb.infinitive}</span>
                    {verb.romanized && <span className="ml-2 text-xs text-indigo-500">{verb.romanized}</span>}
                    <span className="ml-2 text-sm text-gray-500">— {verb.meaning}</span>
                </div>
                <SpeakButton text={verb.infinitive} langId={langId} />
                <svg xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${open ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="px-5 pb-5 border-t border-gray-100">
                    {verb.conjugations.map(conj => (
                        <div key={conj.tense} className="mt-4">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">{conj.tense}</p>
                            <div className="rounded-xl border border-gray-100 overflow-hidden">
                                {conj.forms.map((f) => (
                                    <div key={f.pronoun} className="flex items-center px-4 py-2.5 text-sm odd:bg-white even:bg-gray-50">
                                        <span className="text-gray-500 w-28 shrink-0">{f.pronoun}</span>
                                        <span className="font-medium text-gray-900">{f.form}</span>
                                        {f.romanized && <span className="ml-2 text-xs text-indigo-400">{f.romanized}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// TestOutTab — encapsulates all quiz state and phase rendering
// ---------------------------------------------------------------------------
type QuizPhase = "start" | "playing" | "done"

function TestOutTab({ unit, langId, isMastered, ui, onMastered, onBack }: Readonly<{
    unit: LessonUnit
    langId: string
    isMastered: boolean
    ui: UIStrings
    onMastered: () => void
    onBack: () => void
}>) {
    const [phase, setPhase] = useState<QuizPhase>("start")
    const [qIdx, setQIdx] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [score, setScore] = useState(0)

    const questions = unit.testQuestions
    const passThreshold = Math.ceil(questions.length * 0.8)

    function handleSelect(opt: string) {
        setSelected(opt)
        setRevealed(true)
    }

    function handleNext() {
        const newScore = score + (selected === questions[qIdx].answer ? 1 : 0)
        if (qIdx + 1 >= questions.length) {
            setScore(newScore)
            setPhase("done")
        } else {
            setScore(newScore)
            setQIdx(i => i + 1)
            setSelected(null)
            setRevealed(false)
        }
    }

    function handleReset() {
        setQIdx(0); setScore(0)
        setSelected(null); setRevealed(false)
        setPhase("start")
    }

    function handleComplete() {
        masterUnit(langId, unit.id)
        onMastered()
        onBack()
    }

    if (!questions.length) {
        return (
            <div className="text-center py-16 text-gray-400">
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
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{ui.testOutTitle}</h3>
                    <p className="text-sm text-gray-500">
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
        const passed = score >= passThreshold
        return (
            <div className="flex flex-col items-center gap-6 py-8 max-w-sm mx-auto text-center">
                <div className="text-5xl">{passed ? "🏆" : "📚"}</div>
                <h3 className="text-xl font-bold text-gray-900">
                    {passed ? ui.unitComplete : ui.keepStudying}
                </h3>
                <p className="text-gray-600">
                    {fmt(ui.youAnswered, { score, total: questions.length })}{" "}
                    ({Math.round((score / questions.length) * 100)}%)
                </p>
                <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
                    {passed && !isMastered && (
                        <button
                            onClick={handleComplete}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors"
                        >
                            {ui.markUnitComplete}
                        </button>
                    )}
                    {passed && isMastered && (
                        <button
                            onClick={onBack}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors"
                        >
                            {ui.backToDashboard}
                        </button>
                    )}
                    {!passed && (
                        <>
                            <p className="text-xs text-gray-500">
                                You need {passThreshold} correct to complete this unit. Review the content and try again.
                            </p>
                            <button
                                onClick={handleReset}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors"
                            >
                                {ui.tryAgain}
                            </button>
                            <button
                                onClick={onBack}
                                className="w-full border border-gray-200 text-gray-600 font-semibold rounded-xl py-2.5 text-sm transition-colors hover:bg-gray-50"
                            >
                                {ui.backToDashboard}
                            </button>
                        </>
                    )}
                </div>
            </div>
        )
    }

    // phase === "playing"
    const q = questions[qIdx]
    return (
        <div className="flex flex-col items-center gap-5 max-w-xl mx-auto">
            <div className="w-full flex items-center justify-between text-sm text-gray-500">
                <span>{fmt(ui.questionOf, { n: qIdx + 1, total: questions.length })}</span>
                <span className="font-medium">{ui.scoreLabel}: {score}</span>
            </div>
            <div className="w-full flex gap-1">
                {questions.map((q, i) => {
                    let dotCls = "h-1.5 flex-1 rounded-full transition-colors "
                    if (i < qIdx) dotCls += "bg-indigo-500"
                    else if (i === qIdx) dotCls += "bg-indigo-300"
                    else dotCls += "bg-gray-200"
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
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)

    const [completed, setCompleted] = useState(() => getCompletedLessons(langId))
    const [mastered, setMastered] = useState(() => getMasteredUnits(langId))

    const units = mod?.units ?? []
    const unit = units.find(u => u.id === unitId)

    const grammar = useMemo(() => mod?.grammar.filter(g => unit?.grammarIds.includes(g.id)) ?? [], [mod, unit])
    const vocab = useMemo(() => mod?.vocab.filter(v => unit?.vocabIds.includes(v.id)) ?? [], [mod, unit])
    const verbs = useMemo(() => mod?.verbs.filter(v => unit?.verbIds.includes(v.id)) ?? [], [mod, unit])

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
    const [vocabFilter, setVocabFilter] = useState<"all" | "todo" | "done">("all")

    if (!language || !mod || !unit) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title="Unit" level={level} backTo="back" />
                <main className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-400">
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="font-medium">Unit not found.</p>
                </main>
            </div>
        )
    }

    const isLocked = !isUnitUnlocked(langId, unit.id, units)
    const isMastered = mastered.includes(unit.id)
    const totalUnits = units.filter(u => u.level === unit.level).length

    if (isLocked) {
        return (
            <div className="min-h-screen bg-gray-50">
                <NavBar title={unit.title} level={unit.level} backTo="back" />
                <main className="max-w-xl mx-auto px-4 py-16 text-center">
                    <p className="text-5xl mb-4">🔒</p>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Unit locked</h2>
                    <p className="text-gray-500 mb-6">Complete the previous unit to unlock this one.</p>
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
        <div className="min-h-screen bg-gray-50">
            <NavBar title={unit.title} level={unit.level} backTo="back" />

            <main className="max-w-3xl mx-auto px-4 py-6">
                {/* Unit header */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                    Unit {unit.order} of {totalUnits}
                                </span>
                                <LevelBadge level={unit.level} />
                                {isMastered && (
                                    <span className="text-xs font-semibold text-green-700 bg-green-100 rounded-full px-2 py-0.5">
                                        ✓ Completed
                                    </span>
                                )}
                            </div>
                            <h1 className="text-xl font-bold text-gray-900">{unit.title}</h1>
                            <p className="text-sm text-gray-500 mt-1">{resolvePrimary(unit.description, level)}</p>
                        </div>
                    </div>
                </div>

                {/* Tab bar */}
                <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab.label}
                            {tab.count !== undefined && (
                                <span className={`ml-1 text-xs ${activeTab === tab.id ? "text-indigo-500" : "text-gray-400"}`}>
                                    {tab.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                {activeTab === "grammar" && (
                    <div className="flex flex-col gap-3">
                        {grammar.map(lesson => (
                            <GrammarAccordion
                                key={lesson.id}
                                lesson={lesson}
                                done={completed.includes(lesson.id)}
                                langId={langId}
                                level={level}
                                ui={ui}
                                onComplete={() => setCompleted(getCompletedLessons(langId))}
                            />
                        ))}
                    </div>
                )}

                {activeTab === "vocab" && (() => {
                    const vocabDone = vocab.filter(v => completed.includes(v.id)).length
                    let filtered = vocab
                    if (vocabFilter === "done") filtered = vocab.filter(v => completed.includes(v.id))
                    else if (vocabFilter === "todo") filtered = vocab.filter(v => !completed.includes(v.id))
                    return (
                        <div className="flex flex-col gap-3">
                            {/* Progress + filter */}
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex-1 flex items-center gap-2">
                                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-400 rounded-full transition-all"
                                            style={{ width: `${vocab.length ? vocabDone / vocab.length * 100 : 0}%` }} />
                                    </div>
                                    <span className="text-xs text-gray-400 shrink-0">{vocabDone}/{vocab.length}</span>
                                </div>
                                <div className="flex gap-1">
                                    {(["all", "todo", "done"] as const).map(f => (
                                        <button key={f} onClick={() => setVocabFilter(f)}
                                            className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${vocabFilter === f ? "bg-amber-100 text-amber-700" : "text-gray-400 hover:text-gray-600"}`}>
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
                                        onComplete={() => setCompleted(getCompletedLessons(langId))}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })()}

                {activeTab === "verbs" && (
                    verbs.length > 0 ? (
                        <div className="flex flex-col gap-3">
                            {verbs.map(verb => (
                                <VerbCard key={verb.id} verb={verb} langId={langId} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-gray-400">
                            <p className="text-4xl mb-3">🔤</p>
                            <p className="font-medium text-gray-500">No verbs in this unit.</p>
                            <p className="text-sm mt-1">Verbs are introduced in a later unit.</p>
                        </div>
                    )
                )}

                {activeTab === "test" && (
                    <TestOutTab
                        unit={unit}
                        langId={langId}
                        isMastered={isMastered}
                        ui={ui}
                        onMastered={() => setMastered(getMasteredUnits(langId))}
                        onBack={() => navigate(`/learn/${langId}`)}
                    />
                )}
            </main>
        </div>
    )
}
