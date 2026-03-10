import { GrammarLesson } from "../../../types"

// B2 grammar — 5 lessons.

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
    }
]
