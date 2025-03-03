import { Link } from "react-router"
import "./not-found.css"

export default function NotFound() {

    return (
        <>
            <section>
                <div className="not-found-page-container">
                    <h1>Sorry, the page you were looking for was not found. </h1>
                    <Link to=".." className="back-to-home-page">Return to home</Link>
                </div>
            </section>
        </>
    )
}