import React from 'react';
import { Link } from 'react-router-dom';
import {natureLabProjectArray} from './projectArray';
import './Projects.css';

const NatureLabProject = () => {

    return (
        <div>
            <section className="main-project-hero blog-hero">
                        <div className="project-name">
                            <h2>NATURE LAB PROJECT</h2>
                        </div>
            </section>

            <section>

                <div className="intro-container">
                    <div className="intro">
                        <div className="intro-txt">
                            <h3 className='heading text-green'>Nature Lab Project</h3>
                            <p>
                            Our Nature Lab projects are designed to ignite curiosity and foster a deep connection with the natural world. In schools, we create interactive, hands-on learning environments where students can explore, conduct experiments in established nurseries, and understand the delicate balance of nature. Through activities like raising nurseries, water conservation projects, climate studies, upcycling, and recycling, we empower young minds to see themselves as guardians of the planet. Our curriculum allows for student innovation where they receive grants to bring ideas on environmentally friendly solutions into reality. Beyond the classroom, Nature Lab extends into communities, offering participatory research and outdoor experiences that engage people of all ages in environmental conservation.
                            </p>
                        </div>

                        <div className="intro-img">
                            <img src="img/NLP/NLP-5.jpg" alt="Student tending to seedlings" />
                        </div>
                    </div>
                </div>

                <div className="gecci-main-projects">
                    <h4 className='heading text-green'>Nature Lab Projects</h4>
                    <div className="projectContainer">
                        {natureLabProjectArray.map((natureLabProjectArray) => (
                            <div key={natureLabProjectArray.id} >
                                <Link to={natureLabProjectArray.url}>
                                    <div className="project-array-box">
                                        <div className="project-array-img"><img src={natureLabProjectArray.image} alt={natureLabProjectArray.title} /></div>
                                        <div className="project-array-info">
                                            <h5 className='project-info-heading text-green' >{natureLabProjectArray.title}</h5>
                                        </div>
                                    </div>
                                    
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NatureLabProject;