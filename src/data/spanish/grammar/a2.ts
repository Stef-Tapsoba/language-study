// src/data/spanish/grammar/a2.ts
import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "es-g-a2-1",
        level: "A2",
        title: "El Pretérito Indefinido",
        explanation: {
            native: `The pretérito indefinido (also called pretérito perfecto simple) expresses completed past actions at a specific moment or time. It is the main narrative past tense — used to say what happened.

REGULAR CONJUGATION

-AR verbs (hablar):
  hablé, hablaste, habló, hablamos, hablasteis, hablaron

-ER/-IR verbs (comer / vivir):
  comí, comiste, comió, comimos, comisteis, comieron
  viví, viviste, vivió, vivimos, vivisteis, vivieron

Note: nosotros forms for -ar and -ir verbs are the same as the present tense.
Context makes the meaning clear: mañana hablamos (we'll talk) vs ayer hablamos (we talked).

IRREGULAR PRETERITES — high frequency verbs, must memorise:

Completely irregular (own stem):
  ser/ir:   fui, fuiste, fue, fuimos, fuisteis, fueron  (ser and ir are identical)
  dar:      di, diste, dio, dimos, disteis, dieron
  ver:      vi, viste, vio, vimos, visteis, vieron
  hacer:    hice, hiciste, hizo, hicimos, hicisteis, hicieron
  tener:    tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron
  estar:    estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron
  poder:    pude, pudiste, pudo, pudimos, pudisteis, pudieron
  poner:    puse, pusiste, puso, pusimos, pusisteis, pusieron
  saber:    supe, supiste, supo, supimos, supisteis, supieron
  querer:   quise, quisiste, quiso, quisimos, quisisteis, quisieron
  venir:    vine, viniste, vino, vinimos, vinisteis, vinieron
  decir:    dije, dijiste, dijo, dijimos, dijisteis, dijeron
  traer:    traje, trajiste, trajo, trajimos, trajisteis, trajeron

Stem-changing -IR verbs (e→i and o→u in él/ellos only):
  pedir:    pedí, pediste, pidió, pedimos, pedisteis, pidieron
  dormir:   dormí, dormiste, durmió, dormimos, dormisteis, durmieron
  sentir:   sentí, sentiste, sintió, sentimos, sentisteis, sintieron

Spelling changes (to preserve pronunciation):
  buscar:   busqué (c→qu before e)
  llegar:   llegué (g→gu before e)
  empezar:  empecé (z→c before e)

SIGNAL WORDS
ayer, anteayer, el lunes pasado, la semana pasada, el año pasado,
hace dos días, en 2020, entonces, de repente, por fin, una vez`,
            target: `El pretérito indefinido expresa acciones pasadas completadas en un momento específico. Es el tiempo narrativo principal del pasado.

CONJUGACIÓN REGULAR:
  -AR (hablar): hablé, hablaste, habló, hablamos, hablasteis, hablaron
  -ER (comer): comí, comiste, comió, comimos, comisteis, comieron
  -IR (vivir): viví, viviste, vivió, vivimos, vivisteis, vivieron

IRREGULARES FRECUENTES — hay que memorizar:
  ser/ir: fui, fuiste, fue, fuimos, fuisteis, fueron (idénticos)
  hacer: hice, hiciste, hizo, hicimos, hicisteis, hicieron
  tener: tuve, tuviste, tuvo...
  estar: estuve, estuviste, estuvo...
  venir: vine, viniste, vino...
  decir: dije, dijiste, dijo...
  ir a stem-changing en -IR (e→i / o→u solo en él/ellos):
    pedir → pidió/pidieron,  dormir → durmió/durmieron

CAMBIOS ORTOGRÁFICOS:
  buscar → busqué,  llegar → llegué,  empezar → empecé

PALABRAS CLAVE:
  ayer, la semana pasada, el año pasado, hace dos días, entonces, de repente`
        },
        examples: [
            { native: "Ayer comí una paella deliciosa.", translation: "Yesterday I ate a delicious paella." },
            { native: "El año pasado fui a México.", translation: "Last year I went to Mexico. (fui — ser/ir irregular)" },
            { native: "¿A qué hora llegaste?", translation: "What time did you arrive? (llegaste — regular -ar)" },
            { native: "Lo hice todo en una hora.", translation: "I did it all in one hour. (hice — hacer irregular)" },
            { native: "De repente empezó a llover.", translation: "Suddenly it started to rain. (empezó — spelling change)" },
            { native: "No dijeron nada.", translation: "They didn't say anything. (dijeron — decir irregular)" },
        ]
    },
    {
        id: "es-g-a2-2",
        level: "A2",
        title: "El Pretérito Imperfecto",
        explanation: {
            native: `The imperfecto describes past habits, ongoing situations, background descriptions, and states. It contrasts with the pretérito indefinido, which marks completed events.

FORMATION

-AR verbs (hablar):
  hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban

-ER/-IR verbs (comer / vivir):
  comía, comías, comía, comíamos, comíais, comían
  vivía, vivías, vivía, vivíamos, vivíais, vivían

ONLY THREE IRREGULAR VERBS:
  ser:  era, eras, era, éramos, erais, eran
  ir:   iba, ibas, iba, íbamos, ibais, iban
  ver:  veía, veías, veía, veíamos, veíais, veían

WHEN TO USE THE IMPERFECTO

1. HABITUAL OR REPEATED PAST ACTIONS ('used to', 'would always'):
  Cuando era niño, jugaba al fútbol todos los días.
  When I was a child, I used to play football every day.

2. ONGOING BACKGROUND SITUATION:
  Hacía sol y los pájaros cantaban.
  The sun was shining and the birds were singing.

3. DESCRIPTIONS IN THE PAST (states, emotions, physical conditions):
  Estaba cansado y tenía hambre.
  He was tired and hungry.

4. AGE, TIME, AND WEATHER IN THE PAST:
  Eran las tres de la tarde.    It was three in the afternoon.
  Tenía diez años.              He was ten years old.

5. WITH FREQUENCY EXPRESSIONS:
  siempre, normalmente, a menudo, a veces, todos los días, antes
  Antes tomaba el autobús.   I used to take the bus.

KEY CONTRAST WITH PRETÉRITO INDEFINIDO:
  Llovía cuando salí.
  It was raining (imperfecto — background) when I went out (indefinido — event).
  See lesson es-g-a2-3 for the full contrast.`,
            target: `El imperfecto describe hábitos pasados, situaciones continuas, descripciones de fondo y estados. Se contrasta con el pretérito indefinido.

FORMACIÓN:
  -AR (hablar): hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban
  -ER (comer): comía, comías, comía, comíamos, comíais, comían
  -IR (vivir): vivía, vivías, vivía, vivíamos, vivíais, vivían

SOLO TRES IRREGULARES:
  ser: era, eras, era, éramos, erais, eran
  ir: iba, ibas, iba, íbamos, ibais, iban
  ver: veía, veías, veía, veíamos, veíais, veían

CUÁNDO SE USA EL IMPERFECTO:
1. Acciones habituales o repetidas en el pasado:
  Cuando era niño, jugaba al fútbol todos los días.
2. Situación de fondo en curso:
  Hacía sol y los pájaros cantaban.
3. Descripciones en el pasado (estados, emociones):
  Estaba cansado y tenía hambre.
4. Edad, hora y tiempo atmosférico en el pasado:
  Eran las tres. / Tenía diez años.
5. Con expresiones de frecuencia:
  siempre, normalmente, a veces, todos los días, antes`
        },
        examples: [
            { native: "Cuando era pequeño, vivía en Sevilla.", translation: "When I was little, I lived in Seville." },
            { native: "Hacía frío y nevaba.", translation: "It was cold and it was snowing. (background description)" },
            { native: "Ella trabajaba en un hospital por aquel entonces.", translation: "She used to work in a hospital at that time." },
            { native: "Todos los veranos íbamos a la playa.", translation: "Every summer we used to go to the beach." },
            { native: "Tenía doce años y adoraba la música.", translation: "I was twelve years old and I loved music." },
        ]
    },
    {
        id: "es-g-a2-3",
        level: "A2",
        title: "Pretérito Indefinido vs Imperfecto",
        explanation: {
            native: `Using the pretérito indefinido and imperfecto together correctly is the central challenge of A2 Spanish. Both describe the past but they do completely different jobs.

THE CORE DISTINCTION

PRETÉRITO INDEFINIDO — completed events, actions that move the story forward:
  → What happened? What did someone do?
  → Actions with a clear beginning or end
  → A sequence of events in a narrative

IMPERFECTO — background, states, descriptions, habits:
  → What was it like? What was going on?
  → Ongoing situations without a defined end
  → Repeated or habitual actions in the past

THE FILM ANALOGY
The imperfecto is the camera slowly panning across a scene — describing what things looked like, what was happening. The pretérito indefinido is when something suddenly happens and changes the scene.

WORKING TOGETHER IN A SENTENCE
The imperfecto sets the scene; the indefinido interrupts or advances it:

  Leía cuando sonó el teléfono.
  He was reading (imp.) when the phone rang (ind.).

  Dormía cuando llegaste.
  I was sleeping (imp.) when you arrived (ind.).

  Mientras comíamos, entró un hombre extraño.
  While we were eating (imp.), a strange man came in (ind.).

SIGNAL WORDS

Pretérito indefinido:          Imperfecto:
de repente (suddenly)          siempre (always)
un día (one day)               a menudo (often)
ayer (yesterday)               todos los días (every day)
una vez (once)                 normalmente (normally)
entonces (then)                antes (before / in those days)
por fin (finally)              cuando era niño (when I was a child)

HOW THE SAME VERB CHANGES MEANING
Some verbs change meaning depending on which tense is used:
  saber: lo sabía (I knew it — state) / lo supe (I found out — event)
  querer: quería venir (wanted to come) / quise venir (tried to come)
  poder: podía hacerlo (was able to) / pude hacerlo (managed to do it)
  tener: tenía una carta (had a letter) / tuve una carta (received a letter)
  conocer: conocía a María (knew María) / conocí a María (met María)`,
            target: `Usar el pretérito indefinido y el imperfecto juntos correctamente es el principal reto del nivel A2.

LA DISTINCIÓN PRINCIPAL:
PRETÉRITO INDEFINIDO — eventos completados, acciones que hacen avanzar la historia:
  → ¿Qué pasó? ¿Qué hizo alguien?
  → Acciones con un inicio o fin claro

IMPERFECTO — fondo, estados, descripciones, hábitos:
  → ¿Cómo era? ¿Qué estaba pasando?
  → Situaciones continuas sin fin definido

LA ANALOGÍA DE LA PELÍCULA:
  El imperfecto = la cámara que describe la escena.
  El indefinido = algo que ocurre de repente.

LOS DOS TIEMPOS JUNTOS:
  Leía (imp.) cuando sonó el teléfono (ind.).
  Dormía (imp.) cuando llegaste (ind.).

PALABRAS INDICADORAS:
  Indefinido: de repente, un día, ayer, una vez, entonces, por fin
  Imperfecto: siempre, a menudo, todos los días, normalmente, antes

VERBOS QUE CAMBIAN DE SIGNIFICADO:
  saber: lo sabía (estado) / lo supe (se enteró)
  conocer: conocía a María (conocía) / conocí a María (conoció por primera vez)`
        },
        examples: [
            { native: "Leía cuando él llamó.", translation: "I was reading (imp.) when he called (ind.)." },
            { native: "Hacía buen tiempo así que salimos.", translation: "The weather was nice (imp.) so we went out (ind.)." },
            { native: "Cuando era niño, siempre comía en casa.", translation: "When I was a child, I always ate at home. (habit → imperfecto)" },
            { native: "Ayer trabajé todo el día.", translation: "Yesterday I worked all day. (completed → indefinido)" },
            { native: "Hablaba con su amiga cuando llegó el autobús.", translation: "She was talking with her friend when the bus arrived." },
            { native: "De repente empezó a llover.", translation: "Suddenly it started to rain. (sudden event → indefinido)" },
        ]
    },
    {
        id: "es-g-a2-4",
        level: "A2",
        title: "El Pretérito Perfecto",
        explanation: {
            native: `The pretérito perfecto expresses past actions that are connected to the present moment — recent events, actions whose effects are still felt, or actions within a time period that has not yet finished.

FORMATION — haber (present) + past participle:
  he, has, ha, hemos, habéis, han + participio

PAST PARTICIPLES — regular:
  -ar → -ado:   hablar → hablado,   comprar → comprado
  -er → -ido:   comer → comido,     beber → bebido
  -ir → -ido:   vivir → vivido,     salir → salido

IRREGULAR PAST PARTICIPLES:
  ser/estar → sido    hacer → hecho    decir → dicho
  ver → visto         poner → puesto   volver → vuelto
  abrir → abierto     escribir → escrito   romper → roto
  morir → muerto      cubrir → cubierto

WHEN TO USE THE PRETÉRITO PERFECTO

1. RECENT ACTIONS — today, this week, this year:
  Hoy he comido en casa.          Today I ate at home.
  Esta semana he trabajado mucho. This week I've worked a lot.
  Este año he viajado a tres países. This year I've travelled to three countries.

2. ACTIONS RELEVANT TO THE PRESENT MOMENT:
  He perdido mis llaves.          I've lost my keys. (I still don't have them)
  ¿Has visto a Juan?              Have you seen Juan? (recently, relevant now)

3. LIFE EXPERIENCE (with alguna vez / nunca):
  ¿Has comido sushi alguna vez?   Have you ever eaten sushi?
  Nunca he estado en Asia.        I've never been to Asia.

PRETÉRITO PERFECTO vs PRETÉRITO INDEFINIDO
This contrast varies significantly by region:
  In Spain — perfecto for recent/present-connected events, indefinido for completed past:
    Hoy he comido paella. (Spain — today, use perfecto)
    Ayer comí paella. (Spain — yesterday, use indefinido)
  In Latin America — indefinido is used in both cases:
    Hoy comí paella. / Ayer comí paella. (Latin America — indefinido for both)

NEGATION AND POSITION OF PRONOUNS
Never separate haber from the participle:
  No he comido. ✓       (no before haber)
  No lo he visto. ✓     (object pronoun before haber — never between haber and participle)
  ✗ He no comido.       (incorrect)
  ✗ He lo visto.        (incorrect)`,
            target: `El pretérito perfecto expresa acciones pasadas conectadas con el momento presente — eventos recientes, o acciones cuyos efectos se sienten todavía.

FORMACIÓN — haber (presente) + participio:
  he, has, ha, hemos, habéis, han + participio

PARTICIPIOS REGULARES:
  -ar → -ado: hablar → hablado
  -er → -ido: comer → comido
  -ir → -ido: vivir → vivido

PARTICIPIOS IRREGOLARES:
  hacer → hecho,  decir → dicho,  ver → visto,  poner → puesto,
  volver → vuelto,  abrir → abierto,  escribir → escrito

CUÁNDO SE USA:
1. Acciones recientes (hoy, esta semana, este año):
  Hoy he comido en casa. / Esta semana he trabajado mucho.
2. Acciones relevantes para el presente:
  He perdido mis llaves. / ¿Has visto a Juan?
3. Experiencias de vida (con alguna vez / nunca):
  ¿Has comido sushi alguna vez? / Nunca he estado en Asia.

DIFERENCIA REGIONAL:
  En España: perfecto para eventos recientes, indefinido para pasado completo.
  En Latinoamérica: el indefinido se usa en ambos casos.

NEGACIÓN: no siempre antes de haber:
  No he comido. ✓ / No lo he visto. ✓`
        },
        examples: [
            { native: "Hoy he comido con mis padres.", translation: "Today I had lunch with my parents. (today — perfecto)" },
            { native: "¿Has estado alguna vez en Japón?", translation: "Have you ever been to Japan? (life experience)" },
            { native: "Nunca he probado el sushi.", translation: "I've never tried sushi." },
            { native: "He perdido mi teléfono — ¿lo has visto?", translation: "I've lost my phone — have you seen it? (relevant to now)" },
            { native: "Esta semana he trabajado muchísimo.", translation: "This week I've worked a lot. (time period not finished)" },
            { native: "¿Qué has hecho hoy?", translation: "What have you done today? (irregular: hecho)" },
        ]
    },
    {
        id: "es-g-a2-5",
        level: "A2",
        title: "El Futuro Simple",
        explanation: {
            native: `The futuro simple expresses future events, predictions, and promises. At A1 you learned ir + a + infinitive for near-future plans. The futuro simple is used for more distant futures, predictions, and formal contexts.

FORMATION — add these endings to the infinitive (same for all verb types):
  -é, -ás, -á, -emos, -éis, -án

  hablar:   hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán
  comer:    comeré, comerás, comerá, comeremos, comeréis, comerán
  vivir:    viviré, vivirás, vivirá, viviremos, viviréis, vivirán

IRREGULAR STEMS — endings stay the same, stem changes:
  ser/estar: será / estará (regular for estar, ser: seré, serás, será...)
  haber:   habr-    habrá (impersonal — there will be)
  tener:   tendr-   tendré, tendrás...
  venir:   vendr-   vendré, vendrás...
  salir:   saldr-   saldré, saldrás...
  poder:   podr-    podré, podrás...
  poner:   pondr-   pondré, pondrás...
  querer:  querr-   querré, querrás...
  saber:   sabr-    sabré, sabrás...
  hacer:   har-     haré, harás...
  decir:   dir-     diré, dirás...
  caber:   cabr-    cabré, cabrás...

FUTURO SIMPLE vs IR A + INFINITIVE
  Ir a + infinitive — near-future plans, decided intentions (A1):
    Voy a estudiar esta tarde.     I'm going to study this afternoon. (decided)
  Futuro simple — predictions, distant future, formal contexts:
    Algún día seré médico.         One day I will be a doctor.
    Mañana lloverá.                It will rain tomorrow. (weather prediction)

AFTER CUANDO — futuro required (unlike English):
  Cuando llegues, llámame.         When you arrive, call me.
  (In English we use present after 'when' — in Spanish, future is required)

EXPRESSING PROBABILITY IN THE PRESENT
The future simple can express probability or conjecture about now:
  ¿Dónde está Juan? — Estará en casa.   Where is Juan? — He's probably at home.
  Tendrá unos cuarenta años.            He's probably around forty years old.`,
            target: `El futuro simple expresa eventos futuros, predicciones y promesas.

FORMACIÓN — se añaden estas terminaciones al infinitivo:
  -é, -ás, -á, -emos, -éis, -án
  hablar → hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán

RADICALES IRREGULARES — las terminaciones no cambian:
  tener → tendr- (tendré),  venir → vendr- (vendré),  salir → saldr- (saldré)
  poder → podr- (podré),   poner → pondr- (pondré),  querer → querr- (querré)
  saber → sabr- (sabré),   hacer → har- (haré),       decir → dir- (diré)

FUTURO SIMPLE vs IR A + INFINITIVO:
  Ir a + inf. — planes inmediatos y decididos: Voy a estudiar esta tarde.
  Futuro simple — predicciones, futuro lejano, contexto formal:
    Algún día seré médico. / Mañana lloverá.

DESPUÉS DE CUANDO — se usa el futuro (no el presente como en inglés):
  Cuando llegues, llámame.

PROBABILIDAD EN EL PRESENTE:
  ¿Dónde está Juan? — Estará en casa. (probablemente está)`
        },
        examples: [
            { native: "Mañana hará mucho calor.", translation: "Tomorrow it will be very hot. (prediction)" },
            { native: "El año que viene iré a Argentina.", translation: "Next year I will go to Argentina." },
            { native: "Cuando termines, dímelo.", translation: "When you finish, tell me. (cuando + futuro)" },
            { native: "Será difícil, pero lo conseguiremos.", translation: "It will be difficult, but we'll manage." },
            { native: "¿Dónde estará mi móvil?", translation: "Where can my phone be? / Where is my phone probably? (probability)" },
            { native: "Nunca olvidaré este momento.", translation: "I will never forget this moment." },
        ]
    },
    {
        id: "es-g-a2-6",
        level: "A2",
        title: "El Condicional — Cortesía e Hipótesis",
        explanation: {
            native: `The conditional expresses polite requests, wishes, hypothetical situations, and advice. It is the equivalent of 'would' in English and is essential for polite communication.

FORMATION — same irregular stems as the futuro simple + these endings:
  -ía, -ías, -ía, -íamos, -íais, -ían

  hablar:   hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían
  comer:    comería, comerías...
  ser:      sería, serías, sería...
  tener:    tendría, tendrías...
  venir:    vendría, vendrías...
  poder:    podría, podrías...
  querer:   querría, querrías...
  saber:    sabría, sabrías...
  hacer:    haría, harías...
  decir:    diría, dirías...

FOUR KEY USES AT A2

1. POLITE REQUESTS — the most important use:
  Me gustaría una mesa para dos.      I would like a table for two.
  ¿Podría hablar más despacio?        Could you speak more slowly?
  ¿Le importaría abrir la ventana?    Would you mind opening the window?

2. WISHES AND DESIRES (with gustar, encantar, etc.):
  Me gustaría vivir en España.        I would like to live in Spain.
  Me encantaría aprender a cocinar.   I would love to learn to cook.

3. ADVICE WITH DEBER:
  Deberías descansar más.             You should rest more.
  Debería ir al médico.               He should go to the doctor.

4. HYPOTHETICAL SITUATIONS (with si — see es-g-a2-15):
  Si tuviera tiempo, viajaría más.    If I had time, I would travel more.

CONDICIONAL vs PRESENTE vs FUTURO
  Quiero un café.          I want a coffee.         (present — direct)
  Me gustaría un café.     I would like a coffee.   (conditional — polite)
  Voy a tomar un café.     I'm going to have a coffee. (future — decided)

COMMON CONDITIONAL PHRASES
  Me gustaría...           I would like...
  Me encantaría...         I would love...
  Sería genial.            That would be great.
  ¿Podrías...?             Could you...?
  En tu lugar, yo...       If I were you, I would...
  Habría que...            One would need to...`,
            target: `El condicional expresa peticiones educadas, deseos, situaciones hipotéticas y consejos.

FORMACIÓN — mismos radicales irregulares que el futuro simple + terminaciones:
  -ía, -ías, -ía, -íamos, -íais, -ían
  hablar → hablaría, hablarías, hablaría...
  tener → tendría...  poder → podría...  querer → querría...
  hacer → haría...    decir → diría...

CUATRO USOS PRINCIPALES:

1. PETICIONES EDUCADAS:
  Me gustaría una mesa para dos.
  ¿Podría hablar más despacio?

2. DESEOS:
  Me gustaría vivir en España.
  Me encantaría aprender a cocinar.

3. CONSEJOS CON DEBER:
  Deberías descansar más.
  Debería ir al médico.

4. SITUACIONES HIPOTÉTICAS (con si):
  Si tuviera tiempo, viajaría más.

EXPRESIONES ÚTILES:
  Me gustaría... / Me encantaría... / Sería genial.
  ¿Podrías...? / En tu lugar, yo... / Habría que...`
        },
        examples: [
            { native: "Me gustaría reservar una habitación.", translation: "I would like to book a room." },
            { native: "¿Podría repetirlo, por favor?", translation: "Could you repeat it, please?" },
            { native: "Deberías dormir más.", translation: "You should sleep more." },
            { native: "Me encantaría vivir en Barcelona.", translation: "I would love to live in Barcelona." },
            { native: "¡Sería fantástico!", translation: "That would be fantastic!" },
            { native: "En tu lugar, hablaría con el jefe.", translation: "If I were you, I would talk to the boss." },
        ]
    },
    {
        id: "es-g-a2-7",
        level: "A2",
        title: "Los Pronombres de Objeto Directo",
        explanation: {
            native: `Direct object pronouns replace a noun that directly receives the action of the verb. They avoid repetition and make speech natural.

THE FORMS
  me     me
  te     you (informal)
  lo     him / it (masculine) / you (formal masc.)
  la     her / it (feminine) / you (formal fem.)
  nos    us
  os     you all (Spain informal)
  los    them (masculine) / you all (formal masc.)
  las    them (feminine) / you all (formal fem.)

POSITION — before the conjugated verb:
  ¿Ves a María? — Sí, la veo.          Do you see María? — Yes, I see her.
  ¿Tomas el autobús? — No, no lo tomo. Do you take the bus? — No, I don't take it.

POSITION WITH INFINITIVES
The pronoun can attach to the infinitive OR go before the conjugated verb:
  Voy a verlo mañana. = Lo voy a ver mañana.    I'm going to see him tomorrow.
  Puedo ayudarte. = Te puedo ayudar.             I can help you.

POSITION WITH GERUNDS
The pronoun attaches to the gerund OR goes before estar:
  Estoy haciéndolo. = Lo estoy haciendo.         I am doing it.

POSITION IN THE PRETÉRITO PERFECTO
The pronoun goes before haber:
  ¿Has visto la película? — Sí, la he visto.
  ✗ He la visto. (incorrect — never between haber and participle)

LEÍSMO — important regional variation
In Spain, le is often used instead of lo for masculine persons:
  ¿Conoces a Juan? — Sí, le conozco. (Spain) / Sí, lo conozco. (Latin America)
Both are understood everywhere.

NEGATIVE — no before pronoun + verb:
  No lo veo.          I don't see him.
  No la he llamado.   I haven't called her.`,
            target: `Los pronombres de objeto directo sustituyen a un nombre que recibe directamente la acción del verbo.

LAS FORMAS:
  me (me), te (te), lo (él/ello), la (ella/ello fem.),
  nos (nosotros), os (vosotros), los (ellos/ellos), las (ellas)

POSICIÓN — antes del verbo conjugado:
  ¿Ves a María? — Sí, la veo.
  No lo tomo.

CON INFINITIVO — el pronombre se puede unir al infinitivo o ir antes del verbo conjugado:
  Voy a verlo. = Lo voy a ver.
  Puedo ayudarte. = Te puedo ayudar.

CON GERUNDIO:
  Estoy haciéndolo. = Lo estoy haciendo.

EN EL PRETÉRITO PERFECTO — el pronombre va antes de haber:
  ¿Has visto la película? — Sí, la he visto.
  ✗ He la visto. (incorrecto)

LEÍSMO — en España se usa le en lugar de lo para personas masculinas:
  ¿Conoces a Juan? — Sí, le conozco. (España) / Sí, lo conozco. (Latinoamérica)

NEGACIÓN:
  No lo veo. / No la he llamado.`
        },
        examples: [
            { native: "¿Conoces este restaurante? — Sí, lo conozco bien.", translation: "Do you know this restaurant? — Yes, I know it well." },
            { native: "Me llamó ayer por la tarde.", translation: "She called me yesterday afternoon." },
            { native: "Voy a invitarlos a la fiesta.", translation: "I'm going to invite them to the party." },
            { native: "¿Has leído este libro? — No, no lo he leído todavía.", translation: "Have you read this book? — No, I haven't read it yet." },
            { native: "La vi esta mañana en el trabajo.", translation: "I saw her this morning at work." },
            { native: "No nos entiende.", translation: "He doesn't understand us." },
        ]
    },
    {
        id: "es-g-a2-8",
        level: "A2",
        title: "Los Pronombres de Objeto Indirecto",
        explanation: {
            native: `Indirect object pronouns replace a noun introduced by a — they indicate to whom or for whom something is done. They are essential for talking about communication and giving.

THE FORMS
  me     to me
  te     to you (informal)
  le     to him / to her / to you (formal)
  nos    to us
  os     to you all (Spain informal)
  les    to them / to you all

Note: le and les do not show gender — le means both 'to him' and 'to her'.

POSITION — same as direct object pronouns, before the conjugated verb:
  Le hablo todos los días.           I speak to him/her every day.
  Les escribo un mensaje.            I write them a message.
  No me ha contestado.               He hasn't answered me.

COMMON VERBS THAT TAKE INDIRECT OBJECTS:
  hablar a, escribir a, llamar a, contestar a, dar a, decir a,
  pedir a, mandar a, mostrar a, preguntar a, explicar a, regalar a

  Le expliqué el problema.           I explained the problem to him/her.
  Les dimos las gracias.             We thanked them. (lit. gave thanks to them)

GUSTAR AND SIMILAR VERBS
Gustar always works with indirect pronouns — the thing liked is the subject:
  Me gusta el café.                  I like coffee. (coffee pleases me)
  Les gustan los gatos.              They like cats.
  ¿Te ha gustado la película?        Did you like the film?
Other verbs like gustar: encantar, molestar, interesar, parecer, doler, quedar

A + PRONOUN FOR CLARIFICATION OR EMPHASIS
Le and les are ambiguous, so a + stressed pronoun clarifies:
  Le doy el libro a él / a ella / a usted.
  A mí me gusta. / A ti te gusta. (emphasis)

COD vs COI
  La veo.       I see her.      (la = direct — no a)
  Le hablo.     I speak to her. (le = indirect — replaces a + person)`,
            target: `Los pronombres de objeto indirecto sustituyen a un nombre introducido por a — indican a quién o para quién se hace algo.

LAS FORMAS:
  me (a mí), te (a ti), le (a él/ella/usted), nos, os, les (a ellos/ellas/ustedes)

POSICIÓN — antes del verbo conjugado:
  Le hablo todos los días.
  No me ha contestado.

VERBOS COMUNES CON OI:
  hablar a, escribir a, llamar a, contestar a, dar a, decir a,
  pedir a, mandar a, mostrar a, preguntar a, explicar a

GUSTAR Y VERBOS SIMILARES — siempre con pronombres indirectos:
  Me gusta el café. / Les gustan los gatos. / ¿Te ha gustado la película?
  Otros: encantar, molestar, interesar, parecer, doler, quedar

A + PRONOMBRE PARA CLARIFICAR O ENFATIZAR:
  Le doy el libro a él / a ella / a usted.
  A mí me gusta. / A ti te gusta.

COD vs COI:
  La veo. (la = directo — sin a)
  Le hablo. (le = indirecto — sustituye a a + persona)`
        },
        examples: [
            { native: "Le he llamado esta mañana.", translation: "I called him/her this morning." },
            { native: "¿Puedes decirle que venga?", translation: "Can you tell him/her to come?" },
            { native: "Nos mandaron una invitación.", translation: "They sent us an invitation." },
            { native: "No me ha contestado.", translation: "He/she hasn't answered me." },
            { native: "Le encanta la música clásica.", translation: "He/she loves classical music." },
            { native: "Les di las gracias por todo.", translation: "I thanked them for everything." },
        ]
    },
    {
        id: "es-g-a2-9",
        level: "A2",
        title: "Pronombres Dobles — Me lo, Te la, Se lo...",
        explanation: {
            native: `When both a direct and an indirect object pronoun appear in the same sentence, specific rules govern their order and form.

ORDER — indirect before direct, always:
  me + lo/la/los/las
  te + lo/la/los/las
  se + lo/la/los/las    (when le/les meets lo/la/los/las)
  nos + lo/la/los/las
  os + lo/la/los/las

SE REPLACES LE AND LES BEFORE LO/LA/LOS/LAS
This is the most important rule. Le and les cannot appear directly before lo/la/los/las — they must change to se:
  ✗ Le lo doy.    (incorrect)
  ✓ Se lo doy.    I give it to him/her/you.

  ✗ Les la mando.   (incorrect)
  ✓ Se la mando.    I send it to them.

Se can be ambiguous (to him/her/you/them) — add a + pronoun to clarify:
  Se lo doy a él.       I give it to him.
  Se lo doy a ella.     I give it to her.
  Se lo doy a usted.    I give it to you (formal).
  Se lo doy a ellos.    I give it to them.

POSITION — same rules as single pronouns:
Before conjugated verb:
  Me lo das?           Are you giving it to me?
  Te lo explico.       I'll explain it to you.
  Se lo he dicho.      I've told him/her.

Attached to infinitive:
  Voy a dártelo.       I'm going to give it to you.
  Puedes mandármelo.   You can send it to me.

Attached to gerund:
  Estoy diciéndoselo.  I'm telling him/her. (= Se lo estoy diciendo.)

NEGATIVE:
  No se lo digas.      Don't tell him/her.
  No me lo ha dado.    He hasn't given it to me.

COMMON DOUBLE PRONOUN SENTENCES
  ¿Me lo puedes explicar?   Can you explain it to me?
  Te lo juro.               I swear it to you.
  Se lo regalé a mi madre.  I gave it to my mother as a gift.
  Nos lo han confirmado.    They've confirmed it to us.`,
            target: `Cuando un pronombre de objeto directo y uno indirecto aparecen juntos, hay reglas específicas.

ORDEN — indirecto antes que directo:
  me/te/se/nos/os + lo/la/los/las

SE SUSTITUYE A LE Y LES ANTES DE LO/LA/LOS/LAS:
  ✗ Le lo doy. → ✓ Se lo doy. (a él/ella/usted)
  ✗ Les la mando. → ✓ Se la mando. (a ellos/ellas/ustedes)

Se puede ser ambiguo — añadir a + pronombre para aclarar:
  Se lo doy a él. / Se lo doy a ella. / Se lo doy a ellos.

POSICIÓN:
  Antes del verbo conjugado: Me lo das. / Se lo he dicho.
  Unido al infinitivo: Voy a dártelo. / Puedes mandármelo.
  Unido al gerundio: Estoy diciéndoselo. (= Se lo estoy diciendo.)

NEGACIÓN:
  No se lo digas. / No me lo ha dado.`
        },
        examples: [
            { native: "¿Me lo puedes explicar?", translation: "Can you explain it to me?" },
            { native: "Se lo di a mi madre.", translation: "I gave it to my mother. (se = le before lo)" },
            { native: "Te lo prometo.", translation: "I promise it to you." },
            { native: "Se la he mandado por email.", translation: "I sent it to him/her by email." },
            { native: "Voy a decírselo mañana.", translation: "I'm going to tell him/her tomorrow. (attached to infinitive)" },
            { native: "No se lo digas todavía.", translation: "Don't tell him/her yet." },
        ]
    },
    {
        id: "es-g-a2-10",
        level: "A2",
        title: "Comparativos y Superlativos",
        explanation: {
            native: `Comparatives and superlatives allow you to compare people, things, and actions.

COMPARATIVES

More than: más + adjective/adverb + que
  Madrid es más grande que Sevilla.     Madrid is bigger than Seville.
  Habla más rápido que yo.              She speaks faster than me.

Less than: menos + adjective/adverb + que
  Este libro es menos interesante que el otro.  This book is less interesting than the other.

As...as: tan + adjective/adverb + como
  Es tan alto como su hermano.          He's as tall as his brother.
  Trabaja tan bien como tú.             She works as well as you.

COMPARING NOUNS (quantities):
  más/menos/tanto(s)/tanta(s) + noun + que/como
  Tiene más dinero que yo.              He has more money than me.
  Bebo tanta agua como tú.             I drink as much water as you.
  Hay menos estudiantes hoy.           There are fewer students today.

IRREGULAR COMPARATIVES
  bueno → mejor (better — NOT más bueno in formal Spanish)
  malo → peor (worse)
  grande → mayor (bigger / older — also más grande)
  pequeño → menor (smaller / younger — also más pequeño)
  bien → mejor (better — adverb)
  mal → peor (worse — adverb)

  Este restaurante es mejor que el otro.    This restaurant is better than the other.
  Me siento mejor hoy.                      I feel better today.

SUPERLATIVES

Relative superlative (the most/least in a group):
  el/la/los/las + más/menos + adjective (+ de for context):
  Es el restaurante más caro de la ciudad.  It's the most expensive restaurant in the city.
  Es la solución menos complicada.          It's the least complicated solution.

With nouns: el/la/los/las + que + más/menos + verb:
  Es el que más trabaja.    He's the one who works the most.

Absolute superlative (extremely — no comparison):
  Drop final vowel + -ísimo/a/i/e (or add -ísimo directly if ends in consonant):
  bueno → buenísimo        grande → grandísimo
  fácil → facilísimo       rico → riquísimo (c→qu)
  largo → larguísimo (g→gu)

  ¡Esta comida está buenísima!     This food is absolutely delicious!
  Es dificilísimo.                 It's extremely difficult.

IRREGULAR SUPERLATIVES:
  bueno → óptimo (excellent — formal)
  malo → pésimo (terrible)`,
            target: `Los comparativos y superlativos permiten comparar personas, cosas y acciones.

COMPARATIVOS:
  más + adj./adv. + que → Madrid es más grande que Sevilla.
  menos + adj./adv. + que → Este libro es menos interesante que el otro.
  tan + adj./adv. + como → Es tan alto como su hermano.

CUANTIDADES: más/menos/tanto(a)(s) + nombre + que/como:
  Tiene más dinero que yo. / Bebo tanta agua como tú.

IRREGULARES:
  bueno → mejor,  malo → peor,  grande → mayor,  pequeño → menor
  bien → mejor,  mal → peor

SUPERLATIVOS:
Relativo: el/la/los/las + más/menos + adjetivo (+ de):
  Es el restaurante más caro de la ciudad.

Absoluto (extremadamente, sin comparación):
  bueno → buenísimo,  grande → grandísimo,  fácil → facilísimo
  ¡Esta comida está buenísima! / Es dificilísimo.`
        },
        examples: [
            { native: "Esta película es más interesante que la primera.", translation: "This film is more interesting than the first one." },
            { native: "Ella habla menos rápido que él.", translation: "She speaks less quickly than him." },
            { native: "Es el mejor café de la ciudad.", translation: "It's the best coffee in the city. (irregular: bueno → mejor)" },
            { native: "Me siento mejor hoy.", translation: "I feel better today. (irregular: bien → mejor)" },
            { native: "Es la ciudad más bonita que he visitado.", translation: "It's the most beautiful city I've visited." },
            { native: "Estoy cansadísimo — he trabajado todo el día.", translation: "I'm exhausted — I've worked all day. (absolute superlative)" },
        ]
    },
    {
        id: "es-g-a2-11",
        level: "A2",
        title: "Las Proposiciones Relativas — Que y Quien",
        explanation: {
            native: `Relative clauses add information about a noun. Que and quien are the two most important relative pronouns at A2.

QUE — who / which / that (most common)
Que can refer to people or things and works as both subject and object. It can never be omitted.

As subject (followed directly by a verb):
  El chico que habla es mi hermano.      The boy who is speaking is my brother.
  El tren que llega tiene retraso.       The train that is arriving is late.

As object:
  La película que vi era estupenda.      The film (that) I saw was great.
  El libro que recomiendas está aquí.    The book (that) you recommend is here.

QUIEN / QUIENES — who / whom (refers only to people)
Quien is used when referring to people, especially after prepositions:
  La persona con quien trabajo es muy buena.  The person I work with is very good.
  El amigo de quien te hablé llegó ayer.      The friend I told you about arrived yesterday.

In non-defining clauses (extra information set off by commas):
  Mi jefe, quien vive en Madrid, viene mañana.   My boss, who lives in Madrid, is coming tomorrow.

EL/LA/LOS/LAS QUE and EL/LA/LOS/LAS CUAL/ES
These are alternatives to quien after prepositions and in formal writing:
  La empresa en la que trabajo...         The company I work in...
  El proyecto del que te hablé...         The project I told you about...
At A2, just use que for most cases and quien after prepositions.

QUE CANNOT BE OMITTED in Spanish:
  The book I bought. → El libro que compré. (que cannot be dropped)

LO QUE — what / that which (refers to an idea, not a specific noun):
  No entiendo lo que dices.              I don't understand what you're saying.
  Haz lo que quieras.                    Do whatever you want.`,
            target: `Las proposiciones relativas añaden información sobre un nombre. Que y quien son los pronombres relativos más importantes en el nivel A2.

QUE — quien/que/que (el más común)
Que se refiere a personas o cosas y funciona como sujeto u objeto. No se puede omitir.

Como sujeto (seguido directamente por un verbo):
  El chico que habla es mi hermano.
  La película que vi era estupenda.

QUIEN/QUIENES — quien/quienes (solo personas)
Se usa con personas, especialmente después de preposiciones:
  La persona con quien trabajo es muy buena.
  El amigo de quien te hablé llegó ayer.

En proposiciones no restrictivas (información adicional entre comas):
  Mi jefe, quien vive en Madrid, viene mañana.

QUE NO SE PUEDE OMITIR en español:
  El libro que compré... (que no se puede eliminar)

LO QUE — lo que / lo que (se refiere a una idea, no a un nombre específico):
  No entiendo lo que dices.
  Haz lo que quieras.`
        },
        examples: [
            { native: "Es el amigo que me ayudó.", translation: "It's the friend who helped me. (que = subject)" },
            { native: "El restaurante que recomiendas está cerrado.", translation: "The restaurant (that) you recommend is closed. (que = object)" },
            { native: "Tengo una colega que habla cuatro idiomas.", translation: "I have a colleague who speaks four languages." },
            { native: "La chica con quien trabajo es muy simpática.", translation: "The girl I work with is very nice. (con quien — preposition + quien)" },
            { native: "No entiendo lo que dice.", translation: "I don't understand what he's saying. (lo que)" },
            { native: "Es todo lo que sé.", translation: "It's all (that) I know. (lo que)" },
        ]
    },
    {
        id: "es-g-a2-12",
        level: "A2",
        title: "Estar + Gerundio — El Progresivo",
        explanation: {
            native: `The progressive in Spanish is formed with estar + the gerund. It emphasises that an action is happening right now or was happening at a specific moment.

FORMING THE GERUND (el gerundio)
  -ar verbs: drop -ar, add -ando:   hablar → hablando,   trabajar → trabajando
  -er verbs: drop -er, add -iendo:  comer → comiendo,    leer → leyendo
  -ir verbs: drop -ir, add -iendo:  vivir → viviendo,    salir → saliendo

SPELLING CHANGES:
  -er/-ir verbs with a vowel before the ending → -yendo:
    leer → leyendo,   caer → cayendo,   oír → oyendo,   construir → construyendo

IRREGULAR GERUNDS — stem-changing -ir verbs:
  pedir → pidiendo     dormir → durmiendo    sentir → sintiendo
  decir → diciendo     poder → pudiendo      venir → viniendo

PRESENT PROGRESSIVE — estar (present) + gerund
Emphasises what is happening at this exact moment:
  Estoy comiendo.           I am eating (right now).
  ¿Estás durmiendo?         Are you sleeping?
  Está lloviendo.           It is raining.
  Estamos estudiando.       We are studying.

PAST PROGRESSIVE — estar (imperfect) + gerund
Emphasises what was happening at a specific past moment:
  Estaba comiendo cuando llamaste.    I was eating when you called.
  ¿Qué estabas haciendo?             What were you doing?

POSITION OF PRONOUNS
Pronouns can attach to the gerund OR go before estar:
  Lo estoy haciendo. = Estoy haciéndolo.      I am doing it.
  Te estoy escuchando. = Estoy escuchándote.  I am listening to you.

When attaching, a written accent is often needed to maintain stress.

ESTAR + GERUND vs SIMPLE PRESENT
Spanish uses the simple present for both habitual and in-progress actions:
  Como.           I eat. / I am eating.
  Estoy comiendo. I am eating. (emphasis on action happening right now)

Use estar + gerundio when you want to stress something is happening at this very moment.`,
            target: `El progresivo en español se forma con estar + el gerundio.

FORMACIÓN DEL GERUNDIO:
  -ar → -ando: hablar → hablando,  trabajar → trabajando
  -er → -iendo: comer → comiendo
  -ir → -iendo: vivir → viviendo

CAMBIOS ORTOGRÁFICOS:
  leer → leyendo,  caer → cayendo,  oír → oyendo

GERUNDIOS IRREGOLARES (verbos en -ir con cambio vocálico):
  pedir → pidiendo,  dormir → durmiendo,  decir → diciendo,  venir → viniendo

PROGRESIVO PRESENTE — estar (presente) + gerundio:
  Estoy comiendo. / ¿Estás durmiendo? / Está lloviendo.

PROGRESIVO PASADO — estar (imperfecto) + gerundio:
  Estaba comiendo cuando llamaste.

POSICIÓN DE LOS PRONOMBRES:
  Lo estoy haciendo. = Estoy haciéndolo.
  Te estoy escuchando. = Estoy escuchándote.

ESTAR + GERUNDIO vs PRESENTE SIMPLE:
  Como. (habitual o en progreso)
  Estoy comiendo. (énfasis en la acción que ocurre justo ahora)`
        },
        examples: [
            { native: "Estoy estudiando para el examen.", translation: "I am studying for the exam. (right now)" },
            { native: "¿Qué estás haciendo?", translation: "What are you doing?" },
            { native: "Está lloviendo — coge el paraguas.", translation: "It's raining — take the umbrella." },
            { native: "Estaba durmiendo cuando sonó el despertador.", translation: "I was sleeping when the alarm went off." },
            { native: "Lo estoy leyendo — es muy interesante.", translation: "I'm reading it — it's very interesting." },
            { native: "Estamos esperando el autobús.", translation: "We are waiting for the bus." },
        ]
    },
    {
        id: "es-g-a2-13",
        level: "A2",
        title: "Se Impersonal y Se Pasivo",
        explanation: {
            native: `The particle se has two important impersonal uses in Spanish: se impersonal (one does / people do) and se pasivo (passive se — it is done). Both are extremely common and appear constantly in Spanish.

SE IMPERSONAL — 'one does / people do / you do'
Structure: se + third person singular of any verb
Expresses a general truth, habit, or rule — nobody specific is performing the action.
  En España se come tarde.              In Spain people eat late / one eats late.
  Aquí se habla español.                Spanish is spoken here.
  ¿Cómo se dice en español?             How do you say it in Spanish?
  No se hace así.                       That's not how it's done.
  Se puede entrar.                      One can enter / You can come in.

With ser and adjectives — adjective is always masculine singular:
  Cuando se es joven, se es feliz.      When one is young, one is happy.
  Se está cansado después del trabajo.  One is tired after work.

SE PASIVO — passive meaning with transitive verbs
Structure: se + third person singular or plural of the verb (agrees with the noun)
  Se venden pisos.                      Flats are for sale. / Flats are being sold.
  Se habla inglés.                      English is spoken.
  Se buscan camareros.                  Waiters wanted.
  Se alquila una habitación.            A room is for rent.

DISTINGUISHING SE IMPERSONAL FROM SE PASIVO
  Se come pizza.        One eats pizza. (se imp. — general habit)
  Se comen las pizzas.  The pizzas are eaten. (se pass. — pizzas is subject, plural)
  Se vende la casa.     The house is for sale. (se pass. — singular)
  Se venden las casas.  The houses are for sale. (se pass. — plural)

COMMON SE EXPRESSIONS
  se sabe que...        it is known that... / everyone knows that...
  se dice que...        it is said that... / they say that...
  se ve que...          one can see that... / it's clear that...
  ¿cómo se hace?        how is it done? / how do you do it?
  se permite / se prohíbe   it is allowed / it is forbidden`,
            target: `La partícula se tiene dos usos impersonales importantes: se impersonal (se hace) y se pasivo (se vende).

SE IMPERSONAL — "se hace / la gente hace"
Estructura: se + tercera persona singular de cualquier verbo
Expresa una verdad general, hábito o regla.
  En España se come tarde.
  ¿Cómo se dice en español?
  No se hace así.

SE PASIVO — significado pasivo con verbos transitivos
Estructura: se + tercera persona singular o plural (concuerda con el nombre)
  Se venden pisos. / Se habla inglés. / Se buscan camareros.

DISTINCIÓN:
  Se come pizza. (se imp. — hábito general)
  Se comen las pizzas. (se pas. — las pizzas son el sujeto, plural)
  Se vende la casa. (se pas. — singular)
  Se venden las casas. (se pas. — plural)

EXPRESIONES COMUNES:
  se sabe que... / se dice que... / se ve que... / ¿cómo se hace?`
        },
        examples: [
            { native: "En este restaurante se come muy bien.", translation: "In this restaurant the food is excellent / one eats very well." },
            { native: "¿Cómo se dice 'hello' en español?", translation: "How do you say 'hello' in Spanish?" },
            { native: "Se buscan camareros con experiencia.", translation: "Experienced waiters wanted. (se pasivo — plural)" },
            { native: "No se fuma en este edificio.", translation: "Smoking is not allowed in this building." },
            { native: "Se dice que este vino es excelente.", translation: "They say this wine is excellent." },
            { native: "Se alquila piso — dos habitaciones.", translation: "Flat to rent — two bedrooms." },
        ]
    },
    {
        id: "es-g-a2-14",
        level: "A2",
        title: "Por y Para — Usos y Diferencias",
        explanation: {
            native: `Por and para both translate as 'for' in English, but they are not interchangeable. Understanding when to use each one is one of the most important distinctions at A2.

PARA — purpose, destination, deadline, opinion, recipient

1. PURPOSE — in order to (+ infinitive):
  Estudio para aprender.             I study in order to learn.
  Trabajo para vivir.                I work to live.

2. DESTINATION — going towards:
  El tren sale para Madrid.          The train is leaving for Madrid.
  Esta carta es para ti.             This letter is for you.

3. DEADLINE — by a specific time:
  Necesito el informe para el lunes.  I need the report by Monday.
  Para mañana, haz el ejercicio.      By tomorrow, do the exercise.

4. OPINION — in one's opinion:
  Para mí, es demasiado caro.         For me / In my opinion, it's too expensive.
  Para ella, todo es fácil.           For her, everything is easy.

5. RECIPIENT — for the benefit of:
  Compré un regalo para mi madre.     I bought a present for my mother.
  Hay una mesa para cuatro.           There is a table for four.

6. COMPARISON — given what you'd expect:
  Habla muy bien para ser principiante.   He speaks very well for a beginner.

POR — cause, exchange, duration, means, agent, approximate location/time

1. CAUSE / REASON — because of, due to:
  Gracias por tu ayuda.               Thank you for your help.
  Lo hice por ti.                     I did it because of you / for your sake.
  Cerrado por vacaciones.             Closed due to/for holidays.

2. EXCHANGE — in exchange for:
  Pagué veinte euros por el libro.    I paid twenty euros for the book.
  Te cambio esto por aquello.         I'll exchange this for that.

3. DURATION — for (a period of time):
  Estudié por tres horas.             I studied for three hours.
  Vivió en Madrid por dos años.       He lived in Madrid for two years.

4. MEANS / METHOD:
  Te llamo por teléfono.              I'll call you by phone.
  Lo mandé por correo.                I sent it by mail.
  Habla por hablar.                   He talks for the sake of talking.

5. ON BEHALF OF / IN FAVOUR OF:
  Firmé por él.                       I signed on his behalf.
  Estoy por el cambio.                I'm in favour of change.

6. APPROXIMATE LOCATION OR TIME:
  Vivo por aquí.                      I live around here.
  Llegará por las tres.               She'll arrive around three.

QUICK TEST
Can you replace 'for' with 'in order to' or 'by a deadline'? → para
Can you replace 'for' with 'because of', 'in exchange for', or 'for a duration'? → por`,
            target: `Por y para se traducen ambas como "for" en inglés, pero no son intercambiables.

PARA — propósito, destino, plazo, opinión, destinatario

1. PROPÓSITO — para (+ infinitivo): Estudio para aprender.
2. DESTINO — hacia: El tren sale para Madrid. / Esta carta es para ti.
3. PLAZO — antes de: Necesito el informe para el lunes.
4. OPINIÓN: Para mí, es demasiado caro.
5. DESTINATARIO: Compré un regalo para mi madre.
6. COMPARACIÓN: Habla muy bien para ser principiante.

POR — causa, intercambio, duración, medio, agente, lugar/tiempo aproximado

1. CAUSA/RAZÓN — por/a causa de: Gracias por tu ayuda. / Lo hice por ti.
2. INTERCAMBIO: Pagué veinte euros por el libro.
3. DURACIÓN — durante: Estudié por tres horas.
4. MEDIO/MÉTODO: Te llamo por teléfono. / Lo mandé por correo.
5. EN NOMBRE DE: Firmé por él.
6. LUGAR O TIEMPO APROXIMADO: Vivo por aquí. / Llegará por las tres.

PRUEBA RÁPIDA:
  ¿Se puede sustituir "for" por "para + infinitivo" o "antes de"? → para
  ¿Se puede sustituir por "a causa de", "a cambio de" o "durante"? → por`
        },
        examples: [
            { native: "Estudio español para hablar con mis amigos.", translation: "I study Spanish in order to speak with my friends. (para = purpose)" },
            { native: "Gracias por tu ayuda.", translation: "Thank you for your help. (por = reason/cause)" },
            { native: "Necesito el trabajo para el viernes.", translation: "I need the work by Friday. (para = deadline)" },
            { native: "Pagué cien euros por este libro.", translation: "I paid one hundred euros for this book. (por = exchange)" },
            { native: "Para mí, es demasiado difícil.", translation: "For me / In my opinion, it's too difficult. (para = opinion)" },
            { native: "Vivió en Barcelona por cinco años.", translation: "He lived in Barcelona for five years. (por = duration)" },
            { native: "Esta carta es para ti.", translation: "This letter is for you. (para = recipient)" },
            { native: "Lo hice por ti.", translation: "I did it for your sake / because of you. (por = on behalf of)" },
        ]
    },
    {
        id: "es-g-a2-15",
        level: "A2",
        title: "Las Frases con SI — Condicionales",
        explanation: {
            native: `Si (if) clauses express conditions and their consequences. At A2, there are two key patterns.

PATTERN 1 — REAL / LIKELY CONDITION (si + present → future or imperative)
The condition is realistic or possible.
  Si + present indicative → future simple (or imperative, or present)

  Si estudias, aprobarás.              If you study, you will pass.
  Si hace buen tiempo, iremos al parque. If the weather is nice, we'll go to the park.
  Si tienes hambre, come algo.         If you're hungry, eat something. (imperative)
  Si es verdad, es grave.              If it's true, it's serious. (present result)

PATTERN 2 — HYPOTHETICAL / CONTRARY TO REALITY (si + imperfecto subjuntivo → conditional)
The condition is imaginary or contrary to fact. Note: Spanish uses the imperfecto de subjuntivo here, not the regular imperfecto.
  Si + imperfecto de subjuntivo → conditional present

  Si tuviera tiempo, viajaría más.       If I had time, I would travel more.
  Si fuera rico, compraría una casa.     If I were rich, I would buy a house.
  Si vinieras, sería genial.             If you came, it would be great.

THE IMPERFECTO DE SUBJUNTIVO — two forms (both are correct):
  -ra form (more common in speech): tuviera, fuera, viniera, pudiera, hiciera
  -se form (more formal/written): tuviese, fuese, viniese, pudiese, hiciese

Key irregular subjunctive stems at A2:
  ser/ir → fuera/fuese      tener → tuviera/tuviese
  estar → estuviera         poder → pudiera
  hacer → hiciera           venir → viniera
  querer → quisiera         saber → supiera

IMPORTANT RULES
1. Si NEVER combines with future or conditional:
  ✗ Si vendrás...    (incorrect)
  ✓ Si vienes...     (present — Pattern 1)
  ✗ Si vendría...    (incorrect)
  ✓ Si vinieras...   (subj. imperfecto — Pattern 2)

2. The si clause can come first or second:
  Si estudias, aprobarás. = Aprobarás si estudias.

3. Si contracts to s' before... actually si never contracts in Spanish.

COMMON SI PATTERNS
  Si quieres...         If you want...
  Si es posible...      If it's possible...
  Si yo fuera tú...     If I were you...
  ¿Y si fuéramos...?    What if we went...? (suggestion)`,
            target: `Las frases con si expresan condiciones y sus consecuencias. Al nivel A2 hay dos estructuras principales.

ESTRUCTURA 1 — CONDICIÓN REAL (si + presente → futuro o imperativo)
La condición es realista o posible.
  Si + indicativo presente → futuro simple (o imperativo o presente)
  Si estudias, aprobarás.
  Si hace buen tiempo, iremos al parque.
  Si tienes hambre, come algo.

ESTRUCTURA 2 — CONDICIÓN HIPOTÉTICA (si + imperfecto subjuntivo → condicional)
La condición es imaginaria o contraria a la realidad.
  Si + imperfecto de subjuntivo → condicional presente
  Si tuviera tiempo, viajaría más.
  Si fuera rico, compraría una casa.

IMPERFECTO DE SUBJUNTIVO — formas clave:
  ser/ir → fuera,  tener → tuviera,  poder → pudiera,
  hacer → hiciera,  venir → viniera

REGLAS IMPORTANTES:
1. Nunca si + futuro o condicional:
  ✗ Si vendrás... → ✓ Si vienes...
  ✗ Si vendría... → ✓ Si vinieras...
2. La proposición con si puede ir primero o después.`
        },
        examples: [
            { native: "Si estudias, aprobarás el examen.", translation: "If you study, you will pass the exam. (si + present → future)" },
            { native: "Si hace frío mañana, nos quedamos en casa.", translation: "If it's cold tomorrow, we'll stay at home." },
            { native: "Si yo fuera tú, hablaría con él.", translation: "If I were you, I would talk to him. (si + subj. imperfecto → conditional)" },
            { native: "Si tienes tiempo, llámame.", translation: "If you have time, call me. (si + present → imperative)" },
            { native: "Si tuviera más dinero, viajaría más.", translation: "If I had more money, I would travel more." },
            { native: "¿Y si fuéramos al cine esta noche?", translation: "What if we went to the cinema tonight? (suggestion)" },
        ]
    },
    {
        id: "es-g-a2-16",
        level: "A2",
        title: "El Discurso Indirecto",
        explanation: {
            native: `Indirect speech (el discurso indirecto) is used to report what someone said without quoting them directly.

REPORTING STATEMENTS — decir que
Direct:   Dice: «Estoy cansado.»              He says: "I am tired."
Indirect: Dice que está cansado.               He says (that) he is tired.

Direct:   Dijo: «Tengo hambre.»                She said: "I am hungry."
Indirect: Dijo que tenía hambre.               She said (that) she was hungry.

TENSE CHANGES WHEN THE REPORTING VERB IS IN THE PAST

When the main verb (decir, explicar, contar, responder, anunciar) is past, reported speech shifts back:

  Direct speech               → Indirect (past reporting verb)
  presente                    → imperfecto
  pretérito perfecto          → pluscuamperfecto (había + participio)
  futuro simple               → condicional simple
  imperfecto                  → imperfecto (no change)
  pretérito indefinido        → pluscuamperfecto

  «Trabajo.» → Dijo que trabajaba.               (presente → imperfecto)
  «He comido.» → Dijo que había comido.          (perfecto → pluscuamperfecto)
  «Vendré.» → Dijo que vendría.                  (futuro → condicional)
  «Comí.» → Dijo que había comido.               (indefinido → pluscuamperfecto)

Note: the pluscuamperfecto (había comido) is introduced here for recognition — full coverage at B1.

REPORTING QUESTIONS — preguntar si / preguntar + question word
Yes/no questions: preguntar si
  Direct:   «¿Estás listo?»           Are you ready?
  Indirect: Me preguntó si estaba listo.   He asked me if I was ready.

Information questions: preguntar + question word
  Direct:   «¿Dónde vives?»           Where do you live?
  Indirect: Me preguntó dónde vivía.   She asked me where I lived.

REPORTING COMMANDS — pedir / decir + que + subjunctive, or pedir / decir + a + infinitive
  Direct:   «¡Habla más despacio!»
  Indirect: Me pidió que hablara más despacio. (subjunctive — A2/B1)
  OR:       Me dijo que hablara más despacio.

At A2, also common: pedir + a + someone + infinitive:
  Me pidió estudiar más.    (less formal, but understood)

TIME AND PLACE REFERENCES SHIFT
  hoy → ese día / aquel día
  mañana → al día siguiente
  ayer → el día anterior
  aquí → allí
  Dijo que vendría ese día.    He said he would come that day.`,
            target: `El discurso indirecto se usa para reportar lo que alguien dijo sin citarlo directamente.

REPORTAR AFIRMACIONES — decir que:
  Directo: Dice: « Estoy cansado. »
  Indirecto: Dice que está cansado.
  
  Directo: Dijo: « Tengo hambre. »
  Indirecto: Dijo que tenía hambre.

CAMBIOS DE TIEMPO (cuando el verbo principal está en pasado):
  presente → imperfecto
  pretérito perfecto → pluscuamperfecto (había + participio)
  futuro → condicional

  « Trabajo. » → Dijo que trabajaba.
  « Vendré. » → Dijo que vendría.

REPORTAR PREGUNTAS:
  Sí/no → preguntar si:
    « ¿Estás listo? » → Me preguntó si estaba listo.
  Con palabra interrogativa:
    « ¿Dónde vives? » → Me preguntó dónde vivía.

REPORTAR ÓRDENES — pedir/decir + que + subjuntivo:
  « ¡Habla más despacio! » → Me pidió que hablara más despacio.

REFERENCIAS DE TIEMPO Y LUGAR:
  hoy → ese día,  mañana → al día siguiente,  ayer → el día anterior`
        },
        examples: [
            { native: "Dice que está cansado.", translation: "He says (that) he is tired. (present reporting — no shift)" },
            { native: "Dijo que no podía venir.", translation: "She said (that) she couldn't come. (podía — imperfecto)" },
            { native: "Me preguntó si tenía hambre.", translation: "He asked me if I was hungry." },
            { native: "Me preguntó dónde vivía.", translation: "She asked me where I lived." },
            { native: "El profesor nos dijo que hiciéramos el ejercicio.", translation: "The teacher told us to do the exercise." },
            { native: "Anunció que vendría al día siguiente.", translation: "He announced that he would come the next day. (futuro → condicional)" },
        ]
    },
    {
        id: "es-g-a2-17",
        level: "A2",
        title: "Los Adverbios en -mente",
        explanation: {
            native: `Adverbs modify verbs, adjectives, or other adverbs. Many Spanish adverbs are formed from adjectives by adding -mente — equivalent to the English -ly suffix.

FORMATION RULES

1. ADJECTIVE HAS A FEMININE FORM IN -a — add -mente to the feminine:
  lento → lenta → lentamente            (slowly)
  rápido → rápida → rápidamente        (quickly)
  tranquilo → tranquila → tranquilamente (calmly)
  claro → clara → claramente            (clearly)
  sincero → sincera → sinceramente      (sincerely)

2. ADJECTIVE ENDS IN -e OR A CONSONANT — add -mente directly:
  fácil → fácilmente                    (easily)
  difícil → difícilmente                (with difficulty)
  feliz → felizmente                    (happily)
  amable → amablemente                  (kindly)
  frecuente → frecuentemente            (frequently)

3. WRITTEN ACCENTS ARE KEPT when the adjective has one:
  fácil → fácilmente (accent kept)
  rápido → rápidamente (accent on rápida transferred)

WHEN USING MULTIPLE ADVERBS IN -MENTE
Only the last adverb takes -mente — the others use the feminine adjective form:
  Habla lenta y claramente.          She speaks slowly and clearly.
  Trabaja rápida pero eficientemente. He works quickly but efficiently.

IRREGULAR / IMPORTANT ADVERBS — must memorise:
  bueno → bien          (well — NOT buenamente)
  malo → mal            (badly)
  mejor → mejor         (better — adverb, no change)
  peor → peor           (worse — adverb, no change)
  mucho → mucho         (a lot — no change)
  poco → poco           (little — no change)

POSITION
  After the conjugated verb:
    Habla español perfectamente.        She speaks Spanish perfectly.
    Siempre responde amablemente.       He always answers kindly.

  In compound tenses, short adverbs between auxiliary and participle:
    Ha trabajado mucho.                 She has worked a lot.
    Nunca lo ha hecho bien.            He has never done it well.

  Sentence adverbs (afortunadamente, probablemente, desgraciadamente) often go at the start or end:
    Afortunadamente, nadie se hizo daño.   Fortunately, nobody got hurt.
    Probablemente llegará tarde.            He'll probably arrive late.`,
            target: `Los adverbios modifican verbos, adjetivos u otros adverbios. Muchos adverbios españoles se forman añadiendo -mente a un adjetivo.

REGLAS DE FORMACIÓN:

1. ADJETIVO CON FORMA FEMENINA EN -a → añadir -mente al femenino:
  lento → lenta → lentamente
  rápido → rápida → rápidamente
  claro → clara → claramente

2. ADJETIVO EN -e O CONSONANTE → añadir -mente directamente:
  fácil → fácilmente,  difícil → difícilmente,  feliz → felizmente

3. LAS TILDES SE CONSERVAN: fácil → fácilmente

CON VARIOS ADVERBIOS EN -MENTE:
Solo el último lleva -mente — los demás usan el femenino:
  Habla lenta y claramente.

ADVERBIOS IRREGOLARES:
  bueno → bien,  malo → mal,  mucho → mucho,  poco → poco

POSICIÓN:
  Después del verbo: Habla español perfectamente.
  Adverbios de frase al inicio o al final:
    Afortunadamente, nadie se hizo daño.`
        },
        examples: [
            { native: "Habla español perfectamente.", translation: "She speaks Spanish perfectly. (-o → -a → -mente)" },
            { native: "Afortunadamente nadie resultó herido.", translation: "Fortunately nobody was hurt. (sentence adverb)" },
            { native: "Finalmente lo entendí.", translation: "I finally understood it." },
            { native: "Responde siempre amablemente.", translation: "He always answers kindly. (-e → -mente)" },
            { native: "Habla lenta y claramente.", translation: "She speaks slowly and clearly. (two adverbs — only last takes -mente)" },
            { native: "Desgraciadamente no puedo venir mañana.", translation: "Unfortunately I can't come tomorrow." },
        ]
    },
]