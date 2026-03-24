import { CultureEpisode } from "../../../../types"

export const esCA14: CultureEpisode = {
    id: "es-c-a1-4",
    language: "es",
    level: "A1",
    category: "food",
    region: "spain",
    title: {
        native: "El tapeo — la cultura de las tapas",
        target: "El tapeo — la cultura de las tapas"
    },
    subtitle: "How a small plate of food became one of Spain's greatest social rituals.",

    photos: [
        {
            url: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800",
            caption: {
                native: "Tapas on a bar counter in Seville — small plates shared between friends",
                target: "Tapas en la barra de un bar en Sevilla — platos pequeños para compartir con amigos"
            },
            credit: "Unsplash"
        },
        {
            url: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800",
            caption: {
                native: "Patatas bravas — one of the most popular tapas in Spain",
                target: "Patatas bravas — una de las tapas más populares en España"
            },
            credit: "Unsplash"
        },
        {
            url: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800",
            caption: {
                native: "A Spanish bar at lunchtime — the heart of everyday social life",
                target: "Un bar español a la hora de comer — el corazón de la vida social cotidiana"
            },
            credit: "Unsplash"
        }
    ],

    body: {
        target: `En España, las tapas son mucho más que comida. Son una forma de vida social.

Una tapa es un plato pequeño de comida. Las tapas más populares son las patatas bravas (patatas con salsa picante), la tortilla española (huevos y patatas), el jamón serrano, las aceitunas, los calamares fritos y el pan con tomate.

El **tapeo** es la actividad de ir de bar en bar para comer tapas y beber algo. Los amigos y la familia se reúnen después del trabajo o los fines de semana para hacer tapeo. La gente toma una tapa en un bar, después va a otro bar, y así sucesivamente. Es una forma de socializar y de explorar el barrio.

En algunas ciudades, como Granada y Almería, si pides una bebida en un bar, la tapa es gratis. ¡Cuánto más bebes, más comes! En otras ciudades, como Madrid o Barcelona, las tapas cuestan dinero.

El origen de la palabra 'tapa' es interesante. Una teoría dice que los bares antiguos ponían un plato pequeño encima del vaso de vino para protegerlo de los insectos. La palabra 'tapa' significa 'tapa' o 'cubierta'. Hoy, las tapas son una industria enorme y una parte central de la identidad española.

El tapeo no es solo comer. Es pasar tiempo con personas importantes para ti. Es hablar, reír y compartir. Para los españoles, el bar no es un lugar para beber solo — es un espacio público y social, como una extensión del salón de casa.`,
        native: `In Spain, tapas are much more than food. They are a way of social life.

A tapa is a small plate of food. The most popular tapas are patatas bravas (potatoes with spicy sauce), Spanish omelette (eggs and potatoes), cured ham, olives, fried squid, and bread with tomato.

Tapeo is the activity of going from bar to bar to eat tapas and have a drink. Friends and family meet after work or at the weekend to do tapeo. People have a tapa in one bar, then move to another bar, and so on. It is a way to socialise and explore the neighbourhood.

In some cities, such as Granada and Almería, if you order a drink at a bar, the tapa is free. The more you drink, the more you eat! In other cities, like Madrid or Barcelona, tapas cost money.

The origin of the word 'tapa' is interesting. One theory says that old bars used to put a small plate on top of the wine glass to protect it from insects. The word 'tapa' means 'lid' or 'cover'. Today, tapas are a huge industry and a central part of Spanish identity.

Tapeo is not just about eating. It is about spending time with people who matter to you. It is about talking, laughing, and sharing. For Spaniards, the bar is not a place to drink alone — it is a public, social space, like an extension of the living room at home.`
    },

    simpleTarget: `Las tapas son platos pequeños de comida.
Los españoles comen tapas en los bares.
Las tapas más populares son las patatas bravas, la tortilla y el jamón.
El tapeo es ir de bar en bar con amigos.
Es muy importante para la vida social en España.
En Granada, las tapas son gratis con una bebida.`,

    cultureVocab: [
        {
            word: "las tapas",
            translation: "tapas (small plates of food)",
            culturalNote: "A tapa is always a small portion — a bite or two — served alongside a drink. The word comes from 'tapa' meaning lid or cover. Tapas culture varies by region: in Granada they're free with every drink; in Madrid you pay for them."
        },
        {
            word: "el tapeo",
            translation: "the activity of going bar to bar eating tapas",
            culturalNote: "Tapeo (also called 'ir de tapas' — going for tapas) is a social ritual, not just a meal. A typical tapeo involves three or four different bars in one evening, spending around 30–45 minutes in each. It's how Spaniards catch up with friends."
        },
        {
            word: "los bares",
            translation: "bars (plural of bar)",
            culturalNote: "The Spanish bar is not just for drinking — it's the centre of community life. Families with children go to bars for breakfast. Elderly people read the newspaper there. Workers have lunch. The bar is a public living room."
        },
        {
            word: "las patatas bravas",
            translation: "potatoes with spicy tomato sauce",
            culturalNote: "Patatas bravas (brave/spicy potatoes) are arguably the most iconic tapa in Spain. Every bar has their own version of the sauce — some are tomato-based, some are aioli, some are a mix. Debate over whose bravas are best is taken very seriously."
        },
        {
            word: "compartir",
            translation: "to share",
            culturalNote: "Tapas are always ordered for the table to share — there is no concept of individual portions. This communal style of eating reflects a core Spanish value: food is a social activity, not a personal one."
        },
        {
            word: "gratis",
            translation: "free (of charge)",
            culturalNote: "In southern Spain, particularly in Granada, Almería, and Jaén, it is tradition to serve a free tapa with every drink ordered. The tapa gets bigger and better with each round. This tradition is one reason Granada is considered a top tapas destination in Spain."
        }
    ],

    questions: [
        {
            id: "es-c-a1-4-q1",
            type: "comprehension",
            prompt: {
                native: "What is a tapa?",
                target: "¿Qué es una tapa?"
            },
            options: [
                "A type of Spanish drink",
                "A small plate of food eaten in a bar",
                "A large main course",
                "A Spanish dessert"
            ],
            answer: "A small plate of food eaten in a bar"
        },
        {
            id: "es-c-a1-4-q2",
            type: "comprehension",
            prompt: {
                native: "In which Spanish city do you get a free tapa with every drink?",
                target: "¿En qué ciudad española recibes una tapa gratis con cada bebida?"
            },
            options: ["Madrid", "Barcelona", "Granada", "Seville"],
            answer: "Granada"
        },
        {
            id: "es-c-a1-4-q3",
            type: "reflection",
            prompt: {
                native: "Do you have a similar social eating tradition in your country — going from place to place with friends to eat and drink? How is it similar or different to tapeo?",
                target: "Do you have a similar social eating tradition in your country — going from place to place with friends to eat and drink? How is it similar or different to tapeo?"
            }
        },
        {
            id: "es-c-a1-4-q4",
            type: "comparison",
            prompt: {
                native: "The Spanish bar is described as 'an extension of the living room'. Is there a similar public social space in your culture? What do people do there?",
                target: "The Spanish bar is described as 'an extension of the living room'. Is there a similar public social space in your culture? What do people do there?"
            }
        }
    ],

    didYouKnow: {
        native: "Spain has more bars per person than almost any country in Europe. There is roughly one bar for every 175 people — that is more than 300,000 bars in the whole country. The bar is not just for drinking: it is where people have breakfast, read the newspaper, watch football, and meet neighbours.",
        target: "España tiene más bares por persona que casi cualquier país de Europa. Hay aproximadamente un bar por cada 175 personas — más de 300.000 bares en todo el país. El bar no es solo para beber: es donde la gente desayuna, lee el periódico, ve el fútbol y habla con los vecinos."
    },

    relatedIds: ["es-c-a1-1", "es-c-a1-2"]
}
