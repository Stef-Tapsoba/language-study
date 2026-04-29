// pages/UnitPage.tsx — Guided lesson unit with grammar, vocab, and verb card activities
import { useState, useMemo, useEffect } from "react"
import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { isUnitUnlocked } from "../domain/unitUnlock"
import { useDebugUnlock } from "../auth/debugSession"
import { useProgress } from "../context/ProgressContext"
import { useStatsStore } from "../store/useStatsStore"
import { confirmUnitMastery } from "../store/actions"
import { getReinforcementState } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { MarkCompleteButton } from "../components/MarkCompleteButton"
import { Button } from "../components/ui/button"
import { LevelBadge } from "../components/LevelBadge"
import { QuizCard } from "../components/QuizCard"
import { SpeakButton } from "../components/SpeakButton"
import { GrammarLesson, LessonUnit, VocabItem, Verb, CEFRLevel, CultureEpisode, ReadingPassage, ListeningExercise, PhraseLesson } from "../types"
import { getUI, fmt, UIStrings } from "../i18n"
import { resolvePrimary } from "../utils/localizedText"
import { getGrammarExerciseType, getExerciseLabel, getVocabUnlockThreshold, isVocabExerciseUnlocked } from "../domain/reinforcementMapping"
import { getPhraseLessonsForUnit, getUnitsForGoal } from "../data/repo"
import { logError } from "../utils/logger"
import { getGoal } from "../store/preferences"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

type Tab = "grammar" | "vocab" | "verbs" | "test"
type LessonState   = "done" | "current" | "locked"
type ExerciseState = "done" | "available" | "locked"

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
// ContentLinkSection — shared by TestDoneScreen and TestOutTab start screen
// ---------------------------------------------------------------------------
type ContentTheme = "reading" | "listening" | "culture"

const CONTENT_THEME: Record<ContentTheme, { bg: string; border: string; hover: string; text: string; arrow: string }> = {
    reading:   { bg: "bg-reading-surface",   border: "border-reading-border",   hover: "hover:border-reading",   text: "text-reading",   arrow: "text-reading"   },
    listening: { bg: "bg-listening-surface", border: "border-listening-border", hover: "hover:border-listening", text: "text-listening", arrow: "text-listening" },
    culture:   { bg: "bg-culture-surface",   border: "border-culture-border",   hover: "hover:border-culture",   text: "text-culture",   arrow: "text-culture"   },
}

interface ContentLink { id: string; emoji: string; title: string; meta: string }

function ContentLinkSection({ theme, heading, links, onNavigate }: Readonly<{
    theme: ContentTheme; heading: string; links: ContentLink[]; onNavigate: (id: string) => void
}>) {
    if (links.length === 0) return null
    const th = CONTENT_THEME[theme]
    return (
        <div className="w-full flex flex-col gap-3 text-left">
            <p className={`text-xs font-semibold uppercase tracking-wide text-center ${th.text}`}>{heading}</p>
            {links.map(l => (
                <button key={l.id} onClick={() => onNavigate(l.id)}
                    className={`w-full ${th.bg} border ${th.border} rounded-2xl px-5 py-4
                                flex items-start gap-3 text-left ${th.hover} transition-colors`}>
                    <span className="text-2xl leading-none mt-0.5" aria-hidden="true">{l.emoji}</span>
                    <div className="flex flex-col gap-0.5 min-w-0">
                        <p className="text-sm font-semibold text-text-pri leading-snug">{l.title}</p>
                        <p className={`text-xs leading-snug ${th.text}`}>{l.meta}</p>
                    </div>
                    <span className={`ml-auto text-sm self-center ${th.arrow}`}>→</span>
                </button>
            ))}
        </div>
    )
}

// ---------------------------------------------------------------------------
// Phrase lesson row — shown at the top of the grammar tab for redesigned A1 units
// ---------------------------------------------------------------------------

function PhraseLessonRow({ lesson, langId, unitId, isDone, nav }: Readonly<{
    lesson: PhraseLesson; langId: string; unitId: string; isDone: boolean; nav: (to: string) => void
}>) {
    const returnTo = encodeURIComponent(`/learn/${langId}/units/${unitId}?tab=grammar`)
    const content = (
        <div className={[
            "flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors",
            isDone
                ? "border border-grammar-border bg-surface-card"
                : "border-t border-r border-b border-l-2 border-t-grammar-border border-r-grammar-border border-b-grammar-border border-l-grammar bg-grammar-surface shadow-sm",
        ].join(" ")}>
            <GrammarStateIcon state={isDone ? "done" : "current"} />
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-text-pri">{lesson.title}</p>
                <p className="text-xs text-text-ter">Phrases</p>
            </div>
            {isDone && <span className="text-xs font-medium text-grammar bg-grammar-surface rounded-full px-2 py-0.5 flex-shrink-0">Done</span>}
        </div>
    )
    return (
        <button onClick={() => nav(`/learn/${langId}/phrases/${lesson.id}?returnTo=${returnTo}`)} className="w-full text-left">
            {content}
        </button>
    )
}

// Grammar sequential list
// ---------------------------------------------------------------------------

