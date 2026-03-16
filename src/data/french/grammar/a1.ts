// src/data/french/grammar/a1.ts
import { GrammarLesson } from "../../../types"

export const a1Grammar: GrammarLesson[] = [
    {
        id: "fr-g-a1-1",
        level: "A1",
        title: "Subject Pronouns",
        explanation: "French subject pronouns are always required — unlike Spanish, you cannot drop them. They must match the subject in person and number. Note the formal 'vous' is used both for one person (polite) and for plural groups.",
        examples: [
            { native: "Je parle français.", translation: "I speak French." },
            { native: "Tu es étudiant.", translation: "You are a student. (informal)" },
            { native: "Il/Elle travaille ici.", translation: "He/She works here." },
            { native: "Nous habitons à Paris.", translation: "We live in Paris." },
            { native: "Vous êtes professeur.", translation: "You are a teacher. (formal/plural)" },
            { native: "Ils/Elles sont amis.", translation: "They are friends." },
        ]
    },
    {
        id: "fr-g-a1-2",
        level: "A1",
        title: "Être (to be)",
        explanation: "Être is one of the most essential irregular verbs. It is used for identity, origin, profession, and nationality. Unlike Spanish, French has only one verb for 'to be' — être handles all of these uses.",
        examples: [
            { native: "Je suis française.", translation: "I am French." },
            { native: "Tu es étudiant.", translation: "You are a student." },
            { native: "Il est médecin.", translation: "He is a doctor." },
            { native: "Nous sommes fatigués.", translation: "We are tired." },
            { native: "C'est une bonne idée.", translation: "It's a good idea." },
        ]
    },
    {
        id: "fr-g-a1-3",
        level: "A1",
        title: "Definite Articles: le, la, l', les",
        explanation: "French nouns are either masculine or feminine — the definite article must agree. 'Le' is used with masculine nouns, 'la' with feminine nouns. Before any noun starting with a vowel or silent h, both le and la contract to 'l''. The plural for all genders is 'les'.",
        examples: [
            { native: "le livre", translation: "the book (masculine)" },
            { native: "la maison", translation: "the house (feminine)" },
            { native: "l'ami / l'amie", translation: "the friend (vowel → l')" },
            { native: "les enfants", translation: "the children (plural)" },
            { native: "l'hôtel", translation: "the hotel (silent h → l')" },
        ]
    },
    {
        id: "fr-g-a1-4",
        level: "A1",
        title: "Indefinite Articles: un, une, des",
        explanation: "Indefinite articles introduce nouns not yet identified. 'Un' is used with masculine nouns, 'une' with feminine nouns. 'Des' is the plural form for both genders (equivalent to 'some' or just the plural in English). After negation, des becomes de.",
        examples: [
            { native: "un café", translation: "a coffee (masculine)" },
            { native: "une pomme", translation: "an apple (feminine)" },
            { native: "des amis", translation: "some friends (plural)" },
            { native: "Je n'ai pas de voiture.", translation: "I don't have a car. (de after negation)" },
        ]
    },
    {
        id: "fr-g-a1-5",
        level: "A1",
        title: "Present Tense: Regular -er Verbs",
        explanation: "Regular -er verbs are the largest group in French. Remove -er from the infinitive and add the endings: -e, -es, -e, -ons, -ez, -ent. The je/tu/il/elle/ils/elles forms all sound the same — the written endings differ but the pronunciation is identical.",
        examples: [
            { native: "Je parle.", translation: "I speak." },
            { native: "Tu parles.", translation: "You speak." },
            { native: "Il parle.", translation: "He speaks." },
            { native: "Nous parlons.", translation: "We speak." },
            { native: "Vous parlez.", translation: "You speak. (formal/pl.)" },
            { native: "Ils parlent.", translation: "They speak." },
        ]
    },
    {
        id: "fr-g-a1-6",
        level: "A1",
        title: "Avoir (to have)",
        explanation: "Avoir is the second most essential verb in French. It expresses possession, age, and many common states. It is also the auxiliary verb used to form the passé composé for most verbs.",
        examples: [
            { native: "J'ai un chat.", translation: "I have a cat." },
            { native: "Tu as quel âge?", translation: "How old are you? (literally: you have what age?)" },
            { native: "Il a faim.", translation: "He is hungry. (literally: he has hunger)" },
            { native: "Nous avons une voiture.", translation: "We have a car." },
            { native: "Ils ont de la chance.", translation: "They are lucky. (literally: they have luck)" },
        ]
    },
    {
        id: "fr-g-a1-7",
        level: "A1",
        title: "Aller (to go)",
        explanation: "Aller is an essential irregular verb. Its present tense is completely irregular and must be memorised. It is used for physical movement and direction. It is also the building block for the futur proche (near future).",
        examples: [
            { native: "Je vais au marché.", translation: "I'm going to the market." },
            { native: "Tu vas bien?", translation: "Are you well? / Are you going well?" },
            { native: "Elle va à l'école.", translation: "She goes to school." },
            { native: "Nous allons en France.", translation: "We are going to France." },
            { native: "Ils vont au cinéma.", translation: "They are going to the cinema." },
        ]
    },
    {
        id: "fr-g-a1-8",
        level: "A1",
        title: "Faire (to do / to make)",
        explanation: "Faire is one of the most frequent verbs in French and is highly irregular. It appears in many fixed expressions (faire du sport, faire la cuisine, faire les courses). The vous form 'faites' is uniquely irregular — not 'faisez'.",
        examples: [
            { native: "Je fais du sport.", translation: "I do sport." },
            { native: "Tu fais quoi?", translation: "What are you doing?" },
            { native: "Il fait beau aujourd'hui.", translation: "The weather is nice today." },
            { native: "Nous faisons les courses.", translation: "We are doing the shopping." },
            { native: "Vous faites la cuisine?", translation: "Do you cook?" },
        ]
    },
    {
        id: "fr-g-a1-9",
        level: "A1",
        title: "Negation with ne...pas",
        explanation: "To negate a verb in French, wrap it with ne (before the verb) and pas (after it). When the verb starts with a vowel or silent h, ne contracts to n'. In spoken French, the 'ne' is often dropped informally — you will hear 'Je sais pas' rather than 'Je ne sais pas'.",
        examples: [
            { native: "Je ne parle pas anglais.", translation: "I don't speak English." },
            { native: "Il n'est pas là.", translation: "He is not here." },
            { native: "Nous n'avons pas de voiture.", translation: "We don't have a car." },
            { native: "Elle ne fait pas de sport.", translation: "She doesn't do sport." },
            { native: "Tu ne vas pas au marché?", translation: "You're not going to the market?" },
        ]
    },
    {
        id: "fr-g-a1-10",
        level: "A1",
        title: "Question Formation",
        explanation: "There are three ways to ask a question in French. (1) Rising intonation — say a statement with a rising voice: 'Tu parles français?' (2) Est-ce que — add 'est-ce que' before the subject: 'Est-ce que tu parles français?' (3) Inversion — swap subject and verb: 'Parles-tu français?' Inversion is formal; intonation is the most common in spoken French.",
        examples: [
            { native: "Tu parles français?", translation: "Do you speak French? (intonation)" },
            { native: "Est-ce que tu parles français?", translation: "Do you speak French? (est-ce que)" },
            { native: "Parles-tu français?", translation: "Do you speak French? (inversion, formal)" },
            { native: "Où est la gare?", translation: "Where is the train station?" },
            { native: "Qu'est-ce que tu fais?", translation: "What are you doing?" },
        ]
    },
    {
        id: "fr-g-a1-11",
        level: "A1",
        title: "Adjective Agreement",
        explanation: "French adjectives must agree in gender (masculine/feminine) and number (singular/plural) with the noun they describe. Most adjectives add -e for feminine and -s for plural. If the adjective already ends in -e (like 'facile'), the masculine and feminine forms are identical. Some adjectives are irregular.",
        examples: [
            { native: "un grand homme", translation: "a tall man (masc. singular)" },
            { native: "une grande femme", translation: "a tall woman (fem. singular → +e)" },
            { native: "de grands enfants", translation: "tall children (masc. plural → +s)" },
            { native: "une belle maison", translation: "a beautiful house (irregular: beau → belle)" },
            { native: "un livre intéressant", translation: "an interesting book" },
            { native: "une idée intéressante", translation: "an interesting idea (+ e)" },
        ]
    },
    {
        id: "fr-g-a1-12",
        level: "A1",
        title: "Numbers & Telling Time",
        explanation: "French numbers 0–100 follow a regular pattern up to 60, then become compound (soixante-dix = 60+10, quatre-vingts = 4×20, quatre-vingt-dix = 4×20+10). To tell the time, use 'Il est' + the hour. Use 'et demie' for half past, 'et quart' for quarter past, and 'moins le quart' for quarter to.",
        examples: [
            { native: "Il est deux heures.", translation: "It is two o'clock." },
            { native: "Il est trois heures et demie.", translation: "It is half past three." },
            { native: "Il est midi.", translation: "It is noon." },
            { native: "Il est sept heures du matin.", translation: "It is seven in the morning." },
            { native: "J'ai dix-sept ans.", translation: "I am seventeen years old." },
        ]
    },
    {
        id: "fr-g-a1-13",
        level: "A1",
        title: "Le Futur Proche (Near Future)",
        explanation: "The futur proche (near future) expresses actions that are planned or about to happen. It is formed with the present tense of aller + infinitive of any verb. It is far more common than the simple future in everyday conversation, and it is the first future tense you need.",
        examples: [
            { native: "Je vais manger ce soir.", translation: "I'm going to eat tonight." },
            { native: "Tu vas partir bientôt?", translation: "Are you going to leave soon?" },
            { native: "Nous allons visiter Paris.", translation: "We are going to visit Paris." },
            { native: "Il va pleuvoir demain.", translation: "It's going to rain tomorrow." },
            { native: "Elles vont étudier ensemble.", translation: "They are going to study together." },
        ]
    },
    {
        id: "fr-g-a1-14",
        level: "A1",
        title: "Contractions: au, du, aux, des",
        explanation: "When the prepositions à (to/at) and de (of/from) meet the definite articles le and les, they must contract. This is not optional — 'à le' and 'de le' do not exist in French.\n\nà + le → au | à + les → aux\nde + le → du | de + les → des\n\nNote: à la, de la, à l', and de l' do NOT contract — they stay as they are.",
        examples: [
            { native: "Je vais au marché.", translation: "I'm going to the market. (à + le = au)" },
            { native: "Elle parle aux étudiants.", translation: "She is speaking to the students. (à + les = aux)" },
            { native: "C'est le livre du professeur.", translation: "It's the teacher's book. (de + le = du)" },
            { native: "Il vient des États-Unis.", translation: "He comes from the United States. (de + les = des)" },
            { native: "Je vais à la boulangerie.", translation: "I'm going to the bakery. (à + la — no contraction)" },
            { native: "Elle revient de l'école.", translation: "She's coming back from school. (de + l' — no contraction)" },
        ]
    },
    {
        id: "fr-g-a1-15",
        level: "A1",
        title: "Present Tense: Regular -ir Verbs",
        explanation: "Regular -ir verbs are the second major verb group in French. Remove -ir and add: -is, -is, -it, -issons, -issez, -issent. Notice the -iss- that appears in the plural forms — this is the key marker of regular -ir verbs and distinguishes them from irregular -ir verbs like partir or sortir (which do not take -iss-).",
        examples: [
            { native: "Je finis.", translation: "I finish." },
            { native: "Tu choisis.", translation: "You choose." },
            { native: "Elle réussit.", translation: "She succeeds." },
            { native: "Nous finissons.", translation: "We finish. (-iss- in plural)" },
            { native: "Vous choisissez.", translation: "You choose. (-iss- in plural)" },
            { native: "Ils grandissent.", translation: "They grow. (grandir = to grow)" },
        ]
    },
    {
        id: "fr-g-a1-16",
        level: "A1",
        title: "Present Tense: Regular -re Verbs",
        explanation: "Regular -re verbs are the third major verb group. Remove -re and add: -s, -s, (nothing), -ons, -ez, -ent. The il/elle form gets no ending at all — just the bare stem. Common -re verbs include vendre (to sell), attendre (to wait), répondre (to answer), entendre (to hear), perdre (to lose).",
        examples: [
            { native: "Je vends.", translation: "I sell." },
            { native: "Tu attends.", translation: "You wait." },
            { native: "Il répond.", translation: "He answers. (no ending — just the stem)" },
            { native: "Nous entendons.", translation: "We hear." },
            { native: "Vous perdez.", translation: "You lose." },
            { native: "Ils vendent.", translation: "They sell." },
        ]
    },
    {
        id: "fr-g-a1-17",
        level: "A1",
        title: "Likes & Dislikes: aimer, préférer, détester",
        explanation: "To express what you like or dislike, use aimer (to like/love), préférer (to prefer), or détester (to hate/strongly dislike). All three are regular -er verbs in conjugation.\n\nKey rule: when these verbs are followed by a noun, use the definite article (le/la/les) — not the indefinite. This trips up many learners:\n✓ J'aime le café.  ✗ J'aime un café.\n\nTo soften 'aimer', add bien: J'aime bien = I quite like (less intense than J'aime).\nTo ask about preferences, use: Tu aimes...? / Vous aimez...? / Qu'est-ce que tu préfères?",
        examples: [
            { native: "J'aime le français.", translation: "I like French." },
            { native: "Tu aimes le café?", translation: "Do you like coffee?" },
            { native: "Elle n'aime pas le sport.", translation: "She doesn't like sport." },
            { native: "Nous aimons bien ce restaurant.", translation: "We quite like this restaurant." },
            { native: "Je préfère le thé au café.", translation: "I prefer tea to coffee." },
            { native: "Il déteste les légumes.", translation: "He hates vegetables." },
            { native: "Qu'est-ce que tu aimes faire?", translation: "What do you like to do?" },
        ]
    },
    {
        id: "fr-g-a1-18",
        level: "A1",
        title: "French Pronunciation — Key Rules",
        explanation: `French is famously difficult to pronounce because the written and spoken forms are very different. Many letters are silent, vowels have unusual sounds, and words run together in speech. These rules cover the most important patterns.

SILENT FINAL CONSONANTS
Most final consonants in French are silent. This is why most -er verb endings (parle, parles, parlent) sound identical:
  pas, est, beaucoup, vous parlez, ils parlent → final consonant silent
  Exceptions you must memorise: avec (with), chef, parc, fils

THE SILENT E
The letter e at the end of a word is almost always silent:
  table, livre, femme, rouge → final e not pronounced
  But e in the middle of a word is usually pronounced as a schwa (like the 'u' in 'about')

NASAL VOWELS — French has four nasal vowels (sounds made through the nose):
  an/en → like the English 'on' said nasally: France, enfant, manger
  in/ain → like the English 'an' said nasally: vin, main, bien
  on → like the English 'own' said nasally: bon, maison, ton
  un → like the English 'un' said nasally: un, lundi, brun
  When the vowel is followed by mm or nn, or comes before a vowel, it is NOT nasal: bonne, amine

LIAISON — linking words together
When a word ending in a normally silent consonant is followed by a word starting with a vowel, the consonant is pronounced and links to the next word:
  vous_avez (voo-za-vay), les_amis (lay-za-mee), nous_habitons (noo-za-bi-ton)
  This is mandatory in many contexts and completely changes how speech sounds.

ACCENTS
é (e accent aigu) → the closed e sound, like the 'ay' in 'say': café, étudiant
è (e accent grave) → the open e sound, like the 'e' in 'bet': très, après
ê (e circumflex) → similar to è but held slightly longer: être, fête
The accent on â, î, ô, û mostly distinguishes words from each other rather than changing sound significantly.`,
        examples: [
            { native: "ils parlent, vous mangez", translation: "Final -ent and -ez are silent — these sound like 'parl' and 'mang-ay'" },
            { native: "un enfant en France", translation: "Three nasal vowels in a row: un (nasal), en (nasal), an (nasal)" },
            { native: "vous_avez / les_amis", translation: "Liaison: the s in 'vous' and 'les' is pronounced before a vowel" },
            { native: "é → café / è → très", translation: "Accent marks change the vowel sound, not just the spelling" },
            { native: "bonne (bon-ne, not nasal) vs bon (nasal)", translation: "Double n before a vowel breaks the nasal sound" },
        ]
    },
]
