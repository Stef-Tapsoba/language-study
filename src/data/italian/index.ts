// data/italian/index.ts
import { LanguageModule } from "../../types"

const module: LanguageModule = {
    grammar: [
        {
            id: "it-g-a1-1",
            level: "A1",
            title: "Subject Pronouns",
            explanation: "Italian subject pronouns are often omitted because the verb ending identifies the subject. However, they can be used for emphasis or clarity.",
            examples: [
                { native: "Io parlo italiano.", translation: "I speak Italian." },
                { native: "Tu sei studentessa.", translation: "You are a student (fem.)." },
                { native: "Lui/Lei lavora qui.", translation: "He/She works here." },
                { native: "Noi viviamo a Roma.", translation: "We live in Rome." }
            ]
        },
        {
            id: "it-g-a1-2",
            level: "A1",
            title: "Essere (to be)",
            explanation: "Essere is used for identity, origin, profession, and with past tense of movement verbs. It is irregular and essential for beginners.",
            examples: [
                { native: "Sono italiano.", translation: "I am Italian." },
                { native: "È un medico.", translation: "He is a doctor." },
                { native: "Siamo stanchi.", translation: "We are tired." }
            ]
        },
        {
            id: "it-g-a1-3",
            level: "A1",
            title: "Articles: il, la, lo, i, gli, le",
            explanation: "Italian has several forms of the definite article depending on the noun's gender, number, and the first letter of the noun.",
            examples: [
                { native: "il libro", translation: "the book (masc.)" },
                { native: "la casa", translation: "the house (fem.)" },
                { native: "lo studente", translation: "the student (masc., starts with s+consonant)" },
                { native: "i libri", translation: "the books (masc. pl.)" },
                { native: "le case", translation: "the houses (fem. pl.)" }
            ]
        },
        {
            id: "it-g-a1-4",
            level: "A1",
            title: "Present Tense: Regular -are Verbs",
            explanation: "Regular -are verbs are the most common in Italian. Remove -are and add the appropriate ending for each subject.",
            examples: [
                { native: "Io parlo.", translation: "I speak." },
                { native: "Tu parli.", translation: "You speak." },
                { native: "Lui parla.", translation: "He speaks." },
                { native: "Noi parliamo.", translation: "We speak." },
                { native: "Loro parlano.", translation: "They speak." }
            ]
        },
        {
            id: "it-g-a2-1",
            level: "A2",
            title: "Passato Prossimo",
            explanation: "The passato prossimo is used for completed past actions. It is formed with avere or essere + past participle. Verbs of motion and reflexive verbs use essere, and the participle must agree with the subject.",
            examples: [
                { native: "Ho mangiato la pizza.", translation: "I ate the pizza." },
                { native: "Siamo andati al cinema.", translation: "We went to the cinema." },
                { native: "Lei ha studiato tutto il giorno.", translation: "She studied all day." },
                { native: "Sono arrivata in ritardo.", translation: "I (fem.) arrived late." }
            ]
        },
        {
            id: "it-g-a2-2",
            level: "A2",
            title: "Imperfetto (Imperfect Tense)",
            explanation: "The imperfetto describes habitual or ongoing past actions, past states, and background descriptions. It contrasts with the passato prossimo, which marks completed events.",
            examples: [
                { native: "Da bambino, giocavo a calcio ogni giorno.", translation: "As a child, I used to play football every day." },
                { native: "Quando vivevo a Roma, andavo spesso al mercato.", translation: "When I lived in Rome, I often went to the market." },
                { native: "Pioveva sempre a novembre.", translation: "It always used to rain in November." }
            ]
        },
        {
            id: "it-g-a2-3",
            level: "A2",
            title: "Verbi Riflessivi (Reflexive Verbs)",
            explanation: "Reflexive verbs indicate the subject acts on itself. They use reflexive pronouns: mi, ti, si, ci, vi, si, placed before the conjugated verb.",
            examples: [
                { native: "Mi chiamo Luca.", translation: "My name is Luca. (I call myself Luca.)" },
                { native: "Mi sveglio alle sette.", translation: "I wake up at seven." },
                { native: "Ci divertiamo molto.", translation: "We enjoy ourselves a lot." },
                { native: "Si veste in fretta.", translation: "He/She gets dressed quickly." }
            ]
        },
        {
            id: "it-g-a2-4",
            level: "A2",
            title: "Futuro Semplice (Simple Future)",
            explanation: "The futuro semplice expresses future plans and predictions. For regular -are and -ere verbs, drop the final -e of the infinitive and add the future endings. -are verbs change the -a- to -e-.",
            examples: [
                { native: "Domani andrò al supermercato.", translation: "Tomorrow I will go to the supermarket." },
                { native: "Mangeremo insieme sabato.", translation: "We will eat together on Saturday." },
                { native: "Partiranno la settimana prossima.", translation: "They will leave next week." }
            ]
        },
        {
            id: "it-g-b1-1",
            level: "B1",
            title: "Congiuntivo Presente",
            explanation: "The congiuntivo (subjunctive) is used after verbs of opinion, desire, fear, and doubt. It is introduced by 'che'.",
            examples: [
                { native: "Penso che sia giusto.", translation: "I think it's fair." },
                { native: "Voglio che tu venga.", translation: "I want you to come." }
            ]
        },
        {
            id: "it-g-b1-2",
            level: "B1",
            title: "Il Condizionale Presente",
            explanation: "The present conditional expresses what would happen. Formation: infinitive stem + endings (-ei, -esti, -ebbe, -emmo, -este, -ebbero). Some verbs have irregular stems: essere→sar-, avere→avr-, fare→far-.",
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
            explanation: "Relative pronouns link clauses. Che (invariable) = who/that/which as subject or direct object. Cui follows a preposition (di cui, in cui, a cui). Il quale/la quale/i quali/le quali agree in gender and number.",
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
            explanation: "The pluperfect expresses an action that had occurred before another past action. Formation: avere/essere in the imperfetto + past participle: avevo mangiato (I had eaten), era partita (she had left).",
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
            explanation: "Beyond future events, the futuro semplice in Italian also expresses probability in the present and assumptions: 'Avrà trenta anni' = He's probably thirty. It also appears in future time clauses after quando, se, appena.",
            examples: [
                { native: "Domani andrò al mercato.", translation: "Tomorrow I will go to the market." },
                { native: "Quando arriverai, chiama subito.", translation: "When you arrive, call immediately." },
                { native: "Dove sarà la mia chiave? (probability)", translation: "Where could my key be? (I wonder where it is)" },
                { native: "Se avrò tempo, verrò da te.", translation: "If I have time, I'll come to see you." }
            ]
        },
    ],

    vocab: [
        { id: "it-v-a1-1", level: "A1", word: "Ciao", translation: "Hello / Bye", category: "Greetings", example: { native: "Ciao, come stai?", translation: "Hi, how are you?" } },
        { id: "it-v-a1-2", level: "A1", word: "Grazie", translation: "Thank you", category: "Greetings", example: { native: "Grazie mille.", translation: "Thank you very much." } },
        { id: "it-v-a1-3", level: "A1", word: "Per favore", translation: "Please", category: "Greetings", example: { native: "Un caffè, per favore.", translation: "A coffee, please." } },
        { id: "it-v-a1-4", level: "A1", word: "Casa", translation: "House / Home", category: "Places", example: { native: "La mia casa è grande.", translation: "My house is big." } },
        { id: "it-v-a1-5", level: "A1", word: "Acqua", translation: "Water", category: "Food", example: { native: "Vorrei dell'acqua.", translation: "I would like some water." } },
        { id: "it-v-a1-6", level: "A1", word: "Pane", translation: "Bread", category: "Food", example: { native: "Il pane è fresco.", translation: "The bread is fresh." } },
        { id: "it-v-a1-7", level: "A1", word: "Amico / Amica", translation: "Friend", category: "People", example: { native: "Lei è la mia migliore amica.", translation: "She is my best friend." } },
        { id: "it-v-a1-8", level: "A1", word: "Lavoro", translation: "Work / Job", category: "Daily life", example: { native: "Il mio lavoro è interessante.", translation: "My job is interesting." } },
        { id: "it-v-a1-9", level: "A1", word: "Città", translation: "City", category: "Places", example: { native: "Roma è una città bellissima.", translation: "Rome is a beautiful city." } },
        { id: "it-v-a1-10", level: "A1", word: "Famiglia", translation: "Family", category: "People", example: { native: "La mia famiglia è piccola.", translation: "My family is small." } },
        { id: "it-v-a2-1", level: "A2", word: "Supermercato", translation: "Supermarket", category: "Places", example: { native: "Sono andato al supermercato ieri.", translation: "I went to the supermarket yesterday." } },
        { id: "it-v-a2-2", level: "A2", word: "Settimana", translation: "Week", category: "Time", example: { native: "La settimana scorsa ho lavorato molto.", translation: "Last week I worked a lot." } },
        { id: "it-v-a2-3", level: "A2", word: "Soldi", translation: "Money", category: "Daily life", example: { native: "Non ho molti soldi.", translation: "I don't have much money." } },
        { id: "it-v-a2-4", level: "A2", word: "Ristorante", translation: "Restaurant", category: "Places", example: { native: "Andiamo al ristorante stasera?", translation: "Shall we go to the restaurant tonight?" } },
        { id: "it-v-a2-5", level: "A2", word: "Destra / Sinistra", translation: "Right / Left", category: "Directions", example: { native: "Gira a sinistra.", translation: "Turn left." } },
        { id: "it-v-a2-6", level: "A2", word: "Tempo", translation: "Time / Weather", category: "Daily life", example: { native: "Che tempo fa oggi?", translation: "What's the weather like today?" } },
        { id: "it-v-a2-7", level: "A2", word: "Problema", translation: "Problem", category: "Basics", example: { native: "Non c'è problema.", translation: "There's no problem." } },
        { id: "it-v-a2-8", level: "A2", word: "Lingua", translation: "Language / Tongue", category: "Learning", example: { native: "Sto imparando una nuova lingua.", translation: "I am learning a new language." } },
        { id: "it-v-a2-9", level: "A2", word: "Viaggio", translation: "Trip / Journey", category: "Travel", example: { native: "Il viaggio è stato lungo.", translation: "The trip was long." } },
        { id: "it-v-a2-10", level: "A2", word: "Negozio", translation: "Shop / Store", category: "Places", example: { native: "Il negozio è chiuso la domenica.", translation: "The shop is closed on Sunday." } },
        { id: "it-v-b1-1", level: "B1", word: "Inoltre", translation: "Furthermore / Moreover", category: "Connectors", example: { native: "Inoltre, bisogna considerare i costi.", translation: "Furthermore, one must consider the costs." } },
        { id: "it-v-b1-2", level: "B1", word: "Tuttavia", translation: "However / Nevertheless", category: "Connectors", example: { native: "È caro; tuttavia vale la pena.", translation: "It's expensive; however it's worth it." } },
        { id: "it-v-b1-3", level: "B1", word: "Quindi", translation: "Therefore / So", category: "Connectors", example: { native: "Pioveva, quindi siamo rimasti a casa.", translation: "It was raining, therefore we stayed home." } },
        { id: "it-v-b1-4", level: "B1", word: "Circa", translation: "About / Around", category: "Quantities", example: { native: "C'erano circa cinquanta persone.", translation: "There were about fifty people." } },
        { id: "it-v-b1-5", level: "B1", word: "L'ambiente", translation: "Environment / Atmosphere", category: "Society", example: { native: "Dobbiamo proteggere l'ambiente.", translation: "We must protect the environment." } },
        { id: "it-v-b1-6", level: "B1", word: "La società", translation: "Society", category: "Society", example: { native: "La società sta cambiando rapidamente.", translation: "Society is changing rapidly." } },
        { id: "it-v-b1-7", level: "B1", word: "Attualmente", translation: "Currently / At present", category: "Time", example: { native: "Attualmente lavoro a Milano.", translation: "Currently I work in Milan." } },
        { id: "it-v-b1-8", level: "B1", word: "La sfida", translation: "Challenge", category: "Society", example: { native: "È una grande sfida per noi.", translation: "It's a big challenge for us." } },
        { id: "it-v-b1-9", level: "B1", word: "Secondo", translation: "According to", category: "Discussion", example: { native: "Secondo gli esperti, il clima cambia.", translation: "According to experts, the climate is changing." } },
        { id: "it-v-b1-10", level: "B1", word: "Sebbene", translation: "Although / Even though", category: "Connectors", example: { native: "Sebbene sia stanco, continuo a lavorare.", translation: "Although I'm tired, I keep working." } },
    ],

    verbs: [
        {
            id: "it-vb-a1-1",
            level: "A1",
            infinitive: "essere",
            meaning: "to be",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "io", form: "sono" },
                    { pronoun: "tu", form: "sei" },
                    { pronoun: "lui/lei", form: "è" },
                    { pronoun: "noi", form: "siamo" },
                    { pronoun: "voi", form: "siete" },
                    { pronoun: "loro", form: "sono" }
                ]
            }]
        },
        {
            id: "it-vb-a1-2",
            level: "A1",
            infinitive: "avere",
            meaning: "to have",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "io", form: "ho" },
                    { pronoun: "tu", form: "hai" },
                    { pronoun: "lui/lei", form: "ha" },
                    { pronoun: "noi", form: "abbiamo" },
                    { pronoun: "voi", form: "avete" },
                    { pronoun: "loro", form: "hanno" }
                ]
            }]
        },
        {
            id: "it-vb-a1-3",
            level: "A1",
            infinitive: "parlare",
            meaning: "to speak",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "io", form: "parlo" },
                    { pronoun: "tu", form: "parli" },
                    { pronoun: "lui/lei", form: "parla" },
                    { pronoun: "noi", form: "parliamo" },
                    { pronoun: "voi", form: "parlate" },
                    { pronoun: "loro", form: "parlano" }
                ]
            }]
        },
        {
            id: "it-vb-a1-4",
            level: "A1",
            infinitive: "andare",
            meaning: "to go",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "io", form: "vado" },
                    { pronoun: "tu", form: "vai" },
                    { pronoun: "lui/lei", form: "va" },
                    { pronoun: "noi", form: "andiamo" },
                    { pronoun: "voi", form: "andate" },
                    { pronoun: "loro", form: "vanno" }
                ]
            }]
        },
        {
            id: "it-vb-a2-1",
            level: "A2",
            infinitive: "volere",
            meaning: "to want",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "io", form: "voglio" },
                    { pronoun: "tu", form: "vuoi" },
                    { pronoun: "lui/lei", form: "vuole" },
                    { pronoun: "noi", form: "vogliamo" },
                    { pronoun: "voi", form: "volete" },
                    { pronoun: "loro", form: "vogliono" }
                ]
            }]
        },
        {
            id: "it-vb-a2-2",
            level: "A2",
            infinitive: "potere",
            meaning: "to be able to / can",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "io", form: "posso" },
                    { pronoun: "tu", form: "puoi" },
                    { pronoun: "lui/lei", form: "può" },
                    { pronoun: "noi", form: "possiamo" },
                    { pronoun: "voi", form: "potete" },
                    { pronoun: "loro", form: "possono" }
                ]
            }]
        },
        {
            id: "it-vb-a2-3",
            level: "A2",
            infinitive: "venire",
            meaning: "to come",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "io", form: "vengo" },
                    { pronoun: "tu", form: "vieni" },
                    { pronoun: "lui/lei", form: "viene" },
                    { pronoun: "noi", form: "veniamo" },
                    { pronoun: "voi", form: "venite" },
                    { pronoun: "loro", form: "vengono" }
                ]
            }]
        },
        {
            id: "it-vb-a2-4",
            level: "A2",
            infinitive: "mangiare",
            meaning: "to eat",
            conjugations: [
                {
                    tense: "Present",
                    forms: [
                        { pronoun: "io", form: "mangio" },
                        { pronoun: "tu", form: "mangi" },
                        { pronoun: "lui/lei", form: "mangia" },
                        { pronoun: "noi", form: "mangiamo" },
                        { pronoun: "voi", form: "mangiate" },
                        { pronoun: "loro", form: "mangiano" }
                    ]
                },
                {
                    tense: "Passato Prossimo",
                    forms: [
                        { pronoun: "io", form: "ho mangiato" },
                        { pronoun: "tu", form: "hai mangiato" },
                        { pronoun: "lui/lei", form: "ha mangiato" },
                        { pronoun: "noi", form: "abbiamo mangiato" },
                        { pronoun: "voi", form: "avete mangiato" },
                        { pronoun: "loro", form: "hanno mangiato" }
                    ]
                }
            ]
        },
        {
            id: "it-vb-b1-1",
            level: "B1",
            infinitive: "sapere",
            meaning: "to know (facts/how to)",
            conjugations: [
                {
                    tense: "Presente",
                    forms: [
                        { pronoun: "io", form: "so" },
                        { pronoun: "tu", form: "sai" },
                        { pronoun: "lui/lei", form: "sa" },
                        { pronoun: "noi", form: "sappiamo" },
                        { pronoun: "voi", form: "sapete" },
                        { pronoun: "loro", form: "sanno" }
                    ]
                },
                {
                    tense: "Condizionale",
                    forms: [
                        { pronoun: "io", form: "saprei" },
                        { pronoun: "tu", form: "sapresti" },
                        { pronoun: "lui/lei", form: "saprebbe" },
                        { pronoun: "noi", form: "sapremmo" },
                        { pronoun: "voi", form: "sapreste" },
                        { pronoun: "loro", form: "saprebbero" }
                    ]
                }
            ]
        },
        {
            id: "it-vb-b1-2",
            level: "B1",
            infinitive: "dovere",
            meaning: "to have to / must",
            conjugations: [
                {
                    tense: "Presente",
                    forms: [
                        { pronoun: "io", form: "devo" },
                        { pronoun: "tu", form: "devi" },
                        { pronoun: "lui/lei", form: "deve" },
                        { pronoun: "noi", form: "dobbiamo" },
                        { pronoun: "voi", form: "dovete" },
                        { pronoun: "loro", form: "devono" }
                    ]
                },
                {
                    tense: "Condizionale",
                    forms: [
                        { pronoun: "io", form: "dovrei" },
                        { pronoun: "tu", form: "dovresti" },
                        { pronoun: "lui/lei", form: "dovrebbe" },
                        { pronoun: "noi", form: "dovremmo" },
                        { pronoun: "voi", form: "dovreste" },
                        { pronoun: "loro", form: "dovrebbero" }
                    ]
                }
            ]
        },
        {
            id: "it-vb-b1-3",
            level: "B1",
            infinitive: "mettere",
            meaning: "to put / to place",
            conjugations: [
                {
                    tense: "Presente",
                    forms: [
                        { pronoun: "io", form: "metto" },
                        { pronoun: "tu", form: "metti" },
                        { pronoun: "lui/lei", form: "mette" },
                        { pronoun: "noi", form: "mettiamo" },
                        { pronoun: "voi", form: "mettete" },
                        { pronoun: "loro", form: "mettono" }
                    ]
                },
                {
                    tense: "Passato Prossimo",
                    forms: [
                        { pronoun: "io", form: "ho messo" },
                        { pronoun: "tu", form: "hai messo" },
                        { pronoun: "lui/lei", form: "ha messo" },
                        { pronoun: "noi", form: "abbiamo messo" },
                        { pronoun: "voi", form: "avete messo" },
                        { pronoun: "loro", form: "hanno messo" }
                    ]
                }
            ]
        },
        {
            id: "it-vb-b1-4",
            level: "B1",
            infinitive: "credere",
            meaning: "to believe / to think",
            conjugations: [
                {
                    tense: "Presente",
                    forms: [
                        { pronoun: "io", form: "credo" },
                        { pronoun: "tu", form: "credi" },
                        { pronoun: "lui/lei", form: "crede" },
                        { pronoun: "noi", form: "crediamo" },
                        { pronoun: "voi", form: "credete" },
                        { pronoun: "loro", form: "credono" }
                    ]
                },
                {
                    tense: "Passato Prossimo",
                    forms: [
                        { pronoun: "io", form: "ho creduto" },
                        { pronoun: "tu", form: "hai creduto" },
                        { pronoun: "lui/lei", form: "ha creduto" },
                        { pronoun: "noi", form: "abbiamo creduto" },
                        { pronoun: "voi", form: "avete creduto" },
                        { pronoun: "loro", form: "hanno creduto" }
                    ]
                }
            ]
        },
    ],

    placementQuestions: [
        { id: "it-p-a1-1", level: "A1", prompt: "Come si dice 'hello' in italiano?", options: ["Arrivederci", "Ciao", "Grazie", "Prego"], answer: "Ciao" },
        { id: "it-p-a1-2", level: "A1", prompt: "Complete: 'Io ___ (essere) italiano.'", options: ["è", "sei", "sono", "siamo"], answer: "sono" },
        { id: "it-p-a2-1", level: "A2", prompt: "Complete (passato prossimo): 'Ieri lei ___ (mangiare) la pizza.'", options: ["mangiava", "mangia", "ha mangiato", "mangiò"], answer: "ha mangiato" },
        { id: "it-p-a2-2", level: "A2", prompt: "Qual è il plurale di 'il libro'?", options: ["la libri", "i libri", "le libro", "il libri"], answer: "i libri" },
        { id: "it-p-b1-1", level: "B1", prompt: "Complete (congiuntivo): 'Voglio che tu ___ (venire).'", options: ["vieni", "venga", "venissi", "verrai"], answer: "venga" },
        { id: "it-p-b1-2", level: "B1", prompt: "Cosa significa 'tuttavia'?", options: ["therefore", "however", "although", "because"], answer: "however" },
        { id: "it-p-b2-1", level: "B2", prompt: "Complete (condizionale passato): 'Se avessi saputo, ___ venuto.'", options: ["sarei", "sarò", "sono", "ero"], answer: "sarei" },
        { id: "it-p-b2-2", level: "B2", prompt: "Which tense describes ongoing past actions?", options: ["Passato prossimo", "Imperfetto", "Passato remoto", "Trapassato"], answer: "Imperfetto" },
        { id: "it-p-c1-1", level: "C1", prompt: "Which sentence correctly uses the congiuntivo passato?", options: ["Penso che sia venuto.", "Penso che è venuto.", "Penso che venga.", "Penso che venisse."], answer: "Penso che sia venuto." },
        { id: "it-p-c1-2", level: "C1", prompt: "What does 'nonostante' mean?", options: ["because of", "in spite of", "thanks to", "instead of"], answer: "in spite of" }
    ],

    levelQuestions: [
        { id: "it-lt-a1-1", level: "A1", prompt: "What does 'grazie' mean?", options: ["Please", "Hello", "Thank you", "Goodbye"], answer: "Thank you" },
        { id: "it-lt-a1-2", level: "A1", prompt: "What is 'house' in Italian?", options: ["Città", "Scuola", "Casa", "Lavoro"], answer: "Casa" },
        { id: "it-lt-a1-3", level: "A1", prompt: "Article for 'studente': '___ studente'", options: ["Il", "Lo", "La", "I"], answer: "Lo" },
        { id: "it-lt-a1-4", level: "A1", prompt: "How do you say 'We are' in Italian?", options: ["Siete", "Sono", "Siamo", "Sei"], answer: "Siamo" },
        { id: "it-lt-a1-5", level: "A1", prompt: "Complete: 'Tu ___ (parlare) italiano.'", options: ["parlo", "parla", "parli", "parliamo"], answer: "parli" },
        { id: "it-lt-a1-6", level: "A1", prompt: "What is 'water' in Italian?", options: ["Pane", "Latte", "Acqua", "Succo"], answer: "Acqua" },
        { id: "it-lt-a1-7", level: "A1", prompt: "What does 'amico' mean?", options: ["Enemy", "Teacher", "Friend", "Brother"], answer: "Friend" },
        { id: "it-lt-a1-8", level: "A1", prompt: "How do you say 'I go' in Italian?", options: ["Vai", "Va", "Vado", "Andiamo"], answer: "Vado" },
        { id: "it-lt-a1-9", level: "A1", prompt: "What is the plural of 'la casa'?", options: ["le case", "le casa", "i case", "la case"], answer: "le case" },
        { id: "it-lt-a1-10", level: "A1", prompt: "Complete: 'Io ___ (avere) un cane.'", options: ["ha", "hai", "ho", "abbiamo"], answer: "ho" },
        { id: "it-lt-a1-11", level: "A1", prompt: "What does 'città' mean?", options: ["House", "City", "Street", "Country"], answer: "City" },
        { id: "it-lt-a1-12", level: "A1", prompt: "How do you say 'Good morning' in Italian?", options: ["Buona sera", "Buona notte", "Buongiorno", "Ciao"], answer: "Buongiorno" },
        { id: "it-lt-a1-13", level: "A1", prompt: "Complete: 'Loro ___ (essere) amici.'", options: ["siamo", "siete", "sono", "sei"], answer: "sono" },
        { id: "it-lt-a1-14", level: "A1", prompt: "What does 'lavoro' mean?", options: ["Travel", "Work", "Train", "School"], answer: "Work" },
        { id: "it-lt-a1-15", level: "A1", prompt: "Which article goes before 'libro'?", options: ["Lo", "La", "Il", "Le"], answer: "Il" },
        { id: "it-lt-a2-1", level: "A2", prompt: "Complete (passato prossimo): 'Ieri noi ___ (andare) al cinema.'", options: ["andiamo", "abbiamo andato", "siamo andati", "andavamo"], answer: "siamo andati" },
        { id: "it-lt-a2-2", level: "A2", prompt: "How do you say 'She used to eat pizza every week'?", options: ["Ha mangiato la pizza ogni settimana.", "Mangiava la pizza ogni settimana.", "Mangia la pizza ogni settimana.", "Mangerà la pizza ogni settimana."], answer: "Mangiava la pizza ogni settimana." },
        { id: "it-lt-a2-3", level: "A2", prompt: "Complete (reflexive): 'Io ___ (chiamarsi) Marco.'", options: ["chiama", "chiami", "mi chiamo", "si chiama"], answer: "mi chiamo" },
        { id: "it-lt-a2-4", level: "A2", prompt: "What does 'supermercato' mean?", options: ["Department store", "Supermarket", "Pharmacy", "Market"], answer: "Supermarket" },
        { id: "it-lt-a2-5", level: "A2", prompt: "Complete: 'Io ___ (volere) un caffè.'", options: ["vuole", "voglio", "vuoi", "vogliono"], answer: "voglio" },
        { id: "it-lt-a2-6", level: "A2", prompt: "How do you say 'Turn right'?", options: ["Gira a sinistra.", "Vai dritto.", "Gira a destra.", "Torna indietro."], answer: "Gira a destra." },
        { id: "it-lt-a2-7", level: "A2", prompt: "Complete (futuro): 'Domani loro ___ (partire).'", options: ["partono", "partiranno", "sono partiti", "partivano"], answer: "partiranno" },
        { id: "it-lt-a2-8", level: "A2", prompt: "What does 'viaggio' mean?", options: ["City", "Week", "Trip / Journey", "Money"], answer: "Trip / Journey" },
        { id: "it-lt-a2-9", level: "A2", prompt: "Complete: 'Noi ___ (potere) venire alle otto.'", options: ["posso", "puoi", "possiamo", "possono"], answer: "possiamo" },
        { id: "it-lt-a2-10", level: "A2", prompt: "What does 'negozio' mean?", options: ["Restaurant", "School", "Shop", "Office"], answer: "Shop" },
        { id: "it-lt-a2-11", level: "A2", prompt: "Complete (passato prossimo): 'Tu ___ (mangiare) la pasta?'", options: ["mangi", "mangiavi", "hai mangiato", "mangerai"], answer: "hai mangiato" },
        { id: "it-lt-a2-12", level: "A2", prompt: "Complete: 'Lei ___ (venire) alla festa stasera.'", options: ["vengo", "vieni", "viene", "vengono"], answer: "viene" },
        { id: "it-lt-a2-13", level: "A2", prompt: "What does 'soldi' mean?", options: ["Gold", "Sun", "Money", "Food"], answer: "Money" },
        { id: "it-lt-a2-14", level: "A2", prompt: "Which tense is used for habitual past actions in Italian?", options: ["Passato prossimo", "Futuro semplice", "Imperfetto", "Presente"], answer: "Imperfetto" },
        { id: "it-lt-a2-15", level: "A2", prompt: "How do you say 'I wake up at seven'?", options: ["Mi sveglio alle sette.", "Si sveglia alle sette.", "Mi sveglio a sette.", "Sveglio alle sette."], answer: "Mi sveglio alle sette." },
        { id: "it-lt-b1-1", level: "B1", prompt: "Complete (congiuntivo): 'Voglio che lui ___ (venire) subito.'", options: ["viene", "venga", "venisse", "verrà"], answer: "venga" },
        { id: "it-lt-b1-2", level: "B1", prompt: "Complete (condizionale): 'Con più tempo, ___ (viaggiare) di più.'", options: ["viaggio", "viaggerò", "viaggerei", "viaggiavo"], answer: "viaggerei" },
        { id: "it-lt-b1-3", level: "B1", prompt: "What does 'tuttavia' mean?", options: ["therefore", "furthermore", "however", "although"], answer: "however" },
        { id: "it-lt-b1-4", level: "B1", prompt: "Complete (trapassato prossimo): 'Quando sono arrivato, lui ___ (mangiare) già.'", options: ["ha mangiato", "mangiava", "aveva mangiato", "mangerà"], answer: "aveva mangiato" },
        { id: "it-lt-b1-5", level: "B1", prompt: "Which pronome relativo follows a preposition?", options: ["che", "cui", "il quale only", "chi"], answer: "cui" },
        { id: "it-lt-b1-6", level: "B1", prompt: "What does 'attualmente' mean?", options: ["Actually", "Currently", "Eventually", "Previously"], answer: "Currently" },
        { id: "it-lt-b1-7", level: "B1", prompt: "Condizionale of 'dovere' (tu): 'Tu ___ studiare di più.'", options: ["devi", "dovevi", "dovresti", "dovrai"], answer: "dovresti" },
        { id: "it-lt-b1-8", level: "B1", prompt: "Complete: 'La città ___ vivo è Roma.'", options: ["che", "cui", "in cui", "il quale"], answer: "in cui" },
        { id: "it-lt-b1-9", level: "B1", prompt: "What does 'la sfida' mean?", options: ["Society", "Environment", "Challenge", "Opinion"], answer: "Challenge" },
        { id: "it-lt-b1-10", level: "B1", prompt: "Passato prossimo of 'mettere' (noi): 'Noi ___ la tavola.'", options: ["mettiamo", "mettemmo", "abbiamo messo", "avremmo messo"], answer: "abbiamo messo" },
        { id: "it-lt-b1-11", level: "B1", prompt: "Which connector means 'therefore'?", options: ["tuttavia", "inoltre", "quindi", "sebbene"], answer: "quindi" },
        { id: "it-lt-b1-12", level: "B1", prompt: "Complete (congiuntivo): 'È importante che tu ___ (essere) puntuale.'", options: ["sei", "sia", "saresti", "fossi"], answer: "sia" },
        { id: "it-lt-b1-13", level: "B1", prompt: "What does 'secondo' mean?", options: ["Suddenly", "According to", "However", "Around"], answer: "According to" },
        { id: "it-lt-b1-14", level: "B1", prompt: "Complete (futuro): 'Quando ___ (arrivare), chiamami.'", options: ["arrivi", "arriverai", "arrivi", "arrivavi"], answer: "arriverai" },
        { id: "it-lt-b1-15", level: "B1", prompt: "Presente of 'sapere' (io): 'Io ___ parlare italiano.'", options: ["sai", "sa", "so", "sappi"], answer: "so" },
    ]
}

export default module
