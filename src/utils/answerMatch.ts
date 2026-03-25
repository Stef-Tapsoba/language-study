// utils/answerMatch.ts — loose string comparison for typed flashcard answer checking
export function answerMatches(input: string, target: string): boolean {
    const normalize = (s: string) =>
        s.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, "")

    console.log("Comparing user input '%s' to target '%s'", normalize(input), normalize(target))
    return normalize(input) === normalize(target)
}
