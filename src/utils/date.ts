// utils/date.ts — Shared local-calendar-day date helper.
//
// `.toISOString()` alone converts to UTC first. For anyone west of Greenwich
// (all of the Americas), the local calendar day doesn't line up with the UTC
// calendar day — studying, completing a unit, or dismissing a review prompt
// near local midnight can land on the "wrong" UTC date relative to what the
// user experiences as today. Every day-key comparison in this app (streaks,
// plateau detection, break detection, unit-mastery dates, etc.) should use
// this instead of `new Date().toISOString().slice(0, 10)` directly.

/** YYYY-MM-DD for a date in the user's LOCAL calendar day — not UTC. */
export function localDateStr(d: Date = new Date()): string {
    const tzOffsetMs = d.getTimezoneOffset() * 60_000
    return new Date(d.getTime() - tzOffsetMs).toISOString().slice(0, 10)
}
