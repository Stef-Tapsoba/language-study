import { GrammarLesson } from "../../../../types"

export const adverbsAndDiscourseLessons: GrammarLesson[] = [
  {
    id: "es-g-a1-18",
    level: "A1",
    title: "Negation",
    explanation: `NEGATION IN SPANISH
  Place no directly before the verb — no other words or changes are needed.

    No hablo inglés.       (I don't speak English.)
    No estoy bien.         (I'm not well.)
    No tengo coche.        (I don't have a car.)
    No voy al trabajo hoy. (I'm not going to work today.)

  DOUBLE NEGATION
  Spanish uses double negation with words like nunca (never), nada (nothing), nadie (nobody). Unlike English, the no before the verb stays even when a negative word follows:

    No tengo nada.          (I have nothing / I don't have anything.)
    No viene nunca.         (He never comes / He doesn't ever come.)
    No habla nadie.         (Nobody speaks / There's nobody speaking.)

  KEY NEGATIVE WORDS
    nada     — nothing / not anything
    nadie    — nobody / not anyone
    nunca    — never / not ever
    tampoco  — neither / not either`,
    rules: [
      {
        condition: "Basic negation",
        result: "Place no directly before the conjugated verb. No other changes needed.",
        examples: [
          { native: "No hablo inglés.", translation: "I don't speak English." },
          { native: "No tengo coche.", translation: "I don't have a car." },
          { native: "No estoy bien.", translation: "I'm not well." },
        ],
      },
      {
        condition: "Double negation",
        result: "When negative words (nada, nadie, nunca, tampoco) follow the verb, keep no before the verb too",
        examples: [
          { native: "No tengo nada.", translation: "I don't have anything." },
          { native: "No viene nunca.", translation: "He never comes." },
          { native: "No habla nadie.", translation: "Nobody speaks." },
        ],
      },
      {
        condition: "Negative words before the verb",
        result: "If nunca/nada/nadie go BEFORE the verb, drop the no",
        examples: [
          { native: "Nunca como carne.", translation: "I never eat meat. (= No como carne nunca.) Both correct." },
        ],
      },
      {
        condition: "Tampoco",
        result: "Tampoco = neither/not either — used in agreement with a negative statement",
        examples: [
          { native: "No me gusta el frío. — A mí tampoco.", translation: "I don't like the cold. — Me neither." },
          { native: "No tengo coche tampoco.", translation: "I don't have a car either." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content:
          "Double negation is correct in Spanish — unlike English where \"I don't have nothing\" is wrong, \"No tengo nada\" (I don't have nothing) is perfectly standard and required.",
      },
      {
        type: "tip",
        content:
          "Nunca can go before OR after the verb: \"Nunca como carne\" = \"No como carne nunca\". Both are natural; putting nunca before is slightly more emphatic.",
      },
      {
        type: "culture",
        content:
          "\"No problem\" in Spanish is usually \"No hay problema\" or \"No pasa nada\" (nothing's happening / it's nothing). \"No hay problema\" is formal; \"No pasa nada\" is warmer and more colloquial.",
      },
    ],
    fixedPhrases: [
      { native: "No entiendo.", translation: "I don't understand.", note: "Most essential learner phrase." },
      { native: "No hay problema.", translation: "No problem.", note: "Very common reassurance." },
      { native: "No pasa nada.", translation: "It's nothing. / No worries.", note: "Casual, warm — more colloquial than no hay problema." },
      { native: "No sé.", translation: "I don't know.", note: "Simple and essential." },
      { native: "Nunca jamás.", translation: "Never ever.", note: "Emphatic — nunca + jamás together for strong emphasis." },
      { native: "Yo tampoco.", translation: "Me neither.", note: "Agreeing with a negative — very common in conversation." },
    ],
    examples: [
      { native: "No hablo inglés.", translation: "I don't speak English." },
      { native: "No estoy cansado.", translation: "I'm not tired." },
      { native: "No tengo hermanos.", translation: "I don't have any siblings." },
      { native: "No como carne nunca.", translation: "I never eat meat." },
      { native: "No hay nada en la nevera.", translation: "There's nothing in the fridge." },
    ],
    inlineVocab: [
      { word: "inglés", translation: "English" },
      { word: "cansado", translation: "tired" },
      { word: "coche", translation: "car" },
      { word: "hermanos", translation: "siblings / brothers" },
      { word: "carne", translation: "meat" },
      { word: "nevera", translation: "fridge" },
      { word: "trabajo", translation: "work" },
    ],
  },
  {
    id: "es-g-a1-19",
    level: "A1",
    title: "Question Formation",
    explanation: `YES/NO QUESTIONS
Raise intonation at the end, or invert the subject and verb. Spanish always uses opening ¿ and closing ?:

  ¿Hablas español?      (Do you speak Spanish? — intonation)
  ¿Es María médica?     (Is María a doctor? — inversion)
  ¿Tienes hermanos?     (Do you have siblings?)

INFORMATION QUESTIONS
Question word + (optional subject) + verb. All question words carry a written accent:

  ¿qué?       what        ¿Qué es esto?           (What is this?)
  ¿dónde?     where       ¿Dónde vives?           (Where do you live?)
  ¿quién?     who         ¿Quién es él?           (Who is he?)
  ¿cuándo?    when        ¿Cuándo llegas?         (When do you arrive?)
  ¿cómo?      how         ¿Cómo estás?            (How are you?)
  ¿cuánto/a?  how much    ¿Cuánto cuesta?         (How much does it cost?)
  ¿cuántos/as? how many   ¿Cuántos años tienes?   (How old are you?)
  ¿por qué?   why         ¿Por qué estudias?      (Why do you study?)
  ¿cuál?      which/what  ¿Cuál es tu nombre?     (What is your name?)

KEY RULE: ¿ always opens every Spanish question — a visible signal that a question is coming.`,
    paradigmTable: {
      pronouns: ["Question word", "Meaning", "Example"],
      verbs: [
        { label: "¿qué?", forms: ["¿qué?", "what", "¿Qué es esto?"] },
        { label: "¿dónde?", forms: ["¿dónde?", "where", "¿Dónde vives?"] },
        { label: "¿adónde?", forms: ["¿adónde?", "where to (motion)", "¿Adónde vas?"] },
        { label: "¿quién? / ¿quiénes?", forms: ["¿quién?/¿quiénes?", "who", "¿Quién es él?"] },
        { label: "¿cuándo?", forms: ["¿cuándo?", "when", "¿Cuándo llegas?"] },
        { label: "¿cómo?", forms: ["¿cómo?", "how", "¿Cómo estás?"] },
        { label: "¿cuánto/a?", forms: ["¿cuánto/a?", "how much", "¿Cuánto cuesta?"] },
        { label: "¿cuántos/as?", forms: ["¿cuántos/as?", "how many", "¿Cuántos años tienes?"] },
        { label: "¿por qué?", forms: ["¿por qué?", "why", "¿Por qué estudias?"] },
        { label: "¿cuál? / ¿cuáles?", forms: ["¿cuál?/¿cuáles?", "which / what", "¿Cuál es tu nombre?"] },
        { label: "¿de dónde?", forms: ["¿de dónde?", "where from", "¿De dónde eres?"] },
      ],
    },
    rules: [
      {
        condition: "Yes/no question from a statement",
        result: "Raise intonation at the end, or invert subject and verb. Always use ¿ at the start.",
        examples: [
          { native: "¿Hablas español?", translation: "Do you speak Spanish?" },
          { native: "¿Es María médica?", translation: "Is María a doctor?" },
        ],
      },
      {
        condition: "Information question structure",
        result: "Question word + (optional subject) + verb + rest of sentence",
        examples: [
          { native: "¿Dónde vives?", translation: "Where do you live?" },
          { native: "¿Por qué estudias español?", translation: "Why do you study Spanish?" },
          { native: "¿Cuántos años tiene él?", translation: "How old is he?" },
        ],
      },
      {
        condition: "¿Cuál? vs ¿Qué?",
        result: "¿Cuál? = which/what (choosing from options or a specific item). ¿Qué? = what (open / defining)",
        examples: [
          { native: "¿Cuál es tu número?", translation: "What's your number? (your specific number)" },
          { native: "¿Qué es eso?", translation: "What is that? (what is that thing?)" },
        ],
      },
      {
        condition: "¿Por qué? vs porque",
        result: "¿Por qué? (two words, accent) = why. Porque (one word, no accent) = because.",
        examples: [
          { native: "¿Por qué estudias? — Porque me gusta.", translation: "Why do you study? — Because I like it." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content:
          "All question words in Spanish carry a written accent (¿qué?, ¿dónde?, ¿cuándo?…) to distinguish them from their non-question uses (que = that, donde = where/in which, cuando = when).",
      },
      {
        type: "tip",
        content:
          "The opening ¿ is unique to Spanish. It tells the reader or listener that a question is coming before they've reached the verb — very useful for following fast speech.",
      },
      {
        type: "culture",
        content:
          "¿Cómo? (How? / What?) can also mean \"Excuse me? I didn't catch that.\" — exactly like the English \"How's that?\" or \"Pardon?\". Very natural and polite.",
      },
    ],
    fixedPhrases: [
      { native: "¿De dónde eres?", translation: "Where are you from?", note: "Always ser for origin — first question when meeting someone." },
      { native: "¿Cuánto cuesta?", translation: "How much does it cost?", note: "Essential shopping phrase." },
      { native: "¿Cómo se dice…?", translation: "How do you say…?", note: "Learner's essential question." },
      { native: "¿A qué hora…?", translation: "At what time…?", note: "For scheduling and plans." },
      { native: "¿Por qué? — Porque.", translation: "Why? — Because.", note: "Question and answer word pair." },
      { native: "¿Cómo?", translation: "How? / Pardon?", note: "Also used to ask for repetition — very natural." },
    ],
    examples: [
      { native: "¿Hablas español?", translation: "Do you speak Spanish?" },
      { native: "¿Dónde vives?", translation: "Where do you live?" },
      { native: "¿Qué es esto?", translation: "What is this?" },
      { native: "¿Cuántos años tienes?", translation: "How old are you?" },
      { native: "¿Por qué estudias inglés?", translation: "Why do you study English?" },
    ],
    inlineVocab: [
      { word: "hermanos", translation: "siblings / brothers" },
      { word: "médica", translation: "doctor (fem.)" },
      { word: "llegas", translation: "you arrive" },
      { word: "nombre", translation: "name" },
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
]
