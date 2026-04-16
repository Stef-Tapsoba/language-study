import { GrammarLesson } from "../../../../types"

export const practicalExpressionsLessons: GrammarLesson[] = [
    {
        id: "it-g-a1-15",
        level: "A1",
        exerciseType: "dictation" as const,
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
        ],
        paradigmTable: {
            pronouns: ["Time", "Italian", "Notes"],
            verbs: [
                { label: "1:00", forms: ["1:00", "È l'una.", "è + l'una (singular, l' + una)"] },
                { label: "2:00+", forms: ["2:00+", "Sono le due / tre…", "sono + le + number"] },
                { label: "X:30", forms: ["X:30", "Sono le tre e mezza.", "e mezza = half past"] },
                { label: "X:15", forms: ["X:15", "Sono le quattro e un quarto.", "e un quarto = quarter past"] },
                { label: "X:45", forms: ["X:45", "Sono le cinque meno un quarto.", "meno un quarto = quarter to"] },
                { label: "noon", forms: ["12:00", "È mezzogiorno.", ""] },
                { label: "midnight", forms: ["00:00", "È mezzanotte.", ""] },
            ],
        },
        rules: [
            {
                condition: "1:00 — singular",
                result: "È l'una (not Sono) — l' + una contracts",
                examples: [
                    { native: "È l'una.", translation: "It's one o'clock." },
                    { native: "È l'una e mezza.", translation: "It's half past one." },
                ],
            },
            {
                condition: "All other hours",
                result: "Sono le + number",
                examples: [
                    { native: "Sono le due.", translation: "It's two o'clock." },
                    { native: "Sono le otto e un quarto.", translation: "It's quarter past eight." },
                ],
            },
            {
                condition: "Half past",
                result: "e mezza",
                examples: [
                    { native: "Sono le tre e mezza.", translation: "It's half past three." },
                    { native: "È l'una e mezza.", translation: "It's half past one." },
                ],
            },
            {
                condition: "Quarter past / quarter to",
                result: "e un quarto (past) / meno un quarto (to)",
                examples: [
                    { native: "Sono le cinque e un quarto.", translation: "It's quarter past five." },
                    { native: "Sono le sei meno un quarto.", translation: "It's quarter to six." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The key split: È l'una (1:xx — singular, è + l') vs Sono le... (all other hours — plural, sono + le).",
            },
            {
                type: "culture",
                content: "Italians use both 12-hour (with di mattina/del pomeriggio/di sera) and 24-hour clock. The 24-hour clock is standard for transport and formal contexts.",
            },
        ],
        fixedPhrases: [
            { native: "Che ore sono?", translation: "What time is it?", note: "Most natural time question." },
            { native: "Sono le tre.", translation: "It's three o'clock.", note: "Standard format." },
            { native: "È l'una e mezza.", translation: "It's half past one.", note: "Only hour using è l'." },
            { native: "A che ora…?", translation: "At what time…?", note: "For asking when something happens." },
        ],
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
        id: "it-g-a1-18",
        level: "A1",
        exerciseType: "dictation" as const,
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
        ],
        paradigmTable: {
            pronouns: ["Number", "Italian", "Notes"],
            verbs: [
                { label: "20", forms: ["20", "venti", "base"] },
                { label: "21", forms: ["21", "ventuno", "venti + uno → drops the i"] },
                { label: "22-29", forms: ["22-29", "ventidue, ventitre…", "venti + unit (drops i before uno/otto)"] },
                { label: "28", forms: ["28", "ventotto", "venti + otto → drops the i"] },
                { label: "30-90", forms: ["30-90", "trenta/quaranta/cinquanta/sessanta/settanta/ottanta/novanta", "tens"] },
                { label: "31+", forms: ["31+", "trentuno, trentadue…", "ten + unit (no 'e')"] },
                { label: "100", forms: ["100", "cento", "exactly 100 = cento (no article)"] },
                { label: "101-199", forms: ["101-199", "centouno, centoventi…", "cento + rest"] },
            ],
        },
        rules: [
            {
                condition: "21-29 formation",
                result: "venti + unit — drop the final vowel of venti before uno/otto",
                examples: [
                    { native: "ventuno", translation: "21" },
                    { native: "ventotto", translation: "28" },
                    { native: "ventidue", translation: "22" },
                    { native: "ventitré", translation: "23" },
                ],
            },
            {
                condition: "31 and above",
                result: "tens + unit — no 'e' needed, no dropped vowel",
                examples: [
                    { native: "trentuno", translation: "31" },
                    { native: "quarantadue", translation: "42" },
                    { native: "novantanove", translation: "99" },
                ],
            },
            {
                condition: "100",
                result: "Cento (exactly 100). Cento + rest for 101+",
                examples: [
                    { native: "Cento persone.", translation: "One hundred people." },
                    { native: "Centouno euro.", translation: "One hundred and one euros." },
                    { native: "Centoventi anni.", translation: "One hundred and twenty years." },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Unlike Spanish (veintiuno, veintidós as one word 21-29), Italian drops the final vowel: ventuno (not *ventiuno), ventotto (not *ventiotto). The rule: venti loses its -i before uno and otto.",
            },
            {
                type: "tip",
                content: "No 'e' between tens and units in Italian (unlike English \"thirty-one\"). Trentuno, not \"trenta e uno\".",
            },
            {
                type: "culture",
                content: "Numbers come up constantly in prices, ages, addresses. Mastering 1-100 is essential for daily life in Italy.",
            },
        ],
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
        ],
        rules: [
            {
                condition: "Ordering something",
                result: "Vorrei + noun (most polite). Prendo + noun. Per me + noun.",
                examples: [
                    { native: "Vorrei un caffè.", translation: "I'd like a coffee." },
                    { native: "Prendo la pasta.", translation: "I'll have the pasta." },
                    { native: "Per me l'acqua naturale.", translation: "Still water for me." },
                ],
            },
            {
                condition: "Asking about the menu",
                result: "C'è…? / Avete…? / Cos'è…?",
                examples: [
                    { native: "C'è il risotto oggi?", translation: "Is there risotto today?" },
                    { native: "Avete qualcosa di vegetariano?", translation: "Do you have something vegetarian?" },
                ],
            },
            {
                condition: "Asking for the bill",
                result: "Il conto, per favore.",
                examples: [
                    { native: "Il conto, per favore.", translation: "The bill, please." },
                    { native: "Possiamo avere il conto?", translation: "Can we have the bill?" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Vorrei (I would like — conditional of volere) is the most polite way to order. It's much softer than Voglio (I want) which can sound brusque. Always use Vorrei in restaurants and shops.",
            },
            {
                type: "culture",
                content: "In Italy, coffee culture has very specific rules. Un caffè = an espresso. Cappuccino is only for morning (before 11am). Asking for a \"large coffee\" will confuse people — order an espresso doppio.",
            },
        ],
        fixedPhrases: [
            { native: "Vorrei un caffè.", translation: "I'd like a coffee.", note: "vorrei = most polite ordering form." },
            { native: "Il conto, per favore.", translation: "The bill, please.", note: "Essential end-of-meal phrase." },
            { native: "C'è…? / Avete…?", translation: "Is there…? / Do you have…?", note: "Asking about availability." },
            { native: "Per me l'acqua naturale.", translation: "For me still water.", note: "Very common ordering phrase." },
            { native: "Posso avere…?", translation: "Can I have…?", note: "Polite alternative." },
        ],
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
        ],
        rules: [
            {
                condition: "Stating a profession with essere",
                result: "Essere + profession (no article)",
                examples: [
                    { native: "Sono insegnante.", translation: "I'm a teacher." },
                    { native: "È medico.", translation: "He/she is a doctor." },
                    { native: "Siamo studenti.", translation: "We are students." },
                ],
            },
            {
                condition: "Asking someone's profession",
                result: "Cosa fai? / Che lavoro fai? / Di cosa si occupa?",
                examples: [
                    { native: "Cosa fai di lavoro?", translation: "What do you do for work?" },
                    { native: "Di cosa si occupa Lei?", translation: "What do you do (formal)?" },
                ],
            },
            {
                condition: "Many Italian professions have masc./fem. forms",
                result: "Change -o → -a for feminine; or add -essa; or invariable",
                examples: [
                    { native: "insegnante", translation: "teacher (invariable)" },
                    { native: "dottore / dottoressa", translation: "doctor (m/f)" },
                    { native: "avvocato / avvocata", translation: "lawyer (m/f)" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "No article after essere for professions: \"Sono medico\" (not \"Sono un medico\"). This parallels Spanish and differs from English \"I'm a doctor.\"",
            },
            {
                type: "culture",
                content: "Asking someone's profession is common in Italian small talk. \"Cosa fai di bello?\" (What do you do that's good/nice?) is a warm, open-ended way to ask about someone's life and work.",
            },
        ],
        fixedPhrases: [
            { native: "Sono studente / studentessa.", translation: "I'm a student (m/f).", note: "No article after sono." },
            { native: "Cosa fai di lavoro?", translation: "What do you do for work?", note: "Most natural way to ask." },
            { native: "Lavoro in…", translation: "I work in…", note: "lavorare + in + field/place." },
            { native: "Sono in cerca di lavoro.", translation: "I'm looking for work.", note: "Common situation to describe." },
        ],
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
        ],
        paradigmTable: {
            pronouns: ["component", "Italian", "example"],
            verbs: [
                { label: "day of week", forms: ["lunedì/martedì/mercoledì/giovedì/venerdì/sabato/domenica", "Not capitalised", ""] },
                { label: "date formula", forms: ["il + ordinal + month", "il tre aprile", ""] },
                { label: "first of month", forms: ["il primo + month", "il primo maggio (NOT il uno)", ""] },
                { label: "year", forms: ["nel + year", "nel duemilaventisei (2026)", ""] },
                { label: "months", forms: ["gennaio feb. marzo aprile maggio giugno luglio agosto settembre ottobre novembre dicembre", "Not capitalised", ""] },
            ],
        },
        rules: [
            {
                condition: "Stating a date",
                result: "il + number + month (no ordinal except primo for the 1st)",
                examples: [
                    { native: "Oggi è il tre aprile.", translation: "Today is April 3rd." },
                    { native: "Il ventuno giugno.", translation: "The twenty-first of June." },
                ],
            },
            {
                condition: "The first of the month",
                result: "il primo (not il uno)",
                examples: [
                    { native: "il primo gennaio", translation: "the 1st of January" },
                    { native: "il primo maggio", translation: "the 1st of May" },
                ],
            },
            {
                condition: "Days of the week are not capitalised",
                result: "lunedì, martedì… (lowercase)",
                examples: [
                    { native: "Oggi è lunedì.", translation: "Today is Monday." },
                    { native: "Ci vediamo venerdì.", translation: "See you Friday." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Unlike English, Italian date order is DAY + MONTH (not month + day): il tre aprile = April 3rd. Remember this when reading Italian dates written numerically: 03/04 = 3 April (not March 4).",
            },
            {
                type: "tip",
                content: "Days of the week and months are not capitalised in Italian (unlike English). Lunedì, febbraio (not Lunedì, Febbraio).",
            },
        ],
        fixedPhrases: [
            { native: "Che giorno è oggi?", translation: "What day is today?", note: "Asking the day." },
            { native: "Oggi è il tre aprile.", translation: "Today is April 3rd.", note: "Standard date statement." },
            { native: "Il primo maggio.", translation: "The first of May.", note: "primo (not uno) for the 1st." },
            { native: "Ci vediamo venerdì.", translation: "See you Friday.", note: "Days of week — no article for specific day." },
        ],
    },
    {
        id: "it-g-a1-22",
        level: "A1",
        title: "Giving & Understanding Directions",
        explanation: `Italians give directions using landmarks, not street numbers. The key verbs are girare (turn), andare/continuare (go/keep going), attraversare (cross), and prendere (take — a road or turn). The direction words and useful phrases are in the table below.`,
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
        ],
        paradigmTable: {
            pronouns: ["Italian", "English"],
            verbs: [
                { label: "right / left", forms: ["a destra / a sinistra", "to the right / to the left"] },
                { label: "straight ahead", forms: ["dritto / sempre dritto", "straight / keep going straight"] },
                { label: "at the end", forms: ["in fondo", "at the end of the road"] },
                { label: "at the corner", forms: ["all'angolo", "at the corner"] },
                { label: "opposite", forms: ["di fronte a", "opposite / in front of"] },
                { label: "near / far", forms: ["vicino a / lontano da", "near / far from"] },
            ],
        },
        fixedPhrases: [
            { native: "Scusi, dov'è...?", translation: "Excuse me, where is...?", note: "Standard way to ask for directions." },
            { native: "Come arrivo a...?", translation: "How do I get to...?", note: "Alternative opener." },
            { native: "È lontano? — No, è qui vicino.", translation: "Is it far? — No, it's nearby.", note: "Essential Q&A pair." },
            { native: "È a cinque minuti a piedi.", translation: "It's five minutes on foot.", note: "Giving a time estimate." },
            { native: "Prendi la prima a destra.", translation: "Take the first on the right.", note: "Most common direction instruction." },
        ],
        rules: [
            {
                condition: "Asking for directions",
                result: "Scusi, dov'è…? / Scusi, come si arriva a…?",
                examples: [
                    { native: "Scusi, dov'è la stazione?", translation: "Excuse me, where is the station?" },
                    { native: "Come si arriva al Duomo?", translation: "How do you get to the Duomo?" },
                ],
            },
            {
                condition: "Giving directions sequence",
                result: "Vada/Vai dritto, poi giri/gira a destra/sinistra",
                examples: [
                    { native: "Vada dritto, poi giri a destra alla piazza.", translation: "Go straight, then turn right at the square." },
                ],
            },
            {
                condition: "How far / how long",
                result: "È lontano? / Quanto ci vuole?",
                examples: [
                    { native: "È lontano? — No, è qui vicino.", translation: "Is it far? — No, it's nearby." },
                    { native: "Quanto ci vuole? — Ci vogliono dieci minuti.", translation: "How long does it take? — It takes ten minutes." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Directions use the imperative (formal: vada, giri, prenda; informal: vai, girà, prendi). At A1, just learn the formal forms — they work with anyone and are always polite.",
            },
            {
                type: "culture",
                content: "Italians give directions using landmarks constantly: \"Vai fino alla farmacia, poi giri a sinistra.\" (Go to the pharmacy, then turn left.) Street numbers are less used than in other countries.",
            },
        ],
        fixedPhrases: [
            { native: "Scusi, dov'è…?", translation: "Excuse me, where is…?", note: "Standard direction-asking opener." },
            { native: "È qui vicino.", translation: "It's nearby.", note: "Most common reassuring answer." },
            { native: "Come si arriva a…?", translation: "How do you get to…?", note: "More open question for routes." },
            { native: "Quanto ci vuole?", translation: "How long does it take?", note: "ci vuole = it takes (impersonal)." },
            { native: "Sono perso / persa.", translation: "I'm lost.", note: "Essential phrase when you need help." },
        ],
    },
]
