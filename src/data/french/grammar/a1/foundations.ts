import { GrammarLesson } from "../../../../types"

export const foundationsLessons: GrammarLesson[] = [
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
        ],
        inlineVocab: [
            { word: "parle", translation: "speak / speaks" },
            { word: "étudiant", translation: "student" },
            { word: "travaille", translation: "work / works" },
            { word: "habitons", translation: "we live / we reside" },
            { word: "professeur", translation: "teacher / professor" },
            { word: "amis", translation: "friends" },
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
        ],
        inlineVocab: [
            { word: "française", translation: "French (feminine)" },
            { word: "médecin", translation: "doctor" },
            { word: "fatigués", translation: "tired" },
            { word: "idée", translation: "idea" },
            { word: "livre", translation: "book" },
            { word: "loin", translation: "far" },
            { word: "midi", translation: "noon / midday" },
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
        ],
        inlineVocab: [
            { word: "chat", translation: "cat" },
            { word: "âge", translation: "age" },
            { word: "faim", translation: "hunger" },
            { word: "voiture", translation: "car" },
            { word: "chance", translation: "luck" },
            { word: "soif", translation: "thirst" },
            { word: "chaud", translation: "hot / warm" },
            { word: "froid", translation: "cold" },
            { word: "raison", translation: "reason / right (avoir raison = to be right)" },
            { word: "tort", translation: "wrong (avoir tort = to be wrong)" },
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
        ],
        inlineVocab: [
            { word: "marché", translation: "market" },
            { word: "école", translation: "school" },
            { word: "cinéma", translation: "cinema / movie theatre" },
            { word: "manger", translation: "to eat" },
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
        ],
        inlineVocab: [
            { word: "sport", translation: "sport / exercise" },
            { word: "cuisine", translation: "cooking / kitchen" },
            { word: "courses", translation: "shopping / errands" },
            { word: "vaisselle", translation: "dishes / washing-up" },
            { word: "promenade", translation: "walk / stroll" },
            { word: "beau", translation: "nice / beautiful (weather)" },
            { word: "mauvais", translation: "bad / nasty (weather)" },
            { word: "aujourd'hui", translation: "today" },
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
        ],
        inlineVocab: [
            { word: "hôtel", translation: "hotel" },
            { word: "grand", translation: "big / tall" },
            { word: "moderne", translation: "modern" },
            { word: "intelligent", translation: "intelligent / smart" },
            { word: "fatigué", translation: "tired" },
            { word: "vrai", translation: "true" },
            { word: "dommage", translation: "shame / pity" },
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
        ],
        inlineVocab: [
            { word: "soir", translation: "evening" },
            { word: "mange", translation: "eat / eats" },
            { word: "café", translation: "coffee / café" },
            { word: "partis", translation: "left / departed" },
        ]
    },
]
