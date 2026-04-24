import { CultureEpisode } from "../../../../types"

export const frCA22: CultureEpisode = {
    id: "fr-c-a2-2",
    language: "fr",
    level: "A2",
    category: "festivals",
    region: "france",
    title: {
        native: "French Public Holidays — when France stops",
        target: "Les fêtes françaises — quand la France s'arrête"
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
}
