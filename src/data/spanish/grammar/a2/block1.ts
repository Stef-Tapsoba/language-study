import { GrammarLesson } from "../../../../types"

// Block 1 — "¿Qué pasó?" (Units 1–3)
// Past tenses: Pretérito indefinido irregulars deep-dive, Imperfecto formation & uses,
// Indefinido vs. Imperfecto contrast.

export const block1Lessons: GrammarLesson[] = [
  {
    id: "es-g-a2-1",
    level: "A2",
    title: "Pretérito indefinido — Irregular Verbs in Depth",
    explanation: `The pretérito indefinido (simple past) is the time of completed events in Latin American Spanish — yesterday, last year, in 1492. You already know regular forms from A1. This lesson consolidates the irregular families every speaker needs.

GROUP 1 — SER and IR share identical forms (context tells them apart):
  fui / fuiste / fue / fuimos / fueron
  "Fui médico tres años." (ser) vs "Fui al mercado." (ir)

GROUP 2 — the -UV- family (tener, estar, poder, poner, saber, andar):
  tener: tuve / tuviste / tuvo / tuvimos / tuvieron
  estar: estuve / estuviste / estuvo / estuvimos / estuvieron
  poder: pude / pudiste / pudo / pudimos / pudieron
  poner: puse / pusiste / puso / pusimos / pusieron
  saber: supe / supiste / supo / supimos / supieron
  The stem carries -uv- and the endings are the same for all: -e / -iste / -o / -imos / -ieron.

GROUP 3 — -IN-/-IS- family and others:
  venir: vine / viniste / vino / vinimos / vinieron
  querer: quise / quisiste / quiso / quisimos / quisieron
  hacer: hice / hiciste / hizo / hicimos / hicieron  (3rd sg: hizo — z to preserve /s/ sound)
  decir: dije / dijiste / dijo / dijimos / dijeron  (3rd pl: dijeron, not dijieron)
  traer: traje / trajiste / trajo / trajimos / trajeron

GROUP 4 — spelling-change yo forms:
  dar: di / diste / dio / dimos / dieron  (uses -er/-ir endings; no written accent)
  ver: vi / viste / vio / vimos / vieron
  llegar → llegué  (g + e → gu to keep the hard-g sound)
  buscar → busqué  (c + e → qu)
  empezar → empecé  (z + e → c, standard spelling)

LatAm note: In Latin America the indefinido is the universal past tense for completed actions — including today's events. This course follows that norm throughout.`,
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros", "ellos / ustedes"],
      verbs: [
        { label: "ser / ir", forms: ["fui", "fuiste", "fue", "fuimos", "fueron"] },
        { label: "tener", forms: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvieron"] },
        { label: "estar", forms: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvieron"] },
        { label: "hacer", forms: ["hice", "hiciste", "hizo", "hicimos", "hicieron"] },
        { label: "decir", forms: ["dije", "dijiste", "dijo", "dijimos", "dijeron"] },
        { label: "venir", forms: ["vine", "viniste", "vino", "vinimos", "vinieron"] },
      ],
    },
    rules: [
      {
        condition: "The -UV- family (tener, estar, poder, poner, saber)",
        result: "Change the stem to -tuv-, -estuv-, -pud-, -pus-, -sup- and add: -e / -iste / -o / -imos / -ieron",
        examples: [
          { native: "Tuve que trabajar toda la noche.", translation: "I had to work all night." },
          { native: "Estuve en Medellín la semana pasada.", translation: "I was in Medellín last week." },
          { native: "No pude dormir bien.", translation: "I couldn't sleep well." },
        ],
      },
      {
        condition: "Hacer in 3rd person singular",
        result: "hizo (with z, not c) — to preserve the /s/ sound before -o",
        examples: [
          { native: "¿Qué hizo el fin de semana?", translation: "What did he/she do at the weekend?" },
        ],
      },
      {
        condition: "Spelling-change yo forms (-gar, -car, -zar verbs)",
        result: "Add -ué / -qué / -cé to keep the original consonant sound",
        examples: [
          { native: "Llegué tarde a la reunión.", translation: "I arrived late to the meeting." },
          { native: "Busqué el documento pero no lo encontré.", translation: "I looked for the document but couldn't find it." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The -UV- family is the most productive irregular group — learn all six as a family (tuve, estuve, pude, puse, supe, anduve) and you save time.",
      },
      {
        type: "warning",
        content: "Decir and traer in 3rd person plural are dijeron / trajeron — NOT dijieron / trajieron. The extra -i- does not appear.",
      },
      {
        type: "culture",
        content: "In Latin America, the indefinido covers events from any time in the past — including earlier today. 'Ya comí' (I already ate) is standard LatAm Spanish.",
      },
    ],
    examples: [
      { native: "El sábado fui al mercado de San Telmo.", translation: "On Saturday I went to the San Telmo market." },
      { native: "¿Cómo te fue esta semana? — Bastante bien.", translation: "How did it go for you this week? — Pretty well." },
      { native: "No pude venir porque tuve mucho trabajo.", translation: "I couldn't come because I had a lot of work." },
      { native: "Le dije la verdad, pero no me creyó.", translation: "I told him/her the truth, but he/she didn't believe me." },
      { native: "Vine a Colombia hace cinco años y nunca me fui.", translation: "I came to Colombia five years ago and never left." },
      { native: "¿Trajiste algo de comer?", translation: "Did you bring something to eat?" },
    ],
    inlineVocab: [
      { word: "contar", translation: "to tell / to recount" },
      { word: "recordar", translation: "to remember" },
      { word: "olvidar", translation: "to forget" },
      { word: "pasarlo bien/mal", translation: "to have a good/bad time" },
      { word: "de repente", translation: "suddenly" },
      { word: "al final", translation: "in the end" },
      { word: "a propósito", translation: "on purpose" },
      { word: "por suerte", translation: "luckily" },
    ],
  },

  {
    id: "es-g-a2-2",
    level: "A2",
    title: "Pretérito indefinido — Questions and Negation in Context",
    explanation: `Asking and negating in the indefinido follows the same rules as the present: place no directly before the verb and use standard question formation. The most important question pattern to master is with interrogative words.

NEGATION — no + verb:
  No fui al trabajo ayer.       (I didn't go to work yesterday.)
  No hice absolutamente nada.   (I didn't do absolutely anything.)
  No dijo nada.                 (He/she didn't say anything.)

QUESTIONS — intonation or interrogative word + verb:
  ¿Fuiste al concierto?                          (Did you go to the concert?)
  ¿Qué hiciste el fin de semana?                 (What did you do at the weekend?)
  ¿Adónde fueron de vacaciones?                  (Where did they go on holiday?)
  ¿Con quién estuviste?                          (Who were you with?)
  ¿Por qué no viniste?                           (Why didn't you come?)
  ¿Cuándo llegaste?                              (When did you arrive?)
  ¿Cómo te fue?                                  (How did it go for you?)

KEY EXPRESSION: ¿Cómo te fue? is essential — it opens any conversation about recent past experience.`,
    rules: [
      {
        condition: "Negation in the indefinido",
        result: "Place no directly before the conjugated verb. No other changes.",
        examples: [
          { native: "No pude dormir bien anoche.", translation: "I couldn't sleep well last night." },
          { native: "No lo hice a propósito.", translation: "I didn't do it on purpose." },
        ],
      },
      {
        condition: "Questions with interrogative words",
        result: "Question word + (optional subject) + conjugated verb",
        examples: [
          { native: "¿Qué hiciste ayer?", translation: "What did you do yesterday?" },
          { native: "¿Cómo te fue en la entrevista?", translation: "How did the interview go for you?" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "¿Cómo te fue? is one of the most natural conversation-openers in Latin American Spanish. It works for any past experience — a day at work, a trip, a medical appointment.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Cómo te fue esta semana? Te vi muy ocupado.", translation: "How was your week? I saw you were very busy." },
          { native: "Bastante intensa. El martes tuve que terminar un informe enorme y el miércoles fui a una conferencia en Medellín.", translation: "Pretty intense. On Tuesday I had to finish a huge report and on Wednesday I went to a conference in Medellín." },
        ],
      },
      { native: "¿Por qué no viniste a la cena? — Es que no pude.", translation: "Why didn't you come to the dinner? — I just couldn't." },
      { native: "¿Adónde fueron de vacaciones? — Fuimos a Oaxaca.", translation: "Where did you go on holiday? — We went to Oaxaca." },
      { native: "No dije nada porque no quise meter la pata.", translation: "I didn't say anything because I didn't want to put my foot in it." },
    ],
    inlineVocab: [
      { word: "meter la pata", translation: "to put your foot in it" },
      { word: "la entrevista", translation: "the interview" },
      { word: "el informe", translation: "the report" },
      { word: "la conferencia", translation: "the conference" },
    ],
  },

  {
    id: "es-g-a2-3",
    level: "A2",
    title: "Pretérito imperfecto — Formation and Four Uses",
    explanation: `The imperfecto is the most regular tense in Spanish — only three irregular verbs in the entire language. Its endings are predictable and consistent.

FORMATION:
  -AR verbs: -aba / -abas / -aba / -ábamos / -aban  (hablaba, trabajabas…)
  -ER/-IR verbs: -ía / -ías / -ía / -íamos / -ían  (comía, vivías…)

The only three irregular verbs:
  ser:  era / eras / era / éramos / eran
  ir:   iba / ibas / iba / íbamos / iban
  ver:  veía / veías / veía / veíamos / veían

IMPORTANT: Stem-changing verbs (e→ie, o→ue in the present) do NOT change in the imperfecto.
  querer (present: quiero) → imperfecto: quería, querías… (no stem change)
  poder  (present: puedo)  → imperfecto: podía, podías… (no stem change)

FOUR USES:
1. Habitual past actions — what you used to do regularly
   Cuando era niño, jugaba al fútbol todos los fines de semana.
   Signal words: siempre, a menudo, cada, normalmente, antes, de joven, de pequeño/a

2. Background states and descriptions — how things were
   Hacía mucho calor. La sala estaba llena. Ella llevaba un vestido rojo.

3. Interrupted action (developed fully in the next lesson)
   Dormía cuando sonó el teléfono.

4. Reported thought / mental state in the past
   No sabía que estabas aquí. Pensaba que estaba cerrado.`,
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros", "ellos / ustedes"],
      verbs: [
        { label: "hablar (-ar)", forms: ["hablaba", "hablabas", "hablaba", "hablábamos", "hablaban"] },
        { label: "comer (-er)", forms: ["comía", "comías", "comía", "comíamos", "comían"] },
        { label: "ser (irreg.)", forms: ["era", "eras", "era", "éramos", "eran"] },
        { label: "ir (irreg.)", forms: ["iba", "ibas", "iba", "íbamos", "iban"] },
        { label: "ver (irreg.)", forms: ["veía", "veías", "veía", "veíamos", "veían"] },
      ],
    },
    rules: [
      {
        condition: "Habitual past action",
        result: "Use imperfecto — if you can say 'I used to...' or 'I would...' (habitually), use imperfecto",
        examples: [
          { native: "Cuando era pequeña, siempre iba a la playa en verano.", translation: "When I was little, I always went to the beach in summer." },
          { native: "Antes leía mucho, pero ahora no tengo tiempo.", translation: "I used to read a lot, but now I don't have time." },
        ],
      },
      {
        condition: "Background scene / state in the past",
        result: "Use imperfecto for time, weather, descriptions, feelings, age — anything that was 'how things were'",
        examples: [
          { native: "Eran las tres de la tarde y el mercado olía a especias.", translation: "It was three in the afternoon and the market smelled of spices." },
          { native: "Los niños tenían cara de cansados.", translation: "The children looked tired." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The imperfecto is 'the camera rolling'. The indefinido is 'the snapshot'. The imperfecto gives texture and atmosphere; the indefinido advances the plot.",
      },
      {
        type: "tip",
        content: "Only three irregular verbs in the entire tense: ser, ir, ver. Every other verb is completely regular — use the infinitive stem.",
      },
      {
        type: "warning",
        content: "Stem-changing verbs (querer, poder, tener) do NOT stem-change in the imperfecto. Querer → quería (not *quería with ie). Follow the infinitive, not the present.",
      },
    ],
    examples: [
      { native: "Siempre íbamos a casa de mis abuelos en Oaxaca. Vivían en una casa grande con un patio enorme.", translation: "We always went to my grandparents' house in Oaxaca. They lived in a big house with an enormous patio." },
      { native: "Cuando era niño, mi abuela hacía chocolate caliente por las mañanas — olía increíble.", translation: "When I was a child, my grandmother made hot chocolate in the mornings — it smelled incredible." },
      { native: "Antes todo era más lento. Más tranquilo, quizá mejor.", translation: "Before, everything was slower. More peaceful — perhaps better." },
      { native: "¿Te acuerdas de cómo éramos de jóvenes?", translation: "Do you remember what we were like when we were young?" },
    ],
    inlineVocab: [
      { word: "la infancia", translation: "childhood" },
      { word: "el recuerdo", translation: "memory / souvenir" },
      { word: "en aquella época", translation: "at that time / back then" },
      { word: "de pequeño/a", translation: "as a child / when little" },
      { word: "tranquilo/a", translation: "calm / peaceful" },
      { word: "el patio", translation: "courtyard / patio" },
      { word: "el barrio", translation: "neighbourhood" },
      { word: "sentirse", translation: "to feel" },
    ],
  },

  {
    id: "es-g-a2-4",
    level: "A2",
    title: "Indefinido vs. Imperfecto — The Core Contrast",
    explanation: `The contrast between indefinido and imperfecto is the most important conceptual leap in A2 Spanish. Both refer to the past, but they frame time differently.

THE FILM METAPHOR:
  Indefinido = the plot advancing. Something happens. A door opens. Someone arrives. The story moves forward. Click. Click. Click — like photographs.
  Imperfecto = the scene rolling. The camera is running but nothing has 'happened' yet. The music plays, the room is described, the characters are in position. This is the world in which events occur.

THE RULE:
  Indefinido: completed action | specific event | "what happened next?" | de repente, entonces, un día, luego, al final
  Imperfecto:  background state | ongoing habit | "how were things?" | siempre, antes, normalmente, mientras, cuando (background)

THREE ESSENTIAL PATTERNS:

1. INTERRUPTED ACTION:
   Imperfecto (what was in progress) + cuando + Indefinido (what interrupted it)
   Dormía cuando sonó el teléfono.
   Caminaba por la calle cuando vi a mi ex.

2. SCENE + SEQUENCE OF EVENTS:
   Imperfecto (background)... then Indefinido / Indefinido / Indefinido (events)
   Era tarde y llovía. De repente, alguien llamó a la puerta. Abrí y vi a mi hermano.

3. HABITUAL BASELINE vs. SINGLE EXCEPTION:
   Normalmente tomaba el metro. Pero ese día decidí caminar.
   Imperfecto sets the baseline — indefinido breaks it.

STATIVE VERBS IN THE PAST:
Verbs like saber, conocer, querer, poder describe states — usually imperfecto.
But in indefinido they mark a specific moment of change:
  Sabía la verdad. (ongoing state) → Supe la verdad ayer. (the moment I found out)
  Conocía París. (prior acquaintance)  → Conocí a tu hermana en la boda. (first meeting)`,
    paradigmTable: {
      pronouns: ["Indefinido — use when", "Imperfecto — use when"],
      verbs: [
        { label: "type of action", forms: ["action is completed / punctual", "action is habitual / ongoing"] },
        { label: "narrative role", forms: ["plot advances (foreground)", "background / scene-setting"] },
        { label: "key question", forms: ["¿Qué pasó después?", "¿Cómo era? / ¿Qué hacía?"] },
        { label: "signal words", forms: ["ayer, de repente, entonces, por fin", "siempre, antes, normalmente, mientras"] },
      ],
    },
    rules: [
      {
        condition: "Interrupted action (cuando pattern)",
        result: "IMPERFECTO (what was in progress) + cuando + INDEFINIDO (the interrupting event)",
        examples: [
          { native: "Dormía cuando sonó el teléfono.", translation: "I was sleeping when the phone rang." },
          { native: "¿Conducías cuando viste el accidente?", translation: "Were you driving when you saw the accident?" },
        ],
      },
      {
        condition: "Common error: state verbs with indefinido",
        result: "State verbs (estar, saber, conocer…) in indefinido signal a change of state — not just the past",
        examples: [
          { native: "No sabía la verdad. → Supe la verdad el lunes. (I found out)", translation: "I didn't know the truth. → I found out the truth on Monday." },
          { native: "Ya conocía a algunos invitados. Esa noche conocí a Rodrigo. (first meeting)", translation: "I already knew some guests. That night I met Rodrigo." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Test: can you add 'and then something else happened' after the verb? If yes → indefinido. Is it background or ongoing state? → imperfecto.",
      },
      {
        type: "warning",
        content: "Error: 'Estuve cansado todo el día.' — Being tired all day is an ongoing state, not a completed event. Use imperfecto: 'Estaba cansado todo el día.'",
      },
      {
        type: "warning",
        content: "Error: 'De repente llovía fuerte.' — De repente signals a sudden event. Use indefinido: 'De repente empezó a llover fuerte.'",
      },
    ],
    examples: [
      { native: "Era viernes por la tarde. Hacía calor y la ciudad estaba tranquila. De repente sonó mi teléfono. Era mi jefe.", translation: "It was Friday afternoon. It was hot and the city was quiet. Suddenly my phone rang. It was my boss." },
      { native: "Normalmente trabajaba hasta las seis. Pero ese jueves salí a las cuatro porque tenía una cita.", translation: "I normally worked until six. But that Thursday I left at four because I had an appointment." },
      {
        type: "dialogue",
        exchanges: [
          { native: "Tienes cara de cansado. ¿Dormiste bien?", translation: "You look tired. Did you sleep well?" },
          { native: "No, tuve una noche horrible. Era como la una y estaba durmiendo cuando escuché un ruido enorme.", translation: "No, I had a terrible night. It was about one o'clock and I was sleeping when I heard an enormous noise." },
        ],
      },
      { native: "Cuando llegué a la fiesta, ya conocía a algunos invitados. Esa noche conocí a Rodrigo por primera vez.", translation: "When I arrived at the party, I already knew some of the guests. That night I met Rodrigo for the first time." },
    ],
    inlineVocab: [
      { word: "de repente", translation: "suddenly" },
      { word: "mientras tanto", translation: "meanwhile" },
      { word: "en ese momento", translation: "at that moment" },
      { word: "resultar que", translation: "it turned out that" },
      { word: "darse cuenta (de)", translation: "to realise" },
      { word: "extraño/a", translation: "strange" },
      { word: "inesperado/a", translation: "unexpected" },
      { word: "asomarse", translation: "to look out / peek" },
    ],
  },
]
