import { CultureEpisode } from "../../../../types"
export const frCA11: CultureEpisode = {
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
}
