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
]
