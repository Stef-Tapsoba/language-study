import type { Checkpoint } from "../../../types"

export const b1Checkpoints: Checkpoint[] = [
  // ── es-cp-b1-1 : Block 1 — Una historia verdadera (after U3) ─────────────
  {
    id: "es-cp-b1-1",
    level: "B1",
    block: 1,
    type: "speaking",
    title: "Una historia verdadera",
    scenario:
      "Tell me a story — something that really happened to you, or one you invent. The important thing is that it has a 'before' (something that had already happened — pluscuamperfecto), a 'scene' (how things were — imperfecto), and 'events' (what changed — indefinido). Take 30 seconds to prepare, then speak for 90 seconds to 2 minutes.",
    speakingPrompts: [
      "Used at least 2 pluscuamperfecto forms for what had already happened before the story",
      "Used at least 3 imperfecto forms for the scene, state, description or background habit",
      "Used at least 4 indefinido forms for the plot events that moved the story forward",
      "Used at least one irregular participio (hecho, visto, dicho, puesto, vuelto…)",
      "Used at least one time connector to signal the sequence (de repente, finalmente, en ese momento, así que…)",
      "Your story has a clear 'before' layer, a 'scene / atmosphere' layer, and a sequence of events",
      "Your story is understandable to a Spanish speaker with no prior context",
    ],
  },

  // ── es-cp-b1-2 : Block 2 — Mi opinión sobre algo importante (after U7) ───
  {
    id: "es-cp-b1-2",
    level: "B1",
    block: 2,
    type: "speaking",
    title: "Mi opinión sobre algo importante",
    scenario:
      "Choose one topic and give your opinion on it for 2 minutes. State a position, justify it, acknowledge the other side, and express what you want or fear.\n\n1. Remote work — advantages and disadvantages\n2. Social media and young people\n3. The importance of learning languages today\n\nTake 30 seconds to prepare, then speak.",
    speakingPrompts: [
      "Expressed a clear opinion (creo que, estoy convencido/a de que, en mi opinión…)",
      "Used at least 2 subjuntivo forms with volition / necessity triggers (quiero que, es necesario que, prefiero que…)",
      "Used at least 1 subjuntivo form with an emotion verb (me alegra que, me preocupa que…)",
      "Used at least 1 doubt or possibility expression with subjuntivo (dudo que, es posible que…)",
      "Used at least 1 subjuntivo conjunction (para que, aunque, antes de que…)",
      "Made a concession or acknowledged complexity (aunque, si bien, es verdad que… pero…)",
      "Used indicative correctly after certainty verbs (sé que, creo que [affirmative], es seguro que…)",
      "Your argument is coherent — a Spanish speaker could follow your reasoning",
    ],
  },

  // ── es-cp-b1-3 : Block 3 — Una decisión hipotética (after U10) ───────────
  {
    id: "es-cp-b1-3",
    level: "B1",
    block: 3,
    type: "speaking",
    title: "Una decisión hipotética",
    scenario:
      "Choose one question and respond for 2 minutes. Develop the idea, add conditions, explore consequences and reflect.\n\n1. If you could change something about your past, what would you change and why?\n2. If you had had perfect conditions in your life, what would you have done differently?\n3. If you had to choose between staying in your city or moving abroad, what would you do? And if you had had that option earlier?\n\nTake 30 seconds to prepare, then speak.",
    speakingPrompts: [
      "Used at least 2 type-2 si clauses (si + imperfecto subjuntivo + condicional)",
      "Used at least 2 type-3 si clauses (si + pluscuamperfecto subjuntivo + condicional compuesto)",
      "Used debería haber / podría haber or a similar standalone condicional compuesto at least once",
      "Used cuyo/a at least once in a relative clause",
      "Used lo que or lo cual at least once to frame an idea",
      "Used at least one double pronoun combination naturally",
      "Your response is organised — it has a position, development and reflection",
      "A Spanish speaker could follow your reasoning without difficulty",
    ],
  },

  // ── es-cp-b1-4 : Block 4 — Explícame una situación compleja (after U13) ──
  {
    id: "es-cp-b1-4",
    level: "B1",
    block: 4,
    type: "speaking",
    title: "Explícame una situación compleja",
    scenario:
      "Explain a complex situation you know well — personal (a misunderstanding, a difficult decision, a resolved conflict) or general (a topic you have read about, a current issue with your own opinion). Describe what happened, why it happened that way, what the people involved said, and how you feel about it. Speak for 2 minutes.",
    speakingPrompts: [
      "Reported what someone said or asked using estilo indirecto (dijo que, me preguntó si / qué…)",
      "Used at least one correct tense backshift in estilo indirecto",
      "Used at least one B1 perífrasis verbal (llevaba…, dejó de…, se puso a…, volvió a…, acabó por…)",
      "Used at least one cause connector beyond porque (ya que, dado que, puesto que…)",
      "Used at least one consequence connector (por eso, por lo tanto, como consecuencia…)",
      "Used at least one concession connector (sin embargo, a pesar de que, si bien…)",
      "Used at least one opposition connector (mientras que, en cambio, al contrario…)",
      "Your explanation is logical — a listener could follow it without prior knowledge",
    ],
  },

  // ── es-cp-b1-5 : Block 5 — Debate exprés (after U16) ────────────────────
  {
    id: "es-cp-b1-5",
    level: "B1",
    block: 5,
    type: "speaking",
    title: "Debate exprés",
    scenario:
      "This checkpoint has two phases.\n\nPhase 1 (90 seconds): Present your position on one of the topics below.\nPhase 2 (60–90 seconds): Respond to the counter-argument shown after Phase 1.\n\nTopics (choose one):\n1. 'Young people today work less than previous generations.' — For or against?\n2. 'It is better to live in a city than in the countryside.' — For or against?\n3. 'Social media has destroyed real communication.' — For or against?\n\nAfter Phase 1 you will see: 'Some agree with you, but others would say [opposite position]. What do you think?'",
    speakingPrompts: [
      "Phase 1: Expressed a clear, qualified position (me parece que, estoy convencido/a de que…)",
      "Phase 1: Used at least one cause connector (ya que, dado que, puesto que…)",
      "Phase 1: Used at least one consequence connector (por eso, por lo tanto…)",
      "Phase 1: Used por un lado… por otro or a similar structure to organise the argument",
      "Phase 2: Acknowledged the counter-argument (es cierto que, hay que reconocer que…)",
      "Phase 2: Maintained or modified your position with reasoning",
      "Phase 2: Used at least one concession or opposition connector (sin embargo, en cambio, a pesar de eso…)",
      "Phase 2: Used at least 1 B1 grammatical structure (subjuntivo, si conditional, condicional compuesto or perífrasis verbal)",
    ],
  },

  // ── es-cp-b1-6 : B1 exit capstone (after U17) ────────────────────────────
  {
    id: "es-cp-b1-6",
    level: "B1",
    block: 6,
    type: "speaking",
    title: "Mi historia, mi punto de vista — B1 exit",
    scenario:
      "This capstone has two parts — 5 to 7 minutes in total.\n\nPart A — Extended personal narrative (3 minutes): Tell me something that really marked you — an experience, an encounter, a decision. Explain the context, what happened, how you felt, and what you think now. The story should have a clear timeline (past + backstory), include what you felt and thought, what happened as a result, and at least one hypothetical reflection (si hubiera sabido…, debería haber…). Take one minute to prepare.\n\nPart B — Personal reflection (2–3 minutes): After Part A, reflect on your experience with the language. What do you like most about Spanish? What was hardest to learn? Where do you want to take the language from here?",
    speakingPrompts: [
      "Part A: Used pluscuamperfecto for backstory — what had already happened before the main events",
      "Part A: Used indefinido for the plot events and imperfecto for the background and scene",
      "Part A: Used at least one si type-3 or standalone condicional compuesto (si hubiera…, debería haber…)",
      "Part A: Used subjuntivo naturally at least once (aunque fuera, me alegra que, es posible que…)",
      "Part A: Used at least one advanced connector (de repente, al contrario, en definitiva, así que…)",
      "Part A: Used at least one colloquial or idiomatic expression naturally (la verdad, de verdad, o sea…)",
      "Part B: Expressed opinions and wishes with appropriate subjuntivo (me gustaría que, ojalá…)",
      "Part B: Used lo que or lo cual at least once to frame a reflection",
      "Both parts are organised, flowing and coherent — not a list of sentences",
      "A native speaker could follow both parts without effort",
    ],
  },
]
