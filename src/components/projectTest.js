import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectArray from './projectArray';
import './projectTest.css';



class ProjectTest extends Component {
    render() {
        return (
            // FIXES: ADD role= 'list' TO UL, ADD role = 'listitem' TO LI TAGS
            <div className="gecci-main-projects">
                <h4 className='heading text-green'>OUR PROJECTS</h4>
                <div className="projectContainer">
                    {projectArray.map((projectArray) => (
                        <div key={projectArray.id} >
                            <Link to={projectArray.url}>
                                <div className="project-array-box">
                                    <div className="project-array-img"><img src={projectArray.image} alt={projectArray.title} /></div>
                                    <div className="project-array-info">
                                        <h5>{projectArray.title}</h5>
                                        <p><span className="bold">Date:</span>24/05/2024</p>
                                    </div>
                                </div>
                                
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ProjectTest;