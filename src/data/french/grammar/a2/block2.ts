import { GrammarLesson } from "../../../../types"

// Block 2 — "How Things Compare" (Units 4–6)
// Grammar: Comparatives/superlatives, Relative pronouns, Negation expansion

export const block2Lessons: GrammarLesson[] = [
    // ── fr-g-a2-5 : Comparatives and superlatives ────────────────────────────
    {
        id: "fr-g-a2-5",
        level: "A2",
        title: "Comparatives and superlatives",
        explanation: `Comparatives and superlatives let you recommend, evaluate, and defend opinions. French handles them differently from English — no -er/-est suffixes, just fixed structures.

**Comparatives (comparing two things):**

*plus + adjective/adverb + que* → more ... than
*moins + adjective/adverb + que* → less ... than
*aussi + adjective/adverb + que* → as ... as

The adjective still agrees with the noun it modifies:
- *Paris est **plus grande** que Lyon.*
- *Ce restaurant est **moins cher** que l'autre.*

**With nouns (comparing quantities):**
- *plus de + noun + que* → more ... than
- *moins de + noun + que* → less/fewer ... than
- *autant de + noun + que* → as much/many ... as

**Superlatives (the most/least):**

*le/la/les + plus/moins + adjective*

The article agrees with the noun. When the adjective normally follows the noun, the superlative goes after and the article is **repeated**:
- *la ville **la plus animée*** (not: la plus animée ville)

After a superlative, use *de* (not *dans*) to express "in":
- *le meilleur restaurant **de** la ville*

**The four irregulars — must memorise:**
| Base | Comparative | Superlative |
|---|---|---|
| bon(ne) | **meilleur(e)** (better) | le/la **meilleur(e)** (the best) |
| mauvais(e) | **pire** (worse) | le/la **pire** (the worst) |
| bien | **mieux** (better) | le **mieux** (the best) |
| mal | **plus mal / pis** (worse) | — |

*Meilleur* replaces *plus bon* — you CANNOT say *plus bon*.
*Mieux* replaces *plus bien* — you CANNOT say *plus bien*.`,
        rules: [
            {
                condition: "Comparing adjectives (more/less/as...as)",
                result: "plus/moins/aussi + adjective (agree with noun) + que",
                examples: [
                    { native: "Lyon est moins chère que Paris.", translation: "Lyon is cheaper than Paris." },
                    { native: "Elle est aussi grande que sa sœur.", translation: "She is as tall as her sister." },
                    { native: "Ce film est plus intéressant que l'autre.", translation: "This film is more interesting than the other." },
                ],
            },
            {
                condition: "Comparing nouns (more/fewer/as many)",
                result: "plus de / moins de / autant de + noun + que",
                examples: [
                    { native: "Il y a plus de touristes que l'année dernière.", translation: "There are more tourists than last year." },
                    { native: "J'ai moins de temps qu'avant.", translation: "I have less time than before." },
                ],
            },
            {
                condition: "Superlative with adjective that follows the noun",
                result: "Article is repeated: la ville la plus animée",
                examples: [
                    { native: "C'est la ville la plus animée de France.", translation: "It's the liveliest city in France." },
                    { native: "Le film le plus intéressant de l'année.", translation: "The most interesting film of the year." },
                ],
            },
            {
                condition: "Using 'good/well' comparatives",
                result: "Never use plus bon or plus bien — use meilleur / mieux",
                examples: [
                    { native: "Ce vin est meilleur que celui d'hier.", translation: "This wine is better than yesterday's." },
                    { native: "Elle parle français mieux que lui.", translation: "She speaks French better than him." },
                    { native: "C'est le meilleur café de Lyon.", translation: "It's the best coffee in Lyon." },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Never say 'plus bon' or 'plus bien'. These are the most common errors in this unit. Use meilleur (adjective) and mieux (adverb) instead.",
            },
            {
                type: "tip",
                content: "The stressed pronoun comes after 'que': plus grand que moi, moins rapide que lui, aussi intelligente qu'elle.",
            },
        ],
        examples: [
            { native: "Paris est plus grand que Lyon.", translation: "Paris is bigger than Lyon." },
            { native: "Lyon est moins stressante que Paris.", translation: "Lyon is less stressful than Paris." },
            { native: "Ce restaurant est aussi bon que celui d'à côté.", translation: "This restaurant is as good as the one next door." },
            { native: "C'est le meilleur restaurant de la ville.", translation: "It's the best restaurant in town." },
            { native: "Elle joue mieux que lui.", translation: "She plays better than him." },
            { native: "Ce film est pire que le premier.", translation: "This film is worse than the first one." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Tu préfères Paris ou Lyon ?", translation: "Do you prefer Paris or Lyon?" },
                    { native: "Lyon, sans hésiter — c'est moins cher, moins stressant, et la cuisine y est meilleure qu'à Paris.", translation: "Lyon, without hesitation — it's cheaper, less stressful, and the food there is better than in Paris." },
                ],
            },
        ],
        inlineVocab: [
            { word: "comparer", translation: "to compare" },
            { word: "préférer", translation: "to prefer" },
            { word: "imbattable", translation: "unbeatable" },
            { word: "abordable", translation: "affordable" },
            { word: "animé(e)", translation: "lively" },
            { word: "bondé(e)", translation: "packed / crowded" },
            { word: "sans hésiter", translation: "without hesitation" },
        ],
    },

    // ── fr-g-a2-6 : Relative pronouns qui, que, où ──────────────────────────
    {
        id: "fr-g-a2-6",
        level: "A2",
        title: "Relative pronouns — qui, que, où",
        explanation: `Relative pronouns connect two ideas about the same noun, letting you describe with precision. Without them, you sound like a beginner. With them, your French sounds like A2 output.

**The core distinction:**

**qui** = subject relative pronoun — the noun is *doing* the action in the relative clause
**que** = object relative pronoun — the noun is *receiving* the action in the relative clause

Quick test: Ask "who/what is doing the verb in the relative clause?"
If the pronoun is doing it → *qui*. If something else is doing it → *que*.

**Qui — subject pronoun:**
- *J'ai un ami **qui** parle japonais.* (the friend speaks — subject → qui)
- *C'est une femme **qui** travaille dans la mode.*
- *Qui* never elides — even before a vowel: *un ami **qui** est sympa*

**Que — object pronoun:**
- *Le film **que** j'ai vu hier était excellent.* (I watched the film — object → que)
- *C'est la ville **que** je préfère.*
- *Que* elides to *qu'* before a vowel: *le film **qu'**il a vu*

**Past participle agreement with que:**
When using PC with *que*, the PP agrees with the noun *que* refers to:
- *La pizza **que** j'ai commandée* (pizza = feminine → -ée)
- *Les billets **que** j'ai achetés* (billets = masc. pl. → -s)

**Où — place or time relative pronoun:**
- *C'est le café **où** je travaille tous les matins.* (where)
- *Le jour **où** je suis arrivé à Paris, il pleuvait.* (when — with time nouns)

**High-frequency patterns:**
*Ce qui* (what — subject) and *ce que* (what — object) are essential chunks:
- *Ce qui m'énerve, c'est le bruit.* (What annoys me is the noise)
- *Ce que j'aime dans Paris, c'est l'architecture.* (What I love about Paris is...)`,
        rules: [
            {
                condition: "The noun does the action in the relative clause",
                result: "Use qui (subject)",
                examples: [
                    { native: "C'est lui qui a organisé la fête.", translation: "It's him who organised the party." },
                    { native: "Elle cherche quelqu'un qui parle espagnol.", translation: "She's looking for someone who speaks Spanish." },
                    { native: "Les gens qui arrivent maintenant sont mes amis.", translation: "The people who are arriving now are my friends." },
                ],
            },
            {
                condition: "The noun receives the action in the relative clause",
                result: "Use que / qu' (object)",
                examples: [
                    { native: "Le livre que je lis est passionnant.", translation: "The book I'm reading is fascinating." },
                    { native: "C'est la ville que j'ai visitée l'été dernier.", translation: "It's the city I visited last summer." },
                    { native: "Le café qu'il m'a recommandé était excellent.", translation: "The café he recommended to me was excellent." },
                ],
            },
            {
                condition: "The noun is a place or specific time",
                result: "Use où",
                examples: [
                    { native: "C'est l'hôtel où nous avons séjourné.", translation: "It's the hotel where we stayed." },
                    { native: "Il habite dans le quartier où j'ai grandi.", translation: "He lives in the neighbourhood where I grew up." },
                    { native: "Le jour où je suis arrivé, il neigeait.", translation: "The day when I arrived, it was snowing." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Ce qui / Ce que are the most useful patterns in this unit — learn them as chunks. 'Ce qui m'intéresse, c'est...' / 'Ce que je trouve bizarre, c'est...' — use them constantly.",
            },
            {
                type: "warning",
                content: "Qui NEVER elides before a vowel: 'un ami qui est sympa' (NOT 'un ami qu'est sympa'). Only que elides to qu'.",
            },
        ],
        examples: [
            { native: "J'ai un collègue qui parle cinq langues.", translation: "I have a colleague who speaks five languages." },
            { native: "Le film que j'ai vu hier m'a beaucoup plu.", translation: "The film I saw yesterday pleased me a lot." },
            { native: "Je connais un restaurant où on sert d'excellentes moules.", translation: "I know a restaurant where they serve excellent mussels." },
            { native: "Ce qui me surprend, c'est son calme.", translation: "What surprises me is her calmness." },
            { native: "Ce que j'aime dans ce pays, c'est la cuisine.", translation: "What I like about this country is the food." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "T'as regardé la série que je t'ai recommandée ?", translation: "Did you watch the series I recommended to you?" },
                    { native: "Oui ! Celle qui se passe en Bretagne ? Ce qui m'a le plus surpris, c'est le scénario — je ne m'attendais pas à la fin.", translation: "Yes! The one set in Brittany? What surprised me most was the plot — I didn't expect the ending." },
                ],
            },
        ],
        inlineVocab: [
            { word: "celui qui / celle qui", translation: "the one who" },
            { word: "l'endroit où", translation: "the place where" },
            { word: "ce qui m'intéresse", translation: "what interests me" },
            { word: "ce que j'aime", translation: "what I like" },
            { word: "s'attendre à", translation: "to expect" },
            { word: "recommander", translation: "to recommend" },
        ],
    },

    // ── fr-g-a2-7 : Negation expansion ──────────────────────────────────────
    {
        id: "fr-g-a2-7",
        level: "A2",
        title: "Negation — ne...plus, ne...rien, ne...personne, ne...que",
        explanation: `You learned *ne...pas* and *ne...jamais* in A1. At A2, you need the full negation toolkit — each expressing a different shade of meaning.

**Overview:**
| Structure | Meaning | Example |
|---|---|---|
| ne...pas | not | Je ne travaille pas. |
| ne...plus | no longer / not anymore | Je ne travaille plus. |
| ne...jamais | never | Je ne travaille jamais. |
| ne...rien | nothing / not anything | Je ne fais rien. |
| ne...personne | nobody / not anyone | Je ne vois personne. |
| ne...que | only (restriction) | Je ne travaille que le soir. |

**Ne...plus** — marks a *change of state* (something was true but is now false):
*Il n'habite **plus** à Paris.* (He used to live there)
⚠️ Pronunciation: the *-s* of *plus* is **silent** in negation: /ply/ not /plys/.

**Ne...rien / Ne...personne** as subjects (before the verb):
*Rien ne m'intéresse.* / *Personne n'est venu.*

**Position in passé composé — critical difference:**
- *ne...pas/plus/jamais/rien* → wrap around the **auxiliary**
- *ne...personne* → *personne* goes **after** the past participle

*Je **n'**ai **rien** vu.* (rien before PP)
*Je **n'**ai vu **personne**.* (personne after PP)

**Ne...que** — not a negation, but a **restriction** ("only"):
*Je ne travaille **que** le week-end.* = I only work on weekends
*Que* comes directly before the restricted element (not after the auxiliary like pas).`,
        rules: [
            {
                condition: "Something used to be true but is no longer",
                result: "Use ne...plus (silent -s in negation)",
                examples: [
                    { native: "Il ne mange plus de viande.", translation: "He no longer eats meat." },
                    { native: "On n'a plus de connexion internet.", translation: "We've lost our internet connection." },
                    { native: "Elle ne travaille plus ici.", translation: "She no longer works here." },
                ],
            },
            {
                condition: "Nothing / not anything",
                result: "Use ne...rien — rien goes before past participle in PC",
                examples: [
                    { native: "Je n'ai rien mangé ce matin.", translation: "I ate nothing this morning." },
                    { native: "Rien ne m'intéresse ici.", translation: "Nothing interests me here." },
                    { native: "Il n'y a rien d'intéressant.", translation: "There's nothing interesting." },
                ],
            },
            {
                condition: "Nobody / not anyone",
                result: "Use ne...personne — personne goes AFTER past participle in PC",
                examples: [
                    { native: "Je ne connais personne ici.", translation: "I don't know anyone here." },
                    { native: "Elle n'a vu personne.", translation: "She didn't see anyone." },
                    { native: "Personne n'est venu.", translation: "Nobody came." },
                ],
            },
            {
                condition: "Expressing restriction ('only')",
                result: "Use ne...que — que goes before the restricted element",
                examples: [
                    { native: "Je ne travaille que le week-end.", translation: "I only work on weekends." },
                    { native: "Elle ne parle que français.", translation: "She only speaks French." },
                    { native: "On n'a que dix minutes.", translation: "We only have ten minutes." },
                ],
            },
        ],
        paradigmTable: {
            pronouns: ["Simple tense", "Passé composé"],
            verbs: [
                { label: "ne...pas", forms: ["Je ne fais pas.", "Je n'ai pas fait."] },
                { label: "ne...plus", forms: ["Je ne viens plus.", "Je ne suis plus venu(e)."] },
                { label: "ne...rien", forms: ["Je ne vois rien.", "Je n'ai rien vu."] },
                { label: "ne...personne", forms: ["Je ne vois personne.", "Je n'ai vu personne."] },
                { label: "ne...que", forms: ["Je ne mange que du pain.", "Je n'ai mangé que du pain."] },
            ],
        },
        notes: [
            {
                type: "warning",
                content: "Personne goes AFTER the past participle in compound tenses, unlike all other negatives: 'Je n'ai vu personne' (NOT 'Je n'ai personne vu').",
            },
            {
                type: "tip",
                content: "Ne...que is NOT a negation — it's a restriction. The verb is not negated; the speaker is limiting it. 'Je ne bois que de l'eau' = I DO drink — just only water.",
            },
            {
                type: "culture",
                content: "French often uses negation for understatement: 'Ce n'est pas mal' can mean high praise. 'Personne ne fait ça ici' is as much a social cue as a factual statement.",
            },
        ],
        examples: [
            { native: "Je ne le vois plus depuis des mois.", translation: "I haven't seen him for months." },
            { native: "Il n'a rien dit pendant toute la réunion.", translation: "He said nothing during the whole meeting." },
            { native: "Elle n'a invité personne à sa fête.", translation: "She didn't invite anyone to her party." },
            { native: "Je ne bois que de l'eau — je ne prends plus d'alcool.", translation: "I only drink water — I've stopped drinking alcohol." },
            { native: "Personne ne sait où il est allé.", translation: "Nobody knows where he went." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Tu as de ses nouvelles de Julien ?", translation: "Have you heard from Julien?" },
                    { native: "Non, je ne l'ai plus contacté depuis des mois. Et personne ne semble savoir où il est. Il ne faisait que travailler — il n'avait plus de temps pour rien.", translation: "No, I haven't been in contact for months. And nobody seems to know where he is. He did nothing but work — he had no more time for anything." },
                ],
            },
        ],
        inlineVocab: [
            { word: "ne...plus", translation: "no longer / not anymore" },
            { word: "ne...rien", translation: "nothing / not anything" },
            { word: "ne...personne", translation: "nobody / not anyone" },
            { word: "ne...que", translation: "only (restriction)" },
            { word: "ne...pas encore", translation: "not yet" },
            { word: "disparaître", translation: "to disappear" },
            { word: "manquer (à qqn)", translation: "to be missed by sb" },
        ],
    },
]
