// src/data/french/listening/b1.ts
import { ListeningExercise } from "../../../types"

export const b1Listening: ListeningExercise[] = [
    {
        id: "fr-l-b1-1",
        level: "B1",
        title: "La vie étudiante — Student life in France",
        script: `Journaliste : Bonjour Léa. Tu es étudiante en deuxième année de licence à l'université de Bordeaux. Comment se passe ta vie étudiante ?

Léa : Bonjour ! Eh bien, c'est très différent du lycée. À l'université, on a beaucoup plus de liberté, mais aussi beaucoup plus de responsabilités. Personne ne vérifie si tu assistes aux cours. C'est à toi de t'organiser.

Journaliste : Tu habites dans une résidence universitaire ?

Léa : Oui, au CROUS. C'est une chambre assez petite — environ dix mètres carrés — mais le loyer est subventionné par l'État, donc c'est environ deux cent cinquante euros par mois. Sans ça, je ne pourrais pas habiter à Bordeaux. Les loyers dans le privé sont vraiment élevés.

Journaliste : Et les frais de scolarité ? C'est cher en France ?

Léa : Non, c'est l'un des grands avantages du système français. En licence, on paie environ cent soixante euros par an pour une université publique. C'est vraiment accessible. Par contre, il faut payer les livres, le transport, la nourriture...

Journaliste : Est-ce que tu travailles en parallèle de tes études ?

Léa : Oui, je travaille vingt heures par semaine dans un café. C'est fatiguant, mais ça me permet d'avoir un peu d'argent de poche et de payer mes sorties. Et puis, j'ai aussi une bourse de l'État parce que mes parents n'ont pas de grands revenus.

Journaliste : Et la vie sociale, ça ressemble à quoi ?

Léa : Il y a plein d'associations étudiantes. J'ai rejoint un club de théâtre et une association humanitaire. C'est là qu'on rencontre vraiment des amis. Les cours magistraux avec trois cents étudiants, ce n'est pas l'endroit idéal pour socialiser !`,
        translation: `Journalist: Hello Léa. You're a second-year undergraduate student at the University of Bordeaux. How is student life going?

Léa: Hello! Well, it's very different from high school. At university, you have much more freedom, but also much more responsibility. Nobody checks whether you attend classes. It's up to you to organise yourself.

Journalist: Do you live in student halls?

Léa: Yes, in the CROUS. It's a fairly small room — about ten square metres — but the rent is subsidised by the state, so it's around two hundred and fifty euros a month. Without that, I couldn't afford to live in Bordeaux. Private rents are really high.

Journalist: What about tuition fees? Is it expensive in France?

Léa: No, it's one of the great advantages of the French system. For an undergraduate degree, you pay about a hundred and sixty euros per year at a public university. It's really accessible. On the other hand, you have to pay for books, transport, food...

Journalist: Do you work alongside your studies?

Léa: Yes, I work twenty hours a week in a café. It's tiring, but it allows me to have a bit of spending money and to pay for going out. And I also receive a state grant because my parents don't have a high income.

Journalist: And what is the social life like?

Léa: There are loads of student societies. I joined a theatre club and a humanitarian organisation. That's where you really make friends. Lectures with three hundred students are not the ideal place to socialise!`,
        questions: [
            {
                id: "fr-l-b1-1-q1",
                level: "B1",
                prompt: "Combien coûtent les frais de scolarité dans une université publique française ?",
                options: [
                    "Environ cent soixante euros par an",
                    "Environ deux cent cinquante euros par mois",
                    "Environ mille euros par an",
                    "Gratuit, il n'y a aucun frais"
                ],
                answer: "Environ cent soixante euros par an"
            },
            {
                id: "fr-l-b1-1-q2",
                level: "B1",
                prompt: "Pourquoi Léa travaille-t-elle dans un café ?",
                options: [
                    "Parce qu'elle prépare un diplôme en restauration",
                    "Pour avoir de l'argent de poche et payer ses sorties",
                    "Parce que le CROUS exige un emploi pour bénéficier d'un logement",
                    "Parce qu'elle n'a pas obtenu de bourse"
                ],
                answer: "Pour avoir de l'argent de poche et payer ses sorties"
            },
            {
                id: "fr-l-b1-1-q3",
                level: "B1",
                prompt: "Comment Léa dit-elle qu'on rencontre vraiment des amis à l'université ?",
                options: [
                    "En assistant aux cours magistraux",
                    "Dans la résidence universitaire",
                    "En rejoignant des associations étudiantes",
                    "Au travail dans le café"
                ],
                answer: "En rejoignant des associations étudiantes"
            }
        ]
    },

    {
        id: "fr-l-b1-2",
        level: "B1",
        title: "Les inondations dans le sud — Environmental news bulletin",
        script: `Bonsoir. Voici les informations. Les fortes pluies qui s'abattent sur le sud-est de la France depuis trois jours ont provoqué des inondations importantes dans plusieurs départements. Le Var et les Alpes-Maritimes sont les zones les plus touchées.

Les services de secours ont été mobilisés depuis hier matin. Plusieurs routes nationales sont coupées, et des trains régionaux ont été annulés sur la ligne Marseille-Nice. Les autorités demandent aux habitants de la zone côtière d'éviter tout déplacement non essentiel.

À Nice, la rivière du Paillon est sortie de son lit en début de soirée, inondant plusieurs rues du centre-ville. Les pompiers ont effectué une cinquantaine d'interventions dans la nuit. Aucune victime n'est à déplorer, mais plusieurs maisons ont subi des dégâts importants.

Le préfet des Alpes-Maritimes a déclaré l'état de catastrophe naturelle pour les communes les plus touchées. Cela permettra aux habitants de déclencher plus rapidement leurs assurances.

Les météorologues prévoient une amélioration de la situation dès demain matin, avec le retour progressif du soleil. Cependant, ils mettent en garde : les sols étant saturés d'eau, le risque de glissements de terrain reste élevé jusqu'à vendredi.

Pour les bulletins régionaux, consultez notre site internet ou appelez le numéro d'urgence de Météo-France. Nous restons à votre écoute.`,
        translation: `Good evening. Here is the news. The heavy rain that has been battering the south-east of France for three days has caused significant flooding in several departments. The Var and Alpes-Maritimes are the worst-affected areas.

Emergency services have been mobilised since yesterday morning. Several main roads are cut off, and regional trains have been cancelled on the Marseille-Nice line. The authorities are asking residents of the coastal zone to avoid all non-essential travel.

In Nice, the Paillon river burst its banks early in the evening, flooding several streets in the city centre. Firefighters carried out around fifty call-outs during the night. There are no casualties to report, but several homes have suffered significant damage.

The prefect of the Alpes-Maritimes has declared the state of natural disaster for the worst-affected towns. This will allow residents to activate their insurance more quickly.

Meteorologists forecast an improvement in the situation from tomorrow morning, with the gradual return of sunshine. However, they warn: with soils saturated with water, the risk of landslides remains high until Friday.

For regional bulletins, visit our website or call the Météo-France emergency number. We remain at your service.`,
        questions: [
            {
                id: "fr-l-b1-2-q1",
                level: "B1",
                prompt: "Quelles régions de France sont les plus touchées par les inondations ?",
                options: [
                    "La Bretagne et la Normandie",
                    "Le Var et les Alpes-Maritimes",
                    "L'Alsace et la Moselle",
                    "La Gironde et les Landes"
                ],
                answer: "Le Var et les Alpes-Maritimes"
            },
            {
                id: "fr-l-b1-2-q2",
                level: "B1",
                prompt: "Quelle est la conséquence de la déclaration de catastrophe naturelle ?",
                options: [
                    "Les habitants doivent évacuer immédiatement",
                    "L'armée est déployée dans la région",
                    "Les habitants peuvent activer leurs assurances plus rapidement",
                    "Le gouvernement finance la reconstruction à cent pour cent"
                ],
                answer: "Les habitants peuvent activer leurs assurances plus rapidement"
            },
            {
                id: "fr-l-b1-2-q3",
                level: "B1",
                prompt: "Pourquoi le risque de glissements de terrain reste-t-il élevé même après l'arrêt de la pluie ?",
                options: [
                    "Parce qu'il va continuer à pleuvoir toute la semaine",
                    "Parce que les sols sont saturés d'eau",
                    "Parce que les routes ont été endommagées",
                    "Parce que les températures vont chuter brutalement"
                ],
                answer: "Parce que les sols sont saturés d'eau"
            }
        ]
    },

    {
        id: "fr-l-b1-3",
        level: "B1",
        title: "On organise le voyage ! — Planning a trip to Paris",
        script: `Mathieu : Alors, on est bien d'accord ? Week-end à Paris le mois prochain ?

Chloé : Oui, c'est décidé ! Je n'y suis allée qu'une seule fois, quand j'avais douze ans. Je me souviens à peine de la Tour Eiffel.

Mathieu : D'accord. Première chose : le transport. Tu préfères le train ou l'avion ?

Chloé : Le train, sans hésitation. On est à deux heures de Paris en TGV depuis Lyon. Et c'est moins stressant que l'aéroport.

Mathieu : Tout à fait. J'ai regardé les prix — si on réserve maintenant, on trouve des billets à soixante euros aller-retour. C'est raisonnable.

Chloé : Super. Et pour l'hébergement ? J'ai regardé quelques options. Il y a un hôtel trois étoiles dans le Marais pour cent vingt euros la nuit. C'est un peu cher...

Mathieu : On pourrait essayer Airbnb ? J'ai trouvé un appartement à Montmartre pour quatre-vingt euros la nuit. Montmartre, c'est quand même un cadre sympa.

Chloé : Oui, bonne idée. On divise par deux, ça fait quarante euros chacun. Et pour les activités ? Qu'est-ce que tu veux absolument faire ?

Mathieu : Le musée d'Orsay, sans aucun doute. Et flâner le long des quais de la Seine. Toi ?

Chloé : Moi, je voudrais aller à Versailles. Et aussi visiter le Marais — les petites galeries d'art, les boutiques...

Mathieu : On a deux jours. C'est court mais faisable. On peut acheter la Paris Museum Pass — ça donne accès à plus de cinquante musées et monuments sans faire la queue.

Chloé : Excellente idée. Et pour manger, tu as des suggestions ?

Mathieu : J'ai repéré une brasserie traditionnelle près du Panthéon. Et il paraît que les marchés du week-end à Bastille sont incontournables.

Chloé : Parfait. Je m'occupe de réserver le train et l'appartement. Toi, tu t'occupes du Museum Pass.

Mathieu : Marché conclu !`,
        translation: `Mathieu: So we agree? Weekend in Paris next month?

Chloé: Yes, it's decided! I've only been once, when I was twelve. I barely remember the Eiffel Tower.

Mathieu: OK. First thing: transport. Do you prefer the train or the plane?

Chloé: The train, without hesitation. It's two hours to Paris by TGV from Lyon. And it's less stressful than the airport.

Mathieu: Absolutely. I looked at prices — if we book now, we can find tickets for sixty euros return. That's reasonable.

Chloé: Great. And for accommodation? I looked at a few options. There's a three-star hotel in the Marais for a hundred and twenty euros a night. That's a bit expensive...

Mathieu: We could try Airbnb? I found an apartment in Montmartre for eighty euros a night. Montmartre is quite a nice setting.

Chloé: Yes, good idea. We split it in two, that's forty euros each. And for activities? What do you absolutely want to do?

Mathieu: The Musée d'Orsay, without a doubt. And strolling along the banks of the Seine. You?

Chloé: I'd like to go to Versailles. And also explore the Marais — the little art galleries, the boutiques...

Mathieu: We have two days. It's short but doable. We can buy the Paris Museum Pass — it gives access to over fifty museums and monuments without queuing.

Chloé: Excellent idea. And for food, do you have any suggestions?

Mathieu: I spotted a traditional brasserie near the Panthéon. And apparently the weekend markets at Bastille are unmissable.

Chloé: Perfect. I'll handle booking the train and the apartment. You handle the Museum Pass.

Mathieu: Deal!`,
        questions: [
            {
                id: "fr-l-b1-3-q1",
                level: "B1",
                prompt: "Pourquoi Chloé préfère-t-elle le train à l'avion ?",
                options: [
                    "Parce que le train est moins cher",
                    "Parce que le train est direct et moins stressant",
                    "Parce qu'elle a peur en avion",
                    "Parce que l'aéroport est trop loin de chez elle"
                ],
                answer: "Parce que le train est direct et moins stressant"
            },
            {
                id: "fr-l-b1-3-q2",
                level: "B1",
                prompt: "Quel avantage principal offre le Paris Museum Pass ?",
                options: [
                    "Il est gratuit pour les moins de trente ans",
                    "Il permet d'éviter la queue dans les musées",
                    "Il inclut les transports en commun parisiens",
                    "Il donne accès à Versailles gratuitement"
                ],
                answer: "Il permet d'éviter la queue dans les musées"
            },
            {
                id: "fr-l-b1-3-q3",
                level: "B1",
                prompt: "Quelle est la répartition des tâches à la fin de la conversation ?",
                options: [
                    "Chloé réserve tout et Mathieu paie la moitié",
                    "Mathieu réserve le train et Chloé s'occupe du Museum Pass",
                    "Chloé réserve le train et l'appartement, Mathieu s'occupe du Museum Pass",
                    "Ils réservent tout ensemble sur Internet"
                ],
                answer: "Chloé réserve le train et l'appartement, Mathieu s'occupe du Museum Pass"
            }
        ]
    },

    {
        id: "fr-l-b1-4",
        level: "B1",
        title: "Le bénévolat — portrait d'une association",
        script: `Présentatrice : Ce soir, nous vous emmenons à la rencontre des Restos du Cœur, l'une des associations caritatives les plus connues de France. Fondée en 1985 par le comédien Coluche, l'association distribue des repas gratuits aux personnes dans le besoin pendant les mois d'hiver.

Nous avons rencontré Sandrine, bénévole depuis sept ans, dans un centre de distribution à Lille.

Sandrine : J'ai commencé parce qu'une amie m'en avait parlé. Je ne savais pas vraiment à quoi m'attendre. La première fois que j'y suis allée, j'étais un peu intimidée. Et puis, au bout de quelques semaines, c'est devenu une habitude que j'attends chaque année.

Présentatrice : Qu'est-ce que cette expérience vous a apporté ?

Sandrine : Elle m'a d'abord appris la réalité de la précarité. Avant, je savais que la pauvreté existait, mais d'une façon abstraite. Ici, on voit des gens qui ont perdu leur emploi, des familles qui ne s'en sortent pas à la fin du mois, des personnes âgées isolées. C'est concret. Et ça change la façon dont on voit les autres.

Présentatrice : L'association a-t-elle changé depuis ses débuts ?

Sandrine : Beaucoup. Le nombre de bénéficiaires a augmenté de façon considérable, surtout depuis la crise de 2008. Aujourd'hui, plus d'un million de personnes reçoivent l'aide des Restos chaque hiver. Et les profils ont changé : ce ne sont plus seulement des personnes sans abri. Il y a beaucoup de travailleurs pauvres, de jeunes en difficulté, de retraités avec de petites pensions.

Présentatrice : Un dernier mot pour ceux qui hésitent à se lancer dans le bénévolat ?

Sandrine : Venez, c'est tout. On trouve toujours une place pour tout le monde. Et vous verrez, on reçoit au moins autant qu'on donne.`,
        translation: `Presenter: This evening, we take you to meet Les Restos du Cœur, one of the best-known charitable organisations in France. Founded in 1985 by the comedian Coluche, the organisation distributes free meals to people in need during the winter months.

We met Sandrine, a volunteer for seven years, at a distribution centre in Lille.

Sandrine: I started because a friend had told me about it. I didn't really know what to expect. The first time I went, I was a little intimidated. And then, after a few weeks, it became a habit that I look forward to every year.

Presenter: What has this experience brought you?

Sandrine: It first taught me the reality of precarious living. Before, I knew that poverty existed, but in an abstract way. Here, you see people who have lost their jobs, families who can't make ends meet at the end of the month, isolated elderly people. It's concrete. And it changes the way you see others.

Presenter: Has the organisation changed since its beginnings?

Sandrine: A lot. The number of beneficiaries has increased considerably, especially since the 2008 crisis. Today, more than a million people receive help from Les Restos every winter. And the profiles have changed: it's no longer only homeless people. There are many working poor, young people in difficulty, retirees with small pensions.

Presenter: A final word for those who are hesitating to get involved in volunteering?

Sandrine: Come, that's all. There is always room for everyone. And you'll see — you receive at least as much as you give.`,
        questions: [
            {
                id: "fr-l-b1-4-q1",
                level: "B1",
                prompt: "Qui a fondé les Restos du Cœur et en quelle année ?",
                options: [
                    "Nicolas Hulot, en 1990",
                    "Coluche, en 1985",
                    "Abbé Pierre, en 1954",
                    "Simone Veil, en 1975"
                ],
                answer: "Coluche, en 1985"
            },
            {
                id: "fr-l-b1-4-q2",
                level: "B1",
                prompt: "Qu'est-ce que l'expérience de bénévolat a appris à Sandrine en premier lieu ?",
                options: [
                    "Comment préparer des repas pour un grand nombre de personnes",
                    "La réalité concrète de la précarité et de la pauvreté",
                    "Comment gérer une association caritative",
                    "L'importance de la solidarité entre collègues"
                ],
                answer: "La réalité concrète de la précarité et de la pauvreté"
            },
            {
                id: "fr-l-b1-4-q3",
                level: "B1",
                prompt: "Comment le profil des bénéficiaires a-t-il évolué selon Sandrine ?",
                options: [
                    "Il y a maintenant moins de bénéficiaires qu'avant 2008",
                    "Seuls les sans-abri reçoivent encore l'aide des Restos",
                    "On compte maintenant beaucoup de travailleurs pauvres, de jeunes et de retraités",
                    "Les bénéficiaires sont principalement des familles immigrées"
                ],
                answer: "On compte maintenant beaucoup de travailleurs pauvres, de jeunes et de retraités"
            }
        ]
    }
]
