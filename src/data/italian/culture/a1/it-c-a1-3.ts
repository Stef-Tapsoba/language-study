import { CultureEpisode } from "../../../../types"
export const itCA13: CultureEpisode = {
    id: "it-c-a1-3",
    language: "it",
    level: "A1",
    category: "customs",
    region: "all-italian",
    title: {
        native: "I gesti italiani — comunicare con le mani",
        target: "I gesti italiani — comunicare con le mani"
    },
    subtitle: "Italians are famous for talking with their hands — but each gesture has a precise meaning that every visitor should know.",

    photos: [
        {
            url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
            caption: {
                native: "Italians use gestures as a natural part of conversation",
                target: "Gli italiani usano i gesti come parte naturale della conversazione"
            }
        }
    ],

    body: {
        target: `In Italia, le mani parlano. I gesti sono una parte importante della comunicazione italiana — non un'aggiunta, ma una parte essenziale del messaggio.

Il gesto più famoso nel mondo è il "gesto del carciofo": le cinque dita unite, con il palmo rivolto verso l'alto, mosse su e giù. In Italia questo gesto significa "cosa vuoi?" o "cosa stai dicendo?". Non è scortese — è normale.

Un altro gesto comune è il "gesto del denaro": strofinare il pollice contro l'indice e il medio. Significa "costa molto" o "ci vuole denaro".

Il gesto della mano al mento — muovere il dorso della mano verso l'esterno sotto il mento — significa "non me ne importa niente" o "vai via". Questo gesto può sembrare offensivo se non si conosce il contesto.

Il gesto di portare le dita unite alla bocca, come per un bacio, significa che qualcosa è buonissimo — il cibo, il vino, una persona bella. È il modo italiano di dire "magnifico!".

I gesti italiani cambiano un poco da regione a regione. Al sud, i gesti sono spesso più espressivi. Al nord, le persone gesticolano meno. Ma in tutta Italia, parlare senza le mani sembra strano.

Per uno straniero, imparare i gesti italiani è importante quanto imparare le parole. Un gesto sbagliato può creare confusione o — a volte — ofendere qualcuno senza volerlo.`,
        native: `In Italy, hands speak. Gestures are an important part of Italian communication — not an addition, but an essential part of the message.

The most famous gesture in the world is the "artichoke gesture": five fingers together, palm facing upward, moved up and down. In Italy this gesture means "what do you want?" or "what are you saying?". It is not rude — it is normal.

Another common gesture is the "money gesture": rubbing the thumb against the index and middle fingers. It means "it costs a lot" or "it requires money".

The hand-to-chin gesture — moving the back of the hand outward under the chin — means "I don't care" or "go away". This gesture can seem offensive if you don't know the context.

The gesture of bringing the fingertips together to the lips, as if for a kiss, means something is delicious — food, wine, a beautiful person. It is the Italian way of saying "magnificent!".

Italian gestures vary a little from region to region. In the south, gestures are often more expressive. In the north, people gesticulate less. But throughout Italy, speaking without your hands seems strange.

For a foreigner, learning Italian gestures is as important as learning the words. A wrong gesture can cause confusion or — sometimes — offend someone without meaning to.`
    },

    simpleTarget: `Gli italiani parlano con le mani.
I gesti sono importanti in Italia.
Un gesto famoso significa "cosa vuoi?".
Un altro gesto significa "buonissimo!".
I gesti cambiano da regione a regione.
È importante imparare i gesti italiani.`,

    cultureVocab: [
        {
            word: "il gesto",
            translation: "gesture",
            culturalNote: "Italian gestures ('gesti') are so codified that there is an official 'Dictionary of Italian Gestures'. Researchers have counted over 250 distinct gestures used regularly in everyday Italian conversation."
        },
        {
            word: "le dita",
            translation: "fingers (plural of 'il dito')",
            culturalNote: "Many Italian gestures involve specific finger positions. 'Le dita unite' (fingers together) is the starting point for several of the most iconic gestures."
        },
        {
            word: "il palmo",
            translation: "palm (of the hand)",
            culturalNote: "The orientation of the palm — up, down, or sideways — completely changes the meaning of an Italian gesture. The same hand shape with a different palm direction can mean the opposite thing."
        },
        {
            word: "gesticolare",
            translation: "to gesticulate, to use hand gestures",
            culturalNote: "In Italian culture, gesticulating is not considered theatrical or excessive — it is simply how you speak. Sitting on your hands during a conversation would feel very unnatural to an Italian."
        },
        {
            word: "offendere",
            translation: "to offend",
            culturalNote: "Some Italian gestures that seem neutral to outsiders can cause offence. The chin-flick gesture ('mano al mento') in particular is quite strong and should be used carefully by learners."
        }
    ],

    questions: [
        {
            id: "it-c-a1-3-q1",
            type: "comprehension",
            prompt: { native: "What does the gesture of bringing fingertips together to the lips mean?", target: "Cosa significa il gesto di portare le dita unite alla bocca?" },
            options: ["Something is delicious / magnificent", "I don't care", "What do you want?", "It costs a lot"],
            answer: "Something is delicious / magnificent"
        },
        {
            id: "it-c-a1-3-q2",
            type: "comprehension",
            prompt: { native: "According to the text, where in Italy do people gesticulate more?", target: "Secondo il testo, dove in Italia si gesticola di più?" },
            options: ["Al sud", "Al nord", "In Toscana", "A Roma"],
            answer: "Al sud"
        },
        {
            id: "it-c-a1-3-q3",
            type: "comprehension",
            prompt: { native: "What does the 'money gesture' (rubbing thumb against fingers) mean?", target: "Cosa significa il 'gesto del denaro'?" },
            options: ["Costa molto / ci vuole denaro", "Cosa vuoi?", "Buonissimo!", "Non me ne importa niente"],
            answer: "Costa molto / ci vuole denaro"
        },
        {
            id: "it-c-a1-3-q4",
            type: "reflection",
            prompt: { native: "Does your culture use hand gestures in conversation? Are there any gestures that mean different things in different cultures?", target: "Does your culture use hand gestures in conversation? Are there any gestures that mean different things in different cultures?" }
        }
    ],

    didYouKnow: {
        native: "In 2021, UNESCO added the art of Neapolitan gesture to its list of Intangible Cultural Heritage. Naples has the richest gesture vocabulary in Italy — linguists have documented over 60 distinct gestures unique to the Neapolitan tradition, many of which date back to ancient Greek and Roman times.",
        target: "Nel 2021, l'UNESCO ha aggiunto l'arte del gesto napoletano alla sua lista del Patrimonio Culturale Immateriale. Napoli ha il vocabolario gestuale più ricco d'Italia — i linguisti hanno documentato oltre 60 gesti distinti unici della tradizione napoletana, molti dei quali risalgono all'epoca greco-romana."
    }
}
