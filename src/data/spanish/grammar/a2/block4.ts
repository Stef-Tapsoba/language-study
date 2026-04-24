import { GrammarLesson } from "../../../../types"

// Block 4 — "¿Qué pasará?" (Units 10–12)
// Futuro simple, Condicional simple, Si clauses type 1 + acabar de + desde hace.

export const block4Lessons: GrammarLesson[] = [
  {
    id: "es-g-a2-11",
    level: "A2",
    title: "Futuro simple — Formation, Irregulars, and Uses",
    explanation: `The futuro simple is formed from the FULL INFINITIVE + endings (unlike other tenses).
Regular verbs: add endings directly to the infinitive.

ENDINGS (same for -ar, -er, -ir):
  yo → -é        nosotros → -emos
  tú → -ás       vosotros → -éis
  él/ella → -á   ellos/ustedes → -án

hablar: hablaré / hablarás / hablará / hablaremos / hablarán
comer:  comeré / comerás / comerá / comeremos / comerán
vivir:  viviré / vivirás / vivirá / viviremos / vivirán

IRREGULAR STEMS — 12 high-frequency verbs (same endings, different stem):
GROUP 1 — vowel drops (sincopated):
  haber: habr-   poder: podr-   querer: querr-   saber: sabr-
GROUP 2 — -d- added (epenthetic):
  tener: tendr-  poner: pondr-  venir: vendr-  salir: saldr-  valer: valdr-
GROUP 3 — unique root:
  hacer: har-    decir: dir-

Compound verbs follow the base: mantener→mantendr-, proponer→pondr-, deshacer→deshar-

USES OF THE FUTURO SIMPLE:
1. Predictions and suppositions about the future:
   El año que viene habrá elecciones.   Creo que lloverá esta tarde.

2. Promises and commitments:
   Te llamaré en cuanto llegue.   Haré todo lo que pueda.

3. Formal announcements and plans (news, official contexts):
   El director presentará el proyecto mañana.   Las obras terminarán en diciembre.

4. Probability about the PRESENT ('futuro de probabilidad'):
   ¿Qué hora será?  (I wonder what time it is / It must be...)
   Tendrá unos cuarenta años.  (He must be about forty.)
   ¿Quién llamará a estas horas?  (Who could be calling at this hour?)

5. CUANDO + FUTURE TENSE — critical rule:
   In English: 'when' + present simple for future meaning.
   In Spanish: cuando + FUTURO SIMPLE for future meaning.
   Cuando llegues, llámame.          ✓ (NOT *cuando llegas...)
   Cuando sepa los resultados, te aviso.   ✓
   Cuando tengamos tiempo, lo haremos.     ✓

CONTRAST WITH IR A + INFINITIVE:
  Ir a + inf. → near future, decided plan, personal commitment, conversational register
  Futuro simple → prediction, aspiration, announcement, more formal/distant

  Voy a llamar a mi madre esta noche. (near, decided)
  Un día llamaré a esa empresa.       (aspirational, distant)`,
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros", "ellos / ustedes"],
      verbs: [
        { label: "hablar (regular)", forms: ["hablaré", "hablarás", "hablará", "hablaremos", "hablarán"] },
        { label: "tener (tendr-)", forms: ["tendré", "tendrás", "tendrá", "tendremos", "tendrán"] },
        { label: "hacer (har-)", forms: ["haré", "harás", "hará", "haremos", "harán"] },
        { label: "decir (dir-)", forms: ["diré", "dirás", "dirá", "diremos", "dirán"] },
        { label: "poder (podr-)", forms: ["podré", "podrás", "podrá", "podremos", "podrán"] },
      ],
    },
    rules: [
      {
        condition: "Cuando with future meaning",
        result: "ALWAYS use futuro simple after cuando — never present tense",
        examples: [
          { native: "Cuando llegues, llámame.", translation: "When you arrive, call me." },
          { native: "Cuando tenga suficiente dinero, viajará a Argentina.", translation: "When he has enough money, he'll travel to Argentina." },
        ],
      },
      {
        condition: "Probability about the present",
        result: "Use futuro simple to express 'must be' / 'I wonder'",
        examples: [
          { native: "¿Quién será a estas horas?", translation: "Who could it be at this hour? (I wonder who it is)" },
          { native: "Tendrá unos treinta años.", translation: "He must be about thirty." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "¡Cuando llegues, llámame! — After 'cuando' with future meaning, use futuro simple, NOT present. This is the opposite of English ('when you arrive' uses present in English, future in Spanish).",
      },
      {
        type: "culture",
        content: "In Latin American Spanish, the futuro is also the time of dreams and aspirations: 'Algún día tendré mi propia empresa.' This aspirational register gives the futuro simple an emotional weight beyond mere planning.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Qué vas a hacer este verano?", translation: "What are you going to do this summer?" },
          { native: "Primero voy a quedarme aquí un mes. Después, si todo va bien, viajaré a Colombia. Cuando llegue a Bogotá, me quedaré unos días.", translation: "First I'm going to stay here for a month. Then, if everything goes well, I'll travel to Colombia. When I arrive in Bogotá, I'll stay for a few days." },
        ],
      },
      { native: "¿Cuándo sabremos los resultados? — Los publicarán el viernes.", translation: "When will we know the results? — They'll publish them on Friday." },
      { native: "Algún día seré freelance — estoy casi seguro. Tendré más libertad para elegir proyectos.", translation: "One day I'll go freelance — I'm almost certain. I'll have more freedom to choose projects." },
    ],
    inlineVocab: [
      { word: "dentro de poco", translation: "soon / in a short while" },
      { word: "el año que viene", translation: "next year" },
      { word: "algún día", translation: "one day / someday" },
      { word: "tarde o temprano", translation: "sooner or later" },
      { word: "probablemente", translation: "probably" },
      { word: "seguramente", translation: "surely / most likely" },
      { word: "a lo mejor", translation: "maybe (informal)" },
      { word: "comprometerse a", translation: "to commit to" },
    ],
  },

  {
    id: "es-g-a2-12",
    level: "A2",
    title: "Condicional simple — Courtesy, Wishes, Advice",
    explanation: `The condicional simple uses EXACTLY the same irregular stems as the futuro simple, but different endings. If you know the futuro irregulars, the condicional is immediate.

ENDINGS (same for all verb groups):
  yo → -ía       nosotros → -íamos
  tú → -ías      vosotros → -íais
  él/ella → -ía  ellos/ustedes → -ían

IMPORTANT: These endings are identical to the imperfecto of -er/-ir verbs (comía, comías…).
If you know the imperfecto endings, you already know the condicional endings.

hablar: hablaría / hablarías / hablaría / hablaríamos / hablarían
Same irregulars as futuro: tendría / podría / querría / haría / diría / vendría / saldría...

THREE MAIN USES AT A2:

1. POLITE REQUESTS — the most immediately practical use:
   ¿Podría traerme la carta?         (more polite than ¿Puede...?)
   ¿Le importaría bajar la música?
   ¿Me traería un café?
   ¿Sería posible cambiarme de habitación?
   Querría reservar una mesa para esta noche.

   Essential phrases to memorise:
   ¿Podría...?   Me gustaría...   Querría...   ¿Habría...?   ¿Sería posible...?

2. WISHES AND PREFERENCES:
   Me gustaría vivir en Buenos Aires.
   Me encantaría aprender a cocinar bien.
   Preferiría no tener que madrugar tanto.
   Querría cambiar de trabajo, pero...

   Me gustaría vs. Quiero: Both express a wish.
   'Quiero' is direct — fine with friends, can sound abrupt with strangers.
   'Me gustaría' is always appropriate regardless of context.

3. ADVICE:
   Deberías descansar más.              (You should rest more.)
   Podrías hablar con ella directamente. (You could talk to her directly.)
   Yo hablaría con el jefe primero.     (I would talk to the boss first — if I were you)
   Yo que tú, esperaría un poco.        (If I were you, I'd wait)
   Yo en tu lugar, lo haría diferente.  (In your position, I'd do it differently)

PREVIEW — Type 2 conditionals (B1):
   Si tuviera más tiempo, viajaría más.  (hypothetical — B1 content)
   At A2: recognise this pattern when you hear it, but don't need to produce it.`,
    conjugationTable: {
      pronouns: ["yo", "tú", "él / ella / usted", "nosotros", "ellos / ustedes"],
      verbs: [
        { label: "hablar (regular)", forms: ["hablaría", "hablarías", "hablaría", "hablaríamos", "hablarían"] },
        { label: "tener (tendr-)", forms: ["tendría", "tendrías", "tendría", "tendríamos", "tendrían"] },
        { label: "poder (podr-)", forms: ["podría", "podrías", "podría", "podríamos", "podrían"] },
        { label: "hacer (har-)", forms: ["haría", "harías", "haría", "haríamos", "harían"] },
      ],
    },
    rules: [
      {
        condition: "Polite request in a formal or service context",
        result: "Use condicional instead of present — it softens the request significantly",
        examples: [
          { native: "¿Podría hablar más despacio, por favor?", translation: "Could you speak more slowly, please?" },
          { native: "Querría una habitación doble para el sábado.", translation: "I'd like a double room for Saturday." },
        ],
      },
      {
        condition: "Giving advice",
        result: "Use deberías / podrías / yo que tú + condicional for gentle advice",
        examples: [
          { native: "Yo que tú, hablaría con el médico antes de decidir.", translation: "If I were you, I'd talk to the doctor before deciding." },
          { native: "Deberías valorarte más.", translation: "You should value yourself more." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "'Me gustaría' is probably the most useful single expression in the condicional. Make it automatic before anything else.",
      },
      {
        type: "culture",
        content: "In Mexico and Central America, using the condicional in service situations (hotels, restaurants, shops) is almost obligatory to avoid sounding rude. In the Río de la Plata region, direct present is more accepted between people who know each other.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "Buenas tardes. Querría hacer una reserva para el sábado por la noche, si es posible. Somos cuatro personas.", translation: "Good afternoon. I'd like to make a reservation for Saturday evening if possible. There are four of us." },
          { native: "Por supuesto. ¿Preferiría mesa en la terraza o en el interior?", translation: "Of course. Would you prefer a table on the terrace or inside?" },
        ],
      },
      { native: "Me encantaría conocer Cartagena. He escuchado que es increíble.", translation: "I'd love to visit Cartagena. I've heard it's incredible." },
      { native: "Oye, ¿podrías ayudarme con esto un momento?", translation: "Hey, could you help me with this for a moment?" },
    ],
    inlineVocab: [
      { word: "reservar", translation: "to book / reserve" },
      { word: "disponible", translation: "available" },
      { word: "si fuera posible", translation: "if possible" },
      { word: "desde luego", translation: "certainly / of course" },
      { word: "agradecería", translation: "I would appreciate" },
      { word: "en su defecto", translation: "alternatively / if not" },
      { word: "disculpe", translation: "excuse me (formal)" },
    ],
  },

  {
    id: "es-g-a2-13",
    level: "A2",
    title: "Oraciones con si tipo 1 + acabar de + desde hace",
    explanation: `This lesson groups three structures that all express the relationship between time and action in ways Spanish handles differently from English.

TYPE 1 SI CLAUSES (real/possible conditions):
Structure: si + PRESENT INDICATIVE → FUTURE / IMPERATIVE / PRESENT

  Si tienes tiempo, llámame.           (If you have time, call me.)
  Si llueve, me quedo en casa.         (If it rains, I'll stay home.)
  Si trabajas duro, tendrás éxito.     (If you work hard, you'll succeed.)

CRITICAL RULE: NEVER put future or condicional directly after si in Type 1.
  ✗ Si tendrás tiempo...   ✗ Si podrías venir...
  ✓ Si tienes tiempo...    ✓ Si puedes venir...

SI vs. CUANDO:
  SI (condition — may or may not happen): si + PRESENT
  CUANDO (temporal — will happen): cuando + FUTURO

  Si llegas antes de las ocho, avísame.   (condition — if)
  Cuando llegues, avísame.               (temporal — when it happens)

ACABAR DE + INFINITIVE — "have just done":
Present: acabo de / acabas de / acaba de / acabamos de / acaban de + infinitive
  Acabo de llegar.        (I've just arrived.)
  Acaba de llamar.        (She just called.)
  Acabamos de comer.      (We've just eaten.)

Imperfecto of acabar de = "had just done" (past):
  Cuando llegué, ella acababa de salir.  (When I arrived, she had just left.)
  Acababan de cerrar cuando llegamos.    (They had just closed when we got there.)

DESDE HACE / HACE... QUE + PRESENT — ongoing duration:
English uses present perfect + 'for': "I have been living here for three years."
Spanish uses PRESENT TENSE + desde hace or hace... que:
  Vivo aquí desde hace tres años.       (I've been living here for 3 years.)
  Hace tres años que vivo aquí.         (same meaning — different word order)

Both structures are equivalent. The verb is in PRESENT because the action is still ongoing.

CONTRAST — completed vs. ongoing:
  Llegué a México hace un mes.          (I arrived in Mexico a month ago — COMPLETED → indefinido)
  Vivo en México desde hace un mes.     (I've been living in Mexico for a month — ONGOING → present)

Asking: ¿Cuánto tiempo llevas estudiando español? / ¿Desde cuándo estudias español?
Answer: Desde hace dos años. / Hace dos años que estudio.`,
    rules: [
      {
        condition: "Type 1 si clause — real/possible condition",
        result: "si + present indicative (NEVER future). Result clause: future / imperative / present.",
        examples: [
          { native: "Si quieres, podemos ir a cenar el viernes.", translation: "If you want, we can go out for dinner on Friday." },
          { native: "Si no lo haces ahora, lo olvidarás.", translation: "If you don't do it now, you'll forget it." },
        ],
      },
      {
        condition: "Acabar de — immediate past",
        result: "acabar de + infinitive. Present = just now. Imperfecto = had just (in narrative).",
        examples: [
          { native: "Acabo de ver tu mensaje. ¿Qué pasó?", translation: "I just saw your message. What happened?" },
          { native: "Cuando llegué al aeropuerto, el vuelo acababa de salir.", translation: "When I arrived at the airport, the flight had just departed." },
        ],
      },
      {
        condition: "Duration still ongoing — from past until now",
        result: "PRESENT tense + desde hace / hace... que (NOT present perfect)",
        examples: [
          { native: "Trabajo en esta empresa desde hace seis meses.", translation: "I've been working at this company for six months." },
          { native: "Hace dos años que no la veo.", translation: "I haven't seen her for two years." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "The most common error: 'He vivido aquí desde hace tres años.' — Wrong! Use present tense: 'Vivo aquí desde hace tres años.' The action is ongoing, so Spanish uses present, not present perfect.",
      },
      {
        type: "warning",
        content: "Never future after si in Type 1: 'Si tendrás tiempo' ✗ → 'Si tienes tiempo' ✓. This is the most persistent error in si clauses.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "Oye, acabo de llegar al café y no te veo.", translation: "Hey, I've just arrived at the café and I can't see you." },
          { native: "Perdona, acabo de salir del metro. Estoy a dos minutos. Si pides el café de especialidad, verás que es diferente.", translation: "Sorry, I've just come out of the metro. I'm two minutes away. If you order the specialty coffee, you'll see it's different." },
        ],
      },
      { native: "Estudio español desde hace dos años, pero todavía me cuesta mucho el subjuntivo.", translation: "I've been studying Spanish for two years, but the subjunctive is still very hard for me." },
      { native: "Si tienes hambre, acaban de poner los sándwiches del día.", translation: "If you're hungry, they've just put out today's sandwiches." },
    ],
    inlineVocab: [
      { word: "siempre que", translation: "whenever / as long as" },
      { word: "desde", translation: "since (+ point in time: desde el lunes)" },
      { word: "hace un rato", translation: "a little while ago" },
      { word: "nada más + infinitivo", translation: "as soon as / right after doing" },
      { word: "en cuanto", translation: "as soon as" },
      { word: "de vez en cuando", translation: "from time to time" },
      { word: "llevar + gerundio", translation: "to have been doing X for Y" },
    ],
  },
]
