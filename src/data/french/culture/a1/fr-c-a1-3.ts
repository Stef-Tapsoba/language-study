import { CultureEpisode } from "../../../../types"
export const frCA13: CultureEpisode = {
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
}
