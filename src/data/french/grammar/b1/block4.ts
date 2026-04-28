import { GrammarLesson } from "../../../../types"

// Block 4 — "Rapporter, nuancer, expliquer" (Units 11–13)
// Grammar: Reported speech, gérondif, B1 logical connectors

export const block4Lessons: GrammarLesson[] = [
    // ── fr-g-b1-10 : Discours indirect ───────────────────────────────────────
    {
        id: "fr-g-b1-10",
        level: "B1",
        title: "Le discours indirect (reported speech)",
        explanation: {
            target: `Le discours indirect transforme ce que quelqu'un a dit en une proposition subordonnée, avec une concordance des temps quand le verbe introducteur est au passé.

**Déclaration :** *Il a dit qu'il **était** fatigué.* (← "Je **suis** fatigué.")
**Question oui/non :** si + proposition : *Elle m'a demandé **si** j'avais mangé.*
**Question avec mot interrogatif :** conserver le mot interrogatif + ordre normal (pas d'inversion, pas d'est-ce que) : *Il a voulu savoir **où** j'allais.*
**Ordre/commande :** de + infinitif : *Elle m'a dit **de fermer** la porte.*

**Concordance des temps (verbe introducteur au passé) :**
présent → imparfait | passé composé → plus-que-parfait | futur → conditionnel | imparfait → imparfait (inchangé)

**Pas de concordance quand le verbe introducteur est au présent :** *Il dit qu'il est fatigué.* ✓`,
            native: `Reported speech converts what someone said into a subordinate clause, with tense backshift when the reporting verb is past.

**Statements:** *Il a dit qu'il **était** fatigué.* (← "Je **suis** fatigué.")
**Yes/no questions:** si + clause: *Elle m'a demandé **si** j'avais mangé.*
**Wh-questions:** keep the question word + normal word order (no inversion, no est-ce que): *Il a voulu savoir **où** j'allais.*
**Commands:** de + infinitif: *Elle m'a dit **de fermer** la porte.*

**Tense backshift (when reporting verb is past):**
présent → imparfait | passé composé → plus-que-parfait | futur → conditionnel | imparfait → unchanged

**No backshift when reporting verb is present:** *Il dit qu'il est fatigué.* ✓`,
        },
        rules: [
            {
                condition: "Déclarations → que + concordance des temps",
                result: "Un temps en arrière quand le verbe introducteur est au passé",
                examples: [
                    { native: "Elle a dit qu'elle viendrait. (← 'je viendrai')", speakText: "Elle a dit qu'elle viendrait.", translation: "She said she would come." },
                    { native: "Il a expliqué qu'il avait oublié. (← 'j'ai oublié')", speakText: "Il a expliqué qu'il avait oublié.", translation: "He explained he had forgotten." },
                ],
            },
            {
                condition: "Questions → si (oui/non) / mot interrogatif + ordre normal",
                result: "Pas d'inversion, pas d'est-ce que, pas de point d'interrogation au discours indirect",
                examples: [
                    { native: "Elle m'a demandé si je voulais partir.", translation: "She asked if I wanted to leave." },
                    { native: "Il a voulu savoir où j'habitais.", translation: "He wanted to know where I lived." },
                ],
            },
            {
                condition: "Ordres → de + infinitif",
                result: "Pas que + subjonctif (contrairement à l'espagnol/l'italien)",
                examples: [
                    { native: "Il m'a dit de ne pas faire de bruit.", translation: "He told me not to make noise." },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "qu'est-ce que → ce que au discours indirect. 'Qu'est-ce que tu veux ?' → Il a demandé ce que je voulais. Ne gardez jamais est-ce que au discours indirect." },
        ],
        examples: [
            { native: "Il m'a dit qu'il était désolé.", translation: "He told me he was sorry." },
            { native: "Elle a voulu savoir pourquoi j'avais changé d'avis.", translation: "She wanted to know why I had changed my mind." },
        ],
        inlineVocab: [
            { word: "affirmer que", translation: "to claim / assert that" },
            { word: "préciser que", translation: "to specify that" },
            { word: "le lendemain", translation: "the next day" },
            { word: "à ce moment-là", translation: "at that moment" },
            { word: "la veille", translation: "the day before" },
        ],
    },

    // ── fr-g-b1-11 : Gérondif ────────────────────────────────────────────────
    {
        id: "fr-g-b1-11",
        level: "B1",
        title: "Le gérondif (en + participe présent)",
        explanation: {
            target: `Le gérondif exprime une action simultanée, la manière ou la condition en une seule forme compacte.

**Formation :** en + forme nous → supprimer -ons → ajouter -ant
Irréguliers : être → *en étant* | avoir → *en ayant* | savoir → *en sachant*

**Trois emplois :**
1. **Simultanéité (pendant que) :** *Elle écoute de la musique **en travaillant**.*
2. **Manière (en/comment) :** *Il a réussi **en travaillant** dur.*
3. **Condition (si/en) :** ***En partant** tôt, tu éviteras les embouteillages.*

**Règle importante :** le sujet du gérondif doit être le **même** que le sujet de la proposition principale.
✓ *En lisant, j'apprends.* | ✗ *En lisant, le soleil s'est couché.*

**Tout en + gérondif** = même en faisant (simultanéité + légère opposition)`,
            native: `The gérondif expresses simultaneous action, manner, and condition in a single compact form.

**Formation:** en + nous-form → remove -ons → add -ant
Irregular: être → *en étant* | avoir → *en ayant* | savoir → *en sachant*

**Three uses:**
1. **Simultaneous (while):** *Elle écoute de la musique **en travaillant**.*
2. **Manner (by/how):** *Il a réussi **en travaillant** dur.*
3. **Condition (if/by):** ***En partant** tôt, tu éviteras les embouteillages.*

**Rule:** The gérondif's subject must be the **same** as the main clause subject.
✓ *En lisant, j'apprends.* | ✗ *En lisant, le soleil s'est couché.*

**Tout en + gérondif** = even while (simultaneous + slight contrast)`,
        },
        rules: [
            {
                condition: "Formation : en + forme en -ant (base = forme nous)",
                result: "forme nous au présent → supprimer -ons → ajouter -ant",
                heuristic: "parler → parlons → parlant → en parlant | faire → faisons → faisant → en faisant | prendre → prenons → prenant → en prenant",
                examples: [
                    { native: "Il a appris le français en regardant des films.", translation: "He learned French by watching films." },
                    { native: "Tout en comprenant le problème, il refuse d'agir.", translation: "Even while understanding the problem, he refuses to act." },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "La règle du même sujet est souvent enfreinte. Vérifiez toujours : qui fait l'action du gérondif ? C'est forcément la même personne que le sujet du verbe principal." },
            { type: "culture", content: "Le gérondif est considéré comme une construction élégante dans les manuels de style français — l'utiliser montre une conscience stylistique." },
        ],
        examples: [
            { native: "En marchant, j'ai réfléchi à tout ça.", translation: "While walking, I thought about all that." },
            { native: "Tu apprendras mieux en pratiquant tous les jours.", translation: "You'll learn better by practising every day." },
            { native: "En rentrant chez moi, j'ai vu mon voisin.", translation: "On the way home, I saw my neighbour." },
        ],
        inlineVocab: [
            { word: "en rentrant", translation: "on the way home" },
            { word: "en passant", translation: "in passing / while passing" },
            { word: "en attendant", translation: "while waiting / in the meantime" },
            { word: "tout en + gérondif", translation: "even while / at the same time" },
        ],
    },

    // ── fr-g-b1-12 : Connecteurs logiques B1 ─────────────────────────────────
    {
        id: "fr-g-b1-12",
        level: "B1",
        title: "Les connecteurs logiques B1",
        explanation: {
            target: `Les connecteurs du B1 vont bien au-delà de *mais* et *donc* pour exprimer la cause, la conséquence, la concession et l'opposition avec précision.

**Cause :**
- *puisque* — raison déjà connue des deux interlocuteurs : *Puisque tu es là, tu peux m'aider.*
- *étant donné que / vu que* — étant donné que : *Étant donné les circonstances...*

**Conséquence :**
- *c'est pourquoi* — c'est pourquoi : *C'est pourquoi j'ai décidé de partir.*
- *si bien que* — à tel point que : *Il a travaillé toute la nuit, si bien qu'il était épuisé.*
- *du coup* — du coup (oral) : *Du coup, j'ai raté le bus.*

**Concession :**
- *pourtant* — pourtant : *Il était fatigué, pourtant il a continué.*
- *cependant / néanmoins* — cependant (formel)

**Opposition :**
- *alors que / tandis que* — alors que (comparaison contrastive)
- *en revanche* — en revanche (formel)`,
            native: `B1 connectors go well beyond *mais* and *donc* to articulate cause, consequence, concession, and opposition with precision.

**Cause:**
- *puisque* — since (reason already known to both): *Puisque tu es là, tu peux m'aider.*
- *étant donné que / vu que* — given that: *Étant donné les circonstances...*

**Consequence:**
- *c'est pourquoi* — that is why: *C'est pourquoi j'ai décidé de partir.*
- *si bien que* — so much so that: *Il a travaillé toute la nuit, si bien qu'il était épuisé.*
- *du coup* — so / as a result (spoken): *Du coup, j'ai raté le bus.*

**Concession:**
- *pourtant* — yet / however: *Il était fatigué, pourtant il a continué.*
- *cependant / néanmoins* — however (formal)

**Opposition:**
- *alors que / tandis que* — whereas (comparing contrasts)
- *en revanche* — on the other hand (formal)`,
        },
        rules: [
            {
                condition: "Puisque vs parce que — distinction importante",
                result: "parce que = nouvelle information | puisque = raison déjà partagée/connue",
                examples: [
                    { native: "Puisque tu es là, aide-moi. (→ on sait tous les deux que tu es là)", speakText: "Puisque tu es là, aide-moi.", translation: "Since you're here (anyway), help me." },
                    { native: "Je reste parce qu'il pleut. (→ nouvelle raison pour l'interlocuteur)", speakText: "Je reste parce qu'il pleut.", translation: "I'm staying because it's raining." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Du coup et par contre sont de l'oral/informel — à éviter à l'écrit formel. Utilisez plutôt donc, c'est pourquoi, en revanche." },
            { type: "culture", content: "Le discours académique français valorise le modèle thèse-antithèse-synthèse. Certes... mais / pourtant / cependant signalent l'étape antithèse." },
        ],
        examples: [
            { native: "Il était malade, c'est pourquoi il n'est pas venu.", translation: "He was ill — that's why he didn't come." },
            { native: "Elle travaille beaucoup, pourtant elle trouve le temps de sortir.", translation: "She works a lot, yet she finds time to go out." },
            { native: "Paris est touristique, alors que Lyon est plus calme.", translation: "Paris is touristy, whereas Lyon is calmer." },
        ],
        inlineVocab: [
            { word: "puisque", translation: "since (known reason)" },
            { word: "c'est pourquoi", translation: "that is why" },
            { word: "si bien que", translation: "so much so that" },
            { word: "pourtant", translation: "yet / however" },
            { word: "alors que", translation: "whereas / while" },
        ],
    },

    // ── fr-g-b1-21 : Infinitif passé ─────────────────────────────────────────
    {
        id: "fr-g-b1-21",
        level: "B1",
        title: "L'infinitif passé (après avoir / après être)",
        explanation: {
            target: `L'infinitif passé exprime une action **antérieure et accomplie** par le même sujet que la proposition principale.

**Formation :** avoir / être à l'**infinitif** + participe passé
*avoir fini | être parti(e) | s'être levé(e)*

**Emploi 1 — après *après*** (le plus fréquent)
*Après **avoir fini** son travail, il est sorti.*
*Après **être arrivée**, elle a appelé sa mère.*
*Après **s'être levé**, il a préparé le café.*

**Emploi 2 — après *sans avoir / sans être***
*Il est parti **sans avoir dit** au revoir.*

**Emploi 3 — après *pour avoir / pour être*** (cause)
*Il a été sanctionné **pour avoir triché**.*

**Règle du même sujet :** obligatoire — le sujet de l'infinitif passé = sujet de la principale.
✓ *Après avoir mangé, je suis allé me coucher.*
✗ *Après avoir mangé, le film a commencé.* → *Après que le film a commencé...*

**Accord du PP :** même règles que le PC (être → accord avec sujet ; avoir → accord avec COD précédent).`,
            native: `The infinitif passé expresses a **prior completed action** by the same subject as the main clause.

**Formation:** avoir / être in the **infinitive** + past participle
*avoir fini | être parti(e) | s'être levé(e)*

**Use 1 — after *après*** (most common)
*Après **avoir fini** son travail, il est sorti.*
*Après **être arrivée**, elle a appelé sa mère.*
*Après **s'être levé**, il a préparé le café.*

**Use 2 — after *sans avoir / sans être***
*Il est parti **sans avoir dit** au revoir.*

**Use 3 — after *pour avoir / pour être*** (cause)
*Il a été sanctionné **pour avoir triché**.*

**Same-subject rule:** mandatory — the infinitif passé subject must equal the main clause subject.
✓ *Après avoir mangé, je suis allé me coucher.*
✗ *Après avoir mangé, le film a commencé.* → *Après que le film a commencé...*

**PP agreement:** same rules as PC (être → agrees with subject; avoir → agrees with preceding COD).`,
        },
        rules: [
            {
                condition: "Après + infinitif passé — séquence d'actions",
                result: "Action accomplie AVANT → infinitif passé | Même sujet obligatoire",
                heuristic: "après avoir + PP (verbes avoir) | après être + PP (verbes être) | après s'être + PP (réfléchis)",
                examples: [
                    { native: "Après avoir pris sa douche, elle s'est habillée.", speakText: "Après avoir pris sa douche, elle s'est habillée.", translation: "After taking a shower, she got dressed." },
                    { native: "Après être sortis, ils ont réalisé qu'il pleuvait.", translation: "After going out, they realised it was raining." },
                ],
            },
            {
                condition: "Gérondif (simultanéité) vs infinitif passé (antériorité)",
                result: "En + -ant = simultané | Après avoir + PP = accompli avant",
                examples: [
                    { native: "En sortant, il a croisé Paul. (pendant qu'il sortait)", translation: "While going out, he ran into Paul. (simultaneous)" },
                    { native: "Après être sorti, il a croisé Paul. (une fois sorti)", translation: "After going out, he ran into Paul. (prior action)" },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "Erreur fréquente : sujets différents. 'Après avoir mangé, le film a commencé.' ✗ Le film ne mange pas. Utilisez 'Après que nous avons mangé, le film a commencé.' ✓" },
            { type: "tip", content: "L'infinitif passé se forme exactement comme le passé composé — mais avec l'infinitif de l'auxiliaire (avoir / être) plutôt que sa forme conjuguée." },
        ],
        examples: [
            { native: "Après avoir réfléchi, j'ai décidé d'accepter l'offre.", translation: "After thinking it over, I decided to accept the offer." },
            { native: "Elle m'a remercié pour avoir aidé.", translation: "She thanked me for helping." },
            { native: "Il est parti sans s'être excusé.", translation: "He left without having apologised." },
        ],
        inlineVocab: [
            { word: "après avoir + PP", translation: "after having done (avoir verbs)" },
            { word: "après être + PP", translation: "after having gone/come/... (être verbs)" },
            { word: "sans avoir + PP", translation: "without having done" },
            { word: "pour avoir + PP", translation: "for having done" },
        ],
    },
]
