import Header from '../components/Header';
import Navbar from '../components/Navbar';
import AboutSection from './landingPage/About-section';
import '../styles/pages/Home.css'
import ProjectSection from './landingPage/Project-Section';
import DonateSection from './landingPage/DonateSection';
import VolunteerSection from './landingPage/VolunteerSection';
import PartnerSection from './landingPage/PartnerSection';
import TeamSection from './landingPage/TeamSection';
import NewsAndUpdates from './landingPage/News-and-updates';

interface Metric {
    label: string,
    value: number
}

function Home() {

    // Placeholder Array for Metrics
    const metrics: Metric[] = [
        {
            label: 'Projects',
            value: 20
        },
        {
            label: 'Communities',
            value: 6
        },
        {
            label: 'Schools',
            value: 15
        },
    ]
    return (
        <div className="homepage">
            {/* Header */}
            <Header />

            {/* Nav */}
            <Navbar />

            <div className="hero">
                <div className="hero-fixed-width">
                    <div className="hero-content">
                        <h1 className="hero-text">
                            We Dance To The Tune Of The Environment
                        </h1>

                        <div className="hero-buttons">
                            <button className="button">View all projects</button>
                            <button className="alt-button">Volunteer</button>
                        </div>
                    </div>
                </div>
                
                {/* Metrics */}
                <div className="hero-metrics">
                    <div className="metrics-fixed-width">
                        {metrics.map((metric) => (
                            <div key={metric.value} className="metric">
                                <p>{metric.value} +</p>
                                <p>{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <AboutSection />

            {/* Project Section */}
            <ProjectSection />

            {/* Donate Section */}
            <DonateSection />

            {/* Volunteer Section */}
            <VolunteerSection />

            {/* Partner Section */}
            <PartnerSection />

            {/* Team Section */}
            <TeamSection />

            {/* News and Updates */}
            <NewsAndUpdates />
        </div>
    );
}

export default Home;