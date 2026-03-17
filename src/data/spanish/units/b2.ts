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
    },
    {
        id: "es-b2-u6",
        level: "B2",
        order: 6,
        title: "Mixed Conditionals & Hypothetical Reasoning",
        description: "Master the mixed conditional (past cause → present consequence) and the full Type-3 conditional. Move beyond drilling tense formulas to fluid hypothetical reasoning in debate, storytelling, and nuanced argumentation.",
        grammarIds: ["es-g-b2-6"],
        vocabIds: ["es-v-b2-081", "es-v-b2-082", "es-v-b2-083", "es-v-b2-084", "es-v-b2-085"],
        verbIds: ["es-vb-b2-4"],
        testQuestions: [
            { id: "es-b2-u6-q1", level: "B2", prompt: "Identify: 'Si hubiera estudiado medicina, sería médico ahora.'", options: ["Type 1 — real", "Type 2 — hypothetical present", "Type 3 — past regret", "Mixed — past condition, present result"], answer: "Mixed — past condition, present result", hint: "Si + pluperfect subjunctive → conditional simple (not perfect) = mixed conditional." },
            { id: "es-b2-u6-q2", level: "B2", prompt: "Complete the mixed conditional: 'Si ___ (ahorrar) más de joven, tendría más dinero ahora.'", options: ["ahorrara", "hubiera ahorrado", "habría ahorrado", "ahorré"], answer: "hubiera ahorrado", hint: "Mixed: si + pluperfect subjunctive (past clause) → conditional simple (present result)." },
            { id: "es-b2-u6-q3", level: "B2", prompt: "What does the conditional perfect (habría + participio) express in journalism?", options: ["A confirmed fact", "A definite future event", "An alleged or reported but unconfirmed event", "A past habit"], answer: "An alleged or reported but unconfirmed event", hint: "El presidente habría firmado el acuerdo = The president is reported to have signed. Journalistic conditional." },
            { id: "es-b2-u6-q4", level: "B2", prompt: "Complete: 'Si no ___ (llover) tanto este año, habría habido mejor cosecha.'", options: ["lloviera", "hubiera llovido", "había llovido", "llovía"], answer: "hubiera llovido", hint: "Type 3: si + pluperfect subjunctive → conditional perfect (habría habido)." },
            { id: "es-b2-u6-q5", level: "B2", prompt: "What does 'a no ser que' mean?", options: ["as long as", "unless", "provided that", "in case"], answer: "unless", hint: "A no ser que + subjuntivo = unless. Synonym of a menos que." },
            { id: "es-b2-u6-q6", level: "B2", prompt: "What does 'por mucho que' introduce?", options: ["A cause", "A concession — no matter how much", "A condition", "A consequence"], answer: "A concession — no matter how much", hint: "Por mucho que + subjuntivo = no matter how much. Por más que estudie, no aprueba." },
        ]
    },
    {
        id: "es-b2-u7",
        level: "B2",
        order: 7,
        title: "Full Subjunctive Triggers & Ser vs Estar",
        description: "Consolidate all present subjunctive triggers — concession, purpose, doubt, emotion — and master the full ser/estar distinction including abstract and stative uses that define B2 Spanish.",
        grammarIds: ["es-g-b2-7"],
        vocabIds: ["es-v-b2-086", "es-v-b2-087", "es-v-b2-088", "es-v-b2-089"],
        verbIds: [],
        testQuestions: [
            { id: "es-b2-u7-q1", level: "B2", prompt: "Complete: 'Aunque ___ difícil, lo intentaré.' (concession — fact, speaker knows it IS difficult)", options: ["es", "sea", "está", "esté"], answer: "es", hint: "Aunque + indicativo = conceding a known fact. Aunque + subjuntivo = hypothetical/uncertain concession." },
            { id: "es-b2-u7-q2", level: "B2", prompt: "Complete: 'Aunque ___ difícil, lo intentaría.' (hypothetical — might be difficult)", options: ["es", "sea", "está", "esté"], answer: "sea", hint: "Aunque + subjuntivo signals that the speaker doesn't know or is treating it hypothetically." },
            { id: "es-b2-u7-q3", level: "B2", prompt: "Complete: 'La conferencia ___ (ser/estar) en Madrid.' (location of an event)", options: ["es", "está", "sea", "esté"], answer: "es", hint: "Events and their location/time use ser: La fiesta es en mi casa. Estar for physical position of objects/people." },
            { id: "es-b2-u7-q4", level: "B2", prompt: "What is the difference: 'Es aburrido' vs 'Está aburrido'?", options: ["Both mean 'he is bored'", "Es aburrido = he IS boring (characteristic); está aburrido = he IS bored (current state)", "Es aburrido = event; está aburrido = description", "No difference"], answer: "Es aburrido = he IS boring (characteristic); está aburrido = he IS bored (current state)", hint: "Ser = characteristic/identity. Estar = current state/condition. The adjective's meaning shifts." },
            { id: "es-b2-u7-q5", level: "B2", prompt: "Complete: 'Te lo digo para que ___ (saber) la verdad.'", options: ["sabes", "sepas", "supieras", "sabías"], answer: "sepas", hint: "Para que = so that (purpose) → always triggers subjuntivo." },
            { id: "es-b2-u7-q6", level: "B2", prompt: "What does 'dado que' mean?", options: ["instead of", "given that / since (premise)", "unless", "so that"], answer: "given that / since (premise)", hint: "Dado que + indicativo introduces a factual premise: Dado que el presupuesto es limitado…" },
        ]
    },
    {
        id: "es-b2-u8",
        level: "B2",
        order: 8,
        title: "Registro & Expresiones Idiomáticas",
        description: "Navigate formal written Spanish versus colloquial speech, and build fluency with key idiomatic expressions — the fixed chunks that distinguish natural B2 Spanish from translated Spanish.",
        grammarIds: ["es-g-b2-8"],
        vocabIds: ["es-v-b2-090", "es-v-b2-091", "es-v-b2-092"],
        verbIds: [],
        testQuestions: [
            { id: "es-b2-u8-q1", level: "B2", prompt: "What does 'no obstante' mean?", options: ["in addition", "nevertheless / however (formal)", "as a result", "in other words"], answer: "nevertheless / however (formal)", hint: "No obstante is the formal written equivalent of sin embargo." },
            { id: "es-b2-u8-q2", level: "B2", prompt: "What does 'dar en el clavo' mean?", options: ["to drive in a nail", "to hit the nail on the head / get it exactly right", "to miss the point", "to start a project"], answer: "to hit the nail on the head / get it exactly right", hint: "Dar en el clavo = acertar plenamente — to identify exactly what is correct." },
            { id: "es-b2-u8-q3", level: "B2", prompt: "Which is the formal written alternative to 'porque'?", options: ["como / dado que / en virtud de", "pues bien / entonces", "cuando / mientras", "aunque / sin embargo"], answer: "como / dado que / en virtud de", hint: "Porque = neutral. Dado que / en virtud de / habida cuenta de = formal written alternatives." },
            { id: "es-b2-u8-q4", level: "B2", prompt: "What does 'estar en las nubes' mean?", options: ["to be in the clouds (weather)", "to be daydreaming / absent-minded", "to be very happy", "to be ambitious"], answer: "to be daydreaming / absent-minded", hint: "Estar en las nubes = to have one's head in the clouds / be miles away. Listed in the B2 guide." },
            { id: "es-b2-u8-q5", level: "B2", prompt: "What does 'habida cuenta de' mean in formal writing?", options: ["bearing in mind / taking into account", "according to", "despite", "as soon as"], answer: "bearing in mind / taking into account", hint: "Habida cuenta de = teniendo en cuenta = given / bearing in mind. Formal written register." },
            { id: "es-b2-u8-q6", level: "B2", prompt: "What does 'no hay mal que por bien no venga' mean?", options: ["every cloud has a silver lining", "bad luck comes in threes", "the grass is always greener", "too many cooks spoil the broth"], answer: "every cloud has a silver lining", hint: "No hay mal que por bien no venga = there's no bad without good / every cloud has a silver lining." },
        ]
    },
]
