// pages/DashboardPage.test.tsx

import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { ProgressProvider } from "../context/ProgressContext"
import { TooltipProvider } from "../components/ui/tooltip"
import { DashboardPage } from "./DashboardPage"
import { resetProgress, masterUnit } from "../store/progress"
import { setGoal } from "../store/preferences"
import type { LanguageModule, LessonUnit, GrammarLesson, VocabItem, TopicTag } from "../types"

// ---------------------------------------------------------------------------
// Mock getModule — pattern matches CheckpointPage.test.tsx
// ---------------------------------------------------------------------------

const mockModuleStore: Record<string, Partial<LanguageModule> | null> = {}

vi.mock("../data/modules", () => ({
    getModule: (langId: string) => mockModuleStore[langId] ?? null,
    loadModule: vi.fn(),
}))

// ---------------------------------------------------------------------------
// Inline scoring function — mirrors scoreUnitForGoal from goalConfig.ts
// so the repo mock does not need to import the real module.
// ---------------------------------------------------------------------------

const GOAL_TOPICS: Record<string, string[]> = {
    traveller: ["travel", "food", "shopping", "numbers", "greetings"],
    social: ["greetings", "social", "identity", "culture"],
    culture: ["culture", "food", "social", "identity", "nature"],
    general: [],
}

function inlineScore(tags: TopicTag[] | undefined, goalId: string): number {
    if (goalId === "general" || !tags) return 0
    const goalTopics = new Set(GOAL_TOPICS[goalId] ?? [])
    return tags.filter(t => goalTopics.has(t)).length
}

// ---------------------------------------------------------------------------
// Mock repo — getUnitsForLevel and getUnitsForGoal read from our mock module
// ---------------------------------------------------------------------------

vi.mock("../data/repo", () => ({
    getUnitsForLevel: (langId: string, level: string) => {
        const mod = mockModuleStore[langId]
        if (!mod?.units) return []
        return mod.units
            .filter(u => u.level === level)
            .sort((a, b) => a.order - b.order)
            .map(u => ({ ...u }))
    },
    getUnitsForGoal: (langId: string, level: string, goalId: string) => {
        const mod = mockModuleStore[langId]
        if (!mod?.units) return []
        const units = mod.units
            .filter(u => u.level === level)
            .sort((a, b) => a.order - b.order)
            .map(u => ({ ...u }))
        if (goalId === "general") return units
        return [...units].sort((a, b) => {
            const sa = inlineScore(a.topicTags, goalId)
            const sb = inlineScore(b.topicTags, goalId)
            if (sb !== sa) return sb - sa
            return a.order - b.order
        })
    },
}))

// ---------------------------------------------------------------------------
// Mock store/srs — getDueCount returns 0 for all tests
// ---------------------------------------------------------------------------

vi.mock("../store/srs", () => ({
    getDueCount: () => 0,
}))

// ---------------------------------------------------------------------------
// Mock useBreakDetection — no break for all tests
// ---------------------------------------------------------------------------

vi.mock("../hooks/useBreakDetection", () => ({
    useBreakDetection: () => ({ tier: "none", daysSince: 0, lastActivityDate: null }),
}))

// ---------------------------------------------------------------------------
// Mock debugSession — no debug unlock
// ---------------------------------------------------------------------------

vi.mock("../auth/debugSession", () => ({
    useDebugUnlock: () => false,
}))

// ---------------------------------------------------------------------------
// Fixture data — 3 units, minimal grammar/vocab stubs
// ---------------------------------------------------------------------------

const GRAMMAR: GrammarLesson[] = [
    { id: "es-g-a1-1", level: "A1", title: "Greetings Grammar", explanation: "How to greet.", examples: [] },
    { id: "es-g-a1-2", level: "A1", title: "Food Grammar", explanation: "How to order food.", examples: [] },
    { id: "es-g-a1-3", level: "A1", title: "Travel Grammar", explanation: "Getting around.", examples: [] },
]

const VOCAB: VocabItem[] = [
    { id: "es-v-a1-1", level: "A1", word: "hola", translation: "hello", category: "greetings", example: { native: "Hola!", translation: "Hello!" } },
    { id: "es-v-a1-2", level: "A1", word: "comida", translation: "food", category: "food", example: { native: "La comida.", translation: "The food." } },
    { id: "es-v-a1-3", level: "A1", word: "viaje", translation: "trip", category: "travel", example: { native: "El viaje.", translation: "The trip." } },
]

const UNITS: LessonUnit[] = [
    {
        id: "es-a1-u1", level: "A1", order: 1,
        title: "Hello & Goodbye",
        description: "Basic greetings",
        grammarIds: ["es-g-a1-1"], vocabIds: ["es-v-a1-1"], verbIds: [],
        testQuestions: [],
        topicTags: ["greetings", "identity"],
    },
    {
        id: "es-a1-u2", level: "A1", order: 2,
        title: "At the Restaurant",
        description: "Ordering food",
        grammarIds: ["es-g-a1-2"], vocabIds: ["es-v-a1-2"], verbIds: [],
        testQuestions: [],
        topicTags: ["food"],
    },
    {
        id: "es-a1-u3", level: "A1", order: 3,
        title: "Getting Around",
        description: "Travel basics",
        grammarIds: ["es-g-a1-3"], vocabIds: ["es-v-a1-3"], verbIds: [],
        testQuestions: [],
        topicTags: ["travel"],
    },
]

