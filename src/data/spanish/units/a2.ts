// data/spanish/units/a2.ts
import { LessonUnit } from "../../../types"

// A2 units — 7 full units with test questions.

export const esUnitsA2: LessonUnit[] = [
    {
        id: "es-a2-u1",
        level: "A2",
        order: 1,
        title: "Talking About the Past — Preterite",
        description: "Learn to narrate completed past events using the pretérito indefinido. Practice regular and key irregular forms.",
        grammarIds: ["es-g-a2-1"],
        vocabIds: ["es-v-a2-049", "es-v-a2-050", "es-v-a2-051", "es-v-a2-052", "es-v-a2-006"],
        verbIds: ["es-vb-a2-1"],
        testQuestions: [
            {
                id: "es-a2-u1-q1",
                level: "A2",
                prompt: "Which is the correct preterite form of 'hablar' for 'yo'?",
                options: ["hablé", "hablaba", "hablo", "hablaré"],
                answer: "hablé",
                hint: "Regular -ar preterite: -é, -aste, -ó…"
            },
            {
                id: "es-a2-u1-q2",
                level: "A2",
                prompt: "Complete: 'Ayer nosotros ___ al cine.' (ir)",
                options: ["fuimos", "íbamos", "vamos", "iremos"],
                answer: "fuimos",
                hint: "Ir and ser share the same irregular preterite forms."
            },
            {
                id: "es-a2-u1-q3",
                level: "A2",
                prompt: "Which sentence is in the preterite?",
                options: ["Comía pizza cada día.", "Comí pizza ayer.", "Como pizza ahora.", "Comeré pizza mañana."],
                answer: "Comí pizza ayer.",
                hint: "The preterite marks a completed action at a specific time."
            },
            {
                id: "es-a2-u1-q4",
                level: "A2",
                prompt: "What is the preterite of 'tener' for 'él'?",
                options: ["tuvo", "tenió", "tenía", "tiene"],
                answer: "tuvo",
                hint: "Tener has an irregular preterite stem: tuv-."
            },
            {
                id: "es-a2-u1-q5",
                level: "A2",
                prompt: "Complete: 'Ellos ___ la carta ayer.' (escribir)",
                options: ["escribieron", "escribían", "escriben", "escribirán"],
                answer: "escribieron",
                hint: "Regular -ir preterite, ellos: -ieron."
            },
            {
                id: "es-a2-u1-q6",
                level: "A2",
                prompt: "Which time word signals the preterite?",
                options: ["siempre", "ayer", "normalmente", "todos los días"],
                answer: "ayer",
                hint: "Words like 'ayer', 'el lunes pasado', and 'hace dos días' signal the preterite."
            }
        ]
    },
    {
        id: "es-a2-u2",
        level: "A2",
        order: 2,
        title: "Daily Routines — Reflexive Verbs",
        description: "Describe your daily routine using reflexive verbs such as levantarse, ducharse, and acostarse.",
        grammarIds: ["es-g-a2-2"],
        vocabIds: ["es-v-a2-011", "es-v-a2-012", "es-v-a2-013", "es-v-a2-014", "es-v-a2-015", "es-v-a2-016"],
        verbIds: ["es-vb-a2-3"],
        testQuestions: [
            {
                id: "es-a2-u2-q1",
                level: "A2",
                prompt: "What does the '-se' ending on a Spanish infinitive tell you?",
                options: ["The verb is irregular", "The verb is reflexive", "The verb is in the past", "The verb is formal"],
                answer: "The verb is reflexive",
                hint: "Reflexive verbs show the subject acts on itself."
            },
            {
                id: "es-a2-u2-q2",
                level: "A2",
                prompt: "Choose the correct form: 'Yo ___ a las siete.' (levantarse)",
                options: ["me levanto", "te levantas", "se levanta", "levanto"],
                answer: "me levanto",
                hint: "With 'yo', the reflexive pronoun is 'me'."
            },
            {
                id: "es-a2-u2-q3",
                level: "A2",
                prompt: "How do you say 'She gets dressed quickly'?",
                options: ["Ella se viste rápido.", "Ella viste rápido.", "Ella te vistes rápido.", "Ella me viste rápido."],
                answer: "Ella se viste rápido.",
                hint: "Third person reflexive pronoun is 'se'."
            },
            {
                id: "es-a2-u2-q4",
                level: "A2",
                prompt: "Complete: 'Nosotros ___ tarde.' (acostarse)",
                options: ["nos acostamos", "se acostamos", "me acostamos", "os acostáis"],
                answer: "nos acostamos",
                hint: "For 'nosotros', the reflexive pronoun is 'nos'."
            },
            {
                id: "es-a2-u2-q5",
                level: "A2",
                prompt: "Which sentence uses a reflexive verb correctly?",
                options: ["Me ducho por la mañana.", "Ducho me por la mañana.", "Me ducho yo por la mañana me.", "Ducho por la mañana."],
                answer: "Me ducho por la mañana.",
                hint: "The reflexive pronoun goes before the conjugated verb."
            },
            {
                id: "es-a2-u2-q6",
                level: "A2",
                prompt: "Yesterday I got up at six. Which is correct?",
                options: ["Me levanté a las seis.", "Me levanto a las seis.", "Te levantaste a las seis.", "Me levantaba a las seis."],
                answer: "Me levanté a las seis.",
                hint: "Past completed action → preterite of reflexive verb."
            }
        ]
    },
    {
        id: "es-a2-u3",
        level: "A2",
        order: 3,
        title: "Likes and Preferences — Gustar",
        description: "Express what you and others like, love, and dislike using gustar, encantar, and similar verbs.",
        grammarIds: ["es-g-a2-3"],
        vocabIds: ["es-v-a2-064", "es-v-a2-065", "es-v-a2-068", "es-v-a2-069", "es-v-a2-070", "es-v-a2-048"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u3-q1",
                level: "A2",
                prompt: "How do you say 'I like music' in Spanish?",
                options: ["Me gusta la música.", "Gusto la música.", "Me gustan la música.", "Yo gusta música."],
                answer: "Me gusta la música.",
                hint: "Música is singular, so use 'gusta' (not 'gustan')."
            },
            {
                id: "es-a2-u3-q2",
                level: "A2",
                prompt: "Complete: '___ gustan los libros.' (You — informal)",
                options: ["Te", "Me", "Le", "Se"],
                answer: "Te",
                hint: "For 'tú' (you informal), the indirect object pronoun is 'te'."
            },
            {
                id: "es-a2-u3-q3",
                level: "A2",
                prompt: "Which form is correct: 'She loves to dance'?",
                options: ["Le encanta bailar.", "Le encantan bailar.", "Se encanta bailar.", "Le gusta bailar mucho."],
                answer: "Le encanta bailar.",
                hint: "Infinitives are singular → use encanta (not encantan)."
            },
            {
                id: "es-a2-u3-q4",
                level: "A2",
                prompt: "How do you say 'We like cats' in Spanish?",
                options: ["Nos gustan los gatos.", "Nos gusta los gatos.", "Me gustan los gatos.", "Os gustan los gatos."],
                answer: "Nos gustan los gatos.",
                hint: "Gatos is plural, so use 'gustan'. 'We' → nos."
            },
            {
                id: "es-a2-u3-q5",
                level: "A2",
                prompt: "Which verb works the same way as 'gustar'?",
                options: ["encantar", "hablar", "comer", "vivir"],
                answer: "encantar",
                hint: "Encantar, molestar, and interesar all follow the gustar pattern."
            },
            {
                id: "es-a2-u3-q6",
                level: "A2",
                prompt: "Translate: '¿Te molesta el ruido?'",
                options: ["Does the noise bother you?", "Do you like noise?", "Can you hear the noise?", "Is the noise loud?"],
                answer: "Does the noise bother you?",
                hint: "Molestar = to bother; it follows the same structure as gustar."
            }
        ]
    },
    {
        id: "es-a2-u4",
        level: "A2",
        order: 4,
        title: "Direct Object Pronouns",
        description: "Replace noun objects with pronouns (lo, la, los, las, me, te…) to make speech more natural and avoid repetition.",
        grammarIds: ["es-g-a2-4"],
        vocabIds: ["es-v-a2-025", "es-v-a2-026", "es-v-a2-028", "es-v-a2-030", "es-v-a2-067"],
        verbIds: ["es-vb-a2-2"],
        testQuestions: [
            {
                id: "es-a2-u4-q1",
                level: "A2",
                prompt: "Replace the object: 'Compré el libro.' → 'Compré ___.'",
                options: ["lo", "la", "le", "los"],
                answer: "lo",
                hint: "Libro is masculine singular → lo."
            },
            {
                id: "es-a2-u4-q2",
                level: "A2",
                prompt: "Where does the direct object pronoun go when using a conjugated verb?",
                options: ["Before the verb", "After the verb", "At the end of the sentence", "Between subject and verb"],
                answer: "Before the verb",
                hint: "Direct object pronouns precede the conjugated verb."
            },
            {
                id: "es-a2-u4-q3",
                level: "A2",
                prompt: "Choose the correct sentence: 'I want to see her.'",
                options: ["Quiero verla.", "La quiero ver.", "Quiero la ver.", "Verla quiero."],
                answer: "Quiero verla.",
                hint: "With an infinitive the pronoun can attach to the end: ver + la."
            },
            {
                id: "es-a2-u4-q4",
                level: "A2",
                prompt: "Replace: 'Veo a mis amigos todos los días.' → 'Veo ___ todos los días.'",
                options: ["los", "las", "les", "lo"],
                answer: "los",
                hint: "Amigos is masculine plural → los."
            },
            {
                id: "es-a2-u4-q5",
                level: "A2",
                prompt: "Which pronoun replaces a feminine plural noun as a direct object?",
                options: ["las", "los", "les", "le"],
                answer: "las",
                hint: "Feminine plural direct object → las."
            },
            {
                id: "es-a2-u4-q6",
                level: "A2",
                prompt: "Complete: '¿Puedes ayudar___ ?' (me)",
                options: ["ayudarme", "me ayudar", "ayudar me", "me ayudarme"],
                answer: "ayudarme",
                hint: "When attached to an infinitive, the pronoun is added directly to the end."
            }
        ]
    },
    {
        id: "es-a2-u5",
        level: "A2",
        order: 5,
        title: "Indirect Object Pronouns",
        description: "Learn to say 'to whom' or 'for whom' an action is done using me, te, le, nos, os, les.",
        grammarIds: ["es-g-a2-5"],
        vocabIds: ["es-v-a2-044", "es-v-a2-045", "es-v-a2-047", "es-v-a2-031", "es-v-a2-002"],
        verbIds: ["es-vb-a2-6"],
        testQuestions: [
            {
                id: "es-a2-u5-q1",
                level: "A2",
                prompt: "Which sentence means 'I give you the book'?",
                options: ["Te doy el libro.", "Le doy el libro.", "Me das el libro.", "Os doy el libro."],
                answer: "Te doy el libro.",
                hint: "Indirect object 'you' (informal) → te."
            },
            {
                id: "es-a2-u5-q2",
                level: "A2",
                prompt: "What does the indirect object pronoun tell you?",
                options: ["To whom or for whom the action is done", "Who performs the action", "Which noun receives the action directly", "When the action happens"],
                answer: "To whom or for whom the action is done",
                hint: "Indirect object = recipient of the action."
            },
            {
                id: "es-a2-u5-q3",
                level: "A2",
                prompt: "Complete: 'Ella ___ mandó un mensaje.' (to him)",
                options: ["le", "lo", "te", "me"],
                answer: "le",
                hint: "Third person singular indirect object → le."
            },
            {
                id: "es-a2-u5-q4",
                level: "A2",
                prompt: "Translate: 'They explained it to us.'",
                options: ["Nos lo explicaron.", "Les lo explicaron.", "Me lo explicaron.", "Os lo explicaron."],
                answer: "Nos lo explicaron.",
                hint: "Indirect 'us' → nos; when combined with direct object lo, nos goes first."
            },
            {
                id: "es-a2-u5-q5",
                level: "A2",
                prompt: "Which pronoun replaces 'le' when followed by lo/la/los/las?",
                options: ["se", "te", "me", "nos"],
                answer: "se",
                hint: "Le/les → se before lo, la, los, las to avoid two l-sounds."
            },
            {
                id: "es-a2-u5-q6",
                level: "A2",
                prompt: "Complete: '¿___ puedes decir la verdad?' (to me)",
                options: ["Me", "Te", "Le", "Se"],
                answer: "Me",
                hint: "Indirect object 'to me' → me."
            }
        ]
    },
    {
        id: "es-a2-u6",
        level: "A2",
        order: 6,
        title: "Comparing Things — Comparatives and Superlatives",
        description: "Compare people, places, and things using más/menos … que, tan … como, and superlative constructions.",
        grammarIds: ["es-g-a2-6"],
        vocabIds: ["es-v-a2-027", "es-v-a2-076", "es-v-a2-077", "es-v-a2-078", "es-v-a2-007", "es-v-a2-004"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u6-q1",
                level: "A2",
                prompt: "How do you say 'This hotel is more expensive than the other one'?",
                options: [
                    "Este hotel es más caro que el otro.",
                    "Este hotel es muy caro que el otro.",
                    "Este hotel es más caro como el otro.",
                    "Este hotel es tan caro que el otro."
                ],
                answer: "Este hotel es más caro que el otro.",
                hint: "More … than = más + adjective + que."
            },
            {
                id: "es-a2-u6-q2",
                level: "A2",
                prompt: "Which structure means 'as … as'?",
                options: ["tan + adj + como", "más + adj + que", "menos + adj + que", "el/la más + adj"],
                answer: "tan + adj + como",
                hint: "Equal comparisons: tan … como."
            },
            {
                id: "es-a2-u6-q3",
                level: "A2",
                prompt: "What is the superlative of 'bueno'?",
                options: ["el mejor", "el más bueno", "el muy bueno", "el buenísimo"],
                answer: "el mejor",
                hint: "Bueno has the irregular comparative/superlative: mejor."
            },
            {
                id: "es-a2-u6-q4",
                level: "A2",
                prompt: "Complete: 'Es ___ restaurante famoso de la ciudad.'",
                options: ["el más", "el muy", "el tan", "más"],
                answer: "el más",
                hint: "Superlative: el/la + más + adjective."
            },
            {
                id: "es-a2-u6-q5",
                level: "A2",
                prompt: "Which sentence means 'My sister is younger than me'?",
                options: [
                    "Mi hermana es menor que yo.",
                    "Mi hermana es más joven que yo.",
                    "Mi hermana es menos grande que yo.",
                    "Mi hermana es la más joven."
                ],
                answer: "Mi hermana es menor que yo.",
                hint: "Joven → menor (irregular comparative meaning 'younger')."
            },
            {
                id: "es-a2-u6-q6",
                level: "A2",
                prompt: "What does '-ísimo/-ísima' add to an adjective?",
                options: ["Absolute superlative (extremely/very)", "Comparative (more than)", "Equal comparison (as … as)", "Negative comparison (less than)"],
                answer: "Absolute superlative (extremely/very)",
                hint: "Buenísimo = extremely good; cansadísima = extremely tired."
            }
        ]
    },
    {
        id: "es-a2-u7",
        level: "A2",
        order: 7,
        title: "This, That, Those — Demonstratives",
        description: "Use demonstrative adjectives to point out specific things near you, near the listener, or far away.",
        grammarIds: ["es-g-a2-7"],
        vocabIds: ["es-v-a2-079", "es-v-a2-080", "es-v-a2-075", "es-v-a2-074", "es-v-a2-026"],
        verbIds: ["es-vb-a2-4", "es-vb-a2-5"],
        testQuestions: [
            {
                id: "es-a2-u7-q1",
                level: "A2",
                prompt: "Which demonstrative means 'this' (near speaker, masculine singular)?",
                options: ["este", "ese", "aquel", "esta"],
                answer: "este",
                hint: "ESTE/ESTA = this (near speaker). Masculine singular → este."
            },
            {
                id: "es-a2-u7-q2",
                level: "A2",
                prompt: "Complete: '___ zapatos son muy cómodos.' (these)",
                options: ["Estos", "Esos", "Aquellos", "Este"],
                answer: "Estos",
                hint: "These (near speaker, masculine plural) → estos."
            },
            {
                id: "es-a2-u7-q3",
                level: "A2",
                prompt: "Which demonstrative refers to something far from both speaker and listener?",
                options: ["aquel/aquella", "este/esta", "ese/esa", "uno/una"],
                answer: "aquel/aquella",
                hint: "AQUEL/AQUELLA = that (over there), far from both people."
            },
            {
                id: "es-a2-u7-q4",
                level: "A2",
                prompt: "Translate: 'That jacket is very pretty.' (near listener, feminine)",
                options: ["Esa chaqueta es muy bonita.", "Esta chaqueta es muy bonita.", "Aquella chaqueta es muy bonita.", "Ese chaqueta es muy bonita."],
                answer: "Esa chaqueta es muy bonita.",
                hint: "Near listener, feminine singular → esa."
            },
            {
                id: "es-a2-u7-q5",
                level: "A2",
                prompt: "What gender/number is 'aquellas'?",
                options: ["Feminine plural", "Masculine plural", "Feminine singular", "Masculine singular"],
                answer: "Feminine plural",
                hint: "Aquella (f. sg.) → aquellas (f. pl.)."
            },
            {
                id: "es-a2-u7-q6",
                level: "A2",
                prompt: "Complete: '¿Cuánto cuesta ___ bolso?' (that one near you, masculine)",
                options: ["ese", "este", "aquel", "esos"],
                answer: "ese",
                hint: "Near the listener, masculine singular → ese."
            }
        ]
    }
]

// Alias for backward compatibility with index.ts assembler
export const a2Units = esUnitsA2
