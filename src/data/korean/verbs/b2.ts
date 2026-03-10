// Korean B2 verbs
// data/korean/verbs/b2.ts
import { Verb } from "../../../types"

// B2 verbs — demonstrating passive, causative, formal register, indirect speech,
// and past hypothetical constructions.

export const b2Verbs: Verb[] = [
    {
        id: "ko-vb-b2-1",
        level: "B2",
        infinitive: "하다",
        romanized: "hada",
        meaning: "to do",
        conjugations: [
            {
                tense: "Passive",
                forms: [
                    { pronoun: "Passive stem", form: "해지다", romanized: "haejida" },
                    { pronoun: "Passive formal", form: "해집니다", romanized: "haejipnida" },
                    { pronoun: "Passive negative", form: "해지지 않다", romanized: "haejiji anda" },
                    { pronoun: "Passive negative formal", form: "해지지 않습니다", romanized: "haejiji anseumnida" }
                ]
            },
            {
                tense: "Causative",
                forms: [
                    { pronoun: "Causative stem", form: "시키다", romanized: "sikida" },
                    { pronoun: "Causative formal", form: "시킵니다", romanized: "sikipnida" },
                    { pronoun: "Causative negative", form: "시키지 않다", romanized: "sikiji anda" },
                    { pronoun: "Causative negative formal", form: "시키지 않습니다", romanized: "sikiji anseumnida" }
                ]
            },
            {
                tense: "Formal Present",
                forms: [
                    { pronoun: "Formal affirmative", form: "합니다", romanized: "hamnida" }
                ]
            },
            {
                tense: "Formal Past",
                forms: [
                    { pronoun: "Formal past", form: "했습니다", romanized: "haesseumnida" }
                ]
            },
            {
                tense: "Formal Future",
                forms: [
                    { pronoun: "Formal future", form: "할 것입니다", romanized: "hal-geosimnida" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-b2-2",
        level: "B2",
        infinitive: "되다",
        romanized: "doeda",
        meaning: "to become / to be done",
        conjugations: [
            {
                tense: "Indirect Speech",
                forms: [
                    { pronoun: "Declarative reported", form: "된다고 하다", romanized: "doen-dago-hada" },
                    { pronoun: "Question reported", form: "됩니까", romanized: "doemnnikka" }
                ]
            },
            {
                tense: "Conditional (-면)",
                forms: [
                    { pronoun: "Conditional", form: "되면", romanized: "doemyeon" }
                ]
            },
            {
                tense: "-게 되다 Form",
                forms: [
                    { pronoun: "Natural outcome", form: "자연스럽게 되다", romanized: "jayeonseurupge doeda" }
                ]
            },
            {
                tense: "Formal Present",
                forms: [
                    { pronoun: "Formal present", form: "됩니다", romanized: "doemnida" }
                ]
            },
            {
                tense: "Formal Past",
                forms: [
                    { pronoun: "Formal past", form: "되었습니다", romanized: "doe-eosseumnida" }
                ]
            }
        ]
    },
    {
        id: "ko-vb-b2-3",
        level: "B2",
        infinitive: "받다",
        romanized: "batda",
        meaning: "to receive",
        conjugations: [
            {
                tense: "Passive Context",
                forms: [
                    { pronoun: "Passive periphrastic", form: "받게 되다", romanized: "badge doeda" },
                    { pronoun: "Passive suffix form", form: "받아지다", romanized: "badajida" }
                ]
            },
            {
                tense: "Formal Present",
                forms: [
                    { pronoun: "Formal present", form: "받습니다", romanized: "batseumnida" }
                ]
            },
            {
                tense: "Formal Past",
                forms: [
                    { pronoun: "Formal past", form: "받았습니다", romanized: "badatseumnida" }
                ]
            },
            {
                tense: "Past Hypothetical",
                forms: [
                    { pronoun: "Past counterfactual", form: "받았더라면", romanized: "badatdeoramyeon" }
                ]
            }
        ]
    }
]
