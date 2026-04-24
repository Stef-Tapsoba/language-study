import { CultureEpisode } from "../../../../types"

export const itCA23: CultureEpisode = {
    id: "it-c-a2-3",
    language: "it",
    level: "A2",
    category: "daily-life",
    region: "south-italy",
    title: {
        native: "Il mercato del mattino — la vita al Sud",
        target: "Il mercato del mattino"
    },
    subtitle: "In southern Italy, the morning market is not just commerce — it is the social heart of the neighbourhood, a daily ritual of colour, noise, and belonging.",
    photos: [
        {
            url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
            caption: {
                native: "A traditional Italian outdoor market — the sounds and colours are overwhelming",
                target: "Un tradizionale mercato all'aperto italiano — i suoni e i colori sono travolgenti"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800",
            caption: {
                native: "Fresh vegetables at the market — the vendor knows each customer by name",
                target: "Verdure fresche al mercato — il venditore conosce ogni cliente per nome"
            }
        }
    ],
    body: {
        target: `Al Sud Italia, la mattina inizia al mercato.

Non si tratta solo di comprare frutta e verdura. Il mercato è un rituale sociale, un teatro, un luogo di incontro. Ogni mattina — anche d'inverno, anche quando piove un po' — le bancarelle si aprono, i venditori iniziano a gridare, e la vita del quartiere si organizza intorno a quell'asse rumoroso e colorato.

I venditori al mercato del Sud hanno una tecnica di vendita unica. Non aspettano che il cliente si avvicini in silenzio. Chiamano, invitano, esagerano: "Guarda come sono belle! Signora, questi pomodori li ho raccolti stamattina — non esistono pomodori così da nessun'altra parte!" È teatro. E il cliente lo sa. E continua ad andare.

Il dialetto è protagonista. Al mercato di Napoli, di Palermo, di Bari, si sentono voci che parlano in italiano e in dialetto allo stesso tempo — a volte nella stessa frase. I numeri vengono detti velocissimo, i prezzi si trattano, si scherza. Un forestiero che va al mercato per la prima volta si sente in un mondo completamente diverso.

C'è anche un elemento di fedeltà. Si va dallo stesso venditore per anni — la stessa signora che vende le olive, lo stesso vecchio con le erbe aromatiche. Lui sa il nome tuo, sa che non ti piacciono le arance troppo mature. Lei ti mette da parte un po' di pomodori speciali perché sa che ti piacciono. È una relazione.

Il mercato del mattino è tutto quello che il supermercato non è: rumoroso, imperfetto, caotico, personale. E proprio per questo, insostituibile.`,
        native: `In southern Italy, the morning begins at the market.

It is not just about buying fruit and vegetables. The market is a social ritual, a theatre, a meeting place. Every morning — even in winter, even when it drizzles a little — the stalls open, the vendors start calling out, and neighbourhood life organises itself around that noisy, colourful axis.

Vendors at southern Italian markets have a unique sales technique. They don't wait for customers to approach in silence. They call, invite, exaggerate: "Look how beautiful they are! Madam, I picked these tomatoes this morning — there are no tomatoes like this anywhere else!" It's theatre. And the customer knows it. And keeps coming back.

Dialect plays a central role. At the markets of Naples, Palermo, and Bari, you hear voices speaking Italian and dialect at the same time — sometimes in the same sentence. Numbers are rattled off at great speed, prices are negotiated, jokes are made. A newcomer going to the market for the first time feels they are in a completely different world.

There is also an element of loyalty. You go to the same vendor for years — the same woman who sells olives, the same old man with the aromatic herbs. He knows your name, knows you don't like overripe oranges. She sets aside some special tomatoes because she knows you like them. It is a relationship.

The morning market is everything a supermarket is not: noisy, imperfect, chaotic, personal. And precisely for that reason, irreplaceable.`
    },
    cultureVocab: [
        {
            word: "la bancarella",
            translation: "market stall",
            culturalNote: "Bancarelle line the streets of Italian markets. Unlike a fixed shop, the stall holder comes each morning and sets everything up from scratch — giving the market its temporary, theatrical quality."
        },
        {
            word: "trattare il prezzo",
            translation: "to negotiate the price",
            culturalNote: "At southern Italian markets, bargaining is part of the culture. A fixed price is a starting point. A regular customer may always pay slightly less. This is not dishonesty — it is relationship."
        },
        {
            word: "il dialetto",
            translation: "dialect",
            culturalNote: "Southern Italian dialects (Neapolitan, Sicilian, Barese) are so distinct from standard Italian that they are sometimes classified as separate languages. In many southern markets, dialect is the default language."
        },
        {
            word: "il forestiero",
            translation: "outsider / stranger (from another place)",
            culturalNote: "In Italian, 'forestiero' originally meant someone from a different forest (foresta) — i.e. from outside. It remains in common use in the South to describe anyone not from the immediate community."
        },
    ],
    questions: [
        {
            id: "it-c-a2-3-q1",
            type: "comprehension",
            prompt: { native: "According to the text, what makes the southern Italian market different from a supermarket?", target: "Secondo il testo, cosa rende il mercato del Sud Italia diverso da un supermercato?" },
            options: [
                "The prices are much cheaper",
                "It is open every day of the year",
                "It is noisy, personal, chaotic, and built on relationships",
                "It sells only local products"
            ],
            answer: "It is noisy, personal, chaotic, and built on relationships"
        },
        {
            id: "it-c-a2-3-q2",
            type: "comprehension",
            prompt: { native: "What does the author mean when they say the vendor's sales technique is 'theatre'?", target: "Cosa intende l'autore quando dice che la tecnica di vendita del venditore è 'teatro'?" },
            options: [
                "The vendors perform formal shows at the market",
                "Both vendor and customer know the exaggerations are part of a social game — not literally true",
                "The market is always held near a theatre building",
                "Vendors are trained actors"
            ],
            answer: "Both vendor and customer know the exaggerations are part of a social game — not literally true"
        },
        {
            id: "it-c-a2-3-q3",
            type: "comparison",
            prompt: { native: "Is there a similar market culture in your country or city? What is similar and what is different?", target: "C'è una cultura simile dei mercati nel tuo paese o città? Cosa è simile e cosa è diverso?" }
        }
    ],
    didYouKnow: {
        native: "The Ballarò market in Palermo, Sicily, has been operating continuously for over a thousand years — since the Arab rule of the island in the 9th and 10th centuries. It is one of the oldest continuously operating markets in Europe. Today it still runs every morning, Monday to Saturday, in the same neighbourhood.",
        target: "Il mercato del Ballarò a Palermo, in Sicilia, è in funzione ininterrottamente da oltre mille anni — dai tempi della dominazione araba dell'isola nel IX e X secolo. È uno dei mercati più antichi d'Europa ancora in attività. Ancora oggi si svolge ogni mattina, dal lunedì al sabato, nello stesso quartiere."
    }
}
