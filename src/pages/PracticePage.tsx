// pages/PracticePage.tsx — Practice mode hub at /learn/:langId/practice
// Rendered inside AppLayout (sidebar/bottom nav provided — no NavBar here).

import { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getDueCount } from "../store/srs"
import { useProgress } from "../context/ProgressContext"

interface PracticeModeProps {
    emoji: string
    title: string
    description: string
    href: string
    badge?: string
    badgeColor?: string
}

function PracticeCard({ emoji, title, description, href, badge, badgeColor = "text-verbs" }: Readonly<PracticeModeProps>) {
    return (
        <Link
            to={href}
            className="bg-surface-card border-hairline border border-border-subtle rounded-2xl p-4 flex flex-col gap-2 hover:bg-surface-elevated hover:border-border-default transition-colors"
        >
            <div className="flex items-start justify-between">
                <span className="text-2xl">{emoji}</span>
                {badge && (
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface-inset ${badgeColor}`}>
                        {badge}
                    </span>
                )}
            </div>
            <p className="text-sm font-semibold text-text-pri leading-tight">{title}</p>
            <p className="text-xs text-text-sec leading-relaxed">{description}</p>
        </Link>
    )
}

export function PracticePage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const { level: getLevel } = useProgress()
    const level = getLevel(langId)

    const dueCount = useMemo(
        () => mod ? getDueCount(langId, mod.vocab.filter(v => v.level === level).map(v => v.id)) : 0,
        [langId, mod, level]
    )

    if (!language) return null

    const dueBadge = dueCount > 0 ? `${dueCount} due` : undefined
    const isNonLatin = language.script !== "latin"

    return (
        <div className="max-w-2xl mx-auto px-4 py-6">
            <div className="mb-5">
                <h1 className="text-lg font-semibold text-text-pri">Practice</h1>
                <p className="text-xs text-text-sec mt-0.5">Choose a mode to practise</p>
            </div>

            {/* SRS-based */}
            <p className="text-[10px] text-text-ter uppercase tracking-widest mb-2">Spaced repetition</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <PracticeCard
                    emoji="🃏"
                    title="Flashcards"
                    description="Review vocab with SRS-scheduled spaced repetition"
                    href={`/learn/${langId}/flashcards`}
                    badge={dueBadge}
                    badgeColor="text-verbs"
                />
            </div>

            {/* Drills */}
            <p className="text-[10px] text-text-ter uppercase tracking-widest mb-2">Drills</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <PracticeCard emoji="🔡" title="Verb Drill"     description="Conjugate verbs in context"                    href={`/learn/${langId}/verb-drill`} />
                <PracticeCard emoji="✏️" title="Grammar Drill"  description="Answer grammar questions at your level"         href={`/learn/${langId}/grammar-drill`} />
                <PracticeCard emoji="🔀" title="Sentence Scramble" description="Put shuffled words back in the right order" href={`/learn/${langId}/exercise/sentence-scramble`} />
                <PracticeCard emoji="🎯" title="Vocab Matching"  description="Match words with their translations"           href={`/learn/${langId}/exercise/vocab-matching`} />
                <PracticeCard emoji="📖" title="Cloze"           description="Fill in the missing word from a passage"       href={`/learn/${langId}/exercise/cloze`} />
                <PracticeCard emoji="🎧" title="Dictation"       description="Listen and type what you hear"                 href={`/learn/${langId}/exercise/dictation`} />
                <PracticeCard emoji="💬" title="Dialogue Completion" description="Choose the missing line in a conversation" href={`/learn/${langId}/exercise/dialogue-completion`} />
                <PracticeCard emoji="🔍" title="Vocab in Context" description="Guess meaning from a passage"                href={`/learn/${langId}/exercise/vocab-in-context`} />
                <PracticeCard emoji="🔧" title="Error Correction" description="Find and fix the grammar mistake"            href={`/learn/${langId}/exercise/error-correction`} />
                <PracticeCard emoji="🎤" title="Speaking"         description="Hear a phrase, then say it aloud"             href={`/learn/${langId}/exercise/speaking`} />
                {isNonLatin && (
                    <PracticeCard emoji="🈳" title="Script Reading" description="Identify the correct reading of a word"    href={`/learn/${langId}/exercise/script-reading`} />
                )}
            </div>
        </div>
    )
}
