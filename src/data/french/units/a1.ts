// src/data/french/units/a1.ts
import { LessonUnit } from "../../../types"

// 19 ordered A1 units for French.
// Each unit builds on the previous. Unit N+1 unlocks when unit N is mastered.
// futur proche (fr-g-a1-13) is the A1 bridge — the last unit before A2.

export const a1Units: LessonUnit[] = [
    {
        id: "fr-a1-u1",
        level: "A1",
        order: 1,
        title: "Greetings & Politeness",
        description: "Learn essential French greetings, farewells, and polite expressions for everyday situations.",
        grammarIds: ["fr-g-a1-18"],
        vocabIds: [
            "fr-v-a1-1", "fr-v-a1-2", "fr-v-a1-3", "fr-v-a1-4", "fr-v-a1-5",
            "fr-v-a1-6", "fr-v-a1-7", "fr-v-a1-8", "fr-v-a1-9", "fr-v-a1-10",
            "fr-v-a1-11", "fr-v-a1-12"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-1-1", level: "A1", prompt: "What does 'Bonjour' mean?", options: ["Goodbye", "Please", "Hello", "Thank you"], answer: "Hello" },
            { id: "fr-uq-a1-1-2", level: "A1", prompt: "How do you say 'Thank you' in French?", options: ["S'il vous plaît", "Pardon", "Merci", "De rien"], answer: "Merci" },
            { id: "fr-uq-a1-1-3", level: "A1", prompt: "How do you say 'Goodbye'?", options: ["Bonsoir", "Au revoir", "Bonjour", "Salut"], answer: "Au revoir" },
            { id: "fr-uq-a1-1-4", level: "A1", prompt: "What is the formal way to say 'please'?", options: ["S'il te plaît", "Pardon", "Merci", "S'il vous plaît"], answer: "S'il vous plaît" },
            { id: "fr-uq-a1-1-5", level: "A1", prompt: "How do you say 'Excuse me' formally?", options: ["Pardon", "De rien", "Excusez-moi", "Bonsoir"], answer: "Excusez-moi" },
            { id: "fr-uq-a1-1-6", level: "A1", prompt: "What does 'De rien' mean?", options: ["Sorry", "You're welcome", "Please", "Good night"], answer: "You're welcome" },
        ]
    },
    {
        id: "fr-a1-u2",
        level: "A1",
        order: 2,
        title: "Subject Pronouns & Être",
        description: "Learn French subject pronouns and the essential verb être (to be) for describing identity and nationality.",
        grammarIds: ["fr-g-a1-1", "fr-g-a1-2"],
        vocabIds: [
            "fr-v-a1-137", "fr-v-a1-138", "fr-v-a1-139", "fr-v-a1-140",
            "fr-v-a1-141", "fr-v-a1-142", "fr-v-a1-143", "fr-v-a1-144"
        ],
        verbIds: ["fr-vb-a1-1"],
        testQuestions: [
            { id: "fr-uq-a1-2-1", level: "A1", prompt: "Which subject pronoun means 'we'?", options: ["Vous", "Ils", "Nous", "On"], answer: "Nous" },
            { id: "fr-uq-a1-2-2", level: "A1", prompt: "Complete: 'Je ___ médecin.'", options: ["ai", "vais", "suis", "fais"], answer: "suis" },
            { id: "fr-uq-a1-2-3", level: "A1", prompt: "How do you say 'They are (masculine)'?", options: ["Elles sont", "Ils sont", "Nous sommes", "Vous êtes"], answer: "Ils sont" },
            { id: "fr-uq-a1-2-4", level: "A1", prompt: "Unlike Spanish, French subject pronouns are...", options: ["always optional", "only used formally", "always required", "used only in writing"], answer: "always required" },
            { id: "fr-uq-a1-2-5", level: "A1", prompt: "Complete: 'Vous ___ professeur.'", options: ["sommes", "suis", "êtes", "est"], answer: "êtes" },
            { id: "fr-uq-a1-2-6", level: "A1", prompt: "What is 'teacher' in French?", options: ["le médecin", "l'étudiant", "l'ingénieur", "le professeur"], answer: "le professeur" },
        ]
    },
    {
        id: "fr-a1-u3",
        level: "A1",
        order: 3,
        title: "Avoir (to have)",
        description: "Master the verb avoir (to have) for expressing possession and age, plus indefinite articles un/une/des.",
        grammarIds: ["fr-g-a1-6", "fr-g-a1-4"],
        vocabIds: [
            "fr-v-a1-48", "fr-v-a1-49", "fr-v-a1-50", "fr-v-a1-51", "fr-v-a1-52",
            "fr-v-a1-53", "fr-v-a1-54", "fr-v-a1-60", "fr-v-a1-61"
        ],
        verbIds: ["fr-vb-a1-2"],
        testQuestions: [
            { id: "fr-uq-a1-3-1", level: "A1", prompt: "Complete: 'Tu ___ quel âge?'", options: ["es", "vas", "as", "fais"], answer: "as" },
            { id: "fr-uq-a1-3-2", level: "A1", prompt: "How do you say 'I have a brother'?", options: ["Je suis un frère.", "J'ai un frère.", "Je vais un frère.", "Je fais un frère."], answer: "J'ai un frère." },
            { id: "fr-uq-a1-3-3", level: "A1", prompt: "Which indefinite article is used with a masculine noun?", options: ["une", "des", "la", "un"], answer: "un" },
            { id: "fr-uq-a1-3-4", level: "A1", prompt: "Complete: 'Nous ___ deux enfants.'", options: ["sommes", "allons", "avons", "faisons"], answer: "avons" },
            { id: "fr-uq-a1-3-5", level: "A1", prompt: "What does 'il a faim' literally mean?", options: ["he is cold", "he is hungry", "he is thirsty", "he is tired"], answer: "he is hungry" },
            { id: "fr-uq-a1-3-6", level: "A1", prompt: "What is the plural indefinite article for all genders?", options: ["les", "des", "un", "une"], answer: "des" },
        ]
    },
    {
        id: "fr-a1-u4",
        level: "A1",
        order: 4,
        title: "Articles & Noun Gender",
        description: "Learn definite articles (le/la/l'/les), grammatical gender, and the essential contractions au, du, aux, des.",
        grammarIds: ["fr-g-a1-3", "fr-g-a1-14"],
        vocabIds: [
            "fr-v-a1-63", "fr-v-a1-64", "fr-v-a1-65", "fr-v-a1-66", "fr-v-a1-67",
            "fr-v-a1-80", "fr-v-a1-81", "fr-v-a1-82", "fr-v-a1-83", "fr-v-a1-84"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-4-1", level: "A1", prompt: "Which article is used with a feminine noun?", options: ["le", "les", "un", "la"], answer: "la" },
            { id: "fr-uq-a1-4-2", level: "A1", prompt: "What happens to le/la before a vowel?", options: ["they become les", "they become l'", "they stay the same", "they become un"], answer: "they become l'" },
            { id: "fr-uq-a1-4-3", level: "A1", prompt: "What is 'à + le'?", options: ["al", "du", "au", "aux"], answer: "au" },
            { id: "fr-uq-a1-4-4", level: "A1", prompt: "What is 'de + les'?", options: ["du", "des", "de les", "dels"], answer: "des" },
            { id: "fr-uq-a1-4-5", level: "A1", prompt: "Complete: 'Je vais ___ marché.' (le marché)", options: ["à le", "au", "du", "de le"], answer: "au" },
            { id: "fr-uq-a1-4-6", level: "A1", prompt: "Complete: 'C'est le livre ___ professeur.' (le professeur)", options: ["de le", "du", "des", "au"], answer: "du" },
        ]
    },
    {
        id: "fr-a1-u5",
        level: "A1",
        order: 5,
        title: "Present Tense: -er Verbs",
        description: "Master the most common verb pattern in French. Learn to conjugate regular -er verbs in the present tense.",
        grammarIds: ["fr-g-a1-5"],
        vocabIds: [
            "fr-v-a1-114", "fr-v-a1-115", "fr-v-a1-116", "fr-v-a1-117", "fr-v-a1-118",
            "fr-v-a1-119", "fr-v-a1-147", "fr-v-a1-148", "fr-v-a1-149"
        ],
        verbIds: ["fr-vb-a1-5", "fr-vb-a1-13"],
        testQuestions: [
            { id: "fr-uq-a1-5-1", level: "A1", prompt: "Complete: 'Nous ___ français.' (parler)", options: ["parle", "parles", "parlons", "parlent"], answer: "parlons" },
            { id: "fr-uq-a1-5-2", level: "A1", prompt: "Complete: 'Ils ___ à Paris.' (habiter)", options: ["habitons", "habitez", "habite", "habitent"], answer: "habitent" },
            { id: "fr-uq-a1-5-3", level: "A1", prompt: "What is the -er ending for 'tu'?", options: ["-e", "-ons", "-ez", "-es"], answer: "-es" },
            { id: "fr-uq-a1-5-4", level: "A1", prompt: "Complete: 'Vous ___ beaucoup.' (travailler)", options: ["travaille", "travailles", "travaillez", "travaillons"], answer: "travaillez" },
            { id: "fr-uq-a1-5-5", level: "A1", prompt: "What does 'le matin' mean?", options: ["the evening", "the afternoon", "the morning", "the night"], answer: "the morning" },
            { id: "fr-uq-a1-5-6", level: "A1", prompt: "The je/tu/il/elle forms of -er verbs all sound the same. True or false?", options: ["False", "True"], answer: "True" },
        ]
    },
    {
        id: "fr-a1-u6",
        level: "A1",
        order: 6,
        title: "Aller (to go)",
        description: "Learn the irregular verb aller (to go) and vocabulary for directions and locations.",
        grammarIds: ["fr-g-a1-7"],
        vocabIds: [
            "fr-v-a1-129", "fr-v-a1-130", "fr-v-a1-131", "fr-v-a1-132",
            "fr-v-a1-133", "fr-v-a1-134", "fr-v-a1-135", "fr-v-a1-136"
        ],
        verbIds: ["fr-vb-a1-3", "fr-vb-a1-10"],
        testQuestions: [
            { id: "fr-uq-a1-6-1", level: "A1", prompt: "Complete: 'Je ___ au marché.'", options: ["vas", "vont", "vais", "allons"], answer: "vais" },
            { id: "fr-uq-a1-6-2", level: "A1", prompt: "Complete: 'Ils ___ au cinéma.'", options: ["allons", "allez", "vont", "va"], answer: "vont" },
            { id: "fr-uq-a1-6-3", level: "A1", prompt: "What does 'à gauche' mean?", options: ["straight ahead", "to the right", "behind", "to the left"], answer: "to the left" },
            { id: "fr-uq-a1-6-4", level: "A1", prompt: "What does 'tout droit' mean?", options: ["turn right", "straight ahead", "on the left", "behind"], answer: "straight ahead" },
            { id: "fr-uq-a1-6-5", level: "A1", prompt: "How do you say 'Is it far from here?'", options: ["C'est près d'ici?", "C'est loin d'ici?", "C'est à côté?", "C'est en face?"], answer: "C'est loin d'ici?" },
            { id: "fr-uq-a1-6-6", level: "A1", prompt: "Complete: 'Vous ___ bien?' (aller — greeting)", options: ["faites", "êtes", "avez", "allez"], answer: "allez" },
        ]
    },
    {
        id: "fr-a1-u7",
        level: "A1",
        order: 7,
        title: "Faire (to do/make)",
        description: "Learn the highly irregular verb faire and its many fixed expressions used in daily French.",
        grammarIds: ["fr-g-a1-8"],
        vocabIds: [
            "fr-v-a1-68", "fr-v-a1-69", "fr-v-a1-70", "fr-v-a1-71",
            "fr-v-a1-72", "fr-v-a1-73", "fr-v-a1-74", "fr-v-a1-87"
        ],
        verbIds: ["fr-vb-a1-4", "fr-vb-a1-8"],
        testQuestions: [
            { id: "fr-uq-a1-7-1", level: "A1", prompt: "Complete: 'Nous ___ les courses.'", options: ["faites", "font", "faisons", "fait"], answer: "faisons" },
            { id: "fr-uq-a1-7-2", level: "A1", prompt: "The vous form of faire is unusual. What is it?", options: ["faisez", "faites", "font", "fais"], answer: "faites" },
            { id: "fr-uq-a1-7-3", level: "A1", prompt: "How do you say 'The weather is nice'?", options: ["Il fait chaud.", "Il fait beau.", "Il fait froid.", "Il fait sombre."], answer: "Il fait beau." },
            { id: "fr-uq-a1-7-4", level: "A1", prompt: "Complete: 'Tu ___ du sport?' (faire)", options: ["fais", "fait", "faisons", "font"], answer: "fais" },
            { id: "fr-uq-a1-7-5", level: "A1", prompt: "What does 'le déjeuner' mean?", options: ["breakfast", "dinner", "lunch", "snack"], answer: "lunch" },
            { id: "fr-uq-a1-7-6", level: "A1", prompt: "What does 'la carte' mean in a restaurant?", options: ["the bill", "the waiter", "the menu", "the table"], answer: "the menu" },
        ]
    },
    {
        id: "fr-a1-u8",
        level: "A1",
        order: 8,
        title: "Negation: ne...pas",
        description: "Learn how to negate any French sentence using the ne...pas structure.",
        grammarIds: ["fr-g-a1-9"],
        vocabIds: [
            "fr-v-a1-150", "fr-v-a1-151", "fr-v-a1-152", "fr-v-a1-153",
            "fr-v-a1-154", "fr-v-a1-155", "fr-v-a1-156", "fr-v-a1-157", "fr-v-a1-158"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-8-1", level: "A1", prompt: "How do you negate 'Je parle anglais'?", options: ["Je ne parle pas anglais.", "Je parle ne anglais.", "Je parle pas anglais ne.", "Je parle anglais ne pas."], answer: "Je ne parle pas anglais." },
            { id: "fr-uq-a1-8-2", level: "A1", prompt: "What does 'jamais' mean?", options: ["always", "sometimes", "never", "often"], answer: "never" },
            { id: "fr-uq-a1-8-3", level: "A1", prompt: "Before a vowel, 'ne' contracts to what?", options: ["ni", "n'", "no", "na"], answer: "n'" },
            { id: "fr-uq-a1-8-4", level: "A1", prompt: "Negate: 'Il est là.'", options: ["Il n'est pas là.", "Il est ne là.", "Il est là ne pas.", "Il ne là est pas."], answer: "Il n'est pas là." },
            { id: "fr-uq-a1-8-5", level: "A1", prompt: "What does 'toujours' mean?", options: ["never", "sometimes", "often", "always"], answer: "always" },
            { id: "fr-uq-a1-8-6", level: "A1", prompt: "What does 'souvent' mean?", options: ["rarely", "never", "often", "soon"], answer: "often" },
        ]
    },
    {
        id: "fr-a1-u9",
        level: "A1",
        order: 9,
        title: "Question Formation",
        description: "Learn the three ways to ask questions in French: intonation, est-ce que, and inversion.",
        grammarIds: ["fr-g-a1-10"],
        vocabIds: [
            "fr-v-a1-120", "fr-v-a1-121", "fr-v-a1-122", "fr-v-a1-123",
            "fr-v-a1-124", "fr-v-a1-125", "fr-v-a1-126", "fr-v-a1-127", "fr-v-a1-128"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-9-1", level: "A1", prompt: "Which question method adds 'est-ce que' before the statement?", options: ["Inversion", "Intonation", "Est-ce que method", "Question words only"], answer: "Est-ce que method" },
            { id: "fr-uq-a1-9-2", level: "A1", prompt: "How do you ask 'Where is the station?' using a question word?", options: ["Est-ce que la gare?", "Où est la gare?", "Qui est la gare?", "Quand est la gare?"], answer: "Où est la gare?" },
            { id: "fr-uq-a1-9-3", level: "A1", prompt: "Which question method is the most formal?", options: ["Intonation", "Est-ce que", "Inversion", "All are equally formal"], answer: "Inversion" },
            { id: "fr-uq-a1-9-4", level: "A1", prompt: "What does 'Qu'est-ce que tu fais?' mean?", options: ["Where are you going?", "What are you doing?", "Who are you?", "When do you leave?"], answer: "What are you doing?" },
            { id: "fr-uq-a1-9-5", level: "A1", prompt: "What does 'l'hôpital' mean?", options: ["hotel", "hospital", "town hall", "school"], answer: "hospital" },
            { id: "fr-uq-a1-9-6", level: "A1", prompt: "What does 'la gare' mean?", options: ["garage", "airport", "station", "bus stop"], answer: "station" },
        ]
    },
    {
        id: "fr-a1-u10",
        level: "A1",
        order: 10,
        title: "Adjective Agreement",
        description: "Learn how French adjectives must agree in gender and number with the noun they describe.",
        grammarIds: ["fr-g-a1-11"],
        vocabIds: [
            "fr-v-a1-98", "fr-v-a1-99", "fr-v-a1-100", "fr-v-a1-101",
            "fr-v-a1-102", "fr-v-a1-103", "fr-v-a1-159", "fr-v-a1-160",
            "fr-v-a1-163", "fr-v-a1-164", "fr-v-a1-165"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-10-1", level: "A1", prompt: "Feminine form of 'grand'?", options: ["grande", "grands", "grandez", "grandi"], answer: "grande" },
            { id: "fr-uq-a1-10-2", level: "A1", prompt: "Feminine form of 'beau' (beautiful)?", options: ["beaux", "belles", "belle", "beau"], answer: "belle" },
            { id: "fr-uq-a1-10-3", level: "A1", prompt: "Which adjective has the same form for both genders?", options: ["grand/grande", "bon/bonne", "facile", "beau/belle"], answer: "facile" },
            { id: "fr-uq-a1-10-4", level: "A1", prompt: "Plural masculine form of 'petit'?", options: ["petits", "petites", "petite", "petit"], answer: "petits" },
            { id: "fr-uq-a1-10-5", level: "A1", prompt: "What does 'bon' mean?", options: ["big", "bad", "good", "small"], answer: "good" },
            { id: "fr-uq-a1-10-6", level: "A1", prompt: "What does 'rouge' mean?", options: ["blue", "green", "red", "white"], answer: "red" },
        ]
    },
    {
        id: "fr-a1-u11",
        level: "A1",
        order: 11,
        title: "Numbers 1-20 & Telling Time",
        description: "Learn numbers 0–20, how to tell the time, and days of the week.",
        grammarIds: ["fr-g-a1-12"],
        vocabIds: [
            // Numbers 0-20
            "fr-v-a1-13",  // zéro
            "fr-v-a1-14",  // un
            "fr-v-a1-15",  // deux
            "fr-v-a1-16",  // trois
            "fr-v-a1-174", // quatre
            "fr-v-a1-17",  // cinq
            "fr-v-a1-175", // six
            "fr-v-a1-176", // sept
            "fr-v-a1-177", // huit
            "fr-v-a1-178", // neuf
            "fr-v-a1-18",  // dix
            "fr-v-a1-19",  // onze
            "fr-v-a1-179", // douze
            "fr-v-a1-180", // treize
            "fr-v-a1-181", // quatorze
            "fr-v-a1-182", // quinze
            "fr-v-a1-183", // seize
            "fr-v-a1-184", // dix-sept
            "fr-v-a1-185", // dix-huit
            "fr-v-a1-186", // dix-neuf
            "fr-v-a1-20",  // vingt
            // Days of the week
            "fr-v-a1-28", "fr-v-a1-29", "fr-v-a1-30", "fr-v-a1-31",
            "fr-v-a1-32", "fr-v-a1-33", "fr-v-a1-34",
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-11-1", level: "A1", prompt: "How do you say 'It is half past three'?", options: ["Il est trois heures et quart.", "Il est trois heures et demie.", "Il est trois heures moins le quart.", "Il est trois heures."], answer: "Il est trois heures et demie." },
            { id: "fr-uq-a1-11-2", level: "A1", prompt: "What is 'quinze' in English?", options: ["twelve", "thirteen", "sixteen", "fifteen"], answer: "fifteen" },
            { id: "fr-uq-a1-11-3", level: "A1", prompt: "How do you say 'It is seven o'clock'?", options: ["Il est sept heures.", "Il est sept heure.", "Il fait sept heures.", "C'est sept heures."], answer: "Il est sept heures." },
            { id: "fr-uq-a1-11-4", level: "A1", prompt: "What day comes after mardi?", options: ["lundi", "jeudi", "mercredi", "vendredi"], answer: "mercredi" },
            { id: "fr-uq-a1-11-5", level: "A1", prompt: "How do you say 'I am nineteen years old'?", options: ["J'ai dix-neuf ans.", "Je suis dix-neuf ans.", "J'ai dix-neuf années.", "Je fais dix-neuf ans."], answer: "J'ai dix-neuf ans." },
            { id: "fr-uq-a1-11-6", level: "A1", prompt: "What is special about telling the time for 1 o'clock?", options: ["Use 'un heure'", "Use 'une heure' (feminine)", "Use 'midi'", "Use 'il fait'"], answer: "Use 'une heure' (feminine)" },
        ]
    },
    {
        id: "fr-a1-u12",
        level: "A1",
        order: 12,
        title: "Numbers 20-100, Months & Seasons",
        description: "Learn the tens up to 100 — including the tricky 70-90 system — plus months of the year and seasons.",
        grammarIds: ["fr-g-a1-19"],
        vocabIds: [
            // Numbers 20-100
            "fr-v-a1-20",  // vingt
            "fr-v-a1-21",  // trente
            "fr-v-a1-22",  // quarante
            "fr-v-a1-23",  // cinquante
            "fr-v-a1-24",  // soixante
            "fr-v-a1-25",  // soixante-dix
            "fr-v-a1-26",  // quatre-vingts
            "fr-v-a1-187", // quatre-vingt-dix
            "fr-v-a1-27",  // cent
            // Months
            "fr-v-a1-35", "fr-v-a1-36", "fr-v-a1-37",
            // Seasons
            "fr-v-a1-38", "fr-v-a1-39", "fr-v-a1-40", "fr-v-a1-41",
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-12-1", level: "A1", prompt: "What is 70 in French?", options: ["soixante", "quatre-vingts", "soixante-dix", "septante"], answer: "soixante-dix" },
            { id: "fr-uq-a1-12-2", level: "A1", prompt: "What is 80 in French?", options: ["soixante-dix", "quatre-vingt-dix", "quatre-vingts", "huitante"], answer: "quatre-vingts" },
            { id: "fr-uq-a1-12-3", level: "A1", prompt: "Why is 'quatre-vingt-cinq' written without -s on vingt?", options: ["It is always without -s", "The -s disappears when followed by another number", "It is an exception", "vingt never takes -s"], answer: "The -s disappears when followed by another number" },
            { id: "fr-uq-a1-12-4", level: "A1", prompt: "What season is 'l'hiver'?", options: ["spring", "summer", "autumn", "winter"], answer: "winter" },
            { id: "fr-uq-a1-12-5", level: "A1", prompt: "How do you say 'in summer'?", options: ["au été", "en été", "dans l'été", "en l'été"], answer: "en été" },
            { id: "fr-uq-a1-12-6", level: "A1", prompt: "How do you say 'in spring'?", options: ["en printemps", "au printemps", "dans printemps", "en le printemps"], answer: "au printemps" },
        ]
    },
    {
        id: "fr-a1-u13",
        level: "A1",
        order: 13,
        title: "Family & Relationships",
        description: "Learn vocabulary for family members and close relationships, plus possessive adjectives to talk about whose is whose.",
        grammarIds: ["fr-g-a1-21"],
        vocabIds: [
            "fr-v-a1-48", "fr-v-a1-49", "fr-v-a1-50", "fr-v-a1-51", "fr-v-a1-52",
            "fr-v-a1-53", "fr-v-a1-54", "fr-v-a1-55", "fr-v-a1-56", "fr-v-a1-57",
            "fr-v-a1-58", "fr-v-a1-59", "fr-v-a1-60", "fr-v-a1-61", "fr-v-a1-62"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-13-1", level: "A1", prompt: "What does 'la mère' mean?", options: ["the sister", "the mother", "the daughter", "the grandmother"], answer: "the mother" },
            { id: "fr-uq-a1-13-2", level: "A1", prompt: "What does 'le frère' mean?", options: ["the father", "the son", "the brother", "the husband"], answer: "the brother" },
            { id: "fr-uq-a1-13-3", level: "A1", prompt: "What does 'les parents' mean?", options: ["the relatives", "the siblings", "the parents", "the grandparents"], answer: "the parents" },
            { id: "fr-uq-a1-13-4", level: "A1", prompt: "How do you say 'My family is big'?", options: ["Ma famille est grande.", "Mon famille est grand.", "La famille mienne est grande.", "Ma famille est gros."], answer: "Ma famille est grande." },
            { id: "fr-uq-a1-13-5", level: "A1", prompt: "Which possessive adjective replaces 'ma' before a vowel?", options: ["ma", "me", "mon", "mes"], answer: "mon" },
            { id: "fr-uq-a1-13-6", level: "A1", prompt: "How do you say 'his mother' and 'her mother'?", options: ["son mère / sa mère", "sa mère (both)", "son mère (both)", "leur mère (both)"], answer: "sa mère (both)" },
        ]
    },
    {
        id: "fr-a1-u14",
        level: "A1",
        order: 14,
        title: "Food, Café & Shopping",
        description: "Learn vocabulary for food, drinks, and ordering at a café or restaurant.",
        grammarIds: ["fr-g-a1-20"],
        vocabIds: [
            "fr-v-a1-63", "fr-v-a1-64", "fr-v-a1-65", "fr-v-a1-66", "fr-v-a1-67",
            "fr-v-a1-68", "fr-v-a1-69", "fr-v-a1-70", "fr-v-a1-71", "fr-v-a1-72",
            "fr-v-a1-73", "fr-v-a1-74", "fr-v-a1-75", "fr-v-a1-83", "fr-v-a1-84",
            "fr-v-a1-85", "fr-v-a1-86", "fr-v-a1-87"
        ],
        verbIds: ["fr-vb-a1-6", "fr-vb-a1-7", "fr-vb-a1-8", "fr-vb-a1-9", "fr-vb-a1-11"],
        testQuestions: [
            { id: "fr-uq-a1-14-1", level: "A1", prompt: "How do you ask for the bill?", options: ["La carte, s'il vous plaît.", "L'addition, s'il vous plaît.", "Le menu, s'il vous plaît.", "Commander, s'il vous plaît."], answer: "L'addition, s'il vous plaît." },
            { id: "fr-uq-a1-14-2", level: "A1", prompt: "What does 'le fromage' mean?", options: ["fish", "meat", "bread", "cheese"], answer: "cheese" },
            { id: "fr-uq-a1-14-3", level: "A1", prompt: "Which phrase is more polite when ordering?", options: ["Je veux un café.", "Je voudrais un café.", "Je fais un café.", "J'ai un café."], answer: "Je voudrais un café." },
            { id: "fr-uq-a1-14-4", level: "A1", prompt: "What does 'commander' mean?", options: ["to pay", "to leave", "to order", "to reserve"], answer: "to order" },
            { id: "fr-uq-a1-14-5", level: "A1", prompt: "What does 'délicieux' mean?", options: ["cheap", "delicious", "fresh", "cold"], answer: "delicious" },
            { id: "fr-uq-a1-14-6", level: "A1", prompt: "What does 'la carte' mean in a restaurant context?", options: ["the bill", "the address", "the menu", "the table"], answer: "the menu" },
        ]
    },
    {
        id: "fr-a1-u15",
        level: "A1",
        order: 15,
        title: "Places & Daily Routine",
        description: "Learn vocabulary for places in the city, plus prepositions for location (à, dans, en, sur, près de…).",
        grammarIds: ["fr-g-a1-22"],
        vocabIds: [
            "fr-v-a1-114", "fr-v-a1-115", "fr-v-a1-116", "fr-v-a1-117", "fr-v-a1-118",
            "fr-v-a1-119", "fr-v-a1-120", "fr-v-a1-121", "fr-v-a1-122", "fr-v-a1-123",
            "fr-v-a1-124", "fr-v-a1-125", "fr-v-a1-126", "fr-v-a1-127", "fr-v-a1-128"
        ],
        verbIds: ["fr-vb-a1-13"],
        testQuestions: [
            { id: "fr-uq-a1-15-1", level: "A1", prompt: "What does 'la gare' mean?", options: ["the garage", "the airport", "the train station", "the bus stop"], answer: "the train station" },
            { id: "fr-uq-a1-15-2", level: "A1", prompt: "What does 'le centre-ville' mean?", options: ["city hall", "shopping centre", "town centre", "downtown park"], answer: "town centre" },
            { id: "fr-uq-a1-15-3", level: "A1", prompt: "What does 'la banque' mean?", options: ["the bakery", "the bank", "the bench", "the shop"], answer: "the bank" },
            { id: "fr-uq-a1-15-4", level: "A1", prompt: "How do you say 'I work in an office'?", options: ["Je travaille dans un magasin.", "Je travaille dans un bureau.", "Je travaille dans une école.", "Je travaille dans un hôpital."], answer: "Je travaille dans un bureau." },
            { id: "fr-uq-a1-15-5", level: "A1", prompt: "What does 'le parc' mean?", options: ["the car park", "the park", "the square", "the garden"], answer: "the park" },
            { id: "fr-uq-a1-15-6", level: "A1", prompt: "What does 'la rue' mean?", options: ["the road sign", "the roundabout", "the street", "the square"], answer: "the street" },
        ]
    },
    {
        id: "fr-a1-u16",
        level: "A1",
        order: 16,
        title: "Present Tense: -ir Verbs",
        description: "Learn the second major verb group in French. Regular -ir verbs add -iss- in the plural — once you know the pattern, they're very predictable.",
        grammarIds: ["fr-g-a1-15"],
        vocabIds: [
            "fr-v-a1-117", // l'école
            "fr-v-a1-118", // l'université
            "fr-v-a1-116", // le travail
            "fr-v-a1-106", // le t-shirt
            "fr-v-a1-107", // le pantalon
            "fr-v-a1-108", // la robe
            "fr-v-a1-109", // la veste
            "fr-v-a1-110", // les chaussures
            "fr-v-a1-111", // le manteau
        ],
        verbIds: ["fr-vb-a1-14", "fr-vb-a1-15", "fr-vb-a1-16"],
        testQuestions: [
            { id: "fr-uq-a1-16-1", level: "A1", prompt: "What is the nous ending for regular -ir verbs?", options: ["-ons", "-issons", "-isons", "-issions"], answer: "-issons" },
            { id: "fr-uq-a1-16-2", level: "A1", prompt: "Complete: 'Nous ___ le projet.' (finir)", options: ["finons", "finissons", "finons", "finissent"], answer: "finissons" },
            { id: "fr-uq-a1-16-3", level: "A1", prompt: "Complete: 'Tu ___ quoi comme veste?' (choisir)", options: ["choisit", "choisis", "choisissons", "choisissez"], answer: "choisis" },
            { id: "fr-uq-a1-16-4", level: "A1", prompt: "What does 'réussir' mean?", options: ["to refuse", "to rest", "to succeed / to pass", "to listen"], answer: "to succeed / to pass" },
            { id: "fr-uq-a1-16-5", level: "A1", prompt: "Which -ir verb does NOT use -iss- in the plural?", options: ["finir", "choisir", "réussir", "partir"], answer: "partir" },
            { id: "fr-uq-a1-16-6", level: "A1", prompt: "Complete: 'Ils ___ leurs examens.' (réussir)", options: ["réussissent", "réussient", "réussisent", "réussent"], answer: "réussissent" },
        ]
    },
    {
        id: "fr-a1-u17",
        level: "A1",
        order: 17,
        title: "Present Tense: -re Verbs",
        description: "Complete your knowledge of the three French verb groups. Regular -re verbs have a key quirk: the il/elle form has no ending at all.",
        grammarIds: ["fr-g-a1-16"],
        vocabIds: [
            "fr-v-a1-120", // le magasin
            "fr-v-a1-121", // le supermarché
            "fr-v-a1-68",  // le pain
            "fr-v-a1-69",  // le beurre
            "fr-v-a1-70",  // le lait
            "fr-v-a1-71",  // les œufs
            "fr-v-a1-72",  // le sucre
            "fr-v-a1-73",  // le sel
            "fr-v-a1-74",  // le riz
        ],
        verbIds: ["fr-vb-a1-17", "fr-vb-a1-18", "fr-vb-a1-19"],
        testQuestions: [
            { id: "fr-uq-a1-17-1", level: "A1", prompt: "What is special about the il/elle form of -re verbs?", options: ["It adds -e", "It adds -t", "It has no ending — bare stem only", "It is the same as nous"], answer: "It has no ending — bare stem only" },
            { id: "fr-uq-a1-17-2", level: "A1", prompt: "Complete: 'J'___ le bus.' (attendre)", options: ["attend", "attendons", "attends", "attendez"], answer: "attends" },
            { id: "fr-uq-a1-17-3", level: "A1", prompt: "Complete: 'Il ___ des légumes au marché.' (vendre)", options: ["vends", "vendons", "vendt", "vend"], answer: "vend" },
            { id: "fr-uq-a1-17-4", level: "A1", prompt: "What does 'répondre' mean?", options: ["to repeat", "to rest", "to return", "to answer"], answer: "to answer" },
            { id: "fr-uq-a1-17-5", level: "A1", prompt: "Complete: 'Vous ___ à l'email?' (répondre)", options: ["répondons", "répondez", "répondent", "répond"], answer: "répondez" },
            { id: "fr-uq-a1-17-6", level: "A1", prompt: "What does 'le supermarché' mean?", options: ["the market", "the bakery", "the supermarket", "the shop"], answer: "the supermarket" },
        ]
    },
    {
        id: "fr-a1-u18",
        level: "A1",
        order: 18,
        title: "Likes & Dislikes",
        description: "Learn to say what you like, dislike, and prefer — one of the most essential skills in everyday French conversation.",
        grammarIds: ["fr-g-a1-17"],
        vocabIds: [
            "fr-v-a1-65",  // le café
            "fr-v-a1-66",  // le thé
            "fr-v-a1-75",  // le fromage
            "fr-v-a1-76",  // la viande
            "fr-v-a1-78",  // les légumes
            "fr-v-a1-79",  // les fruits
            "fr-v-a1-82",  // la nourriture
            "fr-v-a1-83",  // le restaurant
            "fr-v-a1-152", // souvent
            "fr-v-a1-153", // toujours
            "fr-v-a1-154", // jamais
            "fr-v-a1-166", // facile
            "fr-v-a1-167", // difficile
            "fr-v-a1-170", // content/contente
            "fr-v-a1-172", // sympa
        ],
        verbIds: ["fr-vb-a1-6"],
        testQuestions: [
            { id: "fr-uq-a1-18-1", level: "A1", prompt: "How do you say 'I like French'?", options: ["J'aime bien un français.", "J'aime le français.", "J'aime de français.", "J'aime français."], answer: "J'aime le français." },
            { id: "fr-uq-a1-18-2", level: "A1", prompt: "How do you say 'She doesn't like sport'?", options: ["Elle n'aime pas le sport.", "Elle aime ne pas sport.", "Elle aime pas de sport.", "Elle n'aime pas de sport."], answer: "Elle n'aime pas le sport." },
            { id: "fr-uq-a1-18-3", level: "A1", prompt: "Which sentence correctly expresses a preference?", options: ["Je préfère un thé au café.", "Je préfère le thé au café.", "Je préfère thé de café.", "Je préfère de thé au café."], answer: "Je préfère le thé au café." },
            { id: "fr-uq-a1-18-4", level: "A1", prompt: "What does 'J'aime bien' express compared to 'J'aime'?", options: ["Stronger like", "Slightly softer like", "Dislike", "Indifference"], answer: "Slightly softer like" },
            { id: "fr-uq-a1-18-5", level: "A1", prompt: "How do you ask 'Do you like coffee?' (informal)?", options: ["Vous aimez le café?", "Tu aimes le café?", "Tu aimes un café?", "Tu aimes de café?"], answer: "Tu aimes le café?" },
            { id: "fr-uq-a1-18-6", level: "A1", prompt: "Complete: 'Il ___ les légumes.' (détester)", options: ["déteste", "détestes", "détestez", "détestent"], answer: "déteste" },
        ]
    },
    {
        id: "fr-a1-u19",
        level: "A1",
        order: 19,
        title: "Bridge: Le Futur Proche",
        description: "Learn to talk about planned future actions using aller + infinitive — the most common future structure in French.",
        grammarIds: ["fr-g-a1-13"],
        vocabIds: [
            "fr-v-a1-42", "fr-v-a1-43", "fr-v-a1-44", "fr-v-a1-45", "fr-v-a1-46", "fr-v-a1-47",
            "fr-v-a1-156", "fr-v-a1-157", "fr-v-a1-158"
        ],
        verbIds: ["fr-vb-a1-3"],
        testQuestions: [
            { id: "fr-uq-a1-19-1", level: "A1", prompt: "How is the futur proche formed?", options: ["Present of avoir + infinitive", "Present of être + infinitive", "Present of aller + infinitive", "Present of faire + infinitive"], answer: "Present of aller + infinitive" },
            { id: "fr-uq-a1-19-2", level: "A1", prompt: "Complete: 'Je ___ manger ce soir.' (futur proche)", options: ["vais", "suis", "fais", "ai"], answer: "vais" },
            { id: "fr-uq-a1-19-3", level: "A1", prompt: "How do you say 'We are going to visit Paris'?", options: ["Nous visitons Paris.", "Nous allons visiter Paris.", "Nous faisons visiter Paris.", "Nous avons visité Paris."], answer: "Nous allons visiter Paris." },
            { id: "fr-uq-a1-19-4", level: "A1", prompt: "What does 'demain' mean?", options: ["yesterday", "now", "tomorrow", "soon"], answer: "tomorrow" },
            { id: "fr-uq-a1-19-5", level: "A1", prompt: "Complete: 'Il ___ pleuvoir demain.' (futur proche)", options: ["fait", "va", "est", "a"], answer: "va" },
            { id: "fr-uq-a1-19-6", level: "A1", prompt: "What does 'bientôt' mean?", options: ["already", "soon", "now", "still"], answer: "soon" },
        ]
    },
]
