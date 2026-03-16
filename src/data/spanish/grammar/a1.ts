// Spanish A1 grammar lessons.
// data/spanish/grammar/a1.ts
import { GrammarLesson } from "../../../types"

export const a1Grammar: GrammarLesson[] = [
    {
        id: "es-g-a1-1",
        level: "A1",
        title: "Subject Pronouns",
        explanation: "Spanish subject pronouns identify who performs the action. Unlike English, they are often omitted because verb endings already show the subject — but they are used for emphasis or clarity. There are two 'you' forms: tú (informal) and usted (formal).",
        examples: [
            { native: "Yo hablo español.", translation: "I speak Spanish." },
            { native: "Tú eres estudiante.", translation: "You are a student. (informal)" },
            { native: "Él trabaja aquí.", translation: "He works here." },
            { native: "Nosotros vivimos en Madrid.", translation: "We live in Madrid." },
            { native: "Ellos son amigos.", translation: "They are friends." },
        ]
    },
    {
        id: "es-g-a1-2",
        level: "A1",
        title: "Ser & Estar — Two Ways to Say 'To Be'",
        explanation: "Spanish has two verbs for 'to be'. SER is used for permanent or defining traits: identity, origin, profession, and relationships. ESTAR is used for temporary or changeable states: location, emotions, and conditions. Getting this right is the key challenge of A1 Spanish.",
        examples: [
            { native: "Soy médico.", translation: "I am a doctor. (profession → ser)" },
            { native: "Soy de México.", translation: "I am from Mexico. (origin → ser)" },
            { native: "Estoy cansado.", translation: "I am tired. (temporary state → estar)" },
            { native: "El café está caliente.", translation: "The coffee is hot. (condition → estar)" },
            { native: "Madrid está en España.", translation: "Madrid is in Spain. (location → estar)" },
        ]
    },
    {
        id: "es-g-a1-3",
        level: "A1",
        title: "Present Tense: Regular -ar Verbs",
        explanation: "Regular -ar verbs are the most common group in Spanish. Remove -ar from the infinitive and add the ending that matches the subject: -o, -as, -a, -amos, -áis, -an. This pattern applies to hundreds of verbs.",
        examples: [
            { native: "Yo hablo.", translation: "I speak." },
            { native: "Tú trabajas.", translation: "You work." },
            { native: "Ella estudia.", translation: "She studies." },
            { native: "Nosotros cantamos.", translation: "We sing." },
            { native: "Ellos escuchan.", translation: "They listen." },
        ]
    },
    {
        id: "es-g-a1-4",
        level: "A1",
        title: "Articles & Noun Gender",
        explanation: "Every Spanish noun has a grammatical gender — masculine or feminine. The definite articles are el (m. sg.), la (f. sg.), los (m. pl.), las (f. pl.). Indefinite articles: un, una, unos, unas. Nouns ending in -o are usually masculine; nouns ending in -a are usually feminine.",
        examples: [
            { native: "el libro / los libros", translation: "the book / the books (masc.)" },
            { native: "la casa / las casas", translation: "the house / the houses (fem.)" },
            { native: "un estudiante", translation: "a student (masc.)" },
            { native: "una profesora", translation: "a teacher (fem.)" },
        ]
    },
    {
        id: "es-g-a1-5",
        level: "A1",
        title: "Negation & Question Formation",
        explanation: "To negate a verb, place 'no' directly before it — no other words needed. To ask a yes/no question, raise intonation or invert subject and verb. For information questions, use question words (¿qué?, ¿dónde?, ¿quién?, ¿cuándo?, ¿cómo?, ¿cuánto?). Spanish uses an opening inverted mark ¿ before every question.",
        examples: [
            { native: "No hablo inglés.", translation: "I don't speak English." },
            { native: "¿Hablas español?", translation: "Do you speak Spanish?" },
            { native: "¿Dónde vives?", translation: "Where do you live?" },
            { native: "¿Qué es esto?", translation: "What is this?" },
            { native: "¿Cuántos años tienes?", translation: "How old are you?" },
        ]
    },
    {
        id: "es-g-a1-6",
        level: "A1",
        title: "Numbers & Telling Time",
        explanation: "Numbers 0–100: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez; 11–15: once, doce, trece, catorce, quince; 16–19: dieciséis–diecinueve; 20: veinte; 30: treinta; 100: cien. To tell time: ¿Qué hora es? → Son las tres. (It's three.) Es la una. (It's one.) Add y media (half past) or y cuarto (quarter past).",
        examples: [
            { native: "Son las tres.", translation: "It's three o'clock." },
            { native: "Es la una y media.", translation: "It's half past one." },
            { native: "Son las dos y cuarto.", translation: "It's quarter past two." },
            { native: "Tengo veinte años.", translation: "I am twenty years old." },
        ]
    },
    {
        id: "es-g-a1-7",
        level: "A1",
        title: "Present Tense: Regular -er Verbs",
        explanation: "Regular -er verbs follow their own conjugation pattern. Remove -er and add: -o, -es, -e, -emos, -éis, -en. Common -er verbs include comer (to eat), beber (to drink), leer (to read), and correr (to run).",
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
        explanation: "Regular -ir verbs share most endings with -er verbs, but differ in the nosotros and vosotros forms. Remove -ir and add: -o, -es, -e, -imos, -ís, -en. Common -ir verbs: vivir (to live), escribir (to write), abrir (to open), subir (to go up).",
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
        explanation: "Tener (to have) is an irregular -er verb. Its yo form is tengo. It is used to express possession, age (tener X años), and many common physical/emotional states with nouns: tener hambre (to be hungry), tener sed (to be thirsty), tener sueño (to be sleepy), tener miedo (to be afraid).",
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
        explanation: "Ir (to go) is highly irregular in the present tense and one of the most used verbs in Spanish. Its forms are: voy, vas, va, vamos, vais, van. It is always followed by 'a' when indicating a destination: voy a la tienda (I'm going to the shop).",
        examples: [
            { native: "Voy al trabajo.", translation: "I go to work. (al = a + el)" },
            { native: "¿Adónde vas?", translation: "Where are you going?" },
            { native: "Él va a la farmacia.", translation: "He goes to the pharmacy." },
            { native: "Vamos al parque.", translation: "We go to the park." },
            { native: "Ellos van a la playa.", translation: "They go to the beach." },
        ]
    },
    {
        id: "es-g-a1-11",
        level: "A1",
        title: "Adjective Agreement",
        explanation: "In Spanish, adjectives must agree with the noun they describe in both gender (masculine/feminine) and number (singular/plural). Most adjectives ending in -o change to -a for feminine, and add -s or -es for plural. Adjectives ending in -e or a consonant usually only change for plural.",
        examples: [
            { native: "un chico alto / una chica alta", translation: "a tall boy / a tall girl" },
            { native: "unos chicos altos / unas chicas altas", translation: "tall boys / tall girls" },
            { native: "el libro rojo / la manzana roja", translation: "the red book / the red apple" },
            { native: "un coche grande / una casa grande", translation: "a big car / a big house (no change)" },
        ]
    },
    {
        id: "es-g-a1-12",
        level: "A1",
        title: "Bridge: Ir a + Infinitive — Near Future",
        explanation: "To talk about plans or intentions in the near future, use the present tense of ir + a + infinitive. This is the most natural way to express future plans in everyday spoken Spanish — much more common than the simple future tense at this level.",
        examples: [
            { native: "Voy a comer pizza esta noche.", translation: "I'm going to eat pizza tonight." },
            { native: "¿Vas a estudiar mañana?", translation: "Are you going to study tomorrow?" },
            { native: "Ella va a llamar a su madre.", translation: "She is going to call her mother." },
            { native: "Vamos a visitar a los abuelos.", translation: "We are going to visit the grandparents." },
        ]
    },
    {
        id: "es-g-a1-13",
        level: "A1",
        title: "Spanish Pronunciation — Key Rules",
        explanation: `Spanish is one of the most phonetic languages in the world: you read what you write and write what you say. There are very few silent letters. A few rules cover almost every situation.

THE ALPHABET & SPECIAL CHARACTERS
The Spanish alphabet has 27 letters. Three are unique to Spanish:
  ñ (eñe)   — a different sound from n: mañana, señor, niño
  ll         — historically a separate letter; now sounds like y in most regions
  rr         — a strong trilled r: perro (dog) vs pero (but)

KEY PRONUNCIATION RULES

The letter H is always silent: hola, hablar, hotel → the h is never pronounced.

The letters B and V sound identical in Spanish — both like a soft English b: bien, voy.

The letter J sounds like a strong English h: Jorge, jardín, viaje.

G before e or i sounds like the Spanish j (strong h): general, gigante.
G before a, o, u sounds like English g: gato, gordo, agua.

The letter C:
  Before a, o, u → hard k sound: cama, cosa, Cuba
  Before e, i    → in Spain: th sound (cena, ciudad)
                 → in Latin America: s sound (same words)

The letter Z:
  In Spain → th sound: zapato, zona
  In Latin America → s sound: same words

STRESS RULES
Words ending in a vowel, n, or s: stress falls on the second-to-last syllable (casa, hablan, comes).
Words ending in any other consonant: stress falls on the last syllable (hablar, ciudad).
Written accents (á, é, í, ó, ú) always override these rules: café, médico, está.`,
        examples: [
            { native: "hola, hotel, hablar", translation: "H is always silent — never pronounced" },
            { native: "pero (but) vs perro (dog)", translation: "Single r vs double rr — a key distinction" },
            { native: "general, Jorge", translation: "G/J before e/i → strong h sound" },
            { native: "cena (Spain: 'thena' / Latin America: 'sena')", translation: "C before e/i — regional difference" },
            { native: "médico, está, café", translation: "Written accent overrides the default stress rule" },
        ]
    },
]
