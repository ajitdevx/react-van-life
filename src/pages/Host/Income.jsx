import IncomeImage from "../../assets/images/income-graph.png"

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <section>
            <div className="host-dashboard-income">
                <div className="top-text">
                    <h1>Income</h1>
                    <p>
                        Last <span>30 days</span>
                    </p>
                    <h2>$2,260</h2>
                </div>
                <img
                    className="graph"
                    src={IncomeImage}
                    alt="Income graph"
                />
                <div className="info-header">
                    <h3>Your transactions (3)</h3>
                    <p>
                        Last <span>30 days</span>
                    </p>
                </div>
                <div className="transactions">
                    {transactionsData.map((item) => (
                        <div key={item.id} className="transaction">
                            <h3>${item.amount}</h3>
                            <p>{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=""></div>
        </section>
    )
}