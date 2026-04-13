import { GrammarLesson } from "../../../../types"

export const block3Lessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-9",
        level: "A1",
        title: "Reflexive Verbs — Daily Routines",
        explanation: `You've been using **je m'appelle** since your very first French lesson — now you know why it works the way it does. It's a reflexive verb: an action you do **to yourself**.

**What makes a verb reflexive?**
Reflexive verbs have two parts: the ordinary verb + a **reflexive pronoun** (me, te, se, nous, vous, se) that bounces the action back to the subject — like a mirror. The pronoun must always match the subject:
  je → me (m' before a vowel) · tu → te (t' before a vowel) · il/elle/on → se (s' before a vowel) · nous → nous · vous → vous · ils/elles → se

The full conjugation of **se lever** (to get up) is in the table below. Note the accent: the stem changes to **lève** in the singular and ils/elles forms — a spelling pattern you'll see with several -er verbs.

DAILY ROUTINE REFLEXIVE VERBS
  se réveiller — to wake up
  se lever — to get up
  se doucher — to shower
  se laver — to wash (oneself)
  s'habiller — to get dressed
  se coucher — to go to bed
  se reposer — to rest

NEGATION — the reflexive pronoun stays inside the ne...pas brackets:
  Je **ne me** lève **pas** tôt. — I don't get up early.
  Elle **ne se** couche **pas** avant minuit. — She doesn't go to bed before midnight.

The pronoun never escapes to the outside of the negation — remember, it travels with the verb.`,
        examples: [
            { native: "Je me lève à sept heures.", translation: "I get up at seven o'clock." },
            { native: "Tu te douches le matin ou le soir ?", translation: "Do you shower in the morning or in the evening?" },
            { native: "Elle se réveille à six heures et demie.", translation: "She wakes up at half six." },
            { native: "Nous nous couchons tard le week-end.", translation: "We go to bed late at the weekend." },
            { native: "Je ne me lève pas tôt le dimanche.", translation: "I don't get up early on Sundays." },
            { native: "Il se lave et s'habille avant le petit déjeuner.", translation: "He washes and gets dressed before breakfast." },
        ],
        inlineVocab: [
            { word: "se lever", translation: "to get up" },
            { word: "se réveiller", translation: "to wake up" },
            { word: "se coucher", translation: "to go to bed" },
            { word: "se doucher", translation: "to shower" },
            { word: "s'habiller", translation: "to get dressed" },
            { word: "se laver", translation: "to wash (oneself)" },
            { word: "se reposer", translation: "to rest / relax" },
            { word: "tôt", translation: "early" },
            { word: "tard", translation: "late" },
        ],
        rules: [
            {
                condition: "Conjugating a reflexive verb",
                result: "Match the reflexive pronoun to the subject: me / te / se / nous / vous / se",
                examples: [
                    { native: "Je me lève à sept heures.", translation: "I get up at seven o'clock." },
                    { native: "Tu te couches à quelle heure ?", translation: "What time do you go to bed?" },
                    { native: "Il se douche le matin.", translation: "He showers in the morning." },
                ],
            },
            {
                condition: "The verb begins with a vowel",
                result: "Me, te, se contract to m', t', s'",
                examples: [
                    { native: "Je m'appelle Marie.", translation: "My name is Marie." },
                    { native: "Il s'habille rapidement.", translation: "He gets dressed quickly." },
                    { native: "Elle s'appelle Claire.", translation: "Her name is Claire." },
                ],
            },
            {
                condition: "Negating a reflexive verb",
                result: "The reflexive pronoun stays inside the ne...pas brackets",
                examples: [
                    { native: "Je ne me lève pas tôt.", translation: "I don't get up early." },
                    { native: "Elle ne se couche pas avant minuit.", translation: "She doesn't go to bed before midnight." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "You've already been using a reflexive verb since lesson one: 'Je m'appelle'. Now you know the grammar behind it. Reflexive verbs are simply actions you do to yourself.",
            },
            {
                type: "warning",
                content: "In negation, the reflexive pronoun stays before the verb — inside the ne...pas frame. 'Je ne me lève pas' — not 'Je me ne lève pas'.",
            },
            {
                type: "forward-ref",
                content: "Reflexive verbs in the passé composé always use être as the auxiliary: 'Je me suis levé(e)'. This is covered in the Block 5 lesson on être passé composé.",
                refId: "fr-g-a1-20",
            },
        ],
        fixedPhrases: [
            { native: "Je m'appelle...", translation: "My name is...", note: "The most important reflexive phrase — you've been using it since day one." },
            { native: "Je me lève tôt le lundi.", translation: "I get up early on Mondays.", note: "Template for describing your weekly routine." },
            { native: "Je me couche vers onze heures.", translation: "I go to bed around eleven o'clock.", note: "Vers (around) makes it sound natural rather than mechanical." },
            { native: "Je m'en vais.", translation: "I'm leaving. / I'm off.", note: "A very natural way to announce you're leaving — more polite than 'je pars'." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"],
            verbs: [
                { infinitive: "se lever", forms: ["me lève", "te lèves", "se lève", "nous levons", "vous levez", "se lèvent"] },
            ],
        },
    },
    {
        id: "fr-g-a1-10",
        level: "A1",
        title: "The Full -er Verb System",
        explanation: `Here's one of the most powerful things you can learn in French: master the -er verb pattern and you can talk about almost everything. Want to describe your work, your hobbies, your weekends, your relationships? Almost every verb you reach for is an -er verb.

You already know the first three forms. The complete six-form conjugation is in the table below.

The key moment: the **nous** and **vous** forms stand out. They sound completely different from the others — and that's useful.

THE THREE-SOUND RULE (spoken French secret)
Written French has six forms. Spoken French effectively has three sounds:
  je/tu/il/elle/ils/elles → all sound the same: "travay"
  nous → "travayON"
  vous → "travayAY"

This means you can always tell from the sound which group you're in — even if you can't hear the subject pronoun clearly.

SPELLING NOTE — manger and verbs like it
Verbs ending in -ger add an **e** before -ons to preserve the soft g sound:
  nous **mangeons** (not mangons)

THE -ER VERB TOOLKIT
  parler — travailler — étudier — aimer — habiter
  écouter — regarder — chercher — penser — rester

After this lesson, you can conjugate any regular -er verb with all six persons. That is the engine that drives most of French.`,
        examples: [
            { native: "Je parle français et un peu espagnol.", translation: "I speak French and a little Spanish." },
            { native: "Nous travaillons de neuf heures à dix-huit heures.", translation: "We work from nine to six." },
            { native: "Vous habitez à Paris ?", translation: "Do you live in Paris?" },
            { native: "Ils écoutent de la musique le soir.", translation: "They listen to music in the evening." },
            { native: "Elle cherche un appartement près du centre.", translation: "She is looking for a flat near the centre." },
            { native: "Nous mangeons ensemble le dimanche.", translation: "We eat together on Sundays." },
        ],
        inlineVocab: [
            { word: "parler", translation: "to speak" },
            { word: "travailler", translation: "to work" },
            { word: "habiter", translation: "to live / to reside" },
            { word: "écouter", translation: "to listen (to)" },
            { word: "regarder", translation: "to watch / to look at" },
            { word: "chercher", translation: "to look for" },
            { word: "manger", translation: "to eat" },
            { word: "aimer", translation: "to like / to love" },
            { word: "étudier", translation: "to study" },
            { word: "rester", translation: "to stay / to remain" },
        ],
        rules: [
            {
                condition: "Conjugating any regular -er verb — all six persons",
                result: "Remove -er; add: -e / -es / -e / -ons / -ez / -ent",
                heuristic: "travailler → travaill- + ending · parler → parl- + ending · manger → mang- + ending",
                examples: [
                    { native: "Je parle, tu parles, il parle.", translation: "I speak, you speak, he speaks." },
                    { native: "Nous travaillons, vous travaillez, ils travaillent.", translation: "We work, you work, they work." },
                ],
            },
            {
                condition: "Verbs ending in -ger (manger, voyager, nager…)",
                result: "Add -e before the -ons ending to keep the soft g sound",
                examples: [
                    { native: "Nous mangeons.", translation: "We eat. (not 'mangons')" },
                    { native: "Nous voyageons souvent.", translation: "We travel often." },
                ],
            },
            {
                condition: "In spoken French, how many distinct sounds does a regular -er verb have?",
                result: "Three — je/tu/il/elle/ils/elles all sound the same; nous and vous are distinct",
                examples: [
                    { native: "je travaille / tu travailles / il travaille / ils travaillent", translation: "All sound like 'travay' — only nous (travayON) and vous (travayAY) differ." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The ils/elles ending -ent is always silent in speech. 'Ils travaillent' sounds exactly like 'il travaille'. The written -ent is purely a spelling convention — it will never affect your pronunciation.",
            },
            {
                type: "culture",
                content: "Nous is being replaced by on in casual spoken French for 'we': 'On travaille ensemble' sounds much more natural than 'Nous travaillons ensemble' in everyday conversation. Both are correct — learn to use on.",
            },
            {
                type: "warning",
                content: "Nous and vous are spelled differently from the others and sound completely different. Don't apply the silent-ending rule to them: nous travaillONS and vous travaillEZ are fully pronounced.",
            },
        ],
        fixedPhrases: [
            { native: "On travaille ensemble.", translation: "We work together.", note: "On replaces nous in casual spoken French." },
            { native: "Vous habitez à Paris ?", translation: "Do you live in Paris?", note: "Standard polite question using vous — works for formal singular or plural." },
            { native: "Ils écoutent tout.", translation: "They listen to everything.", note: "Useful reminder: écouter takes a direct object (pas de à)." },
            { native: "Nous mangeons ensemble le dimanche.", translation: "We eat together on Sundays.", note: "Note mangeons — the -ge- rule in action." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle", "nous", "vous", "ils / elles"],
            verbs: [
                { infinitive: "travailler", forms: ["travaille", "travailles", "travaille", "travaillons", "travaillez", "travaillent"] },
                { infinitive: "parler", forms: ["parle", "parles", "parle", "parlons", "parlez", "parlent"] },
                { infinitive: "manger", forms: ["mange", "manges", "mange", "mangeons", "mangez", "mangent"] },
            ],
        },
    },
    {
        id: "fr-g-a1-11",
        level: "A1",
        title: "Asking Questions Three Ways",
        explanation: `Real conversation isn't just responding — it's steering. When you can ask the questions you need, you control the exchange. French offers three different question strategies, and knowing all three means you'll recognise any question you hear and produce the right one for any situation.

THE THREE QUESTION STRATEGIES

**1. Rising intonation** (casual — just raise your voice at the end):
  Tu parles français ?
  Elle est française ?
  This is the most natural option in everyday speech. Use it freely with friends.

**2. Est-ce que** (neutral — works in all situations):
  Est-ce que tu parles français ?
  Est-ce qu'elle est française ?
  The formula: **est-ce que** + normal word order. Est-ce que contracts to **est-ce qu'** before a vowel. This is your go-to structure — clear, correct, and completely natural.

**3. Inversion** (formal — verb before subject):
  Parles-tu français ?
  Habitez-vous à Paris ?
  You'll see this in writing and hear it in formal speech. For now: recognise it, but don't worry about producing it.

ESSENTIAL QUESTION WORDS
  qui — who          où — where
  que / quoi — what  quand — when
  pourquoi — why     comment — how
  combien — how much / how many
  quel / quelle — which / what (agrees with noun)

COMBINING QUESTION WORDS WITH EST-CE QUE
  Où est-ce que tu habites ? — Where do you live?
  Quand est-ce qu'il arrive ? — When does he arrive?
  Qu'est-ce que tu fais ? — What are you doing? (learn this as one chunk: "kesske")

For A1, you need two solid strategies: intonation for quick casual questions, and est-ce que for everything else.`,
        examples: [
            { native: "Tu habites où ?", translation: "Where do you live? (casual intonation)" },
            { native: "Est-ce que tu parles français ?", translation: "Do you speak French? (est-ce que)" },
            { native: "Où est-ce que tu travailles ?", translation: "Where do you work?" },
            { native: "Qu'est-ce que tu fais ce soir ?", translation: "What are you doing tonight?" },
            { native: "Pourquoi est-ce que tu pars si tôt ?", translation: "Why are you leaving so early?" },
            { native: "Quel âge tu as ?", translation: "How old are you?" },
        ],
        inlineVocab: [
            { word: "est-ce que", translation: "question marker (no direct translation)" },
            { word: "qui", translation: "who" },
            { word: "où", translation: "where" },
            { word: "quand", translation: "when" },
            { word: "pourquoi", translation: "why" },
            { word: "comment", translation: "how / what (for names)" },
            { word: "combien", translation: "how much / how many" },
            { word: "quel / quelle", translation: "which / what (agrees with noun)" },
            { word: "qu'est-ce que", translation: "what (as object of verb)" },
        ],
        rules: [
            {
                condition: "Asking a yes/no question in casual speech",
                result: "Keep normal word order and raise your voice at the end",
                examples: [
                    { native: "Tu parles français ?", translation: "Do you speak French?" },
                    { native: "Elle est française ?", translation: "Is she French?" },
                ],
            },
            {
                condition: "Asking a yes/no question in neutral register",
                result: "Add est-ce que before normal word order",
                examples: [
                    { native: "Est-ce que tu parles français ?", translation: "Do you speak French?" },
                    { native: "Est-ce qu'elle habite ici ?", translation: "Does she live here?" },
                ],
            },
            {
                condition: "Asking a question with a question word",
                result: "Question word + est-ce que + normal word order",
                examples: [
                    { native: "Où est-ce que tu habites ?", translation: "Where do you live?" },
                    { native: "Quand est-ce qu'il arrive ?", translation: "When does he arrive?" },
                    { native: "Pourquoi est-ce que tu pars ?", translation: "Why are you leaving?" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Learn 'Qu'est-ce que tu fais ?' as a single chunk — pronounced roughly 'kess-ke tu feh'. It means 'What are you doing?' and is one of the most useful questions you'll ever ask in French.",
            },
            {
                type: "culture",
                content: "Inversion (Parles-tu ?) is formal and mainly written. In everyday speech, French people almost never use it — they use rising intonation or est-ce que. Don't stress about producing inversion at A1.",
            },
            {
                type: "warning",
                content: "Est-ce que contracts to est-ce qu' before a vowel: 'Est-ce qu'il parle ?' not 'Est-ce que il parle ?'. The elision is obligatory.",
            },
        ],
        fixedPhrases: [
            { native: "Qu'est-ce que tu fais ?", translation: "What are you doing?", note: "Learn this as one chunk — the most common 'what' question in French." },
            { native: "Tu habites où ?", translation: "Where do you live?", note: "Casual word order — question word at the end, voice rises." },
            { native: "C'est combien ?", translation: "How much is it?", note: "Essential shopping phrase — always works." },
            { native: "Comment tu t'appelles ?", translation: "What's your name?", note: "Casual version of the classic first question." },
        ],
    },
    {
        id: "fr-g-a1-12",
        level: "A1",
        title: "Connectors — Making Your Sentences Flow",
        explanation: `There's a clear line between someone who knows French words and someone who speaks French. That line is **connectors**. Without them, your speech sounds like a list. With them, it becomes a living language.

Compare:
  Je suis fatigué. Je vais au travail.
  → Je suis fatigué, **mais** je vais quand même au travail.
  → Je suis fatigué, **donc** je reste à la maison.
  → Je vais au travail **parce que** j'ai une réunion importante.

Same facts — three completely different meanings. Connectors do enormous work.

THE CORE CONNECTORS
  **et** — and (adding information)
    J'aime Paris et Lyon.
  **mais** — but (contrasting)
    Je veux venir, **mais** je ne peux pas.
  **ou** — or (alternatives)
    Tu préfères le café **ou** le thé ?
  **donc** — so / therefore (consequence)
    Il pleut, **donc** je reste à la maison.
  **alors** — so / then (consequence — more casual than donc)
    Je suis fatigué, **alors** je vais me coucher.
  **parce que** — because (reason)
    J'aime Paris **parce que** c'est une belle ville.

TIME AND SEQUENCE
  **quand** — when: Quand je rentre, je mange.
  **avant** — before: avant le travail
  **après** — after: après le déjeuner
  **puis** — then (for sequences): Je prends un café, **puis** je pars.

CONTRAST
  **pourtant** — however / yet (stronger than mais):
    Je suis fatigué, **pourtant** je continue.

Start with **et, mais, donc, parce que** — they'll do most of the work. Add the others gradually as you get comfortable.`,
        examples: [
            { native: "J'aime le français parce que c'est une belle langue.", translation: "I like French because it's a beautiful language." },
            { native: "Je suis fatigué, mais je vais quand même travailler.", translation: "I'm tired, but I'm going to work anyway." },
            { native: "Il fait beau, donc on va se promener.", translation: "The weather is nice, so we're going for a walk." },
            { native: "Je mange un sandwich, puis je retourne au bureau.", translation: "I eat a sandwich, then I go back to the office." },
            { native: "Tu veux du café ou du thé ?", translation: "Do you want coffee or tea?" },
            { native: "Je travaille beaucoup en ce moment, pourtant je suis content.", translation: "I'm working a lot at the moment, yet I'm happy." },
        ],
        inlineVocab: [
            { word: "et", translation: "and" },
            { word: "mais", translation: "but" },
            { word: "ou", translation: "or" },
            { word: "donc", translation: "so / therefore" },
            { word: "alors", translation: "so / then (casual)" },
            { word: "parce que", translation: "because" },
            { word: "puis", translation: "then (in a sequence)" },
            { word: "quand", translation: "when" },
            { word: "pourtant", translation: "however / yet" },
        ],
        rules: [
            {
                condition: "Adding information or continuing a thought",
                result: "Use et (and)",
                examples: [
                    { native: "J'aime Paris et Lyon.", translation: "I like Paris and Lyon." },
                    { native: "Je travaille et j'étudie.", translation: "I work and I study." },
                ],
            },
            {
                condition: "Contrasting two ideas",
                result: "Use mais (but)",
                examples: [
                    { native: "Je veux venir, mais je ne peux pas.", translation: "I want to come, but I can't." },
                    { native: "Il est sympa, mais un peu timide.", translation: "He's nice, but a little shy." },
                ],
            },
            {
                condition: "Giving a reason",
                result: "Use parce que (because) — requires a full clause after it",
                examples: [
                    { native: "Je reste ici parce que j'ai du travail.", translation: "I'm staying here because I have work." },
                    { native: "J'aime le français parce que c'est utile.", translation: "I like French because it's useful." },
                ],
            },
            {
                condition: "Giving a consequence",
                result: "Use donc (formal) or alors (casual) for 'so / therefore'",
                examples: [
                    { native: "Il pleut, donc je reste à la maison.", translation: "It's raining, so I'm staying home." },
                    { native: "Je suis fatigué, alors je vais me coucher.", translation: "I'm tired, so I'm going to bed." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Start with just et, mais, donc, parce que — these four connectors will transform your French from a list of facts into actual sentences. Add alors, puis, and pourtant once those four feel automatic.",
            },
            {
                type: "warning",
                content: "Parce que introduces a full clause (subject + verb). To give a shorter reason, use 'à cause de' + noun: 'Je reste à cause de la pluie'. At A1, parce que + full clause is simpler and always correct.",
            },
            {
                type: "culture",
                content: "Alors is extremely versatile in spoken French — it can mean 'so', 'well', 'and then', or just serve as a conversation filler. You'll hear it constantly. It's less formal than donc.",
            },
        ],
        fixedPhrases: [
            { native: "C'est cher, mais c'est très bon.", translation: "It's expensive, but it's very good.", note: "Classic contrast — works for food, hotels, anything." },
            { native: "Je ne peux pas parce que je travaille.", translation: "I can't because I'm working.", note: "The most useful excuse — concise and clear." },
            { native: "Il fait beau, donc on va se promener.", translation: "The weather's nice, so we're going for a walk.", note: "Donc for logical consequence." },
            { native: "Tu préfères le café ou le thé ?", translation: "Do you prefer coffee or tea?", note: "Ou (or) — note no accent, unlike où (where)." },
        ],
    },
    {
        id: "fr-g-a1-13",
        level: "A1",
        title: "More Connectors and Discourse Markers",
        explanation: `You've built the core connector toolkit. Now let's add the words that give your French the texture of real speech — the words that sequence your stories, signal contrast, and tell your listener where you are in a conversation.

SEQUENCE MARKERS — for telling stories and describing steps
  **d'abord** — first: D'abord, je me lève.
  **ensuite** — then / next: Ensuite, je prends un café.
  **après** — after / afterwards: Après, je vais au travail.
  **enfin** — finally / well: Enfin, je me couche vers minuit.

These four alone can transform a list of facts into a story.

CONTRAST AND CONCESSION
  **pourtant** — however / yet: Je suis fatigué, pourtant je continue.
  **quand même** — all the same / still: C'est difficile, mais j'essaie quand même.
  **en fait** — actually / in fact: En fait, c'est plus simple que ça.

These signal a twist — the listener expects one thing, you deliver something unexpected.

SPOKEN DISCOURSE FILLERS (very French)
  **euh** — um (universal thinking filler — you will use this constantly)
  **ben / beh** — well (casual, warm)
  **voilà** — there you go / that's it (used to present, conclude, or hand over)
  **quoi** — sentence-final filler (informal, very French: "C'est compliqué, quoi.")

INTRODUCING A RELATIVE CLAUSE — qui
  **qui** can join two ideas by adding information about a person or thing:
    La personne **qui** travaille là-bas est mon collègue.
    C'est un film **qui** m'a beaucoup ému.

  Think of **qui** as "who/that/which" — it connects the new information to what came just before it. You don't need to master relative clauses right now — just start noticing them and feel how they extend a sentence naturally.`,
        examples: [
            { native: "D'abord je me lève, ensuite je prends un café, enfin je pars au travail.", translation: "First I get up, then I have a coffee, finally I leave for work." },
            { native: "C'est difficile, mais je continue quand même.", translation: "It's difficult, but I carry on all the same." },
            { native: "En fait, je préfère le thé au café.", translation: "Actually, I prefer tea to coffee." },
            { native: "Euh... je ne sais pas exactement. Voilà.", translation: "Um... I don't know exactly. That's it." },
            { native: "C'est un restaurant qui est très connu dans le quartier.", translation: "It's a restaurant that is very well known in the neighbourhood." },
            { native: "C'est compliqué, quoi.", translation: "It's complicated, you know. (informal sentence-final filler)" },
        ],
        inlineVocab: [
            { word: "d'abord", translation: "first / first of all" },
            { word: "ensuite", translation: "then / next" },
            { word: "enfin", translation: "finally / well / I mean" },
            { word: "quand même", translation: "all the same / still / anyway" },
            { word: "en fait", translation: "actually / in fact" },
            { word: "euh", translation: "um (thinking filler)" },
            { word: "voilà", translation: "there you go / that's it" },
            { word: "quoi", translation: "sentence-final filler (informal)" },
            { word: "qui", translation: "who / that / which (relative pronoun)" },
        ],
        rules: [
            {
                condition: "Describing a sequence of events (a routine, a story, a recipe)",
                result: "Use d'abord … ensuite … enfin to signal first, next, finally",
                examples: [
                    { native: "D'abord je me lève, ensuite je prends un café, enfin je pars au travail.", translation: "First I get up, then I have a coffee, finally I leave for work." },
                ],
            },
            {
                condition: "Something happens despite expectations",
                result: "Use quand même (all the same) or pourtant (however)",
                examples: [
                    { native: "C'est difficile, mais je continue quand même.", translation: "It's difficult, but I carry on all the same." },
                    { native: "Je suis fatigué, pourtant je suis content.", translation: "I'm tired, yet I'm happy." },
                ],
            },
            {
                condition: "Correcting or nuancing what you just said",
                result: "Use en fait (actually / in fact) to introduce the real situation",
                examples: [
                    { native: "En fait, c'est plus simple que ça.", translation: "Actually, it's simpler than that." },
                    { native: "En fait, je préfère le thé.", translation: "Actually, I prefer tea." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "D'abord, ensuite, enfin are story-telling gold. These three words alone can take a flat list of facts and turn it into a flowing narrative. Use them every time you describe a routine or a sequence of events.",
            },
            {
                type: "culture",
                content: "'Voilà' is one of the most versatile words in French. It can conclude a thought ('That's it'), present something ('Here you go'), or fill a pause. French people use it constantly — you should too.",
            },
            {
                type: "warning",
                content: "'Enfin' is subtle — it can mean 'finally' (in a sequence), 'well...' (a hesitation), or 'I mean...' (a self-correction). Interpret it from context rather than assuming it always means 'finally'.",
            },
        ],
        fixedPhrases: [
            { native: "D'abord... ensuite... enfin...", translation: "First... then... finally...", note: "Use these three to structure any story or description." },
            { native: "En fait, non.", translation: "Actually, no.", note: "A polite way to correct a misunderstanding or change your mind." },
            { native: "C'est compliqué, quoi.", translation: "It's complicated, you know.", note: "Sentence-final 'quoi' signals the speaker considers the matter self-evident. Very French." },
            { native: "Voilà, c'est tout.", translation: "That's it, that's all.", note: "Natural way to close a description or explanation." },
        ],
    },
]
