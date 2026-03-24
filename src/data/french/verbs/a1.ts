// src/data/french/verbs/a1.ts
import { Verb } from "../../../types"

// 13 core A1 verbs. Present tense only at A1 — passé composé is introduced at A2.
// vouloir and pouvoir moved here from A2: both are essential for basic A1 interaction.

export const a1Verbs: Verb[] = [
    {
        id: "fr-vb-a1-1",
        level: "A1",
        infinitive: "être",
        meaning: "to be",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "suis" },
                { pronoun: "tu", form: "es" },
                { pronoun: "il/elle", form: "est" },
                { pronoun: "nous", form: "sommes" },
                { pronoun: "vous", form: "êtes" },
                { pronoun: "ils/elles", form: "sont" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-2",
        level: "A1",
        infinitive: "avoir",
        meaning: "to have",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "ai" },
                { pronoun: "tu", form: "as" },
                { pronoun: "il/elle", form: "a" },
                { pronoun: "nous", form: "avons" },
                { pronoun: "vous", form: "avez" },
                { pronoun: "ils/elles", form: "ont" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-3",
        level: "A1",
        infinitive: "aller",
        meaning: "to go",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "vais" },
                { pronoun: "tu", form: "vas" },
                { pronoun: "il/elle", form: "va" },
                { pronoun: "nous", form: "allons" },
                { pronoun: "vous", form: "allez" },
                { pronoun: "ils/elles", form: "vont" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-4",
        level: "A1",
        infinitive: "faire",
        meaning: "to do / to make",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "fais" },
                { pronoun: "tu", form: "fais" },
                { pronoun: "il/elle", form: "fait" },
                { pronoun: "nous", form: "faisons" },
                { pronoun: "vous", form: "faites" },
                { pronoun: "ils/elles", form: "font" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-5",
        level: "A1",
        infinitive: "parler",
        meaning: "to speak / to talk",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "parle" },
                { pronoun: "tu", form: "parles" },
                { pronoun: "il/elle", form: "parle" },
                { pronoun: "nous", form: "parlons" },
                { pronoun: "vous", form: "parlez" },
                { pronoun: "ils/elles", form: "parlent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-6",
        level: "A1",
        infinitive: "vouloir",
        meaning: "to want",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "veux" },
                { pronoun: "tu", form: "veux" },
                { pronoun: "il/elle", form: "veut" },
                { pronoun: "nous", form: "voulons" },
                { pronoun: "vous", form: "voulez" },
                { pronoun: "ils/elles", form: "veulent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-7",
        level: "A1",
        infinitive: "pouvoir",
        meaning: "to be able to / can",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "peux" },
                { pronoun: "tu", form: "peux" },
                { pronoun: "il/elle", form: "peut" },
                { pronoun: "nous", form: "pouvons" },
                { pronoun: "vous", form: "pouvez" },
                { pronoun: "ils/elles", form: "peuvent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-8",
        level: "A1",
        infinitive: "manger",
        meaning: "to eat",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "mange" },
                { pronoun: "tu", form: "manges" },
                { pronoun: "il/elle", form: "mange" },
                { pronoun: "nous", form: "mangeons" },
                { pronoun: "vous", form: "mangez" },
                { pronoun: "ils/elles", form: "mangent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-9",
        level: "A1",
        infinitive: "boire",
        meaning: "to drink",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "bois" },
                { pronoun: "tu", form: "bois" },
                { pronoun: "il/elle", form: "boit" },
                { pronoun: "nous", form: "buvons" },
                { pronoun: "vous", form: "buvez" },
                { pronoun: "ils/elles", form: "boivent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-10",
        level: "A1",
        infinitive: "venir",
        meaning: "to come",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "viens" },
                { pronoun: "tu", form: "viens" },
                { pronoun: "il/elle", form: "vient" },
                { pronoun: "nous", form: "venons" },
                { pronoun: "vous", form: "venez" },
                { pronoun: "ils/elles", form: "viennent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-11",
        level: "A1",
        infinitive: "prendre",
        meaning: "to take / to have (food or transport)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "prends" },
                { pronoun: "tu", form: "prends" },
                { pronoun: "il/elle", form: "prend" },
                { pronoun: "nous", form: "prenons" },
                { pronoun: "vous", form: "prenez" },
                { pronoun: "ils/elles", form: "prennent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-12",
        level: "A1",
        infinitive: "lire",
        meaning: "to read",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "lis" },
                { pronoun: "tu", form: "lis" },
                { pronoun: "il/elle", form: "lit" },
                { pronoun: "nous", form: "lisons" },
                { pronoun: "vous", form: "lisez" },
                { pronoun: "ils/elles", form: "lisent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-13",
        level: "A1",
        infinitive: "habiter",
        meaning: "to live (somewhere) / to reside",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "habite" },
                { pronoun: "tu", form: "habites" },
                { pronoun: "il/elle", form: "habite" },
                { pronoun: "nous", form: "habitons" },
                { pronoun: "vous", form: "habitez" },
                { pronoun: "ils/elles", form: "habitent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-14",
        level: "A1",
        infinitive: "finir",
        meaning: "to finish",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "finis" },
                { pronoun: "tu", form: "finis" },
                { pronoun: "il/elle", form: "finit" },
                { pronoun: "nous", form: "finissons" },
                { pronoun: "vous", form: "finissez" },
                { pronoun: "ils/elles", form: "finissent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-15",
        level: "A1",
        infinitive: "choisir",
        meaning: "to choose",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "choisis" },
                { pronoun: "tu", form: "choisis" },
                { pronoun: "il/elle", form: "choisit" },
                { pronoun: "nous", form: "choisissons" },
                { pronoun: "vous", form: "choisissez" },
                { pronoun: "ils/elles", form: "choisissent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-16",
        level: "A1",
        infinitive: "réussir",
        meaning: "to succeed / to pass (an exam)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "réussis" },
                { pronoun: "tu", form: "réussis" },
                { pronoun: "il/elle", form: "réussit" },
                { pronoun: "nous", form: "réussissons" },
                { pronoun: "vous", form: "réussissez" },
                { pronoun: "ils/elles", form: "réussissent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-17",
        level: "A1",
        infinitive: "attendre",
        meaning: "to wait (for)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "attends" },
                { pronoun: "tu", form: "attends" },
                { pronoun: "il/elle", form: "attend" },
                { pronoun: "nous", form: "attendons" },
                { pronoun: "vous", form: "attendez" },
                { pronoun: "ils/elles", form: "attendent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-18",
        level: "A1",
        infinitive: "vendre",
        meaning: "to sell",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "vends" },
                { pronoun: "tu", form: "vends" },
                { pronoun: "il/elle", form: "vend" },
                { pronoun: "nous", form: "vendons" },
                { pronoun: "vous", form: "vendez" },
                { pronoun: "ils/elles", form: "vendent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-19",
        level: "A1",
        infinitive: "répondre",
        meaning: "to answer / to reply",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "réponds" },
                { pronoun: "tu", form: "réponds" },
                { pronoun: "il/elle", form: "répond" },
                { pronoun: "nous", form: "répondons" },
                { pronoun: "vous", form: "répondez" },
                { pronoun: "ils/elles", form: "répondent" }
            ]
        }]
    },
    {
        id: "fr-vb-a1-20",
        level: "A1",
        infinitive: "devoir",
        meaning: "must / to have to",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "dois" },
                { pronoun: "tu", form: "dois" },
                { pronoun: "il/elle", form: "doit" },
                { pronoun: "nous", form: "devons" },
                { pronoun: "vous", form: "devez" },
                { pronoun: "ils/elles", form: "doivent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-21",
        level: "A1",
        infinitive: "écouter",
        meaning: "to listen",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "je", form: "écoute" },
                    { pronoun: "tu", form: "écoutes" },
                    { pronoun: "il/elle", form: "écoute" },
                    { pronoun: "nous", form: "écoutons" },
                    { pronoun: "vous", form: "écoutez" },
                    { pronoun: "ils/elles", form: "écoutent" },
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tu", form: "écoute" },
                    { pronoun: "nous", form: "écoutons" },
                    { pronoun: "vous", form: "écoutez" },
                ]
            }
        ]
    },
    {
        id: "fr-vb-a1-22",
        level: "A1",
        infinitive: "regarder",
        meaning: "to look / to watch",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "je", form: "regarde" },
                    { pronoun: "tu", form: "regardes" },
                    { pronoun: "il/elle", form: "regarde" },
                    { pronoun: "nous", form: "regardons" },
                    { pronoun: "vous", form: "regardez" },
                    { pronoun: "ils/elles", form: "regardent" },
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tu", form: "regarde" },
                    { pronoun: "nous", form: "regardons" },
                    { pronoun: "vous", form: "regardez" },
                ]
            }
        ]
    },
    {
        id: "fr-vb-a1-23",
        level: "A1",
        infinitive: "répéter",
        meaning: "to repeat",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "je", form: "répète" },
                    { pronoun: "tu", form: "répètes" },
                    { pronoun: "il/elle", form: "répète" },
                    { pronoun: "nous", form: "répétons" },
                    { pronoun: "vous", form: "répétez" },
                    { pronoun: "ils/elles", form: "répètent" },
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tu", form: "répète" },
                    { pronoun: "nous", form: "répétons" },
                    { pronoun: "vous", form: "répétez" },
                ]
            }
        ]
    },
    {
        id: "fr-vb-a1-25",
        level: "A1",
        infinitive: "s'appeler",
        meaning: "to be called / to introduce oneself",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "m'appelle" },
                { pronoun: "tu", form: "t'appelles" },
                { pronoun: "il/elle", form: "s'appelle" },
                { pronoun: "nous", form: "nous appelons" },
                { pronoun: "vous", form: "vous appelez" },
                { pronoun: "ils/elles", form: "s'appellent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-26",
        level: "A1",
        infinitive: "aimer",
        meaning: "to like / to love",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "aime" },
                { pronoun: "tu", form: "aimes" },
                { pronoun: "il/elle", form: "aime" },
                { pronoun: "nous", form: "aimons" },
                { pronoun: "vous", form: "aimez" },
                { pronoun: "ils/elles", form: "aiment" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-27",
        level: "A1",
        infinitive: "travailler",
        meaning: "to work",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "travaille" },
                { pronoun: "tu", form: "travailles" },
                { pronoun: "il/elle", form: "travaille" },
                { pronoun: "nous", form: "travaillons" },
                { pronoun: "vous", form: "travaillez" },
                { pronoun: "ils/elles", form: "travaillent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-28",
        level: "A1",
        infinitive: "partir",
        meaning: "to leave / to depart",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "pars" },
                { pronoun: "tu", form: "pars" },
                { pronoun: "il/elle", form: "part" },
                { pronoun: "nous", form: "partons" },
                { pronoun: "vous", form: "partez" },
                { pronoun: "ils/elles", form: "partent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-29",
        level: "A1",
        infinitive: "sortir",
        meaning: "to go out",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "sors" },
                { pronoun: "tu", form: "sors" },
                { pronoun: "il/elle", form: "sort" },
                { pronoun: "nous", form: "sortons" },
                { pronoun: "vous", form: "sortez" },
                { pronoun: "ils/elles", form: "sortent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-30",
        level: "A1",
        infinitive: "dormir",
        meaning: "to sleep",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "dors" },
                { pronoun: "tu", form: "dors" },
                { pronoun: "il/elle", form: "dort" },
                { pronoun: "nous", form: "dormons" },
                { pronoun: "vous", form: "dormez" },
                { pronoun: "ils/elles", form: "dorment" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-31",
        level: "A1",
        infinitive: "voir",
        meaning: "to see",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "vois" },
                { pronoun: "tu", form: "vois" },
                { pronoun: "il/elle", form: "voit" },
                { pronoun: "nous", form: "voyons" },
                { pronoun: "vous", form: "voyez" },
                { pronoun: "ils/elles", form: "voient" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-32",
        level: "A1",
        infinitive: "mettre",
        meaning: "to put / to put on (clothing)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "mets" },
                { pronoun: "tu", form: "mets" },
                { pronoun: "il/elle", form: "met" },
                { pronoun: "nous", form: "mettons" },
                { pronoun: "vous", form: "mettez" },
                { pronoun: "ils/elles", form: "mettent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-33",
        level: "A1",
        infinitive: "écrire",
        meaning: "to write",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "écris" },
                { pronoun: "tu", form: "écris" },
                { pronoun: "il/elle", form: "écrit" },
                { pronoun: "nous", form: "écrivons" },
                { pronoun: "vous", form: "écrivez" },
                { pronoun: "ils/elles", form: "écrivent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-34",
        level: "A1",
        infinitive: "savoir",
        meaning: "to know (a fact / how to do something)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "sais" },
                { pronoun: "tu", form: "sais" },
                { pronoun: "il/elle", form: "sait" },
                { pronoun: "nous", form: "savons" },
                { pronoun: "vous", form: "savez" },
                { pronoun: "ils/elles", form: "savent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-35",
        level: "A1",
        infinitive: "connaître",
        meaning: "to know (a person / a place)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "connais" },
                { pronoun: "tu", form: "connais" },
                { pronoun: "il/elle", form: "connaît" },
                { pronoun: "nous", form: "connaissons" },
                { pronoun: "vous", form: "connaissez" },
                { pronoun: "ils/elles", form: "connaissent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-36",
        level: "A1",
        infinitive: "se lever",
        meaning: "to get up",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "me lève" },
                { pronoun: "tu", form: "te lèves" },
                { pronoun: "il/elle", form: "se lève" },
                { pronoun: "nous", form: "nous levons" },
                { pronoun: "vous", form: "vous levez" },
                { pronoun: "ils/elles", form: "se lèvent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-37",
        level: "A1",
        infinitive: "se coucher",
        meaning: "to go to bed",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "me couche" },
                { pronoun: "tu", form: "te couches" },
                { pronoun: "il/elle", form: "se couche" },
                { pronoun: "nous", form: "nous couchons" },
                { pronoun: "vous", form: "vous couchez" },
                { pronoun: "ils/elles", form: "se couchent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-38",
        level: "A1",
        infinitive: "se laver",
        meaning: "to wash (oneself)",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "me lave" },
                { pronoun: "tu", form: "te laves" },
                { pronoun: "il/elle", form: "se lave" },
                { pronoun: "nous", form: "nous lavons" },
                { pronoun: "vous", form: "vous lavez" },
                { pronoun: "ils/elles", form: "se lavent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-39",
        level: "A1",
        infinitive: "s'habiller",
        meaning: "to get dressed",
        conjugations: [{
            tense: "Present",
            forms: [
                { pronoun: "je", form: "m'habille" },
                { pronoun: "tu", form: "t'habilles" },
                { pronoun: "il/elle", form: "s'habille" },
                { pronoun: "nous", form: "nous habillons" },
                { pronoun: "vous", form: "vous habillez" },
                { pronoun: "ils/elles", form: "s'habillent" },
            ]
        }]
    },
    {
        id: "fr-vb-a1-24",
        level: "A1",
        infinitive: "entrer",
        meaning: "to enter / to come in",
        conjugations: [
            {
                tense: "Present",
                forms: [
                    { pronoun: "je", form: "entre" },
                    { pronoun: "tu", form: "entres" },
                    { pronoun: "il/elle", form: "entre" },
                    { pronoun: "nous", form: "entrons" },
                    { pronoun: "vous", form: "entrez" },
                    { pronoun: "ils/elles", form: "entrent" },
                ]
            },
            {
                tense: "Imperative",
                forms: [
                    { pronoun: "tu", form: "entre" },
                    { pronoun: "nous", form: "entrons" },
                    { pronoun: "vous", form: "entrez" },
                ]
            }
        ]
    },
]
