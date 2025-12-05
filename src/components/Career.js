import '../Projects/ProjectArticle.css'
import Button from '../components/Button';



const Career = () => {
    return (
        <div>
            <section className="project-hero Career">
                <div className="project-name">
                    <h2>Career</h2>
                </div>
            </section>

            <div className="project-article-container">
                <div className="gecci-project-article career-article ">
                    {/* <div className="side-bar">
                        <h3>Past Events</h3>
                        { eventsArray.map((project) => (
                            <div key={project.id} className='side-bar-project-list'>
                                <div className="project-list">
                                    <Link to={project.url} >{project.title}</Link>
                                </div>
                            </div>
                        ))}
                    </div> */}

                    <article className="project-article">
                        <div className="article-article-title">
                            <h3>Call for Application: Communications and Advocacy Officer</h3>
                            <div className="article-content">
                                <div className="article-text">
                                    <p>
                                        The Green Environment and Climate Change Initiative (GRENCHI) is inviting applications for the position of Communications and Advocacy Officer to strengthen our public engagement, drive storytelling and advocacy efforts. This strategic role is central to advancing GRENCHI’s mission, requiring exceptional communication skills, strong analytical thinking and the ability to develop compelling content that strengthens engagement with communities, schools, stakeholders and partners. The ideal candidate, with a passion for environmental sustainability and climate action will support promotion of GRENCHI’s programmes across diverse platforms with professionalism and creativity.
                                    </p>

                                    <div className="career-buttons">
                                        <a class="gecci-link" target="_blank" rel="noreferrer" href=" https://drive.google.com/file/d/1szm0w85ncjeFUOk2c0Dp6Wof4c7rSaoF/view?usp=drive_link "><Button>Click here for more details</Button></a>

                                        <a class="gecci-link" target="_blank" rel="noreferrer" href=" https://docs.google.com/forms/d/e/1FAIpQLSfZvE8nlLNLLEaoEjtYUDf5J6I5EmYZqxsdmpRHvsWlBEen5A/viewform?usp=dialog "><Button>Click here to Apply</Button></a>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>

                    </article>

                </div>
            </div>
        </div>
    )
}

export default Career