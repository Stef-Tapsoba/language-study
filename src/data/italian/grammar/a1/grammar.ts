import { GrammarLesson } from "../../../../types"

export const grammarLessons: GrammarLesson[] = [
    {
        id: "it-g-a1-10",
        level: "A1",
        title: "Negation",
        explanation: "To make a sentence negative in Italian, place 'non' directly before the conjugated verb. This is the only step required — Italian does not use 'do/does' as in English. Double negatives are grammatically correct and required in Italian: 'Non mangio mai carne' (I never eat meat — literally 'I don't eat never meat').",
        examples: [
            { native: "Non parlo tedesco.", translation: "I don't speak German." },
            { native: "Non siamo stanchi.", translation: "We are not tired." },
            { native: "Non ha la macchina.", translation: "He does not have a car." },
            { native: "Non mangio mai carne.", translation: "I never eat meat." },
            { native: "Non capisco niente.", translation: "I don't understand anything." }
        ],
        inlineVocab: [
            { word: "tedesco", translation: "German" },
            { word: "stanchi", translation: "tired" },
            { word: "macchina", translation: "car" },
            { word: "carne", translation: "meat" },
            { word: "niente", translation: "nothing" },
        ],
        rules: [
            {
                condition: "Basic negation",
                result: "Place non directly before the conjugated verb",
                examples: [
                    { native: "Non parlo tedesco.", translation: "I don't speak German." },
                    { native: "Non siamo stanchi.", translation: "We are not tired." },
                    { native: "Non ho la macchina.", translation: "I don't have a car." },
                ],
            },
            {
                condition: "Double negation required",
                result: "With mai/niente/nessuno after the verb, keep non before the verb too",
                examples: [
                    { native: "Non mangio mai carne.", translation: "I never eat meat." },
                    { native: "Non capisco niente.", translation: "I don't understand anything." },
                    { native: "Non c'è nessuno.", translation: "There's nobody there." },
                ],
            },
            {
                condition: "Negative words before the verb",
                result: "If mai/nessuno/niente go before the verb, drop non",
                heuristic: "More emphatic/literary — less common in speech",
                examples: [
                    { native: "Mai ho detto questo.", translation: "Never have I said this." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Italian double negation is required and correct — unlike English. \"Non mangio mai\" (I don't eat never) is perfect Italian.",
            },
            {
                type: "tip",
                content: "Non + infinitive = negative command for tu: Non mangiare! (Don't eat!) Non parlare! (Don't speak!) — see imperative lesson it-g-a1-32.",
            },
            {
                type: "forward-ref",
                content: "Full lesson on negative words (mai, nessuno, niente, neanche) at lesson it-g-a1-10 — this IS that lesson. See also imperative negation in it-g-a1-32.",
                refId: "it-g-a1-32",
            },
        ],
        fixedPhrases: [
            { native: "Non capisco.", translation: "I don't understand.", note: "The most essential learner phrase." },
            { native: "Non lo so.", translation: "I don't know.", note: "lo = it — 'I don't know it'." },
            { native: "Non c'è problema.", translation: "No problem.", note: "c'è in the negative." },
            { native: "Non fa niente.", translation: "It doesn't matter. / No worries.", note: "Very common dismissive." },
            { native: "Non mangio mai…", translation: "I never eat…", note: "Double negation standard." },
        ],
    },
    {
        id: "it-g-a1-11",
        level: "A1",
        title: "Question Formation",
        explanation: `Yes/no questions are formed by raising your intonation — no word reordering needed.
  Statement: Parli italiano.  → You speak Italian.
  Question:  Parli italiano?  → Do you speak Italian? (same words, rising tone)

QUESTION WORDS — always at the start of the sentence:
  chi           → who         Chi è lui?            (Who is he?)
  cosa / che cosa → what      Cosa vuoi?            (What do you want?)
  dove          → where       Dove abiti?           (Where do you live?)
  quando        → when        Quando arrivi?        (When do you arrive?)
  come          → how         Come stai?            (How are you?)
  perché        → why         Perché studi?         (Why do you study?)
  quanto/a      → how much    Quanto costa?         (How much does it cost?)
  quanti/e      → how many    Quanti anni hai?      (How old are you?)
  quale/i       → which       Quale preferisci?     (Which do you prefer?)`,
        examples: [
            { native: "Parli italiano? (rising intonation)", speakText: "Parli italiano?", translation: "Do you speak Italian?" },
            { native: "Come ti chiami?", translation: "What is your name? (lit. How do you call yourself?)" },
            { native: "Dove abiti?", translation: "Where do you live?" },
            { native: "Quando arrivi?", translation: "When do you arrive?" },
            { native: "Perché studi l'italiano?", translation: "Why do you study Italian?" }
        ],
        inlineVocab: [
            { word: "vuoi", translation: "you want" },
            { word: "abiti", translation: "you live" },
            { word: "arrivi", translation: "you arrive" },
            { word: "studi", translation: "you study" },
            { word: "costa", translation: "it costs" },
        ],
        paradigmTable: {
            pronouns: ["Question word", "Meaning", "Example"],
            verbs: [
                { label: "chi", forms: ["chi", "who", "Chi è lui?"] },
                { label: "cosa / che cosa / che", forms: ["cosa / che cosa / che", "what", "Cosa vuoi?"] },
                { label: "dove / dov'è", forms: ["dove", "where", "Dove abiti?"] },
                { label: "quando", forms: ["quando", "when", "Quando arrivi?"] },
                { label: "come / com'è", forms: ["come", "how", "Come stai?"] },
                { label: "perché", forms: ["perché", "why / because", "Perché studi?"] },
                { label: "quanto/a/i/e", forms: ["quanto/a", "how much / many", "Quanto costa?"] },
                { label: "quale / quali", forms: ["quale/quali", "which", "Quale preferisci?"] },
                { label: "di dove", forms: ["di dove", "where from", "Di dove sei?"] },
            ],
        },
        rules: [
            {
                condition: "Yes/no question",
                result: "Raise intonation — no word order change needed",
                examples: [
                    { native: "Parli italiano?", translation: "Do you speak Italian? (same words as statement, just rising tone)" },
                ],
            },
            {
                condition: "Information question",
                result: "Question word + (optional subject) + verb",
                examples: [
                    { native: "Dove abiti?", translation: "Where do you live?" },
                    { native: "Come ti chiami?", translation: "What's your name?" },
                    { native: "Quando arrivi?", translation: "When do you arrive?" },
                ],
            },
            {
                condition: "Elision before vowels",
                result: "Dove → Dov'è before è; Come → Com'è before è",
                examples: [
                    { native: "Dov'è la stazione?", translation: "Where is the station?" },
                    { native: "Com'è il tuo appartamento?", translation: "What's your apartment like?" },
                ],
            },
            {
                condition: "Cosa vs che cosa vs che",
                result: "All three mean 'what' — all interchangeable in questions",
                examples: [
                    { native: "Cosa fai?", translation: "What are you doing?" },
                    { native: "Che cosa fai?", translation: "What are you doing?" },
                    { native: "Che fai?", translation: "What are you doing?" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Italian yes/no questions are formed purely by intonation — no do/does helper verb, no inversion. Just raise your voice at the end: \"Parli italiano?\" = \"Do you speak Italian?\"",
            },
            {
                type: "tip",
                content: "Come ti chiami? (What's your name?) is literally \"How do you call yourself?\" — come = how, not what. This is one of the most-asked questions at A1.",
            },
            {
                type: "culture",
                content: "Perché means both \"why\" (in questions) and \"because\" (in answers) — same word, unlike Spanish (¿por qué? / porque). Perché studi? — Perché mi piace.",
            },
        ],
        fixedPhrases: [
            { native: "Come ti chiami? / Come si chiama?", translation: "What's your name? (informal/formal)", note: "how do you call yourself." },
            { native: "Di dove sei?", translation: "Where are you from?", note: "essere for origin." },
            { native: "Quanto costa?", translation: "How much does it cost?", note: "Essential shopping question." },
            { native: "Come si dice…?", translation: "How do you say…?", note: "si + verb = impersonal construction." },
            { native: "Cosa c'è?", translation: "What's the matter? / What's there?", note: "Very common." },
        ],
    },
    {
        id: "it-g-a1-14",
        level: "A1",
        title: "Core Prepositions: di, a, in, da, con, su, per",
        explanation: `Italian prepositions connect nouns to the rest of the sentence. The key ones at A1:

  di  — of, from (origin, possession):  Sono di Roma. Il libro di Maria.
  a   — to, at (cities, home, school):  Vado a Milano. Sono a casa.
  in  — in, to (countries, rooms):      Sono in Italia. Vado in treno.
  da  — from, since, at someone's:      Vengo da Napoli. Vado da Marco.
  con — with:                           Vivo con la mia famiglia.
  su  — on, about:                      Il libro è sul tavolo.
  per — for, in order to:               Questo è per te. Studio per imparare.

CONTRACTIONS — a, di, su merge with definite articles:

  a  + il/lo/la/l'/i/gli/le  =  al / allo / alla / all' / ai / agli / alle
  di + il/lo/la/l'/i/gli/le  =  del / dello / della / dell' / dei / degli / delle
  su + il/lo/la/l'/i/gli/le  =  sul / sullo / sulla / sull' / sui / sugli / sulle

Note: in and con do NOT contract.

Quick examples: al cinema (a + il), dalla stazione (da + la), sul tavolo (su + il)`,
        examples: [
            { native: "Vado al cinema.", translation: "I'm going to the cinema. (a + il = al)" },
            { native: "Sono di Milano.", translation: "I'm from Milan. (origin)" },
            { native: "Abito in Italia.", translation: "I live in Italy. (in + country)" },
            { native: "Il libro è sulla scrivania.", translation: "The book is on the desk. (su + la = sulla)" },
            { native: "Vengo da Roma.", translation: "I come from Rome." },
            { native: "Studio l'italiano per parlare con gli italiani.", translation: "I study Italian to speak with Italians." },
        ],
        inlineVocab: [
            { word: "cinema", translation: "cinema / movie theater" },
            { word: "scrivania", translation: "desk" },
            { word: "treno", translation: "train" },
            { word: "famiglia", translation: "family" },
            { word: "tavolo", translation: "table" },
            { word: "stazione", translation: "station" },
        ],
        paradigmTable: {
            pronouns: ["article →", "il", "lo", "l'", "la", "i", "gli", "le"],
            verbs: [
                { label: "a +", forms: ["al", "allo", "all'", "alla", "ai", "agli", "alle"] },
                { label: "di +", forms: ["del", "dello", "dell'", "della", "dei", "degli", "delle"] },
                { label: "su +", forms: ["sul", "sullo", "sull'", "sulla", "sui", "sugli", "sulle"] },
                { label: "da +", forms: ["dal", "dallo", "dall'", "dalla", "dai", "dagli", "dalle"] },
                { label: "in +", forms: ["nel", "nello", "nell'", "nella", "nei", "negli", "nelle"] },
            ],
        },
        rules: [
            {
                condition: "Going to a city or specific place",
                result: "Use a + place (contracts with article)",
                examples: [
                    { native: "Vado a Milano.", translation: "I'm going to Milan." },
                    { native: "Vado al cinema.", translation: "I'm going to the cinema." },
                    { native: "Vado alla stazione.", translation: "I'm going to the station." },
                ],
            },
            {
                condition: "In a country, region, or room (no article)",
                result: "Use in",
                examples: [
                    { native: "Sono in Italia.", translation: "I'm in Italy." },
                    { native: "Vado in ufficio.", translation: "I'm going to the office." },
                    { native: "È in cucina.", translation: "She's in the kitchen." },
                ],
            },
            {
                condition: "Origin or 'from'",
                result: "Use di for origin; da for from a person or place",
                examples: [
                    { native: "Sono di Roma.", translation: "I'm from Rome." },
                    { native: "Vengo da Napoli.", translation: "I come from Naples." },
                    { native: "Vado dal medico.", translation: "I'm going to the doctor." },
                ],
            },
            {
                condition: "Contracted prepositions",
                result: "a, di, su, da, in contract with definite articles following the same il/lo/l'/la pattern",
                examples: [
                    { native: "al cinema", translation: "to the cinema (a + il)" },
                    { native: "della pasta", translation: "of the pasta (di + la)" },
                    { native: "dal medico", translation: "to/from the doctor (da + il)" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Con is the only major preposition that does NOT contract with the article. All others (a, di, su, da, in) produce contracted forms.",
            },
            {
                type: "tip",
                content: "The contraction pattern is the same as the definite article pattern: al = a + il, allo = a + lo, all' = a + l', etc. Once you know the articles, the contractions follow automatically.",
            },
        ],
        fixedPhrases: [
            { native: "Vado al cinema / al bar / alla stazione.", translation: "I'm going to the cinema / bar / station.", note: "a + il = al; a + la = alla." },
            { native: "Sono di Roma.", translation: "I'm from Rome.", note: "di for city of origin." },
            { native: "È sul tavolo.", translation: "It's on the table.", note: "su + il = sul." },
            { native: "Vado dal medico.", translation: "I'm going to the doctor.", note: "da + person = dal + person." },
            { native: "Abito in centro.", translation: "I live in the city centre.", note: "in + place without article." },
        ],
    },
    {
        id: "it-g-a1-23",
        level: "A1",
        title: "Possessive Adjectives",
        explanation: `Possessive adjectives agree in gender and number with the noun owned — not the owner. They are almost always preceded by a definite article: il mio libro, la mia macchina, i tuoi amici.

FAMILY EXCEPTION — drop the article with singular, unmodified family members: mio padre, mia sorella, tuo fratello. The article returns for plurals (i miei genitori), modified nouns (il mio caro padre), and always with loro (la loro sorella).`,
        examples: [
            { native: "il mio libro", translation: "my book (masc. sg.)", speakText: "il mio libro" },
            { native: "la mia macchina", translation: "my car (fem. sg.)", speakText: "la mia macchina" },
            { native: "mio padre / mia madre", translation: "my father / my mother — no article for singular family" },
            { native: "i miei genitori", translation: "my parents — article returns for plural family" },
            { native: "la loro sorella", translation: "their sister — 'loro' always takes the article" },
        ],
        inlineVocab: [
            { word: "macchina", translation: "car" },
            { word: "scarpe", translation: "shoes" },
            { word: "genitori", translation: "parents" },
            { word: "sorella", translation: "sister" },
            { word: "fratello", translation: "brother" },
        ],
        paradigmTable: {
            pronouns: ["Owner", "masc. sg.", "fem. sg.", "masc. pl.", "fem. pl."],
            verbs: [
                { label: "io", forms: ["mio", "mia", "miei", "mie"] },
                { label: "tu", forms: ["tuo", "tua", "tuoi", "tue"] },
                { label: "lui / lei", forms: ["suo", "sua", "suoi", "sue"] },
                { label: "noi", forms: ["nostro", "nostra", "nostri", "nostre"] },
                { label: "voi", forms: ["vostro", "vostra", "vostri", "vostre"] },
                { label: "loro", forms: ["loro", "loro", "loro", "loro"] },
            ],
        },
        rules: [
            {
                condition: "Possessives agree with the thing owned, not the owner",
                result: "Use the form that matches the noun's gender and number",
                examples: [
                    { native: "il mio libro", translation: "my book (masc. sg.)" },
                    { native: "la mia macchina", translation: "my car (fem. sg.)" },
                    { native: "i miei amici", translation: "my friends (masc. pl.)" },
                ],
            },
            {
                condition: "Article before possessives",
                result: "Always use the definite article before possessives: il/la/i/le + possessive",
                examples: [
                    { native: "il mio libro", translation: "my book" },
                    { native: "la tua casa", translation: "your house" },
                    { native: "i suoi amici", translation: "his/her friends" },
                ],
            },
            {
                condition: "Family member exception — singular",
                result: "Drop the article with unmodified singular family members",
                examples: [
                    { native: "mio padre", translation: "my father (no article)" },
                    { native: "mia madre", translation: "my mother (no article)" },
                    { native: "tuo fratello", translation: "your brother (no article)" },
                    { native: "sua sorella", translation: "his/her sister (no article)" },
                ],
            },
            {
                condition: "Article returns for family members when",
                result: "Plural, modified by adjective, or using loro",
                examples: [
                    { native: "i miei genitori", translation: "my parents (plural)" },
                    { native: "il mio caro padre", translation: "my dear father (adjective present)" },
                    { native: "la loro sorella", translation: "their sister (loro always takes article)" },
                ],
            },
            {
                condition: "Loro is invariable",
                result: "Loro never changes form — always loro",
                examples: [
                    { native: "il loro libro", translation: "their book" },
                    { native: "la loro casa", translation: "their house" },
                    { native: "i loro amici", translation: "their friends" },
                    { native: "le loro amiche", translation: "their (female) friends" },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Suo/sua/suoi/sue = his OR her — Italian doesn't distinguish. Context makes it clear. Il suo libro = his book OR her book.",
            },
            {
                type: "tip",
                content: "The family member no-article rule is one of Italian's most distinctive features. \"Mio padre\" (my father) NOT \"il mio padre\". But \"il mio simpatico padre\" (adjective present → article returns).",
            },
        ],
        fixedPhrases: [
            { native: "mio padre / mia madre", translation: "my father / my mother", note: "No article with singular family." },
            { native: "i miei genitori", translation: "my parents", note: "Plural → article returns." },
            { native: "la mia famiglia", translation: "my family", note: "famiglia takes article." },
            { native: "il tuo numero di telefono", translation: "your phone number", note: "Regular possessive with article." },
        ],
    },
    {
        id: "it-g-a1-24",
        level: "A1",
        title: "Demonstrative Adjectives",
        explanation: `Demonstrative adjectives point out specific nouns. Italian has two sets — questo (this, near me) and quello (that, away from me).

QUESTO — this / these (near the speaker)
Forms agree with the noun in gender and number:
  questo → masc. sg. before consonant:    questo libro
  quest' → masc./fem. sg. before vowel:  quest'amico, quest'amica
  questa → fem. sg.:                      questa casa
  questi → masc. pl.:                     questi libri
  queste → fem. pl.:                      queste case

QUELLO — that / those (away from the speaker)
Quello mirrors the definite article (il/lo/l'/la/i/gli/le):
  quel libro       (= il libro)       that book
  quello studente  (= lo studente)    that student
  quell'amico      (= l'amico)        that friend
  quella casa      (= la casa)        that house
  quei libri       (= i libri)        those books
  quegli amici     (= gli amici)      those friends
  quelle case      (= le case)        those houses

QUICK TIP: When in doubt about quello, think of the definite article for that noun — quello follows the same pattern.`,
        examples: [
            { native: "Questo libro è interessante.", translation: "This book is interesting." },
            { native: "Quest'amica è bravissima.", translation: "This friend (fem.) is very good." },
            { native: "Quella casa è grande.", translation: "That house is big." },
            { native: "Quei libri sono miei.", translation: "Those books are mine." },
            { native: "Cos'è questo?", translation: "What is this?" },
        ],
        inlineVocab: [
            { word: "interessante", translation: "interesting" },
            { word: "grande", translation: "big / great" },
        ],
        paradigmTable: {
            pronouns: ["masc. singular", "fem. singular", "masc. plural", "fem. plural"],
            verbs: [
                { label: "questo (this)", forms: ["questo / quest'", "questa / quest'", "questi", "queste"] },
                { label: "quello (that) — mirrors article", forms: ["quel / quello / quell'", "quella / quell'", "quei / quegli", "quelle"] },
            ],
        },
        rules: [
            {
                condition: "This / these (near speaker)",
                result: "Use questo — regular 4-form agreement, quest' before vowels",
                examples: [
                    { native: "questo libro", translation: "this book" },
                    { native: "questa casa", translation: "this house" },
                    { native: "questi libri", translation: "these books" },
                    { native: "queste case", translation: "these houses" },
                    { native: "quest'amico / quest'amica", translation: "this friend (m./f.)" },
                ],
            },
            {
                condition: "That / those (away from speaker)",
                result: "Use quello — mirrors the definite article",
                examples: [
                    { native: "quel libro", translation: "that book (= il)" },
                    { native: "quello studente", translation: "that student (= lo)" },
                    { native: "quell'amico", translation: "that friend (= l')" },
                    { native: "quella casa", translation: "that house (= la)" },
                    { native: "quei libri", translation: "those books (= i)" },
                    { native: "quegli amici", translation: "those friends (= gli)" },
                    { native: "quelle case", translation: "those houses (= le)" },
                ],
            },
            {
                condition: "As pronouns (without a noun)",
                result: "Same forms — just drop the noun",
                examples: [
                    { native: "Prendo questo.", translation: "I'll take this one." },
                    { native: "Preferisce quella.", translation: "She prefers that one." },
                    { native: "Cos'è questo?", translation: "What is this?" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Quello follows the exact same pattern as the definite article. When in doubt about which form of quello to use, just think of which article the noun would take — quello follows it.",
            },
            {
                type: "culture",
                content: "\"Cos'è questo?\" (What is this?) is one of the most useful A1 questions — ask it whenever you encounter something unknown.",
            },
        ],
        fixedPhrases: [
            { native: "Cos'è questo?", translation: "What is this?", note: "questo as pronoun — neutral, no gender needed." },
            { native: "Quanto costa questo / quella?", translation: "How much does this / that cost?", note: "Essential shopping." },
            { native: "Prendo questo/quella.", translation: "I'll take this/that.", note: "Shopping decision." },
        ],
    },
    {
        id: "it-g-a1-30",
        level: "A1",
        title: "Partitive Articles: del, dello, della, dell', dei, degli, delle",
        explanation: `Partitive articles express an unspecified quantity — the English equivalent is 'some', or simply leaving the article out. They are formed by combining the preposition di with the definite article, so they follow exactly the same pattern as the definite articles you already know.

FORMATION — di + definite article:

  di + il   → del     del pane        some bread       (masc. sg., consonant)
  di + lo   → dello   dello zucchero  some sugar       (masc. sg., s+cons, z, gn...)
  di + l'   → dell'   dell'acqua      some water       (masc./fem. sg., vowel)
  di + la   → della   della pasta     some pasta       (fem. sg., consonant)
  di + i    → dei     dei biscotti    some biscuits    (masc. pl.)
  di + gli  → degli   degli amici     some friends     (masc. pl., vowel/s+cons...)
  di + le   → delle   delle mele      some apples      (fem. pl.)

QUICK RULE: choose the partitive the same way you choose the definite article for that noun — just put di in front.
  il pane → del pane    |    lo zucchero → dello zucchero    |    la frutta → della frutta

AFTER NEGATION — all partitives become di (or d' before a vowel):
  Voglio del caffè.        I want some coffee.
  Non voglio caffè.        I don't want (any) coffee.  ← no article at all
  Ho dei problemi.         I have some problems.
  Non ho problemi.         I don't have any problems.

WHEN TO USE
  At the table:      Vuoi del vino?           Do you want some wine?
  Shopping:          Prendo della frutta.      I'll take some fruit.
  Describing:        Ho degli amici a Milano.  I have some friends in Milan.
  Cooking:           Aggiungi dello zucchero.  Add some sugar.`,
        examples: [
            { native: "Vuoi del caffè?", translation: "Do you want some coffee? (del = di + il)" },
            { native: "Prendo della pasta.", translation: "I'll have some pasta. (della = di + la)" },
            { native: "C'è dell'acqua nel frigo.", translation: "There is some water in the fridge. (dell' = di + l')" },
            { native: "Ho dei problemi.", translation: "I have some problems. (dei = di + i)" },
            { native: "Compro delle mele al mercato.", translation: "I'm buying some apples at the market. (delle = di + le)" },
            { native: "Non ho problemi.", translation: "I don't have any problems. (no article after negation)" },
        ],
        inlineVocab: [
            { word: "pane", translation: "bread" },
            { word: "zucchero", translation: "sugar" },
            { word: "acqua", translation: "water" },
            { word: "pasta", translation: "pasta" },
            { word: "biscotti", translation: "biscuits / cookies" },
            { word: "mele", translation: "apples" },
            { word: "frutta", translation: "fruit" },
            { word: "vino", translation: "wine" },
            { word: "caffè", translation: "coffee" },
            { word: "mercato", translation: "market" },
            { word: "frigo", translation: "fridge" },
        ],
        paradigmTable: {
            pronouns: ["definite article", "partitive", "meaning", "example"],
            verbs: [
                { label: "il", forms: ["il", "del", "some (m.sg.)", "del pane"] },
                { label: "lo", forms: ["lo", "dello", "some (m.sg. s+cons/z)", "dello zucchero"] },
                { label: "l'", forms: ["l'", "dell'", "some (vowel)", "dell'acqua"] },
                { label: "la", forms: ["la", "della", "some (f.sg.)", "della pasta"] },
                { label: "i", forms: ["i", "dei", "some (m.pl.)", "dei biscotti"] },
                { label: "gli", forms: ["gli", "degli", "some (m.pl. s+cons/vowel)", "degli amici"] },
                { label: "le", forms: ["le", "delle", "some (f.pl.)", "delle mele"] },
            ],
        },
        rules: [
            {
                condition: "Formation",
                result: "Partitive = di + definite article — same pattern as the article",
                examples: [
                    { native: "del pane", translation: "some bread (di + il)" },
                    { native: "della pasta", translation: "some pasta (di + la)" },
                    { native: "dell'acqua", translation: "some water (di + l')" },
                    { native: "dei biscotti", translation: "some biscuits (di + i)" },
                ],
            },
            {
                condition: "When to use",
                result: "For unspecified quantities — some bread, some water, some friends",
                examples: [
                    { native: "Voglio del caffè.", translation: "I want some coffee." },
                    { native: "Ho degli amici a Milano.", translation: "I have some friends in Milan." },
                    { native: "Prendo della frutta.", translation: "I'll take some fruit." },
                ],
            },
            {
                condition: "After negation",
                result: "Drop the partitive — no article at all after non",
                examples: [
                    { native: "Non voglio caffè.", translation: "I don't want any coffee." },
                    { native: "Non ho problemi.", translation: "I don't have any problems." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The partitive follows the article system perfectly. If the noun takes il → del; if lo → dello; if la → della. Master the articles and the partitives come free.",
            },
            {
                type: "forward-ref",
                content: "Partitives are the plural of the indefinite article. Un libro (a book) → dei libri (some books). Un' amica → delle amiche.",
                refId: "it-g-a1-5",
            },
        ],
        fixedPhrases: [
            { native: "Vuoi del vino?", translation: "Do you want some wine?", note: "del = di + il." },
            { native: "Prendo della pasta.", translation: "I'll have some pasta.", note: "della = di + la." },
            { native: "Ho degli amici lì.", translation: "I have some friends there.", note: "degli before vowel/s+cons plural." },
            { native: "Non ho problemi.", translation: "I don't have any problems.", note: "No partitive after negation." },
        ],
    },
    {
        id: "it-g-a1-31",
        level: "A1",
        title: "C'è / Ci sono — There Is / There Are",
        explanation: `C'è and ci sono are the Italian equivalents of 'there is' and 'there are'. Unlike il y a in French, Italian uses two different forms depending on whether the noun is singular or plural.

FORMS
  c'è — there is    (singular)    c'è = ci + è, contraction of ci è
  ci sono — there are      (plural)

  C'è un bar qui vicino.        There is a bar nearby.
  Ci sono molti turisti.        There are many tourists.

NEGATIVE — non c'è / non ci sono
Place non before c'è or ci sono:
  C'è latte nel frigo.          → Non c'è latte nel frigo.
  Ci sono problemi.             → Non ci sono problemi.

QUESTION — c'è...? / ci sono...?
Raise intonation — no word order change needed:
  C'è un medico?                Is there a doctor?
  Ci sono posti liberi?         Are there any free seats?
  Quanto tempo c'è?             How much time is there?

ASKING WHERE SOMETHING IS
C'è is also used to ask whether something or someone is present — equivalent to 'is X here?':
  C'è Marco?                    Is Marco here? / Is Marco in?
  Sì, c'è. / No, non c'è.      Yes, he's here. / No, he's not here.

C'È / CI SONO vs È / SONO
  c'è / ci sono  → signals existence or presence (there is)
  è / sono  → links subject to description (is / are)
  C'è un ristorante.    There is a restaurant.   (existence)
  È un buon ristorante.     It is a good restaurant. (description)

ECCO — here is / here are (pointing)
A related expression worth knowing: ecco introduces or points out something visible.
  Ecco il menù.         Here is the menu.
  Ecco i tuoi amici.    Here are your friends.
  Ecco!                 There you go! / Here we are!`,
        examples: [
            { native: "C'è un supermercato qui vicino?", translation: "Is there a supermarket nearby?" },
            { native: "Sì, c'è uno all'angolo.", translation: "Yes, there is one on the corner." },
            { native: "Ci sono molti ristoranti in questa via.", translation: "There are many restaurants on this street." },
            { native: "Non c'è latte nel frigo.", translation: "There is no milk in the fridge." },
            { native: "Non ci sono posti liberi.", translation: "There are no free seats." },
            { native: "C'è Marco? — No, non c'è.", translation: "Is Marco here? — No, he's not here." },
            { native: "Ecco il conto.", translation: "Here is the bill." },
        ],
        inlineVocab: [
            { word: "bar", translation: "bar / café" },
            { word: "turisti", translation: "tourists" },
            { word: "latte", translation: "milk" },
            { word: "posti", translation: "seats / places" },
            { word: "ristorante", translation: "restaurant" },
            { word: "supermercato", translation: "supermarket" },
            { word: "medico", translation: "doctor" },
            { word: "conto", translation: "bill / account" },
            { word: "menù", translation: "menu" },
        ],
        rules: [
            {
                condition: "Something exists (singular)",
                result: "Use c'è (= ci + è)",
                examples: [
                    { native: "C'è un bar qui vicino.", translation: "There is a bar nearby." },
                    { native: "C'è Marco?", translation: "Is Marco here?" },
                ],
            },
            {
                condition: "Multiple things exist (plural)",
                result: "Use ci sono",
                examples: [
                    { native: "Ci sono molti turisti.", translation: "There are many tourists." },
                    { native: "Ci sono posti liberi?", translation: "Are there any free seats?" },
                ],
            },
            {
                condition: "Negation",
                result: "non c'è / non ci sono",
                examples: [
                    { native: "Non c'è latte nel frigo.", translation: "There's no milk in the fridge." },
                    { native: "Non ci sono posti liberi.", translation: "There are no free seats." },
                ],
            },
            {
                condition: "C'è vs è",
                result: "C'è = there is (existence). È = it is (description or identification).",
                examples: [
                    { native: "C'è un ristorante.", translation: "There is a restaurant. (existence)" },
                    { native: "È un buon ristorante.", translation: "It is a good restaurant. (description)" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "C'è is a contraction of ci + è. You can think of ci as a location particle meaning \"there\" — ci + è = \"there is\". Ci sono = \"there are\".",
            },
            {
                type: "tip",
                content: "C'è Marco? means \"Is Marco here? / Is Marco in?\" — very common use for asking whether someone is present.",
            },
            {
                type: "culture",
                content: "Ecco! (Here it is! / Here you go! / There!) is related — use it when producing something or pointing. Ecco il menù. / Ecco, finalmente! (There, finally!)",
            },
        ],
        fixedPhrases: [
            { native: "C'è un…? / Ci sono…?", translation: "Is there a…? / Are there…?", note: "Existence question." },
            { native: "Non c'è problema.", translation: "No problem.", note: "Very common." },
            { native: "Non c'è nessuno.", translation: "There's nobody there.", note: "nessuno = nobody." },
            { native: "Ecco!", translation: "Here you go! / There!", note: "Presenting or pointing." },
            { native: "C'è Marco?", translation: "Is Marco in?", note: "Asking if someone is present." },
        ],
    },
    {
        id: "it-g-a1-34",
        level: "A1",
        title: "Stressed Pronouns — Me, Te, Lui, Lei...",
        explanation: `Stressed pronouns (pronomi tonici) are used after prepositions, for emphasis, and in short answers without a verb. They are different from the subject pronouns (io, tu, lui...) and appear constantly in everyday Italian.

THE FORMS

  Subject pronoun    Stressed pronoun
  io                 me       (me / I)
  tu                 te       (you)
  lui                lui      (him)
  lei                lei      (her)
  noi                noi      (us / we)
  voi                voi      (you all)
  loro               loro     (them)

Note: noi, voi, lui, lei, and loro are the same as the subject pronouns.
Only io→me and tu→te change form.

WHEN TO USE STRESSED PRONOUNS

1. AFTER PREPOSITIONS — any preposition requires a stressed pronoun:
  con me          with me           Vieni con me?
  da te           at your place     Ci vediamo da te?
  per lui         for him           È per lui.
  senza di lei    without her       È partito senza di lei.
  prima di noi    before us         Sono arrivati prima di noi.
  dopo di voi     after you         Partiamo dopo di voi.

Note: di is inserted between certain prepositions (senza, prima, dopo,
invece, oltre) and the stressed pronoun.

2. AFTER È / SONO (identification — equivalent to French c'est):
  Sono io.          It's me.
  Sei tu?           Is it you?
  È lui.            It's him.
  Siamo noi.        It's us.

3. ALONE OR IN SHORT ANSWERS:
  Chi parla italiano? — Io! / Me!    Who speaks Italian? — Me!
  Chi vuole il caffè? — Io!          Who wants coffee? — Me!

4. FOR EMPHASIS — contrast or focus:
  Vengo anch'io.     I'm coming too.
  Lo faccio io.      I'll do it (myself).
  Parla con lui, non con me.  Talk to him, not to me.

5. ANCHE / NEANCHE — also / neither:
  Anch'io.           Me too.
  Neanche me. / Nemmeno me.   Me neither.

ANCHE + STRESSED PRONOUN
  anche + me → anch'io (not anche me — the elision is standard)
  anche + te → anche te
  anche + lui → anche lui`,
        examples: [
            { native: "Sono io.", translation: "It's me." },
            { native: "Vieni con me?", translation: "Are you coming with me?" },
            { native: "Questo è per te.", translation: "This is for you." },
            { native: "Usciamo senza di lui.", translation: "We're going out without him." },
            { native: "Anch'io voglio un caffè.", translation: "I want a coffee too." },
            { native: "Parla con lei, non con me.", translation: "Talk to her, not to me." },
            { native: "Chi ha fame? — Io!", translation: "Who is hungry? — Me!" },
        ],
        inlineVocab: [
            { word: "caffè", translation: "coffee" },
            { word: "fame", translation: "hunger" },
            { word: "uscire", translation: "to go out" },
        ],
        paradigmTable: {
            pronouns: ["subject", "stressed", "used after prepositions"],
            verbs: [
                { label: "io", forms: ["io", "me", "per me, con me, senza di me"] },
                { label: "tu", forms: ["tu", "te", "per te, con te, da te"] },
                { label: "lui", forms: ["lui", "lui", "per lui, con lui (same form)"] },
                { label: "lei", forms: ["lei", "lei", "per lei, con lei (same form)"] },
                { label: "noi", forms: ["noi", "noi", "per noi, con noi (same form)"] },
                { label: "voi", forms: ["voi", "voi", "per voi, con voi (same form)"] },
                { label: "loro", forms: ["loro", "loro", "per loro, con loro (same form)"] },
            ],
        },
        notes: [
            {
                type: "tip",
                content: "Only io and tu change form: io → me, tu → te. All other stressed pronouns are identical to the subject pronouns.",
            },
            {
                type: "tip",
                content: "Di is inserted between senza, prima, dopo, invece, oltre and the stressed pronoun: senza di me / prima di noi / dopo di voi. Not all prepositions require di — con me, per te (no di).",
            },
            {
                type: "tip",
                content: "Anch'io (me too) is a contraction of anche + io — the -e elides before io. Anche te / anche lui (no elision needed elsewhere).",
            },
        ],
        fixedPhrases: [
            { native: "Sono io.", translation: "It's me.", note: "essere + stressed pronoun for identification." },
            { native: "Vieni con me?", translation: "Are you coming with me?", note: "con + me." },
            { native: "È per te.", translation: "It's for you.", note: "per + te." },
            { native: "Anch'io!", translation: "Me too!", note: "anche + io → anch'io (elision)." },
            { native: "Neanche me. / Nemmeno me.", translation: "Me neither.", note: "Agreement with a negative." },
        ],
    },
]
