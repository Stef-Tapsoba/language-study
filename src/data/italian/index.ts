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
            explanation: "The passato prossimo is used for completed past actions. It's formed with avere or essere + past participle.",
            examples: [
                { native: "Ho mangiato la pizza.", translation: "I ate the pizza." },
                { native: "Siamo andati al cinema.", translation: "We went to the cinema." },
                { native: "Lei ha studiato tutto il giorno.", translation: "She studied all day." }
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
        }
    ],

    vocab: [
        { id: "it-v-a1-1",  level: "A1", word: "Ciao",         translation: "Hello / Bye",   category: "Greetings",  example: { native: "Ciao, come stai?", translation: "Hi, how are you?" } },
        { id: "it-v-a1-2",  level: "A1", word: "Grazie",       translation: "Thank you",     category: "Greetings",  example: { native: "Grazie mille.", translation: "Thank you very much." } },
        { id: "it-v-a1-3",  level: "A1", word: "Per favore",   translation: "Please",        category: "Greetings",  example: { native: "Un caffè, per favore.", translation: "A coffee, please." } },
        { id: "it-v-a1-4",  level: "A1", word: "Casa",         translation: "House / Home",  category: "Places",     example: { native: "La mia casa è grande.", translation: "My house is big." } },
        { id: "it-v-a1-5",  level: "A1", word: "Acqua",        translation: "Water",         category: "Food",       example: { native: "Vorrei dell'acqua.", translation: "I would like some water." } },
        { id: "it-v-a1-6",  level: "A1", word: "Pane",         translation: "Bread",         category: "Food",       example: { native: "Il pane è fresco.", translation: "The bread is fresh." } },
        { id: "it-v-a1-7",  level: "A1", word: "Amico / Amica", translation: "Friend",      category: "People",     example: { native: "Lei è la mia migliore amica.", translation: "She is my best friend." } },
        { id: "it-v-a1-8",  level: "A1", word: "Lavoro",       translation: "Work / Job",    category: "Daily life", example: { native: "Il mio lavoro è interessante.", translation: "My job is interesting." } },
        { id: "it-v-a1-9",  level: "A1", word: "Città",        translation: "City",          category: "Places",     example: { native: "Roma è una città bellissima.", translation: "Rome is a beautiful city." } },
        { id: "it-v-a1-10", level: "A1", word: "Famiglia",     translation: "Family",        category: "People",     example: { native: "La mia famiglia è piccola.", translation: "My family is small." } }
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
                    { pronoun: "io",      form: "sono" },
                    { pronoun: "tu",      form: "sei" },
                    { pronoun: "lui/lei", form: "è" },
                    { pronoun: "noi",     form: "siamo" },
                    { pronoun: "voi",     form: "siete" },
                    { pronoun: "loro",    form: "sono" }
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
                    { pronoun: "io",      form: "ho" },
                    { pronoun: "tu",      form: "hai" },
                    { pronoun: "lui/lei", form: "ha" },
                    { pronoun: "noi",     form: "abbiamo" },
                    { pronoun: "voi",     form: "avete" },
                    { pronoun: "loro",    form: "hanno" }
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
                    { pronoun: "io",      form: "parlo" },
                    { pronoun: "tu",      form: "parli" },
                    { pronoun: "lui/lei", form: "parla" },
                    { pronoun: "noi",     form: "parliamo" },
                    { pronoun: "voi",     form: "parlate" },
                    { pronoun: "loro",    form: "parlano" }
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
                    { pronoun: "io",      form: "vado" },
                    { pronoun: "tu",      form: "vai" },
                    { pronoun: "lui/lei", form: "va" },
                    { pronoun: "noi",     form: "andiamo" },
                    { pronoun: "voi",     form: "andate" },
                    { pronoun: "loro",    form: "vanno" }
                ]
            }]
        }
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
        { id: "it-lt-a1-1",  level: "A1", prompt: "What does 'grazie' mean?", options: ["Please", "Hello", "Thank you", "Goodbye"], answer: "Thank you" },
        { id: "it-lt-a1-2",  level: "A1", prompt: "What is 'house' in Italian?", options: ["Città", "Scuola", "Casa", "Lavoro"], answer: "Casa" },
        { id: "it-lt-a1-3",  level: "A1", prompt: "Article for 'studente': '___ studente'", options: ["Il", "Lo", "La", "I"], answer: "Lo" },
        { id: "it-lt-a1-4",  level: "A1", prompt: "How do you say 'We are' in Italian?", options: ["Siete", "Sono", "Siamo", "Sei"], answer: "Siamo" },
        { id: "it-lt-a1-5",  level: "A1", prompt: "Complete: 'Tu ___ (parlare) italiano.'", options: ["parlo", "parla", "parli", "parliamo"], answer: "parli" },
        { id: "it-lt-a1-6",  level: "A1", prompt: "What is 'water' in Italian?", options: ["Pane", "Latte", "Acqua", "Succo"], answer: "Acqua" },
        { id: "it-lt-a1-7",  level: "A1", prompt: "What does 'amico' mean?", options: ["Enemy", "Teacher", "Friend", "Brother"], answer: "Friend" },
        { id: "it-lt-a1-8",  level: "A1", prompt: "How do you say 'I go' in Italian?", options: ["Vai", "Va", "Vado", "Andiamo"], answer: "Vado" },
        { id: "it-lt-a1-9",  level: "A1", prompt: "What is the plural of 'la casa'?", options: ["le case", "le casa", "i case", "la case"], answer: "le case" },
        { id: "it-lt-a1-10", level: "A1", prompt: "Complete: 'Io ___ (avere) un cane.'", options: ["ha", "hai", "ho", "abbiamo"], answer: "ho" },
        { id: "it-lt-a1-11", level: "A1", prompt: "What does 'città' mean?", options: ["House", "City", "Street", "Country"], answer: "City" },
        { id: "it-lt-a1-12", level: "A1", prompt: "How do you say 'Good morning' in Italian?", options: ["Buona sera", "Buona notte", "Buongiorno", "Ciao"], answer: "Buongiorno" },
        { id: "it-lt-a1-13", level: "A1", prompt: "Complete: 'Loro ___ (essere) amici.'", options: ["siamo", "siete", "sono", "sei"], answer: "sono" },
        { id: "it-lt-a1-14", level: "A1", prompt: "What does 'lavoro' mean?", options: ["Travel", "Work", "Train", "School"], answer: "Work" },
        { id: "it-lt-a1-15", level: "A1", prompt: "Which article goes before 'libro'?", options: ["Lo", "La", "Il", "Le"], answer: "Il" }
    ]
}

export default module
