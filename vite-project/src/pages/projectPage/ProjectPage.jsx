import "./ProjectPage.css"
import { v4 as uuid } from "uuid"

const ProjectPage = (data) => {
    window.scrollTo(0, 0);
    const projectData = data.data

    console.log(projectData)

    const projectList = projectData && projectData.map(e => {
        return (
            <ul key={uuid()}>
                <li key={uuid()}>
                    <p>{e.year}</p>
                </li>
                <li key={uuid()}>
                    <p>{e.project}</p>
                </li>
                <li key={uuid()}>
                    <ul className="builtwithlist">
                        {e.builtWith.map(el => {
                            return (
                                <li key={uuid()}>
                                    <p>
                                        {el}
                                    </p>

                                </li>
                            )
                        })}
                    </ul>
                </li>
                <li key={uuid()}>
                    <a rel="noreferrer" target="_blank" href={e.sourceUrl}>
                        Github
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
                    </a>
                </li>
                <li key={uuid()}>
                    <a rel="noreferrer" target="_blank" href={e.liveUrl}>
                        view Site
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
                    </a>
                </li>
            </ul>
        )
    })


    return (

        <main className="projectPage">
            <h2>Projects Archive</h2>
            <div className="projectPageContent">
                <ul>
                    <li>
                        <h3>Year</h3>
                    </li>
                    <li>
                        <h3>Project</h3>
                    </li>
                    <li>
                        <h3>Built With</h3>
                    </li>
                    <li>
                        <h3>Source</h3>
                    </li>
                    <li>
                        <h3>Link</h3>
                    </li>
                </ul>
                {projectList}
            </div>
        </main>
    )
}

export default ProjectPage