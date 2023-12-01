import PropTypes from 'prop-types'

import "./TechMiniCard.css"
const TechMiniCard = ({ stackImg, stackName }) => {
    return (
        <li className='stackItem'>
            <img src={stackImg} alt="" />
            <p>{stackName}</p>
        </li>
    )
}


TechMiniCard.propTypes = {
    stackImg: PropTypes.string.isRequired,
    stackName: PropTypes.string.isRequired
}


export default TechMiniCard