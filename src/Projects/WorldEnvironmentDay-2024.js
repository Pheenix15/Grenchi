import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const WorldEnvironmentDay2024 = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero hero-wed">
                    <div className="project-name">
                        <h2>WORLD ENVIRONMENT DAY 2024</h2>
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
                                <h3>Student Workshop in Commemoration of World Environment Day 2024.</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p className="theme"><span className="bold">Theme:</span>Land Restoration, Desertification and Drought Resilience.</p>
                                        <p>
                                            As we mark the World Environment Day today, June 5th, 2024, the focus is on the critical issues of land restoration, desertification, and drought. These challenges haven proven not to be just environmental concerns; they are existential threats that demand immediate attention and action. At Green Environment and Climate Change Initiative - GRENCHI , we believe in the power of collective action to protect and restore our planet for future generations.   
                                        </p>

                                        <div className="article-video">
                                            <iframe src="https://www.youtube.com/embed/zDjT9mADr-s" title="World Environment Day 2024 Student Workshop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>


                                        <p className="bold">Students Innovation Showcase</p>
                                        <p>
                                            During the event, students showcased their innovative crafts, created through our engagement with them. They transformed PET bottles into hanging gardens, demonstrating creativity and environmental stewardship. These upcycled gardens not only added greenery but also highlighted practical ways to reuse plastic waste. Additionally, students converted plastic plates into functional lights, merging sustainability with utility. These projects exemplified the students' ingenuity and commitment to addressing environmental challenges through upcycling.              
                                        </p>

                                        <div className="article-img">
                                            <img src="../img/WorldEnvironmentDay24/WED24-5.jpg" alt="students at the student workshop" />
                                        </div>

                                    </div>                       
                                    <div className="article-gallary">
                                        <h4 className='heading'>Gallery</h4>
                                        <div className="swiper">
                                            <div className="slide-content">
                                                <div className="image-list swiper-wrapper">
                                                    <img src="../img/WorldEnvironmentDay24/WED24-2.jpg" className="sliding-img swiper-slide" alt="GRENCHI's assistant programme lead Enwereuzo Divinefavour speaking during the workshop" />
                                                    <img src="../img/WorldEnvironmentDay24/WED24-3.jpg" className="sliding-img swiper-slide" alt="The club facilitators, GRENCHI's assistant programme lead, with the student holding their craft during the workshop" />
                                                    <img src="../img/WorldEnvironmentDay24/WED24-5.jpg" className="sliding-img swiper-slide" alt="The club facilitators, GRENCHI's assistant programme lead with the student during the workshop" />
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

export default WorldEnvironmentDay2024;
