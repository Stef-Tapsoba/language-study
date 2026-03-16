// Spanish A1 units.
// data/spanish/units/a1.ts
import { LessonUnit } from "../../../types"

// 14 ordered A1 units for Spanish.
// Units build on each other: each unit introduces new grammar/vocab/verbs
// and includes 5–6 test-out questions drawn from that unit's content.
// Unit N+1 unlocks when unit N is mastered.

export const a1Units: LessonUnit[] = [
    {
        id: "es-a1-u1",
        level: "A1",
        order: 1,
        title: "Greetings & First Words",
        description: "Learn essential greetings, farewells, and polite phrases. Understand subject pronouns.",
        grammarIds: ["es-g-a1-1", "es-g-a1-5", "es-g-a1-13"],
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
            { id: "es-uq-a1-1-4", level: "A1", prompt: "How do you say 'How are you?' (informal)?", options: ["¿Cómo te llamas?", "¿Cómo estás?", "¿De dónde eres?", "¿Cuántos años tienes?"], answer: "¿Cómo estás?" },
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
        verbIds: ["es-vb-a1-8", "es-vb-a1-9"],
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
        verbIds: ["es-vb-a1-10"],
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
        title: "Numbers, Time & Days of the Week",
        description: "Count from 1 to 100, tell the time, and talk about days and time expressions.",
        grammarIds: ["es-g-a1-6"],
        vocabIds: [
            "es-v-a1-62", "es-v-a1-63", "es-v-a1-64", "es-v-a1-65", "es-v-a1-66",
            "es-v-a1-67", "es-v-a1-68", "es-v-a1-69", "es-v-a1-70", "es-v-a1-71",
            "es-v-a1-72", "es-v-a1-73", "es-v-a1-74", "es-v-a1-75", "es-v-a1-76"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-7-1", level: "A1", prompt: "How do you say 'It's three o'clock' in Spanish?", options: ["Es las tres.", "Son las tres.", "Hay tres.", "Tengo tres."], answer: "Son las tres." },
            { id: "es-uq-a1-7-2", level: "A1", prompt: "What is the Spanish word for Monday?", options: ["domingo", "martes", "lunes", "viernes"], answer: "lunes" },
            { id: "es-uq-a1-7-3", level: "A1", prompt: "How do you ask 'What time is it?'", options: ["¿Qué hora tiene?", "¿Qué hora es?", "¿Cuántas horas?", "¿Cuándo es?"], answer: "¿Qué hora es?" },
            { id: "es-uq-a1-7-4", level: "A1", prompt: "What does 'el fin de semana' mean?", options: ["the holiday", "the end of the month", "the weekend", "the weekday"], answer: "the weekend" },
            { id: "es-uq-a1-7-5", level: "A1", prompt: "How do you say 'It's half past two'?", options: ["Son las dos y cuarto.", "Es la dos y media.", "Son las dos y media.", "Son las dos menos media."], answer: "Son las dos y media." }
        ]
    },
    {
        id: "es-a1-u8",
        level: "A1",
        order: 8,
        title: "Months, Seasons & Weather",
        description: "Learn the months and seasons. Use hacer to describe weather conditions.",
        grammarIds: [],
        vocabIds: [
            "es-v-a1-77", "es-v-a1-78", "es-v-a1-79", "es-v-a1-80", "es-v-a1-81",
            "es-v-a1-82", "es-v-a1-83", "es-v-a1-84", "es-v-a1-85", "es-v-a1-86",
            "es-v-a1-87", "es-v-a1-88", "es-v-a1-89", "es-v-a1-90", "es-v-a1-91",
            "es-v-a1-92"
        ],
        verbIds: ["es-vb-a1-6"],
        testQuestions: [
            { id: "es-uq-a1-8-1", level: "A1", prompt: "What is the Spanish word for January?", options: ["julio", "junio", "enero", "febrero"], answer: "enero" },
            { id: "es-uq-a1-8-2", level: "A1", prompt: "How do you say 'It's cold' (weather) in Spanish?", options: ["Está frío.", "Hay frío.", "Hace frío.", "Es frío."], answer: "Hace frío." },
            { id: "es-uq-a1-8-3", level: "A1", prompt: "What is 'primavera' in English?", options: ["summer", "autumn", "winter", "spring"], answer: "spring" },
            { id: "es-uq-a1-8-4", level: "A1", prompt: "How do you say 'In winter it is very cold'?", options: ["En invierno es muy frío.", "En invierno hay mucho frío.", "En invierno hace mucho frío.", "En invierno está mucho frío."], answer: "En invierno hace mucho frío." },
            { id: "es-uq-a1-8-5", level: "A1", prompt: "What month comes after marzo (March)?", options: ["febrero", "abril", "mayo", "enero"], answer: "abril" }
        ]
    },
    {
        id: "es-a1-u9",
        level: "A1",
        order: 9,
        title: "Family",
        description: "Describe your family members. Practise ser and tener in the context of family relationships.",
        grammarIds: [],
        vocabIds: [
            "es-v-a1-93", "es-v-a1-94", "es-v-a1-95", "es-v-a1-96", "es-v-a1-97",
            "es-v-a1-98", "es-v-a1-99", "es-v-a1-100", "es-v-a1-101", "es-v-a1-102",
            "es-v-a1-103", "es-v-a1-104"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-9-1", level: "A1", prompt: "What does 'hermano' mean?", options: ["sister", "father", "brother", "son"], answer: "brother" },
            { id: "es-uq-a1-9-2", level: "A1", prompt: "How do you say 'my mother' in Spanish?", options: ["mi padre", "mi madre", "mi hermana", "mi abuela"], answer: "mi madre" },
            { id: "es-uq-a1-9-3", level: "A1", prompt: "What is the plural of 'hijo'?", options: ["hija", "hijos", "hijas", "hijoas"], answer: "hijos" },
            { id: "es-uq-a1-9-4", level: "A1", prompt: "What does 'abuelo' mean?", options: ["uncle", "father", "grandfather", "husband"], answer: "grandfather" },
            { id: "es-uq-a1-9-5", level: "A1", prompt: "Complete: 'Yo tengo dos ___ (sisters).'", options: ["hermanos", "hermanas", "hermano", "hermana"], answer: "hermanas" }
        ]
    },
    {
        id: "es-a1-u10",
        level: "A1",
        order: 10,
        title: "Food, Drink & Ordering",
        description: "Name common foods and drinks. Use querer to order at a café or restaurant.",
        grammarIds: [],
        vocabIds: [
            "es-v-a1-105", "es-v-a1-106", "es-v-a1-107", "es-v-a1-108", "es-v-a1-109",
            "es-v-a1-110", "es-v-a1-111", "es-v-a1-112", "es-v-a1-113", "es-v-a1-114",
            "es-v-a1-115", "es-v-a1-116", "es-v-a1-117", "es-v-a1-118", "es-v-a1-119",
            "es-v-a1-120", "es-v-a1-121", "es-v-a1-122", "es-v-a1-123", "es-v-a1-124",
            "es-v-a1-125"
        ],
        verbIds: ["es-vb-a1-7", "es-vb-a1-8", "es-vb-a1-9", "es-vb-a1-13"],
        testQuestions: [
            { id: "es-uq-a1-10-1", level: "A1", prompt: "What is the 'yo' form of 'querer'?", options: ["quere", "quieres", "quiero", "queremos"], answer: "quiero" },
            { id: "es-uq-a1-10-2", level: "A1", prompt: "How do you order 'a coffee, please'?", options: ["Un café, gracias.", "Quiero un café, por favor.", "Me gusta un café.", "Hay un café."], answer: "Quiero un café, por favor." },
            { id: "es-uq-a1-10-3", level: "A1", prompt: "What is the Spanish word for 'bread'?", options: ["queso", "pan", "leche", "mantequilla"], answer: "pan" },
            { id: "es-uq-a1-10-4", level: "A1", prompt: "What does '¿Qué quieres comer?' mean?", options: ["What are you eating?", "Do you want to eat?", "What do you want to eat?", "I want to eat."], answer: "What do you want to eat?" },
            { id: "es-uq-a1-10-5", level: "A1", prompt: "What is the 'ellos' form of 'querer'?", options: ["quere", "queremos", "quieres", "quieren"], answer: "quieren" },
            { id: "es-uq-a1-10-6", level: "A1", prompt: "How do you say 'We want a table for two'?", options: ["Somos una mesa para dos.", "Tenemos una mesa para dos.", "Queremos una mesa para dos.", "Estamos una mesa para dos."], answer: "Queremos una mesa para dos." }
        ]
    },
    {
        id: "es-a1-u11",
        level: "A1",
        order: 11,
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
            { id: "es-uq-a1-11-1", level: "A1", prompt: "What is the 'yo' form of 'ir'?", options: ["va", "vas", "voy", "vamos"], answer: "voy" },
            { id: "es-uq-a1-11-2", level: "A1", prompt: "How do you say 'I'm going to school'?", options: ["Estoy a la escuela.", "Voy a la escuela.", "Soy a la escuela.", "Tengo la escuela."], answer: "Voy a la escuela." },
            { id: "es-uq-a1-11-3", level: "A1", prompt: "What does 'al' mean? (contraction of a + el)", options: ["from the", "in the", "to the (masculine)", "of the"], answer: "to the (masculine)" },
            { id: "es-uq-a1-11-4", level: "A1", prompt: "What is the Spanish word for 'hospital'?", options: ["escuela", "tienda", "hospital", "oficina"], answer: "hospital" },
            { id: "es-uq-a1-11-5", level: "A1", prompt: "Complete: 'Ellos ___ al supermercado.'", options: ["va", "voy", "van", "vamos"], answer: "van" }
        ]
    },
    {
        id: "es-a1-u12",
        level: "A1",
        order: 12,
        title: "Directions & Transport",
        description: "Give and follow directions. Name common modes of transport.",
        grammarIds: [],
        vocabIds: [
            "es-v-a1-138", "es-v-a1-139", "es-v-a1-140", "es-v-a1-141", "es-v-a1-142",
            "es-v-a1-143", "es-v-a1-144", "es-v-a1-145", "es-v-a1-146", "es-v-a1-147",
            "es-v-a1-148", "es-v-a1-149", "es-v-a1-150"
        ],
        verbIds: [],
        testQuestions: [
            { id: "es-uq-a1-12-1", level: "A1", prompt: "How do you say 'Turn right'?", options: ["Gira todo recto.", "Gira a la izquierda.", "Gira a la derecha.", "Para aquí."], answer: "Gira a la derecha." },
            { id: "es-uq-a1-12-2", level: "A1", prompt: "What does 'todo recto' mean?", options: ["turn right", "stop here", "straight ahead", "turn left"], answer: "straight ahead" },
            { id: "es-uq-a1-12-3", level: "A1", prompt: "What is the Spanish word for 'bus'?", options: ["tren", "avión", "autobús", "barco"], answer: "autobús" },
            { id: "es-uq-a1-12-4", level: "A1", prompt: "How do you ask 'Where is the station?'", options: ["¿Cuándo es la estación?", "¿Dónde está la estación?", "¿Cómo es la estación?", "¿Qué es la estación?"], answer: "¿Dónde está la estación?" },
            { id: "es-uq-a1-12-5", level: "A1", prompt: "What does 'a la izquierda' mean?", options: ["to the right", "to the left", "straight ahead", "behind"], answer: "to the left" }
        ]
    },
    {
        id: "es-a1-u13",
        level: "A1",
        order: 13,
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
            { id: "es-uq-a1-13-1", level: "A1", prompt: "Complete: 'Mi hermano ___ alto y delgado.' (permanent trait)", options: ["está", "tiene", "es", "va"], answer: "es" },
            { id: "es-uq-a1-13-2", level: "A1", prompt: "What does 'estoy cansado' mean?", options: ["I am a tired person.", "I am tired. (right now)", "I have tiredness.", "I feel tired always."], answer: "I am tired. (right now)" },
            { id: "es-uq-a1-13-3", level: "A1", prompt: "Which is correct (adjective must agree with a feminine noun)?", options: ["Ella tiene pelo negra.", "Ella tiene pelo negro.", "Ella tiene pelos negra.", "Ella tiene pelos negro."], answer: "Ella tiene pelo negro." },
            { id: "es-uq-a1-13-4", level: "A1", prompt: "How do you say 'We are at home'?", options: ["Somos en casa.", "Tenemos en casa.", "Estamos en casa.", "Vamos en casa."], answer: "Estamos en casa." },
            { id: "es-uq-a1-13-5", level: "A1", prompt: "What does '¿Cuántos años tienes?' mean?", options: ["What is your name?", "Where are you from?", "How old are you?", "What do you do?"], answer: "How old are you?" },
            { id: "es-uq-a1-13-6", level: "A1", prompt: "Complete: 'Vosotros ___ (hablar) muy bien español.'", options: ["hablo", "habla", "habláis", "hablan"], answer: "habláis" }
        ]
    },
    {
        id: "es-a1-u14",
        level: "A1",
        order: 14,
        title: "Bridge: Near Future — Ir a + Infinitive",
        description: "Talk about plans and near-future events using ir + a + infinitive. Your first step into A2 territory.",
        grammarIds: ["es-g-a1-12"],
        vocabIds: [
            "es-v-a1-151", "es-v-a1-152", "es-v-a1-153", "es-v-a1-154", "es-v-a1-155",
            "es-v-a1-156", "es-v-a1-157", "es-v-a1-158", "es-v-a1-62", "es-v-a1-63",
            "es-v-a1-64", "es-v-a1-65", "es-v-a1-66", "es-v-a1-77", "es-v-a1-78"
        ],
        verbIds: ["es-vb-a1-5", "es-vb-a1-7"],
        testQuestions: [
            { id: "es-uq-a1-14-1", level: "A1", prompt: "What does 'Voy a comer' mean?", options: ["I am eating.", "I ate.", "I am going to eat.", "I want to eat."], answer: "I am going to eat." },
            { id: "es-uq-a1-14-2", level: "A1", prompt: "How do you say 'She is going to study tomorrow'?", options: ["Ella estudia mañana.", "Ella va a estudiar mañana.", "Ella estudió mañana.", "Ella quiere estudiar mañana."], answer: "Ella va a estudiar mañana." },
            { id: "es-uq-a1-14-3", level: "A1", prompt: "Complete: 'Nosotros ___ a viajar el próximo verano.'", options: ["voy", "vas", "van", "vamos"], answer: "vamos" },
            { id: "es-uq-a1-14-4", level: "A1", prompt: "What does 'quiero viajar' mean?", options: ["I am travelling.", "I travelled.", "I want to travel.", "I am going to travel."], answer: "I want to travel." },
            { id: "es-uq-a1-14-5", level: "A1", prompt: "Complete: '¿Qué vas a ___ este fin de semana?' (do)", options: ["haces", "hago", "haciendo", "hacer"], answer: "hacer" },
            { id: "es-uq-a1-14-6", level: "A1", prompt: "How do you say 'They are going to come'?", options: ["Ellos quieren venir.", "Ellos van a venir.", "Ellos vienen.", "Ellos vendrán."], answer: "Ellos van a venir." }
        ]
    }
]
