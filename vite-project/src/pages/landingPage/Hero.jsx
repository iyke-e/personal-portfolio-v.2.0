import Programmer from "../../assets/programmer.png"
import Button from "../../utils/Button"
import "./Hero.css"


const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content-container">
                <div className="hero-text">
                    <h1>
                        Egwim <br /> Ikechukwu
                    </h1>
                    <p>Frontend Developer</p>
                    <a href="#project">
                        <Button buttonName={"View Project"} />

                    </a>

                </div>

                <div className="hero-img">
                    <img src={Programmer} alt="programmer img" />
                </div>
            </div>


        </section>


    )
}

export default Hero