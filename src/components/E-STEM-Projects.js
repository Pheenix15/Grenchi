import './Projects.css';

function ESTEMProjects() {
    return ( 
        <div className="E-stem-projects">
            <section className="main-project-hero E-STEM-hero">
                <div className="project-name">
                    <h2>E-STEM Project</h2>
                </div>
            </section>

            <section>

                <div className="intro-container">
                    <div className="intro">
                        <div className="intro-txt">
                            <h3 className='heading text-green'>E-STEM Project</h3>
                            <p>
                                Environmental-STEM is a revolutionary approach to education that transforms traditional learning by connecting scientific principles with real-world environmental challenges. This innovative methodology bridges the gap between theoretical knowledge and practical application, empowering students to tackle pressing environmental issues while mastering fundamental STEM concepts. Through hands-on project design and problem-solving experiences, Environmental-STEM education creates a dynamic learning environment where students actively engage with their surroundings, collecting data, analyzing patterns, and developing sustainable solutions.
                                <br />
                                <br />
                                This integrated approach enhances academic achievement while fostering environmental stewardship, as students learn to apply mathematical models to track climate patterns, employ engineering principles to design sustainable infrastructure, and utilize scientific methodologies to monitor ecosystem health. The practical importance lies in its ability to prepare students for job creation and  solving tomorrow's challenges by combining technical expertise with environmental consciousness, ensuring they're equipped to address complex sustainability issue.
                            </p>
                        </div>

                        <div className="intro-img">
                            <img src="img/Climate-Bootcamp-2025/E-STEM.jpg" alt="Student tending to seedlings" />
                        </div>
                    </div>
                </div>

                <div className="gecci-main-projects">
                    <h4 className='heading text-green'>E-STEM Projects</h4>
                    <div className="E-STEM-project-Container">
                        <div className='E-STEM-video-container' >
                            <div className="E-STEM-video">
                                <div className="article-video">
                                    <iframe 
                                        src="https://www.youtube.com/embed/heRFY4462eY" 
                                        title="Environmental-STEM Student Project/Plastic Pollution Control Plan #climateaction #africa" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen>
                                    </iframe>
                                </div>

                                <div className="video-title">
                                    <h5>Plastic Pollution Control Plan (PPCP) Project by Environmental Club Student of Capital City Secondary School, Awka</h5>
                                </div>
                            </div>
                            
                            <div className="E-STEM-video">
                                <div className="article-video">
                                    <iframe
                                        src="https://www.youtube.com/embed/ZSnXUxO53q4" 
                                        title="Student Environmental-STEM Project - Installation of Water Filtration System for Safe Drinking Water" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin" 
                                        allowfullscreen></iframe>
                                </div>

                                <div className="video-title">
                                    <h5>Installation of Water Filtration System for Safe Drinking Water by Environment Club Student of Demonstration Secondary School, Awka</h5>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default ESTEMProjects;