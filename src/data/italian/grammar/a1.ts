import { GrammarLesson } from "../../../types"

export const a1Grammar: GrammarLesson[] = [
    {
        id: "it-g-a1-1",
        level: "A1",
        title: "Subject Pronouns",
        explanation: "Italian subject pronouns are often omitted because the verb ending identifies the subject. However, they can be used for emphasis or clarity. The pronouns are: io (I), tu (you informal), lui (he), lei (she), noi (we), voi (you plural), loro (they). Note: 'Lei' (capital) is also used as the formal 'you' in singular.",
        examples: [
            { native: "Io parlo italiano.", translation: "I speak Italian." },
            { native: "Tu sei studentessa.", translation: "You are a student (fem.)." },
            { native: "Lui lavora qui.", translation: "He works here." },
            { native: "Noi viviamo a Roma.", translation: "We live in Rome." },
            { native: "Loro sono amici.", translation: "They are friends." }
        ]
    },
    {
        id: "it-g-a1-2",
        level: "A1",
        title: "Essere (to be)",
        explanation: "Essere is one of the two key verbs meaning 'to be'. It is used for identity, nationality, profession, origin, and time. It is also the auxiliary for verbs of motion in the passato prossimo. Full conjugation: io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono.",
        examples: [
            { native: "Sono italiano.", translation: "I am Italian." },
            { native: "Tu sei studentessa?", translation: "Are you a student?" },
            { native: "Lei è medico.", translation: "She is a doctor." },
            { native: "Siamo stanchi.", translation: "We are tired." },
            { native: "Sono le otto.", translation: "It is eight o'clock." }
        ]
    },
    {
        id: "it-g-a1-3",
        level: "A1",
        title: "Avere (to have)",
        explanation: "Avere means 'to have' and is used to express possession, age, and many idiomatic expressions. Full conjugation: io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno. Note the irregular forms: io ho (not 'avo'), and the 'h' is always silent. Key expressions: avere fame (to be hungry), avere sete (to be thirsty), avere N anni (to be N years old).",
        examples: [
            { native: "Ho un cane.", translation: "I have a dog." },
            { native: "Quanti anni hai?", translation: "How old are you?" },
            { native: "Lei ha una macchina.", translation: "She has a car." },
            { native: "Abbiamo fame.", translation: "We are hungry." },
            { native: "Ho vent'anni.", translation: "I am twenty years old." }
        ]
    },
    {
        id: "it-g-a1-4",
        level: "A1",
        title: "Definite Articles",
        explanation: "Italian definite articles (the equivalent of 'the') change based on the gender, number, and first letter of the following noun. Masculine singular: 'il' (before most consonants), 'lo' (before s+consonant, z, gn, ps, x), 'l'' (before vowels). Feminine singular: 'la' (before consonants), 'l'' (before vowels). Masculine plural: 'i' (after il), 'gli' (after lo/l'). Feminine plural: 'le'.",
        examples: [
            { native: "il libro", translation: "the book (masc., starts with l)" },
            { native: "lo studente", translation: "the student (masc., starts with st-)" },
            { native: "l'amico", translation: "the friend (masc., starts with vowel)" },
            { native: "la casa", translation: "the house (fem., starts with consonant)" },
            { native: "gli studenti / le case", translation: "the students / the houses (plurals)" }
        ]
    },
    {
        id: "it-g-a1-5",
        level: "A1",
        title: "Indefinite Articles",
        explanation: "Indefinite articles (a/an) also change based on gender and first letter. Masculine: 'un' (before most consonants and vowels), 'uno' (before s+consonant, z, gn, ps, x). Feminine: 'una' (before consonants), 'un'' (before vowels). There is no plural indefinite article in Italian (use 'dei/degli/delle' for 'some').",
        examples: [
            { native: "un libro", translation: "a book (masc.)" },
            { native: "uno studente", translation: "a student (masc., starts with st-)" },
            { native: "una casa", translation: "a house (fem.)" },
            { native: "un'amica", translation: "a friend (fem., starts with vowel)" },
            { native: "Vorrei un caffè.", translation: "I would like a coffee." }
        ]
    },
    {
        id: "it-g-a1-6",
        level: "A1",
        title: "Regular -are Verb Conjugation",
        explanation: "Regular -are verbs are the most common in Italian. To conjugate, remove the -are ending and add: -o (io), -i (tu), -a (lui/lei), -iamo (noi), -ate (voi), -ano (loro). Common -are verbs: parlare (to speak), lavorare (to work), abitare (to live), ascoltare (to listen), comprare (to buy), camminare (to walk), mangiare (to eat — with slight spelling adjustment).",
        examples: [
            { native: "Io parlo.", translation: "I speak." },
            { native: "Tu lavori a Milano?", translation: "Do you work in Milan?" },
            { native: "Lei abita a Firenze.", translation: "She lives in Florence." },
            { native: "Noi ascoltiamo la musica.", translation: "We listen to music." },
            { native: "Loro comprano il pane.", translation: "They buy the bread." }
        ]
    },
    {
        id: "it-g-a1-7",
        level: "A1",
        title: "Regular -ere and -ire Verb Conjugation",
        explanation: "Regular -ere verbs: remove -ere, add -o, -i, -e, -iamo, -ete, -ono. Common -ere verbs: scrivere (to write), leggere (to read), vedere (to see), ricevere (to receive). Regular -ire verbs split into two patterns: Type 1 (dormire): -o, -i, -e, -iamo, -ite, -ono. Type 2 (finire, capire): insert -isc- before the ending for io/tu/lui/loro: finisco, finisci, finisce, finiamo, finite, finiscono.",
        examples: [
            { native: "Scrivo una lettera.", translation: "I write a letter." },
            { native: "Leggi il giornale?", translation: "Do you read the newspaper?" },
            { native: "Dormiamo fino alle dieci.", translation: "We sleep until ten." },
            { native: "Capisco l'italiano.", translation: "I understand Italian." },
            { native: "Finiscono il lavoro alle sei.", translation: "They finish work at six." }
        ]
    },
    {
        id: "it-g-a1-8",
        level: "A1",
        title: "Andare (to go)",
        explanation: "Andare is an essential irregular verb meaning 'to go'. Its present tense is highly irregular: io vado, tu vai, lui/lei va, noi andiamo, voi andate, loro vanno. Notice that the noi and voi forms follow a regular-looking pattern (andiamo, andate), while the other forms are irregular. Andare is used with 'a' + place: andare a scuola, andare al cinema.",
        examples: [
            { native: "Vado a scuola ogni giorno.", translation: "I go to school every day." },
            { native: "Vai al supermercato?", translation: "Are you going to the supermarket?" },
            { native: "Lei va in ufficio.", translation: "She goes to the office." },
            { native: "Andiamo al cinema stasera!", translation: "Let's go to the cinema tonight!" },
            { native: "Loro vanno a Roma domani.", translation: "They are going to Rome tomorrow." }
        ]
    },
    {
        id: "it-g-a1-9",
        level: "A1",
        title: "Fare (to do / to make)",
        explanation: "Fare is another highly irregular and extremely useful verb. Present tense: io faccio, tu fai, lui/lei fa, noi facciamo, voi fate, loro fanno. Fare is used in many fixed expressions: fare colazione (to have breakfast), fare sport (to play sports/exercise), fare una domanda (to ask a question), fare la spesa (to do the grocery shopping), fare una passeggiata (to take a walk), fare il bagno (to take a bath).",
        examples: [
            { native: "Faccio colazione alle sette.", translation: "I have breakfast at seven." },
            { native: "Cosa fai nel tempo libero?", translation: "What do you do in your free time?" },
            { native: "Fa molto caldo oggi.", translation: "It is very hot today." },
            { native: "Facciamo sport ogni sera.", translation: "We play sports every evening." },
            { native: "Fanno una passeggiata nel parco.", translation: "They take a walk in the park." }
        ]
    },
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
        ]
    },
    {
        id: "it-g-a1-11",
        level: "A1",
        title: "Question Formation",
        explanation: "In Italian, questions are often formed simply by raising intonation at the end of a statement. The word order does not need to change. Common question words: chi (who), cosa/che cosa (what), dove (where), quando (when), come (how), perché (why), quanto (how much/many), quale (which). These words come at the beginning of the question.",
        examples: [
            { native: "Parli italiano? (rising intonation)", translation: "Do you speak Italian?" },
            { native: "Come ti chiami?", translation: "What is your name? (lit. How do you call yourself?)" },
            { native: "Dove abiti?", translation: "Where do you live?" },
            { native: "Quando arrivi?", translation: "When do you arrive?" },
            { native: "Perché studi l'italiano?", translation: "Why do you study Italian?" }
        ]
    },
    {
        id: "it-g-a1-12",
        level: "A1",
        title: "Adjective Agreement",
        explanation: "Italian adjectives must agree in gender (masculine/feminine) and number (singular/plural) with the noun they describe. Most adjectives end in -o (masc. sg.), -a (fem. sg.), -i (masc. pl.), -e (fem. pl.). Some adjectives end in -e for both genders (singular) and -i for both (plural). Adjectives usually follow the noun, except BANGS adjectives (Beauty, Age, Numbering, Goodness/badness, Size): bello, vecchio, primo, buono, grande often come before.",
        examples: [
            { native: "un libro interessante / una storia interessante", translation: "an interesting book / an interesting story" },
            { native: "Il ragazzo alto / La ragazza alta", translation: "The tall boy / The tall girl" },
            { native: "I libri rossi / Le case rosse", translation: "The red books / The red houses" },
            { native: "un bel ragazzo / una bella ragazza", translation: "a handsome boy / a beautiful girl (before noun)" },
            { native: "un grande uomo / un uomo grande", translation: "a great man / a big man (position changes meaning)" }
        ]
    },
    {
        id: "it-g-a1-13",
        level: "A1",
        title: "The Near Future (A1 Bridge)",
        explanation: "Italian has two ways to express the near future at A1 level, before learning the futuro semplice. (1) Stare per + infinitive: expresses something that is about to happen very soon. (2) Andare a + infinitive: expresses a plan or intention (similar to English 'going to'). Both structures are widely used in spoken Italian and are very natural for beginners.",
        examples: [
            { native: "Sto per uscire.", translation: "I am about to go out." },
            { native: "Sta per piovere.", translation: "It is about to rain." },
            { native: "Vado a mangiare.", translation: "I am going to eat." },
            { native: "Andiamo a vedere un film stasera.", translation: "We are going to watch a film tonight." },
            { native: "Vai a studiare adesso?", translation: "Are you going to study now?" }
        ]
    },
    {
        id: "it-g-a1-14",
        level: "A1",
        title: "Core Prepositions: di, a, in, da, con, su, per",
        explanation: "Italian prepositions are small words that connect nouns to the rest of the sentence. The most important ones at A1:\n\ndi — of, from (origin, possession): Sono di Roma. Il libro di Maria.\na — to, at (destination/location with cities): Vado a Milano. Sono a casa.\nin — in, to (with countries, rooms, transport): Sono in Italia. Vado in treno.\nda — from, since, at someone's place: Vengo da Napoli. Vado da Marco.\ncon — with: Vivo con la mia famiglia.\nsu — on, about: Il libro è sul tavolo. (su + il = sul)\nper — for, in order to: Questo è per te. Studio per imparare.\n\nCRITICAL: Like French, Italian prepositions contract with definite articles.\na + il = al | a + la = alla | a + i = ai | a + gli = agli | a + le = alle | a + l' = all'\ndi + il = del | di + la = della | di + i = dei | di + gli = degli | di + le = delle\nsu + il = sul | su + la = sulla | su + i = sui | su + gli = sugli | su + le = sulle\nIn and con do NOT contract.",
        examples: [
            { native: "Vado al cinema.", translation: "I'm going to the cinema. (a + il = al)" },
            { native: "Sono di Milano.", translation: "I'm from Milan. (origin)" },
            { native: "Abito in Italia.", translation: "I live in Italy. (in + country)" },
            { native: "Il libro è sulla scrivania.", translation: "The book is on the desk. (su + la = sulla)" },
            { native: "Vengo da Roma.", translation: "I come from Rome." },
            { native: "Studio l'italiano per parlare con gli italiani.", translation: "I study Italian to speak with Italians." },
        ]
    },
    {
        id: "it-g-a1-15",
        level: "A1",
        title: "Numbers & Telling Time",
        explanation: "Italian numbers 1–20 must be memorised as they are irregular. From 20 onwards, they follow a pattern — but watch out for these rules:\n• Numbers ending in -a or -o drop the final vowel before uno or otto: ventuno (21), ventotto (28), trentuno (31)\n• 'Cento' (100) is invariable — never 'un cento'\n• Millions take 'un': un milione\n\nTo tell the time: use 'Sono le' + number for all times except one o'clock, which uses 'È l'una'. Noon is 'È mezzogiorno', midnight is 'È mezzanotte'.\n\nKey number words: uno(1), due(2), tre(3), quattro(4), cinque(5), sei(6), sette(7), otto(8), nove(9), dieci(10), undici(11), dodici(12), tredici(13), quattordici(14), quindici(15), sedici(16), diciassette(17), diciotto(18), diciannove(19), venti(20).",
        examples: [
            { native: "Sono le tre.", translation: "It's three o'clock." },
            { native: "È l'una e mezza.", translation: "It's half past one." },
            { native: "Sono le otto e un quarto.", translation: "It's quarter past eight." },
            { native: "Ho ventidue anni.", translation: "I am twenty-two years old." },
            { native: "Il negozio apre alle nove.", translation: "The shop opens at nine." },
            { native: "Sono le undici meno un quarto.", translation: "It's quarter to eleven." },
        ]
    },
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
        ]
    },
    {
        id: "it-g-a1-17",
        level: "A1",
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
            { native: "cane (KA-ne) / cena (CHA-na)", translation: "C before a = hard k / C before e = ch sound" },
            { native: "perché (per-KE) / che (KE)", translation: "CH before e/i always restores the hard k sound" },
            { native: "gelato (je-LA-to) / gatto (GA-to)", translation: "G before e = soft j / G before a = hard g" },
            { native: "nono (ninth) vs nonno (grandfather)", translation: "Double consonants matter — they change meaning" },
            { native: "MED-i-co / stu-DEN-te / cit-TÀ", translation: "Stress patterns — accent marks show exceptions" },
        ]
    },
]
