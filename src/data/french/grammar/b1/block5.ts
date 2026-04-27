import { GrammarLesson } from "../../../../types"

// Block 5 — "Le français authentique" (Units 14–17)
// Grammar: Faire causatif + perception verbs, B1 discourse structure, grammar bridge

export const block5Lessons: GrammarLesson[] = [
    // ── fr-g-b1-13 : Faire causatif + verbes de perception ───────────────────
    {
        id: "fr-g-b1-13",
        level: "B1",
        title: "Faire causatif et verbes de perception + infinitif",
        explanation: {
            target: `Deux constructions compactes qui apparaissent constamment en français authentique.

**Faire causatif :** faire + infinitif = faire faire quelque chose / faire faire quelque chose à quelqu'un
*Je **fais réparer** ma voiture.* | *Ça **m'a fait rire**.*
- Le pronom COD se place AVANT faire : *Je **la** fais réparer.*
- Le participe passé de *fait* est **invariable** dans le causatif : *la voiture que j'ai **fait** réparer* (pas réparée)

**Laisser + infinitif :** laisser faire : *Laisse-le parler.*

**Verbes de perception + infinitif** (voir, entendre, sentir, écouter, regarder) :
*J'**entends** quelqu'un **chanter**.* | *Je **l'**ai **vu** partir.*
- Le pronom se place AVANT le verbe de perception.
- Le gérondif est tout aussi correct : *je l'entends **chantant** / **chanter***`,
            native: `Two compact structures that appear constantly in authentic French.

**Faire causatif:** faire + infinitif = to have something done / to make someone do something
*Je **fais réparer** ma voiture.* | *Ça **m'a fait rire**.*
- Object pronoun goes BEFORE faire: *Je **la** fais réparer.*
- Past participle of *fait* is **invariable** in causative: *la voiture que j'ai **fait** réparer* (not réparée)

**Laisser + infinitif:** to let / allow: *Laisse-le parler.*

**Verbs of perception + infinitif** (voir, entendre, sentir, écouter, regarder):
*J'**entends** quelqu'un **chanter**.* | *Je **l'**ai **vu** partir.*
- Pronoun goes BEFORE the perception verb.
- Gérondif is equally correct: *je l'entends **chantant** / **chanter***`,
        },
        rules: [
            {
                condition: "Faire causatif — faire faire quelque chose",
                result: "faire + infinitif | pronom avant faire | fait invariable",
                examples: [
                    { native: "Je fais couper mes cheveux. → Je les fais couper.", speakText: "Je fais couper mes cheveux.", translation: "I'm having my hair cut." },
                    { native: "Elle a fait construire une maison.", translation: "She had a house built." },
                ],
            },
            {
                condition: "Verbe de perception + objet direct + infinitif",
                result: "Pronom avant le verbe de perception, pas avant l'infinitif",
                examples: [
                    { native: "J'entends les enfants chanter. → Je les entends chanter.", speakText: "Je les entends chanter.", translation: "I hear the children singing." },
                    { native: "Tu les as vus partir ?", translation: "Did you see them leave?" },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "Piège classique : le participe passé FAIT dans le causatif ne s'accorde jamais avec un COD précédent. La lettre qu'il a fait écrire (PAS faite)." },
        ],
        examples: [
            { native: "Le médecin lui a fait faire des analyses.", translation: "The doctor had him run some tests." },
            { native: "Je l'ai entendu rentrer très tard.", translation: "I heard him come home very late." },
        ],
        inlineVocab: [
            { word: "faire réparer", translation: "to have repaired" },
            { word: "faire construire", translation: "to have built" },
            { word: "laisser + inf.", translation: "to let / allow" },
            { word: "entendre qqn + inf.", translation: "to hear sb doing" },
            { word: "voir qqn + inf.", translation: "to see sb doing" },
        ],
    },

    // ── fr-g-b1-14 : Discours B1 ─────────────────────────────────────────────
    {
        id: "fr-g-b1-14",
        level: "B1",
        title: "Discours B1 — nuancer, structurer, reformuler",
        explanation: {
            target: `La fluidité du discours au B1, c'est savoir nuancer ses propos, organiser son argument et se reprendre en temps réel.

**Atténuation (hedging) :**
*il me semble que, j'ai l'impression que, dans une certaine mesure, en quelque sorte, plus ou moins*

**Renforcement :**
*il est évident que, il est indéniable que, force est de constater que*

**Structuration :**
- Ouverture : *en ce qui concerne, quant à, pour ce qui est de*
- Énumération : *d'une part... d'autre part, premièrement... par ailleurs*
- Conclusion : *en fin de compte, en somme, bref, pour conclure*

**Reformulation :**
*c'est-à-dire, autrement dit, en d'autres termes, je veux dire, pour être plus précis(e)*

**Concession :**
*certes, il est vrai que, je reconnais que, il faut reconnaître que*`,
            native: `B1 discourse fluency means qualifying your statements, organising your argument, and recovering in real time.

**Hedging (atténuation):**
*il me semble que, j'ai l'impression que, dans une certaine mesure, en quelque sorte, plus ou moins*

**Strengthening:**
*il est évident que, il est indéniable que, force est de constater que*

**Structuring:**
- Opening: *en ce qui concerne, quant à, pour ce qui est de*
- Listing: *d'une part... d'autre part, premièrement... par ailleurs*
- Concluding: *en fin de compte, en somme, bref, pour conclure*

**Reformulation:**
*c'est-à-dire, autrement dit, en d'autres termes, je veux dire, pour être plus précis(e)*

**Conceding:**
*certes, il est vrai que, je reconnais que, il faut reconnaître que*`,
        },
        notes: [
            { type: "tip", content: "Certes est l'un des marqueurs de concession les plus élégants du français — un seul mot qui signifie 'admittedly / granted'. Certes, c'est coûteux. Mais..." },
            { type: "culture", content: "L'éducation française forme les élèves au modèle thèse / antithèse / synthèse. Ces marqueurs discursifs en sont les briques de base — et de la conversation française cultivée." },
        ],
        examples: [
            { native: "D'une part, c'est pratique. D'autre part, c'est coûteux.", translation: "On the one hand, it's practical. On the other, it's costly." },
            { native: "Certes, c'est difficile — mais pas impossible.", translation: "Admittedly, it's difficult — but not impossible." },
            { native: "En fin de compte, c'est vous qui décidez.", translation: "In the end, it's you who decides." },
        ],
        inlineVocab: [
            { word: "il me semble que", translation: "it seems to me that" },
            { word: "certes", translation: "admittedly / granted" },
            { word: "d'une part... d'autre part", translation: "on the one hand... on the other" },
            { word: "c'est-à-dire", translation: "that is to say / i.e." },
            { word: "en fin de compte", translation: "in the end / all in all" },
        ],
    },

    // ── fr-g-b1-15 : Grammar bridge — B1 in informal registers ───────────────
    {
        id: "fr-g-b1-15",
        level: "B1",
        title: "Le pont grammatical — le B1 dans le français parlé",
        explanation: {
            target: `Bonne nouvelle : la grammaire que vous avez apprise au B1 ne disparaît pas dans le français parlé — elle se *compresse*. Les structures restent les mêmes ; ce qui change, c'est la vitesse, les sons et les choix lexicaux.

**Ce qui change à l'oral :**
- *ne* de négation est souvent supprimé : *Je **ne** sais pas* → *J'sais pas*
- *il* impersonnel tombe : *Il faut que* → *Faut que*
- Les pronoms se réduisent : *tu as* → *t'as* | *il y a* → *y'a*
- Les mots fusionnent : *parce que* → *pasque*

**Ce qui reste exactement pareil :**
Le subjonctif, les phrases en si, l'ordre des pronoms — toutes les structures B1 restent intactes à l'oral informel. Seule la *surface* change.`,
            native: `Good news: the grammar you've learned at B1 doesn't disappear in spoken French — it *compresses*. The structures stay the same; what changes is speed, sound, and word choices.

**What changes in speech:**
- *ne* of negation is often dropped: *Je **ne** sais pas* → *J'sais pas*
- Impersonal *il* drops: *Il faut que* → *Faut que*
- Pronouns reduce: *tu as* → *t'as* | *il y a* → *y'a*
- Words fuse: *parce que* → *pasque*

**What stays exactly the same:**
The subjunctive, si clauses, pronoun order — all B1 structures remain intact in informal speech. Only the *surface* changes.`,
        },
        rules: [
            {
                condition: "Même grammaire B1 — surface réduite",
                result: "La structure sous-jacente est intacte ; seule la forme phonologique change",
                examples: [
                    { native: "J'pense pas qu'il soit là.", translation: "I don't think he's there. (subjunctive intact: soit)" },
                    { native: "Si j'avais su, j'aurais fait autrement.", translation: "If I had known, I would have done it differently. (type 3 intact)" },
                    { native: "Faut que tu finisses avant.", translation: "You need to finish first. (subjunctive intact: finisses)" },
                    { native: "J'le lui ai dit hier.", translation: "I told it to him yesterday. (double pronoun order intact)" },
                ],
            },
            {
                condition: "Ne de négation supprimé (très fréquent à l'oral)",
                result: "Ne disparaît, pas / plus / jamais / rien restent",
                examples: [
                    { native: "J'sais pas. / Je sais pas. (← Je ne sais pas.)", speakText: "Je sais pas.", translation: "I don't know." },
                    { native: "T'inquiète pas. (← Tu ne t'inquiètes pas.)", speakText: "T'inquiète pas.", translation: "Don't worry." },
                ],
            },
        ],
        notes: [
            { type: "tip", content: "Le registre informel à l'oral n'est pas du 'mauvais français' — c'est du français compressé. Un locuteur natif qui dit 'j'sais pas' n'a pas oublié le ne ; il choisit de ne pas le prononcer selon le contexte." },
            { type: "warning", content: "À l'écrit formel et dans les examens, la suppression du ne est toujours incorrecte. Ce registre est strictement oral et informel." },
        ],
        examples: [
            { native: "Franchement, c'est relou — j'aurais pas dû accepter.", translation: "Honestly, it's annoying — I shouldn't have agreed." },
            { native: "Y'a personne qui sache vraiment ce qui s'est passé.", translation: "Nobody really knows what happened." },
        ],
        inlineVocab: [
            { word: "j'sais pas", translation: "I don't know (spoken)" },
            { word: "t'as vu", translation: "did you see / you saw (spoken)" },
            { word: "y'a", translation: "there is/are (spoken)" },
            { word: "pasque", translation: "because (spoken fusion)" },
            { word: "faut que", translation: "you/one must (spoken — il dropped)" },
        ],
        fnTags: ["fn:narrating"],
    },
]
