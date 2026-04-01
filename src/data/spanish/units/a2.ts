// data/spanish/units/a2.ts
import { LessonUnit } from "../../../types"

// A2 units — 22 units matching the 22 grammar lessons.

export const esUnitsA2: LessonUnit[] = [
    {
        id: "es-a2-u1",
        level: "A2",
        order: 1,
        title: "Talking About the Past — Preterite",
        description: "Narrate completed past events using the pretérito indefinido with regular -ar, -er and -ir verbs.",
        grammarIds: ["es-g-a2-1"],
        vocabIds: ["es-v-a2-049", "es-v-a2-050", "es-v-a2-051", "es-v-a2-052", "es-v-a2-006"],
        verbIds: ["es-vb-a2-1"],
        readingIds: ["es-r-a2-2"],
        testQuestions: [
            {
                id: "es-a2-u1-q1", level: "A2",
                prompt: "Which is the correct preterite form of 'hablar' for 'yo'?",
                options: ["hablé", "hablaba", "hablo", "hablaré"],
                answer: "hablé",
                hint: "Regular -ar preterite: -é, -aste, -ó…"
            },
            {
                id: "es-a2-u1-q2", level: "A2",
                prompt: "Complete: 'Ayer nosotros ___ al cine.' (ir — preterite)",
                options: ["fuimos", "íbamos", "vamos", "iremos"],
                answer: "fuimos",
                hint: "Ir and ser share the same irregular preterite forms."
            },
            {
                id: "es-a2-u1-q3", level: "A2",
                prompt: "Which sentence is in the preterite?",
                options: ["Comía pizza cada día.", "Comí pizza ayer.", "Como pizza ahora.", "Comeré pizza mañana."],
                answer: "Comí pizza ayer.",
                hint: "The preterite marks a completed action at a specific time."
            },
            {
                id: "es-a2-u1-q4", level: "A2",
                prompt: "Complete: 'Ellos ___ la carta ayer.' (escribir)",
                options: ["escribieron", "escribían", "escriben", "escribirán"],
                answer: "escribieron",
                hint: "Regular -ir preterite, ellos: -ieron."
            },
            {
                id: "es-a2-u1-q5", level: "A2",
                prompt: "Which time marker signals the preterite?",
                options: ["siempre", "ayer", "normalmente", "todos los días"],
                answer: "ayer",
                hint: "Words like ayer, el lunes pasado, hace dos días signal the preterite."
            },
            {
                id: "es-a2-u1-q6", level: "A2",
                prompt: "Complete: 'María ___ dos horas.' (esperar — she waited)",
                options: ["esperó", "esperaba", "espera", "esperará"],
                answer: "esperó",
                hint: "Single completed past action → preterite."
            }
        ]
    },
    {
        id: "es-a2-u2",
        level: "A2",
        order: 2,
        title: "Future Plans — Futuro Simple",
        description: "Make predictions and promises using the simple future tense. Learn the regular endings and the most common irregular stems.",
        grammarIds: ["es-g-a2-2"],
        vocabIds: ["es-v-a2-003", "es-v-a2-004", "es-v-a2-022", "es-v-a2-018", "es-v-a2-053"],
        verbIds: [],
        listeningIds: ["es-l-a2-4"],
        testQuestions: [
            {
                id: "es-a2-u2-q1", level: "A2",
                prompt: "How is the futuro simple formed for regular verbs?",
                options: ["infinitive + -é/-ás/-á/-emos/-éis/-án", "infinitive + -aba endings", "yo-present stem + -é endings", "infinitive + -ía endings"],
                answer: "infinitive + -é/-ás/-á/-emos/-éis/-án",
                hint: "The future uses the full infinitive as its stem, then adds the endings."
            },
            {
                id: "es-a2-u2-q2", level: "A2",
                prompt: "What is the future of 'tener' for 'yo'?",
                options: ["tendré", "teneré", "tenía", "tuve"],
                answer: "tendré",
                hint: "Tener has an irregular future stem: tendr-."
            },
            {
                id: "es-a2-u2-q3", level: "A2",
                prompt: "Complete: 'Mañana ___ mucho.' (llover)",
                options: ["lloverá", "llueve", "llovió", "llovía"],
                answer: "lloverá",
                hint: "Prediction about tomorrow → futuro simple."
            },
            {
                id: "es-a2-u2-q4", level: "A2",
                prompt: "Which sentence uses the futuro simple correctly?",
                options: ["Voy a llamarte mañana.", "Te llamaré mañana.", "Te llamé mañana.", "Te llamaba mañana."],
                answer: "Te llamaré mañana.",
                hint: "Futuro simple = infinitive + future ending."
            },
            {
                id: "es-a2-u2-q5", level: "A2",
                prompt: "What is the future of 'hacer' for 'ellos'?",
                options: ["harán", "haceran", "hacerán", "harían"],
                answer: "harán",
                hint: "Hacer has an irregular future stem: har-."
            },
            {
                id: "es-a2-u2-q6", level: "A2",
                prompt: "Complete: 'El año que viene ___ mucho.' (trabajar — we)",
                options: ["trabajaremos", "trabajamos", "trabajábamos", "trabajemos"],
                answer: "trabajaremos",
                hint: "Regular -ar verb in the future, nosotros: -aremos."
            }
        ]
    },
    {
        id: "es-a2-u3",
        level: "A2",
        order: 3,
        title: "Por vs. Para",
        description: "Master the key distinction between por (cause, duration, exchange) and para (purpose, destination, deadline).",
        grammarIds: ["es-g-a2-3"],
        vocabIds: ["es-v-a2-004", "es-v-a2-031", "es-v-a2-005", "es-v-a2-106", "es-v-a2-127"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u3-q1", level: "A2",
                prompt: "Complete: 'Este regalo es ___ ti.'",
                options: ["para", "por", "de", "en"],
                answer: "para",
                hint: "Para = recipient ('for you')."
            },
            {
                id: "es-a2-u3-q2", level: "A2",
                prompt: "Complete: 'Lo hizo ___ amor.'",
                options: ["por", "para", "en", "de"],
                answer: "por",
                hint: "Por = motivation/cause ('out of love')."
            },
            {
                id: "es-a2-u3-q3", level: "A2",
                prompt: "Complete: 'Estudié español ___ tres años.'",
                options: ["por", "para", "durante", "en"],
                answer: "por",
                hint: "Por expresses duration of time."
            },
            {
                id: "es-a2-u3-q4", level: "A2",
                prompt: "Complete: 'Necesito el informe ___ el lunes.'",
                options: ["para", "por", "desde", "hasta"],
                answer: "para",
                hint: "Para = deadline ('by Monday')."
            },
            {
                id: "es-a2-u3-q5", level: "A2",
                prompt: "Complete: 'Salimos ___ Barcelona mañana.'",
                options: ["para", "por", "a", "en"],
                answer: "para",
                hint: "Para = destination ('leaving for Barcelona')."
            },
            {
                id: "es-a2-u3-q6", level: "A2",
                prompt: "Complete: 'Lo compré ___ veinte euros.'",
                options: ["por", "para", "en", "de"],
                answer: "por",
                hint: "Por = exchange ('for twenty euros')."
            }
        ]
    },
    {
        id: "es-a2-u4",
        level: "A2",
        order: 4,
        title: "Combined Object Pronouns",
        description: "Use direct and indirect object pronouns together in the same sentence. Master the se lo / te lo / me lo patterns.",
        grammarIds: ["es-g-a2-4"],
        vocabIds: ["es-v-a2-067", "es-v-a2-044", "es-v-a2-106", "es-v-a2-093", "es-v-a2-094"],
        verbIds: ["es-vb-a2-2"],
        testQuestions: [
            {
                id: "es-a2-u4-q1", level: "A2",
                prompt: "Translate: 'I gave it to him.' (masculine it)",
                options: ["Se lo di.", "Le lo di.", "Lo le di.", "Se la di."],
                answer: "Se lo di.",
                hint: "Le changes to se before lo/la. Indirect first, then direct: se lo."
            },
            {
                id: "es-a2-u4-q2", level: "A2",
                prompt: "Complete: '¿___ puedes explicar?' (Can you explain it to me?)",
                options: ["Me lo", "Lo me", "Se lo", "Te lo"],
                answer: "Me lo",
                hint: "Indirect (me) comes before direct (lo)."
            },
            {
                id: "es-a2-u4-q3", level: "A2",
                prompt: "Why does 'le lo' become 'se lo' in Spanish?",
                options: ["To avoid two l-sounds together", "Because le is formal", "Because lo is always last", "Le and lo cannot both be indirect"],
                answer: "To avoid two l-sounds together",
                hint: "Le/les → se before lo/la/los/las — a euphonic rule."
            },
            {
                id: "es-a2-u4-q4", level: "A2",
                prompt: "Translate: 'She'll send it to us.' (feminine it)",
                options: ["Nos la mandará.", "Se la mandará.", "La nos mandará.", "Nos lo mandará."],
                answer: "Nos la mandará.",
                hint: "Indirect (nos) + direct (la, feminine) → nos la."
            },
            {
                id: "es-a2-u4-q5", level: "A2",
                prompt: "Where do combined pronouns go with an infinitive?",
                options: ["Attached to the infinitive end", "Before the conjugated verb only", "Between the two verbs", "After the sentence"],
                answer: "Attached to the infinitive end",
                hint: "Quiero dártelo — both pronouns attach to the infinitive."
            },
            {
                id: "es-a2-u4-q6", level: "A2",
                prompt: "Complete: 'Nos ___ contaron todo.' (they told it to us)",
                options: ["lo", "le", "se", "la"],
                answer: "lo",
                hint: "Nos lo contaron — indirect (nos) + direct (lo) before the verb."
            }
        ]
    },
    {
        id: "es-a2-u5",
        level: "A2",
        order: 5,
        title: "Indirect Object Pronouns",
        description: "Say 'to whom' or 'for whom' an action is done using me, te, le, nos, os, les.",
        grammarIds: ["es-g-a2-5"],
        vocabIds: ["es-v-a2-044", "es-v-a2-045", "es-v-a2-047", "es-v-a2-031", "es-v-a2-002"],
        verbIds: ["es-vb-a2-6"],
        listeningIds: ["es-l-a2-2"],
        testQuestions: [
            {
                id: "es-a2-u5-q1", level: "A2",
                prompt: "Which sentence means 'I give you the book'?",
                options: ["Te doy el libro.", "Le doy el libro.", "Me das el libro.", "Os doy el libro."],
                answer: "Te doy el libro.",
                hint: "Indirect object 'you' (informal) → te."
            },
            {
                id: "es-a2-u5-q2", level: "A2",
                prompt: "Complete: 'Ella ___ mandó un mensaje.' (to him)",
                options: ["le", "lo", "te", "me"],
                answer: "le",
                hint: "Third person singular indirect object → le."
            },
            {
                id: "es-a2-u5-q3", level: "A2",
                prompt: "Which pronoun replaces 'le' when followed by lo/la/los/las?",
                options: ["se", "te", "me", "nos"],
                answer: "se",
                hint: "Le/les → se before lo, la, los, las to avoid two l-sounds."
            },
            {
                id: "es-a2-u5-q4", level: "A2",
                prompt: "Complete: '¿___ puedes decir la verdad?' (to me)",
                options: ["Me", "Te", "Le", "Se"],
                answer: "Me",
                hint: "Indirect object 'to me' → me."
            },
            {
                id: "es-a2-u5-q5", level: "A2",
                prompt: "Translate: 'They explained the lesson to us.'",
                options: ["Nos explicaron la lección.", "Les explicaron la lección.", "Me explicaron la lección.", "Os explicaron la lección."],
                answer: "Nos explicaron la lección.",
                hint: "Indirect 'us' → nos."
            },
            {
                id: "es-a2-u5-q6", level: "A2",
                prompt: "What does the indirect object pronoun tell you?",
                options: ["To whom or for whom the action is done", "Who performs the action", "Which noun receives the action directly", "When the action happens"],
                answer: "To whom or for whom the action is done",
                hint: "Indirect object = recipient of the action."
            }
        ]
    },
    {
        id: "es-a2-u6",
        level: "A2",
        order: 6,
        title: "Comparing Things — Comparatives and Superlatives",
        description: "Compare people, places, and things using más/menos … que, tan … como, and superlative constructions.",
        grammarIds: ["es-g-a2-6"],
        vocabIds: ["es-v-a2-027", "es-v-a2-076", "es-v-a2-077", "es-v-a2-078", "es-v-a2-007"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u6-q1", level: "A2",
                prompt: "How do you say 'This hotel is more expensive than the other one'?",
                options: ["Este hotel es más caro que el otro.", "Este hotel es muy caro que el otro.", "Este hotel es más caro como el otro.", "Este hotel es tan caro que el otro."],
                answer: "Este hotel es más caro que el otro.",
                hint: "More … than = más + adjective + que."
            },
            {
                id: "es-a2-u6-q2", level: "A2",
                prompt: "Which structure means 'as … as'?",
                options: ["tan + adj + como", "más + adj + que", "menos + adj + que", "el/la más + adj"],
                answer: "tan + adj + como",
                hint: "Equal comparisons: tan … como."
            },
            {
                id: "es-a2-u6-q3", level: "A2",
                prompt: "What is the comparative/superlative of 'bueno'?",
                options: ["mejor", "el más bueno", "el muy bueno", "buenísimo"],
                answer: "mejor",
                hint: "Bueno has the irregular comparative: mejor."
            },
            {
                id: "es-a2-u6-q4", level: "A2",
                prompt: "Complete: 'Es ___ restaurante famoso de la ciudad.'",
                options: ["el más", "el muy", "el tan", "más"],
                answer: "el más",
                hint: "Superlative: el/la + más + adjective."
            },
            {
                id: "es-a2-u6-q5", level: "A2",
                prompt: "What does '-ísimo/-ísima' add to an adjective?",
                options: ["Absolute superlative (extremely/very)", "Comparative (more than)", "Equal comparison (as … as)", "Negative comparison (less than)"],
                answer: "Absolute superlative (extremely/very)",
                hint: "Buenísimo = extremely good."
            },
            {
                id: "es-a2-u6-q6", level: "A2",
                prompt: "Complete: 'Mi hermana es ___ que yo.' (younger — irregular)",
                options: ["menor", "más joven", "menos mayor", "pequeñísima"],
                answer: "menor",
                hint: "Joven → menor (irregular comparative meaning 'younger')."
            }
        ]
    },
    {
        id: "es-a2-u7",
        level: "A2",
        order: 7,
        title: "Conditional — Polite Requests & Hypotheticals",
        description: "Use the condicional simple to make polite requests, express hypothetical ideas, and report what someone said they would do.",
        grammarIds: ["es-g-a2-7"],
        vocabIds: ["es-v-a2-092", "es-v-a2-093", "es-v-a2-094", "es-v-a2-095", "es-v-a2-003"],
        verbIds: [],
        listeningIds: ["es-l-a2-1"],
        testQuestions: [
            {
                id: "es-a2-u7-q1", level: "A2",
                prompt: "How do you make a polite request with 'poder'?",
                options: ["¿Podría hablar más despacio?", "¿Puedes hablar más despacio?", "¿Puede hablar más despacio?", "¿Podrás hablar más despacio?"],
                answer: "¿Podría hablar más despacio?",
                hint: "Conditional of poder = podría — used for polite requests."
            },
            {
                id: "es-a2-u7-q2", level: "A2",
                prompt: "What are the conditional endings for -ar/-er/-ir verbs?",
                options: ["-ía, -ías, -ía, -íamos, -íais, -ían", "-é, -ás, -á, -emos, -éis, -án", "-aba, -abas, -aba endings", "-ara, -aras endings"],
                answer: "-ía, -ías, -ía, -íamos, -íais, -ían",
                hint: "Conditional = same irregular stems as future + -ía endings."
            },
            {
                id: "es-a2-u7-q3", level: "A2",
                prompt: "Complete: 'Me ___ un café, por favor.' (gustar)",
                options: ["gustaría", "gustará", "gustó", "gusta"],
                answer: "gustaría",
                hint: "Me gustaría = I would like (polite wish)."
            },
            {
                id: "es-a2-u7-q4", level: "A2",
                prompt: "Complete: 'En tu lugar, yo no lo ___.' (hacer)",
                options: ["haría", "hará", "haré", "hago"],
                answer: "haría",
                hint: "Hacer in the conditional: haría (irregular stem har-)."
            },
            {
                id: "es-a2-u7-q5", level: "A2",
                prompt: "Complete: 'Dijo que ___ a las ocho.' (venir — reported speech)",
                options: ["vendría", "vendrá", "vino", "viene"],
                answer: "vendría",
                hint: "Conditional for reported future: he said he would come."
            },
            {
                id: "es-a2-u7-q6", level: "A2",
                prompt: "Translate: '¿Qué harías con mucho dinero?'",
                options: ["What would you do with a lot of money?", "What did you do with a lot of money?", "What will you do with a lot of money?", "What are you doing with all that money?"],
                answer: "What would you do with a lot of money?",
                hint: "Harías = conditional of hacer = 'you would do'."
            }
        ]
    },
    {
        id: "es-a2-u8",
        level: "A2",
        order: 8,
        title: "Describing the Past — Imperfect",
        description: "Use the imperfecto to describe habitual past actions, background situations, and states that were ongoing.",
        grammarIds: ["es-g-a2-8"],
        vocabIds: ["es-v-a2-081", "es-v-a2-082", "es-v-a2-083", "es-v-a2-084", "es-v-a2-085"],
        verbIds: ["es-vb-a2-7"],
        listeningIds: ["es-l-a2-3"],
        testQuestions: [
            {
                id: "es-a2-u8-q1", level: "A2",
                prompt: "How do you say 'When I was a child, I used to play in the park'?",
                options: ["Cuando era niño, jugué en el parque.", "Cuando era niño, jugaba en el parque.", "Cuando fui niño, jugaba en el parque.", "Cuando era niño, jugaré en el parque."],
                answer: "Cuando era niño, jugaba en el parque.",
                hint: "Habitual past → imperfecto. Both verbs in imperfecto."
            },
            {
                id: "es-a2-u8-q2", level: "A2",
                prompt: "What is the imperfecto of 'comer' for 'tú'?",
                options: ["comiste", "comes", "comías", "comerás"],
                answer: "comías",
                hint: "-er/-ir imperfecto endings: -ía, -ías, -ía, -íamos, -íais, -ían."
            },
            {
                id: "es-a2-u8-q3", level: "A2",
                prompt: "Which verb is irregular in the imperfecto?",
                options: ["hablar", "comer", "ser", "vivir"],
                answer: "ser",
                hint: "Only ser, ir, and ver are irregular in the imperfecto."
            },
            {
                id: "es-a2-u8-q4", level: "A2",
                prompt: "Complete: 'Antes, yo ___ mucho.' (trabajar — habitual past)",
                options: ["trabajé", "trabajo", "trabajaba", "trabajaré"],
                answer: "trabajaba",
                hint: "'Antes' signals a habitual past habit → imperfecto."
            },
            {
                id: "es-a2-u8-q5", level: "A2",
                prompt: "What is the imperfecto of 'ir' for 'nosotros'?",
                options: ["fuimos", "vamos", "íbamos", "iremos"],
                answer: "íbamos",
                hint: "Ir is irregular in the imperfecto: iba, ibas, iba, íbamos, ibais, iban."
            },
            {
                id: "es-a2-u8-q6", level: "A2",
                prompt: "Which sentence uses the imperfecto correctly for background description?",
                options: ["Llovió mucho ese día.", "Hacía frío cuando salí.", "Salí de casa ayer.", "Fui al médico el lunes."],
                answer: "Hacía frío cuando salí.",
                hint: "Background/setting (ongoing state) → imperfecto."
            }
        ]
    },
    {
        id: "es-a2-u9",
        level: "A2",
        order: 9,
        title: "Introduction to the Subjunctive",
        description: "Understand what the subjunctive is and how to form it. Learn the 'opposite vowel' rule and key irregular forms.",
        grammarIds: ["es-g-a2-9"],
        vocabIds: ["es-v-a2-059", "es-v-a2-060", "es-v-a2-061", "es-v-a2-093", "es-v-a2-122"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u9-q1", level: "A2",
                prompt: "How is the present subjunctive of -ar verbs formed?",
                options: ["yo-form present, drop -o, add -e endings", "full infinitive + -e endings", "preterite stem + -a endings", "imperfecto stem + -e endings"],
                answer: "yo-form present, drop -o, add -e endings",
                hint: "Take yo present → drop -o → add opposite vowel endings."
            },
            {
                id: "es-a2-u9-q2", level: "A2",
                prompt: "What is the present subjunctive of 'hablar' for 'tú'?",
                options: ["hables", "hablas", "hablás", "hablaste"],
                answer: "hables",
                hint: "-ar subjunctive: hable, hables, hable, hablemos, habléis, hablen."
            },
            {
                id: "es-a2-u9-q3", level: "A2",
                prompt: "What is the present subjunctive of 'ser' for 'nosotros'?",
                options: ["seamos", "somos", "seremos", "éramos"],
                answer: "seamos",
                hint: "Ser is fully irregular in the subjunctive: sea, seas, sea, seamos, seáis, sean."
            },
            {
                id: "es-a2-u9-q4", level: "A2",
                prompt: "Complete: 'Espero que tú ___ a tiempo.' (llegar)",
                options: ["llegues", "llegas", "llegaste", "llegarás"],
                answer: "llegues",
                hint: "Esperar que triggers the subjunctive with a different subject."
            },
            {
                id: "es-a2-u9-q5", level: "A2",
                prompt: "What is the present subjunctive of 'ir' for 'ella'?",
                options: ["vaya", "va", "fue", "irá"],
                answer: "vaya",
                hint: "Ir is irregular in the subjunctive: vaya, vayas, vaya, vayamos, vayáis, vayan."
            },
            {
                id: "es-a2-u9-q6", level: "A2",
                prompt: "When is the subjunctive used?",
                options: ["In dependent clauses after certain triggers (desire, doubt, emotion)", "To describe completed past events", "To form the future tense", "For habitual past actions"],
                answer: "In dependent clauses after certain triggers (desire, doubt, emotion)",
                hint: "The subjunctive expresses subjectivity — wishes, doubts, emotions."
            }
        ]
    },
    {
        id: "es-a2-u10",
        level: "A2",
        order: 10,
        title: "Relative Clauses & Personal Messages",
        description: "Add information about nouns using que and quien. Write and understand short personal messages in Spanish.",
        grammarIds: ["es-g-a2-11"],
        vocabIds: ["es-v-a2-092", "es-v-a2-093", "es-v-a2-094", "es-v-a2-095", "es-v-a2-096", "es-v-a2-097", "es-v-a2-098"],
        verbIds: [],
        readingIds: ["es-r-a2-4"],
        testQuestions: [
            {
                id: "es-a2-u10-q1", level: "A2",
                prompt: "Complete with a relative pronoun: 'La película ___ vimos fue muy buena.'",
                options: ["que", "quien", "cual", "donde"],
                answer: "que",
                hint: "Que is the most common relative pronoun — used for people and things."
            },
            {
                id: "es-a2-u10-q2", level: "A2",
                prompt: "When is 'quien' used instead of 'que'?",
                options: ["For people, typically after a preposition", "For things only", "At the start of a sentence", "After verbs of thinking"],
                answer: "For people, typically after a preposition",
                hint: "Con quien, para quien, de quien — quien after prepositions with people."
            },
            {
                id: "es-a2-u10-q3", level: "A2",
                prompt: "Translate: 'The person who helped me was very kind.'",
                options: ["La persona que me ayudó fue muy amable.", "La persona quien me ayudó fue amable.", "La persona cual me ayudó fue amable.", "La persona que ayudé fue muy amable."],
                answer: "La persona que me ayudó fue muy amable.",
                hint: "Use que for people in defining relative clauses."
            },
            {
                id: "es-a2-u10-q4", level: "A2",
                prompt: "What is the appropriate informal letter opening in Spanish?",
                options: ["Querido/a [nombre]:", "Estimado señor:", "A quien corresponda:", "De mi consideración:"],
                answer: "Querido/a [nombre]:",
                hint: "Querido/a = Dear (informal). Estimado/a is formal."
            },
            {
                id: "es-a2-u10-q5", level: "A2",
                prompt: "What does 'un abrazo' mean at the end of a message?",
                options: ["a hug (informal closing)", "best wishes (formal)", "yours sincerely", "see you soon"],
                answer: "a hug (informal closing)",
                hint: "Un abrazo = a hug — the most common informal letter/message closing."
            },
            {
                id: "es-a2-u10-q6", level: "A2",
                prompt: "Can 'que' be omitted in a Spanish relative clause?",
                options: ["No — que cannot be omitted", "Yes — it's optional like in English", "Only when referring to things", "Only in informal speech"],
                answer: "No — que cannot be omitted",
                hint: "Unlike English, Spanish que is always required in relative clauses."
            }
        ]
    },
    {
        id: "es-a2-u11",
        level: "A2",
        order: 11,
        title: "Narrating the Past — Preterite vs Imperfect",
        description: "Combine the pretérito indefinido and imperfecto to tell a full story: completed events (preterite) vs background states and habits (imperfect).",
        grammarIds: ["es-g-a2-10"],
        vocabIds: ["es-v-a2-083", "es-v-a2-084", "es-v-a2-085", "es-v-a2-099", "es-v-a2-100", "es-v-a2-101", "es-v-a2-102", "es-v-a2-103"],
        verbIds: ["es-vb-a2-7"],
        readingIds: ["es-r-a2-5"],
        testQuestions: [
            {
                id: "es-a2-u11-q1", level: "A2",
                prompt: "Which tense fits? 'Cuando era niño, ___ al parque todos los días.' (ir — habitual)",
                options: ["fui", "iba", "voy", "iré"],
                answer: "iba",
                hint: "'Todos los días' signals a repeated past habit → imperfecto."
            },
            {
                id: "es-a2-u11-q2", level: "A2",
                prompt: "Which tense fits? 'Ayer, ella ___ su pasaporte.' (perder — single event)",
                options: ["perdía", "pierde", "perdió", "ha perdido"],
                answer: "perdió",
                hint: "'Ayer' + a single completed event → pretérito indefinido."
            },
            {
                id: "es-a2-u11-q3", level: "A2",
                prompt: "Complete: '___ (hacer) mucho frío cuando ___ (llegar) al aeropuerto.'",
                options: ["Hizo / llegaba", "Hacía / llegué", "Hacía / llegaba", "Hizo / llegué"],
                answer: "Hacía / llegué",
                hint: "Background state (cold weather) → imperfecto. Completed arrival → preterite."
            },
            {
                id: "es-a2-u11-q4", level: "A2",
                prompt: "Complete: 'Mientras yo ___ (leer), mi hermano ___ (llamar) por teléfono.'",
                options: ["leía / llamó", "leí / llamaba", "leía / llamaba", "leí / llamó"],
                answer: "leía / llamó",
                hint: "Ongoing background action (reading) → imperfecto. Interrupting event (called) → preterite."
            },
            {
                id: "es-a2-u11-q5", level: "A2",
                prompt: "Which signal word suggests the imperfecto?",
                options: ["de repente", "siempre", "ayer", "finalmente"],
                answer: "siempre",
                hint: "'Siempre' signals a repeated habit in the past → imperfecto."
            },
            {
                id: "es-a2-u11-q6", level: "A2",
                prompt: "Complete: 'Antes ___ (vivir) en Madrid, pero el año pasado ___ (mudarse) a Barcelona.'",
                options: ["vivía / me mudé", "viví / me mudaba", "vivía / me mudaba", "viví / me mudé"],
                answer: "vivía / me mudé",
                hint: "Habitual past state → imperfecto. Single completed change → preterite."
            }
        ]
    },
    {
        id: "es-a2-u12",
        level: "A2",
        order: 12,
        title: "Preterite — Irregular Verbs",
        description: "Master the high-frequency verbs with completely irregular preterite forms: ser/ir, hacer, tener, estar, poder, querer, venir, saber.",
        grammarIds: ["es-g-a2-12"],
        vocabIds: ["es-v-a2-004", "es-v-a2-043", "es-v-a2-031", "es-v-a2-023", "es-v-a2-006"],
        verbIds: [],
        readingIds: ["es-r-a2-3"],
        testQuestions: [
            {
                id: "es-a2-u12-q1", level: "A2",
                prompt: "What is the preterite of 'ir' for 'yo'?",
                options: ["fui", "iba", "voy", "iré"],
                answer: "fui",
                hint: "Ir and ser share the same preterite forms: fui, fuiste, fue…"
            },
            {
                id: "es-a2-u12-q2", level: "A2",
                prompt: "What is the preterite of 'hacer' for 'él'?",
                options: ["hizo", "hice", "hacía", "hace"],
                answer: "hizo",
                hint: "Hacer preterite: hice, hiciste, hizo (note the spelling change c→z in 3rd sg)."
            },
            {
                id: "es-a2-u12-q3", level: "A2",
                prompt: "Complete: 'No ___ dormir anoche.' (poder — yo)",
                options: ["pude", "podía", "puedo", "podré"],
                answer: "pude",
                hint: "Poder preterite stem: pud- → pude, pudiste, pudo…"
            },
            {
                id: "es-a2-u12-q4", level: "A2",
                prompt: "Do irregular preterite forms have written accent marks?",
                options: ["No, they never have accent marks", "Yes, always on the last syllable", "Only the yo form has an accent", "Only the él form has an accent"],
                answer: "No, they never have accent marks",
                hint: "Irregular preterite forms (fui, hice, tuve…) carry no written accents."
            },
            {
                id: "es-a2-u12-q5", level: "A2",
                prompt: "Complete: 'Ella ___ que esperar mucho tiempo.' (tener)",
                options: ["tuvo", "tenía", "tiene", "tendrá"],
                answer: "tuvo",
                hint: "Tener preterite: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron."
            },
            {
                id: "es-a2-u12-q6", level: "A2",
                prompt: "Complete: '___ tan pronto como ___ la noticia.' (venir yo / saber yo)",
                options: ["Vine / supe", "Venía / sabía", "Vine / sabía", "Venía / supe"],
                answer: "Vine / supe",
                hint: "Two completed sequential actions → both preterite. Venir: vine; Saber: supe."
            }
        ]
    },
    {
        id: "es-a2-u13",
        level: "A2",
        order: 13,
        title: "Preterite — Stem-Changing -ir Verbs",
        description: "Learn how -ir stem-changing verbs shift in the third person preterite: e→i (pedir, servir, sentir) and o→u (dormir).",
        grammarIds: ["es-g-a2-13"],
        vocabIds: ["es-v-a2-067", "es-v-a2-064", "es-v-a2-065", "es-v-a2-068", "es-v-a2-016"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u13-q1", level: "A2",
                prompt: "Which person(s) change their stem in -ir preterite verbs?",
                options: ["Only él/ella and ellos/ellas", "Yo only", "All persons", "Only tú and vosotros"],
                answer: "Only él/ella and ellos/ellas",
                hint: "Stem changes in the preterite are limited to the 3rd person of -ir verbs."
            },
            {
                id: "es-a2-u13-q2", level: "A2",
                prompt: "What is the preterite of 'dormir' for 'ellos'?",
                options: ["durmieron", "dormieron", "dormían", "durmían"],
                answer: "durmieron",
                hint: "Dormir: o→u in 3rd person preterite → durmió, durmieron."
            },
            {
                id: "es-a2-u13-q3", level: "A2",
                prompt: "Complete: 'El camarero ___ la comida.' (servir — él)",
                options: ["sirvió", "servió", "servía", "sirvía"],
                answer: "sirvió",
                hint: "Servir: e→i in 3rd person preterite → sirvió, sirvieron."
            },
            {
                id: "es-a2-u13-q4", level: "A2",
                prompt: "Complete: '¿Qué ___ de postre?' (pedir — ellos)",
                options: ["pidieron", "pedieron", "pedían", "piden"],
                answer: "pidieron",
                hint: "Pedir: e→i in 3rd person preterite → pidió, pidieron."
            },
            {
                id: "es-a2-u13-q5", level: "A2",
                prompt: "Does 'hablar' (an -ar verb) stem-change in the preterite?",
                options: ["No — only -ir verbs stem-change in the preterite", "Yes — same as in the present", "Yes — but only in yo form", "No — -ar and -er verbs never change"],
                answer: "No — only -ir verbs stem-change in the preterite",
                hint: "-ar and -er verbs do NOT have preterite stem changes. Only -ir verbs do."
            },
            {
                id: "es-a2-u13-q6", level: "A2",
                prompt: "Complete: 'Ella ___ quedarse en casa.' (preferir — ella)",
                options: ["prefirió", "preferió", "prefería", "prefiere"],
                answer: "prefirió",
                hint: "Preferir: e→i in 3rd person → prefirió, prefirieron."
            }
        ]
    },
    {
        id: "es-a2-u14",
        level: "A2",
        order: 14,
        title: "Subjunctive with Wish & Desire",
        description: "Use the subjunctive in two-subject sentences expressing desire, hope, and recommendation: querer que, esperar que, recomendar que…",
        grammarIds: ["es-g-a2-14"],
        vocabIds: ["es-v-a2-059", "es-v-a2-060", "es-v-a2-062", "es-v-a2-092", "es-v-a2-094"],
        verbIds: [],
        listeningIds: ["es-l-a2-5"],
        testQuestions: [
            {
                id: "es-a2-u14-q1", level: "A2",
                prompt: "Complete: 'Quiero que tú ___ a la fiesta.' (venir)",
                options: ["vengas", "vienes", "viniste", "vendrás"],
                answer: "vengas",
                hint: "Querer que + different subject → subjunctive."
            },
            {
                id: "es-a2-u14-q2", level: "A2",
                prompt: "When do you use infinitive instead of subjunctive?",
                options: ["When both clauses have the same subject", "When the verb is irregular", "After 'esperar que'", "Always with 'querer'"],
                answer: "When both clauses have the same subject",
                hint: "One subject → infinitive (quiero ir). Two subjects → subjunctive (quiero que vayas)."
            },
            {
                id: "es-a2-u14-q3", level: "A2",
                prompt: "Complete: 'El médico recomienda que ___ más.' (descansar — tú)",
                options: ["descanses", "descansas", "descansaste", "descansarás"],
                answer: "descanses",
                hint: "Recomendar que + different subject → subjunctive."
            },
            {
                id: "es-a2-u14-q4", level: "A2",
                prompt: "Complete: 'Espero que todo ___ bien.' (salir)",
                options: ["salga", "sale", "salió", "saldrá"],
                answer: "salga",
                hint: "Esperar que triggers subjunctive. Salir subjunctive yo-form: salgo → salga."
            },
            {
                id: "es-a2-u14-q5", level: "A2",
                prompt: "Which is correct: 'I want to go' (same subject)?",
                options: ["Quiero ir.", "Quiero que vaya.", "Quiero que yo vaya.", "Quiero que ir."],
                answer: "Quiero ir.",
                hint: "Same subject (I want / I go) → use infinitive, not subjunctive."
            },
            {
                id: "es-a2-u14-q6", level: "A2",
                prompt: "Complete: 'Ojalá ___ buen tiempo mañana.' (hacer)",
                options: ["haga", "hace", "hará", "hizo"],
                answer: "haga",
                hint: "Ojalá always triggers the subjunctive. Hacer subjunctive: haga."
            }
        ]
    },
    {
        id: "es-a2-u15",
        level: "A2",
        order: 15,
        title: "Passive Se and Impersonal Se",
        description: "Use se constructions to express passive meaning and impersonal statements — equivalent to English 'one / you / people / is done'.",
        grammarIds: ["es-g-a2-15"],
        vocabIds: ["es-v-a2-110", "es-v-a2-111", "es-v-a2-114", "es-v-a2-116", "es-v-a2-117"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u15-q1", level: "A2",
                prompt: "What does 'Se venden pisos aquí' mean?",
                options: ["Flats for sale here", "He sells flats here", "One can rent flats here", "Flats are expensive here"],
                answer: "Flats for sale here",
                hint: "Se pasiva: se + verb (agrees with pisos, plural) = 'flats are sold'."
            },
            {
                id: "es-a2-u15-q2", level: "A2",
                prompt: "Complete: 'En España ___ muy tarde.' (cenar — impersonal)",
                options: ["se cena", "se cenan", "cenan", "cena"],
                answer: "se cena",
                hint: "Impersonal se is always 3rd person singular — no subject noun."
            },
            {
                id: "es-a2-u15-q3", level: "A2",
                prompt: "What is the key difference between se pasiva and se impersonal?",
                options: ["Se pasiva agrees with a noun; se impersonal is always singular", "Se impersonal is only used in questions", "Se pasiva is only used in Latin America", "Se impersonal requires a plural verb"],
                answer: "Se pasiva agrees with a noun; se impersonal is always singular",
                hint: "Se pasiva: se vende una casa / se venden pisos. Se impersonal: always singular."
            },
            {
                id: "es-a2-u15-q4", level: "A2",
                prompt: "Complete: '___ habla español en muchos países.' (impersonal)",
                options: ["Se", "Se le", "Les", "Uno"],
                answer: "Se",
                hint: "Se habla español = Spanish is spoken (impersonal se)."
            },
            {
                id: "es-a2-u15-q5", level: "A2",
                prompt: "What does 'Se prohíbe fumar' mean?",
                options: ["Smoking is prohibited", "They prohibit smoking", "He prohibits smoking", "You must not smoke here because"],
                answer: "Smoking is prohibited",
                hint: "Se prohíbe = it is prohibited / smoking is not allowed."
            },
            {
                id: "es-a2-u15-q6", level: "A2",
                prompt: "Complete: '___ alquilan habitaciones.' (passive se — rooms for rent)",
                options: ["Se", "Les", "Se les", "Nos"],
                answer: "Se",
                hint: "Se + verb agreeing with habitaciones (plural) = 'rooms are rented'."
            }
        ]
    },
    {
        id: "es-a2-u16",
        level: "A2",
        order: 16,
        title: "Verbs with Prepositions",
        description: "Learn the prepositions that Spanish verbs require: acabar de, dejar de, soñar con, tardar en, empezar a, and more.",
        grammarIds: ["es-g-a2-16"],
        vocabIds: ["es-v-a2-053", "es-v-a2-004", "es-v-a2-031", "es-v-a2-128", "es-v-a2-129"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u16-q1", level: "A2",
                prompt: "Complete: 'Acabo ___ llegar del trabajo.'",
                options: ["de", "a", "en", "por"],
                answer: "de",
                hint: "Acabar de + infinitive = to have just done something."
            },
            {
                id: "es-a2-u16-q2", level: "A2",
                prompt: "Complete: 'Dejó ___ fumar el año pasado.'",
                options: ["de", "a", "en", "por"],
                answer: "de",
                hint: "Dejar de + infinitive = to stop doing something."
            },
            {
                id: "es-a2-u16-q3", level: "A2",
                prompt: "Complete: 'Siempre sueño ___ las vacaciones.'",
                options: ["con", "de", "en", "a"],
                answer: "con",
                hint: "Soñar con = to dream about."
            },
            {
                id: "es-a2-u16-q4", level: "A2",
                prompt: "Complete: 'Tardo media hora ___ llegar al trabajo.'",
                options: ["en", "de", "para", "a"],
                answer: "en",
                hint: "Tardar en + infinitive = to take (time) to do something."
            },
            {
                id: "es-a2-u16-q5", level: "A2",
                prompt: "Complete: 'Voy a empezar ___ aprender chino.'",
                options: ["a", "de", "en", "por"],
                answer: "a",
                hint: "Empezar a + infinitive = to start doing something."
            },
            {
                id: "es-a2-u16-q6", level: "A2",
                prompt: "Complete: 'Me olvidé ___ llamarle.'",
                options: ["de", "a", "en", "por"],
                answer: "de",
                hint: "Olvidarse de + infinitive = to forget to do something."
            }
        ]
    },
    {
        id: "es-a2-u17",
        level: "A2",
        order: 17,
        title: "Real Conditionals (Si + Present + Future)",
        description: "Express likely conditions and their consequences using si + present indicative + future or imperative.",
        grammarIds: ["es-g-a2-17"],
        vocabIds: ["es-v-a2-003", "es-v-a2-057", "es-v-a2-120", "es-v-a2-127", "es-v-a2-130"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u17-q1", level: "A2",
                prompt: "Complete: 'Si ___, no saldremos.' (llover — present)",
                options: ["llueve", "llovería", "lloviera", "lloverá"],
                answer: "llueve",
                hint: "Si + present indicative (never future or conditional after si in type 1)."
            },
            {
                id: "es-a2-u17-q2", level: "A2",
                prompt: "Complete: 'Si estudias, ___ el examen.' (aprobar)",
                options: ["aprobarás", "aprobarías", "apruebas", "apruebes"],
                answer: "aprobarás",
                hint: "Si + present → future in the main clause."
            },
            {
                id: "es-a2-u17-q3", level: "A2",
                prompt: "Which sentence is a correct Type 1 conditional?",
                options: ["Si tendrás tiempo, llámame.", "Si tienes tiempo, llámame.", "Si tenías tiempo, llámame.", "Si tuvieras tiempo, llámame."],
                answer: "Si tienes tiempo, llámame.",
                hint: "Si + present indicative + imperative — never future after si."
            },
            {
                id: "es-a2-u17-q4", level: "A2",
                prompt: "Can the si clause come at the end of the sentence?",
                options: ["Yes — both orders are correct", "No — si clause must come first", "Only in formal writing", "Only in questions"],
                answer: "Yes — both orders are correct",
                hint: "Si hace buen tiempo, iremos. = Iremos si hace buen tiempo. Both are fine."
            },
            {
                id: "es-a2-u17-q5", level: "A2",
                prompt: "Complete: 'No ___ si no los invitamos.' (venir — ellos)",
                options: ["vendrán", "vendría", "vinieran", "vienen"],
                answer: "vendrán",
                hint: "Main clause after si conditional uses future: no vendrán."
            },
            {
                id: "es-a2-u17-q6", level: "A2",
                prompt: "Why can't you say 'Si tendrás tiempo' in Spanish?",
                options: ["Future tense is never used directly after si", "Tener is irregular in the future", "Si requires the subjunctive", "It should be si tendrías"],
                answer: "Future tense is never used directly after si",
                hint: "Rule: never use futuro simple after si in Type 1 conditionals."
            }
        ]
    },
    {
        id: "es-a2-u18",
        level: "A2",
        order: 18,
        title: "Present Perfect (Pretérito Perfecto Compuesto)",
        description: "Form and use the present perfect with haber + past participle. Learn regular and irregular past participles and when to use it vs the preterite.",
        grammarIds: ["es-g-a2-18"],
        vocabIds: ["es-v-a2-049", "es-v-a2-051", "es-v-a2-004", "es-v-a2-059", "es-v-a2-062"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u18-q1", level: "A2",
                prompt: "How is the present perfect formed?",
                options: ["haber (present) + past participle", "ser (present) + past participle", "haber (imperfect) + infinitive", "estar + gerund"],
                answer: "haber (present) + past participle",
                hint: "He / has / ha / hemos / habéis / han + participio."
            },
            {
                id: "es-a2-u18-q2", level: "A2",
                prompt: "What is the past participle of 'hacer'?",
                options: ["hecho", "hacido", "hacendo", "hicido"],
                answer: "hecho",
                hint: "Hacer has an irregular past participle: hecho."
            },
            {
                id: "es-a2-u18-q3", level: "A2",
                prompt: "Complete: '¿___ alguna vez sushi?' (comer — tú)",
                options: ["Has comido", "Comiste", "Comías", "Comerías"],
                answer: "Has comido",
                hint: "Alguna vez + experiential context → present perfect in Spain."
            },
            {
                id: "es-a2-u18-q4", level: "A2",
                prompt: "Complete: 'Hoy ___ mucho.' (trabajar — yo)",
                options: ["he trabajado", "trabajé", "trabajaba", "trabajo"],
                answer: "he trabajado",
                hint: "Hoy (today, still ongoing time frame) → present perfect in Spain."
            },
            {
                id: "es-a2-u18-q5", level: "A2",
                prompt: "What is the past participle of 'ver'?",
                options: ["visto", "vido", "verido", "visto"],
                answer: "visto",
                hint: "Ver is irregular: visto. Others: escrito, abierto, vuelto, puesto, roto."
            },
            {
                id: "es-a2-u18-q6", level: "A2",
                prompt: "Complete: 'Nunca ___ en Argentina.' (estar — yo)",
                options: ["he estado", "estuve", "estaba", "estaré"],
                answer: "he estado",
                hint: "Nunca + experiential meaning → present perfect."
            }
        ]
    },
    {
        id: "es-a2-u19",
        level: "A2",
        order: 19,
        title: "Discourse Connectors",
        description: "Link ideas naturally using connectors of contrast, cause, purpose, consequence, and addition.",
        grammarIds: ["es-g-a2-19"],
        vocabIds: ["es-v-a2-127", "es-v-a2-128", "es-v-a2-129", "es-v-a2-130", "es-v-a2-100"],
        verbIds: [],
        readingIds: ["es-r-a2-1"],
        testQuestions: [
            {
                id: "es-a2-u19-q1", level: "A2",
                prompt: "Complete: 'Estudié mucho; ___, suspendí.'",
                options: ["sin embargo", "porque", "así que", "además"],
                answer: "sin embargo",
                hint: "Sin embargo = however (contrast between effort and result)."
            },
            {
                id: "es-a2-u19-q2", level: "A2",
                prompt: "Complete: '___ era tarde, nos fuimos.' (since/as)",
                options: ["Como", "Porque", "Aunque", "Sin embargo"],
                answer: "Como",
                hint: "Como (clause-initial) = since/as (cause). Porque goes mid-sentence."
            },
            {
                id: "es-a2-u19-q3", level: "A2",
                prompt: "Complete: 'No tenía dinero, ___ no pude ir.'",
                options: ["así que", "sin embargo", "aunque", "ya que"],
                answer: "así que",
                hint: "Así que = so / therefore (consequence)."
            },
            {
                id: "es-a2-u19-q4", level: "A2",
                prompt: "Complete: 'Salimos ___ llovía.' (although)",
                options: ["aunque", "porque", "así que", "como"],
                answer: "aunque",
                hint: "Aunque + indicative = although (factual contrast)."
            },
            {
                id: "es-a2-u19-q5", level: "A2",
                prompt: "Complete: '___, habla tres idiomas.' (moreover / also)",
                options: ["Además", "Sin embargo", "Ya que", "Así que"],
                answer: "Además",
                hint: "Además = moreover, also, in addition."
            },
            {
                id: "es-a2-u19-q6", level: "A2",
                prompt: "Complete: '___ estás aquí, ayúdame.' (since/given that)",
                options: ["Ya que", "Aunque", "Sin embargo", "Así que"],
                answer: "Ya que",
                hint: "Ya que = since / given that (cause — mid or clause-initial)."
            }
        ]
    },
    {
        id: "es-a2-u20",
        level: "A2",
        order: 20,
        title: "Commands — Negative Tú & Formal Usted/Ustedes",
        description: "Give and understand negative commands for tú and formal commands for usted/ustedes using the present subjunctive.",
        grammarIds: ["es-g-a2-20"],
        vocabIds: ["es-v-a2-046", "es-v-a2-047", "es-v-a2-122", "es-v-a2-094", "es-v-a2-095"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u20-q1", level: "A2",
                prompt: "How do you form a negative tú command?",
                options: ["No + present subjunctive (tú form)", "No + infinitive", "No + present tense", "No + preterite"],
                answer: "No + present subjunctive (tú form)",
                hint: "Negative tú commands use the subjunctive: no hables, no comas, no vayas."
            },
            {
                id: "es-a2-u20-q2", level: "A2",
                prompt: "Complete: '¡No ___ tan rápido!' (hablar — tú)",
                options: ["hables", "hablas", "habla", "hablarás"],
                answer: "hables",
                hint: "Negative tú command of hablar → no hables."
            },
            {
                id: "es-a2-u20-q3", level: "A2",
                prompt: "Complete: 'Pase y ___, señor García.' (sentarse — usted)",
                options: ["siéntese", "siéntate", "se siente", "te sientas"],
                answer: "siéntese",
                hint: "Usted command: present subjunctive (siéntese). Pronoun attaches to affirmative command."
            },
            {
                id: "es-a2-u20-q4", level: "A2",
                prompt: "Where do object pronouns go with negative commands?",
                options: ["Before the verb (no me lo digas)", "Attached to the end (dígamelo)", "After the sentence", "Between no and the verb"],
                answer: "Before the verb (no me lo digas)",
                hint: "Negative commands: pronouns go before the verb. Affirmative: attach to end."
            },
            {
                id: "es-a2-u20-q5", level: "A2",
                prompt: "Complete: '¡___ más despacio, por favor!' (hablar — ustedes)",
                options: ["Hablen", "Hablad", "Hablan", "Hablaréis"],
                answer: "Hablen",
                hint: "Ustedes command = subjunctive + -n: hablen, coman, vengan."
            },
            {
                id: "es-a2-u20-q6", level: "A2",
                prompt: "Complete: '¡No ___ — ya lo sé!' (decirme — tú, negative)",
                options: ["me lo digas", "me lo dices", "dime", "lo digas me"],
                answer: "me lo digas",
                hint: "Negative command: no + pronouns + subjunctive: no me lo digas."
            }
        ]
    },
    {
        id: "es-a2-u21",
        level: "A2",
        order: 21,
        title: "Ser vs. Estar — Extended Uses",
        description: "Go beyond the basics to master adjectives that change meaning with ser vs estar, ser for events, and estar for resultant states.",
        grammarIds: ["es-g-a2-21"],
        vocabIds: ["es-v-a2-059", "es-v-a2-060", "es-v-a2-061", "es-v-a2-123", "es-v-a2-122"],
        verbIds: [],
        cultureIds: ["es-c-a2-1"],
        testQuestions: [
            {
                id: "es-a2-u21-q1", level: "A2",
                prompt: "What does 'Estoy aburrido' mean vs 'Soy aburrido'?",
                options: ["I feel bored vs I am a boring person", "I am boring vs I feel bored", "Both mean the same thing", "I am bored vs I was bored"],
                answer: "I feel bored vs I am a boring person",
                hint: "Estar = current state/feeling. Ser = inherent characteristic."
            },
            {
                id: "es-a2-u21-q2", level: "A2",
                prompt: "Complete: 'La reunión ___ a las diez.' (scheduled event)",
                options: ["es", "está", "sea", "esté"],
                answer: "es",
                hint: "Ser is used for events — the meeting 'is' (scheduled for) ten o'clock."
            },
            {
                id: "es-a2-u21-q3", level: "A2",
                prompt: "Complete: 'El teatro ___ construido en 1850.' (passive, process)",
                options: ["fue", "estuvo", "estaba", "era"],
                answer: "fue",
                hint: "Ser + past participle = passive (process/action): fue construido."
            },
            {
                id: "es-a2-u21-q4", level: "A2",
                prompt: "Complete: 'Este pastel ___ riquísimo.' (tastes delicious)",
                options: ["está", "es", "sea", "esté"],
                answer: "está",
                hint: "Estar rico = tastes delicious (current sensory state). Ser rico = to be wealthy."
            },
            {
                id: "es-a2-u21-q5", level: "A2",
                prompt: "Complete: '¿Ya ___ listo para salir?' (ready — estar)",
                options: ["estás", "eres", "seas", "estés"],
                answer: "estás",
                hint: "Listo = ready (estar) / clever (ser). Ready is a temporary state → estar."
            },
            {
                id: "es-a2-u21-q6", level: "A2",
                prompt: "Complete: 'El museo ___ cerrado hoy.' (current state — result)",
                options: ["está", "es", "sea", "será"],
                answer: "está",
                hint: "Estar + past participle = resultant state (the museum is [in a state of] closed)."
            }
        ]
    },
    {
        id: "es-a2-u22",
        level: "A2",
        order: 22,
        title: "Subjunctive with Emotion & Doubt",
        description: "Use the subjunctive after expressions of emotion (alegrarse de que, sentir que) and doubt (no creer que, dudar que) and impersonal expressions.",
        grammarIds: ["es-g-a2-22"],
        vocabIds: ["es-v-a2-059", "es-v-a2-060", "es-v-a2-061", "es-v-a2-062", "es-v-a2-063"],
        verbIds: [],
        testQuestions: [
            {
                id: "es-a2-u22-q1", level: "A2",
                prompt: "Complete: 'Me alegra que ___ aquí.' (estar — tú)",
                options: ["estés", "estás", "estuviste", "estarás"],
                answer: "estés",
                hint: "Alegrarse de que triggers the subjunctive with a different subject."
            },
            {
                id: "es-a2-u22-q2", level: "A2",
                prompt: "Complete: 'No creo que ___ una buena idea.' (ser)",
                options: ["sea", "es", "fue", "será"],
                answer: "sea",
                hint: "No creer que expresses doubt → subjunctive."
            },
            {
                id: "es-a2-u22-q3", level: "A2",
                prompt: "Complete: 'Es posible que ___ mañana.' (llover)",
                options: ["llueva", "llueve", "llovió", "lloverá"],
                answer: "llueva",
                hint: "Impersonal expressions (es posible que, es importante que) → subjunctive."
            },
            {
                id: "es-a2-u22-q4", level: "A2",
                prompt: "Contrast: 'Creo que tiene razón' vs 'No creo que tenga razón' — why the difference?",
                options: ["Creer que (affirmative) = certainty → indicative; no creer que = doubt → subjunctive", "Both should use subjunctive", "Both should use indicative", "Subjunctive is optional in both"],
                answer: "Creer que (affirmative) = certainty → indicative; no creer que = doubt → subjunctive",
                hint: "Affirmative creer que = certainty (indicative). Negative = doubt (subjunctive)."
            },
            {
                id: "es-a2-u22-q5", level: "A2",
                prompt: "Complete: 'Es una lástima que no ___ venir.' (poder — ella)",
                options: ["pueda", "puede", "pudo", "podrá"],
                answer: "pueda",
                hint: "Es una lástima que = it's a shame that → subjunctive."
            },
            {
                id: "es-a2-u22-q6", level: "A2",
                prompt: "Complete: 'Me sorprende que no lo ___.' (saber — tú)",
                options: ["sepas", "sabes", "supiste", "sabrás"],
                answer: "sepas",
                hint: "Sorprender que triggers the subjunctive. Saber subjunctive: sepa/sepas."
            }
        ]
    }
]

// Alias for backward compatibility with index.ts assembler
export const a2Units = esUnitsA2
