// pages/ForgotPasswordPage.tsx — Request a password reset email
import { useState, FormEvent } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../lib/supabaseClient"
import { validateEmail } from "@myorg/validation"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState<string[]>([])
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setErrors([])

        const emailErrors = validateEmail(email)
        if (emailErrors.length > 0) {
            setErrors(emailErrors.map(e => e.message))
            return
        }

        setLoading(true)
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            })
            if (error) throw new Error(error.message)
            setSubmitted(true)
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
                <p className="text-center text-text-sec mb-8">Reset your password</p>

                <div className="bg-surface-card rounded-2xl shadow-md p-6">
                    {submitted ? (
                        <div className="flex flex-col gap-4 text-center">
                            <p className="text-text-pri text-sm">
                                If an account exists for <span className="font-medium">{email}</span>, you'll receive a reset link shortly.
                            </p>
                            <p className="text-text-ter text-xs">Check your spam folder if it doesn't arrive within a few minutes.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {errors.length > 0 && (
                                <ul className="text-sm text-verbs bg-verbs-surface border border-verbs-border rounded-lg px-3 py-2 flex flex-col gap-1 list-disc list-inside">
                                    {errors.map(msg => <li key={msg}>{msg}</li>)}
                                </ul>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-sec mb-1">Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={e => { setEmail(e.target.value); setErrors([]) }}
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    className="text-sm"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-lg py-2.5 text-sm font-semibold"
                            >
                                {loading ? "Sending…" : "Send reset link"}
                            </Button>
                        </form>
                    )}
                </div>

                <p className="text-center text-sm text-text-sec mt-4">
                    <Link to="/login" className="text-grammar hover:underline font-medium">← Back to sign in</Link>
                </p>
            </div>
        </div>
    )
}
