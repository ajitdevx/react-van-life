import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router"
import "./vans.css"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVans] = useState([]);
    const typeFilter = searchParams.get("type");

    const getVans = () => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVans(data.vans));
    }

    useEffect(() => {
        getVans();

    }, []);

    const filteredVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    console.log(filteredVans)

    const vanElements = filteredVans && filteredVans.map(van => (
        <VanCard
            key={van.id}
            imageUrl={van.imageUrl}
            name={van.name}
            price={van.price}
            type={van.type}
            id={van.id} />
    ))

    return (
        <section>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-type-filter-container">
                    <a className="van-type simple" onClick={() => setSearchParams({ type: 'simple' })}>Simple</a>
                    <a className="van-type rugged" onClick={() => setSearchParams({ type: 'rugged' })}>Rugged</a>
                    <a className="van-type luxury" onClick={() => setSearchParams({ type: 'luxury' })}>Luxury</a>
                    <a className="van-type clear" onClick={() => setSearchParams({})}>Clear</a>
                </div>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </section>
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