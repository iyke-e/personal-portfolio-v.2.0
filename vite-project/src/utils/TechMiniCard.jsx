import PropTypes from 'prop-types'

import "./TechMiniCard.css"
const TechMiniCard = ({ stackImg, stackName }) => {
    return (
        <div className='stackItem'>
            <div className='stackImg'
                style={{
                    backgroundImage: `url(${stackImg})`
                }}>

            </div>


            <p>{stackName}</p>



        </div>
    )
}


TechMiniCard.propTypes = {
    stackImg: PropTypes.string.isRequired,
    stackName: PropTypes.string.isRequired
}


export default TechMiniCard