import type { Checkpoint } from "../../../types"

export const a2Checkpoints: Checkpoint[] = [
  // ── es-cp-a2-1 : Block 1 — Narrate a past experience (after U3) ──────────
  {
    id: "es-cp-a2-1",
    level: "A2",
    block: 1,
    type: "speaking",
    title: "Cuéntame una experiencia",
    scenario:
      "You've just arrived at a language exchange event in Bogotá. A Colombian speaker sits next to you and says:\n\n\"¡Hola! Cuéntame una experiencia memorable — algo que te haya pasado. Puede ser divertida, extraña o emocionante. Describe la situación, qué pasó y cómo te sentiste.\"\n\nTell your story. Use both past tenses naturally — imperfecto for the background and scene, indefinido for the events. You have 90 seconds to 2 minutes.",
    speakingPrompts: [
      "Set the scene with imperfecto: describe when/where it was and what the background was like (era, estaba, hacía, había...)",
      "Use at least one irregular preterite correctly (fui, hice, tuve, dije, vine, puse, supe, pude...)",
      "Use cuando correctly with an interrupted action: imperfecto (what was happening) + cuando + indefinido (what interrupted it)",
      "Include at least one negative sentence in the past (no pude, no sabía, no había...)",
      "Use at least one narrative connector (de repente, en ese momento, al final, mientras tanto...)",
      "Your story should have a beginning (scene), a middle (events), and a conclusion or reflection",
      "Use both tenses clearly — don't use only one for everything",
    ],
  },

  // ── es-cp-a2-2 : Block 2 — Describe and compare (after U6) ───────────────
  {
    id: "es-cp-a2-2",
    level: "A2",
    block: 2,
    type: "speaking",
    title: "Describe y compara",
    scenario:
      "This checkpoint has two parts:\n\nPart A (speaking — 90 seconds): Describe two places you know well — two cities, neighbourhoods, restaurants, or travel destinations. Compare them. Talk about what you like or no longer like about each one, and use relative clauses to describe them.\n\nPart B (written — 60–80 words): Write a short review of a place you have visited. Recommend it or advise against going. Explain why.",
    speakingPrompts: [
      "Use at least two comparatives correctly (más/menos + adjective + que, or tan... como)",
      "Use at least one superlative with de (el/la más... de...)",
      "Use mejor or peor — NOT 'más bueno' or 'más malo'",
      "Use at least one relative clause with que or donde",
      "Use lo que at least once naturally",
      "Include at least one negation beyond no: ya no / ni siquiera / ningún-ninguna / tampoco",
      "Part B: your written review has a clear recommendation and an argument that supports it",
    ],
  },

  // ── es-cp-a2-3 : Block 3 — Tell it with pronouns (after U9) ─────────────
  {
    id: "es-cp-a2-3",
    level: "A2",
    block: 3,
    type: "speaking",
    title: "Cuéntame con pronombres",
    scenario:
      "This checkpoint has two parts:\n\nPart A (listening comprehension): You will hear a short narrative (~200 words) about a dinner party. Answer 5 comprehension questions using pronouns in your answers.\n\nPart B (speaking — 90 seconds): Talk about a recent social gathering — a dinner, a party, an outing with friends or family. Tell me what happened, who was there, what you said to each other, what you gave or did for each other.",
    speakingPrompts: [
      "Use lo / la / los / las (OD) at least twice in the correct position",
      "Use le or les (OI) at least once in the correct position",
      "Use se lo / se la / se los / se las at least once",
      "Place all pronouns correctly — before the conjugated verb, or attached to infinitive/gerund",
      "Include at least one past tense verb with an irregular or stem-changing form (durmió, pidió, se rieron...)",
      "Your story includes other people — not only about yourself",
      "Avoid repeating nouns where a pronoun is natural",
    ],
  },

  // ── es-cp-a2-4 : Block 4 — Plans, dreams and conditions (after U12) ──────
  {
    id: "es-cp-a2-4",
    level: "A2",
    block: 4,
    type: "speaking",
    title: "Planes, sueños y condiciones",
    scenario:
      "This checkpoint has two parts:\n\nPart A (90 seconds — role play): Call a restaurant to book a table for a special dinner for four people. You need to ask about vegetarian options, whether there's a terrace, and whether you can bring your own cake.\n\nPart B (90 seconds — personal monologue): Talk about your near-future plans and your more distant dreams. Mention something you've just done and something you've been doing for a while.",
    speakingPrompts: [
      "Part A: every request or question uses condicional (¿podría...? / ¿habría...? / querría... / ¿le importaría...?)",
      "Part A: use futuro simple at least once to confirm something or refer to the evening",
      "Part A: use a si clause type 1 correctly — present in the si clause, never future",
      "Part B: use ir a + infinitive at least twice (near-future decided plans)",
      "Part B: use futuro simple at least twice (predictions or more distant plans)",
      "Part B: use condicional for at least one dream or wish (me gustaría / me encantaría / querría)",
      "Part B: use desde hace or hace... que with a present-tense verb",
      "Part B: use acabar de + infinitive at least once",
      "Part B: use cuando + present subjunctive at least once (e.g. cuando llegue, cuando tenga…)",
    ],
  },

  // ── es-cp-a2-5 : Block 5 — Listening checkpoint (after U15) ─────────────
  {
    id: "es-cp-a2-5",
    level: "A2",
    block: 5,
    type: "listening",
    title: "El viaje de Daniela",
    scenario:
      "Listen to Daniela's story about a trip to Peru that went wrong — then went wonderfully right. Read the seven questions BEFORE you listen, so you know what to focus on. Then listen and answer.\n\nThe audio is approximately 250 spoken words and is delivered at natural A2 pace.",
    listeningId: "es-l-a2-4",
    speakingPrompts: [
      "Answer why Daniela had wanted to go to Peru for years",
      "Explain what happened with her flight",
      "Identify how long she had been waiting when she finally boarded",
      "Describe what happened with her luggage",
      "Explain who helped her and what they did",
      "Explain why 'quería' (imperfecto) is used in 'desde hacía años quería hacer ese viaje'",
      "Find a si clause in the audio and identify the tense used in it",
    ],
  },

  // ── es-cp-a2-6 : A2 exit checkpoint (after U16) ──────────────────────────
  {
    id: "es-cp-a2-6",
    level: "A2",
    block: 6,
    type: "speaking",
    title: "Tu español en 5 temas — A2 exit",
    scenario:
      "Congratulations on reaching the A2 exit checkpoint. This is a free, personal monologue of 3 to 4 minutes. Cover the five themes below in any order, as naturally as possible. Speak as if you were telling your life to a Spanish-speaking friend.\n\n1. Who you are and where you come from — your identity, your history, where you've been living and for how long\n2. A memorable experience from the past — something that stayed with you\n3. Something you like and something you no longer like as much — compare, give your opinion\n4. Your life right now — what you've been doing, what you've just started or finished\n5. Your plans and dreams — what you'll do, what you'd love to do in an ideal world",
    speakingPrompts: [
      "Use the imperfecto for background and description in your past story",
      "Use the indefinido for completed past events — including at least one irregular verb",
      "Use at least one OD pronoun (lo/la/los/las) naturally, without being forced",
      "Use at least one comparative or superlative",
      "Use at least one relative clause (que / donde / lo que)",
      "Use the futuro simple at least twice for plans or predictions",
      "Use the condicional at least once for a dream or wish",
      "Use at least three different connectors (sin embargo, aunque, además, así que, por eso, de todas formas...)",
      "Use at least one muletilla or discourse marker naturally (pues, o sea, la verdad es que, bueno, total...)",
      "Sound connected — this is a real monologue, not a list of sentences",
    ],
  },
]
