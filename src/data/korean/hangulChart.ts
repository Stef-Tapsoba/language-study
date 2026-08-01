// data/korean/hangulChart.ts — Compound vowels reference.
// The 19 basic/tense consonants × 10 basic vowels are covered combinatorially
// by the syllable grid in syllableGrid.ts. Compound vowels (ㅐ, ㅘ, etc.) don't
// combine into that grid — they're listed here standalone for quick lookup.

export interface CompoundVowel {
    char: string
    romanized: string
    example: {
        word: string
        romanized: string
        translation: string
    }
}

export const compoundVowels: CompoundVowel[] = [
    { char: "ㅐ", romanized: "ae", example: { word: "배", romanized: "bae", translation: "pear / boat / stomach" } },
    { char: "ㅒ", romanized: "yae", example: { word: "얘기", romanized: "yae-gi", translation: "talk / story (casual)" } },
    { char: "ㅔ", romanized: "e", example: { word: "게", romanized: "ge", translation: "crab" } },
    { char: "ㅖ", romanized: "ye", example: { word: "시계", romanized: "si-gye", translation: "clock" } },
    { char: "ㅘ", romanized: "wa", example: { word: "사과", romanized: "sa-gwa", translation: "apple" } },
    { char: "ㅙ", romanized: "wae", example: { word: "왜", romanized: "wae", translation: "why" } },
    { char: "ㅚ", romanized: "oe", example: { word: "회사", romanized: "hoe-sa", translation: "company" } },
    { char: "ㅝ", romanized: "wo", example: { word: "뭐", romanized: "mwo", translation: "what" } },
    { char: "ㅞ", romanized: "we", example: { word: "웨딩", romanized: "we-ding", translation: "wedding" } },
    { char: "ㅟ", romanized: "wi", example: { word: "위", romanized: "wi", translation: "above / stomach" } },
    { char: "ㅢ", romanized: "ui", example: { word: "의사", romanized: "ui-sa", translation: "doctor" } },
]
