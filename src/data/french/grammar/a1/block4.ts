import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-14",
        level: "A1",
        title: "Partitive Articles — du, de la, de l', des",
        explanation: `When you walk into a French café and order, you don't ask for "coffee" or "wine" in the abstract — you ask for **some** coffee, **some** wine. French makes this explicit with a special set of articles called **partitives**. They express an unspecified quantity of something uncountable or plural.

The partitive articles and their negated forms are in the table below.

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
        rules: [
            {
                condition: "Talking about an unspecified quantity of something uncountable",
                result: "Use du (masc.) / de la (fem.) / de l' (before vowel) / des (plural)",
                examples: [
                    { native: "Je mange du pain.", translation: "I eat (some) bread." },
                    { native: "Elle boit de la bière.", translation: "She drinks (some) beer." },
                    { native: "Vous avez de l'eau ?", translation: "Do you have (some) water?" },
                ],
            },
            {
                condition: "Making a general statement about liking something",
                result: "Use le / la / les (definite article) — not du / de la",
                examples: [
                    { native: "J'aime le café. (general) / Je bois du café. (a quantity right now)", translation: "I like coffee. (general) / I'm drinking coffee. (now)" },
                ],
            },
            {
                condition: "After negation",
                result: "All partitives become de (or d' before a vowel)",
                examples: [
                    { native: "Je bois du café. → Je ne bois pas de café.", translation: "I drink coffee. → I don't drink coffee." },
                    { native: "Il y a de l'eau. → Il n'y a pas d'eau.", translation: "There is water. → There is no water." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The partitive means 'some (of)'. If you can mentally insert 'some' in the English sentence, you probably need a partitive in French: 'I'm having [some] coffee' → 'Je prends du café'.",
            },
            {
                type: "warning",
                content: "Don't confuse du (partitive = some bread) with du (contraction = de + le, for example 'Je viens du Canada'). They look identical but come from completely different constructions.",
            },
            {
                type: "culture",
                content: "In French cafés, 'Un café, s'il vous plaît' (a coffee) and 'Du café, s'il vous plaît' (some coffee) are both normal, but un/une is more specific — you're ordering one coffee. Use whichever sounds natural.",
            },
        ],
        fixedPhrases: [
            { native: "Je voudrais du café et du pain, s'il vous plaît.", translation: "I'd like some coffee and some bread, please.", note: "Model café order — partitives both times." },
            { native: "Vous avez de l'eau gazeuse ?", translation: "Do you have sparkling water?", note: "De l' before a vowel — always." },
            { native: "Il n'y a plus de pain.", translation: "There's no more bread.", note: "Ne...plus de — combines the 'no longer' and partitive-to-de rules." },
            { native: "Je prends des frites.", translation: "I'll have some chips.", note: "Des for plural uncountable items." },
        ],
        paradigmTable: {
            pronouns: ["masculine", "feminine", "before vowel/h", "plural"],
            verbs: [
                { label: "partitive", forms: ["du", "de la", "de l'", "des"] },
                { label: "after negation", forms: ["de / d'", "de / d'", "de / d'", "de / d'"] },
            ],
        },
    },
    {
        id: "fr-g-a1-15",
        level: "A1",
        title: "The Imperative — Giving Directions and Instructions",
        explanation: `You've been seeing and hearing a different kind of verb in directions dialogues: *Tournez à gauche. Prenez la première rue. Continuez tout droit.* These aren't in normal present tense — the subject pronoun has disappeared. What you're hearing is the **imperative**.

WHAT IS THE IMPERATIVE?
The imperative is used for instructions, directions, invitations, and commands. It drops the subject and speaks directly to the listener.

