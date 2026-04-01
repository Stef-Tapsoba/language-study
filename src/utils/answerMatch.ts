// utils/answerMatch.ts — typed answer evaluation for language learning exercises
//
// Modes:
//   "loose"     — flashcards, vocab typing, translation sprint (English target)
//                 strips parenthetical qualifiers and splits slash-separated alternatives
//   "strict"    — grammar fill-in, cloze in target language
//                 splits slash-separated alternatives but keeps parentheticals intact
//   "dictation" — typed reproduction of TTS audio
//                 no splitting, no stripping; only accent/case/punctuation tolerance
//
// Authoring conventions in data files (enforced by this utility):
//   - Use " / " (space-slash-space) to separate alternative translations  e.g. "Hello / Good morning"
//   - Use (...) for register or context qualifiers that should not be required in answers
//     e.g. "Please (formal)", "Goodbye (to person leaving)"

export type MatchMode = "loose" | "strict" | "dictation"

function normalize(s: string): string {
    return s
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replaceAll(/[\u0300-\u036f]/g, "")     // strip combining diacritics
        .replaceAll(/[-\u2010-\u2015]/g, " ")   // convert hyphens/dashes to spaces
        .replaceAll(/[^\p{L}\p{N}\s]/gu, "")    // strip all remaining non-letter/digit/space
        .replaceAll(/\s+/g, " ")                 // collapse internal whitespace
        .trim()
}

/** Remove parenthetical qualifiers: "Please (formal)" → "Please" */
function stripParentheticals(s: string): string {
    return s.replaceAll(/\s*\([^)]*\)/g, "").trim()
}

/** Expand " / "-separated alternatives: "Hello / Good morning" → ["Hello", "Good morning"] */
function splitAlternatives(s: string): string[] {
    return s.split(" / ").map(p => p.trim()).filter(Boolean)
}

export function answerMatches(
    input: string,
    target: string | string[],
    mode: MatchMode = "loose"
): boolean {
    const normInput = normalize(input)
    const targets = Array.isArray(target) ? target : [target]

    const candidates = targets.flatMap(t => {
        switch (mode) {
            case "loose":
                // Strip parentheticals first, then expand slash alternatives
                return splitAlternatives(stripParentheticals(t))
            case "strict":
                // Expand slash alternatives but keep parentheticals
                return splitAlternatives(t)
            case "dictation":
                // Single exact target — no expansion, no stripping
                return [t]
        }
    })

    return candidates.some(c => normalize(c) === normInput)
}
