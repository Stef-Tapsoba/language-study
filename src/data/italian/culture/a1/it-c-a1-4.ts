import { CultureEpisode } from "../../../../types"
export const itCA14: CultureEpisode = {
    id: "it-c-a1-4",
    language: "it",
    level: "A1",
    category: "food",
    region: "all-italian",
    title: {
        native: "La pasta — una tradizione nazionale",
        target: "La pasta — una tradizione nazionale"
    },
    subtitle: "Italy has over 350 pasta shapes — and strict unwritten rules about which sauce goes with which pasta. Breaking them is considered almost criminal.",

    video: {
        youtubeId: "",
        title: "",
        channelName: "",
        captionLang: "it"
    },

    photos: [
        {
            url: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800",
            caption: {
                native: "Fresh pasta being made by hand — a centuries-old Italian tradition",
                target: "La pasta fresca fatta a mano — una tradizione italiana di secoli"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800",
            caption: {
                native: "Different pasta shapes pair with different sauces — the rules are strict",
                target: "Diversi formati di pasta si abbinano a diversi sughi — le regole sono rigide"
            }
        }
    ],

    body: {
        target: `La pasta è il piatto simbolo dell'Italia. Gli italiani mangiano pasta quasi ogni giorno — a pranzo o a cena. È parte della cultura, non solo del menu.

In Italia esistono più di trecentocinquanta formati di pasta diversi. Ogni formato ha un nome e, spesso, una storia. Gli spaghetti, le penne, i rigatoni, le tagliatelle, i fusilli — ogni tipo di pasta ha la sua forma speciale.

La regola più importante della pasta italiana è questa: ogni formato di pasta si abbina a un sugo specifico. Gli spaghetti vanno con la carbonara o l'amatriciana, non con il ragù. Il ragù alla bolognese va con le tagliatelle, non con gli spaghetti. Le penne vanno con l'arrabbiata. Chi sbaglia abbinamento è considerato quasi un criminale gastronomico.

La pasta si divide in due grandi categorie: la pasta secca e la pasta fresca. La pasta secca — come gli spaghetti e le penne — si fa con acqua e semola di grano duro. La pasta fresca — come le tagliatelle e i tortellini — si fa con acqua, farina e uova.

Ogni regione italiana ha la sua pasta tradizionale. In Emilia-Romagna ci sono le tagliatelle e i tortellini. In Campania ci sono gli spaghetti. In Sicilia ci sono le busiate. In Lombardia ci sono i pizzoccheri.

La pasta non è solo cibo. È identità, storia e famiglia. Per molti italiani, il modo in cui la nonna fa la pasta è il modo giusto — e tutti gli altri modi sono sbagliati.`,
        native: `Pasta is Italy's symbolic dish. Italians eat pasta almost every day — at lunch or dinner. It is part of the culture, not just the menu.

In Italy there are more than three hundred and fifty different pasta shapes. Each shape has a name and, often, a history. Spaghetti, penne, rigatoni, tagliatelle, fusilli — each type of pasta has its own special form.

The most important rule of Italian pasta is this: each pasta shape pairs with a specific sauce. Spaghetti go with carbonara or amatriciana, not with ragù. Bolognese ragù goes with tagliatelle, not spaghetti. Penne go with arrabbiata. Whoever makes the wrong pairing is considered almost a gastronomic criminal.

Pasta is divided into two main categories: dried pasta and fresh pasta. Dried pasta — like spaghetti and penne — is made with water and durum wheat semolina. Fresh pasta — like tagliatelle and tortellini — is made with water, flour and eggs.

Each Italian region has its own traditional pasta. In Emilia-Romagna there are tagliatelle and tortellini. In Campania there are spaghetti. In Sicily there are busiate. In Lombardy there are pizzoccheri.

Pasta is not just food. It is identity, history and family. For many Italians, the way grandmother makes pasta is the right way — and all other ways are wrong.`
    },

    simpleTarget: `La pasta è molto importante in Italia.
Gli italiani mangiano pasta ogni giorno.
Ci sono molti formati di pasta diversi.
Ogni pasta ha il suo sugo speciale.
La pasta secca e la pasta fresca sono diverse.
Ogni regione italiana ha la sua pasta tradizionale.`,

    cultureVocab: [
        {
            word: "il formato di pasta",
            translation: "pasta shape",
            culturalNote: "Italy has over 350 named pasta shapes. The shape is not decorative — it determines which sauce clings to it best. Tubes trap chunky sauces; thin long pasta is best with smooth sauces."
        },
        {
            word: "il sugo",
            translation: "sauce (for pasta)",
            culturalNote: "In Italian, 'sugo' specifically means a cooked tomato-based pasta sauce. 'Salsa' is more generic. The distinction matters — calling a ragù a 'salsa' would raise Italian eyebrows."
        },
        {
            word: "la pasta fresca",
            translation: "fresh pasta",
            culturalNote: "Fresh pasta is made with eggs and flour, often by hand, and must be eaten within a day or two. It is considered more refined than dried pasta, and is the norm for special Sunday lunches and celebrations."
        },
        {
            word: "la pasta secca",
            translation: "dried pasta",
            culturalNote: "Dried pasta (pasta secca) is the everyday staple of Italian households. Unlike fresh pasta, it can be stored for months. It is made from durum wheat semolina and water — no eggs."
        },
        {
            word: "il ragù",
            translation: "meat sauce (slow-cooked)",
            culturalNote: "Ragù alla Bolognese — the world-famous 'Bolognese sauce' — is officially registered with the Bologna Chamber of Commerce. The authentic recipe uses tagliatelle, not spaghetti. Serving it with spaghetti, as is common internationally, is considered deeply wrong in Italy."
        }
    ],

    questions: [
        {
            id: "it-c-a1-4-q1",
            type: "comprehension",
            prompt: { native: "According to the text, how many pasta shapes exist in Italy?", target: "Secondo il testo, quanti formati di pasta esistono in Italia?" },
            options: ["Più di trecentocinquanta", "Più di cento", "Circa cinquanta", "Più di mille"],
            answer: "Più di trecentocinquanta"
        },
        {
            id: "it-c-a1-4-q2",
            type: "comprehension",
            prompt: { native: "What is the correct pasta for ragù alla bolognese?", target: "Quale pasta è corretta per il ragù alla bolognese?" },
            options: ["Le tagliatelle", "Gli spaghetti", "Le penne", "I rigatoni"],
            answer: "Le tagliatelle"
        },
        {
            id: "it-c-a1-4-q3",
            type: "comprehension",
            prompt: { native: "What is fresh pasta (pasta fresca) made with?", target: "Con cosa si fa la pasta fresca?" },
            options: ["Acqua, farina e uova", "Solo acqua e semola", "Latte e farina", "Solo farina e sale"],
            answer: "Acqua, farina e uova"
        },
        {
            id: "it-c-a1-4-q4",
            type: "reflection",
            prompt: { native: "Does your country have a dish that is as central to national identity as pasta is to Italians? What makes it special?", target: "Does your country have a dish that is as central to national identity as pasta is to Italians? What makes it special?" }
        }
    ],

    didYouKnow: {
        native: "The idea that Marco Polo brought pasta to Italy from China is a myth. Written records of pasta in Italy date back to at least 1154 AD — over a century before Marco Polo was born. The myth was probably invented by a 1929 American macaroni industry newsletter trying to make pasta seem exotic.",
        target: "L'idea che Marco Polo abbia portato la pasta in Italia dalla Cina è un mito. I documenti scritti sulla pasta in Italia risalgono almeno al 1154 d.C. — oltre un secolo prima della nascita di Marco Polo. Il mito fu probabilmente inventato da un bollettino del settore maccheroni americano del 1929 che cercava di rendere la pasta esotica."
    }
}
