import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "it-g-a2-1",
        level: "A2",
        title: "Passato Prossimo",
        explanation: "The passato prossimo is the main past tense used in conversation. It expresses completed past actions. Formation: present tense of avere or essere + past participle. Most verbs use avere. Verbs of motion, change of state, and all reflexive verbs use essere, and the past participle must agree with the subject in gender and number. Regular past participles: -are → -ato (parlato), -ere → -uto (venduto), -ire → -ito (dormito). Many common verbs have irregular participles: fatto, detto, messo, aperto, scritto, letto, visto, stato.",
        examples: [
            { native: "Ho mangiato la pizza.", translation: "I ate the pizza." },
            { native: "Siamo andati al cinema.", translation: "We went to the cinema." },
            { native: "Lei ha studiato tutto il giorno.", translation: "She studied all day." },
            { native: "Sono arrivata in ritardo.", translation: "I (fem.) arrived late." }
        ]
    },
    {
        id: "it-g-a2-2",
        level: "A2",
        title: "Imperfetto (Imperfect Tense)",
        explanation: "The imperfetto describes habitual or ongoing past actions, past states, background descriptions, and what was happening when something else occurred. It contrasts with the passato prossimo, which marks completed events. Formation: remove the infinitive ending and add imperfetto endings: -avo/-avi/-ava/-avamo/-avate/-avano (-are verbs); -evo/-evi/-eva/-evamo/-evate/-evano (-ere verbs); -ivo/-ivi/-iva/-ivamo/-ivate/-ivano (-ire verbs). Essere is irregular: ero, eri, era, eravamo, eravate, erano.",
        examples: [
            { native: "Da bambino, giocavo a calcio ogni giorno.", translation: "As a child, I used to play football every day." },
            { native: "Quando vivevo a Roma, andavo spesso al mercato.", translation: "When I lived in Rome, I often went to the market." },
            { native: "Pioveva quando sono uscito.", translation: "It was raining when I went out." },
            { native: "Era una bella giornata.", translation: "It was a beautiful day." }
        ]
    },
    {
        id: "it-g-a2-3",
        level: "A2",
        title: "Reflexive Verbs",
        explanation: "Reflexive verbs indicate the subject acts on itself. They use reflexive pronouns placed before the conjugated verb: mi (io), ti (tu), si (lui/lei), ci (noi), vi (voi), si (loro). In the infinitive, the reflexive pronoun is attached: chiamarsi, svegliarsi, alzarsi. In the passato prossimo, reflexive verbs always use essere as auxiliary and the participle agrees with the subject.",
        examples: [
            { native: "Mi chiamo Luca.", translation: "My name is Luca. (I call myself Luca.)" },
            { native: "Mi sveglio alle sette.", translation: "I wake up at seven." },
            { native: "Ci divertiamo molto.", translation: "We enjoy ourselves a lot." },
            { native: "Si veste in fretta.", translation: "He/She gets dressed quickly." }
        ]
    },
    {
        id: "it-g-a2-4",
        level: "A2",
        title: "Futuro Semplice (Simple Future)",
        explanation: "The futuro semplice expresses future plans and predictions. Formation: for -are and -ere verbs, drop the final -e of the infinitive (and change -a- to -e- for -are verbs), then add: -ò, -ai, -à, -emo, -ete, -anno. For -ire verbs, drop -e and add the same endings. Common irregular stems: essere → sar-, avere → avr-, fare → far-, andare → andr-, venire → verr-, potere → potr-, volere → vorr-, dovere → dovr-.",
        examples: [
            { native: "Domani andrò al supermercato.", translation: "Tomorrow I will go to the supermarket." },
            { native: "Mangeremo insieme sabato.", translation: "We will eat together on Saturday." },
            { native: "Partiranno la settimana prossima.", translation: "They will leave next week." },
            { native: "Sarà bello!", translation: "It will be wonderful!" }
        ]
    }
]
