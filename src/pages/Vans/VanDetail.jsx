import { Link, useLocation, useLoaderData } from "react-router"
import "./van-detail.css"
import { getVans } from "../../api";

export const loader = ({ params }) => {
    return getVans(params.id)
}

export default function VanDetail() {
    const van = useLoaderData()
    const location = useLocation();

    const type = location?.state?.type ? location?.state?.type : 'all';

    const backToAllVans = location?.state?.search
        ? `..?${location.state.search}`
        : '..'

    console.log(backToAllVans)

    return (
        <section>
            <div className="van-detail-container">
                <div>
                    <Link to={backToAllVans} relative="path" className="link-go-back">&larr; Back to {type} vans</Link>
                </div>
                {
                    van ?
                        (
                            <div className="van-detail">
                                <img alt={van.name} src={van.imageUrl} />
                                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                                <h2>{van.name}</h2>
                                <p className="van-price">
                                    <span>${van.price}</span>/day
                                </p>
                                <p>{van.description}</p>
                                <Link className="btn-rent-van">Rent this van</Link>
                            </div>
                        )
                        : <h2>Loading...</h2>
                }
            </div>
        </section>

    )
}