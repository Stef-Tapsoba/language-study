import type { Checkpoint } from "../../../types"

// Italian B1 checkpoints — 6 checkpoints across 5 blocks (redesign 2026-04-27)

export const b1Checkpoints: Checkpoint[] = [

    // ── it-cp-b1-1 : Block 1 — Una storia vera (after U3) ────────────────────
    {
        id: "it-cp-b1-1",
        level: "B1",
        block: 1,
        type: "speaking",
        title: "Una storia vera",
        scenario:
            "Raccontami una storia — qualcosa che ti è davvero capitato, o una storia che ti inventi. L'importante è avere un 'prima' (trapassato prossimo), una 'scena' (imperfetto) e degli 'eventi' (passato prossimo). Prenditi 30 secondi per prepararti e poi parla per 90 secondi o 2 minuti.\n\n(Tell me a story — something that really happened to you, or one you invent. What matters is having a 'before' layer, a 'scene/background' layer, and a sequence of events. Prepare 30 seconds, then speak for 90 seconds to 2 minutes.)",
        speakingPrompts: [
            "Use at least 2 trapassato prossimo forms (what had already happened before the story)",
            "Use at least 3 imperfetto forms (scene, state, description, or habit)",
            "Use at least 4 passato prossimo forms (plot events that moved the story forward)",
            "Use at least one irregular past participle (fatto, visto, detto, messo, aperto, scritto...)",
            "Use at least one temporal connector (all'improvviso, alla fine, in precedenza, in quel momento, così...)",
            "Your story has a clear 'before' layer, a 'scene/atmosphere' layer, and a sequence of events",
            "Your story is understandable to an Italian speaker without prior context",
        ],
    },

    // ── it-cp-b1-2 : Block 2 — La mia opinione su qualcosa di importante (after U7) ─
    {
        id: "it-cp-b1-2",
        level: "B1",
        block: 2,
        type: "speaking",
        title: "La mia opinione su qualcosa di importante",
        scenario:
            "Dimmi la tua opinione su uno dei seguenti argomenti: (1) il lavoro da remoto, (2) i social media e i giovani, o (3) l'importanza di imparare le lingue straniere oggi. Cosa pensi? Come ti senti? Cosa vorresti cambiare? Cosa temi? Prenditi 30 secondi per prepararti.\n\n(Give your opinion on one of the following: (1) working from home, (2) social media and young people, or (3) the importance of foreign languages. State your position, justify it, acknowledge the other side, and express what you want or hope for.)",
        speakingPrompts: [
            "State a clear opinion (penso che, sono convinto/a che, secondo me...)",
            "Use at least 2 congiuntivo forms with volition/necessity triggers (voglio che, bisogna che, preferisco che...)",
            "Use at least 1 congiuntivo form with an emotion verb (sono contento/a che, mi dispiace che, temo che...)",
            "Use at least 1 doubt or possibility expression with congiuntivo (dubito che, è possibile che...)",
            "Use at least 1 congiuntivo conjunction (perché/affinché, benché, prima che, a meno che...)",
            "Make a concession or acknowledge complexity (benché, anche se, è vero che... ma)",
            "Use indicativo correctly after certainty verbs (so che, è certo che, penso che + affirmative)",
            "Your argument is coherent and an Italian speaker could follow your reasoning",
        ],
    },

    // ── it-cp-b1-3 : Block 3 — Una decisione ipotetica (after U10) ────────────
    {
        id: "it-cp-b1-3",
        level: "B1",
        block: 3,
        type: "speaking",
        title: "Una decisione ipotetica",
        scenario:
            "Rispondi a una delle seguenti domande: (1) Se potessi cambiare qualcosa del tuo passato, cosa cambieresti? (2) Se avessi avuto condizioni perfette nella vita, cosa avresti fatto di diverso? (3) Se dovessi scegliere tra restare nella tua città o andartene all'estero, cosa faresti? E se avessi avuto questa opzione prima?\n\n(Answer one of: (1) If you could change something in your past, what would you change? (2) If you'd had perfect conditions, what would you have done differently? (3) If you had to choose between staying or going abroad, what would you do and what if you'd had that option before?)",
        speakingPrompts: [
            "Use at least 2 type-2 si clauses (se + congiuntivo imperfetto + condizionale presente)",
            "Use at least 2 type-3 si clauses (se + congiuntivo trapassato + condizionale passato)",
            "Use avrei dovuto / avrei potuto or similar at least once",
            "Use cui or il cui / la cui at least once in a relative clause",
            "Use quello che or ciò che at least once to frame an idea",
            "Use at least one double-pronoun combination naturally",
            "Your response is organised — it has a position, development, and reflection",
        ],
    },

    // ── it-cp-b1-4 : Block 4 — Spiegami una situazione complessa (after U13) ──
    {
        id: "it-cp-b1-4",
        level: "B1",
        block: 4,
        type: "speaking",
        title: "Spiegami una situazione complessa",
        scenario:
            "Spiegami una situazione complessa — qualcosa che hai vissuto o che conosci bene. Descrivi cosa è successo, perché è andata così, cosa hanno detto le persone coinvolte e come ti senti al riguardo.\n\n(Explain a complex situation — something you've experienced or know well. Describe what happened, why it happened that way, what people said, and how you feel about it.)",
        speakingPrompts: [
            "Report what someone said or asked using indirect speech (ha detto che, mi ha chiesto se/cosa...)",
            "Use at least one correct tense backshift in indirect speech",
            "Use the gerundio or stare + gerundio at least once",
            "Use at least one cause connector beyond perché (poiché, dato che, visto che...)",
            "Use at least one consequence connector (pertanto, di conseguenza, perciò...)",
            "Use at least one concession connector (eppure, tuttavia, comunque...)",
            "Use at least one opposition connector (mentre, invece, al contrario...)",
            "Your explanation is logical and a listener could follow it without prior knowledge",
        ],
    },

    // ── it-cp-b1-5 : Block 5 — Dibattito espresso (after U16) ───────────────
    {
        id: "it-cp-b1-5",
        level: "B1",
        block: 5,
        type: "speaking",
        title: "Dibattito espresso",
        scenario:
            "Scegli uno dei seguenti argomenti: (1) «I giovani di oggi lavorano meno delle generazioni precedenti.» (2) «È meglio vivere in città che in campagna.» (3) «I social media hanno distrutto la comunicazione vera.»\n\nFase 1 (90 sec): Presenta la tua posizione. Fase 2 (60 sec): Rispondi alla seguente controargomentazione: «Alcuni sono d'accordo con te, ma altri direbbero che [posizione contraria]. Cosa ne pensi?»\n\n(Choose a topic, present your position for 90 seconds, then respond to the counter-argument for 60 seconds.)",
        speakingPrompts: [
            "Phase 1: State a clear position with appropriate hedging (mi sembra che, sono convinto/a che...)",
            "Phase 1: Use at least one cause connector (poiché, dato che, visto che...)",
            "Phase 1: Use at least one consequence connector (pertanto, di conseguenza, perciò...)",
            "Phase 1: Use da un lato... dall'altro or similar to structure your argument",
            "Phase 2: Acknowledge the counter-argument (è vero che, bisogna riconoscere che...)",
            "Phase 2: Maintain or modify your position with reasoning",
            "Phase 2: Use at least one concession or opposition connector (eppure, tuttavia, invece...)",
            "Phase 2: Use at least 1 B1 grammar structure (congiuntivo, periodo ipotetico, condizionale passato, or gerundio)",
        ],
    },

    // ── it-cp-b1-6 : Exit capstone (after U17) ────────────────────────────────
    {
        id: "it-cp-b1-6",
        level: "B1",
        block: 5,
        type: "speaking",
        title: "La mia storia, il mio punto di vista — capstone di uscita B1",
        scenario:
            "Due parti.\n\nParte A (3 min): Raccontami qualcosa che ti ha segnato davvero — un'esperienza, un incontro, una decisione. Spiega il contesto, cosa è successo, come ti sei sentito/a e cosa ne pensi adesso. Prenditi un minuto per prepararti.\n\nParte B (2–3 min): Parla della tua esperienza con l'italiano. Cosa ami di questa lingua? Cosa è stato difficile da imparare? E cosa vuoi fare con il tuo italiano da adesso?\n\n(Part A: Tell a meaningful personal story with clear past layering, hypothetical reflection, and discourse connectors. Part B: Reflect on your Italian language journey.)",
        speakingPrompts: [
            "Part A: Use at least 2 trapassato prossimo forms (backstory / prior events)",
            "Part A: Use passato prossimo and imperfetto correctly in the same narrative",
            "Part A: Include at least one hypothetical reflection (se avessi saputo..., avrei dovuto...)",
            "Part A: Use cui or quello che / ciò che at least once",
            "Part A: Use at least 2 B1 connectors (cause, consequence, concession, or opposition)",
            "Part B: Use at least 2 congiuntivo forms naturally (mi piacerebbe che, bisogna che, benché...)",
            "Part B: Use at least 1 gerundio or perception/causative structure",
            "Both parts: Use at least 1 colloquial or idiomatic expression naturally",
        ],
    },
]
