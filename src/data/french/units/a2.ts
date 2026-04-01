import { LessonUnit } from "../../../types"

// A2 units — 14 units covering all A2 CEFR competencies.
// Updated (2026-03-26): wired readingIds/listeningIds/cultureIds throughout;
// expanded from 8 to 14 units to cover all 24 grammar lessons; grammar IDs
// updated to match repurposed lessons (no more duplicates with A1).

export const a2Units: LessonUnit[] = [
    {
        id: "fr-a2-u1",
        level: "A2",
        order: 1,
        title: "Talking About the Past",
        description: { native: "Master the passé composé for completed past actions with avoir and être." },
        grammarIds: ["fr-g-a2-1"],
        vocabIds: ["fr-v-a2-001", "fr-v-a2-057", "fr-v-a2-058", "fr-v-a2-061"],
        verbIds: ["fr-vb-a2-1", "fr-vb-a2-2"],
        readingIds: ["fr-r-a2-6"],
        listeningIds: ["fr-l-a2-4"],
        testQuestions: [
            { id: "fr-uq-a2-1-1", level: "A2", prompt: "Complete (passé composé): 'Hier, nous ___ au restaurant.' (manger)", options: ["mangeons", "mangions", "avons mangé", "avions mangé"], answer: "avons mangé" },
            { id: "fr-uq-a2-1-2", level: "A2", prompt: "Which auxiliary do movement verbs like 'partir' use in the passé composé?", options: ["avoir", "faire", "aller", "être"], answer: "être" },
            { id: "fr-uq-a2-1-3", level: "A2", prompt: "Complete: 'Elle ___ arrivée en retard.' (passé composé)", options: ["a", "est", "avait", "était"], answer: "est" },
            { id: "fr-uq-a2-1-4", level: "A2", prompt: "Complete: 'Ils ___ partis ce matin.' (passé composé)", options: ["ont", "sont", "avaient", "étaient"], answer: "sont" },
            { id: "fr-uq-a2-1-5", level: "A2", prompt: "What does 'hier' mean?", options: ["today", "tomorrow", "yesterday", "before"], answer: "yesterday" },
        ]
    },
    {
        id: "fr-a2-u2",
        level: "A2",
        order: 2,
        title: "Describing the Past",
        description: { native: "Use the imparfait to describe habitual past actions, background states, and ongoing situations." },
        grammarIds: ["fr-g-a2-2"],
        vocabIds: ["fr-v-a2-004", "fr-v-a2-005", "fr-v-a2-006", "fr-v-a2-007", "fr-v-a2-062", "fr-v-a2-063"],
        verbIds: ["fr-vb-a2-3"],
        listeningIds: ["fr-l-a2-3"],
        testQuestions: [
            { id: "fr-uq-a2-2-1", level: "A2", prompt: "How do you say 'She used to work in Paris'?", options: ["Elle a travaillé à Paris.", "Elle travaillait à Paris.", "Elle travaille à Paris.", "Elle va travailler à Paris."], answer: "Elle travaillait à Paris." },
            { id: "fr-uq-a2-2-2", level: "A2", prompt: "What is the imparfait stem for most verbs?", options: ["the infinitive minus -r", "the nous present form minus -ons", "the il/elle present form", "the past participle"], answer: "the nous present form minus -ons" },
            { id: "fr-uq-a2-2-3", level: "A2", prompt: "Complete (imparfait): 'Quand j'étais enfant, je ___ au foot.' (jouer)", options: ["joue", "ai joué", "jouais", "jouera"], answer: "jouais" },
            { id: "fr-uq-a2-2-4", level: "A2", prompt: "What does 'cependant' mean?", options: ["therefore", "however", "although", "because"], answer: "however" },
            { id: "fr-uq-a2-2-5", level: "A2", prompt: "Which verb has an irregular imparfait stem (ét-)?", options: ["avoir", "aller", "être", "faire"], answer: "être" },
        ]
    },
    {
        id: "fr-a2-u3",
        level: "A2",
        order: 3,
        title: "Object Pronouns",
        description: { native: "Replace nouns with direct object pronouns (le/la/les), indirect object pronouns (lui/leur), and the pronouns y and en." },
        grammarIds: ["fr-g-a2-3", "fr-g-a2-11", "fr-g-a2-12"],
        vocabIds: ["fr-v-a2-008", "fr-v-a2-050", "fr-v-a2-051", "fr-v-a2-053", "fr-v-a2-054"],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-3-1", level: "A2", prompt: "Replace 'Je vois Marie' with a pronoun: 'Je ___ vois.'", options: ["lui", "leur", "la", "le"], answer: "la" },
            { id: "fr-uq-a2-3-2", level: "A2", prompt: "Replace 'Je parle à Marc': 'Je ___ parle.'", options: ["le", "la", "lui", "leur"], answer: "lui" },
            { id: "fr-uq-a2-3-3", level: "A2", prompt: "Replace 'Je vais à Paris': 'J'___ vais.'", options: ["en", "y", "le", "lui"], answer: "y" },
            { id: "fr-uq-a2-3-4", level: "A2", prompt: "Replace 'Je veux du café': 'J'___ veux.'", options: ["le", "y", "en", "lui"], answer: "en" },
            { id: "fr-uq-a2-3-5", level: "A2", prompt: "Replace 'Je téléphone à mes parents': 'Je ___ téléphone.'", options: ["les", "leur", "lui", "y"], answer: "leur" },
        ]
    },
    {
        id: "fr-a2-u4",
        level: "A2",
        order: 4,
        title: "Describing & Comparing",
        description: { native: "Use comparatives and superlatives to compare people and things, and learn which adjectives go before the noun." },
        grammarIds: ["fr-g-a2-5", "fr-g-a2-23"],
        vocabIds: ["fr-v-a2-071", "fr-v-a2-072", "fr-v-a2-073", "fr-v-a2-074", "fr-v-a2-075", "fr-v-a2-076", "fr-v-a2-077", "fr-v-a2-135", "fr-v-a2-136", "fr-v-a2-137", "fr-v-a2-138", "fr-v-a2-139"],
        verbIds: [],
        readingIds: ["fr-r-a2-4"],
        testQuestions: [
            { id: "fr-uq-a2-4-1", level: "A2", prompt: "How do you say 'Paris is bigger than Lyon'?", options: ["Paris est aussi grand que Lyon.", "Paris est moins grand que Lyon.", "Paris est plus grand que Lyon.", "Paris est le plus grand de Lyon."], answer: "Paris est plus grand que Lyon." },
            { id: "fr-uq-a2-4-2", level: "A2", prompt: "What is the superlative of 'bon'?", options: ["plus bon", "très bon", "le meilleur", "bien"], answer: "le meilleur" },
            { id: "fr-uq-a2-4-3", level: "A2", prompt: "Which adjective goes BEFORE the noun?", options: ["rouge", "intéressant", "grand", "français"], answer: "grand" },
            { id: "fr-uq-a2-4-4", level: "A2", prompt: "'Un homme grand' vs 'un grand homme' — what does 'grand' mean in 'un grand homme'?", options: ["tall", "heavy", "great", "old"], answer: "great" },
            { id: "fr-uq-a2-4-5", level: "A2", prompt: "Complete: 'Elle est ___ intelligente ___ lui.' (as ... as)", options: ["plus / que", "moins / que", "aussi / que", "autant / que"], answer: "aussi / que" },
        ]
    },
    {
        id: "fr-a2-u5",
        level: "A2",
        order: 5,
        title: "Everyday Situations",
        description: { native: "Handle real-world interactions using il faut, modal verbs in context, and key vocabulary for shopping, health, and directions." },
        grammarIds: ["fr-g-a2-6"],
        vocabIds: [
            "fr-v-a2-019", "fr-v-a2-020", "fr-v-a2-027", "fr-v-a2-028", "fr-v-a2-029", "fr-v-a2-030",
            "fr-v-a2-086", "fr-v-a2-087", "fr-v-a2-088", "fr-v-a2-089", "fr-v-a2-090"
        ],
        verbIds: ["fr-vb-a2-4"],
        listeningIds: ["fr-l-a2-2", "fr-l-a2-5"],
        testQuestions: [
            { id: "fr-uq-a2-5-1", level: "A2", prompt: "How do you say 'You need to book in advance' (impersonally)?", options: ["Tu dois réserver à l'avance.", "Il faut réserver à l'avance.", "On doit réserver à l'avance.", "Vous pouvez réserver à l'avance."], answer: "Il faut réserver à l'avance." },
            { id: "fr-uq-a2-5-2", level: "A2", prompt: "How do you say 'She managed to finish on time'?", options: ["Elle a voulu finir à temps.", "Elle a dû finir à temps.", "Elle a pu finir à temps.", "Elle pouvait finir à temps."], answer: "Elle a pu finir à temps." },
            { id: "fr-uq-a2-5-3", level: "A2", prompt: "What does 'tout droit' mean?", options: ["turn right", "straight ahead", "at the end", "on the left"], answer: "straight ahead" },
            { id: "fr-uq-a2-5-4", level: "A2", prompt: "What does 'le rendez-vous' mean?", options: ["a date", "an appointment", "a round trip", "a waiting room"], answer: "an appointment" },
            { id: "fr-uq-a2-5-5", level: "A2", prompt: "Complete: 'J'ai ___ partir tôt ce matin.' (had to)", options: ["pu", "voulu", "dû", "su"], answer: "dû" },
        ]
    },
    {
        id: "fr-a2-u6",
        level: "A2",
        order: 6,
        title: "Future Plans & Conditions",
        description: { native: "Talk about future plans using the futur simple and form real conditional sentences with si + present + future." },
        grammarIds: ["fr-g-a2-7", "fr-g-a2-20"],
        vocabIds: ["fr-v-a2-091", "fr-v-a2-092", "fr-v-a2-093", "fr-v-a2-094", "fr-v-a2-095", "fr-v-a2-059"],
        verbIds: ["fr-vb-a2-5"],
        readingIds: ["fr-r-a2-7"],
        listeningIds: ["fr-l-a2-1"],
        cultureIds: ["fr-c-a2-2"],
        testQuestions: [
            { id: "fr-uq-a2-6-1", level: "A2", prompt: "Complete (futur simple): 'Demain, il ___ beau.' (faire)", options: ["va faire", "faisait", "fera", "fait"], answer: "fera" },
            { id: "fr-uq-a2-6-2", level: "A2", prompt: "Which verb has the irregular futur stem 'ser-'?", options: ["savoir", "sortir", "être", "avoir"], answer: "être" },
            { id: "fr-uq-a2-6-3", level: "A2", prompt: "Complete the si clause: 'Si tu ___, on ira au cinéma.' (venir)", options: ["viendras", "venais", "viens", "es venu"], answer: "viens" },
            { id: "fr-uq-a2-6-4", level: "A2", prompt: "What does 'à mon avis' mean?", options: ["in my opinion", "on my way", "to my advantage", "from my experience"], answer: "in my opinion" },
            { id: "fr-uq-a2-6-5", level: "A2", prompt: "Complete: 'Si vous arrivez en retard, ___ -nous.' (téléphoner — imperative)", options: ["téléphonez", "téléphonerez", "téléphoniez", "téléphonez-y"], answer: "téléphonez" },
        ]
    },
    {
        id: "fr-a2-u7",
        level: "A2",
        order: 7,
        title: "Personal Messages & Relative Clauses",
        description: { native: "Write short personal messages using relative clauses (qui/que) and demonstrative pronouns (celui/celle). Read and write about French culture." },
        grammarIds: ["fr-g-a2-8", "fr-g-a2-9"],
        vocabIds: [
            "fr-v-a2-096", "fr-v-a2-097", "fr-v-a2-098", "fr-v-a2-099", "fr-v-a2-100",
            "fr-v-a2-101", "fr-v-a2-102", "fr-v-a2-103"
        ],
        verbIds: [],
        readingIds: ["fr-r-a2-2", "fr-r-a2-3"],
        cultureIds: ["fr-c-a2-1"],
        testQuestions: [
            { id: "fr-uq-a2-7-1", level: "A2", prompt: "Fill in the relative pronoun: 'Le livre ___ j'ai lu est excellent.'", options: ["qui", "que", "dont", "où"], answer: "que" },
            { id: "fr-uq-a2-7-2", level: "A2", prompt: "Fill in the relative pronoun: 'La femme ___ parle est ma professeure.'", options: ["que", "dont", "qui", "où"], answer: "qui" },
            { id: "fr-uq-a2-7-3", level: "A2", prompt: "Complete: 'Quel gâteau veux-tu ? ___ au chocolat.' (the chocolate one)", options: ["Ce", "Cet", "Celui", "Cette"], answer: "Celui" },
            { id: "fr-uq-a2-7-4", level: "A2", prompt: "How do you start an informal letter to a friend?", options: ["Monsieur / Madame,", "Cher / Chère [name],", "À qui de droit,", "Veuillez agréer..."], answer: "Cher / Chère [name]," },
            { id: "fr-uq-a2-7-5", level: "A2", prompt: "What does 'Je t'embrasse' mean at the end of a message?", options: ["See you soon", "Yours sincerely", "Hugs / Love", "Best regards"], answer: "Hugs / Love" },
        ]
    },
    {
        id: "fr-a2-u8",
        level: "A2",
        order: 8,
        title: "Narrating the Past",
        description: { native: "Combine passé composé and imparfait to tell a full story. Use reflexive verbs in the past and understand when to choose each tense." },
        grammarIds: ["fr-g-a2-10", "fr-g-a2-24"],
        vocabIds: [
            "fr-v-a2-011", "fr-v-a2-012", "fr-v-a2-016",
            "fr-v-a2-104", "fr-v-a2-105", "fr-v-a2-106", "fr-v-a2-107"
        ],
        verbIds: ["fr-vb-a2-6"],
        readingIds: ["fr-r-a2-1"],
        testQuestions: [
            { id: "fr-uq-a2-8-1", level: "A2", prompt: "Which tense? 'Quand j'étais enfant, je ___ souvent au parc.' (aller — habitual)", options: ["suis allé", "allais", "vais", "irai"], answer: "allais" },
            { id: "fr-uq-a2-8-2", level: "A2", prompt: "Which tense? 'Hier, elle ___ ses clés.' (perdre — single event)", options: ["perdait", "perd", "a perdu", "va perdre"], answer: "a perdu" },
            { id: "fr-uq-a2-8-3", level: "A2", prompt: "Complete: 'Il ___ beau quand nous ___ arrivés.' (faire / être)", options: ["faisait / sommes", "a fait / arrivions", "faisait / arrivions", "a fait / sommes"], answer: "faisait / sommes" },
            { id: "fr-uq-a2-8-4", level: "A2", prompt: "Complete: 'Ce matin, je ___ à six heures.' (se lever — passé composé)", options: ["me levais", "me suis levé(e)", "me lève", "me levai"], answer: "me suis levé(e)" },
            { id: "fr-uq-a2-8-5", level: "A2", prompt: "Complete: 'Je ___ quand le téléphone ___.' (dormir-imparfait / sonner-PC)", options: ["dormais / a sonné", "dormait / sonnait", "ai dormi / sonnait", "dormais / sonnait"], answer: "dormais / a sonné" },
        ]
    },
    {
        id: "fr-a2-u9",
        level: "A2",
        order: 9,
        title: "Quantity, Food & Negation",
        description: { native: "Express quantities precisely (beaucoup de, trop de, assez de) and use extended negation (ne…plus, jamais, rien, personne) to say what isn't the case." },
        grammarIds: ["fr-g-a2-4", "fr-g-a2-13"],
        vocabIds: [
            "fr-v-a2-078", "fr-v-a2-079", "fr-v-a2-080", "fr-v-a2-081", "fr-v-a2-082",
            "fr-v-a2-083", "fr-v-a2-084", "fr-v-a2-085",
            "fr-v-a2-140", "fr-v-a2-141", "fr-v-a2-142", "fr-v-a2-143", "fr-v-a2-144"
        ],
        verbIds: [],
        cultureIds: ["fr-c-a2-3"],
        testQuestions: [
            { id: "fr-uq-a2-9-1", level: "A2", prompt: "Complete: 'Il boit ___ café.' (a lot of)", options: ["beaucoup du", "beaucoup de", "beaucoup des", "beaucoup d'un"], answer: "beaucoup de" },
            { id: "fr-uq-a2-9-2", level: "A2", prompt: "Complete: 'Elle ne mange ___ de viande.' (no longer)", options: ["jamais", "rien", "plus", "personne"], answer: "plus" },
            { id: "fr-uq-a2-9-3", level: "A2", prompt: "In the passé composé, where does 'rien' go?", options: ["Before the auxiliary", "After the past participle", "Between auxiliary and past participle", "At the end of the sentence"], answer: "Between auxiliary and past participle" },
            { id: "fr-uq-a2-9-4", level: "A2", prompt: "In the passé composé, where does 'personne' go?", options: ["Before the auxiliary", "Between auxiliary and past participle", "After the past participle", "At the start"], answer: "After the past participle" },
            { id: "fr-uq-a2-9-5", level: "A2", prompt: "Complete: '___ ne m'a appelé.' (Nobody)", options: ["Rien", "Jamais", "Personne", "Nulle"], answer: "Personne" },
        ]
    },
    {
        id: "fr-a2-u10",
        level: "A2",
        order: 10,
        title: "Health & Ongoing Actions",
        description: { native: "Talk about health and the body. Use venir de to describe what just happened and être en train de to say what's happening right now." },
        grammarIds: ["fr-g-a2-15"],
        vocabIds: [
            "fr-v-a2-042", "fr-v-a2-043", "fr-v-a2-044", "fr-v-a2-045", "fr-v-a2-046",
            "fr-v-a2-047", "fr-v-a2-048", "fr-v-a2-049", "fr-v-a2-086", "fr-v-a2-090"
        ],
        verbIds: [],
        readingIds: ["fr-r-a2-5"],
        listeningIds: ["fr-l-a2-6"],
        testQuestions: [
            { id: "fr-uq-a2-10-1", level: "A2", prompt: "How do you say 'I have just eaten'?", options: ["Je viens manger.", "Je viens de manger.", "Je suis en train de manger.", "J'ai mangé."], answer: "Je viens de manger." },
            { id: "fr-uq-a2-10-2", level: "A2", prompt: "How do you say 'She is in the middle of working'?", options: ["Elle vient de travailler.", "Elle va travailler.", "Elle est en train de travailler.", "Elle travaillait."], answer: "Elle est en train de travailler." },
            { id: "fr-uq-a2-10-3", level: "A2", prompt: "Complete: 'Ils ___ d'arriver.' (have just arrived)", options: ["viennent", "vient", "sont", "ont"], answer: "viennent" },
            { id: "fr-uq-a2-10-4", level: "A2", prompt: "What does 'avoir mal à la tête' mean?", options: ["to be confused", "to have a headache", "to feel dizzy", "to have a sore throat"], answer: "to have a headache" },
            { id: "fr-uq-a2-10-5", level: "A2", prompt: "What does 'la fièvre' mean?", options: ["cold", "cough", "fever", "pain"], answer: "fever" },
        ]
    },
    {
        id: "fr-a2-u11",
        level: "A2",
        order: 11,
        title: "Home, Habits & Duration",
        description: { native: "Talk about your home and living situation. Use 'on' naturally as informal 'we', and depuis + present to describe how long something has been going on." },
        grammarIds: ["fr-g-a2-18", "fr-g-a2-19"],
        vocabIds: [
            "fr-v-a2-009", "fr-v-a2-108", "fr-v-a2-109", "fr-v-a2-110", "fr-v-a2-111",
            "fr-v-a2-112", "fr-v-a2-113", "fr-v-a2-114", "fr-v-a2-115",
            "fr-v-a2-060"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-11-1", level: "A2", prompt: "How do you say 'In France, people eat at noon' using 'on'?", options: ["Les Français mangent à midi.", "On mange à midi en France.", "Nous mangeons à midi.", "Ils mangent à midi."], answer: "On mange à midi en France." },
            { id: "fr-uq-a2-11-2", level: "A2", prompt: "How do you say 'I have been living here for three years' (and still am)?", options: ["J'ai habité ici depuis trois ans.", "J'habite ici depuis trois ans.", "J'habitais ici depuis trois ans.", "J'ai habité ici il y a trois ans."], answer: "J'habite ici depuis trois ans." },
            { id: "fr-uq-a2-11-3", level: "A2", prompt: "What does 'le loyer' mean?", options: ["lease", "landlord", "rent", "deposit"], answer: "rent" },
            { id: "fr-uq-a2-11-4", level: "A2", prompt: "What does 'déménager' mean?", options: ["to renovate", "to furnish", "to move house", "to sell"], answer: "to move house" },
            { id: "fr-uq-a2-11-5", level: "A2", prompt: "Complete: 'Elle attend ___ une heure.' (for an hour — ongoing)", options: ["pendant", "depuis", "il y a", "pour"], answer: "depuis" },
        ]
    },
    {
        id: "fr-a2-u12",
        level: "A2",
        order: 12,
        title: "Travel, Geography & Questions",
        description: { native: "Use the right preposition with countries and cities, and ask questions correctly — with inversion, est-ce que, and question words." },
        grammarIds: ["fr-g-a2-17", "fr-g-a2-16"],
        vocabIds: [
            "fr-v-a2-021", "fr-v-a2-022", "fr-v-a2-023", "fr-v-a2-024", "fr-v-a2-025", "fr-v-a2-026",
            "fr-v-a2-129", "fr-v-a2-130", "fr-v-a2-131", "fr-v-a2-132", "fr-v-a2-133", "fr-v-a2-134"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-12-1", level: "A2", prompt: "Complete: 'Elle habite ___ France.'", options: ["au", "à", "en", "aux"], answer: "en" },
            { id: "fr-uq-a2-12-2", level: "A2", prompt: "Complete: 'Il travaille ___ Japon.'", options: ["en", "à", "aux", "au"], answer: "au" },
            { id: "fr-uq-a2-12-3", level: "A2", prompt: "Complete: 'Ils voyagent ___ États-Unis.'", options: ["au", "en", "à", "aux"], answer: "aux" },
            { id: "fr-uq-a2-12-4", level: "A2", prompt: "How do you say 'Where do you live?' using inversion?", options: ["Où tu habites ?", "Est-ce que tu habites où ?", "Où habites-tu ?", "Comment tu habites ?"], answer: "Où habites-tu ?" },
            { id: "fr-uq-a2-12-5", level: "A2", prompt: "Why is '-t-' added in 'Parle-t-il' ?", options: ["For emphasis", "Because the verb ends in a vowel", "Because the subject is formal", "It is always added with il/elle"], answer: "Because the verb ends in a vowel" },
        ]
    },
    {
        id: "fr-a2-u13",
        level: "A2",
        order: 13,
        title: "Skills, Adverbs & Leisure",
        description: { native: "Distinguish savoir from connaître, form adverbs with -ment, and talk about hobbies and leisure activities." },
        grammarIds: ["fr-g-a2-14", "fr-g-a2-21"],
        vocabIds: [
            "fr-v-a2-116", "fr-v-a2-117", "fr-v-a2-118", "fr-v-a2-119", "fr-v-a2-120", "fr-v-a2-121",
            "fr-v-a2-122", "fr-v-a2-123", "fr-v-a2-124", "fr-v-a2-125", "fr-v-a2-126", "fr-v-a2-127", "fr-v-a2-128"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-13-1", level: "A2", prompt: "Complete: 'Tu ___ nager ?' (know how to)", options: ["connais", "sais", "peux", "veux"], answer: "sais" },
            { id: "fr-uq-a2-13-2", level: "A2", prompt: "Complete: 'Je ___ bien Paris.' (am familiar with)", options: ["sais", "connais", "peux", "veux"], answer: "connais" },
            { id: "fr-uq-a2-13-3", level: "A2", prompt: "Form the adverb from 'lent' (slow):", options: ["lentment", "lentement", "lentiment", "lently"], answer: "lentement" },
            { id: "fr-uq-a2-13-4", level: "A2", prompt: "Form the adverb from 'récent':", options: ["récentement", "récement", "récemment", "récentment"], answer: "récemment" },
            { id: "fr-uq-a2-13-5", level: "A2", prompt: "What does 's'entraîner' mean?", options: ["to travel", "to train / practise", "to participate", "to compete"], answer: "to train / practise" },
        ]
    },
    {
        id: "fr-a2-u14",
        level: "A2",
        order: 14,
        title: "Politeness, Wishes & Review",
        description: { native: "Use the conditional présent to make polite requests and express hypothetical wishes. Consolidate all A2 grammar before the level test." },
        grammarIds: ["fr-g-a2-22"],
        vocabIds: [
            "fr-v-a2-031", "fr-v-a2-032", "fr-v-a2-033", "fr-v-a2-034",
            "fr-v-a2-035", "fr-v-a2-036", "fr-v-a2-037", "fr-v-a2-038", "fr-v-a2-039", "fr-v-a2-040"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-14-1", level: "A2", prompt: "What is the polite way to say 'I want a coffee'?", options: ["Je veux un café.", "Je voudrais un café.", "Je vais prendre un café.", "J'ai besoin d'un café."], answer: "Je voudrais un café." },
            { id: "fr-uq-a2-14-2", level: "A2", prompt: "Complete: 'Pourriez-vous parler ___ lentement ?' (more slowly)", options: ["aussi", "trop", "plus", "moins"], answer: "plus" },
            { id: "fr-uq-a2-14-3", level: "A2", prompt: "Complete: 'À ta place, je lui ___.' (parler — conditional)", options: ["parle", "parlais", "parlerais", "parlerai"], answer: "parlerais" },
            { id: "fr-uq-a2-14-4", level: "A2", prompt: "What does 'on devrait partir' mean?", options: ["we must leave", "we should leave", "we are going to leave", "we left"], answer: "we should leave" },
            { id: "fr-uq-a2-14-5", level: "A2", prompt: "Complete: 'Il ___ trouver un nouvel emploi.' (would like)", options: ["voudrait", "veut", "voulez", "voulait"], answer: "voudrait" },
        ]
    },
]
