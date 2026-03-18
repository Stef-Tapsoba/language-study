// Spanish A1 verbs.
// data/spanish/verbs/a1.ts
import { Verb } from "../../../types"

// A1 verbs — present tense only.
// ir and hacer are moved here from the old A2 data (they are high-frequency A1 words).
// querer is moved here from B1 (essential for expressing wants and ordering food).

export const a1Verbs: Verb[] = [
    {
        id: "es-vb-a1-1",
        level: "A1",
        infinitive: "hablar",
        meaning: "to speak / to talk",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "hablo" },
                { pronoun: "tú", form: "hablas" },
                { pronoun: "él/ella", form: "habla" },
                { pronoun: "nosotros", form: "hablamos" },
                { pronoun: "vosotros", form: "habláis" },
                { pronoun: "ellos", form: "hablan" }
            ]
        }]
    },
    {
        id: "es-vb-a1-2",
        level: "A1",
        infinitive: "ser",
        meaning: "to be (permanent traits)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "soy" },
                { pronoun: "tú", form: "eres" },
                { pronoun: "él/ella", form: "es" },
                { pronoun: "nosotros", form: "somos" },
                { pronoun: "vosotros", form: "sois" },
                { pronoun: "ellos", form: "son" }
            ]
        }]
    },
    {
        id: "es-vb-a1-3",
        level: "A1",
        infinitive: "estar",
        meaning: "to be (temporary states & location)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "estoy" },
                { pronoun: "tú", form: "estás" },
                { pronoun: "él/ella", form: "está" },
                { pronoun: "nosotros", form: "estamos" },
                { pronoun: "vosotros", form: "estáis" },
                { pronoun: "ellos", form: "están" }
            ]
        }]
    },
    {
        id: "es-vb-a1-4",
        level: "A1",
        infinitive: "tener",
        meaning: "to have",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "tengo" },
                { pronoun: "tú", form: "tienes" },
                { pronoun: "él/ella", form: "tiene" },
                { pronoun: "nosotros", form: "tenemos" },
                { pronoun: "vosotros", form: "tenéis" },
                { pronoun: "ellos", form: "tienen" }
            ]
        }]
    },
    {
        id: "es-vb-a1-5",
        level: "A1",
        infinitive: "ir",
        meaning: "to go",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "voy" },
                { pronoun: "tú", form: "vas" },
                { pronoun: "él/ella", form: "va" },
                { pronoun: "nosotros", form: "vamos" },
                { pronoun: "vosotros", form: "vais" },
                { pronoun: "ellos", form: "van" }
            ]
        }]
    },
    {
        id: "es-vb-a1-6",
        level: "A1",
        infinitive: "hacer",
        meaning: "to do / to make",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "hago" },
                { pronoun: "tú", form: "haces" },
                { pronoun: "él/ella", form: "hace" },
                { pronoun: "nosotros", form: "hacemos" },
                { pronoun: "vosotros", form: "hacéis" },
                { pronoun: "ellos", form: "hacen" }
            ]
        }]
    },
    {
        id: "es-vb-a1-7",
        level: "A1",
        infinitive: "querer",
        meaning: "to want / to love",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "quiero" },
                { pronoun: "tú", form: "quieres" },
                { pronoun: "él/ella", form: "quiere" },
                { pronoun: "nosotros", form: "queremos" },
                { pronoun: "vosotros", form: "queréis" },
                { pronoun: "ellos", form: "quieren" }
            ]
        }]
    },
    {
        id: "es-vb-a1-8",
        level: "A1",
        infinitive: "comer",
        meaning: "to eat",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "como" },
                { pronoun: "tú", form: "comes" },
                { pronoun: "él/ella", form: "come" },
                { pronoun: "nosotros", form: "comemos" },
                { pronoun: "vosotros", form: "coméis" },
                { pronoun: "ellos", form: "comen" }
            ]
        }]
    },
    {
        id: "es-vb-a1-9",
        level: "A1",
        infinitive: "beber",
        meaning: "to drink",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "bebo" },
                { pronoun: "tú", form: "bebes" },
                { pronoun: "él/ella", form: "bebe" },
                { pronoun: "nosotros", form: "bebemos" },
                { pronoun: "vosotros", form: "bebéis" },
                { pronoun: "ellos", form: "beben" }
            ]
        }]
    },
    {
        id: "es-vb-a1-10",
        level: "A1",
        infinitive: "vivir",
        meaning: "to live",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "vivo" },
                { pronoun: "tú", form: "vives" },
                { pronoun: "él/ella", form: "vive" },
                { pronoun: "nosotros", form: "vivimos" },
                { pronoun: "vosotros", form: "vivís" },
                { pronoun: "ellos", form: "viven" }
            ]
        }]
    },
    {
        id: "es-vb-a1-11",
        level: "A1",
        infinitive: "trabajar",
        meaning: "to work",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "trabajo" },
                { pronoun: "tú", form: "trabajas" },
                { pronoun: "él/ella", form: "trabaja" },
                { pronoun: "nosotros", form: "trabajamos" },
                { pronoun: "vosotros", form: "trabajáis" },
                { pronoun: "ellos", form: "trabajan" }
            ]
        }]
    },
    {
        id: "es-vb-a1-12",
        level: "A1",
        infinitive: "llamar",
        meaning: "to call",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "llamo" },
                { pronoun: "tú", form: "llamas" },
                { pronoun: "él/ella", form: "llama" },
                { pronoun: "nosotros", form: "llamamos" },
                { pronoun: "vosotros", form: "llamáis" },
                { pronoun: "ellos", form: "llaman" }
            ]
        }]
    },
    {
        id: "es-vb-a1-13",
        level: "A1",
        infinitive: "poder",
        meaning: "to be able to / can",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "puedo" },
                { pronoun: "tú", form: "puedes" },
                { pronoun: "él/ella", form: "puede" },
                { pronoun: "nosotros", form: "podemos" },
                { pronoun: "vosotros", form: "podéis" },
                { pronoun: "ellos", form: "pueden" }
            ]
        }]
    },
    {
        id: "es-vb-a1-14",
        level: "A1",
        infinitive: "leer",
        meaning: "to read",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "leo" },
                { pronoun: "tú", form: "lees" },
                { pronoun: "él/ella", form: "lee" },
                { pronoun: "nosotros", form: "leemos" },
                { pronoun: "vosotros", form: "leéis" },
                { pronoun: "ellos", form: "leen" }
            ]
        }]
    },
    {
        id: "es-vb-a1-15",
        level: "A1",
        infinitive: "escribir",
        meaning: "to write",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "yo", form: "escribo" },
                { pronoun: "tú", form: "escribes" },
                { pronoun: "él/ella", form: "escribe" },
                { pronoun: "nosotros", form: "escribimos" },
                { pronoun: "vosotros", form: "escribís" },
                { pronoun: "ellos", form: "escriben" }
            ]
        }]
    }
]