function GrammarStateIcon({ state }: Readonly<{ state: LessonState | "available" }>) {
    if (state === "done")
        return (
            <div className="w-5 h-5 rounded-full bg-grammar flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <span className="text-white text-[10px] font-bold leading-none">✓</span>
            </div>
        )
    if (state === "current" || state === "available")
        return (
            <div className="w-5 h-5 rounded-full bg-grammar flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <div className="w-2 h-2 rounded-full bg-white" />
            </div>
        )
    return (
        <div className="w-5 h-5 rounded-full bg-border-default flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-text-ter">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
        </div>
    )
}

function GrammarLessonRow({ lesson, state, langId, unitId, nav }: Readonly<{
    lesson: GrammarLesson; state: LessonState; langId: string; unitId: string; nav: (to: string) => void
}>) {
    const isDone   = state === "done"
    const isLocked = state === "locked"
    const isActive = state === "current"
    const content = (
        <div className={[
            "flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors",
            isDone   ? "border border-grammar-border bg-surface-card"
            : isActive ? "border-t border-r border-b border-l-2 border-t-grammar-border border-r-grammar-border border-b-grammar-border border-l-grammar bg-grammar-surface shadow-sm"
            : "border border-border-subtle bg-surface-card",
        ].join(" ")}>
            <GrammarStateIcon state={state} />
            <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${isLocked ? "text-text-ter" : "text-text-pri"}`}>{lesson.title}</p>
                <p className="text-xs text-text-ter">Lesson</p>
            </div>
            {isDone && <span className="text-xs font-medium text-grammar bg-grammar-surface rounded-full px-2 py-0.5 flex-shrink-0">Done</span>}
        </div>
    )
    if (isLocked) return content
    const returnTo = encodeURIComponent(`/learn/${langId}/units/${unitId}?tab=grammar`)
    return (
        <button onClick={() => nav(`/learn/${langId}/grammar/${lesson.id}?returnTo=${returnTo}`)} className="w-full text-left">
            {content}
        </button>
    )
}

function GrammarExerciseRow({ lesson, state, langId, unitId, nav }: Readonly<{
    lesson: GrammarLesson; state: ExerciseState; langId: string; unitId: string; nav: (to: string) => void
}>) {
    const exerciseTypeId = getGrammarExerciseType(lesson)
    const label    = getExerciseLabel(exerciseTypeId)
    const isDone   = state === "done"
    const isAvail  = state === "available"
    const isLocked = state === "locked"
    const content = (
        <div className={[
            "flex items-center gap-3 px-4 py-3 rounded-2xl border transition-colors ml-6",
            isDone  ? "border-grammar-border bg-surface-card"
            : isAvail ? "border-grammar-border bg-grammar-surface"
            : "border-border-subtle bg-surface-card opacity-60",
        ].join(" ")}>
            <GrammarStateIcon state={isDone ? "done" : isAvail ? "available" : "locked"} />
            <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${isLocked ? "text-text-ter" : "text-text-pri"}`}>{label}</p>
                <p className="text-xs text-text-ter truncate">
                    {isDone ? "Completed · Practice again" : isLocked ? "Required exercise · Unlocks after lesson" : "Required exercise"}
                </p>
            </div>
            {isDone
                ? <span className="text-xs font-medium text-grammar bg-grammar-surface rounded-full px-2 py-0.5 flex-shrink-0">Done</span>
                : <span className={`text-xs font-medium rounded-full px-2 py-0.5 flex-shrink-0 ${isAvail ? "text-grammar bg-grammar-surface" : "text-text-sec bg-surface-inset"}`}>Required</span>
            }
        </div>
    )
    if (isLocked) return content
    const returnTo = encodeURIComponent(`/learn/${langId}/units/${unitId}?tab=grammar`)
    return (
        <button onClick={() => nav(`/learn/${langId}/exercise/${exerciseTypeId}?unitId=${unitId}&section=grammar&lessonId=${lesson.id}&returnTo=${returnTo}`)} className="w-full text-left">
            {content}
        </button>
    )
}

