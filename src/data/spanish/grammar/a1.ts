// Spanish A1 grammar lessons.
// data/spanish/grammar/a1.ts
import { GrammarLesson } from "../../../types"

export const a1Grammar: GrammarLesson[] = [
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
  {
    id: "es-g-a1-6",
    level: "A1",
    title: "Numbers & Telling Time",
    explanation: `NUMBERS 0–20
  0 cero    1 uno     2 dos      3 tres     4 cuatro    5 cinco
  6 seis    7 siete   8 ocho     9 nueve    10 diez
  11 once   12 doce   13 trece   14 catorce   15 quince
  16 dieciséis   17 diecisiete   18 dieciocho   19 diecinueve   20 veinte

TENS
  30 treinta   40 cuarenta   50 cincuenta   60 sesenta
  70 setenta   80 ochenta    90 noventa     100 cien

COMPOUND NUMBERS
  21–29: one word with accent — veintiuno, veintidós, veintitrés…
  31+: treinta y uno, cuarenta y dos, cincuenta y tres…

TELLING TIME — ¿Qué hora es?
  Es la una.                   It's one o'clock.     (es — singular)
  Son las dos.                 It's two o'clock.     (son — plural)
  Son las tres y media.        It's half past three.
  Son las cuatro y cuarto.     It's quarter past four.
  Son las cinco menos cuarto.  It's quarter to five.`,
    examples: [
      { native: "Son las tres.", translation: "It's three o'clock." },
      { native: "Es la una y media.", translation: "It's half past one." },
      { native: "Son las dos y cuarto.", translation: "It's quarter past two." },
      { native: "Tengo veinte años.", translation: "I am twenty years old." },
    ]
  },
  {
    id: "es-g-a1-7",
    level: "A1",
    title: "Present Tense: Regular -er Verbs",
    explanation: `Regular -er verbs use their own set of endings. Remove -er and add the ending that matches the subject.

COMER — to eat (stem: com-)

  yo como           nosotros comemos
  tú comes          vosotros coméis
  él/ella come      ellos/ellas comen

The same endings apply to: beber, leer, vender, correr, comprender, responder…

Compare -ar vs -er endings:
             yo   tú    él    nosotros  vosotros  ellos
  -ar verbs:  -o   -as   -a    -amos     -áis      -an
  -er verbs:  -o   -es   -e    -emos     -éis      -en

The yo form is -o for both groups.`,
    examples: [
      { native: "Yo como pizza.", translation: "I eat pizza." },
      { native: "Tú bebes agua.", translation: "You drink water." },
      { native: "Ella lee un libro.", translation: "She reads a book." },
      { native: "Nosotros corremos.", translation: "We run." },
      { native: "Ellos venden frutas.", translation: "They sell fruit." },
    ]
  },
  {
    id: "es-g-a1-8",
    level: "A1",
    title: "Present Tense: Regular -ir Verbs",
    explanation: `Regular -ir verbs share most endings with -er verbs but differ in the nosotros and vosotros forms.

VIVIR — to live (stem: viv-)

  yo vivo           nosotros vivimos
  tú vives          vosotros vivís
  él/ella vive      ellos/ellas viven

Compare -er vs -ir endings:
             yo   tú    él    nosotros  vosotros  ellos
  -er verbs:  -o   -es   -e    -emos     -éis      -en
  -ir verbs:  -o   -es   -e    -imos     -ís       -en
                                  ↑          ↑
                              different  different

Common -ir verbs: vivir, escribir, abrir, recibir, subir, decidir.`,
    examples: [
      { native: "Yo vivo en Barcelona.", translation: "I live in Barcelona." },
      { native: "Tú escribes bien.", translation: "You write well." },
      { native: "Él abre la puerta.", translation: "He opens the door." },
      { native: "Nosotros subimos.", translation: "We go up." },
      { native: "Ellas reciben cartas.", translation: "They receive letters." },
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
    ]
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
    ]
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
    examples: [
      { native: "un chico alto / una chica alta", translation: "a tall boy / a tall girl", speakText: "un chico alto, una chica alta" },
      { native: "unos chicos altos / unas chicas altas", translation: "tall boys / tall girls", speakText: "unos chicos altos, unas chicas altas" },
      { native: "el libro rojo / la manzana roja", translation: "the red book / the red apple", speakText: "el libro rojo, la manzana roja" },
      { native: "un coche grande / una casa grande", translation: "a big car / a big house (no gender change)", speakText: "un coche grande, una casa grande" },
    ]
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
    ]
  },
  {
    id: "es-g-a1-13",
    level: "A1",
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
    ]
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
    examples: [
      { native: "mi madre y mi padre", translation: "my mother and my father" },
      { native: "¿Cómo se llama tu hermano?", translation: "What is your brother's name?" },
      { native: "Nuestros hijos viven en Madrid.", translation: "Our children live in Madrid." },
      { native: "Su casa es muy grande.", translation: "His/her/their house is very big." },
      { native: "¿Dónde están tus llaves?", translation: "Where are your keys?" },
    ]
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
    ]
  },
  {
    id: "es-g-a1-17",
    level: "A1",
    title: "Location Prepositions",
    explanation: `To describe where things are, use ESTAR + a location preposition. (Location always uses estar, never ser.)

BASIC PREPOSITIONS
  en           in / at / on        Estoy en casa.                (I'm at home.)
  sobre        on / on top of      El libro está sobre la mesa.  (on the table)
  debajo de    under               El gato está debajo de la silla.
  delante de   in front of         El banco está delante del hotel.
  detrás de    behind              El jardín está detrás de la casa.
  al lado de   next to             La farmacia está al lado del banco.
  cerca de     near                Vivimos cerca de la estación.
  lejos de     far from            El aeropuerto está lejos del centro.
  entre        between             El café está entre el banco y la tienda.
  enfrente de  opposite            La parada está enfrente del parque.

ASKING FOR LOCATION
  ¿Dónde está el hospital?     Where is the hospital?
  Está a la derecha.           It's on the right.
  Está todo recto.             It's straight ahead.`,
    examples: [
      { native: "Estoy en casa.", translation: "I'm at home." },
      { native: "El banco está al lado de la farmacia.", translation: "The bank is next to the pharmacy." },
      { native: "La estación está cerca de aquí.", translation: "The station is near here." },
      { native: "¿Dónde está el hospital?", translation: "Where is the hospital?" },
      { native: "El café está entre el banco y la tienda.", translation: "The café is between the bank and the shop." },
    ]
  },
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
    ]
  },
  {
    id: "es-g-a1-20",
    level: "A1",
    title: "Numbers 20-100 & Compound Numbers",
    explanation: `TENS 20-100
  20 veinte      30 treinta     40 cuarenta    50 cincuenta
  60 sesenta     70 setenta     80 ochenta      90 noventa
  100 cien

COMPOUND NUMBERS
21–29: written as ONE word, with an accent on veintidós, veintitrés, veintiséis:
  21 veintiuno   22 veintidós   23 veintitrés   24 veinticuatro
  25 veinticinco  26 veintiséis  27 veintisiete  28 veintiocho  29 veintinueve

31 and above: three separate words with y (and):
  31 treinta y uno   45 cuarenta y cinco   78 setenta y ocho

CIEN vs CIENTO
  100 exactly → cien     (cien euros, cien personas)
  101-199 → ciento...    (ciento uno, ciento veinte, ciento noventa y nueve)

VEINTIUNO + NOUNS
Before a masculine noun: veintiún (drops the -o):
  veintiún años, veintiún euros
With a feminine noun: veintiuna:
  veintiuna personas`,
    examples: [
      { native: "Tengo treinta y dos años.", translation: "I am thirty-two years old." },
      { native: "El libro cuesta cuarenta y cinco euros.", translation: "The book costs forty-five euros." },
      { native: "Hay cien personas en la sala.", translation: "There are one hundred people in the room." },
      { native: "Ciento veinte euros.", translation: "One hundred and twenty euros." },
      { native: "Tengo veintiún años.", translation: "I am twenty-one years old." },
    ]
  },
  {
    id: "es-g-a1-21",
    level: "A1",
    title: "Reflexive Verbs",
    explanation: `Reflexive verbs express actions done to oneself. They use a reflexive pronoun that matches the subject.

REFLEXIVE PRONOUNS
  yo → me          nosotros → nos
  tú → te          vosotros → os
  él/ella → se     ellos/ellas → se

The pronoun goes BEFORE the conjugated verb:
  Me llamo Ana.       (My name is Ana. — lit. I call myself Ana.)
  Te despiertas tarde. (You wake up late.)
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
    ]
  },
  {
    id: "es-g-a1-22",
    level: "A1",
    title: "Gustar — Expressing Likes & Dislikes",
    explanation: `Gustar does not work like a normal verb. The thing you like is the grammatical subject, and the person who likes it is an indirect object.

STRUCTURE: (indirect object pronoun) + gustar + thing liked

  me gusta / me gustan      I like
  te gusta / te gustan      you like
  le gusta / le gustan      he/she/you (formal) like(s)
  nos gusta / nos gustan    we like
  os gusta / os gustan      you all like (Spain)
  les gusta / les gustan    they / you all like

SINGULAR vs PLURAL
  Me gusta el café.         I like coffee.         (singular → gusta)
  Me gustan las tapas.      I like tapas.           (plural → gustan)

INTENSIFYING
  Me gusta mucho.           I like it a lot.
  No me gusta nada.         I don't like it at all.
  Me encanta.               I love it. (stronger than gustar)

ASKING ABOUT PREFERENCES
  ¿Te gusta el fútbol?      Do you like football?
  ¿Qué te gusta hacer?      What do you like to do?

With an infinitive, always use gusta (singular):
  Me gusta bailar.          I like dancing.`,
    examples: [
      { native: "Me gusta el español.", translation: "I like Spanish." },
      { native: "Me gustan los libros.", translation: "I like books." },
      { native: "¿Te gusta la música?", translation: "Do you like music?" },
      { native: "No me gusta nada el frío.", translation: "I don't like the cold at all." },
      { native: "Nos encanta viajar.", translation: "We love travelling." },
    ]
  },
  {
    id: "es-g-a1-23",
    level: "A1",
    title: "Modal Verbs: Poder, Deber & Tener Que",
    explanation: `These three verbs express ability, obligation, and necessity. All are followed by an infinitive.

PODER — can / to be able to (stem-changing: o→ue)

  yo **puedo**          nosotros podemos
  tú **puedes**         vosotros podéis
  él/ella **puede**     ellos/ellas **pueden**

  Puedo ayudarte.        (I can help you.)
  ¿Puedes venir mañana?  (Can you come tomorrow?)

DEBER — must / should (regular -er verb)

  Debo estudiar más.     (I must study more.)
  Debes descansar.       (You should rest.)

TENER QUE — to have to / must (stronger obligation)

  Tengo que trabajar.    (I have to work.)
  Tienen que salir ya.   (They have to leave now.)

SUMMARY
  poder     → ability or possibility  (can, could)
  deber     → moral obligation        (should, must)
  tener que → concrete necessity      (have to, need to)`,
    examples: [
      { native: "¿Puedes hablar más despacio?", translation: "Can you speak more slowly?" },
      { native: "No puedo venir esta noche.", translation: "I can't come tonight." },
      { native: "Debes llegar a tiempo.", translation: "You should arrive on time." },
      { native: "Tengo que trabajar el sábado.", translation: "I have to work on Saturday." },
      { native: "Tenemos que comprar leche.", translation: "We have to buy milk." },
    ]
  },
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
    examples: [
      { native: "¿Cuánto cuesta este libro?", translation: "How much does this book cost?" },
      { native: "Quiero esa camisa, por favor.", translation: "I'd like that shirt, please." },
      { native: "Estas manzanas son deliciosas.", translation: "These apples are delicious." },
      { native: "¿Qué es esto?", translation: "What is this?" },
      { native: "Aquel edificio es muy antiguo.", translation: "That building (over there) is very old." },
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
    ]
  },

]
