import { Verb } from "../../../types"

// A2 verbs — expanded action verbs including seeing, speaking, writing, knowing.
// 오다 moved to A1 as it pairs naturally with 가다.
// 알다 moved here from B1 (it is high-frequency and needed for A2 conversations).

export const a2Verbs: Verb[] = [
    {
        id: "ko-vb-a2-1",
        level: "A2",
        infinitive: "보다",
        romanized: "boda",
        meaning: "to see / to watch / to look",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "봐요", romanized: "bwayo" },
                    { pronoun: "Negative", form: "안 봐요", romanized: "an bwayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "봤어요", romanized: "bwasseoyo" },
                    { pronoun: "Negative", form: "안 봤어요", romanized: "an bwasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a2-2",
        level: "A2",
        infinitive: "말하다",
        romanized: "malhada",
        meaning: "to speak / to say / to tell",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "말해요", romanized: "malhaeyo" },
                    { pronoun: "Negative", form: "안 말해요", romanized: "an malhaeyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "말했어요", romanized: "malhaesseoyo" },
                    { pronoun: "Negative", form: "안 말했어요", romanized: "an malhaesseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a2-3",
        level: "A2",
        infinitive: "쓰다",
        romanized: "sseuda",
        meaning: "to write / to use",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "써요", romanized: "sseoyo" },
                    { pronoun: "Negative", form: "안 써요", romanized: "an sseoyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "썼어요", romanized: "sseosseoyo" },
                    { pronoun: "Negative", form: "안 썼어요", romanized: "an sseosseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a2-4",
        level: "A2",
        infinitive: "알다",
        romanized: "alda",
        meaning: "to know (a fact / information)",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "알아요", romanized: "arayo" },
                    { pronoun: "Negative (→ 모르다)", form: "몰라요", romanized: "mollayo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "알았어요", romanized: "arasseoyo" },
                    { pronoun: "Negative", form: "몰랐어요", romanized: "mollasseoyo" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-a2-5",
        level: "A2",
        infinitive: "피곤하다",
        meaning: "to be tired",
        conjugations: [
            {
                tense: "Present Polite (해요체)",
                forms: [
                    { pronoun: "polite", form: "피곤해요" },
                    { pronoun: "informal (반말)", form: "피곤해" },
                    { pronoun: "negative polite", form: "피곤하지 않아요" },
                ]
            },
            {
                tense: "Past Polite",
                forms: [
                    { pronoun: "polite past", form: "피곤했어요" },
                    { pronoun: "informal past", form: "피곤했어" },
                ]
            },
            {
                tense: "-아/어서 form (cause)",
                forms: [
                    { pronoun: "connective", form: "피곤해서" },
                    { pronoun: "example", form: "피곤해서 잤어요 (I was tired so I slept)" },
                ]
            }
        ]
    },
    {
        id: "ko-vb-a2-6",
        level: "A2",
        infinitive: "생각하다",
        meaning: "to think / to believe",
        conjugations: [
            {
                tense: "Present Polite (해요체)",
                forms: [
                    { pronoun: "polite", form: "생각해요" },
                    { pronoun: "informal (반말)", form: "생각해" },
                    { pronoun: "negative polite", form: "생각하지 않아요" },
                ]
            },
            {
                tense: "Past Polite",
                forms: [
                    { pronoun: "polite past", form: "생각했어요" },
                    { pronoun: "informal past", form: "생각했어" },
                ]
            },
            {
                tense: "Opinion pattern",
                forms: [
                    { pronoun: "I think that ~", form: "~(이)라고 생각해요" },
                    { pronoun: "In my opinion", form: "제 생각에는 ~" },
                ]
            }
        ]
    },
]
