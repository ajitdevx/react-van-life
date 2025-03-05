import { Link, useLoaderData } from "react-router";
import "./index.css"
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export const loader = async ({ request }) => {
    console.log(request)
    await requireAuth();
    return await getHostVans();
}

export default function Dashboard() {
    const vans = useLoaderData();

    const vanElements = (vans && vans.length > 0) ? vans.map(van => (
        <VanList key={van.id} imageUrl={van.imageUrl} name={van.name} id={van.id} price={van.price} />
    )) : (<h2>Loading</h2>)

    return (
        <>
            <>
                <section>
                    <div className="host-dashboard-hero">
                        <h2>Welcome</h2>
                        <div className="host-flex">
                            <p>
                                Income last <span>30 days</span>
                            </p>
                            <Link to="income">Details</Link>
                        </div>
                        <h1>$2,260</h1>
                    </div>
                </section>
                <section>
                    <div className="host-dashboard-review">
                        <div className="host-flex">
                            <h4>
                                Income last <span href="">30 days</span>
                            </h4>
                            <Link to="reviews">Details</Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="host-dashboard-vans">
                        <div>
                            <h2 className="host-dashboard-van-title">Your listed vans</h2>
                            <Link to="vans">View all</Link>
                        </div>
                        {vanElements}
                    </div>
                </section>
            </>
        </>
    )
}


function VanList({ imageUrl, name, price, id }) {
    return (
        <div className="host-vans-list">
            <img
                alt={name}
                src={imageUrl}
            />
            <div>
                <h2>{name}</h2>
                <p className="van-price">
                    <span>${price}</span>/day
                </p>
            </div>
            <Link to={`vans/${id}`}>View</Link>
        </div>
    )
}