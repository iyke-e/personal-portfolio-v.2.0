import PropTypes from 'prop-types'
import "./SectionHeader.css"


const SectionHeader = ({ svgImg, sectionName }) => {
    return (
        <div className="section-header">
            <div className="header-container">
                <div className="header-txt">
                    {svgImg}

                    <h2>{sectionName}</h2>

                </div>
            </div>

            <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4829 32V29.1524C10.4643 28.9744 6.19314 25.9844 4.12876 21.713L15.4829 15.1635V11.8532L3.16776 18.9722C2.9542 18.0111 2.84742 17.0145 2.84742 16.0178C2.84742 8.89878 8.43549 3.13237 15.4829 2.84761V0C6.86941 0.284763 0 7.33259 0 16.0178C0 24.6674 6.86941 31.7152 15.4829 32ZM17.2428 29.12V32C23.5357 31.7867 28.9042 27.9467 31.3218 22.5067H28.122C27.1621 24.1778 25.8466 25.6356 24.2823 26.7378V5.22667C25.8466 6.32889 27.1621 7.78667 28.122 9.45778H31.3218C28.9042 4.01778 23.5357 0.213334 17.2428 0V2.84444C18.7004 2.88 20.1226 3.2 21.438 3.69778V28.2667C20.1226 28.7644 18.7004 29.0844 17.2428 29.12Z" fill="#FAFAFA" />
                </svg>
            </div>

        </div>
    )
}


SectionHeader.propTypes = {
    svgImg: PropTypes.object.isRequired,
    sectionName: PropTypes.string.isRequired
}

export default SectionHeader