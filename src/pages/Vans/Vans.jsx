import { useEffect, useState } from "react";
import { Link } from "react-router"
import "./vans.css"

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

    const vanElements = vans && (
        vans.map(van => (
            <VanCard
                key={van.id}
                imageUrl={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
                id={van.id} />
        ))
    )

    return (
        <main>
            <section>
                <div className="van-list-container">
                    <h1>Explore our van options</h1>

                    <div className="van-list">
                        {vanElements}
                    </div>
                </div>
            </section>
        </main>
    )
}

function VanCard(props) {
    return (
        <div className="van-tile">
            <Link to={`/vans/${props.id}`}>
                <img
                    alt={props.name}
                    src={props.imageUrl}
                    className="van-image"
                />
                <div className="van-info">
                    <h3 className="name">Modest Explorer</h3>
                    <p className="price">
                        ${props.price}<span>/day</span>
                    </p>
                </div>
                <i className={`van-type ${props.type}`}>{props.type}</i>
            </Link>
        </div>
    )
}