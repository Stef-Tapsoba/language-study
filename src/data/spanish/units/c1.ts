import { LessonUnit } from "../../../types"

// C1 units — 5 units with test questions.

export const c1Units: LessonUnit[] = [
    {
        id: "es-c1-u1",
        level: "C1",
        order: 1,
        title: "Pluperfect Subjunctive",
        description: "Form the pluperfect subjunctive (hubiera/hubiese + past participle) to express counterfactual past conditions in si-clauses, unfulfilled past wishes with ojalá, and regret expressions.",
        grammarIds: ["es-g-c1-1"],
        vocabIds: ["es-v-c1-001", "es-v-c1-029", "es-v-c1-053", "es-v-c1-069", "es-v-c1-075"],
        verbIds: ["es-vb-c1-1"],
        testQuestions: [
            {
                id: "es-c1-u1-q1",
                level: "C1",
                prompt: "Complete the si-clause (Type-3): 'Si ___ (estudiar, yo) más, habría aprobado el examen.'",
                options: ["hubiera estudiado", "habría estudiado", "hubiera estudiando", "haya estudiado"],
                answer: "hubiera estudiado",
                hint: "Type-3 si-clause = Si + pluperfect subjunctive (hubiera/hubiese + past participle)."
            },
            {
                id: "es-c1-u1-q2",
                level: "C1",
                prompt: "Which sentence correctly expresses an unfulfilled past wish with 'ojalá'?",
                options: [
                    "Ojalá hubiera llegado a tiempo.",
                    "Ojalá haya llegado a tiempo.",
                    "Ojalá llegaría a tiempo.",
                    "Ojalá llegara a tiempo."
                ],
                answer: "Ojalá hubiera llegado a tiempo.",
                hint: "Ojalá + pluperfect subjunctive expresses a wish about the past that was not fulfilled."
            },
            {
                id: "es-c1-u1-q3",
                level: "C1",
                prompt: "How is the pluperfect subjunctive formed?",
                options: [
                    "Imperfect subjunctive of haber (hubiera) + past participle",
                    "Conditional of haber (habría) + past participle",
                    "Present subjunctive of haber (haya) + past participle",
                    "Preterite of haber (hubo) + past participle"
                ],
                answer: "Imperfect subjunctive of haber (hubiera) + past participle",
                hint: "Pluperfect subjunctive = hubiera/hubiese + participio pasado (e.g. hubiera venido)."
            },
            {
                id: "es-c1-u1-q4",
                level: "C1",
                prompt: "Pluperfect subjunctive of 'venir' (nosotros)?",
                options: ["hubiéramos venido", "habríamos venido", "hemos venido", "hayamos venido"],
                answer: "hubiéramos venido",
                hint: "Venir pluperfect subjunctive: hubiera venido, hubieras venido… hubiéramos venido (note accent)."
            },
            {
                id: "es-c1-u1-q5",
                level: "C1",
                prompt: "Translate: 'If we had left earlier, we would not have missed the train.'",
                options: [
                    "Si hubiésemos salido antes, no habríamos perdido el tren.",
                    "Si hubiésemos salido antes, no perderíamos el tren.",
                    "Si saliéramos antes, no habríamos perdido el tren.",
                    "Si salimos antes, no habríamos perdido el tren."
                ],
                answer: "Si hubiésemos salido antes, no habríamos perdido el tren.",
                hint: "Type-3: si + pluperfect subjunctive (hubiésemos salido) + conditional perfect (habríamos perdido)."
            },
            {
                id: "es-c1-u1-q6",
                level: "C1",
                prompt: "What does 'epistemología' mean?",
                options: ["epistemology — the study of the foundations of knowledge", "ontology — the study of being", "axiology — the study of values", "phenomenology — the study of experience"],
                answer: "epistemology — the study of the foundations of knowledge",
                hint: "La epistemología estudia los fundamentos, límites y validez del conocimiento humano."
            }
        ]
    },
    {
        id: "es-c1-u2",
        level: "C1",
        order: 2,
        title: "Type-3 Conditionals",
        description: "Construct Type-3 conditionals using Si + pluperfect subjunctive + conditional perfect to discuss hypothetical consequences of past events that did not occur.",
        grammarIds: ["es-g-c1-2"],
        vocabIds: ["es-v-c1-011", "es-v-c1-061", "es-v-c1-062", "es-v-c1-066", "es-v-c1-068"],
        verbIds: ["es-vb-c1-3"],
        testQuestions: [
            {
                id: "es-c1-u2-q1",
                level: "C1",
                prompt: "Complete the Type-3 conditional: 'Si me ___ (invitar, ellos), ___ (ir, yo).'",
                options: ["hubieran invitado / habría ido", "hubieran invitado / iría", "habrían invitado / habría ido", "invitaran / habría ido"],
                answer: "hubieran invitado / habría ido",
                hint: "Type-3: si + pluperfect subjunctive (hubieran invitado) + conditional perfect (habría ido)."
            },
            {
                id: "es-c1-u2-q2",
                level: "C1",
                prompt: "Which is the correct alternative construction without 'si' for: 'Si hubiera sabido la verdad, lo habría evitado.'?",
                options: [
                    "De haber sabido la verdad, lo habría evitado.",
                    "Haber sabido la verdad, lo habría evitado.",
                    "Si haber sabido la verdad, lo habría evitado.",
                    "De saber la verdad, lo habría evitado."
                ],
                answer: "De haber sabido la verdad, lo habría evitado.",
                hint: "De + infinitive compuesto (De haber + past participle) replaces si + pluperfect subjunctive."
            },
            {
                id: "es-c1-u2-q3",
                level: "C1",
                prompt: "Conditional perfect of 'hacer' (yo)?",
                options: ["habría hecho", "habría hacido", "hubiera hecho", "haré hecho"],
                answer: "habría hecho",
                hint: "Conditional perfect = habría + past participle. Hacer → hecho (irregular participle)."
            },
            {
                id: "es-c1-u2-q4",
                level: "C1",
                prompt: "Identify the Type-3 conditional:",
                options: [
                    "Si hubieran llegado a tiempo, habrían conocido al conferenciante.",
                    "Si llegaran a tiempo, conocerían al conferenciante.",
                    "Si llegan a tiempo, conocerán al conferenciante.",
                    "Si llegaban a tiempo, conocían al conferenciante."
                ],
                answer: "Si hubieran llegado a tiempo, habrían conocido al conferenciante.",
                hint: "Type-3 = impossible past condition: si + pluperfect subjunctive + conditional perfect."
            },
            {
                id: "es-c1-u2-q5",
                level: "C1",
                prompt: "Future perfect of 'hacer' (ellos)?",
                options: ["habrán hecho", "habrían hecho", "hubieran hecho", "harán hecho"],
                answer: "habrán hecho",
                hint: "Future perfect = habré/habrás/habrá… habrán + past participle. Hacer → hecho."
            },
            {
                id: "es-c1-u2-q6",
                level: "C1",
                prompt: "What does 'rescindir un contrato' mean?",
                options: ["to rescind / terminate a contract", "to sign a contract", "to renew a contract", "to audit a contract"],
                answer: "to rescind / terminate a contract",
                hint: "Rescindir = to formally cancel or terminate. Used in professional/legal register."
            }
        ]
    },
    {
        id: "es-c1-u3",
        level: "C1",
        order: 3,
        title: "Advanced Impersonal Constructions",
        description: "Use formal impersonal constructions such as se dice que, es sabido que, resulta que and cabe señalar que to present information in academic and journalistic registers.",
        grammarIds: ["es-g-c1-3"],
        vocabIds: ["es-v-c1-030", "es-v-c1-032", "es-v-c1-045", "es-v-c1-050", "es-v-c1-052"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-c1-u3-q1",
                level: "C1",
                prompt: "Which construction presents something as widely accepted truth without citing a specific source?",
                options: ["Es sabido que el ejercicio regular es beneficioso.", "Creo que el ejercicio es beneficioso.", "El investigador dice que el ejercicio es beneficioso.", "Según estudios, el ejercicio podría ser beneficioso."],
                answer: "Es sabido que el ejercicio regular es beneficioso.",
                hint: "Es sabido que presents information as common knowledge without attributing it to a source."
            },
            {
                id: "es-c1-u3-q2",
                level: "C1",
                prompt: "Complete: '___ que los resultados contradicen la hipótesis inicial.' (It turns out that…)",
                options: ["Resulta", "Se dice", "Viene a ser", "Cabe señalar"],
                answer: "Resulta",
                hint: "Resulta que = it turns out that / it emerges that — used when a conclusion is reached."
            },
            {
                id: "es-c1-u3-q3",
                level: "C1",
                prompt: "Which sentence correctly uses 'se dice que'?",
                options: [
                    "Se dice que el tiempo es el bien más preciado.",
                    "Se dice el tiempo es el bien más preciado.",
                    "Se dicen que el tiempo es el bien más preciado.",
                    "Se dice que el tiempo sea el bien más preciado."
                ],
                answer: "Se dice que el tiempo es el bien más preciado.",
                hint: "Se dice que + indicative (stating a general belief as fact). Note: que is required; no agreement on 'dice'."
            },
            {
                id: "es-c1-u3-q4",
                level: "C1",
                prompt: "What does 'viene a ser' mean in a formal context?",
                options: ["it amounts to / it is essentially", "it comes from / it arrives as", "it has been / it used to be", "it will be / it is about to be"],
                answer: "it amounts to / it is essentially",
                hint: "Viene a ser = equivale a / en esencia es — used to define or summarise something."
            },
            {
                id: "es-c1-u3-q5",
                level: "C1",
                prompt: "Complete formally: '___ señalar que los datos presentan limitaciones metodológicas.' (It should be noted…)",
                options: ["Cabe", "Hay que", "Resulta", "Se permite"],
                answer: "Cabe",
                hint: "Cabe señalar que = it is worth noting / it should be noted — a key formal academic connector."
            },
            {
                id: "es-c1-u3-q6",
                level: "C1",
                prompt: "What does 'replicabilidad' mean in research?",
                options: ["replicability — the ability to reproduce results", "reliability — consistent measurement", "validity — measuring what is intended", "generalisability — applying findings broadly"],
                answer: "replicability — the ability to reproduce results",
                hint: "Replicabilidad refers to whether an experiment's results can be reproduced independently."
            }
        ]
    },
    {
        id: "es-c1-u4",
        level: "C1",
        order: 4,
        title: "Formal Register & Nominalisations",
        description: "Apply nominalisations (la realización de, el análisis de) and academic connectors (cabe señalar que, en aras de, en lo que respecta a) in formal written and spoken Spanish.",
        grammarIds: ["es-g-c1-4"],
        vocabIds: ["es-v-c1-046", "es-v-c1-047", "es-v-c1-048", "es-v-c1-049", "es-v-c1-051"],
        verbIds: ["es-vb-c1-2"],
        testQuestions: [
            {
                id: "es-c1-u4-q1",
                level: "C1",
                prompt: "Rewrite formally using a nominalisation: 'Se implementaron nuevas políticas.' →",
                options: [
                    "La implementación de nuevas políticas tuvo lugar.",
                    "Las nuevas políticas fueron implementadas.",
                    "Se realizó la implementación de nuevas políticas.",
                    "Implementar nuevas políticas fue lo que se hizo."
                ],
                answer: "La implementación de nuevas políticas tuvo lugar.",
                hint: "Nominalisation replaces a verb phrase with a noun phrase: implementar → la implementación de."
            },
            {
                id: "es-c1-u4-q2",
                level: "C1",
                prompt: "Complete: '___ lo que respecta a la economía, se observa una tendencia al alza.'",
                options: ["En", "Con", "Por", "A"],
                answer: "En",
                hint: "En lo que respecta a = with regard to / as far as … is concerned. Always 'En lo que respecta a'."
            },
            {
                id: "es-c1-u4-q3",
                level: "C1",
                prompt: "Choose the correct formal connector: '___ la claridad expositiva, se omitirán los detalles técnicos.' (for the sake of)",
                options: ["En aras de", "A tenor de", "En virtud de", "Habida cuenta de"],
                answer: "En aras de",
                hint: "En aras de = for the sake of / in the interest of. Used in formal/academic Spanish."
            },
            {
                id: "es-c1-u4-q4",
                level: "C1",
                prompt: "What does 'a tenor de los datos' mean?",
                options: ["in light of the data / given the data", "despite the data", "according to the data (informal)", "as a result of the data"],
                answer: "in light of the data / given the data",
                hint: "A tenor de = in view of / in light of — used to draw conclusions from evidence."
            },
            {
                id: "es-c1-u4-q5",
                level: "C1",
                prompt: "Pluperfect subjunctive of 'ser' (vosotros)?",
                options: ["hubierais sido", "habríais sido", "hubieseis sido", "hayáis sido"],
                answer: "hubierais sido",
                hint: "Ser pluperfect subjunctive: hubiera sido, hubieras sido… hubierais sido, hubieran sido."
            },
            {
                id: "es-c1-u4-q6",
                level: "C1",
                prompt: "What does 'en virtud de' mean?",
                options: ["by virtue of / pursuant to", "in spite of / notwithstanding", "with a view to / aiming at", "in the context of / within the framework of"],
                answer: "by virtue of / pursuant to",
                hint: "En virtud de introduces the legal or contractual basis for something: 'En virtud del acuerdo firmado…'"
            }
        ]
    },
    {
        id: "es-c1-u5",
        level: "C1",
        order: 5,
        title: "Idioms & Collocations",
        description: "Master fixed idiomatic expressions and precise verb-noun collocations to achieve natural, fluent C1-level Spanish and avoid common learner errors.",
        grammarIds: ["es-g-c1-5"],
        vocabIds: ["es-v-c1-037", "es-v-c1-038", "es-v-c1-039", "es-v-c1-041", "es-v-c1-044"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-c1-u5-q1",
                level: "C1",
                prompt: "Which is the correct collocation for 'to make a decision'?",
                options: ["tomar una decisión", "hacer una decisión", "llevar una decisión", "dar una decisión"],
                answer: "tomar una decisión",
                hint: "In Spanish, decisions are 'taken' not 'made': tomar una decisión (never *hacer una decisión)."
            },
            {
                id: "es-c1-u5-q2",
                level: "C1",
                prompt: "What does the idiom 'dar en el clavo' mean?",
                options: ["to hit the nail on the head", "to drive a hard bargain", "to add fuel to the fire", "to put one's foot in it"],
                answer: "to hit the nail on the head",
                hint: "Dar en el clavo = acertar plenamente — to identify exactly what is correct or needed."
            },
            {
                id: "es-c1-u5-q3",
                level: "C1",
                prompt: "Complete: 'Sus comentarios solo sirvieron para ___ al fuego del conflicto.'",
                options: ["echar leña", "poner fuego", "añadir llamas", "meter fuego"],
                answer: "echar leña",
                hint: "Echar leña al fuego = to add fuel to the fire. The fixed idiom uses 'echar leña'."
            },
            {
                id: "es-c1-u5-q4",
                level: "C1",
                prompt: "Which is the correct collocation for 'to make a mistake'?",
                options: ["cometer un error", "hacer un error", "tomar un error", "llegar a un error"],
                answer: "cometer un error",
                hint: "Errors and crimes are 'committed' in Spanish: cometer un error, cometer un delito."
            },
            {
                id: "es-c1-u5-q5",
                level: "C1",
                prompt: "What does 'a rajatabla' mean?",
                options: ["strictly / to the letter", "with great difficulty", "by hook or by crook", "in broad strokes"],
                answer: "strictly / to the letter",
                hint: "A rajatabla = sin excepción, de forma estricta — 'The rules must be followed a rajatabla.'"
            },
            {
                id: "es-c1-u5-q6",
                level: "C1",
                prompt: "What does 'no hay mal que por bien no venga' mean?",
                options: ["Every cloud has a silver lining.", "Don't count your chickens before they hatch.", "Actions speak louder than words.", "You reap what you sow."],
                answer: "Every cloud has a silver lining.",
                hint: "No hay mal que por bien no venga — even bad things have positive consequences in the end."
            }
        ]
    },
    {
        id: "es-c1-u6",
        level: "C1",
        order: 6,
        title: "Full Subjunctive System & Register Mastery",
        description: "Consolidate the complete subjunctive system — all triggers, all tenses — and achieve C1 register mastery: deliberate stylistic variation, formal impersonal constructions, and the rhetorical use of register shifts.",
        grammarIds: ["es-g-c1-6"],
        vocabIds: ["es-v-c1-081", "es-v-c1-082", "es-v-c1-083", "es-v-c1-084"],
        verbIds: [],
        testQuestions: [
            { id: "es-c1-u6-q1", level: "C1", prompt: "Complete with the correct subjunctive tense: 'No creo que ella ___ (venir) cuando era niña.'", options: ["venga", "viniera", "haya venido", "hubiera venido"], answer: "viniera", hint: "Past subjunctive after a past reporting verb. No creo → vincular → viniera (imperfecto subjuntivo)." },
            { id: "es-c1-u6-q2", level: "C1", prompt: "What does 'cabe señalar que' signal in formal writing?", options: ["a personal opinion", "a conclusion", "a point worth noting / it should be noted that", "a hypothesis"], answer: "a point worth noting / it should be noted that", hint: "Cabe señalar que = it is worth noting that. Key C1 academic discourse connector." },
            { id: "es-c1-u6-q3", level: "C1", prompt: "Complete: 'Ojalá ___ (poder) verte antes de mi partida.' (unlikely wish about the past)", options: ["pueda", "pudiera", "haya podido", "hubiera podido"], answer: "hubiera podido", hint: "Ojalá + pluperfect subjunctive = unfulfilled past wish (regret)." },
            { id: "es-c1-u6-q4", level: "C1", prompt: "What does 'en aras de' mean?", options: ["in spite of", "for the sake of / in the interest of", "as a result of", "regarding"], answer: "for the sake of / in the interest of", hint: "En aras de la claridad = for the sake of clarity. Formal academic construction." },
            { id: "es-c1-u6-q5", level: "C1", prompt: "Which construction is a formal impersonal alternative to 'mucha gente dice que'?", options: ["Es sabido que / se afirma que", "Todo el mundo dice que", "La gente suele decir que", "Como dice la gente"], answer: "Es sabido que / se afirma que", hint: "Impersonal constructions: es sabido que, se sostiene que, cabe afirmar que — used in academic/formal writing." },
            { id: "es-c1-u6-q6", level: "C1", prompt: "What rhetorical effect does switching from usted to tú have mid-conversation?", options: ["It's always a grammatical error", "It signals warmth, familiarity, or deliberate irony depending on context", "It only marks regional dialect", "It means the speaker is angry"], answer: "It signals warmth, familiarity, or deliberate irony depending on context", hint: "C1 register mastery: deliberate switch as a rhetorical tool — building rapport, showing irony, or asserting dominance." },
        ]
    }
]
