import "./index.css"

export default function Vans() {
    return (
        (
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
        )
    )
}