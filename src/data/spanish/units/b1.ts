// data/spanish/units/b1.ts
import { LessonUnit } from "../../../types"

// B1 units — 5 full units with test questions.

export const esUnitsB1: LessonUnit[] = [
    {
        id: "es-b1-u1",
        level: "B1",
        order: 1,
        title: "Complex Past Narration — Preterite, Imperfect & Pluperfect",
        description: "Move beyond isolated tense practice to sustained storytelling. Combine preterite (completed events), imperfect (background and states), and pluperfect (what had already happened) in multi-clause narratives — the full past tense system working together.",
        grammarIds: ["es-g-b1-2", "es-g-b1-9"],
        vocabIds: [
            "es-v-b1-068", "es-v-b1-010", "es-v-b1-076",
            "es-v-b1-039", "es-v-b1-086", "es-v-b1-084"
        ],
        verbIds: ["es-vb-b1-1", "es-vb-b1-2"],
        testQuestions: [
            {
                id: "es-b1-u1-q1", level: "B1",
                prompt: "Complete the story: 'Cuando ___ (llegar) a casa, me di cuenta de que ___ (olvidar) las llaves.'",
                options: [
                    "llegué / había olvidado",
                    "llegaba / olvidé",
                    "llegué / olvidé",
                    "llegaba / había olvidado"
                ],
                answer: "llegué / había olvidado",
                hint: "Completed arrival event → preterite. The forgotten keys happened BEFORE the arrival → pluperfect (había olvidado)."
            },
            {
                id: "es-b1-u1-q2", level: "B1",
                prompt: "Complete: 'Mientras ___ (hablar) con mi jefe, sonó el teléfono.'",
                options: ["hablé", "hablaba", "había hablado", "hablaré"],
                answer: "hablaba",
                hint: "Ongoing background action (speaking) → imperfect. The phone ringing is the interrupting event → preterite."
            },
            {
                id: "es-b1-u1-q3", level: "B1",
                prompt: "Which sentence correctly uses the pluperfect?",
                options: [
                    "Cuando llegué, él se fue.",
                    "Cuando llegué, él ya se había ido.",
                    "Cuando llegaba, él ya se fue.",
                    "Cuando llegué, él ya se iba."
                ],
                answer: "Cuando llegué, él ya se había ido.",
                hint: "'Ya se había ido' — the pluperfect signals the departure happened before the arrival. 'Ya' (already) is a strong pluperfect signal."
            },
            {
                id: "es-b1-u1-q4", level: "B1",
                prompt: "Complete this narrative extract correctly: 'Era una noche oscura. De repente, ___ (sonar) un disparo.'",
                options: ["sonaba", "sonó", "había sonado", "sonaría"],
                answer: "sonó",
                hint: "'Era' sets the background (imperfect). 'De repente' (suddenly) signals a sudden completed event → preterite."
            },
            {
                id: "es-b1-u1-q5", level: "B1",
                prompt: "Complete: 'No pude entrar porque ___ (perder) mi tarjeta.'",
                options: ["perdía", "perdí", "había perdido", "perderé"],
                answer: "había perdido",
                hint: "The loss happened BEFORE the inability to enter. Earlier completed action → pluperfect."
            },
            {
                id: "es-b1-u1-q6", level: "B1",
                prompt: "Which tense combination correctly narrates: 'He used to go to that café when he lived in Madrid'?",
                options: [
                    "Fue a ese café cuando vivió en Madrid.",
                    "Iba a ese café cuando vivía en Madrid.",
                    "Iba a ese café cuando vivió en Madrid.",
                    "Fue a ese café cuando vivía en Madrid."
                ],
                answer: "Iba a ese café cuando vivía en Madrid.",
                hint: "Both are habitual/ongoing states in the past → both imperfect. Neither is a single completed event."
            },
        ]
    },
    {
        id: "es-b1-u2",
        level: "B1",
        order: 2,
        title: "Expressing Wishes — Subjunctive",
        description: "Use the present subjunctive to express wishes, recommendations, emotions, and doubt introduced by trigger phrases like 'quiero que' and 'espero que'.",
        grammarIds: ["es-g-b1-1"],
        vocabIds: ["es-v-b1-011", "es-v-b1-013", "es-v-b1-036", "es-v-b1-072", "es-v-b1-077"],
        verbIds: ["es-vb-b1-1"],
        listeningIds: ["es-l-b1-1"],
        testQuestions: [
            {
                id: "es-b1-u2-q1",
                level: "B1",
                prompt: "Complete: 'Quiero que tú ___ más.' (estudiar)",
                options: ["estudies", "estudias", "estudiarás", "estudia"],
                answer: "estudies",
                hint: "After 'quiero que' use the subjunctive. -ar verbs: -e, -es, -e…"
            },
            {
                id: "es-b1-u2-q2",
                level: "B1",
                prompt: "Which phrase triggers the subjunctive?",
                options: ["Es importante que", "Creo que", "Sé que", "Veo que"],
                answer: "Es importante que",
                hint: "Impersonal expressions of obligation/emotion trigger the subjunctive."
            },
            {
                id: "es-b1-u2-q3",
                level: "B1",
                prompt: "Complete: 'Espero que todo ___ bien.' (ir)",
                options: ["vaya", "va", "irá", "fue"],
                answer: "vaya",
                hint: "After 'espero que' use the subjunctive. Ir is irregular: vaya."
            },
            {
                id: "es-b1-u2-q4",
                level: "B1",
                prompt: "When does Spanish use 'ojalá'?",
                options: [
                    "To express a strong wish or hope, followed by subjunctive",
                    "To make a factual statement",
                    "To give a direct command",
                    "To ask a question"
                ],
                answer: "To express a strong wish or hope, followed by subjunctive",
                hint: "Ojalá (= hopefully) is always followed by subjunctive."
            },
            {
                id: "es-b1-u2-q5",
                level: "B1",
                prompt: "What is the present subjunctive of 'hablar' for 'nosotros'?",
                options: ["hablemos", "hablamos", "hablaremos", "hablemos"],
                answer: "hablemos",
                hint: "-ar verbs take -e endings in the subjunctive: hable, hables, hable, hablemos…"
            },
            {
                id: "es-b1-u2-q6",
                level: "B1",
                prompt: "Complete: 'Te recomiendo que ___ el médico.' (ver)",
                options: ["veas", "ves", "verás", "ve"],
                answer: "veas",
                hint: "After 'te recomiendo que' use the subjunctive. Ver: vea, veas, vea…"
            }
        ]
    },
    {
        id: "es-b1-u3",
        level: "B1",
        order: 3,
        title: "Future Plans — Simple Future",
        description: "Talk about what will definitely happen using the futuro simple. Learn regular endings and common irregular stems.",
        grammarIds: ["es-g-b1-3"],
        vocabIds: ["es-v-b1-047", "es-v-b1-055", "es-v-b1-057", "es-v-b1-039", "es-v-b1-077"],
        verbIds: ["es-vb-b1-3"],
        readingIds: ["es-r-b1-1"],
        testQuestions: [
            {
                id: "es-b1-u3-q1",
                level: "B1",
                prompt: "Complete: 'Mañana yo ___ con mi jefe.' (hablar)",
                options: ["hablaré", "hablo", "hablaría", "hablé"],
                answer: "hablaré",
                hint: "Simple future: infinitive + -é, -ás, -á, -emos, -éis, -án."
            },
            {
                id: "es-b1-u3-q2",
                level: "B1",
                prompt: "What is the future of 'tener' for 'ellos'?",
                options: ["tendrán", "tendrían", "tienen", "tuvieron"],
                answer: "tendrán",
                hint: "Tener has the irregular stem 'tendr-' in the future."
            },
            {
                id: "es-b1-u3-q3",
                level: "B1",
                prompt: "Complete: '¿___ a la fiesta esta noche?' (venir, tú)",
                options: ["Vendrás", "Vienes", "Viniste", "Vendrías"],
                answer: "Vendrás",
                hint: "Venir has the irregular future stem 'vendr-'."
            },
            {
                id: "es-b1-u3-q4",
                level: "B1",
                prompt: "Which sentence correctly expresses a future action using the simple future?",
                options: [
                    "El año que viene viviremos en Madrid.",
                    "El año que viene vivimos en Madrid.",
                    "El año que viene vivíamos en Madrid.",
                    "El año que viene vivimos en Madrid mañana."
                ],
                answer: "El año que viene viviremos en Madrid.",
                hint: "Vivir future nosotros: viviremos."
            },
            {
                id: "es-b1-u3-q5",
                level: "B1",
                prompt: "What is the future stem of 'hacer'?",
                options: ["har-", "hac-", "hacer-", "hiz-"],
                answer: "har-",
                hint: "Hacer → har- (haré, harás, hará, haremos, haréis, harán)."
            },
            {
                id: "es-b1-u3-q6",
                level: "B1",
                prompt: "Translate: 'They will have to work on Saturday.'",
                options: [
                    "Ellos tendrán que trabajar el sábado.",
                    "Ellos tienen que trabajar el sábado.",
                    "Ellos tuvieron que trabajar el sábado.",
                    "Ellos tendrían que trabajar el sábado."
                ],
                answer: "Ellos tendrán que trabajar el sábado.",
                hint: "Future of tener (tendrán) + que + infinitive."
            }
        ]
    },
    {
        id: "es-b1-u4",
        level: "B1",
        order: 4,
        title: "Hypotheticals — Conditional",
        description: "Express what would happen under different circumstances, make polite requests, and report what someone said using the conditional simple.",
        grammarIds: ["es-g-b1-4"],
        vocabIds: ["es-v-b1-073", "es-v-b1-074", "es-v-b1-075", "es-v-b1-076", "es-v-b1-042"],
        verbIds: ["es-vb-b1-2"],
        testQuestions: [
            {
                id: "es-b1-u4-q1",
                level: "B1",
                prompt: "Complete: 'Con más dinero, yo ___ por el mundo.' (viajar)",
                options: ["viajaría", "viajé", "viajo", "viajaré"],
                answer: "viajaría",
                hint: "Conditional endings: -ía, -ías, -ía, -íamos, -íais, -ían on the infinitive."
            },
            {
                id: "es-b1-u4-q2",
                level: "B1",
                prompt: "Which sentence is a polite request using the conditional?",
                options: [
                    "¿Podrías ayudarme con esto?",
                    "¿Puedes ayudarme con esto?",
                    "Ayúdame con esto.",
                    "¿Podías ayudarme con esto?"
                ],
                answer: "¿Podrías ayudarme con esto?",
                hint: "Conditional of poder (podrías) makes requests more polite."
            },
            {
                id: "es-b1-u4-q3",
                level: "B1",
                prompt: "Complete: 'Ella dijo que ___ mañana.' (venir)",
                options: ["vendría", "vendrá", "vino", "viene"],
                answer: "vendría",
                hint: "Reported speech about future events in the past uses the conditional."
            },
            {
                id: "es-b1-u4-q4",
                level: "B1",
                prompt: "What is the conditional of 'salir' for 'nosotros'?",
                options: ["saldríamos", "saldremos", "salimos", "saliríamos"],
                answer: "saldríamos",
                hint: "Salir has the irregular conditional stem 'saldr-'."
            },
            {
                id: "es-b1-u4-q5",
                level: "B1",
                prompt: "Translate: 'In your place, I would study more.'",
                options: [
                    "En tu lugar, estudiaría más.",
                    "En tu lugar, estudiaré más.",
                    "En tu lugar, estudié más.",
                    "En tu lugar, estudias más."
                ],
                answer: "En tu lugar, estudiaría más.",
                hint: "'En tu lugar' (in your place) sets up a hypothetical → conditional."
            },
            {
                id: "es-b1-u4-q6",
                level: "B1",
                prompt: "The conditional and simple future share the same irregular stems. What is the conditional of 'querer' for 'tú'?",
                options: ["querrías", "quieres", "querrás", "quisiste"],
                answer: "querrías",
                hint: "Querer → querr- (conditional: querría, querrías, querría…)."
            }
        ]
    },
    {
        id: "es-b1-u5",
        level: "B1",
        order: 5,
        title: "Purpose & Reason — Por vs Para",
        description: "Master the distinction between por (cause, duration, exchange, means) and para (purpose, recipient, deadline, destination, opinion).",
        grammarIds: ["es-g-b1-5"],
        vocabIds: ["es-v-b1-065", "es-v-b1-047", "es-v-b1-040", "es-v-b1-077", "es-v-b1-078"],
        verbIds: [],
        listeningIds: ["es-l-b1-2"],
        testQuestions: [
            {
                id: "es-b1-u5-q1",
                level: "B1",
                prompt: "Choose the correct preposition: 'Estudié ___ tres horas.' (duration)",
                options: ["por", "para", "en", "de"],
                answer: "por",
                hint: "Duration of time → por."
            },
            {
                id: "es-b1-u5-q2",
                level: "B1",
                prompt: "Choose the correct preposition: 'Este regalo es ___ ti.' (recipient)",
                options: ["para", "por", "de", "a"],
                answer: "para",
                hint: "Recipient of a gift → para."
            },
            {
                id: "es-b1-u5-q3",
                level: "B1",
                prompt: "Complete: 'Salgo ___ Madrid mañana.' (destination)",
                options: ["para", "por", "en", "hacia"],
                answer: "para",
                hint: "Destination of a journey → para."
            },
            {
                id: "es-b1-u5-q4",
                level: "B1",
                prompt: "Complete: 'Lo compré ___ veinte euros.' (exchange)",
                options: ["por", "para", "con", "en"],
                answer: "por",
                hint: "Exchange or price paid → por."
            },
            {
                id: "es-b1-u5-q5",
                level: "B1",
                prompt: "Translate: 'For me, it is a serious problem.' (expressing an opinion)",
                options: ["Para mí, es un problema grave.", "Por mí, es un problema grave.", "A mí, es un problema grave.", "Con mí, es un problema grave."],
                answer: "Para mí, es un problema grave.",
                hint: "Personal opinion → para mí, para ti, para él…"
            },
            {
                id: "es-b1-u5-q6",
                level: "B1",
                prompt: "Which use of 'por' is shown in: 'Lo hice por ti'?",
                options: ["On behalf of / for the sake of someone", "Duration", "Exchange", "Destination"],
                answer: "On behalf of / for the sake of someone",
                hint: "'Por ti' = for your sake / on your behalf."
            }
        ]
    },
    {
        id: "es-b1-u6",
        level: "B1",
        order: 6,
        title: "Si-Clauses — Real & Hypothetical Conditions",
        description: "Build conditional sentences using si-clauses. Real conditions (si + presente → futuro) vs hypothetical ones (si + imperfecto → condicional). Master the backbone of hypothetical thinking and polite suggestion in Spanish.",
        grammarIds: ["es-g-b1-6"],
        vocabIds: ["es-v-b1-081", "es-v-b1-082", "es-v-b1-083", "es-v-b1-084", "es-v-b1-085"],
        verbIds: ["es-vb-b1-4"],
        readingIds: ["es-r-b1-2"],
        testQuestions: [
            { id: "es-b1-u6-q1", level: "B1", prompt: "Complete (real condition): 'Si ___ (tener, tú) tiempo, llámame.'", options: ["tendrías", "tienes", "tuvieras", "tenías"], answer: "tienes", hint: "Real condition: si + presente → futuro/imperativo. The si-clause takes presente." },
            { id: "es-b1-u6-q2", level: "B1", prompt: "Complete (hypothetical): 'Si ___ (ganar, yo) la lotería, viajaría por el mundo.'", options: ["gano", "ganaré", "ganara", "ganaría"], answer: "ganara", hint: "Hypothetical: si + imperfecto de subjuntivo → condicional." },
            { id: "es-b1-u6-q3", level: "B1", prompt: "Which tense NEVER goes directly after 'si' in a conditional?", options: ["presente", "imperfecto de subjuntivo", "condicional", "pretérito indefinido"], answer: "condicional", hint: "Condicional never follows si — it belongs in the result clause only." },
            { id: "es-b1-u6-q4", level: "B1", prompt: "Translate: 'If I were you, I wouldn't accept.'", options: ["Si soy tú, no acepto.", "Si fuera tú, no aceptaría.", "Si era tú, no aceptaría.", "Si fuera tú, no acepté."], answer: "Si fuera tú, no aceptaría.", hint: "Si fuera (imperfecto subjuntivo) → no aceptaría (condicional)." },
            { id: "es-b1-u6-q5", level: "B1", prompt: "What does 'a menos que' mean?", options: ["unless", "in case", "provided that", "as long as"], answer: "unless", hint: "A menos que + subjuntivo = unless. Siempre llevo paraguas, a menos que haga sol." },
            { id: "es-b1-u6-q6", level: "B1", prompt: "Complete: 'Si hubiera estudiado más, ___ (aprobar) el examen.'", options: ["habría aprobado", "aprobaría", "habría aprobado", "aprobé"], answer: "habría aprobado", hint: "Past hypothetical (regret): si + pluscuamperfecto subjuntivo → condicional compuesto." },
        ]
    },
    {
        id: "es-b1-u7",
        level: "B1",
        order: 7,
        title: "Reported Speech",
        description: "Report what someone said, asked, or thought using indirect speech. Master the tense back-shifts that Spanish requires and the key reporting verbs: decir, preguntar, afirmar, explicar.",
        grammarIds: ["es-g-b1-7"],
        vocabIds: ["es-v-b1-086", "es-v-b1-087", "es-v-b1-088", "es-v-b1-089"],
        verbIds: ["es-vb-b1-5"],
        testQuestions: [
            { id: "es-b1-u7-q1", level: "B1", prompt: "Transform to reported speech: 'Estoy cansado.' → Él dijo que ___.", options: ["está cansado", "estaba cansado", "estuvo cansado", "estaría cansado"], answer: "estaba cansado", hint: "Presente → imperfecto in reported speech when the reporting verb is in the past." },
            { id: "es-b1-u7-q2", level: "B1", prompt: "Transform: '¿Tienes hambre?' → Me preguntó si ___.", options: ["tengo hambre", "tenía hambre", "tuve hambre", "tendría hambre"], answer: "tenía hambre", hint: "Yes/no questions in reported speech: si + imperfecto." },
            { id: "es-b1-u7-q3", level: "B1", prompt: "Transform: 'Vendré mañana.' → Dijo que ___.", options: ["vendrá mañana", "viene mañana", "vendría al día siguiente", "vino al día siguiente"], answer: "vendría al día siguiente", hint: "Futuro → condicional in reported speech. 'Mañana' → 'al día siguiente' (time reference shifts)." },
            { id: "es-b1-u7-q4", level: "B1", prompt: "Which verb introduces an indirect question?", options: ["decir que", "preguntar si / qué / cuándo", "afirmar que", "explicar que"], answer: "preguntar si / qué / cuándo", hint: "Questions use preguntar + si (yes/no) or a question word (qué, cuándo, dónde)." },
            { id: "es-b1-u7-q5", level: "B1", prompt: "What does 'según' mean in reported contexts?", options: ["suddenly", "according to", "therefore", "however"], answer: "according to", hint: "Según él/ella = according to him/her — useful for attributing reported ideas." },
            { id: "es-b1-u7-q6", level: "B1", prompt: "Transform: '¡Come más despacio!' → Le dijo que ___.", options: ["come más despacio", "comiera más despacio", "coma más despacio", "comía más despacio"], answer: "comiera más despacio", hint: "Imperatives in reported speech → imperfecto de subjuntivo." },
        ]
    },
    {
        id: "es-b1-u8",
        level: "B1",
        order: 8,
        title: "Opinion, Debate & Structured Arguments",
        description: "Argue a position, express nuanced agreement and disagreement, and structure written and spoken arguments using key discourse markers and the collocations that make Spanish sound natural.",
        grammarIds: ["es-g-b1-8"],
        vocabIds: ["es-v-b1-090", "es-v-b1-091", "es-v-b1-092", "es-v-b1-093", "es-v-b1-094"],
        verbIds: [],
        listeningIds: ["es-l-b1-3"],
        testQuestions: [
            { id: "es-b1-u8-q1", level: "B1", prompt: "How do you express 'on the one hand… on the other hand' in Spanish?", options: ["de más… de menos", "por un lado… por otro lado", "en primer lugar… en segundo lugar", "primero… luego"], answer: "por un lado… por otro lado", hint: "Por un lado / por otro lado structures a two-sided argument." },
            { id: "es-b1-u8-q2", level: "B1", prompt: "Which phrase introduces a concession ('admittedly / I accept that, but…')?", options: ["sin embargo", "es cierto que…, pero", "en conclusión", "por lo tanto"], answer: "es cierto que…, pero", hint: "Es cierto que… pero / si bien… = conceding a point before countering it." },
            { id: "es-b1-u8-q3", level: "B1", prompt: "What does 'tomar una decisión' mean?", options: ["to take a position", "to make a decision", "to take action", "to take a risk"], answer: "to make a decision", hint: "Tomar una decisión — tomar (not hacer) is the correct collocation for 'making a decision' in Spanish." },
            { id: "es-b1-u8-q4", level: "B1", prompt: "How do you politely disagree while acknowledging the other view?", options: ["Estás equivocado.", "Entiendo tu punto, sin embargo…", "No estoy de acuerdo para nada.", "Eso es falso."], answer: "Entiendo tu punto, sin embargo…", hint: "Acknowledge then contrast — sin embargo (however) is the key pivot word." },
            { id: "es-b1-u8-q5", level: "B1", prompt: "What does 'echar de menos' mean?", options: ["to miss (someone/something)", "to lack", "to put aside", "to run away from"], answer: "to miss (someone/something)", hint: "Echar de menos = to miss. A key collocation — not perder (which means to lose)." },
            { id: "es-b1-u8-q6", level: "B1", prompt: "Which phrase signals the conclusion of an argument?", options: ["por un lado", "en cambio", "en conclusión / en definitiva", "sin embargo"], answer: "en conclusión / en definitiva", hint: "En conclusión or en definitiva = in conclusion / ultimately — signals the wrap-up." },
        ]
    },
    {
        id: "es-b1-u9",
        level: "B1",
        order: 9,
        title: "Si-Clause Consolidation — All Three Types",
        description: "Consolidate all three si-clause patterns (real, hypothetical, past regret) and practise the full range of conditional logic in context. Includes high-frequency collocations and B1 discourse skills.",
        grammarIds: ["es-g-b1-6"],
        vocabIds: ["es-v-b1-081", "es-v-b1-082", "es-v-b1-083", "es-v-b1-090", "es-v-b1-091", "es-v-b1-092"],
        verbIds: ["es-vb-b1-4"],
        readingIds: ["es-r-b1-3"],
        testQuestions: [
            { id: "es-b1-u9-q1", level: "B1", prompt: "Identify the si-clause type: 'Si tuviera más tiempo, aprendería japonés.'", options: ["Real condition", "Hypothetical present", "Past regret", "General truth"], answer: "Hypothetical present", hint: "Si + imperfecto subjuntivo (tuviera) → condicional (aprendería) = hypothetical present." },
            { id: "es-b1-u9-q2", level: "B1", prompt: "Identify the type: 'Si hubiera llegado antes, lo habría visto.'", options: ["Real condition", "Hypothetical present", "Past hypothetical", "Future plan"], answer: "Past hypothetical", hint: "Si + pluscuamperfecto subjuntivo → condicional compuesto = past regret/hypothetical." },
            { id: "es-b1-u9-q3", level: "B1", prompt: "Complete: 'Si ___ (llover, mañana), nos quedaremos en casa.'", options: ["llueve", "lloviera", "llovería", "ha llovido"], answer: "llueve", hint: "Real future condition: si + presente → futuro (or quedamos)." },
            { id: "es-b1-u9-q4", level: "B1", prompt: "Which collocation is correct for 'to be aware of'?", options: ["hacer caso de", "darse cuenta de", "tener en cuenta", "echar en falta"], answer: "darse cuenta de", hint: "Darse cuenta de = to realise / be aware of. A key B1 collocation." },
            { id: "es-b1-u9-q5", level: "B1", prompt: "Complete: 'Si yo fuera el presidente, ___ (cambiar) esta ley.'", options: ["cambio", "cambiaré", "cambiaría", "cambiara"], answer: "cambiaría", hint: "Si + imperfecto subjuntivo → condicional simple (cambiaría)." },
            { id: "es-b1-u9-q6", level: "B1", prompt: "What does 'tener en cuenta' mean?", options: ["to take into account", "to keep in mind only", "to have a point", "to count on someone"], answer: "to take into account", hint: "Tener en cuenta = to take into account / bear in mind. High-frequency B1 collocation." },
        ]
    },
    {
        id: "es-b1-u10",
        level: "B1",
        order: 10,
        title: "Advanced Subjunctive — Imperfecto, Relative & Temporal Clauses",
        description: "Master the imperfecto de subjuntivo — the key form behind si-clauses, polite requests, and reported commands. Then extend the subjunctive into two new contexts: relative clauses with an unknown or indefinite antecedent, and temporal clauses (cuando, hasta que, en cuanto) referring to future events.",
        grammarIds: ["es-g-b1-10", "es-g-b1-11", "es-g-b1-12"],
        vocabIds: ["es-v-b1-095", "es-v-b1-096", "es-v-b1-097", "es-v-b1-098"],
        verbIds: ["es-vb-b1-1"],
        testQuestions: [
            {
                id: "es-b1-u10-q1", level: "B1",
                prompt: "Form the imperfecto de subjuntivo of 'tener' (yo).",
                options: ["tuviera", "tuvera", "teniera", "tuvara"],
                answer: "tuviera",
                hint: "Tener → ellos preterite: tuvieron → drop -ron → tuvie- + -ra = tuviera."
            },
            {
                id: "es-b1-u10-q2", level: "B1",
                prompt: "Complete: 'Busco un piso que ___ (tener) terraza.' (you don't have one yet)",
                options: ["tiene", "tenga", "tuviera", "tendrá"],
                answer: "tenga",
                hint: "Indefinite/hypothetical antecedent (any flat that has a terrace) → subjunctive (present: tenga)."
            },
            {
                id: "es-b1-u10-q3", level: "B1",
                prompt: "Complete: 'Cuando ___ (terminar, tú) el informe, mándamelo.'",
                options: ["terminas", "termines", "terminarás", "terminabas"],
                answer: "termines",
                hint: "Future instruction with 'cuando' → subjunctive. The event hasn't happened yet."
            },
            {
                id: "es-b1-u10-q4", level: "B1",
                prompt: "Which sentence uses the subjunctive correctly?",
                options: [
                    "Es cierto que viene mañana.",
                    "Es posible que venga mañana.",
                    "Es verdad que viene mañana.",
                    "Es obvio que viene mañana."
                ],
                answer: "Es posible que venga mañana.",
                hint: "Es posible que → subjunctive (uncertainty). Es cierto/verdad/obvio que → indicative (certainty)."
            },
            {
                id: "es-b1-u10-q5", level: "B1",
                prompt: "Complete: 'Esperaré hasta que ___ (llegar, ellos).'",
                options: ["llegan", "llegaron", "lleguen", "llegarían"],
                answer: "lleguen",
                hint: "Hasta que + future event → subjunctive."
            },
            {
                id: "es-b1-u10-q6", level: "B1",
                prompt: "What does 'quisiera' signal in 'Quisiera hablar con el director'?",
                options: ["A past wish that was not fulfilled", "A polite request using the imperfecto de subjuntivo of querer", "A condition introduced by si", "A reported command"],
                answer: "A polite request using the imperfecto de subjuntivo of querer",
                hint: "Quisiera (imperfecto subj. of querer) softens requests more than querría (conditional) — very common in formal and polite register."
            },
        ]
    },
    {
        id: "es-b1-u11",
        level: "B1",
        order: 11,
        title: "Passive Voice & Gerundio Constructions",
        description: "Use the true passive with ser + past participle to report events with an explicit agent — the construction of news, formal writing, and academic Spanish. Then master the gerundio in time-span constructions (llevar, seguir, ir, venir + gerundio) that describe ongoing or developing situations.",
        grammarIds: ["es-g-b1-13", "es-g-b1-14"],
        vocabIds: ["es-v-b1-099", "es-v-b1-100", "es-v-b1-076", "es-v-b1-079", "es-v-b1-080"],
        verbIds: ["es-vb-b1-3"],
        testQuestions: [
            {
                id: "es-b1-u11-q1", level: "B1",
                prompt: "Transform to passive: 'El gobierno aprobó la ley.' → 'La ley ___ ___ el gobierno.'",
                options: ["fue aprobada por", "fue aprobado por", "es aprobada de", "ha sido aprobado por"],
                answer: "fue aprobada por",
                hint: "Passive with ser: fue (pretérito of ser) + aprobada (feminine, agrees with 'la ley') + por."
            },
            {
                id: "es-b1-u11-q2", level: "B1",
                prompt: "Which sentence correctly uses 'llevar + gerundio'?",
                options: [
                    "Llevo esperando dos horas al autobús.",
                    "Llevo dos horas esperando al autobús.",
                    "Llevo dos horas que espero al autobús.",
                    "Llevo por dos horas esperando."
                ],
                answer: "Llevo dos horas esperando al autobús.",
                hint: "Llevar + time + gerundio — the time expression comes between llevar and the gerundio."
            },
            {
                id: "es-b1-u11-q3", level: "B1",
                prompt: "What is the difference between 'La puerta está cerrada' and 'La puerta fue cerrada por el guardia'?",
                options: [
                    "No difference — both mean the door was closed",
                    "'Está cerrada' = current state; 'fue cerrada' = the action of closing",
                    "'Fue cerrada' is more informal than 'está cerrada'",
                    "'Está cerrada' describes the past; 'fue cerrada' the present"
                ],
                answer: "'Está cerrada' = current state; 'fue cerrada' = the action of closing",
                hint: "Estar + participio = resulting STATE. Ser + participio = the ACTION (passive event)."
            },
            {
                id: "es-b1-u11-q4", level: "B1",
                prompt: "Complete: 'El proyecto ___ (ir) mejorando semana a semana.'",
                options: ["está", "va", "lleva", "sigue"],
                answer: "va",
                hint: "Ir + gerundio = gradual progressive development — the project is progressively improving."
            },
            {
                id: "es-b1-u11-q5", level: "B1",
                prompt: "What does 'seguir + gerundio' express?",
                options: ["An action that happened suddenly", "A continuous action that keeps going / is still happening", "An action that happened before another", "A polite request"],
                answer: "A continuous action that keeps going / is still happening",
                hint: "Seguir + gerundio = to keep doing / to still be doing. Sigue lloviendo = it's still raining."
            },
            {
                id: "es-b1-u11-q6", level: "B1",
                prompt: "Translate: 'The new hospital was inaugurated by the mayor.'",
                options: [
                    "El nuevo hospital se inauguró por el alcalde.",
                    "El nuevo hospital fue inaugurado por el alcalde.",
                    "El nuevo hospital estaba inaugurado por el alcalde.",
                    "El nuevo hospital inauguró el alcalde."
                ],
                answer: "El nuevo hospital fue inaugurado por el alcalde.",
                hint: "True passive with ser: fue inaugurado + por + agent."
            },
        ]
    },
]

// Alias for backward compatibility with index.ts assembler
export const b1Units = esUnitsB1
