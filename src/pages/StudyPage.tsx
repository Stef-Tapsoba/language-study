// pages/StudyPage.tsx — Study hub at /learn/:langId/study
// Rendered inside AppLayout. Shows all content-type cards (grammar, vocab,
// verbs, reading, listening, culture) with progress for the current level.

import { memo } from "react"
import { useParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { useProgress } from "../context/ProgressContext"
import { useProgressStats } from "../hooks/useProgressStats"
import { getUI } from "../i18n"
import { SECTION_CONFIG, type StudySection } from "../data/sectionConfig"

// ── Study card ────────────────────────────────────────────────────────────────

const StudyCard = memo(function StudyCard({ section, title, countDesc, done, total, to }: Readonly<{
    section: StudySection
    title: string
    countDesc: string
    done?: number
    total?: number
    to: string
}>) {
    const c = SECTION_CONFIG[section]
    const pct = done !== undefined && total ? done / total * 100 : 0

    return (
        <Link
            to={to}
            aria-label={done !== undefined && total !== undefined ? `${title} — ${done} of ${total} complete` : title}
            className="bg-surface-card border-hairline border border-border-subtle rounded-2xl overflow-hidden flex flex-col hover:bg-surface-elevated transition-colors"
        >
            {/* Colour accent bar using existing gradient classes from SECTION_CONFIG */}
            <div className={`h-1 ${c.gradient}`} />
            <div className="p-4 flex flex-col gap-2 flex-1">
                <div className={`w-9 h-9 rounded-xl ${c.iconBg} flex items-center justify-center text-xl leading-none`}>
                    {c.emoji}
                </div>
                <p className="font-semibold text-text-pri text-sm">{title}</p>
                <p className={`text-xs font-medium ${c.iconText}`}>{countDesc}</p>
                {done !== undefined && total !== undefined && total > 0 && (
                    <div className="mt-1">
                        <p className="text-[10px] text-text-ter mb-1">{done} of {total} complete</p>
                        <div className="h-1 bg-border-subtle rounded-full overflow-hidden">
                            <div
                                className={`h-full ${c.gradient} rounded-full transition-[width] duration-700 ease-out`}
                                style={{ width: `${pct}%` }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </Link>
    )
})

// ── Page ──────────────────────────────────────────────────────────────────────

export function StudyPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const { level: getLevel } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)
    const { grammar, vocab, verbs, reading, listening } = useProgressStats(langId, level)

    if (!language) return null

    return (
        <div className="max-w-2xl mx-auto px-4 py-6">
            <div className="mb-5">
                <h1 className="text-lg font-semibold text-text-pri">Study</h1>
                <p className="text-xs text-text-sec mt-0.5">{language.name} · {level}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <StudyCard
                    section="grammar"
                    title={ui.sectionGrammar}
                    countDesc={`${grammar.total} lessons`}
                    done={grammar.done}
                    total={grammar.total}
                    to={`/learn/${langId}/grammar`}
                />
                <StudyCard
                    section="vocab"
                    title={ui.sectionVocab}
                    countDesc={`${vocab.total} words`}
                    done={vocab.done}
                    total={vocab.total}
                    to={`/learn/${langId}/vocab`}
                />
                <StudyCard
                    section="verbs"
                    title={ui.sectionVerbs}
                    countDesc={`${verbs.total} verbs`}
                    done={verbs.done}
                    total={verbs.total}
                    to={`/learn/${langId}/verbs`}
                />
                {reading.total > 0 && (
                    <StudyCard
                        section="reading"
                        title={ui.sectionReading}
                        countDesc={`${reading.total} passages`}
                        done={reading.done}
                        total={reading.total}
                        to={`/learn/${langId}/reading`}
                    />
                )}
                {listening.total > 0 && (
                    <StudyCard
                        section="listening"
                        title={ui.sectionListening}
                        countDesc={`${listening.total} exercises`}
                        done={listening.done}
                        total={listening.total}
                        to={`/learn/${langId}/listening`}
                    />
                )}
                <StudyCard
                    section="culture"
                    title={ui.sectionCulture}
                    countDesc={ui.sectionCultureDesc}
                    to={`/learn/${langId}/culture`}
                />
            </div>
        </div>
    )
}
