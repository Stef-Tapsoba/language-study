// data/spanish/units/a1.ts
import { LessonUnit } from "../../../types"

// 22 ordered A1 units for Spanish.
//
// U1–U17: original units (U7–U8 split for numbers, U9–U17 shifted accordingly)
// U18: Reflexive Verbs (new — llamarse, levantarse, acostarse)
// U19: Gustar — Likes & Dislikes (new — key Spanish structure)
// U20: Modal Verbs — Poder, Deber, Tener Que (new)
// U21: Demonstratives (new — este/ese/aquel)
// U22: Commands, Stem-Changes & Irregular Yo (new)
// U23: Ser/Estar Nuances, Hay, Saber/Conocer & Pronouns (new)
// U24: Bridge — Ir a + Infinitive (capstone — stays last as A2 bridge)

export const a1Units: LessonUnit[] = [
    {
        id: "es-a1-u1",
        level: "A1",
        order: 1,
        title: "Greetings, Pronunciation & Subject Pronouns",
        description: "Your first steps in Spanish: learn essential greetings and polite phrases, understand how Spanish pronunciation works, and meet the subject pronouns — including the tú/usted distinction that shapes every conversation.",
        grammarIds: ["es-g-a1-13", "es-g-a1-1"],
        vocabIds: [
            "es-v-a1-1", "es-v-a1-2", "es-v-a1-3", "es-v-a1-4", "es-v-a1-5",
            "es-v-a1-6", "es-v-a1-7", "es-v-a1-8", "es-v-a1-9", "es-v-a1-10",
            "es-v-a1-11", "es-v-a1-12", "es-v-a1-13", "es-v-a1-14", "es-v-a1-15"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-1-1", level: "A1", prompt: "What does '¡Hola!' mean?", options: ["Goodbye", "Hello", "Please", "Thank you"], answer: "Hello" },
            { id: "es-uq-a1-1-2", level: "A1", prompt: "How do you say 'Thank you' in Spanish?", options: ["Gracias", "Por favor", "Perdón", "Buenos días"], answer: "Gracias" },
            { id: "es-uq-a1-1-3", level: "A1", prompt: "Which subject pronoun means 'we'?", options: ["Yo", "Tú", "Nosotros", "Ellos"], answer: "Nosotros" },
            { id: "es-uq-a1-1-4", level: "A1", prompt: "When do you use 'usted' instead of 'tú'?", options: ["With close friends only", "With strangers, elders, or in formal situations", "Only in writing", "Only in Latin America"], answer: "With strangers, elders, or in formal situations", hint: "Tú = informal (friends, family). Usted = formal (strangers, elders, professional contexts). Usted conjugates like él/ella." },
            { id: "es-uq-a1-1-5", level: "A1", prompt: "What does '¡Hasta luego!' mean?", options: ["Good morning!", "See you later!", "You're welcome!", "Hello!"], answer: "See you later!" },
            { id: "es-uq-a1-1-6", level: "A1", prompt: "How do you say 'Excuse me / Sorry' in Spanish?", options: ["Gracias", "De nada", "Perdón", "Por favor"], answer: "Perdón" }
        ]
    },
    {
        id: "es-a1-u2",
        level: "A1",
        order: 2,
        title: "Ser & Estar — Identity and Location",
        description: "Master the two Spanish verbs for 'to be'. Use ser for identity and estar for states and location. Learn articles.",
        grammarIds: ["es-g-a1-2", "es-g-a1-4"],
        vocabIds: [
            "es-v-a1-16", "es-v-a1-17", "es-v-a1-18", "es-v-a1-19", "es-v-a1-20",
            "es-v-a1-21", "es-v-a1-22", "es-v-a1-23", "es-v-a1-24", "es-v-a1-25",
            "es-v-a1-26", "es-v-a1-27", "es-v-a1-28", "es-v-a1-29"
        ],
        verbIds: ["es-vb-a1-2", "es-vb-a1-3"],
        testQuestions: [
            { id: "es-uq-a1-2-1", level: "A1", prompt: "Which verb do you use for a permanent trait like profession or nationality?", options: ["estar", "tener", "ser", "ir"], answer: "ser" },
            { id: "es-uq-a1-2-2", level: "A1", prompt: "Complete: 'Madrid ___ en España.' (location)", options: ["es", "está", "tiene", "va"], answer: "está" },
            { id: "es-uq-a1-2-3", level: "A1", prompt: "Which article is used with a masculine singular noun?", options: ["la", "los", "el", "las"], answer: "el" },
            { id: "es-uq-a1-2-4", level: "A1", prompt: "Complete: 'Yo ___ de España.'", options: ["estoy", "soy", "tengo", "voy"], answer: "soy" },
            { id: "es-uq-a1-2-5", level: "A1", prompt: "Complete: '¿Dónde ___ el baño?'", options: ["es", "está", "tiene", "va"], answer: "está" },
            { id: "es-uq-a1-2-6", level: "A1", prompt: "Which article is correct for a feminine singular noun?", options: ["el", "los", "la", "las"], answer: "la" }
        ]
    },
    {
        id: "es-a1-u3",
        level: "A1",
        order: 3,
        title: "Regular -ar Verbs",
        description: "Learn the most common verb pattern in Spanish. Master present tense endings for -ar verbs.",
        grammarIds: ["es-g-a1-3"],
        vocabIds: [
            "es-v-a1-30", "es-v-a1-31", "es-v-a1-32", "es-v-a1-33", "es-v-a1-34",
            "es-v-a1-35", "es-v-a1-36", "es-v-a1-37", "es-v-a1-38", "es-v-a1-39",
            "es-v-a1-40", "es-v-a1-41"
        ],
        verbIds: ["es-vb-a1-1", "es-vb-a1-11", "es-vb-a1-12"],
        testQuestions: [
            { id: "es-uq-a1-3-1", level: "A1", prompt: "What is the 'yo' form of 'hablar'?", options: ["habla", "hablas", "hablo", "hablamos"], answer: "hablo" },
            { id: "es-uq-a1-3-2", level: "A1", prompt: "What ending do regular -ar verbs add for 'ellos/ellas'?", options: ["-o", "-as", "-a", "-an"], answer: "-an" },
            { id: "es-uq-a1-3-3", level: "A1", prompt: "What does 'trabajar' mean?", options: ["to talk", "to work", "to live", "to eat"], answer: "to work" },
            { id: "es-uq-a1-3-4", level: "A1", prompt: "Complete: 'Tú ___ (estudiar) mucho.'", options: ["estudio", "estudia", "estudias", "estudian"], answer: "estudias" },
            { id: "es-uq-a1-3-5", level: "A1", prompt: "What is the 'nosotros' form of 'hablar'?", options: ["hablo", "hablas", "habla", "hablamos"], answer: "hablamos" }
        ]
    },
    {
        id: "es-a1-u4",
        level: "A1",
        order: 4,
        title: "Tener & Adjective Agreement",
        description: "Use tener (to have) for age, possessions, and feelings. Learn how adjectives change to match the noun's gender.",
        grammarIds: ["es-g-a1-9", "es-g-a1-11"],
        vocabIds: [
            "es-v-a1-42", "es-v-a1-43", "es-v-a1-44", "es-v-a1-45", "es-v-a1-46",
            "es-v-a1-47", "es-v-a1-48", "es-v-a1-49", "es-v-a1-50", "es-v-a1-51"
        ],
        verbIds: ["es-vb-a1-4"],
        testQuestions: [
            { id: "es-uq-a1-4-1", level: "A1", prompt: "What is the 'yo' form of 'tener'?", options: ["tiene", "tienes", "tengo", "tenemos"], answer: "tengo" },
            { id: "es-uq-a1-4-2", level: "A1", prompt: "Complete: 'Ella ___ veinte años.'", options: ["tengo", "tienes", "tiene", "tenemos"], answer: "tiene" },
            { id: "es-uq-a1-4-3", level: "A1", prompt: "Which adjective form is correct for a masculine noun?", options: ["un libro roja", "un libro rojas", "un libro rojo", "un libro rojos"], answer: "un libro rojo" },
            { id: "es-uq-a1-4-4", level: "A1", prompt: "Complete: 'Mi hermana es ___ (tall, feminine).'", options: ["alto", "altos", "altas", "alta"], answer: "alta" },
            { id: "es-uq-a1-4-5", level: "A1", prompt: "What does 'tenemos hambre' mean?", options: ["We are cold", "We are happy", "We are hungry", "We are tired"], answer: "We are hungry" },
            { id: "es-uq-a1-4-6", level: "A1", prompt: "Colors are adjectives — which is correct?", options: ["un coche azula", "una coche azul", "un coche azul", "una coche azula"], answer: "un coche azul" }
        ]
    },
    {
        id: "es-a1-u5",
        level: "A1",
        order: 5,
        title: "Regular -er Verbs",
        description: "Learn the second major verb group. Master present tense endings for -er verbs like comer and beber.",
        grammarIds: ["es-g-a1-7"],
        vocabIds: [
            "es-v-a1-52", "es-v-a1-53", "es-v-a1-54", "es-v-a1-55", "es-v-a1-56",
            "es-v-a1-57", "es-v-a1-58", "es-v-a1-59", "es-v-a1-60", "es-v-a1-61"
        ],
        verbIds: ["es-vb-a1-8", "es-vb-a1-9", "es-vb-a1-14"],
        testQuestions: [
            { id: "es-uq-a1-5-1", level: "A1", prompt: "What is the 'yo' form of 'comer' (-er verb)?", options: ["come", "comes", "como", "comemos"], answer: "como" },
            { id: "es-uq-a1-5-2", level: "A1", prompt: "What ending do regular -er verbs add for 'tú'?", options: ["-o", "-es", "-e", "-emos"], answer: "-es" },
            { id: "es-uq-a1-5-3", level: "A1", prompt: "Complete: 'Nosotros ___ (beber) agua todos los días.'", options: ["bebo", "bebe", "bebemos", "beben"], answer: "bebemos" },
            { id: "es-uq-a1-5-4", level: "A1", prompt: "What does 'entender' mean?", options: ["to enter", "to understand", "to ask", "to lend"], answer: "to understand" },
            { id: "es-uq-a1-5-5", level: "A1", prompt: "What is the 'ellos' form of 'leer'?", options: ["leo", "lees", "lee", "leen"], answer: "leen" }
        ]
    },
    {
        id: "es-a1-u6",
        level: "A1",
        order: 6,
        title: "Regular -ir Verbs & Daily Routine",
        description: "Learn the third verb group (-ir verbs). Talk about where you live and your daily activities.",
        grammarIds: ["es-g-a1-8"],
        vocabIds: [
            "es-v-a1-151", "es-v-a1-152", "es-v-a1-153", "es-v-a1-154",
            "es-v-a1-155", "es-v-a1-156", "es-v-a1-157", "es-v-a1-158"
        ],
        verbIds: ["es-vb-a1-10", "es-vb-a1-15"],
        testQuestions: [
            { id: "es-uq-a1-6-1", level: "A1", prompt: "What is the 'yo' form of 'vivir' (-ir verb)?", options: ["vive", "vives", "vivo", "vivimos"], answer: "vivo" },
            { id: "es-uq-a1-6-2", level: "A1", prompt: "What ending do regular -ir verbs add for 'él/ella'?", options: ["-o", "-es", "-e", "-imos"], answer: "-e" },
            { id: "es-uq-a1-6-3", level: "A1", prompt: "Complete: 'Yo ___ (escribir) una carta.'", options: ["escribo", "escribes", "escribe", "escriben"], answer: "escribo" },
            { id: "es-uq-a1-6-4", level: "A1", prompt: "What does 'recibir' mean?", options: ["to return", "to receive", "to laugh", "to open"], answer: "to receive" },
            { id: "es-uq-a1-6-5", level: "A1", prompt: "What is the difference in the 'nosotros' ending between -er and -ir verbs?", options: ["-emos vs -imos", "-emos vs -amos", "-imos vs -amos", "They are the same"], answer: "-emos vs -imos" }
        ]
    },
    {
        id: "es-a1-u7",
        level: "A1",
        order: 7,
        title: "Numbers 1-20, Telling Time & Days of the Week",
        description: "Learn numbers 0-20, tell the time using Son las / Es la, and name the days of the week and key time expressions.",
        grammarIds: ["es-g-a1-6"],
        vocabIds: [
            // Numbers 0-20
            "es-v-a1-159", "es-v-a1-160", "es-v-a1-161", "es-v-a1-162", "es-v-a1-163",
            "es-v-a1-164", "es-v-a1-165", "es-v-a1-166", "es-v-a1-167", "es-v-a1-168",
            "es-v-a1-169", "es-v-a1-170", "es-v-a1-171", "es-v-a1-172", "es-v-a1-173",
            "es-v-a1-174", "es-v-a1-175", "es-v-a1-176", "es-v-a1-177", "es-v-a1-178",
            "es-v-a1-179",
            // Days of the week
            "es-v-a1-62", "es-v-a1-63", "es-v-a1-64", "es-v-a1-65", "es-v-a1-66",
            "es-v-a1-67", "es-v-a1-68",
            // Time expressions
            "es-v-a1-69", "es-v-a1-70", "es-v-a1-71", "es-v-a1-72", "es-v-a1-73",
            "es-v-a1-74", "es-v-a1-75", "es-v-a1-76"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-7-1", level: "A1", prompt: "How do you say 'It's three o'clock' in Spanish?", options: ["Es las tres.", "Son las tres.", "Hay tres.", "Tengo tres."], answer: "Son las tres." },
            { id: "es-uq-a1-7-2", level: "A1", prompt: "What is the Spanish word for Monday?", options: ["domingo", "martes", "lunes", "viernes"], answer: "lunes" },
            { id: "es-uq-a1-7-3", level: "A1", prompt: "What is 'quince' in Spanish?", options: ["twelve", "thirteen", "sixteen", "fifteen"], answer: "fifteen" },
            { id: "es-uq-a1-7-4", level: "A1", prompt: "How do you say 'It's half past two'?", options: ["Son las dos y cuarto.", "Es la dos y media.", "Son las dos y media.", "Son las dos menos media."], answer: "Son las dos y media." },
            { id: "es-uq-a1-7-5", level: "A1", prompt: "What does 'el fin de semana' mean?", options: ["the holiday", "the end of the month", "the weekend", "the weekday"], answer: "the weekend" },
            { id: "es-uq-a1-7-6", level: "A1", prompt: "How do you say 'I am nineteen years old'?", options: ["Tengo diecinueve años.", "Soy diecinueve años.", "Tengo diecinueve año.", "Estoy diecinueve años."], answer: "Tengo diecinueve años." }
        ]
    },
    {
        id: "es-a1-u8",
        level: "A1",
        order: 8,
        title: "Numbers 20-100, Months & Seasons",
        description: "Learn the tens from 20 to 100, master compound number rules (veintiuno, treinta y dos…), and learn the months and seasons.",
        grammarIds: ["es-g-a1-20"],
        vocabIds: [
            // Tens 20-100
            "es-v-a1-180", "es-v-a1-181", "es-v-a1-182", "es-v-a1-183",
            "es-v-a1-184", "es-v-a1-185", "es-v-a1-186", "es-v-a1-187", "es-v-a1-188",
            // Months
            "es-v-a1-77", "es-v-a1-78", "es-v-a1-79", "es-v-a1-80", "es-v-a1-81",
            "es-v-a1-82", "es-v-a1-83", "es-v-a1-84", "es-v-a1-85", "es-v-a1-86",
            "es-v-a1-87", "es-v-a1-88",
            // Seasons
            "es-v-a1-89", "es-v-a1-90", "es-v-a1-91", "es-v-a1-92"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-8-1", level: "A1", prompt: "How do you say 'thirty-two' in Spanish?", options: ["treintadós", "treinta y dos", "treintados", "treinty dos"], answer: "treinta y dos" },
            { id: "es-uq-a1-8-2", level: "A1", prompt: "How do you say 'twenty-one years old' (with noun)?", options: ["veinte y uno años", "veintiuno años", "veintiún años", "veintiuna años"], answer: "veintiún años", hint: "Veintiuno drops the -o before a masculine noun: veintiún + noun." },
            { id: "es-uq-a1-8-3", level: "A1", prompt: "What is the Spanish word for January?", options: ["julio", "junio", "enero", "febrero"], answer: "enero" },
            { id: "es-uq-a1-8-4", level: "A1", prompt: "When do you say 'ciento' instead of 'cien'?", options: ["Always", "Never — it's always cien", "Only for 100 exactly — ciento is for 101-199", "Only in formal Spanish"], answer: "Only for 100 exactly — ciento is for 101-199", hint: "Cien = exactly 100. Ciento uno = 101, ciento veinte = 120, etc." },
            { id: "es-uq-a1-8-5", level: "A1", prompt: "What is 'primavera' in English?", options: ["summer", "autumn", "winter", "spring"], answer: "spring" },
            { id: "es-uq-a1-8-6", level: "A1", prompt: "What month comes after marzo?", options: ["febrero", "abril", "mayo", "enero"], answer: "abril" }
        ]
    },
    {
        id: "es-a1-u9",
        level: "A1",
        order: 9,
        title: "Negation",
        description: "Learn to negate any Spanish sentence. Discover how Spanish double negation works — and why it's not an error.",
        grammarIds: ["es-g-a1-18"],
        vocabIds: [
            "es-v-a1-189", "es-v-a1-190", "es-v-a1-191", "es-v-a1-192", "es-v-a1-193"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-9-1", level: "A1", prompt: "How do you say 'I don't speak English'?", options: ["No hablo inglés.", "Hablo no inglés.", "No hablo no inglés.", "Hablo inglés no."], answer: "No hablo inglés." },
            { id: "es-uq-a1-9-2", level: "A1", prompt: "How do you negate 'Tengo coche'?", options: ["Tengo no coche.", "No tengo coche.", "No tengo un coche no.", "Tengo coche no."], answer: "No tengo coche." },
            { id: "es-uq-a1-9-3", level: "A1", prompt: "How do you say 'I don't have anything'?", options: ["No tengo algo.", "No tengo nada.", "Tengo nada.", "No tengo ninguno."], answer: "No tengo nada.", hint: "Spanish double negation: no before the verb + nada after. Both are required." },
            { id: "es-uq-a1-9-4", level: "A1", prompt: "What does 'nunca' mean?", options: ["always", "sometimes", "never", "often"], answer: "never" },
            { id: "es-uq-a1-9-5", level: "A1", prompt: "Translate: 'He never comes.'", options: ["Él viene nunca.", "Nunca viene.", "No viene nunca.", "Both B and C are correct."], answer: "Both B and C are correct.", hint: "Spanish allows nunca at the start without no, OR no + verb + nunca. Both are grammatically correct." },
            { id: "es-uq-a1-9-6", level: "A1", prompt: "What does 'tampoco' mean?", options: ["also / too", "neither / not either", "always", "nothing"], answer: "neither / not either" }
        ]
    },
    {
        id: "es-a1-u10",
        level: "A1",
        order: 10,
        title: "Question Formation",
        description: "Learn to ask yes/no questions and information questions in Spanish. Master the question words and understand why every Spanish question opens with ¿.",
        grammarIds: ["es-g-a1-19"],
        vocabIds: [
            "es-v-a1-194", "es-v-a1-195", "es-v-a1-196", "es-v-a1-197",
            "es-v-a1-198", "es-v-a1-199", "es-v-a1-200"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-10-1", level: "A1", prompt: "How do you ask 'Do you speak Spanish?' (yes/no question)?", options: ["Hablas español.", "¿Hablas español?", "¿Qué hablas español?", "¿Cómo hablas español?"], answer: "¿Hablas español?" },
            { id: "es-uq-a1-10-2", level: "A1", prompt: "How do you ask 'Where do you live?'", options: ["¿Cuándo vives?", "¿Quién vives?", "¿Dónde vives?", "¿Cómo vives?"], answer: "¿Dónde vives?" },
            { id: "es-uq-a1-10-3", level: "A1", prompt: "What does '¿Cuántos años tienes?' mean?", options: ["What is your name?", "Where are you from?", "How old are you?", "What do you do?"], answer: "How old are you?" },
            { id: "es-uq-a1-10-4", level: "A1", prompt: "What does '¿Por qué?' mean?", options: ["How?", "When?", "Who?", "Why?"], answer: "Why?" },
            { id: "es-uq-a1-10-5", level: "A1", prompt: "What is the question word for 'how much'?", options: ["¿cómo?", "¿cuál?", "¿cuánto?", "¿qué?"], answer: "¿cuánto?" },
            { id: "es-uq-a1-10-6", level: "A1", prompt: "How do you say 'What is this?'", options: ["¿Cómo es esto?", "¿Quién es esto?", "¿Qué es esto?", "¿Cuál es esto?"], answer: "¿Qué es esto?" }
        ]
    },
    {
        id: "es-a1-u11",
        level: "A1",
        order: 11,
        title: "Weather",
        description: "Talk about the weather using the hacer + weather expression construction.",
        grammarIds: ["es-g-a1-14"],
        vocabIds: [
            "es-v-a1-77", "es-v-a1-78", "es-v-a1-79", "es-v-a1-80"
        ],
        verbIds: ["es-vb-a1-6"],
        testQuestions: [
            { id: "es-uq-a1-11-1", level: "A1", prompt: "How do you say 'It's cold' (weather) in Spanish?", options: ["Está frío.", "Hay frío.", "Hace frío.", "Es frío."], answer: "Hace frío." },
            { id: "es-uq-a1-11-2", level: "A1", prompt: "How do you say 'In winter it is very cold'?", options: ["En invierno es muy frío.", "En invierno hay mucho frío.", "En invierno hace mucho frío.", "En invierno está mucho frío."], answer: "En invierno hace mucho frío." },
            { id: "es-uq-a1-11-3", level: "A1", prompt: "How do you say 'The weather is nice'?", options: ["Hace malo.", "Hay buen tiempo.", "Hace buen tiempo.", "Es buen tiempo."], answer: "Hace buen tiempo." },
            { id: "es-uq-a1-11-4", level: "A1", prompt: "How do you say 'It's raining'?", options: ["Hace lluvia.", "Está lloviendo / Llueve.", "Hay lluvia.", "Es lluvioso."], answer: "Está lloviendo / Llueve." },
            { id: "es-uq-a1-11-5", level: "A1", prompt: "What does 'hacer calor' mean?", options: ["to be cold", "to be windy", "to be hot", "to be cloudy"], answer: "to be hot" }
        ]
    },
    {
        id: "es-a1-u12",
        level: "A1",
        order: 12,
        title: "Family & Possessives",
        description: "Describe your family members. Learn possessive adjectives and practise ser and tener in the context of family relationships.",
        grammarIds: ["es-g-a1-15"],
        vocabIds: [
            "es-v-a1-93", "es-v-a1-94", "es-v-a1-95", "es-v-a1-96", "es-v-a1-97",
            "es-v-a1-98", "es-v-a1-99", "es-v-a1-100", "es-v-a1-101", "es-v-a1-102",
            "es-v-a1-103", "es-v-a1-104"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-12-1", level: "A1", prompt: "What does 'hermano' mean?", options: ["sister", "father", "brother", "son"], answer: "brother" },
            { id: "es-uq-a1-12-2", level: "A1", prompt: "Complete: '___ padres son de Madrid.' (our)", options: ["mi", "tu", "su", "nuestros"], answer: "nuestros" },
            { id: "es-uq-a1-12-3", level: "A1", prompt: "What is the plural of 'hijo'?", options: ["hija", "hijos", "hijas", "hijoas"], answer: "hijos" },
            { id: "es-uq-a1-12-4", level: "A1", prompt: "What does 'abuelo' mean?", options: ["uncle", "father", "grandfather", "husband"], answer: "grandfather" },
            { id: "es-uq-a1-12-5", level: "A1", prompt: "Complete: 'Yo tengo dos ___ (sisters).'", options: ["hermanos", "hermanas", "hermano", "hermana"], answer: "hermanas" },
            { id: "es-uq-a1-12-6", level: "A1", prompt: "How do you say 'my keys' (plural)?", options: ["mi llaves", "mis llaves", "su llaves", "sus llaves"], answer: "mis llaves" }
        ]
    },
    {
        id: "es-a1-u13",
        level: "A1",
        order: 13,
        title: "Food, Drink & Ordering",
        description: "Name common foods and drinks. Learn the stem-changing verb querer (e→ie) and use it to order at a café or restaurant.",
        grammarIds: ["es-g-a1-16"],
        vocabIds: [
            "es-v-a1-105", "es-v-a1-106", "es-v-a1-107", "es-v-a1-108", "es-v-a1-109",
            "es-v-a1-110", "es-v-a1-111", "es-v-a1-112", "es-v-a1-113", "es-v-a1-114",
            "es-v-a1-115", "es-v-a1-116", "es-v-a1-117", "es-v-a1-118", "es-v-a1-119",
            "es-v-a1-120", "es-v-a1-121", "es-v-a1-122", "es-v-a1-123", "es-v-a1-124",
            "es-v-a1-125"
        ],
        verbIds: ["es-vb-a1-7", "es-vb-a1-8", "es-vb-a1-9", "es-vb-a1-13"],
        testQuestions: [
            { id: "es-uq-a1-13-1", level: "A1", prompt: "What is the 'yo' form of 'querer'?", options: ["quere", "quieres", "quiero", "queremos"], answer: "quiero" },
            { id: "es-uq-a1-13-2", level: "A1", prompt: "How do you order 'a coffee, please'?", options: ["Un café, gracias.", "Quiero un café, por favor.", "Me gusta un café.", "Hay un café."], answer: "Quiero un café, por favor." },
            { id: "es-uq-a1-13-3", level: "A1", prompt: "What is the Spanish word for 'bread'?", options: ["queso", "pan", "leche", "mantequilla"], answer: "pan" },
            { id: "es-uq-a1-13-4", level: "A1", prompt: "What does '¿Qué quieres comer?' mean?", options: ["What are you eating?", "Do you want to eat?", "What do you want to eat?", "I want to eat."], answer: "What do you want to eat?" },
            { id: "es-uq-a1-13-5", level: "A1", prompt: "What is the 'ellos' form of 'querer'?", options: ["quere", "queremos", "quieres", "quieren"], answer: "quieren" },
            { id: "es-uq-a1-13-6", level: "A1", prompt: "How do you say 'We want a table for two'?", options: ["Somos una mesa para dos.", "Tenemos una mesa para dos.", "Queremos una mesa para dos.", "Estamos una mesa para dos."], answer: "Queremos una mesa para dos." }
        ]
    },
    {
        id: "es-a1-u14",
        level: "A1",
        order: 14,
        title: "Places & Getting Around — Ir",
        description: "Learn names of places in a town. Use ir (to go) to talk about where you are going.",
        grammarIds: ["es-g-a1-10"],
        vocabIds: [
            "es-v-a1-126", "es-v-a1-127", "es-v-a1-128", "es-v-a1-129", "es-v-a1-130",
            "es-v-a1-131", "es-v-a1-132", "es-v-a1-133", "es-v-a1-134", "es-v-a1-135",
            "es-v-a1-136", "es-v-a1-137"
        ],
        verbIds: ["es-vb-a1-5"],
        testQuestions: [
            { id: "es-uq-a1-14-1", level: "A1", prompt: "What is the 'yo' form of 'ir'?", options: ["va", "vas", "voy", "vamos"], answer: "voy" },
            { id: "es-uq-a1-14-2", level: "A1", prompt: "How do you say 'I'm going to school'?", options: ["Estoy a la escuela.", "Voy a la escuela.", "Soy a la escuela.", "Tengo la escuela."], answer: "Voy a la escuela." },
            { id: "es-uq-a1-14-3", level: "A1", prompt: "What does 'al' mean? (contraction of a + el)", options: ["from the", "in the", "to the (masculine)", "of the"], answer: "to the (masculine)" },
            { id: "es-uq-a1-14-4", level: "A1", prompt: "What is the Spanish word for 'hospital'?", options: ["escuela", "tienda", "hospital", "oficina"], answer: "hospital" },
            { id: "es-uq-a1-14-5", level: "A1", prompt: "Complete: 'Ellos ___ al supermercado.'", options: ["va", "voy", "van", "vamos"], answer: "van" }
        ]
    },
    {
        id: "es-a1-u15",
        level: "A1",
        order: 15,
        title: "Directions & Transport",
        description: "Give and follow directions using location prepositions. Name common modes of transport.",
        grammarIds: ["es-g-a1-17"],
        vocabIds: [
            "es-v-a1-138", "es-v-a1-139", "es-v-a1-140", "es-v-a1-141", "es-v-a1-142",
            "es-v-a1-143", "es-v-a1-144", "es-v-a1-145", "es-v-a1-146", "es-v-a1-147",
            "es-v-a1-148", "es-v-a1-149", "es-v-a1-150"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-15-1", level: "A1", prompt: "What does 'a la derecha' mean?", options: ["to the left", "straight ahead", "to the right", "behind"], answer: "to the right" },
            { id: "es-uq-a1-15-2", level: "A1", prompt: "What does 'todo recto' mean?", options: ["turn right", "stop here", "straight ahead", "turn left"], answer: "straight ahead" },
            { id: "es-uq-a1-15-3", level: "A1", prompt: "What is the Spanish word for 'bus'?", options: ["tren", "avión", "autobús", "barco"], answer: "autobús" },
            { id: "es-uq-a1-15-4", level: "A1", prompt: "How do you ask 'Where is the station?'", options: ["¿Cuándo es la estación?", "¿Dónde está la estación?", "¿Cómo es la estación?", "¿Qué es la estación?"], answer: "¿Dónde está la estación?" },
            { id: "es-uq-a1-15-5", level: "A1", prompt: "What does 'a la izquierda' mean?", options: ["to the right", "to the left", "straight ahead", "behind"], answer: "to the left" },
            { id: "es-uq-a1-15-6", level: "A1", prompt: "How do you say 'The pharmacy is next to the bank'?", options: ["La farmacia está lejos del banco.", "La farmacia está enfrente del banco.", "La farmacia está al lado del banco.", "La farmacia está detrás del banco."], answer: "La farmacia está al lado del banco." }
        ]
    },
    {
        id: "es-a1-u16",
        level: "A1",
        order: 16,
        title: "Describing People & Things — Review",
        description: "Pull together ser, estar, tener, and adjective agreement to describe yourself and others.",
        grammarIds: [],
        vocabIds: [
            "es-v-a1-30", "es-v-a1-31", "es-v-a1-32", "es-v-a1-33", "es-v-a1-34",
            "es-v-a1-35", "es-v-a1-36", "es-v-a1-37", "es-v-a1-38", "es-v-a1-39",
            "es-v-a1-40", "es-v-a1-41", "es-v-a1-42", "es-v-a1-43", "es-v-a1-44",
            "es-v-a1-45", "es-v-a1-46", "es-v-a1-47", "es-v-a1-48", "es-v-a1-49"
        ],
        verbIds: ["es-vb-a1-8", "es-vb-a1-9", "es-vb-a1-13"],
        testQuestions: [
            { id: "es-uq-a1-16-1", level: "A1", prompt: "Complete: 'Mi hermano ___ alto y delgado.' (permanent trait)", options: ["está", "tiene", "es", "va"], answer: "es" },
            { id: "es-uq-a1-16-2", level: "A1", prompt: "What does 'estoy cansado' mean?", options: ["I am a tired person.", "I am tired. (right now)", "I have tiredness.", "I feel tired always."], answer: "I am tired. (right now)" },
            { id: "es-uq-a1-16-3", level: "A1", prompt: "Which is correct (adjective must agree with a feminine noun)?", options: ["Ella tiene pelo negra.", "Ella tiene pelo negro.", "Ella tiene pelos negra.", "Ella tiene pelos negro."], answer: "Ella tiene pelo negro." },
            { id: "es-uq-a1-16-4", level: "A1", prompt: "How do you say 'We are at home'?", options: ["Somos en casa.", "Tenemos en casa.", "Estamos en casa.", "Vamos en casa."], answer: "Estamos en casa." },
            { id: "es-uq-a1-16-5", level: "A1", prompt: "What does '¿Cuántos años tienes?' mean?", options: ["What is your name?", "Where are you from?", "How old are you?", "What do you do?"], answer: "How old are you?" },
            { id: "es-uq-a1-16-6", level: "A1", prompt: "Complete: 'Vosotros ___ (hablar) muy bien español.'", options: ["hablo", "habla", "habláis", "hablan"], answer: "habláis" }
        ]
    },
    {
        id: "es-a1-u17",
        level: "A1",
        order: 17,
        title: "Reflexive Verbs & Daily Routine",
        description: "Learn to talk about your daily routine using reflexive verbs — getting up, showering, going to bed. These verbs use special pronouns and are used constantly in everyday Spanish.",
        grammarIds: ["es-g-a1-21"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-17-1", level: "A1", prompt: "How do you say 'My name is Carlos'?", options: ["Me llamo Carlos.", "Yo llamo Carlos.", "Soy llamado Carlos.", "Tengo nombre Carlos."], answer: "Me llamo Carlos." },
            { id: "es-uq-a1-17-2", level: "A1", prompt: "Complete: 'Ella ___ levanta a las siete.'", options: ["me", "te", "se", "nos"], answer: "se" },
            { id: "es-uq-a1-17-3", level: "A1", prompt: "Where does the reflexive pronoun go with a conjugated verb?", options: ["After the verb", "Before the conjugated verb", "At the end of the sentence", "After the subject"], answer: "Before the conjugated verb" },
            { id: "es-uq-a1-17-4", level: "A1", prompt: "Complete: 'Nosotros ___ acostamos tarde.'", options: ["me", "te", "se", "nos"], answer: "nos" },
            { id: "es-uq-a1-17-5", level: "A1", prompt: "What does 'ducharse' mean?", options: ["to eat", "to sleep", "to shower", "to get dressed"], answer: "to shower" },
            { id: "es-uq-a1-17-6", level: "A1", prompt: "How do you ask 'What time do you wake up?'", options: ["¿A qué hora te duermes?", "¿A qué hora te despiertas?", "¿A qué hora te levantas aquí?", "¿Cuándo te duchas?"], answer: "¿A qué hora te despiertas?" },
        ]
    },
    {
        id: "es-a1-u18",
        level: "A1",
        order: 18,
        title: "Gustar — Likes & Dislikes",
        description: "Learn the most important structure for expressing preferences in Spanish. Gustar works differently from English — the thing liked is the subject, not the person.",
        grammarIds: ["es-g-a1-22"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-18-1", level: "A1", prompt: "How do you say 'I like Spanish'?", options: ["Gusto el español.", "Me gusta el español.", "Me gustan el español.", "Yo gusta español."], answer: "Me gusta el español." },
            { id: "es-uq-a1-18-2", level: "A1", prompt: "How do you say 'I like tapas'? (tapas = plural)", options: ["Me gusta las tapas.", "Me gustan las tapas.", "Gusto las tapas.", "Te gustan las tapas."], answer: "Me gustan las tapas." },
            { id: "es-uq-a1-18-3", level: "A1", prompt: "How do you ask 'Do you like football?' (informal)?", options: ["¿Gustas el fútbol?", "¿Te gusta el fútbol?", "¿Te gustan el fútbol?", "¿Le gusta el fútbol?"], answer: "¿Te gusta el fútbol?" },
            { id: "es-uq-a1-18-4", level: "A1", prompt: "What does 'No me gusta nada' mean?", options: ["I don't like it much", "I like it a lot", "I don't like it at all", "I like nothing"], answer: "I don't like it at all" },
            { id: "es-uq-a1-18-5", level: "A1", prompt: "Complete: 'Me ___ bailar.' (I like dancing)", options: ["gustan", "gusta", "gusto", "gustas"], answer: "gusta" },
            { id: "es-uq-a1-18-6", level: "A1", prompt: "What does 'Me encanta' mean compared to 'Me gusta'?", options: ["I don't like it", "I like it (same as gusta)", "I love it (stronger than gusta)", "I hate it"], answer: "I love it (stronger than gusta)" },
        ]
    },
    {
        id: "es-a1-u19",
        level: "A1",
        order: 19,
        title: "Modal Verbs: Poder, Deber & Tener Que",
        description: "Express ability, obligation, and necessity. These three verbs are essential for daily communication — saying what you can do, what you should do, and what you have to do.",
        grammarIds: ["es-g-a1-23"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-19-1", level: "A1", prompt: "Complete: '¿___ hablar más despacio?' (can you)", options: ["Debes", "Tienes que", "Puedes", "Quieres"], answer: "Puedes" },
            { id: "es-uq-a1-19-2", level: "A1", prompt: "What is the yo form of 'poder'?", options: ["podo", "puedo", "pode", "puede"], answer: "puedo" },
            { id: "es-uq-a1-19-3", level: "A1", prompt: "Complete: 'Tengo ___ trabajar mañana.'", options: ["a", "de", "que", "para"], answer: "que" },
            { id: "es-uq-a1-19-4", level: "A1", prompt: "Which expresses a stronger obligation: 'deber' or 'tener que'?", options: ["deber", "tener que", "they are the same", "neither"], answer: "tener que" },
            { id: "es-uq-a1-19-5", level: "A1", prompt: "What does 'No puedo venir esta noche' mean?", options: ["I don't want to come tonight", "I can't come tonight", "I don't have to come tonight", "I shouldn't come tonight"], answer: "I can't come tonight" },
            { id: "es-uq-a1-19-6", level: "A1", prompt: "Complete: 'Ella ___ llegar a tiempo.' (she should)", options: ["puede", "quiere", "debe", "va a"], answer: "debe" },
        ]
    },
    {
        id: "es-a1-u20",
        level: "A1",
        order: 20,
        title: "Demonstratives",
        description: "Point things out in Spanish — this, that, those. Spanish has three levels of distance: near (este), medium (ese), and far (aquel).",
        grammarIds: ["es-g-a1-24"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-20-1", level: "A1", prompt: "Which form means 'this book' (masculine singular)?", options: ["ese libro", "aquel libro", "este libro", "estos libros"], answer: "este libro" },
            { id: "es-uq-a1-20-2", level: "A1", prompt: "Which is correct for 'these shoes' (masculine plural)?", options: ["este zapato", "estos zapatos", "esos zapatos", "esta zapatos"], answer: "estos zapatos" },
            { id: "es-uq-a1-20-3", level: "A1", prompt: "How do you say 'that house' (near you, feminine singular)?", options: ["esta casa", "ese casa", "esa casa", "aquella casa"], answer: "esa casa" },
            { id: "es-uq-a1-20-4", level: "A1", prompt: "Which form describes something far away (masculine singular)?", options: ["este", "ese", "aquel", "estos"], answer: "aquel" },
            { id: "es-uq-a1-20-5", level: "A1", prompt: "How do you say 'What is this?' (neutral, pointing at unknown object)", options: ["¿Qué es este?", "¿Qué es esto?", "¿Qué es ese?", "¿Qué es eso?"], answer: "¿Qué es esto?" },
            { id: "es-uq-a1-20-6", level: "A1", prompt: "Complete: '___ manzanas son deliciosas.' (these)", options: ["Este", "Esta", "Estas", "Estos"], answer: "Estas" },
        ]
    },
    {
        id: "es-a1-u21",
        level: "A1",
        order: 21,
        title: "Adverbs, Frequency & Connectors",
        description: "Build more natural sentences: say where things are, when they happen, how often, and link ideas with words like pero, porque, and primero.",
        grammarIds: ["es-g-a1-25", "es-g-a1-26", "es-g-a1-27"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-21-1", level: "A1", prompt: "What does 'todavía' mean?", options: ["already", "soon", "still / yet", "never"], answer: "still / yet" },
            { id: "es-uq-a1-21-2", level: "A1", prompt: "Where do frequency adverbs usually go?", options: ["Before the subject", "After the conjugated verb", "At the end of the sentence only", "Before the infinitive"], answer: "After the conjugated verb" },
            { id: "es-uq-a1-21-3", level: "A1", prompt: "What does 'allí' mean?", options: ["here", "nearby", "there / over there", "inside"], answer: "there / over there" },
            { id: "es-uq-a1-21-4", level: "A1", prompt: "Which connector means 'because'?", options: ["pero", "sino", "aunque", "porque"], answer: "porque" },
            { id: "es-uq-a1-21-5", level: "A1", prompt: "What does 'a veces' mean?", options: ["always", "never", "sometimes", "often"], answer: "sometimes" },
            { id: "es-uq-a1-21-6", level: "A1", prompt: "Put in order: Primero → ? → Finalmente", options: ["después", "pero", "porque", "también"], answer: "después" },
        ]
    },
    {
        id: "es-a1-u22",
        level: "A1",
        order: 22,
        title: "Commands, Stem-Changes & Irregular Yo",
        description: "Give instructions using the imperative, master stem-changing verbs (e→ie, o→ue, e→i), and learn the irregular yo forms of the 'yo-go' group.",
        grammarIds: ["es-g-a1-30", "es-g-a1-31", "es-g-a1-34"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-22-1", level: "A1", prompt: "Which is the correct tú imperative of 'hablar'?", options: ["hablas", "hable", "habla", "hablad"], answer: "habla" },
            { id: "es-uq-a1-22-2", level: "A1", prompt: "Complete: 'Yo ___ la verdad.' (decir — yo-go verb)", options: ["deco", "digo", "deci", "dices"], answer: "digo" },
            { id: "es-uq-a1-22-3", level: "A1", prompt: "'Querer' is an e→ie stem-changer. How do you say 'She wants'?", options: ["ella quere", "ella quiere", "ella queri", "ella quier"], answer: "ella quiere" },
            { id: "es-uq-a1-22-4", level: "A1", prompt: "Which verb belongs to the 'yo-go' irregular group?", options: ["hablar", "comer", "tener", "vivir"], answer: "tener" },
            { id: "es-uq-a1-22-5", level: "A1", prompt: "'Dormir' is an o→ue verb. Complete: 'Nosotros ___.'", options: ["dormimos", "duermemos", "dormemos", "duermimos"], answer: "dormimos" },
            { id: "es-uq-a1-22-6", level: "A1", prompt: "'Pedir' is an e→i verb. How do you say 'They ask for water'?", options: ["Ellos peden agua.", "Ellos piden agua.", "Ellos piden aguas.", "Ellos pedén agua."], answer: "Ellos piden agua." }
        ]
    },
    {
        id: "es-a1-u23",
        level: "A1",
        order: 23,
        title: "Ser/Estar Nuances, Hay, Saber/Conocer & Pronouns",
        description: "Explore adjectives that change meaning with ser vs estar, use hay to express existence, distinguish saber from conocer, and use stressed pronouns after prepositions.",
        grammarIds: ["es-g-a1-28", "es-g-a1-29", "es-g-a1-32", "es-g-a1-33"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-23-1", level: "A1", prompt: "'Estar aburrido' means bored, but 'ser aburrido' means…?", options: ["bored", "boring", "tired", "sad"], answer: "boring" },
            { id: "es-uq-a1-23-2", level: "A1", prompt: "How do you say 'There are three students in the room'?", options: ["Son tres estudiantes en la sala.", "Están tres estudiantes en la sala.", "Hay tres estudiantes en la sala.", "Es tres estudiantes en la sala."], answer: "Hay tres estudiantes en la sala." },
            { id: "es-uq-a1-23-3", level: "A1", prompt: "Which sentence uses 'saber' correctly?", options: ["Sé a María.", "Conozco hablar inglés.", "Sé hablar inglés.", "Conozco que es tarde."], answer: "Sé hablar inglés." },
            { id: "es-uq-a1-23-4", level: "A1", prompt: "Complete: 'Este regalo es para ___.' (for me)", options: ["me", "yo", "mí", "mi"], answer: "mí" },
            { id: "es-uq-a1-23-5", level: "A1", prompt: "You meet someone for the first time. Which verb do you use?", options: ["Sé a Juan.", "Conozco a Juan.", "Hay a Juan.", "Estar a Juan."], answer: "Conozco a Juan." },
            { id: "es-uq-a1-23-6", level: "A1", prompt: "'Hay' is used to express…?", options: ["location of a specific object", "a temporary state", "existence of people or things", "ownership"], answer: "existence of people or things" }
        ]
    },
    {
        id: "es-a1-u24",
        level: "A1",
        order: 24,
        title: "Bridge: Near Future — Ir a + Infinitive",
        description: "Talk about plans and near-future events using ir + a + infinitive. Your first step into A2 territory.",
        grammarIds: ["es-g-a1-12"],
        vocabIds: [
            "es-v-a1-151", "es-v-a1-152", "es-v-a1-153", "es-v-a1-154",
            "es-v-a1-155", "es-v-a1-156", "es-v-a1-157", "es-v-a1-158",
            "es-v-a1-62", "es-v-a1-63", "es-v-a1-64", "es-v-a1-65",
            "es-v-a1-66", "es-v-a1-77", "es-v-a1-78"
        ],
        verbIds: ["es-vb-a1-5", "es-vb-a1-7"],
        testQuestions: [
            { id: "es-uq-a1-24-1", level: "A1", prompt: "What does 'Voy a comer' mean?", options: ["I am eating.", "I ate.", "I am going to eat.", "I want to eat."], answer: "I am going to eat." },
            { id: "es-uq-a1-24-2", level: "A1", prompt: "How do you say 'She is going to study tomorrow'?", options: ["Ella estudia mañana.", "Ella va a estudiar mañana.", "Ella estudió mañana.", "Ella quiere estudiar mañana."], answer: "Ella va a estudiar mañana." },
            { id: "es-uq-a1-24-3", level: "A1", prompt: "Complete: 'Nosotros ___ a viajar el próximo verano.'", options: ["voy", "vas", "van", "vamos"], answer: "vamos" },
            { id: "es-uq-a1-24-4", level: "A1", prompt: "What does 'quiero viajar' mean?", options: ["I am travelling.", "I travelled.", "I want to travel.", "I am going to travel."], answer: "I want to travel." },
            { id: "es-uq-a1-24-5", level: "A1", prompt: "Complete: '¿Qué vas a ___ este fin de semana?' (do)", options: ["haces", "hago", "haciendo", "hacer"], answer: "hacer" },
            { id: "es-uq-a1-24-6", level: "A1", prompt: "How do you say 'They are going to come'?", options: ["Ellos quieren venir.", "Ellos van a venir.", "Ellos vienen.", "Ellos vendrán."], answer: "Ellos van a venir." }
        ]
    },
]