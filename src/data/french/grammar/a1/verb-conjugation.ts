import { GrammarLesson } from "../../../../types"

export const verbConjugationLessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-5",
        level: "A1",
        title: "Present Tense: Regular -er Verbs",
        explanation: `Regular -er verbs are the largest verb group. Remove -er and add these endings — parler (to speak) as model:

  je        → -e    (parle — I speak)
  tu        → -es   (parles — you speak)
  il/elle   → -e    (parle — he/she speaks)
  nous      → -ons  (parlons — we speak)
  vous      → -ez   (parlez — you speak)
  ils/elles → -ent  (parlent — they speak)

Key point: je / tu / il / elle / ils / elles all sound the same — the written endings differ but are silent.
Only nous (-ons) and vous (-ez) have audibly different endings.

Common -er verbs: aimer (like), habiter (live), travailler (work), manger (eat), regarder (watch), écouter (listen), étudier (study).`,
        examples: [
            { native: "Je parle.", translation: "I speak." },
            { native: "Tu parles.", translation: "You speak." },
            { native: "Il parle.", translation: "He speaks." },
            { native: "Nous parlons.", translation: "We speak." },
            { native: "Vous parlez.", translation: "You speak. (formal/pl.)" },
            { native: "Ils parlent.", translation: "They speak." },
        ]
    },
    {
        id: "fr-g-a1-9",
        level: "A1",
        title: "Negation with ne...pas",
        explanation: `To make a sentence negative, wrap the verb with ne...pas:
  ne (or n' before vowel/silent h) + verb + pas

  Je parle.       → Je ne parle pas.       (I don't speak.)
  Il est là.      → Il n'est pas là.        (He is not here.)
  Nous avons.     → Nous n'avons pas.       (We don't have.)

After negation, un/une/des → de (or d' before vowel):
  J'ai une voiture.  → Je n'ai pas de voiture.
  Il a des amis.     → Il n'a pas d'amis.

Other negative expressions:
  ne...jamais   → never:     Je ne fume jamais.
  ne...rien     → nothing:   Je ne comprends rien.
  ne...plus     → no longer: Il ne travaille plus ici.
  ne...personne → nobody:    Je ne connais personne.

Spoken French: 'ne' is very commonly dropped in informal speech:
  Je sais pas. / C'est pas vrai. / T'as pas faim?`,
        examples: [
            { native: "Je ne parle pas anglais.", translation: "I don't speak English." },
            { native: "Il n'est pas là.", translation: "He is not here." },
            { native: "Nous n'avons pas de voiture.", translation: "We don't have a car." },
            { native: "Elle ne fait pas de sport.", translation: "She doesn't do sport." },
            { native: "Tu ne vas pas au marché?", translation: "You're not going to the market?" },
        ]
    },
    {
        id: "fr-g-a1-10",
        level: "A1",
        title: "Question Formation",
        explanation: `Three ways to ask a yes/no question in French:

1. INTONATION — most common in spoken French
   Tu parles français?   (same words as a statement, rising tone)

2. EST-CE QUE — spoken and written, neutral register
   Est-ce que tu parles français?

3. INVERSION — formal written French (verb and subject swapped, joined by hyphen)
   Parles-tu français?
   Note: je is rarely inverted — use est-ce que instead

QUESTION WORDS — always at the start of the sentence:
  qui           → who          Qui est-il?              (Who is he?)
  que / quoi    → what         Qu'est-ce que tu fais?   (What are you doing?)
  où            → where        Où habites-tu?           (Where do you live?)
  quand         → when         Quand pars-tu?           (When do you leave?)
  comment       → how          Comment vas-tu?          (How are you?)
  pourquoi      → why          Pourquoi tu ris?         (Why are you laughing?)
  combien       → how much     Combien ça coûte?        (How much does it cost?)
  quel/quelle   → which/what   Quel film tu regardes?   (What film are you watching?)`,
        examples: [
            { native: "Tu parles français?", translation: "Do you speak French? (intonation)" },
            { native: "Est-ce que tu parles français?", translation: "Do you speak French? (est-ce que)" },
            { native: "Parles-tu français?", translation: "Do you speak French? (inversion, formal)" },
            { native: "Où est la gare?", translation: "Where is the train station?" },
            { native: "Qu'est-ce que tu fais?", translation: "What are you doing?" },
        ]
    },
    {
        id: "fr-g-a1-13",
        level: "A1",
        title: "Le Futur Proche (Near Future)",
        explanation: `The futur proche expresses plans and actions about to happen. It is far more common than the simple future in everyday speech.

Structure: present tense of ALLER + infinitive
  Je vais manger ce soir.          = I'm going to eat tonight.
  Tu vas partir bientôt?           = Are you going to leave soon?
  Il va pleuvoir demain.           = It's going to rain tomorrow.
  Nous allons visiter Paris.       = We are going to visit Paris.

Negation: ne...pas wraps aller, not the infinitive:
  Je ne vais pas manger.   ✓     (I'm not going to eat.)
  ✗ Je vais ne pas manger.

Useful time words: bientôt (soon), ce soir (tonight), demain (tomorrow), dans cinq minutes (in five minutes), la semaine prochaine (next week).`,
        examples: [
            { native: "Je vais manger ce soir.", translation: "I'm going to eat tonight." },
            { native: "Tu vas partir bientôt?", translation: "Are you going to leave soon?" },
            { native: "Nous allons visiter Paris.", translation: "We are going to visit Paris." },
            { native: "Il va pleuvoir demain.", translation: "It's going to rain tomorrow." },
            { native: "Elles vont étudier ensemble.", translation: "They are going to study together." },
        ]
    },
    {
        id: "fr-g-a1-15",
        level: "A1",
        title: "Present Tense: Regular -ir Verbs",
        explanation: `Regular -ir verbs are the second major verb group. They add -iss- in the plural forms — this is the key marker.

Remove -ir and add:
  je        → -is      (finis — I finish)
  tu        → -is      (finis — you finish)
  il/elle   → -it      (finit — he/she finishes)
  nous      → -issons  (finissons — we finish)  ← -iss- appears
  vous      → -issez   (finissez — you finish)  ← -iss- appears
  ils/elles → -issent  (finissent — they finish) ← -iss- appears

Common regular -ir verbs: finir (finish), choisir (choose), réussir (succeed), grandir (grow), obéir (obey), remplir (fill).

Warning: **partir**, **sortir**, **dormir** are also -ir verbs but are IRREGULAR — they do NOT use -iss-. Learn them separately.`,
        examples: [
            { native: "Je finis.", translation: "I finish." },
            { native: "Tu choisis.", translation: "You choose." },
            { native: "Elle réussit.", translation: "She succeeds." },
            { native: "Nous finissons.", translation: "We finish. (-iss- in plural)" },
            { native: "Vous choisissez.", translation: "You choose. (-iss- in plural)" },
            { native: "Ils grandissent.", translation: "They grow. (grandir = to grow)" },
        ]
    },
    {
        id: "fr-g-a1-16",
        level: "A1",
        title: "Present Tense: Regular -re Verbs",
        explanation: `Regular -re verbs are the third major verb group. Remove -re and add:

  je        → -s       (vends — I sell)
  tu        → -s       (vends — you sell)
  il/elle   → (nothing) (vend — he/she sells)  ← bare stem, no ending
  nous      → -ons     (vendons — we sell)
  vous      → -ez      (vendez — you sell)
  ils/elles → -ent     (vendent — they sell)

The il/elle form has no ending at all — just the bare stem. This is the key feature of -re verbs.

Common -re verbs: vendre (sell), attendre (wait), répondre (answer), entendre (hear), perdre (lose), descendre (go down), rendre (give back).`,
        examples: [
            { native: "Je vends.", translation: "I sell." },
            { native: "Tu attends.", translation: "You wait." },
            { native: "Il répond.", translation: "He answers. (no ending — just the stem)" },
            { native: "Nous entendons.", translation: "We hear." },
            { native: "Vous perdez.", translation: "You lose." },
            { native: "Ils vendent.", translation: "They sell." },
        ]
    },
    {
        id: "fr-g-a1-23",
        level: "A1",
        title: "Vouloir (to want)",
        explanation: `**Vouloir** means 'to want'. It is irregular — memorise it!

Conjugation (present tense):
  je        → **veux**     (I want)
  tu        → **veux**     (you want)
  il/elle   → **veut**     (he/she wants)
  nous      → **voulons**  (we want)
  vous      → **voulez**   (you want)
  ils/elles → **veulent**  (they want)

USES OF VOULOIR
  vouloir + noun:        Je veux un café.           (I want a coffee.)
  vouloir + infinitive:  Je veux partir.            (I want to leave.)
  vouloir bien:          Je veux bien.              (I'd be happy to. / Sure.)

POLITE FORM — je voudrais
In real conversation, use **je voudrais** (conditional) instead of 'je veux' when ordering or requesting — it sounds much softer and is the standard polite form:
  Je veux un café.            → direct, can sound abrupt
  Je voudrais un café.        → I would like a coffee. (standard polite)`,
        examples: [
            { native: "Je veux apprendre le français.", translation: "I want to learn French." },
            { native: "Tu veux venir avec nous?", translation: "Do you want to come with us?" },
            { native: "Elle veut un verre d'eau.", translation: "She wants a glass of water." },
            { native: "Je voudrais un café, s'il vous plaît.", translation: "I'd like a coffee, please. (polite — use this when ordering)" },
            { native: "Nous voulons visiter Paris.", translation: "We want to visit Paris." },
        ]
    },
    {
        id: "fr-g-a1-24",
        level: "A1",
        title: "Pouvoir (to be able to / can)",
        explanation: `**Pouvoir** means 'to be able to' or 'can'. It is irregular — memorise it!

Conjugation (present tense):
  je        → **peux**     (I can)
  tu        → **peux**     (you can)
  il/elle   → **peut**     (he/she can)
  nous      → **pouvons**  (we can)
  vous      → **pouvez**   (you can)
  ils/elles → **peuvent**  (they can)

Always followed by an infinitive:
  Je peux nager.            (I can swim.)
  Tu peux entrer.           (You can come in.)

THREE MEANINGS OF POUVOIR
  Physical ability:   Je peux courir 5km.      (I can run 5km.)
  Permission:         Vous pouvez partir.       (You can / may leave.)
  Possibility:        Il peut pleuvoir demain.  (It can / may rain tomorrow.)

NEGATIVE — not able to / cannot:
  Je ne peux pas venir.     (I can't come.)
  Il ne peut pas dormir.    (He can't sleep.)`,
        examples: [
            { native: "Je peux parler français un peu.", translation: "I can speak a little French." },
            { native: "Tu peux m'aider?", translation: "Can you help me?" },
            { native: "Elle ne peut pas venir ce soir.", translation: "She can't come tonight." },
            { native: "Vous pouvez entrer.", translation: "You may come in." },
            { native: "On peut manger ici?", translation: "Can we eat here?" },
        ]
    },
    {
        id: "fr-g-a1-25",
        level: "A1",
        title: "Reflexive Verbs: s'appeler, se lever & others",
        explanation: `Reflexive verbs describe an action done to oneself. They are formed with a **reflexive pronoun** placed directly before the verb.

REFLEXIVE PRONOUNS (match the subject):
  je → **me** (m')   tu → **te** (t')   il/elle → **se** (s')
  nous → **nous**    vous → **vous**     ils/elles → **se** (s')

The pronoun shortens to m'/t'/s' before a vowel or silent h.

KEY A1 REFLEXIVE VERBS
  **s'appeler**   → to be called         Je m'appelle Marie.
  **se lever**    → to get up            Je me lève à 7h.
  **se coucher**  → to go to bed         Je me couche à 23h.
  **se laver**    → to wash (oneself)    Je me lave les mains.
  **se sentir**   → to feel             Je me sens bien.
  **se dépêcher** → to hurry            Dépêche-toi!

NEGATION — ne goes before the reflexive pronoun:
  Je ne me lève pas tôt.    (I don't get up early.)
  Il ne s'appelle pas Paul. (His name isn't Paul.)

QUESTIONS:
  Comment vous appelez-vous?    (What is your name? — formal)
  Comment tu t'appelles?        (What is your name? — informal)`,
        examples: [
            { native: "Je m'appelle Sophie.", translation: "My name is Sophie. (literally: I call myself Sophie)" },
            { native: "Comment tu t'appelles?", translation: "What's your name? (informal)" },
            { native: "Il se lève à six heures.", translation: "He gets up at six o'clock." },
            { native: "Nous nous lavons les mains.", translation: "We wash our hands." },
            { native: "Elle se couche tôt le soir.", translation: "She goes to bed early in the evening." },
        ]
    },
]
