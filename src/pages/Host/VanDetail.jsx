import { useEffect, useState } from "react"
import { useParams, NavLink, Outlet, Link } from "react-router";

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
                                <li><NavLink end style={handleActiveStyle} to={`/host/vans/${id}`}>Details</NavLink></li>
                                <li><NavLink style={handleActiveStyle} to={`/host/vans/${id}/pricing`}>Pricing</NavLink></li>
                                <li><NavLink style={handleActiveStyle} to={`/host/vans/${id}/photos`}>Photos</NavLink></li>
                            </ul>
                        </nav>
                        <Outlet />
                    </div>
                </section>
            )}
        </>
    )
}

const HostVanInfo = (props) => {
    return (
        <div className="host-van-detail">
            <div className="name">
                <strong>Name: </strong>
                {props.name}
            </div>
            <div className="category">
                <strong>Category: </strong>
                {props.type}
            </div>
            <div className="description">
                <strong>Description: </strong>
                {props.description}
            </div>
            <div className="visibility">
                <strong>Visibility: </strong>
                Public
            </div>
        </div>
    )
}

const HostVanPricing = (props) => {
    return (
        <div className="host-van-pricing">
            <h1>
                <p className="van-price">
                    <span>${props.price}</span>/day
                </p>
            </h1>
        </div>
    )
}

const HostVanPhoto = (props) => {
    return (
        <div className="host-van-photos">
            <img src={props.imageUrl} alt={props.name} />
        </div>
    )
}

export { HostVanInfo, HostVanPricing, HostVanPhoto }