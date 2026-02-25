// auth/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react"
import { AuthService, Session } from "@myorg/auth-core"
import { LocalStorageAdapter } from "@myorg/storage"
import { mockAuthApi } from "./mockAuthApi"

interface AuthContextValue {
    authService: AuthService
    session: Session | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

const authService = new AuthService(mockAuthApi, new LocalStorageAdapter("ls"))

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        authService.getSession().then(s => {
            setSession(s)
            setLoading(false)
        })

        const unsubExpired = authService.events.on("expired", () => setSession(null))
        const unsubLogout  = authService.events.on("logout",  () => setSession(null))
        const unsubLogin   = authService.events.on("login", () => {
            authService.getSession().then(setSession)
        })

        return () => {
            unsubExpired()
            unsubLogout()
            unsubLogin()
        }
    }, [])

    async function login(email: string, password: string) {
        const s = await authService.login(email, password)
        setSession(s)
    }

    async function logout() {
        await authService.logout()
        setSession(null)
    }

    return (
        <AuthContext.Provider value={{ authService, session, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextValue {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>")
    return ctx
}
