import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
  {
    id: "es-g-a1-17",
    level: "A1",
    title: "Location Prepositions",
    explanation: `To describe where things are, use ESTAR + a location preposition. (Location always uses estar, never ser.) See the table below for all prepositions.

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
        result: "compound prepositions all require de",
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
    explanation: `Reflexive verbs express actions done to oneself. They use a reflexive pronoun that matches the subject — placed BEFORE the conjugated verb.

  Me llamo Ana.           (My name is Ana. — lit. I call myself Ana.)
  Te despiertas tarde.    (You wake up late.)
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
        result: "reflexive pronoun BEFORE the conjugated verb",
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
        result: "attach to infinitive OR go before conjugated verb",
        examples: [
          { native: "Quiero levantarme.", translation: "I want to get up." },
          { native: "Me quiero levantar.", translation: "I want to get up. (same meaning)" },
        ],
      },
    ],
    notes: [
      { type: "tip", content: "Me llamo (My name is) is the standard way to give your name in Spanish. Literally \"I call myself.\" It's always reflexive — always me llamo, te llamas, se llama." },
      { type: "warning", content: "Acostarse and despertarse are also stem-changing. Acostarse (o→ue): me acuesto. Despertarse (e→ie): me despierto. The nosotros/vosotros forms don't change." },
      { type: "forward-ref", content: "Reflexive verbs also appear in the imperative — the pronoun attaches to the end: ¡Levántate! Covered in 'The Imperative'.", refId: "es-g-a1-30" },
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
        result: "tener que = must (practical) · deber = should (moral)",
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
        content: "Poder is also a stem-changing verb (o→ue). The full system of stem changes is covered in 'Stem-Changing Verbs'.",
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
  {
    id: "es-g-a1-25",
    level: "A1",
    title: "Adverbs of Place & Time",
    explanation: `ADVERBS OF PLACE answer ¿dónde? (where?) — they describe position relative to the speaker: aquí (near me), ahí (near you), allí/allá (far away), plus cerca, lejos, dentro, fuera, arriba, abajo, enfrente. See the full table below.

ADVERBS OF TIME answer ¿cuándo? (when?) — including hoy, ayer, mañana, ahora, luego, ya, todavía, pronto, tarde, temprano, antes, después.

NOTE ON YA — three uses to know:
  Ya tengo el libro.    I already have the book.     (= already)
  ¡Ya voy!             I'm coming! / In a minute!   (= right now / imminently)
  Ya está.             That's it. / Done.            (= it's done / finished)
  Ya, ya…              Yeah, yeah… / OK, OK…        (= acknowledgement, sometimes sarcastic)
The meaning of ya shifts with context — listen for the tone.`,
    paradigmTable: {
      pronouns: ["Adverb", "Meaning", "Type"],
      verbs: [
        { label: "aquí / acá", forms: ["aquí / acá", "here (near me)", "place"] },
        { label: "ahí", forms: ["ahí", "there (near you)", "place"] },
        { label: "allí / allá", forms: ["allí / allá", "there / over there (far)", "place"] },
        { label: "cerca", forms: ["cerca", "nearby / close", "place"] },
        { label: "lejos", forms: ["lejos", "far away", "place"] },
        { label: "dentro / fuera", forms: ["dentro / fuera", "inside / outside", "place"] },
        { label: "arriba / abajo", forms: ["arriba / abajo", "up / down", "place"] },
        { label: "hoy / ayer / mañana", forms: ["hoy / ayer / mañana", "today / yesterday / tomorrow", "time"] },
        { label: "ahora / luego", forms: ["ahora / luego", "now / later then", "time"] },
        { label: "ya", forms: ["ya", "already / right now / done", "time"] },
        { label: "todavía / aún", forms: ["todavía / aún", "still / yet", "time"] },
        { label: "pronto / tarde / temprano", forms: ["pronto / tarde / temprano", "soon / late / early", "time"] },
      ],
    },
    rules: [
      {
        condition: "Three-distance system for place adverbs",
        result: "aquí (me) · ahí (you) · allí (far) — 3 distances",
        examples: [
          { native: "El libro está aquí.", translation: "The book is here." },
          { native: "Está ahí en tu mesa.", translation: "It's there on your table." },
          { native: "Está allí al fondo.", translation: "It's over there at the back." },
        ],
      },
      {
        condition: "Ya — three meanings",
        result: "ya = already · right now · done (context decides)",
        examples: [
          { native: "Ya tengo el libro.", translation: "I already have the book." },
          { native: "¡Ya voy!", translation: "I'm coming now!" },
          { native: "Ya está.", translation: "Done / finished." },
        ],
      },
      {
        condition: "Todavía vs ya no",
        result: "todavía = still continuing · ya no = no longer",
        examples: [
          { native: "Todavía estoy aquí.", translation: "I'm still here." },
          { native: "Ya no vivo allí.", translation: "I no longer live there." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Ya is one of the trickiest Spanish adverbs — it shifts meaning with context. The three core meanings are: \"already\" (past), \"right now/coming\" (present urgency), and \"done\" (completion). Tone and context make it clear.",
      },
      {
        type: "culture",
        content: "¡Ya voy! (I'm coming! / In a minute!) is heard constantly in Spanish-speaking households — usually said by someone who has been called multiple times.",
      },
    ],
    examples: [
      { native: "El libro está aquí.", translation: "The book is here." },
      { native: "¿Está lejos de aquí?", translation: "Is it far from here?" },
      { native: "Hoy tengo clase.", translation: "Today I have class." },
      { native: "Ya tengo el libro.", translation: "I already have the book." },
      { native: "¡Ya voy!", translation: "I'm coming! / In a minute! (impatient agreement)" },
      { native: "Todavía estoy aquí.", translation: "I'm still here." },
    ],
    inlineVocab: [
      { word: "libro", translation: "book" },
      { word: "clase", translation: "class / lesson" },
      { word: "arriba", translation: "up / upstairs" },
      { word: "abajo", translation: "down / downstairs" },
      { word: "dentro", translation: "inside" },
      { word: "fuera", translation: "outside" },
      { word: "ayer", translation: "yesterday" },
      { word: "pronto", translation: "soon" },
    ],
  },
  {
    id: "es-g-a1-26",
    level: "A1",
    title: "Frequency Adverbs",
    explanation: `Frequency adverbs say how often something happens. They usually go directly AFTER the conjugated verb (or before it for emphasis). See the full scale in the table below.

POSITION
  Siempre como en casa.       (I always eat at home.)
  Normalmente trabajo a las 9.(I normally work at 9.)
  A veces llueve en verano.   (It sometimes rains in summer.)
  Nunca llego tarde.          (I never arrive late.)
  No llego nunca tarde.       (I never arrive late. — no before verb is optional with nunca)

Note: nunca can go before the verb alone (no no needed) or after the verb with no before it.`,
    paradigmTable: {
      pronouns: ["Frequency", "Spanish", "Approximate %"],
      verbs: [
        { label: "always", forms: ["siempre", "always", "100%"] },
        { label: "usually", forms: ["normalmente / generalmente", "usually / normally", "80%"] },
        { label: "often", forms: ["a menudo / frecuentemente", "often / frequently", "60%"] },
        { label: "sometimes", forms: ["a veces", "sometimes", "40%"] },
        { label: "rarely", forms: ["raramente / pocas veces", "rarely / seldom", "20%"] },
        { label: "hardly ever", forms: ["casi nunca", "hardly ever", "5%"] },
        { label: "never", forms: ["nunca / jamás", "never / ever", "0%"] },
      ],
    },
    rules: [
      {
        condition: "Standard position of frequency adverbs",
        result: "After the conjugated verb (or before it for emphasis)",
        examples: [
          { native: "Siempre como en casa.", translation: "I always eat at home." },
          { native: "Normalmente trabajo a las 9.", translation: "I normally work at 9." },
          { native: "A veces llueve.", translation: "It sometimes rains." },
        ],
      },
      {
        condition: "Nunca position options",
        result: "nunca + verb OR no + verb + nunca (both correct)",
        examples: [
          { native: "Nunca como carne.", translation: "I never eat meat." },
          { native: "No como carne nunca.", translation: "I never eat meat. (both correct)" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Frequency adverbs in Spanish are very flexible in position — they can move without making the sentence wrong. The most natural position is after the verb; putting them at the start of a sentence adds emphasis.",
      },
      {
        type: "culture",
        content: "Asking frequency is one of the most natural ways to learn about someone's life: ¿Con qué frecuencia vas al gimnasio? / ¿Cuántas veces a la semana comes fuera? These questions open conversations naturally.",
      },
    ],
    fixedPhrases: [
      { native: "Siempre / A veces / Nunca", translation: "Always / Sometimes / Never", note: "The three most common frequency adverbs." },
      { native: "Normalmente trabajo de nueve a cinco.", translation: "I normally work nine to five.", note: "Most common frequency sentence structure." },
      { native: "¿Con qué frecuencia…?", translation: "How often…?", note: "Natural question for frequency." },
      { native: "Casi nunca.", translation: "Hardly ever.", note: "Useful nuanced answer." },
    ],
    examples: [
      { native: "Siempre desayuno a las ocho.", translation: "I always have breakfast at eight." },
      { native: "A veces voy al gimnasio.", translation: "I sometimes go to the gym." },
      { native: "Nunca como carne.", translation: "I never eat meat." },
      { native: "Normalmente llegamos a tiempo.", translation: "We normally arrive on time." },
      { native: "¿Con qué frecuencia vas al cine?", translation: "How often do you go to the cinema?" },
    ],
    inlineVocab: [
      { word: "desayuno", translation: "breakfast" },
      { word: "gimnasio", translation: "gym" },
      { word: "carne", translation: "meat" },
      { word: "cine", translation: "cinema" },
      { word: "verano", translation: "summer" },
      { word: "llueve", translation: "it rains" },
      { word: "tarde", translation: "late" },
    ],
  },
  {
    id: "es-g-a1-27",
    level: "A1",
    title: "Basic Connectors",
    explanation: `Connectors link words and clauses. Even with a small vocabulary, using connectors makes your Spanish sound much more natural.

COORDINATING — connect equal elements: y (and), o (or), pero (but), sino (but rather)
SUBORDINATING — introduce a dependent clause: porque (because), que (that), cuando (when), si (if), aunque (although)
SEQUENCING — order events: primero (first), después/luego (then), finalmente (finally), también (also), además (furthermore)`,
    paradigmTable: {
      pronouns: ["Connector", "Meaning", "Type"],
      verbs: [
        { label: "y / e", forms: ["y / e", "and", "coordinating (e before i/hi)"] },
        { label: "o / u", forms: ["o / u", "or", "coordinating (u before o/ho)"] },
        { label: "pero", forms: ["pero", "but", "coordinating contrast"] },
        { label: "sino", forms: ["sino", "but rather / but instead", "correcting contrast"] },
        { label: "porque", forms: ["porque", "because", "subordinating cause"] },
        { label: "que", forms: ["que", "that", "subordinating"] },
        { label: "cuando", forms: ["cuando", "when", "subordinating time"] },
        { label: "si", forms: ["si", "if", "subordinating condition"] },
        { label: "aunque", forms: ["aunque", "although / even though", "subordinating concession"] },
        { label: "primero / después / finalmente", forms: ["primero / después / finalmente", "first / then / finally", "sequencing"] },
        { label: "también / además", forms: ["también / además", "also / furthermore", "addition"] },
      ],
    },
    rules: [
      {
        condition: "Y vs e before i/hi",
        result: "Y (and) becomes e before words starting with i or hi",
        examples: [
          { native: "María e Isabel", translation: "María and Isabel" },
          { native: "Habla inglés e italiano", translation: "He speaks English and Italian (not 'y inglés' — vowel clash)" },
        ],
      },
      {
        condition: "O vs u before o/ho",
        result: "O (or) becomes u before words starting with o or ho",
        examples: [
          { native: "siete u ocho", translation: "seven or eight" },
          { native: "mujeres u hombres", translation: "women or men" },
        ],
      },
      {
        condition: "Pero vs sino",
        result: "pero = but (contrast) · sino = but rather (correction)",
        examples: [
          { native: "Es caro pero bueno.", translation: "It's expensive but good." },
          { native: "No es inglés, sino irlandés.", translation: "He's not English, but Irish. (correction — he IS Irish, not English)" },
        ],
      },
      {
        condition: "¿Por qué? vs porque",
        result: "¿Por qué? = why · porque = because",
        examples: [
          { native: "¿Por qué estudias? — Porque me gusta.", translation: "Why do you study? — Because I like it." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "Sino vs pero: use sino ONLY when correcting a false or negative statement (the sentence before must have 'no'). \"No es inglés, sino irlandés\" — correcting. \"Es caro pero bueno\" — contrasting, not correcting → use pero.",
      },
      {
        type: "tip",
        content: "y/e and o/u are the only Spanish connectors that change form based on the following word. All other connectors are invariable.",
      },
    ],
    fixedPhrases: [
      { native: "Hablo español y un poco de francés.", translation: "I speak Spanish and a little French.", note: "y connecting two things." },
      { native: "Me gusta, pero es caro.", translation: "I like it, but it's expensive.", note: "pero for contrast." },
      { native: "Estudio porque me gusta.", translation: "I study because I like it.", note: "porque for reason." },
      { native: "Primero…, después…, finalmente…", translation: "First…, then…, finally…", note: "Sequencing a narrative." },
      { native: "Si tienes tiempo, ven.", translation: "If you have time, come.", note: "si for conditions." },
      { native: "No es A, sino B.", translation: "It's not A, but B.", note: "sino for correction after negation." },
    ],
    examples: [
      { native: "Hablo español y un poco de francés.", translation: "I speak Spanish and a little French." },
      { native: "Me gusta el café, pero prefiero el té.", translation: "I like coffee, but I prefer tea." },
      { native: "Estudio mucho porque quiero aprobar.", translation: "I study a lot because I want to pass." },
      { native: "Primero desayuno, después me ducho.", translation: "First I have breakfast, then I shower." },
      { native: "Si tienes hambre, hay comida en la nevera.", translation: "If you're hungry, there's food in the fridge." },
    ],
    inlineVocab: [
      { word: "francés", translation: "French" },
      { word: "café", translation: "coffee" },
      { word: "té", translation: "tea" },
      { word: "caro", translation: "expensive" },
      { word: "aprobar", translation: "to pass (an exam)" },
      { word: "hambre", translation: "hunger" },
      { word: "comida", translation: "food / meal" },
      { word: "nevera", translation: "fridge" },
      { word: "llueve", translation: "it rains" },
    ],
  },
  {
    id: "es-g-a1-31",
    level: "A1",
    title: "Stem-Changing Verbs — e→ie, o→ue, e→i",
    explanation: `You already know that querer changes its stem vowel from e to ie in most forms. This is not a quirk unique to querer — it is a pattern shared by a large group of very common verbs. Understanding the three patterns helps you recognise and use dozens of high-frequency verbs correctly.

THE RULE — the boot / shoe pattern
Stem changes happen in all forms EXCEPT nosotros and vosotros.
Draw a line around the affected forms and it looks like a boot or shoe:
  yo, tú, él/ella, ellos/ellas → stem changes     ← inside the boot
  nosotros, vosotros           → NO stem change   ← outside the boot

PATTERN 1: e → ie
The stem vowel e changes to ie. Key verbs: querer (quiero), empezar (empiezo), pensar (pienso), entender (entiendo), venir (vengo/vienes), tener (tengo/tienes).

PATTERN 2: o → ue
The stem vowel o changes to ue. Key verbs: poder (puedo), volver (vuelvo), dormir (duermo), encontrar (encuentro). Special case: jugar (u→ue) is the only u→ue verb.

PATTERN 3: e → i (only -ir verbs)
The stem vowel e changes to i. Only applies to -ir verbs. Key verbs: pedir (pido), servir (sirvo), repetir (repito).

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
        result: "yo/tú/él/ellos change · nosotros/vosotros NEVER change",
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
      { type: "tip", content: "You've already been using several stem-changing verbs: querer and poder. This lesson shows the full system." },
    ],
  },
  {
    id: "es-g-a1-34",
    level: "A1",
    title: "Irregular Yo Forms — The 'Yo-Go' Verbs",
    explanation: `Several very common Spanish verbs have a regular present tense in all forms except yo, which ends in -go instead of the expected -o. Once you recognise this pattern, you can handle all of them confidently.

THE PATTERN — irregular yo, regular everything else
The main yo-go verbs: tener (tengo), venir (vengo), hacer (hago), salir (salgo), poner (pongo), traer (traigo), caer (caigo), oír (oigo).

Two extra irregular yo forms that don't end in -go but are equally important: saber (sé), conocer (conozco), ver (veo), dar (doy).

Note: tener and venir are ALSO stem-changing (e→ie) in other forms — covered in 'Tener' and 'Stem-Changing Verbs'. Saber and conocer are covered in 'Saber vs Conocer'.

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
        result: "yo ends in -go; all other forms are regular",
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
