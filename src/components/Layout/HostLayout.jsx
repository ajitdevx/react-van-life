import { Outlet, Link } from "react-router"

export default function HostLayout() {
    return (
        <>
            <section>
                <nav className="host-nav">
                    <ul>
                        <li><Link to="/host" className="nav-link">Dashboard</Link></li>
                        <li><Link to="/host/income" className="nav-link">Income</Link></li>
                        <li><Link to="/host/vans" className="nav-link">Vans</Link></li>
                    </ul>
                </nav>
            </section>
            <Outlet />
        </>
    )
}