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
    id: "es-g-a1-14",
    level: "A1",
    title: "Weather — Hace + Weather Expression",
    explanation: `To describe the weather in Spanish, use HACER (3rd person: hace) + a weather noun.

COMMON WEATHER EXPRESSIONS
  Hace calor.           It's hot.        (lit. It makes heat.)
  Hace frío.            It's cold.       (lit. It makes cold.)
  Hace sol.             It's sunny.      (lit. It makes sun.)
  Hace viento.          It's windy.      (lit. It makes wind.)
  Hace buen tiempo.     The weather is good.
  Hace mal tiempo.      The weather is bad.

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
    paradigmTable: {
      pronouns: ["Expression", "Spanish", "Notes"],
      verbs: [
        { label: "hot", forms: ["Hace calor.", "It's hot.", "hace + noun"] },
        { label: "cold", forms: ["Hace frío.", "It's cold.", "hace + noun"] },
        { label: "sunny", forms: ["Hace sol.", "It's sunny.", "hace + noun"] },
        { label: "windy", forms: ["Hace viento.", "It's windy.", "hace + noun"] },
        { label: "good weather", forms: ["Hace buen tiempo.", "The weather is good.", "hace + adjective + noun"] },
        { label: "bad weather", forms: ["Hace mal tiempo.", "The weather is bad.", "hace + adjective + noun"] },
        { label: "raining", forms: ["Llueve.", "It's raining.", "separate verb — no hace"] },
        { label: "snowing", forms: ["Nieva.", "It's snowing.", "separate verb — no hace"] },
        { label: "cloudy", forms: ["Está nublado.", "It's cloudy.", "estar + adjective"] },
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
        result: "Use their own impersonal verbs: llueve (to rain) and nieva (to snow) — no hace needed",
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
    id: "es-g-a1-15",
    level: "A1",
    title: "Possessive Adjectives",
    explanation: `Possessive adjectives show who something belongs to. They agree in number with the noun they describe — not with the owner.

POSSESSIVE ADJECTIVES

  Owner              Singular              Plural
  yo (I)             mi                    mis
  tú (you)           tu                    tus
  él / ella / usted  su                    sus
  nosotros           nuestro / nuestra     nuestros / nuestras
  vosotros           vuestro / vuestra     vuestros / vuestras
  ellos / ustedes    su                    sus

AGREEMENT WITH THE NOUN
  mi hermano     (my brother — masc. sg.)
  mi hermana     (my sister — fem. sg.)
  mis hermanos   (my siblings — plural)

  nuestro padre   (our father — masc.)
  nuestra madre   (our mother — fem.)

AMBIGUITY OF SU
  su casa can mean: his house / her house / your house / their house
  Context usually makes the meaning clear. To be explicit:
  la casa de él / la casa de ella / la casa de usted`,
    paradigmTable: {
      pronouns: ["Owner", "Singular noun", "Plural noun"],
      verbs: [
        { label: "yo (I)", forms: ["yo", "mi", "mis"] },
        { label: "tú (you)", forms: ["tú", "tu", "tus"] },
        { label: "él / ella / usted", forms: ["él/ella/usted", "su", "sus"] },
        { label: "nosotros", forms: ["nosotros", "nuestro / nuestra", "nuestros / nuestras"] },
        { label: "vosotros", forms: ["vosotros", "vuestro / vuestra", "vuestros / vuestras"] },
        { label: "ellos / ustedes", forms: ["ellos/ustedes", "su", "sus"] },
      ],
    },
    rules: [
      {
        condition: "Possessives agree with the thing owned, not the owner",
        result: "Match the possessive to the gender and number of the NOUN, not the person",
        examples: [
          { native: "mi hermano / mi hermana", translation: "my brother / my sister (both mi — same possessive regardless of noun gender)" },
          { native: "mis hermanos", translation: "my brothers / siblings (plural)" },
        ],
      },
      {
        condition: "Nuestro / vuestro for mixed or masculine plural",
        result: "Use -o for masculine, -a for feminine",
        examples: [
          { native: "nuestro padre / nuestra madre", translation: "our father / our mother" },
          { native: "nuestros hijos / nuestras hijas", translation: "our sons / our daughters" },
        ],
      },
      {
        condition: "Su is ambiguous",
        result: "Su can mean his/her/your/their — context usually clarifies, but you can use 'de él/de ella/de usted' to be explicit",
        examples: [
          { native: "su casa → la casa de él", translation: "his house" },
          { native: "la casa de ella", translation: "her house" },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "Unlike English, Spanish possessives do NOT use an apostrophe. \"María's book\" = el libro de María — always use de + owner for possession with a name.",
      },
      {
        type: "tip",
        content: "Mi and tu have no accent mark. Mí (accent) = the stressed pronoun \"me\" (for me). Tú (accent) = the subject pronoun \"you\". Tu (no accent) = your (possessive). Context and accent make the difference.",
      },
    ],
    fixedPhrases: [
      { native: "mi madre / mi padre", translation: "my mother / my father", note: "No article needed with possessives." },
      { native: "Nuestros hijos viven en Madrid.", translation: "Our children live in Madrid.", note: "nuestro agrees with hijos (masc. pl.)." },
      { native: "¿Cómo se llama tu hermano?", translation: "What is your brother's name?", note: "Very common conversation opener." },
    ],
    examples: [
      { native: "mi madre y mi padre", translation: "my mother and my father" },
      { native: "¿Cómo se llama tu hermano?", translation: "What is your brother's name?" },
      { native: "Nuestros hijos viven en Madrid.", translation: "Our children live in Madrid." },
      { native: "Su casa es muy grande.", translation: "His/her/their house is very big." },
      { native: "¿Dónde están tus llaves?", translation: "Where are your keys?" },
    ],
    inlineVocab: [
      { word: "madre", translation: "mother" },
      { word: "padre", translation: "father" },
      { word: "hermano", translation: "brother" },
      { word: "hermano", translation: "brother" },
      { word: "hijos", translation: "children / sons" },
      { word: "llaves", translation: "keys" },
      { word: "casa", translation: "house" },
    ],
  },
  {
    id: "es-g-a1-16",
    level: "A1",
    title: "Querer — Stem-Changing Verb (e → ie)",
    explanation: `**Querer** (to want / to love) is one of the most used verbs in Spanish. It is stem-changing: the stem vowel e changes to ie in all forms except nosotros and vosotros.

