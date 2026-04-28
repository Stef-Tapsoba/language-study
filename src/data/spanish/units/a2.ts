// data/spanish/units/a2.ts
// Spanish A2 — functional/communicative redesign (2026-04-24)
// 16 units across 5 blocks, each block ending with a speaking checkpoint gate.
//
// Block 1 — ¿Qué pasó? (U1–U3 + CP1: es-cp-a2-1)
// Block 2 — ¿Cómo se compara? (U4–U6 + CP2: es-cp-a2-2)
// Block 3 — ¿Para quién? (U7–U9 + CP3: es-cp-a2-3)
// Block 4 — ¿Qué pasará? (U10–U12 + CP4: es-cp-a2-4)
// Block 5 — La vida en español (U13–U16 + CP5+CP6)
//
// LatAm-first: ustedes throughout; tú/usted distinction maintained.

import { LessonUnit } from "../../../types"

export const a2Units: LessonUnit[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // BLOCK 1 — ¿Qué pasó? (Past tenses)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "es-a2-u1",
    level: "A2",
    order: 1,
    title: "¿Qué hiciste? — Irregular preterites",
    description: "Master the irregular pretérito indefinido verbs every speaker needs — fui, hice, tuve, dije, vine — and tell stories about anything that happened.",
    grammarIds: ["es-g-a2-1", "es-g-a2-2"],
    vocabIds: ["es-v-a2-1", "es-v-a2-2", "es-v-a2-3", "es-v-a2-6", "es-v-a2-7", "es-v-a2-8", "es-v-a2-15", "es-v-a2-16", "es-v-a2-17"],
    verbIds: [],
    readingIds: ["es-r-a2-1"],
    testQuestions: [
      {
        id: "es-a2-u1-q1", level: "A2",
        prompt: "What is the correct pretérito indefinido of 'tener' for 'yo'?",
        options: ["tenía", "tuve", "tendré", "tenga"],
        answer: "tuve",
        hint: "-UV- family: tuve, tuviste, tuvo…"
      },
      {
        id: "es-a2-u1-q2", level: "A2",
        prompt: "Complete: 'El fin de semana ___ al concierto.' (ir, ella)",
        options: ["iba", "fue", "va", "irá"],
        answer: "fue",
        hint: "Ser and ir share the same irregular preterite forms."
      },
      {
        id: "es-a2-u1-q3", level: "A2",
        prompt: "Which is the correct pretérito indefinido of 'hacer' for 'él'?",
        options: ["hacía", "hace", "hizo", "hará"],
        answer: "hizo",
        hint: "Hacer 3rd singular: hizo (z, not c) to preserve the /s/ sound."
      },
      {
        id: "es-a2-u1-q4", level: "A2",
        prompt: "What does '¿Cómo te fue?' mean?",
        options: ["Where did you go?", "How did it go for you?", "When did you leave?", "What did you do?"],
        answer: "How did it go for you?",
        hint: "This is one of the most natural conversation-openers about the past."
      },
      {
        id: "es-a2-u1-q5", level: "A2",
        prompt: "Choose the correct yo form: 'Ayer ___ a las ocho.' (llegar)",
        options: ["llegé", "llegué", "llegé", "llego"],
        answer: "llegué",
        hint: "-GAR verbs: g + e → gu to preserve the hard-g sound. llegué, pagué, etc."
      },
    ],
  },
  {
    id: "es-a2-u2",
    level: "A2",
    order: 2,
    title: "Antes era diferente — the imperfecto",
    description: "Describe how things were, your past habits, and childhood memories using the pretérito imperfecto — the tense of ongoing states and repeated past actions.",
    grammarIds: ["es-g-a2-3"],
    vocabIds: ["es-v-a2-4", "es-v-a2-9", "es-v-a2-10", "es-v-a2-11", "es-v-a2-12", "es-v-a2-13", "es-v-a2-18"],
    verbIds: [],
    testQuestions: [
      {
        id: "es-a2-u2-q1", level: "A2",
        prompt: "Which verb is irregular in the imperfecto?",
        options: ["hablar", "comer", "ser", "vivir"],
        answer: "ser",
        hint: "Only three verbs are irregular in the imperfecto: ser, ir, ver."
      },
      {
        id: "es-a2-u2-q2", level: "A2",
        prompt: "What is the correct imperfecto of 'ir' for 'nosotros'?",
        options: ["ibamos", "íbamos", "fuimos", "vamos"],
        answer: "íbamos",
        hint: "Ir imperfecto: iba, ibas, iba, íbamos, iban."
      },
      {
        id: "es-a2-u2-q3", level: "A2",
        prompt: "What is the imperfecto of 'querer' for 'yo'? (Watch for stem changes!)",
        options: ["quería", "quiero", "quise", "querré"],
        answer: "quería",
        hint: "Stem-changing verbs do NOT stem-change in the imperfecto. Querer → quería."
      },
      {
        id: "es-a2-u2-q4", level: "A2",
        prompt: "Which sentence correctly uses the imperfecto for a past habit?",
        options: ["El lunes fui al gimnasio.", "Siempre iba al gimnasio los lunes.", "Iré al gimnasio el lunes.", "Voy al gimnasio los lunes."],
        answer: "Siempre iba al gimnasio los lunes.",
        hint: "The imperfecto with 'siempre' signals a repeated past habit."
      },
      {
        id: "es-a2-u2-q5", level: "A2",
        prompt: "'No sabía que estabas aquí.' — Which use of the imperfecto is this?",
        options: ["Habitual past action", "Background weather description", "Reported thought / mental state in the past", "Interrupted action"],
        answer: "Reported thought / mental state in the past",
        hint: "Imperfecto use 4: reporting a mental state (knowing, thinking, believing) at a past moment. Not a habit, not a scene — a state of mind."
      },
    ],
  },
  {
    id: "es-a2-u3",
    level: "A2",
    order: 3,
    title: "Cuéntame lo que pasó — indefinido vs. imperfecto",
    description: "The biggest conceptual leap in A2 Spanish: telling stories naturally using both past tenses — indefinido for events, imperfecto for background and states.",
    grammarIds: ["es-g-a2-4"],
    vocabIds: ["es-v-a2-5", "es-v-a2-6", "es-v-a2-13", "es-v-a2-14", "es-v-a2-15", "es-v-a2-16", "es-v-a2-18"],
    verbIds: [],
    readingIds: ["es-r-a2-2"],
    listeningIds: ["es-l-a2-1"],
    checkpointId: "es-cp-a2-1",
    testQuestions: [
      {
        id: "es-a2-u3-q1", level: "A2",
        prompt: "Complete: 'Dormía cuando ___ el teléfono.' (sonar)",
        options: ["sonaba", "sonó", "suena", "sonará"],
        answer: "sonó",
        hint: "Pattern: imperfecto (ongoing) + cuando + indefinido (interrupting event)."
      },
      {
        id: "es-a2-u3-q2", level: "A2",
        prompt: "Which tense describes the background/scene?",
        options: ["Pretérito indefinido", "Pretérito imperfecto", "Futuro simple", "Condicional"],
        answer: "Pretérito imperfecto",
        hint: "Imperfecto = background, description, ongoing states. Indefinido = events."
      },
      {
        id: "es-a2-u3-q3", level: "A2",
        prompt: "Choose the correct option: 'Normalmente tomaba el metro, pero ese día ___ caminar.' (decidir)",
        options: ["decidía", "decidió", "decide", "decidiría"],
        answer: "decidió",
        hint: "Habitual baseline (imperfecto) vs. single exception (indefinido)."
      },
      {
        id: "es-a2-u3-q4", level: "A2",
        prompt: "Translate the BACKGROUND part: 'It was raining and there were lots of people.'",
        options: ["Llovió y hubo mucha gente.", "Llovía y había mucha gente.", "Llueve y hay mucha gente.", "Llovería y habría mucha gente."],
        answer: "Llovía y había mucha gente.",
        hint: "Weather and ongoing conditions = imperfecto."
      },
      {
        id: "es-a2-u3-q5", level: "A2",
        prompt: "What does 'Conocí a tu hermana en la boda' tell us?",
        options: ["I knew your sister before the wedding.", "I met your sister for the first time at the wedding.", "Your sister used to know me.", "I will meet your sister at the wedding."],
        answer: "I met your sister for the first time at the wedding.",
        hint: "Conocer in indefinido = first meeting. Conocer in imperfecto = pre-existing acquaintance."
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BLOCK 2 — ¿Cómo se compara? (Comparisons, relatives, negation)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "es-a2-u4",
    level: "A2",
    order: 4,
    title: "Más, menos, el mejor — comparatives and superlatives",
    description: "Compare cities, food, people and experiences. Learn the irregular forms mejor/peor/mayor/menor and defend your opinions with real arguments.",
    grammarIds: ["es-g-a2-5"],
    vocabIds: ["es-v-a2-19", "es-v-a2-20", "es-v-a2-21", "es-v-a2-22", "es-v-a2-23", "es-v-a2-24", "es-v-a2-27"],
    verbIds: [],
    readingIds: ["es-r-a2-3"],
    listeningIds: ["es-l-a2-2"],
    testQuestions: [
      {
        id: "es-a2-u4-q1", level: "A2",
        prompt: "What is the correct comparative of 'bueno'?",
        options: ["más bueno", "muy bueno", "mejor", "bonísimo"],
        answer: "mejor",
        hint: "The irregular comparative of bueno is always 'mejor' — never 'más bueno'."
      },
      {
        id: "es-a2-u4-q2", level: "A2",
        prompt: "Complete: 'Esta ciudad es ___ grande ___ la mía.'",
        options: ["más... que", "más... de", "tan... como", "tan... que"],
        answer: "más... que",
        hint: "Comparison with a person or thing: más + adj + que."
      },
      {
        id: "es-a2-u4-q3", level: "A2",
        prompt: "Complete: 'Llegaron ___ veinte personas.' (more than a number)",
        options: ["más que", "más de", "tan como", "menos que"],
        answer: "más de",
        hint: "Before a number: más/menos + DE (not que)."
      },
      {
        id: "es-a2-u4-q4", level: "A2",
        prompt: "Which sentence uses the superlative correctly?",
        options: ["Es el mejor restaurante en la ciudad.", "Es el mejor restaurante de la ciudad.", "Es el restaurante más mejor de la ciudad.", "Es el más mejor restaurante de ciudad."],
        answer: "Es el mejor restaurante de la ciudad.",
        hint: "After superlatives: always 'de' (not 'en'). The city is the reference group."
      },
      {
        id: "es-a2-u4-q5", level: "A2",
        prompt: "My brother is older than me — which is correct?",
        options: ["Mi hermano es más grande que yo.", "Mi hermano es mayor que yo.", "Mi hermano es más mayor que yo.", "Mi hermano es mayor de mí."],
        answer: "Mi hermano es mayor que yo.",
        hint: "Mayor/menor = age and importance. Más grande/más pequeño = physical size."
      },
    ],
  },
  {
    id: "es-a2-u5",
    level: "A2",
    order: 5,
    title: "Dime más — relative pronouns que, donde, lo que",
    description: "Add detail and depth by combining sentences with precision — the grammar that takes you from sounding like a beginner to sounding like an intermediate speaker.",
    grammarIds: ["es-g-a2-6"],
    vocabIds: ["es-v-a2-25", "es-v-a2-26", "es-v-a2-27", "es-v-a2-28", "es-v-a2-41", "es-v-a2-42", "es-v-a2-43", "es-v-a2-49"],
    verbIds: [],
    testQuestions: [
      {
        id: "es-a2-u5-q1", level: "A2",
        prompt: "Combine: 'Tengo una amiga. Ella habla japonés.'",
        options: ["Tengo una amiga lo que habla japonés.", "Tengo una amiga quien habla japonés.", "Tengo una amiga que habla japonés.", "Tengo una amiga donde habla japonés."],
        answer: "Tengo una amiga que habla japonés.",
        hint: "Use 'que' for people and things — the most common relative pronoun."
      },
      {
        id: "es-a2-u5-q2", level: "A2",
        prompt: "Fill in: 'Es el café ___ trabajo todas las mañanas.'",
        options: ["que", "quien", "lo que", "donde"],
        answer: "donde",
        hint: "Use 'donde' for relative clauses about places."
      },
      {
        id: "es-a2-u5-q3", level: "A2",
        prompt: "'No entiendo ___ dices.' — What goes in the blank?",
        options: ["que", "quien", "lo que", "donde"],
        answer: "lo que",
        hint: "'Lo que' = 'what' / 'the thing that' — used when there is no specific noun antecedent."
      },
      {
        id: "es-a2-u5-q4", level: "A2",
        prompt: "Which sentence is correct?",
        options: ["La persona con que fui es mi jefa.", "La persona con quien fui es mi jefa.", "La persona lo que fui es mi jefa.", "La persona donde fui es mi jefa."],
        answer: "La persona con quien fui es mi jefa.",
        hint: "After a preposition referring to a person: prefer 'quien'."
      },
      {
        id: "es-a2-u5-q5", level: "A2",
        prompt: "What does 'Lo que pasa es que...' mean?",
        options: ["What will happen is...", "The thing is that...", "What happened was...", "It turns out that..."],
        answer: "The thing is that...",
        hint: "'Lo que pasa es que...' is one of the most frequent phrases in everyday LatAm Spanish."
      },
    ],
  },
  {
    id: "es-a2-u6",
    level: "A2",
    order: 6,
    title: "Nada, nadie, ya no — expanded negation",
    description: "Express absence, change and restriction with precision — ningún, ya no, apenas, ni siquiera. The textures of real conversation that make you sound fluent.",
    grammarIds: ["es-g-a2-7"],
    vocabIds: ["es-v-a2-29", "es-v-a2-30", "es-v-a2-31", "es-v-a2-32", "es-v-a2-33", "es-v-a2-34"],
    verbIds: [],
    checkpointId: "es-cp-a2-2",
    testQuestions: [
      {
        id: "es-a2-u6-q1", level: "A2",
        prompt: "'Ya no vivo en México.' What does 'ya no' mean here?",
        options: ["I still live in Mexico.", "I no longer live in Mexico.", "I will no longer live in Mexico.", "I have just left Mexico."],
        answer: "I no longer live in Mexico.",
        hint: "'Ya no' marks a change of state — something true before that is no longer true."
      },
      {
        id: "es-a2-u6-q2", level: "A2",
        prompt: "Which is correct: 'No tengo ___ amigo allí.'",
        options: ["ninguno", "ningún", "ningunas", "ningunos"],
        answer: "ningún",
        hint: "Before a masculine singular noun: ningún (apócope — drops the -o)."
      },
      {
        id: "es-a2-u6-q3", level: "A2",
        prompt: "'Apenas dormí.' What does this mean?",
        options: ["I just slept.", "I barely slept.", "I didn't sleep at all.", "I've just woken up."],
        answer: "I barely slept.",
        hint: "'Apenas' = barely / hardly / scarcely."
      },
      {
        id: "es-a2-u6-q4", level: "A2",
        prompt: "Which expresses 'not even I knew'?",
        options: ["Yo no sabía nada.", "Yo nunca supe.", "Ni siquiera yo lo sabía.", "Ya no lo sé."],
        answer: "Ni siquiera yo lo sabía.",
        hint: "'Ni siquiera' = not even. It emphasises the minimum that was not done/known."
      },
      {
        id: "es-a2-u6-q5", level: "A2",
        prompt: "What is the difference between 'ya no' and 'todavía no'?",
        options: ["They mean the same thing.", "'Ya no' = no longer (ended). 'Todavía no' = not yet (hasn't started/finished).", "'Ya no' = not yet. 'Todavía no' = no longer.", "They are both ways to say 'barely'."],
        answer: "'Ya no' = no longer (ended). 'Todavía no' = not yet (hasn't started/finished).",
        hint: "'Ya no fumo' (I quit). 'Todavía no he terminado' (I haven't finished yet)."
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BLOCK 3 — ¿Para quién? (Object pronouns, saber/conocer, verb stems)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "es-a2-u7",
    level: "A2",
    order: 7,
    title: "Para de repetirte (1) — direct object pronouns",
    description: "Replace direct objects with lo/la/los/las — the most visible marker of fluency in spoken Spanish. Every native speaker uses them constantly.",
    grammarIds: ["es-g-a2-8"],
    vocabIds: ["es-v-a2-27", "es-v-a2-28", "es-v-a2-41", "es-v-a2-42", "es-v-a2-43", "es-v-a2-49", "es-v-a2-50"],
    verbIds: [],
    testQuestions: [
      {
        id: "es-a2-u7-q1", level: "A2",
        prompt: "Replace the object: '¿Tienes las llaves?' → '¿___ tienes?'",
        options: ["lo", "la", "los", "las"],
        answer: "las",
        hint: "'Las llaves' is feminine plural → pronoun 'las'."
      },
      {
        id: "es-a2-u7-q2", level: "A2",
        prompt: "Replace the object: 'Perdí el documento.' → '___ perdí.'",
        options: ["lo", "la", "los", "las"],
        answer: "lo",
        hint: "'El documento' is masculine singular → pronoun 'lo'."
      },
      {
        id: "es-a2-u7-q3", level: "A2",
        prompt: "Where does the pronoun go with a modal + infinitive? 'Quiero ver la película.'",
        options: ["Quiero ver la. (before infinitive only)", "La quiero ver. OR Quiero verla. (both correct)", "Quiero la ver. (between the two verbs)", "La quiero ver. (only before the modal)"],
        answer: "La quiero ver. OR Quiero verla. (both correct)",
        hint: "With modal + infinitive, the pronoun can go before the modal OR attached to the infinitive."
      },
      {
        id: "es-a2-u7-q4", level: "A2",
        prompt: "Which is correct for the negative imperative?",
        options: ["¡No cómelo!", "¡No lo comas!", "¡Cómelo no!", "¡No lo come!"],
        answer: "¡No lo comas!",
        hint: "Negative imperative: pronoun goes BEFORE the verb. Affirmative: attach to end."
      },
      {
        id: "es-a2-u7-q5", level: "A2",
        prompt: "What is the direct object in 'Llamo a mi madre todos los domingos'?",
        options: ["todos los domingos", "a mi madre", "Llamo", "los domingos"],
        answer: "a mi madre",
        hint: "Test: ¿A quién llamo? → a mi madre. The 'a' personal marks the OD here."
      },
    ],
  },
  {
    id: "es-a2-u8",
    level: "A2",
    order: 8,
    title: "Para de repetirte (2) — le/les y la regla se lo",
    description: "Complete the object pronoun system with indirect objects and the essential se lo/se la pattern — heard constantly in natural Spanish conversation.",
    grammarIds: ["es-g-a2-9"],
    vocabIds: ["es-v-a2-35", "es-v-a2-36", "es-v-a2-37", "es-v-a2-38", "es-v-a2-44", "es-v-a2-46", "es-v-a2-47", "es-v-a2-48"],
    verbIds: [],
    testQuestions: [
      {
        id: "es-a2-u8-q1", level: "A2",
        prompt: "Replace: 'Doy el libro a María.' → '___ doy el libro.'",
        options: ["Lo", "La", "Le", "Les"],
        answer: "Le",
        hint: "María is the indirect object (to whom). Use le (sg., no gender)."
      },
      {
        id: "es-a2-u8-q2", level: "A2",
        prompt: "Combine OI + OD: 'Le doy el libro a ella.' → '___ doy.'",
        options: ["Le lo", "Lo le", "Se lo", "Lo se"],
        answer: "Se lo",
        hint: "When le/les comes before lo/la/los/las → le ALWAYS becomes se. Se lo ✓ (never le lo)."
      },
      {
        id: "es-a2-u8-q3", level: "A2",
        prompt: "'Les mandé las fotos.' → '___ mandé.'",
        options: ["Se lo", "Se las", "Les las", "Las les"],
        answer: "Se las",
        hint: "Les (plural OI) + las (fem. pl. OD) → se las."
      },
      {
        id: "es-a2-u8-q4", level: "A2",
        prompt: "What does 'le/les' distinguish in Spanish?",
        options: ["Gender only", "Number only (singular/plural)", "Both gender and number", "Neither — it's invariable for both"],
        answer: "Number only (singular/plural)",
        hint: "Le = singular OI (him/her/you formal). Les = plural. No gender distinction."
      },
      {
        id: "es-a2-u8-q5", level: "A2",
        prompt: "Why is 'Se lo dije a ella' not redundant?",
        options: ["It is redundant and wrong.", "The 'a ella' clarifies who 'se' refers to — it's natural Spanish.", "You must use either 'se lo' or 'a ella', never both.", "It is only correct in Spain, not Latin America."],
        answer: "The 'a ella' clarifies who 'se' refers to — it's natural Spanish.",
        hint: "Since 'se' can refer to him/her/them/you, adding 'a + person' for clarity is normal and expected."
      },
    ],
  },
  {
    id: "es-a2-u9",
    level: "A2",
    order: 9,
    title: "Saber, conocer y más verbos clave",
    description: "The saber/conocer contrast in the past plus stem-changing preterites (durmió, pidió, sintió) — the final piece needed for sophisticated past-tense storytelling.",
    grammarIds: ["es-g-a2-10"],
    vocabIds: ["es-v-a2-40", "es-v-a2-44", "es-v-a2-45", "es-v-a2-46"],
    verbIds: [],
    readingIds: ["es-r-a2-4"],
    checkpointId: "es-cp-a2-3",
    testQuestions: [
      {
        id: "es-a2-u9-q1", level: "A2",
        prompt: "'Supe la noticia esta mañana.' What does 'supe' mean here?",
        options: ["I knew the news all morning.", "I found out the news this morning.", "I will know the news this morning.", "I used to know the news."],
        answer: "I found out the news this morning.",
        hint: "Saber in indefinido = 'found out' — the specific moment knowledge began."
      },
      {
        id: "es-a2-u9-q2", level: "A2",
        prompt: "'Conocí a mi mejor amiga en la universidad.' What does this tell us?",
        options: ["I knew my best friend at university (ongoing).", "I met my best friend for the first time at university.", "I will meet my best friend at university.", "I used to know her at university."],
        answer: "I met my best friend for the first time at university.",
        hint: "Conocer in indefinido = first meeting / first visit."
      },
      {
        id: "es-a2-u9-q3", level: "A2",
        prompt: "What is the correct preterite of 'dormir' for 'él'?",
        options: ["dormió", "durmió", "durmieron", "durmó"],
        answer: "durmió",
        hint: "Dormir: o→u in 3rd person only: durmió / durmieron."
      },
      {
        id: "es-a2-u9-q4", level: "A2",
        prompt: "'¿Qué pidieron de postre?' — Which stem change is shown?",
        options: ["o→u in 1st person", "e→i in 3rd person", "e→ie in all persons", "No stem change — regular preterite"],
        answer: "e→i in 3rd person",
        hint: "Pedir: e→i in 3rd person preterite: pidió / pidieron."
      },
      {
        id: "es-a2-u9-q5", level: "A2",
        prompt: "Which form is WRONG? (stem-changing preterite)",
        options: ["durmió", "sintió", "prefirió", "dormió"],
        answer: "dormió",
        hint: "Dormir 3rd singular must be 'durmió' (o→u). 'Dormió' is the wrong form."
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BLOCK 4 — ¿Qué pasará? (Future, conditional, si clauses)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "es-a2-u10",
    level: "A2",
    order: 10,
    title: "¿Qué pasará? — the futuro simple",
    description: "Make predictions, promises and plans with the futuro simple. Learn the 12 irregular stems and the essential cuando + future rule.",
    grammarIds: ["es-g-a2-11"],
    vocabIds: ["es-v-a2-51", "es-v-a2-52", "es-v-a2-53", "es-v-a2-54", "es-v-a2-65", "es-v-a2-66"],
    verbIds: [],
    listeningIds: ["es-l-a2-3"],
    testQuestions: [
      {
        id: "es-a2-u10-q1", level: "A2",
        prompt: "What is the futuro simple of 'tener' for 'yo'?",
        options: ["tendré", "tenía", "tuve", "tenga"],
        answer: "tendré",
        hint: "Tener is irregular in the future: tendr- + endings."
      },
      {
        id: "es-a2-u10-q2", level: "A2",
        prompt: "Complete: 'Cuando ___ los resultados, te llamo.' (saber, yo)",
        options: ["sé", "sabré", "supe", "sepa"],
        answer: "sepa",
        hint: "Cuando + future meaning → use the special future form (sepa), not present indicative (sé) or futuro simple (sabré). You will study this form as the 'subjunctive' at B1."
      },
      {
        id: "es-a2-u10-q3", level: "A2",
        prompt: "'¿Quién será a estas horas?' — What is the 'futuro de probabilidad' expressing here?",
        options: ["A future prediction", "I wonder who it is / It must be someone", "A promise", "A formal announcement"],
        answer: "I wonder who it is / It must be someone",
        hint: "The futuro simple can express probability/speculation about the present."
      },
      {
        id: "es-a2-u10-q4", level: "A2",
        prompt: "What is the future of 'hacer' for 'nosotros'?",
        options: ["haceremos", "harémos", "haremos", "hacíamos"],
        answer: "haremos",
        hint: "Hacer is irregular: har- + endings. No accent on -emos."
      },
      {
        id: "es-a2-u10-q5", level: "A2",
        prompt: "When is 'ir a + infinitive' more natural than the futuro simple?",
        options: ["For formal announcements in news reports", "For distant or aspirational plans", "For near-future decided plans in conversation", "For predictions about the weather"],
        answer: "For near-future decided plans in conversation",
        hint: "'Voy a llamar esta noche' (near, decided, conversational). Futuro for predictions/aspirations."
      },
    ],
  },
  {
    id: "es-a2-u11",
    level: "A2",
    order: 11,
    title: "¿Qué harías? — the condicional",
    description: "Make polite requests, express wishes and give advice with the condicional simple — the tense you need the moment you walk into a hotel, restaurant, or formal situation.",
    grammarIds: ["es-g-a2-12"],
    vocabIds: ["es-v-a2-54", "es-v-a2-55", "es-v-a2-56", "es-v-a2-62"],
    verbIds: [],
    testQuestions: [
      {
        id: "es-a2-u11-q1", level: "A2",
        prompt: "How do you politely say 'I would like a table for two' in a restaurant?",
        options: ["Quiero una mesa para dos.", "Quisiera una mesa para dos.", "Quería una mesa para dos.", "Quise una mesa para dos."],
        answer: "Quisiera una mesa para dos.",
        hint: "Querría / Quisiera = polite conditional form. More appropriate than 'quiero' with strangers."
      },
      {
        id: "es-a2-u11-q2", level: "A2",
        prompt: "What are the condicional endings for -ar/-er/-ir verbs?",
        options: ["-é, -ás, -á, -emos, -én", "-ía, -ías, -ía, -íamos, -ían", "-aba, -abas, -aba, -ábamos, -aban", "-é, -iste, -ó, -imos, -ieron"],
        answer: "-ía, -ías, -ía, -íamos, -ían",
        hint: "Condicional endings = same as -er/-ir imperfecto endings. All three groups take the same endings."
      },
      {
        id: "es-a2-u11-q3", level: "A2",
        prompt: "Translate: 'You should rest more.' (soft advice)",
        options: ["Debes descansar más.", "Descansa más.", "Deberías descansar más.", "Descansarás más."],
        answer: "Deberías descansar más.",
        hint: "'Deberías' = soft advice. 'Debes' is more direct/obligatory."
      },
      {
        id: "es-a2-u11-q4", level: "A2",
        prompt: "What is the condicional of 'poder' for 'usted'?",
        options: ["podía", "pudo", "podrá", "podría"],
        answer: "podría",
        hint: "Poder irregular: podr- + condicional ending -ía."
      },
      {
        id: "es-a2-u11-q5", level: "A2",
        prompt: "'Yo que tú, hablaría con el jefe directamente.' What is this expressing?",
        options: ["An obligation", "A polite request", "Advice — 'if I were you, I would...'", "A future prediction"],
        answer: "Advice — 'if I were you, I would...'",
        hint: "'Yo que tú / Yo en tu lugar + condicional' = giving advice from the other person's perspective."
      },
    ],
  },
  {
    id: "es-a2-u12",
    level: "A2",
    order: 12,
    title: "Si hago esto, pasará aquello — si clauses + acabar de + desde hace",
    description: "Real conditional clauses, talking about what just happened, and expressing how long you've been doing something — three essential structures for natural conversation.",
    grammarIds: ["es-g-a2-13"],
    vocabIds: ["es-v-a2-63", "es-v-a2-64"],
    verbIds: [],
    checkpointId: "es-cp-a2-4",
    testQuestions: [
      {
        id: "es-a2-u12-q1", level: "A2",
        prompt: "Complete the si clause: 'Si ___ tiempo, llámame.'",
        options: ["tendrás", "tendrías", "tienes", "tengas"],
        answer: "tienes",
        hint: "Type 1 si clause: si + PRESENT indicative. Never future or conditional after si."
      },
      {
        id: "es-a2-u12-q2", level: "A2",
        prompt: "Translate: 'I've just arrived.'",
        options: ["Llegué ahora.", "Acabo de llegar.", "Llegaba ahora.", "Acabé de llegar."],
        answer: "Acabo de llegar.",
        hint: "'Acabar de + infinitive' = have just done something."
      },
      {
        id: "es-a2-u12-q3", level: "A2",
        prompt: "Translate: 'I've been living here for three years.' (action still ongoing)",
        options: ["He vivido aquí por tres años.", "Vivía aquí desde hace tres años.", "Vivo aquí desde hace tres años.", "Viví aquí hace tres años."],
        answer: "Vivo aquí desde hace tres años.",
        hint: "Ongoing action: use PRESENT tense + desde hace. NOT present perfect."
      },
      {
        id: "es-a2-u12-q4", level: "A2",
        prompt: "What is the key difference between si and cuando with future meaning?",
        options: ["Si uses future tense; cuando uses present.", "Si uses present tense; cuando uses future tense.", "Both use future tense.", "Both use present tense."],
        answer: "Si uses present tense; cuando uses future tense.",
        hint: "Si (condition): si + presente. Cuando (temporal, future): cuando + futuro simple."
      },
      {
        id: "es-a2-u12-q5", level: "A2",
        prompt: "Which correctly uses acabar de in a past narrative context?",
        options: ["Cuando llegué, ella acabó de salir.", "Cuando llegué, ella acababa de salir.", "Cuando llegué, ella acaba de salir.", "Cuando llegué, ella habrá salido."],
        answer: "Cuando llegué, ella acababa de salir.",
        hint: "Acabar de in imperfecto = 'had just done' (in past narrative)."
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BLOCK 5 — La vida en español (Health, travel, feelings, fluency)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "es-a2-u13",
    level: "A2",
    order: 13,
    title: "Tu cuerpo, tu salud — health language",
    description: "Describe symptoms, navigate a doctor's appointment or pharmacy, and understand medical instructions — entirely in Spanish. Survival language for any trip.",
    grammarIds: ["es-g-a2-14"],
    vocabIds: ["es-v-a2-67", "es-v-a2-68", "es-v-a2-69", "es-v-a2-70", "es-v-a2-71", "es-v-a2-72", "es-v-a2-73"],
    verbIds: [],
    cultureIds: ["es-c-a2-1"],
    testQuestions: [
      {
        id: "es-a2-u13-q1", level: "A2",
        prompt: "How do you say 'My head hurts' using the doler structure?",
        options: ["Yo duelo la cabeza.", "Duelo mi cabeza.", "Me duele la cabeza.", "La cabeza duele mí."],
        answer: "Me duele la cabeza.",
        hint: "Doler works like gustar: OI pronoun + duele/duelen + body part."
      },
      {
        id: "es-a2-u13-q2", level: "A2",
        prompt: "'Me duelen los pies.' What does this mean?",
        options: ["My foot hurts.", "My feet hurt.", "Their feet hurt.", "Your feet hurt."],
        answer: "My feet hurt.",
        hint: "Me duelen = my (parts) hurt. Los pies is plural → duelen."
      },
      {
        id: "es-a2-u13-q3", level: "A2",
        prompt: "¡Ojo! 'Estar constipado/a' in Spanish means:",
        options: ["To be constipated", "To be congested / have a stuffy nose", "To be exhausted", "To have a fever"],
        answer: "To be congested / have a stuffy nose",
        hint: "False friend! 'Constipado/a' in Spanish = nasal congestion, NOT the English meaning."
      },
      {
        id: "es-a2-u13-q4", level: "A2",
        prompt: "Which is the softest / most polite advice in a medical context?",
        options: ["Tienes que guardar cama.", "Hay que guardar cama.", "Deberías guardar cama.", "Guarda cama."],
        answer: "Deberías guardar cama.",
        hint: "'Deberías' = soft recommendation. 'Tienes que' = direct obligation. 'Hay que' = impersonal."
      },
      {
        id: "es-a2-u13-q5", level: "A2",
        prompt: "How do you say 'I have a sore throat' using tener?",
        options: ["Tengo la garganta.", "Estoy con garganta.", "Tengo dolor de garganta.", "Me duele mi garganta."],
        answer: "Tengo dolor de garganta.",
        hint: "tener dolor de + body part = to have a ... ache/sore."
      },
    ],
  },
  {
    id: "es-a2-u14",
    level: "A2",
    order: 14,
    title: "De viaje — travel integration",
    description: "Book a hotel, navigate Latin American transport, and narrate what went wrong on a trip. All your A2 grammar working together in real situations.",
    grammarIds: ["es-g-a2-15"],
    vocabIds: ["es-v-a2-55", "es-v-a2-56", "es-v-a2-57", "es-v-a2-58", "es-v-a2-59", "es-v-a2-60", "es-v-a2-61", "es-v-a2-62"],
    verbIds: [],
    readingIds: ["es-r-a2-5"],
    listeningIds: ["es-l-a2-4"],
    cultureIds: ["es-c-a2-2"],
    testQuestions: [
      {
        id: "es-a2-u14-q1", level: "A2",
        prompt: "What is the polite way to book a hotel room?",
        options: ["Quiero una habitación doble.", "Querría una habitación doble.", "Dame una habitación doble.", "Necesito habitación doble."],
        answer: "Querría una habitación doble.",
        hint: "Use condicional for polite requests in service situations."
      },
      {
        id: "es-a2-u14-q2", level: "A2",
        prompt: "What does 'boleto' mean in LatAm Spanish?",
        options: ["Luggage", "Ticket", "Platform", "Refund"],
        answer: "Ticket",
        hint: "'Boleto' = ticket in most of Latin America. 'Billete' is used in Spain."
      },
      {
        id: "es-a2-u14-q3", level: "A2",
        prompt: "In a travel narrative, which tense describes the background scene?",
        options: ["Futuro simple", "Pretérito imperfecto", "Condicional", "Presente de subjuntivo"],
        answer: "Pretérito imperfecto",
        hint: "The 5-step narrative: imperfecto (scene) → indefinido (events) → condicional (reported speech)."
      },
      {
        id: "es-a2-u14-q4", level: "A2",
        prompt: "What does 'demora' or 'retraso' mean?",
        options: ["Cancellation", "Delay", "Platform", "Boarding"],
        answer: "Delay",
        hint: "'La demora / el retraso' = delay. 'Cancelado/a' = cancelled."
      },
      {
        id: "es-a2-u14-q5", level: "A2",
        prompt: "Complete: 'Le pregunté al empleado si ___ alguna alternativa.' (haber, condicional)",
        options: ["hay", "había", "habrá", "habría"],
        answer: "habría",
        hint: "Reported speech in the past: future → condicional. '¿Hay alguna alternativa?' → si habría alguna."
      },
    ],
  },
  {
    id: "es-a2-u15",
    level: "A2",
    order: 15,
    title: "Cómo me siento, qué pienso — feelings and opinions",
    description: "Express nuanced emotions, defend your point of view, agree and disagree politely — the language of real A2 conversation beyond just exchanging information.",
    grammarIds: ["es-g-a2-16"],
    vocabIds: ["es-v-a2-74", "es-v-a2-75", "es-v-a2-76", "es-v-a2-77", "es-v-a2-78", "es-v-a2-79", "es-v-a2-80", "es-v-a2-81", "es-v-a2-82", "es-v-a2-87", "es-v-a2-88"],
    verbIds: [],
    cultureIds: ["es-c-a2-3"],
    checkpointId: "es-cp-a2-5",
    testQuestions: [
      {
        id: "es-a2-u15-q1", level: "A2",
        prompt: "'Me puse nerviosa cuando la vi.' What does ponerse describe here?",
        options: ["An ongoing emotional state", "The transition into a new emotional state", "A habitual emotion", "A future emotion"],
        answer: "The transition into a new emotional state",
        hint: "'Ponerse + adjective' = the moment of becoming nervous/sad/happy. Compare: 'Estaba nerviosa' (ongoing state)."
      },
      {
        id: "es-a2-u15-q2", level: "A2",
        prompt: "'Me parece injusto.' What verb structure is this?",
        options: ["Parecer used like ser", "Parecer used like gustar (OI + parece + noun/adj)", "Parecer with subjunctive", "Parecer with direct object"],
        answer: "Parecer used like gustar (OI + parece + noun/adj)",
        hint: "'Parecer' works like gustar: OI pronoun + parece/parecen + thing. 'Me parece injusto' = it seems unjust to me."
      },
      {
        id: "es-a2-u15-q3", level: "A2",
        prompt: "Which grammar structure comes after creer/pensar at A2?",
        options: ["que + subjunctive", "que + infinitive", "que + indicative", "de + infinitive"],
        answer: "que + indicative",
        hint: "At A2, after creer/pensar/parecer always use indicative: 'Creo que es bueno'. Subjunctive after negated opinion is B1."
      },
      {
        id: "es-a2-u15-q4", level: "A2",
        prompt: "Which phrase expresses polite disagreement?",
        options: ["Tienes toda la razón.", "Estoy de acuerdo.", "No estoy del todo de acuerdo.", "Exactamente."],
        answer: "No estoy del todo de acuerdo.",
        hint: "'No estoy del todo de acuerdo' = I'm not entirely in agreement (polite)."
      },
      {
        id: "es-a2-u15-q5", level: "A2",
        prompt: "What does 'según yo' mean in colloquial Latin American Spanish?",
        options: ["According to him", "In my opinion / I think", "It seems to me", "As far as I know"],
        answer: "In my opinion / I think",
        hint: "'Según yo' is widely used across Mexico, Colombia and other LatAm countries to mean 'in my opinion'."
      },
    ],
  },
  {
    id: "es-a2-u16",
    level: "A2",
    order: 16,
    title: "Habla con confianza — connectors and fluency",
    description: "The final unit: connectors, discourse markers, and storytelling structure that transform correct sentences into natural, fluent Spanish speech.",
    grammarIds: ["es-g-a2-17"],
    vocabIds: ["es-v-a2-83", "es-v-a2-84", "es-v-a2-85", "es-v-a2-86", "es-v-a2-89", "es-v-a2-90"],
    verbIds: [],
    checkpointId: "es-cp-a2-6",
    testQuestions: [
      {
        id: "es-a2-u16-q1", level: "A2",
        prompt: "Choose the correct connector: 'Estudié mucho; ___, no aprobé el examen.'",
        options: ["además", "por eso", "sin embargo", "así que"],
        answer: "sin embargo",
        hint: "'Sin embargo' = however (contrast). 'Así que' = so (consequence). 'Por eso' = that's why."
      },
      {
        id: "es-a2-u16-q2", level: "A2",
        prompt: "'No tenía dinero, ___ no pude ir.' — cause/consequence",
        options: ["sin embargo", "aunque", "así que", "además"],
        answer: "así que",
        hint: "'Así que' = so / and so — connects cause to consequence."
      },
      {
        id: "es-a2-u16-q3", level: "A2",
        prompt: "What is the function of 'o sea' in spoken Spanish?",
        options: ["To express surprise", "To reformulate or clarify what you just said", "To add a contrasting idea", "To express cause"],
        answer: "To reformulate or clarify what you just said",
        hint: "'O sea' = 'I mean' / 'in other words' — very high frequency in LatAm spoken Spanish."
      },
      {
        id: "es-a2-u16-q4", level: "A2",
        prompt: "In the 5-step story structure, which tense comes FIRST?",
        options: ["Indefinido — the plot events", "Imperfecto — setting the scene", "Condicional — reported speech", "Futuro — what will happen"],
        answer: "Imperfecto — setting the scene",
        hint: "Step 1: Set the scene with imperfecto (Era... / Estaba... / Había...). Then indefinido for events."
      },
      {
        id: "es-a2-u16-q5", level: "A2",
        prompt: "'Llegué tarde, ___, con más de una hora de retraso.' What fits?",
        options: ["sin embargo", "o sea", "por eso", "además"],
        answer: "o sea",
        hint: "'O sea' reformulates or clarifies: 'I arrived late — I mean, more than an hour late'."
      },
    ],
  },
]

// Alias for backward compatibility
export const esUnitsA2 = a2Units
