// data/italian/units/a1.ts
//
// Italian A1 — Functional/communicative redesign (2026-04-14)
// 25 units in 5 blocks, each block ending with a hard-gated speaking checkpoint.
//
// Block 1 — Chi sono (U1–U4 + CP1): introduce yourself
// Block 2 — Il mio mondo (U5–U9 + CP2): talk about people, things, and places
// Block 3 — La vita quotidiana (U10–U14 + CP3): describe your routine
// Block 4 — Nel mondo (U15–U19 + CP4): navigate food, directions, shopping
// Block 5 — Amplia il tuo italiano (U20–U25 + CP5): precision and complexity
//
// Key structural changes from the previous grammar-first curriculum:
// - mi piace: old U18 → new U5 (13 units earlier — fundamental communicative function)
// - c'è / ci sono: old U23 → new U7 (16 units earlier — essential conversational tool)
// - dovere: old U24 → new U17 (reunited with potere and volere in the modal verbs unit)
// - fare: old U6 → new U14 (compound expressions make sense after daily routine is established)
// - definite articles: revealed organically through family nouns at U6
// - adjective agreement: exposed inductively from U2, rule named at U18
// - 5 hard-gated speaking checkpoints (it-cp-a1-1 through it-cp-a1-5)

import { LessonUnit } from "../../../types"

