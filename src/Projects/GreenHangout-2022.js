import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const GreenHangout2022 = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero hero-gh">
                    <div className="project-name">
                        <h2 className='heading'>GREEN HANGOUT 2022</h2>
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
                                <h3 className='heading'>GREEN HANGOUT 2022</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p className="theme"><span className='bold'>Theme:</span> Let's Talk Nature and Enjoy its Ambience.</p>
                                        <p>
                                            In the early hours of 9th April 2022, the rain graced the earth and made the environment more suitable for the day's event, GREEN HANGOUT. Sitting on the lawn of Finotel Hotel Awka were 14 environmental enthusiasts in a conversation to proffer more practicable climate solutions to solve the glaring environmental problems facing us as people of State and Nation.
                                            <br />
                                            <br />
                                            Amongst us were government officials, environmentalists, business people, activists, lecturers, researchers, and concerned men and women with no environmental knowledge but are willing to know and implement solutions proffered. It was great having people of different professions because environmental challenges affect all and we need everyone at the table to discuss these issues.
                                            <br />
                                            <br />
                                            Anambra State is faced with different environmental challenges ranging from deforestation, improper waste management, and erosion. It became imperative that quick action is taken to have the inhabitants away from the impending danger. The government, private sectors, and non-state actors have a collective responsibility toward solving the problem.
                                        </p>

                                        <div className="article-img erca-seedling-img">
                                            <img src="../img/GreenHangout/GH-3.jpg" alt="Attendees of the 2022 Green Hang Out at Finotel Hotel Awka" />
                                        </div>

                                        <p>
                                            Sir, Michael Opia, Executive Director Centre for Development and Civic Education(CECODEC) during his presentation on Waste Management and Our Wellbeing, highlighted different means by which individuals, households, and companies can manage their waste. He in turn appreciated the effort of the newly elected Governor of Anambra State Prof. Charles Soludo, who after his swearing-in made "clean up" one of his priorities.
                                            <br />
                                            <br />
                                            While narrating his experience in Denmark, he shared how the people and government perceived waste and how that helped in keeping their nation clean. He called for inclusiveness and urged the participants to be an agent of change in our dear state and nation.
                                            <br />
                                            <br />
                                            In a short presentation, Mrs. Achugamonye Onyinye, the Director Anambra State Department of Forestry and Wildlife under the Ministry of Environment explained the role of urban forestry in climate change mitigation. She made the participant understand the need to protect the forest and its resources. She then encouraged all not to end the discussion at the table of Green Hangout but to take it further and act on it as youths stand a better chance to negotiate for our future. She also called for partnerships and collaborations.
                                            <br />
                                            <br />
                                            Before the event came to an end, the participants were engaged in a quiz competition and social hierarchy game and the winning team went home with an enticing gift.
                                        </p>


                                        <div className="article-img">
                                            <img src="../img/GreenHangout/GH-1.jpg" alt="Sir, Michael Opia, Executive Director Centre for Development and Civic Education(CECODEC) during his presentation on Waste Management and Our Wellbeing" />
                                        </div>
                                        
                                    </div>                       
                                    {/* <div className="article-gallary">
                                        <h2>Gallary</h2>
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

export default GreenHangout2022;
