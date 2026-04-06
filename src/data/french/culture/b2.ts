// ─────────────────────────────────────────────────────────────────────────────
// FRENCH B2 CULTURE
// src/data/french/culture/b2.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"

export const frB2Culture: CultureEpisode[] = [
    {
        id: "fr-c-b2-1",
        language: "fr",
        level: "B2",
        category: "history",
        region: "france",
        title: {
            native: "La Révolution française et ses héritages — 1789 et l'identité française",
            target: "La Révolution française et ses héritages"
        },
        subtitle: "How the events of 1789 created the political DNA of modern France — and why they are still debated today.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1541726260-e6b6a6a4c6b8?w=800",
                caption: {
                    native: "The Place de la Bastille, Paris — where the fortress-prison stood before it was stormed on 14 July 1789",
                    target: "La Place de la Bastille, Paris — là où se trouvait la forteresse-prison avant sa prise d'assaut le 14 juillet 1789"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
                caption: {
                    native: "Paris — a city shaped in fundamental ways by revolutionary-era urban planning and republican symbols",
                    target: "Paris — une ville profondément façonnée par l'urbanisme de l'ère révolutionnaire et les symboles républicains"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800",
                caption: {
                    native: "The French tricolore — its three colours represent the Revolution's fusion of royal white with Parisian revolutionary blue and red",
                    target: "Le tricolore français — ses trois couleurs représentent la fusion révolutionnaire du blanc royal avec le bleu et le rouge révolutionnaires parisiens"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `Il est difficile de comprendre la France contemporaine sans comprendre 1789. La Révolution française n'est pas seulement un événement historique lointain : c'est le creuset dans lequel l'identité politique française a été forgée, et ses contradictions continuent de structurer le débat public aujourd'hui.

Les principes proclamés en 1789 — Liberté, Égalité, Fraternité — sont devenus la devise de la République. Mais leur application a été, dès le départ, conflictuelle. La Déclaration des droits de l'homme et du citoyen affirme l'universalité de ces droits tout en les réservant initialement aux hommes, aux propriétaires, et aux citoyens « actifs ». Cette tension entre l'idéal universaliste et la réalité excluante est une constante de l'histoire républicaine française.

La rupture avec la monarchie a créé un rapport particulier à l'autorité en France. La méfiance envers le pouvoir, la légitimité de la contestation dans la rue, la centralité de l'État comme garant de l'intérêt général — tout cela plonge ses racines dans la culture révolutionnaire. Lorsque les Français descendent dans la rue pour protester, ils s'inscrivent consciemment ou non dans une tradition qui remonte au 14 juillet 1789.

La laïcité — principe de séparation stricte de l'Église et de l'État — est une autre héritière directe de la Révolution. Les révolutionnaires ont confisqué les biens du clergé, aboli les ordres religieux et tenté de remplacer le calendrier chrétien. La loi de séparation de 1905 a codifié ce principe, et il reste aujourd'hui l'un des sujets les plus clivants de la société française, notamment autour des questions de signes religieux dans l'espace public.

La Révolution a également posé les bases de l'État centralisé moderne. La destruction des structures féodales et régionales, remplacées par un système uniforme de départements, a créé un modèle administratif que Napoléon a ensuite perfectionné et exporté dans toute l'Europe. La France reste aujourd'hui l'un des États les plus centralisés du monde occidental.

Enfin, la mémoire de la Révolution est elle-même un terrain de combat politique. La droite conservatrice a longtemps glorifié la Vendée, région qui s'est soulevée contre la République révolutionnaire et dont la répression — parfois qualifiée de génocide — reste un sujet sensible. La gauche républicaine célèbre 1789 comme l'acte fondateur de la liberté moderne. Cette guerre de mémoires est l'une des fractures les plus profondes de la vie politique française.`,
            native: `It is difficult to understand contemporary France without understanding 1789. The French Revolution is not merely a distant historical event: it is the crucible in which French political identity was forged, and its contradictions continue to structure public debate today.

The principles proclaimed in 1789 — Liberté, Égalité, Fraternité — became the motto of the Republic. But their application was, from the outset, contested. The Declaration of the Rights of Man and of the Citizen asserts the universality of these rights while initially reserving them for men, property owners, and "active" citizens. This tension between the universalist ideal and exclusionary reality is a constant thread in French republican history.

The break with the monarchy created a particular relationship to authority in France. Distrust of power, the legitimacy of street protest, the centrality of the State as guarantor of the general interest — all of this has its roots in revolutionary culture. When French people take to the streets to protest, they are consciously or unconsciously placing themselves within a tradition that goes back to 14 July 1789.

Laïcité — the strict separation of Church and State — is another direct heir of the Revolution. The revolutionaries confiscated Church property, abolished religious orders, and attempted to replace the Christian calendar. The 1905 law of separation codified this principle, and it remains today one of the most divisive issues in French society, particularly around questions of religious symbols in public spaces.

The Revolution also laid the foundations of the modern centralised state. The destruction of feudal and regional structures, replaced by a uniform system of départements, created an administrative model that Napoleon subsequently refined and exported across Europe. France remains today one of the most centralised states in the Western world.

Finally, the memory of the Revolution is itself contested political terrain. The conservative right has long championed the Vendée — the region that rose up against the revolutionary Republic and whose brutal repression, sometimes described as genocide, remains a sensitive subject. The republican left celebrates 1789 as the founding act of modern freedom. This war of memories is one of the deepest fractures in French political life.`
        },

        cultureVocab: [
            {
                word: "Liberté, Égalité, Fraternité",
                translation: "Liberty, Equality, Fraternity — the motto of the French Republic",
                culturalNote: "Officially adopted as the national motto in 1848, though the phrase circulated from 1789. The three words are inseparable in French civic culture and appear on public buildings, coins, and official documents. Debates about which value takes precedence when they conflict — e.g. freedom versus equality — are central to French political philosophy."
            },
            {
                word: "la laïcité",
                translation: "secularism, the strict separation of church and state",
                culturalNote: "A concept with no precise English equivalent. French laïcité goes further than Anglo-American secularism: it demands that religion be absent from public institutions, not merely that the state be neutral towards it. The 1905 law remains in force and is fiercely defended across the political spectrum, though its application to Islam in particular is hotly debated."
            },
            {
                word: "le département",
                translation: "department (administrative division)",
                culturalNote: "Created in 1790 to replace the old provinces and break up regional loyalties. There are 101 departments (including overseas), each named after a geographical feature rather than a historical region — a deliberate erasure of the ancien régime's patchwork. The system is still operational today."
            },
            {
                word: "la Déclaration des droits de l'homme",
                translation: "the Declaration of the Rights of Man (and of the Citizen)",
                culturalNote: "Adopted on 26 August 1789, it remains part of the preamble of the current French Constitution (1958) and is therefore still legally binding. Its influence on the UN Declaration of Human Rights (1948) is direct and acknowledged."
            },
            {
                word: "la Vendée",
                translation: "a region of western France; by extension, the counter-revolutionary uprising of 1793–1796",
                culturalNote: "The Vendée uprising, suppressed with extreme violence by revolutionary forces (the 'colonnes infernales'), remains a politically charged memory in France. Whether the repression constitutes genocide is debated by historians and politicians, making it a live controversy more than 200 years later."
            }
        ],

        questions: [
            {
                id: "fr-c-b2-1-q1",
                type: "comprehension",
                prompt: {
                    native: "What tension at the heart of the Declaration of the Rights of Man does the text describe?",
                    target: "Quelle contradiction au cœur de la Déclaration des droits de l'homme le texte décrit-il ?"
                },
                options: [
                    "Between the right to property and the right to equality",
                    "Between the universalist ideal of rights and their initial restriction to certain categories of men",
                    "Between French national identity and European integration",
                    "Between freedom of speech and the protection of religious feelings"
                ],
                answer: "Between the universalist ideal of rights and their initial restriction to certain categories of men"
            },
            {
                id: "fr-c-b2-1-q2",
                type: "comprehension",
                prompt: {
                    native: "How does the text explain the French tendency to protest in the streets?",
                    target: "Comment le texte explique-t-il la tendance française à manifester dans la rue ?"
                },
                options: [
                    "As a sign of political instability and weak institutions",
                    "As a tradition rooted in revolutionary culture dating back to 1789",
                    "As a consequence of the French education system",
                    "As a reaction to economic inequality unique to the modern era"
                ],
                answer: "As a tradition rooted in revolutionary culture dating back to 1789"
            },
            {
                id: "fr-c-b2-1-q3",
                type: "reflection",
                prompt: {
                    native: "The text describes the Revolution's memory as a 'war of memories' still dividing France. Does your country have a comparable founding event or period that is remembered differently by different political groups? What does this tell us about how nations construct their identity?",
                    target: "Le texte décrit la mémoire de la Révolution comme une « guerre des mémoires » qui divise encore la France. Votre pays a-t-il un événement ou une période fondatrice comparable dont le souvenir est interprété différemment selon les groupes politiques ? Qu'est-ce que cela nous dit sur la façon dont les nations construisent leur identité ?"
                }
            }
        ],

        didYouKnow: {
            native: "The storming of the Bastille on 14 July 1789 is now France's national day — but the Bastille held only seven prisoners at the time of its capture, and none were political heroes: they included forgers and a man imprisoned at his family's request for 'dissolute behaviour'. The symbolic importance of the act — attacking the king's fortress — mattered far more than the practical result. France celebrates the idea of the Bastille, not the reality.",
            target: "La prise de la Bastille le 14 juillet 1789 est aujourd'hui la fête nationale française — mais la Bastille ne contenait que sept prisonniers au moment de sa prise, et aucun n'était un héros politique : parmi eux se trouvaient des faussaires et un homme emprisonné à la demande de sa famille pour « conduite dissolue ». L'importance symbolique de l'acte — attaquer la forteresse du roi — comptait bien plus que le résultat concret. La France célèbre l'idée de la Bastille, pas la réalité."
        },

        relatedIds: ["fr-c-b1-1", "fr-c-c1-1"]
    },

    // ─── fr-c-b2-2 ────────────────────────────────────────────────────────────
    {
        id: "fr-c-b2-2",
        language: "fr",
        level: "B2",
        category: "history",
        region: "france",
        title: {
            native: "La Ve République — institutions et pouvoir",
            target: "The Fifth Republic — institutions and power"
        },
        subtitle: "France's Fifth Republic is one of the world's most powerful presidencies — understanding its institutions is essential for reading French political debate.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800",
                caption: {
                    native: "The Élysée Palace, official residence and workplace of the President of the French Republic",
                    target: "Le Palais de l'Élysée, résidence officielle et lieu de travail du Président de la République française"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
                caption: {
                    native: "Paris — seat of the French Republic's central institutions",
                    target: "Paris — siège des institutions centrales de la République française"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800",
                caption: {
                    native: "The French tricolore — symbol of the Republic whose institutions were redesigned in 1958",
                    target: "Le tricolore français — symbole de la République dont les institutions ont été redessinées en 1958"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `En 1958, face à la crise algérienne et à l'instabilité chronique de la IVe République — où les gouvernements tombaient en moyenne tous les six mois — le général de Gaulle conçoit une nouvelle constitution. La Ve République naît d'un constat : la France est ingouvernable avec un régime purement parlementaire. De Gaulle invente un système semi-présidentiel unique en Europe occidentale, combinant un président directement élu par le peuple et un premier ministre responsable devant le Parlement.

Les pouvoirs du président de la République sont considérables. Il nomme le Premier ministre, préside le Conseil des ministres, est chef des armées, peut dissoudre l'Assemblée nationale, et détient seul l'autorité sur la force de frappe nucléaire. Depuis le passage au quinquennat en 2002, il est élu pour cinq ans au scrutin uninominal à deux tours : si aucun candidat n'obtient la majorité absolue au premier tour, les deux candidats arrivés en tête s'affrontent au second.

Le Parlement se compose de l'Assemblée nationale et du Sénat. L'Assemblée a la primauté : elle peut renverser le gouvernement par une motion de censure. Le « fait majoritaire » désigne la situation — la plus fréquente — où le parti du président contrôle l'Assemblée : le premier ministre devient alors l'exécutant de la volonté présidentielle, et le président gouverne presque seul. La « cohabitation », à l'inverse, survient quand le président et la majorité parlementaire sont de camps opposés : le premier ministre redevient alors le véritable chef de l'exécutif pour la politique intérieure.

Le Conseil constitutionnel, créé en 1958, est la juridiction constitutionnelle française. Il peut censurer une loi avant sa promulgation si elle contrevient à la Constitution. Longtemps considéré comme une chambre d'enregistrement au service du pouvoir, il s'est affirmé comme un véritable contre-pouvoir à partir des années 1980-1990. Ses membres — neuf au total, nommés pour neuf ans par le Président de la République, le Président de l'Assemblée nationale et le Président du Sénat — ne sont pas des juges de carrière, ce qui le distingue des cours constitutionnelles allemande ou américaine.

La Ve République fait l'objet de critiques croissantes. La concentration du pouvoir dans les mains du président lui vaut parfois l'étiquette de « monarchie républicaine ». Le quinquennat, en alignant les calendriers présidentiel et législatif, a considérablement réduit les chances de cohabitation — renforçant ainsi la prépondérance présidentielle. De nombreux constitutionnalistes estiment que la Ve République a été taillée sur mesure pour un homme, de Gaulle, et qu'elle peine à s'adapter au pluralisme politique et social de la France du XXIe siècle.`,
            native: `In 1958, faced with the Algerian crisis and the chronic instability of the Fourth Republic — where governments fell on average every six months — General de Gaulle designed a new constitution. The Fifth Republic was born from a diagnosis: France was ungovernable under a purely parliamentary system. De Gaulle invented a semi-presidential system unique in Western Europe, combining a directly elected president and a prime minister accountable to Parliament.

The powers of the President of the Republic are considerable. He appoints the Prime Minister, chairs the Council of Ministers, commands the armed forces, can dissolve the National Assembly, and holds sole authority over the nuclear deterrent. Since the switch to the five-year term in 2002, the president is elected for five years in a two-round system: if no candidate wins an absolute majority in the first round, the top two candidates face off in the second.

Parliament consists of the National Assembly and the Senate. The Assembly has primacy: it can bring down the government through a motion of no confidence. The "fait majoritaire" describes the most common situation — where the president's party controls the Assembly: the prime minister then becomes the executor of the presidential will, and the president governs almost alone. "Cohabitation," by contrast, occurs when the president and the parliamentary majority are from opposing camps: the prime minister then becomes the real head of the executive for domestic policy.

The Constitutional Council, created in 1958, is France's constitutional court. It can strike down a law before it is promulgated if it violates the Constitution. Long regarded as a rubber-stamp body serving those in power, it asserted itself as a genuine counterweight from the 1980s and 1990s onwards. Its members — nine in total, appointed for nine years by the President of the Republic, the Speaker of the National Assembly, and the Speaker of the Senate — are not career judges, which distinguishes it from the German or American constitutional courts.

The Fifth Republic faces growing criticism. The concentration of power in the president's hands has earned it the label of "republican monarchy." The five-year term, by aligning the presidential and legislative calendars, has greatly reduced the chances of cohabitation — thus reinforcing presidential dominance. Many constitutional scholars argue that the Fifth Republic was tailor-made for one man, de Gaulle, and that it struggles to adapt to the political and social pluralism of twenty-first-century France.`
        },

        cultureVocab: [
            {
                word: "la Ve République",
                translation: "the Fifth Republic",
                culturalNote: "The fifth constitutional framework since the Revolution. De Gaulle created it after the Algerian crisis of 1958. France's current system is often called 'semi-presidential' — uniquely combining a powerful directly elected president alongside a parliamentary government that must hold the confidence of the National Assembly."
            },
            {
                word: "la cohabitation",
                translation: "cohabitation",
                culturalNote: "Occurs when the president and prime minister belong to different political parties. This happened three times under the Fifth Republic (1986–88, 1993–95, 1997–2002). It creates a dual executive where the prime minister becomes the de facto domestic policy leader, dramatically limiting presidential power in day-to-day governance."
            },
            {
                word: "le fait majoritaire",
                translation: "the majority fact",
                culturalNote: "When the president's party controls the Assemblée nationale, the prime minister is essentially the president's delegate. The president governs almost alone. Critics say this makes France's democracy function like an 'elected monarchy', with insufficient checks on executive power during periods of presidential majority."
            },
            {
                word: "le Conseil constitutionnel",
                translation: "the Constitutional Council",
                culturalNote: "Not a court in the traditional sense — its members are not judges. It rules on the constitutionality of laws before they take effect. Unlike in Germany or the United States, citizens cannot petition it directly — access is reserved to institutional actors such as the President, the Prime Minister, or 60 deputies or senators."
            },
            {
                word: "le quinquennat",
                translation: "the five-year presidential term",
                culturalNote: "Adopted by referendum in 2000, replacing the seven-year term. The reform also aligned presidential and legislative elections, dramatically reducing the chances of cohabitation. Critics argue this presidential concentration contradicts the republic's parliamentary traditions and has made French democracy dangerously presidentialist."
            }
        ],

        questions: [
            {
                id: "fr-c-b2-2-q1",
                type: "comprehension",
                prompt: {
                    native: "What is 'cohabitation' in the French Fifth Republic?",
                    target: "Qu'est-ce que la « cohabitation » dans la Ve République française ?"
                },
                options: [
                    "A situation when the president and prime minister come from different political parties",
                    "A constitutional requirement that the president consult the Senate before governing",
                    "The system by which two candidates face each other in the second round of elections",
                    "A form of coalition government where two parties share ministerial posts equally"
                ],
                answer: "A situation when the president and prime minister come from different political parties"
            },
            {
                id: "fr-c-b2-2-q2",
                type: "comprehension",
                prompt: {
                    native: "What was De Gaulle's main motivation for designing the Fifth Republic?",
                    target: "Quelle était la principale motivation de De Gaulle pour concevoir la Ve République ?"
                },
                options: [
                    "To overcome the governmental instability of the Fourth Republic, where governments fell every few months",
                    "To create a fully presidential system modelled on the United States",
                    "To reduce the power of the army following the Algerian war",
                    "To give French regions greater autonomy and end Parisian centralism"
                ],
                answer: "To overcome the governmental instability of the Fourth Republic, where governments fell every few months"
            },
            {
                id: "fr-c-b2-2-q3",
                type: "reflection",
                prompt: {
                    native: "France's Fifth Republic gives enormous power to the president, leading some to call it a 'republican monarchy'. Do you think a powerful executive presidency makes government more effective, or does it create dangerous concentrations of power? What balance does your own country's system strike?",
                    target: "La Ve République française donne d'énormes pouvoirs au président, ce qui conduit certains à la qualifier de « monarchie républicaine ». Pensez-vous qu'une présidence exécutive puissante rend le gouvernement plus efficace, ou crée-t-elle des concentrations de pouvoir dangereuses ? Quel équilibre le système de votre propre pays cherche-t-il à atteindre ?"
                }
            }
        ],

        didYouKnow: {
            native: "France has had five different constitutional regimes since the Revolution of 1789: the First Republic (1792), the Napoleonic Empire, the Restoration and Second Republic, the Second Empire under Napoleon III, the Third Republic (1870–1940), the Fourth Republic (1946–1958), and the Fifth Republic since 1958. This constitutional instability is unique among major Western democracies — the United States has operated under the same constitution since 1787. De Gaulle reportedly said the French were 'ungovernable' and designed the Fifth Republic's strong presidency as the only system that could actually function for such an individualistic people.",
            target: "La France a connu cinq régimes constitutionnels différents depuis la Révolution de 1789 : la Première République (1792), l'Empire napoléonien, la Restauration et la Deuxième République, le Second Empire sous Napoléon III, la Troisième République (1870–1940), la Quatrième République (1946–1958), et la Cinquième République depuis 1958. Cette instabilité constitutionnelle est unique parmi les grandes démocraties occidentales — les États-Unis fonctionnent sous la même constitution depuis 1787. De Gaulle aurait dit que les Français étaient « ingouvernables » et aurait conçu la présidence forte de la Ve République comme le seul système pouvant réellement fonctionner pour un peuple aussi individualiste."
        },

        relatedIds: ["fr-c-b1-2", "fr-c-b2-1"]
    },

    // ─── fr-c-b2-3 ────────────────────────────────────────────────────────────
    {
        id: "fr-c-b2-3",
        language: "fr",
        level: "B2",
        category: "customs",
        region: "france",
        title: {
            native: "L'immigration en France — histoire et débat contemporain",
            target: "Immigration in France — history and contemporary debate"
        },
        subtitle: "France has been a country of immigration since the 19th century — but the debate about identity, integration and belonging has never been more intense.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
                caption: {
                    native: "Paris — a capital shaped by successive waves of immigration over two centuries",
                    target: "Paris — une capitale façonnée par des vagues successives d'immigration depuis deux siècles"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800",
                caption: {
                    native: "France's republican institutions have been tested by questions of integration and identity",
                    target: "Les institutions républicaines françaises ont été mises à l'épreuve par les questions d'intégration et d'identité"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=800",
                caption: {
                    native: "The banlieues of major French cities became centres of immigrant communities from the 1960s onwards",
                    target: "Les banlieues des grandes villes françaises sont devenues des centres de communautés immigrées à partir des années 1960"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `La France est un pays d'immigration depuis le XIXe siècle. Avant la Première Guerre mondiale, des Polonais, des Italiens, des Espagnols et des Portugais venaient travailler dans les mines et les usines. Après la Seconde Guerre mondiale, une immigration massive en provenance d'Afrique du Nord — le Maghreb : Algérie, Maroc, Tunisie — et d'Afrique subsaharienne a permis de reconstruire le pays. Les « Trente Glorieuses » (1945-1975), période de croissance économique exceptionnelle, avaient besoin de cette main-d'œuvre. Des travailleurs immigrés étaient recrutés officiellement, souvent avec l'accord tacite de leur pays d'origine.

Le modèle républicain d'intégration français diffère radicalement du multiculturalisme anglo-saxon. La citoyenneté française repose sur le jus soli — être né sur le sol français — et sur l'idée d'assimilation culturelle : tous les citoyens sont égaux et indifférenciés devant la loi, quelles que soient leurs origines. Les statistiques ethniques sont interdites dans les données officielles françaises — l'État « ne voit » pas la race. Ce système a fonctionné pour de nombreux groupes, mais ses critiques affirment qu'il rend la discrimination invisible et difficile à mesurer.

Les grandes cités HLM en périphérie des métropoles — Paris, Lyon, Marseille — sont devenues le foyer des communautés immigrées. Chômage élevé, pauvreté, discrimination : ces facteurs ont créé des cycles d'exclusion sociale. Les émeutes urbaines de 2005 — déclenchées par la mort accidentelle de deux jeunes hommes qui fuyaient la police à Clichy-sous-Bois — ont secoué la France et révélé des fractures profondes. Des milliers de voitures ont brûlé dans toute la France pendant trois semaines. L'état d'urgence a été déclaré pour la première fois depuis la guerre d'Algérie.

L'immigration est devenue le sujet politique central. L'ascension du Rassemblement National — anciennement Front National — de la marge vers le centre de la vie politique a été largement construite sur l'immigration et les questions d'identité. Mais le débat traverse les clivages gauche-droite traditionnels : la gauche est divisée entre républicains universalistes et progressistes favorables à la diversité. La notion de « préférence nationale » — priorité aux citoyens français dans l'accès aux emplois et aux aides sociales — reste juridiquement contestée, mais politiquement influente.

La France abrite la plus grande population musulmane d'Europe occidentale — entre cinq et six millions de personnes — mais beaucoup se sentent exclus de la promesse républicaine de « liberté, égalité, fraternité ». La tension entre universalisme et diversité reste entière. Le défi du XXIe siècle pour la France est de savoir si ses valeurs républicaines universelles peuvent être genuinement universelles — ou si elles masquent un modèle culturel particulier auquel tout le monde ne correspond pas.`,
            native: `France has been a country of immigration since the nineteenth century. Before the First World War, Poles, Italians, Spanish and Portuguese came to work in mines and factories. After the Second World War, large-scale immigration from North Africa — the Maghreb: Algeria, Morocco, Tunisia — and sub-Saharan Africa helped to rebuild the country. The "Trente Glorieuses" (1945–1975), a period of exceptional economic growth, required this labour. Guest workers were officially recruited, often with the tacit agreement of their home countries.

France's republican integration model differs sharply from Anglo-Saxon multiculturalism. French citizenship is based on jus soli — being born on French soil — and on the idea of cultural assimilation: all citizens are equal and undifferentiated before the law, regardless of their origins. Ethnic statistics are banned from official French data — the state "does not see" race. This system has worked for many groups, but its critics argue that it makes discrimination invisible and difficult to measure.

The large social housing estates on the outskirts of major cities — Paris, Lyon, Marseille — became home to immigrant communities. High unemployment, poverty, and discrimination created cycles of social exclusion. The urban riots of 2005 — triggered by the accidental deaths of two young men fleeing police in Clichy-sous-Bois — shook France and exposed deep fractures. Thousands of cars burned across France over three weeks. A state of emergency was declared for the first time since the Algerian War.

Immigration has become the defining political issue. The rise of the Rassemblement National — formerly the Front National — from the margins to the centre of political life was largely built on immigration and identity politics. But the debate crosses traditional left-right lines: the left is divided between universalist republicans and pro-diversity progressives. The concept of "préférence nationale" — priority for French citizens in access to jobs and social benefits — remains legally challenged but politically influential.

France is home to the largest Muslim population in Western Europe — between five and six million people — but many feel excluded from the full republican promise of "liberté, égalité, fraternité." The tension between universalism and diversity remains unresolved. The challenge for twenty-first-century France is whether its universal republican values can be genuinely universal — or whether they mask a particular cultural template that not everyone fits.`
        },

        cultureVocab: [
            {
                word: "les Trente Glorieuses",
                translation: "the Thirty Glorious Years (1945–1975)",
                culturalNote: "The post-war economic boom that transformed France from a primarily agricultural to an industrial society. The term was coined by economist Jean Fourastié. This period's labour needs drove large-scale immigration, which permanently changed the ethnic and religious composition of France and created the communities whose integration remains contested today."
            },
            {
                word: "le modèle républicain d'intégration",
                translation: "the Republican integration model",
                culturalNote: "The idea that France integrates immigrants by making them French — culturally and legally — rather than by celebrating diversity. Based on equality before the law, laïcité, and the French language. Contrasted with Anglo-Saxon 'multiculturalism', which France has consistently rejected. Critics argue the model works on paper but conceals persistent structural discrimination."
            },
            {
                word: "les banlieues",
                translation: "the suburbs / housing estates",
                culturalNote: "In France the word does not mean wealthy suburbs (as in the United States) — it refers specifically to working-class and immigrant-majority social housing estates on the outskirts of cities. A charged term associated with poverty, exclusion, and the social crisis that followed the immigration waves of the 1970s and 1980s."
            },
            {
                word: "jus soli",
                translation: "right of the soil (birthright citizenship)",
                culturalNote: "The principle that a person born on French territory acquires citizenship (with some conditions). Contrasted with jus sanguinis (citizenship by blood/ancestry). France's citizenship law is a hybrid but historically privileged jus soli — which facilitated the legal integration of successive waves of immigrants even when social integration remained incomplete."
            },
            {
                word: "la préférence nationale",
                translation: "national preference",
                culturalNote: "The policy position that French citizens should have priority over immigrants in access to social housing, welfare benefits and employment. Long associated with the extreme right, its growing acceptance in mainstream political debate marks a significant shift in France's national conversation about immigration and the limits of republican universalism."
            }
        ],

        questions: [
            {
                id: "fr-c-b2-3-q1",
                type: "comprehension",
                prompt: {
                    native: "What makes France's integration model different from multiculturalism?",
                    target: "En quoi le modèle d'intégration français diffère-t-il du multiculturalisme ?"
                },
                options: [
                    "It aims to assimilate all citizens into a shared French identity based on equality before the law and laïcité, rather than celebrating ethnic diversity",
                    "It gives immigrant communities legal recognition and state support to maintain their cultural traditions",
                    "It requires immigrants to pass a language test before receiving citizenship, unlike other European countries",
                    "It is based on jus sanguinis rather than jus soli, making citizenship harder to obtain"
                ],
                answer: "It aims to assimilate all citizens into a shared French identity based on equality before the law and laïcité, rather than celebrating ethnic diversity"
            },
            {
                id: "fr-c-b2-3-q2",
                type: "comprehension",
                prompt: {
                    native: "What event in 2005 exposed deep fractures in French society?",
                    target: "Quel événement de 2005 a révélé de profondes fractures dans la société française ?"
                },
                options: [
                    "The urban riots triggered by the deaths of two young men fleeing police in Clichy-sous-Bois",
                    "A series of terrorist attacks on the Paris metro system",
                    "The election of the Front National to a record number of seats in the National Assembly",
                    "Mass strikes by immigrant workers demanding equal pay in the public sector"
                ],
                answer: "The urban riots triggered by the deaths of two young men fleeing police in Clichy-sous-Bois"
            },
            {
                id: "fr-c-b2-3-q3",
                type: "reflection",
                prompt: {
                    native: "France bans the collection of ethnic statistics, arguing that race should be invisible before the law. Do you think this principle helps or hinders the fight against discrimination? How does your own country handle the question of ethnic data?",
                    target: "La France interdit la collecte de statistiques ethniques, au motif que la race doit être invisible devant la loi. Pensez-vous que ce principe aide ou entrave la lutte contre la discrimination ? Comment votre propre pays gère-t-il la question des données ethniques ?"
                }
            }
        ],

        didYouKnow: {
            native: "France is estimated to be home to between 5 and 6 million Muslims — the largest Muslim population in Western Europe — yet official French statistics do not record religion or ethnicity. This means that debates about Islam in France are often conducted with almost no official data. The absence of statistics does not mean the absence of discrimination: multiple studies using anonymous résumé experiments — where identical CVs are sent with French names versus Arab-sounding names — have consistently found that candidates with Arab-sounding names receive significantly fewer interview invitations, even for the same role and qualifications.",
            target: "On estime que la France accueille entre 5 et 6 millions de musulmans — la plus grande population musulmane d'Europe occidentale — mais les statistiques officielles françaises n'enregistrent ni la religion ni l'ethnicité. Cela signifie que les débats sur l'islam en France se déroulent souvent sans presque aucune donnée officielle. L'absence de statistiques ne signifie pas l'absence de discrimination : de multiples études utilisant des expériences anonymes de CV — où des curricula identiques sont envoyés avec des noms français ou des noms à consonance arabe — ont systématiquement constaté que les candidats aux noms à consonance arabe reçoivent significativement moins de convocations à des entretiens, même pour le même poste et les mêmes qualifications."
        },

        relatedIds: ["fr-c-b1-2", "fr-c-b2-2"]
    }
]
