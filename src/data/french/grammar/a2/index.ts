import { GrammarLesson } from "../../../../types"

// A2 grammar — 24 lessons covering all CEFR A2 grammar competencies.
// Fixed (2026-03-26): removed 4 direct duplicates with A1 (partitive articles,
// modal verbs, futur proche, demonstrative adjectives) and repurposed those IDs
// to proper A2-level content. Refocused fr-g-a2-5 (comparatives only) and
// fr-g-a2-10 (reflexives in passé composé only). Added 14 new A2-specific lessons.

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
            { native: "Elle est arrivée en retard.", translation: "She arrived late.", annotation: "être verb → agreement with subject" },
            { native: "Nous avons vu un film.", translation: "We watched a film." },
            { native: "Ils sont partis ce matin.", translation: "They left this morning." },
            { native: "Tu as fini tes devoirs?", translation: "Did you finish your homework?" },
        ],
        inlineVocab: [
            { word: "manger", translation: "to eat" },
            { word: "arriver", translation: "to arrive" },
            { word: "partir", translation: "to leave" },
            { word: "voir", translation: "to see" },
            { word: "finir", translation: "to finish" },
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
        ],
        inlineVocab: [
            { word: "jouer", translation: "to play" },
            { word: "travailler", translation: "to work" },
            { word: "habiter", translation: "to live" },
            { word: "enfant", translation: "child" },
            { word: "hôpital", translation: "hospital" },
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
        ],
        inlineVocab: [
            { word: "voir", translation: "to see" },
            { word: "connaître", translation: "to know (a person)" },
            { word: "aider", translation: "to help" },
            { word: "appeler", translation: "to call" },
            { word: "aimer", translation: "to like / love" },
        ]
    },
    {
        id: "fr-g-a2-4",
        level: "A2",
        title: "Quantities & Expressions of Amount",
        explanation: {
            native: "Expressions of quantity are followed by de (never du/de la/des), regardless of the gender or number of the noun that follows. Key expressions: beaucoup de (a lot of), peu de (a little/few), assez de (enough), trop de (too much/many), combien de (how much/many), un kilo de, une bouteille de, un verre de, une tranche de. After negation, du/de la/des also become de: Je n'ai pas d'argent.",
            target: "Les expressions de quantité sont suivies de de (jamais du/de la/des), quel que soit le genre ou le nombre du nom qui suit. Expressions clés : beaucoup de, peu de, assez de, trop de, combien de, un kilo de, une bouteille de, un verre de, une tranche de. Après la négation, du/de la/des deviennent aussi de : Je n'ai pas d'argent."
        },
        examples: [
            { native: "Il boit beaucoup de café.", translation: "He drinks a lot of coffee." },
            { native: "J'ai trop de travail cette semaine.", translation: "I have too much work this week." },
            { native: "Tu as assez de temps ?", translation: "Do you have enough time?" },
            { native: "Elle mange peu de viande.", translation: "She eats little meat." },
            { native: "Combien de langues tu parles ?", translation: "How many languages do you speak?" },
            { native: "Une bouteille de vin, s'il vous plaît.", translation: "A bottle of wine, please." },
        ],
        inlineVocab: [
            { word: "café", translation: "coffee" },
            { word: "travail", translation: "work" },
            { word: "temps", translation: "time" },
            { word: "viande", translation: "meat" },
            { word: "bouteille", translation: "bottle" },
        ]
    },
    {
        id: "fr-g-a2-5",
        level: "A2",
        title: "Comparatives & Superlatives",
        explanation: {
            native: "To compare two things use: plus + adjective + que (more than), moins + adjective + que (less than), aussi + adjective + que (as ... as). Irregular comparatives: bon → meilleur (better), mauvais → pire (worse). The superlative uses le/la/les + plus/moins + adjective: le plus grand (the tallest). After a noun, add de to introduce the group: le plus grand pays d'Europe.",
            target: "Pour comparer deux choses, on utilise : plus + adjectif + que, moins + adjectif + que, aussi + adjectif + que. Comparatifs irréguliers : bon → meilleur, mauvais → pire. Le superlatif se forme avec le/la/les + plus/moins + adjectif. Après un nom, on ajoute de pour introduire le groupe : le plus grand pays d'Europe."
        },
        examples: [
            { native: "Paris est plus grand que Lyon.", translation: "Paris is bigger than Lyon." },
            { native: "Ce livre est moins cher que l'autre.", translation: "This book is less expensive than the other." },
            { native: "Elle est aussi intelligente que lui.", translation: "She is as intelligent as him." },
            { native: "C'est le meilleur restaurant de la ville.", translation: "It's the best restaurant in the city." },
            { native: "Quel est le pays le plus grand d'Europe ?", translation: "What is the biggest country in Europe?" },
        ],
        inlineVocab: [
            { word: "grand", translation: "big / tall" },
            { word: "cher", translation: "expensive" },
            { word: "intelligent", translation: "intelligent" },
            { word: "meilleur", translation: "better / best" },
            { word: "pays", translation: "country" },
        ]
    },
    {
        id: "fr-g-a2-6",
        level: "A2",
        title: "Il faut & Modals in the Passé Composé",
        explanation: {
            native: "Il faut + infinitive expresses necessity impersonally (= one must / you need to). It has no subject and cannot be conjugated for persons: Il faut travailler. In the passé composé, the three modals change meaning subtly: j'ai dû (I had to / I must have), j'ai pu (I managed to / I was able to), j'ai voulu (I tried to / I wanted to and did). These past forms are very common and often trip learners up.",
            target: "Il faut + infinitif exprime la nécessité de manière impersonnelle. Il n'a pas de sujet et ne peut pas être conjugué à la personne : Il faut travailler. Au passé composé, les trois modaux changent légèrement de sens : j'ai dû (I had to / I must have), j'ai pu (I managed to), j'ai voulu (I wanted to and did). Ces formes passées sont très courantes."
        },
        examples: [
            { native: "Il faut réserver à l'avance.", translation: "You need to book in advance." },
            { native: "Il faut combien de temps pour aller à Paris ?", translation: "How long does it take to get to Paris?" },
            { native: "J'ai dû partir tôt ce matin.", translation: "I had to leave early this morning." },
            { native: "Elle a pu terminer le projet à temps.", translation: "She managed to finish the project on time." },
            { native: "Nous n'avons pas voulu les déranger.", translation: "We didn't want to disturb them." },
        ],
        inlineVocab: [
            { word: "réserver", translation: "to book / reserve" },
            { word: "partir", translation: "to leave" },
            { word: "terminer", translation: "to finish / complete" },
            { word: "projet", translation: "project" },
            { word: "déranger", translation: "to disturb / bother" },
        ]
    },
    {
        id: "fr-g-a2-7",
        level: "A2",
        title: "Futur Simple",
        explanation: {
            native: "The futur simple expresses future plans, predictions, and promises. It is formed by adding endings directly to the infinitive (-er/-ir verbs) or to the infinitive minus the final -e (-re verbs): -ai, -as, -a, -ons, -ez, -ont. Key irregular stems: être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, vouloir → voudr-, venir → viendr-, savoir → saur-. Use futur simple for more distant or certain future events; futur proche for immediate plans.",
            target: "Le futur simple exprime des projets, des prédictions et des promesses. Il se forme en ajoutant les terminaisons directement à l'infinitif (-er/-ir) ou à l'infinitif sans le -e final (-re) : -ai, -as, -a, -ons, -ez, -ont. Radicaux irréguliers importants : être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, vouloir → voudr-, venir → viendr-, savoir → saur-."
        },
        examples: [
            { native: "Demain, il fera beau.", translation: "Tomorrow, it will be fine." },
            { native: "Je serai là à dix heures.", translation: "I will be there at ten o'clock." },
            { native: "Nous irons en vacances en juillet.", translation: "We will go on holiday in July." },
            { native: "Est-ce qu'il pourra venir ?", translation: "Will he be able to come?" },
            { native: "Si tu travailles, tu réussiras.", translation: "If you work, you will succeed." },
        ],
        inlineVocab: [
            { word: "vacances", translation: "holidays" },
            { word: "réussir", translation: "to succeed" },
            { word: "travailler", translation: "to work" },
            { word: "venir", translation: "to come" },
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
            { native: "Le livre que tu lis est très bon.", translation: "The book (that) you are reading is very good.", annotation: "que = direct object" },
            { native: "J'ai un ami qui habite à Lyon.", translation: "I have a friend who lives in Lyon." },
            { native: "C'est le film qu'on a vu hier.", translation: "It's the film (that) we saw yesterday." },
            { native: "La personne que j'aime le plus, c'est ma mère.", translation: "The person I love the most is my mother." },
        ],
        inlineVocab: [
            { word: "parler", translation: "to speak" },
            { word: "lire", translation: "to read" },
            { word: "habiter", translation: "to live" },
            { word: "ami", translation: "friend" },
            { word: "film", translation: "film" },
        ]
    },
    {
        id: "fr-g-a2-9",
        level: "A2",
        title: "Demonstrative Pronouns: celui, celle, ceux, celles",
        explanation: {
            native: "Demonstrative pronouns replace a noun that has already been mentioned, meaning 'this one / that one / the one(s)'. They agree in gender and number with the noun they replace: celui (masc. sing.), celle (fem. sing.), ceux (masc. plural), celles (fem. plural). They are almost always followed by: -ci/-là (this one here / that one there), a relative clause (celui qui..., celle que...), or de (celui de Marc = Marc's).",
            target: "Les pronoms démonstratifs remplacent un nom déjà mentionné. Ils s'accordent en genre et en nombre avec le nom qu'ils remplacent : celui (masc. sing.), celle (fém. sing.), ceux (masc. plur.), celles (fém. plur.). Ils sont presque toujours suivis de : -ci/-là, d'une proposition relative (celui qui..., celle que...) ou de de (celui de Marc)."
        },
        examples: [
            { native: "J'aime cette veste. — Laquelle ? — Celle-ci.", translation: "I like this jacket. — Which one? — This one." },
            { native: "Quel gâteau veux-tu ? Celui au chocolat.", translation: "Which cake do you want? The chocolate one." },
            { native: "Ces livres sont ceux que j'ai achetés.", translation: "These books are the ones I bought." },
            { native: "Ce sac est celui de Marie.", translation: "This bag is Marie's (the one belonging to Marie)." },
            { native: "Ceux qui arrivent en retard rateront le début.", translation: "Those who arrive late will miss the beginning." },
        ],
        inlineVocab: [
            { word: "veste", translation: "jacket" },
            { word: "gâteau", translation: "cake" },
            { word: "chocolat", translation: "chocolate" },
            { word: "sac", translation: "bag" },
            { word: "arriver", translation: "to arrive" },
        ]
    },
    {
        id: "fr-g-a2-10",
        level: "A2",
        title: "Reflexive Verbs in the Passé Composé",
        explanation: {
            native: "In the passé composé, reflexive verbs ALWAYS use être as the auxiliary — never avoir. The past participle must agree in gender and number with the subject. The reflexive pronoun (me, te, se, nous, vous, se) goes before être. Negative: ne goes before the reflexive pronoun, pas after être. Common reflexive verbs at A2: se lever, se coucher, se laver, s'habiller, se réveiller, se souvenir de, se retrouver, se disputer.",
            target: "Au passé composé, les verbes pronominaux utilisent TOUJOURS être comme auxiliaire — jamais avoir. Le participe passé s'accorde en genre et en nombre avec le sujet. Le pronom réfléchi (me, te, se, nous, vous, se) se place avant être. Négatif : ne se place avant le pronom réfléchi, pas après être."
        },
        examples: [
            { native: "Elle s'est levée à sept heures.", translation: "She got up at seven. (feminine agreement)" },
            { native: "Nous nous sommes couchés tôt.", translation: "We went to bed early. (plural agreement)" },
            { native: "Il ne s'est pas rasé aujourd'hui.", translation: "He didn't shave today. (negative)" },
            { native: "Elles se sont retrouvées au café.", translation: "They met up at the café." },
            { native: "Tu t'es souvenu(e) de son anniversaire ?", speakText:"Tu t'es souvenu de son anniversaire ?", translation: "Did you remember his/her birthday?" },
        ],
        inlineVocab: [
            { word: "se lever", translation: "to get up" },
            { word: "se coucher", translation: "to go to bed" },
            { word: "se retrouver", translation: "to meet up" },
            { word: "anniversaire", translation: "birthday" },
            { word: "se souvenir", translation: "to remember" },
        ]
    },

    // ── NEW LESSONS ───────────────────────────────────────────────────────────

    {
        id: "fr-g-a2-11",
        level: "A2",
        title: "Indirect Object Pronouns: lui and leur",
        explanation: {
            native: "Indirect object pronouns replace à + person. Lui replaces à + one person (him or her — no gender distinction); leur replaces à + multiple people. They go before the conjugated verb. Common verbs followed by à + person: donner (to give), dire (to say/tell), demander (to ask), téléphoner (to phone), écrire (to write), envoyer (to send), répondre (to reply), parler (to speak to). In passé composé, lui/leur go before the auxiliary: Je lui ai parlé.",
            target: "Les pronoms COI remplacent à + personne. Lui remplace à + une personne ; leur remplace à + plusieurs personnes. Ils se placent avant le verbe conjugué. Verbes courants suivis de à + personne : donner, dire, demander, téléphoner, écrire, envoyer, répondre, parler. Au passé composé : Je lui ai parlé."
        },
        examples: [
            { native: "Je lui téléphone ce soir. (à Marc)", speakText:"Je lui téléphone ce soir.", translation: "I'll phone him this evening." },
            { native: "Elle leur a dit la vérité. (aux enfants)", speakText:"Elle leur a dit la vérité.", translation: "She told them the truth." },
            { native: "Tu peux lui demander de l'aide ?", translation: "Can you ask him/her for help?" },
            { native: "Je lui ai envoyé un message hier.", translation: "I sent him/her a message yesterday." },
            { native: "Nous leur écrivons chaque semaine.", translation: "We write to them every week." },
        ],
        inlineVocab: [
            { word: "téléphoner", translation: "to phone" },
            { word: "vérité", translation: "truth" },
            { word: "demander", translation: "to ask" },
            { word: "envoyer", translation: "to send" },
            { word: "écrire", translation: "to write" },
        ]
    },
    {
        id: "fr-g-a2-12",
        level: "A2",
        title: "Pronouns y and en",
        explanation: {
            native: "Y replaces à/en/dans/sur + place or thing: Tu vas à Paris ? — J'y vais demain. (I'm going there tomorrow.) Y also replaces à + thing with verbs like penser à, croire à: Tu penses à ton examen ? — J'y pense tout le temps. En replaces de + noun or a partitive expression: Tu veux du café ? — J'en veux bien. (I'd like some.) En also replaces a number/quantity expression: Tu as des frères ? — J'en ai deux. Both go before the conjugated verb (or before the infinitive).",
            target: "Y remplace à/en/dans/sur + lieu ou chose. En remplace de + nom ou une expression partitive. En remplace aussi une expression de quantité : Tu as des sœurs ? — J'en ai trois. Les deux se placent avant le verbe conjugué."
        },
        examples: [
            { native: "Tu vas à la boulangerie ? — Oui, j'y vais.", translation: "Are you going to the bakery? — Yes, I'm going there." },
            { native: "Il pense à son voyage. — Il y pense souvent.", translation: "He's thinking about his trip. — He thinks about it often." },
            { native: "Tu veux de la tarte ? — Oui, j'en veux bien.", translation: "Do you want some tart? — Yes, I'd like some." },
            { native: "Il a des enfants ? — Il en a trois.", translation: "Does he have children? — He has three (of them)." },
            { native: "Elle a besoin d'aide ? — Oui, elle en a besoin.", translation: "Does she need help? — Yes, she needs it." },
        ],
        inlineVocab: [
            { word: "boulangerie", translation: "bakery" },
            { word: "voyage", translation: "journey / trip" },
            { word: "tarte", translation: "tart / pie" },
            { word: "enfants", translation: "children" },
            { word: "aide", translation: "help" },
        ]
    },
    {
        id: "fr-g-a2-13",
        level: "A2",
        title: "Extended Negation: ne…plus, jamais, rien, personne",
        explanation: {
            native: "French has several negation patterns beyond ne…pas. Ne…plus = no longer / not anymore. Ne…jamais = never. Ne…rien = nothing / not anything. Ne…personne = nobody / not anyone. In simple tenses, the second element wraps around the verb like pas. In compound tenses (passé composé), plus/jamais/rien go between auxiliary and past participle; personne goes AFTER the past participle. Rien and personne can also be subjects: Rien ne va. Personne n'est venu.",
            target: "Ne…plus = ne... plus. Ne…jamais = jamais. Ne…rien = rien. Ne…personne = personne. Au passé composé : plus/jamais/rien se placent entre l'auxiliaire et le participe passé ; personne se place APRÈS le participe passé. Rien et personne peuvent aussi être sujets : Rien ne va. Personne n'est venu."
        },
        examples: [
            { native: "Je ne mange plus de viande.", translation: "I no longer eat meat." },
            { native: "Il n'est jamais en retard.", translation: "He is never late." },
            { native: "Elle n'a rien dit.", translation: "She said nothing. (rien between auxiliary and pp)" },
            { native: "Je n'ai vu personne au bureau.", translation: "I saw nobody at the office. (personne after pp)" },
            { native: "Personne ne m'a appelé.", translation: "Nobody called me. (personne as subject)" },
        ],
        inlineVocab: [
            { word: "viande", translation: "meat" },
            { word: "retard", translation: "late / delay" },
            { word: "bureau", translation: "office" },
            { word: "appeler", translation: "to call" },
        ]
    },
    {
        id: "fr-g-a2-14",
        level: "A2",
        title: "Savoir vs Connaître",
        explanation: {
            native: "Both verbs mean 'to know' but are not interchangeable. Savoir = to know a fact, know how to do something, or know information: Je sais nager. Je sais qu'il est parti. Connaître = to know a person, place, or work of art personally/familiarly: Je connais Paris. Tu connais Marie ? A useful test: if you could replace 'know' with 'be familiar with', use connaître; if you could replace it with 'know that' or 'know how to', use savoir.",
            target: "Savoir = connaître un fait, savoir faire quelque chose, connaître une information. Connaître = connaître une personne, un lieu ou une œuvre d'art de façon personnelle. Test utile : si on peut remplacer par 'être familier avec', utiliser connaître ; si on peut remplacer par 'savoir que' ou 'savoir comment', utiliser savoir."
        },
        examples: [
            { native: "Je sais nager.", translation: "I know how to swim. (savoir + infinitive = skill)" },
            { native: "Tu sais où il habite ?", translation: "Do you know where he lives? (savoir + clause = fact)" },
            { native: "Je connais bien Lyon.", translation: "I know Lyon well. (connaître + place)" },
            { native: "Tu connais ce film ?", translation: "Do you know this film? (connaître = familiar with)" },
            { native: "Elle sait qu'il a menti.", translation: "She knows (that) he lied.", annotation: "savoir + que = fact" },
        ],
        inlineVocab: [
            { word: "nager", translation: "to swim" },
            { word: "habiter", translation: "to live" },
            { word: "mentir", translation: "to lie" },
            { word: "film", translation: "film" },
        ]
    },
    {
        id: "fr-g-a2-15",
        level: "A2",
        title: "Venir de & Être en train de",
        explanation: {
            native: "Venir de + infinitive expresses the recent past — something that has just happened: Je viens de manger (I have just eaten). It replaces the passé composé when the event is very recent. Conjugate venir in the present tense + de + infinitive. Être en train de + infinitive expresses an ongoing action at the moment of speaking: Je suis en train de travailler (I am in the middle of working). It is more emphatic than the simple present.",
            target: "Venir de + infinitif exprime le passé récent — quelque chose qui vient de se passer : Je viens de manger. Être en train de + infinitif exprime une action en cours au moment où l'on parle : Je suis en train de travailler. C'est plus emphatique que le présent simple."
        },
        examples: [
            { native: "Je viens de finir mon travail.", translation: "I have just finished my work." },
            { native: "Elle vient d'appeler.", translation: "She has just called." },
            { native: "Ils viennent d'arriver.", translation: "They have just arrived." },
            { native: "Je suis en train de préparer le dîner.", translation: "I am in the middle of preparing dinner." },
            { native: "Ne le dérange pas — il est en train de dormir.", translation: "Don't disturb him — he is sleeping right now." },
        ],
        inlineVocab: [
            { word: "finir", translation: "to finish" },
            { word: "appeler", translation: "to call" },
            { word: "arriver", translation: "to arrive" },
            { word: "préparer", translation: "to prepare" },
            { word: "dîner", translation: "dinner" },
        ]
    },
    {
        id: "fr-g-a2-16",
        level: "A2",
        title: "Question Forms: Inversion & Question Words",
        explanation: {
            native: "French has three ways to ask questions. 1) Intonation only (informal): Tu viens ? 2) Est-ce que + statement (neutral): Est-ce que tu viens ? 3) Inversion — verb before subject, joined by hyphen (formal): Viens-tu ? With il/elle, a -t- is added between verb and pronoun if the verb ends in a vowel: Parle-t-il ? Key question words: qui (who), que/qu'est-ce que (what), où (where), quand (when), comment (how), pourquoi (why), combien (how much/many), quel/quelle (which).",
            target: "Trois façons de poser une question : 1) Intonation seule (informel) : Tu viens ? 2) Est-ce que + assertion (neutre) : Est-ce que tu viens ? 3) Inversion : Viens-tu ? Avec il/elle, on ajoute -t- si le verbe se termine par une voyelle : Parle-t-il ? Mots interrogatifs : qui, que/qu'est-ce que, où, quand, comment, pourquoi, combien, quel/quelle."
        },
        examples: [
            { native: "Où est-ce que tu habites ?", translation: "Where do you live? (est-ce que)" },
            { native: "Où habites-tu ?", translation: "Where do you live? (inversion — formal)" },
            { native: "Parle-t-il français ?", translation: "Does he speak French? (-t- added)" },
            { native: "Pourquoi est-elle en retard ?", translation: "Why is she late?" },
            { native: "Quel film veux-tu regarder ?", translation: "Which film do you want to watch?" },
        ],
        inlineVocab: [
            { word: "habiter", translation: "to live" },
            { word: "parler", translation: "to speak" },
            { word: "retard", translation: "late / delay" },
            { word: "film", translation: "film" },
            { word: "regarder", translation: "to watch" },
        ]
    },
    {
        id: "fr-g-a2-17",
        level: "A2",
        title: "Country & City Prepositions: en, au, aux, à",
        explanation: {
            native: "The preposition before a country or city depends on the gender and number of the place. Cities: always à (à Paris, à Tokyo). Feminine countries (most ending in -e): en (en France, en Italie, en Chine). Masculine countries: au (au Maroc, au Japon, au Canada). Plural countries: aux (aux États-Unis, aux Pays-Bas). Exceptions: au Mexique, au Mozambique (masculine despite -e). For continents: en Europe, en Asie, en Afrique, en Amérique du Sud.",
            target: "Villes : toujours à. Pays féminins (la plupart se terminent en -e) : en. Pays masculins : au. Pays pluriels : aux. Exceptions : au Mexique, au Mozambique. Continents : en Europe, en Asie, en Afrique, en Amérique du Sud."
        },
        examples: [
            { native: "Je vis à Paris.", translation: "I live in Paris.", annotation: "city → à" },
            { native: "Elle habite en France.", translation: "She lives in France.", annotation: "feminine country → en" },
            { native: "Il travaille au Japon.", translation: "He works in Japan.", annotation: "masculine country → au" },
            { native: "Ils voyagent aux États-Unis.", translation: "They are travelling in the United States.", annotation: "plural → aux" },
            { native: "Nous partons en vacances en Espagne.", translation: "We are going on holiday to Spain." },
        ],
        inlineVocab: [
            { word: "vivre", translation: "to live" },
            { word: "travailler", translation: "to work" },
            { word: "voyager", translation: "to travel" },
            { word: "vacances", translation: "holidays" },
            { word: "Espagne", translation: "Spain" },
        ]
    },
    {
        id: "fr-g-a2-18",
        level: "A2",
        title: "On as a Subject Pronoun",
        explanation: {
            native: "On is one of the most common words in spoken French, yet often confuses learners. It has three main uses. 1) General/impersonal — one / you / people in general: En France, on mange beaucoup de pain. 2) Informal we (very common in conversation): On va au cinéma ? (Shall we go to the cinema?) 3) Passive-like — someone / they: On m'a volé mon sac. (Someone stole my bag.) On always takes the il/elle form of the verb.",
            target: "On a trois emplois principaux. 1) Général/impersonnel : En France, on mange beaucoup de pain. 2) Nous informel (très courant à l'oral) : On va au cinéma ? 3) Quelqu'un (passif) : On m'a volé mon sac. On prend toujours la forme verbale de il/elle."
        },
        examples: [
            { native: "En France, on mange à midi.", translation: "In France, people eat at midday. (general)" },
            { native: "On y va ensemble ?", translation: "Shall we go there together? (informal we)" },
            { native: "On parle français ici.", translation: "French is spoken here. / They speak French here." },
            { native: "On nous a dit que le musée est fermé.", translation: "We were told that the museum is closed." },
            { native: "Quand on est fatigué, on fait des erreurs.", translation: "When you are tired, you make mistakes." },
        ],
        inlineVocab: [
            { word: "manger", translation: "to eat" },
            { word: "ensemble", translation: "together" },
            { word: "musée", translation: "museum" },
            { word: "fatigué", translation: "tired" },
            { word: "erreur", translation: "mistake" },
        ]
    },
    {
        id: "fr-g-a2-19",
        level: "A2",
        title: "Depuis + Present Tense",
        explanation: {
            native: "In French, when an action started in the past and is still ongoing now, use the PRESENT tense + depuis (not the past tense as in English). J'attends depuis vingt minutes (I have been waiting for twenty minutes — and I am still waiting). Compare: J'ai attendu vingt minutes = I waited twenty minutes (and now I have stopped). Depuis can be followed by a duration (depuis trois ans) or a point in time (depuis 2020, depuis lundi). Il y a... que is an alternative: Il y a deux ans que je vis ici.",
            target: "Quand une action a commencé dans le passé et continue encore maintenant, on utilise le PRÉSENT + depuis (pas le passé comme en anglais). J'attends depuis vingt minutes. Depuis peut être suivi d'une durée (depuis trois ans) ou d'un point dans le temps (depuis 2020). Alternative : Il y a deux ans que je vis ici."
        },
        examples: [
            { native: "J'habite à Lyon depuis cinq ans.", translation: "I have been living in Lyon for five years. (still living there)" },
            { native: "Elle attend depuis une heure.", translation: "She has been waiting for an hour." },
            { native: "Il apprend le français depuis septembre.", translation: "He has been learning French since September." },
            { native: "Nous nous connaissons depuis l'université.", translation: "We have known each other since university." },
            { native: "Ça fait deux jours qu'il ne mange rien.", translation: "He hasn't eaten anything for two days." },
        ],
        inlineVocab: [
            { word: "habiter", translation: "to live" },
            { word: "attendre", translation: "to wait" },
            { word: "apprendre", translation: "to learn" },
            { word: "connaître", translation: "to know" },
            { word: "manger", translation: "to eat" },
        ]
    },
    {
        id: "fr-g-a2-20",
        level: "A2",
        title: "Si Clauses — Type 1 (Real Conditions)",
        explanation: {
            native: "Type 1 si clauses express real, possible conditions in the present or future: if X happens, Y will happen. Structure: si + present tense → future simple (or imperative). The si clause can come first or second; the future/imperative is in the other clause. Never use future tense directly after si. Common in everyday situations: Si tu as faim, mange quelque chose. Si vous arrivez en retard, appelez-nous.",
            target: "Les propositions en si de type 1 expriment des conditions réelles et possibles. Structure : si + présent → futur simple (ou impératif). On ne met jamais le futur directement après si. Fréquent dans la vie quotidienne : Si tu as faim, mange quelque chose."
        },
        examples: [
            { native: "Si tu viens, on ira au restaurant.", translation: "If you come, we'll go to the restaurant." },
            { native: "S'il fait beau demain, on se promènera.", translation: "If the weather is nice tomorrow, we'll go for a walk." },
            { native: "S'il est en retard, téléphone-lui.", translation: "If he is late, phone him. (imperative in result clause)" },
            { native: "Si tu as besoin d'aide, demande-moi.", translation: "If you need help, ask me." },
            { native: "On partira à huit heures si tout va bien.", translation: "We'll leave at eight if all goes well." },
        ],
        inlineVocab: [
            { word: "restaurant", translation: "restaurant" },
            { word: "se promener", translation: "to go for a walk" },
            { word: "retard", translation: "late / delay" },
            { word: "aide", translation: "help" },
            { word: "partir", translation: "to leave" },
        ]
    },
    {
        id: "fr-g-a2-21",
        level: "A2",
        title: "Adverb Formation with -ment",
        explanation: {
            native: "Many French adverbs are formed by adding -ment to the feminine form of the adjective: lent → lente → lentement (slowly); heureux → heureuse → heureusement (fortunately). If the masculine adjective ends in a vowel, add -ment directly: vrai → vraiment (truly); poli → poliment (politely). Adjectives ending in -ant/-ent form adverbs with -amment/-emment (both pronounced 'ammon'): courant → couramment; récent → récemment. Common irregular adverbs: bien (well), mal (badly), vite (quickly — no -ment), mieux (better).",
            target: "On forme la plupart des adverbes en ajoutant -ment au féminin de l'adjectif : lent → lente → lentement. Si l'adjectif masculin se termine par une voyelle, on ajoute -ment directement : vrai → vraiment. Adjectifs en -ant/-ent → -amment/-emment : courant → couramment ; récent → récemment. Irréguliers courants : bien, mal, vite, mieux."
        },
        examples: [
            { native: "Elle parle lentement et clairement.", translation: "She speaks slowly and clearly." },
            { native: "Heureusement, il n'a pas plu.", translation: "Fortunately, it didn't rain." },
            { native: "Tu parles vraiment bien français !", translation: "You really speak French well!" },
            { native: "Il conduit prudemment.", translation: "He drives carefully." },
            { native: "Elle chante mieux que moi.", translation: "She sings better than me." },
        ],
        inlineVocab: [
            { word: "parler", translation: "to speak" },
            { word: "conduire", translation: "to drive" },
            { word: "chanter", translation: "to sing" },
            { word: "pleuvoir", translation: "to rain" },
        ]
    },
    {
        id: "fr-g-a2-22",
        level: "A2",
        title: "The Conditional Présent — Polite Requests & Hypotheticals",
        explanation: {
            native: "The conditional présent has two main uses at A2. 1) Polite requests and wishes (the most common use): Je voudrais un café. (I would like a coffee.) Pourriez-vous m'aider ? (Could you help me?) This is far more polite than the present tense. 2) Hypothetical situations (I would do X): Si j'avais le temps, je voyagerais plus. Formation: same stems as futur simple + imperfect endings (-ais, -ais, -ait, -ions, -iez, -aient). Key forms: voudrais, pourrais, devrait, serait, aurait.",
            target: "Le conditionnel présent a deux emplois principaux à l'A2. 1) Demandes polies et souhaits : Je voudrais un café. Pourriez-vous m'aider ? 2) Situations hypothétiques : Si j'avais le temps, je voyagerais plus. Formation : mêmes radicaux qu'au futur simple + terminaisons de l'imparfait."
        },
        examples: [
            { native: "Je voudrais une chambre pour deux nuits.", translation: "I would like a room for two nights." },
            { native: "Pourriez-vous parler plus lentement, s'il vous plaît ?", translation: "Could you speak more slowly, please?" },
            { native: "On devrait partir maintenant.", translation: "We should leave now." },
            { native: "À ta place, je lui parlerais.", translation: "If I were you, I would talk to him/her." },
            { native: "Il aimerait trouver un nouvel emploi.", translation: "He would like to find a new job." },
        ],
        inlineVocab: [
            { word: "chambre", translation: "room" },
            { word: "lentement", translation: "slowly" },
            { word: "partir", translation: "to leave" },
            { word: "parler", translation: "to speak" },
            { word: "emploi", translation: "job" },
        ]
    },
    {
        id: "fr-g-a2-23",
        level: "A2",
        title: "Position of Adjectives (BAGS/BANGS rule)",
        explanation: {
            native: "Most French adjectives follow the noun: une voiture rouge, un film intéressant. However, a group of common short adjectives go BEFORE the noun. A useful memory aid is BAGS (or BANGS): Beauty (beau, joli), Age (jeune, vieux, nouveau), Goodness (bon, mauvais, gentil), Size (grand, petit, gros, long). These adjectives change meaning depending on position: un grand homme = a great man; un homme grand = a tall man. Un ancien collègue = a former colleague; un bâtiment ancien = an old building.",
            target: "La plupart des adjectifs français se placent après le nom. Mais un groupe d'adjectifs courts courants se placent AVANT le nom : beauté (beau, joli), âge (jeune, vieux, nouveau), bonté (bon, mauvais, gentil), taille (grand, petit, gros, long). Certains changent de sens selon leur position : un grand homme / un homme grand."
        },
        examples: [
            { native: "C'est une jolie maison.", translation: "It's a pretty house.", annotation: "Beauty → before noun" },
            { native: "C'est un vieux quartier.", translation: "It's an old neighbourhood.", annotation: "Age → before noun" },
            { native: "C'est un bon restaurant.", translation: "It's a good restaurant.", annotation: "Goodness → before noun" },
            { native: "C'est une grande ville.", translation: "It's a big city.", annotation: "Size → before noun" },
            { native: "C'est un homme grand et un grand homme.", translation: "He is a tall man and a great man. (position changes meaning)" },
        ],
        inlineVocab: [
            { word: "maison", translation: "house" },
            { word: "quartier", translation: "neighbourhood" },
            { word: "restaurant", translation: "restaurant" },
            { word: "ville", translation: "city" },
            { word: "grand", translation: "big / great / tall" },
        ]
    },
    {
        id: "fr-g-a2-24",
        level: "A2",
        title: "Passé Composé vs Imparfait — Choosing the Right Tense",
        explanation: {
            native: "This is the core challenge of A2 French. Use passé composé for: completed single events (Hier, elle a appelé), sequences of events (D'abord il est arrivé, ensuite il a mangé), and actions with a defined duration (J'ai attendu deux heures). Use imparfait for: background descriptions (Il faisait beau), habitual past actions (Tous les étés, on allait à la mer), ongoing states interrupted by an event (Je dormais quand le téléphone a sonné), and emotions/mental states in the past (J'étais fatigué, je voulais dormir).",
            target: "Passé composé : événements ponctuels complétés, séquences d'événements, actions avec durée définie. Imparfait : descriptions de fond, actions passées habituelles, états en cours interrompus par un événement, émotions/états mentaux dans le passé. Clé : le PC dit CE QUI S'EST PASSÉ ; l'imparfait dit COMMENT C'ÉTAIT."
        },
        examples: [
            { native: "Il faisait beau quand nous sommes arrivés.", translation: "It was nice weather when we arrived.", annotation: "background → imparfait; event → PC" },
            { native: "Je lisais quand le téléphone a sonné.", translation: "I was reading when the phone rang.", annotation: "ongoing → imparfait; interruption → PC" },
            { native: "Tous les ans, on allait à la mer.", translation: "Every year, we used to go to the seaside.", annotation: "habit → imparfait" },
            { native: "Soudain, elle a crié.", translation: "Suddenly, she cried out.", annotation: "sudden single event → PC" },
            { native: "J'étais fatigué, donc je me suis couché tôt.", translation: "I was tired, so I went to bed early.", annotation: "state → imparfait; decision → PC" },
        ],
        inlineVocab: [
            { word: "arriver", translation: "to arrive" },
            { word: "lire", translation: "to read" },
            { word: "sonner", translation: "to ring" },
            { word: "crier", translation: "to cry out / shout" },
            { word: "se coucher", translation: "to go to bed" },
        ]
    },
]
