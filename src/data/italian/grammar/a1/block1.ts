import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
    {
        id: "it-g-a1-17",
        level: "A1",
        exerciseType: "dictation" as const,
        title: "Italian Pronunciation — Key Rules",
        explanation: `Italian is highly phonetic — almost every letter is pronounced and spelling reflects pronunciation closely. The main challenges are the c/g rules before different vowels, double consonants, and stress patterns.

THE C/G RULE — the most important rule in Italian pronunciation

C before a, o, u → hard k sound: cane, cosa, cuore, amico
C before e, i → ch sound (like English 'ch' in 'church'): cena, cinema, piacere
CH (before e, i) → hard k sound: che, chi, perché (the h restores the hard sound)

G before a, o, u → hard g sound: gatto, governo, gusto
G before e, i → soft j sound (like English 's' in 'measure'): gelato, giro, gentile
GH (before e, i) → hard g sound: ghetto, spaghetti (the h restores the hard sound)
GL before i → like the 'lli' in 'million': figlio, aglio, gli
GN → like the 'ny' in 'canyon': gnocchi, bagno, signore

SC before e, i → sh sound: scena, sciare, pesce
SC before a, o, u → sk sound: scarpa, scuola, disco

DOUBLE CONSONANTS
Double consonants are pronounced with noticeably more length than single ones. This distinction changes meaning:
  pala (shovel) vs palla (ball)
  nono (ninth) vs nonno (grandfather)
  casa (house) vs cassa (cash register)

STRESS
Most Italian words are stressed on the second-to-last syllable: par-LA-re, stu-DEN-te, be-LLO.
Some are stressed on the third-to-last: MED-i-co, SIM-pa-ti-co, TE-le-fo-no.
Words with a written accent are always stressed on that syllable: città, caffè, perché.`,
        examples: [
            { native: "cane (KA-ne) / cena (CHA-na)", speakText: "cane, cena", translation: "C before a = hard k / C before e = ch sound" },
            { native: "perché (per-KE) / che (KE)", speakText: "perché, che", translation: "CH before e/i always restores the hard k sound" },
            { native: "gelato (je-LA-to) / gatto (GA-to)", speakText: "gelato, gatto", translation: "G before e = soft j / G before a = hard g" },
            { native: "nono vs nonno", speakText: "nono, nonno", translation: "Double consonants matter — they change meaning" },
            { native: "medico, studente, città", translation: "Stress patterns — accent marks show exceptions" },
        ],
        inlineVocab: [
            { word: "cane", translation: "dog" },
            { word: "cosa", translation: "thing" },
            { word: "cuore", translation: "heart" },
            { word: "cena", translation: "dinner" },
            { word: "gelato", translation: "ice cream" },
            { word: "gatto", translation: "cat" },
            { word: "figlio", translation: "son" },
            { word: "aglio", translation: "garlic" },
            { word: "bagno", translation: "bathroom" },
            { word: "signore", translation: "sir / gentleman" },
            { word: "scarpa", translation: "shoe" },
            { word: "pala", translation: "shovel" },
            { word: "palla", translation: "ball" },
            { word: "nonno", translation: "grandfather" },
        ],
        notes: [
            {
                type: "tip",
                content: "Italian is one of the most phonetic languages in the world — you pronounce (almost) every letter you see, and you write what you hear. The rules below cover nearly every word you'll encounter.",
            },
            {
                type: "tip",
                content: "Double consonants are noticeably longer than single consonants — this is a real phonetic distinction that changes meaning. Pala (shovel) vs palla (ball). Anno (year) vs ano (anus). Nono (ninth) vs nonno (grandfather). Practise making the double consonants clearly longer.",
            },
            {
                type: "tip",
                content: "C before e/i = /tʃ/ (like \"ch\" in \"church\"): ciao, cinema, arrivederci. C before a/o/u = /k/: casa, cotto, cuore. This rule has no exceptions.",
            },
            {
                type: "tip",
                content: "G before e/i = /dʒ/ (like \"j\" in \"jam\"): gelato, giro, giorno. G before a/o/u = /g/: gatto, gondola, gusto.",
            },
            {
                type: "tip",
                content: "SC before e/i = /ʃ/ (like \"sh\"): scusi, uscita, lasciare. SC before a/o/u = /sk/: scala, scuola.",
            },
            {
                type: "warning",
                content: "The letter H is always silent in Italian. Ho, hai, ha, hanno — the H only appears to distinguish these verb forms from o/ai/a/anno. Never pronounce it.",
            },
            {
                type: "culture",
                content: "Italian vowels are pure and consistently pronounced — no diphthongs or reduced vowels like English. A is always \"ah\", E is always \"eh\", I is always \"ee\", O is always \"oh\", U is always \"oo\". This consistency makes Italian pronunciation very regular once the consonant rules are learned.",
            },
        ],
        fixedPhrases: [
            { native: "ciao / cinema / arrivederci", translation: "hello / cinema / goodbye", note: "C before e/i = /tʃ/ (ch sound)." },
            { native: "casa / cotto / cuore", translation: "house / cooked / heart", note: "C before a/o/u = /k/ (hard c)." },
            { native: "pala / palla", translation: "shovel / ball", note: "Single vs double consonant — different words." },
            { native: "nonno / nono", translation: "grandfather / ninth", note: "Double n vs single n." },
            { native: "scusi / scala", translation: "excuse me / staircase", note: "SC before i = /ʃ/ (sh); before a = /sk/." },
        ],
    },
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
                { label: "(English)", forms: ["I am", "you are", "he / she is", "we are", "you all are", "they are"] },
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
                { label: "(English)", forms: ["I have", "you have", "he / she has", "we have", "you all have", "they have"] },
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
        id: "it-g-a1-6",
        level: "A1",
        title: "Regular -are Verb Conjugation",
        explanation: `Regular -are verbs are the most common in Italian. Remove the -are ending and add the endings shown in the table. There are hundreds of -are verbs — once you know the pattern for parlare, you can conjugate any of them.

Common -are verbs: parlare (speak), lavorare (work), abitare (live), ascoltare (listen), comprare (buy), camminare (walk), mangiare (eat).`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [
                { label: "parlare", forms: ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"] },
                { label: "lavorare", forms: ["lavoro", "lavori", "lavora", "lavoriamo", "lavorate", "lavorano"] },
            ],
        },
        rules: [
            {
                condition: "Conjugating a regular -are verb",
                result: "Remove -are, add: -o / -i / -a / -iamo / -ate / -ano",
                examples: [
                    { native: "parlare → parlo, parli, parla…", translation: "to speak → I speak, you speak, he/she speaks…" },
                    { native: "mangiare → mangio, mangi, mangia…", translation: "to eat → I eat, you eat, he/she eats…" },
                ],
            },
            {
                condition: "The io form always ends in -o",
                result: "Like all Italian verb types, io always ends in -o",
                examples: [
                    { native: "parlo", translation: "I speak (-are)" },
                    { native: "scrivo", translation: "I write (-ere)" },
                    { native: "dormo", translation: "I sleep (-ire type 1)" },
                    { native: "finisco", translation: "I finish (-ire type 2)" },
                ],
            },
            {
                condition: "Verbs ending in -iare",
                result: "The tu form loses the extra -i: mangi (not *mangii)",
                examples: [
                    { native: "mangiare → mangio / mangi / mangia / mangiamo / mangiate / mangiano", translation: "to eat → I eat / you eat / he eats / we eat / you all eat / they eat" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "There are hundreds of -are verbs in Italian. The pattern is completely regular — once you know it for parlare, you can conjugate any regular -are verb." },
            { type: "forward-ref", content: "-ere and -ire verbs (two more conjugation patterns) are in lesson it-g-a1-7.", refId: "it-g-a1-7" },
        ],
        examples: [
            { native: "Io parlo.", translation: "I speak." },
            { native: "Tu lavori a Milano?", translation: "Do you work in Milan?" },
            { native: "Lei abita a Firenze.", translation: "She lives in Florence." },
            { native: "Noi ascoltiamo la musica.", translation: "We listen to music." },
            { native: "Loro comprano il pane.", translation: "They buy the bread." }
        ],
        inlineVocab: [
            { word: "parlare", translation: "to speak" },
            { word: "lavorare", translation: "to work" },
            { word: "abitare", translation: "to live / to reside" },
            { word: "ascoltare", translation: "to listen" },
            { word: "comprare", translation: "to buy" },
            { word: "camminare", translation: "to walk" },
            { word: "mangiare", translation: "to eat" },
            { word: "musica", translation: "music" },
            { word: "pane", translation: "bread" },
        ]
    },
]
