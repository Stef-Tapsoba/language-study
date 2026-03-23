// hooks/useProgressStats.ts — Centralised progress calculation for a language at a CEFR level.
//
// Exports both:
//   computeProgressStats(langId, level) — plain function, safe to call outside React components
//   useProgressStats(langId, level)     — React hook (calls the above; same result)
//
// Both return ProgressStats. When Supabase lands, only these two change.

import { CEFRLevel } from "../types"
import { getCompletedLessons, getMasteredUnits } from "../store/progress"
import { getModule } from "../data/modules"

export interface SectionProgress {
    done: number
    total: number
    pct: number
}

export interface ProgressStats {
    grammar: SectionProgress
    vocab: SectionProgress
    verbs: SectionProgress
    reading: SectionProgress
    listening: SectionProgress
    totalDone: number
    totalItems: number
    overallPct: number
    /** Returns true if the item is done — either individually completed or part of a mastered unit. */
    isDone: (id: string) => boolean
}

/**
 * Pure function — computes content progress for langId at the given level.
 * Grammar / vocab / verbs: items that belong to a mastered unit are counted as done
 * even if not individually marked. Reading / listening: only explicit completion counts.
 */
export function computeProgressStats(langId: string, level: CEFRLevel): ProgressStats {
    const mod = getModule(langId)
    const completed = getCompletedLessons(langId)

    const masteredUnitItems = new Set(
        (mod?.units ?? [])
            .filter(u => getMasteredUnits(langId).includes(u.id))
            .flatMap(u => [...u.grammarIds, ...u.vocabIds, ...u.verbIds])
    )
    const isDone = (id: string) => completed.includes(id) || masteredUnitItems.has(id)

    function calc(items: { id: string }[], unitAware = true): SectionProgress {
        const done = items.filter(x => unitAware ? isDone(x.id) : completed.includes(x.id)).length
        const total = items.length
        return { done, total, pct: total ? done / total * 100 : 0 }
    }

    const grammar   = calc((mod?.grammar             ?? []).filter(g => g.level === level))
    const vocab     = calc((mod?.vocab               ?? []).filter(v => v.level === level))
    const verbs     = calc((mod?.verbs               ?? []).filter(v => v.level === level))
    const reading   = calc((mod?.readingPassages     ?? []).filter(r => r.level === level), false)
    const listening = calc((mod?.listeningExercises  ?? []).filter(l => l.level === level), false)

    const totalDone  = grammar.done  + vocab.done  + verbs.done  + reading.done  + listening.done
    const totalItems = grammar.total + vocab.total + verbs.total + reading.total + listening.total

    return {
        grammar, vocab, verbs, reading, listening,
        totalDone, totalItems,
        overallPct: totalItems ? Math.round(totalDone / totalItems * 100) : 0,
        isDone,
    }
}

/**
 * React hook — same as computeProgressStats but callable from components.
 * Reads from localStorage on every render (no React state subscription yet — Supabase migration
 * will move the reads inside this hook only).
 */
export function useProgressStats(langId: string, level: CEFRLevel): ProgressStats {
    return computeProgressStats(langId, level)
}
