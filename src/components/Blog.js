import React from 'react';
import { Link } from 'react-router-dom';
import {blogArray} from './projectArray';
import './Projects.css';

const Blogs = () => {

    return (
        <div>
            <section className="main-project-hero blog-hero">
                    <div className="project-name">
                        <h2>BLOG POSTS</h2>
                    </div>
            </section>
            
            <div className="gecci-main-projects">
                <h4 className='heading text-green'>Blog Posts</h4>
                <div className="projectContainer">
                    {blogArray.map((blogArray) => (
                        <div key={blogArray.id} >
                            <Link to={blogArray.url}>
                                <div className="project-array-box">
                                    <div className="project-array-img"><img src={blogArray.image} alt={blogArray.title} /></div>
                                    <div className="project-array-info">
                                        <h5>{blogArray.title}</h5>
                                        <p><span className="bold">Date:</span>{blogArray.date}</p>
                                    </div>
                                </div>
                                
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;