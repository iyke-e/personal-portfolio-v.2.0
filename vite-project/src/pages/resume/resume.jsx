import pdf from "./resume.pdf"
import "./resume.css"
const resume = () => {
    return (
        <div>
            <iframe className="pdf" src={pdf} frameBorder="0">

            </iframe>
        </div>
    )
}

export default resume