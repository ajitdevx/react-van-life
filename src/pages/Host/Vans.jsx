import { useEffect, useState } from "react"
import { Link } from "react-router";
import "./index.css"

export default function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/host/vans")
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, []);

    const vanElements = vans.length > 0 ? vans.map(van => (
        <VanList key={van.id} imageUrl={van.imageUrl} name={van.name} id={van.id} price={van.price} />
    )) : (<h2>Loading</h2>)

    return (
        (
            <section>
                <div className="host-dashboard-vans">
                    <div>
                        <h2 className="host-dashboard-van-title">Your listed vans</h2>
                        <a href="">View All</a>
                    </div>
                    {vanElements}
                </div>
            </section>
        )
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
            <Link to={`/host/vans/${id}`}>Edit</Link>
        </div>
    )
}