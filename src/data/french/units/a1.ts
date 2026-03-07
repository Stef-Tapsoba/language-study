// src/data/french/units/a1.ts
import { LessonUnit } from "../../../types"

// 15 ordered A1 units for French.
// Each unit builds on the previous. Unit N+1 unlocks when unit N is mastered.
// futur proche (fr-g-a1-13) is the A1 bridge — the last unit before A2.

export const a1Units: LessonUnit[] = [
    {
        id: "fr-a1-u1",
        level: "A1",
        order: 1,
        title: "Greetings & Politeness",
        description: "Learn essential French greetings, farewells, and polite expressions for everyday situations.",
        grammarIds: [],
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
        description: "Learn definite articles (le/la/l'/les) and how French nouns have grammatical gender.",
        grammarIds: ["fr-g-a1-3"],
        vocabIds: [
            "fr-v-a1-63", "fr-v-a1-64", "fr-v-a1-65", "fr-v-a1-66", "fr-v-a1-67",
            "fr-v-a1-80", "fr-v-a1-81", "fr-v-a1-82", "fr-v-a1-83", "fr-v-a1-84"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-4-1", level: "A1", prompt: "Which article is used with a feminine noun?", options: ["le", "les", "un", "la"], answer: "la" },
            { id: "fr-uq-a1-4-2", level: "A1", prompt: "What happens to le/la before a vowel?", options: ["they become les", "they become l'", "they stay the same", "they become un"], answer: "they become l'" },
            { id: "fr-uq-a1-4-3", level: "A1", prompt: "What is the article for 'l'ami'?", options: ["le", "la", "l'", "les"], answer: "l'" },
            { id: "fr-uq-a1-4-4", level: "A1", prompt: "What is the plural definite article for all genders?", options: ["des", "les", "aux", "de"], answer: "les" },
            { id: "fr-uq-a1-4-5", level: "A1", prompt: "What does 'le pain' mean?", options: ["the water", "the milk", "the bread", "the meal"], answer: "the bread" },
            { id: "fr-uq-a1-4-6", level: "A1", prompt: "What does 'l'eau' mean?", options: ["the coffee", "the water", "the juice", "the milk"], answer: "the water" },
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
        verbIds: ["fr-vb-a1-5"],
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
        verbIds: ["fr-vb-a1-3"],
        testQuestions: [
            { id: "fr-uq-a1-6-1", level: "A1", prompt: "Complete: 'Je ___ au marché.'", options: ["vas", "vont", "vais", "allons"], answer: "vais" },
            { id: "fr-uq-a1-6-2", level: "A1", prompt: "Complete: 'Ils ___ au cinéma.'", options: ["allons", "allez", "vont", "va"], answer: "vont" },
            { id: "fr-uq-a1-6-3", level: "A1", prompt: "How do you say 'Turn left'?", options: ["Allez tout droit.", "Tournez à droite.", "Tournez à gauche.", "Revenez en arrière."], answer: "Tournez à gauche." },
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
        verbIds: ["fr-vb-a1-4"],
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
        title: "Numbers & Telling Time",
        description: "Learn numbers 0–100 and how to tell the time in French.",
        grammarIds: ["fr-g-a1-12"],
        vocabIds: [
            "fr-v-a1-13", "fr-v-a1-14", "fr-v-a1-15", "fr-v-a1-16", "fr-v-a1-17",
            "fr-v-a1-18", "fr-v-a1-19", "fr-v-a1-20", "fr-v-a1-21", "fr-v-a1-22",
            "fr-v-a1-23", "fr-v-a1-24", "fr-v-a1-25", "fr-v-a1-26", "fr-v-a1-27"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-11-1", level: "A1", prompt: "How do you say 'It is two o'clock'?", options: ["Il est deux heures.", "Il fait deux heures.", "C'est deux heures.", "Il a deux heures."], answer: "Il est deux heures." },
            { id: "fr-uq-a1-11-2", level: "A1", prompt: "What is 70 in French?", options: ["soixante", "quatre-vingts", "soixante-dix", "septante"], answer: "soixante-dix" },
            { id: "fr-uq-a1-11-3", level: "A1", prompt: "How do you say 'half past three'?", options: ["Il est trois heures et quart.", "Il est trois heures et demie.", "Il est trois heures moins le quart.", "Il est trois heures."], answer: "Il est trois heures et demie." },
            { id: "fr-uq-a1-11-4", level: "A1", prompt: "What is 80 in French?", options: ["soixante-dix", "quatre-vingt-dix", "quatre-vingts", "huitante"], answer: "quatre-vingts" },
            { id: "fr-uq-a1-11-5", level: "A1", prompt: "How do you say 'I am twenty years old'?", options: ["J'ai vingt ans.", "Je suis vingt ans.", "J'ai vingt années.", "Je fais vingt ans."], answer: "J'ai vingt ans." },
            { id: "fr-uq-a1-11-6", level: "A1", prompt: "What is 'cent'?", options: ["ten", "fifty", "one hundred", "sixty"], answer: "one hundred" },
        ]
    },
    {
        id: "fr-a1-u12",
        level: "A1",
        order: 12,
        title: "Family & Relationships",
        description: "Learn vocabulary for family members and close relationships.",
        grammarIds: [],
        vocabIds: [
            "fr-v-a1-48", "fr-v-a1-49", "fr-v-a1-50", "fr-v-a1-51", "fr-v-a1-52",
            "fr-v-a1-53", "fr-v-a1-54", "fr-v-a1-55", "fr-v-a1-56", "fr-v-a1-57",
            "fr-v-a1-58", "fr-v-a1-59", "fr-v-a1-60", "fr-v-a1-61", "fr-v-a1-62"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-12-1", level: "A1", prompt: "What does 'la mère' mean?", options: ["the sister", "the mother", "the daughter", "the grandmother"], answer: "the mother" },
            { id: "fr-uq-a1-12-2", level: "A1", prompt: "What does 'le frère' mean?", options: ["the father", "the son", "the brother", "the husband"], answer: "the brother" },
            { id: "fr-uq-a1-12-3", level: "A1", prompt: "What does 'les parents' mean?", options: ["the relatives", "the siblings", "the parents", "the grandparents"], answer: "the parents" },
            { id: "fr-uq-a1-12-4", level: "A1", prompt: "How do you say 'My family is big'?", options: ["Ma famille est grande.", "Mon famille est grand.", "La famille mienne est grande.", "Ma famille est gros."], answer: "Ma famille est grande." },
            { id: "fr-uq-a1-12-5", level: "A1", prompt: "What does 'l'enfant' mean?", options: ["the adult", "the child", "the teenager", "the baby"], answer: "the child" },
            { id: "fr-uq-a1-12-6", level: "A1", prompt: "What does 'le voisin' mean?", options: ["the friend", "the colleague", "the neighbour", "the cousin"], answer: "the neighbour" },
        ]
    },
    {
        id: "fr-a1-u13",
        level: "A1",
        order: 13,
        title: "Food, Café & Shopping",
        description: "Learn vocabulary for food, drinks, and ordering at a café or restaurant.",
        grammarIds: [],
        vocabIds: [
            "fr-v-a1-63", "fr-v-a1-64", "fr-v-a1-65", "fr-v-a1-66", "fr-v-a1-67",
            "fr-v-a1-68", "fr-v-a1-69", "fr-v-a1-70", "fr-v-a1-71", "fr-v-a1-72",
            "fr-v-a1-73", "fr-v-a1-74", "fr-v-a1-75", "fr-v-a1-83", "fr-v-a1-84",
            "fr-v-a1-85", "fr-v-a1-86", "fr-v-a1-87"
        ],
        verbIds: ["fr-vb-a1-6"],
        testQuestions: [
            { id: "fr-uq-a1-13-1", level: "A1", prompt: "How do you ask for the bill?", options: ["La carte, s'il vous plaît.", "L'addition, s'il vous plaît.", "Le menu, s'il vous plaît.", "Commander, s'il vous plaît."], answer: "L'addition, s'il vous plaît." },
            { id: "fr-uq-a1-13-2", level: "A1", prompt: "What does 'le fromage' mean?", options: ["fish", "meat", "bread", "cheese"], answer: "cheese" },
            { id: "fr-uq-a1-13-3", level: "A1", prompt: "How do you say 'I would like a coffee'?", options: ["Je veux un café.", "Je voudrais un café.", "Je fais un café.", "J'ai un café."], answer: "Je voudrais un café." },
            { id: "fr-uq-a1-13-4", level: "A1", prompt: "What does 'commander' mean?", options: ["to pay", "to leave", "to order", "to reserve"], answer: "to order" },
            { id: "fr-uq-a1-13-5", level: "A1", prompt: "What does 'délicieux' mean?", options: ["cheap", "delicious", "fresh", "cold"], answer: "delicious" },
            { id: "fr-uq-a1-13-6", level: "A1", prompt: "What does 'la carte' mean in a restaurant context?", options: ["the bill", "the address", "the menu", "the table"], answer: "the menu" },
        ]
    },
    {
        id: "fr-a1-u14",
        level: "A1",
        order: 14,
        title: "Places & Daily Routine",
        description: "Learn vocabulary for places in the city and expressions for daily life and routine.",
        grammarIds: [],
        vocabIds: [
            "fr-v-a1-114", "fr-v-a1-115", "fr-v-a1-116", "fr-v-a1-117", "fr-v-a1-118",
            "fr-v-a1-119", "fr-v-a1-120", "fr-v-a1-121", "fr-v-a1-122", "fr-v-a1-123",
            "fr-v-a1-124", "fr-v-a1-125", "fr-v-a1-126", "fr-v-a1-127", "fr-v-a1-128"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-14-1", level: "A1", prompt: "What does 'la gare' mean?", options: ["the garage", "the airport", "the train station", "the bus stop"], answer: "the train station" },
            { id: "fr-uq-a1-14-2", level: "A1", prompt: "What does 'le centre-ville' mean?", options: ["city hall", "shopping centre", "town centre", "downtown park"], answer: "town centre" },
            { id: "fr-uq-a1-14-3", level: "A1", prompt: "What does 'la banque' mean?", options: ["the bakery", "the bank", "the bench", "the shop"], answer: "the bank" },
            { id: "fr-uq-a1-14-4", level: "A1", prompt: "How do you say 'I work in an office'?", options: ["Je travaille dans un magasin.", "Je travaille dans un bureau.", "Je travaille dans une école.", "Je travaille dans un hôpital."], answer: "Je travaille dans un bureau." },
            { id: "fr-uq-a1-14-5", level: "A1", prompt: "What does 'le parc' mean?", options: ["the car park", "the park", "the square", "the garden"], answer: "the park" },
            { id: "fr-uq-a1-14-6", level: "A1", prompt: "What does 'la rue' mean?", options: ["the road sign", "the roundabout", "the street", "the square"], answer: "the street" },
        ]
    },
    {
        id: "fr-a1-u15",
        level: "A1",
        order: 15,
        title: "Bridge: Le Futur Proche",
        description: "Learn to talk about planned future actions using aller + infinitive — the most common future structure in French.",
        grammarIds: ["fr-g-a1-13"],
        vocabIds: [
            "fr-v-a1-42", "fr-v-a1-43", "fr-v-a1-44", "fr-v-a1-45", "fr-v-a1-46", "fr-v-a1-47",
            "fr-v-a1-156", "fr-v-a1-157", "fr-v-a1-158"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-15-1", level: "A1", prompt: "How is the futur proche formed?", options: ["Present of avoir + infinitive", "Present of être + infinitive", "Present of aller + infinitive", "Present of faire + infinitive"], answer: "Present of aller + infinitive" },
            { id: "fr-uq-a1-15-2", level: "A1", prompt: "Complete: 'Je ___ manger ce soir.' (futur proche)", options: ["vais", "suis", "fais", "ai"], answer: "vais" },
            { id: "fr-uq-a1-15-3", level: "A1", prompt: "How do you say 'We are going to visit Paris'?", options: ["Nous visitons Paris.", "Nous allons visiter Paris.", "Nous faisons visiter Paris.", "Nous avons visité Paris."], answer: "Nous allons visiter Paris." },
            { id: "fr-uq-a1-15-4", level: "A1", prompt: "What does 'demain' mean?", options: ["yesterday", "now", "tomorrow", "soon"], answer: "tomorrow" },
            { id: "fr-uq-a1-15-5", level: "A1", prompt: "Complete: 'Il ___ pleuvoir demain.' (futur proche)", options: ["fait", "va", "est", "a"], answer: "va" },
            { id: "fr-uq-a1-15-6", level: "A1", prompt: "What does 'bientôt' mean?", options: ["already", "soon", "now", "still"], answer: "soon" },
        ]
    },
]
