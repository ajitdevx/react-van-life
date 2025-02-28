import { Link } from "react-router"

export default function Home() {
    return (
        <>
            <main>
                <section className="hero-container">
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <Link to="vans">Find your van</Link>
                </section>
            </main>
            <footer>
                <span>Ⓒ 2022 #VANLIFE</span>
            </footer>
        </>
    )
}
