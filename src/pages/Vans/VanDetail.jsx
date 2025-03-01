import { useEffect, useState } from "react";
import { useParams, Link } from "react-router"
import "./van-detail.css"

export default function VanDetail() {
    const { id } = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id])

    return (
        <section>
            <div className="van-detail-container">
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