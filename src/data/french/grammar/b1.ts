import { GrammarLesson } from "../../../types"

export const b1Grammar: GrammarLesson[] = [
    {
        id: "fr-g-b1-1",
        level: "B1",
        title: "Le Subjonctif (Subjunctive)",
        explanation: {
            native: "The subjunctive is used in subordinate clauses (after 'que') following expressions of doubt, emotion, desire, necessity, and uncertainty. Form it with the ils/elles present tense stem + endings: -e, -es, -e, -ions, -iez, -ent. Common triggers: il faut que, vouloir que, douter que, être content que.",
            target: "Le subjonctif s'emploie dans les propositions subordonnées (après « que ») qui suivent des expressions de doute, d'émotion, de désir, de nécessité ou d'incertitude. On le forme à partir du radical de la troisième personne du pluriel (ils/elles) au présent, auquel on ajoute les terminaisons : -e, -es, -e, -ions, -iez, -ent. Déclencheurs courants : il faut que, vouloir que, douter que, être content que."
        },
        examples: [
            { native: "Il faut que tu viennes.", translation: "You must come." },
            { native: "Je veux qu'il soit heureux.", translation: "I want him to be happy." },
            { native: "Elle est contente que nous soyons là.", translation: "She is glad that we are here." },
            { native: "Il est important que vous finissiez.", translation: "It is important that you finish." },
        ]
    },
    {
        id: "fr-g-b1-2",
        level: "B1",
        title: "Le Conditionnel Présent",
        explanation: {
            native: "The present conditional expresses what would happen under a condition. Form it with the future stem + imperfect endings (-ais, -ais, -ait, -ions, -iez, -aient). Irregular stems mirror the future: aller→ir-, avoir→aur-, être→ser-, faire→fer-, vouloir→voudr-.",
            target: "Le conditionnel présent exprime ce qui se passerait sous une certaine condition. On le forme avec le radical du futur simple + les terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient). Les radicaux irréguliers sont les mêmes qu'au futur : aller→ir-, avoir→aur-, être→ser-, faire→fer-, vouloir→voudr-."
        },
        examples: [
            { native: "Je voudrais un café, s'il vous plaît.", translation: "I would like a coffee, please." },
            { native: "Avec plus d'argent, je voyagerais partout.", translation: "With more money, I would travel everywhere." },
            { native: "Tu devrais étudier davantage.", translation: "You should study more." },
            { native: "Elle a dit qu'elle viendrait demain.", translation: "She said she would come tomorrow." },
        ]
    },
    {
        id: "fr-g-b1-3",
        level: "B1",
        title: "Imparfait vs. Passé Composé",
        explanation: {
            native: "The imparfait and passé composé are often used together in the same sentence. The imparfait provides the background or ongoing state; the passé composé describes the specific event that occurred. Think of the imparfait as the scene-setting and the passé composé as the action that happened.",
            target: "L'imparfait et le passé composé s'utilisent souvent ensemble dans la même phrase. L'imparfait donne le contexte ou décrit un état continu ; le passé composé exprime l'événement précis qui s'est produit. On peut imaginer l'imparfait comme le décor de la scène, et le passé composé comme l'action qui a eu lieu."
        },
        examples: [
            { native: "Je lisais quand le téléphone a sonné.", translation: "I was reading when the phone rang." },
            { native: "Il faisait beau quand nous sommes sortis.", translation: "The weather was nice when we went out." },
            { native: "Elle habitait à Paris mais elle a déménagé.", translation: "She used to live in Paris but she moved." },
            { native: "Quand j'étais enfant, je jouais au foot.", translation: "When I was a child, I used to play football." },
        ]
    },
    {
        id: "fr-g-b1-4",
        level: "B1",
        title: "Les Pronoms Relatifs: qui, que, dont, où",
        explanation: {
            native: "Relative pronouns link two clauses. Qui replaces the subject of the relative clause (who/that). Que replaces the object (whom/that — elides to qu' before vowel). Dont replaces a noun preceded by de (of which/whose). Où replaces a location or point in time (where/when).",
            target: "Les pronoms relatifs relient deux propositions. Qui remplace le sujet de la proposition relative (qui/que). Que remplace le complément d'objet (que/qu' devant une voyelle). Dont remplace un nom précédé de de (dont/duquel). Où remplace un lieu ou un moment dans le temps (où/quand)."
        },
        examples: [
            { native: "C'est l'homme qui parle vite.", translation: "He's the man who speaks fast." },
            { native: "Le livre que je lis est passionnant.", translation: "The book that I'm reading is fascinating." },
            { native: "C'est le pays dont je rêve.", translation: "It's the country I dream of." },
            { native: "La ville où je suis né est belle.", translation: "The city where I was born is beautiful." },
        ]
    },
    {
        id: "fr-g-b1-5",
        level: "B1",
        title: "Le Plus-que-parfait (Pluperfect)",
        explanation: {
            native: "The pluperfect expresses an action that had already occurred before another past action. Form it with avoir/être in the imparfait + past participle. Agreement rules for être are the same as in the passé composé.",
            target: "Le plus-que-parfait exprime une action qui s'était déjà produite avant une autre action passée. On le forme avec avoir ou être à l'imparfait + le participe passé. Les règles d'accord avec être sont les mêmes qu'au passé composé."
        },
        examples: [
            { native: "Quand je suis arrivé, il avait déjà mangé.", translation: "When I arrived, he had already eaten." },
            { native: "Elle était sortie avant la pluie.", translation: "She had gone out before the rain." },
            { native: "Nous avions fini le travail quand il est venu.", translation: "We had finished the work when he came." },
            { native: "Tu n'avais jamais voyagé avant cela.", translation: "You had never traveled before that." },
        ]
    },
    {
        id: "fr-g-b1-6",
        level: "B1",
        title: "Si-Clauses: Real & Hypothetical Conditions",
        explanation: {
            native: "French has two main conditional sentence types. Real/open conditions (something that might actually happen): si + présent → futur simple in the main clause. Hypothetical conditions (unlikely or contrary to reality): si + imparfait → conditionnel présent in the main clause. A third type expresses past regret: si + plus-que-parfait → conditionnel passé. Critical rule: the conditionnel and the futur simple NEVER appear in the si-clause itself — they go in the result clause only.",
            target: "Le français a deux types principaux de phrases conditionnelles. Condition réelle (quelque chose qui pourrait vraiment se produire) : si + présent → futur simple dans la proposition principale. Condition hypothétique (peu probable ou contraire à la réalité) : si + imparfait → conditionnel présent. Un troisième type exprime le regret passé : si + plus-que-parfait → conditionnel passé. Règle essentielle : le conditionnel et le futur simple ne se trouvent JAMAIS dans la proposition introduite par si — ils vont uniquement dans la proposition principale."
        },
        examples: [
            { native: "Si tu étudies, tu réussiras.", translation: "If you study, you will pass. (real condition)" },
            { native: "Si j'avais de l'argent, je voyagerais.", translation: "If I had money, I would travel. (hypothetical)" },
            { native: "Si elle était là, je serais content.", translation: "If she were here, I would be happy. (hypothetical)" },
            { native: "Si nous étions partis plus tôt, nous aurions pris le train.", translation: "If we had left earlier, we would have caught the train. (past regret)" },
            { native: "S'il pleut demain, on restera à la maison.", translation: "If it rains tomorrow, we'll stay home. (real, near future)" },
        ]
    },
    {
        id: "fr-g-b1-7",
        level: "B1",
        title: "La Voix Passive (Passive Voice)",
        explanation: {
            native: "The passive voice shifts focus from who performs an action to what receives it. Form: subject + être (conjugated in any tense) + past participle + par + agent (optional). The past participle agrees in gender and number with the subject. The agent (the doer) is introduced by par, occasionally de for verbs of emotion or state. To avoid the passive, French often uses on (on dit que… = it is said that…) or a pronominal construction (ça se fait = it's done).",
            target: "La voix passive déplace l'attention de celui qui fait l'action à ce qui la reçoit. Formation : sujet + être (conjugué à n'importe quel temps) + participe passé + par + agent (facultatif). Le participe passé s'accorde en genre et en nombre avec le sujet. L'agent (celui qui fait l'action) est introduit par par, parfois de pour les verbes d'état ou d'émotion. Pour éviter le passif, le français utilise souvent on (on dit que…) ou une construction pronominale (ça se fait)."
        },
        examples: [
            { native: "Le roman a été écrit par Flaubert.", translation: "The novel was written by Flaubert." },
            { native: "Les résultats seront annoncés demain.", translation: "The results will be announced tomorrow. (agent omitted)" },
            { native: "Cette loi a été adoptée en 2010.", translation: "This law was adopted in 2010." },
            { native: "On dit que c'est difficile.", translation: "It is said that it's difficult. (on avoids the passive)" },
            { native: "La ville est connue de tous les touristes.", translation: "The city is known by all tourists. (de with verb of knowledge/state)" },
        ]
    },
    {
        id: "fr-g-b1-8",
        level: "B1",
        title: "Double Object Pronouns",
        explanation: {
            native: "When a verb has both a direct object (DO) and an indirect object (IO) pronoun, they follow a fixed order before the verb. Order 1 — me, te, nous, vous come BEFORE le, la, les: Je te le donne. Order 2 — le, la, les come BEFORE lui, leur: Je le lui donne. In the imperative (affirmative only), pronouns follow the verb with hyphens and the order reverses: Donne-le-lui! In negative imperatives, the pre-verb order applies: Ne le lui donne pas.",
            target: "Quand un verbe a à la fois un pronom COD et un pronom COI, ils suivent un ordre fixe avant le verbe. Ordre 1 : me, te, nous, vous se placent AVANT le, la, les : Je te le donne. Ordre 2 : le, la, les se placent AVANT lui, leur : Je le lui donne. À l'impératif affirmatif, les pronoms suivent le verbe avec des traits d'union et l'ordre s'inverse : Donne-le-lui ! À l'impératif négatif, l'ordre pré-verbal s'applique : Ne le lui donne pas."
        },
        examples: [
            { native: "Je te le donne.", translation: "I give it to you. (te before le)" },
            { native: "Il le lui a expliqué.", translation: "He explained it to him/her. (le before lui)" },
            { native: "Elle les leur envoie.", translation: "She sends them to them. (les before leur)" },
            { native: "Donne-le-moi !", translation: "Give it to me! (affirmative imperative — reversed order)" },
            { native: "Ne me le dis pas.", translation: "Don't tell me it. (negative imperative — normal pre-verb order)" },
        ]
    },
    {
        id: "fr-g-b1-9",
        level: "B1",
        title: "Discourse Markers & Arguing a Position",
        explanation: {
            native: "B1 requires the ability to structure arguments using discourse markers — words and phrases that signal the logical relationship between ideas. Key categories: Adding (de plus, en outre, par ailleurs). Contrasting (cependant, en revanche, par contre, néanmoins). Conceding (certes, il est vrai que, bien que + subjonctif). Concluding (en conclusion, en bref, ainsi, donc). Exemplifying (par exemple, notamment, c'est-à-dire). Key collocations: prendre une décision (make a decision), rendre service (do a favour), avoir l'air (seem/look), faire face à (face up to), tenir compte de (take into account).",
            target: "Le niveau B1 exige la capacité de structurer des arguments à l'aide de marqueurs du discours — des mots et expressions qui signalent la relation logique entre les idées. Catégories clés : Ajout (de plus, en outre, par ailleurs). Contraste (cependant, en revanche, par contre, néanmoins). Concession (certes, il est vrai que, bien que + subjonctif). Conclusion (en conclusion, en bref, ainsi, donc). Exemplification (par exemple, notamment, c'est-à-dire). Collocations clés : prendre une décision, rendre service, avoir l'air, faire face à, tenir compte de."
        },
        examples: [
            { native: "D'une part, c'est moins cher ; d'autre part, la qualité est moindre.", translation: "On the one hand it's cheaper; on the other hand, the quality is lower." },
            { native: "Il est indéniable que le réchauffement climatique est un problème majeur.", translation: "It is undeniable that global warming is a major problem." },
            { native: "Certes, il y a des avantages, mais les inconvénients sont réels.", translation: "Admittedly there are advantages, but the drawbacks are real." },
            { native: "Il faut tenir compte de tous les facteurs avant de prendre une décision.", translation: "We must take all factors into account before making a decision." },
            { native: "En conclusion, je pense que cette solution est la meilleure.", translation: "In conclusion, I think this solution is the best." },
        ]
    },
    {
        id: "fr-g-b1-10",
        level: "B1",
        title: "Le Discours Indirect (Reported Speech)",
        explanation: {
            native: "Reported speech (discours indirect) conveys what someone said without quoting them directly. When the reporting verb (dire, demander, expliquer, affirmer) is in the past, tenses shift back: présent → imparfait; passé composé → plus-que-parfait; futur → conditionnel présent. Pronoun references and time/place expressions also shift: je → il/elle; aujourd'hui → ce jour-là; demain → le lendemain; ici → là. Yes/no questions use si; content questions keep their question word (où, quand, pourquoi). Commands shift to de + infinitive: 'Viens !' → Il m'a dit de venir. If the reporting verb is in the present, no tense shift occurs.",
            target: "Le discours indirect rapporte ce que quelqu'un a dit sans le citer directement. Quand le verbe introducteur (dire, demander, expliquer, affirmer) est au passé, les temps reculent : présent → imparfait ; passé composé → plus-que-parfait ; futur → conditionnel présent. Les pronoms et les expressions de temps/lieu changent aussi : je → il/elle ; aujourd'hui → ce jour-là ; demain → le lendemain ; ici → là. Les questions oui/non utilisent si ; les questions ouvertes gardent leur mot interrogatif (où, quand, pourquoi). Les impératifs deviennent de + infinitif : « Viens ! » → Il m'a dit de venir. Si le verbe introducteur est au présent, il n'y a pas de changement de temps."
        },
        examples: [
            { native: "'Je suis fatigué.' → Il a dit qu'il était fatigué.", translation: "'I'm tired.' → He said he was tired. (présent → imparfait)" },
            { native: "'Est-ce que tu viens ?' → Elle m'a demandé si je venais.", translation: "'Are you coming?' → She asked me if I was coming. (yes/no → si)" },
            { native: "'Je viendrai demain.' → Il a dit qu'il viendrait le lendemain.", translation: "'I'll come tomorrow.' → He said he'd come the next day. (futur → conditionnel)" },
            { native: "'Mange plus lentement !' → Elle lui a dit de manger plus lentement.", translation: "'Eat more slowly!' → She told him to eat more slowly. (impératif → de + infinitif)" },
            { native: "'Où habites-tu ?' → Il m'a demandé où j'habitais.", translation: "'Where do you live?' → He asked me where I lived. (question word retained)" },
        ]
    },
]
