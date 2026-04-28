import { GrammarLesson } from "../../../../types"

// Block 1 — "El pasado con profundidad" (Units 1–3)
// Pluscuamperfecto, three-tense narration integration, passive voice

export const block1Lessons: GrammarLesson[] = [
  {
    id: "es-g-b1-1",
    level: "B1",
    title: "Pluscuamperfecto — The Past Before the Past",
    explanation: {
      native: `The pluscuamperfecto (pluperfect) expresses an action that had already happened BEFORE another past event. It adds a third temporal layer to your narration — the backstory behind the story.

Formation: haber in imperfecto + participio
  había / habías / había / habíamos / habíais / habían + participio

The participios are the same as the pretérito perfecto — irregular ones too:
  hacer → hecho, ver → visto, decir → dicho, poner → puesto,
  volver → vuelto, escribir → escrito, abrir → abierto, romper → roto

Key adverbs slot between había and the participio:
  ya había comido (had already eaten)
  todavía no había llegado (hadn't arrived yet)
  nunca había visto eso (had never seen that)

The three-tense timeline:
  PQP (había hecho) → Indefinido (hice) → Presente (tengo)
  había comido   →    llegué     →   tengo hambre

LatAm note: In Latin American Spanish the pluscuamperfecto works identically to Peninsular usage — it always refers back behind a past indefinido event.`,
      target: `El pluscuamperfecto expresa una acción que ya había ocurrido ANTES de otro evento pasado. Añade una tercera capa temporal a tu narración — la historia previa detrás de la historia.

Formación: haber en imperfecto + participio
  había / habías / había / habíamos / habíais / habían + participio

Los participios son los mismos que en el pretérito perfecto — también los irregulares:
  hacer → hecho, ver → visto, decir → dicho, poner → puesto,
  volver → vuelto, escribir → escrito, abrir → abierto, romper → roto

Los adverbios clave van entre había y el participio:
  ya había comido / todavía no había llegado / nunca había visto eso

La línea de tiempo de tres tiempos:
  PQP (había hecho) → Indefinido (hice) → Presente (tengo)`,
    },
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros", "ellos / ustedes"],
      verbs: [
        { label: "comer (regular)", forms: ["había comido", "habías comido", "había comido", "habíamos comido", "habían comido"] },
        { label: "hacer (irregular)", forms: ["había hecho", "habías hecho", "había hecho", "habíamos hecho", "habían hecho"] },
        { label: "ver (irregular)", forms: ["había visto", "habías visto", "había visto", "habíamos visto", "habían visto"] },
      ],
    },
    rules: [
      {
        condition: "Action completed BEFORE another past event",
        result: "Use pluscuamperfecto — había + participio",
        examples: [
          { native: "Cuando llegué, ella ya se había ido.", translation: "When I arrived, she had already left." },
          { native: "No pude entrar porque había olvidado las llaves.", translation: "I couldn't get in because I had forgotten the keys." },
        ],
      },
      {
        condition: "Background reason or prior context",
        result: "Pluscuamperfecto explains WHY the past situation was the way it was",
        examples: [
          { native: "Estaba cansado porque no había dormido bien.", translation: "He was tired because he hadn't slept well." },
          { native: "Conocía la ciudad — había vivido allí dos años.", translation: "She knew the city — she had lived there for two years." },
        ],
      },
      {
        condition: "Backstory in narration",
        result: "PQP sets up events that happened before the main story begins",
        examples: [
          { native: "Me contó que había perdido el trabajo el mes anterior.", translation: "He told me he had lost his job the month before." },
          { native: "Resultó que se habían conocido en Madrid.", translation: "It turned out they had met in Madrid." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Quick formation shortcut: the pluscuamperfecto is exactly like the pretérito perfecto (he comido), but you swap he/has/ha for había/habías/había. If you know your imperfecto of haber, you have the pluscuamperfecto.",
      },
      {
        type: "forward-ref",
        content: "The pluscuamperfecto also appears in indirect speech (Unit 11) — 'dijo que había terminado' — and in type-3 si-clauses (Unit 8).",
        refId: "es-g-b1-11",
      },
    ],
    examples: [
      { native: "Cuando llegué al piso, el casero ya se había ido.", translation: "When I arrived at the flat, the landlord had already left." },
      { native: "Me había dejado un mensaje, pero yo no había visto el móvil.", translation: "He had left me a message, but I hadn't seen my phone." },
      { native: "Nunca había estado allí en mi vida.", translation: "I had never been there in my life." },
      { native: "Estaba agotada porque no había dormido nada en el autobús.", translation: "She was exhausted because she hadn't slept at all on the bus." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Cómo fue tu primer día en la nueva ciudad?", translation: "How was your first day in the new city?" },
          { native: "Un desastre. Cuando llegué al piso, el casero ya se había ido. Me había dejado un mensaje, pero yo no había visto el móvil. Por suerte, había dejado las llaves con la vecina.", translation: "A disaster. When I arrived at the flat, the landlord had already left. He had left me a message, but I hadn't seen my phone. Luckily, he had left the keys with the neighbour." },
        ],
        annotation: "Three PQP forms: se había ido, había dejado (x2) — all describing what had happened before the arrival.",
      },
    ],
    inlineVocab: [
      { word: "ya", translation: "already" },
      { word: "todavía no", translation: "not yet" },
      { word: "nunca / jamás", translation: "never" },
      { word: "en aquel momento", translation: "at that moment" },
      { word: "agotado/a", translation: "exhausted" },
      { word: "el casero / la casera", translation: "the landlord / landlady" },
      { word: "resultó que", translation: "it turned out that" },
      { word: "por lo visto", translation: "apparently" },
      { word: "la víspera", translation: "the day/night before" },
      { word: "al día siguiente", translation: "the next day" },
    ],
  },
  {
    id: "es-g-b1-2",
    level: "B1",
    title: "Three-Tense Narration — Indefinido + Imperfecto + Pluscuamperfecto",
    explanation: {
      native: `Three-tense narration is the mark of a B1 Spanish speaker. Combining indefinido, imperfecto, and pluscuamperfecto lets you tell any story — what was happening (scene), what happened (events), and what had already happened (backstory).

THE THREE-TENSE SYSTEM:
• Imperfecto — background, scene, states, habits → "The stage / atmosphere"
  Era tarde. La ciudad dormía. Caminaba rápido.

• Indefinido — plot events — things that moved the story forward → "The action"
  De repente, oyó pasos. Se giró. Aceleró el paso.

• Pluscuamperfecto — pre-story events, backstory → "The flashback"
  Había perdido el último autobús. Había planeado volver antes.

DECISION QUESTIONS:
  "Is this background, atmosphere, or a habitual state?" → Imperfecto
  "Did this event happen and move the story forward?" → Indefinido
  "Did this happen BEFORE the main events?" → Pluscuamperfecto

KEY CONNECTORS:
  For PQP (prior events): la víspera, anteriormente, hasta entonces, ya había...
  For imperfecto (description): en aquella época, normalmente, todos los días
  For indefinido (action): de repente, fue entonces cuando, finalmente, así que`,
      target: `La narración en tres tiempos es la marca del hablante de nivel B1. Combinar indefinido, imperfecto y pluscuamperfecto te permite contar cualquier historia.

EL SISTEMA DE TRES TIEMPOS:
• Imperfecto — fondo, escena, estados, hábitos
• Indefinido — eventos de la trama que hacen avanzar la historia
• Pluscuamperfecto — eventos previos a la historia principal

PREGUNTAS DE DECISIÓN:
  "¿Es esto fondo, atmósfera o un estado habitual?" → Imperfecto
  "¿Ocurrió este evento y la historia avanzó?" → Indefinido
  "¿Ocurrió esto ANTES de los eventos principales?" → Pluscuamperfecto`,
    },
    rules: [
      {
        condition: "Imperfecto vs Indefinido — the core contrast",
        result: "Imperfecto = description / background / habit. Indefinido = specific completed event.",
        examples: [
          { native: "Cuando era niño, comía cereales. (hábito → imperfecto)", translation: "When I was a child, I used to eat cereal. (habit → imperfect)" },
          { native: "Esa mañana, comí cereales. (evento específico → indefinido)", translation: "That morning, I ate cereal. (specific event → preterite)" },
        ],
      },
      {
        condition: "PQP vs Indefinido — the backstory contrast",
        result: "PQP = before the main story. Indefinido = the main story events themselves.",
        examples: [
          { native: "Cuando llegué (indef.), ella ya había preparado (PQP) la cena.", translation: "When I arrived, she had already prepared dinner." },
          { native: "No pude (indef.) porque había olvidado (PQP) las llaves.", translation: "I couldn't because I had forgotten the keys." },
        ],
      },
      {
        condition: "Sudden interruption pattern",
        result: "Imperfecto (ongoing action) + indefinido (interrupting event)",
        examples: [
          { native: "Dormía cuando sonó el teléfono.", translation: "She was sleeping when the phone rang." },
          { native: "Mientras caminaba, empezó a llover.", translation: "While he was walking, it started to rain." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "The most common B1 error: using only indefinido (losing the imperfecto) OR overusing imperfecto to avoid risk. Both flatten the narration — a good story needs all three layers.",
      },
      {
        type: "tip",
        content: "'De repente' (suddenly) is almost always followed by indefinido — it signals a sudden completed event that advances the plot.",
      },
    ],
    examples: [
      { native: "Era tarde y llovía. De repente, oyó un ruido extraño.", translation: "It was late and it was raining. Suddenly, she heard a strange noise." },
      { native: "Había planeado salir antes, pero se había quedado dormida.", translation: "She had planned to leave earlier, but she had overslept." },
      { native: "Cogió el metro a las ocho. Normalmente tardaba veinte minutos.", translation: "He took the metro at eight. Normally it took twenty minutes." },
      { native: "Finalmente llegó con cinco minutos de retraso. La contrataron dos días después.", translation: "She finally arrived five minutes late. They hired her two days later." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Cómo fue la entrevista?", translation: "How did the interview go?" },
          { native: "Bien al final, pero fue complicado. Había olvidado cargar el móvil, el metro tuvo un problema técnico, y llegué tarde. Por suerte, la responsable también había tenido el mismo problema ese día y se rio cuando se lo expliqué.", translation: "Well in the end, but it was complicated. I had forgotten to charge my phone, the metro had a technical problem, and I arrived late. Luckily, the manager had had the same problem that day and laughed when I explained." },
        ],
        annotation: "PQP (había olvidado, había tenido), indefinido (fue, tuvo, llegué, se rio, expliqué), imperfecto (era complicado — implied).",
      },
    ],
    inlineVocab: [
      { word: "de repente / de pronto", translation: "suddenly" },
      { word: "fue entonces cuando", translation: "that was when" },
      { word: "anteriormente", translation: "previously / before that" },
      { word: "hasta entonces", translation: "until then" },
      { word: "al final / finalmente", translation: "in the end / finally" },
      { word: "así que", translation: "so / as a result" },
      { word: "ponerse en marcha", translation: "to get going / start moving" },
      { word: "el trayecto", translation: "the journey / route" },
      { word: "contratar", translation: "to hire" },
      { word: "en aquella época", translation: "at the time / back then" },
    ],
  },
  {
    id: "es-g-b1-3",
    level: "B1",
    title: "Passive Voice — Ser + Participio and Se Pasiva",
    explanation: {
      native: `Spanish has two passive constructions. Understanding both is essential for reading news and formal texts.

PASSIVE WITH SER (formal — names the action):
  Formula: ser (any tense) + participio (agrees with subject)
  Active:  Los obreros construyeron el puente en 1850.
  Passive: El puente fue construido por los obreros en 1850.

The participio AGREES with the subject in gender and number:
  La ley fue aprobada. / Los hombres fueron arrestados. / Las mujeres fueron detenidas.

Passive in all tenses:
  Presente: La decisión es tomada por el comité.
  Indefinido: La ley fue aprobada ayer.
  Imperfecto: El castillo era visitado por miles de turistas.
  Futuro: Los resultados serán publicados mañana.

SER vs ESTAR + participio — the most important distinction:
  ser + PP (passive) → the ACTION of being done
  estar + PP (result) → the resulting STATE
  La puerta fue cerrada (por el guardia). = was closed (action — it happened)
  La puerta estaba cerrada. = was closed (state — it was in a closed condition)

SE PASIVA (more common in everyday Spanish):
  Formula: se + verb (3rd person singular or plural) + subject
  Se vende una casa. / Se venden casas. / Se habla español aquí.
  Se canceló la reunión. / Se vendieron los libros.

Register: The se pasiva is the Spanish default — used in all registers. The ser passive is formal/literary.`,
      target: `El español tiene dos construcciones pasivas. Ambas son esenciales para leer textos formales.

PASIVA CON SER (formal — nombra la acción):
  Fórmula: ser (cualquier tiempo) + participio (concuerda con el sujeto)
  El puente fue construido por los obreros en 1850.

El participio concuerda en género y número con el sujeto:
  La ley fue aprobada. / Los hombres fueron arrestados.

SER vs ESTAR + participio:
  ser + PP → la ACCIÓN de ser hecho
  estar + PP → el ESTADO resultante
  La puerta fue cerrada. (acción) / La puerta estaba cerrada. (estado)

SE PASIVA (más frecuente en el español cotidiano):
  se + verbo (3.ª persona singular o plural) + sujeto
  Se vende una casa. / Se habla español aquí. / Se canceló la reunión.`,
    },
    paradigmTable: {
      pronouns: ["Sujeto (f.sg.)", "Sujeto (m.sg.)", "Sujeto (m.pl.)", "Sujeto (f.pl.)"],
      verbs: [
        { label: "Passive participio agreement", forms: ["fue aprobada", "fue aprobado", "fueron aprobados", "fueron aprobadas"] },
      ],
    },
    rules: [
      {
        condition: "Passive with ser — naming an agent (por + person/entity)",
        result: "ser + participio (agreeing) + por + agent",
        examples: [
          { native: "La carta fue escrita por García Márquez.", translation: "The letter was written by García Márquez." },
          { native: "Los sospechosos fueron detenidos por la policía.", translation: "The suspects were arrested by the police." },
        ],
      },
      {
        condition: "Ser + PP (action) vs Estar + PP (resultant state)",
        result: "ser = the event happened; estar = the resulting condition",
        examples: [
          { native: "La ventana fue rota. (alguien la rompió)", translation: "The window was broken. (someone broke it — action)" },
          { native: "La ventana estaba rota. (condición presente)", translation: "The window was broken. (state — it was in a broken condition)" },
        ],
      },
      {
        condition: "Se pasiva — no agent mentioned",
        result: "se + 3rd person verb agreeing with logical subject",
        examples: [
          { native: "Se vende una casa. / Se venden casas.", translation: "A house is (for) sale. / Houses are for sale." },
          { native: "Se necesitan camareros. / Se habla español aquí.", translation: "Waiters needed. / Spanish is spoken here." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "In real Spanish, the se pasiva is the default — 'Se canceló la reunión' is far more natural than 'La reunión fue cancelada'. Use the ser passive mainly for reading comprehension in formal/news contexts.",
      },
      {
        type: "culture",
        content: "The ser passive is much less frequent in Spanish than in French or English. When you see it in a Spanish newspaper, it is a deliberate stylistic choice for formality or emphasis.",
      },
    ],
    examples: [
      { native: "El proyecto fue rechazado por la junta directiva.", translation: "The project was rejected by the board of directors." },
      { native: "La reunión fue cancelada. (acción) / La sala estaba preparada. (estado)", translation: "The meeting was cancelled. (action) / The room was ready. (state)" },
      { native: "Se construirán 50.000 pisos asequibles en los próximos tres años.", translation: "50,000 affordable flats will be built in the next three years." },
      { native: "El informe había sido enviado antes de la reunión.", translation: "The report had been sent before the meeting." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Qué dijeron en las noticias?", translation: "What did they say on the news?" },
          { native: "Esta mañana fue anunciado por el gobierno un nuevo plan de vivienda. Se construirán miles de pisos asequibles. El plan fue aprobado ayer.", translation: "This morning a new housing plan was announced by the government. Thousands of affordable flats will be built. The plan was approved yesterday." },
        ],
        annotation: "Ser passive (fue anunciado, fue aprobado) — formal news register. Se pasiva (se construirán) — also common in news.",
      },
    ],
    inlineVocab: [
      { word: "anunciar", translation: "to announce" },
      { word: "aprobar", translation: "to approve / pass (a law)" },
      { word: "redactar", translation: "to draft / write (formally)" },
      { word: "detener / arrestar", translation: "to arrest" },
      { word: "rechazar", translation: "to reject" },
      { word: "financiar", translation: "to finance" },
      { word: "asequible", translation: "affordable" },
      { word: "la junta directiva", translation: "the board of directors" },
      { word: "ya era hora", translation: "it was about time" },
      { word: "el sospechoso", translation: "the suspect" },
    ],
  },
]
