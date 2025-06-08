import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { sideBarProjectArray } from '../components/projectArray';

class ClimateBootcamp2023 extends Component {
    render() {
        return (
            <div>
                <section className="project-hero acb-hero">
                    <div className="project-name">
                        <h2>ANAMBRA CLIMATE BOOTCAMP 2023</h2>
                    </div>
                </section>

                <div className="project-article-container">
                    <div className="gecci-project-article">
                        <div className="side-bar">
                            <h3>Other Projects</h3>
                            { sideBarProjectArray.map((project) => (
                                <div key={project.id} className='side-bar-project-list'>
                                    <div className="project-list">
                                        <Link to={project.url} >{project.title}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <article className="project-article">
                            <div className="article">
                                <h3>ANAMBRA CLIMATE BOOTCAMP 2023</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            At Green Environment and Climate change Initiative (GRENCHI), we believe that taking action to address climate change is crucial for a sustainable future. Our Climate BootCamp is an immersive program designed to empower young people with the knowledge and hands-on skills necessary to make a positive impact on the environment. 
                                            The first ever Climate Bootcamp for young people in Anambra State was held on 26th July 2023. It was an empowering day filled with enlightening activities for the invited 100 students across 7 schools in Anambra State. Schools in attendance were UNIZIK high school, Holy ghost Academy, Alexender school, Demonstration secondary school, Igwebuike secondary school, St John of God secondary school, and Capital City Secondary School. Also in attendance were Mrs Achugamonye Onyinye Miriam; the Director Forestry and Wildife Department Ministry of Environment Anambra State, Mrs Onuzulike Ifeoma; Climate Change Desk Officer Ministry of Environment, Dr. Uko Ibeabuchi; The Sub-Dean Faculty of Agriculture Nnamdi Azikiwe University, Awka, Dr. John Ogbodo; the Director of Sustainable TransEnvironment International Foundation, and Dr. Onyekachi Chukwu; Director Green Initiative for Humanitarian Aid and Development and other climate experts.
                                        </p>

                                        <div className="article-img article-img-alt">
                                            <img src="../img/ClimateBootcamp/acb-17.jpg" alt="The Founder/Director of GECCI Mrs Mmachukwu Obimdike, addressing the attendees of the Anambra Climate Bootcamp" />
                                        </div>

                                        <p>
                                            Exactly 11am the event kicked off with a welcome speech by the Founder/Director of GRENCHI; Mrs Mmachukwu Loretta Obimdike who welcomed everyone and highlighted the objectives and goal of the Climate Bootcamp.
                                            Climate Change presentation was taken by Mr Chukwu who offered the participants and students a comprehensive understanding of climate science, the causes and impacts of global warming, and practical solutions.
                                            <br />
                                            The Director Forestry and Wildlife Ministry of environment Anambra State; Mrs Achugamonye Onyinye Miriam in an interactive session briefly introduced the students to techniques of Nursery development. This session was designed to help the students in the development of their school mini-nursery/garden.
                                        </p>

                                        <div className="article-img">
                                            <img src="../img/ClimateBootcamp/acb-22.jpg" alt="Upcycling of a car tyre led by Mrs Mmachukwu Obimdike" />
                                        </div>

                                        <p>
                                            The students were asked to join any group from the 4 activities lined up for them (Upcycling, Nursery practices, building solar energy system for homes and environmental art)
                                            <br />
                                            <span>Activity 1: Upcycling:</span> Through innovative upcycling techniques, we encourage students to reduce waste and promote a circular economy.
                                            During this session, participants learnt the art of transforming discarded materials into useful and creative products. Used tyres were upcycled to creative tabletop.
                                        </p>

                                        <div className="article-img article-img-alt">
                                            <img src="../img/ClimateBootcamp/abc-nursery-22.png" alt="students learning about the significance of nurturing and promoting biodiversity through proper nursery practices and the need to venture into Nursery practices. Led by Mrs Umeh from the department of Forestry and Wildlife Nnamdi Azikewe University Awka." />
                                        </div>

                                        <p>
                                            <span>Activity 2:</span> In this session, students learnt about the significance of nurturing and promoting biodiversity through proper nursery practices and the need to venture into Nursery practices. 
                                        </p>

                                        <div class="article-img">
                                            <img src="../img/ClimateBootcamp/acb-19.jpg" alt="Our expert instructor guiding the students through the process of installing solar panels and emphasizing the importance of renewable energy sources." />
                                        </div>

                                        <p>
                                            <span>Activity 3:</span> Building Solar Energy System for Homes: Our expert instructors took the students through the process of installing solar panels, emphasizing the importance of renewable energy sources. By showcasing the benefits of solar power, we aim to inspire students to explore sustainable alternatives for energy production amongst the younger generation. 
                                        </p>

                                        <div className="article-img article-img-alt">
                                            <img src="../img/ClimateBootcamp/acb-21.jpg" alt="The students explororing the artistic side of environmental conservation. They are being guided through the process of painting a forest with a sunset background." />
                                        </div>

                                        <p>
                                            <span>Activity 4:</span> Environmental Art Painting: The students explored the artistic side of environmental conservation. During the painting sessions, students expressed their creativity while highlighting environmental issues and spreading awareness through meaningful artwork. 
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </article>

                    </div>
                </div>
            </div>
        );
    }
}

export default ClimateBootcamp2023;
