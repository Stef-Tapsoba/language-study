import { CultureEpisode } from "../../../../types"
export const itCA12: CultureEpisode = {
    id: "it-c-a1-2",
    language: "it",
    level: "A1",
    category: "geography",
    region: "north-italy",
    title: {
        native: "Nord e Sud — l'Italia sono due paesi?",
        target: "Nord e Sud — due Italie?"
    },
    subtitle: "Italy only unified as one country in 1861 — and the north-south divide still shapes everything from politics to pasta shapes.",

    video: {
        youtubeId: "",
        title: "",
        channelName: "",
        captionLang: "it"
    },

    photos: [
        {
            url: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800",
            caption: {
                native: "Milan — Italy's northern economic capital",
                target: "Milano — la capitale economica del Nord Italia"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800",
            caption: {
                native: "A village in Sicily — Southern Italy's largest island",
                target: "Un paese in Sicilia — la più grande isola del Sud Italia"
            }
        }
    ],

    body: {
        target: `Molte persone pensano all'Italia come a un paese unito. Ma la storia è più complicata.

L'Italia è diventata un paese unito solo nel 1861. Prima, il territorio era diviso in molti stati diversi: il Regno di Sardegna al nord, il Granducato di Toscana al centro, il Regno delle Due Sicilie al sud. Ogni stato aveva la propria lingua, la propria cucina e la propria cultura.

Oggi, le differenze tra Nord e Sud sono ancora molto visibili.

Al nord — Milano, Torino, Bologna — c'è l'industria, la finanza e la moda. Il PIL del nord è simile al PIL della Germania. Le persone lavorano molto e mangiano in fretta.

Al sud — Napoli, Palermo, Bari — la vita è diversa. Il ritmo è più lento. Le famiglie sono più importanti. Il cibo è diverso. La pasta al sud è con il sugo di pomodoro. Al nord, la pasta è spesso con il ragù di carne o con il burro.

Anche i dialetti sono diversi. Il milanese, il veneziano, il napoletano e il siciliano sono così diversi che storicamente non si capivano. L'italiano standard — basato sul toscano di Dante e Petrarca — è la lingua ufficiale, ma i dialetti sono ancora vivi.

Per i turisti, questa diversità è un tesoro. Ogni regione ha la sua cucina, la sua architettura, la sua musica. La pizza di Napoli è diversa dalla focaccia di Genova. Il risotto di Milano è diverso dalle arancine di Palermo.

L'Italia non è un paese — è una collezione di culture straordinarie in uno spazio relativamente piccolo.`,
        native: `Many people think of Italy as a united country. But the history is more complicated.

Italy only became a united country in 1861. Before that, the territory was divided into many different states: the Kingdom of Sardinia in the north, the Grand Duchy of Tuscany in the centre, the Kingdom of the Two Sicilies in the south. Each state had its own language, its own cuisine and its own culture.

Today, the differences between North and South are still very visible.

In the north — Milan, Turin, Bologna — there is industry, finance and fashion. The GDP of the north is similar to Germany's GDP. People work a lot and eat quickly.

In the south — Naples, Palermo, Bari — life is different. The pace is slower. Families are more important. The food is different. Pasta in the south is with tomato sauce. In the north, pasta is often with meat ragù or with butter.

Even the dialects are different. Milanese, Venetian, Neapolitan and Sicilian are so different that historically people couldn't understand each other. Standard Italian — based on the Tuscan of Dante and Petrarch — is the official language, but dialects are still alive.

For tourists, this diversity is a treasure. Each region has its own cuisine, its architecture, its music. Neapolitan pizza is different from Genoese focaccia. Milanese risotto is different from Palermitan arancine.

Italy is not one country — it is a collection of extraordinary cultures in a relatively small space.`
    },

    simpleTarget: `L'Italia è un paese grande e molto diverso.
Al nord ci sono Milano e Torino.
Al sud ci sono Napoli e Palermo.
Il nord e il sud hanno culture diverse.
Al nord, la gente mangia risotto e polenta.
Al sud, la gente mangia pizza e pasta al pomodoro.
Ogni regione in Italia ha la sua cucina speciale.`,

    cultureVocab: [
        {
            word: "il nord",
            translation: "the north (of Italy)",
            culturalNote: "Northern Italy — Milan, Turin, Bologna — is one of the richest regions in Europe. It is known for industry, fashion, and rice-based dishes like risotto and polenta."
        },
        {
            word: "il sud",
            translation: "the south (of Italy)",
            culturalNote: "Southern Italy — Naples, Palermo, Bari — has a slower pace of life and a stronger family culture. It gave the world pizza, mozzarella, and pasta al pomodoro."
        },
        {
            word: "la regione",
            translation: "region",
            culturalNote: "Italy has 20 regions, each with its own flag, cuisine, and identity. Many Italians identify as 'Neapolitan' or 'Sicilian' before they identify as 'Italian'."
        },
        {
            word: "la cucina",
            translation: "cuisine, kitchen",
            culturalNote: "Italian 'cucina' means both 'kitchen' and 'cuisine' — the two are inseparable. Every Italian region has its own cucina, fiercely defended as the best in the country."
        },
        {
            word: "la pasta al pomodoro",
            translation: "pasta with tomato sauce",
            culturalNote: "The definitive dish of southern Italy. In the north, pasta is more often served with butter, cream, or meat ragù. This north/south divide is one of Italy's most delicious arguments."
        }
    ],

    questions: [
        {
            id: "it-c-a1-2-q1",
            type: "comprehension",
            prompt: { native: "When did Italy become a unified country?", target: "Quando è diventata l'Italia un paese unito?" },
            options: ["1776", "1815", "1861", "1945"],
            answer: "1861"
        },
        {
            id: "it-c-a1-2-q2",
            type: "reflection",
            prompt: { native: "Does your country have strong regional differences — in food, accent, or culture? How do people feel about these differences?", target: "Does your country have strong regional differences — in food, accent, or culture? How do people feel about these differences?" }
        }
    ],

    didYouKnow: {
        native: "When Italy unified in 1861, only about 2.5% of the population spoke what we now call 'Italian'. The rest spoke regional languages and dialects that were mutually unintelligible. It was mass conscription in WWI — putting men from all regions in the same trenches — and later television, that finally created a shared national language.",
        target: "Quando l'Italia si unificò nel 1861, solo circa il 2,5% della popolazione parlava quello che oggi chiamiamo 'italiano'. Il resto parlava lingue regionali e dialetti reciprocamente incomprensibili. Fu la coscrizione di massa nella Prima Guerra Mondiale — mettere uomini di tutte le regioni nelle stesse trincee — e poi la televisione, a creare finalmente una lingua nazionale condivisa."
    }
}
