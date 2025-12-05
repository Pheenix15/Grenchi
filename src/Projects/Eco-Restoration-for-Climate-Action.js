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
                        <h2 className='heading'>Restoring Nigeria's Lost and Degraded Forest and Landscapes</h2>
                    </div>
                </section>

                <div className="project-article-container">
                    <div className="gecci-project-article">

                        {/* SIDE BAR */}
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
                        {/* SIDE BAR END */}

                        <article className="project-article">
                            <div className="article">
                                <h3 className='heading'>Eco-Restoration for Climate Action</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            The Ecosystem Restoration Programme is a nature-based solution with focus on bringing back ecological integrity and enhance human well-being in Nigeria's degraded landscapes. GRENCHI's response to this is through the *Eco-Restoration for Climate Action (ERCA) Project a flagship initiative aimed at combating climate change through large-scale tree planting, biodiversity conservation, and community-based ecosystem restoration.
                                            <br />
                                            <br />
                                            The goal of the ERCA project is to restore degraded landscapes, contribute to biological richness in forest area, contribute to Nigeria’s National Determined Contribution (NDC) to improve forest management and forest restoration with a combined mitigation potential of 89Mt CO2e/year. Nigeria is losing over 350,000 hectares of forest annually, which translates to loss of about 3.7%forest cover , contributing to rising emissions, desertification, biodiversity loss, and declining agricultural productivity. The degradation of these site threatens local food systems, water sources, and community resilience. Restoring it aligns with Nigeria’s urgent need to address land degradation and advance climate adaptation efforts as outlined in the National Climate Change Policy, REDD+ Strategy, and Nigeria’s Nationally Determined Contributions (NDCs) under the Paris Agreement. ERCA project supports SDGs 13 (Climate Action), 15 (Life on Land), and 1 (No Poverty).
                                            <br />
                                            <br />

                                            The project has three components:
                                            <ul role= 'list'>
                                                <li>Forest Landscape Restoration</li>
                                                <li>Sustainable Livelihood</li>
                                                <li>Agroforestry Systems</li>
                                            </ul>
                                        </p>

                                    </div>                       
                    
                                </div>
                            </div>

                        </article>

                    </div>
                </div>
            </div>
        );
    }

export default EcoRestorationForClimateAction;
