import { useEffect, useState } from "react"
import { useParams, NavLink, Outlet, Link, useOutletContext } from "react-router";

export default function VanDetail() {
    const { id } = useParams();
    const [van, setVan] = useState(null);

    const activeStyle = {
        color: '#161616',
        fontWeight: 'bold',
        textDecoration: 'underline'
    }

    const handleActiveStyle = ({ isActive }) => {
        return isActive ? activeStyle : null
    }

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans[0]))
    }, [id])

    return (
        <>
            {van == null ? (<h2>Loading</h2>) : (
                <section>
                    <div className="host-van-container">
                        <Link to=".." relative="path" className="link-go-back">&larr; Back to all vans</Link>
                        <div className="van-header">
                            <img src={van.imageUrl} alt={van.name} />
                            <div className="van-header-content">
                                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                                <h2>{van.name}</h2>
                                <p className="van-price">
                                    <span>${van.price}</span>/day
                                </p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li><NavLink end style={handleActiveStyle} to=".">Details</NavLink></li>
                                <li><NavLink style={handleActiveStyle} to={`/host/vans/${id}/pricing`}>Pricing</NavLink></li>
                                <li><NavLink style={handleActiveStyle} to={`/host/vans/${id}/photos`}>Photos</NavLink></li>
                            </ul>
                        </nav>
                        <Outlet context={[van]} />
                    </div>
                </section>
            )}
        </>
    )
}

const HostVanInfo = () => {
    const [van] = useOutletContext();
    return (
        <div className="host-van-detail">
            <div className="name">
                <strong>Name: </strong>
                {van.name}
            </div>
            <div className="category">
                <strong>Category: </strong>
                {van.type}
            </div>
            <div className="description">
                <strong>Description: </strong>
                {van.description}
            </div>
            <div className="visibility">
                <strong>Visibility: </strong>
                Public
            </div>
        </div>
    )
}

const HostVanPricing = () => {
    const [van] = useOutletContext();
    return (
        <div className="host-van-pricing">
            <h1>
                <p className="van-price">
                    <span>${van.price}</span>/day
                </p>
            </h1>
        </div>
    )
}

const HostVanPhoto = () => {
    const [van] = useOutletContext();
    return (
        <div className="host-van-photos">
            <img src={van.imageUrl} alt={van.name} />
        </div>
    )
}

export { HostVanInfo, HostVanPricing, HostVanPhoto }