import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const YouthClimatePolicy = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero Ycpt-hero">
                    <div className="project-name">
                        <h2>Youth Climate Policy Training 2024</h2>
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
                                <h3>Youth Climate Policy Training 2024</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            On the 9th and 10th of February 2024, we hosted the first ever Youth Climate Policy Training (YCPT) in Anambra State, Nigeria with target towards empowering Nigerian youths with the knowledge and understanding of Nigerians Nationally Determined Contribution (NDCs), Climate Change Act and National Forest Policy. 
                                            <br />
                                            <br />
                                            Over the course of two days, participants engaged in interactive workshops, expert-led discussions, and hands-on activities aimed at deepening their understanding of climate policy and empowering them to drive meaningful change in their communities.
                                            The program received more than 200 applications and out of this pool of applications, 21 outstanding individuals were selected for the training. The diversity of this training was evidently shown in the mix of participants present. The training comprised youths from different parts of Nigeria including Bauchi, Niger, Plateau, Oyo, Enugu, Anambra and Imo state.
                                        </p>
                                        <div className="article-video">
                                            <iframe src="https://www.youtube.com/embed/CkABXpIqab8" title="Youth Climate Policy Training held in Awka, Anambra State, Nigeria Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                                            
                                    <div className="article-gallary">
                                        <h4 className='heading' >Gallery</h4>
                                        <div className="swiper">
                                            <div className="nursery-images slide-content">
                                                <div className="image-list swiper-wrapper">
                                                    <img src="../img/YCPT/ycpt-2.jpg" className="sliding-img swiper-slide" alt="Youth brainstoming session" />
                                                    <img src="../img/YCPT/ycpt-3.jpg" className="sliding-img swiper-slide" alt="The director of Forestry, Anambra state ministry of Environment speaking at the event" />
                                                    <img src="../img/YCPT/ycpt-4.jpg" className="sliding-img swiper-slide" alt="Team GRENCHI" />
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

export default YouthClimatePolicy;
