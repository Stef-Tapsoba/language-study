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
            native: "The simple future expresses what will happen. Regular verbs add endings directly to the infinitive: -é, -ás, -á, -emos, -éis, -án. Some common verbs have irregular stems: tener→tendr-, poder→podr-, venir→vendr-, salir→saldr-, hacer→har-.",
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
            { native: "Estudié por tres horas.", translation: "I studied for three hours. (duration → por)" },
            { native: "Este regalo es para ti.", translation: "This gift is for you. (recipient → para)" },
            { native: "Lo compré por veinte euros.", translation: "I bought it for twenty euros. (exchange → por)" },
            { native: "Salgo para Madrid mañana.", translation: "I'm leaving for Madrid tomorrow. (destination → para)" }
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
            { native: "'Estoy cansado.' → Dijo que estaba cansado.", translation: "'I am tired.' → He said he was tired." },
            { native: "'¿Tienes hambre?' → Me preguntó si tenía hambre.", translation: "'Are you hungry?' → She asked me if I was hungry." },
            { native: "'Vendré mañana.' → Dijo que vendría al día siguiente.", translation: "'I'll come tomorrow.' → He said he'd come the next day." },
            { native: "'¡Come más despacio!' → Le dijo que comiera más despacio.", translation: "'Eat more slowly!' → She told him to eat more slowly." },
            { native: "'No sé dónde está.' → Explicó que no sabía dónde estaba.", translation: "'I don't know where it is.' → She explained she didn't know where it was." },
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
]
