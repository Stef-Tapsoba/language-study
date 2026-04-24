import { GrammarLesson } from "../../../types"

// B1 grammar — 5 lessons.

export const b1Grammar: GrammarLesson[] = [
    {
        id: "es-g-b1-1",
        level: "B1",
        title: "Present Subjunctive (Subjuntivo Presente)",
        explanation: {
            native: "The subjunctive is used to express wishes, doubts, emotions, recommendations, and hypothetical situations. It is triggered by phrases like quiero que, espero que, es importante que, ojalá. Regular -ar verbs take -e endings; -er/-ir verbs take -a endings. Many verbs are irregular.",
            target: "El subjuntivo presente se usa para expresar deseos, dudas, emociones, recomendaciones y situaciones hipotéticas. Se activa con expresiones como quiero que, espero que, es importante que u ojalá. Los verbos regulares en -ar toman terminaciones en -e; los verbos en -er/-ir toman terminaciones en -a. Muchos verbos frecuentes son irregulares en el subjuntivo.",
        },
        examples: [
            { native: "Quiero que vengas.", translation: "I want you to come." },
            { native: "Es importante que estudies.", translation: "It's important that you study." },
            { native: "Espero que todo vaya bien.", translation: "I hope everything goes well." },
            { native: "Ojalá haga buen tiempo.", translation: "Hopefully the weather will be good." }
        ]
    },
    // REVIEW ONLY — imperfect introduced at A2 (es-g-a2-8)
    {
        id: "es-g-b1-2",
        level: "B1",
        title: "Imperfect Tense (Imperfecto)",
        explanation: {
            native: "The imperfect describes ongoing, habitual, or repeated past actions and background situations. It contrasts with the preterite, which is for specific completed events. Regular -ar verbs: -aba, -abas, -aba, -ábamos, -abais, -aban. Regular -er/-ir verbs: -ía, -ías, -ía, -íamos, -íais, -ían.",
            target: "El pretérito imperfecto describe acciones pasadas habituales, repetidas o en curso, así como situaciones de fondo. Se contrasta con el pretérito indefinido, que se usa para eventos concretos y terminados. Las terminaciones de los verbos regulares en -ar son: -aba, -abas, -aba, -ábamos, -abais, -aban. Para los verbos en -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían.",
        },
        examples: [
            { native: "Cuando era niño, jugaba al fútbol.", translation: "When I was a child, I used to play football." },
            { native: "Llovía mucho en noviembre.", translation: "It used to rain a lot in November." },
            { native: "Siempre comíamos juntos.", translation: "We always used to eat together." },
            { native: "¿Qué hacías ayer a las tres?", translation: "What were you doing yesterday at three?" }
        ]
    },
    {
        id: "es-g-b1-3",
        level: "B1",
        title: "Simple Future (Futuro Simple)",
        explanation: {
            native: "The simple future expresses what will happen. Regular verbs add endings directly to the label: -é, -ás, -á, -emos, -éis, -án. Some common verbs have irregular stems: tener→tendr-, poder→podr-, venir→vendr-, salir→saldr-, hacer→har-.",
            target: "El futuro simple expresa lo que sucederá. Los verbos regulares añaden las terminaciones directamente al infinitivo: -é, -ás, -á, -emos, -éis, -án. Algunos verbos frecuentes tienen raíces irregulares: tener→tendr-, poder→podr-, venir→vendr-, salir→saldr-, hacer→har-.",
        },
        examples: [
            { native: "Mañana hablaré con mi jefe.", translation: "Tomorrow I will speak with my boss." },
            { native: "¿Vendrás a la fiesta esta noche?", translation: "Will you come to the party tonight?" },
            { native: "Ellos tendrán que trabajar el sábado.", translation: "They will have to work on Saturday." },
            { native: "El año que viene viviremos en Madrid.", translation: "Next year we will live in Madrid." }
        ]
    },
    {
        id: "es-g-b1-4",
        level: "B1",
        title: "Conditional Simple (Condicional Simple)",
        explanation: {
            native: "The conditional expresses what would happen under certain conditions (equivalent to 'would' in English). It uses the same irregular stems as the future, but with endings -ía, -ías, -ía, -íamos, -íais, -ían. Also used for polite requests and reported speech.",
            target: "El condicional simple expresa lo que ocurriría en determinadas circunstancias, equivalente al inglés 'would'. Utiliza las mismas raíces irregulares que el futuro simple, pero con las terminaciones: -ía, -ías, -ía, -íamos, -íais, -ían. También se emplea para formular peticiones con cortesía y en el estilo indirecto.",
        },
        examples: [
            { native: "Con más dinero, viajaría por el mundo.", translation: "With more money, I would travel the world." },
            { native: "¿Podrías ayudarme con esto?", translation: "Could you help me with this?" },
            { native: "Ella dijo que vendría mañana.", translation: "She said she would come tomorrow." },
            { native: "En tu lugar, estudiaría más.", translation: "In your place, I would study more." }
        ]
    },
    {
        id: "es-g-b1-5",
        level: "B1",
        title: "Por vs. Para",
        explanation: {
            native: "Both translate as 'for' but have different uses. POR: cause/reason, duration, exchange, means of communication/transport, on behalf of. PARA: purpose/goal, recipient of a gift, deadline, destination, opinion (para mí).",
            target: "Tanto por como para pueden traducirse como 'for' en inglés, pero tienen usos distintos. POR se usa para expresar causa o motivo, duración, intercambio, medio de comunicación o transporte, y para actuar en nombre de alguien. PARA expresa finalidad u objetivo, el destinatario de algo, un plazo, un destino, y la opinión personal (para mí).",
        },
        examples: [
            { native: "Estudié por tres horas.", translation: "I studied for three hours.", annotation: "duration → por" },
            { native: "Este regalo es para ti.", translation: "This gift is for you.", annotation: "recipient → para" },
            { native: "Lo compré por veinte euros.", translation: "I bought it for twenty euros.", annotation: "exchange → por" },
            { native: "Salgo para Madrid mañana.", translation: "I'm leaving for Madrid tomorrow.", annotation: "destination → para" }
        ]
    },
    {
        id: "es-g-b1-6",
        level: "B1",
        title: "Si-Clauses: Real & Hypothetical Conditions",
        explanation: {
            native: "Spanish conditional sentences use si (if) to introduce the condition. Real/open conditions: si + presente de indicativo → futuro simple (or imperativo) in the main clause. Hypothetical conditions (unlikely or contrary to current reality): si + imperfecto de subjuntivo → condicional simple. Past hypothetical (regret): si + pluscuamperfecto de subjuntivo → condicional compuesto. Critical rule: condicional and futuro simple NEVER appear directly after si.",
            target: "Las oraciones condicionales en español usan si para introducir la condición. Condición real: si + presente de indicativo → futuro simple (o imperativo). Condición hipotética (poco probable): si + imperfecto de subjuntivo → condicional simple. Hipotética pasada (lamento): si + pluscuamperfecto de subjuntivo → condicional compuesto. Regla clave: el condicional y el futuro simple NUNCA van directamente después de si."
        },
        examples: [
            { native: "Si estudias, aprobarás.", translation: "If you study, you'll pass. (real)" },
            { native: "Si tuviera dinero, viajaría por el mundo.", translation: "If I had money, I'd travel the world. (hypothetical)" },
            { native: "Si fuera tú, no lo haría.", translation: "If I were you, I wouldn't do it." },
            { native: "Si hubiera llegado antes, lo habría visto.", translation: "If I had arrived earlier, I would have seen it. (past regret)" },
            { native: "Si hace buen tiempo, salimos.", translation: "If the weather is good, we'll go out. (real)" },
        ]
    },
    {
        id: "es-g-b1-7",
        level: "B1",
        title: "Reported Speech (Estilo Indirecto)",
        explanation: {
            native: "Reported speech (estilo indirecto) shifts the tense of the original statement back when the reporting verb is in the past. Key shifts: presente → imperfecto; futuro → condicional; pretérito → pluscuamperfecto; imperativo → imperfecto de subjuntivo. Time and place references also shift: hoy → ese día, mañana → al día siguiente, aquí → allí. Yes/no questions use si; content questions keep their question word. Main reporting verbs: decir que, afirmar que, explicar que, preguntar si/qué/cuándo, añadir que.",
            target: "El estilo indirecto traslada el tiempo verbal del enunciado original cuando el verbo introductor está en pasado. Cambios clave: presente → imperfecto; futuro → condicional; pretérito → pluscuamperfecto; imperativo → imperfecto de subjuntivo. Las referencias de tiempo y lugar también cambian: hoy → ese día, mañana → al día siguiente, aquí → allí. Las preguntas de sí/no usan si; las preguntas de contenido conservan su palabra interrogativa. Verbos introductores: decir que, afirmar que, explicar que, preguntar si/qué/cuándo, añadir que."
        },
        examples: [
            { native: "'Estoy cansado.' → Dijo que estaba cansado.", translation: "\"I am tired.\" / He said he was tired.", annotation: "presente → imperfecto in reported speech" },
            { native: "'¿Tienes hambre?' → Me preguntó si tenía hambre.", translation: "\"Are you hungry?\" / She asked me if I was hungry.", annotation: "yes/no question → si + imperfecto" },
            { native: "'Vendré mañana.' → Dijo que vendría al día siguiente.", translation: "\"I'll come tomorrow.\" / He said he'd come the next day.", annotation: "futuro → condicional; mañana → al día siguiente" },
            { native: "'¡Come más despacio!' → Le dijo que comiera más despacio.", translation: "\"Eat more slowly!\" / She told him to eat more slowly.", annotation: "imperativo → imperfecto de subjuntivo" },
            { native: "'No sé dónde está.' → Explicó que no sabía dónde estaba.", translation: "\"I don't know where it is.\" / She explained she didn't know where it was.", annotation: "presente → imperfecto; backshift in reported speech" },
        ]
    },
    {
        id: "es-g-b1-9",
        level: "B1",
        title: "El Pluscuamperfecto (Pluperfect)",
        explanation: {
            native: "The pluperfect (pluscuamperfecto de indicativo) expresses an action that had already been completed before another past action. Formation: imperfect of haber (había, habías, había, habíamos, habíais, habían) + past participle. It always points back behind another past event. Key signal words: ya (already), todavía no (not yet), antes de que, cuando (when — anchoring to a later event). The pluperfect vs. preterite pair works exactly like the English 'had done' vs. 'did'.",
            target: "El pluscuamperfecto de indicativo expresa una acción que ya se había completado antes de otra acción pasada. Formación: imperfecto de haber + participio pasado. Las formas de haber son: había, habías, había, habíamos, habíais, habían. Este tiempo siempre mira hacia atrás, a un evento anterior a otro ya pasado. Palabras clave: ya (already), todavía no (not yet), antes de que, cuando (anchoring to the later event). La relación pluscuamperfecto / pretérito funciona exactamente igual que 'had done' / 'did' en inglés."
        },
        examples: [
            { native: "Cuando llegué, él ya se había ido.", translation: "When I arrived, he had already left." },
            { native: "No pude entrar porque había olvidado las llaves.", translation: "I couldn't get in because I had forgotten the keys." },
            { native: "Ella nunca había viajado al extranjero antes de ese viaje.", translation: "She had never travelled abroad before that trip." },
            { native: "Cuando empezó la película, ya habíamos comprado las entradas.", translation: "By the time the film started, we had already bought the tickets." },
            { native: "Me di cuenta de que había cometido un error.", translation: "I realised that I had made a mistake." },
        ]
    },
    {
        id: "es-g-b1-8",
        level: "B1",
        title: "Discourse Markers & Collocations",
        explanation: {
            native: "Discourse markers signal the logical relationships between ideas. Adding: además, asimismo, por otro lado. Contrasting: sin embargo, no obstante, en cambio, a pesar de. Conceding: si bien, es cierto que…, pero; aunque + indicativo (fact) / subjuntivo (hypothesis). Concluding: en conclusión, en definitiva, en resumen, por tanto. Key collocations at B1 (must be learned as fixed chunks): tomar una decisión (make a decision), darse cuenta de (realise), tener en cuenta (bear in mind), echar de menos (miss someone), llevarse bien con (get on well with).",
            target: "Los marcadores del discurso señalan las relaciones lógicas entre ideas. Adición: además, asimismo, por otro lado. Contraste: sin embargo, no obstante, en cambio, a pesar de. Concesión: si bien, es cierto que…, pero; aunque + indicativo (hecho) / subjuntivo (hipótesis). Conclusión: en conclusión, en definitiva, en resumen, por tanto. Colocaciones clave en B1 (deben aprenderse como unidades fijas): tomar una decisión, darse cuenta de, tener en cuenta, echar de menos, llevarse bien con."
        },
        examples: [
            { native: "Por un lado, es más barato; por otro lado, la calidad es menor.", translation: "On the one hand it's cheaper; on the other, the quality is lower." },
            { native: "Aunque entiendo tu punto, no estoy de acuerdo.", translation: "Although I understand your point, I disagree." },
            { native: "Hay que tener en cuenta todos los factores antes de tomar una decisión.", translation: "We must bear all factors in mind before making a decision." },
            { native: "Echo mucho de menos a mi familia cuando estoy en el extranjero.", translation: "I miss my family a lot when I'm abroad." },
            { native: "En definitiva, creo que esta solución es la más viable.", translation: "Ultimately, I think this solution is the most viable." },
        ]
    },
    {
        id: "es-g-b1-10",
        level: "B1",
        title: "Imperfecto de Subjuntivo",
        explanation: {
            native: "The imperfect subjunctive expresses hypothetical, unreal, or past-referring subjunctive situations. Formation: take the ellos/ellas form of the preterite, drop the -ron ending, then add -ra, -ras, -ra, -ramos, -rais, -ran. This applies to ALL verbs — regular and irregular — making the imperfect subjunctive perfectly systematic: hablar → hablaron → hablara; tener → tuvieron → tuviera; ser/ir → fueron → fuera; hacer → hicieron → hiciera. Key uses: (1) Si-clauses Type 2 — si + imperfecto subjuntivo + condicional: 'Si tuviera dinero, viajaría.' (2) Polite requests with querer/poder: 'Quisiera un café.' (3) Reported speech commands: 'Te dije que vinieras.' (4) After ojalá for unlikely wishes: 'Ojalá tuviera más tiempo.'",
            target: "El imperfecto de subjuntivo expresa situaciones hipotéticas, irreales o que remiten al pasado en modo subjuntivo. Formación: se toma la forma ellos/ellas del pretérito indefinido, se elimina la terminación -ron y se añaden: -ra, -ras, -ra, -ramos, -rais, -ran. Esta regla se aplica a TODOS los verbos —regulares e irregulares— con lo que el imperfecto de subjuntivo es completamente sistemático: hablar → hablaron → hablara; tener → tuvieron → tuviera; ser/ir → fueron → fuera; hacer → hicieron → hiciera. Usos principales: (1) Oraciones condicionales tipo 2 — si + imp. subj. + condicional: «Si tuviera dinero, viajaría.» (2) Peticiones de cortesía con querer/poder: «Quisiera un café.» (3) Estilo indirecto con mandatos: «Te dije que vinieras.» (4) Ojalá para deseos difíciles de cumplir: «Ojalá tuviera más tiempo.»"
        },
        examples: [
            { native: "Si tuviera más tiempo, aprendería a tocar la guitarra.", translation: "If I had more time, I would learn to play the guitar. (si-clause Type 2)" },
            { native: "Quisiera hablar con el director, por favor.", translation: "I would like to speak with the director, please. (polite request)" },
            { native: "Me pidió que llegara puntual.", translation: "He asked me to arrive on time.", annotation: "reported command → que + imperfecto de subjuntivo" },
            { native: "Ojalá pudiéramos quedarnos más tiempo.", translation: "I wish we could stay longer.", annotation: "ojalá + imperfecto de subjuntivo = unlikely wish" },
            { native: "Si fuera tú, no lo haría.", translation: "If I were you, I wouldn't do it.", annotation: "ser: fueron → fuera (imperfecto de subjuntivo)" },
        ]
    },
    {
        id: "es-g-b1-11",
        level: "B1",
        title: "Subjuntivo en Cláusulas de Relativo e Impersonales",
        explanation: {
            native: "The subjunctive appears in relative clauses when the antecedent (the noun being described) is unknown, hypothetical, or doesn't yet exist — as opposed to a specific, known referent. Compare: 'Busco al médico que habla inglés' (indicative — a specific known doctor) vs. 'Busco un médico que hable inglés' (subjunctive — any doctor who happens to speak English). Key triggers: buscar, necesitar, querer + an indefinite article or negative. Also used in impersonal expressions not expressing certainty: es importante que, es posible que, es necesario que, es una lástima que — all require the subjunctive. Contrast: es cierto que / es verdad que / es obvio que → indicative (certainty).",
            target: "El subjuntivo aparece en las cláusulas de relativo cuando el antecedente (el sustantivo que se describe) es desconocido, hipotético o aún no existe, a diferencia de un referente específico y conocido. Contraste: «Busco al médico que habla inglés» (indicativo — un médico específico conocido) vs. «Busco un médico que hable inglés» (subjuntivo — cualquier médico que hable inglés). Desencadenantes clave: buscar, necesitar, querer + artículo indefinido o con negación. También se usa en expresiones impersonales que no expresan certeza: es importante que, es posible que, es necesario que, es una lástima que. Contraste: es cierto que / es verdad que / es obvio que → indicativo (certeza)."
        },
        examples: [
            { native: "Busco un apartamento que tenga terraza.", translation: "I'm looking for a flat that has a terrace. (hypothetical — any flat)" },
            { native: "No hay nadie que sepa la respuesta.", translation: "There is nobody who knows the answer.", annotation: "negative antecedent → subjunctive" },
            { native: "Es posible que llegue tarde.", translation: "It's possible that he will arrive late.", annotation: "es posible que → subjunctive" },
            { native: "Es cierto que el proyecto es difícil.", translation: "It's true that the project is difficult.", annotation: "es cierto que → indicative (certainty, not doubt)" },
            { native: "Necesitamos a alguien que hable chino.", translation: "We need someone who speaks Chinese.", annotation: "indefinite alguien → subjunctive" },
        ]
    },
    {
        id: "es-g-b1-12",
        level: "B1",
        title: "Subjuntivo en Cláusulas Temporales",
        explanation: {
            native: "Temporal conjunctions (cuando, hasta que, en cuanto, tan pronto como, antes de que) take the subjunctive when referring to a future or hypothetical event, and the indicative when referring to habitual or past events. This is a major B1 distinction: 'Cuando llegué, llamé' (indicative — past fact) vs. 'Cuando llegues, llama' (subjunctive — future instruction). Rule of thumb: if the event hasn't happened yet, use subjunctive. Always-subjunctive conjunctions: antes de que (always future-leaning). Key set: cuando + subj. (future); hasta que + subj. (until it happens); en cuanto/tan pronto como + subj. (as soon as it happens). After a main verb in the past, antes de que always takes imperfecto de subjuntivo.",
            target: "Las conjunciones temporales (cuando, hasta que, en cuanto, tan pronto como, antes de que) rigen subjuntivo cuando se refieren a un evento futuro o hipotético, e indicativo cuando se refieren a eventos habituales o pasados. Esta es una distinción clave en B1: «Cuando llegué, llamé» (indicativo — hecho pasado) vs. «Cuando llegues, llama» (subjuntivo — instrucción futura). Regla práctica: si el evento todavía no ha ocurrido, usa subjuntivo. Conjunciones de uso siempre subjuntivo: antes de que. Claves: cuando + subj. (futuro); hasta que + subj. (hasta que ocurra); en cuanto / tan pronto como + subj. (en cuanto ocurra). Tras un verbo principal en pasado, antes de que rige siempre imperfecto de subjuntivo."
        },
        examples: [
            { native: "Cuando llegues a casa, llámame.", translation: "When you get home, call me.", annotation: "future event → subjunctive with cuando" },
            { native: "Cuando llegué a casa, llamé a mis padres.", translation: "When I got home, I called my parents.", annotation: "past fact → indicative with cuando" },
            { native: "Esperaré hasta que termines.", translation: "I'll wait until you finish.", annotation: "future event → subjunctive with hasta que" },
            { native: "En cuanto sepa algo, te aviso.", translation: "As soon as I know something, I'll let you know.", annotation: "future event → subjunctive with en cuanto" },
            { native: "Salió antes de que yo llegara.", translation: "She left before I arrived.", annotation: "before a past event → imperfecto de subjuntivo with antes de que" },
        ]
    },
    {
        id: "es-g-b1-13",
        level: "B1",
        title: "La Voz Pasiva con Ser",
        explanation: {
            native: "Spanish has two passive constructions. The se pasivo (A2) is common in spoken/written Spanish to avoid naming the agent: 'Aquí se habla español.' The true passive with ser (B1) places the focus on the result and explicitly names the agent with por. Formation: subject + ser (any tense) + past participle + por + agent. The past participle agrees with the subject in gender and number. Common in formal writing, news reporting, and academic Spanish. Compare: 'Pablo construyó el puente.' (active) → 'El puente fue construido por Pablo.' (passive with ser). Note: estar + past participle expresses a resulting STATE (not the action itself): 'La puerta está abierta' (state) vs. 'La puerta fue abierta por el guardia' (action).",
            target: "El español tiene dos construcciones pasivas. La pasiva con se (A2) es común para evitar nombrar al agente: «Aquí se habla español». La pasiva verdadera con ser (B1) pone el foco en el resultado y nombra explícitamente al agente con por. Formación: sujeto + ser (cualquier tiempo) + participio pasado + por + agente. El participio concuerda con el sujeto en género y número. Es frecuente en escritura formal, noticias y español académico. Contraste: «Pablo construyó el puente» (activa) → «El puente fue construido por Pablo» (pasiva con ser). Nota: estar + participio expresa un ESTADO resultante (no la acción): «La puerta está abierta» (estado) vs. «La puerta fue abierta por el guardia» (acción)."
        },
        examples: [
            { native: "El libro fue escrito por García Márquez.", translation: "The book was written by García Márquez." },
            { native: "El proyecto ha sido aprobado por el director.", translation: "The project has been approved by the director." },
            { native: "La ciudad fue fundada en el siglo XV.", translation: "The city was founded in the 15th century. (agent omitted)" },
            { native: "Las leyes serán revisadas por el parlamento.", translation: "The laws will be reviewed by parliament." },
            { native: "La puerta está cerrada. (estado) / La puerta fue cerrada por el guardia. (acción)", translation: "The door is closed. / The door was closed by the guard.", annotation: "estar + participio = resultant state; ser + participio = passive action" },
        ]
    },
    {
        id: "es-g-b1-14",
        level: "B1",
        title: "Gerundio en Construcciones Compuestas",
        explanation: {
            native: "Beyond the basic progressive (estar + gerundio from A2), Spanish uses the gerund in several compound constructions that express how an action unfolds over time. Key constructions: llevar + time + gerundio (to have been doing something for a period: 'Llevo tres años estudiando español'); seguir/continuar + gerundio (to keep doing: 'Sigue lloviendo'); ir + gerundio (progressive development: 'El proyecto va mejorando'); venir + gerundio (has been happening, with background implication: 'Viene diciendo lo mismo hace meses'). The gerund itself: regular -ar verbs → -ando; -er/-ir verbs → -iendo; stem-changing -ir verbs change the stem vowel (pedir → pidiendo, dormir → durmiendo). The gerund is invariable — it never changes for gender or number.",
            target: "Más allá del progresivo básico (estar + gerundio, A2), el español usa el gerundio en varias construcciones compuestas que expresan cómo se desarrolla una acción en el tiempo. Construcciones clave: llevar + tiempo + gerundio (llevar haciendo algo durante un período: «Llevo tres años estudiando español»); seguir/continuar + gerundio (seguir haciendo algo: «Sigue lloviendo»); ir + gerundio (desarrollo progresivo: «El proyecto va mejorando»); venir + gerundio (lleva tiempo ocurriendo: «Viene diciendo lo mismo hace meses»). El gerundio: verbos regulares -ar → -ando; -er/-ir → -iendo; verbos -ir con cambio de raíz cambian la vocal (pedir → pidiendo, dormir → durmiendo). El gerundio es invariable: nunca cambia de género ni número."
        },
        examples: [
            { native: "Llevo dos horas esperando el autobús.", translation: "I have been waiting for the bus for two hours. (llevar + gerundio)" },
            { native: "Sigue lloviendo aunque son las cuatro de la tarde.", translation: "It's still raining even though it's four in the afternoon. (seguir + gerundio)" },
            { native: "La situación va mejorando poco a poco.", translation: "The situation is gradually improving.", annotation: "ir + gerundio = progressive development over time" },
            { native: "Viene quejándose del trabajo desde hace meses.", translation: "He has been complaining about the job for months. (venir + gerundio)" },
            { native: "Entró corriendo y gritando.", translation: "He entered running and shouting. (gerund as adverb of manner)" },
        ]
    },
]
