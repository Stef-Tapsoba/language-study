// a1-japanese-kanji-vocab-additions.ts
// 5 new vocab entries for essential kanji that have no standalone entry.
// The 15 essential kanji taught in ja-a1-u18 (Beginner Kanji) are:
// 日、水、山、本、人、学、生、先、語、上、下、中、大、小、手
// Already have entries: 日(via 日本/日本語), 水(ja-v-a1-60), 本(ja-v-a1-143),
// 学(via 学校/学生), 生(via 学生/先生), 先(via 先生), 語(via 日本語),
// 大(via 大きい/大学), 小(via 小さい), 手(ja-v-a1-83)
// MISSING standalone entries: 山、人、上、下、中
// Append these to the a1Vocab array in a1-japanese-vocab.ts

import { VocabItem } from "../../../types"

export const jaKanjiVocabAdditions: VocabItem[] = [
    {
        id: "ja-v-a1-156",
        level: "A1",
        word: "山",
        romanized: "yama / san",
        translation: "Mountain",
        category: "Kanji",
        example: {
            native: "あの山は高いです。",
            romanized: "Ano yama wa takai desu.",
            translation: "That mountain is tall."
        }
    },
    {
        id: "ja-v-a1-157",
        level: "A1",
        word: "人",
        romanized: "hito / jin / nin",
        translation: "Person / People",
        category: "Kanji",
        example: {
            native: "あの人はだれですか？",
            romanized: "Ano hito wa dare desu ka?",
            translation: "Who is that person?"
        }
    },
    {
        id: "ja-v-a1-158",
        level: "A1",
        word: "上",
        romanized: "ue / jou",
        translation: "Above / Up / On top",
        category: "Kanji",
        example: {
            native: "テーブルの上にあります。",
            romanized: "Teebu ru no ue ni arimasu.",
            translation: "It is on top of the table."
        }
    },
    {
        id: "ja-v-a1-159",
        level: "A1",
        word: "下",
        romanized: "shita / ka",
        translation: "Below / Under / Down",
        category: "Kanji",
        example: {
            native: "いすの下にあります。",
            romanized: "Isu no shita ni arimasu.",
            translation: "It is under the chair."
        }
    },
    {
        id: "ja-v-a1-160",
        level: "A1",
        word: "中",
        romanized: "naka / chuu",
        translation: "Inside / Middle / Among",
        category: "Kanji",
        example: {
            native: "かばんの中にあります。",
            romanized: "Kaban no naka ni arimasu.",
            translation: "It is inside the bag."
        }
    },
]
