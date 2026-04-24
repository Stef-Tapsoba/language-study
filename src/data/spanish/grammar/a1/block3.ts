import { GrammarLesson } from "../../../../types"

export const block3Lessons: GrammarLesson[] = [
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
Question word + (optional subject) + verb. All question words carry a written accent — see the table below.

KEY RULE: ¿ always opens every Spanish question — a visible signal that a question is coming.`,
    referenceTable: {
      layout: "keyed",
      headers: ["Question word", "Meaning", "Example"],
      rows: [
        { label: "¿qué?", cells: ["what", "¿Qué haces?"] },
        { label: "¿dónde?", cells: ["where", "¿Dónde vives?"] },
        { label: "¿quién?", cells: ["who", "¿Quién es?"] },
        { label: "¿cuándo?", cells: ["when", "¿Cuándo llegas?"] },
        { label: "¿cómo?", cells: ["how", "¿Cómo estás?"] },
        { label: "¿cuánto/a?", cells: ["how much", "¿Cuánto cuesta?"] },
        { label: "¿cuántos/as?", cells: ["how many", "¿Cuántos años tienes?"] },
        { label: "¿por qué?", cells: ["why", "¿Por qué estudias?"] },
        { label: "¿cuál/es?", cells: ["which / what", "¿Cuál prefieres?"] },
        { label: "¿adónde?", cells: ["where to", "¿Adónde vas?"] },
      ],
    },
    rules: [
      {
        condition: "Yes/no question from a statement",
        result: "Raise intonation or invert subject/verb — always open with ¿",
        examples: [
          { native: "¿Hablas español?", translation: "Do you speak Spanish?" },
          { native: "¿Es María médica?", translation: "Is María a doctor?" },
        ],
      },
      {
        condition: "Information question structure",
        result: "question word + (subject) + verb",
        examples: [
          { native: "¿Dónde vives?", translation: "Where do you live?" },
          { native: "¿Por qué estudias español?", translation: "Why do you study Spanish?" },
          { native: "¿Cuántos años tiene él?", translation: "How old is he?" },
        ],
      },
      {
        condition: "¿Cuál? vs ¿Qué?",
        result: "¿Cuál? = which (from options) · ¿Qué? = what (open)",
        examples: [
          { native: "¿Cuál es tu número?", translation: "What's your number? (your specific number)" },
          { native: "¿Qué es eso?", translation: "What is that? (what is that thing?)" },
        ],
      },
      {
        condition: "¿Por qué? vs porque",
        result: "¿Por qué? = why · porque = because",
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
    id: "es-g-a1-14",
    level: "A1",
    title: "Weather — Hace + Weather Expression",
    explanation: `To describe the weather in Spanish, use HACER (3rd person: hace) + a weather noun — see the table below for all expressions.

TWO SPECIAL VERBS — no hacer needed
  Llueve.    It's raining.    (from llover — stem-changing o→ue)
  Nieva.     It's snowing.    (from nevar — stem-changing e→ie)

ASKING ABOUT THE WEATHER
  ¿Qué tiempo hace?        What is the weather like?
  ¿Qué tiempo hace hoy?    What is the weather like today?

SEASONS + WEATHER
  En verano hace mucho calor.      It's very hot in summer.
  En invierno hace frío y nieva.   In winter it's cold and it snows.`,
    examples: [
      { native: "Hace frío.", translation: "It's cold." },
      { native: "Hace mucho calor hoy.", translation: "It's very hot today." },
      { native: "Llueve mucho en otoño.", translation: "It rains a lot in autumn." },
      { native: "¿Qué tiempo hace?", translation: "What is the weather like?" },
      { native: "En invierno nieva.", translation: "In winter it snows." },
    ],
    referenceTable: {
      layout: "keyed",
      headers: ["Spanish", "English"],
      rows: [
        { label: "hace calor", cells: ["hace calor", "it's hot"] },
        { label: "hace frío", cells: ["hace frío", "it's cold"] },
        { label: "hace sol", cells: ["hace sol", "it's sunny"] },
        { label: "hace viento", cells: ["hace viento", "it's windy"] },
        { label: "hace buen/mal tiempo", cells: ["hace buen/mal tiempo", "the weather is good/bad"] },
        { label: "llueve", cells: ["llueve", "it's raining"] },
        { label: "nieva", cells: ["nieva", "it's snowing"] },
        { label: "está nublado", cells: ["está nublado", "it's cloudy"] },
      ],
    },
    rules: [
      {
        condition: "Most weather descriptions",
        result: "Use hace + weather noun: Hace + calor/frío/sol/viento",
        examples: [
          { native: "Hace calor.", translation: "It's hot." },
          { native: "¿Qué tiempo hace?", translation: "What is the weather like?" },
          { native: "Hace mucho frío hoy.", translation: "It's very cold today." },
        ],
      },
      {
        condition: "Rain and snow",
        result: "llueve / nieva — their own verbs, no hace needed",
        examples: [
          { native: "Llueve mucho en otoño.", translation: "It rains a lot in autumn." },
          { native: "En invierno nieva.", translation: "In winter it snows." },
        ],
      },
      {
        condition: "Degree of weather",
        result: "Add mucho/poco/bastante/demasiado after hace",
        examples: [
          { native: "Hace mucho calor.", translation: "It's very hot." },
          { native: "Hace un poco de viento.", translation: "It's a little windy." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Hace comes from hacer (to do/make). Weather literally \"does\" something in Spanish — \"hace calor\" = \"it makes heat.\"",
      },
      {
        type: "tip",
        content: "Llover (to rain) and nevar (to snow) are stem-changing (o→ue, e→ie) but since they're impersonal (only él/ella form), you only ever need: llueve and nieva.",
      },
      {
        type: "culture",
        content: "Weather is a safe, common conversation topic everywhere. ¿Qué tiempo hace? opens hundreds of conversations.",
      },
    ],
    fixedPhrases: [
      { native: "¿Qué tiempo hace?", translation: "What is the weather like?", note: "The standard weather question." },
      { native: "Hace mucho calor.", translation: "It's very hot.", note: "mucho/poco after hace for degree." },
      { native: "Llueve mucho aquí en otoño.", translation: "It rains a lot here in autumn.", note: "Natural context sentence." },
      { native: "En verano hace mucho calor.", translation: "In summer it's very hot.", note: "en + season for general weather patterns." },
    ],
    inlineVocab: [
      { word: "calor", translation: "heat / warmth" },
      { word: "frío", translation: "cold" },
      { word: "sol", translation: "sun" },
      { word: "viento", translation: "wind" },
      { word: "llueve", translation: "it rains" },
      { word: "nieva", translation: "it snows" },
      { word: "verano", translation: "summer" },
      { word: "invierno", translation: "winter" },
      { word: "otoño", translation: "autumn / fall" },
      { word: "tiempo", translation: "weather / time" },
    ]
  },
  {
    id: "es-g-a1-16",
    level: "A1",
    title: "Querer — Stem-Changing Verb (e → ie)",
    explanation: `**Querer** (to want / to love) is one of the most used verbs in Spanish. It is stem-changing: the stem vowel e changes to ie in all forms except nosotros and vosotros — those two forms never stem-change.

USES OF QUERER
  querer + noun          Quiero un café.            (I want a coffee.)
  querer + infinitive    ¿Quieres comer?            (Do you want to eat?)
  querer a alguien       Quiero a mi familia.       (I love my family.) — persons use 'a'

ORDERING POLITELY
  Quiero un café, por favor.    I'd like a coffee, please.
  ¿Qué quieres comer?           What do you want to eat?`,
    examples: [
      { native: "Quiero un café, por favor.", translation: "I'd like a coffee, please." },
      { native: "¿Qué quieres comer?", translation: "What do you want to eat?" },
      { native: "Queremos una mesa para dos.", translation: "We want a table for two." },
      { native: "Ella quiere aprender español.", translation: "She wants to learn Spanish." },
      { native: "¿Quieres ir al cine?", translation: "Do you want to go to the cinema?" },
    ],
    inlineVocab: [
      { word: "café", translation: "coffee" },
      { word: "mesa", translation: "table" },
      { word: "familia", translation: "family" },
      { word: "cine", translation: "cinema" },
      { word: "aprender", translation: "to learn" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [{ label: "querer (e→ie)", forms: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] }],
    },
    rules: [
      {
        condition: "Wanting a thing",
        result: "querer + noun",
        examples: [
          { native: "Quiero un café.", translation: "I want a coffee." },
          { native: "¿Quieres algo?", translation: "Do you want something?" },
        ],
      },
      {
        condition: "Wanting to do something",
        result: "querer + infinitive",
        examples: [
          { native: "¿Quieres comer?", translation: "Do you want to eat?" },
          { native: "Queremos ir al cine.", translation: "We want to go to the cinema." },
        ],
      },
      {
        condition: "The stem change",
        result: "e→ie in yo/tú/él/ellos — NOT in nosotros/vosotros",
        examples: [
          { native: "quiero / quieres / quiere (change)", translation: "I want / you want / he wants" },
          { native: "queremos (no change)", translation: "we want" },
        ],
      },
      {
        condition: "Loving a person",
        result: "querer a + person (personal a required)",
        examples: [
          { native: "Quiero a mi familia.", translation: "I love my family." },
          { native: "¿Quieres a alguien?", translation: "Do you love someone?" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Quiero (I want) is used for ordering food and drink — it sounds direct but is perfectly natural: Quiero un café, por favor." },
      { type: "forward-ref", content: "Querer is the most common e→ie stem-changing verb. The full system of stem changes (all three patterns) is in 'Stem-Changing Verbs'.", refId: "es-g-a1-31" },
    ],
    fixedPhrases: [
      { native: "Quiero un café, por favor.", translation: "I'd like a coffee, please.", note: "Natural and polite for ordering." },
      { native: "¿Qué quieres comer?", translation: "What do you want to eat?", note: "Very common at mealtimes." },
      { native: "No quiero.", translation: "I don't want to.", note: "Short, clear, very common." },
      { native: "¿Quieres…?", translation: "Do you want…? / Would you like…?", note: "Offering something to someone." },
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
    id: "es-g-a1-21",
    level: "A1",
    title: "Reflexive Verbs",
    explanation: `Reflexive verbs express actions done to oneself. They use a reflexive pronoun that matches the subject — placed BEFORE the conjugated verb.

  Me llamo Ana.           (My name is Ana. — lit. I call myself Ana.)
  Te despiertas tarde.    (You wake up late.)
  Se ducha por la mañana. (He/she showers in the morning.)

COMMON REFLEXIVE VERBS
  llamarse       to be called          Me llamo Juan.
  levantarse     to get up             Me levanto a las siete.
  acostarse      to go to bed          Me acuesto a las once.
  despertarse    to wake up            Se despierta temprano.
  ducharse       to shower             ¿A qué hora te duchas?
  vestirse       to get dressed        Me visto rápido.
  sentarse       to sit down           Siéntate aquí.

Note: acostarse (o→ue) and despertarse (e→ie) are also stem-changing.`,
    examples: [
      { native: "Me llamo Pablo.", translation: "My name is Pablo." },
      { native: "Me levanto a las siete.", translation: "I get up at seven." },
      { native: "Ella se ducha por la mañana.", translation: "She showers in the morning." },
      { native: "Nos acostamos tarde.", translation: "We go to bed late." },
      { native: "¿A qué hora te despiertas?", translation: "What time do you wake up?" },
    ],
    inlineVocab: [
      { word: "levantarse", translation: "to get up" },
      { word: "acostarse", translation: "to go to bed" },
      { word: "despertarse", translation: "to wake up" },
      { word: "ducharse", translation: "to shower" },
      { word: "vestirse", translation: "to get dressed" },
      { word: "tarde", translation: "late" },
      { word: "temprano", translation: "early" },
      { word: "mañana", translation: "morning" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "pronoun", forms: ["me", "te", "se", "nos", "os", "se"] },
        { label: "levantarse", forms: ["me levanto", "te levantas", "se levanta", "nos levantamos", "os levantáis", "se levantan"] },
      ],
    },
    rules: [
      {
        condition: "Forming a reflexive verb",
        result: "reflexive pronoun BEFORE the conjugated verb",
        examples: [
          { native: "Me llamo Pablo.", translation: "My name is Pablo." },
          { native: "Te levantas tarde.", translation: "You get up late." },
          { native: "Se ducha por la mañana.", translation: "He/she showers in the morning." },
        ],
      },
      {
        condition: "Infinitive of a reflexive verb",
        result: "The infinitive ends in -se: llamarse, levantarse, ducharse",
        examples: [
          { native: "llamarse → me llamo", translation: "to be called / my name is", annotation: "llamarse → me llamo (reflexive: drop -se, add me before conjugated form)" },
          { native: "levantarse → me levanto", translation: "to get up / I get up", annotation: "levantarse → me levanto (reflexive: me goes before the verb)" },
        ],
      },
      {
        condition: "Position of reflexive pronoun with infinitive",
        result: "attach to infinitive OR go before conjugated verb",
        examples: [
          { native: "Quiero levantarme.", translation: "I want to get up." },
          { native: "Me quiero levantar.", translation: "I want to get up. (same meaning)" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Me llamo (My name is) is the standard way to give your name in Spanish. Literally \"I call myself.\" It's always reflexive — always me llamo, te llamas, se llama." },
      { type: "warning", content: "Acostarse and despertarse are also stem-changing. Acostarse (o→ue): me acuesto. Despertarse (e→ie): me despierto. The nosotros/vosotros forms don't change." },
      { type: "forward-ref", content: "Reflexive verbs also appear in the imperative — the pronoun attaches to the end: ¡Levántate! Covered in 'The Imperative'.", refId: "es-g-a1-30" },
    ],
    fixedPhrases: [
      { native: "Me llamo…", translation: "My name is…", note: "The standard way to give your name." },
      { native: "¿A qué hora te levantas?", translation: "What time do you get up?", note: "Essential daily routine question." },
      { native: "Me voy.", translation: "I'm leaving.", note: "Irse (reflexive of ir) — going away." },
      { native: "¡Siéntate! / ¡Siéntese!", translation: "Sit down!", note: "Reflexive imperative — pronoun attaches." },
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
      { native: "¿Hay un banco? — Sí. — ¿Dónde está el banco?", translation: "Is there a bank? — Yes. — Where is the bank?", annotation: "hay = existence; estar = location of something already known", speakText: "¿Hay un banco? Sí. ¿Dónde está el banco?" },
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
        type: "tip",
        content: "Hay is a third tool alongside ser and estar. Ser defines what something is. Estar locates or describes its state. Hay introduces or asks whether something exists.",
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
    ],
  },
]
