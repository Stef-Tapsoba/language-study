// src/data/french/units/a2.ts
import { LessonUnit } from "../../../types"

// 4 A2 unit stubs. Content TBD.

export const a2Units: LessonUnit[] = [
    {
        id: "fr-a2-u1",
        level: "A2",
        order: 1,
        title: "Talking About the Past",
        description: "Master the passé composé for completed past actions with avoir and être.",
        grammarIds: ["fr-g-a2-1"],
        vocabIds: ["fr-v-a2-1", "fr-v-a2-2", "fr-v-a2-3"],
        verbIds: ["fr-vb-a2-1", "fr-vb-a2-2"],
        testQuestions: [
            { id: "fr-uq-a2-1-1", level: "A2", prompt: "Complete (passé composé): 'Hier, nous ___ au restaurant.' (manger)", options: ["mangeons", "mangions", "avons mangé", "avions mangé"], answer: "avons mangé" },
            { id: "fr-uq-a2-1-2", level: "A2", prompt: "Which auxiliary verb do movement verbs like 'partir' use in the passé composé?", options: ["avoir", "faire", "aller", "être"], answer: "être" },
            { id: "fr-uq-a2-1-3", level: "A2", prompt: "Complete: 'Elle ___ arrivée en retard.' (passé composé)", options: ["a", "est", "avait", "était"], answer: "est" },
            { id: "fr-uq-a2-1-4", level: "A2", prompt: "Complete: 'Ils ___ partis ce matin.' (passé composé)", options: ["ont", "sont", "avaient", "étaient"], answer: "sont" },
            { id: "fr-uq-a2-1-5", level: "A2", prompt: "What does 'le voyage' mean?", options: ["adventure", "holiday", "trip", "journey abroad"], answer: "trip" },
        ]
    },
    {
        id: "fr-a2-u2",
        level: "A2",
        order: 2,
        title: "Describing the Past",
        description: "Use the imparfait to describe habitual past actions, background states, and ongoing situations.",
        grammarIds: ["fr-g-a2-2"],
        vocabIds: ["fr-v-a2-4", "fr-v-a2-5", "fr-v-a2-6", "fr-v-a2-7"],
        verbIds: ["fr-vb-a2-3"],
        testQuestions: [
            { id: "fr-uq-a2-2-1", level: "A2", prompt: "How do you say 'She used to work in Paris'?", options: ["Elle a travaillé à Paris.", "Elle travaillait à Paris.", "Elle travaille à Paris.", "Elle va travailler à Paris."], answer: "Elle travaillait à Paris." },
            { id: "fr-uq-a2-2-2", level: "A2", prompt: "What is the imparfait stem for most verbs?", options: ["the infinitive minus -r", "the nous present form minus -ons", "the il/elle present form", "the past participle"], answer: "the nous present form minus -ons" },
            { id: "fr-uq-a2-2-3", level: "A2", prompt: "Complete (imparfait): 'Quand j'étais enfant, je ___ au foot.' (jouer)", options: ["joue", "ai joué", "jouais", "jouera"], answer: "jouais" },
            { id: "fr-uq-a2-2-4", level: "A2", prompt: "What does 'cependant' mean?", options: ["therefore", "however", "although", "because"], answer: "however" },
            { id: "fr-uq-a2-2-5", level: "A2", prompt: "What does 'pourtant' mean?", options: ["therefore", "because", "yet / nevertheless", "if"], answer: "yet / nevertheless" },
        ]
    },
    {
        id: "fr-a2-u3",
        level: "A2",
        order: 3,
        title: "Object Pronouns & Partitive Articles",
        description: "Learn to replace nouns with direct object pronouns and express quantities with partitive articles.",
        grammarIds: ["fr-g-a2-3", "fr-g-a2-4"],
        vocabIds: ["fr-v-a2-8", "fr-v-a2-9", "fr-v-a2-10"],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-3-1", level: "A2", prompt: "Replace 'Je vois Marie' with a pronoun: 'Je ___ vois.'", options: ["lui", "leur", "la", "le"], answer: "la" },
            { id: "fr-uq-a2-3-2", level: "A2", prompt: "What is the partitive article for a masculine noun?", options: ["de la", "de l'", "des", "du"], answer: "du" },
            { id: "fr-uq-a2-3-3", level: "A2", prompt: "After negation, 'du/de la/des' becomes...?", options: ["d'un", "de", "du/de la", "des"], answer: "de" },
            { id: "fr-uq-a2-3-4", level: "A2", prompt: "Complete: 'Il ___ aide beaucoup.' (nous)", options: ["me", "vous", "nous", "leur"], answer: "nous" },
            { id: "fr-uq-a2-3-5", level: "A2", prompt: "Complete: 'Je bois ___ eau.' (partitive)", options: ["du", "de la", "de l'", "des"], answer: "de l'" },
        ]
    },
    {
        id: "fr-a2-u4",
        level: "A2",
        order: 4,
        title: "Describing & Comparing",
        description: "Use adjective agreement confidently and begin comparing people and things.",
        grammarIds: [],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-4-1", level: "A2", prompt: "Feminine form of 'nouveau'?", options: ["nouvelles", "nouveaux", "nouvelle", "nouveau"], answer: "nouvelle" },
            { id: "fr-uq-a2-4-2", level: "A2", prompt: "How do you say 'She arrived late' (passé composé)?", options: ["Elle a arrivé tard.", "Elle est arrivée tard.", "Elle arrivait tard.", "Elle arrive tard."], answer: "Elle est arrivée tard." },
            { id: "fr-uq-a2-4-3", level: "A2", prompt: "What does 'la réunion' mean?", options: ["reunion", "party", "meeting", "gathering"], answer: "meeting" },
            { id: "fr-uq-a2-4-4", level: "A2", prompt: "What does 'la chance' mean?", options: ["change", "choice", "luck", "chance meeting"], answer: "luck" },
            { id: "fr-uq-a2-4-5", level: "A2", prompt: "What does 'le quartier' mean?", options: ["quarter hour", "quarter of something", "neighbourhood", "town square"], answer: "neighbourhood" },
        ]
    },
]
