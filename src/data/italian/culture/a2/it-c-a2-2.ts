import { CultureEpisode } from "../../../../types"

export const itCA22: CultureEpisode = {
    id: "it-c-a2-2",
    language: "it",
    level: "A2",
    category: "customs",
    region: "all-italian",
    title: {
        native: "I treni italiani — un'esperienza nazionale",
        target: "I treni italiani"
    },
    subtitle: "Italian trains range from Europe's fastest to the legendarily delayed — and both experiences are quintessentially Italian.",
    photos: [
        {
            url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
            caption: {
                native: "A Frecciarossa high-speed train — on time, fast, and modern",
                target: "Un Frecciarossa ad alta velocità — puntuale, veloce, e moderno"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
            caption: {
                native: "A regional train station — the yellow validation machine is essential",
                target: "Una stazione dei treni regionali — la macchinetta gialla di convalida è essenziale"
            }
        }
    ],
    body: {
        target: `In Italia, i treni non sono solo un mezzo di trasporto. Sono un'esperienza culturale.

Il sistema ferroviario italiano è duale. Da un lato, ci sono i treni ad alta velocità: il Frecciarossa, il Frecciargento, il Frecciabianca di Trenitalia, e Italo — il concorrente privato. Questi treni collegano le grandi città — Milano, Bologna, Firenze, Roma, Napoli — a velocità fino a trecento chilometri all'ora. Sono moderni, comodi, e generalmente puntuali. Il Frecciarossa da Milano a Roma impiega circa tre ore. Un tempo impensabile.

Dall'altro lato, ci sono i treni regionali. Qui la situazione è diversa. I ritardi sono frequenti, soprattutto al Sud. Le stazioni sono a volte piccole e poco attrezzate. Ma questi treni costano poco, attraversano paesaggi incredibili, e permettono di raggiungere posti che l'alta velocità non raggiunge.

Una regola fondamentale per il viaggiatore straniero: i biglietti regionali devono essere convalidati prima di salire sul treno. C'è una macchinetta gialla in stazione — non imbarcati senza averla usata. Il biglietto ad alta velocità con prenotazione non richiede convalida separata.

Il viaggiatore italiano affronta il ritardo con una filosofia caratteristica: un misto di rassegnazione, ironia, e imprecazione affettuosa. "In ritardo? Ma dai." Non ci si aspetta la perfezione svizzera. Ci si aspetta di arrivare — prima o poi.

E poi c'è la sociabilità del treno. Italiani che non si conoscono attaccano discorso facilmente — il vicino di posto diventa un interlocutore, si condividono impressioni sulla destinazione, si offre metà del proprio panino. Il treno italiano è uno spazio pubblico informale dove si può parlare, leggere, dormire, e mangiare senza cerimonie.

Un'ultima cosa: se prendi il treno notturno — l'Intercity Notte — preparati a un'esperienza fuori dal tempo. Lento, romantico, e anacronistico in modo delizioso.`,
        native: `In Italy, trains are not just a means of transport. They are a cultural experience.

The Italian railway system is dual. On one side, there are the high-speed trains: the Frecciarossa, Frecciargento, Frecciabianca from Trenitalia, and Italo — the private competitor. These trains connect the major cities — Milan, Bologna, Florence, Rome, Naples — at speeds of up to three hundred kilometres an hour. They are modern, comfortable, and generally punctual. The Frecciarossa from Milan to Rome takes about three hours. An unthinkable time not long ago.

On the other side, there are the regional trains. Here the situation is different. Delays are frequent, especially in the South. The stations are sometimes small and poorly equipped. But these trains cost little, pass through incredible landscapes, and allow you to reach places that high-speed rail does not serve.

A fundamental rule for the foreign traveller: regional tickets must be validated before boarding the train. There is a yellow machine at the station — do not board without having used it. High-speed tickets with a seat reservation do not require separate validation.

The Italian traveller faces delays with a characteristic philosophy: a mixture of resignation, irony, and affectionate cursing. "Running late? Come on." Swiss-level perfection is not expected. You expect to arrive — sooner or later.

And then there is the sociability of the train. Italians who don't know each other strike up conversation easily — the person next to you becomes a conversation partner, you share impressions about your destination, you offer half your sandwich. The Italian train is an informal public space where you can talk, read, sleep, and eat without ceremony.

One last thing: if you take the night train — the Intercity Notte — prepare yourself for an out-of-time experience. Slow, romantic, and delightfully anachronistic.`
    },
    cultureVocab: [
        {
            word: "il Frecciarossa",
            translation: "Red Arrow (Italy's flagship high-speed train)",
            culturalNote: "The Frecciarossa (Red Arrow) reaches 300km/h and connects Rome to Milan in under 3 hours. It is one of Europe's fastest and most comfortable train services."
        },
        {
            word: "convalidare il biglietto",
            translation: "to validate the ticket",
            culturalNote: "One of the most important things to know about Italian trains. Regional tickets must be stamped in the yellow machine before boarding. Forgetting = fine. High-speed tickets are exempt."
        },
        {
            word: "il ritardo",
            translation: "delay",
            culturalNote: "Delays on Italian regional trains are a recurring part of life, especially south of Rome. The Italian response — a mix of resignation and dark humour — is itself a cultural phenomenon."
        },
        {
            word: "l'Intercity Notte",
            translation: "night train service",
            culturalNote: "Italy's overnight trains connect major cities at low cost. Slower than high-speed trains, they offer an old-school travel experience that many Italians associate with summer holidays of the past."
        },
    ],
    questions: [
        {
            id: "it-c-a2-2-q1",
            type: "comprehension",
            prompt: { native: "What is the key rule for regional train tickets in Italy?", target: "Qual è la regola fondamentale per i biglietti dei treni regionali in Italia?" },
            options: [
                "You must book a seat reservation",
                "You must validate (stamp) the ticket before boarding",
                "You must show a passport",
                "You must buy them on the train"
            ],
            answer: "You must validate (stamp) the ticket before boarding"
        },
        {
            id: "it-c-a2-2-q2",
            type: "comprehension",
            prompt: { native: "How long does the Frecciarossa take from Milan to Rome?", target: "Quanto impiega il Frecciarossa da Milano a Roma?" },
            options: ["One hour", "About three hours", "Five hours", "About two hours"],
            answer: "About three hours"
        },
        {
            id: "it-c-a2-2-q3",
            type: "reflection",
            prompt: { native: "How do people in your country handle transport delays? Is the attitude similar to the Italian one described here?", target: "Come reagiscono le persone nel tuo paese ai ritardi nei trasporti? L'atteggiamento è simile a quello italiano descritto qui?" }
        }
    ],
    didYouKnow: {
        native: "In 2022, Italy launched the Frecciarossa 1000, reaching a test speed of 393 km/h — making it one of the fastest trains ever tested in Europe. Yet on the same day, a regional train in Calabria arrived 47 minutes late. This is the dual reality of Italian railways.",
        target: "Nel 2022, l'Italia ha lanciato il Frecciarossa 1000, che ha raggiunto una velocità di test di 393 km/h — rendendolo uno dei treni più veloci mai testati in Europa. Eppure lo stesso giorno, un treno regionale in Calabria è arrivato con 47 minuti di ritardo. Questa è la doppia realtà delle ferrovie italiane."
    }
}
