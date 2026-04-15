import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
  {
    id: "es-g-a1-24",
    level: "A1",
    title: "Demonstrative Adjectives",
    explanation: `Demonstrative adjectives point out specific nouns. Spanish has three sets based on distance from the speaker.

               Masc. sg.   Fem. sg.   Masc. pl.   Fem. pl.
  THIS (near)   este        esta       estos       estas
  THAT (medium) ese         esa        esos        esas
  THAT (far)    aquel       aquella    aquellos    aquellas

USAGE
  este libro      — this book (near me)
  ese libro       — that book (near you)
  aquel libro     — that book (over there, distant)

They must agree in gender and number with the noun:
  esta mesa       — this table (fem. sg.)
  estos zapatos   — these shoes (masc. pl.)
  esas casas      — those houses (fem. pl.)

DEMONSTRATIVE PRONOUNS (standalone)
  ¿Qué es esto?       What is this?      (neutral — unknown object)
  ¿Cuánto cuesta eso? How much is that?  (neutral — pointing at something)`,
    paradigmTable: {
      pronouns: ["masculine singular", "feminine singular", "masculine plural", "feminine plural"],
      verbs: [
        { label: "este — this (near me)", forms: ["este", "esta", "estos", "estas"] },
        { label: "ese — that (near you / neutral)", forms: ["ese", "esa", "esos", "esas"] },
        { label: "aquel — that (over there, distant)", forms: ["aquel", "aquella", "aquellos", "aquellas"] },
      ],
    },
    rules: [
      {
        condition: "Pointing to something near the speaker",
        result: "Use este / esta / estos / estas",
        examples: [
          { native: "este libro", translation: "this book" },
          { native: "esta mesa", translation: "this table" },
          { native: "estos zapatos", translation: "these shoes" },
        ],
      },
      {
        condition: "Pointing to something near the listener or at a vague distance",
        result: "Use ese / esa / esos / esas",
        examples: [
          { native: "ese señor", translation: "that man" },
          { native: "esa camisa", translation: "that shirt" },
          { native: "esos estudiantes", translation: "those students" },
        ],
      },
      {
        condition: "Pointing to something far away from both speaker and listener",
        result: "Use aquel / aquella / aquellos / aquellas",
        examples: [
          { native: "aquel edificio", translation: "that building over there" },
          { native: "aquella montaña", translation: "that mountain in the distance" },
        ],
      },
      {
        condition: "Using a demonstrative without a noun",
        result: "The demonstrative becomes a pronoun — same form, no noun follows",
        examples: [
          { native: "¿Qué es esto?", translation: "What is this?" },
          { native: "Quiero ése.", translation: "I want that one." },
          { native: "¿Cuánto cuesta aquélla?", translation: "How much is that one over there?" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The three-distance system (here / there / over there) maps to the three persons in Spanish: este (near me = yo), ese (near you = tú), aquel (away from both = él/ella).",
      },
      {
        type: "culture",
        content: "In everyday speech, the distinction between ese and aquel is often collapsed — ese is used for both \"near you\" and \"far away\". Only aquel is distinctly \"far in the distance\" or \"in the past\".",
      },
    ],
    fixedPhrases: [
      { native: "¿Qué es esto?", translation: "What is this?", note: "Neutral form — use when you don't know the gender of the object." },
      { native: "¿Cuánto cuesta ese/esa?", translation: "How much does that one cost?", note: "Essential shopping phrase." },
    ],
    examples: [
      { native: "¿Cuánto cuesta este libro?", translation: "How much does this book cost?" },
      { native: "Quiero esa camisa, por favor.", translation: "I'd like that shirt, please." },
      { native: "Estas manzanas son deliciosas.", translation: "These apples are delicious." },
      { native: "¿Qué es esto?", translation: "What is this?" },
      { native: "Aquel edificio es muy antiguo.", translation: "That building (over there) is very old." },
    ],
    inlineVocab: [
      { word: "libro", translation: "book" },
      { word: "camisa", translation: "shirt" },
      { word: "manzanas", translation: "apples" },
      { word: "deliciosas", translation: "delicious" },
      { word: "edificio", translation: "building" },
      { word: "antiguo", translation: "old / ancient" },
      { word: "zapatos", translation: "shoes" },
    ],
  },
  {
    id: "es-g-a1-25",
    level: "A1",
    title: "Adverbs of Place & Time",
    explanation: `ADVERBS OF PLACE — answer ¿dónde? (where?)
  aquí        here (near me)
  ahí         there (near you)
  allí / allá there / over there (far away)
  cerca       nearby / close
  lejos       far away
  dentro      inside
  fuera       outside
  arriba      up / upstairs
  abajo       down / downstairs
  enfrente    opposite / facing

ADVERBS OF TIME — answer ¿cuándo? (when?)
  hoy         today
  ayer        yesterday
  mañana      tomorrow
  ahora       now
  luego       later / then
  ya          already / right now
  todavía     still / yet
  pronto      soon
  tarde       late
  temprano    early
  antes       before
  después     after / afterwards

NOTE ON YA — three uses to know:
  Ya tengo el libro.    I already have the book.     (= already)
  ¡Ya voy!             I'm coming! / In a minute!   (= right now / imminently)
  Ya está.             That's it. / Done.            (= it's done / finished)
  Ya, ya…              Yeah, yeah… / OK, OK…        (= acknowledgement, sometimes sarcastic)
The meaning of ya shifts with context — listen for the tone.`,
    paradigmTable: {
      pronouns: ["Adverb", "Meaning", "Type"],
      verbs: [
        { label: "aquí / acá", forms: ["aquí / acá", "here (near me)", "place"] },
        { label: "ahí", forms: ["ahí", "there (near you)", "place"] },
        { label: "allí / allá", forms: ["allí / allá", "there / over there (far)", "place"] },
        { label: "cerca", forms: ["cerca", "nearby / close", "place"] },
        { label: "lejos", forms: ["lejos", "far away", "place"] },
        { label: "dentro / fuera", forms: ["dentro / fuera", "inside / outside", "place"] },
        { label: "arriba / abajo", forms: ["arriba / abajo", "up / down", "place"] },
        { label: "hoy / ayer / mañana", forms: ["hoy / ayer / mañana", "today / yesterday / tomorrow", "time"] },
        { label: "ahora / luego", forms: ["ahora / luego", "now / later then", "time"] },
        { label: "ya", forms: ["ya", "already / right now / done", "time"] },
        { label: "todavía / aún", forms: ["todavía / aún", "still / yet", "time"] },
        { label: "pronto / tarde / temprano", forms: ["pronto / tarde / temprano", "soon / late / early", "time"] },
      ],
    },
    rules: [
      {
        condition: "Three-distance system for place adverbs",
        result: "aquí (here, near me) / ahí (there, near you) / allí (there, far away) — mirrors the three demonstrative distances",
        examples: [
          { native: "El libro está aquí.", translation: "The book is here." },
          { native: "Está ahí en tu mesa.", translation: "It's there on your table." },
          { native: "Está allí al fondo.", translation: "It's over there at the back." },
        ],
      },
      {
        condition: "Ya — three meanings",
        result: "ya = already (past), right now (present urgency), or done (completion)",
        examples: [
          { native: "Ya tengo el libro.", translation: "I already have the book." },
          { native: "¡Ya voy!", translation: "I'm coming now!" },
          { native: "Ya está.", translation: "Done / finished." },
        ],
      },
      {
        condition: "Todavía vs ya no",
        result: "Todavía = still (something continues). Ya no = no longer (something stopped).",
        examples: [
          { native: "Todavía estoy aquí.", translation: "I'm still here." },
          { native: "Ya no vivo allí.", translation: "I no longer live there." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content:
          "Ya is one of the trickiest Spanish adverbs — it shifts meaning with context. The three core meanings are: \"already\" (past), \"right now/coming\" (present urgency), and \"done\" (completion). Tone and context make it clear.",
      },
      {
        type: "culture",
        content:
          "¡Ya voy! (I'm coming! / In a minute!) is heard constantly in Spanish-speaking households — usually said by someone who has been called multiple times.",
      },
    ],
    examples: [
      { native: "El libro está aquí.", translation: "The book is here." },
      { native: "¿Está lejos de aquí?", translation: "Is it far from here?" },
      { native: "Hoy tengo clase.", translation: "Today I have class." },
      { native: "Ya tengo el libro.", translation: "I already have the book." },
      { native: "¡Ya voy!", translation: "I'm coming! / In a minute! (impatient agreement)" },
      { native: "Todavía estoy aquí.", translation: "I'm still here." },
    ],
    inlineVocab: [
      { word: "libro", translation: "book" },
      { word: "clase", translation: "class / lesson" },
      { word: "arriba", translation: "up / upstairs" },
      { word: "abajo", translation: "down / downstairs" },
      { word: "dentro", translation: "inside" },
      { word: "fuera", translation: "outside" },
      { word: "ayer", translation: "yesterday" },
      { word: "pronto", translation: "soon" },
    ],
  },
  {
    id: "es-g-a1-26",
    level: "A1",
    title: "Frequency Adverbs",
    explanation: `Frequency adverbs say how often something happens. They usually go directly AFTER the conjugated verb (or before it for emphasis).

FREQUENCY SCALE (most → least)
  siempre         always
  normalmente     normally / usually
  a menudo        often
  a veces         sometimes
  raramente       rarely
  casi nunca      hardly ever
  nunca           never

POSITION
  Siempre como en casa.       (I always eat at home.)
  Normalmente trabajo a las 9.(I normally work at 9.)
  A veces llueve en verano.   (It sometimes rains in summer.)
  Nunca llego tarde.          (I never arrive late.)
  No llego nunca tarde.       (I never arrive late. — no before verb is optional with nunca)

Note: nunca can go before the verb alone (no no needed) or after the verb with no before it.`,
    paradigmTable: {
      pronouns: ["Frequency", "Spanish", "Approximate %"],
      verbs: [
        { label: "always", forms: ["siempre", "always", "100%"] },
        { label: "usually", forms: ["normalmente / generalmente", "usually / normally", "80%"] },
        { label: "often", forms: ["a menudo / frecuentemente", "often / frequently", "60%"] },
        { label: "sometimes", forms: ["a veces", "sometimes", "40%"] },
        { label: "rarely", forms: ["raramente / pocas veces", "rarely / seldom", "20%"] },
        { label: "hardly ever", forms: ["casi nunca", "hardly ever", "5%"] },
        { label: "never", forms: ["nunca / jamás", "never / ever", "0%"] },
      ],
    },
    rules: [
      {
        condition: "Standard position of frequency adverbs",
        result: "After the conjugated verb (or before it for emphasis)",
        examples: [
          { native: "Siempre como en casa.", translation: "I always eat at home." },
          { native: "Normalmente trabajo a las 9.", translation: "I normally work at 9." },
          { native: "A veces llueve.", translation: "It sometimes rains." },
        ],
      },
      {
        condition: "Nunca position options",
        result: "Nunca before the verb (no 'no' needed) OR after the verb with 'no' before",
        examples: [
          { native: "Nunca como carne.", translation: "I never eat meat." },
          { native: "No como carne nunca.", translation: "I never eat meat. (both correct)" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content:
          "Frequency adverbs in Spanish are very flexible in position — they can move without making the sentence wrong. The most natural position is after the verb; putting them at the start of a sentence adds emphasis.",
      },
      {
        type: "culture",
        content:
          "Asking frequency is one of the most natural ways to learn about someone's life: ¿Con qué frecuencia vas al gimnasio? / ¿Cuántas veces a la semana comes fuera? These questions open conversations naturally.",
      },
    ],
    fixedPhrases: [
      { native: "Siempre / A veces / Nunca", translation: "Always / Sometimes / Never", note: "The three most common frequency adverbs." },
      { native: "Normalmente trabajo de nueve a cinco.", translation: "I normally work nine to five.", note: "Most common frequency sentence structure." },
      { native: "¿Con qué frecuencia…?", translation: "How often…?", note: "Natural question for frequency." },
      { native: "Casi nunca.", translation: "Hardly ever.", note: "Useful nuanced answer." },
    ],
    examples: [
      { native: "Siempre desayuno a las ocho.", translation: "I always have breakfast at eight." },
      { native: "A veces voy al gimnasio.", translation: "I sometimes go to the gym." },
      { native: "Nunca como carne.", translation: "I never eat meat." },
      { native: "Normalmente llegamos a tiempo.", translation: "We normally arrive on time." },
      { native: "¿Con qué frecuencia vas al cine?", translation: "How often do you go to the cinema?" },
    ],
    inlineVocab: [
      { word: "desayuno", translation: "breakfast" },
      { word: "gimnasio", translation: "gym" },
      { word: "carne", translation: "meat" },
      { word: "cine", translation: "cinema" },
      { word: "verano", translation: "summer" },
      { word: "llueve", translation: "it rains" },
      { word: "tarde", translation: "late" },
    ],
  },
  {
    id: "es-g-a1-27",
    level: "A1",
    title: "Basic Connectors",
    explanation: `Connectors link words and clauses. Even with a small vocabulary, using connectors makes your Spanish sound much more natural.

COORDINATING (connect equal elements)
  y           and           Hablo español y francés.
  o           or            ¿Quieres café o té?
  pero        but           Me gusta, pero es caro.
  sino        but rather    No soy inglés, sino irlandés.

SUBORDINATING (introduce a dependent clause)
  porque      because       Estudio porque me gusta.
  que         that          Creo que es bueno.
  cuando      when          Cuando llego, llamo.
  si          if            Si tienes tiempo, ven.
  aunque      although      Aunque llueve, salgo.

SEQUENCING (order events or ideas)
  primero         first
  después / luego then / afterwards
  finalmente      finally
  también         also / too
  además          furthermore / also`,
    paradigmTable: {
      pronouns: ["Connector", "Meaning", "Type"],
      verbs: [
        { label: "y / e", forms: ["y / e", "and", "coordinating (e before i/hi)"] },
        { label: "o / u", forms: ["o / u", "or", "coordinating (u before o/ho)"] },
        { label: "pero", forms: ["pero", "but", "coordinating contrast"] },
        { label: "sino", forms: ["sino", "but rather / but instead", "correcting contrast"] },
        { label: "porque", forms: ["porque", "because", "subordinating cause"] },
        { label: "que", forms: ["que", "that", "subordinating"] },
        { label: "cuando", forms: ["cuando", "when", "subordinating time"] },
        { label: "si", forms: ["si", "if", "subordinating condition"] },
        { label: "aunque", forms: ["aunque", "although / even though", "subordinating concession"] },
        { label: "primero / después / finalmente", forms: ["primero / después / finalmente", "first / then / finally", "sequencing"] },
        { label: "también / además", forms: ["también / además", "also / furthermore", "addition"] },
      ],
    },
    rules: [
      {
        condition: "Y vs e before i/hi",
        result: "Y (and) becomes e before words starting with i or hi",
        examples: [
          { native: "María e Isabel", translation: "María and Isabel" },
          { native: "Habla inglés e italiano", translation: "He speaks English and Italian (not 'y inglés' — vowel clash)" },
        ],
      },
      {
        condition: "O vs u before o/ho",
        result: "O (or) becomes u before words starting with o or ho",
        examples: [
          { native: "siete u ocho", translation: "seven or eight" },
          { native: "mujeres u hombres", translation: "women or men" },
        ],
      },
      {
        condition: "Pero vs sino",
        result: "Pero = but (adding a contrasting idea). Sino = but rather (correcting a false idea)",
        examples: [
          { native: "Es caro pero bueno.", translation: "It's expensive but good." },
          { native: "No es inglés, sino irlandés.", translation: "He's not English, but Irish. (correction — he IS Irish, not English)" },
        ],
      },
      {
        condition: "¿Por qué? vs porque",
        result: "¿Por qué? (two words, accent) = why? Porque (one word, no accent) = because",
        examples: [
          { native: "¿Por qué estudias? — Porque me gusta.", translation: "Why do you study? — Because I like it." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content:
          "Sino vs pero: use sino ONLY when correcting a false or negative statement (the sentence before must have 'no'). \"No es inglés, sino irlandés\" — correcting. \"Es caro pero bueno\" — contrasting, not correcting → use pero.",
      },
      {
        type: "tip",
        content:
          "y/e and o/u are the only Spanish connectors that change form based on the following word. All other connectors are invariable.",
      },
    ],
    fixedPhrases: [
      { native: "Hablo español y un poco de francés.", translation: "I speak Spanish and a little French.", note: "y connecting two things." },
      { native: "Me gusta, pero es caro.", translation: "I like it, but it's expensive.", note: "pero for contrast." },
      { native: "Estudio porque me gusta.", translation: "I study because I like it.", note: "porque for reason." },
      { native: "Primero…, después…, finalmente…", translation: "First…, then…, finally…", note: "Sequencing a narrative." },
      { native: "Si tienes tiempo, ven.", translation: "If you have time, come.", note: "si for conditions." },
      { native: "No es A, sino B.", translation: "It's not A, but B.", note: "sino for correction after negation." },
    ],
    examples: [
      { native: "Hablo español y un poco de francés.", translation: "I speak Spanish and a little French." },
      { native: "Me gusta el café, pero prefiero el té.", translation: "I like coffee, but I prefer tea." },
      { native: "Estudio mucho porque quiero aprobar.", translation: "I study a lot because I want to pass." },
      { native: "Primero desayuno, después me ducho.", translation: "First I have breakfast, then I shower." },
      { native: "Si tienes hambre, hay comida en la nevera.", translation: "If you're hungry, there's food in the fridge." },
    ],
    inlineVocab: [
      { word: "francés", translation: "French" },
      { word: "café", translation: "coffee" },
      { word: "té", translation: "tea" },
      { word: "caro", translation: "expensive" },
      { word: "aprobar", translation: "to pass (an exam)" },
      { word: "hambre", translation: "hunger" },
      { word: "comida", translation: "food / meal" },
      { word: "nevera", translation: "fridge" },
      { word: "llueve", translation: "it rains" },
    ],
  },
  {
    id: "es-g-a1-31",
    level: "A1",
    title: "Stem-Changing Verbs — e→ie, o→ue, e→i",
    explanation: `You already know that querer (lesson a1-16) changes its stem vowel from e to ie in most forms. This is not a quirk unique to querer — it is a pattern shared by a large group of very common verbs. Understanding the three patterns helps you recognise and use dozens of high-frequency verbs correctly.

THE RULE — the boot / shoe pattern
Stem changes happen in all forms EXCEPT nosotros and vosotros.
Draw a line around the affected forms and it looks like a boot or shoe:
  yo, tú, él/ella, ellos/ellas → stem changes     ← inside the boot
  nosotros, vosotros           → NO stem change   ← outside the boot

PATTERN 1: e → ie
The stem vowel e changes to ie.

  QUERER — to want (see a1-16)
  quiero, quieres, quiere, queremos, queréis, quieren

  EMPEZAR — to begin / start
  empiezo, empiezas, empieza, empezamos, empezáis, empiezan

  PENSAR — to think
  pienso, piensas, piensa, pensamos, pensáis, piensan

  ENTENDER — to understand
  entiendo, entiendes, entiende, entendemos, entendéis, entienden

  VENIR — to come (also irregular yo: vengo)
  vengo, vienes, viene, venimos, venís, vienen

  TENER — to have (also irregular yo: tengo — see a1-9)
  tengo, tienes, tiene, tenemos, tenéis, tienen

PATTERN 2: o → ue
The stem vowel o changes to ue.

  PODER — to be able to / can (see a1-23)
  puedo, puedes, puede, podemos, podéis, pueden

  VOLVER — to return / come back
  vuelvo, vuelves, vuelve, volvemos, volvéis, vuelven

  DORMIR — to sleep
  duermo, duermes, duerme, dormimos, dormís, duermen

  ENCONTRAR — to find / to meet
  encuentro, encuentras, encuentra, encontramos, encontráis, encuentran

  JUGAR — to play (u → ue — the only u→ue verb)
  juego, juegas, juega, jugamos, jugáis, juegan

PATTERN 3: e → i (only -ir verbs)
The stem vowel e changes to i. Only applies to -ir verbs.

  PEDIR — to ask for / order
  pido, pides, pide, pedimos, pedís, piden

  SERVIR — to serve
  sirvo, sirves, sirve, servimos, servís, sirven

  REPETIR — to repeat
  repito, repites, repite, repetimos, repetís, repiten

SUMMARY TABLE

  Pattern    Example verb    yo form    Change
  e → ie     querer          quiero     e in stem → ie
  o → ue     poder           puedo      o in stem → ue
  e → i      pedir           pido       e in stem → i (only -ir verbs)
  u → ue     jugar           juego      u in stem → ue (jugar only)

NOSOTROS/VOSOTROS NEVER CHANGE — this is the key rule:
  ✓ queremos (not *querimos)
  ✓ podemos (not *puedemos)
  ✓ pedimos (not *pidimos)`,
    examples: [
      { native: "¿A qué hora empieza la clase?", translation: "What time does the class begin? (empezar e→ie)" },
      { native: "No entiendo la pregunta.", translation: "I don't understand the question. (entender e→ie)" },
      { native: "¿A qué hora vuelves a casa?", translation: "What time do you come home? (volver o→ue)" },
      { native: "Duermo ocho horas cada noche.", translation: "I sleep eight hours every night. (dormir o→ue)" },
      { native: "¿Qué pides tú?", translation: "What are you ordering? (pedir e→i — in a restaurant)" },
      { native: "Los niños juegan en el parque.", translation: "The children play in the park. (jugar u→ue)" },
      { native: "Nosotros volvemos mañana.", translation: "We come back tomorrow. (nosotros — NO stem change)" },
    ],
    inlineVocab: [
      { word: "empezar", translation: "to begin / start" },
      { word: "pensar", translation: "to think" },
      { word: "entender", translation: "to understand" },
      { word: "poder", translation: "to be able to / can" },
      { word: "volver", translation: "to return / come back" },
      { word: "dormir", translation: "to sleep" },
      { word: "encontrar", translation: "to find / meet" },
      { word: "jugar", translation: "to play" },
      { word: "pedir", translation: "to ask for / order" },
      { word: "servir", translation: "to serve" },
      { word: "clase", translation: "class / lesson" },
      { word: "pregunta", translation: "question" },
      { word: "niños", translation: "children" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "querer (e→ie)", forms: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] },
        { label: "poder (o→ue)", forms: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"] },
        { label: "pedir (e→i)", forms: ["pido", "pides", "pide", "pedimos", "pedís", "piden"] },
        { label: "jugar (u→ue)", forms: ["juego", "juegas", "juega", "jugamos", "jugáis", "juegan"] },
      ],
    },
    rules: [
      {
        condition: "The boot/shoe pattern",
        result: "Stem changes in yo/tú/él/ellos but NEVER in nosotros/vosotros",
        examples: [
          { native: "quiero/quieres/quiere (change)", translation: "I/you/he want — stem changes" },
          { native: "queremos/queréis (no change)", translation: "we/you all want — no stem change" },
        ],
      },
      {
        condition: "e→ie verbs",
        result: "The stem vowel e changes to ie",
        examples: [
          { native: "querer: quiero", translation: "I want" },
          { native: "empezar: empiezo", translation: "I begin" },
          { native: "entender: entiendo", translation: "I understand" },
          { native: "pensar: pienso", translation: "I think" },
        ],
      },
      {
        condition: "o→ue verbs",
        result: "The stem vowel o changes to ue",
        examples: [
          { native: "poder: puedo", translation: "I can" },
          { native: "volver: vuelvo", translation: "I return" },
          { native: "dormir: duermo", translation: "I sleep" },
          { native: "encontrar: encuentro", translation: "I find" },
        ],
      },
      {
        condition: "e→i verbs (only -ir verbs)",
        result: "The stem vowel e changes to i — only applies to -ir verbs",
        examples: [
          { native: "pedir: pido", translation: "I ask for / order" },
          { native: "servir: sirvo", translation: "I serve" },
          { native: "repetir: repito", translation: "I repeat" },
        ],
      },
      {
        condition: "Nosotros/vosotros never stem-change",
        result: "This is the key rule of the boot pattern",
        examples: [
          { native: "queremos (not *querimos)", translation: "we want — no change" },
          { native: "podemos (not *puedemos)", translation: "we can — no change" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "The boot/shoe visual helps — draw a line around yo/tú/él/ellos and it looks like a boot. Everything inside the boot changes; the nosotros/vosotros forms outside don't." },
      { type: "warning", content: "The e→i pattern ONLY applies to -ir verbs. -ar and -er verbs with e in the stem change to ie (not i). Pedir (e→i) = -ir verb. Querer (e→ie) = -er verb." },
      { type: "forward-ref", content: "You've already been using several stem-changing verbs: querer (es-g-a1-16) and poder (es-g-a1-23). This lesson shows the full system.", refId: "es-g-a1-16" },
    ],
  },
  {
    id: "es-g-a1-34",
    level: "A1",
    title: "Irregular Yo Forms — The 'Yo-Go' Verbs",
    explanation: `Several very common Spanish verbs have a regular present tense in all forms except yo, which ends in -go instead of the expected -o. Once you recognise this pattern, you can handle all of them confidently.

THE PATTERN — irregular yo, regular everything else

  TENER — to have (stem-change e→ie in other forms — see a1-9, a1-31)
  yo **tengo**    tú tienes    él tiene    nosotros tenemos

  VENIR — to come (stem-change e→ie in other forms — see a1-31)
  yo **vengo**    tú vienes    él viene    nosotros venimos

  HACER — to do / make
  yo **hago**     tú haces     él hace     nosotros hacemos

  SALIR — to leave / go out
  yo **salgo**    tú sales     él sale     nosotros salimos

  PONER — to put / place
  yo **pongo**    tú pones     él pone     nosotros ponemos

  TRAER — to bring
  yo **traigo**   tú traes     él trae     nosotros traemos

  CAER — to fall
  yo **caigo**    tú caes      él cae      nosotros caemos

  OÍR — to hear
  yo **oigo**     tú oyes      él oye      nosotros oímos

TWO EXTRA IRREGULAR YO FORMS (not -go but equally important):

  SABER — to know (see a1-33)
  yo **sé**       tú sabes     él sabe     nosotros sabemos

  CONOCER — to know / meet (see a1-33)
  yo **conozco**  tú conoces   él conoce   nosotros conocemos

  VER — to see
  yo **veo**      tú ves       él ve       nosotros vemos

  DAR — to give
  yo **doy**      tú das       él da       nosotros damos

THE PRACTICAL IMPACT
These are among the most frequent verbs in Spanish. You will produce yo forms constantly:

  ¿Qué haces? — Hago los deberes.     What are you doing? — I'm doing homework.
  ¿A qué hora sales? — Salgo a las ocho. What time do you leave? — I leave at eight.
  ¿Qué pones aquí? — Pongo las llaves.  What do you put here? — I put the keys.
  Traigo el vino — ¿tú traes el pan?   I'll bring the wine — will you bring the bread?`,
    examples: [
      { native: "Hago deporte todos los días.", translation: "I do sport every day. (hacer → hago)" },
      { native: "Salgo de casa a las ocho.", translation: "I leave home at eight. (salir → salgo)" },
      { native: "Pongo las llaves aquí siempre.", translation: "I always put the keys here. (poner → pongo)" },
      { native: "Traigo algo de comer.", translation: "I'm bringing something to eat. (traer → traigo)" },
      { native: "No oigo bien — ¿puedes repetir?", translation: "I can't hear well — can you repeat? (oír → oigo)" },
      { native: "Tengo que irme — vengo mañana.", translation: "I have to go — I'll come tomorrow. (tengo / vengo)" },
      { native: "Veo la televisión por la noche.", translation: "I watch television at night. (ver → veo)" },
    ],
    inlineVocab: [
      { word: "deporte", translation: "sport" },
      { word: "días", translation: "days" },
      { word: "casa", translation: "house / home" },
      { word: "llaves", translation: "keys" },
      { word: "pan", translation: "bread" },
      { word: "vino", translation: "wine" },
      { word: "deberes", translation: "homework" },
      { word: "televisión", translation: "television" },
      { word: "hacer", translation: "to do / make" },
      { word: "traer", translation: "to bring" },
      { word: "oír", translation: "to hear" },
    ],
    conjugationTable: {
      pronouns: ["yo (irregular)", "tú", "él / ella / usted", "nosotros / nosotras"],
      verbs: [
        { label: "hacer (do/make)", forms: ["hago", "haces", "hace", "hacemos"] },
        { label: "salir (leave/go out)", forms: ["salgo", "sales", "sale", "salimos"] },
        { label: "poner (put/place)", forms: ["pongo", "pones", "pone", "ponemos"] },
        { label: "traer (bring)", forms: ["traigo", "traes", "trae", "traemos"] },
        { label: "venir (come)", forms: ["vengo", "vienes", "viene", "venimos"] },
        { label: "tener (have)", forms: ["tengo", "tienes", "tiene", "tenemos"] },
        { label: "saber (know)", forms: ["sé", "sabes", "sabe", "sabemos"] },
        { label: "conocer (know)", forms: ["conozco", "conoces", "conoce", "conocemos"] },
        { label: "ver (see)", forms: ["veo", "ves", "ve", "vemos"] },
        { label: "dar (give)", forms: ["doy", "das", "da", "damos"] },
      ],
    },
    rules: [
      {
        condition: "Yo-go verbs",
        result: "The yo form ends in -go; all other forms are regular (or follow stem-change rules)",
        examples: [
          { native: "hago, salgo, pongo, traigo, vengo, tengo", translation: "I do, I leave, I put, I bring, I come, I have" },
        ],
      },
      {
        condition: "Using yo form in conversation",
        result: "These are the forms you produce constantly in first-person speech",
        examples: [
          { native: "Hago deporte.", translation: "I do sport." },
          { native: "Salgo a las ocho.", translation: "I leave at eight." },
          { native: "Pongo la mesa.", translation: "I set the table." },
          { native: "Traigo el vino.", translation: "I'll bring the wine." },
        ],
      },
      {
        condition: "Recognising the pattern",
        result: "If you know the yo form, you know the verb. All other forms are predictable.",
        examples: [
          { native: "tengo → tienes/tiene/tenemos", translation: "I have → you/he have/we have" },
          { native: "vengo → vienes/viene/venimos", translation: "I come → you/he come/we come" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "These verbs are among the most frequent in the entire Spanish language. Prioritise them — you'll use them constantly." },
      { type: "tip", content: "Venir and tener are BOTH yo-go AND stem-changing (e→ie): vengo but vienes/viene. The yo form is irregular; the boot-pattern forms are stem-changing." },
      { type: "culture", content: "¿Qué haces? (What are you doing? / What do you do?) is one of the most common questions in Spanish. The answer almost always involves one of these irregular yo verbs: Hago… / Salgo… / Pongo…" },
    ],
    fixedPhrases: [
      { native: "¿Qué haces?", translation: "What are you doing? / What do you do?", note: "Extremely common — hacer is the workhorse verb." },
      { native: "Salgo a las ocho.", translation: "I leave at eight.", note: "salgo is the yo form learners use constantly." },
      { native: "Traigo algo de comer.", translation: "I'll bring something to eat.", note: "traigo for offers and plans." },
      { native: "Pongo la mesa.", translation: "I set the table.", note: "Everyday domestic expression." },
      { native: "Vengo ahora.", translation: "I'm coming now.", note: "vengo — coming to where the listener is." },
    ],
  },
  {
    id: "es-g-a1-30",
    level: "A1",
    title: "The Imperative — Giving Instructions & Commands",
    explanation: `The imperative is used for instructions, commands, requests, and suggestions. Spanish has imperative forms for tú (informal), vosotros (informal plural — Spain), usted (formal singular), and ustedes (formal plural / Latin America). Nosotros (let's) is also possible.

FORMING THE AFFIRMATIVE IMPERATIVE

TÚ form — the most common:
  -ar verbs: use the él/ella present tense form (drop -as from tú form):
    hablar:  tú hablas → ¡Habla!      (Speak!)
    comprar: tú compras → ¡Compra!    (Buy!)
  -er/-ir verbs: same rule:
    comer:   tú comes → ¡Come!        (Eat!)
    escribir: tú escribes → ¡Escribe! (Write!)

USTED form — formal singular (same as él/ella subjunctive, but just use this pattern):
  hablar → ¡Hable!      vosotros → ¡Hablen!
  comer  → ¡Coma!       ustedes  → ¡Coman!
  escribir → ¡Escriba!  ustedes  → ¡Escriban!

VOSOTROS form — replace the -r of the infinitive with -d:
  hablar → ¡Hablad!    comer → ¡Comed!    escribir → ¡Escribid!

NOSOTROS — let's:
  ¡Hablemos!    Let's speak.
  ¡Comamos!     Let's eat.
  ¡Vamos!       Let's go. (irregular)

IRREGULAR TÚ IMPERATIVES — must memorise:
  ser   → ¡Sé!         tener → ¡Ten!
  ir    → ¡Ve!         venir → ¡Ven!
  hacer → ¡Haz!        poner → ¡Pon!
  decir → ¡Di!         salir → ¡Sal!

NEGATIVE IMPERATIVE
For ALL forms: no + present subjunctive.
At A1, the key pattern to know is the tú negative:
  ¡Habla!  → ¡No hables!     Don't speak!
  ¡Come!   → ¡No comas!      Don't eat!
  ¡Ve!     → ¡No vayas!      Don't go!
The full subjunctive is A2+ — for now, learn the tú negatives as fixed forms.

REFLEXIVE VERBS IN THE IMPERATIVE
Reflexive pronouns attach to the end of affirmative imperatives:
  levantarse: ¡Levántate!    Get up! (tú)
              ¡Levántese!    Get up! (usted)
              ¡Levantaos!    Get up! (vosotros — te + os, d drops)
              ¡Levántense!   Get up! (ustedes)

In negative imperatives the pronoun goes before:
  ¡No te levantes!    Don't get up! (tú)

See lesson a1-21 for reflexive verbs.

COMMON IMPERATIVE EXPRESSIONS
  ¡Escucha! / ¡Escuche!     Listen!
  ¡Mira! / ¡Mire!           Look!
  ¡Espera! / ¡Espere!       Wait!
  ¡Repite! / ¡Repita!       Repeat!
  ¡Siéntate! / ¡Siéntese!  Sit down!
  ¡Pasa! / ¡Pase!           Come in!
  ¡Habla más despacio!      Speak more slowly!
  ¡No te preocupes!         Don't worry! (informal)`,
    examples: [
      { native: "¡Habla más despacio, por favor!", translation: "Speak more slowly, please! (tú — informal)" },
      { native: "¡Escuche, por favor!", translation: "Listen, please! (usted — formal)" },
      { native: "¡Vamos!", translation: "Let's go! (nosotros)" },
      { native: "¡No comas eso!", translation: "Don't eat that! (tú negative)" },
      { native: "¡Levántate!", translation: "Get up! (reflexive imperative — pronoun attached)" },
      { native: "¡Ten cuidado!", translation: "Be careful! (tener — irregular tú imperative)" },
    ],
    inlineVocab: [
      { word: "despacio", translation: "slowly" },
      { word: "cuidado", translation: "care / careful" },
      { word: "esperar", translation: "to wait" },
      { word: "repetir", translation: "to repeat" },
      { word: "comprar", translation: "to buy" },
      { word: "salir", translation: "to leave / go out" },
      { word: "poner", translation: "to put / place" },
      { word: "venir", translation: "to come" },
    ],
    conjugationTable: {
      pronouns: ["tú (informal)", "usted (formal)", "ustedes (formal plural / LatAm)"],
      verbs: [
        { label: "hablar (-ar)", forms: ["habla", "hable", "hablen"] },
        { label: "comer (-er)", forms: ["come", "coma", "coman"] },
        { label: "escribir (-ir)", forms: ["escribe", "escriba", "escriban"] },
        { label: "ser (irregular)", forms: ["sé", "sea", "sean"] },
        { label: "ir (irregular)", forms: ["ve", "vaya", "vayan"] },
        { label: "hacer (irregular)", forms: ["haz", "haga", "hagan"] },
        { label: "tener (irregular)", forms: ["ten", "tenga", "tengan"] },
        { label: "venir (irregular)", forms: ["ven", "venga", "vengan"] },
      ],
    },
    rules: [
      {
        condition: "Tú affirmative imperative for -ar verbs",
        result: "Use the él/ella present tense form (= remove -as from tú form)",
        examples: [
          { native: "hablar: habla", translation: "Speak!" },
          { native: "comprar: compra", translation: "Buy!" },
          { native: "escuchar: escucha", translation: "Listen!" },
        ],
      },
      {
        condition: "Tú affirmative imperative for -er/-ir verbs",
        result: "Use the él/ella present tense form",
        examples: [
          { native: "comer: come", translation: "Eat!" },
          { native: "escribir: escribe", translation: "Write!" },
          { native: "beber: bebe", translation: "Drink!" },
        ],
      },
      {
        condition: "Usted affirmative imperative",
        result: "Take the yo present, drop -o, add -e (for -ar) or -a (for -er/-ir)",
        examples: [
          { native: "hablo → hable", translation: "Speak! (formal)" },
          { native: "como → coma", translation: "Eat! (formal)" },
          { native: "escribo → escriba", translation: "Write! (formal)" },
        ],
      },
      {
        condition: "Negative imperative (tú)",
        result: "Use no + present subjunctive form (learn as fixed patterns at A1)",
        examples: [
          { native: "Habla → No hables", translation: "Speak → Don't speak!" },
          { native: "Come → No comas", translation: "Eat → Don't eat!" },
          { native: "Ve → No vayas", translation: "Go → Don't go!" },
        ],
      },
      {
        condition: "Reflexive pronouns in the imperative",
        result: "Attach to end of affirmative imperatives",
        examples: [
          { native: "¡Levántate!", translation: "Get up! (tú)" },
          { native: "¡Siéntese!", translation: "Sit down! (usted)" },
          { native: "No te levantes.", translation: "Don't get up! (negative — pronoun goes before)" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "The 8 irregular tú imperatives must be memorised — they don't follow the regular pattern: sé, ve, haz, di, ten, ven, pon, sal." },
      { type: "culture", content: "Spanish speakers use the imperative constantly in everyday life — for recipes, directions, instructions. It's much less rude than it might seem to English speakers. \"Habla más despacio\" is polite when said with a smile." },
      { type: "tip", content: "In Latin America, ustedes serves for both formal and informal plural commands (replacing vosotros). Ustedes hablen = Speak! (to a group)" },
    ],
    fixedPhrases: [
      { native: "¡Escucha! / ¡Escuche!", translation: "Listen!", note: "tú / usted — most common classroom instruction." },
      { native: "¡Habla más despacio, por favor!", translation: "Speak more slowly, please!", note: "Essential for learners." },
      { native: "¡Ten cuidado!", translation: "Be careful!", note: "Irregular tú imperative of tener." },
      { native: "¡No te preocupes!", translation: "Don't worry!", note: "Negative reflexive imperative — very common." },
      { native: "¡Vamos!", translation: "Let's go!", note: "Nosotros imperative — hugely common." },
    ],
  },
  {
    id: "es-g-a1-35",
    level: "A1",
    title: "Direct Object Pronouns — lo, la, los, las",
    explanation: `A direct object is the noun that directly receives the action of the verb.
Direct object pronouns replace that noun so you don't have to repeat it.

¿Tienes el libro?  →  Sí, lo tengo.
Do you have the book?  →  Yes, I have it.

THE FOUR FORMS

              Singular    Plural
  Masculine:  lo          los
  Feminine:   la          las

  lo = it / him (masculine noun)    los = them (masculine)
  la = it / her (feminine noun)     las = them (feminine)

POSITION — place the pronoun BEFORE the conjugated verb:
  Tengo el café.        →  Lo tengo.        (I have it.)
  Veo a María.          →  La veo.          (I see her.)
  ¿Compras los libros?  →  ¿Los compras?    (Are you buying them?)
  Comemos las tapas.    →  Las comemos.     (We eat them.)

WITH INFINITIVES — two equally correct options:
  Quiero comerlo.   =   Lo quiero comer.    (I want to eat it.)
  Voy a hacerlo.    =   Lo voy a hacer.     (I'm going to do it.)
  The pronoun attaches to the infinitive OR goes before the first verb.

WITH COMMANDS — attach to affirmative; place before negative:
  ¡Cómelo!           Eat it!
  ¡No lo comas!      Don't eat it!
  Ponlo aquí.        Put it here.
  No lo pongas ahí.  Don't put it there.`,
    paradigmTable: {
      pronouns: ["masculine singular", "feminine singular", "masculine plural", "feminine plural"],
      verbs: [
        { label: "direct object pronoun", forms: ["lo", "la", "los", "las"] },
        { label: "English equivalent", forms: ["it / him", "it / her", "them (m.)", "them (f.)"] },
      ],
    },
    rules: [
      {
        condition: "Replacing a masculine singular direct object",
        result: "Use lo",
        examples: [
          { native: "¿Tienes el libro? — Sí, lo tengo.", translation: "Do you have the book? — Yes, I have it." },
          { native: "¿Ves a Juan? — Sí, lo veo.", translation: "Do you see Juan? — Yes, I see him." },
        ],
      },
      {
        condition: "Replacing a feminine singular direct object",
        result: "Use la",
        examples: [
          { native: "¿Tienes la llave? — Sí, la tengo.", translation: "Do you have the key? — Yes, I have it." },
          { native: "Veo a María todos los días. — La veo todos los días.", translation: "I see María every day. — I see her every day." },
        ],
      },
      {
        condition: "Replacing a plural direct object",
        result: "Use los (masc.) or las (fem.)",
        examples: [
          { native: "¿Compras los libros? — Sí, los compro.", translation: "Are you buying the books? — Yes, I'm buying them." },
          { native: "¿Comemos las tapas? — Sí, las comemos.", translation: "Are we eating the tapas? — Yes, we're eating them." },
        ],
      },
      {
        condition: "Position with a conjugated verb",
        result: "Pronoun goes BEFORE the conjugated verb",
        examples: [
          { native: "Lo tengo.", translation: "I have it." },
          { native: "La veo.", translation: "I see her/it." },
          { native: "Los compro.", translation: "I'm buying them." },
        ],
      },
      {
        condition: "Position with infinitive",
        result: "Attach to the end of the infinitive OR go before the conjugated verb — both are correct",
        examples: [
          { native: "Quiero comerlo. = Lo quiero comer.", translation: "I want to eat it. (both correct)" },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "Direct object pronouns go BEFORE the conjugated verb in Spanish — the opposite of English. Not \"Tengo lo\" but \"Lo tengo.\"",
      },
      {
        type: "tip",
        content: "With commands, attach the pronoun to the end of affirmative imperatives: ¡Cómelo! But for negative: ¡No lo comas! (pronoun before the verb).",
      },
      {
        type: "forward-ref",
        content: "Indirect object pronouns (me, te, le, nos, os, les) work on a similar principle and are introduced at A2.",
        refId: "es-g-a2-01",
      },
    ],
    examples: [
      { native: "¿Tienes el libro? — Sí, lo tengo.", translation: "Do you have the book? — Yes, I have it." },
      { native: "Veo a Carmen todos los días. La veo todos los días.", translation: "I see Carmen every day. I see her every day." },
      { native: "¿Comes el pan? — Sí, lo como.", translation: "Do you eat the bread? — Yes, I eat it." },
      { native: "Quiero comerlo. / Lo quiero comer.", translation: "I want to eat it. (both forms correct)" },
      { native: "¡Cómelo! / ¡No lo comas!", translation: "Eat it! / Don't eat it!" },
      { native: "¿Las tapas? Las pedimos ahora.", translation: "The tapas? We're ordering them now." },
    ],
    inlineVocab: [
      { word: "libro", translation: "book" },
      { word: "tapas", translation: "tapas (Spanish snacks)" },
      { word: "pan", translation: "bread" },
      { word: "poner", translation: "to put / place" },
      { word: "pedir", translation: "to order / to ask for" },
      { word: "ahí", translation: "there" },
    ],
  },
  {
    id: "es-g-a1-29",
    level: "A1",
    title: "Hay — There Is / There Are",
    explanation: `HAY is one of the most useful words in Spanish. It means both 'there is' and 'there are' — the same form is used for singular and plural. It never changes and has no subject.

STRUCTURE
  hay + noun (with indefinite article or number, or no article for general statements)

  Hay un banco cerca de aquí.     There is a bank nearby.
  Hay tres estudiantes.           There are three students.
  Hay agua en la botella.         There is water in the bottle.

NEGATIVE — no hay
Place no directly before hay:
  Hay leche.                → No hay leche.           There is no milk.
  Hay una farmacia aquí.    → No hay una farmacia aquí. There is no pharmacy here.
  Hay problemas.            → No hay problemas.        There are no problems.

QUESTION — ¿hay...?
Raise intonation or invert punctuation — hay itself does not change:
  ¿Hay un hotel cerca?            Is there a hotel nearby?
  ¿Hay asientos libres?           Are there any free seats?
  ¿Qué hay de comer?              What is there to eat?

HAY vs ESTAR
This is the most important distinction at A1.
  hay    → existence or presence (is there something? does something exist?)
  estar  → location of something already known (where is it?)

  ¿Hay un banco?          Is there a bank? (does one exist nearby?)
  ¿Dónde está el banco?   Where is the bank? (we know it exists — where?)

  Hay un restaurante en esta calle.    There is a restaurant on this street.
  El restaurante está en esta calle.   The restaurant is on this street.

COMMON USES
  Asking what is available:    ¿Qué hay en el menú?      What is on the menu?
  Describing a place:          En mi ciudad hay un museo. In my city there is a museum.
  Saying what is needed:       Hay que estudiar.          One must study / You have to study.
  Expressing absence:          No hay tiempo.             There is no time.

HAY QUE + INFINITIVE
A very common fixed expression meaning 'one must' or 'you have to' — impersonal obligation:
  Hay que reservar.             You have to book / One must book.
  Hay que pagar aquí.           You need to pay here.`,
    examples: [
      { native: "¿Hay una farmacia cerca de aquí?", translation: "Is there a pharmacy near here?" },
      { native: "Sí, hay una a dos minutos.", translation: "Yes, there is one two minutes away." },
      { native: "No hay habitaciones libres.", translation: "There are no free rooms." },
      { native: "¿Cuántos estudiantes hay en la clase?", translation: "How many students are there in the class?" },
      { native: "Hay que reservar con antelación.", translation: "You have to book in advance." },
      { native: "¿Hay un banco? — Sí. — ¿Dónde está el banco?", translation: "Is there a bank? — Yes. — Where is the bank? (hay = existence, estar = location)", speakText: "¿Hay un banco? Sí. ¿Dónde está el banco?" },
      { native: "En mi barrio hay un parque muy bonito.", translation: "In my neighbourhood there is a very nice park." },
      { native: "No hay tiempo.", translation: "There is no time." },
    ],
    rules: [
      {
        condition: "Existence or presence",
        result: "Use hay (there is/are) — same form for singular and plural",
        examples: [
          { native: "Hay un banco.", translation: "There is a bank." },
          { native: "Hay tres estudiantes.", translation: "There are three students." },
          { native: "No hay leche.", translation: "There is no milk." },
        ],
      },
      {
        condition: "Negative existence",
        result: "No hay + noun",
        examples: [
          { native: "No hay habitaciones libres.", translation: "There are no free rooms." },
          { native: "No hay tiempo.", translation: "There is no time." },
          { native: "No hay problema.", translation: "No problem." },
        ],
      },
      {
        condition: "Existence question",
        result: "¿Hay + noun?",
        examples: [
          { native: "¿Hay una farmacia cerca?", translation: "Is there a pharmacy nearby?" },
          { native: "¿Hay asientos libres?", translation: "Are there any free seats?" },
        ],
      },
      {
        condition: "Hay vs estar",
        result: "Hay = does something exist? Estar = where is it?",
        examples: [
          { native: "¿Hay un banco?", translation: "Is there a bank? (does one exist?)" },
          { native: "¿Dónde está el banco?", translation: "Where is the bank? (we know it exists — where?)" },
        ],
      },
      {
        condition: "Hay que + infinitive",
        result: "Impersonal obligation — 'one must / you have to'",
        examples: [
          { native: "Hay que reservar.", translation: "You have to book." },
          { native: "Hay que pagar aquí.", translation: "You need to pay here." },
          { native: "Hay que estudiar.", translation: "One must study." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "Hay never changes — it's the same for singular and plural. Never say \"han\" or \"están\" instead. Hay un libro. Hay tres libros. (same hay)",
      },
      {
        type: "tip",
        content: "The hay/estar distinction is one of the most important at A1. Hay introduces something new or asks about existence. Estar locates something already known.",
      },
      {
        type: "forward-ref",
        content: "Hay is the third way to talk about things in Spanish alongside ser and estar. The full three-way picture is in lesson es-g-a1-22 (Hay, ser, estar — deeper).",
        refId: "es-g-a1-22",
      },
    ],
    fixedPhrases: [
      { native: "¿Hay un/una… cerca?", translation: "Is there a… nearby?", note: "Most natural way to ask for nearby services." },
      { native: "No hay problema.", translation: "No problem.", note: "Fixed phrase — extremely common." },
      { native: "No hay tiempo.", translation: "There's no time.", note: "Common time-pressure expression." },
      { native: "Hay que + infinitive", translation: "One must / You have to", note: "Impersonal — no subject." },
      { native: "¿Qué hay de comer?", translation: "What is there to eat?", note: "Asking about available food." },
    ],
    inlineVocab: [
      { word: "farmacia", translation: "pharmacy" },
      { word: "habitaciones", translation: "rooms" },
      { word: "libres", translation: "free / available" },
      { word: "estudiantes", translation: "students" },
      { word: "clase", translation: "class" },
      { word: "reservar", translation: "to book / reserve" },
      { word: "barrio", translation: "neighbourhood" },
      { word: "parque", translation: "park" },
      { word: "bonito", translation: "nice / pretty" },
      { word: "botella", translation: "bottle" },
      { word: "menú", translation: "menu" },
      { word: "museo", translation: "museum" },
    ]
  },
  {
    id: "es-g-a1-28",
    level: "A1",
    title: "Ser vs Estar — Adjectives That Change Meaning",
    explanation: `Some Spanish adjectives mean something different depending on whether they follow ser or estar. The table below shows the four most important pairs at A1.`,
    paradigmTable: {
      pronouns: ["Adjective", "With ser", "With estar"],
      verbs: [
        { label: "aburrido/a", forms: ["boring (personality)", "bored (right now)"] },
        { label: "malo/a", forms: ["bad / evil (character)", "ill / sick (condition)"] },
        { label: "bueno/a", forms: ["good (personality)", "tasty / feeling well"] },
        { label: "listo/a", forms: ["clever / smart", "ready"] },
        { label: "rico/a", forms: ["rich / wealthy", "delicious (food)"] },
      ],
    },
    rules: [
      {
        condition: "Adjective that changes meaning with ser vs estar",
        result: "Ask: is this describing what the person/thing IS by nature, or what state they are IN right now?",
        examples: [
          { native: "Es aburrido. / Estoy aburrido.", translation: "He's boring (personality). / I'm bored (right now)." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Nature → ser. Temporary state → estar. Run this test for every meaning-changing adjective.",
      },
      {
        type: "culture",
        content: "\"Está buenísimo\" (estar) = this tastes amazing. \"Es bueno\" (ser) = it's generically good. The verb choice changes the whole meaning.",
      },
      {
        type: "forward-ref",
        content: "This lesson builds on the core ser/estar distinction in es-g-a1-2.",
        refId: "es-g-a1-2",
      },
    ],
    examples: [
      { native: "Esta película es muy aburrida.", translation: "This film is very boring. (ser — personality)" },
      { native: "Estoy aburrida en casa.", translation: "I am bored at home. (estar — feeling right now)" },
      { native: "Mi madre está mala hoy.", translation: "My mother is ill today. (estar — condition)" },
      { native: "¿Estás listo para salir?", translation: "Are you ready to go out? (estar — readiness)" },
      { native: "Es una chica muy lista.", translation: "She is a very clever girl. (ser — personality)" },
      { native: "Este postre está riquísimo.", translation: "This dessert is delicious. (estar — taste)" },
    ],
    inlineVocab: [
      { word: "película", translation: "film / movie" },
      { word: "aburrido", translation: "boring / bored" },
      { word: "madre", translation: "mother" },
      { word: "listo", translation: "clever / ready" },
      { word: "postre", translation: "dessert" },
      { word: "rico", translation: "rich / delicious" },
    ]
  },
  {
    id: "es-g-a1-33",
    level: "A1",
    title: "Saber vs Conocer — Two Verbs for 'To Know'",
    explanation: `Spanish has two verbs that both translate as 'to know' in English, but they are never interchangeable. The distinction is clear once you understand what each one covers.

THE CORE DIFFERENCE
  saber    — to know a fact, information, or how to do something
  conocer  — to know / be acquainted with a person, place, or thing

SABER — knowing facts and skills

CONJUGATION (present tense — irregular yo form):
  yo **sé**           nosotros sabemos
  tú sabes            vosotros sabéis
  él/ella sabe        ellos/ellas saben

USES:
  Knowing facts / information:
    Sé tu número de teléfono.    I know your phone number.
    ¿Sabes la respuesta?         Do you know the answer?
    No sé dónde está.            I don't know where it is.

  Knowing how to do something (saber + infinitive):
    Sé nadar.                    I know how to swim.
    ¿Sabes hablar chino?         Do you know how to speak Chinese?
    No sé cocinar.               I don't know how to cook.

  Knowing learned/factual information:
    Sé que tienes razón.         I know (that) you are right.
    ¿Sabes qué hora es?          Do you know what time it is?

CONOCER — being acquainted with people and places

CONJUGATION (present tense — irregular yo form):
  yo **conozco**      nosotros conocemos
  tú conoces          vosotros conocéis
  él/ella conoce      ellos/ellas conocen

USES:
  Knowing / being acquainted with a person:
    Conozco a María.             I know María. (I've met her)
    ¿Conoces a mi hermano?       Do you know my brother?
    No conozco a nadie aquí.     I don't know anyone here.

  Note: personal a is required before people with conocer (see below).

  Knowing / being familiar with a place:
    Conozco Madrid muy bien.     I know Madrid very well.
    ¿Conoces este restaurante?   Do you know this restaurant?

  Being familiar with a thing (book, film, song):
    ¿Conoces esta canción?       Do you know this song?
    Conozco ese libro.           I know that book. (I've read/heard of it)

PERSONAL A WITH CONOCER
When conocer refers to a person, use personal a:
  Conozco **a** tu profesor.    I know your teacher.
  ¿Conoces **a** alguien aquí?  Do you know anyone here?
  No need for a with places or things:
  Conozco Madrid.    Conozco ese libro.

QUICK TEST
Can you replace 'know' with 'know how to' or 'know the fact that'? → saber
Can you replace 'know' with 'be acquainted with' or 'have been to'? → conocer

  ¿Sabes dónde está el banco?    Do you know where the bank is? (fact → saber)
  ¿Conoces el banco de la plaza? Do you know the bank on the square? (familiar with → conocer)`,
    examples: [
      { native: "Sé hablar español un poco.", translation: "I know how to speak a little Spanish. (saber + infinitive)" },
      { native: "No sé dónde está la estación.", translation: "I don't know where the station is. (fact → saber)" },
      { native: "Conozco a tu hermana.", translation: "I know your sister. (person → conocer + personal a)" },
      { native: "¿Conoces Madrid?", translation: "Do you know Madrid? (place → conocer)" },
      { native: "¿Sabes qué hora es?", translation: "Do you know what time it is? (fact → saber)" },
      { native: "No conozco a nadie aquí.", translation: "I don't know anyone here. (person → conocer)" },
      { native: "Sé que tienes razón.", translation: "I know that you are right. (fact → saber)" },
    ],
    inlineVocab: [
      { word: "nadar", translation: "to swim" },
      { word: "cocinar", translation: "to cook" },
      { word: "respuesta", translation: "answer" },
      { word: "número", translation: "number" },
      { word: "estación", translation: "station / season" },
      { word: "hermana", translation: "sister" },
      { word: "hermano", translation: "brother" },
      { word: "restaurante", translation: "restaurant" },
      { word: "canción", translation: "song" },
      { word: "razón", translation: "reason / right" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "saber (know facts/skills)", forms: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"] },
        { label: "conocer (know people/places)", forms: ["conozco", "conoces", "conoce", "conocemos", "conocéis", "conocen"] },
      ],
    },
    paradigmTable: {
      pronouns: ["saber — use for", "conocer — use for"],
      verbs: [
        { label: "facts", forms: ["knowing a fact or information", "—"] },
        { label: "skills", forms: ["knowing how to do something (+ infinitive)", "—"] },
        { label: "people", forms: ["—", "being acquainted with a person (+ personal a)"] },
        { label: "places", forms: ["—", "being familiar with a place or thing"] },
      ],
    },
    rules: [
      {
        condition: "Knowing a fact or piece of information",
        result: "Use saber",
        examples: [
          { native: "Sé tu número.", translation: "I know your number." },
          { native: "¿Sabes la respuesta?", translation: "Do you know the answer?" },
          { native: "No sé dónde está.", translation: "I don't know where it is." },
        ],
      },
      {
        condition: "Knowing how to do something",
        result: "Use saber + infinitive",
        examples: [
          { native: "Sé nadar.", translation: "I know how to swim." },
          { native: "¿Sabes cocinar?", translation: "Do you know how to cook?" },
          { native: "No sé hablar chino.", translation: "I don't know how to speak Chinese." },
        ],
      },
      {
        condition: "Knowing / being acquainted with a person",
        result: "Use conocer + personal a",
        examples: [
          { native: "Conozco a María.", translation: "I know María." },
          { native: "¿Conoces a mi hermano?", translation: "Do you know my brother?" },
        ],
      },
      {
        condition: "Being familiar with a place or thing",
        result: "Use conocer (no personal a)",
        examples: [
          { native: "Conozco Madrid muy bien.", translation: "I know Madrid very well." },
          { native: "¿Conoces este restaurante?", translation: "Do you know this restaurant?" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Quick test — can you replace \"know\" with \"know how to\" or \"know the fact that\"? → saber. Can you replace it with \"be acquainted with\" or \"have been to\"? → conocer." },
      { type: "warning", content: "Personal a is required with conocer + person: Conozco a tu hermana. But NOT with places/things: Conozco Madrid." },
      { type: "culture", content: "\"¿Me conoces?\" (Do you know me?) and \"¿Me recuerdas?\" (Do you remember me?) are common questions when running into someone you may have met before." },
    ],
    fixedPhrases: [
      { native: "No lo sé. / No sé.", translation: "I don't know.", note: "Both forms are correct — No sé is more casual." },
      { native: "Sé hablar un poco de español.", translation: "I know how to speak a little Spanish.", note: "saber + infinitive for skills." },
      { native: "Conozco a alguien que puede ayudarte.", translation: "I know someone who can help you.", note: "conocer + personal a for person." },
      { native: "¿Conoces Madrid?", translation: "Do you know Madrid?", note: "conocer for place familiarity — no personal a." },
    ],
  },
  {
    id: "es-g-a1-12",
    level: "A1",
    title: "Bridge: Ir a + Infinitive — Near Future",
    explanation: `To talk about plans or intentions in the near future, use:

  ir (present tense) + a + infinitive

  Voy a comer.           (I'm going to eat.)
  Ella va a estudiar.    (She's going to study.)
  Vamos a viajar.        (We're going to travel.)

This is far more common than the simple future tense in everyday spoken Spanish. Use it whenever you want to talk about what you plan to do.

NEGATIVE NEAR FUTURE
  No voy a trabajar mañana.    (I'm not going to work tomorrow.)

QUESTIONS
  ¿Qué vas a hacer este fin de semana?   (What are you going to do this weekend?)`,
    examples: [
      { native: "Voy a comer pizza esta noche.", translation: "I'm going to eat pizza tonight." },
      { native: "¿Vas a estudiar mañana?", translation: "Are you going to study tomorrow?" },
      { native: "Ella va a llamar a su madre.", translation: "She is going to call her mother." },
      { native: "Vamos a visitar a los abuelos.", translation: "We are going to visit the grandparents." },
    ],
    inlineVocab: [
      { word: "noche", translation: "night" },
      { word: "mañana", translation: "tomorrow / morning" },
      { word: "madre", translation: "mother" },
      { word: "abuelos", translation: "grandparents" },
      { word: "viajar", translation: "to travel" },
      { word: "trabajar", translation: "to work" },
      { word: "fin de semana", translation: "weekend" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [{ label: "ir a + infinitive", forms: ["voy a…", "vas a…", "va a…", "vamos a…", "vais a…", "van a…"] }],
    },
    rules: [
      {
        condition: "Near future plan or intention",
        result: "ir (present, conjugated) + a + infinitive",
        examples: [
          { native: "Voy a comer.", translation: "I'm going to eat." },
          { native: "Ella va a estudiar.", translation: "She's going to study." },
          { native: "Vamos a viajar.", translation: "We're going to travel." },
        ],
      },
      {
        condition: "Negative near future",
        result: "No + ir conjugated + a + infinitive",
        examples: [
          { native: "No voy a trabajar mañana.", translation: "I'm not going to work tomorrow." },
          { native: "No van a venir.", translation: "They're not going to come." },
        ],
      },
      {
        condition: "Near future question",
        result: "¿Qué + ir + a + infinitive?",
        examples: [
          { native: "¿Qué vas a hacer este fin de semana?", translation: "What are you going to do this weekend?" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Ir a + infinitive is far more common than the simple future tense in everyday Spanish. Use it for all near-future plans and intentions." },
      { type: "culture", content: "\"¿Qué vas a hacer este fin de semana?\" (What are you doing this weekend?) is one of the most common questions in Spanish conversation. Master this structure and you can talk about plans naturally." },
    ],
    fixedPhrases: [
      { native: "Voy a…", translation: "I'm going to…", note: "The most useful near-future opener." },
      { native: "¿Qué vas a hacer?", translation: "What are you going to do?", note: "Essential conversation question." },
      { native: "Va a llover.", translation: "It's going to rain.", note: "Weather + near future — very common." },
      { native: "No voy a poder.", translation: "I'm not going to be able to.", note: "Polite refusal of a plan." },
    ],
  },
  {
    id: "es-g-a1-32",
    level: "A1",
    title: "Stressed Pronouns — Mí, Ti, Él, Ella...",
    explanation: `Stressed pronouns (pronombres tónicos / pronombres preposicionales) are used after prepositions and for emphasis. They are different from subject pronouns (yo, tú, él...) and appear constantly in everyday Spanish.

THE FORMS

  Subject pronoun    Stressed pronoun
  yo                 mí       (me)
  tú                 ti       (you)
  él                 él       (him)
  ella               ella     (her)
  usted              usted    (you — formal)
  nosotros/as        nosotros/as  (us)
  vosotros/as        vosotros/as  (you all)
  ellos/ellas        ellos/ellas  (them)

Note: él, ella, nosotros, vosotros, ellos, ellas, usted, ustedes are
identical to the subject pronouns. Only yo→mí and tú→ti change.

Important: mí has a written accent to distinguish it from mi (my — possessive).
ti never has an accent.

WHEN TO USE STRESSED PRONOUNS

1. AFTER PREPOSITIONS — any preposition requires a stressed pronoun:
  para mí          for me            Es para mí.
  con ti           with you          Quiero ir con ti... ← EXCEPTION below
  sin él           without him       Salió sin él.
  a ella           to her            Se lo di a ella.
  entre nosotros   between us        Entre nosotros...
  cerca de ellos   near them         Viven cerca de ellos.

SPECIAL CASE — con:
  con + mí → conmigo    (with me — NOT con mí)
  con + ti → contigo    (with you — NOT con ti)
  con + sí → consigo    (with himself/herself/themselves — reflexive)
  These three fused forms are fixed — always use conmigo/contigo/consigo.

2. FOR EMPHASIS — after ser or in short answers:
  Soy yo.           It's me.
  ¿Eres tú?         Is it you?
  Es él.            It's him.

3. ALONE OR IN SHORT ANSWERS:
  ¿Quién habla español? — ¡Yo!   Who speaks Spanish? — Me!

4. CLARIFYING SU — stressed pronoun after de:
  su casa can mean his/her/your/their house — to clarify:
  la casa de él     his house
  la casa de ella   her house
  la casa de usted  your house
  See lesson a1-15 for possessive adjectives.

5. TAMBIÉN / TAMPOCO — me too / me neither:
  Yo también.       Me too.
  Yo tampoco.       Me neither.`,
    paradigmTable: {
      pronouns: ["subject pronoun", "stressed pronoun", "use"],
      verbs: [
        { label: "yo", forms: ["yo", "mí", "para mí, sin mí, a mí"] },
        { label: "tú", forms: ["tú", "ti", "para ti, sin ti, a ti"] },
        { label: "él", forms: ["él", "él", "para él, con él (same form)"] },
        { label: "ella", forms: ["ella", "ella", "para ella (same form)"] },
        { label: "usted", forms: ["usted", "usted", "para usted (same form)"] },
        { label: "nosotros", forms: ["nosotros", "nosotros", "entre nosotros (same form)"] },
        { label: "ellos / ellas", forms: ["ellos/ellas", "ellos/ellas", "para ellos (same form)"] },
      ],
    },
    notes: [
      {
        type: "warning",
        content: "Only yo and tú change form: yo → mí, tú → ti. All other stressed pronouns are identical to the subject pronouns.",
      },
      {
        type: "warning",
        content: "Mí (stressed pronoun, \"me\") always has a written accent. Mi (possessive, \"my\") has no accent. The accent is the only difference.",
      },
      {
        type: "tip",
        content: "The fused forms conmigo (with me), contigo (with you), consigo (with himself/herself) are fixed and must be memorised. You CANNOT say \"con mí\" or \"con ti\".",
      },
    ],
    fixedPhrases: [
      { native: "Es para ti.", translation: "It's for you.", note: "Most common use: after para." },
      { native: "¿Quieres venir conmigo?", translation: "Do you want to come with me?", note: "conmigo = con + mí (fused form)." },
      { native: "Entre tú y yo...", translation: "Between you and me...", note: "ti after con, but tú after entre (another preposition)." },
      { native: "Yo también. / Yo tampoco.", translation: "Me too. / Me neither.", note: "yo used for emphasis after también/tampoco." },
      { native: "Soy yo.", translation: "It's me.", note: "yo used after ser for identification." },
    ],
    examples: [
      { native: "Este regalo es para ti.", translation: "This gift is for you." },
      { native: "¿Quieres venir conmigo?", translation: "Do you want to come with me? (con + mí = conmigo)" },
      { native: "Lo hizo sin nosotros.", translation: "He did it without us." },
      { native: "Soy yo.", translation: "It's me." },
      { native: "Entre tú y yo...", translation: "Between you and me..." },
      { native: "¿Quién tiene hambre? — ¡Yo!", translation: "Who is hungry? — Me!" },
      { native: "Yo también quiero ir.", translation: "I want to go too." },
    ],
    inlineVocab: [
      { word: "regalo", translation: "gift / present" },
      { word: "hambre", translation: "hunger" },
      { word: "cerca", translation: "near / nearby" },
    ],
  },
]
