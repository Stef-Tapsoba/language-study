// pages/CheckpointPage.test.tsx

import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { ProgressProvider } from "../context/ProgressContext"
import { TooltipProvider } from "../components/ui/tooltip"
import { CheckpointPage } from "./CheckpointPage"
import { resetProgress, markCheckpointDone } from "../store/progress"
import type { LanguageModule, Checkpoint } from "../types"

// ---------------------------------------------------------------------------
// Mock getModule so tests can inject fixture checkpoints without loading real
// language data. Pattern matches src/data/repo.unit.test.ts.
// ---------------------------------------------------------------------------

const mockModuleStore: Record<string, Partial<LanguageModule> | null> = {}

vi.mock("../data/modules", () => ({
    getModule: (langId: string) => mockModuleStore[langId] ?? null,
    loadModule: vi.fn(),
}))

// ---------------------------------------------------------------------------
// Fixture
// ---------------------------------------------------------------------------

const CP: Checkpoint = {
    id: "ko-cp-a1-1",
    level: "A1",
    block: 1,
    title: "Block 1 Checkpoint",
    scenario: "You meet someone at a language exchange. Introduce yourself.",
    speakingPrompts: [
        "Say your name and where you are from.",
        "Ask the other person their name.",
        "Find out what they do for work.",
    ],
    type: "speaking",
}

// ---------------------------------------------------------------------------
// Render helper — mounts CheckpointPage at the correct route
// ---------------------------------------------------------------------------

function renderCheckpoint(checkpointId = CP.id, langId = "ko") {
    mockModuleStore[langId] = { checkpoints: [CP] }
    return render(
        <ProgressProvider>
            <TooltipProvider>
                <MemoryRouter initialEntries={[`/learn/${langId}/checkpoints/${checkpointId}`]}>
                    <Routes>
                        <Route
                            path="/learn/:langId/checkpoints/:checkpointId"
                            element={<CheckpointPage />}
                        />
                    </Routes>
                </MemoryRouter>
            </TooltipProvider>
        </ProgressProvider>
    )
}

beforeEach(() => {
    resetProgress()
    Object.keys(mockModuleStore).forEach(k => delete mockModuleStore[k])
})

// ---------------------------------------------------------------------------
// Not-found state
// ---------------------------------------------------------------------------

describe("CheckpointPage — not found", () => {
    it("renders a not-found message when checkpointId does not match any checkpoint", () => {
        mockModuleStore["ko"] = { checkpoints: [CP] }
        render(
            <ProgressProvider><TooltipProvider>
                <MemoryRouter initialEntries={["/learn/ko/checkpoints/nonexistent"]}>
                    <Routes>
                        <Route path="/learn/:langId/checkpoints/:checkpointId" element={<CheckpointPage />} />
                    </Routes>
                </MemoryRouter>
            </TooltipProvider></ProgressProvider>
        )
        expect(screen.getByText("Checkpoint not found.")).toBeInTheDocument()
    })

    it("renders a not-found message when the module has no checkpoints", () => {
        mockModuleStore["ko"] = { checkpoints: [] }
        render(
            <ProgressProvider><TooltipProvider>
                <MemoryRouter initialEntries={["/learn/ko/checkpoints/ko-cp-a1-1"]}>
                    <Routes>
                        <Route path="/learn/:langId/checkpoints/:checkpointId" element={<CheckpointPage />} />
                    </Routes>
                </MemoryRouter>
            </TooltipProvider></ProgressProvider>
        )
        expect(screen.getByText("Checkpoint not found.")).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Renders checkpoint content
// ---------------------------------------------------------------------------

describe("CheckpointPage — content rendering", () => {
    it("renders the checkpoint title in the nav", () => {
        renderCheckpoint()
        expect(screen.getByText(CP.title)).toBeInTheDocument()
    })

    it("renders the scenario text", () => {
        renderCheckpoint()
        expect(screen.getByText(CP.scenario)).toBeInTheDocument()
    })

    it("renders all speaking prompts", () => {
        renderCheckpoint()
        CP.speakingPrompts.forEach(prompt => {
            expect(screen.getByText(prompt)).toBeInTheDocument()
        })
    })

    it("renders the block badge with correct block number", () => {
        renderCheckpoint()
        expect(screen.getByText(`🎯 Block ${CP.block} Checkpoint`)).toBeInTheDocument()
    })

    it("does not show the Complete badge when checkpoint is not done", () => {
        renderCheckpoint()
        expect(screen.queryByText("✓ Complete")).not.toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Not-done flow (idle → confirming → marked done)
// ---------------------------------------------------------------------------

describe("CheckpointPage — not done, primary flow", () => {
    it("shows the practice CTA in idle state", () => {
        renderCheckpoint()
        expect(screen.getByRole("button", { name: /practised.*mark as done/i })).toBeInTheDocument()
    })

    it("clicking the practice CTA transitions to confirming state", async () => {
        renderCheckpoint()
        await act(async () => {
            await userEvent.click(screen.getByRole("button", { name: /practised.*mark as done/i }))
        })
        expect(screen.getByText(/were you able to complete/i)).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /yes.*mark done/i })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /not yet/i })).toBeInTheDocument()
    })

    it("clicking Not yet returns to idle state", async () => {
        renderCheckpoint()
        await act(async () => {
            await userEvent.click(screen.getByRole("button", { name: /practised.*mark as done/i }))
        })
        await act(async () => {
            await userEvent.click(screen.getByRole("button", { name: /not yet/i }))
        })
        expect(screen.getByRole("button", { name: /practised.*mark as done/i })).toBeInTheDocument()
        expect(screen.queryByText(/were you able to complete/i)).not.toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Already-done flow (revisit)
// ---------------------------------------------------------------------------

describe("CheckpointPage — already done, revisit flow", () => {
    beforeEach(() => {
        markCheckpointDone("ko", CP.id)
    })

    it("shows the Complete badge", () => {
        renderCheckpoint()
        expect(screen.getByText("✓ Complete")).toBeInTheDocument()
    })

    it("shows the instruction that it can be practised again", () => {
        renderCheckpoint()
        expect(screen.getByText(/practise again any time/i)).toBeInTheDocument()
    })

    it("shows Practise again and Back to path buttons", () => {
        renderCheckpoint()
        expect(screen.getByRole("button", { name: /practise again/i })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /back to path/i })).toBeInTheDocument()
    })

    it("does not show the primary mark-done CTA", () => {
        renderCheckpoint()
        expect(screen.queryByRole("button", { name: /mark as done/i })).not.toBeInTheDocument()
    })

    it("clicking Practise again shows the confirmation message", async () => {
        renderCheckpoint()
        await act(async () => {
            await userEvent.click(screen.getByRole("button", { name: /practise again/i }))
        })
        expect(screen.getByText(/good practice.*already complete/i)).toBeInTheDocument()
    })

    it("Back to path remains visible after clicking Practise again", async () => {
        renderCheckpoint()
        await act(async () => {
            await userEvent.click(screen.getByRole("button", { name: /practise again/i }))
        })
        expect(screen.getByRole("button", { name: /back to path/i })).toBeInTheDocument()
    })
})
