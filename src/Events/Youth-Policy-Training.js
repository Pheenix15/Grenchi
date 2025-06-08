import React from 'react';
import { Link } from 'react-router-dom';
import '../Projects/ProjectArticle.css'
import { eventsArray } from '../components/projectArray';

const YouthPolicyTraining = () => {
        return (
            <div>
                <section className="project-hero youth-policy-hero">
                    <div className="project-name">
                        <h2>GRENCHI Youth Policy Training</h2>
                    </div>
                </section>

                <div className="project-article-container">
                    <div className="gecci-project-article">
                        <div className="side-bar">
                            <h3>Past Events</h3>
                            { eventsArray.map((project) => (
                                <div key={project.id} className='side-bar-project-list'>
                                    <div className="project-list">
                                        <Link to={project.url} >{project.title}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <article className="project-article">
                            <div className="article">
                                <h3>GRENCHI Youth Policy Training</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            Green Environment and Climate Change Initiative (GRENCHI) is excited to announce a unique program tailored for the youth of Nigeria. It aims to empower youth with the knowledge and skills necessary to actively contribute to climate protection and sustainability efforts in Nigeria.
                                            <br />
                                            <br />
                                            <span className="bold">Theme:</span> Building Youth Capacity for Climate Action in Nigeria.
                                            <br />
                                            <br />
                                            <span className="bold">Objective:</span> The Primary objective of the program is to engage and educate the youth of Nigeria on policies and strategies related to climate protection and sustainability. By fostering a deep understanding of these issues, GRENCHI aims to equipe participants with the tools they need to become proactive advocates and agents of change in their communities.
                                            <br />
                                            <br />
                                            <h5>WHAT TO EXPECT</h5>
                                            <span className="bold">Educational Workshops:</span><br /> In-depth sessions on climate change, its impact on Nigeria, and how youth can get involved.
                                            <br />
                                            <br />
                                            <span className="bold">Policy Analysis:</span><br /> Understanding Nigeria Policy Framework on Climate Change.
                                            <br />
                                            <br />
                                            <span class="bold">Project Development:</span><br /> Participants will have the opportunity to develop a project. There will be Guidance to help transform ideas into impactful projects.
                                            <br />
                                            <br />
                                            <span className="bold">Networking and Collaboration:</span><br /> Opportunities for participants to connect with like-minded individuals passionate about climate action.
                                            <br />
                                            <br />
                                            <h5>Benefits</h5>
                                            Accomodation
                                            <br />
                                            Feeding
                                            <br />
                                            Certificate of Participation
                                            <h5>APPLICATION PROCESS</h5>
                                            Interested youth between (18 - 35yrs) can apply for the program by submitting an online application form available on the GRENCHI website. The application should include a brief personal statement, expressing the applicants motivation, and a vision for contributing to climate action in Nigeria.
                                            <br />
                                            <br />
                                            <span className="bold">Duration:</span><br />
                                            It's a two-day program scheduled to run from 9th - 10th Feburary 2024. <br />
                                            Venue details, and other logistics will be communicated to selected participants upon acceptance into the program.
                                            <br />
                                            <br />
                                            <span className="bold">Location:</span><br />
                                            Awka, Anambra State Nigeria
                                            <br />
                                            <br />
                                            <span className="bold">Deadline:</span><br />
                                            Applications are open until the 5th of January 2024.
                                        </p>
                                        <a className="gecci-link" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSc5tuCWEDXMcHhJde1aWF-ff9j0vkKYzgPTEHc0gqAMfGVROA/viewform">Click Here to Apply</a>
                                        
                                    </div>
                                </div>
                            </div>

                        </article>

                    </div>
                </div>
            </div>
        );
    }

export default YouthPolicyTraining;
