// auth/AuthContext.test.tsx

import { render, screen, act, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { AuthProvider, useAuth } from "./AuthContext"
import { registerUser } from "./mockAuthApi"

// ── helpers ────────────────────────────────────────────────────────────────────

function seedUser(email = "test@example.com", password = "pass123") {
    return registerUser(email, "Test User", password)
}

function TestConsumer() {
    const { session, loading } = useAuth()
    if (loading) return <div>loading</div>
    return (
        <div>
            <span data-testid="session">{session ? session.userId : "null"}</span>
        </div>
    )
}

function LoginConsumer({ email, password }: { email: string; password: string }) {
    const { session, login, logout } = useAuth()
    return (
        <div>
            <span data-testid="session">{session ? session.userId : "null"}</span>
            <button onClick={() => login(email, password)}>login</button>
            <button onClick={() => logout()}>logout</button>
        </div>
    )
}

// ── AuthProvider renders children ──────────────────────────────────────────────

describe("AuthProvider", () => {
    it("renders children", async () => {
        render(
            <AuthProvider>
                <div data-testid="child">hello</div>
            </AuthProvider>
        )
        expect(await screen.findByTestId("child")).toBeInTheDocument()
    })

    it("provides session as null when not logged in", async () => {
        render(
            <AuthProvider>
                <TestConsumer />
            </AuthProvider>
        )
        await waitFor(() => {
            expect(screen.getByTestId("session")).toHaveTextContent("null")
        })
    })
})

// ── login / logout ──────────────────────────────────────────────────────────────

describe("useAuth login and logout", () => {
    it("updates session after successful login", async () => {
        const user = seedUser("login@example.com", "pass123")
        render(
            <AuthProvider>
                <LoginConsumer email="login@example.com" password="pass123" />
            </AuthProvider>
        )

        // Wait for loading to finish
        await waitFor(() => {
            expect(screen.getByTestId("session")).toHaveTextContent("null")
        })

        await act(async () => {
            await userEvent.click(screen.getByText("login"))
        })

        await waitFor(() => {
            expect(screen.getByTestId("session")).toHaveTextContent(user.id)
        })
    })

    it("clears session after logout", async () => {
        const user = seedUser("logout@example.com", "pass123")
        render(
            <AuthProvider>
                <LoginConsumer email="logout@example.com" password="pass123" />
            </AuthProvider>
        )

        await waitFor(() => {
            expect(screen.getByTestId("session")).toHaveTextContent("null")
        })

        await act(async () => {
            await userEvent.click(screen.getByText("login"))
        })

        await waitFor(() => {
            expect(screen.getByTestId("session")).toHaveTextContent(user.id)
        })

        await act(async () => {
            await userEvent.click(screen.getByText("logout"))
        })

        await waitFor(() => {
            expect(screen.getByTestId("session")).toHaveTextContent("null")
        })
    })

    it("throws on login with wrong credentials", async () => {
        seedUser("err@example.com", "correct")
        let caughtError: Error | null = null

        function ErrorCapture() {
            const { login } = useAuth()
            return (
                <button
                    onClick={async () => {
                        try {
                            await login("err@example.com", "wrong")
                        } catch (e) {
                            caughtError = e as Error
                        }
                    }}
                >
                    bad-login
                </button>
            )
        }

        render(
            <AuthProvider>
                <ErrorCapture />
            </AuthProvider>
        )

        await act(async () => {
            await userEvent.click(screen.getByText("bad-login"))
        })

        expect(caughtError).not.toBeNull()
        expect((caughtError as unknown as Error).message).toMatch(/Invalid email or password/)
    })
})

// ── useAuth outside AuthProvider ───────────────────────────────────────────────

describe("useAuth outside AuthProvider", () => {
    it("throws a descriptive error", () => {
        function Naked() {
            useAuth()
            return null
        }
        // Suppress console.error from React's error boundary
        const spy = vi.spyOn(console, "error").mockImplementation(() => {})
        expect(() => render(<Naked />)).toThrow("useAuth must be used inside <AuthProvider>")
        spy.mockRestore()
    })
})
