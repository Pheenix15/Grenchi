import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const EbenebeClimateResilienceWorkshop = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero Ecr-hero">
                    <div className="project-name">
                        <h2>Ebenebe Climate Resilience Workshop 2024</h2>
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
                                <h3>Ebenebe Climate Resilience Workshop 2024</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p className="bold">Building Climate Resilience in Ebenebe: A Transformative Workshop by GRENCHI.</p>
                                        <p>
                                        Green Environment and Climate Change Initiative (GRENCHI), with the unwavering support of the Nigeria Climate Justice Alliance (NCJA), Nigeria Conservation Foundation (NCF), and in partnership with the Department of Forestry and Wildlife, Ministry of Environment, Anambra State, is making a lasting impact in the heart of Ebenebe. 
                                        Climate change introduces severe negative impacts, and sadly, communities and indigenous people who contribute little to nothing to climate change face the brunt of these impacts as they are the most affected by climate change. Additionally, they most times lack the necessary resource and information for both adaptation, and resilience.
                                        Our recent one-day workshop was a vital step in addressing and enhancing the climate resilience of the Ebenebe agrarian community in Anambra State, Nigeria.
                                        <br />
                                        <span>So, what is so beautiful about Ebenebe, Anambra State?</span>
                                        <br />
                                        <br />
                                        Nestled in Anambra State, Ebenebe boasts of a massive forest land mass, a precious natural resource now at risk due to a spike in deforestation. With approximately 75 percent of the population engaged in farming, the community, despite contributing minimally to climate change, bears the brunt of its direct impacts on agriculture.
                                        </p>

                                        <div className="article-video">
                                            <iframe src="https://www.youtube.com/embed/NdDPrJ85aUs" title="Workshop on Building Climate Resilience of the Ebenebe Agrarian Community in Anambra State, Nigeria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                        
                                        <p>
                                        On 16th of January 2024, at Umuejinwoke Kindred Hall, Umuoji, Ebenebe, Anambra State, the Green Environment and Climate Change Initiative hosted a workshop with the theme: "Building Climate Resilience of Ebenebe Agrarian Community." This workshop culminates an outstanding engagement of 80 stakeholders, including community members, local authorities, farmers, market women, community leaders, foresters, and environmental enthusiasts.
                                        The agenda of the workshop included a comprehensive range of topics, including sustainable agriculture practices, climate resilience strategies, effects of climate change, and community-based adaptation strategies.
                                        The organization utilized the power of language to communicate an understanding of climate change, and resilience to the community by holding the workshop in the native language of the Ebenebe people, Igbo language, and making interpretations where necessary.
                                        <br />
                                        <span>The range of sessions and presentations covered by GRENCHI in the workshop include;</span> 
                                        Global Threat to Agriculture: Mrs. Achugamonye Onyinye Genevieve, Director, Forestry and Wildlife Department Ministry of Environment, shed light on the global threat of climate change to agricultural production, with a primary focus on Ebenebe as a case study.
                                        Building Resilience Strategies: Dr. Ogbodo explored practical strategies for building climate resilience in agrarian communities, fostering engaging discussions and personal experiences from participants.
                                        Importance of Trees: Mr. Innocent emphasized the crucial role of trees in improving climate resilience, providing hands-on insights with tree seedling samples distributed to participants.
                                        </p>
                                        <h4>Meet our supportive partners and collaborators:</h4>
                                        <p> 
                                            Our collaboration with the Department of Forestry and Wildlife, Ministry of Environment, played a pivotal role, enriching the workshop's content and ensuring a holistic approach. The unwavering support from NCJA and NCF further strengthened our outreach, aligning seamlessly with our goals.
                                            <br />
                                            <br />
                                            <span>Here are few bullet points of the outcomes and achievements from this program:</span>
                                            <ol className="li-size prjt-txt-ol" role = 'list'>
                                                <li role = 'listitem'>Increased awareness and improved knowledge of climate issues.</li>
                                                <li role = 'listitem'> Strengthened community bonds and formation of a committee for climate resilience actions in Ebenebe.</li>
                                                <li role = 'listitem'> Increased motivation and participants' enthusiasm to implement acquired knowledge and share it with others.</li>
                                            </ol> 
                                            The workshop in Ebenebe marked a significant stride toward fostering climate resilience in Ebenebe community, and this program can be strategically modified and implemented in various other communities and indegenous residents. GRENCHI remains committed to supporting Ebenebe and similar communities on their journey toward a sustainable and climate-resilient future.
                                            
                                        </p>
                                    </div>                       
                                    <div className="article-gallary">
                                        <h2>Gallery</h2>
                                        <div className="swiper">
                                            <div className="slide-content">
                                                <div className="image-list swiper-wrapper">
                                                    <img src="../img/Ebenebe/eb-1.jpg" className="sliding-img swiper-slide" alt="GRENCHI Team holding the banner of the agriculture empowerment programme with Dr. Ropo siting on bags of harvested cassava" />
                                                    <img src="../img/Ebenebe/eb-2.jpg" className="sliding-img swiper-slide" alt="farmers with heaps of cassava sticks ready for planting" />
                                                    <img src="../img/Ebenebe/eb-3.jpg" className="sliding-img swiper-slide" alt="farmers with heaps of cassava sticks ready for planting" />
                                                    <img src="../img/Ebenebe/eb-5.jpg" className="sliding-img swiper-slide" alt="Divinefavour speaking to the farmers" />
                                                    <img src="../img/Ebenebe/eb-6.jpg" className="sliding-img swiper-slide" alt="Divinefavour speaking to the farmers" />
                                                    <img src="../img/Ebenebe/eb-7.jpg" className="sliding-img swiper-slide" alt="Divinefavour speaking to the farmers" />
                                                    <img src="../img/Ebenebe/eb-8.jpg" className="sliding-img swiper-slide" alt="Divinefavour speaking to the farmers" />
                                                    <img src="../img/Ebenebe/eb-9.jpg" className="sliding-img swiper-slide" alt="Divinefavour speaking to the farmers" />
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

export default EbenebeClimateResilienceWorkshop;
