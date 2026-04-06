// src/data/french/units/b1.ts
import { LessonUnit } from "../../../types"

// 5 B1 unit stubs. Content TBD.

export const b1Units: LessonUnit[] = [
    {
        id: "fr-b1-u1",
        level: "B1",
        order: 1,
        title: "Expressing Obligation & Hypothesis",
        description: "Use devoir and the conditionnel to express what must happen and what would happen.",
        grammarIds: ["fr-g-b1-2"],
        vocabIds: ["fr-v-b1-001", "fr-v-b1-002", "fr-v-b1-003", "fr-v-b1-011", "fr-v-b1-012", "fr-v-b1-013", "fr-v-b1-045", "fr-v-b1-046"],
        verbIds: ["fr-vb-b1-2"],
        testQuestions: [
            { id: "fr-uq-b1-1-1", level: "B1", prompt: "Complete (conditionnel): 'Avec plus de temps, je ___ plus.' (voyager)", options: ["voyage", "voyagerai", "voyagerais", "voyageais"], answer: "voyagerais" },
            { id: "fr-uq-b1-1-2", level: "B1", prompt: "How do you say 'You should study more'?", options: ["Tu dois étudier plus.", "Tu devras étudier plus.", "Tu devrais étudier plus.", "Tu devais étudier plus."], answer: "Tu devrais étudier plus." },
            { id: "fr-uq-b1-1-3", level: "B1", prompt: "What does 'de plus' mean?", options: ["in addition", "furthermore", "however", "even more"], answer: "furthermore" },
            { id: "fr-uq-b1-1-4", level: "B1", prompt: "What does 'environ' mean?", options: ["environment", "around / about", "everywhere", "nearby"], answer: "around / about" },
            { id: "fr-uq-b1-1-5", level: "B1", prompt: "Complete (conditionnel of devoir — tu): 'Tu ___ étudier davantage.'", options: ["dois", "devais", "devrais", "devras"], answer: "devrais" },
        ]
    },
    {
        id: "fr-b1-u2",
        level: "B1",
        order: 2,
        title: "The Subjunctive",
        description: "Use the subjonctif after expressions of doubt, emotion, desire, and necessity.",
        grammarIds: ["fr-g-b1-1"],
        vocabIds: ["fr-v-b1-004", "fr-v-b1-005", "fr-v-b1-006", "fr-v-b1-038", "fr-v-b1-039", "fr-v-b1-040", "fr-v-b1-041", "fr-v-b1-042"],
        verbIds: [],
        listeningIds: ["fr-l-b1-1"],
        testQuestions: [
            { id: "fr-uq-b1-2-1", level: "B1", prompt: "Complete (subjonctif): 'Il faut que tu ___ (venir).'", options: ["viens", "viendras", "viennes", "venais"], answer: "viennes" },
            { id: "fr-uq-b1-2-2", level: "B1", prompt: "Complete (subjonctif): 'Je veux qu'il ___ (être) heureux.'", options: ["est", "soit", "sera", "était"], answer: "soit" },
            { id: "fr-uq-b1-2-3", level: "B1", prompt: "What does 'l'environnement' mean?", options: ["surroundings", "environment", "countryside", "nature"], answer: "environment" },
            { id: "fr-uq-b1-2-4", level: "B1", prompt: "What does 'la société' mean?", options: ["company", "sociology", "society", "association"], answer: "society" },
            { id: "fr-uq-b1-2-5", level: "B1", prompt: "Which expression triggers the subjunctive?", options: ["Je sais que", "Il est certain que", "Il faut que", "Il est vrai que"], answer: "Il faut que" },
        ]
    },
    {
        id: "fr-b1-u3",
        level: "B1",
        order: 3,
        title: "Past Tenses in Context",
        description: "Use imparfait and passé composé together correctly — background vs. events.",
        grammarIds: ["fr-g-b1-3"],
        vocabIds: ["fr-v-b1-007", "fr-v-b1-008", "fr-v-b1-009", "fr-v-b1-025", "fr-v-b1-026", "fr-v-b1-027", "fr-v-b1-028"],
        verbIds: ["fr-vb-b1-1"],
        readingIds: ["fr-r-b1-1"],
        testQuestions: [
            { id: "fr-uq-b1-3-1", level: "B1", prompt: "Complete: 'Je ___ (lire) quand il est arrivé.' (background action)", options: ["lisais", "ai lu", "lirai", "lirais"], answer: "lisais" },
            { id: "fr-uq-b1-3-2", level: "B1", prompt: "Which tense is used for a completed event that interrupted something?", options: ["imparfait", "passé composé", "plus-que-parfait", "conditionnel"], answer: "passé composé" },
            { id: "fr-uq-b1-3-3", level: "B1", prompt: "What does 'le défi' mean?", options: ["environment", "challenge", "opinion", "society"], answer: "challenge" },
            { id: "fr-uq-b1-3-4", level: "B1", prompt: "What does 'selon' mean?", options: ["suddenly", "according to", "however", "around"], answer: "according to" },
            { id: "fr-uq-b1-3-5", level: "B1", prompt: "What does 'actuellement' mean?", options: ["actually", "currently", "eventually", "previously"], answer: "currently" },
        ]
    },
    {
        id: "fr-b1-u4",
        level: "B1",
        order: 4,
        title: "Relative Pronouns",
        description: "Use qui, que, dont, and où to link clauses and speak in more complex sentences.",
        grammarIds: ["fr-g-b1-4"],
        vocabIds: ["fr-v-b1-010", "fr-v-b1-018", "fr-v-b1-019", "fr-v-b1-020", "fr-v-b1-021", "fr-v-b1-022", "fr-v-b1-023", "fr-v-b1-024"],
        verbIds: ["fr-vb-b1-3"],
        testQuestions: [
            { id: "fr-uq-b1-4-1", level: "B1", prompt: "Which pronom relatif replaces the subject?", options: ["que", "dont", "où", "qui"], answer: "qui" },
            { id: "fr-uq-b1-4-2", level: "B1", prompt: "Complete: 'Le livre ___ je lis est passionnant.'", options: ["qui", "que", "dont", "où"], answer: "que" },
            { id: "fr-uq-b1-4-3", level: "B1", prompt: "Which relative pronoun means 'of which / whose'?", options: ["qui", "que", "dont", "où"], answer: "dont" },
            { id: "fr-uq-b1-4-4", level: "B1", prompt: "Complete: 'La ville ___ j'habite est belle.'", options: ["qui", "que", "dont", "où"], answer: "où" },
            { id: "fr-uq-b1-4-5", level: "B1", prompt: "What does 'par contre' mean?", options: ["on the other hand", "therefore", "in addition", "according to"], answer: "on the other hand" },
        ]
    },
    {
        id: "fr-b1-u5",
        level: "B1",
        order: 5,
        title: "The Pluperfect & Advanced Narration",
        description: "Use the plus-que-parfait to describe actions that had occurred before other past events.",
        grammarIds: ["fr-g-b1-5"],
        vocabIds: ["fr-v-b1-014", "fr-v-b1-015", "fr-v-b1-016", "fr-v-b1-052", "fr-v-b1-053", "fr-v-b1-059", "fr-v-b1-060"],
        verbIds: ["fr-vb-b1-4"],
        listeningIds: ["fr-l-b1-2"],
        testQuestions: [
            { id: "fr-uq-b1-5-1", level: "B1", prompt: "How is the plus-que-parfait formed?", options: ["Present of avoir/être + past participle", "Imparfait of avoir/être + past participle", "Future of avoir/être + past participle", "Conditionnel + past participle"], answer: "Imparfait of avoir/être + past participle" },
            { id: "fr-uq-b1-5-2", level: "B1", prompt: "Complete (plus-que-parfait): 'Quand je suis arrivé, il ___ déjà mangé.'", options: ["est parti", "partait", "était parti", "partira"], answer: "était parti" },
            { id: "fr-uq-b1-5-3", level: "B1", prompt: "What does 'en revanche' mean?", options: ["in return", "on the other hand", "furthermore", "therefore"], answer: "on the other hand" },
            { id: "fr-uq-b1-5-4", level: "B1", prompt: "Complete: 'Nous ___ fini le travail quand il est venu.' (plus-que-parfait)", options: ["avons", "avions", "avions eu", "avons eu"], answer: "avions" },
            { id: "fr-uq-b1-5-5", level: "B1", prompt: "What does 'l'opinion' mean?", options: ["option", "opinion", "opposition", "opportunity"], answer: "opinion" },
        ]
    },
    {
        id: "fr-b1-u6",
        level: "B1",
        order: 6,
        title: "Si-Clauses — Real & Hypothetical Conditions",
        description: "Build conditional sentences using si-clauses. Distinguish between real conditions (si + présent → futur) and hypothetical ones (si + imparfait → conditionnel). This is the gateway to nuanced arguing and hypothesising.",
        grammarIds: ["fr-g-b1-6"],
        vocabIds: ["fr-v-b1-067", "fr-v-b1-068", "fr-v-b1-069", "fr-v-b1-070", "fr-v-b1-071"],
        verbIds: ["fr-vb-b1-5"],
        readingIds: ["fr-r-b1-2"],
        testQuestions: [
            { id: "fr-uq-b1-6-1", level: "B1", prompt: "Complete (real condition): 'Si tu ___ (étudier), tu réussiras.'", options: ["étudierais", "étudies", "étudieras", "étudiais"], answer: "étudies", hint: "Real condition: si + présent → futur. The si-clause takes présent." },
            { id: "fr-uq-b1-6-2", level: "B1", prompt: "Complete (hypothetical): 'Si j'___ (avoir) le temps, je voyagerais.'", options: ["ai", "aurai", "aurais", "avais"], answer: "avais", hint: "Hypothetical: si + imparfait → conditionnel. The si-clause takes imparfait." },
            { id: "fr-uq-b1-6-3", level: "B1", prompt: "Which tense is NEVER used directly after 'si' in a condition?", options: ["présent", "imparfait", "conditionnel", "passé composé"], answer: "conditionnel", hint: "The conditionnel never follows si — it goes in the main clause result." },
            { id: "fr-uq-b1-6-4", level: "B1", prompt: "Translate: 'If I were rich, I would buy a house.'", options: ["Si j'étais riche, j'achète une maison.", "Si j'étais riche, j'achèterais une maison.", "Si j'avais été riche, j'aurais acheté une maison.", "Si je suis riche, j'achèterais une maison."], answer: "Si j'étais riche, j'achèterais une maison.", hint: "Hypothetical present: si + imparfait → conditionnel présent." },
            { id: "fr-uq-b1-6-5", level: "B1", prompt: "What does 'à condition que' mean?", options: ["on the condition that", "in addition to", "in case", "so that"], answer: "on the condition that", hint: "À condition que + subjonctif — a formal alternative to si for introducing conditions." },
            { id: "fr-uq-b1-6-6", level: "B1", prompt: "Complete: 'S'il ___ (pleuvoir), nous resterons à la maison.'", options: ["pleurait", "pleuvrait", "pleut", "pleuvra"], answer: "pleut", hint: "Real condition with future result: si + présent → futur (or présent)." },
        ]
    },
    {
        id: "fr-b1-u7",
        level: "B1",
        order: 7,
        title: "Passive Voice & Double Object Pronouns",
        description: "Form passive sentences using être + past participle. Combine direct and indirect object pronouns in the correct order. Both structures appear constantly in written French and formal speech.",
        grammarIds: ["fr-g-b1-7", "fr-g-b1-8"],
        vocabIds: ["fr-v-b1-072", "fr-v-b1-073", "fr-v-b1-074", "fr-v-b1-075"],
        verbIds: ["fr-vb-b1-6"],
        testQuestions: [
            { id: "fr-uq-b1-7-1", level: "B1", prompt: "Transform to passive: 'Le chef prépare le plat.' → 'Le plat ___ ___ le chef.'", options: ["est préparé par", "a été prépare par", "est préparé de", "était préparé par"], answer: "est préparé par", hint: "Passive: être (conjugated) + past participle + par + agent." },
            { id: "fr-uq-b1-7-2", level: "B1", prompt: "What gender/number must the past participle agree with in the passive?", options: ["The subject of the active sentence", "The agent (par + noun)", "The subject of the passive sentence", "It never agrees"], answer: "The subject of the passive sentence", hint: "In passive, the past participle agrees with the grammatical subject." },
            { id: "fr-uq-b1-7-3", level: "B1", prompt: "Replace both objects: 'Je donne le livre à Marie.' → 'Je ___ ___.'", options: ["le lui donne", "lui le donne", "la lui donne", "lui la donne"], answer: "le lui donne", hint: "Order: direct (le/la/les) before indirect (lui/leur) — except me/te/nous/vous which come first." },
            { id: "fr-uq-b1-7-4", level: "B1", prompt: "Replace: 'Elle envoie les fleurs à ses amis.' → 'Elle ___ ___ envoie.'", options: ["leur les", "les leur", "les lui", "leur le"], answer: "les leur", hint: "les (direct, plural) + leur (indirect plural) → les leur." },
            { id: "fr-uq-b1-7-5", level: "B1", prompt: "What does 'être fondé(e) sur' mean?", options: ["to be founded by", "to be based on", "to be founded in", "to be focused on"], answer: "to be based on", hint: "Être fondé sur = to be based on — common in written/formal argumentation." },
            { id: "fr-uq-b1-7-6", level: "B1", prompt: "How do you say 'The decision was made by the committee'?", options: ["Le comité faisait la décision.", "La décision était prise par le comité.", "La décision a été prise par le comité.", "La décision prenait le comité."], answer: "La décision a été prise par le comité.", hint: "Passive in passé composé: a été + past participle + par." },
        ]
    },
    {
        id: "fr-b1-u8",
        level: "B1",
        order: 8,
        title: "Opinion, Debate & Arguing a Position",
        description: "Express, support, and challenge opinions in French. Use discourse markers to structure arguments, agree and disagree with nuance, and explain advantages and disadvantages — the core functional skills of B1.",
        grammarIds: ["fr-g-b1-9"],
        vocabIds: ["fr-v-b1-076", "fr-v-b1-077", "fr-v-b1-078", "fr-v-b1-079", "fr-v-b1-080"],
        verbIds: [],
        listeningIds: ["fr-l-b1-3"],
        testQuestions: [
            { id: "fr-uq-b1-8-1", level: "B1", prompt: "How do you express a nuanced disagreement without being blunt?", options: ["C'est faux.", "Je ne suis pas du tout d'accord.", "Oui, mais il faut aussi considérer que…", "Tu as tort."], answer: "Oui, mais il faut aussi considérer que…", hint: "B1 disagreement: acknowledge, then redirect. 'Oui, mais…' is softer than a direct contradiction." },
            { id: "fr-uq-b1-8-2", level: "B1", prompt: "What does 'd'une part… d'autre part' signal in an argument?", options: ["cause and effect", "on the one hand… on the other hand", "first… then", "however… therefore"], answer: "on the one hand… on the other hand", hint: "D'une part / d'autre part structures a two-sided argument — essential for B1 essays and debates." },
            { id: "fr-uq-b1-8-3", level: "B1", prompt: "Which phrase introduces a conclusion or summary?", options: ["d'une part", "en revanche", "en conclusion / en bref", "cependant"], answer: "en conclusion / en bref", hint: "En conclusion or en bref signals the wrap-up of an argument." },
            { id: "fr-uq-b1-8-4", level: "B1", prompt: "What does 'il est indéniable que' mean?", options: ["It is possible that", "It is undeniable that", "It is necessary that", "It is unlikely that"], answer: "It is undeniable that", hint: "Il est indéniable que + indicatif — strong assertion used in debate and essay writing." },
            { id: "fr-uq-b1-8-5", level: "B1", prompt: "What does 'prendre une décision' mean?", options: ["to take a position", "to make a decision", "to take an action", "to take a risk"], answer: "to make a decision", hint: "Prendre une décision — a key collocation. French uses prendre, not faire, for 'making a decision'." },
            { id: "fr-uq-b1-8-6", level: "B1", prompt: "How do you say 'I agree with your point, however…'?", options: ["Je suis d'accord avec ton point, cependant…", "J'accepte ton point, mais non…", "Je trouve que tu as raison, parce que…", "C'est vrai, donc…"], answer: "Je suis d'accord avec ton point, cependant…", hint: "Cependant (however) introduces a counterpoint while maintaining politeness." },
        ]
    },
    {
        id: "fr-b1-u9",
        level: "B1",
        order: 9,
        title: "Si-Clause Consolidation & Collocations",
        description: "Consolidate all conditional structures and build fluency with key French collocations — fixed verb-noun pairings that distinguish natural French from translated French.",
        grammarIds: ["fr-g-b1-6"],
        vocabIds: ["fr-v-b1-067", "fr-v-b1-068", "fr-v-b1-069", "fr-v-b1-070", "fr-v-b1-071", "fr-v-b1-072", "fr-v-b1-076", "fr-v-b1-077"],
        verbIds: ["fr-vb-b1-5"],
        readingIds: ["fr-r-b1-3"],
        testQuestions: [
            { id: "fr-uq-b1-9-1", level: "B1", prompt: "Complete: 'Si nous ___ (partir) tôt, nous aurions eu le train.'", options: ["partons", "partions", "étions partis", "étions parti"], answer: "étions partis", hint: "Past hypothetical (regret): si + plus-que-parfait → conditionnel passé." },
            { id: "fr-uq-b1-9-2", level: "B1", prompt: "Which collocation is correct?", options: ["faire une décision", "prendre une décision", "avoir une décision", "mettre une décision"], answer: "prendre une décision", hint: "Prendre une décision — prendre, not faire. Collocations must be memorised as fixed chunks." },
            { id: "fr-uq-b1-9-3", level: "B1", prompt: "What does 'rendre service' mean?", options: ["to return a service", "to do someone a favour", "to provide a service professionally", "to render useless"], answer: "to do someone a favour", hint: "Rendre service (à quelqu'un) = to do a favour. Rendre is used here, not donner or faire." },
            { id: "fr-uq-b1-9-4", level: "B1", prompt: "Identify the correct si-clause sequence: 'Si tu ___ (travailler) plus, tu ___ (réussir).'", options: ["travailles / réussiras", "travaillais / réussiras", "travailles / réussirais", "travailleras / réussiras"], answer: "travailles / réussiras", hint: "Real future condition: si + présent → futur simple." },
            { id: "fr-uq-b1-9-5", level: "B1", prompt: "What does 'avoir l'air' mean?", options: ["to have air", "to seem / to look", "to take the air", "to have a say"], answer: "to seem / to look", hint: "Avoir l'air + adjective = to seem/look. Elle a l'air fatiguée = she looks tired." },
            { id: "fr-uq-b1-9-6", level: "B1", prompt: "Complete: 'Si j'étais toi, je ___ (ne pas accepter) cette offre.'", options: ["n'accepte pas", "n'accepterai pas", "n'accepterais pas", "n'acceptais pas"], answer: "n'accepterais pas", hint: "Si + imparfait → conditionnel présent. Hypothetical advice." },
        ]
    },
    {
        id: "fr-b1-u10",
        level: "B1",
        order: 10,
        title: "Reported Speech — Le Discours Indirect",
        description: "Report what people said, asked, and ordered without direct quotation. Master tense back-shifts, pronoun and time-reference changes, and the key reporting verbs — essential for writing, storytelling, and all formal communication at B1.",
        grammarIds: ["fr-g-b1-10"],
        vocabIds: [
            "fr-v-b1-009", "fr-v-b1-006", "fr-v-b1-003",
            "fr-v-b1-067", "fr-v-b1-068", "fr-v-b1-069"
        ],
        verbIds: ["fr-vb-b1-7"],
        readingIds: ["fr-r-b1-4"],
        testQuestions: [
            {
                id: "fr-uq-b1-10-1", level: "B1",
                prompt: "Transform: 'Je suis occupé.' → Il a dit qu'il ___.",
                options: ["est occupé", "était occupé", "sera occupé", "serait occupé"],
                answer: "était occupé",
                hint: "Présent → imparfait in reported speech when the reporting verb is in the past."
            },
            {
                id: "fr-uq-b1-10-2", level: "B1",
                prompt: "Transform the yes/no question: 'Tu viens ?' → Elle m'a demandé ___ je venais.",
                options: ["que", "si", "où", "quand"],
                answer: "si",
                hint: "Yes/no questions in reported speech use si (never que or est-ce que)."
            },
            {
                id: "fr-uq-b1-10-3", level: "B1",
                prompt: "Transform the future: 'Nous partirons demain.' → Ils ont dit qu'ils partiraient ___.",
                options: ["demain", "hier", "le lendemain", "ce jour-là"],
                answer: "le lendemain",
                hint: "Futur → conditionnel. 'Demain' → 'le lendemain' (time reference shifts in past reporting)."
            },
            {
                id: "fr-uq-b1-10-4", level: "B1",
                prompt: "Transform the command: 'Ferme la porte !' → Il m'a dit ___ la porte.",
                options: ["que je ferme", "de fermer", "si je fermais", "fermer"],
                answer: "de fermer",
                hint: "Imperatives in reported speech → de + infinitif. 'Viens !' → de venir."
            },
            {
                id: "fr-uq-b1-10-5", level: "B1",
                prompt: "Transform the content question: 'Où travailles-tu ?' → Il m'a demandé où je ___.",
                options: ["travailles", "travaillais", "travaillerais", "ai travaillé"],
                answer: "travaillais",
                hint: "Content questions keep their question word but shift the verb tense. Présent → imparfait."
            },
            {
                id: "fr-uq-b1-10-6", level: "B1",
                prompt: "Which reporting verb introduces a command in reported speech?",
                options: ["dire que", "demander si", "dire de + infinitif", "affirmer que"],
                answer: "dire de + infinitif",
                hint: "Commands use dire de + infinitif (or ordonner de, demander de). Not que + subjonctif."
            },
        ]
    },
    {
        id: "fr-b1-u11",
        level: "B1",
        order: 11,
        title: "Le Gérondif & le Subjonctif après Conjonctions",
        description: "Master the gérondif (en + present participle) for expressing simultaneity, manner, and cause with the same subject. Then extend the subjunctive beyond verbs to a core set of conjunctions (bien que, pour que, avant que, à moins que) that always require it — a key B1 writing and argumentation skill.",
        grammarIds: ["fr-g-b1-11", "fr-g-b1-12"],
        vocabIds: ["fr-v-b1-081", "fr-v-b1-082", "fr-v-b1-083", "fr-v-b1-084", "fr-v-b1-085"],
        verbIds: ["fr-vb-b1-1"],
        listeningIds: ["fr-l-b1-4"],
        testQuestions: [
            {
                id: "fr-uq-b1-11-1", level: "B1",
                prompt: "Form the gérondif of 'finir'.",
                options: ["en finissant", "en finisant", "en finant", "en finissent"],
                answer: "en finissant",
                hint: "Gérondif: nous form → finissons → drop -ons → finiss- + ant → finissant → en finissant."
            },
            {
                id: "fr-uq-b1-11-2", level: "B1",
                prompt: "What does 'Il a appris l'espagnol en regardant des films' mean?",
                options: [
                    "He learned Spanish, and then he watched films",
                    "He learned Spanish by watching films (manner/means)",
                    "He was watching films when he learned Spanish",
                    "He stopped watching films to learn Spanish"
                ],
                answer: "He learned Spanish by watching films (manner/means)",
                hint: "En + present participle = by doing / while doing. Here it expresses the means."
            },
            {
                id: "fr-uq-b1-11-3", level: "B1",
                prompt: "Complete: 'Bien qu'il ___ (être) fatigué, il a continué à travailler.'",
                options: ["est", "sera", "soit", "serait"],
                answer: "soit",
                hint: "Bien que always takes the subjunctive. Être in subjunctive = soit."
            },
            {
                id: "fr-uq-b1-11-4", level: "B1",
                prompt: "Which conjunction takes the indicative (not subjunctive)?",
                options: ["bien que", "pour que", "parce que", "à moins que"],
                answer: "parce que",
                hint: "Parce que (because) always takes the indicative — it states a fact. Bien que, pour que, à moins que → all require subjunctive."
            },
            {
                id: "fr-uq-b1-11-5", level: "B1",
                prompt: "Complete: 'Je parle lentement pour que tu ___ (comprendre).'",
                options: ["comprends", "comprendrais", "comprenais", "comprennes"],
                answer: "comprennes",
                hint: "Pour que (so that) triggers the subjunctive. Comprendre → que tu comprennes."
            },
            {
                id: "fr-uq-b1-11-6", level: "B1",
                prompt: "What does 'tout en + gérondif' add to the meaning?",
                options: [
                    "It means 'immediately after doing'",
                    "It adds a concessive sense: 'even while / even though'",
                    "It makes the action negative",
                    "It expresses a future action"
                ],
                answer: "It adds a concessive sense: 'even while / even though'",
                hint: "Tout en + gérondif = even while / even though (concession). Tout en comprenant, je suis en désaccord = even though I understand, I disagree."
            },
        ]
    },
    {
        id: "fr-b1-u12",
        level: "B1",
        order: 12,
        title: "Le Futur Antérieur, Ne…que & l'Accord du Participe Passé",
        description: "Three precision tools of written French. The futur antérieur sequences future events and expresses probability about the past. Ne…que restricts meaning without being a true negation. And the accord du participe passé — the rule that trips up even advanced learners — governs when and why the past participle changes form.",
        grammarIds: ["fr-g-b1-13", "fr-g-b1-14", "fr-g-b1-15"],
        vocabIds: ["fr-v-b1-086", "fr-v-b1-087", "fr-v-b1-088", "fr-v-b1-014", "fr-v-b1-016"],
        verbIds: ["fr-vb-b1-6"],
        testQuestions: [
            {
                id: "fr-uq-b1-12-1", level: "B1",
                prompt: "Complete: 'Dès qu'elle ___ (finir) le rapport, elle te contactera.'",
                options: ["finira", "a fini", "aura fini", "finissait"],
                answer: "aura fini",
                hint: "Dès que + futur antérieur (she will have finished) → then the main action happens. Sequence of two future events."
            },
            {
                id: "fr-uq-b1-12-2", level: "B1",
                prompt: "Translate: 'He hasn't called back — he must have forgotten.'",
                options: [
                    "Il n'a pas rappelé — il a oublié.",
                    "Il n'a pas rappelé — il aurait oublié.",
                    "Il n'a pas rappelé — il aura oublié.",
                    "Il n'a pas rappelé — il oubliera."
                ],
                answer: "Il n'a pas rappelé — il aura oublié.",
                hint: "Futur antérieur as supposition about the past: il aura oublié = he must have forgotten."
            },
            {
                id: "fr-uq-b1-12-3", level: "B1",
                prompt: "Translate: 'I only speak French here.'",
                options: [
                    "Je parle seulement français ici.",
                    "Je ne parle que français ici.",
                    "Je ne parle pas français ici.",
                    "Je ne parle jamais français ici."
                ],
                answer: "Je ne parle que français ici.",
                hint: "Ne…que = only. Ne goes before the verb, que goes before the restricted element."
            },
            {
                id: "fr-uq-b1-12-4", level: "B1",
                prompt: "Does the past participle agree in 'J'ai vu les films'?",
                options: [
                    "Yes — 'J'ai vus les films' (masculine plural)",
                    "No — direct object follows the verb, so no agreement",
                    "Yes — always agrees in avoir verbs",
                    "Only if films is feminine"
                ],
                answer: "No — direct object follows the verb, so no agreement",
                hint: "Avoir verbs: agreement ONLY when COD precedes the verb. Here 'les films' follows → no agreement → vu."
            },
            {
                id: "fr-uq-b1-12-5", level: "B1",
                prompt: "Does the past participle agree in 'Les films que j'ai vus étaient excellents'?",
                options: [
                    "No — films comes before the verb",
                    "Yes — 'que' refers to 'les films' (masculine plural) and precedes the verb → vus",
                    "Yes — but only because films is plural",
                    "No — que is not a direct object"
                ],
                answer: "Yes — 'que' refers to 'les films' (masculine plural) and precedes the verb → vus",
                hint: "Que = les films (masculine plural) and it comes BEFORE the verb → agreement → vus."
            },
            {
                id: "fr-uq-b1-12-6", level: "B1",
                prompt: "Which is correct: 'Elle s'est lavée' or 'Elle s'est lavé les mains'?",
                options: [
                    "Both are wrong",
                    "'Elle s'est lavée' is wrong; 'elle s'est lavé les mains' is correct",
                    "Both are correct — se is always the COD in reflexive verbs",
                    "Both are correct — 'se' is COD in the first, 'les mains' is COD in the second"
                ],
                answer: "Both are correct — 'se' is COD in the first, 'les mains' is COD in the second",
                hint: "'S'est lavée': se = COD → agreement. 'S'est lavé les mains': les mains = COD (follows verb) → no agreement with se."
            },
        ]
    },
]
