import React from 'react';
import './Team.css';
import Button from './Button';




const Team = () => {
    // State to manage active tab/popup
    return (
        <div>
            <section>
                <div className="team-hero">
                    <h2 className='heading text-white'>MEET THE TEAM</h2>
                </div>
            </section>
            <div className='team-page-container'>
                <div className="Team-container">
                    <h3 className='heading text-green'>GRENCHI Team</h3>
                    <div className="team-members">
                        <div className="ad-board ad-board-1">
                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>

                                    <div className="card-image">
                                        <img
                                            src="img/Team1.png"
                                            alt="GRENCHI, Founder/Executive Director Mrs Mmachukwu Loretta Obimdike"
                                            className="card-img"
                                        />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h4 className="name">Mmachukwu Loretta Obimdike</h4>
                                    <p className="description">GRENCHI, Founder/Executive Director</p>
                                    <Button onClick={() => document.getElementById("Tmpopup-1").classList.toggle("active-popup")}>
                                        Read Profile
                                    </Button>
                                </div>

                                <div className="popup popup-1" id="Tmpopup-1">
                                    <div className="popup-overlay"></div>
                                    <div className="popup-content">
                                        <div className="popup-header">
                                            <div
                                                className="popup-close"
                                                onClick={() => document.getElementById("Tmpopup-1").classList.toggle("active-popup")}
                                            >
                                                &times;
                                            </div>
                                            <h4>Mmachukwu Loretta Obimdike</h4>
                                        </div>
                                        <div className="popup-text">
                                            <p>
                                                Mmachukwu Loretta Obimdike is a Forester, environmentalist, sustainability advocate,
                                                and environmental educator. With over 5 years of professional experience in environmental
                                                education and ecosystem restoration, she received the WeNaturalist People of Nature Award
                                                under the category of Environmental Educator of the Year 2023.
                                                <br />
                                                Mmachukwu is the Founder and Executive Director of the Green Environment and Climate
                                                Change Initiative (GRENCHI). Her passion for nature and the environment was sparked working
                                                with an NGO contracted by Enugu State Nigerian Erosion and Watershed Management Project
                                                (NEWMAP) as the Environmental Officer.
                                                <br />
                                                She is a graduate of Forestry and Wildlife from Nnamdi Azikiwe University Awka, Nigeria, and
                                                an MSc. in Landscape Ecology and Nature Conservation (LENC) at the Universität Greifswald
                                                (in view).
                                                <br />
                                                She’s an alumnus fellow of the International Sustainability Academy (ISA), a program of the
                                                Schutzgemeinschaft Deutscher Wald (SDW), Landesverband Hamburg e.V. Germany.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ad-board ad-board-2">
                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>

                                    <div className="card-image">
                                        <img
                                            src="../img/Team2.png"
                                            alt="Dr. Oluropo Apalowo"
                                            className="card-img"
                                        />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h4 className="name">Dr. Oluropo Apalowo</h4>
                                    <p className="description">GRENCHI Programme Lead</p>
                                    <Button onClick={() => document.getElementById("Tmpopup-2").classList.toggle("active-popup")}>
                                        Read Profile
                                    </Button>
                                </div>

                                <div className="popup popup-2" id="Tmpopup-2">
                                    <div className="popup-overlay"></div>
                                    <div className="popup-content">
                                        <div className="popup-header">
                                            <div
                                                className="popup-close"
                                                onClick={() => document.getElementById("Tmpopup-2").classList.toggle("active-popup")}
                                            >
                                                &times;
                                            </div>
                                            <h4>Dr. Oluropo Apalowo</h4>
                                        </div>
                                        <div className="popup-text">
                                            <p>
                                            Dr. Oluropo Apalowo is a Climate change advocate, Crop Protectionist, and Agricultural Policy Expert. He has experience in both local and international Organizations. In 2019, he emerged as one of the five winners selected across the world during the IUPAC N-GAGE Champion competition (a youth innovative award in Agriculture), in Ghent, Belgium.
                                            <br />
                                            As an environmental advocate, He has led many awareness campaigns in schools, government institutions, and marketplaces, sensitizing people on the effect of climate change, the importance of tree planting, and the conservation of the environment. Presently, his focus is on leading awareness campaigns in Anambra State, Nigeria which is regarded as the erosion capital of the country. He is also involved in many projects aimed at preventing flooding across the state. He has a passion for grooming and mentoring students in primary and secondary school on how to be a campaigner for climate action among their peers (Peer Educator).
                                            <br />
                                            He is the Program Officer for Green Environment and Climate Change Initiative (GRENCHI), a Non-profit Organization established to create awareness about Climate Change in Nigeria. He is also a member of the Horticultural Society of Nigeria (HORTSON), Nigerian Society for Plant Protection (NSPP), Nigerian Society for Plant Virology (NSPV), and Nigerian Society of Nematologists (NISON), among others.
                                            <br />
                                            He has published scientific articles in both local and international journals. He love traveling, meeting people, researching, and football
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ad-board ad-board-3">
                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>

                                    <div className="card-image">
                                        <img
                                            src="../img/Team3.png"
                                            alt="Enwereuzo Chinemerem Divinefavour"
                                            className="card-img"
                                        />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h4 className="name">Enwereuzo Chinemerem Divinefavour</h4>
                                    <p className="description">GRENCHI, Asst. Programme Lead</p>
                                    <Button onClick={() => document.getElementById("Tmpopup-3").classList.toggle("active-popup")}>
                                        Read Profile
                                    </Button>
                                </div>

                                <div className="popup popup-3" id="Tmpopup-3">
                                    <div className="popup-overlay"></div>
                                    <div className="popup-content">
                                        <div className="popup-header">
                                            <div
                                                className="popup-close"
                                                onClick={() => document.getElementById("Tmpopup-3").classList.toggle("active-popup")}
                                            >
                                                &times;
                                            </div>
                                            <h4>Enwereuzo Chinemerem Divinefavour</h4>
                                        </div>
                                        <div className="popup-text">
                                            <p>
                                            Enwereuzo Chinemerem Divinefavour is a visionary environmentalist, and a sustainability advocate. Chinemerem dedicates his time to voluntary service, promoting sustainability education, and fostering change. Currently, he serves as the Assistant Project Lead for the NGO, Green Environment and Climate Change Initiative-GRENCHI.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="ad-container">
                    <h3 className='heading '>Advisory Board</h3>
                    <div className="team-members">

                        {/* ADISOORY BOARD 1 */}
                        <div className="ad-board ad-board-1">
                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>

                                    <div className="card-image">
                                        <img
                                            src="../img/Ad-board-1.jpg"
                                            alt="Cynthia Onyangore"
                                            className="card-img"
                                        />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h4 className="name">Cynthia Onyangore (Kenya)</h4>
                                    <p className="description">Strategic Management and Sustainability Professional</p>
                                    <Button onClick={() => document.getElementById("popup-1").classList.toggle("active-popup")}>
                                        Read Profile
                                    </Button>
                                </div>
                            </div>
                            <div className="popup popup-1" id="popup-1">
                                <div className="popup-overlay"></div>
                                <div className="popup-content">
                                    <div className="popup-header">
                                        <div
                                            className="popup-close"
                                            onClick={() => document.getElementById("popup-1").classList.toggle("active-popup")}
                                        >
                                            &times;
                                        </div>
                                        <h4>Cynthia Onyangore (Kenya)</h4>
                                    </div>
                                    <div className="popup-text">
                                        <p>
                                        Cynthia Onyangore is a strategic management and sustainability professional with 18 years of
                                        experience in Kenya, USA, Middle East and Europe, spanning different areas of expertise
                                        including strategic planning, finance and food systems. She is particularly passionate about
                                        building resilient and sustainable agriculture value chains using a systems approach that ensures
                                        inclusivity of all stakeholders and processes. Her present focus areas are ensuring profitable
                                        and well-functioning organizations, while adhering to the 3Ps of sustainability (people, planet,
                                        profits), while doing no harm to the environment. She holds an MBA from Baker University, USA,
                                        MSc in Agricultural Production Chain Management from Van Hall Larenstein University of Applied
                                        Sciences, Netherlands and is a recipient of Fellowships from the International Sustainability
                                        Academy, Hamburg, Germany and the Swedish Institute, Sweden. She enjoys travel, music,
                                        cooking, and reading in her free time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ADISOORY BOARD 2 */}
                        <div className="ad-board ad-board-2">
                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>

                                    <div className="card-image">
                                        <img
                                            src="../img/Ad-board-2.jpg"
                                            alt="Dr. Pawan Kumar Sharma"
                                            className="card-img"
                                        />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h4 className="name">Dr. Pawan Kumar Sharma</h4>
                                    <p className="description">Scientist at Sher-e-Kashmir University of Agricultural Science & Technology Jammu, India.</p>
                                    <Button onClick={() => document.getElementById("popup-2").classList.toggle("active-popup")}>
                                        Read Profile
                                    </Button>
                                </div>
                            </div>
                            <div className="popup popup-2" id="popup-2">
                                <div className="popup-overlay"></div>
                                <div className="popup-content">
                                    <div className="popup-header">
                                        <div
                                            className="popup-close"
                                            onClick={() => document.getElementById("popup-2").classList.toggle("active-popup")}
                                        >
                                            &times;
                                        </div>
                                        <h4>Dr. Pawan Kumar Sharma (Ph.D.)</h4>
                                    </div>
                                    <div className="popup-text">
                                        <p>
                                        Dr. Pawan Kumar Sharma (Ph.D.) in Agricultural Economics and presently working as Scientist (Agricultural Economics) in Sher-e-Kashmir University of Agricultural Sciences &amp; Technology of Jammu (J&amp;K), India. He has morethan 16 years of experience in teaching, research, and extension services. Dr. Pawan has guided more than 10 PG/Ph.D. students in agricultural economics. He has been engaged in teaching courses related to environmental economics and natural resource economics. Dr. Sharma is involved in developing, testing, and refining climate friendly and sustainable agriculture technologies for dissemination to the farmers through frontline demonstrations. He is a fellow of International Sustainability Academy (ISA), Hamburg, Germany and worked on the exploration of innovative climate-resilient technologies for sustainable production under climate change. He has handled more than 10 externally funded national and international projects, including that of The South Asian Network for Development and Environmental Economics (SANDEE)-ICIMOD, Nepal. He has done extensive work on mitigating the effect of climate change through crop insurance and conservation practices. Dr. Sharma has published more than 40 research papers on different aspects of agriculture in journals of national and international repute. He has also published more than 06 books and 10 extension bulletins.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ADISOORY BOARD 3 */}
                        <div className="ad-board ad-board-3">
                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>

                                    <div className="card-image">
                                        <img
                                            src="../img/Ad-board-3.jpg"
                                            alt="Estrela Matilde Executive Director of Fundação Príncipe"
                                            className="card-img"
                                        />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h4 className="name">Estrela Matilde</h4>
                                    <p className="description">A Portuguese-Santomean Conservation Biologist.</p>
                                    <Button onClick={() => document.getElementById("popup-3").classList.toggle("active-popup")}>
                                        Read Profile
                                    </Button>
                                </div>
                            </div>
                            <div className="popup popup-3" id="popup-3">
                                <div className="popup-overlay"></div>
                                <div className="popup-content">
                                    <div className="popup-header">
                                        <div
                                            className="popup-close"
                                            onClick={() => document.getElementById("popup-3").classList.toggle("active-popup")}
                                        >
                                            &times;
                                        </div>
                                        <h4>Estrela Matilde</h4>
                                    </div>
                                    <div className="popup-text">
                                        <p>
                                        Estrela Matilde is a Portuguese-Santomean conservation biologist whose life mission has been to change the world, one island at a time. For the past 11 years, she called Príncipe Island her home, dedicating her life to preserving its unique natural heritage. As Executive Director of Fundação Príncipe, a conservation NGO based on Príncipe Island, Estrela spent seven years leading efforts to protect the island’s biodiversity while fostering economic and social development for its local communities. <br /> 
                                        In recognition of her outstanding contributions, Estrela received the Terre de Femmes award from the Yves Rocher Foundation in 2018 and, in 2022, was honored with the prestigious Whitley Award, one of the world’s largest conservation prizes, for her work on Príncipe. That same year, she received an Honourable Mention in the Inspiration category of the VISÃO + Grupo Águas de Portugal Green Awards. <br />
                                        In early 2024, Estrela reached a proud milestone in her career. Having mentored a local leader to take over her position at Fundação Príncipe, she celebrated the moment she realized her organization could thrive without her leadership—a testament to her commitment to sustainable and community-rooted conservation. Now, having moved continents and organizations, Estrela is eager to learn from global peers and continue her work supporting organizations and people in conservation leadership. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
