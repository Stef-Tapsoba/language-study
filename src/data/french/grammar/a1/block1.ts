import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-1",
        level: "A1",
        title: "Être — to be",
        explanation: `Look at the sentences you've been using in this unit. Something keeps appearing:

  Je **suis** de Paris.
  Je **suis** français.
  Tu **es** d'où ?
  Elle **est** américaine.
  Il **est** de Tokyo.
  Vous **êtes** anglais ?

The word in bold is changing. This is **être** — the verb 'to be'. You've already been using it without thinking about it.

Two things to notice:
1. The verb changes form depending on who you're talking about — this is called **conjugation**, and it happens with every French verb.
2. **vous** can mean 'you (formal)' when speaking to one person, or 'you (plural)' when speaking to a group. Use it with anyone you'd address as Madame or Monsieur.

For now, focus on **je suis, tu es, il/elle est** — those three will carry you through the next several units. The others will come naturally with practice.

One more thing: in French, you use être without an article for professions and nationalities:
  Je suis médecin. (not *Je suis un médecin*)
  Elle est française. (not *Elle est une française*)

This feels odd for English speakers at first — just learn it as the pattern and it will become automatic.`,
        examples: [
            { native: "Je suis de Londres.", translation: "I'm from London." },
            { native: "Tu es français ?", translation: "Are you French?" },
            { native: "Elle est italienne.", translation: "She's Italian." },
            { native: "Il est de Tokyo.", translation: "He's from Tokyo." },
            { native: "Vous êtes d'où ?", translation: "Where are you from? (formal / plural)" },
            { native: "Ils sont canadiens.", translation: "They are Canadian." },
        ],
        inlineVocab: [
            { word: "être", translation: "to be (infinitive)" },
            { word: "suis", translation: "am (je form of être)" },
            { word: "es", translation: "are (tu form of être)" },
            { word: "est", translation: "is (il/elle form of être)" },
            { word: "êtes", translation: "are (vous form of être)" },
            { word: "d'où", translation: "from where" },
            { word: "je suis de", translation: "I'm from (+ city/place)" },
            { word: "une nationalité", translation: "a nationality" },
            { word: "un pays", translation: "a country" },
        ],
        rules: [
            {
                condition: "Talking about origin (city)",
                result: "Use être + de + city name",
                examples: [
                    { native: "Je suis de Paris.", translation: "I'm from Paris." },
                    { native: "Elle est de Rome.", translation: "She's from Rome." },
                    { native: "Tu es d'où ?", translation: "Where are you from?" },
                ],
            },
            {
                condition: "Talking about nationality or profession",
                result: "Use être with no article",
                examples: [
                    { native: "Il est français.", translation: "He's French." },
                    { native: "Je suis médecin.", translation: "I'm a doctor." },
                    { native: "Elle est étudiante.", translation: "She's a student." },
                ],
            },
            {
                condition: "Addressing one person formally or more than one person",
                result: "Use vous êtes",
                examples: [
                    { native: "Vous êtes anglais ?", translation: "Are you English? (formal or plural)" },
                    { native: "Vous êtes d'où ?", translation: "Where are you from? (formal)" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The three forms you need most — je suis, tu es, il/elle est — all sound different. Say them out loud together until the rhythm is automatic: 'swee / eh / eh'.",
            },
            {
                type: "warning",
                content: "Don't add an article before nationalities and professions: 'Je suis médecin' (not 'Je suis un médecin'). This is one of the most common early mistakes.",
            },
            {
                type: "forward-ref",
                content: "The nous (sommes) and ils/elles (sont) forms come up naturally as you learn more vocabulary — you'll meet them in Unit 3.",
                refId: "fr-g-a1-3",
            },
        ],
        fixedPhrases: [
            { native: "Je suis de Londres.", translation: "I'm from London.", note: "Replace Londres with your own city." },
            { native: "Tu es d'où ?", translation: "Where are you from?", note: "Essential question for any first conversation." },
            { native: "Enchanté(e).", translation: "Pleased to meet you.", note: "Use after introducing yourself — add -e if you are female." },
            { native: "Je suis désolé(e).", translation: "I'm sorry.", note: "Works as an apology or to express sympathy." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"],
            verbs: [
                { infinitive: "être", forms: ["suis", "es", "est", "sommes", "êtes", "sont"] },
            ],
        },
    },
    {
        id: "fr-g-a1-2",
        level: "A1",
        title: "Avoir — to have (and saying your age)",
        explanation: `You've now met être. In this unit, a second verb appeared. Look at these sentences:

  J'**ai** vingt-six ans.
  Tu **as** quel âge ?
  Il **a** trente ans.
  Vous **avez** quel âge ?

The verb is changing form again — just like être. This is **avoir** — the verb 'to have'.

**Saying your age:** in French, you don't *be* an age — you *have* an age:
  J'**ai** vingt-six ans.  →  I am 26 years old. (lit: I have 26 years)

Always include **ans** (years). *J'ai vingt-six* is incomplete — *J'ai vingt-six ans* is correct.

The comparison table below shows être and avoir side by side — together they unlock most of what you'll say at A1.

Beyond age, avoir is used for: having things (J'ai une voiture), having family members (Tu as un frère ?), and many expressions that use 'be' in English (J'ai faim — I'm hungry, lit: I have hunger).`,
        examples: [
            { native: "J'ai vingt-huit ans.", translation: "I am 28 years old." },
            { native: "Tu as quel âge ?", translation: "How old are you? (informal)" },
            { native: "Elle a trente ans.", translation: "She is 30 years old." },
            { native: "Tu as un frère ?", translation: "Do you have a brother?" },
            { native: "Vous avez l'heure ?", translation: "Do you have the time?" },
            { native: "Ils ont une grande maison.", translation: "They have a big house." },
        ],
        inlineVocab: [
            { word: "avoir", translation: "to have (infinitive)" },
            { word: "ai", translation: "have (je form of avoir)" },
            { word: "as", translation: "have (tu form of avoir)" },
            { word: "a", translation: "has (il/elle form of avoir)" },
            { word: "avez", translation: "have (vous form of avoir)" },
            { word: "un an", translation: "a year" },
            { word: "ans", translation: "years (used with age)" },
            { word: "l'âge (m)", translation: "age" },
            { word: "quel âge", translation: "what age / how old" },
        ],
        rules: [
            {
                condition: "Saying your age in French",
                result: "Use avoir (not être) + number + ans",
                examples: [
                    { native: "J'ai vingt ans.", translation: "I am twenty years old." },
                    { native: "Il a trente ans.", translation: "He is thirty years old." },
                    { native: "Tu as quel âge ?", translation: "How old are you?" },
                ],
            },
            {
                condition: "Talking about possession",
                result: "Use avoir + object",
                examples: [
                    { native: "Tu as un frère ?", translation: "Do you have a brother?" },
                    { native: "J'ai une voiture.", translation: "I have a car." },
                    { native: "Vous avez l'heure ?", translation: "Do you have the time?" },
                ],
            },
            {
                condition: "Expressing hunger, thirst, or physical states",
                result: "Use avoir (where English uses 'to be')",
                examples: [
                    { native: "J'ai faim.", translation: "I'm hungry. (lit: I have hunger)" },
                    { native: "Tu as soif ?", translation: "Are you thirsty?" },
                    { native: "J'ai froid.", translation: "I'm cold." },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Never say 'Je suis vingt ans'. Age always uses avoir in French — 'J'ai vingt ans'. Mixing up être and avoir here is the most frequent beginner error.",
            },
            {
                type: "tip",
                content: "Hunger, thirst, heat, cold, and fear all use avoir in French (j'ai faim, j'ai soif, j'ai chaud, j'ai froid, j'ai peur). Think of them as things you 'have', not states you 'are'.",
            },
            {
                type: "culture",
                content: "Asking 'Tu as quel âge ?' is casual and perfectly fine between people who are already on informal terms. With strangers or seniors, this topic is generally avoided — as in much of Europe.",
            },
        ],
        fixedPhrases: [
            { native: "J'ai vingt ans.", translation: "I'm twenty years old.", note: "Replace vingt with your own age." },
            { native: "Tu as quel âge ?", translation: "How old are you?", note: "Casual register — use with friends." },
            { native: "J'ai faim.", translation: "I'm hungry.", note: "Avoir-based expression — not être." },
            { native: "Vous avez l'heure ?", translation: "Do you have the time?", note: "Polite way to ask a stranger for the time." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"],
            verbs: [
                { infinitive: "être", forms: ["suis", "es", "est", "sommes", "êtes", "sont"] },
                { infinitive: "avoir", forms: ["ai", "as", "a", "avons", "avez", "ont"] },
            ],
        },
    },
    {
        id: "fr-g-a1-3",
        level: "A1",
        title: "-er verbs — the system behind the language",
        explanation: `You've used **travailler** (to work) and **étudier** (to study) in this unit. You also saw **j'aime** (I like) in a dialogue. Something connects them — look at these verb forms and focus on the endings:

  Je travaill**e** dans un café.
  Tu travaill**es** dans une école ?
  Il travaill**e** dans un hôpital.
  J'étudi**e** le français.
  Tu étudi**es** quoi ?
  Elle étudi**e** l'architecture.

What do you notice? The endings follow a pattern: **-e, -es, -e**. These verbs all end in **-er** in their dictionary form (travailler, étudier, aimer, parler). They all follow the same pattern.

**The big insight:** je, tu, and il/elle all sound **identical** when spoken. *Je travaille, tu travailles, il travaille* — same pronunciation, different spelling. This is enormously helpful for listening comprehension: even if you miss the subject pronoun, the verb sounds the same.

Most French verbs — hundreds of them — follow this -er pattern. Every new -er verb you learn, you can already conjugate for the forms you need most. You're not learning verbs one at a time. You're learning a system.

The full paradigm (nous/vous/ils/elles forms) comes in Unit 12. For now, these three forms are enough to hold a real conversation.`,
        examples: [
            { native: "Je parle français.", translation: "I speak French." },
            { native: "Tu parles anglais ?", translation: "Do you speak English?" },
            { native: "Il travaille dans un bureau.", translation: "He works in an office." },
            { native: "Elle étudie l'architecture.", translation: "She studies architecture." },
            { native: "J'aime beaucoup la musique.", translation: "I really like music." },
            { native: "Elle cherche un appartement.", translation: "She's looking for a flat." },
        ],
        inlineVocab: [
            { word: "travailler", translation: "to work (-er verb)" },
            { word: "étudier", translation: "to study (-er verb)" },
            { word: "parler", translation: "to speak (-er verb)" },
            { word: "aimer", translation: "to like / to love (-er verb)" },
            { word: "chercher", translation: "to look for (-er verb)" },
            { word: "le travail", translation: "work / the job" },
            { word: "une entreprise", translation: "a company" },
            { word: "un bureau", translation: "an office" },
            { word: "les langues (f pl)", translation: "languages" },
        ],
        rules: [
            {
                condition: "Conjugating any regular -er verb for je / tu / il / elle",
                result: "Remove -er, add: -e (je), -es (tu), -e (il/elle)",
                heuristic: "travailler → travaill- + ending · parler → parl- + ending · étudier → étudi- + ending",
                examples: [
                    { native: "Je parle français.", translation: "I speak French." },
                    { native: "Tu travailles où ?", translation: "Where do you work?" },
                    { native: "Elle étudie le droit.", translation: "She studies law." },
                ],
            },
            {
                condition: "Before a vowel, je becomes j'",
                result: "Drop the -e of je (elision)",
                examples: [
                    { native: "J'étudie le français.", translation: "I study French." },
                    { native: "J'aime beaucoup la musique.", translation: "I really like music." },
                ],
            },
            {
                condition: "Je, tu, il, elle forms in spoken French",
                result: "They all sound identical — only the pronoun signals the difference",
                examples: [
                    { native: "Je travaille. Tu travailles. Il travaille.", translation: "I work. You work. He works. — same sound." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "About 90% of French verbs are -er verbs. Every new -er verb you learn, you can already conjugate. You're not learning individual verbs — you're learning a system.",
            },
            {
                type: "warning",
                content: "Don't forget elision: it's 'j'aime' and 'j'étudie', never 'je aime' or 'je étudie'. French avoids two vowel sounds bumping together.",
            },
            {
                type: "forward-ref",
                content: "The nous (travaillons), vous (travaillez), and ils/elles (travaillent) forms are covered fully in the Block 3 lesson on the complete -er verb system.",
                refId: "fr-g-a1-10",
            },
        ],
        fixedPhrases: [
            { native: "Je parle un peu français.", translation: "I speak a little French.", note: "Useful and accurate for most beginners — honest and immediately understood." },
            { native: "Qu'est-ce que tu fais dans la vie ?", translation: "What do you do for a living?", note: "The most natural way to ask about someone's job." },
            { native: "Je travaille dans une école.", translation: "I work in a school.", note: "Template — replace école with your own workplace." },
            { native: "J'aime beaucoup ça.", translation: "I really like that.", note: "Ça (that/it) is a conversational workhorse — use it freely." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle"],
            verbs: [
                { infinitive: "travailler", forms: ["travaille", "travailles", "travaille"] },
                { infinitive: "parler", forms: ["parle", "parles", "parle"] },
                { infinitive: "étudier", forms: ["étudie", "étudies", "étudie"] },
            ],
        },
    },
]
