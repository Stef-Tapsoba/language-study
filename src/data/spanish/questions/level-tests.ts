// Spanish level-test questions.
// data/spanish/questions/level-tests.ts
import { QuizQuestion } from "../../../types"

// Level-test questions — 15 per level.
// A score of ≥ 12/15 (80%) advances the user to the next level.

export const levelTestQuestions: QuizQuestion[] = [
    // -----------------------------------------------------------------------
    // A1 — 15 questions
    // -----------------------------------------------------------------------
    { id: "es-lt-a1-1", level: "A1", prompt: "What does 'gracias' mean?", options: ["Please", "Hello", "Thank you", "Goodbye"], answer: "Thank you" },
    { id: "es-lt-a1-2", level: "A1", prompt: "Which is the correct article for 'libro' (book, masculine)?", options: ["la", "los", "el", "las"], answer: "el" },
    { id: "es-lt-a1-3", level: "A1", prompt: "How do you say 'I am a student' in Spanish?", options: ["Soy estudiante.", "Estoy estudiante.", "Tengo estudiante.", "Hablo estudiante."], answer: "Soy estudiante." },
    { id: "es-lt-a1-4", level: "A1", prompt: "What is 'water' in Spanish?", options: ["leche", "jugo", "agua", "café"], answer: "agua" },
    { id: "es-lt-a1-5", level: "A1", prompt: "How do you say 'I speak' (first person, hablar)?", options: ["hablas", "habla", "hablo", "hablamos"], answer: "hablo" },
    { id: "es-lt-a1-6", level: "A1", prompt: "Which verb is used for temporary states and location?", options: ["ser", "tener", "ir", "estar"], answer: "estar" },
    { id: "es-lt-a1-7", level: "A1", prompt: "What does '¿Dónde?' mean?", options: ["When?", "Who?", "Where?", "Why?"], answer: "Where?" },
    { id: "es-lt-a1-8", level: "A1", prompt: "How do you say 'No, thank you'?", options: ["No, gracias.", "No, por favor.", "Sí, gracias.", "No hay."], answer: "No, gracias." },
    { id: "es-lt-a1-9", level: "A1", prompt: "What is the plural of 'el libro'?", options: ["la libro", "los libros", "las libros", "el libros"], answer: "los libros" },
    { id: "es-lt-a1-10", level: "A1", prompt: "How do you form a question in Spanish?", options: ["Add 'es' at the end", "Put '¿' at the start and '?' at the end", "Add 'que' at the start", "Change the verb to subjunctive"], answer: "Put '¿' at the start and '?' at the end" },
    { id: "es-lt-a1-11", level: "A1", prompt: "What does 'amigo' mean?", options: ["Enemy", "Family", "Friend", "Teacher"], answer: "Friend" },
    { id: "es-lt-a1-12", level: "A1", prompt: "I ___ (tener) veinte años. Which form is correct?", options: ["tiene", "tengo", "tienes", "tenemos"], answer: "tengo" },
    { id: "es-lt-a1-13", level: "A1", prompt: "What does 'perdón' mean?", options: ["Thank you", "Sorry / Excuse me", "Goodbye", "Please"], answer: "Sorry / Excuse me" },
    { id: "es-lt-a1-14", level: "A1", prompt: "How do you say 'She works here'?", options: ["Ella trabaja aquí.", "Ella trabajo aquí.", "Ella trabajas aquí.", "Ella trabajamos aquí."], answer: "Ella trabaja aquí." },
    { id: "es-lt-a1-15", level: "A1", prompt: "Which is correct for 'the houses' (feminine plural)?", options: ["el casa", "los casas", "las casas", "la casas"], answer: "las casas" },

    // -----------------------------------------------------------------------
    // A2 — 15 questions
    // -----------------------------------------------------------------------
    { id: "es-lt-a2-1", level: "A2", prompt: "Complete (preterite): 'Ayer yo ___ (hablar) con María.'", options: ["hablo", "hablé", "hablaba", "hablaré"], answer: "hablé" },
    { id: "es-lt-a2-2", level: "A2", prompt: "How do you say 'I used to eat' (habitual past)?", options: ["comí", "como", "comía", "comeré"], answer: "comía" },
    { id: "es-lt-a2-3", level: "A2", prompt: "Complete: 'Me ___ los libros.' (gustar)", options: ["gusta", "gustan", "gusto", "gustas"], answer: "gustan" },
    { id: "es-lt-a2-4", level: "A2", prompt: "How do you say 'She's going to travel tomorrow'?", options: ["Ella viaja mañana.", "Ella va a viajar mañana.", "Ella viajó mañana.", "Ella viajará mañana."], answer: "Ella va a viajar mañana." },
    { id: "es-lt-a2-5", level: "A2", prompt: "Complete: 'Me llamo Ana.' This is an example of:", options: ["Irregular verb", "Reflexive verb", "Gustar construction", "Passive voice"], answer: "Reflexive verb" },
    { id: "es-lt-a2-6", level: "A2", prompt: "What does 'supermercado' mean?", options: ["Superstore", "Supermarket", "Department store", "Pharmacy"], answer: "Supermarket" },
    { id: "es-lt-a2-7", level: "A2", prompt: "Choose the correct direct object pronoun: 'Veo a Juan todos los días. ___ veo todos los días.'", options: ["Le", "La", "Lo", "Lui"], answer: "Lo" },
    { id: "es-lt-a2-8", level: "A2", prompt: "Complete (preterite): 'Ella ___ al mercado.' (ir)", options: ["va", "fue", "iba", "irá"], answer: "fue" },
    { id: "es-lt-a2-9", level: "A2", prompt: "What does 'viaje' mean?", options: ["Time", "City", "Trip / Journey", "Language"], answer: "Trip / Journey" },
    { id: "es-lt-a2-10", level: "A2", prompt: "Complete (reflexive): 'Nosotros ___ a las siete.' (levantarse)", options: ["levantamos", "nos levantamos", "se levantan", "me levanto"], answer: "nos levantamos" },
    { id: "es-lt-a2-11", level: "A2", prompt: "How do you say 'Turn left'?", options: ["Gira a la derecha.", "Gira al frente.", "Gira a la izquierda.", "Gira atrás."], answer: "Gira a la izquierda." },
    { id: "es-lt-a2-12", level: "A2", prompt: "Complete: 'Me ___ bailar.' (encantar)", options: ["encanta", "encantan", "encanto", "encantas"], answer: "encanta" },
    { id: "es-lt-a2-13", level: "A2", prompt: "What does 'semana' mean?", options: ["Day", "Month", "Year", "Week"], answer: "Week" },
    { id: "es-lt-a2-14", level: "A2", prompt: "Complete (preterite irregular): 'Ella ___ la cena.' (hacer)", options: ["hice", "hacía", "hizo", "hace"], answer: "hizo" },
    { id: "es-lt-a2-15", level: "A2", prompt: "What is 'derecha' in English?", options: ["Left", "Straight", "Right", "Back"], answer: "Right" },

    // -----------------------------------------------------------------------
    // B1 — 15 questions
    // -----------------------------------------------------------------------
    { id: "es-lt-b1-1", level: "B1", prompt: "Complete (imperfecto): 'Cuando era niño, ___ (jugar) al fútbol.'", options: ["jugué", "jugaba", "jugaré", "jugaría"], answer: "jugaba" },
    { id: "es-lt-b1-2", level: "B1", prompt: "Complete (subjuntivo): 'Quiero que ella ___ (estudiar) más.'", options: ["estudia", "estudie", "estudiará", "estudiaría"], answer: "estudie" },
    { id: "es-lt-b1-3", level: "B1", prompt: "What does 'sin embargo' mean?", options: ["therefore", "although", "however", "furthermore"], answer: "however" },
    { id: "es-lt-b1-4", level: "B1", prompt: "Complete (futuro): 'Mañana yo ___ (hablar) con el jefe.'", options: ["hablo", "hablé", "hablaré", "hablaría"], answer: "hablaré" },
    { id: "es-lt-b1-5", level: "B1", prompt: "Complete (condicional): 'Con más tiempo, ___ (viajar) más.'", options: ["viajo", "viajé", "viajaré", "viajaría"], answer: "viajaría" },
    { id: "es-lt-b1-6", level: "B1", prompt: "Choose 'por' or 'para': 'Este regalo es ___ mi madre.'", options: ["por", "para", "por or para (both correct)", "neither"], answer: "para" },
    { id: "es-lt-b1-7", level: "B1", prompt: "What does 'actualmente' mean?", options: ["Actually", "Currently", "Eventually", "Previously"], answer: "Currently" },
    { id: "es-lt-b1-8", level: "B1", prompt: "Complete: 'Estudiamos ___ tres horas.' (duration with por/para)", options: ["para", "por", "en", "de"], answer: "por" },
    { id: "es-lt-b1-9", level: "B1", prompt: "What does 'desarrollo' mean?", options: ["Environment", "Development", "Society", "Challenge"], answer: "Development" },
    { id: "es-lt-b1-10", level: "B1", prompt: "Complete: 'Ella dijo que ___ (venir) mañana.' (reported speech → condicional)", options: ["viene", "vino", "vendrá", "vendría"], answer: "vendría" },
    { id: "es-lt-b1-11", level: "B1", prompt: "Which connector means 'although'?", options: ["además", "sin embargo", "aunque", "por lo tanto"], answer: "aunque" },
    { id: "es-lt-b1-12", level: "B1", prompt: "Complete (futuro irregular): 'Ellos ___ (tener) que esperar.'", options: ["tenerán", "tendrán", "tenrán", "tengerán"], answer: "tendrán" },
    { id: "es-lt-b1-13", level: "B1", prompt: "What does 'de repente' mean?", options: ["slowly", "certainly", "suddenly", "frequently"], answer: "suddenly" },
    { id: "es-lt-b1-14", level: "B1", prompt: "Preterite of 'querer' (yo): 'Yo ___ hablar con ella.'", options: ["quiero", "quería", "quise", "querré"], answer: "quise" },
    { id: "es-lt-b1-15", level: "B1", prompt: "What is the subjunctive trigger phrase?", options: ["Creo que", "Sé que", "Es verdad que", "Espero que"], answer: "Espero que" }
]
