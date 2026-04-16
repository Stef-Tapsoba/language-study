import { GrammarLesson } from "../../../../types"

export const verbsLessons: GrammarLesson[] = [
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
                result: "What are you doing? or What do you do? (same question, two readings)",
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
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [
                { label: "stare per + inf. (about to)", forms: ["sto per…", "stai per…", "sta per…", "stiamo per…", "state per…", "stanno per…"] },
                { label: "andare a + inf. (going to)", forms: ["vado a…", "vai a…", "va a…", "andiamo a…", "andate a…", "vanno a…"] },
            ],
        },
        rules: [
            {
                condition: "Something about to happen (imminent)",
                result: "stare per + infinitive",
                examples: [
                    { native: "Sto per uscire.", translation: "I'm about to go out." },
                    { native: "Sta per piovere.", translation: "It's about to rain." },
                ],
            },
            {
                condition: "A plan or intention",
                result: "andare a + infinitive",
                examples: [
                    { native: "Vado a mangiare.", translation: "I'm going to eat." },
                    { native: "Andiamo a vedere un film.", translation: "We're going to watch a film." },
                ],
            },
            {
                condition: "Near future with present tense",
                result: "Italian very naturally uses present tense for near future plans",
                examples: [
                    { native: "Domani parto.", translation: "Tomorrow I'm leaving." },
                    { native: "Stasera cucino io.", translation: "Tonight I'm cooking." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "The most Italian-sounding way to talk about the near future is often just the present tense: \"Domani vado a Roma\" (Tomorrow I'm going to Rome). Andare a + infinitive is common but the present is more natural." },
            { type: "forward-ref", content: "The futuro semplice (parlerò, mangerò…) is introduced at A2 for more distant or hypothetical future.", refId: "it-g-a1-13" },
        ],
        fixedPhrases: [
            { native: "Sto per uscire.", translation: "I'm about to go out.", note: "stare per = imminent." },
            { native: "Vado a mangiare.", translation: "I'm going to eat.", note: "andare a = planned." },
            { native: "Domani arrivo.", translation: "I'm arriving tomorrow.", note: "Present tense for near future — very natural." },
            { native: "Ci vediamo dopo.", translation: "See you later.", note: "Fixed farewell." },
        ],
        examples: [
            { native: "Sto per uscire.", translation: "I am about to go out." },
            { native: "Sta per piovere.", translation: "It is about to rain." },
            { native: "Vado a mangiare.", translation: "I am going to eat." },
            { native: "Andiamo a vedere un film stasera.", translation: "We are going to watch a film tonight." },
            { native: "Vai a studiare adesso?", translation: "Are you going to study now?" }
        ],
        inlineVocab: [
            { word: "uscire", translation: "to go out" },
            { word: "piovere", translation: "to rain" },
            { word: "mangiare", translation: "to eat" },
            { word: "studiare", translation: "to study" },
            { word: "film", translation: "film / movie" },
            { word: "partire", translation: "to leave / depart" },
            { word: "presto", translation: "soon / early" },
            { word: "dopo", translation: "later / after" },
        ]
    },
    {
        id: "it-g-a1-19",
        level: "A1",
        title: "Modal Verbs: volere & potere",
        explanation: `Volere (to want) and potere (to be able to / can) are modal verbs — followed directly by an infinitive with no preposition in between.

Structure: subject + modal + infinitive
  Voglio mangiare una pizza.   = I want to eat a pizza.
  Puoi parlare italiano?       = Can you speak Italian?
  Non possiamo venire stasera. = We can't come tonight.

Always use the infinitive after these verbs — never a conjugated form:
  ✓ Voglio cucinare.   ✗ Voglio cucino.`,
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [
                { label: "volere (want)", forms: ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"] },
                { label: "potere (can)", forms: ["posso", "puoi", "può", "possiamo", "potete", "possono"] },
            ],
        },
        rules: [
            {
                condition: "Wanting to do something",
                result: "volere + infinitive (no preposition)",
                examples: [
                    { native: "Voglio mangiare.", translation: "I want to eat." },
                    { native: "Vuoi venire?", translation: "Do you want to come?" },
                    { native: "Vogliono partire.", translation: "They want to leave." },
                ],
            },
            {
                condition: "Ability or permission",
                result: "potere + infinitive",
                examples: [
                    { native: "Posso aiutarti?", translation: "Can I help you?" },
                    { native: "Non possiamo venire.", translation: "We can't come." },
                    { native: "Puoi parlare più lentamente?", translation: "Can you speak more slowly?" },
                ],
            },
            {
                condition: "Polite request",
                result: "Puoi / Può + infinitive (potere makes requests sound natural)",
                examples: [
                    { native: "Puoi ripetere?", translation: "Can you repeat?" },
                    { native: "Può portarmi il conto?", translation: "Can you bring me the bill?" },
                ],
            },
            {
                condition: "Negative — non before the modal",
                result: "Non voglio / Non posso",
                examples: [
                    { native: "Non posso venire domani.", translation: "I can't come tomorrow." },
                    { native: "Non voglio uscire stasera.", translation: "I don't want to go out tonight." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Vorrei (I would like — conditional of volere) is even more polite than voglio and widely used for requests: Vorrei un caffè. / Vorrei prenotare un tavolo. Learn it as a fixed form at A1." },
            { type: "forward-ref", content: "Dovere (must/have to) completes the modal trio and is introduced in lesson it-g-a1-33.", refId: "it-g-a1-33" },
        ],
        fixedPhrases: [
            { native: "Voglio imparare l'italiano.", translation: "I want to learn Italian.", note: "volere + infinitive." },
            { native: "Puoi aiutarmi?", translation: "Can you help me?", note: "potere for requests." },
            { native: "Non posso venire.", translation: "I can't come.", note: "Polite refusal." },
            { native: "Vorrei un caffè.", translation: "I'd like a coffee.", note: "vorrei = polite conditional of volere." },
            { native: "Posso?", translation: "May I? / Can I?", note: "One-word permission request." },
        ],
        examples: [
            { native: "Voglio imparare l'italiano.", translation: "I want to learn Italian." },
            { native: "Puoi aiutarmi?", translation: "Can you help me?" },
            { native: "Non posso venire domani.", translation: "I can't come tomorrow." },
            { native: "Vuole cucinare stasera.", translation: "She wants to cook tonight." },
            { native: "Possiamo parlare italiano insieme.", translation: "We can speak Italian together." },
        ],
        inlineVocab: [
            { word: "imparare", translation: "to learn" },
            { word: "aiutare", translation: "to help" },
            { word: "venire", translation: "to come" },
            { word: "cucinare", translation: "to cook" },
            { word: "insieme", translation: "together" },
        ]
    },
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
                result: "Reflexive pronoun (mi/ti/si/ci/vi/si) goes BEFORE the conjugated verb",
                examples: [
                    { native: "Mi chiamo Luca.", translation: "My name is Luca." },
                    { native: "Ti alzi tardi.", translation: "You get up late." },
                    { native: "Si veste in fretta.", translation: "He/she gets dressed in a hurry." },
                ],
            },
            {
                condition: "Infinitive of reflexive verbs",
                result: "Ends in -si — remove -si, conjugate normally, add matching pronoun before",
                examples: [
                    { native: "alzarsi → mi alzo", translation: "to get up → I get up" },
                    { native: "vestirsi → mi visto", translation: "to get dressed → I get dressed" },
                ],
            },
            {
                condition: "With infinitive",
                result: "Pronoun attaches to the end of the infinitive OR goes before conjugated verb",
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
        id: "it-g-a1-32",
        level: "A1",
        title: "The Imperative — Giving Instructions & Commands",
        explanation: `The imperative gives instructions, commands, requests, and suggestions. This lesson covers tu/noi/voi — the forms you will use most at A1. The Lei imperative is covered at A2.

KEY RULE for tu: -are verbs get -a (Parla! not *Parli!); -ere and -ire verbs use the same form as the present tense tu (Scrivi!, Dormi!).

NEGATIVE IMPERATIVE — tu only: use non + infinitive, NOT the imperative form:
  Non parlare!    Don't speak!    Non mangiare!    Don't eat!
For noi and voi: non + imperative form: Non parliamo di questo. / Non partite ancora!

REFLEXIVE VERBS — pronoun attaches to the end of affirmative imperatives:
  Alzati! (tu) · Alziamoci! (noi) · Alzatevi! (voi)
  Non ti alzare! (tu negative — pronoun goes before the infinitive)

Short irregular forms Va', Fa', Di', Sta' have an apostrophe marking the dropped syllable — common in casual speech.`,
        conjugationTable: {
            pronouns: ["tu (informal)", "noi (let's)", "voi (plural)"],
            verbs: [
                { label: "parlare (-are)", forms: ["Parla!", "Parliamo!", "Parlate!"] },
                { label: "scrivere (-ere)", forms: ["Scrivi!", "Scriviamo!", "Scrivete!"] },
                { label: "dormire (-ire type 1)", forms: ["Dormi!", "Dormiamo!", "Dormite!"] },
                { label: "finire (-ire type 2)", forms: ["Finisci!", "Finiamo!", "Finite!"] },
                { label: "essere (irregular)", forms: ["Sii!", "Siamo!", "Siate!"] },
                { label: "avere (irregular)", forms: ["Abbi!", "Abbiamo!", "Abbiate!"] },
                { label: "andare (irregular)", forms: ["Vai! / Va'!", "Andiamo!", "Andate!"] },
                { label: "fare (irregular)", forms: ["Fai! / Fa'!", "Facciamo!", "Fate!"] },
            ],
        },
        rules: [
            {
                condition: "Tu imperative for -are verbs",
                result: "Remove -are, add -a (NOT -i)",
                examples: [
                    { native: "parlare → Parla!", translation: "to speak → Speak!" },
                    { native: "comprare → Compra!", translation: "to buy → Buy!" },
                    { native: "mangiare → Mangia!", translation: "to eat → Eat!" },
                ],
            },
            {
                condition: "Tu imperative for -ere and -ire verbs",
                result: "Same as tu present tense form",
                examples: [
                    { native: "scrivere: tu scrivi → Scrivi!", translation: "to write: you write → Write!" },
                    { native: "dormire: tu dormi → Dormi!", translation: "to sleep: you sleep → Sleep!" },
                ],
            },
            {
                condition: "Negative imperative (tu only)",
                result: "non + infinitive (NOT the imperative form)",
                examples: [
                    { native: "Non parlare!", translation: "Don't speak!" },
                    { native: "Non mangiare!", translation: "Don't eat!" },
                    { native: "Non uscire!", translation: "Don't go out!" },
                ],
            },
            {
                condition: "Reflexive verbs — affirmative",
                result: "Pronoun attaches to the end",
                examples: [
                    { native: "Alzati!", translation: "Get up!" },
                    { native: "Siediti!", translation: "Sit down!" },
                    { native: "Lavati le mani!", translation: "Wash your hands!" },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "The key rule for tu: -are verbs get -a (Parla!), NOT -i. Everything else (tu negative and noi/voi) is straightforward." },
            { type: "tip", content: "Short irregular forms Va', Fa', Di', Sta' have an apostrophe marking the dropped syllable. They're common in casual speech." },
            { type: "culture", content: "Italian imperatives are used far more casually than English ones — \"Guarda!\" \"Ascolta!\" \"Dimmi!\" are everyday friendly expressions, not rude commands." },
        ],
        fixedPhrases: [
            { native: "Parla più lentamente!", translation: "Speak more slowly!", note: "Essential for language learners." },
            { native: "Dimmi!", translation: "Tell me!", note: "Di' + mi = Dimmi (contracted)." },
            { native: "Andiamo!", translation: "Let's go!", note: "noi imperative — very common." },
            { native: "Non ti preoccupare!", translation: "Don't worry!", note: "Negative reflexive — pronoun before infinitive." },
            { native: "Aspetta!", translation: "Wait!", note: "-are verb: aspettare → Aspetta!" },
        ],
        examples: [
            { native: "Parla più lentamente, per favore.", translation: "Speak more slowly, please. (tu — informal)" },
            { native: "Ascoltate bene!", translation: "Listen carefully! (voi — plural)" },
            { native: "Andiamo!", translation: "Let's go!" },
            { native: "Non mangiare quello!", translation: "Don't eat that! (tu negative — non + infinitive)" },
            { native: "Alzati!", translation: "Get up! (reflexive imperative — pronoun attached)" },
            { native: "Fammi vedere.", translation: "Let me see. (Fa' + mi — contracted)" },
        ],
        inlineVocab: [
            { word: "paziente", translation: "patient" },
            { word: "pronti", translation: "ready" },
            { word: "puntuali", translation: "punctual / on time" },
            { word: "pazienza", translation: "patience" },
            { word: "lentamente", translation: "slowly" },
            { word: "aspettare", translation: "to wait" },
            { word: "guardare", translation: "to look / to watch" },
            { word: "mangiare", translation: "to eat" },
            { word: "alzarsi", translation: "to get up" },
            { word: "tranquillo", translation: "calm / relaxed" },
        ]
    },
    {
        id: "it-g-a1-33",
        level: "A1",
        title: "Dovere — Must / Have To / Should",
        explanation: `**Dovere** expresses obligation, necessity, and probability. Along with volere and potere, it completes the core Italian modal trio. Always followed by an infinitive.

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
        conjugationTable: {
            pronouns: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
            verbs: [{ label: "dovere", forms: ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"] }],
        },
        paradigmTable: {
            pronouns: ["modal", "meaning", "example"],
            verbs: [
                { label: "dovere", forms: ["dovere", "must / have to / should", "Devo partire. (I must leave.)"] },
                { label: "potere", forms: ["potere", "can / be able to / may", "Posso partire. (I can leave.)"] },
                { label: "volere", forms: ["volere", "want to", "Voglio partire. (I want to leave.)"] },
            ],
        },
        rules: [
            {
                condition: "Obligation (must/have to)",
                result: "dovere + infinitive",
                examples: [
                    { native: "Devo andare dal medico.", translation: "I have to go to the doctor." },
                    { native: "Dovete prenotare in anticipo.", translation: "You must book in advance." },
                ],
            },
            {
                condition: "Moral duty (should/ought to)",
                result: "dovere + infinitive",
                examples: [
                    { native: "Devi chiamare tua madre.", translation: "You should call your mother." },
                    { native: "Dobbiamo rispettare gli altri.", translation: "We should respect others." },
                ],
            },
            {
                condition: "Logical deduction (must be)",
                result: "dovere + infinitive or essere",
                examples: [
                    { native: "Deve essere stanca.", translation: "She must be tired." },
                    { native: "Deve dormire — non risponde.", translation: "He must be sleeping — he's not answering." },
                ],
            },
            {
                condition: "Non devo vs non posso",
                result: "'Non devo' = I don't have to (no obligation). 'Non posso' = I can't (no ability/permission).",
                examples: [
                    { native: "Non devo lavorare domani.", translation: "I don't have to work tomorrow. (no obligation)" },
                    { native: "Non posso fumare qui.", translation: "I can't smoke here. (not allowed)" },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "Non devo ≠ non posso. Non devo = I don't have to (there is no obligation). Non posso = I can't (it's not possible/allowed). Don't confuse them." },
            { type: "forward-ref", content: "Volere and potere are in lesson it-g-a1-19. Together, dovere/potere/volere form the core Italian modal verb system.", refId: "it-g-a1-19" },
        ],
        fixedPhrases: [
            { native: "Devo studiare stasera.", translation: "I have to study tonight.", note: "dovere + infinitive for obligation." },
            { native: "Non devo lavorare domani.", translation: "I don't have to work tomorrow.", note: "no obligation." },
            { native: "Deve essere tardi.", translation: "It must be late.", note: "dovere for logical deduction." },
            { native: "Dobbiamo andare.", translation: "We have to go.", note: "noi form — very common." },
        ],
        examples: [
            { native: "Devo studiare stasera.", translation: "I have to study tonight." },
            { native: "Devi parlare con il professore.", translation: "You should speak with the teacher." },
            { native: "Deve essere stanca.", translation: "She must be tired. (probability)" },
            { native: "Dobbiamo partire alle otto.", translation: "We have to leave at eight." },
            { native: "Dovete prenotare in anticipo.", translation: "You must book in advance." },
            { native: "Non devo lavorare domani.", translation: "I don't have to work tomorrow." },
        ],
        inlineVocab: [
            { word: "partire", translation: "to leave / depart" },
            { word: "mangiare", translation: "to eat" },
            { word: "lavorare", translation: "to work" },
            { word: "prenotare", translation: "to book / reserve" },
            { word: "rispettare", translation: "to respect" },
            { word: "fumare", translation: "to smoke" },
            { word: "madre", translation: "mother" },
            { word: "stanca", translation: "tired (fem.)" },
            { word: "anticipo", translation: "advance / early" },
        ]
    },
]
