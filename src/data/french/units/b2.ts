// src/data/french/units/b2.ts
import { LessonUnit } from "../../../types"

export const b2Units: LessonUnit[] = [
    {
        id: "fr-b2-u1",
        level: "B2",
        order: 1,
        title: "Le Subjonctif Passé",
        description: "Master the past subjunctive to express completed actions under conditions of doubt, emotion, and necessity.",
        grammarIds: ["fr-g-b2-1"],
        vocabIds: ["fr-v-b2-073", "fr-v-b2-069", "fr-v-b2-070", "fr-v-b2-075", "fr-v-b2-077"],
        verbIds: ["fr-vb-b2-2"],
        testQuestions: [
            { id: "fr-b2-u1-q1", level: "B2", prompt: "Complete using subjonctif passé: 'Bien qu'il ___ (finir) son travail, il n'est pas content.'", options: ["a fini", "finisse", "ait fini", "avait fini"], answer: "ait fini" },
            { id: "fr-b2-u1-q2", level: "B2", prompt: "Complete: 'Je suis heureuse qu'elle ___ (venir) à la fête.'", options: ["est venue", "soit venue", "venait", "vienne"], answer: "soit venue" },
            { id: "fr-b2-u1-q3", level: "B2", prompt: "Which sentence correctly uses the subjonctif passé?", options: ["Je doute qu'il a compris.", "Il est dommage qu'elle soit partie.", "Bien que nous avons fini.", "Je veux qu'elle ait fini."], answer: "Il est dommage qu'elle soit partie." },
            { id: "fr-b2-u1-q4", level: "B2", prompt: "What does 'bien que' require in French grammar?", options: ["Indicatif", "Subjonctif", "Conditionnel", "Infinitif"], answer: "Subjonctif" },
            { id: "fr-b2-u1-q5", level: "B2", prompt: "What is the subjonctif passé of 'vouloir' (il/elle)?", options: ["ait voulu", "avait voulu", "voulait", "aurait voulu"], answer: "ait voulu" },
            { id: "fr-b2-u1-q6", level: "B2", prompt: "What does 'néanmoins' mean?", options: ["furthermore", "nevertheless", "therefore", "although"], answer: "nevertheless" },
        ]
    },
    {
        id: "fr-b2-u2",
        level: "B2",
        order: 2,
        title: "La Voix Passive",
        description: "Learn to construct and use the passive voice in different tenses with the agent introduced by 'par'.",
        grammarIds: ["fr-g-b2-2"],
        vocabIds: ["fr-v-b2-004", "fr-v-b2-005", "fr-v-b2-055", "fr-v-b2-057", "fr-v-b2-060"],
        verbIds: ["fr-vb-b2-3"],
        testQuestions: [
            { id: "fr-b2-u2-q1", level: "B2", prompt: "Transform to passive: 'Victor Hugo a écrit ce roman.'", options: ["Ce roman écrivait par Victor Hugo.", "Ce roman a été écrit par Victor Hugo.", "Ce roman était écrit par Victor Hugo.", "Ce roman est écrit Victor Hugo."], answer: "Ce roman a été écrit par Victor Hugo." },
            { id: "fr-b2-u2-q2", level: "B2", prompt: "Complete: 'Les résultats ___ publiés demain.' (passive, futur)", options: ["sont", "seront", "ont été", "étaient"], answer: "seront" },
            { id: "fr-b2-u2-q3", level: "B2", prompt: "Which sentence is correctly formed in the passive voice?", options: ["La loi a été voté par le parlement.", "La loi a été votée par le parlement.", "La loi était voté par le parlement.", "La loi a votée par le parlement."], answer: "La loi a été votée par le parlement." },
            { id: "fr-b2-u2-q4", level: "B2", prompt: "What is the role of 'par' in a passive sentence?", options: ["It introduces the subject.", "It introduces the agent.", "It indicates time.", "It introduces the object."], answer: "It introduces the agent." },
            { id: "fr-b2-u2-q5", level: "B2", prompt: "What does 'le tribunal' mean?", options: ["the government", "the court", "the parliament", "the police"], answer: "the court" },
            { id: "fr-b2-u2-q6", level: "B2", prompt: "What is the passé composé of 'avoir' (nous)?", options: ["avions eu", "avons eu", "aurons eu", "aurions eu"], answer: "avons eu" },
        ]
    },
    {
        id: "fr-b2-u3",
        level: "B2",
        order: 3,
        title: "Pronoms Relatifs Complexes",
        description: "Use lequel, auquel, dont (advanced), and duquel to construct sophisticated relative clauses.",
        grammarIds: ["fr-g-b2-3"],
        vocabIds: ["fr-v-b2-029", "fr-v-b2-030", "fr-v-b2-039", "fr-v-b2-064", "fr-v-b2-067"],
        verbIds: [],
        testQuestions: [
            { id: "fr-b2-u3-q1", level: "B2", prompt: "Complete: 'C'est le projet sur ___ nous travaillons.' (thing + preposition)", options: ["qui", "que", "lequel", "dont"], answer: "lequel" },
            { id: "fr-b2-u3-q2", level: "B2", prompt: "Complete: 'Le comité ___ elle appartient se réunit chaque mois.' (appartenir à)", options: ["auquel", "lequel", "dont", "duquel"], answer: "auquel" },
            { id: "fr-b2-u3-q3", level: "B2", prompt: "Complete: 'C'est l'auteur ___ j'admire le style.' (possession)", options: ["que", "qui", "dont", "lequel"], answer: "dont" },
            { id: "fr-b2-u3-q4", level: "B2", prompt: "Which pronoun is used after a compound preposition ending in 'de' (e.g., 'à côté de')?", options: ["dont", "duquel / de laquelle", "auquel", "lequel"], answer: "duquel / de laquelle" },
            { id: "fr-b2-u3-q5", level: "B2", prompt: "What does 'l'idéologie' mean?", options: ["ideal", "identity", "ideology", "illusion"], answer: "ideology" },
            { id: "fr-b2-u3-q6", level: "B2", prompt: "Complete: 'L'immeuble à côté ___ se trouve la mairie est ancien.'", options: ["dont", "duquel", "lequel", "auquel"], answer: "duquel" },
        ]
    },
    {
        id: "fr-b2-u4",
        level: "B2",
        order: 4,
        title: "Le Discours Indirect au Passé",
        description: "Report what people said in the past, applying tense backshift and adapting time expressions correctly.",
        grammarIds: ["fr-g-b2-4"],
        vocabIds: ["fr-v-b2-001", "fr-v-b2-006", "fr-v-b2-008", "fr-v-b2-071", "fr-v-b2-074"],
        verbIds: ["fr-vb-b2-2"],
        testQuestions: [
            { id: "fr-b2-u4-q1", level: "B2", prompt: "Report: 'Je viendrai demain.' → Il a dit qu'il ___.", options: ["viendrait le lendemain", "viendra le lendemain", "venait demain", "est venu demain"], answer: "viendrait le lendemain" },
            { id: "fr-b2-u4-q2", level: "B2", prompt: "Report: 'Est-ce que tu as fini?' → Elle a demandé si ___.", options: ["tu as fini", "j'avais fini", "tu avais fini", "j'avais terminé"], answer: "j'avais fini" },
            { id: "fr-b2-u4-q3", level: "B2", prompt: "Which tense does the présent become in reported speech after a past reporting verb?", options: ["Passé composé", "Imparfait", "Plus-que-parfait", "Futur antérieur"], answer: "Imparfait" },
            { id: "fr-b2-u4-q4", level: "B2", prompt: "How does 'aujourd'hui' change in reported speech in the past?", options: ["le lendemain", "la veille", "ce jour-là", "ce soir-là"], answer: "ce jour-là" },
            { id: "fr-b2-u4-q5", level: "B2", prompt: "What does 'il convient de souligner' mean?", options: ["it is necessary to underline", "it is worth emphasising", "it is important to know", "it seems worth noting"], answer: "it is worth emphasising" },
            { id: "fr-b2-u4-q6", level: "B2", prompt: "What is the imparfait of 'vouloir' (ils/elles)?", options: ["voulaient", "veulent", "voudraient", "voulurent"], answer: "voulaient" },
        ]
    },
    {
        id: "fr-b2-u5",
        level: "B2",
        order: 5,
        title: "Le Conditionnel Passé",
        description: "Use the past conditional to express hypothetical past events, regrets, and unconfirmed information.",
        grammarIds: ["fr-g-b2-5"],
        vocabIds: ["fr-v-b2-065", "fr-v-b2-066", "fr-v-b2-068", "fr-v-b2-079", "fr-v-b2-076"],
        verbIds: ["fr-vb-b2-1", "fr-vb-b2-2"],
        testQuestions: [
            { id: "fr-b2-u5-q1", level: "B2", prompt: "Complete: 'Si j'avais su, je ___ accepté ce poste.' (conditionnel passé)", options: ["n'aurais pas", "n'ai pas", "ne serais pas", "n'avais pas"], answer: "n'aurais pas" },
            { id: "fr-b2-u5-q2", level: "B2", prompt: "How is the conditionnel passé formed?", options: ["Futur + participe passé", "Conditionnel présent de avoir/être + participe passé", "Subjonctif présent + participe passé", "Imparfait de avoir/être + participe passé"], answer: "Conditionnel présent de avoir/être + participe passé" },
            { id: "fr-b2-u5-q3", level: "B2", prompt: "What is the conditionnel passé of 'vouloir' (je)?", options: ["aurais voulu", "avais voulu", "serais voulu", "aurai voulu"], answer: "aurais voulu" },
            { id: "fr-b2-u5-q4", level: "B2", prompt: "What is the conditionnel passé of 'pouvoir' (nous)?", options: ["aurions pu", "avions pu", "pourrions", "aurions pouvoir"], answer: "aurions pu" },
            { id: "fr-b2-u5-q5", level: "B2", prompt: "Complete: 'Elle ___ partie plus tôt si elle avait eu le choix.' (conditionnel passé, partir)", options: ["aurait", "serait", "était", "sera"], answer: "serait" },
            { id: "fr-b2-u5-q6", level: "B2", prompt: "What does 'le dilemme' mean?", options: ["difficulty", "dilemma", "dialogue", "decision"], answer: "dilemma" },
        ]
    },
]
