import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
  {
    id: "es-g-a1-7",
    level: "A1",
    title: "Present Tense: Regular -er Verbs",
    explanation: `Regular -er verbs use their own set of endings. Remove -er and add the ending that matches the subject.

The same endings apply to: beber, leer, vender, correr, comprender, responder…

The key difference from -ar verbs: -er endings use an -e- vowel (comes, comen) where -ar uses -a- (habla, hablan). The yo form ends in -o for both groups.`,
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
        result: "-ar uses -a- vowel (habla) · -er uses -e- vowel (come)",
        examples: [
          { native: "habla vs come", translation: "he/she speaks vs he/she eats" },
          { native: "hablan vs comen", translation: "they speak vs they eat" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Like -ar verbs, yo always ends in -o." },
      { type: "forward-ref", content: "Regular -ir verbs share almost all -er endings except nosotros (-emos vs -imos) and vosotros (-éis vs -ís). See 'Regular -ir Verbs'.", refId: "es-g-a1-8" },
    ],
  },
  {
    id: "es-g-a1-8",
    level: "A1",
    title: "Present Tense: Regular -ir Verbs",
    explanation: `Regular -ir verbs share most endings with -er verbs but differ in just two forms: nosotros (-imos not -emos) and vosotros (-ís not -éis). All other forms are identical to -er verbs.

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
        result: "nosotros: -imos · vosotros: -ís (only these two differ)",
        examples: [
          { native: "Comemos / Vivimos", translation: "We eat / We live — the nosotros distinction" },
          { native: "Coméis / Vivís", translation: "You all eat / You all live — the vosotros distinction" },
        ],
      },
      {
        condition: "Recognising -ir verbs",
        result: "infinitive ends in -ir: vivir, escribir, abrir…",
        examples: [
          { native: "Yo vivo.", translation: "I live." },
          { native: "Yo escribo.", translation: "I write." },
          { native: "Yo abro.", translation: "I open." },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Three verb classes, but yo form always ends in -o for all of them. That's the one constant across all regular Spanish verbs." },
      { type: "forward-ref", content: "Some very common -ir verbs are stem-changing (e→i) — for example pedir, servir, repetir. Full details in 'Stem-Changing Verbs'.", refId: "es-g-a1-31" },
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
Use es la for 1:00 (singular) and son las for all other hours (plural). See the table below for all patterns.`,
    examples: [
      { native: "Son las tres.", translation: "It's three o'clock." },
      { native: "Es la una y media.", translation: "It's half past one." },
      { native: "Son las dos y cuarto.", translation: "It's quarter past two." },
      { native: "Tengo veinte años.", translation: "I am twenty years old." },
    ],
    referenceTable: {
      layout: "keyed",
      headers: ["Time", "Spanish", "Notes"],
      rows: [
        { label: "1:00", cells: ["Es la una.", "singular — es + la"] },
        { label: "2:00+", cells: ["Son las dos / tres…", "son + las + number"] },
        { label: "X:30", cells: ["Son las tres y media.", "y media = half past"] },
        { label: "X:15", cells: ["Son las cuatro y cuarto.", "y cuarto = quarter past"] },
        { label: "X:45", cells: ["Son las cinco menos cuarto.", "menos cuarto = quarter to"] },
        { label: "noon", cells: ["Es mediodía.", ""] },
        { label: "midnight", cells: ["Es medianoche.", ""] },
      ],
    },
    rules: [
      {
        condition: "Telling the time — singular vs plural",
        result: "Es la una (1:00) · Son las dos/tres… (all others)",
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
    referenceTable: {
      layout: "strip",
      headers: ["20", "30", "40", "50", "60", "70", "80", "90", "100"],
      rows: [
        { cells: ["veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa", "cien"] },
      ],
    },
    rules: [
      {
        condition: "Numbers 21-29",
        result: "ONE word: veintiuno…veintiséis (accents on 22, 23, 26)",
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
        result: "veintiún (masc.) · veintiuna (fem.) before nouns",
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
        result: "Place no directly before the verb — nothing else changes",
        examples: [
          { native: "No hablo inglés.", translation: "I don't speak English." },
          { native: "No tengo coche.", translation: "I don't have a car." },
          { native: "No estoy bien.", translation: "I'm not well." },
        ],
      },
      {
        condition: "Double negation",
        result: "keep no before the verb even with nada/nadie/nunca",
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
        result: "tampoco = neither/not either (agreeing with a negative)",
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
  {
    id: "es-g-a1-15",
    level: "A1",
    title: "Possessive Adjectives",
    explanation: `Possessive adjectives show who something belongs to. They agree in number with the noun they describe — not with the owner.

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
    paradigmTable: {
      pronouns: ["Owner", "Singular noun", "Plural noun"],
      verbs: [
        { label: "yo (I)", forms: ["yo", "mi", "mis"] },
        { label: "tú (you)", forms: ["tú", "tu", "tus"] },
        { label: "él / ella / usted", forms: ["él/ella/usted", "su", "sus"] },
        { label: "nosotros", forms: ["nosotros", "nuestro / nuestra", "nuestros / nuestras"] },
        { label: "vosotros", forms: ["vosotros", "vuestro / vuestra", "vuestros / vuestras"] },
        { label: "ellos / ustedes", forms: ["ellos/ustedes", "su", "sus"] },
      ],
    },
    rules: [
      {
        condition: "Possessives agree with the thing owned, not the owner",
        result: "agree with the NOUN owned, not the owner",
        examples: [
          { native: "mi hermano / mi hermana", translation: "my brother / my sister", annotation: "both use mi — possessive agrees with the noun count, not the owner's gender" },
          { native: "mis hermanos", translation: "my brothers / siblings (plural)" },
        ],
      },
      {
        condition: "Nuestro / vuestro for mixed or masculine plural",
        result: "Use -o for masculine, -a for feminine",
        examples: [
          { native: "nuestro padre / nuestra madre", translation: "our father / our mother" },
          { native: "nuestros hijos / nuestras hijas", translation: "our sons / our daughters" },
        ],
      },
      {
        condition: "Su is ambiguous",
        result: "context usually clarifies; use de él/de ella/de usted to be explicit",
        examples: [
          { native: "su casa → la casa de él", translation: "his house" },
          { native: "la casa de ella", translation: "her house" },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "Unlike English, Spanish possessives do NOT use an apostrophe. \"María's book\" = el libro de María — always use de + owner for possession with a name.",
      },
      {
        type: "tip",
        content: "Mi and tu have no accent mark. Mí (accent) = the stressed pronoun \"me\" (for me). Tú (accent) = the subject pronoun \"you\". Tu (no accent) = your (possessive). Context and accent make the difference.",
      },
    ],
    fixedPhrases: [
      { native: "mi madre / mi padre", translation: "my mother / my father", note: "No article needed with possessives." },
      { native: "Nuestros hijos viven en Madrid.", translation: "Our children live in Madrid.", note: "nuestro agrees with hijos (masc. pl.)." },
      { native: "¿Cómo se llama tu hermano?", translation: "What is your brother's name?", note: "Very common conversation opener." },
    ],
    examples: [
      { native: "mi madre y mi padre", translation: "my mother and my father" },
      { native: "¿Cómo se llama tu hermano?", translation: "What is your brother's name?" },
      { native: "Nuestros hijos viven en Madrid.", translation: "Our children live in Madrid." },
      { native: "Su casa es muy grande.", translation: "His/her/their house is very big." },
      { native: "¿Dónde están tus llaves?", translation: "Where are your keys?" },
    ],
    inlineVocab: [
      { word: "madre", translation: "mother" },
      { word: "padre", translation: "father" },
      { word: "hermano", translation: "brother" },
      { word: "hermano", translation: "brother" },
      { word: "hijos", translation: "children / sons" },
      { word: "llaves", translation: "keys" },
      { word: "casa", translation: "house" },
    ],
  },
  {
    id: "es-g-a1-22",
    level: "A1",
    title: "Gustar — Expressing Likes & Dislikes",
    explanation: `Gustar does not work like a normal verb. The thing you like is the grammatical subject, and the person who likes it is an indirect object.

STRUCTURE: (indirect object pronoun) + gustar + thing liked

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
    paradigmTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros", "vosotros", "ustedes / ellos"],
      verbs: [
        { label: "gusta (singular / infinitive)", forms: ["me gusta", "te gusta", "le gusta", "nos gusta", "os gusta", "les gusta"] },
        { label: "gustan (plural)", forms: ["me gustan", "te gustan", "le gustan", "nos gustan", "os gustan", "les gustan"] },
      ],
    },
    rules: [
      {
        condition: "Liking a single thing or an infinitive",
        result: "Use gusta (singular)",
        examples: [
          { native: "Me gusta el café.", translation: "I like coffee." },
          { native: "Me gusta bailar.", translation: "I like dancing." },
          { native: "¿Te gusta la música?", translation: "Do you like music?" },
        ],
      },
      {
        condition: "Liking multiple things (plural noun)",
        result: "Use gustan (plural)",
        examples: [
          { native: "Me gustan los libros.", translation: "I like books." },
          { native: "Le gustan las tapas.", translation: "He/she likes tapas." },
          { native: "Nos gustan los deportes.", translation: "We like sports." },
        ],
      },
      {
        condition: "Asking what someone likes",
        result: "Use ¿Te gusta…? or ¿Qué te gusta…?",
        examples: [
          { native: "¿Te gusta el fútbol?", translation: "Do you like football?" },
          { native: "¿Qué te gusta hacer?", translation: "What do you like to do?" },
        ],
      },
      {
        condition: "Clarifying who likes something (when le/les is ambiguous)",
        result: "Add a + person before the indirect object pronoun",
        examples: [
          { native: "A María le gusta.", translation: "María likes it." },
          { native: "A ellos les gusta.", translation: "They like it." },
          { native: "A mí me gusta mucho.", translation: "I like it a lot." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "The most common gustar mistake: using it like a regular verb. Do NOT say \"Yo gusto el café.\" The thing is the subject — say \"Me gusta el café.\" (Coffee pleases me.)",
      },
      {
        type: "tip",
        content: "Me encanta (I love it) and me encanta + infinitive work exactly like me gusta — but stronger. Me encanta viajar. No me gusta nada el frío. (I don't like the cold at all.)",
      },
      {
        type: "tip",
        content: "To disagree or agree with someone's likes: \"A mí también.\" (Me too.) \"A mí tampoco.\" (Me neither.) \"A mí no.\" (Not me.) \"A mí sí.\" (I do / I like it.)",
      },
    ],
    fixedPhrases: [
      { native: "Me gusta mucho.", translation: "I like it a lot.", note: "Adding mucho strengthens gusta." },
      { native: "No me gusta nada.", translation: "I don't like it at all.", note: "Nada after the expression = emphatic negation." },
      { native: "Me encanta.", translation: "I love it.", note: "Stronger than gusta — for your favourite things." },
      { native: "¿Y a ti? / ¿Y a usted?", translation: "And you?", note: "Natural way to return the question after expressing a preference." },
      { native: "A mí también.", translation: "Me too.", note: "Agreeing with a like." },
      { native: "A mí tampoco.", translation: "Me neither.", note: "Agreeing with a dislike." },
    ],
    examples: [
      { native: "Me gusta el español.", translation: "I like Spanish." },
      { native: "Me gustan los libros.", translation: "I like books." },
      { native: "¿Te gusta la música?", translation: "Do you like music?" },
      { native: "No me gusta nada el frío.", translation: "I don't like the cold at all." },
      { native: "Nos encanta viajar.", translation: "We love travelling." },
    ],
    inlineVocab: [
      { word: "café", translation: "coffee" },
      { word: "tapas", translation: "tapas (Spanish snacks)" },
      { word: "música", translation: "music" },
      { word: "fútbol", translation: "football / soccer" },
      { word: "bailar", translation: "to dance" },
      { word: "frío", translation: "cold" },
      { word: "viajar", translation: "to travel" },
    ],
  },
  {
    id: "es-g-a1-10",
    level: "A1",
    title: "Ir — To Go",
    explanation: `**Ir** is highly irregular in the present tense — the forms look nothing like the infinitive.

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
    ],
    inlineVocab: [
      { word: "trabajo", translation: "work / job" },
      { word: "tienda", translation: "shop / store" },
      { word: "banco", translation: "bank" },
      { word: "farmacia", translation: "pharmacy" },
      { word: "parque", translation: "park" },
      { word: "playa", translation: "beach" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [{ label: "ir", forms: ["voy", "vas", "va", "vamos", "vais", "van"] }],
    },
    rules: [
      {
        condition: "Going somewhere",
        result: "ir + a + destination",
        examples: [
          { native: "Voy a la tienda.", translation: "I'm going to the shop." },
          { native: "Ella va al trabajo.", translation: "She's going to work." },
          { native: "¿Adónde vas?", translation: "Where are you going?" },
        ],
      },
      {
        condition: "Contraction a + el = al",
        result: "Never say 'a el' — always contract to al",
        examples: [
          { native: "Voy al banco.", translation: "I'm going to the bank." },
          { native: "Vamos al parque.", translation: "We're going to the park." },
        ],
      },
      {
        condition: "Going to a feminine place",
        result: "a + la (no contraction needed)",
        examples: [
          { native: "Voy a la farmacia.", translation: "I'm going to the pharmacy." },
          { native: "Va a la playa.", translation: "She's going to the beach." },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Ir is completely irregular — its forms look nothing like the infinitive. Memorise voy/vas/va/vamos/vais/van as a set." },
      { type: "culture", content: "¡Vamos! (Let's go!) is one of the most energetic and common Spanish expressions. Used for encouragement in sports, as an exclamation, and literally to suggest going somewhere." },
      { type: "forward-ref", content: "Ir a + infinitive forms the near future tense — one of the most common future constructions in Spanish. Covered in 'Ir a + Infinitive — Near Future'.", refId: "es-g-a1-12" },
    ],
    fixedPhrases: [
      { native: "Voy al trabajo.", translation: "I'm going to work.", note: "al = a + el — most common use." },
      { native: "¿Adónde vas?", translation: "Where are you going?", note: "adónde for destination (motion); dónde for location (static)." },
      { native: "¡Vamos!", translation: "Let's go! / Come on!", note: "Extremely common — used for encouragement and literally." },
      { native: "Va a llover.", translation: "It's going to rain.", note: "Preview of ir a + infinitive near future." },
    ],
  },
]
