// hooks/useCurrentUser.ts — Display info for the currently logged-in user.
//
// Wraps session + the mock user lookup in one place. When Supabase lands,
// only this file changes — pages that call useCurrentUser() need no update.

import { useAuth } from "../auth/AuthContext"
import { getUserById } from "../auth/mockAuthApi"

export interface CurrentUser {
    displayName: string   // full name, or "User" if unavailable
    firstName: string     // first word of displayName (for greetings)
    email: string
    initials: string      // up to two uppercase initials for avatar display
}

export function useCurrentUser(): CurrentUser {
    const { session } = useAuth()
    const userInfo = session ? getUserById(session.userId) : null
    const displayName = userInfo?.displayName ?? "User"
    const email = userInfo?.email ?? ""
    const initials = displayName
        .split(" ")
        .map((w: string) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    const firstName = displayName.split(" ")[0] ?? "there"
    return { displayName, firstName, email, initials }
}
