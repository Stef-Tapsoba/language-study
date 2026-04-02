import { GrammarLesson } from "../../../../types"

export const practicalExpressionsLessons: GrammarLesson[] = [
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

24-hour clock: very common in French — Il est quatorze heures. (= 14h = 2pm)

ORDINAL NUMBERS — first, second, third...
Only two ordinal numbers are essential at A1:
  **premier / première**  → first    (le 1er mai, le premier étage)
  **deuxième**            → second   (le deuxième jour)
  **dernier / dernière**  → last     (la dernière fois)
Note: premier is irregular; all others add -ième to the cardinal number (trois → troisième).
The -ième endings are introduced fully at A2.`,
        examples: [
            { native: "Il est deux heures.", translation: "It is two o'clock." },
            { native: "Il est trois heures et demie.", translation: "It is half past three." },
            { native: "Il est midi.", translation: "It is noon." },
            { native: "Il est sept heures du matin.", translation: "It is seven in the morning." },
            { native: "J'ai dix-neuf ans.", translation: "I am nineteen years old." },
        ],
        inlineVocab: [
            { word: "heures", translation: "hours / o'clock" },
            { word: "demie", translation: "half (demi/demie)" },
            { word: "quart", translation: "quarter" },
            { word: "midi", translation: "noon" },
            { word: "minuit", translation: "midnight" },
            { word: "matin", translation: "morning" },
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
        ],
        inlineVocab: [
            { word: "café", translation: "coffee / café" },
            { word: "chats", translation: "cats" },
            { word: "restaurant", translation: "restaurant" },
            { word: "thé", translation: "tea" },
            { word: "légumes", translation: "vegetables" },
            { word: "sport", translation: "sport" },
            { word: "lire", translation: "to read" },
            { word: "cuisiner", translation: "to cook" },
        ]
    },
    {
        id: "fr-g-a1-18",
        level: "A1",
        exerciseType: "dictation" as const,
        title: "French Pronunciation — Getting Started",
        explanation: `French sounds very different from how it is written. These are the four things you must know on day one.

1. SILENT FINAL CONSONANTS
Most final consonants are not pronounced:
  pas, est, beaucoup, vous parlez, ils parlent → final consonant silent
  The -ent ending on verbs is always silent: ils parlent sounds like ils "parl".
  Exceptions to memorise: avec, chef, parc, fils

2. THE SILENT E
A final -e is almost always silent: table, livre, rouge, femme.
A mid-word e is usually a short schwa sound (like 'uh'): le, demain, fenêtre.

3. NASAL VOWELS
French has vowels pronounced through the nose. Four patterns to recognise:
  an/en  → "ahn"  France, enfant, manger
  in/ain → "an"   vin, main, bien
  on     → "ohn"  bon, maison, on
  un     → "uhn"  un, lundi
  Warning: nn or mm after the vowel breaks the nasal — bonne is NOT nasal.

4. LIAISON — words link together
When a word with a silent final consonant is followed by a word starting with a vowel, the consonant is pronounced and joins the next word:
  vous_avez (voo-ZA-vay)  ·  les_amis (lay-ZA-mee)  ·  nous_habitons (noo-ZA-bi-ton)

For the full vowel chart, accents, and detailed sound guide, see the companion lesson "Pronunciation — Complete Reference" (fr-g-a1-18b).`,
        examples: [
            { native: "ils parlent / vous mangez", translation: "Final -ent and -ez are silent — sounds like 'parl' and 'mang-ay'" },
            { native: "un enfant en France", translation: "Three nasals in a row: un (nasal), en (nasal), an (nasal)" },
            { native: "vous avez / les amis", speakText: "vous avez, les amis", translation: "Liaison: the s in 'vous' and 'les' links to the next vowel" },
            { native: "bonne vs bon", speakText: "bonne, bon", translation: "Double n breaks the nasal — bonne is not nasal, bon is" },
        ],
        inlineVocab: [
            { word: "pas", translation: "not / step" },
            { word: "beaucoup", translation: "a lot / very much" },
            { word: "avec", translation: "with" },
            { word: "enfant", translation: "child" },
            { word: "maison", translation: "house / home" },
            { word: "bonne", translation: "good (feminine)" },
            { word: "bon", translation: "good (masculine)" },
        ]
    },
    {
        id: "fr-g-a1-18b",
        level: "A1",
        exerciseType: "dictation" as const,
        title: "Pronunciation — Complete Reference",
        explanation: `A full guide to French sounds for reference throughout your A1 journey. Return to this lesson whenever you encounter an unfamiliar sound.

ACCENTS AND THE E SOUNDS
  **é** (e accent aigu) → closed 'ay' sound, like the 'ay' in 'say': café, étudiant, été
  **è** (e accent grave) → open 'eh' sound, like the 'e' in 'bet': très, après
  **ê** (e circumflex) → similar to è, slightly longer: être, fête
  Other accents (â, î, ô, û) mostly distinguish words from each other rather than change sound.

VOWEL SOUNDS — COMPLETE CHART
  Spelling          Approximate sound                    Examples
  ──────────────────────────────────────────────────────────────
  é                 'ay' (closed, tense)                 café, été, étudiant
  è / ê / ai / ei   'eh' (open, relaxed)                 très, être, mais, neige
  e (mid-word)      'uh' (schwa)                         le, fenêtre, demain
  i / y             'ee'                                 ici, livre, typique
  u                 'ew' (round lips — no English equiv) tu, sur, rue
  ou                'oo'                                 vous, rouge, tour
  o / ô / au / eau  'oh'                                 or, rôle, aussi, beau
  eu / œu           rounded 'uh' (lips rounded forward)  bleu, peur, cœur
  ──────────────────────────────────────────────────────────────

NASAL VOWELS — COMPLETE CHART
  Spelling          Sound    Examples
  ──────────────────────────────────────
  an / en / am / em 'ahn'    France, enfant, jambe, temps
  in / ain / im     'an'     vin, main, impossible
  on / om           'ohn'    bon, ombre, nom
  un / um           'uhn'    un, parfum
  ──────────────────────────────────────
  Rule: nn or mm after a nasal vowel spelling breaks the nasalisation.
  bonne → NOT nasal (double n)  |  bon → nasal

THE U SOUND — the hardest for English speakers
  The French **u** has no English equivalent. Shape your mouth to say 'ee', then round your lips tightly as if saying 'oo' — without moving your tongue.
  tu, sur, rue, vu, mur

THE U vs OU DISTINCTION
  **u**   = lips tightly rounded, tongue forward: tu (you), sur (on), rue (street)
  **ou**  = lips loosely rounded, tongue back: vous (you), rouge (red), tour (tower)
  These are completely different sounds — mixing them up changes the word.`,
        examples: [
            { native: "é → café / è → très / ê → être", speakText: "café, très, être", translation: "Three e-sounds: 'ay' (é), 'eh' (è/ê) — accent changes the sound" },
            { native: "tu vs vous / sur vs rouge", speakText: "tu, vous, sur, rouge", translation: "u vs ou — two very different rounded vowels" },
            { native: "un enfant en France", translation: "Three different nasal vowels: un / en / an — all distinct" },
            { native: "France, bonne, vin", speakText: "France, bonne, vin", translation: "France = nasal an; bonne = NOT nasal (double n); vin = nasal in" },
        ],
        inlineVocab: [
            { word: "café", translation: "café / coffee" },
            { word: "étudiant", translation: "student" },
            { word: "très", translation: "very" },
            { word: "après", translation: "after" },
            { word: "être", translation: "to be" },
            { word: "fête", translation: "party / celebration" },
            { word: "fenêtre", translation: "window" },
            { word: "sur", translation: "on / over / about" },
            { word: "rue", translation: "street" },
            { word: "tour", translation: "tower / tour / turn" },
            { word: "bleu", translation: "blue" },
            { word: "peur", translation: "fear" },
            { word: "cœur", translation: "heart" },
            { word: "jambe", translation: "leg" },
            { word: "ombre", translation: "shadow / shade" },
            { word: "nom", translation: "name / noun" },
            { word: "parfum", translation: "perfume / fragrance" },
            { word: "vin", translation: "wine" },
            { word: "main", translation: "hand" },
            { word: "fils", translation: "son" },
            { word: "chef", translation: "chef / head / boss" },
            { word: "parc", translation: "park" },
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
        ],
        inlineVocab: [
            { word: "café", translation: "coffee / café" },
            { word: "steak", translation: "steak" },
            { word: "carte", translation: "menu / card / map" },
            { word: "addition", translation: "bill / check" },
            { word: "table", translation: "table" },
            { word: "eau", translation: "water" },
            { word: "minérale", translation: "mineral (eau minérale = mineral water)" },
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
        ],
        inlineVocab: [
            { word: "bureau", translation: "office / desk" },
            { word: "école", translation: "school" },
            { word: "maison", translation: "house / home" },
            { word: "chat", translation: "cat" },
            { word: "lit", translation: "bed" },
            { word: "gare", translation: "train station" },
            { word: "jardin", translation: "garden" },
            { word: "banque", translation: "bank" },
            { word: "boulangerie", translation: "bakery" },
            { word: "pharmacie", translation: "pharmacy" },
            { word: "poste", translation: "post office" },
            { word: "mairie", translation: "town hall" },
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
        ],
        inlineVocab: [
            { word: "printemps", translation: "spring" },
            { word: "été", translation: "summer" },
            { word: "automne", translation: "autumn / fall" },
            { word: "hiver", translation: "winter" },
            { word: "fleurs", translation: "flowers" },
            { word: "chaud", translation: "hot / warm" },
            { word: "juillet", translation: "July" },
            { word: "janvier", translation: "January" },
            { word: "décembre", translation: "December" },
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
        ],
        inlineVocab: [
            { word: "supermarché", translation: "supermarket" },
            { word: "pharmacie", translation: "pharmacy" },
            { word: "lait", translation: "milk" },
            { word: "toilettes", translation: "toilets / restrooms" },
            { word: "sac", translation: "bag" },
            { word: "élèves", translation: "students / pupils" },
            { word: "problèmes", translation: "problems" },
            { word: "médecin", translation: "doctor" },
        ]
    },
]
