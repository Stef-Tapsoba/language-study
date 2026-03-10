import { Verb } from "../../../types"

// B2 verbs — subjunctive, imperfect subjunctive, conditional, and perfect tenses.

export const b2Verbs: Verb[] = [
    {
        id: "es-vb-b2-1",
        level: "B2",
        infinitive: "poder",
        meaning: "to be able to / can",
        conjugations: [
            {
                tense: "Present Subjunctive",
                forms: [
                    { pronoun: "yo", form: "pueda" },
                    { pronoun: "tú", form: "puedas" },
                    { pronoun: "él/ella", form: "pueda" },
                    { pronoun: "nosotros", form: "podamos" },
                    { pronoun: "vosotros", form: "podáis" },
                    { pronoun: "ellos", form: "puedan" }
                ]
            },
            {
                tense: "Imperfect Subjunctive",
                forms: [
                    { pronoun: "yo", form: "pudiera" },
                    { pronoun: "tú", form: "pudieras" },
                    { pronoun: "él/ella", form: "pudiera" },
                    { pronoun: "nosotros", form: "pudiéramos" },
                    { pronoun: "vosotros", form: "pudierais" },
                    { pronoun: "ellos", form: "pudieran" }
                ]
            },
            {
                tense: "Conditional",
                forms: [
                    { pronoun: "yo", form: "podría" },
                    { pronoun: "tú", form: "podrías" },
                    { pronoun: "él/ella", form: "podría" },
                    { pronoun: "nosotros", form: "podríamos" },
                    { pronoun: "vosotros", form: "podríais" },
                    { pronoun: "ellos", form: "podrían" }
                ]
            }
        ]
    },
    {
        id: "es-vb-b2-2",
        level: "B2",
        infinitive: "querer",
        meaning: "to want / to love",
        conjugations: [
            {
                tense: "Imperfect",
                forms: [
                    { pronoun: "yo", form: "quería" },
                    { pronoun: "tú", form: "querías" },
                    { pronoun: "él/ella", form: "quería" },
                    { pronoun: "nosotros", form: "queríamos" },
                    { pronoun: "vosotros", form: "queríais" },
                    { pronoun: "ellos", form: "querían" }
                ]
            },
            {
                tense: "Imperfect Subjunctive",
                forms: [
                    { pronoun: "yo", form: "quisiera" },
                    { pronoun: "tú", form: "quisieras" },
                    { pronoun: "él/ella", form: "quisiera" },
                    { pronoun: "nosotros", form: "quisiéramos" },
                    { pronoun: "vosotros", form: "quisierais" },
                    { pronoun: "ellos", form: "quisieran" }
                ]
            },
            {
                tense: "Conditional",
                forms: [
                    { pronoun: "yo", form: "querría" },
                    { pronoun: "tú", form: "querrías" },
                    { pronoun: "él/ella", form: "querría" },
                    { pronoun: "nosotros", form: "querríamos" },
                    { pronoun: "vosotros", form: "querríais" },
                    { pronoun: "ellos", form: "querrían" }
                ]
            }
        ]
    },
    {
        id: "es-vb-b2-3",
        level: "B2",
        infinitive: "haber",
        meaning: "to have (auxiliary)",
        conjugations: [
            {
                tense: "Present Perfect",
                forms: [
                    { pronoun: "yo", form: "he" },
                    { pronoun: "tú", form: "has" },
                    { pronoun: "él/ella", form: "ha" },
                    { pronoun: "nosotros", form: "hemos" },
                    { pronoun: "vosotros", form: "habéis" },
                    { pronoun: "ellos", form: "han" }
                ]
            },
            {
                tense: "Past Perfect (Pluperfect)",
                forms: [
                    { pronoun: "yo", form: "había" },
                    { pronoun: "tú", form: "habías" },
                    { pronoun: "él/ella", form: "había" },
                    { pronoun: "nosotros", form: "habíamos" },
                    { pronoun: "vosotros", form: "habíais" },
                    { pronoun: "ellos", form: "habían" }
                ]
            },
            {
                tense: "Future Perfect",
                forms: [
                    { pronoun: "yo", form: "habré" },
                    { pronoun: "tú", form: "habrás" },
                    { pronoun: "él/ella", form: "habrá" },
                    { pronoun: "nosotros", form: "habremos" },
                    { pronoun: "vosotros", form: "habréis" },
                    { pronoun: "ellos", form: "habrán" }
                ]
            }
        ]
    }
]
