import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-4",
        level: "A1",
        title: "Possessives — mon, ma, mes / ton, ta, tes / son, sa, ses",
        explanation: `To describe your family, you need words like 'my', 'your', and 'his/her'. In French, these are called possessive adjectives, and they work differently from English.

THE KEY RULE: The form follows the gender of the **noun being described** — not the gender of the person speaking.

This means a woman says **mon père** (not *ma père*) because *père* is masculine. A man says **ma mère** (not *mon mère*) because *mère* is feminine. The noun decides the form, not the speaker.

The table below shows all three sets of possessives.

BEFORE A VOWEL: When the noun begins with a vowel or silent h, **ma/ta/sa** become **mon/ton/son** to avoid the awkward vowel clash:
  mon amie (not *ma amie*) — my friend (female)
  ton école (not *ta école*) — your school
  son appartement (not *sa appartement*) — his/her flat

This is a sound rule, not a gender rule — the noun amie is feminine, but you still say mon.

Note: **son/sa/ses** can mean either 'his' or 'her' — French doesn't distinguish between them. Context makes it clear:
  Sa sœur s'appelle Claire. — His/Her sister is called Claire. (context tells you which)`,
        examples: [
            { native: "Mon frère s'appelle Luc.", translation: "My brother's name is Luc." },
            { native: "Ma sœur a vingt ans.", translation: "My sister is twenty." },
            { native: "Mes parents habitent à Lyon.", translation: "My parents live in Lyon." },
            { native: "Son père est médecin.", translation: "His/Her father is a doctor." },
            { native: "Ta mère est de Paris ?", translation: "Is your mother from Paris?" },
            { native: "Mon amie s'appelle Sophie.", translation: "My friend (female) is called Sophie." },
        ],
        inlineVocab: [
            { word: "mon / ma / mes", translation: "my (masc. / fem. / plural)" },
            { word: "ton / ta / tes", translation: "your (informal) (masc. / fem. / plural)" },
            { word: "son / sa / ses", translation: "his / her (masc. / fem. / plural)" },
            { word: "le frère", translation: "the brother" },
            { word: "la sœur", translation: "the sister" },
            { word: "les parents", translation: "the parents" },
            { word: "la famille", translation: "the family" },
            { word: "un ami / une amie", translation: "a friend (male / female)" },
            { word: "s'appelle", translation: "is called (from s'appeler)" },
        ],
        rules: [
            {
                condition: "The noun being described is masculine singular",
                result: "Use mon / ton / son",
                examples: [
                    { native: "Mon père est médecin.", translation: "My father is a doctor." },
                    { native: "Ton frère s'appelle comment ?", translation: "What's your brother's name?" },
                    { native: "Son chien est très grand.", translation: "His/Her dog is very big." },
                ],
            },
            {
                condition: "The noun being described is feminine singular",
                result: "Use ma / ta / sa",
                examples: [
                    { native: "Ma mère est professeure.", translation: "My mother is a teacher." },
                    { native: "Ta sœur habite où ?", translation: "Where does your sister live?" },
                    { native: "Sa voiture est rouge.", translation: "His/Her car is red." },
                ],
            },
            {
                condition: "The noun is feminine but starts with a vowel or silent h",
                result: "Use mon / ton / son (not ma / ta / sa) to avoid vowel clash",
                examples: [
                    { native: "Mon amie s'appelle Sophie.", translation: "My friend (female) is called Sophie." },
                    { native: "Ton école est loin ?", translation: "Is your school far?" },
                ],
            },
            {
                condition: "The noun is plural (any gender)",
                result: "Use mes / tes / ses",
                examples: [
                    { native: "Mes parents habitent à Lyon.", translation: "My parents live in Lyon." },
                    { native: "Ses enfants sont très sympas.", translation: "His/Her children are very nice." },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "The possessive agrees with the noun, not the speaker. A woman says 'mon père' (not 'ma père') because père is masculine. Get the noun's gender right and the possessive follows automatically.",
            },
            {
                type: "tip",
                content: "'Son/sa/ses' is ambiguous — it means both 'his' and 'her'. French relies on context rather than marking the speaker's gender. Don't try to force a distinction that doesn't exist.",
            },
            {
                type: "culture",
                content: "French people often talk about family in the first few minutes of meeting someone. Knowing 'mon frère', 'ma sœur', 'mes parents' is genuinely high-frequency social vocabulary.",
            },
        ],
        fixedPhrases: [
            { native: "Mon frère s'appelle Luc.", translation: "My brother's name is Luc.", note: "Template — swap the name." },
            { native: "Mes parents habitent à Paris.", translation: "My parents live in Paris.", note: "Replace Paris with your city." },
            { native: "Tu as des frères et sœurs ?", translation: "Do you have brothers and sisters?", note: "Standard small-talk opener." },
            { native: "Je suis fils / fille unique.", translation: "I'm an only child.", note: "fils unique (male) / fille unique (female)" },
        ],
        paradigmTable: {
            pronouns: ["my", "your (tu)", "his / her"],
            verbs: [
                { label: "masculine", forms: ["mon", "ton", "son"] },
                { label: "feminine", forms: ["ma", "ta", "sa"] },
                { label: "plural", forms: ["mes", "tes", "ses"] },
            ],
        },
    },
    {
        id: "fr-g-a1-5",
        level: "A1",
        title: "Adjective agreement — the pattern you've been noticing",
        explanation: `Since Unit 2, you've been seeing something. Look at these pairs you've already encountered:

  Il est français.      Elle est française.
  Il est étudiant.      Elle est étudiante.
  Il est grand.         Elle est grande.
  Il est intelligent.   Elle est intelligente.
  Il est sportif.       Elle est sportive.
  Il est vieux.         Elle est vieille.

Something consistently changes when describing a woman. And when there's more than one person, it changes again:
  Il est grand. → Ils sont grands.
  Elle est grande. → Elles sont grandes.

This is **adjective agreement**. In French, adjectives change their ending to match the gender and number of the noun or person they describe.

The agreement endings and the most common irregulars are in the table below.

When the masculine form already ends in -e (like **sympa**, **drôle**, **timide**), it stays the same in the feminine.

ADJECTIVE POSITION: In French, most adjectives come **after** the noun — the opposite of English:
  une femme intelligente (not *une intelligente femme*)
  un homme sérieux

BUT a small group of very common adjectives come **before** the noun:
  grand, petit, beau, vieux, nouveau, bon, mauvais
  un grand hôtel — un petit appartement — une belle ville

When spoken, masculine and feminine forms often sound the same (grand/grande sounds identical in fast speech). The agreement shows most clearly in writing — which is why spelling matters.`,
        examples: [
            { native: "Ma sœur est grande et sportive.", translation: "My sister is tall and sporty." },
            { native: "Mon frère est petit et intelligent.", translation: "My brother is short and intelligent." },
            { native: "Mes parents sont sympas.", translation: "My parents are nice." },
            { native: "C'est une belle ville.", translation: "It's a beautiful city." },
            { native: "Il est très travailleur.", translation: "He is very hardworking." },
            { native: "Elle est travailleuse aussi.", translation: "She is hardworking too." },
        ],
        inlineVocab: [
            { word: "grand(e)", translation: "tall / big (adds -e for feminine)" },
            { word: "petit(e)", translation: "short / small (adds -e for feminine)" },
            { word: "sportif / sportive", translation: "sporty (-f → -ve)" },
            { word: "vieux / vieille", translation: "old (irregular)" },
            { word: "beau / belle", translation: "beautiful / handsome (irregular)" },
            { word: "nouveau / nouvelle", translation: "new (irregular)" },
            { word: "sympa", translation: "nice / friendly (invariable)" },
            { word: "gentil / gentille", translation: "kind (-l → -lle)" },
            { word: "intelligent(e)", translation: "intelligent (adds -e for feminine)" },
        ],
        rules: [
            {
                condition: "Describing a feminine noun or person",
                result: "Add -e to the masculine form (if it doesn't already end in -e)",
                examples: [
                    { native: "Il est grand. → Elle est grande.", translation: "He is tall. → She is tall." },
                    { native: "Il est intelligent. → Elle est intelligente.", translation: "He is intelligent. → She is intelligent." },
                    { native: "Il est sportif. → Elle est sportive.", translation: "He is sporty. → She is sporty. (-f → -ve)" },
                ],
            },
            {
                condition: "Describing a plural group",
                result: "Add -s (masculine plural) or -es (feminine plural)",
                examples: [
                    { native: "Ils sont grands. Elles sont grandes.", translation: "They (m) are tall. They (f) are tall." },
                    { native: "Mes parents sont sympas.", translation: "My parents are nice. (sympa is invariable)" },
                ],
            },
            {
                condition: "Most adjectives follow the noun",
                result: "Place the adjective after the noun in French",
                examples: [
                    { native: "une femme intelligente", translation: "an intelligent woman" },
                    { native: "un film intéressant", translation: "an interesting film" },
                ],
            },
            {
                condition: "A small group of very common adjectives precede the noun",
                result: "Grand, petit, beau, vieux, nouveau, bon, mauvais go BEFORE",
                examples: [
                    { native: "un grand hôtel", translation: "a big hotel" },
                    { native: "une belle ville", translation: "a beautiful city" },
                    { native: "un bon restaurant", translation: "a good restaurant" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Masculine and feminine adjective forms often sound identical in speech — the difference shows in writing. 'grand' and 'grande' are both pronounced the same way in fast speech. The written -e is your only clue.",
            },
            {
                type: "warning",
                content: "Don't add -e if the masculine already ends in -e: 'sympa → sympa' (not 'sympae'), 'timide → timide', 'drôle → drôle'. These adjectives are invariable for gender.",
            },
            {
                type: "forward-ref",
                content: "Adjective agreement applies in the passé composé too — past participles of être-verbs agree with their subject. You'll see this clearly in the Block 5 lesson.",
                refId: "fr-g-a1-20",
            },
        ],
        fixedPhrases: [
            { native: "Elle est très sympa.", translation: "She's very nice.", note: "Sympa is one of the most useful adjectives — it applies to people, places, and events." },
            { native: "C'est une belle ville.", translation: "It's a beautiful city.", note: "Beau before the noun → belle before a feminine noun." },
            { native: "Il est grand et sportif.", translation: "He is tall and sporty.", note: "Adjective chaining with et — very natural in descriptions." },
            { native: "C'est pas mal !", translation: "It's not bad! / Pretty good!", note: "Informal — very common in everyday spoken French." },
        ],
        paradigmTable: {
            pronouns: ["masc. singular", "fem. singular", "masc. plural", "fem. plural"],
            verbs: [
                { label: "regular (-e / -s)", forms: ["grand", "grande", "grands", "grandes"] },
                { label: "-f → -ve", forms: ["sportif", "sportive", "sportifs", "sportives"] },
                { label: "-x → -se", forms: ["sérieux", "sérieuse", "sérieux", "sérieuses"] },
                { label: "irregular", forms: ["vieux", "vieille", "vieux", "vieilles"] },
            ],
        },
    },
    {
        id: "fr-g-a1-6",
        level: "A1",
        title: "Negation — ne...pas",
        explanation: `You've been using *je n'aime pas* already. Let's look at what's actually happening.

Compare these pairs:
  J'aime le café.       → Je **n'**aime **pas** le café.
  Je travaille ici.     → Je **ne** travaille **pas** ici.
  Il est français.      → Il **n'**est **pas** français.
  Elle a une voiture.   → Elle **n'**a **pas** de voiture.

French negation uses **two parts** that wrap around the verb:
  je + [**ne**] + verb + [**pas**]

BEFORE A VOWEL: *ne* becomes *n'* (elision — remove the e, add an apostrophe):
  Je **n'**aime pas, Je **n'**habite pas, Il **n'**est pas

ARTICLE CHANGE IN NEGATION: After *ne...pas*, **un/une/des** becomes **de** (or **d'** before a vowel):
  J'ai **une** voiture.   → Je n'ai **pas de** voiture.
  Il a **des** frères.    → Il n'a **pas de** frères.
  BUT: **le/la/les** stays the same — negation doesn't change definite articles:
  J'aime **le** café.     → Je n'aime **pas le** café. ✓

BONUS PATTERNS — once you have ne...pas, two more are easy:
  **ne...jamais** — never:   Je ne mange **jamais** de viande. (I never eat meat.)
  **ne...plus**  — no longer: Il ne travaille **plus** ici. (He no longer works here.)
  Same structure — just swap *pas* for *jamais* or *plus*.

IN SPOKEN FRENCH: The *ne* is often dropped in casual speech:
  *J'aime pas ça.* — I don't like that. (informal spoken)
You will hear this constantly. Understand it when you hear it, but keep the full *ne...pas* in writing and formal speech.

The pattern feels mechanical at first, but after a few weeks of exposure it becomes second nature. The key is always: ne before the verb, pas (or jamais/plus) after it.`,
        examples: [
            { native: "Je ne comprends pas.", translation: "I don't understand." },
            { native: "Il ne parle pas anglais.", translation: "He doesn't speak English." },
            { native: "Je n'ai pas de voiture.", translation: "I don't have a car." },
            { native: "Elle n'est pas française.", translation: "She's not French." },
            { native: "Je ne mange jamais de viande.", translation: "I never eat meat." },
            { native: "Il ne travaille plus ici.", translation: "He no longer works here." },
        ],
        inlineVocab: [
            { word: "ne...pas", translation: "not (standard negation, wraps around verb)" },
            { word: "ne...jamais", translation: "never" },
            { word: "ne...plus", translation: "no longer / not anymore" },
            { word: "n'", translation: "ne before a vowel (elision)" },
            { word: "pas de / d'", translation: "no / not any (replaces un/une/des after negation)" },
            { word: "comprendre", translation: "to understand" },
            { word: "parler", translation: "to speak" },
            { word: "manger", translation: "to eat" },
        ],
        rules: [
            {
                condition: "Negating a verb",
                result: "Wrap the verb with ne ... pas (ne becomes n' before a vowel)",
                examples: [
                    { native: "Je ne parle pas espagnol.", translation: "I don't speak Spanish." },
                    { native: "Il n'est pas français.", translation: "He's not French." },
                    { native: "Elle n'aime pas le café.", translation: "She doesn't like coffee." },
                ],
            },
            {
                condition: "Un / une / des follows a negated verb",
                result: "Replace with de (or d' before a vowel)",
                examples: [
                    { native: "J'ai une voiture. → Je n'ai pas de voiture.", translation: "I have a car. → I don't have a car." },
                    { native: "Il a des frères. → Il n'a pas de frères.", translation: "He has brothers. → He has no brothers." },
                ],
            },
            {
                condition: "Le / la / les follows a negated verb",
                result: "The definite article stays unchanged",
                examples: [
                    { native: "J'aime le chocolat. → Je n'aime pas le chocolat.", translation: "I like chocolate. → I don't like chocolate." },
                ],
            },
            {
                condition: "You want to say 'never' or 'no longer'",
                result: "Replace pas with jamais (never) or plus (no longer)",
                examples: [
                    { native: "Je ne mange jamais de viande.", translation: "I never eat meat." },
                    { native: "Il ne travaille plus ici.", translation: "He no longer works here." },
                ],
            },
        ],
        notes: [
            {
                type: "culture",
                content: "In casual spoken French, the ne is routinely dropped: 'Je sais pas', 'J'ai pas de voiture'. You will hear this constantly — understand it, but keep the full ne...pas in writing and careful speech.",
            },
            {
                type: "warning",
                content: "The article change only applies to un/une/des, not le/la/les. 'Je n'aime pas le café' keeps 'le' — the definite article never changes to 'de' after negation.",
            },
            {
                type: "tip",
                content: "Think of ne and pas as a pair of brackets around the verb: [ ne ] + verb + [ pas ]. Everything else — pronouns, auxiliaries, infinitives — goes outside the brackets.",
            },
        ],
        fixedPhrases: [
            { native: "Je ne comprends pas.", translation: "I don't understand.", note: "The single most useful phrase for a learner — say it clearly and people will slow down." },
            { native: "Je ne parle pas bien français.", translation: "I don't speak French well.", note: "Honest and immediately understood by any French speaker." },
            { native: "Ce n'est pas grave.", translation: "It's not a big deal. / No worries.", note: "Polite, reassuring — great for defusing awkward moments." },
            { native: "Je ne sais pas.", translation: "I don't know.", note: "Very high-frequency. In casual speech: 'Je sais pas'." },
        ],
    },
    {
        id: "fr-g-a1-7",
        level: "A1",
        title: "Aller + destinations — going places",
        explanation: `The verb **aller** (to go) is one of the most useful in French. Despite ending in -er, it is completely irregular — it doesn't follow the -er verb pattern you already know. Memorise these forms directly. The full conjugation is in the table below.

PREPOSITIONS WITH DESTINATIONS — one rule, all places:
Use **à** before cities (à Paris, à Rome, à Tokyo), **en** before feminine countries (en France, en Espagne, en Italie), **au** before masculine countries (au Canada, au Japon, au Brésil), and **aux** before plural countries (aux États-Unis, aux Pays-Bas).

**au** and **aux** are contractions: *à + le = au*, *à + les = aux*. French never says *à le* — it always contracts.

How to know if a country is feminine: most ending in -e are feminine (la France, l'Espagne, l'Italie, l'Allemagne, la Chine). Key exceptions: le Mexique, le Cambodge.

ORIGIN — use **de/d'/du/des** for "from":
  Je viens **de** Paris.       Je viens **de** France.
  Je viens **du** Canada.      Je viens **des** États-Unis.

FUTUR PROCHE — aller + infinitive means 'going to do something':
  Je **vais manger** ce soir.    →  I'm going to eat tonight.
  On **va regarder** un film.    →  We're going to watch a film.
  Elle **va partir** demain.     →  She's going to leave tomorrow.

This is one of the most natural ways to talk about near-future plans in French — and you now have everything you need to use it. Just take the right aller form and add any infinitive.`,
        examples: [
            { native: "Je vais au marché.", translation: "I'm going to the market." },
            { native: "Elle va en France la semaine prochaine.", translation: "She's going to France next week." },
            { native: "Nous allons au Japon en été.", translation: "We're going to Japan in summer." },
            { native: "Tu vas aux États-Unis ?", translation: "Are you going to the United States?" },
            { native: "Je vais manger au restaurant ce soir.", translation: "I'm going to eat at a restaurant tonight." },
            { native: "On va regarder un film — tu viens ?", translation: "We're going to watch a film — are you coming?" },
        ],
        inlineVocab: [
            { word: "aller", translation: "to go (irregular -er verb)" },
            { word: "vais / vas / va", translation: "go / goes (je / tu / il/elle forms of aller)" },
            { word: "allons / allez / vont", translation: "go (nous / vous / ils/elles forms of aller)" },
            { word: "à", translation: "to / in (used with cities)" },
            { word: "en", translation: "to / in (used with feminine countries)" },
            { word: "au", translation: "to / in (à + le, used with masculine countries)" },
            { word: "aux", translation: "to / in (à + les, used with plural countries)" },
            { word: "venir de", translation: "to come from" },
            { word: "futur proche", translation: "near future (aller + infinitive)" },
        ],
        rules: [
            {
                condition: "Going to a city",
                result: "Use à + city (no article)",
                examples: [
                    { native: "Je vais à Paris.", translation: "I'm going to Paris." },
                    { native: "Elle va à Rome.", translation: "She's going to Rome." },
                ],
            },
            {
                condition: "Going to a country",
                result: "en (feminine), au (masculine), aux (plural)",
                examples: [
                    { native: "Je vais en France.", translation: "I'm going to France. (feminine country)" },
                    { native: "Il va au Japon.", translation: "He's going to Japan. (masculine country)" },
                    { native: "Nous allons aux États-Unis.", translation: "We're going to the United States. (plural)" },
                ],
            },
            {
                condition: "Using aller + infinitive",
                result: "Express a near-future plan: aller (conjugated) + infinitive",
                examples: [
                    { native: "Je vais manger au restaurant.", translation: "I'm going to eat at a restaurant." },
                    { native: "Elle va partir demain.", translation: "She's going to leave tomorrow." },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Most countries ending in -e are feminine: la France, l'Espagne, l'Italie, l'Allemagne, la Chine. Key exceptions: le Mexique, le Cambodge. When in doubt, check — getting en vs au right is worth the effort.",
            },
            {
                type: "warning",
                content: "Aller looks like a regular -er verb but is completely irregular: je vais, tu vas, il va. Don't try to apply the -er pattern — memorise these four forms directly.",
            },
            {
                type: "culture",
                content: "'On va...' (using on for nous) is the natural spoken way to suggest doing something together: 'On va au café ?' means 'Shall we go to the café?' You'll hear on far more than nous in everyday conversation.",
            },
        ],
        fixedPhrases: [
            { native: "Je vais au travail.", translation: "I'm going to work.", note: "High-frequency daily phrase." },
            { native: "Tu vas où ?", translation: "Where are you going?", note: "Casual, natural question — intonation goes up at the end." },
            { native: "On va au café ?", translation: "Shall we go to the café?", note: "On = nous in casual speech. This is how suggestions are made in French." },
            { native: "Je viens de Londres.", translation: "I'm from London.", note: "Venir de expresses origin — more specific than être de." },
        ],
        conjugationTable: {
            pronouns: ["je", "tu", "il / elle / on", "nous", "vous", "ils / elles"],
            verbs: [
                { label: "aller", forms: ["vais", "vas", "va", "allons", "allez", "vont"] },
            ],
        },
    },
    {
        id: "fr-g-a1-8",
        level: "A1",
        title: "Articles — the full picture",
        explanation: `For nine units, you've been seeing these words everywhere:
  **un** café, **une** boulangerie, **un** appartement, **une** maison
  **le** matin, **la** famille, **l'**université, **les** enfants

You've been using them correctly without thinking about it. Now let's look at what's actually happening.

There are two main types of article, and the difference is about **what you're referring to**. The full paradigm is in the table below.

INDEFINITE ARTICLES — un / une / des (a / an / some):
Used for something not yet specified, one of many, or first mention.

DEFINITE ARTICLES — le / la / l' / les (the):
Used for something specific, already known, or — this is the key insight — **general statements**.

THE MOST IMPORTANT RULE FOR ENGLISH SPEAKERS:
In French, **general statements use le/la/les** where English uses no article at all:
  J'aime **le** chocolat.      →  I like chocolate. (not: I like the chocolate)
  **Les** chats sont indépendants. →  Cats are independent. (not: The cats)
  **La** famille est importante.   →  Family is important.

This is the most common article error English speakers make. When you're speaking in general, use le/la/les.

THE l' RULE: Before any word starting with a vowel or silent h, le/la becomes l':
  l'appartement, l'université, l'hôtel, l'homme

CONTRACTIONS (reminder from Unit 8): à + le = **au**, à + les = **aux**, de + le = **du**, de + les = **des**. French never says *à le* or *de le* — these always contract.

AFTER NEGATION: un/une/des → **de/d'**:
  J'ai un frère.     → Je n'ai **pas de** frère.
  BUT: le/la/les stays: J'aime le café → Je n'aime **pas le** café.

PARTITIVE ARTICLES (a preview for Unit 15):
For uncountable things — food, liquids, abstract concepts — French uses du/de la/de l':
  Je mange **du** pain. — I eat (some) bread.
  Je bois **de la** soupe. — I drink (some) soup.
Full lesson on these comes when you learn to order food. For now, just notice them when they appear.

THE GOLDEN RULE: Every French noun has a gender — masculine or feminine. Learn every new noun with its article. Don't just learn *table* — learn **la table**. Don't just learn *livre* — learn **le livre**. Build this habit now and you'll save yourself enormous effort later.`,
        examples: [
            { native: "J'ai un appartement à Paris.", translation: "I have a flat in Paris. (first mention, one of many)" },
            { native: "L'appartement est au troisième étage.", translation: "The flat is on the third floor. (now specified)" },
            { native: "J'aime la musique.", translation: "I like music. (general — le/la/les for general statements)" },
            { native: "Les chats sont indépendants.", translation: "Cats are independent. (general statement)" },
            { native: "Il n'y a pas de jardin.", translation: "There is no garden. (un/une/des → de after negation)" },
            { native: "Je mange du pain le matin.", translation: "I eat (some) bread in the morning. (partitive preview)" },
        ],
        inlineVocab: [
            { word: "un / une / des", translation: "a / an / some (indefinite articles)" },
            { word: "le / la / l' / les", translation: "the (definite articles)" },
            { word: "l'", translation: "the (before vowel or silent h)" },
            { word: "au / aux", translation: "to the / at the (à + le / à + les)" },
            { word: "du / des", translation: "of the / some (de + le / de + les)" },
            { word: "du / de la / de l'", translation: "some (partitive — for uncountable nouns)" },
            { word: "pas de / d'", translation: "no / not any (replaces articles after negation)" },
            { word: "il y a", translation: "there is / there are (never changes form)" },
            { word: "un genre", translation: "a gender (grammatical — masculine or feminine)" },
        ],
        rules: [
            {
                condition: "Referring to something non-specific or first-mentioned",
                result: "Use un (masculine) / une (feminine) / des (plural)",
                examples: [
                    { native: "J'ai un appartement à Paris.", translation: "I have a flat in Paris. (one of many, first mention)" },
                    { native: "Il y a des cafés dans la rue.", translation: "There are (some) cafés in the street." },
                ],
            },
            {
                condition: "Referring to something specific or making a general statement",
                result: "Use le / la / l' / les",
                examples: [
                    { native: "L'appartement est au troisième étage.", translation: "The flat is on the third floor. (now specific)" },
                    { native: "J'aime la musique.", translation: "I like music. (general statement — not 'the music')" },
                    { native: "Les chats sont indépendants.", translation: "Cats are independent. (general truth)" },
                ],
            },
            {
                condition: "Before a word beginning with a vowel or silent h",
                result: "Le / la contract to l'",
                examples: [
                    { native: "l'appartement, l'université, l'hôtel", translation: "the flat, the university, the hotel" },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "The biggest article mistake English speakers make: using no article for general statements. In French, general statements always take le/la/les. 'J'aime le chocolat' — not 'J'aime chocolat'.",
            },
            {
                type: "tip",
                content: "Learn every new noun with its article. Don't just learn 'table' — learn 'la table'. Don't just learn 'livre' — learn 'le livre'. Build this habit now and gender will become automatic.",
            },
            {
                type: "forward-ref",
                content: "Partitive articles (du, de la, de l') — used for quantities of uncountable things like food and drink — get their own full lesson in Block 4.",
                refId: "fr-g-a1-14",
            },
        ],
        fixedPhrases: [
            { native: "Il y a un problème.", translation: "There is a problem.", note: "Il y a never changes form — it works for both singular and plural." },
            { native: "Il n'y a pas de problème.", translation: "There's no problem. / No problem.", note: "Very high-frequency — used to reassure or dismiss a concern." },
            { native: "J'aime beaucoup la France.", translation: "I like France a lot.", note: "General love of a place uses le/la/les — not en or à." },
            { native: "Qu'est-ce que c'est ?", translation: "What is it? / What's that?", note: "The go-to question when you encounter something unknown." },
        ],
        paradigmTable: {
            pronouns: ["masculine", "feminine", "before vowel/h", "plural"],
            verbs: [
                { label: "indefinite", forms: ["un", "une", "un / une", "des"] },
                { label: "definite", forms: ["le", "la", "l'", "les"] },
            ],
        },
    },
]
