import { GrammarLesson } from "../../../../types"

// Block 4 — "Contar, matizar, explicar" (Units 11–13)
// Indirect speech, verbal periphrases B1, discourse connectors B1

export const block4Lessons: GrammarLesson[] = [
  {
    id: "es-g-b1-11",
    level: "B1",
    title: "Estilo Indirecto — Reported Speech with Tense Backshift",
    explanation: {
      native: `Reporting speech is one of the most frequent functions in any language — recounting conversations, summarising what you read, paraphrasing what you heard.

DIRECT → INDIRECT SPEECH: four changes
  1. Remove quotation marks; add que
  2. Change pronouns (1st → 3rd person)
  3. Backshift the tense (if main reporting verb is in past)
  4. Change time expressions

TENSE BACKSHIFT TABLE (reporting verb in past):
  Presente → Imperfecto: "Estoy cansado." → Dijo que estaba cansado.
  Pretérito perfecto → Pluscuamperfecto: "He terminado." → Dijo que había terminado.
  Indefinido → Pluscuamperfecto: "Llegué tarde." → Dijo que había llegado tarde.
  Futuro simple → Condicional: "Vendré." → Dijo que vendría al día siguiente.
  Condicional → Condicional (unchanged): "Vendría." → Dijo que vendría.
  Imperfecto → Imperfecto (unchanged): "Trabajaba mucho." → Dijo que trabajaba mucho.

NO BACKSHIFT when reporting verb is in PRESENT:
  Dice que está cansado. / Explica que va a salir. / Creo que vendrá.

TIME EXPRESSION CHANGES:
  hoy → ese día / aquel día
  ayer → el día anterior
  mañana → al día siguiente
  esta mañana → esa mañana
  ahora → en ese momento
  aquí → allí
  la semana que viene → la semana siguiente

INDIRECT QUESTIONS:
  Yes/no questions → si + clause: "¿Vienes?" → Me preguntó si venía.
  Wh-questions → question word + normal word order (NO inversion):
    "¿Dónde vas?" → Me preguntó adónde iba.
    "¿Cuándo llegará?" → Quiso saber cuándo llegaría.

INDIRECT COMMANDS:
  Use que + imperfecto de subjuntivo:
    "¡Cierra la puerta!" → Me dijo que cerrara la puerta.
    "¡No hagáis ruido!" → Nos pidió que no hiciéramos ruido.`,
      target: `ESTILO INDIRECTO: cuatro cambios
  1. Quitar comillas; añadir que
  2. Cambiar pronombres (1.ª → 3.ª persona)
  3. Retroceso temporal (si el verbo introductor está en pasado)
  4. Cambiar expresiones de tiempo

TABLA DE RETROCESO (verbo introductor en pasado):
  Presente → Imperfecto: "Estoy cansado." → Dijo que estaba cansado.
  Futuro → Condicional: "Vendré." → Dijo que vendría al día siguiente.
  Pretérito perfecto / Indefinido → Pluscuamperfecto.

SIN RETROCESO: cuando el verbo introductor está en PRESENTE.

PREGUNTAS INDIRECTAS:
  Sí/no → si + cláusula
  Qué/dónde/cuándo → mantener la palabra interrogativa, orden normal (sin inversión)

ÓRDENES INDIRECTAS:
  que + imperfecto de subjuntivo`,
    },
    rules: [
      {
        condition: "Reporting verb in PAST — statement",
        result: "Backshift tense according to the table",
        examples: [
          { native: "'Vendré mañana.' → Dijo que vendría al día siguiente.", translation: "\"I'll come tomorrow.\" → He said he'd come the next day." },
          { native: "'He terminado.' → Dijo que había terminado.", translation: "\"I've finished.\" → She said she had finished." },
        ],
      },
      {
        condition: "Reporting a yes/no question",
        result: "preguntar + si + clause (backshifted)",
        examples: [
          { native: "'¿Vienes?' → Me preguntó si venía.", translation: "\"Are you coming?\" → He asked me if I was coming." },
          { native: "'¿Has comido?' → Me preguntó si había comido.", translation: "\"Have you eaten?\" → She asked me if I had eaten." },
        ],
      },
      {
        condition: "Reporting a wh-question",
        result: "preguntar + question word + normal word order (no inversion)",
        examples: [
          { native: "'¿Dónde vas?' → Me preguntó adónde iba.", translation: "\"Where are you going?\" → He asked me where I was going." },
          { native: "'¿Por qué hiciste eso?' → Me preguntó por qué había hecho eso.", translation: "\"Why did you do that?\" → She asked me why I had done that." },
        ],
      },
      {
        condition: "Reporting a command or request",
        result: "decir/pedir + que + imperfecto de subjuntivo",
        examples: [
          { native: "'¡Cierra la puerta!' → Me dijo que cerrara la puerta.", translation: "\"Close the door!\" → He told me to close the door." },
          { native: "'¡No hagáis ruido!' → Nos pidió que no hiciéramos ruido.", translation: "\"Don't make noise!\" → She asked us not to make noise." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Tense backshift ONLY applies when the reporting verb is in the past. If you say 'Dice que...' (present), the original tense is unchanged. This is good news — one-third of real reporting uses present tense verbs.",
      },
      {
        type: "warning",
        content: "In indirect questions, there is NO inversion and NO question marks: '¿Qué quieres?' → Me preguntó qué quería. (NOT qué quería él?) This is a persistent error.",
      },
    ],
    examples: [
      { native: "Me dijo que estaba muy arrepentido de no haber respondido antes — había tenido problemas.", translation: "He told me he was very sorry for not having replied earlier — he'd had problems." },
      { native: "Me preguntó si podríamos aplazar la reunión al lunes siguiente.", translation: "He asked me if we could postpone the meeting to the following Monday." },
      { native: "Quiso saber qué habías decidido.", translation: "She wanted to know what you had decided." },
      { native: "Nos pidió que avisáramos a los demás ese mismo día.", translation: "He asked us to notify the others that very day." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Has hablado con Miguel? ¿Qué te dijo?", translation: "Have you spoken to Miguel? What did he tell you?" },
          { native: "Me dijo que estaba arrepentido de no haber contestado antes. Me preguntó si podíamos aplazar la reunión. También quiso saber qué habías decidido. Dijo que no había ningún problema, pero nos pidió que avisáramos a todos ese mismo día.", translation: "He told me he was sorry for not having replied before. He asked me if we could postpone the meeting. He also wanted to know what you had decided. He said there was no problem, but he asked us to notify everyone that very day." },
        ],
        annotation: "Backshifts: estaba (← está), había contestado (← ha contestado), podíamos (← podemos), habías decidido (← has decidido), había (← hay), avisáramos (← avisen — indirect command).",
      },
    ],
    inlineVocab: [
      { word: "al día siguiente", translation: "the next day" },
      { word: "ese día / aquel día", translation: "that day" },
      { word: "aplazar", translation: "to postpone" },
      { word: "avisar", translation: "to notify / warn" },
      { word: "arrepentirse de", translation: "to regret" },
      { word: "afirmar que", translation: "to claim / assert that" },
      { word: "negar que (+ subj.)", translation: "to deny that" },
      { word: "según él/ella", translation: "according to him/her" },
      { word: "al parecer", translation: "apparently" },
    ],
  },
  {
    id: "es-g-b1-12",
    level: "B1",
    title: "Perífrasis Verbales B1 — Llevar, Seguir, Dejar de, Ponerse a, Volver a, Acabar por",
    explanation: {
      native: `Spanish is rich in verbal periphrases (two-verb phrases) that express aspect — not just time. Using them correctly is a mark of fluent B1+ Spanish.

LLEVAR + GERUNDIO — duration of ongoing activity:
  Expresses how long an action has been going on up to now:
  Llevo tres años estudiando español. (I've been studying Spanish for three years.)
  ¿Cuánto tiempo llevas esperando? (How long have you been waiting?)
  Llevaba media hora buscando las llaves cuando las encontré. (imperfecto — past duration)
  Contrast with desde hace: Llevo tres años aquí = Estoy aquí desde hace tres años.
  Llevar + gerundio is more colloquial and emphasises the ongoing action.

SEGUIR / CONTINUAR + GERUNDIO — continuation:
  Sigue lloviendo. (It's still raining.)
  ¿Sigues estudiando japonés? (Are you still studying Japanese?)
  Continuaba hablando aunque nadie le escuchaba. (He kept talking even though nobody listened.)

DEJAR DE + INFINITIVO — stopping an action:
  Dejé de fumar hace dos años. (I stopped smoking two years ago.)
  Ha dejado de llamar desde que se mudó. (He's stopped calling since he moved.)
  No dejes de practicar. (Don't stop practising.)

PONERSE A + INFINITIVO — sudden beginning:
  De repente se puso a llorar. (Suddenly she started crying.)
  Cuando llegó la tormenta, nos pusimos a correr. (We started running.)
  Emphasises the suddenness/spontaneity — different from empezar a (neutral).

VOLVER A + INFINITIVO — doing again:
  Volvió a llamar una hora después. (He called again an hour later.)
  No vuelvas a hacer eso. (Don't do that again.)
  Volví a ver esa película y me gustó más. (I watched that film again and liked it more.)

ACABAR POR / TERMINAR POR + INFINITIVO — eventual outcome:
  Acabé por entender el subjuntivo. (I ended up understanding the subjunctive.)
  Si sigue así, acabará por marcharse. (He'll end up leaving if he continues like this.)`,
      target: `PERÍFRASIS VERBALES B1:

LLEVAR + GERUNDIO: duración de actividad en curso
  Llevo tres años estudiando español. (tres años hasta ahora)

SEGUIR/CONTINUAR + GERUNDIO: continuación
  Sigue lloviendo. / ¿Sigues estudiando japonés?

DEJAR DE + INFINITIVO: dejar de hacer algo
  Dejé de fumar hace dos años.

PONERSE A + INFINITIVO: inicio súbito
  De repente se puso a llorar.

VOLVER A + INFINITIVO: hacer algo de nuevo
  Volvió a llamar una hora después.

ACABAR POR + INFINITIVO: resultado eventual después de un proceso
  Acabé por aceptar la situación.`,
    },
    rules: [
      {
        condition: "Expressing how long an ongoing action has lasted (up to now)",
        result: "llevar (conjugated) + time expression + gerundio",
        examples: [
          { native: "Llevo dos horas esperando el autobús.", translation: "I've been waiting for the bus for two hours." },
          { native: "Llevaba un año sin llamar cuando por fin apareció.", translation: "He hadn't called for a year when he finally appeared." },
        ],
      },
      {
        condition: "Expressing that an action is still continuing",
        result: "seguir/continuar + gerundio",
        examples: [
          { native: "Siguen trabajando allí. / ¿Sigue lloviendo?", translation: "They're still working there. / Is it still raining?" },
        ],
      },
      {
        condition: "Expressing a sudden start",
        result: "ponerse a + infinitivo (spontaneous, often triggered by something)",
        examples: [
          { native: "Cuando le dije la noticia, se puso a llorar.", translation: "When I told him the news, he started crying." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Llevar + gerundio is uniquely Spanish — no exact equivalent in French or English. It emphasises the ongoing quality of the action. 'Llevo esperando media hora' feels more vivid than 'espero desde hace media hora'.",
      },
      {
        type: "tip",
        content: "Volver a + infinitivo is a very elegant way to express repetition in Spanish. Instead of 'llamó otra vez', use 'volvió a llamar' — it sounds much more native.",
      },
    ],
    examples: [
      { native: "Llevo tres años sin ninguna perspectiva de subir — así que me puse a buscar otras opciones.", translation: "I've been three years with no promotion prospects — so I started looking for other options." },
      { native: "Lo había dejado de estudiar durante un año, pero volví a apuntarme a una academia.", translation: "I had stopped studying it for a year, but I signed up to a school again." },
      { native: "Acabé por encontrar algo mucho mejor. A veces hay que dejar de tener miedo.", translation: "I ended up finding something much better. Sometimes you have to stop being afraid." },
      { native: "Poco a poco sigo mejorando — no he dejado de practicar ni un día.", translation: "Little by little I'm still improving — I haven't stopped practising for a single day." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Sigues en el mismo trabajo?", translation: "Are you still in the same job?" },
          { native: "No, lo dejé. Llevaba tres años sin ninguna perspectiva de ascender. Al final me puse a buscar otras opciones y acabé por encontrar algo mucho mejor. Y el inglés, ¿lo sigues practicando? Volví a apuntarme a una academia — lo había dejado de estudiar un año, pero me di cuenta de que lo necesitaba.", translation: "No, I left. I'd been three years with no promotion prospects. In the end I started looking for other options and ended up finding something much better. And English, are you still practising it? I signed up to a school again — I had stopped studying it for a year, but I realised I needed it." },
        ],
        annotation: "llevaba (duration), me puse a buscar (sudden start), acabé por encontrar (eventual outcome), sigues practicando (continuation), volví a apuntarme (doing again), había dejado de estudiar (stopping).",
      },
    ],
    inlineVocab: [
      { word: "llevar + gerundio", translation: "to have been doing (for a period)" },
      { word: "seguir/continuar + gerundio", translation: "to keep doing / still be doing" },
      { word: "dejar de + infinitivo", translation: "to stop doing" },
      { word: "ponerse a + infinitivo", translation: "to start (suddenly)" },
      { word: "volver a + infinitivo", translation: "to do again" },
      { word: "acabar por + infinitivo", translation: "to end up doing" },
      { word: "apuntarse a", translation: "to sign up for" },
      { word: "la perspectiva", translation: "prospect / outlook" },
      { word: "poco a poco", translation: "little by little" },
    ],
  },
  {
    id: "es-g-b1-13",
    level: "B1",
    title: "Conectores Lógicos B1 — Causa, Consecuencia, Concesión, Oposición",
    explanation: {
      native: `The difference between A2 and B1 Spanish is partly connector precision — being able to articulate EXACTLY why, EXACTLY what follows, and EXACTLY how things contrast.

CAUSE CONNECTORS:
  porque — neutral, introduces new reason (A2, still essential)
  ya que / puesto que — since (the reason is SHARED KNOWLEDGE between speaker and listener)
    Ya que estás aquí, puedes ayudarme. (Since you're here anyway...)
    Puesto que no vienen, podemos empezar.
    CANNOT introduce new information — use porque for that.
  dado que — given that (formal): Dado que los resultados son positivos, podemos continuar.
  a causa de / debido a + noun phrase: A causa de la lluvia, cancelaron el partido.

CONSEQUENCE CONNECTORS:
  así que / entonces — neutral (A2 known)
  por eso / por eso mismo — that is why (most common): Estaba enfermo. Por eso no vino.
  por lo tanto — therefore (formal/written)
  de ahí que + subjuntivo — hence / that is why (formal): No estudió, de ahí que no aprobara.
  como consecuencia / como resultado — as a result: Como consecuencia de las reformas...

CONCESSION CONNECTORS:
  sin embargo — however (neutral/formal) — most common B1 contrast word
  no obstante — nevertheless (formal)
  a pesar de (que) — despite (the fact that)
    a pesar de + noun: A pesar de los problemas, avanzó.
    a pesar de que + clause: A pesar de que llovía, salimos.
  si bien — although (formal/written)
  de todas formas/maneras — anyway / regardless

OPPOSITION CONNECTORS:
  mientras que — whereas / while (comparing two contrasting facts)
  en cambio — on the other hand / instead (contrast with previous)
  por el contrario — on the contrary (direct contradiction)
  frente a — in contrast to / vs (formal)`,
      target: `CONECTORES DE CAUSA:
  porque (neutro), ya que / puesto que (razón conocida), dado que (formal),
  a causa de / debido a + sustantivo

CONECTORES DE CONSECUENCIA:
  por eso (más común), por lo tanto (formal), de ahí que + subjuntivo (formal),
  como consecuencia

CONECTORES DE CONCESIÓN:
  sin embargo, no obstante, a pesar de (que), si bien, de todas formas

CONECTORES DE OPOSICIÓN:
  mientras que, en cambio, por el contrario, frente a`,
    },
    rules: [
      {
        condition: "Ya que / puesto que — cause (shared knowledge)",
        result: "Use when the reason is already known to both speaker and listener",
        examples: [
          { native: "Ya que estás aquí de todas formas, ¿puedes ayudarme?", translation: "Since you're here anyway, can you help me?" },
          { native: "Puesto que no hay acuerdo, la reunión se aplaza.", translation: "Given that there's no agreement, the meeting is postponed." },
        ],
      },
      {
        condition: "Sin embargo — concession",
        result: "Introduces a contrasting fact: X is true, BUT Y is also true",
        examples: [
          { native: "Estaba cansado; sin embargo, siguió trabajando.", translation: "He was tired; however, he kept working." },
          { native: "Es caro; sin embargo, merece la pena.", translation: "It's expensive; however, it's worth it." },
        ],
      },
      {
        condition: "Mientras que — opposition",
        result: "Contrasts two different (often parallel) situations",
        examples: [
          { native: "El norte es industrial, mientras que el sur es turístico.", translation: "The north is industrial, whereas the south is tourist-oriented." },
        ],
      },
      {
        condition: "A pesar de + noun vs a pesar de que + clause",
        result: "Match the structure to what follows",
        examples: [
          { native: "A pesar de la lluvia, salimos. / A pesar de que llovía, salimos.", translation: "Despite the rain, we went out. / Despite the fact that it was raining, we went out." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "En cambio and sin embargo are the two most frequently used formal contrast words in educated spoken Spanish. Prioritise these two for immediate active use.",
      },
      {
        type: "warning",
        content: "De ahí que always takes the subjuntivo — treat it as a B1 recognition item rather than something to produce actively. It is common in news writing and formal argument.",
      },
    ],
    examples: [
      { native: "Dado que el desempleo sigue alto, es necesario actuar. Sin embargo, las medidas propuestas son insuficientes.", translation: "Given that unemployment remains high, action is necessary. However, the measures proposed are insufficient." },
      { native: "El empleo subió en las ciudades, mientras que las zonas rurales siguen sufriendo.", translation: "Employment rose in the cities, whereas rural areas continue to suffer." },
      { native: "A causa de la falta de voluntad política, el problema no hace más que crecer. Por eso muchos economistas piden una reforma más profunda.", translation: "Due to the lack of political will, the problem only keeps growing. That is why many economists are calling for deeper reform." },
      { native: "Si bien es cierto que los indicadores muestran cierta mejora, no obstante estas cifras ocultan grandes desigualdades.", translation: "Although it is true that the indicators show some improvement, nonetheless these figures hide great inequalities." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Y la reunión de ayer? ¿Cómo fue?", translation: "And yesterday's meeting? How did it go?" },
          { native: "Complicada. Dado que nadie había preparado la documentación, arrancamos tarde. Por eso el tiempo se agotó antes de llegar a los puntos importantes. Sin embargo, al final llegamos a un acuerdo. A pesar de los problemas, creo que fue productiva. En cambio, mi compañero piensa que fue una pérdida de tiempo.", translation: "Complicated. Given that nobody had prepared the documentation, we started late. That's why time ran out before we got to the important points. However, in the end we reached an agreement. Despite the problems, I think it was productive. My colleague, on the other hand, thinks it was a waste of time." },
        ],
        annotation: "dado que (shared reason), por eso (consequence), sin embargo (concession), a pesar de (concession + noun), en cambio (opposition).",
      },
    ],
    inlineVocab: [
      { word: "ya que", translation: "since (known reason)" },
      { word: "puesto que", translation: "since / given that" },
      { word: "dado que", translation: "given that" },
      { word: "a causa de", translation: "due to (+ noun)" },
      { word: "debido a", translation: "due to (+ noun)" },
      { word: "por eso", translation: "that is why" },
      { word: "por lo tanto", translation: "therefore" },
      { word: "sin embargo", translation: "however" },
      { word: "no obstante", translation: "nevertheless" },
      { word: "a pesar de (que)", translation: "despite (the fact that)" },
      { word: "si bien", translation: "although (formal)" },
      { word: "mientras que", translation: "whereas / while" },
      { word: "en cambio", translation: "on the other hand" },
      { word: "por el contrario", translation: "on the contrary" },
    ],
  },
]
