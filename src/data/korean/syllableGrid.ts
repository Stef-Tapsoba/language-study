// data/korean/syllableGrid.ts — Full consonant × vowel syllable-block chart.
// 19 initial consonants (14 basic + 5 tense) × 10 basic vowels = 190 open
// syllable blocks (no 받침), generated from the Unicode Hangul composition
// formula so every cell is guaranteed correct.
//
// Hangul syllable codepoint = 0xAC00 + (choseongIndex * 21 + jungseongIndex) * 28 + jongseongIndex
// (jongseongIndex is 0 for "no final consonant" — the open syllables shown here.)

export interface SyllableConsonant {
    char: string
    /** Romanization used when this consonant starts a syllable. Empty string for ㅇ (silent). */
    romanized: string
    tense: boolean
}

export interface SyllableVowel {
    char: string
    romanized: string
}

// Order matches Unicode choseong (initial consonant) index 0–18.
export const SYLLABLE_CONSONANTS: SyllableConsonant[] = [
    { char: "ㄱ", romanized: "g", tense: false },
    { char: "ㄲ", romanized: "kk", tense: true },
    { char: "ㄴ", romanized: "n", tense: false },
    { char: "ㄷ", romanized: "d", tense: false },
    { char: "ㄸ", romanized: "tt", tense: true },
    { char: "ㄹ", romanized: "r", tense: false },
    { char: "ㅁ", romanized: "m", tense: false },
    { char: "ㅂ", romanized: "b", tense: false },
    { char: "ㅃ", romanized: "pp", tense: true },
    { char: "ㅅ", romanized: "s", tense: false },
    { char: "ㅆ", romanized: "ss", tense: true },
    { char: "ㅇ", romanized: "", tense: false },
    { char: "ㅈ", romanized: "j", tense: false },
    { char: "ㅉ", romanized: "jj", tense: true },
    { char: "ㅊ", romanized: "ch", tense: false },
    { char: "ㅋ", romanized: "k", tense: false },
    { char: "ㅌ", romanized: "t", tense: false },
    { char: "ㅍ", romanized: "p", tense: false },
    { char: "ㅎ", romanized: "h", tense: false },
]

// The 10 basic vowels, each paired with its Unicode jungseong (medial vowel) index.
export const SYLLABLE_VOWELS: (SyllableVowel & { jungIndex: number })[] = [
    { char: "ㅏ", romanized: "a", jungIndex: 0 },
    { char: "ㅑ", romanized: "ya", jungIndex: 2 },
    { char: "ㅓ", romanized: "eo", jungIndex: 4 },
    { char: "ㅕ", romanized: "yeo", jungIndex: 6 },
    { char: "ㅗ", romanized: "o", jungIndex: 8 },
    { char: "ㅛ", romanized: "yo", jungIndex: 12 },
    { char: "ㅜ", romanized: "u", jungIndex: 13 },
    { char: "ㅠ", romanized: "yu", jungIndex: 17 },
    { char: "ㅡ", romanized: "eu", jungIndex: 18 },
    { char: "ㅣ", romanized: "i", jungIndex: 20 },
]

export interface SyllableCell {
    char: string
    romanized: string
}

/** 19 rows (consonants) × 10 columns (vowels), in the order of SYLLABLE_CONSONANTS / SYLLABLE_VOWELS. */
export const syllableGrid: SyllableCell[][] = SYLLABLE_CONSONANTS.map((cons, choIndex) =>
    SYLLABLE_VOWELS.map(vowel => {
        const codepoint = 0xAC00 + (choIndex * 21 + vowel.jungIndex) * 28
        return {
            char: String.fromCodePoint(codepoint),
            romanized: `${cons.romanized}${vowel.romanized}`,
        }
    })
)
