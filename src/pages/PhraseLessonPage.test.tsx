// pages/PhraseLessonPage.test.tsx

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { ProgressProvider } from "../context/ProgressContext"
import { TooltipProvider } from "../components/ui/tooltip"
import { PhraseLessonPage } from "./PhraseLessonPage"
import { resetProgress } from "../store/progress"
import type { LanguageModule, PhraseLesson } from "../types"

// ---------------------------------------------------------------------------
// Mock getModule so tests can inject fixture data without loading real data
// ---------------------------------------------------------------------------

const mockModuleStore: Record<string, Partial<LanguageModule> | null> = {}

vi.mock("../data/modules", () => ({
    getModule: (langId: string) => mockModuleStore[langId] ?? null,
    loadModule: vi.fn(),
}))

// SpeakButton uses window.speechSynthesis — mock it
vi.mock("../components/SpeakButton", () => ({
    SpeakButton: () => null,
}))

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const LESSON: PhraseLesson = {
    id: "ko-pl-a1-1",
    level: "A1",
    title: "Greetings",
    sceneSetter: "You walk into a convenience store in Seoul.",
    phrases: [
        { native: "안녕하세요", translation: "Hello (polite)", context: "Use with strangers.", pronunciation: "an-nyeong-ha-se-yo" },
        { native: "안녕", translation: "Hi (casual)", context: "Friends only." },
    ],
    miniDialogue: [
        { speaker: "A", native: "안녕하세요!" },
        { speaker: "B", native: "안녕하세요, 어서 오세요." },
    ],
    practiceQuestion: {
        question: "You meet your friend's parents. Which greeting?",
        options: ["안녕", "안녕하세요", "Either is fine"],
        correctIndex: 1,
    },
    speakAloud: "Walk into a café and greet the barista.",
}

// ---------------------------------------------------------------------------
// Render helper
// ---------------------------------------------------------------------------

function renderPage(phraseLessonId = LESSON.id, langId = "ko") {
    mockModuleStore[langId] = { phraseLessons: [LESSON] }
    return render(
        <ProgressProvider>
            <TooltipProvider>
                <MemoryRouter initialEntries={[`/learn/${langId}/phrases/${phraseLessonId}`]}>
                    <Routes>
                        <Route
                            path="/learn/:langId/phrases/:phraseLessonId"
                            element={<PhraseLessonPage />}
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

describe("PhraseLessonPage — not found", () => {
    it("renders not-found when lesson id does not match", () => {
        mockModuleStore["ko"] = { phraseLessons: [LESSON] }
        render(
            <ProgressProvider><TooltipProvider>
                <MemoryRouter initialEntries={["/learn/ko/phrases/nonexistent"]}>
                    <Routes>
                        <Route path="/learn/:langId/phrases/:phraseLessonId" element={<PhraseLessonPage />} />
                    </Routes>
                </MemoryRouter>
            </TooltipProvider></ProgressProvider>
        )
        expect(screen.getByText("Lesson not found")).toBeInTheDocument()
    })

    it("renders not-found when module has no phraseLessons", () => {
        mockModuleStore["ko"] = {}
        render(
            <ProgressProvider><TooltipProvider>
                <MemoryRouter initialEntries={["/learn/ko/phrases/ko-pl-a1-1"]}>
                    <Routes>
                        <Route path="/learn/:langId/phrases/:phraseLessonId" element={<PhraseLessonPage />} />
                    </Routes>
                </MemoryRouter>
            </TooltipProvider></ProgressProvider>
        )
        expect(screen.getByText("Lesson not found")).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Content rendering
// ---------------------------------------------------------------------------

describe("PhraseLessonPage — content rendering", () => {
    it("renders the lesson title", () => {
        renderPage()
        expect(screen.getByRole("heading", { level: 1, name: LESSON.title })).toBeInTheDocument()
    })

    it("renders the scene setter", () => {
        renderPage()
        expect(screen.getByText(LESSON.sceneSetter ?? "")).toBeInTheDocument()
    })

    it("renders all phrase native forms", () => {
        renderPage()
        for (const phrase of LESSON.phrases) {
            expect(screen.getAllByText(phrase.native).length).toBeGreaterThan(0)
        }
    })

    it("renders phrase translations and context", () => {
        renderPage()
        expect(screen.getByText("Hello (polite)")).toBeInTheDocument()
        expect(screen.getByText("Use with strangers.")).toBeInTheDocument()
    })

    it("renders mini-dialogue lines", () => {
        renderPage()
        expect(screen.getByText("안녕하세요!")).toBeInTheDocument()
        expect(screen.getByText("안녕하세요, 어서 오세요.")).toBeInTheDocument()
    })

    it("renders the practice question and all options", () => {
        renderPage()
        expect(screen.getByText(LESSON.practiceQuestion.question)).toBeInTheDocument()
        // options may share text with phrases/dialogue, so check at least one instance each
        for (const option of LESSON.practiceQuestion.options) {
            expect(screen.getAllByText(option).length).toBeGreaterThan(0)
        }
    })

    it("renders the speak-aloud prompt", () => {
        renderPage()
        expect(screen.getByText(LESSON.speakAloud ?? "")).toBeInTheDocument()
    })
})

// ---------------------------------------------------------------------------
// Practice question interaction
// ---------------------------------------------------------------------------

describe("PhraseLessonPage — practice question", () => {
    it("shows correct answer highlight after selecting the right option", async () => {
        const user = userEvent.setup()
        renderPage()
        const correctBtn = screen.getByRole("button", { name: /안녕하세요/ })
        await user.click(correctBtn)
        expect(screen.getByText("✓")).toBeInTheDocument()
        // All buttons disabled after answering
        for (const btn of screen.getAllByRole("button", { name: /안녕/ })) {
            expect(btn).toBeDisabled()
        }
    })

    it("shows wrong answer highlight after selecting an incorrect option", async () => {
        const user = userEvent.setup()
        renderPage()
        await user.click(screen.getByRole("button", { name: "안녕" }))
        expect(screen.getByText("✗")).toBeInTheDocument()
    })

    it("cannot change answer once answered", async () => {
        const user = userEvent.setup()
        renderPage()
        await user.click(screen.getByRole("button", { name: "안녕" }))
        const allAnswerBtns = screen.getAllByRole("button").filter(b => LESSON.practiceQuestion.options.includes(b.textContent?.replaceAll(/[✓✗]/g, "").trim() ?? ""))
        for (const btn of allAnswerBtns) {
            expect(btn).toBeDisabled()
        }
    })
})

// ---------------------------------------------------------------------------
// Mark complete
// ---------------------------------------------------------------------------

describe("PhraseLessonPage — completion", () => {
    it("renders the mark-complete button", () => {
        renderPage()
        expect(screen.getByRole("button", { name: /mark.*complete|learned/i })).toBeInTheDocument()
    })
})
