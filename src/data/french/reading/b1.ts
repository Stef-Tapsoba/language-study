// src/data/french/reading/b1.ts
import { ReadingPassage } from "../../../types"

export const b1Reading: ReadingPassage[] = [
    {
        id: "fr-r-b1-1",
        level: "B1",
        category: "everyday",
        title: "Le télétravail en France",
        body: {
            target: `Avant la pandémie de 2020, le télétravail était encore rare en France. Moins de dix pour cent des salariés travaillaient depuis chez eux de façon régulière. Mais le confinement a tout changé : du jour au lendemain, des millions de Français ont dû s'adapter à une nouvelle façon de travailler.

Aujourd'hui, le télétravail est reconnu comme un droit dans le Code du travail français. Les entreprises de plus de cinquante salariés doivent négocier un accord collectif sur le sujet. En pratique, beaucoup de cadres travaillent désormais deux ou trois jours par semaine depuis leur domicile.

Les avantages sont nombreux. On économise du temps et de l'argent en évitant les transports en commun. On profite d'un environnement plus calme et on gère son emploi du temps avec plus de liberté. Certaines études montrent une augmentation de la productivité chez les télétravailleurs.

Cependant, les inconvénients existent aussi. L'isolement social est un problème réel : sans les conversations informelles autour de la machine à café, le lien avec les collègues s'affaiblit. La frontière entre vie professionnelle et vie personnelle devient floue, surtout pour ceux qui n'ont pas de bureau séparé chez eux.

La France cherche aujourd'hui un équilibre entre flexibilité et cohésion sociale. Le modèle hybride — quelques jours au bureau, quelques jours à la maison — semble s'imposer comme la norme du travail moderne.`,
            native: `Before the 2020 pandemic, remote working was still rare in France. Fewer than ten percent of employees worked from home regularly. But lockdown changed everything: overnight, millions of French people had to adapt to a new way of working.

Today, remote working is recognised as a right in the French Labour Code. Companies with more than fifty employees must negotiate a collective agreement on the subject. In practice, many executives now work two or three days a week from home.

The advantages are numerous. You save time and money by avoiding public transport. You enjoy a quieter environment and manage your schedule with more freedom. Some studies show an increase in productivity among remote workers.

However, disadvantages also exist. Social isolation is a real problem: without the informal conversations around the coffee machine, the connection with colleagues weakens. The boundary between professional and personal life becomes blurred, especially for those who don't have a separate office at home.

France is now looking for a balance between flexibility and social cohesion. The hybrid model — a few days in the office, a few days at home — seems to be establishing itself as the norm of modern work.`
        },
        vocabGloss: [
            { word: "le télétravail", translation: "remote working, working from home" },
            { word: "les salariés", translation: "employees, salaried workers" },
            { word: "le confinement", translation: "lockdown" },
            { word: "un accord collectif", translation: "a collective agreement" },
            { word: "les cadres", translation: "executives, managers" },
            { word: "l'isolement social", translation: "social isolation" }
        ],
        questions: [
            {
                id: "fr-r-b1-1-q1",
                level: "B1",
                prompt: "Qu'est-ce qui a provoqué une adoption massive du télétravail en France ?",
                options: [
                    "Une nouvelle loi sur le travail",
                    "La pandémie et le confinement de 2020",
                    "Une grève des transports en commun",
                    "Une décision des grandes entreprises"
                ],
                answer: "La pandémie et le confinement de 2020"
            },
            {
                id: "fr-r-b1-1-q2",
                level: "B1",
                prompt: "Quel est l'un des inconvénients du télétravail mentionné dans le texte ?",
                options: [
                    "La baisse de productivité",
                    "Le coût des équipements informatiques",
                    "L'isolement social et l'affaiblissement des liens avec les collègues",
                    "Le manque de connexion Internet"
                ],
                answer: "L'isolement social et l'affaiblissement des liens avec les collègues"
            },
            {
                id: "fr-r-b1-1-q3",
                level: "B1",
                prompt: "Qu'est-ce que le « modèle hybride » selon le texte ?",
                options: [
                    "Travailler uniquement à domicile",
                    "Alterner jours au bureau et jours à domicile",
                    "Travailler dans des espaces de coworking",
                    "Partager son temps entre deux entreprises"
                ],
                answer: "Alterner jours au bureau et jours à domicile"
            },
            {
                id: "fr-r-b1-1-q4",
                level: "B1",
                prompt: "Quelle obligation le Code du travail impose-t-il aux grandes entreprises ?",
                options: [
                    "D'offrir le télétravail à tous les employés",
                    "De payer les frais Internet des télétravailleurs",
                    "De négocier un accord collectif sur le télétravail",
                    "De limiter le télétravail à un jour par semaine"
                ],
                answer: "De négocier un accord collectif sur le télétravail"
            }
        ]
    },

    {
        id: "fr-r-b1-2",
        level: "B1",
        category: "culture",
        title: "La gastronomie française dans le monde",
        body: {
            target: `La cuisine française est reconnue dans le monde entier comme un art de vivre. En 2010, l'UNESCO a inscrit le « repas gastronomique des Français » au Patrimoine Culturel Immatériel de l'humanité — une première pour une tradition culinaire. Cela reconnaît non seulement les plats, mais aussi la façon de manger : le rituel du repas partagé, la succession des plats, le choix des vins.

Les grands chefs français ont joué un rôle clé dans la diffusion de cette culture. Au XIX siècle, Auguste Escoffier a codifié la cuisine française et formé des cuisiniers dans toute l'Europe et aux États-Unis. Ses livres sont encore utilisés dans les écoles hôtelières du monde entier. Plus tard, le mouvement de la Nouvelle Cuisine, dans les années 1970, a simplifié les sauces lourdes et mis en valeur les produits frais et locaux.

Aujourd'hui, la France exporte sa gastronomie sous plusieurs formes. Les restaurants français étoilés au Guide Michelin sont présents dans les plus grandes villes du monde. Les écoles de cuisine comme Le Cordon Bleu forment des étudiants de plus de cent nationalités à Paris et dans leurs campus internationaux.

Pourtant, la gastronomie française doit faire face à des défis. La montée en puissance des cuisines asiatiques, la popularité du fast-food et le changement des habitudes alimentaires des jeunes Français eux-mêmes obligent la tradition à évoluer. Certains chefs incorporent des influences du monde entier, créant une cuisine française résolument contemporaine.`,
            native: `French cuisine is recognised throughout the world as an art of living. In 2010, UNESCO inscribed the "gastronomic meal of the French" on the Intangible Cultural Heritage of Humanity list — a first for a culinary tradition. This recognises not only the dishes, but also the way of eating: the ritual of the shared meal, the succession of courses, the choice of wines.

Great French chefs have played a key role in spreading this culture. In the 19th century, Auguste Escoffier codified French cuisine and trained cooks throughout Europe and the United States. His books are still used in hospitality schools around the world. Later, the Nouvelle Cuisine movement in the 1970s simplified heavy sauces and highlighted fresh, local produce.

Today, France exports its gastronomy in several forms. French restaurants awarded stars in the Michelin Guide are present in the world's largest cities. Cookery schools such as Le Cordon Bleu train students from more than a hundred nationalities in Paris and at their international campuses.

However, French gastronomy faces challenges. The rise of Asian cuisines, the popularity of fast food, and changing eating habits among young French people themselves are forcing the tradition to evolve. Some chefs incorporate influences from around the world, creating a resolutely contemporary French cuisine.`
        },
        vocabGloss: [
            { word: "le Patrimoine Culturel Immatériel", translation: "the Intangible Cultural Heritage" },
            { word: "la succession des plats", translation: "the succession of courses" },
            { word: "codifier", translation: "to codify, to systematise" },
            { word: "les étoilés", translation: "Michelin-starred (restaurants)" },
            { word: "la montée en puissance", translation: "the rise, the growing power" },
            { word: "résolument", translation: "resolutely, decidedly" }
        ],
        questions: [
            {
                id: "fr-r-b1-2-q1",
                level: "B1",
                prompt: "Qu'est-ce que l'UNESCO a reconnu en 2010 concernant la France ?",
                options: [
                    "La recette officielle du coq au vin",
                    "Le repas gastronomique français comme patrimoine immatériel",
                    "Le Guide Michelin comme institution culturelle",
                    "Paris comme capitale mondiale de la gastronomie"
                ],
                answer: "Le repas gastronomique français comme patrimoine immatériel"
            },
            {
                id: "fr-r-b1-2-q2",
                level: "B1",
                prompt: "Quel est le rôle d'Auguste Escoffier dans l'histoire de la gastronomie française ?",
                options: [
                    "Il a inventé la Nouvelle Cuisine dans les années 1970",
                    "Il a fondé Le Cordon Bleu à Paris",
                    "Il a codifié la cuisine française et formé des cuisiniers à travers le monde",
                    "Il a créé le Guide Michelin"
                ],
                answer: "Il a codifié la cuisine française et formé des cuisiniers à travers le monde"
            },
            {
                id: "fr-r-b1-2-q3",
                level: "B1",
                prompt: "Quel changement la Nouvelle Cuisine des années 1970 a-t-elle apporté ?",
                options: [
                    "Elle a introduit des épices asiatiques dans la cuisine française",
                    "Elle a simplifié les sauces et mis en valeur les produits frais",
                    "Elle a popularisé le fast-food en France",
                    "Elle a remplacé le vin par d'autres boissons au repas"
                ],
                answer: "Elle a simplifié les sauces et mis en valeur les produits frais"
            },
            {
                id: "fr-r-b1-2-q4",
                level: "B1",
                prompt: "Quels défis la gastronomie française doit-elle affronter aujourd'hui ?",
                options: [
                    "Le manque de chefs formés et la fermeture des écoles hôtelières",
                    "La concurrence des cuisines étrangères et l'évolution des habitudes alimentaires",
                    "L'interdiction d'exporter certains produits alimentaires",
                    "La disparition des restaurants étoilés en dehors de Paris"
                ],
                answer: "La concurrence des cuisines étrangères et l'évolution des habitudes alimentaires"
            }
        ]
    },

    {
        id: "fr-r-b1-3",
        level: "B1",
        category: "literature",
        title: "Un voyage en train",
        body: {
            target: `Le TGV quitte la gare de Lyon à sept heures vingt. Je m'installe dans mon siège côté fenêtre et regarde Paris disparaître derrière les banlieues grises. Vingt minutes plus tard, la ville cède la place aux champs de blé et aux villages endormis. C'est l'une des choses que j'aime dans le train : la façon dont les paysages défilent comme les pages d'un livre.

Mon voyage m'emmène jusqu'à Avignon. Trois heures, presque exactement. J'ai apporté un roman, mais je ne l'ouvre pas. Je préfère observer mes compagnons de voyage. En face de moi, un homme d'affaires pianote sur son ordinateur. À côté, une jeune femme mange un sandwich au jambon-beurre en regardant par la fenêtre. Deux enfants se disputent poliment la place côté couloir.

Peu après Lyon, le paysage change radicalement. Les collines de la vallée du Rhône apparaissent, couvertes de vignes en rangs serrés. L'architecture des maisons se transforme : les tuiles deviennent orangées, les volets plus colorés. C'est le Midi qui s'annonce.

À Avignon, je descends sur le quai baigné de soleil. L'air sent la lavande et la poussière chaude. Le voyage en train, en France, n'est pas seulement un moyen de transport. C'est une façon de voir le pays se dérouler lentement, province par province, comme une introduction au lieu où l'on arrive.`,
            native: `The TGV leaves the Gare de Lyon at seven twenty. I settle into my window seat and watch Paris disappear behind the grey suburbs. Twenty minutes later, the city gives way to wheat fields and sleeping villages. This is one of the things I love about the train: the way landscapes scroll by like the pages of a book.

My journey takes me to Avignon. Three hours, almost exactly. I've brought a novel, but I don't open it. I prefer to observe my fellow travellers. Opposite me, a businessman taps away at his laptop. Next to me, a young woman eats a ham-butter sandwich while looking out the window. Two children politely argue over the aisle seat.

Just after Lyon, the landscape changes dramatically. The hills of the Rhône valley appear, covered with tightly packed rows of vines. The architecture of the houses transforms: the tiles become orange-red, the shutters more colourful. The Midi is announcing itself.

In Avignon, I step out onto the sunlit platform. The air smells of lavender and warm dust. Travelling by train in France is not simply a means of transport. It is a way of watching the country unfold slowly, province by province, as an introduction to the place where you are arriving.`
        },
        vocabGloss: [
            { word: "le TGV", translation: "high-speed train (Train à Grande Vitesse)" },
            { word: "les banlieues", translation: "the suburbs" },
            { word: "défilent", translation: "scroll past, go by" },
            { word: "un sandwich jambon-beurre", translation: "a ham-and-butter sandwich (French classic)" },
            { word: "les tuiles", translation: "roof tiles" },
            { word: "le Midi", translation: "the South of France (literally 'midday', referring to the sunny south)" }
        ],
        questions: [
            {
                id: "fr-r-b1-3-q1",
                level: "B1",
                prompt: "Quelle est la destination du narrateur ?",
                options: ["Lyon", "Paris", "Avignon", "Marseille"],
                answer: "Avignon"
            },
            {
                id: "fr-r-b1-3-q2",
                level: "B1",
                prompt: "Pourquoi le narrateur n'ouvre-t-il pas son roman pendant le voyage ?",
                options: [
                    "Il a oublié ses lunettes",
                    "Il préfère observer les autres voyageurs",
                    "Il dort pendant tout le trajet",
                    "Le train est trop bruyant pour lire"
                ],
                answer: "Il préfère observer les autres voyageurs"
            },
            {
                id: "fr-r-b1-3-q3",
                level: "B1",
                prompt: "Comment le paysage change-t-il après Lyon ?",
                options: [
                    "Des forêts apparaissent et il commence à pleuvoir",
                    "On entre dans un long tunnel sous les Alpes",
                    "Des collines couvertes de vignes apparaissent et l'architecture change",
                    "La campagne disparaît et une grande ville industrielle commence"
                ],
                answer: "Des collines couvertes de vignes apparaissent et l'architecture change"
            },
            {
                id: "fr-r-b1-3-q4",
                level: "B1",
                prompt: "Selon le narrateur, qu'est-ce que le voyage en train représente en France ?",
                options: [
                    "Le moyen de transport le plus rapide entre les villes",
                    "Un symbole de la modernité française",
                    "Une façon de voir le pays se dérouler lentement, province par province",
                    "Le seul transport écologique disponible"
                ],
                answer: "Une façon de voir le pays se dérouler lentement, province par province"
            }
        ]
    },

    {
        id: "fr-r-b1-4",
        level: "B1",
        category: "dialogue",
        title: "Faut-il partir à l'étranger pour réussir ?",
        body: {
            target: `Journaliste : Vous avez quitté la France à vingt-deux ans pour vous installer à Singapour. Vous ne regrettez pas cette décision ?

Alexandre : Pas du tout. Quand je cherchais du travail après mon master, j'avais envoyé des dizaines de CV sans résultat. À Singapour, j'avais eu une réponse en deux semaines. Pour moi, la question ne s'est pas vraiment posée.

Journaliste : Vous pensez que les jeunes Français ont tort de rester en France ?

Alexandre : Je ne dirais pas ça. Je pense que cela dépend des priorités de chacun. Si vous voulez construire une carrière internationale dans la finance ou la tech, partir est presque indispensable. Mais si vous attachez de l'importance à votre réseau familial, à votre langue, à vos racines culturelles, rester est un choix tout à fait légitime.

Journaliste : Et la France, elle perd quelque chose dans cette fuite des cerveaux ?

Alexandre : Évidemment. On parle souvent de « fuite des cerveaux », mais il ne faut pas oublier que beaucoup de ces expatriés reviennent après quelques années avec une expérience internationale précieuse. Si j'avais su au départ que je reviendrais m'installer à Lyon à quarante ans, j'aurais peut-être moins culpabilisé de partir. Le départ n'est pas forcément définitif.

Journaliste : Un dernier conseil pour les jeunes qui hésitent ?

Alexandre : Partez, même si c'est difficile. Ce que vous apprendrez sur vous-mêmes vaut plus que n'importe quel diplôme. Et si ça ne se passe pas comme prévu, vous aurez au moins essayé.`,
            native: `Journalist: You left France at twenty-two to settle in Singapore. Do you regret that decision?

Alexandre: Not at all. When I was looking for work after my master's degree, I had sent dozens of CVs without any result. In Singapore, I had received a response within two weeks. For me, the question didn't really arise.

Journalist: Do you think young French people are wrong to stay in France?

Alexandre: I wouldn't say that. I think it depends on each person's priorities. If you want to build an international career in finance or tech, leaving is almost essential. But if you attach importance to your family network, your language, your cultural roots, staying is a perfectly legitimate choice.

Journalist: And France — does it lose something from this brain drain?

Alexandre: Obviously. People often talk about 'brain drain', but we must not forget that many of these expatriates return after a few years with valuable international experience. If I had known from the start that I would come back to settle in Lyon at forty, I might have felt less guilty about leaving. Leaving is not necessarily permanent.

Journalist: One last piece of advice for young people who are hesitating?

Alexandre: Go, even if it's hard. What you will learn about yourselves is worth more than any degree. And if it doesn't go as planned, you will at least have tried.`
        },
        vocabGloss: [
            { word: "la fuite des cerveaux", translation: "brain drain" },
            { word: "les racines culturelles", translation: "cultural roots" },
            { word: "l'expatrié / l'expatriée", translation: "expatriate (person working abroad)" },
            { word: "culpabiliser", translation: "to feel guilty" },
            { word: "définitif / définitive", translation: "permanent, final" },
        ],
        questions: [
            {
                id: "fr-r-b1-4-q1",
                level: "B1",
                prompt: "Pourquoi Alexandre a-t-il décidé de partir à Singapour ?",
                options: [
                    "Il avait reçu une bourse d'études internationale",
                    "Il cherchait une aventure personnelle loin de sa famille",
                    "Il n'avait pas trouvé de travail en France malgré de nombreuses candidatures",
                    "Il voulait apprendre une nouvelle langue étrangère"
                ],
                answer: "Il n'avait pas trouvé de travail en France malgré de nombreuses candidatures"
            },
            {
                id: "fr-r-b1-4-q2",
                level: "B1",
                prompt: "Selon Alexandre, dans quels cas est-il presque indispensable de partir à l'étranger ?",
                options: [
                    "Quand on veut apprendre une nouvelle culture",
                    "Quand on souhaite construire une carrière internationale dans la finance ou la tech",
                    "Quand on a déjà beaucoup d'expérience professionnelle en France",
                    "Quand on ne parle pas suffisamment bien l'anglais"
                ],
                answer: "Quand on souhaite construire une carrière internationale dans la finance ou la tech"
            },
            {
                id: "fr-r-b1-4-q3",
                level: "B1",
                prompt: "Quelle nuance apporte Alexandre sur la notion de « fuite des cerveaux » ?",
                options: [
                    "C'est un phénomène positif car la France a trop de diplômés",
                    "Beaucoup d'expatriés reviennent avec une expérience internationale précieuse",
                    "Seuls les personnes sans talent vrai quittent la France",
                    "La France ne souffre pas vraiment de ce phénomène"
                ],
                answer: "Beaucoup d'expatriés reviennent avec une expérience internationale précieuse"
            },
            {
                id: "fr-r-b1-4-q4",
                level: "B1",
                prompt: "Quel est le conseil final d'Alexandre pour les jeunes qui hésitent à partir ?",
                options: [
                    "D'attendre d'avoir plus d'expérience avant de partir",
                    "De partir seulement si on parle déjà la langue du pays d'accueil",
                    "De partir malgré les difficultés, car l'expérience en vaut la peine",
                    "De rester en France et de chercher des opportunités locales"
                ],
                answer: "De partir malgré les difficultés, car l'expérience en vaut la peine"
            }
        ]
    }
]
