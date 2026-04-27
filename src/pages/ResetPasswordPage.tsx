// pages/ResetPasswordPage.tsx — Set a new password after clicking the reset email link.
//
// Supabase processes the token from the URL hash automatically when the client
// initialises, establishing a temporary recovery session. onAuthStateChange in
// AuthContext fires PASSWORD_RECOVERY, but we don't need to handle it there —
// supabase.auth.updateUser() works as long as any session (including recovery)
// is active, which it will be by the time this page mounts.
import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabaseClient"
import { validatePassword } from "@myorg/validation"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export function ResetPasswordPage() {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setErrors([])

        const passwordErrors = validatePassword(password)
        if (passwordErrors.length > 0) {
            setErrors(passwordErrors.map(e => e.message))
            return
        }

        setLoading(true)
        try {
            const { error } = await supabase.auth.updateUser({ password })
            if (error) throw new Error(error.message)
            // Sign out the recovery session so the user logs in fresh
            await supabase.auth.signOut()
            navigate("/login", { replace: true, state: { passwordReset: true } })
        } catch (err) {
            setErrors([err instanceof Error ? err.message : "Something went wrong."])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-surface-app flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-sm lg:max-w-md">
                <h1 className="text-3xl font-bold text-center text-text-pri mb-2">Language Study</h1>
                <p className="text-center text-text-sec mb-8">Choose a new password</p>

                <form onSubmit={handleSubmit} className="bg-surface-card rounded-2xl shadow-md p-6 flex flex-col gap-4">
                    {errors.length > 0 && (
                        <ul className="text-sm text-verbs bg-verbs-surface border border-verbs-border rounded-lg px-3 py-2 flex flex-col gap-1 list-disc list-inside">
                            {errors.map(msg => <li key={msg}>{msg}</li>)}
                        </ul>
                    )}

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-text-sec mb-1">New password</label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => { setPassword(e.target.value); setErrors([]) }}
                            placeholder="Min. 8 characters, one uppercase"
                            autoComplete="new-password"
                            className="text-sm"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg py-2.5 text-sm font-semibold"
                    >
                        {loading ? "Saving…" : "Set new password"}
                    </Button>
                </form>
            </div>
        </div>
    )
}
