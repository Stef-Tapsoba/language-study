import { LessonUnit } from "../../../types"

// A2 units — expanded to 7 units covering all A2 competency goals.
// Units 1–4 unchanged. Units 5–7 added below.

export const a2Units: LessonUnit[] = [
    {
        id: "fr-a2-u1",
        level: "A2",
        order: 1,
        title: "Talking About the Past",
        description: "Master the passé composé for completed past actions with avoir and être.",
        grammarIds: ["fr-g-a2-1"],
        vocabIds: ["fr-v-a2-001", "fr-v-a2-002", "fr-v-a2-003"],
        verbIds: ["fr-vb-a2-1", "fr-vb-a2-2"],
        testQuestions: [
            { id: "fr-uq-a2-1-1", level: "A2", prompt: "Complete (passé composé): 'Hier, nous ___ au restaurant.' (manger)", options: ["mangeons", "mangions", "avons mangé", "avions mangé"], answer: "avons mangé" },
            { id: "fr-uq-a2-1-2", level: "A2", prompt: "Which auxiliary verb do movement verbs like 'partir' use in the passé composé?", options: ["avoir", "faire", "aller", "être"], answer: "être" },
            { id: "fr-uq-a2-1-3", level: "A2", prompt: "Complete: 'Elle ___ arrivée en retard.' (passé composé)", options: ["a", "est", "avait", "était"], answer: "est" },
            { id: "fr-uq-a2-1-4", level: "A2", prompt: "Complete: 'Ils ___ partis ce matin.' (passé composé)", options: ["ont", "sont", "avaient", "étaient"], answer: "sont" },
            { id: "fr-uq-a2-1-5", level: "A2", prompt: "What does 'le voyage' mean?", options: ["adventure", "holiday", "trip", "journey abroad"], answer: "trip" },
        ]
    },
    {
        id: "fr-a2-u2",
        level: "A2",
        order: 2,
        title: "Describing the Past",
        description: "Use the imparfait to describe habitual past actions, background states, and ongoing situations.",
        grammarIds: ["fr-g-a2-2"],
        vocabIds: ["fr-v-a2-004", "fr-v-a2-005", "fr-v-a2-006", "fr-v-a2-007"],
        verbIds: ["fr-vb-a2-3"],
        testQuestions: [
            { id: "fr-uq-a2-2-1", level: "A2", prompt: "How do you say 'She used to work in Paris'?", options: ["Elle a travaillé à Paris.", "Elle travaillait à Paris.", "Elle travaille à Paris.", "Elle va travailler à Paris."], answer: "Elle travaillait à Paris." },
            { id: "fr-uq-a2-2-2", level: "A2", prompt: "What is the imparfait stem for most verbs?", options: ["the infinitive minus -r", "the nous present form minus -ons", "the il/elle present form", "the past participle"], answer: "the nous present form minus -ons" },
            { id: "fr-uq-a2-2-3", level: "A2", prompt: "Complete (imparfait): 'Quand j'étais enfant, je ___ au foot.' (jouer)", options: ["joue", "ai joué", "jouais", "jouera"], answer: "jouais" },
            { id: "fr-uq-a2-2-4", level: "A2", prompt: "What does 'cependant' mean?", options: ["therefore", "however", "although", "because"], answer: "however" },
            { id: "fr-uq-a2-2-5", level: "A2", prompt: "What does 'pourtant' mean?", options: ["therefore", "because", "yet / nevertheless", "if"], answer: "yet / nevertheless" },
        ]
    },
    {
        id: "fr-a2-u3",
        level: "A2",
        order: 3,
        title: "Object Pronouns & Partitive Articles",
        description: "Learn to replace nouns with direct object pronouns and express quantities with partitive articles.",
        grammarIds: ["fr-g-a2-3", "fr-g-a2-4"],
        vocabIds: ["fr-v-a2-008", "fr-v-a2-009", "fr-v-a2-010"],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-3-1", level: "A2", prompt: "Replace 'Je vois Marie' with a pronoun: 'Je ___ vois.'", options: ["lui", "leur", "la", "le"], answer: "la" },
            { id: "fr-uq-a2-3-2", level: "A2", prompt: "What is the partitive article for a masculine noun?", options: ["de la", "de l'", "des", "du"], answer: "du" },
            { id: "fr-uq-a2-3-3", level: "A2", prompt: "After negation, 'du/de la/des' becomes...?", options: ["d'un", "de", "du/de la", "des"], answer: "de" },
            { id: "fr-uq-a2-3-4", level: "A2", prompt: "Complete: 'Il ___ aide beaucoup.' (nous)", options: ["me", "vous", "nous", "leur"], answer: "nous" },
            { id: "fr-uq-a2-3-5", level: "A2", prompt: "Complete: 'Je bois ___ eau.' (partitive)", options: ["du", "de la", "de l'", "des"], answer: "de l'" },
        ]
    },
    {
        id: "fr-a2-u4",
        level: "A2",
        order: 4,
        title: "Describing & Comparing",
        description: "Use adjective agreement confidently and begin comparing people and things.",
        grammarIds: ["fr-g-a2-5"],
        vocabIds: ["fr-v-a2-008", "fr-v-a2-009", "fr-v-a2-010", "fr-v-a2-071", "fr-v-a2-072", "fr-v-a2-073", "fr-v-a2-074", "fr-v-a2-075"],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-4-1", level: "A2", prompt: "Feminine form of 'nouveau'?", options: ["nouvelles", "nouveaux", "nouvelle", "nouveau"], answer: "nouvelle" },
            { id: "fr-uq-a2-4-2", level: "A2", prompt: "How do you say 'She arrived late' (passé composé)?", options: ["Elle a arrivé tard.", "Elle est arrivée tard.", "Elle arrivait tard.", "Elle arrive tard."], answer: "Elle est arrivée tard." },
            { id: "fr-uq-a2-4-3", level: "A2", prompt: "What does 'la réunion' mean?", options: ["reunion", "party", "meeting", "gathering"], answer: "meeting" },
            { id: "fr-uq-a2-4-4", level: "A2", prompt: "What does 'la chance' mean?", options: ["change", "choice", "luck", "chance meeting"], answer: "luck" },
            { id: "fr-uq-a2-4-5", level: "A2", prompt: "What does 'le quartier' mean?", options: ["quarter hour", "quarter of something", "neighbourhood", "town square"], answer: "neighbourhood" },
        ]
    },

    // ── NEW UNITS ─────────────────────────────────────────────────────────────

    {
        id: "fr-a2-u5",
        level: "A2",
        order: 5,
        title: "Everyday Situations",
        description: "Handle real-world interactions: shopping transactions, health appointments, and asking for directions using modal verbs pouvoir, vouloir, and devoir.",
        grammarIds: ["fr-g-a2-6"],
        vocabIds: [
            "fr-v-a2-019", "fr-v-a2-020", "fr-v-a2-027", "fr-v-a2-028", "fr-v-a2-029", "fr-v-a2-030",
            "fr-v-a2-086", "fr-v-a2-087", "fr-v-a2-088", "fr-v-a2-089", "fr-v-a2-090"
        ],
        verbIds: ["fr-vb-a2-4"],
        testQuestions: [
            { id: "fr-uq-a2-5-1", level: "A2", prompt: "How do you say 'I need to see a doctor'?", options: ["Je dois voir un médecin.", "Je veux voir un médecin.", "Je peux voir un médecin.", "Je sais voir un médecin."], answer: "Je dois voir un médecin." },
            { id: "fr-uq-a2-5-2", level: "A2", prompt: "Complete: 'Est-ce que tu ___ m'aider, s'il te plaît ?' (can)", options: ["dois", "veux", "peux", "sais"], answer: "peux" },
            { id: "fr-uq-a2-5-3", level: "A2", prompt: "What does 'le rendez-vous' mean?", options: ["a date on a calendar", "a meeting / appointment", "a round trip", "a waiting room"], answer: "a meeting / appointment" },
            { id: "fr-uq-a2-5-4", level: "A2", prompt: "Translate: 'You must turn left at the lights.'", options: ["Tu peux tourner à gauche aux feux.", "Tu dois tourner à gauche aux feux.", "Tu veux tourner à gauche aux feux.", "Tu vas tourner à gauche aux feux."], answer: "Tu dois tourner à gauche aux feux." },
            { id: "fr-uq-a2-5-5", level: "A2", prompt: "What does 'tout droit' mean in directions?", options: ["turn right", "straight ahead", "at the end of the road", "on the left"], answer: "straight ahead" },
            { id: "fr-uq-a2-5-6", level: "A2", prompt: "How do you ask 'Where is the nearest pharmacy?'", options: ["Où est la pharmacie la plus proche ?", "Quelle est la pharmacie ?", "Comment est la pharmacie ?", "Est-ce qu'il y a une pharmacie ?"], answer: "Où est la pharmacie la plus proche ?" },
        ]
    },
    {
        id: "fr-a2-u6",
        level: "A2",
        order: 6,
        title: "Plans, Preferences & Opinions",
        description: "Talk about future plans using the futur proche, express personal preferences, and give simple opinions using common opinion phrases.",
        grammarIds: ["fr-g-a2-7"],
        vocabIds: [
            "fr-v-a2-091", "fr-v-a2-092", "fr-v-a2-093", "fr-v-a2-094", "fr-v-a2-095",
            "fr-v-a2-064", "fr-v-a2-065", "fr-v-a2-066", "fr-v-a2-067", "fr-v-a2-068"
        ],
        verbIds: ["fr-vb-a2-5"],
        testQuestions: [
            { id: "fr-uq-a2-6-1", level: "A2", prompt: "How do you say 'We are going to visit Paris next week'?", options: ["Nous visitons Paris la semaine prochaine.", "Nous allons visiter Paris la semaine prochaine.", "Nous visiterons Paris la semaine prochaine.", "Nous avons visité Paris la semaine prochaine."], answer: "Nous allons visiter Paris la semaine prochaine." },
            { id: "fr-uq-a2-6-2", level: "A2", prompt: "Which structure forms the futur proche?", options: ["avoir + infinitive", "être + past participle", "aller (present) + infinitive", "vouloir + infinitive"], answer: "aller (present) + infinitive" },
            { id: "fr-uq-a2-6-3", level: "A2", prompt: "How do you say 'I prefer tea to coffee'?", options: ["J'aime le thé et le café.", "Je préfère le thé au café.", "Je voudrais du thé.", "Je déteste le café."], answer: "Je préfère le thé au café." },
            { id: "fr-uq-a2-6-4", level: "A2", prompt: "What does 'à mon avis' mean?", options: ["in my opinion", "on my way", "to my advantage", "as I remember"], answer: "in my opinion" },
            { id: "fr-uq-a2-6-5", level: "A2", prompt: "Complete: 'Je trouve ce film ___.' (I find this film boring)", options: ["ennuyeux", "passionnant", "drôle", "effrayant"], answer: "ennuyeux" },
            { id: "fr-uq-a2-6-6", level: "A2", prompt: "What does 'je suis d'accord' mean?", options: ["I disagree", "I don't mind", "I agree", "I'm not sure"], answer: "I agree" },
        ]
    },
    {
        id: "fr-a2-u7",
        level: "A2",
        order: 7,
        title: "Personal Messages & Social Language",
        description: "Write short personal messages, invitations, and notes. Use relative clauses with qui and que, and demonstrative adjectives ce/cet/cette/ces to write clearly and naturally.",
        grammarIds: ["fr-g-a2-8", "fr-g-a2-9"],
        vocabIds: [
            "fr-v-a2-096", "fr-v-a2-097", "fr-v-a2-098", "fr-v-a2-099", "fr-v-a2-100",
            "fr-v-a2-101", "fr-v-a2-102", "fr-v-a2-103"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a2-7-1", level: "A2", prompt: "Fill in the relative pronoun: 'Le livre ___ j'ai lu est excellent.'", options: ["qui", "que", "dont", "où"], answer: "que" },
            { id: "fr-uq-a2-7-2", level: "A2", prompt: "Fill in the relative pronoun: 'La femme ___ parle est ma professeure.'", options: ["que", "dont", "qui", "où"], answer: "qui" },
            { id: "fr-uq-a2-7-3", level: "A2", prompt: "What is the demonstrative adjective before a masculine noun starting with a vowel?", options: ["ce", "cet", "cette", "ces"], answer: "cet" },
            { id: "fr-uq-a2-7-4", level: "A2", prompt: "How do you start an informal letter or message to a friend?", options: ["Monsieur / Madame,", "Cher / Chère [name],", "À qui de droit,", "Veuillez agréer..."], answer: "Cher / Chère [name]," },
            { id: "fr-uq-a2-7-5", level: "A2", prompt: "What does 'Je t'embrasse' mean at the end of a message?", options: ["See you soon", "Yours sincerely", "Hugs / Love", "Best regards"], answer: "Hugs / Love" },
            { id: "fr-uq-a2-7-6", level: "A2", prompt: "Complete: '___ soir, je suis libre.' (this evening)", options: ["Ce", "Cet", "Cette", "Ces"], answer: "Ce" },
        ]
    },
    {
        id: "fr-a2-u8",
        level: "A2",
        order: 8,
        title: "Narrating the Past — Combining Both Tenses",
        description: "Put passé composé and imparfait together to tell a full story. Learn to choose between them in the same sentence: completed events (passé composé) vs background, states, and habits (imparfait). Includes reflexive verbs in the past.",
        grammarIds: ["fr-g-a2-1", "fr-g-a2-2", "fr-g-a2-10"],
        vocabIds: [
            "fr-v-a2-011", "fr-v-a2-012", "fr-v-a2-016",
            "fr-v-a2-104", "fr-v-a2-105", "fr-v-a2-106", "fr-v-a2-107"
        ],
        verbIds: ["fr-vb-a2-6"],
        testQuestions: [
            {
                id: "fr-uq-a2-8-1", level: "A2",
                prompt: "Which tense fits? 'Quand j'étais enfant, je ___ souvent au parc.' (to go — habitual)",
                options: ["suis allé", "allais", "vais", "irai"],
                answer: "allais",
                hint: "Habitual past action → imparfait. 'Souvent' (often) signals repetition."
            },
            {
                id: "fr-uq-a2-8-2", level: "A2",
                prompt: "Which tense fits? 'Hier, elle ___ ses clés.' (to lose — single completed event)",
                options: ["perdait", "perd", "a perdu", "va perdre"],
                answer: "a perdu",
                hint: "Single completed event at a specific time → passé composé. 'Hier' signals this."
            },
            {
                id: "fr-uq-a2-8-3", level: "A2",
                prompt: "Complete the story: 'Il ___ (faire) beau quand nous ___ (arriver).'",
                options: [
                    "faisait / sommes arrivés",
                    "a fait / arrivions",
                    "faisait / arrivions",
                    "a fait / sommes arrivés"
                ],
                answer: "faisait / sommes arrivés",
                hint: "Background state (weather) → imparfait. Completed arrival event → passé composé."
            },
            {
                id: "fr-uq-a2-8-4", level: "A2",
                prompt: "Complete: 'Ce matin, je ___ à six heures.' (se lever — passé composé)",
                options: ["me levais", "me suis levé(e)", "me lève", "me levai"],
                answer: "me suis levé(e)",
                hint: "Reflexive verbs use être in the passé composé: me suis levé(e)."
            },
            {
                id: "fr-uq-a2-8-5", level: "A2",
                prompt: "Complete: 'Elles ___ très fatiguées hier soir.' (être — background state)",
                options: ["ont été", "sont", "étaient", "seront"],
                answer: "étaient",
                hint: "A background state or description in the past → imparfait."
            },
            {
                id: "fr-uq-a2-8-6", level: "A2",
                prompt: "Complete: 'Pendant qu'il ___ (dormir), le téléphone ___ (sonner).'",
                options: [
                    "a dormi / sonnait",
                    "dormait / a sonné",
                    "dormait / sonnait",
                    "a dormi / a sonné"
                ],
                answer: "dormait / a sonné",
                hint: "Ongoing background action (sleeping) → imparfait. Interrupting event (phone rang) → passé composé."
            },
        ]
    },
]
