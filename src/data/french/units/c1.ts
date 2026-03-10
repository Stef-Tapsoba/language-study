// src/data/french/units/c1.ts
import { LessonUnit } from "../../../types"

export const c1Units: LessonUnit[] = [
    {
        id: "fr-c1-u1",
        level: "C1",
        order: 1,
        title: "Le Subjonctif Imparfait",
        description: "Master the literary imperfect subjunctive used in classical literature, formal prose, and high-register journalism.",
        grammarIds: ["fr-g-c1-1"],
        vocabIds: ["fr-v-c1-025", "fr-v-c1-069", "fr-v-c1-076", "fr-v-c1-077", "fr-v-c1-080"],
        verbIds: ["fr-vb-c1-1"],
        testQuestions: [
            { id: "fr-c1-u1-q1", level: "C1", prompt: "Complete with subjonctif imparfait: 'Il fallait que tu ___ (être) présent à cette audience.'", options: ["sois", "fusses", "serais", "fus"], answer: "fusses", hint: "Subjonctif imparfait of être (tu): fusse/fusses/fût…" },
            { id: "fr-c1-u1-q2", level: "C1", prompt: "Complete (literary register): 'Bien qu'il ___ (avoir) peur, il ne montra aucun signe de faiblesse.'", options: ["ait eu", "eût", "eut", "avait eu"], answer: "eût", hint: "Subjonctif imparfait of avoir (il/elle): eût" },
            { id: "fr-c1-u1-q3", level: "C1", prompt: "Which form is the subjonctif imparfait of 'faire' for 'ils/elles'?", options: ["fissent", "fissaient", "firent", "fissent avoir"], answer: "fissent" },
            { id: "fr-c1-u1-q4", level: "C1", prompt: "What distinguishes the subjonctif imparfait from the subjonctif présent?", options: ["It is used for future actions.", "It belongs to the literary register and follows a past reporting verb.", "It is used for all negative sentences.", "It replaces the conditionnel passé."], answer: "It belongs to the literary register and follows a past reporting verb." },
            { id: "fr-c1-u1-q5", level: "C1", prompt: "Complete: 'Elle cherchait un collaborateur qui ___ (faire) preuve d'une rigueur exemplaire.'", options: ["fasse", "fît", "fera", "ferait"], answer: "fît", hint: "Literary register requires subjonctif imparfait after a past main verb." },
            { id: "fr-c1-u1-q6", level: "C1", prompt: "What does 'l'existentialisme' mean?", options: ["existentialism", "expressionism", "empiricism", "eclecticism"], answer: "existentialism" },
        ]
    },
    {
        id: "fr-c1-u2",
        level: "C1",
        order: 2,
        title: "Le Passé Simple",
        description: "Recognise and produce the literary past tense essential for reading and writing French literature and formal historical prose.",
        grammarIds: ["fr-g-c1-2"],
        vocabIds: ["fr-v-c1-070", "fr-v-c1-071", "fr-v-c1-072", "fr-v-c1-073", "fr-v-c1-074"],
        verbIds: ["fr-vb-c1-3", "fr-vb-c1-2"],
        testQuestions: [
            { id: "fr-c1-u2-q1", level: "C1", prompt: "What is the passé simple of 'être' for 'ils/elles'?", options: ["étaient", "seront", "furent", "fussent"], answer: "furent" },
            { id: "fr-c1-u2-q2", level: "C1", prompt: "Complete: 'Il ___ (faire) un pas en avant et prit la parole.'", options: ["faisait", "fit", "ferait", "fît"], answer: "fit" },
            { id: "fr-c1-u2-q3", level: "C1", prompt: "Complete: 'Elle ___ (voir) la vérité dans ses yeux.'", options: ["voyait", "a vu", "vit", "verrait"], answer: "vit" },
            { id: "fr-c1-u2-q4", level: "C1", prompt: "Which passé simple form corresponds to 'venir' (nous)?", options: ["venions", "vînmes", "vîntes", "vinssions"], answer: "vînmes" },
            { id: "fr-c1-u2-q5", level: "C1", prompt: "In which register is the passé simple primarily used today?", options: ["Spoken informal French", "Text messages and social media", "Literary and formal written French", "Business emails"], answer: "Literary and formal written French" },
            { id: "fr-c1-u2-q6", level: "C1", prompt: "What does 'la décolonisation' mean?", options: ["colonisation", "decolonisation", "decentralisation", "democratisation"], answer: "decolonisation" },
        ]
    },
    {
        id: "fr-c1-u3",
        level: "C1",
        order: 3,
        title: "Le Discours Indirect Avancé",
        description: "Apply the full sequence of tenses in advanced reported speech, including complex question structures and time expression shifts.",
        grammarIds: ["fr-g-c1-3"],
        vocabIds: ["fr-v-c1-045", "fr-v-c1-046", "fr-v-c1-047", "fr-v-c1-049", "fr-v-c1-050"],
        verbIds: [],
        testQuestions: [
            { id: "fr-c1-u3-q1", level: "C1", prompt: "Report: 'Je partirai dès que possible.' → Il a affirmé qu'il ___ dès que possible.", options: ["partira", "partirait", "est parti", "partait"], answer: "partirait" },
            { id: "fr-c1-u3-q2", level: "C1", prompt: "Report: 'Est-ce que vous avez terminé le rapport ?' → Elle a demandé si ___.", options: ["vous aviez terminé le rapport", "vous avez terminé le rapport", "ils avaient terminé le rapport", "nous avions terminé le rapport"], answer: "nous avions terminé le rapport", hint: "The pronoun shifts to match the reporting perspective." },
            { id: "fr-c1-u3-q3", level: "C1", prompt: "Which tense does the passé composé become in reported speech after a past verb?", options: ["Imparfait", "Plus-que-parfait", "Passé simple", "Futur antérieur"], answer: "Plus-que-parfait" },
            { id: "fr-c1-u3-q4", level: "C1", prompt: "Which form is correct in reported speech? 'Qu'est-ce que tu fais ?' → Il a demandé ___.", options: ["ce que tu faisais", "ce que faisais-tu", "qu'est-ce que tu faisais", "ce que tu as fait"], answer: "ce que tu faisais", hint: "Inversion is impossible in indirect questions." },
            { id: "fr-c1-u3-q5", level: "C1", prompt: "How does 'demain' change in reported speech after a past reporting verb?", options: ["le lendemain", "la veille", "ce jour-là", "aujourd'hui"], answer: "le lendemain" },
            { id: "fr-c1-u3-q6", level: "C1", prompt: "What does 'en vertu de' mean in formal French?", options: ["in spite of", "by virtue of / pursuant to", "in view of", "as regards"], answer: "by virtue of / pursuant to" },
        ]
    },
    {
        id: "fr-c1-u4",
        level: "C1",
        order: 4,
        title: "Nominalisations et Impersonnel",
        description: "Use impersonal constructions and nominalisations to produce formal academic and journalistic prose at C1 level.",
        grammarIds: ["fr-g-c1-4"],
        vocabIds: ["fr-v-c1-029", "fr-v-c1-051", "fr-v-c1-052", "fr-v-c1-048", "fr-v-c1-034"],
        verbIds: [],
        testQuestions: [
            { id: "fr-c1-u4-q1", level: "C1", prompt: "Complete: '___ que les résultats de cette recherche présentent une grande valeur scientifique.'", options: ["Il faut", "Il est à noter", "Il est dommage", "Il est possible"], answer: "Il est à noter" },
            { id: "fr-c1-u4-q2", level: "C1", prompt: "Which mood does 'le fait que' require?", options: ["Indicatif", "Subjonctif", "Conditionnel", "Infinitif"], answer: "Subjonctif" },
            { id: "fr-c1-u4-q3", level: "C1", prompt: "Which is the correct nominalisation of 'mettre en œuvre'?", options: ["la mise en place", "la mise en œuvre", "la mise en scène", "la mise en cause"], answer: "la mise en œuvre" },
            { id: "fr-c1-u4-q4", level: "C1", prompt: "Complete: 'Il ___ que les prévisions initiales avaient largement sous-estimé l'ampleur du problème.'", options: ["convient", "s'avère", "est nécessaire", "est dommage"], answer: "s'avère" },
            { id: "fr-c1-u4-q5", level: "C1", prompt: "What is the nominalisation of 'analyser'?", options: ["l'analyse", "l'analyste", "l'analytique", "l'analysation"], answer: "l'analyse" },
            { id: "fr-c1-u4-q6", level: "C1", prompt: "What does 'nonobstant' mean in formal French?", options: ["furthermore", "notwithstanding", "as regards", "in addition to"], answer: "notwithstanding" },
        ]
    },
    {
        id: "fr-c1-u5",
        level: "C1",
        order: 5,
        title: "Idiomes et Registre Académique",
        description: "Master C1 idiomatic expressions and formal academic connectors to write and speak with precision and sophistication.",
        grammarIds: ["fr-g-c1-5"],
        vocabIds: ["fr-v-c1-037", "fr-v-c1-040", "fr-v-c1-042", "fr-v-c1-053", "fr-v-c1-054"],
        verbIds: [],
        testQuestions: [
            { id: "fr-c1-u5-q1", level: "C1", prompt: "What does 'avoir beau + infinitif' express?", options: ["To manage to do something with difficulty", "To do something in vain / despite efforts", "To intend to do something", "To be good at doing something"], answer: "To do something in vain / despite efforts" },
            { id: "fr-c1-u5-q2", level: "C1", prompt: "Complete: '___ constater que les inégalités ont augmenté malgré les réformes.'", options: ["Il faut", "Force est de", "Il convient de", "Il n'empêche de"], answer: "Force est de" },
            { id: "fr-c1-u5-q3", level: "C1", prompt: "What does 'il va de soi que' mean?", options: ["It is debatable that", "It goes without saying that", "It seems unlikely that", "It has been proven that"], answer: "It goes without saying that" },
            { id: "fr-c1-u5-q4", level: "C1", prompt: "Which collocation means 'to substantiate an argument'?", options: ["soulever un argument", "aborder un argument", "étayer un argument", "trancher un argument"], answer: "étayer un argument" },
            { id: "fr-c1-u5-q5", level: "C1", prompt: "What does 'la dissonance cognitive' mean?", options: ["cognitive dissonance", "cognitive decline", "cognitive bias", "cognitive overload"], answer: "cognitive dissonance" },
            { id: "fr-c1-u5-q6", level: "C1", prompt: "Complete: 'Il n'empêche ___ les critiques formulées méritent d'être prises en compte.'", options: ["de", "que", "à", "pour"], answer: "que" },
        ]
    },
]
