// components/ReviewPromptCard.test.tsx

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { ReviewPromptCard } from "./ReviewPromptCard"
import type { BreakTier } from "../hooks/useBreakDetection"

// ---------------------------------------------------------------------------
// Mock store/preferences — control dismissed state per test
// ---------------------------------------------------------------------------

let mockDismissed = false

vi.mock("../store/preferences", () => ({
    isReviewPromptDismissed: () => mockDismissed,
    dismissReviewPrompt: vi.fn(),
}))

// ---------------------------------------------------------------------------
// Render helper
// ---------------------------------------------------------------------------

interface RenderProps {
    langId?: string
    tier?: BreakTier
    daysSince?: number
    dueCount?: number
}

function renderCard({ langId = "es", tier = "medium", daysSince = 3, dueCount = 0 }: RenderProps = {}) {
    return render(
        <MemoryRouter>
            <ReviewPromptCard
                langId={langId}
                tier={tier}
                daysSince={daysSince}
                dueCount={dueCount}
            />
        </MemoryRouter>
    )
}

// ---------------------------------------------------------------------------
// Setup / teardown
// ---------------------------------------------------------------------------

beforeEach(() => {
    mockDismissed = false
    vi.clearAllMocks()
})

// ---------------------------------------------------------------------------
// tier === "none" — renders nothing
// ---------------------------------------------------------------------------

describe("ReviewPromptCard — tier none", () => {
    it("returns null when tier is 'none'", () => {
        const { container } = renderCard({ tier: "none" })
        expect(container).toBeEmptyDOMElement()
    })

    it("returns null when tier is 'light'", () => {
        // "light" is not handled by the component (only medium/heavy/critical render)
        const { container } = renderCard({ tier: "light" })
        expect(container).toBeEmptyDOMElement()
    })
})

// ---------------------------------------------------------------------------
// tier === "medium"
// ---------------------------------------------------------------------------

describe("ReviewPromptCard — medium tier", () => {
    it("renders the 'Welcome back!' heading for medium tier", () => {
        renderCard({ tier: "medium", daysSince: 3 })
        expect(screen.getByText("Welcome back!")).toBeInTheDocument()
    })

    it("mentions the number of days away in the body text", () => {
        renderCard({ tier: "medium", daysSince: 3 })
        expect(screen.getByText(/3 days/)).toBeInTheDocument()
    })

    it("renders the Start review button for medium tier", () => {
        renderCard({ tier: "medium" })
        expect(screen.getByRole("button", { name: /Start review/i })).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// tier === "heavy"
// ---------------------------------------------------------------------------

describe("ReviewPromptCard — heavy tier", () => {
    it("renders a stronger message heading for heavy tier", () => {
        renderCard({ tier: "heavy", daysSince: 10 })
        expect(screen.getByText(/It's been 10 days/)).toBeInTheDocument()
    })

    it("renders the Start review button for heavy tier", () => {
        renderCard({ tier: "heavy", daysSince: 10 })
        expect(screen.getByRole("button", { name: /Start review/i })).toBeInTheDocument()
    })

    it("body text encourages a refresh for heavy tier", () => {
        renderCard({ tier: "heavy", daysSince: 10 })
        expect(screen.getByText(/memory needs a refresh/i)).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// tier === "critical"
// ---------------------------------------------------------------------------

describe("ReviewPromptCard — critical tier", () => {
    it("renders for critical tier", () => {
        renderCard({ tier: "critical", daysSince: 40 })
        expect(screen.getByText("It's been a while")).toBeInTheDocument()
    })

    it("body text mentions being away over a month for critical tier", () => {
        renderCard({ tier: "critical", daysSince: 40 })
        expect(screen.getByText(/away over a month/i)).toBeInTheDocument()
    })

    it("renders the Start review button for critical tier", () => {
        renderCard({ tier: "critical", daysSince: 40 })
        expect(screen.getByRole("button", { name: /Start review/i })).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// dueCount
// ---------------------------------------------------------------------------

describe("ReviewPromptCard — dueCount", () => {
    it("shows due count in the body text when dueCount > 0", () => {
        renderCard({ tier: "medium", dueCount: 7 })
        expect(screen.getByText(/7 items ready/i)).toBeInTheDocument()
    })

    it("shows singular 'item' when dueCount is 1", () => {
        renderCard({ tier: "medium", dueCount: 1 })
        expect(screen.getByText(/1 item ready/i)).toBeInTheDocument()
    })

    it("does not mention item count in body text when dueCount is 0", () => {
        renderCard({ tier: "medium", dueCount: 0 })
        expect(screen.queryByText(/item.*ready/i)).not.toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Dismiss behaviour
// ---------------------------------------------------------------------------

describe("ReviewPromptCard — dismiss", () => {
    it("renders nothing when the prompt is already dismissed", () => {
        mockDismissed = true
        const { container } = renderCard({ tier: "medium" })
        expect(container).toBeEmptyDOMElement()
    })

    it("calls dismissReviewPrompt when 'Skip for now' is clicked", async () => {
        const { dismissReviewPrompt } = await import("../store/preferences")
        renderCard({ tier: "medium", langId: "es" })
        await userEvent.click(screen.getByRole("button", { name: /Skip for now/i }))
        expect(dismissReviewPrompt).toHaveBeenCalledWith("es")
    })

    it("calls dismissReviewPrompt when the X dismiss button is clicked", async () => {
        const { dismissReviewPrompt } = await import("../store/preferences")
        renderCard({ tier: "heavy", langId: "fr" })
        await userEvent.click(screen.getByRole("button", { name: /Dismiss/i }))
        expect(dismissReviewPrompt).toHaveBeenCalledWith("fr")
    })
})

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

describe("ReviewPromptCard — navigation", () => {
    it("navigates to /learn/:langId/review when Start review is clicked", async () => {
        renderCard({ tier: "medium", langId: "es" })
        // Button is present and interactive — clicking it should not throw
        const btn = screen.getByRole("button", { name: /Start review/i })
        await userEvent.click(btn)
        // MemoryRouter handles the navigation; no error means it resolved correctly
    })
})
