import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const EcoRestorationForClimateAction = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero ERCA-hero">
                    <div className="project-name">
                        <h2 className='heading'>Eco-Restoration for Climate Action</h2>
                    </div>
                </section>

                <div className="project-article-container">
                    <div className="gecci-project-article">
                        <div className="side-bar">
                            <h3 className='heading'>Other Projects</h3>
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
                                <h3 className='heading'>Eco-Restoration for Climate Action</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            The Eco-Restoration and Climate Action (ERCA) Poject has its focus to restore 15 hectares of degraded forest in Nnamdi Azikiwe University (NAU), Awka, Nigeria. This forest land has been deforested and degraded from both nature and anthropogenic activities of man.
                                            <br />
                                            <br />
                                            The goal is to bring back the degraded landscape, contribute to the biological richness in the area, contribute to Nigeria’s National Determined Contribution (NDC) to improve forest management and forest restoration with a combined mitigation potential of 89Mt CO2e/year, and contribute to promoting meaningful participation of youth in ecosystem restoration of Nigeria NDCs Awareness and Advocacy key project area. The project has three components:
                                            <ol role= 'list'>
                                                <li role = 'listitem'>Establishment and nursing of 6000 indigenous forest seedlings.</li>
                                                <li role = 'listitem'>Restoration of 15 hectares of NAU degraded forest.</li>
                                                <li role = 'listitem'>Capacity Building of Stakeholders in Ecosystem Restoration.</li>
                                            </ol>
                                        </p>

                                        <div className="article-img erca-seedling-img">
                                            <img src="../img/ERCA/ERCA-2.jpg" alt="Seedlings at their Nursery Stage of Development" />
                                            <p class="article-img-description">Seedlings at their Nursery Stage of Development</p>
                                        </div>

                                        <h4>Establishment of Project Tree-Nursery</h4>
                                        <p>
                                            We raised 6000 seedlings of Annona muricata (Soursop), Treculia africana (Ukwa), Dacryodes edulus (pear), Gambeya albida (African star apple), Pentaclethra macrophylla (Ukpaka), Cola nitida/acuminata (kola), and Irvingia Gabonensis/ wombulu (Ogbono).
                                            <br />
                                            <br />
                                        </p>

                                        <h4>Capacity Building of Project Community</h4>
                                        <p>
                                        To make the project community well versed with the restoration and conservation techniques, we trained them on these topics of Tree Nursery Establishment, Natural restoration techniques, Plantation and protection, Climate Change adaptation, Monitoring and mapping techniques, Forest Information System (FIS). These workshops were customized for the students and bio-resources conservation monitors/forest guards to successfully implement the project plans effectively and sustainably manage the project.
                                        </p>

                                        <div className="article-img">
                                        <img src="../img/ERCA/ERCA-1.jpg" alt="Dr. Chukwu engaging the audience on Natural Restoration Techniques." />
                                        </div>
                                        
                                        <h4 className="bold">Community Engagement</h4>

                                        <p>
                                            We engaged with the Ebenebe community through a variety of impactful initiatives aimed at fostering resilience against climate change and combating deforestation. Our awareness programs included workshops and seminars to educate the residents on the importance of forest conservation and sustainable agricultural practices. We introduced sustainable farming techniques, such as agroforestry, to help maintain their agrarian lifestyle while protecting the environment.
                                        </p>
                                    </div>                       
                                    {/* <div className="article-gallary">
                                        <h2>Gallery</h2>
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
                                    </div> */}
                                </div>
                            </div>

                        </article>

                    </div>
                </div>
            </div>
        );
    }

export default EcoRestorationForClimateAction;
