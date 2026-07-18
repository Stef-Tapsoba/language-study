import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-19",
        level: "A1",
        title: "Le Passé Composé with Avoir — Talking About the Past",
        explanation: `This is the grammar landmark of A1 — the moment French becomes a real language for telling stories. You've been hearing past tense in dialogues since Block 3: *j'ai mangé, j'ai vu, j'ai fait*. You absorbed the sound of it long before the explanation arrived. Now let's see what's actually happening.

LE PASSÉ COMPOSÉ
Built from two parts: **avoir** (conjugated) + **past participle**. The full avoir conjugation is in the table below.

FORMING THE PAST PARTICIPLE

  **-er verbs**: drop -er, add **-é**
    manger → mangé   travailler → travaillé   regarder → regardé

  **-ir verbs**: drop -ir, add **-i**
    finir → fini   choisir → choisi

  **-re verbs**: drop -re, add **-u**
    vendre → vendu   attendre → attendu

IRREGULAR PAST PARTICIPLES — these must be memorised:
  avoir → **eu**     être → **été**     faire → **fait**
  prendre → **pris** voir → **vu**      boire → **bu**
  lire → **lu**      écrire → **écrit** dire → **dit**
  vouloir → **voulu** pouvoir → **pu**  devoir → **dû**

NEGATION — ne...pas wraps around avoir, not the past participle:
  Je **n'**ai **pas** mangé ce matin. — I didn't eat this morning.
  Il **n'**a **pas** travaillé hier. — He didn't work yesterday.

PAST TIME MARKERS — anchor your stories in time:
  hier — yesterday         la semaine dernière — last week
  il y a deux jours — two days ago     récemment — recently

You started A1 communicating in the present. Now you can reach into the past too.`,
        examples: [
            { native: "Hier soir, j'ai regardé un film excellent.", translation: "Last night, I watched an excellent film." },
            { native: "Tu as mangé quelque chose ce matin ?", translation: "Did you eat anything this morning?" },
            { native: "Elle a fini son travail à dix-huit heures.", translation: "She finished her work at six o'clock." },
            { native: "Nous avons vu ce film la semaine dernière.", translation: "We saw that film last week." },
            { native: "Il n'a pas pris son petit déjeuner ce matin.", translation: "He didn't have breakfast this morning." },
            { native: "J'ai fait les courses, puis j'ai cuisiné.", translation: "I did the shopping, then I cooked." },
        ],
        inlineVocab: [
            { word: "le passé composé", translation: "the perfect tense (past tense structure)" },
            { word: "le participe passé", translation: "the past participle" },
            { word: "hier", translation: "yesterday" },
            { word: "la semaine dernière", translation: "last week" },
            { word: "il y a + durée", translation: "... ago (il y a deux jours = two days ago)" },
            { word: "récemment", translation: "recently" },
            { word: "faire — fait", translation: "to do/make — done/made (irregular)" },
            { word: "voir — vu", translation: "to see — seen (irregular)" },
            { word: "prendre — pris", translation: "to take — taken (irregular)" },
        ],
        rules: [
            {
                condition: "Forming the passé composé with avoir",
                result: "Conjugated avoir + past participle (no agreement with subject)",
                examples: [
                    { native: "J'ai mangé une pizza.", translation: "I ate a pizza." },
                    { native: "Elle a travaillé toute la journée.", translation: "She worked all day." },
                    { native: "Ils ont vu ce film hier.", translation: "They saw that film yesterday." },
                ],
            },
            {
                condition: "Forming the past participle of a regular verb",
                result: "-er → -é | -ir → -i | -re → -u",
                heuristic: "manger → mang- + é → mangé · finir → fin- + i → fini · vendre → vend- + u → vendu",
                examples: [
                    { native: "manger → mangé / finir → fini / vendre → vendu", translation: "eat / eaten — finish / finished — sell / sold", annotation: "manger → mangé / finir → fini / vendre → vendu" },
                ],
            },
            {
                condition: "Negating the passé composé",
                result: "Ne ... pas wraps around avoir — the past participle stays outside",
                examples: [
                    { native: "Je n'ai pas mangé ce matin.", translation: "I didn't eat this morning." },
                    { native: "Il n'a pas travaillé hier.", translation: "He didn't work yesterday." },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Many very common verbs have irregular past participles: faire → fait, voir → vu, prendre → pris, boire → bu, vouloir → voulu. These must be memorised — there is no pattern to infer them from.",
            },
            {
                type: "tip",
                content: "The passé composé is the go-to past tense in spoken French. It covers both 'I ate' (simple past) and 'I have eaten' (present perfect) — French doesn't separate these the way English does.",
            },
            {
                type: "forward-ref",
                content: "The imparfait (j'habitais, c'était) describes past states and habits and is the second main past tense you'll learn at A2. For now, the passé composé handles all your storytelling needs.",
                refId: "fr-g-a1-22",
            },
        ],
        fixedPhrases: [
            { native: "Qu'est-ce que tu as fait hier ?", translation: "What did you do yesterday?", note: "The essential past-tense conversation starter." },
            { native: "J'ai bien mangé !", translation: "I ate well! / That was a good meal!", note: "A natural comment after any meal — très français." },
            { native: "Tu as vu ce film ?", translation: "Have you seen that film?", note: "Vu = irrégulier. High-frequency social question." },
            { native: "Il n'a pas répondu.", translation: "He didn't reply.", note: "Répondre → répondu (regular -re). Useful in many situations." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "avoir (auxiliaire)", forms: ["ai", "as", "a", "avons", "avez", "ont"] },
            ],
        },
    },
    {
        id: "fr-g-a1-20",
        level: "A1",
        title: "Le Passé Composé with Être — Going and Changing",
        explanation: `You've mastered the passé composé with avoir. Now there's a special group of verbs that use **être** instead. You've been hearing them: *je suis allé, elle est arrivée, ils sont partis*. Two things look different — can you spot them?

THE TWO DIFFERENCES WITH ÊTRE VERBS
1. The auxiliary is **être**, not avoir.
2. The past participle **agrees with the subject** — like an adjective (add -e for feminine, -s for plural, -es for feminine plural).

  il est all**é** — she is all**ée** — ils sont all**és** — elles sont all**ées**

THE ÊTRE VERBS — THE "HOUSE OF ÊTRE"
These verbs all express movement or a change of state. Most come in natural pairs (aller/venir, partir/arriver, entrer/sortir, monter/descendre). The full list with past participles is in the table below.

MEMORY TIP: Most être verbs come in pairs (go/come, leave/arrive, enter/exit, up/down). If one of a pair uses être, so does the other.

REFLEXIVE VERBS — also use être
All reflexive verbs (se lever, se coucher, se laver...) form their past tense with être:
  Je **me suis** levé(e). — I got up.
  Elle **s'est** couchée tard. — She went to bed late.

NEGATION — ne...pas wraps around être:
  Je **ne suis pas** allé au travail hier.
  Elle **n'est pas** rentrée tard.`,
        examples: [
            { native: "Samedi soir, je suis allé à une fête chez des amis.", translation: "Saturday evening, I went to a party at some friends' place." },
            { native: "Elle est arrivée en retard à la réunion.", translation: "She arrived late to the meeting." },
            { native: "Nous sommes partis tôt le matin.", translation: "We left early in the morning." },
            { native: "Ils sont restés à la maison tout le week-end.", translation: "They stayed at home all weekend." },
            { native: "Je me suis levée à sept heures ce matin.", translation: "I got up at seven this morning. (female speaker)" },
            { native: "Tu es rentré à quelle heure hier soir ?", translation: "What time did you get home last night?" },
        ],
        inlineVocab: [
            { word: "aller — allé(e)", translation: "to go — gone" },
            { word: "venir — venu(e)", translation: "to come — come" },
            { word: "partir — parti(e)", translation: "to leave — left" },
            { word: "arriver — arrivé(e)", translation: "to arrive — arrived" },
            { word: "sortir — sorti(e)", translation: "to go out — gone out" },
            { word: "rentrer — rentré(e)", translation: "to return home — returned home" },
            { word: "rester — resté(e)", translation: "to stay — stayed" },
            { word: "naître — né(e)", translation: "to be born — born" },
            { word: "tomber — tombé(e)", translation: "to fall — fallen" },
        ],
        rules: [
            {
                condition: "The verb expresses movement or a change of state (aller, venir, partir, arriver, etc.)",
                result: "Use être (not avoir) as the auxiliary in the passé composé",
                examples: [
                    { native: "Je suis allé au marché.", translation: "I went to the market." },
                    { native: "Elle est arrivée en retard.", translation: "She arrived late." },
                    { native: "Ils sont partis tôt.", translation: "They left early." },
                ],
            },
            {
                condition: "Subject is feminine (with être auxiliary)",
                result: "Add -e to the past participle",
                examples: [
                    { native: "Il est allé. → Elle est allée.", translation: "He went. / She went.", annotation: "Il est allé. → Elle est allée." },
                    { native: "Il est parti. → Elle est partie.", translation: "He left. / She left.", annotation: "Il est parti. → Elle est partie." },
                ],
            },
            {
                condition: "Subject is plural (with être auxiliary)",
                result: "Add -s (masculine) or -es (feminine plural) to the past participle",
                examples: [
                    { native: "Ils sont arrivés. Elles sont arrivées.", translation: "They arrived. (m) / They arrived. (f)" },
                ],
            },
            {
                condition: "The verb is reflexive (se lever, se coucher, s'habiller…)",
                result: "Reflexive verbs always form their passé composé with être",
                examples: [
                    { native: "Je me suis levé(e) à sept heures.", translation: "I got up at seven." },
                    { native: "Elle s'est couchée tard.", translation: "She went to bed late." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Most être verbs come in natural opposite pairs: aller/venir, partir/arriver, entrer/sortir, monter/descendre, naître/mourir. If one of a pair uses être, the other does too. Learn them in pairs.",
            },
            {
                type: "warning",
                content: "Don't forget the agreement: with être verbs, the past participle behaves like an adjective. 'Elle est allée' (not 'allé'), 'Elles sont parties' (not 'parti'). This is a very common written error.",
            },
            {
                type: "culture",
                content: "The être verb list is fixed and finite — there are roughly 16 movement/state verbs. Every other verb uses avoir. When in doubt, use avoir — you'll be right the vast majority of the time.",
            },
        ],
        fixedPhrases: [
            { native: "Je suis allé(e) au cinéma hier soir.", translation: "I went to the cinema last night.", note: "Template for any être verb in the past — swap the destination." },
            { native: "Elle est arrivée en retard.", translation: "She arrived late.", note: "Note the -e agreement — arrivée, not arrivé." },
            { native: "Tu es rentré(e) à quelle heure ?", translation: "What time did you get home?", note: "Rentrer = to return home. Very high-frequency question." },
            { native: "Je me suis bien amusé(e).", translation: "I had a great time.", note: "Reflexive verb in passé composé — être auxiliary + agreement." },
        ],
        paradigmTable: {
            pronouns: ["aller", "venir", "arriver", "partir", "entrer", "sortir", "naître", "mourir", "rester", "tomber", "monter", "descendre", "retourner", "passer"],
            verbs: [
                { label: "past participle", forms: ["allé(e)", "venu(e)", "arrivé(e)", "parti(e)", "entré(e)", "sorti(e)", "né(e)", "mort(e)", "resté(e)", "tombé(e)", "monté(e)", "descendu(e)", "retourné(e)", "passé(e)"] },
            ],
        },
    },
    {
        id: "fr-g-a1-21",
        level: "A1",
        title: "Regular -ir and -re Verbs",
        explanation: `You've been working with -er verbs since Block 1 — they're the dominant group. But French has two other regular verb families: **-ir** and **-re**. After this lesson, you'll know all three regular conjugation patterns. The full conjugations are in the table below.

Notice the **-iss-** that appears in the nous/vous/ils forms of -ir verbs — this is the distinctive marker of this group (finissons, finissez, finissent).

The -re verb il/elle form is distinctive: it has **no added ending** — the stem alone is used (il vend, not *il vende*).

KEY -IR VERBS
  finir — to finish    choisir — to choose    réussir — to succeed
  réfléchir — to think / reflect    grandir — to grow up

Past participle: drop -ir, add **-i** → fini, choisi, réussi

KEY -RE VERBS
  vendre — to sell    attendre — to wait    répondre — to answer
  entendre — to hear  perdre — to lose

Past participle: drop -re, add **-u** → vendu, attendu, répondu

PRENDRE — an essential irregular -re verb (must be memorised)
  je prends / tu prends / il prend / nous prenons / vous prenez / ils prennent
  Past participle: **pris**

THE COMPLETE PICTURE — all three regular families
  -er → -e/-es/-e/-ons/-ez/-ent     past participle: -é
  -ir → -is/-is/-it/-issons/-issez/-issent  past participle: -i
  -re → -s/-s/—/-ons/-ez/-ent       past participle: -u`,
        examples: [
            { native: "Elle finit le travail à dix-huit heures.", translation: "She finishes work at six o'clock." },
            { native: "Tu choisis quoi comme dessert ?", translation: "What are you choosing for dessert?" },
            { native: "Nous attendons le train depuis vingt minutes.", translation: "We've been waiting for the train for twenty minutes." },
            { native: "Il répond toujours aux messages très vite.", translation: "He always replies to messages very quickly." },
            { native: "J'ai réussi l'examen — je suis tellement soulagé !", translation: "I passed the exam — I'm so relieved!" },
            { native: "Ils prennent le bus pour aller au travail.", translation: "They take the bus to go to work." },
        ],
        inlineVocab: [
            { word: "finir", translation: "to finish" },
            { word: "choisir", translation: "to choose" },
            { word: "réussir", translation: "to succeed / to pass (an exam)" },
            { word: "réfléchir", translation: "to think / to reflect" },
            { word: "vendre", translation: "to sell" },
            { word: "attendre", translation: "to wait (for)" },
            { word: "répondre", translation: "to answer / to reply" },
            { word: "entendre", translation: "to hear" },
            { word: "prendre", translation: "to take (irregular — pris)" },
        ],
        rules: [
            {
                condition: "Conjugating a regular -ir verb (finir, choisir, réussir…)",
                result: "Remove -ir; add: -is / -is / -it / -issons / -issez / -issent",
                heuristic: "finir → fin- + ending · choisir → chois- + ending · réussir → réuss- + ending",
                examples: [
                    { native: "Je finis à dix-huit heures.", translation: "I finish at six o'clock." },
                    { native: "Nous finissons ensemble.", translation: "We finish together." },
                    { native: "Ils choisissent un restaurant.", translation: "They choose a restaurant." },
                ],
            },
            {
                condition: "Conjugating a regular -re verb (vendre, attendre, répondre…)",
                result: "Remove -re; add: -s / -s / — / -ons / -ez / -ent (il/elle form has no ending)",
                heuristic: "vendre → vend- + ending · attendre → attend- + ending · répondre → répond- + ending",
                examples: [
                    { native: "J'attends le bus.", translation: "I'm waiting for the bus." },
                    { native: "Il répond toujours vite.", translation: "He always replies quickly." },
                    { native: "Nous vendons des légumes.", translation: "We sell vegetables." },
                ],
            },
            {
                condition: "Using prendre (an essential irregular -re verb)",
                result: "je prends / tu prends / il prend / nous prenons / vous prenez / ils prennent",
                examples: [
                    { native: "Je prends le métro.", translation: "I take the metro." },
                    { native: "Ils prennent le bus.", translation: "They take the bus." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The distinctive marker of -ir verbs is the -iss- that appears in the nous/vous/ils forms: finissons, finissez, finissent. If you see -iss-, you're looking at an -ir verb conjugation.",
            },
            {
                type: "warning",
                content: "Not all -ir verbs follow the finir pattern. Partir, sortir, venir, and tenir are irregular. When you meet a new -ir verb, check whether it uses the -iss- pattern or has its own forms.",
            },
            {
                type: "forward-ref",
                content: "Now you know all three regular verb families: -er, -ir, -re. Combined with your irregular verbs (être, avoir, aller, vouloir, pouvoir, devoir), you have a complete A1 verb toolkit.",
                refId: "fr-g-a1-22",
            },
        ],
        fixedPhrases: [
            { native: "J'attends depuis vingt minutes.", translation: "I've been waiting for twenty minutes.", note: "Depuis + present tense = ongoing action — very natural complaint." },
            { native: "Tu choisis quoi ?", translation: "What are you choosing?", note: "Casual ordering question — choisis sounds like 'shwa-zee'." },
            { native: "J'ai réussi !", translation: "I passed! / I did it!", note: "Réussir = to succeed / to pass. Very satisfying to say." },
            { native: "Je prends le métro.", translation: "I take the metro.", note: "Prendre is irregular but extremely common — memorise all forms." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "finir", forms: ["finis", "finis", "finit", "finissons", "finissez", "finissent"] },
                { label: "vendre", forms: ["vends", "vends", "vend", "vendons", "vendez", "vendent"] },
            ],
        },
    },
    {
        id: "fr-g-a1-23",
        level: "A1",
        title: "Demonstratives — ce, cet, cette, ces (this / that)",
        explanation: `You already point at things constantly in conversation — "this restaurant," "that guy," "these books." French has one small word family for all of it: **ce / cet / cette / ces**. Unlike English, French doesn't normally distinguish "this" from "that" — context (or a gesture) does that work.

THE FORMS

  **ce** — before a masculine singular noun starting with a consonant: **ce restaurant**, **ce livre**
  **cet** — before a masculine singular noun starting with a vowel or silent h (to avoid the vowel clash): **cet homme**, **cet ami**
  **cette** — before any feminine singular noun: **cette femme**, **cette école**
  **ces** — before any plural noun, masculine or feminine: **ces livres**, **ces amies**

Notice the pattern is exactly like mon/ma/mes and le/la/les — French keeps reusing the same masculine/feminine/vowel-clash/plural logic across word families. If you learned possessives, you already understand demonstratives.

BEING MORE PRECISE: -CI AND -LÀ
If you need to distinguish "this one here" from "that one there," add **-ci** or **-là** to the noun:
  **ce livre-ci** — this book (here)
  **ce livre-là** — that book (there)
This is optional — most everyday French just says "ce livre" and lets context carry the meaning.`,
        examples: [
            { native: "Ce restaurant est excellent.", translation: "This restaurant is excellent." },
            { native: "Cet homme travaille avec moi.", translation: "That man works with me." },
            { native: "Cette voiture est très chère.", translation: "This car is very expensive." },
            { native: "Ces chaussures sont jolies.", translation: "These shoes are pretty." },
            { native: "Je préfère ce livre-ci.", translation: "I prefer this book (here)." },
            { native: "Tu connais cette chanson ?", translation: "Do you know this song?" },
        ],
        inlineVocab: [
            { word: "ce / cet / cette / ces", translation: "this / that (masc. / masc. before vowel / fem. / plural)" },
            { word: "-ci / -là", translation: "here / there (attached to a noun for extra precision)" },
            { word: "le restaurant", translation: "the restaurant" },
            { word: "la voiture", translation: "the car" },
            { word: "les chaussures (f)", translation: "the shoes" },
            { word: "la chanson", translation: "the song" },
        ],
        rules: [
            {
                condition: "Masculine singular noun starting with a consonant",
                result: "Use ce",
                examples: [
                    { native: "Ce livre est intéressant.", translation: "This book is interesting." },
                    { native: "Ce quartier est calme.", translation: "This neighbourhood is quiet." },
                ],
            },
            {
                condition: "Masculine singular noun starting with a vowel or silent h",
                result: "Use cet (not ce) to avoid the vowel clash",
                examples: [
                    { native: "Cet appartement est petit.", translation: "This flat is small." },
                    { native: "Cet hôtel est complet.", translation: "This hotel is fully booked." },
                ],
            },
            {
                condition: "Feminine singular noun (any first letter)",
                result: "Use cette",
                examples: [
                    { native: "Cette ville est magnifique.", translation: "This city is magnificent." },
                    { native: "Cette idée est excellente.", translation: "This idea is excellent." },
                ],
            },
            {
                condition: "Plural noun (masculine or feminine)",
                result: "Use ces",
                examples: [
                    { native: "Ces enfants sont polis.", translation: "These children are polite." },
                    { native: "Ces photos sont belles.", translation: "These photos are beautiful." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The choice between ce/cet/cette/ces follows the same logic you already know from mon/ma/mes and articles: gender of the noun, plus a vowel-clash exception for masculine nouns.",
            },
            {
                type: "tip",
                content: "French doesn't force a this/that distinction the way English does. 'Ce livre' can mean either 'this book' or 'that book' — only add -ci/-là when you specifically need to contrast two things.",
            },
        ],
        fixedPhrases: [
            { native: "Ce n'est pas grave.", translation: "It's not a big deal / never mind.", note: "Extremely common filler — not literally about a specific object." },
            { native: "C'est combien, ce livre ?", translation: "How much is this book?", note: "Classic shopping question." },
            { native: "Cette semaine, je suis très occupé.", translation: "This week, I'm very busy.", note: "cette + time word is a common way to talk about the present period." },
        ],
        paradigmTable: {
            pronouns: ["masculine", "masculine (vowel/h)", "feminine", "plural"],
            verbs: [
                { label: "this / that", forms: ["ce", "cet", "cette", "ces"] },
            ],
        },
    },
    {
        id: "fr-g-a1-24",
        level: "A1",
        title: "Il y a — There Is, There Are",
        explanation: `**Il y a** is one of the most useful phrases in French — and one of the easiest, because it never changes form. It means both "there is" and "there are," for singular or plural, masculine or feminine.

THE KEY RULE: **il y a** stays exactly the same no matter what follows it.
  Il y a un café. — There is a café.
  Il y a des cafés. — There are (some) cafés.
  Il y a une pharmacie. — There is a pharmacy.

Unlike English, which switches between "there is" and "there are" depending on number, French speakers never have to think about agreement here — il y a is frozen.

ASKING "IS THERE...?"
To turn it into a question, just add **est-ce qu'** in front, or flip the intonation up at the end:
  Est-ce qu'il y a un supermarché près d'ici ? — Is there a supermarket nearby?
  Il y a des toilettes ici ? — Is there a toilet here? (casual, rising intonation)

SAYING "THERE ISN'T / AREN'T"
Negate it like any other verb phrase, wrapping ne...pas around the "y a" part:
  Il n'y a pas de pharmacie ici. — There isn't a pharmacy here.
Notice: after a negated il y a, the article disappears and becomes simply **de** (or **d'** before a vowel) — the same pattern you've seen with other negated nouns.`,
        examples: [
            { native: "Il y a un problème.", translation: "There is a problem." },
            { native: "Il y a des restaurants dans cette rue.", translation: "There are restaurants on this street." },
            { native: "Il y a une pharmacie à côté.", translation: "There is a pharmacy next door." },
            { native: "Est-ce qu'il y a un parking ici ?", translation: "Is there a car park here?" },
            { native: "Il n'y a pas de lait dans le frigo.", translation: "There isn't any milk in the fridge." },
            { native: "Il y a beaucoup de monde aujourd'hui.", translation: "There are a lot of people today." },
        ],
        inlineVocab: [
            { word: "il y a", translation: "there is / there are (never changes form)" },
            { word: "est-ce qu'il y a...?", translation: "is there... / are there...?" },
            { word: "il n'y a pas de...", translation: "there isn't any... / there aren't any..." },
            { word: "un problème", translation: "a problem" },
            { word: "beaucoup de monde", translation: "a lot of people" },
        ],
        rules: [
            {
                condition: "Stating that something exists (singular or plural)",
                result: "il y a + noun — never changes form",
                examples: [
                    { native: "Il y a un chat dans le jardin.", translation: "There is a cat in the garden." },
                    { native: "Il y a des chats dans le jardin.", translation: "There are cats in the garden." },
                ],
            },
            {
                condition: "Asking whether something exists",
                result: "Est-ce qu'il y a...? or rising intonation on il y a...?",
                examples: [
                    { native: "Est-ce qu'il y a des toilettes ?", translation: "Is there a toilet?" },
                    { native: "Il y a un problème ?", translation: "Is there a problem?" },
                ],
            },
            {
                condition: "Saying something doesn't exist",
                result: "Il n'y a pas de + noun (article drops to de/d')",
                examples: [
                    { native: "Il n'y a pas de pain.", translation: "There isn't any bread." },
                    { native: "Il n'y a pas d'eau.", translation: "There isn't any water." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Il y a is one of the few French verb phrases that truly never conjugates for number — a rare shortcut in a language full of agreement rules. Use it with confidence.",
            },
            {
                type: "warning",
                content: "Don't confuse il y a (there is/are) with c'est (it is) or il est (he/it is) — il y a is only for saying something exists somewhere, never for identifying or describing.",
            },
        ],
        fixedPhrases: [
            { native: "Il y a combien de temps ?", translation: "How long ago?", note: "il y a also means 'ago' with time expressions — a second, unrelated use worth recognising." },
            { native: "Qu'est-ce qu'il y a ?", translation: "What's wrong? / What's the matter?", note: "Extremely common — asked when someone looks upset." },
            { native: "Il y a du monde !", translation: "It's crowded! / There are a lot of people!", note: "Common exclamation entering a busy place." },
        ],
    },
    {
        id: "fr-g-a1-25",
        level: "A1",
        title: "Savoir vs Connaître — Two Ways to Know",
        explanation: `French has two verbs for "to know," and English speakers often reach for the wrong one. Getting this right early saves a lot of confusion later.

**SAVOIR** — knowing facts, information, or how to do something.
  Je sais où est la gare. — I know where the station is. (a fact)
  Je sais nager. — I know how to swim. (a skill — savoir + infinitive)
  Tu sais son numéro ? — Do you know his number?

**CONNAÎTRE** — being familiar with a person, place, or thing.
  Je connais Paris. — I know Paris. (I've been there / I'm familiar with it)
  Je connais Marie. — I know Marie. (I've met her)
  Tu connais ce restaurant ? — Do you know this restaurant?

THE QUICK TEST: could you say "I'm familiar with ___" in English instead of "I know ___"? If yes, use connaître. If it's a fact, a piece of information, or a skill, use savoir.

Compare the two directly:
  Je sais où est ce restaurant. (I know its location — a fact)
  Je connais ce restaurant. (I've eaten there — I'm familiar with it)

Both verbs are irregular — see the conjugation table below. Note that **connaître** is the one that gives you **reconnaître** (to recognise) later on.`,
        examples: [
            { native: "Je sais parler un peu d'espagnol.", translation: "I know how to speak a bit of Spanish." },
            { native: "Tu sais quelle heure il est ?", translation: "Do you know what time it is?" },
            { native: "Je connais très bien ce quartier.", translation: "I know this neighbourhood very well." },
            { native: "Est-ce que tu connais mon frère ?", translation: "Do you know my brother?" },
            { native: "Je ne sais pas.", translation: "I don't know." },
            { native: "Nous connaissons un bon restaurant italien.", translation: "We know a good Italian restaurant." },
        ],
        inlineVocab: [
            { word: "savoir", translation: "to know (facts, information, how to do something)" },
            { word: "connaître", translation: "to know (be familiar with a person, place, thing)" },
            { word: "je sais / je ne sais pas", translation: "I know / I don't know" },
            { word: "reconnaître", translation: "to recognise" },
        ],
        rules: [
            {
                condition: "You mean a fact, piece of information, or a skill (savoir + infinitive)",
                result: "Use savoir",
                examples: [
                    { native: "Je sais son adresse.", translation: "I know his/her address." },
                    { native: "Elle sait conduire.", translation: "She knows how to drive." },
                ],
            },
            {
                condition: "You mean familiarity with a person, place, or thing",
                result: "Use connaître",
                examples: [
                    { native: "Je connais ta sœur.", translation: "I know your sister." },
                    { native: "Il connaît bien la ville.", translation: "He knows the city well." },
                ],
            },
            {
                condition: "You're not sure which one to use",
                result: "Ask: could I say 'I'm familiar with' instead of 'I know'? If yes → connaître. If it's a fact/skill → savoir",
                examples: [
                    { native: "Je sais que Paris est la capitale.", translation: "I know that Paris is the capital. (fact → savoir)" },
                    { native: "Je connais Paris.", translation: "I know Paris. (familiarity → connaître)" },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Never use connaître before 'que' (that) or a question word (où, quand, pourquoi...) — those always take savoir: 'je sais que...', 'je sais où...', never 'je connais que...'.",
            },
            {
                type: "tip",
                content: "Savoir + infinitive means 'to know how to' — je sais nager (I know how to swim). Connaître is never followed directly by an infinitive.",
            },
        ],
        fixedPhrases: [
            { native: "Je ne sais pas.", translation: "I don't know.", note: "One of the most useful phrases in the language." },
            { native: "Tu connais ?", translation: "Do you know it/them? (casual)", note: "Short, very common in spoken French." },
            { native: "On ne sait jamais.", translation: "You never know.", note: "Common idiomatic phrase." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"],
            verbs: [
                { label: "savoir", forms: ["sais", "sais", "sait", "savons", "savez", "savent"] },
                { label: "connaître", forms: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"] },
            ],
        },
    },
    {
        id: "fr-g-a1-22",
        level: "A1",
        title: "A1 Capstone — Everything You Can Do",
        explanation: `No new grammar today. This lesson is something different: a moment to look back at what you've built — and realise how much you can do.

You started A1 not knowing a single word of French. Look at what you can say now.

A MODEL A1 PARAGRAPH — read this out loud and notice what you understand:

"Je m'appelle Sophie, j'ai vingt-huit ans et je suis française. J'habite à Lyon depuis trois ans — avant, j'habitais à Paris. Je travaille dans une école primaire comme professeure. J'aime beaucoup lire et voyager. Le week-end dernier, je suis allée au marché le matin, puis j'ai retrouvé des amis pour déjeuner. C'était très sympa. La semaine prochaine, je vais partir en vacances en Espagne avec ma famille — je suis vraiment impatiente !"

That paragraph contains: greetings and identity, origin and location, job and habits, past events, and a future plan. You can read it, understand it, and — with a little practice — produce something similar about yourself.

YOUR A1 GRAMMAR MAP
  **Être and avoir** — the two essential verbs
  **-er verbs (full)** — the engine of the language
  **-ir and -re verbs** — all three regular families complete
  **Reflexive verbs** — daily routines
  **Passé composé** — avoir verbs + être verbs + agreement
  **Futur proche** — aller + infinitive
  **Modals** — vouloir / pouvoir / devoir
  **Negation** — ne...pas / ne...jamais / ne...plus
  **Questions** — three forms + all question words
  **Articles** — definite / indefinite / partitive
  **Possessives** — mon, ma, mes, ton, ta, son, sa...
  **Adjective agreement** — gender and number
  **Connectors** — et, mais, donc, parce que, d'abord, ensuite...

WHAT COMES NEXT AT A2
  L'imparfait — describing past states and habits (c'était, j'avais...)
  Object pronouns — le, la, lui, leur (replacing nouns in sentences)
  The futur simple — je travaillerai, nous partirons
  Subjonctif basics — il faut que tu...
  More irregular verbs and nuanced vocabulary

You have the foundation. A2 is where you build the walls.`,
        examples: [
            { native: "Je m'appelle Sophie et j'habite à Lyon depuis trois ans.", translation: "My name is Sophie and I've been living in Lyon for three years." },
            { native: "Le week-end dernier, je suis allée au marché et j'ai acheté des légumes.", translation: "Last weekend, I went to the market and bought some vegetables." },
            { native: "J'aime voyager parce que ça m'ouvre l'esprit.", translation: "I like travelling because it opens my mind." },
            { native: "Je dois travailler ce soir, mais je vais me reposer demain.", translation: "I have to work tonight, but I'm going to rest tomorrow." },
            { native: "D'abord je me suis levé, ensuite j'ai pris un café, puis je suis sorti.", translation: "First I got up, then I had a coffee, then I went out." },
            { native: "J'étudie le français depuis six mois et je peux déjà avoir des conversations.", translation: "I've been studying French for six months and I can already have conversations." },
        ],
        inlineVocab: [
            { word: "depuis", translation: "for / since (with present tense for ongoing actions)" },
            { word: "avant", translation: "before / previously" },
            { word: "maintenant", translation: "now" },
            { word: "vraiment", translation: "really / truly" },
            { word: "impatient(e)", translation: "impatient / eager / can't wait" },
            { word: "sympa (sympathique)", translation: "nice / pleasant" },
            { word: "formidable", translation: "wonderful / great" },
            { word: "l'imparfait", translation: "the imperfect tense (coming at A2)" },
            { word: "un pronom", translation: "a pronoun (object pronouns coming at A2)" },
        ],
        rules: [
            {
                condition: "Describing an action that began in the past and is still ongoing",
                result: "Use present tense + depuis (not passé composé)",
                examples: [
                    { native: "J'étudie le français depuis six mois.", translation: "I've been studying French for six months. (still studying now)" },
                    { native: "Il habite à Paris depuis dix ans.", translation: "He's been living in Paris for ten years." },
                ],
            },
            {
                condition: "Describing a past event",
                result: "Use passé composé (with avoir or être as appropriate)",
                examples: [
                    { native: "Le week-end dernier, je suis allé au marché.", translation: "Last weekend, I went to the market." },
                    { native: "J'ai acheté des légumes et j'ai cuisiné.", translation: "I bought some vegetables and cooked." },
                ],
            },
            {
                condition: "Talking about a future plan",
                result: "Use futur proche (aller + infinitive) with a future time expression",
                examples: [
                    { native: "La semaine prochaine, je vais partir en vacances.", translation: "Next week, I'm going to go on holiday." },
                    { native: "Demain, on va fêter ça !", translation: "Tomorrow, we're going to celebrate!" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The tense trio you now control: present (je travaille), passé composé (j'ai travaillé), futur proche (je vais travailler). These three carry you through virtually all real A1 conversation.",
            },
            {
                type: "warning",
                content: "Depuis with the present tense is a false friend for English speakers. 'J'habite ici depuis deux ans' = 'I have been living here for two years' (not 'I lived here'). The present tense signals it's still happening.",
            },
            {
                type: "culture",
                content: "French A1 is a genuine communicative level. You can introduce yourself, describe your life and family, talk about daily routines, navigate a café, give and follow directions, and tell simple stories about the past and future.",
            },
        ],
        fixedPhrases: [
            { native: "J'étudie le français depuis six mois.", translation: "I've been studying French for six months.", note: "Depuis + present = ongoing since a point in the past." },
            { native: "C'était vraiment sympa.", translation: "It was really nice.", note: "C'était = it was (imparfait — you'll study this formally at A2)." },
            { native: "Je suis vraiment content(e) !", translation: "I'm really happy!", note: "Vraiment intensifies any adjective — use it freely." },
            { native: "À bientôt !", translation: "See you soon!", note: "Standard parting phrase — warmer than au revoir." },
        ],
    },
]
