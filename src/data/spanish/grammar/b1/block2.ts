import { GrammarLesson } from "../../../../types"

// Block 2 — "Lo que quiero, lo que siento" (Units 4–7)
// Subjuntivo presente — formation, volition, emotion/doubt, conjunctions, superlative+uncertain relative

export const block2Lessons: GrammarLesson[] = [
  {
    id: "es-g-b1-4",
    level: "B1",
    title: "Subjuntivo Presente — Formation and Volition",
    explanation: {
      native: `The subjuntivo is the single most important B1 grammar step in Spanish. It is a MOOD (not a tense) — it expresses wishes, doubts, emotions, purpose, and hypotheticals. It is triggered by certain verbs and constructions when the speaker adds subjectivity to the message.

FORMATION — regular verbs:
Take the YO form of present indicative, remove the -o, add subjunctive endings:
  -AR verbs: -e, -es, -e, -emos, -éis, -en
  -ER/-IR verbs: -a, -as, -a, -amos, -áis, -an

  hablar: hablo → habl- → hable, hables, hable, hablemos, habléis, hablen
  comer: como → com- → coma, comas, coma, comamos, comáis, coman
  tener: tengo → teng- → tenga, tengas, tenga...
  hacer: hago → hag- → haga, hagas, haga...
  salir: salgo → salg- → salga...

HIGH-FREQUENCY IRREGULARS (must memorise):
  ser: sea, seas, sea, seamos, seáis, sean
  estar: esté, estés, esté, estemos, estéis, estén
  ir: vaya, vayas, vaya, vayamos, vayáis, vayan
  haber: haya, hayas, haya, hayamos, hayáis, hayan
  saber: sepa, sepas, sepa, sepamos, sepáis, sepan
  dar: dé, des, dé, demos, deis, den

THE TWO CONDITIONS FOR SUBJUNCTIVE:
1. The main verb expresses VOLITION (wanting, wishing, recommending, demanding)
2. There are TWO DIFFERENT SUBJECTS in the sentence

Same subject → infinitive: Quiero salir. (I want to leave)
Different subjects → que + subjuntivo: Quiero que salgas. (I want you to leave)

VOLITION VERBS that trigger subjuntivo:
  querer que, desear que, preferir que, necesitar que, pedir que, exigir que,
  recomendar que, sugerir que, insistir en que, esperar que, proponer que

IMPERSONAL CONSTRUCTIONS:
  Es necesario que, es importante que, hace falta que, más vale que, es mejor que`,
      target: `El subjuntivo es el paso gramatical más importante del B1. Es un MODO (no un tiempo) — expresa deseos, dudas, emociones, propósito e hipótesis.

FORMACIÓN:
Toma la forma YO del presente de indicativo, elimina la -o, añade las terminaciones de subjuntivo:
  -AR: -e, -es, -e, -emos, -éis, -en
  -ER/-IR: -a, -as, -a, -amos, -áis, -an

LAS DOS CONDICIONES:
1. El verbo principal expresa VOLICIÓN
2. Hay DOS SUJETOS DIFERENTES

Mismo sujeto → infinitivo: Quiero salir.
Sujetos diferentes → que + subjuntivo: Quiero que salgas.`,
    },
    conjugationTable: {
      pronouns: ["yo", "tú", "él/ella/usted", "nosotros", "ellos/ustedes"],
      verbs: [
        { label: "hablar", forms: ["hable", "hables", "hable", "hablemos", "hablen"] },
        { label: "comer", forms: ["coma", "comas", "coma", "comamos", "coman"] },
        { label: "tener", forms: ["tenga", "tengas", "tenga", "tengamos", "tengan"] },
        { label: "ser (irreg.)", forms: ["sea", "seas", "sea", "seamos", "sean"] },
        { label: "ir (irreg.)", forms: ["vaya", "vayas", "vaya", "vayamos", "vayan"] },
      ],
    },
    rules: [
      {
        condition: "Same subject in both clauses",
        result: "Use infinitive — no que, no subjuntivo",
        examples: [
          { native: "Quiero salir. / Prefiero comer aquí.", translation: "I want to leave. / I prefer to eat here." },
        ],
      },
      {
        condition: "Different subjects — volition verb in main clause",
        result: "Use que + subjuntivo in the second clause",
        examples: [
          { native: "Quiero que vengas a la reunión.", translation: "I want you to come to the meeting." },
          { native: "El médico recomienda que hagas ejercicio.", translation: "The doctor recommends that you exercise." },
          { native: "Es importante que llegues a tiempo.", translation: "It is important that you arrive on time." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The key insight: the subjunctive is activated by certain constructions — it signals subjectivity and personal stance, not a time. Think of it as a grammatical mood, not a tense.",
      },
      {
        type: "warning",
        content: "The irregular subjunctives of ser (sea), estar (esté), ir (vaya), haber (haya), and saber (sepa) are extremely high frequency — they appear in almost every subjunctive context. Memorise them first.",
      },
    ],
    examples: [
      { native: "Quiero que seas honesto conmigo.", translation: "I want you to be honest with me." },
      { native: "Ella prefiere que salgamos más tarde.", translation: "She prefers that we leave later." },
      { native: "Insisto en que estéis puntuales.", translation: "I insist that you (all) be on time." },
      { native: "Hace falta que todos participen en la reunión.", translation: "It is necessary for everyone to take part in the meeting." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Qué quiere tu madre para la cena de Navidad?", translation: "What does your mother want for the Christmas dinner?" },
          { native: "Quiere que toda la familia esté. Insiste en que lleguemos antes de las ocho. Y pide que traigamos algo de beber. En definitiva, prefiere que sea una sorpresa para la abuela.", translation: "She wants the whole family to be there. She insists we arrive before eight. And she asks us to bring something to drink. Basically, she prefers it to be a surprise for grandma." },
        ],
        annotation: "Four subjunctive triggers: quiere que (esté), insiste en que (lleguemos), pide que (traigamos), prefiere que (sea).",
      },
    ],
    inlineVocab: [
      { word: "exigir", translation: "to demand" },
      { word: "insistir en que", translation: "to insist that" },
      { word: "hace falta que", translation: "it is needed that" },
      { word: "más vale que", translation: "it is better that" },
      { word: "a tiempo", translation: "on time" },
      { word: "imprescindible", translation: "essential" },
      { word: "proponer", translation: "to propose / suggest" },
      { word: "desear", translation: "to wish / desire" },
    ],
  },
  {
    id: "es-g-b1-5",
    level: "B1",
    title: "Subjuntivo — Emoción, Duda y el Contraste Certeza/Incertidumbre",
    explanation: {
      native: `The subjuntivo encodes the SPEAKER'S RELATIONSHIP to the information — not just the information itself. The key divide is certainty vs. uncertainty/subjectivity.

CERTAINTY → indicative: Sé que viene. / Creo que está aquí.
DOUBT/EMOTION → subjuntivo: Dudo que venga. / Temo que esté aquí.

EMOTION VERBS that trigger subjuntivo:
  alegrarse de que (to be glad that), estar contento/a de que,
  sentir que (to be sorry that), sorprender que / sorprenderse de que,
  tener miedo de que, temer que, molestar que, decepcionar que,
  estar orgulloso/a de que, gustar que

DOUBT/POSSIBILITY expressions:
  dudar que, no creer que, no pensar que,
  es posible que, es probable que, es poco probable que,
  no es seguro que, parece mentira que, es una pena que, es raro que

CRITICAL CONTRAST — affirmative vs negative belief verbs:
  Creo que ESTÁ en casa. (affirmative → indicative — certainty)
  No creo que ESTÉ en casa. (negative → subjuntivo — doubt)
  Pienso que VENDRÁ. → No pienso que VENGA.

IMPERSONAL EXPRESSIONS OF EMOTION:
  es una pena que, es normal que, es lógico que, es extraño que,
  es increíble que, es injusto que, es fantástico que, me parece bien/mal que`,
      target: `El subjuntivo codifica LA RELACIÓN DEL HABLANTE con la información. La división clave es certeza vs. incertidumbre/subjetividad.

CERTEZA → indicativo: Sé que viene. / Creo que está aquí.
DUDA/EMOCIÓN → subjuntivo: Dudo que venga. / Me alegra que estés aquí.

CONTRASTE CRÍTICO:
  Creo que ESTÁ (indicativo — certeza)
  No creo que ESTÉ (subjuntivo — duda)`,
    },
    rules: [
      {
        condition: "Verbs of emotion (different subjects)",
        result: "Use que + subjuntivo after the emotion verb",
        examples: [
          { native: "Me alegra que hayas venido.", translation: "I'm glad you came." },
          { native: "Tengo miedo de que no llegue a tiempo.", translation: "I'm afraid he won't arrive on time." },
          { native: "Es una pena que no puedas venir.", translation: "It's a shame you can't come." },
        ],
      },
      {
        condition: "Doubt and uncertainty expressions",
        result: "Use que + subjuntivo",
        examples: [
          { native: "Dudo que tenga razón.", translation: "I doubt he's right." },
          { native: "Es posible que haya un error.", translation: "It's possible there's a mistake." },
          { native: "Parece mentira que ya sea diciembre.", translation: "It seems unbelievable that it's already December." },
        ],
      },
      {
        condition: "Creer / pensar — affirmative vs negative",
        result: "Affirmative → indicative. Negated → subjuntivo.",
        examples: [
          { native: "Creo que viene. → No creo que venga.", translation: "I think he's coming. → I don't think he's coming." },
          { native: "Pienso que es verdad. → No pienso que sea verdad.", translation: "I think it's true. → I don't think it's true." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "In fast spoken Spanish, many speakers use indicative after emotion/doubt verbs. This is common in casual speech but incorrect in formal contexts and exams. Aim for subjuntivo in your production.",
      },
      {
        type: "tip",
        content: "The contrast creo que + indicative vs no creo que + subjuntivo is one of the most tested B1/B2 contrasts. Practice it explicitly with minimal pairs.",
      },
    ],
    examples: [
      { native: "Me sorprende que haga tan buen tiempo en enero.", translation: "It surprises me that the weather is so good in January." },
      { native: "No creo que sea mala idea — francamente, no parecía feliz.", translation: "I don't think it's a bad idea — frankly, he didn't seem happy." },
      { native: "Me parece mal que no nos avisen con antelación.", translation: "I think it's wrong that they don't warn us in advance." },
      { native: "Es increíble que ya hayan terminado el proyecto.", translation: "It's incredible that they've already finished the project." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Has oído que Carlos deja el trabajo?", translation: "Have you heard that Carlos is leaving the job?" },
          { native: "¿En serio? Me sorprende que se vaya — creía que le gustaba. Me parece una pena que no nos haya dicho nada antes. Aunque... no creo que sea mala idea — la verdad es que no parecía muy feliz últimamente.", translation: "Really? It surprises me that he's leaving — I thought he liked it. I think it's a shame he didn't tell us anything before. Although... I don't think it's a bad idea — honestly he didn't seem very happy lately." },
        ],
        annotation: "Subjuntivo after emotion/doubt: me sorprende que (se vaya), me parece una pena que (haya dicho), no creo que (sea). Indicative after certainty: creía que le gustaba.",
      },
    ],
    inlineVocab: [
      { word: "es una pena", translation: "it's a shame" },
      { word: "aliviado/a", translation: "relieved" },
      { word: "decepcionado/a", translation: "disappointed" },
      { word: "convenirle a alguien", translation: "to suit sb / be right for sb" },
      { word: "parece mentira que", translation: "it seems unbelievable that" },
      { word: "sorprendente", translation: "surprising" },
      { word: "tomar una decisión", translation: "to make a decision" },
      { word: "francamente", translation: "honestly / frankly" },
    ],
  },
  {
    id: "es-g-b1-6",
    level: "B1",
    title: "Subjuntivo con Conjunciones — Para que, Aunque, Antes de que, A menos que",
    explanation: {
      native: `Certain conjunctions always (or sometimes) take the subjuntivo. These are essential for nuanced argument and explanation.

PURPOSE: para que / a fin de que (so that)
  Same subject → para + infinitivo: Trabajo para terminar a tiempo.
  Different subjects → para que + subjuntivo: Te lo explico para que lo entiendas.
  A fin de que is more formal: Lo hemos organizado a fin de que todo salga bien.

CONCESSION: aunque — unique in Spanish
  aunque + INDICATIVE = although (fact — speaker accepts it as true)
    Aunque estoy cansado, voy. (I AM tired — I accept this as fact)
  aunque + SUBJUNTIVO = even if (hypothetical — uncertain or not confirmed)
    Aunque esté cansado, iré. (even if I'm tired — I may or may not be)

DECISION RULE FOR AUNQUE:
  ¿El hablante acepta esto como hecho cierto? → indicativo
  ¿Lo trata como hipotético, incierto? → subjuntivo

CONJUNCTIONS THAT ALWAYS TAKE SUBJUNTIVO:
  antes de que (before), a menos que (unless), con tal de que (as long as),
  sin que (without), para que (so that)

TIME CONJUNCTIONS: subjuntivo for future, indicative for past/habit
  cuando + subjuntivo (future): Llámame cuando llegues.
  cuando + indicativo (past): Me llamó cuando llegó.
  hasta que + subjuntivo (future): Espera hasta que llegue.
  en cuanto + subjuntivo (future): En cuanto sepa algo, te aviso.`,
      target: `Ciertas conjunciones siempre (o a veces) rigen subjuntivo.

FINALIDAD: para que + subjuntivo (sujetos distintos)
  Mismo sujeto → para + infinitivo: Trabajo para terminar.
  Sujetos distintos → para que + subjuntivo: Te lo explico para que lo entiendas.

AUNQUE — único en español:
  aunque + indicativo = aunque (hecho aceptado como cierto)
  aunque + subjuntivo = aunque / incluso si (hipotético, incierto)

CONJUNCIONES QUE SIEMPRE RIGEN SUBJUNTIVO:
  antes de que, a menos que, con tal de que, sin que, para que

CONJUNCIONES TEMPORALES:
  cuando + subjuntivo (futuro) / cuando + indicativo (pasado/hábito)`,
    },
    rules: [
      {
        condition: "Para que — purpose with different subjects",
        result: "para que + subjuntivo",
        examples: [
          { native: "Te lo explico para que lo entiendas.", translation: "I'm explaining it to you so that you understand." },
          { native: "Hablamos despacio para que los estudiantes entiendan.", translation: "We speak slowly so that the students understand." },
        ],
      },
      {
        condition: "Aunque + indicativo",
        result: "Accepted fact — 'although (it is true that...)'",
        examples: [
          { native: "Aunque llueve, voy a salir.", translation: "Although it's raining (it is — I know it), I'm going out." },
        ],
      },
      {
        condition: "Aunque + subjuntivo",
        result: "Hypothetical / not confirmed — 'even if'",
        examples: [
          { native: "Aunque llueva, voy a salir.", translation: "Even if it rains (I don't know yet if it will), I'll go out." },
        ],
      },
      {
        condition: "Temporal conjunctions + future event",
        result: "Use subjuntivo: cuando, hasta que, en cuanto, antes de que, después de que",
        examples: [
          { native: "Llámame cuando llegues. / Espera hasta que llegue.", translation: "Call me when you arrive. / Wait until he arrives." },
          { native: "Iré, a menos que llueva.", translation: "I'll go, unless it rains." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The aunque contrast (indicativo = fact / subjuntivo = hypothetical) is one of the most subtle B1/B2 distinctions in Spanish and is frequently tested in DELE exams.",
      },
      {
        type: "warning",
        content: "Cuando + future event ALWAYS takes subjuntivo. A very common error: 'Cuando llegará' (wrong) → 'Cuando llegues' (correct).",
      },
    ],
    examples: [
      { native: "Se lo dije para que entendiera mis razones.", translation: "I told him so that he would understand my reasons." },
      { native: "Voy a salir antes de que empiece a llover.", translation: "I'm going out before it starts raining." },
      { native: "En cuanto llegues, cuéntame qué tal.", translation: "As soon as you arrive, tell me how it went." },
      { native: "Iré a la reunión, a menos que haya un problema imprevisto.", translation: "I'll go to the meeting, unless there's an unforeseen problem." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Cuándo te vas al extranjero?", translation: "When are you going abroad?" },
          { native: "En tres meses, a menos que haya algún problema con el visado. Me fui para que entendieran mis razones. Mi madre está preocupada, aunque acepta mi decisión. Y quiero irme antes de que empiece el otoño.", translation: "In three months, unless there's some problem with the visa. I explained myself so that they would understand my reasons. My mother is worried, although she accepts my decision. And I want to leave before autumn starts." },
        ],
        annotation: "a menos que (haya) — always subjuntivo. para que (entendieran) — subjuntivo. aunque acepta — indicativo (accepted fact). antes de que (empiece) — always subjuntivo.",
      },
    ],
    inlineVocab: [
      { word: "el extranjero", translation: "abroad" },
      { word: "a menos que", translation: "unless" },
      { word: "hasta que", translation: "until" },
      { word: "antes de que", translation: "before" },
      { word: "con tal de que", translation: "as long as / provided that" },
      { word: "sin que", translation: "without (someone doing sth)" },
      { word: "en cuanto", translation: "as soon as" },
      { word: "a fin de que", translation: "in order that (formal)" },
      { word: "el visado", translation: "visa" },
    ],
  },
  {
    id: "es-g-b1-7",
    level: "B1",
    title: "Subjuntivo — Superlativo y Relativa Incierta (Síntesis)",
    explanation: {
      native: `Two final subjuntivo contexts complete the B1 system.

SUBJUNTIVO AFTER SUPERLATIVES:
When a relative clause follows a superlative, Spanish uses subjuntivo — the superlative expresses subjective judgment:
  Es la mejor película que haya visto jamás.
  Es la única persona que sepa escucharme de verdad.
  Es el mayor riesgo que podamos tomar.

Pattern: [superlativo / el único / el primero / el peor] + que + subjuntivo
  el mejor que, el peor que, el único que, el primero que, lo más... que

SUBJUNTIVO IN RELATIVE CLAUSES WITH UNCERTAIN REFERENT:
When the main clause SEARCHES FOR something that may not exist → subjuntivo:
  Busco a alguien que hable japonés. (looking for sb — do they exist?)
  ¿Hay algún sitio donde podamos aparcar? (uncertain whether there is one)

Known/existing referent → indicative:
  Encontré a alguien que habla japonés. (found = exists)
  Hay un sitio donde podemos aparcar. (it exists)

Test: Does the relative clause refer to something definitely existing? (→ indicative)
Or something sought/uncertain? (→ subjuntivo)

B1 SUBJUNTIVO TRIGGER SUMMARY:
  Volición: querer que, preferir que, pedir que → subjuntivo
  Emoción: alegrarse de que, temer que → subjuntivo
  Duda: dudar que, es posible que, no creer que → subjuntivo
  Finalidad: para que, a fin de que → subjuntivo
  Concesión (hipotética): aunque + subjuntivo
  Temporal (futuro): cuando, hasta que, antes de que → subjuntivo
  Superlativo / único: el mejor que, el único que → subjuntivo
  Relativa incierta: buscar algo que... → subjuntivo
  Certeza: saber que, es cierto que, creer que (affirm.) → indicativo`,
      target: `Dos contextos finales completan el sistema de subjuntivo B1.

SUBJUNTIVO DESPUÉS DE SUPERLATIVOS:
  Es la mejor película que haya visto jamás.
  Es la única persona que sepa escucharme de verdad.

SUBJUNTIVO EN RELATIVAS CON REFERENTE INCIERTO:
  Busco a alguien que hable japonés. (¿existe? — incierto → subjuntivo)
  Encontré a alguien que habla japonés. (existe → indicativo)

RESUMEN DE TRIGGERS B1:
  Volición, emoción, duda, finalidad, concesión hipotética, temporal futuro, superlativo, relativa incierta → subjuntivo
  Certeza → indicativo`,
    },
    rules: [
      {
        condition: "Superlative or el único/primero/peor + relative clause",
        result: "Use subjuntivo — subjective judgment triggers the mood",
        examples: [
          { native: "Es la cosa más extraña que haya oído nunca.", translation: "It's the strangest thing I have ever heard." },
          { native: "Fue el primer estudiante que entendiera el concepto.", translation: "He was the first student to understand the concept." },
        ],
      },
      {
        condition: "Seeking something uncertain / non-existent referent",
        result: "Use subjuntivo in the relative clause",
        examples: [
          { native: "Busco un apartamento que sea tranquilo y no muy caro.", translation: "I'm looking for a flat that is quiet and not too expensive." },
          { native: "Necesitamos a alguien que sepa hablar chino.", translation: "We need someone who can speak Chinese." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "This unit is the capstone of the B1 subjuntivo system. The full trigger table in the explanation is worth memorising as a reference card — it covers everything you need to pass B1 subjuntivo tasks.",
      },
    ],
    examples: [
      { native: "Es el mejor barrio que conozca en esta ciudad.", translation: "It's the best neighbourhood I know in this city." },
      { native: "Busco un trabajo que tenga buen ambiente y buenos horarios.", translation: "I'm looking for a job that has a good atmosphere and good hours." },
      { native: "Es imprescindible que tenga cocina de verdad — no solo una minicocina.", translation: "It's essential that it has a real kitchen — not just a mini kitchen." },
      { native: "Es lo más útil que podamos hacer en esta situación.", translation: "It's the most useful thing we can do in this situation." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Qué tipo de piso buscas?", translation: "What kind of flat are you looking for?" },
          { native: "Busco un apartamento que sea tranquilo, cerca del centro y no demasiado caro. Dudo que encontremos todo eso por menos de novecientos euros, pero es lo mejor que podamos hacer. Y prefiero que esté en este barrio, aunque el de al lado también sea agradable.", translation: "I'm looking for a flat that is quiet, close to the centre and not too expensive. I doubt we'll find all that for under nine hundred euros, but it's the best we can do. And I prefer it to be in this neighbourhood, even if the one next to it is also pleasant." },
        ],
        annotation: "Uncertain referent: que sea tranquilo. Doubt: dudo que (encontremos). Superlative + subjuntivo: lo mejor que podamos hacer. Aunque + subjuntivo: aunque sea.",
      },
    ],
    inlineVocab: [
      { word: "el barrio", translation: "neighbourhood" },
      { word: "imprescindible", translation: "essential" },
      { word: "agradable", translation: "pleasant" },
      { word: "aparcar", translation: "to park" },
      { word: "buscar algo que...", translation: "to look for sth that..." },
      { word: "de verdad", translation: "truly / really" },
      { word: "exigir", translation: "to demand / require" },
    ],
  },
]
