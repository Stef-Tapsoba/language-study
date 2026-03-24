import { GrammarLesson } from "../../../../types"

export const practicalExpressionsLessons: GrammarLesson[] = [
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
        ],
        inlineVocab: [
            { word: "mezzogiorno", translation: "noon / midday" },
            { word: "mezzanotte", translation: "midnight" },
            { word: "negozio", translation: "shop / store" },
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
        ],
        inlineVocab: [
            { word: "caffè", translation: "coffee" },
            { word: "gatti", translation: "cats" },
            { word: "pesce", translation: "fish" },
            { word: "vino", translation: "wine" },
            { word: "leggere", translation: "to read" },
            { word: "film", translation: "film / movie" },
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
        ],
        inlineVocab: [
            { word: "euro", translation: "euro(s)" },
            { word: "anni", translation: "years" },
            { word: "classe", translation: "class / classroom" },
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
        ],
        inlineVocab: [
            { word: "tavolo", translation: "table" },
            { word: "menù", translation: "menu" },
            { word: "cameriere", translation: "waiter" },
            { word: "risotto", translation: "risotto" },
            { word: "acqua", translation: "water" },
            { word: "servizio", translation: "service" },
            { word: "conto", translation: "bill / check" },
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
        ],
        inlineVocab: [
            { word: "medico", translation: "doctor" },
            { word: "insegnante", translation: "teacher" },
            { word: "avvocato", translation: "lawyer" },
            { word: "cuoco", translation: "cook / chef" },
            { word: "cameriere", translation: "waiter" },
            { word: "ingegnere", translation: "engineer" },
            { word: "attore", translation: "actor" },
            { word: "ospedale", translation: "hospital" },
            { word: "ristorante", translation: "restaurant" },
        ]
    },
    {
        id: "it-g-a1-35",
        level: "A1",
        title: "Telling Dates",
        explanation: `Italian dates use a simple formula: il + cardinal number + month (+ year).
No ordinals except for the 1st — use 'primo', not 'uno'.

THE DATE FORMULA
  il + number + month

  il primo gennaio    = the 1st of January
  il due febbraio     = the 2nd of February
  il quindici agosto  = the 15th of August
  il ventitré marzo   = the 23rd of March

SAYING TODAY'S DATE
  Oggi è il quattro luglio.   = Today is the 4th of July.
  Oggi è il primo maggio.     = Today is the 1st of May.

ASKING THE DATE
  Che giorno è oggi?       → What day is today? (also used for day of week)
  Quanti ne abbiamo oggi?  → What's today's date? (lit. "how many do we have today?")
  In che data siamo?       → What is the date?

THE 1st — always 'primo'
  ✓ il primo ottobre   = the 1st of October
  ✗ NOT: il uno ottobre

WITH DAY OF WEEK
  Add the day before the date:
  lunedì, il tre aprile          = Monday the 3rd of April
  sabato, il ventisei dicembre   = Saturday the 26th of December

YEARS
  Attach to the date with no preposition:
  Sono nato/a il quindici agosto duemilauno.  = I was born on 15th August 2001.
  duemilaventisei = 2026`,
        examples: [
            { native: "Oggi è il tre marzo.", translation: "Today is the 3rd of March." },
            { native: "Il mio compleanno è il primo aprile.", translation: "My birthday is the 1st of April." },
            { native: "Quanti ne abbiamo oggi? — Il dieci.", translation: "What's today's date? — The 10th." },
            { native: "La festa è venerdì, il quattordici febbraio.", translation: "The party is on Friday the 14th of February." },
            { native: "Sono nata il ventitré luglio duemilacinque.", translation: "I was born on the 23rd of July 2005." },
            { native: "Che giorno è oggi? — È martedì.", translation: "What day is today? — It's Tuesday." },
        ],
        inlineVocab: [
            { word: "il primo", translation: "the 1st (use for dates, not 'uno')" },
            { word: "il compleanno", translation: "birthday" },
            { word: "nato/nata", translation: "born (masc./fem.)" },
            { word: "la festa", translation: "party / celebration" },
            { word: "oggi", translation: "today" },
            { word: "quanti ne abbiamo?", translation: "what's the date? (informal)" },
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
        ],
        inlineVocab: [
            { word: "girare", translation: "to turn" },
            { word: "attraversare", translation: "to cross" },
            { word: "piazza", translation: "square / plaza" },
            { word: "semaforo", translation: "traffic light" },
            { word: "banca", translation: "bank" },
            { word: "chiesa", translation: "church" },
            { word: "strada", translation: "street / road" },
            { word: "angolo", translation: "corner" },
        ]
    },
]
