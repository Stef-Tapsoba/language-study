// src/data/french/verbs/b2.ts
import { Verb } from "../../../types"

export const b2Verbs: Verb[] = [
    {
        id: "fr-vb-b2-1",
        level: "B2",
        infinitive: "pouvoir",
        meaning: "to be able to / can",
        conjugations: [
            {
                tense: "Subjonctif Présent",
                forms: [
                    { pronoun: "je", form: "puisse" },
                    { pronoun: "tu", form: "puisses" },
                    { pronoun: "il/elle", form: "puisse" },
                    { pronoun: "nous", form: "puissions" },
                    { pronoun: "vous", form: "puissiez" },
                    { pronoun: "ils/elles", form: "puissent" },
                ]
            },
            {
                tense: "Conditionnel Présent",
                forms: [
                    { pronoun: "je", form: "pourrais" },
                    { pronoun: "tu", form: "pourrais" },
                    { pronoun: "il/elle", form: "pourrait" },
                    { pronoun: "nous", form: "pourrions" },
                    { pronoun: "vous", form: "pourriez" },
                    { pronoun: "ils/elles", form: "pourraient" },
                ]
            },
            {
                tense: "Conditionnel Passé",
                forms: [
                    { pronoun: "je", form: "aurais pu" },
                    { pronoun: "tu", form: "aurais pu" },
                    { pronoun: "il/elle", form: "aurait pu" },
                    { pronoun: "nous", form: "aurions pu" },
                    { pronoun: "vous", form: "auriez pu" },
                    { pronoun: "ils/elles", form: "auraient pu" },
                ]
            },
        ]
    },
    {
        id: "fr-vb-b2-2",
        level: "B2",
        infinitive: "vouloir",
        meaning: "to want",
        conjugations: [
            {
                tense: "Imparfait",
                forms: [
                    { pronoun: "je", form: "voulais" },
                    { pronoun: "tu", form: "voulais" },
                    { pronoun: "il/elle", form: "voulait" },
                    { pronoun: "nous", form: "voulions" },
                    { pronoun: "vous", form: "vouliez" },
                    { pronoun: "ils/elles", form: "voulaient" },
                ]
            },
            {
                tense: "Subjonctif Passé",
                forms: [
                    { pronoun: "je", form: "aie voulu" },
                    { pronoun: "tu", form: "aies voulu" },
                    { pronoun: "il/elle", form: "ait voulu" },
                    { pronoun: "nous", form: "ayons voulu" },
                    { pronoun: "vous", form: "ayez voulu" },
                    { pronoun: "ils/elles", form: "aient voulu" },
                ]
            },
            {
                tense: "Conditionnel Passé",
                forms: [
                    { pronoun: "je", form: "aurais voulu" },
                    { pronoun: "tu", form: "aurais voulu" },
                    { pronoun: "il/elle", form: "aurait voulu" },
                    { pronoun: "nous", form: "aurions voulu" },
                    { pronoun: "vous", form: "auriez voulu" },
                    { pronoun: "ils/elles", form: "auraient voulu" },
                ]
            },
        ]
    },
    {
        id: "fr-vb-b2-3",
        level: "B2",
        infinitive: "avoir",
        meaning: "to have",
        conjugations: [
            {
                tense: "Passé Composé",
                forms: [
                    { pronoun: "je", form: "ai eu" },
                    { pronoun: "tu", form: "as eu" },
                    { pronoun: "il/elle", form: "a eu" },
                    { pronoun: "nous", form: "avons eu" },
                    { pronoun: "vous", form: "avez eu" },
                    { pronoun: "ils/elles", form: "ont eu" },
                ]
            },
            {
                tense: "Plus-que-parfait",
                forms: [
                    { pronoun: "je", form: "avais eu" },
                    { pronoun: "tu", form: "avais eu" },
                    { pronoun: "il/elle", form: "avait eu" },
                    { pronoun: "nous", form: "avions eu" },
                    { pronoun: "vous", form: "aviez eu" },
                    { pronoun: "ils/elles", form: "avaient eu" },
                ]
            },
            {
                tense: "Futur Antérieur",
                forms: [
                    { pronoun: "je", form: "aurai eu" },
                    { pronoun: "tu", form: "auras eu" },
                    { pronoun: "il/elle", form: "aura eu" },
                    { pronoun: "nous", form: "aurons eu" },
                    { pronoun: "vous", form: "aurez eu" },
                    { pronoun: "ils/elles", form: "auront eu" },
                ]
            },
        ]
    },
    {
        id: "fr-vb-b2-4",
        level: "B2",
        infinitive: "savoir",
        meaning: "to know (how to do / facts)",
        conjugations: [
            {
                tense: "Conditionnel Passé",
                forms: [
                    { pronoun: "je", form: "aurais su" },
                    { pronoun: "tu", form: "aurais su" },
                    { pronoun: "il/elle", form: "aurait su" },
                    { pronoun: "nous", form: "aurions su" },
                    { pronoun: "vous", form: "auriez su" },
                    { pronoun: "ils/elles", form: "auraient su" },
                ]
            },
            {
                tense: "Subjonctif Passé",
                forms: [
                    { pronoun: "que je", form: "aie su" },
                    { pronoun: "que tu", form: "aies su" },
                    { pronoun: "qu'il/elle", form: "ait su" },
                    { pronoun: "que nous", form: "ayons su" },
                    { pronoun: "que vous", form: "ayez su" },
                    { pronoun: "qu'ils/elles", form: "aient su" },
                ]
            },
            {
                tense: "Mixed Conditional Pattern",
                forms: [
                    { pronoun: "si + PQP", form: "Si j'avais su…" },
                    { pronoun: "→ cond. présent", form: "…je serais médecin aujourd'hui." },
                    { pronoun: "→ cond. passé", form: "…je n'aurais pas accepté." },
                ]
            }
        ]
    },
]
