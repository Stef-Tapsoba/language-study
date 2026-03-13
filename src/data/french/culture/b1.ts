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
    }
]
