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
    { id: "es-lt-b1-15", level: "B1", prompt: "What is the subjunctive trigger phrase?", options: ["Creo que", "Sé que", "Es verdad que", "Espero que"], answer: "Espero que" },

    // -----------------------------------------------------------------------
    // B2 — 15 questions
    // -----------------------------------------------------------------------
    { id: "es-lt-b2-1", level: "B2", prompt: "Complete the si-clause: 'Si ___ (tener, yo) más dinero, viajaría por el mundo.'", options: ["tengo", "tuviera", "tendré", "tenga"], answer: "tuviera", hint: "Type-2 conditional: si + imperfect subjunctive. Tener → tuviera." },
    { id: "es-lt-b2-2", level: "B2", prompt: "Complete: 'Quisiera que ___ (venir, tú) conmigo.'", options: ["vengas", "vinieras", "vendrías", "venías"], answer: "vinieras", hint: "Quisiera que expresses a past-toned wish → imperfect subjunctive." },
    { id: "es-lt-b2-3", level: "B2", prompt: "Choose the correct form after 'ojalá' for an unlikely wish.", options: ["Ojalá pudiera hablar español perfectamente.", "Ojalá puedo hablar español perfectamente.", "Ojalá podré hablar español perfectamente.", "Ojalá pueda hablar español perfectamente."], answer: "Ojalá pudiera hablar español perfectamente.", hint: "Ojalá + imperfect subjunctive expresses an unlikely wish (pudiera)." },
    { id: "es-lt-b2-4", level: "B2", prompt: "Identify the correct passive sentence: 'The bridge was built in 1920.'", options: ["El puente fue construido en 1920.", "El puente fue construida en 1920.", "El puente era construido en 1920.", "El puente se construyó en 1920 por nadie."], answer: "El puente fue construido en 1920.", hint: "Ser + past participle; participle agrees with subject (puente = masc. sing. → construido)." },
    { id: "es-lt-b2-5", level: "B2", prompt: "Complete: 'Los diputados ___ elegidos por los ciudadanos.' (passive, present)", options: ["son", "están", "fueron", "se"], answer: "son", hint: "Present passive of a permanent/characteristic action → ser (son elegidos)." },
    { id: "es-lt-b2-6", level: "B2", prompt: "Choose the correct relative pronoun for possession: 'El científico ___ hipótesis fue revolucionaria ganó el Nobel.'", options: ["cuya", "cuyo", "que", "quien"], answer: "cuya", hint: "Cuyo/cuya = 'whose', agreeing with the noun that follows (hipótesis = fem. → cuya)." },
    { id: "es-lt-b2-7", level: "B2", prompt: "Complete: 'La empresa en ___ trabaja es internacional.'", options: ["la que", "que", "quien", "cuya"], answer: "la que", hint: "After a preposition (en) referring to a thing, use el que / la que / los que / las que." },
    { id: "es-lt-b2-8", level: "B2", prompt: "Convert to reported speech: 'Estoy cansado.' → 'Él dijo que ___'", options: ["estaba cansado.", "está cansado.", "estaría cansado.", "estuvo cansado."], answer: "estaba cansado.", hint: "Present → imperfect in reported speech when the reporting verb is in the past." },
    { id: "es-lt-b2-9", level: "B2", prompt: "Convert: '¿Vienes mañana?' → 'Me preguntó si ___'", options: ["vendría al día siguiente.", "vendrá mañana.", "viene mañana.", "venía mañana."], answer: "vendría al día siguiente.", hint: "Future → conditional; mañana → al día siguiente in reported speech." },
    { id: "es-lt-b2-10", level: "B2", prompt: "Which sentence is a correct Type-2 conditional?", options: ["Si tuviera más tiempo, estudiaría más.", "Si tengo más tiempo, estudiaré más.", "Si tendré más tiempo, estudiaría más.", "Si tuviera más tiempo, estudiaré más."], answer: "Si tuviera más tiempo, estudiaría más.", hint: "Type-2: si + imperfect subjunctive, + conditional simple." },
    { id: "es-lt-b2-11", level: "B2", prompt: "Complete: 'Si el gobierno ___ (invertir) más en educación, los resultados mejorarían.'", options: ["invirtiera", "invierte", "invertirá", "invierta"], answer: "invirtiera", hint: "Type-2 si-clause → imperfect subjunctive. Invertir → invirtiera." },
    { id: "es-lt-b2-12", level: "B2", prompt: "What does 'democracia' mean?", options: ["democracy", "bureaucracy", "diplomacy", "sovereignty"], answer: "democracy", hint: "Democracia = democracy — government by the people." },
    { id: "es-lt-b2-13", level: "B2", prompt: "What does 'biodiversidad' mean?", options: ["biodiversity", "deforestation", "ecosystem", "renewable energy"], answer: "biodiversity", hint: "Biodiversidad = biodiversity — the variety of life in an ecosystem." },
    { id: "es-lt-b2-14", level: "B2", prompt: "Which sentence uses the conditional perfect (condicional compuesto) correctly?", options: ["Habría ido al concierto si hubiera tenido entradas.", "Habría ido al concierto si tuviera entradas.", "Iría al concierto si hubiera tenido entradas.", "Fui al concierto si hubiera tenido entradas."], answer: "Habría ido al concierto si hubiera tenido entradas.", hint: "Type-3 conditional: si + pluperfect subjunctive, + conditional perfect (habría + participle)." },
    { id: "es-lt-b2-15", level: "B2", prompt: "What does 'no obstante' mean in formal writing?", options: ["nevertheless / notwithstanding", "consequently", "likewise", "with regard to"], answer: "nevertheless / notwithstanding", hint: "No obstante is a formal connector meaning 'however' or 'nevertheless'." },

    // -----------------------------------------------------------------------
    // C1 — 15 questions
    // -----------------------------------------------------------------------
    { id: "es-lt-c1-1", level: "C1", prompt: "Complete the Type-3 si-clause: 'Si ___ (estudiar, yo) más, habría aprobado.'", options: ["hubiera estudiado", "habría estudiado", "haya estudiado", "hubiera estudiando"], answer: "hubiera estudiado", hint: "Type-3 conditionals: Si + pluperfect subjunctive (hubiera/hubiese + past participle)." },
    { id: "es-lt-c1-2", level: "C1", prompt: "Choose the sentence expressing an unfulfilled past wish with 'ojalá'.", options: ["Ojalá hubiera llegado a tiempo.", "Ojalá llegara a tiempo.", "Ojalá llegue a tiempo.", "Ojalá habría llegado a tiempo."], answer: "Ojalá hubiera llegado a tiempo.", hint: "Ojalá + pluperfect subjunctive (hubiera + participio) expresses an unfulfilled wish about the past." },
    { id: "es-lt-c1-3", level: "C1", prompt: "Pluperfect subjunctive of 'venir' (nosotros)?", options: ["hubiéramos venido", "habríamos venido", "hayamos venido", "hemos venido"], answer: "hubiéramos venido", hint: "Pluperfect subjunctive = hubiera/hubieras… + past participle. Nosotros: hubiéramos venido." },
    { id: "es-lt-c1-4", level: "C1", prompt: "Identify the correct Type-3 conditional sentence.", options: ["Si hubieran llegado a tiempo, habrían conocido al conferenciante.", "Si llegaran a tiempo, conocerían al conferenciante.", "Si llegan a tiempo, conocerán al conferenciante.", "Si hubieran llegado a tiempo, conocerían al conferenciante."], answer: "Si hubieran llegado a tiempo, habrían conocido al conferenciante.", hint: "Type-3: si + pluperfect subjunctive + conditional perfect (habría/habrían + participle)." },
    { id: "es-lt-c1-5", level: "C1", prompt: "Which is the correct 'De + infinitive compuesto' construction for: 'Si hubiera sabido la verdad, lo habría evitado.'?", options: ["De haber sabido la verdad, lo habría evitado.", "De saber la verdad, lo habría evitado.", "Si haber sabido la verdad, lo habría evitado.", "Haber sabido la verdad, lo habría evitado."], answer: "De haber sabido la verdad, lo habría evitado.", hint: "De + infinitive compuesto (haber + past participle) is an alternative to si + pluperfect subjunctive." },
    { id: "es-lt-c1-6", level: "C1", prompt: "Which construction presents information as general or widely accepted truth without citing a source?", options: ["Es sabido que el ejercicio es beneficioso.", "Creo que el ejercicio es beneficioso.", "El doctor afirma que el ejercicio es beneficioso.", "Se podría decir que el ejercicio sea beneficioso."], answer: "Es sabido que el ejercicio es beneficioso.", hint: "Es sabido que = it is well known that — an impersonal construction presenting general knowledge." },
    { id: "es-lt-c1-7", level: "C1", prompt: "Complete formally: '___ señalar que los datos presentan limitaciones metodológicas.'", options: ["Cabe", "Hay que", "Resulta de", "Se permite"], answer: "Cabe", hint: "Cabe señalar que = it is worth noting / it should be noted — a key C1 academic connector." },
    { id: "es-lt-c1-8", level: "C1", prompt: "What does 'cabe señalar que' mean in academic writing?", options: ["it should be noted that / it is worth noting that", "it is known that / it has been proven that", "it turns out that / it emerges that", "for the sake of / in the interest of"], answer: "it should be noted that / it is worth noting that", hint: "Cabe señalar que introduces a point the writer considers important to highlight." },
    { id: "es-lt-c1-9", level: "C1", prompt: "Choose the correct formal connector: '___ la claridad expositiva, se omitirán los detalles técnicos.' (for the sake of)", options: ["En aras de", "A tenor de", "En virtud de", "Habida cuenta de"], answer: "En aras de", hint: "En aras de = for the sake of / in the interest of — used to justify a choice in formal writing." },
    { id: "es-lt-c1-10", level: "C1", prompt: "What is the correct collocation for 'to make a decision'?", options: ["tomar una decisión", "hacer una decisión", "llevar una decisión", "dar una decisión"], answer: "tomar una decisión", hint: "In Spanish, decisions are 'taken': tomar una decisión. Never *hacer una decisión." },
    { id: "es-lt-c1-11", level: "C1", prompt: "What does the idiom 'dar en el clavo' mean?", options: ["to hit the nail on the head", "to add fuel to the fire", "to put one's foot in it", "to do absolutely nothing"], answer: "to hit the nail on the head", hint: "Dar en el clavo = acertar plenamente — to identify exactly what is correct or needed." },
    { id: "es-lt-c1-12", level: "C1", prompt: "What does 'disonancia cognitiva' mean?", options: ["cognitive dissonance — the discomfort of holding contradictory beliefs simultaneously", "cognitive empathy — understanding another's perspective intellectually", "confirmation bias — seeking information that confirms existing beliefs", "metacognition — reflecting on one's own thought processes"], answer: "cognitive dissonance — the discomfort of holding contradictory beliefs simultaneously", hint: "Disonancia cognitiva: e.g. smoking despite knowing the risks — holding conflicting beliefs." },
    { id: "es-lt-c1-13", level: "C1", prompt: "What does 'jurisprudencia' mean?", options: ["jurisprudence / case law — the body of legal decisions that set precedent", "legislation — laws enacted by parliament", "jurisdiction — the authority to apply the law", "judicial review — examining the constitutionality of laws"], answer: "jurisprudence / case law — the body of legal decisions that set precedent", hint: "La jurisprudencia del Tribunal Constitucional sienta precedente en derechos fundamentales." },
    { id: "es-lt-c1-14", level: "C1", prompt: "Conditional perfect of 'hacer' (ellos)?", options: ["habrían hecho", "hubieran hecho", "harían hecho", "habrán hecho"], answer: "habrían hecho", hint: "Conditional perfect = habría/habrías… habrían + past participle. Hacer → hecho (irregular)." },
    { id: "es-lt-c1-15", level: "C1", prompt: "Which sentence correctly uses pluperfect subjunctive + conditional perfect in a mixed sequence?", options: ["Si hubiésemos salido antes, no habríamos perdido el tren.", "Si saliéramos antes, no habríamos perdido el tren.", "Si hubiésemos salido antes, no perderíamos el tren.", "Si hubimos salido antes, no habríamos perdido el tren."], answer: "Si hubiésemos salido antes, no habríamos perdido el tren.", hint: "Type-3 (impossible past): si + pluperfect subjunctive (hubiésemos salido) + conditional perfect (habríamos perdido)." },

    // -----------------------------------------------------------------------
    // A2 — additions (es-lt-a2-16 through -20)
    // -----------------------------------------------------------------------
    {
        id: "es-lt-a2-16", level: "A2",
        prompt: "Complete (reflexive, preterite): 'Esta mañana yo ___ a las seis.' (levantarse)",
        options: ["levantaba", "me levanté", "me levanto", "me levantaré"],
        answer: "me levanté",
        hint: "Reflexive preterite: pronoun + preterite form. Yo → me levanté."
    },
    {
        id: "es-lt-a2-17", level: "A2",
        prompt: "Which demonstrative fits? '___ zapatos (near me, masculine plural) son muy cómodos.'",
        options: ["Este", "Esta", "Estos", "Esos"],
        answer: "Estos",
        hint: "Estos = these (near speaker, masculine plural)."
    },
    {
        id: "es-lt-a2-18", level: "A2",
        prompt: "Complete (near future): 'Nosotros ___ viajar a México el verano que viene.'",
        options: ["viajamos", "viajamos a", "vamos a", "iremos a"],
        answer: "vamos a",
        hint: "Near future = ir (present) + a + infinitive. Nosotros vamos a viajar."
    },
    {
        id: "es-lt-a2-19", level: "A2",
        prompt: "Complete: 'La chica ___ conocí en el curso habla cuatro idiomas.' (relative pronoun)",
        options: ["quien", "que", "cual", "donde"],
        answer: "que",
        hint: "Que is the most common relative pronoun in Spanish — used for people and things as direct object."
    },
    {
        id: "es-lt-a2-20", level: "A2",
        prompt: "How do you say 'I have to see a doctor'?",
        options: ["Quiero ver a un médico.", "Puedo ver a un médico.", "Debo ver a un médico.", "Voy a ver a un médico."],
        answer: "Debo ver a un médico.",
        hint: "Deber = must / have to (obligation). Debo + infinitivo."
    },

    // -----------------------------------------------------------------------
    // B1 — additions (es-lt-b1-16 through -20)
    // -----------------------------------------------------------------------
    {
        id: "es-lt-b1-16", level: "B1",
        prompt: "Complete (real si-clause): 'Si ___ (hacer) buen tiempo mañana, iremos a la playa.'",
        options: ["haría", "hará", "hace", "hiciera"],
        answer: "hace",
        hint: "Real condition: si + presente → futuro/presente. Si-clause takes present indicative."
    },
    {
        id: "es-lt-b1-17", level: "B1",
        prompt: "Complete the narrative: 'Cuando ___ (llegar) a casa, me di cuenta de que ___ (olvidar) las llaves.'",
        options: ["llegué / había olvidado", "llegaba / olvidé", "llegué / olvidé", "llegaba / había olvidado"],
        answer: "llegué / había olvidado",
        hint: "Completed arrival → preterite. The forgotten keys happened before → pluperfect (había olvidado)."
    },
    {
        id: "es-lt-b1-18", level: "B1",
        prompt: "What does 'echar de menos' mean?",
        options: ["to run short of", "to miss (someone/something)", "to lack resources", "to throw away"],
        answer: "to miss (someone/something)",
        hint: "Echar de menos = to miss. A key collocation — cannot be translated word-for-word."
    },
    {
        id: "es-lt-b1-19", level: "B1",
        prompt: "How do you express polite disagreement while acknowledging the other view?",
        options: [
            "Estás completamente equivocado.",
            "Entiendo tu punto, sin embargo yo creo que…",
            "No, eso es falso.",
            "Me da igual."
        ],
        answer: "Entiendo tu punto, sin embargo yo creo que…",
        hint: "B1 debate skill: acknowledge then contrast. Sin embargo pivots to the counterpoint politely."
    },
    {
        id: "es-lt-b1-20", level: "B1",
        prompt: "Transform the command to reported speech: '¡Ven aquí!' → Me dijo que ___.",
        options: ["vengo aquí", "vendría aquí", "viniera aquí", "venga aquí"],
        answer: "viniera aquí",
        hint: "Imperative in reported speech → imperfecto de subjuntivo. Ven → viniera."
    },

    // -----------------------------------------------------------------------
    // B2 — additions (es-lt-b2-16 through -20)
    // -----------------------------------------------------------------------
    {
        id: "es-lt-b2-16", level: "B2",
        prompt: "Identify: 'Si hubiera aprendido chino de niña, sería traductora ahora.'",
        options: [
            "Type 1 — real",
            "Type 2 — hypothetical present",
            "Type 3 — past regret only",
            "Mixed — past condition, present result"
        ],
        answer: "Mixed — past condition, present result",
        hint: "Si + pluscuamperfecto subjuntivo → condicional simple (sería, not habría sido) = mixed conditional."
    },
    {
        id: "es-lt-b2-17", level: "B2",
        prompt: "What is the difference between 'Es aburrida' and 'Está aburrida'?",
        options: [
            "Both mean the same thing",
            "Es aburrida = she is a boring person (characteristic); Está aburrida = she is bored now (state)",
            "Es aburrida = event; Está aburrida = description",
            "Está is always more formal"
        ],
        answer: "Es aburrida = she is a boring person (characteristic); Está aburrida = she is bored now (state)",
        hint: "Ser = identity/characteristic. Estar = current state. Many adjectives shift meaning between the two."
    },
    {
        id: "es-lt-b2-18", level: "B2",
        prompt: "Complete: 'Aunque ___ difícil, lo intentaré.' — The speaker does NOT know if it's difficult.",
        options: ["es", "sea", "está", "estará"],
        answer: "sea",
        hint: "Aunque + subjuntivo = even if (hypothetical/unknown). Aunque + indicativo = even though (known fact)."
    },
    {
        id: "es-lt-b2-19", level: "B2",
        prompt: "What does 'habida cuenta de' mean in formal writing?",
        options: ["despite", "bearing in mind / given (formal)", "instead of", "as a result"],
        answer: "bearing in mind / given (formal)",
        hint: "Habida cuenta de = teniendo en cuenta = bearing in mind / given. Formal written register."
    },
    {
        id: "es-lt-b2-20", level: "B2",
        prompt: "What does 'estar en las nubes' mean?",
        options: ["to be very happy", "to be daydreaming / absent-minded", "to be ambitious", "to be in trouble"],
        answer: "to be daydreaming / absent-minded",
        hint: "Estar en las nubes = to have one's head in the clouds / be daydreaming. Key B2 idiom."
    },

    // -----------------------------------------------------------------------
    // C1 — additions (es-lt-c1-16 through -20)
    // -----------------------------------------------------------------------
    {
        id: "es-lt-c1-16", level: "C1",
        prompt: "Complete with the correct subjunctive tense: 'Dudaba de que ella ___ (entender) el problema en ese momento.'",
        options: ["entienda", "entendiera", "haya entendido", "hubiera entendido"],
        answer: "entendiera",
        hint: "Past reporting verb (dudaba) + simultaneous action → imperfecto de subjuntivo."
    },
    {
        id: "es-lt-c1-17", level: "C1",
        prompt: "What does 'a tenor de lo expuesto' mean in academic writing?",
        options: [
            "despite what has been said",
            "in light of / in accordance with what has been presented",
            "instead of the above",
            "as a consequence of the argument"
        ],
        answer: "in light of / in accordance with what has been presented",
        hint: "A tenor de = in light of / in accordance with. Formal academic/legal connector."
    },
    {
        id: "es-lt-c1-18", level: "C1",
        prompt: "Which construction turns 'mucha gente cree que' into a formal impersonal structure?",
        options: ["Todo el mundo cree que", "Es creído que", "Se sostiene que / es sabido que", "Generalmente se cree que solo"],
        answer: "Se sostiene que / es sabido que",
        hint: "Se sostiene que / es sabido que = it is argued / it is well known that. Impersonal academic attribution."
    },
    {
        id: "es-lt-c1-19", level: "C1",
        prompt: "What does 'en aras de la transparencia' mean?",
        options: [
            "in spite of transparency",
            "for the sake of transparency",
            "in the area of transparency",
            "concerning transparency"
        ],
        answer: "for the sake of transparency",
        hint: "En aras de = for the sake of / in the interest of. Formal academic phrase."
    },
    {
        id: "es-lt-c1-20", level: "C1",
        prompt: "What is the sequence-of-tenses rule when the main verb is in the past and expresses doubt about a prior event?",
        options: [
            "Main verb past + subjuntivo presente",
            "Main verb past + subjuntivo imperfecto for simultaneous, pluscuamperfecto for prior",
            "Main verb past + indicativo always",
            "No subjuntivo needed in past contexts"
        ],
        answer: "Main verb past + subjuntivo imperfecto for simultaneous, pluscuamperfecto for prior",
        hint: "Sequence of tenses: past main + simultaneous → imperfecto subjuntivo; past main + prior action → pluscuamperfecto subjuntivo."
    },
]
