// components/PhaseTrack.tsx — 4-phase progress indicator for a learning unit.
//
// Two variants:
//   compact — thin 3px bars with labels below (home screen unit card)
//   detail  — card cells with label + status text (unit page header)
//
// onPhaseClick is used on UnitPage for scroll-spy navigation.

export type PhaseStatus = "done" | "active" | "locked"

export interface Phase {
    label: string
    status: PhaseStatus
    /** detail variant only: "Done", "4 / 10", "Ready", "—" */
    detail?: string
}

interface PhaseTrackProps {
    phases: Phase[]
    variant?: "compact" | "detail"
    onPhaseClick?: (index: number) => void
    className?: string
}

// ── Compact variant — bars + labels ──────────────────────────────────────────

function CompactTrack({ phases, className = "" }: { phases: Phase[]; className?: string }) {
    return (
        <div className={`flex gap-1 ${className}`}>
            {phases.map((phase) => (
                <div key={phase.label} className="flex-1 flex flex-col items-center gap-1">
                    <div
                        className={[
                            "w-full h-[3px] rounded-full transition-all",
                            phase.status === "done"   ? "bg-grammar" :
                            phase.status === "active" ? "bg-grammar opacity-40" :
                            "bg-border-default",
                        ].join(" ")}
                    />
                    <span className={`text-[9px] leading-none whitespace-nowrap ${
                        phase.status === "locked" ? "text-text-ter" : "text-grammar"
                    }`}>
                        {phase.label}
                    </span>
                </div>
            ))}
        </div>
    )
}

// ── Detail variant — card cells ───────────────────────────────────────────────

function DetailTrack({
    phases,
    onPhaseClick,
    className = "",
}: {
    phases: Phase[]
    onPhaseClick?: (i: number) => void
    className?: string
}) {
    return (
        <div className={`flex gap-2 ${className}`}>
            {phases.map((phase, i) => {
                const Tag = onPhaseClick ? "button" : "div"
                return (
                    <Tag
                        key={phase.label}
                        onClick={onPhaseClick ? () => onPhaseClick(i) : undefined}
                        className={[
                            "flex-1 flex flex-col gap-0.5 px-2.5 py-2 rounded-xl border-hairline border",
                            "transition-colors",
                            onPhaseClick ? "cursor-pointer" : "",
                            phase.status === "done"   ? "bg-grammar-surface border-grammar-border" :
                            phase.status === "active" ? "bg-surface-card border-grammar" :
                            "bg-surface-card border-border-subtle opacity-40",
                        ].join(" ")}
                    >
                        <span className={`text-[9px] font-semibold uppercase tracking-wider leading-none ${
                            phase.status === "locked" ? "text-text-ter" : "text-grammar"
                        }`}>
                            {phase.label}
                        </span>
                        <span className={`text-xs font-medium leading-none ${
                            phase.status === "locked" ? "text-text-ter" : "text-text-pri"
                        }`}>
                            {phase.detail ?? "—"}
                        </span>
                    </Tag>
                )
            })}
        </div>
    )
}

// ── Public export ─────────────────────────────────────────────────────────────

export function PhaseTrack({ phases, variant = "compact", onPhaseClick, className }: Readonly<PhaseTrackProps>) {
    if (variant === "detail") {
        return <DetailTrack phases={phases} onPhaseClick={onPhaseClick} className={className} />
    }
    return <CompactTrack phases={phases} className={className} />
}

// ── Phase state computation ───────────────────────────────────────────────────

import type { LessonUnit } from "../types"
import type { UnitReinforcementState } from "../types"

/**
 * Derives the 4-phase state array for a given unit from progress data.
 * Used by UnitCard (home screen) and UnitPage (detail).
 */
export function computeUnitPhases(
    unit: LessonUnit,
    completed: ReadonlySet<string>,
    reinforcement: UnitReinforcementState,
    mastered: readonly string[]
): Phase[] {
    const hasGrammar = unit.grammarIds.length > 0
    const hasVocab   = unit.vocabIds.length > 0
    const hasVerbs   = unit.verbIds.length > 0

    const grammarRead = !hasGrammar || unit.grammarIds.every(id => completed.has(id))
    const grammarEx   = !hasGrammar || reinforcement.grammarLessonIds.length >= unit.grammarIds.length
    const grammarDone = grammarRead && grammarEx

    const vocabDone  = !hasVocab  || reinforcement.vocab === true
    const verbsDone  = !hasVerbs  || reinforcement.verbs === true
    const testDone   = mastered.includes(unit.id)

    // Active = previous phases done, this one not
    const grammarActive = !grammarDone
    const vocabActive   = grammarDone && !vocabDone && hasVocab
    const verbsActive   = grammarDone && vocabDone  && !verbsDone && hasVerbs
    const testActive    = grammarDone && vocabDone  && verbsDone  && !testDone

    const grammarDoneCount = unit.grammarIds.filter(id => completed.has(id)).length
    const vocabDoneCount   = unit.vocabIds.filter(id => completed.has(id)).length

    return [
        {
            label: "Grammar",
            status: grammarDone ? "done" : grammarActive ? "active" : "locked",
            detail: grammarDone ? "Done" : hasGrammar ? `${grammarDoneCount} / ${unit.grammarIds.length}` : "—",
        },
        {
            label: "Vocab",
            status: !hasVocab ? "locked" : vocabDone ? "done" : vocabActive ? "active" : "locked",
            detail: !hasVocab ? "—" : vocabDone ? "Done" : `${vocabDoneCount} / ${unit.vocabIds.length}`,
        },
        {
            label: "Verbs",
            status: !hasVerbs ? "locked" : verbsDone ? "done" : verbsActive ? "active" : "locked",
            detail: !hasVerbs ? "—" : verbsDone ? "Done" : verbsActive ? "In progress" : "—",
        },
        {
            label: "Test",
            status: testDone ? "done" : testActive ? "active" : "locked",
            detail: testDone ? "Done" : testActive ? "Ready" : "—",
        },
    ]
}
