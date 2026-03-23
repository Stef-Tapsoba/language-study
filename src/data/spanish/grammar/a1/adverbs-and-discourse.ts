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
    ]
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
    ]
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
  después     after / afterwards`,
    examples: [
      { native: "El libro está aquí.", translation: "The book is here." },
      { native: "¿Está lejos de aquí?", translation: "Is it far from here?" },
      { native: "Hoy tengo clase.", translation: "Today I have class." },
      { native: "Ya he comido.", translation: "I have already eaten." },
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
    ]
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
    ]
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
    ]
  },
]
