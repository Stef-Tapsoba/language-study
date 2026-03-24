import { CultureEpisode } from "../../../../types"
export const frCA12: CultureEpisode = {
    id: "fr-c-a1-2",
    language: "fr",
    level: "A1",
    category: "geography",
    region: "west-africa",
    title: {
        native: "Le français en Afrique — la plus grande communauté francophone du monde",
        target: "Le français en Afrique"
    },
    subtitle: "More people speak French in Africa than in France — and the African variety is evolving into something new.",

    video: {
        youtubeId: "rTq2DMDhgUE",
        title: "How Did French Language Spread In Africa?",
        channelName: "African Roots And Routes",
        captionLang: "fr"
    },

    photos: [
        {
            url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
            caption: {
                native: "Dakar, Senegal — one of the great Francophone cities of Africa",
                target: "Dakar, Sénégal — l'une des grandes villes francophones d'Afrique"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
            caption: {
                native: "Students in a French-language school in Abidjan, Côte d'Ivoire",
                target: "Élèves dans une école francophone à Abidjan, Côte d'Ivoire"
            }
        }
    ],

    body: {
        target: `La plupart des gens pensent que le français est une langue européenne. Mais la vérité est différente.

Aujourd'hui, il y a environ 321 millions de francophones dans le monde. La moitié vivent en Afrique. Dans vingt-neuf pays africains, le français est une langue officielle. Les pays les plus peuplés de la francophonie ne sont pas en Europe — ils sont en Afrique.

La République Démocratique du Congo est le pays francophone le plus peuplé du monde — devant la France elle-même. À Kinshasa, la capitale, plus de 12 millions de personnes parlent français chaque jour.

Le français en Afrique n'est pas identique au français de France. Au Sénégal, au Mali, en Côte d'Ivoire et au Cameroun, les gens parlent un français avec un accent local, des mots locaux et parfois des structures grammaticales différentes. C'est une évolution naturelle de la langue — exactement comme l'anglais est différent en Australie, aux États-Unis et en Jamaïque.

Le nouchi est un exemple fascinant. C'est une langue créole parlée en Côte d'Ivoire, qui mélange le français avec des langues locales comme le dioula. Le nouchi est devenu une lingua franca — une langue commune — pour les jeunes d'Abidjan.

Pour les apprenants de français, c'est une bonne nouvelle. Apprendre le français ouvre des portes non seulement en France et en Belgique, mais aussi dans toute l'Afrique — sur un continent avec une économie en forte croissance.`,
        native: `Most people think that French is a European language. But the reality is different.

Today, there are about 321 million French speakers in the world. Half live in Africa. In twenty-nine African countries, French is an official language. The most populous countries of the Francophonie are not in Europe — they are in Africa.

The Democratic Republic of Congo is the most populous French-speaking country in the world — ahead of France itself. In Kinshasa, the capital, more than 12 million people speak French every day.

French in Africa is not identical to French in France. In Senegal, Mali, Côte d'Ivoire and Cameroon, people speak French with a local accent, local words and sometimes different grammatical structures. This is a natural evolution of the language — exactly as English is different in Australia, the United States and Jamaica.

Nouchi is a fascinating example. It is a creole language spoken in Côte d'Ivoire, which mixes French with local languages like Dioula. Nouchi has become a lingua franca — a common language — for young people in Abidjan.

For French learners, this is good news. Learning French opens doors not only in France and Belgium, but across all of Africa — a continent with a rapidly growing economy.`
    },

    simpleTarget: `Le français est une grande langue internationale.
Des millions de personnes parlent français dans le monde.
Il y a des francophones en Europe, en Afrique et au Canada.
En Afrique, beaucoup de personnes parlent français à l'école.
La République Démocratique du Congo est un grand pays francophone.
Apprendre le français est utile dans de nombreux pays.
C'est une belle langue avec une grande culture.`,

    cultureVocab: [
        {
            word: "francophone",
            translation: "French-speaking (person or country)",
            culturalNote: "From 'franco' (French) + 'phone' (voice/sound). There are about 321 million francophones worldwide — more than half live in Africa, not Europe."
        },
        {
            word: "la francophonie",
            translation: "the French-speaking world",
            culturalNote: "Both a geographic concept and a political organisation (L'Organisation internationale de la Francophonie) with 88 member states and governments."
        },
        {
            word: "une langue internationale",
            translation: "an international language",
            culturalNote: "French is an official language in 29 African countries, as well as Canada, Belgium, and Switzerland. It is one of the six official languages of the United Nations."
        },
        {
            word: "utile",
            translation: "useful",
            culturalNote: "Learning French opens doors across Africa, Europe, and Canada — making it one of the most useful languages in the world for travel and professional life."
        },
        {
            word: "des millions",
            translation: "millions (of people)",
            culturalNote: "By 2050, demographers predict there will be over 700 million French speakers — almost entirely due to population growth in Africa."
        }
    ],

    questions: [
        {
            id: "fr-c-a1-2-q1",
            type: "comprehension",
            prompt: { native: "Which country has the most French speakers in the world?", target: "Quel pays a le plus grand nombre de francophones au monde?" },
            options: ["France", "Belgium", "The Democratic Republic of Congo", "Senegal"],
            answer: "The Democratic Republic of Congo"
        },
        {
            id: "fr-c-a1-2-q2",
            type: "reflection",
            prompt: { native: "Did you know that most French speakers live in Africa? Does this change how you think about learning French?", target: "Did you know that most French speakers live in Africa? Does this change how you think about learning French?" }
        }
    ],

    didYouKnow: {
        native: "By 2050, demographers predict there will be over 700 million French speakers — making it potentially the most widely spoken language in the world by number of speakers, ahead of English and Mandarin, almost entirely due to population growth in Africa.",
        target: "D'ici 2050, les démographes prévoient plus de 700 millions de francophones — ce qui pourrait faire du français la langue la plus parlée au monde en nombre de locuteurs, devant l'anglais et le mandarin, presque entièrement grâce à la croissance démographique en Afrique."
    }
}
