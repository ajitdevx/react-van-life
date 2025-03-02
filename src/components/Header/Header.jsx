import { Link } from "react-router"

export default function Header() {
    return (
        <header>
            <Link to="/" className="brand">#VANLIFE</Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/host" >Host</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/vans" >Vans</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}