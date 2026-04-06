// src/data/french/grammar/b2.ts
import { GrammarLesson } from "../../../types"

export const b2Grammar: GrammarLesson[] = [
    {
        id: "fr-g-b2-1",
        level: "B2",
        title: "Le Subjonctif Passé (Past Subjunctive)",
        explanation: {
            native: "The past subjunctive (subjonctif passé) is used when the action in the subordinate clause occurred before the action of the main clause, and when the main clause triggers the subjunctive (expressions of doubt, emotion, desire, necessity). Form it with avoir or être in the subjonctif présent + the past participle. With être verbs, agreement rules are the same as in the passé composé. Triggers: bien que (although), avant que (before), pour que (so that), il est dommage que, regretter que, douter que.",
            target: "Le subjonctif passé s'emploie lorsque l'action de la proposition subordonnée est antérieure à celle de la proposition principale, dans des contextes où le subjonctif est requis (doute, émotion, désir, nécessité). Il se forme avec avoir ou être au subjonctif présent + le participe passé. Avec les verbes construits avec être, les règles d'accord sont identiques à celles du passé composé. Déclencheurs courants : bien que, avant que, pour que, il est dommage que, regretter que, douter que."
        },
        examples: [
            { native: "Bien qu'il ait fini son travail, il reste au bureau.", translation: "Although he has finished his work, he stays at the office." },
            { native: "Je suis contente qu'elle soit venue à la réunion.", translation: "I am glad that she came to the meeting." },
            { native: "Il est dommage que vous n'ayez pas vu ce film.", translation: "It is a shame that you did not see that film." },
            { native: "Nous partirons avant qu'ils soient arrivés.", translation: "We will leave before they have arrived." },
        ]
    },
    {
        id: "fr-g-b2-2",
        level: "B2",
        title: "La Voix Passive (Passive Voice)",
        explanation: {
            native: "The passive voice shifts the focus from the subject performing an action to the object receiving it. In French, it is formed with être + past participle (which agrees in gender and number with the grammatical subject). The original agent (the one performing the action) is introduced by par (by). The passive can be used in any tense — the tense is carried by être: est construit (present), a été construit (passé composé), était construit (imparfait), sera construit (future). Note: verbs taking an indirect object (such as téléphoner à, demander à) cannot be made passive.",
            target: "La voix passive déplace l'attention du sujet agissant vers l'objet recevant l'action. En français, elle se forme avec être + participe passé (qui s'accorde en genre et en nombre avec le sujet grammatical). L'agent d'origine est introduit par par. La voix passive peut être employée à tous les temps — le temps est porté par être : est construit (présent), a été construit (passé composé), était construit (imparfait), sera construit (futur). Attention : les verbes qui se construisent avec un complément d'objet indirect (téléphoner à, demander à…) ne peuvent pas être mis à la voix passive."
        },
        examples: [
            { native: "Ce roman a été écrit par Victor Hugo.", translation: "This novel was written by Victor Hugo." },
            { native: "Les résultats seront publiés demain.", translation: "The results will be published tomorrow." },
            { native: "La ville est traversée par un grand fleuve.", translation: "The city is crossed by a large river." },
            { native: "Les accusés ont été jugés par un tribunal indépendant.", translation: "The defendants were tried by an independent tribunal." },
        ]
    },
    {
        id: "fr-g-b2-3",
        level: "B2",
        title: "Les Pronoms Relatifs Complexes (lequel, auquel, dont — advanced)",
        explanation: {
            native: "Beyond qui/que/dont/où, French uses compound relative pronouns when a preposition is required. Lequel (laquelle / lesquels / lesquelles) replaces a noun after a preposition (sur, dans, pour, avec, etc.) when referring to a thing. Auquel (à laquelle / auxquels / auxquelles) is the contracted form of à + lequel, used for verbs taking à. Dont can replace a noun preceded by de whether it is a direct or indirect object, or expresses possession (equivalent to whose/of which). Duquel (de laquelle / desquels / desquelles) is used instead of dont after certain compound prepositions ending in de (à cause de, à côté de, en face de, etc.).",
            target: "Au-delà de qui/que/dont/où, le français utilise des pronoms relatifs composés lorsqu'une préposition est nécessaire. Lequel (laquelle / lesquels / lesquelles) remplace un nom après une préposition (sur, dans, pour, avec, etc.) pour désigner une chose. Auquel (à laquelle / auxquels / auxquelles) est la forme contractée de à + lequel, utilisée pour les verbes se construisant avec à. Dont peut remplacer un nom précédé de de, qu'il soit complément direct, indirect ou qu'il exprime la possession. Duquel (de laquelle / desquels / desquelles) s'emploie à la place de dont après certaines locutions prépositionnelles terminées en de (à cause de, à côté de, en face de, etc.)."
        },
        examples: [
            { native: "C'est le projet sur lequel nous travaillons depuis un an.", translation: "It is the project on which we have been working for a year." },
            { native: "Le comité auquel elle appartient se réunit chaque mois.", translation: "The committee to which she belongs meets every month." },
            { native: "C'est l'auteur dont j'admire le style.", translation: "This is the author whose style I admire." },
            { native: "L'immeuble à côté duquel se trouve la mairie est très ancien.", translation: "The building next to which the town hall is located is very old." },
        ]
    },
    {
        id: "fr-g-b2-4",
        level: "B2",
        title: "Le Discours Indirect au Passé (Reported Speech)",
        explanation: {
            native: "Reported speech (discours indirect) conveys what someone said without quoting them directly. When the reporting verb is in the past (il a dit que, elle a demandé si, ils ont annoncé que), the tenses in the reported clause shift back (backshift): présent → imparfait; passé composé → plus-que-parfait; futur simple → conditionnel présent; conditionnel présent → conditionnel présent (no change). Yes/no questions become indirect with si (if). Information questions use the interrogative word directly (ce que, ce qui for open questions). Time expressions also shift: aujourd'hui → ce jour-là, demain → le lendemain, hier → la veille.",
            target: "Le discours indirect rapporte ce que quelqu'un a dit sans le citer directement. Lorsque le verbe introducteur est au passé (il a dit que, elle a demandé si, ils ont annoncé que), les temps de la proposition rapportée reculent (concordance des temps) : présent → imparfait ; passé composé → plus-que-parfait ; futur simple → conditionnel présent ; conditionnel présent → conditionnel présent (pas de changement). Les questions fermées (oui/non) deviennent indirectes avec si. Les questions ouvertes utilisent directement le mot interrogatif (ce que, ce qui pour les questions sans mot interrogatif). Les expressions de temps changent aussi : aujourd'hui → ce jour-là, demain → le lendemain, hier → la veille."
        },
        examples: [
            { native: "Il a dit qu'il viendrait le lendemain.", translation: "He said he would come the next day." },
            { native: "Elle a demandé si nous avions terminé le rapport.", translation: "She asked if we had finished the report." },
            { native: "Ils ont annoncé que les résultats avaient été publiés.", translation: "They announced that the results had been published." },
            { native: "Le professeur a demandé ce que les étudiants pensaient du sujet.", translation: "The professor asked what the students thought about the topic." },
        ]
    },
    {
        id: "fr-g-b2-5",
        level: "B2",
        title: "Le Conditionnel Passé (Past Conditional)",
        explanation: {
            native: "The past conditional expresses what would have happened if a past condition had been met. It is the main clause of a hypothetical si-sentence referring to the past (Si + plus-que-parfait... → conditionnel passé). Form: avoir or être in the conditionnel présent + past participle. Agreement rules follow the same pattern as the passé composé. It is also used to express a regret or a criticism about the past (j'aurais dû, tu aurais pu), and in journalism to report unconfirmed information (le président aurait signé l'accord).",
            target: "Le conditionnel passé exprime ce qui se serait produit si une condition passée avait été remplie. Il constitue la proposition principale d'une phrase hypothétique portant sur le passé (Si + plus-que-parfait... → conditionnel passé). Formation : avoir ou être au conditionnel présent + participe passé. Les règles d'accord sont identiques à celles du passé composé. Il s'emploie aussi pour exprimer un regret ou une critique sur le passé (j'aurais dû, tu aurais pu), ainsi qu'en journalisme pour rapporter une information non confirmée (le président aurait signé l'accord)."
        },
        examples: [
            { native: "Si j'avais su, je n'aurais pas accepté ce poste.", translation: "If I had known, I would not have accepted this position." },
            { native: "Nous aurions pu prévenir la crise si nous avions agi plus tôt.", translation: "We could have prevented the crisis if we had acted earlier." },
            { native: "J'aurais voulu voyager davantage quand j'étais jeune.", translation: "I would have liked to travel more when I was young." },
            { native: "Elle serait partie plus tôt si elle avait eu le choix.", translation: "She would have left earlier if she had had the choice." },
        ]
    },
    {
        id: "fr-g-b2-6",
        level: "B2",
        title: "Conditionnels Mixtes & Usage Journalistique",
        explanation: {
            native: "The mixed conditional combines a past si-clause with a present result: Si + plus-que-parfait → conditionnel présent. This expresses 'if X had happened in the past, Y would be different now'. Example: Si tu avais étudié la médecine, tu serais médecin aujourd'hui. The past conditional (conditionnel passé) also has a journalistic use: stating unconfirmed information as alleged — Le ministre aurait démissionné = The minister is reported to have resigned. Avoir beau + infinitif means 'to do something in vain despite': Il a beau travailler dur, il n'avance pas (No matter how hard he works, he makes no progress).",
            target: "Le conditionnel mixte combine une proposition de condition au passé avec un résultat au présent : Si + plus-que-parfait → conditionnel présent. Il exprime « si X s'était passé dans le passé, Y serait différent maintenant ». Exemple : Si tu avais étudié la médecine, tu serais médecin aujourd'hui. Le conditionnel passé a aussi un usage journalistique : il exprime une information non confirmée présentée comme alléguée — Le ministre aurait démissionné. Avoir beau + infinitif signifie « faire quelque chose en vain malgré les efforts » : Il a beau travailler dur, il n'avance pas."
        },
        examples: [
            { native: "Si elle avait pris ce poste, elle serait directrice maintenant.", translation: "If she had taken that job, she would be director now. (mixed conditional)" },
            { native: "Si nous avions investi plus tôt, nous aurions de meilleures ressources aujourd'hui.", translation: "If we had invested earlier, we would have better resources today." },
            { native: "Le président aurait signé l'accord en secret.", translation: "The president is reported to have secretly signed the agreement. (journalistic conditional)" },
            { native: "Il a beau s'entraîner, il ne progresse plus.", translation: "No matter how much he trains, he's no longer improving." },
        ]
    },
    {
        id: "fr-g-b2-7",
        level: "B2",
        title: "Connecteurs de Discours Avancés",
        explanation: {
            native: "B2 discourse requires connectors that go beyond simple contrast and addition. Concession: malgré + noun, quoique/bien que + subjonctif, avoir beau + infinitif. Consequence: en conséquence, par conséquent, c'est pourquoi, ainsi. Condition/premise: étant donné que, dans la mesure où, vu que, eu égard à. Reformulation: c'est-à-dire, autrement dit, en d'autres termes. Topic shift: quant à, en ce qui concerne, pour ce qui est de. Logical pivot: or (introduces a logical next step in formal syllogism — no accent, never means 'gold'). Particular case: en l'occurrence, notamment.",
            target: "Le discours B2 requiert des connecteurs qui vont au-delà du simple contraste et de l'addition. Concession : malgré + nom, quoique/bien que + subjonctif, avoir beau + infinitif. Conséquence : en conséquence, par conséquent, c'est pourquoi, ainsi. Condition/prémisse : étant donné que, dans la mesure où, vu que, eu égard à. Reformulation : c'est-à-dire, autrement dit, en d'autres termes. Changement de thème : quant à, en ce qui concerne, pour ce qui est de. Pivot logique : or (introduit une étape logique dans un syllogisme formel — sans accent, ne signifie jamais « or »). Cas particulier : en l'occurrence, notamment."
        },
        examples: [
            { native: "Étant donné que les ressources sont limitées, nous devons établir des priorités.", translation: "Given that resources are limited, we must set priorities." },
            { native: "Il a beau être talentueux, il manque de rigueur.", translation: "No matter how talented he is, he lacks rigour. (concession)" },
            { native: "Quant à la question budgétaire, elle reste entière.", translation: "As for the budget question, it remains unresolved. (topic shift)" },
            { native: "Tous les hommes sont mortels. Or, Socrate est un homme. Donc, Socrate est mortel.", translation: "All men are mortal. Now, Socrates is a man. Therefore, Socrates is mortal. (logical pivot)" },
            { native: "En l'occurrence, c'est la deuxième option qui s'avère la plus viable.", translation: "In this particular case, it is the second option that proves most viable." },
        ]
    },
    {
        id: "fr-g-b2-8",
        level: "B2",
        title: "Registres & Expressions Idiomatiques",
        explanation: {
            native: "French has distinct registers that go well beyond the tu/vous distinction. Formal written: longer sentences, more subjunctive, passive constructions, formal connectors (car, en raison de, lequel), nominalisations. Neutral spoken: everyday vocabulary, active voice, simpler sentence structure. Colloquial/familiar: contracted negation (j'sais pas), slang (boulot, fric, bouquin), argot. At B2, learners navigate all three deliberately. Key idioms: coûter les yeux de la tête (cost a fortune), avoir le vent en poupe (be doing well), mettre les pieds dans le plat (say something blunt), casser les pieds à quelqu'un (annoy someone intensely), avoir le cafard (feel down/blue). A key B2 formal skill: nominalisation — replacing parce qu'il était fatigué with en raison de sa fatigue to compress clauses in writing.",
            target: "Le français possède des registres distincts qui vont bien au-delà de la distinction tu/vous. Registre formel écrit : phrases plus longues, plus de subjonctif, constructions passives, connecteurs formels (car, en raison de, lequel), nominalisations. Registre parlé neutre : vocabulaire courant, voix active, structure phrastique plus simple. Registre familier/argotique : négation contractée (j'sais pas), argot (boulot, fric, bouquin). À B2, l'apprenant navigue délibérément entre ces trois registres. Idiomes clés : coûter les yeux de la tête, avoir le vent en poupe, mettre les pieds dans le plat, casser les pieds à quelqu'un, avoir le cafard. Compétence formelle clé : la nominalisation — transformer des propositions en groupes nominaux pour comprimer l'écrit."
        },
        examples: [
            { native: "Ce projet coûte les yeux de la tête. → Ce projet représente un investissement considérable.", translation: "This project costs a fortune. → (formal equivalent)" },
            { native: "Notre entreprise a le vent en poupe depuis la fusion.", translation: "Our company is doing very well since the merger." },
            { native: "En raison de sa démission soudaine, le comité s'est réuni en urgence.", translation: "Due to his sudden resignation, the committee met urgently. (nominalisation of 'parce qu'il a démissionné soudainement')" },
            { native: "Il m'a cassé les pieds avec ses plaintes incessantes.", translation: "He drove me crazy with his incessant complaints." },
        ]
    },
    {
        id: "fr-g-b2-9",
        level: "B2",
        title: "L'Imparfait du Subjonctif — Registre Littéraire et Formel",
        explanation: {
            native: "The imparfait du subjonctif is a literary/formal tense now rarely used in spoken French. It appears in literature, formal writing, and historical texts. At B2, recognition is the primary goal. Formation: take the passé simple (ils/elles form), drop the -rent ending, add: -sse, -sses, -^t (circumflex on the vowel before t), -ssions, -ssiez, -ssent. The hat (^) appears only on the il/elle/on form. Key forms: être → fût, avoir → eût, faire → fît, aller → allât, vouloir → voulût. Used in subordinate clauses after triggers that require the subjunctive in the past, in formal writing where the reporting verb is in a past tense. Compare to modern spoken alternative: use the subjonctif présent instead.",
            target: "L'imparfait du subjonctif est un temps littéraire et soutenu, rarement utilisé à l'oral de nos jours. On le trouve dans la littérature, les textes formels et les écrits historiques. Au niveau B2, la reconnaissance est l'objectif principal. Formation : on prend la forme ils/elles du passé simple, on supprime -rent, et on ajoute : -sse, -sses, -^t (accent circonflexe sur la voyelle avant t), -ssions, -ssiez, -ssent. Le chapeau (^) n'apparaît qu'à la 3e personne du singulier. Formes clés : être → fût, avoir → eût, faire → fît, aller → allât, vouloir → voulût. Utilisé dans les propositions subordonnées après des déclencheurs qui exigent le subjonctif au passé, dans les écrits formels où le verbe introducteur est au passé."
        },
        examples: [
            { native: "Il fallait qu'il partît avant l'aube.", translation: "It was necessary that he leave before dawn. (literary: imparfait du subj. after falloir in past)" },
            { native: "Elle souhaitait que la cérémonie se déroulât dans le calme.", translation: "She wished that the ceremony would proceed calmly." },
            { native: "Bien qu'il eût travaillé dur, il n'obtint pas le poste.", translation: "Although he had worked hard, he did not get the position." },
            { native: "On craignait que la situation ne s'empirât.", translation: "They feared the situation might worsen." },
        ]
    },
    {
        id: "fr-g-b2-10",
        level: "B2",
        title: "La Nominalisation — Écriture Formelle et Académique",
        explanation: {
            native: "Nominalisation — the conversion of verbs and adjectives into noun forms — is a defining feature of formal, academic, and journalistic French. Rather than \"Le gouvernement a décidé de...\", formal writing prefers \"La décision du gouvernement de...\". Key patterns: verb → noun (décider → la décision, réformer → la réforme, développer → le développement, permettre → la permission); adjective → noun (libre → la liberté, juste → la justice). The structure \"le fait que + subjonctif\" is a key nominalisation trigger in formal argumentation. \"Il convient de + infinitive\" and \"force est de constater que\" are key impersonal nominal structures. Nominalisation makes writing more formal, concise, and impersonal.",
            target: "La nominalisation — transformation de verbes et d'adjectifs en formes nominales — est une caractéristique majeure du français formel, académique et journalistique. Au lieu de «Le gouvernement a décidé de…», l'écrit formel préfère «La décision du gouvernement de…». Schémas clés : verbe → nom (décider → la décision, réformer → la réforme, développer → le développement) ; adjectif → nom (libre → la liberté, juste → la justice). La structure «le fait que + subjonctif» est un déclencheur de nominalisation clé en argumentation formelle. «Il convient de + infinitif» et «force est de constater que» sont des structures impersonnelles nominalisées importantes."
        },
        examples: [
            { native: "La réduction des émissions de CO₂ est indispensable.", translation: "The reduction of CO₂ emissions is essential. (Nominalisation of: réduire les émissions)" },
            { native: "Le fait que certains pays refusent de coopérer constitue un obstacle majeur.", translation: "The fact that certain countries refuse to cooperate is a major obstacle. (le fait que + subjonctif)" },
            { native: "Il convient de souligner les limites de cette approche.", translation: "It is appropriate to highlight the limitations of this approach. (formal: il convient de)" },
            { native: "La mise en place de nouvelles mesures prendra du temps.", translation: "The implementation of new measures will take time. (nominalisation: mettre en place → la mise en place)" },
            { native: "Force est de constater que les résultats sont décevants.", translation: "One must acknowledge that the results are disappointing. (fixed idiom: force est de constater)" },
        ]
    },
    {
        id: "fr-g-b2-11",
        level: "B2",
        title: "L'Inversion Stylistique — Questions et Registre Écrit",
        explanation: {
            native: "Subject-verb inversion in French has multiple formal uses beyond basic question formation (A2). Complex inversion: in formal/written questions, the noun subject is placed after the verb with a redundant pronoun: \"La France a-t-elle réellement changé?\" (\"La France\" + a + -t-elle). This structure is obligatory in formal written questions. Inversion after adverbials: certain discourse adverbs placed at the start of a clause trigger inversion: ainsi dit-il (so he said), peut-être est-il (perhaps he is), aussi doit-on (thus one must). Key adverbs that trigger inversion: ainsi, peut-être, à peine, encore, sans doute, aussi (in the sense of 'therefore'). Inverted quotation: \"Je viendrai demain, dit-il\" (he said).",
            target: "L'inversion du sujet en français a plusieurs usages formels au-delà de la formation interrogative de base (A2). L'inversion complexe : dans les questions formelles et écrites, le sujet nominal est placé après le verbe avec un pronom de reprise : «La France a-t-elle réellement changé ?». Cette structure est obligatoire dans les questions écrites formelles. L'inversion après un adverbe : certains adverbes de discours en tête de phrase déclenchent l'inversion : ainsi dit-il, peut-être est-il vrai que, aussi doit-on. Adverbes déclencheurs clés : ainsi, peut-être, à peine, encore, sans doute, aussi (au sens de «donc»). L'inversion dans les incises de dialogue : «Je viendrai demain, dit-il.»"
        },
        examples: [
            { native: "La société a-t-elle vraiment progressé ces dernières années ?", translation: "Has society really progressed in recent years? (complex inversion: noun subject + verb + pronoun)" },
            { native: "Peut-être faudra-t-il reconsidérer cette politique.", translation: "Perhaps this policy will need to be reconsidered. (peut-être + inversion)" },
            { native: "Ainsi parla-t-il devant toute l'assemblée.", translation: "Thus he spoke before the entire assembly. (ainsi + inversion — literary/formal)" },
            { native: "À peine avait-il commencé que les problèmes surgirent.", translation: "He had barely started when problems arose. (à peine + inversion — literary)" },
        ]
    },
    {
        id: "fr-g-b2-12",
        level: "B2",
        title: "Subjonctif Avancé — Propositions Relatives et Structures Impersonnelles",
        explanation: {
            native: "At B2, the subjunctive extends beyond basic trigger phrases to: (1) Relative clauses with an indefinite, hypothetical or superlative antecedent: \"Je cherche quelqu'un qui puisse m'aider\" (anyone who can — possibility); \"C'est la seule solution qui soit viable\" (superlative/exclusive trigger). (2) Independent/optative subjunctive expressing a wish or prayer (formal register): \"Que la paix règne!\" \"Vive la République!\" (3) After certain conjunctions not yet covered: de peur que (for fear that), de crainte que, à supposer que (supposing that), pourvu que (provided that). (4) Subjunctive vs indicative contrast after verbs of thought in negative/interrogative: \"Je pense qu'il est là\" (positive → indicative) vs \"Je ne pense pas qu'il soit là\" (negative → subjunctive).",
            target: "Au niveau B2, le subjonctif s'étend au-delà des déclencheurs de base : (1) Propositions relatives avec antécédent indéfini, hypothétique ou superlatif : «Je cherche quelqu'un qui puisse m'aider» ; «C'est la seule solution qui soit viable». (2) Subjonctif optatif indépendant exprimant un souhait ou une prière (registre soutenu) : «Que la paix règne !» «Vive la République !». (3) Après certaines conjonctions encore non couvertes : de peur que, de crainte que, à supposer que, pourvu que. (4) Contraste subjonctif/indicatif avec les verbes de pensée selon qu'ils sont affirmatifs, négatifs ou interrogatifs : «Je pense qu'il est là» (affirmatif → indicatif) vs «Je ne pense pas qu'il soit là» (négatif → subjonctif)."
        },
        examples: [
            { native: "Je cherche un appartement qui soit proche du métro.", translation: "I'm looking for a flat that is close to the metro. (indefinite antecedent → subjunctive)" },
            { native: "C'est la seule personne qui comprenne vraiment ce problème.", translation: "She is the only person who truly understands this problem. (superlative + seul → subjunctive)" },
            { native: "Pourvu qu'il arrive à temps !", translation: "Provided he arrives on time! / Let's hope he arrives on time! (pourvu que = provided/hopefully)" },
            { native: "Je ne crois pas que cette solution soit suffisante.", translation: "I don't believe that this solution is sufficient. (ne pas croire que → subjunctive)" },
        ]
    },
    {
        id: "fr-g-b2-13",
        level: "B2",
        title: "Le Conditionnel — Usages Journalistiques et Rhétoriques",
        explanation: {
            native: "Beyond the conditional in si-clauses, French uses the conditional in two important B2 contexts. (1) The journalistic conditional (conditionnel journalistique): used to report unverified information or to distance the writer from a claim: \"Le premier ministre aurait décidé de démissionner\" (it is reported that the prime minister has decided to resign — the writer is not confirming this). This is an obligatory convention in quality journalism. (2) The rhetorical/modal conditional: expressing polite distancing, hypothetical possibility, or nuanced statement not tied to a si-clause: \"Ce serait une erreur de tout arrêter\" (it would be a mistake); \"Il conviendrait d'examiner...\" (it would be appropriate to examine). These uses have no explicit condition — the conditional itself creates the softening effect.",
            target: "Au-delà du conditionnel dans les phrases hypothétiques, le français utilise le conditionnel dans deux contextes B2 importants. (1) Le conditionnel journalistique : il est employé pour rapporter des informations non vérifiées ou pour se distancier d'une affirmation : «Le premier ministre aurait décidé de démissionner.» C'est une convention obligatoire dans la presse de qualité. (2) Le conditionnel rhétorique et modal : il exprime une prise de distance polie, une possibilité hypothétique ou un énoncé nuancé sans lien avec une proposition en si : «Ce serait une erreur de tout arrêter» ; «Il conviendrait d'examiner cette question plus en profondeur.» Ces emplois n'ont pas de condition explicite — c'est le conditionnel lui-même qui crée l'effet d'atténuation."
        },
        examples: [
            { native: "Selon nos sources, le gouvernement aurait préparé un plan d'urgence.", translation: "According to our sources, the government reportedly prepared an emergency plan. (journalistic conditional)" },
            { native: "Des milliers de personnes auraient manifesté dans la capitale.", translation: "Thousands of people are said to have demonstrated in the capital. (journalistic: unverified figure)" },
            { native: "Il conviendrait de mener des investigations plus approfondies.", translation: "It would be appropriate to conduct more in-depth investigations. (modal conditional in formal writing)" },
            { native: "Ce serait méconnaître la complexité du problème que d'accepter cette conclusion.", translation: "To accept this conclusion would be to misunderstand the complexity of the problem. (rhetorical conditional)" },
        ]
    },
]
