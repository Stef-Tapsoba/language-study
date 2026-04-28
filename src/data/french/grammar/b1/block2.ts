import { GrammarLesson } from "../../../../types"

// Block 2 — "Ce que je veux, ce que je ressens" (Units 4–7)
// Grammar: Subjonctif — volition, emotion/doubt, conjunctions, superlative/uncertain referent

export const block2Lessons: GrammarLesson[] = [
    // ── fr-g-b1-3 : Subjonctif — formation + volition ────────────────────────
    {
        id: "fr-g-b1-3",
        level: "B1",
        title: "Le subjonctif présent — formation et volonté",
        explanation: {
            target: `Le subjonctif est le mode de la subjectivité. Il s'emploie quand la proposition principale exprime une volonté, une émotion, un doute ou un but — et que les deux propositions ont des **sujets différents**.

**Formation :** forme ils/elles du présent → supprimer -ent → ajouter -e, -es, -e, -ions, -iez, -ent

**La règle essentielle :**
- Même sujet → infinitif : *Je veux **partir**.*
- Sujets différents → que + subjonctif : *Je veux que tu **partes**.*

**Formes irrégulières à mémoriser absolument :**
être → soit | avoir → ait | aller → aille | faire → fasse | pouvoir → puisse | vouloir → veuille | savoir → sache | venir → vienne`,
            native: `The subjunctive is the mood of subjectivity. It is triggered when the main clause expresses will, emotion, doubt, or purpose — and the two clauses have **different subjects**.

**Formation:** ils/elles present tense → remove -ent → add -e, -es, -e, -ions, -iez, -ent

**The key rule:**
- Same subject → infinitive: *Je veux **partir**.*
- Different subjects → que + subjunctive: *Je veux que tu **partes**.*

**Must memorise — high-frequency irregulars:**
être → soit | avoir → ait | aller → aille | faire → fasse | pouvoir → puisse | vouloir → veuille | savoir → sache | venir → vienne`,
        },
        conjugationTable: {
            pronouns: ["que je/j'", "que tu", "qu'il/elle", "que nous", "que vous", "qu'ils/elles"],
            verbs: [
                { label: "parler", forms: ["parle", "parles", "parle", "parlions", "parliez", "parlent"] },
                { label: "finir", forms: ["finisse", "finisses", "finisse", "finissions", "finissiez", "finissent"] },
                { label: "être", forms: ["sois", "sois", "soit", "soyons", "soyez", "soient"] },
                { label: "avoir", forms: ["aie", "aies", "ait", "ayons", "ayez", "aient"] },
                { label: "aller", forms: ["aille", "ailles", "aille", "allions", "alliez", "aillent"] },
                { label: "faire", forms: ["fasse", "fasses", "fasse", "fassions", "fassiez", "fassent"] },
            ],
        },
        rules: [
            {
                condition: "Verbes de volonté → subjonctif (sujets différents)",
                result: "vouloir que, préférer que, souhaiter que, insister pour que, il faut que, il vaut mieux que",
                examples: [
                    { native: "Il faut que tu viennes à la réunion.", translation: "You must come to the meeting." },
                    { native: "Je veux qu'il soit heureux.", translation: "I want him to be happy." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Les formes nous/vous du subjonctif ressemblent à l'imparfait : parlions/parliez. Pour les autres personnes, la plupart des verbes ressemblent au présent — seuls les irréguliers se distinguent visuellement." },
            { type: "warning", content: "N'utilisez jamais le subjonctif après les verbes de certitude : je sais que, il est certain que, je pense que (affirmatif) → indicatif." },
            { type: "forward-ref", content: "Pour le subjonctif après les verbes d'émotion et de doute, voir fr-g-b1-4. Pour les conjonctions, voir fr-g-b1-5.", refId: "fr-g-b1-4" },
        ],
        examples: [
            { native: "Elle préfère qu'on parte plus tôt.", translation: "She prefers that we leave earlier." },
            { native: "Il est important que vous soyez présents.", translation: "It is important that you are present." },
            { native: "Je souhaite que tout se passe bien.", translation: "I hope everything goes well." },
        ],
        inlineVocab: [
            { word: "vouloir que", translation: "to want (sb) to" },
            { word: "préférer que", translation: "to prefer (that)" },
            { word: "il faut que", translation: "it is necessary that" },
            { word: "il vaut mieux que", translation: "it is better that" },
            { word: "souhaiter que", translation: "to wish / hope (that)" },
        ],
    },

    // ── fr-g-b1-4 : Subjonctif — émotion et doute ────────────────────────────
    {
        id: "fr-g-b1-4",
        level: "B1",
        title: "Le subjonctif — émotion et doute",
        explanation: {
            target: `Le subjonctif s'emploie aussi après les verbes d'émotion et de doute. Le principe fondamental : **certitude → indicatif ; subjectivité/incertitude → subjonctif**.

**Verbes d'émotion → subjonctif :**
être content/heureux que, regretter que, avoir peur que, être surpris/étonné que, être déçu que, être soulagé que, trouver dommage que

**Doute/possibilité → subjonctif :**
douter que, il est possible que, il est peu probable que, ne pas croire que, ne pas penser que

**Contraste essentiel avec les verbes de croyance :**
*Je pense qu'il **est** là.* → affirmatif = certitude → **indicatif**
*Je ne pense pas qu'il **soit** là.* → nié = doute → **subjonctif**`,
            native: `The subjunctive is also triggered by emotion and doubt. The underlying principle: **certainty → indicatif; subjectivity/uncertainty → subjonctif**.

**Emotion verbs → subjonctif:**
être content/heureux que, regretter que, avoir peur que, être surpris/étonné que, être déçu que, être soulagé que, trouver dommage que

**Doubt/possibility → subjonctif:**
douter que, il est possible que, il est peu probable que, ne pas croire que, ne pas penser que

**Critical contrast — belief verbs:**
*Je pense qu'il **est** là.* → affirmative = certainty → **indicatif**
*Je ne pense pas qu'il **soit** là.* → negated = doubt → **subjonctif**`,
        },
        rules: [
            {
                condition: "Verbes d'émotion → subjonctif",
                result: "être + adj. que, regretter que, avoir peur que, trouver dommage que...",
                examples: [
                    { native: "Je suis content qu'elle ait réussi.", translation: "I'm glad she succeeded." },
                    { native: "Il regrette que tu ne puisses pas venir.", translation: "He regrets that you can't come." },
                ],
            },
            {
                condition: "Verbe de croyance affirmatif vs nié",
                result: "Affirmatif → indicatif | Nié → subjonctif",
                examples: [
                    { native: "Je pense qu'il est là. → Je ne pense pas qu'il soit là.", speakText: "Je ne pense pas qu'il soit là.", translation: "I don't think he is here." },
                    { native: "Je crois qu'elle viendra. → Je ne crois pas qu'elle vienne.", speakText: "Je ne crois pas qu'elle vienne.", translation: "I don't believe she'll come." },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "Le contraste verbe de croyance affirmatif/nié est rarement enseigné à l'école. je pense que → indicatif. je ne pense pas que → subjonctif. C'est nouveau même pour les apprenants qui ont déjà étudié le français." },
        ],
        examples: [
            { native: "Il est possible qu'il y ait un problème.", translation: "It's possible there's a problem." },
            { native: "Il est étrange qu'il n'ait pas répondu.", translation: "It's strange that he hasn't replied." },
            { native: "Je doute qu'on ait le temps.", translation: "I doubt we have the time." },
        ],
        inlineVocab: [
            { word: "regretter que", translation: "to regret that" },
            { word: "avoir peur que", translation: "to be afraid that" },
            { word: "il est possible que", translation: "it is possible that" },
            { word: "douter que", translation: "to doubt that" },
            { word: "trouver dommage que", translation: "to find it a shame that" },
        ],
    },

    // ── fr-g-b1-5 : Subjonctif — conjonctions ────────────────────────────────
    {
        id: "fr-g-b1-5",
        level: "B1",
        title: "Le subjonctif — conjonctions (pour que, bien que, avant que)",
        explanation: {
            target: `Certaines conjonctions déclenchent toujours le subjonctif.

**But :** pour que / afin que
- Même sujet → pour + infinitif : *Je parle lentement **pour être** compris.*
- Sujets différents → pour que + subjonctif : *Je parle lentement **pour que tu comprennes**.*

**Concession :** bien que / quoique → toujours subjonctif
**Temps (non réalisé) :** avant que, jusqu'à ce que, à moins que, sans que

**Contraste important :** après que + **indicatif** (l'événement s'est déjà produit — c'est réel)
- *avant qu'il **parte*** ✓ (pas encore accompli → subjonctif)
- *après qu'il **est parti*** ✓ (déjà accompli → indicatif)

**Règle pour les examens :** après que + indicatif est la norme. Les deux s'entendent à l'oral.`,
            native: `Several conjunctions always trigger the subjunctive.

**Purpose:** pour que / afin que (so that)
- Same subject → pour + infinitif: *Je parle lentement **pour être** compris.*
- Different subjects → pour que + subjonctif: *Je parle lentement **pour que tu comprennes**.*

**Concession:** bien que / quoique (although) → always subjonctif
**Time (unrealised):** avant que, jusqu'à ce que, à moins que, sans que

**Key contrast:** après que + **indicatif** (the event has happened — it is real)
- *avant qu'il **parte*** ✓ (not yet happened → subjonctif)
- *après qu'il **est parti*** ✓ (already happened → indicatif)

**Exam rule:** après que + indicatif is standard. Both are heard in speech.`,
        },
        rules: [
            {
                condition: "pour que / afin que — but (sujets différents)",
                result: "pour que + subjonctif",
                examples: [
                    { native: "Je t'écris pour que tu saches ce qui s'est passé.", translation: "I'm writing to you so that you know what happened." },
                    { native: "Il parle lentement pour que les étudiants comprennent.", translation: "He speaks slowly so that students understand." },
                ],
            },
            {
                condition: "bien que / quoique — concession (toujours subjonctif)",
                result: "bien que + subjonctif, quelle que soit la certitude",
                examples: [
                    { native: "Bien qu'il soit fatigué, il continue.", translation: "Although he's tired, he continues." },
                ],
            },
            {
                condition: "avant que / à moins que / jusqu'à ce que / sans que",
                result: "Toujours subjonctif — événements non encore réalisés",
                examples: [
                    { native: "Pars avant qu'il soit trop tard.", translation: "Leave before it's too late." },
                    { native: "Je viens, à moins qu'il ne pleuve.", translation: "I'm coming, unless it rains." },
                ],
            },
        ],
        examples: [
            { native: "Elle travaille sans que personne le sache.", translation: "She works without anyone knowing." },
            { native: "Attends jusqu'à ce qu'il arrive.", translation: "Wait until he arrives." },
        ],
        inlineVocab: [
            { word: "pour que / afin que", translation: "so that / in order that" },
            { word: "bien que", translation: "although / even though" },
            { word: "à moins que", translation: "unless" },
            { word: "avant que", translation: "before" },
            { word: "jusqu'à ce que", translation: "until" },
        ],
    },

    // ── fr-g-b1-6 : Subjonctif — superlatif et relatif incertain ─────────────
    {
        id: "fr-g-b1-6",
        level: "B1",
        title: "Le subjonctif — superlatif et relatif incertain",
        explanation: {
            target: `Deux derniers contextes du subjonctif complètent le système B1.

**1. Après les superlatifs et les expressions uniques :** la proposition relative prend le subjonctif car le superlatif exprime un jugement subjectif.
*C'est le meilleur film que j'**aie** jamais vu.*
*C'est la seule personne qui **sache** vraiment m'écouter.*

**2. Référent incertain :** quand on cherche quelque chose qui n'existe peut-être pas.
- Référent connu et existant → **indicatif** : *J'ai trouvé quelqu'un qui **sait** parler japonais.*
- Référent cherché et incertain → **subjonctif** : *Je cherche quelqu'un qui **sache** parler japonais.*

**Bilan complet des déclencheurs B1 :**
Volonté | Émotion | Doute/possibilité | Conjonctions de but | Concession | Conjonctions de temps | Superlatif/unique | Relatif incertain → **subjonctif**
Certitude | Faits | Verbes de croyance affirmatifs → **indicatif**`,
            native: `Two final subjunctive contexts complete the B1 system.

**1. After superlatives and unique expressions:** the relative clause uses subjonctif because the superlative expresses subjective judgement.
*C'est le meilleur film que j'**aie** jamais vu.*
*C'est la seule personne qui **sache** vraiment m'écouter.*

**2. Uncertain referent:** when seeking something that may not exist.
- Known, existing → **indicatif**: *J'ai trouvé quelqu'un qui **sait** parler japonais.*
- Sought, uncertain → **subjonctif**: *Je cherche quelqu'un qui **sache** parler japonais.*

**Complete B1 trigger map:**
Volition | Emotion | Doubt/possibility | Purpose conjunctions | Concession | Time conjunctions | Superlative/unique | Uncertain relative → **subjonctif**
Certainty | Facts | Affirmative belief verbs → **indicatif**`,
        },
        rules: [
            {
                condition: "Superlatif / le seul / le premier → subjonctif",
                result: "Jugement subjectif sur une catégorie",
                examples: [
                    { native: "C'est le meilleur restaurant que je connaisse.", translation: "It's the best restaurant I know." },
                    { native: "C'est la seule solution qui soit possible.", translation: "It's the only solution that's possible." },
                ],
            },
            {
                condition: "Référent incertain (je cherche quelqu'un qui...)",
                result: "Peut ne pas exister → subjonctif | Existe avec certitude → indicatif",
                examples: [
                    { native: "Je cherche quelqu'un qui puisse m'aider.", translation: "I'm looking for someone who can help me." },
                    { native: "J'ai trouvé quelqu'un qui peut m'aider.", translation: "I found someone who can help me." },
                ],
            },
        ],
        examples: [
            { native: "C'est la chose la plus étrange que j'aie jamais entendue.", translation: "It's the strangest thing I've ever heard." },
            { native: "Y a-t-il un endroit où on puisse se garer ?", translation: "Is there a place where we can park?" },
        ],
        inlineVocab: [
            { word: "le seul / l'unique", translation: "the only one" },
            { word: "chercher qqn qui", translation: "to look for sb who" },
            { word: "trouver qqn qui", translation: "to find sb who" },
            { word: "il m'est possible de", translation: "it is possible for me to" },
        ],
    },

    // ── fr-g-b1-18 : Subjonctif passé ────────────────────────────────────────
    {
        id: "fr-g-b1-18",
        level: "B1",
        title: "Le subjonctif passé",
        explanation: {
            target: `Le subjonctif passé s'utilise quand l'action de la proposition subordonnée s'est produite **avant** l'action de la principale. C'est le subjonctif composé.

**Formation :** avoir / être au **subjonctif présent** + participe passé
(Même règle d'auxiliaire que le passé composé.)

| Auxiliaire | Exemple |
|---|---|
| avoir | que j'**aie fini**, que tu **aies vu**, qu'il **ait dit** |
| être | que je **sois parti(e)**, qu'elle **soit venue**, qu'ils **soient restés** |

**Contraste essentiel :**
- *Je suis content qu'il **vienne**.* → subjonctif présent (il vient maintenant / viendra)
- *Je suis content qu'il **soit venu**.* → subjonctif passé (il est venu — c'est dans le passé)`,
            native: `The subjonctif passé is used when the subordinate clause action happened **before** the main clause action. It is the compound subjunctive.

**Formation:** avoir / être in the **subjonctif présent** + past participle
(Same auxiliary rule as passé composé.)

| Auxiliary | Example |
|---|---|
| avoir | que j'**aie fini**, que tu **aies vu**, qu'il **ait dit** |
| être | que je **sois parti(e)**, qu'elle **soit venue**, qu'ils **soient restés** |

**Key contrast:**
- *Je suis content qu'il **vienne**.* → subjonctif présent (he's coming now / will come)
- *Je suis content qu'il **soit venu**.* → subjonctif passé (he came — it's in the past)`,
        },
        conjugationTable: {
            pronouns: ["que je/j'", "que tu", "qu'il/elle", "que nous", "que vous", "qu'ils/elles"],
            verbs: [
                { label: "finir (avoir)", forms: ["aie fini", "aies fini", "ait fini", "ayons fini", "ayez fini", "aient fini"] },
                { label: "partir (être)", forms: ["sois parti(e)", "sois parti(e)", "soit parti(e)", "soyons parti(e)s", "soyez parti(e)(s)", "soient parti(e)s"] },
            ],
        },
        rules: [
            {
                condition: "Verbes d'émotion + événement passé → subjonctif passé",
                result: "L'action de la subordonnée précède celle de la principale",
                examples: [
                    { native: "Je suis content qu'il soit venu. (← il est venu — c'est passé)", speakText: "Je suis content qu'il soit venu.", translation: "I'm glad he came." },
                    { native: "Je regrette que tu n'aies pas pu venir.", translation: "I'm sorry you weren't able to come." },
                    { native: "C'est dommage qu'elle soit partie sans nous dire au revoir.", translation: "It's a shame she left without saying goodbye." },
                ],
            },
            {
                condition: "Bien que / à moins que + action antérieure",
                result: "Subjonctif passé quand l'action de la subordonnée est déjà accomplie",
                examples: [
                    { native: "Bien qu'il ait beaucoup travaillé, il n'a pas réussi.", translation: "Although he worked hard, he didn't succeed." },
                    { native: "Je doute qu'il ait vraiment dit ça.", translation: "I doubt he really said that." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Test rapide : si vous pouvez remplacer que + subjonctif par 'il semble que X SOIT DÉJÀ ARRIVÉ', utilisez le subjonctif passé. C'est content qu'il SOIT VENU (déjà arrivé) ✓." },
            { type: "warning", content: "Pour les apprenants ayant étudié le français à l'école : le subjonctif passé est rarement enseigné dans les programmes scolaires. C'est du nouveau contenu, pas une révision." },
        ],
        examples: [
            { native: "Elle est surprise qu'il ait réussi si vite.", translation: "She's surprised he succeeded so quickly." },
            { native: "Il est possible qu'elle soit déjà arrivée.", translation: "It's possible she's already arrived." },
            { native: "Je suis soulagé que tout se soit bien passé.", translation: "I'm relieved everything went well." },
        ],
        inlineVocab: [
            { word: "que j'aie fait", translation: "that I have done (subj. passé)" },
            { word: "que tu sois venu(e)", translation: "that you came (subj. passé)" },
            { word: "être soulagé(e) que", translation: "to be relieved that" },
            { word: "il est possible que", translation: "it is possible that" },
        ],
    },
]
