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
]
