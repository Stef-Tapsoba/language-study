// data/goalConfig.ts — User learning goal profiles and tag-to-goal mapping.
//
// User goals are set during onboarding (or changed in profile) and drive the
// Path tab: units whose topicTags overlap with the goal's topic list are
// sorted to the top and shown a "Matches your goal" badge.
//
// Implementation is a static lookup — no ML, no recommendation engine.
// The scored sort is O(n) over units. At Stage 2 this can be replaced with
// a server-side sort if needed.

import type { TopicTag, GoalId } from "../types"

// GoalId is defined in types/index.ts to avoid circular imports.
// Re-export it from here so existing imports of GoalId from goalConfig continue to work.
export type { GoalId }

// ---------------------------------------------------------------------------
// Goal definitions
// ---------------------------------------------------------------------------

export interface GoalProfile {
    id: GoalId
    label: string
    description: string
    icon: string
    /** Topic tags whose presence in a unit boosts it in the Path listing */
    topics: TopicTag[]
}

export const USER_GOALS: Record<GoalId, GoalProfile> = {
    traveller: {
        id: "traveller",
        label: "Travelling",
        description: "I'm visiting or planning to visit a country",
        icon: "✈️",
        topics: ["travel", "food", "shopping", "numbers", "greetings"],
    },
    social: {
        id: "social",
        label: "Making friends",
        description: "I want to connect with native speakers",
        icon: "💬",
        topics: ["greetings", "social", "identity", "culture"],
    },
    culture: {
        id: "culture",
        label: "Culture & media",
        description: "I love the culture, food, and arts",
        icon: "🎭",
        topics: ["culture", "food", "social", "identity", "nature"],
    },
    general: {
        id: "general",
        label: "Full course",
        description: "I want to learn the language properly, step by step",
        icon: "📚",
        topics: [],  // empty = no filtering, natural unit order
    },
}

export const GOAL_LIST: GoalProfile[] = Object.values(USER_GOALS)

// ---------------------------------------------------------------------------
// Unit scoring for goal matching
// ---------------------------------------------------------------------------

/**
 * Returns a 0–n score for how well a unit's topicTags match the goal.
 * Higher = shown earlier in the Path tab.
 * Units without topicTags score 0 (shown last, never hidden).
 */
export function scoreUnitForGoal(unitTopicTags: TopicTag[] | undefined, goalId: GoalId): number {
    if (goalId === "general" || !unitTopicTags) return 0
    const goalTopics = new Set<TopicTag>(USER_GOALS[goalId].topics)
    return unitTopicTags.filter(t => goalTopics.has(t)).length
}
