import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const WorldForestDay2022 = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero hero-idf">
                    <div className="project-name">
                        <h2>WORLD FORESTRY DAY 2022</h2>
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
                                <h3>INTERNATIONAL DAY OF FORESTS, 21st March 2022.</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p className="bold"><span className="bold">Theme:</span>Forest and Sustainable Production and Consumption.</p>
                                        <p>
                                            In commemoration of IDF, Green Environment and Climate Change Initiative (GRENCHI) in collaboration with the Department of Forestry and Wildlife, Ministry of Environment Anambra State Nigeria marked the day with a WALK FOR ECOSYSTEM RESTORATION. The activity of the day was a way to create awareness of the importance of all types of forests and their resources to the general public.
                                            <br />
                                            <br />
                                            <span>Forests, a Precious Ecosystem</span><br />
                                            Forests provide a home to different species of animals including humans. Most times we do not link forests to our daily living. The shelter you have, the food you eat, the medicine you take for fever, the water you drink are all, the car you ride on are all products of the forest. Sustainable use and management of these resources will contribute to the well-being of the present and future generations.
                                            <br />
                                            Forests also play an important part in combating climate change. The trees serve as the natural means to sink in carbon in the atmosphere thereby purifying the air we breathe for healthy living.
                                            <br />
                                            <br />
                                            Forests provide jobs for 80% of people on earth thereby alleviating poverty.   
                                        </p>

                                        <div className="article-img">
                                            <img src="../img/InternationalDayOfForests/IDF4.jpeg" alt="A Beautiful Rainforest" />
                                        </div>                                        

                                    </div>                       
                                </div>
                            </div>

                        </article>

                    </div>
                </div>
            </div>
        );
    }

export default WorldForestDay2022;
