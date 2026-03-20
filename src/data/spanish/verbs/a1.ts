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
    },
    {
        id: "es-vb-a1-16",
        level: "A1",
        infinitive: "escuchar",
        meaning: "to listen",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "escucho" },
                    { pronoun: "tú", form: "escuchas" },
                    { pronoun: "él/ella", form: "escucha" },
                    { pronoun: "nosotros", form: "escuchamos" },
                    { pronoun: "vosotros", form: "escucháis" },
                    { pronoun: "ellos", form: "escuchan" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "escucha" },
                    { pronoun: "usted", form: "escuche" },
                    { pronoun: "nosotros", form: "escuchemos" },
                    { pronoun: "vosotros", form: "escuchad" },
                    { pronoun: "ustedes", form: "escuchen" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-17",
        level: "A1",
        infinitive: "pedir",
        meaning: "to ask for / to order",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "pido" },
                    { pronoun: "tú", form: "pides" },
                    { pronoun: "él/ella", form: "pide" },
                    { pronoun: "nosotros", form: "pedimos" },
                    { pronoun: "vosotros", form: "pedís" },
                    { pronoun: "ellos", form: "piden" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "pide" },
                    { pronoun: "usted", form: "pida" },
                    { pronoun: "nosotros", form: "pidamos" },
                    { pronoun: "vosotros", form: "pedid" },
                    { pronoun: "ustedes", form: "pidan" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-18",
        level: "A1",
        infinitive: "venir",
        meaning: "to come",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "vengo" },
                    { pronoun: "tú", form: "vienes" },
                    { pronoun: "él/ella", form: "viene" },
                    { pronoun: "nosotros", form: "venimos" },
                    { pronoun: "vosotros", form: "venís" },
                    { pronoun: "ellos", form: "vienen" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "ven" },
                    { pronoun: "usted", form: "venga" },
                    { pronoun: "nosotros", form: "vengamos" },
                    { pronoun: "vosotros", form: "venid" },
                    { pronoun: "ustedes", form: "vengan" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-19",
        level: "A1",
        infinitive: "salir",
        meaning: "to leave / to go out",
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
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "sal" },
                    { pronoun: "usted", form: "salga" },
                    { pronoun: "nosotros", form: "salgamos" },
                    { pronoun: "vosotros", form: "salid" },
                    { pronoun: "ustedes", form: "salgan" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-20",
        level: "A1",
        infinitive: "decir",
        meaning: "to say / to tell",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "digo" },
                    { pronoun: "tú", form: "dices" },
                    { pronoun: "él/ella", form: "dice" },
                    { pronoun: "nosotros", form: "decimos" },
                    { pronoun: "vosotros", form: "decís" },
                    { pronoun: "ellos", form: "dicen" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "di" },
                    { pronoun: "usted", form: "diga" },
                    { pronoun: "nosotros", form: "digamos" },
                    { pronoun: "vosotros", form: "decid" },
                    { pronoun: "ustedes", form: "digan" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-21",
        level: "A1",
        infinitive: "poner",
        meaning: "to put / to place",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "pongo" },
                    { pronoun: "tú", form: "pones" },
                    { pronoun: "él/ella", form: "pone" },
                    { pronoun: "nosotros", form: "ponemos" },
                    { pronoun: "vosotros", form: "ponéis" },
                    { pronoun: "ellos", form: "ponen" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "pon" },
                    { pronoun: "usted", form: "ponga" },
                    { pronoun: "nosotros", form: "pongamos" },
                    { pronoun: "vosotros", form: "poned" },
                    { pronoun: "ustedes", form: "pongan" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-22",
        level: "A1",
        infinitive: "pensar",
        meaning: "to think",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "pienso" },
                    { pronoun: "tú", form: "piensas" },
                    { pronoun: "él/ella", form: "piensa" },
                    { pronoun: "nosotros", form: "pensamos" },
                    { pronoun: "vosotros", form: "pensáis" },
                    { pronoun: "ellos", form: "piensan" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "piensa" },
                    { pronoun: "usted", form: "piense" },
                    { pronoun: "nosotros", form: "pensemos" },
                    { pronoun: "vosotros", form: "pensad" },
                    { pronoun: "ustedes", form: "piensen" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-23",
        level: "A1",
        infinitive: "entender",
        meaning: "to understand",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "entiendo" },
                    { pronoun: "tú", form: "entiendes" },
                    { pronoun: "él/ella", form: "entiende" },
                    { pronoun: "nosotros", form: "entendemos" },
                    { pronoun: "vosotros", form: "entendéis" },
                    { pronoun: "ellos", form: "entienden" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "entiende" },
                    { pronoun: "usted", form: "entienda" },
                    { pronoun: "nosotros", form: "entendamos" },
                    { pronoun: "vosotros", form: "entended" },
                    { pronoun: "ustedes", form: "entiendan" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-24",
        level: "A1",
        infinitive: "volver",
        meaning: "to return",
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
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "vuelve" },
                    { pronoun: "usted", form: "vuelva" },
                    { pronoun: "nosotros", form: "volvamos" },
                    { pronoun: "vosotros", form: "volved" },
                    { pronoun: "ustedes", form: "vuelvan" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-25",
        level: "A1",
        infinitive: "dormir",
        meaning: "to sleep",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "duermo" },
                    { pronoun: "tú", form: "duermes" },
                    { pronoun: "él/ella", form: "duerme" },
                    { pronoun: "nosotros", form: "dormimos" },
                    { pronoun: "vosotros", form: "dormís" },
                    { pronoun: "ellos", form: "duermen" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "duerme" },
                    { pronoun: "usted", form: "duerma" },
                    { pronoun: "nosotros", form: "durmamos" },
                    { pronoun: "vosotros", form: "dormid" },
                    { pronoun: "ustedes", form: "duerman" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-26",
        level: "A1",
        infinitive: "jugar",
        meaning: "to play",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "juego" },
                    { pronoun: "tú", form: "juegas" },
                    { pronoun: "él/ella", form: "juega" },
                    { pronoun: "nosotros", form: "jugamos" },
                    { pronoun: "vosotros", form: "jugáis" },
                    { pronoun: "ellos", form: "juegan" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "juega" },
                    { pronoun: "usted", form: "juegue" },
                    { pronoun: "nosotros", form: "juguemos" },
                    { pronoun: "vosotros", form: "jugad" },
                    { pronoun: "ustedes", form: "jueguen" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-27",
        level: "A1",
        infinitive: "saber",
        meaning: "to know (facts / info)",
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
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "sabe" },
                    { pronoun: "usted", form: "sepa" },
                    { pronoun: "nosotros", form: "sepamos" },
                    { pronoun: "vosotros", form: "sabed" },
                    { pronoun: "ustedes", form: "sepan" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-28",
        level: "A1",
        infinitive: "conocer",
        meaning: "to know (people / places)",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "conozco" },
                    { pronoun: "tú", form: "conoces" },
                    { pronoun: "él/ella", form: "conoce" },
                    { pronoun: "nosotros", form: "conocemos" },
                    { pronoun: "vosotros", form: "conocéis" },
                    { pronoun: "ellos", form: "conocen" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "conoce" },
                    { pronoun: "usted", form: "conozca" },
                    { pronoun: "nosotros", form: "conozcamos" },
                    { pronoun: "vosotros", form: "conoced" },
                    { pronoun: "ustedes", form: "conozcan" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-29",
        level: "A1",
        infinitive: "ver",
        meaning: "to see",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "veo" },
                    { pronoun: "tú", form: "ves" },
                    { pronoun: "él/ella", form: "ve" },
                    { pronoun: "nosotros", form: "vemos" },
                    { pronoun: "vosotros", form: "veis" },
                    { pronoun: "ellos", form: "ven" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "ve" },
                    { pronoun: "usted", form: "vea" },
                    { pronoun: "nosotros", form: "veamos" },
                    { pronoun: "vosotros", form: "ved" },
                    { pronoun: "ustedes", form: "vean" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-30",
        level: "A1",
        infinitive: "dar",
        meaning: "to give",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "doy" },
                    { pronoun: "tú", form: "das" },
                    { pronoun: "él/ella", form: "da" },
                    { pronoun: "nosotros", form: "damos" },
                    { pronoun: "vosotros", form: "dais" },
                    { pronoun: "ellos", form: "dan" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "da" },
                    { pronoun: "usted", form: "dé" },
                    { pronoun: "nosotros", form: "demos" },
                    { pronoun: "vosotros", form: "dad" },
                    { pronoun: "ustedes", form: "den" }
                ]
            }
        ]
    },
    {
        id: "es-vb-a1-31",
        level: "A1",
        infinitive: "traer",
        meaning: "to bring",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "yo", form: "traigo" },
                    { pronoun: "tú", form: "traes" },
                    { pronoun: "él/ella", form: "trae" },
                    { pronoun: "nosotros", form: "traemos" },
                    { pronoun: "vosotros", form: "traéis" },
                    { pronoun: "ellos", form: "traen" }
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tú", form: "trae" },
                    { pronoun: "usted", form: "traiga" },
                    { pronoun: "nosotros", form: "traigamos" },
                    { pronoun: "vosotros", form: "traed" },
                    { pronoun: "ustedes", form: "traigan" }
                ]
            }
        ]
    }
]
