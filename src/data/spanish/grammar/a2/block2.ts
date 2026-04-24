import { GrammarLesson } from "../../../../types"

// Block 2 — "¿Cómo se compara?" (Units 4–6)
// Comparatives/superlatives, relative pronouns, negation expansion.

export const block2Lessons: GrammarLesson[] = [
  {
    id: "es-g-a2-5",
    level: "A2",
    title: "Comparativos y superlativos — Comparatives and Superlatives",
    explanation: `Comparisons are how you recommend, evaluate, and defend opinions.

COMPARATIVES OF ADJECTIVES/ADVERBS:
  más + adj/adv + que       → more ... than
  menos + adj/adv + que     → less ... than
  tan + adj/adv + como      → as ... as (equality)

  Ciudad de México es más grande que Bogotá.
  Este restaurante es menos caro que el otro.
  María es tan inteligente como su hermano.

COMPARING QUANTITIES (nouns):
  más + noun + que          → more ... than
  menos + noun + que        → fewer/less ... than
  tanto/a/os/as + noun + como  → as much/many ... as  (tanto agrees in gender/number)

  Hay más turistas que el año pasado.
  Tengo menos tiempo que antes.
  Hay tantas opciones como en Lima.

QUE vs. DE — critical distinction:
  más/menos + adj + QUE → comparison with a person or thing
  más/menos + DE + number → comparison with a quantity
  Es más alto que su padre.          (comparison with person → que)
  Cuesta más de cien pesos.          (comparison with number → de)
  Es menos difícil de lo que pensaba. (comparison with idea → de lo que)

SUPERLATIVES:
  el/la/los/las + más/menos + adj + de ...
  Es el barrio más bonito de la ciudad.
  Son los restaurantes menos caros del centro.
  IMPORTANT: After a superlative, always use DE (not en): el mejor restaurante DE la ciudad ✓

IRREGULAR COMPARATIVES (must be memorised):
  bueno → mejor (better)   |  el/la mejor (the best)   — NEVER 'más bueno'
  malo  → peor  (worse)    |  el/la peor  (the worst)  — NEVER 'más malo' (in standard use)
  grande → mayor (older/greater — for age and importance, NOT physical size)
  pequeño → menor (younger/lesser — for age and importance)
  Physical size always uses regular form: más grande / más pequeño

  Mi hermana es mayor que yo. (age — irregular)
  Mi apartamento es más grande que el tuyo. (physical size — regular)`,
    paradigmTable: {
      pronouns: ["Adjective/base", "Comparative", "Superlative"],
      verbs: [
        { label: "bueno (good)", forms: ["bueno/a", "mejor", "el/la mejor"] },
        { label: "malo (bad)", forms: ["malo/a", "peor", "el/la peor"] },
        { label: "grande (big/old — for age)", forms: ["grande", "mayor", "el/la mayor"] },
        { label: "pequeño (small/young)", forms: ["pequeño/a", "menor", "el/la menor"] },
      ],
    },
    rules: [
      {
        condition: "Comparison with another person or thing",
        result: "más/menos + adj + QUE",
        examples: [
          { native: "Buenos Aires es más cara que Bogotá.", translation: "Buenos Aires is more expensive than Bogotá." },
          { native: "Este hotel es menos ruidoso que el otro.", translation: "This hotel is less noisy than the other one." },
        ],
      },
      {
        condition: "Comparison with a number",
        result: "más/menos + DE + number",
        examples: [
          { native: "Llegaron más de veinte personas.", translation: "More than twenty people arrived." },
          { native: "Cuesta menos de cincuenta pesos.", translation: "It costs less than fifty pesos." },
        ],
      },
      {
        condition: "Irregular: quality comparison",
        result: "Use mejor/peor — NEVER 'más bueno / más malo' for quality",
        examples: [
          { native: "Este vino es mejor que el de ayer.", translation: "This wine is better than yesterday's." },
          { native: "Ella habla español mejor que él.", translation: "She speaks Spanish better than he does." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "The #1 error: 'más bueno' instead of 'mejor'. Always use mejor/peor for quality. 'Más grande' is correct for physical size only.",
      },
      {
        type: "warning",
        content: "After superlatives: always de, never en. 'El mejor restaurante DE la ciudad' ✓ / 'el mejor restaurante EN la ciudad' ✗",
      },
      {
        type: "tip",
        content: "Mayor/menor = age and importance. Más grande/más pequeño = physical size. 'Mi hermano es mayor' (older) vs 'Mi apartamento es más grande' (bigger).",
      },
    ],
    examples: [
      { native: "Guadalajara es menos estresante que Ciudad de México y, en mi opinión, la comida es mejor.", translation: "Guadalajara is less stressful than Mexico City and, in my opinion, the food is better." },
      { native: "Es el mejor café de Buenos Aires.", translation: "It's the best coffee in Buenos Aires." },
      { native: "¿Tu hermano es mayor o menor que tú?", translation: "Is your brother older or younger than you?" },
      { native: "Hay tantos museos aquí como en Madrid.", translation: "There are as many museums here as in Madrid." },
      { native: "El trayecto dura más de dos horas.", translation: "The journey takes more than two hours." },
    ],
    inlineVocab: [
      { word: "comparar", translation: "to compare" },
      { word: "preferir", translation: "to prefer" },
      { word: "sin duda", translation: "without doubt" },
      { word: "asequible", translation: "affordable" },
      { word: "animado/a", translation: "lively" },
      { word: "céntrico/a", translation: "centrally located" },
      { word: "contaminado/a", translation: "polluted" },
    ],
  },

  {
    id: "es-g-a2-6",
    level: "A2",
    title: "Pronombres relativos — que, donde, lo que",
    explanation: `Relative pronouns let you describe with precision and add layers. Instead of two short sentences you produce one connected sentence — the difference between A1 and A2 production.

QUE — the most common relative pronoun:
  Used for both people AND things (unlike French qui/que).
  Used as subject OR object of the relative clause.
  NEVER omitted (unlike English 'that').
  NEVER changes form.

  Tengo un amigo que habla japonés.         (que = subject — the friend speaks)
  La película que vi anoche fue genial.      (que = object — I saw the film)
  El café que me recomendaste estaba buenísimo.

DONDE — for places:
  Es el café donde trabajo todas las mañanas.
  Busco una ciudad donde no llueva demasiado.
  Equivalent to 'en el que / en la que' — pero donde is more natural in speech.

LO QUE — the neuter relative ('what', 'the thing that'):
  Used when there is no specific noun antecedent.
  Equivalent to English 'what' in sentences like 'what I need' / 'what happened'.

  No entiendo lo que dices.                (I don't understand what you're saying.)
  Lo que más me gusta de esta ciudad es el clima.  (What I like most...)
  Lo que pasa es que...                    (The thing is that... — very high frequency)

QUIEN/QUIENES — for people, especially after prepositions:
  La persona con quien hablé es mi jefa.   (preferred over 'con que')
  El amigo con quien fui al concierto.
  Without a preposition, que works fine for people: la persona que llamó.`,
    rules: [
      {
        condition: "Relative clause about a person or thing",
        result: "Use que — invariable, never omitted",
        examples: [
          { native: "Tengo una colega que habla cinco idiomas.", translation: "I have a colleague who speaks five languages." },
          { native: "La canción que más me gusta es esta.", translation: "The song I like most is this one." },
        ],
      },
      {
        condition: "Relative clause about a place",
        result: "Use donde",
        examples: [
          { native: "Es el barrio donde crecí.", translation: "It's the neighbourhood where I grew up." },
          { native: "Busco un lugar donde pueda trabajar tranquilo.", translation: "I'm looking for a place where I can work in peace." },
        ],
      },
      {
        condition: "Referring to an idea or abstract concept (no specific noun)",
        result: "Use lo que",
        examples: [
          { native: "Lo que más me sorprendió fue el final.", translation: "What surprised me most was the ending." },
          { native: "Lo que pasa es que no tenía tiempo.", translation: "The thing is that I didn't have time." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "'Lo que pasa es que...' is one of the most frequent phrases in everyday Latin American Spanish. Learn it as a fixed chunk.",
      },
      {
        type: "tip",
        content: "For people after a preposition, prefer quien: 'la persona con quien fui' (not 'con que'). Without a preposition, 'que' is perfectly natural for people.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Viste la serie que te recomendé?", translation: "Did you see the series I recommended to you?" },
          { native: "Sí, la que pasa en Colombia. Lo que más me sorprendió fue el final. No me esperaba lo que pasó.", translation: "Yes, the one set in Colombia. What surprised me most was the ending. I didn't expect what happened." },
        ],
      },
      { native: "El café donde nos conocimos ya no existe.", translation: "The café where we met no longer exists." },
      { native: "Eso es exactamente lo que necesitaba escuchar.", translation: "That's exactly what I needed to hear." },
      { native: "La persona con quien viajé se llama Valentina.", translation: "The person I travelled with is called Valentina." },
    ],
    inlineVocab: [
      { word: "el momento en que", translation: "the moment when" },
      { word: "lo que me gusta", translation: "what I like" },
      { word: "lo que me molesta", translation: "what annoys me" },
      { word: "recomendar", translation: "to recommend" },
      { word: "enganchar", translation: "to hook / captivate" },
      { word: "desarrollarse", translation: "to take place / unfold" },
      { word: "lo que pasa es que...", translation: "the thing is that..." },
    ],
  },

  {
    id: "es-g-a2-7",
    level: "A2",
    title: "Negación ampliada — ningún, ya no, apenas, ni siquiera",
    explanation: `At A1 you learned: no, nunca/jamás, nadie, nada, tampoco, ni...ni.
At A2 you need the full toolkit. Each expression has a distinct nuance.

REVIEW — double negation in Spanish:
  Double negatives are CORRECT and common in Spanish.
  If the negation comes BEFORE the verb: no extra 'no' needed (Nunca fui. / Nadie vino.)
  If it comes AFTER the verb: keep 'no' before the verb (No fui nunca. / No vino nadie.)

NEW STRUCTURES:

NINGÚN / NINGUNA (not a single one / no...at all):
  As adjective before noun: agrees in gender; ningún (masc. sg.), ninguna (fem. sg.)
    No tengo ningún amigo allí.       No hay ninguna tienda abierta.
  As pronoun (no noun after it): masculine ninguno, feminine ninguna
    ¿Cuál prefieres? — Ninguno.
  Almost always singular in Spanish (unlike English 'any').

YA NO (no longer / not anymore — marks a change of state):
  Ya no vivo en Madrid.             (I used to — I don't anymore)
  Ya no me gusta el café.
  Contrast with:
  todavía / aún = still (ongoing)     Todavía vivo aquí.
  todavía no = not yet                Todavía no he terminado.

APENAS (barely / hardly / scarcely):
  Barely slept: Apenas dormí anoche.
  Barely know: Apenas lo conozco.
  Barely anyone: Apenas hay nadie aquí.
  Barely on time: Llegamos apenas a tiempo.

NI SIQUIERA (not even — the most emphatic negation):
  Ni siquiera me llamó.             (He didn't even call me.)
  Ni siquiera sé su nombre.
  Not even for coffee: No tengo dinero, ni siquiera para el café.
  The pragmatic meaning: 'ni siquiera' presupposes that the negated thing is the minimum you'd expect. Indignation is built in.`,
    paradigmTable: {
      pronouns: ["Expression", "Meaning", "Example"],
      verbs: [
        { label: "ya no", forms: ["no longer / not anymore", "Ya no fumo."] },
        { label: "todavía no", forms: ["not yet", "Todavía no he terminado."] },
        { label: "todavía / aún", forms: ["still (ongoing)", "Todavía trabajo aquí."] },
        { label: "apenas", forms: ["barely / hardly", "Apenas dormí."] },
        { label: "ni siquiera", forms: ["not even", "Ni siquiera llamó."] },
        { label: "ningún/a", forms: ["no / not a single", "No hay ningún café."] },
      ],
    },
    rules: [
      {
        condition: "Ningún/ninguna as adjective before noun",
        result: "ningún (masc. sg.) + noun | ninguna (fem. sg.) + noun — almost always singular",
        examples: [
          { native: "No encontré ningún hotel libre.", translation: "I didn't find a single free hotel." },
          { native: "No hay ninguna razón para preocuparse.", translation: "There's no reason to worry." },
        ],
      },
      {
        condition: "Change of state — something that used to be true is no longer true",
        result: "Use ya no + present tense",
        examples: [
          { native: "Ya no como carne.", translation: "I no longer eat meat." },
          { native: "Ya no somos amigos.", translation: "We're no longer friends." },
        ],
      },
      {
        condition: "Extreme emphasis — something minimal was not done",
        result: "Ni siquiera + verb / Ni siquiera + noun",
        examples: [
          { native: "Ni siquiera intentó disculparse.", translation: "He didn't even try to apologise." },
          { native: "Ni siquiera yo lo sabía.", translation: "Not even I knew about it." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "Ningún loses the -o before a masculine noun (apócope). ¡Ningún problema! (not 'ninguno problema'). As a pronoun standing alone: ninguno / ninguna.",
      },
      {
        type: "culture",
        content: "'Ni de coña', 'ni hablar', 'ni loco/a' — Spanish uses negation not just to negate facts but to express attitude, surprise, and refusal with energy. Learn these fixed expressions alongside the grammatical ones.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Tienes noticias de Tomás? Nadie parece saber dónde está.", translation: "Do you have news of Tomás? Nobody seems to know where he is." },
          { native: "No, ya no hablo con él desde hace meses. Ni siquiera apareció en el cumpleaños de Laura. Apenas nos da señales de vida.", translation: "No, I no longer talk to him — it's been months. He didn't even turn up to Laura's birthday. He barely gives us any sign of life." },
        ],
      },
      { native: "Ya no hay ningún vuelo disponible para ese día.", translation: "There are no longer any flights available for that day." },
      { native: "Fui al concierto aunque apenas dormí la noche anterior.", translation: "I went to the concert even though I had barely slept the night before." },
    ],
    inlineVocab: [
      { word: "ya no", translation: "no longer / not anymore" },
      { word: "todavía", translation: "still / yet" },
      { word: "apenas", translation: "barely / hardly" },
      { word: "ni siquiera", translation: "not even" },
      { word: "echar de menos", translation: "to miss (a person or place)" },
      { word: "extrañar", translation: "to miss (LatAm)" },
      { word: "nada de nada", translation: "nothing at all" },
    ],
  },
]