FORMING THE IMPERATIVE
For most verbs, it's simply the present tense **without the subject pronoun**. The table below shows the three imperative forms for key verbs. Note: -er verbs drop the final -s in the tu form (**parle** not parles, **tourne** not tournes).

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
        rules: [
            {
                condition: "Giving a direction or instruction to someone you address formally (vous)",
                result: "Use the present-tense vous form without 'vous'",
                examples: [
                    { native: "Tournez à gauche.", translation: "Turn left." },
                    { native: "Continuez tout droit.", translation: "Continue straight ahead." },
                    { native: "Prenez la deuxième rue à droite.", translation: "Take the second street on the right." },
                ],
            },
            {
                condition: "Giving a direction or instruction to someone you address casually (tu)",
                result: "Use the present-tense tu form without 'tu'; -er verbs drop the final -s",
                examples: [
                    { native: "Tourne à gauche !", translation: "Turn left! (tu form)" },
                    { native: "Parle plus lentement !", translation: "Speak more slowly! (parles → parle, no -s)" },
                ],
            },
            {
                condition: "Telling someone NOT to do something",
                result: "Add ne ... pas around the imperative verb",
                examples: [
                    { native: "Ne tournez pas là.", translation: "Don't turn there." },
                    { native: "N'attendez pas — partez !", translation: "Don't wait — go!" },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "In the tu imperative, -er verbs drop the final -s: 'Parle !' not 'Parles !'. This only applies to the tu form — the vous form keeps its -ez ending as usual.",
            },
            {
                type: "tip",
                content: "'Allez !' is one of the most common words in French — used to say 'Come on!', 'Let's go!', or 'Right then!'. It's also the vous imperative of aller. You'll hear it everywhere from sports events to family dinners.",
            },
            {
                type: "culture",
                content: "When giving directions in France, you'll hear 'Vous allez tout droit' (statement) as often as 'Allez tout droit' (imperative). Both are perfectly natural — French people mix these forms freely.",
            },
        ],
        fixedPhrases: [
            { native: "Tournez à gauche aux feux.", translation: "Turn left at the traffic lights.", note: "Les feux (the lights) — essential directions vocabulary." },
            { native: "Continuez tout droit jusqu'au carrefour.", translation: "Go straight ahead to the crossroads.", note: "Jusqu'au (until the) — useful directional phrase." },
            { native: "Répétez, s'il vous plaît.", translation: "Please repeat.", note: "Polite imperative — essential for learners." },
            { native: "Attendez une seconde !", translation: "Wait a second!", note: "High-frequency in any real interaction." },
        ],
        conjugationTable: {
            pronouns: ["tu", "vous", "nous"],
            verbs: [
                { label: "parler", forms: ["parle !", "parlez !", "parlons !"] },
                { label: "finir", forms: ["finis !", "finissez !", "finissons !"] },
                { label: "aller", forms: ["va !", "allez !", "allons !"] },
            ],
        },
    },
    {
        id: "fr-g-a1-16",
        level: "A1",
        title: "Le Futur Proche — What You're Going to Do",
        explanation: `You've been using **je vais** to mean "I'm going (somewhere)" since early on. But there's something else *aller* can do — something you've probably already noticed in dialogues: *je vais partir, tu vas manger quoi, il va travailler demain*. Here, *aller* is not about movement. It's about the future.

LE FUTUR PROCHE (the near future)
Structure: **aller** (conjugated) + **infinitive**

The full set of forms is in the table below. This is the most natural and most common way to talk about future plans in spoken French. The *futur simple* (je travaillerai) exists but is more formal and mostly written — at A1, the futur proche covers everything you need.

PRESENT VS FUTUR PROCHE
  Je travaille. — I work / I'm working. (now, habitually)
  Je vais travailler. — I'm going to work. (future intention)

NEGATION — ne...pas wraps around aller, not the label:
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
        rules: [
            {
                condition: "Talking about a future plan or intention",
                result: "Use conjugated aller + infinitive (futur proche)",
                examples: [
                    { native: "Je vais travailler demain.", translation: "I'm going to work tomorrow." },
                    { native: "Elle va partir ce soir.", translation: "She's going to leave tonight." },
                    { native: "Nous allons voyager en Italie.", translation: "We're going to travel to Italy." },
                ],
            },
            {
                condition: "Negating a futur proche",
                result: "Ne ... pas wraps around aller — not around the infinitive",
                examples: [
                    { native: "Je ne vais pas travailler demain.", translation: "I'm not going to work tomorrow." },
                    { native: "Il ne va pas venir ce soir.", translation: "He's not going to come tonight." },
                ],
            },
            {
                condition: "Predicting what is about to happen",
                result: "Futur proche works for impersonal predictions too",
                examples: [
                    { native: "Il va pleuvoir.", translation: "It's going to rain." },
                    { native: "Ça va être difficile.", translation: "It's going to be difficult." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The futur proche is the main future tense in spoken French at A1. The futur simple (je travaillerai) exists but is mostly written and formal — don't worry about it yet. Aller + infinitive covers everything you need.",
            },
            {
                type: "culture",
                content: "'Ça va aller' (literally 'that's going to go') is a common reassurance in French — similar to 'It'll be fine'. The futur proche appears naturally in many set phrases like this one.",
            },
            {
                type: "forward-ref",
                content: "The futur simple (je partirai, nous irons) is introduced at A2 and is used more in writing and formal speech. For now, the futur proche handles all your future communication needs.",
                refId: "fr-g-a1-22",
            },
        ],
        fixedPhrases: [
            { native: "Qu'est-ce que tu vas faire ce week-end ?", translation: "What are you going to do this weekend?", note: "Natural way to ask about someone's plans." },
            { native: "Je vais y réfléchir.", translation: "I'm going to think about it.", note: "Y replaces 'à ça' — polite way to defer a decision." },
            { native: "Ça va aller.", translation: "It'll be fine.", note: "Reassuring, optimistic — very French." },
            { native: "On va fêter ça !", translation: "We're going to celebrate this!", note: "Spontaneous celebration phrase." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "aller + infinitif", forms: ["vais + inf.", "vas + inf.", "va + inf.", "allons + inf.", "allez + inf.", "vont + inf."] },
            ],
        },
    },
    {
        id: "fr-g-a1-17",
        level: "A1",
        title: "Vouloir and Pouvoir — Wanting and Being Able To",
        explanation: `Two of the most useful verbs in French — and you've been using them since the café unit. *Je voudrais* (I'd like) comes from **vouloir**. *Vous pouvez répéter ?* (Can you repeat?) comes from **pouvoir**. The full conjugations of both are in the table below.

