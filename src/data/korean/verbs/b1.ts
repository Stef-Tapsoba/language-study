// Korean B1 verbs
// data/korean/verbs/b1.ts
import { Verb } from "../../../types"

// B1 verbs — verbs used in more complex sentences with conditionals and connectors.

export const b1Verbs: Verb[] = [
    {
        id: "ko-vb-b1-1",
        level: "B1",
        infinitive: "생각하다",
        romanized: "saenggakhada",
        meaning: "to think",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "생각해요", romanized: "saenggakhaeyo" },
                    { pronoun: "Negative", form: "생각 안 해요", romanized: "saenggak an haeyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "생각했어요", romanized: "saenggakhaesseoyo" },
                    { pronoun: "Negative", form: "생각 안 했어요", romanized: "saenggak an haesseoyo" }
                ]
            },
            {
                tense: "Conditional (~으면)",
                forms: [
                    { pronoun: "if/when", form: "생각하면", romanized: "saenggakhamyeon" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-b1-2",
        level: "B1",
        infinitive: "사용하다",
        romanized: "sayonghada",
        meaning: "to use",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "사용해요", romanized: "sayonghaeyo" },
                    { pronoun: "Negative", form: "사용 안 해요", romanized: "sayong an haeyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "사용했어요", romanized: "sayonghaesseoyo" },
                    { pronoun: "Negative", form: "사용 안 했어요", romanized: "sayong an haesseoyo" }
                ]
            },
            {
                tense: "Conditional (~으면)",
                forms: [
                    { pronoun: "if/when", form: "사용하면", romanized: "sayonghamyeon" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-b1-3",
        level: "B1",
        infinitive: "읽다",
        romanized: "ikda",
        meaning: "to read",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "읽어요", romanized: "ilgeoyo" },
                    { pronoun: "Negative", form: "안 읽어요", romanized: "an ilgeoyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "읽었어요", romanized: "ilgeosseoyo" },
                    { pronoun: "Negative", form: "안 읽었어요", romanized: "an ilgeosseoyo" }
                ]
            },
            {
                tense: "Conditional (~으면)",
                forms: [
                    { pronoun: "if/when", form: "읽으면", romanized: "ilgeumyeon" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-b1-4",
        level: "B1",
        infinitive: "시작하다",
        romanized: "sijakhada",
        meaning: "to start / to begin",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "시작해요", romanized: "sijakhaeyo" },
                    { pronoun: "Negative", form: "시작 안 해요", romanized: "sijak an haeyo" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "시작했어요", romanized: "sijakhaesseoyo" },
                    { pronoun: "Negative", form: "시작 안 했어요", romanized: "sijak an haesseoyo" }
                ]
            },
            {
                tense: "Conditional (~으면)",
                forms: [
                    { pronoun: "if/when", form: "시작하면", romanized: "sijaghamyeon" }
                ]
            }
        ]
    }
]
