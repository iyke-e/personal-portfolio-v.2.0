import "./ProjectCard.css"
import PropTypes from 'prop-types'

const ProjectCard = ({ projectImg, projectName, projectDescription, enterStacks, sourceURL, liveURL }) => {
    return (
        <li className='projectCard'>
            <div>
                <div
                    className="projectImage"
                    style={{
                        backgroundImage: `url(${projectImg})`,
                    }}
                >
                </div>
                <h3>
                    {projectName}
                </h3>
                <p>{projectDescription}</p>
                <ul className="stackUsed">
                    {enterStacks}
                </ul>
            </div>
            <div className="projectLinks">
                <div >
                    <a href={sourceURL}>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_147_2)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.5 0C12.9184 0 16.5 3.67194 16.5 8.20234C16.5 11.8255 14.2104 14.8992 11.0336 15.9848C10.628 16.0656 10.484 15.8094 10.484 15.591C10.484 15.3206 10.4936 14.4374 10.4936 13.3398C10.4936 12.575 10.2376 12.0759 9.9504 11.8215C11.732 11.6183 13.604 10.9246 13.604 7.77422C13.604 6.87822 13.2936 6.14706 12.78 5.57266C12.8632 5.36546 13.1376 4.53116 12.7016 3.40156C12.7016 3.40156 12.0312 3.18178 10.504 4.24258C9.8648 4.06098 9.18 3.96961 8.5 3.96641C7.82 3.96961 7.136 4.06098 6.4976 4.24258C4.9688 3.18178 4.2968 3.40156 4.2968 3.40156C3.8624 4.53116 4.1368 5.36546 4.2192 5.57266C3.708 6.14706 3.3952 6.87822 3.3952 7.77422C3.3952 10.9166 5.2632 11.6209 7.04 11.8281C6.8112 12.0329 6.604 12.3942 6.532 12.9246C6.076 13.1342 4.9176 13.497 4.204 12.2434C4.204 12.2434 3.7808 11.4553 2.9776 11.3977C2.9776 11.3977 2.1976 11.3873 2.9232 11.8961C2.9232 11.8961 3.4472 12.1481 3.8112 13.0961C3.8112 13.0961 4.2808 14.5601 6.5064 14.0641C6.5104 14.7497 6.5176 15.3958 6.5176 15.591C6.5176 15.8078 6.3704 16.0615 5.9712 15.9855C2.792 14.9015 0.5 11.8263 0.5 8.20234C0.5 3.67194 4.0824 0 8.5 0Z" fill="#EBEBEB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_147_2">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Source</p>
                    </a>


                </div>
                <div>
                    <a href={liveURL}>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_77_795)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.1848 4.01925H3.1543C2.60431 4.01925 2.15798 4.46557 2.15798 5.01556V13.67C2.15798 14.22 2.60431 14.6664 3.1543 14.6664H11.8288C12.3788 14.6664 12.8251 14.22 12.8251 13.67V6.68586H14.1581V14.0017C14.1581 15.1044 13.2628 15.9997 12.1598 16H2.8233C1.72033 16 0.825012 15.1044 0.825012 14.0017V4.6839C0.825012 3.58092 1.72033 2.68561 2.8233 2.68561H10.1848V4.01925Z" fill="#EBEBEB" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.8177 5.77321H15.4827V2.27962L6.18492 11.5771L5.24094 10.6331L14.5391 1.33497H11.0445V0H16.817L16.8177 0.000333461V5.77321Z" fill="#EBEBEB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_77_795">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>
                            preview
                        </p>
                    </a>

                </div>
            </div>

        </li>
    )
}


ProjectCard.propTypes = {
    projectImg: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    enterStacks: PropTypes.any,
    sourceURL: PropTypes.string,
    liveURL: PropTypes.string,
}
export default ProjectCard