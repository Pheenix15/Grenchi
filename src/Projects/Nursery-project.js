import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const NurseryProject = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero hero-gh">
                    <div className="project-name">
                        <h2 className='heading'>TREE NURSERY ESTABLISHMENT</h2>
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
                                <h3 className='heading'>Nature Lab Project</h3>
                                <div className="article-content">
                                    <div className="article-text">
                                        <p>
                                            The establishment of nurseries in schools plays vital role in fostering environmental stewardship among students. It allows students to actively participate in nurturing plants and understanding the importance of environmental conservation. This nursery serves as a practical and educational platform where they learn about various plant species, their growth patterns, and the benefits they provide to the ecosystem.    
                                        </p>

                                        <div className="article-img erca-seedling-img">
                                            <img src="../img/NLP/NLP-2.jpg"  alt="Image of children tending to seedling in polypots" />
                                        </div>

                                        
                                    </div>                       
                                    <div className="article-gallary">
                                        <h2>Gallery</h2>
                                        <div className="swiper">
                                            <div className="slide-content">
                                                <div className="image-list swiper-wrapper">
                                                    <img src="../img/NLP/NLP-1.jpg" className="sliding-img swiper-slide"  alt="Students holding seedling in polypots" />
                                                    <img src="../img/NLP/NLP-2.jpg" className="sliding-img swiper-slide"  alt="Students tending to seedling in polypots" />
                                                    <img src="../img/NLP/NLP-5" className="sliding-img swiper-slide" alt="Students tending to seedling in polypots" />
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

export default NurseryProject;
