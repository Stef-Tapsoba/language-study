import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
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
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ustedes / ellos / ellas"],
      verbs: [
        { label: "poder (can)", forms: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"] },
        { label: "deber (should)", forms: ["debo", "debes", "debe", "debemos", "debéis", "deben"] },
        { label: "tener que (have to)", forms: ["tengo que", "tienes que", "tiene que", "tenemos que", "tenéis que", "tienen que"] },
      ],
    },
    rules: [
      {
        condition: "Expressing ability or possibility",
        result: "Use poder + infinitive",
        examples: [
          { native: "¿Puedes ayudarme?", translation: "Can you help me?" },
          { native: "No puedo venir esta noche.", translation: "I can't come tonight." },
          { native: "¿Podemos sentarnos aquí?", translation: "Can we sit here?" },
        ],
      },
      {
        condition: "Expressing moral obligation or what someone should do",
        result: "Use deber + infinitive",
        examples: [
          { native: "Debes descansar.", translation: "You should rest." },
          { native: "Debo estudiar más.", translation: "I must study more." },
          { native: "Debemos llegar a tiempo.", translation: "We should arrive on time." },
        ],
      },
      {
        condition: "Expressing concrete necessity or obligation (have to)",
        result: "Use tener que + infinitive",
        examples: [
          { native: "Tengo que trabajar mañana.", translation: "I have to work tomorrow." },
          { native: "Tienen que salir ya.", translation: "They have to leave now." },
          { native: "Tenemos que comprar leche.", translation: "We have to buy milk." },
        ],
      },
      {
        condition: "Choosing between deber and tener que",
        result: "Tener que = concrete practical necessity. Deber = moral/logical obligation (what one should do).",
        examples: [
          { native: "Tengo que pagar la factura.", translation: "I have to pay the bill — it's due." },
          { native: "Debo llamar a mi madre.", translation: "I should call my mother — moral duty." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Poder is a stem-changing verb (o→ue): puedo, puedes, puede — but podemos and podéis are regular. This pattern appears in many common verbs.",
      },
      {
        type: "tip",
        content: "The most polite way to ask for something: \"¿Puede(s) + infinitive…?\" — more polite than a direct command.",
      },
      {
        type: "forward-ref",
        content: "Poder is also a stem-changing verb. The full stem-change lesson (e→ie, o→ue, e→i patterns) is at es-g-a1-31.",
        refId: "es-g-a1-31",
      },
    ],
    fixedPhrases: [
      { native: "¿Puedes hablar más despacio?", translation: "Can you speak more slowly?", note: "The most useful request for a language learner." },
      { native: "Tengo que irme.", translation: "I have to go.", note: "Standard polite exit phrase." },
      { native: "No puedo.", translation: "I can't.", note: "Short, clear refusal." },
      { native: "Hay que + infinitive", translation: "One must / You have to", note: "Impersonal — no subject — for general obligations." },
    ],
    examples: [
      { native: "¿Puedes hablar más despacio?", translation: "Can you speak more slowly?" },
      { native: "No puedo venir esta noche.", translation: "I can't come tonight." },
      { native: "Debes llegar a tiempo.", translation: "You should arrive on time." },
      { native: "Tengo que trabajar el sábado.", translation: "I have to work on Saturday." },
      { native: "Tenemos que comprar leche.", translation: "We have to buy milk." },
    ],
    inlineVocab: [
      { word: "ayudar", translation: "to help" },
      { word: "descansar", translation: "to rest" },
      { word: "estudiar", translation: "to study" },
      { word: "trabajar", translation: "to work" },
      { word: "leche", translation: "milk" },
      { word: "sábado", translation: "Saturday" },
      { word: "tiempo", translation: "time / weather" },
    ],
  },
]
