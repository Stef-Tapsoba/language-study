// data/spanish/units/b1.ts
import { LessonUnit } from "../../../types"

// B1 units — 5 full units with test questions.

export const esUnitsB1: LessonUnit[] = [
    {
        id: "es-b1-u1",
        level: "B1",
        order: 1,
        title: "Habitual Past — Imperfect",
        description: "Describe how things used to be, habitual past actions, and background situations using the imperfect tense (imperfecto).",
        grammarIds: ["es-g-b1-2"],
        vocabIds: ["es-v-b1-068", "es-v-b1-010", "es-v-b1-9", "es-v-b1-076", "es-v-b1-039"],
        verbIds: ["es-vb-b1-2"],
        testQuestions: [
            {
                id: "es-b1-u1-q1",
                level: "B1",
                prompt: "Which sentence uses the imperfect correctly for a habitual past action?",
                options: [
                    "Cuando era niño, jugaba al fútbol todos los días.",
                    "Cuando era niño, jugué al fútbol todos los días.",
                    "Cuando soy niño, jugaba al fútbol todos los días.",
                    "Cuando era niño, jugaré al fútbol todos los días."
                ],
                answer: "Cuando era niño, jugaba al fútbol todos los días.",
                hint: "Habitual or repeated past actions use the imperfect."
            },
            {
                id: "es-b1-u1-q2",
                level: "B1",
                prompt: "What is the imperfect of 'vivir' for 'yo'?",
                options: ["vivía", "viví", "vivo", "viviré"],
                answer: "vivía",
                hint: "-ir verbs in the imperfect: -ía, -ías, -ía, -íamos, -íais, -ían."
            },
            {
                id: "es-b1-u1-q3",
                level: "B1",
                prompt: "Complete: 'Antes, nosotros ___ juntos cada domingo.' (comer)",
                options: ["comíamos", "comimos", "comemos", "comeremos"],
                answer: "comíamos",
                hint: "-er imperfect nosotros: -íamos."
            },
            {
                id: "es-b1-u1-q4",
                level: "B1",
                prompt: "Which time expression signals the imperfect rather than the preterite?",
                options: ["siempre", "ayer", "el lunes pasado", "hace tres días"],
                answer: "siempre",
                hint: "Siempre, normalmente, todos los días → habitual = imperfect."
            },
            {
                id: "es-b1-u1-q5",
                level: "B1",
                prompt: "Translate using the imperfect: 'It used to rain a lot in winter.'",
                options: ["Llovía mucho en invierno.", "Llovió mucho en invierno.", "Llueve mucho en invierno.", "Lloverá mucho en invierno."],
                answer: "Llovía mucho en invierno.",
                hint: "Ongoing or repeated past weather description → imperfect."
            },
            {
                id: "es-b1-u1-q6",
                level: "B1",
                prompt: "What is the imperfect of 'ser' for 'ella'?",
                options: ["era", "fue", "es", "será"],
                answer: "era",
                hint: "Ser has an irregular imperfect: era, eras, era, éramos, erais, eran."
            }
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
    }
]

// Alias for backward compatibility with index.ts assembler
export const b1Units = esUnitsB1
