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
    }
]
