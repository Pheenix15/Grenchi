import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const CommunityEngagement = () => {

    return (
        <div>
            <section className="main-project-hero  community-engagement">
                <div className="project-name">
                    <h2>COMMUNITY ENGAGEMENT</h2>
                </div>
            </section>

            <section>

                <div className="intro-container">
                    <div className="intro">
                        <div className="intro-txt">
                            <h3 className='heading text-green'>Community Engagement</h3>
                            <p>
                            We believe that communities are the heart of meaningful environmental action. Our work is rooted in the understanding that sustainable change begins at the grassroots level, where individuals come together to protect their environment and build resilience against climate change. Through community-focused initiatives and engagements, we empower local people with the tools, knowledge, and resources they need to adopt eco-friendly practices, conserve natural resources, and mitigate the impacts of climate change. From organizing empowerment programs and workshops, we work hand-in-hand with communities to create tangible, lasting impact. We partner with local leaders and organizations, to ensure that our efforts are culturally relevant and sustainable.
                            </p>
                        </div>

                        <div className="intro-img">
                            <img src="img/Ebenebe/eb-1.jpg" alt="Members of the Agrarian community listening to Dr. Ogbodo at the Climate resiliance workshop" />
                        </div>
                    </div>
                </div>

                <div className="gecci-main-projects">
                    <h4 className='heading text-green'>Our Community Engagement Activities</h4>
                    <div className='project-container' >
                        <div className="project-box">
                            <div className="project-img"><img src='img/Projects/eb-8.jpg' alt='Climate Resiliance Workshop' /></div>
                            <div className="project-info">
                                <h5 className='project-info-heading' >Climate Resiliance Workshop</h5>
                                <p>Green Environment and Climate Change Initiative (GRENCHI), with the unwavering support of the Nigeria Climate Justice Alliance (NCJA), Nigeria Conservation Foundation (NCF), and in partnership with the Department of Forestry and Wildlife, Ministry of Environment, Anambra State, is making a lasting impact in the heart of Ebenebe. Climate change introduces severe negative impacts, and sadly, communities and indigenous people who contribute little to nothing to climate change face the brunt of these impacts as they are the most affected by climate change. Additionally, they most times lack the necessary resource and information for both adaptation, and resilience.</p>
                                <Link to='../Projects/Ebenebe-Climate-Resilience-Workshop'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                            </div>
                        </div>

                        <div className="project-box project-box-reverse">
                            <div className="project-info">
                                <h5 className='project-info-heading' >Agriculture Empowerment Programme</h5>
                                <p>In our ongoing effort to bolster the resilience of the Ebenebe Community in Awka North Local Government Area, Anambra State, Nigeria, we recently conducted an Agriculture Empowerment Programme for twenty (20) farmers within the community.</p>
                                <Link to='../Projects/Ebenebe-Agriculture-Empowerment-Programme'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                            </div>

                            <div className="project-img"><img src='img/Projects/EAEP-2.jpg' alt='Agriculture Empowerment Programme' /></div>
                        </div>

                        <div className="project-box">
                            <div className="project-img"><img src='img/Projects/ECE-2.jpg' alt='Agriculture Empowerment Programme' /></div>

                            <div className="project-info">
                                <h5 className='project-info-heading' >Community Engagement</h5>
                                <p>Recognizing these challenges, our organization has initiated a comprehensive community development project aimed at building resilience against climate change and preventing deforestation. Our goal is to empower the Ebenebe community to sustainably manage their natural resources while improving their overall quality of life.</p>
                                <Link to='../Projects/Ebenebe-Community-Engagement'><div className="project-link">Read More<i className="fa-solid fa-arrow-right"></i></div></Link>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
}

export default CommunityEngagement;