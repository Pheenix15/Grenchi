import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const EbenebeCommunityEngagement = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero Ece-hero">
                    <div className="project-name">
                        <h2>Ebenebe Community Engagement</h2>
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
                                <h3>Ebenebe Community Engagement</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p className="bold">Building Climate Resilience in Ebenebe: A Transformative Workshop by GRENCHI.</p>
                                        <p>
                                            Ebenebe is an agrarian community located in Awka North Local Government Area, Anambra State, Nigeria, with a population of 45,897, as recorded in the 2006 Nigerian census. The community is composed of eight villages, each containing several hamlets. One of the notable natural features of Ebenebe is the Nkachu-Ituku Forest Reserve, located in Umuoye village. This 109.67-hectare reserve is officially protected but is currently under a looming threat from development, which calls for urgent action. The community also faces various environmental challenges such as changes in precipitation patterns and other climate-related threats.
                                        </p>

                                        <h4 className="bold">Our Mission</h4>

                                        <p>Recognizing these challenges, our organization has initiated a comprehensive community development project aimed at building resilience against climate change and preventing deforestation. Our goal is to empower the Ebenebe community to sustainably manage their natural resources while improving their overall quality of life.</p>

                                        <div className="article-img">
                                            <img src="../img/EbenebeCommunityEngagement/ECE-4.jpg" alt="Dr.Ropo Engaging with the people of Ebenebe." />
                                        </div>
                                        
                                        <h4 className="bold">Community Engagement</h4>

                                        <p>
                                            We engaged with the Ebenebe community through a variety of impactful initiatives aimed at fostering resilience against climate change and combating deforestation. Our awareness programs included workshops and seminars to educate the residents on the importance of forest conservation and sustainable agricultural practices. We introduced sustainable farming techniques, such as agroforestry, to help maintain their agrarian lifestyle while protecting the environment.
                                        </p>
                                    </div>                       
                                    <div className="article-gallary">
                                        <h4 className='heading'>Gallery</h4>
                                        <div className="swiper">
                                            <div className="slide-content">
                                                <div className="image-list swiper-wrapper">
                                                    <img src="../img/EbenebeCommunityEngagement/ECE-1.jpg" className="sliding-img swiper-slide" alt="DivineFavour Engaging with the people of Ebenebe" />
                                                    <img src="../img/EbenebeCommunityEngagement/ECE-2.jpg" className="sliding-img swiper-slide" alt="Dr.Ropo Engaging with the people of Ebenebe" />
                                                    <img src="../img/EbenebeCommunityEngagement/ECE-3.jpg" className="sliding-img swiper-slide" alt="Dr.Ropo Engaging with the people of Ebenebe" />
                                                    <img src="../img/EbenebeCommunityEngagement/ECE-4.jpg" className="sliding-img swiper-slide" alt="Dr.Ropo Engaging with the people of Ebenebe" />
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

export default EbenebeCommunityEngagement;
