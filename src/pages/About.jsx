import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router"

export default function About() {
    return (
        <section className="about-page-container">
            <img src={bgImg} alt="about hero image" className="about-hero-image" />
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)

                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className="about-page-ctx">
                <h2>Your destination is waiting.
                    Your van is ready.</h2>
                <Link to="/vans" className="link-button" >
                    Explore Vans
                </Link>
            </div>
        </section>
    )
}