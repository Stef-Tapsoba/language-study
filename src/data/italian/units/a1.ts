import { LessonUnit } from "../../../types"

export const a1Units: LessonUnit[] = [
    {
        id: "it-a1-u1",
        level: "A1",
        order: 1,
        title: "Greetings & Basic Phrases",
        description: "Learn essential greetings and how to say hello, goodbye, please and thank you.",
        grammarIds: ["it-g-a1-1", "it-g-a1-2", "it-g-a1-17"],
        vocabIds: ["it-v-a1-1", "it-v-a1-2", "it-v-a1-3", "it-v-a1-4", "it-v-a1-5", "it-v-a1-6", "it-v-a1-7", "it-v-a1-8", "it-v-a1-9", "it-v-a1-10", "it-v-a1-11", "it-v-a1-12"],
        verbIds: ["it-vb-a1-1"],
        testQuestions: [
            { id: "it-uq-a1-1-1", level: "A1", prompt: "How do you say 'good morning' in Italian?", options: ["Buonasera", "Buonanotte", "Buongiorno", "Arrivederci"], answer: "Buongiorno" },
            { id: "it-uq-a1-1-2", level: "A1", prompt: "Complete: 'Io ___ italiano.' (essere)", options: ["sei", "è", "sono", "siamo"], answer: "sono" },
            { id: "it-uq-a1-1-3", level: "A1", prompt: "What does 'prego' mean?", options: ["Please (request)", "Thank you", "You're welcome", "Excuse me"], answer: "You're welcome" },
            { id: "it-uq-a1-1-4", level: "A1", prompt: "How do you say 'My name is ...' in Italian?", options: ["Sono ...", "Ho ...", "Mi chiamo ...", "Chiamo ..."], answer: "Mi chiamo ..." },
            { id: "it-uq-a1-1-5", level: "A1", prompt: "Which greeting is used informally?", options: ["Buongiorno", "Arrivederci", "Ciao", "Scusi"], answer: "Ciao" },
            { id: "it-uq-a1-1-6", level: "A1", prompt: "Complete: 'Loro ___ stanchi.' (essere)", options: ["siamo", "siete", "sono", "sei"], answer: "sono" }
        ]
    },
    {
        id: "it-a1-u2",
        level: "A1",
        order: 2,
        title: "Introducing Yourself",
        description: "Say your name, age, and nationality using essere and avere.",
        grammarIds: ["it-g-a1-1", "it-g-a1-2", "it-g-a1-3"],
        vocabIds: ["it-v-a1-47", "it-v-a1-48", "it-v-a1-49", "it-v-a1-50", "it-v-a1-51", "it-v-a1-52"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-2-1", level: "A1", prompt: "Complete: 'Io ___ un fratello.' (avere)", options: ["ha", "hai", "ho", "abbiamo"], answer: "ho" },
            { id: "it-uq-a1-2-2", level: "A1", prompt: "How do you ask 'How old are you?' in Italian?", options: ["Come ti chiami?", "Quanti anni hai?", "Da dove vieni?", "Cosa fai?"], answer: "Quanti anni hai?" },
            { id: "it-uq-a1-2-3", level: "A1", prompt: "Complete: 'Lei ___ venti anni.' (avere)", options: ["ho", "hai", "ha", "hanno"], answer: "ha" },
            { id: "it-uq-a1-2-4", level: "A1", prompt: "What does 'il fratello' mean?", options: ["Father", "Son", "Cousin", "Brother"], answer: "Brother" },
            { id: "it-uq-a1-2-5", level: "A1", prompt: "What does 'la sorella' mean?", options: ["Mother", "Aunt", "Sister", "Daughter"], answer: "Sister" },
            { id: "it-uq-a1-2-6", level: "A1", prompt: "Complete: 'Noi ___ italiani.' (essere)", options: ["siamo", "siete", "sono", "sei"], answer: "siamo" }
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
        verbIds: ["it-vb-a1-3", "it-vb-a1-11", "it-vb-a1-13"],
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
        title: "Irregular Verbs: Andare & Fare + Prepositions",
        description: "Learn andare (to go) and fare (to do/make), and the core prepositions and contractions needed to say where you're going.",
        grammarIds: ["it-g-a1-8", "it-g-a1-9", "it-g-a1-14"],
        vocabIds: [
            "it-v-a1-108", "it-v-a1-109", "it-v-a1-110", "it-v-a1-111",
            "it-v-a1-112", "it-v-a1-113", "it-v-a1-114", "it-v-a1-117", "it-v-a1-118"
        ],
        verbIds: ["it-vb-a1-4", "it-vb-a1-5"],
        testQuestions: [
            { id: "it-uq-a1-5-1", level: "A1", prompt: "Complete: 'Io ___ a scuola.' (andare)", options: ["vai", "va", "vado", "andiamo"], answer: "vado" },
            { id: "it-uq-a1-5-2", level: "A1", prompt: "Complete: 'Loro ___ al cinema.' (andare)", options: ["vado", "va", "andate", "vanno"], answer: "vanno" },
            { id: "it-uq-a1-5-3", level: "A1", prompt: "Complete: 'Io ___ colazione alle sette.' (fare)", options: ["fai", "fa", "faccio", "fanno"], answer: "faccio" },
            { id: "it-uq-a1-5-4", level: "A1", prompt: "What is 'a + il'?", options: ["del", "al", "alla", "nel"], answer: "al" },
            { id: "it-uq-a1-5-5", level: "A1", prompt: "Complete: 'Vado ___ Italia.' (in a country)", options: ["a", "al", "in", "da"], answer: "in" },
            { id: "it-uq-a1-5-6", level: "A1", prompt: "Complete: 'Il libro è ___ tavolo.' (su + il)", options: ["sulla", "sul", "sullo", "sui"], answer: "sul" },
        ]
    },
    {
        id: "it-a1-u6",
        level: "A1",
        order: 6,
        title: "Describing Things: Adjectives",
        description: "Learn how adjectives agree with nouns in gender and number, and describe objects using colors and clothing.",
        grammarIds: ["it-g-a1-12"],
        vocabIds: ["it-v-a1-92", "it-v-a1-93", "it-v-a1-94", "it-v-a1-95", "it-v-a1-96", "it-v-a1-97", "it-v-a1-98", "it-v-a1-99", "it-v-a1-100", "it-v-a1-101", "it-v-a1-102", "it-v-a1-103"],
        verbIds: ["it-vb-a1-1"],
        testQuestions: [
            { id: "it-uq-a1-6-1", level: "A1", prompt: "Complete: 'La macchina è ___.' (red)", options: ["rosso", "rossa", "rossi", "rosse"], answer: "rossa" },
            { id: "it-uq-a1-6-2", level: "A1", prompt: "Complete: 'I libri sono ___.' (interesting)", options: ["interessante", "interessanti", "interessanto", "interessanta"], answer: "interessanti" },
            { id: "it-uq-a1-6-3", level: "A1", prompt: "What does 'bianco' mean?", options: ["Black", "Blue", "White", "Yellow"], answer: "White" },
            { id: "it-uq-a1-6-4", level: "A1", prompt: "Complete: 'Le case sono ___.' (big — grande)", options: ["grandi", "grande", "grando", "grandes"], answer: "grandi" },
            { id: "it-uq-a1-6-5", level: "A1", prompt: "What does 'la gonna' mean?", options: ["Jacket", "Shirt", "Skirt", "Hat"], answer: "Skirt" },
            { id: "it-uq-a1-6-6", level: "A1", prompt: "Complete: 'Il ragazzo è ___.' (tall — alto)", options: ["alta", "alte", "alti", "alto"], answer: "alto" }
        ]
    },
    {
        id: "it-a1-u7",
        level: "A1",
        order: 7,
        title: "Regular -ere and -ire Verbs",
        description: "Learn to conjugate regular -ere verbs (scrivere) and -ire verbs (dormire / finire).",
        grammarIds: ["it-g-a1-7"],
        vocabIds: ["it-v-a1-82", "it-v-a1-83", "it-v-a1-84", "it-v-a1-85", "it-v-a1-86", "it-v-a1-87", "it-v-a1-88"],
        verbIds: ["it-vb-a1-9", "it-vb-a1-12"],
        testQuestions: [
            { id: "it-uq-a1-7-1", level: "A1", prompt: "Complete: 'Io ___ una lettera.' (scrivere)", options: ["scrivi", "scrivo", "scrive", "scriviamo"], answer: "scrivo" },
            { id: "it-uq-a1-7-2", level: "A1", prompt: "Complete: 'Tu ___ il libro.' (leggere)", options: ["leggo", "leggi", "legge", "leggono"], answer: "leggi" },
            { id: "it-uq-a1-7-3", level: "A1", prompt: "Complete: 'Io ___ l'italiano.' (capire — type 2)", options: ["capisco", "capisce", "capisci", "capiamo"], answer: "capisco" },
            { id: "it-uq-a1-7-4", level: "A1", prompt: "Complete: 'Loro ___ il lavoro.' (finire — type 2)", options: ["finiscono", "finisco", "finisce", "finiamo"], answer: "finiscono" },
            { id: "it-uq-a1-7-5", level: "A1", prompt: "What does 'la mano' mean?", options: ["Foot", "Arm", "Hand", "Ear"], answer: "Hand" },
            { id: "it-uq-a1-7-6", level: "A1", prompt: "Complete: 'Noi ___ fino alle dieci.' (dormire — type 1)", options: ["dormo", "dormiamo", "dormite", "dormono"], answer: "dormiamo" }
        ]
    },
    {
        id: "it-a1-u8",
        level: "A1",
        order: 8,
        title: "Numbers, Time & Dates",
        description: "Count from 1 to 100, tell the time, and talk about days, months, and seasons.",
        grammarIds: ["it-g-a1-15"],
        vocabIds: [
            // 1–20 (existing)
            "it-v-a1-13", "it-v-a1-14", "it-v-a1-15", "it-v-a1-16", "it-v-a1-17",
            "it-v-a1-18", "it-v-a1-19", "it-v-a1-20", "it-v-a1-21", "it-v-a1-22",
            "it-v-a1-32",
            // Days (existing)
            "it-v-a1-33", "it-v-a1-34", "it-v-a1-35", "it-v-a1-36",
            "it-v-a1-37", "it-v-a1-38", "it-v-a1-39",
            // Months + seasons (existing)
            "it-v-a1-40", "it-v-a1-41", "it-v-a1-42", "it-v-a1-43",
            "it-v-a1-44", "it-v-a1-45", "it-v-a1-46",
            // Numbers 21–100 + time expressions (new)
            "it-v-a1-153", "it-v-a1-154", "it-v-a1-155", "it-v-a1-156",
            "it-v-a1-157", "it-v-a1-158", "it-v-a1-159", "it-v-a1-160",
            "it-v-a1-161", "it-v-a1-162", "it-v-a1-163",
        ],
        verbIds: ["it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-8-1", level: "A1", prompt: "What is 'fifteen' in Italian?", options: ["Dodici", "Sedici", "Quindici", "Tredici"], answer: "Quindici" },
            { id: "it-uq-a1-8-2", level: "A1", prompt: "What day comes after 'lunedì'?", options: ["Mercoledì", "Domenica", "Giovedì", "Martedì"], answer: "Martedì" },
            { id: "it-uq-a1-8-3", level: "A1", prompt: "How do you say 'It's three o'clock'?", options: ["È le tre.", "Sono le tre.", "Sono tre.", "È tre ore."], answer: "Sono le tre." },
            { id: "it-uq-a1-8-4", level: "A1", prompt: "How do you say 'It's half past eight'?", options: ["Sono le otto e un quarto.", "Sono le otto meno mezza.", "Sono le otto e mezza.", "Sono le otto e trenta."], answer: "Sono le otto e mezza." },
            { id: "it-uq-a1-8-5", level: "A1", prompt: "Which month is 'agosto'?", options: ["June", "July", "August", "September"], answer: "August" },
            { id: "it-uq-a1-8-6", level: "A1", prompt: "How do you say 'I am twenty-two years old'?", options: ["Ho venti-due anni.", "Ho ventadue anni.", "Ho ventidue anni.", "Sono ventidue anni."], answer: "Ho ventidue anni." },
        ]
    },
    {
        id: "it-a1-u9",
        level: "A1",
        order: 9,
        title: "Saying What You Want & Can",
        description: "Use volere and potere to express desires and abilities. Practice with food and drink vocabulary.",
        grammarIds: [],
        vocabIds: ["it-v-a1-61", "it-v-a1-62", "it-v-a1-63", "it-v-a1-64", "it-v-a1-65", "it-v-a1-66", "it-v-a1-67", "it-v-a1-70", "it-v-a1-71"],
        verbIds: ["it-vb-a1-6", "it-vb-a1-7"],
        testQuestions: [
            { id: "it-uq-a1-9-1", level: "A1", prompt: "Complete: 'Io ___ un caffè.' (volere)", options: ["vuole", "vuoi", "voglio", "vogliono"], answer: "voglio" },
            { id: "it-uq-a1-9-2", level: "A1", prompt: "Complete: 'Noi ___ venire.' (potere)", options: ["posso", "puoi", "possiamo", "possono"], answer: "possiamo" },
            { id: "it-uq-a1-9-3", level: "A1", prompt: "Complete: 'Puoi ___ italiano?' (parlare)", options: ["parlate", "parlano", "parli", "parlare"], answer: "parlare" },
            { id: "it-uq-a1-9-4", level: "A1", prompt: "What does 'la frutta' mean?", options: ["Vegetables", "Fruit", "Bread", "Meat"], answer: "Fruit" },
            { id: "it-uq-a1-9-5", level: "A1", prompt: "Complete: 'Loro ___ la pizza.' (volere)", options: ["vuoi", "vuole", "vogliamo", "vogliono"], answer: "vogliono" },
            { id: "it-uq-a1-9-6", level: "A1", prompt: "What does 'il vino' mean?", options: ["Beer", "Juice", "Water", "Wine"], answer: "Wine" }
        ]
    },
    {
        id: "it-a1-u10",
        level: "A1",
        order: 10,
        title: "Asking Questions",
        description: "Form questions using intonation and question words: chi, cosa, dove, quando, come, perché.",
        grammarIds: ["it-g-a1-10", "it-g-a1-11"],
        vocabIds: ["it-v-a1-123", "it-v-a1-124", "it-v-a1-125", "it-v-a1-126", "it-v-a1-127", "it-v-a1-128", "it-v-a1-129", "it-v-a1-130"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-3"],
        testQuestions: [
            { id: "it-uq-a1-10-1", level: "A1", prompt: "How do you say 'Where do you live?' in Italian?", options: ["Quando abiti?", "Cosa abiti?", "Dove abiti?", "Come abiti?"], answer: "Dove abiti?" },
            { id: "it-uq-a1-10-2", level: "A1", prompt: "How do you make a sentence negative in Italian?", options: ["Put 'no' before the subject", "Put 'non' before the verb", "Put 'non' after the verb", "Change the verb ending"], answer: "Put 'non' before the verb" },
            { id: "it-uq-a1-10-3", level: "A1", prompt: "Translate: 'I don't speak German.'", options: ["Parlo non tedesco.", "Non parlo tedesco.", "Non parlare tedesco.", "Non parla tedesco."], answer: "Non parlo tedesco." },
            { id: "it-uq-a1-10-4", level: "A1", prompt: "Which question word means 'why'?", options: ["Dove", "Quando", "Come", "Perché"], answer: "Perché" },
            { id: "it-uq-a1-10-5", level: "A1", prompt: "What does 'vicino' mean?", options: ["Far", "Above", "Near", "Inside"], answer: "Near" },
            { id: "it-uq-a1-10-6", level: "A1", prompt: "Which question word means 'who'?", options: ["Cosa", "Chi", "Quale", "Quanto"], answer: "Chi" }
        ]
    },
    {
        id: "it-a1-u11",
        level: "A1",
        order: 11,
        title: "My Family & Home",
        description: "Talk about family members and describe your home using family vocabulary.",
        grammarIds: [],
        vocabIds: ["it-v-a1-47", "it-v-a1-48", "it-v-a1-49", "it-v-a1-50", "it-v-a1-51", "it-v-a1-52", "it-v-a1-53", "it-v-a1-54", "it-v-a1-55", "it-v-a1-56", "it-v-a1-57", "it-v-a1-58", "it-v-a1-59", "it-v-a1-60"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-11-1", level: "A1", prompt: "What does 'il nonno' mean?", options: ["Uncle", "Father", "Grandfather", "Cousin"], answer: "Grandfather" },
            { id: "it-uq-a1-11-2", level: "A1", prompt: "What does 'la moglie' mean?", options: ["Daughter", "Mother", "Sister", "Wife"], answer: "Wife" },
            { id: "it-uq-a1-11-3", level: "A1", prompt: "Complete: 'Mia madre ___ insegnante.' (essere)", options: ["sono", "siamo", "sei", "è"], answer: "è" },
            { id: "it-uq-a1-11-4", level: "A1", prompt: "What does 'la zia' mean?", options: ["Grandmother", "Cousin", "Aunt", "Sister"], answer: "Aunt" },
            { id: "it-uq-a1-11-5", level: "A1", prompt: "Complete: 'Mio padre ___ due figli.' (avere)", options: ["ho", "hai", "ha", "hanno"], answer: "ha" },
            { id: "it-uq-a1-11-6", level: "A1", prompt: "What does 'il marito' mean?", options: ["Brother", "Son", "Father", "Husband"], answer: "Husband" }
        ]
    },
    {
        id: "it-a1-u12",
        level: "A1",
        order: 12,
        title: "Food & Restaurants",
        description: "Order food and drinks and talk about what you eat using key food vocabulary.",
        grammarIds: [],
        vocabIds: ["it-v-a1-61", "it-v-a1-62", "it-v-a1-63", "it-v-a1-64", "it-v-a1-65", "it-v-a1-66", "it-v-a1-67", "it-v-a1-68", "it-v-a1-69", "it-v-a1-72", "it-v-a1-73", "it-v-a1-74", "it-v-a1-75", "it-v-a1-76", "it-v-a1-77"],
        verbIds: ["it-vb-a1-6", "it-vb-a1-7", "it-vb-a1-8", "it-vb-a1-9"],
        testQuestions: [
            { id: "it-uq-a1-12-1", level: "A1", prompt: "How do you say 'a coffee, please' in Italian?", options: ["Un tè, per favore.", "Un caffè, grazie.", "Un caffè, per favore.", "Il caffè, prego."], answer: "Un caffè, per favore." },
            { id: "it-uq-a1-12-2", level: "A1", prompt: "What does 'il pesce' mean?", options: ["Meat", "Chicken", "Fish", "Bread"], answer: "Fish" },
            { id: "it-uq-a1-12-3", level: "A1", prompt: "Complete: 'Voglio ___ pizza.' (article)", options: ["un", "uno", "una", "un'"], answer: "una" },
            { id: "it-uq-a1-12-4", level: "A1", prompt: "What does 'il formaggio' mean?", options: ["Butter", "Cream", "Cheese", "Yogurt"], answer: "Cheese" },
            { id: "it-uq-a1-12-5", level: "A1", prompt: "What does 'la birra' mean?", options: ["Wine", "Juice", "Water", "Beer"], answer: "Beer" },
            { id: "it-uq-a1-12-6", level: "A1", prompt: "Complete: 'Non mangio ___.' (carne)", options: ["la carne", "il carne", "lo carne", "un carne"], answer: "la carne" }
        ]
    },
    {
        id: "it-a1-u13",
        level: "A1",
        order: 13,
        title: "Professions & Daily Life",
        description: "Talk about jobs, daily routines, and the human body.",
        grammarIds: [],
        vocabIds: ["it-v-a1-131", "it-v-a1-132", "it-v-a1-133", "it-v-a1-134", "it-v-a1-135", "it-v-a1-136", "it-v-a1-137", "it-v-a1-138", "it-v-a1-139", "it-v-a1-140", "it-v-a1-82", "it-v-a1-83", "it-v-a1-84"],
        verbIds: ["it-vb-a1-1", "it-vb-a1-2", "it-vb-a1-5"],
        testQuestions: [
            { id: "it-uq-a1-13-1", level: "A1", prompt: "What does 'il medico' mean?", options: ["Lawyer", "Teacher", "Doctor", "Engineer"], answer: "Doctor" },
            { id: "it-uq-a1-13-2", level: "A1", prompt: "Complete: 'Mia madre è ___.' (teacher)", options: ["medico", "insegnante", "avvocato", "cuoco"], answer: "insegnante" },
            { id: "it-uq-a1-13-3", level: "A1", prompt: "What does 'la testa' mean?", options: ["Hand", "Heart", "Foot", "Head"], answer: "Head" },
            { id: "it-uq-a1-13-4", level: "A1", prompt: "How do you say 'I have a headache'?", options: ["Ho mal di piedi.", "Ho mal di testa.", "Ho mal di mano.", "Ho mal di braccio."], answer: "Ho mal di testa." },
            { id: "it-uq-a1-13-5", level: "A1", prompt: "What does 'il cameriere' mean?", options: ["Chef", "Waiter", "Policeman", "Actor"], answer: "Waiter" },
            { id: "it-uq-a1-13-6", level: "A1", prompt: "Complete: 'Loro ___ sport ogni sera.' (fare)", options: ["faccio", "fa", "fanno", "fate"], answer: "fanno" }
        ]
    },
    {
        id: "it-a1-u14",
        level: "A1",
        order: 14,
        title: "Places & Directions",
        description: "Ask for and give directions using places vocabulary and the verb andare.",
        grammarIds: [],
        vocabIds: ["it-v-a1-108", "it-v-a1-109", "it-v-a1-110", "it-v-a1-114", "it-v-a1-115", "it-v-a1-116", "it-v-a1-117", "it-v-a1-119", "it-v-a1-121", "it-v-a1-122", "it-v-a1-123", "it-v-a1-124", "it-v-a1-125", "it-v-a1-126", "it-v-a1-127"],
        verbIds: ["it-vb-a1-4"],
        testQuestions: [
            { id: "it-uq-a1-14-1", level: "A1", prompt: "How do you say 'Turn left'?", options: ["Vai dritto.", "Gira a destra.", "Gira a sinistra.", "Torna indietro."], answer: "Gira a sinistra." },
            { id: "it-uq-a1-14-2", level: "A1", prompt: "Complete: 'Vado ___ museo.' (article + 'il')", options: ["al", "del", "nel", "col"], answer: "al" },
            { id: "it-uq-a1-14-3", level: "A1", prompt: "What does 'lontano' mean?", options: ["Near", "Inside", "Above", "Far"], answer: "Far" },
            { id: "it-uq-a1-14-4", level: "A1", prompt: "What does 'la spiaggia' mean?", options: ["Park", "Museum", "Library", "Beach"], answer: "Beach" },
            { id: "it-uq-a1-14-5", level: "A1", prompt: "Complete: 'Loro ___ al parco.' (andare)", options: ["vado", "va", "andate", "vanno"], answer: "vanno" },
            { id: "it-uq-a1-14-6", level: "A1", prompt: "How do you say 'Go straight ahead'?", options: ["Vai dritto.", "Gira a destra.", "Gira a sinistra.", "Fermati qui."], answer: "Vai dritto." }
        ]
    },
    {
        id: "it-a1-u16",
        level: "A1",
        order: 16,
        title: "Likes & Dislikes",
        description: "Learn to say what you like, dislike, and prefer using piacere — Italian's back-to-front 'like' verb.",
        grammarIds: ["it-g-a1-16"],
        vocabIds: [
            // Things to like/dislike — draw from existing food, places, activities
            "it-v-a1-64",  // il caffè
            "it-v-a1-65",  // il vino
            "it-v-a1-66",  // la pizza
            "it-v-a1-67",  // la pasta
            "it-v-a1-70",  // la frutta
            "it-v-a1-71",  // la verdura
            "it-v-a1-110", // la città
            "it-v-a1-117", // il parco
            "it-v-a1-122", // la spiaggia
            "it-v-a1-147", // sempre
            "it-v-a1-148", // mai
            "it-v-a1-149", // spesso
            "it-v-a1-150", // a volte
        ],
        verbIds: ["it-vb-a1-6"],
        testQuestions: [
            { id: "it-uq-a1-16-1", level: "A1", prompt: "How do you say 'I like pizza'?", options: ["Io piace la pizza.", "Mi piace la pizza.", "Mi piacciono la pizza.", "Piaccio la pizza."], answer: "Mi piace la pizza." },
            { id: "it-uq-a1-16-2", level: "A1", prompt: "How do you say 'I like cats' (plural)?", options: ["Mi piace i gatti.", "Mi piacciono i gatti.", "Mi piaciono i gatti.", "Ti piacciono i gatti."], answer: "Mi piacciono i gatti." },
            { id: "it-uq-a1-16-3", level: "A1", prompt: "How do you say 'I don't like fish'?", options: ["Non mi piace il pesce.", "Mi non piace il pesce.", "Non mi piacciono il pesce.", "Mi piace non il pesce."], answer: "Non mi piace il pesce." },
            { id: "it-uq-a1-16-4", level: "A1", prompt: "How do you say 'I prefer red wine'?", options: ["Preferisco il vino rosso.", "Preferisce il vino rosso.", "Preferisco vino rosso.", "Mi piace preferire il vino rosso."], answer: "Preferisco il vino rosso." },
            { id: "it-uq-a1-16-5", level: "A1", prompt: "How do you say 'Do you like Italian music?' (informal)", options: ["Le piace la musica italiana?", "Ti piace la musica italiana?", "Ti piacciono la musica italiana?", "Gli piace la musica italiana?"], answer: "Ti piace la musica italiana?" },
            { id: "it-uq-a1-16-6", level: "A1", prompt: "Complete: 'Mi piace ___.' (to study Italian)", options: ["studiare l'italiano", "lo studio italiano", "studio l'italiano", "studente italiano"], answer: "studiare l'italiano" },
        ]
    },
    {
        id: "it-a1-u15",
        level: "A1",
        order: 17,
        title: "The Near Future",
        description: "Express future plans and imminent events using stare per + infinitive and andare a + infinitive.",
        grammarIds: ["it-g-a1-13"],
        vocabIds: ["it-v-a1-141", "it-v-a1-142", "it-v-a1-143", "it-v-a1-144", "it-v-a1-145", "it-v-a1-146"],
        verbIds: ["it-vb-a1-4", "it-vb-a1-1"],
        testQuestions: [
            { id: "it-uq-a1-15-1", level: "A1", prompt: "How do you say 'I am about to go out'?", options: ["Vado a uscire.", "Sto per uscire.", "Uscirò presto.", "Sto uscendo."], answer: "Sto per uscire." },
            { id: "it-uq-a1-15-2", level: "A1", prompt: "Complete: 'Vado ___ mangiare.'", options: ["per", "di", "a", "in"], answer: "a" },
            { id: "it-uq-a1-15-3", level: "A1", prompt: "How do you say 'It is about to rain'?", options: ["Piove sempre.", "Sta per piovere.", "Va a piovere.", "Pioverà."], answer: "Sta per piovere." },
            { id: "it-uq-a1-15-4", level: "A1", prompt: "What does 'domani' mean?", options: ["Today", "Yesterday", "Now", "Tomorrow"], answer: "Tomorrow" },
            { id: "it-uq-a1-15-5", level: "A1", prompt: "Which structure means something is ABOUT TO happen right now?", options: ["andare a + inf.", "stare per + inf.", "volere + inf.", "potere + inf."], answer: "stare per + inf." },
            { id: "it-uq-a1-15-6", level: "A1", prompt: "Translate: 'We are going to watch a film tonight.'", options: ["Guardiamo un film stasera.", "Abbiamo guardato un film stasera.", "Andiamo a vedere un film stasera.", "Stiamo per vedere un film."], answer: "Andiamo a vedere un film stasera." },
        ]
    }
]
