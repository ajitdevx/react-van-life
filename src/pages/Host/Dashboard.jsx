import "./index.css"

export default function Dashboard() {
    return (
        <>
            <>
                <section>
                    <div className="host-dashboard-hero">
                        <h2>Welcome</h2>
                        <div className="host-flex">
                            <p>
                                Income last <a href="">30 days</a>
                            </p>
                            <a href="">Details</a>
                        </div>
                        <h1>$2,260</h1>
                    </div>
                </section>
                <section>
                    <div className="host-dashboard-review">
                        <div className="host-flex">
                            <h4>
                                Income last <a href="">30 days</a>
                            </h4>
                            <a href="">Details</a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="host-dashboard-vans">
                        <div>
                            <h2 className="host-dashboard-van-title">Your listed vans</h2>
                            <a href="">View All</a>
                        </div>
                        <div className="host-vans-list">
                            <img
                                alt=""
                                src="https://assets.scrimba.com/advanced-react/react-router/reliable-red.png"
                            />
                            <div>
                                <h2>Modest Explorer</h2>
                                <p className="van-price">
                                    <span>$16</span>/day
                                </p>
                            </div>
                            <a href="">Edit</a>
                        </div>
                        <div className="host-vans-list">
                            <img
                                alt=""
                                src="https://assets.scrimba.com/advanced-react/react-router/reliable-red.png"
                            />
                            <div>
                                <h2>Modest Explorer</h2>
                                <p className="van-price">
                                    <span>$16</span>/day
                                </p>
                            </div>
                            <a href="">Edit</a>
                        </div>
                        <div className="host-vans-list">
                            <img
                                alt=""
                                src="https://assets.scrimba.com/advanced-react/react-router/reliable-red.png"
                            />
                            <div>
                                <h2>Modest Explorer</h2>
                                <p className="van-price">
                                    <span>$16</span>/day
                                </p>
                            </div>
                            <a href="">Edit</a>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}