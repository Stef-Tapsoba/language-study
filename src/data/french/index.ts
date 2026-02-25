// data/french/index.ts
import { LanguageModule } from "../../types"

const module: LanguageModule = {
    grammar: [
        {
            id: "fr-g-a1-1",
            level: "A1",
            title: "Subject Pronouns",
            explanation: "French subject pronouns are always required — unlike Spanish, you cannot drop them. They must match the subject in person and number.",
            examples: [
                { native: "Je parle français.", translation: "I speak French." },
                { native: "Tu es étudiant.", translation: "You are a student." },
                { native: "Il/Elle travaille ici.", translation: "He/She works here." },
                { native: "Nous habitons à Paris.", translation: "We live in Paris." },
                { native: "Ils/Elles sont amis.", translation: "They are friends." }
            ]
        },
        {
            id: "fr-g-a1-2",
            level: "A1",
            title: "Être (to be)",
            explanation: "Être is one of the most important irregular verbs. It is used for identity, origin, profession, and to form compound past tenses.",
            examples: [
                { native: "Je suis française.", translation: "I am French." },
                { native: "Il est médecin.", translation: "He is a doctor." },
                { native: "Nous sommes fatigués.", translation: "We are tired." },
                { native: "C'est une bonne idée.", translation: "It's a good idea." }
            ]
        },
        {
            id: "fr-g-a1-3",
            level: "A1",
            title: "Articles: le, la, l', les",
            explanation: "French nouns are either masculine or feminine. The definite article must agree with the noun. Before a vowel or silent h, le and la become l'.",
            examples: [
                { native: "le livre", translation: "the book (masc.)" },
                { native: "la maison", translation: "the house (fem.)" },
                { native: "l'ami", translation: "the friend (vowel)" },
                { native: "les enfants", translation: "the children (plural)" }
            ]
        },
        {
            id: "fr-g-a1-4",
            level: "A1",
            title: "Present Tense: Regular -er Verbs",
            explanation: "Regular -er verbs (the largest group in French) follow a predictable conjugation pattern. Remove -er and add the appropriate ending.",
            examples: [
                { native: "Je parle.", translation: "I speak." },
                { native: "Tu parles.", translation: "You speak." },
                { native: "Il parle.", translation: "He speaks." },
                { native: "Nous parlons.", translation: "We speak." },
                { native: "Vous parlez.", translation: "You (formal/pl.) speak." },
                { native: "Ils parlent.", translation: "They speak." }
            ]
        },
        {
            id: "fr-g-a1-5",
            level: "A1",
            title: "Negation with ne...pas",
            explanation: "To negate a verb in French, wrap it with ne...pas. In spoken French, the 'ne' is often dropped informally.",
            examples: [
                { native: "Je ne parle pas anglais.", translation: "I don't speak English." },
                { native: "Il n'est pas là.", translation: "He is not here." },
                { native: "Nous n'avons pas de voiture.", translation: "We don't have a car." }
            ]
        },
        {
            id: "fr-g-a2-1",
            level: "A2",
            title: "Passé Composé",
            explanation: "The passé composé is the most common past tense, used for completed actions. It's formed with avoir or être + past participle.",
            examples: [
                { native: "J'ai mangé une pomme.", translation: "I ate an apple." },
                { native: "Elle est arrivée en retard.", translation: "She arrived late." },
                { native: "Nous avons vu un film.", translation: "We watched a film." }
            ]
        },
        {
            id: "fr-g-a2-2",
            level: "A2",
            title: "Adjective Agreement",
            explanation: "French adjectives must agree in gender and number with the noun they describe. Most adjectives add -e for feminine and -s for plural.",
            examples: [
                { native: "un grand homme", translation: "a tall man" },
                { native: "une grande femme", translation: "a tall woman" },
                { native: "de grands enfants", translation: "tall children" }
            ]
        },
        {
            id: "fr-g-b1-1",
            level: "B1",
            title: "The Subjunctive (Subjonctif)",
            explanation: "The subjunctive is used after expressions of doubt, emotion, desire, and necessity. It follows 'que' in a dependent clause.",
            examples: [
                { native: "Il faut que tu viennes.", translation: "You must come." },
                { native: "Je veux qu'il soit heureux.", translation: "I want him to be happy." }
            ]
        }
    ],

    vocab: [
        { id: "fr-v-a1-1",  level: "A1", word: "Bonjour",         translation: "Hello / Good morning",  category: "Greetings", example: { native: "Bonjour, comment allez-vous?", translation: "Hello, how are you?" } },
        { id: "fr-v-a1-2",  level: "A1", word: "Au revoir",       translation: "Goodbye",                category: "Greetings", example: { native: "Au revoir, à demain!", translation: "Goodbye, see you tomorrow!" } },
        { id: "fr-v-a1-3",  level: "A1", word: "Merci",           translation: "Thank you",              category: "Greetings", example: { native: "Merci beaucoup.", translation: "Thank you very much." } },
        { id: "fr-v-a1-4",  level: "A1", word: "S'il vous plaît", translation: "Please (formal)",        category: "Greetings", example: { native: "Un café, s'il vous plaît.", translation: "A coffee, please." } },
        { id: "fr-v-a1-5",  level: "A1", word: "Maison",          translation: "House",                  category: "Places",    example: { native: "Ma maison est petite.", translation: "My house is small." } },
        { id: "fr-v-a1-6",  level: "A1", word: "Eau",             translation: "Water",                  category: "Food",      example: { native: "Je voudrais de l'eau.", translation: "I would like some water." } },
        { id: "fr-v-a1-7",  level: "A1", word: "Pain",            translation: "Bread",                  category: "Food",      example: { native: "Le pain est frais.", translation: "The bread is fresh." } },
        { id: "fr-v-a1-8",  level: "A1", word: "Ami / Amie",      translation: "Friend",                 category: "People",    example: { native: "C'est mon ami.", translation: "He is my friend." } },
        { id: "fr-v-a1-9",  level: "A1", word: "Travail",         translation: "Work / Job",             category: "Daily life", example: { native: "Mon travail est intéressant.", translation: "My job is interesting." } },
        { id: "fr-v-a1-10", level: "A1", word: "Ville",           translation: "City / Town",            category: "Places",    example: { native: "Paris est une grande ville.", translation: "Paris is a big city." } },
        { id: "fr-v-a1-11", level: "A1", word: "Famille",         translation: "Family",                 category: "People",    example: { native: "Ma famille est grande.", translation: "My family is big." } },
        { id: "fr-v-a1-12", level: "A1", word: "Jour",            translation: "Day",                    category: "Time",      example: { native: "Bonne journée!", translation: "Have a good day!" } },
        { id: "fr-v-a2-1",  level: "A2", word: "Cependant",       translation: "However",                category: "Connectors", example: { native: "C'est cher; cependant, c'est beau.", translation: "It's expensive; however, it's beautiful." } },
        { id: "fr-v-a2-2",  level: "A2", word: "Pourtant",        translation: "Yet / Nevertheless",     category: "Connectors", example: { native: "Il est fatigué, pourtant il travaille.", translation: "He is tired, yet he works." } }
    ],

    verbs: [
        {
            id: "fr-vb-a1-1",
            level: "A1",
            infinitive: "être",
            meaning: "to be",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "je",        form: "suis" },
                    { pronoun: "tu",        form: "es" },
                    { pronoun: "il/elle",   form: "est" },
                    { pronoun: "nous",      form: "sommes" },
                    { pronoun: "vous",      form: "êtes" },
                    { pronoun: "ils/elles", form: "sont" }
                ]
            }]
        },
        {
            id: "fr-vb-a1-2",
            level: "A1",
            infinitive: "avoir",
            meaning: "to have",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "je",        form: "ai" },
                    { pronoun: "tu",        form: "as" },
                    { pronoun: "il/elle",   form: "a" },
                    { pronoun: "nous",      form: "avons" },
                    { pronoun: "vous",      form: "avez" },
                    { pronoun: "ils/elles", form: "ont" }
                ]
            }]
        },
        {
            id: "fr-vb-a1-3",
            level: "A1",
            infinitive: "aller",
            meaning: "to go",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "je",        form: "vais" },
                    { pronoun: "tu",        form: "vas" },
                    { pronoun: "il/elle",   form: "va" },
                    { pronoun: "nous",      form: "allons" },
                    { pronoun: "vous",      form: "allez" },
                    { pronoun: "ils/elles", form: "vont" }
                ]
            }]
        },
        {
            id: "fr-vb-a1-4",
            level: "A1",
            infinitive: "faire",
            meaning: "to do / to make",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "je",        form: "fais" },
                    { pronoun: "tu",        form: "fais" },
                    { pronoun: "il/elle",   form: "fait" },
                    { pronoun: "nous",      form: "faisons" },
                    { pronoun: "vous",      form: "faites" },
                    { pronoun: "ils/elles", form: "font" }
                ]
            }]
        },
        {
            id: "fr-vb-a1-5",
            level: "A1",
            infinitive: "parler",
            meaning: "to speak / to talk",
            conjugations: [{
                tense: "Present",
                forms: [
                    { pronoun: "je",        form: "parle" },
                    { pronoun: "tu",        form: "parles" },
                    { pronoun: "il/elle",   form: "parle" },
                    { pronoun: "nous",      form: "parlons" },
                    { pronoun: "vous",      form: "parlez" },
                    { pronoun: "ils/elles", form: "parlent" }
                ]
            }]
        }
    ],

    placementQuestions: [
        { id: "fr-p-a1-1", level: "A1", prompt: "Comment dit-on 'hello' en français?", options: ["Merci", "Bonjour", "Au revoir", "S'il vous plaît"], answer: "Bonjour" },
        { id: "fr-p-a1-2", level: "A1", prompt: "Complete: 'Je ___ (être) étudiant.'", options: ["est", "es", "suis", "sommes"], answer: "suis" },
        { id: "fr-p-a2-1", level: "A2", prompt: "Complete (passé composé): 'Hier, elle ___ (arriver) à l'heure.'", options: ["arrivait", "a arrivé", "est arrivée", "arriva"], answer: "est arrivée" },
        { id: "fr-p-a2-2", level: "A2", prompt: "Quelle est la forme féminine de 'grand'?", options: ["grande", "grands", "grandez", "grandi"], answer: "grande" },
        { id: "fr-p-b1-1", level: "B1", prompt: "Complete (subjonctif): 'Il faut que tu ___ (venir).'", options: ["viens", "viendras", "viennes", "venais"], answer: "viennes" },
        { id: "fr-p-b1-2", level: "B1", prompt: "Que signifie 'cependant'?", options: ["therefore", "however", "although", "because"], answer: "however" },
        { id: "fr-p-b2-1", level: "B2", prompt: "Complete (conditionnel passé): 'Si j'avais su, je ___ venu.'", options: ["serai", "suis", "serais", "serez"], answer: "serais" },
        { id: "fr-p-b2-2", level: "B2", prompt: "Quel temps s'utilise pour exprimer une action en cours dans le passé?", options: ["Passé composé", "Imparfait", "Passé simple", "Plus-que-parfait"], answer: "Imparfait" },
        { id: "fr-p-c1-1", level: "C1", prompt: "Quelle phrase utilise correctement le subjonctif passé?", options: ["Je doute qu'il a fini.", "Je doute qu'il ait fini.", "Je doute qu'il aura fini.", "Je doute qu'il avait fini."], answer: "Je doute qu'il ait fini." },
        { id: "fr-p-c1-2", level: "C1", prompt: "Quel est l'équivalent de 'in spite of'?", options: ["grâce à", "à cause de", "malgré", "afin de"], answer: "malgré" }
    ],

    levelQuestions: [
        { id: "fr-lt-a1-1",  level: "A1", prompt: "What is 'goodbye' in French?", options: ["Bonjour", "Merci", "Au revoir", "Bonsoir"], answer: "Au revoir" },
        { id: "fr-lt-a1-2",  level: "A1", prompt: "What does 'maison' mean?", options: ["Car", "City", "House", "School"], answer: "House" },
        { id: "fr-lt-a1-3",  level: "A1", prompt: "Which article fits? '___ livre est intéressant.'", options: ["La", "Le", "Les", "L'"], answer: "Le" },
        { id: "fr-lt-a1-4",  level: "A1", prompt: "How do you say 'We are'?", options: ["Ils sont", "Vous êtes", "Nous sommes", "Je suis"], answer: "Nous sommes" },
        { id: "fr-lt-a1-5",  level: "A1", prompt: "Complete: 'Tu ___ (parler) bien.'", options: ["parle", "parles", "parlons", "parlent"], answer: "parles" },
        { id: "fr-lt-a1-6",  level: "A1", prompt: "What is 'water' in French?", options: ["Pain", "Lait", "Eau", "Jus"], answer: "Eau" },
        { id: "fr-lt-a1-7",  level: "A1", prompt: "Which verb means 'to have'?", options: ["Être", "Aller", "Avoir", "Faire"], answer: "Avoir" },
        { id: "fr-lt-a1-8",  level: "A1", prompt: "How do you say 'They go'?", options: ["Ils vont", "Ils vais", "Ils va", "Ils allons"], answer: "Ils vont" },
        { id: "fr-lt-a1-9",  level: "A1", prompt: "How do you negate in French?", options: ["Put 'non' before verb", "Wrap verb with ne...pas", "Put 'pas' at end", "Change the vowel"], answer: "Wrap verb with ne...pas" },
        { id: "fr-lt-a1-10", level: "A1", prompt: "What is the plural of 'le chat'?", options: ["la chats", "les chats", "les chat", "le chats"], answer: "les chats" },
        { id: "fr-lt-a1-11", level: "A1", prompt: "What does 'ami' mean?", options: ["Enemy", "Teacher", "Friend", "Brother"], answer: "Friend" },
        { id: "fr-lt-a1-12", level: "A1", prompt: "How do you say 'Good morning'?", options: ["Bonsoir", "Bonne nuit", "Bonjour", "Salut"], answer: "Bonjour" },
        { id: "fr-lt-a1-13", level: "A1", prompt: "Complete: 'Elle ___ (faire) du sport.'", options: ["fait", "fais", "faites", "font"], answer: "fait" },
        { id: "fr-lt-a1-14", level: "A1", prompt: "Article before a vowel: '___ ami'", options: ["Le", "La", "L'", "Les"], answer: "L'" },
        { id: "fr-lt-a1-15", level: "A1", prompt: "What does 'travail' mean?", options: ["Travel", "Work", "Train", "Dream"], answer: "Work" }
    ]
}

export default module
