import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const EcoSystemRestoration = () => {

    return (
        <div>
            <section className="main-project-hero  forest-landscape-restoration">
                <div className="project-name">
                    <h2> Restoring Nigeria's Lost and Degraded Forest and Landscapes</h2>
                </div>
            </section>

            <section>

                <div className="intro-container">
                    <div className="intro">
                        <div className="intro-txt">
                            <h3 className='heading text-green'>Ecosystem Restoration Programme</h3>
                            <p>
                                The Ecosystem Restoration Programme is a nature-based solution with focus on bringing back ecological integrity and enhance human well-being in Nigeria's degraded landscapes. GRENCHI's response to this is through the *Eco-Restoration for Climate Action (ERCA) Project a flagship initiative aimed at combating climate change through large-scale tree planting, biodiversity conservation, and community-based ecosystem restoration.
                                <br />
                                <br />
                                The goal of the ERCA project is to restore degraded landscapes, contribute to biological richness in forest area, contribute to Nigeria’s National Determined Contribution (NDC) to improve forest management and forest restoration with a combined mitigation potential of 89Mt CO2e/year. Nigeria is losing over 350,000 hectares of forest annually, which translates to loss of about 3.7%forest cover , contributing to rising emissions, desertification, biodiversity loss, and declining agricultural productivity. The degradation of these site threatens local food systems, water sources, and community resilience. Restoring it aligns with Nigeria’s urgent need to address land degradation and advance climate adaptation efforts as outlined in the National Climate Change Policy, REDD+ Strategy, and Nigeria’s Nationally Determined Contributions (NDCs) under the Paris Agreement. ERCA project supports SDGs 13 (Climate Action), 15 (Life on Land), and 1 (No Poverty).
                                <br />
                                <br />

                                The project has three components:
                                <ul>
                                    <li>Forest Landscape Restoration</li>
                                    <li>Sustainable Livelihood</li>
                                    <li>Agroforestry Systems</li>
                                </ul>
                                <br />
                                <br />
                                GRENCHI approach Forest Landscape Restoration from two principal areas: Assisted Natural Regeneration and Reforestation 
                            </p>

                            
                        </div>

                        <div className="intro-img forest-landscape-intro-img">
                            <img src="img/Forest-Landscape/Ecosys.jpg" alt="A man in a green hat crouching down while transplanting a seedling in a bare land with amall patches of grasses around him" />
                        </div>

                        {/* <div className="intro-img ">
                            <img src="img/Ebenebe/eb-1.jpg" alt="Members of the Agrarian community listening to Dr. Ogbodo at the Climate resiliance workshop" />
                        </div> */}
                    </div>
                </div>

                <div className="gecci-main-projects">
                    <h4 className='heading text-green'>Some GRENCHI's Activities Include:</h4>
                    
                    <div className='project-container' >
                        <div className="project-box">
                            {/* YOUTUBE VIDEO */}
                            <div className="project-video">
                                <iframe src="https://www.youtube.com/embed/6K6xsYfUMX8" title="Eco-Restoration for Climate Action (ERCA) Project - A Restoration of 15hectares degraded land in 🇳🇬" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="project-info">
                                <h5 className='project-info-heading' >Restored Chukwuemeka Odummegwu Ojukwu University Degraded Site</h5>
                                <p>
                                    We Partnered with the institution to reforest and revegetate 15hectares of the degraded forest land using indigenous tree species of Mangifera indicate, Chrysophyllum albidum, Annona muricata, Anacardium occidentale, Pterocarpus mildbraedii, Treculia africana, Persea Americana, etcetera.
                                </p>
                            </div>
                        </div>

                        <div className="project-box project-box-reverse">
                            <div className="project-info">
                                <h5 className='project-info-heading' >Creating Green Spaces in Schools - Gardening / Afforestation</h5>
                                
                                <p>We partner with schools to promote nature education for young people to understand nature process. We achieve this through hands-on program like the nature-lab project (where students nurture and raise seedlings) and Gardening (planting fruit trees in a designated areas which provides them with nutritional supplement).</p>
                                <Link to='../Nature-Lab-Project'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                                
                            </div>

                            <div className="project-img"><img src='img/Forest-Landscape/green-space.jpg' alt='Agriculture Empowerment Programme' /></div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
}

export default EcoSystemRestoration;