// src/data/french/reading/a2.ts
import { ReadingPassage } from "../../../types"

export const a2Reading: ReadingPassage[] = [
    // ── fr-r-a2-1 : Everyday — a weekend story (PC/Imparfait) ─────────────────
    {
        id: "fr-r-a2-1",
        level: "A2",
        category: "everyday",
        title: "Un week-end inoubliable",
        body: {
            target: `C'était un samedi de septembre. Il faisait encore chaud et la ville était calme — la plupart des Parisiens étaient partis en vacances. Lucie avait décidé de profiter de ce week-end pour explorer un quartier qu'elle ne connaissait pas : Belleville.

Elle s'est levée tard, vers dix heures, et a pris un long café sur son balcon. Elle se sentait détendue, sans aucun plan précis. Vers midi, elle a pris le métro jusqu'à Belleville et a commencé à marcher sans destination.

Elle a découvert une petite rue avec des ateliers d'artistes, des galeries et des cafés colorés. Un tableau dans une vitrine a arrêté son regard — une grande huile sur toile représentant un marché africain, plein de couleurs et de vie. Elle a poussé la porte de la galerie.

À l'intérieur, un homme d'une cinquantaine d'années arrangeait des cadres. C'était le peintre lui-même, Amadou. Il parlait doucement, avec un accent léger qu'elle n'a pas pu identifier. Ils ont parlé pendant une heure — de peinture, de Belleville, de leurs enfances respectives.

Quand Lucie est sortie, il faisait presque nuit. Elle avait oublié de manger, mais elle s'en fichait complètement. C'était l'une de ces journées où rien ne s'était passé comme prévu — et c'était exactement pour ça que c'était parfait.`,
            native: `It was a Saturday in September. It was still warm and the city was quiet — most Parisians had gone on holiday. Lucie had decided to use this weekend to explore a neighbourhood she didn't know: Belleville.

She got up late, around ten, and had a long coffee on her balcony. She felt relaxed, with no specific plans. Around noon, she took the metro to Belleville and started walking without a destination.

She discovered a small street with artists' studios, galleries, and colourful cafés. A painting in a window caught her eye — a large oil on canvas depicting an African market, full of colour and life. She pushed open the gallery door.

Inside, a man in his fifties was arranging frames. It was the painter himself, Amadou. He spoke softly, with a slight accent she couldn't identify. They talked for an hour — about painting, about Belleville, about their respective childhoods.

When Lucie came out, it was nearly dark. She had forgotten to eat, but she didn't care at all. It was one of those days when nothing had gone as planned — and that was exactly why it was perfect.`,
        },
        vocabGloss: [
            { word: "inoubliable", translation: "unforgettable" },
            { word: "détendue", translation: "relaxed (feminine)" },
            { word: "une vitrine", translation: "a shop window" },
            { word: "une huile sur toile", translation: "an oil painting on canvas" },
            { word: "représentant", translation: "depicting / representing" },
            { word: "d'une cinquantaine d'années", translation: "in his fifties" },
            { word: "s'en ficher", translation: "not to care (informal)" },
            { word: "respectif / respective", translation: "respective" },
        ],
        questions: [
            { id: "fr-r-a2-1-q1", level: "A2", prompt: "Pourquoi la ville était-elle calme ce week-end ?", options: ["La plupart des Parisiens étaient partis en vacances.", "Il y avait une grève.", "C'était un jour férié.", "Il faisait mauvais temps."], answer: "La plupart des Parisiens étaient partis en vacances." },
            { id: "fr-r-a2-1-q2", level: "A2", prompt: "Qu'est-ce qui a arrêté le regard de Lucie dans la rue ?", options: ["Un tableau dans une vitrine", "Un café coloré", "Un atelier d'artiste", "Un homme qui arrangeait des cadres"], answer: "Un tableau dans une vitrine" },
            { id: "fr-r-a2-1-q3", level: "A2", prompt: "Pendant combien de temps Lucie a-t-elle parlé avec Amadou ?", options: ["Une heure", "Deux heures", "Vingt minutes", "Toute la soirée"], answer: "Une heure" },
            { id: "fr-r-a2-1-q4", level: "A2", prompt: "Pourquoi Lucie considère-t-elle que cette journée était parfaite ?", options: ["Parce que rien ne s'était passé comme prévu", "Parce qu'elle avait bien mangé", "Parce qu'elle a acheté un tableau", "Parce que le temps était beau"], answer: "Parce que rien ne s'était passé comme prévu" },
        ],
    },

    // ── fr-r-a2-2 : Dialogue — comparing two cities ────────────────────────────
    {
        id: "fr-r-a2-2",
        level: "A2",
        category: "dialogue",
        title: "Paris ou Lyon — le grand débat",
        body: {
            target: `— Alors, tu t'es installé à Lyon depuis six mois maintenant. Tu regrettes Paris ?
— Honnêtement ? Pas du tout. Je vis mieux ici.
— Vraiment ? Mais Paris, c'est quand même la capitale ! Il y a beaucoup plus de choses à faire.
— C'est vrai dans une certaine mesure. Mais ce que j'aime à Lyon, c'est le rythme de vie. Les gens sont moins stressés. Les appartements sont plus grands et moins chers. Et la cuisine — on dit que Lyon est la capitale gastronomique de France, et c'est mérité.
— Et pour le travail ? Tu ne trouves pas que les opportunités sont moins nombreuses qu'à Paris ?
— Pour certains secteurs, oui. Mais moi je travaille à distance depuis deux ans, donc ça ne me pose pas de problème. En revanche, j'arrive au bureau en dix minutes — contre quarante-cinq à Paris. C'est ça qui change la vie.
— Et le manque de Paris ? Les musées, les restaurants étoilés, l'animation la nuit...
— Je n'en souffre pas. D'ailleurs, je reviens à Paris deux ou trois fois par an. Je l'apprécie encore mieux maintenant — comme une ville qu'on visite, pas une ville où on survit.
— Donc pour toi, Lyon est meilleure que Paris ?
— Pour y habiter ? Oui, sans hésiter. Pour visiter ? Paris est imbattable. Mais ce sont deux choses très différentes.`,
            native: `— So, you've been settled in Lyon for six months now. Do you miss Paris?
— Honestly? Not at all. I live better here.
— Really? But Paris is still the capital! There's much more to do.
— That's true to a certain extent. But what I love about Lyon is the pace of life. People are less stressed. Flats are bigger and cheaper. And the food — they say Lyon is the gastronomic capital of France, and it's deserved.
— And for work? Don't you find there are fewer opportunities than in Paris?
— For some sectors, yes. But I've been working remotely for two years, so it's not a problem for me. On the other hand, I get to the office in ten minutes — versus forty-five in Paris. That's what changes your life.
— And missing Paris? The museums, the Michelin-starred restaurants, the nightlife...
— I don't suffer from it. Besides, I come back to Paris two or three times a year. I appreciate it even more now — like a city you visit, not a city where you survive.
— So for you, Lyon is better than Paris?
— To live in? Yes, without hesitation. To visit? Paris is unbeatable. But those are two very different things.`,
        },
        vocabGloss: [
            { word: "s'installer", translation: "to settle (move to a place)" },
            { word: "mérité", translation: "deserved" },
            { word: "à distance", translation: "remotely" },
            { word: "en revanche", translation: "on the other hand" },
            { word: "le manque", translation: "the lack / the missing" },
            { word: "étoilé", translation: "starred (Michelin-starred)" },
            { word: "survivre", translation: "to survive" },
            { word: "imbattable", translation: "unbeatable" },
        ],
        questions: [
            { id: "fr-r-a2-2-q1", level: "A2", prompt: "Depuis combien de temps l'homme habite-t-il à Lyon ?", options: ["Six mois", "Deux ans", "Un an", "Trois mois"], answer: "Six mois" },
            { id: "fr-r-a2-2-q2", level: "A2", prompt: "Pourquoi le problème du travail ne le concerne-t-il pas ?", options: ["Il travaille à distance depuis deux ans.", "Il a trouvé un emploi à Lyon.", "Il est à la retraite.", "Il voyage souvent pour le travail."], answer: "Il travaille à distance depuis deux ans." },
            { id: "fr-r-a2-2-q3", level: "A2", prompt: "Quelle est la différence entre Paris et Lyon pour lui ?", options: ["Lyon pour habiter, Paris pour visiter", "Lyon pour travailler, Paris pour les loisirs", "Paris pour les deux", "Lyon pour les deux"], answer: "Lyon pour habiter, Paris pour visiter" },
            { id: "fr-r-a2-2-q4", level: "A2", prompt: "Combien de fois par an revient-il à Paris ?", options: ["Deux ou trois fois", "Une fois", "Quatre ou cinq fois", "Chaque mois"], answer: "Deux ou trois fois" },
        ],
    },

    // ── fr-r-a2-3 : Travel — a delayed train ──────────────────────────────────
    {
        id: "fr-r-a2-3",
        level: "A2",
        category: "everyday",
        title: "Le voyage raté — ou presque",
        body: {
            target: `Je voulais prendre le TGV de seize heures pour rentrer à Bordeaux. J'étais déjà sur le quai, ma valise à mes pieds, quand j'ai vu sur le panneau d'affichage que mon train avait du retard — une heure et demie.

Je suis allé au guichet. La queue était longue et j'ai attendu vingt minutes. L'agent m'a expliqué qu'il y avait un incident technique entre Tours et Poitiers. Elle m'a proposé de prendre le train de dix-sept heures trente — il était direct et arriverait à Bordeaux à vingt heures.

J'ai accepté. J'avais le temps, donc je suis allé dans le café de la gare commander un sandwich et un café. Je me suis installé près de la fenêtre et j'ai regardé les gens passer. Il y avait une femme avec trois valises immenses qui cherchait son quai en courant. Un enfant qui pleurait parce qu'il avait perdu son doudou. Un vieux monsieur qui lisait tranquillement son journal, comme si le temps n'existait pas.

Le train de dix-sept heures trente est parti à l'heure. J'ai dormi presque tout le trajet. Quand je suis arrivé à Bordeaux, il faisait nuit, mais je me sentais étonnamment bien — comme si cette heure et demie d'attente m'avait offert un cadeau inattendu : du temps pour ne rien faire.`,
            native: `I wanted to take the 4pm TGV to get back to Bordeaux. I was already on the platform, my suitcase at my feet, when I saw on the departure board that my train was delayed — one and a half hours.

I went to the ticket window. The queue was long and I waited twenty minutes. The agent explained that there was a technical incident between Tours and Poitiers. She offered me the option of taking the 5:30pm train — it was direct and would arrive in Bordeaux at 8pm.

I agreed. I had time, so I went to the station café to order a sandwich and a coffee. I settled by the window and watched people go by. There was a woman with three enormous suitcases looking for her platform at a run. A child crying because he had lost his comfort toy. An old gentleman calmly reading his newspaper, as if time didn't exist.

The 5:30 train left on time. I slept for almost the entire journey. When I arrived in Bordeaux, it was night, but I felt surprisingly well — as if that hour and a half of waiting had given me an unexpected gift: time to do nothing.`,
        },
        vocabGloss: [
            { word: "le panneau d'affichage", translation: "the departure board" },
            { word: "un incident technique", translation: "a technical incident" },
            { word: "je me suis installé", translation: "I settled (sat down)" },
            { word: "un doudou", translation: "a comfort toy / cuddly toy" },
            { word: "étonnamment", translation: "surprisingly" },
            { word: "un cadeau inattendu", translation: "an unexpected gift" },
        ],
        questions: [
            { id: "fr-r-a2-3-q1", level: "A2", prompt: "Pourquoi le train de seize heures avait-il du retard ?", options: ["Un incident technique entre Tours et Poitiers", "Une grève", "Le mauvais temps", "Un problème à la gare"], answer: "Un incident technique entre Tours et Poitiers" },
            { id: "fr-r-a2-3-q2", level: "A2", prompt: "Qu'est-ce que l'agent lui a proposé ?", options: ["De prendre le train de dix-sept heures trente", "D'attendre son train original", "De prendre un autobus", "De demander un remboursement"], answer: "De prendre le train de dix-sept heures trente" },
            { id: "fr-r-a2-3-q3", level: "A2", prompt: "Qu'a-t-il fait pendant l'attente ?", options: ["Il est allé au café et a regardé les gens.", "Il a dormi sur le quai.", "Il a appelé sa famille.", "Il a lu son journal."], answer: "Il est allé au café et a regardé les gens." },
            { id: "fr-r-a2-3-q4", level: "A2", prompt: "Comment s'est-il senti en arrivant à Bordeaux ?", options: ["Étonnamment bien", "Très fatigué", "Très stressé", "Déçu"], answer: "Étonnamment bien" },
        ],
    },

    // ── fr-r-a2-4 : Culture — the French art of debate ────────────────────────
    {
        id: "fr-r-a2-4",
        level: "A2",
        category: "culture",
        title: "L'art français du débat",
        body: {
            target: `En France, il est normal — voire attendu — d'avoir des opinions et de les défendre. Lors d'un dîner entre amis, la conversation peut passer, en quelques minutes, des recettes de cuisine à la politique nationale, en passant par la philosophie ou le cinéma. C'est une caractéristique culturelle profonde.

Cette tradition du débat remonte loin dans l'histoire française. Les cafés parisiens du XVIIIe siècle étaient des lieux de discussion intellectuelle intense. Des philosophes comme Voltaire et Rousseau ont contribué à forger une culture où la pensée critique est valorisée.

Mais il ne s'agit pas simplement de parler fort ou d'avoir raison. La façon de débattre compte autant que le contenu. En France, on apprend dès l'école à structurer un argument, à reconnaître la thèse adverse, et à utiliser des connecteurs logiques : certes, cependant, en revanche, toutefois, il n'en reste pas moins que.

Un étranger qui arrive en France peut parfois se sentir agressé par la directness des Français. Mais ce qu'il perçoit comme de l'hostilité est souvent de la stimulation intellectuelle. Si un Français contredit votre opinion, c'est souvent parce qu'il vous prend au sérieux.

La vraie insolence française n'est pas de ne pas être d'accord — c'est de ne pas avoir d'opinion du tout.`,
            native: `In France, it is normal — even expected — to have opinions and defend them. At a dinner with friends, the conversation can shift, in a few minutes, from cooking recipes to national politics, via philosophy or cinema. It is a deep cultural characteristic.

This tradition of debate goes back a long way in French history. The Parisian cafés of the 18th century were places of intense intellectual discussion. Philosophers like Voltaire and Rousseau helped forge a culture where critical thinking is valued.

But it is not simply a matter of speaking loudly or being right. How you debate matters as much as the content. In France, from school onwards, people learn to structure an argument, acknowledge the opposing thesis, and use logical connectors: certes (admittedly), cependant (however), en revanche (on the other hand), toutefois (nevertheless), il n'en reste pas moins que (the fact remains that).

A foreigner arriving in France may sometimes feel attacked by the directness of French people. But what they perceive as hostility is often intellectual stimulation. If a French person contradicts your opinion, it is often because they are taking you seriously.

The real French insolence is not to disagree — it is to have no opinion at all.`,
        },
        vocabGloss: [
            { word: "voire", translation: "even / indeed" },
            { word: "attendu", translation: "expected" },
            { word: "remonter", translation: "to go back (in time)" },
            { word: "forger", translation: "to forge / shape" },
            { word: "valorisé", translation: "valued / prized" },
            { word: "la thèse adverse", translation: "the opposing argument" },
            { word: "contredire", translation: "to contradict" },
            { word: "prendre au sérieux", translation: "to take seriously" },
        ],
        questions: [
            { id: "fr-r-a2-4-q1", level: "A2", prompt: "Qu'est-ce que les cafés parisiens représentaient au XVIIIe siècle ?", options: ["Des lieux de discussion intellectuelle intense", "Des lieux pour boire du café", "Des galeries d'art", "Des écoles philosophiques"], answer: "Des lieux de discussion intellectuelle intense" },
            { id: "fr-r-a2-4-q2", level: "A2", prompt: "Qu'apprend-on à l'école en France, selon le texte ?", options: ["À structurer un argument et reconnaître la thèse adverse", "À être d'accord avec les autres", "À parler fort pour convaincre", "À éviter les conflits"], answer: "À structurer un argument et reconnaître la thèse adverse" },
            { id: "fr-r-a2-4-q3", level: "A2", prompt: "Comment un étranger peut-il percevoir la directness française ?", options: ["Comme de l'hostilité, alors que c'est souvent de la stimulation intellectuelle", "Comme de la politesse", "Comme de l'indifférence", "Comme une invitation à changer d'avis"], answer: "Comme de l'hostilité, alors que c'est souvent de la stimulation intellectuelle" },
            { id: "fr-r-a2-4-q4", level: "A2", prompt: "Quelle est la 'vraie insolence française' selon le texte ?", options: ["Ne pas avoir d'opinion", "Contredire les autres", "Parler trop fort", "Changer d'avis constamment"], answer: "Ne pas avoir d'opinion" },
        ],
    },

    // ── fr-r-a2-5 : Everyday — a letter about future plans ────────────────────
    {
        id: "fr-r-a2-5",
        level: "A2",
        category: "everyday",
        title: "Lettre à une amie — mes projets",
        body: {
            target: `Chère Inès,

Je t'écris depuis mon appartement à Toulouse où j'habite maintenant depuis trois mois. Le temps passe vite ! Je viens de terminer ma première période d'essai au travail — ça s'est très bien passé et mon responsable m'a dit que je pourrais rester.

Je me sens beaucoup mieux qu'au début. Les premiers semaines, je me sentais un peu perdue — une ville nouvelle, peu d'amis, beaucoup de travail. Mais maintenant je connais quelques personnes sympas dans mon immeuble, et j'ai découvert un marché incroyable tous les dimanches à deux rues de chez moi.

Pour l'avenir proche : la semaine prochaine, j'irai à Paris pour voir mes parents. Je ne les ai pas vus depuis mon déménagement ! Et pour Noël, si j'ai des congés supplémentaires, j'aimerais partir quelques jours en Espagne — je viens de commencer des cours d'espagnol, donc ça serait une bonne occasion de pratiquer.

Dans un monde idéal, d'ici deux ans, je voudrais trouver un appartement plus grand avec un balcon, et peut-être adopter un chat. Ce serait la vie parfaite.

Et toi ? Tu m'as dit que tu envisageais de quitter Paris. C'est vrai ? Raconte-moi tout quand tu peux.

Bises,
Camille`,
            native: `Dear Inès,

I'm writing to you from my flat in Toulouse where I've been living for three months now. Time passes quickly! I just finished my probationary period at work — it went very well and my manager told me I could stay.

I feel much better than at the beginning. The first few weeks, I felt a bit lost — a new city, few friends, a lot of work. But now I know a few nice people in my building, and I've discovered an incredible market every Sunday two streets from home.

For the near future: next week, I'll go to Paris to see my parents. I haven't seen them since my move! And for Christmas, if I get extra leave, I'd like to go away for a few days to Spain — I just started Spanish lessons, so it would be a good opportunity to practise.

In an ideal world, within two years, I'd like to find a larger flat with a balcony, and maybe adopt a cat. That would be the perfect life.

And you? You told me you were considering leaving Paris. Is that true? Tell me everything when you can.

Love,
Camille`,
        },
        vocabGloss: [
            { word: "une période d'essai", translation: "a probationary period" },
            { word: "perdue", translation: "lost (feminine)" },
            { word: "un déménagement", translation: "a move (house)" },
            { word: "des congés", translation: "leave / holidays" },
            { word: "adopter", translation: "to adopt" },
            { word: "envisager de", translation: "to be considering" },
        ],
        questions: [
            { id: "fr-r-a2-5-q1", level: "A2", prompt: "Depuis combien de temps Camille habite-t-elle à Toulouse ?", options: ["Trois mois", "Six mois", "Un an", "Deux mois"], answer: "Trois mois" },
            { id: "fr-r-a2-5-q2", level: "A2", prompt: "Qu'est-ce qu'elle vient de faire au travail ?", options: ["Terminer sa première période d'essai", "Démissionner", "Commencer un nouveau poste", "Avoir une promotion"], answer: "Terminer sa première période d'essai" },
            { id: "fr-r-a2-5-q3", level: "A2", prompt: "Quel est son projet pour Noël, si elle a des congés ?", options: ["Partir quelques jours en Espagne", "Aller à Paris", "Rester à Toulouse", "Visiter l'Italie"], answer: "Partir quelques jours en Espagne" },
            { id: "fr-r-a2-5-q4", level: "A2", prompt: "Dans un monde idéal, que voudrait-elle d'ici deux ans ?", options: ["Un appartement plus grand avec un balcon et peut-être un chat", "Retourner à Paris", "Trouver un autre travail", "Apprendre le japonais"], answer: "Un appartement plus grand avec un balcon et peut-être un chat" },
        ],
    },
]
