// store/stats.ts — Daily review history and global streak (localStorage "ls:stats")

type DayStats = {
    reviewed: number    // flashcard cards reviewed
    correct: number     // flashcard correct answers
    acts: number        // any study action (lessons, reading, listening, etc.)
    qTotal: number      // quiz answers across all activity types
    qCorrect: number    // correct quiz answers across all activity types
}
type StatsStore = Record<string, Record<string, DayStats>>
// StatsStore[langId]["2026-03-09"] = { reviewed: 5, correct: 4, acts: 7, qTotal: 10, qCorrect: 8 }

function todayStr(): string { return new Date().toISOString().slice(0, 10) }
function load(): StatsStore { return JSON.parse(localStorage.getItem("ls:stats") ?? "{}") }
function save(s: StatsStore): void { localStorage.setItem("ls:stats", JSON.stringify(s)) }

function ensureDay(s: StatsStore, langId: string, d: string): DayStats {
    s[langId] ??= {}
    s[langId][d] ??= { reviewed: 0, correct: 0, acts: 0, qTotal: 0, qCorrect: 0 }
    // backfill missing fields for entries written by older app versions
    const day = s[langId][d]
    day.acts ??= 0
    day.qTotal ??= 0
    day.qCorrect ??= 0
    return day
}

/** Record one flashcard result for a language */
export function recordReview(langId: string, correct: boolean): void {
    const s = load()
    const d = todayStr()
    const day = ensureDay(s, langId, d)
    day.reviewed++
    day.acts++
    day.qTotal++
    if (correct) { day.correct++; day.qCorrect++ }
    save(s)
}

/** Record a quiz answer from any non-flashcard activity (reading, listening, unit test) */
export function recordQuizAnswer(langId: string, correct: boolean): void {
    const s = load()
    const d = todayStr()
    const day = ensureDay(s, langId, d)
    day.acts++
    day.qTotal++
    if (correct) day.qCorrect++
    save(s)
}

/** Record any study activity that doesn't produce a quiz result (lesson completion, marking listened, etc.) */
export function recordActivity(langId: string): void {
    const s = load()
    const d = todayStr()
    const day = ensureDay(s, langId, d)
    day.acts++
    save(s)
}

/** Get the last `days` calendar days of stats for a language (oldest first), padded with zeros */
export function getHistory(langId: string, days = 14): Array<{ date: string; reviewed: number; correct: number }> {
    const store = load()[langId] ?? {}
    return Array.from({ length: days }, (_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - (days - 1 - i))
        const date = d.toISOString().slice(0, 10)
        const { reviewed = 0, correct = 0 } = store[date] ?? {}
        return { date, reviewed, correct }
    })
}

/**
 * Global streak: consecutive calendar days (including today if studied) with at least
 * one activity in ANY language. Walking back from today, stop at first day with no activity.
 */
export function getGlobalStreak(): number {
    const store = load()
    let streak = 0
    const d = new Date()
    for (let i = 0; i < 365; i++) {
        const dateStr = d.toISOString().slice(0, 10)
        const hasActivity = Object.values(store).some(langDays => {
            const day = langDays[dateStr]
            if (!day) return false
            return (day.acts ?? 0) + (day.reviewed ?? 0) > 0
        })
        if (!hasActivity) break
        streak++
        d.setDate(d.getDate() - 1)
    }
    return streak
}

/** Overall accuracy across all quiz types for the last `days` days */
export function getOverallAccuracy(langId: string, days = 14): number {
    const store = load()[langId] ?? {}
    let total = 0
    let correct = 0
    Array.from({ length: days }, (_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - (days - 1 - i))
        return d.toISOString().slice(0, 10)
    }).forEach(date => {
        const day = store[date]
        if (!day) return
        total += day.qTotal ?? day.reviewed ?? 0
        correct += day.qCorrect ?? day.correct ?? 0
    })
    return total ? Math.round(correct / total * 100) : 0
}

/** Total reviews ever for a language */
export function getTotalReviews(langId: string): number {
    const store = load()[langId] ?? {}
    return Object.values(store).reduce((sum, day) => sum + day.reviewed, 0)
}

/** Clear per-language history (called on language reset). Global streak stays intact. */
export function resetStats(langId: string): void {
    const s = load()
    delete s[langId]
    save(s)
}
