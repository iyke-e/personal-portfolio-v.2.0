import Footer from "../../components/Footer"
import Header from "../../components/Header"
import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Project from "./Project"


const Landingpage = (data) => {
    window.scrollTo(0, 0)

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Project data={data} />
            <Contact />
            <Footer />
        </>
    )
}

export default Landingpage
