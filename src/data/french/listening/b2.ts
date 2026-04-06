// src/data/french/listening/b2.ts
import { ListeningExercise } from "../../../types"

export const b2Listening: ListeningExercise[] = [
    {
        id: "fr-l-b2-1",
        level: "B2",
        title: "Interview radiophonique: Le télétravail",
        script: "Bonsoir. Vous travaillez depuis chez vous depuis deux ans maintenant. Quels sont, selon vous, les principaux avantages du télétravail ? Le télétravail offre une flexibilité considérable. On économise le temps de transport, on gère mieux son emploi du temps et on est souvent plus productif dans un environnement que l'on choisit. Et les inconvénients ? L'isolement est un vrai problème. Bien que beaucoup apprécient le calme, l'absence d'interactions sociales peut affecter la santé mentale. De plus, il est parfois difficile de séparer vie professionnelle et vie personnelle. Comment y remédier ? Il convient de fixer des horaires stricts et de maintenir un contact régulier avec ses collègues via des outils numériques.",
        translation: "Good evening. You have been working from home for two years now. What do you consider to be the main advantages of remote working? Remote working offers considerable flexibility. You save commuting time, manage your schedule better and are often more productive in an environment of your own choosing. And the disadvantages? Isolation is a real problem. Although many people appreciate the quiet, the absence of social interactions can affect mental health. Moreover, it is sometimes difficult to separate professional life from personal life. How can this be remedied? It is important to set strict working hours and to maintain regular contact with colleagues through digital tools.",
        dialogue: [
            { speaker: "Journaliste", text: "Bonsoir. Vous travaillez depuis chez vous depuis deux ans maintenant. Quels sont, selon vous, les principaux avantages du télétravail ?", translation: "Good evening. You have been working from home for two years now. What do you consider to be the main advantages of remote working?" },
            { speaker: "Expert", text: "Le télétravail offre une flexibilité considérable. On économise le temps de transport, on gère mieux son emploi du temps et on est souvent plus productif dans un environnement que l'on choisit.", translation: "Remote working offers considerable flexibility. You save commuting time, manage your schedule better and are often more productive in an environment of your own choosing." },
            { speaker: "Journaliste", text: "Et les inconvénients ?", translation: "And the disadvantages?" },
            { speaker: "Expert", text: "L'isolement est un vrai problème. Bien que beaucoup apprécient le calme, l'absence d'interactions sociales peut affecter la santé mentale. De plus, il est parfois difficile de séparer vie professionnelle et vie personnelle.", translation: "Isolation is a real problem. Although many people appreciate the quiet, the absence of social interactions can affect mental health. Moreover, it is sometimes difficult to separate professional life from personal life." },
            { speaker: "Journaliste", text: "Comment y remédier ?", translation: "How can this be remedied?" },
            { speaker: "Expert", text: "Il convient de fixer des horaires stricts et de maintenir un contact régulier avec ses collègues via des outils numériques.", translation: "It is important to set strict working hours and to maintain regular contact with colleagues through digital tools." },
        ],
        questions: [
            {
                id: "fr-l-b2-1-q1",
                level: "B2",
                prompt: "Quel avantage principal du télétravail est mentionné en premier ?",
                options: ["La meilleure rémunération", "La flexibilité et le gain de temps de transport", "La possibilité de voyager", "La réduction des charges de l'entreprise"],
                answer: "La flexibilité et le gain de temps de transport"
            },
            {
                id: "fr-l-b2-1-q2",
                level: "B2",
                prompt: "Quel inconvénient principal du télétravail est cité ?",
                options: ["Le manque d'équipement", "Les problèmes de connexion Internet", "L'isolement et son impact sur la santé mentale", "Le coût élevé du matériel informatique"],
                answer: "L'isolement et son impact sur la santé mentale"
            },
            {
                id: "fr-l-b2-1-q3",
                level: "B2",
                prompt: "Quelle solution l'expert propose-t-il pour remédier aux problèmes du télétravail ?",
                options: ["Revenir au bureau à plein temps", "Fixer des horaires stricts et maintenir le contact avec les collègues", "Travailler dans des espaces de coworking", "Réduire le nombre d'heures de travail"],
                answer: "Fixer des horaires stricts et maintenir le contact avec les collègues"
            }
        ]
    },
    {
        id: "fr-l-b2-2",
        level: "B2",
        title: "Conférence universitaire: Les changements climatiques",
        script: "Bonjour à tous. Aujourd'hui, nous allons examiner les causes et les conséquences des changements climatiques. Le réchauffement climatique est principalement dû aux émissions de gaz à effet de serre produites par les activités humaines : la combustion des énergies fossiles, la déforestation et l'agriculture intensive. Ces émissions piègent la chaleur dans l'atmosphère, entraînant une hausse des températures mondiales. Les conséquences sont déjà visibles : montée du niveau des mers, multiplication des événements météorologiques extrêmes, perte de biodiversité et sécheresses plus fréquentes. Des accords internationaux, comme l'Accord de Paris de 2015, visent à limiter le réchauffement à 1,5 degré. Néanmoins, les efforts actuels restent insuffisants. Le développement des énergies renouvelables constitue l'une des réponses les plus prometteuses à cette crise.",
        translation: "Good morning everyone. Today we will examine the causes and consequences of climate change. Global warming is primarily caused by greenhouse gas emissions produced by human activities: the burning of fossil fuels, deforestation and intensive agriculture. These emissions trap heat in the atmosphere, leading to a rise in global temperatures. The consequences are already visible: rising sea levels, more frequent extreme weather events, loss of biodiversity and more frequent droughts. International agreements, such as the 2015 Paris Agreement, aim to limit warming to 1.5 degrees. Nevertheless, current efforts remain insufficient. The development of renewable energies represents one of the most promising responses to this crisis.",
        questions: [
            {
                id: "fr-l-b2-2-q1",
                level: "B2",
                prompt: "Selon la conférence, quelle est la cause principale du réchauffement climatique ?",
                options: ["Les éruptions volcaniques", "Les émissions de gaz à effet de serre dues aux activités humaines", "Les variations naturelles du soleil", "La pollution des océans"],
                answer: "Les émissions de gaz à effet de serre dues aux activités humaines"
            },
            {
                id: "fr-l-b2-2-q2",
                level: "B2",
                prompt: "Quel accord international est mentionné dans la conférence ?",
                options: ["Le Protocole de Kyoto", "Le Traité de Rome", "L'Accord de Paris de 2015", "La Convention de Vienne"],
                answer: "L'Accord de Paris de 2015"
            },
            {
                id: "fr-l-b2-2-q3",
                level: "B2",
                prompt: "Quelle solution est présentée comme l'une des plus prometteuses ?",
                options: ["La réduction de la population mondiale", "Le développement des énergies renouvelables", "L'abandon de l'agriculture", "La migration vers des zones moins exposées"],
                answer: "Le développement des énergies renouvelables"
            }
        ]
    },
    {
        id: "fr-l-b2-3",
        level: "B2",
        title: "Débat politique: La laïcité",
        script: "Notre débat de ce soir porte sur la laïcité en France. La laïcité est un principe fondamental de la République française, garanti par la loi de 1905. Elle assure la séparation de l'Église et de l'État et garantit la liberté de conscience de chaque citoyen. Certes, mais certains estiment que son application est devenue trop rigide. Des tensions sont apparues notamment autour du port de signes religieux dans l'espace public. Il convient de distinguer la laïcité de l'État, qui est incontestable, de la laïcité imposée aux individus dans leur vie quotidienne. Bien que des ajustements soient nécessaires, les valeurs de neutralité et d'égalité restent indispensables à la cohésion sociale. Merci à tous. Ce débat est loin d'être clos.",
        translation: "Tonight's debate focuses on secularism in France. Secularism is a fundamental principle of the French Republic, guaranteed by the 1905 law. It ensures the separation of Church and State and guarantees the freedom of conscience of every citizen. Certainly, but some feel that its application has become too rigid. Tensions have arisen in particular around the wearing of religious symbols in the public sphere. It is important to distinguish between the secularism of the State, which is unquestionable, and secularism imposed on individuals in their daily lives. Although adjustments are necessary, the values of neutrality and equality remain essential to social cohesion. Thank you all. This debate is far from over.",
        dialogue: [
            { speaker: "Modérateur", text: "Notre débat de ce soir porte sur la laïcité en France.", translation: "Tonight's debate focuses on secularism in France." },
            { speaker: "Premier intervenant", text: "La laïcité est un principe fondamental de la République française, garanti par la loi de 1905. Elle assure la séparation de l'Église et de l'État et garantit la liberté de conscience de chaque citoyen.", translation: "Secularism is a fundamental principle of the French Republic, guaranteed by the 1905 law. It ensures the separation of Church and State and guarantees the freedom of conscience of every citizen." },
            { speaker: "Deuxième intervenant", text: "Certes, mais certains estiment que son application est devenue trop rigide. Des tensions sont apparues notamment autour du port de signes religieux dans l'espace public.", translation: "Certainly, but some feel that its application has become too rigid. Tensions have arisen in particular around the wearing of religious symbols in the public sphere." },
            { speaker: "Troisième intervenant", text: "Il convient de distinguer la laïcité de l'État, qui est incontestable, de la laïcité imposée aux individus dans leur vie quotidienne. Bien que des ajustements soient nécessaires, les valeurs de neutralité et d'égalité restent indispensables à la cohésion sociale.", translation: "It is important to distinguish between the secularism of the State, which is unquestionable, and secularism imposed on individuals in their daily lives. Although adjustments are necessary, the values of neutrality and equality remain essential to social cohesion." },
            { speaker: "Modérateur", text: "Merci à tous. Ce débat est loin d'être clos.", translation: "Thank you all. This debate is far from over." },
        ],
        questions: [
            {
                id: "fr-l-b2-3-q1",
                level: "B2",
                prompt: "Quelle loi a établi la laïcité en France selon le débat ?",
                options: ["La loi de 1789", "La loi de 1905", "La loi de 1958", "La loi de 1972"],
                answer: "La loi de 1905"
            },
            {
                id: "fr-l-b2-3-q2",
                level: "B2",
                prompt: "Quel sujet a créé des tensions selon le deuxième intervenant ?",
                options: ["Le financement des écoles privées", "Le port de signes religieux dans l'espace public", "Les prières dans les lieux publics", "L'enseignement du fait religieux à l'école"],
                answer: "Le port de signes religieux dans l'espace public"
            },
            {
                id: "fr-l-b2-3-q3",
                level: "B2",
                prompt: "Quelle distinction le troisième intervenant introduit-il ?",
                options: ["Entre religion catholique et autres religions", "Entre laïcité de l'État et laïcité imposée aux individus", "Entre espace privé et espace professionnel", "Entre jeunes et personnes âgées"],
                answer: "Entre laïcité de l'État et laïcité imposée aux individus"
            }
        ]
    },
    {
        id: "fr-l-b2-4",
        level: "B2",
        title: "Podcast culturel: La gastronomie française",
        script: "Bienvenue dans ce podcast consacré à la gastronomie française, inscrite au patrimoine culturel immatériel de l'UNESCO depuis 2010. La cuisine française est bien plus qu'un simple ensemble de recettes : elle représente un art de vivre, un rituel social et une identité culturelle profonde. Le repas gastronomique français se distingue par sa structure codifiée : entrée, plat principal, fromage, dessert, accompagnés de vins soigneusement choisis. La France produit plus de mille variétés de fromage et ses régions offrent une diversité culinaire extraordinaire, du cassoulet toulousain à la bouillabaisse marseillaise. Néanmoins, la gastronomie française évolue : les jeunes chefs intègrent désormais des influences internationales et s'intéressent à la cuisine durable, privilégiant les produits locaux et de saison.",
        translation: "Welcome to this podcast dedicated to French gastronomy, inscribed on UNESCO's intangible cultural heritage list since 2010. French cuisine is much more than a simple collection of recipes: it represents an art of living, a social ritual and a profound cultural identity. The French gastronomic meal is distinguished by its codified structure: starter, main course, cheese, dessert, accompanied by carefully chosen wines. France produces over a thousand varieties of cheese and its regions offer extraordinary culinary diversity, from the Toulouse cassoulet to the Marseille bouillabaisse. Nevertheless, French gastronomy is evolving: young chefs now integrate international influences and are interested in sustainable cuisine, favouring local and seasonal produce.",
        questions: [
            {
                id: "fr-l-b2-4-q1",
                level: "B2",
                prompt: "Depuis quelle année la gastronomie française est-elle inscrite au patrimoine de l'UNESCO ?",
                options: ["2000", "2005", "2010", "2015"],
                answer: "2010"
            },
            {
                id: "fr-l-b2-4-q2",
                level: "B2",
                prompt: "Selon le podcast, qu'est-ce qui caractérise le repas gastronomique français ?",
                options: ["Sa rapidité de préparation", "Sa structure codifiée avec plusieurs plats et des vins", "Son faible coût", "Son influence internationale"],
                answer: "Sa structure codifiée avec plusieurs plats et des vins"
            },
            {
                id: "fr-l-b2-4-q3",
                level: "B2",
                prompt: "Comment la gastronomie française évolue-t-elle selon le podcast ?",
                options: ["Elle reste totalement traditionnelle.", "Les jeunes chefs intègrent des influences internationales et s'intéressent à la cuisine durable.", "Elle abandonne les recettes régionales.", "Elle se tourne uniquement vers la cuisine fusion."],
                answer: "Les jeunes chefs intègrent des influences internationales et s'intéressent à la cuisine durable."
            }
        ]
    },
    {
        id: "fr-l-b2-5",
        level: "B2",
        title: "Discussion philosophique — Le bonheur peut-il s'apprendre ?",
        script: "Bienvenue dans 'Idées en débat'. Aujourd'hui, nous discutons d'une question philosophique qui traverse les siècles : le bonheur peut-il s'apprendre ? Ma première invitée, professeure de philosophie, pense que oui. Ma deuxième invitée, psychologue clinicienne, apporte une perspective différente. Professeure Leroy, commençons par vous. Pour les philosophes anciens, notamment les stoïciens, le bonheur était une compétence qui pouvait être cultivée. Épictète disait qu'il ne faut pas chercher à changer ce que l'on ne contrôle pas, mais à maîtriser notre façon d'y réagir. Bien que cette idée soit ancienne, elle est remarquablement moderne. Docteure Moreau, êtes-vous d'accord ? Partiellement. La psychologie positive a démontré que certaines pratiques — la gratitude, la pleine conscience, l'altruisme — augmentent effectivement le bien-être. Mais il serait réducteur de penser que le bonheur dépend uniquement de notre attitude. Des facteurs structurels — la pauvreté, les discriminations — jouent un rôle que les exercices mentaux seuls ne peuvent pas effacer. N'est-ce pas là une vision trop déterministe ? Pas nécessairement. C'est reconnaître que la liberté individuelle a des limites réelles, et que certaines politiques sociales sont aussi essentielles au bonheur collectif que la philosophie personnelle.",
        translation: "Welcome to 'Ideas in Debate'. Today we discuss a philosophical question that has crossed the centuries: can happiness be learned? My first guest, a philosophy professor, thinks yes. My second guest, a clinical psychologist, brings a different perspective. Professor Leroy, let's start with you. For ancient philosophers, notably the Stoics, happiness was a skill that could be cultivated. Epictetus said that we should not try to change what we cannot control, but to master our way of reacting to it. Although this idea is ancient, it is remarkably modern. Doctor Moreau, do you agree? Partially. Positive psychology has demonstrated that certain practices — gratitude, mindfulness, altruism — do effectively increase well-being. But it would be reductive to think that happiness depends solely on our attitude. Structural factors — poverty, discrimination — play a role that mental exercises alone cannot erase. Isn't that too deterministic a view? Not necessarily. It is recognising that individual freedom has real limits, and that certain social policies are as essential to collective happiness as personal philosophy.",
        dialogue: [
            { speaker: "Présentateur", text: "Bienvenue dans 'Idées en débat'. Aujourd'hui, nous discutons d'une question philosophique qui traverse les siècles : le bonheur peut-il s'apprendre ? Ma première invitée, professeure de philosophie, pense que oui. Ma deuxième invitée, psychologue clinicienne, apporte une perspective différente. Professeure Leroy, commençons par vous.", translation: "Welcome to 'Ideas in Debate'. Today we discuss a philosophical question that has crossed the centuries: can happiness be learned? My first guest, a philosophy professor, thinks yes. My second guest, a clinical psychologist, brings a different perspective. Professor Leroy, let's start with you." },
            { speaker: "Prof. Leroy", text: "Pour les philosophes anciens, notamment les stoïciens, le bonheur était une compétence qui pouvait être cultivée. Épictète disait qu'il ne faut pas chercher à changer ce que l'on ne contrôle pas, mais à maîtriser notre façon d'y réagir. Bien que cette idée soit ancienne, elle est remarquablement moderne.", translation: "For ancient philosophers, notably the Stoics, happiness was a skill that could be cultivated. Epictetus said that we should not try to change what we cannot control, but to master our way of reacting to it. Although this idea is ancient, it is remarkably modern." },
            { speaker: "Présentateur", text: "Docteure Moreau, êtes-vous d'accord ?", translation: "Doctor Moreau, do you agree?" },
            { speaker: "Dr Moreau", text: "Partiellement. La psychologie positive a démontré que certaines pratiques — la gratitude, la pleine conscience, l'altruisme — augmentent effectivement le bien-être. Mais il serait réducteur de penser que le bonheur dépend uniquement de notre attitude. Des facteurs structurels — la pauvreté, les discriminations — jouent un rôle que les exercices mentaux seuls ne peuvent pas effacer.", translation: "Partially. Positive psychology has demonstrated that certain practices — gratitude, mindfulness, altruism — do effectively increase well-being. But it would be reductive to think that happiness depends solely on our attitude. Structural factors — poverty, discrimination — play a role that mental exercises alone cannot erase." },
            { speaker: "Présentateur", text: "N'est-ce pas là une vision trop déterministe ?", translation: "Isn't that too deterministic a view?" },
            { speaker: "Dr Moreau", text: "Pas nécessairement. C'est reconnaître que la liberté individuelle a des limites réelles, et que certaines politiques sociales sont aussi essentielles au bonheur collectif que la philosophie personnelle.", translation: "Not necessarily. It is recognising that individual freedom has real limits, and that certain social policies are as essential to collective happiness as personal philosophy." }
        ],
        questions: [
            { id: "fr-l-b2-5-q1", level: "B2", prompt: "Selon la professeure Leroy, quelle était la conception du bonheur chez les stoïciens ?", options: ["Le bonheur vient de la richesse et du succès", "Le bonheur est une compétence qui peut être cultivée en maîtrisant ses réactions", "Le bonheur dépend des circonstances extérieures", "Le bonheur est un état naturel que l'on perd en grandissant"], answer: "Le bonheur est une compétence qui peut être cultivée en maîtrisant ses réactions" },
            { id: "fr-l-b2-5-q2", level: "B2", prompt: "Quelle est la nuance apportée par la docteure Moreau par rapport à la vision stoïcienne ?", options: ["Elle rejette complètement la psychologie positive", "Elle souligne que des facteurs structurels comme la pauvreté limitent l'efficacité des exercices mentaux", "Elle pense que le bonheur est uniquement une question de génétique", "Elle croit que la philosophie est plus efficace que la psychologie"], answer: "Elle souligne que des facteurs structurels comme la pauvreté limitent l'efficacité des exercices mentaux" },
            { id: "fr-l-b2-5-q3", level: "B2", prompt: "Quelle conclusion peut-on tirer du débat sur la question posée ?", options: ["Le bonheur ne peut pas s'apprendre", "Le bonheur s'apprend uniquement par la méditation", "Le bonheur implique à la fois une pratique individuelle et des conditions sociales favorables", "Les deux invitées s'accordent parfaitement sur le sujet"], answer: "Le bonheur implique à la fois une pratique individuelle et des conditions sociales favorables" }
        ]
    },
]
