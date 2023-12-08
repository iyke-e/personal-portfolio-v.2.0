import { NavLink } from "react-router-dom";
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
        <>
            <header>
                <div className="logo">
                    <svg width="123" height="40" viewBox="0 0 123 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.9982 37H64.7099V32.1157H63.9982V37Z" fill="#EBEBEB" />
                        <path d="M76.4669 34.9416L77.9739 32.1157H77.1855L76.1111 34.2369L75.0366 32.1157H74.2482L75.7552 34.9416V37H76.4669V34.9416Z" fill="#EBEBEB" />
                        <path d="M89.7452 37H90.4568V35.4091L90.7917 34.9556L92.1453 37H93.0453L91.2313 34.3695L92.8988 32.1157H92.0825L90.4568 34.3346V32.1157H89.7452V37Z" fill="#EBEBEB" />
                        <path d="M104.113 37H107.002V36.3022H104.825V34.6486H106.862V33.9787H104.825V32.7995H106.96V32.1157H104.113V37Z" fill="#EBEBEB" />
                        <path d="M59.5853 11.0436C59.7697 11.0436 59.9283 11.11 60.0611 11.2428C60.1939 11.3756 60.2603 11.5379 60.2603 11.7297C60.2603 11.9141 60.1939 12.0727 60.0611 12.2055C59.9283 12.3383 59.7697 12.4047 59.5853 12.4047H48.686C48.4942 12.4047 48.332 12.3383 48.1992 12.2055C48.0664 12.0727 48 11.9141 48 11.7297C48 11.5379 48.0664 11.3756 48.1992 11.2428C48.332 11.11 48.4942 11.0436 48.686 11.0436H59.5853ZM59.5853 27.388C59.7697 27.388 59.9283 27.4543 60.0611 27.5871C60.1939 27.7199 60.2603 27.8785 60.2603 28.063C60.2603 28.2548 60.1939 28.4171 60.0611 28.5499C59.9283 28.6827 59.7697 28.7491 59.5853 28.7491H48.686C48.4942 28.7491 48.332 28.6827 48.1992 28.5499C48.0664 28.4171 48 28.2548 48 28.063C48 27.8785 48.0664 27.7199 48.1992 27.5871C48.332 27.4543 48.4942 27.388 48.686 27.388H59.5853ZM49.1231 19.426C49.1231 19.426 49.1554 19.3937 49.2199 19.3292C49.2845 19.2646 49.4127 19.225 49.6045 19.2102H58.6669C58.8587 19.2102 59.0209 19.2766 59.1537 19.4094C59.2865 19.5422 59.3529 19.7045 59.3529 19.8963C59.3529 20.0881 59.2865 20.2504 59.1537 20.3832C59.0209 20.516 58.8587 20.5824 58.6669 20.5824H49.5934C49.4237 20.575 49.2707 20.5068 49.1342 20.3777C48.9977 20.2486 48.9295 20.0881 48.9295 19.8963C48.9295 19.7119 48.994 19.5551 49.1231 19.426Z" fill="#EBEBEB" />
                        <path d="M76.7364 26.3256C76.7364 26.5248 76.681 26.6761 76.5704 26.7793C75.7442 27.4212 74.8664 27.9099 73.9369 28.2456C73.0074 28.5812 72.0263 28.7491 70.9935 28.7491C69.7911 28.7491 68.6625 28.5241 67.6076 28.074C66.5527 27.624 65.5937 26.9859 64.7306 26.1596C63.9044 25.2965 63.2663 24.3374 62.8163 23.2825C62.3664 22.2275 62.1414 21.0988 62.1414 19.8963C62.1414 17.4544 63.0044 15.3704 64.7306 13.6441C66.4642 11.9104 68.5518 11.0436 70.9935 11.0436C73.0959 11.0436 74.9659 11.7149 76.6036 13.0576C76.7364 13.1904 76.8028 13.3527 76.8028 13.5445C76.8028 13.7289 76.7364 13.8875 76.6036 14.0203C76.4708 14.1531 76.3122 14.2195 76.1278 14.2195C75.936 14.2195 75.7479 14.131 75.5635 13.9539C74.2873 12.9211 72.764 12.4047 70.9935 12.4047C68.928 12.4047 67.1613 13.1387 65.6933 14.6068C64.2327 16.0675 63.5024 17.8307 63.5024 19.8963C63.5024 21.9693 64.2327 23.7362 65.6933 25.1969C67.1539 26.6576 68.9206 27.388 70.9935 27.388C72.6164 27.388 74.077 26.9195 75.3754 25.9826V21.4898H71.5579C71.3661 21.4898 71.2056 21.4234 71.0765 21.2906C70.9474 21.1578 70.8829 20.9955 70.8829 20.8037C70.8829 20.6119 70.9474 20.4515 71.0765 20.3224C71.2056 20.1933 71.3661 20.1287 71.5579 20.1287H76.0614C76.2384 20.1287 76.4007 20.1951 76.5483 20.3279C76.6737 20.4681 76.7364 20.6267 76.7364 20.8037V26.3256Z" fill="#EBEBEB" />
                        <path d="M87.9897 11.2317C88.1299 11.1063 88.2885 11.0436 88.4655 11.0436C88.6573 11.0436 88.8196 11.1063 88.9524 11.2317C89.0262 11.3128 89.0815 11.4014 89.1184 11.4973L93.0133 25.5067L96.8972 11.4973C96.9341 11.394 96.9931 11.3018 97.0742 11.2206C97.1997 11.1026 97.3582 11.0436 97.55 11.0436C97.7418 11.0436 97.9023 11.11 98.0314 11.2428C98.1605 11.3756 98.225 11.5379 98.225 11.7297C98.225 11.8256 98.2066 11.9362 98.1697 12.0616L93.7215 28.1515C93.6772 28.3138 93.6035 28.4466 93.5002 28.5499C93.3526 28.6827 93.1903 28.7491 93.0133 28.7491C92.8215 28.7491 92.6592 28.6827 92.5264 28.5499C92.4232 28.4392 92.3494 28.3101 92.3051 28.1626L88.4655 14.308L84.648 28.1515C84.5964 28.3064 84.5189 28.4392 84.4156 28.5499C84.2755 28.6827 84.1132 28.7491 83.9288 28.7491C83.7444 28.7491 83.5858 28.6827 83.453 28.5499C83.3423 28.4392 83.2649 28.3101 83.2206 28.1626L78.7613 12.0616C78.7244 11.9362 78.706 11.8256 78.706 11.7297C78.706 11.5379 78.7724 11.3756 78.9052 11.2428C79.0379 11.11 79.2002 11.0436 79.392 11.0436C79.5838 11.0436 79.7461 11.1063 79.8789 11.2317C79.9527 11.3128 80.0043 11.4014 80.0338 11.4973L83.9288 25.5067L87.8237 11.4862C87.8459 11.4051 87.9012 11.3202 87.9897 11.2317Z" fill="#EBEBEB" />
                        <path d="M101.069 11.7297C101.069 11.5379 101.133 11.3756 101.262 11.2428C101.391 11.11 101.552 11.0436 101.744 11.0436C101.936 11.0436 102.098 11.11 102.231 11.2428C102.363 11.3756 102.43 11.5379 102.43 11.7297V28.063C102.43 28.2548 102.363 28.4171 102.231 28.5499C102.098 28.6827 101.936 28.7491 101.744 28.7491C101.552 28.7491 101.391 28.6827 101.262 28.5499C101.133 28.4171 101.069 28.2548 101.069 28.063V11.7297Z" fill="#EBEBEB" />
                        <path d="M106.657 14.6068V28.063C106.657 28.2548 106.592 28.4171 106.463 28.5499C106.334 28.6827 106.174 28.7491 105.982 28.7491C105.79 28.7491 105.628 28.6827 105.495 28.5499C105.362 28.4171 105.296 28.2548 105.296 28.063V11.7297C105.296 11.5379 105.362 11.3756 105.495 11.2428C105.628 11.11 105.79 11.0436 105.982 11.0436C106.255 11.0436 106.454 11.1616 106.579 11.3977L114.148 26.5469L121.716 11.3977C121.849 11.1616 122.052 11.0436 122.325 11.0436C122.517 11.0436 122.677 11.11 122.806 11.2428C122.935 11.3756 123 11.5379 123 11.7297V28.063C123 28.2548 122.935 28.4171 122.806 28.5499C122.677 28.6827 122.517 28.7491 122.325 28.7491C122.133 28.7491 121.971 28.6827 121.838 28.5499C121.705 28.4171 121.639 28.2548 121.639 28.063V14.6068L114.734 28.4281C114.602 28.6421 114.406 28.7491 114.148 28.7491C113.853 28.7491 113.643 28.6052 113.517 28.3175L106.657 14.6068Z" fill="#EBEBEB" />
                        <path d="M19.096 39.4677V35.9555C12.9063 35.736 7.6384 32.0483 5.09227 26.7801L19.096 18.7021V14.6193L3.907 23.3996C3.6436 22.2143 3.51191 20.985 3.51191 19.7558C3.51191 10.9754 10.404 3.86335 19.096 3.51214V0C8.47248 0.351216 0 9.04376 0 19.7558C0 30.4239 8.47248 39.1164 19.096 39.4677ZM21.2666 35.9156V39.4677C29.0281 39.2045 35.6494 34.4684 38.6312 27.7589H34.6847C33.5008 29.82 31.8783 31.618 29.9489 32.9774V6.44639C31.8783 7.80583 33.5008 9.6038 34.6847 11.6649H38.6312C35.6494 4.95539 29.0281 0.263119 21.2666 0V3.50823C23.0645 3.55209 24.8185 3.94677 26.4409 4.56071V34.8631C24.8185 35.477 23.0645 35.8717 21.2666 35.9156Z" fill="#EBEBEB" />
                    </svg>
                </div>

                <NavLink className="HomeArrow" to={"/"}>
                    <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icons1">
                            <path id="arrow-right" fillRule="evenodd" clipRule="evenodd" d="M22.6886 5.76313L18.5184 1.59293L20.1114 0L27 6.88865L26.9994 6.88921L27 6.88978L20.1114 13.7779L18.5184 12.1849L22.6875 8.01585H0V5.76313H22.6886Z" fill="#EBEBEB" />
                        </g>
                    </svg>
                    Portfolio
                </NavLink>
            </header>
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
            <footer>
                <ul className="social-icons">
                    <li>
                        <a href="">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6726 3.9848C17.6804 4.15822 17.6843 4.33245 17.6843 4.50744C17.6843 9.8453 13.621 16 6.19219 16C3.91094 16 1.7875 15.3313 0 14.1851C0.316398 14.2226 0.637497 14.2418 0.963682 14.2418C2.85625 14.2418 4.59764 13.5961 5.98047 12.5125C4.2125 12.48 2.72109 11.3121 2.20704 9.7074C2.45394 9.75468 2.70669 9.78007 2.96722 9.78007C3.33517 9.78007 3.69217 9.73048 4.03127 9.63828C2.18362 9.26713 0.790996 7.63475 0.790996 5.67772C0.790996 5.66053 0.790996 5.64373 0.79142 5.62694C1.33595 5.92927 1.95861 6.11093 2.62107 6.13201C1.53711 5.40782 0.824208 4.17147 0.824208 2.76991C0.824208 2.0297 1.02302 1.33595 1.37105 0.739444C3.36325 3.18317 6.33899 4.79098 9.69604 4.95973C9.6273 4.66402 9.59132 4.35583 9.59132 4.03905C9.59132 1.80858 11.3999 0 13.6304 0C14.7929 0 15.8421 0.490625 16.5788 1.27538C17.4991 1.09453 18.3632 0.758208 19.1436 0.295285C18.842 1.23866 18.2022 2.03004 17.3678 2.53003C18.185 2.43236 18.9639 2.21521 19.6881 1.89411C19.1468 2.70391 18.4616 3.41523 17.6726 3.9848Z" fill="#EBEBEB" />
                            </svg>
                        </a>


                    </li>
                    <li>
                        <a href="">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_38_135" fill="white">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.6 16H13.7102V10.3754C13.7102 8.90311 13.1017 7.89806 11.7637 7.89806C10.7403 7.89806 10.1711 8.5763 9.9062 9.22994C9.80686 9.46456 9.82239 9.79138 9.82239 10.1182V16H5.96877C5.96877 16 6.01845 6.0365 5.96877 5.13082H9.82239V6.83666C10.05 6.0908 11.2815 5.02632 13.2466 5.02632C15.6846 5.02632 17.6 6.58975 17.6 9.95634V16ZM2.07168 3.77128H2.04685C0.805082 3.77128 0 2.94038 0 1.88717C0 0.813468 0.828879 0 2.09548 0C3.36105 0 4.13923 0.811429 4.16406 1.88411C4.16406 2.93732 3.36105 3.77128 2.07168 3.77128ZM0.443921 5.13082H3.87432V16H0.443921V5.13082Z" />
                                </mask>
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.6 16H13.7102V10.3754C13.7102 8.90311 13.1017 7.89806 11.7637 7.89806C10.7403 7.89806 10.1711 8.5763 9.9062 9.22994C9.80686 9.46456 9.82239 9.79138 9.82239 10.1182V16H5.96877C5.96877 16 6.01845 6.0365 5.96877 5.13082H9.82239V6.83666C10.05 6.0908 11.2815 5.02632 13.2466 5.02632C15.6846 5.02632 17.6 6.58975 17.6 9.95634V16ZM2.07168 3.77128H2.04685C0.805082 3.77128 0 2.94038 0 1.88717C0 0.813468 0.828879 0 2.09548 0C3.36105 0 4.13923 0.811429 4.16406 1.88411C4.16406 2.93732 3.36105 3.77128 2.07168 3.77128ZM0.443921 5.13082H3.87432V16H0.443921V5.13082Z" fill="#ffffff" />

                            </svg>
                        </a>



                    </li>
                    <li>
                        <a href="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C18.6276 0 24 5.50792 24 12.3035C24 17.7383 20.5656 22.3487 15.8004 23.9771C15.192 24.0983 14.976 23.7141 14.976 23.3865C14.976 22.9809 14.9904 21.6562 14.9904 20.0098C14.9904 18.8626 14.6064 18.1138 14.1756 17.7322C16.848 17.4274 19.656 16.3869 19.656 11.6613C19.656 10.3173 19.1904 9.22058 18.42 8.35898C18.5448 8.04818 18.9564 6.79674 18.3024 5.10234C18.3024 5.10234 17.2968 4.77267 15.006 6.36387C14.0472 6.09147 13.02 5.95441 12 5.94961C10.98 5.95441 9.954 6.09147 8.9964 6.36387C6.7032 4.77267 5.6952 5.10234 5.6952 5.10234C5.0436 6.79674 5.4552 8.04818 5.5788 8.35898C4.812 9.22058 4.3428 10.3173 4.3428 11.6613C4.3428 16.3749 7.1448 17.4314 9.81 17.7422C9.4668 18.0494 9.156 18.5913 9.048 19.3869C8.364 19.7013 6.6264 20.2454 5.556 18.365C5.556 18.365 4.9212 17.1829 3.7164 17.0965C3.7164 17.0965 2.5464 17.0809 3.6348 17.8441C3.6348 17.8441 4.4208 18.2221 4.9668 19.6441C4.9668 19.6441 5.6712 21.8401 9.0096 21.0961C9.0156 22.1245 9.0264 23.0937 9.0264 23.3865C9.0264 23.7117 8.8056 24.0923 8.2068 23.9783C3.438 22.3523 0 17.7395 0 12.3035C0 5.50792 5.3736 0 12 0Z" fill="#EBEBEB" />
                            </svg>
                        </a>


                    </li>
                </ul>


                <small>
                    All rights reserved © <span>IYKE TECHNOLOGIES</span> , 2022-2023
                </small>
            </footer>
        </>


    )
}

export default ProjectPage