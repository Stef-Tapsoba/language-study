import { Verb } from "../../../types"

// C1 verbs — pluperfect subjunctive, conditional perfect, future perfect, passive periphrasis.

export const c1Verbs: Verb[] = [
    {
        id: "es-vb-c1-1",
        level: "C1",
        infinitive: "venir",
        meaning: "to come",
        conjugations: [
            {
                tense: "Pluperfect Subjunctive",
                forms: [
                    { pronoun: "yo", form: "hubiera venido" },
                    { pronoun: "tú", form: "hubieras venido" },
                    { pronoun: "él/ella", form: "hubiera venido" },
                    { pronoun: "nosotros", form: "hubiéramos venido" },
                    { pronoun: "vosotros", form: "hubierais venido" },
                    { pronoun: "ellos", form: "hubieran venido" }
                ]
            },
            {
                tense: "Conditional Perfect",
                forms: [
                    { pronoun: "yo", form: "habría venido" },
                    { pronoun: "tú", form: "habrías venido" },
                    { pronoun: "él/ella", form: "habría venido" },
                    { pronoun: "nosotros", form: "habríamos venido" },
                    { pronoun: "vosotros", form: "habríais venido" },
                    { pronoun: "ellos", form: "habrían venido" }
                ]
            },
            {
                tense: "Pluperfect Indicative",
                forms: [
                    { pronoun: "yo", form: "había venido" },
                    { pronoun: "tú", form: "habías venido" },
                    { pronoun: "él/ella", form: "había venido" },
                    { pronoun: "nosotros", form: "habíamos venido" },
                    { pronoun: "vosotros", form: "habíais venido" },
                    { pronoun: "ellos", form: "habían venido" }
                ]
            }
        ]
    },
    {
        id: "es-vb-c1-2",
        level: "C1",
        infinitive: "ser",
        meaning: "to be (permanent)",
        conjugations: [
            {
                tense: "Pluperfect Subjunctive",
                forms: [
                    { pronoun: "yo", form: "hubiera sido" },
                    { pronoun: "tú", form: "hubieras sido" },
                    { pronoun: "él/ella", form: "hubiera sido" },
                    { pronoun: "nosotros", form: "hubiéramos sido" },
                    { pronoun: "vosotros", form: "hubierais sido" },
                    { pronoun: "ellos", form: "hubieran sido" }
                ]
            },
            {
                tense: "Passive — Imperfect",
                forms: [
                    { pronoun: "yo", form: "era hecho" },
                    { pronoun: "tú", form: "eras hecho" },
                    { pronoun: "él/ella", form: "era hecho" },
                    { pronoun: "nosotros", form: "éramos hechos" },
                    { pronoun: "vosotros", form: "erais hechos" },
                    { pronoun: "ellos", form: "eran hechos" }
                ]
            },
            {
                tense: "Passive — Future",
                forms: [
                    { pronoun: "yo", form: "será hecho" },
                    { pronoun: "tú", form: "serás hecho" },
                    { pronoun: "él/ella", form: "será hecho" },
                    { pronoun: "nosotros", form: "seremos hechos" },
                    { pronoun: "vosotros", form: "seréis hechos" },
                    { pronoun: "ellos", form: "serán hechos" }
                ]
            }
        ]
    },
    {
        id: "es-vb-c1-3",
        level: "C1",
        infinitive: "hacer",
        meaning: "to do / to make",
        conjugations: [
            {
                tense: "Conditional Perfect",
                forms: [
                    { pronoun: "yo", form: "habría hecho" },
                    { pronoun: "tú", form: "habrías hecho" },
                    { pronoun: "él/ella", form: "habría hecho" },
                    { pronoun: "nosotros", form: "habríamos hecho" },
                    { pronoun: "vosotros", form: "habríais hecho" },
                    { pronoun: "ellos", form: "habrían hecho" }
                ]
            },
            {
                tense: "Pluperfect Subjunctive",
                forms: [
                    { pronoun: "yo", form: "hubiera hecho" },
                    { pronoun: "tú", form: "hubieras hecho" },
                    { pronoun: "él/ella", form: "hubiera hecho" },
                    { pronoun: "nosotros", form: "hubiéramos hecho" },
                    { pronoun: "vosotros", form: "hubierais hecho" },
                    { pronoun: "ellos", form: "hubieran hecho" }
                ]
            },
            {
                tense: "Future Perfect",
                forms: [
                    { pronoun: "yo", form: "habré hecho" },
                    { pronoun: "tú", form: "habrás hecho" },
                    { pronoun: "él/ella", form: "habrá hecho" },
                    { pronoun: "nosotros", form: "habremos hecho" },
                    { pronoun: "vosotros", form: "habréis hecho" },
                    { pronoun: "ellos", form: "habrán hecho" }
                ]
            }
        ]
    }
]
