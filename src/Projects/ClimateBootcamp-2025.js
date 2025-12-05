import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const ClimateBootcamp2025 = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero acb-2025-hero">
                    <div className="project-name">
                        <h2>CLIMATE BOOTCAMP 2025</h2>
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
                                <h3>Climate Bootcamp 3.0 was nothing short of SUCCESS and IMPACTFUL.</h3>
                                <h4>Theme: Promoting Young Innovators for a Progressive Future</h4>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            With the stark realization that young people are the creative force behind today’s climate solutions, we organized the Climate Bootcamp 3.0 to empower, equip, and elevate secondary school students as catalysts for environmental change. This year’s edition focused on building practical green skills, encouraging innovation, and fostering a deep sense of environmental responsibility among youth. In attendance were 86 students across 10 secondary schools, 16 teachers, and other guests including parents and environmental enthusiasts.
                                        </p>
                                        <h4 className="bold">Activities</h4>
                                        <div className="article-video">
                                            <iframe 
                                                src="https://www.youtube.com/embed/Wg_K1QB9zsI" 
                                                title="Climate Bootcamp 3.0_GRENCHI&#39;s Flagship Program for #EnvironmentalEducation  #E-STEMLearning" 
                                                frameborder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerpolicy="strict-origin-when-cross-origin" 
                                                allowfullscreen>
                                            </iframe>
                                        </div>

                                        <h4 className='bold'>Student Project Pitching:</h4>
                                        
                                        <p>
                                            An innovative arm of the program challenging students to develop projects addressing climate change issues within their schools. Finalists had the opportunity to pitch their project to our set of experienced judges. 
                                            <br />
                                            <br />
                                            <span className="bold">Winner:</span>St. Lucy Secondary School, Ifite-Awka
                                            <br />
                                            <span className="bold">1st Runner Up:</span>Nnamdi Azikiwe Secondary School, Abagana
                                            <br />
                                            <span className="bold">2nd Runner Up:</span>Igwebuike Grammar School, Awka
                                            <br />
                                            <br />
                                            <span className="bold">NB:</span>In the coming months, we will share student projects as implemented.
                                        </p>
                                        

                                        <div className="article-img">
                                            <img src="../img/Climate-Bootcamp-2025/CB-2025-3.jpg" alt="The winners of the pitching competing with their facilitators holding their enlarged cheques" />
                                        </div>

                                        <h4>Quiz and Spelling Bee Competition:</h4>
                                        <p>
                                            This activity provided a platform for students to showcase their understanding of climate change and its impacts. The quiz featured multiple-choice and short-answer questions covering climate science, environmental conservation, sustainability practices, renewable energy, and local/global climate policies while the spelling bee enhance students' vocabulary and comprehension.
                                        </p>

                                        <div className="article-img">
                                            <img src="../img/Climate-Bootcamp-2025/CB-2025-1.jpg" alt="The winner of the quiz recieving his price" />
                                        </div>

                                        <h4>Mr. and Miss Environment:</h4>
                                        
                                        <p>
                                            The most exhilarating part of the program for many. It was a leadership and advocacy contest aimed at identifying and celebrating environmentally conscious students who demonstrate knowledge, charisma, creativity and commitment to environmental sustainability. Contestants engaged in designing eco-themed outfit, deliver short speeches, and participate in quiz competition.
                                            <br />
                                            <span className="bold">Winners:</span>
                                            <br />
                                            <span className="bold">Mr Environment 2025:</span> Master Bruno Obidiozor from Igwebuike Grammar School, Awka won with a nature inspired outfit
                                            <br />
                                            <span className="bold">Miss Environment 2025:</span> Miss Ozornweribe Jennifer from Community Secondary School, Enugwu-Agidi won with a plastic repurposed outfit.
                                            <br />
                                            <br />
                                            Winners will serve as youth environmental ambassadors for schools in Anambra State, leading green initiatives and campaigns throughout the academic year.
                                        </p>

                                        <div className="article-img">
                                            <img src="../img/Climate-Bootcamp-2025/CB-2025-2.png" alt="Mr and Mrs Environment and their fello contenstants" />
                                        </div>
                                        
                                        <h4>Green School Ambassador:</h4>
                                        <p>A student-led leadership initiative that identifies passionate environmental advocates from each school to serve as Green School Ambassadors. These ambassadors will receive basic training on environmental conservation and climate action. They will coordinate and champion eco-friendly practices in their schools, including awareness campaigns, recycling programs, and tree planting activities, fostering peer-to-peer education and leadership.</p>
                                        
                                    </div>
                                                            
                                    <div className="article-gallary">
                                        <h4 className='heading' >Gallery</h4>
                                        <div className="swiper">
                                            <div className="nursery-images slide-content">
                                                <div className="image-list swiper-wrapper">
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-1.jpg" className="sliding-img swiper-slide" alt="The third runner-up of the Environmental-STEM competetion holding an enlarged cheque of seventy thousand Naira" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-2.png" className="sliding-img swiper-slide" alt="The third runner-up of the Environmental-STEM competetion holding an enlarged cheque of seventy thousand Naira" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-3.jpg" className="sliding-img swiper-slide" alt="The winners of the Environmental-STEM competetion holding an enlarged cheque of One hundred thousand Naira" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-4.jpg" className="sliding-img swiper-slide" alt="The second runner-up of the Environmental-STEM competetion holding an enlarged cheque of Eighty thousand naira" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-5.jpg" className="sliding-img swiper-slide" alt="Winners of the speeling bee and quiz competetion holding their prize. On their right is Dr. Ropo, GRENCHI's Programme lead and on their left is Mrs. Funmilayo Adeniyi" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-6.jpg" className="sliding-img swiper-slide" alt="The three Facilatators of the most Dedicated school posing for a photograph with their GECCI contact persons, Mrs.Ngozi Ogamba and Mr.Divinefavour Enwereuzo" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-7.jpg" className="sliding-img swiper-slide" alt="Dr. Ropo with the winning students and Mrs. Onwuzulike" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-8.jpg" className="sliding-img swiper-slide" alt="The third runner-up of the Environmental-STEM competetion holding an enlarged cheque of seventy thousand Naira" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-9.jpg" className="sliding-img swiper-slide" alt="The third runner-up of the Environmental-STEM competetion holding an enlarged cheque of seventy thousand Naira" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-10.jpg" className="sliding-img swiper-slide" alt="The third runner-up of the Environmental-STEM competetion holding an enlarged cheque of seventy thousand Naira" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-11.jpg" className="sliding-img swiper-slide" alt="The third runner-up of the Environmental-STEM competetion holding an enlarged cheque of seventy thousand Naira" />
                                                    <img src="../img/Climate-Bootcamp-2025/CB-2025-12.jpg" className="sliding-img swiper-slide" alt="The third runner-up of the Environmental-STEM competetion holding an enlarged cheque of seventy thousand Naira" />
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

export default ClimateBootcamp2025;
