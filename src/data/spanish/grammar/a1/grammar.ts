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
    examples: [
      { native: "un chico alto / una chica alta", translation: "a tall boy / a tall girl", speakText: "un chico alto, una chica alta" },
      { native: "unos chicos altos / unas chicas altas", translation: "tall boys / tall girls", speakText: "unos chicos altos, unas chicas altas" },
      { native: "el libro rojo / la manzana roja", translation: "the red book / the red apple", speakText: "el libro rojo, la manzana roja" },
      { native: "un coche grande / una casa grande", translation: "a big car / a big house (no gender change)", speakText: "un coche grande, una casa grande" },
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
]
