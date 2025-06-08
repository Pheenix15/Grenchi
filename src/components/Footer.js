import React, { Component } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import './Footer.css'
//import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-gecci">
                    <div className="gecci-footer-content">
                    <div className="footer-logo">
                        <Link to='/'><img src={logo} className='logo gecci-logo' alt='logo'/></Link>
                    </div>
                    <p>Green Environment and Climate Change Initiative (GRENCHI) is an environmental conservation organization incorporated under the law of the federal republic of Nigeria.</p>
                    </div>
                </div>
                <div className="footer-contact">
                    <h3>CONTACT</h3>
                    <div className="contact-info">
                        <div className="contact-info-content address">
                            <i className="fas fa-map-marker-alt" style={{color: 'var(--mainGreen)'}}></i>
                            <p>Awka,Anambra State Nigeria</p>
                        </div>
                        <div className="contact-info-content email">
                            <i className="fa-solid fa-envelope" style={{color: 'var(--mainGreen)'}}></i>
                            <a href="mailto:info.grenchi@gmail.com"><p>info.grenchi@gmail.com</p></a>
                        </div>
                        <div className="contact-info-content telephone">
                            <i className="fa fa-sharp fa-solid fa-phone" style={{color: 'var(--mainGreen)'}}></i>
                            <a href="tel:+2349022842838"><p>(+234) 09022842838</p></a>
                        </div>
                        <div className="contact-info-content social-media-icons">
                            <a aria-label='Facebook Link' target="_blank" rel="noreferrer" href="https://www.facebook.com/GreenEnvironmentandClimateChangeInitiative/"><i aria-hidden='true' className="fab fa-facebook-f" style={{color: 'var(--mainGreen)'}}></i></a>
                            <a aria-label='Linkedin Link' target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/green-environment-and-climate-change-initiative-gecci/"><i aria-hidden='true' className="fab fa-linkedin-in" style={{color: 'var(--mainGreen)'}}></i></a>
                            <a aria-label='Twitter Link' target="_blank" rel="noreferrer" href="https://twitter.com/GECC_Initiative"><i aria-hidden='true' className="fab fa-x-twitter" style={{color: 'var(--mainGreen)'}}></i></a>
                            <a aria-label='Instagram Link' target="_blank" rel="noreferrer" href="https://www.instagram.com/gecc_initiative/"><i aria-hidden='true' className="fab fa-instagram" style={{color: 'var(--mainGreen)'}}></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-project">
                    <h3>OUR PROJECTS</h3>
                    <ul>
                        <li>
                            <Link to="./Project">PROJECTS</Link>
                        </li>
                        <li>
                            <Link to="./blog">BLOG</Link>
                        </li>
                        <li>
                            <Link to="./Membership">MEMBERSHIP</Link>
                        </li>
                        <li>
                            <Link to="./Volunteer">VOLUNTEER</Link>
                        </li>
                        <li>
                            <Link to="https://flutterwave.com/donate/fopgfyqstegl">DONATE</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; grenchi.org {new Date().getFullYear()}.</p>
            </div>
        </footer>
        );
    }
}


export default Footer;
