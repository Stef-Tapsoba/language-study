import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
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
    ],
    inlineVocab: [
      { word: "comer", translation: "to eat" },
      { word: "beber", translation: "to drink" },
      { word: "leer", translation: "to read" },
      { word: "vender", translation: "to sell" },
      { word: "correr", translation: "to run" },
      { word: "comprender", translation: "to understand" },
      { word: "responder", translation: "to respond / answer" },
      { word: "frutas", translation: "fruit" },
      { word: "agua", translation: "water" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "comer", forms: ["como", "comes", "come", "comemos", "coméis", "comen"] },
        { label: "beber", forms: ["bebo", "bebes", "bebe", "bebemos", "bebéis", "beben"] },
      ],
    },
    rules: [
      {
        condition: "Conjugating a regular -er verb",
        result: "Remove -er, add: -o / -es / -e / -emos / -éis / -en",
        examples: [
          { native: "Yo como.", translation: "I eat." },
          { native: "Tú comes.", translation: "You eat." },
          { native: "Ella come.", translation: "She eats." },
        ],
      },
      {
        condition: "Distinguishing -ar and -er endings",
        result: "The key difference: -ar uses -a- vowel (habla, hablan), -er uses -e- vowel (come, comen)",
        examples: [
          { native: "habla vs come", translation: "he/she speaks vs he/she eats" },
          { native: "hablan vs comen", translation: "they speak vs they eat" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Like -ar verbs, yo always ends in -o." },
      { type: "forward-ref", content: "Regular -ir verbs share almost all -er endings except nosotros (-emos vs -imos) and vosotros (-éis vs -ís). See es-g-a1-8.", refId: "es-g-a1-8" },
    ],
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
    ],
    inlineVocab: [
      { word: "vivir", translation: "to live" },
      { word: "escribir", translation: "to write" },
      { word: "abrir", translation: "to open" },
      { word: "recibir", translation: "to receive" },
      { word: "subir", translation: "to go up / climb" },
      { word: "decidir", translation: "to decide" },
      { word: "puerta", translation: "door" },
      { word: "cartas", translation: "letters" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "vivir", forms: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"] },
        { label: "escribir", forms: ["escribo", "escribes", "escribe", "escribimos", "escribís", "escriben"] },
      ],
    },
    paradigmTable: {
      pronouns: ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos"],
      verbs: [
        { label: "-ar (hablar)", forms: ["-o", "-as", "-a", "-amos", "-áis", "-an"] },
        { label: "-er (comer)", forms: ["-o", "-es", "-e", "-emos", "-éis", "-en"] },
        { label: "-ir (vivir)", forms: ["-o", "-es", "-e", "-imos", "-ís", "-en"] },
      ],
    },
    rules: [
      {
        condition: "-ir vs -er",
        result: "Only nosotros (-imos not -emos) and vosotros (-ís not -éis) differ from -er verbs",
        examples: [
          { native: "Comemos / Vivimos", translation: "We eat / We live — the nosotros distinction" },
          { native: "Coméis / Vivís", translation: "You all eat / You all live — the vosotros distinction" },
        ],
      },
      {
        condition: "Recognising -ir verbs",
        result: "Check the infinitive ends in -ir: vivir, escribir, abrir, recibir, subir, decidir",
        examples: [
          { native: "Yo vivo.", translation: "I live." },
          { native: "Yo escribo.", translation: "I write." },
          { native: "Yo abro.", translation: "I open." },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Three verb classes, but yo form always ends in -o for all of them. That's the one constant across all regular Spanish verbs." },
      { type: "forward-ref", content: "Some very common -ir verbs are stem-changing (e→i) — for example pedir, servir, repetir. Full lesson at es-g-a1-31.", refId: "es-g-a1-31" },
    ],
  },
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
    rules: [
      {
        condition: "Basic negation",
        result: "Place no directly before the conjugated verb. No other changes needed.",
        examples: [
          { native: "No hablo inglés.", translation: "I don't speak English." },
          { native: "No tengo coche.", translation: "I don't have a car." },
          { native: "No estoy bien.", translation: "I'm not well." },
        ],
      },
      {
        condition: "Double negation",
        result: "When negative words (nada, nadie, nunca, tampoco) follow the verb, keep no before the verb too",
        examples: [
          { native: "No tengo nada.", translation: "I don't have anything." },
          { native: "No viene nunca.", translation: "He never comes." },
          { native: "No habla nadie.", translation: "Nobody speaks." },
        ],
      },
      {
        condition: "Negative words before the verb",
        result: "If nunca/nada/nadie go BEFORE the verb, drop the no",
        examples: [
          { native: "Nunca como carne.", translation: "I never eat meat. (= No como carne nunca.) Both correct." },
        ],
      },
      {
        condition: "Tampoco",
        result: "Tampoco = neither/not either — used in agreement with a negative statement",
        examples: [
          { native: "No me gusta el frío. — A mí tampoco.", translation: "I don't like the cold. — Me neither." },
          { native: "No tengo coche tampoco.", translation: "I don't have a car either." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content:
          "Double negation is correct in Spanish — unlike English where \"I don't have nothing\" is wrong, \"No tengo nada\" (I don't have nothing) is perfectly standard and required.",
      },
      {
        type: "tip",
        content:
          "Nunca can go before OR after the verb: \"Nunca como carne\" = \"No como carne nunca\". Both are natural; putting nunca before is slightly more emphatic.",
      },
      {
        type: "culture",
        content:
          "\"No problem\" in Spanish is usually \"No hay problema\" or \"No pasa nada\" (nothing's happening / it's nothing). \"No hay problema\" is formal; \"No pasa nada\" is warmer and more colloquial.",
      },
    ],
    fixedPhrases: [
      { native: "No entiendo.", translation: "I don't understand.", note: "Most essential learner phrase." },
      { native: "No hay problema.", translation: "No problem.", note: "Very common reassurance." },
      { native: "No pasa nada.", translation: "It's nothing. / No worries.", note: "Casual, warm — more colloquial than no hay problema." },
      { native: "No sé.", translation: "I don't know.", note: "Simple and essential." },
      { native: "Nunca jamás.", translation: "Never ever.", note: "Emphatic — nunca + jamás together for strong emphasis." },
      { native: "Yo tampoco.", translation: "Me neither.", note: "Agreeing with a negative — very common in conversation." },
    ],
    examples: [
      { native: "No hablo inglés.", translation: "I don't speak English." },
      { native: "No estoy cansado.", translation: "I'm not tired." },
      { native: "No tengo hermanos.", translation: "I don't have any siblings." },
      { native: "No como carne nunca.", translation: "I never eat meat." },
      { native: "No hay nada en la nevera.", translation: "There's nothing in the fridge." },
    ],
    inlineVocab: [
      { word: "inglés", translation: "English" },
      { word: "cansado", translation: "tired" },
      { word: "coche", translation: "car" },
      { word: "hermanos", translation: "siblings / brothers" },
      { word: "carne", translation: "meat" },
      { word: "nevera", translation: "fridge" },
      { word: "trabajo", translation: "work" },
    ],
  },
]
