import programmer from "/assets/programmer.png"
import Button from "../../utils/Button"
import "./Hero.css"
import html from "/assets/html.svg?url"
import css from "/assets/css.svg?url"
import react from "/assets/react.svg?url"
import javascript from "/assets/javascript.svg?url"
import tailwindcss from "/assets/tailwindcss.svg?url"
import figma from "/assets/figma.svg?url"
import sass from "/assets/sass.svg?url"
import vuejs from "/assets/vuejs.svg?url"


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

                <div className="hero-animation-container">
                    <img src={programmer} alt="programmer img" />
                    <ul>
                        <li>
                            <img src={html} alt="" />
                        </li>
                        <li>
                            <img src={css} alt="" />

                        </li>
                        <li>
                            <img src={javascript} alt="" />

                        </li>
                        <li>
                            <img src={react} alt="" />

                        </li>
                        <li>
                            <img src={tailwindcss} alt="" />
                        </li>
                        <li>
                            <img src={sass} alt="" />

                        </li>
                        <li>
                            <img src={figma} alt="" />

                        </li>
                        <li>
                            <img src={vuejs} alt="" />
                        </li>
                    </ul>
                </div>
            </div>


        </section>


    )
}

export default Hero