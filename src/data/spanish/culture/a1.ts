// src/data/spanish/culture/a1.ts
import { CultureEpisode } from "../../../types"

export const a1Culture: CultureEpisode[] = [
    {
        id: "es-c-a1-1",
        language: "es",
        level: "A1",
        category: "food",
        region: "spain",
        title: {
            native: "La hora de comer en España",
            target: "La hora de comer en España"
        },
        subtitle: "Why Spanish people eat lunch at 3pm — and why it makes perfect sense.",

        video: {
            youtubeId: "aDzFhv6dQ4Q",
            title: "Why Spain eats late because of Fascism",
            channelName: "Next Time In History",
            captionLang: "es"
        },

        photos: [
            {
                url: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800",
                caption: {
                    native: "A traditional Spanish lunch — the main meal of the day",
                    target: "Un almuerzo español tradicional — la comida más importante del día"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800",
                caption: {
                    native: "Tapas in Seville — small plates shared between friends",
                    target: "Tapas en Sevilla — platos pequeños para compartir con amigos"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800",
                caption: {
                    native: "A Spanish market — fresh produce bought daily",
                    target: "Un mercado español — productos frescos comprados cada día"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `En España, la comida es mucho más que comer. Es una forma de vivir.

El desayuno es pequeño: un café con leche y una tostada con aceite de oliva y tomate. Los españoles desayunan pronto, a las ocho o las nueve de la mañana.

A las once o doce, muchas personas toman un segundo desayuno — un bocadillo o unas tapas con los amigos. Es un momento social importante.

La comida es la comida más importante del día. En España, la comida es entre las dos y las cuatro de la tarde. Las tiendas cierran. Las oficinas cierran. Las familias se reúnen para comer juntas. La comida tiene tres partes: primer plato, segundo plato y postre. Dura una o dos horas. Después de comer, la familia habla y descansa — esto se llama la **sobremesa**. La sobremesa es el tiempo en la mesa después de comer, cuando la conversación es más importante que el tiempo.

La siesta es la pausa después de comer. Hoy en día, muchos españoles no duermen la siesta — trabajan en oficinas. Pero la pausa del mediodía es todavía muy importante.

La cena es más tarde — entre las nueve y las once de la noche. Es una comida más pequeña. Las familias cenan en casa o los amigos salen a cenar a un restaurante.

Para los visitantes extranjeros, este horario es difícil. Los restaurantes en España no abren para cenar antes de las nueve. ¡A las seis de la tarde, los restaurantes están cerrados!

El horario español tiene una historia interesante. España tiene la hora del centro de Europa, pero geográficamente está más al oeste. El sol en Madrid se pone a las diez de la noche en verano. Por eso, los españoles viven más tarde.`,
            native: `In Spain, food is much more than eating. It is a way of life.

Breakfast is small: a white coffee and a toast with olive oil and tomato. Spaniards have breakfast early, at eight or nine in the morning.

At eleven or twelve, many people have a second breakfast — a sandwich or some tapas with friends. It is an important social moment.

Lunch is the most important meal of the day. In Spain, lunch is between two and four in the afternoon. Shops close. Offices close. Families gather to eat together. Lunch has three parts: a first course, a second course, and dessert. It lasts one or two hours. After eating, the family talks and rests — this is called the sobremesa. The sobremesa is the time at the table after a meal, when conversation matters more than the clock.

The siesta is the pause after lunch. Nowadays, many Spaniards don't sleep during the siesta — they work in offices. But the midday break is still very important.

Dinner is later — between nine and eleven at night. It is a smaller meal. Families have dinner at home or friends go out to a restaurant.

For foreign visitors, this timetable is difficult. Restaurants in Spain don't open for dinner before nine. At six in the afternoon, restaurants are closed!

The Spanish timetable has an interesting history. Spain is on Central European time, but geographically it is further west. The sun in Madrid sets at ten at night in summer. This is why Spaniards live later.`
        },

        simpleTarget: `En España, la comida es muy importante.
Los españoles comen tres veces al día.
El desayuno es pequeño — un café y una tostada.
La comida del mediodía es la más importante del día.
En España, la gente come entre las dos y las cuatro.
La cena es muy tarde, a las nueve o las diez.
Las familias comen juntas y hablan mucho.`,

        cultureVocab: [
            {
                word: "la comida",
                translation: "lunch / food / meal",
                culturalNote: "The same word means both 'food' in general and specifically 'lunch'. In Spain, lunch is the main meal of the day — so important that the word for food and lunch is the same."
            },
            {
                word: "el desayuno",
                translation: "breakfast",
                culturalNote: "Spanish breakfast is small — just a coffee and toast. The day's main energy comes at lunch, not breakfast, which is why Spaniards eat lunch so late."
            },
            {
                word: "la cena",
                translation: "dinner, evening meal",
                culturalNote: "Spanish dinner is very late by international standards — between 9pm and 11pm. Restaurants don't open for dinner before 9pm. Visitors often wait hungry outside closed restaurants at 7pm."
            },
            {
                word: "las familias",
                translation: "families",
                culturalNote: "In Spain, lunch is a family gathering. Shops and offices close so families can eat together. This daily ritual is considered as important as the food itself."
            },
            {
                word: "el mediodía",
                translation: "midday, noon",
                culturalNote: "In Spain, 'mediodía' (midday) effectively lasts from about 2pm to 4pm — when the most important meal of the day takes place. Spanish time runs about two hours later than the rest of Western Europe."
            },
            {
                word: "la sobremesa",
                translation: "the time spent talking at the table after eating",
                culturalNote: "Sobremesa (literally 'over the table') is the Spanish tradition of staying at the table after a meal to talk, relax, and enjoy company. It has no direct English equivalent. In Spain, rushing away from the table after eating is considered rude — the conversation is as important as the food."
            }
        ],

        questions: [
            {
                id: "es-c-a1-1-q1",
                type: "comprehension",
                prompt: {
                    native: "What time do most Spaniards eat lunch?",
                    target: "¿A qué hora comen la comida la mayoría de los españoles?"
                },
                options: ["12:00–13:00", "14:00–16:00", "18:00–19:00", "20:00–21:00"],
                answer: "14:00–16:00"
            },
            {
                id: "es-c-a1-1-q2",
                type: "comprehension",
                prompt: {
                    native: "What does the word 'sobremesa' mean?",
                    target: "¿Qué significa la palabra 'sobremesa'?"
                },
                options: [
                    "A type of Spanish dessert",
                    "The conversation and time spent at the table after eating",
                    "The first course of a Spanish meal",
                    "A midday nap after lunch"
                ],
                answer: "The conversation and time spent at the table after eating"
            },
            {
                id: "es-c-a1-1-q3",
                type: "reflection",
                prompt: {
                    native: "How is the mealtime schedule in your country different from Spain's? Which do you prefer?",
                    target: "How is the mealtime schedule in your country different from Spain's? Which do you prefer?"
                }
            },
            {
                id: "es-c-a1-1-q4",
                type: "comparison",
                prompt: {
                    native: "Do you have a word in your language for the time spent talking after a meal? What do people in your culture usually do after eating?",
                    target: "Do you have a word in your language for the time spent talking after a meal? What do people in your culture usually do after eating?"
                }
            }
        ],

        didYouKnow: {
            native: "Spain and Portugal are in the same longitude as the UK, but Spain uses Central European Time — meaning the Spanish sun sets up to two hours later than it 'should'. This happened in 1940 when Franco aligned Spain with Nazi Germany's timezone, and it was never changed back.",
            target: "España y Portugal están en la misma longitud que el Reino Unido, pero España usa la hora de Europa Central — el sol español se pone hasta dos horas más tarde de lo que 'debería'. Esto pasó en 1940 cuando Franco alineó España con la zona horaria de la Alemania nazi, y nunca se cambió."
        },

        relatedIds: ["es-c-a1-2", "es-c-a2-1"]
    },

    {
        id: "es-c-a1-2",
        language: "es",
        level: "A1",
        category: "geography",
        region: "mexico",
        title: {
            native: "Los mercados de México",
            target: "Los mercados de México"
        },
        subtitle: "The beating heart of Mexican daily life — and why a supermarket could never replace it.",

        video: {
            youtubeId: "eO3meuvxMxE",
            title: "Mexico City’s Markets",
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
]
