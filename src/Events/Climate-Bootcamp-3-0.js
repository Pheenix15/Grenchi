import React from 'react';
import { Link } from 'react-router-dom';
import '../Projects/ProjectArticle.css'
import Button from '../components/Button';
import { eventsArray } from '../components/projectArray';

const ClimateBootcamp2025Application = () => {
        return (
            <div>
                <section className="project-hero Bootcamp-3-0-Application">
                    <div className="project-name">
                        <h2>Climate Bootcamp 3.0</h2>
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
                                <h3>Climate Bootcamp 3.0 Mini Grant Application</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            <span className="bold">Theme: Promoting Young Innovators for a Progressive Future</span>
                                            <br />
                                            <br />
                                            Young people are the creative force behind tomorrow’s climate solutions. With the escalating impacts of climate change in Nigeria and globally, it is essential to invest in nurturing innovation, environmental responsibility, and green skills among youth. Building on the success of our Climate Bootcamp 1.0 and 2.0, Climate Bootcamp 3.0 will scale up its impact by engaging more students and expanding the innovation pipeline.
                                            <br />
                                            <br />
                                            This edition will center on promoting youth-led innovation in climate action, circular economy, renewable energy, and sustainable agriculture, which will empower youngsters to imagine and build a progressive, resilient, and inclusive future.
                                            
                                            <h4>Program Activities:</h4>
                                            <ul>
                                                <li>Green Skill Training</li>
                                                <li>Environmental-STEM Challenge</li>
                                                <li>Competitions, etcetera</li>
                                            </ul>
                                            <br /> 
                                        </p>

                                        <h3>Environmental-STEM Challenge:</h3>

                                        <p>
                                            This project is part of the activity for the Climate Bootcamp 3.0 organized and hosted by the Green Environment and Climate Change Initiative (GRENCHI) in Anambra State Nigeria and mini-grant sponsored by the Onyangore Award for E-STEM Innovation.
                                            <br />
                                            <br />
                                            <h4>The Onyangore Award for E-STEM Innovation</h4> 
                                            In honor of the 20th anniversary of the passing of Mr. Benedict Onyangore Onyonka - a passionate advocate for education and a tireless champion of environmental preservation, we are proud to announce the launch of the Onyangore Award for E-STEM Innovation. This special award is presented courtesy of Mrs. Martha Onyangore and her children: Cynthia, Richard, Purity, and Faith. The award seeks to keep Mr. Onyangore’s legacy alive through inspiring the next generation to engage in meaningful action for education, environmental sustainability, and climate resilience.
                                            <br />
                                            <br />
                                            Are you passionate about making a positive impact on the environment in your school? This grant presents a unique opportunity for students who are members of environmental club to secure funding and implement their E-STEM project within their school.

                                            <h4>Award Prizes:</h4>
                                            <ul>
                                                <li><span className="bold">1st Place:</span> ₦200,000</li>
                                                <li><span className="bold">2nd Place:</span> ₦170,000</li>
                                                <li><span className="bold">3rd Place:</span> ₦150,000</li>
                                            </ul>

                                            <h4>Eligibility and Requirement</h4>
                                            <ol>
                                                <li>Applicant(s) must be based in Anambra State.</li>
                                                <li>The project team must be between the ages of 10 and 18 years old.</li>
                                                <li><span className="bold">Only one application per school.</span> Each environmental club from a school should collaborate and submit a single application. Multiple applications from the same school will result in automatic disqualification.</li>
                                                <li>Schools without an existing environmental club can also apply, provided they commit to starting the club before the bootcamp. If you require assistance, you can contact us.</li>
                                                <li>The lead applicant (who must be a student) and other team members must be available during the Anambra Climate Bootcamp for the pitching competition.</li>
                                                <li>Three winners will be announced after the pitching competition and awarded the mini-grant to implement their projects.</li>
                                                <li>The project must be completed within four (4) months of receiving the grant.</li>
                                            </ol>

                                            <h4>Timeline:</h4>
                                            <ol>
                                                <li><span className="bold">Application Opens:</span> 9th June 2025</li>
                                                <li><span className="bold">Application Closes:</span> 30th June 2025</li>
                                                <li><span className="bold">Notification of First-Stage Winners:</span> 1st July 2025</li>
                                                <li><span className="bold">Second Stage:</span>Finalists will pitch their projects during the Anambra Climate Bootcamp 3.0, where a team of judges will assess their proposals.</li>
                                            </ol>
                                        </p>
                                        

                                        <a class="gecci-link" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfwbkB2b13xZTXXtL5bGmPfLKZ3Dh2KRV34cfF0ILzwMTSqkA/viewform?usp=header"><Button type="button">Click Here to Apply</Button></a>

                                        <p style={{marginTop:'25px'}} >NB: The awarded funds must be used to implement the students' winning environmental innovation projects within the school, with progress reports submitted to GRENCHI.</p>
                                        
                                    </div>
                                </div>
                            </div>

                        </article>

                    </div>
                </div>
            </div>
        );
    }

export default ClimateBootcamp2025Application;