export const a1Units: LessonUnit[] = [
    // ─────────────────────────────────────────────
    // BLOCK 1 — Chi sono (Who I am)
    // Can-do goal: I can introduce myself to anyone.
    // ─────────────────────────────────────────────
    {
        id: "it-a1-u1",
        level: "A1",
        order: 1,
        title: "Ciao — Say hello, say goodbye",
        description: "Your first Italian words — greet anyone, say goodbye, and handle basic polite exchanges",
        grammarIds: ["it-g-a1-17", "it-g-a1-1"],
        vocabIds: ["it-v-a1-1", "it-v-a1-2", "it-v-a1-3", "it-v-a1-4", "it-v-a1-5", "it-v-a1-6", "it-v-a1-7", "it-v-a1-8", "it-v-a1-9", "it-v-a1-10", "it-v-a1-11", "it-v-a1-12"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-1-1", level: "A1", prompt: "How do you say 'good morning' in Italian?", options: ["Buonasera", "Buonanotte", "Buongiorno", "Arrivederci"], answer: "Buongiorno" },
            { id: "it-uq-a1-1-2", level: "A1", prompt: "What does 'prego' mean?", options: ["Please (request)", "Thank you", "You're welcome", "Excuse me"], answer: "You're welcome" },
            { id: "it-uq-a1-1-3", level: "A1", prompt: "Which greeting is used informally?", options: ["Buongiorno", "Arrivederci", "Ciao", "Scusi"], answer: "Ciao" },
            { id: "it-uq-a1-1-4", level: "A1", prompt: "When do you use 'Lei' instead of 'tu' in Italian?", options: ["With close friends and family", "In formal situations with strangers or people deserving respect", "Only in writing", "Only in southern Italy"], answer: "In formal situations with strangers or people deserving respect", hint: "Tu = informal (friends, family, peers). Lei (capital L) = formal 'you' — used with strangers, elders, in professional contexts." },
            { id: "it-uq-a1-1-5", level: "A1", prompt: "Which subject pronoun means 'we'?", options: ["Voi", "Loro", "Noi", "Lei"], answer: "Noi" },
            { id: "it-uq-a1-1-6", level: "A1", prompt: "In Italian, subject pronouns are often omitted because...", options: ["they are considered rude", "the verb ending already identifies the subject", "they are too difficult to remember", "they are only used in writing"], answer: "the verb ending already identifies the subject" },
        ],
    },
    {
        id: "it-a1-u2",
        level: "A1",
        order: 2,
        title: "Sono… — Who I am",
        description: "Use essere to say who you are, where you're from, and what you do",
        grammarIds: ["it-g-a1-2", "it-g-a1-21"],
        vocabIds: ["it-v-a1-47", "it-v-a1-48", "it-v-a1-49", "it-v-a1-50", "it-v-a1-51", "it-v-a1-52"],
        verbIds: ["it-vb-a1-1"],
        testQuestions: [
            { id: "it-uq-a1-2-1", level: "A1", prompt: "Complete: 'Io ___ italiano.' (essere)", options: ["sei", "è", "sono", "siamo"], answer: "sono" },
            { id: "it-uq-a1-2-2", level: "A1", prompt: "Complete: 'Tu ___ di Napoli?' (essere)", options: ["sono", "è", "sei", "siamo"], answer: "sei" },
            { id: "it-uq-a1-2-3", level: "A1", prompt: "How do you ask 'What do you do?' (informal) in Italian?", options: ["Dove lavori?", "Cosa fai?", "Come ti chiami?", "Da dove vieni?"], answer: "Cosa fai?" },
            { id: "it-uq-a1-2-4", level: "A1", prompt: "Complete: 'Noi ___ italiani.' (essere)", options: ["siamo", "siete", "sono", "sei"], answer: "siamo" },
            { id: "it-uq-a1-2-5", level: "A1", prompt: "Complete: 'Lei ___ professoressa.' (essere)", options: ["sono", "sei", "è", "siamo"], answer: "è" },
            { id: "it-uq-a1-2-6", level: "A1", prompt: "How do you say 'My name is Maria'?", options: ["Sono Maria.", "Ho Maria.", "Mi chiamo Maria.", "Chiamo Maria."], answer: "Mi chiamo Maria." },
        ],
    },
    {
        id: "it-a1-u2b",
        level: "A1",
        order: 3,
        title: "Ho… — What I have",
        description: "Talk about your age, family, and possessions using avere — with indefinite articles woven in",
        grammarIds: ["it-g-a1-3", "it-g-a1-5"],
        vocabIds: ["it-v-a1-47", "it-v-a1-48", "it-v-a1-49", "it-v-a1-50", "it-v-a1-51", "it-v-a1-52", "it-v-a1-53", "it-v-a1-54", "it-v-a1-55", "it-v-a1-56"],
        verbIds: ["it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-3-1", level: "A1", prompt: "Complete: 'Io ___ un fratello.' (avere)", options: ["ha", "hai", "ho", "abbiamo"], answer: "ho" },
            { id: "it-uq-a1-3-2", level: "A1", prompt: "How do you ask 'How old are you?' in Italian?", options: ["Come ti chiami?", "Quanti anni hai?", "Da dove vieni?", "Cosa fai?"], answer: "Quanti anni hai?" },
            { id: "it-uq-a1-3-3", level: "A1", prompt: "Complete: 'Lei ___ venti anni.' (avere)", options: ["ho", "hai", "ha", "hanno"], answer: "ha" },
            { id: "it-uq-a1-3-4", level: "A1", prompt: "Which indefinite article goes before 'studente' (masc.)?", options: ["Un", "Una", "Uno", "Un'"], answer: "Uno" },
            { id: "it-uq-a1-3-5", level: "A1", prompt: "Which indefinite article goes before 'amica' (fem., starts with vowel)?", options: ["Una", "Un", "Uno", "Un'"], answer: "Un'" },
            { id: "it-uq-a1-3-6", level: "A1", prompt: "Complete: 'Noi ___ una casa grande.'", options: ["siamo", "sei", "abbiamo", "ha"], answer: "abbiamo" },
        ],
    },
    {
        id: "it-a1-u4",
        level: "A1",
        order: 4,
        title: "What I do — first -are verbs",
        description: "Say what you do, where you live, and what you speak with the most common Italian verb pattern",
        grammarIds: ["it-g-a1-6"],
        vocabIds: ["it-v-a1-141", "it-v-a1-142", "it-v-a1-143", "it-v-a1-144", "it-v-a1-145", "it-v-a1-146", "it-v-a1-147", "it-v-a1-148", "it-v-a1-149", "it-v-a1-150"],
        verbIds: ["it-vb-a1-3", "it-vb-a1-11", "it-vb-a1-13", "it-vb-a1-14", "it-vb-a1-15", "it-vb-a1-16", "it-vb-a1-17"],
        checkpointId: "it-cp-a1-1",
        listeningIds: ["it-l-a1-1"],
        testQuestions: [
            { id: "it-uq-a1-4-1", level: "A1", prompt: "Complete: 'Tu ___ italiano.' (parlare)", options: ["parlo", "parla", "parli", "parliamo"], answer: "parli" },
            { id: "it-uq-a1-4-2", level: "A1", prompt: "Complete: 'Noi ___ a Roma.' (abitare)", options: ["abiti", "abita", "abitiamo", "abitano"], answer: "abitiamo" },
            { id: "it-uq-a1-4-3", level: "A1", prompt: "Complete: 'Loro ___ la musica.' (ascoltare)", options: ["ascolto", "ascolta", "ascoltate", "ascoltano"], answer: "ascoltano" },
            { id: "it-uq-a1-4-4", level: "A1", prompt: "What does 'lavorare' mean?", options: ["to study", "to live", "to work", "to speak"], answer: "to work" },
            { id: "it-uq-a1-4-5", level: "A1", prompt: "Complete: 'Lei ___ a Milano.' (lavorare)", options: ["lavoro", "lavori", "lavora", "lavorano"], answer: "lavora" },
            { id: "it-uq-a1-4-6", level: "A1", prompt: "What is the -are verb ending for 'loro'?", options: ["-o", "-i", "-a", "-ano"], answer: "-ano" },
        ],
    },

    // ─────────────────────────────────────────────
    // BLOCK 2 — Il mio mondo (My world)
    // Can-do goal: I can talk about the people, things, and places around me.
    // ─────────────────────────────────────────────
    {
        id: "it-a1-u18",
        level: "A1",
        order: 5,
        title: "Mi piace! — Likes and dislikes",
        description: "Express what you like and don't like — one of the most fundamental structures in Italian",
        grammarIds: ["it-g-a1-16"],
        vocabIds: [
            "it-v-a1-64", "it-v-a1-65", "it-v-a1-66", "it-v-a1-67",
            "it-v-a1-70", "it-v-a1-71", "it-v-a1-110", "it-v-a1-117", "it-v-a1-122",
            "it-v-a1-147", "it-v-a1-148", "it-v-a1-149", "it-v-a1-150",
        ],
        verbIds: ["it-vb-a1-24", "it-vb-a1-25", "it-vb-a1-26"],
        testQuestions: [
            { id: "it-uq-a1-5-1", level: "A1", prompt: "How do you say 'I like pizza'?", options: ["Io piace la pizza.", "Mi piace la pizza.", "Mi piacciono la pizza.", "Piaccio la pizza."], answer: "Mi piace la pizza." },
            { id: "it-uq-a1-5-2", level: "A1", prompt: "How do you say 'I like cats' (plural)?", options: ["Mi piace i gatti.", "Mi piacciono i gatti.", "Mi piaciono i gatti.", "Ti piacciono i gatti."], answer: "Mi piacciono i gatti." },
            { id: "it-uq-a1-5-3", level: "A1", prompt: "How do you say 'I don't like fish'?", options: ["Non mi piace il pesce.", "Mi non piace il pesce.", "Non mi piacciono il pesce.", "Mi piace non il pesce."], answer: "Non mi piace il pesce." },
            { id: "it-uq-a1-5-4", level: "A1", prompt: "How do you say 'I prefer red wine'?", options: ["Preferisco il vino rosso.", "Preferisce il vino rosso.", "Preferisco vino rosso.", "Mi piace preferire il vino rosso."], answer: "Preferisco il vino rosso." },
            { id: "it-uq-a1-5-5", level: "A1", prompt: "How do you say 'Do you like Italian music?' (informal)", options: ["Le piace la musica italiana?", "Ti piace la musica italiana?", "Ti piacciono la musica italiana?", "Gli piace la musica italiana?"], answer: "Ti piace la musica italiana?" },
            { id: "it-uq-a1-5-6", level: "A1", prompt: "Complete: 'Mi piace ___.' (to study Italian)", options: ["studiare l'italiano", "lo studio italiano", "studio l'italiano", "studente italiano"], answer: "studiare l'italiano" },
        ],
        readingIds: ["it-r-a1-5"],
    },
    {
        id: "it-a1-u14",
        level: "A1",
        order: 6,
        title: "La mia famiglia — My family",
        description: "Describe your family using possessives and the definite article system revealed through family nouns",
        grammarIds: ["it-g-a1-23", "it-g-a1-4"],
        vocabIds: ["it-v-a1-47", "it-v-a1-48", "it-v-a1-49", "it-v-a1-50", "it-v-a1-51", "it-v-a1-52", "it-v-a1-53", "it-v-a1-54", "it-v-a1-55", "it-v-a1-56", "it-v-a1-57", "it-v-a1-58", "it-v-a1-59", "it-v-a1-60"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-6-1", level: "A1", prompt: "What does 'il nonno' mean?", options: ["Uncle", "Father", "Grandfather", "Cousin"], answer: "Grandfather" },
            { id: "it-uq-a1-6-2", level: "A1", prompt: "What does 'la moglie' mean?", options: ["Daughter", "Mother", "Sister", "Wife"], answer: "Wife" },
            { id: "it-uq-a1-6-3", level: "A1", prompt: "Which is correct for 'my father' in Italian?", options: ["il mio padre", "mio padre", "la mio padre", "il mia padre"], answer: "mio padre" },
            { id: "it-uq-a1-6-4", level: "A1", prompt: "What does 'la zia' mean?", options: ["Grandmother", "Cousin", "Aunt", "Sister"], answer: "Aunt" },
            { id: "it-uq-a1-6-5", level: "A1", prompt: "Which is correct for 'my parents'?", options: ["miei genitori", "i miei genitori", "il mio genitori", "la mia genitori"], answer: "i miei genitori" },
            { id: "it-uq-a1-6-6", level: "A1", prompt: "Complete: '___ sorella è medica.' (his/her — fem. sg.)", options: ["il suo", "la sua", "sua", "suo"], answer: "sua" },
        ],
        readingIds: ["it-r-a1-1", "it-r-a1-4", "it-r-a1-7"],
    },
    {
        id: "it-a1-u7-cisi",
        level: "A1",
        order: 7,
        title: "C'è, ci sono — There is, there are",
        description: "Talk about what exists around you — rooms, places, people",
        grammarIds: ["it-g-a1-31"],
        vocabIds: [
            // Home & rooms — natural c'è/ci sono context
            "it-v-a1-176", "it-v-a1-177", "it-v-a1-178", "it-v-a1-179", "it-v-a1-180",
            "it-v-a1-181", "it-v-a1-182", "it-v-a1-183", "it-v-a1-184", "it-v-a1-185",
            "it-v-a1-186", "it-v-a1-187",
            // Places — c'è un bar, ci sono negozi
            "it-v-a1-108", "it-v-a1-109", "it-v-a1-110", "it-v-a1-111",
        ],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-7-1", level: "A1", prompt: "Translate: 'There is a café near here.'", options: ["Ci sono un bar qui vicino.", "C'è un bar qui vicino.", "C'è dei bar qui vicino.", "Sono un bar qui vicino."], answer: "C'è un bar qui vicino." },
            { id: "it-uq-a1-7-2", level: "A1", prompt: "Translate: 'There are three apples on the table.'", options: ["C'è tre mele sul tavolo.", "Ci sono tre mele sul tavolo.", "Ci sono tre mele nel tavolo.", "C'è delle mele sul tavolo."], answer: "Ci sono tre mele sul tavolo." },
            { id: "it-uq-a1-7-3", level: "A1", prompt: "How do you say 'There is no problem'?", options: ["Non c'è nessun problema.", "Ci sono nessun problema.", "Non ci sono problema.", "C'è no problema."], answer: "Non c'è nessun problema." },
            { id: "it-uq-a1-7-4", level: "A1", prompt: "What does 'la cucina' mean?", options: ["Bedroom", "Bathroom", "Living room", "Kitchen"], answer: "Kitchen" },
            { id: "it-uq-a1-7-5", level: "A1", prompt: "Complete: '___ due camere da letto in questa casa.'", options: ["C'è", "Ci sono", "Sono ci", "È ci"], answer: "Ci sono" },
            { id: "it-uq-a1-7-6", level: "A1", prompt: "What does 'il bagno' mean?", options: ["Kitchen", "Garden", "Bathroom", "Balcony"], answer: "Bathroom" },
        ],
    },
    {
        id: "it-a1-u5",
        level: "A1",
        order: 8,
        title: "Dove vai? — Going places",
        description: "Say where you're going with andare and the right preposition",
        grammarIds: ["it-g-a1-8", "it-g-a1-14"],
        vocabIds: [
            "it-v-a1-108", "it-v-a1-109", "it-v-a1-110", "it-v-a1-111",
            "it-v-a1-112", "it-v-a1-113", "it-v-a1-114", "it-v-a1-117", "it-v-a1-118",
        ],
        verbIds: ["it-vb-a1-4"],
        testQuestions: [
            { id: "it-uq-a1-8-1", level: "A1", prompt: "Complete: 'Io ___ a scuola.' (andare)", options: ["vai", "va", "vado", "andiamo"], answer: "vado" },
            { id: "it-uq-a1-8-2", level: "A1", prompt: "Complete: 'Loro ___ al cinema.' (andare)", options: ["vado", "va", "andate", "vanno"], answer: "vanno" },
            { id: "it-uq-a1-8-3", level: "A1", prompt: "What is 'a + il'?", options: ["del", "al", "alla", "nel"], answer: "al" },
            { id: "it-uq-a1-8-4", level: "A1", prompt: "Complete: 'Vado ___ Italia.' (in a country)", options: ["a", "al", "in", "da"], answer: "in" },
            { id: "it-uq-a1-8-5", level: "A1", prompt: "Complete: 'Il libro è ___ tavolo.' (su + il)", options: ["sulla", "sul", "sullo", "sui"], answer: "sul" },
            { id: "it-uq-a1-8-6", level: "A1", prompt: "Complete: 'Vai ___ medico?' (da + il)", options: ["al", "dal", "del", "nel"], answer: "dal" },
        ],
    },
    {
        id: "it-a1-u8",
        level: "A1",
        order: 9,
        title: "Verbi -ere e -ire — More verb patterns",
        description: "Complete the Italian verb system with -ere and -ire verbs (including the -isc- type)",
        grammarIds: ["it-g-a1-7"],
        vocabIds: ["it-v-a1-82", "it-v-a1-83", "it-v-a1-84", "it-v-a1-85", "it-v-a1-86", "it-v-a1-87", "it-v-a1-88"],
        verbIds: ["it-vb-a1-9", "it-vb-a1-12"],
        checkpointId: "it-cp-a1-2",
        testQuestions: [
            { id: "it-uq-a1-9-1", level: "A1", prompt: "Complete: 'Io ___ una lettera.' (scrivere)", options: ["scrivi", "scrivo", "scrive", "scriviamo"], answer: "scrivo" },
            { id: "it-uq-a1-9-2", level: "A1", prompt: "Complete: 'Tu ___ il libro.' (leggere)", options: ["leggo", "leggi", "legge", "leggono"], answer: "leggi" },
            { id: "it-uq-a1-9-3", level: "A1", prompt: "Complete: 'Io ___ l'italiano.' (capire — type 2)", options: ["capisco", "capisce", "capisci", "capiamo"], answer: "capisco" },
            { id: "it-uq-a1-9-4", level: "A1", prompt: "Complete: 'Loro ___ il lavoro.' (finire — type 2)", options: ["finiscono", "finisco", "finisce", "finiamo"], answer: "finiscono" },
            { id: "it-uq-a1-9-5", level: "A1", prompt: "What does 'dormire' mean?", options: ["to eat", "to read", "to sleep", "to finish"], answer: "to sleep" },
            { id: "it-uq-a1-9-6", level: "A1", prompt: "Complete: 'Noi ___ fino alle dieci.' (dormire — type 1)", options: ["dormo", "dormiamo", "dormite", "dormono"], answer: "dormiamo" },
        ],
    },

    // ─────────────────────────────────────────────
    // BLOCK 3 — La vita quotidiana (Daily life)
    // Can-do goal: I can describe my routine, ask questions, and handle negation.
    // ─────────────────────────────────────────────
    {
        id: "it-a1-u19",
        level: "A1",
        order: 10,
        title: "La mia giornata — My day",
        description: "Describe your daily routine with reflexive verbs",
        grammarIds: ["it-g-a1-25"],
        vocabIds: [
            "it-v-a1-141", "it-v-a1-142", "it-v-a1-143", "it-v-a1-144",
            "it-v-a1-145", "it-v-a1-146", "it-v-a1-147", "it-v-a1-148",
            "it-v-a1-149", "it-v-a1-150", "it-v-a1-151", "it-v-a1-152",
        ],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-10-1", level: "A1", prompt: "How do you say 'My name is Sofia'?", options: ["Sono Sofia.", "Ho Sofia.", "Mi chiamo Sofia.", "Chiamo Sofia."], answer: "Mi chiamo Sofia." },
            { id: "it-uq-a1-10-2", level: "A1", prompt: "Complete: 'Lei ___ alza alle sette.'", options: ["mi", "ti", "si", "ci"], answer: "si" },
            { id: "it-uq-a1-10-3", level: "A1", prompt: "Where does the reflexive pronoun go with a conjugated verb?", options: ["After the verb", "Before the conjugated verb", "At the end of the sentence", "After the subject"], answer: "Before the conjugated verb" },
            { id: "it-uq-a1-10-4", level: "A1", prompt: "Complete: 'Noi ___ laviamo le mani.'", options: ["mi", "ti", "si", "ci"], answer: "ci" },
            { id: "it-uq-a1-10-5", level: "A1", prompt: "What does 'vestirsi' mean?", options: ["to eat", "to sleep", "to get dressed", "to sit down"], answer: "to get dressed" },
            { id: "it-uq-a1-10-6", level: "A1", prompt: "How do you say 'What time do you wake up?'", options: ["A che ora ti alzi?", "A che ora mi sveglio?", "A che ora ti svegli?", "A che ora ci alziamo?"], answer: "A che ora ti svegli?" },
        ],
        cultureIds: ["it-c-a1-3"],
    },
    {
        id: "it-a1-u11",
        level: "A1",
        order: 11,
        title: "Numeri, ora e date — Numbers, time, dates",
        description: "Count, tell the time, and say today's date",
        grammarIds: ["it-g-a1-15", "it-g-a1-18", "it-g-a1-35"],
        vocabIds: [
            // Numbers 1–20
            "it-v-a1-13", "it-v-a1-14", "it-v-a1-15", "it-v-a1-16", "it-v-a1-17",
            "it-v-a1-18", "it-v-a1-19", "it-v-a1-20", "it-v-a1-21", "it-v-a1-22",
            "it-v-a1-23", "it-v-a1-24", "it-v-a1-25", "it-v-a1-26", "it-v-a1-27",
            "it-v-a1-28", "it-v-a1-29", "it-v-a1-30", "it-v-a1-31", "it-v-a1-32",
            // Days and time
            "it-v-a1-162", "it-v-a1-163",
            "it-v-a1-33", "it-v-a1-34", "it-v-a1-35", "it-v-a1-36",
            "it-v-a1-37", "it-v-a1-38", "it-v-a1-39",
            // Tens 20–100
            "it-v-a1-153", "it-v-a1-154", "it-v-a1-155", "it-v-a1-156",
            "it-v-a1-157", "it-v-a1-158", "it-v-a1-159", "it-v-a1-160", "it-v-a1-161",
            // Months
            "it-v-a1-188", "it-v-a1-189", "it-v-a1-190", "it-v-a1-191",
            "it-v-a1-192", "it-v-a1-193", "it-v-a1-194", "it-v-a1-195",
            "it-v-a1-196", "it-v-a1-197", "it-v-a1-198", "it-v-a1-199",
            // Seasons
            "it-v-a1-46",
        ],
        verbIds: ["it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-11-1", level: "A1", prompt: "What is 'fifteen' in Italian?", options: ["Dodici", "Sedici", "Quindici", "Tredici"], answer: "Quindici" },
            { id: "it-uq-a1-11-2", level: "A1", prompt: "How do you say 'It's three o'clock'?", options: ["È le tre.", "Sono le tre.", "Sono tre.", "È tre ore."], answer: "Sono le tre." },
            { id: "it-uq-a1-11-3", level: "A1", prompt: "How do you say 'It's half past eight'?", options: ["Sono le otto e un quarto.", "Sono le otto meno mezza.", "Sono le otto e mezza.", "Sono le otto e trenta."], answer: "Sono le otto e mezza." },
            { id: "it-uq-a1-11-4", level: "A1", prompt: "What is 'thirty' in Italian?", options: ["Venti", "Trenta", "Quaranta", "Cento"], answer: "Trenta" },
            { id: "it-uq-a1-11-5", level: "A1", prompt: "Which month is 'agosto'?", options: ["June", "July", "August", "September"], answer: "August" },
            { id: "it-uq-a1-11-6", level: "A1", prompt: "How do you say 'Today is the 1st of May'?", options: ["Oggi è uno maggio.", "Oggi è il primo maggio.", "Oggi è il uno maggio.", "Oggi è primo maggio."], answer: "Oggi è il primo maggio." },
        ],
        listeningIds: ["it-l-a1-3"],
    },
    {
        id: "it-a1-u10",
        level: "A1",
        order: 12,
        title: "Fare domande — Asking questions",
        description: "Ask and answer the most important questions in Italian",
        grammarIds: ["it-g-a1-11"],
        vocabIds: ["it-v-a1-127", "it-v-a1-128", "it-v-a1-129", "it-v-a1-130"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-3"],
        testQuestions: [
            { id: "it-uq-a1-12-1", level: "A1", prompt: "How do you say 'Where do you live?' in Italian?", options: ["Quando abiti?", "Cosa abiti?", "Dove abiti?", "Come abiti?"], answer: "Dove abiti?" },
            { id: "it-uq-a1-12-2", level: "A1", prompt: "Which question word means 'why'?", options: ["Dove", "Quando", "Come", "Perché"], answer: "Perché" },
            { id: "it-uq-a1-12-3", level: "A1", prompt: "Which question word means 'who'?", options: ["Cosa", "Chi", "Quale", "Quanto"], answer: "Chi" },
            { id: "it-uq-a1-12-4", level: "A1", prompt: "How do you ask 'What is your name?' (informal)?", options: ["Dove ti chiami?", "Come ti chiami?", "Chi ti chiami?", "Cosa ti chiami?"], answer: "Come ti chiami?" },
            { id: "it-uq-a1-12-5", level: "A1", prompt: "How do you ask 'When does the train leave?'", options: ["Dove parte il treno?", "Come parte il treno?", "Quando parte il treno?", "Perché parte il treno?"], answer: "Quando parte il treno?" },
            { id: "it-uq-a1-12-6", level: "A1", prompt: "Which question word means 'how much / how many'?", options: ["Come", "Quale", "Quanto", "Chi"], answer: "Quanto" },
        ],
        listeningIds: ["it-l-a1-4"],
    },
    {
        id: "it-a1-u9",
        level: "A1",
        order: 13,
        title: "Non, mai, niente — Negation",
        description: "Say what you don't do, what never happens — with Italian double negation",
        grammarIds: ["it-g-a1-10"],
        vocabIds: ["it-v-a1-123", "it-v-a1-124", "it-v-a1-125", "it-v-a1-126", "it-v-a1-147", "it-v-a1-148", "it-v-a1-149", "it-v-a1-150"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-13-1", level: "A1", prompt: "How do you make a sentence negative in Italian?", options: ["Put 'no' before the subject", "Put 'non' before the verb", "Put 'non' after the verb", "Change the verb ending"], answer: "Put 'non' before the verb" },
            { id: "it-uq-a1-13-2", level: "A1", prompt: "Translate: 'I don't speak German.'", options: ["Parlo non tedesco.", "Non parlo tedesco.", "Non parlare tedesco.", "Non parla tedesco."], answer: "Non parlo tedesco." },
            { id: "it-uq-a1-13-3", level: "A1", prompt: "How do you say 'I'm not tired'?", options: ["Sono stanco non.", "Non sono stanco.", "No sono stanco.", "Sono non stanco."], answer: "Non sono stanco." },
            { id: "it-uq-a1-13-4", level: "A1", prompt: "What does 'mai' mean?", options: ["always", "sometimes", "never", "often"], answer: "never" },
            { id: "it-uq-a1-13-5", level: "A1", prompt: "How do you say 'She never eats meat'?", options: ["Non mangia mai carne.", "Non mangia carne mai.", "Mangia non mai carne.", "Mai non mangia carne."], answer: "Non mangia mai carne." },
            { id: "it-uq-a1-13-6", level: "A1", prompt: "How do you say 'I don't have anything'?", options: ["Non ho qualcosa.", "Non ho niente.", "Ho niente.", "Non ho rien."], answer: "Non ho niente." },
        ],
    },
    {
        id: "it-a1-u6",
        level: "A1",
        order: 14,
        title: "Fare — il verbo tuttofare",
        description: "Master the most versatile Italian verb through essential compound expressions",
        grammarIds: ["it-g-a1-9"],
        vocabIds: [
            "it-v-a1-151", "it-v-a1-152",
            "it-v-a1-164", "it-v-a1-165", "it-v-a1-166", "it-v-a1-167",
            "it-v-a1-168", "it-v-a1-169", "it-v-a1-170", "it-v-a1-171",
            "it-v-a1-172", "it-v-a1-173", "it-v-a1-174", "it-v-a1-175",
        ],
        verbIds: ["it-vb-a1-5"],
        checkpointId: "it-cp-a1-3",
        testQuestions: [
            { id: "it-uq-a1-14-1", level: "A1", prompt: "Complete: 'Io ___ colazione alle sette.' (fare)", options: ["fai", "fa", "faccio", "fanno"], answer: "faccio" },
            { id: "it-uq-a1-14-2", level: "A1", prompt: "Complete: 'Voi ___ sport ogni sera.' (fare)", options: ["fate", "fanno", "faccio", "fa"], answer: "fate" },
            { id: "it-uq-a1-14-3", level: "A1", prompt: "How do you say 'The weather is nice'?", options: ["Fa freddo.", "Fa bel tempo.", "Fa brutto tempo.", "Fa caldo."], answer: "Fa bel tempo." },
            { id: "it-uq-a1-14-4", level: "A1", prompt: "The noi form of fare is irregular. What is it?", options: ["famo", "fanno", "facciamo", "fate"], answer: "facciamo" },
            { id: "it-uq-a1-14-5", level: "A1", prompt: "Complete: 'Loro ___ una passeggiata.' (fare)", options: ["facciamo", "fate", "fanno", "faccio"], answer: "fanno" },
            { id: "it-uq-a1-14-6", level: "A1", prompt: "What does 'fare la spesa' mean?", options: ["to do sport", "to do homework", "to go grocery shopping", "to do the dishes"], answer: "to go grocery shopping" },
        ],
        readingIds: ["it-r-a1-6"],
        listeningIds: ["it-l-a1-5"],
    },

    // ─────────────────────────────────────────────
    // BLOCK 4 — Nel mondo (Out in the world)
    // Can-do goal: I can navigate food, directions, shopping, and requests.
    // ─────────────────────────────────────────────
    {
        id: "it-a1-u15",
        level: "A1",
        order: 16,
        title: "Mangiare fuori — Food and restaurants",
        description: "Order food, read a menu, and handle a full restaurant interaction",
        grammarIds: ["it-g-a1-30", "it-g-a1-20"],
        vocabIds: ["it-v-a1-61", "it-v-a1-62", "it-v-a1-63", "it-v-a1-64", "it-v-a1-65", "it-v-a1-66", "it-v-a1-67", "it-v-a1-68", "it-v-a1-69", "it-v-a1-72", "it-v-a1-73", "it-v-a1-74", "it-v-a1-75", "it-v-a1-76", "it-v-a1-77"],
        verbIds: ["it-vb-a1-6", "it-vb-a1-7", "it-vb-a1-8", "it-vb-a1-9"],
        testQuestions: [
            { id: "it-uq-a1-15-1", level: "A1", prompt: "How do you say 'a coffee, please' in Italian?", options: ["Un tè, per favore.", "Un caffè, grazie.", "Un caffè, per favore.", "Il caffè, prego."], answer: "Un caffè, per favore." },
            { id: "it-uq-a1-15-2", level: "A1", prompt: "What does 'il pesce' mean?", options: ["Meat", "Chicken", "Fish", "Bread"], answer: "Fish" },
            { id: "it-uq-a1-15-3", level: "A1", prompt: "Which partitive article goes before a masculine noun starting with a vowel (e.g. 'olio')?", options: ["del", "dello", "dell'", "dei"], answer: "dell'" },
            { id: "it-uq-a1-15-4", level: "A1", prompt: "What does 'il formaggio' mean?", options: ["Butter", "Cream", "Cheese", "Yogurt"], answer: "Cheese" },
            { id: "it-uq-a1-15-5", level: "A1", prompt: "Complete: 'Vuoi ___ acqua?' (some water — partitive)", options: ["del", "della", "delle", "degli"], answer: "della" },
            { id: "it-uq-a1-15-6", level: "A1", prompt: "What does 'la birra' mean?", options: ["Wine", "Juice", "Water", "Beer"], answer: "Beer" },
        ],
        readingIds: ["it-r-a1-3"],
        listeningIds: ["it-l-a1-2"],
        cultureIds: ["it-c-a1-1", "it-c-a1-4"],
    },
    {
        id: "it-a1-u17",
        level: "A1",
        order: 17,
        title: "In giro per la città — Around the city",
        description: "Ask for directions, navigate transport, and describe a city",
        grammarIds: ["it-g-a1-22"],
        vocabIds: [
            "it-v-a1-108", "it-v-a1-109", "it-v-a1-110", "it-v-a1-114", "it-v-a1-115",
            "it-v-a1-116", "it-v-a1-117", "it-v-a1-119", "it-v-a1-121", "it-v-a1-122",
            "it-v-a1-123", "it-v-a1-124", "it-v-a1-125", "it-v-a1-126", "it-v-a1-127",
            "it-v-a1-200", "it-v-a1-201", "it-v-a1-202", "it-v-a1-203",
            "it-v-a1-204", "it-v-a1-205", "it-v-a1-206", "it-v-a1-207", "it-v-a1-208",
        ],
        verbIds: ["it-vb-a1-4", "it-vb-a1-10", "it-vb-a1-22", "it-vb-a1-23"],
        testQuestions: [
            { id: "it-uq-a1-16-1", level: "A1", prompt: "How do you say 'Turn left'?", options: ["Vai dritto.", "Gira a destra.", "Gira a sinistra.", "Torna indietro."], answer: "Gira a sinistra." },
            { id: "it-uq-a1-16-2", level: "A1", prompt: "Complete: 'Vado ___ museo.' (article + 'il')", options: ["al", "del", "nel", "col"], answer: "al" },
            { id: "it-uq-a1-16-3", level: "A1", prompt: "What does 'lontano' mean?", options: ["Near", "Inside", "Above", "Far"], answer: "Far" },
            { id: "it-uq-a1-16-4", level: "A1", prompt: "What does 'la spiaggia' mean?", options: ["Park", "Museum", "Library", "Beach"], answer: "Beach" },
            { id: "it-uq-a1-16-5", level: "A1", prompt: "Complete: 'Loro ___ al parco.' (andare)", options: ["vado", "va", "andate", "vanno"], answer: "vanno" },
            { id: "it-uq-a1-16-6", level: "A1", prompt: "How do you say 'Go straight ahead'?", options: ["Vai dritto.", "Gira a destra.", "Gira a sinistra.", "Fermati qui."], answer: "Vai dritto." },
        ],
        listeningIds: ["it-l-a1-6"],
    },
    {
        id: "it-a1-u13",
        level: "A1",
        order: 15,
        title: "Posso, voglio, devo — Modal verbs",
        description: "Express ability, desire, and obligation with Italy's three modal verbs",
        grammarIds: ["it-g-a1-19", "it-g-a1-33"],
        vocabIds: [
            "it-v-a1-61", "it-v-a1-62", "it-v-a1-64", "it-v-a1-66", "it-v-a1-67",
            "it-v-a1-147", "it-v-a1-148", "it-v-a1-149", "it-v-a1-150",
        ],
        verbIds: ["it-vb-a1-6", "it-vb-a1-7", "it-vb-a1-18", "it-vb-a1-19", "it-vb-a1-20", "it-vb-a1-21", "it-vb-a1-27"],
        testQuestions: [
            { id: "it-uq-a1-17-1", level: "A1", prompt: "Complete: 'Io ___ un caffè.' (volere)", options: ["vuole", "vuoi", "voglio", "vogliono"], answer: "voglio" },
            { id: "it-uq-a1-17-2", level: "A1", prompt: "Complete: 'Noi ___ venire.' (potere)", options: ["posso", "puoi", "possiamo", "possono"], answer: "possiamo" },
            { id: "it-uq-a1-17-3", level: "A1", prompt: "Complete: 'Puoi ___ italiano?' (parlare)", options: ["parlate", "parlano", "parli", "parlare"], answer: "parlare" },
            { id: "it-uq-a1-17-4", level: "A1", prompt: "Choose the correct form of dovere: 'Noi ___ studiare ogni giorno.'", options: ["devo", "deve", "dobbiamo", "dovete"], answer: "dobbiamo" },
            { id: "it-uq-a1-17-5", level: "A1", prompt: "Translate: 'You (tu) must eat breakfast.'", options: ["Devi fare colazione.", "Deve fare colazione.", "Dovete fare colazione.", "Devo fare colazione."], answer: "Devi fare colazione." },
            { id: "it-uq-a1-17-6", level: "A1", prompt: "Translate: 'They must arrive on time.'", options: ["Vogliono arrivare in orario.", "Possono arrivare in orario.", "Arrivano in orario.", "Devono arrivare in orario."], answer: "Devono arrivare in orario." },
        ],
    },
    {
        id: "it-a1-u7",
        level: "A1",
        order: 18,
        title: "Descrivere — Describing people and things",
        description: "Adjective agreement — the rule finally named after 17 units of exposure",
        grammarIds: ["it-g-a1-12"],
        vocabIds: [
            "it-v-a1-92", "it-v-a1-93", "it-v-a1-94", "it-v-a1-95",
            "it-v-a1-96", "it-v-a1-97", "it-v-a1-98", "it-v-a1-99",
            "it-v-a1-100", "it-v-a1-101", "it-v-a1-102", "it-v-a1-103",
            "it-v-a1-104", "it-v-a1-105", "it-v-a1-106", "it-v-a1-107",
        ],
        verbIds: ["it-vb-a1-1"],
        testQuestions: [
            { id: "it-uq-a1-18-1", level: "A1", prompt: "Complete: 'La macchina è ___.' (red)", options: ["rosso", "rossa", "rossi", "rosse"], answer: "rossa" },
            { id: "it-uq-a1-18-2", level: "A1", prompt: "Complete: 'I libri sono ___.' (interesting)", options: ["interessante", "interessanti", "interessanto", "interessanta"], answer: "interessanti" },
            { id: "it-uq-a1-18-3", level: "A1", prompt: "What does 'bianco' mean?", options: ["Black", "Blue", "White", "Yellow"], answer: "White" },
            { id: "it-uq-a1-18-4", level: "A1", prompt: "Complete: 'Le case sono ___.' (big — grande)", options: ["grandi", "grande", "grando", "grandes"], answer: "grandi" },
            { id: "it-uq-a1-18-5", level: "A1", prompt: "What does 'la gonna' mean?", options: ["Jacket", "Shirt", "Skirt", "Hat"], answer: "Skirt" },
            { id: "it-uq-a1-18-6", level: "A1", prompt: "Complete: 'Il ragazzo è ___.' (tall — alto)", options: ["alta", "alte", "alti", "alto"], answer: "alto" },
        ],
    },
    {
        id: "it-a1-u19-shop",
        level: "A1",
        order: 19,
        title: "Fare acquisti — Shopping",
        description: "Buy things, ask prices, and choose between options using questo and quello",
        grammarIds: ["it-g-a1-24"],
        vocabIds: [
            // Tens for prices
            "it-v-a1-153", "it-v-a1-154", "it-v-a1-155", "it-v-a1-156",
            "it-v-a1-157", "it-v-a1-158", "it-v-a1-159", "it-v-a1-160", "it-v-a1-161",
            // Months — compound numbers in dates/prices context
            "it-v-a1-188", "it-v-a1-189", "it-v-a1-190", "it-v-a1-191",
            // Seasons
            "it-v-a1-46",
        ],
        verbIds: [],
        checkpointId: "it-cp-a1-4",
        testQuestions: [
            { id: "it-uq-a1-19-1", level: "A1", prompt: "How do you say 'How much does it cost?'", options: ["Quanto pesa?", "Quanto costa?", "Quanto vale?", "Quanto è?"], answer: "Quanto costa?" },
            { id: "it-uq-a1-19-2", level: "A1", prompt: "How do you say 'fifty euros'?", options: ["Cinquecento euro", "Cinque euro", "Cinquanta euro", "Cinquantuno euro"], answer: "Cinquanta euro" },
            { id: "it-uq-a1-19-3", level: "A1", prompt: "How do you correctly write 'twenty-one'?", options: ["Ventiuno", "Ventuno", "Ventiun", "Ventune"], answer: "Ventuno" },
            { id: "it-uq-a1-19-4", level: "A1", prompt: "How do you say 'I want this shirt' (la camicia)?", options: ["Voglio quella camicia.", "Voglio questa camicia.", "Voglio questo camicia.", "Voglio quel camicia."], answer: "Voglio questa camicia." },
            { id: "it-uq-a1-19-5", level: "A1", prompt: "How do you say 'I'll take that (one)' (pointing far away — il prodotto)?", options: ["Prendo questo.", "Prendo quella.", "Prendo quel.", "Prendo quello."], answer: "Prendo quello." },
            { id: "it-uq-a1-19-6", level: "A1", prompt: "How do you say 'I am forty-two years old'?", options: ["Ho quarantadue anni.", "Ho quaranta due anni.", "Ho quaranta-due anni.", "Ho quarantadue anno."], answer: "Ho quarantadue anni." },
        ],
    },

    // ─────────────────────────────────────────────
    // BLOCK 5 — Amplia il tuo italiano (Expanding your Italian)
    // Can-do goal: I can express myself with more precision and handle more complex interactions.
    // ─────────────────────────────────────────────
    {
        id: "it-a1-u20",
        level: "A1",
        order: 20,
        title: "Questo e quello — Demonstratives",
        description: "Point to things at any distance with the full demonstrative system",
        grammarIds: ["it-g-a1-24"],
        vocabIds: [
            "it-v-a1-100", "it-v-a1-101", "it-v-a1-102", "it-v-a1-103",
            "it-v-a1-104", "it-v-a1-105", "it-v-a1-106", "it-v-a1-107",
            "it-v-a1-61", "it-v-a1-62", "it-v-a1-63", "it-v-a1-64",
            "it-v-a1-65", "it-v-a1-66", "it-v-a1-67", "it-v-a1-68",
        ],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-20-1", level: "A1", prompt: "How do you say 'this book' (il libro)?", options: ["quello libro", "quel libro", "questo libro", "questa libro"], answer: "questo libro" },
            { id: "it-uq-a1-20-2", level: "A1", prompt: "How do you say 'that student' (lo studente)?", options: ["quel studente", "quello studente", "questo studente", "quell'studente"], answer: "quello studente" },
            { id: "it-uq-a1-20-3", level: "A1", prompt: "How do you say 'those friends' (gli amici)?", options: ["quei amici", "quegli amici", "quello amici", "quelle amici"], answer: "quegli amici" },
            { id: "it-uq-a1-20-4", level: "A1", prompt: "How do you say 'this friend' (fem., starts with vowel — l'amica)?", options: ["questa amica", "quest'amica", "questo amica", "quell'amica"], answer: "quest'amica" },
            { id: "it-uq-a1-20-5", level: "A1", prompt: "How do you say 'What is this?'", options: ["Cos'è questo?", "Cos'è quello?", "Come è questo?", "Che è questo?"], answer: "Cos'è questo?" },
            { id: "it-uq-a1-20-6", level: "A1", prompt: "Complete: '___ casa è grande.' (that house — la casa)", options: ["Quel", "Quello", "Quella", "Queste"], answer: "Quella" },
        ],
    },
    {
        id: "it-a1-u16",
        level: "A1",
        order: 21,
        title: "Sapere e conoscere — Two ways to know",
        description: "Distinguish between knowing a fact and being familiar with a person or place",
        grammarIds: ["it-g-a1-20"],
        vocabIds: [
            "it-v-a1-131", "it-v-a1-132", "it-v-a1-133", "it-v-a1-134", "it-v-a1-135",
            "it-v-a1-136", "it-v-a1-137", "it-v-a1-138", "it-v-a1-139", "it-v-a1-140",
            "it-v-a1-82", "it-v-a1-83", "it-v-a1-84", "it-v-a1-85", "it-v-a1-86",
            "it-v-a1-87", "it-v-a1-88", "it-v-a1-89", "it-v-a1-90", "it-v-a1-91",
        ],
        verbIds: ["it-vb-a1-1", "it-vb-a1-2", "it-vb-a1-5"],
        testQuestions: [
            { id: "it-uq-a1-21-1", level: "A1", prompt: "What does 'il medico' mean?", options: ["Lawyer", "Teacher", "Doctor", "Engineer"], answer: "Doctor" },
            { id: "it-uq-a1-21-2", level: "A1", prompt: "Which verb do you use to say 'I know how to drive'?", options: ["Conosco guidare.", "So guidare.", "Sapisco guidare.", "Conosco come guidare."], answer: "So guidare." },
            { id: "it-uq-a1-21-3", level: "A1", prompt: "Which verb do you use to say 'I know Maria' (personally)?", options: ["So Maria.", "Sapisco Maria.", "Conosco Maria.", "Conosca Maria."], answer: "Conosco Maria." },
            { id: "it-uq-a1-21-4", level: "A1", prompt: "What does 'la testa' mean?", options: ["Hand", "Heart", "Foot", "Head"], answer: "Head" },
            { id: "it-uq-a1-21-5", level: "A1", prompt: "What does 'il cameriere' mean?", options: ["Chef", "Waiter", "Policeman", "Actor"], answer: "Waiter" },
            { id: "it-uq-a1-21-6", level: "A1", prompt: "How do you say 'Do you know Rome?' (informal)", options: ["Sai Roma?", "Conosci Roma?", "Sapete Roma?", "Conoscete Roma?"], answer: "Conosci Roma?" },
        ],
        readingIds: ["it-r-a1-2"],
        listeningIds: ["it-l-a1-7"],
        cultureIds: ["it-c-a1-2"],
    },
    {
        id: "it-a1-u24",
        level: "A1",
        order: 22,
        title: "Dimmi cosa fare — Commands",
        description: "Give and follow instructions in both formal and informal Italian",
        grammarIds: ["it-g-a1-32"],
        vocabIds: [
            "it-v-a1-123", "it-v-a1-124", "it-v-a1-125", "it-v-a1-126", "it-v-a1-127",
            "it-v-a1-128", "it-v-a1-129", "it-v-a1-130",
            "it-v-a1-141", "it-v-a1-142", "it-v-a1-143", "it-v-a1-144", "it-v-a1-145",
            "it-v-a1-146", "it-v-a1-147", "it-v-a1-148",
        ],
        verbIds: [
            "it-vb-a1-3", "it-vb-a1-4", "it-vb-a1-5",
            "it-vb-a1-28", "it-vb-a1-29", "it-vb-a1-30", "it-vb-a1-31",
        ],
        testQuestions: [
            { id: "it-uq-a1-22-1", level: "A1", prompt: "What is the tu imperative of 'parlare'?", options: ["Parla!", "Parli!", "Parlate!", "Parlare!"], answer: "Parla!" },
            { id: "it-uq-a1-22-2", level: "A1", prompt: "What is the Lei (formal) imperative of 'aspettare'?", options: ["Aspetta!", "Aspetti!", "Aspettate!", "Aspettare!"], answer: "Aspetti!" },
            { id: "it-uq-a1-22-3", level: "A1", prompt: "How do you form a negative tu imperative? Complete: '___ correre!' (Don't run!)", options: ["Non corri!", "Non corra!", "Non correre!", "Non correte!"], answer: "Non correre!" },
            { id: "it-uq-a1-22-4", level: "A1", prompt: "What is the irregular tu imperative of 'andare'?", options: ["Anda!", "Va'!", "Vai!", "Vadi!"], answer: "Va'!" },
            { id: "it-uq-a1-22-5", level: "A1", prompt: "What is the tu imperative of 'scrivere'?", options: ["Scrivi!", "Scriva!", "Scrivo!", "Scrivere!"], answer: "Scrivi!" },
            { id: "it-uq-a1-22-6", level: "A1", prompt: "The negative tu imperative of -are verbs uses which form?", options: ["the -a ending", "the infinitive", "the -i ending", "the -ano ending"], answer: "the infinitive" },
        ],
        readingIds: ["it-r-a1-8"],
    },
    {
        id: "it-a1-u21",
        level: "A1",
        order: 23,
        title: "Dove e quando — Place and time adverbs",
        description: "Describe where things are and when things happen with precision",
        grammarIds: ["it-g-a1-26", "it-g-a1-27"],
        vocabIds: [
            "it-v-a1-141", "it-v-a1-142", "it-v-a1-143", "it-v-a1-144",
            "it-v-a1-145", "it-v-a1-146", "it-v-a1-147", "it-v-a1-148",
            "it-v-a1-149", "it-v-a1-150",
        ],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-23-1", level: "A1", prompt: "What does 'qui' mean?", options: ["there", "nearby", "here", "inside"], answer: "here" },
            { id: "it-uq-a1-23-2", level: "A1", prompt: "What does 'lontano' mean?", options: ["near", "here", "outside", "far (away)"], answer: "far (away)" },
            { id: "it-uq-a1-23-3", level: "A1", prompt: "What does 'ancora' mean?", options: ["already", "soon", "still / yet", "never"], answer: "still / yet" },
            { id: "it-uq-a1-23-4", level: "A1", prompt: "How do you say 'already' in Italian?", options: ["ancora", "adesso", "già", "presto"], answer: "già" },
            { id: "it-uq-a1-23-5", level: "A1", prompt: "What does 'adesso' mean?", options: ["soon", "yesterday", "later", "now"], answer: "now" },
            { id: "it-uq-a1-23-6", level: "A1", prompt: "Choose the place adverb: 'Le chiavi sono ___ .' (inside)", options: ["tardi", "dentro", "ancora", "presto"], answer: "dentro" },
        ],
    },
    {
        id: "it-a1-u22",
        level: "A1",
        order: 24,
        title: "Quanto spesso? Come? — Frequency and manner",
        description: "Describe how often, how you do things, and connect ideas fluently",
        grammarIds: ["it-g-a1-28", "it-g-a1-29"],
        vocabIds: [
            "it-v-a1-141", "it-v-a1-142", "it-v-a1-143", "it-v-a1-144",
            "it-v-a1-145", "it-v-a1-146", "it-v-a1-147", "it-v-a1-148",
            "it-v-a1-149", "it-v-a1-150",
        ],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-24-1", level: "A1", prompt: "What does 'sempre' mean?", options: ["never", "sometimes", "always", "often"], answer: "always" },
            { id: "it-uq-a1-24-2", level: "A1", prompt: "How do you say 'sometimes' in Italian?", options: ["sempre", "mai", "spesso", "a volte"], answer: "a volte" },
            { id: "it-uq-a1-24-3", level: "A1", prompt: "Where do frequency adverbs usually go?", options: ["Before the subject", "After the conjugated verb", "At the end only", "Before the infinitive"], answer: "After the conjugated verb" },
            { id: "it-uq-a1-24-4", level: "A1", prompt: "Which connector means 'because'?", options: ["ma", "però", "anche se", "perché"], answer: "perché" },
            { id: "it-uq-a1-24-5", level: "A1", prompt: "Put in order: Prima → ? → Infine", options: ["poi", "ma", "perché", "anche"], answer: "poi" },
            { id: "it-uq-a1-24-6", level: "A1", prompt: "What does 'ma' signal in a sentence?", options: ["addition", "sequence", "contrast / but", "cause"], answer: "contrast / but" },
        ],
    },
    {
        id: "it-a1-u25",
        level: "A1",
        order: 25,
        title: "Il futuro prossimo — Bridge to A2",
        description: "Express plans and imminent actions — and preview what's coming at A2",
        grammarIds: ["it-g-a1-13"],
        vocabIds: ["it-v-a1-141", "it-v-a1-142", "it-v-a1-143", "it-v-a1-144", "it-v-a1-145", "it-v-a1-146"],
        verbIds: ["it-vb-a1-4", "it-vb-a1-1"],
        checkpointId: "it-cp-a1-5",
        testQuestions: [
            { id: "it-uq-a1-25-1", level: "A1", prompt: "How do you say 'I am about to go out'?", options: ["Vado a uscire.", "Sto per uscire.", "Uscirò presto.", "Sto uscendo."], answer: "Sto per uscire." },
            { id: "it-uq-a1-25-2", level: "A1", prompt: "Complete: 'Vado ___ mangiare.'", options: ["per", "di", "a", "in"], answer: "a" },
            { id: "it-uq-a1-25-3", level: "A1", prompt: "How do you say 'It is about to rain'?", options: ["Piove sempre.", "Sta per piovere.", "Va a piovere.", "Pioverà."], answer: "Sta per piovere." },
            { id: "it-uq-a1-25-4", level: "A1", prompt: "What does 'domani' mean?", options: ["Today", "Yesterday", "Now", "Tomorrow"], answer: "Tomorrow" },
            { id: "it-uq-a1-25-5", level: "A1", prompt: "Which structure means something is ABOUT TO happen right now?", options: ["andare a + inf.", "stare per + inf.", "volere + inf.", "potere + inf."], answer: "stare per + inf." },
            { id: "it-uq-a1-25-6", level: "A1", prompt: "Translate: 'We are going to watch a film tonight.'", options: ["Guardiamo un film stasera.", "Abbiamo guardato un film stasera.", "Andiamo a vedere un film stasera.", "Stiamo per vedere un film."], answer: "Andiamo a vedere un film stasera." },
        ],
    },
]
