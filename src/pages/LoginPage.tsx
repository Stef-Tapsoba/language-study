// pages/LoginPage.tsx — Email/password login form
import { useState, FormEvent } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import { validateLogin } from "@myorg/validation"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export function LoginPage() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? "/home"
    const passwordReset = (location.state as { passwordReset?: boolean })?.passwordReset ?? false

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setErrors([])

        const result = validateLogin({ email, password })
        if (!result.valid) {
            setErrors(result.errors.map(e => e.message))
            return
        }

        setLoading(true)
        try {
            await login(email, password)
            navigate(from, { replace: true })
        } catch (err) {
            setErrors([err instanceof Error ? err.message : "Login failed."])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-surface-app flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-sm lg:max-w-md">
                <h1 className="text-3xl font-bold text-center text-text-pri mb-2">Language Study</h1>
                <p className="text-center text-text-sec mb-8">Sign in to continue</p>

                <form onSubmit={handleSubmit} className="bg-surface-card rounded-2xl shadow-md p-6 flex flex-col gap-4">
                    {passwordReset && (
                        <p className="text-sm text-grammar bg-grammar-surface border border-grammar-border rounded-lg px-3 py-2">
                            Password updated — sign in with your new password.
                        </p>
                    )}
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
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            autoComplete="email"
                            className="text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-text-sec mb-1">Password</label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="••••••••"
                            autoComplete="current-password"
                            className="text-sm"
                        />
                    </div>

                    <div className="text-right -mt-2">
                        <Link to="/forgot-password" className="text-xs text-text-ter hover:text-text-sec">
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg py-2.5 text-sm font-semibold"
                    >
                        {loading ? "Signing in…" : "Sign in"}
                    </Button>
                </form>

                <p className="text-center text-sm text-text-sec mt-4">
                    No account?{" "}
                    <Link to="/register" className="text-grammar hover:underline font-medium">
                        Create one
                    </Link>
                </p>
                <p className="text-center text-sm text-text-ter mt-2">
                    <Link to="/" className="hover:text-text-sec">← Back to home</Link>
                </p>
            </div>
        </div>
    )
}
