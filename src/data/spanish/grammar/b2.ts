import { GrammarLesson } from "../../../types"

// B2 grammar — 14 lessons.

export const b2Grammar: GrammarLesson[] = [
    {
        id: "es-g-b2-1",
        level: "B2",
        title: "Imperfecto de Subjuntivo (Past Subjunctive)",
        explanation: {
            native: "The imperfect subjunctive expresses wishes, conditions, or hypothetical situations in the past or with a sense of tentativeness. It is formed from the third-person plural of the preterite: drop -ron and add the imperfect subjunctive endings (-ra, -ras, -ra, -ramos, -rais, -ran). It is used after si (if) in Type-2 conditionals, after verbs of wishing when the subject is different (quisiera que), after ojalá for an unlikely wish, and in formal polite expressions (quisiera un café).",
            target: "El pretérito imperfecto de subjuntivo expresa deseos, condiciones o situaciones hipotéticas en el pasado o con sentido de improbabilidad. Se forma a partir de la tercera persona del plural del pretérito indefinido: se elimina -ron y se añaden las terminaciones: -ra, -ras, -ra, -ramos, -rais, -ran. Se utiliza tras si en las condicionales de tipo 2, tras verbos de deseo cuando el sujeto cambia (quisiera que), con ojalá para deseos poco probables, y en expresiones formales de cortesía (quisiera un café)."
        },
        examples: [
            { native: "Si tuviera más dinero, viajaría por el mundo.", translation: "If I had more money, I would travel the world." },
            { native: "Quisiera que vinieras conmigo.", translation: "I would like you to come with me." },
            { native: "Ojalá pudiera hablar español perfectamente.", translation: "If only I could speak Spanish perfectly." },
            { native: "El profesor pidió que los estudiantes leyeran el capítulo.", translation: "The teacher asked the students to read the chapter." }
        ]
    },
    {
        id: "es-g-b2-2",
        level: "B2",
        title: "Voz Pasiva (Passive Voice)",
        explanation: {
            native: "The passive voice in Spanish is formed with ser + past participle, where the past participle agrees in gender and number with the subject. It is used when the action is more important than the agent, or when the agent is unknown. The agent (doer) is introduced by the preposition por. Spanish also frequently uses the reflexive se-passive (se construyó, se venden) to avoid naming an agent, especially in formal or impersonal contexts.",
            target: "La voz pasiva en español se forma con ser + participio pasado. El participio concuerda en género y número con el sujeto. Se usa cuando la acción es más relevante que el agente, o cuando el agente es desconocido. El agente se introduce con la preposición por. En español también es muy frecuente la pasiva refleja con se (se construyó, se venden), especialmente en contextos formales o impersonales donde no se menciona el agente."
        },
        examples: [
            { native: "El puente fue construido en 1920.", translation: "The bridge was built in 1920." },
            { native: "Las leyes son aprobadas por el parlamento.", translation: "The laws are passed by parliament." },
            { native: "El informe fue escrito por la investigadora.", translation: "The report was written by the researcher." },
            { native: "Se venden entradas en la taquilla.", translation: "Tickets are sold at the box office." }
        ]
    },
    {
        id: "es-g-b2-3",
        level: "B2",
        title: "Oraciones de Relativo (Relative Clauses)",
        explanation: {
            native: "Relative clauses link a descriptive clause to a noun (the antecedent). The most common relative pronoun is que (that/which/who). El que / la que / los que / las que and el cual / la cual are used after prepositions or for clarity. Quien / quienes refers exclusively to people. Cuyo / cuya / cuyos / cuyas means 'whose' and agrees with the noun it modifies, not with the antecedent. Relative clauses can be restrictive (no comma, essential to meaning) or non-restrictive (comma, extra information).",
            target: "Las oraciones de relativo unen una cláusula descriptiva al sustantivo al que se refieren (el antecedente). El pronombre relativo más frecuente es que (que/cual/quien). El que / la que / los que / las que y el cual / la cual se usan tras preposiciones o para mayor claridad. Quien / quienes se refiere exclusivamente a personas. Cuyo / cuya / cuyos / cuyas significa 'cuyo/cuya' y concuerda con el sustantivo que acompaña, no con el antecedente. Las oraciones de relativo pueden ser especificativas (sin coma, esenciales) o explicativas (con coma, información adicional)."
        },
        examples: [
            { native: "La persona quien me llamó era mi jefa.", translation: "The person who called me was my boss." },
            { native: "El escritor cuya novela ganó el premio es colombiano.", translation: "The writer whose novel won the prize is Colombian." },
            { native: "El edificio en el cual trabaja es muy moderno.", translation: "The building in which she works is very modern." },
            { native: "Los estudiantes que aprobaron el examen celebraron la noticia.", translation: "The students who passed the exam celebrated the news." }
        ]
    },
    {
        id: "es-g-b2-4",
        level: "B2",
        title: "Estilo Indirecto (Reported Speech)",
        explanation: {
            native: "Reported speech (indirect speech) is used to relay what someone said without quoting them directly. When reporting a statement, use dijo que + clause; when reporting a question, use preguntó si + clause. Tense backshift typically occurs: present → imperfect, future → conditional, preterite may stay or become pluperfect. Pronouns and time expressions also shift (mañana → al día siguiente, aquí → allí). In Spanish, the conjunction que is always required after the reporting verb.",
            target: "El estilo indirecto sirve para transmitir lo que alguien dijo sin citarlo directamente. Para reportar una afirmación se usa dijo que + cláusula; para una pregunta, preguntó si + cláusula. Generalmente se produce una concordancia de tiempos: presente → imperfecto, futuro → condicional, el indefinido puede mantenerse o pasar a pluscuamperfecto. Los pronombres y los marcadores temporales también cambian (mañana → al día siguiente, aquí → allí). En español, la conjunción que es siempre obligatoria tras el verbo introductor."
        },
        examples: [
            { native: "Ella dijo que estaba muy cansada.", translation: "She said (that) she was very tired." },
            { native: "Él preguntó si yo conocía la ciudad.", translation: "He asked whether I knew the city." },
            { native: "El director anunció que la reunión sería al día siguiente.", translation: "The director announced that the meeting would be the next day." },
            { native: "Me explicó que había terminado el proyecto.", translation: "He explained to me that he had finished the project." }
        ]
    },
    {
        id: "es-g-b2-5",
        level: "B2",
        title: "Período Hipotético Tipo 2 (Type-2 Conditionals)",
        explanation: {
            native: "Type-2 conditionals express hypothetical or unlikely situations in the present or future. They contrast with Type-1 (real possibility) and Type-3 (impossible past). Structure: Si + imperfect subjunctive, + conditional simple. The si-clause states the hypothetical condition; the main clause states what would happen. The imperfect subjunctive can use either the -ra or -se forms (tuviera / tuviese). Common in everyday speech to give advice, express unlikely wishes, or speculate.",
            target: "Las condicionales de tipo 2 expresan situaciones hipotéticas o poco probables en el presente o futuro. Se diferencian del tipo 1 (posibilidad real) y del tipo 3 (imposibilidad en el pasado). Estructura: Si + imperfecto de subjuntivo, + condicional simple. La cláusula con si plantea la condición hipotética; la cláusula principal expresa lo que ocurriría. El imperfecto de subjuntivo admite tanto la forma -ra como -se (tuviera / tuviese). Se usa habitualmente para dar consejos, expresar deseos improbables o especular."
        },
        examples: [
            { native: "Si tuviera más tiempo libre, aprendería a tocar la guitarra.", translation: "If I had more free time, I would learn to play the guitar." },
            { native: "Si ella viviera en Madrid, visitaría el Prado cada semana.", translation: "If she lived in Madrid, she would visit the Prado every week." },
            { native: "¿Qué harías si pudieras cambiar algo en tu vida?", translation: "What would you do if you could change something in your life?" },
            { native: "Si el gobierno invirtiera más en educación, los resultados mejorarían.", translation: "If the government invested more in education, results would improve." }
        ]
    },
    {
        id: "es-g-b2-6",
        level: "B2",
        title: "Condicional Mixto & Hipótesis",
        explanation: {
            native: "The mixed conditional combines a past si-clause with a present-tense result: Si + pluperfect subjunctive → conditional simple. It expresses 'if X had happened, Y would be different now'. Example: Si hubiera estudiado medicina, sería médico ahora. Concessive patterns at B2: por mucho que + subjuntivo (no matter how much); a no ser que + subjuntivo (unless); con tal de que + subjuntivo (provided that). Journalistic conditional: conditional perfect to report unconfirmed information — El gobierno habría aprobado el decreto = The government is reported to have passed the decree.",
            target: "El condicional mixto combina una prótasis en el pasado con una apódosis en el presente: Si + pluscuamperfecto de subjuntivo → condicional simple. Expresa 'si X hubiera pasado, Y sería diferente ahora'. Ejemplo: Si hubiera estudiado medicina, sería médico ahora. Patrones concesivos en B2: por mucho que + subjuntivo; a no ser que + subjuntivo; con tal de que + subjuntivo. Condicional periodístico: condicional compuesto para información no confirmada — El gobierno habría aprobado el decreto."
        },
        examples: [
            { native: "Si hubiera ahorrado más de joven, tendría más seguridad económica ahora.", translation: "If I had saved more when young, I would have more financial security now." },
            { native: "Por mucho que lo intentes, no lo convencerás.", translation: "No matter how hard you try, you won't convince him." },
            { native: "El CEO habría presentado su dimisión ayer.", translation: "The CEO is reported to have submitted his resignation yesterday. (journalistic)" },
        ]
    },
    {
        id: "es-g-b2-7",
        level: "B2",
        title: "Subjuntivo en Concesión & Ser/Estar Avanzado",
        explanation: {
            native: "Aunque + indicativo concedes a known fact ('even though, and I know it's true'). Aunque + subjuntivo frames it as hypothetical or unknown ('even if, whether or not it's true'). Full ser/estar distinctions at B2: events use ser for time/location (la conferencia es a las tres); adjectives with ser = permanent characteristic; adjectives with estar = current state — and the meaning can change: es aburrido (he's boring) vs está aburrido (he's bored). Purpose clauses always take subjuntivo: para que, a fin de que, de modo que (when expressing purpose).",
            target: "Aunque + indicativo concede un hecho conocido ('aunque, y sé que es verdad'). Aunque + subjuntivo lo presenta como hipotético o desconocido ('aunque, sea o no sea verdad'). Distinciones avanzadas ser/estar en B2: eventos usan ser para hora/lugar; adjetivos con ser = característica permanente; adjetivos con estar = estado actual — y el significado puede cambiar: es aburrido (es un aburrido) vs está aburrido (ahora tiene aburrimiento). Las oraciones de finalidad siempre van con subjuntivo: para que, a fin de que, de modo que."
        },
        examples: [
            { native: "Aunque esté cansado, terminaré el informe. (hypothetical)", translation: "Even if I'm tired, I'll finish the report. (he may or may not be tired)" },
            { native: "Aunque está cansado, terminará el informe. (fact)", translation: "Even though he is tired, he will finish the report. (he definitely is tired)" },
            { native: "La reunión es en la sala de conferencias a las tres. (event → ser)", translation: "The meeting is in the conference room at three." },
            { native: "Hablo despacio para que todos me entiendan.", translation: "I speak slowly so that everyone understands me. (para que + subjuntivo)" },
        ]
    },
    {
        id: "es-g-b2-8",
        level: "B2",
        title: "Registro Formal & Expresiones Idiomáticas",
        explanation: {
            native: "Formal written Spanish uses: dado que / habida cuenta de / en virtud de (formal 'because/given'); no obstante / sin embargo / empero (formal 'however'); por consiguiente / en consecuencia (formal 'therefore'); cabe señalar / cabe destacar (it is worth noting). Informal/colloquial register: tío/tía (dude/mate), mola (it's cool), flipar (to be amazed), pillar (to understand/get). Key B2 idioms: no hay mal que por bien no venga (every cloud has a silver lining), dar en el clavo (hit the nail on the head), estar en las nubes (to be daydreaming), no dar palo al agua (not lift a finger).",
            target: "El español formal escrito usa: dado que / habida cuenta de / en virtud de; no obstante / sin embargo / empero; por consiguiente / en consecuencia; cabe señalar / cabe destacar. Registro informal: tío/tía, mola, flipar, pillar. Modismos B2 clave: no hay mal que por bien no venga, dar en el clavo, estar en las nubes, no dar palo al agua."
        },
        examples: [
            { native: "Habida cuenta de los resultados, se impone una revisión de la estrategia.", translation: "Given the results, a review of the strategy is necessary. (formal)" },
            { native: "No obstante las dificultades, el proyecto avanzó.", translation: "Nevertheless the difficulties, the project moved forward." },
            { native: "Al final, no hay mal que por bien no venga — el accidente nos hizo más prudentes.", translation: "In the end, every cloud has a silver lining — the accident made us more careful." },
        ]
    },
    {
        id: "es-g-b2-9",
        level: "B2",
        title: "El Subjuntivo Imperfecto — Más Allá de las Condicionales",
        explanation: {
            native: "At B2, the imperfecto de subjuntivo extends beyond si-clauses to: (1) Independent/optative use expressing wishes, laments or polite requests: '¡Ojalá pudiera quedarme!' / '¡Quién supiera la respuesta!' / 'Quisiera hablar contigo' (quisiera = very polite form of querer). (2) Reported speech with a past reporting verb: 'Le dijo que viniera' (He told her to come) — the imperative shifts to imperfecto de subjuntivo in reported commands with past-tense trigger. (3) Concessive clauses: 'Por mucho que trabajara, nunca lo conseguiría' (No matter how hard he worked...). (4) Temporal clauses with past reference: 'Esperó hasta que llegara' (He waited until she arrived — past temporal with subjunctive).",
            target: "En B2, el imperfecto de subjuntivo se extiende más allá de las oraciones condicionales: (1) Uso optativo independiente para expresar deseos o lamentos: «¡Ojalá pudiera quedarme!» / «Quisiera hablar contigo». (2) Estilo indirecto con verbo introductor en pasado: «Le dijo que viniera» — el imperativo se transforma en imperfecto de subjuntivo en los mandatos reportados con tiempo pasado. (3) Oraciones concesivas: «Por mucho que trabajara, nunca lo conseguiría». (4) Oraciones temporales con referencia pasada: «Esperó hasta que llegara»."
        },
        examples: [
            { native: "¡Ojalá tuviéramos más tiempo para hablar!", translation: "I wish we had more time to talk! (optative ojalá + imperf. subj.)" },
            { native: "Le pidió que trajeran los documentos al día siguiente.", translation: "She asked them to bring the documents the next day. (reported command → imperfecto subj.)" },
            { native: "Por difícil que fuera la situación, siguieron adelante.", translation: "However difficult the situation was, they carried on. (concessive por + adjective + que)" },
            { native: "Quisiera pedirte un favor, si no es mucha molestia.", translation: "I would like to ask you a favour, if it's not too much trouble. (quisiera = very polite request)" }
        ]
    },
    {
        id: "es-g-b2-10",
        level: "B2",
        title: "La Nominalización — Español Académico y Formal",
        explanation: {
            native: "Nominalisation converts verbs and adjectives into noun forms, producing the dense, impersonal style of formal written Spanish. Key patterns: verb → noun (desarrollar → el desarrollo, reducir → la reducción, implementar → la implementación); adjective → noun (libre → la libertad, justo → la justicia). The structure 'el hecho de que + subjuntivo' is a key nominalisation trigger in formal argumentation. 'El que/la que + subjuntivo' also nominalises clauses. Impersonal nominalisations: 'es importante señalar que', 'cabe destacar que', 'hay que tener en cuenta que'. Relative nominalisations using lo: 'lo que más llama la atención es...' (what is most striking is...).",
            target: "La nominalización convierte verbos y adjetivos en formas nominales, produciendo el estilo denso e impersonal del español escrito formal. Patrones clave: verbo → nombre (desarrollar → el desarrollo, reducir → la reducción, implementar → la implementación); adjetivo → nombre (libre → la libertad). La estructura «el hecho de que + subjuntivo» es un detonante clave en la argumentación formal. «El que/la que + subjuntivo» también nominaliza cláusulas. Nominalizaciones impersonales: «es importante señalar que», «cabe destacar que», «hay que tener en cuenta que». La nominalización con lo: «lo que más llama la atención es...»."
        },
        examples: [
            { native: "El desarrollo sostenible es una prioridad global.", translation: "Sustainable development is a global priority. (nominalisation: desarrollar → el desarrollo)" },
            { native: "El hecho de que no se hayan tomado medidas es preocupante.", translation: "The fact that no measures have been taken is worrying. (el hecho de que + subj.)" },
            { native: "Cabe destacar que los resultados superaron todas las expectativas.", translation: "It is worth noting that the results exceeded all expectations. (formal: cabe destacar que)" },
            { native: "Lo que más sorprende es la rapidez del cambio.", translation: "What is most surprising is the speed of the change. (lo que = nominalised clause)" }
        ]
    },
    {
        id: "es-g-b2-11",
        level: "B2",
        title: "Estructuras de Énfasis — Las Perífrasis de Relativo y el Estilo Formal",
        explanation: {
            native: "Spanish uses cleft sentences and emphatic structures to focus attention on a particular element. Types: (1) Es + noun/adjective + que/quien: 'Es el desempleo lo que más preocupa' (It is unemployment that worries most). Note: lo que is used when the focus is on a clause; quien is used for people. (2) Lo que...es: 'Lo que no entiendo es por qué dimitió' (What I don't understand is why he resigned). (3) El/la/los/las + noun + que: 'La razón por la que dimitió fue...' (The reason for which he resigned was...). (4) Ser + participio + por: passive emphasis — 'Fue elegido por unanimidad' with emphatic por. These structures are common in journalism, academic writing, and formal spoken argumentation.",
            target: "El español usa oraciones escindidas y estructuras enfáticas para concentrar la atención en un elemento específico. Tipos: (1) Es + nombre/adjetivo + que/quien: «Es el desempleo lo que más preocupa». Nota: lo que se usa cuando el foco es una cláusula; quien se usa para personas. (2) Lo que...es: «Lo que no entiendo es por qué dimitió». (3) El/la/los/las + nombre + que: «La razón por la que dimitió fue...». (4) Ser + participio + por para el énfasis pasivo. Estas estructuras son comunes en el periodismo, la escritura académica y la argumentación oral formal."
        },
        examples: [
            { native: "Es la falta de inversión lo que frena el desarrollo del sector.", translation: "It is the lack of investment that is holding back the development of the sector. (cleft with lo que)" },
            { native: "Fue precisamente en ese momento cuando todo cambió.", translation: "It was precisely at that moment that everything changed. (emphatic: fue...cuando)" },
            { native: "Lo que distingue a esta propuesta es su enfoque innovador.", translation: "What distinguishes this proposal is its innovative approach. (lo que structure)" },
            { native: "Son los ciudadanos quienes deben tomar esta decisión.", translation: "It is the citizens who must make this decision. (ser + quienes for people)" }
        ]
    },
    {
        id: "es-g-b2-12",
        level: "B2",
        title: "Ser vs. Estar — Dominio Completo y Usos Abstractos",
        explanation: {
            native: "At B2, ser vs. estar distinctions reach full mastery, including subtle and abstract uses. Ser with adjectives expressing permanent/defining characteristics: 'Es inteligente' (He is intelligent — as a defining trait). Estar with adjectives for states, changes, or subjective evaluation: 'Está inteligente hoy' (He seems sharp today — unusual, subjective). Key advanced distinctions: ser aburrido (to be a boring person) vs estar aburrido (to be bored right now). Estar used for location of EVENTS (as well as people and things): 'El partido está en el estadio'. Ser for inherent, unchanging aspects; estar for the result of a process of change: 'Está muerto' (He is dead — resulted from dying). With past participles: estar marks a current state resulting from an action; ser marks a passive action. 'La puerta está abierta' (state, open now) vs 'La puerta es abierta por el guardia' (passive: guard opens it).",
            target: "En B2, las distinciones entre ser y estar alcanzan dominio completo, incluidos los usos sutiles y abstractos. Ser con adjetivos que expresan características permanentes o definitorias: «Es inteligente». Estar con adjetivos para estados, cambios o evaluación subjetiva: «Está inteligente hoy». Distinciones clave avanzadas: ser aburrido (ser una persona aburrida) vs estar aburrido (sentirse aburrido en este momento). Estar para la ubicación de EVENTOS: «El partido está en el estadio». Ser para aspectos inherentes; estar para el resultado de un proceso de cambio: «Está muerto». Con participios: estar marca un estado actual; ser marca una acción pasiva: «La puerta está abierta» (estado) vs «La puerta es abierta» (pasiva)."
        },
        examples: [
            { native: "Es muy aburrida en las reuniones — siempre habla de lo mismo.", translation: "She is very boring in meetings — she always talks about the same things. (ser aburrida = boring personality)" },
            { native: "Está muy aburrida esperando — la reunión lleva dos horas.", translation: "She is very bored waiting — the meeting has been going for two hours. (estar aburrida = feeling bored now)" },
            { native: "El castillo es medieval, pero está muy bien conservado.", translation: "The castle is medieval, but it is very well preserved. (ser: inherent; estar: resulting state)" },
            { native: "La decisión fue tomada por el consejo.", translation: "The decision was taken by the board. (ser + participio = passive action)" }
        ]
    },
    {
        id: "es-g-b2-13",
        level: "B2",
        title: "El Condicional Compuesto — Regret, Crítica y Condicional Periodístico",
        explanation: {
            native: "The condicional compuesto (habría/habrían + past participle) has three B2 uses beyond the si-clause hypothetical. (1) Past regret: 'Debería haber estudiado más' (I should have studied more — self-criticism about past). (2) Critical reproach: 'Habrías podido llamar' (You could have called — implicit criticism). (3) The condicional periodístico/de evidencialidad: used to report unverified claims: 'El ministro habría presentado su dimisión' (The minister is said to have resigned — the writer distances themselves from the claim). This journalistic use parallels French conditionnel journalistique and is mandatory in quality Spanish journalism. Key phrase signals: según fuentes, presuntamente, al parecer.",
            target: "El condicional compuesto (habría/habrían + participio) tiene tres usos B2 más allá de la hipótesis con si. (1) Lamento o reproche sobre el pasado: «Debería haber estudiado más». (2) Reproche crítico: «Habrías podido llamar». (3) El condicional periodístico/de evidencialidad: para informar sobre hechos no verificados: «El ministro habría presentado su dimisión» — el periodista se distancia de la afirmación. Este uso periodístico es obligatorio en el periodismo de calidad español. Señales clave: según fuentes, presuntamente, al parecer."
        },
        examples: [
            { native: "Tendría que haber llegado antes — la reunión ya había empezado.", translation: "I should have arrived earlier — the meeting had already started. (past regret)" },
            { native: "Podrías haberme avisado con más tiempo.", translation: "You could have given me more notice. (reproach)" },
            { native: "Según fuentes policiales, el sospechoso habría huido al extranjero.", translation: "According to police sources, the suspect is said to have fled abroad. (journalistic: unverified)" },
            { native: "Los precios habrían subido un cinco por ciento, según el informe preliminar.", translation: "Prices are reported to have risen by five per cent, according to the preliminary report. (journalistic: hedging)" }
        ]
    },
    {
        id: "es-g-b2-14",
        level: "B2",
        title: "Como si + Imperfecto / Pluscuamperfecto de Subjuntivo",
        explanation: {
            native: "\"Como si\" (as if / as though) ALWAYS takes the subjunctive — it never takes the indicative. It has two forms depending on the time frame. (1) Como si + imperfecto de subjuntivo: describes a current or ongoing condition that is contrary to reality: \"Habla como si fuera el jefe\" (He talks as if he were the boss — he is not). \"Gastan como si tuvieran todo el dinero del mundo\" (They spend as if they had all the money in the world). (2) Como si + pluscuamperfecto de subjuntivo: describes a past condition contrary to reality, referring to an action that preceded the main verb: \"Actuó como si nunca hubiera pasado nada\" (He acted as if nothing had ever happened). Common with verbs of behaviour and appearance: hablar, actuar, comportarse, mirar, tratar a alguien. Note: the English \"as if\" can also take indicative in colloquial usage; Spanish never allows this — \"como si\" is always followed by subjunctive.",
            target: "«Como si» toma SIEMPRE el subjuntivo, nunca el indicativo. Tiene dos formas según el marco temporal. (1) Como si + imperfecto de subjuntivo: describe una condición actual contraria a la realidad: «Habla como si fuera el jefe» (pero no lo es). «Gastan como si tuvieran todo el dinero del mundo». (2) Como si + pluscuamperfecto de subjuntivo: describe una condición pasada contraria a la realidad, anterior al verbo principal: «Actuó como si nunca hubiera pasado nada». Común con verbos de comportamiento y apariencia: hablar, actuar, comportarse, mirar, tratar a alguien. Nota: el inglés «as if» puede ir en indicativo coloquialmente; en español «como si» SIEMPRE rige subjuntivo."
        },
        examples: [
            { native: "Habla como si supiera todo, pero en realidad no sabe nada.", translation: "He talks as if he knew everything, but in reality he knows nothing. (como si + imperfecto subj.)" },
            { native: "Me trataba como si fuera un extraño, a pesar de que nos conocemos desde la infancia.", translation: "He treated me as if I were a stranger, even though we've known each other since childhood." },
            { native: "Actuó como si no hubiera dicho nada.", translation: "She acted as if she hadn't said anything. (como si + pluscuamperfecto subj.)" },
            { native: "Sonrió como si todo estuviera bien, aunque sabía que no era así.", translation: "She smiled as if everything were fine, even though she knew it wasn't." }
        ]
    },
]
