import { CultureEpisode } from "../../../../types"
export const esCA12: CultureEpisode = {
    id: "es-c-a1-2",
    language: "es",
    level: "A1",
    category: "geography",
    region: "mexico",
    title: {
        native: "The Markets of Mexico",
        target: "Los mercados de México"
    },
    subtitle: "The beating heart of Mexican daily life — and why a supermarket could never replace it.",

    video: {
        youtubeId: "eO3meuvxMxE",
        title: "Mexico City's Markets",
        channelName: "The Culinary Institute of America",
        startSeconds: 41,
        captionLang: "es"
    },

    photos: [
        {
            url: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=800",
            caption: {
                native: "A traditional tianguis — an outdoor market with pre-Hispanic roots",
                target: "Un tianguis tradicional — un mercado al aire libre con raíces prehispánicas"
            },
            credit: "Unsplash"
        },
        {
            url: "https://images.unsplash.com/photo-1518982380512-5a3c6b4e3e00?w=800",
            caption: {
                native: "Chillies at market — Mexico has over 60 varieties of chilli",
                target: "Chiles en el mercado — México tiene más de 60 variedades de chile"
            },
            credit: "Unsplash"
        },
        {
            url: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800",
            caption: {
                native: "Oaxacan crafts and textiles — each region has its own traditions",
                target: "Artesanías y textiles oaxaqueños — cada región tiene sus propias tradiciones"
            },
            credit: "Unsplash"
        }
    ],

    body: {
        target: `En México, el mercado es el corazón de la comunidad.

Hay dos tipos principales de mercados en México. El mercado municipal tiene un edificio con techo. Está abierto todos los días. Aquí puedes comprar frutas, verduras, carne, especias y comida preparada. Cada ciudad tiene su propio mercado municipal.

El tianguis es diferente. Es un mercado al aire libre que funciona uno o dos días a la semana. La palabra "tianguis" viene del náhuatl — la lengua de los aztecas. Los tianguis tienen miles de años de historia. Hoy en día, hay más de treinta mil tianguis en México.

En el mercado, los precios no son fijos. Es normal regatear — hablar con el vendedor para conseguir un precio mejor. Esta costumbre es diferente en España, donde los precios son fijos en la mayoría de los negocios.

La comida en los mercados de México es increíble. Puedes comer tacos, tamales, tlayudas, enchiladas y muchos platillos regionales. Cada región de México tiene su propia cocina. La comida de Oaxaca es diferente de la comida de Veracruz. La comida del norte es diferente de la comida del sur.

México tiene una de las cocinas más importantes del mundo. En 2010, la UNESCO declaró la gastronomía mexicana Patrimonio Cultural Inmaterial de la Humanidad — junto con la cocina francesa y la dieta mediterránea.`,
        native: `In Mexico, the market is the heart of the community.

There are two main types of markets in Mexico. The municipal market has a building with a roof. It is open every day. Here you can buy fruit, vegetables, meat, spices and prepared food. Every city has its own municipal market.

The tianguis is different. It is an outdoor market that operates one or two days a week. The word "tianguis" comes from Nahuatl — the language of the Aztecs. The tianguis have thousands of years of history. Today, there are more than thirty thousand tianguis in Mexico.

In the market, prices are not fixed. It is normal to bargain — to talk with the seller to get a better price. This custom is different from Spain, where prices are fixed in most businesses.

The food in Mexico's markets is incredible. You can eat tacos, tamales, tlayudas, enchiladas and many regional dishes. Each region of Mexico has its own cuisine. The food from Oaxaca is different from the food of Veracruz. The food from the north is different from the food of the south.

Mexico has one of the most important cuisines in the world. In 2010, UNESCO declared Mexican gastronomy an Intangible Cultural Heritage of Humanity — alongside French cuisine and the Mediterranean diet.`
    },

    simpleTarget: `En México, hay muchos mercados.
En el mercado puedes comprar frutas, verduras y carne.
El mercado es un lugar muy importante en la comunidad.
La gente va al mercado cada día.
En el mercado hay mucha comida rica.
La palabra "tianguis" viene de una lengua antigua de México.
Los mexicanos aman sus mercados tradicionales.`,

    cultureVocab: [
        {
            word: "el mercado",
            translation: "market",
            culturalNote: "In Mexico, markets are not just places to buy food — they are the social heart of the community. Going to the market is a daily social ritual, not just a shopping trip. Supermarkets have not replaced them."
        },
        {
            word: "las frutas y verduras",
            translation: "fruit and vegetables",
            culturalNote: "Mexican markets offer incredible variety — over 60 types of chilli pepper alone. The range of tropical fruits available has no equivalent in most of the world."
        },
        {
            word: "la comunidad",
            translation: "community",
            culturalNote: "The market is the centre of community life in Mexico. It is where people meet, talk, and share food. This communal role is something a supermarket cannot replace."
        },
        {
            word: "el tianguis",
            translation: "open-air periodic market",
            culturalNote: "From Nahuatl 'tianquiztli'. These markets pre-date European contact by centuries — the Aztec capital Tenochtitlan had one of the largest markets in the world."
        },
        {
            word: "tradicional",
            translation: "traditional",
            culturalNote: "Mexican markets are a living tradition, not a tourist attraction. In 2010, UNESCO recognised Mexican gastronomy as an Intangible Cultural Heritage of Humanity."
        }
    ],

    questions: [
        {
            id: "es-c-a1-2-q1",
            type: "comprehension",
            prompt: {
                native: "What language does the word 'tianguis' come from?",
                target: "¿De qué lengua viene la palabra 'tianguis'?"
            },
            options: ["Spanish", "Nahuatl", "Mayan", "Arabic"],
            answer: "Nahuatl"
        },
        {
            id: "es-c-a1-2-q2",
            type: "comprehension",
            prompt: {
                native: "What did UNESCO recognise about Mexican food in 2010?",
                target: "¿Qué reconoció la UNESCO sobre la comida mexicana en 2010?"
            },
            options: [
                "It declared tacos a world food",
                "It named Mexico City a food capital",
                "It declared Mexican gastronomy an Intangible Cultural Heritage",
                "It awarded Mexico a global cooking prize"
            ],
            answer: "It declared Mexican gastronomy an Intangible Cultural Heritage"
        },
        {
            id: "es-c-a1-2-q3",
            type: "reflection",
            prompt: {
                native: "Do you have markets like this in your city or country? What do you buy there?",
                target: "Do you have markets like this in your city or country? What do you buy there?"
            }
        },
        {
            id: "es-c-a1-2-q4",
            type: "comparison",
            prompt: {
                native: "Is bargaining normal in your culture, or are prices always fixed? How do you feel about negotiating prices?",
                target: "Is bargaining normal in your culture, or are prices always fixed? How do you feel about negotiating prices?"
            }
        }
    ],

    didYouKnow: {
        native: "The words 'chocolate', 'tomato', 'avocado', 'chile', 'cocoa', and 'guacamole' all come from Nahuatl, the Aztec language. When Spanish colonisers arrived in Mexico, they had no words for these foods and simply borrowed the Nahuatl names — which eventually spread into English and most other European languages.",
        target: "Las palabras 'chocolate', 'tomate', 'aguacate', 'chile', 'cacao' y 'guacamole' todas vienen del náhuatl, la lengua azteca. Cuando los colonizadores españoles llegaron a México, no tenían palabras para estos alimentos y simplemente tomaron los nombres del náhuatl, que eventualmente se extendieron al inglés y a la mayoría de las lenguas europeas."
    },

    relatedIds: ["es-c-a1-1", "es-c-a2-2"]
}
