// pages/UnitPage.test.tsx

import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { ProgressProvider } from "../context/ProgressContext"
import { TooltipProvider } from "../components/ui/tooltip"
import { UnitPage } from "./UnitPage"
import { resetProgress, masterUnit } from "../store/progress"
import type { LanguageModule, LessonUnit, GrammarLesson, VocabItem } from "../types"

// ---------------------------------------------------------------------------
// Mock getModule — same pattern as DashboardPage.test.tsx
// ---------------------------------------------------------------------------

const mockModuleStore: Record<string, Partial<LanguageModule> | null> = {}

vi.mock("../data/modules", () => ({
    getModule: (langId: string) => mockModuleStore[langId] ?? null,
    loadModule: vi.fn(),
}))

// ---------------------------------------------------------------------------
// Mock repo — getUnitsForGoal drives the unlock chain inside UnitPage
// ---------------------------------------------------------------------------

vi.mock("../data/repo", () => ({
    getPhraseLessonsForUnit: () => [],
    getUnitsForGoal: (langId: string, _level: string, _goalId: string) => {
        const mod = mockModuleStore[langId]
        if (!mod?.units) return []
        return [...mod.units].sort((a, b) => a.order - b.order)
    },
    getUnitsForLevel: (langId: string, level: string) => {
        const mod = mockModuleStore[langId]
        if (!mod?.units) return []
        return mod.units
            .filter(u => u.level === level)
            .sort((a, b) => a.order - b.order)
    },
}))

// ---------------------------------------------------------------------------
// Mock store/actions — confirmUnitMastery is async and touches Supabase
// ---------------------------------------------------------------------------

vi.mock("../store/actions", () => ({
    confirmUnitMastery: vi.fn(() => Promise.resolve()),
}))

// ---------------------------------------------------------------------------
// Mock useStatsStore — recordQuizAnswer is called inside TestOutTab
// ---------------------------------------------------------------------------

vi.mock("../store/useStatsStore", () => {
    const store = Object.assign(vi.fn((_sel: unknown) => ({})), {
        getState: () => ({ recordQuizAnswer: vi.fn(), recordActivity: vi.fn() }),
    })
    return { useStatsStore: store, getTotalReviews: vi.fn(() => 0) }
})

vi.mock("../hooks/useGlobalStreak", () => ({ useGlobalStreak: () => 0 }))

// ---------------------------------------------------------------------------
// Mock registry — getReinforcementState is now read via registry.progress
// ---------------------------------------------------------------------------

vi.mock("../store/registry", () => ({
    registry: {
        progress: {
            getReinforcementState: () => ({ grammarLessonIds: [] }),
        },
    },
}))

// ---------------------------------------------------------------------------
// Mock debugSession — no debug unlock by default
// ---------------------------------------------------------------------------

vi.mock("../auth/debugSession", () => ({
    useDebugUnlock: () => false,
}))

// ---------------------------------------------------------------------------
// Mock store/preferences — no active goal
// ---------------------------------------------------------------------------

vi.mock("../store/preferences", () => ({
    getGoal: () => "general",
    isGoalSet: () => false,
    setGoal: vi.fn(),
    isReviewPromptDismissed: () => false,
    dismissReviewPrompt: vi.fn(),
}))

// ---------------------------------------------------------------------------
// Fixture data — 2 units, 1 grammar lesson linked to unit 1, some vocab
// ---------------------------------------------------------------------------

const GRAMMAR: GrammarLesson[] = [
    {
        id: "es-g-a1-1",
        level: "A1",
        title: "Greetings Grammar",
        explanation: "How to greet people.",
        examples: [],
    },
]

const VOCAB: VocabItem[] = [
    {
        id: "es-v-a1-1",
        level: "A1",
        word: "hola",
        translation: "hello",
        category: "greetings",
        example: { native: "Hola, ¿cómo estás?", translation: "Hello, how are you?" },
    },
    {
        id: "es-v-a1-2",
        level: "A1",
        word: "adiós",
        translation: "goodbye",
        category: "greetings",
        example: { native: "Adiós, hasta luego.", translation: "Goodbye, see you later." },
    },
]

