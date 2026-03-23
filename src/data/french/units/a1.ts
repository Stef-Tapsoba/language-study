// src/data/french/units/a1.ts
import { LessonUnit } from "../../../types"

// 27 ordered A1 units for French.
// Pedagogical progression:
// U1–U4  : Core building blocks — greetings, être, avoir, articles & gender
// U5–U10 : Essential grammar — -er verbs, negation, questions, adjectives, aller, faire
// U11–U13: More grammar — modal verbs (vouloir/pouvoir), reflexive verbs, demonstratives
// U14–U15: Numbers, time, months & seasons
// U16–U18: Remaining verb groups (-ir, -re) + adverbs/connectors
// U19–U20: Everyday topics — likes, family
// U21    : Partitive articles & existence (grammar needed for food unit)
// U22–U23: Food/café/shopping, places & daily routine
// U24–U25: Commands/devoir/venir, identity & stressed pronouns
// U26    : Weather & seasons
// U27    : Bridge — le futur proche (capstone)

export const a1Units: LessonUnit[] = [
    {
        id: "fr-a1-u1",
        level: "A1",
        order: 1,
        title: "Greetings, Pronunciation & Subject Pronouns",
        description: "Your first steps in French: learn essential greetings and polite phrases, understand how French pronunciation works, and meet the subject pronouns — including the crucial tu/vous distinction.",
        grammarIds: ["fr-g-a1-18", "fr-g-a1-1"],
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
            { id: "fr-uq-a1-1-4", level: "A1", prompt: "Which subject pronoun do you use with someone you don't know well?", options: ["tu", "vous", "on", "ils"], answer: "vous", hint: "Vous is used formally with strangers, elders, and in professional contexts. Tu is for friends and family." },
            { id: "fr-uq-a1-1-5", level: "A1", prompt: "How do you say 'Excuse me' formally?", options: ["Pardon", "De rien", "Excusez-moi", "Bonsoir"], answer: "Excusez-moi" },
            { id: "fr-uq-a1-1-6", level: "A1", prompt: "Which subject pronoun means 'we'?", options: ["Vous", "Ils", "Nous", "On"], answer: "Nous" },
        ]
    },
    {
        id: "fr-a1-u2",
        level: "A1",
        order: 2,
        title: "Être — To Be",
        description: "Master être (to be) — the most essential verb in French. Use it to describe identity, nationality, and profession.",
        grammarIds: ["fr-g-a1-2"],
        vocabIds: [
            "fr-v-a1-137", "fr-v-a1-138", "fr-v-a1-139", "fr-v-a1-140",
            "fr-v-a1-141", "fr-v-a1-142", "fr-v-a1-143", "fr-v-a1-144"
        ],
        verbIds: ["fr-vb-a1-1"],
        testQuestions: [
            { id: "fr-uq-a1-2-1", level: "A1", prompt: "Complete: 'Je ___ médecin.'", options: ["ai", "vais", "suis", "fais"], answer: "suis" },
            { id: "fr-uq-a1-2-2", level: "A1", prompt: "How do you say 'They are (masculine)'?", options: ["Elles sont", "Ils sont", "Nous sommes", "Vous êtes"], answer: "Ils sont" },
            { id: "fr-uq-a1-2-3", level: "A1", prompt: "Complete: 'Vous ___ professeur.'", options: ["sommes", "suis", "êtes", "est"], answer: "êtes" },
            { id: "fr-uq-a1-2-4", level: "A1", prompt: "Unlike Spanish and Italian, French subject pronouns are...", options: ["always optional", "only used formally", "always required", "used only in writing"], answer: "always required" },
            { id: "fr-uq-a1-2-5", level: "A1", prompt: "Complete: 'Elle ___ avocate.'", options: ["est", "es", "suis", "êtes"], answer: "est" },
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
        grammarIds: ["fr-g-a1-0", "fr-g-a1-3", "fr-g-a1-14"],
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
        title: "Negation: ne...pas",
        description: "Learn how to negate any French sentence using the ne...pas structure.",
        grammarIds: ["fr-g-a1-9"],
        vocabIds: [
            "fr-v-a1-150", "fr-v-a1-151", "fr-v-a1-152", "fr-v-a1-153",
            "fr-v-a1-154", "fr-v-a1-155", "fr-v-a1-156", "fr-v-a1-157", "fr-v-a1-158"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-6-1", level: "A1", prompt: "How do you negate 'Je parle anglais'?", options: ["Je ne parle pas anglais.", "Je parle ne anglais.", "Je parle pas anglais ne.", "Je parle anglais ne pas."], answer: "Je ne parle pas anglais." },
            { id: "fr-uq-a1-6-2", level: "A1", prompt: "What does 'jamais' mean?", options: ["always", "sometimes", "never", "often"], answer: "never" },
            { id: "fr-uq-a1-6-3", level: "A1", prompt: "Before a vowel, 'ne' contracts to what?", options: ["ni", "n'", "no", "na"], answer: "n'" },
            { id: "fr-uq-a1-6-4", level: "A1", prompt: "Negate: 'Il est là.'", options: ["Il n'est pas là.", "Il est ne là.", "Il est là ne pas.", "Il ne là est pas."], answer: "Il n'est pas là." },
            { id: "fr-uq-a1-6-5", level: "A1", prompt: "What does 'toujours' mean?", options: ["never", "sometimes", "often", "always"], answer: "always" },
            { id: "fr-uq-a1-6-6", level: "A1", prompt: "What does 'souvent' mean?", options: ["rarely", "never", "often", "soon"], answer: "often" },
        ]
    },
    {
        id: "fr-a1-u7",
        level: "A1",
        order: 7,
        title: "Question Formation",
        description: "Learn the three ways to ask questions in French: intonation, est-ce que, and inversion.",
        grammarIds: ["fr-g-a1-10"],
        vocabIds: [
            "fr-v-a1-120", "fr-v-a1-121", "fr-v-a1-122", "fr-v-a1-123",
            "fr-v-a1-124", "fr-v-a1-125", "fr-v-a1-126", "fr-v-a1-127", "fr-v-a1-128"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-7-1", level: "A1", prompt: "Which question method adds 'est-ce que' before the statement?", options: ["Inversion", "Intonation", "Est-ce que method", "Question words only"], answer: "Est-ce que method" },
            { id: "fr-uq-a1-7-2", level: "A1", prompt: "How do you ask 'Where is the station?' using a question word?", options: ["Est-ce que la gare?", "Où est la gare?", "Qui est la gare?", "Quand est la gare?"], answer: "Où est la gare?" },
            { id: "fr-uq-a1-7-3", level: "A1", prompt: "Which question method is the most formal?", options: ["Intonation", "Est-ce que", "Inversion", "All are equally formal"], answer: "Inversion" },
            { id: "fr-uq-a1-7-4", level: "A1", prompt: "What does 'Qu'est-ce que tu fais?' mean?", options: ["Where are you going?", "What are you doing?", "Who are you?", "When do you leave?"], answer: "What are you doing?" },
            { id: "fr-uq-a1-7-5", level: "A1", prompt: "What does 'l'hôpital' mean?", options: ["hotel", "hospital", "town hall", "school"], answer: "hospital" },
            { id: "fr-uq-a1-7-6", level: "A1", prompt: "What does 'la gare' mean?", options: ["garage", "airport", "station", "bus stop"], answer: "station" },
        ]
    },
    {
        id: "fr-a1-u8",
        level: "A1",
        order: 8,
        title: "Adjective Agreement",
        description: "Now that you know noun gender, learn the rule that flows from it: adjectives must agree with their noun in gender and number. Understand position — most adjectives follow the noun, but key common ones go before.",
        grammarIds: ["fr-g-a1-11"],
        vocabIds: [
            "fr-v-a1-98", "fr-v-a1-99", "fr-v-a1-100", "fr-v-a1-101",
            "fr-v-a1-102", "fr-v-a1-103", "fr-v-a1-159", "fr-v-a1-160",
            "fr-v-a1-163", "fr-v-a1-164", "fr-v-a1-165"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-8-1", level: "A1", prompt: "Feminine form of 'grand'?", options: ["grande", "grands", "grandez", "grandi"], answer: "grande" },
            { id: "fr-uq-a1-8-2", level: "A1", prompt: "Feminine form of 'beau' (beautiful)?", options: ["beaux", "belles", "belle", "beau"], answer: "belle" },
            { id: "fr-uq-a1-8-3", level: "A1", prompt: "Which adjective has the same form for both genders?", options: ["grand/grande", "bon/bonne", "facile", "beau/belle"], answer: "facile" },
            { id: "fr-uq-a1-8-4", level: "A1", prompt: "Plural masculine form of 'petit'?", options: ["petits", "petites", "petite", "petit"], answer: "petits" },
            { id: "fr-uq-a1-8-5", level: "A1", prompt: "What does 'bon' mean?", options: ["big", "bad", "good", "small"], answer: "good" },
            { id: "fr-uq-a1-8-6", level: "A1", prompt: "What does 'rouge' mean?", options: ["blue", "green", "red", "white"], answer: "red" },
        ]
    },
    {
        id: "fr-a1-u9",
        level: "A1",
        order: 9,
        title: "Aller (to go)",
        description: "Learn the irregular verb aller (to go) and vocabulary for directions and locations.",
        grammarIds: ["fr-g-a1-7"],
        vocabIds: [
            "fr-v-a1-129", "fr-v-a1-130", "fr-v-a1-131", "fr-v-a1-132",
            "fr-v-a1-133", "fr-v-a1-134", "fr-v-a1-135", "fr-v-a1-136"
        ],
        verbIds: ["fr-vb-a1-3", "fr-vb-a1-10"],
        testQuestions: [
            { id: "fr-uq-a1-9-1", level: "A1", prompt: "Complete: 'Je ___ au marché.'", options: ["vas", "vont", "vais", "allons"], answer: "vais" },
            { id: "fr-uq-a1-9-2", level: "A1", prompt: "Complete: 'Ils ___ au cinéma.'", options: ["allons", "allez", "vont", "va"], answer: "vont" },
            { id: "fr-uq-a1-9-3", level: "A1", prompt: "What does 'à gauche' mean?", options: ["straight ahead", "to the right", "behind", "to the left"], answer: "to the left" },
            { id: "fr-uq-a1-9-4", level: "A1", prompt: "What does 'tout droit' mean?", options: ["turn right", "straight ahead", "on the left", "behind"], answer: "straight ahead" },
            { id: "fr-uq-a1-9-5", level: "A1", prompt: "How do you say 'Is it far from here?'", options: ["C'est près d'ici?", "C'est loin d'ici?", "C'est à côté?", "C'est en face?"], answer: "C'est loin d'ici?" },
            { id: "fr-uq-a1-9-6", level: "A1", prompt: "Complete: 'Vous ___ bien?' (aller — greeting)", options: ["faites", "êtes", "avez", "allez"], answer: "allez" },
        ]
    },
    {
        id: "fr-a1-u10",
        level: "A1",
        order: 10,
        title: "Faire (to do/make)",
        description: "Learn the highly irregular verb faire and its many fixed expressions used in daily French.",
        grammarIds: ["fr-g-a1-8"],
        vocabIds: [
            "fr-v-a1-68", "fr-v-a1-69", "fr-v-a1-70", "fr-v-a1-71",
            "fr-v-a1-72", "fr-v-a1-73", "fr-v-a1-74", "fr-v-a1-87"
        ],
        verbIds: ["fr-vb-a1-4", "fr-vb-a1-8"],
        testQuestions: [
            { id: "fr-uq-a1-10-1", level: "A1", prompt: "Complete: 'Nous ___ les courses.'", options: ["faites", "font", "faisons", "fait"], answer: "faisons" },
            { id: "fr-uq-a1-10-2", level: "A1", prompt: "The vous form of faire is unusual. What is it?", options: ["faisez", "faites", "font", "fais"], answer: "faites" },
            { id: "fr-uq-a1-10-3", level: "A1", prompt: "How do you say 'The weather is nice'?", options: ["Il fait chaud.", "Il fait beau.", "Il fait froid.", "Il fait sombre."], answer: "Il fait beau." },
            { id: "fr-uq-a1-10-4", level: "A1", prompt: "Complete: 'Tu ___ du sport?' (faire)", options: ["fais", "fait", "faisons", "font"], answer: "fais" },
            { id: "fr-uq-a1-10-5", level: "A1", prompt: "What does 'le déjeuner' mean?", options: ["breakfast", "dinner", "lunch", "snack"], answer: "lunch" },
            { id: "fr-uq-a1-10-6", level: "A1", prompt: "What does 'la carte' mean in a restaurant?", options: ["the bill", "the waiter", "the menu", "the table"], answer: "the menu" },
        ]
    },
    {
        id: "fr-a1-u11",
        level: "A1",
        order: 11,
        title: "Modal Verbs: Vouloir & Pouvoir",
        description: "Express what you want and what you can do. Both verbs are irregular and essential — and vouloir gives you the polite 'je voudrais' form for ordering.",
        grammarIds: ["fr-g-a1-23", "fr-g-a1-24"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-11-1", level: "A1", prompt: "Complete: 'Je ___ un café, s'il vous plaît.' (polite form of vouloir)", options: ["veux", "voudrais", "peux", "vais"], answer: "voudrais" },
            { id: "fr-uq-a1-11-2", level: "A1", prompt: "Complete: 'Tu ___ m'aider?' (pouvoir)", options: ["veux", "vas", "peux", "fais"], answer: "peux" },
            { id: "fr-uq-a1-11-3", level: "A1", prompt: "What form does vouloir/pouvoir always take before another action?", options: ["past participle", "infinitive", "present tense", "gerund"], answer: "infinitive" },
            { id: "fr-uq-a1-11-4", level: "A1", prompt: "Complete: 'Ils ___ partir maintenant.' (vouloir)", options: ["veulent", "voulons", "voulez", "veut"], answer: "veulent" },
            { id: "fr-uq-a1-11-5", level: "A1", prompt: "Complete: 'Elle ne ___ pas venir.' (pouvoir)", options: ["veut", "peut", "va", "fait"], answer: "peut" },
            { id: "fr-uq-a1-11-6", level: "A1", prompt: "Which sentence uses vouloir to express polite desire?", options: ["Je veux un verre d'eau.", "Je voudrais un verre d'eau.", "Je peux un verre d'eau.", "Je fais un verre d'eau."], answer: "Je voudrais un verre d'eau." },
        ]
    },
    {
        id: "fr-a1-u12",
        level: "A1",
        order: 12,
        title: "Reflexive Verbs",
        description: "Learn how to express actions done to yourself — getting up, washing, introducing your name. Reflexive verbs use special pronouns and are extremely common in everyday French.",
        grammarIds: ["fr-g-a1-25"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-12-1", level: "A1", prompt: "How do you say 'My name is Paul'?", options: ["Je suis appelé Paul.", "Je m'appelle Paul.", "J'appelle Paul.", "Mon nom est Paul."], answer: "Je m'appelle Paul." },
            { id: "fr-uq-a1-12-2", level: "A1", prompt: "Complete: 'Elle ___ lève à 7h.'", options: ["me", "se", "te", "nous"], answer: "se" },
            { id: "fr-uq-a1-12-3", level: "A1", prompt: "Where does 'ne' go in a negative reflexive sentence?", options: ["After the verb", "Before the reflexive pronoun", "After the reflexive pronoun", "At the end"], answer: "Before the reflexive pronoun" },
            { id: "fr-uq-a1-12-4", level: "A1", prompt: "Complete: 'Nous ___ lavons les mains.'", options: ["me", "te", "nous", "se"], answer: "nous" },
            { id: "fr-uq-a1-12-5", level: "A1", prompt: "What does 'se coucher' mean?", options: ["to cook", "to get up", "to go to bed", "to sit down"], answer: "to go to bed" },
            { id: "fr-uq-a1-12-6", level: "A1", prompt: "How do you ask 'What is your name?' formally?", options: ["Comment tu t'appelles?", "Comment vous appelez-vous?", "Comment se sont-ils appelés?", "Comment t'appelles-tu-vous?"], answer: "Comment vous appelez-vous?" },
        ]
    },
    {
        id: "fr-a1-u13",
        level: "A1",
        order: 13,
        title: "Demonstratives",
        description: "Learn to point things out — this book, that idea, these shoes. French demonstrative adjectives agree with the noun's gender and number.",
        grammarIds: ["fr-g-a1-26"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-13-1", level: "A1", prompt: "Which form is correct before a masculine noun starting with a vowel?", options: ["ce", "cet", "cette", "ces"], answer: "cet" },
            { id: "fr-uq-a1-13-2", level: "A1", prompt: "Complete: '___ maison est belle.'", options: ["Ce", "Cet", "Cette", "Ces"], answer: "Cette" },
            { id: "fr-uq-a1-13-3", level: "A1", prompt: "Complete: '___ livres sont intéressants.'", options: ["Ce", "Cet", "Cette", "Ces"], answer: "Ces" },
            { id: "fr-uq-a1-13-4", level: "A1", prompt: "How do you say 'this hotel' (hôtel = masculine)?", options: ["ce hôtel", "cet hôtel", "cette hôtel", "ces hôtel"], answer: "cet hôtel" },
            { id: "fr-uq-a1-13-5", level: "A1", prompt: "To say 'that book (over there)', you add:", options: ["-ci after the noun", "-là after the noun", "-là before the noun", "c'est before the noun"], answer: "-là after the noun" },
            { id: "fr-uq-a1-13-6", level: "A1", prompt: "What does 'ça' mean in spoken French?", options: ["this here", "that / it (informal demonstrative pronoun)", "these here", "those there"], answer: "that / it (informal demonstrative pronoun)" },
        ]
    },
    {
        id: "fr-a1-u14",
        level: "A1",
        order: 14,
        title: "Numbers 1-20 & Telling Time",
        description: "Learn numbers 0–20, how to tell the time, and days of the week.",
        grammarIds: ["fr-g-a1-12"],
        vocabIds: [
            "fr-v-a1-13", "fr-v-a1-14", "fr-v-a1-15", "fr-v-a1-16", "fr-v-a1-174",
            "fr-v-a1-17", "fr-v-a1-175", "fr-v-a1-176", "fr-v-a1-177", "fr-v-a1-178",
            "fr-v-a1-18", "fr-v-a1-19", "fr-v-a1-179", "fr-v-a1-180", "fr-v-a1-181",
            "fr-v-a1-182", "fr-v-a1-183", "fr-v-a1-184", "fr-v-a1-185", "fr-v-a1-186",
            "fr-v-a1-20",
            "fr-v-a1-28", "fr-v-a1-29", "fr-v-a1-30", "fr-v-a1-31",
            "fr-v-a1-32", "fr-v-a1-33", "fr-v-a1-34",
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-14-1", level: "A1", prompt: "How do you say 'It is half past three'?", options: ["Il est trois heures et quart.", "Il est trois heures et demie.", "Il est trois heures moins le quart.", "Il est trois heures."], answer: "Il est trois heures et demie." },
            { id: "fr-uq-a1-14-2", level: "A1", prompt: "What is 'quinze' in English?", options: ["twelve", "thirteen", "sixteen", "fifteen"], answer: "fifteen" },
            { id: "fr-uq-a1-14-3", level: "A1", prompt: "How do you say 'It is seven o'clock'?", options: ["Il est sept heures.", "Il est sept heure.", "Il fait sept heures.", "C'est sept heures."], answer: "Il est sept heures." },
            { id: "fr-uq-a1-14-4", level: "A1", prompt: "What day comes after mardi?", options: ["lundi", "jeudi", "mercredi", "vendredi"], answer: "mercredi" },
            { id: "fr-uq-a1-14-5", level: "A1", prompt: "How do you say 'I am nineteen years old'?", options: ["J'ai dix-neuf ans.", "Je suis dix-neuf ans.", "J'ai dix-neuf années.", "Je fais dix-neuf ans."], answer: "J'ai dix-neuf ans." },
            { id: "fr-uq-a1-14-6", level: "A1", prompt: "What is special about telling the time for 1 o'clock?", options: ["Use 'un heure'", "Use 'une heure' (feminine)", "Use 'midi'", "Use 'il fait'"], answer: "Use 'une heure' (feminine)" },
        ]
    },
    {
        id: "fr-a1-u15",
        level: "A1",
        order: 15,
        title: "Numbers 20-100, Months & Seasons",
        description: "Learn the tens up to 100 — including the tricky 70-90 system — plus months of the year and seasons.",
        grammarIds: ["fr-g-a1-19"],
        vocabIds: [
            "fr-v-a1-20", "fr-v-a1-21", "fr-v-a1-22", "fr-v-a1-23", "fr-v-a1-24",
            "fr-v-a1-25", "fr-v-a1-26", "fr-v-a1-187", "fr-v-a1-27",
            "fr-v-a1-35", "fr-v-a1-36", "fr-v-a1-37",
            "fr-v-a1-38", "fr-v-a1-39", "fr-v-a1-40", "fr-v-a1-41",
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-15-1", level: "A1", prompt: "What is 70 in French?", options: ["soixante", "quatre-vingts", "soixante-dix", "septante"], answer: "soixante-dix" },
            { id: "fr-uq-a1-15-2", level: "A1", prompt: "What is 80 in French?", options: ["soixante-dix", "quatre-vingt-dix", "quatre-vingts", "huitante"], answer: "quatre-vingts" },
            { id: "fr-uq-a1-15-3", level: "A1", prompt: "Why is 'quatre-vingt-cinq' written without -s on vingt?", options: ["It is always without -s", "The -s disappears when followed by another number", "It is an exception", "vingt never takes -s"], answer: "The -s disappears when followed by another number" },
            { id: "fr-uq-a1-15-4", level: "A1", prompt: "What season is 'l'hiver'?", options: ["spring", "summer", "autumn", "winter"], answer: "winter" },
            { id: "fr-uq-a1-15-5", level: "A1", prompt: "How do you say 'in summer'?", options: ["au été", "en été", "dans l'été", "en l'été"], answer: "en été" },
            { id: "fr-uq-a1-15-6", level: "A1", prompt: "How do you say 'in spring'?", options: ["en printemps", "au printemps", "dans printemps", "en le printemps"], answer: "au printemps" },
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
            "fr-v-a1-117", "fr-v-a1-118", "fr-v-a1-116",
            "fr-v-a1-106", "fr-v-a1-107", "fr-v-a1-108",
            "fr-v-a1-109", "fr-v-a1-110", "fr-v-a1-111",
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
            "fr-v-a1-120", "fr-v-a1-121", "fr-v-a1-68", "fr-v-a1-69",
            "fr-v-a1-70", "fr-v-a1-71", "fr-v-a1-72", "fr-v-a1-73", "fr-v-a1-74",
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
        title: "Adverbs, Frequency & Connectors",
        description: "Build more natural sentences: say where things are, when things happen, how often, and how to link ideas together with words like mais, parce que, and d'abord.",
        grammarIds: ["fr-g-a1-27", "fr-g-a1-28", "fr-g-a1-29"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-18-1", level: "A1", prompt: "What does 'là-bas' mean?", options: ["here", "there", "over there", "somewhere"], answer: "over there" },
            { id: "fr-uq-a1-18-2", level: "A1", prompt: "Where do frequency adverbs go in French?", options: ["Before the subject", "Before the verb", "After the conjugated verb", "At the end of the sentence"], answer: "After the conjugated verb" },
            { id: "fr-uq-a1-18-3", level: "A1", prompt: "Complete: 'Je ne mange ___ de viande.' (never)", options: ["toujours", "souvent", "jamais", "parfois"], answer: "jamais" },
            { id: "fr-uq-a1-18-4", level: "A1", prompt: "Which connector means 'because'?", options: ["mais", "donc", "parce que", "ensuite"], answer: "parce que" },
            { id: "fr-uq-a1-18-5", level: "A1", prompt: "What does 'déjà' mean?", options: ["still", "soon", "already", "never"], answer: "already" },
            { id: "fr-uq-a1-18-6", level: "A1", prompt: "Put in order: D'abord → ? → Enfin", options: ["ensuite", "donc", "mais", "ou"], answer: "ensuite" },
        ]
    },
    {
        id: "fr-a1-u19",
        level: "A1",
        order: 19,
        title: "Likes & Dislikes",
        description: "Learn to say what you like, dislike, and prefer — one of the most essential skills in everyday French conversation.",
        grammarIds: ["fr-g-a1-17"],
        vocabIds: [
            "fr-v-a1-65", "fr-v-a1-66", "fr-v-a1-75", "fr-v-a1-76",
            "fr-v-a1-78", "fr-v-a1-79", "fr-v-a1-82", "fr-v-a1-83",
            "fr-v-a1-152", "fr-v-a1-153", "fr-v-a1-154",
            "fr-v-a1-166", "fr-v-a1-167", "fr-v-a1-170", "fr-v-a1-172",
        ],
        verbIds: ["fr-vb-a1-6"],
        testQuestions: [
            { id: "fr-uq-a1-19-1", level: "A1", prompt: "How do you say 'I like French'?", options: ["J'aime bien un français.", "J'aime le français.", "J'aime de français.", "J'aime français."], answer: "J'aime le français." },
            { id: "fr-uq-a1-19-2", level: "A1", prompt: "How do you say 'She doesn't like sport'?", options: ["Elle n'aime pas le sport.", "Elle aime ne pas sport.", "Elle aime pas de sport.", "Elle n'aime pas de sport."], answer: "Elle n'aime pas le sport." },
            { id: "fr-uq-a1-19-3", level: "A1", prompt: "Which sentence correctly expresses a preference?", options: ["Je préfère un thé au café.", "Je préfère le thé au café.", "Je préfère thé de café.", "Je préfère de thé au café."], answer: "Je préfère le thé au café." },
            { id: "fr-uq-a1-19-4", level: "A1", prompt: "What does 'J'aime bien' express compared to 'J'aime'?", options: ["Stronger like", "Slightly softer like", "Dislike", "Indifference"], answer: "Slightly softer like" },
            { id: "fr-uq-a1-19-5", level: "A1", prompt: "How do you ask 'Do you like coffee?' (informal)?", options: ["Vous aimez le café?", "Tu aimes le café?", "Tu aimes un café?", "Tu aimes de café?"], answer: "Tu aimes le café?" },
            { id: "fr-uq-a1-19-6", level: "A1", prompt: "Complete: 'Il ___ les légumes.' (détester)", options: ["déteste", "détestes", "détestez", "détestent"], answer: "déteste" },
        ]
    },
    {
        id: "fr-a1-u20",
        level: "A1",
        order: 20,
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
            { id: "fr-uq-a1-20-1", level: "A1", prompt: "What does 'la mère' mean?", options: ["the sister", "the mother", "the daughter", "the grandmother"], answer: "the mother" },
            { id: "fr-uq-a1-20-2", level: "A1", prompt: "What does 'le frère' mean?", options: ["the father", "the son", "the brother", "the husband"], answer: "the brother" },
            { id: "fr-uq-a1-20-3", level: "A1", prompt: "What does 'les parents' mean?", options: ["the relatives", "the siblings", "the parents", "the grandparents"], answer: "the parents" },
            { id: "fr-uq-a1-20-4", level: "A1", prompt: "How do you say 'My family is big'?", options: ["Ma famille est grande.", "Mon famille est grand.", "La famille mienne est grande.", "Ma famille est gros."], answer: "Ma famille est grande." },
            { id: "fr-uq-a1-20-5", level: "A1", prompt: "Which possessive adjective replaces 'ma' before a vowel?", options: ["ma", "me", "mon", "mes"], answer: "mon" },
            { id: "fr-uq-a1-20-6", level: "A1", prompt: "How do you say 'his mother' and 'her mother'?", options: ["son mère / sa mère", "sa mère (both)", "son mère (both)", "leur mère (both)"], answer: "sa mère (both)" },
        ]
    },
    {
        id: "fr-a1-u21",
        level: "A1",
        order: 21,
        title: "Partitive Articles & Existence",
        description: "Learn to use partitive articles (du, de la, de l', des) to express some/any of something, and master il y a to say there is / there are.",
        grammarIds: ["fr-g-a1-31", "fr-g-a1-32"],
        vocabIds: [
            "fr-v-a1-63", "fr-v-a1-64", "fr-v-a1-67", "fr-v-a1-76", "fr-v-a1-77",
            "fr-v-a1-78", "fr-v-a1-79", "fr-v-a1-81"
        ],
        verbIds: ["fr-vb-a1-8", "fr-vb-a1-9"],
        testQuestions: [
            { id: "fr-uq-a1-21-1", level: "A1", prompt: "Which partitive article goes before a masculine noun? 'Je mange ___ pain.'", options: ["de la", "du", "des", "de l'"], answer: "du" },
            { id: "fr-uq-a1-21-2", level: "A1", prompt: "Choose the correct sentence: 'I drink some water.'", options: ["Je bois de l'eau.", "Je bois du eau.", "Je bois des eau.", "Je bois de eau."], answer: "Je bois de l'eau." },
            { id: "fr-uq-a1-21-3", level: "A1", prompt: "What is the partitive article for a feminine noun? 'Elle mange ___ viande.'", options: ["du", "des", "de l'", "de la"], answer: "de la" },
            { id: "fr-uq-a1-21-4", level: "A1", prompt: "How do you say 'There is a cat in the garden'?", options: ["Il est un chat dans le jardin.", "Il y a un chat dans le jardin.", "Il a un chat dans le jardin.", "C'est un chat dans le jardin."], answer: "Il y a un chat dans le jardin." },
            { id: "fr-uq-a1-21-5", level: "A1", prompt: "Which sentence correctly asks 'Is there any milk?' at A1 level?", options: ["Est-ce qu'il y a du lait ?", "Y a-t-il du lait ?", "Est-il du lait ?", "Il y a du lait est ?"], answer: "Est-ce qu'il y a du lait ?", hint: "At A1, use 'Est-ce qu'il y a...' to form questions with 'il y a'. The inversion form 'Y a-t-il' is introduced at A2." },
            { id: "fr-uq-a1-21-6", level: "A1", prompt: "After a negation, partitive articles change to ___. 'Je ne mange pas ___ sucre.'", options: ["du", "de", "des", "de la"], answer: "de" },
        ]
    },
    {
        id: "fr-a1-u22",
        level: "A1",
        order: 22,
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
            { id: "fr-uq-a1-22-1", level: "A1", prompt: "How do you ask for the bill?", options: ["La carte, s'il vous plaît.", "L'addition, s'il vous plaît.", "Le menu, s'il vous plaît.", "Commander, s'il vous plaît."], answer: "L'addition, s'il vous plaît." },
            { id: "fr-uq-a1-22-2", level: "A1", prompt: "What does 'le fromage' mean?", options: ["fish", "meat", "bread", "cheese"], answer: "cheese" },
            { id: "fr-uq-a1-22-3", level: "A1", prompt: "Which phrase is more polite when ordering?", options: ["Je veux un café.", "Je voudrais un café.", "Je fais un café.", "J'ai un café."], answer: "Je voudrais un café." },
            { id: "fr-uq-a1-22-4", level: "A1", prompt: "What does 'commander' mean?", options: ["to pay", "to leave", "to order", "to reserve"], answer: "to order" },
            { id: "fr-uq-a1-22-5", level: "A1", prompt: "What does 'délicieux' mean?", options: ["cheap", "delicious", "fresh", "cold"], answer: "delicious" },
            { id: "fr-uq-a1-22-6", level: "A1", prompt: "What does 'la carte' mean in a restaurant context?", options: ["the bill", "the address", "the menu", "the table"], answer: "the menu" },
        ]
    },
    {
        id: "fr-a1-u23",
        level: "A1",
        order: 23,
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
            { id: "fr-uq-a1-23-1", level: "A1", prompt: "What does 'la gare' mean?", options: ["the garage", "the airport", "the train station", "the bus stop"], answer: "the train station" },
            { id: "fr-uq-a1-23-2", level: "A1", prompt: "What does 'le centre-ville' mean?", options: ["city hall", "shopping centre", "town centre", "downtown park"], answer: "town centre" },
            { id: "fr-uq-a1-23-3", level: "A1", prompt: "What does 'la banque' mean?", options: ["the bakery", "the bank", "the bench", "the shop"], answer: "the bank" },
            { id: "fr-uq-a1-23-4", level: "A1", prompt: "How do you say 'I work in an office'?", options: ["Je travaille dans un magasin.", "Je travaille dans un bureau.", "Je travaille dans une école.", "Je travaille dans un hôpital."], answer: "Je travaille dans un bureau." },
            { id: "fr-uq-a1-23-5", level: "A1", prompt: "What does 'le parc' mean?", options: ["the car park", "the park", "the square", "the garden"], answer: "the park" },
            { id: "fr-uq-a1-23-6", level: "A1", prompt: "What does 'la rue' mean?", options: ["the road sign", "the roundabout", "the street", "the square"], answer: "the street" },
        ]
    },
    {
        id: "fr-a1-u24",
        level: "A1",
        order: 24,
        title: "Commands, Devoir & Venir",
        description: "Give instructions using the imperative, express obligation with devoir (must/have to), and talk about coming and recent past actions with venir.",
        grammarIds: ["fr-g-a1-33", "fr-g-a1-34", "fr-g-a1-35"],
        vocabIds: [
            "fr-v-a1-129", "fr-v-a1-130", "fr-v-a1-131", "fr-v-a1-132",
            "fr-v-a1-133", "fr-v-a1-134", "fr-v-a1-135", "fr-v-a1-136"
        ],
        verbIds: [
            "fr-vb-a1-3", "fr-vb-a1-4", "fr-vb-a1-5",
            "fr-vb-a1-10", "fr-vb-a1-20",
            "fr-vb-a1-21", "fr-vb-a1-22", "fr-vb-a1-23", "fr-vb-a1-24"
        ],
        testQuestions: [
            { id: "fr-uq-a1-24-1", level: "A1", prompt: "How do you form the tu-form imperative of parler?", options: ["Tu parles!", "Parles!", "Parle!", "Parlons!"], answer: "Parle!" },
            { id: "fr-uq-a1-24-2", level: "A1", prompt: "Translate: 'Let's eat!' (nous imperative)", options: ["Mangez!", "Mange!", "Mangeons!", "Tu manges!"], answer: "Mangeons!" },
            { id: "fr-uq-a1-24-3", level: "A1", prompt: "Complete with devoir: 'Tu ___ étudier ce soir.' (You must study tonight.)", options: ["veux", "peux", "dois", "fais"], answer: "dois" },
            { id: "fr-uq-a1-24-4", level: "A1", prompt: "How do you say 'She must leave now'?", options: ["Elle va partir maintenant.", "Elle doit partir maintenant.", "Elle peut partir maintenant.", "Elle veut partir maintenant."], answer: "Elle doit partir maintenant." },
            { id: "fr-uq-a1-24-5", level: "A1", prompt: "Which phrase uses venir to express the recent past?", options: ["Je viens manger.", "Je viens de manger.", "Je viens pour manger.", "Je viens en manger."], answer: "Je viens de manger." },
            { id: "fr-uq-a1-24-6", level: "A1", prompt: "Translate: 'They just arrived.' (recent past with venir)", options: ["Ils arrivent.", "Ils vont arriver.", "Ils viennent d'arriver.", "Ils sont venus arriver."], answer: "Ils viennent d'arriver." },
        ]
    },
    {
        id: "fr-a1-u25",
        level: "A1",
        order: 25,
        title: "Identity & Stressed Pronouns",
        description: "Distinguish between c'est (identifying) and il est/elle est (describing), and use stressed pronouns — moi, toi, lui, elle, nous, vous, eux, elles — for emphasis and after prepositions.",
        grammarIds: ["fr-g-a1-36", "fr-g-a1-37"],
        vocabIds: [
            "fr-v-a1-137", "fr-v-a1-138", "fr-v-a1-139", "fr-v-a1-140",
            "fr-v-a1-141", "fr-v-a1-142", "fr-v-a1-143", "fr-v-a1-144",
            "fr-v-a1-145", "fr-v-a1-146",
            "fr-v-a1-159", "fr-v-a1-160", "fr-v-a1-163", "fr-v-a1-164",
            "fr-v-a1-170", "fr-v-a1-171", "fr-v-a1-172"
        ],
        verbIds: ["fr-vb-a1-1"],
        testQuestions: [
            { id: "fr-uq-a1-25-1", level: "A1", prompt: "Choose the correct sentence to identify a person: 'This is my friend Marie.'", options: ["Il est mon amie Marie.", "C'est mon amie Marie.", "Elle est mon amie Marie.", "Voilà est mon amie Marie."], answer: "C'est mon amie Marie." },
            { id: "fr-uq-a1-25-2", level: "A1", prompt: "Which sentence describes a quality rather than identifying someone?", options: ["C'est médecin.", "Il est médecin.", "C'est un médecin.", "C'est le médecin."], answer: "Il est médecin." },
            { id: "fr-uq-a1-25-3", level: "A1", prompt: "What is the stressed pronoun for 'je'?", options: ["tu", "lui", "moi", "soi"], answer: "moi" },
            { id: "fr-uq-a1-25-4", level: "A1", prompt: "Complete: 'Ce livre est pour ___.' (this book is for him)", options: ["il", "le", "lui", "son"], answer: "lui" },
            { id: "fr-uq-a1-25-5", level: "A1", prompt: "Which stressed pronoun corresponds to 'ils'?", options: ["eux", "leur", "les", "ils"], answer: "eux" },
            { id: "fr-uq-a1-25-6", level: "A1", prompt: "How do you say 'Me, I prefer coffee.' (using a stressed pronoun for emphasis)?", options: ["Je préfère le café.", "Moi, je préfère le café.", "Moi je suis préfère le café.", "Je moi préfère le café."], answer: "Moi, je préfère le café." },
        ]
    },
    {
        id: "fr-a1-u26",
        level: "A1",
        order: 26,
        title: "Weather & Seasons",
        description: "Describe the weather and talk about the seasons. French weather uses impersonal il-constructions — il fait, il pleut, il y a — that are different from English.",
        grammarIds: ["fr-g-a1-30"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-26-1", level: "A1", prompt: "How do you say 'It's hot'?", options: ["Il est chaud.", "Il fait chaud.", "Il a chaud.", "Il va chaud."], answer: "Il fait chaud." },
            { id: "fr-uq-a1-26-2", level: "A1", prompt: "What is the verb for 'it's raining'?", options: ["il fait de la pluie", "il y a la pluie", "il pleut", "il neige"], answer: "il pleut" },
            { id: "fr-uq-a1-26-3", level: "A1", prompt: "How do you say 'in spring' in French?", options: ["en printemps", "au printemps", "dans printemps", "le printemps"], answer: "au printemps" },
            { id: "fr-uq-a1-26-4", level: "A1", prompt: "What does 'il y a du brouillard' mean?", options: ["it's windy", "it's foggy", "it's cloudy", "it's freezing"], answer: "it's foggy" },
            { id: "fr-uq-a1-26-5", level: "A1", prompt: "How do you ask 'What's the weather like?'", options: ["Comment est le temps?", "Quel temps fait-il?", "Qu'est-ce que il fait dehors?", "Comment va le climat?"], answer: "Quel temps fait-il?" },
            { id: "fr-uq-a1-26-6", level: "A1", prompt: "Which season uses 'en' (not 'au')?", options: ["printemps", "hiver", "été", "Both hiver and été"], answer: "Both hiver and été" },
        ]
    },
    {
        id: "fr-a1-u27",
        level: "A1",
        order: 27,
        title: "Bridge: Le Futur Proche",
        description: "Learn to talk about planned future actions using aller + infinitive — the most common future structure in French.",
        grammarIds: ["fr-g-a1-13"],
        vocabIds: [
            "fr-v-a1-42", "fr-v-a1-43", "fr-v-a1-44", "fr-v-a1-45", "fr-v-a1-46", "fr-v-a1-47",
            "fr-v-a1-156", "fr-v-a1-157", "fr-v-a1-158"
        ],
        verbIds: ["fr-vb-a1-3"],
        testQuestions: [
            { id: "fr-uq-a1-27-1", level: "A1", prompt: "How is the futur proche formed?", options: ["Present of avoir + infinitive", "Present of être + infinitive", "Present of aller + infinitive", "Present of faire + infinitive"], answer: "Present of aller + infinitive" },
            { id: "fr-uq-a1-27-2", level: "A1", prompt: "Complete: 'Je ___ manger ce soir.' (futur proche)", options: ["vais", "suis", "fais", "ai"], answer: "vais" },
            { id: "fr-uq-a1-27-3", level: "A1", prompt: "How do you say 'We are going to visit Paris'?", options: ["Nous visitons Paris.", "Nous allons visiter Paris.", "Nous faisons visiter Paris.", "Nous avons visité Paris."], answer: "Nous allons visiter Paris." },
            { id: "fr-uq-a1-27-4", level: "A1", prompt: "What does 'demain' mean?", options: ["yesterday", "now", "tomorrow", "soon"], answer: "tomorrow" },
            { id: "fr-uq-a1-27-5", level: "A1", prompt: "Complete: 'Il ___ pleuvoir demain.' (futur proche)", options: ["fait", "va", "est", "a"], answer: "va" },
            { id: "fr-uq-a1-27-6", level: "A1", prompt: "What does 'bientôt' mean?", options: ["already", "soon", "now", "still"], answer: "soon" },
        ]
    },
]
