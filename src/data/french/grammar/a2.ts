import { GrammarLesson } from "../../../types"

// A2 grammar — full set. Lessons 1–5 unchanged. Lessons 6–9 added.

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
    {
        id: "fr-g-a2-5",
        level: "A2",
        title: "Adjective Agreement & Comparatives",
        explanation: {
            native: "French adjectives must agree in gender and number with the noun they modify. Most add -e for feminine and -s for plural (grand → grande, grands, grandes). Some are irregular: beau/belle, nouveau/nouvelle, vieux/vieille. To compare, use plus ... que (more than), moins ... que (less than), aussi ... que (as ... as). The superlative uses le/la/les plus + adjective.",
            target: "Les adjectifs français doivent s'accorder en genre et en nombre avec le nom qu'ils qualifient. La plupart prennent -e au féminin et -s au pluriel (grand → grande, grands, grandes). Certains sont irréguliers : beau/belle, nouveau/nouvelle, vieux/vieille. Pour comparer, on utilise plus... que, moins... que, aussi... que. Le superlatif se forme avec le/la/les plus + adjectif."
        },
        examples: [
            { native: "Il est grand. Elle est grande.", translation: "He is tall. She is tall." },
            { native: "Ce livre est nouveau. Cette idée est nouvelle.", translation: "This book is new. This idea is new." },
            { native: "Paris est plus grand que Lyon.", translation: "Paris is bigger than Lyon." },
            { native: "Elle est aussi intelligente que lui.", translation: "She is as intelligent as him." },
            { native: "C'est le plus beau quartier de la ville.", translation: "It's the most beautiful neighbourhood in the city." },
        ]
    },

    // ── NEW LESSONS ───────────────────────────────────────────────────────────

    {
        id: "fr-g-a2-6",
        level: "A2",
        title: "Modal Verbs: pouvoir, vouloir, devoir",
        explanation: {
            native: "The three essential modal verbs are: pouvoir (can / to be able to), vouloir (to want), devoir (must / to have to). All three are irregular in the present tense and are followed by an infinitive. They are used constantly in everyday situations — asking permission, expressing wishes, and stating obligations. Pouvoir: peux, peux, peut, pouvons, pouvez, peuvent. Vouloir: veux, veux, veut, voulons, voulez, veulent. Devoir: dois, dois, doit, devons, devez, doivent.",
            target: "Les trois verbes modaux essentiels sont : pouvoir (can/être capable de), vouloir (want), devoir (must/avoir à). Tous les trois sont irréguliers au présent et sont suivis d'un infinitif. Ils sont utilisés en permanence dans les situations quotidiennes — pour demander la permission, exprimer des désirs et indiquer des obligations. Pouvoir : peux, peux, peut, pouvons, pouvez, peuvent. Vouloir : veux, veux, veut, voulons, voulez, veulent. Devoir : dois, dois, doit, devons, devez, doivent."
        },
        examples: [
            { native: "Je peux t'aider.", translation: "I can help you." },
            { native: "Est-ce que tu veux du café ?", translation: "Do you want some coffee?" },
            { native: "Il doit partir à six heures.", translation: "He has to leave at six." },
            { native: "Vous pouvez entrer.", translation: "You may come in." },
            { native: "Nous devons finir avant demain.", translation: "We must finish before tomorrow." },
        ]
    },
    {
        id: "fr-g-a2-7",
        level: "A2",
        title: "Futur Proche (Near Future)",
        explanation: {
            native: "The futur proche expresses plans, intentions, and predictions about the near future. It is formed with aller (present tense) + infinitive. It is much more common in spoken French than the future simple. To make it negative, put ne...pas around aller: Je ne vais pas sortir ce soir.",
            target: "Le futur proche exprime des projets, des intentions et des prédictions sur l'avenir proche. Il se forme avec aller (au présent) + infinitif. Il est bien plus courant à l'oral que le futur simple. Pour le mettre à la forme négative, on encadre aller avec ne...pas : Je ne vais pas sortir ce soir."
        },
        examples: [
            { native: "Je vais appeler ma mère ce soir.", translation: "I'm going to call my mother tonight." },
            { native: "Ils vont voyager en Espagne l'été prochain.", translation: "They're going to travel to Spain next summer." },
            { native: "Tu vas finir tes devoirs ?", translation: "Are you going to finish your homework?" },
            { native: "Elle ne va pas venir à la fête.", translation: "She's not going to come to the party." },
            { native: "Nous allons manger au restaurant demain.", translation: "We're going to eat at the restaurant tomorrow." },
        ]
    },
    {
        id: "fr-g-a2-8",
        level: "A2",
        title: "Relative Clauses: qui and que",
        explanation: {
            native: "Relative clauses connect two ideas about the same noun. Qui replaces the subject of the relative clause (the thing or person doing the action). Que replaces the direct object (the thing or person receiving the action). A simple test: if a subject follows, use qui; if a subject is already present, use que. Que contracts to qu' before a vowel.",
            target: "Les propositions relatives relient deux idées sur le même nom. Qui remplace le sujet de la proposition relative (la chose ou la personne qui fait l'action). Que remplace l'objet direct (la chose ou la personne qui reçoit l'action). Test simple : si un sujet suit, utilisez qui ; si un sujet est déjà présent, utilisez que. Que se contracte en qu' devant une voyelle."
        },
        examples: [
            { native: "La fille qui parle est ma sœur.", translation: "The girl who is speaking is my sister. (qui = subject)" },
            { native: "Le livre que tu lis est très bon.", translation: "The book (that) you are reading is very good. (que = object)" },
            { native: "J'ai un ami qui habite à Lyon.", translation: "I have a friend who lives in Lyon." },
            { native: "C'est le film qu'on a vu hier.", translation: "It's the film (that) we saw yesterday." },
            { native: "La personne que j'aime le plus, c'est ma mère.", translation: "The person I love the most is my mother." },
        ]
    },
    {
        id: "fr-g-a2-9",
        level: "A2",
        title: "Demonstrative Adjectives: ce, cet, cette, ces",
        explanation: {
            native: "Demonstrative adjectives mean 'this', 'that', 'these', or 'those' — they point to specific nouns. Use ce before masculine singular nouns starting with a consonant, cet before masculine singular nouns starting with a vowel or silent h, cette before all feminine singular nouns, and ces before all plural nouns (both genders).",
            target: "Les adjectifs démonstratifs signifient 'this', 'that', 'these' ou 'those' — ils désignent des noms spécifiques. On utilise ce devant les noms masculins singuliers commençant par une consonne, cet devant les noms masculins singuliers commençant par une voyelle ou un h muet, cette devant tous les noms féminins singuliers, et ces devant tous les noms pluriels (les deux genres)."
        },
        examples: [
            { native: "Ce garçon est très sympa.", translation: "This boy is very nice. (masc. consonant)" },
            { native: "Cet homme parle français.", translation: "This man speaks French. (masc. vowel)" },
            { native: "Cette idée est brillante.", translation: "This idea is brilliant. (feminine)" },
            { native: "Ces photos sont magnifiques.", translation: "These photos are magnificent. (plural)" },
            { native: "Je n'aime pas ce quartier.", translation: "I don't like this neighbourhood." },
        ]
    },
    {
        id: "fr-g-a2-10",
        level: "A2",
        title: "Reflexive Verbs & Passé Composé with Être",
        explanation: {
            native: "Reflexive verbs describe actions done to oneself (se lever, se laver, s'habiller). In the present tense, the reflexive pronoun (me, te, se, nous, vous, se) goes before the verb and matches the subject. In the passé composé, reflexive verbs ALWAYS use être as the auxiliary — never avoir. The past participle must agree in gender and number with the subject. Negative: ne goes before the reflexive pronoun, pas after the verb (Je ne me suis pas levé). Key reflexive verbs at A2: se lever, se coucher, se laver, se brosser les dents, s'habiller, se réveiller, se souvenir.",
            target: "Les verbes pronominaux décrivent des actions que l'on fait sur soi-même (se lever, se laver, s'habiller). Au présent, le pronom réfléchi (me, te, se, nous, vous, se) se place avant le verbe et s'accorde avec le sujet. Au passé composé, les verbes pronominaux utilisent TOUJOURS être comme auxiliaire — jamais avoir. Le participe passé s'accorde en genre et en nombre avec le sujet. Négatif : ne se place avant le pronom réfléchi, pas après le verbe (Je ne me suis pas levé). Verbes pronominaux clés à l'A2 : se lever, se coucher, se laver, se brosser les dents, s'habiller, se réveiller, se souvenir."
        },
        examples: [
            { native: "Je me lève à sept heures.", translation: "I get up at seven. (present)" },
            { native: "Elle s'est levée tard ce matin.", translation: "She got up late this morning. (passé composé, feminine agreement)" },
            { native: "Nous nous sommes couchés tôt.", translation: "We went to bed early. (passé composé, plural agreement)" },
            { native: "Il ne s'est pas rasé aujourd'hui.", translation: "He didn't shave today. (negative passé composé)" },
            { native: "À quelle heure tu t'es réveillé(e) ?", translation: "What time did you wake up?" },
        ]
    },
]
