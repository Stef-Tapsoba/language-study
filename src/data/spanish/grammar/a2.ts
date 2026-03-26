// data/spanish/grammar/a2.ts
import { GrammarLesson } from "../../../types"

// A2 grammar — 22 lessons.
// Duplicates with A1 (reflexive verbs, gustar, direct object pronouns,
// demonstrative adjectives, modal verbs, ir a + infinitive) have been
// replaced with proper A2 content.

export const esGrammarA2: GrammarLesson[] = [
    {
        id: "es-g-a2-1",
        level: "A2",
        title: "Preterite Tense — Regular Verbs (Pretérito Indefinido)",
        explanation: {
            native: "The preterite expresses completed past actions at a specific moment or time. Regular -ar verbs take: -é, -aste, -ó, -amos, -asteis, -aron. Regular -er/-ir verbs take: -í, -iste, -ió, -imos, -isteis, -ieron. Common time markers: ayer, anoche, la semana pasada, el año pasado, hace + time.",
            target: "El pretérito indefinido expresa acciones pasadas que se completaron en un momento concreto. Los verbos regulares en -ar toman las terminaciones: -é, -aste, -ó, -amos, -asteis, -aron. Los verbos en -er/-ir toman: -í, -iste, -ió, -imos, -isteis, -ieron. Marcadores de tiempo frecuentes: ayer, anoche, la semana pasada, el año pasado, hace + tiempo.",
        },
        examples: [
            { native: "Ayer comí pizza.", translation: "Yesterday I ate pizza." },
            { native: "Ella habló con el profesor.", translation: "She spoke with the teacher." },
            { native: "¿A qué hora llegaste?", translation: "What time did you arrive?" },
            { native: "Vivieron en Londres dos años.", translation: "They lived in London for two years." },
            { native: "Escribí un correo esta mañana.", translation: "I wrote an email this morning." }
        ],
        inlineVocab: [
            { word: "llegar", translation: "to arrive" },
            { word: "escribir", translation: "to write" },
            { word: "ayer", translation: "yesterday" },
            { word: "anoche", translation: "last night" }
        ]
    },
    {
        id: "es-g-a2-2",
        level: "A2",
        title: "Simple Future (Futuro Simple)",
        explanation: {
            native: "The futuro simple expresses future predictions, promises, and plans. It is formed by adding the endings -é, -ás, -á, -emos, -éis, -án to the full infinitive. Many high-frequency verbs have irregular stems: poder→podr-, tener→tendr-, salir→saldr-, venir→vendr-, hacer→har-, decir→dir-, poner→pondr-, saber→sabr-, haber→habr-. Unlike ir a + infinitive (planned intentions), the futuro simple is used for predictions, promises and more distant future.",
            target: "El futuro simple expresa predicciones, promesas y planes de futuro. Se forma añadiendo las terminaciones -é, -ás, -á, -emos, -éis, -án al infinitivo completo. Muchos verbos frecuentes tienen raíces irregulares: poder→podr-, tener→tendr-, salir→saldr-, venir→vendr-, hacer→har-, decir→dir-, poner→pondr-, saber→sabr-, haber→habr-. A diferencia de ir a + infinitivo (intenciones planificadas), el futuro simple se usa para predicciones, promesas y el futuro más lejano."
        },
        examples: [
            { native: "Mañana lloverá en el norte.", translation: "Tomorrow it will rain in the north." },
            { native: "Te llamaré cuando llegue.", translation: "I will call you when I arrive." },
            { native: "¿Podrás venir a la reunión?", translation: "Will you be able to come to the meeting?" },
            { native: "El año que viene tendremos vacaciones más largas.", translation: "Next year we will have longer holidays." },
            { native: "Sé que lo harás bien.", translation: "I know you will do it well." }
        ],
        inlineVocab: [
            { word: "llover", translation: "to rain" },
            { word: "la reunión", translation: "meeting" },
            { word: "las vacaciones", translation: "holidays" },
            { word: "la predicción", translation: "prediction" }
        ]
    },
    {
        id: "es-g-a2-3",
        level: "A2",
        title: "Por vs. Para",
        explanation: {
            native: "Both por and para translate as 'for' in English but have distinct uses. POR: cause/reason (por eso), duration of time (por dos horas), exchange (lo compré por veinte euros), manner/means (por correo), movement through (pasar por). PARA: purpose/goal (para aprender), destination (salgo para Madrid), recipient (es para ti), deadline (para el lunes), opinion (para mí). A useful rule: por looks backwards (causes, reasons, exchange); para looks forward (goals, destinations, deadlines).",
            target: "Por y para se traducen a menudo como 'for' en inglés, pero tienen usos distintos. POR: causa/razón (por eso), duración (por dos horas), intercambio (lo compré por veinte euros), medio (por correo), movimiento a través de (pasar por). PARA: finalidad (para aprender), destino (salgo para Madrid), destinatario (es para ti), plazo (para el lunes), opinión (para mí). Una regla útil: por mira hacia atrás (causas, razones, intercambio); para mira hacia adelante (objetivos, destinos, plazos)."
        },
        examples: [
            { native: "Estudié español por dos años.", translation: "I studied Spanish for two years." },
            { native: "Este regalo es para ti.", translation: "This present is for you." },
            { native: "Salimos para Barcelona mañana.", translation: "We leave for Barcelona tomorrow." },
            { native: "Lo hice por amor.", translation: "I did it for love (out of love)." },
            { native: "Necesito el informe para el viernes.", translation: "I need the report by Friday." }
        ],
        inlineVocab: [
            { word: "el regalo", translation: "gift, present" },
            { word: "el informe", translation: "report" },
            { word: "el plazo", translation: "deadline" },
            { word: "el medio", translation: "means, medium" }
        ]
    },
    {
        id: "es-g-a2-4",
        level: "A2",
        title: "Combined Object Pronouns (me lo, se lo…)",
        explanation: {
            native: "When a direct object pronoun (lo, la, los, las) and an indirect object pronoun appear in the same sentence, the indirect pronoun always comes first: te lo doy (I give it to you), me la explica (she explains it to me). Crucially, le and les change to se when followed by lo/la/los/las: se lo digo (not *le lo digo). Both pronouns go before the conjugated verb, or attached together to infinitives and gerunds.",
            target: "Cuando un pronombre de objeto directo (lo, la, los, las) y uno de objeto indirecto aparecen juntos, el indirecto va primero: te lo doy, me la explica. Importante: le y les se convierten en se cuando van seguidos de lo/la/los/las: se lo digo (no *le lo digo). Los dos pronombres van antes del verbo conjugado, o unidos al final del infinitivo o gerundio."
        },
        examples: [
            { native: "¿Me lo puedes explicar?", translation: "Can you explain it to me?" },
            { native: "Se lo di ayer.", translation: "I gave it to him/her yesterday." },
            { native: "Te la mando ahora mismo.", translation: "I'll send it to you right now." },
            { native: "Quiero dártelo.", translation: "I want to give it to you." },
            { native: "Nos lo contaron todo.", translation: "They told us everything (about it)." }
        ],
        inlineVocab: [
            { word: "explicar", translation: "to explain" },
            { word: "mandar", translation: "to send" },
            { word: "contar", translation: "to tell, to recount" },
            { word: "el pronombre", translation: "pronoun" }
        ]
    },
    {
        id: "es-g-a2-5",
        level: "A2",
        title: "Indirect Object Pronouns",
        explanation: {
            native: "Indirect object pronouns indicate to whom or for whom an action is done: me (to me), te (to you), le (to him/her/you formal), nos (to us), os (to you all), les (to them/you all formal). They go before the conjugated verb or attached to an infinitive. A clarifying prepositional phrase (a mí, a ti, a ella…) can be added for emphasis or clarity.",
            target: "Los pronombres de objeto indirecto indican a quién o para quién se realiza la acción: me, te, le, nos, os, les. Se colocan antes del verbo conjugado o se unen al final del infinitivo. Se puede añadir una frase preposicional (a mí, a ti, a ella…) para enfatizar o aclarar.",
        },
        examples: [
            { native: "Te doy el libro.", translation: "I give you the book." },
            { native: "Le mandé un mensaje.", translation: "I sent him/her a message." },
            { native: "Nos explicaron la lección.", translation: "They explained the lesson to us." },
            { native: "¿Me puedes ayudar?", translation: "Can you help me?" },
            { native: "Les compré flores.", translation: "I bought them flowers." }
        ],
        inlineVocab: [
            { word: "mandar", translation: "to send" },
            { word: "regalar", translation: "to give as a gift" },
            { word: "prestar", translation: "to lend" },
            { word: "devolver", translation: "to return (something)" }
        ]
    },
    {
        id: "es-g-a2-6",
        level: "A2",
        title: "Comparatives and Superlatives",
        explanation: {
            native: "To compare things use más (more) or menos (less) + adjective + que (than). For equal comparisons: tan + adjective + como (as … as). Irregular comparatives: bueno → mejor, malo → peor, grande → mayor, pequeño → menor. Superlatives: el/la/los/las + más/menos + adjective (+ de). Use -ísimo/-ísima for absolute superlatives (very, extremely).",
            target: "Para comparar, se usa más o menos + adjetivo + que. Para expresar igualdad, se usa tan + adjetivo + como. Algunos comparativos son irregulares: bueno → mejor, malo → peor, grande → mayor, pequeño → menor. El superlativo relativo se forma con el/la/los/las + más/menos + adjetivo (+ de). El superlativo absoluto se expresa añadiendo el sufijo -ísimo/-ísima al adjetivo.",
        },
        examples: [
            { native: "Este hotel es más caro que el otro.", translation: "This hotel is more expensive than the other one." },
            { native: "Hablas tan bien como ella.", translation: "You speak as well as she does." },
            { native: "Es el restaurante más famoso de la ciudad.", translation: "It is the most famous restaurant in the city." },
            { native: "Mi hermano es menor que yo.", translation: "My brother is younger than me." },
            { native: "La película fue buenísima.", translation: "The film was absolutely great." }
        ],
        inlineVocab: [
            { word: "caro", translation: "expensive" },
            { word: "barato", translation: "cheap" },
            { word: "famoso", translation: "famous" },
            { word: "el superlativo", translation: "superlative" }
        ]
    },
    {
        id: "es-g-a2-7",
        level: "A2",
        title: "Conditional Simple (Condicional Simple)",
        explanation: {
            native: "The conditional expresses what would happen under certain conditions. It uses the same irregular stems as the future simple, but adds the endings -ía, -ías, -ía, -íamos, -íais, -ían. Three main uses: polite requests (¿Podría hablar con…?), hypothetical statements (me gustaría vivir en España), and reported speech / future in the past (dijo que vendría). The conditional is the Spanish equivalent of 'would + verb'.",
            target: "El condicional expresa lo que ocurriría bajo ciertas condiciones. Usa las mismas raíces irregulares que el futuro simple, pero añade las terminaciones -ía, -ías, -ía, -íamos, -íais, -ían. Tres usos principales: peticiones corteses (¿Podría hablar con…?), afirmaciones hipotéticas (me gustaría vivir en España) y estilo indirecto / futuro en el pasado (dijo que vendría). El condicional equivale al inglés 'would + verb'."
        },
        examples: [
            { native: "Me gustaría un café, por favor.", translation: "I would like a coffee, please." },
            { native: "¿Podría hablar más despacio?", translation: "Could you speak more slowly?" },
            { native: "En tu lugar, yo no lo haría.", translation: "In your place, I wouldn't do it." },
            { native: "Dijo que vendría a las ocho.", translation: "He said he would come at eight." },
            { native: "¿Qué harías con mucho dinero?", translation: "What would you do with a lot of money?" }
        ],
        inlineVocab: [
            { word: "despacio", translation: "slowly" },
            { word: "en tu lugar", translation: "in your place, if I were you" },
            { word: "hipotético", translation: "hypothetical" },
            { word: "cortés", translation: "polite, courteous" }
        ]
    },
    {
        id: "es-g-a2-8",
        level: "A2",
        title: "Imperfect Tense (Imperfecto)",
        explanation: {
            native: "The imperfecto describes habitual or repeated past actions, ongoing background states, and descriptions of how things 'used to be'. Regular -ar verbs add -aba, -abas, -aba, -ábamos, -abais, -aban. Regular -er/-ir verbs add -ía, -ías, -ía, -íamos, -íais, -ían. Only three verbs are irregular: ser (era...), ir (iba...), ver (veía...). Use imperfecto for background/states; use preterite for completed events.",
            target: "El imperfecto describe acciones pasadas habituales o repetidas, estados de fondo continuos y descripciones de cómo eran las cosas. Los verbos regulares en -ar toman -aba, -abas, -aba, -ábamos, -abais, -aban. Los verbos regulares en -er/-ir toman -ía, -ías, -ía, -íamos, -íais, -ían. Solo tres verbos son irregulares: ser (era...), ir (iba...), ver (veía...). Usa el imperfecto para el fondo/estados; usa el pretérito para eventos completados."
        },
        examples: [
            { native: "Cuando era niño, jugaba al fútbol todos los días.", translation: "When I was a child, I used to play football every day." },
            { native: "Vivíamos en Madrid cuando nació mi hermana.", translation: "We were living in Madrid when my sister was born." },
            { native: "Hacía mucho frío aquella mañana.", translation: "It was very cold that morning." },
            { native: "Antes, yo trabajaba en un banco.", translation: "I used to work in a bank." },
            { native: "¿Qué hacías cuando te llamé?", translation: "What were you doing when I called you?" }
        ],
        inlineVocab: [
            { word: "de niño", translation: "as a child" },
            { word: "antes", translation: "before, in the past" },
            { word: "siempre", translation: "always" },
            { word: "todos los días", translation: "every day" }
        ]
    },
    {
        id: "es-g-a2-9",
        level: "A2",
        title: "Present Subjunctive — Formation",
        explanation: {
            native: "The subjunctive is a mood (not a tense) used in dependent clauses after certain triggers. To form the present subjunctive, take the yo form of the present indicative, drop the -o, and add the 'opposite' vowel endings: -ar verbs take -e endings (hable, hables…); -er/-ir verbs take -a endings (coma, comas…). Irregular yo-forms carry into the subjunctive: tener→tenga, hacer→haga, venir→venga, poner→ponga. Fully irregular: ser (sea), estar (esté), ir (vaya), saber (sepa), haber (haya).",
            target: "El subjuntivo es un modo (no un tiempo) que se usa en oraciones subordinadas tras ciertos desencadenantes. Para formar el presente de subjuntivo, se toma la forma yo del presente de indicativo, se elimina la -o y se añaden las terminaciones de la 'vocal contraria': los verbos en -ar toman terminaciones en -e (hable, hables…); los verbos en -er/-ir toman terminaciones en -a (coma, comas…). Las formas irregulares de yo se trasladan al subjuntivo: tener→tenga, hacer→haga, venir→venga, poner→ponga. Totalmente irregulares: ser (sea), estar (esté), ir (vaya), saber (sepa), haber (haya)."
        },
        examples: [
            { native: "Espero que llegues a tiempo.", translation: "I hope you arrive on time." },
            { native: "Quiero que hables con ella.", translation: "I want you to speak with her." },
            { native: "Es importante que seamos honestos.", translation: "It is important that we are honest." },
            { native: "Necesito que me ayudes.", translation: "I need you to help me." },
            { native: "Ojalá venga pronto.", translation: "I hope he comes soon." }
        ],
        inlineVocab: [
            { word: "esperar", translation: "to hope, to wait" },
            { word: "ojalá", translation: "I hope, hopefully (triggers subjunctive)" },
            { word: "honesto", translation: "honest" },
            { word: "el subjuntivo", translation: "subjunctive" }
        ]
    },
    {
        id: "es-g-a2-10",
        level: "A2",
        title: "Preterite vs. Imperfect — Contrast",
        explanation: {
            native: "Use PRETERITE for: completed events (llegué a las ocho), a sequence of actions (entré, vi, conquisté), interrupting actions (llamaste cuando dormía). Use IMPERFECT for: background description (hacía sol, había mucha gente), habits/routines in the past (siempre comía allí), ongoing states (era tarde, tenía miedo). Both tenses often appear together: imperfect sets the scene while preterite narrates what happened. Key signal words — preterite: ayer, de repente, entonces, finalmente; imperfect: siempre, todos los días, mientras, cuando (background).",
            target: "Usa el PRETÉRITO para: eventos completados (llegué a las ocho), una secuencia de acciones (entré, vi, conquisté), acciones que interrumpen (llamaste cuando dormía). Usa el IMPERFECTO para: descripción de fondo (hacía sol, había mucha gente), hábitos o rutinas pasadas (siempre comía allí), estados continuos (era tarde, tenía miedo). Ambos tiempos aparecen juntos frecuentemente: el imperfecto establece el escenario mientras el pretérito narra lo que ocurrió. Palabras clave — pretérito: ayer, de repente, entonces, finalmente; imperfecto: siempre, todos los días, mientras, cuando (fondo)."
        },
        examples: [
            { native: "Llovía cuando salí de casa.", translation: "It was raining when I left the house." },
            { native: "De repente, el teléfono sonó.", translation: "Suddenly, the phone rang." },
            { native: "Mientras ella leía, él cocinaba.", translation: "While she was reading, he was cooking." },
            { native: "Vivía en Barcelona cuando conocí a mi esposa.", translation: "I was living in Barcelona when I met my wife." },
            { native: "Entré, saludé y me senté.", translation: "I came in, said hello and sat down." }
        ],
        inlineVocab: [
            { word: "de repente", translation: "suddenly" },
            { word: "mientras", translation: "while" },
            { word: "entonces", translation: "then, at that point" },
            { word: "el escenario", translation: "scene, setting" }
        ]
    },
    {
        id: "es-g-a2-11",
        level: "A2",
        title: "Relative Clauses: que and quien",
        explanation: {
            native: "Relative clauses add information about a noun. Que is the most common relative pronoun and is used for both people and things. Quien(es) is used only for people, typically after a preposition (la persona con quien hablé). Unlike English, que cannot be omitted in Spanish. No comma before que when the clause is essential to the meaning (defining clause).",
            target: "Las oraciones de relativo añaden información sobre un nombre. Que es el pronombre relativo más común y se usa tanto para personas como para cosas. Quien(es) se usa solo para personas, generalmente tras una preposición (la persona con quien hablé). A diferencia del inglés, que no puede omitirse en español. No se pone coma antes de que cuando la oración es esencial para el significado (oración especificativa)."
        },
        examples: [
            { native: "El libro que compré es muy interesante.", translation: "The book (that) I bought is very interesting." },
            { native: "La chica que vive al lado es simpática.", translation: "The girl who lives next door is nice." },
            { native: "El amigo con quien viajé se llama Carlos.", translation: "The friend with whom I travelled is called Carlos." },
            { native: "¿Conoces al médico que me atendió?", translation: "Do you know the doctor who treated me?" },
            { native: "Eso es todo lo que sé.", translation: "That's all (that) I know." }
        ],
        inlineVocab: [
            { word: "el pronombre relativo", translation: "relative pronoun" },
            { word: "atender", translation: "to see, to attend to (a patient)" },
            { word: "al lado", translation: "next door, nearby" },
            { word: "simpático", translation: "nice, friendly" }
        ]
    },
    {
        id: "es-g-a2-12",
        level: "A2",
        title: "Preterite — Irregular Verbs",
        explanation: {
            native: "Many high-frequency verbs have completely irregular preterite forms that must be memorised. Key groups: SER/IR share the same forms — fui, fuiste, fue, fuimos, fuisteis, fueron. HACER — hice, hiciste, hizo, hicimos, hicisteis, hicieron. TENER — tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron. ESTAR — estuve, estuviste, estuvo… PODER — pude, pudiste, pudo… QUERER — quise, quisiste, quiso… VENIR — vine, viniste, vino… SABER — supe, supiste, supo… DAR — di, diste, dio, dimos, disteis, dieron (no accents). Note: irregular preterite forms have no written accent marks.",
            target: "Muchos verbos frecuentes tienen formas irregulares en el pretérito que hay que memorizar. Grupos clave: SER/IR comparten las mismas formas — fui, fuiste, fue, fuimos, fuisteis, fueron. HACER — hice, hiciste, hizo, hicimos, hicisteis, hicieron. TENER — tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron. ESTAR — estuve, estuviste, estuvo… PODER — pude, pudiste, pudo… QUERER — quise, quisiste, quiso… VENIR — vine, viniste, vino… SABER — supe, supiste, supo… DAR — di, diste, dio, dimos, disteis, dieron (sin tilde). Nota: las formas irregulares del pretérito no llevan tilde."
        },
        examples: [
            { native: "Fui al médico ayer.", translation: "I went to the doctor yesterday." },
            { native: "¿Qué hiciste el fin de semana?", translation: "What did you do at the weekend?" },
            { native: "No pude dormir anoche.", translation: "I couldn't sleep last night." },
            { native: "Vine tan pronto como supe la noticia.", translation: "I came as soon as I found out the news." },
            { native: "Tuvimos que cancelar el viaje.", translation: "We had to cancel the trip." }
        ],
        inlineVocab: [
            { word: "la noticia", translation: "news item, piece of news" },
            { word: "cancelar", translation: "to cancel" },
            { word: "el viaje", translation: "trip, journey" },
            { word: "tan pronto como", translation: "as soon as" }
        ]
    },
    {
        id: "es-g-a2-13",
        level: "A2",
        title: "Preterite — Stem-Changing Verbs",
        explanation: {
            native: "In the preterite, -ar and -er verbs do NOT stem-change (unlike in the present). However, -ir stem-changing verbs DO change in the third-person forms (él/ella and ellos/ellas) only. The patterns are: e→i (pedir→pidió, pedieron; servir→sirvió; sentir→sintió; preferir→prefirió; seguir→siguió; repetir→repitió) and o→u (dormir→durmió, durmieron; morir→murió). These are sometimes called 'boot' changes limited to the third person.",
            target: "En el pretérito, los verbos en -ar y -er NO tienen cambio vocálico (a diferencia del presente). Sin embargo, los verbos en -ir con cambio vocálico SÍ cambian, pero solo en las terceras personas (él/ella y ellos/ellas). Los patrones son: e→i (pedir→pidió; servir→sirvió; sentir→sintió; preferir→prefirió; seguir→siguió; repetir→repitió) y o→u (dormir→durmió, durmieron; morir→murió). Estos cambios se limitan a la tercera persona."
        },
        examples: [
            { native: "El bebé durmió toda la noche.", translation: "The baby slept all night." },
            { native: "¿Qué pidieron de postre?", translation: "What did they order for dessert?" },
            { native: "El camarero sirvió el vino.", translation: "The waiter served the wine." },
            { native: "Prefirió quedarse en casa.", translation: "He/She preferred to stay at home." },
            { native: "Siguió estudiando hasta las dos.", translation: "He/She kept studying until two." }
        ],
        inlineVocab: [
            { word: "el postre", translation: "dessert" },
            { word: "el camarero", translation: "waiter" },
            { word: "quedarse", translation: "to stay, to remain" },
            { word: "seguir + gerund", translation: "to keep doing (something)" }
        ]
    },
    {
        id: "es-g-a2-14",
        level: "A2",
        title: "Subjunctive with Wish & Desire",
        explanation: {
            native: "When the main clause expresses wish, desire, hope or recommendation, and there are two different subjects, the subordinate clause uses the subjunctive. Key triggers: querer que, esperar que, desear que, necesitar que, recomendar que, pedir que, preferir que, ojalá (que). Structure: subject 1 + trigger verb + que + subject 2 + subjunctive verb. When there is only one subject, use infinitive instead: quiero ir (not *quiero que vaya).",
            target: "Cuando la oración principal expresa deseo, esperanza o recomendación, y hay dos sujetos distintos, la oración subordinada usa el subjuntivo. Desencadenantes clave: querer que, esperar que, desear que, necesitar que, recomendar que, pedir que, preferir que, ojalá (que). Estructura: sujeto 1 + verbo desencadenante + que + sujeto 2 + subjuntivo. Cuando solo hay un sujeto, se usa el infinitivo: quiero ir (no *quiero que vaya)."
        },
        examples: [
            { native: "Quiero que vengas a la fiesta.", translation: "I want you to come to the party." },
            { native: "Espero que todo salga bien.", translation: "I hope everything goes well." },
            { native: "El médico recomienda que descanses.", translation: "The doctor recommends (that) you rest." },
            { native: "Ojalá haga buen tiempo mañana.", translation: "I hope the weather is nice tomorrow." },
            { native: "Prefieren que no usemos el móvil en clase.", translation: "They prefer us not to use our phones in class." }
        ],
        inlineVocab: [
            { word: "desear", translation: "to wish, to desire" },
            { word: "recomendar", translation: "to recommend" },
            { word: "descansar", translation: "to rest" },
            { word: "salir bien", translation: "to go well, to turn out well" }
        ]
    },
    {
        id: "es-g-a2-15",
        level: "A2",
        title: "Passive Se and Impersonal Se",
        explanation: {
            native: "Spanish uses se constructions where English uses the passive or impersonal 'one / you / they / people'. PASSIVE SE (se pasiva): se + 3rd person verb, agrees with the grammatical subject — se vende una casa (a house is for sale), se venden pisos (flats are for sale). IMPERSONAL SE: se + 3rd person singular only, no noun subject — se come bien aquí (you eat well here / the food is good here), se trabaja mucho (people work a lot). Key difference: passive se has a noun that controls verb number; impersonal se is always singular.",
            target: "El español usa construcciones con se donde el inglés usa la voz pasiva o el impersonal 'se'. SE PASIVA: se + verbo en 3ª persona, que concuerda con el sujeto gramatical — se vende una casa, se venden pisos. SE IMPERSONAL: se + verbo en 3ª persona del singular únicamente, sin sujeto nominal — se come bien aquí, se trabaja mucho. Diferencia clave: la se pasiva tiene un sustantivo que determina el número del verbo; la se impersonal es siempre singular."
        },
        examples: [
            { native: "Se alquilan habitaciones.", translation: "Rooms for rent. (Rooms are rented.)" },
            { native: "Se habla español aquí.", translation: "Spanish is spoken here." },
            { native: "En España se cena tarde.", translation: "In Spain, dinner is eaten late." },
            { native: "Se prohíbe fumar.", translation: "Smoking is prohibited." },
            { native: "Se vende piso en el centro.", translation: "Flat for sale in the city centre." }
        ],
        inlineVocab: [
            { word: "alquilar", translation: "to rent" },
            { word: "prohibir", translation: "to prohibit, to ban" },
            { word: "la habitación", translation: "room" },
            { word: "el piso", translation: "flat, apartment (Spain)" }
        ]
    },
    {
        id: "es-g-a2-16",
        level: "A2",
        title: "Verbs with Prepositions",
        explanation: {
            native: "Many Spanish verbs require a specific preposition before a noun or infinitive. These must be learned as collocations. Common patterns — with DE: acabar de (to have just), dejar de (to stop doing), depender de, olvidarse de, acordarse de, tener ganas de, tratar de. With EN: pensar en, tardar en, consistir en. With CON: soñar con, casarse con, contar con, quedar con. With A: empezar a, volver a, aprender a, ir a, ayudar a, invitar a. With POR: preocuparse por, interesarse por.",
            target: "Muchos verbos en español requieren una preposición específica antes de un sustantivo o infinitivo. Hay que aprenderlos como colocaciones. Patrones frecuentes — con DE: acabar de (recién + infinitivo), dejar de, depender de, olvidarse de, acordarse de, tener ganas de, tratar de. Con EN: pensar en, tardar en, consistir en. Con CON: soñar con, casarse con, contar con, quedar con. Con A: empezar a, volver a, aprender a, ir a, ayudar a, invitar a. Con POR: preocuparse por, interesarse por."
        },
        examples: [
            { native: "Acabo de llegar.", translation: "I have just arrived." },
            { native: "Dejó de fumar el año pasado.", translation: "She stopped smoking last year." },
            { native: "Siempre sueño con las vacaciones.", translation: "I always dream about holidays." },
            { native: "Tardo media hora en llegar al trabajo.", translation: "It takes me half an hour to get to work." },
            { native: "Me olvidé de llamarle.", translation: "I forgot to call him." }
        ],
        inlineVocab: [
            { word: "acabar de", translation: "to have just (done something)" },
            { word: "dejar de", translation: "to stop doing (something)" },
            { word: "olvidarse de", translation: "to forget to" },
            { word: "tardar en", translation: "to take (time) to" }
        ]
    },
    {
        id: "es-g-a2-17",
        level: "A2",
        title: "Real Conditionals (Si + Present + Future)",
        explanation: {
            native: "Type 1 conditionals (real/likely conditions) use: si + present indicative + future (or imperative). The si clause states the condition; the main clause states the result. The si clause can come first or second. Never use the future tense directly after si in Type 1. Common patterns: Si llueve, no saldremos. Si tienes tiempo, llámame. Si comes bien, estarás sano. These are called 'real' because the condition is seen as possible or likely.",
            target: "Las condicionales reales (condiciones posibles o probables) siguen el esquema: si + presente de indicativo + futuro (o imperativo). La oración con si expresa la condición; la oración principal expresa el resultado. La oración con si puede ir primero o segundo. Nunca se usa el futuro directamente después de si en las condicionales de tipo 1. Estructuras frecuentes: Si llueve, no saldremos. Si tienes tiempo, llámame. Si comes bien, estarás sano."
        },
        examples: [
            { native: "Si estudias, aprobarás el examen.", translation: "If you study, you will pass the exam." },
            { native: "Si hace buen tiempo, iremos a la playa.", translation: "If the weather is nice, we'll go to the beach." },
            { native: "Si necesitas algo, llámame.", translation: "If you need anything, call me." },
            { native: "No vendrán si no los invitamos.", translation: "They won't come if we don't invite them." },
            { native: "Si tengo tiempo libre, leo o escucho música.", translation: "If I have free time, I read or listen to music." }
        ],
        inlineVocab: [
            { word: "aprobar", translation: "to pass (an exam)" },
            { word: "la condición", translation: "condition" },
            { word: "el tiempo libre", translation: "free time" },
            { word: "la playa", translation: "beach" }
        ]
    },
    {
        id: "es-g-a2-18",
        level: "A2",
        title: "Present Perfect (Pretérito Perfecto Compuesto)",
        explanation: {
            native: "The present perfect is formed with haber (present) + past participle. Present of haber: he, has, ha, hemos, habéis, han. Regular past participles: -ar → -ado (hablar→hablado), -er/-ir → -ido (comer→comido, vivir→vivido). Common irregulars: hacer→hecho, decir→dicho, ver→visto, escribir→escrito, abrir→abierto, volver→vuelto, poner→puesto, romper→roto, morir→muerto. In Spain, the present perfect is used for recent/experiential past (hoy, esta semana, alguna vez); in Latin America, the preterite is often preferred for both.",
            target: "El pretérito perfecto compuesto se forma con el presente de haber + participio pasado. Presente de haber: he, has, ha, hemos, habéis, han. Participios regulares: -ar → -ado (hablar→hablado), -er/-ir → -ido (comer→comido, vivir→vivido). Irregulares frecuentes: hacer→hecho, decir→dicho, ver→visto, escribir→escrito, abrir→abierto, volver→vuelto, poner→puesto, romper→roto, morir→muerto. En España se usa para el pasado reciente/experiencial (hoy, esta semana, alguna vez); en Latinoamérica suele preferirse el pretérito indefinido."
        },
        examples: [
            { native: "¿Has comido alguna vez sushi?", translation: "Have you ever eaten sushi?" },
            { native: "Hoy he trabajado mucho.", translation: "I have worked a lot today." },
            { native: "Nunca he estado en Argentina.", translation: "I have never been to Argentina." },
            { native: "Han vuelto de las vacaciones.", translation: "They have come back from holiday." },
            { native: "¿Ya has hecho los deberes?", translation: "Have you already done your homework?" }
        ],
        inlineVocab: [
            { word: "alguna vez", translation: "ever, at some point" },
            { word: "nunca", translation: "never" },
            { word: "ya", translation: "already" },
            { word: "el participio", translation: "past participle" }
        ]
    },
    {
        id: "es-g-a2-19",
        level: "A2",
        title: "Discourse Connectors",
        explanation: {
            native: "Discourse connectors link ideas and give speech and writing a logical flow. CONTRAST: pero (but), sin embargo (however), aunque (although — + indicative for facts, + subjunctive for hypotheticals). CAUSE: porque (because), como (since/as — clause-initial), ya que (since/given that). PURPOSE: para + infinitive, para que + subjunctive (different subjects). CONSEQUENCE: así que (so), por lo tanto (therefore), por eso (that's why). ADDITION: además (moreover, also), también (also), incluso (even). Mastering these moves learners from simple sentences to fluent discourse.",
            target: "Los conectores del discurso enlazan ideas y dan fluidez lógica al habla y la escritura. CONTRASTE: pero, sin embargo, aunque (+ indicativo para hechos, + subjuntivo para hipótesis). CAUSA: porque, como (en posición inicial), ya que. FINALIDAD: para + infinitivo, para que + subjuntivo (sujetos distintos). CONSECUENCIA: así que, por lo tanto, por eso. ADICIÓN: además, también, incluso. Dominar estos conectores lleva al aprendiz de las frases simples al discurso fluido."
        },
        examples: [
            { native: "Estudié mucho; sin embargo, suspendí el examen.", translation: "I studied a lot; however, I failed the exam." },
            { native: "Como era tarde, nos fuimos.", translation: "Since it was late, we left." },
            { native: "Compré el regalo para que ella estuviera contenta.", translation: "I bought the gift so that she would be happy." },
            { native: "No tenía dinero, así que no pude ir.", translation: "I had no money, so I couldn't go." },
            { native: "Además, habla tres idiomas.", translation: "Moreover, she speaks three languages." }
        ],
        inlineVocab: [
            { word: "sin embargo", translation: "however, nevertheless" },
            { word: "aunque", translation: "although, even though" },
            { word: "ya que", translation: "since, given that" },
            { word: "por lo tanto", translation: "therefore" }
        ]
    },
    {
        id: "es-g-a2-20",
        level: "A2",
        title: "Commands — Extended (Negative Tú & Usted/Ustedes)",
        explanation: {
            native: "At A1 you learned affirmative tú commands. At A2: NEGATIVE TÚ commands use the present subjunctive: no hables, no comas, no vayas. USTED commands (formal singular) use the subjunctive: hable, coma, venga — same for negative: no hable. USTEDES commands (formal plural, or all plural in Latin America) add -n: hablen, coman, vengan; no hablen. OBJECT PRONOUNS: attach to affirmative commands (dímelo, cómpraselo) but go before negative commands (no me lo digas). Irregular affirmative tú forms: di, haz, ve, pon, sal, sé, ten, ven.",
            target: "En el nivel A1 aprendiste los imperativos afirmativos de tú. En el A2: los imperativos NEGATIVOS de TÚ usan el presente de subjuntivo: no hables, no comas, no vayas. Los imperativos de USTED (formal singular) también usan el subjuntivo: hable, coma, venga; negativo: no hable. Los imperativos de USTEDES añaden -n: hablen, coman, vengan; negativo: no hablen. PRONOMBRES: se unen al imperativo afirmativo (dímelo, cómpraselo) pero van antes del negativo (no me lo digas). Irregulares afirmativos de tú: di, haz, ve, pon, sal, sé, ten, ven."
        },
        examples: [
            { native: "No hables tan rápido, por favor.", translation: "Don't speak so fast, please." },
            { native: "Pase y siéntese, señor García.", translation: "Come in and sit down, Mr García." },
            { native: "No me lo digas — ya lo sé.", translation: "Don't tell me — I already know." },
            { native: "Hablen más despacio, por favor.", translation: "Please speak more slowly. (ustedes)" },
            { native: "Dime la verdad.", translation: "Tell me the truth." }
        ],
        inlineVocab: [
            { word: "el imperativo", translation: "imperative (command form)" },
            { word: "rápido", translation: "fast, quickly" },
            { word: "la verdad", translation: "truth" },
            { word: "despacio", translation: "slowly" }
        ]
    },
    {
        id: "es-g-a2-21",
        level: "A2",
        title: "Ser vs. Estar — Extended Uses",
        explanation: {
            native: "Beyond the A1 basics, ser and estar have important extended uses. SER: used for events (la fiesta es en mi casa — not está), passive with past participle for processes (fue construido en 1900), mathematical/definitional truths (el agua es H₂O). ESTAR: resultant states with past participle (la puerta está abierta — result), geographic location of events (¿dónde está la reunión?). ADJECTIVES THAT CHANGE MEANING: ser aburrido (boring by nature) vs. estar aburrido (feeling bored); ser malo (bad/evil) vs. estar malo (sick); ser listo (clever) vs. estar listo (ready); ser seguro (safe/secure) vs. estar seguro (certain/sure); ser rico (wealthy) vs. estar rico (taste delicious).",
            target: "Más allá de los fundamentos del A1, ser y estar tienen usos extendidos importantes. SER: se usa para eventos (la fiesta es en mi casa), voz pasiva con participio para procesos (fue construido en 1900), verdades matemáticas/definitivas (el agua es H₂O). ESTAR: estados resultantes con participio (la puerta está abierta — resultado), ubicación geográfica de eventos (¿dónde está la reunión?). ADJETIVOS QUE CAMBIAN DE SIGNIFICADO: ser aburrido (aburrido por naturaleza) vs. estar aburrido (sentirse aburrido); ser malo (malo/malvado) vs. estar malo (enfermo); ser listo (listo/inteligente) vs. estar listo (preparado); ser seguro (seguro) vs. estar seguro (cierto); ser rico (adinerado) vs. estar rico (estar delicioso)."
        },
        examples: [
            { native: "La reunión es a las diez.", translation: "The meeting is at ten. (scheduled)" },
            { native: "El museo está cerrado hoy.", translation: "The museum is closed today. (current state)" },
            { native: "Estoy listo — ¿vamos?", translation: "I'm ready — shall we go?" },
            { native: "Este pastel está riquísimo.", translation: "This cake is absolutely delicious." },
            { native: "El teatro fue construido en 1850.", translation: "The theatre was built in 1850." }
        ],
        inlineVocab: [
            { word: "cerrado", translation: "closed" },
            { word: "abierto", translation: "open" },
            { word: "listo", translation: "ready (estar) / clever (ser)" },
            { word: "el pastel", translation: "cake" }
        ]
    },
    {
        id: "es-g-a2-22",
        level: "A2",
        title: "Subjunctive with Emotion & Doubt",
        explanation: {
            native: "The subjunctive is also triggered by expressions of emotion and doubt/denial. EMOTION triggers (two subjects required): alegrarse de que (to be glad that), sorprender que (to surprise that), tener miedo de que (to be afraid that), sentir que (to be sorry that), molestar que (to bother that), parecer bien/mal que (to seem good/bad that). DOUBT/DENIAL: no creer que, dudar que, no estar seguro de que (use subjunctive). CONTRAST: creer que + indicative (certainty) vs. no creer que + subjunctive (doubt). With impersonal expressions: es importante que, es posible que, es necesario que — all take subjunctive.",
            target: "El subjuntivo también se activa con expresiones de emoción y de duda/negación. Desencadenantes de EMOCIÓN (con dos sujetos): alegrarse de que, sorprender que, tener miedo de que, sentir que, molestar que, parecer bien/mal que. DUDA/NEGACIÓN: no creer que, dudar que, no estar seguro de que (usan subjuntivo). CONTRASTE: creer que + indicativo (certeza) vs. no creer que + subjuntivo (duda). Con expresiones impersonales: es importante que, es posible que, es necesario que — todas llevan subjuntivo."
        },
        examples: [
            { native: "Me alegra que estés aquí.", translation: "I'm glad (that) you're here." },
            { native: "Es una lástima que no pueda venir.", translation: "It's a shame (that) she can't come." },
            { native: "No creo que sea una buena idea.", translation: "I don't think it's a good idea." },
            { native: "Me sorprende que no lo sepas.", translation: "I'm surprised (that) you don't know." },
            { native: "Es posible que llueva mañana.", translation: "It's possible that it will rain tomorrow." }
        ],
        inlineVocab: [
            { word: "alegrarse de que", translation: "to be glad that" },
            { word: "es una lástima", translation: "it's a shame / pity" },
            { word: "sorprender", translation: "to surprise" },
            { word: "dudar", translation: "to doubt" }
        ]
    }
]

// Alias for backward compatibility with index.ts assembler
export const a2Grammar = esGrammarA2
