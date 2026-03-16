// ─────────────────────────────────────────────────────────────────────────────
// A1 COMPLETING GRAMMAR LESSONS — ALL LANGUAGES
//
// Six lessons that close the last gaps identified against the A1 Guide:
//
//   es-g-a1-13  Spanish Pronunciation
//   fr-g-a1-18  French Pronunciation
//   it-g-a1-17  Italian Pronunciation
//   ja-g-a1-16  Japanese Counters
//   ja-g-a1-17  Japanese が vs は
//   ko-g-a1-14  Korean Speech Levels
//
// UNIT WIRING for each lesson is listed at the bottom of the file.
// ─────────────────────────────────────────────────────────────────────────────

import { GrammarLesson } from "../../../types"

export const completingLessons: GrammarLesson[] = [

    // ─────────────────────────────────────────────────────────────────────────
    // SPANISH — Pronunciation
    // Add to: src/data/spanish/grammar/a1.ts (append after es-g-a1-12)
    // Wire into: es-a1-u1 grammarIds — add "es-g-a1-13"
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "es-g-a1-13",
        level: "A1",
        title: "Spanish Pronunciation — Key Rules",
        explanation: `Spanish is one of the most phonetic languages in the world: you read what you write and write what you say. There are very few silent letters. A few rules cover almost every situation.

THE ALPHABET & SPECIAL CHARACTERS
The Spanish alphabet has 27 letters. Three are unique to Spanish:
  ñ (eñe)   — a different sound from n: mañana, señor, niño
  ll         — historically a separate letter; now sounds like y in most regions
  rr         — a strong trilled r: perro (dog) vs pero (but)

KEY PRONUNCIATION RULES

The letter H is always silent: hola, hablar, hotel → the h is never pronounced.

The letters B and V sound identical in Spanish — both like a soft English b: bien, voy.

The letter J sounds like a strong English h: Jorge, jardín, viaje.

G before e or i sounds like the Spanish j (strong h): general, gigante.
G before a, o, u sounds like English g: gato, gordo, agua.

The letter C:
  Before a, o, u → hard k sound: cama, cosa, Cuba
  Before e, i    → in Spain: th sound (cena, ciudad)
                 → in Latin America: s sound (same words)

The letter Z:
  In Spain → th sound: zapato, zona
  In Latin America → s sound: same words

STRESS RULES
Words ending in a vowel, n, or s: stress falls on the second-to-last syllable (casa, hablan, comes).
Words ending in any other consonant: stress falls on the last syllable (hablar, ciudad).
Written accents (á, é, í, ó, ú) always override these rules: café, médico, está.`,
        examples: [
            { native: "hola, hotel, hablar", translation: "H is always silent — never pronounced" },
            { native: "pero (but) vs perro (dog)", translation: "Single r vs double rr — a key distinction" },
            { native: "general, Jorge", translation: "G/J before e/i → strong h sound" },
            { native: "cena (Spain: 'thena' / Latin America: 'sena')", translation: "C before e/i — regional difference" },
            { native: "médico, está, café", translation: "Written accent overrides the default stress rule" },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FRENCH — Pronunciation
    // Add to: src/data/french/grammar/a1.ts (append after fr-g-a1-17)
    // Wire into: fr-a1-u1 grammarIds — add "fr-g-a1-18"
    // ─────────────────────────────────────────────────────────────────────────
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

    // ─────────────────────────────────────────────────────────────────────────
    // ITALIAN — Pronunciation
    // Add to: src/data/italian/grammar/a1.ts (append after it-g-a1-16)
    // Wire into: it-a1-u1 grammarIds — add "it-g-a1-17"
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "it-g-a1-17",
        level: "A1",
        title: "Italian Pronunciation — Key Rules",
        explanation: `Italian is highly phonetic — almost every letter is pronounced and spelling reflects pronunciation closely. The main challenges are the c/g rules before different vowels, double consonants, and stress patterns.

THE C/G RULE — the most important rule in Italian pronunciation

C before a, o, u → hard k sound: cane, cosa, cuore, amico
C before e, i → ch sound (like English 'ch' in 'church'): cena, cinema, piacere
CH (before e, i) → hard k sound: che, chi, perché (the h restores the hard sound)

G before a, o, u → hard g sound: gatto, governo, gusto
G before e, i → soft j sound (like English 's' in 'measure'): gelato, giro, gentile
GH (before e, i) → hard g sound: ghetto, spaghetti (the h restores the hard sound)
GL before i → like the 'lli' in 'million': figlio, aglio, gli
GN → like the 'ny' in 'canyon': gnocchi, bagno, signore

SC before e, i → sh sound: scena, sciare, pesce
SC before a, o, u → sk sound: scarpa, scuola, disco

DOUBLE CONSONANTS
Double consonants are pronounced with noticeably more length than single ones. This distinction changes meaning:
  pala (shovel) vs palla (ball)
  nono (ninth) vs nonno (grandfather)
  casa (house) vs cassa (cash register)

STRESS
Most Italian words are stressed on the second-to-last syllable: par-LA-re, stu-DEN-te, be-LLO.
Some are stressed on the third-to-last: MED-i-co, SIM-pa-ti-co, TE-le-fo-no.
Words with a written accent are always stressed on that syllable: città, caffè, perché.`,
        examples: [
            { native: "cane (KA-ne) / cena (CHA-na)", translation: "C before a = hard k / C before e = ch sound" },
            { native: "perché (per-KE) / che (KE)", translation: "CH before e/i always restores the hard k sound" },
            { native: "gelato (je-LA-to) / gatto (GA-to)", translation: "G before e = soft j / G before a = hard g" },
            { native: "nono (ninth) vs nonno (grandfather)", translation: "Double consonants matter — they change meaning" },
            { native: "MED-i-co / stu-DEN-te / cit-TÀ", translation: "Stress patterns — accent marks show exceptions" },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // JAPANESE — Counters
    // Add to: src/data/japanese/grammar/a1.ts (append after ja-g-a1-15)
    // Wire into: ja-a1-u6 grammarIds — add "ja-g-a1-16"
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "ja-g-a1-16",
        level: "A1",
        title: "Counters: Counting Things in Japanese",
        explanation: `In Japanese, you cannot simply say 'two cats' or 'three cups'. You must use a counter word that matches the type of object. This is one of the most distinctive features of Japanese grammar.

STRUCTURE: Number + Counter + の + Noun (or just Number + Counter before a verb)
  りんごが三つあります。 (There are three apples.)
  コーヒーを一杯ください。(One cup of coffee, please.)

THE FIVE ESSENTIAL A1 COUNTERS:

つ — generic objects (1–9, native Japanese numbers only):
  ひとつ(1) ふたつ(2) みっつ(3) よっつ(4) いつつ(5)
  むっつ(6) ななつ(7) やっつ(8) ここのつ(9)
  Use this when you don't know the right counter — it works for most physical objects.
  りんごを三つ食べました。(I ate three apples.)

人(にん) — people:
  一人(ひとり/hitori) 二人(ふたり/futari) 三人(さんにん) 四人(よにん)...
  Note: 1 and 2 people use native Japanese readings (hitori, futari), not Sino-Japanese.
  家族は四人です。(My family has four people.)

本(ほん) — long thin things (bottles, pens, trees, trains, phone calls):
  一本(いっぽん) 二本(にほん) 三本(さんぼん)
  水を一本ください。(One bottle of water, please.)

枚(まい) — flat thin things (paper, tickets, plates, shirts, photographs):
  一枚(いちまい) 二枚(にまい) 三枚(さんまい)
  チケットを二枚ください。(Two tickets, please.)

杯(はい) — cups and glasses of liquid:
  一杯(いっぱい) 二杯(にはい) 三杯(さんばい)
  コーヒーを一杯飲みました。(I drank one cup of coffee.)

SAFE FALLBACK: When unsure, use つ for objects and 人 for people. Native speakers will understand even if it's not perfect.`,
        examples: [
            { native: "りんごが三つあります。", romanized: "Ringo ga mittsu arimasu.", translation: "There are three apples. (つ = generic objects)" },
            { native: "家族は四人です。", romanized: "Kazoku wa yo-nin desu.", translation: "My family has four people. (人 = people)" },
            { native: "水を一本ください。", romanized: "Mizu wo ippon kudasai.", translation: "One bottle of water, please. (本 = long thin objects)" },
            { native: "チケットを二枚ください。", romanized: "Chiketto wo ni-mai kudasai.", translation: "Two tickets, please. (枚 = flat thin objects)" },
            { native: "コーヒーを一杯飲みました。", romanized: "Koohii wo ippai nomimashita.", translation: "I drank a cup of coffee. (杯 = cups/glasses)" },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // JAPANESE — が vs は
    // Add to: src/data/japanese/grammar/a1.ts (append after ja-g-a1-16)
    // Wire into: ja-a1-u5 grammarIds — add "ja-g-a1-17"
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "ja-g-a1-17",
        level: "A1",
        title: "が vs は — Subject vs Topic",
        explanation: `The difference between は (topic) and が (subject) is one of the most confusing things in Japanese for beginners. Both can appear where English uses the subject, but they carry different meaning.

は (WA) — THE TOPIC PARTICLE
は marks what the sentence is about — the topic. It can introduce something already known, set up a contrast, or signal 'as for X...'.
  わたしは がくせいです。(I am a student.) — 'As for me, I am a student.'
  きょうは さむいです。(Today is cold.) — 'As for today, it's cold.'
  は can also imply contrast: コーヒーは すきです。(I like coffee [but maybe not tea].)

が (GA) — THE SUBJECT PARTICLE
が marks the grammatical subject — the new information, the focus, or the answer to a 'who/what' question.
  だれが きましたか？ → たなかさんが きました。(Who came? → Tanaka came.) — が identifies who.
  なにが おいしいですか？ → すしが おいしいです。(What is delicious? → Sushi is delicious.)
  が is used after question words and to answer them.

PREFERENCE AND ABILITY — が is always used with these patterns:
  〜が すきです (like) / 〜が きらいです (dislike)
  〜が わかります (understand) / 〜が できます (can do)
  コーヒーが すきです。(I like coffee.) — always が, never を or は here.

QUICK GUIDE:
  は → this is what we're talking about (topic, contrast, known info)
  が → this is WHO or WHAT (new info, answering a question, focus)
  Both can translate to English 'I/he/she/it' — context decides which to use.

AT A1: When in doubt, use は for general statements. Use が when answering 'who?' or 'what?', and always use が with すき/きらい/わかる.`,
        examples: [
            { native: "わたしは がくせいです。", romanized: "Watashi wa gakusei desu.", translation: "I am a student. (は = topic, general statement)" },
            { native: "だれが きましたか？ → たなかさんが きました。", romanized: "Dare ga kimashita ka? → Tanaka-san ga kimashita.", translation: "Who came? → Tanaka came. (が = answers 'who')" },
            { native: "コーヒーが すきです。", romanized: "Koohii ga suki desu.", translation: "I like coffee. (が always used with すき)" },
            { native: "きょうは さむいですが、あしたは あついです。", romanized: "Kyou wa samui desu ga, ashita wa atsui desu.", translation: "Today is cold, but tomorrow is hot. (は for contrast)" },
            { native: "なにが おいしいですか？", romanized: "Nani ga oishii desu ka?", translation: "What is delicious? (が with question word)" },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // KOREAN — Speech Levels
    // Add to: src/data/korean/grammar/a1.ts (append after ko-g-a1-13)
    // Wire into: ko-a1-u2 grammarIds — add "ko-g-a1-14"
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: "ko-g-a1-14",
        level: "A1",
        title: "Korean Speech Levels — Why Korean Changes",
        explanation: `Korean has multiple speech levels — different verb endings used depending on your relationship with the person you're speaking to. This is not optional politeness like 'please' in English. It is a grammatical requirement, and using the wrong level is a social error.

WHY SPEECH LEVELS EXIST
Korean society has traditionally placed strong emphasis on social hierarchy based on age, status, and relationship. The language reflects this: how you speak to your boss is grammatically different from how you speak to a friend, and different again from how you speak to a child.

THE THREE LEVELS YOU NEED TO KNOW AT A1:

1. 해요체 (haeyoche) — POLITE INFORMAL → verbs end in ~아요/어요/해요
   This is your default. Use it with:
   • Anyone you've just met
   • Shopkeepers, service staff, strangers
   • People older or more senior than you
   • Teachers, colleagues you don't know well
   This level is safe in almost all everyday situations.
   먹어요 (I eat) / 가요 (I go) / 해요 (I do)

2. 합쇼체 (hapssyoche) — FORMAL POLITE → verbs end in ~습니다/ㅂ니다
   Used in formal situations: presentations, announcements, job interviews, news broadcasts, first meetings in professional contexts. You will hear this in shops and restaurants as well. You should recognise it, but 해요체 is always acceptable as a reply.
   먹습니다 (I eat) / 갑니다 (I go) / 합니다 (I do)

3. 반말 (banmal) — INFORMAL (NO ~요) → bare verb stems
   Used only with close friends of the same age, younger people, or children. Using 반말 with someone you don't know well or someone older than you is rude. Do NOT use 반말 at A1. Learn to recognise it, but stick to 해요체.
   먹어 / 가 / 해

THE RULE AT A1: Always use 해요체. It is polite without being stiff, and it will never offend anyone.

HOW TO SWITCH REGISTERS
You do not switch levels on your own initiative. The more senior or older person invites the change. Common phrases:
  말을 놓아도 돼요. (You can speak informally with me.)
  편하게 말해요. (Speak comfortably.)
Until someone says something like this, stay with 해요체.`,
        examples: [
            { native: "먹어요 / 먹습니다 / 먹어", romanized: "meogeoyo / meogseumnida / meogeo", translation: "I eat — polite informal / formal polite / casual (반말)" },
            { native: "안녕하세요. (formal) / 안녕! (casual)", romanized: "Annyeonghaseyo / Annyeong!", translation: "Hello — level difference visible even in greetings" },
            { native: "감사합니다. (formal) / 고마워요. (polite) / 고마워. (casual)", romanized: "Gamsahamnida / Gomawoyo / Gomawo", translation: "Thank you across three levels" },
            { native: "말을 놓아도 돼요.", romanized: "Mareul noaado dwaeyo.", translation: "You can speak casually with me. (invitation to switch levels)" },
            { native: "저는 학생이에요. (해요체)", romanized: "Jeoneun haksaengieyo.", translation: "I am a student. — 해요체 is always the safe choice" },
        ]
    },
]

// ─────────────────────────────────────────────────────────────────────────────
// UNIT WIRING SUMMARY
// ─────────────────────────────────────────────────────────────────────────────
//
// SPANISH
//   es-a1-u1  (Greetings & First Words)
//     grammarIds: ["es-g-a1-1", "es-g-a1-5"] → ["es-g-a1-1", "es-g-a1-5", "es-g-a1-13"]
//
// FRENCH
//   fr-a1-u1  (Hangul & First Greetings — NOTE: French u1 has grammarIds: [])
//     grammarIds: [] → ["fr-g-a1-18"]
//     (pronunciation belongs at the very start before grammar begins)
//
// ITALIAN
//   it-a1-u1  (Greetings & Basic Phrases)
//     grammarIds: ["it-g-a1-1", "it-g-a1-2"] → ["it-g-a1-1", "it-g-a1-2", "it-g-a1-17"]
//
// JAPANESE
//   ja-a1-u6  (Numbers 1–100)
//     grammarIds: ["ja-g-a1-6"] → ["ja-g-a1-6", "ja-g-a1-16"]
//     (counters are taught alongside numbers — they are number + counter)
//
//   ja-a1-u5  (Greetings & Daily Expressions)
//     grammarIds: ["ja-g-a1-5"] → ["ja-g-a1-5", "ja-g-a1-17"]
//     (が vs は is already implicit in greetings and basic sentences;
//      making it explicit here before particles are taught in u10/u11/u12)
//
// KOREAN
//   ko-a1-u2  (Introductions: X은/는 Y이에요)
//     grammarIds: ["ko-g-a1-2", "ko-g-a1-3"] → ["ko-g-a1-2", "ko-g-a1-3", "ko-g-a1-14"]
//     (speech levels belong in unit 2 alongside greetings because the
//      greetings lesson already shows 감사합니다 vs 고마워요 side by side
//      without explaining why they differ)
