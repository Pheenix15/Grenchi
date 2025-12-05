import logo from '../logo.png';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Tracks whether the mobile menu is open or closed
    const [activeDropdowns, setActiveDropdowns] = useState([]); // Holds the list of dropdowns that are currently active (open) 
    
    const menuRef = useRef(); // Reference to the menu DOM element (used to detect clicks outside and transitions)

    // Adds event listener when component mounts, and removes it when it unmounts
    useEffect(() => {
        // Closes all dropdowns if user clicks outside the menu
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setActiveDropdowns([]);
            }
        };

        document.addEventListener('click', handleClickOutside);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Toggles the menu open/closed
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    // Clears inline transition styles after the transition ends
    const handleTransitionEnd = (e) => {
        if (e.target === menuRef.current) {
            e.target.style.transition = '';
        }
    };

    const toggleDropdown = (index, e, isSubDropdown = false) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        setActiveDropdowns(prevState => {
            let newActiveDropdowns;
            if (prevState.includes(index)) {
                // If the clicked dropdown is already active, remove it
                newActiveDropdowns = prevState.filter(i => i !== index);
            } else {
                if (isSubDropdown) {
                    // If it's a sub-dropdown, add it to the active dropdowns without removing others
                    newActiveDropdowns = [...prevState, index];
                } else {
                    // If it's a top-level dropdown, replace all active dropdowns with this one
                    newActiveDropdowns = [index];
                }
            }
            return newActiveDropdowns;
        });
    };

    return (
        <header className="header-nav">
            <div className="container">
                <div className="logo nav-logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <nav 
                    ref={menuRef}
                    className={`menu ${isMenuOpen ? 'open' : ''}`}
                    style={{ transition: isMenuOpen ? 'transform 0.5s ease' : '' }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    <div className="head">
                        <div className="logo"><Link to='/'><img src={logo} alt="logo" /></Link></div>
                        <button type="button" className="close-menu-btn" onClick={toggleMenu}></button>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className={`dropdown who-we-are ${activeDropdowns.includes('who-we-are') ? 'active' : ''}`}>
                            <Link to="#" onClick={(e) => toggleDropdown('who-we-are', e)}>Who We Are</Link>
                            <i className="fa fa-angle-down" onClick={(e) => toggleDropdown('who-we-are', e)}></i>
                            <ul className="tab">
                                <li><a href="/#about"><span>About Us</span></a></li>
                                <li><Link to="/Team"><span>Our Team</span></Link></li>
                                <li><Link to="/Impact-Report"><span>Impact Report</span></Link></li>
                            </ul>
                        </li>
                        {/* PROJECT TAB */}
                        <li className={`dropdown project-tab ${activeDropdowns.includes('projects') ? 'active' : ''}`}>
                            <Link to="#" onClick={(e) => toggleDropdown('projects', e)}>Projects</Link>
                            <i className="fa-solid fa-angle-down" onClick={(e) => toggleDropdown('projects', e)}></i>
                            <ul className="tab">
                                {/* CLIMATE BOOTCAMP SUB-TAB */}
                                <li className={`dropdown ${activeDropdowns.includes('climate-bootcamp') ? 'active' : ''}`}>
                                    <Link to="#" onClick={(e) => toggleDropdown('climate-bootcamp', e, true)} ><span>Climate Bootcamp</span></Link>

                                    <i className="fa-solid fa-angle-right" onClick={(e) => toggleDropdown('climate-bootcamp', e, true)}></i>
                                    <ul className="tab tab-right sub-dropdown">
                                        <li><Link to="/Climate-Bootcamp"><span>Climate Bootcamp</span></Link></li>
                                        <li><Link to="/E-STEM-Projects"><span>E-STEM Projects</span></Link></li>
                                    </ul>
                                </li>

                                <li className="dropdown"><Link to="/CommunityEngagement"><span>Community Engagement</span></Link></li>
                                <li className="dropdown"><Link to="/Environmental-Education" ><span>Environmental Education</span></Link></li>
                                <li className="dropdown"><Link to="/Ecosystem-Restoration"><span>Ecosystem Restoration</span></Link></li>
                                <li className="dropdown"><Link to="/Projects/GreenHangout"><span>Green Hangout</span></Link></li>
                                <li className="dropdown"><Link to="/Nature-Lab-Project"><span>Nature Lab Project</span></Link></li>
                                <li className="dropdown"><Link to="/Projects/YouthClimatePolicy"><span>Youth Climate Policy Training</span></Link></li>
                            </ul>
                        </li>
                        <li><Link to="./blog">Blog</Link></li>
                        <li className={`dropdown get-involved ${activeDropdowns.includes('get-involved') ? 'active' : ''}`}>
                            <Link to="#" onClick={(e) => toggleDropdown('get-involved', e)}>Get Involved</Link>
                            <i className="fa fa-angle-down" onClick={(e) => toggleDropdown('get-involved', e)}></i>
                            <ul className="tab">
                                <li><Link to="/Membership"><span>Become a Member</span></Link></li>
                                <li><Link to="/Volunteer"><span>Volunteer</span></Link></li>
                                <li><Link to="/Events"><span>Events</span></Link></li>
                                <li><Link to="/Career"><span>Career</span></Link></li>
                            </ul>
                        </li>
                        <li><Link to="/Contact">Contact</Link></li>
                        {/* DONATE BUTTON */}
                        <li style={{ borderBottom: "none" }}>
                            <button type="button" className="nav-btn nav-donate-btn">
                                <a href="https://flutterwave.com/donate/fopgfyqstegl" target="_blank" rel="noopener noreferrer">
                                    <span aria-hidden="true"></span>Donate
                                </a>
                            </button>
                        </li>
                        
                    </ul>
                </nav>
                <div className="header-right">
                    <button type="button" className="open-menu-btn" onClick={toggleMenu}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;