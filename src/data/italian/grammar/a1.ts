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
    explanation: `**Essere** is one of the two key verbs meaning 'to be'. It is used for identity, nationality, profession, origin, and time.

Conjugation (present tense):
  io      → **sono**   (I am)
  tu      → **sei**    (you are)
  lui/lei → **è**      (he/she is)
  noi     → **siamo**  (we are)
  voi     → **siete**  (you all are)
  loro    → **sono**   (they are)`,
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
    explanation: `Avere means 'to have' and is used for possession, age, and many expressions. The 'h' is always silent.

Conjugation (present tense):
  io      → ho       (I have)
  tu      → hai      (you have)
  lui/lei → ha       (he/she has)
  noi     → abbiamo  (we have)
  voi     → avete    (you all have)
  loro    → hanno    (they have)

Common expressions:
  avere fame         → to be hungry
  avere sete         → to be thirsty
  avere N anni       → to be N years old
  avere freddo/caldo → to be cold/hot`,
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
    explanation: `Italian definite articles (= 'the') change based on gender, number, and the first letter of the following noun.

MASCULINE SINGULAR
  il  — before most consonants:           il libro, il cane, il padre
  lo  — before s+consonant, z, gn, ps, x: lo studente, lo zio, lo zaino
  l'  — before any vowel:                 l'amico, l'uomo

MASCULINE PLURAL
  i   — plural of il:                     i libri, i cani
  gli — plural of lo and l':              gli studenti, gli amici

FEMININE SINGULAR
  la  — before consonants:                la casa, la madre
  l'  — before vowels:                    l'amica, l'ora

FEMININE PLURAL
  le  — plural of both la and l':         le case, le amiche`,
    examples: [
      { native: "il libro", translation: "the book (masc., starts with l)" },
      { native: "lo studente", translation: "the student (masc., starts with st-)" },
      { native: "l'amico", translation: "the friend (masc., starts with vowel)" },
      { native: "la casa", translation: "the house (fem., starts with consonant)" },
      { native: "gli studenti / le case", translation: "the students / the houses (plurals)", speakText: "gli studenti, le case" }
    ]
  },
  {
    id: "it-g-a1-5",
    level: "A1",
    title: "Indefinite Articles",
    explanation: `Indefinite articles (= 'a' / 'an') change based on gender and the first letter of the following noun.

MASCULINE
  un   — before most consonants and vowels:  un libro, un amico
  uno  — before s+consonant, z, gn, ps, x:  uno studente, uno zaino

FEMININE
  una  — before consonants:                  una casa, una pizza
  un'  — before vowels:                      un'amica, un'ora

For 'some' (plural), use dei / degli / delle:
  dei libri (some books) | degli amici (some friends) | delle case (some houses)`,
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
    explanation: `Regular -are verbs are the most common in Italian. Remove the -are ending and add these endings:

  io      → -o    (parlo — I speak)
  tu      → -i    (parli — you speak)
  lui/lei → -a    (parla — he/she speaks)
  noi     → -iamo (parliamo — we speak)
  voi     → -ate  (parlate — you all speak)
  loro    → -ano  (parlano — they speak)

Common -are verbs: parlare (speak), lavorare (work), abitare (live), ascoltare (listen), comprare (buy), camminare (walk), mangiare (eat).`,
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
    explanation: `Regular -ere verbs: remove -ere and add:
  io → -o | tu → -i | lui/lei → -e | noi → -iamo | voi → -ete | loro → -ono
  Example — scrivere (to write): scrivo, scrivi, scrive, scriviamo, scrivete, scrivono

Regular -ire verbs have TWO patterns:

Type 1 (dormire — to sleep): -o, -i, -e, -iamo, -ite, -ono
  dormo, dormi, dorme, dormiamo, dormite, dormono

Type 2 (finire — to finish, capire — to understand): add -isc- before the ending for io / tu / lui / loro:
  finisco, finisci, finisce, finiamo, finite, finiscono

Other Type 2 verbs: preferire (prefer), pulire (clean), costruire (build).`,
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
    explanation: `**Andare** means 'to go'. Its present tense is highly irregular — memorise it!

Conjugation (present tense):
  io      → **vado**    (I go)
  tu      → **vai**     (you go)
  lui/lei → **va**      (he/she goes)
  noi     → andiamo (we go)
  voi     → andate  (you all go)
  loro    → **vanno**   (they go)

Note: noi/voi follow a regular-looking pattern; the other forms are irregular.
Usage: andare + a + place → andare a scuola, andare al cinema, andare in Italia.`,
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
    explanation: `**Fare** means 'to do' or 'to make'. It is highly irregular — memorise it!

Conjugation (present tense):
  io      → **faccio**   (I do/make)
  tu      → **fai**      (you do/make)
  lui/lei → **fa**       (he/she does/makes)
  noi     → **facciamo** (we do/make)
  voi     → **fate**     (you all do/make)
  loro    → **fanno**    (they do/make)

Common expressions with fare:
  fare colazione       → to have breakfast
  fare sport           → to play sports / exercise
  fare una domanda     → to ask a question
  fare la spesa        → to do the grocery shopping
  fare una passeggiata → to take a walk
  fare il bagno        → to take a bath`,
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
    explanation: `Italian adjectives must agree with the noun in gender and number.

-o / -a / -i / -e pattern (most adjectives):
  Masc. singular: -o  →  un libro rosso       (a red book)
  Fem. singular:  -a  →  una casa rossa        (a red house)
  Masc. plural:   -i  →  i libri rossi         (the red books)
  Fem. plural:    -e  →  le case rosse         (the red houses)

-e / -i pattern (adjectives ending in -e, same for both genders):
  Singular: -e  →  un libro interessante / una storia interessante
  Plural:   -i  →  libri interessanti / storie interessanti

POSITION
• Adjectives usually come AFTER the noun: un ragazzo alto, una pizza buona
• These common ones usually come BEFORE: bello, vecchio, grande, buono, cattivo, primo
• Position can change meaning:
    un grande uomo = a great man  |  un uomo grande = a big/tall man`,
    examples: [
      { native: "un libro interessante / una storia interessante", translation: "an interesting book / an interesting story", speakText: "un libro interessante, una storia interessante" },
      { native: "Il ragazzo alto / La ragazza alta", translation: "The tall boy / The tall girl", speakText: "Il ragazzo alto, La ragazza alta" },
      { native: "I libri rossi / Le case rosse", translation: "The red books / The red houses", speakText: "I libri rossi, Le case rosse" },
      { native: "un bel ragazzo / una bella ragazza", translation: "a handsome boy / a beautiful girl (before noun)", speakText: "un bel ragazzo, una bella ragazza" },
      { native: "un grande uomo / un uomo grande", translation: "a great man / a big man (position changes meaning)", speakText: "un grande uomo, un uomo grande" }
    ]
  },
  {
    id: "it-g-a1-13",
    level: "A1",
    title: "The Near Future (A1 Bridge)",
    explanation: `Italian has two structures for the near future — no need for the futuro semplice yet.

STARE PER + INFINITIVE — something about to happen RIGHT NOW:
  Sto per uscire.           = I am about to go out.
  Sta per piovere.          = It is about to rain.
  Stiamo per mangiare.      = We are about to eat.

ANDARE A + INFINITIVE — a plan or intention (= English 'going to'):
  Vado a mangiare.                  = I am going to eat.
  Andiamo a vedere un film stasera. = We're going to watch a film tonight.
  Vai a studiare adesso?            = Are you going to study now?

KEY DIFFERENCE
  Sto per partire.  → leaving any minute now (imminent)
  Vado a partire.   → I plan to leave (not necessarily right now)

Useful time words: adesso (now), subito (right away), presto (soon), dopo (later), domani (tomorrow), stasera (tonight)`,
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
    ]
  },
  {
    id: "it-g-a1-15",
    level: "A1",
    title: "Numbers & Telling Time",
    explanation: `Numbers 1-20 must be memorised — they are all irregular. Learn them by heart!

   1  uno          11  undici
   2  due          12  dodici
   3  tre          13  tredici
   4  quattro      14  quattordici
   5  cinque       15  quindici
   6  sei          16  sedici
   7  sette        17  diciassette
   8  otto         18  diciotto
   9  nove         19  diciannove
  10  dieci        20  venti

TELLING THE TIME
Use 'Sono le' + number for most times:
  Sono le tre.              = It's three o'clock.
  Sono le otto e mezza.     = It's half past eight.
  Sono le undici e un quarto. = It's quarter past eleven.

Exceptions — singular forms use 'è' not 'sono':
  È l'una.       = It's one o'clock.
  È mezzogiorno. = It's noon.
  È mezzanotte.  = It's midnight.

Useful time phrases: e mezza (half past), e un quarto (quarter past), meno un quarto (quarter to)`,
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
      { native: "cane (KA-ne) / cena (CHA-na)", speakText: "cane, cena", translation: "C before a = hard k / C before e = ch sound" },
      { native: "perché (per-KE) / che (KE)", speakText: "perché, che", translation: "CH before e/i always restores the hard k sound" },
      { native: "gelato (je-LA-to) / gatto (GA-to)", speakText: "gelato, gatto", translation: "G before e = soft j / G before a = hard g" },
      { native: "nono vs nonno", speakText: "nono, nonno", translation: "Double consonants matter — they change meaning" },
      { native: "medico, studente, città", translation: "Stress patterns — accent marks show exceptions" },
    ]
  },
  {
    id: "it-g-a1-18",
    level: "A1",
    title: "Numbers 20-100",
    explanation: `From 20 onwards, Italian numbers follow a regular pattern. Learn the tens:

  venti    20    trenta   30    quaranta  40    cinquanta  50
  sessanta 60    settanta 70    ottanta   80    novanta    90    cento    100

BUILDING COMPOUND NUMBERS
Attach the unit directly to the ten (no space, no hyphen):
  trenta + due  = trentadue (32)
  quaranta + sei = quarantasei (46)
  settanta + tre = settantatré (73)

SPELLING RULES — important!
• Drop the final vowel of the ten before uno and otto:
    ventuno (21) ✓    NOT ventiuno
    ventotto (28) ✓   NOT ventiotto
    trentuno (31) ✓   trentotto (38) ✓
• Tre at the end takes a written accent:
    ventitré (23), trentatré (33), quarantatré (43)...

HUNDREDS & THOUSANDS
  cento = 100 (never 'un cento')
  duecento = 200 | trecento = 300 | quattrocento = 400...
  mille = 1,000 | duemila = 2,000 (mila is the plural of mille)`,
    examples: [
      { native: "Trenta euro, per favore.", translation: "Thirty euros, please." },
      { native: "Ho quarantadue anni.", translation: "I am forty-two years old." },
      { native: "Costa cinquantotto euro.", translation: "It costs fifty-eight euros." },
      { native: "Cento per cento italiano.", translation: "One hundred percent Italian." },
      { native: "Ventuno studenti in classe.", translation: "Twenty-one students in class." },
    ]
  },
  {
    id: "it-g-a1-19",
    level: "A1",
    title: "Modal Verbs: volere & potere",
    explanation: `Volere (to want) and potere (to be able to / can) are modal verbs — they are followed directly by an infinitive. No preposition needed between the modal and the infinitive.

Structure: subject + modal verb + infinitive (+ rest of sentence)
  Voglio mangiare una pizza.   = I want to eat a pizza.
  Puoi parlare italiano?       = Can you speak Italian?
  Non possiamo venire stasera. = We can't come tonight.

VOLERE — to want (to do something):
  io      → voglio   (I want)
  tu      → vuoi     (you want)
  lui/lei → vuole    (he/she wants)
  noi     → vogliamo (we want)
  voi     → volete   (you all want)
  loro    → vogliono (they want)

POTERE — to be able to / can:
  io      → posso    (I can)
  tu      → puoi     (you can)
  lui/lei → può      (he/she can)
  noi     → possiamo (we can)
  voi     → potete   (you all can)
  loro    → possono  (they can)

Important: always use the infinitive after these verbs.
  ✓ Voglio cucinare.   (I want to cook.)
  ✗ Voglio cucino.     (WRONG)`,
    examples: [
      { native: "Voglio imparare l'italiano.", translation: "I want to learn Italian." },
      { native: "Puoi aiutarmi?", translation: "Can you help me?" },
      { native: "Non posso venire domani.", translation: "I can't come tomorrow." },
      { native: "Vuole cucinare stasera.", translation: "She wants to cook tonight." },
      { native: "Possiamo parlare italiano insieme.", translation: "We can speak Italian together." },
    ]
  },
  {
    id: "it-g-a1-20",
    level: "A1",
    title: "Ordering Food & Drinks",
    explanation: `AT THE RESTAURANT — key phrases for ordering

GETTING ATTENTION / ASKING
  Scusi!                   → Excuse me! (to call the waiter)
  Avete un tavolo per due? → Do you have a table for two?
  Posso vedere il menù?    → Can I see the menu?
  Cosa mi consiglia?       → What do you recommend?

ORDERING
  Vorrei...                → I would like... (polite, most common)
  Prendo...                → I'll have... (lit. 'I take')
  Per me...                → For me...
  Da bere, vorrei...       → To drink, I would like...

  Vorrei una pizza margherita.     = I would like a margherita pizza.
  Prendo il risotto, grazie.       = I'll have the risotto, thanks.
  Per me un'acqua minerale.        = A mineral water for me.

ASKING FOR MORE / ENDING
  Altro?                   → Anything else? (waiter asks)
  No, grazie, va bene così. → No thanks, that's fine.
  Il conto, per favore.    → The bill, please.
  È incluso il servizio?   → Is the service included?`,
    examples: [
      { native: "Vorrei una pizza e un'acqua, per favore.", translation: "I would like a pizza and a water, please." },
      { native: "Prendo il risotto.", translation: "I'll have the risotto." },
      { native: "Cosa mi consiglia?", translation: "What do you recommend?" },
      { native: "Il conto, per favore.", translation: "The bill, please." },
      { native: "Avete un tavolo per tre?", translation: "Do you have a table for three?" }
    ]
  },
  {
    id: "it-g-a1-21",
    level: "A1",
    title: "Professions & Talking About Work",
    explanation: `SAYING WHAT YOU DO
Use essere + profession — no article before the profession (unlike English):
  Sono medico.          = I am a doctor.       (NOT: Sono un medico.)
  È insegnante.         = She is a teacher.
  Siamo studenti.       = We are students.

Exception: with an adjective, the article returns:
  È un buon medico.     = He is a good doctor.

ASKING ABOUT WORK
  Cosa fai?             → What do you do?
  Che lavoro fai?       → What work do you do?
  Dove lavori?          → Where do you work?
  In cosa lavori?       → What field do you work in?

TALKING ABOUT WHERE YOU WORK
Use lavorare + in / a + place:
  Lavoro in un ospedale.    = I work in a hospital.
  Lavoro a scuola.          = I work at school.
  Lavoro in ufficio.        = I work in an office.

COMMON PROFESSIONS
  il medico / la dottoressa    → doctor
  l'insegnante                 → teacher (masc. & fem.)
  l'avvocato                   → lawyer
  il cuoco / la cuoca          → cook / chef
  il cameriere / la cameriera  → waiter / waitress
  l'ingegnere                  → engineer
  l'attore / l'attrice         → actor / actress`,
    examples: [
      { native: "Sono insegnante. Lavoro a scuola.", translation: "I am a teacher. I work at school." },
      { native: "Che lavoro fai?", translation: "What do you do for work?" },
      { native: "Mia madre è medico.", translation: "My mother is a doctor." },
      { native: "Lavoro in un ristorante come cameriere.", translation: "I work in a restaurant as a waiter." },
      { native: "È un bravo avvocato.", translation: "He is a good lawyer. (adjective → article returns)" }
    ]
  },
  {
    id: "it-g-a1-22",
    level: "A1",
    title: "Giving & Understanding Directions",
    explanation: `KEY DIRECTION VERBS
  girare      → to turn          Gira a destra.     (Turn right.)
  andare      → to go            Vai dritto.        (Go straight.)
  continuare  → to continue      Continua dritto.   (Keep going straight.)
  attraversare → to cross        Attraversa la piazza. (Cross the square.)
  prendere    → to take (a road) Prendi la prima a sinistra. (Take the first left.)

DIRECTION WORDS
  a destra        → to the right / on the right
  a sinistra      → to the left / on the left
  dritto / sempre dritto → straight ahead
  in fondo        → at the end (of the road / street)
  all'angolo      → at the corner
  di fronte a     → opposite / in front of
  vicino a        → near / next to
  lontano da      → far from

USEFUL PHRASES
  Scusi, dov'è...?              → Excuse me, where is...?
  Come arrivo a...?             → How do I get to...?
  È lontano?                    → Is it far?
  È qui vicino.                 → It is nearby.
  Sono a piedi. / Sono in macchina. → I'm on foot. / I'm by car.
  Prenda la prima strada a destra.  → Take the first street on the right.
  È a cinque minuti a piedi.        → It's five minutes on foot.`,
    examples: [
      { native: "Gira a sinistra al semaforo.", translation: "Turn left at the traffic light." },
      { native: "Vai sempre dritto.", translation: "Go straight ahead." },
      { native: "Prendi la seconda strada a destra.", translation: "Take the second street on the right." },
      { native: "La banca è di fronte alla chiesa.", translation: "The bank is opposite the church." },
      { native: "Scusi, dov'è la stazione?", translation: "Excuse me, where is the train station?" },
      { native: "È a dieci minuti a piedi.", translation: "It's ten minutes on foot." }
    ]
  },
  {
    id: "it-g-a1-23",
    level: "A1",
    title: "Possessive Adjectives",
    explanation: `Possessive adjectives in Italian agree in gender and number with the noun they describe — not with the owner. They are almost always preceded by a definite article.

POSSESSIVE ADJECTIVES

  Owner        Masc. Sg.   Fem. Sg.    Masc. Pl.   Fem. Pl.
  io           mio          mia         miei         mie
  tu           tuo          tua         tuoi         tue
  lui / lei    suo          sua         suoi         sue
  noi          nostro       nostra      nostri       nostre
  voi          vostro       vostra      vostri       vostre
  loro         loro         loro        loro         loro    ← invariable

WITH THE DEFINITE ARTICLE — always use il/la/i/le before the possessive:
  il mio libro        my book
  la mia macchina     my car
  i tuoi amici        your friends
  le sue scarpe       his/her shoes

FAMILY MEMBER EXCEPTION — NO article with singular, unmodified family members:
  mio padre      (my father)      NOT il mio padre
  mia sorella    (my sister)      NOT la mia sorella
  tuo fratello   (your brother)
  Article returns in three cases:
  → plurals:    i miei genitori        (my parents)
  → adjective:  il mio caro padre      (my dear father)
  → loro:       la loro sorella        (their sister — always takes article)`,
    examples: [
      { native: "il mio libro", translation: "my book (masc. sg.)", speakText: "il mio libro" },
      { native: "la mia macchina", translation: "my car (fem. sg.)", speakText: "la mia macchina" },
      { native: "mio padre / mia madre", translation: "my father / my mother — no article for singular family", speakText: "mio padre, mia madre" },
      { native: "i miei genitori", translation: "my parents — article returns for plural family" },
      { native: "la loro sorella", translation: "their sister — 'loro' always takes the article" },
    ]
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
    ]
  },
  {
    id: "it-g-a1-25",
    level: "A1",
    title: "Reflexive Verbs",
    explanation: `Reflexive verbs express actions done to oneself. They use a reflexive pronoun that matches the subject. The pronoun goes BEFORE the conjugated verb.

REFLEXIVE PRONOUNS
  io      → mi       noi  → ci
  tu      → ti       voi  → vi
  lui/lei → si       loro → si

CONJUGATION EXAMPLE — alzarsi (to get up)
  io mi alzo          noi ci alziamo
  tu ti alzi          voi vi alzate
  lui/lei si alza     loro si alzano

COMMON REFLEXIVE VERBS
  chiamarsi       to be called         Mi chiamo Luca.
  alzarsi         to get up            Mi alzo alle sette.
  addormentarsi   to fall asleep       Si addormenta subito.
  lavarsi         to wash (oneself)    Ti lavi le mani?
  vestirsi        to get dressed       Mi vesto in fretta.
  sedersi         to sit down          Siediti qui!
  svegliarsi      to wake up           Si sveglia presto.

Note: The infinitive always ends in -si. Remove -si, then conjugate the verb normally and add the pronoun before.`,
    examples: [
      { native: "Mi chiamo Marta.", translation: "My name is Marta." },
      { native: "Mi alzo alle sette ogni mattina.", translation: "I get up at seven every morning." },
      { native: "Lei si veste velocemente.", translation: "She gets dressed quickly." },
      { native: "Ci laviamo le mani prima di mangiare.", translation: "We wash our hands before eating." },
      { native: "A che ora ti svegli?", translation: "What time do you wake up?" },
    ]
  },
  {
    id: "it-g-a1-26",
    level: "A1",
    title: "Adverbs of Place",
    explanation: `ADVERBS OF PLACE — answer dove? (where?)

  qui / qua     here (near me)
  lì / là       there (away from me)
  vicino        nearby / close
  lontano       far away
  dentro        inside
  fuori         outside
  sopra         above / on top
  sotto         below / under
  davanti       in front
  dietro        behind
  dappertutto   everywhere

COMMON COMBINATIONS
  qui vicino        — near here
  lì in fondo       — at the far end (there)
  qui dentro        — in here
  là fuori          — out there

ASKING / ANSWERING LOCATION
  Dov'è la banca?          Where is the bank?
  È qui vicino.            It's nearby.
  È lontano da qui.        It's far from here.
  Il libro è sotto il tavolo. The book is under the table.`,
    examples: [
      { native: "Il libro è qui.", translation: "The book is here." },
      { native: "La stazione è lontano.", translation: "The station is far away." },
      { native: "Il gatto è sotto il letto.", translation: "The cat is under the bed." },
      { native: "C'è un bar qui vicino?", translation: "Is there a bar nearby?" },
      { native: "Siediti là.", translation: "Sit there." },
    ]
  },
  {
    id: "it-g-a1-27",
    level: "A1",
    title: "Adverbs of Time",
    explanation: `ADVERBS OF TIME — answer quando? (when?)

  oggi        today
  ieri        yesterday
  domani      tomorrow
  adesso / ora now
  dopo        later / after
  già         already
  ancora      still / yet / again
  presto      soon / early
  tardi       late
  prima       before / first
  poi         then / afterwards
  sempre      always (also frequency)
  mai         never (also frequency)

IN CONTEXT
  Oggi ho lezione.         Today I have class.
  Ieri sono andato al cinema. Yesterday I went to the cinema.
  Domani parto per Roma.   Tomorrow I'm leaving for Rome.
  Ho già mangiato.         I've already eaten.
  Sei ancora qui?          Are you still here?
  Arrivo presto.           I'll arrive soon / I'm arriving early.`,
    examples: [
      { native: "Oggi ho molto lavoro.", translation: "Today I have a lot of work." },
      { native: "Domani andiamo al mare.", translation: "Tomorrow we're going to the sea." },
      { native: "Ho già finito.", translation: "I've already finished." },
      { native: "Sei ancora a casa?", translation: "Are you still at home?" },
      { native: "Ci vediamo dopo.", translation: "See you later." },
    ]
  },
  {
    id: "it-g-a1-28",
    level: "A1",
    title: "Frequency Adverbs",
    explanation: `Frequency adverbs say how often something happens. They usually come AFTER the verb.

FREQUENCY SCALE (most → least)
  sempre          always
  di solito       usually / normally
  spesso          often
  a volte         sometimes
  raramente       rarely
  quasi mai       hardly ever
  mai             never

POSITION
Frequency adverbs normally go after the conjugated verb:
  Mangio sempre a casa.            (I always eat at home.)
  Di solito lavoro dalle nove.     (I usually work from nine.)
  A volte vado in palestra.        (I sometimes go to the gym.)
  Non vado mai in discoteca.       (I never go to clubs.)

Note: mai requires non before the verb — like all Italian negatives:
  Non mangio mai la carne.   (I never eat meat.)
  Non arriva mai in orario.  (He never arrives on time.)`,
    examples: [
      { native: "Vado sempre a piedi.", translation: "I always walk (go on foot)." },
      { native: "Di solito faccio colazione alle otto.", translation: "I usually have breakfast at eight." },
      { native: "A volte cucino io.", translation: "Sometimes I'm the one who cooks." },
      { native: "Non guardo mai la televisione.", translation: "I never watch television." },
      { native: "Con che frequenza vai in palestra?", translation: "How often do you go to the gym?" },
    ]
  },
  {
    id: "it-g-a1-29",
    level: "A1",
    title: "Basic Connectors",
    explanation: `Connectors link words and clauses. Even a small vocabulary becomes much more expressive when you use connectors.

COORDINATING (connect equal elements)
  e           and           Parlo italiano e un po' di spagnolo.
  o           or            Vuoi caffè o tè?
  ma / però   but           Mi piace, ma è caro.  |  È buono, però è caro.
  né...né     neither...nor Non mangio né carne né pesce.

SUBORDINATING (introduce dependent clauses)
  perché      because       Studio perché voglio imparare.
  che         that          Credo che sia vero.
  quando      when          Quando arrivo, ti chiamo.
  se          if            Se hai fame, c'è il pane.
  anche se    even if       Esco anche se piove.

SEQUENCING (order events and ideas)
  prima       first / before
  poi / dopo  then / after
  infine      finally
  anche       also / too
  inoltre     furthermore
  quindi      so / therefore

EXAMPLE PARAGRAPH
  Prima faccio colazione, poi mi vesto. Esco di casa alle otto perché lavoro lontano. A volte prendo il treno, ma di solito vado in macchina.`,
    examples: [
      { native: "Parlo italiano e un po' di spagnolo.", translation: "I speak Italian and a little Spanish." },
      { native: "Mi piace la pasta, ma preferisco il risotto.", translation: "I like pasta, but I prefer risotto." },
      { native: "Studio perché voglio parlare con gli italiani.", translation: "I study because I want to speak with Italians." },
      { native: "Prima faccio colazione, poi esco.", translation: "First I have breakfast, then I go out." },
      { native: "Se hai fame, c'è del pane in cucina.", translation: "If you're hungry, there's bread in the kitchen." },
    ]
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
    ]
  },
  {
    id: "it-g-a1-31",
    level: "A1",
    title: "C'è / Ci sono — There Is / There Are",
    explanation: `C'è and ci sono are the Italian equivalents of 'there is' and 'there are'. Unlike il y a in French, Italian uses two different forms depending on whether the noun is singular or plural.

FORMS
  c'è    — there is    (singular)    c'è = ci + è, contraction of ci è
  ci sono — there are  (plural)

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
  è / sono       → links subject to description (is / are)
  C'è un ristorante.    There is a restaurant.   (existence)
  È un buon ristorante. It is a good restaurant. (description)

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
      { native: "C'è Marco? — No, non c'è.", translation: "Is Marco here? — No, he's not here.", speakText: "C'è Marco? No, non c'è." },
      { native: "Ecco il conto.", translation: "Here is the bill." },
    ]
  },
  {
    id: "it-g-a1-32",
    level: "A1",
    title: "The Imperative — Giving Instructions & Commands",
    explanation: `The imperative is used to give instructions, commands, requests, and suggestions. Italian has imperative forms for tu (informal), noi (let's), and voi (plural/formal group). The formal singular imperative uses Lei and is covered separately at A2.

FORMING THE IMPERATIVE

-ARE VERBS (parlare — to speak):
  tu    → Parla!       (Speak! — informal singular)
  noi   → Parliamo!    (Let's speak!)
  voi   → Parlate!     (Speak! — plural)

-ERE VERBS (scrivere — to write):
  tu    → Scrivi!      (Write!)
  noi   → Scriviamo!   (Let's write!)
  voi   → Scrivete!    (Write! — plural)

-IRE VERBS TYPE 1 (dormire — to sleep):
  tu    → Dormi!
  noi   → Dormiamo!
  voi   → Dormite!

-IRE VERBS TYPE 2 (finire — to finish):
  tu    → Finisci!     (note the -isc- as in present tense — see a1-7)
  noi   → Finiamo!
  voi   → Finite!

KEY OBSERVATION: for -ere and -ire verbs, the tu imperative is identical to
the present tense tu form. For -are verbs, the tu imperative loses the -i:
  tu parli (present) → Parla! (imperative)
  tu scrivi (present) → Scrivi! (imperative — same form)

IRREGULAR IMPERATIVES — the most important:

  essere:  Sii paziente!    Siamo pronti!    Siate puntuali!
  avere:   Abbi pazienza!   Abbiamo fede!    Abbiate cura!
  andare:  Vai! / Va'!      Andiamo!         Andate!
  fare:    Fai! / Fa'!      Facciamo!        Fate!
  venire:  Vieni!           Veniamo!         Venite!
  dire:    Di'!             Diciamo!         Dite!
  stare:   Stai! / Sta'!    Stiamo!          State!

The short forms (Va'! Fa'! Di'! Sta'!) are common in informal speech — the
apostrophe marks the dropped syllable.

NEGATIVE IMPERATIVE
For tu: non + infinitive (NOT the imperative form — this is unique to tu):
  Non parlare!        Don't speak! (tu)
  Non mangiare!       Don't eat! (tu)

For noi and voi: non + imperative form:
  Non parliamo di questo.   Let's not talk about this.
  Non partite ancora!       Don't leave yet!

REFLEXIVE VERBS IN THE IMPERATIVE
The reflexive pronoun attaches to the end of the verb:
  Alzati!             Get up! (tu — alzarsi)
  Alziamoci!          Let's get up!
  Alzatevi!           Get up! (voi)
  Non ti alzare!      Don't get up! (tu negative — pronoun before infinitive)

See lesson a1-25 for reflexive verbs.

COMMON IMPERATIVE EXPRESSIONS
  Aspetta! / Aspettate!    Wait!
  Guarda! / Guardate!      Look!
  Ascolta! / Ascoltate!    Listen!
  Vieni qui!               Come here!
  Andiamo!                 Let's go!
  Dimmi!                   Tell me! (Di' + mi)
  Fammi vedere!            Let me see! (Fa' + mi)
  Stai tranquillo!         Calm down!`,
    examples: [
      { native: "Parla più lentamente, per favore.", translation: "Speak more slowly, please. (tu — informal)" },
      { native: "Ascoltate bene!", translation: "Listen carefully! (voi — plural)" },
      { native: "Andiamo!", translation: "Let's go!" },
      { native: "Non mangiare quello!", translation: "Don't eat that! (tu negative — non + infinitive)" },
      { native: "Alzati!", translation: "Get up! (reflexive imperative — pronoun attached)" },
      { native: "Fammi vedere.", translation: "Let me see. (Fa' + mi — contracted)" },
    ]
  },
  {
    id: "it-g-a1-33",
    level: "A1",
    title: "Dovere — Must / Have To / Should",
    explanation: `**Dovere** expresses obligation, necessity, and probability. Along with volere (a1-19) and potere (a1-19), it completes the core modal verb trio in Italian. It is irregular — memorise it.

CONJUGATION (present tense):
  io      → **devo**     (I must)
  tu      → **devi**     (you must)
  lui/lei → **deve**     (he/she must)
  noi     → **dobbiamo** (we must)
  voi     → **dovete**   (you must)
  loro    → **devono**   (they must)

Always followed by an infinitive:
  Devo partire.          I must leave.
  Devi mangiare.         You have to eat.
  Deve lavorare.         He/she has to work.

THREE MEANINGS OF DOVERE

1. OBLIGATION — must / have to (external necessity):
   Devo andare dal medico.        I have to go to the doctor.
   Dovete prenotare in anticipo.  You must book in advance.

2. MORAL DUTY — should / ought to:
   Devi chiamare tua madre.       You should call your mother.
   Dobbiamo rispettare gli altri. We should respect others.

3. PROBABILITY — must (logical deduction):
   È mezzogiorno — devi avere fame.  It's noon — you must be hungry.
   Non risponde, deve dormire.        She's not answering, she must be sleeping.

DOVERE vs POTERE vs VOLERE — quick comparison:
  Devo partire.    I must leave.     (obligation — no real choice)
  Posso partire.   I can leave.      (ability/permission — it's possible)
  Voglio partire.  I want to leave.  (desire — personal wish)

See lesson a1-19 for volere and potere.

NEGATIVE — non before dovere:
  Non devo lavorare domani.    I don't have to work tomorrow.
  Non devi fumare qui.         You must not smoke here.

Note the important distinction:
  Non devo    → I don't have to (no obligation)
  Non posso   → I can't (no ability/permission)
  Non devo fumare.   I don't have to smoke. (it's not required)
  Non posso fumare.  I can't smoke. (it's not allowed / I'm unable to)`,
    examples: [
      { native: "Devo studiare stasera.", translation: "I have to study tonight." },
      { native: "Devi parlare con il professore.", translation: "You should speak with the teacher." },
      { native: "Deve essere stanca.", translation: "She must be tired. (probability)" },
      { native: "Dobbiamo partire alle otto.", translation: "We have to leave at eight." },
      { native: "Dovete prenotare in anticipo.", translation: "You must book in advance." },
      { native: "Non devo lavorare domani.", translation: "I don't have to work tomorrow." },
    ]
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
    ]
  },
]
