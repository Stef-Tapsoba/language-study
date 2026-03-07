import { LessonUnit } from "../../../types"

export const b1Units: LessonUnit[] = [
    {
        id: "it-b1-u1",
        level: "B1",
        order: 1,
        title: "The Subjunctive",
        description: "Use the congiuntivo presente after verbs of opinion, desire, and doubt.",
        grammarIds: ["it-g-b1-1"],
        vocabIds: ["it-v-b1-5", "it-v-b1-6"],
        verbIds: ["it-vb-b1-4"],
        testQuestions: [
            { id: "it-uq-b1-1-1", level: "B1", prompt: "Complete (congiuntivo): 'Voglio che lui ___ subito.' (venire)", options: ["viene", "venga", "venisse", "verrà"], answer: "venga" },
            { id: "it-uq-b1-1-2", level: "B1", prompt: "Complete (congiuntivo): 'Penso che ___ giusto.' (essere)", options: ["è", "sia", "fosse", "sarà"], answer: "sia" },
            { id: "it-uq-b1-1-3", level: "B1", prompt: "Which verb triggers the congiuntivo?", options: ["Vado", "Penso che", "Ho detto", "Andrò"], answer: "Penso che" },
            { id: "it-uq-b1-1-4", level: "B1", prompt: "Complete: 'È importante che tu ___ puntuale.' (essere)", options: ["sei", "sia", "saresti", "fossi"], answer: "sia" },
            { id: "it-uq-b1-1-5", level: "B1", prompt: "What does 'l'ambiente' mean?", options: ["Society", "Challenge", "Environment", "Opinion"], answer: "Environment" }
        ]
    },
    {
        id: "it-b1-u2",
        level: "B1",
        order: 2,
        title: "The Conditional",
        description: "Use the condizionale presente to express hypothetical situations and polite requests.",
        grammarIds: ["it-g-b1-2"],
        vocabIds: ["it-v-b1-8", "it-v-b1-9"],
        verbIds: ["it-vb-b1-1", "it-vb-b1-2"],
        testQuestions: [
            { id: "it-uq-b1-2-1", level: "B1", prompt: "Complete (condizionale): 'Con più tempo, io ___ di più.' (viaggiare)", options: ["viaggio", "viaggerò", "viaggerei", "viaggiavo"], answer: "viaggerei" },
            { id: "it-uq-b1-2-2", level: "B1", prompt: "Complete: 'Tu ___ studiare di più.' (dovere — condizionale)", options: ["devi", "dovevi", "dovresti", "dovrai"], answer: "dovresti" },
            { id: "it-uq-b1-2-3", level: "B1", prompt: "How do you say 'I would like a coffee' (polite)?", options: ["Voglio un caffè.", "Vorrei un caffè.", "Volevo un caffè.", "Vorrò un caffè."], answer: "Vorrei un caffè." },
            { id: "it-uq-b1-2-4", level: "B1", prompt: "What is the condizionale stem of 'essere'?", options: ["ess-", "er-", "sar-", "est-"], answer: "sar-" },
            { id: "it-uq-b1-2-5", level: "B1", prompt: "What does 'la sfida' mean?", options: ["Society", "Environment", "Opinion", "Challenge"], answer: "Challenge" }
        ]
    },
    {
        id: "it-b1-u3",
        level: "B1",
        order: 3,
        title: "Relative Pronouns",
        description: "Connect clauses using che, cui, and il quale / la quale.",
        grammarIds: ["it-g-b1-3"],
        vocabIds: ["it-v-b1-1", "it-v-b1-2", "it-v-b1-3"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-b1-3-1", level: "B1", prompt: "Complete: 'La città ___ vivo è Roma.'", options: ["che", "cui", "in cui", "il quale"], answer: "in cui" },
            { id: "it-uq-b1-3-2", level: "B1", prompt: "Complete: 'Il libro ___ leggo è interessante.'", options: ["cui", "in cui", "che", "di cui"], answer: "che" },
            { id: "it-uq-b1-3-3", level: "B1", prompt: "Which relative pronoun follows a preposition?", options: ["Che", "Chi", "Cui", "Quale"], answer: "Cui" },
            { id: "it-uq-b1-3-4", level: "B1", prompt: "What does 'tuttavia' mean?", options: ["Therefore", "Furthermore", "However", "Although"], answer: "However" },
            { id: "it-uq-b1-3-5", level: "B1", prompt: "What does 'quindi' mean?", options: ["However", "Furthermore", "Therefore", "Although"], answer: "Therefore" }
        ]
    },
    {
        id: "it-b1-u4",
        level: "B1",
        order: 4,
        title: "The Remote Past",
        description: "Use the passato remoto for historical events and narratives set in a distant past.",
        grammarIds: [],
        vocabIds: ["it-v-b1-4", "it-v-b1-7"],
        verbIds: ["it-vb-b1-3"],
        testQuestions: [
            { id: "it-uq-b1-4-1", level: "B1", prompt: "The passato remoto of 'parlare' (io) is:", options: ["parlavo", "ho parlato", "parlai", "parlerei"], answer: "parlai" },
            { id: "it-uq-b1-4-2", level: "B1", prompt: "The passato remoto of 'essere' (loro) is:", options: ["erano", "sono stati", "furono", "sarebbero"], answer: "furono" },
            { id: "it-uq-b1-4-3", level: "B1", prompt: "When is the passato remoto typically used?", options: ["For recent past events", "For habitual past", "For historical/distant past", "For future events"], answer: "For historical/distant past" },
            { id: "it-uq-b1-4-4", level: "B1", prompt: "What does 'attualmente' mean?", options: ["Actually", "Currently", "Eventually", "Previously"], answer: "Currently" },
            { id: "it-uq-b1-4-5", level: "B1", prompt: "What does 'circa' mean?", options: ["Exactly", "Therefore", "About / around", "However"], answer: "About / around" }
        ]
    },
    {
        id: "it-b1-u5",
        level: "B1",
        order: 5,
        title: "The Pluperfect",
        description: "Express actions that had already occurred before another past event using the trapassato prossimo.",
        grammarIds: ["it-g-b1-4"],
        vocabIds: ["it-v-b1-10"],
        verbIds: ["it-vb-b1-1", "it-vb-b1-4"],
        testQuestions: [
            { id: "it-uq-b1-5-1", level: "B1", prompt: "Complete (trapassato prossimo): 'Quando sono arrivato, lui ___ già.' (mangiare)", options: ["ha mangiato", "mangiava", "aveva mangiato", "mangerà"], answer: "aveva mangiato" },
            { id: "it-uq-b1-5-2", level: "B1", prompt: "The trapassato prossimo uses which auxiliary tense?", options: ["Presente", "Futuro", "Imperfetto", "Passato prossimo"], answer: "Imperfetto" },
            { id: "it-uq-b1-5-3", level: "B1", prompt: "Complete: 'Non ___ mai viaggiato prima.' (avere — io — trapassato)", options: ["ho", "avevo", "avrò", "avrei"], answer: "avevo" },
            { id: "it-uq-b1-5-4", level: "B1", prompt: "Complete: 'Era ___ prima della pioggia.' (uscire — lei)", options: ["usciva", "è uscita", "uscita", "uscirà"], answer: "uscita" },
            { id: "it-uq-b1-5-5", level: "B1", prompt: "What does 'sebbene' mean?", options: ["Therefore", "Furthermore", "However", "Although / Even though"], answer: "Although / Even though" }
        ]
    }
]
