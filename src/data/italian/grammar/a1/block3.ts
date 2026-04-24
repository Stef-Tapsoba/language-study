import { GrammarLesson } from "../../../../types"

export const block3Lessons: GrammarLesson[] = [
    {
        id: "it-g-a1-25",
        level: "A1",
        title: "Reflexive Verbs",
        explanation: `Reflexive verbs express actions done to oneself. The reflexive pronoun (shown in the table) goes BEFORE the conjugated verb. The infinitive always ends in -si — remove -si, conjugate normally, add the matching pronoun before.

Common reflexive verbs: chiamarsi (to be called), alzarsi (to get up), svegliarsi (to wake up), lavarsi (to wash), vestirsi (to get dressed), addormentarsi (to fall asleep), sedersi (to sit down).`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [
                { label: "pronoun", forms: ["mi", "ti", "si", "ci", "vi", "si"] },
                { label: "alzarsi", forms: ["mi alzo", "ti alzi", "si alza", "ci alziamo", "vi alzate", "si alzano"] },
                { label: "chiamarsi", forms: ["mi chiamo", "ti chiami", "si chiama", "ci chiamiamo", "vi chiamate", "si chiamano"] },
            ],
        },
        rules: [
            {
                condition: "Forming a reflexive verb",
                result: "reflexive pronoun BEFORE the conjugated verb",
                examples: [
                    { native: "Mi chiamo Luca.", translation: "My name is Luca." },
                    { native: "Ti alzi tardi.", translation: "You get up late." },
                    { native: "Si veste in fretta.", translation: "He/she gets dressed in a hurry." },
                ],
            },
            {
                condition: "Infinitive of reflexive verbs",
                result: "remove -si, conjugate normally, add pronoun before",
                examples: [
                    { native: "alzarsi → mi alzo", translation: "to get up: I get up", annotation: "alzarsi → mi alzo" },
                    { native: "vestirsi → mi visto", translation: "to get dressed: I get dressed", annotation: "vestirsi → mi visto" },
                ],
            },
            {
                condition: "With infinitive",
                result: "attach to infinitive OR go before conjugated verb",
                examples: [
                    { native: "Voglio alzarmi.", translation: "I want to get up." },
                    { native: "Mi voglio alzare.", translation: "I want to get up. (same meaning)" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Mi chiamo (My name is) is literally \"I call myself.\" It's the standard way to give your name in Italian — always use chiamarsi, not \"il mio nome è\" (which is very formal/written)." },
            { type: "forward-ref", content: "Reflexive verbs in the imperative: the pronoun attaches to the end. Alzati! Get up! See lesson it-g-a1-32.", refId: "it-g-a1-32" },
        ],
        fixedPhrases: [
            { native: "Mi chiamo…", translation: "My name is…", note: "Standard self-introduction." },
            { native: "Come ti chiami?", translation: "What's your name?", note: "Reflexive question." },
            { native: "Mi alzo alle sette.", translation: "I get up at seven.", note: "Most common reflexive routine sentence." },
            { native: "Siediti! / Accomodati!", translation: "Sit down! / Make yourself comfortable!", note: "Very common hospitality phrases." },
        ],
        examples: [
            { native: "Mi chiamo Marta.", translation: "My name is Marta." },
            { native: "Mi alzo alle sette ogni mattina.", translation: "I get up at seven every morning." },
            { native: "Lei si veste velocemente.", translation: "She gets dressed quickly." },
            { native: "Ci laviamo le mani prima di mangiare.", translation: "We wash our hands before eating." },
            { native: "A che ora ti svegli?", translation: "What time do you wake up?" },
        ],
        inlineVocab: [
            { word: "chiamarsi", translation: "to be called" },
            { word: "alzarsi", translation: "to get up" },
            { word: "addormentarsi", translation: "to fall asleep" },
            { word: "lavarsi", translation: "to wash oneself" },
            { word: "vestirsi", translation: "to get dressed" },
            { word: "sedersi", translation: "to sit down" },
            { word: "svegliarsi", translation: "to wake up" },
            { word: "mani", translation: "hands" },
            { word: "mattina", translation: "morning" },
            { word: "fretta", translation: "hurry / rush" },
        ]
    },
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

Time-telling patterns are in the table below.`,
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
        referenceTable: {
            layout: "keyed",
            headers: ["Time", "Italian", "Notes"],
            rows: [
                { label: "1:00", cells: ["È l'una.", "singular — è + l'una"] },
                { label: "2:00+", cells: ["Sono le due / tre…", "sono + le + number"] },
                { label: "X:30", cells: ["Sono le tre e mezza.", "e mezza = half past"] },
                { label: "X:15", cells: ["Sono le quattro e un quarto.", "e un quarto = quarter past"] },
                { label: "X:45", cells: ["Sono le cinque meno un quarto.", "meno un quarto = quarter to"] },
                { label: "noon", cells: ["È mezzogiorno.", ""] },
                { label: "midnight", cells: ["È mezzanotte.", ""] },
            ],
        },
        rules: [
            {
                condition: "1:00 — singular",
                result: "È l'una — singular, not Sono le",
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
        id: "it-g-a1-18",
        level: "A1",
        exerciseType: "dictation" as const,
        title: "Numbers 20-100",
        explanation: `The tens are in the table. Compound numbers attach directly to the ten with no space or hyphen (trentadue, quarantasei).

Two spelling rules: drop the final vowel of the ten before uno and otto (ventuno, ventotto, trentuno, trentotto); tre at the end takes an accent (ventitré, trentatré).

Hundreds: cento = 100 (no article). Compounds: duecento, trecento… Thousands: mille (1,000), duemila (2,000) — note mila is the plural of mille.`,
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
        referenceTable: {
            layout: "strip",
            headers: ["20", "30", "40", "50", "60", "70", "80", "90", "100"],
            rows: [
                { cells: ["venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta", "cento"] },
            ],
        },
        rules: [
            {
                condition: "21-29 formation",
                result: "venti + unit · drop vowel before uno / otto",
                examples: [
                    { native: "ventuno", translation: "21" },
                    { native: "ventotto", translation: "28" },
                    { native: "ventidue", translation: "22" },
                    { native: "ventitré", translation: "23" },
                ],
            },
            {
                condition: "31 and above",
                result: "tens + unit directly (no space, no 'e')",
                examples: [
                    { native: "trentuno", translation: "31" },
                    { native: "quarantadue", translation: "42" },
                    { native: "novantanove", translation: "99" },
                ],
            },
            {
                condition: "100",
                result: "cento (exactly 100) · cento + rest for 101+",
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
        id: "it-g-a1-35",
        level: "A1",
        title: "Telling Dates",
        explanation: `Date formula: il + cardinal number + month. Day order is DAY + MONTH — the opposite of English. Days and months are never capitalised.

The 1st always uses primo, not uno: il primo maggio (never il uno maggio). Adding a day: lunedì, il tre aprile. Adding a year: attach directly — il quindici agosto duemilaventisei. Months are in the tables below.`,
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
            { word: "lunedì", translation: "Monday" },
            { word: "martedì", translation: "Tuesday" },
            { word: "mercoledì", translation: "Wednesday" },
            { word: "giovedì", translation: "Thursday" },
            { word: "venerdì", translation: "Friday" },
            { word: "sabato", translation: "Saturday" },
            { word: "domenica", translation: "Sunday" },
        ],
        referenceTable: {
            layout: "strip",
            headers: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
            rows: [
                { label: "Jan–Jun", cells: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno"] },
                { label: "Jul–Dec", cells: ["luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"] },
            ],
        },
        rules: [
            {
                condition: "Stating a date",
                result: "il + number + month (primo for the 1st only)",
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
        id: "it-g-a1-11",
        level: "A1",
        title: "Question Formation",
        explanation: `Yes/no questions are formed by raising your intonation — no word reordering needed. Statement: Parli italiano. → Question: Parli italiano? (same words, rising tone). Question words and examples are in the table below.`,
        examples: [
            { native: "Parli italiano? (rising intonation)", speakText: "Parli italiano?", translation: "Do you speak Italian?" },
            { native: "Come ti chiami?", translation: "What is your name?", annotation: "lit. How do you call yourself?" },
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
        referenceTable: {
            layout: "keyed",
            headers: ["Question word", "Meaning", "Example"],
            rows: [
                { label: "chi", cells: ["who", "Chi è lui?"] },
                { label: "cosa / che cosa", cells: ["what", "Cosa vuoi?"] },
                { label: "dove / dov'è", cells: ["where", "Dove abiti?"] },
                { label: "quando", cells: ["when", "Quando arrivi?"] },
                { label: "come / com'è", cells: ["how", "Come stai?"] },
                { label: "perché", cells: ["why / because", "Perché studi?"] },
                { label: "quanto/a/i/e", cells: ["how much / many", "Quanto costa?"] },
                { label: "quale / quali", cells: ["which", "Quale preferisci?"] },
                { label: "di dove", cells: ["where from", "Di dove sei?"] },
            ],
        },
        rules: [
            {
                condition: "Yes/no question",
                result: "Raise intonation — no word order change needed",
                examples: [
                    { native: "Parli italiano?", translation: "Do you speak Italian?", annotation: "same words as statement, just rising tone" },
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
                result: "keep non before the verb even with mai/niente/nessuno",
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
        id: "it-g-a1-9",
        level: "A1",
        title: "Fare (to do / to make)",
        explanation: `**Fare** means 'to do' or 'to make'. It is highly irregular — memorise it. Fare is extremely versatile and forms dozens of compound expressions that would require different verbs in English.

Common fare compounds: fare colazione (have breakfast), fare sport (play sport / exercise), fare una domanda (ask a question), fare la spesa (do the grocery shopping), fare una passeggiata (take a walk), fare il bagno (take a bath).`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [{ label: "fare", forms: ["faccio", "fai", "fa", "facciamo", "fate", "fanno"] }],
        },
        rules: [
            {
                condition: "Doing or making something",
                result: "fare + noun (no article for compound expressions)",
                examples: [
                    { native: "Faccio colazione.", translation: "I have breakfast." },
                    { native: "Facciamo sport.", translation: "We play sport." },
                    { native: "Fanno una passeggiata.", translation: "They go for a walk." },
                ],
            },
            {
                condition: "Weather with fare",
                result: "Fa + weather noun (impersonal — always fa)",
                examples: [
                    { native: "Fa caldo.", translation: "It's hot." },
                    { native: "Fa freddo.", translation: "It's cold." },
                    { native: "Fa bel tempo.", translation: "The weather is nice." },
                ],
            },
            {
                condition: "Cosa fai?",
                result: "What are you doing? / What do you do? (same form)",
                examples: [
                    { native: "Cosa fai nel tempo libero?", translation: "What do you do in your free time?" },
                    { native: "Cosa fai adesso?", translation: "What are you doing now?" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Fare is extremely versatile — it forms dozens of compound expressions that would require different verbs in English: fare colazione (have breakfast), fare sport (play sport), fare una domanda (ask a question), fare la spesa (do shopping)." },
            { type: "culture", content: "In Italian, weather is often expressed with fare: fa caldo (it's hot), fa freddo (it's cold), fa bel tempo (the weather is nice). This is equivalent to Spanish hace calor/frío." },
        ],
        fixedPhrases: [
            { native: "Faccio colazione alle sette.", translation: "I have breakfast at seven.", note: "Most common fare compound." },
            { native: "Fa caldo / freddo.", translation: "It's hot / cold.", note: "Fare for weather." },
            { native: "Cosa fai?", translation: "What are you doing? / What do you do?", note: "Extremely common question." },
            { native: "Facciamo una passeggiata?", translation: "Shall we go for a walk?", note: "Social invitation." },
            { native: "Non fa niente.", translation: "It doesn't matter.", note: "Fixed expression — 'it makes nothing'." },
        ],
        examples: [
            { native: "Faccio colazione alle sette.", translation: "I have breakfast at seven." },
            { native: "Cosa fai nel tempo libero?", translation: "What do you do in your free time?" },
            { native: "Fa molto caldo oggi.", translation: "It is very hot today." },
            { native: "Facciamo sport ogni sera.", translation: "We play sports every evening." },
            { native: "Fanno una passeggiata nel parco.", translation: "They take a walk in the park." }
        ],
        inlineVocab: [
            { word: "colazione", translation: "breakfast" },
            { word: "sport", translation: "sport / exercise" },
            { word: "domanda", translation: "question" },
            { word: "spesa", translation: "grocery shopping" },
            { word: "passeggiata", translation: "walk / stroll" },
            { word: "bagno", translation: "bath / bathroom" },
            { word: "parco", translation: "park" },
            { word: "tempo libero", translation: "free time" },
        ]
    },
]
