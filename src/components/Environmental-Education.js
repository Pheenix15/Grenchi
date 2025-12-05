import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const EnvironmentalEducation = () => {

    return (
        <div>
            <section className="main-project-hero  environmental-education">
                <div className="project-name">
                    <h2>ENVIRONMENTAL EDUCATION</h2>
                </div>
            </section>

            <section>

                <div className="intro-container">
                    <div className="intro">
                        <div className="intro-txt">
                            <h3 className='heading text-green'>Environmental Education</h3>
                            <p>
                            GRENCHI is committed to fostering a culture of environmental stewardship through education. Our initiatives focus on educating the younger generation, particularly secondary school students, local communities, and youths to build a safe, green, and sustainable planet. Our educational framework strategically aligns with UNESCO's four pillars of Greening Education Partnership: Greening School, Greening Curriculum, Greening Teachers Training, and Greening Communities, alongside the Education for Sustainable Development initiative and the United Nations' Sustainable Development Goals, particularly SDG 4 (Quality Education) and SDG 13 (Climate Action). Through environmental education, we bridge the crucial gap between theoretical understanding and practical action, contributing meaningfully to global climate change mitigation efforts and sustainable development initiatives.
                            </p>
                        </div>

                        <div className="intro-img">
                            <img src="img/WorldEarthDay2024/WED24-4.jpg" alt="Students raising their hands to answer questions during World Earth Day Summit" />
                        </div>
                    </div>
                </div>

                <div className="gecci-main-projects">
                    <h4 className='heading text-green'>Our Environmental Education Activities</h4>
                    
                    <div className='project-container' >

                        <div className="project-box project-box-reverse">
                            <div className="project-video">
                                <iframe width="935" height="526" src="https://www.youtube.com/embed/oIj8y4AXNzk" title="Student Educational Trip to Lekki Conservation Centre, Lagos, Nigeria - GRENCHI #adventure" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>

                            <div className="project-info">
                                <h5 className='project-info-heading' >Students Visit to Nature Area</h5>
                                <p>As part of our hands-on environmental education program, students visited the Lekki Conservation Centre, an establishment of the Nigerian Conservation Foundation and renowned urban nature reserve in Lagos, Nigeria. The highlight of the trip was the exhilarating climb on the 401-meter-long, 22.5-meter-high canopy walkway - the longest in Africa. Nature-based learning like this builds curiosity, courage, and a deeper connection to the environment. It’s more than a trip for them, it’s a step toward raising the next generation of environmental stewards.<br />
                                We operate by the principle "If nature study does not make a child love nature, then it should cease"- Anna Botsford Comstock
                                </p>
                                
                            </div>

                        </div>

                        <div className="project-box">
                            
                            <div className="project-info">
                                <h5 className='project-info-heading' >Climate Teachers Training</h5>
                                <p>With this training, we empower teachers of our participating schools with the knowledge, tools, and confidence to integrate climate change education into classrooms. Through interactive sessions, practical resources, and hands-on activities, teachers become catalysts for environmental awareness and sustainability in their schools especially to environmental club members.
                                </p>
                                
                            </div>

                            <div className="project-img"><img src='img/Projects/CTT-1.jpg' alt='World Earth Day' /></div>
                        </div>


                        <div className="project-box">
                            <div className="project-img"><img src='img/Projects/idf.jpg' alt='World Forestry Day' /></div>
                            <div className="project-info">
                                <h5 className='project-info-heading' >World Forestry Day</h5>
                                <p>Forests provide a home to different species of animals including humans. Most times we do not link forests to our daily living. The shelter you have, the food you eat, the medicine you take for fever, the water you drink are all, the car you ride on are all products of the forest. Sustainable use and management of these resources will contribute to the well-being of the present and future generations.
                                <br />
                                In commemoration of IDF, Green Environment and Climate Change Initiative (GRENCHI) in collaboration with the Department of Forestry and Wildlife, Ministry of Environment Anambra State Nigeria marked the day with a WALK FOR ECOSYSTEM RESTORATION. The activity of the day was a way to create awareness of the importance of all types of forests and their resources to the general public.
                                </p>
                                <Link to='../Projects/WorldForestDay-2022'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                            </div>
                        </div>

                        <div className="project-box project-box-reverse">
                            <div className="project-info">
                                <h5 className='project-info-heading' >World Environment Day</h5>
                                <p>As we mark the World Environment Day today, June 5th, 2024, the focus is on the critical issues of land restoration, desertification, and drought. These challenges haven proven not to be just environmental concerns; they are existential threats that demand immediate attention and action. At Green Environment and Climate Change Initiative - GRENCHI , we believe in the power of collective action to protect and restore our planet for future generations.<br />
                                During the event, students showcased their innovative crafts, created through our engagement with them. They transformed PET bottles into hanging gardens, demonstrating creativity and environmental stewardship.
                                </p>
                                <Link to='../Projects/WorldEnvironmentDay-2024'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                            </div>

                            <div className="project-img"><img src='img/Projects/WED24-1.jpg' alt='World Environment Day' /></div>
                        </div>

                        <div className="project-box">
                            <div className="project-img"><img src='img/Projects/WED24-5.jpg' alt='World Earth Day' /></div>
                            <div className="project-info">
                                <h5 className='project-info-heading' >World Earth Day</h5>
                                <p>As we mark Earth Day 2024, the global theme "Planet vs. Plastics" starkly reminds us of the urgent need to address the environmental and health crises posed by plastic pollution. This year, Earth Day is about celebrating our planet and taking decisive steps to protect it from plastics' devastating impacts.<br/>
                                
                                Plastics have become an integral part of our daily lives, but their production and disposal have escalated to alarming levels. According to EARTHDAY.ORG, plastic production has surged to more than 380 million tons annually, surpassing the entire 20th century's output in just the last decade.</p>
                                <Link to='../Projects/WorldEarthDay-2024'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default EnvironmentalEducation;