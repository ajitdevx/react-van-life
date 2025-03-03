import React, { useState } from "react"
import { useNavigate } from "react-router"
import { loginUser } from "../../api"
import "./login.css"


export function loginLoader({ request }) {
    console.log(request)
}

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" });
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        setError(null)
        loginUser(loginFormData)
            .then(navigate("/", { replace: true }))
            .catch(err => setError(err))
            .finally(() => setStatus('idle'))
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {error && <h2>{error.message}</h2>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === 'submitting' ? true : false}>Log in</button>
            </form>
        </div>
    )

}