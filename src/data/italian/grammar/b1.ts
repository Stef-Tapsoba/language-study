import { GrammarLesson } from "../../../types"

export const b1Grammar: GrammarLesson[] = [
    {
        id: "it-g-b1-1",
        level: "B1",
        title: "Congiuntivo Presente",
        explanation: {
            native: "The congiuntivo (subjunctive) is used after verbs of opinion, desire, fear, and doubt. It is introduced by 'che'.",
            target: "Il congiuntivo presente si usa dopo verbi che esprimono opinione, desiderio, paura e dubbio. È introdotto dalla congiunzione 'che'. Ad esempio: pensare, credere, volere, temere, sperare. Le desinenze sono diverse dal presente indicativo: i verbi in -are prendono -i, -i, -i, -iamo, -iate, -ino; i verbi in -ere e -ire prendono -a, -a, -a, -iamo, -iate, -ano."
        },
        examples: [
            { native: "Penso che sia giusto.", translation: "I think it's fair." },
            { native: "Voglio che tu venga.", translation: "I want you to come." }
        ]
    },
    {
        id: "it-g-b1-2",
        level: "B1",
        title: "Il Condizionale Presente",
        explanation: {
            native: "The present conditional expresses what would happen. Formation: infinitive stem + endings (-ei, -esti, -ebbe, -emmo, -este, -ebbero). Some verbs have irregular stems: essere→sar-, avere→avr-, fare→far-.",
            target: "Il condizionale presente esprime ciò che accadrebbe in una situazione ipotetica. Formazione: radice dell'infinito + desinenze (-ei, -esti, -ebbe, -emmo, -este, -ebbero). Alcuni verbi hanno radici irregolari: essere → sar-, avere → avr-, fare → far-, andare → andr-, venire → verr-. Si usa anche per fare richieste in modo educato."
        },
        examples: [
            { native: "Vorrei un caffè, per favore.", translation: "I would like a coffee, please." },
            { native: "Con più soldi, viaggerei di più.", translation: "With more money, I would travel more." },
            { native: "Dovresti studiare di più.", translation: "You should study more." },
            { native: "Ha detto che verrebbe domani.", translation: "He said he would come tomorrow." }
        ]
    },
    {
        id: "it-g-b1-3",
        level: "B1",
        title: "I Pronomi Relativi (che, cui, il quale)",
        explanation: {
            native: "Relative pronouns link clauses. Che (invariable) = who/that/which as subject or direct object. Cui follows a preposition (di cui, in cui, a cui). Il quale/la quale/i quali/le quali agree in gender and number.",
            target: "I pronomi relativi collegano due proposizioni. Che (invariabile) significa who/that/which e si usa come soggetto o complemento oggetto diretto. Cui si usa dopo una preposizione (di cui, in cui, a cui, con cui). Il quale/la quale/i quali/le quali concordano in genere e numero con il nome a cui si riferiscono e possono sostituire che o cui per maggiore chiarezza."
        },
        examples: [
            { native: "La persona che parla è mia sorella.", translation: "The person who is speaking is my sister." },
            { native: "Il libro che sto leggendo è interessante.", translation: "The book that I'm reading is interesting." },
            { native: "La città in cui vivo è Roma.", translation: "The city in which I live is Rome." },
            { native: "L'amico di cui ti parlavo è simpatico.", translation: "The friend I was telling you about is nice." }
        ]
    },
    {
        id: "it-g-b1-4",
        level: "B1",
        title: "Il Trapassato Prossimo",
        explanation: {
            native: "The pluperfect expresses an action that had occurred before another past action. Formation: avere/essere in the imperfetto + past participle: avevo mangiato (I had eaten), era partita (she had left).",
            target: "Il trapassato prossimo esprime un'azione avvenuta prima di un'altra azione nel passato. Formazione: imperfetto di avere o essere + participio passato. Esempi: avevo mangiato (I had eaten), era partita (she had left). Come nel passato prossimo, i verbi di moto e cambiamento di stato usano essere, e il participio concorda con il soggetto."
        },
        examples: [
            { native: "Quando sono arrivato, aveva già mangiato.", translation: "When I arrived, he had already eaten." },
            { native: "Era uscita prima della pioggia.", translation: "She had gone out before the rain." },
            { native: "Avevano finito il lavoro quando è arrivato.", translation: "They had finished the work when he arrived." },
            { native: "Non avevo mai viaggiato prima di allora.", translation: "I had never traveled before that." }
        ]
    },
    {
        id: "it-g-b1-5",
        level: "B1",
        title: "Il Futuro Semplice (uso avanzato)",
        explanation: {
            native: "Beyond future events, the futuro semplice in Italian also expresses probability in the present and assumptions: 'Avrà trenta anni' = He's probably thirty. It also appears in future time clauses after quando, se, appena.",
            target: "Oltre agli eventi futuri, il futuro semplice in italiano si usa anche per esprimere probabilità nel presente e ipotesi: 'Avrà trenta anni' significa che probabilmente ha trent'anni. Compare inoltre nelle proposizioni temporali future dopo quando, se e appena, mentre in inglese si usa il presente semplice in questi contesti."
        },
        examples: [
            { native: "Domani andrò al mercato.", translation: "Tomorrow I will go to the market." },
            { native: "Quando arriverai, chiama subito.", translation: "When you arrive, call immediately." },
            { native: "Dove sarà la mia chiave? (probability)", translation: "Where could my key be? (I wonder where it is)" },
            { native: "Se avrò tempo, verrò da te.", translation: "If I have time, I'll come to see you." }
        ]
    }
]
