// ─────────────────────────────────────────────────────────────────────────────
// FRENCH B1 CULTURE
// src/data/french/culture/b1.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"

export const frB1Culture: CultureEpisode[] = [
    {
        id: "fr-c-b1-1",
        language: "fr",
        level: "B1",
        category: "customs",
        region: "france",
        title: {
            native: "Les grandes vacances — quand la France prend la mer",
            target: "Les grandes vacances"
        },
        subtitle: "Every August, France shuts down and heads south — the annual summer exodus that defines French social life.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
                caption: {
                    native: "The Atlantic coast — one of the great destinations of the French summer",
                    target: "La côte atlantique — l'une des grandes destinations de l'été français"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800",
                caption: {
                    native: "The autoroute du Soleil on the first Saturday of August — the busiest road day of the year",
                    target: "L'autoroute du Soleil le premier samedi d'août — le jour de trafic le plus chargé de l'année"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
                caption: {
                    native: "A village in Provence in August — calm, shuttered, and waiting for September",
                    target: "Un village en Provence en août — calme, volets fermés, en attente de septembre"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `En France, les vacances ne sont pas simplement un moment de repos. Elles sont une institution nationale, encadrée par la loi, ancrée dans la culture et observable dans l'organisation entière du pays.

Les « grandes vacances » désignent les vacances d'été des enfants — de fin juin à début septembre. Mais pour de nombreux adultes et entreprises, août est LE mois des vacances. Pendant ce mois, une partie importante de la France s'arrête littéralement. Des centaines de restaurants, d'artisans, de PME et même de cabinets médicaux ferment leurs portes pour trois à quatre semaines. À Paris, certains quartiers semblent déserts. On colle une affiche sur la vitrine : « Fermé pour congés annuels. Réouverture le 2 septembre. »

Cette tradition est liée à l'histoire du droit du travail français. En 1936, sous le Front populaire, le gouvernement de Léon Blum a accordé aux travailleurs français deux semaines de congés payés — une première historique en Europe. Les Français ont alors découvert les vacances comme un droit fondamental. Aujourd'hui, les salariés français ont droit à cinq semaines de congés payés par an — l'un des totaux les plus élevés au monde.

Le phénomène le plus spectaculaire est « l'exode d'août ». Chaque année, des millions de voitures quittent les grandes villes vers les côtes et les campagnes. Le premier samedi d'août est systématiquement le jour de trafic routier le plus dense de l'année. Bison Futé, l'organisme officiel de surveillance du trafic, classe ce jour en « rouge » voire « noir » — les niveaux d'alerte maximum.

Les destinations préférées des Français ? La mer, d'abord — la Côte d'Azur, l'Atlantique, la Bretagne. Puis la montagne. Et, de plus en plus, l'étranger : l'Espagne, le Portugal, la Grèce. Mais pour beaucoup, les vacances en France restent un retour aux racines : retrouver la maison de famille, les grands-parents, le jardin, le marché du village.

Cette culture des grandes vacances a des effets économiques considérables. Elle soutient les régions touristiques, mais crée aussi des distorsions : certaines stations balnéaires voient leur population multiplier par dix en été, puis retomber à néant en hiver. Et pour ceux qui n'ont pas les moyens de partir — environ un tiers des Français — août dans une ville presque vide peut ressembler à une exclusion silencieuse.`,
            native: `In France, holidays are not simply a time for rest. They are a national institution, framed by law, embedded in the culture, and visible in the entire organisation of the country.

The "grandes vacances" refers to children's summer holidays — from late June to early September. But for many adults and businesses, August is THE holiday month. During this month, a significant part of France literally stops. Hundreds of restaurants, tradespeople, small businesses and even medical practices close their doors for three to four weeks. In Paris, some neighbourhoods seem deserted. A sign goes up in the window: "Closed for annual holidays. Reopening 2 September."

This tradition is rooted in the history of French labour law. In 1936, under the Front Populaire, Léon Blum's government granted French workers two weeks of paid holiday — a historic first in Europe. The French then discovered holidays as a fundamental right. Today, French employees are entitled to five weeks of paid leave per year — one of the highest totals in the world.

The most spectacular phenomenon is the "August exodus". Every year, millions of cars leave the major cities for the coast and countryside. The first Saturday of August is consistently the busiest road traffic day of the year. Bison Futé, the official traffic monitoring body, classifies this day as "red" or even "black" — the maximum alert levels.

The French people's favourite destinations? The sea, first — the Côte d'Azur, the Atlantic, Brittany. Then the mountains. And, increasingly, abroad: Spain, Portugal, Greece. But for many, a French holiday remains a return to roots: reconnecting with the family house, the grandparents, the garden, the village market.

This culture of the grandes vacances has considerable economic effects. It sustains tourist regions, but also creates distortions: some seaside resorts see their population multiply tenfold in summer, then drop back to almost nothing in winter. And for those who cannot afford to go away — about one third of French people — August in an almost-empty city can feel like a silent exclusion.`
        },

        cultureVocab: [
            {
                word: "les grandes vacances",
                translation: "the summer holidays (literally 'the great holidays')",
                culturalNote: "The term specifically refers to the long school summer break, but culturally it encompasses the entire French summer shutdown. The word 'grandes' signals that these are not ordinary holidays — they are the central event of the year."
            },
            {
                word: "les congés payés",
                translation: "paid holiday leave",
                culturalNote: "Introduced by Léon Blum's Front Populaire government in June 1936. The right to two weeks of paid holiday was considered revolutionary at the time. The famous image of working-class families on bicycles heading to the sea for the first time became an icon of French social progress."
            },
            {
                word: "l'exode",
                translation: "the exodus",
                culturalNote: "Borrowed directly from the biblical Exodus. The word is used without irony in French media to describe the annual departure — signalling that this mass movement is seen as both inevitable and slightly dramatic."
            },
            {
                word: "Bison Futé",
                translation: "the French road traffic advisory service (literally 'Cunning Bison')",
                culturalNote: "A beloved French institution, using a cartoon bison as its mascot since 1975. Its colour-coded traffic alerts (green, orange, red, black) are a summer cultural touchstone — families consult them before departure as part of the holiday ritual."
            },
            {
                word: "les stations balnéaires",
                translation: "seaside resorts",
                culturalNote: "From 'bain' (bath). French seaside resorts like Deauville, La Baule and Cap d'Agde were developed in the 19th century for the bourgeoisie. After 1936, working-class tourism transformed them into mass destinations, creating the cultural mix that defines them today."
            }
        ],

        questions: [
            {
                id: "fr-c-b1-1-q1",
                type: "comprehension",
                prompt: {
                    native: "When were paid holidays first introduced for French workers, and how many weeks were granted?",
                    target: "Quand les congés payés ont-ils été introduits pour les travailleurs français, et combien de semaines ont été accordées ?"
                },
                options: [
                    "In 1945, four weeks",
                    "In 1936, two weeks",
                    "In 1968, three weeks",
                    "In 1982, five weeks"
                ],
                answer: "In 1936, two weeks"
            },
            {
                id: "fr-c-b1-1-q2",
                type: "comprehension",
                prompt: {
                    native: "What is the social downside of August holidays for some French people?",
                    target: "Quel est l'inconvénient social des vacances d'août pour certains Français ?"
                },
                options: [
                    "Traffic jams on the motorways are dangerous",
                    "Hotel prices become unaffordable for everyone",
                    "About one third of French people cannot afford to go away and feel excluded",
                    "Coastal towns are destroyed by over-tourism"
                ],
                answer: "About one third of French people cannot afford to go away and feel excluded"
            },
            {
                id: "fr-c-b1-1-q3",
                type: "reflection",
                prompt: {
                    native: "Does your country have a similar period when everyone seems to take holidays at the same time? What are the advantages and disadvantages of a national holiday season versus people spreading their holidays throughout the year?",
                    target: "Votre pays a-t-il une période similaire où tout le monde semble prendre ses vacances en même temps ? Quels sont les avantages et les inconvénients d'une saison des vacances nationale par rapport à des vacances échelonnées tout au long de l'année ?"
                }
            }
        ],

        didYouKnow: {
            native: "The first Saturday of August is so predictably the worst traffic day of the year that French road authorities began issuing official colour-coded forecasts in 1975 — and they have never been wrong about that particular Saturday. In peak years, over ten million vehicles leave the Paris region alone in that single weekend, creating tailbacks that can stretch for hundreds of kilometres on the A7 autoroute, known as 'l'autoroute du Soleil' (the motorway of the Sun).",
            target: "Le premier samedi d'août est si prévisiblement le pire jour de trafic de l'année que les autorités routières françaises ont commencé à émettre des prévisions officielles codées par couleur en 1975 — et elles ne se sont jamais trompées sur ce samedi particulier. Lors des années de pointe, plus de dix millions de véhicules quittent la seule région parisienne ce week-end, créant des embouteillages qui peuvent s'étendre sur des centaines de kilomètres sur l'A7, connue sous le nom d'« autoroute du Soleil »."
        },

        relatedIds: ["fr-c-a2-1", "fr-c-b2-1"]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // fr-c-b1-2 — La laïcité
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "fr-c-b1-2",
        language: "fr",
        level: "B1",
        category: "customs",
        region: "france",
        title: {
            native: "La laïcité — le principe fondateur de la République",
            target: "La laïcité"
        },
        subtitle: "France's strict separation of religion and public life — a founding principle that sets it apart from every other democracy in the world.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
                caption: {
                    native: "Paris — the city whose public institutions embody the secular republic",
                    target: "Paris — la ville dont les institutions publiques incarnent la République laïque"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800",
                caption: {
                    native: "A French state school — public education is one of laïcité's most important arenas",
                    target: "Une école publique française — l'éducation publique est l'un des terrains les plus importants de la laïcité"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
                caption: {
                    native: "Citizens of a secular republic — in public life, all are equal regardless of faith",
                    target: "Les citoyens d'une République laïque — dans la vie publique, tous sont égaux quelle que soit leur foi"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `La laïcité est l'un des principes fondateurs de la République française — et l'un des plus mal compris à l'étranger. Elle ne signifie pas l'athéisme, ni l'hostilité à la religion. Elle signifie que l'État est strictement neutre en matière religieuse. Son fondement juridique est la loi du 9 décembre 1905, qui sépare officiellement l'Église et l'État. Cette loi a mis fin à une longue bataille entre le gouvernement républicain et l'Église catholique, qui exerçait une influence considérable sur l'éducation, la politique et la vie publique tout au long du XIXe siècle. La loi de 1905 garantit deux choses en même temps : la liberté de croire — chacun est libre de pratiquer sa religion en privé — et la liberté de ne pas subir la religion d'autrui dans l'espace public. C'est cette double garantie qui définit la laïcité.

En pratique, la laïcité signifie que les agents de l'État représentent la République, et non une religion. Dans les écoles publiques, il est interdit d'afficher des signes religieux ostensibles. Il n'y a pas de prières dans les bâtiments publics. L'État ne finance pas la construction de nouveaux édifices religieux — les bâtiments construits avant 1905 appartiennent à l'État qui en assure l'entretien, mais aucun lieu de culte nouveau ne reçoit de financement public direct. Les enseignants, les juges, les fonctionnaires sont tenus à une stricte neutralité religieuse dans l'exercice de leurs fonctions. L'idée est simple : dans l'espace public, vous êtes d'abord un citoyen, et non le membre d'une communauté religieuse.

La laïcité a été au cœur de débats politiques intenses depuis les années 1980, notamment autour du port du voile islamique — les « affaires du voile ». En 1989, trois collégiennes ont été exclues d'un établissement public pour avoir refusé de retirer leur foulard. L'affaire a divisé la France. En 2004, le gouvernement a tranché : une loi interdit le port de signes religieux ostensibles dans les écoles publiques. En 2010, une autre loi a interdit le port de vêtements dissimulant intégralement le visage dans les espaces publics. Ces lois révèlent une tension démocratique réelle : d'un côté, la liberté religieuse individuelle ; de l'autre, le principe républicain d'égalité dans l'espace partagé. Les partisans de ces lois affirment qu'elles protègent les individus — notamment les femmes — de pressions communautaires. Leurs opposants estiment qu'elles restreignent une liberté fondamentale.

La laïcité est aujourd'hui l'objet d'un débat politique vif, notamment en lien avec la présence d'une importante communauté musulmane en France — la plus grande d'Europe occidentale. Certains soutiennent que la laïcité est appliquée de manière asymétrique, ciblant davantage l'islam que d'autres religions. D'autres affirment que la laïcité est précisément le seul cadre permettant une coexistence équitable dans une société plurielle. Il existe aussi un profond malentendu international : dans les pays anglo-saxons, la laïcité est souvent perçue comme une hostilité envers la religion. Pour la grande majorité des Français, c'est le contraire : la laïcité protège la liberté de conscience de chaque individu contre toute forme de domination religieuse collective.

Pourquoi les Français sont-ils si profondément attachés à la laïcité ? Parce qu'elle n'est pas dirigée contre la religion — elle est dirigée contre la théocratie. Son message est simple : croyez ce que vous voulez dans votre vie privée, mais dans l'espace public, nous sommes tous des citoyens égaux, et non les représentants d'une communauté confessionnelle. Pour beaucoup de Français, la laïcité n'est pas un principe parmi d'autres : elle est la République elle-même. Ce n'est pas un hasard si le premier article de la Constitution de la Ve République déclare : « La France est une République indivisible, laïque, démocratique et sociale. »`,
            native: `Laïcité is one of the founding principles of the French Republic — and one of the most misunderstood abroad. It does not mean atheism, nor hostility to religion. It means that the state is strictly neutral in religious matters. Its legal foundation is the law of 9 December 1905, which formally separated Church and State. This law ended a long battle between the republican government and the Catholic Church, which had exercised considerable influence over education, politics and public life throughout the nineteenth century. The 1905 law guarantees two things simultaneously: freedom of belief — everyone is free to practise their religion in private — and freedom from having the religion of others imposed in the public sphere. It is this dual guarantee that defines laïcité.

In practice, laïcité means that state employees represent the Republic, not a religion. In state schools, the display of conspicuous religious signs is prohibited. There are no prayers in public buildings. The state does not fund the construction of new religious buildings — buildings constructed before 1905 belong to the state, which maintains them, but no new place of worship receives direct public funding. Teachers, judges and civil servants are required to maintain strict religious neutrality in the exercise of their duties. The idea is simple: in public space, you are first and foremost a citizen, not a member of a religious community.

Laïcité has been at the heart of intense political debate since the 1980s, particularly around the wearing of the Islamic headscarf — the "headscarf affairs." In 1989, three secondary school girls were expelled from a state school for refusing to remove their headscarves. The affair divided France. In 2004, the government settled the matter: a law prohibited the wearing of conspicuous religious signs in state schools. In 2010, another law banned the wearing of clothing that completely conceals the face in public spaces. These laws reveal a genuine democratic tension: on one side, individual religious freedom; on the other, the republican principle of equality in shared public space. Supporters of these laws argue that they protect individuals — particularly women — from community pressure. Opponents argue that they restrict a fundamental liberty.

Laïcité is today the subject of heated political debate, particularly in connection with the presence of a large Muslim community in France — the largest in Western Europe. Some argue that laïcité is applied asymmetrically, targeting Islam more than other religions. Others maintain that laïcité is precisely the only framework enabling fair coexistence in a pluralist society. There is also a deep international misunderstanding: in Anglo-Saxon countries, laïcité is often perceived as hostility towards religion. For the vast majority of French people, the opposite is true: laïcité protects each individual's freedom of conscience from any form of collective religious domination.

Why are the French so deeply attached to laïcité? Because it is not directed against religion — it is directed against theocracy. Its message is simple: believe what you want in your private life, but in public space, we are all equal citizens, not the representatives of a confessional community. For many French people, laïcité is not merely one principle among others: it is the Republic itself. It is no accident that the first article of the Fifth Republic's Constitution declares: "France is an indivisible, secular, democratic and social Republic."`
        },

        cultureVocab: [
            {
                word: "la laïcité",
                translation: "secularism / secular principle",
                culturalNote: "There is no direct English equivalent; the French word is increasingly used in English academic writing. It does not mean atheism — it means the state's strict neutrality on religion. A practising Catholic and a Muslim can both support laïcité."
            },
            {
                word: "la loi de 1905",
                translation: "the 1905 law (separation of Church and State)",
                culturalNote: "Considered one of the founding texts of the Third Republic. Passed after decades of political conflict between republicans and the Catholic Church's influence in schools, politics and public life."
            },
            {
                word: "les signes ostensibles / les signes religieux ostentatoires",
                translation: "conspicuous religious signs",
                culturalNote: "The 2004 law uses the word \"ostensible\" (conspicuous/ostentatious). Small discreet signs (a cross under a shirt) are permitted; large visible ones are not. The line is deliberately left to interpretation."
            },
            {
                word: "la République laïque",
                translation: "the secular republic",
                culturalNote: "Laïcité is so fundamental to French identity that it is written into the first article of the Constitution: \"La France est une République indivisible, laïque, démocratique et sociale.\""
            },
            {
                word: "le voile / le foulard islamique",
                translation: "the veil / the headscarf",
                culturalNote: "A distinction is made in French between the foulard (headscarf), the voile (veil, more general) and the niqab/burqa (full face covering). The 2004 law banned all conspicuous religious signs in schools; the 2010 law specifically banned face coverings in all public spaces."
            }
        ],

        questions: [
            {
                id: "fr-c-b1-2-q1",
                type: "comprehension",
                prompt: {
                    native: "What did the 1905 law establish in France?",
                    target: "Qu'a établi la loi de 1905 en France ?"
                },
                options: [
                    "The separation of Church and State, ending state funding and influence of religion in public life",
                    "A ban on all religious practice in public spaces",
                    "The creation of an official state religion to unify the country",
                    "The right of religious schools to receive government funding"
                ],
                answer: "The separation of Church and State, ending state funding and influence of religion in public life"
            },
            {
                id: "fr-c-b1-2-q2",
                type: "comprehension",
                prompt: {
                    native: "What does the 2004 law prohibit in French state schools?",
                    target: "Que la loi de 2004 interdit-elle dans les écoles publiques françaises ?"
                },
                options: [
                    "Conspicuous religious signs and symbols of any religion",
                    "Only Islamic headscarves, while other religious items are permitted",
                    "All clothing with any colour or pattern associated with a religion",
                    "Religious discussions between pupils during school hours"
                ],
                answer: "Conspicuous religious signs and symbols of any religion"
            },
            {
                id: "fr-c-b1-2-q3",
                type: "reflection",
                prompt: {
                    native: "Laïcité is sometimes described as 'freedom OF religion' in the US versus 'freedom FROM religion' in France. Do you think the French approach is fair to religious minorities, or does it unfairly restrict religious expression in public life?",
                    target: "La laïcité est parfois décrite comme « liberté de religion » aux États-Unis contre « liberté par rapport à la religion » en France. Pensez-vous que l'approche française est juste envers les minorités religieuses, ou restreint-elle injustement l'expression religieuse dans la vie publique ?"
                }
            }
        ],

        didYouKnow: {
            native: "France maintains approximately 40,000 religious buildings built before 1905 as state property — meaning the French taxpayer funds the upkeep of churches, synagogues and temples built before the law came into force. The irony is not lost on the French: the country that most strictly separates Church and State also owns more religious buildings than almost any other in the world. After 1905, no new religious buildings have received direct state funding, which is why modern mosques in France are funded by donations or foreign governments — a source of ongoing political controversy.",
            target: "La France maintient environ 40 000 édifices religieux construits avant 1905 comme propriété de l'État — ce qui signifie que le contribuable français finance l'entretien des églises, synagogues et temples construits avant l'entrée en vigueur de la loi. L'ironie n'échappe pas aux Français : le pays qui sépare le plus strictement l'Église et l'État possède également plus d'édifices religieux que presque n'importe quel autre pays au monde. Après 1905, aucun nouvel édifice religieux n'a reçu de financement public direct, c'est pourquoi les mosquées modernes en France sont financées par des dons ou des gouvernements étrangers — une source de controverse politique permanente."
        },

        relatedIds: ["fr-c-a2-2", "fr-c-b1-1"]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // fr-c-b1-3 — L'exception culturelle française
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "fr-c-b1-3",
        language: "fr",
        level: "B1",
        category: "arts",
        region: "france",
        title: {
            native: "L'exception culturelle — quand la culture résiste à la mondialisation",
            target: "L'exception culturelle"
        },
        subtitle: "France's decades-long battle to protect its films, music and language from being swallowed by Hollywood and globalisation — and why the rest of the world is starting to follow its lead.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
                caption: {
                    native: "Cinema — the art form France has protected most fiercely from the forces of globalisation",
                    target: "Le cinéma — la forme d'art que la France a défendue le plus farouchement contre les forces de la mondialisation"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
                caption: {
                    native: "A Parisian street — French urban life, language and culture are subjects of active state protection",
                    target: "Une rue parisienne — la vie urbaine, la langue et la culture françaises font l'objet d'une protection active de l'État"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
                caption: {
                    native: "French music — radio quotas introduced in 1994 require 40% of songs to be in French",
                    target: "La musique française — les quotas radio introduits en 1994 exigent que 40 % des chansons soient en français"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `La France défend depuis des décennies une idée simple mais radicale : la culture n'est pas une marchandise comme le sont l'acier ou les automobiles. Elle est un bien public, porteur d'identité nationale et de mémoire collective, qui ne peut pas être livré entièrement aux forces du marché. Cette conviction est désignée par une expression devenue célèbre dans le monde entier : « l'exception culturelle ». Elle repose sur l'idée que les œuvres cinématographiques, musicales, littéraires et audiovisuelles méritent un traitement différent de celui des produits industriels ordinaires, parce qu'elles expriment qui nous sommes — et pas seulement ce que nous consommons.

L'exception culturelle a connu son heure de vérité lors des négociations du GATT en 1993, l'accord international qui allait devenir le socle de l'Organisation mondiale du commerce. Les États-Unis exigeaient que les produits audiovisuels — films, séries, musique — soient soumis aux règles du libre-échange, comme n'importe quel autre secteur économique. La France, portée par son ministre de la Culture Jack Lang, a refusé catégoriquement et a entraîné avec elle l'ensemble des pays européens. La confrontation diplomatique a été intense. La France a finalement obtenu que l'audiovisuel soit exclu des règles du libre-échange : les États pourraient continuer à subventionner et à protéger leur production culturelle nationale. C'était une victoire politique majeure — et un précédent qui influence encore les négociations commerciales internationales aujourd'hui.

En pratique, l'exception culturelle se traduit par un système de soutien à la création française unique au monde. Le CNC — Centre National du Cinéma et de l'Image Animée — finance la production cinématographique grâce à une taxe prélevée sur chaque billet vendu et sur les abonnements des plateformes de streaming comme Netflix, qui sont tenues d'investir dans des productions françaises. Les chaînes de télévision sont soumises à des obligations de diffusion de contenu d'origine française. Et depuis la loi Toubon de 1994, les stations de radio doivent consacrer au moins 40 % de leur programmation musicale à des chansons en langue française, dont la moitié doivent être de nouveaux artistes. Cette même loi Toubon fait du français la langue obligatoire de la publicité, de l'enseignement, des services publics et des contrats en France.

L'Académie française veille, elle, sur la langue depuis 1635. Fondée par le Cardinal de Richelieu sous Louis XIII, elle publie le dictionnaire officiel de la langue française et statue sur les néologismes. Son combat contre les anglicismes est bien connu — et parfois perdu d'avance. Le « smartphone » a gagné contre « l'ordiphone » qu'elle proposait. Mais l'Académie française reste un symbole puissant de l'attachement français à sa langue comme patrimoine national. Pour la France, la langue n'est pas seulement un outil de communication : elle est la matière dont est faite la pensée française, et sa préservation est une mission d'État.

L'exception culturelle est souvent critiquée comme une forme de protectionnisme paternaliste — l'État décidant à la place des citoyens ce qu'ils doivent écouter et regarder. Ses défenseurs répondent que sans ces protections, le cinéma français de langue française disparaîtrait, englouti par la production hollywoodienne aux budgets sans commune mesure. Le paradoxe est frappant : la France est à la fois l'un des plus grands exportateurs culturels du monde — troisième exportateur mondial de films derrière les États-Unis et le Royaume-Uni — ET le pays le plus protecteur de sa culture. La politique a fonctionné : la France produit plus de films par habitant que tout pays comparable, et le cinéma français reste une référence mondiale. Cannes est la preuve vivante que protéger une culture ne l'isole pas — cela peut, au contraire, lui donner la force de rayonner sur le monde entier.`,
            native: `France has defended for decades a simple but radical idea: culture is not a commodity like steel or cars. It is a public good, carrying national identity and collective memory, which cannot be surrendered entirely to market forces. This conviction is captured by a phrase that has become famous worldwide: "l'exception culturelle" — the cultural exception. It rests on the idea that cinematographic, musical, literary and audiovisual works deserve different treatment from ordinary industrial products, because they express who we are — not merely what we consume.

The cultural exception had its defining moment during the 1993 GATT negotiations, the international agreement that would become the foundation of the World Trade Organisation. The United States demanded that audiovisual products — films, series, music — be subject to free trade rules, like any other economic sector. France, led by its culture minister Jack Lang, refused categorically and brought all the European countries with it. The diplomatic confrontation was intense. France ultimately secured the exclusion of audiovisual content from free trade rules: states would be able to continue subsidising and protecting their national cultural production. It was a major political victory — and a precedent that continues to influence international trade negotiations today.

In practice, the cultural exception translates into a system of support for French creative production that is unique in the world. The CNC — Centre National du Cinéma et de l'Image Animée (National Centre for Cinema and the Moving Image) — finances film production through a levy applied to every cinema ticket sold and to the subscriptions of streaming platforms such as Netflix, which are required to invest in French productions. Television channels are subject to obligations to broadcast French-origin content. And since the 1994 Toubon law, radio stations must devote at least 40% of their music programming to songs in the French language, half of which must be by new artists. That same Toubon law makes French the mandatory language of advertising, education, public services and contracts in France.

The Académie française, for its part, has been watching over the language since 1635. Founded by Cardinal Richelieu under Louis XIII, it publishes the official dictionary of the French language and rules on neologisms. Its battle against Anglicisms is well known — and sometimes a losing one. "Smartphone" has won out over the "ordiphone" it proposed. But the Académie française remains a powerful symbol of the French attachment to their language as national heritage. For France, language is not merely a communication tool: it is the substance of French thought, and its preservation is a matter of state.

The cultural exception is frequently criticised as a form of paternalistic protectionism — the state deciding on behalf of citizens what they should listen to and watch. Its defenders reply that without these protections, French-language French cinema would disappear, swallowed by Hollywood productions with incomparably larger budgets. The paradox is striking: France is simultaneously one of the world's great cultural exporters — the world's third largest film exporter after the United States and the United Kingdom — AND the country most protective of its culture. The policy has worked: France produces more films per capita than any comparable country, and French cinema remains a global reference. Cannes is living proof that protecting a culture does not isolate it — it can, on the contrary, give it the strength to shine across the entire world.`
        },

        cultureVocab: [
            {
                word: "l'exception culturelle",
                translation: "the cultural exception",
                culturalNote: "The specific term coined during the 1993 GATT negotiations. It argues that cultural goods require different rules from ordinary trade because they carry identity, history and values that cannot be priced."
            },
            {
                word: "le CNC (Centre National du Cinéma)",
                translation: "the National Centre for Cinema and the Moving Image",
                culturalNote: "A levy of about 10.72% is applied to all cinema tickets, and streaming platforms operating in France must pay into the fund. This makes French cinema one of the most publicly subsidised in the world — and one of the most productive."
            },
            {
                word: "les quotas culturels / les quotas de diffusion",
                translation: "cultural quotas / broadcast quotas",
                culturalNote: "France requires radio stations to play at least 40% French-language music, with half of that being new artists. The law was controversial when introduced in 1994 — music industry executives said it was protectionist; artists said it saved French music."
            },
            {
                word: "le rayonnement culturel",
                translation: "cultural influence / cultural soft power",
                culturalNote: "The French concept of rayonnement (literally \"radiance\" or \"radiation\") describes France's aspiration to spread its culture, language and values globally. The word implies both genuine cultural richness and a certain prestige-conscious diplomacy."
            },
            {
                word: "la francophonie",
                translation: "the French-speaking world",
                culturalNote: "The Organisation Internationale de la Francophonie has 88 member states and governments. More people learn French as a second language in Africa than in France itself. Projections suggest French could be the most spoken language in the world by 2100, driven by demographic growth in Francophone Africa."
            }
        ],

        questions: [
            {
                id: "fr-c-b1-3-q1",
                type: "comprehension",
                prompt: {
                    native: "What was France's main argument during the 1993 GATT negotiations?",
                    target: "Quel était le principal argument de la France lors des négociations du GATT en 1993 ?"
                },
                options: [
                    "Culture is a public good that expresses national identity, not a commodity subject to free trade rules",
                    "French films were technically superior and needed no protection from competition",
                    "Hollywood studios were guilty of illegal dumping and should be taxed",
                    "The audiovisual sector was too small to be included in trade negotiations"
                ],
                answer: "Culture is a public good that expresses national identity, not a commodity subject to free trade rules"
            },
            {
                id: "fr-c-b1-3-q2",
                type: "comprehension",
                prompt: {
                    native: "What does the 1994 Toubon law on radio require?",
                    target: "Qu'exige la loi Toubon de 1994 en matière de radio ?"
                },
                options: [
                    "At least 40% of songs played on French radio must be in the French language",
                    "All radio presenters must speak French without any foreign accent",
                    "Foreign-language music is banned entirely from French public radio",
                    "Radio stations must broadcast one hour of classical French music per day"
                ],
                answer: "At least 40% of songs played on French radio must be in the French language"
            },
            {
                id: "fr-c-b1-3-q3",
                type: "reflection",
                prompt: {
                    native: "France's cultural protection policies are sometimes called paternalistic — the state deciding what citizens should hear and watch. Do you think governments should actively protect national culture from foreign competition, or should audiences be free to choose without quotas and subsidies?",
                    target: "Les politiques de protection culturelle de la France sont parfois qualifiées de paternalistes — l'État décidant ce que les citoyens doivent entendre et regarder. Pensez-vous que les gouvernements devraient protéger activement la culture nationale de la concurrence étrangère, ou que les publics devraient être libres de choisir sans quotas ni subventions ?"
                }
            }
        ],

        didYouKnow: {
            native: "Despite its protectionist policies, France is the world's third largest exporter of films, after the United States and the United Kingdom. The Cannes Film Festival, which France has hosted since 1946, is considered the most prestigious film festival in the world. Somewhat paradoxically, France's cultural exception has not isolated French culture — it has sustained an industry that continues to win international awards and influence global cinema. The Palme d'Or has gone to directors from over 30 countries, cementing Cannes as a genuinely global, not merely French, institution.",
            target: "Malgré ses politiques protectionnistes, la France est le troisième exportateur mondial de films, après les États-Unis et le Royaume-Uni. Le Festival de Cannes, que la France accueille depuis 1946, est considéré comme le festival de cinéma le plus prestigieux du monde. Paradoxalement, l'exception culturelle française n'a pas isolé la culture française — elle a soutenu une industrie qui continue de remporter des récompenses internationales et d'influencer le cinéma mondial. La Palme d'Or a été décernée à des réalisateurs de plus de 30 pays, faisant de Cannes une institution véritablement mondiale, et pas seulement française."
        },

        relatedIds: ["fr-c-a2-3", "fr-c-b1-1"]
    }
]
