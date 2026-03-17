import { Verb } from "../../../types"

export const b2Verbs: Verb[] = [
    {
        id: "ja-vb-b2-1",
        level: "B2",
        infinitive: "できる",
        romanized: "dekiru",
        meaning: "to be able to / can",
        conjugations: [
            {
                tense: "Plain",
                forms: [
                    { pronoun: "plain", form: "できる", romanized: "dekiru" }
                ]
            },
            {
                tense: "Polite",
                forms: [
                    { pronoun: "polite-aff", form: "できます", romanized: "dekimasu" },
                    { pronoun: "polite-neg", form: "できません", romanized: "dekimasen" }
                ]
            },
            {
                tense: "Negative",
                forms: [
                    { pronoun: "plain-neg", form: "できない", romanized: "dekinai" }
                ]
            },
            {
                tense: "て-form",
                forms: [
                    { pronoun: "te-form", form: "できて", romanized: "dekite" }
                ]
            },
            {
                tense: "Causative-Passive",
                forms: [
                    { pronoun: "causative-passive", form: "できさせられる", romanized: "dekisaserareru" }
                ]
            },
            {
                tense: "Keigo",
                forms: [
                    { pronoun: "respectful", form: "おできになる", romanized: "o-deki-ni-naru" },
                    { pronoun: "humble", form: "いたすことができる", romanized: "itasu koto ga dekiru" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-b2-2",
        level: "B2",
        infinitive: "なる",
        romanized: "naru",
        meaning: "to become",
        conjugations: [
            {
                tense: "Causative-Passive",
                forms: [
                    { pronoun: "causative-passive", form: "ならされる", romanized: "narasareru" }
                ]
            },
            {
                tense: "Conditional (ば)",
                forms: [
                    { pronoun: "conditional-ba", form: "なれば", romanized: "nareba" }
                ]
            },
            {
                tense: "Conditional (たら)",
                forms: [
                    { pronoun: "conditional-tara", form: "なったら", romanized: "nattara" }
                ]
            },
            {
                tense: "Negative Conditional",
                forms: [
                    { pronoun: "neg-conditional", form: "ならなければ", romanized: "naranakere-ba" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-b2-3",
        level: "B2",
        infinitive: "する",
        romanized: "suru",
        meaning: "to do",
        conjugations: [
            {
                tense: "Passive",
                forms: [
                    { pronoun: "passive", form: "される", romanized: "sareru" }
                ]
            },
            {
                tense: "Causative",
                forms: [
                    { pronoun: "causative", form: "させる", romanized: "saseru" }
                ]
            },
            {
                tense: "Causative-Passive",
                forms: [
                    { pronoun: "causative-passive", form: "させられる", romanized: "saserareru" }
                ]
            },
            {
                tense: "Keigo (Respectful)",
                forms: [
                    { pronoun: "respectful", form: "なさる", romanized: "nasaru" }
                ]
            }
        ]
    },
    {
        id: "ja-vb-b2-4",
        level: "B2",
        infinitive: "する",
        meaning: "to do",
        conjugations: [
            {
                tense: "Formal Written Forms",
                forms: [
                    { pronoun: "formal copula", form: "〜である (written, not conversational)" },
                    { pronoun: "formal past", form: "〜であった" },
                    { pronoun: "formal negative", form: "〜でない / 〜ではない" },
                ]
            },
            {
                tense: "Keigo (Humble — kenjōgo)",
                forms: [
                    { pronoun: "humble present", form: "いたします" },
                    { pronoun: "humble past", form: "いたしました" },
                    { pronoun: "humble negative", form: "いたしません" },
                ]
            },
            {
                tense: "Formal Connective Patterns",
                forms: [
                    { pronoun: "〜において", form: "この会議において実施する" },
                    { pronoun: "〜によって", form: "努力によって達成する" },
                    { pronoun: "〜に際して", form: "開幕に際してご挨拶する" },
                ]
            }
        ]
    }
]