Both verbs are always followed by an label: Je veux **partir**. / Je peux **venir**. / Tu peux **m'aider** ?

JE VEUX vs JE VOUDRAIS
  *Je veux* is grammatically correct but can sound blunt in a service context.
  *Je voudrais* (the conditional form) is softer and always polite — use it in cafés, shops, and formal situations.
  Between friends: *je veux* is perfectly natural.

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
        rules: [
            {
                condition: "Expressing what you want (neutral / informal)",
                result: "Use je veux + infinitive",
                examples: [
                    { native: "Je veux partir.", translation: "I want to leave." },
                    { native: "Tu veux venir avec moi ?", translation: "Do you want to come with me?" },
                ],
            },
            {
                condition: "Expressing what you'd like (polite — café, shop, formal situation)",
                result: "Use je voudrais + infinitive or noun",
                examples: [
                    { native: "Je voudrais réserver une table.", translation: "I'd like to reserve a table." },
                    { native: "Je voudrais un café, s'il vous plaît.", translation: "I'd like a coffee, please." },
                ],
            },
            {
                condition: "Asking or saying whether something is possible",
                result: "Use pouvoir + infinitive",
                examples: [
                    { native: "Vous pouvez répéter ?", translation: "Can you repeat?" },
                    { native: "Je ne peux pas venir ce soir.", translation: "I can't come tonight." },
                    { native: "On peut payer par carte ?", translation: "Can we pay by card?" },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "'Je veux' is grammatically fine but can sound blunt in service situations. In cafés, restaurants, and shops, always use 'je voudrais'. Between friends, 'je veux' is completely natural.",
            },
            {
                type: "tip",
                content: "'Je veux bien' does NOT mean 'I want a lot'. It means 'I'd be happy to' or 'Yes please' — it's an acceptance. Compare: 'Tu veux un café ?' / 'Je veux bien !' (Yes please!)",
            },
            {
                type: "culture",
                content: "'On peut' is extremely useful for suggesting shared actions politely: 'On peut s'asseoir ici ?' (Can we sit here?), 'On peut partager ?' (Can we share?). It's softer than 'Nous pouvons' and more natural.",
            },
        ],
        fixedPhrases: [
            { native: "Je voudrais un café, s'il vous plaît.", translation: "I'd like a coffee, please.", note: "The model polite order — use voudrais, not veux, in service contexts." },
            { native: "Vous pouvez répéter plus lentement ?", translation: "Could you repeat more slowly?", note: "Essential learner phrase — always polite, always effective." },
            { native: "Je ne peux pas ce soir.", translation: "I can't (make it) tonight.", note: "Idiomatic — the infinitive is implied." },
            { native: "Je veux bien !", translation: "I'd love to! / Yes please!", note: "An enthusiastic acceptance — not 'I want a lot'." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "vouloir", forms: ["veux", "veux", "veut", "voulons", "voulez", "veulent"] },
                { label: "pouvoir", forms: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"] },
            ],
        },
    },
    {
        id: "fr-g-a1-18",
        level: "A1",
        title: "Devoir — Must, Have To, Should",
        explanation: `You can now say what you want (*vouloir*) and what you're able to do (*pouvoir*). The third pillar of the modal system is **devoir** — what you must or have to do. Together, these three verbs let you explain almost any human decision.

The full conjugation of **devoir** is in the table below. It is always followed by an label: Je dois **partir**. / Tu dois **appeler** ta mère.

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
        rules: [
            {
                condition: "Expressing obligation — something you have to do",
                result: "Use je dois + infinitive",
                examples: [
                    { native: "Je dois travailler ce soir.", translation: "I have to work tonight." },
                    { native: "Tu dois confirmer la réservation.", translation: "You have to confirm the booking." },
                ],
            },
            {
                condition: "Expressing strong probability — something is almost certainly true",
                result: "Use doit + infinitive (third person common)",
                examples: [
                    { native: "Il doit être fatigué.", translation: "He must be tired." },
                    { native: "Elle doit être en réunion.", translation: "She must be in a meeting." },
                ],
            },
            {
                condition: "Explaining a conflict between desire and obligation",
                result: "Use voudrais + mais + dois to show the tension",
                examples: [
                    { native: "Je voudrais venir, mais je dois travailler.", translation: "I'd like to come, but I have to work." },
                    { native: "Il voudrait rester, mais il doit partir.", translation: "He'd like to stay, but he has to leave." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The three modals do different jobs: vouloir = desire, pouvoir = ability, devoir = obligation. Once you have all three, you can explain almost any human decision in French.",
            },
            {
                type: "forward-ref",
                content: "'Je devrais' (I should) is the conditional of devoir — softer and more polite than 'je dois'. You'll study the conditional mood properly at A2, but 'je devrais' is worth learning now as a fixed phrase.",
                refId: "fr-g-a1-22",
            },
            {
                type: "culture",
                content: "Using 'il faut' (one must / it's necessary) is very common in French for impersonal obligation: 'Il faut réserver à l'avance' (You need to book ahead). It's less personal than 'vous devez' and widely used.",
            },
        ],
        fixedPhrases: [
            { native: "Je dois partir maintenant.", translation: "I have to leave now.", note: "Direct, clear, and slightly apologetic — useful exit phrase." },
            { native: "Il faut réserver à l'avance.", translation: "You need to book in advance.", note: "Il faut = impersonal obligation — very natural in French." },
            { native: "Je voudrais venir, mais je dois travailler.", translation: "I'd like to come, but I have to work.", note: "The classic conflict — desire vs. obligation." },
            { native: "Je devrais dormir plus.", translation: "I should sleep more.", note: "Je devrais = I should. Softer and more reflective than je dois." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "devoir", forms: ["dois", "dois", "doit", "devons", "devez", "doivent"] },
            ],
        },
    },
]
