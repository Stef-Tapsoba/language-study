import { GrammarLesson } from "../../../../types"

// Block 3 — "Et si... / Ce qui aurait pu être" (Units 8–10)
// Grammar: Si clauses types 2 & 3, double pronouns, dont/lequel/ce qui/ce que

export const block3Lessons: GrammarLesson[] = [
    // ── fr-g-b1-7 : Si clauses type 2 & 3 + conditionnel passé ───────────────
    {
        id: "fr-g-b1-7",
        level: "B1",
        title: "Si clauses — types 2 et 3 + conditionnel passé",
        explanation: {
            target: `Le B1 ajoute deux types de propositions conditionnelles au type 1 que vous connaissez depuis l'A2.

**Type 1 (A2) :** si + présent → futur simple — condition réelle/probable
**Type 2 (B1) :** si + imparfait → conditionnel présent — hypothèse dans le présent
**Type 3 (B1) :** si + plus-que-parfait → conditionnel passé — contrefactuel dans le passé

**Formation du conditionnel passé :** conditionnel d'avoir/être + participe passé

**Conditionnel passé autonome (regret/reproche) :**
*J'**aurais dû** te le dire plus tôt.* | *Tu **aurais pu** demander !*

**Usage journalistique (information non vérifiée) :** *Il **aurait démissionné** hier.*`,
            native: `B1 adds two conditional types to the Type 1 you know from A2.

**Type 1 (A2):** si + présent → futur simple — real/likely condition
**Type 2 (B1):** si + imparfait → conditionnel présent — hypothetical present
**Type 3 (B1):** si + plus-que-parfait → conditionnel passé — counterfactual past

**Conditionnel passé = conditionnel of avoir/être + past participle**

**Standalone conditionnel passé (regret/reproach):**
*J'**aurais dû** te le dire plus tôt.* | *Tu **aurais pu** demander !*

**Journalistic use (unverified info):** *Il **aurait démissionné** hier.* (allegedly resigned)`,
        },
        conjugationTable: {
            pronouns: ["j'/je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            verbs: [
                { label: "conditionnel passé (verbes avoir)", forms: ["aurais fait", "aurais fait", "aurait fait", "aurions fait", "auriez fait", "auraient fait"] },
                { label: "conditionnel passé (verbes être)", forms: ["serais parti(e)", "serais parti(e)", "serait parti(e)", "serions parti(e)s", "seriez parti(e)(s)", "seraient parti(e)s"] },
            ],
        },
        rules: [
            {
                condition: "Type 2 — hypothèse dans le présent",
                result: "si + imparfait → conditionnel présent",
                examples: [
                    { native: "Si j'avais le temps, je voyagerais plus.", translation: "If I had the time, I would travel more." },
                    { native: "Si elle était là, ça serait différent.", translation: "If she were here, it would be different." },
                ],
            },
            {
                condition: "Type 3 — contrefactuel dans le passé",
                result: "si + plus-que-parfait → conditionnel passé",
                examples: [
                    { native: "Si j'avais su, j'aurais agi différemment.", translation: "If I had known, I would have acted differently." },
                    { native: "Si tu n'avais pas dit ça, rien ne serait arrivé.", translation: "If you hadn't said that, nothing would have happened." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Expressions à haute fréquence : j'aurais dû (I should have), j'aurais pu (I could have), j'aurais voulu (I would have liked). Mémorisez-les comme des expressions fixes." },
            { type: "warning", content: "Ne mettez jamais le conditionnel ou le futur dans la proposition en si. La proposition en si prend toujours l'imparfait (type 2) ou le plus-que-parfait (type 3)." },
        ],
        examples: [
            { native: "J'aurais dû partir plus tôt.", translation: "I should have left earlier." },
            { native: "Si tu avais travaillé, tu aurais réussi.", translation: "If you had worked, you would have passed." },
        ],
        inlineVocab: [
            { word: "j'aurais dû", translation: "I should have" },
            { word: "j'aurais pu", translation: "I could have" },
            { word: "si seulement", translation: "if only" },
            { word: "à l'époque", translation: "at the time" },
            { word: "selon", translation: "according to" },
        ],
    },

    // ── fr-g-b1-8 : Double pronouns ──────────────────────────────────────────
    {
        id: "fr-g-b1-8",
        level: "B1",
        title: "Les pronoms compléments combinés (double pronouns)",
        explanation: {
            target: `Quand une phrase contient à la fois un pronom COD et un pronom COI, ils apparaissent dans un ordre fixe avant le verbe.

**Ordre :**
me / te / se / nous / vous → le / la / les → lui / leur → y → en

**Combinaisons les plus fréquentes :**
- le/la/les + lui/leur : *Je **le lui** donne.*
- me/te/nous/vous + le/la/les : *Il **me le** dit.*

**Dans les temps composés :** les deux pronoms se placent avant l'auxiliaire.
**Accord du PP :** quand le COD (le/la/les) précède avoir, le participe s'accorde.

**Impératif affirmatif :** les pronoms s'attachent après le verbe (moi/toi à la place de me/te) :
*Donne-**le**-**moi**.* | *Dis-**le**-**lui**.*

**Impératif négatif :** pronoms avant le verbe, ordre normal :
*Ne **me le** dis pas.*`,
            native: `When a sentence has both a direct object (COD) and indirect object (COI) pronoun, they appear in a fixed order before the verb.

**Order:**
me / te / se / nous / vous → le / la / les → lui / leur → y → en

**Most common combinations:**
- le/la/les + lui/leur: *Je **le lui** donne.*
- me/te/nous/vous + le/la/les: *Il **me le** dit.*

**In compound tenses:** both pronouns go before the auxiliary.
**PP agreement:** when COD (le/la/les) precedes avoir, the past participle agrees.

**Affirmative imperatives:** pronouns attach after the verb (moi/toi instead of me/te):
*Donne-**le**-**moi**.* | *Dis-**le**-**lui**.*

**Negative imperatives:** pronouns before the verb, normal order:
*Ne **me le** dis pas.*`,
        },
        rules: [
            {
                condition: "COD (le/la/les) avant COI (lui/leur) — 3e personne",
                result: "le/la/les toujours avant lui/leur",
                examples: [
                    { native: "Je la lui ai dite. (la vérité → à Marie)", speakText: "Je la lui ai dite.", translation: "I told it to her." },
                    { native: "Je le leur enverrai demain.", translation: "I'll send it to them tomorrow." },
                ],
            },
            {
                condition: "me/te/nous/vous avant le/la/les — 1re et 2e personne",
                result: "me/te/nous/vous toujours en premier",
                examples: [
                    { native: "Il me le donne.", translation: "He gives it to me." },
                    { native: "Elle te la montrera.", translation: "She'll show it to you." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "À l'impératif affirmatif, moi et toi remplacent me et te : Donne-le-moi (pas Donne-le-me). Le trait d'union relie le verbe aux pronoms." },
            { type: "warning", content: "Accord du PP : quand le COD (le/la/les) précède avoir, le PP s'accorde en genre/nombre. Les lettres qu'il a envoy-ées. (fém. plur.)" },
        ],
        examples: [
            { native: "Tu me le passes, s'il te plaît ?", translation: "Can you pass it to me, please?" },
            { native: "Ne le lui dis pas.", translation: "Don't tell it to him/her." },
            { native: "Donne-le-moi !", translation: "Give it to me!" },
        ],
        inlineVocab: [
            { word: "passer (qqch à qqn)", translation: "to pass (sth to sb)" },
            { word: "rendre (qqch à qqn)", translation: "to return (sth to sb)" },
            { word: "montrer (qqch à qqn)", translation: "to show (sth to sb)" },
            { word: "de ma part", translation: "on my behalf" },
        ],
    },

    // ── fr-g-b1-9 : Dont, lequel, ce qui / ce que ────────────────────────────
    {
        id: "fr-g-b1-9",
        level: "B1",
        title: "Dont, lequel, ce qui / ce que",
        explanation: {
            target: `Ces pronoms relatifs permettent de relier des idées impliquant des prépositions ou des références abstraites.

**Dont** = remplace *de + nom* dans la proposition relative.
Test : est-ce que je peux dire *de + ce nom* ici ? → utilisez *dont*.
*C'est la personne **dont** je t'ai parlé.* (j'ai parlé **de** cette personne)
*Dont* exprime aussi la possession : *un ami **dont** le père est médecin*

**Lequel/laquelle/lesquels/lesquelles** = après d'autres prépositions que de :
*Le stylo **avec lequel** j'ai signé. | La raison **pour laquelle** je suis venu.*
Contractions : *à + lequel → auquel | à + lesquels → auxquels | de + lequel → duquel*

**Ce qui / ce que / ce dont** = référence abstraite (une idée entière, pas un nom précis) :
*Ce qui m'intéresse, c'est...* (sujet) | *Ce que je veux, c'est...* (objet) | *Ce dont j'ai besoin, c'est...* (avec de)`,
            native: `These relative pronouns connect ideas involving prepositions and abstract references.

**Dont** = replaces *de + noun* in the relative clause.
Test: can I say *de + this noun* here? → use *dont*.
*C'est la personne **dont** je t'ai parlé.* (j'ai parlé **de** cette personne)
*Dont* also expresses possession (= whose): *un ami **dont** le père est médecin*

**Lequel/laquelle/lesquels/lesquelles** = after prepositions other than de:
*Le stylo **avec lequel** j'ai signé. | La raison **pour laquelle** je suis venu.*
Contractions: *à + lequel → auquel | à + lesquels → auxquels | de + lequel → duquel*

**Ce qui / ce que / ce dont** = abstract reference (a whole idea, not a specific noun):
*Ce qui m'intéresse, c'est...* (subject) | *Ce que je veux, c'est...* (object) | *Ce dont j'ai besoin, c'est...* (with de)`,
        },
        rules: [
            {
                condition: "Dont — remplace de + nom",
                result: "Test : 'de + nom' → dont",
                examples: [
                    { native: "C'est le livre dont j'ai besoin. (← j'ai besoin DE ce livre)", speakText: "C'est le livre dont j'ai besoin.", translation: "It's the book I need." },
                    { native: "Un ami dont le père est médecin.", translation: "A friend whose father is a doctor." },
                ],
            },
            {
                condition: "Ce qui / ce que / ce dont — référence abstraite",
                result: "Réfère à une idée entière ; ce qui = sujet, ce que = objet, ce dont = avec de",
                examples: [
                    { native: "Ce qui me plaît, c'est l'ambiance.", translation: "What I like is the atmosphere." },
                    { native: "Ce dont j'ai besoin, c'est du temps.", translation: "What I need is time." },
                ],
            },
        ],
        examples: [
            { native: "La ville dont il rêve est Lyon.", translation: "The city he dreams of is Lyon." },
            { native: "Le collègue avec lequel j'ai travaillé est parti.", translation: "The colleague I worked with has left." },
        ],
        inlineVocab: [
            { word: "avoir besoin de", translation: "to need" },
            { word: "être fier/fière de", translation: "to be proud of" },
            { word: "se souvenir de", translation: "to remember" },
            { word: "s'occuper de", translation: "to take care of" },
            { word: "ce qui m'intéresse", translation: "what interests me" },
        ],
    },

    // ── fr-g-b1-19 : Futur antérieur ─────────────────────────────────────────
    {
        id: "fr-g-b1-19",
        level: "B1",
        title: "Le futur antérieur",
        explanation: {
            target: `Le futur antérieur exprime une action qui sera **accomplie avant** un autre moment futur — ou une **supposition** sur un événement passé.

**Formation :** avoir / être au **futur simple** + participe passé
(Même règle d'auxiliaire que le passé composé.)

**Emploi 1 — Action future accomplie avant une autre**
Après *quand, dès que, lorsque, aussitôt que*, le français exige le futur antérieur (pas le présent, pas le subjonctif) :
*Quand tu **auras fini**, tu pourras sortir.*
*Dès qu'il **sera arrivé**, on commencera.*

⚠️ L'anglais utilise ici le present perfect : "when you *have* finished". En français → futur antérieur.

**Emploi 2 — Supposition sur le passé**
*Il n'est pas là — il **aura oublié**. (Il a dû oublier.)*`,
            native: `The futur antérieur expresses an action that will be **completed before** another future moment — or a **supposition** about a past event.

**Formation:** avoir / être in the **futur simple** + past participle
(Same auxiliary rule as passé composé.)

**Use 1 — Future action completed before another**
After *quand, dès que, lorsque, aussitôt que*, French requires the futur antérieur (not the present, not the subjunctive):
*Quand tu **auras fini**, tu pourras sortir.*
*Dès qu'il **sera arrivé**, on commencera.*

⚠️ English uses present perfect here: "when you *have* finished". French → futur antérieur.

**Use 2 — Supposition about the past**
*Il n'est pas là — il **aura oublié**. (He must have forgotten.)*`,
        },
        conjugationTable: {
            pronouns: ["j'/je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            verbs: [
                { label: "finir (avoir)", forms: ["aurai fini", "auras fini", "aura fini", "aurons fini", "aurez fini", "auront fini"] },
                { label: "partir (être)", forms: ["serai parti(e)", "seras parti(e)", "sera parti(e)", "serons parti(e)s", "serez parti(e)(s)", "seront parti(e)s"] },
            ],
        },
        rules: [
            {
                condition: "Quand / dès que / lorsque / aussitôt que + futur",
                result: "Action à compléter AVANT l'autre → futur antérieur (pas présent, pas subjonctif)",
                examples: [
                    { native: "Appelle-moi dès que tu seras arrivé(e).", translation: "Call me as soon as you've arrived." },
                    { native: "Je t'enverrai le rapport quand j'aurai eu les résultats.", translation: "I'll send you the report once I've received the results." },
                ],
            },
            {
                condition: "Supposition sur le passé récent",
                result: "Futur antérieur = 'he must have...' / 'she's probably...'",
                examples: [
                    { native: "Elle ne répond pas — elle sera partie.", translation: "She's not answering — she must have left." },
                    { native: "Il aura oublié notre rendez-vous.", translation: "He must have forgotten our appointment." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Contraste à retenir : si + PQP → conditionnel passé (contrefactuel) vs quand + futur antérieur → futur simple (séquence future réelle)." },
            { type: "warning", content: "Ne mettez jamais le présent après quand/dès que pour une action future qui précède une autre. 'Quand tu finiras' ✗ → 'Quand tu auras fini' ✓ (si l'action doit être accomplie avant)." },
        ],
        examples: [
            { native: "Quand j'aurai fini mes études, je voyagerai.", translation: "When I've finished my studies, I'll travel." },
            { native: "Dès qu'il sera sorti, nous pourrons parler.", translation: "As soon as he's gone, we'll be able to talk." },
            { native: "Tu auras oublié tout ça dans six mois.", translation: "You'll have forgotten all this in six months." },
        ],
        inlineVocab: [
            { word: "dès que", translation: "as soon as" },
            { word: "lorsque", translation: "when (formal)" },
            { word: "aussitôt que", translation: "as soon as" },
            { word: "une fois que", translation: "once / when (completed)" },
        ],
    },

    // ── fr-g-b1-20 : Mise en relief (c'est...qui / c'est...que) ──────────────
    {
        id: "fr-g-b1-20",
        level: "B1",
        title: "La mise en relief — c'est…qui / c'est…que",
        explanation: {
            target: `La mise en relief (ou phrase clivée) permet de mettre l'accent sur un élément de la phrase en le déplaçant en tête.

**c'est + [élément mis en relief] + qui** → on met l'accent sur le **sujet**
*C'est **lui** qui l'a fait.* (pas quelqu'un d'autre — lui)

**c'est + [élément mis en relief] + que** → on met l'accent sur le **complément** (objet, temps, lieu)
*C'est **toi** que j'attendais.* | *C'est **en mars** qu'il est arrivé.*

**Lien avec ce qui / ce que (fr-g-b1-9) :**
- *Ce qui* et *ce que* → référent abstrait (une idée) : *Ce qui m'inquiète, c'est l'échéance.*
- *C'est...qui/que* → référent concret mis en valeur : *C'est l'échéance qui m'inquiète.*`,
            native: `The cleft sentence (*phrase clivée*) emphasises one element of a sentence by fronting it.

**c'est + [element] + qui** → emphasises the **subject**
*C'est **lui** qui l'a fait.* (not someone else — him)

**c'est + [element] + que** → emphasises the **object, time, or place**
*C'est **toi** que j'attendais.* | *C'est **en mars** qu'il est arrivé.*

**Link to ce qui / ce que (fr-g-b1-9):**
- *Ce qui / ce que* → abstract referent (a whole idea): *Ce qui m'inquiète, c'est l'échéance.*
- *C'est...qui/que* → concrete element foregrounded: *C'est l'échéance qui m'inquiète.*`,
        },
        rules: [
            {
                condition: "C'est + sujet mis en valeur + qui",
                result: "Le pronom / nom mis en relief est le sujet de la relative qui suit",
                examples: [
                    { native: "C'est Paul qui a tout organisé. (← Paul a organisé)", speakText: "C'est Paul qui a tout organisé.", translation: "It's Paul who organised everything." },
                    { native: "C'est ça qui m'inquiète.", translation: "It's that which worries me." },
                ],
            },
            {
                condition: "C'est + complément mis en valeur + que",
                result: "COD, lieu, temps — tout complément (sauf sujet) → que",
                examples: [
                    { native: "C'est toi que j'attendais depuis le début.", speakText: "C'est toi que j'attendais.", translation: "You are the one I've been waiting for." },
                    { native: "C'est en France qu'il a appris le métier.", translation: "It's in France that he learned the trade." },
                ],
            },
            {
                condition: "Pluriel et négation",
                result: "Ce sont + pluriel | Ce n'est pas + singulier",
                examples: [
                    { native: "Ce sont eux qui ont décidé.", translation: "It's them who decided." },
                    { native: "Ce n'est pas moi qui l'ai dit.", translation: "It wasn't me who said it." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Test rapide pour choisir entre qui et que : reformulez sans mise en relief. Si l'élément est sujet → qui. S'il est objet/complément → que. 'LUI a fait' → sujet → c'est lui QUI. 'J'attendais TOI' → objet → c'est toi QUE." },
        ],
        examples: [
            { native: "C'est ce voyage qui a tout changé pour moi.", translation: "It's this trip that changed everything for me." },
            { native: "C'est la flexibilité que je recherche.", translation: "It's flexibility that I'm looking for." },
            { native: "Ce n'est pas le prix qui me dérange, c'est le principe.", translation: "It's not the price that bothers me, it's the principle." },
        ],
        inlineVocab: [
            { word: "c'est...qui", translation: "it is...who/that (subject emphasis)" },
            { word: "c'est...que", translation: "it is...that (object emphasis)" },
            { word: "ce sont...qui", translation: "it is (pl.)...who" },
            { word: "ce n'est pas...qui", translation: "it is not...who" },
        ],
    },
]
