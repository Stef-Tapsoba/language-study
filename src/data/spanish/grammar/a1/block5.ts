import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
  {
    id: "es-g-a1-24",
    level: "A1",
    title: "Demonstrative Adjectives",
    explanation: `Demonstrative adjectives point out specific nouns. Spanish has three sets based on distance from the speaker — see the table below.

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
    paradigmTable: {
      pronouns: ["masculine singular", "feminine singular", "masculine plural", "feminine plural"],
      verbs: [
        { label: "este — this (near me)", forms: ["este", "esta", "estos", "estas"] },
        { label: "ese — that (near you / neutral)", forms: ["ese", "esa", "esos", "esas"] },
        { label: "aquel — that (over there, distant)", forms: ["aquel", "aquella", "aquellos", "aquellas"] },
      ],
    },
    rules: [
      {
        condition: "Pointing to something near the speaker",
        result: "Use este / esta / estos / estas",
        examples: [
          { native: "este libro", translation: "this book" },
          { native: "esta mesa", translation: "this table" },
          { native: "estos zapatos", translation: "these shoes" },
        ],
      },
      {
        condition: "Pointing to something near the listener or at a vague distance",
        result: "Use ese / esa / esos / esas",
        examples: [
          { native: "ese señor", translation: "that man" },
          { native: "esa camisa", translation: "that shirt" },
          { native: "esos estudiantes", translation: "those students" },
        ],
      },
      {
        condition: "Pointing to something far away from both speaker and listener",
        result: "Use aquel / aquella / aquellos / aquellas",
        examples: [
          { native: "aquel edificio", translation: "that building over there" },
          { native: "aquella montaña", translation: "that mountain in the distance" },
        ],
      },
      {
        condition: "Using a demonstrative without a noun",
        result: "The demonstrative becomes a pronoun — same form, no noun follows",
        examples: [
          { native: "¿Qué es esto?", translation: "What is this?" },
          { native: "Quiero ése.", translation: "I want that one." },
          { native: "¿Cuánto cuesta aquélla?", translation: "How much is that one over there?" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The three-distance system (here / there / over there) maps to the three persons in Spanish: este (near me = yo), ese (near you = tú), aquel (away from both = él/ella).",
      },
      {
        type: "culture",
        content: "In everyday speech, the distinction between ese and aquel is often collapsed — ese is used for both \"near you\" and \"far away\". Only aquel is distinctly \"far in the distance\" or \"in the past\".",
      },
    ],
    fixedPhrases: [
      { native: "¿Qué es esto?", translation: "What is this?", note: "Neutral form — use when you don't know the gender of the object." },
      { native: "¿Cuánto cuesta ese/esa?", translation: "How much does that one cost?", note: "Essential shopping phrase." },
    ],
    examples: [
      { native: "¿Cuánto cuesta este libro?", translation: "How much does this book cost?" },
      { native: "Quiero esa camisa, por favor.", translation: "I'd like that shirt, please." },
      { native: "Estas manzanas son deliciosas.", translation: "These apples are delicious." },
      { native: "¿Qué es esto?", translation: "What is this?" },
      { native: "Aquel edificio es muy antiguo.", translation: "That building (over there) is very old." },
    ],
    inlineVocab: [
      { word: "libro", translation: "book" },
      { word: "camisa", translation: "shirt" },
      { word: "manzanas", translation: "apples" },
      { word: "deliciosas", translation: "delicious" },
      { word: "edificio", translation: "building" },
      { word: "antiguo", translation: "old / ancient" },
      { word: "zapatos", translation: "shoes" },
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

See the Reflexive Verbs lesson.

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
        result: "use the él/ella present form (= drop -as from tú)",
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
        result: "yo form − o + e (for -ar) or + a (for -er/-ir)",
        examples: [
          { native: "hablo → hable", translation: "Speak! (formal)" },
          { native: "como → coma", translation: "Eat! (formal)" },
          { native: "escribo → escriba", translation: "Write! (formal)" },
        ],
      },
      {
        condition: "Negative imperative (tú)",
        result: "no + subjunctive form (learn as fixed patterns at A1)",
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
    id: "es-g-a1-35",
    level: "A1",
    title: "Direct Object Pronouns — lo, la, los, las",
    explanation: `A direct object is the noun that directly receives the action of the verb.
Direct object pronouns replace that noun so you don't have to repeat it.

¿Tienes el libro?  →  Sí, lo tengo.
Do you have the book?  →  Yes, I have it.

The four forms (lo / la / los / las) match the gender and number of the noun they replace — see the table below.

POSITION — place the pronoun BEFORE the conjugated verb:
  Tengo el café.        →  Lo tengo.        (I have it.)
  Veo a María.          →  La veo.          (I see her.)
  ¿Compras los libros?  →  ¿Los compras?    (Are you buying them?)
  Comemos las tapas.    →  Las comemos.     (We eat them.)

WITH INFINITIVES — two equally correct options:
  Quiero comerlo.   =   Lo quiero comer.    (I want to eat it.)
  Voy a hacerlo.    =   Lo voy a hacer.     (I'm going to do it.)
  The pronoun attaches to the infinitive OR goes before the first verb.

WITH COMMANDS — attach to affirmative; place before negative:
  ¡Cómelo!           Eat it!
  ¡No lo comas!      Don't eat it!
  Ponlo aquí.        Put it here.
  No lo pongas ahí.  Don't put it there.`,
    paradigmTable: {
      pronouns: ["masculine singular", "feminine singular", "masculine plural", "feminine plural"],
      verbs: [
        { label: "direct object pronoun", forms: ["lo", "la", "los", "las"] },
        { label: "English equivalent", forms: ["it / him", "it / her", "them (m.)", "them (f.)"] },
      ],
    },
    rules: [
      {
        condition: "Replacing a masculine singular direct object",
        result: "Use lo",
        examples: [
          { native: "¿Tienes el libro? — Sí, lo tengo.", translation: "Do you have the book? — Yes, I have it." },
          { native: "¿Ves a Juan? — Sí, lo veo.", translation: "Do you see Juan? — Yes, I see him." },
        ],
      },
      {
        condition: "Replacing a feminine singular direct object",
        result: "Use la",
        examples: [
          { native: "¿Tienes la llave? — Sí, la tengo.", translation: "Do you have the key? — Yes, I have it." },
          { native: "Veo a María todos los días. — La veo todos los días.", translation: "I see María every day. — I see her every day." },
        ],
      },
      {
        condition: "Replacing a plural direct object",
        result: "Use los (masc.) or las (fem.)",
        examples: [
          { native: "¿Compras los libros? — Sí, los compro.", translation: "Are you buying the books? — Yes, I'm buying them." },
          { native: "¿Comemos las tapas? — Sí, las comemos.", translation: "Are we eating the tapas? — Yes, we're eating them." },
        ],
      },
      {
        condition: "Position with a conjugated verb",
        result: "Pronoun goes BEFORE the conjugated verb",
        examples: [
          { native: "Lo tengo.", translation: "I have it." },
          { native: "La veo.", translation: "I see her/it." },
          { native: "Los compro.", translation: "I'm buying them." },
        ],
      },
      {
        condition: "Position with infinitive",
        result: "attach to infinitive OR go before conjugated verb",
        examples: [
          { native: "Quiero comerlo. = Lo quiero comer.", translation: "I want to eat it. (both correct)" },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "Direct object pronouns go BEFORE the conjugated verb in Spanish — the opposite of English. Not \"Tengo lo\" but \"Lo tengo.\"",
      },
      {
        type: "tip",
        content: "With commands, attach the pronoun to the end of affirmative imperatives: ¡Cómelo! But for negative: ¡No lo comas! (pronoun before the verb).",
      },
      {
        type: "forward-ref",
        content: "Indirect object pronouns (me, te, le, nos, os, les) work on a similar principle and are introduced at A2.",
        refId: "es-g-a2-01",
      },
    ],
    examples: [
      { native: "¿Tienes el libro? — Sí, lo tengo.", translation: "Do you have the book? — Yes, I have it." },
      { native: "Veo a Carmen todos los días. La veo todos los días.", translation: "I see Carmen every day. I see her every day." },
      { native: "¿Comes el pan? — Sí, lo como.", translation: "Do you eat the bread? — Yes, I eat it." },
      { native: "Quiero comerlo. / Lo quiero comer.", translation: "I want to eat it. (both forms correct)" },
      { native: "¡Cómelo! / ¡No lo comas!", translation: "Eat it! / Don't eat it!" },
      { native: "¿Las tapas? Las pedimos ahora.", translation: "The tapas? We're ordering them now." },
    ],
    inlineVocab: [
      { word: "libro", translation: "book" },
      { word: "tapas", translation: "tapas (Spanish snacks)" },
      { word: "pan", translation: "bread" },
      { word: "poner", translation: "to put / place" },
      { word: "pedir", translation: "to order / to ask for" },
      { word: "ahí", translation: "there" },
    ],
  },
  {
    id: "es-g-a1-28",
    level: "A1",
    title: "Ser vs Estar — Adjectives That Change Meaning",
    explanation: `Some Spanish adjectives mean something different depending on whether they follow ser or estar. The table below shows the four most important pairs at A1.`,
    paradigmTable: {
      pronouns: ["Adjective", "With ser", "With estar"],
      verbs: [
        { label: "aburrido/a", forms: ["boring (personality)", "bored (right now)"] },
        { label: "malo/a", forms: ["bad / evil (character)", "ill / sick (condition)"] },
        { label: "bueno/a", forms: ["good (personality)", "tasty / feeling well"] },
        { label: "listo/a", forms: ["clever / smart", "ready"] },
        { label: "rico/a", forms: ["rich / wealthy", "delicious (food)"] },
      ],
    },
    rules: [
      {
        condition: "Adjective that changes meaning with ser vs estar",
        result: "nature/defining trait → ser · current state → estar",
        examples: [
          { native: "Es aburrido. / Estoy aburrido.", translation: "He's boring (personality). / I'm bored (right now)." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Nature → ser. Temporary state → estar. Run this test for every meaning-changing adjective.",
      },
      {
        type: "culture",
        content: "\"Está buenísimo\" (estar) = this tastes amazing. \"Es bueno\" (ser) = it's generically good. The verb choice changes the whole meaning.",
      },
      {
        type: "forward-ref",
        content: "This lesson builds on the core ser/estar distinction from 'Ser & Estar — Two Ways to Say To Be'.",
        refId: "es-g-a1-2",
      },
    ],
    examples: [
      { native: "Esta película es muy aburrida.", translation: "This film is very boring. (ser — personality)" },
      { native: "Estoy aburrida en casa.", translation: "I am bored at home. (estar — feeling right now)" },
      { native: "Mi madre está mala hoy.", translation: "My mother is ill today. (estar — condition)" },
      { native: "¿Estás listo para salir?", translation: "Are you ready to go out? (estar — readiness)" },
      { native: "Es una chica muy lista.", translation: "She is a very clever girl. (ser — personality)" },
      { native: "Este postre está riquísimo.", translation: "This dessert is delicious. (estar — taste)" },
    ],
    inlineVocab: [
      { word: "película", translation: "film / movie" },
      { word: "aburrido", translation: "boring / bored" },
      { word: "madre", translation: "mother" },
      { word: "listo", translation: "clever / ready" },
      { word: "postre", translation: "dessert" },
      { word: "rico", translation: "rich / delicious" },
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
  Knowing facts / information:
    Sé tu número de teléfono.    I know your phone number.
    ¿Sabes la respuesta?         Do you know the answer?
    No sé dónde está.            I don't know where it is.

  Knowing how to do something (saber + infinitive):
    Sé nadar.                    I know how to swim.
    ¿Sabes hablar chino?         Do you know how to speak Chinese?

  Knowing learned/factual information:
    Sé que tienes razón.         I know (that) you are right.
    ¿Sabes qué hora es?          Do you know what time it is?

CONOCER — being acquainted with people and places
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
    id: "es-g-a1-32",
    level: "A1",
    title: "Stressed Pronouns — Mí, Ti, Él, Ella...",
    explanation: `Stressed pronouns (pronombres tónicos / pronombres preposicionales) are used after prepositions and for emphasis. They are different from subject pronouns (yo, tú, él...) and appear constantly in everyday Spanish.

Only yo→mí and tú→ti change form. All other stressed pronouns are identical to the subject pronouns. Mí has a written accent to distinguish it from mi (my — possessive). Ti never has an accent.

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
  See 'Possessive Adjectives' for the full possessives system.

5. TAMBIÉN / TAMPOCO — me too / me neither:
  Yo también.       Me too.
  Yo tampoco.       Me neither.`,
    paradigmTable: {
      pronouns: ["subject pronoun", "stressed pronoun", "use"],
      verbs: [
        { label: "yo", forms: ["yo", "mí", "para mí, sin mí, a mí"] },
        { label: "tú", forms: ["tú", "ti", "para ti, sin ti, a ti"] },
        { label: "él", forms: ["él", "él", "para él, con él (same form)"] },
        { label: "ella", forms: ["ella", "ella", "para ella (same form)"] },
        { label: "usted", forms: ["usted", "usted", "para usted (same form)"] },
        { label: "nosotros", forms: ["nosotros", "nosotros", "entre nosotros (same form)"] },
        { label: "ellos / ellas", forms: ["ellos/ellas", "ellos/ellas", "para ellos (same form)"] },
      ],
    },
    notes: [
      {
        type: "warning",
        content: "Only yo and tú change form: yo → mí, tú → ti. All other stressed pronouns are identical to the subject pronouns.",
      },
      {
        type: "warning",
        content: "Mí (stressed pronoun, \"me\") always has a written accent. Mi (possessive, \"my\") has no accent. The accent is the only difference.",
      },
      {
        type: "tip",
        content: "The fused forms conmigo (with me), contigo (with you), consigo (with himself/herself) are fixed and must be memorised. You CANNOT say \"con mí\" or \"con ti\".",
      },
    ],
    fixedPhrases: [
      { native: "Es para ti.", translation: "It's for you.", note: "Most common use: after para." },
      { native: "¿Quieres venir conmigo?", translation: "Do you want to come with me?", note: "conmigo = con + mí (fused form)." },
      { native: "Entre tú y yo...", translation: "Between you and me...", note: "ti after con, but tú after entre (another preposition)." },
      { native: "Yo también. / Yo tampoco.", translation: "Me too. / Me neither.", note: "yo used for emphasis after también/tampoco." },
      { native: "Soy yo.", translation: "It's me.", note: "yo used after ser for identification." },
    ],
    examples: [
      { native: "Este regalo es para ti.", translation: "This gift is for you." },
      { native: "¿Quieres venir conmigo?", translation: "Do you want to come with me? (con + mí = conmigo)" },
      { native: "Lo hizo sin nosotros.", translation: "He did it without us." },
      { native: "Soy yo.", translation: "It's me." },
      { native: "Entre tú y yo...", translation: "Between you and me..." },
      { native: "¿Quién tiene hambre? — ¡Yo!", translation: "Who is hungry? — Me!" },
      { native: "Yo también quiero ir.", translation: "I want to go too." },
    ],
    inlineVocab: [
      { word: "regalo", translation: "gift / present" },
      { word: "hambre", translation: "hunger" },
      { word: "cerca", translation: "near / nearby" },
    ],
  },
]
