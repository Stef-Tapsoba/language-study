import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-14",
        level: "A1",
        title: "Partitive Articles — du, de la, de l', des",
        explanation: `When you walk into a French café and order, you don't ask for "coffee" or "wine" in the abstract — you ask for **some** coffee, **some** wine. French makes this explicit with a special set of articles called **partitives**. They express an unspecified quantity of something uncountable or plural.

THE PARTITIVE ARTICLES
  **du** → masculine singular noun: du pain, du café, du vin
  **de la** → feminine singular noun: de la soupe, de la viande, de la bière
  **de l'** → noun starting with a vowel sound: de l'eau, de l'huile, de l'ail
  **des** → any plural noun: des fruits, des légumes, des frites

PARTITIVE VS DEFINITE ARTICLE
There's a crucial distinction that trips up many learners:
  J'aime **le** café. — I like coffee (in general — the concept of coffee).
  Je bois **du** café. — I'm drinking [some] coffee (a quantity right now).

The definite article (le/la/les) talks about things in general.
The partitive article talks about a portion or serving of something.

AFTER NEGATION — all partitives become **de** (or **d'** before a vowel):
  Je bois du café. → Je ne bois **pas de** café.
  Elle mange de la viande. → Elle ne mange **pas de** viande.
  Il y a de l'eau. → Il n'y a **pas d'**eau.

This rule is consistent and applies to all partitive articles after negation.

PRACTICAL USE — ordering at a café or restaurant
  Je voudrais du pain et de la soupe.
  Vous avez de l'eau gazeuse ?
  Je prends des frites avec le steak.

Think of the partitive as your default when you're talking about food or drink as a quantity you're having right now — rather than making a general statement about what you like.`,
        examples: [
            { native: "Je voudrais du café et des tartines, s'il vous plaît.", translation: "I'd like some coffee and some toast, please." },
            { native: "Elle boit de la bière le soir.", translation: "She drinks beer in the evening." },
            { native: "Vous avez de l'eau gazeuse ?", translation: "Do you have sparkling water?" },
            { native: "Je prends des légumes avec le poisson.", translation: "I'll have some vegetables with the fish." },
            { native: "Je n'aime pas le vin, donc je ne bois pas de vin.", translation: "I don't like wine, so I don't drink wine." },
            { native: "Il n'y a plus de pain — tu veux des frites ?", translation: "There's no more bread — do you want some chips?" },
        ],
        inlineVocab: [
            { word: "du", translation: "some (masculine noun)" },
            { word: "de la", translation: "some (feminine noun)" },
            { word: "de l'", translation: "some (noun starting with vowel)" },
            { word: "des", translation: "some (plural noun)" },
            { word: "le pain", translation: "bread" },
            { word: "la viande", translation: "meat" },
            { word: "l'eau (f)", translation: "water" },
            { word: "les légumes (m pl)", translation: "vegetables" },
            { word: "les frites (f pl)", translation: "chips / fries" },
        ],
    },
    {
        id: "fr-g-a1-15",
        level: "A1",
        title: "The Imperative — Giving Directions and Instructions",
        explanation: `You've been seeing and hearing a different kind of verb in directions dialogues: *Tournez à gauche. Prenez la première rue. Continuez tout droit.* These aren't in normal present tense — the subject pronoun has disappeared. What you're hearing is the **imperative**.

WHAT IS THE IMPERATIVE?
The imperative is used for instructions, directions, invitations, and commands. It drops the subject and speaks directly to the listener.

FORMING THE IMPERATIVE
For most verbs, it's simply the present tense **without the subject pronoun**:

  vous form (formal / giving directions to strangers):
    Vous tournez → **Tournez !**    Vous prenez → **Prenez !**

  tu form (informal — friends, children):
    Tu tournes → **Tourne !**    Tu prends → **Prends !**
    Note: -er verbs drop the final -s in the tu form: **parle** (not parles), **tourne** (not tournes)

  nous form (let's...):
    Nous mangeons → **Mangeons !** (Let's eat!)

SPECIAL CASES
  aller: va (tu) / allons (nous) / **allez** (vous) — *Allez !* is one of the most common words in French
  être: sois / soyons / soyez
  avoir: aie / ayons / ayez

IMPERATIVE NÉGATIF — just add ne...pas around the verb:
  **Ne tournez pas** là. — Don't turn there.
  **Ne prenez pas** la première rue. — Don't take the first street.

USEFUL IMPERATIVE PHRASES
  Tournez à gauche / à droite. — Turn left / right.
  Continuez tout droit. — Continue straight ahead.
  Prenez la deuxième rue. — Take the second street.
  Répétez, s'il vous plaît. — Please repeat.
  Attendez ! — Wait!
  Entrez ! — Come in!`,
        examples: [
            { native: "Tournez à gauche aux feux, puis continuez tout droit.", translation: "Turn left at the traffic lights, then continue straight ahead." },
            { native: "Prenez la deuxième rue à droite.", translation: "Take the second street on the right." },
            { native: "Attendez ici, s'il vous plaît.", translation: "Wait here, please." },
            { native: "Ne tournez pas là — c'est une voie sans issue.", translation: "Don't turn there — it's a dead end." },
            { native: "Parle plus lentement, s'il te plaît !", translation: "Speak more slowly, please! (informal tu)" },
            { native: "Allez tout droit jusqu'à la place, puis traversez.", translation: "Go straight ahead to the square, then cross." },
        ],
        inlineVocab: [
            { word: "tournez", translation: "turn (vous imperative of tourner)" },
            { word: "continuez", translation: "continue (vous imperative)" },
            { word: "prenez", translation: "take (vous imperative of prendre)" },
            { word: "allez", translation: "go (vous imperative of aller)" },
            { word: "tout droit", translation: "straight ahead" },
            { word: "à gauche", translation: "on the left / to the left" },
            { word: "à droite", translation: "on the right / to the right" },
            { word: "traversez", translation: "cross (vous imperative of traverser)" },
            { word: "attendez", translation: "wait (vous imperative of attendre)" },
        ],
    },
    {
        id: "fr-g-a1-16",
        level: "A1",
        title: "Le Futur Proche — What You're Going to Do",
        explanation: `You've been using **je vais** to mean "I'm going (somewhere)" since early on. But there's something else *aller* can do — something you've probably already noticed in dialogues: *je vais partir, tu vas manger quoi, il va travailler demain*. Here, *aller* is not about movement. It's about the future.

LE FUTUR PROCHE (the near future)
Structure: **aller** (conjugated) + **infinitive**

  je **vais** travailler — I'm going to work
  tu **vas** venir — you're going to come
  il / elle **va** partir — he/she is going to leave
  nous **allons** manger — we're going to eat
  vous **allez** voir — you're going to see
  ils / elles **vont** arriver — they're going to arrive

This is the most natural and most common way to talk about future plans in spoken French. The *futur simple* (je travaillerai) exists but is more formal and mostly written — at A1, the futur proche covers everything you need.

PRESENT VS FUTUR PROCHE
  Je travaille. — I work / I'm working. (now, habitually)
  Je vais travailler. — I'm going to work. (future intention)

NEGATION — ne...pas wraps around aller, not the infinitive:
  Je **ne vais pas** travailler demain. — I'm not going to work tomorrow.
  Il **ne va pas** venir ce soir. — He's not going to come tonight.

TIME EXPRESSIONS FOR FUTURE PLANS
  ce soir — tonight           demain — tomorrow
  ce week-end — this weekend  la semaine prochaine — next week
  bientôt — soon              dans deux jours — in two days
  tout à l'heure — in a little while

Use these time expressions with the futur proche to anchor your plans clearly in time.`,
        examples: [
            { native: "Ce soir, je vais regarder un film.", translation: "Tonight, I'm going to watch a film." },
            { native: "Qu'est-ce que tu vas faire ce week-end ?", translation: "What are you going to do this weekend?" },
            { native: "Il va pleuvoir demain.", translation: "It's going to rain tomorrow." },
            { native: "On va fêter ça ensemble !", translation: "We're going to celebrate this together!" },
            { native: "Je ne vais pas sortir ce soir — je suis fatigué.", translation: "I'm not going to go out tonight — I'm tired." },
            { native: "La semaine prochaine, nous allons voyager en Italie.", translation: "Next week, we're going to travel to Italy." },
        ],
        inlineVocab: [
            { word: "aller + infinitif", translation: "going to + verb (near future structure)" },
            { word: "ce soir", translation: "tonight / this evening" },
            { word: "demain", translation: "tomorrow" },
            { word: "bientôt", translation: "soon" },
            { word: "la semaine prochaine", translation: "next week" },
            { word: "dans deux jours", translation: "in two days" },
            { word: "tout à l'heure", translation: "in a little while" },
            { word: "il va pleuvoir", translation: "it's going to rain" },
            { word: "fêter", translation: "to celebrate" },
        ],
    },
    {
        id: "fr-g-a1-17",
        level: "A1",
        title: "Vouloir and Pouvoir — Wanting and Being Able To",
        explanation: `Two of the most useful verbs in French — and you've been using them since the café unit. *Je voudrais* (I'd like) comes from **vouloir**. *Vous pouvez répéter ?* (Can you repeat?) comes from **pouvoir**. Let's look at both properly.

**VOULOIR** — to want
  je **veux**       — I want
  tu **veux**       — you want
  il / elle **veut** — he/she wants
  nous **voulons**   — we want
  vous **voulez**    — you want
  ils / elles **veulent** — they want

  Always followed by an infinitive: Je veux **partir**. / Je veux **manger**.

JE VEUX vs JE VOUDRAIS
  *Je veux* is grammatically correct but can sound blunt in a service context.
  *Je voudrais* (the conditional form) is softer and always polite — use it in cafés, shops, and formal situations.
  Between friends: *je veux* is perfectly natural.

**POUVOIR** — to be able to / can
  je **peux**       — I can
  tu **peux**       — you can
  il / elle **peut** — he/she can
  nous **pouvons**   — we can
  vous **pouvez**    — you can
  ils / elles **peuvent** — they can

  Always followed by an infinitive: Je peux **venir**. / Tu peux **m'aider** ?

ON PEUT — a high-value phrase
  *On peut* (literally "one can" — but used for "can we / is it possible") is one of the most practical phrases in French:
    On peut s'asseoir ici ? — Can we sit here?
    On peut payer par carte ? — Can we pay by card?

KEY COMBINATIONS
  Tu peux me dire... ? — Can you tell me...?
  Je veux bien. — I'd be happy to. (note: this is an acceptance, not strong desire)
  Je ne peux pas. — I can't.`,
        examples: [
            { native: "Tu veux venir avec moi ce soir ?", translation: "Do you want to come with me tonight?" },
            { native: "Je voudrais réserver une table pour deux, s'il vous plaît.", translation: "I'd like to reserve a table for two, please." },
            { native: "Vous pouvez répéter plus lentement ?", translation: "Can you repeat more slowly?" },
            { native: "Elle ne peut pas venir — elle travaille.", translation: "She can't come — she's working." },
            { native: "On peut payer par carte ici ?", translation: "Can we pay by card here?" },
            { native: "Je veux bien — bonne idée !", translation: "I'd be happy to — good idea!" },
        ],
        inlineVocab: [
            { word: "vouloir", translation: "to want" },
            { word: "je veux", translation: "I want" },
            { word: "je voudrais", translation: "I'd like (polite conditional)" },
            { word: "pouvoir", translation: "to be able to / can" },
            { word: "je peux", translation: "I can" },
            { word: "on peut", translation: "can we / one can (informal nous)" },
            { word: "je veux bien", translation: "I'd be happy to / yes please" },
            { word: "je ne peux pas", translation: "I can't" },
            { word: "m'aider", translation: "to help me" },
        ],
    },
    {
        id: "fr-g-a1-18",
        level: "A1",
        title: "Devoir — Must, Have To, Should",
        explanation: `You can now say what you want (*vouloir*) and what you're able to do (*pouvoir*). The third pillar of the modal system is **devoir** — what you must or have to do. Together, these three verbs let you explain almost any human decision.

**DEVOIR** — must / have to
  je **dois**       — I must / I have to
  tu **dois**       — you must
  il / elle **doit** — he/she must
  nous **devons**    — we must
  vous **devez**     — you must
  ils / elles **doivent** — they must

  Always followed by an infinitive: Je dois **partir**. / Tu dois **appeler** ta mère.

THREE USES OF DEVOIR

1. **Obligation** — something you have to do:
     Je dois travailler ce soir. — I have to work tonight.
     Vous devez confirmer la réservation. — You must confirm the booking.

2. **Strong probability** — something that is almost certainly true:
     Il doit être fatigué. — He must be tired.
     Elle doit être en réunion. — She must be in a meeting.

3. **Moral obligation** — what one should do:
     On doit être honnête. — One must be honest.

A BRIEF GLIMPSE: JE DEVRAIS
*Je devrais* is the conditional of *devoir* — meaning "I should." It's softer than *je dois*:
  Je devrais dormir plus. — I should sleep more.
  You'll study this properly at A2.

THE THREE MODALS SIDE BY SIDE
  Je **dois** partir — J'ai une réunion. (obligation)
  Je **voudrais** rester mais je ne peux pas. (desire vs ability)
  Je **peux** venir demain si tu veux. (ability)

These three verbs work together in real conversation constantly — once you have all three, your explanatory power multiplies.`,
        examples: [
            { native: "Je dois partir maintenant — désolé !", translation: "I have to leave now — sorry!" },
            { native: "Tu dois appeler ta mère ce soir.", translation: "You must call your mother tonight." },
            { native: "Il doit être très occupé en ce moment.", translation: "He must be very busy at the moment." },
            { native: "Nous devons réserver à l'avance.", translation: "We have to book in advance." },
            { native: "Je voudrais venir, mais je dois travailler.", translation: "I'd like to come, but I have to work." },
            { native: "Est-ce qu'on doit payer maintenant ?", translation: "Do we have to pay now?" },
        ],
        inlineVocab: [
            { word: "devoir", translation: "must / to have to" },
            { word: "je dois", translation: "I must / I have to" },
            { word: "il doit", translation: "he must / he has to" },
            { word: "je devrais", translation: "I should (conditional — softer than je dois)" },
            { word: "obligatoire", translation: "compulsory / required" },
            { word: "partir", translation: "to leave" },
            { word: "confirmer", translation: "to confirm" },
            { word: "occupé(e)", translation: "busy" },
            { word: "à l'avance", translation: "in advance" },
        ],
    },
]
