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
    {
        id: "fr-g-a1-33",
        level: "A1",
        title: "The Imperative — Giving Instructions & Commands",
        explanation: `The imperative is used to give instructions, commands, requests, and suggestions. French has three imperative forms: tu (informal singular), nous (let's), and vous (formal/plural). There is no subject pronoun — it is dropped.

FORMING THE IMPERATIVE

For regular -er verbs, take the present tense form and drop the subject.
The tu form also drops the final -s:
  parler:   tu parles  → Parle!      (Speak! — informal)
                         Parlons!    (Let's speak!)
                         Parlez!     (Speak! — formal/plural)

For -ir and -re verbs, take the present tense form and drop the subject.
The tu form keeps its -s:
  finir:    tu finis   → Finis!      (Finish!)
                         Finissons!  (Let's finish!)
                         Finissez!   (Finish! — formal/plural)

  attendre: tu attends → Attends!    (Wait!)
                         Attendons!  (Let's wait!)
                         Attendez!   (Wait! — formal/plural)

IRREGULAR IMPERATIVES — the four most important:

  être:   Sois patient!     Soyons sérieux!   Soyez prêt!
  avoir:  Aie confiance!    Ayons courage!    Ayez patience!
  aller:  Va-y!             Allons-y!         Allez-y!
  savoir: Sache que...      Sachons...        Sachez que...

NEGATIVE IMPERATIVE — ne...pas wraps the verb:
  Parle!  → Ne parle pas!    (Don't speak!)
  Mange!  → Ne mange pas!    (Don't eat!)
  Partez! → Ne partez pas!   (Don't leave!)

REFLEXIVE VERBS IN THE IMPERATIVE
The reflexive pronoun comes AFTER the verb, joined by a hyphen.
te becomes toi in positive imperatives:
  Se lever:    Lève-toi!      (Get up! — informal)
               Levons-nous!   (Let's get up!)
               Levez-vous!    (Get up! — formal/plural)
  Se dépêcher: Dépêche-toi!   (Hurry up!)
               Dépêchez-vous! (Hurry up! — formal/plural)

In negative imperatives, te stays before the verb:
  Ne te lève pas!      (Don't get up!)
  Ne vous dépêchez pas! (Don't hurry!)

See lesson a1-25 for reflexive verbs.

COMMON IMPERATIVE EXPRESSIONS
  Écoute! / Écoutez!     Listen!
  Regarde! / Regardez!   Look!
  Attends! / Attendez!   Wait!
  Répète! / Répétez!     Repeat!
  Assieds-toi!           Sit down! (informal)
  Entrez!                Come in!
  Mange tes légumes!     Eat your vegetables!
  Ne t'inquiète pas!     Don't worry! (informal)`,
        examples: [
            { native: "Parle plus lentement, s'il te plaît.", translation: "Speak more slowly, please. (informal)" },
            { native: "Répétez, s'il vous plaît.", translation: "Repeat, please. (formal/plural)" },
            { native: "Allons-y!", translation: "Let's go!" },
            { native: "Ne mange pas ça!", translation: "Don't eat that!" },
            { native: "Dépêche-toi!", translation: "Hurry up! (reflexive imperative — toi after verb)" },
            { native: "Ne vous inquiétez pas.", translation: "Don't worry. (formal/plural negative)" },
        ]
    },
    {
        id: "fr-g-a1-34",
        level: "A1",
        title: "Devoir — Must / Have To / Should",
        explanation: `**Devoir** expresses obligation, necessity, and probability. Along with vouloir (a1-23) and pouvoir (a1-24), it completes the core modal verb trio in French. It is irregular — memorise it.

CONJUGATION (present tense):
  je        → **dois**     (I must)
  tu        → **dois**     (you must)
  il/elle   → **doit**     (he/she must)
  nous      → **devons**   (we must)
  vous      → **devez**    (you must)
  ils/elles → **doivent**  (they must)

Always followed by an infinitive:
  Je dois partir.          I must leave.
  Tu dois manger.          You have to eat.
  Il doit travailler.      He has to work.

THREE MEANINGS OF DEVOIR

1. OBLIGATION — must / have to (external necessity):
   Je dois aller chez le médecin.    I have to go to the doctor.
   Vous devez réserver à l'avance.   You must book in advance.

2. MORAL DUTY — should / ought to:
   Tu dois appeler ta mère.          You should call your mother.
   On doit respecter les autres.     One should respect others.

3. PROBABILITY — must (logical deduction):
   Il est midi — tu dois avoir faim. It's noon — you must be hungry.
   Elle ne répond pas, elle doit dormir. She's not answering, she must be sleeping.

DEVOIR vs POUVOIR vs VOULOIR — quick comparison:
  Je dois partir.    I must leave.     (obligation — no choice)
  Je peux partir.    I can leave.      (ability/permission — it's possible)
  Je veux partir.    I want to leave.  (desire — personal wish)

NEGATIVE — ne...pas wraps devoir:
  Je ne dois pas fumer.        I must not smoke.
  Tu ne dois pas être en retard. You must not be late.

Note: ne dois pas means 'must not' (prohibition) — stronger than 'don't have to'.`,
        examples: [
            { native: "Je dois travailler demain.", translation: "I have to work tomorrow." },
            { native: "Tu dois parler au professeur.", translation: "You should speak to the teacher." },
            { native: "Elle doit être fatiguée.", translation: "She must be tired. (probability)" },
            { native: "Nous devons partir à huit heures.", translation: "We have to leave at eight o'clock." },
            { native: "Vous devez réserver à l'avance.", translation: "You must book in advance." },
            { native: "Je ne dois pas oublier mon passeport.", translation: "I must not forget my passport." },
        ]
    },
    {
        id: "fr-g-a1-35",
        level: "A1",
        title: "Venir — To Come & The Recent Past",
        explanation: `**Venir** means 'to come'. It is irregular in the present tense and is one of the most frequently used verbs in French. It also forms the **venir de + infinitive** construction, which expresses something that has just happened — the French recent past.

CONJUGATION (present tense):
  je        → **viens**    (I come)
  tu        → **viens**    (you come)
  il/elle   → **vient**    (he/she comes)
  nous      → **venons**   (we come)
  vous      → **venez**    (you come)
  ils/elles → **viennent** (they come)

Note: the nous and vous forms follow a more regular pattern. The other forms all use the stem vien-/vienn-.

BASIC USES OF VENIR

Movement — coming to a place:
  Je viens à la réunion.       I'm coming to the meeting.
  Tu viens chez moi ce soir?   Are you coming to my place tonight?
  Il vient de Paris.           He comes from Paris. (origin)

Asking where someone is from:
  D'où viens-tu?       Where do you come from? (informal)
  D'où venez-vous?     Where do you come from? (formal)
  Je viens d'Angleterre. I come from England.

VENIR DE + INFINITIVE — the recent past
This is one of the most important A1 structures in French.
Structure: present tense of venir + de + infinitive
It means something has just happened — moments or minutes ago.

  Je viens de manger.          I just ate. / I have just eaten.
  Il vient d'arriver.          He just arrived.
  Nous venons de finir.        We just finished.
  Elle vient de partir.        She just left.

Before a vowel, de contracts to d':
  Je viens d'appeler ma mère.  I just called my mother.

VENIR DE vs ALLER + INFINITIVE — the two key periphrases:
  Je viens de manger.    I just ate.          (recent past — it just happened)
  Je vais manger.        I'm going to eat.    (near future — it's about to happen)

See lesson a1-13 for the futur proche with aller.

VENIR is also used in the construction FAIRE VENIR (to send for / to call someone):
  Je fais venir le médecin.    I'm calling the doctor.
This is A2+ — just recognise it for now.`,
        examples: [
            { native: "Tu viens avec nous?", translation: "Are you coming with us?" },
            { native: "D'où viens-tu?", translation: "Where do you come from?" },
            { native: "Je viens de France.", translation: "I come from France." },
            { native: "Je viens de finir mes devoirs.", translation: "I just finished my homework. (venir de = recent past)" },
            { native: "Elle vient d'arriver.", translation: "She just arrived. (de + vowel → d')" },
            { native: "Je viens de manger, je n'ai pas faim.", translation: "I just ate, I'm not hungry." },
        ]
    },
]
