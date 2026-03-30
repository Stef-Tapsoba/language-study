// utils/answerMatch.ts — loose string comparison for typed flashcard answer checking
export function answerMatches(input: string, target: string | string[]): boolean {
    const normalize = (s: string) =>
        s.trim().toLowerCase().normalize("NFD")
            .replaceAll(/[\u0300-\u036f]/g, "")     // strip combining diacritics
            .replaceAll(/[-\u2010-\u2015]/g, " ")   // convert hyphens/dashes to spaces
            .replaceAll(/[^\p{L}\p{N}\s]/gu, "")    // strip all remaining non-letter/digit/space punctuation
            .replaceAll(/\s+/g, " ")                 // collapse internal whitespace
            .trim()

    const normInput = normalize(input)
    const targets = Array.isArray(target) ? target : [target]
    return targets.some(t => normalize(t) === normInput)
}
