import type { Checkpoint } from "../../../types"

// French B1 checkpoints — 6 checkpoints across 5 blocks (redesign 2026-04-27)

export const b1Checkpoints: Checkpoint[] = [

    // ── fr-cp-b1-1 : Block 1 — Une histoire vraie (after U3) ─────────────────
    {
        id: "fr-cp-b1-1",
        level: "B1",
        block: 1,
        type: "speaking",
        title: "Une histoire vraie",
        scenario:
            "Raconte-moi une histoire — quelque chose qui t'est vraiment arrivé, ou une histoire que tu inventes. L'important, c'est d'avoir un 'avant' (plus-que-parfait), un 'décor' (imparfait) et des 'événements' (passé composé). Prends 30 secondes pour préparer, puis parle pendant 90 secondes à 2 minutes.\n\n(Tell me a story — something that really happened to you, or one you invent. What matters is having a 'before' layer, a 'scene/background' layer, and a sequence of events. Prepare 30 seconds, then speak for 90 seconds to 2 minutes.)",
        speakingPrompts: [
            "Use at least 2 plus-que-parfait forms (what had already happened before the story)",
            "Use at least 3 imparfait forms (scene, state, description, or habit)",
            "Use at least 4 passé composé forms (plot events that moved the story forward)",
            "Use at least one irregular past participle (fait, vu, pris, dit, écrit, bu, eu...)",
            "Use at least one temporal connector (soudain, finalement, auparavant, à ce moment-là, du coup...)",
            "Your story has a clear 'before' layer, a 'scene/atmosphere' layer, and a sequence of events",
            "Your story is understandable to a French speaker without prior context",
        ],
    },

    // ── fr-cp-b1-2 : Block 2 — Mon avis sur une question importante (after U7) ─
    {
        id: "fr-cp-b1-2",
        level: "B1",
        block: 2,
        type: "speaking",
        title: "Mon avis sur une question importante",
        scenario:
            "Donne ton opinion sur un des sujets suivants : (1) le télétravail, (2) les réseaux sociaux et les jeunes, ou (3) l'importance des langues étrangères. Qu'est-ce que tu penses ? Comment tu te sens ? Qu'est-ce que tu voudrais changer ? Qu'est-ce que tu crains ? Prends 30 secondes pour préparer.\n\n(Give your opinion on one of the following: (1) working from home, (2) social media and young people, or (3) the importance of foreign languages. State your position, justify it, acknowledge the other side, and express what you want or hope for.)",
        speakingPrompts: [
            "State a clear opinion (je pense que, je suis convaincu(e) que, selon moi...)",
            "Use at least 2 subjunctive forms with volition/necessity triggers (je veux que, il faut que...)",
            "Use at least 1 subjunctive form with an emotion verb (je suis content(e) que, j'ai peur que...)",
            "Use at least 1 doubt or possibility expression with subjunctive (je doute que, il est possible que...)",
            "Use at least 1 subjunctive conjunction (pour que, bien que, avant que...)",
            "Make a concession or acknowledge complexity (bien que, même si, certes... mais)",
            "Use indicative correctly after certainty verbs (je sais que, il est sûr que, je pense que + affirmative)",
            "Your argument is coherent and a French speaker can follow your reasoning",
        ],
    },

    // ── fr-cp-b1-3 : Block 3 — Une décision hypothétique (after U10) ──────────
    {
        id: "fr-cp-b1-3",
        level: "B1",
        block: 3,
        type: "speaking",
        title: "Une décision hypothétique",
        scenario:
            "Réponds à une des questions suivantes : (1) Si tu pouvais changer quelque chose dans ton passé, qu'est-ce que tu changerais ? (2) Si tu avais eu des conditions parfaites dans ta vie, qu'est-ce que tu aurais fait différemment ? (3) Si tu devais choisir entre rester dans ta ville ou partir à l'étranger, qu'est-ce que tu ferais ?\n\n(Answer one of: (1) If you could change something in your past, what would you change? (2) If you'd had perfect conditions, what would you have done differently? (3) If you had to choose between staying or going abroad, what would you do?)",
        speakingPrompts: [
            "Use at least 2 type 2 si clauses (si + imparfait + conditionnel présent)",
            "Use at least 2 type 3 si clauses (si + plus-que-parfait + conditionnel passé)",
            "Use j'aurais dû / j'aurais pu or similar at least once",
            "Use dont at least once in a relative clause",
            "Use ce qui, ce que, or ce dont at least once to frame an idea",
            "Use at least one double-pronoun combination naturally",
            "Your response is organised — it has a position, development, and reflection",
        ],
    },

    // ── fr-cp-b1-4 : Block 4 — Explique-moi une situation complexe (after U13) ─
    {
        id: "fr-cp-b1-4",
        level: "B1",
        block: 4,
        type: "speaking",
        title: "Explique-moi une situation complexe",
        scenario:
            "Explique-moi une situation complexe — quelque chose que tu as vécu ou que tu connais bien. Décris ce qui s'est passé, pourquoi ça s'est passé comme ça, ce que les gens ont dit, et comment tu te sens par rapport à ça.\n\n(Explain a complex situation — something you've experienced or know well. Describe what happened, why it happened that way, what people said, and how you feel about it.)",
        speakingPrompts: [
            "Report what someone said or asked using indirect speech (il a dit que, elle m'a demandé si/ce que...)",
            "Use at least one correct tense backshift in indirect speech",
            "Use the gérondif at least once (en faisant, en travaillant...)",
            "Use at least one cause connector beyond parce que (puisque, étant donné que, vu que...)",
            "Use at least one consequence connector (c'est pourquoi, si bien que, du coup...)",
            "Use at least one concession connector (pourtant, cependant, quand même...)",
            "Use at least one opposition connector (alors que, en revanche, par contre...)",
            "Your explanation is logical and a listener could follow it without prior knowledge",
        ],
    },

    // ── fr-cp-b1-5 : Block 5 — Débat express (after U16) ─────────────────────
    {
        id: "fr-cp-b1-5",
        level: "B1",
        block: 5,
        type: "speaking",
        title: "Débat express",
        scenario:
            "Choisis un des sujets suivants : (1) « Les jeunes d'aujourd'hui travaillent moins que les générations précédentes. » (2) « Il vaut mieux vivre en ville qu'à la campagne. » (3) « Les réseaux sociaux ont détruit la vraie communication. »\n\nPhase 1 (90 sec): Présente ta position. Phase 2 (60 sec): Réponds à la contre-argument suivant : « Certains sont d'accord avec toi, mais d'autres diraient que [position contraire]. Qu'est-ce que tu en penses ? »\n\n(Choose a topic, present your position for 90 seconds, then respond to the counter-argument for 60 seconds.)",
        speakingPrompts: [
            "Phase 1: State a clear position with appropriate hedging (il me semble que, je suis convaincu(e) que...)",
            "Phase 1: Use at least one cause connector (puisque, étant donné que...)",
            "Phase 1: Use at least one consequence connector (c'est pourquoi, si bien que...)",
            "Phase 1: Use d'une part... d'autre part or similar to structure your argument",
            "Phase 2: Acknowledge the counter-argument (certes, il est vrai que, je reconnais que...)",
            "Phase 2: Maintain or modify your position with reasoning",
            "Phase 2: Use at least one concession or opposition connector (pourtant, en revanche, néanmoins...)",
            "Phase 2: Use at least 1 B1 grammar structure (subjunctive, si clause, conditionnel passé, or gérondif)",
        ],
    },

    // ── fr-cp-b1-6 : Exit capstone (after U17) ───────────────────────────────
    {
        id: "fr-cp-b1-6",
        level: "B1",
        block: 5,
        type: "speaking",
        title: "Mon histoire, mon point de vue — capstone de sortie B1",
        scenario:
            "Deux parties.\n\nPartie A (3 min): Raconte-moi quelque chose qui t'a vraiment marqué(e) — une expérience, une rencontre, une décision. Explique le contexte, ce qui s'est passé, comment tu t'es senti(e), et ce que tu en penses maintenant. Prends 1 minute pour préparer.\n\nPartie B (2-3 min): Parle de ton expérience avec le français. Qu'est-ce que tu aimes dans cette langue ? Qu'est-ce qui a été difficile ? Et qu'est-ce que tu voudrais faire avec ton français à partir de maintenant ?\n\n(Part A: Tell a meaningful personal story. Part B: Reflect on your French language journey.)",
        speakingPrompts: [
            "Part A: Use at least 2 plus-que-parfait forms (backstory / prior events)",
            "Part A: Use passé composé and imparfait correctly in the same narrative",
            "Part A: Include at least one hypothetical reflection (si j'avais su..., j'aurais dû...)",
            "Part A: Use dont or ce qui/ce que/ce dont at least once",
            "Part A: Use at least 2 B1 connectors (cause, consequence, concession, or opposition)",
            "Part B: Use at least 2 subjunctive forms naturally (je voudrais que, il faut que, bien que...)",
            "Part B: Use at least 1 gérondif or perception/causative structure",
            "Both parts: Use at least 1 colloquial or idiomatic expression naturally",
        ],
    },
]
