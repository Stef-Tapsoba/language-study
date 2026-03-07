// Spanish A2 verbs.
// data/spanish/verbs/a2.ts
import { Verb } from "../../../types"

// A2 verbs — present + preterite.
// ir and hacer have moved to A1. Only comer and poder remain here.

export const a2Verbs: Verb[] = [
    {
        id: "es-vb-a2-1",
        level: "A2",
        infinitive: "comer",
        meaning: "to eat",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "como" },
                    { pronoun: "tú", form: "comes" },
                    { pronoun: "él/ella", form: "come" },
                    { pronoun: "nosotros", form: "comemos" },
                    { pronoun: "vosotros", form: "coméis" },
                    { pronoun: "ellos", form: "comen" }
                ]
            },
            {
                tense: "Preterite",
                forms: [
                    { pronoun: "yo", form: "comí" },
                    { pronoun: "tú", form: "comiste" },
                    { pronoun: "él/ella", form: "comió" },
                    { pronoun: "nosotros", form: "comimos" },
                    { pronoun: "vosotros", form: "comisteis" },
                    { pronoun: "ellos", form: "comieron" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a2-2",
        level: "A2",
        infinitive: "poder",
        meaning: "to be able to / can",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "puedo" },
                    { pronoun: "tú", form: "puedes" },
                    { pronoun: "él/ella", form: "puede" },
                    { pronoun: "nosotros", form: "podemos" },
                    { pronoun: "vosotros", form: "podéis" },
                    { pronoun: "ellos", form: "pueden" }
                ]
            },
            {
                tense: "Preterite",
                forms: [
                    { pronoun: "yo", form: "pude" },
                    { pronoun: "tú", form: "pudiste" },
                    { pronoun: "él/ella", form: "pudo" },
                    { pronoun: "nosotros", form: "pudimos" },
                    { pronoun: "vosotros", form: "pudisteis" },
                    { pronoun: "ellos", form: "pudieron" }
                ]
            }
        ]
    }
]
