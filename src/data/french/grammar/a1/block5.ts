import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-19",
        level: "A1",
        title: "Le Passé Composé with Avoir — Talking About the Past",
        explanation: `This is the grammar landmark of A1 — the moment French becomes a real language for telling stories. You've been hearing past tense in dialogues since Block 3: *j'ai mangé, j'ai vu, j'ai fait*. You absorbed the sound of it long before the explanation arrived. Now let's see what's actually happening.

LE PASSÉ COMPOSÉ
Built from two parts: **avoir** (conjugated) + **past participle**

  j'**ai** mangé — I ate / I have eaten
  tu **as** regardé — you watched
  il / elle **a** travaillé — he/she worked
  nous **avons** fini — we finished
  vous **avez** visité — you visited
  ils / elles **ont** commandé — they ordered

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
These verbs all express movement or a change of state. Most come in natural pairs:

  aller / allé — to go       venir / venu — to come
  partir / parti — to leave  arriver / arrivé — to arrive
  entrer / entré — to enter  sortir / sorti — to go out
  monter / monté — to go up  descendre / descendu — to go down
  rentrer / rentré — to return home
  rester / resté — to stay
  tomber / tombé — to fall
  passer / passé — to pass (by)
  naître / né — to be born
  mourir / mort — to die
  devenir / devenu — to become

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
    },
    {
        id: "fr-g-a1-21",
        level: "A1",
        title: "Regular -ir and -re Verbs",
        explanation: `You've been working with -er verbs since Block 1 — they're the dominant group. But French has two other regular verb families: **-ir** and **-re**. After this lesson, you'll know all three regular conjugation patterns. That is a complete toolkit for regular verb forms.

REGULAR -IR VERBS — using **finir** (to finish) and **choisir** (to choose)

  je **finis**        tu **finis**        il/elle **finit**
  nous **finissons**  vous **finissez**   ils/elles **finissent**

Notice the **-iss-** that appears in the nous/vous/ils forms — this is the distinctive feature of -ir verbs in this group.

KEY -IR VERBS
  finir — to finish    choisir — to choose    réussir — to succeed
  réfléchir — to think / reflect    grandir — to grow up

Past participle: drop -ir, add **-i** → fini, choisi, réussi

REGULAR -RE VERBS — using **vendre** (to sell) and **attendre** (to wait)

  je **vends**        tu **vends**        il/elle **vend** (no ending!)
  nous **vendons**    vous **vendez**     ils/elles **vendent**

Note: the il/elle form has no extra ending — the stem alone is used.

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
    },
]
