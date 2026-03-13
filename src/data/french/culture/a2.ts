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
    }
]
