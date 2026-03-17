// Spanish B1 verbs.
// data/spanish/verbs/b1.ts
import { Verb } from "../../../types"

// B1 verbs — present + preterite (saber, volver) or present + future (salir).
// querer has moved to A1.

export const b1Verbs: Verb[] = [
    {
        id: "es-vb-b1-1",
        level: "B1",
        infinitive: "saber",
        meaning: "to know (facts / how to do something)",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "sé" },
                    { pronoun: "tú", form: "sabes" },
                    { pronoun: "él/ella", form: "sabe" },
                    { pronoun: "nosotros", form: "sabemos" },
                    { pronoun: "vosotros", form: "sabéis" },
                    { pronoun: "ellos", form: "saben" }
                ]
            },
            {
                tense: "Preterite",
                forms: [
                    { pronoun: "yo", form: "supe" },
                    { pronoun: "tú", form: "supiste" },
                    { pronoun: "él/ella", form: "supo" },
                    { pronoun: "nosotros", form: "supimos" },
                    { pronoun: "vosotros", form: "supisteis" },
                    { pronoun: "ellos", form: "supieron" }
                ]
            }
        ]
    },
    {
        id: "es-vb-b1-2",
        level: "B1",
        infinitive: "volver",
        meaning: "to return / to come back",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "vuelvo" },
                    { pronoun: "tú", form: "vuelves" },
                    { pronoun: "él/ella", form: "vuelve" },
                    { pronoun: "nosotros", form: "volvemos" },
                    { pronoun: "vosotros", form: "volvéis" },
                    { pronoun: "ellos", form: "vuelven" }
                ]
            },
            {
                tense: "Preterite",
                forms: [
                    { pronoun: "yo", form: "volví" },
                    { pronoun: "tú", form: "volviste" },
                    { pronoun: "él/ella", form: "volvió" },
                    { pronoun: "nosotros", form: "volvimos" },
                    { pronoun: "vosotros", form: "volvisteis" },
                    { pronoun: "ellos", form: "volvieron" }
                ]
            }
        ]
    },
    {
        id: "es-vb-b1-3",
        level: "B1",
        infinitive: "salir",
        meaning: "to go out / to leave",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "salgo" },
                    { pronoun: "tú", form: "sales" },
                    { pronoun: "él/ella", form: "sale" },
                    { pronoun: "nosotros", form: "salimos" },
                    { pronoun: "vosotros", form: "salís" },
                    { pronoun: "ellos", form: "salen" }
                ]
            },
            {
                tense: "Future",
                forms: [
                    { pronoun: "yo", form: "saldré" },
                    { pronoun: "tú", form: "saldrás" },
                    { pronoun: "él/ella", form: "saldrá" },
                    { pronoun: "nosotros", form: "saldremos" },
                    { pronoun: "vosotros", form: "saldréis" },
                    { pronoun: "ellos", form: "saldrán" }
                ]
            }
        ]
    },
    {
        id: "es-vb-b1-4",
        level: "B1",
        infinitive: "poder",
        meaning: "to be able to / can",
        conjugations: [
            {
                tense: "Condicional Simple",
                forms: [
                    { pronoun: "yo", form: "podría" },
                    { pronoun: "tú", form: "podrías" },
                    { pronoun: "él/ella", form: "podría" },
                    { pronoun: "nosotros", form: "podríamos" },
                    { pronoun: "vosotros", form: "podríais" },
                    { pronoun: "ellos/ellas", form: "podrían" },
                ]
            },
            {
                tense: "Imperfecto de Subjuntivo",
                forms: [
                    { pronoun: "yo", form: "pudiera" },
                    { pronoun: "tú", form: "pudieras" },
                    { pronoun: "él/ella", form: "pudiera" },
                    { pronoun: "nosotros", form: "pudiéramos" },
                    { pronoun: "vosotros", form: "pudierais" },
                    { pronoun: "ellos/ellas", form: "pudieran" },
                ]
            }
        ]
    },
    {
        id: "es-vb-b1-5",
        level: "B1",
        infinitive: "decir",
        meaning: "to say / to tell",
        conjugations: [
            {
                tense: "Pretérito Indefinido",
                forms: [
                    { pronoun: "yo", form: "dije" },
                    { pronoun: "tú", form: "dijiste" },
                    { pronoun: "él/ella", form: "dijo" },
                    { pronoun: "nosotros", form: "dijimos" },
                    { pronoun: "vosotros", form: "dijisteis" },
                    { pronoun: "ellos/ellas", form: "dijeron" },
                ]
            },
            {
                tense: "Condicional Simple",
                forms: [
                    { pronoun: "yo", form: "diría" },
                    { pronoun: "tú", form: "dirías" },
                    { pronoun: "él/ella", form: "diría" },
                    { pronoun: "nosotros", form: "diríamos" },
                    { pronoun: "vosotros", form: "diríais" },
                    { pronoun: "ellos/ellas", form: "dirían" },
                ]
            }
        ]
    },
]
