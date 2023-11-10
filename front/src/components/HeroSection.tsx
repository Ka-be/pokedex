import Header from "./Header"
import charizardImg from "../assets/images/img-charizard-min.png"
import '../assets/styles/heroSection.scss'
import { Link, useNavigate } from "react-router-dom"
import PokemonType from "./PokemonType"

const HeroSection = () => {
    const navigate = useNavigate()

    const navigateToPokemonDetails = () => {
        navigate('/pokemon/1')
    }

    return (
        <div className="hero-section">
            <div className="main-container">
                <Header/>
                <div className="hero-content">
                    <div className="hero-data">
                        <span className="hero-data-number">#006</span>
                        <div className="hero-data-types">
                            <PokemonType type="fire"/>
                            <PokemonType type="flying"/>
                        </div>
                        <h1 className="hero-data-name">Charizard</h1>
                        <p className="hero-data-description">
                            Charizard resembles a large traditional European dragon.
                            Despite the resemblance, Charizard is explicitly a Fire and Flying
                            types, and not a Dragon type, except in its "Mega Charizard X" form.
                            "Mega Charizard X" form; however, it can learn Dragon-type attacks.
                            type attacks.
                        </p>
                        <button className="hero-data-button" onClick={navigateToPokemonDetails}>
                            More details
                        </button>
                        
                    </div>
                    <div className="hero-image">
                        <img src={charizardImg} alt="Charizard Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection