import { CultureEpisode } from "../../../../types"
export const frCA14: CultureEpisode = {
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
