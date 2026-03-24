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
        explanation: `The imperative is used to give instructions, commands, requests, and suggestions. Italian has imperative forms for tu (informal), noi (let's), voi (plural), and Lei (formal singular). This lesson focuses on tu/noi/voi — the forms you will use most at A1. The Lei imperative (aspetti!, scriva!, guardi!) appears in the verb drill tables for awareness; it is covered in depth at A2.

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
