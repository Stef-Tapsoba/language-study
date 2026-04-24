import { GrammarLesson } from "../../../../types"

// Block 3 — "Talking About Others" (Units 7–9)
// Grammar: COD pronouns, COI + Y + En, Savoir vs connaître, key irregular verb families

export const block3Lessons: GrammarLesson[] = [
    // ── fr-g-a2-8 : COD pronouns ─────────────────────────────────────────────
    {
        id: "fr-g-a2-8",
        level: "A2",
        title: "Direct object pronouns — le, la, l', les",
        explanation: `COD pronouns are the single most common grammar feature of natural spoken French. Using them stops you sounding like a beginner who repeats the same noun. You'll hear them every 30 seconds in any real French conversation.

**What is a direct object?**
A direct object receives the action of the verb with no preposition in between. Test: ask "what?" or "who?" after the verb — if you get the noun, it's a direct object.

*Je regarde **la télé**.* → What am I watching? La télé → direct object → replace with **la**.

**The four COD pronouns:**
| Gender/Number | Pronoun |
|---|---|
| Masculine singular | le (l' before vowel/h) |
| Feminine singular | la (l' before vowel/h) |
| Masculine/feminine plural | les |

**Placement — before the conjugated verb:**
*Je regarde la télé.* → *Je **la** regarde.*
*Tu connais Marie ?* → *Tu **la** connais ?*
*Nous aimons ces films.* → *Nous **les** aimons.*

**With infinitives (modal + infinitive):**
The pronoun goes before the **infinitive** (the verb it belongs to):
*Je veux regarder ce film.* → *Je veux **le** regarder.*

**In the passé composé:**
The pronoun goes before the **auxiliary**. And the past participle **agrees** with the pronoun:
| Pronoun | Agreement | Example |
|---|---|---|
| le | no change (usually) | Je l'ai vu / pris / fait |
| la | + -e | Je l'ai vue / prise / faite |
| les | + -s (-es for fem.) | Je les ai vus / vues |

*La lettre ? Je **l'**ai écri**te**.* / *Les billets ? Je **les** ai achetés.*`,
        rules: [
            {
                condition: "Replacing a direct object in the present tense",
                result: "Place le/la/l'/les directly before the conjugated verb",
                examples: [
                    { native: "Tu la connais ? (Marie)", translation: "Do you know her? (Marie)" },
                    { native: "Je les attends depuis vingt minutes.", translation: "I've been waiting for them for twenty minutes." },
                    { native: "Il ne le comprend pas.", translation: "He doesn't understand it." },
                ],
            },
            {
                condition: "Modal verb + infinitive",
                result: "Pronoun goes before the infinitive",
                examples: [
                    { native: "Je veux le regarder ce soir.", translation: "I want to watch it tonight." },
                    { native: "Tu peux l'appeler demain ?", translation: "Can you call her tomorrow?" },
                    { native: "Il va les inviter à la fête.", translation: "He's going to invite them to the party." },
                ],
            },
            {
                condition: "Passé composé with COD pronoun",
                result: "Pronoun before auxiliary; past participle agrees with pronoun",
                examples: [
                    { native: "La lettre ? Je l'ai écrite ce matin.", translation: "The letter? I wrote it this morning." },
                    { native: "Les clés ? Tu les as trouvées ?", translation: "The keys? Did you find them?" },
                    { native: "Cette chanson ? Je l'ai entendue à la radio.", translation: "That song? I heard it on the radio." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "PP agreement with COD pronouns is real but often inaudible in speech. Get the pronoun right and in the right place first — agreement is the finishing touch.",
            },
            {
                type: "warning",
                content: "Students often avoid pronouns entirely and keep repeating the noun. From now on, once you've mentioned something, replace it with le/la/les — that's what natural French sounds like.",
            },
        ],
        examples: [
            { native: "Je la regarde souvent, cette série.", translation: "I watch it often, that series." },
            { native: "Tu l'as vu hier soir ? Le nouveau film ?", translation: "Did you see it last night? The new film?" },
            { native: "Je l'ai adorée ! Je l'ai regardée en deux jours.", translation: "I loved it! I watched it in two days." },
            { native: "Les acteurs ? Je les trouve excellents.", translation: "The actors? I find them excellent." },
            { native: "Son numéro ? Je ne le connais pas.", translation: "His number? I don't know it." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "T'as vu la nouvelle série sur Netflix ?", translation: "Have you seen the new Netflix series?" },
                    { native: "Oui, je l'ai adorée ! Je l'ai regardée en deux jours. Les acteurs principaux — tu les connais peut-être, ils ont joué dans Lupin aussi.", translation: "Yes, I loved it! I watched it in two days. The lead actors — you might know them, they also acted in Lupin." },
                ],
            },
        ],
        inlineVocab: [
            { word: "recommander", translation: "to recommend" },
            { word: "déconseiller", translation: "to advise against" },
            { word: "valoir la peine", translation: "to be worth it" },
            { word: "rater", translation: "to miss (not attend)" },
            { word: "la séance", translation: "showing / screening" },
            { word: "les sous-titres", translation: "subtitles" },
        ],
    },

    // ── fr-g-a2-9 : COI pronouns + Y + En ───────────────────────────────────
    {
        id: "fr-g-a2-9",
        level: "A2",
        title: "Indirect object pronouns — lui, leur — and y, en",
        explanation: `After COD pronouns, the next step is replacing indirect objects and location/quantity references. These four pronouns — *lui, leur, y, en* — make your French sound like real speech.

**COI pronouns: lui and leur**
A COI (indirect object) is linked to the verb by the preposition *à*. Test: ask "to whom?" or "for whom?" after the verb.

| | COI Pronoun |
|---|---|
| him / her (singular) | **lui** |
| them (plural) | **leur** |

*Je parle à Marie.* → *Je **lui** parle.*
*Il téléphone à ses parents.* → *Il **leur** téléphone.*

Position: before the conjugated verb (same as COD).

**Common verbs taking à + person:** parler à, téléphoner à, écrire à, dire à, donner à, demander à, répondre à, envoyer à, montrer à, promettre à.

**Y — replaces à + thing/place:**
*Y* replaces *à/dans/sur/en + noun* (thing or place, never person):
*Tu vas au marché ?* → *Tu **y** vas ?*
*Je pense à ce projet.* → *J'**y** pense.*

⚠️ For à + person, use stressed pronouns (à lui, à elle), not y.

**En — replaces de + thing or partitive:**
*En* replaces *de/du/de la/des + noun*, or a quantity expression. The number/quantity stays:
*Tu veux du café ?* → *Tu **en** veux ?*
*Il a trois enfants.* → *Il **en** a trois.* (three stays)
*Elle a besoin de temps.* → *Elle **en** a besoin.*

Both *y* and *en* go before the conjugated verb (same rule as COD/COI).

**Full pronoun order (reference):** me/te/se/nous/vous → le/la/les → lui/leur → y → en
(Stacking at A2 is not required — use one pronoun at a time.)`,
        rules: [
            {
                condition: "Replacing à + person (indirect object)",
                result: "Use lui (singular) or leur (plural) — before the conjugated verb",
                examples: [
                    { native: "Je lui téléphone ce soir. (à Marc)", translation: "I'll phone him tonight." },
                    { native: "Elle leur a dit la vérité. (aux enfants)", translation: "She told them the truth." },
                    { native: "Tu peux lui demander de l'aide ?", translation: "Can you ask her for help?" },
                ],
            },
            {
                condition: "Replacing à + place/thing (not person)",
                result: "Use y — before the conjugated verb",
                examples: [
                    { native: "Tu vas à Paris ? — J'y vais demain.", translation: "Are you going to Paris? — I'm going there tomorrow." },
                    { native: "Il pense à son voyage. — Il y pense souvent.", translation: "He's thinking about his trip. — He thinks about it often." },
                    { native: "On y va ! (On va au café !)", translation: "Let's go! (Let's go to the café!)" },
                ],
            },
            {
                condition: "Replacing de + noun (partitive or quantity)",
                result: "Use en — quantity/number stays in the sentence",
                examples: [
                    { native: "Tu veux du café ? — J'en veux bien.", translation: "Do you want coffee? — I'd like some." },
                    { native: "Il a des enfants ? — Il en a trois.", translation: "Does he have children? — He has three." },
                    { native: "J'en ai acheté deux. (deux bouteilles de vin)", translation: "I bought two (of them)." },
                ],
            },
        ],
        paradigmTable: {
            pronouns: ["Replaces", "Use", "Example"],
            verbs: [
                { label: "lui", forms: ["à + one person", "lui", "Je lui parle."] },
                { label: "leur", forms: ["à + several people", "leur", "Je leur écris."] },
                { label: "y", forms: ["à/dans/en + place/thing", "y", "J'y vais."] },
                { label: "en", forms: ["de/du/des + thing / quantity", "en", "J'en ai trois."] },
            ],
        },
        notes: [
            {
                type: "warning",
                content: "Y cannot replace people. For 'à + person', use a stressed pronoun: 'Je pense à elle' (NOT 'J'y pense' for a person).",
            },
            {
                type: "warning",
                content: "En with quantities: the number/quantity stays! 'J'en ai trois' — not 'J'en ai' alone (unless there's no quantity to express).",
            },
            {
                type: "tip",
                content: "High-frequency chunks to know by heart: J'y vais. On y va ! J'en ai besoin. Il en reste encore. Tu en veux ?",
            },
        ],
        examples: [
            { native: "J'y ai pensé ! On pourrait lui organiser une surprise.", translation: "I thought about it! We could organise a surprise for her." },
            { native: "Je leur ai envoyé un message hier soir.", translation: "I sent them a message last night." },
            { native: "Du fromage ? Il en raffole — achètes-en beaucoup.", translation: "Cheese? He's crazy about it — buy lots of it." },
            { native: "Ils y sont allés à pied.", translation: "They went there on foot." },
            { native: "Elle en a besoin pour son travail.", translation: "She needs some for her work." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "T'as pensé à l'anniversaire de Sophie ?", translation: "Have you thought about Sophie's birthday?" },
                    { native: "Oui, j'y ai pensé ! Je leur ai déjà envoyé un message à Théo et Camille. Et pour le gâteau — tu en veux un ou des macarons ? Sophie en raffole.", translation: "Yes, I thought about it! I already sent Théo and Camille a message. And for the cake — do you want one or macarons? She's crazy about them." },
                ],
            },
        ],
        inlineVocab: [
            { word: "envoyer", translation: "to send" },
            { word: "prêter", translation: "to lend" },
            { word: "raffoler de", translation: "to be crazy about" },
            { word: "avoir besoin de", translation: "to need" },
            { word: "avoir envie de", translation: "to feel like / want" },
            { word: "penser à", translation: "to think about" },
            { word: "se souvenir de", translation: "to remember" },
        ],
    },

    // ── fr-g-a2-10 : Savoir vs connaître + key irregular verb families ────────
    {
        id: "fr-g-a2-10",
        level: "A2",
        title: "Savoir vs connaître — and key irregular verb families",
        explanation: `**Savoir vs connaître — both mean "to know" but are not interchangeable.**

| | Savoir | Connaître |
|---|---|---|
| Use for: | Facts, skills (how to), information | People, places, works of art (familiarity) |
| Followed by: | Infinitive / que / question word / nothing | Noun only |
| English feel: | "know that..." / "know how to..." | "be familiar with..." / "have met..." |

*Je **sais** conduire.* (I know how to drive — skill)
*Je **sais** qu'il est marié.* (I know that he's married — fact)
*Tu **connais** Marie ?* (Do you know Marie? — acquaintance)
*Je **connais** bien Lyon.* (I know Lyon well — familiarity with a place)

Tricky: *"Do you know Paris?"* → **connaître** (familiarity) | *"Do you know the capital of France?"* → **savoir** (fact)

**Key irregular verb families — unlocking ~22 verbs at once:**

**Prendre family** (prend/prends/prend/prenons/prenez/prennent):
*prendre, comprendre, apprendre, surprendre* — all conjugate the same; PP: pris/compris/appris/surpris

**Mettre family** (mets/mets/met/mettons/mettez/mettent):
*mettre, promettre, permettre, remettre, se mettre à* — PP: mis/promis/permis

**Dire, Lire, Écrire:**
*Dire* → dis/dis/dit/disons/**dites**/disent (vous dites — irregular!)
*Lire* → lis/lis/lit/lisons/lisez/lisent; PP: lu
*Écrire* → écris/écris/écrit/écrivons/écrivez/écrivent; PP: écrit

**Ouvrir family** (conjugates like -er verbs — surprising!):
*ouvrir, offrir, souffrir, découvrir, couvrir* → ouvre/ouvres/ouvre/ouvrons/ouvrez/ouvrent; PP: ouvert/offert/souffert/découvert`,
        rules: [
            {
                condition: "Knowing a fact, skill, or piece of information",
                result: "Use savoir",
                examples: [
                    { native: "Je sais nager.", translation: "I know how to swim." },
                    { native: "Tu sais où il habite ?", translation: "Do you know where he lives?" },
                    { native: "Elle sait qu'il a menti.", translation: "She knows he lied." },
                ],
            },
            {
                condition: "Being familiar with a person, place, or work",
                result: "Use connaître",
                examples: [
                    { native: "Je connais bien Lyon.", translation: "I know Lyon well." },
                    { native: "Tu connais ce film ?", translation: "Do you know this film?" },
                    { native: "Ils ne se connaissent pas.", translation: "They don't know each other." },
                ],
            },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "savoir", forms: ["sais", "sais", "sait", "savons", "savez", "savent"] },
                { label: "connaître", forms: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"] },
                { label: "prendre", forms: ["prends", "prends", "prend", "prenons", "prenez", "prennent"] },
                { label: "mettre", forms: ["mets", "mets", "met", "mettons", "mettez", "mettent"] },
                { label: "dire", forms: ["dis", "dis", "dit", "disons", "dites", "disent"] },
                { label: "écrire", forms: ["écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"] },
                { label: "ouvrir", forms: ["ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"] },
            ],
        },
        notes: [
            {
                type: "warning",
                content: "'Vous dites' (not 'disez') — the only truly unexpected form in the dire conjugation. Flag it and remember it.",
            },
            {
                type: "tip",
                content: "The ouvrir family (offrir, souffrir, découvrir, couvrir) conjugates like a regular -er verb, not an -ir verb — this surprises learners every time. Use the surprise to make it memorable.",
            },
            {
                type: "tip",
                content: "Learning prendre also gives you comprendre, apprendre, and surprendre for free. That's the payoff of learning verb families.",
            },
        ],
        examples: [
            { native: "Je comprends bien maintenant.", translation: "I understand well now." },
            { native: "On apprend vite avec un bon professeur.", translation: "You learn fast with a good teacher." },
            { native: "Il prend le train chaque matin.", translation: "He takes the train every morning." },
            { native: "Elle s'est mise à pleurer.", translation: "She started to cry." },
            { native: "Mon frère m'a offert un livre pour mon anniversaire.", translation: "My brother gave me a book for my birthday." },
            { native: "On a découvert un nouveau restaurant incroyable.", translation: "We discovered an incredible new restaurant." },
            {
                type: "dialogue",
                exchanges: [
                    { native: "Tu connais Antoine Dupuis ? Tu sais où il expose en ce moment ?", translation: "Do you know Antoine Dupuis? Do you know where he's exhibiting right now?" },
                    { native: "Je connais quelqu'un qui sait peut-être — Lucie, elle lit tous les magazines d'art. Je lui écrirai ce soir.", translation: "I know someone who might know — Lucie, she reads all the art magazines. I'll write to her tonight." },
                ],
            },
        ],
        inlineVocab: [
            { word: "savoir par cœur", translation: "to know by heart" },
            { word: "reconnaître", translation: "to recognise" },
            { word: "être au courant de", translation: "to be aware of" },
            { word: "permettre de", translation: "to allow (to)" },
            { word: "promettre de", translation: "to promise (to)" },
            { word: "découvrir", translation: "to discover" },
            { word: "s'inscrire", translation: "to register / sign up" },
        ],
    },
]
