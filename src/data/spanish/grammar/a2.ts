// data/spanish/grammar/a2.ts
import { GrammarLesson } from "../../../types"

// A2 grammar — 7 lessons.
// "Ir a + infinitive" has moved to A1 (grammar/a1.ts, lesson es-g-a1-12) as a bridge unit.

export const esGrammarA2: GrammarLesson[] = [
    {
        id: "es-g-a2-1",
        level: "A2",
        title: "Preterite Tense (Pretérito Indefinido)",
        explanation: {
            native: "The preterite expresses completed past actions at a specific moment or time. Regular -ar verbs take: -é, -aste, -ó, -amos, -asteis, -aron. Regular -er/-ir verbs take: -í, -iste, -ió, -imos, -isteis, -ieron. Many common verbs are irregular (ir/ser share forms: fui, fuiste, fue…).",
            target: "El pretérito indefinido expresa acciones pasadas que se completaron en un momento concreto. Los verbos regulares en -ar toman las terminaciones: -é, -aste, -ó, -amos, -asteis, -aron. Los verbos en -er/-ir toman: -í, -iste, -ió, -imos, -isteis, -ieron. Muchos verbos frecuentes son irregulares: por ejemplo, ir y ser comparten las mismas formas (fui, fuiste, fue…).",
        },
        examples: [
            { native: "Ayer comí pizza.", translation: "Yesterday I ate pizza." },
            { native: "Ella habló con el profesor.", translation: "She spoke with the teacher." },
            { native: "Fuimos al cine el sábado.", translation: "We went to the cinema on Saturday." },
            { native: "¿A qué hora llegaste?", translation: "What time did you arrive?" },
            { native: "Los niños durmieron bien.", translation: "The children slept well." }
        ]
    },
    {
        id: "es-g-a2-2",
        level: "A2",
        title: "Reflexive Verbs",
        explanation: {
            native: "Reflexive verbs indicate the subject acts on itself. They are identified by the reflexive pronoun '-se' on the infinitive. Use me, te, se, nos, os, se before the conjugated verb. Many daily routine verbs are reflexive.",
            target: "Los verbos reflexivos indican que el sujeto realiza la acción sobre sí mismo. Se reconocen por el pronombre reflexivo '-se' unido al infinitivo. Los pronombres reflexivos son: me, te, se, nos, os, se, y se colocan antes del verbo conjugado. Muchos verbos relacionados con la rutina diaria son reflexivos.",
        },
        examples: [
            { native: "Me llamo Carlos.", translation: "My name is Carlos. (I call myself Carlos.)" },
            { native: "Me levanto a las siete.", translation: "I get up at seven." },
            { native: "Ella se viste rápido.", translation: "She gets dressed quickly." },
            { native: "Nos acostamos tarde.", translation: "We go to bed late." },
            { native: "¿A qué hora te duchas?", translation: "What time do you shower?" }
        ]
    },
    {
        id: "es-g-a2-3",
        level: "A2",
        title: "Gustar and Similar Verbs",
        explanation: {
            native: "Gustar means 'to be pleasing to'. In Spanish, the thing liked is the grammatical subject, not the person. Use indirect object pronouns: me, te, le, nos, os, les. Use gusta with singular nouns/infinitives and gustan with plural nouns. Encantar, molestar, and interesar work the same way.",
            target: "El verbo gustar significa literalmente 'agradar'. En español, la cosa que gusta es el sujeto gramatical, no la persona. Se usan los pronombres de objeto indirecto: me, te, le, nos, os, les. Se usa gusta con sustantivos singulares o infinitivos, y gustan con sustantivos en plural. Los verbos encantar, molestar e interesar funcionan de la misma manera.",
        },
        examples: [
            { native: "Me gusta el café.", translation: "I like coffee. (Coffee is pleasing to me.)" },
            { native: "Te gustan los libros.", translation: "You like books." },
            { native: "Le encanta bailar.", translation: "He / She loves to dance." },
            { native: "Nos gusta mucho viajar.", translation: "We really like travelling." },
            { native: "¿Te molesta el ruido?", translation: "Does the noise bother you?" }
        ]
    },
    {
        id: "es-g-a2-4",
        level: "A2",
        title: "Direct Object Pronouns",
        explanation: {
            native: "Direct object pronouns replace the noun receiving the action: me, te, lo/la, nos, os, los/las. They go before the conjugated verb or attached to an infinitive or gerund. Lo and la agree in gender with the noun they replace.",
            target: "Los pronombres de objeto directo sustituyen al sustantivo que recibe la acción directamente: me, te, lo/la, nos, os, los/las. Se colocan antes del verbo conjugado, o se unen al final del infinitivo o del gerundio. Lo y la concuerdan en género con el sustantivo al que sustituyen.",
        },
        examples: [
            { native: "Lo veo todos los días.", translation: "I see him / it every day." },
            { native: "¿La llamas tú?", translation: "Are you calling her / it?" },
            { native: "Quiero verla.", translation: "I want to see her / it." },
            { native: "Nos ayudan mucho.", translation: "They help us a lot." },
            { native: "¿Dónde los compraste?", translation: "Where did you buy them?" }
        ]
    },
    {
        id: "es-g-a2-5",
        level: "A2",
        title: "Indirect Object Pronouns",
        explanation: {
            native: "Indirect object pronouns indicate to whom or for whom an action is done: me (to me), te (to you), le (to him/her/you formal), nos (to us), os (to you all), les (to them/you all formal). They go before the conjugated verb or attached to an infinitive. When both direct and indirect pronouns appear together, le/les changes to se before lo/la/los/las.",
            target: "Los pronombres de objeto indirecto indican a quién o para quién se realiza la acción: me, te, le, nos, os, les. Se colocan antes del verbo conjugado o se unen al final del infinitivo. Cuando aparecen juntos un pronombre de objeto directo y uno indirecto, le/les se convierte en se delante de lo/la/los/las.",
        },
        examples: [
            { native: "Te doy el libro.", translation: "I give you the book." },
            { native: "Le mandé un mensaje.", translation: "I sent him/her a message." },
            { native: "Nos explicaron la lección.", translation: "They explained the lesson to us." },
            { native: "¿Me puedes ayudar?", translation: "Can you help me?" },
            { native: "Les compré flores.", translation: "I bought them flowers." }
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
        ]
    },
    {
        id: "es-g-a2-7",
        level: "A2",
        title: "Demonstrative Adjectives",
        explanation: {
            native: "Demonstrative adjectives point out specific nouns. ESTE/ESTA/ESTOS/ESTAS (this/these) — near the speaker. ESE/ESA/ESOS/ESAS (that/those) — near the listener. AQUEL/AQUELLA/AQUELLOS/AQUELLAS (that/those over there) — far from both. They must agree in gender and number with the noun they modify.",
            target: "Los adjetivos demostrativos señalan sustantivos concretos. ESTE/ESTA/ESTOS/ESTAS indican cercanía al hablante. ESE/ESA/ESOS/ESAS indican cercanía al oyente. AQUEL/AQUELLA/AQUELLOS/AQUELLAS indican distancia de ambos. Todos los demostrativos concuerdan en género y número con el sustantivo al que acompañan.",
        },
        examples: [
            { native: "Este libro es interesante.", translation: "This book is interesting." },
            { native: "Esa chaqueta es muy bonita.", translation: "That jacket is very pretty." },
            { native: "Estos zapatos son cómodos.", translation: "These shoes are comfortable." },
            { native: "Aquella montaña es muy alta.", translation: "That mountain over there is very tall." },
            { native: "¿Cuánto cuesta ese bolso?", translation: "How much does that bag cost?" }
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
            { native: "¿Qué hacías cuando te llamé?", translation: "What were you doing when I called you?" },
        ]
    },
    {
        id: "es-g-a2-9",
        level: "A2",
        title: "Modal Verbs: poder, querer, deber",
        explanation: {
            native: "The three core modal verbs are: poder (to be able to / can), querer (to want), deber (must / should / to have to). All three are stem-changing in the present tense and are followed by an infinitive. Poder: puedo, puedes, puede, podemos, podéis, pueden. Querer: quiero, quieres, quiere, queremos, queréis, quieren. Deber: debo, debes, debe, debemos, debéis, deben (regular).",
            target: "Los tres verbos modales principales son: poder (can/ser capaz de), querer (want/querer), deber (must/tener que). Los tres son verbos de cambio radical en el presente y van seguidos de infinitivo. Poder: puedo, puedes, puede, podemos, podéis, pueden. Querer: quiero, quieres, quiere, queremos, queréis, quieren. Deber: debo, debes, debe, debemos, debéis, deben (regular)."
        },
        examples: [
            { native: "¿Puedes repetir eso, por favor?", translation: "Can you repeat that, please?" },
            { native: "Quiero aprender español bien.", translation: "I want to learn Spanish well." },
            { native: "Debemos llegar antes de las ocho.", translation: "We must arrive before eight." },
            { native: "No puedo dormir.", translation: "I can't sleep." },
            { native: "¿Qué quieres comer esta noche?", translation: "What do you want to eat tonight?" },
        ]
    },
    {
        id: "es-g-a2-10",
        level: "A2",
        title: "Near Future: ir + a + Infinitive",
        explanation: {
            native: "The most common way to express future plans and intentions in Spanish is the perifrase ir + a + infinitive — equivalent to 'going to' in English. Use the present tense of ir followed by a and then the infinitive. It is used more than the simple future tense in everyday speech. To make it negative, place no before the conjugated form of ir.",
            target: "La forma más común de expresar planes e intenciones de futuro en español es la perífrasis ir + a + infinitivo — equivalente al 'going to' inglés. Se usa el presente de ir seguido de a y el infinitivo. Es más frecuente que el futuro simple en el habla cotidiana. Para negarlo, se coloca no antes de la forma conjugada de ir."
        },
        examples: [
            { native: "Voy a estudiar esta tarde.", translation: "I'm going to study this afternoon." },
            { native: "¿Vas a venir a la fiesta?", translation: "Are you going to come to the party?" },
            { native: "No vamos a llegar a tiempo.", translation: "We're not going to arrive on time." },
            { native: "Ella va a empezar un nuevo trabajo la semana que viene.", translation: "She's going to start a new job next week." },
            { native: "¿Qué van a hacer este fin de semana?", translation: "What are they going to do this weekend?" },
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
            { native: "Eso es todo lo que sé.", translation: "That's all (that) I know." },
        ]
    },
]

// Alias for backward compatibility with index.ts assembler
export const a2Grammar = esGrammarA2
