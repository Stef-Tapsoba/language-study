import { GrammarLesson } from "../../../../types"

export const grammarLessons: GrammarLesson[] = [
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
    paradigmTable: {
      pronouns: ["masculine singular", "feminine singular", "masculine plural", "feminine plural"],
      verbs: [
        { label: "-o/-a adjectives", forms: ["alto", "alta", "altos", "altas"] },
        { label: "-e/-consonant (invariable for gender)", forms: ["grande", "grande", "grandes", "grandes"] },
        { label: "nationality (-és/-esa)", forms: ["inglés", "inglesa", "ingleses", "inglesas"] },
        { label: "colour (-o/-a)", forms: ["rojo", "roja", "rojos", "rojas"] },
      ],
    },
    rules: [
      {
        condition: "Adjective describing a masculine noun",
        result: "Use the -o form (if adjective has one)",
        examples: [
          { native: "un chico alto", translation: "a tall boy" },
          { native: "un coche rojo", translation: "a red car" },
          { native: "el libro nuevo", translation: "the new book" },
        ],
      },
      {
        condition: "Adjective describing a feminine noun",
        result: "Use the -a form",
        examples: [
          { native: "una chica alta", translation: "a tall girl" },
          { native: "una manzana roja", translation: "a red apple" },
          { native: "la casa nueva", translation: "the new house" },
        ],
      },
      {
        condition: "Adjective ends in -e or a consonant",
        result: "Same form for masculine and feminine — only add -s/-es for plural",
        examples: [
          { native: "un coche grande", translation: "a big car" },
          { native: "una casa grande", translation: "a big house" },
          { native: "hombres inteligentes", translation: "intelligent men" },
        ],
      },
      {
        condition: "Plural",
        result: "Add -s after vowel, -es after consonant",
        examples: [
          { native: "altos", translation: "tall (masc. pl.)" },
          { native: "grandes", translation: "big (pl.)" },
          { native: "ingleses", translation: "English (masc. pl.)" },
        ],
      },
      {
        condition: "Position of adjective",
        result: "Most adjectives go AFTER the noun. A few common ones (bueno, malo, gran, nuevo, viejo) can go before.",
        examples: [
          { native: "un libro interesante", translation: "an interesting book" },
          { native: "un buen libro", translation: "a good book" },
          { native: "una nueva idea", translation: "a new idea" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The adjective always follows the noun's gender, not the gender of the person talking about it. A man says \"Estoy cansada\" if he's a woman — but \"Estoy cansado\" if he's a man. The adjective matches the subject.",
      },
      {
        type: "warning",
        content: "Gran before a noun means \"great\" — un gran hombre (a great man). Grande after a noun means \"big\" — un hombre grande (a big man). Same word, different position, different meaning.",
      },
    ],
    examples: [
      { native: "un chico alto / una chica alta", translation: "a tall boy / a tall girl" },
      { native: "unos chicos altos / unas chicas altas", translation: "tall boys / tall girls" },
      { native: "el libro rojo / la manzana roja", translation: "the red book / the red apple" },
      { native: "un coche grande / una casa grande", translation: "a big car / a big house (no gender change)" },
    ],
    inlineVocab: [
      { word: "alto", translation: "tall" },
      { word: "chico", translation: "boy" },
      { word: "chica", translation: "girl" },
      { word: "libro", translation: "book" },
      { word: "rojo", translation: "red" },
      { word: "manzana", translation: "apple" },
      { word: "coche", translation: "car" },
      { word: "grande", translation: "big / large" },
      { word: "bueno", translation: "good" },
      { word: "malo", translation: "bad" },
    ],
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
        result: "Match the possessive to the gender and number of the NOUN, not the person",
        examples: [
          { native: "mi hermano / mi hermana", translation: "my brother / my sister (both mi — same possessive regardless of noun gender)" },
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
        result: "Su can mean his/her/your/their — context usually clarifies, but you can use 'de él/de ella/de usted' to be explicit",
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
      { word: "hijos", translation: "children / sons" },
      { word: "llaves", translation: "keys" },
      { word: "casa", translation: "house" },
    ],
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
  {
    id: "es-g-a1-35",
    level: "A1",
    title: "Direct Object Pronouns — lo, la, los, las",
    explanation: `A direct object is the noun that directly receives the action of the verb.
Direct object pronouns replace that noun so you don't have to repeat it.

¿Tienes el libro?  →  Sí, lo tengo.
Do you have the book?  →  Yes, I have it.

THE FOUR FORMS

              Singular    Plural
  Masculine:  lo          los
  Feminine:   la          las

  lo = it / him (masculine noun)    los = them (masculine)
  la = it / her (feminine noun)     las = them (feminine)

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
        result: "Attach to the end of the infinitive OR go before the conjugated verb — both are correct",
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
      { word: "poner", translation: "to put / to place" },
      { word: "pedir", translation: "to order / to ask for" },
      { word: "ahí", translation: "there" },
    ],
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
