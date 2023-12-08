import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Project from "./Project"


const Landingpage = (data) => {
    window.scrollTo(0, 0)

    return (
        <main>
            <Hero />
            <About />
            <Project data={data} />
            <Contact />
        </main>
    )
}

export default Landingpage
