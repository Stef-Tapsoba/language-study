import { GrammarLesson } from "../../../../types"

export const foundationsLessons: GrammarLesson[] = [
  {
    id: "es-g-a1-1",
    level: "A1",
    title: "Subject Pronouns",
    explanation: `Spanish subject pronouns identify who performs the action. Unlike English, they are often omitted because verb endings already show the subject — but they are used for emphasis or clarity.

SINGULAR                          PLURAL
yo       — I                      nosotros / nosotras  — we
tú       — you (informal)         vosotros / vosotras  — you all (Spain)
usted    — you (formal)           ustedes              — you all (formal / Latin America)
él       — he                     ellos   — they (masc. or mixed group)
ella     — she                    ellas   — they (fem.)

tú vs. usted: Use tú with friends, family, and peers. Use usted with strangers, elders, or in formal situations. Usted conjugates like él/ella.`,
    paradigmTable: {
      pronouns: ["singular", "plural"],
      verbs: [
        { label: "1st person", forms: ["yo — I", "nosotros / nosotras — we"] },
        { label: "2nd person informal", forms: ["tú — you", "vosotros / vosotras — you all (Spain)"] },
        { label: "2nd person formal", forms: ["usted — you", "ustedes — you all (LatAm / formal)"] },
        { label: "3rd person masc.", forms: ["él — he", "ellos — they (masc./mixed)"] },
        { label: "3rd person fem.", forms: ["ella — she", "ellas — they (fem.)"] },
      ],
    },
    rules: [
      {
        condition: "Deciding whether to include the subject pronoun",
        result: "Omit it unless you need emphasis or contrast",
        examples: [
          { native: "Hablo español.", translation: "I speak Spanish. (pronoun dropped)" },
          { native: "Yo hablo español, tú no.", translation: "I speak Spanish, you don't. (contrast → pronoun kept)" },
        ],
      },
      {
        condition: "Choosing between tú and usted",
        result: "Tú = informal (friends, family, peers). Usted = formal (strangers, elders, professional situations)",
        examples: [
          { native: "¿Cómo te llamas?", translation: "What's your name? (tú — informal)" },
          { native: "¿Cómo se llama usted?", translation: "What is your name? (usted — formal)" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Subject pronouns are usually omitted in Spanish because verb endings already identify the person. Say \"Trabajo\" not \"Yo trabajo\" — dropping the pronoun sounds more natural.",
      },
      {
        type: "tip",
        content: "Usted / ustedes conjugate like él/ella/ellos respectively. This is why you can drop usted and still be understood from the verb form.",
      },
      {
        type: "culture",
        content: "In Latin America, vosotros is not used — ustedes serves for both formal and informal \"you all\". This course uses ustedes as the standard plural throughout.",
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
    explanation: `Spanish has two verbs for 'to be'. Choosing the right one is the key challenge of A1 Spanish.

**SER** — identity, permanent or defining traits
  yo **soy**         nosotros **somos**
  tú **eres**        vosotros **sois**
  él/ella **es**     ellos/ellas **son**

**ESTAR** — location, temporary states, and conditions
  yo **estoy**         nosotros **estamos**
  tú **estás**         vosotros **estáis**
  él/ella **está**     ellos/ellas **están**

WHEN TO USE EACH

  SER                                   ESTAR
  identity / profession                 location (where someone/thing is)
  origin / nationality                  temporary emotion or feeling
  permanent traits / appearance         condition that can change
  time and dates                        ongoing action (estar + gerund)

Quick check: Can the situation change? → ESTAR. Is it a defining fact? → SER.`,
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
        { label: "identity", forms: ["identity / profession / nationality", "location (where someone/thing is)"] },
        { label: "traits", forms: ["permanent traits and appearance", "temporary emotions and feelings"] },
        { label: "origin/time", forms: ["origin / time / dates", "conditions that can change"] },
        { label: "description", forms: ["material (Es de madera.)", "ongoing action (estar + gerund)"] },
      ],
    },
    rules: [
      {
        condition: "Describing who someone is (profession, nationality, origin)",
        result: "Use ser",
        examples: [
          { native: "Soy médico.", translation: "I am a doctor." },
          { native: "Es española.", translation: "She is Spanish." },
          { native: "Somos de México.", translation: "We are from Mexico." },
        ],
      },
      {
        condition: "Saying where something is located or how someone feels right now",
        result: "Use estar",
        examples: [
          { native: "Estoy en casa.", translation: "I am at home." },
          { native: "El café está caliente.", translation: "The coffee is hot." },
          { native: "Estamos cansados.", translation: "We are tired." },
        ],
      },
      {
        condition: "Describing a permanent trait or quality",
        result: "Use ser",
        examples: [
          { native: "Es inteligente.", translation: "She is intelligent." },
          { native: "La casa es grande.", translation: "The house is big." },
          { native: "El agua es fría.", translation: "Water is cold." },
        ],
      },
      {
        condition: "Describing a changeable condition or state",
        result: "Use estar",
        examples: [
          { native: "Estoy enfermo.", translation: "I am ill." },
          { native: "La puerta está abierta.", translation: "The door is open." },
          { native: "Estamos listos.", translation: "We are ready." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Quick test — can the situation change? → ESTAR. Is it a defining fact about the person/thing? → SER.",
      },
      {
        type: "warning",
        content: "The most common early mistake is using ser for location. Location ALWAYS uses estar: \"El banco está en la calle Mayor\" — never \"El banco es en...\".",
      },
      {
        type: "forward-ref",
        content: "Some adjectives completely change meaning depending on whether you use ser or estar — for example, \"aburrido\" means boring with ser but bored with estar. Full list in lesson es-g-a1-28.",
        refId: "es-g-a1-28",
      },
    ],
    fixedPhrases: [
      { native: "Soy de…", translation: "I'm from…", note: "The most natural way to state your origin." },
      { native: "Estoy bien, gracias.", translation: "I'm well, thank you.", note: "estar for current state — the standard response to ¿Cómo estás?" },
      { native: "¿Cómo estás? / ¿Cómo está usted?", translation: "How are you?", note: "Always estar for how someone feels." },
      { native: "¿De dónde eres?", translation: "Where are you from?", note: "ser for origin — standard first question." },
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
    explanation: `Regular -ar verbs are the most common group in Spanish. Remove -ar from the infinitive and add the ending that matches the subject.

HABLAR — to speak (stem: habl-)

  yo hablo          nosotros hablamos
  tú hablas         vosotros habláis
  él/ella habla     ellos/ellas hablan

The same endings apply to hundreds of verbs: trabajar, llamar, escuchar, cantar, estudiar, comprar, viajar, visitar, usar, bailar, caminar…

Note: the yo form always ends in -o. This is true for all regular -ar, -er, and -ir verbs.`,
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "hablar", forms: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"] },
        { label: "trabajar", forms: ["trabajo", "trabajas", "trabaja", "trabajamos", "trabajáis", "trabajan"] },
      ],
    },
    rules: [
      {
        condition: "Conjugating any regular -ar verb in the present tense",
        result: "Remove -ar from the infinitive, add: -o / -as / -a / -amos / -áis / -an",
        heuristic: "hablar → habl- + ending → hablo, hablas, habla, hablamos, habláis, hablan",
        examples: [
          { native: "hablar → hablo, hablas, habla…", translation: "to speak → I speak, you speak, he/she speaks…" },
          { native: "estudiar → estudio, estudias, estudia…", translation: "to study → I study, you study, he/she studies…" },
        ],
      },
      {
        condition: "Recognising the yo form",
        result: "The yo form always ends in -o for ALL regular verb types",
        examples: [
          { native: "hablo / como / vivo", translation: "I speak / I eat / I live (all yo, all -o)" },
        ],
      },
      {
        condition: "Identifying -ar verbs",
        result: "Check the infinitive ending — if it ends in -ar, this pattern applies",
        examples: [
          { native: "hablar, trabajar, estudiar, llamar, comprar, caminar", translation: "to speak, to work, to study, to call, to buy, to walk" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "There are hundreds of -ar verbs in Spanish — it's the most productive verb class. Once you know this pattern, you can produce forms for any new -ar verb you encounter.",
      },
      {
        type: "tip",
        content: "Nosotros keeps a stress accent only in some verb types. Vosotros always gets an accent in -ar verbs: habláis.",
      },
      {
        type: "forward-ref",
        content: "-er and -ir verbs follow a similar but different pattern — introduced in lessons es-g-a1-7 and es-g-a1-8.",
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
    explanation: `Every Spanish noun has a grammatical gender — masculine or feminine. Articles must match the noun's gender and number.

DEFINITE ARTICLES (the)
               Singular    Plural
  Masculine:    el          los
  Feminine:     la          las

INDEFINITE ARTICLES (a / some)
               Singular    Plural
  Masculine:    un          unos
  Feminine:     una         unas

GENDER RULES (general patterns)
  Nouns ending in -o are usually masculine:  libro, teléfono, banco
  Nouns ending in -a are usually feminine:   casa, mesa, escuela
  Exceptions exist: el día (day), la mano (hand), el mapa (map)

CONTRACTIONS
  a + el → al    Voy al banco.            (I'm going to the bank.)
  de + el → del  El libro del profesor.   (The teacher's book.)`,
    paradigmTable: {
      pronouns: ["masculine singular", "feminine singular", "masculine plural", "feminine plural"],
      verbs: [
        { label: "definite (the)", forms: ["el", "la", "los", "las"] },
        { label: "indefinite (a / some)", forms: ["un", "una", "unos", "unas"] },
      ],
    },
    rules: [
      {
        condition: "Choosing the right article form",
        result: "Match the article to the noun's gender (masc./fem.) and number (sing./pl.)",
        examples: [
          { native: "el libro / la casa / los libros / las casas", translation: "the book / the house / the books / the houses" },
        ],
      },
      {
        condition: "Nouns ending in -o",
        result: "Usually masculine → use el / un",
        examples: [
          { native: "el libro, el teléfono, el banco, el año", translation: "the book, the telephone, the bank, the year" },
        ],
      },
      {
        condition: "Nouns ending in -a",
        result: "Usually feminine → use la / una",
        examples: [
          { native: "la casa, la mesa, la escuela, la semana", translation: "the house, the table, the school, the week" },
        ],
      },
      {
        condition: "Using a + el",
        result: "Always contract to al — never say 'a el'",
        examples: [
          { native: "Voy al banco.", translation: "I'm going to the bank." },
          { native: "Hablo al médico.", translation: "I'm speaking to the doctor." },
        ],
      },
      {
        condition: "Using de + el",
        result: "Always contract to del — never say 'de el'",
        examples: [
          { native: "El libro del profesor.", translation: "The teacher's book." },
          { native: "Vengo del trabajo.", translation: "I'm coming from work." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "The gender rule has important exceptions. El día (day), el mapa (map), el problema, el tema, el sistema — all masculine despite ending in -a. Learn these with their articles from the start.",
      },
      {
        type: "tip",
        content: "Learn every new noun with its article. Don't just learn \"mesa\" — learn \"la mesa\". Don't just learn \"libro\" — learn \"el libro\". Building this habit now makes gender automatic.",
      },
      {
        type: "warning",
        content: "Nouns ending in -ción, -sión, -dad, -tad, -tud, -umbre are ALWAYS feminine: la canción, la ciudad, la libertad.",
      },
    ],
    fixedPhrases: [
      { native: "Voy al trabajo.", translation: "I'm going to work.", note: "al = a + el — the most common contraction." },
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
    explanation: `NEGATION
Place no directly before the verb — no other words are needed.
  No hablo inglés.    (I don't speak English.)
  No estoy bien.      (I'm not well.)

YES/NO QUESTIONS
Raise intonation at the end, or invert subject and verb:
  ¿Hablas español?    (Do you speak Spanish?)
  ¿Es María médica?   (Is María a doctor?)

INFORMATION QUESTIONS — question word + (optional subject) + verb
  ¿qué?       what        ¿Qué es esto?          (What is this?)
  ¿dónde?     where       ¿Dónde vives?          (Where do you live?)
  ¿quién?     who         ¿Quién es él?          (Who is he?)
  ¿cuándo?    when        ¿Cuándo llegas?        (When do you arrive?)
  ¿cómo?      how         ¿Cómo estás?           (How are you?)
  ¿cuánto?    how much    ¿Cuánto cuesta?        (How much does it cost?)
  ¿cuántos?   how many    ¿Cuántos años tienes?  (How old are you?)
  ¿por qué?   why         ¿Por qué estudias?     (Why do you study?)

Spanish uses an opening inverted ¿ before every question.`,
    rules: [
      {
        condition: "Making a sentence negative",
        result: "Place no directly before the conjugated verb",
        examples: [
          { native: "Hablo inglés. → No hablo inglés.", translation: "I speak English. → I don't speak English." },
          { native: "Tengo coche. → No tengo coche.", translation: "I have a car. → I don't have a car." },
        ],
      },
      {
        condition: "Forming a yes/no question",
        result: "Raise intonation at the end, or invert subject and verb. Open with ¿",
        examples: [
          { native: "¿Hablas español?", translation: "Do you speak Spanish?" },
          { native: "¿Es María médica?", translation: "Is María a doctor?" },
        ],
      },
      {
        condition: "Forming an information question",
        result: "Question word + (optional subject) + verb. All question words carry a written accent",
        examples: [
          { native: "¿Dónde vives?", translation: "Where do you live?" },
          { native: "¿Cuántos años tienes?", translation: "How old are you?" },
          { native: "¿Por qué estudias?", translation: "Why do you study?" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Spanish is the only language that uses an opening ¿ and ¡. The opening ¿ tells the reader a question is coming before they reach the verb — very helpful for understanding quickly.",
      },
      {
        type: "warning",
        content: "Question words in Spanish always carry a written accent (¿qué?, ¿dónde?, ¿cómo?) to distinguish them from their non-question uses (que = that, donde = where, como = as/how).",
      },
      {
        type: "forward-ref",
        content: "A full lesson on negation (including double negation and nunca/nada/nadie) is at es-g-a1-18, and a full question formation lesson at es-g-a1-19.",
        refId: "es-g-a1-18",
      },
    ],
    fixedPhrases: [
      { native: "No entiendo.", translation: "I don't understand.", note: "The most useful phrase for a learner — say it and people will slow down." },
      { native: "¿Cómo se dice…?", translation: "How do you say…?", note: "Useful for asking vocabulary mid-conversation." },
      { native: "¿Qué significa…?", translation: "What does … mean?", note: "Essential when you don't understand a word." },
      { native: "No sé.", translation: "I don't know.", note: "Short and honest — used constantly." },
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
    explanation: `You already know the core rule: ser for identity/permanent traits, estar for location/temporary states. But some adjectives change meaning entirely depending on which verb they follow. These are among the most common adjective pairs in Spanish and are worth knowing from A1.

THE KEY PAIRS — the four most useful at A1

  Adjective      SER (identity/defining)         ESTAR (state/condition)
  ──────────────────────────────────────────────────────────────────────
  aburrido/a     boring (personality)            bored (how you feel right now)
  malo/a         bad / evil (defining trait)     ill / sick (current condition)
  bueno/a        good (personality / quality)    tasty / feeling well
  listo/a        clever / smart                  ready

Note: other pairs (rico, muerto, seguro, vivo) follow the same logic and are introduced at A2.

  ABURRIDO
    Es muy aburrido.      He is very boring.    (that's his personality)
    Estoy aburrido.       I am bored.           (right now, this moment)

  MALO
    Es malo.              He is bad / evil.     (defining character)
    Está malo.            He is ill / sick.     (temporary condition)

  BUENO
    Es buena persona.     She is a good person. (character)
    Está buenísimo.       It tastes amazing.    (food, right now)

  LISTO
    Es muy lista.         She is very clever.   (personality)
    ¿Estás listo?         Are you ready?        (current state)

MEMORY TIP: ask yourself whether you are describing what something IS by nature, or what state it is IN at this moment. Nature → ser. State → estar.`,
    paradigmTable: {
      pronouns: ["Adjective", "With SER (identity / defining)", "With ESTAR (state / condition)"],
      verbs: [
        { label: "aburrido/a", forms: ["aburrido/a", "boring (personality)", "bored (right now)"] },
        { label: "malo/a", forms: ["malo/a", "bad / evil (character)", "ill / sick (condition)"] },
        { label: "bueno/a", forms: ["bueno/a", "good (personality / quality)", "tasty / feeling well"] },
        { label: "listo/a", forms: ["listo/a", "clever / smart", "ready"] },
        { label: "rico/a", forms: ["rico/a", "rich / wealthy", "delicious (food)"] },
      ],
    },
    rules: [
      {
        condition: "Choosing ser or estar with an adjective that changes meaning",
        result: "Ask: is this describing what the person/thing IS by nature, or what state they are IN right now?",
        examples: [
          { native: "Es aburrido.", translation: "He IS a boring person. (permanent personality)" },
          { native: "Estoy aburrido.", translation: "I AM bored right now. (current feeling)" },
        ],
      },
      {
        condition: "Describing personality, character, or inherent quality",
        result: "Use ser",
        examples: [
          { native: "Es muy lista.", translation: "She's very clever — personality." },
          { native: "Es buena persona.", translation: "She's a good person." },
        ],
      },
      {
        condition: "Describing current physical state, temporary feeling, or readiness",
        result: "Use estar",
        examples: [
          { native: "Estoy malo.", translation: "I'm ill." },
          { native: "¿Estás listo?", translation: "Are you ready?" },
          { native: "Está buenísimo.", translation: "It tastes amazing." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The key question for these adjectives: is the situation permanent and defining, or temporary and changeable? Permanent/defining → ser. Temporary/changeable → estar.",
      },
      {
        type: "culture",
        content: "\"Está buenísimo\" (with estar) is how Spanish speakers say food is delicious. Using ser for this (\"es bueno\") means it's generically good, not that it tastes amazing right now.",
      },
      {
        type: "forward-ref",
        content: "This lesson builds on the core ser/estar distinction introduced in es-g-a1-2.",
        refId: "es-g-a1-2",
      },
    ],
    examples: [
      { native: "Esta película es muy aburrida.", translation: "This film is very boring. (ser — it's just a boring film)" },
      { native: "Estoy aburrida en casa.", translation: "I am bored at home. (estar — feeling bored right now)" },
      { native: "Es malo con los animales.", translation: "He is cruel to animals. (ser — character)" },
      { native: "Mi madre está mala hoy.", translation: "My mother is ill today. (estar — temporary condition)" },
      { native: "¿Estás listo para salir?", translation: "Are you ready to go out? (estar — current state)" },
      { native: "Es una chica muy lista.", translation: "She is a very clever girl. (ser — personality)" },
      { native: "Este postre está riquísimo.", translation: "This dessert is absolutely delicious. (estar — taste)" },
      { native: "Es rico, tiene tres casas.", translation: "He is wealthy, he has three houses. (ser — defining trait)" },
    ],
    inlineVocab: [
      { word: "película", translation: "film / movie" },
      { word: "aburrido", translation: "boring / bored" },
      { word: "animales", translation: "animals" },
      { word: "madre", translation: "mother" },
      { word: "listo", translation: "clever / ready" },
      { word: "postre", translation: "dessert" },
      { word: "rico", translation: "rich / delicious" },
      { word: "casas", translation: "houses" },
      { word: "chica", translation: "girl" },
      { word: "persona", translation: "person" },
    ]
  },
]
