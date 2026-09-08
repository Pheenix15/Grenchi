import { useState } from 'react'
import '../../styles/pages/landingPage/About-section.css'


type AboutTab = 'Our Mission' | 'Our Vision' | 'Our Belief'
function AboutSection() {
    const [aboutTab, setAboutTab] = useState<AboutTab>('Our Mission')
  return (
    <section className="about-section">
        <div className="about-fixed-width">
            <div className="about-left about-img">
                <img src="../img/abt-img.jpg" alt="A woman farmer holding a tray of seedlings provided by GRENCHI" />
            </div>

            <div className="about-right">
                <h2>About Us</h2>

                <div className="about-us">
                    <p>
                        The Green Environment and Climate Change Initiative (GRENCHI) is an environmental conservation organization legally incorporated under the laws of the Federal Republic of Nigeria and committed to combating climate change and deforestation. <br/>Aligned with the UN Sustainable Development Goals and the UN Decade on Ecosystem Restoration, GRENCHI implements Forest Landscape Restoration and conservation projects to restore degraded ecosystems, protect biodiversity, and promote sustainable land use practices that benefit both nature and local communities. GRENCHI also prioritizes education and awareness campaigns to inform the public about environmental issues and their broader societal impacts.
                    </p>

                    <div className="about-us-tabs">
                        <div className="about-tab-buttons">
                            <div 
                                role="button"
                                tabIndex={0}
                                className={ aboutTab === "Our Mission" ?  'tab mission-tab active' : 'tab mission-tab'}
                                onClick={() => setAboutTab('Our Mission')}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                    setAboutTab("Our Mission");
                                    }
                                }}
                            >
                                Our Mission
                            </div>

                            <div 
                                role="button"
                                tabIndex={1}
                                className={ aboutTab === "Our Vision" ?  'tab vision-tab active' : 'tab vision-tab'}
                                onClick={() => setAboutTab('Our Vision')}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                    setAboutTab("Our Vision");
                                    }
                                }}
                            >
                                Our Vision
                            </div>

                            <div 
                                role="button"
                                tabIndex={2}
                                className={ aboutTab === "Our Belief" ?  'tab belief-tab active' : 'tab belief-tab'}
                                onClick={() => setAboutTab('Our Belief')}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                    setAboutTab("Our Belief");
                                    }
                                }}
                            >
                                Our Belief
                            </div>
                        </div>

                        <div className="about-tab-text">
                            {aboutTab === 'Our Mission' ? (
                                <p>Our mission is to protect the environment using nature-based solutions, promote sustainable use of natural resources, and advocate for climate justice.</p>
                            ) : aboutTab === 'Our Vision' ? (
                                <p>GRENCHI has a vision of a Nigeria where people consciously protect the environment for the present and future generations.</p>
                            ) : (
                                <p>GRENCHI believes in singing the songs of nature in the ears of the people so that in doing the actual work, we dance to the tone of the environment.</p>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection