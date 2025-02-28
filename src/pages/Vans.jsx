import { useEffect, useState } from "react";
import { Link } from "react-router"

export default function Vans() {
    const [vans, setVans] = useState([]);

    const getVans = () => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVans(data.vans));
    }

    useEffect(() => {
        getVans();

    }, []);

    return (
        <main>
            <section className="vans-page-container">
                <h2 className="title">Explore our van options</h2>
                <section className="vans-page-content">
                    {
                        vans &&
                        vans.map(van => (
                            <VanCard
                                key={van.id}
                                imageUrl={van.imageUrl}
                                name={van.name}
                                price={van.price}
                                type={van.type}
                                id={van.id} />
                        ))
                    }
                </section>
            </section>
        </main>
    )
}

function VanCard(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="van-image" alt={props.imageUrl} />
            <div className="card-body">
                <h5 className="name">{props.name}</h5>
                <span>{`$${props.price}/day`}</span>
                <Link to={`/vans/${props.id}`} className={`van-type ${props.type}`}>{props.type}</Link>
            </div>
        </div>
    )
}