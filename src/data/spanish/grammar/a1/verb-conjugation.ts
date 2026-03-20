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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
]
