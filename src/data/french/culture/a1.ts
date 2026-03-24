// ─────────────────────────────────────────────────────────────────────────────
// FRENCH A1 CULTURE
// src/data/french/culture/a1.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"
export const frA1Culture: CultureEpisode[] = [
    {
        id: "fr-c-a1-1",
        language: "fr",
        level: "A1",
        category: "food",
        region: "france",
        title: {
            native: "Le pain quotidien — bread in French life",
            target: "Le pain quotidien"
        },
        subtitle: "Why the French baguette is a protected monument — and what happens if the bakery is closed.",

        video: {
            youtubeId: "KURH-UeAN8A",
            title: "Why The French Eat 30 Million Baguettes A Day - Traditional French Baguette",
            channelName: "DW Food",
            startSeconds: 15,   // skip cold open
            captionLang: "en"
        },

        photos: [
            {
                url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
                caption: {
                    native: "Fresh baguettes — bought twice a day in traditional households",
                    target: "Des baguettes fraîches — achetées deux fois par jour dans les foyers traditionnels"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
                caption: {
                    native: "A French boulangerie — the heartbeat of every neighbourhood",
                    target: "Une boulangerie française — le cœur de chaque quartier"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800",
                caption: {
                    native: "Cheese and bread — a French lunch needing nothing else",
                    target: "Fromage et pain — un déjeuner français qui n'a besoin de rien d'autre"
                }
            }
        ],

        body: {
            target: `Le pain est central dans la vie française. Les Français mangent du pain à chaque repas — au petit-déjeuner, au déjeuner et au dîner.

La baguette est le pain le plus célèbre. Elle mesure environ 65 centimètres et pèse 250 grammes. En France, une vraie baguette doit avoir seulement quatre ingrédients : de la farine, de l'eau, du sel et de la levure. Pas d'additifs. Le gouvernement français protège la recette par la loi.

Les Français achètent la baguette fraîche chaque jour — souvent deux fois par jour, parce qu'une baguette perd sa qualité après quelques heures. La boulangerie est essentielle dans chaque quartier. En France, il y a environ 35 000 boulangeries artisanales.

La loi française est très sérieuse sur ce sujet. Si le boulanger part en vacances, il doit informer la mairie. La mairie s'assure qu'il y a toujours une boulangerie ouverte dans chaque quartier.

En 2022, la baguette française a été inscrite au Patrimoine Culturel Immatériel de l'UNESCO. C'est un honneur normalement réservé à des pratiques comme la calligraphie japonaise ou les danses traditionnelles. Pour la France, le pain est une pratique culturelle, pas seulement de la nourriture.

Manger du pain dans la rue est normal en France. Beaucoup de Français mangent la baguette en marchant — en arrachant des morceaux du bout de la baguette. C'est une image iconique de la vie française.`,
            native: `Bread is central to French life. The French eat bread at every meal — at breakfast, lunch, and dinner.

The baguette is the most famous bread. It measures about 65 centimetres and weighs 250 grams. In France, a true baguette must have only four ingredients: flour, water, salt and yeast. No additives. The French government protects the recipe by law.

The French buy fresh baguettes every day — often twice a day, because a baguette loses its quality after a few hours. The bakery is essential in every neighbourhood. In France, there are about 35,000 artisan bakeries.

French law is very serious on this subject. If the baker goes on holiday, they must inform the town hall. The town hall ensures there is always a bakery open in every neighbourhood.

In 2022, the French baguette was added to UNESCO's Intangible Cultural Heritage list. This is an honour normally reserved for practices like Japanese calligraphy or traditional dances. For France, bread is a cultural practice, not just food.

Eating bread in the street is normal in France. Many French people eat their baguette while walking — tearing off pieces from the end. It is an iconic image of French life.`
        },

        simpleTarget: `Le pain est très important en France.
Les Français mangent du pain chaque jour.
La baguette est le pain le plus populaire.
Elle est longue et blanche.
Dans chaque quartier, il y a une boulangerie.
Les gens achètent une baguette fraîche le matin et le soir.
La baguette française est très célèbre dans le monde.`,

        cultureVocab: [
            {
                word: "la baguette",
                translation: "baguette (French bread)",
                culturalNote: "Protected by French law: it must be made on the premises from only four ingredients — flour, water, salt, and yeast. No additives allowed. Bakers cannot sell pre-made bread and still call it a baguette."
            },
            {
                word: "la boulangerie",
                translation: "bakery",
                culturalNote: "A boulangerie must bake its bread on the premises to use the name. There are about 35,000 artisan bakeries in France — one in every neighbourhood. The government ensures access to fresh bread everywhere."
            },
            {
                word: "le quartier",
                translation: "neighbourhood, district",
                culturalNote: "French urban life is strongly organised around the quartier — a walkable area with its own butcher, baker, café and market. The boulangerie is its anchor."
            },
            {
                word: "célèbre",
                translation: "famous, celebrated",
                culturalNote: "In 2022, the French baguette was added to UNESCO's Intangible Cultural Heritage list — making it officially célèbre on a global stage alongside practices like Japanese calligraphy."
            },
            {
                word: "les Français",
                translation: "the French (people)",
                culturalNote: "The French eat about 30 million baguettes per day. Many buy a fresh baguette twice daily, because a baguette loses its quality within a few hours of baking."
            }
        ],

        questions: [
            {
                id: "fr-c-a1-1-q1",
                type: "comprehension",
                prompt: { native: "How many ingredients does a traditional French baguette contain?", target: "Combien d'ingrédients contient une baguette française traditionnelle?" },
                options: ["Two", "Four", "Six", "Eight"],
                answer: "Four"
            },
            {
                id: "fr-c-a1-1-q2",
                type: "comprehension",
                prompt: { native: "What did UNESCO do with the French baguette in 2022?", target: "Qu'est-ce que l'UNESCO a fait avec la baguette française en 2022?" },
                options: [
                    "Declared it the world's best bread",
                    "Added it to the Intangible Cultural Heritage list",
                    "Awarded France a food prize",
                    "Named Paris a UNESCO food city"
                ],
                answer: "Added it to the Intangible Cultural Heritage list"
            },
            {
                id: "fr-c-a1-1-q3",
                type: "reflection",
                prompt: { native: "Is there a food in your country that is as culturally important as bread in France? What would happen if it disappeared?", target: "Is there a food in your country that is as culturally important as bread in France? What would happen if it disappeared?" }
            }
        ],

        didYouKnow: {
            native: "French law requires that if a baker closes their shop for holidays, they must notify the local mayor's office, which will ensure that at least one boulangerie in the area remains open at all times. Bread access is treated as a public service.",
            target: "La loi française exige que si un boulanger ferme sa boutique pour les vacances, il doit en informer la mairie, qui s'assurera qu'au moins une boulangerie de la zone reste ouverte en permanence. L'accès au pain est traité comme un service public."
        },

        relatedIds: ["fr-c-a1-2"]
    },

    {
        id: "fr-c-a1-2",
        language: "fr",
        level: "A1",
        category: "geography",
        region: "west-africa",
        title: {
            native: "Le français en Afrique — la plus grande communauté francophone du monde",
            target: "Le français en Afrique"
        },
        subtitle: "More people speak French in Africa than in France — and the African variety is evolving into something new.",

        video: {
            youtubeId: "rTq2DMDhgUE",
            title: "How Did French Language Spread In Africa?",
            channelName: "African Roots And Routes",
            captionLang: "fr"
        },

        photos: [
            {
                url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
                caption: {
                    native: "Dakar, Senegal — one of the great Francophone cities of Africa",
                    target: "Dakar, Sénégal — l'une des grandes villes francophones d'Afrique"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
                caption: {
                    native: "Students in a French-language school in Abidjan, Côte d'Ivoire",
                    target: "Élèves dans une école francophone à Abidjan, Côte d'Ivoire"
                }
            }
        ],

        body: {
            target: `La plupart des gens pensent que le français est une langue européenne. Mais la vérité est différente.

Aujourd'hui, il y a environ 321 millions de francophones dans le monde. La moitié vivent en Afrique. Dans vingt-neuf pays africains, le français est une langue officielle. Les pays les plus peuplés de la francophonie ne sont pas en Europe — ils sont en Afrique.

La République Démocratique du Congo est le pays francophone le plus peuplé du monde — devant la France elle-même. À Kinshasa, la capitale, plus de 12 millions de personnes parlent français chaque jour.

Le français en Afrique n'est pas identique au français de France. Au Sénégal, au Mali, en Côte d'Ivoire et au Cameroun, les gens parlent un français avec un accent local, des mots locaux et parfois des structures grammaticales différentes. C'est une évolution naturelle de la langue — exactement comme l'anglais est différent en Australie, aux États-Unis et en Jamaïque.

Le nouchi est un exemple fascinant. C'est une langue créole parlée en Côte d'Ivoire, qui mélange le français avec des langues locales comme le dioula. Le nouchi est devenu une lingua franca — une langue commune — pour les jeunes d'Abidjan.

Pour les apprenants de français, c'est une bonne nouvelle. Apprendre le français ouvre des portes non seulement en France et en Belgique, mais aussi dans toute l'Afrique — sur un continent avec une économie en forte croissance.`,
            native: `Most people think that French is a European language. But the reality is different.

Today, there are about 321 million French speakers in the world. Half live in Africa. In twenty-nine African countries, French is an official language. The most populous countries of the Francophonie are not in Europe — they are in Africa.

The Democratic Republic of Congo is the most populous French-speaking country in the world — ahead of France itself. In Kinshasa, the capital, more than 12 million people speak French every day.

French in Africa is not identical to French in France. In Senegal, Mali, Côte d'Ivoire and Cameroon, people speak French with a local accent, local words and sometimes different grammatical structures. This is a natural evolution of the language — exactly as English is different in Australia, the United States and Jamaica.

Nouchi is a fascinating example. It is a creole language spoken in Côte d'Ivoire, which mixes French with local languages like Dioula. Nouchi has become a lingua franca — a common language — for young people in Abidjan.

For French learners, this is good news. Learning French opens doors not only in France and Belgium, but across all of Africa — a continent with a rapidly growing economy.`
        },

        simpleTarget: `Le français est une grande langue internationale.
Des millions de personnes parlent français dans le monde.
Il y a des francophones en Europe, en Afrique et au Canada.
En Afrique, beaucoup de personnes parlent français à l'école.
La République Démocratique du Congo est un grand pays francophone.
Apprendre le français est utile dans de nombreux pays.
C'est une belle langue avec une grande culture.`,

        cultureVocab: [
            {
                word: "francophone",
                translation: "French-speaking (person or country)",
                culturalNote: "From 'franco' (French) + 'phone' (voice/sound). There are about 321 million francophones worldwide — more than half live in Africa, not Europe."
            },
            {
                word: "la francophonie",
                translation: "the French-speaking world",
                culturalNote: "Both a geographic concept and a political organisation (L'Organisation internationale de la Francophonie) with 88 member states and governments."
            },
            {
                word: "une langue internationale",
                translation: "an international language",
                culturalNote: "French is an official language in 29 African countries, as well as Canada, Belgium, and Switzerland. It is one of the six official languages of the United Nations."
            },
            {
                word: "utile",
                translation: "useful",
                culturalNote: "Learning French opens doors across Africa, Europe, and Canada — making it one of the most useful languages in the world for travel and professional life."
            },
            {
                word: "des millions",
                translation: "millions (of people)",
                culturalNote: "By 2050, demographers predict there will be over 700 million French speakers — almost entirely due to population growth in Africa."
            }
        ],

        questions: [
            {
                id: "fr-c-a1-2-q1",
                type: "comprehension",
                prompt: { native: "Which country has the most French speakers in the world?", target: "Quel pays a le plus grand nombre de francophones au monde?" },
                options: ["France", "Belgium", "The Democratic Republic of Congo", "Senegal"],
                answer: "The Democratic Republic of Congo"
            },
            {
                id: "fr-c-a1-2-q2",
                type: "reflection",
                prompt: { native: "Did you know that most French speakers live in Africa? Does this change how you think about learning French?", target: "Did you know that most French speakers live in Africa? Does this change how you think about learning French?" }
            }
        ],

        didYouKnow: {
            native: "By 2050, demographers predict there will be over 700 million French speakers — making it potentially the most widely spoken language in the world by number of speakers, ahead of English and Mandarin, almost entirely due to population growth in Africa.",
            target: "D'ici 2050, les démographes prévoient plus de 700 millions de francophones — ce qui pourrait faire du français la langue la plus parlée au monde en nombre de locuteurs, devant l'anglais et le mandarin, presque entièrement grâce à la croissance démographique en Afrique."
        }
    },

    {
        id: "fr-c-a1-3",
        language: "fr",
        level: "A1",
        category: "daily-life",
        region: "france",
        title: {
            native: "Le café en France — plus qu'une boisson",
            target: "Le café en France"
        },
        subtitle: "In France, the café is not just somewhere to drink coffee — it is a social institution with its own rules, rituals, and philosophy.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800",
                caption: {
                    native: "A classic Parisian café terrace — the heartbeat of French social life",
                    target: "Une terrasse de café parisien — le cœur de la vie sociale française"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
                caption: {
                    native: "An espresso — the standard French coffee order, drunk standing at the counter",
                    target: "Un expresso — la commande de café standard en France, bu debout au comptoir"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800",
                caption: {
                    native: "Café terraces are guarded jealously — even in autumn and winter with heat lamps",
                    target: "Les terrasses sont jalousement gardées — même en automne et en hiver avec des lampes chauffantes"
                }
            }
        ],

        body: {
            target: `En France, le café est bien plus qu'une boisson. C'est un espace social, un lieu de rencontre et un symbole de la culture française.

Il y a environ 35 000 cafés en France. Ils sont ouverts tôt le matin et ferment tard le soir. Le café du matin est souvent pris debout au comptoir — c'est plus rapide et moins cher qu'une table.

Le café typique en France, c'est un expresso court et fort — pas les grandes tasses américaines. On dit simplement « un café » ou « un expresso ». Le café au lait existe, mais c'est une boisson du matin, pas une boisson de l'après-midi.

La terrasse est sacrée. Les Français adorent s'asseoir dehors pour regarder les passants, lire le journal ou parler avec des amis. Même en hiver, beaucoup de Français restent en terrasse sous les lampes chauffantes.

Le rôle social du café est très important. On se retrouve au café pour prendre l'apéritif avant le dîner, pour lire un livre, pour travailler sur un ordinateur ou simplement pour regarder la vie qui passe. Le café est un refuge de la vie quotidienne.

En France, il n'est pas impoli de rester longtemps au café après avoir commandé. Le serveur ne vous donne pas l'addition automatiquement — vous devez la demander. Prendre son temps est tout à fait normal.`,
            native: `In France, the café is much more than a drink. It is a social space, a meeting place, and a symbol of French culture.

There are about 35,000 cafés in France. They open early in the morning and close late in the evening. Morning coffee is often taken standing at the counter — it is quicker and cheaper than a table.

The typical coffee in France is a short, strong espresso — not the large American cups. You simply say "un café" or "un expresso". Café au lait exists, but it is a morning drink, not an afternoon drink.

The terrace is sacred. The French love sitting outside to watch passers-by, read the newspaper, or talk with friends. Even in winter, many French people stay on the terrace under heat lamps.

The social role of the café is very important. People meet at the café for an aperitif before dinner, to read a book, to work on a laptop, or simply to watch life go by. The café is a refuge of daily life.

In France, it is not rude to stay a long time at the café after ordering. The waiter does not automatically bring the bill — you have to ask for it. Taking your time is perfectly normal.`
        },

        simpleTarget: `En France, le café est très important.
Il y a des cafés dans chaque ville et chaque village.
Les Français aiment prendre un café le matin.
On dit "un café" pour commander un expresso.
La terrasse du café est un endroit pour parler avec des amis.
On peut rester longtemps au café — c'est normal en France.`,

        cultureVocab: [
            {
                word: "le comptoir",
                translation: "the counter (in a café or bar)",
                culturalNote: "Drinking at the counter (au comptoir) is cheaper than at a table in French cafés. Many working people have their morning espresso standing at the bar — a quick, affordable ritual."
            },
            {
                word: "la terrasse",
                translation: "the terrace / outdoor seating",
                culturalNote: "The café terrace is central to French social life. The French sit facing outward, watching the street — not inward toward each other. Terraces stay open in winter with heat lamps."
            },
            {
                word: "un café",
                translation: "a coffee / an espresso",
                culturalNote: "In France, 'un café' always means a small, strong espresso — not a large filtered coffee. If you want milk, ask for 'un café crème' (morning only) or 'un noisette' (espresso with a drop of milk)."
            },
            {
                word: "l'apéritif",
                translation: "aperitif / pre-dinner drink",
                culturalNote: "A beloved French ritual: meeting at the café for a drink before dinner, typically between 6pm and 8pm. Common apéritifs include pastis, kir, or white wine. Often shortened to 'l'apéro'."
            },
            {
                word: "l'addition",
                translation: "the bill",
                culturalNote: "In French cafés and restaurants, the bill is never brought automatically — you must ask: 'L'addition, s'il vous plaît.' Bringing the bill unsolicited would be considered rude and rushing."
            }
        ],

        questions: [
            {
                id: "fr-c-a1-3-q1",
                type: "comprehension",
                prompt: { native: "What does 'un café' mean when you order in a French café?", target: "Que signifie 'un café' quand on commande dans un café français?" },
                options: ["A large filtered coffee", "A small, strong espresso", "A coffee with milk", "A cold coffee drink"],
                answer: "A small, strong espresso"
            },
            {
                id: "fr-c-a1-3-q2",
                type: "comprehension",
                prompt: { native: "How do you get the bill in a French café?", target: "Comment obtient-on l'addition dans un café français?" },
                options: [
                    "The waiter brings it automatically when you finish",
                    "You pay when you order",
                    "You must ask for it — the waiter does not bring it automatically",
                    "You pay at the door when you leave"
                ],
                answer: "You must ask for it — the waiter does not bring it automatically"
            },
            {
                id: "fr-c-a1-3-q3",
                type: "reflection",
                prompt: { native: "Is there a café or coffee culture in your country? How is it similar to or different from France?", target: "Est-ce qu'il y a une culture du café dans votre pays? En quoi ressemble-t-elle ou diffère-t-elle de la France?" }
            }
        ],

        didYouKnow: {
            native: "The first French café, Le Procope, opened in Paris in 1686 and is still open today. It was a gathering place for the great thinkers of the French Enlightenment — Voltaire, Rousseau, and later Napoleon Bonaparte were all regulars. The French café has been a space for ideas as well as coffee for over 300 years.",
            target: "Le premier café français, Le Procope, a ouvert à Paris en 1686 et est toujours ouvert aujourd'hui. C'était un lieu de rassemblement pour les grands penseurs des Lumières — Voltaire, Rousseau, et plus tard Napoléon Bonaparte y étaient tous des habitués. Le café français est un espace pour les idées autant que pour le café depuis plus de 300 ans."
        },

        relatedIds: ["fr-c-a1-1"]
    },

    {
        id: "fr-c-a1-4",
        language: "fr",
        level: "A1",
        category: "daily-life",
        region: "france",
        title: {
            native: "La famille française — évolution et réalité",
            target: "La famille française"
        },
        subtitle: "From the traditional Sunday lunch to modern blended families — how French families actually live today.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800",
                caption: {
                    native: "A French Sunday lunch — the most important family ritual of the week",
                    target: "Le déjeuner du dimanche — le rituel familial le plus important de la semaine"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1543342384-1f1350e27861?w=800",
                caption: {
                    native: "Many French grandparents live nearby and play an active role in childcare",
                    target: "Beaucoup de grands-parents français vivent près de chez leurs enfants et jouent un rôle actif dans la garde des enfants"
                }
            }
        ],

        body: {
            target: `La famille est au cœur de la vie française. Mais la famille française a beaucoup changé depuis cinquante ans.

Traditionnellement, la famille française était grande. Les grands-parents, les parents et les enfants vivaient souvent dans la même ville ou le même village. Aujourd'hui, les familles sont plus petites. En moyenne, les couples français ont deux enfants.

Le déjeuner du dimanche est un rituel très important. Toute la famille se réunit — les grands-parents, les parents, les enfants, parfois les oncles et tantes et les cousins. On mange ensemble pendant deux ou trois heures. C'est un moment de partage et de conversation.

Les repas sont pris à table, en famille. Les Français ne mangent généralement pas devant la télévision. Le dîner est un moment de communication — on parle de la journée, des actualités, des projets.

La France a un taux de natalité relativement élevé pour l'Europe occidentale. Le gouvernement aide les familles avec des allocations familiales — des aides financières pour chaque enfant. La crèche et l'école maternelle sont disponibles dès l'âge de deux ou trois ans.

Aujourd'hui, les familles françaises sont très diverses. Il y a des familles monoparentales, des familles recomposées et des familles avec deux pères ou deux mères. La société française a beaucoup évolué, et la famille aussi.`,
            native: `The family is at the heart of French life. But the French family has changed a lot over the past fifty years.

Traditionally, the French family was large. Grandparents, parents, and children often lived in the same town or village. Today, families are smaller. On average, French couples have two children.

Sunday lunch is a very important ritual. The whole family gathers — grandparents, parents, children, sometimes uncles, aunts, and cousins. People eat together for two or three hours. It is a moment for sharing and conversation.

Meals are eaten at the table, as a family. The French generally do not eat in front of the television. Dinner is a time for communication — people talk about their day, current events, plans.

France has a relatively high birth rate for Western Europe. The government helps families with family allowances — financial aid for each child. Nurseries and nursery schools are available from the age of two or three.

Today, French families are very diverse. There are single-parent families, blended families, and families with two fathers or two mothers. French society has evolved a great deal, and so has the family.`
        },

        simpleTarget: `La famille est très importante en France.
Les Français aiment manger ensemble le dimanche.
Le déjeuner du dimanche est un grand repas en famille.
Les grands-parents jouent un rôle important dans la famille française.
En France, les familles sont petites — en général deux enfants.
Il y a aussi des familles monoparentales et des familles recomposées.`,

        cultureVocab: [
            {
                word: "le déjeuner du dimanche",
                translation: "Sunday lunch",
                culturalNote: "The most important family ritual in France. It typically lasts 2–3 hours and includes multiple courses. Extended family gathers: grandparents, parents, children, and sometimes aunts, uncles, and cousins."
            },
            {
                word: "les grands-parents",
                translation: "the grandparents",
                culturalNote: "French grandparents (les grands-parents) play an active role in childcare. Many families rely on 'les mamies et les papys' (granny and grandpa) for childcare while parents work — a common arrangement in France."
            },
            {
                word: "les allocations familiales",
                translation: "family allowances / child benefit",
                culturalNote: "France has one of Europe's most generous family support systems. Parents receive monthly payments (allocations familiales) for two or more children, plus subsidised childcare and free nursery schooling from age 3."
            },
            {
                word: "la crèche",
                translation: "nursery / day care",
                culturalNote: "State-subsidised crèches (nurseries for children 0–3) are a pillar of French family policy. They allow both parents to work while children are cared for — contributing to France's relatively high female employment rate."
            },
            {
                word: "la famille recomposée",
                translation: "blended family / step-family",
                culturalNote: "About one third of French families today are 'recomposées' — formed by two partners who each have children from previous relationships. This structure is widely recognised and accepted in French society."
            }
        ],

        questions: [
            {
                id: "fr-c-a1-4-q1",
                type: "comprehension",
                prompt: { native: "What is the most important family ritual in French culture mentioned in this episode?", target: "Quel est le rituel familial le plus important mentionné dans cet épisode?" },
                options: ["The evening meal on weekdays", "Sunday lunch", "Saturday breakfast", "The Christmas dinner"],
                answer: "Sunday lunch"
            },
            {
                id: "fr-c-a1-4-q2",
                type: "comprehension",
                prompt: { native: "On average, how many children do French couples have?", target: "En moyenne, combien d'enfants ont les couples français?" },
                options: ["One", "Two", "Three", "Four"],
                answer: "Two"
            },
            {
                id: "fr-c-a1-4-q3",
                type: "reflection",
                prompt: { native: "How does the French Sunday lunch tradition compare to family meal traditions in your country? Is there a similar weekly gathering?", target: "Comment la tradition du déjeuner dominical français se compare-t-elle aux traditions de repas en famille dans votre pays?" }
            }
        ],

        didYouKnow: {
            native: "France has one of the highest birth rates in Western Europe — about 1.8 children per woman — partly attributed to its comprehensive family support policies. French parents receive generous parental leave, heavily subsidised childcare, and monthly cash payments for each child from the state.",
            target: "La France a l'un des taux de natalité les plus élevés d'Europe occidentale — environ 1,8 enfant par femme — en partie grâce à ses politiques de soutien aux familles. Les parents français bénéficient d'un congé parental généreux, d'une garde d'enfants fortement subventionnée et d'allocations mensuelles en espèces pour chaque enfant."
        },

        relatedIds: ["fr-c-a1-1", "fr-c-a1-3"]
    }
]
