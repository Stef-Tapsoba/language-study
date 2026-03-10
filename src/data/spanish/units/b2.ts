import { LessonUnit } from "../../../types"

// B2 units — 5 units with test questions.

export const b2Units: LessonUnit[] = [
    {
        id: "es-b2-u1",
        level: "B2",
        order: 1,
        title: "Past Subjunctive in si-Clauses",
        description: "Use the imperfect subjunctive to form hypothetical conditions with si, express unlikely wishes with ojalá, and make polite requests with quisiera.",
        grammarIds: ["es-g-b2-1"],
        vocabIds: ["es-v-b2-001", "es-v-b2-065", "es-v-b2-068", "es-v-b2-073", "es-v-b2-076"],
        verbIds: ["es-vb-b2-1"],
        testQuestions: [
            {
                id: "es-b2-u1-q1",
                level: "B2",
                prompt: "Complete the si-clause: 'Si ___ (tener, yo) más tiempo, estudiaría más.'",
                options: ["tengo", "tuviera", "tendré", "tenga"],
                answer: "tuviera",
                hint: "Type-2 conditionals use si + imperfect subjunctive. Tener → tuviera."
            },
            {
                id: "es-b2-u1-q2",
                level: "B2",
                prompt: "Which sentence correctly uses the imperfect subjunctive after 'ojalá'?",
                options: [
                    "Ojalá pudiera hablar español perfectamente.",
                    "Ojalá puede hablar español perfectamente.",
                    "Ojalá puedo hablar español perfectamente.",
                    "Ojalá podré hablar español perfectamente."
                ],
                answer: "Ojalá pudiera hablar español perfectamente.",
                hint: "Ojalá expressing an unlikely wish is followed by the imperfect subjunctive."
            },
            {
                id: "es-b2-u1-q3",
                level: "B2",
                prompt: "Complete with the imperfect subjunctive of 'poder' (yo): 'Si ___ ir al concierto, iría contigo.'",
                options: ["puedo", "pudiera", "podría", "pueda"],
                answer: "pudiera",
                hint: "Poder → imperfect subjunctive: pudiera, pudieras, pudiera…"
            },
            {
                id: "es-b2-u1-q4",
                level: "B2",
                prompt: "How is the imperfect subjunctive formed?",
                options: [
                    "From the 3rd person plural of the preterite, drop -ron, add -ra endings",
                    "From the infinitive, add -iera endings",
                    "From the present indicative, add -ara endings",
                    "From the future stem, add -ía endings"
                ],
                answer: "From the 3rd person plural of the preterite, drop -ron, add -ra endings",
                hint: "Tuvieron → tuvie- → tuviera, tuvieras, tuviera, tuviéramos…"
            },
            {
                id: "es-b2-u1-q5",
                level: "B2",
                prompt: "Translate: 'If she knew the answer, she would tell us.'",
                options: [
                    "Si supiera la respuesta, nos lo diría.",
                    "Si sabe la respuesta, nos lo dirá.",
                    "Si sabía la respuesta, nos lo decía.",
                    "Si supo la respuesta, nos lo dijo."
                ],
                answer: "Si supiera la respuesta, nos lo diría.",
                hint: "Hypothetical: si + imperfect subjunctive (supiera) + conditional (diría)."
            },
            {
                id: "es-b2-u1-q6",
                level: "B2",
                prompt: "What does 'resilencia' mean in the context of facing an impossible situation?",
                options: ["The ability to overcome adversity", "A legal remedy", "A philosophical paradigm", "A type of ambivalence"],
                answer: "The ability to overcome adversity",
                hint: "Resiliencia = resilience — the capacity to recover and adapt."
            }
        ]
    },
    {
        id: "es-b2-u2",
        level: "B2",
        order: 2,
        title: "Passive Voice",
        description: "Form passive sentences with ser + past participle, understand agreement rules, and recognise when to use the reflexive se-passive instead.",
        grammarIds: ["es-g-b2-2"],
        vocabIds: ["es-v-b2-005", "es-v-b2-054", "es-v-b2-055", "es-v-b2-057", "es-v-b2-069"],
        verbIds: ["es-vb-b2-3"],
        testQuestions: [
            {
                id: "es-b2-u2-q1",
                level: "B2",
                prompt: "Identify the correct passive sentence: 'The laws were approved by parliament.'",
                options: [
                    "Las leyes fueron aprobadas por el parlamento.",
                    "Las leyes fue aprobadas por el parlamento.",
                    "Las leyes fueron aprobado por el parlamento.",
                    "Las leyes era aprobadas por el parlamento."
                ],
                answer: "Las leyes fueron aprobadas por el parlamento.",
                hint: "Ser agrees with the subject (leyes = fem. plural → fueron); past participle also agrees (aprobadas)."
            },
            {
                id: "es-b2-u2-q2",
                level: "B2",
                prompt: "Complete: 'El informe ___ por la investigadora.' (escribir, past passive)",
                options: ["fue escrito", "fue escrita", "fue escribido", "fue escribía"],
                answer: "fue escrito",
                hint: "El informe is masculine singular → fue escrito (past participle agrees: -o)."
            },
            {
                id: "es-b2-u2-q3",
                level: "B2",
                prompt: "Which sentence uses the se-passive correctly?",
                options: [
                    "Se venden entradas en la taquilla.",
                    "Se vende entradas en la taquilla.",
                    "Se vendieron entradas por la taquilla.",
                    "Se venden las entradas por la gente."
                ],
                answer: "Se venden entradas en la taquilla.",
                hint: "Se-passive: se + verb agreeing with subject (entradas = plural → venden)."
            },
            {
                id: "es-b2-u2-q4",
                level: "B2",
                prompt: "What preposition introduces the agent in a passive sentence?",
                options: ["por", "para", "de", "con"],
                answer: "por",
                hint: "The agent in a Spanish passive sentence is always introduced by 'por'."
            },
            {
                id: "es-b2-u2-q5",
                level: "B2",
                prompt: "What is the auxiliary verb for 'habéis' in the present perfect?",
                options: ["haber", "ser", "estar", "tener"],
                answer: "haber",
                hint: "Present perfect = haber (he, has, ha, hemos, habéis, han) + past participle."
            },
            {
                id: "es-b2-u2-q6",
                level: "B2",
                prompt: "What does 'en consecuencia' mean?",
                options: ["consequently / as a result", "nevertheless", "with regard to", "likewise"],
                answer: "consequently / as a result",
                hint: "En consecuencia introduces the result or logical outcome of a previous statement."
            }
        ]
    },
    {
        id: "es-b2-u3",
        level: "B2",
        order: 3,
        title: "Relative Clauses",
        description: "Use que, quien, cuyo, el cual and related forms to connect clauses and describe people, things, and possession at B2 level.",
        grammarIds: ["es-g-b2-3"],
        vocabIds: ["es-v-b2-037", "es-v-b2-039", "es-v-b2-041", "es-v-b2-063", "es-v-b2-071"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-b2-u3-q1",
                level: "B2",
                prompt: "Choose the correct relative pronoun: 'El escritor ___ novela ganó el premio es colombiano.'",
                options: ["cuya", "cuyo", "quien", "que"],
                answer: "cuya",
                hint: "Cuyo/cuya/cuyos/cuyas = 'whose' — agrees with the noun that follows (novela = fem. → cuya)."
            },
            {
                id: "es-b2-u3-q2",
                level: "B2",
                prompt: "Which relative pronoun refers exclusively to people?",
                options: ["quien", "que", "cuyo", "el cual"],
                answer: "quien",
                hint: "Quien/quienes is used only for people, especially after prepositions."
            },
            {
                id: "es-b2-u3-q3",
                level: "B2",
                prompt: "Complete: 'El edificio en ___ trabaja ella es muy moderno.'",
                options: ["el cual", "que", "quien", "cuyo"],
                answer: "el cual",
                hint: "After a preposition (en), use el cual / la cual / los cuales for things."
            },
            {
                id: "es-b2-u3-q4",
                level: "B2",
                prompt: "Which sentence is an example of a non-restrictive (explanatory) relative clause?",
                options: [
                    "Madrid, que es la capital de España, tiene más de tres millones de habitantes.",
                    "La ciudad que más me gusta es Madrid.",
                    "Los estudiantes que aprobaron celebraron.",
                    "El libro que leí era fascinante."
                ],
                answer: "Madrid, que es la capital de España, tiene más de tres millones de habitantes.",
                hint: "Non-restrictive clauses add extra information and are separated by commas."
            },
            {
                id: "es-b2-u3-q5",
                level: "B2",
                prompt: "What does 'protagonista' mean?",
                options: ["main character", "literary genre", "metaphor", "publisher"],
                answer: "main character",
                hint: "El/la protagonista is the leading character in a story or film."
            },
            {
                id: "es-b2-u3-q6",
                level: "B2",
                prompt: "Complete: 'La investigadora ___ descubrió el tratamiento recibió un premio.'",
                options: ["que", "cuya", "quien", "el cual"],
                answer: "que",
                hint: "Que is the most common relative pronoun and can refer to both people and things."
            }
        ]
    },
    {
        id: "es-b2-u4",
        level: "B2",
        order: 4,
        title: "Reported Speech",
        description: "Report what people said or asked using dijo que and preguntó si, applying tense backshift and adjusting pronouns and time expressions.",
        grammarIds: ["es-g-b2-4"],
        vocabIds: ["es-v-b2-062", "es-v-b2-064", "es-v-b2-070", "es-v-b2-072", "es-v-b2-074"],
        verbIds: ["es-vb-b2-2"],
        testQuestions: [
            {
                id: "es-b2-u4-q1",
                level: "B2",
                prompt: "Convert to reported speech. Direct: 'Estoy muy cansada.' → Reported: 'Ella dijo que ___'",
                options: ["estaba muy cansada.", "está muy cansada.", "estaría muy cansada.", "estuvo muy cansada."],
                answer: "estaba muy cansada.",
                hint: "Present → imperfect in reported speech when reporting past statement."
            },
            {
                id: "es-b2-u4-q2",
                level: "B2",
                prompt: "Convert: '¿Conoces la ciudad?' → 'El preguntó si ___'",
                options: ["conocía la ciudad.", "conoce la ciudad.", "conocerá la ciudad.", "conozca la ciudad."],
                answer: "conocía la ciudad.",
                hint: "Questions reported with 'preguntó si'; present → imperfect backshift."
            },
            {
                id: "es-b2-u4-q3",
                level: "B2",
                prompt: "Which conjunction is always required after a reporting verb in Spanish?",
                options: ["que", "si", "como", "cuando"],
                answer: "que",
                hint: "In Spanish 'dijo que', 'explicó que', 'anunció que' — que cannot be omitted."
            },
            {
                id: "es-b2-u4-q4",
                level: "B2",
                prompt: "Convert: 'Vendré mañana.' → 'Dijo que ___'",
                options: ["vendría al día siguiente.", "vendrá mañana.", "vino al día siguiente.", "venía mañana."],
                answer: "vendría al día siguiente.",
                hint: "Future → conditional; mañana → al día siguiente in reported speech."
            },
            {
                id: "es-b2-u4-q5",
                level: "B2",
                prompt: "What does 'no obstante' mean?",
                options: ["nevertheless / notwithstanding", "consequently", "likewise", "with regard to"],
                answer: "nevertheless / notwithstanding",
                hint: "No obstante concedes a point while introducing a contrasting statement."
            },
            {
                id: "es-b2-u4-q6",
                level: "B2",
                prompt: "Imperfect subjunctive of 'querer' (nosotros)?",
                options: ["quisiéramos", "quisiríamos", "queríamos", "queramos"],
                answer: "quisiéramos",
                hint: "Quisieron → quisie- → quisiera, quisieras… quisiéramos (note accent on the á)."
            }
        ]
    },
    {
        id: "es-b2-u5",
        level: "B2",
        order: 5,
        title: "Type-2 Conditionals",
        description: "Construct and interpret hypothetical si-clauses combining the imperfect subjunctive with the conditional to discuss unlikely or imaginary scenarios.",
        grammarIds: ["es-g-b2-5"],
        vocabIds: ["es-v-b2-061", "es-v-b2-066", "es-v-b2-067", "es-v-b2-075", "es-v-b2-079"],
        verbIds: ["es-vb-b2-1", "es-vb-b2-2"],
        testQuestions: [
            {
                id: "es-b2-u5-q1",
                level: "B2",
                prompt: "Which sentence is a correct Type-2 conditional?",
                options: [
                    "Si tuviera más tiempo libre, aprendería a tocar la guitarra.",
                    "Si tengo más tiempo libre, aprenderé a tocar la guitarra.",
                    "Si tuviera más tiempo libre, aprenderé a tocar la guitarra.",
                    "Si tendré más tiempo libre, aprendería a tocar la guitarra."
                ],
                answer: "Si tuviera más tiempo libre, aprendería a tocar la guitarra.",
                hint: "Type-2: si + imperfect subjunctive + conditional (would)."
            },
            {
                id: "es-b2-u5-q2",
                level: "B2",
                prompt: "Complete the main clause: 'Si ella viviera en Madrid, ___ (visitar) el Prado cada semana.'",
                options: ["visitaría", "visitará", "visite", "visitaba"],
                answer: "visitaría",
                hint: "Main clause of Type-2 conditional always uses the conditional simple."
            },
            {
                id: "es-b2-u5-q3",
                level: "B2",
                prompt: "What is the difference between Type-1 and Type-2 conditionals?",
                options: [
                    "Type-1 expresses real/likely possibility; Type-2 expresses hypothetical/unlikely situations",
                    "Type-1 uses the imperfect subjunctive; Type-2 uses the present subjunctive",
                    "Type-1 refers to the past; Type-2 refers to the future",
                    "There is no grammatical difference, only a stylistic one"
                ],
                answer: "Type-1 expresses real/likely possibility; Type-2 expresses hypothetical/unlikely situations",
                hint: "Type-1: Si estudias, aprobarás (likely). Type-2: Si estudiaras, aprobarías (unlikely/imaginary)."
            },
            {
                id: "es-b2-u5-q4",
                level: "B2",
                prompt: "Conditional of 'poder' (ellos)?",
                options: ["podrían", "pudieran", "pueden", "podrán"],
                answer: "podrían",
                hint: "Poder conditional: podría, podrías, podría, podríamos, podríais, podrían."
            },
            {
                id: "es-b2-u5-q5",
                level: "B2",
                prompt: "Translate: 'What would you do if you could change something in your life?'",
                options: [
                    "¿Qué harías si pudieras cambiar algo en tu vida?",
                    "¿Qué harás si puedes cambiar algo en tu vida?",
                    "¿Qué haces si puedes cambiar algo en tu vida?",
                    "¿Qué hiciste si pudiste cambiar algo en tu vida?"
                ],
                answer: "¿Qué harías si pudieras cambiar algo en tu vida?",
                hint: "Harías (conditional of hacer) + si pudieras (imperfect subjunctive of poder)."
            },
            {
                id: "es-b2-u5-q6",
                level: "B2",
                prompt: "What does 'dilema' mean?",
                options: ["a dilemma / a difficult choice between two options", "a philosophical principle", "a type of abstraction", "an ideological paradigm"],
                answer: "a dilemma / a difficult choice between two options",
                hint: "Un dilema moral = a moral dilemma — a situation requiring a difficult decision."
            }
        ]
    }
]
