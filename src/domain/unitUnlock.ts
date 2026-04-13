// domain/unitUnlock.ts — Pure unit-unlock logic with no storage dependencies.
//
// Domain rule: a unit is available when the preceding unit is mastered (and
// its checkpoint, if any, is completed). Nothing here reads from storage —
// callers pass the mastered/completed sets explicitly.

/**
 * Returns true if the unit is available to study.
 * The first unit in sorted order is always unlocked.
 * Any subsequent unit is unlocked once the immediately preceding unit is mastered.
 * Uses index-based lookup so non-contiguous `order` values (e.g. 1, 2, 4) are handled
 * correctly — there is no silent bypass when a gap exists in the ordering.
 *
 * Takes `masteredIds` as an explicit parameter so callers can pass the value
 * from React state (useProgress().mastered(langId)) rather than reading
 * from any storage layer directly. This keeps the function pure and avoids
 * hidden storage reads in domain logic.
 */
export function isUnitUnlocked(
    unitId: string,
    allUnits: { id: string; order: number; checkpointId?: string }[],
    masteredIds: readonly string[],
    /** Lang-scoped completed checkpoint IDs. When omitted, checkpoint gates are skipped. */
    completedCheckpoints?: readonly string[]
): boolean {
    const sorted = [...allUnits].sort((a, b) => a.order - b.order)
    const idx = sorted.findIndex(u => u.id === unitId)
    if (idx < 0) return false
    if (idx === 0) return true
    const prev = sorted[idx - 1]
    if (!masteredIds.includes(prev.id)) return false
    // If the preceding unit closes a block, require the checkpoint to be done.
    if (prev.checkpointId && completedCheckpoints && !completedCheckpoints.includes(prev.checkpointId)) {
        return false
    }
    return true
}
