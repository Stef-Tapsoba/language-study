// src/data/french/listening/a2.ts
import { ListeningExercise } from "../../../types"

export const a2Listening: ListeningExercise[] = [
    // ── fr-l-a2-1 : PC vs Imparfait — a weekend story ─────────────────────────
    {
        id: "fr-l-a2-1",
        level: "A2",
        title: "Le week-end de Thomas",
        script: "Alors, mon week-end ? C'était assez bizarre, en fait. Samedi matin, il faisait beau, donc j'ai décidé d'aller au marché. J'y vais souvent le samedi — j'aime l'ambiance. J'achetais des légumes quand j'ai rencontré Sophie, une amie que je n'avais pas vue depuis six mois. On a pris un café ensemble. Elle m'a raconté qu'elle venait de revenir d'un voyage au Japon. J'étais vraiment jaloux ! Après, je suis rentré chez moi, j'ai cuisiné, et j'ai regardé un film. Le soir, j'avais prévu de sortir, mais j'étais tellement fatigué que je me suis couché à vingt-deux heures. Pas très excitant, mais ça m'a fait du bien.",
        translation: "So, my weekend? It was quite strange, actually. Saturday morning, the weather was nice, so I decided to go to the market. I often go on Saturdays — I like the atmosphere. I was buying vegetables when I met Sophie, a friend I hadn't seen for six months. We had a coffee together. She told me she had just come back from a trip to Japan. I was really jealous! Afterwards, I went back home, cooked, and watched a film. In the evening, I had planned to go out, but I was so tired that I went to bed at ten. Not very exciting, but it did me good.",
        dialogue: [
            { speaker: "Thomas", text: "Alors, mon week-end ? C'était assez bizarre, en fait.", translation: "So, my weekend? It was quite strange, actually." },
            { speaker: "Thomas", text: "Samedi matin, il faisait beau, donc j'ai décidé d'aller au marché.", translation: "Saturday morning, the weather was nice, so I decided to go to the market." },
            { speaker: "Thomas", text: "J'y vais souvent le samedi — j'aime l'ambiance.", translation: "I often go on Saturdays — I like the atmosphere." },
            { speaker: "Thomas", text: "J'achetais des légumes quand j'ai rencontré Sophie, une amie que je n'avais pas vue depuis six mois.", translation: "I was buying vegetables when I met Sophie, a friend I hadn't seen for six months." },
            { speaker: "Thomas", text: "On a pris un café ensemble. Elle m'a raconté qu'elle venait de revenir d'un voyage au Japon. J'étais vraiment jaloux !", translation: "We had a coffee together. She told me she had just come back from a trip to Japan. I was really jealous!" },
            { speaker: "Thomas", text: "Après, je suis rentré chez moi, j'ai cuisiné, et j'ai regardé un film.", translation: "Afterwards, I went home, cooked, and watched a film." },
            { speaker: "Thomas", text: "Le soir, j'avais prévu de sortir, mais j'étais tellement fatigué que je me suis couché à vingt-deux heures.", translation: "In the evening, I had planned to go out, but I was so tired that I went to bed at ten." },
        ],
        questions: [
            { id: "fr-l-a2-1-q1", level: "A2", prompt: "Qu'est-ce que Thomas faisait quand il a rencontré Sophie ?", options: ["Il achetait des légumes au marché.", "Il buvait un café.", "Il rentrait chez lui.", "Il regardait un film."], answer: "Il achetait des légumes au marché." },
            { id: "fr-l-a2-1-q2", level: "A2", prompt: "Depuis combien de temps Thomas n'avait-il pas vu Sophie ?", options: ["Six mois", "Un an", "Trois mois", "Deux semaines"], answer: "Six mois" },
            { id: "fr-l-a2-1-q3", level: "A2", prompt: "Pourquoi Thomas ne sort-il pas le soir ?", options: ["Il était tellement fatigué.", "Il n'avait pas de plans.", "Il faisait mauvais temps.", "Il devait travailler."], answer: "Il était tellement fatigué." },
            { id: "fr-l-a2-1-q4", level: "A2", prompt: "Où Sophie venait-elle de revenir ?", options: ["D'un voyage au Japon", "D'un voyage en Italie", "D'une visite à Paris", "D'un voyage en Espagne"], answer: "D'un voyage au Japon" },
        ],
    },

    // ── fr-l-a2-2 : Comparisons — two friends comparing cities ────────────────
    {
        id: "fr-l-a2-2",
        level: "A2",
        title: "Lyon ou Bordeaux ?",
        script: "Alors, tu as visité Bordeaux la semaine dernière. C'était comment ? C'était vraiment bien ! La ville est plus petite que Lyon, mais elle est très animée — surtout autour des quais. Je trouve que les gens y sont aussi sympathiques qu'à Lyon. Et la cuisine est meilleure qu'à Paris, sans hésiter. Ah bon ? Tu trouves vraiment ? Absolument. Il y a plus de restaurants gastronomiques que je ne pensais. Et les vins, évidemment — c'est imbattable. Mais il y a moins de transports en commun qu'à Lyon, c'est vrai. Ce qui m'a le plus surpris, c'est l'architecture du centre-ville. C'est vraiment la plus belle ville de France, je crois. Ah, ça c'est discutable ! Pour moi, Lyon reste la meilleure pour y habiter.",
        translation: "So, you visited Bordeaux last week. How was it? It was really good! The city is smaller than Lyon, but it's very lively — especially around the waterfront. I find that people there are just as friendly as in Lyon. And the food is better than in Paris, without hesitation. Really? You really think so? Absolutely. There are more gourmet restaurants than I expected. And the wines, obviously — that's unbeatable. But there are fewer public transport options than in Lyon, that's true. What surprised me most was the architecture of the city centre. I think it's really the most beautiful city in France. Ah, that's debatable! For me, Lyon remains the best city to live in.",
        dialogue: [
            { speaker: "Amie", text: "Alors, tu as visité Bordeaux la semaine dernière. C'était comment ?", translation: "So, you visited Bordeaux last week. How was it?" },
            { speaker: "Thomas", text: "C'était vraiment bien ! La ville est plus petite que Lyon, mais elle est très animée.", translation: "It was really good! The city is smaller than Lyon, but it's very lively." },
            { speaker: "Thomas", text: "Je trouve que les gens y sont aussi sympathiques qu'à Lyon. Et la cuisine est meilleure qu'à Paris, sans hésiter.", translation: "I find that people there are just as friendly as in Lyon. And the food is better than in Paris, without hesitation." },
            { speaker: "Amie", text: "Ah bon ? Tu trouves vraiment ?", translation: "Really? You really think so?" },
            { speaker: "Thomas", text: "Absolument. Il y a plus de restaurants gastronomiques que je ne pensais. Et les vins — c'est imbattable.", translation: "Absolutely. There are more gourmet restaurants than I expected. And the wines — that's unbeatable." },
            { speaker: "Thomas", text: "Mais il y a moins de transports en commun qu'à Lyon, c'est vrai.", translation: "But there are fewer public transport options than in Lyon, that's true." },
            { speaker: "Thomas", text: "Ce qui m'a le plus surpris, c'est l'architecture. C'est vraiment la plus belle ville de France, je crois.", translation: "What surprised me most was the architecture. I think it's really the most beautiful city in France." },
            { speaker: "Amie", text: "Ah, ça c'est discutable ! Pour moi, Lyon reste la meilleure pour y habiter.", translation: "Ah, that's debatable! For me, Lyon remains the best city to live in." },
        ],
        questions: [
            { id: "fr-l-a2-2-q1", level: "A2", prompt: "Comment Thomas décrit-il Bordeaux par rapport à Lyon ?", options: ["Plus petite mais très animée", "Plus grande et plus calme", "Moins chère et plus moderne", "Aussi grande mais moins animée"], answer: "Plus petite mais très animée" },
            { id: "fr-l-a2-2-q2", level: "A2", prompt: "Quel inconvénient de Bordeaux Thomas mentionne-t-il ?", options: ["Moins de transports en commun qu'à Lyon", "La cuisine moins bonne", "Moins de restaurants", "Les gens moins sympathiques"], answer: "Moins de transports en commun qu'à Lyon" },
            { id: "fr-l-a2-2-q3", level: "A2", prompt: "Qu'est-ce qui a le plus surpris Thomas à Bordeaux ?", options: ["L'architecture du centre-ville", "Les vins", "Les restaurants", "Les gens"], answer: "L'architecture du centre-ville" },
            { id: "fr-l-a2-2-q4", level: "A2", prompt: "Quelle est l'opinion de l'amie sur la meilleure ville pour habiter ?", options: ["Lyon", "Bordeaux", "Paris", "Elle ne donne pas d'opinion"], answer: "Lyon" },
        ],
    },

    // ── fr-l-a2-3 : Health — at the doctor's ──────────────────────────────────
    {
        id: "fr-l-a2-3",
        level: "A2",
        title: "Chez le médecin",
        script: "Bonjour Monsieur Leclerc. Qu'est-ce qui vous amène aujourd'hui ? Bonjour Docteur. J'ai très mal à la gorge depuis trois jours, et j'ai de la fièvre depuis hier soir. Avez-vous également de la toux ? Oui, un peu. Et j'ai aussi mal aux oreilles — surtout l'oreille droite. D'accord. Depuis quand avez-vous mal aux oreilles ? Depuis hier matin, je crois. La douleur est assez forte. Ouvrez la bouche s'il vous plaît. Oui, la gorge est rouge. Je vais examiner vos oreilles aussi. Voilà — vous avez une angine et une légère infection à l'oreille. Il faut prendre des antibiotiques pendant dix jours. Je vais vous faire une ordonnance. Il ne faut pas arrêter le traitement avant la fin, même si vous vous sentez mieux. D'accord. Est-ce que je peux aller travailler ? Vous devriez vous reposer deux ou trois jours. Buvez beaucoup d'eau et prenez du paracétamol si vous avez encore de la fièvre.",
        translation: "Good morning Mr Leclerc. What brings you in today? Good morning Doctor. I have had a very sore throat for three days, and I have had a fever since last night. Do you also have a cough? Yes, a little. And I also have earache — mainly in the right ear. OK. Since when have you had earache? Since yesterday morning, I think. The pain is quite strong. Open your mouth please. Yes, the throat is red. I will examine your ears too. There — you have tonsillitis and a slight ear infection. You must take antibiotics for ten days. I will write you a prescription. You must not stop the treatment before the end, even if you feel better. OK. Can I go to work? You should rest for two or three days. Drink plenty of water and take paracetamol if you still have a fever.",
        dialogue: [
            { speaker: "Médecin", text: "Bonjour Monsieur Leclerc. Qu'est-ce qui vous amène aujourd'hui ?", translation: "Good morning Mr Leclerc. What brings you in today?" },
            { speaker: "Patient", text: "J'ai très mal à la gorge depuis trois jours, et j'ai de la fièvre depuis hier soir.", translation: "I have had a very sore throat for three days, and I have had a fever since last night." },
            { speaker: "Médecin", text: "Avez-vous également de la toux ?", translation: "Do you also have a cough?" },
            { speaker: "Patient", text: "Oui, un peu. Et j'ai aussi mal aux oreilles — surtout l'oreille droite.", translation: "Yes, a little. And I also have earache — mainly in the right ear." },
            { speaker: "Médecin", text: "Depuis quand avez-vous mal aux oreilles ?", translation: "Since when have you had earache?" },
            { speaker: "Patient", text: "Depuis hier matin, je crois. La douleur est assez forte.", translation: "Since yesterday morning, I think. The pain is quite strong." },
            { speaker: "Médecin", text: "Vous avez une angine et une légère infection à l'oreille. Il faut prendre des antibiotiques pendant dix jours.", translation: "You have tonsillitis and a slight ear infection. You must take antibiotics for ten days." },
            { speaker: "Médecin", text: "Il ne faut pas arrêter le traitement avant la fin, même si vous vous sentez mieux.", translation: "You must not stop the treatment before the end, even if you feel better." },
            { speaker: "Patient", text: "Est-ce que je peux aller travailler ?", translation: "Can I go to work?" },
            { speaker: "Médecin", text: "Vous devriez vous reposer deux ou trois jours. Buvez beaucoup d'eau et prenez du paracétamol si vous avez encore de la fièvre.", translation: "You should rest for two or three days. Drink plenty of water and take paracetamol if you still have a fever." },
        ],
        questions: [
            { id: "fr-l-a2-3-q1", level: "A2", prompt: "Depuis combien de temps le patient a-t-il mal à la gorge ?", options: ["Trois jours", "Un jour", "Deux jours", "Une semaine"], answer: "Trois jours" },
            { id: "fr-l-a2-3-q2", level: "A2", prompt: "Quel est le diagnostic du médecin ?", options: ["Une angine et une légère infection à l'oreille", "Un rhume et de la fièvre", "La grippe", "Une infection pulmonaire"], answer: "Une angine et une légère infection à l'oreille" },
            { id: "fr-l-a2-3-q3", level: "A2", prompt: "Pendant combien de temps le patient doit-il prendre des antibiotiques ?", options: ["Dix jours", "Cinq jours", "Une semaine", "Deux semaines"], answer: "Dix jours" },
            { id: "fr-l-a2-3-q4", level: "A2", prompt: "Le médecin conseille au patient de...", options: ["Se reposer deux ou trois jours", "Aller travailler normalement", "Aller à l'hôpital", "Prendre de l'ibuprofène"], answer: "Se reposer deux ou trois jours" },
        ],
    },

    // ── fr-l-a2-4 : Travel — a delayed train (CP5 script) ─────────────────────
    {
        id: "fr-l-a2-4",
        level: "A2",
        title: "Le voyage raté d'Antoine",
        script: "Donc Antoine, il m'a raconté ça hier soir — franchement, j'en revenais pas. Ça faisait des semaines qu'il planifiait ce voyage à Toulouse pour voir un concert. Il avait réservé son billet de train depuis un mois, son hôtel depuis deux semaines. Il était super enthousiaste. Alors le jour J, il se lève tôt, il prend ses affaires, et il part à la gare. Mais quand il arrive, il voit sur le panneau que son train est supprimé — à cause d'une grève. Il n'avait pas vérifié ses emails depuis la veille, du coup il ne savait pas. Il va au guichet. La queue était interminable. Il a attendu quarante minutes. L'agent lui dit qu'il y a un autre train, mais deux heures plus tard, et qu'il arriverait à Toulouse juste avant le début du concert. Antoine décide de tenter le coup. Il prend le train suivant. Sauf que ce train, lui aussi, a du retard — une heure de retard. Finalement, il arrive à Toulouse avec une heure de retard sur l'heure prévue. Il court à la salle de concert. Et là — vous allez pas le croire — la salle avait fermé ses portes dix minutes avant. Il a loupé tout le concert. Il s'est retrouvé seul à Toulouse à vingt-deux heures, épuisé, frustré. Il a quand même trouvé un petit restaurant sympa et mangé un cassoulet. Il dit que c'était au moins la meilleure chose de la soirée. Il est rentré le lendemain matin. Il dit qu'il ne prendra plus jamais ce train en période de grève. Et si les chemins de fer font encore grève l'année prochaine, il ira en voiture.",
        translation: "So Antoine told me this last night — honestly, I couldn't believe it. He had been planning this trip to Toulouse for weeks to see a concert. He had booked his train ticket a month ago, his hotel two weeks ago. He was super enthusiastic. So on the big day, he gets up early, takes his things, and heads to the station. But when he arrives, he sees on the board that his train is cancelled — because of a strike. He hadn't checked his emails since the day before, so he didn't know. He goes to the ticket window. The queue was endless. He waited forty minutes. The agent tells him there is another train, but two hours later, and that he would arrive in Toulouse just before the start of the concert. Antoine decides to go for it. He takes the next train. Except that this train also has a delay — one hour late. In the end, he arrives in Toulouse one hour behind schedule. He runs to the concert venue. And there — you won't believe it — the doors had closed ten minutes earlier. He missed the entire concert. He found himself alone in Toulouse at 10pm, exhausted, frustrated. He still found a nice little restaurant and ate a cassoulet. He says it was at least the best thing about the evening. He came back the next morning. He says he will never take that train again during a strike. And if the railways go on strike again next year, he will go by car.",
        dialogue: [
            { speaker: "Margaux", text: "Donc Antoine, il m'a raconté ça hier soir — franchement, j'en revenais pas.", translation: "So Antoine told me this last night — honestly, I couldn't believe it." },
            { speaker: "Margaux", text: "Ça faisait des semaines qu'il planifiait ce voyage à Toulouse pour voir un concert. Il avait réservé son billet depuis un mois.", translation: "He had been planning this trip to Toulouse for weeks to see a concert. He had booked his ticket a month ago." },
            { speaker: "Margaux", text: "Mais quand il arrive à la gare, son train est supprimé — à cause d'une grève. Il n'avait pas vérifié ses emails.", translation: "But when he gets to the station, his train is cancelled — because of a strike. He hadn't checked his emails." },
            { speaker: "Margaux", text: "Il a attendu quarante minutes au guichet.", translation: "He waited forty minutes at the ticket window." },
            { speaker: "Margaux", text: "Il prend le train suivant. Sauf que ce train a aussi du retard — une heure de retard.", translation: "He takes the next train. Except that train is also delayed — one hour late." },
            { speaker: "Margaux", text: "Finalement, il arrive à Toulouse avec une heure de retard. La salle avait fermé ses portes dix minutes avant. Il a loupé tout le concert.", translation: "In the end, he arrives in Toulouse one hour late. The doors had closed ten minutes earlier. He missed the entire concert." },
            { speaker: "Margaux", text: "Il a quand même trouvé un restaurant et mangé un cassoulet — il dit que c'était la meilleure chose de la soirée.", translation: "He still found a restaurant and ate a cassoulet — he says it was the best thing about the evening." },
            { speaker: "Margaux", text: "Il dit que si les chemins de fer font encore grève l'année prochaine, il ira en voiture.", translation: "He says that if the railways go on strike again next year, he'll go by car." },
        ],
        questions: [
            { id: "fr-l-a2-4-q1", level: "A2", prompt: "Depuis combien de temps Antoine avait-il réservé son billet de train ?", options: ["Un mois", "Deux semaines", "Une semaine", "Deux mois"], answer: "Un mois" },
            { id: "fr-l-a2-4-q2", level: "A2", prompt: "Pourquoi le premier train a-t-il été supprimé ?", options: ["À cause d'une grève", "À cause d'un incident technique", "À cause du mauvais temps", "À cause d'un problème en gare"], answer: "À cause d'une grève" },
            { id: "fr-l-a2-4-q3", level: "A2", prompt: "Combien de temps Antoine a-t-il attendu au guichet ?", options: ["Quarante minutes", "Vingt minutes", "Une heure", "Dix minutes"], answer: "Quarante minutes" },
            { id: "fr-l-a2-4-q4", level: "A2", prompt: "Qu'est-ce qu'Antoine a trouvé de positif dans cette soirée ?", options: ["Un bon restaurant et un cassoulet délicieux", "Le deuxième train était confortable", "La salle de concert était belle", "Il a rencontré des amis"], answer: "Un bon restaurant et un cassoulet délicieux" },
        ],
    },
]
