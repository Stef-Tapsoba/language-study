import { GrammarLesson } from "../../../../types"

export const foundationsLessons: GrammarLesson[] = [
    {
        id: "it-g-a1-1",
        level: "A1",
        title: "Subject Pronouns",
        explanation: "Italian subject pronouns are often omitted because the verb ending identifies the subject. However, they can be used for emphasis or clarity. The pronouns are: io (I), tu (you informal), lui (he), lei (she), noi (we), voi (you plural), loro (they). Note: 'Lei' (capital) is also used as the formal 'you' in singular.",
        paradigmTable: {
            pronouns: ["singular", "plural"],
            verbs: [
                { label: "1st person", forms: ["io — I", "noi — we"] },
                { label: "2nd person informal", forms: ["tu — you", "voi — you all"] },
                { label: "2nd person formal", forms: ["Lei — you (formal)", "Loro — you all (formal, rare)"] },
                { label: "3rd person masc.", forms: ["lui — he", "loro — they"] },
                { label: "3rd person fem.", forms: ["lei — she", "loro — they"] },
            ],
        },
        notes: [
            { type: "tip", content: "Subject pronouns are usually omitted in Italian — the verb ending identifies the person. \"Parlo italiano\" already means \"I speak Italian\". Add the pronoun only for emphasis or contrast." },
            { type: "warning", content: "Lei (capital L) = formal \"you\" singular. lei (lowercase) = she. The capital letter is the only distinction in writing. In speech, context makes it clear." },
            { type: "culture", content: "The formal Lei is used with strangers, elders, and in professional situations. Tu is for friends, family, peers, and children. When in doubt, use Lei — it's always respectful." },
        ],
        examples: [
            { native: "Io parlo italiano.", translation: "I speak Italian." },
            { native: "Tu sei studentessa.", translation: "You are a student (fem.)." },
            { native: "Lui lavora qui.", translation: "He works here." },
            { native: "Noi viviamo a Roma.", translation: "We live in Rome." },
            { native: "Loro sono amici.", translation: "They are friends." }
        ],
        inlineVocab: [
            { word: "parlo", translation: "I speak" },
            { word: "studentessa", translation: "female student" },
            { word: "lavora", translation: "he/she works" },
            { word: "viviamo", translation: "we live" },
            { word: "amici", translation: "friends" },
        ]
    },
    {
        id: "it-g-a1-2",
        level: "A1",
        title: "Essere (to be)",
        explanation: `**Essere** is one of the two key verbs meaning 'to be'. It is used for identity, nationality, profession, origin, and time. Sono serves double duty — it is both the io and the loro form.`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei (+ Lei formale)", "noi", "voi", "loro"],
            verbs: [
                { label: "essere", forms: ["sono", "sei", "è", "siamo", "siete", "sono"] },
                { label: "", forms: ["I am", "you are", "he / she is", "we are", "you all are", "they are"] },
            ],
        },
        rules: [
            {
                condition: "Identity, nationality, profession, origin",
                result: "Use essere",
                examples: [
                    { native: "Sono italiano.", translation: "I'm Italian." },
                    { native: "Sei studentessa?", translation: "Are you a student?" },
                    { native: "Lei è medico.", translation: "She is a doctor." },
                    { native: "Siamo di Roma.", translation: "We're from Rome." },
                ],
            },
            {
                condition: "Time (telling the time)",
                result: "Use essere",
                examples: [
                    { native: "Sono le otto.", translation: "It's eight o'clock." },
                    { native: "È l'una.", translation: "It's one o'clock." },
                    { native: "Sono le tre e mezza.", translation: "It's half past three." },
                ],
            },
            {
                condition: "Description with adjectives",
                result: "Essere + adjective (adjective must agree)",
                examples: [
                    { native: "Siamo stanchi.", translation: "We're tired." },
                    { native: "È molto gentile.", translation: "He/she is very kind." },
                    { native: "Sei pronto?", translation: "Are you ready?" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Sono is used for both io (I am) and loro (they are) — the same form, different persons. Context makes it clear." },
            { type: "warning", content: "Unlike Spanish, Italian has only ONE verb meaning \"to be\" — essere covers all uses (identity, location, states, description). There is no separate stare-for-states equivalent at A1." },
            { type: "forward-ref", content: "Essere is also the auxiliary for many past tenses (passato prossimo with intransitive and reflexive verbs). Full treatment at A2.", refId: "it-g-a1-13" },
        ],
        fixedPhrases: [
            { native: "Sono italiano / italiana.", translation: "I'm Italian.", note: "Standard nationality statement — no article." },
            { native: "Come stai? / Come sta?", translation: "How are you? (informal / formal)", note: "stare (not essere) for health/feelings at A1." },
            { native: "Sono di…", translation: "I'm from…", note: "essere for origin." },
            { native: "Siamo pronti.", translation: "We're ready.", note: "essere + adjective." },
        ],
        examples: [
            { native: "Sono italiano.", translation: "I am Italian." },
            { native: "Tu sei studentessa?", translation: "Are you a student?" },
            { native: "Lei è medico.", translation: "She is a doctor." },
            { native: "Siamo stanchi.", translation: "We are tired." },
            { native: "Sono le otto.", translation: "It is eight o'clock." }
        ],
        inlineVocab: [
            { word: "italiano", translation: "Italian" },
            { word: "medico", translation: "doctor" },
            { word: "stanchi", translation: "tired" },
        ]
    },
    {
        id: "it-g-a1-3",
        level: "A1",
        title: "Avere (to have)",
        explanation: `Avere means 'to have' and is used for possession, age, and many expressions. The 'h' is always silent — ho, hai, ha, hanno are spelled with H only to distinguish them from the words o (or), ai (to the), a (to/at), anno (year).

Key expressions with avere: avere fame (to be hungry), avere sete (to be thirsty), avere N anni (to be N years old), avere freddo/caldo (to be cold/hot).`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [
                { label: "avere", forms: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"] },
                { label: "", forms: ["I have", "you have", "he / she has", "we have", "you all have", "they have"] },
            ],
        },
        rules: [
            {
                condition: "Possession",
                result: "avere + noun",
                examples: [
                    { native: "Ho un cane.", translation: "I have a dog." },
                    { native: "Hai una macchina?", translation: "Do you have a car?" },
                ],
            },
            {
                condition: "Age",
                result: "avere + number + anni",
                examples: [
                    { native: "Ho vent'anni.", translation: "I'm twenty." },
                    { native: "Quanti anni hai?", translation: "How old are you?" },
                ],
            },
            {
                condition: "Physical/emotional states with avere",
                result: "avere + noun (not essere + adjective)",
                examples: [
                    { native: "Ho fame.", translation: "I'm hungry." },
                    { native: "Abbiamo sete.", translation: "We're thirsty." },
                    { native: "Ha freddo.", translation: "He/she is cold." },
                ],
            },
            {
                condition: "The silent H",
                result: "Ho, hai, ha, hanno always silent H — never pronounced",
                examples: [
                    { native: "Ho", translation: "'o' sound" },
                    { native: "Hai", translation: "'ai' sound" },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "Age uses avere, not essere. Never say \"Sono vent'anni\" — always \"Ho vent'anni.\" (I have twenty years.)" },
            { type: "warning", content: "The H in ho, hai, ha, hanno is always silent. These forms are spelled with H only to distinguish them from o (or), ai (to the), a (to/at), anno (year)." },
            { type: "tip", content: "Italian physical sensations use avere + noun: ho fame (I'm hungry — I have hunger), ho sete (I'm thirsty), ho freddo (I'm cold), ho caldo (I'm hot). Exactly like Spanish tener expressions." },
        ],
        fixedPhrases: [
            { native: "Ho fame. / Ho sete.", translation: "I'm hungry. / I'm thirsty.", note: "avere + noun for physical states." },
            { native: "Quanti anni hai?", translation: "How old are you?", note: "avere for age." },
            { native: "Ho vent'anni.", translation: "I'm twenty.", note: "ho + number + anni." },
            { native: "Non ho idea.", translation: "I have no idea.", note: "Non ho idea = I don't know (lit.)." },
        ],
        examples: [
            { native: "Ho un cane.", translation: "I have a dog." },
            { native: "Quanti anni hai?", translation: "How old are you?" },
            { native: "Lei ha una macchina.", translation: "She has a car." },
            { native: "Abbiamo fame.", translation: "We are hungry." },
            { native: "Ho vent'anni.", translation: "I am twenty years old." }
        ],
        inlineVocab: [
            { word: "cane", translation: "dog" },
            { word: "macchina", translation: "car" },
            { word: "fame", translation: "hunger" },
            { word: "sete", translation: "thirst" },
            { word: "freddo", translation: "cold" },
            { word: "caldo", translation: "hot / warm" },
        ]
    },
    {
        id: "it-g-a1-4",
        level: "A1",
        title: "Definite Articles",
        explanation: `Italian definite articles (= 'the') change based on gender, number, and the first letter of the following noun. The key is the FIRST SOUND of the word after the article — not just its spelling. S followed by another consonant (studente, spagnolo, stadio) always triggers lo/gli.`,
        paradigmTable: {
            pronouns: ["masculine singular", "masculine plural", "feminine singular", "feminine plural"],
            verbs: [
                { label: "before most consonants", forms: ["il", "i", "la", "le"] },
                { label: "before s+cons, z, gn, ps, x (masc.)", forms: ["lo", "gli", "—", "—"] },
                { label: "before vowels", forms: ["l'", "gli", "l'", "le"] },
            ],
        },
        rules: [
            {
                condition: "Masculine singular before most consonants",
                result: "Use il",
                examples: [
                    { native: "il libro", translation: "the book" },
                    { native: "il cane", translation: "the dog" },
                    { native: "il padre", translation: "the father" },
                ],
            },
            {
                condition: "Masculine singular before s+consonant, z, gn, ps, x",
                result: "Use lo",
                examples: [
                    { native: "lo studente", translation: "the student" },
                    { native: "lo zaino", translation: "the backpack" },
                    { native: "lo zio", translation: "the uncle" },
                    { native: "lo gnocco", translation: "the gnocco" },
                ],
            },
            {
                condition: "Before any vowel (masc. or fem. singular)",
                result: "Use l'",
                examples: [
                    { native: "l'amico", translation: "the friend (masc.)" },
                    { native: "l'amica", translation: "the friend (fem.)" },
                    { native: "l'uomo", translation: "the man" },
                    { native: "l'ora", translation: "the hour" },
                ],
            },
            {
                condition: "Masculine plural: i (of il) or gli (of lo/l')",
                result: "I libri / gli studenti / gli amici",
                examples: [
                    { native: "i cani", translation: "the dogs" },
                    { native: "i padri", translation: "the fathers" },
                    { native: "gli zii", translation: "the uncles" },
                    { native: "gli amici", translation: "the friends (masc.)" },
                ],
            },
            {
                condition: "Feminine plural",
                result: "Always le — regardless of initial letter",
                examples: [
                    { native: "le case", translation: "the houses" },
                    { native: "le amiche", translation: "the friends (fem.)" },
                    { native: "le ore", translation: "the hours" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "The key to choosing the right article is the FIRST SOUND of the following word, not just its spelling. S followed by another consonant (studente, spagnolo, stadio) always triggers lo/gli." },
            { type: "warning", content: "Italian has the most complex article system of the Romance languages. The good news: once you know how to choose the definite article, the partitive (del/dello/della...) and contracted prepositions (al/allo/alla...) follow the same pattern automatically." },
            { type: "forward-ref", content: "Contractions with a (al, allo, alla, all', ai, agli, alle) and di (del, dello, della...) follow the same pattern — introduced with prepositions in lesson it-g-a1-14.", refId: "it-g-a1-14" },
        ],
        examples: [
            { native: "il libro", translation: "the book (masc., starts with l)" },
            { native: "lo studente", translation: "the student (masc., starts with st-)" },
            { native: "l'amico", translation: "the friend (masc., starts with vowel)" },
            { native: "la casa", translation: "the house (fem., starts with consonant)" },
            { native: "gli studenti / le case", translation: "the students / the houses (plurals)" }
        ],
        inlineVocab: [
            { word: "libro", translation: "book" },
            { word: "studente", translation: "student" },
            { word: "amico", translation: "friend (masc.)" },
            { word: "padre", translation: "father" },
            { word: "madre", translation: "mother" },
            { word: "uomo", translation: "man" },
            { word: "ora", translation: "hour / time" },
        ]
    },
    {
        id: "it-g-a1-5",
        level: "A1",
        title: "Indefinite Articles",
        explanation: `Indefinite articles (= 'a' / 'an') follow the same sound-based logic as definite articles. Uno mirrors lo: if a noun takes lo, the indefinite is uno. Un' (feminine before vowel) always has an apostrophe; un (masculine before vowel) does not: un amico (m.) vs un'amica (f.).

For 'some' (plural), use dei / degli / delle: dei libri, degli amici, delle case.`,
        paradigmTable: {
            pronouns: ["masculine", "feminine"],
            verbs: [
                { label: "before most consonants", forms: ["un", "una"] },
                { label: "before s+cons, z, gn, ps, x", forms: ["uno", "—"] },
                { label: "before vowels", forms: ["un", "un'"] },
            ],
        },
        rules: [
            {
                condition: "Masculine before most consonants and before vowels",
                result: "Use un",
                examples: [
                    { native: "un libro", translation: "a book" },
                    { native: "un amico", translation: "a friend (masc.)" },
                    { native: "un cane", translation: "a dog" },
                ],
            },
            {
                condition: "Masculine before s+consonant, z, gn, ps, x",
                result: "Use uno",
                examples: [
                    { native: "uno studente", translation: "a student" },
                    { native: "uno zaino", translation: "a backpack" },
                    { native: "uno zio", translation: "an uncle" },
                ],
            },
            {
                condition: "Feminine before a consonant",
                result: "Use una",
                examples: [
                    { native: "una casa", translation: "a house" },
                    { native: "una pizza", translation: "a pizza" },
                    { native: "una ragazza", translation: "a girl" },
                ],
            },
            {
                condition: "Feminine before a vowel",
                result: "Use un' (apostrophe)",
                examples: [
                    { native: "un'amica", translation: "a friend (fem.)" },
                    { native: "un'ora", translation: "an hour" },
                    { native: "un'idea", translation: "an idea" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Uno mirrors lo (definite): if the noun takes lo, the indefinite is uno. If it takes il, use un. If la, use una. If l' for feminine, use un'. The logic is the same." },
            { type: "warning", content: "Un' (feminine before vowel) always has an apostrophe. Un (masculine before vowel) has no apostrophe: un amico (m.) vs un'amica (f.). This difference is crucial for written Italian." },
            { type: "forward-ref", content: "The plural of indefinite articles (some) = partitive articles: dei/degli/delle — introduced in lesson it-g-a1-30.", refId: "it-g-a1-30" },
        ],
        examples: [
            { native: "un libro", translation: "a book (masc.)" },
            { native: "uno studente", translation: "a student (masc., starts with st-)" },
            { native: "una casa", translation: "a house (fem.)" },
            { native: "un'amica", translation: "a friend (fem., starts with vowel)" },
            { native: "Vorrei un caffè.", translation: "I would like a coffee." }
        ],
        inlineVocab: [
            { word: "pizza", translation: "pizza" },
            { word: "amica", translation: "friend (fem.)" },
            { word: "caffè", translation: "coffee" },
            { word: "zaino", translation: "backpack" },
            { word: "zio", translation: "uncle" },
        ]
    },
    {
        id: "it-g-a1-12",
        level: "A1",
        title: "Adjective Agreement",
        explanation: `Italian adjectives must agree with the noun in gender and number. Most follow the 4-form -o/-a/-i/-e pattern; adjectives ending in -e are simpler — same form for both genders, just add -i for plural.

POSITION — adjectives usually come AFTER the noun: un ragazzo alto, una pizza buona. Common short adjectives (bello, vecchio, grande, buono, cattivo, primo) often come BEFORE. Position can shift meaning: un grande uomo = a great man · un uomo grande = a big/tall man.`,
        paradigmTable: {
            pronouns: ["masc. singular", "fem. singular", "masc. plural", "fem. plural"],
            verbs: [
                { label: "-o/-a/-i/-e (most adj.)", forms: ["rosso", "rossa", "rossi", "rosse"] },
                { label: "-e/-i (invariable for gender)", forms: ["interessante", "interessante", "interessanti", "interessanti"] },
                { label: "bello (pre-noun, mirrors article)", forms: ["bel/bello/bell'", "bella/bell'", "bei/begli", "belle"] },
                { label: "buono (pre-noun, mirrors indef.)", forms: ["buon/buono", "buona/buon'", "buoni", "buone"] },
            ],
        },
        rules: [
            {
                condition: "Adjective ending in -o",
                result: "Changes: -o (m.sg) / -a (f.sg) / -i (m.pl) / -e (f.pl)",
                examples: [
                    { native: "rosso / rossa / rossi / rosse", translation: "red (m.sg / f.sg / m.pl / f.pl)" },
                    { native: "alto / alta / alti / alte", translation: "tall (m.sg / f.sg / m.pl / f.pl)" },
                ],
            },
            {
                condition: "Adjective ending in -e",
                result: "Same form for masculine and feminine; add -i for plural",
                examples: [
                    { native: "interessante → interessanti", translation: "interesting (sg → pl)" },
                    { native: "grande → grandi", translation: "big/great (sg → pl)" },
                ],
            },
            {
                condition: "Position: after the noun (default)",
                result: "Most adjectives follow the noun they describe",
                examples: [
                    { native: "un ragazzo alto", translation: "a tall boy" },
                    { native: "una casa grande", translation: "a big house" },
                    { native: "libri interessanti", translation: "interesting books" },
                ],
            },
            {
                condition: "Position: before the noun (short common adjectives)",
                result: "bello, vecchio, grande, buono, cattivo, primo, ultimo can precede",
                examples: [
                    { native: "un bel ragazzo", translation: "a handsome boy" },
                    { native: "una bella giornata", translation: "a beautiful day" },
                    { native: "un buon vino", translation: "a good wine" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Adjectives ending in -e are the most learner-friendly — no gender change needed. Only singular → plural: grande → grandi, elegante → eleganti." },
            { type: "warning", content: "When bello and buono go BEFORE a noun, they change form like the articles (bello mirrors lo/gli/l'...; buono mirrors uno/un...). When they go AFTER the noun, they use regular 4-form agreement: bello/bella/belli/belle." },
            { type: "forward-ref", content: "Adjective agreement applies to past participles with essere verbs (passato prossimo). Full treatment at A2.", refId: "it-g-a1-2" },
        ],
        examples: [
            { native: "un libro interessante / una storia interessante", translation: "an interesting book / an interesting story" },
            { native: "Il ragazzo alto / La ragazza alta", translation: "The tall boy / The tall girl" },
            { native: "I libri rossi / Le case rosse", translation: "The red books / The red houses" },
            { native: "un bel ragazzo / una bella ragazza", translation: "a handsome boy / a beautiful girl (before noun)" },
            { native: "un grande uomo / un uomo grande", translation: "a great man / a big man (position changes meaning)" }
        ],
        inlineVocab: [
            { word: "rosso", translation: "red" },
            { word: "storia", translation: "story / history" },
            { word: "ragazzo", translation: "boy" },
            { word: "ragazza", translation: "girl" },
            { word: "alto", translation: "tall" },
            { word: "interessante", translation: "interesting" },
            { word: "bello", translation: "beautiful / handsome" },
            { word: "vecchio", translation: "old" },
            { word: "grande", translation: "big / great" },
            { word: "buono", translation: "good" },
            { word: "cattivo", translation: "bad" },
        ]
    },
]
