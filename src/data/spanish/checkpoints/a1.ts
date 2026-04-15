import type { Checkpoint } from '../../../types'

export const a1Checkpoints: Checkpoint[] = [
  // ── es-cp-a1-1 : Block 1 — Introduce yourself (after U4) ─────────────────
  {
    id: 'es-cp-a1-1',
    level: 'A1',
    block: 1,
    type: 'speaking',
    title: 'Introduce yourself',
    scenario:
      "You're at a language exchange event in Buenos Aires. A native speaker sits down next to you and says:\n\n\"Hola, ¿qué tal? Cuéntame algo de ti.\"\n\nRespond. Introduce yourself fully — who you are, where you're from, what you do, and something about your life.",
    speakingPrompts: [
      "Greet them and respond to ¿qué tal? (Hola, muy bien gracias... / ¡Buenas tardes!...)",
      "Say your name (Me llamo... / Soy...)",
      "Say where you're from or your nationality (Soy de... / Soy inglés/inglesa...)",
      "Give your age (Tengo ... años.)",
      "Say what you do — job, studies, or both (Soy... / Trabajo en... / Estudio...)",
      "Use at least one -ar verb to describe something you do regularly (Trabajo, estudio, hablo, practico...)",
      "Use tener to say something you have (Tengo un apartamento... / Tengo dos hermanos...)",
      "End with a natural farewell or closing (¡Encantado/a de conocerte! / ¡Hasta luego!)",
    ],
  },

  // ── es-cp-a1-2 : Block 2 — Talk about your world (after U9) ──────────────
  {
    id: 'es-cp-a1-2',
    level: 'A1',
    block: 2,
    type: 'speaking',
    title: 'Talk about your world',
    scenario:
      "You're on a video call with a Spanish-speaking pen pal — your first proper conversation after exchanging a few messages. They say:\n\n\"¡Qué bueno conocerte por fin! Cuéntame un poco sobre tu vida — tu familia, qué te gusta, cómo es tu día a día.\"\n\nRespond. Cover family, likes and dislikes, where you live, and where you're going. Finish by asking them something back.",
    speakingPrompts: [
      "Describe your family using possessives (Mi hermano mayor se llama... / Mis padres son...)",
      "Use at least one adjective to describe a family member with correct agreement (Es muy trabajadora / Son muy simpáticos...)",
      "Express 2 or more things you like using me gusta / me gustan (Me gusta la música... / Me gustan los viajes...)",
      "Express at least 1 dislike (No me gusta nada... / Odio...)",
      "Use an -er or -ir verb (Como mucho en casa. / Vivo en el centro.)",
      "Say where you are or where you live using estar or vivir (Estoy en Londres. / Vivo cerca del trabajo.)",
      "Say where you're going using ir + a — with al contraction where needed (Voy al parque este fin de semana. / Vamos a un concierto.)",
      "Ask your pen pal at least one question back (¿Y tú? ¿Tienes familia grande? ¿Qué te gusta hacer?)",
    ],
  },

  // ── es-cp-a1-3 : Block 3 — Describe your day (after U14) ─────────────────
  {
    id: 'es-cp-a1-3',
    level: 'A1',
    block: 3,
    type: 'speaking',
    title: 'Describe your day',
    scenario:
      "You haven't spoken to a Spanish-speaking friend in a few weeks. They've sent you a voice message asking how you've been and what's new. Record a voice message back.\n\nTell them the date, describe your morning routine, say how you're feeling, mention something you don't do, describe someone in your life, and ask them something back.",
    speakingPrompts: [
      "Mention today's date or day, and roughly what time it is (Hoy es miércoles, el trece de abril... Son las seis y media...)",
      "Use at least 2 reflexive verbs to describe your routine (Me levanté a las siete... Me duché rápido...)",
      "Use a time adverb or connector (hoy, ayer, mañana, siempre, nunca, primero, luego...)",
      "Use at least one negative beyond no (Nunca como antes de las dos... / No hice nada esta semana...)",
      "Describe how you're feeling using estar + adjective (Estoy bastante cansada y un poco estresada.)",
      "Describe someone in your life using ser + adjective with correct agreement (Mi jefe es muy serio pero justo. / Mi amiga es muy divertida.)",
      "Ask your friend at least one question using a question word (¿Cómo estás? / ¿Qué tal el trabajo nuevo?)",
    ],
  },

  // ── es-cp-a1-4 : Block 4 — Navigate a real situation (after U19) ──────────
  {
    id: 'es-cp-a1-4',
    level: 'A1',
    block: 4,
    type: 'speaking',
    title: 'Navigate a real situation',
    scenario:
      "You're spending a Saturday in a Latin American city of your choice. Narrate or roleplay three mini-situations:\n\n1. Lunch at a local restaurant — order a full meal, mention a food preference\n2. Finding the metro — ask someone on the street for directions\n3. Plans with a friend — call or message them to arrange the evening; say what you can do, have to do, and should do",
    speakingPrompts: [
      "Order food using quiero / quería + items, and ask for the bill (Quiero el pollo con arroz... ¿Me trae una ensalada? La cuenta, por favor.)",
      "Mention a food preference or restriction (No como carne. / Prefiero algo sin gluten.)",
      "Use hay to ask about something nearby (¿Hay una estación de metro por aquí?)",
      "Use directions vocabulary with a preposition of place (Siga recto, gire a la izquierda... está enfrente del supermercado / al lado del banco.)",
      "Use all three modal verbs — poder, tener que, deber (Puedo estar listo a las ocho... Tengo que volver a casa primero... Creo que debemos salir antes.)",
      "Use at least one stem-changing verb correctly (quiero, prefiero, puedo, pido, duermo...)",
      "Use at least one yo-go verb naturally (hago, salgo, pongo, traigo, conozco, veo, doy...)",
      "Use connectors to link the situations (primero, después, luego, entonces, pero, porque...)",
    ],
  },

  // ── es-cp-a1-5 : Block 5 — A1 exit checkpoint (after U26) ────────────────
  {
    id: 'es-cp-a1-5',
    level: 'A1',
    block: 5,
    type: 'speaking',
    title: 'The A1 exit checkpoint',
    scenario:
      "You're recording a 2–3 minute episode for a Spanish-language podcast called \"Un minuto de español\". Your episode is called \"Mi vida en español\".\n\nCover all four parts — in any order, as naturally as possible:\n1. Who you are: name, origin, age, what you do\n2. Your daily life: routine, things you like, what you have to do\n3. A place you know: somewhere that matters to you — describe it with hay, ser, estar, and the weather there\n4. Your plans: what you're going to do in the coming days or weeks",
    speakingPrompts: [
      "Introduce yourself fully — name, origin, age, job/studies (Me llamo..., tengo X años, soy de..., trabajo como...)",
      "Describe your routine using reflexive verbs and frequency adverbs (Me levanto a las siete... normalmente desayuno... a veces hago...)",
      "Express what you like and have to do (Me encanta... / Tengo que... / Debo...)",
      "Use saber to say something you know how to do (Sé hablar inglés bastante bien. / Sé cocinar.)",
      "Use conocer to say somewhere or someone you know (Conozco bien el centro de la ciudad. / Conozco a mucha gente de allí.)",
      "Use a demonstrative to point at or highlight something (Este barrio es tranquilo. / Ese mercado es mi favorito. / Aquel parque...)",
      "Describe the weather in a place (En verano hace mucho calor... En invierno está nublado y llueve bastante.)",
      "Use ir a + infinitive for at least 3 future plans with different time expressions (Este fin de semana voy a... La semana que viene voy a... El mes que viene voy a...)",
      "Use at least 3 different connectors to sound natural and flowing (también, pero, porque, además, entonces, sin embargo...)",
      "Sound connected — not a list of sentences, but a real monologue with ideas that build on each other",
    ],
  },
]
