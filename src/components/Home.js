import React, {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { initSwiper } from '../Swiper'
import '../Swiper.css'
import Button from './Button';




const Home = () => {
// ABOUT TABS CLICK EVENTS/ ANIMATION
        const [activeTab, setActiveTab] = useState('tab-1');

        useEffect(() => {
            const tabBtns = document.querySelectorAll('.tab-btn');
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelector('.active-tab').classList.remove('active-tab');
                    btn.classList.add('active-tab');

                    btn.animate([
                        {transform: 'scale(.9)'},
                        {transform: 'scale(1)'}
                    ], {
                        duration: 1000,
                        easing: 'ease-out'
                    });
                });
            });
            // Initialize Swiper
            initSwiper();

        }, []);

        const changeTab = (tabId) => {
            setActiveTab(tabId);
        };
        
        return (
            <div>
                <section className="hero">
                    <div className="hero-content slideUp">
                    <h2 className="heading">WE DANCE TO THE TUNE OF THE ENVIRONMENT</h2>
                    <div className="hero-btn">
                        <a href="/#about" class=" hero-cta about-cta text-white">KNOW MORE</a>
                        <a href="./Contact" class=" hero-cta contact-cta text-white">GET IN TOUCH</a>
                    </div>
                    </div>
                </section>
                {/* HERO ICON OVERLAY */}
                <div className="subSection">
                    {/* ICON OVERLAY 1 */}
                    <div className="icons-overlay">
                        <div className="icons-overlay-content bioconservation">
                            <img src="../img/sub-icons/Bdconserv.png" alt='Biodiverdsity Conservation' height="100px" width="100px" />
                            <p>Biodiversity Conservation</p>
                        </div>
                
                        <div className=" icons-overlay-content climateEducation">
                            <img src="../img/sub-icons/CEdu.png" alt='Climate Education' height="100px" width="100px" />
                            <p>Climate Education</p>
                        </div>
                        <div className="icons-overlay-content EcoSystem">
                            <img src="../img/sub-icons/EcoRes.png" alt="Ecosystem Restoration" height="100px" width="100px" />
                            <p>Ecosystem Restoration</p>
                        </div>
                        <div className="icons-overlay-content CommunityEmpowerment">
                            <img src="../img/sub-icons/CommEmp.png" alt="Community Empowerment" height="100px" width="100px" />
                            <p>Community Empowerment</p>
                        </div>
                    </div>
                    {/* ICON OVERLAY 2 */}
                    <div className="icons-overlay icons-overlay-extra">
                        <div className="icons-overlay-content bioconservation">
                            <img src="../img/sub-icons/Bdconserv.png" alt='Biodiverdsity Conservation' height="100px" width="100px" />
                            <p>Biodiversity Conservation</p>
                        </div>
                
                        <div className=" icons-overlay-content climateEducation">
                            <img src="../img/sub-icons/CEdu.png" alt='Climate Education' height="100px" width="100px" />
                            <p>Climate Education</p>
                        </div>
                        <div className="icons-overlay-content EcoSystem">
                            <img src="../img/sub-icons/EcoRes.png" alt="Ecosystem Restoration" height="100px" width="100px" />
                            <p>Ecosystem Restoration</p>
                        </div>
                        <div className="icons-overlay-content CommunityEmpowerment">
                            <img src="../img/sub-icons/CommEmp.png" alt="Community Empowerment" height="100px" width="100px" />
                            <p>Community Empowerment</p>
                        </div>
                    </div>
                    {/* ICON OVERLAY 3 */}
                    <div className="icons-overlay icons-overlay-extra">
                        <div className="icons-overlay-content bioconservation">
                            <img src="../img/sub-icons/Bdconserv.png" alt='Biodiverdsity Conservation' height="100px" width="100px" />
                            <p>Biodiversity Conservation</p>
                        </div>
                
                        <div className=" icons-overlay-content climateEducation">
                            <img src="../img/sub-icons/CEdu.png" alt='Climate Education' height="100px" width="100px" />
                            <p>Climate Education</p>
                        </div>
                        <div className="icons-overlay-content EcoSystem">
                            <img src="../img/sub-icons/EcoRes.png" alt="Ecosystem Restoration" height="100px" width="100px" />
                            <p>Ecosystem Restoration</p>
                        </div>
                        <div className="icons-overlay-content CommunityEmpowerment">
                            <img src="../img/sub-icons/CommEmp.png" alt="Community Empowerment" height="100px" width="100px" />
                            <p>Community Empowerment</p>
                        </div>
                    </div>
                </div>

                {/* UPCOMING EVENT SECTION */}
                <section className="upcoming-event-section" style={{display: "none"}}>
                    <div className="upcoming-event">
                        <h4 className='upcoming-event-heading heading' >Upcoming Event!!!</h4>
                        <h5 className='heading' >Climate Bootcamp 3.0</h5>
                        <p>Theme: Promoting Young Innovators for a Progressive Future</p>
                        <div className="donate-cta">
                            <Link to="/Events/Climate-Bootcamp-3-0"><Button  className="btn donate-btn">Open Page</Button></Link>
                        <a target="_blank" rel="noreferrer" href=" https://docs.google.com/forms/d/e/1FAIpQLSfwbkB2b13xZTXXtL5bGmPfLKZ3Dh2KRV34cfF0ILzwMTSqkA/viewform?usp=header"><Button  className="btn donate-btn">Apply for E-STEM mini Grant</Button></a>
                        </div>
                    </div>
                </section>

                {/* ABOUT SECTION */}
                <section className="about-section" id="about">
                    <div className="about-content">
                        <img src="../img/abt-img.jpg" alt="A farmer holding tree seedlings donated by GRENCHI" />
                        <div className="about-txt">
                            <div className="txt-heading heading text-green">
                                <h4>ABOUT US</h4>
                            </div>
                            <p className="txt-content">
                                The Green Environment and Climate Change Initiative (GRENCHI) is an environmental conservation organization legally incorporated under the laws of the Federal Republic of Nigeria and committed to combating climate change and deforestation.
                                <br />
                                <br />
                                Aligned with the UN Sustainable Development Goals and the UN Decade on Ecosystem Restoration, GRENCHI implements Forest Landscape Restoration and conservation projects to restore degraded ecosystems, protect biodiversity, and promote sustainable land use practices that benefit both nature and local communities.  GRENCHI also prioritizes education and awareness campaigns to inform the public about environmental issues and their broader societal impacts.
                            </p>
                            <div className="about-tabs">
                                <div className="tabs">
                                    <ul className="tab-buttons">
                                        <li className={`tab-btn ${activeTab === 'tab-1' ? 'active-tab' : ''}`} onClick={() => changeTab('tab-1')}>Our Vision</li>
                                        <li className={`tab-btn ${activeTab === 'tab-2' ? 'active-tab' : ''}`} onClick={() => changeTab('tab-2')}>Our Mission</li>
                                        <li className={`tab-btn ${activeTab === 'tab-3' ? 'active-tab' : ''}`} onClick={() => changeTab('tab-3')}>Our Belief</li>
                                    </ul>
                                </div>
                                <div className="tab-txt">
                                    <div className="tab vision" id="tab-1" style={{display: activeTab === 'tab-1' ? 'block' : 'none'}}>
                                        <div className="tab-inner-content" id="tab-inner-content">
                                            <p>
                                                GRENCHI has a vision of a Nigeria where people consciously protect the environment for the present and future generations.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="tab mission" id="tab-2" style={{display: activeTab === 'tab-2' ? 'block' : 'none'}}>
                                        <div className="tab-inner-content" id="tab-inner-content">
                                            <p>
                                                Our mission is to protect the environment using nature-based solutions, promote sustainable use of natural resources, and advocate for climate justice.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="tab belief" id="tab-3" style={{display: activeTab === 'tab-3' ? 'block' : 'none'}}>
                                        <div className="tab-inner-content" id="tab-inner-content">
                                            <p>
                                                GRENCHI believes in singing the songs of nature in the ears of the people so that in doing the actual work, we dance to the tone of the environment.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROJECT SECTION */}
                <section className="project-section">
                    <div className="projects">
                        <h4 className='heading text-green'>OUR PROJECTS</h4>
                        <div className="home-project-box">
                            <div className="project-1 project-content">
                                <a href="/Projects/Eco-Restoration-for-Climate-Action">
                                    <img src="../img/Projects/ERCA-3.jpg" alt="GREENCHI youths on a walk for Ecosystem Restoration" />
                                    <div className="project-txt">
                                    <p>Ecosystem Restoration</p>
                                    <span className="cto">Click to Open</span>
                                </div>
                                </a>
                            </div>
                
                            <div className="project-2 project-content">
                                <a href="/Projects/GreenHangout">
                                    <img src="../img/GreenHangout/project-2.jpg" alt="Participants of the Green Hangout engaging in a sprited discussion" />
                                    <div className="project-txt">
                                        <p>Green Hangout 2022</p>
                                        <span className="cto">Click to Open</span>
                                    </div>
                                </a>
                            </div>
                
                            <div className="project-3 project-content">
                                <a href="/Climate-Bootcamp">
                                    <img src="../img/ClimateBootcamp/project-3.jpg" alt="Students of learning environmental painting during the Climate Bootcamp 2023" />
                                <div className="project-txt">
                                    <p>Climate Bootcamp 2023</p>
                                    <span className="cto">Click to Open</span>
                                </div>
                                </a>
                            </div>
                        </div>
                        <Link to="./Projects" className="btn project-btn"><Button>SEE MORE</Button></Link>
                    </div>
                </section>

                {/* VOLUNTEER SECTION */}
                <section className="volunteer-section">
                    <div className="volunteer">
                        <p className='text-heading text-white'>Together, We Can Make a Difference</p>
                        <p className='text-white'>BECOME A</p>
                        
                        <Link to="./Volunteer" className="btn volunteer-btn"><Button>VOLUNTEER</Button></Link>
                    </div>
                </section>
                {/* PARTNERS LOGOS */}
                <section className="partners-section">
                    <div className="partners">
                        <h4 className='heading text-green'>OUR PARTNERS</h4>
                        <div class="partner-logos-inline">
                            <div className="partners-logos">
                                <img src="../img/logos/logo1.png" alt='Logo of Climate 2025' />
                                <img src="../img/logos/Hamburg logo.png" alt='Logo fo Hamburg' />
                                <img src="../img/logos/logo2.png" alt='Logo of Inernational sustainability Academy' />
                                <img src="../img/logos/logo3.jpg" alt='Logo of www.wald.de' />
                                <img src="../img/logos/logo4.png" alt="Logo of the Movement trust" />
                                <img src="../img/logos/logo5.png" alt="Logo of the Nigerian Climate Justice Alliance" />
                                <img src="../img/logos/logo6.png" alt="Logo of the Nigerian Conservation Foundation" />
                                <img src="../img/logos/Geep.png" alt="Logo of the Global Environmental Education Partnership" />
                                <img src="../img/logos/Naaee.png" alt="Logo of the North American Association of Environmental Educators" />
                            </div>
                            <div className="partners-logos">
                                <img src="../img/logos/logo1.png" alt='Logo of climate 2025' />
                                <img src="../img/logos/Hamburg logo.png" alt='Logo of Hamburg' />
                                <img src="../img/logos/logo2.png" alt='Logo of Inernational sustainability Academy' />
                                <img src="../img/logos/logo3.jpg" alt='Logo of www.wald.de' />
                                <img src="../img/logos/logo4.png" alt="Logo of the Movement trust" />
                                <img src="../img/logos/logo5.png" alt="Logo of the Nigerian Climate Justice Alliance" />
                                <img src="../img/logos/logo6.png" alt="Logo of the Nigerian Conservation Foundation" />
                                <img src="../img/logos/Geep.png" alt="Logo of the Global Environmental Education Partnership" />
                                <img src="../img/logos/Naaee.png" alt="Logo of the North American Association of Environmental Educators" />
                            </div>
                            <div className="partners-logos">
                                <img src="../img/logos/logo1.png" alt='Logo of climate 2025' />
                                <img src="../img/logos/Hamburg logo.png" alt='Logo of Hamburg' />
                                <img src="../img/logos/logo2.png" alt='Logo of Inernational sustainability Academy' />
                                <img src="../img/logos/logo3.jpg" alt='Logo of www.wald.de' />
                                <img src="../img/logos/logo4.png" alt="Logo of the Movement trust" />
                                <img src="../img/logos/logo5.png" alt="Logo of the Nigerian Climate Justice Alliance" />
                                <img src="../img/logos/logo6.png" alt="Logo of the Nigerian Conservation Foundation" />
                                <img src="../img/logos/Geep.png" alt="Logo of the Global Environmental Education Partnership" />
                                <img src="../img/logos/Naaee.png" alt="Logo of the North American Association of Environmental Educators" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="donate-section">
                    <div className="donate">
                        <h4 className='heading text-white'>Lets make the World Greener Together</h4>
                        <p className='text-white'>Donate or sponsor a tree now! Let's plant a tree with you.</p>
                        <div className="donate-cta">
                            <Link to="./Contact"><Button class="btn donate-btn">CONNECT WITH US</Button></Link>
                            <a href="https://flutterwave.com/donate/fopgfyqstegl"><Button className="btn donate-btn">DONATE</Button></a>
                        </div>
                    </div>
                </section>

                {/* TEAM-SECTION */}
                <section className="team-section">
                    <div className="gecci-team">
                        <h4 className='heading text-green'>MEET THE TEAM</h4>
                        <div className="slider-container swiper">
                            <div className="slide-content">
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                    
                                            <div className="card-image">
                                                <img src="../img/Team1.png" alt="Mmachukwu Loretta Obimdike" className="card-img" />
                                            </div>
                                        </div>
                    
                                        <div className="card-content">
                                            <h4 className="name">Mmachukwu Loretta Obimdike</h4>
                                            <p className="discription">GRENCHI, Founder/Executive Director</p>
                                        </div>
                                    </div>
                    
                                    <div className="card swiper-slide">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                    
                                            <div className="card-image">
                                                <img src="../img/Team2.png" alt="Dr. Oluropo Apalowo" className="card-img" />
                                            </div>
                                        </div>
                    
                                        <div className="card-content">
                                            <h4 className="name">Dr. Oluropo Apalowo</h4>
                                            <p className="discription">GRENCHI Programme Lead</p>
                                        </div>
                                    </div>
                    
                                    <div className="card swiper-slide">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                    
                                            <div className="card-image">
                                                <img src="../img/Team3.png" alt="Enwereuzo Chinemerem Divinefavour" className="card-img" />
                                            </div>
                                        </div>
                    
                                        <div className="card-content">
                                            <h4 className="name">Enwereuzo Chinemerem Divinefavour</h4>
                                            <p className="discription">GRENCHI, Asst. Programme Lead</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next swiper-btn"></div>
                                <div className="swiper-button-prev swiper-btn"></div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                        <a href="./Team" className="btn project-btn"><Button>SEE ALL</Button></a>
                    </div>
                </section>

                {/* NEWS AND UPDATES SECTION */}
                <section className="News-and-updates-section">
                    <div className="News-and-updates-container">
                        <h5 className='heading text-green'>NEWS AND UPDATES</h5>
                        <div className="News-and-updates">
                            <a href="https://radionigeria.gov.ng/2024/02/16/nigeria-must-be-more-deliberate-in-its-climate-action-in-2024/" target="_blank" rel="noreferrer">
                                <div className="News-box">
                                    <img src="../img/News-img-2.jpg" alt="News" />
                                    <div className="News-content">
                                        <div className="News-Date text-white">16 JAN</div>
                                        <p>Nigeria must be More Deliberate in its Climate Action in 2024</p>
                                    </div>
                                </div>
                            </a>

                            <a href="https://newspathfinder.com/2024/01/17/experts-charge-anambra-farmers-on-tree-planting-to-mitigate-climate-effects-on-crops/?amp=1" target="_blank" rel="noreferrer">
                                <div className="News-box">
                                    <img src="../img/Ebenebe/eb-4.jpg" alt="Ebenebe farmers with GECCI Team" />
                                    <div className="News-content">
                                        <div className="News-Date text-white">17 JAN</div>
                                        <p>Experts Charge Anambra Farmers On Tree Planting to Mitigate Climate Effects On Crops</p>
                                    </div>
                                </div>
                            </a>

                            <a href="https://punchng.com/how-tree-planting-can-help-tackle-climate-change-experts" target="_blank" rel="noreferrer">
                                <div className="News-box">
                                    <img src="../img/Tree-planting.jpg" alt="young seedling" className="News-img" />
                                    <div className="News-content">
                                        <div className="News-Date text-white">18 JAN</div>
                                        <p>How trees can help tackle climate change_ Experts</p>
                                    </div>
                                </div>
                            </a> 
                        </div>
                    </div>
                </section>
            </div>
        );
}

export default Home;
