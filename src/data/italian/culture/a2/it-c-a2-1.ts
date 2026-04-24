import { CultureEpisode } from "../../../../types"

export const itCA21: CultureEpisode = {
    id: "it-c-a2-1",
    language: "it",
    level: "A2",
    category: "food",
    region: "all-italian",
    title: {
        native: "Il campanilismo — la competizione tra campanili",
        target: "Il campanilismo italiano"
    },
    subtitle: "In Italy, every city believes its food, dialect, and traditions are the best in the world — and they'll argue about it passionately.",
    photos: [
        {
            url: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800",
            caption: {
                native: "A campanile (bell tower) — the symbol of local identity in Italy",
                target: "Un campanile — il simbolo dell'identità locale in Italia"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
            caption: {
                native: "Every Italian region has dishes it considers superior to all others",
                target: "Ogni regione italiana ha piatti che considera superiori a tutti gli altri"
            }
        }
    ],
    body: {
        target: `In Italia, ogni città ha il suo campanile. E ogni campanile è, ovviamente, il più bello d'Italia.

Il "campanilismo" — la parola stessa viene da "campanile" — è uno dei fenomeni sociali più caratteristici del paese. Significa orgoglio locale portato all'estremo: il mio quartiere, la mia città, la mia regione sono meglio degli altri. Non è un'idea nuova. In Italia, l'unificazione nazionale è avvenuta solo nel 1861 — prima, c'erano decine di stati, comuni, ducati, e repubbliche. Ogni entità aveva la propria cultura, dialetto, e tradizione culinaria. Questa frammentazione storica si sente ancora oggi.

Le rivalità più celebri? Roma contro Milano, naturalmente. Ma anche: Bologna contro Modena (chi fa la pasta migliore?), Napoli contro tutto il resto (la pizza napoletana è l'unica vera pizza), Firenze contro Roma (chi ha più arte?), Venezia contro Verona (chi ha la storia più bella?).

Il cibo è il territorio del campanilismo per eccellenza. Chiedi a un bolognese la ricetta del ragù: il burro è obbligatorio, mai l'aglio, e chi mette il pomodoro non sa cosa fa. Chiedi a un napoletano la pizza perfetta: solo acqua di Napoli, solo forno a legna, solo San Marzano.

Il campanilismo italiano non è solo nazionalismo localizzato — è un modo di preservare l'identità culturale in un paese dove la diversità è enorme. È affettuoso, ironico, e profondamente radicato. E quando un italiano discute di campanilismo, lo fa con la stessa serietà con cui discuterebbe di qualsiasi altra questione importante.

Bene o male? È ciò che rende l'Italia — l'Italia.`,
        native: `In Italy, every city has its campanile (bell tower). And every campanile is, obviously, the most beautiful in Italy.

"Campanilismo" — the word itself comes from "campanile" — is one of the most characteristic social phenomena of the country. It means local pride taken to the extreme: my neighbourhood, my city, my region are better than the others. It's not a new idea. Italy was unified only in 1861 — before that, there were dozens of states, communes, duchies, and republics. Each had its own culture, dialect, and culinary tradition. This historical fragmentation is still felt today.

The most famous rivalries? Rome against Milan, of course. But also: Bologna against Modena (who makes the best pasta?), Naples against everyone else (Neapolitan pizza is the only real pizza), Florence against Rome (who has more art?), Venice against Verona (who has the most beautiful history?).

Food is the territory of campanilismo par excellence. Ask a Bolognese for their ragù recipe: butter is obligatory, never garlic, and anyone who adds tomato doesn't know what they're doing. Ask a Neapolitan for the perfect pizza: only Naples water, only wood-fired oven, only San Marzano tomatoes.

Italian campanilismo is not just localised nationalism — it is a way of preserving cultural identity in a country where diversity is enormous. It is affectionate, ironic, and deeply rooted. And when an Italian argues about campanilismo, they do so with the same seriousness they would apply to any other important issue.

Good or bad? It's what makes Italy — Italy.`
    },
    cultureVocab: [
        {
            word: "il campanile",
            translation: "bell tower",
            culturalNote: "The campanile is the central feature of every Italian piazza — and the symbol of local identity. The word 'campanilismo' literally means 'bell-towerism'."
        },
        {
            word: "il campanilismo",
            translation: "intense local pride / parochialism",
            culturalNote: "A fundamental aspect of Italian identity. It is both a source of cultural richness (preserving local traditions) and occasional conflict."
        },
        {
            word: "il ragù bolognese",
            translation: "Bolognese meat sauce",
            culturalNote: "The official recipe, registered with the Bologna Chamber of Commerce in 1982, contains beef, pork, onion, carrot, celery, tomato paste, white wine, and milk — never garlic, never cream."
        },
        {
            word: "la pizza napoletana",
            translation: "Neapolitan pizza",
            culturalNote: "Protected by international UNESCO recognition since 2017 as intangible cultural heritage. In Naples, the rules are strict: hand-kneaded dough, wood-fired oven, specific tomatoes."
        },
    ],
    questions: [
        {
            id: "it-c-a2-1-q1",
            type: "comprehension",
            prompt: { native: "What does 'campanilismo' literally come from?", target: "Da dove viene letteralmente la parola 'campanilismo'?" },
            options: ["From 'campagna' (countryside)", "From 'campanile' (bell tower)", "From 'campo' (field)", "From 'campana' (bell)"],
            answer: "From 'campanile' (bell tower)"
        },
        {
            id: "it-c-a2-1-q2",
            type: "comprehension",
            prompt: { native: "When did Italy unify as a single nation?", target: "Quando si è unificata l'Italia come nazione unica?" },
            options: ["1789", "1815", "1861", "1946"],
            answer: "1861"
        },
        {
            id: "it-c-a2-1-q3",
            type: "reflection",
            prompt: { native: "Does your own country have something similar to 'campanilismo'? What are the main regional rivalries?", target: "Il tuo paese ha qualcosa di simile al campanilismo? Quali sono le principali rivalità regionali?" }
        }
    ],
    didYouKnow: {
        native: "The city of Modena and the city of Bologna are only 40 kilometres apart — yet their rivalry over pasta, cars, and opera is legendary. Modena claims Ferrari and Luciano Pavarotti; Bologna claims the world's oldest university (founded 1088) and the finest pasta in Italy. Locals in both cities will tell you, with complete conviction, that the other city's food is inferior.",
        target: "La città di Modena e la città di Bologna distano solo quaranta chilometri — eppure la loro rivalità su pasta, macchine e opera è leggendaria. Modena rivendica Ferrari e Luciano Pavarotti; Bologna rivendica la più antica università del mondo (fondata nel 1088) e la pasta più buona d'Italia. I locali di entrambe le città ti diranno, con assoluta convinzione, che il cibo dell'altra città è inferiore."
    }
}
