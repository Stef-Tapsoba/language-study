import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
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
        ],
        inlineVocab: [
            { word: "banca", translation: "bank" },
            { word: "stazione", translation: "station" },
            { word: "gatto", translation: "cat" },
            { word: "letto", translation: "bed" },
            { word: "tavolo", translation: "table" },
        ],
        paradigmTable: {
            pronouns: ["Adverb", "Meaning", "Example"],
            verbs: [
                { label: "qui / qua", forms: ["qui / qua", "here (near me)", "Il libro è qui."] },
                { label: "lì / là", forms: ["lì / là", "there (away from me)", "Siediti là."] },
                { label: "vicino", forms: ["vicino", "nearby / close", "È qui vicino."] },
                { label: "lontano", forms: ["lontano", "far away", "È lontano da qui."] },
                { label: "dentro / fuori", forms: ["dentro / fuori", "inside / outside", "Aspetta fuori."] },
                { label: "sopra / sotto", forms: ["sopra / sotto", "above / below", "Il gatto è sotto il letto."] },
                { label: "davanti / dietro", forms: ["davanti / dietro", "in front / behind", "La macchina è davanti."] },
                { label: "dappertutto", forms: ["dappertutto", "everywhere", "Ci sono turisti dappertutto."] },
            ],
        },
        rules: [
            {
                condition: "Three-distance system",
                result: "qui (near me) · lì (away) — two distances, not three",
                examples: [
                    { native: "Il libro è qui.", translation: "The book is here." },
                    { native: "È lì sul tavolo.", translation: "It's there on the table." },
                ],
            },
            {
                condition: "Adverb vs preposition",
                result: "vicino (alone) · vicino a + noun (preposition)",
                examples: [
                    { native: "È vicino.", translation: "It's near." },
                    { native: "È vicino alla stazione.", translation: "It's near the station." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Qui and qua both mean \"here\" — qui is slightly more precise (\"right here\"), qua is vaguer (\"around here\"). In practice they're largely interchangeable in everyday speech.",
            },
            {
                type: "tip",
                content: "Common combinations worth learning as chunks: qui vicino (nearby), lì in fondo (at the far end), qui dentro (in here), là fuori (out there).",
            },
        ],
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
        ],
        inlineVocab: [
            { word: "lezione", translation: "lesson / class" },
            { word: "mare", translation: "sea / beach" },
            { word: "lavoro", translation: "work" },
        ],
        paradigmTable: {
            pronouns: ["Adverb", "Meaning", "Notes"],
            verbs: [
                { label: "oggi / ieri / domani", forms: ["oggi / ieri / domani", "today / yesterday / tomorrow", "core trio"] },
                { label: "adesso / ora", forms: ["adesso / ora", "now", "interchangeable"] },
                { label: "dopo / poi", forms: ["dopo / poi", "later / then", "dopo = after; poi = then next"] },
                { label: "già", forms: ["già", "already", "Ho già mangiato."] },
                { label: "ancora", forms: ["ancora", "still / yet / again", "Sei ancora qui?"] },
                { label: "non ancora", forms: ["non ancora", "not yet", "Non ho ancora finito."] },
                { label: "presto / tardi", forms: ["presto / tardi", "soon / early — late", "Arrivo presto. / È tardi."] },
                { label: "prima / dopo", forms: ["prima / dopo", "before / after", "Prima mangio, poi esco."] },
            ],
        },
        rules: [
            {
                condition: "Already — già",
                result: "già follows the conjugated verb",
                examples: [
                    { native: "Ho già mangiato.", translation: "I've already eaten." },
                    { native: "Sei già qui?", translation: "Are you here already?" },
                ],
            },
            {
                condition: "Still — ancora",
                result: "ancora (still) vs non ancora (not yet)",
                examples: [
                    { native: "Sei ancora a casa?", translation: "Are you still at home?" },
                    { native: "Non ho ancora finito.", translation: "I haven't finished yet." },
                ],
            },
            {
                condition: "Before/after sequence",
                result: "prima (first/before) + poi/dopo (then/after)",
                examples: [
                    { native: "Prima faccio colazione, poi mi vesto.", translation: "First I have breakfast, then I get dressed." },
                    { native: "Prima di uscire, chiudo la finestra.", translation: "Before going out, I close the window." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Già has three main meanings in Italian: already (Ho già mangiato), right now/OK (Già, già = Yes, yes / OK), and indeed (Già, è così = Indeed, that's how it is). Tone makes it clear.",
            },
            {
                type: "culture",
                content: "The Italian expression \"ci vediamo dopo\" (see you later) uses dopo as a time adverb. \"Ci vediamo\" (we'll see each other) is one of the most natural Italian farewells.",
            },
        ],
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
        ],
        inlineVocab: [
            { word: "palestra", translation: "gym" },
            { word: "carne", translation: "meat" },
            { word: "televisione", translation: "television" },
            { word: "discoteca", translation: "nightclub" },
        ],
        paradigmTable: {
            pronouns: ["Frequency", "Italian", "Approx. %"],
            verbs: [
                { label: "always", forms: ["sempre", "always", "100%"] },
                { label: "usually", forms: ["di solito / normalmente", "usually", "80%"] },
                { label: "often", forms: ["spesso", "often", "60%"] },
                { label: "sometimes", forms: ["a volte", "sometimes", "40%"] },
                { label: "rarely", forms: ["raramente", "rarely", "20%"] },
                { label: "hardly ever", forms: ["quasi mai", "hardly ever", "5%"] },
                { label: "never", forms: ["mai (non…mai)", "never", "0%"] },
            ],
        },
        rules: [
            {
                condition: "Standard position",
                result: "Frequency adverbs go after the conjugated verb",
                examples: [
                    { native: "Mangio sempre a casa.", translation: "I always eat at home." },
                    { native: "Di solito lavoro dalle nove.", translation: "I usually work from nine." },
                    { native: "Non vado mai in discoteca.", translation: "I never go to clubs." },
                ],
            },
            {
                condition: "Mai requires non",
                result: "non + verb + mai (both required after the verb)",
                examples: [
                    { native: "Non mangio mai la carne.", translation: "I never eat meat." },
                    { native: "Non arriva mai in orario.", translation: "He never arrives on time." },
                ],
            },
            {
                condition: "Mai without non (emphatic)",
                result: "mai before verb = emphatic, no non needed",
                examples: [
                    { native: "Mai ho detto questo!", translation: "I never said this!" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Frequency adverbs are very flexible in Italian — they can move to the front of the sentence for emphasis without being wrong: A volte cucino. = Cucino a volte.",
            },
            {
                type: "culture",
                content: "Con che frequenza…? (How often…?) is the natural question for frequency. \"Con che frequenza vai in palestra?\" \"Quanto spesso vai…?\" are both natural.",
            },
        ],
        fixedPhrases: [
            { native: "Mangio sempre a casa.", translation: "I always eat at home.", note: "sempre after verb." },
            { native: "Di solito faccio colazione alle otto.", translation: "I usually have breakfast at eight.", note: "di solito for routine." },
            { native: "Non guardo mai la televisione.", translation: "I never watch TV.", note: "non + verb + mai." },
            { native: "A volte cucino io.", translation: "Sometimes I'm the one who cooks.", note: "io for emphasis." },
            { native: "Con che frequenza…?", translation: "How often…?", note: "Natural frequency question." },
        ],
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
        ],
        inlineVocab: [
            { word: "spagnolo", translation: "Spanish" },
            { word: "tè", translation: "tea" },
            { word: "caro", translation: "expensive / dear" },
            { word: "pesce", translation: "fish" },
            { word: "pane", translation: "bread" },
            { word: "cucina", translation: "kitchen" },
            { word: "macchina", translation: "car" },
            { word: "risotto", translation: "risotto" },
        ],
        paradigmTable: {
            pronouns: ["Connector", "Meaning", "Type"],
            verbs: [
                { label: "e", forms: ["e", "and", "coordinating"] },
                { label: "o", forms: ["o", "or", "coordinating"] },
                { label: "ma / però", forms: ["ma / però", "but / however", "coordinating contrast"] },
                { label: "né…né", forms: ["né…né", "neither…nor", "double negative"] },
                { label: "perché", forms: ["perché", "because / why", "subordinating cause / question"] },
                { label: "che", forms: ["che", "that", "subordinating"] },
                { label: "quando", forms: ["quando", "when", "subordinating time"] },
                { label: "se", forms: ["se", "if", "subordinating condition"] },
                { label: "anche se", forms: ["anche se", "even if", "subordinating concession"] },
                { label: "prima / poi / infine", forms: ["prima / poi / infine", "first / then / finally", "sequencing"] },
                { label: "quindi / allora", forms: ["quindi / allora", "so / therefore", "consequence"] },
            ],
        },
        rules: [
            {
                condition: "Ma vs però",
                result: "ma = mid-sentence · però = starts second clause",
                examples: [
                    { native: "Mi piace la pasta, ma preferisco il risotto.", translation: "I like pasta, but I prefer risotto." },
                    { native: "È caro. Però è buono.", translation: "It's expensive. But it's good." },
                ],
            },
            {
                condition: "Perché — two uses",
                result: "Perché? = why · perché = because (same word)",
                examples: [
                    { native: "Perché studi?", translation: "Why do you study?" },
                    { native: "Perché mi piace.", translation: "Because I like it." },
                ],
            },
            {
                condition: "Né…né",
                result: "Neither…nor — requires non before the verb",
                examples: [
                    { native: "Non mangio né carne né pesce.", translation: "I eat neither meat nor fish." },
                    { native: "Non ho né tempo né soldi.", translation: "I have neither time nor money." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Ma and però both mean \"but\" — but però is often used at the start of a second thought, like \"however\" in English: \"È caro, però è buono.\" (It's expensive, however it's good.)",
            },
            {
                type: "tip",
                content: "Quindi and allora both mean \"so/therefore\" — allora is slightly more informal and also means \"well then\": Allora, cosa facciamo? (Well then, what shall we do?)",
            },
            {
                type: "culture",
                content: "Italian conversation is rich with connecting words. Using quindi, però, anche se makes your Italian sound fluent and connected — rather than a series of unrelated sentences.",
            },
        ],
        fixedPhrases: [
            { native: "Mi piace, però è caro.", translation: "I like it, but it's expensive.", note: "però at start of second clause." },
            { native: "Studio perché voglio imparare.", translation: "I study because I want to learn.", note: "perché = because." },
            { native: "Prima…, poi…, infine…", translation: "First…, then…, finally…", note: "Sequencing a day or story." },
            { native: "Quindi non posso venire.", translation: "So I can't come.", note: "quindi = consequence." },
            { native: "Né… né…", translation: "Neither… nor…", note: "Double negative construction." },
        ],
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
                result: "present tense also works naturally for near future",
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