function GrammarSequenceList({ phraseLessons, grammar, langId, unitId, completed, reinforcedLessonIds, nav, onGoToTest }: Readonly<{
    phraseLessons: PhraseLesson[]; grammar: GrammarLesson[]; langId: string; unitId: string
    completed: string[]; reinforcedLessonIds: string[]; nav: (to: string) => void
    onGoToTest?: () => void
}>) {
    const currentIdx  = grammar.findIndex(l => !completed.includes(l.id))
    const donePairs   = currentIdx > 0 ? grammar.slice(0, currentIdx) : currentIdx === -1 ? grammar : []
    const activePairs = currentIdx === -1 ? [] : grammar.slice(currentIdx)
    const allLessonsDone = currentIdx === -1
    const allExercisesDone = grammar.every(l => reinforcedLessonIds.includes(l.id))

    // exState: a lesson in activePairs can never have an "available" exercise, even if
    // its lesson was completed via the Study tab out of unit sequence. Only lessons
    // that are sequentially done (in donePairs) can have an available exercise.
    function exState(lesson: GrammarLesson, inDonePairs: boolean): ExerciseState {
        if (reinforcedLessonIds.includes(lesson.id)) return "done"
        if (inDonePairs && completed.includes(lesson.id)) return "available"
        return "locked"
    }

    return (
        <div className="flex flex-col gap-2">
            {phraseLessons.length > 0 && (
                <>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-text-ter px-1 mt-1 mb-0.5">Phrases</p>
                    {phraseLessons.map(lesson => (
                        <PhraseLessonRow
                            key={lesson.id}
                            lesson={lesson}
                            langId={langId}
                            unitId={unitId}
                            isDone={completed.includes(lesson.id)}
                            nav={nav}
                        />
                    ))}
                </>
            )}
            {donePairs.length > 0 && (
                <>
                    <p className={`text-[10px] font-semibold uppercase tracking-widest text-text-ter px-1 mb-0.5 ${phraseLessons.length > 0 ? "mt-4" : "mt-1"}`}>Lessons</p>
                    {donePairs.map(lesson => (
                        <div key={lesson.id} className="flex flex-col gap-1.5">
                            <GrammarLessonRow lesson={lesson} state="done" langId={langId} unitId={unitId} nav={nav} />
                            <GrammarExerciseRow lesson={lesson} state={exState(lesson, true)} langId={langId} unitId={unitId} nav={nav} />
                        </div>
                    ))}
                </>
            )}
            {activePairs.length > 0 && (
                <>
                    <p className={`text-[10px] font-semibold uppercase tracking-widest text-text-ter px-1 mb-0.5 ${donePairs.length > 0 || phraseLessons.length > 0 ? "mt-4" : "mt-1"}`}>Up Next</p>
                    {activePairs.map((lesson, i) => {
                        const lState: LessonState = i === 0 ? "current" : "locked"
                        return (
                            <div key={lesson.id} className="flex flex-col gap-1.5">
                                <GrammarLessonRow lesson={lesson} state={lState} langId={langId} unitId={unitId} nav={nav} />
                                <GrammarExerciseRow lesson={lesson} state={exState(lesson, false)} langId={langId} unitId={unitId} nav={nav} />
                            </div>
                        )
                    })}
                </>
            )}

            {/* Test nudge — shown when all lessons and exercises are done */}
            {allLessonsDone && allExercisesDone && onGoToTest && (
                <button
                    onClick={onGoToTest}
                    className="mt-4 w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-grammar-surface border border-grammar-border hover:border-grammar transition-colors"
                >
                    <span className="text-sm font-semibold text-grammar">Grammar complete — take the test</span>
                    <span className="text-grammar text-sm">→</span>
                </button>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// Vocab practice section
// ---------------------------------------------------------------------------

function VocabPracticeSection({ unit, langId, completed, vocabExerciseDone, nav }: Readonly<{
    unit: LessonUnit; langId: string; completed: string[]; vocabExerciseDone: boolean; nav: (to: string) => void
}>) {
    const threshold  = getVocabUnlockThreshold(unit)
    const learnedCnt = unit.vocabIds.filter(id => completed.includes(id)).length
    const isUnlocked = isVocabExerciseUnlocked(unit, completed)
    const isDone     = vocabExerciseDone
    const sublabel   = isDone
        ? "Completed"
        : isUnlocked
        ? "Practice the words you've learned in context"
        : `${learnedCnt} word${learnedCnt === 1 ? "" : "s"} ready · Mark ${threshold} or more to unlock`
    const returnTo = encodeURIComponent(`/learn/${langId}/units/${unit.id}?tab=vocab`)
    const row = (
        <div className={[
            "flex items-center gap-3 px-4 py-3 rounded-2xl border transition-colors",
            isDone      ? "border-grammar-border bg-surface-card"
            : isUnlocked ? "border-grammar-border bg-grammar-surface"
            : "border-border-subtle bg-surface-card opacity-60",
        ].join(" ")}>
            <GrammarStateIcon state={isDone ? "done" : isUnlocked ? "available" : "locked"} />
            <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${!isDone && !isUnlocked ? "text-text-ter" : "text-text-pri"}`}>
                    Vocab matching
                </p>
                <p className="text-xs text-text-ter truncate">
                    {isDone ? "Completed · Practice again" : sublabel}
                </p>
            </div>
            {isDone
                ? <span className="text-xs font-medium text-grammar bg-grammar-surface rounded-full px-2 py-0.5 flex-shrink-0">Done</span>
                : <span className={`text-xs font-medium rounded-full px-2 py-0.5 flex-shrink-0 ${isUnlocked ? "text-grammar bg-grammar-surface" : "text-text-sec bg-surface-inset"}`}>Required</span>
            }
        </div>
    )
    return (
        <div className="mt-4 pt-4 border-t border-border-subtle">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-text-ter px-1 mb-2">
                Practice What You've Learned
            </p>
            {isUnlocked
                ? <button onClick={() => nav(`/learn/${langId}/exercise/vocab-matching?unitId=${unit.id}&section=vocab&returnTo=${returnTo}`)} className="w-full text-left">{row}</button>
                : row
            }
        </div>
    )
}

// ---------------------------------------------------------------------------
// VocabRow
// ---------------------------------------------------------------------------
function VocabRow({ item, done, langId, ui }: Readonly<{
    item: VocabItem; done: boolean; langId: string; ui: UIStrings
}>) {
    const { markLessonComplete } = useProgress()
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={item.id} className={`border rounded-2xl px-4 bg-surface-card ${done ? "border-grammar-border" : "border-border-default hover:border-grammar"}`}>
                <AccordionTrigger className="py-3 hover:no-underline">
                    <div className="flex items-center gap-3 w-full pr-2">
                        <span className={`text-base ${done ? "text-grammar" : "text-border-default"}`}>{done ? "✓" : "○"}</span>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-text-pri whitespace-nowrap">{item.word}</span>
                                <SpeakButton text={item.word} langId={langId} />
                            </div>
                            {item.romanized && <span className="text-xs text-indigo-500">{item.romanized}</span>}
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-0.5">
                            <span className="text-sm text-text-sec text-right">{item.translation}</span>
                            <span className="text-xs bg-surface-inset text-text-sec rounded-full px-2 py-0.5">
                                {item.category}
                            </span>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-1">
                        <div className="bg-surface-inset rounded-xl p-3 mb-3">
                            <p className="text-sm font-medium text-text-pri">{item.example.native}</p>
                            {item.example.romanized && <p className="text-xs text-indigo-500 mt-0.5">{item.example.romanized}</p>}
                            <p className="text-xs text-text-sec mt-1">{item.example.translation}</p>
                        </div>
                        <MarkCompleteButton
                            done={done}
                            onClick={() => markLessonComplete(langId, item.id, "vocab")}
                            label={ui.markLearned}
                        />
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

// ---------------------------------------------------------------------------
// VerbCard
// ---------------------------------------------------------------------------
function VerbCard({ verb, langId, done, ui }: Readonly<{ verb: Verb; langId: string; done: boolean; ui: UIStrings }>) {
    const { markLessonComplete } = useProgress()
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={verb.id} className={`border rounded-2xl px-5 bg-surface-card ${done ? "border-grammar-border" : "border-border-default"}`}>
                <AccordionTrigger className="py-4 hover:no-underline">
                    <div className="flex items-center gap-3 w-full pr-2">
                        <span className={`text-base ${done ? "text-grammar" : "text-border-default"}`}>{done ? "✓" : "○"}</span>
                        <div className="flex-1">
                            <span className="font-semibold text-text-pri">{verb.infinitive}</span>
                            {verb.romanized && <span className="ml-2 text-xs text-indigo-500">{verb.romanized}</span>}
                            <span className="ml-2 text-sm text-text-sec">— {verb.meaning}</span>
                        </div>
                        <SpeakButton text={verb.infinitive} langId={langId} />
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-1">
                        {verb.conjugations.map(conj => (
                            <div key={conj.tense} className="mt-4">
                                <p className="text-xs font-semibold text-text-ter uppercase tracking-wide mb-2">{conj.tense}</p>
                                <div className="rounded-xl border border-border-subtle overflow-hidden">
                                    {conj.forms.map((f) => (
                                        <div key={f.pronoun} className="flex items-center px-4 py-2.5 text-sm odd:bg-surface-card even:bg-surface-elevated">
                                            <span className="text-text-sec w-28 shrink-0">{f.pronoun}</span>
                                            <span className="font-medium text-text-pri">{f.form}</span>
                                            {f.romanized && <span className="ml-2 text-xs text-indigo-400">{f.romanized}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <MarkCompleteButton
                            done={done}
                            onClick={() => markLessonComplete(langId, verb.id, "verb")}
                            label={ui.markLearned}
                            className="mt-4"
                        />
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
        <Accordion type="single" collapsible className="w-full bg-surface-card border border-border-subtle rounded-2xl">
            <AccordionItem value="mistakes" className="border-0 px-5">
                <AccordionTrigger className="text-sm font-semibold text-text-sec py-3 hover:no-underline">
                    Review mistakes ({missed.length})
                </AccordionTrigger>
                <AccordionContent>
                    <div className="divide-y divide-border-subtle">
                        {missed.map((m) => (
                            <div key={`${m.prompt}|${m.yourAnswer}`} className="py-3 text-left text-sm">
                                <p className="text-text-sec mb-1">{m.prompt}</p>
                                <p className="text-grammar font-medium">✓ {m.correct}</p>
                                <p className="text-verbs">✗ {m.yourAnswer}</p>
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

interface TestDoneContent {
    cultureEpisodes: CultureEpisode[]
    readingPassages: ReadingPassage[]
    listeningExercises: ListeningExercise[]
}

interface TestDoneNav {
    onComplete: () => void
    onReset: () => void
    onBack: () => void
    onNavigateNext: (id: string) => void
    onNavigateLevelTest: () => void
    onNavigateCulture: (id: string) => void
    onNavigateReading: (id: string) => void
    onNavigateListening: (id: string) => void
}

function TestDoneScreen({ score, total, passThreshold, missed, isMastered, didComplete,
    isLastUnit, nextUnit, level, ui, content, nav }: Readonly<{
    score: number; total: number; passThreshold: number; missed: MissedItem[]
    isMastered: boolean; didComplete: boolean; isLastUnit: boolean; nextUnit: LessonUnit | null
    level: CEFRLevel; ui: UIStrings
    content: TestDoneContent
    nav: TestDoneNav
}>) {
    const passed = score >= passThreshold
    return (
        <div className="flex flex-col items-center gap-6 py-8 max-w-sm mx-auto text-center">
            <div className="text-5xl">{passed ? "🏆" : "📚"}</div>
            <h3 className="text-xl font-bold text-text-pri">
                {passed ? ui.unitComplete : ui.keepStudying}
            </h3>
            <p className="text-text-sec">
                {fmt(ui.youAnswered, { score, total })}{" "}
                ({Math.round((score / total) * 100)}%)
            </p>

            {missed.length > 0 && <MistakeReview missed={missed} />}

            {passed && (isMastered || didComplete) && (
                <>
                    <ContentLinkSection theme="reading" heading="Reading" onNavigate={nav.onNavigateReading}
                        links={content.readingPassages.map(p => ({ id: p.id, emoji: "📖", title: p.title, meta: `${p.vocabGloss.length} vocab · ${p.questions.length} Q` }))} />
                    <ContentLinkSection theme="listening" heading="Listening" onNavigate={nav.onNavigateListening}
                        links={content.listeningExercises.map(ex => ({ id: ex.id, emoji: "🎧", title: ex.title, meta: `${ex.questions.length} Q` }))} />
                    <ContentLinkSection theme="culture" heading={ui.cultureUnlockHeading} onNavigate={nav.onNavigateCulture}
                        links={content.cultureEpisodes.map(ep => ({ id: ep.id, emoji: CULTURE_CATEGORY_EMOJI[ep.category] ?? "🌍", title: ep.title.native, meta: ep.subtitle }))} />
                </>
            )}

            <div className="w-full bg-surface-card border border-border-subtle rounded-2xl p-5 flex flex-col gap-3">
                {passed && !isMastered && !didComplete && (
                    <Button onClick={nav.onComplete} className="w-full rounded-xl py-2.5 text-sm font-semibold bg-green-600 hover:bg-green-700">
                        {ui.markUnitComplete}
                    </Button>
                )}
                {passed && (isMastered || didComplete) && (
                    <>
                        {isLastUnit && (
                            <Button onClick={nav.onNavigateLevelTest} className="w-full rounded-xl py-2.5 text-sm font-semibold">
                                Take the {level} Level Test →
                            </Button>
                        )}
                        {!isLastUnit && nextUnit && (
                            <Button onClick={() => nav.onNavigateNext(nextUnit.id)} className="w-full rounded-xl py-2.5 text-sm font-semibold">
                                Next: {nextUnit.title} →
                            </Button>
                        )}
                        <Button variant="outline" onClick={nav.onBack} className="w-full rounded-xl py-2.5 text-sm font-semibold">
                            {ui.backToDashboard}
                        </Button>
                    </>
                )}
                {!passed && (
                    <>
                        <p className="text-xs text-text-sec">
                            You need {passThreshold} correct to complete this unit. Review the content and try again.
                        </p>
                        <Button onClick={nav.onReset} className="w-full rounded-xl py-2.5 text-sm font-semibold">
                            {ui.tryAgain}
                        </Button>
                        <Button variant="outline" onClick={nav.onBack} className="w-full rounded-xl py-2.5 text-sm font-semibold">
                            {ui.backToDashboard}
                        </Button>
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

interface IncompleteExercise { key: string; label: string; tab: "grammar" | "vocab" }

function TestOutTab({ unit, langId, isMastered, nextUnit, isLastUnit, ui, content,
    incompleteExercises, onGoToTab, onMastered, onBack, onNavigateNext,
    onNavigateLevelTest, onNavigateCulture, onNavigateReading, onNavigateListening }: Readonly<{
    unit: LessonUnit
    langId: string
    isMastered: boolean
    nextUnit: LessonUnit | null
    isLastUnit: boolean
    ui: UIStrings
    content: TestDoneContent
    /** Required exercises not yet attempted — drives the soft gate */
    incompleteExercises: IncompleteExercise[]
    onGoToTab: (tab: "grammar" | "vocab") => void
    onMastered: () => void
    onBack: () => void
    onNavigateNext: (unitId: string) => void
    onNavigateLevelTest: () => void
    onNavigateCulture: (id: string) => void
    onNavigateReading: (id: string) => void
    onNavigateListening: (id: string) => void
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
        confirmUnitMastery(langId, unit.id).catch(err => logError("UnitPage.confirmMastery", err))
        onMastered()
        setDidComplete(true)
    }

    if (!questions.length) {
        return (
            <div className="text-center py-16 text-text-ter">
                <p className="text-4xl mb-3">🚧</p>
                <p className="font-medium">Test not yet available for this unit.</p>
            </div>
        )
    }

    if (phase === "start") {
        return (
            <div className="flex flex-col items-center gap-6 py-8 max-w-sm mx-auto text-center">
                {isMastered && (
                    <div className="w-full bg-grammar-surface border border-grammar-border rounded-2xl px-4 py-3 flex items-center gap-2 text-grammar">
                        <span className="text-lg">✓</span>
                        <span className="text-sm font-medium">{ui.alreadyCompleted}</span>
                    </div>
                )}
                <div className="text-5xl">📝</div>
                <div>
                    <h3 className="text-lg font-bold text-text-pri mb-1">{ui.testOutTitle}</h3>
                    <p className="text-sm text-text-sec">
                        {questions.length} question{questions.length === 1 ? "" : "s"} &nbsp;·&nbsp;
                        {fmt(ui.levelTestDesc, { pass: passThreshold, total: questions.length, next: "" }).split(" to ")[0]}
                    </p>
                </div>

                {/* Soft gate — only shown on first attempt when exercises are pending */}
                {!isMastered && incompleteExercises.length > 0 && (
                    <div className="w-full bg-vocab-surface border border-vocab-border rounded-2xl px-4 py-4 flex flex-col gap-3 text-left">
                        <p className="text-sm font-semibold text-vocab">
                            Almost ready — finish these first:
                        </p>
                        <div className="flex flex-col gap-1.5">
                            {incompleteExercises.map(ex => (
                                <button
                                    key={ex.key}
                                    onClick={() => onGoToTab(ex.tab)}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-surface-card border border-vocab-border hover:border-vocab transition-colors"
                                >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <span className="w-4 h-4 rounded-full border-2 border-border-default flex-shrink-0" />
                                        <span className="text-sm text-text-pri truncate">{ex.label}</span>
                                    </div>
                                    <span className="text-xs text-vocab ml-2 flex-shrink-0">Go →</span>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setPhase("playing")}
                            className="text-xs text-text-ter hover:text-text-sec underline underline-offset-2 self-start transition-colors"
                        >
                            Start test anyway
                        </button>
                    </div>
                )}

                {/* Primary CTA — hidden when soft gate is visible (use "start anyway" instead) */}
                {(isMastered || incompleteExercises.length === 0) && (
                    <Button
                        onClick={() => setPhase("playing")}
                        className="w-full rounded-xl py-3 text-sm font-semibold"
                    >
                        {isMastered ? ui.retakeTest : ui.startTest}
                    </Button>
                )}

                {/* Reading / Listening / Culture — shown directly when the unit is already mastered */}
                {isMastered && (
                    <>
                        <ContentLinkSection theme="reading" heading="Reading" onNavigate={onNavigateReading}
                            links={content.readingPassages.map(p => ({ id: p.id, emoji: "📖", title: p.title, meta: `${p.vocabGloss.length} vocab · ${p.questions.length} Q` }))} />
                        <ContentLinkSection theme="listening" heading="Listening" onNavigate={onNavigateListening}
                            links={content.listeningExercises.map(ex => ({ id: ex.id, emoji: "🎧", title: ex.title, meta: `${ex.questions.length} Q` }))} />
                        <ContentLinkSection theme="culture" heading={ui.cultureUnlockHeading} onNavigate={onNavigateCulture}
                            links={content.cultureEpisodes.map(ep => ({ id: ep.id, emoji: CULTURE_CATEGORY_EMOJI[ep.category] ?? "🌍", title: ep.title.native, meta: ep.subtitle }))} />
                    </>
                )}
            </div>
        )
    }

    if (phase === "done") {
        return (
            <TestDoneScreen
                score={score} total={questions.length} passThreshold={passThreshold} missed={missed}
                isMastered={isMastered} didComplete={didComplete} isLastUnit={isLastUnit} nextUnit={nextUnit}
                level={unit.level} ui={ui}
                content={content}
                nav={{
                    onComplete: handleComplete, onReset: handleReset, onBack,
                    onNavigateNext, onNavigateLevelTest,
                    onNavigateCulture, onNavigateReading, onNavigateListening,
                }}
            />
        )
    }

    // phase === "playing"
    const q = questions[qIdx]
    return (
        <div className="flex flex-col items-center gap-5 max-w-xl mx-auto">
            <div className="w-full flex items-center justify-between text-sm text-text-sec">
                <span>{fmt(ui.questionOf, { n: qIdx + 1, total: questions.length })}</span>
                <span className="font-medium">{ui.scoreLabel}: {score}</span>
            </div>
            <div className="w-full flex gap-1">
                {questions.map((q, i) => {
                    let dotCls = "h-1.5 flex-1 rounded-full transition-colors "
                    if (i < qIdx) dotCls += "bg-grammar"
                    else if (i === qIdx) dotCls += "bg-grammar opacity-40"
                    else dotCls += "bg-border-default"
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
                <Button onClick={handleNext} className="w-full rounded-xl py-3 font-semibold">
                    {qIdx + 1 >= questions.length ? ui.seeResults : ui.nextQuestion}
                </Button>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------
// UnitPage
// ---------------------------------------------------------------------------
export function UnitPage() {
    const { langId = "", unitId = "" } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const debugUnlock = useDebugUnlock()

    const language = getLanguage(langId)
    const mod = getModule(langId)
    const { level: getLevel, completed: getCompleted, mastered: getMastered, masterUnit, completedCheckpoints: getCompletedCheckpoints } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)
    const completed = getCompleted(langId)
    const mastered = getMastered(langId)
    const completedCheckpoints = getCompletedCheckpoints(langId)

    const units = mod?.units ?? []
    const unit = units.find(u => u.id === unitId)

    // Reinforcement state — read from write-through cache; fresh on every remount (navigation back from exercise)
    const reinforcement = unit ? getReinforcementState(langId, unitId) : { grammarLessonIds: [] }

    const phraseLessons = useMemo(() => getPhraseLessonsForUnit(langId, unitId), [langId, unitId])
    const grammar = useMemo(() => mod?.grammar.filter(g => unit?.grammarIds.includes(g.id)) ?? [], [mod, unit])
    const vocab = useMemo(() => mod?.vocab.filter(v => unit?.vocabIds.includes(v.id)) ?? [], [mod, unit])
    const verbs = useMemo(() => mod?.verbs.filter(v => unit?.verbIds.includes(v.id)) ?? [], [mod, unit])
    const cultureEpisodes = useMemo(() =>
        mod?.cultureEpisodes?.filter(c => unit?.cultureIds?.includes(c.id)) ?? [],
    [mod, unit])
    const readingPassages = useMemo(() =>
        mod?.readingPassages?.filter(p => unit?.readingIds?.includes(p.id)) ?? [],
    [mod, unit])
    const listeningExercises = useMemo(() =>
        mod?.listeningExercises?.filter(e => unit?.listeningIds?.includes(e.id)) ?? [],
    [mod, unit])

    const tabs = useMemo<{ id: Tab; label: string; count?: number }[]>(() => [
        ...(grammar.length > 0 ? [{ id: "grammar" as Tab, label: ui.unitTabGrammar, count: grammar.length }] : []),
        ...(vocab.length > 0 ? [{ id: "vocab" as Tab, label: ui.unitTabVocab, count: vocab.length }] : []),
        ...(verbs.length > 0 ? [{ id: "verbs" as Tab, label: ui.unitTabVerbs, count: verbs.length }] : []),
        { id: "test" as Tab, label: ui.unitTabTest },
    ], [grammar, vocab, verbs, ui])

    function firstTab(): Tab {
        const p = searchParams.get("tab") as Tab | null
        if (p && (["grammar", "vocab", "verbs", "test"] as const).includes(p as Tab)) return p as Tab
        if (grammar.length > 0) return "grammar"
        if (vocab.length > 0) return "vocab"
        if (verbs.length > 0) return "verbs"
        return "test"
    }
    const [activeTab, setActiveTab] = useState<Tab>(firstTab)
    useEffect(() => { setActiveTab(firstTab()) }, [unitId])

    function handleTabChange(tab: Tab) {
        setActiveTab(tab)
        const next = new URLSearchParams(searchParams)
        next.set("tab", tab)
        setSearchParams(next, { replace: true })
    }
    const [vocabFilter, setVocabFilter] = useState<"all" | "todo" | "done">("all")

    if (!language || !mod || !unit) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Unit" level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-3xl mx-auto px-4 py-16 text-center text-text-ter">
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="font-medium">Unit not found.</p>
                </main>
            </div>
        )
    }

    // Per-tab completion flags — unit is guaranteed non-null after the guard above
    const grammarAllDone = grammar.length > 0
        && grammar.every(l => completed.includes(l.id))
        && grammar.every(l => reinforcement.grammarLessonIds.includes(l.id))
    const vocabAllDone = vocab.length > 0
        && isVocabExerciseUnlocked(unit, completed)
        && reinforcement.vocab === true

    const isMastered = mastered.includes(unit.id)
    const levelUnits = units.filter(u => u.level === unit.level).sort((a, b) => a.order - b.order)
    const goalSortedUnits = getUnitsForGoal(langId, unit.level, getGoal())
    const isLocked = !debugUnlock && !isUnitUnlocked(unit.id, goalSortedUnits, mastered, completedCheckpoints)
    const totalUnits = levelUnits.length
    const isLastUnit = unit.order === totalUnits
    const nextUnit = levelUnits.find(u => u.order === unit.order + 1) ?? null

    if (isLocked) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title={unit.title} level={unit.level} backTo={`/learn/${langId}`} />
                <main className="max-w-xl mx-auto px-4 py-16 text-center">
                    <p className="text-5xl mb-4">🔒</p>
                    <h2 className="text-xl font-bold text-text-pri mb-2">Unit locked</h2>
                    <p className="text-text-sec mb-6">Complete the previous unit to unlock this one.</p>
                    <Button onClick={() => navigate(`/learn/${langId}`)} className="rounded-xl px-6 py-2.5 text-sm font-semibold">
                        {ui.backToDashboard}
                    </Button>
                </main>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title={unit.title} level={unit.level} backTo={`/learn/${langId}`}
                breadcrumb={`${language.name} › Path`} />

            <main className="max-w-3xl mx-auto px-4 py-6">
                {/* Unit header */}
                <div className="bg-surface-card border border-border-subtle rounded-2xl p-5 mb-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-text-ter uppercase tracking-wide">
                                    Unit {unit.order} of {totalUnits}
                                </span>
                                <LevelBadge level={unit.level} />
                                {isMastered && (
                                    <span className="text-xs font-semibold text-grammar bg-grammar-surface rounded-full px-2 py-0.5">
                                        ✓ Completed
                                    </span>
                                )}
                            </div>
                            <h1 className="text-xl font-bold text-text-pri">{unit.title}</h1>
                            <p className="text-sm text-text-sec mt-1">{resolvePrimary(unit.description, level)}</p>
                        </div>
                    </div>
                </div>

                {/* Tab bar */}
                <Tabs value={activeTab} onValueChange={v => handleTabChange(v as Tab)} className="mb-0">
                    <TabsList className="w-full h-auto p-1 bg-surface-inset rounded-xl mb-6">
                        {tabs.map(tab => {
                            const TAB_COLORS: Record<Tab, string> = {
                                grammar: "data-[state=active]:bg-green-500  data-[state=active]:text-white",
                                vocab:   "data-[state=active]:bg-amber-400  data-[state=active]:text-white",
                                verbs:   "data-[state=active]:bg-red-400    data-[state=active]:text-white",
                                test:    "data-[state=active]:bg-violet-500 data-[state=active]:text-white",
                            }
                            const isTabDone = (tab.id === "grammar" && grammarAllDone) || (tab.id === "vocab" && vocabAllDone)
                            return (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.id}
                                    className={`flex-1 py-2 px-3 text-sm ${TAB_COLORS[tab.id]}`}
                                >
                                    {tab.label}
                                    {isTabDone
                                        ? <span className="ml-1 text-xs font-medium text-green-600 dark:text-green-400 data-[state=active]:text-white">✓</span>
                                        : tab.count !== undefined && (
                                            <span className="ml-1 text-xs text-current opacity-60">{tab.count}</span>
                                        )
                                    }
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>

                    {/* Tab content */}
                    <TabsContent value="grammar" className="tab-fade">
                        <GrammarSequenceList
                            phraseLessons={phraseLessons}
                            grammar={grammar}
                            langId={langId}
                            unitId={unitId}
                            completed={completed}
                            reinforcedLessonIds={reinforcement.grammarLessonIds}
                            nav={navigate}
                            onGoToTest={() => handleTabChange("test")}
                        />
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
                                            <div className="flex-1 h-1.5 bg-border-subtle rounded-full overflow-hidden">
                                                <div className="h-full bg-vocab rounded-full transition-[width] duration-700 ease-out"
                                                    style={{ width: `${vocab.length ? vocabDone / vocab.length * 100 : 0}%` }} />
                                            </div>
                                            <span className="text-xs text-text-ter shrink-0">{vocabDone}/{vocab.length}</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {(["all", "todo", "done"] as const).map(f => (
                                                <button key={f} onClick={() => setVocabFilter(f)}
                                                    className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${vocabFilter === f ? "bg-vocab-surface text-vocab" : "bg-surface-inset text-text-sec hover:text-text-pri"}`}>
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
                                            />
                                        ))}
                                    </div>
                                    {/* Practice section — always at bottom regardless of filter */}
                                    <VocabPracticeSection
                                        unit={unit}
                                        langId={langId}
                                        completed={completed}
                                        vocabExerciseDone={reinforcement.vocab === true}
                                        nav={navigate}
                                    />
                                </div>
                            )
                        })()}
                    </TabsContent>

                    <TabsContent value="verbs" className="tab-fade">
                        {verbs.length > 0 ? (
                            <div className="flex flex-col gap-3">
                                {verbs.map(verb => (
                                    <VerbCard key={verb.id} verb={verb} langId={langId} done={completed.includes(verb.id)} ui={ui} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 text-text-ter">
                                <p className="text-4xl mb-3">🔤</p>
                                <p className="font-medium text-text-sec">No verbs in this unit.</p>
                                <p className="text-sm mt-1">Verbs are introduced in a later unit.</p>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="test" className="tab-fade">
                        {(() => {
                            const incompleteExercises: IncompleteExercise[] = [
                                ...grammar
                                    .filter(l => !reinforcement.grammarLessonIds.includes(l.id))
                                    .map(l => ({
                                        key: l.id,
                                        label: `${getExerciseLabel(getGrammarExerciseType(l))} — ${l.title}`,
                                        tab: "grammar" as const,
                                    })),
                                ...(vocab.length > 0 && reinforcement.vocab !== true
                                    ? [{ key: "vocab", label: "Vocab matching", tab: "vocab" as const }]
                                    : []),
                            ]
                            return (
                                <TestOutTab
                                    unit={unit}
                                    langId={langId}
                                    isMastered={isMastered}
                                    nextUnit={nextUnit}
                                    isLastUnit={isLastUnit}
                                    ui={ui}
                                    content={{ cultureEpisodes, readingPassages, listeningExercises }}
                                    incompleteExercises={incompleteExercises}
                                    onGoToTab={tab => handleTabChange(tab)}
                                    onMastered={() => masterUnit(langId, unit.id)}
                                    onBack={() => navigate(`/learn/${langId}`)}
                                    onNavigateNext={(id) => navigate(`/learn/${langId}/units/${id}`, { replace: true })}
                                    onNavigateLevelTest={() => navigate(`/learn/${langId}/level-test`)}
                                    onNavigateCulture={(id) => navigate(`/learn/${langId}/culture?episode=${id}`)}
                                    onNavigateReading={(id) => navigate(`/learn/${langId}/reading?passage=${id}`)}
                                    onNavigateListening={(id) => navigate(`/learn/${langId}/listening?exercise=${id}`)}
                                />
                            )
                        })()}
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}
