// domain/unitGating.ts — Drill content gating by unit progression.
//
// Drills only draw on content the learner has plausibly seen: the first unit
// of a level is always unlocked, and each subsequent unit unlocks once the
// previous one is mastered.
//
// NOTE: deliberately simpler than domain/unitUnlock.ts isUnitUnlocked(), which
// is checkpoint-aware and drives the learning-path UI. This rule reproduces
// the drills' historical behavior — do not merge the two.

import type { LessonUnit } from "../types"

/**
 * Collect content ids from all unlocked units.
 *
 * @param units       Units of the level, in path order (as returned by getUnitsForLevel)
 * @param masteredIds Unit ids the learner has mastered
 * @param pick        Extracts the relevant content ids from a unit (e.g. u => u.verbIds)
 */
export function getUnlockedContentIds(
    units: LessonUnit[],
    masteredIds: string[],
    pick: (unit: LessonUnit) => string[]
): Set<string> {
    return new Set(
        units
            .filter((_, i) => i === 0 || masteredIds.includes(units[i - 1].id))
            .flatMap(pick)
    )
}
