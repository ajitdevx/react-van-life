import { Form, redirect, useLoaderData, useActionData, useNavigation } from "react-router"
import { loginUser } from "../../api"
import "./login.css"

export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function loginAction({ request }) {
    try {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(email, password)
        const response = await loginUser({ email, password })
        localStorage.setItem("loggedin", JSON.stringify(response))
        const res = redirect("/host")
        res.body = true;
        return res;
    }
    catch (err) {
        return err;
    }
}

export default function Login() {
    const message = useLoaderData();
    const error = useActionData();
    const navigation = useNavigation();
    const { state } = navigation;

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {error && <h3 className="danger">{error.message}</h3>}
            {message && <h3 className="danger">{message}</h3>}
            <Form method="post" className="login-form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={state === 'submitting'}>{state === 'submitting' ? 'Logging in' : 'Log in'}</button>
            </Form>
        </div>
    )
}

// export default function Login() {
//     const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" });
//     const [status, setStatus] = useState('idle');
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     function handleSubmit(e) {
//         e.preventDefault()
//         setStatus('submitting')
//         setError(null)
//         loginUser(loginFormData)
//             .then()//navigate("/", { replace: true })
//             .catch(err => setError(err))
//             .finally(() => setStatus('idle'))
//     }

//     function handleChange(e) {
//         const { name, value } = e.target
//         setLoginFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     return (
//         <div className="login-container">
//             <h1>Sign in to your account</h1>
//             {error && <h2>{error.message}</h2>}
//             <form onSubmit={handleSubmit} className="login-form">
//                 <input
//                     name="email"
//                     onChange={handleChange}
//                     type="email"
//                     placeholder="Email address"
//                     value={loginFormData.email}
//                 />
//                 <input
//                     name="password"
//                     onChange={handleChange}
//                     type="password"
//                     placeholder="Password"
//                     value={loginFormData.password}
//                 />
//                 <button disabled={status === 'submitting' ? true : false}>Log in</button>
//             </form>
//         </div>
//     )

// }