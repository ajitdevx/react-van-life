import { Link } from "react-router"
import "./home.css"

export default function Home() {
    return (
        <>
            <main>
                <div className="home-page-container">
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>
                        Add adventure to your life by joining the #vanlife movement. Rent the
                        perfect van to make your perfect road trip.
                    </p>
                    <Link to="vans" className="link-button">Find your van</Link>
                </div>
            </main>            
        </>
    )
}
