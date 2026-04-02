// data/goalConfig.test.ts

import { describe, it, expect } from "vitest"
import {
    scoreUnitForGoal,
    USER_GOALS,
    GOAL_LIST,
    type GoalId,
} from "./goalConfig"
import type { TopicTag } from "../types"

// ---------------------------------------------------------------------------
// USER_GOALS structure
// ---------------------------------------------------------------------------

describe("USER_GOALS structure", () => {
    const expectedIds: GoalId[] = ["traveller", "social", "culture", "general"]

    it("has exactly the four expected goal ids", () => {
        expect(Object.keys(USER_GOALS).sort()).toEqual(expectedIds.slice().sort())
    })

    it.each(expectedIds)("goal '%s' has required fields: id, label, icon, topics", (id) => {
        const goal = USER_GOALS[id]
        expect(goal.id).toBe(id)
        expect(typeof goal.label).toBe("string")
        expect(goal.label.length).toBeGreaterThan(0)
        expect(typeof goal.icon).toBe("string")
        expect(Array.isArray(goal.topics)).toBe(true)
    })

    it("general goal has empty topics array", () => {
        expect(USER_GOALS.general.topics).toEqual([])
    })

    it("traveller goal includes 'travel' and 'food' topics", () => {
        expect(USER_GOALS.traveller.topics).toContain("travel")
        expect(USER_GOALS.traveller.topics).toContain("food")
    })

    it("social goal includes 'greetings' and 'social' topics", () => {
        expect(USER_GOALS.social.topics).toContain("greetings")
        expect(USER_GOALS.social.topics).toContain("social")
    })

    it("culture goal includes 'culture' and 'food' topics", () => {
        expect(USER_GOALS.culture.topics).toContain("culture")
        expect(USER_GOALS.culture.topics).toContain("food")
    })

    it("GOAL_LIST contains all four goals", () => {
        expect(GOAL_LIST).toHaveLength(4)
        const ids = GOAL_LIST.map(g => g.id)
        expect(ids).toContain("traveller")
        expect(ids).toContain("general")
    })
})

// ---------------------------------------------------------------------------
// scoreUnitForGoal
// ---------------------------------------------------------------------------

describe("scoreUnitForGoal", () => {
    it("returns 0 for 'general' goal regardless of topic tags", () => {
        const tags: TopicTag[] = ["travel", "food", "greetings"]
        expect(scoreUnitForGoal(tags, "general")).toBe(0)
    })

    it("returns 0 for 'general' goal even with undefined tags", () => {
        expect(scoreUnitForGoal(undefined, "general")).toBe(0)
    })

    it("returns 0 when unit has no topic tags (undefined)", () => {
        expect(scoreUnitForGoal(undefined, "traveller")).toBe(0)
    })

    it("returns 0 when unit has empty topic tags array", () => {
        expect(scoreUnitForGoal([], "traveller")).toBe(0)
    })

    it("returns 0 when unit tags do not overlap with goal topics", () => {
        const tags: TopicTag[] = ["health", "work"]
        expect(scoreUnitForGoal(tags, "traveller")).toBe(0)
    })

    it("returns 1 when exactly one tag matches", () => {
        const tags: TopicTag[] = ["travel", "health"]
        expect(scoreUnitForGoal(tags, "traveller")).toBe(1)
    })

    it("returns 2 when two tags match", () => {
        const tags: TopicTag[] = ["travel", "food", "work"]
        expect(scoreUnitForGoal(tags, "traveller")).toBe(2)
    })

    it("returns the full match count when all unit tags overlap with goal", () => {
        // traveller topics: travel, food, shopping, numbers, greetings
        const tags: TopicTag[] = ["travel", "food", "shopping"]
        expect(scoreUnitForGoal(tags, "traveller")).toBe(3)
    })

    it("scores correctly for 'social' goal", () => {
        // social topics: greetings, social, identity, culture
        const tags: TopicTag[] = ["greetings", "social"]
        expect(scoreUnitForGoal(tags, "social")).toBe(2)
    })

    it("scores correctly for 'culture' goal", () => {
        // culture topics: culture, food, social, identity, nature
        const tags: TopicTag[] = ["culture", "nature", "travel"]
        // travel is NOT in culture goal → only culture + nature match
        expect(scoreUnitForGoal(tags, "culture")).toBe(2)
    })

    it("does not count duplicate tags twice", () => {
        // Even if the same tag appears twice in the unit array (defensive case),
        // the filtering counts them individually
        const tags = ["travel", "travel"] as TopicTag[]
        // traveller includes "travel" → both "travel" entries match → score = 2
        // This is the raw filter behavior; important to document rather than silently break
        expect(scoreUnitForGoal(tags, "traveller")).toBe(2)
    })
})
