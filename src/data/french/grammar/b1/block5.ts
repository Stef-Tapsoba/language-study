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

    // ── fr-g-b1-22 : Se faire + infinitif ────────────────────────────────────
    {
        id: "fr-g-b1-22",
        level: "B1",
        title: "Se faire + infinitif (causatif réfléchi)",
        explanation: {
            target: `*Se faire + infinitif* exprime le fait de **faire faire quelque chose à/pour soi-même** — l'un des causatifs les plus fréquents dans la conversation courante.

*Je me suis **fait couper** les cheveux.* (I got a haircut.)
*Il s'est **fait renvoyer**.* (He got fired.)
*Elle s'est **fait opérer**.* (She had surgery.)

**Contraste avec *faire* causatif :**
- *Faire* causatif → on fait faire qqch (à un objet ou à quelqu'un d'autre) : *Je **fais réparer** ma voiture.*
- *Se faire* → on fait faire qqch **à soi** / **pour soi** : *Je **me fais examiner**.*

**Accord du PP : fait est invariable**, comme dans tout causatif.
*Elle s'est **fait** couper les cheveux.* (pas *faite*)

**Avec un pronom COD :** le pronom se place avant *se faire* :
*Je me suis fait couper les cheveux. → Je **me les** suis **fait** couper.*`,
            native: `*Se faire + infinitif* expresses having something done **to or for oneself** — one of the most common causatives in everyday French.

*Je me suis **fait couper** les cheveux.* (I got a haircut.)
*Il s'est **fait renvoyer**.* (He got fired.)
*Elle s'est **fait opérer**.* (She had surgery.)

**Contrast with *faire* causatif:**
- *Faire* causatif → you have sth done (to an object or by someone): *Je **fais réparer** ma voiture.*
- *Se faire* → you have sth done **to/for yourself**: *Je **me fais examiner**.*

**PP agreement: fait is invariable**, as in all causative constructions.
*Elle s'est **fait** couper les cheveux.* (not *faite*)

**With a pronoun COD:** the pronoun goes before *se faire*:
*Je me suis fait couper les cheveux. → Je **me les** suis **fait** couper.*`,
        },
        rules: [
            {
                condition: "Se faire + infinitif — action subie par le sujet",
                result: "Se faire = to get/have sth done to oneself | fait invariable",
                examples: [
                    { native: "Je me suis fait couper les cheveux. (= on a coupé mes cheveux, pour moi)", speakText: "Je me suis fait couper les cheveux.", translation: "I had my hair cut. / I got a haircut." },
                    { native: "Tu devrais te faire examiner.", translation: "You should get (yourself) examined." },
                ],
            },
            {
                condition: "Se faire dans des contextes négatifs",
                result: "Très fréquent pour exprimer quelque chose de subi (renvoi, vol, tricherie...)",
                examples: [
                    { native: "Il s'est fait renvoyer après trois mois.", translation: "He got fired after three months." },
                    { native: "On s'est fait avoir.", translation: "We got tricked / had." },
                    { native: "Ils se sont fait voler leur voiture.", translation: "They had their car stolen." },
                ],
            },
        ],
        notes: [
            { type: "warning", content: "PP invariable : elle s'est fait couper les cheveux (PAS faite). La règle : fait est invariable dans TOUTES les constructions causatives, y compris se faire." },
            { type: "tip", content: "Se faire est plus fréquent à l'oral que faire causatif quand l'action touche le sujet lui-même. 'Je vais me faire couper les cheveux' est naturel ; 'Je vais faire couper mes cheveux' est plus formel." },
        ],
        examples: [
            { native: "Je vais me faire faire un tatouage.", translation: "I'm going to get a tattoo done." },
            { native: "Elle s'est fait attendre une heure.", translation: "She kept people waiting for an hour." },
            { native: "Il s'est fait construire une belle maison.", translation: "He had a beautiful house built for himself." },
        ],
        inlineVocab: [
            { word: "se faire couper les cheveux", translation: "to get a haircut" },
            { word: "se faire renvoyer", translation: "to get fired" },
            { word: "se faire opérer", translation: "to have surgery" },
            { word: "se faire avoir", translation: "to get tricked / be had" },
            { word: "se faire attendre", translation: "to keep people waiting" },
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

    // ── fr-g-b1-15 : Le français vivant — argot, verlan, fillers, registres ───
    {
        id: "fr-g-b1-15",
        level: "B1",
        title: "Le français vivant — argot, verlan, fillers et registres",
        explanation: {
            target: `Le B1 vous donne la grammaire. Cette unité vous donne le *français réel* — ce que vous entendez dans les films, la musique, les conversations de rue.

**Le verlan** (*l'envers* → verlan) : mots à syllabes inversées, né dans la culture banlieue des années 80, aujourd'hui mainstream.
*fou → ouf | bizarre → zarbi | lourd → relou | femme → meuf | mec → keum | louche → chelou*

**L'argot courant :**
*le fric* (l'argent) | *le boulot* (le travail) | *la bouffe* (la nourriture) | *bosser* (travailler) | *rigoler* (rire) | *kiffer* (aimer beaucoup) | *se barrer* (partir) | *c'est nul* (c'est mauvais)

**Les fillers (marqueurs du discours oral) :**
*genre* (sort of / like) | *carrément* (totally) | *vachement* (really) | *franchement* (honestly) | *bref* (anyway) | *du coup* (so) | *en fait* (actually) | *quand même* (still / even so) | *c'est dingue* (it's crazy) | *ça craint* (it sucks)

**La grammaire B1 ne disparaît pas — elle se compresse :**
*Je ne sais pas* → *J'sais pas* | *Il faut que* → *Faut que* | *tu as* → *t'as* | *il y a* → *y'a* | *parce que* → *pasque*

**Registres régionaux (compréhension réceptive) :**
Québec : *c'est le boutte* (c'est super) | *magasiner* (faire du shopping) | *un char* (une voiture) | *pantoute* (pas du tout)
Belgique : *septante* (70) | *nonante* (90) | *déjeuner* = petit-déjeuner`,
            native: `B1 gives you the grammar. This unit gives you *real French* — what you hear in films, music, and street conversations.

**Verlan** (*l'envers* → verlan): words with reversed syllables, born in 80s banlieue culture, now mainstream.
*fou → ouf | bizarre → zarbi | lourd → relou | femme → meuf | mec → keum | louche → chelou*

**Common argot:**
*le fric* (money) | *le boulot* (work) | *la bouffe* (food) | *bosser* (to work hard) | *rigoler* (to laugh) | *kiffer* (to love/really like) | *se barrer* (to leave) | *c'est nul* (it's rubbish)

**Fillers (spoken discourse markers):**
*genre* (sort of / like) | *carrément* (totally) | *vachement* (really) | *franchement* (honestly) | *bref* (anyway) | *du coup* (so) | *en fait* (actually) | *quand même* (still / even so) | *c'est dingue* (it's crazy) | *ça craint* (it sucks)

**B1 grammar doesn't disappear — it compresses:**
*Je ne sais pas* → *J'sais pas* | *Il faut que* → *Faut que* | *tu as* → *t'as* | *il y a* → *y'a* | *parce que* → *pasque*

**Regional varieties (receptive awareness):**
Québec: *c'est le boutte* (great) | *magasiner* (to shop) | *un char* (a car) | *pantoute* (not at all)
Belgium: *septante* (70) | *nonante* (90) | *déjeuner* = breakfast`,
        },
        rules: [
            {
                condition: "Verlan — inversion syllabique",
                result: "Réception prioritaire ; production facultative",
                examples: [
                    { native: "C'est chelou, ce type. (← louche)", speakText: "C'est chelou, ce type.", translation: "That guy's weird / shady." },
                    { native: "C'est relou, quand même. (← lourd)", speakText: "C'est relou, quand même.", translation: "That's annoying, seriously." },
                    { native: "Ouf ! J'ai eu peur. (← fou, ici exclamatif)", speakText: "Ouf ! J'ai eu peur.", translation: "Phew! That scared me." },
                ],
            },
            {
                condition: "Fillers — marqueurs du discours oral",
                result: "Rendent le discours naturel ; à placer en début/milieu de phrase",
                examples: [
                    { native: "Franchement, c'était dingue. On a bossé genre quinze heures, carrément.", speakText: "Franchement, c'était dingue.", translation: "Honestly, it was crazy. We worked like fifteen hours, literally." },
                    { native: "En fait, le truc c'est que... du coup, j'ai dû tout refaire.", speakText: "En fait, le truc c'est que du coup j'ai dû tout refaire.", translation: "Actually, the thing is... so I had to redo everything." },
                ],
            },
            {
                condition: "Grammaire B1 compressée — structures intactes",
                result: "Ne disparaît, pas / plus / jamais / rien restent | structure sous-jacente préservée",
                examples: [
                    { native: "J'pense pas qu'il soit là. (subjonctif intact)", speakText: "J'pense pas qu'il soit là.", translation: "I don't think he's there." },
                    { native: "Faut que tu finisses avant. (subjonctif intact)", speakText: "Faut que tu finisses avant.", translation: "You need to finish first." },
                ],
            },
        ],
        notes: [
            { type: "culture", content: "Le verlan est né dans les banlieues françaises dans les années 1980 et s'est propagé via le hip-hop et le cinéma. Des mots comme 'chelou', 'relou' et 'ouf' figurent maintenant dans les dictionnaires français officiels." },
            { type: "tip", content: "Réception avant production. L'objectif est de comprendre le verlan et l'argot dans les films, les chansons et les conversations — vous n'avez pas besoin de les produire activement." },
            { type: "warning", content: "Registre : le verlan et l'argot sont très familiers. Évitez-les dans les contextes professionnels et formels. Les fillers (genre, carrément, du coup) sont moins marqués — on les entend même dans les médias." },
            { type: "culture", content: "Le français est parlé par plus de 300 millions de personnes sur cinq continents. Le Québec, la Belgique et l'Afrique francophone ont leurs propres vocabulaires et accents — les comprendre, c'est accéder à toute la diversité du français." },
        ],
        examples: [
            { native: "Il s'est barré sans prévenir — c'est nul.", translation: "He left without warning — that's rubbish." },
            { native: "Je kiffe vachement ce film.", translation: "I really love this film." },
            { native: "T'as vu le boulot qu'il a abattu ? C'est ouf.", translation: "Did you see the work he put in? That's insane." },
        ],
        inlineVocab: [
            { word: "le fric", translation: "money (argot)" },
            { word: "le boulot", translation: "work/job (argot)" },
            { word: "bosser", translation: "to work hard (argot)" },
            { word: "kiffer", translation: "to love / really like (argot)" },
            { word: "ouf", translation: "crazy/wild (verlan ← fou)" },
            { word: "chelou", translation: "weird/shady (verlan ← louche)" },
            { word: "relou", translation: "annoying/heavy (verlan ← lourd)" },
            { word: "genre", translation: "like / sort of (filler)" },
            { word: "carrément", translation: "totally / completely (filler)" },
            { word: "du coup", translation: "so / as a result (filler)" },
            { word: "en fait", translation: "actually / in fact (filler)" },
            { word: "franchement", translation: "honestly (filler)" },
            { word: "c'est dingue", translation: "it's crazy / unbelievable" },
            { word: "ça craint", translation: "it sucks / it's bad" },
        ],
        fnTags: ["fn:narrating"],
    },
]
