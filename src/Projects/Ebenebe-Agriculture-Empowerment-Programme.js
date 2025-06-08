import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const EbenebeAgriculturalEmpowermentProgramme = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero Eaep-hero">
                    <div className="project-name">
                        <h2>Ebenebe Agriculture Empowerment Programme</h2>
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
                                <h3>Ebenebe Agriculture Empowerment Programme</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            In our ongoing effort to bolster the resilience of the Ebenebe Community in Awka North Local Government Area, Anambra State, Nigeria, we recently conducted an Agriculture Empowerment Programme for twenty (20) farmers within the community.
                                        </p>

                                        <div className="article-img">
                                            <img src="../img/EAEP/EAEP-4.jpg" alt="Ebenebe farmers with heaps of cassava sticks ready for planting." />
                                        </div>
                                        
                                        <p>
                                            Ebenebe is primarily an agrarian community. To support their agricultural activities, we provided farmers with improved varieties of cassava and maize. These seeds were sourced from the Sasakawa Africa Association (SAA) Nigeria Chapter, an organization dedicated to increasing farmers' income and enhancing food and nutrition security.
                                            <br />
                                            <br />
                                            Given that the farmers practice rain-fed agriculture, the timing of this initiative is crucial. As the rainy season is underway, these improved crop varieties are expected to maximize yield. The farmers are already seeing the benefits and are looking forward to a bountiful harvest, which will significantly enhance their productivity and income.
                                            <br />
                                            <br />
                                            The initiative has been met with enthusiasm and optimism from the farmers. Their happiness and anticipation for an improved livelihood were evident in the feedback during the programme.
                                        </p>
                                    </div>                       
                                    <div className="article-gallary">
                                        <h2>Gallery</h2>
                                        <div class="swiper">
                                            <div class="slide-content">
                                                <div class="image-list swiper-wrapper">
                                                    <img src="../img/EAEP/EAEP-2.jpg" class="sliding-img swiper-slide" alt="GRENCHI Team holding the banner of the agriculture empowerment programme with Dr. Ropo siting on bags of harvested cassava" />
                                                    <img src="../img/EAEP/EAEP-3.jpg" class="sliding-img swiper-slide" alt="Ebenebe farmers with heaps of cassava sticks ready for planting" />
                                                    <img src="../img/EAEP/EAEP-4.jpg" class="sliding-img swiper-slide" alt="Ebenebe farmers with heaps of cassava sticks ready for planting" />
                                                    <img src="../img/EAEP/EAEP-5.jpg" class="sliding-img swiper-slide" alt="Divinefavour speaking to the farmers" />
                                                </div>
                                            </div>
                                            <div class="swiper-button-next swiper-btn"></div>
                                            <div class="swiper-button-prev swiper-btn"></div>
                                            <div class="swiper-pagination"></div>
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

export default EbenebeAgriculturalEmpowermentProgramme;
