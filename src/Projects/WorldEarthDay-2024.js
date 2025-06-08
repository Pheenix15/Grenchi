import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const WorldEarthDay2024 = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero hero-wds">
                    <div className="project-name">
                        <h2>WORLD EARTH DAY 2024</h2>
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
                                <h3>Earth Day Student Summit</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p className="theme"><span className='bold'>Theme:</span>Planet vs Plastic.</p>
                                        <p>
                                            As we mark Earth Day 2024, the global theme "Planet vs. Plastics" starkly reminds us of the urgent need to address the environmental and health crises posed by plastic pollution. This year, Earth Day is about celebrating our planet and taking decisive steps to protect it from plastics' devastating impacts.
                                            <br />
                                            <br />
                                            Plastics have become an integral part of our daily lives, but their production and disposal have escalated to alarming levels. According to EARTHDAY.ORG, plastic production has surged to more than 380 million tons annually, surpassing the entire 20th century's output in just the last decade. This rapid expansion is fueled by petrochemical industries known for their toxic emissions, spills, and explosions, often located in the poorest corners of the earth. The consequences of these industries are far-reaching, affecting not only the environment but also human health.
                                        </p>

                                        <div className="article-img">
                                            <img src="../img/WorldEarthDay2024/WED24-4.jpg" alt="Students raising teir hands to answer a question from Dr. Uko Ibeabuchi" />
                                        </div>
                                        
                                        <h4 className="bold">Earth Day Student Summit</h4>
                                        <p>
                                            During the Earth Day Student Summit, held in commemoration of the United Nations World Earth Day, student participants from various schools delivered impactful presentations, demonstrating actions to curb plastic pollution. The session was vibrant with innovative projects where students showcased creative solutions to reduce plastic use and promote recycling. Educational workshops provided interactive experiences, teaching participants about the life cycle of plastics and their environmental impact. Community engagement initiatives were highlighted, emphasizing the importance of collective action in reducing plastic waste. Expert panels featuring environmental specialists offered insights into the latest research and strategies for combating plastic pollution.
                                        </p> 

                                    </div>                       
                                    <div className="article-gallary">
                                        <h4 className='heading'>Gallery</h4>
                                        <div className="swiper">
                                            <div className="slide-content">
                                                <div className="image-list swiper-wrapper">
                                                    <img src="../img/WorldEarthDay2024/WED24-2.jpg" className="sliding-img swiper-slide" alt="Students of St. Patricks Secondary school presenting on World earth day 2024" />
                                                    <img src="../img/WorldEarthDay2024/WED24-3.jpg" className="sliding-img swiper-slide" alt="Dr. Uko Ibeabuchi speaking on the the dangers of plastic pollution" />
                                                    <img src="../img/WorldEarthDay2024/WED24-4.jpg" className="sliding-img swiper-slide" alt="Students raising their hands to answer a question from Dr. Uko Ibeabuchi" />
                                                    <img src="../img/WorldEarthDay2024/WED24-5.jpg" className="sliding-img swiper-slide" alt="GECCI's programme lead, Dr. Oluropo Apalowo, addressing the students during the event." />
                                                </div>
                                            </div>
                                            <div className="swiper-button-next swiper-btn"></div>
                                            <div className="swiper-button-prev swiper-btn"></div>
                                            <div className="swiper-pagination"></div>
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

export default WorldEarthDay2024;
