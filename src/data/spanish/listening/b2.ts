import { ListeningExercise } from "../../../types"

export const b2Listening: ListeningExercise[] = [
    {
        id: "es-l-b2-1",
        level: "B2",
        title: "Entrevista de radio: El futuro del trabajo",
        script: "Bienvenidos a Economía Hoy. Hoy hablamos sobre el futuro del trabajo con la doctora Marta Solís. Doctora Solís, ¿cómo afectará la automatización al empleo? Es una pregunta clave. Se calcula que hasta el treinta por ciento de los empleos actuales podrían ser automatizados en los próximos veinte años. Sin embargo, la historia nos enseña que la tecnología también crea nuevos tipos de trabajo. ¿Qué sectores se verán más afectados? Los sectores con tareas repetitivas, como la manufactura y la logística, serán los más vulnerables. En cambio, los empleos que requieren creatividad, empatía e inteligencia emocional serán más difíciles de automatizar. ¿Qué recomendaría a los trabajadores jóvenes? Que inviertan en formación continua y desarrollen habilidades transversales, como la comunicación y el pensamiento crítico.",
        translation: "Welcome to Economy Today. Today we talk about the future of work with Dr Marta Solís. Dr Solís, how will automation affect employment? It is a key question. It is estimated that up to thirty percent of current jobs could be automated in the next twenty years. However, history teaches us that technology also creates new types of work. Which sectors will be most affected? Sectors with repetitive tasks, such as manufacturing and logistics, will be the most vulnerable. On the other hand, jobs that require creativity, empathy and emotional intelligence will be harder to automate. What would you recommend to young workers? That they invest in continuous training and develop transferable skills, such as communication and critical thinking.",
        dialogue: [
            { speaker: "Presentador", text: "Bienvenidos a Economía Hoy. Hoy hablamos sobre el futuro del trabajo con la doctora Marta Solís. Doctora Solís, ¿cómo afectará la automatización al empleo?", translation: "Welcome to Economy Today. Today we talk about the future of work with Dr Marta Solís. Dr Solís, how will automation affect employment?" },
            { speaker: "Doctora Solís", text: "Es una pregunta clave. Se calcula que hasta el treinta por ciento de los empleos actuales podrían ser automatizados en los próximos veinte años. Sin embargo, la historia nos enseña que la tecnología también crea nuevos tipos de trabajo.", translation: "It is a key question. It is estimated that up to thirty percent of current jobs could be automated in the next twenty years. However, history teaches us that technology also creates new types of work." },
            { speaker: "Presentador", text: "¿Qué sectores se verán más afectados?", translation: "Which sectors will be most affected?" },
            { speaker: "Doctora Solís", text: "Los sectores con tareas repetitivas, como la manufactura y la logística, serán los más vulnerables. En cambio, los empleos que requieren creatividad, empatía e inteligencia emocional serán más difíciles de automatizar.", translation: "Sectors with repetitive tasks, such as manufacturing and logistics, will be the most vulnerable. On the other hand, jobs that require creativity, empathy and emotional intelligence will be harder to automate." },
            { speaker: "Presentador", text: "¿Qué recomendaría a los trabajadores jóvenes?", translation: "What would you recommend to young workers?" },
            { speaker: "Doctora Solís", text: "Que inviertan en formación continua y desarrollen habilidades transversales, como la comunicación y el pensamiento crítico.", translation: "That they invest in continuous training and develop transferable skills, such as communication and critical thinking." },
        ],
        questions: [
            {
                id: "es-l-b2-1-q1",
                level: "B2",
                prompt: "¿Qué porcentaje de empleos podrían automatizarse según la doctora Solís?",
                options: ["Hasta el treinta por ciento", "Hasta el cincuenta por ciento", "Hasta el diez por ciento", "Hasta el ochenta por ciento"],
                answer: "Hasta el treinta por ciento"
            },
            {
                id: "es-l-b2-1-q2",
                level: "B2",
                prompt: "¿Qué empleos serán más difíciles de automatizar?",
                options: [
                    "Los que requieren creatividad, empatía e inteligencia emocional",
                    "Los que realizan tareas repetitivas en fábricas",
                    "Los que trabajan en logística y manufactura",
                    "Los que usan tecnología digital avanzada"
                ],
                answer: "Los que requieren creatividad, empatía e inteligencia emocional"
            },
            {
                id: "es-l-b2-1-q3",
                level: "B2",
                prompt: "¿Qué recomienda la doctora Solís a los trabajadores jóvenes?",
                options: [
                    "Que inviertan en formación continua y desarrollen habilidades transversales",
                    "Que eviten los sectores tecnológicos",
                    "Que busquen empleo en manufactura y logística",
                    "Que abandonen el mercado laboral temporalmente"
                ],
                answer: "Que inviertan en formación continua y desarrollen habilidades transversales"
            }
        ]
    },
    {
        id: "es-l-b2-2",
        level: "B2",
        title: "Conferencia académica: La globalización",
        script: "Buenos días. Hoy analizaré el fenómeno de la globalización y sus consecuencias en las sociedades contemporáneas. La globalización puede definirse como la creciente interdependencia económica, política y cultural entre los países del mundo, acelerada por los avances tecnológicos y la liberalización del comercio. Sus defensores argumentan que ha sacado a millones de personas de la pobreza, ha facilitado la transferencia de conocimiento y ha creado mercados más eficientes. No obstante, sus críticos señalan que ha aumentado la desigualdad entre países ricos y pobres, ha debilitado la soberanía nacional y ha homogeneizado las culturas locales. Cabe destacar que la pandemia de 2020 puso de manifiesto tanto la fragilidad como la interdependencia de las cadenas de suministro globales. En consecuencia, muchos gobiernos están reconsiderando sus estrategias de relocalización industrial.",
        translation: "Good morning. Today I will analyse the phenomenon of globalisation and its consequences for contemporary societies. Globalisation can be defined as the growing economic, political and cultural interdependence among the countries of the world, accelerated by technological advances and the liberalisation of trade. Its defenders argue that it has lifted millions of people out of poverty, facilitated the transfer of knowledge and created more efficient markets. Nevertheless, its critics point out that it has increased inequality between rich and poor countries, weakened national sovereignty and homogenised local cultures. It is worth noting that the 2020 pandemic exposed both the fragility and the interdependence of global supply chains. Consequently, many governments are reconsidering their industrial relocation strategies.",
        questions: [
            {
                id: "es-l-b2-2-q1",
                level: "B2",
                prompt: "¿Cómo define el conferenciante la globalización?",
                options: [
                    "Como la creciente interdependencia económica, política y cultural entre países",
                    "Como el proceso de unificación política de todos los países",
                    "Como la expansión de las empresas tecnológicas a nivel mundial",
                    "Como la eliminación de las diferencias culturales entre naciones"
                ],
                answer: "Como la creciente interdependencia económica, política y cultural entre países"
            },
            {
                id: "es-l-b2-2-q2",
                level: "B2",
                prompt: "¿Qué crítica hacen los opositores a la globalización?",
                options: [
                    "Que ha aumentado la desigualdad y debilitado la soberanía nacional",
                    "Que ha reducido el comercio internacional",
                    "Que ha frenado el desarrollo tecnológico",
                    "Que ha fortalecido demasiado las culturas locales"
                ],
                answer: "Que ha aumentado la desigualdad y debilitado la soberanía nacional"
            },
            {
                id: "es-l-b2-2-q3",
                level: "B2",
                prompt: "¿Qué reveló la pandemia de 2020 según la conferencia?",
                options: [
                    "La fragilidad e interdependencia de las cadenas de suministro globales",
                    "Que la globalización había terminado definitivamente",
                    "Que los países ricos no dependían de los mercados globales",
                    "La superioridad del comercio local sobre el internacional"
                ],
                answer: "La fragilidad e interdependencia de las cadenas de suministro globales"
            }
        ]
    },
    {
        id: "es-l-b2-3",
        level: "B2",
        title: "Debate político: La inmigración",
        script: "Esta noche debatimos sobre la política de inmigración en España. Primero, la señora Vega. La inmigración es una realidad inevitable y, en muchos casos, necesaria para sostener nuestra economía. España tiene una tasa de natalidad muy baja y necesita mano de obra para cubrir puestos en sectores como la agricultura, la hostelería y el cuidado de personas mayores. Estoy de acuerdo en que necesitamos una política migratoria ordenada, pero no podemos ignorar los problemas de integración. Una llegada masiva sin recursos suficientes genera tensión social y puede perjudicar tanto a los ciudadanos locales como a los propios inmigrantes. ¿Cómo garantizar entonces una integración exitosa? Invirtiendo en programas de acogida, formación lingüística y reconocimiento de cualificaciones extranjeras.",
        translation: "Tonight we debate immigration policy in Spain. First, Ms Vega. Immigration is an inevitable reality and, in many cases, necessary to sustain our economy. Spain has a very low birth rate and needs workers to fill positions in sectors such as agriculture, hospitality and care of the elderly. I agree that we need an orderly migration policy, but we cannot ignore integration problems. A massive arrival without sufficient resources generates social tension and can harm both local citizens and the immigrants themselves. How do we guarantee successful integration, then? By investing in reception programmes, language training and recognition of foreign qualifications.",
        dialogue: [
            { speaker: "Moderadora", text: "Esta noche debatimos sobre la política de inmigración en España. Primero, la señora Vega.", translation: "Tonight we debate immigration policy in Spain. First, Ms Vega." },
            { speaker: "Señora Vega", text: "La inmigración es una realidad inevitable y, en muchos casos, necesaria para sostener nuestra economía. España tiene una tasa de natalidad muy baja y necesita mano de obra para cubrir puestos en sectores como la agricultura, la hostelería y el cuidado de personas mayores.", translation: "Immigration is an inevitable reality and, in many cases, necessary to sustain our economy. Spain has a very low birth rate and needs workers to fill positions in sectors such as agriculture, hospitality and care of the elderly." },
            { speaker: "Señor Ramos", text: "Estoy de acuerdo en que necesitamos una política migratoria ordenada, pero no podemos ignorar los problemas de integración. Una llegada masiva sin recursos suficientes genera tensión social y puede perjudicar tanto a los ciudadanos locales como a los propios inmigrantes.", translation: "I agree that we need an orderly migration policy, but we cannot ignore integration problems. A massive arrival without sufficient resources generates social tension and can harm both local citizens and the immigrants themselves." },
            { speaker: "Moderadora", text: "¿Cómo garantizar entonces una integración exitosa?", translation: "How do we guarantee successful integration, then?" },
            { speaker: "Señora Vega", text: "Invirtiendo en programas de acogida, formación lingüística y reconocimiento de cualificaciones extranjeras.", translation: "By investing in reception programmes, language training and recognition of foreign qualifications." },
        ],
        questions: [
            {
                id: "es-l-b2-3-q1",
                level: "B2",
                prompt: "¿Por qué argumenta la señora Vega que España necesita la inmigración?",
                options: [
                    "Porque tiene una tasa de natalidad baja y necesita mano de obra",
                    "Porque la economía española depende del turismo extranjero",
                    "Porque los españoles no quieren trabajar en ningún sector",
                    "Porque la Unión Europea obliga a aceptar inmigrantes"
                ],
                answer: "Porque tiene una tasa de natalidad baja y necesita mano de obra"
            },
            {
                id: "es-l-b2-3-q2",
                level: "B2",
                prompt: "¿Qué preocupación expresa el señor Ramos?",
                options: [
                    "Que la llegada masiva sin recursos genera tensión social",
                    "Que la inmigración reduce el nivel cultural del país",
                    "Que los inmigrantes no pagan impuestos",
                    "Que España tiene demasiada población ya"
                ],
                answer: "Que la llegada masiva sin recursos genera tensión social"
            },
            {
                id: "es-l-b2-3-q3",
                level: "B2",
                prompt: "¿Qué propone la señora Vega para lograr una integración exitosa?",
                options: [
                    "Invertir en programas de acogida, formación lingüística y reconocimiento de cualificaciones",
                    "Limitar el número de inmigrantes que entran cada año",
                    "Crear zonas exclusivas para inmigrantes en las ciudades",
                    "Obligar a los inmigrantes a abandonar sus costumbres culturales"
                ],
                answer: "Invertir en programas de acogida, formación lingüística y reconocimiento de cualificaciones"
            }
        ]
    },
    {
        id: "es-l-b2-4",
        level: "B2",
        title: "Podcast de cultura: El flamenco como expresión artística",
        script: "Hola y bienvenidos a Cultura Viva. Hoy exploramos el flamenco, uno de los patrimonios culturales más reconocibles de España. El flamenco es mucho más que un baile: es una forma de vida, una filosofía y una manera de expresar las emociones más profundas del ser humano, desde la alegría hasta el dolor más desgarrador. Se originó en Andalucía hace varios siglos, con raíces en la música gitana, árabe, judía y castellana. En 2010, la UNESCO lo declaró Patrimonio Inmaterial de la Humanidad, reconociendo su valor universal. El flamenco se compone de tres elementos inseparables: el cante, el toque de guitarra y el baile. Cada actuación es única e irrepetible, ya que el artista improvisa respondiendo a las emociones del momento y al duende, esa fuerza mística que define al verdadero arte flamenco.",
        translation: "Hello and welcome to Cultura Viva. Today we explore flamenco, one of Spain's most recognisable cultural heritages. Flamenco is much more than a dance: it is a way of life, a philosophy and a way of expressing the deepest human emotions, from joy to the most heartbreaking pain. It originated in Andalusia several centuries ago, with roots in Gypsy, Arab, Jewish and Castilian music. In 2010 UNESCO declared it an Intangible Heritage of Humanity, recognising its universal value. Flamenco is made up of three inseparable elements: cante (singing), toque (guitar playing) and baile (dance). Each performance is unique and unrepeatable, as the artist improvises in response to the emotions of the moment and to the duende, that mystical force that defines true flamenco art.",
        questions: [
            {
                id: "es-l-b2-4-q1",
                level: "B2",
                prompt: "¿En qué año declaró la UNESCO el flamenco Patrimonio Inmaterial de la Humanidad?",
                options: ["En 2010", "En 2000", "En 1992", "En 2015"],
                answer: "En 2010"
            },
            {
                id: "es-l-b2-4-q2",
                level: "B2",
                prompt: "¿Cuáles son los tres elementos inseparables del flamenco según el podcast?",
                options: [
                    "El cante, el toque de guitarra y el baile",
                    "La música, la poesía y la arquitectura",
                    "El ritmo, la melodía y la armonía",
                    "El vestuario, la escenografía y la iluminación"
                ],
                answer: "El cante, el toque de guitarra y el baile"
            },
            {
                id: "es-l-b2-4-q3",
                level: "B2",
                prompt: "¿Qué es el 'duende' según el podcast?",
                options: [
                    "Una fuerza mística que define al verdadero arte flamenco",
                    "Un tipo específico de ritmo en el flamenco",
                    "Un instrumento musical andaluz tradicional",
                    "El nombre del fundador del flamenco moderno"
                ],
                answer: "Una fuerza mística que define al verdadero arte flamenco"
            }
        ]
    },
    {
        id: "es-l-b2-5",
        level: "B2",
        title: "Debate universitario — ¿Las redes sociales benefician o perjudican a la democracia?",
        script: "Bienvenidos al debate de hoy. Analizaremos si las redes sociales son beneficiosas o perjudiciales para la democracia. Empecemos con los argumentos a favor. Las redes sociales han democratizado el acceso a la información. Cualquier ciudadano puede ahora publicar contenido, organizar movimientos sociales y participar en el debate público sin necesidad de pasar por los medios tradicionales. Esto ha permitido que voces históricamente marginadas tengan visibilidad. Sin embargo, también presentan riesgos graves. Los algoritmos de las plataformas crean burbujas de información que refuerzan las creencias existentes y dificultan el diálogo entre personas con opiniones distintas. Además, la desinformación se propaga mucho más rápido que la verdad. Eso es cierto, pero ¿no es responsabilidad de los ciudadanos verificar la información antes de compartirla? En una sociedad ideal, sí. Pero estudios demuestran que incluso personas con alto nivel educativo comparten noticias falsas sin verificarlas. Es una cuestión de diseño tecnológico tanto como de educación cívica. En conclusión, las redes sociales son una herramienta poderosa cuyo impacto depende de cómo las regulemos y cómo las usemos.",
        translation: "Welcome to today's debate. We will analyse whether social networks are beneficial or harmful to democracy. Let's begin with the arguments in favour. Social networks have democratised access to information. Any citizen can now publish content, organise social movements and participate in public debate without going through traditional media. This has allowed historically marginalised voices to become visible. However, they also present serious risks. The platforms' algorithms create information bubbles that reinforce existing beliefs and make dialogue between people with different opinions difficult. Furthermore, misinformation spreads much faster than truth. That is true, but isn't it citizens' responsibility to verify information before sharing it? In an ideal society, yes. But studies show that even highly educated people share fake news without verifying it. It is a question of technological design as much as civic education. In conclusion, social networks are a powerful tool whose impact depends on how we regulate and use them.",
        dialogue: [
            { speaker: "Moderador", text: "Bienvenidos al debate de hoy. Analizaremos si las redes sociales son beneficiosas o perjudiciales para la democracia. Empecemos con los argumentos a favor.", translation: "Welcome to today's debate. We will analyse whether social networks are beneficial or harmful to democracy. Let's begin with the arguments in favour." },
            { speaker: "Debatiente A", text: "Las redes sociales han democratizado el acceso a la información. Cualquier ciudadano puede ahora publicar contenido, organizar movimientos sociales y participar en el debate público sin necesidad de pasar por los medios tradicionales. Esto ha permitido que voces históricamente marginadas tengan visibilidad.", translation: "Social networks have democratised access to information. Any citizen can now publish content, organise social movements and participate in public debate without going through traditional media. This has allowed historically marginalised voices to become visible." },
            { speaker: "Debatiente B", text: "Sin embargo, también presentan riesgos graves. Los algoritmos de las plataformas crean burbujas de información que refuerzan las creencias existentes y dificultan el diálogo entre personas con opiniones distintas. Además, la desinformación se propaga mucho más rápido que la verdad.", translation: "However, they also present serious risks. The platforms' algorithms create information bubbles that reinforce existing beliefs and make dialogue between people with different opinions difficult. Furthermore, misinformation spreads much faster than truth." },
            { speaker: "Debatiente A", text: "Eso es cierto, pero ¿no es responsabilidad de los ciudadanos verificar la información antes de compartirla?", translation: "That is true, but isn't it citizens' responsibility to verify information before sharing it?" },
            { speaker: "Debatiente B", text: "En una sociedad ideal, sí. Pero estudios demuestran que incluso personas con alto nivel educativo comparten noticias falsas sin verificarlas. Es una cuestión de diseño tecnológico tanto como de educación cívica.", translation: "In an ideal society, yes. But studies show that even highly educated people share fake news without verifying it. It is a question of technological design as much as civic education." },
            { speaker: "Moderador", text: "En conclusión, las redes sociales son una herramienta poderosa cuyo impacto depende de cómo las regulemos y cómo las usemos.", translation: "In conclusion, social networks are a powerful tool whose impact depends on how we regulate and use them." }
        ],
        questions: [
            { id: "es-l-b2-5-q1", level: "B2", prompt: "¿Cuál es el argumento principal del Debatiente A a favor de las redes sociales?", options: ["Han eliminado completamente la desinformación", "Han democratizado el acceso a la información y dado visibilidad a voces marginadas", "Son más fiables que los medios tradicionales", "Permiten a los políticos comunicarse directamente con los ciudadanos"], answer: "Han democratizado el acceso a la información y dado visibilidad a voces marginadas" },
            { id: "es-l-b2-5-q2", level: "B2", prompt: "¿Qué problema específico menciona el Debatiente B respecto a los algoritmos?", options: ["Que favorecen a los partidos políticos que pagan más publicidad", "Que crean burbujas de información que dificultan el diálogo entre personas con opiniones distintas", "Que son demasiado lentos para filtrar contenido dañino", "Que solo funcionan bien para usuarios jóvenes"], answer: "Que crean burbujas de información que dificultan el diálogo entre personas con opiniones distintas" },
            { id: "es-l-b2-5-q3", level: "B2", prompt: "¿Cuál es la conclusión del moderador?", options: ["Las redes sociales son inevitablemente perjudiciales y deberían regularse con urgencia", "El impacto de las redes sociales depende de cómo se regulen y se usen", "Las redes sociales son más beneficiosas que perjudiciales", "La educación cívica es más importante que la regulación tecnológica"], answer: "El impacto de las redes sociales depende de cómo se regulen y se usen" }
        ]
    }
]
