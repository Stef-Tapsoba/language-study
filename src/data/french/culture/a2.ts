// ─────────────────────────────────────────────────────────────────────────────
// FRENCH A2 CULTURE
// src/data/french/culture/a2.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"

export const frA2Culture: CultureEpisode[] = [
    {
        id: "fr-c-a2-1",
        language: "fr",
        level: "A2",
        category: "daily-life",
        region: "france",
        title: {
            native: "La boulangerie française — le cœur du quartier",
            target: "La boulangerie française"
        },
        subtitle: "Why the French bakery is more than a shop — it is the social heartbeat of every neighbourhood.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
                caption: {
                    native: "A traditional French boulangerie — a daily destination for millions",
                    target: "Une boulangerie française traditionnelle — une destination quotidienne pour des millions de personnes"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800",
                caption: {
                    native: "Fresh baguettes ready for the morning rush",
                    target: "Des baguettes fraîches prêtes pour l'affluence du matin"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
                caption: {
                    native: "Croissants, pain au chocolat and classic viennoiseries",
                    target: "Croissants, pains au chocolat et viennoiseries classiques"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `En France, aller à la boulangerie n'est pas une simple course. C'est un rituel quotidien qui structure la journée et crée du lien social dans le quartier.

La boulangerie ouvre tôt le matin — souvent à six heures trente — et les Français s'y arrêtent avant le travail pour acheter leur baguette. La baguette se mange fraîche ; elle perd sa qualité après quelques heures. C'est pourquoi beaucoup de familles françaises achètent leur pain deux fois par jour : le matin et en fin d'après-midi avant le dîner.

La loi française est stricte sur le mot « boulangerie ». Pour utiliser ce nom, le boulanger doit fabriquer son pain sur place, avec ses propres mains. Un magasin qui vend du pain industriel livré par camion ne peut pas s'appeler boulangerie. Cette règle protège le métier artisanal.

La boulangerie vend aussi des viennoiseries — des croissants, des pains au chocolat, des brioches. Le matin du dimanche, les familles achètent ces gourmandises pour le petit-déjeuner. C'est l'un des plaisirs simples de la vie française.

Dans chaque village et chaque quartier de ville, la boulangerie est un endroit de rencontre. On discute avec le boulanger, on connaît ses voisins, on échange des nouvelles. Quand une boulangerie ferme dans un village, c'est toute une communauté qui perd quelque chose d'important.

En 2022, la baguette française et le savoir-faire artisanal des boulangers ont été inscrits au Patrimoine Culturel Immatériel de l'UNESCO. Pour la France, ce n'est pas une surprise : le pain n'est pas seulement de la nourriture. C'est une institution.`,
            native: `In France, going to the bakery is not simply running an errand. It is a daily ritual that structures the day and creates social bonds within the neighbourhood.

The bakery opens early in the morning — often at six thirty — and French people stop there before work to buy their baguette. The baguette is eaten fresh; it loses its quality after a few hours. This is why many French families buy their bread twice a day: in the morning and late in the afternoon before dinner.

French law is strict about the word "boulangerie". To use this name, the baker must make their bread on the premises, by hand. A shop that sells industrial bread delivered by lorry cannot call itself a boulangerie. This rule protects the artisan trade.

The bakery also sells viennoiseries — croissants, pains au chocolat, brioches. On Sunday morning, families buy these treats for breakfast. It is one of the simple pleasures of French life.

In every village and every city neighbourhood, the bakery is a meeting place. You chat with the baker, you recognise your neighbours, you exchange news. When a bakery closes in a village, a whole community loses something important.

In 2022, the French baguette and the artisan bakers' know-how were added to UNESCO's Intangible Cultural Heritage list. For France, this came as no surprise: bread is not just food. It is an institution.`
        },

        cultureVocab: [
            {
                word: "la boulangerie",
                translation: "bakery",
                culturalNote: "A legally protected term in France: only a shop where bread is made on the premises by a qualified baker can use the name. Supermarket in-store bakeries must use different terminology."
            },
            {
                word: "la baguette",
                translation: "baguette (long French bread stick)",
                culturalNote: "By law, a traditional baguette contains only flour, water, salt and yeast — no preservatives or additives. It weighs 250g and measures roughly 65cm. A baguette that costs more than a standard price is considered a luxury item."
            },
            {
                word: "les viennoiseries",
                translation: "pastries (croissants, pains au chocolat, brioches)",
                culturalNote: "The name comes from Vienna (Vienne), where the laminated dough technique originated. French bakers adopted and perfected it in the 19th century — the croissant is now considered quintessentially French."
            },
            {
                word: "le savoir-faire",
                translation: "know-how, artisan craft knowledge",
                culturalNote: "In French culture, savoir-faire refers to a skilled, practiced expertise passed down through apprenticeship. It is a word of pride and carries the weight of cultural continuity."
            },
            {
                word: "le quartier",
                translation: "neighbourhood, district",
                culturalNote: "French cities are organised around walkable quartiers, each with its own boulangerie, boucherie (butcher), pharmacie and café. The quartier is a unit of social life, not just geography."
            }
        ],

        questions: [
            {
                id: "fr-c-a2-1-q1",
                type: "comprehension",
                prompt: {
                    native: "Why do many French families buy bread twice a day?",
                    target: "Pourquoi beaucoup de familles françaises achètent-elles du pain deux fois par jour ?"
                },
                options: [
                    "Because the bakery only makes a limited quantity each time",
                    "Because the baguette loses its quality after a few hours",
                    "Because bread is very cheap in France",
                    "Because French law requires it"
                ],
                answer: "Because the baguette loses its quality after a few hours"
            },
            {
                id: "fr-c-a2-1-q2",
                type: "comprehension",
                prompt: {
                    native: "What legal condition must a shop meet to call itself a 'boulangerie'?",
                    target: "Quelle condition légale un magasin doit-il respecter pour s'appeler 'boulangerie' ?"
                },
                options: [
                    "It must be open seven days a week",
                    "It must sell at least five types of bread",
                    "It must make its bread on the premises",
                    "It must be owned by a French citizen"
                ],
                answer: "It must make its bread on the premises"
            },
            {
                id: "fr-c-a2-1-q3",
                type: "reflection",
                prompt: {
                    native: "Is there a shop or place in your country that plays a similar social role to the French boulangerie — somewhere people go daily and exchange news with neighbours?",
                    target: "Y a-t-il dans votre pays un magasin ou un endroit qui joue un rôle social similaire à la boulangerie française — un endroit où l'on va chaque jour et où l'on échange des nouvelles avec les voisins ?"
                }
            }
        ],

        didYouKnow: {
            native: "France has approximately 35,000 artisan boulangeries — one for roughly every 2,000 inhabitants. By comparison, the number has halved since the 1970s, but France still has far more independent bakeries per capita than any other country in the world. When a village loses its last bakery, it is officially considered a food desert and may receive state subsidies to attract a new baker.",
            target: "La France compte environ 35 000 boulangeries artisanales — soit une pour environ 2 000 habitants. Ce nombre a diminué de moitié depuis les années 1970, mais la France possède encore de loin le plus grand nombre de boulangeries indépendantes par habitant au monde. Quand un village perd sa dernière boulangerie, il est officiellement considéré comme un désert alimentaire et peut recevoir des subventions de l'État pour attirer un nouveau boulanger."
        },

        relatedIds: ["fr-c-a1-1", "fr-c-b1-1"]
    },
    {
        id: "fr-c-a2-2",
        language: "fr",
        level: "A2",
        category: "traditions",
        region: "france",
        title: {
            native: "Les fêtes françaises — quand la France s'arrête",
            target: "Les fêtes françaises"
        },
        subtitle: "France has more public holidays than almost any country in Europe — and each one tells a story.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?w=800",
                caption: {
                    native: "Fireworks over Paris on Bastille Day, 14 July",
                    target: "Feux d'artifice au-dessus de Paris le 14 juillet"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1543158181-e6f9f6712055?w=800",
                caption: {
                    native: "Muguet (lily of the valley) — the symbol of 1st May in France",
                    target: "Le muguet — symbole du 1er mai en France"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `La France a onze jours fériés officiels par an. Ce chiffre est l'un des plus élevés d'Europe. Chaque fête a une histoire et une signification particulière.

Le 14 juillet est la fête la plus importante et la plus spectaculaire. Ce jour commémore la prise de la Bastille en 1789, le début de la Révolution française. Dans tout le pays, il y a des défilés militaires, des bals populaires et des feux d'artifice. À Paris, le défilé sur les Champs-Élysées est retransmis en direct à la télévision.

Le 1er mai, la Fête du Travail, est un jour férié particulier. Les syndicats organisent des manifestations dans les grandes villes. Mais il y a aussi une tradition plus douce : offrir du muguet à ses proches. Ce geste symbolise le printemps et porte bonheur. La vente de muguet est libre ce jour-là — même les particuliers peuvent en vendre dans la rue sans licence.

À Noël, le repas de la veille — le soir du 24 décembre — est plus important que le repas du 25. Les familles se réunissent pour un long dîner : foie gras, huîtres, dinde ou chapon, et bûche de Noël comme dessert. Les enfants attendent le Père Noël, qui passe dans la nuit.

Le 8 mai commémore la fin de la Seconde Guerre mondiale en Europe en 1945. Le 11 novembre rappelle l'armistice de 1918 et la fin de la Première Guerre mondiale. Ces deux dates sont l'occasion de cérémonies officielles dans les mairies et devant les monuments aux morts.

L'Assomption (le 15 août) et la Toussaint (le 1er novembre) sont des fêtes religieuses catholiques. Même si la France est officiellement laïque, ces jours sont fériés pour toute la population.`,
            native: `France has eleven official public holidays per year. This figure is one of the highest in Europe. Each holiday has its own history and particular significance.

The 14th of July is the most important and most spectacular holiday. This day commemorates the storming of the Bastille in 1789, the beginning of the French Revolution. Throughout the country, there are military parades, street dances and fireworks. In Paris, the parade on the Champs-Élysées is broadcast live on television.

The 1st of May, Labour Day, is a special public holiday. Trade unions organise marches in major cities. But there is also a gentler tradition: giving lily of the valley to loved ones. This gesture symbolises spring and brings good luck. The sale of muguet is unrestricted that day — even private individuals can sell it in the street without a licence.

At Christmas, the meal on Christmas Eve — the evening of 24 December — is more important than the meal on the 25th. Families gather for a long dinner: foie gras, oysters, turkey or capon, and a bûche de Noël for dessert. Children wait for Father Christmas, who comes during the night.

The 8th of May commemorates the end of the Second World War in Europe in 1945. The 11th of November marks the armistice of 1918 and the end of the First World War. Both dates are occasions for official ceremonies at town halls and in front of war memorials.

The Assumption (15 August) and All Saints' Day (1 November) are Catholic religious holidays. Even though France is officially secular, these days are public holidays for the entire population.`
        },

        cultureVocab: [
            {
                word: "jour férié",
                translation: "public holiday",
                culturalNote: "On a jour férié, most shops and businesses close. If a holiday falls on a Thursday, many French people take the Friday off too — this is called 'faire le pont' (to bridge the gap to the weekend)."
            },
            {
                word: "le muguet",
                translation: "lily of the valley",
                culturalNote: "On 1st May, giving a sprig of muguet with 13 bells (clochettes) is considered especially lucky. The tradition dates to 1561, when King Charles IX received a muguet as a good-luck charm and decided to offer one to all the ladies of his court."
            },
            {
                word: "la bûche de Noël",
                translation: "Christmas log cake",
                culturalNote: "A traditional French Christmas dessert shaped like a log. It recalls the old custom of burning a real log on Christmas Eve to bring warmth and luck. Today it is a sponge cake rolled with cream and decorated to look like bark."
            },
            {
                word: "laïque / laïcité",
                translation: "secular / secularism",
                culturalNote: "Since 1905, France has a strict separation of church and state (laïcité). The state does not fund religion, and religious symbols are banned in state schools and public offices. Yet several Catholic holidays remain national public holidays — a historical remnant the French rarely question."
            },
            {
                word: "faire le pont",
                translation: "to make a long weekend (lit. 'to bridge')",
                culturalNote: "When a public holiday falls on a Thursday or Tuesday, many French workers take the adjacent Friday or Monday off, creating a four-day weekend. This is widely accepted in French work culture and sometimes planned for in advance by employers."
            }
        ],

        questions: [
            {
                id: "fr-c-a2-2-q1",
                type: "comprehension",
                prompt: {
                    native: "What does the 14th of July commemorate?",
                    target: "Que commémore le 14 juillet ?"
                },
                options: [
                    "The end of the Second World War",
                    "The storming of the Bastille and the French Revolution",
                    "The birth of the French Republic",
                    "The return of Napoleon Bonaparte"
                ],
                answer: "The storming of the Bastille and the French Revolution"
            },
            {
                id: "fr-c-a2-2-q2",
                type: "comprehension",
                prompt: {
                    native: "What is special about selling muguet on 1st May?",
                    target: "Qu'est-ce qui est particulier concernant la vente de muguet le 1er mai ?"
                },
                options: [
                    "It is illegal to sell it without a special permit",
                    "Only florists are allowed to sell it",
                    "Anyone can sell it in the street without a licence",
                    "It must be sold at a fixed government price"
                ],
                answer: "Anyone can sell it in the street without a licence"
            },
            {
                id: "fr-c-a2-2-q3",
                type: "reflection",
                prompt: {
                    native: "Does your country have a national day similar to Bastille Day? How do people celebrate it?",
                    target: "Votre pays a-t-il une fête nationale similaire au 14 juillet ? Comment les gens la célèbrent-ils ?"
                }
            }
        ],

        didYouKnow: {
            native: "The phrase 'faire le pont' (to bridge) is so embedded in French culture that the government sometimes moves a public holiday to a Monday or Friday to avoid the phenomenon — or to encourage it officially for the economy. In 2023, several companies even began publishing their official 'pont calendars' for the year so employees could plan their leave in advance.",
            target: "L'expression « faire le pont » est tellement ancrée dans la culture française que le gouvernement déplace parfois un jour férié au lundi ou au vendredi pour éviter le phénomène — ou pour l'encourager officiellement pour l'économie. En 2023, certaines entreprises ont même commencé à publier leur « calendrier des ponts » annuel pour que les salariés puissent planifier leurs congés à l'avance."
        },

        relatedIds: ["fr-c-a1-3", "fr-r-a2-1"]
    },
    {
        id: "fr-c-a2-3",
        language: "fr",
        level: "A2",
        category: "arts",
        region: "france",
        title: {
            native: "Le cinéma français — une passion nationale",
            target: "Le cinéma français"
        },
        subtitle: "France invented cinema and has never stopped treating it as an art form — not just entertainment.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800",
                caption: {
                    native: "A classic French cinema — the big screen remains central to French culture",
                    target: "Un cinéma français classique — la grande salle reste au cœur de la culture française"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=800",
                caption: {
                    native: "The red carpet at Cannes — the world's most prestigious film festival",
                    target: "Le tapis rouge à Cannes — le festival de cinéma le plus prestigieux du monde"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `Le cinéma a été inventé en France. Le 28 décembre 1895, les frères Lumière ont organisé la première projection publique payante de l'histoire à Paris, au Grand Café du boulevard des Capucines. Ce jour est souvent considéré comme la naissance officielle du cinéma.

Depuis, la France n'a jamais cessé de considérer le cinéma comme un art à part entière. En 1959, un groupe de jeunes cinéastes — François Truffaut, Jean-Luc Godard, Claude Chabrol — a révolutionné le cinéma mondial avec la « Nouvelle Vague ». Leurs films étaient personnels, improvisés et très différents du cinéma hollywoodien.

Aujourd'hui, la France produit environ 250 films par an. C'est l'un des pays qui produit le plus de films en dehors des États-Unis. L'État français soutient fortement le cinéma : il existe un système de financement public géré par le Centre National du Cinéma (le CNC) qui aide les réalisateurs à financer leurs projets.

Le Festival de Cannes, qui a lieu chaque année en mai sur la Côte d'Azur, est le festival de cinéma le plus célèbre du monde. La Palme d'Or, la récompense suprême, est l'un des prix les plus convoités du septième art.

Les Français vont régulièrement au cinéma. Avec environ 200 millions d'entrées par an, la France est le pays européen où l'on va le plus au cinéma. Les films étrangers, y compris les films américains, sont presque toujours doublés en français plutôt que sous-titrés. C'est une façon de protéger la langue française.`,
            native: `Cinema was invented in France. On 28 December 1895, the Lumière brothers organised the first public paid film screening in history in Paris, at the Grand Café on the Boulevard des Capucines. This day is often considered the official birth of cinema.

Since then, France has never stopped treating cinema as a fully recognised art form. In 1959, a group of young filmmakers — François Truffaut, Jean-Luc Godard, Claude Chabrol — revolutionised world cinema with the 'Nouvelle Vague' (New Wave). Their films were personal, improvised and very different from Hollywood cinema.

Today, France produces around 250 films per year. It is one of the countries that produces the most films outside the United States. The French state strongly supports cinema: there is a public funding system managed by the Centre National du Cinéma (the CNC) that helps directors finance their projects.

The Cannes Film Festival, held each year in May on the Côte d'Azur, is the most famous film festival in the world. The Palme d'Or, the supreme award, is one of the most coveted prizes in the seventh art.

The French go to the cinema regularly. With around 200 million admissions per year, France is the European country where people go to the cinema the most. Foreign films, including American films, are almost always dubbed into French rather than subtitled. This is a way of protecting the French language.`
        },

        cultureVocab: [
            {
                word: "les frères Lumière",
                translation: "the Lumière brothers",
                culturalNote: "Auguste and Louis Lumière were engineers and photographers from Lyon. Their surname, Lumière, means 'light' in French — an almost poetic fit for the inventors of cinema. Their first film, L'Arrivée d'un train en gare de La Ciotat (1896), reportedly caused the audience to panic, believing a real train was coming at them."
            },
            {
                word: "la Nouvelle Vague",
                translation: "the New Wave",
                culturalNote: "A French film movement (late 1950s–1960s) that rejected the polished studio style of mainstream cinema. Directors shot on location with natural light and non-professional actors. The movement influenced virtually every major director who came after, from Scorsese to Tarantino."
            },
            {
                word: "la Palme d'Or",
                translation: "the Palme d'Or (golden palm) — top prize at Cannes",
                culturalNote: "Awarded since 1955, the Palme d'Or is a golden palm branch. French directors have won it more times than any other nationality. Recent international winners include films from South Korea (Parasite, 2019) and Romania, reflecting Cannes' global reach."
            },
            {
                word: "le doublage",
                translation: "dubbing",
                culturalNote: "France dubs almost all foreign films rather than showing them in the original version with subtitles. This protects the French language but is also criticised for altering performances. Cinemas that show films in their original version (version originale, or VO) are a minority but have a loyal audience."
            },
            {
                word: "le septième art",
                translation: "the seventh art (cinema)",
                culturalNote: "In French culture, the arts are numbered: architecture (1st), sculpture (2nd), painting (3rd), music (4th), literature (5th), theatre (6th) and cinema (7th). Calling cinema 'the seventh art' reflects France's conviction that filmmaking is as culturally significant as painting or music."
            }
        ],

        questions: [
            {
                id: "fr-c-a2-3-q1",
                type: "comprehension",
                prompt: {
                    native: "When and where did the Lumière brothers hold the first public film screening?",
                    target: "Quand et où les frères Lumière ont-ils organisé la première projection publique ?"
                },
                options: [
                    "In Lyon in 1889",
                    "In Paris on 28 December 1895",
                    "In Cannes in 1900",
                    "In Paris in 1910"
                ],
                answer: "In Paris on 28 December 1895"
            },
            {
                id: "fr-c-a2-3-q2",
                type: "comprehension",
                prompt: {
                    native: "Why does France dub foreign films into French rather than showing them with subtitles?",
                    target: "Pourquoi la France double-t-elle les films étrangers en français plutôt que de les sous-titrer ?"
                },
                options: [
                    "Because French audiences do not like reading subtitles",
                    "Because dubbing is cheaper than subtitling",
                    "As a way of protecting the French language",
                    "Because the government requires it by law"
                ],
                answer: "As a way of protecting the French language"
            },
            {
                id: "fr-c-a2-3-q3",
                type: "reflection",
                prompt: {
                    native: "Do you prefer watching foreign films dubbed or with subtitles? Why?",
                    target: "Préférez-vous regarder les films étrangers doublés ou sous-titrés ? Pourquoi ?"
                }
            }
        ],

        didYouKnow: {
            native: "The French government applies a special tax on cinema tickets, DVD sales and even streaming subscriptions (Netflix, Disney+, etc.) operating in France. The money goes directly into a fund managed by the CNC and is redistributed to French filmmakers. This is why small, artistic French films that might never get made in Hollywood can still find financing in France. In 2023, streaming platforms operating in France were required to invest at least 20–25% of their French revenues into French and European productions.",
            target: "Le gouvernement français applique une taxe spéciale sur les billets de cinéma, les ventes de DVD et même les abonnements aux plateformes de streaming (Netflix, Disney+, etc.) opérant en France. L'argent va directement dans un fonds géré par le CNC et est redistribué aux cinéastes français. C'est pourquoi de petits films artistiques français, qui n'auraient peut-être jamais vu le jour à Hollywood, peuvent quand même trouver un financement en France. En 2023, les plateformes de streaming opérant en France ont été obligées d'investir au moins 20 à 25 % de leurs revenus français dans des productions françaises et européennes."
        },

        relatedIds: ["fr-c-a1-2", "fr-c-a2-1"]
    }
]
