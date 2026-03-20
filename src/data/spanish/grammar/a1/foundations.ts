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
      { native: "el libro / los libros", translation: "the book / the books (masc.)", speakText: "el libro, los libros" },
      { native: "la casa / las casas", translation: "the house / the houses (fem.)", speakText: "la casa, las casas" },
      { native: "un estudiante", translation: "a student (masc.)" },
      { native: "una profesora", translation: "a teacher (fem.)" },
      { native: "Voy al banco.", translation: "I'm going to the bank. (a + el = al)" },
    ]
  },
  {
    id: "es-g-a1-5",
    level: "A1",
    title: "Negation & Question Formation",
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
    ]
  },
]
