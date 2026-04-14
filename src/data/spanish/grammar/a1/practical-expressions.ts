import { GrammarLesson } from "../../../../types"

export const practicalExpressionsLessons: GrammarLesson[] = [
  {
    id: "es-g-a1-6",
    level: "A1",
    exerciseType: "dictation" as const,
    title: "Numbers & Telling Time",
    explanation: `NUMBERS 0–20
  0 cero    1 uno     2 dos      3 tres     4 cuatro    5 cinco
  6 seis    7 siete   8 ocho     9 nueve    10 diez
  11 once   12 doce   13 trece   14 catorce   15 quince
  16 dieciséis   17 diecisiete   18 dieciocho   19 diecinueve   20 veinte

Numbers 21–100 and compound number rules (veintiuno, treinta y dos…) are in the next lesson: Numbers 20–100 & the Calendar.

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
    ],
    paradigmTable: {
      pronouns: ["Time", "Spanish", "Notes"],
      verbs: [
        { label: "1:00", forms: ["1:00", "Es la una.", "singular — es la"] },
        { label: "2:00+", forms: ["2:00+", "Son las dos / tres…", "plural — son las"] },
        { label: "X:30", forms: ["X:30", "Son las tres y media.", "y media = half past"] },
        { label: "X:15", forms: ["X:15", "Son las cuatro y cuarto.", "y cuarto = quarter past"] },
        { label: "X:45", forms: ["X:45", "Son las cinco menos cuarto.", "menos cuarto = quarter to"] },
        { label: "12:00", forms: ["12:00", "Es mediodía.", "midday"] },
        { label: "00:00", forms: ["00:00", "Es medianoche.", "midnight"] },
      ],
    },
    rules: [
      {
        condition: "Telling the time — singular vs plural",
        result: "1:00 → Es la una (singular). All other hours → Son las + number.",
        examples: [
          { native: "Es la una.", translation: "It's one o'clock." },
          { native: "Son las dos.", translation: "It's two o'clock." },
          { native: "Son las ocho y media.", translation: "It's half past eight." },
        ],
      },
      {
        condition: "Half past",
        result: "Son las X y media",
        examples: [
          { native: "Son las tres y media.", translation: "It's half past three. (3:30)" },
          { native: "Es la una y media.", translation: "It's half past one. (1:30)" },
        ],
      },
      {
        condition: "Quarter past / quarter to",
        result: "y cuarto (quarter past) / menos cuarto (quarter to)",
        examples: [
          { native: "Son las cuatro y cuarto.", translation: "It's quarter past four. (4:15)" },
          { native: "Son las cinco menos cuarto.", translation: "It's quarter to five. (4:45)" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The key decision: is it 1:xx → Es la una. Is it any other hour → Son las dos/tres/cuatro…",
      },
      {
        type: "culture",
        content: "In Latin America, the 12-hour clock with de la mañana/de la tarde/de la noche is most common in conversation. De la mañana = AM, de la tarde = from noon to ~8pm, de la noche = evening/night.",
      },
    ],
    fixedPhrases: [
      { native: "¿Qué hora es?", translation: "What time is it?", note: "Most common way to ask the time." },
      { native: "Son las tres.", translation: "It's three o'clock.", note: "Standard format." },
      { native: "Es la una y media.", translation: "It's half past one.", note: "La una — only hour using es la." },
      { native: "¿A qué hora…?", translation: "At what time…?", note: "For asking when something happens." },
      { native: "A las ocho de la mañana.", translation: "At eight in the morning.", note: "de la mañana/tarde/noche for AM/PM." },
    ],
    inlineVocab: [
      { word: "cero", translation: "zero" },
      { word: "hora", translation: "hour / time" },
      { word: "media", translation: "half" },
      { word: "cuarto", translation: "quarter" },
      { word: "años", translation: "years" },
    ]
  },
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
    ],
    paradigmTable: {
      pronouns: ["Preposition", "Meaning", "Example"],
      verbs: [
        { label: "en", forms: ["en", "in / at / on", "Estoy en casa."] },
        { label: "sobre", forms: ["sobre", "on / on top of", "Está sobre la mesa."] },
        { label: "debajo de", forms: ["debajo de", "under / underneath", "El gato está debajo de la silla."] },
        { label: "delante de", forms: ["delante de", "in front of", "El coche está delante del hotel."] },
        { label: "detrás de", forms: ["detrás de", "behind", "El jardín está detrás de la casa."] },
        { label: "al lado de", forms: ["al lado de", "next to", "La farmacia está al lado del banco."] },
        { label: "cerca de", forms: ["cerca de", "near / close to", "Vivimos cerca de la estación."] },
        { label: "lejos de", forms: ["lejos de", "far from", "El aeropuerto está lejos del centro."] },
        { label: "entre", forms: ["entre", "between", "El café está entre el banco y la tienda."] },
        { label: "enfrente de", forms: ["enfrente de", "opposite / facing", "La parada está enfrente del parque."] },
      ],
    },
    rules: [
      {
        condition: "Describing location",
        result: "Always use estar (not ser) for location",
        examples: [
          { native: "El banco está en la calle Mayor.", translation: "The bank is on Calle Mayor." },
          { native: "¿Dónde está la farmacia?", translation: "Where is the pharmacy?" },
        ],
      },
      {
        condition: "Prepositions requiring de",
        result: "Debajo de, delante de, detrás de, al lado de, cerca de, lejos de, enfrente de — always with de",
        examples: [
          { native: "Está al lado del banco.", translation: "It's next to the bank. (al lado de + el = del)" },
        ],
      },
      {
        condition: "Asking for location",
        result: "¿Dónde está + noun?",
        examples: [
          { native: "¿Dónde está el hospital?", translation: "Where is the hospital?" },
          { native: "¿Dónde están los servicios?", translation: "Where are the toilets?" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "All location always uses estar — this is a key rule from the ser/estar distinction. You can never say \"El banco es en la calle Mayor.\"",
      },
      {
        type: "tip",
        content: "De + el always contracts to del. \"Al lado de el\" → \"al lado del\". This applies to all the compound prepositions that end in de.",
      },
      {
        type: "culture",
        content: "When giving directions in Spanish, it's common to use landmarks: \"Está al lado del banco\" or \"Enfrente del parque\". Street numbers are used but landmarks are more conversational.",
      },
    ],
    fixedPhrases: [
      { native: "¿Dónde está…?", translation: "Where is…?", note: "Location question — always estar." },
      { native: "Está a la derecha / izquierda.", translation: "It's on the right / left.", note: "Essential for giving directions." },
      { native: "Está todo recto.", translation: "It's straight ahead.", note: "Most common directions phrase." },
      { native: "Está cerca de aquí.", translation: "It's near here.", note: "cerca de = near." },
      { native: "¿Hay un banco cerca?", translation: "Is there a bank nearby?", note: "hay for existence; está for location." },
    ],
    inlineVocab: [
      { word: "casa", translation: "house / home" },
      { word: "mesa", translation: "table" },
      { word: "silla", translation: "chair" },
      { word: "gato", translation: "cat" },
      { word: "jardín", translation: "garden" },
      { word: "hotel", translation: "hotel" },
      { word: "farmacia", translation: "pharmacy" },
      { word: "estación", translation: "station" },
      { word: "hospital", translation: "hospital" },
      { word: "aeropuerto", translation: "airport" },
      { word: "tienda", translation: "shop / store" },
      { word: "derecha", translation: "right" },
    ]
  },
  {
    id: "es-g-a1-20",
    level: "A1",
    exerciseType: "dictation" as const,
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
    ],
    paradigmTable: {
      pronouns: ["Number", "Spanish", "Notes"],
      verbs: [
        { label: "20", forms: ["20", "veinte", "base"] },
        { label: "21-29", forms: ["21-29", "veintiuno, veintidós…", "ONE word, accents on 22/23/26"] },
        { label: "30", forms: ["30", "treinta", ""] },
        { label: "31+", forms: ["31+", "treinta y uno…", "THREE words with y"] },
        { label: "40-90", forms: ["40-90", "cuarenta/cincuenta/sesenta/setenta/ochenta/noventa", "tens"] },
        { label: "100 exactly", forms: ["100", "cien", "use cien for exactly 100"] },
        { label: "101-199", forms: ["101-199", "ciento uno, ciento veinte…", "ciento (not cien) for 101-199"] },
      ],
    },
    rules: [
      {
        condition: "Numbers 21-29",
        result: "Written as ONE word: veintiuno, veintidós, veintitrés… Accents on veintidós, veintitrés, veintiséis.",
        examples: [
          { native: "21 = veintiuno", translation: "twenty-one" },
          { native: "22 = veintidós", translation: "twenty-two" },
          { native: "25 = veinticinco", translation: "twenty-five" },
        ],
      },
      {
        condition: "Numbers 31 and above",
        result: "THREE separate words: [ten] y [unit]",
        examples: [
          { native: "31 = treinta y uno", translation: "thirty-one" },
          { native: "45 = cuarenta y cinco", translation: "forty-five" },
          { native: "78 = setenta y ocho", translation: "seventy-eight" },
        ],
      },
      {
        condition: "100 vs ciento",
        result: "100 exactly = cien. 101-199 = ciento + rest",
        examples: [
          { native: "Cien personas.", translation: "A hundred people." },
          { native: "Ciento veinte euros.", translation: "One hundred and twenty euros." },
        ],
      },
      {
        condition: "Veintiuno before nouns",
        result: "Drop the -o before masculine nouns: veintiún. Use veintiuna before feminine nouns.",
        examples: [
          { native: "veintiún años", translation: "twenty-one years" },
          { native: "veintiuna personas", translation: "twenty-one people" },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "21-29 are ONE word but 31+ are THREE words. This inconsistency trips up learners. Veintiuno (one word) vs treinta y uno (three words).",
      },
      {
        type: "tip",
        content: "Accents only appear on: veintidós (22), veintitrés (23), veintiséis (26). All others in the 21-29 range have no accent.",
      },
      {
        type: "culture",
        content: "Prices and ages come up constantly. Being able to quickly produce and understand numbers is one of the most practical A1 skills.",
      },
    ],
    fixedPhrases: [
      { native: "Tengo treinta y dos años.", translation: "I am thirty-two years old.", note: "Most common numbers context." },
      { native: "Cuesta cuarenta euros.", translation: "It costs forty euros.", note: "Shopping." },
      { native: "Hay cien personas.", translation: "There are a hundred people.", note: "cien for exactly 100." },
    ],
    inlineVocab: [
      { word: "personas", translation: "people / persons" },
      { word: "sala", translation: "room / hall" },
      { word: "euros", translation: "euros" },
      { word: "años", translation: "years" },
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
        type: "forward-ref",
        content: "Hay is the third way to talk about things in Spanish alongside ser and estar. The full three-way picture is in lesson es-g-a1-22 (Hay, ser, estar — deeper).",
        refId: "es-g-a1-22",
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
    ]
  },
]
