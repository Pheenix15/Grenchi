import React from 'react';
import { Link } from 'react-router-dom';
import {climateBootcampArray} from './projectArray';
import './Projects.css';

const ClimateBootcamp = () => {

    return (
        <div>
            <section className="main-project-hero climate-bootcamp">
                <div className="project-name">
                    <h2>CLIMATE BOOTCAMP</h2>
                </div>
            </section>

            <section>

                <div className="intro-container">
                    <div className="intro">
                        <div className="intro-txt">
                            <h3 className='heading text-green'>Climate Bootcamp</h3>
                            <p>
                            Our annual bootcamp for secondary schools remains one of our key impact events. It is more than just programs, they are incubators for the next generation of eco-warriors. Designed to be dynamic, immersive, and inspiring the bootcamps bring together students from different schools in an energizing environment where they learn, collaborate, compete, and innovate. Through hands-on activities like learning to build solar-powered models, conducting waste transformation, and creating artistic expressions of nature, students gain practical skills that translate into real-world action. Expert-led workshops on climate science, and sustainable living deepen their understanding, while inter-school competitions and creative projects ignite their passion for protecting the planet. The impact of our boot camps leaves students with a toolkit of ideas and initiatives, which they implement in their various schools. These young leaders become ambassadors of sustainability, spreading awareness and inspiring their peers, families, and neighborhoods to take action. GRENCHI’s bootcamps also foster a sense of global citizenship, connecting students to broader movements like the UN Sustainable Development Goals (SDGs) and UNESCO’s Education for Sustainable Development. We remain passionate about empowering students to see themselves as part of a larger solution and in nurturing this wave of young changemakers because when we invest in them, we invest in the future of our planet.
                            </p>
                        </div>

                        <div className="intro-img">
                            <img src="img/Climate-Bootcamp-2024/CB-2024-8.jpg" alt="Student presenting at the climatebootcamp 2024" />
                        </div>
                    </div>
                </div>

                <div className="gecci-main-projects">
                    <h4 className='heading text-green'>Our Climate Bootcamp Activities</h4>    
                    <div className='project-container' >
                        {/* BOOTCAMP 2025 */}
                        <div className="project-box">
                            <div className="project-img"><img src='img/Climate-Bootcamp-2025/CB-2025-1.jpg' alt='Anambra Climate Bootcamp 2023' /></div>
                            <div className="project-info">
                                <h5 className='project-info-heading' >Climate Bootcamp 2025</h5>
                                <p>With the stark realization that young people are the creative force behind today’s climate solutions, we organized the <span className='bold' >Climate Bootcamp 3.0</span> to empower, equip, and elevate secondary school students as catalysts for environmental change. This year’s edition focused on building practical green skills, encouraging innovation, and fostering a deep sense of environmental responsibility among youth.</p>
                                <Link to='../Projects/ClimateBootcamp-2025'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                            </div>
                        </div>

                        {/* BOOTCAMP 2024 */}
                        <div className="project-box project-box-reverse">
                            <div className="project-info">
                                <h5 className='project-info-heading' >Climate Bootcamp 2024</h5>
                                <p>On July 24, 2024, the Climate Bootcamp 2.0, an environmental education event organized by the Green Environment and Climate Change Initiative (GRENCHI) with support from The Movement Trust and partnership with the Nigeria Conservation Foundation (NCF), brought together 73 students from seven secondary schools in Awka at the Ekwueme Centre for Multi-Disciplinary Research, Nnamdi Azikiwe University. This event aimed to inspire and equip young environmental leaders with practical knowledge and skills to drive environmental actions.</p>
                                <Link to='../Projects/ClimateBootcamp-2024'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                            </div>
                            <div className="project-img"><img src='img/Projects/CB-2024-5.jpg' alt='Anambra Climate Bootcamp 2023' /></div>
                        </div>
                        {/* BOOTCAMP 2023 */}
                        <div className="project-box">
                            <div className="project-img"><img src='img/Projects/acb-19.jpg' alt='Anambra Climate Bootcamp 2023' /></div>
                            <div className="project-info">
                                <h5 className='project-info-heading' >Climate Bootcamp 2023</h5>
                                <p>At Green Environment and Climate change Initiative (GRENCHI), we believe that taking action to address climate change is crucial for a sustainable future. Our Climate BootCamp is an immersive program designed to empower young people with the knowledge and hands-on skills necessary to make a positive impact on the environment. The first ever Climate Bootcamp for young people in Anambra State was held on 26th July 2023. It was an empowering day filled with enlightening activities for the invited 100 students across 7 schools in Anambra State.</p>
                                <Link to='../Projects/ClimateBootcamp-2023'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                            </div>
                        </div>

                    </div>
                       
                </div>
            </section>
        </div>
    );
}

export default ClimateBootcamp;