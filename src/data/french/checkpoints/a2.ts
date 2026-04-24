import type { Checkpoint } from "../../../types"

export const a2Checkpoints: Checkpoint[] = [
    // ── fr-cp-a2-1 : Block 1 — Tell a memorable experience (after U3) ─────────
    {
        id: "fr-cp-a2-1",
        level: "A2",
        block: 1,
        type: "speaking",
        title: "Tell me about a memorable experience",
        scenario:
            "Raconte-moi une expérience mémorable — quelque chose qui t'a marqué(e). Ça peut être drôle, bizarre, ou émouvant. Décris la situation (comment c'était, où tu étais, comment tu te sentais), puis raconte ce qui s'est passé, et dis comment tu t'es senti(e) à la fin.\n\n(Tell me about a memorable experience — something that stayed with you. It can be funny, strange, or moving. Describe the situation — what it was like, where you were, how you felt — then recount what happened, and say how you felt at the end.)",
        speakingPrompts: [
            "Set the scene using imparfait (C'était... / Il faisait... / J'étais... / Il y avait...)",
            "Use passé composé for the events that happened (soudain... / j'ai... / il est...)",
            "Use at least one reflexive verb in passé composé (je me suis levé(e)... / je me suis rendu(e) compte...)",
            "Use at least one irregular past participle (fait, vu, pris, dit, mis, écrit, bu, eu...)",
            "Include at least one negative sentence in the past (je n'ai pas... / je ne savais pas...)",
            "Use at least one connector (soudain, tout à coup, finalement, à ce moment-là...)",
            "Use quand with the correct tense combination at least once",
            "Give your story a beginning (scene-setting), middle (events), and a sense of how it resolved",
        ],
    },

    // ── fr-cp-a2-2 : Block 2 — Describe and compare (after U6) ───────────────
    {
        id: "fr-cp-a2-2",
        level: "A2",
        block: 2,
        type: "speaking",
        title: "Describe and compare",
        scenario:
            "Décris deux endroits que tu connais bien — par exemple deux villes, deux quartiers, deux restaurants, ou deux expériences de voyage. Compare-les. Dis ce que tu aimes ou n'aimes plus, et ce qui est important pour toi.\n\nEnsuite, écris un mini-avis (60–80 mots) sur un lieu que tu as visité — restaurant, musée, parc, hôtel. Recommande-le ou déconseille-le en expliquant pourquoi.\n\n(Describe two places you know well. Compare them. Say what you like or no longer like, and what matters to you. Then write a short review of a place you've visited.)",
        speakingPrompts: [
            "Use at least 2 comparatives (plus/moins/aussi + adjective + que)",
            "Use at least one superlative correctly (with the right article and de)",
            "Use meilleur or mieux — NOT plus bon or plus bien",
            "Use a relative clause with qui (subject) correctly",
            "Use a relative clause with que (object) correctly",
            "Use ce qui or ce que naturally (Ce qui me plaît... / Ce que j'aime...)",
            "Use at least one negation beyond ne...pas (ne...plus, ne...rien, ne...personne, or ne...que)",
            "Your speaking sounds connected — not just a list of facts",
            "Your written review includes a recommendation and a reason",
        ],
    },

    // ── fr-cp-a2-3 : Block 3 — Tell a story with pronouns (after U9) ──────────
    {
        id: "fr-cp-a2-3",
        level: "A2",
        block: 3,
        type: "both",
        title: "Tell a story with pronouns",
        scenario:
            "Écoute le dialogue — puis parle-moi d'une soirée ou d'un repas récent avec des amis ou de la famille. Qu'est-ce que vous avez fait ? Qu'est-ce que tu as pensé des gens présents ? Raconte-moi.\n\n(Listen to the dialogue — then tell me about a recent evening or meal with friends or family. What did you do? What did you think of the people there? Tell me about it.)",
        listeningId: "fr-l-a2-1",
        speakingPrompts: [
            "Use le/la/les/l' to replace at least 2 direct objects",
            "Use lui or leur at least once (to replace à + person)",
            "Use y at least once (to replace a place or à + thing)",
            "Use en at least once (to replace a quantity or de + thing)",
            "Use imparfait for background/scene setting",
            "Use passé composé for the events that happened",
            "Use savoir or connaître correctly at least once",
            "Past participle agreement is correct when a COD pronoun precedes the verb",
            "The story has a beginning, development, and conclusion — not just a list",
        ],
    },

    // ── fr-cp-a2-4 : Block 4 — Plans, dreams, and what if (after U12) ─────────
    {
        id: "fr-cp-a2-4",
        level: "A2",
        block: 4,
        type: "speaking",
        title: "Plans, dreams, and what if",
        scenario:
            "Partie A — Jeu de rôle : Tu appelles un hôtel à Nice pour faire une réservation. Tu veux une chambre pour deux nuits (vendredi et samedi). Tu veux savoir s'il y a une chambre avec vue sur la mer, quel est le prix, et si le petit déjeuner est inclus.\n\nPartie B — Monologue personnel : Parle-moi de tes projets pour l'avenir proche — et d'un rêve que tu as. Qu'est-ce que tu vas faire dans les prochaines semaines ? Et dans un monde idéal, qu'est-ce que tu ferais ?\n\n(Part A: Hotel booking roleplay. Part B: Talk about your near-future plans and a dream.)",
        speakingPrompts: [
            "Use conditionnel for at least 3 polite requests in Part A (je voudrais, auriez-vous, serait-il possible...)",
            "Never use futur after si (Si vous avez... → je réserverai, NOT je réserverais)",
            "Use futur simple correctly with at least 2 irregular stems",
            "Distinguish futur proche (near/decided) from futur simple (general/distant)",
            "Use quand + futur simple at least once",
            "Use conditionnel to express a wish or dream in Part B",
            "Use tu devrais or il faudrait or il vaudrait mieux once",
            "Use depuis or ça fait...que with present tense correctly",
            "Use venir de + infinitive at least once",
            "The hotel roleplay sounds like a real polite phone call",
        ],
    },

    // ── fr-cp-a2-5 : Block 5 — Listening: a journey that didn't go to plan ─────
    {
        id: "fr-cp-a2-5",
        level: "A2",
        block: 5,
        type: "listening",
        title: "A journey that didn't go to plan",
        scenario:
            "Écoute l'histoire d'Antoine et son voyage raté à Toulouse. Réponds aux questions de compréhension.\n\n(Listen to Antoine's disastrous trip to Toulouse. Answer the comprehension questions.)",
        listeningId: "fr-l-a2-4",
        speakingPrompts: [
            "Identify why Antoine's first train was cancelled",
            "Say how long he waited at the ticket window",
            "Explain what he decided to do after learning about the next train",
            "Identify what positive thing Antoine found in the evening",
            "Explain why 'il est rentré le lendemain matin' uses passé composé (not imparfait)",
            "Find the si clause at the end — identify the tense in both parts",
        ],
    },

    // ── fr-cp-a2-6 : A2 exit capstone (after U16) ─────────────────────────────
    {
        id: "fr-cp-a2-6",
        level: "A2",
        block: 6,
        type: "speaking",
        title: "Your French life — the A2 exit capstone",
        scenario:
            "Bienvenue à la fin du niveau A2 ! Pour finaliser ce niveau, parle en français pendant 3 à 4 minutes. Tu peux couvrir ces cinq domaines dans l'ordre que tu veux :\n\n1. Qui tu es et d'où tu viens — ton identité, ta vie actuelle, quelque chose qui te caractérise\n2. Une expérience mémorable du passé — quelque chose qui t'a marqué(e), bien ou mal\n3. Quelque chose que tu aimes, quelque chose que tu n'aimes plus — compare, exprime une opinion\n4. Ta vie en ce moment — ce que tu fais depuis un certain temps, ce que tu viens de commencer ou terminer\n5. Tes projets et tes rêves — ce que tu feras, ce que tu aimerais faire idéalement\n\nEssaie de sonner naturel — utilise des connecteurs, des fillers, des émotions. Parle comme si tu parlais à un ami français.",
        speakingPrompts: [
            "Use imparfait for background, description, or habitual past",
            "Use passé composé for completed events (at least one irregular past participle)",
            "Use at least one reflexive verb in the passé composé",
            "Use a COD pronoun (le/la/les) at least once naturally",
            "Use y or en at least once",
            "Use at least one comparative or superlative",
            "Use a relative pronoun (qui, que, or où) at least once",
            "Use futur simple at least twice",
            "Use conditionnel at least once (wish, dream, or polite form)",
            "Use at least 3 different connectors (cependant, du coup, pourtant, en revanche, d'ailleurs...)",
            "Use at least one filler word naturally (ben, bref, du coup, tu vois, quand même...)",
            "Sound connected and conversational — not a list but a flowing monologue",
        ],
    },
]
