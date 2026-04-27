// src/data/french/units/b1.ts
import { LessonUnit } from "../../../types"

// French B1 units — 17 units across 5 blocks (redesign 2026-04-27)
// Block 1 (U1-3): Deep past | Block 2 (U4-7): Subjonctif
// Block 3 (U8-10): Hypotheticals & complex sentences
// Block 4 (U11-13): Reporting, gérondif, connectors
// Block 5 (U14-17): Authentic French (perception, discourse, consolidation, slang)

export const b1Units: LessonUnit[] = [

    // ─── Block 1: Le passé en profondeur ──────────────────────────────────────

    {
        id: "fr-b1-u1",
        level: "B1",
        order: 1,
        title: "J'avais déjà mangé quand tu es arrivé",
        description: "Add a third temporal layer to past narratives — the plus-que-parfait for what had already happened.",
        grammarIds: ["fr-g-b1-1"],
        vocabIds: ["fr-v-b1-007", "fr-v-b1-047", "fr-v-b1-048", "fr-v-b1-076", "fr-v-b1-079"],
        verbIds: [],
        topicTags: ["social", "identity"],
        testQuestions: [
            { id: "fr-b1-u1-q1", level: "B1", prompt: "How is the plus-que-parfait formed?", options: ["avoir/être (futur) + PP", "avoir/être (imparfait) + PP", "avoir/être (conditionnel) + PP", "avoir/être (présent) + PP"], answer: "avoir/être (imparfait) + PP" },
            { id: "fr-b1-u1-q2", level: "B1", prompt: "Complete: 'Quand je suis arrivé, elle ___ déjà partie.'", options: ["est", "était", "sera", "serait"], answer: "était" },
            { id: "fr-b1-u1-q3", level: "B1", prompt: "Which sentence correctly uses the plus-que-parfait?", options: ["Il était épuisé parce qu'il n'a pas dormi.", "Il était épuisé parce qu'il n'avait pas dormi.", "Il était épuisé parce qu'il n'est pas dormi.", "Il était épuisé parce qu'il ne dormait pas."], answer: "Il était épuisé parce qu'il n'avait pas dormi." },
            { id: "fr-b1-u1-q4", level: "B1", prompt: "Where does 'déjà' go in the plus-que-parfait?", options: ["Before the auxiliary", "Between auxiliary and past participle", "After the past participle", "At the end of the sentence"], answer: "Between auxiliary and past participle" },
            { id: "fr-b1-u1-q5", level: "B1", prompt: "Complete: 'Elle m'a dit qu'elle ___ déjà réservé.'", options: ["a", "avait", "aura", "aurait"], answer: "avait" },
        ],
    },

    {
        id: "fr-b1-u2",
        level: "B1",
        order: 2,
        title: "La vraie histoire — raconter en trois temps",
        description: "Tell complex, layered stories using passé composé, imparfait, and plus-que-parfait together naturally.",
        grammarIds: [],
        vocabIds: ["fr-v-b1-006", "fr-v-b1-009", "fr-v-b1-014", "fr-v-b1-049", "fr-v-b1-080"],
        verbIds: [],
        topicTags: ["social", "identity"],
        testQuestions: [
            { id: "fr-b1-u2-q1", level: "B1", prompt: "In a three-tense narrative, the plus-que-parfait signals:", options: ["What was happening in the background", "What happened and moved the story forward", "What had happened before the main events", "What will happen next"], answer: "What had happened before the main events" },
            { id: "fr-b1-u2-q2", level: "B1", prompt: "'Je dormais quand le téléphone a sonné.' Which tense is 'dormais' and why?", options: ["Passé composé — completed event", "Imparfait — background ongoing action", "Plus-que-parfait — prior event", "Conditionnel — hypothetical"], answer: "Imparfait — background ongoing action" },
            { id: "fr-b1-u2-q3", level: "B1", prompt: "Which connector signals a sudden event that moves the plot forward?", options: ["d'habitude", "tous les jours", "soudain", "auparavant"], answer: "soudain" },
            { id: "fr-b1-u2-q4", level: "B1", prompt: "Complete: 'Il ___ (ne pas dormir) de la nuit, donc il était épuisé.' (prior cause)", options: ["n'a pas dormi", "ne dormait pas", "n'avait pas dormi", "ne dormira pas"], answer: "n'avait pas dormi" },
            { id: "fr-b1-u2-q5", level: "B1", prompt: "What does 'entre-temps' mean?", options: ["suddenly", "in the meantime", "after all", "previously"], answer: "in the meantime" },
        ],
    },

    {
        id: "fr-b1-u3",
        level: "B1",
        order: 3,
        title: "Ça s'est passé comme ça — la voix passive",
        description: "Understand and produce passive constructions; decode formal French; use on as the natural spoken alternative.",
        grammarIds: ["fr-g-b1-2"],
        vocabIds: ["fr-v-b1-019", "fr-v-b1-020", "fr-v-b1-021", "fr-v-b1-022", "fr-v-b1-074"],
        verbIds: [],
        topicTags: ["culture", "work"],
        checkpointId: "fr-cp-b1-1",
        testQuestions: [
            { id: "fr-b1-u3-q1", level: "B1", prompt: "Form the passive: 'Le chef prépare le plat.' →", options: ["Le plat est préparé par le chef.", "Le plat prépare le chef.", "Le chef est préparé le plat.", "Le plat a préparé par le chef."], answer: "Le plat est préparé par le chef." },
            { id: "fr-b1-u3-q2", level: "B1", prompt: "The past participle in a passive construction agrees with:", options: ["The agent (par + noun)", "The main verb tense", "The grammatical subject", "It never agrees"], answer: "The grammatical subject" },
            { id: "fr-b1-u3-q3", level: "B1", prompt: "What is the natural spoken alternative to the passive in French?", options: ["The reflexive form", "On + active verb", "The infinitive", "The gérondif"], answer: "On + active verb" },
            { id: "fr-b1-u3-q4", level: "B1", prompt: "Passive in passé composé: 'The decision was made by the committee.'", options: ["La décision est prise par le comité.", "La décision a été prise par le comité.", "La décision était prise par le comité.", "La décision sera prise par le comité."], answer: "La décision a été prise par le comité." },
            { id: "fr-b1-u3-q5", level: "B1", prompt: "What does 'diffuser' mean?", options: ["to publish", "to broadcast / spread", "to deliver", "to announce"], answer: "to broadcast / spread" },
        ],
    },

    // ─── Block 2: Le subjonctif ────────────────────────────────────────────────

    {
        id: "fr-b1-u4",
        level: "B1",
        order: 4,
        title: "Je veux que tu viennes — le subjonctif (volonté)",
        description: "Master the subjunctive formation and use it after verbs of will, desire, and necessity.",
        grammarIds: ["fr-g-b1-3"],
        vocabIds: ["fr-v-b1-004", "fr-v-b1-005", "fr-v-b1-011", "fr-v-b1-012", "fr-v-b1-067"],
        verbIds: [],
        topicTags: ["social", "work"],
        testQuestions: [
            { id: "fr-b1-u4-q1", level: "B1", prompt: "How is the subjunctive stem formed for regular verbs?", options: ["From the je present form", "From the ils/elles present form minus -ent", "From the infinitive minus -er", "From the imparfait nous form"], answer: "From the ils/elles present form minus -ent" },
            { id: "fr-b1-u4-q2", level: "B1", prompt: "Complete: 'Il faut que tu ___ (venir).'", options: ["viens", "viendras", "viennes", "venais"], answer: "viennes" },
            { id: "fr-b1-u4-q3", level: "B1", prompt: "When do you use subjunctive instead of infinitive?", options: ["Always after vouloir", "When the two clauses have different subjects", "When the main verb is in the past", "When the sentence is negative"], answer: "When the two clauses have different subjects" },
            { id: "fr-b1-u4-q4", level: "B1", prompt: "What is the subjunctive of 'faire' (il/elle)?", options: ["fait", "fasse", "fera", "ferait"], answer: "fasse" },
            { id: "fr-b1-u4-q5", level: "B1", prompt: "What does 'il vaut mieux que' mean?", options: ["it is possible that", "it is better that", "it is necessary that", "it seems that"], answer: "it is better that" },
        ],
    },

    {
        id: "fr-b1-u5",
        level: "B1",
        order: 5,
        title: "Je doute qu'il vienne — subjonctif (émotion et doute)",
        description: "Express emotion, doubt, and uncertainty with the subjunctive; master the indicative/subjunctive contrast with belief verbs.",
        grammarIds: ["fr-g-b1-4"],
        vocabIds: ["fr-v-b1-016", "fr-v-b1-017", "fr-v-b1-046", "fr-v-b1-050", "fr-v-b1-076"],
        verbIds: [],
        topicTags: ["social", "identity"],
        testQuestions: [
            { id: "fr-b1-u5-q1", level: "B1", prompt: "Complete: 'Je suis content qu'elle ___ réussi.'", options: ["a", "ait", "avait", "aura"], answer: "ait" },
            { id: "fr-b1-u5-q2", level: "B1", prompt: "'Je pense qu'il est là' vs 'Je ne pense pas qu'il soit là.' Why does the second use subjunctive?", options: ["Because it's in the past", "Because the negation creates doubt", "Because penser always takes subjunctive", "Because 'là' triggers it"], answer: "Because the negation creates doubt" },
            { id: "fr-b1-u5-q3", level: "B1", prompt: "Which expression requires subjunctive?", options: ["Il est certain que", "Je sais que", "Il est possible que", "Il est évident que"], answer: "Il est possible que" },
            { id: "fr-b1-u5-q4", level: "B1", prompt: "Complete: 'Il est étrange qu'il n'___ pas répondu.'", options: ["a", "ait", "avait", "aura"], answer: "ait" },
            { id: "fr-b1-u5-q5", level: "B1", prompt: "What does 'trouver dommage que' mean?", options: ["to find it surprising that", "to find it a shame that", "to find it good that", "to find it strange that"], answer: "to find it a shame that" },
        ],
    },

    {
        id: "fr-b1-u6",
        level: "B1",
        order: 6,
        title: "Pour que tu comprennes / bien que ce soit difficile — subjonctif (conjonctions)",
        description: "Use subjunctive conjunctions for purpose, concession, and unrealised events.",
        grammarIds: ["fr-g-b1-5"],
        vocabIds: ["fr-v-b1-071", "fr-v-b1-082", "fr-v-b1-083", "fr-v-b1-084", "fr-v-b1-085"],
        verbIds: [],
        topicTags: ["social", "identity"],
        testQuestions: [
            { id: "fr-b1-u6-q1", level: "B1", prompt: "'Je parle lentement pour qu'il ___.' Which form is correct?", options: ["comprend", "comprendra", "comprenne", "comprendrait"], answer: "comprenne" },
            { id: "fr-b1-u6-q2", level: "B1", prompt: "'Bien qu'il ___ fatigué, il continue.' Complete.", options: ["est", "soit", "sera", "serait"], answer: "soit" },
            { id: "fr-b1-u6-q3", level: "B1", prompt: "Which conjunction takes indicative (not subjunctive)?", options: ["avant que", "bien que", "après que", "à moins que"], answer: "après que" },
            { id: "fr-b1-u6-q4", level: "B1", prompt: "Complete: 'Il est parti sans qu'on le ___.'", options: ["sait", "sache", "saura", "savait"], answer: "sache" },
            { id: "fr-b1-u6-q5", level: "B1", prompt: "When do you use pour + infinitif instead of pour que + subjunctive?", options: ["When the subjects are different", "When the subjects are the same", "Always in written French", "Only with vouloir"], answer: "When the subjects are the same" },
        ],
    },

    {
        id: "fr-b1-u7",
        level: "B1",
        order: 7,
        title: "C'est le meilleur endroit que je connaisse — subjonctif (superlatif et relatif)",
        description: "Use subjunctive after superlatives and uncertain relative clauses; review the complete B1 subjunctive system.",
        grammarIds: ["fr-g-b1-6"],
        vocabIds: ["fr-v-b1-002", "fr-v-b1-003", "fr-v-b1-014", "fr-v-b1-015", "fr-v-b1-050"],
        verbIds: [],
        topicTags: ["culture", "social"],
        checkpointId: "fr-cp-b1-2",
        testQuestions: [
            { id: "fr-b1-u7-q1", level: "B1", prompt: "Complete: 'C'est le meilleur film que j'___ jamais vu.'", options: ["ai", "aie", "avais", "aurai"], answer: "aie" },
            { id: "fr-b1-u7-q2", level: "B1", prompt: "'Je cherche quelqu'un qui ___ parler japonais.' Why subjunctive?", options: ["Because 'chercher' always takes subjunctive", "Because the referent may not exist", "Because it's after a superlative", "Because the subjects differ"], answer: "Because the referent may not exist" },
            { id: "fr-b1-u7-q3", level: "B1", prompt: "Which sentence requires indicative (not subjunctive)?", options: ["Je cherche quelqu'un qui puisse m'aider.", "J'ai trouvé quelqu'un qui peut m'aider.", "C'est la seule solution qui soit possible.", "C'est le meilleur restaurant que je connaisse."], answer: "J'ai trouvé quelqu'un qui peut m'aider." },
            { id: "fr-b1-u7-q4", level: "B1", prompt: "What does 'certes' mean?", options: ["certainly / always", "admittedly / granted", "obviously", "in addition"], answer: "admittedly / granted" },
            { id: "fr-b1-u7-q5", level: "B1", prompt: "Complete: 'C'est l'unique endroit où je me ___ vraiment chez moi.'", options: ["sens", "sente", "sentirai", "sentirais"], answer: "sente" },
        ],
    },

    // ─── Block 3: Hypotheticals & complex sentences ────────────────────────────

    {
        id: "fr-b1-u8",
        level: "B1",
        order: 8,
        title: "Si j'avais le temps... — hypothèses types 2 et 3",
        description: "Speculate about the present and regret the past using si clauses types 2 and 3, and the conditionnel passé.",
        grammarIds: ["fr-g-b1-7"],
        vocabIds: ["fr-v-b1-007", "fr-v-b1-045", "fr-v-b1-046", "fr-v-b1-068", "fr-v-b1-069"],
        verbIds: [],
        topicTags: ["identity", "social"],
        testQuestions: [
            { id: "fr-b1-u8-q1", level: "B1", prompt: "Type 2 si clause: si + ___ → conditionnel présent.", options: ["présent", "futur", "imparfait", "plus-que-parfait"], answer: "imparfait" },
            { id: "fr-b1-u8-q2", level: "B1", prompt: "Complete (type 3): 'Si j'avais su, j'___ agi différemment.'", options: ["aurais", "aurais eu", "avais", "aurai"], answer: "aurais" },
            { id: "fr-b1-u8-q3", level: "B1", prompt: "How do you form the conditionnel passé?", options: ["conditionnel of avoir/être + past participle", "futur of avoir/être + past participle", "imparfait of avoir/être + past participle", "subjonctif + past participle"], answer: "conditionnel of avoir/être + past participle" },
            { id: "fr-b1-u8-q4", level: "B1", prompt: "Translate: 'You should have asked.'", options: ["Tu dois demander.", "Tu devrais demander.", "Tu aurais dû demander.", "Tu avais dû demander."], answer: "Tu aurais dû demander." },
            { id: "fr-b1-u8-q5", level: "B1", prompt: "Which tense NEVER appears directly after 'si' in a conditional sentence?", options: ["imparfait", "plus-que-parfait", "présent", "conditionnel"], answer: "conditionnel" },
        ],
    },

    {
        id: "fr-b1-u9",
        level: "B1",
        order: 9,
        title: "Tu le lui as dit ? — les pronoms combinés",
        description: "Combine direct and indirect object pronouns; master ordering rules and double pronouns in imperatives.",
        grammarIds: ["fr-g-b1-8"],
        vocabIds: ["fr-v-b1-077", "fr-v-b1-078", "fr-v-b1-079", "fr-v-b1-080", "fr-v-b1-060"],
        verbIds: [],
        topicTags: ["social", "work"],
        testQuestions: [
            { id: "fr-b1-u9-q1", level: "B1", prompt: "Replace: 'Je donne le livre à Marie.' →", options: ["Je la lui donne.", "Je lui le donne.", "Je le lui donne.", "Je le la donne."], answer: "Je le lui donne." },
            { id: "fr-b1-u9-q2", level: "B1", prompt: "Replace: 'Elle me montre les photos.' →", options: ["Elle les me montre.", "Elle me les montre.", "Elle lui les montre.", "Elle les lui montre."], answer: "Elle me les montre." },
            { id: "fr-b1-u9-q3", level: "B1", prompt: "Affirmative imperative: 'Donne le cadeau à moi.' →", options: ["Donne-le-moi.", "Donne-moi-le.", "Le-donne-moi.", "Me-le-donne."], answer: "Donne-le-moi." },
            { id: "fr-b1-u9-q4", level: "B1", prompt: "Negative imperative: 'Ne ___ ___ dis pas.' (it — to him)", options: ["le lui", "lui le", "la lui", "lui la"], answer: "le lui" },
            { id: "fr-b1-u9-q5", level: "B1", prompt: "In passé composé with preceding COD, the past participle:", options: ["Never agrees", "Always agrees with the subject", "Agrees in gender/number with the COD", "Agrees only if the COD is feminine"], answer: "Agrees in gender/number with the COD" },
        ],
    },

    {
        id: "fr-b1-u10",
        level: "B1",
        order: 10,
        title: "La personne dont je t'ai parlé — dont, lequel, ce qui / ce que",
        description: "Connect complex ideas using dont, lequel, and abstract ce qui/ce que/ce dont.",
        grammarIds: ["fr-g-b1-9"],
        vocabIds: ["fr-v-b1-025", "fr-v-b1-026", "fr-v-b1-027", "fr-v-b1-028", "fr-v-b1-029"],
        verbIds: [],
        topicTags: ["culture", "identity"],
        checkpointId: "fr-cp-b1-3",
        testQuestions: [
            { id: "fr-b1-u10-q1", level: "B1", prompt: "Complete: 'C'est le livre ___ j'ai besoin.'", options: ["que", "qui", "dont", "lequel"], answer: "dont" },
            { id: "fr-b1-u10-q2", level: "B1", prompt: "Complete: '___ m'intéresse, c'est la culture française.'", options: ["Ce que", "Ce qui", "Ce dont", "Que"], answer: "Ce qui" },
            { id: "fr-b1-u10-q3", level: "B1", prompt: "Complete: 'La raison ___ je suis venu est simple.'", options: ["dont", "que", "pour laquelle", "lequel"], answer: "pour laquelle" },
            { id: "fr-b1-u10-q4", level: "B1", prompt: "Complete: 'Voilà ___ j'ai besoin — du temps et de l'argent.'", options: ["ce qui", "ce que", "ce dont", "dont"], answer: "ce dont" },
            { id: "fr-b1-u10-q5", level: "B1", prompt: "In 'un ami dont le père est médecin', what does dont express?", options: ["location", "time", "possession (whose)", "manner"], answer: "possession (whose)" },
        ],
    },

    // ─── Block 4: Reporting, gérondif, connectors ──────────────────────────────

    {
        id: "fr-b1-u11",
        level: "B1",
        order: 11,
        title: "Il m'a dit qu'il viendrait — le discours indirect",
        description: "Report what someone said, asked, or commanded; handle tense backshift accurately.",
        grammarIds: ["fr-g-b1-10"],
        vocabIds: ["fr-v-b1-009", "fr-v-b1-018", "fr-v-b1-022", "fr-v-b1-024", "fr-v-b1-075"],
        verbIds: [],
        topicTags: ["social", "work"],
        testQuestions: [
            { id: "fr-b1-u11-q1", level: "B1", prompt: "Report: 'Je suis fatigué.' → Il a dit qu'il ___.", options: ["est fatigué", "était fatigué", "sera fatigué", "serait fatigué"], answer: "était fatigué" },
            { id: "fr-b1-u11-q2", level: "B1", prompt: "Report: 'Est-ce que tu as mangé ?' → Elle m'a demandé ___.", options: ["si j'avais mangé", "si j'ai mangé", "est-ce que j'avais mangé", "que j'avais mangé"], answer: "si j'avais mangé" },
            { id: "fr-b1-u11-q3", level: "B1", prompt: "Report: 'Ferme la porte !' → Il m'a dit ___.", options: ["que je ferme la porte", "de fermer la porte", "à fermer la porte", "que j'ai fermé la porte"], answer: "de fermer la porte" },
            { id: "fr-b1-u11-q4", level: "B1", prompt: "Report: 'Qu'est-ce que tu veux ?' → Il a demandé ___.", options: ["qu'est-ce que je voulais", "ce que je voulais", "si je voulais", "que je voulais"], answer: "ce que je voulais" },
            { id: "fr-b1-u11-q5", level: "B1", prompt: "When does tense backshift NOT apply in reported speech?", options: ["When the sentence is negative", "When the reporting verb is in the present tense", "When the sentence contains a si clause", "Always in spoken French"], answer: "When the reporting verb is in the present tense" },
        ],
    },

    {
        id: "fr-b1-u12",
        level: "B1",
        order: 12,
        title: "En travaillant, j'écoute de la musique — le gérondif",
        description: "Express simultaneous actions, manner, and condition using en + present participle.",
        grammarIds: ["fr-g-b1-11"],
        vocabIds: ["fr-v-b1-052", "fr-v-b1-055", "fr-v-b1-057", "fr-v-b1-058", "fr-v-b1-064"],
        verbIds: [],
        topicTags: ["work", "identity"],
        testQuestions: [
            { id: "fr-b1-u12-q1", level: "B1", prompt: "How is the gérondif formed?", options: ["en + infinitif", "en + -ant form (from nous-form)", "en + past participle", "en + imparfait"], answer: "en + -ant form (from nous-form)" },
            { id: "fr-b1-u12-q2", level: "B1", prompt: "'En lisant, j'apprends.' What does the gérondif express here?", options: ["Condition", "Prior action", "Simultaneous action / manner", "Concession"], answer: "Simultaneous action / manner" },
            { id: "fr-b1-u12-q3", level: "B1", prompt: "Which gérondif sentence is INCORRECT (wrong subject)?", options: ["En marchant, je pense.", "En lisant, elle apprend.", "En travaillant, le soleil s'est couché.", "En chantant, il cuisine."], answer: "En travaillant, le soleil s'est couché." },
            { id: "fr-b1-u12-q4", level: "B1", prompt: "What is the gérondif of 'savoir'?", options: ["en savant", "en sachant", "en sauvant", "en saurant"], answer: "en sachant" },
            { id: "fr-b1-u12-q5", level: "B1", prompt: "'Tout en + gérondif' expresses:", options: ["condition", "purpose", "simultaneous action with slight contrast", "sequence"], answer: "simultaneous action with slight contrast" },
        ],
    },

    {
        id: "fr-b1-u13",
        level: "B1",
        order: 13,
        title: "C'est pourquoi / pourtant — connecteurs logiques B1",
        description: "Articulate cause, consequence, concession, and opposition with B1-level connectors that go beyond mais and donc.",
        grammarIds: ["fr-g-b1-12"],
        vocabIds: ["fr-v-b1-001", "fr-v-b1-002", "fr-v-b1-010", "fr-v-b1-086", "fr-v-b1-087"],
        verbIds: [],
        topicTags: ["culture", "social"],
        checkpointId: "fr-cp-b1-4",
        testQuestions: [
            { id: "fr-b1-u13-q1", level: "B1", prompt: "What is the difference between 'puisque' and 'parce que'?", options: ["puisque is more polite", "puisque introduces shared/known reason; parce que introduces new information", "puisque is only for formal writing", "They are interchangeable"], answer: "puisque introduces shared/known reason; parce que introduces new information" },
            { id: "fr-b1-u13-q2", level: "B1", prompt: "What does 'si bien que' mean?", options: ["if and only if", "so much so that", "even if", "while"], answer: "so much so that" },
            { id: "fr-b1-u13-q3", level: "B1", prompt: "'Il était malade, ___ il n'est pas venu.' (that is why)", options: ["pourtant", "c'est pourquoi", "alors que", "si bien que"], answer: "c'est pourquoi" },
            { id: "fr-b1-u13-q4", level: "B1", prompt: "'Paris est touristique, ___ Lyon est plus calme.' (contrast)", options: ["pourtant", "donc", "alors que", "puisque"], answer: "alors que" },
            { id: "fr-b1-u13-q5", level: "B1", prompt: "What does 'de plus' mean?", options: ["furthermore / moreover", "on the other hand", "that is why", "however"], answer: "furthermore / moreover" },
        ],
    },

    // ─── Block 5: Authentic French ────────────────────────────────────────────

    {
        id: "fr-b1-u14",
        level: "B1",
        order: 14,
        title: "Je l'entends chanter / faire faire — verbes de perception et causatif",
        description: "Express what you perceive someone doing and have things done using faire causatif and perception verbs.",
        grammarIds: ["fr-g-b1-13"],
        vocabIds: ["fr-v-b1-030", "fr-v-b1-031", "fr-v-b1-032", "fr-v-b1-033", "fr-v-b1-034"],
        verbIds: [],
        topicTags: ["culture", "social"],
        testQuestions: [
            { id: "fr-b1-u14-q1", level: "B1", prompt: "'Je fais réparer ma voiture.' What does this mean?", options: ["I repair my car myself.", "I am having my car repaired.", "I used to repair my car.", "I want to repair my car."], answer: "I am having my car repaired." },
            { id: "fr-b1-u14-q2", level: "B1", prompt: "Replace: 'Je fais réparer la voiture.' →", options: ["Je la fais réparer.", "Je fais la réparer.", "Je la répare faire.", "Je fais réparé la."], answer: "Je la fais réparer." },
            { id: "fr-b1-u14-q3", level: "B1", prompt: "'J'entends les enfants chanter.' Replace with pronoun →", options: ["J'entends les chanter.", "Je leur entends chanter.", "Je les entends chanter.", "J'entends chanter les."], answer: "Je les entends chanter." },
            { id: "fr-b1-u14-q4", level: "B1", prompt: "'La voiture que j'ai fait réparer.' Why is 'fait' invariable?", options: ["Because it's a past participle", "Because fait is always invariable", "Because in causative constructions, fait never agrees with a preceding COD", "Because the COD is masculine"], answer: "Because in causative constructions, fait never agrees with a preceding COD" },
            { id: "fr-b1-u14-q5", level: "B1", prompt: "What does 'laisser + infinitif' express?", options: ["to make sb do", "to let / allow sb to do", "to hear sb doing", "to have sth done"], answer: "to let / allow sb to do" },
        ],
    },

    {
        id: "fr-b1-u15",
        level: "B1",
        order: 15,
        title: "Mettre les idées en ordre — discours B1",
        description: "Structure spoken and written argument with B1 discourse markers; hedge, qualify, and reformulate naturally.",
        grammarIds: ["fr-g-b1-14"],
        vocabIds: ["fr-v-b1-008", "fr-v-b1-011", "fr-v-b1-013", "fr-v-b1-015", "fr-v-b1-016"],
        verbIds: [],
        topicTags: ["work", "culture"],
        testQuestions: [
            { id: "fr-b1-u15-q1", level: "B1", prompt: "What does 'il me semble que' express?", options: ["I know for certain that", "It seems to me that (hedging)", "It is certain that", "I demand that"], answer: "It seems to me that (hedging)" },
            { id: "fr-b1-u15-q2", level: "B1", prompt: "What is the function of 'd'une part... d'autre part'?", options: ["cause and consequence", "on the one hand... on the other (structuring)", "first... then (sequencing)", "however... therefore"], answer: "on the one hand... on the other (structuring)" },
            { id: "fr-b1-u15-q3", level: "B1", prompt: "What does 'certes' mean in context: 'Certes, c'est cher. Mais...'?", options: ["However", "Admittedly / Granted", "Obviously", "Therefore"], answer: "Admittedly / Granted" },
            { id: "fr-b1-u15-q4", level: "B1", prompt: "Which expression introduces a clarification?", options: ["en fin de compte", "c'est-à-dire", "d'une part", "pourtant"], answer: "c'est-à-dire" },
            { id: "fr-b1-u15-q5", level: "B1", prompt: "What does 'en fin de compte' mean?", options: ["in any case", "in the end / all in all", "on the other hand", "on the contrary"], answer: "in the end / all in all" },
        ],
    },

    {
        id: "fr-b1-u16",
        level: "B1",
        order: 16,
        title: "Mon français à moi — consolidation B1",
        description: "Integrate all B1 grammar across complex communicative tasks; self-audit and target your remaining gaps before the exit capstone.",
        grammarIds: ["fr-g-b1-1", "fr-g-b1-3", "fr-g-b1-7", "fr-g-b1-10", "fr-g-b1-12"],
        vocabIds: ["fr-v-b1-049", "fr-v-b1-062", "fr-v-b1-072", "fr-v-b1-073", "fr-v-b1-076"],
        verbIds: [],
        topicTags: ["identity", "culture"],
        checkpointId: "fr-cp-b1-5",
        testQuestions: [
            { id: "fr-b1-u16-q1", level: "B1", prompt: "Which B1 structure expresses 'I should have done it'?", options: ["J'aurais dû le faire.", "Je devrais le faire.", "Il faut que je le fasse.", "J'ai dû le faire."], answer: "J'aurais dû le faire." },
            { id: "fr-b1-u16-q2", level: "B1", prompt: "What is wrong: 'Je ne pense pas qu'il est là.'?", options: ["'ne pense pas' is wrong", "After 'je ne pense pas que', use subjunctive: soit", "The word order is wrong", "Nothing is wrong"], answer: "After 'je ne pense pas que', use subjunctive: soit" },
            { id: "fr-b1-u16-q3", level: "B1", prompt: "Report: 'Où vas-tu ?' → Il m'a demandé ___.", options: ["où je vais", "où j'allais", "où allais-je", "est-ce que j'allais"], answer: "où j'allais" },
            { id: "fr-b1-u16-q4", level: "B1", prompt: "Complete: 'Je l'ai entendue ___.' (chanter)", options: ["chanter", "chantée", "chantant", "à chanter"], answer: "chanter" },
            { id: "fr-b1-u16-q5", level: "B1", prompt: "Which connector introduces a known shared reason (not new info)?", options: ["parce que", "donc", "puisque", "alors que"], answer: "puisque" },
        ],
    },

    {
        id: "fr-b1-u17",
        level: "B1",
        order: 17,
        title: "Le français vivant — argot, expressions et accents",
        description: "Bridge from B1 grammar into authentic French — verlan, everyday argot, key idioms, and regional variety (France, Québec, Belgique).",
        grammarIds: ["fr-g-b1-14"],
        vocabIds: ["fr-v-b1-006", "fr-v-b1-010", "fr-v-b1-014", "fr-v-b1-017", "fr-v-b1-023"],
        verbIds: [],
        topicTags: ["culture", "social"],
        checkpointId: "fr-cp-b1-6",
        testQuestions: [
            { id: "fr-b1-u17-q1", level: "B1", prompt: "What does 'avoir le cafard' mean?", options: ["to have a cockroach", "to feel down / depressed", "to be very hungry", "to be in a hurry"], answer: "to feel down / depressed" },
            { id: "fr-b1-u17-q2", level: "B1", prompt: "What is 'meuf' in verlan?", options: ["le mec", "la femme", "la fête", "le fric"], answer: "la femme" },
            { id: "fr-b1-u17-q3", level: "B1", prompt: "What does 'poser un lapin à quelqu'un' mean?", options: ["to give someone a gift", "to stand someone up", "to be very late", "to cause trouble"], answer: "to stand someone up" },
            { id: "fr-b1-u17-q4", level: "B1", prompt: "In Québec French, what does 'magasiner' mean?", options: ["to cook", "to go shopping", "to travel", "to study"], answer: "to go shopping" },
            { id: "fr-b1-u17-q5", level: "B1", prompt: "What does the filler 'du coup' signal in spoken French?", options: ["addition / also", "result / as a result", "contrast / however", "time / now"], answer: "result / as a result" },
        ],
    },
]
