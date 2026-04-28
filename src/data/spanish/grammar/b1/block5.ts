import { GrammarLesson } from "../../../../types"

// Block 5 — "El español auténtico" (Units 14–17)
// Perception verbs + hacer causativo, discourse structure B1, colloquial/regional

export const block5Lessons: GrammarLesson[] = [
  {
    id: "es-g-b1-14",
    level: "B1",
    title: "Verbos de Percepción y Hacer Causativo",
    explanation: {
      native: `These constructions are everywhere in authentic Spanish — without them, learners must paraphrase. With them, speech becomes compact and natural.

PERCEPTION VERBS + INFINITIVE:
Formula: verb of perception + direct object + infinitive
The direct object is also the SUBJECT of the infinitive action:
  Vi a María bailar. (I saw María dancing — she dances, I see it)
  Oí a alguien llamar a la puerta. (I heard someone knocking)
  Sentí el corazón latir más rápido. (I felt my heart beating faster)
  Escuché al profesor explicar el tema. (I listened to the teacher explain)

Verbs used this way: ver, oír, sentir, observar, escuchar, notar

WITH PRONOUNS — the pronoun goes BEFORE the perception verb:
  La vi bailar. (I saw her dancing)
  Lo oí salir. (I heard him leaving)
  ¿Los has visto pasar? (Did you see them go by?)

INFINITIVE vs GERUNDIO — both correct after perception verbs:
  Vi a María bailar / bailando. (both correct)
  The gerundio emphasises the ongoing nature of the action.

HACER CAUSATIVO — to have (something done) / to make (someone do):
Formula: hacer + infinitivo
  Hago limpiar la casa. (I have the house cleaned.)
  Hizo construir un muro. (He had a wall built.)
  El profesor hace trabajar a los estudiantes. (The teacher makes the students work.)
  Eso me hizo reír. (That made me laugh.)

WITH SPECIFIED AGENT: hacer + infinitivo + a + person
  Hizo reparar el coche a un mecánico. (He had the car fixed by a mechanic.)

WITH PRONOUNS — object goes BEFORE hacer:
  Lo hago reparar. (I'm having it fixed)
  La hizo limpiar. (She had it cleaned)

DEJAR + INFINITIVO — to let / allow:
  Déjame hablar. (Let me speak.)
  No te dejan entrar sin documento. (They don't let you in without ID.)
  Déjalo ir. (Let him go.)`,
      target: `VERBOS DE PERCEPCIÓN + INFINITIVO:
Verbo de percepción + objeto directo + infinitivo
  Vi a María bailar. / Oí a alguien llamar. / Sentí el corazón latir.

Con pronombres — el pronombre va ANTES del verbo de percepción:
  La vi bailar. / Lo oí salir.

Infinitivo o gerundio — ambos correctos:
  Vi a María bailar / bailando.

HACER CAUSATIVO:
  hacer + infinitivo = hacer que alguien haga algo / encargar algo
  Hizo construir un muro. / Eso me hizo reír.
  Con pronombres — el objeto va ANTES de hacer:
  Lo hago reparar.

DEJAR + INFINITIVO:
  Déjame hablar. / No te dejan entrar sin documento.`,
    },
    rules: [
      {
        condition: "Perception verb + direct object + infinitive",
        result: "Object is the actor of the infinitive — place pronoun before perception verb",
        examples: [
          { native: "La vi salir. / Lo oí hablar.", translation: "I saw her leave. / I heard him talking." },
          { native: "Les escuché discutir durante horas.", translation: "I listened to them arguing for hours." },
        ],
      },
      {
        condition: "Hacer causativo — having something done",
        result: "hacer + infinitivo (+ a + person if agent specified)",
        examples: [
          { native: "Hizo reparar el coche. / Lo voy a hacer reparar el lunes.", translation: "He had the car repaired. / I'm going to have it repaired on Monday." },
          { native: "El ruido me hizo despertar de golpe.", translation: "The noise made me wake up suddenly." },
        ],
      },
      {
        condition: "Dejar + infinitivo — allowing",
        result: "dejar + pronoun + infinitive (or dejar + object + infinitive)",
        examples: [
          { native: "Déjame explicarte. / No me dejes hablar.", translation: "Let me explain to you. / Don't let me speak (stop me)." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The pronoun placement rule — before the perception/causative verb, not before the infinitive — is the key skill. La vi bailar (correct) NOT vi la bailar (incorrect).",
      },
      {
        type: "culture",
        content: "Hacer causativo is commonly used in everyday Spanish for household tasks: hacer reparar, hacer limpiar, hacer arreglar. It sounds more natural than the passive construction.",
      },
    ],
    examples: [
      { native: "Los oí cantar hasta la medianoche.", translation: "I heard them singing until midnight." },
      { native: "Los vi llegar — parecían estar muy bien.", translation: "I saw them arrive — they seemed to be in great spirits." },
      { native: "Eso me hizo pensar en cuando éramos más jóvenes.", translation: "That made me think of when we were younger." },
      { native: "La voy a hacer reparar el lunes — hay un amigo que lo hace muy bien.", translation: "I'm going to have it repaired on Monday — there's a friend who does it very well." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Oíste a los vecinos anoche?", translation: "Did you hear the neighbours last night?" },
          { native: "Sí, los oí cantar hasta tarde. Y los vi llegar al edificio con un montón de gente. Los dejé hacer — total, era viernes. A mí me hizo pensar en cuando hacíamos lo mismo. Oye, ¿y la ventana? ¿La has hecho reparar ya?", translation: "Yes, I heard them singing until late. And I saw them arrive at the building with a whole crowd. I let them be — after all, it was Friday. It made me think of when we used to do the same. Hey, and the window? Have you had it repaired yet?" },
        ],
        annotation: "Perception: oí cantar, vi llegar. Dejar + infinitivo: los dejé hacer. Hacer causativo: me hizo pensar, la has hecho reparar. Hacíamos lo mismo — imperfecto for habitual past.",
      },
    ],
    inlineVocab: [
      { word: "el amanecer", translation: "dawn" },
      { word: "la medianoche", translation: "midnight" },
      { word: "total (que)", translation: "so / the thing is / after all" },
      { word: "latir", translation: "to beat (heart)" },
      { word: "notar", translation: "to notice" },
      { word: "reparar", translation: "to repair" },
      { word: "construir", translation: "to build" },
      { word: "eso me hizo...", translation: "that made me..." },
      { word: "de todas formas", translation: "anyway" },
    ],
  },
  {
    id: "es-g-b1-15",
    level: "B1",
    title: "Estructurar el Discurso — Matizar, Organizar y Reformular",
    explanation: {
      native: `The gap between A2 and B1 is largely discourse fluency — the ability to qualify, hedge, organise, and recover in real time. These tools make speakers sound thoughtful and structured.

HEDGING — qualifying a statement:
  me parece que (it seems to me that)
  tengo la impresión de que (I have the impression that)
  hasta cierto punto (to a certain extent)
  en cierto modo (in a way / to some extent)
  que yo sepa (as far as I know)
  en términos generales (generally speaking)
  en principio (in principle)

STRENGTHENING — asserting firmly:
  está claro que, es evidente que, no cabe duda de que, es innegable que,
  hay que reconocer que

STRUCTURING THE ARGUMENT:
  Opening: en cuanto a, respecto a, antes de nada, para empezar
  Listing: por un lado... por otro (lado), en primer lugar... en segundo lugar,
           además, asimismo, por otra parte
  Concluding: en definitiva, en resumen, al fin y al cabo, en última instancia,
              lo que sí está claro es que

REFORMULATION AND CLARIFICATION:
  es decir (that is to say — clarifying)
  o sea (I mean / in other words — informal, very common in speech)
  dicho de otro modo (in other words — formal)
  lo que quiero decir es que (what I mean is — emphasis + clarification)
  en otras palabras (in other words — formal)

CONCEDING A POINT:
  es cierto que, no se puede negar que, hay que reconocer que,
  si bien, tengo que admitir que, concedo que

CHECKING AND MANAGING UNDERSTANDING:
  ¿Me sigues? / ¿Lo ves? — checking
  No sé si me explico bien — checking own clarity
  ¿A qué te refieres? / ¿Podrías desarrollar eso? — asking for clarification`,
      target: `MATIZACIÓN: me parece que, hasta cierto punto, en cierto modo, que yo sepa

ESTRUCTURACIÓN DEL ARGUMENTO:
  Apertura: en cuanto a, respecto a, para empezar
  Lista: por un lado... por otro, en primer lugar... en segundo lugar, además
  Conclusión: en definitiva, al fin y al cabo, en resumen

REFORMULACIÓN:
  es decir (clarificación), o sea (informal — muy frecuente en el habla),
  lo que quiero decir es que

CONCESIÓN: es cierto que, hay que reconocer que, si bien, tengo que admitir que`,
    },
    rules: [
      {
        condition: "Structuring a two-sided argument",
        result: "por un lado... por otro (lado)",
        examples: [
          { native: "Por un lado, la flexibilidad es innegable. Por otro lado, falta el vínculo social.", translation: "On one hand, the flexibility is undeniable. On the other hand, the social bond is lacking." },
        ],
      },
      {
        condition: "Conceding before countering",
        result: "es cierto que... sin embargo / hay que reconocer... pero",
        examples: [
          { native: "Es cierto que algunos estudios muestran mejoras. Sin embargo, estos datos ocultan grandes desigualdades.", translation: "It is true that some studies show improvements. However, these data hide great inequalities." },
        ],
      },
      {
        condition: "Reformulating for clarity",
        result: "es decir / o sea / lo que quiero decir es que",
        examples: [
          { native: "Llegó tarde — o sea, a las doce de la noche.", translation: "He arrived late — I mean, at midnight." },
          { native: "El proyecto fracasó, es decir, no cumplió ninguno de sus objetivos.", translation: "The project failed, that is to say, it met none of its goals." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "O sea is extremely frequent in spoken Spanish — it is the universal reformulation tool for real-time clarification and self-correction. Use it freely in conversation.",
      },
      {
        type: "culture",
        content: "Spanish public debate (politics, law, academia) values structured argument with clear signposting. Acknowledging the opposing view (es cierto que... sin embargo) before refuting it is a mark of educated discourse across Spain and Latin America.",
      },
    ],
    examples: [
      { native: "En cuanto a la cuestión del teletrabajo, me parece que las ventajas son reales, pero hay que matizarlas.", translation: "As regards the question of remote work, it seems to me that the advantages are real, but they need to be qualified." },
      { native: "Por un lado, la flexibilidad es innegable. Por otro lado, falta el vínculo social.", translation: "On one hand, the flexibility is undeniable. On the other hand, the social bond is lacking." },
      { native: "Es cierto que los indicadores muestran mejora. Hay que reconocer, sin embargo, que no es el caso para todo el mundo.", translation: "It is true that the indicators show improvement. One must acknowledge, however, that this is not the case for everyone." },
      { native: "En definitiva, no se trata de elegir entre oficina y casa, sino de encontrar un equilibrio adaptado a cada situación.", translation: "Ultimately, it is not about choosing between office and home, but about finding a balance adapted to each situation." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Qué piensas del teletrabajo?", translation: "What do you think about remote work?" },
          { native: "Bueno, en cuanto a ese tema, me parece que hay que matizarlo bastante. Por un lado, la flexibilidad es innegable — los empleados ganan tiempo y concilian mejor su vida. Por otro lado, falta contacto, o sea, el vínculo social que da la oficina. Es cierto que hay estudios positivos. Sin embargo, no creo que funcione igual para todo el mundo. En definitiva, lo que importa es el equilibrio.", translation: "Well, as regards that topic, it seems to me that it needs quite a lot of nuancing. On one hand, the flexibility is undeniable — employees save time and balance their lives better. On the other hand, contact is lacking, I mean, the social bond the office provides. It is true there are positive studies. However, I don't think it works the same for everyone. Ultimately, what matters is balance." },
        ],
        annotation: "Discourse tools: en cuanto a, me parece que (hedge), por un lado/por otro lado (structure), o sea (reformulation), es cierto que... sin embargo (concession + counter), en definitiva (conclusion), lo que importa (lo que — abstract reference).",
      },
    ],
    inlineVocab: [
      { word: "matizar", translation: "to qualify / nuance" },
      { word: "en definitiva", translation: "ultimately / in short" },
      { word: "al fin y al cabo", translation: "when all is said and done" },
      { word: "hay que reconocer que", translation: "one must acknowledge that" },
      { word: "o sea", translation: "I mean / in other words (informal)" },
      { word: "es decir", translation: "that is to say" },
      { word: "en cuanto a", translation: "as regards / concerning" },
      { word: "no se trata de... sino de", translation: "it's not about... but about" },
      { word: "la conciliación", translation: "work-life balance" },
      { word: "el desplazamiento", translation: "commute / journey" },
    ],
  },
  {
    id: "es-g-b1-16",
    level: "B1",
    title: "El Español que se Habla — Jerga, Modismos y Variedades Regionales",
    explanation: {
      native: `You've learned the system. Now you learn how real speakers USE it, BEND it, and COLOUR it with slang, regional expression, and idiomatic speech.

LATAM vs PENINSULAR — course orientation:
This course uses Latin American Spanish as default:
  ustedes (not vosotros) for plural
  pretérito indefinido as everyday past tense
  seseo: c/z = s throughout Latin America

Key lexical differences:
  España: coche, piso, móvil, coger (el autobús), tío/tía
  LatAm: carro/auto, departamento/apartamento, celular, tomar (el autobús)

SLANG BY REGION:
México: güey/wey (dude), chido/chida (cool), órale (okay/let's go),
        ándale (exactly/come on), chamba (job/work), ahorita (right now/later/maybe),
        padre (cool/great), no manches (no way!)
  Note: 'ahorita' is famously untranslatable — can mean right now, soon, later, or never.

Colombia: chévere (cool/great), parce/parcero (friend), bacán (great/awesome)

Argentina: che (hey/mate), pibe/piba (guy/girl), copado/a (cool),
           re- (intensifier: re bueno = very good), dale (okay/sure), viste (you know/right?)
  Note — VOSEO: Argentina, Uruguay and parts of Central America use vos instead of tú:
    tú hablas → vos hablás / tú tienes → vos tenés / tú quieres → vos querés

España: tío/tía (dude/mate), mola (it's cool), guay (cool), flipar (to be blown away),
        mogollón (loads/a lot), ¡ostras! (wow!), ni fu ni fa (so-so), pasarlo bomba (have a great time)

DISCOURSE FILLERS (muletillas — essential for natural speech):
  o sea (I mean / like — reformulation)
  bueno (well / okay — transition)
  pues (well / so — soft connector)
  la verdad (honestly)
  en plan (like / kind of — Spain)
  ¿sabes? / ¿me entiendes? (you know?)
  total (que) (so / basically — summarising)
  mira (look / listen — getting attention)
  es que (the thing is — explanation/excuse)

KEY IDIOMS:
  costar un ojo de la cara — to cost a fortune
  estar en las nubes — to be daydreaming
  meter la pata — to put your foot in it
  ponerse las pilas — to get your act together
  ser pan comido — to be a piece of cake
  tomar el pelo a alguien — to pull someone's leg
  echar una mano — to give a helping hand
  no dar palo al agua — to not lift a finger
  irse por las ramas — to beat around the bush`,
      target: `LATAM vs PENINSULAR:
  Este curso usa español latinoamericano por defecto (ustedes, indefinido como pasado cotidiano, seseo).

JERGA REGIONAL:
  México: güey, chido, órale, ahorita (¡intraducible!)
  Colombia: chévere, parce, bacán
  Argentina: che, pibe, copado, re-, viste, voseo (vos hablás)
  España: tío/tía, mola, guay, flipar, mogollón

MULETILLAS (esenciales para sonar natural):
  o sea, bueno, pues, la verdad, ¿sabes?, total (que), es que

MODISMOS CLAVE:
  costar un ojo de la cara, meter la pata, ponerse las pilas, ser pan comido...`,
    },
    rules: [
      {
        condition: "Voseo (Argentina/Uruguay/parts of Central America)",
        result: "vos + present verb with stress on final syllable (hablar: vos hablás, tener: vos tenés)",
        examples: [
          { native: "¿Vos qué pensás? / ¿Vos sabés dónde está?", translation: "What do you think? / Do you know where it is? (voseo)" },
        ],
      },
      {
        condition: "Aunque + indicativo vs subjuntivo — register note",
        result: "In casual speech, aunque + indicativo is common even for hypotheticals — accept it, but use subjuntivo in formal writing",
        examples: [
          { native: "Aunque no tengo ganas, voy. (casual) vs Aunque no tenga ganas, iré. (formal/careful)", translation: "Even though I don't feel like it, I'll go." },
        ],
      },
    ],
    notes: [
      {
        type: "culture",
        content: "Spanish is the second most-spoken native language in the world, with enormous geographic and cultural diversity. 'Standard' Spanish is a reference point, not a monolith. A learner who navigates both formal subjuntivo and casual '¡qué chido! / ¡qué guay!' has truly arrived at B1.",
      },
      {
        type: "tip",
        content: "Receptive comprehension of regional slang is the goal — producing it accurately is a bonus. Focus on recognising these forms in listening rather than actively reproducing them.",
      },
    ],
    examples: [
      { native: "— Oye, ¿cómo estuvo la peli? — ¡Re buena! O sea, la verdad es que no esperaba tanto. — ¡Qué chido! (México) / ¡Qué guay! (España)", translation: "Hey, how was the film? — Really good! I mean, honestly, I wasn't expecting that much. — How cool! (Mexico) / How cool! (Spain)" },
      { native: "— ¿Y qué pasó al final? — Pues, mira, total que se armó un lío enorme. Metí la pata sin querer.", translation: "And what happened in the end? — Well, look, basically a huge mess happened. I put my foot in it without meaning to." },
      { native: "Ponerse las pilas — o sea, a veces uno tiene que activarse de verdad. Ser pan comido no significa que sea fácil.", translation: "Getting your act together — I mean, sometimes you really have to get yourself moving. Being a piece of cake doesn't mean it's easy." },
      { native: "¡No manches, eso cuesta un ojo de la cara! — Che, ¿en serio? ¡Qué copado el lugar igual!", translation: "No way, that costs a fortune! — Hey, really? What a cool place though! (Mexican + Argentine slang)" },
      {
        type: "dialogue",
        exchanges: [
          { native: "Bueno, ¿qué tal el fin de semana?", translation: "So, how was the weekend?" },
          { native: "Pues, la verdad es que fue bastante intenso. O sea, estuvimos tipo quince horas trabajando para acabar el proyecto. Total, que lo entregamos pero estaba agotada. Es que mi compañero se fue el viernes sin decir nada. De todas formas, ya está. ¿Sabes?", translation: "Well, honestly, it was pretty intense. I mean, we were like fifteen hours working to finish the project. Basically, we submitted it but I was exhausted. The thing is my colleague left on Friday without saying anything. Anyway, it's done now. You know?" },
        ],
        annotation: "Muletillas: bueno (opening), pues + la verdad es que (hedge), o sea (reformulation), tipo (approximation), total que (summarising consequence), es que (explanation), de todas formas (concession), ¿sabes? (checking understanding).",
      },
    ],
    inlineVocab: [
      { word: "güey / wey", translation: "dude / buddy (Mexico)" },
      { word: "chido/a", translation: "cool (Mexico)" },
      { word: "ahorita", translation: "right now / soon / later — context-dependent (Mexico)" },
      { word: "chévere", translation: "cool / great (Colombia)" },
      { word: "che", translation: "hey / mate (Argentina)" },
      { word: "mola", translation: "it's cool / awesome (Spain)" },
      { word: "mogollón", translation: "loads / a lot (Spain)" },
      { word: "costar un ojo de la cara", translation: "to cost a fortune" },
      { word: "meter la pata", translation: "to put your foot in it" },
      { word: "ponerse las pilas", translation: "to get your act together" },
      { word: "echar una mano", translation: "to give a helping hand" },
      { word: "irse por las ramas", translation: "to beat around the bush" },
    ],
  },
]
