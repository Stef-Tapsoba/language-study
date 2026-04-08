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

The word in bold is changing. This is **être** — the verb 'to be'. You've already been using it without thinking about it. Here's the pattern you found:

ÊTRE — TO BE
  je        → **suis**     Je suis française.
  tu        → **es**       Tu es d'où ?
  il / elle  → **est**      Elle est canadienne.
  vous      → **êtes**     Vous êtes anglais ?

Two things to notice:
1. The verb changes form depending on who you're talking about — this is called conjugation, and it happens with every French verb.
2. **vous** can mean 'you (formal)' when speaking to one person, or 'you (plural)' when speaking to a group. Use it with anyone you'd address as Madame or Monsieur.

THE FULL TABLE (for reference — don't memorise all of it yet):
  je        → suis
  tu        → es
  il / elle / on  → est
  nous      → sommes
  vous      → êtes
  ils / elles   → sont

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

AVOIR — TO HAVE
  je        → **ai**      J'ai vingt ans.
  tu        → **as**      Tu as quel âge ?
  il / elle  → **a**       Elle a trente ans.
  vous      → **avez**    Vous avez quel âge ?

THE FULL TABLE (for reference):
  je        → ai
  tu        → as
  il / elle / on  → a
  nous      → avons
  vous      → avez
  ils / elles   → ont

THE KEY CONSTRUCTION — SAYING YOUR AGE:
In French, you don't *be* an age — you *have* an age:
  J'**ai** vingt-six ans.  →  I am 26 years old. (lit: I have 26 years)

Always include **ans** (years). *J'ai vingt-six* is incomplete — *J'ai vingt-six ans* is correct.

ÊTRE vs AVOIR — you now know both of the most important verbs in French:
  |          | Être (to be) | Avoir (to have) |
  | je       | suis         | ai              |
  | tu       | es           | as              |
  | il/elle  | est          | a               |
  | vous     | êtes         | avez            |

Keep this comparison in mind — être and avoir together unlock most of what you'll say at A1.

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

-ER VERBS — JE / TU / IL / ELLE
  je        → **-e**       je travaille, j'étudie, j'aime
  tu        → **-es**      tu travailles, tu étudies, tu aimes
  il / elle  → **-e**       il travaille, elle étudie, il aime

Take the infinitive, remove **-er**, add the ending:
  travailler → travaill- → je travaille, tu travailles, il travaille
  parler     → parl-     → je parle, tu parles, il parle
  étudier    → étudi-    → j'étudie, tu étudies, elle étudie

THE BIG INSIGHT: je, tu, and il/elle all sound **identical** when spoken. *Je travaille, tu travailles, il travaille* — same pronunciation, different spelling. This is enormously helpful for listening comprehension: even if you miss the subject pronoun, the verb sounds the same.

WHY THIS MATTERS: Most French verbs — hundreds of them — follow this -er pattern. Every new -er verb you learn, you can already conjugate for the forms you need most. You're not learning verbs one at a time. You're learning a system.

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
    },
]
