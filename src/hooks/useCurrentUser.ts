// hooks/useCurrentUser.ts — Display info for the currently logged-in user.

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"

export interface CurrentUser {
    displayName: string   // full name, or "User" if unavailable
    firstName: string     // first word of displayName (for greetings)
    email: string
    initials: string      // up to two uppercase initials for avatar display
}

export function useCurrentUser(): CurrentUser {
    const [displayName, setDisplayName] = useState("User")
    const [email, setEmail] = useState("")

    useEffect(() => {
        // getSession() reads from the local cache — no network round-trip.
        // user_metadata is embedded in the JWT and available here.
        supabase.auth.getSession().then(({ data }) => {
            const user = data.session?.user
            if (!user) return
            setEmail(user.email ?? "")
            setDisplayName(user.user_metadata?.display_name ?? user.email ?? "User")
        })
    }, [])

    const initials = displayName
        .split(" ")
        .map((w: string) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    const firstName = displayName.split(" ")[0] ?? "there"
    return { displayName, firstName, email, initials }
}
