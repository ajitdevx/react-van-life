import { useParams, NavLink, Outlet, Link, useOutletContext, useLoaderData } from "react-router";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export const loader = async ({ params }) => {
    await requireAuth();
    return getHostVans(params.id);
}

export default function VanDetail() {
    const { id } = useParams();
    const vans = useLoaderData();
    const van = vans && vans[0];
    console.log(van)

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
            {van && (
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