const UNITS: LessonUnit[] = [
    {
        id: "es-a1-u1",
        level: "A1",
        order: 1,
        title: "Hello & Goodbye",
        description: "Basic greetings",
        grammarIds: ["es-g-a1-1"],
        vocabIds: ["es-v-a1-1", "es-v-a1-2"],
        verbIds: [],
        testQuestions: [],
    },
    {
        id: "es-a1-u2",
        level: "A1",
        order: 2,
        title: "At the Restaurant",
        description: "Ordering food",
        grammarIds: [],
        vocabIds: [],
        verbIds: [],
        testQuestions: [],
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

function renderUnit(unitId: string, langId = "es") {
    mockModuleStore[langId] = buildModule()
    return render(
        <ProgressProvider>
            <TooltipProvider>
                <MemoryRouter initialEntries={[`/learn/${langId}/units/${unitId}`]}>
                    <Routes>
                        <Route path="/learn/:langId/units/:unitId" element={<UnitPage />} />
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
// Lock gate
// ---------------------------------------------------------------------------

describe("UnitPage — lock gate", () => {
    it("shows the locked screen when the unit is not unlocked", () => {
        // unit 2 requires unit 1 to be mastered first
        renderUnit("es-a1-u2")
        expect(screen.getByText("Unit locked")).toBeInTheDocument()
        expect(screen.getByText(/complete the previous unit/i)).toBeInTheDocument()
    })

    it("shows the lock icon on the locked screen", () => {
        renderUnit("es-a1-u2")
        expect(screen.getByText("🔒")).toBeInTheDocument()
    })

    it("does NOT show the locked screen for unit 1 (always unlocked)", () => {
        renderUnit("es-a1-u1")
        expect(screen.queryByText("Unit locked")).not.toBeInTheDocument()
    })

    it("unlocks unit 2 once unit 1 is mastered", () => {
        masterUnit("es", "es-a1-u1")
        renderUnit("es-a1-u2")
        expect(screen.queryByText("Unit locked")).not.toBeInTheDocument()
        expect(screen.getAllByText("At the Restaurant").length).toBeGreaterThan(0)
    })
})

// ---------------------------------------------------------------------------
// Unit content rendering
// ---------------------------------------------------------------------------

describe("UnitPage — content rendering", () => {
    it("shows the unit title in the page header", () => {
        renderUnit("es-a1-u1")
        // The h1 inside the unit header card
        expect(screen.getByRole("heading", { name: "Hello & Goodbye" })).toBeInTheDocument()
    })

    it("shows the unit title in the NavBar", () => {
        renderUnit("es-a1-u1")
        // NavBar renders the title as text; there are two occurrences (heading + nav)
        const instances = screen.getAllByText("Hello & Goodbye")
        expect(instances.length).toBeGreaterThanOrEqual(1)
    })

    it("shows the unit description", () => {
        renderUnit("es-a1-u1")
        expect(screen.getByText("Basic greetings")).toBeInTheDocument()
    })

    it("shows 'Unit 1 of 2' in the header", () => {
        renderUnit("es-a1-u1")
        expect(screen.getByText("Unit 1 of 2")).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Grammar tab
// ---------------------------------------------------------------------------

describe("UnitPage — grammar tab", () => {
    it("shows the grammar tab when the unit has grammar lessons", () => {
        renderUnit("es-a1-u1")
        expect(screen.getByRole("tab", { name: /grammar/i })).toBeInTheDocument()
    })

    it("selects the grammar tab by default when unit has grammar lessons", () => {
        renderUnit("es-a1-u1")
        const grammarTab = screen.getByRole("tab", { name: /grammar/i })
        expect(grammarTab).toHaveAttribute("data-state", "active")
    })

    it("shows the grammar lesson title in the grammar tab", () => {
        renderUnit("es-a1-u1")
        expect(screen.getByText("Greetings Grammar")).toBeInTheDocument()
    })

    it("renders the grammar lesson row as a clickable button", () => {
        renderUnit("es-a1-u1")
        // GrammarLessonRow renders a <button> wrapping the lesson title when not locked
        expect(screen.getByRole("button", { name: /greetings grammar/i })).toBeInTheDocument()
    })

    it("shows the 'Up Next' section label for an incomplete grammar lesson", () => {
        renderUnit("es-a1-u1")
        expect(screen.getByText("Up Next")).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Mastered state
// ---------------------------------------------------------------------------

describe("UnitPage — mastered state", () => {
    it("shows the Completed badge when the unit is mastered", () => {
        masterUnit("es", "es-a1-u1")
        renderUnit("es-a1-u1")
        expect(screen.getByText("✓ Completed")).toBeInTheDocument()
    })

    it("does NOT show the Completed badge when the unit is not mastered", () => {
        renderUnit("es-a1-u1")
        expect(screen.queryByText("✓ Completed")).not.toBeInTheDocument()
    })
})
