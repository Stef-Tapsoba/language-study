// src/data/french/units/b1.ts
import { LessonUnit } from "../../../types"

// 5 B1 unit stubs. Content TBD.

export const b1Units: LessonUnit[] = [
    {
        id: "fr-b1-u1",
        level: "B1",
        order: 1,
        title: "Expressing Obligation & Hypothesis",
        description: "Use devoir and the conditionnel to express what must happen and what would happen.",
        grammarIds: ["fr-g-b1-2"],
        vocabIds: ["fr-v-b1-1", "fr-v-b1-2", "fr-v-b1-3"],
        verbIds: ["fr-vb-b1-2"],
        testQuestions: [
            { id: "fr-uq-b1-1-1", level: "B1", prompt: "Complete (conditionnel): 'Avec plus de temps, je ___ plus.' (voyager)", options: ["voyage", "voyagerai", "voyagerais", "voyageais"], answer: "voyagerais" },
            { id: "fr-uq-b1-1-2", level: "B1", prompt: "How do you say 'You should study more'?", options: ["Tu dois étudier plus.", "Tu devras étudier plus.", "Tu devrais étudier plus.", "Tu devais étudier plus."], answer: "Tu devrais étudier plus." },
            { id: "fr-uq-b1-1-3", level: "B1", prompt: "What does 'de plus' mean?", options: ["in addition", "furthermore", "however", "even more"], answer: "furthermore" },
            { id: "fr-uq-b1-1-4", level: "B1", prompt: "What does 'environ' mean?", options: ["environment", "around / about", "everywhere", "nearby"], answer: "around / about" },
            { id: "fr-uq-b1-1-5", level: "B1", prompt: "Complete (conditionnel of devoir — tu): 'Tu ___ étudier davantage.'", options: ["dois", "devais", "devrais", "devras"], answer: "devrais" },
        ]
    },
    {
        id: "fr-b1-u2",
        level: "B1",
        order: 2,
        title: "The Subjunctive",
        description: "Use the subjonctif after expressions of doubt, emotion, desire, and necessity.",
        grammarIds: ["fr-g-b1-1"],
        vocabIds: ["fr-v-b1-4", "fr-v-b1-5", "fr-v-b1-6"],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-b1-2-1", level: "B1", prompt: "Complete (subjonctif): 'Il faut que tu ___ (venir).'", options: ["viens", "viendras", "viennes", "venais"], answer: "viennes" },
            { id: "fr-uq-b1-2-2", level: "B1", prompt: "Complete (subjonctif): 'Je veux qu'il ___ (être) heureux.'", options: ["est", "soit", "sera", "était"], answer: "soit" },
            { id: "fr-uq-b1-2-3", level: "B1", prompt: "What does 'l'environnement' mean?", options: ["surroundings", "environment", "countryside", "nature"], answer: "environment" },
            { id: "fr-uq-b1-2-4", level: "B1", prompt: "What does 'la société' mean?", options: ["company", "sociology", "society", "association"], answer: "society" },
            { id: "fr-uq-b1-2-5", level: "B1", prompt: "Which expression triggers the subjunctive?", options: ["Je sais que", "Il est certain que", "Il faut que", "Il est vrai que"], answer: "Il faut que" },
        ]
    },
    {
        id: "fr-b1-u3",
        level: "B1",
        order: 3,
        title: "Past Tenses in Context",
        description: "Use imparfait and passé composé together correctly — background vs. events.",
        grammarIds: ["fr-g-b1-3"],
        vocabIds: ["fr-v-b1-7", "fr-v-b1-8", "fr-v-b1-9"],
        verbIds: ["fr-vb-b1-1"],
        testQuestions: [
            { id: "fr-uq-b1-3-1", level: "B1", prompt: "Complete: 'Je ___ (lire) quand il est arrivé.' (background action)", options: ["lisais", "ai lu", "lirai", "lirais"], answer: "lisais" },
            { id: "fr-uq-b1-3-2", level: "B1", prompt: "Which tense is used for a completed event that interrupted something?", options: ["imparfait", "passé composé", "plus-que-parfait", "conditionnel"], answer: "passé composé" },
            { id: "fr-uq-b1-3-3", level: "B1", prompt: "What does 'le défi' mean?", options: ["environment", "challenge", "opinion", "society"], answer: "challenge" },
            { id: "fr-uq-b1-3-4", level: "B1", prompt: "What does 'selon' mean?", options: ["suddenly", "according to", "however", "around"], answer: "according to" },
            { id: "fr-uq-b1-3-5", level: "B1", prompt: "What does 'actuellement' mean?", options: ["actually", "currently", "eventually", "previously"], answer: "currently" },
        ]
    },
    {
        id: "fr-b1-u4",
        level: "B1",
        order: 4,
        title: "Relative Pronouns",
        description: "Use qui, que, dont, and où to link clauses and speak in more complex sentences.",
        grammarIds: ["fr-g-b1-4"],
        vocabIds: ["fr-v-b1-10"],
        verbIds: ["fr-vb-b1-3"],
        testQuestions: [
            { id: "fr-uq-b1-4-1", level: "B1", prompt: "Which pronom relatif replaces the subject?", options: ["que", "dont", "où", "qui"], answer: "qui" },
            { id: "fr-uq-b1-4-2", level: "B1", prompt: "Complete: 'Le livre ___ je lis est passionnant.'", options: ["qui", "que", "dont", "où"], answer: "que" },
            { id: "fr-uq-b1-4-3", level: "B1", prompt: "Which relative pronoun means 'of which / whose'?", options: ["qui", "que", "dont", "où"], answer: "dont" },
            { id: "fr-uq-b1-4-4", level: "B1", prompt: "Complete: 'La ville ___ j'habite est belle.'", options: ["qui", "que", "dont", "où"], answer: "où" },
            { id: "fr-uq-b1-4-5", level: "B1", prompt: "What does 'par contre' mean?", options: ["on the other hand", "therefore", "in addition", "according to"], answer: "on the other hand" },
        ]
    },
    {
        id: "fr-b1-u5",
        level: "B1",
        order: 5,
        title: "The Pluperfect & Advanced Narration",
        description: "Use the plus-que-parfait to describe actions that had occurred before other past events.",
        grammarIds: ["fr-g-b1-5"],
        vocabIds: [],
        verbIds: ["fr-vb-b1-4"],
        testQuestions: [
            { id: "fr-uq-b1-5-1", level: "B1", prompt: "How is the plus-que-parfait formed?", options: ["Present of avoir/être + past participle", "Imparfait of avoir/être + past participle", "Future of avoir/être + past participle", "Conditionnel + past participle"], answer: "Imparfait of avoir/être + past participle" },
            { id: "fr-uq-b1-5-2", level: "B1", prompt: "Complete (plus-que-parfait): 'Quand je suis arrivé, il ___ déjà mangé.'", options: ["est parti", "partait", "était parti", "partira"], answer: "était parti" },
            { id: "fr-uq-b1-5-3", level: "B1", prompt: "What does 'en revanche' mean?", options: ["in return", "on the other hand", "furthermore", "therefore"], answer: "on the other hand" },
            { id: "fr-uq-b1-5-4", level: "B1", prompt: "Complete: 'Nous ___ fini le travail quand il est venu.' (plus-que-parfait)", options: ["avons", "avions", "avions eu", "avons eu"], answer: "avions" },
            { id: "fr-uq-b1-5-5", level: "B1", prompt: "What does 'l'opinion' mean?", options: ["option", "opinion", "opposition", "opportunity"], answer: "opinion" },
        ]
    },
]
