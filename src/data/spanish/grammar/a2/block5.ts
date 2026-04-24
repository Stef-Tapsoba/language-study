import { GrammarLesson } from "../../../../types"

// Block 5 — "La vida en español" (Units 13–16)
// Health vocabulary, travel integration, feelings/opinions, advanced connectors.

export const block5Lessons: GrammarLesson[] = [
  {
    id: "es-g-a2-14",
    level: "A2",
    title: "Salud — doler (like gustar), tener + noun, hay que/deberías",
    explanation: `Health language is survival Spanish. After this lesson you can describe any symptom, understand a doctor's instructions, and navigate a pharmacy — entirely in Spanish.

DOLER — works exactly like gustar:
The body part is the grammatical subject; the person uses an indirect object pronoun.
  Pattern: pronombre OI + duele (singular) / duelen (plural) + parte del cuerpo

  me duele la cabeza          (I have a headache — lit. the head hurts me)
  te duele la espalda
  le duelen los pies          (his/her feet hurt)
  nos duele el cuello
  les duelen los dientes

More: Me duele mucho la garganta. / ¿Te duele el pecho cuando respiras? / Nos duelen los ojos de tanto mirar la pantalla.

Doler in the PAST:
  Imperfecto — ongoing state: Ayer me dolía la cabeza toda la tarde.
  Indefinido — specific episode: De repente me dolió el pecho y me asusté.

TENER + NOUN — describing symptoms and illness:
  tener fiebre          to have a fever
  tener catarro / resfriado   to have a cold (catarro is common in LatAm)
  tener gripe           to have the flu
  tener tos             to have a cough
  tener náuseas         to feel nauseous
  tener mareos          to feel dizzy
  tener dolor de cabeza / garganta / espalda / muelas / estómago
  tener escalofríos     to have chills
  tener alergia a...    to be allergic to...

ESTAR + ADJECTIVE — physical states:
  estar resfriado/a     to have a cold (congested)
  estar agotado/a       to be exhausted
  estar mareado/a       to feel dizzy
  estar inflamado/a     to be inflamed / swollen
  estar débil           to be weak
  estar mejor / peor    to be better / worse

IMPORTANT: estar constipado/a = to be CONGESTED (nasal) — NOT the English 'constipated'.

HAY QUE / TIENES QUE / DEBERÍAS — register distinctions in medical context:
  hay que + inf.     = impersonal advice — Hay que descansar mucho.
  tienes que + inf.  = direct obligation — Tienes que terminar el tratamiento.
  deberías + inf.    = soft recommendation — Deberías beber más agua.
  te recomiendo + inf.  = professional advice — Te recomiendo guardar cama.`,
    rules: [
      {
        condition: "Doler — expressing pain",
        result: "OI pronoun + duele (singular body part) / duelen (plural body parts)",
        examples: [
          { native: "Me duele mucho la garganta.", translation: "My throat hurts a lot." },
          { native: "Le duelen los pies después de caminar todo el día.", translation: "His/her feet hurt after walking all day." },
        ],
      },
      {
        condition: "Describing ongoing pain vs. a specific pain episode",
        result: "Imperfecto = ongoing state. Indefinido = specific event.",
        examples: [
          { native: "Ayer me dolía la cabeza toda la tarde.", translation: "Yesterday my head ached all afternoon." },
          { native: "De repente me dolió el pecho.", translation: "Suddenly my chest hurt (a specific moment)." },
        ],
      },
    ],
    notes: [
      {
        type: "warning",
        content: "¡Ojo! 'Estar constipado/a' = nasal congestion in Spanish (a cold). It does NOT mean constipated. The false friend is especially common for English speakers.",
      },
      {
        type: "culture",
        content: "In Latin America, the pharmacist (farmacéutico/a) acts as the first point of healthcare for minor symptoms. It's completely normal to describe symptoms and receive treatment without seeing a doctor. Farmacias de guardia (24-hour pharmacies) are common.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "Buenos días, doctor. Me duele mucho la garganta y tengo fiebre desde anoche. También tengo un poco de tos.", translation: "Good morning, doctor. My throat hurts a lot and I've had a fever since last night. I also have a slight cough." },
          { native: "¿Desde cuándo le empezaron los síntomas? Abra la boca, por favor. Tiene una faringitis bastante fuerte. Hay que tomar antibióticos durante diez días. Debería guardar cama uno o dos días.", translation: "When did the symptoms start? Open your mouth please. You have quite a bad pharyngitis. You need to take antibiotics for ten days. You should stay in bed for one or two days." },
        ],
      },
      { native: "Tengo fiebre y me duele todo el cuerpo — creo que tengo gripe.", translation: "I have a fever and my whole body aches — I think I have the flu." },
      { native: "Busco algo para el dolor de cabeza. No tengo receta.", translation: "I'm looking for something for a headache. I don't have a prescription." },
    ],
    inlineVocab: [
      { word: "la fiebre", translation: "fever" },
      { word: "el catarro / resfriado", translation: "a cold" },
      { word: "los antibióticos", translation: "antibiotics" },
      { word: "el medicamento", translation: "medication" },
      { word: "la receta médica", translation: "medical prescription" },
      { word: "guardar cama", translation: "to stay in bed" },
      { word: "mejorar", translation: "to improve / get better" },
      { word: "los efectos secundarios", translation: "side effects" },
    ],
  },

  {
    id: "es-g-a2-15",
    level: "A2",
    title: "Integración de viaje — vocabulary and narrative structure",
    explanation: `This lesson is primarily vocabulary and communicative integration. All the grammar from Blocks 1–4 works together in travel contexts. There is no new grammar structure — instead, you practise deploying everything you've learned in real situations.

HOTEL — key phrases using condicional for courtesy:
  Querría reservar una habitación doble para dos noches.
  ¿Tendrían algo disponible para el [fecha]?
  ¿Cuánto sería por noche?
  ¿Sería posible cambiarme de habitación?
  ¿Podría darme más toallas / la contraseña del wifi?

TRANSPORT — vocabulary varies by country:
  autobús (España) = camión (México) = bus / colectivo (Colombia, Argentina)
  el boleto / billete = ticket
  el andén = platform / bay
  la terminal de buses = bus terminal
  ida y vuelta / ida sola = return / one-way
  la demora / el retraso = delay
  cancelado/a = cancelled

NARRATIVE TEMPLATE for travel problems (combining all past tenses):
  1. IMPERFECTO → scene: Era viernes por la tarde. Había mucha gente en la terminal.
  2. INDEFINIDO → what happened: Mi bus estaba cancelado. Me acerqué a la ventanilla.
  3. CONDICIONAL → reported speech / what they said: Me dijeron que lo mandarían...
  4. EMOTIONAL REACTION: Al principio me desesperé un poco.
  5. RESOLUTION: Al final, por suerte...

This template is the most useful production structure in A2 — practise it until it's automatic.

IN THE PHARMACY — key survival phrases:
  Busco algo para el dolor de cabeza / la tos / la fiebre.
  ¿Cuántas veces al día se toma?
  ¿Tiene efectos secundarios?
  Hay que tomarlo con comida / en ayunas.`,
    rules: [
      {
        condition: "Polite request in a hotel or service context",
        result: "Always use condicional (querría, podría, sería posible, habría) — not present tense",
        examples: [
          { native: "¿Podría llamarme un taxi para las ocho?", translation: "Could you call me a taxi for eight?" },
          { native: "Quisiera pagar la cuenta, por favor.", translation: "I'd like to pay the bill, please." },
        ],
      },
      {
        condition: "Narrating a travel problem",
        result: "Imperfecto (scene) → Indefinido (events) → Condicional in reported speech → Resolution",
        examples: [
          { native: "Era un viernes y había mucha gente en el aeropuerto. De repente vi que mi vuelo aparecía como 'cancelado'. Me acerqué al mostrador.", translation: "It was a Friday and there were lots of people at the airport. Suddenly I saw that my flight appeared as 'cancelled'. I went up to the counter." },
        ],
      },
    ],
    notes: [
      {
        type: "culture",
        content: "Long-distance buses in Latin American countries like Argentina, Chile, Colombia, and Peru can be surprisingly comfortable in premium classes (bus cama, semi-cama) — reclining seats, meals, films. For journeys of 8–15 hours, many locals prefer bus to flying.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "Disculpe, ¿este es el bus para Cartagena? Tenía una conexión a las siete de la tarde.", translation: "Excuse me, is this the bus to Cartagena? I had a connection at seven this evening." },
          { native: "Tiene una demora de dos horas, señora. Hay un bus ejecutivo que sale en cuarenta minutos y llegaría antes. Costaría un poco más.", translation: "It's delayed two hours, ma'am. There's an express bus leaving in forty minutes that would arrive sooner. It would cost a little more." },
        ],
      },
      { native: "Al final llegué a Cusco con cinco horas de retraso, pero el cielo estaba despejado y resultó ser el viaje más memorable de mi vida.", translation: "In the end I arrived in Cusco five hours late, but the sky was clear and it turned out to be the most memorable trip of my life." },
    ],
    inlineVocab: [
      { word: "el boleto / billete", translation: "ticket" },
      { word: "la demora / retraso", translation: "delay" },
      { word: "cancelado/a", translation: "cancelled" },
      { word: "el andén", translation: "platform / bay" },
      { word: "aprovechar", translation: "to make the most of" },
      { word: "por suerte", translation: "fortunately" },
      { word: "de todas formas", translation: "anyway / regardless" },
      { word: "resultar + adjetivo", translation: "to turn out to be" },
    ],
  },

  {
    id: "es-g-a2-16",
    level: "A2",
    title: "Sentimientos y opiniones — ponerse, sentirse, parecerme, creer que",
    explanation: `At A1 you could say me gusta and no me gusta. At A2 you need nuanced feelings, opinions, and the language to agree and disagree politely.

PONERSE + ADJECTIVE — change of emotional state (transition):
  Expresses becoming or getting (a new emotional state).
  Me puse nervioso cuando vi los resultados.   (I got nervous)
  Se pone contenta cada vez que la llaman.     (She gets happy)
  Nos pusimos muy tristes al enterarnos.
  Common: ponerse nervioso/a, contento/a, triste, furioso/a, rojo/a (to blush), malo/a (sick)

SENTIRSE + ADJECTIVE — ongoing emotional state:
  Me siento muy bien hoy.
  Se sentía sola en la ciudad nueva.
  Contrast: Me puse nervioso (the transition) vs. Me sentía nervioso (the ongoing state)

PARECERME — works like gustar:
  OI pronoun + parece (sg.) / parecen (pl.) + noun/adjective
  Me parece bien / mal / raro / injusto / increíble.
  ¿Qué te parece si quedamos mañana?   (What do you think about meeting tomorrow?)
  Me parece que + clause: Me parece que tienes razón.

EXPRESSING OPINIONS (A2 verbs of opinion + que + INDICATIVE — NOT subjunctive at this level):
  Creo que es una buena idea.
  Pienso que el problema es más complejo.
  Encuentro que la situación es injusta.
  Me parece que no tienes razón.
  En mi opinión...   A mi modo de ver...   Para mí...
  Según yo...  (very common in LatAm informal speech — 'in my opinion')

AGREEING AND DISAGREEING:
  Full agreement: Tienes (toda la) razón. / Estoy de acuerdo. / Exactamente. / Comparto tu punto de vista.
  Partial agreement: Sí, pero... / En parte sí, pero... / Entiendo lo que dices, aunque...
  Polite disagreement: No estoy del todo de acuerdo. / Lo veo de otra manera. / No creo que sea así.
  Stronger disagreement: Al contrario, yo creo que... / Pues yo pienso lo contrario.`,
    rules: [
      {
        condition: "Expressing a change into an emotional state",
        result: "Ponerse + adjective — use for the transition / moment of becoming",
        examples: [
          { native: "Me puse muy nerviosa cuando me llamaron para la entrevista.", translation: "I got very nervous when they called me for the interview." },
          { native: "Se puso furioso sin razón aparente.", translation: "He got furious for no apparent reason." },
        ],
      },
      {
        condition: "Opinion verb + subordinate clause",
        result: "At A2: creer/pensar/parecer + que + INDICATIVE (subjunctive is B1 territory)",
        examples: [
          { native: "Creo que es la mejor opción.", translation: "I think it's the best option." },
          { native: "Me parece que deberías pensarlo más.", translation: "I think you should think about it more." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "'Según yo' is omnipresent in informal speech across Mexico, Colombia, and other LatAm countries — equivalent to 'in my opinion / I think'. Some speakers consider it non-standard, but understanding it is essential.",
      },
      {
        type: "warning",
        content: "At A2, after creer/pensar/parecer use INDICATIVE, not subjunctive. 'Creo que es bueno' ✓ (not 'Creo que sea bueno'). Subjunctive after negated opinions is B1.",
      },
    ],
    examples: [
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Leíste lo del nuevo proyecto? Me parece una decisión horrible. Creo que no se puede sacrificar la cultura local por el negocio.", translation: "Did you read about the new project? I think it's a horrible decision. I believe you can't sacrifice local culture for business." },
          { native: "Entiendo lo que dices. En parte estoy de acuerdo — me puse muy triste cuando lo leí. Pero, por otro lado, me da la sensación de que también hay que pensar en el empleo.", translation: "I understand what you're saying. I partly agree — I felt very sad when I read it. But on the other hand, I get the feeling you also have to think about employment." },
        ],
      },
      { native: "Me siento mucho mejor después de hablar contigo. Gracias.", translation: "I feel much better after talking with you. Thank you." },
    ],
    inlineVocab: [
      { word: "aliviado/a", translation: "relieved" },
      { word: "orgulloso/a", translation: "proud" },
      { word: "decepcionado/a", translation: "disappointed" },
      { word: "frustrado/a", translation: "frustrated" },
      { word: "agradecido/a", translation: "grateful" },
      { word: "ilusionado/a", translation: "excited / looking forward to" },
      { word: "harto/a (de)", translation: "fed up (with)" },
      { word: "tener razón", translation: "to be right" },
    ],
  },

  {
    id: "es-g-a2-17",
    level: "A2",
    title: "Conectores avanzados y fluidez — discourse markers",
    explanation: `Connectors and discourse markers are the difference between sounding like a learner reading from a list and sounding like someone telling a story. This lesson gives you the connective tissue for natural A2 Spanish.

CONTRAST AND CONCESSION:
  pero          — but (neutral)
  sin embargo   — however (slightly formal)
  aunque        — although / even though (+ indicative at A2)
  a pesar de    — despite / in spite of (+ noun or que + clause)
  de todas formas — anyway / regardless (spoken)
  aun así       — even so
  eso sí        — that said / but (colloquial)

ADDITION AND EMPHASIS:
  además         — moreover / besides
  encima         — on top of that (negative emphasis)
  incluso        — even
  sobre todo     — above all / especially
  por cierto     — by the way
  de hecho       — in fact

CAUSE AND CONSEQUENCE:
  porque        — because
  por eso       — that's why / so
  así que       — so / and so (spoken-standard)
  gracias a     — thanks to
  a causa de    — because of
  por culpa de  — because of (implies blame)
  entonces      — so / then (spoken)

ILLUSTRATION AND EXAMPLE:
  por ejemplo   — for example
  como          — like / such as
  es decir      — that is to say (standard)
  o sea         — I mean / in other words (colloquial — very frequent)

HEDGING (sounding thoughtful, not abrupt):
  en cierta medida    — to a certain extent
  de alguna manera    — in a way
  digamos             — let's say / sort of
  más o menos         — more or less

SPOKEN DISCOURSE MARKERS (muletillas):
  o sea     — reformulation, clarification ('I mean')
  pues      — turn opener, filler ('well...' / 'so...')
  bueno     — opener, mild concession ('well...')
  a ver     — 'let me see' / 'here's the thing'
  este...   — hesitation filler (Mexico — equiv. to 'um')
  ¿sabes?   — check comprehension ('you know?')
  la verdad es que  — honesty marker ('truth is...')
  es que...         — explanation / justification ('the thing is...')
  total     — informal summary ('anyway' / 'in short')
  nada      — informal closure ('anyway' / 'so yeah')

FIVE-STEP STORY STRUCTURE (use with all past content):
  1. Set scene (imperfecto): Era... / Estaba... / Había...
  2. Introduce disruption: De repente... / Fue entonces cuando...
  3. Narrate events (indefinido): Primero... / Luego... / Al poco tiempo...
  4. Express reaction: Me puse... / Lo que más me sorprendió fue...
  5. Close: Al final... / En definitiva... / Lo que aprendí fue...`,
    rules: [
      {
        condition: "Contrast with a surprising or contrary fact",
        result: "Use sin embargo (slightly formal) or de todas formas / aun así (spoken)",
        examples: [
          { native: "La ciudad es cara. Sin embargo, vale la pena vivir aquí.", translation: "The city is expensive. However, it's worth living here." },
          { native: "Llegué muy tarde. Aun así, me esperaron.", translation: "I arrived very late. Even so, they waited for me." },
        ],
      },
      {
        condition: "Informal clarification or reformulation in speech",
        result: "Use o sea — very high frequency in Latin American speech",
        examples: [
          { native: "Llegué tarde, o sea, con más de una hora de retraso.", translation: "I arrived late — I mean, more than an hour late." },
          { native: "No sé cómo explicarlo, o sea, es una sensación difícil de describir.", translation: "I don't know how to explain it — it's like a feeling that's hard to describe." },
        ],
      },
    ],
    notes: [
      {
        type: "culture",
        content: "Native Spanish speakers value communicating naturally over speaking 'correctly'. Using muletillas like 'o sea', 'pues', 'bueno' makes you sound connected to the language — more than any grammatical perfection.",
      },
    ],
    examples: [
      { native: "El viaje fue difícil. De todas formas, lo conseguimos y encima conocimos a gente increíble.", translation: "The trip was hard. Anyway, we managed it and on top of that we met incredible people." },
      { native: "Pues, la verdad es que me pareció un poco raro. Es que nadie me avisó antes.", translation: "Well, truth is I found it a bit strange. The thing is nobody warned me beforehand." },
      { native: "A ver, te explico lo que pasó. Total, que llegué tarde y el concierto ya había empezado.", translation: "Ok, let me explain what happened. So anyway, I arrived late and the concert had already started." },
    ],
    inlineVocab: [
      { word: "sin embargo", translation: "however / nevertheless" },
      { word: "además", translation: "moreover / besides" },
      { word: "así que", translation: "so / and so" },
      { word: "o sea", translation: "I mean / in other words" },
      { word: "por cierto", translation: "by the way" },
      { word: "de hecho", translation: "in fact" },
      { word: "lo curioso es que", translation: "the curious thing is that" },
      { word: "menos mal", translation: "thank goodness" },
    ],
  },
]
