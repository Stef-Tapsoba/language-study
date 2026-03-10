// utils/answerMatch.ts — loose string comparison for typed flashcard answer checking
export function answerMatches(input: string, target: string): boolean {
    const normalize = (s: string) =>
        s.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return normalize(input) === normalize(target)
}
