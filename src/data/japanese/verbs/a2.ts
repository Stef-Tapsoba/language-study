import { Verb } from "../../../types"

export const a2Verbs: Verb[] = [
    {
        id: "ja-vb-a2-1",
        level: "A2",
        infinitive: "聞く",
        romanized: "kiku",
        meaning: "to listen / to ask / to hear",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "聞きます", romanized: "kikimasu" },
                    { pronoun: "Negative", form: "聞きません", romanized: "kikimasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "聞きました", romanized: "kikimashita" },
                    { pronoun: "Negative", form: "聞きませんでした", romanized: "kikimasen deshita" }
                ]
            },
            {
                tense: "Te-form",
                forms: [
                    { pronoun: "て-form", form: "聞いて", romanized: "kiite" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-a2-2",
        level: "A2",
        infinitive: "買う",
        romanized: "kau",
        meaning: "to buy",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "買います", romanized: "kaimasu" },
                    { pronoun: "Negative", form: "買いません", romanized: "kaimasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "買いました", romanized: "kaimashita" },
                    { pronoun: "Negative", form: "買いませんでした", romanized: "kaimasen deshita" }
                ]
            },
            {
                tense: "Te-form",
                forms: [
                    { pronoun: "て-form", form: "買って", romanized: "katte" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-a2-3",
        level: "A2",
        infinitive: "帰る",
        romanized: "kaeru",
        meaning: "to return home / to go back",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "帰ります", romanized: "kaerimasu" },
                    { pronoun: "Negative", form: "帰りません", romanized: "kaerimasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "帰りました", romanized: "kaerimashita" },
                    { pronoun: "Negative", form: "帰りませんでした", romanized: "kaerimasen deshita" }
                ]
            },
            {
                tense: "Te-form",
                forms: [
                    { pronoun: "て-form", form: "帰って", romanized: "kaette" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-a2-4",
        level: "A2",
        infinitive: "起きる",
        romanized: "okiru",
        meaning: "to wake up / to get up",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "起きます", romanized: "okimasu" },
                    { pronoun: "Negative", form: "起きません", romanized: "okimasen" }
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "起きました", romanized: "okimashita" },
                    { pronoun: "Negative", form: "起きませんでした", romanized: "okimasen deshita" }
                ]
            },
            {
                tense: "Te-form",
                forms: [
                    { pronoun: "て-form", form: "起きて", romanized: "okite" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-a2-5",
        level: "A2",
        infinitive: "あげる",
        meaning: "to give (away from speaker)",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "plain", form: "あげる" },
                    { pronoun: "polite", form: "あげます" },
                    { pronoun: "negative polite", form: "あげません" },
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "plain past", form: "あげた" },
                    { pronoun: "polite past", form: "あげました" },
                    { pronoun: "negative past", form: "あげませんでした" },
                ]
            },
            {
                tense: "て-form",
                forms: [
                    { pronoun: "て-form", form: "あげて" },
                    { pronoun: "progressive", form: "あげています" },
                ]
            }
        ]
    },
    {
        id: "ja-vb-a2-6",
        level: "A2",
        infinitive: "待つ",
        meaning: "to wait",
        conjugations: [
            {
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "polite", form: "待ちます" },
                    { pronoun: "negative polite", form: "待ちません" },
                    { pronoun: "plain", form: "待つ" },
                ]
            },
            {
                tense: "て-form & Requests",
                forms: [
                    { pronoun: "て-form", form: "待って" },
                    { pronoun: "〜てください", form: "待ってください" },
                    { pronoun: "〜てくれませんか", form: "待ってくれませんか？" },
                    { pronoun: "〜ていただけませんか", form: "待っていただけませんか？" },
                ]
            },
            {
                tense: "Past (Polite)",
                forms: [
                    { pronoun: "polite past", form: "待ちました" },
                    { pronoun: "negative past", form: "待ちませんでした" },
                ]
            }
        ]
    },
]
