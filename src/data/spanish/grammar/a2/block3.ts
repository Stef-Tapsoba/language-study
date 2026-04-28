import { GrammarLesson } from "../../../../types"

// Block 3 — "¿Para quién?" (Units 7–9)
// Object pronouns (OD/OI/se), saber/conocer in past tenses, stem-changing preterites.

export const block3Lessons: GrammarLesson[] = [
  {
    id: "es-g-a2-8",
    level: "A2",
    title: "Pronombres de objeto directo — lo, la, los, las",
    explanation: `Direct object pronouns are the single most visible marker of fluency in Spanish conversation. Every native speaker uses them automatically — you'll hear one every 20 seconds in real speech. Without them you sound like a learner; with them you sound like someone who actually speaks the language.

WHAT IS A DIRECT OBJECT?
The noun that receives the action of the verb directly — no preposition between verb and noun.
Test: Ask ¿qué? or ¿a quién? directly after the verb.
  Compro el café. → ¿Qué compro? → el café = OD
  Llamo a mi madre. → ¿A quién llamo? → a mi madre = OD (personal 'a' marks it as OD)

THE FOUR PRONOUNS:
  lo — masculine singular (el café, el libro → lo)
  la — feminine singular (la película, la llave → la)
  los — masculine plural (los libros → los)
  las — feminine plural (las llaves → las)

POSITION — always BEFORE the conjugated verb:
  ¿Ves la serie? → ¿La ves?
  Compré el regalo ayer. → Lo compré ayer.
  Siempre escuchaba esa canción. → Siempre la escuchaba.
  No encuentro mis gafas. → No las encuentro.

WITH MODAL + INFINITIVE — two equally correct positions:
  Lo quiero ver. / Quiero verlo.    ✓ both correct
  La voy a llamar. / Voy a llamarla. ✓ both correct
  WRONG: Quiero lo ver. ✗

WITH GERUND (estar + -ndo):
  Lo estoy leyendo. / Estoy leyéndolo. ✓
  (Note: accent added to gerund when pronoun is attached)

WITH IMPERATIVE:
  Affirmative: pronoun attaches to end → ¡Cómelo! / ¡Llámala!
  Negative: pronoun goes BEFORE verb → ¡No lo comas! / ¡No la llames!

ME / TE / NOS as direct object (1st and 2nd person):
  ¿Me ves? — Can you see me?
  No te escucho bien. — I can't hear you well.
  Ella nos conoce desde hace años.

LatAm note: In Latin America, lo/la/los/las are always used for direct objects — including people. This course follows the LatAm standard throughout.`,
    paradigmTable: {
      pronouns: ["Gender / Number", "Pronoun", "Example"],
      verbs: [
        { label: "Masc. singular", forms: ["lo", "Lo veo todos los días."] },
        { label: "Fem. singular", forms: ["la", "La conozco bien."] },
        { label: "Masc. plural", forms: ["los", "Los perdí."] },
        { label: "Fem. plural", forms: ["las", "¿Las tienes?"] },
      ],
    },
    rules: [
      {
        condition: "Replacing a direct object noun",
        result: "Match the pronoun to the gender and number of the replaced noun; place BEFORE the conjugated verb",
        examples: [
          { native: "Compré las entradas. → Las compré.", translation: "I bought the tickets. / I bought them.", annotation: "entradas (fem.pl.) → las" },
          { native: "¿Tienes el libro? → ¿Lo tienes?", translation: "Do you have the book? / Do you have it?", annotation: "libro (masc.sg.) → lo" },
        ],
      },
      {
        condition: "Modal + infinitive construction",
        result: "Pronoun can go before conjugated verb OR attached to infinitive — both are correct",
        examples: [
          { native: "Voy a llamarla. / La voy a llamar.", translation: "I'm going to call her." },
          { native: "Quiero verlo. / Lo quiero ver.", translation: "I want to see it." },
        ],
      },
      {
        condition: "Imperative — affirmative vs. negative",
        result: "Affirmative: attach to end | Negative: place before verb",
        examples: [
          { native: "¡Cómelo! / ¡No lo comas!", translation: "Eat it! / Don't eat it!" },
          { native: "¡Llámala! / ¡No la llames!", translation: "Call her! / Don't call her!" },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Practice by replacing every direct object noun in sentences you say or write. Make it automatic — the absence of pronouns is the #1 learner marker in spoken Spanish.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Has visto la nueva película? ¿La recomiendas?", translation: "Have you seen the new film? Do you recommend it?" },
          { native: "Mucho. La vi el jueves y la encontré brillante. Deberías ir a verla antes de que la quiten.", translation: "Definitely. I saw it on Thursday and found it brilliant. You should go see it before they take it off." },
        ],
      },
      { native: "¿Tienes las llaves? — Sí, las tengo aquí.", translation: "Do you have the keys? — Yes, I have them here." },
      { native: "Lo busqué por todas partes pero no lo encontré.", translation: "I looked for it everywhere but couldn't find it." },
      { native: "El libro que me recomendaste, lo empecé ayer. Lo estoy leyendo / Estoy leyéndolo en el metro.", translation: "The book you recommended — I started it yesterday. I'm reading it on the metro." },
    ],
    inlineVocab: [
      { word: "la cartelera", translation: "what's on / listings" },
      { word: "doblado/a", translation: "dubbed" },
      { word: "en versión original", translation: "in the original version" },
      { word: "el personaje", translation: "the character" },
      { word: "la trama", translation: "the plot" },
      { word: "Vale la pena.", translation: "It's worth it." },
      { word: "No te lo pierdas.", translation: "Don't miss it." },
    ],
  },

  {
    id: "es-g-a2-9",
    level: "A2",
    title: "Pronombres de objeto indirecto — le/les y la regla le→se",
    explanation: `Indirect object pronouns show to whom or for whom an action is done. They are the second half of the object pronoun system — and the rule that combines them with direct object pronouns (le → se) is the most important pronoun rule in A2.

WHAT IS AN INDIRECT OBJECT?
Answers ¿a quién? or ¿para quién? — usually linked to the verb with the preposition 'a':
  Le hablo a María.        (¿A quién hablo? → a María = OI)
  Les mandé un mensaje a mis padres.

THE TWO PRONOUNS:
  le — to/for him / her / you (usted)  — NO gender distinction
  les — to/for them / you (ustedes)    — NO gender distinction

  Le hablo a María. = Le hablo a Juan.  (same pronoun for both genders)
  Les conté todo a mis amigos.

REDUPLICATION is normal and common — use both the pronoun and the 'a' phrase:
  Le dije a María la verdad.   (Le + a María — both present for clarity)

POSITION: same as OD — before conjugated verb:
  Le mandé un mensaje ayer.
  Ya les expliqué el problema.

THE MOST IMPORTANT RULE: le → se before lo/la/los/las
When a direct object pronoun (lo/la/los/las) follows an indirect object pronoun (le/les),
the indirect pronoun ALWAYS changes to se.
This is because 'le lo' and 'les la' are unpronounceable clusters in Spanish.

  le + lo → se lo        les + lo → se lo
  le + la → se la        les + la → se la
  le + los → se los      les + los → se los
  le + las → se las      les + las → se las

EXAMPLES:
  Le doy el libro a María.   → Se lo doy.      (give it to her)
  Les mandé las fotos.       → Se las mandé.   (sent them to them)
  ¿Le explicaste el problema al jefe? → ¿Se lo explicaste?

Add a + person for clarity (since 'se' is ambiguous):
  Se lo dije a ella.   Se lo expliqué a mis padres.

COMPLETE PRONOUN ORDER (for reference):
  Position 1: me / te / se / nos
  Position 2: lo / la / los / las
  OI always comes before OD. le/les → se when followed by OD.`,
    paradigmTable: {
      pronouns: ["OI", "OD", "Combined result"],
      verbs: [
        { label: "le / les", forms: ["lo", "se lo"] },
        { label: "le / les", forms: ["la", "se la"] },
        { label: "le / les", forms: ["los", "se los"] },
        { label: "le / les", forms: ["las", "se las"] },
      ],
    },
    rules: [
      {
        condition: "Indirect object (to/for someone)",
        result: "Use le (singular) or les (plural) — before the verb, regardless of gender",
        examples: [
          { native: "Le mandé un mensaje a Pedro.", translation: "I sent Pedro a message." },
          { native: "Les conté todo a mis padres.", translation: "I told my parents everything." },
        ],
      },
      {
        condition: "OI + OD in the same sentence: le/les before lo/la/los/las",
        result: "le/les → se (always, no exceptions)",
        examples: [
          { native: "Le doy el libro. → Se lo doy.", translation: "I give her the book. / I give it to her.", annotation: "le → se (before lo); el libro → lo" },
          { native: "¿Les explicaste el plan? → ¿Se lo explicaste?", translation: "Did you explain the plan to them? / Did you explain it to them?", annotation: "les → se (before lo); el plan → lo" },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "'Le lo doy' is NEVER correct in Spanish. The moment le/les precedes lo/la/los/las, the indirect pronoun becomes se. Always: se lo / se la / se los / se las.",
      },
      {
        type: "tip",
        content: "Since 'se' can refer to many people, add 'a + person' for clarity: 'Se lo dije a ella' / 'Se lo mandé a mis padres'. This is not redundant — it's natural Spanish.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Le dijiste a Ramón lo de la cena del viernes?", translation: "Did you tell Ramón about the Friday dinner?" },
          { native: "Sí, se lo dije esta mañana. Y a los demás les voy a mandar un mensaje esta tarde.", translation: "Yes, I told him this morning. And I'm going to send the others a message this afternoon." },
        ],
      },
      { native: "Le hicimos un álbum de fotos entre todas. Se lo dimos al final de la noche — abrió la primera página y se quedó sin palabras.", translation: "We made her a photo album between us all. We gave it to her at the end of the evening — she opened the first page and was speechless." },
      { native: "¿Me lo puedes explicar? No lo entiendo.", translation: "Can you explain it to me? I don't understand it." },
    ],
    inlineVocab: [
      { word: "avisar", translation: "to let someone know / to warn" },
      { word: "entregar", translation: "to hand over / deliver" },
      { word: "devolver", translation: "to return / give back" },
      { word: "prestar", translation: "to lend" },
      { word: "regalar", translation: "to give as a gift" },
      { word: "la sorpresa", translation: "the surprise" },
      { word: "por cierto", translation: "by the way" },
    ],
  },

  {
    id: "es-g-a2-10",
    level: "A2",
    title: "Saber y conocer en el pasado + pretéritos con cambio vocálico",
    explanation: `SABER vs. CONOCER IN THE PAST — one of the subtlest and most useful distinctions in Spanish.

Both verbs describe 'knowing' but mean very different things in the past.

IN IMPERFECTO — ongoing state:
  Sabía que era difícil.          (I knew it was hard — continuous state of knowledge)
  Conocía bien ese barrio.        (I knew / was familiar with that neighbourhood)

IN INDEFINIDO — a specific moment of change:
  SUPE = "I found out" / "I came to know" at a specific moment:
    Supe la noticia esta mañana.     (I found out the news this morning)
    No lo supe hasta después.         (I didn't find out until later)

  CONOCÍ = "I met for the first time":
    Conocí a mi mejor amiga en la universidad.   (first meeting)
    ¿Cuándo conociste a tu pareja?
    Conocimos Buenos Aires el año pasado.        (first visit — discovered)

CONTRAST IN CONTEXT:
  Cuando llegué a la fiesta, ya conocía a algunos invitados.
  Esa noche conocí a Rodrigo por primera vez.
  (already knew some → continuous; met Rodrigo → first-time event)

IRREGULAR PRETERITE REVIEW — spiralling back from Unit 1:
The -UV- and other irregular families (introduced in U1) appear naturally in narrative here.
Quick reference:
  tuve / estuve / pude / puse / supe / anduve  (-UV- family)
  vine / quise / hice / dije / traje  (-IN-/-IS- family)
  fui / fue (ser/ir shared)
These forms now appear in contexts requiring saber/conocer contrast and story narration — practise them actively as you tell stories.

STEM-CHANGING PRETERITES — 3rd person only:
Verbs that stem-change in the present (-ir verbs only!) also change in the preterite,
but ONLY in 3rd person singular and plural.
  o→ue in present → o→u in 3rd person preterite:
    dormir: durmió / durmieron  (NOT dormió/dormieron)
    morir:  murió  / murieron

  e→ie or e→i in present → e→i in 3rd person preterite:
    pedir:   pidió  / pidieron
    servir:  sirvió / sirvieron
    sentir:  sintió / sintieron
    preferir: prefirió / prefirieron
    seguir:  siguió  / siguieron
    repetir: repitió / repitieron
    vestirse: se vistió / se vistieron
    reír:    rió    / rieron

The other persons are completely regular:
  pedí / pediste / pidió / pedimos / pedisteis / pidieron
  (only 3rd person changes)`,
    paradigmTable: {
      pronouns: ["Verb", "Imperfecto (state)", "Indefinido (change of state)"],
      verbs: [
        { label: "saber", forms: ["sabía (knew)", "supe (found out)"] },
        { label: "conocer", forms: ["conocía (was acquainted with)", "conocí (met / first visited)"] },
      ],
    },
    rules: [
      {
        condition: "Saber in indefinido",
        result: "Supe = 'I found out' — the moment knowledge began",
        examples: [
          { native: "¿Cuándo supiste que ibas a vivir en Colombia?", translation: "When did you find out you were going to live in Colombia?" },
          { native: "Supimos que habían cancelado el vuelo.", translation: "We found out the flight had been cancelled." },
        ],
      },
      {
        condition: "Conocer in indefinido",
        result: "Conocí = 'I met for the first time' or 'I first visited'",
        examples: [
          { native: "Fue en ese viaje cuando conocí a Diego.", translation: "It was on that trip when I met Diego." },
          { native: "Conocimos Cartagena el verano pasado.", translation: "We discovered/visited Cartagena for the first time last summer." },
        ],
      },
      {
        condition: "Stem-changing -ir verbs in preterite",
        result: "Only 3rd person singular and plural change: o→u or e→i",
        examples: [
          { native: "El bebé durmió toda la noche.", translation: "The baby slept all night." },
          { native: "¿Qué pidieron de postre?", translation: "What did they order for dessert?" },
          { native: "Se rieron mucho con esa historia.", translation: "They laughed a lot at that story." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "A common error: 'dormió' (incorrect) for the 3rd person of dormir. The correct form is 'durmió'. Similarly: pidió ✓ (not pedió), sintió ✓ (not sentió).",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Cuándo conociste a Tomás?", translation: "When did you meet Tomás?" },
          { native: "Lo conocí en una conferencia el año pasado. No lo conocía de antes — fue la primera vez que lo vi.", translation: "I met him at a conference last year. I didn't know him before — it was the first time I'd seen him." },
        ],
      },
      { native: "No sabía que ella vivía en Lima — lo supe el lunes.", translation: "I didn't know she lived in Lima — I found out on Monday." },
      { native: "Anoche durmió fatal — tuvo una pesadilla. Yo dormí bien, pero él durmió solo tres horas.", translation: "Last night he slept terribly — he had a nightmare. I slept well, but he only slept three hours." },
    ],
    inlineVocab: [
      { word: "enterarse de", translation: "to find out about" },
      { word: "presentar", translation: "to introduce (someone)" },
      { word: "confiar en", translation: "to trust / confide in" },
      { word: "compartir", translation: "to share" },
      { word: "convencer", translation: "to convince" },
      { word: "acordarse de", translation: "to remember" },
      { word: "olvidarse de", translation: "to forget" },
    ],
  },
]