function buildModule(): Partial<LanguageModule> {
    return {
        grammar: GRAMMAR,
        vocab: VOCAB,
        verbs: [],
        units: UNITS,
        placementQuestions: [],
        levelQuestions: [],
        checkpoints: [],
    }
}

// ---------------------------------------------------------------------------
// Render helper
// ---------------------------------------------------------------------------

function renderDashboard(langId = "es") {
    mockModuleStore[langId] = buildModule()
    return render(
        <ProgressProvider>
            <TooltipProvider>
                <MemoryRouter initialEntries={[`/learn/${langId}`]}>
                    <Routes>
                        <Route path="/learn/:langId" element={<DashboardPage />} />
                    </Routes>
                </MemoryRouter>
            </TooltipProvider>
        </ProgressProvider>
    )
}

// ---------------------------------------------------------------------------
// Setup / teardown
// ---------------------------------------------------------------------------

beforeEach(() => {
    resetProgress()
    Object.keys(mockModuleStore).forEach(k => delete mockModuleStore[k])
})

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("DashboardPage — level header", () => {
    it("renders the language flag image", () => {
        renderDashboard()
        const flag = screen.getByAltText("es flag")
        expect(flag).toBeInTheDocument()
    })

    it("renders the level badge with A1", () => {
        renderDashboard()
        expect(screen.getByText("A1")).toBeInTheDocument()
    })
})

describe("DashboardPage — learning path unit rows", () => {
    it("renders all unit titles", () => {
        renderDashboard()
        expect(screen.getByText("Hello & Goodbye")).toBeInTheDocument()
        expect(screen.getByText("At the Restaurant")).toBeInTheDocument()
        expect(screen.getByText("Getting Around")).toBeInTheDocument()
    })

    it("first unit is unlocked and rendered as a link", () => {
        renderDashboard()
        const link = screen.getByRole("link", { name: /Hello & Goodbye/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/learn/es/units/es-a1-u1")
    })

    it("second unit is locked when first unit is not mastered", () => {
        renderDashboard()
        // The second unit title should be present but NOT inside a link
        expect(screen.getByText("At the Restaurant")).toBeInTheDocument()
        const links = screen.getAllByRole("link")
        const secondUnitLink = links.find(l => l.getAttribute("href") === "/learn/es/units/es-a1-u2")
        expect(secondUnitLink).toBeUndefined()
    })

    it("second unit is unlocked when first unit is mastered", () => {
        masterUnit("es", "es-a1-u1")
        renderDashboard()
        const link = screen.getByRole("link", { name: /At the Restaurant/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/learn/es/units/es-a1-u2")
    })
})

describe("DashboardPage — mastered units", () => {
    it("shows a checkmark for mastered units", () => {
        masterUnit("es", "es-a1-u1")
        renderDashboard()
        // The mastered unit badge shows a checkmark instead of the order number
        const badges = screen.getAllByText("✓")
        expect(badges.length).toBeGreaterThanOrEqual(1)
    })
})

describe("DashboardPage — goal-sorted path", () => {
    it("first unit in goal-reordered path is always unlocked", () => {
        // Give u3 a stronger score by adding more matching tags
        const customUnits: LessonUnit[] = [
            { ...UNITS[0], topicTags: ["identity"] },        // score 0 for traveller
            { ...UNITS[1], topicTags: ["food", "shopping"] }, // score 2
            { ...UNITS[2], topicTags: ["travel", "food", "shopping"] }, // score 3
        ]
        mockModuleStore["es"] = { ...buildModule(), units: customUnits }
        setGoal("traveller")

        render(
            <ProgressProvider>
                <TooltipProvider>
                    <MemoryRouter initialEntries={["/learn/es"]}>
                        <Routes>
                            <Route path="/learn/:langId" element={<DashboardPage />} />
                        </Routes>
                    </MemoryRouter>
                </TooltipProvider>
            </ProgressProvider>
        )

        // u3 "Getting Around" should be sorted first (score 3) and be unlocked
        const link = screen.getByRole("link", { name: /Getting Around/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/learn/es/units/es-a1-u3")
    })
})

describe("DashboardPage — 'For you' badge", () => {
    it("shows 'For you' badge on goal-matching unlocked units", () => {
        setGoal("traveller")
        // u1 has topicTag "greetings" which matches traveller -> score > 0
        renderDashboard()
        // The first unit is unlocked and has a matching goal tag
        const badges = screen.getAllByText("For you")
        expect(badges.length).toBeGreaterThanOrEqual(1)
    })

    it("does not show 'For you' badge when goal is 'general'", () => {
        setGoal("general")
        renderDashboard()
        expect(screen.queryByText("For you")).not.toBeInTheDocument()
    })

    it("does not show 'For you' badge on locked units even if they match the goal", () => {
        setGoal("traveller")
        renderDashboard()
        // u2 and u3 are locked (u1 not mastered). They match traveller but should not show badge.
        // Count "For you" badges — only unlocked units (u1) should have it.
        const badges = screen.getAllByText("For you")
        // Only the first (unlocked) unit should show it
        expect(badges).toHaveLength(1)
    })
})
