import Header from "./Header"
import charizardImg from '../assets/images/charizard.webp'

const HeroSection = () => {
  return(
    <div className="hero-section">
      <Header/>
      <div className="main-container">
        <div className="hero-content">
          <div className="hero-data">
            <span className="hero-data-number">#006</span>
            <div className="hero-data-types">
              <span>Fire</span>
              <span>Flying</span>
            </div>
            <h1 className="hero-data-name">Charizard</h1>
            <p className="hero-data-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quam ut reprehenderit minus! Incidunt ipsam aliquam assumenda dolore iste qui ex temporibus aspernatur dicta. 
              Amet rerum reprehenderit nulla laudantium consequatur! Quae.
            </p>
            <button className="hero-data-button">
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