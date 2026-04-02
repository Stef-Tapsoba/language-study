// utils/logger.ts — Centralised error logging.
//
// Stage 1: delegates to console.error with a context prefix.
// Stage 2: swap the body for Sentry.captureException() or a structured
//          logging service without touching any call sites.
//
// Usage:
//   someAction().catch(err => logError("ExerciseShell.completeLessonItem", err))

export function logError(context: string, error: unknown): void {
    // eslint-disable-next-line no-console
    console.error(`[${context}]`, error)
    // Stage 2: Sentry.captureException(error, { extra: { context } })
}
