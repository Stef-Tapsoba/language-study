// auth/mockAuthApi.ts
// Implements @myorg/auth-core AuthApi using localStorage as the user store.
// No real backend required for prototype 1.

import { AuthApi, Session } from "@myorg/auth-core"

interface StoredUser {
    id: string
    email: string
    displayName: string
    passwordHash: string  // Not really hashed in prototype — just stored plaintext
}

const USERS_KEY = "ls:users"
const SESSION_TTL_MS = 8 * 60 * 60 * 1000  // 8 hours

function loadUsers(): StoredUser[] {
    try {
        return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]")
    } catch {
        return []
    }
}

function saveUsers(users: StoredUser[]): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function makeSession(user: StoredUser): Session {
    return {
        accessToken: btoa(`${user.id}:${user.email}`),
        refreshToken: btoa(`refresh:${user.id}`),
        userId: user.id,
        expiresAt: Date.now() + SESSION_TTL_MS
    }
}

export const mockAuthApi: AuthApi = {
    async login(email: string, password: string): Promise<Session> {
        const users = loadUsers()
        const user = users.find(
            u => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === password
        )
        if (!user) throw new Error("Invalid email or password")
        return makeSession(user)
    },

    async refresh(refreshToken: string): Promise<Session> {
        // Decode the user id from the refresh token
        const decoded = atob(refreshToken)  // "refresh:<id>"
        const userId = decoded.replace("refresh:", "")
        const users = loadUsers()
        const user = users.find(u => u.id === userId)
        if (!user) throw new Error("Session expired")
        return makeSession(user)
    }
}

// ---------------------------------------------------------------------------
// Registration helper (not part of AuthApi — called from RegisterPage)
// ---------------------------------------------------------------------------
export function registerUser(email: string, displayName: string, password: string): StoredUser {
    const users = loadUsers()
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        throw new Error("An account with this email already exists")
    }
    const user: StoredUser = {
        id: crypto.randomUUID(),
        email,
        displayName,
        passwordHash: password
    }
    saveUsers([...users, user])
    return user
}
