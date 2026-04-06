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
