// data/italian/units/a1.ts
import { LessonUnit } from "../../../types"

// 22 ordered A1 units for Italian.
// Each unit builds on the previous. Unit N+1 unlocks when unit N is mastered.
//
// U1–U19: existing units (see previous history in git log)
// U20: Reflexive Verbs & Daily Routine (new — it-g-a1-25)
// U21: Demonstratives (new — it-g-a1-24)
// U22: Adverbs, Frequency & Connectors (new — it-g-a1-26/27/28/29)
// U23: Bridge — The Near Future (renumbered from U19 — stays last)

export const a1Units: LessonUnit[] = [
    {
        id: "it-a1-u1",
        level: "A1",
        order: 1,
        title: "Greetings, Pronunciation & Subject Pronouns",
        description: "Your first steps in Italian: learn essential greetings and polite phrases, understand how Italian pronunciation works, and meet the subject pronouns — including the important tu/Lei distinction between informal and formal address.",
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
        ]
    },
    {
        id: "it-a1-u2",
        level: "A1",
        order: 2,
        title: "Essere & Avere — Introducing Yourself",
        description: "Master the two foundational Italian verbs: essere (to be) for identity and nationality, and avere (to have) for age and possession. Use them together to introduce yourself.",
        grammarIds: ["it-g-a1-2", "it-g-a1-3"],
        vocabIds: ["it-v-a1-47", "it-v-a1-48", "it-v-a1-49", "it-v-a1-50", "it-v-a1-51", "it-v-a1-52"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-2-1", level: "A1", prompt: "Complete: 'Io ___ italiano.' (essere)", options: ["sei", "è", "sono", "siamo"], answer: "sono" },
            { id: "it-uq-a1-2-2", level: "A1", prompt: "Complete: 'Io ___ un fratello.' (avere)", options: ["ha", "hai", "ho", "abbiamo"], answer: "ho" },
            { id: "it-uq-a1-2-3", level: "A1", prompt: "How do you ask 'How old are you?' in Italian?", options: ["Come ti chiami?", "Quanti anni hai?", "Da dove vieni?", "Cosa fai?"], answer: "Quanti anni hai?" },
            { id: "it-uq-a1-2-4", level: "A1", prompt: "Complete: 'Lei ___ venti anni.' (avere)", options: ["ho", "hai", "ha", "hanno"], answer: "ha" },
            { id: "it-uq-a1-2-5", level: "A1", prompt: "Complete: 'Noi ___ italiani.' (essere)", options: ["siamo", "siete", "sono", "sei"], answer: "siamo" },
            { id: "it-uq-a1-2-6", level: "A1", prompt: "How do you say 'My name is Maria'?", options: ["Sono Maria.", "Ho Maria.", "Mi chiamo Maria.", "Chiamo Maria."], answer: "Mi chiamo Maria." },
        ]
    },
    {
        id: "it-a1-u3",
        level: "A1",
        order: 3,
        title: "Definite & Indefinite Articles",
        description: "Master il, lo, la, l', i, gli, le and un, uno, una, un'.",
        grammarIds: ["it-g-a1-4", "it-g-a1-5"],
        vocabIds: ["it-v-a1-61", "it-v-a1-62", "it-v-a1-63", "it-v-a1-64", "it-v-a1-65", "it-v-a1-109", "it-v-a1-110", "it-v-a1-131"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-3-1", level: "A1", prompt: "Which article goes before 'studente'?", options: ["Il", "La", "Lo", "Un"], answer: "Lo" },
            { id: "it-uq-a1-3-2", level: "A1", prompt: "Which article goes before 'libro'?", options: ["Lo", "La", "Il", "Le"], answer: "Il" },
            { id: "it-uq-a1-3-3", level: "A1", prompt: "What is the plural of 'il libro'?", options: ["la libri", "i libri", "le libro", "gli libri"], answer: "i libri" },
            { id: "it-uq-a1-3-4", level: "A1", prompt: "Which indefinite article goes before 'studente' (masc.)?", options: ["Un", "Una", "Uno", "Un'"], answer: "Uno" },
            { id: "it-uq-a1-3-5", level: "A1", prompt: "Which article goes before 'amica' (fem., starts with vowel)?", options: ["La", "L'", "Una", "Un'"], answer: "L'" },
            { id: "it-uq-a1-3-6", level: "A1", prompt: "What is the plural of 'la casa'?", options: ["le case", "i case", "la case", "li case"], answer: "le case" }
        ]
    },
    {
        id: "it-a1-u4",
        level: "A1",
        order: 4,
        title: "Regular -are Verbs",
        description: "Conjugate regular -are verbs in the present tense using parlare as a model.",
        grammarIds: ["it-g-a1-6"],
        vocabIds: ["it-v-a1-141", "it-v-a1-142", "it-v-a1-143", "it-v-a1-144", "it-v-a1-145", "it-v-a1-146", "it-v-a1-147", "it-v-a1-148", "it-v-a1-149", "it-v-a1-150"],
        verbIds: ["it-vb-a1-3", "it-vb-a1-11", "it-vb-a1-13", "it-vb-a1-14", "it-vb-a1-15", "it-vb-a1-16", "it-vb-a1-17"],
        testQuestions: [
            { id: "it-uq-a1-4-1", level: "A1", prompt: "Complete: 'Tu ___ italiano.' (parlare)", options: ["parlo", "parla", "parli", "parliamo"], answer: "parli" },
            { id: "it-uq-a1-4-2", level: "A1", prompt: "Complete: 'Noi ___ a Roma.' (abitare)", options: ["abiti", "abita", "abitiamo", "abitano"], answer: "abitiamo" },
            { id: "it-uq-a1-4-3", level: "A1", prompt: "Complete: 'Loro ___ la musica.' (ascoltare)", options: ["ascolto", "ascolta", "ascoltate", "ascoltano"], answer: "ascoltano" },
            { id: "it-uq-a1-4-4", level: "A1", prompt: "What does 'sempre' mean?", options: ["Never", "Sometimes", "Often", "Always"], answer: "Always" },
            { id: "it-uq-a1-4-5", level: "A1", prompt: "Complete: 'Lei ___ a Milano.' (lavorare)", options: ["lavoro", "lavori", "lavora", "lavorano"], answer: "lavora" },
            { id: "it-uq-a1-4-6", level: "A1", prompt: "What does 'spesso' mean?", options: ["Always", "Never", "Often", "Sometimes"], answer: "Often" }
        ]
    },
    {
        id: "it-a1-u5",
        level: "A1",
        order: 5,
        title: "Andare (to go) & Core Prepositions",
        description: "Learn the irregular verb andare and the prepositions and contractions you need to say where you're going — a (to), in (in/to countries), da (from/at), and the contracted forms al, della, nel.",
        grammarIds: ["it-g-a1-8", "it-g-a1-14"],
        vocabIds: [
            "it-v-a1-108", "it-v-a1-109", "it-v-a1-110", "it-v-a1-111",
            "it-v-a1-112", "it-v-a1-113", "it-v-a1-114", "it-v-a1-117", "it-v-a1-118"
        ],
        verbIds: ["it-vb-a1-4"],
        testQuestions: [
            { id: "it-uq-a1-5-1", level: "A1", prompt: "Complete: 'Io ___ a scuola.' (andare)", options: ["vai", "va", "vado", "andiamo"], answer: "vado" },
            { id: "it-uq-a1-5-2", level: "A1", prompt: "Complete: 'Loro ___ al cinema.' (andare)", options: ["vado", "va", "andate", "vanno"], answer: "vanno" },
            { id: "it-uq-a1-5-3", level: "A1", prompt: "What is 'a + il'?", options: ["del", "al", "alla", "nel"], answer: "al" },
            { id: "it-uq-a1-5-4", level: "A1", prompt: "Complete: 'Vado ___ Italia.' (in a country)", options: ["a", "al", "in", "da"], answer: "in" },
            { id: "it-uq-a1-5-5", level: "A1", prompt: "Complete: 'Il libro è ___ tavolo.' (su + il)", options: ["sulla", "sul", "sullo", "sui"], answer: "sul" },
            { id: "it-uq-a1-5-6", level: "A1", prompt: "Complete: 'Vai ___ medico?' (da + il)", options: ["al", "dal", "del", "nel"], answer: "dal" },
        ]
    },
    {
        id: "it-a1-u6",
        level: "A1",
        order: 6,
        title: "Fare (to do/make)",
        description: "Learn the highly irregular verb fare and its many fixed expressions — essential for describing weather, activities, and daily life in Italian.",
        grammarIds: ["it-g-a1-9"],
        vocabIds: [
            "it-v-a1-151", "it-v-a1-152", "it-v-a1-153", "it-v-a1-154",
            "it-v-a1-155", "it-v-a1-156", "it-v-a1-157", "it-v-a1-158"
        ],
        verbIds: ["it-vb-a1-5"],
        testQuestions: [
            { id: "it-uq-a1-6-1", level: "A1", prompt: "Complete: 'Io ___ colazione alle sette.' (fare)", options: ["fai", "fa", "faccio", "fanno"], answer: "faccio" },
            { id: "it-uq-a1-6-2", level: "A1", prompt: "Complete: 'Voi ___ sport ogni sera.' (fare)", options: ["fate", "fanno", "faccio", "fa"], answer: "fate" },
            { id: "it-uq-a1-6-3", level: "A1", prompt: "How do you say 'The weather is nice'?", options: ["Fa freddo.", "Fa bel tempo.", "Fa brutto tempo.", "Fa caldo."], answer: "Fa bel tempo." },
            { id: "it-uq-a1-6-4", level: "A1", prompt: "The noi form of fare is irregular. What is it?", options: ["famo", "fanno", "facciamo", "fate"], answer: "facciamo" },
            { id: "it-uq-a1-6-5", level: "A1", prompt: "Complete: 'Loro ___ una passeggiata.' (fare)", options: ["facciamo", "fate", "fanno", "faccio"], answer: "fanno" },
            { id: "it-uq-a1-6-6", level: "A1", prompt: "What does 'fare la spesa' mean?", options: ["to do sport", "to do homework", "to go grocery shopping", "to do the dishes"], answer: "to go grocery shopping" },
        ]
    },
    {
        id: "it-a1-u7",
        level: "A1",
        order: 7,
        title: "Adjective Agreement",
        description: "Now that you know noun gender, learn how adjectives must agree with their noun in gender and number — and where to place them.",
        grammarIds: ["it-g-a1-12"],
        vocabIds: ["it-v-a1-92", "it-v-a1-93", "it-v-a1-94", "it-v-a1-95", "it-v-a1-96", "it-v-a1-97", "it-v-a1-98", "it-v-a1-99", "it-v-a1-100", "it-v-a1-101", "it-v-a1-102", "it-v-a1-103"],
        verbIds: ["it-vb-a1-1"],
        testQuestions: [
            { id: "it-uq-a1-7-1", level: "A1", prompt: "Complete: 'La macchina è ___.' (red)", options: ["rosso", "rossa", "rossi", "rosse"], answer: "rossa" },
            { id: "it-uq-a1-7-2", level: "A1", prompt: "Complete: 'I libri sono ___.' (interesting)", options: ["interessante", "interessanti", "interessanto", "interessanta"], answer: "interessanti" },
            { id: "it-uq-a1-7-3", level: "A1", prompt: "What does 'bianco' mean?", options: ["Black", "Blue", "White", "Yellow"], answer: "White" },
            { id: "it-uq-a1-7-4", level: "A1", prompt: "Complete: 'Le case sono ___.' (big — grande)", options: ["grandi", "grande", "grando", "grandes"], answer: "grandi" },
            { id: "it-uq-a1-7-5", level: "A1", prompt: "What does 'la gonna' mean?", options: ["Jacket", "Shirt", "Skirt", "Hat"], answer: "Skirt" },
            { id: "it-uq-a1-7-6", level: "A1", prompt: "Complete: 'Il ragazzo è ___.' (tall — alto)", options: ["alta", "alte", "alti", "alto"], answer: "alto" }
        ]
    },
    {
        id: "it-a1-u8",
        level: "A1",
        order: 8,
        title: "Regular -ere and -ire Verbs",
        description: "Learn to conjugate regular -ere verbs (scrivere) and -ire verbs (dormire / finire) — including the isc- type 2 pattern.",
        grammarIds: ["it-g-a1-7"],
        vocabIds: ["it-v-a1-82", "it-v-a1-83", "it-v-a1-84", "it-v-a1-85", "it-v-a1-86", "it-v-a1-87", "it-v-a1-88"],
        verbIds: ["it-vb-a1-9", "it-vb-a1-12"],
        testQuestions: [
            { id: "it-uq-a1-8-1", level: "A1", prompt: "Complete: 'Io ___ una lettera.' (scrivere)", options: ["scrivi", "scrivo", "scrive", "scriviamo"], answer: "scrivo" },
            { id: "it-uq-a1-8-2", level: "A1", prompt: "Complete: 'Tu ___ il libro.' (leggere)", options: ["leggo", "leggi", "legge", "leggono"], answer: "leggi" },
            { id: "it-uq-a1-8-3", level: "A1", prompt: "Complete: 'Io ___ l'italiano.' (capire — type 2)", options: ["capisco", "capisce", "capisci", "capiamo"], answer: "capisco" },
            { id: "it-uq-a1-8-4", level: "A1", prompt: "Complete: 'Loro ___ il lavoro.' (finire — type 2)", options: ["finiscono", "finisco", "finisce", "finiamo"], answer: "finiscono" },
            { id: "it-uq-a1-8-5", level: "A1", prompt: "What does 'la mano' mean?", options: ["Foot", "Arm", "Hand", "Ear"], answer: "Hand" },
            { id: "it-uq-a1-8-6", level: "A1", prompt: "Complete: 'Noi ___ fino alle dieci.' (dormire — type 1)", options: ["dormo", "dormiamo", "dormite", "dormono"], answer: "dormiamo" }
        ]
    },
    {
        id: "it-a1-u9",
        level: "A1",
        order: 9,
        title: "Negation",
        description: "Learn to negate any Italian sentence using non. Discover the key differences between Italian and English negation.",
        grammarIds: ["it-g-a1-10"],
        vocabIds: ["it-v-a1-123", "it-v-a1-124", "it-v-a1-125", "it-v-a1-126", "it-v-a1-147", "it-v-a1-148", "it-v-a1-149", "it-v-a1-150"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-9-1", level: "A1", prompt: "How do you make a sentence negative in Italian?", options: ["Put 'no' before the subject", "Put 'non' before the verb", "Put 'non' after the verb", "Change the verb ending"], answer: "Put 'non' before the verb" },
            { id: "it-uq-a1-9-2", level: "A1", prompt: "Translate: 'I don't speak German.'", options: ["Parlo non tedesco.", "Non parlo tedesco.", "Non parlare tedesco.", "Non parla tedesco."], answer: "Non parlo tedesco." },
            { id: "it-uq-a1-9-3", level: "A1", prompt: "How do you say 'I'm not tired'?", options: ["Sono stanco non.", "Non sono stanco.", "No sono stanco.", "Sono non stanco."], answer: "Non sono stanco." },
            { id: "it-uq-a1-9-4", level: "A1", prompt: "What does 'mai' mean?", options: ["always", "sometimes", "never", "often"], answer: "never" },
            { id: "it-uq-a1-9-5", level: "A1", prompt: "How do you say 'She never eats meat'?", options: ["Non mangia mai carne.", "Non mangia carne mai.", "Mangia non mai carne.", "Mai non mangia carne."], answer: "Non mangia mai carne." },
            { id: "it-uq-a1-9-6", level: "A1", prompt: "How do you say 'I don't have anything'?", options: ["Non ho qualcosa.", "Non ho niente.", "Ho niente.", "Non ho rien."], answer: "Non ho niente." },
        ]
    },
    {
        id: "it-a1-u10",
        level: "A1",
        order: 10,
        title: "Question Formation",
        description: "Form questions using intonation and question words: chi (who), cosa (what), dove (where), quando (when), come (how), perché (why), quanto (how much/many).",
        grammarIds: ["it-g-a1-11"],
        vocabIds: ["it-v-a1-127", "it-v-a1-128", "it-v-a1-129", "it-v-a1-130"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-3"],
        testQuestions: [
            { id: "it-uq-a1-10-1", level: "A1", prompt: "How do you say 'Where do you live?' in Italian?", options: ["Quando abiti?", "Cosa abiti?", "Dove abiti?", "Come abiti?"], answer: "Dove abiti?" },
            { id: "it-uq-a1-10-2", level: "A1", prompt: "Which question word means 'why'?", options: ["Dove", "Quando", "Come", "Perché"], answer: "Perché" },
            { id: "it-uq-a1-10-3", level: "A1", prompt: "Which question word means 'who'?", options: ["Cosa", "Chi", "Quale", "Quanto"], answer: "Chi" },
            { id: "it-uq-a1-10-4", level: "A1", prompt: "How do you ask 'What is your name?' (informal)?", options: ["Dove ti chiami?", "Come ti chiami?", "Chi ti chiami?", "Cosa ti chiami?"], answer: "Come ti chiami?" },
            { id: "it-uq-a1-10-5", level: "A1", prompt: "What does 'vicino' mean?", options: ["Far", "Above", "Near", "Inside"], answer: "Near" },
            { id: "it-uq-a1-10-6", level: "A1", prompt: "How do you ask 'When does the train leave?'", options: ["Dove parte il treno?", "Come parte il treno?", "Quando parte il treno?", "Perché parte il treno?"], answer: "Quando parte il treno?" }
        ]
    },
    {
        id: "it-a1-u11",
        level: "A1",
        order: 11,
        title: "Numbers 1-20 & Telling Time",
        description: "Memorise the numbers 1-20, tell the time, and learn days of the week.",
        grammarIds: ["it-g-a1-15"],
        vocabIds: [
            "it-v-a1-13", "it-v-a1-14", "it-v-a1-15", "it-v-a1-16", "it-v-a1-17",
            "it-v-a1-18", "it-v-a1-19", "it-v-a1-20", "it-v-a1-21", "it-v-a1-22",
            "it-v-a1-23", "it-v-a1-24", "it-v-a1-25", "it-v-a1-26", "it-v-a1-27",
            "it-v-a1-28", "it-v-a1-29", "it-v-a1-30", "it-v-a1-31", "it-v-a1-32",
            "it-v-a1-162", "it-v-a1-163",
            "it-v-a1-33", "it-v-a1-34", "it-v-a1-35", "it-v-a1-36",
            "it-v-a1-37", "it-v-a1-38", "it-v-a1-39",
        ],
        verbIds: ["it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-11-1", level: "A1", prompt: "What is 'fifteen' in Italian?", options: ["Dodici", "Sedici", "Quindici", "Tredici"], answer: "Quindici" },
            { id: "it-uq-a1-11-2", level: "A1", prompt: "What day comes after 'lunedì'?", options: ["Mercoledì", "Domenica", "Giovedì", "Martedì"], answer: "Martedì" },
            { id: "it-uq-a1-11-3", level: "A1", prompt: "How do you say 'It's three o'clock'?", options: ["È le tre.", "Sono le tre.", "Sono tre.", "È tre ore."], answer: "Sono le tre." },
            { id: "it-uq-a1-11-4", level: "A1", prompt: "How do you say 'It's half past eight'?", options: ["Sono le otto e un quarto.", "Sono le otto meno mezza.", "Sono le otto e mezza.", "Sono le otto e trenta."], answer: "Sono le otto e mezza." },
            { id: "it-uq-a1-11-5", level: "A1", prompt: "How do you say 'It's one o'clock'?", options: ["Sono le una.", "È l'una.", "Sono l'una.", "È le una."], answer: "È l'una." },
            { id: "it-uq-a1-11-6", level: "A1", prompt: "What is 'seventeen' in Italian?", options: ["Sedici", "Diciannove", "Diciotto", "Diciassette"], answer: "Diciassette" },
        ]
    },
    {
        id: "it-a1-u12",
        level: "A1",
        order: 12,
        title: "Numbers 20-100, Months & Seasons",
        description: "Learn the tens from 20 to 100, master compound number spelling rules, and learn months and seasons.",
        grammarIds: ["it-g-a1-18"],
        vocabIds: [
            "it-v-a1-153", "it-v-a1-154", "it-v-a1-155", "it-v-a1-156",
            "it-v-a1-157", "it-v-a1-158", "it-v-a1-159", "it-v-a1-160", "it-v-a1-161",
            "it-v-a1-40", "it-v-a1-41", "it-v-a1-42", "it-v-a1-43",
            "it-v-a1-44", "it-v-a1-45", "it-v-a1-46",
        ],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-12-1", level: "A1", prompt: "What is 'thirty' in Italian?", options: ["Venti", "Trenta", "Quaranta", "Cento"], answer: "Trenta" },
            { id: "it-uq-a1-12-2", level: "A1", prompt: "How do you say 'fifty euros'?", options: ["Cinquecento euro", "Cinque euro", "Cinquanta euro", "Cinquantuno euro"], answer: "Cinquanta euro" },
            { id: "it-uq-a1-12-3", level: "A1", prompt: "How do you correctly write 'twenty-one'?", options: ["Ventiuno", "Ventuno", "Ventiun", "Ventune"], answer: "Ventuno" },
            { id: "it-uq-a1-12-4", level: "A1", prompt: "How do you say 'I am forty-two years old'?", options: ["Ho quarantadue anni.", "Ho quaranta due anni.", "Ho quaranta-due anni.", "Ho quarantadue anno."], answer: "Ho quarantadue anni." },
            { id: "it-uq-a1-12-5", level: "A1", prompt: "Which month is 'agosto'?", options: ["June", "July", "August", "September"], answer: "August" },
            { id: "it-uq-a1-12-6", level: "A1", prompt: "Which is correct for 'twenty-three'?", options: ["Ventitre", "Ventitré", "Venti tre", "Ventitrei"], answer: "Ventitré" },
        ]
    },
    {
        id: "it-a1-u13",
        level: "A1",
        order: 13,
        title: "Modal Verbs — Volere & Potere",
        description: "Learn the modal verbs volere (to want) and potere (to be able to/can). Use them with infinitives to express desires and abilities.",
        grammarIds: ["it-g-a1-19"],
        vocabIds: [
            "it-v-a1-61", "it-v-a1-62", "it-v-a1-64", "it-v-a1-66", "it-v-a1-67",
            "it-v-a1-147", "it-v-a1-148", "it-v-a1-149", "it-v-a1-150",
        ],
        verbIds: ["it-vb-a1-6", "it-vb-a1-7", "it-vb-a1-18", "it-vb-a1-19", "it-vb-a1-20", "it-vb-a1-21"],
        testQuestions: [
            { id: "it-uq-a1-13-1", level: "A1", prompt: "Complete: 'Io ___ un caffè.' (volere)", options: ["vuole", "vuoi", "voglio", "vogliono"], answer: "voglio" },
            { id: "it-uq-a1-13-2", level: "A1", prompt: "Complete: 'Noi ___ venire.' (potere)", options: ["posso", "puoi", "possiamo", "possono"], answer: "possiamo" },
            { id: "it-uq-a1-13-3", level: "A1", prompt: "Complete: 'Puoi ___ italiano?' (parlare)", options: ["parlate", "parlano", "parli", "parlare"], answer: "parlare" },
            { id: "it-uq-a1-13-4", level: "A1", prompt: "Complete: 'Voglio ___ stasera.' (cucinare)", options: ["cucino", "cucinare", "cucina", "cucinando"], answer: "cucinare" },
            { id: "it-uq-a1-13-5", level: "A1", prompt: "Complete: 'Loro ___ la pizza.' (volere)", options: ["vuoi", "vuole", "vogliamo", "vogliono"], answer: "vogliono" },
            { id: "it-uq-a1-13-6", level: "A1", prompt: "What does 'a volte' mean?", options: ["Always", "Never", "Sometimes", "Often"], answer: "Sometimes" }
        ]
    },
    {
        id: "it-a1-u14",
        level: "A1",
        order: 14,
        title: "My Family & Home",
        description: "Talk about family members using possessive adjectives. Describe your home and family.",
        grammarIds: ["it-g-a1-23"],
        vocabIds: ["it-v-a1-47", "it-v-a1-48", "it-v-a1-49", "it-v-a1-50", "it-v-a1-51", "it-v-a1-52", "it-v-a1-53", "it-v-a1-54", "it-v-a1-55", "it-v-a1-56", "it-v-a1-57", "it-v-a1-58", "it-v-a1-59", "it-v-a1-60"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-14-1", level: "A1", prompt: "What does 'il nonno' mean?", options: ["Uncle", "Father", "Grandfather", "Cousin"], answer: "Grandfather" },
            { id: "it-uq-a1-14-2", level: "A1", prompt: "What does 'la moglie' mean?", options: ["Daughter", "Mother", "Sister", "Wife"], answer: "Wife" },
            { id: "it-uq-a1-14-3", level: "A1", prompt: "Which is correct for 'my father' in Italian?", options: ["il mio padre", "mio padre", "la mio padre", "il mia padre"], answer: "mio padre" },
            { id: "it-uq-a1-14-4", level: "A1", prompt: "What does 'la zia' mean?", options: ["Grandmother", "Cousin", "Aunt", "Sister"], answer: "Aunt" },
            { id: "it-uq-a1-14-5", level: "A1", prompt: "Which is correct for 'my parents'?", options: ["miei genitori", "i miei genitori", "il mio genitori", "la mia genitori"], answer: "i miei genitori" },
            { id: "it-uq-a1-14-6", level: "A1", prompt: "Complete: '___ sorella è medica.' (his/her — fem. sg.)", options: ["il suo", "la sua", "sua", "suo"], answer: "sua" }
        ]
    },
    {
        id: "it-a1-u15",
        level: "A1",
        order: 15,
        title: "Food & Restaurants",
        description: "Order food and drinks and talk about what you eat using key food vocabulary.",
        grammarIds: ["it-g-a1-20"],
        vocabIds: ["it-v-a1-61", "it-v-a1-62", "it-v-a1-63", "it-v-a1-64", "it-v-a1-65", "it-v-a1-66", "it-v-a1-67", "it-v-a1-68", "it-v-a1-69", "it-v-a1-72", "it-v-a1-73", "it-v-a1-74", "it-v-a1-75", "it-v-a1-76", "it-v-a1-77"],
        verbIds: ["it-vb-a1-6", "it-vb-a1-7", "it-vb-a1-8", "it-vb-a1-9"],
        testQuestions: [
            { id: "it-uq-a1-15-1", level: "A1", prompt: "How do you say 'a coffee, please' in Italian?", options: ["Un tè, per favore.", "Un caffè, grazie.", "Un caffè, per favore.", "Il caffè, prego."], answer: "Un caffè, per favore." },
            { id: "it-uq-a1-15-2", level: "A1", prompt: "What does 'il pesce' mean?", options: ["Meat", "Chicken", "Fish", "Bread"], answer: "Fish" },
            { id: "it-uq-a1-15-3", level: "A1", prompt: "Complete: 'Voglio ___ pizza.' (article)", options: ["un", "uno", "una", "un'"], answer: "una" },
            { id: "it-uq-a1-15-4", level: "A1", prompt: "What does 'il formaggio' mean?", options: ["Butter", "Cream", "Cheese", "Yogurt"], answer: "Cheese" },
            { id: "it-uq-a1-15-5", level: "A1", prompt: "What does 'la birra' mean?", options: ["Wine", "Juice", "Water", "Beer"], answer: "Beer" },
            { id: "it-uq-a1-15-6", level: "A1", prompt: "Complete: 'Non mangio ___.' (carne)", options: ["la carne", "il carne", "lo carne", "un carne"], answer: "la carne" }
        ]
    },
    {
        id: "it-a1-u16",
        level: "A1",
        order: 16,
        title: "Professions & Daily Life",
        description: "Talk about jobs, daily routines, and the human body.",
        grammarIds: ["it-g-a1-21"],
        vocabIds: ["it-v-a1-131", "it-v-a1-132", "it-v-a1-133", "it-v-a1-134", "it-v-a1-135", "it-v-a1-136", "it-v-a1-137", "it-v-a1-138", "it-v-a1-139", "it-v-a1-140", "it-v-a1-82", "it-v-a1-83", "it-v-a1-84"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-2", "it-vb-a1-5"],
        testQuestions: [
            { id: "it-uq-a1-16-1", level: "A1", prompt: "What does 'il medico' mean?", options: ["Lawyer", "Teacher", "Doctor", "Engineer"], answer: "Doctor" },
            { id: "it-uq-a1-16-2", level: "A1", prompt: "Complete: 'Mia madre è ___.' (teacher)", options: ["medico", "insegnante", "avvocato", "cuoco"], answer: "insegnante" },
            { id: "it-uq-a1-16-3", level: "A1", prompt: "What does 'la testa' mean?", options: ["Hand", "Heart", "Foot", "Head"], answer: "Head" },
            { id: "it-uq-a1-16-4", level: "A1", prompt: "How do you say 'I have a headache'?", options: ["Ho mal di piedi.", "Ho mal di testa.", "Ho mal di mano.", "Ho mal di braccio."], answer: "Ho mal di testa." },
            { id: "it-uq-a1-16-5", level: "A1", prompt: "What does 'il cameriere' mean?", options: ["Chef", "Waiter", "Policeman", "Actor"], answer: "Waiter" },
            { id: "it-uq-a1-16-6", level: "A1", prompt: "Complete: 'Loro ___ sport ogni sera.' (fare)", options: ["faccio", "fa", "fanno", "fate"], answer: "fanno" }
        ]
    },
    {
        id: "it-a1-u17",
        level: "A1",
        order: 17,
        title: "Places & Directions",
        description: "Ask for and give directions using places vocabulary and the verb andare.",
        grammarIds: ["it-g-a1-22"],
        vocabIds: ["it-v-a1-108", "it-v-a1-109", "it-v-a1-110", "it-v-a1-114", "it-v-a1-115", "it-v-a1-116", "it-v-a1-117", "it-v-a1-119", "it-v-a1-121", "it-v-a1-122", "it-v-a1-123", "it-v-a1-124", "it-v-a1-125", "it-v-a1-126", "it-v-a1-127"],
        verbIds: ["it-vb-a1-4", "it-vb-a1-22", "it-vb-a1-23"],
        testQuestions: [
            { id: "it-uq-a1-17-1", level: "A1", prompt: "How do you say 'Turn left'?", options: ["Vai dritto.", "Gira a destra.", "Gira a sinistra.", "Torna indietro."], answer: "Gira a sinistra." },
            { id: "it-uq-a1-17-2", level: "A1", prompt: "Complete: 'Vado ___ museo.' (article + 'il')", options: ["al", "del", "nel", "col"], answer: "al" },
            { id: "it-uq-a1-17-3", level: "A1", prompt: "What does 'lontano' mean?", options: ["Near", "Inside", "Above", "Far"], answer: "Far" },
            { id: "it-uq-a1-17-4", level: "A1", prompt: "What does 'la spiaggia' mean?", options: ["Park", "Museum", "Library", "Beach"], answer: "Beach" },
            { id: "it-uq-a1-17-5", level: "A1", prompt: "Complete: 'Loro ___ al parco.' (andare)", options: ["vado", "va", "andate", "vanno"], answer: "vanno" },
            { id: "it-uq-a1-17-6", level: "A1", prompt: "How do you say 'Go straight ahead'?", options: ["Vai dritto.", "Gira a destra.", "Gira a sinistra.", "Fermati qui."], answer: "Vai dritto." }
        ]
    },
    {
        id: "it-a1-u18",
        level: "A1",
        order: 18,
        title: "Likes & Dislikes",
        description: "Learn to say what you like, dislike, and prefer using piacere — Italian's back-to-front 'like' verb.",
        grammarIds: ["it-g-a1-16"],
        vocabIds: [
            "it-v-a1-64", "it-v-a1-65", "it-v-a1-66", "it-v-a1-67",
            "it-v-a1-70", "it-v-a1-71", "it-v-a1-110", "it-v-a1-117", "it-v-a1-122",
            "it-v-a1-147", "it-v-a1-148", "it-v-a1-149", "it-v-a1-150",
        ],
        verbIds: ["it-vb-a1-24", "it-vb-a1-25", "it-vb-a1-26"],
        testQuestions: [
            { id: "it-uq-a1-18-1", level: "A1", prompt: "How do you say 'I like pizza'?", options: ["Io piace la pizza.", "Mi piace la pizza.", "Mi piacciono la pizza.", "Piaccio la pizza."], answer: "Mi piace la pizza." },
            { id: "it-uq-a1-18-2", level: "A1", prompt: "How do you say 'I like cats' (plural)?", options: ["Mi piace i gatti.", "Mi piacciono i gatti.", "Mi piaciono i gatti.", "Ti piacciono i gatti."], answer: "Mi piacciono i gatti." },
            { id: "it-uq-a1-18-3", level: "A1", prompt: "How do you say 'I don't like fish'?", options: ["Non mi piace il pesce.", "Mi non piace il pesce.", "Non mi piacciono il pesce.", "Mi piace non il pesce."], answer: "Non mi piace il pesce." },
            { id: "it-uq-a1-18-4", level: "A1", prompt: "How do you say 'I prefer red wine'?", options: ["Preferisco il vino rosso.", "Preferisce il vino rosso.", "Preferisco vino rosso.", "Mi piace preferire il vino rosso."], answer: "Preferisco il vino rosso." },
            { id: "it-uq-a1-18-5", level: "A1", prompt: "How do you say 'Do you like Italian music?' (informal)", options: ["Le piace la musica italiana?", "Ti piace la musica italiana?", "Ti piacciono la musica italiana?", "Gli piace la musica italiana?"], answer: "Ti piace la musica italiana?" },
            { id: "it-uq-a1-18-6", level: "A1", prompt: "Complete: 'Mi piace ___.' (to study Italian)", options: ["studiare l'italiano", "lo studio italiano", "studio l'italiano", "studente italiano"], answer: "studiare l'italiano" },
        ]
    },
    {
        id: "it-a1-u19",
        level: "A1",
        order: 19,
        title: "Reflexive Verbs & Daily Routine",
        description: "Learn to describe your daily routine using reflexive verbs — waking up, getting dressed, washing. These verbs use special pronouns placed before the conjugated verb.",
        grammarIds: ["it-g-a1-25"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-19-1", level: "A1", prompt: "How do you say 'My name is Sofia'?", options: ["Sono Sofia.", "Ho Sofia.", "Mi chiamo Sofia.", "Chiamo Sofia."], answer: "Mi chiamo Sofia." },
            { id: "it-uq-a1-19-2", level: "A1", prompt: "Complete: 'Lei ___ alza alle sette.'", options: ["mi", "ti", "si", "ci"], answer: "si" },
            { id: "it-uq-a1-19-3", level: "A1", prompt: "Where does the reflexive pronoun go with a conjugated verb?", options: ["After the verb", "Before the conjugated verb", "At the end of the sentence", "After the subject"], answer: "Before the conjugated verb" },
            { id: "it-uq-a1-19-4", level: "A1", prompt: "Complete: 'Noi ___ laviamo le mani.'", options: ["mi", "ti", "si", "ci"], answer: "ci" },
            { id: "it-uq-a1-19-5", level: "A1", prompt: "What does 'vestirsi' mean?", options: ["to eat", "to sleep", "to get dressed", "to sit down"], answer: "to get dressed" },
            { id: "it-uq-a1-19-6", level: "A1", prompt: "How do you say 'What time do you wake up?'", options: ["A che ora ti alzi?", "A che ora mi sveglio?", "A che ora ti svegli?", "A che ora ci alziamo?"], answer: "A che ora ti svegli?" },
        ]
    },
    {
        id: "it-a1-u20",
        level: "A1",
        order: 20,
        title: "Demonstratives",
        description: "Point things out in Italian — questo (this) and quello (that). Quello mirrors the definite article pattern, making it elegant once you know the articles.",
        grammarIds: ["it-g-a1-24"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-20-1", level: "A1", prompt: "How do you say 'this book' (il libro)?", options: ["quello libro", "quel libro", "questo libro", "questa libro"], answer: "questo libro" },
            { id: "it-uq-a1-20-2", level: "A1", prompt: "How do you say 'that student' (lo studente)?", options: ["quel studente", "quello studente", "questo studente", "quell'studente"], answer: "quello studente" },
            { id: "it-uq-a1-20-3", level: "A1", prompt: "How do you say 'those friends' (gli amici)?", options: ["quei amici", "quegli amici", "quello amici", "quelle amici"], answer: "quegli amici" },
            { id: "it-uq-a1-20-4", level: "A1", prompt: "How do you say 'this friend' (fem., starts with vowel — l'amica)?", options: ["questa amica", "quest'amica", "questo amica", "quell'amica"], answer: "quest'amica" },
            { id: "it-uq-a1-20-5", level: "A1", prompt: "How do you say 'What is this?'", options: ["Cos'è questo?", "Cos'è quello?", "Come è questo?", "Che è questo?"], answer: "Cos'è questo?" },
            { id: "it-uq-a1-20-6", level: "A1", prompt: "Complete: '___ casa è grande.' (that house — la casa)", options: ["Quel", "Quello", "Quella", "Queste"], answer: "Quella" },
        ]
    },
    {
        id: "it-a1-u21",
        level: "A1",
        order: 21,
        title: "Adverbs, Frequency & Connectors",
        description: "Build more natural sentences: say where things are, when they happen, how often, and link ideas with connectors like ma, perché, and prima.",
        grammarIds: ["it-g-a1-26", "it-g-a1-27", "it-g-a1-28", "it-g-a1-29"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a1-21-1", level: "A1", prompt: "What does 'ancora' mean?", options: ["already", "soon", "still / yet", "never"], answer: "still / yet" },
            { id: "it-uq-a1-21-2", level: "A1", prompt: "Where do frequency adverbs usually go?", options: ["Before the subject", "After the conjugated verb", "At the end only", "Before the infinitive"], answer: "After the conjugated verb" },
            { id: "it-uq-a1-21-3", level: "A1", prompt: "What does 'lì' mean?", options: ["here", "nearby", "there", "inside"], answer: "there" },
            { id: "it-uq-a1-21-4", level: "A1", prompt: "Which connector means 'because'?", options: ["ma", "però", "anche se", "perché"], answer: "perché" },
            { id: "it-uq-a1-21-5", level: "A1", prompt: "What does 'a volte' mean?", options: ["always", "never", "sometimes", "often"], answer: "sometimes" },
            { id: "it-uq-a1-21-6", level: "A1", prompt: "Put in order: Prima → ? → Infine", options: ["poi", "ma", "perché", "anche"], answer: "poi" },
        ]
    },
    {
        id: "it-a1-u22",
        level: "A1",
        order: 22,
        title: "Bridge: The Near Future",
        description: "Express future plans and imminent events using stare per + infinitive and andare a + infinitive. Your first step into A2 territory.",
        grammarIds: ["it-g-a1-13"],
        vocabIds: ["it-v-a1-141", "it-v-a1-142", "it-v-a1-143", "it-v-a1-144", "it-v-a1-145", "it-v-a1-146"],
        verbIds: ["it-vb-a1-4", "it-vb-a1-1"],
        testQuestions: [
            { id: "it-uq-a1-22-1", level: "A1", prompt: "How do you say 'I am about to go out'?", options: ["Vado a uscire.", "Sto per uscire.", "Uscirò presto.", "Sto uscendo."], answer: "Sto per uscire." },
            { id: "it-uq-a1-22-2", level: "A1", prompt: "Complete: 'Vado ___ mangiare.'", options: ["per", "di", "a", "in"], answer: "a" },
            { id: "it-uq-a1-22-3", level: "A1", prompt: "How do you say 'It is about to rain'?", options: ["Piove sempre.", "Sta per piovere.", "Va a piovere.", "Pioverà."], answer: "Sta per piovere." },
            { id: "it-uq-a1-22-4", level: "A1", prompt: "What does 'domani' mean?", options: ["Today", "Yesterday", "Now", "Tomorrow"], answer: "Tomorrow" },
            { id: "it-uq-a1-22-5", level: "A1", prompt: "Which structure means something is ABOUT TO happen right now?", options: ["andare a + inf.", "stare per + inf.", "volere + inf.", "potere + inf."], answer: "stare per + inf." },
            { id: "it-uq-a1-22-6", level: "A1", prompt: "Translate: 'We are going to watch a film tonight.'", options: ["Guardiamo un film stasera.", "Abbiamo guardato un film stasera.", "Andiamo a vedere un film stasera.", "Stiamo per vedere un film."], answer: "Andiamo a vedere un film stasera." },
        ]
    },
]