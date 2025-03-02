import { Outlet, NavLink } from "react-router"

export default function HostLayout() {

    const activeStyle = {
        color: '#161616',
        fontWeight: 'bold',
        textDecoration: 'underline'
    }

    const handleActiveStyle = ({ isActive }) => {
        return isActive ? activeStyle : null
    }

    return (
        <>
            <section>
                <nav className="host-nav">
                    <ul>
                        <li><NavLink end style={handleActiveStyle} to="." className="nav-link">Dashboard</NavLink></li>
                        <li><NavLink end style={handleActiveStyle} to="income" className="nav-link">Income</NavLink></li>
                        <li><NavLink end style={handleActiveStyle} to="vans" className="nav-link">Vans</NavLink></li>
                        <li><NavLink end style={handleActiveStyle} to="reviews" className="nav-link">Reviews</NavLink></li>
                    </ul>
                </nav>
            </section>
            <Outlet />
        </>
    )
}