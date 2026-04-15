import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
  {
    id: "es-g-a1-13",
    level: "A1",
    exerciseType: "dictation" as const,
    title: "Spanish Pronunciation — Key Rules",
    explanation: `Spanish is one of the most phonetic languages in the world: you read what you write and write what you say. There are very few silent letters. A few rules cover almost every situation.

THE ALPHABET & SPECIAL CHARACTERS
The Spanish alphabet has 27 letters. Three are unique to Spanish:
  ñ (eñe)   — a different sound from n: mañana, señor, niño
  ll         — historically a separate letter; now sounds like y in most regions
  rr         — a strong trilled r: perro (dog) vs pero (but)

KEY PRONUNCIATION RULES

The letter H is always silent: hola, hablar, hotel — the h is never pronounced.

The letters B and V sound identical in Spanish — both like a soft English b: bien, voy.

The letter J sounds like a strong English h: Jorge, jardín, viaje.

G before e or i sounds like the Spanish j (strong h): general, gigante.
G before a, o, u sounds like English g: gato, gordo, agua.

The letter C:
  Before a, o, u  → hard k sound: cama, cosa, Cuba
  Before e, i     → in Spain: th sound (cena, ciudad)
                  → in Latin America: s sound (same words)

The letter Z:
  In Spain        → th sound: zapato, zona
  In Latin America → s sound: same words

STRESS RULES
Words ending in a vowel, n, or s: stress falls on the second-to-last syllable (casa, hablan, comes).
Words ending in any other consonant: stress falls on the last syllable (hablar, ciudad).
Written accents (á, é, í, ó, ú) always override these rules: café, médico, está.`,
    examples: [
      { native: "hola, hotel, hablar", translation: "H is always silent — never pronounced" },
      { native: "pero vs perro", translation: "Single r vs double rr — a key distinction", speakText: "pero, perro" },
      { native: "general, Jorge", translation: "G/J before e/i — strong h sound" },
      { native: "cena", translation: "C before e/i: 'thena' in Spain, 'sena' in Latin America" },
      { native: "médico, está, café", translation: "Written accent overrides the default stress rule" },
    ],
    notes: [
      {
        type: "tip",
        content: "H is always completely silent in Spanish. Hola, hablar, hotel, hacer — the h makes no sound. This is consistent and has no exceptions.",
      },
      {
        type: "tip",
        content: "B and V sound identical in Spanish — both are a soft bilabial sound. Don't try to distinguish them; native speakers don't.",
      },
      {
        type: "tip",
        content: "The letter J (and G before e/i) makes a sound not found in English — a strong throaty h, like clearing your throat. Jorge, jardín, general.",
      },
      {
        type: "warning",
        content: "The letter C has two sounds depending on what follows. Before a, o, u = hard k (casa, coche, Cuba). Before e, i = in Latin America it's s (cena = \"sena\"), in Spain it's th (cena = \"thena\"). Latin American Spanish is standard throughout this course.",
      },
      {
        type: "culture",
        content: "The regional difference for C and Z (s-sound in LatAm vs th-sound in Spain) is one of the most noticeable differences between Spanish varieties. Neither is wrong — they're like British and American English.",
      },
      {
        type: "tip",
        content: "Written accents (á, é, í, ó, ú) always override the default stress rules. When you see an accent, stress falls on THAT syllable.",
      },
    ],
    fixedPhrases: [
      { native: "hola / hotel / hablar", translation: "hello / hotel / to speak", note: "H always silent." },
      { native: "pero / perro", translation: "but / dog", note: "Single r = tap; double rr = trill. Critical distinction." },
      { native: "cena", translation: "dinner", note: "c before e: 'sena' in LatAm, 'thena' in Spain." },
      { native: "médico / café / está", translation: "doctor / coffee / is", note: "These accents override stress rules." },
    ],
    inlineVocab: [
      { word: "mañana", translation: "tomorrow / morning" },
      { word: "señor", translation: "Mr. / sir" },
      { word: "niño", translation: "child / boy" },
      { word: "perro", translation: "dog" },
      { word: "pero", translation: "but" },
      { word: "jardín", translation: "garden" },
      { word: "viaje", translation: "trip / journey" },
      { word: "gato", translation: "cat" },
      { word: "zapato", translation: "shoe" },
      { word: "cama", translation: "bed" },
      { word: "médico", translation: "doctor" },
    ]
  },
  {
    id: "es-g-a1-1",
    level: "A1",
    title: "Subject Pronouns",
    explanation: `In Spanish, subject pronouns identify who performs the action. Unlike English, they are usually dropped — verb endings already show the subject. Use them only for emphasis or contrast.

tú = informal (friends, family, peers). usted = formal (strangers, elders, professional contexts). In Latin America, ustedes replaces vosotros for all plural "you".`,
    paradigmTable: {
      pronouns: ["singular", "plural"],
      verbs: [
        { label: "1st person", forms: ["yo", "nosotros / nosotras"] },
        { label: "2nd person (informal)", forms: ["tú", "vosotros (Spain)"] },
        { label: "2nd person (formal)", forms: ["usted", "ustedes"] },
        { label: "3rd person", forms: ["él / ella", "ellos / ellas"] },
      ],
    },
    rules: [
      {
        condition: "Whether to include the subject pronoun",
        result: "Omit it — unless you need emphasis or contrast",
        examples: [
          { native: "Hablo español.", translation: "I speak Spanish. (pronoun dropped — natural)" },
          { native: "Yo hablo español, tú no.", translation: "I speak Spanish, you don't. (contrast → keep it)" },
        ],
      },
      {
        condition: "Choosing between tú and usted",
        result: "tú = informal. usted = formal. When in doubt, use usted.",
        examples: [
          { native: "¿Cómo te llamas? / ¿Cómo se llama usted?", translation: "What's your name? (informal / formal)" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Usted and ustedes conjugate like él/ella and ellos/ellas. Drop them and the verb form alone communicates the meaning.",
      },
      {
        type: "culture",
        content: "In Latin America, vosotros doesn't exist — ustedes covers all groups. This course uses ustedes as the standard plural throughout.",
      },
    ],
    examples: [
      { native: "Yo hablo español.", translation: "I speak Spanish." },
      { native: "Tú eres estudiante.", translation: "You are a student. (informal)" },
      { native: "Él trabaja aquí.", translation: "He works here." },
      { native: "Nosotros vivimos en Madrid.", translation: "We live in Madrid." },
      { native: "Ellos son amigos.", translation: "They are friends." },
    ],
    inlineVocab: [
      { word: "español", translation: "Spanish" },
      { word: "estudiante", translation: "student" },
      { word: "amigos", translation: "friends" },
    ]
  },
  {
    id: "es-g-a1-2",
    level: "A1",
    title: "Ser & Estar — Two Ways to Say 'To Be'",
    explanation: `Spanish has two verbs meaning 'to be'. Choosing correctly is the central challenge of A1 Spanish. The conjugation table shows both side by side. The usage table shows when each one applies.

Quick rule: can the situation change? → ESTAR. Is it a defining fact? → SER.`,
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "ser", forms: ["soy", "eres", "es", "somos", "sois", "son"] },
        { label: "estar", forms: ["estoy", "estás", "está", "estamos", "estáis", "están"] },
      ],
    },
    paradigmTable: {
      pronouns: ["SER — use for", "ESTAR — use for"],
      verbs: [
        { label: "identity", forms: ["identity / profession / nationality", "location"] },
        { label: "traits", forms: ["permanent traits / appearance", "temporary feelings / states"] },
        { label: "origin/time", forms: ["origin / time / dates", "changeable conditions"] },
      ],
    },
    rules: [
      {
        condition: "Identity, profession, nationality, origin",
        result: "Use ser",
        examples: [
          { native: "Soy médico. / Es española. / Somos de México.", translation: "I'm a doctor. / She's Spanish. / We're from Mexico." },
        ],
      },
      {
        condition: "Location, temporary state, or changeable condition",
        result: "Use estar",
        examples: [
          { native: "Estoy en casa. / El café está caliente. / Estamos cansados.", translation: "I'm at home. / The coffee is hot. / We're tired." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "Location always uses estar — never ser. \"El banco está en la calle Mayor\" ✓ / \"El banco es en...\" ✗",
      },
      {
        type: "forward-ref",
        content: "Some adjectives change meaning entirely depending on the verb — aburrido means boring with ser but bored with estar. Full pairs in lesson es-g-a1-28.",
        refId: "es-g-a1-28",
      },
    ],
    fixedPhrases: [
      { native: "Soy de…", translation: "I'm from…", note: "ser for origin." },
      { native: "Estoy bien, gracias.", translation: "I'm well, thank you.", note: "estar for current state." },
      { native: "¿Cómo estás? / ¿Cómo está usted?", translation: "How are you?", note: "Always estar for feelings." },
      { native: "¿De dónde eres?", translation: "Where are you from?", note: "ser for origin." },
    ],
    examples: [
      { native: "Soy médico.", translation: "I am a doctor. (profession → ser)" },
      { native: "Soy de México.", translation: "I am from Mexico. (origin → ser)" },
      { native: "Estoy cansado.", translation: "I am tired. (temporary state → estar)" },
      { native: "El café está caliente.", translation: "The coffee is hot. (condition → estar)" },
      { native: "Madrid está en España.", translation: "Madrid is in Spain. (location → estar)" },
    ],
    inlineVocab: [
      { word: "médico", translation: "doctor" },
      { word: "cansado", translation: "tired" },
      { word: "caliente", translation: "hot" },
      { word: "profesión", translation: "profession" },
      { word: "nacionalidad", translation: "nationality" },
    ]
  },
  {
    id: "es-g-a1-4",
    level: "A1",
    title: "Articles & Noun Gender",
    explanation: `Every Spanish noun has a grammatical gender — masculine or feminine. Articles must agree with the noun in gender and number. As a general guide, nouns ending in -o are masculine and nouns ending in -a are feminine, but learn every noun with its article from the start.

Two contractions are mandatory: a + el = al, de + el = del. Spanish never writes "a el" or "de el".`,
    paradigmTable: {
      pronouns: ["masculine singular", "feminine singular", "masculine plural", "feminine plural"],
      verbs: [
        { label: "definite (the)", forms: ["el", "la", "los", "las"] },
        { label: "indefinite (a / some)", forms: ["un", "una", "unos", "unas"] },
      ],
    },
    rules: [
      {
        condition: "Matching the article to the noun",
        result: "Use the form that agrees in gender and number",
        examples: [
          { native: "el libro / la casa / los libros / las casas", translation: "the book / the house / the books / the houses" },
        ],
      },
      {
        condition: "Contractions with a and de",
        result: "a + el = al · de + el = del (mandatory — never write 'a el' or 'de el')",
        examples: [
          { native: "Voy al banco. / El libro del profesor.", translation: "I'm going to the bank. / The teacher's book." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Learn every new noun with its article. Not just \"mesa\" — \"la mesa\". Not just \"libro\" — \"el libro\". Build this habit now and gender becomes automatic.",
      },
      {
        type: "warning",
        content: "Some -a nouns are masculine: el día, el mapa, el problema, el tema. And nouns ending in -ción, -sión, -dad are always feminine: la canción, la ciudad.",
      },
    ],
    fixedPhrases: [
      { native: "Voy al trabajo.", translation: "I'm going to work.", note: "al = a + el." },
      { native: "El libro del profesor.", translation: "The teacher's book.", note: "del = de + el." },
    ],
    examples: [
      { native: "el libro / los libros", translation: "the book / the books (masc.)" },
      { native: "la casa / las casas", translation: "the house / the houses (fem.)" },
      { native: "un estudiante", translation: "a student (masc.)" },
      { native: "una profesora", translation: "a teacher (fem.)" },
      { native: "Voy al banco.", translation: "I'm going to the bank. (a + el = al)" },
    ],
    inlineVocab: [
      { word: "libro", translation: "book" },
      { word: "teléfono", translation: "telephone" },
      { word: "banco", translation: "bank" },
      { word: "casa", translation: "house" },
      { word: "mesa", translation: "table" },
      { word: "escuela", translation: "school" },
      { word: "día", translation: "day" },
      { word: "mano", translation: "hand" },
      { word: "mapa", translation: "map" },
      { word: "profesor", translation: "teacher" },
    ]
  },
  {
    id: "es-g-a1-5",
    level: "A1",
    title: "Negation & Question Formation — Quick Reference",
    explanation: `NEGATION — place no directly before the verb, nothing else changes.

YES/NO QUESTIONS — raise intonation at the end, or invert subject and verb. Always open with ¿.

QUESTION WORDS (all carry a written accent):
¿qué? what · ¿dónde? where · ¿quién? who · ¿cuándo? when · ¿cómo? how · ¿cuánto/a? how much · ¿cuántos/as? how many · ¿por qué? why · ¿cuál? which`,
    rules: [
      {
        condition: "Making a sentence negative",
        result: "Place no directly before the verb",
        examples: [
          { native: "Hablo inglés. → No hablo inglés.", translation: "I speak English. → I don't speak English." },
        ],
      },
      {
        condition: "Forming a yes/no question",
        result: "Raise intonation, or invert subject and verb — always open with ¿",
        examples: [
          { native: "¿Hablas español? / ¿Es María médica?", translation: "Do you speak Spanish? / Is María a doctor?" },
        ],
      },
      {
        condition: "Forming an information question",
        result: "Question word + (optional subject) + verb",
        examples: [
          { native: "¿Dónde vives? / ¿Cuántos años tienes?", translation: "Where do you live? / How old are you?" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Opening ¿ is unique to Spanish — it signals a question before you reach the verb, which helps when reading fast.",
      },
      {
        type: "warning",
        content: "Question words always carry a written accent (¿qué?, ¿dónde?, ¿cómo?) to distinguish them from their non-question uses (que = that, donde = where, como = like/how).",
      },
      {
        type: "forward-ref",
        content: "Full negation lesson (double negation, nunca/nada/nadie) at es-g-a1-18. Full question formation lesson at es-g-a1-19.",
        refId: "es-g-a1-18",
      },
    ],
    fixedPhrases: [
      { native: "No entiendo.", translation: "I don't understand.", note: "Say it clearly — people will slow down." },
      { native: "¿Cómo se dice…?", translation: "How do you say…?" },
      { native: "¿Qué significa…?", translation: "What does … mean?" },
      { native: "No sé.", translation: "I don't know." },
    ],
    examples: [
      { native: "No hablo inglés.", translation: "I don't speak English." },
      { native: "¿Hablas español?", translation: "Do you speak Spanish?" },
      { native: "¿Dónde vives?", translation: "Where do you live?" },
      { native: "¿Qué es esto?", translation: "What is this?" },
      { native: "¿Cuántos años tienes?", translation: "How old are you?" },
    ],
    inlineVocab: [
      { word: "inglés", translation: "English" },
      { word: "vives", translation: "you live" },
      { word: "llegas", translation: "you arrive" },
      { word: "cuesta", translation: "it costs" },
      { word: "años", translation: "years / age" },
    ]
  },
  {
    id: "es-g-a1-3",
    level: "A1",
    title: "Present Tense: Regular -ar Verbs",
    explanation: `Regular -ar verbs are the most common group in Spanish. Remove the -ar ending from the infinitive and add the ending for the person you want. Hundreds of verbs follow this exact pattern.`,
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "hablar", forms: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"] },
        { label: "trabajar", forms: ["trabajo", "trabajas", "trabaja", "trabajamos", "trabajáis", "trabajan"] },
      ],
    },
    rules: [
      {
        condition: "Conjugating any regular -ar verb",
        result: "Remove -ar, add: -o / -as / -a / -amos / -áis / -an",
        heuristic: "hablar → habl- + ending",
        examples: [
          { native: "estudiar → estudio, estudias, estudia, estudiamos, estudiáis, estudian", translation: "to study → I study, you study, he studies…" },
        ],
      },
      {
        condition: "The yo form of any regular verb",
        result: "Always ends in -o, regardless of verb type",
        examples: [
          { native: "hablo / como / vivo", translation: "I speak / I eat / I live (all -o)" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "There are hundreds of -ar verbs in Spanish — the most productive class. Know this pattern once and you can use any of them.",
      },
      {
        type: "forward-ref",
        content: "-er and -ir verbs use different endings — introduced in es-g-a1-7 and es-g-a1-8.",
        refId: "es-g-a1-7",
      },
    ],
    examples: [
      { native: "Yo hablo.", translation: "I speak." },
      { native: "Tú trabajas.", translation: "You work." },
      { native: "Ella estudia.", translation: "She studies." },
      { native: "Nosotros cantamos.", translation: "We sing." },
      { native: "Ellos escuchan.", translation: "They listen." },
    ],
    inlineVocab: [
      { word: "hablar", translation: "to speak" },
      { word: "trabajar", translation: "to work" },
      { word: "llamar", translation: "to call" },
      { word: "escuchar", translation: "to listen" },
      { word: "cantar", translation: "to sing" },
      { word: "estudiar", translation: "to study" },
      { word: "comprar", translation: "to buy" },
      { word: "viajar", translation: "to travel" },
      { word: "bailar", translation: "to dance" },
      { word: "caminar", translation: "to walk" },
    ]
  },
  {
    id: "es-g-a1-9",
    level: "A1",
    title: "Tener — To Have",
    explanation: `**Tener** is an irregular -er verb. Its yo form is **tengo** (not *teno).

TENER — to have

  yo **tengo**          nosotros tenemos
  tú **tienes**         vosotros tenéis
  él/ella **tiene**     ellos/ellas **tienen**

USES OF TENER

  1. Possession        Tengo un coche.         (I have a car.)
  2. Age               Tengo veinte años.      (I am twenty years old.)
  3. Physical / emotional states — use tener + noun (not ser/estar + adjective):
     tener hambre    to be hungry    (lit. to have hunger)
     tener sed       to be thirsty
     tener sueño     to be sleepy
     tener miedo     to be afraid
     tener frío      to be cold
     tener calor     to be hot`,
    examples: [
      { native: "Tengo un perro.", translation: "I have a dog." },
      { native: "¿Cuántos años tienes?", translation: "How old are you?" },
      { native: "Tengo veintiún años.", translation: "I am twenty-one years old." },
      { native: "Tenemos hambre.", translation: "We are hungry." },
      { native: "Ella tiene frío.", translation: "She is cold." },
    ],
    inlineVocab: [
      { word: "coche", translation: "car" },
      { word: "perro", translation: "dog" },
      { word: "hambre", translation: "hunger" },
      { word: "sed", translation: "thirst" },
      { word: "sueño", translation: "sleepiness / dream" },
      { word: "miedo", translation: "fear" },
      { word: "frío", translation: "cold" },
      { word: "calor", translation: "heat / warmth" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [{ label: "tener", forms: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"] }],
    },
    rules: [
      {
        condition: "Possessing something",
        result: "tener + noun (with article)",
        examples: [
          { native: "Tengo un coche.", translation: "I have a car." },
          { native: "¿Tienes hermanos?", translation: "Do you have siblings?" },
        ],
      },
      {
        condition: "Stating age",
        result: "tener + number + años (not ser/estar)",
        examples: [
          { native: "Tengo veinticinco años.", translation: "I am twenty-five years old." },
          { native: "¿Cuántos años tienes?", translation: "How old are you?" },
        ],
      },
      {
        condition: "Physical/emotional states with tener",
        result: "tener + noun (not ser/estar + adjective)",
        examples: [
          { native: "Tengo hambre.", translation: "I'm hungry. (not Estoy hambriento.)" },
          { native: "Tengo frío.", translation: "I'm cold." },
          { native: "Tengo miedo.", translation: "I'm afraid." },
        ],
      },
      {
        condition: "Obligation with tener que",
        result: "tener que + infinitive = have to",
        examples: [
          { native: "Tengo que trabajar.", translation: "I have to work." },
          { native: "Tienes que estudiar.", translation: "You have to study." },
        ],
      },
    ],
    notes: [
      { type: "warning", content: "Age uses tener, not ser or estar. Never say \"Soy veinte años\" or \"Estoy veinte años\" — always \"Tengo veinte años.\"" },
      { type: "tip", content: "Many physical sensations use tener + noun in Spanish where English uses \"to be\": I'm hungry = Tengo hambre (I have hunger). I'm cold = Tengo frío (I have cold)." },
      { type: "forward-ref", content: "Tener is also a stem-changing verb (e→ie: tengo/tienes/tiene). Full stem-change lesson at es-g-a1-31.", refId: "es-g-a1-31" },
    ],
    fixedPhrases: [
      { native: "Tengo hambre.", translation: "I'm hungry.", note: "tener + noun for physical state." },
      { native: "¿Cuántos años tienes?", translation: "How old are you?", note: "Most natural way to ask age." },
      { native: "Tengo que irme.", translation: "I have to go.", note: "Tener que + infinitive for obligation." },
      { native: "No tengo ni idea.", translation: "I have no idea.", note: "ni idea is a fixed expression — 'not even an idea'." },
    ],
  },
  {
    id: "es-g-a1-11",
    level: "A1",
    title: "Adjective Agreement",
    explanation: `In Spanish, adjectives must agree with the noun they describe in both gender (masc./fem.) and number (singular/plural).

-o / -a ADJECTIVES (most common pattern)
                Masculine    Feminine
  Singular:      alto         alta
  Plural:        altos        altas

ADJECTIVES ENDING IN -e OR A CONSONANT (no gender change)
                Masculine    Feminine
  Singular:      grande       grande
  Plural:        grandes      grandes

POSITION — adjectives usually come AFTER the noun:
  un libro rojo      (a red book)
  una casa grande    (a big house)

A few common adjectives go BEFORE: bueno/a, malo/a, gran (before noun = great).`,
    paradigmTable: {
      pronouns: ["masculine singular", "feminine singular", "masculine plural", "feminine plural"],
      verbs: [
        { label: "-o/-a adjectives", forms: ["alto", "alta", "altos", "altas"] },
        { label: "-e/-consonant (invariable for gender)", forms: ["grande", "grande", "grandes", "grandes"] },
        { label: "nationality (-és/-esa)", forms: ["inglés", "inglesa", "ingleses", "inglesas"] },
        { label: "colour (-o/-a)", forms: ["rojo", "roja", "rojos", "rojas"] },
      ],
    },
    rules: [
      {
        condition: "Adjective describing a masculine noun",
        result: "Use the -o form (if adjective has one)",
        examples: [
          { native: "un chico alto", translation: "a tall boy" },
          { native: "un coche rojo", translation: "a red car" },
          { native: "el libro nuevo", translation: "the new book" },
        ],
      },
      {
        condition: "Adjective describing a feminine noun",
        result: "Use the -a form",
        examples: [
          { native: "una chica alta", translation: "a tall girl" },
          { native: "una manzana roja", translation: "a red apple" },
          { native: "la casa nueva", translation: "the new house" },
        ],
      },
      {
        condition: "Adjective ends in -e or a consonant",
        result: "Same form for masculine and feminine — only add -s/-es for plural",
        examples: [
          { native: "un coche grande", translation: "a big car" },
          { native: "una casa grande", translation: "a big house" },
          { native: "hombres inteligentes", translation: "intelligent men" },
        ],
      },
      {
        condition: "Plural",
        result: "Add -s after vowel, -es after consonant",
        examples: [
          { native: "altos", translation: "tall (masc. pl.)" },
          { native: "grandes", translation: "big (pl.)" },
          { native: "ingleses", translation: "English (masc. pl.)" },
        ],
      },
      {
        condition: "Position of adjective",
        result: "Most adjectives go AFTER the noun. A few common ones (bueno, malo, gran, nuevo, viejo) can go before.",
        examples: [
          { native: "un libro interesante", translation: "an interesting book" },
          { native: "un buen libro", translation: "a good book" },
          { native: "una nueva idea", translation: "a new idea" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The adjective always follows the noun's gender, not the gender of the person talking about it. A man says \"Estoy cansada\" if he's a woman — but \"Estoy cansado\" if he's a man. The adjective matches the subject.",
      },
      {
        type: "warning",
        content: "Gran before a noun means \"great\" — un gran hombre (a great man). Grande after a noun means \"big\" — un hombre grande (a big man). Same word, different position, different meaning.",
      },
    ],
    examples: [
      { native: "un chico alto / una chica alta", translation: "a tall boy / a tall girl" },
      { native: "unos chicos altos / unas chicas altas", translation: "tall boys / tall girls" },
      { native: "el libro rojo / la manzana roja", translation: "the red book / the red apple" },
      { native: "un coche grande / una casa grande", translation: "a big car / a big house (no gender change)" },
    ],
    inlineVocab: [
      { word: "alto", translation: "tall" },
      { word: "chico", translation: "boy" },
      { word: "chica", translation: "girl" },
      { word: "libro", translation: "book" },
      { word: "rojo", translation: "red" },
      { word: "manzana", translation: "apple" },
      { word: "coche", translation: "car" },
      { word: "grande", translation: "big / large" },
      { word: "bueno", translation: "good" },
      { word: "malo", translation: "bad" },
    ],
  },
]
