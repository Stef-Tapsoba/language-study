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
]
