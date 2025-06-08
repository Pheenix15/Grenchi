import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectArticle.css'
import { initSwiper } from '../Swiper'
import { sideBarProjectArray } from '../components/projectArray';

const TreePlantingProject = () => {

        useEffect(() => {
            // Initialize Swiper
            initSwiper();
        }, []);

        return (
            <div>
                <section className="project-hero Nlp-hero">
                    <div className="project-name">
                        <h2 className='heading'>TREE PLANTING IN SCHOOLS</h2>
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
                                <div className="article-content">                  
                                    <div className="article-gallary">
                                        <h2>Gallery</h2>

                                        <h3>IMAGES OF TREE PLANTING IN ST. JOHN OF GOD SECONDARY SCHOOL, AWKA</h3>
                                        <div className="swiper">
                                            <div className="slide-content">
                                                <div className="image-list swiper-wrapper">
                                                <img src="../img/Tree Planting/Schools/Tree-planting-sjhs-1.jpg" className="sliding-img swiper-slide" alt='Students of St. John of God with the Director Mrs Mmachukwu digging the hole for the seedling transplant' />
                                                <img src="../img/Tree Planting/Schools/Tree-planting-sjhs-2.jpg" className="sliding-img swiper-slide" alt='Five students of St. John of God holding tree seedlings in their polypots' />
                                                <img src="../img/Tree Planting/Schools/Tree-planting-sjhs-3.jpg" className="sliding-img swiper-slide" alt='Students of St. John of God transplanting the seedling from the polypot to the permanent site. ' />
                                                <img src="../img/Tree Planting/Schools/Tree-planting-sjhs-4.jpg" className="sliding-img swiper-slide" alt='Students of St. John of God with the Director transplanting the seedling from the polypot to the permanent site.' />
                                                </div>
                                            </div>
                                            <div className="swiper-button-next swiper-btn"></div>
                                            <div className="swiper-button-prev swiper-btn"></div>
                                            <div className="swiper-pagination"></div>
                                        </div>
                                    </div>
                                    <div className="article-gallary">
                                        <h3>IMAGES OF TREE PLANTING IN ST. JOSEPH NURSERY AND PRIMARY SCHOOL, NNEWI</h3>
                                        <div className="swiper">
                                            <div className="slide-content">
                                                <div className="image-list swiper-wrapper">
                                                <img src="../img/Tree Planting/Schools/Tree-planting-sjnps-1.jpg" className="sliding-img swiper-slide" alt='Students of St. Joseph holding tree seedlings in polypots' />
                                                <img src="../img/Tree Planting/Schools/Tree-planting-sjnps-2.jpg" className="sliding-img swiper-slide" alt='Pupils and teachers of St. Joseph transplanting the seedlngs into the ground' />
                                                <img src="../img/Tree Planting/Schools/Tree-planting-sjnps-3.jpg" className="sliding-img swiper-slide" alt='Pupils and teachers of St. Joseph with the director of GECCI (formally Laura Green Foundation)transplanting the seedlngs into the ground' />
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

export default TreePlantingProject;
