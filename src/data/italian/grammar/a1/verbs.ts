import { GrammarLesson } from "../../../../types"

export const verbsLessons: GrammarLesson[] = [
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
]
