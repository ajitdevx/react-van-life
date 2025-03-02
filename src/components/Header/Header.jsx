import { Link, NavLink } from "react-router"

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
                </ul>
            </nav>
        </header>
    )
}