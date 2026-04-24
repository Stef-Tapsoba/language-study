import { GrammarLesson } from "../../../../types"

// Block 5 — "Life in French" (Units 13–16)
// Grammar: Health grammar, travel integration, feelings/opinions, advanced connectors

export const block5Lessons: GrammarLesson[] = [
    // ── fr-g-a2-14 : Health grammar — avoir mal à + contractions ─────────────
    {
        id: "fr-g-a2-14",
        level: "A2",
        title: "Expressing pain and illness — avoir mal à + article contractions",
        explanation: `Health language is survival French. The grammar hook — *avoir mal à* with article contractions — recycles the *à + le/les* contraction rules in a real communicative context.

**Avoir mal à + body part:**
The key structure for expressing pain: *avoir mal à* + definite article + body part.

The **contraction rules** (essential — recycled from A1):
- *à + le = **au*** → J'ai mal **au** dos.
- *à + les = **aux*** → J'ai mal **aux** dents.
- *à + la = **à la*** → J'ai mal **à la** gorge.
- *à + l' = **à l'*** → J'ai mal **à l'**estomac.

| Body part | Article | Phrase |
|---|---|---|
| le dos | à + le | J'ai mal **au** dos. |
| les jambes | à + les | J'ai mal **aux** jambes. |
| la tête | à + la | J'ai mal **à la** tête. |
| l'estomac | à + l' | J'ai mal **à l'**estomac. |
| les dents | à + les | J'ai mal **aux** dents. |

**Expressing general symptoms:**
*J'ai de la fièvre. / J'ai un rhume. / J'ai la grippe. / Je tousse. / J'ai des nausées.*
*Je me sens mal. / Je me sens mieux. / Je suis épuisé(e).*

**Il faut / devoir / devrais — the three levels:**
| Expression | Type | Example |
|---|---|---|
| Il faut se reposer | General/impersonal advice | One should rest. |
| Vous devez vous reposer | Direct personal instruction | You must rest. |
| Tu devrais te reposer | Polite suggestion (conditionnel) | You should rest. |`,
        rules: [
            {
                condition: "Expressing where it hurts using avoir mal à",
                result: "à + le = au / à + les = aux / à + la = à la / à + l' = à l'",
                examples: [
                    { native: "J'ai mal au ventre depuis ce matin.", translation: "I've had stomach ache since this morning." },
                    { native: "Elle a mal à la gorge et aux oreilles.", translation: "She has a sore throat and earache." },
                    { native: "Il a mal aux genoux après le match.", translation: "He has sore knees after the match." },
                ],
            },
            {
                condition: "Impersonal advice (general)",
                result: "Use il faut + infinitive",
                examples: [
                    { native: "Il faut se reposer et boire beaucoup d'eau.", translation: "One must rest and drink lots of water." },
                    { native: "Il ne faut pas prendre d'alcool avec ce médicament.", translation: "One must not take alcohol with this medication." },
                ],
            },
            {
                condition: "Direct personal instruction",
                result: "Use devoir (present) + infinitive",
                examples: [
                    { native: "Vous devez vous reposer deux ou trois jours.", translation: "You must rest for two or three days." },
                    { native: "Tu dois prendre ces antibiotiques pendant dix jours.", translation: "You must take these antibiotics for ten days." },
                ],
            },
        ],
        notes: [
            {
                type: "culture",
                content: "France has excellent public healthcare. The pharmacist (le pharmacien) can give advice for minor ailments — you don't always need a doctor. Pharmacies are identified by green crosses. Emergency numbers: SAMU (15), Pompiers (18).",
            },
            {
                type: "tip",
                content: "The three levels — il faut / devoir / devrais — teach register. Il faut is impersonal advice; devoir is direct instruction; devrais is a polite suggestion. Use them appropriately for the situation.",
            },
        ],
        examples: [
            { native: "J'ai très mal à la gorge depuis trois jours.", translation: "I've had a very sore throat for three days." },
            { native: "J'ai de la fièvre depuis hier soir.", translation: "I've had a fever since last night." },
            { native: "Ouvrez la bouche — je vais vous examiner la gorge.", translation: "Open your mouth — I'm going to examine your throat." },
            { native: "Il faut prendre ces antibiotiques pendant dix jours.", translation: "You must take these antibiotics for ten days." },
            { native: "Je voudrais quelque chose contre le mal de tête — c'est sur ordonnance ou en vente libre ?", translation: "I'd like something for a headache — is it prescription-only or over the counter?" },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Alors, qu'est-ce qui vous amène ?", translation: "So, what brings you in?" },
                    { native: "J'ai très mal à la gorge depuis trois jours, et j'ai de la fièvre depuis hier. J'ai aussi mal aux oreilles.", translation: "I've had a very sore throat for three days, and I've had a fever since yesterday. I also have earache." },
                ],
            },
        ],
        inlineVocab: [
            { word: "la douleur", translation: "pain" },
            { word: "la fièvre", translation: "fever" },
            { word: "un rhume", translation: "a cold" },
            { word: "la grippe", translation: "the flu" },
            { word: "une ordonnance", translation: "a prescription" },
            { word: "en vente libre", translation: "over the counter" },
            { word: "sur ordonnance", translation: "prescription only" },
            { word: "les effets secondaires", translation: "side effects" },
            { word: "guérir", translation: "to recover / to cure" },
        ],
    },

    // ── fr-g-a2-15 : Feelings and opinions with que + indicative ─────────────
    {
        id: "fr-g-a2-15",
        level: "A2",
        title: "Expressing opinions and feelings — que + indicative",
        explanation: `At A1, you expressed preferences with *j'aime / je n'aime pas*. At A2, you need a richer palette: nuanced opinions, beliefs, and emotional states.

**Que + indicative — expressing opinions:**
Many opinion expressions are followed by *que + a full clause*. The verb in the clause uses the normal indicative tense:

**Neutral opinion:** *Je pense que... / Je crois que... / Je trouve que...*
**Strong opinion:** *Je suis convaincu(e) que... / Je suis sûr(e) que...*
**Cautious opinion:** *J'ai l'impression que... / Il me semble que... / Ça dépend...*

*Je pense que ce film est excellent.*
*Je trouve que la situation est compliquée.*
*Il me semble qu'on devrait attendre.*

⚠️ At A2, after opinion verbs, use the normal **indicative** — not the subjunctive (that's B1).

**Agreeing and disagreeing:**
*Tu as raison. / Je suis d'accord. / Exactement. / C'est ce que je pense aussi.*
*Oui, mais... / Je comprends ce que tu veux dire, mais... / D'accord, mais...*
*Je ne suis pas (tout à fait) d'accord. / Je vois les choses différemment.*

**Expressing emotional states:**
*Se sentir + adjective:* Je me sens bien / fatigué(e) / stressé(e) / soulagé(e).
*Avoir l'air + adjective:* Tu as l'air inquiet. Elle avait l'air contente.
*Ça m'a rendu(e) + adjective:* Ça m'a rendu(e) furieux/furieuse.`,
        rules: [
            {
                condition: "Expressing an opinion followed by a full clause",
                result: "Use opinion expression + que + indicative (not subjunctive at A2)",
                examples: [
                    { native: "Je pense que tu as raison.", translation: "I think you're right." },
                    { native: "Je trouve que c'est une bonne idée.", translation: "I find that it's a good idea." },
                    { native: "J'ai l'impression que quelque chose ne va pas.", translation: "I get the feeling something isn't right." },
                ],
            },
            {
                condition: "Describing how someone appears or seems",
                result: "Use avoir l'air + adjective",
                examples: [
                    { native: "Tu as l'air fatigué(e) ce matin.", translation: "You look tired this morning." },
                    { native: "Il avait l'air inquiet.", translation: "He looked worried." },
                    { native: "Ça me paraît bizarre.", translation: "That seems strange to me." },
                ],
            },
            {
                condition: "Disagreeing politely",
                result: "Soften with connectors: mais, cependant, d'accord mais, je comprends mais",
                examples: [
                    { native: "Je comprends ce que tu veux dire, mais je ne suis pas convaincu.", translation: "I understand what you mean, but I'm not convinced." },
                    { native: "C'est vrai dans une certaine mesure, mais ça dépend du contexte.", translation: "That's true to a certain extent, but it depends on the context." },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "At A2, after opinion verbs (penser, trouver, croire), use the INDICATIVE: 'Je pense qu'il vient.' At B1, some expressions will require the SUBJUNCTIVE — but not yet.",
            },
            {
                type: "culture",
                content: "French culture values intellectual debate. At a dinner party, people are expected to have and defend opinions. 'Je n'ai pas d'opinion' is almost unusual — a hedged position is more acceptable than no position.",
            },
        ],
        examples: [
            { native: "Je crois que la situation va s'améliorer.", translation: "I believe the situation will improve." },
            { native: "À mon avis, c'est la meilleure solution.", translation: "In my opinion, it's the best solution." },
            { native: "Je suis d'accord avec toi sur ce point.", translation: "I agree with you on that point." },
            { native: "Ce qui me rend heureux, c'est les petites choses de la vie.", translation: "What makes me happy is life's little things." },
            { native: "Je me sens beaucoup plus confiant(e) qu'avant.", translation: "I feel much more confident than before." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Tu as vu le reportage hier soir ? Tu en penses quoi ?", translation: "Did you see the documentary last night? What do you think of it?" },
                    { native: "Je l'ai trouvé vraiment intéressant. Mais j'ai l'impression qu'il était un peu trop alarmiste. Je pense que la réalité est plus nuancée. Et toi ?", translation: "I found it really interesting. But I get the feeling it was a bit too alarmist. I think reality is more nuanced. And you?" },
                ],
            },
        ],
        inlineVocab: [
            { word: "à mon avis", translation: "in my opinion" },
            { word: "selon moi", translation: "according to me" },
            { word: "cependant", translation: "however" },
            { word: "pourtant", translation: "yet / nevertheless" },
            { word: "en revanche", translation: "on the other hand" },
            { word: "au fond", translation: "at heart / deep down" },
            { word: "soulagé(e)", translation: "relieved" },
            { word: "déçu(e)", translation: "disappointed" },
            { word: "fier / fière", translation: "proud" },
        ],
    },

    // ── fr-g-a2-16 : Advanced connectors and discourse markers ───────────────
    {
        id: "fr-g-a2-16",
        level: "A2",
        title: "Advanced connectors and discourse markers",
        explanation: `Connectors and discourse markers transform a list of facts into real communication. They are the difference between sounding like a learner and sounding like a speaker.

**Contrast and concession:**
| Connector | English | Register |
|---|---|---|
| mais | but | neutral |
| cependant | however | formal |
| pourtant | yet / nevertheless | standard |
| en revanche | on the other hand | standard |
| par contre | on the other hand | spoken |
| quand même | even so / still | spoken |
| malgré tout | despite everything | standard |

**Addition and emphasis:**
| Connector | English |
|---|---|
| de plus | moreover / furthermore |
| en plus | besides / also (spoken) |
| d'ailleurs | besides / incidentally |
| surtout | especially / above all |
| notamment | notably / in particular |

**Cause and consequence:**
| Connector | English | Register |
|---|---|---|
| donc | so / therefore | neutral |
| du coup | so / as a result | informal spoken |
| c'est pourquoi | that's why | standard |
| grâce à | thanks to | standard |
| à cause de | because of | standard |

**Spoken French fluency markers:**
*ben, alors, euh, quoi, tu vois, voilà, bref, enfin, genre, du coup*

These make speech sound natural rather than stilted. They signal thinking, qualifying, and wrapping up.`,
        rules: [
            {
                condition: "Acknowledging a counter-position while maintaining your own",
                result: "Use contrast connectors: cependant, pourtant, en revanche, quand même",
                examples: [
                    { native: "Paris est magnifique. Cependant, c'est très cher d'y vivre.", translation: "Paris is magnificent. However, it's very expensive to live there." },
                    { native: "Je suis fatigué, quand même j'irai à cette fête.", translation: "I'm tired, but I'll go to this party even so." },
                    { native: "Elle ne parle pas bien anglais. Pourtant, elle a vécu deux ans à Londres.", translation: "She doesn't speak English well. Yet she lived in London for two years." },
                ],
            },
            {
                condition: "Expressing consequence or result",
                result: "Use donc (standard), du coup (informal), c'est pourquoi (formal)",
                examples: [
                    { native: "J'avais faim, donc j'ai mangé une pomme.", translation: "I was hungry, so I ate an apple." },
                    { native: "Il a raté le bus. Du coup, il est arrivé en retard.", translation: "He missed the bus. As a result, he arrived late." },
                    { native: "Je n'avais pas de voiture. C'est pourquoi j'ai pris le train.", translation: "I didn't have a car. That's why I took the train." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "'Par contre' is very common in spoken French but considered incorrect by purists. In formal writing, use 'en revanche'. Learners can safely use both.",
            },
            {
                type: "tip",
                content: "Story anatomy in French: 1) Set scene (imparfait) → 2) Disruption (soudain + PC) → 3) Events (d'abord/ensuite/puis/finalement) → 4) Emotional response → 5) Takeaway (au fond / en définitive).",
            },
        ],
        examples: [
            { native: "Paris a de nombreux avantages. En revanche, Lyon est plus agréable à vivre.", translation: "Paris has many advantages. On the other hand, Lyon is more pleasant to live in." },
            { native: "Je n'ai pas envie d'y aller. En plus, il va pleuvoir.", translation: "I don't want to go. Besides, it's going to rain." },
            { native: "Grâce à leur aide, j'ai réussi.", translation: "Thanks to their help, I succeeded." },
            { native: "À cause de la grève, tous les vols ont été annulés.", translation: "Because of the strike, all flights were cancelled." },
            { native: "Bref, voilà où j'en suis — c'est compliqué mais ça avance.", translation: "Anyway, that's where I am — it's complicated but progressing." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Tu as l'air plus détendu qu'avant. Ça se passe bien au travail ?", translation: "You seem more relaxed than before. Is work going well?" },
                    { native: "Oui, enfin... c'est compliqué. Le projet avance bien. Cependant, il y a des tensions dans l'équipe. Du coup, je rentre un peu plus tôt le soir pour décompresser. Au fond, je pense que ça finira par s'arranger.", translation: "Yes, well... it's complicated. The project is going well. However, there are tensions in the team. As a result, I come home a bit earlier in the evening to decompress. Deep down, I think it will end up working out." },
                ],
            },
        ],
        inlineVocab: [
            { word: "d'ailleurs", translation: "besides / incidentally" },
            { word: "notamment", translation: "notably / in particular" },
            { word: "en définitive", translation: "ultimately / all things considered" },
            { word: "en quelque sorte", translation: "in a way" },
            { word: "à vrai dire", translation: "to tell the truth" },
            { word: "franchement", translation: "frankly" },
            { word: "bref", translation: "anyway / in short (spoken closer)" },
            { word: "enfin", translation: "well / I mean (qualification/correction)" },
            { word: "du coup", translation: "so / as a result (informal)" },
        ],
    },
]
