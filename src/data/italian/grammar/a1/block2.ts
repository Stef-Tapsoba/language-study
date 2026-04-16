import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
    {
        id: "it-g-a1-16",
        level: "A1",
        title: "Likes & Dislikes: piacere, preferire, odiare",
        explanation: `Italian expresses 'to like' using piacere — but it works differently from English. The subject of piacere is the THING being liked, not the person. The person is an indirect object.

  mi piace    = I like (lit. 'it pleases me') — singular thing
  mi piacciono = I like (lit. 'they please me') — plural things
  ti piace / ti piacciono = you like...
  gli/le piace / piacciono = he/she likes...

So you say:
  ✓ Mi piace il caffè.     (Coffee pleases me = I like coffee)
  ✓ Mi piacciono i gatti.  (Cats please me = I like cats)
  ✗ Never: "Io piaccio il caffè"

To say you DON'T like something: Non mi piace / Non mi piacciono.
To express preference: preferire (regular -ire type 2, takes -isc-):
  Preferisco il tè al caffè. (I prefer tea to coffee.)
To express strong dislike: odiare (regular -are):
  Odio alzarmi presto. (I hate getting up early.)

Quick tip: piacere + infinitive = liking an activity:
  Mi piace leggere. (I like reading.) ← always singular, use piace not piacciono`,
        examples: [
            { native: "Mi piace la pizza.", translation: "I like pizza. (singular → piace)" },
            { native: "Mi piacciono i gatti.", translation: "I like cats. (plural → piacciono)" },
            { native: "Non mi piace il pesce.", translation: "I don't like fish." },
            { native: "Ti piace la musica italiana?", translation: "Do you like Italian music?" },
            { native: "Preferisco il vino rosso.", translation: "I prefer red wine." },
            { native: "Mi piace studiare l'italiano.", translation: "I like studying Italian. (+ infinitive)" },
            { native: "Gli piacciono i film d'azione.", translation: "He likes action films." },
        ],
        inlineVocab: [
            { word: "caffè", translation: "coffee" },
            { word: "gatti", translation: "cats" },
            { word: "pesce", translation: "fish" },
            { word: "vino", translation: "wine" },
            { word: "leggere", translation: "to read" },
            { word: "film", translation: "film / movie" },
        ],
        paradigmTable: {
            pronouns: ["person", "piace (singular / infinitive)", "piacciono (plural)"],
            verbs: [
                { label: "io", forms: ["io", "mi piace", "mi piacciono"] },
                { label: "tu", forms: ["tu", "ti piace", "ti piacciono"] },
                { label: "lui / lei", forms: ["lui/lei", "gli piace / le piace", "gli piacciono / le piacciono"] },
                { label: "noi", forms: ["noi", "ci piace", "ci piacciono"] },
                { label: "voi", forms: ["voi", "vi piace", "vi piacciono"] },
                { label: "loro", forms: ["loro", "gli piace", "gli piacciono"] },
            ],
        },
        rules: [
            {
                condition: "Liking a single thing or an infinitive",
                result: "Use piace (singular)",
                examples: [
                    { native: "Mi piace il caffè.", translation: "I like coffee." },
                    { native: "Ti piace studiare?", translation: "Do you like studying?" },
                    { native: "Le piace Roma.", translation: "She likes Rome." },
                ],
            },
            {
                condition: "Liking multiple things (plural noun)",
                result: "Use piacciono (plural)",
                examples: [
                    { native: "Mi piacciono i libri.", translation: "I like books." },
                    { native: "Ci piacciono le passeggiate.", translation: "We like walks." },
                ],
            },
            {
                condition: "Asking what someone likes",
                result: "Ti piace…? or Cosa ti piace…?",
                examples: [
                    { native: "Ti piace la pizza?", translation: "Do you like pizza?" },
                    { native: "Cosa ti piace fare?", translation: "What do you like to do?" },
                ],
            },
            {
                condition: "Clarifying who likes (when gli/le ambiguous)",
                result: "Add a + person",
                examples: [
                    { native: "A Marco piace.", translation: "Marco likes it." },
                    { native: "A me piace moltissimo.", translation: "I like it very much." },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "The most common mistake: treating piacere like a regular verb. Do NOT say \"Io piaccio la pizza.\" The thing liked is the subject — say \"Mi piace la pizza\" (pizza pleases me).",
            },
            {
                type: "tip",
                content: "Non mi piace per niente (I don't like it at all) / Mi piace da morire (I love it to death) — degree expressions that make your Italian sound natural.",
            },
            {
                type: "culture",
                content: "Piacere! also means \"Nice to meet you!\" (Pleased to meet you). This is a separate use — piacere as a standalone greeting. Common reply: Piacere mio! (The pleasure is mine.)",
            },
        ],
        fixedPhrases: [
            { native: "Mi piace moltissimo.", translation: "I like it very much.", note: "moltissimo = very much indeed." },
            { native: "Non mi piace per niente.", translation: "I don't like it at all.", note: "per niente = emphatic negation." },
            { native: "Mi piacciono molto.", translation: "I like them a lot.", note: "piacciono for plural." },
            { native: "Piacere!", translation: "Nice to meet you!", note: "Separate fixed use — greeting." },
            { native: "Anche a me.", translation: "Me too.", note: "Agreement with a like." },
            { native: "Neanche a me.", translation: "Me neither.", note: "Agreement with a dislike." },
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
                result: "il/la/i/le + possessive (article always required)",
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
        id: "it-g-a1-4",
        level: "A1",
        title: "Definite Articles",
        explanation: `Italian definite articles (= 'the') change based on gender, number, and the first letter of the following noun. The key is the FIRST SOUND of the word after the article — not just its spelling. S followed by another consonant (studente, spagnolo, stadio) always triggers lo/gli.

IMPORTANT — lo/gli only applies to masculine nouns. Feminine nouns starting with s+consonant, z, gn, etc. use the regular la/le:
  la studentessa (not *lo)    le studentesse (not *gli)
  la strada                   le strade
  la zona                     le zone`,
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
            {
                condition: "Feminine nouns starting with s+cons, z, gn, etc.",
                result: "Use la / le — the lo/gli rule is masculine only",
                examples: [
                    { native: "la studentessa / le studentesse", translation: "the (female) student / students" },
                    { native: "la strada / le strade", translation: "the street / streets" },
                    { native: "la zona / le zone", translation: "the area / areas" },
                    { native: "la spesa / le spese", translation: "the shopping / expenses" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "The key to choosing the right article is the FIRST SOUND of the following word, not just its spelling. S followed by another consonant (studente, spagnolo, stadio) always triggers lo/gli." },
            { type: "warning", content: "lo/gli only applies to MASCULINE nouns. Feminine nouns beginning with s+consonant, z, gn, etc. use regular la/le — never lo or gli. La studentessa, la strada, la zona." },
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
        id: "it-g-a1-8",
        level: "A1",
        title: "Andare (to go)",
        explanation: `**Andare** means 'to go'. Its present tense is highly irregular — memorise it as a set. The noi/voi forms look regular; the others (vado, vai, va, vanno) do not resemble the infinitive at all.

Usage: andare + a + place (cities), + in + country, + da + person: andare a Roma, andare in Italia, andare dal medico.`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [{ label: "andare", forms: ["vado", "vai", "va", "andiamo", "andate", "vanno"] }],
        },
        rules: [
            {
                condition: "Going to a city",
                result: "andare + a + city",
                examples: [
                    { native: "Vado a Roma.", translation: "I'm going to Rome." },
                    { native: "Vai a Milano?", translation: "Are you going to Milan?" },
                ],
            },
            {
                condition: "Going to a place with article",
                result: "andare + a + contracted article + place",
                examples: [
                    { native: "Vado al cinema.", translation: "I'm going to the cinema." },
                    { native: "Andiamo alla stazione.", translation: "We're going to the station." },
                    { native: "Va all'aeroporto.", translation: "He/she goes to the airport." },
                ],
            },
            {
                condition: "Going to a country/region",
                result: "andare + in + country",
                examples: [
                    { native: "Vado in Italia.", translation: "I'm going to Italy." },
                    { native: "Andiamo in Francia.", translation: "We're going to France." },
                ],
            },
            {
                condition: "Going to a person or professional",
                result: "andare + da + person",
                examples: [
                    { native: "Vado dal medico.", translation: "I'm going to the doctor." },
                    { native: "Va dalla nonna.", translation: "He/she goes to grandma's." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Andare is highly irregular — its forms look nothing like the infinitive. Vado/vai/va/andiamo/andate/vanno. Memorise them as a set." },
            { type: "culture", content: "Andiamo! (Let's go!) is one of the most energetic Italian expressions — used literally and as encouragement. Dai, andiamo! (Come on, let's go!)" },
            { type: "forward-ref", content: "Andare a + infinitive = near future (going to do something). See it-g-a1-13.", refId: "it-g-a1-13" },
        ],
        fixedPhrases: [
            { native: "Vado a scuola / al lavoro / a casa.", translation: "I go to school / work / home.", note: "Most common destinations." },
            { native: "Andiamo!", translation: "Let's go!", note: "Huge frequency in Italian speech." },
            { native: "Va bene.", translation: "OK / That's fine.", note: "va = it goes (well) — fixed expression." },
            { native: "Come va?", translation: "How's it going?", note: "Informal greeting — not essere." },
        ],
        examples: [
            { native: "Vado a scuola ogni giorno.", translation: "I go to school every day." },
            { native: "Vai al supermercato?", translation: "Are you going to the supermarket?" },
            { native: "Lei va in ufficio.", translation: "She goes to the office." },
            { native: "Andiamo al cinema stasera!", translation: "Let's go to the cinema tonight!" },
            { native: "Loro vanno a Roma domani.", translation: "They are going to Rome tomorrow." }
        ],
        inlineVocab: [
            { word: "scuola", translation: "school" },
            { word: "supermercato", translation: "supermarket" },
            { word: "ufficio", translation: "office" },
            { word: "cinema", translation: "cinema / movie theater" },
            { word: "stasera", translation: "tonight / this evening" },
            { word: "domani", translation: "tomorrow" },
        ]
    },
    {
        id: "it-g-a1-14",
        level: "A1",
        title: "Core Prepositions: di, a, in, da, con, su, per",
        explanation: `Five prepositions contract with definite articles: a, di, da, su, in. Con is the only major one that does NOT contract. The contracted forms follow the same il/lo/l'/la pattern as the articles themselves — see the table.

Key uses: di (of/from origin), a (to/at cities), in (in countries/rooms), da (from/at someone's), con (with), su (on), per (for).`,
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
            pronouns: ["masc. singular", "fem. / vowel singular", "masc. plural", "fem. plural"],
            verbs: [
                { label: "a +", forms: ["al", "alla / all'", "ai / agli", "alle"] },
                { label: "di +", forms: ["del", "della / dell'", "dei / degli", "delle"] },
                { label: "da +", forms: ["dal", "dalla / dall'", "dai / dagli", "dalle"] },
                { label: "su +", forms: ["sul", "sulla / sull'", "sui / sugli", "sulle"] },
                { label: "in +", forms: ["nel", "nella / nell'", "nei / negli", "nelle"] },
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
                result: "follows the article pattern — see table",
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
        id: "it-g-a1-7",
        level: "A1",
        title: "Regular -ere and -ire Verb Conjugation",
        explanation: `-ere and -ire verbs complete the three Italian conjugation classes. The endings are shown in the table. The key distinction for -ire verbs is the two sub-patterns: Type 1 (dormire, aprire, partire) follows a straightforward pattern; Type 2 (finire, capire, preferire, pulire) inserts -isc- before the io/tu/lui/loro endings — but NOT noi and voi.`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [
                { label: "scrivere (-ere)", forms: ["scrivo", "scrivi", "scrive", "scriviamo", "scrivete", "scrivono"] },
                { label: "dormire (-ire type 1)", forms: ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"] },
                { label: "finire (-ire type 2, -isc-)", forms: ["finisco", "finisci", "finisce", "finiamo", "finite", "finiscono"] },
            ],
        },
        paradigmTable: {
            pronouns: ["io", "tu", "lui/lei", "noi", "voi", "loro"],
            verbs: [
                { label: "-are endings", forms: ["-o", "-i", "-a", "-iamo", "-ate", "-ano"] },
                { label: "-ere endings", forms: ["-o", "-i", "-e", "-iamo", "-ete", "-ono"] },
                { label: "-ire type 1 endings", forms: ["-o", "-i", "-e", "-iamo", "-ite", "-ono"] },
                { label: "-ire type 2 endings", forms: ["-isco", "-isci", "-isce", "-iamo", "-ite", "-iscono"] },
            ],
        },
        rules: [
            {
                condition: "-ere verb",
                result: "Remove -ere, add: -o/-i/-e/-iamo/-ete/-ono",
                examples: [
                    { native: "scrivere: scrivo, scrivi, scrive…", translation: "to write: I write, you write, he/she writes…" },
                ],
            },
            {
                condition: "-ire type 1",
                result: "Remove -ire, add: -o/-i/-e/-iamo/-ite/-ono (dormire, aprire, partire, sentire)",
                examples: [
                    { native: "dormire: dormo, dormi, dorme…", translation: "to sleep: I sleep, you sleep, he/she sleeps…" },
                ],
            },
            {
                condition: "-ire type 2 (-isc-)",
                result: "Add -isc- before io/tu/lui/loro endings (finire, capire, preferire, pulire)",
                examples: [
                    { native: "finire: finisco / finisci / finisce — finiamo / finite / finiscono (no -isc- for noi/voi!)", translation: "to finish: I finish / you finish / he finishes — we finish / you all finish / they finish" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "The -isc- only appears in 4 of the 6 forms — NOT in noi and voi. Finiamo and finite are regular (no -isc-). This mirrors the boot/shoe pattern from stem-changing verbs." },
            { type: "tip", content: "Common -isc- verbs to memorise: finire (finish), capire (understand), preferire (prefer), pulire (clean), costruire (build). When you learn a new -ire verb, check if it's -isc- type." },
            { type: "warning", content: "There is no reliable rule for telling type 1 from type 2 — you must learn each verb's type when you learn the verb. That said, type 2 (-isc-) is the majority. If you are unsure, type 2 is the safer guess. The most important type 1 verbs to memorise: dormire, partire, sentire, aprire, seguire, vestire, servire." },
        ],
        examples: [
            { native: "Scrivo una lettera.", translation: "I write a letter." },
            { native: "Leggi il giornale?", translation: "Do you read the newspaper?" },
            { native: "Dormiamo fino alle dieci.", translation: "We sleep until ten." },
            { native: "Capisco l'italiano.", translation: "I understand Italian." },
            { native: "Finiscono il lavoro alle sei.", translation: "They finish work at six." }
        ],
        inlineVocab: [
            { word: "scrivere", translation: "to write" },
            { word: "lettera", translation: "letter" },
            { word: "giornale", translation: "newspaper" },
            { word: "dormire", translation: "to sleep" },
            { word: "finire", translation: "to finish" },
            { word: "capire", translation: "to understand" },
            { word: "preferire", translation: "to prefer" },
            { word: "pulire", translation: "to clean" },
            { word: "costruire", translation: "to build" },
            { word: "lavoro", translation: "work / job" },
        ]
    },
]
