import { CultureEpisode } from "../../../../types"

export const frCA23: CultureEpisode = {
    id: "fr-c-a2-3",
    language: "fr",
    level: "A2",
    category: "arts",
    region: "france",
    title: {
        native: "Le cinéma français — une passion nationale",
        target: "Le cinéma français"
    },
    subtitle: "France invented cinema and has never stopped treating it as an art form — not just entertainment.",

    photos: [
        {
            url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800",
            caption: {
                native: "A classic French cinema — the big screen remains central to French culture",
                target: "Un cinéma français classique — la grande salle reste au cœur de la culture française"
            },
            credit: "Unsplash"
        },
        {
            url: "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=800",
            caption: {
                native: "The red carpet at Cannes — the world's most prestigious film festival",
                target: "Le tapis rouge à Cannes — le festival de cinéma le plus prestigieux du monde"
            },
            credit: "Unsplash"
        }
    ],

    body: {
        target: `Le cinéma a été inventé en France. Le 28 décembre 1895, les frères Lumière ont organisé la première projection publique payante de l'histoire à Paris, au Grand Café du boulevard des Capucines. Ce jour est souvent considéré comme la naissance officielle du cinéma.

Depuis, la France n'a jamais cessé de considérer le cinéma comme un art à part entière. En 1959, un groupe de jeunes cinéastes — François Truffaut, Jean-Luc Godard, Claude Chabrol — a révolutionné le cinéma mondial avec la « Nouvelle Vague ». Leurs films étaient personnels, improvisés et très différents du cinéma hollywoodien.

Aujourd'hui, la France produit environ 250 films par an. C'est l'un des pays qui produit le plus de films en dehors des États-Unis. L'État français soutient fortement le cinéma : il existe un système de financement public géré par le Centre National du Cinéma (le CNC) qui aide les réalisateurs à financer leurs projets.

Le Festival de Cannes, qui a lieu chaque année en mai sur la Côte d'Azur, est le festival de cinéma le plus célèbre du monde. La Palme d'Or, la récompense suprême, est l'un des prix les plus convoités du septième art.

Les Français vont régulièrement au cinéma. Avec environ 200 millions d'entrées par an, la France est le pays européen où l'on va le plus au cinéma. Les films étrangers, y compris les films américains, sont presque toujours doublés en français plutôt que sous-titrés. C'est une façon de protéger la langue française.`,
        native: `Cinema was invented in France. On 28 December 1895, the Lumière brothers organised the first public paid film screening in history in Paris, at the Grand Café on the Boulevard des Capucines. This day is often considered the official birth of cinema.

Since then, France has never stopped treating cinema as a fully recognised art form. In 1959, a group of young filmmakers — François Truffaut, Jean-Luc Godard, Claude Chabrol — revolutionised world cinema with the 'Nouvelle Vague' (New Wave). Their films were personal, improvised and very different from Hollywood cinema.

Today, France produces around 250 films per year. It is one of the countries that produces the most films outside the United States. The French state strongly supports cinema: there is a public funding system managed by the Centre National du Cinéma (the CNC) that helps directors finance their projects.

The Cannes Film Festival, held each year in May on the Côte d'Azur, is the most famous film festival in the world. The Palme d'Or, the supreme award, is one of the most coveted prizes in the seventh art.

The French go to the cinema regularly. With around 200 million admissions per year, France is the European country where people go to the cinema the most. Foreign films, including American films, are almost always dubbed into French rather than subtitled. This is a way of protecting the French language.`
    },

    cultureVocab: [
        {
            word: "les frères Lumière",
            translation: "the Lumière brothers",
            culturalNote: "Auguste and Louis Lumière were engineers and photographers from Lyon. Their surname, Lumière, means 'light' in French — an almost poetic fit for the inventors of cinema. Their first film, L'Arrivée d'un train en gare de La Ciotat (1896), reportedly caused the audience to panic, believing a real train was coming at them."
        },
        {
            word: "la Nouvelle Vague",
            translation: "the New Wave",
            culturalNote: "A French film movement (late 1950s–1960s) that rejected the polished studio style of mainstream cinema. Directors shot on location with natural light and non-professional actors. The movement influenced virtually every major director who came after, from Scorsese to Tarantino."
        },
        {
            word: "la Palme d'Or",
            translation: "the Palme d'Or (golden palm) — top prize at Cannes",
            culturalNote: "Awarded since 1955, the Palme d'Or is a golden palm branch. French directors have won it more times than any other nationality. Recent international winners include films from South Korea (Parasite, 2019) and Romania, reflecting Cannes' global reach."
        },
        {
            word: "le doublage",
            translation: "dubbing",
            culturalNote: "France dubs almost all foreign films rather than showing them in the original version with subtitles. This protects the French language but is also criticised for altering performances. Cinemas that show films in their original version (version originale, or VO) are a minority but have a loyal audience."
        },
        {
            word: "le septième art",
            translation: "the seventh art (cinema)",
            culturalNote: "In French culture, the arts are numbered: architecture (1st), sculpture (2nd), painting (3rd), music (4th), literature (5th), theatre (6th) and cinema (7th). Calling cinema 'the seventh art' reflects France's conviction that filmmaking is as culturally significant as painting or music."
        }
    ],

    questions: [
        {
            id: "fr-c-a2-3-q1",
            type: "comprehension",
            prompt: {
                native: "When and where did the Lumière brothers hold the first public film screening?",
                target: "Quand et où les frères Lumière ont-ils organisé la première projection publique ?"
            },
            options: [
                "In Lyon in 1889",
                "In Paris on 28 December 1895",
                "In Cannes in 1900",
                "In Paris in 1910"
            ],
            answer: "In Paris on 28 December 1895"
        },
        {
            id: "fr-c-a2-3-q2",
            type: "comprehension",
            prompt: {
                native: "Why does France dub foreign films into French rather than showing them with subtitles?",
                target: "Pourquoi la France double-t-elle les films étrangers en français plutôt que de les sous-titrer ?"
            },
            options: [
                "Because French audiences do not like reading subtitles",
                "Because dubbing is cheaper than subtitling",
                "As a way of protecting the French language",
                "Because the government requires it by law"
            ],
            answer: "As a way of protecting the French language"
        },
        {
            id: "fr-c-a2-3-q3",
            type: "reflection",
            prompt: {
                native: "Do you prefer watching foreign films dubbed or with subtitles? Why?",
                target: "Préférez-vous regarder les films étrangers doublés ou sous-titrés ? Pourquoi ?"
            }
        }
    ],

    didYouKnow: {
        native: "The French government applies a special tax on cinema tickets, DVD sales and even streaming subscriptions (Netflix, Disney+, etc.) operating in France. The money goes directly into a fund managed by the CNC and is redistributed to French filmmakers. This is why small, artistic French films that might never get made in Hollywood can still find financing in France. In 2023, streaming platforms operating in France were required to invest at least 20–25% of their French revenues into French and European productions.",
        target: "Le gouvernement français applique une taxe spéciale sur les billets de cinéma, les ventes de DVD et même les abonnements aux plateformes de streaming (Netflix, Disney+, etc.) opérant en France. L'argent va directement dans un fonds géré par le CNC et est redistribué aux cinéastes français. C'est pourquoi de petits films artistiques français, qui n'auraient peut-être jamais vu le jour à Hollywood, peuvent quand même trouver un financement en France. En 2023, les plateformes de streaming opérant en France ont été obligées d'investir au moins 20 à 25 % de leurs revenus français dans des productions françaises et européennes."
    },

    relatedIds: ["fr-c-a1-2", "fr-c-a2-1"]
}
