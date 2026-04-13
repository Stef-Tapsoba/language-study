import type { PhraseLesson } from '../../../types'

export const a1PhraseLessons: PhraseLesson[] = [
  // ── fr-pl-a1-1 : U1 Greetings ────────────────────────────────────────────
  {
    id: 'fr-pl-a1-1',
    level: 'A1',
    title: 'Greetings',
    sceneSetter:
      "You've just arrived in Paris and walk into your hotel. The receptionist looks up at you. What do you say?",
    phrases: [
      {
        native: 'Bonjour',
        translation: 'Hello / Good morning',
        context: 'Any time before evening, with anyone — always safe',
      },
      {
        native: 'Bonsoir',
        translation: 'Good evening',
        context: 'After around 6 pm',
      },
      {
        native: 'Salut',
        translation: 'Hi',
        context: 'Friends and people your age — not strangers or formal situations',
      },
      {
        native: 'Bonjour Madame',
        translation: 'Hello (to a woman)',
        context: 'Adding Madame is more polite and very French',
      },
      {
        native: 'Bonjour Monsieur',
        translation: 'Hello (to a man)',
        context: 'Perfectly natural — expected in shops and restaurants',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Bonjour !', translation: 'Hello!' },
      { speaker: '', native: '— Bonjour Monsieur, bienvenue.', translation: 'Hello sir, welcome.' },
      { speaker: '', native: '— Merci !', translation: 'Thank you!' },
    ],
    practiceQuestion: {
      question: 'Which phrase would you use when walking into a bakery at 9 am?',
      options: ['Salut', 'Bonsoir', 'Bonjour', 'Bonjour Madame'],
          correctIndex: 2,
    },
    speakAloud:
      'You walk into a café at 9 am. The server looks up. Greet them — try adding Madame or Monsieur.',
  },

  // ── fr-pl-a1-2 : U1 Politeness essentials ────────────────────────────────
  {
    id: 'fr-pl-a1-2',
    level: 'A1',
    title: 'Politeness essentials',
    sceneSetter:
      "You need to get a stranger's attention on the street. You want to ask where the nearest café is. How do you start?",
    phrases: [
      {
        native: 'Excusez-moi',
        translation: 'Excuse me',
        context: 'Getting someone\'s attention, or squeezing past someone — formal',
      },
      {
        native: 'Pardon',
        translation: 'Sorry / Excuse me',
        context: 'Bumping into someone, or a softer way to get attention',
      },
      {
        native: "S'il vous plaît",
        translation: 'Please',
        context: "With strangers, shopkeepers, waiters — any adult you don't know",
      },
      {
        native: 'Merci',
        translation: 'Thank you',
        context: 'Always. Every time.',
      },
      {
        native: 'Merci beaucoup',
        translation: 'Thank you very much',
        context: 'When you really mean it',
      },
      {
        native: 'De rien',
        translation: "You're welcome",
        context: 'The natural response to merci',
      },
      {
        native: 'Je ne comprends pas',
        translation: "I don't understand",
        context: 'Your survival phrase — use it freely, no one will judge you',
      },
    ],
    miniDialogue: [
      { speaker: '', native: "— Excusez-moi, s'il vous plaît !", translation: 'Excuse me, please!' },
      { speaker: '', native: '— Oui ?', translation: 'Yes?' },
      { speaker: '', native: '— Où est le café ?', translation: 'Where is the café?' },
      { speaker: '', native: "— Là-bas, à droite.", translation: 'Over there, on the right.' },
      { speaker: '', native: '— Merci beaucoup !', translation: 'Thank you very much!' },
      { speaker: '', native: '— De rien.', translation: "You're welcome." },
    ],
    practiceQuestion: {
      question: 'You bump into someone in a supermarket aisle. What do you say?',
      options: ['Merci', 'De rien', 'Pardon', "S'il vous plaît"],
          correctIndex: 2,
    },
    speakAloud:
      "A stranger has just given you directions. Thank them warmly, then say you're welcome when they thank you back. Use merci beaucoup and de rien.",
  },

  // ── fr-pl-a1-3 : U1 Saying goodbye ──────────────────────────────────────
  {
    id: 'fr-pl-a1-3',
    level: 'A1',
    title: 'Saying goodbye',
    sceneSetter:
      "You're leaving the café. You had a great coffee. The server smiles and says goodbye. What do you say back?",
    phrases: [
      {
        native: 'Au revoir',
        translation: 'Goodbye',
        context: 'Standard, always appropriate',
      },
      {
        native: 'À bientôt',
        translation: 'See you soon',
        context: 'When you expect to see the person again',
      },
      {
        native: 'À demain',
        translation: 'See you tomorrow',
        context: 'Exactly what it says — use it with colleagues, neighbours',
      },
      {
        native: 'À tout à l\'heure',
        translation: 'See you in a bit',
        context: "When you'll see them later the same day",
      },
      {
        native: 'Bonne journée',
        translation: 'Have a good day',
        context: 'Leaving a shop, ending a call — very common',
      },
      {
        native: 'Bonne soirée',
        translation: 'Have a good evening',
        context: 'Same, but after 6 pm',
      },
      {
        native: 'Salut',
        translation: 'Bye',
        context: 'Informal — same word as Hi',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Au revoir, bonne journée !', translation: 'Goodbye, have a good day!' },
      { speaker: '', native: '— Merci, vous aussi !', translation: 'Thank you, you too!' },
      { speaker: '', native: '— À bientôt !', translation: 'See you soon!' },
    ],
    practiceQuestion: {
      question: "It's 8 pm and you're leaving a restaurant. What do you say to the host?",
      options: ['Bonne journée', 'À demain', 'Bonne soirée, au revoir !', 'Salut'],
      correctIndex: 2,
    },
    speakAloud:
      "It's 7 pm, you're leaving a restaurant. Say goodbye to the server — use at least two farewell phrases back to back.",
  },

  // ── fr-pl-a1-4 : U2 My name (je m'appelle) ───────────────────────────────
  {
    id: 'fr-pl-a1-4',
    level: 'A1',
    title: 'My name',
    sceneSetter:
      "You're at a language exchange evening in Paris. Someone walks over, smiles, and asks: \"Comment tu t'appelles ?\" What do you say?",
    phrases: [
      {
        native: 'Je m\'appelle Marie.',
        translation: 'My name is Marie.',
        context: 'The most natural way — use this first',
      },
      {
        native: 'Mon prénom est Marie.',
        translation: 'My first name is Marie.',
        context: 'More formal, or when spelling it out',
      },
      {
        native: 'Je suis Marie.',
        translation: "I'm Marie.",
        context: 'Casual, used in context when your name is already half-known',
      },
      {
        native: 'Et toi ?',
        translation: 'And you?',
        context: 'After introducing yourself — keeps the conversation going',
      },
    ],
    miniDialogue: [
      { speaker: '', native: "— Comment tu t'appelles ?", translation: "What's your name?" },
      { speaker: '', native: "— Je m'appelle Sophie. Et toi ?", translation: 'My name is Sophie. And you?' },
      { speaker: '', native: "— Moi, c'est Lucas.", translation: "Me, I'm Lucas." },
    ],
    practiceQuestion: {
      question: 'Someone asks "Comment tu t\'appelles ?" — which is the most natural reply?',
      options: ['Bonjour, je suis français.', "Je m'appelle Thomas.", 'Merci beaucoup.', 'Je viens de Paris.'],
      correctIndex: 1,
    },
    speakAloud:
      "Introduce yourself: say your name using je m'appelle, then hand it back to the other person with Et toi ?",
  },

  // ── fr-pl-a1-5 : U2 Where I'm from / nationality ─────────────────────────
  {
    id: 'fr-pl-a1-5',
    level: 'A1',
    title: "Where I'm from",
    sceneSetter:
      'The conversation continues. "Tu es d\'où ?" they ask. You want to say where you\'re from and what nationality you are.',
    phrases: [
      {
        native: 'Je suis de Londres.',
        translation: "I'm from London.",
        context: 'City — always works',
      },
      {
        native: 'Je viens de Londres.',
        translation: 'I come from London.',
        context: 'Same meaning, equally natural',
      },
      {
        native: 'Je suis anglais.',
        translation: "I'm English. (male speaker)",
        context: 'Nationality — use with être',
      },
      {
        native: 'Je suis anglaise.',
        translation: "I'm English. (female speaker)",
        context: "Female form adds -e — we'll explain the pattern in Unit 6",
      },
      {
        native: "J'habite à Paris.",
        translation: 'I live in Paris.',
        context: 'Where you live now — may be different from where you\'re from',
      },
    ],
    miniDialogue: [
      { speaker: '', native: "— Tu es d'où ?", translation: 'Where are you from?' },
      { speaker: '', native: "— Je suis de New York. Je suis américaine. Et toi ?", translation: "I'm from New York. I'm American. And you?" },
      { speaker: '', native: '— Moi, je suis de Lyon. Je suis français.', translation: "Me, I'm from Lyon. I'm French." },
      { speaker: '', native: '— Ah, tu parles très bien anglais !', translation: 'Oh, you speak English very well!' },
    ],
    practiceQuestion: {
      question: "You're female, from Madrid. How do you introduce your origin?",
      options: [
        "Je m'appelle Madrid.",
        'Je suis espagnol.',
        'Je suis de Madrid. Je suis espagnole.',
        "J'habite espagnole.",
      ],
          correctIndex: 2,
    },
    speakAloud:
      "Say where you're from, your nationality, and where you live now. Three sentences — use je suis de, je suis [nationality], and j'habite à.",
  },

  // ── fr-pl-a1-6 : U3 Numbers 1–30 ─────────────────────────────────────────
  {
    id: 'fr-pl-a1-6',
    level: 'A1',
    title: 'Numbers 1–30',
    sceneSetter:
      "You're filling in a form at the French consulate. The clerk asks: \"Quel est votre âge ?\" You need a number.",
    phrases: [
      { native: 'un / une', translation: '1', context: 'uh / oon — masculine / feminine' },
      { native: 'deux', translation: '2', context: 'duh' },
      { native: 'trois', translation: '3', context: 'trwah' },
      { native: 'quatre', translation: '4', context: 'KAT-ruh' },
      { native: 'cinq', translation: '5', context: 'sank' },
      { native: 'six', translation: '6', context: 'sees' },
      { native: 'sept', translation: '7', context: 'set' },
      { native: 'huit', translation: '8', context: 'weet' },
      { native: 'neuf', translation: '9', context: 'nuhf' },
      { native: 'dix', translation: '10', context: 'dees' },
      { native: 'onze', translation: '11', context: 'onz' },
      { native: 'douze', translation: '12', context: 'dooz' },
      { native: 'treize', translation: '13', context: 'trez' },
      { native: 'quatorze', translation: '14', context: 'ka-TORZ' },
      { native: 'quinze', translation: '15', context: 'kanz' },
      { native: 'seize', translation: '16', context: 'sez' },
      { native: 'dix-sept', translation: '17', context: 'dee-SET — dix (10) + sept' },
      { native: 'dix-huit', translation: '18', context: 'dee-ZWEET — dix (10) + huit' },
      { native: 'dix-neuf', translation: '19', context: 'deez-NUHF — dix (10) + neuf' },
      { native: 'vingt', translation: '20', context: 'van' },
      { native: 'vingt et un', translation: '21', context: 'Uses et before un — all others just hyphenate' },
      { native: 'vingt-deux', translation: '22', context: 'vingt + number' },
      { native: 'trente', translation: '30', context: 'tront' },
    ],
    practiceQuestion: {
      question: 'How do you say 18 in French?',
      options: ['quinze', 'dix-sept', 'dix-huit', 'dix-neuf'],
          correctIndex: 2,
    },
    speakAloud:
      'Count from 1 to 15 out loud. Then say the numbers 17, 22, and 28 — the tricky ones.',
  },

  // ── fr-pl-a1-7 : U3 Age phrases (j'ai X ans) ─────────────────────────────
  {
    id: 'fr-pl-a1-7',
    level: 'A1',
    title: 'Saying your age',
    sceneSetter:
      'At the language exchange, someone asks "Tu as quel âge ?" You want to say you\'re 26. How do you do it?',
    phrases: [
      {
        native: "J'ai 26 ans.",
        translation: 'I am 26 years old.',
        context: 'In French you have an age, not be an age — learn this as a chunk',
      },
      {
        native: 'Tu as quel âge ?',
        translation: 'How old are you?',
        context: 'Informal — use with friends and people your age',
      },
      {
        native: 'Vous avez quel âge ?',
        translation: 'How old are you?',
        context: 'Formal — use with Madame / Monsieur',
      },
      {
        native: 'Il a 30 ans.',
        translation: 'He is 30 years old.',
        context: 'Third person — for talking about someone else',
      },
      {
        native: 'Elle a 22 ans.',
        translation: 'She is 22 years old.',
        context: 'Female third person',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Tu as quel âge ?', translation: 'How old are you?' },
      { speaker: '', native: "— J'ai vingt-huit ans. Et toi ?", translation: "I'm 28. And you?" },
      { speaker: '', native: "— Moi, j'ai trente ans.", translation: "Me, I'm 30." },
      { speaker: '', native: '— Ah, tu es plus vieux que moi !', translation: "Oh, you're older than me!" },
    ],
    practiceQuestion: {
      question: 'How do you say "I am 24 years old" in French?',
      options: [
        'Je suis vingt-quatre.',
        "J'ai vingt-quatre.",
        "J'ai vingt-quatre ans.",
        'Je suis vingt-quatre ans.',
      ],
      correctIndex: 2,
    },
    speakAloud:
      "Say your age. Then say the age of one friend or family member — using il a or elle a.",
  },

  // ── fr-pl-a1-8 : U4 Jobs and professions ────────────────────────────────
  {
    id: 'fr-pl-a1-8',
    level: 'A1',
    title: 'Jobs and professions',
    sceneSetter:
      'The conversation is going well. You\'ve exchanged names and ages. Then comes the inevitable question: "Tu fais quoi dans la vie ?" What do you say?',
    phrases: [
      {
        native: 'Je suis médecin.',
        translation: "I'm a doctor.",
        context: 'No article before professions — just être + job',
      },
      {
        native: 'Je suis professeur.',
        translation: "I'm a teacher.",
        context: 'Je suis + profession — no un/une',
      },
      {
        native: 'Je suis étudiant.',
        translation: "I'm a student. (male)",
        context: 'Male form',
      },
      {
        native: 'Je suis étudiante.',
        translation: "I'm a student. (female)",
        context: 'Female form adds -e',
      },
      {
        native: 'Je travaille dans...',
        translation: 'I work in...',
        context: 'Use with places: un bureau, un hôpital, une école',
      },
      {
        native: 'Je travaille comme...',
        translation: 'I work as...',
        context: 'Use with job titles',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Tu fais quoi dans la vie ?', translation: 'What do you do for a living?' },
      { speaker: '', native: "— Je suis ingénieure. Et toi ?", translation: "I'm an engineer. And you?" },
      { speaker: '', native: "— Moi, je suis étudiant. J'étudie le droit.", translation: "Me, I'm a student. I study law." },
      { speaker: '', native: "— Ah, intéressant ! À quelle université ?", translation: 'Oh, interesting! At which university?' },
    ],
    practiceQuestion: {
      question: "You're male and work as a journalist. How do you say this?",
      options: [
        'Je suis un journaliste.',
        "J'ai journaliste.",
        'Je suis journaliste.',
        'Je travaille journaliste.',
      ],
          correctIndex: 2,
    },
    speakAloud:
      "Say what you do — your job or what you study. Remember: no article. Just je suis + the job.",
  },

  // ── fr-pl-a1-9 : U4 Study and work phrases ──────────────────────────────
  {
    id: 'fr-pl-a1-9',
    level: 'A1',
    title: 'What I study and where I work',
    sceneSetter:
      "Your conversation partner is a student. They want to know what you study. You want to ask where they work part-time.",
    phrases: [
      {
        native: "J'étudie le français.",
        translation: 'I study French.',
        context: 'Academic subjects always take le/la/les in French',
      },
      {
        native: "J'étudie la médecine.",
        translation: 'I study medicine.',
        context: 'La médecine — the definite article is required',
      },
      {
        native: "Je fais des études de droit.",
        translation: "I'm studying law.",
        context: 'More formal: lit. "I\'m doing law studies"',
      },
      {
        native: "Je suis en première année.",
        translation: "I'm in first year.",
        context: 'Or deuxième année, troisième année...',
      },
      {
        native: 'Je travaille dans un hôpital.',
        translation: 'I work in a hospital.',
        context: 'dans un/une + place',
      },
      {
        native: 'Je travaille à temps partiel.',
        translation: 'I work part-time.',
        context: 'Or à temps plein for full-time',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Tu étudies quoi ?', translation: 'What do you study?' },
      { speaker: '', native: "— J'étudie l'architecture. Et toi, tu travailles ?", translation: 'I study architecture. And you, do you work?' },
      { speaker: '', native: '— Oui, je travaille dans un café le week-end.', translation: 'Yes, I work in a café on weekends.' },
      { speaker: '', native: "— C'est bien ! Tu aimes ça ?", translation: "That's good! Do you like it?" },
    ],
    practiceQuestion: {
      question: 'How do you say "I study medicine at university"?',
      options: [
        "Je suis médecine à l'université.",
        "J'ai médecine à l'université.",
        "J'étudie la médecine à l'université.",
        "Je travaille médecine à l'université.",
      ],
      correctIndex: 2,
    },
    speakAloud:
      'Describe what you do in a bit more detail — where you work or study, and one thing about it. Try to use two or three sentences.',
  },

  // ── fr-pl-a1-10 : U5 Family vocabulary ──────────────────────────────────
  {
    id: 'fr-pl-a1-10',
    level: 'A1',
    title: 'Family vocabulary',
    sceneSetter:
      'Someone asks "Tu as des frères et sœurs ?" — Do you have brothers and sisters? You want to describe your family. Here\'s what you need.',
    phrases: [
      { native: 'le père', translation: 'the father', context: 'Nouns always learned with their article' },
      { native: 'la mère', translation: 'the mother', context: '' },
      { native: 'le frère', translation: 'the brother', context: '' },
      { native: 'la sœur', translation: 'the sister', context: '' },
      { native: 'le fils', translation: 'the son', context: 'The final s is silent' },
      { native: 'la fille', translation: 'the daughter', context: 'Also means "girl"' },
      { native: 'le grand-père', translation: 'the grandfather', context: '' },
      { native: 'la grand-mère', translation: 'the grandmother', context: '' },
      { native: "J'ai un frère.", translation: 'I have a brother.', context: 'avoir + family member' },
      { native: "J'ai deux sœurs.", translation: 'I have two sisters.', context: 'Numbers from U3 come in handy here' },
      { native: 'Je suis fils unique.', translation: "I'm an only child. (male)", context: '' },
      { native: 'Je suis fille unique.', translation: "I'm an only child. (female)", context: '' },
      { native: "Je n'ai pas de frères.", translation: "I don't have any brothers.", context: "un/une/des → de after ne...pas" },
    ],
    miniDialogue: [
      { speaker: '', native: '— Tu as des frères et sœurs ?', translation: 'Do you have brothers and sisters?' },
      { speaker: '', native: "— Oui, j'ai un frère et deux sœurs. Et toi ?", translation: 'Yes, I have one brother and two sisters. And you?' },
      { speaker: '', native: '— Non, je suis fils unique.', translation: "No, I'm an only child." },
      { speaker: '', native: '— Vous êtes proches, ta famille et toi ?', translation: 'Are you close, you and your family?' },
      { speaker: '', native: '— Oui, très ! On se voit tous les dimanches.', translation: 'Yes, very! We see each other every Sunday.' },
    ],
    practiceQuestion: {
      question: 'How do you say "I have three brothers"?',
      options: [
        'Je suis trois frères.',
        "J'ai trois frère.",
        "J'ai trois frères.",
        "J'ai de trois frères.",
      ],
      correctIndex: 2,
    },
    speakAloud:
      'Describe your family in two or three sentences — who\'s in it, how many siblings, and whether you\'re close.',
  },

  // ── fr-pl-a1-11 : U5 Talking about family members ───────────────────────
  {
    id: 'fr-pl-a1-11',
    level: 'A1',
    title: 'Talking about family members',
    sceneSetter:
      'You want to say more than just "I have a sister" — you want to say her name, her age, what she does. Here\'s how.',
    phrases: [
      {
        native: 'mon père',
        translation: 'my father',
        context: 'mon = my (masc noun) — the form follows the noun, not the speaker',
      },
      {
        native: 'ma mère',
        translation: 'my mother',
        context: 'ma = my (fem noun)',
      },
      {
        native: 'mes parents',
        translation: 'my parents',
        context: 'mes = my (plural)',
      },
      {
        native: "Mon frère s'appelle Luc.",
        translation: "My brother's name is Luc.",
        context: "s'appelle = reflexive verb from Unit 2",
      },
      {
        native: 'Ma sœur a vingt ans.',
        translation: 'My sister is twenty.',
        context: 'avoir for age — same as j\'ai X ans from Unit 3',
      },
      {
        native: 'Mon frère est médecin.',
        translation: 'My brother is a doctor.',
        context: 'être + profession — no article, same rule as Unit 4',
      },
      {
        native: 'Mes parents sont français.',
        translation: 'My parents are French.',
        context: 'sont = ils/elles form of être',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Tu as des enfants ?', translation: 'Do you have children?' },
      { speaker: '', native: "— Oui, j'ai deux fils. Mon fils aîné a huit ans et mon fils cadet a cinq ans. Et toi ?", translation: 'Yes, I have two sons. My eldest son is eight and my youngest is five. And you?' },
      { speaker: '', native: "— Pas encore ! Je suis trop jeune.", translation: "Not yet! I'm too young." },
    ],
    practiceQuestion: {
      question: "Your friend (female) says her mother is from Lyon. How does she say it?",
      options: [
        'Mon mère est de Lyon.',
        'Ma mère sont de Lyon.',
        'Ma mère est de Lyon.',
        'Sa mère es de Lyon.',
      ],
          correctIndex: 2,
    },
    speakAloud:
      "Pick one family member. Say their name, age, and what they do — three sentences, using mon/ma, il/elle a, and il/elle est.",
  },

  // ── fr-pl-a1-12 : U7 Likes and dislikes ────────────────────────────────
  {
    id: 'fr-pl-a1-12',
    level: 'A1',
    title: 'Likes and dislikes',
    sceneSetter:
      "You're getting to know someone. The small talk has moved past jobs and ages. Now comes the real conversation — what do you actually like?",
    phrases: [
      {
        native: "J'adore...",
        translation: 'I love...',
        context: 'Maximum enthusiasm — ★★★★★',
      },
      {
        native: "J'aime beaucoup...",
        translation: 'I really like...',
        context: '★★★★',
      },
      {
        native: "J'aime...",
        translation: 'I like...',
        context: '★★★',
      },
      {
        native: "J'aime bien...",
        translation: 'I quite like...',
        context: "Careful! In French this is slightly weaker than j'aime — ★★",
      },
      {
        native: "Je n'aime pas...",
        translation: "I don't like...",
        context: 'Neutral dislike',
      },
      {
        native: 'Je déteste...',
        translation: 'I hate...',
        context: 'Maximum dislike',
      },
      {
        native: 'Je préfère...',
        translation: 'I prefer...',
        context: 'Je préfère le thé au café — prefer X to Y',
      },
      {
        native: 'Bof.',
        translation: 'Meh.',
        context: 'Very French — a single-word shrug',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Tu aimes le sport ?', translation: 'Do you like sport?' },
      { speaker: '', native: "— J'adore ça ! J'aime beaucoup le tennis et je fais du vélo le week-end. Et toi ?", translation: 'I love it! I really like tennis and I cycle on weekends. And you?' },
      { speaker: '', native: "— Moi, je n'aime pas beaucoup le sport. Je préfère la musique.", translation: "Me, I don't like sport much. I prefer music." },
      { speaker: '', native: "— Ah oui ? Tu joues d'un instrument ?", translation: 'Oh really? Do you play an instrument?' },
      { speaker: '', native: '— Oui, je joue de la guitare.', translation: 'Yes, I play guitar.' },
    ],
    practiceQuestion: {
      question: 'How do you say "I love travelling but I hate cooking"?',
      options: [
        "J'aime voyager mais je déteste cuisine.",
        "J'adore voyager mais je déteste cuisiner.",
        "J'adore voyage mais je déteste cuisiner.",
        "J'aime bien voyager mais je n'aime pas cuisine.",
      ],
      correctIndex: 1,
    },
    speakAloud:
      "Say three things using the preference scale: one thing you love, one you like, one you hate. Use j'adore, j'aime, and je déteste.",
  },

  // ── fr-pl-a1-13 : U8 Where I live / habiter ─────────────────────────────
  {
    id: 'fr-pl-a1-13',
    level: 'A1',
    title: 'Where I live',
    sceneSetter:
      'Someone asks "Tu habites où ?" — Where do you live? Easy enough. But then they ask "C\'est comment ?" — What\'s it like? Here\'s what you need.',
    phrases: [
      {
        native: "J'habite à Paris.",
        translation: 'I live in Paris.',
        context: 'à + city — always',
      },
      {
        native: "J'habite en France.",
        translation: 'I live in France.',
        context: 'en + feminine country (most ending in -e)',
      },
      {
        native: "J'habite au Canada.",
        translation: 'I live in Canada.',
        context: 'au + masculine country',
      },
      {
        native: "J'habite aux États-Unis.",
        translation: 'I live in the US.',
        context: 'aux + plural countries',
      },
      {
        native: "J'habite en banlieue.",
        translation: 'I live in the suburbs.',
        context: '',
      },
      {
        native: "J'habite à la campagne.",
        translation: 'I live in the countryside.',
        context: '',
      },
      {
        native: "J'habite en centre-ville.",
        translation: 'I live in the city centre.',
        context: '',
      },
      {
        native: 'Je vais bien, merci.',
        translation: "I'm fine, thank you.",
        context: "Aller also means 'to be' in greetings: Comment ça va ? — Ça va bien.",
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Tu habites où exactement ?', translation: 'Where exactly do you live?' },
      { speaker: '', native: "— J'habite à Lyon, dans le centre-ville. Et toi ?", translation: 'I live in Lyon, in the city centre. And you?' },
      { speaker: '', native: "— Moi, j'habite en Belgique, près de Bruxelles. Mais je travaille en France.", translation: 'Me, I live in Belgium, near Brussels. But I work in France.' },
      { speaker: '', native: '— Ah, tu fais la navette ?', translation: 'Oh, you commute?' },
      { speaker: '', native: '— Oui, deux fois par semaine.', translation: 'Yes, twice a week.' },
    ],
    practiceQuestion: {
      question: 'How do you say "I live in Japan"?',
      options: [
        "J'habite à Japon.",
        "J'habite en Japon.",
        "J'habite au Japon.",
        "J'habite aux Japon.",
      ],
      correctIndex: 2,
    },
    speakAloud:
      "Say where you live — city and country — using the right preposition. Then say where you're originally from if it's different.",
  },

  // ── fr-pl-a1-14 : U9 Describing home / il y a ───────────────────────────
  {
    id: 'fr-pl-a1-14',
    level: 'A1',
    title: 'Describing your home',
    sceneSetter:
      'Someone asks "Tu habites dans quel type de logement ?" — What kind of place do you live in? You want to describe your home and what\'s in it.',
    phrases: [
      {
        native: 'un appartement',
        translation: 'a flat / apartment',
        context: 'Most urban French people live in apartments',
      },
      {
        native: 'une maison',
        translation: 'a house',
        context: '',
      },
      {
        native: 'le salon',
        translation: 'the living room',
        context: '',
      },
      {
        native: 'la cuisine',
        translation: 'the kitchen',
        context: '',
      },
      {
        native: 'une chambre',
        translation: 'a bedroom',
        context: '',
      },
      {
        native: 'Il y a un salon.',
        translation: 'There is a living room.',
        context: "il y a = there is / there are — never changes form",
      },
      {
        native: 'Il y a deux chambres.',
        translation: 'There are two bedrooms.',
        context: 'Same phrase for singular and plural',
      },
      {
        native: "Il n'y a pas de jardin.",
        translation: 'There is no garden.',
        context: "Negative: il n'y a pas de + noun",
      },
      {
        native: "Il y a beaucoup de lumière.",
        translation: "There's a lot of light.",
        context: 'Use il y a to describe features',
      },
    ],
    miniDialogue: [
      { speaker: '', native: "— Tu habites dans une maison ou un appartement ?", translation: 'Do you live in a house or a flat?' },
      { speaker: '', native: "— J'habite dans un appartement au troisième étage. Il y a deux chambres, un salon et une petite cuisine.", translation: "I live in a flat on the third floor. There are two bedrooms, a living room and a small kitchen." },
      { speaker: '', native: '— Tu as un balcon ?', translation: 'Do you have a balcony?' },
      { speaker: '', native: "— Oui, et il y a une belle vue sur le parc !", translation: 'Yes, and there\'s a beautiful view of the park!' },
      { speaker: '', native: "— C'est sympa ! C'est grand ?", translation: "That's nice! Is it big?" },
    ],
    practiceQuestion: {
      question: 'How do you say "There are three bedrooms in my house"?',
      options: [
        'Il y a trois chambre dans ma maison.',
        'Il y a trois chambres dans ma maison.',
        'Il est trois chambres dans ma maison.',
        'Il y a des trois chambres dans ma maison.',
      ],
          correctIndex: 1,
    },
    speakAloud:
      "Describe your home: what type it is, how many rooms, and two things about the neighbourhood. Use il y a at least twice.",
  },

  // ── fr-pl-a1-15 : U10 Daily routine verbs ───────────────────────────────
  {
    id: 'fr-pl-a1-15',
    level: 'A1',
    title: 'Daily routine verbs',
    sceneSetter:
      'Your French pen pal asks "Tu te lèves à quelle heure ?" — What time do you get up? You want to describe your whole day. Here are the verbs you need.',
    phrases: [
      {
        native: 'Je me réveille à 7h.',
        translation: 'I wake up at 7.',
        context: 'morning — learn these as complete je phrases first',
      },
      {
        native: 'Je me lève à 7h15.',
        translation: 'I get up at 7:15.',
        context: 'morning',
      },
      {
        native: 'Je me douche.',
        translation: 'I shower.',
        context: 'morning',
      },
      {
        native: 'Je me brosse les dents.',
        translation: 'I brush my teeth.',
        context: 'morning / evening',
      },
      {
        native: "Je m'habille.",
        translation: 'I get dressed.',
        context: 'morning',
      },
      {
        native: 'Je prends mon petit déjeuner.',
        translation: 'I have breakfast.',
        context: 'morning — prendre is irregular, learn as a chunk',
      },
      {
        native: 'Je rentre à la maison.',
        translation: 'I come home.',
        context: 'evening',
      },
      {
        native: 'Je me couche à 23h.',
        translation: 'I go to bed at 11 pm.',
        context: 'evening',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Tu as une routine le matin ?', translation: 'Do you have a morning routine?' },
      { speaker: '', native: "— Oui ! Je me lève à six heures et demie. Je me douche, je m'habille, et je prends un café. Je pars au travail à sept heures et demie.", translation: "Yes! I get up at half six. I shower, get dressed, and have a coffee. I leave for work at half seven." },
      { speaker: '', native: "— C'est tôt ! Moi, je suis plutôt du soir. Je me lève à neuf heures.", translation: "That's early! Me, I'm more of an evening person. I get up at nine." },
    ],
    practiceQuestion: {
      question: 'How do you say "I shower every morning"?',
      options: [
        'Je douche chaque matin.',
        'Je me douche chaque matin.',
        'Je se douche chaque matin.',
        'Je douche moi chaque matin.',
      ],
          correctIndex: 1,
    },
    speakAloud:
      'Describe your morning routine — from waking up to leaving the house. At least four steps. Try to say it without stopping.',
  },

  // ── fr-pl-a1-16 : U11 Telling the time ──────────────────────────────────
  {
    id: 'fr-pl-a1-16',
    level: 'A1',
    title: 'Telling the time',
    sceneSetter:
      'Someone stops you in the street: "Excusez-moi, vous avez l\'heure ?" — Excuse me, do you have the time? You glance at your phone. What do you say?',
    phrases: [
      {
        native: "Quelle heure est-il ?",
        translation: 'What time is it?',
        context: 'Formal',
      },
      {
        native: 'Il est quelle heure ?',
        translation: 'What time is it?',
        context: 'Informal',
      },
      {
        native: "Il est huit heures.",
        translation: "It's eight o'clock.",
        context: 'On the hour — il est + number + heures',
      },
      {
        native: 'Il est huit heures et demie.',
        translation: "It's half past eight.",
        context: 'et demie = and a half',
      },
      {
        native: 'Il est huit heures et quart.',
        translation: "It's quarter past eight.",
        context: 'et quart = and a quarter',
      },
      {
        native: 'Il est huit heures moins le quart.',
        translation: "It's quarter to eight.",
        context: 'moins le quart = minus the quarter',
      },
      {
        native: 'Il est midi.',
        translation: "It's midday / noon.",
        context: "No heures — just midi or minuit",
      },
      {
        native: 'Il est huit heures du matin.',
        translation: "It's 8 am.",
        context: 'du matin / de l\'après-midi / du soir for AM/PM',
      },
    ],
    miniDialogue: [
      { speaker: '', native: "— Excusez-moi, vous avez l'heure ?", translation: 'Excuse me, do you have the time?' },
      { speaker: '', native: '— Oui, il est quinze heures moins le quart.', translation: "Yes, it's quarter to three." },
      { speaker: '', native: '— Pardon ?', translation: 'Sorry?' },
      { speaker: '', native: "— Deux heures et quart de l'après-midi.", translation: 'Quarter past two in the afternoon.' },
      { speaker: '', native: "— Ah merci ! Je suis en retard...", translation: "Oh thanks! I'm late..." },
    ],
    practiceQuestion: {
      question: 'Someone says "Il est dix-neuf heures trente." What time is it?',
      options: ['7:30 am', '7:30 pm', '9:30 pm', '6:30 pm'],
          correctIndex: 1,
    },
    speakAloud:
      "Tell the time right now. Then say what time you wake up and what time you go to bed. Use il est and je me lève / couche à.",
  },

  // ── fr-pl-a1-17 : U15 Ordering food and drink ───────────────────────────
  {
    id: 'fr-pl-a1-17',
    level: 'A1',
    title: 'Ordering food and drink',
    sceneSetter:
      "You walk into a café in Paris. The server looks up. You know what you want. Here's how to order it properly — and what makes the difference between sounding like a tourist and sounding like someone who knows French.",
    phrases: [
      {
        native: 'un café / un thé / un chocolat chaud',
        translation: 'a coffee / a tea / a hot chocolate',
        context: 'The three most-ordered hot drinks. Un café = espresso by default — ask for un café allongé for a longer one.',
      },
      {
        native: "une bière / un verre de vin / un jus d'orange / de l'eau",
        translation: 'a beer / a glass of wine / an orange juice / water',
        context: "de l'eau gazeuse = sparkling, de l'eau plate = still. Always free at a table in France.",
      },
      {
        native: 'un croissant / une tartine / un sandwich / un croque-monsieur',
        translation: 'a croissant / toast with butter and jam / a sandwich / a toasted ham and cheese sandwich',
        context: 'Standard café food. Le plat du jour = dish of the day — always a safe bet at lunch.',
      },
      {
        native: 'Je voudrais un café.',
        translation: "I'd like a coffee.",
        context: 'Always use je voudrais — polite and natural',
      },
      {
        native: "Un café, s'il vous plaît.",
        translation: 'A coffee, please.',
        context: 'Efficient and natural — very common at counters',
      },
      {
        native: 'Vous avez... ?',
        translation: 'Do you have...?',
        context: 'Asking about availability',
      },
      {
        native: 'Et comme boisson ?',
        translation: 'And to drink?',
        context: "The server's question — be ready for it",
      },
      {
        native: "L'addition, s'il vous plaît.",
        translation: 'The bill, please.',
        context: 'At the end of any meal',
      },
      {
        native: "C'était délicieux !",
        translation: 'It was delicious!',
        context: 'Always appreciated by the server',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Bonjour, vous avez choisi ?', translation: 'Hello, have you chosen?' },
      { speaker: '', native: "— Oui, je voudrais le plat du jour, s'il vous plaît.", translation: "Yes, I'd like the dish of the day, please." },
      { speaker: '', native: '— Très bien. Et comme boisson ?', translation: 'Very well. And to drink?' },
      { speaker: '', native: "— De l'eau, s'il vous plaît. Vous avez de l'eau gazeuse ?", translation: 'Water, please. Do you have sparkling water?' },
      { speaker: '', native: "— Bien sûr. Vous désirez autre chose ?", translation: 'Of course. Would you like anything else?' },
      { speaker: '', native: "— Non merci, c'est tout.", translation: "No thank you, that's all." },
    ],
    practiceQuestion: {
      question: 'You want to order a beer politely. What do you say?',
      options: [
        'Je veux de la bière.',
        "Je voudrais de la bière, s'il vous plaît.",
        'Donnez-moi de la bière.',
        'Je prends bière.',
      ],
      correctIndex: 1,
    },
    speakAloud:
      "Order a full café round: a coffee, a croissant, and sparkling water. Be polite throughout. At the end, ask for the bill.",
  },

  // ── fr-pl-a1-18 : U16 Shopping and prices ───────────────────────────────
  {
    id: 'fr-pl-a1-18',
    level: 'A1',
    title: 'Shopping and prices',
    sceneSetter:
      "You're at a market in Lyon. You want to buy some cheese, some bread, and maybe a scarf. Here's everything you need from walking in to walking out.",
    phrases: [
      {
        native: 'Je cherche...',
        translation: "I'm looking for...",
        context: "Je cherche une veste, je cherche la gare... — hugely useful",
      },
      {
        native: 'Vous avez... ?',
        translation: 'Do you have...?',
        context: "Vous avez du comté ? — in a market or deli",
      },
      {
        native: 'C\'est combien ?',
        translation: 'How much is it?',
        context: 'Direct and common — always acceptable',
      },
      {
        native: 'Ça fait combien ?',
        translation: 'How much does that come to?',
        context: 'When buying multiple items',
      },
      {
        native: "C'est trop cher.",
        translation: "It's too expensive.",
        context: 'Polite way to decline',
      },
      {
        native: 'Je prends ça.',
        translation: "I'll take this.",
        context: 'Completing the purchase',
      },
      {
        native: 'Vous acceptez la carte ?',
        translation: 'Do you take card?',
        context: 'Essential question at markets',
      },
      {
        native: 'un kilo de...',
        translation: 'a kilo of...',
        context: 'After quantity expressions always use de — un kilo de tomates',
      },
      {
        native: 'une tranche de...',
        translation: 'a slice of...',
        context: 'une tranche de jambon, une tranche de fromage',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Bonjour ! Vous désirez ?', translation: "Hello! What would you like?" },
      { speaker: '', native: "— Bonjour ! Je voudrais du fromage, s'il vous plaît. Vous avez du comté ?", translation: "Hello! I'd like some cheese, please. Do you have comté?" },
      { speaker: '', native: "— Oui, bien sûr. Combien vous en voulez ?", translation: 'Yes of course. How much would you like?' },
      { speaker: '', native: "— Euh... deux cents grammes, s'il vous plaît.", translation: 'Um... two hundred grams, please.' },
      { speaker: '', native: '— Voilà. Et avec ça ?', translation: 'There you are. Anything else?' },
      { speaker: '', native: '— C\'est combien, ce camembert ?', translation: 'How much is this camembert?' },
      { speaker: '', native: '— Quatre euros cinquante la pièce.', translation: 'Four euros fifty each.' },
    ],
    practiceQuestion: {
      question: 'How do you ask "How much does that come to?"',
      options: [
        'C\'est combien ça coûte ?',
        'Combien vous avez ?',
        'Ça fait combien ?',
        'C\'est quel prix ?',
      ],
          correctIndex: 2,
    },
    speakAloud:
      "You're at a market. Ask for 200g of cheese and find out if they have something else. Use je voudrais, vous avez, and c'est combien.",
  },

  // ── fr-pl-a1-19 : U17 Asking for and giving directions ──────────────────
  {
    id: 'fr-pl-a1-19',
    level: 'A1',
    title: 'Asking for and giving directions',
    sceneSetter:
      "You're in Lyon, trying to find the train station. You've been walking for ten minutes and you think you're lost. You see someone on the street. Here's what you say — and what they'll say back.",
    phrases: [
      {
        native: 'Pardon, excusez-moi !',
        translation: 'Excuse me!',
        context: 'Always start by getting attention politely',
      },
      {
        native: 'Je cherche la gare.',
        translation: "I'm looking for the train station.",
        context: 'je cherche = I\'m looking for — works for anything',
      },
      {
        native: 'Où est la gare, s\'il vous plaît ?',
        translation: 'Where is the train station, please?',
        context: 'Où est... = Where is... — essential question',
      },
      {
        native: 'Je suis perdu(e).',
        translation: "I'm lost.",
        context: '-e for female speakers',
      },
      {
        native: 'tout droit',
        translation: 'straight ahead',
        context: 'Direction you\'ll hear most often',
      },
      {
        native: 'à gauche',
        translation: 'on the left / to the left',
        context: 'Tournez à gauche = turn left',
      },
      {
        native: 'à droite',
        translation: 'on the right / to the right',
        context: 'Tournez à droite = turn right',
      },
      {
        native: "c'est à cinq minutes à pied",
        translation: "it's five minutes on foot",
        context: 'à pied = on foot',
      },
      {
        native: 'Vous pouvez répéter plus lentement ?',
        translation: 'Can you repeat more slowly?',
        context: 'Your most useful survival phrase for directions',
      },
    ],
    miniDialogue: [
      { speaker: '', native: "— Pardon madame, excusez-moi !", translation: 'Excuse me, madam!' },
      { speaker: '', native: "— Je cherche le musée des Beaux-Arts. Vous savez où c'est ?", translation: "I'm looking for the Fine Arts Museum. Do you know where it is?" },
      { speaker: '', native: "— Oui, c'est par là. Vous allez tout droit jusqu'aux feux, vous tournez à gauche, et c'est la deuxième rue à droite. C'est à cinq minutes à pied environ.", translation: "Yes, it's that way. You go straight ahead to the traffic lights, turn left, and it's the second street on the right. It's about five minutes on foot." },
      { speaker: '', native: '— Pardon, vous pouvez répéter plus lentement ?', translation: 'Sorry, can you repeat more slowly?' },
      { speaker: '', native: '— Merci beaucoup !', translation: 'Thank you very much!' },
    ],
    practiceQuestion: {
      question: 'Someone says "Prenez la deuxième rue à gauche." What do you do?',
      options: [
        'Take the first street on the right',
        'Take the second street on the left',
        'Turn left at the second traffic light',
        'Go straight ahead for two streets',
      ],
          correctIndex: 1,
    },
    speakAloud:
      "You're lost. Ask a stranger where the nearest métro station is. Then repeat the directions they give back to confirm you understood.",
  },

  // ── fr-pl-a1-20 : U18 Making plans, dates, and months ───────────────────
  {
    id: 'fr-pl-a1-20',
    level: 'A1',
    title: 'Making plans, dates, and months',
    sceneSetter:
      'Your French friend texts you: "Tu es libre samedi ? On pourrait faire quelque chose." You want to say yes and suggest something.',
    phrases: [
      {
        native: 'Tu es libre samedi ?',
        translation: 'Are you free Saturday?',
        context: 'Starting the invitation',
      },
      {
        native: 'Ça te dit de... ?',
        translation: 'Do you fancy...?',
        context: 'Suggesting an activity — ça te dit d\'aller au cinéma ?',
      },
      {
        native: 'On pourrait...',
        translation: 'We could...',
        context: 'Soft suggestion — on pourrait aller au restaurant',
      },
      {
        native: 'Bonne idée !',
        translation: 'Good idea!',
        context: 'Accepting enthusiastically',
      },
      {
        native: 'Ça marche !',
        translation: 'Works for me! / Sounds good!',
        context: 'Very colloquial — lit. "it walks"',
      },
      {
        native: 'Désolé(e), je ne peux pas.',
        translation: "Sorry, I can't.",
        context: '-e for female speakers',
      },
      {
        native: 'Mon anniversaire, c\'est le quinze août.',
        translation: 'My birthday is the 15th of August.',
        context: 'le + cardinal number + month — premier for 1st, cardinals for all others',
      },
      {
        native: 'janvier, février, mars...',
        translation: 'January, February, March...',
        context: 'No capitals for months in French',
      },
    ],
    miniDialogue: [
      { speaker: '', native: '— Salut ! Tu es libre vendredi soir ?', translation: "Hi! Are you free Friday evening?" },
      { speaker: '', native: "— Vendredi... oui, je crois. Pourquoi ?", translation: "Friday... yes, I think so. Why?" },
      { speaker: '', native: "— Il y a un concert de jazz au Petit Journal. Ça te dit ?", translation: "There's a jazz concert at the Petit Journal. Fancy it?" },
      { speaker: '', native: "— Ah oui, bonne idée ! C'est à quelle heure ?", translation: 'Oh yes, good idea! What time is it?' },
      { speaker: '', native: "— Ça commence à vingt heures trente. On se retrouve devant à vingt heures ?", translation: "It starts at 8:30. Shall we meet outside at 8?" },
      { speaker: '', native: "— Parfait ! À vendredi !", translation: "Perfect! See you Friday!" },
    ],
    practiceQuestion: {
      question: 'Your friend asks if you want to come to dinner. How do you say "Good idea, I\'m in!"?',
      options: [
        "Pourquoi pas, je ne peux pas.",
        "Bonne idée, je suis partant !",
        "C'est dommage, bonne idée.",
        "Avec plaisir, désolé.",
      ],
      correctIndex: 1,
    },
    speakAloud:
      "Invite a friend to do something this weekend. Suggest the activity, a day, and a time to meet. Use ça te dit de..., on se retrouve à..., and one acceptance or refusal phrase.",
  },

  // ── fr-pl-a1-21 : U6 Describing people and things ───────────────────────
  {
    id: 'fr-pl-a1-21',
    level: 'A1',
    title: 'Describing people',
    sceneSetter:
      "Your French friend is about to meet someone important to you — a sibling, a best friend. They ask: elle est comment ? What do you say?",
    phrases: [
      {
        native: 'grand(e) / petit(e) / mince / costaud(e)',
        translation: 'tall / short / slim / stocky',
        context:
          'Add -e for a woman: grande, petite. Costaud is often used as invariable in speech.',
      },
      {
        native: 'beau / belle · mignon / mignonne',
        translation: 'handsome, beautiful · cute',
        context:
          'Beau → belle (feminine). Mignon → mignonne (double-n).',
      },
      {
        native: 'sympa · gentil / gentille · drôle · bavard(e)',
        translation: 'nice · kind · funny · talkative',
        context:
          'Sympa is invariable — same for male and female. Gentil → gentille (double-l).',
      },
      {
        native: 'timide · sérieux / sérieuse · travailleur / travailleuse',
        translation: 'shy · serious · hardworking',
        context:
          '-eux → -euse in feminine: sérieux → sérieuse. -eur → -euse: travailleur → travailleuse.',
      },
      {
        native: 'Il / Elle est comment ?',
        translation: 'What is he / she like?',
        context:
          'The most natural question to ask about someone\'s appearance or personality.',
      },
      {
        native: 'Il / Elle est plutôt... mais aussi...',
        translation: 'He / She is rather... but also...',
        context:
          'Plutôt = rather / quite. Mais aussi = but also. Great for balanced descriptions.',
      },
      {
        native: "Il / Elle a l'air très sympa.",
        translation: 'He / She seems very nice.',
        context:
          "Avoir l'air + adjective = to seem / look like. The adjective agrees with the subject.",
      },
    ],
    miniDialogue: [
      {
        speaker: '',
        native: '— Ta sœur, elle est comment ?',
        translation: "What's your sister like?",
      },
      {
        speaker: '',
        native:
          '— Elle est grande et très sympa. Un peu timide au début, mais elle est super drôle.',
        translation:
          "She's tall and very nice. A bit shy at first, but she's really funny.",
      },
      {
        speaker: '',
        native: '— Elle ressemble à toi ?',
        translation: 'Does she look like you?',
      },
      {
        speaker: '',
        native:
          '— Un peu ! On est grandes toutes les deux, mais elle est plus bavarde que moi.',
        translation:
          "A bit! We're both tall, but she's more talkative than me.",
      },
    ],
    practiceQuestion: {
      question:
        'How do you describe a female friend who is hardworking and funny?',
      options: [
        'Elle est travailleur et drôle.',
        'Elle est travailleuse et drôle.',
        'Elle est travailleuses et drôle.',
        'Elle est travailler et drôle.',
      ],
      correctIndex: 1,
    },
    speakAloud:
      "Describe someone you know well — a friend, sibling, or parent. Give two physical details and two personality traits. Try to include a contrast: il/elle est... mais aussi...",
  },

  // ── fr-pl-a1-22 : U12 Talking about habits and what you do regularly ─────
  {
    id: 'fr-pl-a1-22',
    level: 'A1',
    title: 'Talking about habits',
    sceneSetter:
      "Qu'est-ce que tu fais le week-end ? Someone wants to know about your life outside work or study. Here's how to talk about what you do regularly — and how often.",
    phrases: [
      {
        native: 'toujours · souvent · parfois · rarement · jamais',
        translation: 'always · often · sometimes · rarely · never',
        context:
          'These go directly after the verb: Je mange souvent au restaurant. Je ne sors jamais le lundi.',
      },
      {
        native: 'regarder des séries · écouter de la musique · lire',
        translation: 'watch TV shows · listen to music · read',
        context:
          'All -er verbs except lire. Je regarde souvent des séries le soir.',
      },
      {
        native: 'cuisiner · travailler de chez moi · faire du sport',
        translation: 'cook · work from home · do sport',
        context:
          'Cuisiner and travailler are regular -er. Faire du sport is a fixed phrase — du stays the same.',
      },
      {
        native: 'sortir avec des amis · aller au cinéma · se promener',
        translation: 'go out with friends · go to the cinema · go for a walk',
        context:
          'Sortir and aller are irregular — you will meet them in a later unit. Use them as phrases for now.',
      },
      {
        native: 'Le week-end, je... / En semaine, je...',
        translation: 'At the weekend, I... / During the week, I...',
        context:
          'Use these to frame your routine before adding the activity.',
      },
      {
        native: "Qu'est-ce que tu fais le week-end ?",
        translation: 'What do you do at the weekend?',
        context: "The question you'll hear constantly. Learn it as one chunk.",
      },
    ],
    miniDialogue: [
      {
        speaker: '',
        native: "— Qu'est-ce que tu fais le week-end généralement ?",
        translation: 'What do you usually do at the weekend?',
      },
      {
        speaker: '',
        native:
          "— Le samedi, je fais souvent du sport le matin, et l'après-midi je retrouve des amis. Et le dimanche, je cuisine — j'adore ça.",
        translation:
          "On Saturday I often do sport in the morning, and in the afternoon I meet up with friends. And on Sunday I cook — I love it.",
      },
      {
        speaker: '',
        native: '— Tu regardes des séries aussi ?',
        translation: 'Do you watch TV shows too?',
      },
      {
        speaker: '',
        native: '— Rarement. Je préfère lire le soir. Et toi ?',
        translation: 'Rarely. I prefer to read in the evenings. And you?',
      },
    ],
    practiceQuestion: {
      question:
        "How do you say 'I never watch TV but I often read'?",
      options: [
        "Je ne regarde jamais la télé mais je lis souvent.",
        "Je regarde jamais la télé mais je lis souvent.",
        "Je ne regarde pas jamais la télé mais je lis souvent.",
        "Je jamais regarde la télé mais je lis souvent.",
      ],
      correctIndex: 0,
    },
    speakAloud:
      "Describe your typical weekend. Say what you always do, what you often do, and at least one thing you never do. Use toujours, souvent, and jamais.",
  },
]
