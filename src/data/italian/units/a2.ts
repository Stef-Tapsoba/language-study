import { LessonUnit } from "../../../types"

export const a2Units: LessonUnit[] = [
    {
        id: "it-a2-u1",
        level: "A2",
        order: 1,
        title: "Talking About the Past",
        description: "Form the passato prossimo with avere and essere to describe completed past actions.",
        grammarIds: ["it-g-a2-1"],
        vocabIds: ["it-v-a2-001", "it-v-a2-004", "it-v-a2-005"],
        verbIds: ["it-vb-a2-2"],
        testQuestions: [
            { id: "it-uq-a2-1-1", level: "A2", prompt: "Complete (passato prossimo): 'Ieri lei ___ la pizza.' (mangiare)", options: ["mangiava", "mangia", "ha mangiato", "mangiò"], answer: "ha mangiato" },
            { id: "it-uq-a2-1-2", level: "A2", prompt: "Complete: 'Noi ___ al cinema ieri.' (andare — uses essere)", options: ["abbiamo andato", "siamo andati", "andavamo", "andiamo"], answer: "siamo andati" },
            { id: "it-uq-a2-1-3", level: "A2", prompt: "What is the past participle of 'fare'?", options: ["fato", "fatto", "facito", "faccio"], answer: "fatto" },
            { id: "it-uq-a2-1-4", level: "A2", prompt: "Complete: 'Tu ___ la pasta.' (mangiare — passato prossimo)", options: ["mangi", "mangiavi", "hai mangiato", "mangerai"], answer: "hai mangiato" },
            { id: "it-uq-a2-1-5", level: "A2", prompt: "Verbs of motion in passato prossimo use which auxiliary?", options: ["Avere", "Essere", "Stare", "Fare"], answer: "Essere" }
        ]
    },
    {
        id: "it-a2-u2",
        level: "A2",
        order: 2,
        title: "Describing the Past",
        description: "Use the imperfetto to describe habitual past actions and ongoing states.",
        grammarIds: ["it-g-a2-2"],
        vocabIds: ["it-v-a2-006", "it-v-a2-007", "it-v-a2-008"],
        verbIds: ["it-vb-a2-1"],
        testQuestions: [
            { id: "it-uq-a2-2-1", level: "A2", prompt: "How do you say 'I used to eat pizza every week'?", options: ["Ho mangiato la pizza ogni settimana.", "Mangiavo la pizza ogni settimana.", "Mangio la pizza ogni settimana.", "Mangerò la pizza ogni settimana."], answer: "Mangiavo la pizza ogni settimana." },
            { id: "it-uq-a2-2-2", level: "A2", prompt: "Complete (imperfetto): 'Da bambino, io ___ a calcio.' (giocare)", options: ["giocavo", "gioco", "ho giocato", "giocherò"], answer: "giocavo" },
            { id: "it-uq-a2-2-3", level: "A2", prompt: "Which tense describes habitual past actions?", options: ["Passato prossimo", "Futuro semplice", "Imperfetto", "Presente"], answer: "Imperfetto" },
            { id: "it-uq-a2-2-4", level: "A2", prompt: "Complete (imperfetto): 'Quando ___ piccola, amavo leggere.' (essere, io)", options: ["ero", "era", "eravamo", "erei"], answer: "ero" },
            { id: "it-uq-a2-2-5", level: "A2", prompt: "Complete (imperfetto): 'Pioveva quando io ___.' (uscire)", options: ["esco", "uscivo", "sono uscito", "uscirò"], answer: "uscivo" }
        ]
    },
    {
        id: "it-a2-u3",
        level: "A2",
        order: 3,
        title: "Reflexive Verbs & Daily Routines",
        description: "Use reflexive verbs to describe daily routines: svegliarsi, alzarsi, vestirsi, and more.",
        grammarIds: ["it-g-a2-3"],
        vocabIds: ["it-v-a2-009", "it-v-a2-010"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-3-1", level: "A2", prompt: "Complete (reflexive): 'Io ___ alle sette.' (svegliarsi)", options: ["sveglia", "si sveglio", "mi sveglio", "ti sveglio"], answer: "mi sveglio" },
            { id: "it-uq-a2-3-2", level: "A2", prompt: "Complete: 'Come ___ ?' (chiamarsi — tu)", options: ["ti chiamo", "si chiama", "ti chiami", "mi chiamo"], answer: "ti chiami" },
            { id: "it-uq-a2-3-3", level: "A2", prompt: "How do you say 'My name is Marco'?", options: ["Chiamo Marco.", "Si chiama Marco.", "Ti chiami Marco.", "Mi chiamo Marco."], answer: "Mi chiamo Marco." },
            { id: "it-uq-a2-3-4", level: "A2", prompt: "Complete: 'Loro ___ in fretta.' (vestirsi)", options: ["mi vesto", "si vestono", "si veste", "vi vestite"], answer: "si vestono" },
            { id: "it-uq-a2-3-5", level: "A2", prompt: "In passato prossimo, reflexive verbs use which auxiliary?", options: ["Avere", "Fare", "Essere", "Stare"], answer: "Essere" }
        ]
    },
    {
        id: "it-a2-u4",
        level: "A2",
        order: 4,
        title: "The Simple Future",
        description: "Express future plans and predictions using the futuro semplice.",
        grammarIds: ["it-g-a2-4"],
        vocabIds: ["it-v-a2-001", "it-v-a2-002", "it-v-a2-003"],
        verbIds: ["it-vb-a2-1"],
        testQuestions: [
            { id: "it-uq-a2-4-1", level: "A2", prompt: "Complete (futuro): 'Domani loro ___.' (partire)", options: ["partono", "partiranno", "sono partiti", "partivano"], answer: "partiranno" },
            { id: "it-uq-a2-4-2", level: "A2", prompt: "Complete: 'Io ___ a Roma la prossima settimana.' (andare — futuro)", options: ["vado", "sono andato", "andrò", "andrei"], answer: "andrò" },
            { id: "it-uq-a2-4-3", level: "A2", prompt: "What is the futuro semplice of 'essere' (noi)?", options: ["siamo", "eravamo", "saremo", "saremmo"], answer: "saremo" },
            { id: "it-uq-a2-4-4", level: "A2", prompt: "Complete: 'Quando ___, chiamami.' (arrivare — tu — futuro)", options: ["arrivi", "arriverai", "arrivavi", "sei arrivato"], answer: "arriverai" },
            { id: "it-uq-a2-4-5", level: "A2", prompt: "What does 'prenotare' mean?", options: ["To pay", "To arrive", "To book / reserve", "To travel"], answer: "To book / reserve" }
        ]
    },
    {
        id: "it-a2-u5",
        level: "A2",
        order: 5,
        title: "Everyday Situations",
        description: "Handle shopping transactions, health appointments, and directions using the essential modal verbs dovere, potere, and volere.",
        grammarIds: ["it-g-a2-5"],
        vocabIds: ["it-v-a2-085", "it-v-a2-086", "it-v-a2-087", "it-v-a2-088", "it-v-a2-089", "it-v-a2-090"],
        verbIds: ["it-vb-a2-4"],
        testQuestions: [
            { id: "it-uq-a2-5-1", level: "A2", prompt: "How do you say 'I have to go to the doctor'?", options: ["Voglio andare dal medico.", "Devo andare dal medico.", "Posso andare dal medico.", "So andare dal medico."], answer: "Devo andare dal medico." },
            { id: "it-uq-a2-5-2", level: "A2", prompt: "Complete: 'Scusi, ___ dirmi dov'è la farmacia?' (can you)", options: ["deve", "vuole", "può", "sa"], answer: "può" },
            { id: "it-uq-a2-5-3", level: "A2", prompt: "What does 'sempre dritto' mean in directions?", options: ["turn right", "straight ahead", "on the left", "at the end"], answer: "straight ahead" },
            { id: "it-uq-a2-5-4", level: "A2", prompt: "Translate: 'I want to book a table for two.'", options: ["Devo prenotare un tavolo per due.", "Voglio prenotare un tavolo per due.", "Posso prenotare un tavolo per due.", "So prenotare un tavolo per due."], answer: "Voglio prenotare un tavolo per due." },
            { id: "it-uq-a2-5-5", level: "A2", prompt: "What does 'l'appuntamento' mean?", options: ["appointment", "appointment book", "assistant", "anointment"], answer: "appointment" },
            { id: "it-uq-a2-5-6", level: "A2", prompt: "Complete: 'Non ___ venire stasera, sono occupato.' (can — io)", options: ["devo", "voglio", "posso", "so"], answer: "posso" },
        ]
    },
    {
        id: "it-a2-u6",
        level: "A2",
        order: 6,
        title: "Comparatives, Opinions & Preferences",
        description: "Compare people and things using più/meno/tanto...quanto, express personal preferences with preferire, and give opinions using Italian opinion phrases.",
        grammarIds: ["it-g-a2-6"],
        vocabIds: ["it-v-a2-091", "it-v-a2-092", "it-v-a2-093", "it-v-a2-094", "it-v-a2-095"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-6-1", level: "A2", prompt: "How do you say 'Rome is bigger than Florence'?", options: ["Roma è molto grande.", "Roma è più grande di Firenze.", "Roma è grande come Firenze.", "Roma è la più grande."], answer: "Roma è più grande di Firenze." },
            { id: "it-uq-a2-6-2", level: "A2", prompt: "How do you say 'as... as' in Italian?", options: ["più ... di", "meno ... di", "tanto ... quanto", "molto ... che"], answer: "tanto ... quanto" },
            { id: "it-uq-a2-6-3", level: "A2", prompt: "What does 'secondo me' mean?", options: ["in my opinion", "at the moment", "according to the rules", "I'm second"], answer: "in my opinion" },
            { id: "it-uq-a2-6-4", level: "A2", prompt: "How do you say 'I prefer coffee to tea'?", options: ["Preferisco il caffè al tè.", "Mi piace il caffè più del tè.", "Voglio il caffè e il tè.", "Il caffè è migliore del tè."], answer: "Preferisco il caffè al tè." },
            { id: "it-uq-a2-6-5", level: "A2", prompt: "What is the superlative of 'buono'?", options: ["il più buono / il migliore", "il molto buono", "il buonissimo solo", "il bene"], answer: "il più buono / il migliore" },
            { id: "it-uq-a2-6-6", level: "A2", prompt: "What does 'sono d'accordo' mean?", options: ["I'm available", "I disagree", "I agree", "I'm not sure"], answer: "I agree" },
        ]
    },
    {
        id: "it-a2-u7",
        level: "A2",
        order: 7,
        title: "Personal Messages & Social Language",
        description: "Write short messages, invitations, and notes in Italian. Use relative clauses with che and chi, and demonstratives questo/quello to communicate naturally in writing.",
        grammarIds: ["it-g-a2-7", "it-g-a2-8"],
        vocabIds: ["it-v-a2-096", "it-v-a2-097", "it-v-a2-098", "it-v-a2-099", "it-v-a2-100", "it-v-a2-101"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-7-1", level: "A2", prompt: "Fill in the relative pronoun: 'Il libro ___ ho letto è bellissimo.'", options: ["chi", "che", "cui", "quale"], answer: "che" },
            { id: "it-uq-a2-7-2", level: "A2", prompt: "Which demonstrative means 'that' (far from both)?", options: ["questo", "questa", "quello", "questi"], answer: "quello" },
            { id: "it-uq-a2-7-3", level: "A2", prompt: "How do you informally start a letter to a friend?", options: ["Egregio Signore,", "Spettabile Società,", "Caro/a [nome],", "All'attenzione di:"], answer: "Caro/a [nome]," },
            { id: "it-uq-a2-7-4", level: "A2", prompt: "What does 'un abbraccio' mean at the end of a message?", options: ["see you", "best regards", "a hug", "sorry"], answer: "a hug" },
            { id: "it-uq-a2-7-5", level: "A2", prompt: "Complete: '___ ragazza che parla è mia sorella.' (this)", options: ["Quel", "Quello", "Questa", "Questi"], answer: "Questa" },
            { id: "it-uq-a2-7-6", level: "A2", prompt: "What does 'mi manchi' mean?", options: ["I'm missing something", "I miss you", "you're missing out", "we miss each other"], answer: "I miss you" },
        ]
    },
    {
        id: "it-a2-u8",
        level: "A2",
        order: 8,
        title: "Narrating the Past — Passato Prossimo vs Imperfetto",
        description: "Put both past tenses to work in the same story. Learn to choose: passato prossimo for completed events that happened at a specific moment, imperfetto for background states, habitual actions, and ongoing situations.",
        grammarIds: ["it-g-a2-1", "it-g-a2-2"],
        vocabIds: [
            "it-v-a2-006", "it-v-a2-007", "it-v-a2-008",
            "it-v-a2-102", "it-v-a2-103", "it-v-a2-104", "it-v-a2-105", "it-v-a2-106"
        ],
        verbIds: ["it-vb-a2-1", "it-vb-a2-2"],
        testQuestions: [
            {
                id: "it-uq-a2-8-1", level: "A2",
                prompt: "Which tense fits? 'Quando ero bambino, ___ spesso al mare.' (andare — habitual)",
                options: ["sono andato", "andavo", "vado", "andrò"],
                answer: "andavo",
                hint: "'Spesso' (often) + past habit → imperfetto."
            },
            {
                id: "it-uq-a2-8-2", level: "A2",
                prompt: "Which tense fits? 'Ieri sera, Marco ___ le chiavi.' (perdere — single event)",
                options: ["perdeva", "perde", "ha perso", "perderà"],
                answer: "ha perso",
                hint: "'Ieri sera' + single completed event → passato prossimo."
            },
            {
                id: "it-uq-a2-8-3", level: "A2",
                prompt: "Complete: '___ (fare) freddo quando ___ (arrivare) alla stazione.'",
                options: [
                    "Ha fatto / arrivavo",
                    "Faceva / sono arrivato",
                    "Faceva / arrivavo",
                    "Ha fatto / sono arrivato"
                ],
                answer: "Faceva / sono arrivato",
                hint: "Background state (cold weather) → imperfetto. Completed arrival → passato prossimo."
            },
            {
                id: "it-uq-a2-8-4", level: "A2",
                prompt: "Complete: 'Mentre ___ (leggere), il telefono ___ (suonare).'",
                options: [
                    "leggevo / ha suonato",
                    "ho letto / suonava",
                    "leggevo / suonava",
                    "ho letto / ha suonato"
                ],
                answer: "leggevo / ha suonato",
                hint: "Ongoing background action (reading) → imperfetto. Interrupting event (phone rang) → passato prossimo."
            },
            {
                id: "it-uq-a2-8-5", level: "A2",
                prompt: "Which sentence is correct?",
                options: [
                    "D'improvviso, pioveva forte.",
                    "D'improvviso, ha piovuto forte.",
                    "Di solito, ha piovuto.",
                    "Sempre, pioveva ieri."
                ],
                answer: "D'improvviso, ha piovuto forte.",
                hint: "'D'improvviso' (suddenly) signals a sudden completed event → passato prossimo."
            },
            {
                id: "it-uq-a2-8-6", level: "A2",
                prompt: "Complete: 'Prima ___ (vivere) a Napoli, ma tre anni fa ___ (trasferirsi) a Milano.'",
                options: [
                    "vivevo / mi sono trasferito",
                    "ho vissuto / mi trasferivo",
                    "vivevo / mi trasferivo",
                    "ho vissuto / mi sono trasferito"
                ],
                answer: "vivevo / mi sono trasferito",
                hint: "Habitual past state (used to live) → imperfetto. Single completed move → passato prossimo."
            },
        ]
    },
]
