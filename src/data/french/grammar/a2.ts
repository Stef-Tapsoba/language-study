import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "fr-g-a2-1",
        level: "A2",
        title: "Passé Composé",
        explanation: {
            native: "The passé composé is the most common past tense, used for completed actions. It is formed with avoir or être (present tense) + past participle. Most verbs use avoir. Verbs of motion and change of state (aller, venir, partir, arriver, naître, mourir...) use être — and the past participle must agree with the subject when être is used.",
            target: "Le passé composé est le temps du passé le plus courant, utilisé pour des actions terminées. Il se forme avec l'auxiliaire avoir ou être (au présent) + le participe passé. La plupart des verbes utilisent avoir. Les verbes de mouvement et de changement d'état (aller, venir, partir, arriver, naître, mourir...) utilisent être — et le participe passé doit s'accorder avec le sujet quand on utilise être."
        },
        examples: [
            { native: "J'ai mangé une pomme.", translation: "I ate an apple." },
            { native: "Elle est arrivée en retard.", translation: "She arrived late. (être → agreement)" },
            { native: "Nous avons vu un film.", translation: "We watched a film." },
            { native: "Ils sont partis ce matin.", translation: "They left this morning." },
            { native: "Tu as fini tes devoirs?", translation: "Did you finish your homework?" },
        ]
    },
    {
        id: "fr-g-a2-2",
        level: "A2",
        title: "L'Imparfait (Imperfect Tense)",
        explanation: {
            native: "The imparfait describes habitual or ongoing past actions, background situations, and descriptions. Form it by taking the nous present tense stem, removing -ons, and adding: -ais, -ais, -ait, -ions, -iez, -aient. Only être is irregular (stem: ét-).",
            target: "L'imparfait décrit des actions passées habituelles ou continues, des situations de fond et des descriptions. On le forme en prenant le radical de la première personne du pluriel (nous) au présent, en supprimant -ons, et en ajoutant les terminaisons : -ais, -ais, -ait, -ions, -iez, -aient. Seul être est irrégulier (radical : ét-)."
        },
        examples: [
            { native: "Quand j'étais enfant, je jouais au foot.", translation: "When I was a child, I used to play football." },
            { native: "Il faisait beau tous les jours.", translation: "The weather was nice every day." },
            { native: "Elle travaillait dans un hôpital.", translation: "She used to work in a hospital." },
            { native: "Nous habitions à Lyon.", translation: "We used to live in Lyon." },
        ]
    },
    {
        id: "fr-g-a2-3",
        level: "A2",
        title: "Direct Object Pronouns",
        explanation: {
            native: "Direct object pronouns replace the noun that directly receives the action. They go before the conjugated verb (or before the infinitive if the verb has one). Forms: me (me), te (you), le/la (him/her/it), nous (us), vous (you), les (them). Before a vowel, le and la contract: l'.",
            target: "Les pronoms compléments d'objet direct (COD) remplacent le nom qui reçoit directement l'action. Ils se placent avant le verbe conjugué (ou avant l'infinitif si le verbe en a un). Formes : me (me), te (te), le/la (le/la), nous (nous), vous (vous), les (les). Devant une voyelle, le et la se contractent en l'."
        },
        examples: [
            { native: "Je le vois tous les jours.", translation: "I see him every day." },
            { native: "Tu la connais?", translation: "Do you know her?" },
            { native: "Il nous aide beaucoup.", translation: "He helps us a lot." },
            { native: "Je vais les appeler.", translation: "I'm going to call them." },
            { native: "Elle l'aime beaucoup.", translation: "She likes it/him/her a lot." },
        ]
    },
    {
        id: "fr-g-a2-4",
        level: "A2",
        title: "Partitive Articles: du, de la, de l', des",
        explanation: {
            native: "Partitive articles express an unspecified quantity of something — the English equivalent is 'some' or simply leaving the article out. Use du (masculine), de la (feminine), de l' (before vowel), des (plural). After negation, all forms become de (or d' before vowel).",
            target: "Les articles partitifs expriment une quantité indéterminée de quelque chose. On utilise du (masculin), de la (féminin), de l' (devant une voyelle), des (pluriel). Après la négation, toutes ces formes deviennent de (ou d' devant une voyelle)."
        },
        examples: [
            { native: "Je veux du pain.", translation: "I want some bread. (masculine)" },
            { native: "Elle boit de la limonade.", translation: "She drinks some lemonade. (feminine)" },
            { native: "Tu veux de l'eau?", translation: "Do you want some water? (vowel)" },
            { native: "Je mange des légumes.", translation: "I eat some vegetables. (plural)" },
            { native: "Je ne bois pas de café.", translation: "I don't drink coffee. (de after negation)" },
        ]
    },
]
