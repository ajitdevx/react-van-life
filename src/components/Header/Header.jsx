import { Link, NavLink } from "react-router"
import LoginAvatar from "../../assets/images/avatar-icon.png"

export default function Header() {
    const activeStyle = {
        color: '#161616',
        fontWeight: 'bold',
        textDecoration: 'underline'
    }

    const handleActiveStyle = ({ isActive }) => {
        return isActive ? activeStyle : null
    }

    return (
        <header>
            <Link to="/" className="brand">#VANLIFE</Link>
            <nav>
                <ul>
                    <li>
                        <NavLink style={handleActiveStyle} to="/host" >Host</NavLink>
                    </li>
                    <li>
                        <NavLink style={handleActiveStyle} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink style={handleActiveStyle} to="/vans" >Vans</NavLink>
                    </li>
                    <li>
                        <Link to="login" className="login-link">
                            <img
                                src={LoginAvatar}
                                className="login-icon"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}