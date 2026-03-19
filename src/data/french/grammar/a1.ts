// src/data/french/grammar/a1.ts
import { GrammarLesson } from "../../../types"

export const a1Grammar: GrammarLesson[] = [
    {
        id: "fr-g-a1-1",
        level: "A1",
        title: "Subject Pronouns",
        explanation: `French subject pronouns are always required — you cannot drop them as in Spanish or Italian.

SINGULAR                      PLURAL
  je    → I                     nous        → we
  tu    → you (informal)        vous        → you (formal or plural)
  il    → he                    ils         → they (masc. or mixed group)
  elle  → she                   elles       → they (feminine only)

Note: 'vous' is used both for one person (polite) and for a group.
Note: 'on' informally means 'we' in everyday speech — On y va = We're going.`,
        examples: [
            { native: "Je parle français.", translation: "I speak French." },
            { native: "Tu es étudiant.", translation: "You are a student. (informal)" },
            { native: "Il/Elle travaille ici.", speakText: "Il travaille ici.", translation: "He/She works here." },
            { native: "Nous habitons à Paris.", translation: "We live in Paris." },
            { native: "Vous êtes professeur.", translation: "You are a teacher. (formal/plural)" },
            { native: "Ils/Elles sont amis.", speakText: "Ils sont amis.", translation: "They are friends." },
        ]
    },
    {
        id: "fr-g-a1-2",
        level: "A1",
        title: "Être (to be)",
        explanation: `**Être** means 'to be'. It is completely irregular — memorise it!

Conjugation (present tense):
  je        → **suis**    (I am)
  tu        → **es**      (you are)
  il/elle   → **est**     (he/she is)
  nous      → **sommes**  (we are)
  vous      → **êtes**    (you are — formal/pl.)
  ils/elles → **sont**    (they are)

Used for: identity (Je suis étudiant), nationality (Elle est française), origin (Il est de Paris), time (Il est midi).

C'EST — ce + est = 'it is / this is / that is'
This fixed phrase is one of the most common in French. 'ce' never changes.
  C'est + article + noun:   C'est un livre.     (It's a book.)
  C'est + name/pronoun:     C'est Marie.        (It's Marie.)
  C'est + adjective:        C'est bon!          (That's good!)
  Question:                 C'est loin?         (Is it far?)

Unlike Spanish/Italian, French has only one verb for 'to be' — être handles all of these uses.`,
        examples: [
            { native: "Je suis française.", translation: "I am French." },
            { native: "Tu es étudiant.", translation: "You are a student." },
            { native: "Il est médecin.", translation: "He is a doctor." },
            { native: "Nous sommes fatigués.", translation: "We are tired." },
            { native: "C'est une bonne idée.", translation: "It's a good idea." },
        ]
    },
    {
        id: "fr-g-a1-3",
        level: "A1",
        title: "Definite Articles: le, la, l', les",
        explanation: `Definite articles (= 'the') agree with the gender and number of the noun.

SINGULAR
  le  — masculine before consonant:             le livre, le café, le père
  la  — feminine before consonant:              la maison, la rue, la mère
  l'  — masc. or fem. before vowel or silent h: l'ami, l'école, l'hôtel

PLURAL
  les — all genders:  les livres, les maisons, les amis

The silent h: words starting with h always take l' (not le/la) — the h is never pronounced:
  l'homme, l'heure, l'hôpital`,
        examples: [
            { native: "le livre", translation: "the book (masculine)" },
            { native: "la maison", translation: "the house (feminine)" },
            { native: "l'ami / l'amie", speakText: "l'ami, l'amie", translation: "the friend (vowel → l')" },
            { native: "les enfants", translation: "the children (plural)" },
            { native: "l'hôtel", translation: "the hotel (silent h → l')" },
        ]
    },
    {
        id: "fr-g-a1-4",
        level: "A1",
        title: "Indefinite Articles: un, une, des",
        explanation: `Indefinite articles (= 'a', 'an', 'some') agree with gender and number.

SINGULAR
  un  — masculine: un café, un livre, un ami
  une — feminine:  une pomme, une maison, une amie

PLURAL
  des — all genders: des amis, des maisons (= some friends, some houses)

After negation, un/une/des → de (or d' before a vowel):
  J'ai une voiture.   → Je n'ai pas de voiture.   (I don't have a car.)
  Il a des amis.      → Il n'a pas d'amis.         (He has no friends.)`,
        examples: [
            { native: "un café", translation: "a coffee (masculine)" },
            { native: "une pomme", translation: "an apple (feminine)" },
            { native: "des amis", translation: "some friends (plural)" },
            { native: "Je n'ai pas de voiture.", translation: "I don't have a car. (de after negation)" },
        ]
    },
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
        id: "fr-g-a1-6",
        level: "A1",
        title: "Avoir (to have)",
        explanation: `**Avoir** means 'to have'. It is also the auxiliary verb for the passé composé. The h is always silent — say j'ai, never je ai.

Conjugation (present tense):
  je        → **ai**      (I have)
  tu        → **as**      (you have)
  il/elle   → **a**       (he/she has)
  nous      → **avons**   (we have)
  vous      → **avez**    (you have)
  ils/elles → **ont**     (they have)

Common expressions with avoir:
  avoir faim / soif     → to be hungry / thirsty
  avoir ... ans         → to be ... years old
  avoir chaud / froid   → to be hot / cold
  avoir raison / tort   → to be right / wrong
  avoir besoin de       → to need
  avoir envie de        → to feel like / to want`,
        examples: [
            { native: "J'ai un chat.", translation: "I have a cat." },
            { native: "Tu as quel âge?", translation: "How old are you? (literally: you have what age?)" },
            { native: "Il a faim.", translation: "He is hungry. (literally: he has hunger)" },
            { native: "Nous avons une voiture.", translation: "We have a car." },
            { native: "Ils ont de la chance.", translation: "They are lucky. (literally: they have luck)" },
        ]
    },
    {
        id: "fr-g-a1-7",
        level: "A1",
        title: "Aller (to go)",
        explanation: `**Aller** means 'to go'. Its present tense is completely irregular — memorise it!

Conjugation (present tense):
  je        → **vais**    (I go)
  tu        → **vas**     (you go)
  il/elle   → **va**      (he/she goes)
  nous      → **allons**  (we go)
  vous      → **allez**   (you go)
  ils/elles → **vont**    (they go)

Key uses:
  Movement:    aller + à + place  →  Je vais au marché.   (I'm going to the market.)
  Near future: aller + infinitive →  Je vais manger.      (I'm going to eat.)
  Greeting:    Comment vas-tu? / Ça va?  (How are you?)`,
        examples: [
            { native: "Je vais au marché.", translation: "I'm going to the market." },
            { native: "Tu vas bien?", translation: "Are you well? / Are you going well?" },
            { native: "Elle va à l'école.", translation: "She goes to school." },
            { native: "Nous allons en France.", translation: "We are going to France." },
            { native: "Ils vont au cinéma.", translation: "They are going to the cinema." },
        ]
    },
    {
        id: "fr-g-a1-8",
        level: "A1",
        title: "Faire (to do / to make)",
        explanation: `**Faire** means 'to do' or 'to make'. It is highly irregular — memorise it!

Conjugation (present tense):
  je        → **fais**     (I do/make)
  tu        → **fais**     (you do/make)
  il/elle   → **fait**     (he/she does/makes)
  nous      → **faisons**  (we do/make)
  vous      → **faites**   (you do/make)  ← irregular! NOT 'faisez'
  ils/elles → **font**     (they do/make)

Common expressions with faire:
  faire du sport          → to do sport / exercise
  faire la cuisine        → to cook
  faire les courses       → to do the shopping
  faire la vaisselle      → to do the dishes
  faire une promenade     → to go for a walk
  faire beau / mauvais    → to be nice / bad weather (impersonal: il fait...)`,
        examples: [
            { native: "Je fais du sport.", translation: "I do sport." },
            { native: "Tu fais quoi?", translation: "What are you doing?" },
            { native: "Il fait beau aujourd'hui.", translation: "The weather is nice today." },
            { native: "Nous faisons les courses.", translation: "We are doing the shopping." },
            { native: "Vous faites la cuisine?", translation: "Do you cook?" },
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
        id: "fr-g-a1-11",
        level: "A1",
        title: "Adjective Agreement",
        explanation: `French adjectives agree with their noun in gender (masc./fem.) and number (sing./pl.).

REGULAR PATTERN — adjectives ending in consonant:
  Masc. singular:   grand     →  un grand homme
  Fem. singular:    grande    →  une grande femme         (+e)
  Masc. plural:     grands    →  de grands enfants        (+s)
  Fem. plural:      grandes   →  de grandes femmes        (+es)

Adjectives already ending in -e: same form for masc. and fem.:
  un livre facile / une idée facile
  un homme sympathique / une femme sympathique

IRREGULAR ADJECTIVES (must memorise):
  beau    → belle    | beaux / belles
  nouveau → nouvelle | nouveaux / nouvelles
  vieux   → vieille  | vieux / vieilles

POSITION — adjectives usually come AFTER the noun:
  un livre intéressant, une maison blanche, un film français

These common adjectives come BEFORE the noun:
  beau, grand, petit, bon, mauvais, jeune, vieux, nouveau
  un beau jardin, une petite maison, un bon repas`,
        examples: [
            { native: "un grand homme", translation: "a tall man (masc. singular)" },
            { native: "une grande femme", translation: "a tall woman (fem. singular → +e)" },
            { native: "de grands enfants", translation: "tall children (masc. plural → +s)" },
            { native: "une belle maison", translation: "a beautiful house (irregular: beau → belle)" },
            { native: "un livre intéressant", translation: "an interesting book" },
            { native: "une idée intéressante", translation: "an interesting idea (+ e)" },
        ]
    },
    {
        id: "fr-g-a1-12",
        level: "A1",
        title: "Numbers 1-20 & Telling Time",
        explanation: `NUMBERS 1-20 — reference table:
  1  un/une    2  deux      3  trois     4  quatre    5  cinq
  6  six       7  sept      8  huit      9  neuf      10 dix
  11 onze      12 douze     13 treize    14 quatorze  15 quinze
  16 seize     17 dix-sept  18 dix-huit  19 dix-neuf  20 vingt

Note: 17-19 use hyphens (dix-sept, dix-huit, dix-neuf).

TELLING THE TIME — use 'Il est' + time:
  Il est deux heures.                  = It's two o'clock.
  Il est deux heures et demie.         = It's half past two.
  Il est deux heures et quart.         = It's quarter past two.
  Il est deux heures moins le quart.   = It's quarter to two.

Special cases:
  Il est midi.      = It's noon.       (12h)
  Il est minuit.    = It's midnight.   (0h / 24h)
  Il est une heure. = It's one o'clock. (singular — une heure, not un)

24-hour clock: very common in French — Il est quatorze heures. (= 14h = 2pm)`,
        examples: [
            { native: "Il est deux heures.", translation: "It is two o'clock." },
            { native: "Il est trois heures et demie.", translation: "It is half past three." },
            { native: "Il est midi.", translation: "It is noon." },
            { native: "Il est sept heures du matin.", translation: "It is seven in the morning." },
            { native: "J'ai dix-neuf ans.", translation: "I am nineteen years old." },
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
        id: "fr-g-a1-14",
        level: "A1",
        title: "Contractions: au, du, aux, des",
        explanation: `WHAT À AND DE MEAN
Before learning contractions, you need to know why à and de are used.

  à  — to / at / in   (direction or location)
    Je vais à Paris.         = I'm going to Paris.
    Je suis à la maison.     = I'm at home.
    Je travaille à Paris.    = I work in Paris.

  de — of / from   (possession, origin, content)
    le livre de Marie        = Marie's book (= the book OF Marie)
    le livre du professeur   = the teacher's book (= the book OF the teacher)
    Je viens de Lyon.        = I come from Lyon.
    un verre de vin          = a glass of wine

So 'le livre du professeur' uses 'de' because it expresses possession — who the book belongs to.
And 'je vais au marché' uses 'à' because it expresses direction — where you're going.

CONTRACTIONS — when à or de meet le or les, they MUST contract:

  à  + le  → au    Je vais au marché.          (to the market)
  à  + les → aux   Elle parle aux étudiants.   (to the students)
  de + le  → du    Le livre du professeur.     (of the teacher)
  de + les → des   Il vient des États-Unis.    (from the United States)

NO contraction with la and l':
  à  + la  → à la    (unchanged)   Je vais à la boulangerie.
  à  + l'  → à l'    (unchanged)   Je vais à l'école.
  de + la  → de la   (unchanged)   Il vient de la campagne.
  de + l'  → de l'   (unchanged)   Elle revient de l'école.`,
        examples: [
            { native: "Je vais au marché.", translation: "I'm going to the market. (à + le = au)" },
            { native: "Elle parle aux étudiants.", translation: "She is speaking to the students. (à + les = aux)" },
            { native: "C'est le livre du professeur.", translation: "It's the teacher's book. (de + le = du)" },
            { native: "Il vient des États-Unis.", translation: "He comes from the United States. (de + les = des)" },
            { native: "Je vais à la boulangerie.", translation: "I'm going to the bakery. (à + la — no contraction)" },
            { native: "Elle revient de l'école.", translation: "She's coming back from school. (de + l' — no contraction)" },
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
        id: "fr-g-a1-17",
        level: "A1",
        title: "Likes & Dislikes: aimer, préférer, détester",
        explanation: `EXPRESSING LIKES AND DISLIKES
All three verbs are regular -er verbs in conjugation.

  J'aime...        → I like / love...
  J'aime bien...   → I quite like... (softer than 'j'aime')
  Je préfère...    → I prefer...
  Je n'aime pas... → I don't like...
  Je déteste...    → I hate / strongly dislike...

KEY RULE: after these verbs, always use le/la/les — NOT un/une/des:
  ✓ J'aime le café.      ✗ J'aime un café.
  ✓ Elle aime les chats. ✗ Elle aime des chats.

LIKING AN ACTIVITY — use the infinitive:
  J'aime lire.         = I like reading.
  Tu aimes cuisiner?   = Do you like cooking?

ASKING ABOUT PREFERENCES:
  Tu aimes...? / Vous aimez...?
  Qu'est-ce que tu préfères?
  Tu préfères le thé ou le café?`,
        examples: [
            { native: "J'aime le français.", translation: "I like French." },
            { native: "Tu aimes le café?", translation: "Do you like coffee?" },
            { native: "Elle n'aime pas le sport.", translation: "She doesn't like sport." },
            { native: "Nous aimons bien ce restaurant.", translation: "We quite like this restaurant." },
            { native: "Je préfère le thé au café.", translation: "I prefer tea to coffee." },
            { native: "Il déteste les légumes.", translation: "He hates vegetables." },
            { native: "Qu'est-ce que tu aimes faire?", translation: "What do you like to do?" },
        ]
    },
    {
        id: "fr-g-a1-18",
        level: "A1",
        title: "French Pronunciation — Key Rules",
        explanation: `French is famously difficult to pronounce because the written and spoken forms are very different. Many letters are silent, vowels have unusual sounds, and words run together in speech. These rules cover the most important patterns.

SILENT FINAL CONSONANTS
Most final consonants in French are silent. This is why most -er verb endings (parle, parles, parlent) sound identical:
  pas, est, beaucoup, vous parlez, ils parlent → final consonant silent
  Exceptions you must memorise: avec (with), chef, parc, fils

THE SILENT E
The letter e at the end of a word is almost always silent:
  table, livre, femme, rouge → final e not pronounced
  But e in the middle of a word is usually pronounced as a schwa (like the 'u' in 'about')

NASAL VOWELS — French has four nasal vowels (sounds made through the nose):
  an/en → like the English 'on' said nasally: France, enfant, manger
  in/ain → like the English 'an' said nasally: vin, main, bien
  on → like the English 'own' said nasally: bon, maison, ton
  un → like the English 'un' said nasally: un, lundi, brun
  When the vowel is followed by mm or nn, or comes before a vowel, it is NOT nasal: bonne, anime

LIAISON — linking words together
When a word ending in a normally silent consonant is followed by a word starting with a vowel, the consonant is pronounced and links to the next word:
  vous_avez (voo-za-vay), les_amis (lay-za-mee), nous_habitons (noo-za-bi-ton)
  This is mandatory in many contexts and completely changes how speech sounds.

ACCENTS
é (e accent aigu) → the closed e sound, like the 'ay' in 'say': café, étudiant
è (e accent grave) → the open e sound, like the 'e' in 'bet': très, après
ê (e circumflex) → similar to è but held slightly longer: être, fête
The accent on â, î, ô, û mostly distinguishes words from each other rather than changing sound significantly.

VOWEL SOUNDS — QUICK REFERENCE
  Spelling         Approximate sound         Example words
  ─────────────────────────────────────────────────────────
  é                'ay' (closed, tense)       café, été, étudiant
  è / ê / ai / ei  'eh' (open, relaxed)       très, être, mais, neige
  e (mid-word)     'uh' (schwa)               le, fenêtre, demain
  i / y            'ee'                       ici, livre, typique
  u                'ew' (round lips — no English equivalent)  tu, sur, rue
  ou               'oo'                       vous, rouge, tour
  o / ô / au / eau 'oh'                       or, rôle, aussi, beau
  eu / œu          'uh' (lips rounded)        bleu, peur, cœur
  ─────────────────────────────────────────────────────────
  NASALS (air through the nose — no English equivalent):
  an / en / am/em  'ahn'                      France, enfant, jambe
  in / ain / im    'an'                       vin, main, impossible
  on / om          'ohn'                      bon, ombre, nom
  un / um          'uhn'                      un, parfum`,
        examples: [
            { native: "ils parlent, vous mangez", translation: "Final -ent and -ez are silent — these sound like 'parl' and 'mang-ay'" },
            { native: "un enfant en France", translation: "Three nasal vowels in a row: un (nasal), en (nasal), an (nasal)" },
            { native: "vous_avez / les_amis", speakText: "vous avez, les amis", translation: "Liaison: the s in 'vous' and 'les' is pronounced before a vowel" },
            { native: "é → café / è → très / ê → être", speakText: "café, très, être", translation: "Three e-sounds: closed 'ay' (é), open 'eh' (è/ê) — accent = sound" },
            { native: "bonne vs bon", speakText: "bonne, bon", translation: "Double n before a vowel breaks the nasal sound — bonne is not nasal, bon is" },
        ]
    },
    {
        id: "fr-g-a1-20",
        level: "A1",
        title: "Ordering at a Café or Restaurant",
        explanation: `To order politely, use 'je voudrais' — the conditional of vouloir, used as a fixed courtesy phrase at A1.

ORDERING:
  Je voudrais + [item]   →  Je voudrais un café, s'il vous plaît.  (I would like a coffee.)
  Je prends + [item]     →  Je prends le steak.                    (I'll have the steak.)
  Vous avez + [item]?    →  Vous avez une table pour deux?         (Do you have a table for two?)

KEY PHRASES:
  La carte, s'il vous plaît.         → The menu, please.
  L'addition, s'il vous plaît.       → The bill, please.
  C'est combien?                     → How much is it?
  C'est tout.                        → That's all.
  Pour moi, ...                      → For me, ... (in a group order)

Je voudrais vs Je veux:
  'Je voudrais' (I would like) is more polite than 'Je veux' (I want).
  Both are understood, but 'je voudrais' is preferred when ordering or making requests.`,
        examples: [
            { native: "Je voudrais un café, s'il vous plaît.", translation: "I would like a coffee, please." },
            { native: "Je prends le menu à quinze euros.", translation: "I'll have the set menu for fifteen euros." },
            { native: "L'addition, s'il vous plaît.", translation: "The bill, please." },
            { native: "Vous avez une table pour deux?", translation: "Do you have a table for two?" },
            { native: "Pour moi, une eau minérale.", translation: "For me, a mineral water." },
        ]
    },
    {
        id: "fr-g-a1-21",
        level: "A1",
        title: "Possessive Adjectives",
        explanation: `Possessive adjectives agree with the NOUN they describe — not with the owner.

           MASC. SG.   FEM. SG.   PLURAL (all genders)
  my:      mon         ma         mes
  your:    ton         ta         tes    (informal — tu)
  his/her: son         sa         ses
  our:     notre       notre      nos
  your:    votre       votre      vos    (formal/plural — vous)
  their:   leur        leur       leurs

VOWEL RULE: mon/ton/son are used before feminine nouns starting with a vowel or silent h — to avoid two vowel sounds clashing:
  mon amie (not ma amie)   |   ton école   |   son histoire

Note: son/sa/ses means both 'his' and 'her' — context makes it clear:
  Il aime sa mère.   = He loves his mother.
  Elle aime sa mère. = She loves her mother.`,
        examples: [
            { native: "mon frère, ma sœur, mes parents", translation: "my brother, my sister, my parents" },
            { native: "son père et sa mère", translation: "his/her father and his/her mother" },
            { native: "notre famille, nos enfants", translation: "our family, our children" },
            { native: "mon amie Sophie", translation: "my friend Sophie (mon — not ma — before vowel)" },
            { native: "Leur maison est grande.", translation: "Their house is big." },
        ]
    },
    {
        id: "fr-g-a1-22",
        level: "A1",
        title: "Location Prepositions",
        explanation: `À — at / in (general location, cities, specific points):
  Je suis à Paris.          (I'm in Paris.)
  Elle est à l'école.        (She's at school.)
  → Combines with le/les: au bureau, aux États-Unis

DANS — in / inside (enclosed physical space):
  Je travaille dans un bureau.   (I work in an office — inside it.)
  Il est dans la maison.         (He is inside the house.)
  Je suis dans le bus.           (I'm on the bus — inside it.)

EN — in (countries fem., regions, months, seasons):
  Elle habite en France.   (She lives in France.)
  en été, en automne, en hiver

À vs DANS:
  à l'école = at school (generally)    dans l'école = physically inside the building

OTHER LOCATION PREPOSITIONS:
  sur          → on           Le livre est sur la table.
  sous         → under        Le chat est sous le lit.
  devant       → in front of  Il attend devant la gare.
  derrière     → behind       Le jardin est derrière la maison.
  à côté de    → next to      La boulangerie est à côté de la banque.
  près de      → near         L'hôtel est près de la gare.
  en face de   → opposite     La pharmacie est en face du café.
  entre        → between      La poste est entre la banque et la mairie.`,
        examples: [
            { native: "Je travaille dans un bureau.", translation: "I work in an office. (dans = inside a space)" },
            { native: "Elle est à l'école.", translation: "She is at school. (à = general location)" },
            { native: "Le chat est sous la table.", translation: "The cat is under the table." },
            { native: "La boulangerie est à côté de la banque.", translation: "The bakery is next to the bank." },
            { native: "Il habite en France.", translation: "He lives in France. (en + feminine country)" },
        ]
    },
    {
        id: "fr-g-a1-19",
        level: "A1",
        title: "Numbers 20-100 & the Calendar",
        explanation: `NUMBERS 20-100 — the tens are regular, but 70-99 use compound structures:
  20 vingt      30 trente     40 quarante   50 cinquante  60 soixante
  70 soixante-dix      (60 + 10)  — NOT septante*
  80 quatre-vingts     (4 × 20)   — NOT huitante*
  90 quatre-vingt-dix  (4 × 20 + 10) — NOT nonante*
  100 cent
  * Belgium and Switzerland use septante/huitante/nonante — simpler but non-standard in France.

COMPOUND NUMBERS:
  Use 'et' only for 21, 31, 41, 51, 61, 71:
    vingt et un / trente et un / soixante et onze
  No 'et' for 81, 91:
    quatre-vingt-un / quatre-vingt-onze

The -s on quatre-vingts disappears before another number:
  quatre-vingts (80) BUT quatre-vingt-cinq (85 — no s)

MONTHS:
  janvier, février, mars, avril, mai, juin
  juillet, août, septembre, octobre, novembre, décembre
  No capital letter for months in French.

SEASONS:
  le printemps (spring) / l'été (summer) / l'automne (autumn) / l'hiver (winter)
  En + season: en été, en automne, en hiver — but: au printemps`,
        examples: [
            { native: "J'ai soixante-dix euros.", translation: "I have seventy euros. (60 + 10)" },
            { native: "Il a quatre-vingts ans.", translation: "He is eighty years old. (4 × 20)" },
            { native: "Ça coûte quatre-vingt-cinq euros.", translation: "It costs eighty-five euros. (no -s on vingt)" },
            { native: "Elle est née en juillet.", translation: "She was born in July. (no capital)" },
            { native: "En été, il fait chaud.", translation: "In summer, it is hot." },
            { native: "Au printemps, les fleurs poussent.", translation: "In spring, the flowers grow. (au — not en)" },
        ]
    },
]
