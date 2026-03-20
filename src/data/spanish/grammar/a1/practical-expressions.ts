import { GrammarLesson } from "../../../../types"

export const practicalExpressionsLessons: GrammarLesson[] = [
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
]
