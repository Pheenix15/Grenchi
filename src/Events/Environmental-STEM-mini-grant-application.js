import React from 'react';
import { Link } from 'react-router-dom';
import '../Projects/ProjectArticle.css'
import Button from '../components/Button';
import { eventsArray } from '../components/projectArray';

const EnvironmentalStemMiniGrantApplication = () => {
        return (
            <div>
                <section className="project-hero Bootcamp-2-0-Application">
                    <div className="project-name">
                        <h2>Environmental-STEM mini-grant</h2>
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
                                <h3>Environmental-STEM mini-grant</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            <span className="bold">This  project is part of the activity  for the Anambra Climate Bootcamp organized and hosted by the Green Environment and Climate Change Initiative (GRENCHI) in Anambra State Nigeria.</span>
                                            <br />
                                            <br />
                                            Are you passionate about making a positive impact on the environment in your school? This grant presents a unique opportunity for students who are members of environmental club in their school to secure funding and implement their E-STEM initiatives in the school. The project can be a recycling program, energy project, school garden, or awareness campaign. This mini-grant is designed to help you make a meaningful difference in your school community while gaining valuable project management experience. Apart from the financial aid, we will also offer technical support to bring the project to fruition. Our aim is to support your innovative ideas and empower you to take environmental actions.
                                            <br />
                                            <br />
                                            Application opens from 26th May 2024 and closes on the 27th June 2024. Successful applicants for the first stage will be notified by 1st July 2024. The second and final stage will be during the Anambra Climate Bootcamp where the first stage winners will be required to pitch their innovation and a team of experts will select three winners. The first winning project would receive <span className="bold">&#8358;100,000 naira</span> while the second and third winner would receive <span className="bold"> &#8358;80,000 and &#8358;70,000 naira </span> respectively to implement the projects in their school.
                                            <br />
                                            <br />
                                            <h4>Eligibility and Requirement
                                            </h4>
                                            <ol>
                                                <li>Applicant(s) must be based in Anambra State.
                                                </li>
                                                <li>The project team must be between the ages of 10 and 18 years old.
                                                </li>
                                                <li>Only one application per school. Each environmental club from a school should collaborate and submit a single application. <span className="bold"> Multiple applications from the same school will result in automatic disqualification.</span>
                                                </li>
                                                <li>Schools without an existing environmental club can also apply, provided they commit to starting the club before the bootcamp. If you require assistance, you can contact us.
                                                </li>
                                                <li> The lead applicant (who must be a student) and other team members must be available during the Anambra Climate Bootcamp for the pitching competition.
                                                </li>
                                                <li>Three winners will be announced after the pitching competition and awarded the mini-grant to implement their projects.
                                                </li>
                                                <li>The project must be completed within four (4) months of receiving the grant.
                                                </li>
                                            </ol>
                                            <br /> 
                                        </p>
                                        
                                        <div>
                                            <span className="bold">Location:</span>
                                            Anambra State
                                            <br />
                                            <br />
                                            <span className="bold">Grant call opens:</span>
                                            26th May, 2024
                                            <br />
                                            <br />
                                            <span className="bold">Deadline:</span>
                                            27th June, 2024
                                            <br />
                                            <br />
                                            <span className="bold">Grant up to:</span>
                                            &#8358;100,000 naira
                                        </div>

                                        <a class="gecci-link" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd0OFaUpq6iDqHK2vcqlKWgj0GpwW3Zzt7-81HRMImT_jFqiw/viewform?usp=pp_url"><Button type="button">Click Here to Apply</Button></a>
                                        
                                    </div>
                                </div>
                            </div>

                        </article>

                    </div>
                </div>
            </div>
        );
    }

export default EnvironmentalStemMiniGrantApplication;
