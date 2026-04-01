import { LessonUnit } from "../../../types"

export const b1Units: LessonUnit[] = [
    {
        id: "it-b1-u1",
        level: "B1",
        order: 1,
        title: "The Subjunctive",
        description: "Use the congiuntivo presente after verbs of opinion, desire, and doubt.",
        grammarIds: ["it-g-b1-1"],
        vocabIds: ["it-v-b1-005", "it-v-b1-006", "it-v-b1-017", "it-v-b1-018", "it-v-b1-045", "it-v-b1-046"],
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
        vocabIds: ["it-v-b1-008", "it-v-b1-009", "it-v-b1-031", "it-v-b1-032", "it-v-b1-047", "it-v-b1-048"],
        verbIds: ["it-vb-b1-1", "it-vb-b1-2"],
        listeningIds: ["it-l-b1-1"],
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
        vocabIds: ["it-v-b1-001", "it-v-b1-002", "it-v-b1-003", "it-v-b1-011", "it-v-b1-012", "it-v-b1-013", "it-v-b1-014"],
        verbIds: [],
        readingIds: ["it-r-b1-1"],
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
        grammarIds: ["it-g-b1-6"],
        vocabIds: ["it-v-b1-004", "it-v-b1-007", "it-v-b1-024", "it-v-b1-025", "it-v-b1-058", "it-v-b1-059"],
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
        vocabIds: ["it-v-b1-010", "it-v-b1-065", "it-v-b1-066", "it-v-b1-067", "it-v-b1-068", "it-v-b1-069", "it-v-b1-070"],
        verbIds: ["it-vb-b1-1", "it-vb-b1-4"],
        listeningIds: ["it-l-b1-2"],
        testQuestions: [
            { id: "it-uq-b1-5-1", level: "B1", prompt: "Complete (trapassato prossimo): 'Quando sono arrivato, lui ___ già.' (mangiare)", options: ["ha mangiato", "mangiava", "aveva mangiato", "mangerà"], answer: "aveva mangiato" },
            { id: "it-uq-b1-5-2", level: "B1", prompt: "The trapassato prossimo uses which auxiliary tense?", options: ["Presente", "Futuro", "Imperfetto", "Passato prossimo"], answer: "Imperfetto" },
            { id: "it-uq-b1-5-3", level: "B1", prompt: "Complete: 'Non ___ mai viaggiato prima.' (avere — io — trapassato)", options: ["ho", "avevo", "avrò", "avrei"], answer: "avevo" },
            { id: "it-uq-b1-5-4", level: "B1", prompt: "Complete: 'Era ___ prima della pioggia.' (uscire — lei)", options: ["usciva", "è uscita", "uscita", "uscirà"], answer: "uscita" },
            { id: "it-uq-b1-5-5", level: "B1", prompt: "What does 'sebbene' mean?", options: ["Therefore", "Furthermore", "However", "Although / Even though"], answer: "Although / Even though" }
        ]
    },
    {
        id: "it-b1-u6",
        level: "B1",
        order: 6,
        title: "Si-Clauses — Real & Hypothetical Conditions",
        description: "Build conditional sentences with se-clauses. Real conditions (se + presente → futuro/imperativo) vs hypothetical (se + congiuntivo imperfetto → condizionale). Essential for expressing hypotheses, polite suggestions, and debating positions in Italian.",
        grammarIds: ["it-g-b1-7"],
        vocabIds: ["it-v-b1-081", "it-v-b1-082", "it-v-b1-083", "it-v-b1-084", "it-v-b1-085"],
        verbIds: ["it-vb-b1-5"],
        readingIds: ["it-r-b1-2"],
        testQuestions: [
            { id: "it-uq-b1-6-1", level: "B1", prompt: "Complete (real condition): 'Se ___ (studiare, tu) di più, supererai l'esame.'", options: ["studieresti", "studi", "studiassi", "studiavi"], answer: "studi", hint: "Real condition: se + presente → futuro. The se-clause takes presente indicativo." },
            { id: "it-uq-b1-6-2", level: "B1", prompt: "Complete (hypothetical): 'Se ___ (avere, io) più tempo, viaggerei di più.'", options: ["ho", "avrò", "avessi", "avrei"], answer: "avessi", hint: "Hypothetical: se + congiuntivo imperfetto → condizionale presente." },
            { id: "it-uq-b1-6-3", level: "B1", prompt: "Which tense NEVER follows 'se' in a conditional clause?", options: ["presente", "congiuntivo imperfetto", "condizionale", "futuro"], answer: "condizionale", hint: "The condizionale goes in the result clause, never after se." },
            { id: "it-uq-b1-6-4", level: "B1", prompt: "Translate: 'If I were you, I wouldn't do it.'", options: ["Se sono te, non lo faccio.", "Se fossi te, non lo farei.", "Se ero te, non lo farei.", "Se fossi te, non lo faccio."], answer: "Se fossi te, non lo farei.", hint: "Se + congiuntivo imperfetto (fossi) → condizionale (farei)." },
            { id: "it-uq-b1-6-5", level: "B1", prompt: "Complete the past hypothetical: 'Se ___ (partire) prima, avresti preso il treno.'", options: ["sei partito", "partivi", "fossi partito", "partiresti"], answer: "fossi partito", hint: "Past regret: se + congiuntivo trapassato → condizionale composto." },
            { id: "it-uq-b1-6-6", level: "B1", prompt: "What does 'a meno che' mean?", options: ["unless", "in case", "provided that", "as long as"], answer: "unless", hint: "A meno che + non + congiuntivo = unless. Always used with non even in the affirmative." },
        ]
    },
    {
        id: "it-b1-u7",
        level: "B1",
        order: 7,
        title: "Reported Speech — Discorso Indiretto",
        description: "Report what someone said, asked, or thought in Italian. Master the tense back-shifts, the change of time references, and the key reporting verbs: dire, chiedere, spiegare, aggiungere.",
        grammarIds: ["it-g-b1-8"],
        vocabIds: ["it-v-b1-086", "it-v-b1-087", "it-v-b1-088", "it-v-b1-089"],
        verbIds: ["it-vb-b1-6"],
        listeningIds: ["it-l-b1-3"],
        testQuestions: [
            { id: "it-uq-b1-7-1", level: "B1", prompt: "Transform: 'Sono stanco.' → Ha detto che ___.", options: ["è stanco", "era stanco", "fu stanco", "sarà stanco"], answer: "era stanco", hint: "Presente → imperfetto in reported speech when reporting verb is in the past." },
            { id: "it-uq-b1-7-2", level: "B1", prompt: "Transform: 'Hai fame?' → Mi ha chiesto se ___.", options: ["ho fame", "avevo fame", "avessi fame", "avrò fame"], answer: "avevo fame", hint: "Yes/no questions in reported speech: se + imperfetto indicativo." },
            { id: "it-uq-b1-7-3", level: "B1", prompt: "Transform: 'Verrò domani.' → Ha detto che ___.", options: ["verrà l'indomani", "veniva l'indomani", "sarebbe venuto l'indomani", "verrà domani"], answer: "sarebbe venuto l'indomani", hint: "Futuro → condizionale composto in reported speech. 'Domani' → 'l'indomani'." },
            { id: "it-uq-b1-7-4", level: "B1", prompt: "Transform: 'Mangia più lentamente!' → Gli ha detto di ___.", options: ["mangiare più lentamente", "mangi più lentamente", "mangiasse più lentamente", "mangerà più lentamente"], answer: "mangiare più lentamente", hint: "Imperatives in Italian reported speech → di + infinito." },
            { id: "it-uq-b1-7-5", level: "B1", prompt: "What does 'aggiungere' mean in a reporting context?", options: ["to deny", "to ask", "to add", "to explain"], answer: "to add", hint: "Ha aggiunto che… = He/she added that… — useful for reporting additional points." },
            { id: "it-uq-b1-7-6", level: "B1", prompt: "Which time reference shifts in reported speech?", options: ["oggi → quel giorno", "qui → lì", "domani → l'indomani", "All of the above"], answer: "All of the above", hint: "All time and place references shift: oggi → quel giorno, qui → lì, domani → l'indomani." },
        ]
    },
    {
        id: "it-b1-u8",
        level: "B1",
        order: 8,
        title: "Opinion, Debate & Key Collocations",
        description: "Structure arguments using Italian discourse markers, express nuanced agreement and disagreement, and master the collocations that distinguish natural Italian from direct translation. Covers rendersi conto, prendere una decisione, and more.",
        grammarIds: ["it-g-b1-9"],
        vocabIds: ["it-v-b1-090", "it-v-b1-091", "it-v-b1-092", "it-v-b1-093", "it-v-b1-094"],
        verbIds: [],
        readingIds: ["it-r-b1-3"],
        testQuestions: [
            { id: "it-uq-b1-8-1", level: "B1", prompt: "What does 'rendersi conto di' mean?", options: ["to render useless", "to realise / become aware of", "to count on", "to report on"], answer: "to realise / become aware of", hint: "Rendersi conto di = to realise. The correct collocation — not capire or scoprire in this sense." },
            { id: "it-uq-b1-8-2", level: "B1", prompt: "How do you say 'on the one hand… on the other hand'?", options: ["di più… di meno", "da una parte… dall'altra", "in primo luogo… in secondo luogo", "prima… poi"], answer: "da una parte… dall'altra", hint: "Da una parte / dall'altra (parte) = on the one hand / on the other." },
            { id: "it-uq-b1-8-3", level: "B1", prompt: "Which phrase introduces a concession ('admittedly, but…')?", options: ["tuttavia", "è vero che…, ma", "in conclusione", "pertanto"], answer: "è vero che…, ma", hint: "È vero che… ma / certo… però = concede a point before countering it." },
            { id: "it-uq-b1-8-4", level: "B1", prompt: "What does 'non ci piove' mean as a colloquial expression?", options: ["it's not raining", "there's no doubt about it", "it doesn't matter", "it's not true"], answer: "there's no doubt about it", hint: "Non ci piove is a fixed Italian idiom meaning 'there's no doubt about it' — listed in the B1 guide." },
            { id: "it-uq-b1-8-5", level: "B1", prompt: "Complete the collocation: '___ una decisione' (to make a decision)", options: ["fare", "avere", "prendere", "mettere"], answer: "prendere", hint: "Prendere una decisione = to make a decision. Always prendere, not fare." },
            { id: "it-uq-b1-8-6", level: "B1", prompt: "Which phrase signals a conclusion in Italian?", options: ["da una parte", "tuttavia", "in conclusione / in sintesi", "d'altronde"], answer: "in conclusione / in sintesi", hint: "In conclusione or in sintesi = in conclusion / in summary." },
        ]
    },
]
