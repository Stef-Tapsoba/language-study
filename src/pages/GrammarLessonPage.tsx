// pages/GrammarLessonPage.tsx — Full grammar lesson detail view
import { useParams, useSearchParams } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getGrammarLesson } from "../data/repo"
import { useProgress } from "../context/ProgressContext"
import { NavBar } from "../components/NavBar"
import { MarkCompleteButton } from "../components/MarkCompleteButton"
import { LevelBadge } from "../components/LevelBadge"
import { SpeakButton } from "../components/SpeakButton"
import { VocabTooltip } from "../components/VocabTooltip"
import { resolvePrimary } from "../utils/localizedText"
import { renderExplanation, renderInline } from "../utils/renderExplanation"
import { useVocabTooltip } from "../hooks/useVocabTooltip"
import type { GrammarNote, GrammarConjugationTable, GrammarReferenceTable } from "../types"
import { isDialogueExample } from "../types"

function GrammarTable({ heading, table }: Readonly<{ heading: string; table: GrammarConjugationTable }>) {
    const { pronouns, verbs } = table
    return (
        <div className="bg-surface-card rounded-2xl border border-border-default p-5 overflow-x-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-text-ter mb-3">{heading}</h2>
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr>
                        <th className="text-left text-xs text-text-ter font-medium pb-2 pr-4 w-24"></th>
                        {verbs.map(v => (
                            <th key={v.label} className="text-left text-xs font-semibold text-grammar pb-2 pr-4">
                                {v.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {pronouns.map((pronoun, i) => (
                        <tr key={pronoun} className={i % 2 === 0 ? "bg-surface-elevated rounded" : ""}>
                            <td className="text-text-ter text-xs py-1.5 pr-4 font-medium">{pronoun}</td>
                            {verbs.map(v => (
                                <td key={v.label} className="text-text-pri font-semibold py-1.5 pr-4">
                                    {v.forms[i]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function ReferenceTable({ table }: Readonly<{ table: GrammarReferenceTable }>) {
    const { headers, rows, layout } = table
    if (layout === "strip") {
        return (
            <div className="bg-surface-card rounded-2xl border border-border-default p-5 overflow-x-auto">
                <table className="text-sm border-collapse">
                    <thead>
                        <tr>
                            {rows.some(r => r.label) && (
                                <th className="text-left text-xs text-text-ter font-medium pb-2 pr-4 w-20"></th>
                            )}
                            {headers.map(h => (
                                <th key={h} className="text-left text-xs font-semibold text-grammar pb-2 pr-4">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={row.label ?? row.cells[0] ?? i} className={i % 2 === 0 ? "bg-surface-elevated rounded" : ""}>
                                {rows.some(r => r.label) && (
                                    <td className="text-text-ter text-xs py-1.5 pr-4 font-medium">{row.label ?? ""}</td>
                                )}
                                {row.cells.map((cell, j) => (
                                    <td key={`${cell}-${j}`} className="text-text-pri font-semibold py-1.5 pr-4">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
    // keyed layout — label | value | optional note
    return (
        <div className="bg-surface-card rounded-2xl border border-border-default p-5">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr>
                        {headers.map(h => (
                            <th key={h} className="text-left text-xs font-semibold text-grammar pb-2 pr-4">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={row.label ?? row.cells[0] ?? i} className={i % 2 === 0 ? "bg-surface-elevated rounded" : ""}>
                            {row.label !== undefined && (
                                <td className="text-text-ter text-xs py-1.5 pr-4 font-medium w-24">{row.label}</td>
                            )}
                            {row.cells.map((cell, j) => (
                                <td key={`${cell}-${j}`} className={`py-1.5 pr-4 ${j === 0 ? "font-semibold text-text-pri" : "text-text-sec text-xs"}`}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const NOTE_STYLES = {
    tip: {
        wrapper: "bg-grammar-surface border border-grammar-border",
        label: "text-grammar",
        labelText: "Tip",
    },
    warning: {
        wrapper: "bg-vocab-surface border border-vocab-border",
        label: "text-vocab",
        labelText: "Note",
    },
    "forward-ref": {
        wrapper: "bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800",
        label: "text-purple-600 dark:text-purple-400",
        labelText: "Coming up",
    },
    culture: {
        wrapper: "bg-grammar-surface border border-grammar-border",
        label: "text-grammar",
        labelText: "Culture",
    },
} satisfies Record<GrammarNote["type"], { wrapper: string; label: string; labelText: string }>

export function GrammarLessonPage() {
    const { langId = "", lessonId = "" } = useParams()
    const [searchParams] = useSearchParams()
    // When navigated from a UnitPage, returnTo brings the back button back to that unit.
    const grammarBack = searchParams.get("returnTo") ?? `/learn/${langId}/grammar`
    const language = getLanguage(langId)
    const { level: getLevel, completed: getCompleted, markLessonComplete } = useProgress()
    const level = getLevel(langId)
    const completed = getCompleted(langId)
    const { activeWord, handleVocabClick, dismissTooltip } = useVocabTooltip(langId)

    if (!language) return null

    const lesson = getGrammarLesson(langId, lessonId)

    if (!lesson) {
        return (
            <div className="min-h-screen bg-surface-app">
                <NavBar title="Grammar" level={level} backTo={grammarBack} />
                <main className="max-w-xl mx-auto px-4 py-16 text-center text-text-ter">
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="font-medium">Lesson not found</p>
                </main>
            </div>
        )
    }

    const isDone = completed.includes(lesson.id)
    const explanation = resolvePrimary(lesson.explanation, level)

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar title={lesson.title} level={level} backTo={grammarBack}
                breadcrumb={`${language.name} › Grammar`} />
            <main className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">

                {/* Title + level badge */}
                <div className="flex items-start justify-between gap-3">
                    <h1 className="text-2xl font-bold text-text-pri leading-tight">{lesson.title}</h1>
                    <LevelBadge level={lesson.level} />
                </div>

                {/* Explanation */}
                <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-text-ter mb-2">Explanation</h2>
                    {renderExplanation(explanation, {
                        inlineVocab: lesson.inlineVocab,
                        onVocabClick: handleVocabClick,
                    })}
                </div>

                <VocabTooltip activeWord={activeWord} onDismiss={dismissTooltip} />

                {/* Conjugation table — verb forms only */}
                {lesson.conjugationTable && (
                    <GrammarTable heading="Conjugation" table={lesson.conjugationTable} />
                )}

                {/* Paradigm table — non-verb reference grids (possessives, articles, etc.) */}
                {lesson.paradigmTable && (
                    <GrammarTable heading="Forms" table={lesson.paradigmTable} />
                )}

                {/* Reference table — flat lookups: number strips, months, time, question words */}
                {lesson.referenceTable && (
                    <ReferenceTable table={lesson.referenceTable} />
                )}

                {/* Rules */}
                {lesson.rules && lesson.rules.length > 0 && (
                    <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-wide text-text-ter mb-3">Rules</h2>
                        <div className="flex flex-col gap-3">
                            {lesson.rules.map((rule) => (
                                <div key={rule.condition} className="bg-surface-elevated rounded-xl p-4">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-sm text-text-sec flex-1">{rule.condition}</span>
                                        <span className="text-sm font-bold text-grammar shrink-0">{rule.result}</span>
                                    </div>
                                    {rule.heuristic && (
                                        <p className="text-xs font-mono text-text-sec bg-surface-app rounded-lg px-3 py-1.5 mb-2">{rule.heuristic}</p>
                                    )}
                                    <div className="flex flex-wrap gap-1.5">
                                        {rule.examples.map((ex) => (
                                            <span key={ex.native} className="text-xs bg-grammar-surface text-grammar px-2 py-1 rounded-lg font-medium">{ex.native}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Notes */}
                {lesson.notes && lesson.notes.length > 0 && (
                    <div className="flex flex-col gap-2">
                        {lesson.notes.map((note) => {
                            const s = NOTE_STYLES[note.type]
                            return (
                                <div key={note.content} className={`rounded-xl p-4 ${s.wrapper}`}>
                                    <span className={`text-xs font-semibold uppercase tracking-wide ${s.label}`}>{s.labelText}</span>
                                    <p className="text-sm text-text-sec mt-1">
                                        {renderInline(note.content, { inlineVocab: lesson.inlineVocab, onVocabClick: handleVocabClick })}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* Fixed phrases */}
                {lesson.fixedPhrases && lesson.fixedPhrases.length > 0 && (
                    <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-wide text-text-ter mb-3">Learn as chunks</h2>
                        <div className="flex flex-col gap-3">
                            {lesson.fixedPhrases.map((phrase) => (
                                <div key={phrase.native} className="bg-surface-elevated rounded-xl p-4">
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold text-text-pri">{phrase.native}</p>
                                        <SpeakButton text={phrase.native} langId={langId} />
                                    </div>
                                    {phrase.romanized && (
                                        <p className="text-xs text-indigo-500 mt-0.5">{phrase.romanized}</p>
                                    )}
                                    <p className="text-sm text-text-sec mt-0.5">
                                        {renderInline(phrase.translation, { inlineVocab: lesson.inlineVocab, onVocabClick: handleVocabClick })}
                                    </p>
                                    {phrase.note && (
                                        <p className="text-xs text-text-ter italic mt-1">{phrase.note}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Examples */}
                {lesson.examples.length > 0 && (
                    <div className="bg-surface-card rounded-2xl border border-border-default p-5">
                        <h2 className="text-xs font-semibold uppercase tracking-wide text-text-ter mb-3">Examples</h2>
                        <div className="flex flex-col gap-3">
                            {lesson.examples.map((ex) => {
                                if (isDialogueExample(ex)) {
                                    const [a, b] = ex.exchanges
                                    return (
                                        <div key={a.native} className="bg-surface-elevated rounded-xl overflow-hidden">
                                            {/* A turn — prompt */}
                                            <div className="px-4 pt-4 pb-2 border-b border-border-default">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm text-text-sec">{a.native}</p>
                                                    <SpeakButton text={a.native} langId={langId} />
                                                </div>
                                                {a.romanized && <p className="text-xs text-indigo-400 mt-0.5">{a.romanized}</p>}
                                                <p className="text-xs text-text-ter mt-0.5">{a.translation}</p>
                                            </div>
                                            {/* B turn — response */}
                                            <div className="px-4 pt-2 pb-4">
                                                <div className="flex items-center gap-2">
                                                    <p className="font-semibold text-text-pri">{b.native}</p>
                                                    <SpeakButton text={b.native} langId={langId} />
                                                </div>
                                                {b.romanized && <p className="text-xs text-indigo-500 mt-0.5">{b.romanized}</p>}
                                                <p className="text-sm text-text-sec mt-0.5">{b.translation}</p>
                                            </div>
                                            {ex.annotation && (
                                                <p className="px-4 pb-3 text-xs text-text-ter italic -mt-2">{ex.annotation}</p>
                                            )}
                                        </div>
                                    )
                                }
                                return (
                                    <div key={ex.native} className="bg-surface-elevated rounded-xl p-4">
                                        <div className="flex items-center gap-2">
                                            <p className="font-semibold text-text-pri">{ex.native}</p>
                                            <SpeakButton text={ex.speakText ?? ex.native} langId={langId} />
                                        </div>
                                        {ex.romanized && (
                                            <p className="text-xs text-indigo-500 mt-0.5">{ex.romanized}</p>
                                        )}
                                        <p className="text-sm text-text-sec mt-0.5">{ex.translation}</p>
                                        {ex.annotation && (
                                            <p className="text-xs text-text-ter italic mt-1">{ex.annotation}</p>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Mark complete */}
                <MarkCompleteButton
                    done={isDone}
                    onClick={() => markLessonComplete(langId, lesson.id, "grammar")}
                    showDoneState
                />
            </main>
        </div>
    )
}