QUERER — to want / to love

  yo **quiero**         nosotros queremos   ← no stem change
  tú **quieres**        vosotros queréis    ← no stem change
  él/ella **quiere**    ellos/ellas **quieren**

The nosotros/vosotros forms never stem-change — this is true of all stem-changing verbs.

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
        result: "e changes to ie in yo/tú/él/ellos — but NOT in nosotros/vosotros",
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
      { type: "forward-ref", content: "Querer is the most common e→ie stem-changing verb. The full stem-change lesson (all three patterns) is at es-g-a1-31.", refId: "es-g-a1-31" },
    ],
    fixedPhrases: [
      { native: "Quiero un café, por favor.", translation: "I'd like a coffee, please.", note: "Natural and polite for ordering." },
      { native: "¿Qué quieres comer?", translation: "What do you want to eat?", note: "Very common at mealtimes." },
      { native: "No quiero.", translation: "I don't want to.", note: "Short, clear, very common." },
      { native: "¿Quieres…?", translation: "Do you want…? / Would you like…?", note: "Offering something to someone." },
    ],
  },
  {
    id: "es-g-a1-10",
    level: "A1",
    title: "Ir — To Go",
    explanation: `**Ir** is highly irregular in the present tense — the forms look nothing like the infinitive.

IR — to go

  yo **voy**        nosotros **vamos**
  tú **vas**        vosotros **vais**
  él/ella **va**    ellos/ellas **van**

DESTINATIONS — always use ir + a
  Voy a la tienda.    (I'm going to the shop.)    a + la → stays a la
  Voy al banco.       (I'm going to the bank.)    a + el → al (contraction)

ASKING WHERE SOMEONE IS GOING
  ¿Adónde vas?           (Where are you going? — informal)
  ¿Adónde va usted?      (Where are you going? — formal)`,
    examples: [
      { native: "Voy al trabajo.", translation: "I go to work. (al = a + el)" },
      { native: "¿Adónde vas?", translation: "Where are you going?" },
      { native: "Él va a la farmacia.", translation: "He goes to the pharmacy." },
      { native: "Vamos al parque.", translation: "We go to the park." },
      { native: "Ellos van a la playa.", translation: "They go to the beach." },
    ],
    inlineVocab: [
      { word: "trabajo", translation: "work / job" },
      { word: "tienda", translation: "shop / store" },
      { word: "banco", translation: "bank" },
      { word: "farmacia", translation: "pharmacy" },
      { word: "parque", translation: "park" },
      { word: "playa", translation: "beach" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [{ label: "ir", forms: ["voy", "vas", "va", "vamos", "vais", "van"] }],
    },
    rules: [
      {
        condition: "Going somewhere",
        result: "ir + a + destination",
        examples: [
          { native: "Voy a la tienda.", translation: "I'm going to the shop." },
          { native: "Ella va al trabajo.", translation: "She's going to work." },
          { native: "¿Adónde vas?", translation: "Where are you going?" },
        ],
      },
      {
        condition: "Contraction a + el = al",
        result: "Never say 'a el' — always contract to al",
        examples: [
          { native: "Voy al banco.", translation: "I'm going to the bank." },
          { native: "Vamos al parque.", translation: "We're going to the park." },
        ],
      },
      {
        condition: "Going to a feminine place",
        result: "a + la (no contraction needed)",
        examples: [
          { native: "Voy a la farmacia.", translation: "I'm going to the pharmacy." },
          { native: "Va a la playa.", translation: "She's going to the beach." },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Ir is completely irregular — its forms look nothing like the infinitive. Memorise voy/vas/va/vamos/vais/van as a set." },
      { type: "culture", content: "¡Vamos! (Let's go!) is one of the most energetic and common Spanish expressions. Used for encouragement in sports, as an exclamation, and literally to suggest going somewhere." },
      { type: "forward-ref", content: "Ir a + infinitive forms the near future tense — one of the most common future constructions in Spanish. See es-g-a1-12.", refId: "es-g-a1-12" },
    ],
    fixedPhrases: [
      { native: "Voy al trabajo.", translation: "I'm going to work.", note: "al = a + el — most common use." },
      { native: "¿Adónde vas?", translation: "Where are you going?", note: "adónde for destination (motion); dónde for location (static)." },
      { native: "¡Vamos!", translation: "Let's go! / Come on!", note: "Extremely common — used for encouragement and literally." },
      { native: "Va a llover.", translation: "It's going to rain.", note: "Preview of ir a + infinitive near future." },
    ],
  },
]
