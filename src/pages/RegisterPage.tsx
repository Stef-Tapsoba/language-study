// pages/RegisterPage.tsx — New account registration form
import { useState, FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../auth/mockAuthApi"
import { signUpWithSupabase } from "../auth/supabaseAuthApi"
import { useAuth } from "../auth/AuthContext"
import { validateRequired, validateEmail, validatePassword } from "@myorg/validation"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export function RegisterPage() {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formErrors, setFormErrors] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setFormErrors([])

        const validationErrors = [
            ...validateRequired(name, "Name"),
            ...validateEmail(email),
            ...validatePassword(password),
        ]
        if (validationErrors.length > 0) {
            setFormErrors(validationErrors.map(e => e.message))
            return
        }

        setLoading(true)
        try {
            if (import.meta.env.VITE_SUPABASE_URL) {
                await signUpWithSupabase(email, name, password)
            } else {
                registerUser(email, name, password)
            }
            await login(email, password)
            navigate("/home", { replace: true })
        } catch (err) {
            setFormErrors([err instanceof Error ? err.message : "Registration failed."])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-sm lg:max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">Language Study</h1>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Create your account</p>

                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col gap-4">
                    {formErrors.length > 0 && (
                        <ul className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg px-3 py-2 flex flex-col gap-1 list-disc list-inside">
                            {formErrors.map(msg => <li key={msg}>{msg}</li>)}
                        </ul>
                    )}

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={e => { setName(e.target.value); setFormErrors([]) }}
                            placeholder="Your name"
                            autoComplete="name"
                            className="text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => { setEmail(e.target.value); setFormErrors([]) }}
                            placeholder="you@example.com"
                            autoComplete="email"
                            className="text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => { setPassword(e.target.value); setFormErrors([]) }}
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
                        {loading ? "Creating account…" : "Create account"}
                    </Button>
                </form>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 hover:underline font-medium">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}
