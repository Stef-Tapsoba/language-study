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
    id: "fr-g-a1-26",
    level: "A1",
    title: "Demonstratives: ce, cet, cette, ces",
    explanation: `Demonstrative adjectives mean 'this', 'that', 'these', or 'those'. In French, they agree with the gender and number of the noun they modify.

FORMS:
  **ce**    — masculine singular before consonant:      ce livre, ce café
  **cet**   — masculine singular before vowel/silent h: cet homme, cet hôtel
  **cette** — feminine singular:                        cette maison, cette idée
  **ces**   — all plurals:                              ces livres, ces maisons

French does not always distinguish 'this' from 'that'. To be specific, add -ci (here) or -là (there) after the noun:
  ce livre-**ci**  → this book (near you)
  ce livre-**là**  → that book (over there)

DEMONSTRATIVE PRONOUNS
To replace a noun entirely (this one / that one):
  **ceci** — this (thing)      Regarde ceci.      (Look at this.)
  **cela** / **ça** — that    Je veux ça.        (I want that.)
  In spoken French, ça is far more common than cela.`,
    examples: [
      { native: "Ce café est excellent.", translation: "This coffee is excellent." },
      { native: "Cet hôtel est très cher.", translation: "This hotel is very expensive." },
      { native: "Cette robe est magnifique.", translation: "This dress is magnificent." },
      { native: "Ces chaussures sont confortables.", translation: "These shoes are comfortable." },
      { native: "Je préfère ce livre-ci.", translation: "I prefer this book (here). (-ci for emphasis)" },
      { native: "C'est ça!", translation: "That's it! / Exactly! (very common spoken French)" },
    ]
  },
  {
    id: "fr-g-a1-27",
    level: "A1",
    title: "Adverbs of Place & Time",
    explanation: `Adverbs of place and time are single words that answer WHERE and WHEN. They do not change form (no agreement).

PLACE — where?
  **ici**        here             Je suis ici.
  **là**         there            Il est là.
  **là-bas**     over there       La gare est là-bas.
  **partout**    everywhere       Il y a des touristes partout.
  **quelque part** somewhere      Je l'ai vu quelque part.
  **nulle part** nowhere          Je ne vais nulle part.
  **en haut**    upstairs / up    La chambre est en haut.
  **en bas**     downstairs / down L'entrée est en bas.

TIME — when?
  **aujourd'hui** today           Aujourd'hui il fait beau.
  **demain**      tomorrow        On se voit demain.
  **hier**        yesterday       Il est parti hier.
  **maintenant**  now             Je suis occupé maintenant.
  **bientôt**     soon            À bientôt!
  **déjà**        already         Tu as déjà mangé?
  **encore**      still / again   Il dort encore.
  **tôt**         early           Je me lève tôt.
  **tard**        late            Il rentre tard.`,
    examples: [
      { native: "La banque est là-bas.", translation: "The bank is over there." },
      { native: "Aujourd'hui je travaille à la maison.", translation: "Today I'm working from home." },
      { native: "Tu as déjà vu ce film?", translation: "Have you already seen this film?" },
      { native: "Il est encore au bureau.", translation: "He is still at the office." },
      { native: "On mange ici ou là-bas?", translation: "Are we eating here or over there?", speakText: "On mange ici ou là-bas?" },
    ]
  },
  {
    id: "fr-g-a1-28",
    level: "A1",
    title: "Frequency Adverbs",
    explanation: `Frequency adverbs answer the question 'How often?'. They are placed **after the conjugated verb** in French — not before it as in English.

  **toujours**       always          Je prends toujours un café le matin.
  **souvent**        often           Elle sort souvent le soir.
  **parfois**        sometimes       Il pleut parfois en été.
  **quelquefois**    sometimes       (less common than parfois)
  **de temps en temps** from time to time  De temps en temps, je lis.
  **rarement**       rarely          Je mange rarement de la viande.
  **jamais**         never           Il ne mange jamais de poisson.

POSITION — after the main verb:
  Je mange ✓ toujours ✓ le petit-déjeuner.  (NOT: Toujours je mange...)
  Elle est souvent fatiguée.

JAMAIS always needs ne before the verb (ne...jamais):
  Je ne bois jamais d'alcool.     (I never drink alcohol.)
  Elle n'est jamais en retard.    (She is never late.)`,
    examples: [
      { native: "Je prends toujours un café le matin.", translation: "I always have a coffee in the morning." },
      { native: "Nous allons souvent au marché.", translation: "We often go to the market." },
      { native: "Il mange parfois au restaurant.", translation: "He sometimes eats at a restaurant." },
      { native: "Je ne regarde jamais la télévision.", translation: "I never watch television." },
      { native: "Elle vient rarement ici.", translation: "She rarely comes here." },
    ]
  },
  {
    id: "fr-g-a1-29",
    level: "A1",
    title: "Basic Connectors",
    explanation: `Connectors link ideas together. Learning these allows you to build longer, more natural sentences instead of short disconnected ones.

COORDINATING CONNECTORS (join two equal clauses):
  **et**          and             J'aime le café et le thé.
  **ou**          or              Tu veux du café ou du thé?
  **mais**        but             Je veux venir mais je suis fatigué.
  **donc**        so / therefore  Il pleut donc je reste.
  **car**         because (formal) Je reste car il pleut.
  **alors**       so / then       Il était fatigué, alors il a dormi.

SUBORDINATING CONNECTORS (introduce a clause):
  **parce que**   because         Je mange parce que j'ai faim.
  **parce qu'**   because (before vowel) Je pars parce qu'il est tard.
  **quand**       when            J'appelle quand j'arrive.
  **si**          if              Si tu veux, on peut partir.
  **que**         that            Je pense que c'est vrai.

SEQUENCE:
  **d'abord**     first           D'abord, je me lève.
  **ensuite**     then / next     Ensuite, je mange.
  **enfin**       finally / at last  Enfin, je pars.
  **puis**        then            Je prends un café, puis je travaille.`,
    examples: [
      { native: "J'aime le café mais je préfère le thé.", translation: "I like coffee but I prefer tea." },
      { native: "Je reste à la maison parce qu'il pleut.", translation: "I stay at home because it's raining." },
      { native: "Si tu veux, on peut aller au cinéma.", translation: "If you want, we can go to the cinema." },
      { native: "D'abord je mange, ensuite je travaille.", translation: "First I eat, then I work.", speakText: "D'abord je mange, ensuite je travaille." },
      { native: "Il est tard, donc je dois partir.", translation: "It's late, so I have to leave." },
    ]
  },
  {
    id: "fr-g-a1-30",
    level: "A1",
    title: "Weather Expressions",
    explanation: `French weather uses impersonal constructions — always with the subject **il** (it), which doesn't refer to a person.

WITH IL FAIT (it is / it makes):
  **il fait beau**      nice weather         Il fait beau aujourd'hui.
  **il fait mauvais**   bad weather          Il fait mauvais ce matin.
  **il fait chaud**     it's hot             Il fait très chaud en juillet.
  **il fait froid**     it's cold            Il fait froid en hiver.
  **il fait du soleil** it's sunny           Il fait du soleil.
  **il fait du vent**   it's windy           Il fait du vent en automne.
  **il fait ... degrés** it's ... degrees    Il fait 25 degrés.

WITH IL Y A (there is / there are):
  **il y a des nuages**    it's cloudy / there are clouds
  **il y a du brouillard** it's foggy
  **il y a de l'orage**    there's a storm

VERB EXPRESSIONS (these are full verbs):
  **il pleut**      it's raining     (pleuvoir — irregular)
  **il neige**      it's snowing     (neiger)
  **il gèle**       it's freezing    (geler)

SEASONS — always with en (except printemps):
  **en hiver** (in winter) · **au printemps** (in spring) · **en été** (in summer) · **en automne** (in autumn)`,
    examples: [
      { native: "Il fait beau et chaud aujourd'hui.", translation: "The weather is nice and warm today." },
      { native: "Il pleut beaucoup en automne.", translation: "It rains a lot in autumn." },
      { native: "Il neige en hiver dans les montagnes.", translation: "It snows in winter in the mountains." },
      { native: "Il fait froid ce matin — il gèle!", translation: "It's cold this morning — it's freezing!" },
      { native: "Quel temps fait-il?", translation: "What's the weather like? (the standard question)" },
    ]
  },
  {
    id: "fr-g-a1-31",
    level: "A1",
    title: "Partitive Articles: du, de la, de l', des",
    explanation: `Partitive articles express an unspecified quantity — the English equivalent is 'some', or simply no article at all. Use them when you want part of something rather than a specific, countable unit.

FORMS — same as the contractions you know from lesson 14, but used differently:

  du   — masculine singular:              du pain, du café, du fromage
  de la — feminine singular:              de la viande, de la limonade, de la chance
  de l' — masc. or fem. before vowel:    de l'eau, de l'huile, de l'argent
  des   — all plurals:                    des légumes, des œufs, des amis

PARTITIVE vs CONTRACTION — same form, different meaning
You already know du and des as contractions of de + le / de + les (lesson 14).
The form is identical — the meaning depends on context:

  Contraction:  Le livre du professeur.   = The teacher's book.   (de = of/possession)
  Partitive:    Je mange du pain.          = I eat some bread.    (du = unspecified quantity)

The easiest test: can you replace it with 'some'? If yes, it's a partitive.

AFTER NEGATION — all partitive forms become de (or d' before a vowel):
  Je veux du café.          → Je ne veux pas de café.
  Elle mange de la viande.  → Elle ne mange pas de viande.
  Il boit de l'eau.         → Il ne boit pas d'eau.
  Tu as des amis.           → Tu n'as pas d'amis.

DEFINITE vs INDEFINITE vs PARTITIVE — quick comparison:
  le café    → coffee in general / coffee as a concept   (Je n'aime pas le café.)
  un café    → one coffee, a specific coffee             (Je veux un café.)
  du café    → some coffee, an unspecified amount        (Je bois du café.)`,
    examples: [
      { native: "Je veux du pain.", translation: "I want some bread. (du — masc. sg.)" },
      { native: "Elle boit de la limonade.", translation: "She drinks some lemonade. (de la — fem. sg.)" },
      { native: "Tu veux de l'eau?", translation: "Do you want some water? (de l' — before vowel)" },
      { native: "Je mange des légumes.", translation: "I eat some vegetables. (des — plural)" },
      { native: "Je ne bois pas de café.", translation: "I don't drink coffee. (de after negation)" },
      { native: "J'aime le café. / Je bois du café.", translation: "I like coffee (in general). / I drink some coffee (quantity).", speakText: "J'aime le café. Je bois du café." },
    ]
  },
  {
    id: "fr-g-a1-32",
    level: "A1",
    title: "Il y a — There Is / There Are",
    explanation: `IL Y A is one of the most useful expressions in French. It means 'there is' or 'there are' — the same form is used for both singular and plural. Unlike English, it never changes.

STRUCTURE
  il y a + noun

  Il y a un café près d'ici.      There is a café nearby.
  Il y a des étudiants ici.       There are students here.

NEGATIVE — il n'y a pas de
After negation, the article disappears and is replaced by de (or d' before a vowel):
  Il y a du lait.              → Il n'y a pas de lait.       (There's no milk.)
  Il y a une pharmacie.        → Il n'y a pas de pharmacie.  (There's no pharmacy.)
  Il y a des problèmes.        → Il n'y a pas de problèmes.  (There are no problems.)

QUESTION — est-ce qu'il y a / il y a... ?
  Est-ce qu'il y a un hôtel ici?     Is there a hotel here?
  Il y a des toilettes?               Are there toilets? (intonation question)
  Qu'est-ce qu'il y a?                What is there? / What's the matter?

WITH TIME — il y a also means 'ago':
  Il y a deux ans.     Two years ago.
  Il y a cinq minutes. Five minutes ago.
This use will become important at A2 — just recognise it for now.

IL Y A vs C'EST / CE SONT
  il y a    → signals existence or presence (there is something)
  c'est     → identifies or describes (it is something specific)
  Il y a un médecin.   There is a doctor. (existence)
  C'est mon médecin.   He is my doctor.   (identification)`,
    examples: [
      { native: "Il y a un supermarché près d'ici.", translation: "There is a supermarket nearby." },
      { native: "Il y a des étudiants dans la classe.", translation: "There are students in the classroom." },
      { native: "Il n'y a pas de lait.", translation: "There is no milk. (de after negation)" },
      { native: "Est-ce qu'il y a une pharmacie ici?", translation: "Is there a pharmacy here?" },
      { native: "Qu'est-ce qu'il y a dans ce sac?", translation: "What is there in this bag? / What's in this bag?" },
      { native: "Il y a combien d'élèves?", translation: "How many students are there?" },
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
  {
    id: "fr-g-a1-36",
    level: "A1",
    title: "C'est vs Il est / Elle est — Identifying vs Describing",
    explanation: `C'est and il est / elle est both translate as 'it is' or 'he/she is' in English, but they are not interchangeable in French. Choosing the wrong one is one of the most common errors at A1 and A2.

THE CORE RULE

C'EST — used to identify. It introduces or presents something.
IL EST / ELLE EST — used to describe. It gives information about something already known.

C'EST + ARTICLE + NOUN (identification):
  C'est un médecin.        He is a doctor. / It's a doctor.
  C'est une bonne idée.    It's a good idea.
  C'est le professeur.     He's the teacher.
  C'est ma mère.           This is my mother.

IL EST / ELLE EST + ADJECTIVE (description, no article):
  Il est médecin.          He is a doctor. (profession as description — no article)
  Elle est française.      She is French.
  Il est fatigué.          He is tired.
  Elle est intelligente.   She is intelligent.

THE KEY DIFFERENCE WITH PROFESSIONS
This is where learners make the most errors:
  C'est un médecin.    ← article present → c'est
  Il est médecin.      ← no article → il est
Both are correct but mean slightly different things:
  Il est médecin.         He is a doctor. (profession as identity — neutral)
  C'est un bon médecin.   He is a good doctor. (identified + qualified — adjective forces c'est)

RULE: as soon as an adjective or article modifies the noun → use c'est:
  Il est médecin.          ✓
  C'est un médecin.        ✓
  C'est un bon médecin.    ✓
  Il est un bon médecin.   ✗

PLURAL — ce sont (not c'est):
  Ce sont des étudiants.   They are students.
  Ce sont mes amis.        These are my friends.

QUESTIONS
  C'est qui?       Who is it?
  C'est quoi?      What is it?
  C'est combien?   How much is it?
  C'est loin?      Is it far?

COMMON FIXED EXPRESSIONS WITH C'EST:
  C'est ça.        That's it. / Exactly.
  C'est vrai.      That's true.
  C'est dommage.   That's a shame.
  C'est normal.    That's normal.
  C'est bon.       That's good. / It tastes good.`,
    examples: [
      { native: "C'est un hôtel.", translation: "It's a hotel. (c'est + article + noun — identification)" },
      { native: "Il est grand et moderne.", translation: "It is big and modern. (il est + adjective — description)" },
      { native: "C'est mon professeur.", translation: "He is my teacher. (c'est + possessive — identification)" },
      { native: "Il est professeur.", translation: "He is a teacher. (il est + profession, no article)" },
      { native: "C'est un bon professeur.", translation: "He is a good teacher. (adjective present → c'est)" },
      { native: "Ce sont mes amis.", translation: "These are my friends. (plural → ce sont)" },
      { native: "C'est combien?", translation: "How much is it?" },
    ]
  },
  {
    id: "fr-g-a1-37",
    level: "A1",
    title: "Stressed Pronouns — Moi, Toi, Lui, Elle...",
    explanation: `Stressed pronouns (also called tonic or disjunctive pronouns) are a separate set of pronouns used in specific positions where the regular subject pronouns (je, tu, il...) cannot be used. They appear constantly in everyday French.

THE FORMS

  Subject pronoun    Stressed pronoun
  je                 moi      (me / I)
  tu                 toi      (you)
  il                 lui      (him)
  elle               elle     (her)
  nous               nous     (us / we)
  vous               vous     (you)
  ils                eux      (them — masc.)
  elles              elles    (them — fem.)

Note: nous, vous, and elle/elles are the same as the subject pronouns. Only je→moi, tu→toi, il→lui, ils→eux change.

WHEN TO USE STRESSED PRONOUNS

1. AFTER PREPOSITIONS — any preposition requires a stressed pronoun, never a subject pronoun:
  avec moi          with me           Tu viens avec moi?
  chez toi          at your place     On se retrouve chez toi?
  pour lui          for him           C'est pour lui.
  sans elle         without her       Il est parti sans elle.
  avant nous        before us         Ils sont arrivés avant nous.
  après vous        after you         Je pars après vous.

2. AFTER C'EST / CE SONT:
  C'est moi.        It's me.
  C'est toi?        Is it you?
  C'est lui.        It's him.
  Ce sont eux.      It's them.

3. ALONE OR IN SHORT ANSWERS (no verb):
  Qui parle français? — Moi!     Who speaks French? — Me!
  Qui veut du café? — Moi!       Who wants coffee? — Me!

4. FOR EMPHASIS — doubling the subject:
  Moi, je parle français.        I (for my part) speak French.
  Lui, il ne travaille pas.      He doesn't work (but others do).
  Toi, tu fais quoi?             What about you — what are you doing?

5. IN COMPARISONS (see A2 comparatives):
  Elle est plus grande que moi.  She is taller than me.
  Il travaille autant que toi.   He works as much as you.

6. AUSSI / NON PLUS — me too / me neither:
  Moi aussi.        Me too.
  Moi non plus.     Me neither.`,
    examples: [
      { native: "C'est moi.", translation: "It's me." },
      { native: "Tu viens avec moi?", translation: "Are you coming with me?" },
      { native: "C'est pour toi.", translation: "It's for you." },
      { native: "On mange chez lui ce soir.", translation: "We're eating at his place tonight." },
      { native: "Moi, j'aime le café. Et toi?", translation: "I like coffee. And you?" },
      { native: "Moi aussi!", translation: "Me too!" },
      { native: "Ils sont partis sans nous.", translation: "They left without us." },
    ]
  },
]
