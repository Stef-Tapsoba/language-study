import type { Checkpoint } from '../../../types'

export const a2Checkpoints: Checkpoint[] = [
    // ── it-cp-a2-1 : Block 1 — Racconta un'esperienza (after U3) ─────────────
    {
        id: 'it-cp-a2-1',
        level: 'A2',
        block: 1,
        type: 'speaking',
        title: "Racconta un'esperienza",
        scenario:
            "Tell me about an experience that stayed with you — something you still remember clearly. It can be funny, strange, or moving. Describe the situation as it was (background), what happened (events), and how you felt.\n\nSpeak for 90 seconds to 2 minutes. Use both past tenses naturally — the imperfetto for the scene and ongoing states, the passato prossimo for the events that moved the story forward.",
        speakingPrompts: [
            "Describe the background scene using the imperfetto (time, weather, how things were, how you felt)",
            "Use the passato prossimo for the specific events that happened (what moved the story forward)",
            "Use 'stavo + gerundio' at least once for an interrupted action",
            "Use at least one irregular past participle (fatto, detto, visto, preso, chiesto, venuto, rimasto...)",
            "Use at least one reflexive verb in the passato prossimo (mi sono alzato/a, ci siamo divertiti...)",
            "Use at least one negative sentence in the past (non ho... / non sapevo... / non c'era...)",
            "Use at least one narrative connector (all'improvviso / di colpo / a quel punto / alla fine / per fortuna / purtroppo)",
        ],
    },

    // ── it-cp-a2-2 : Block 2 — Descrivi e confronta (after U6) ──────────────
    {
        id: 'it-cp-a2-2',
        level: 'A2',
        block: 2,
        type: 'speaking',
        title: 'Descrivi e confronta',
        scenario:
            "Describe two Italian places you know or are interested in — two cities, two regions, two restaurants, or two travel experiences. Compare them. Talk about what you prefer, what you no longer do or haven't done yet, and what matters most to you in a place.\n\nSpeak for 90 seconds. Write a short review (60–80 words) of a place you know well — recommend or advise against it, using at least one relative clause and one comparison.",
        speakingPrompts: [
            "Use at least 2 comparatives with più/meno (with the correct choice of di or che)",
            "Use at least 1 superlative (relative or absolute -issimo)",
            "Use migliore/meglio or peggiore/peggio (not più buono or più bene)",
            "Use at least 1 relative clause with che, cui, or dove",
            "Use at least 1 use of quello che or ciò che",
            "Use at least 1 expanded negation beyond simple non (non...più / non...niente / non...nessuno / non...affatto / soltanto)",
        ],
    },

    // ── it-cp-a2-3 : Block 3 — Racconta con i pronomi (after U9) ────────────
    {
        id: 'it-cp-a2-3',
        level: 'A2',
        block: 3,
        type: 'listening',
        title: 'Racconta con i pronomi',
        scenario:
            "Listen to the story 'Una serata a casa di amici' (it-l-a2-1). Then answer the comprehension questions about what the pronouns (lo, la, li, le, gli, ci, ne) replace in each case.\n\nThen: tell me about a recent social event — a dinner, a party, an evening with friends. Use pronouns instead of repeating names.",
        speakingPrompts: [
            "Use at least 2 direct pronouns (lo/la/li/le) correctly",
            "Use at least 1 indirect pronoun (gli/le/mi/ti/ci) correctly",
            "Use ci at least once as a locative (place reference — not just reflexive)",
            "Use ne at least once (for quantity, partitive, or di + something)",
            "Use ho conosciuto once if meeting someone new is relevant — or ho saputo for a discovery",
        ],
        listeningId: 'it-l-a2-1',
    },

    // ── it-cp-a2-4 : Block 4 — Piani, sogni e condizioni (after U12) ─────────
    {
        id: 'it-cp-a2-4',
        level: 'A2',
        block: 4,
        type: 'speaking',
        title: 'Piani, sogni e condizioni',
        scenario:
            "Part A: You are calling a hotel in Florence to book a room. You want a room for two nights (Thursday and Friday), with a city view if available. Ask about price, whether breakfast is included, and what time check-in is possible. Every request must be in the condizionale.\n\nPart B: Talk about your near-future plans and a dream. What will you do in the coming weeks? In an ideal world, what would your life look like? Also mention something you've been doing for a while.",
        speakingPrompts: [
            "Part A: Use condizionale for at least 3 requests (vorrei, avrebbe, potrebbe, le dispiacerebbe, sarebbe possibile...)",
            "Part A: Use the futuro semplice at least once for a specific plan (arriverò verso le...)",
            "Part A: Use a se + present → consequence sentence at least once",
            "Part B: Use stare per or present with future value for near plans",
            "Part B: Use futuro semplice for more distant projections (at least 2 irregular forms)",
            "Part B: Use quando + futuro at least once",
            "Part B: Use condizionale for a wish or dream (mi piacerebbe, vivrei, avrei...)",
            "Part B: Use da + duration + present for an ongoing activity",
        ],
    },

    // ── it-cp-a2-5 : Block 5 — Ascolto: Il viaggio di Matteo (after U15) ─────
    {
        id: 'it-cp-a2-5',
        level: 'A2',
        block: 5,
        type: 'listening',
        title: 'Il viaggio di Matteo',
        scenario:
            "Read the 7 comprehension questions before listening. Then listen to the story 'Il viaggio di Matteo' (it-l-a2-2). Answer all 7 questions — including the two metalinguistic questions about why specific tenses and forms were chosen.",
        speakingPrompts: [
            "Answer the factual questions about Matteo's trip correctly (who, what, how long, how many hours)",
            "Explain why 'Era tutto organizzato' uses the imperfetto (not passato prossimo)",
            "Identify an example of da + present for ongoing duration in the text",
            "Identify an example of the condizionale used for a reaction or wish in the past",
        ],
        listeningId: 'it-l-a2-2',
    },

    // ── it-cp-a2-6 : Capstone A2 — Il tuo italiano in 5 argomenti (after U22) ─
    {
        id: 'it-cp-a2-6',
        level: 'A2',
        block: 6,
        type: 'speaking',
        title: 'Il tuo italiano in 5 argomenti',
        scenario:
            "Speak in Italian for 3–4 minutes. Cover these five areas in any order:\n\n1. Who you are and where you come from — your identity, your current life, something that defines you\n2. A memorable experience from the past — something that struck you, good or bad\n3. Something you love and something you no longer love — compare, express an opinion\n4. Your life at the moment — something you've been doing for a while, something you're about to start or finish\n5. Your plans and dreams — what you'll do, what you would do in an ideal world\n\nTry to sound natural — use connectors, express emotions, use filler words. Speak as if you're telling a friend.",
        speakingPrompts: [
            "Use imperfetto for background and passato prossimo for completed events (at least once each)",
            "Use at least one direct pronoun (lo/la/li/le) naturally",
            "Use ci or ne at least once",
            "Use at least one comparative or superlative",
            "Use at least one relative clause (che, cui, or dove)",
            "Use futuro semplice at least twice",
            "Use condizionale at least once (wish, dream, or polite form)",
            "Use at least 3 different connectors (però, quindi, nonostante, comunque, tra l'altro, addirittura...)",
            "Use at least one filler or discourse marker naturally (cioè, insomma, allora, ecco, beh...)",
        ],
    },
]
