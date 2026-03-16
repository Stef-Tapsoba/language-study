// src/data/french/verbs/a1.ts
import { Verb } from "../../../types"

// 7 core A1 verbs. Present tense only at A1 — passé composé is introduced at A2.
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
]
