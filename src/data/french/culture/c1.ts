// ─────────────────────────────────────────────────────────────────────────────
// FRENCH C1 CULTURE
// src/data/french/culture/c1.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"

export const frC1Culture: CultureEpisode[] = [
    {
        id: "fr-c-c1-1",
        language: "fr",
        level: "C1",
        category: "arts",
        region: "france",
        title: {
            native: "La Nouvelle Vague — quand le cinéma français a réinventé le septième art",
            target: "La Nouvelle Vague"
        },
        subtitle: "How a handful of young French critics with cameras overturned the rules of cinema and changed filmmaking forever.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
                caption: {
                    native: "A cinema on the Champs-Élysées — Paris remains the world's most cinema-going city per capita",
                    target: "Un cinéma sur les Champs-Élysées — Paris reste la ville au monde où l'on va le plus au cinéma par habitant"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800",
                caption: {
                    native: "16mm film reels — the lightweight cameras of the New Wave liberated directors from studios",
                    target: "Bobines de film 16mm — les caméras légères de la Nouvelle Vague ont libéré les réalisateurs des studios"
                },
                credit: "Unsplash"
            },
            {
                url: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800",
                caption: {
                    native: "A Paris street — the New Wave directors filmed the city as no one had before, treating it as a living character",
                    target: "Une rue de Paris — les réalisateurs de la Nouvelle Vague ont filmé la ville comme personne ne l'avait fait, en la traitant comme un personnage vivant"
                },
                credit: "Unsplash"
            }
        ],

        body: {
            target: `À la fin des années 1950, le cinéma français était dominé par ce qu'on appelait la « tradition de la qualité » : des films soigneusement éclairés, adaptés de romans littéraires, tournés en studio, avec des dialogues élaborés et des acteurs consacrés. C'était un cinéma respectable, souvent brillant — et, aux yeux d'un groupe de jeunes critiques des Cahiers du cinéma, profondément ennuyeux.

Ces critiques — François Truffaut, Jean-Luc Godard, Claude Chabrol, Jacques Rivette, Éric Rohmer — allaient bientôt devenir des réalisateurs. Leur manifeste intellectuel, c'est l'article de Truffaut de 1954, « Une certaine tendance du cinéma français », dans lequel il attaque violemment le cinéma de scénaristes et réclame un cinéma d'auteurs, où le réalisateur est le véritable créateur de l'œuvre, au même titre qu'un romancier ou un peintre. La « politique des auteurs » allait devenir le concept central de la Nouvelle Vague et influencer toute la critique cinématographique mondiale.

La Nouvelle Vague proprement dite éclate en 1959-1960, avec une grappe de premiers films qui stupéfient le monde du cinéma. Les Quatre Cents Coups de Truffaut, À bout de souffle de Godard, Le Beau Serge de Chabrol : ces œuvres partagent une esthétique radicalement neuve. Tournés en décors réels avec des caméras légères (souvent portées à l'épaule), avec des budgets dérisoires, avec des acteurs parfois non professionnels, en lumière naturelle — ces films cassent délibérément les conventions du montage « invisible », introduisent des sauts de coupe (jump cuts) qui désarçonnent le spectateur, laissent entrer le bruit de la rue, et improvisent des dialogues sur le plateau.

Ce bouleversement formel s'accompagne d'une nouvelle façon de raconter. Les personnages de la Nouvelle Vague sont des individus en crise, en fuite ou en errance — souvent des jeunes adultes incapables de s'intégrer dans la société bourgeoise de la France d'après-guerre. Antoine Doinel (Truffaut), Michel Poiccard (Godard) : ces anti-héros ne triomphent pas. Ils échouent, ils meurent, ils disparaissent dans l'ambiguïté. La Nouvelle Vague refuse la résolution narrative du cinéma classique.

L'influence internationale du mouvement a été immédiate et profonde. Martin Scorsese, Francis Ford Coppola, Stanley Kubrick et Woody Allen ont tous cité la Nouvelle Vague comme une influence majeure. Le Nouvel Hollywood des années 1970, le cinéma d'auteur japonais, brésilien, tchèque — tous portent la marque de ce mouvement parisien. Des techniques inventées par improvisation faute de moyens — le jump cut, le tournage sur le vif, la caméra portée — sont devenues des outils stylistiques universels.

La Nouvelle Vague a également transformé la relation du cinéma à la culture intellectuelle française. Les cinéastes du mouvement fréquentaient les cafés de Saint-Germain-des-Prés, lisaient Sartre et Camus, se nourrissaient des théories phénoménologiques de Merleau-Ponty. Le cinéma n'était plus un divertissement populaire : c'était un art à part entière, une forme de philosophie en images. Cette conviction — que le cinéma mérite la même rigueur intellectuelle que la littérature — reste au cœur de la culture cinéphile française, et explique pourquoi la France subventionne son cinéma national plus généreusement qu'aucun autre pays au monde.`,
            native: `At the end of the 1950s, French cinema was dominated by what was called the "tradition of quality": carefully lit films, adapted from literary novels, shot in studios, with elaborate dialogue and established actors. It was a respectable, often brilliant cinema — and, in the eyes of a group of young critics at the Cahiers du cinéma, profoundly boring.

These critics — François Truffaut, Jean-Luc Godard, Claude Chabrol, Jacques Rivette, Éric Rohmer — were soon to become directors. Their intellectual manifesto was Truffaut's 1954 article, "A Certain Tendency in French Cinema", in which he violently attacked screenwriter-driven cinema and demanded a cinema of auteurs, where the director is the true creator of the work, just as a novelist or painter is. The "auteur theory" would become the central concept of the New Wave and influence film criticism worldwide.

The New Wave proper exploded in 1959–1960, with a cluster of debut films that astonished the film world. Truffaut's The 400 Blows, Godard's Breathless, Chabrol's Le Beau Serge: these works share a radically new aesthetic. Shot on real locations with lightweight cameras (often handheld), on tiny budgets, with sometimes non-professional actors, in natural light — these films deliberately break the conventions of "invisible" editing, introduce jump cuts that unsettle the viewer, let in the noise of the street, and improvise dialogue on set.

This formal upheaval was accompanied by a new way of telling stories. New Wave characters are individuals in crisis, on the run, or drifting — often young adults unable to integrate into the bourgeois society of post-war France. Antoine Doinel (Truffaut), Michel Poiccard (Godard): these anti-heroes do not triumph. They fail, they die, they disappear into ambiguity. The New Wave refuses the narrative resolution of classical cinema.

The movement's international influence was immediate and profound. Martin Scorsese, Francis Ford Coppola, Stanley Kubrick and Woody Allen all cited the New Wave as a major influence. New Hollywood of the 1970s, Japanese, Brazilian, and Czech art cinema — all bear the mark of this Parisian movement. Techniques invented by improvisation out of necessity — the jump cut, on-location shooting, the handheld camera — became universal stylistic tools.

The New Wave also transformed the relationship between cinema and French intellectual culture. The movement's filmmakers frequented the cafés of Saint-Germain-des-Prés, read Sartre and Camus, and drew on the phenomenological theories of Merleau-Ponty. Cinema was no longer popular entertainment: it was an art form in its own right, a form of philosophy in images. This conviction — that cinema deserves the same intellectual rigour as literature — remains at the heart of French cinephile culture, and explains why France subsidises its national cinema more generously than any other country in the world.`
        },

        cultureVocab: [
            {
                word: "la Nouvelle Vague",
                translation: "the New Wave (French cinema movement, c.1958–1968)",
                culturalNote: "The term was coined by journalist Françoise Giroud in 1957 to describe a generational phenomenon in French society more broadly. It was appropriated by film critics and became the name of the most influential movement in post-war cinema history."
            },
            {
                word: "les Cahiers du cinéma",
                translation: "Cahiers du cinéma (film journal, founded 1951)",
                culturalNote: "Founded by André Bazin, the Cahiers became the intellectual engine of the New Wave. It remains one of the world's most prestigious film journals today. Writing for it was the apprenticeship of Truffaut, Godard, Chabrol, Rohmer and Rivette before they picked up cameras."
            },
            {
                word: "la politique des auteurs",
                translation: "the auteur theory",
                culturalNote: "The idea that the director is the sole artistic author of a film, stamping it with a consistent visual and thematic signature across their entire body of work — just as a writer has a recognisable style. Adapted into English by American critic Andrew Sarris, it restructured how cinema studies is taught worldwide."
            },
            {
                word: "le jump cut",
                translation: "a jump cut — an abrupt, jarring cut between two shots",
                culturalNote: "Deliberately used by Godard in À bout de souffle (1960), ostensibly because scenes were too long but retained as a stylistic choice. In classical editing, such cuts are 'errors' to be avoided. Godard turned rule-breaking into a new grammar. The jump cut is now a standard technique in music videos, advertising and art cinema."
            },
            {
                word: "la cinéphilie",
                translation: "cinephilia — passionate, intellectual love of cinema",
                culturalNote: "A distinctly French concept with no true equivalent. French cinéphiles do not merely 'like films' — they study them, debate them and treat them as philosophical texts. The Paris cinémathèque, founded by Henri Langlois, was the cathedral of cinéphilia, where the future New Wave directors watched several films a day throughout the 1950s."
            }
        ],

        questions: [
            {
                id: "fr-c-c1-1-q1",
                type: "comprehension",
                prompt: {
                    native: "What was the central argument of Truffaut's 1954 article in the Cahiers du cinéma?",
                    target: "Quel était l'argument central de l'article de Truffaut de 1954 dans les Cahiers du cinéma ?"
                },
                options: [
                    "That French cinema needed bigger budgets and more professional actors",
                    "That American cinema was superior to French cinema in every respect",
                    "That the director, not the screenwriter, should be the true creative author of a film",
                    "That French cinema should focus on social realism rather than literary adaptations"
                ],
                answer: "That the director, not the screenwriter, should be the true creative author of a film"
            },
            {
                id: "fr-c-c1-1-q2",
                type: "comprehension",
                prompt: {
                    native: "How does the text explain the lasting global influence of the New Wave's technical innovations?",
                    target: "Comment le texte explique-t-il l'influence mondiale durable des innovations techniques de la Nouvelle Vague ?"
                },
                options: [
                    "New Wave techniques were officially adopted by Hollywood studios in the 1960s",
                    "Techniques invented out of financial necessity — jump cuts, handheld camera — became universal stylistic tools",
                    "New Wave directors trained a generation of filmmakers in their methods",
                    "The French government made New Wave techniques compulsory in film schools"
                ],
                answer: "Techniques invented out of financial necessity — jump cuts, handheld camera — became universal stylistic tools"
            },
            {
                id: "fr-c-c1-1-q3",
                type: "reflection",
                prompt: {
                    native: "The New Wave treated cinema as a form of philosophy — serious enough to deserve the same intellectual attention as literature. Do you think a popular art form in your culture (film, music, television, video games) has achieved or deserves a similar level of cultural prestige? What would it take for it to be taken that seriously?",
                    target: "La Nouvelle Vague traitait le cinéma comme une forme de philosophie — assez sérieux pour mériter la même attention intellectuelle que la littérature. Pensez-vous qu'une forme d'art populaire dans votre culture (cinéma, musique, télévision, jeux vidéo) ait atteint ou mérite un prestige culturel similaire ? Que faudrait-il pour qu'elle soit prise aussi au sérieux ?"
                }
            }
        ],

        didYouKnow: {
            native: "Jean-Luc Godard's À bout de souffle (Breathless, 1960) was edited by jumping straight into the action by cutting out all the pauses, transitional shots and reaction shots that classical editing required. His editor, Cécile Decugis, told him the rough cut was too long. Rather than shooting extra footage, Godard instructed her to simply cut out chunks within scenes — creating the jump cut by accident, then keeping it as an aesthetic statement. A technical glitch became one of the most imitated techniques in cinema history.",
            target: "À bout de souffle de Jean-Luc Godard (1960) a été monté en supprimant toutes les pauses, les plans de transition et les plans de réaction qu'exigeait le montage classique. Sa monteuse, Cécile Decugis, lui a dit que la première version était trop longue. Plutôt que de tourner des plans supplémentaires, Godard lui a demandé de supprimer des morceaux à l'intérieur des scènes — créant ainsi le jump cut par accident, puis le conservant comme affirmation esthétique. Une erreur technique est devenue l'une des techniques les plus imitées de l'histoire du cinéma."
        },

        relatedIds: ["fr-c-b2-1"]
    }
]
