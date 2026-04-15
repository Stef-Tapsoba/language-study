import { GrammarLesson } from "../../../../types"

export const foundationsLessons: GrammarLesson[] = [
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
]
