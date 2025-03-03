import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router"
import { getVans } from "../../api";
import "./vans.css"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVans] = useState([]);
    const typeFilter = searchParams.get("type");

    const loadVans = async () => {
        const data = await getVans()
        setVans(data);
    }

    useEffect(() => {
        loadVans();

    }, []);

    const filteredVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    console.log(searchParams)

    const vanElements = filteredVans && filteredVans.map(van => (
        <VanCard
            key={van.id}
            imageUrl={van.imageUrl}
            name={van.name}
            price={van.price}
            type={van.type}
            id={van.id}
            searchParams={searchParams}
        />
    ));

    const handleFilterChange = (key, value) => {
        setSearchParams(prevSearchParam => {
            if (value === null)
                prevSearchParam.delete(key)
            else
                prevSearchParam.set(key, value);
            return prevSearchParam;
        })
    }

    return (
        <section>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-type-filter-container">
                    <a className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`} onClick={() => handleFilterChange('type', 'simple')}>Simple</a>
                    <a className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`} onClick={() => handleFilterChange('type', 'rugged')}>Rugged</a>
                    <a className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`} onClick={() => handleFilterChange('type', 'luxury')}>Luxury</a>
                    {typeFilter && <a className="van-type clear" onClick={() => handleFilterChange('type', null)}>Clear</a>}
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
            <Link to={props.id} state={{ search: props.searchParams.toString(), type: props.searchParams.get("type") }}>
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
                <i className={`van-type ${props.type} selected`}>{props.type}</i>
            </Link>
        </div>
    )
}