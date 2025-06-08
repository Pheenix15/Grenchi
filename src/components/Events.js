import React from 'react';
import { Link } from 'react-router-dom';
import {eventsArray} from './projectArray';
import './Projects.css';
import './Events.css';

const Events = () => {

    return (
        <div>
            <section className="main-project-hero events-hero">
                            <div className="project-name">
                                <h2>EVENTS</h2>
                            </div>
            </section>
            <div className="gecci-main-projects">
                <h4 className='heading text-green'>Past/Upcoming Events</h4>
                <div className="projectContainer events-container">
                    {eventsArray.map((eventsArray) => (
                        <div key={eventsArray.id} className='event-project' >
                            <Link to={eventsArray.url} className='event-link' >
                                <div className="event-box">
                                    <div className="event-img"><img src={eventsArray.image} alt={eventsArray.title} /></div>
                                    <div className="event-info">
                                        <h5>{eventsArray.title}</h5>
                                        <p><span className="bold">Date:</span>{eventsArray.date}</p>
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

export default Events;