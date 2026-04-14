import { GrammarLesson } from "../../../../types"

export const verbConjugationLessons: GrammarLesson[] = [
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
    ],
    inlineVocab: [
      { word: "coche", translation: "car" },
      { word: "perro", translation: "dog" },
      { word: "hambre", translation: "hunger" },
      { word: "sed", translation: "thirst" },
      { word: "sueño", translation: "sleepiness / dream" },
      { word: "miedo", translation: "fear" },
      { word: "frío", translation: "cold" },
      { word: "calor", translation: "heat / warmth" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [{ label: "tener", forms: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"] }],
    },
    rules: [
      {
        condition: "Possessing something",
        result: "tener + noun (with article)",
        examples: [
          { native: "Tengo un coche.", translation: "I have a car." },
          { native: "¿Tienes hermanos?", translation: "Do you have siblings?" },
        ],
      },
      {
        condition: "Stating age",
        result: "tener + number + años (not ser/estar)",
        examples: [
          { native: "Tengo veinticinco años.", translation: "I am twenty-five years old." },
          { native: "¿Cuántos años tienes?", translation: "How old are you?" },
        ],
      },
      {
        condition: "Physical/emotional states with tener",
        result: "tener + noun (not ser/estar + adjective)",
        examples: [
          { native: "Tengo hambre.", translation: "I'm hungry. (not Estoy hambriento.)" },
          { native: "Tengo frío.", translation: "I'm cold." },
          { native: "Tengo miedo.", translation: "I'm afraid." },
        ],
      },
      {
        condition: "Obligation with tener que",
        result: "tener que + infinitive = have to",
        examples: [
          { native: "Tengo que trabajar.", translation: "I have to work." },
          { native: "Tienes que estudiar.", translation: "You have to study." },
        ],
      },
    ],
    notes: [
      { type: "warning", content: "Age uses tener, not ser or estar. Never say \"Soy veinte años\" or \"Estoy veinte años\" — always \"Tengo veinte años.\"" },
      { type: "tip", content: "Many physical sensations use tener + noun in Spanish where English uses \"to be\": I'm hungry = Tengo hambre (I have hunger). I'm cold = Tengo frío (I have cold)." },
      { type: "forward-ref", content: "Tener is also a stem-changing verb (e→ie: tengo/tienes/tiene). Full stem-change lesson at es-g-a1-31.", refId: "es-g-a1-31" },
    ],
    fixedPhrases: [
      { native: "Tengo hambre.", translation: "I'm hungry.", note: "tener + noun for physical state." },
      { native: "¿Cuántos años tienes?", translation: "How old are you?", note: "Most natural way to ask age." },
      { native: "Tengo que irme.", translation: "I have to go.", note: "Tener que + infinitive for obligation." },
      { native: "No tengo ni idea.", translation: "I have no idea.", note: "ni idea is a fixed expression — 'not even an idea'." },
    ],
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
      { type: "forward-ref", content: "Ir a + infinitive forms the near future tense — one of the most common future constructions in Spanish. See es-g-a1-12.", refId: "es-g-a1-12" },
    ],
    fixedPhrases: [
      { native: "Voy al trabajo.", translation: "I'm going to work.", note: "al = a + el — most common use." },
      { native: "¿Adónde vas?", translation: "Where are you going?", note: "adónde for destination (motion); dónde for location (static)." },
      { native: "¡Vamos!", translation: "Let's go! / Come on!", note: "Extremely common — used for encouragement and literally." },
      { native: "Va a llover.", translation: "It's going to rain.", note: "Preview of ir a + infinitive near future." },
    ],
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
    ],
    inlineVocab: [
      { word: "noche", translation: "night" },
      { word: "mañana", translation: "tomorrow / morning" },
      { word: "madre", translation: "mother" },
      { word: "abuelos", translation: "grandparents" },
      { word: "viajar", translation: "to travel" },
      { word: "trabajar", translation: "to work" },
      { word: "fin de semana", translation: "weekend" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [{ label: "ir a + infinitive", forms: ["voy a…", "vas a…", "va a…", "vamos a…", "vais a…", "van a…"] }],
    },
    rules: [
      {
        condition: "Near future plan or intention",
        result: "ir (present, conjugated) + a + infinitive",
        examples: [
          { native: "Voy a comer.", translation: "I'm going to eat." },
          { native: "Ella va a estudiar.", translation: "She's going to study." },
          { native: "Vamos a viajar.", translation: "We're going to travel." },
        ],
      },
      {
        condition: "Negative near future",
        result: "No + ir conjugated + a + infinitive",
        examples: [
          { native: "No voy a trabajar mañana.", translation: "I'm not going to work tomorrow." },
          { native: "No van a venir.", translation: "They're not going to come." },
        ],
      },
      {
        condition: "Near future question",
        result: "¿Qué + ir + a + infinitive?",
        examples: [
          { native: "¿Qué vas a hacer este fin de semana?", translation: "What are you going to do this weekend?" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Ir a + infinitive is far more common than the simple future tense in everyday Spanish. Use it for all near-future plans and intentions." },
      { type: "culture", content: "\"¿Qué vas a hacer este fin de semana?\" (What are you doing this weekend?) is one of the most common questions in Spanish conversation. Master this structure and you can talk about plans naturally." },
    ],
    fixedPhrases: [
      { native: "Voy a…", translation: "I'm going to…", note: "The most useful near-future opener." },
      { native: "¿Qué vas a hacer?", translation: "What are you going to do?", note: "Essential conversation question." },
      { native: "Va a llover.", translation: "It's going to rain.", note: "Weather + near future — very common." },
      { native: "No voy a poder.", translation: "I'm not going to be able to.", note: "Polite refusal of a plan." },
    ],
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
    ],
    inlineVocab: [
      { word: "café", translation: "coffee" },
      { word: "mesa", translation: "table" },
      { word: "familia", translation: "family" },
      { word: "cine", translation: "cinema" },
      { word: "aprender", translation: "to learn" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [{ label: "querer (e→ie)", forms: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] }],
    },
    rules: [
      {
        condition: "Wanting a thing",
        result: "querer + noun",
        examples: [
          { native: "Quiero un café.", translation: "I want a coffee." },
          { native: "¿Quieres algo?", translation: "Do you want something?" },
        ],
      },
      {
        condition: "Wanting to do something",
        result: "querer + infinitive",
        examples: [
          { native: "¿Quieres comer?", translation: "Do you want to eat?" },
          { native: "Queremos ir al cine.", translation: "We want to go to the cinema." },
        ],
      },
      {
        condition: "The stem change",
        result: "e changes to ie in yo/tú/él/ellos — but NOT in nosotros/vosotros",
        examples: [
          { native: "quiero / quieres / quiere (change)", translation: "I want / you want / he wants" },
          { native: "queremos (no change)", translation: "we want" },
        ],
      },
      {
        condition: "Loving a person",
        result: "querer a + person (personal a required)",
        examples: [
          { native: "Quiero a mi familia.", translation: "I love my family." },
          { native: "¿Quieres a alguien?", translation: "Do you love someone?" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Quiero (I want) is used for ordering food and drink — it sounds direct but is perfectly natural: Quiero un café, por favor." },
      { type: "forward-ref", content: "Querer is the most common e→ie stem-changing verb. The full stem-change lesson (all three patterns) is at es-g-a1-31.", refId: "es-g-a1-31" },
    ],
    fixedPhrases: [
      { native: "Quiero un café, por favor.", translation: "I'd like a coffee, please.", note: "Natural and polite for ordering." },
      { native: "¿Qué quieres comer?", translation: "What do you want to eat?", note: "Very common at mealtimes." },
      { native: "No quiero.", translation: "I don't want to.", note: "Short, clear, very common." },
      { native: "¿Quieres…?", translation: "Do you want…? / Would you like…?", note: "Offering something to someone." },
    ],
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
    ],
    inlineVocab: [
      { word: "levantarse", translation: "to get up" },
      { word: "acostarse", translation: "to go to bed" },
      { word: "despertarse", translation: "to wake up" },
      { word: "ducharse", translation: "to shower" },
      { word: "vestirse", translation: "to get dressed" },
      { word: "tarde", translation: "late" },
      { word: "temprano", translation: "early" },
      { word: "mañana", translation: "morning" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "pronoun", forms: ["me", "te", "se", "nos", "os", "se"] },
        { label: "levantarse", forms: ["me levanto", "te levantas", "se levanta", "nos levantamos", "os levantáis", "se levantan"] },
      ],
    },
    rules: [
      {
        condition: "Forming a reflexive verb",
        result: "Add the matching reflexive pronoun BEFORE the conjugated verb",
        examples: [
          { native: "Me llamo Pablo.", translation: "My name is Pablo." },
          { native: "Te levantas tarde.", translation: "You get up late." },
          { native: "Se ducha por la mañana.", translation: "He/she showers in the morning." },
        ],
      },
      {
        condition: "Infinitive of a reflexive verb",
        result: "The infinitive ends in -se: llamarse, levantarse, ducharse",
        examples: [
          { native: "llamarse → me llamo", translation: "to be called → my name is" },
          { native: "levantarse → me levanto", translation: "to get up → I get up" },
        ],
      },
      {
        condition: "Position of reflexive pronoun with infinitive",
        result: "Attach to the end of the infinitive OR go before the conjugated verb",
        examples: [
          { native: "Quiero levantarme.", translation: "I want to get up." },
          { native: "Me quiero levantar.", translation: "I want to get up. (same meaning)" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Me llamo (My name is) is the standard way to give your name in Spanish. Literally \"I call myself.\" It's always reflexive — always me llamo, te llamas, se llama." },
      { type: "warning", content: "Acostarse and despertarse are also stem-changing. Acostarse (o→ue): me acuesto. Despertarse (e→ie): me despierto. The nosotros/vosotros forms don't change." },
      { type: "forward-ref", content: "Reflexive verbs also appear in the imperative — the pronoun attaches to the end. ¡Levántate! See es-g-a1-30.", refId: "es-g-a1-30" },
    ],
    fixedPhrases: [
      { native: "Me llamo…", translation: "My name is…", note: "The standard way to give your name." },
      { native: "¿A qué hora te levantas?", translation: "What time do you get up?", note: "Essential daily routine question." },
      { native: "Me voy.", translation: "I'm leaving.", note: "Irse (reflexive of ir) — going away." },
      { native: "¡Siéntate! / ¡Siéntese!", translation: "Sit down!", note: "Reflexive imperative — pronoun attaches." },
    ],
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
  ¡Ve!     → ¡No vayas!      Don't go!
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
    ],
    inlineVocab: [
      { word: "despacio", translation: "slowly" },
      { word: "cuidado", translation: "care / careful" },
      { word: "esperar", translation: "to wait" },
      { word: "repetir", translation: "to repeat" },
      { word: "comprar", translation: "to buy" },
      { word: "salir", translation: "to leave / go out" },
      { word: "poner", translation: "to put / place" },
      { word: "venir", translation: "to come" },
    ],
    conjugationTable: {
      pronouns: ["tú (informal)", "usted (formal)", "ustedes (formal plural / LatAm)"],
      verbs: [
        { label: "hablar (-ar)", forms: ["habla", "hable", "hablen"] },
        { label: "comer (-er)", forms: ["come", "coma", "coman"] },
        { label: "escribir (-ir)", forms: ["escribe", "escriba", "escriban"] },
        { label: "ser (irregular)", forms: ["sé", "sea", "sean"] },
        { label: "ir (irregular)", forms: ["ve", "vaya", "vayan"] },
        { label: "hacer (irregular)", forms: ["haz", "haga", "hagan"] },
        { label: "tener (irregular)", forms: ["ten", "tenga", "tengan"] },
        { label: "venir (irregular)", forms: ["ven", "venga", "vengan"] },
      ],
    },
    rules: [
      {
        condition: "Tú affirmative imperative for -ar verbs",
        result: "Use the él/ella present tense form (= remove -as from tú form)",
        examples: [
          { native: "hablar: habla", translation: "Speak!" },
          { native: "comprar: compra", translation: "Buy!" },
          { native: "escuchar: escucha", translation: "Listen!" },
        ],
      },
      {
        condition: "Tú affirmative imperative for -er/-ir verbs",
        result: "Use the él/ella present tense form",
        examples: [
          { native: "comer: come", translation: "Eat!" },
          { native: "escribir: escribe", translation: "Write!" },
          { native: "beber: bebe", translation: "Drink!" },
        ],
      },
      {
        condition: "Usted affirmative imperative",
        result: "Take the yo present, drop -o, add -e (for -ar) or -a (for -er/-ir)",
        examples: [
          { native: "hablo → hable", translation: "Speak! (formal)" },
          { native: "como → coma", translation: "Eat! (formal)" },
          { native: "escribo → escriba", translation: "Write! (formal)" },
        ],
      },
      {
        condition: "Negative imperative (tú)",
        result: "Use no + present subjunctive form (learn as fixed patterns at A1)",
        examples: [
          { native: "Habla → No hables", translation: "Speak → Don't speak!" },
          { native: "Come → No comas", translation: "Eat → Don't eat!" },
          { native: "Ve → No vayas", translation: "Go → Don't go!" },
        ],
      },
      {
        condition: "Reflexive pronouns in the imperative",
        result: "Attach to end of affirmative imperatives",
        examples: [
          { native: "¡Levántate!", translation: "Get up! (tú)" },
          { native: "¡Siéntese!", translation: "Sit down! (usted)" },
          { native: "No te levantes.", translation: "Don't get up! (negative — pronoun goes before)" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "The 8 irregular tú imperatives must be memorised — they don't follow the regular pattern: sé, ve, haz, di, ten, ven, pon, sal." },
      { type: "culture", content: "Spanish speakers use the imperative constantly in everyday life — for recipes, directions, instructions. It's much less rude than it might seem to English speakers. \"Habla más despacio\" is polite when said with a smile." },
      { type: "tip", content: "In Latin America, ustedes serves for both formal and informal plural commands (replacing vosotros). Ustedes hablen = Speak! (to a group)" },
    ],
    fixedPhrases: [
      { native: "¡Escucha! / ¡Escuche!", translation: "Listen!", note: "tú / usted — most common classroom instruction." },
      { native: "¡Habla más despacio, por favor!", translation: "Speak more slowly, please!", note: "Essential for learners." },
      { native: "¡Ten cuidado!", translation: "Be careful!", note: "Irregular tú imperative of tener." },
      { native: "¡No te preocupes!", translation: "Don't worry!", note: "Negative reflexive imperative — very common." },
      { native: "¡Vamos!", translation: "Let's go!", note: "Nosotros imperative — hugely common." },
    ],
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
    ],
    inlineVocab: [
      { word: "empezar", translation: "to begin / start" },
      { word: "pensar", translation: "to think" },
      { word: "entender", translation: "to understand" },
      { word: "poder", translation: "to be able to / can" },
      { word: "volver", translation: "to return / come back" },
      { word: "dormir", translation: "to sleep" },
      { word: "encontrar", translation: "to find / meet" },
      { word: "jugar", translation: "to play" },
      { word: "pedir", translation: "to ask for / order" },
      { word: "servir", translation: "to serve" },
      { word: "clase", translation: "class / lesson" },
      { word: "pregunta", translation: "question" },
      { word: "niños", translation: "children" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "querer (e→ie)", forms: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] },
        { label: "poder (o→ue)", forms: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"] },
        { label: "pedir (e→i)", forms: ["pido", "pides", "pide", "pedimos", "pedís", "piden"] },
        { label: "jugar (u→ue)", forms: ["juego", "juegas", "juega", "jugamos", "jugáis", "juegan"] },
      ],
    },
    rules: [
      {
        condition: "The boot/shoe pattern",
        result: "Stem changes in yo/tú/él/ellos but NEVER in nosotros/vosotros",
        examples: [
          { native: "quiero/quieres/quiere (change)", translation: "I/you/he want — stem changes" },
          { native: "queremos/queréis (no change)", translation: "we/you all want — no stem change" },
        ],
      },
      {
        condition: "e→ie verbs",
        result: "The stem vowel e changes to ie",
        examples: [
          { native: "querer: quiero", translation: "I want" },
          { native: "empezar: empiezo", translation: "I begin" },
          { native: "entender: entiendo", translation: "I understand" },
          { native: "pensar: pienso", translation: "I think" },
        ],
      },
      {
        condition: "o→ue verbs",
        result: "The stem vowel o changes to ue",
        examples: [
          { native: "poder: puedo", translation: "I can" },
          { native: "volver: vuelvo", translation: "I return" },
          { native: "dormir: duermo", translation: "I sleep" },
          { native: "encontrar: encuentro", translation: "I find" },
        ],
      },
      {
        condition: "e→i verbs (only -ir verbs)",
        result: "The stem vowel e changes to i — only applies to -ir verbs",
        examples: [
          { native: "pedir: pido", translation: "I ask for / order" },
          { native: "servir: sirvo", translation: "I serve" },
          { native: "repetir: repito", translation: "I repeat" },
        ],
      },
      {
        condition: "Nosotros/vosotros never stem-change",
        result: "This is the key rule of the boot pattern",
        examples: [
          { native: "queremos (not *querimos)", translation: "we want — no change" },
          { native: "podemos (not *puedemos)", translation: "we can — no change" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "The boot/shoe visual helps — draw a line around yo/tú/él/ellos and it looks like a boot. Everything inside the boot changes; the nosotros/vosotros forms outside don't." },
      { type: "warning", content: "The e→i pattern ONLY applies to -ir verbs. -ar and -er verbs with e in the stem change to ie (not i). Pedir (e→i) = -ir verb. Querer (e→ie) = -er verb." },
      { type: "forward-ref", content: "You've already been using several stem-changing verbs: querer (es-g-a1-16) and poder (es-g-a1-23). This lesson shows the full system.", refId: "es-g-a1-16" },
    ],
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
    ],
    inlineVocab: [
      { word: "nadar", translation: "to swim" },
      { word: "cocinar", translation: "to cook" },
      { word: "respuesta", translation: "answer" },
      { word: "número", translation: "number" },
      { word: "estación", translation: "station / season" },
      { word: "hermana", translation: "sister" },
      { word: "hermano", translation: "brother" },
      { word: "restaurante", translation: "restaurant" },
      { word: "canción", translation: "song" },
      { word: "razón", translation: "reason / right" },
    ],
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "saber (know facts/skills)", forms: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"] },
        { label: "conocer (know people/places)", forms: ["conozco", "conoces", "conoce", "conocemos", "conocéis", "conocen"] },
      ],
    },
    paradigmTable: {
      pronouns: ["saber — use for", "conocer — use for"],
      verbs: [
        { label: "facts", forms: ["knowing a fact or information", "—"] },
        { label: "skills", forms: ["knowing how to do something (+ infinitive)", "—"] },
        { label: "people", forms: ["—", "being acquainted with a person (+ personal a)"] },
        { label: "places", forms: ["—", "being familiar with a place or thing"] },
      ],
    },
    rules: [
      {
        condition: "Knowing a fact or piece of information",
        result: "Use saber",
        examples: [
          { native: "Sé tu número.", translation: "I know your number." },
          { native: "¿Sabes la respuesta?", translation: "Do you know the answer?" },
          { native: "No sé dónde está.", translation: "I don't know where it is." },
        ],
      },
      {
        condition: "Knowing how to do something",
        result: "Use saber + infinitive",
        examples: [
          { native: "Sé nadar.", translation: "I know how to swim." },
          { native: "¿Sabes cocinar?", translation: "Do you know how to cook?" },
          { native: "No sé hablar chino.", translation: "I don't know how to speak Chinese." },
        ],
      },
      {
        condition: "Knowing / being acquainted with a person",
        result: "Use conocer + personal a",
        examples: [
          { native: "Conozco a María.", translation: "I know María." },
          { native: "¿Conoces a mi hermano?", translation: "Do you know my brother?" },
        ],
      },
      {
        condition: "Being familiar with a place or thing",
        result: "Use conocer (no personal a)",
        examples: [
          { native: "Conozco Madrid muy bien.", translation: "I know Madrid very well." },
          { native: "¿Conoces este restaurante?", translation: "Do you know this restaurant?" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Quick test — can you replace \"know\" with \"know how to\" or \"know the fact that\"? → saber. Can you replace it with \"be acquainted with\" or \"have been to\"? → conocer." },
      { type: "warning", content: "Personal a is required with conocer + person: Conozco a tu hermana. But NOT with places/things: Conozco Madrid." },
      { type: "culture", content: "\"¿Me conoces?\" (Do you know me?) and \"¿Me recuerdas?\" (Do you remember me?) are common questions when running into someone you may have met before." },
    ],
    fixedPhrases: [
      { native: "No lo sé. / No sé.", translation: "I don't know.", note: "Both forms are correct — No sé is more casual." },
      { native: "Sé hablar un poco de español.", translation: "I know how to speak a little Spanish.", note: "saber + infinitive for skills." },
      { native: "Conozco a alguien que puede ayudarte.", translation: "I know someone who can help you.", note: "conocer + personal a for person." },
      { native: "¿Conoces Madrid?", translation: "Do you know Madrid?", note: "conocer for place familiarity — no personal a." },
    ],
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
  Traigo el vino — ¿tú traes el pan?   I'll bring the wine — will you bring the bread?`,
    examples: [
      { native: "Hago deporte todos los días.", translation: "I do sport every day. (hacer → hago)" },
      { native: "Salgo de casa a las ocho.", translation: "I leave home at eight. (salir → salgo)" },
      { native: "Pongo las llaves aquí siempre.", translation: "I always put the keys here. (poner → pongo)" },
      { native: "Traigo algo de comer.", translation: "I'm bringing something to eat. (traer → traigo)" },
      { native: "No oigo bien — ¿puedes repetir?", translation: "I can't hear well — can you repeat? (oír → oigo)" },
      { native: "Tengo que irme — vengo mañana.", translation: "I have to go — I'll come tomorrow. (tengo / vengo)" },
      { native: "Veo la televisión por la noche.", translation: "I watch television at night. (ver → veo)" },
    ],
    inlineVocab: [
      { word: "deporte", translation: "sport" },
      { word: "días", translation: "days" },
      { word: "casa", translation: "house / home" },
      { word: "llaves", translation: "keys" },
      { word: "pan", translation: "bread" },
      { word: "vino", translation: "wine" },
      { word: "deberes", translation: "homework" },
      { word: "televisión", translation: "television" },
      { word: "hacer", translation: "to do / make" },
      { word: "traer", translation: "to bring" },
      { word: "oír", translation: "to hear" },
    ],
    conjugationTable: {
      pronouns: ["yo (irregular)", "tú", "él / ella / usted", "nosotros / nosotras"],
      verbs: [
        { label: "hacer (do/make)", forms: ["hago", "haces", "hace", "hacemos"] },
        { label: "salir (leave/go out)", forms: ["salgo", "sales", "sale", "salimos"] },
        { label: "poner (put/place)", forms: ["pongo", "pones", "pone", "ponemos"] },
        { label: "traer (bring)", forms: ["traigo", "traes", "trae", "traemos"] },
        { label: "venir (come)", forms: ["vengo", "vienes", "viene", "venimos"] },
        { label: "tener (have)", forms: ["tengo", "tienes", "tiene", "tenemos"] },
        { label: "saber (know)", forms: ["sé", "sabes", "sabe", "sabemos"] },
        { label: "conocer (know)", forms: ["conozco", "conoces", "conoce", "conocemos"] },
        { label: "ver (see)", forms: ["veo", "ves", "ve", "vemos"] },
        { label: "dar (give)", forms: ["doy", "das", "da", "damos"] },
      ],
    },
    rules: [
      {
        condition: "Yo-go verbs",
        result: "The yo form ends in -go; all other forms are regular (or follow stem-change rules)",
        examples: [
          { native: "hago, salgo, pongo, traigo, vengo, tengo", translation: "I do, I leave, I put, I bring, I come, I have" },
        ],
      },
      {
        condition: "Using yo form in conversation",
        result: "These are the forms you produce constantly in first-person speech",
        examples: [
          { native: "Hago deporte.", translation: "I do sport." },
          { native: "Salgo a las ocho.", translation: "I leave at eight." },
          { native: "Pongo la mesa.", translation: "I set the table." },
          { native: "Traigo el vino.", translation: "I'll bring the wine." },
        ],
      },
      {
        condition: "Recognising the pattern",
        result: "If you know the yo form, you know the verb. All other forms are predictable.",
        examples: [
          { native: "tengo → tienes/tiene/tenemos", translation: "I have → you/he have/we have" },
          { native: "vengo → vienes/viene/venimos", translation: "I come → you/he come/we come" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "These verbs are among the most frequent in the entire Spanish language. Prioritise them — you'll use them constantly." },
      { type: "tip", content: "Venir and tener are BOTH yo-go AND stem-changing (e→ie): vengo but vienes/viene. The yo form is irregular; the boot-pattern forms are stem-changing." },
      { type: "culture", content: "¿Qué haces? (What are you doing? / What do you do?) is one of the most common questions in Spanish. The answer almost always involves one of these irregular yo verbs: Hago… / Salgo… / Pongo…" },
    ],
    fixedPhrases: [
      { native: "¿Qué haces?", translation: "What are you doing? / What do you do?", note: "Extremely common — hacer is the workhorse verb." },
      { native: "Salgo a las ocho.", translation: "I leave at eight.", note: "salgo is the yo form learners use constantly." },
      { native: "Traigo algo de comer.", translation: "I'll bring something to eat.", note: "traigo for offers and plans." },
      { native: "Pongo la mesa.", translation: "I set the table.", note: "Everyday domestic expression." },
      { native: "Vengo ahora.", translation: "I'm coming now.", note: "vengo — coming to where the listener is." },
    ],
  },
]
