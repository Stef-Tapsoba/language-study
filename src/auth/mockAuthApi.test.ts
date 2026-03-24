// auth/mockAuthApi.test.ts

import { mockAuthApi, getUserById, registerUser } from "./mockAuthApi"

// ── helpers ────────────────────────────────────────────────────────────────────

function seedUser(email = "alice@example.com", displayName = "Alice", password = "pass123") {
    return registerUser(email, displayName, password)
}

// ── registerUser ───────────────────────────────────────────────────────────────

describe("registerUser", () => {
    it("creates a new user with a generated id", () => {
        const user = registerUser("bob@example.com", "Bob", "secret")
        expect(user.id).toBeTruthy()
        expect(user.email).toBe("bob@example.com")
        expect(user.displayName).toBe("Bob")
    })

    it("throws on duplicate email (case-insensitive)", () => {
        registerUser("carol@example.com", "Carol", "abc")
        expect(() => registerUser("CAROL@EXAMPLE.COM", "Carol2", "def")).toThrow(
            "An account with this email already exists"
        )
    })

    it("allows different emails to register without conflict", () => {
        registerUser("dave@example.com", "Dave", "pw1")
        expect(() => registerUser("eve@example.com", "Eve", "pw2")).not.toThrow()
    })
})

// ── mockAuthApi.login ──────────────────────────────────────────────────────────

describe("mockAuthApi.login", () => {
    it("returns a session for valid credentials", async () => {
        seedUser("alice@example.com", "Alice", "pass123")
        const session = await mockAuthApi.login("alice@example.com", "pass123")
        expect(session.accessToken).toBeTruthy()
        expect(session.refreshToken).toBeTruthy()
        expect(session.userId).toBeTruthy()
        expect(session.expiresAt).toBeGreaterThan(Date.now())
    })

    it("is case-insensitive on email", async () => {
        seedUser("ALICE@EXAMPLE.COM", "Alice", "pass123")
        const session = await mockAuthApi.login("alice@example.com", "pass123")
        expect(session.userId).toBeTruthy()
    })

    it("throws for wrong password", async () => {
        seedUser("alice@example.com", "Alice", "correct")
        await expect(mockAuthApi.login("alice@example.com", "wrong")).rejects.toThrow(
            "Invalid email or password"
        )
    })

    it("throws for unknown email", async () => {
        await expect(mockAuthApi.login("nobody@example.com", "pw")).rejects.toThrow(
            "Invalid email or password"
        )
    })
})

// ── mockAuthApi.refresh ────────────────────────────────────────────────────────

describe("mockAuthApi.refresh", () => {
    it("returns a new session for a valid refresh token", async () => {
        const user = seedUser("alice@example.com", "Alice", "pass123")
        const loginSession = await mockAuthApi.login("alice@example.com", "pass123")
        const refreshed = await mockAuthApi.refresh(loginSession.refreshToken!)
        expect(refreshed.userId).toBe(user.id)
        expect(refreshed.expiresAt).toBeGreaterThan(Date.now())
    })

    it("throws for a refresh token whose user no longer exists", async () => {
        // Fabricate a refresh token for a non-existent userId
        const fakeToken = btoa("refresh:nonexistent-id")
        await expect(mockAuthApi.refresh(fakeToken)).rejects.toThrow("Session expired")
    })
})

// ── getUserById ────────────────────────────────────────────────────────────────

describe("getUserById", () => {
    it("returns user email and displayName for a known id", () => {
        const user = seedUser("frank@example.com", "Frank", "pw")
        const found = getUserById(user.id)
        expect(found).not.toBeNull()
        expect(found!.email).toBe("frank@example.com")
        expect(found!.displayName).toBe("Frank")
    })

    it("returns null for an unknown id", () => {
        expect(getUserById("does-not-exist")).toBeNull()
    })
})
