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
  {
    id: "es-g-a1-28",
    level: "A1",
    title: "Ser vs Estar — Adjectives That Change Meaning",
    explanation: `You already know the core rule: ser for identity/permanent traits, estar for location/temporary states. But some adjectives change meaning entirely depending on which verb they follow. These are among the most common adjective pairs in Spanish and are worth knowing from A1.

THE KEY PAIRS

  Adjective      SER (identity/defining)         ESTAR (state/condition)
  ──────────────────────────────────────────────────────────────────────
  aburrido/a     boring (personality)            bored (how you feel right now)
  malo/a         bad / evil (defining trait)     ill / sick (current condition)
  bueno/a        good (personality / quality)    tasty / feeling well
  listo/a        clever / smart                  ready
  rico/a         rich (wealthy)                  delicious (taste)
  muerto/a       (inherently dead — metaphor)    dead (actual state)
  seguro/a       safe (inherently)               sure / certain (current feeling)
  vivo/a         lively / sharp-witted           alive (current state)

THE FOUR YOU WILL MEET FIRST

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
    ]
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
      { native: "¿Hay un banco? — Sí. — ¿Dónde está el banco?", translation: "Is there a bank? — Yes. — Where is the bank? (hay = existence, estar = location)", speakText: "¿Hay un banco? Sí. ¿Dónde está el banco?" },
      { native: "En mi barrio hay un parque muy bonito.", translation: "In my neighbourhood there is a very nice park." },
      { native: "No hay tiempo.", translation: "There is no time." },
    ]
  },
  {
    id: "es-g-a1-30",
    level: "A1",
    title: "The Imperative — Giving Instructions & Commands",
    explanation: `The imperative is used for instructions, commands, requests, and suggestions. Spanish has imperative forms for tú (informal), vosotros (informal plural — Spain), usted (formal singular), and ustedes (formal plural / Latin America). Nosotros (let's) is also possible.

FORMING THE AFFIRMATIVE IMPERATIVE

TÚ form — the most common:
  -ar verbs: use the él/ella present tense form (drop -as from tú form):
    hablar:  tú hablas → ¡Habla!      (Speak!)
    comprar: tú compras → ¡Compra!    (Buy!)
  -er/-ir verbs: same rule:
    comer:   tú comes → ¡Come!        (Eat!)
    escribir: tú escribes → ¡Escribe! (Write!)

USTED form — formal singular (same as él/ella subjunctive, but just use this pattern):
  hablar → ¡Hable!      vosotros → ¡Hablen!
  comer  → ¡Coma!       ustedes  → ¡Coman!
  escribir → ¡Escriba!  ustedes  → ¡Escriban!

VOSOTROS form — replace the -r of the infinitive with -d:
  hablar → ¡Hablad!    comer → ¡Comed!    escribir → ¡Escribid!

NOSOTROS — let's:
  ¡Hablemos!    Let's speak.
  ¡Comamos!     Let's eat.
  ¡Vamos!       Let's go. (irregular)

IRREGULAR TÚ IMPERATIVES — must memorise:
  ser   → ¡Sé!         tener → ¡Ten!
  ir    → ¡Ve!         venir → ¡Ven!
  hacer → ¡Haz!        poner → ¡Pon!
  decir → ¡Di!         salir → ¡Sal!

NEGATIVE IMPERATIVE
For ALL forms: no + present subjunctive.
At A1, the key pattern to know is the tú negative:
  ¡Habla!  → ¡No hables!     Don't speak!
  ¡Come!   → ¡No comas!      Don't eat!
  ¡Vayas!  → ¡No vayas!      Don't go!
The full subjunctive is A2+ — for now, learn the tú negatives as fixed forms.

REFLEXIVE VERBS IN THE IMPERATIVE
Reflexive pronouns attach to the end of affirmative imperatives:
  levantarse: ¡Levántate!    Get up! (tú)
              ¡Levántese!    Get up! (usted)
              ¡Levantaos!    Get up! (vosotros — te + os, d drops)
              ¡Levántense!   Get up! (ustedes)

In negative imperatives the pronoun goes before:
  ¡No te levantes!    Don't get up! (tú)

See lesson a1-21 for reflexive verbs.

COMMON IMPERATIVE EXPRESSIONS
  ¡Escucha! / ¡Escuche!     Listen!
  ¡Mira! / ¡Mire!           Look!
  ¡Espera! / ¡Espere!       Wait!
  ¡Repite! / ¡Repita!       Repeat!
  ¡Siéntate! / ¡Siéntese!  Sit down!
  ¡Pasa! / ¡Pase!           Come in!
  ¡Habla más despacio!      Speak more slowly!
  ¡No te preocupes!         Don't worry! (informal)`,
    examples: [
      { native: "¡Habla más despacio, por favor!", translation: "Speak more slowly, please! (tú — informal)" },
      { native: "¡Escuche, por favor!", translation: "Listen, please! (usted — formal)" },
      { native: "¡Vamos!", translation: "Let's go! (nosotros)" },
      { native: "¡No comas eso!", translation: "Don't eat that! (tú negative)" },
      { native: "¡Levántate!", translation: "Get up! (reflexive imperative — pronoun attached)" },
      { native: "¡Ten cuidado!", translation: "Be careful! (tener — irregular tú imperative)" },
    ]
  },
  {
    id: "es-g-a1-31",
    level: "A1",
    title: "Stem-Changing Verbs — e→ie, o→ue, e→i",
    explanation: `You already know that querer (lesson a1-16) changes its stem vowel from e to ie in most forms. This is not a quirk unique to querer — it is a pattern shared by a large group of very common verbs. Understanding the three patterns helps you recognise and use dozens of high-frequency verbs correctly.

THE RULE — the boot / shoe pattern
Stem changes happen in all forms EXCEPT nosotros and vosotros.
Draw a line around the affected forms and it looks like a boot or shoe:
  yo, tú, él/ella, ellos/ellas → stem changes     ← inside the boot
  nosotros, vosotros           → NO stem change   ← outside the boot

PATTERN 1: e → ie
The stem vowel e changes to ie.

  QUERER — to want (see a1-16)
  quiero, quieres, quiere, queremos, queréis, quieren

  EMPEZAR — to begin / start
  empiezo, empiezas, empieza, empezamos, empezáis, empiezan

  PENSAR — to think
  pienso, piensas, piensa, pensamos, pensáis, piensan

  ENTENDER — to understand
  entiendo, entiendes, entiende, entendemos, entendéis, entienden

  VENIR — to come (also irregular yo: vengo)
  vengo, vienes, viene, venimos, venís, vienen

  TENER — to have (also irregular yo: tengo — see a1-9)
  tengo, tienes, tiene, tenemos, tenéis, tienen

PATTERN 2: o → ue
The stem vowel o changes to ue.

  PODER — to be able to / can (see a1-23)
  puedo, puedes, puede, podemos, podéis, pueden

  VOLVER — to return / come back
  vuelvo, vuelves, vuelve, volvemos, volvéis, vuelven

  DORMIR — to sleep
  duermo, duermes, duerme, dormimos, dormís, duermen

  ENCONTRAR — to find / to meet
  encuentro, encuentras, encuentra, encontramos, encontráis, encuentran

  JUGAR — to play (u → ue — the only u→ue verb)
  juego, juegas, juega, jugamos, jugáis, juegan

PATTERN 3: e → i (only -ir verbs)
The stem vowel e changes to i. Only applies to -ir verbs.

  PEDIR — to ask for / order
  pido, pides, pide, pedimos, pedís, piden

  SERVIR — to serve
  sirvo, sirves, sirve, servimos, servís, sirven

  REPETIR — to repeat
  repito, repites, repite, repetimos, repetís, repiten

SUMMARY TABLE

  Pattern    Example verb    yo form    Change
  e → ie     querer          quiero     e in stem → ie
  o → ue     poder           puedo      o in stem → ue
  e → i      pedir           pido       e in stem → i (only -ir verbs)
  u → ue     jugar           juego      u in stem → ue (jugar only)

NOSOTROS/VOSOTROS NEVER CHANGE — this is the key rule:
  ✓ queremos (not *querimos)
  ✓ podemos (not *puedemos)
  ✓ pedimos (not *pidimos)`,
    examples: [
      { native: "¿A qué hora empieza la clase?", translation: "What time does the class begin? (empezar e→ie)" },
      { native: "No entiendo la pregunta.", translation: "I don't understand the question. (entender e→ie)" },
      { native: "¿A qué hora vuelves a casa?", translation: "What time do you come home? (volver o→ue)" },
      { native: "Duermo ocho horas cada noche.", translation: "I sleep eight hours every night. (dormir o→ue)" },
      { native: "¿Qué pides tú?", translation: "What are you ordering? (pedir e→i — in a restaurant)" },
      { native: "Los niños juegan en el parque.", translation: "The children play in the park. (jugar u→ue)" },
      { native: "Nosotros volvemos mañana.", translation: "We come back tomorrow. (nosotros — NO stem change)" },
    ]
  },
  {
    id: "es-g-a1-32",
    level: "A1",
    title: "Stressed Pronouns — Mí, Ti, Él, Ella...",
    explanation: `Stressed pronouns (pronombres tónicos / pronombres preposicionales) are used after prepositions and for emphasis. They are different from subject pronouns (yo, tú, él...) and appear constantly in everyday Spanish.

THE FORMS

  Subject pronoun    Stressed pronoun
  yo                 mí       (me)
  tú                 ti       (you)
  él                 él       (him)
  ella               ella     (her)
  usted              usted    (you — formal)
  nosotros/as        nosotros/as  (us)
  vosotros/as        vosotros/as  (you all)
  ellos/ellas        ellos/ellas  (them)

Note: él, ella, nosotros, vosotros, ellos, ellas, usted, ustedes are
identical to the subject pronouns. Only yo→mí and tú→ti change.

Important: mí has a written accent to distinguish it from mi (my — possessive).
ti never has an accent.

WHEN TO USE STRESSED PRONOUNS

1. AFTER PREPOSITIONS — any preposition requires a stressed pronoun:
  para mí          for me            Es para mí.
  con ti           with you          Quiero ir con ti... ← EXCEPTION below
  sin él           without him       Salió sin él.
  a ella           to her            Se lo di a ella.
  entre nosotros   between us        Entre nosotros...
  cerca de ellos   near them         Viven cerca de ellos.

SPECIAL CASE — con:
  con + mí → conmigo    (with me — NOT con mí)
  con + ti → contigo    (with you — NOT con ti)
  con + sí → consigo    (with himself/herself/themselves — reflexive)
  These three fused forms are fixed — always use conmigo/contigo/consigo.

2. FOR EMPHASIS — after ser or in short answers:
  Soy yo.           It's me.
  ¿Eres tú?         Is it you?
  Es él.            It's him.

3. ALONE OR IN SHORT ANSWERS:
  ¿Quién habla español? — ¡Yo!   Who speaks Spanish? — Me!

4. CLARIFYING SU — stressed pronoun after de:
  su casa can mean his/her/your/their house — to clarify:
  la casa de él     his house
  la casa de ella   her house
  la casa de usted  your house
  See lesson a1-15 for possessive adjectives.

5. TAMBIÉN / TAMPOCO — me too / me neither:
  Yo también.       Me too.
  Yo tampoco.       Me neither.`,
    examples: [
      { native: "Este regalo es para ti.", translation: "This gift is for you." },
      { native: "¿Quieres venir conmigo?", translation: "Do you want to come with me? (con + mí = conmigo)" },
      { native: "Lo hizo sin nosotros.", translation: "He did it without us." },
      { native: "Soy yo.", translation: "It's me." },
      { native: "Entre tú y yo...", translation: "Between you and me..." },
      { native: "¿Quién tiene hambre? — ¡Yo!", translation: "Who is hungry? — Me!" },
      { native: "Yo también quiero ir.", translation: "I want to go too." },
    ]
  },
  {
    id: "es-g-a1-33",
    level: "A1",
    title: "Saber vs Conocer — Two Verbs for 'To Know'",
    explanation: `Spanish has two verbs that both translate as 'to know' in English, but they are never interchangeable. The distinction is clear once you understand what each one covers.

THE CORE DIFFERENCE
  saber    — to know a fact, information, or how to do something
  conocer  — to know / be acquainted with a person, place, or thing

SABER — knowing facts and skills

CONJUGATION (present tense — irregular yo form):
  yo **sé**           nosotros sabemos
  tú sabes            vosotros sabéis
  él/ella sabe        ellos/ellas saben

USES:
  Knowing facts / information:
    Sé tu número de teléfono.    I know your phone number.
    ¿Sabes la respuesta?         Do you know the answer?
    No sé dónde está.            I don't know where it is.

  Knowing how to do something (saber + infinitive):
    Sé nadar.                    I know how to swim.
    ¿Sabes hablar chino?         Do you know how to speak Chinese?
    No sé cocinar.               I don't know how to cook.

  Knowing learned/factual information:
    Sé que tienes razón.         I know (that) you are right.
    ¿Sabes qué hora es?          Do you know what time it is?

CONOCER — being acquainted with people and places

CONJUGATION (present tense — irregular yo form):
  yo **conozco**      nosotros conocemos
  tú conoces          vosotros conocéis
  él/ella conoce      ellos/ellas conocen

USES:
  Knowing / being acquainted with a person:
    Conozco a María.             I know María. (I've met her)
    ¿Conoces a mi hermano?       Do you know my brother?
    No conozco a nadie aquí.     I don't know anyone here.

  Note: personal a is required before people with conocer (see below).

  Knowing / being familiar with a place:
    Conozco Madrid muy bien.     I know Madrid very well.
    ¿Conoces este restaurante?   Do you know this restaurant?

  Being familiar with a thing (book, film, song):
    ¿Conoces esta canción?       Do you know this song?
    Conozco ese libro.           I know that book. (I've read/heard of it)

PERSONAL A WITH CONOCER
When conocer refers to a person, use personal a:
  Conozco **a** tu profesor.    I know your teacher.
  ¿Conoces **a** alguien aquí?  Do you know anyone here?
  No need for a with places or things:
  Conozco Madrid.    Conozco ese libro.

QUICK TEST
Can you replace 'know' with 'know how to' or 'know the fact that'? → saber
Can you replace 'know' with 'be acquainted with' or 'have been to'? → conocer

  ¿Sabes dónde está el banco?    Do you know where the bank is? (fact → saber)
  ¿Conoces el banco de la plaza? Do you know the bank on the square? (familiar with → conocer)`,
    examples: [
      { native: "Sé hablar español un poco.", translation: "I know how to speak a little Spanish. (saber + infinitive)" },
      { native: "No sé dónde está la estación.", translation: "I don't know where the station is. (fact → saber)" },
      { native: "Conozco a tu hermana.", translation: "I know your sister. (person → conocer + personal a)" },
      { native: "¿Conoces Madrid?", translation: "Do you know Madrid? (place → conocer)" },
      { native: "¿Sabes qué hora es?", translation: "Do you know what time it is? (fact → saber)" },
      { native: "No conozco a nadie aquí.", translation: "I don't know anyone here. (person → conocer)" },
      { native: "Sé que tienes razón.", translation: "I know that you are right. (fact → saber)" },
    ]
  },
  {
    id: "es-g-a1-34",
    level: "A1",
    title: "Irregular Yo Forms — The 'Yo-Go' Verbs",
    explanation: `Several very common Spanish verbs have a regular present tense in all forms except yo, which ends in -go instead of the expected -o. Once you recognise this pattern, you can handle all of them confidently.

THE PATTERN — irregular yo, regular everything else

  TENER — to have (stem-change e→ie in other forms — see a1-9, a1-31)
  yo **tengo**    tú tienes    él tiene    nosotros tenemos

  VENIR — to come (stem-change e→ie in other forms — see a1-31)
  yo **vengo**    tú vienes    él viene    nosotros venimos

  HACER — to do / make
  yo **hago**     tú haces     él hace     nosotros hacemos

  SALIR — to leave / go out
  yo **salgo**    tú sales     él sale     nosotros salimos

  PONER — to put / place
  yo **pongo**    tú pones     él pone     nosotros ponemos

  TRAER — to bring
  yo **traigo**   tú traes     él trae     nosotros traemos

  CAER — to fall
  yo **caigo**    tú caes      él cae      nosotros caemos

  OÍR — to hear
  yo **oigo**     tú oyes      él oye      nosotros oímos

TWO EXTRA IRREGULAR YO FORMS (not -go but equally important):

  SABER — to know (see a1-33)
  yo **sé**       tú sabes     él sabe     nosotros sabemos

  CONOCER — to know / meet (see a1-33)
  yo **conozco**  tú conoces   él conoce   nosotros conocemos

  VER — to see
  yo **veo**      tú ves       él ve       nosotros vemos

  DAR — to give
  yo **doy**      tú das       él da       nosotros damos

THE PRACTICAL IMPACT
These are among the most frequent verbs in Spanish. You will produce yo forms constantly:

  ¿Qué haces? — Hago los deberes.     What are you doing? — I'm doing homework.
  ¿A qué hora sales? — Salgo a las ocho. What time do you leave? — I leave at eight.
  ¿Qué pones aquí? — Pongo las llaves.  What do you put here? — I put the keys.
  Traigo el vino — ¿tú traes el pan?   I'll bring the wine — will you bring the bread?

COMPOUNDS INHERIT THE IRREGULAR YO
Verbs built on these roots keep the irregular yo:
  tener → mantener (maintain) → yo mantengo
  poner → proponer (propose) → yo propongo
  venir → convenir (suit/agree) → yo convengo
  hacer → deshacer (undo) → yo deshago
You don't need these yet — just know the pattern extends.`,
    examples: [
      { native: "Hago deporte todos los días.", translation: "I do sport every day. (hacer → hago)" },
      { native: "Salgo de casa a las ocho.", translation: "I leave home at eight. (salir → salgo)" },
      { native: "Pongo las llaves aquí siempre.", translation: "I always put the keys here. (poner → pongo)" },
      { native: "Traigo algo de comer.", translation: "I'm bringing something to eat. (traer → traigo)" },
      { native: "No oigo bien — ¿puedes repetir?", translation: "I can't hear well — can you repeat? (oír → oigo)" },
      { native: "Tengo que irme — vengo mañana.", translation: "I have to go — I'll come tomorrow. (tengo / vengo)" },
      { native: "Veo la televisión por la noche.", translation: "I watch television at night. (ver → veo)" },
    ]
  },
]
