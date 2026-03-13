// ─────────────────────────────────────────────────────────────────────────────
// FRENCH B2 CULTURE
// src/data/french/culture/b2.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"

export const frB2Culture: CultureEpisode[] = [
    {
        id: "fr-c-b2-1",
        language: "fr",
        level: "B2",
        category: "history",
        region: "france",
        title: {
            native: "La Révolution française et ses héritages — 1789 et l'identité française",
            target: "La Révolution française et ses héritages"
        },
        subtitle: "How the events of 1789 created the political DNA of modern France — and why they are still debated today.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1541726260-e6b6a6a4c6b8?w=800",
                caption: {
                    native: "The Place de la Bastille, Paris — where the fortress-prison stood before it was stormed on 14 July 1789",
                    target: "La Place de la Bastille, Paris — là où se trouvait la forteresse-prison avant sa prise d'assaut le 14 juillet 1789"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
                caption: {
                    native: "Paris — a city shaped in fundamental ways by revolutionary-era urban planning and republican symbols",
                    target: "Paris — une ville profondément façonnée par l'urbanisme de l'ère révolutionnaire et les symboles républicains"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800",
                caption: {
                    native: "The French tricolore — its three colours represent the Revolution's fusion of royal white with Parisian revolutionary blue and red",
                    target: "Le tricolore français — ses trois couleurs représentent la fusion révolutionnaire du blanc royal avec le bleu et le rouge révolutionnaires parisiens"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `Il est difficile de comprendre la France contemporaine sans comprendre 1789. La Révolution française n'est pas seulement un événement historique lointain : c'est le creuset dans lequel l'identité politique française a été forgée, et ses contradictions continuent de structurer le débat public aujourd'hui.

Les principes proclamés en 1789 — Liberté, Égalité, Fraternité — sont devenus la devise de la République. Mais leur application a été, dès le départ, conflictuelle. La Déclaration des droits de l'homme et du citoyen affirme l'universalité de ces droits tout en les réservant initialement aux hommes, aux propriétaires, et aux citoyens « actifs ». Cette tension entre l'idéal universaliste et la réalité excluante est une constante de l'histoire républicaine française.

La rupture avec la monarchie a créé un rapport particulier à l'autorité en France. La méfiance envers le pouvoir, la légitimité de la contestation dans la rue, la centralité de l'État comme garant de l'intérêt général — tout cela plonge ses racines dans la culture révolutionnaire. Lorsque les Français descendent dans la rue pour protester, ils s'inscrivent consciemment ou non dans une tradition qui remonte au 14 juillet 1789.

La laïcité — principe de séparation stricte de l'Église et de l'État — est une autre héritière directe de la Révolution. Les révolutionnaires ont confisqué les biens du clergé, aboli les ordres religieux et tenté de remplacer le calendrier chrétien. La loi de séparation de 1905 a codifié ce principe, et il reste aujourd'hui l'un des sujets les plus clivants de la société française, notamment autour des questions de signes religieux dans l'espace public.

La Révolution a également posé les bases de l'État centralisé moderne. La destruction des structures féodales et régionales, remplacées par un système uniforme de départements, a créé un modèle administratif que Napoléon a ensuite perfectionné et exporté dans toute l'Europe. La France reste aujourd'hui l'un des États les plus centralisés du monde occidental.

Enfin, la mémoire de la Révolution est elle-même un terrain de combat politique. La droite conservatrice a longtemps glorifié la Vendée, région qui s'est soulevée contre la République révolutionnaire et dont la répression — parfois qualifiée de génocide — reste un sujet sensible. La gauche républicaine célèbre 1789 comme l'acte fondateur de la liberté moderne. Cette guerre de mémoires est l'une des fractures les plus profondes de la vie politique française.`,
            native: `It is difficult to understand contemporary France without understanding 1789. The French Revolution is not merely a distant historical event: it is the crucible in which French political identity was forged, and its contradictions continue to structure public debate today.

The principles proclaimed in 1789 — Liberté, Égalité, Fraternité — became the motto of the Republic. But their application was, from the outset, contested. The Declaration of the Rights of Man and of the Citizen asserts the universality of these rights while initially reserving them for men, property owners, and "active" citizens. This tension between the universalist ideal and exclusionary reality is a constant thread in French republican history.

The break with the monarchy created a particular relationship to authority in France. Distrust of power, the legitimacy of street protest, the centrality of the State as guarantor of the general interest — all of this has its roots in revolutionary culture. When French people take to the streets to protest, they are consciously or unconsciously placing themselves within a tradition that goes back to 14 July 1789.

Laïcité — the strict separation of Church and State — is another direct heir of the Revolution. The revolutionaries confiscated Church property, abolished religious orders, and attempted to replace the Christian calendar. The 1905 law of separation codified this principle, and it remains today one of the most divisive issues in French society, particularly around questions of religious symbols in public spaces.

The Revolution also laid the foundations of the modern centralised state. The destruction of feudal and regional structures, replaced by a uniform system of départements, created an administrative model that Napoleon subsequently refined and exported across Europe. France remains today one of the most centralised states in the Western world.

Finally, the memory of the Revolution is itself contested political terrain. The conservative right has long championed the Vendée — the region that rose up against the revolutionary Republic and whose brutal repression, sometimes described as genocide, remains a sensitive subject. The republican left celebrates 1789 as the founding act of modern freedom. This war of memories is one of the deepest fractures in French political life.`
        },

        cultureVocab: [
            {
                word: "Liberté, Égalité, Fraternité",
                translation: "Liberty, Equality, Fraternity — the motto of the French Republic",
                culturalNote: "Officially adopted as the national motto in 1848, though the phrase circulated from 1789. The three words are inseparable in French civic culture and appear on public buildings, coins, and official documents. Debates about which value takes precedence when they conflict — e.g. freedom versus equality — are central to French political philosophy."
            },
            {
                word: "la laïcité",
                translation: "secularism, the strict separation of church and state",
                culturalNote: "A concept with no precise English equivalent. French laïcité goes further than Anglo-American secularism: it demands that religion be absent from public institutions, not merely that the state be neutral towards it. The 1905 law remains in force and is fiercely defended across the political spectrum, though its application to Islam in particular is hotly debated."
            },
            {
                word: "le département",
                translation: "department (administrative division)",
                culturalNote: "Created in 1790 to replace the old provinces and break up regional loyalties. There are 101 departments (including overseas), each named after a geographical feature rather than a historical region — a deliberate erasure of the ancien régime's patchwork. The system is still operational today."
            },
            {
                word: "la Déclaration des droits de l'homme",
                translation: "the Declaration of the Rights of Man (and of the Citizen)",
                culturalNote: "Adopted on 26 August 1789, it remains part of the preamble of the current French Constitution (1958) and is therefore still legally binding. Its influence on the UN Declaration of Human Rights (1948) is direct and acknowledged."
            },
            {
                word: "la Vendée",
                translation: "a region of western France; by extension, the counter-revolutionary uprising of 1793–1796",
                culturalNote: "The Vendée uprising, suppressed with extreme violence by revolutionary forces (the 'colonnes infernales'), remains a politically charged memory in France. Whether the repression constitutes genocide is debated by historians and politicians, making it a live controversy more than 200 years later."
            }
        ],

        questions: [
            {
                id: "fr-c-b2-1-q1",
                type: "comprehension",
                prompt: {
                    native: "What tension at the heart of the Declaration of the Rights of Man does the text describe?",
                    target: "Quelle contradiction au cœur de la Déclaration des droits de l'homme le texte décrit-il ?"
                },
                options: [
                    "Between the right to property and the right to equality",
                    "Between the universalist ideal of rights and their initial restriction to certain categories of men",
                    "Between French national identity and European integration",
                    "Between freedom of speech and the protection of religious feelings"
                ],
                answer: "Between the universalist ideal of rights and their initial restriction to certain categories of men"
            },
            {
                id: "fr-c-b2-1-q2",
                type: "comprehension",
                prompt: {
                    native: "How does the text explain the French tendency to protest in the streets?",
                    target: "Comment le texte explique-t-il la tendance française à manifester dans la rue ?"
                },
                options: [
                    "As a sign of political instability and weak institutions",
                    "As a tradition rooted in revolutionary culture dating back to 1789",
                    "As a consequence of the French education system",
                    "As a reaction to economic inequality unique to the modern era"
                ],
                answer: "As a tradition rooted in revolutionary culture dating back to 1789"
            },
            {
                id: "fr-c-b2-1-q3",
                type: "reflection",
                prompt: {
                    native: "The text describes the Revolution's memory as a 'war of memories' still dividing France. Does your country have a comparable founding event or period that is remembered differently by different political groups? What does this tell us about how nations construct their identity?",
                    target: "Le texte décrit la mémoire de la Révolution comme une « guerre des mémoires » qui divise encore la France. Votre pays a-t-il un événement ou une période fondatrice comparable dont le souvenir est interprété différemment selon les groupes politiques ? Qu'est-ce que cela nous dit sur la façon dont les nations construisent leur identité ?"
                }
            }
        ],

        didYouKnow: {
            native: "The storming of the Bastille on 14 July 1789 is now France's national day — but the Bastille held only seven prisoners at the time of its capture, and none were political heroes: they included forgers and a man imprisoned at his family's request for 'dissolute behaviour'. The symbolic importance of the act — attacking the king's fortress — mattered far more than the practical result. France celebrates the idea of the Bastille, not the reality.",
            target: "La prise de la Bastille le 14 juillet 1789 est aujourd'hui la fête nationale française — mais la Bastille ne contenait que sept prisonniers au moment de sa prise, et aucun n'était un héros politique : parmi eux se trouvaient des faussaires et un homme emprisonné à la demande de sa famille pour « conduite dissolue ». L'importance symbolique de l'acte — attaquer la forteresse du roi — comptait bien plus que le résultat concret. La France célèbre l'idée de la Bastille, pas la réalité."
        },

        relatedIds: ["fr-c-b1-1", "fr-c-c1-1"]
    }
]
