import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const ClimateBootcamp2024 = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero acb-2024-hero">
                    <div className="project-name">
                        <h2>ANAMBRA CLIMATE BOOTCAMP 2024</h2>
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
                                <h3>ANAMBRA CLIMATE BOOTCAMP 2.0</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            On July 24, 2024, the Climate Bootcamp 2.0, an environmental education event organized by the Green Environment and Climate Change Initiative (GRENCHI) with support from The Movement Trust and partnership with the Nigeria Conservation Foundation (NCF), brought together 73 students from seven secondary schools in Awka at the Ekwueme Centre for Multi-Disciplinary Research, Nnamdi Azikiwe University. This event aimed to inspire and equip young environmental leaders with practical knowledge and skills to drive environmental actions. The bootcamp empowered students to participate actively in environmental conservation and sustainable development. Throughout the day, students engaged in workshops, competitions, and interactive sessions designed to deepen their understanding of climate action and environmental stewardship. They showcased innovative projects, from plastic waste management to rainwater harvesting, demonstrating their commitment to practical solutions for local environmental challenges.
                                        </p>
                                        <h4 className="bold">Highlights of the Bootcamp 2.0</h4>
                                        <div className="article-video">
                                            <iframe src="https://www.youtube.com/embed/7B5pMZBcM7A" title="Climate Bootcamp 2.0 for Environmental Club Students in Nigeria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>

                                        <h4 className='bold'>Exciting Competitions:</h4>
                                        
                                        <p>
                                            The students showcased their knowledge and creativity through several competitions:
                                            <br />
                                            <span className="bold">Quiz Competition:</span> UNIZIK High School emerged as the winner after a challenging contest.
                                            <br />
                                            <span className="bold">Spelling Bee:</span> St. Patrick's Secondary School Awka took the top spot.
                                            <br />
                                            <span className="bold">E-STEM Project Pitch:</span> Students pitched their innovative environmental projects, with Nwafor Orizu College Demonstration Secondary School winning the grand prize of one hundred thousand nairas, Capital City Secondary School Awka winning eighty thousand nairas as the first runner-up, and St. Lucy Secondary School winning seventy thousand nairas as the second runner-up.
                                        </p>

                                        <p>
                                            Exceptional students and facilitators were recognized for their dedication and achievements:
                                            <br />
                                            <span className="bold">Most Dedicated School Facilitators:</span>Mrs. Uche Umeh (Igwebuike Grammar School), Mrs. Obiora Ruth Chioma (Capital City Secondary School), and Mr. Ezidimma Izuchukwu Kenneth (Nnamdi Azikiwe High School).
                                            <br />
                                            <span className="bold">Outstanding Students:</span> Nwodo Arinze (Most Dedicated Chief Environmental Officer) and Alphonsus Divine (Most Dedicated Environmental Club Member) received special awards for their contributions and service to the environmental club.
                                        </p>

                                        <div className="article-img">
                                            <img src="./img/Climate-Bootcamp-2024/CB-2024-6.jpg" alt="The three Facilatators of the most Dedicated school with their GRENCHI contact persons, Mrs.Ngozi Ogamba and Mr.Divinefavour Enwereuzo" />
                                        </div>

                                        <span className="bold">Sustainable Practices</span>
                                        
                                        <p>
                                            The event prioritized sustainability, using reusable tableware, glass bottles, and strategically placed water dispensers with paper cups. These practices showcased our commitment to environmental conservation.
                                        </p>
                                        <span className="bold">Looking Forward</span>
                                        <p>GRENCHI is excited to continue this journey of fostering young environmental champions. Plans for the Climate Bootcamp 3.0 are already underway, promising even more innovative and engaging experiences.</p>
                                        <span className="bold">Get Involved</span>
                                        <p>Join us in our mission to empower the next generation of environmental leaders. Learn more about our initiatives and discover how you can contribute to a sustainable future.</p>
                                        <h4><a href="./Contact" style= {{color: 'rgb(13, 80, 9, 1)', textDecoration: 'none'}} >Contact Us</a></h4>
                                        <p>For more information, please reach out to us at <a href="info.grenchi@gmail.com" style= {{color: 'rgb(13, 80, 9, 1)', textDecoration: 'none'}}>geccinitiative@gmail.com</a></p>
                                    </div>
                                                            
                                    <div className="article-gallary">
                                        <h4 className='heading' >Gallery</h4>
                                        <div className="swiper">
                                            <div className="nursery-images slide-content">
                                                <div className="image-list swiper-wrapper">
                                                    <img src="../img/Climate-Bootcamp-2024/CB-2024-2.jpg" className="sliding-img swiper-slide" alt="The third runner-up of the Environmental-STEM competetion holding an enlarged cheque of seventy thousand Naira" />
                                                    <img src="../img/Climate-Bootcamp-2024/CB-2024-3.jpg" className="sliding-img swiper-slide" alt="The winners of the Environmental-STEM competetion holding an enlarged cheque of One hundred thousand Naira" />
                                                    <img src="../img/Climate-Bootcamp-2024/CB-2024-4.jpg" className="sliding-img swiper-slide" alt="The second runner-up of the Environmental-STEM competetion holding an enlarged cheque of Eighty thousand naira" />
                                                    <img src="../img/Climate-Bootcamp-2024/CB-2024-5.jpg" className="sliding-img swiper-slide" alt="Winners of the speeling bee and quiz competetion holding their prize. On their right is Dr. Ropo, GRENCHI's Programme lead and on their left is Mrs. Funmilayo Adeniyi" />
                                                    <img src="../img/Climate-Bootcamp-2024/CB-2024-6.jpg" className="sliding-img swiper-slide" alt="The three Facilatators of the most Dedicated school posing for a photograph with their GECCI contact persons, Mrs.Ngozi Ogamba and Mr.Divinefavour Enwereuzo" />
                                                    <img src="../img/Climate-Bootcamp-2024/CB-2024-7.jpg" className="sliding-img swiper-slide" alt="Dr. Ropo with the winning students and Mrs. Onwuzulike" />
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

export default ClimateBootcamp2024;
