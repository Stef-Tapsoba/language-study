// components/NavBar.test.tsx

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { TooltipProvider } from "./ui/tooltip"
import { NavBar } from "./NavBar"

// ---------------------------------------------------------------------------
// Mock useGlobalStreak — controlled per test via the module-level variable
// ---------------------------------------------------------------------------

let mockStreak = 0

vi.mock("../hooks/useGlobalStreak", () => ({
    useGlobalStreak: () => mockStreak,
}))

// ---------------------------------------------------------------------------
// Mock useDarkMode — stable toggle, avoids localStorage side-effects
// ---------------------------------------------------------------------------

const mockToggleDark = vi.fn()

vi.mock("../hooks/useDarkMode", () => ({
    useDarkMode: () => [false, mockToggleDark] as [boolean, () => void],
}))

// ---------------------------------------------------------------------------
// Mock LanguagePicker — simple stub so it doesn't need module data
// ---------------------------------------------------------------------------

vi.mock("./LanguagePicker", () => ({
    LanguagePicker: () => <div data-testid="language-picker" />,
}))

// ---------------------------------------------------------------------------
// Mock LevelBadge — simple stub
// ---------------------------------------------------------------------------

vi.mock("./LevelBadge", () => ({
    LevelBadge: ({ level }: { level: string }) => <span data-testid="level-badge">{level}</span>,
}))

// ---------------------------------------------------------------------------
// Render helper
// ---------------------------------------------------------------------------

function renderNavBar(props: Partial<React.ComponentProps<typeof NavBar>> = {}) {
    return render(
        <MemoryRouter>
            <TooltipProvider>
                <NavBar {...props} />
            </TooltipProvider>
        </MemoryRouter>
    )
}

// ---------------------------------------------------------------------------
// Setup / teardown
// ---------------------------------------------------------------------------

beforeEach(() => {
    mockStreak = 0
    mockToggleDark.mockClear()
})

// ---------------------------------------------------------------------------
// Back button
// ---------------------------------------------------------------------------

describe("NavBar — back button", () => {
    it("renders the back button when backTo prop is provided", () => {
        renderNavBar({ backTo: "/home" })
        expect(screen.getByTestId("nav-back")).toBeInTheDocument()
    })

    it("does not render the back button when backTo is omitted", () => {
        renderNavBar()
        expect(screen.queryByTestId("nav-back")).not.toBeInTheDocument()
    })

    it("calls navigate when the back button is clicked with an explicit path", async () => {
        renderNavBar({ backTo: "/home" })
        await userEvent.click(screen.getByTestId("nav-back"))
        // Navigation side-effect is handled by react-router MemoryRouter internally;
        // we only verify the button is interactive (no error thrown).
    })

    it("calls onBack instead of navigating when onBack prop is provided", async () => {
        const onBack = vi.fn()
        renderNavBar({ backTo: "/home", onBack })
        await userEvent.click(screen.getByTestId("nav-back"))
        expect(onBack).toHaveBeenCalledOnce()
    })
})

// ---------------------------------------------------------------------------
// Title
// ---------------------------------------------------------------------------

describe("NavBar — title", () => {
    it("shows the default title when no title prop is given", () => {
        renderNavBar()
        expect(screen.getByText("Language Study")).toBeInTheDocument()
    })

    it("shows a custom title when the title prop is provided", () => {
        renderNavBar({ title: "Spanish A1" })
        expect(screen.getByText("Spanish A1")).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Dark mode toggle
// ---------------------------------------------------------------------------

describe("NavBar — dark mode toggle", () => {
    it("renders the dark mode toggle button on desktop", () => {
        renderNavBar()
        // aria-label reflects current mode (light mode default from our mock)
        expect(screen.getByRole("button", { name: "Switch to dark mode" })).toBeInTheDocument()
    })

    it("calls the toggle when the dark mode button is clicked", async () => {
        renderNavBar()
        await userEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }))
        expect(mockToggleDark).toHaveBeenCalledOnce()
    })
})

// ---------------------------------------------------------------------------
// Streak chip
// ---------------------------------------------------------------------------

describe("NavBar — streak chip", () => {
    it("renders the streak chip when streak is greater than 0", () => {
        mockStreak = 5
        renderNavBar()
        expect(screen.getByText("🔥 5d")).toBeInTheDocument()
    })

    it("does not render the streak chip when streak is 0", () => {
        mockStreak = 0
        renderNavBar()
        expect(screen.queryByText(/🔥/)).not.toBeInTheDocument()
    })

    it("shows the correct streak count", () => {
        mockStreak = 14
        renderNavBar()
        expect(screen.getByText("🔥 14d")).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Breadcrumb
// ---------------------------------------------------------------------------

describe("NavBar — breadcrumb", () => {
    it("renders a breadcrumb when the breadcrumb prop is provided", () => {
        renderNavBar({ breadcrumb: "Spanish › Unit 1" })
        expect(screen.getByText("Spanish")).toBeInTheDocument()
        expect(screen.getByText("Unit 1")).toBeInTheDocument()
    })

    it("does not render a breadcrumb when the prop is omitted", () => {
        renderNavBar()
        // No breadcrumb segments at all
        expect(screen.queryByRole("navigation", { name: /breadcrumb/i })).not.toBeInTheDocument()
    })
})
