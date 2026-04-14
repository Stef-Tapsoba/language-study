import { GrammarLesson } from "../../../../types"

export const adverbsAndDiscourseLessons: GrammarLesson[] = [
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
                result: "qui (here, near me) / lì (there, away from me) — Italian has two distances, not three like Spanish",
                examples: [
                    { native: "Il libro è qui.", translation: "The book is here." },
                    { native: "È lì sul tavolo.", translation: "It's there on the table." },
                ],
            },
            {
                condition: "Adverb vs preposition",
                result: "Solo (adverb, stands alone) vs vicino a (preposition phrase, needs to)",
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
                result: "già goes after the verb in a simple tense; with passato prossimo it goes between auxiliary and participle",
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
                result: "Mai = never, but it needs non before the verb when it follows the verb",
                examples: [
                    { native: "Non mangio mai la carne.", translation: "I never eat meat." },
                    { native: "Non arriva mai in orario.", translation: "He never arrives on time." },
                ],
            },
            {
                condition: "Mai without non (emphatic)",
                result: "Mai can precede the verb for emphasis — then no non needed",
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
                result: "Both mean 'but' — ma is used mid-sentence; però often starts the second clause or sentence for mild contrast",
                examples: [
                    { native: "Mi piace la pasta, ma preferisco il risotto.", translation: "I like pasta, but I prefer risotto." },
                    { native: "È caro. Però è buono.", translation: "It's expensive. But it's good." },
                ],
            },
            {
                condition: "Perché — two uses",
                result: "Perché? = why? (question). Perché = because (answer). Same word, different function.",
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
]
