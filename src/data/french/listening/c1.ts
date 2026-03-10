// src/data/french/listening/c1.ts
import { ListeningExercise } from "../../../types"

export const c1Listening: ListeningExercise[] = [
    {
        id: "fr-l-c1-1",
        level: "C1",
        title: "Débat académique: L'éthique de l'intelligence artificielle",
        script: "Modérateur : Notre table ronde de ce soir porte sur les enjeux éthiques de l'intelligence artificielle. Premier intervenant : Force est de constater que le développement des algorithmes décisionnels soulève des questions fondamentales en matière de responsabilité. Lorsqu'un système d'IA commet une erreur — médicale, judiciaire ou financière —, qui doit en répondre ? Le concepteur, l'utilisateur ou la machine elle-même ? Deuxième intervenant : À cet égard, la notion de transparence algorithmique est centrale. Dans la mesure où les décisions automatisées restent opaques pour les individus qu'elles affectent, on peut légitimement parler d'une violation des principes démocratiques fondamentaux. Il convient donc d'imposer des obligations d'explicabilité aux systèmes d'IA déployés dans les secteurs sensibles. Troisième intervenant : Nonobstant ces préoccupations légitimes, il ne faudrait pas céder à une vision purement dystopique. L'IA, bien encadrée par un cadre réglementaire robuste, peut contribuer à réduire les biais humains dans des domaines tels que le recrutement ou la justice. Au demeurant, l'Union européenne travaille précisément à l'élaboration d'un tel cadre juridique contraignant.",
        translation: "Moderator: Tonight's round table focuses on the ethical challenges of artificial intelligence. First speaker: One cannot but acknowledge that the development of decision-making algorithms raises fundamental questions of responsibility. When an AI system makes an error — medical, judicial or financial — who is accountable? The designer, the user or the machine itself? Second speaker: In this regard, the notion of algorithmic transparency is central. Insofar as automated decisions remain opaque to the individuals they affect, one can legitimately speak of a violation of fundamental democratic principles. It is therefore appropriate to impose explicability obligations on AI systems deployed in sensitive sectors. Third speaker: Notwithstanding these legitimate concerns, we must not give in to a purely dystopian vision. AI, properly framed by a robust regulatory framework, can help reduce human biases in areas such as recruitment or justice. Moreover, the European Union is working precisely on the elaboration of such a binding legal framework.",
        questions: [
            {
                id: "fr-l-c1-1-q1",
                level: "C1",
                prompt: "Quelle question fondamentale soulève le premier intervenant concernant les systèmes d'IA ?",
                options: ["Le coût économique du développement de l'IA.", "La question de la responsabilité en cas d'erreur commise par un système d'IA.", "L'impact de l'IA sur l'environnement.", "Le manque de compétences techniques des ingénieurs."],
                answer: "La question de la responsabilité en cas d'erreur commise par un système d'IA."
            },
            {
                id: "fr-l-c1-1-q2",
                level: "C1",
                prompt: "Selon le deuxième intervenant, quelle obligation devrait-on imposer aux systèmes d'IA sensibles ?",
                options: ["Des obligations de rentabilité financière.", "Des obligations d'explicabilité (transparence algorithmique).", "Des obligations de résultats garantis.", "Des obligations de formation pour les utilisateurs."],
                answer: "Des obligations d'explicabilité (transparence algorithmique)."
            },
            {
                id: "fr-l-c1-1-q3",
                level: "C1",
                prompt: "Quelle nuance le troisième intervenant apporte-t-il au débat ?",
                options: ["Il propose d'interdire l'IA dans tous les secteurs sensibles.", "Il soutient que l'IA bien encadrée peut réduire les biais humains.", "Il affirme que les craintes éthiques sont totalement infondées.", "Il suggère de confier la régulation de l'IA aux entreprises elles-mêmes."],
                answer: "Il soutient que l'IA bien encadrée peut réduire les biais humains."
            }
        ]
    },
    {
        id: "fr-l-c1-2",
        level: "C1",
        title: "Conférence: La littérature francophone hors de France",
        script: "Bonjour à tous et bienvenue à cette conférence consacrée à la richesse de la littérature francophone hors de France. Il est à noter que la langue française est aujourd'hui la langue maternelle ou officielle de quelque soixante-dix-sept pays, et que cette réalité géographique et culturelle s'est traduite par l'émergence de traditions littéraires d'une extraordinaire diversité. Songeons à Léopold Sédar Senghor, poète et président sénégalais, dont l'œuvre a fondé le mouvement de la Négritude, qui revendiquait la dignité et la beauté des cultures africaines face à l'hégémonie coloniale. Pensons également à l'Antillais Aimé Césaire, dont le Cahier d'un retour au pays natal constitue l'un des textes les plus puissants de toute la littérature de langue française. Plus récemment, l'écrivaine québécoise Marie-Claire Blais et le Marocain Tahar Ben Jelloun illustrent la capacité du français à exprimer des sensibilités radicalement différentes. En ce sens, la francophonie littéraire n'est pas une périphérie de la littérature française, mais bien une galaxie de voix autonomes qui enrichissent et bouleversent la langue depuis l'intérieur.",
        translation: "Good morning everyone and welcome to this conference dedicated to the richness of Francophone literature outside France. It should be noted that the French language is today the mother tongue or official language of some seventy-seven countries, and that this geographical and cultural reality has translated into the emergence of literary traditions of extraordinary diversity. Let us think of Léopold Sédar Senghor, poet and Senegalese president, whose work founded the Négritude movement, which asserted the dignity and beauty of African cultures in the face of colonial hegemony. Let us also think of the Antillean Aimé Césaire, whose Notebook of a Return to the Native Land constitutes one of the most powerful texts in all French-language literature. More recently, the Québécoise writer Marie-Claire Blais and the Moroccan Tahar Ben Jelloun illustrate the capacity of French to express radically different sensibilities. In this sense, Francophone literature is not a periphery of French literature, but rather a galaxy of autonomous voices that enrich and transform the language from within.",
        questions: [
            {
                id: "fr-l-c1-2-q1",
                level: "C1",
                prompt: "Quel mouvement littéraire Léopold Sédar Senghor a-t-il fondé selon la conférence ?",
                options: ["Le surréalisme", "Le nouveau roman", "La Négritude", "L'existentialisme"],
                answer: "La Négritude"
            },
            {
                id: "fr-l-c1-2-q2",
                level: "C1",
                prompt: "Comment le conférencier définit-il la position de la littérature francophone par rapport à la littérature française ?",
                options: ["Comme une forme inférieure et dérivée de la littérature française.", "Comme une galaxie de voix autonomes qui enrichissent et transforment la langue.", "Comme une simple traduction des thèmes de la littérature hexagonale.", "Comme un mouvement exclusivement africain."],
                answer: "Comme une galaxie de voix autonomes qui enrichissent et transforment la langue."
            },
            {
                id: "fr-l-c1-2-q3",
                level: "C1",
                prompt: "Quel est le titre de l'œuvre majeure d'Aimé Césaire mentionnée dans la conférence ?",
                options: ["Les Soleils des indépendances", "Cahier d'un retour au pays natal", "La Négritude en question", "Tropiques"],
                answer: "Cahier d'un retour au pays natal"
            }
        ]
    },
    {
        id: "fr-l-c1-3",
        level: "C1",
        title: "Interview avec un écrivain: L'écriture comme engagement politique",
        script: "Journaliste : Votre dernier roman aborde frontalement la question du racisme systémique en France. Écrire est-il pour vous un acte politique ? Écrivain : Il va de soi que l'écriture ne saurait être neutre. Chaque choix stylistique, chaque prise de position narrative est en soi un geste éthique. Cela dit, je me méfie du terme 'littérature engagée' au sens sartrien strict, car il risque de réduire l'œuvre à son message au détriment de sa dimension esthétique. J : Comment conciliez-vous ambition littéraire et nécessité politique ? É : En m'en tenant précisément à la singularité des destins individuels. Ce n'est pas en produisant un discours idéologique que l'on émeut et l'on convainc, mais en donnant à voir la complexité vécue d'une existence. La littérature a cette capacité que n'a pas le pamphlet : elle suscite l'empathie cognitive, elle oblige le lecteur à habiter une subjectivité qui n'est pas la sienne. J : Vous invoquez souvent Fanon et Césaire. Qu'est-ce que ces penseurs vous ont appris ? É : Ils m'ont appris que la langue peut être à la fois l'instrument de l'oppression et l'outil de son dépassement. Force est de constater que s'emparer de la langue du colonisateur pour la retourner contre lui reste l'un des gestes les plus subversifs qui soit.",
        translation: "Journalist: Your latest novel directly addresses the question of systemic racism in France. Is writing a political act for you? Writer: It goes without saying that writing cannot be neutral. Every stylistic choice, every narrative stance is in itself an ethical gesture. That said, I am wary of the term 'committed literature' in the strict Sartrean sense, as it risks reducing the work to its message at the expense of its aesthetic dimension. J: How do you reconcile literary ambition with political necessity? W: By confining myself precisely to the singularity of individual destinies. It is not by producing an ideological discourse that one moves and convinces, but by showing the lived complexity of an existence. Literature has a capacity that the pamphlet does not: it generates cognitive empathy, it obliges the reader to inhabit a subjectivity that is not their own. J: You often invoke Fanon and Césaire. What did these thinkers teach you? W: They taught me that language can be both the instrument of oppression and the tool for overcoming it. One cannot but acknowledge that seizing the language of the coloniser in order to turn it against them remains one of the most subversive gestures possible.",
        questions: [
            {
                id: "fr-l-c1-3-q1",
                level: "C1",
                prompt: "Pourquoi l'écrivain se méfie-t-il du terme 'littérature engagée' au sens strict ?",
                options: ["Parce qu'il n'aime pas les classifications littéraires.", "Parce qu'il risque de réduire l'œuvre à son message au détriment de sa dimension esthétique.", "Parce que Sartre était un mauvais écrivain selon lui.", "Parce que la politique n'a pas sa place dans la littérature."],
                answer: "Parce qu'il risque de réduire l'œuvre à son message au détriment de sa dimension esthétique."
            },
            {
                id: "fr-l-c1-3-q2",
                level: "C1",
                prompt: "Quelle capacité spécifique l'écrivain attribue-t-il à la littérature par rapport au pamphlet ?",
                options: ["La capacité à toucher un public plus large.", "La capacité à susciter l'empathie cognitive et à faire habiter une subjectivité étrangère.", "La capacité à simplifier des idées complexes.", "La capacité à provoquer une réaction immédiate."],
                answer: "La capacité à susciter l'empathie cognitive et à faire habiter une subjectivité étrangère."
            },
            {
                id: "fr-l-c1-3-q3",
                level: "C1",
                prompt: "Quel enseignement l'écrivain dit-il avoir reçu de Fanon et Césaire ?",
                options: ["Que la langue française est supérieure aux autres langues.", "Que la langue peut être à la fois instrument d'oppression et outil de libération.", "Que la littérature doit rester apolitique.", "Que le colonialisme appartient définitivement au passé."],
                answer: "Que la langue peut être à la fois instrument d'oppression et outil de libération."
            }
        ]
    },
    {
        id: "fr-l-c1-4",
        level: "C1",
        title: "Émission de radio: L'avenir de la démocratie libérale",
        script: "Journaliste : Bonsoir. Ce soir, nous nous interrogeons sur l'avenir de la démocratie libérale à l'heure où les régimes autoritaires semblent gagner du terrain sur tous les continents. Politologue : Il est à noter que la démocratie libérale a toujours été un système fragile, qui suppose des conditions sociales, économiques et culturelles favorables à son maintien. Or, la montée des inégalités, la défiance envers les institutions et la polarisation du débat public constituent des facteurs de fragilisation dont il serait imprudent de sous-estimer la portée. J : Faut-il pour autant parler de crise terminale de la démocratie ? P : Non, et je serais prudent face aux analyses catastrophistes. Il n'empêche que les signaux d'alerte sont réels. Ce que l'on observe, c'est moins un rejet de la démocratie en tant que valeur que de ses modalités concrètes de fonctionnement : la distance entre représentants et représentés, la lenteur des processus délibératifs face à l'urgence des crises, et la perméabilité du débat public aux manipulations informationnelles. Dans la mesure où ces dysfonctionnements ne sont pas corrigés, ils risquent d'alimenter un populisme qui, en se réclamant de la volonté du peuple, vide en réalité la démocratie de sa substance procédurale.",
        translation: "Journalist: Good evening. Tonight we are asking about the future of liberal democracy at a time when authoritarian regimes appear to be gaining ground on every continent. Political scientist: It should be noted that liberal democracy has always been a fragile system, which presupposes social, economic and cultural conditions favourable to its maintenance. Now, rising inequalities, distrust of institutions and the polarisation of public debate constitute factors of fragility whose significance would be imprudent to underestimate. J: Should we therefore speak of a terminal crisis of democracy? P: No, and I would be cautious in the face of catastrophist analyses. The fact remains that the warning signs are real. What we observe is less a rejection of democracy as a value than of its concrete modes of functioning: the distance between representatives and represented, the slowness of deliberative processes in the face of the urgency of crises, and the permeability of public debate to informational manipulations. Insofar as these dysfunctions are not corrected, they risk fuelling a populism which, while claiming to represent the will of the people, in reality empties democracy of its procedural substance.",
        questions: [
            {
                id: "fr-l-c1-4-q1",
                level: "C1",
                prompt: "Quels sont les trois facteurs de fragilisation de la démocratie mentionnés par le politologue ?",
                options: ["Les guerres, les pandémies et les crises économiques.", "La montée des inégalités, la défiance envers les institutions et la polarisation du débat public.", "La corruption, le terrorisme et la mondialisation.", "Le déclin de l'éducation, l'abstentionnisme et la corruption."],
                answer: "La montée des inégalités, la défiance envers les institutions et la polarisation du débat public."
            },
            {
                id: "fr-l-c1-4-q2",
                level: "C1",
                prompt: "Selon le politologue, qu'est-ce que les citoyens rejettent réellement, plutôt que la démocratie elle-même ?",
                options: ["Les élections et les partis politiques.", "Les valeurs de liberté et d'égalité.", "Les modalités concrètes de fonctionnement de la démocratie.", "La séparation des pouvoirs."],
                answer: "Les modalités concrètes de fonctionnement de la démocratie."
            },
            {
                id: "fr-l-c1-4-q3",
                level: "C1",
                prompt: "Comment le politologue définit-il le danger du populisme pour la démocratie ?",
                options: ["Il menace la démocratie en imposant des élections non libres.", "Il vide la démocratie de sa substance procédurale tout en se réclamant de la volonté du peuple.", "Il provoque des guerres civiles dans les démocraties fragiles.", "Il favorise la montée de régimes militaires."],
                answer: "Il vide la démocratie de sa substance procédurale tout en se réclamant de la volonté du peuple."
            }
        ]
    },
]
