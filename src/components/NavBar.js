import logo from '../logo.png';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'



class NavBar extends Component {
    state = {
        isMenuOpen: false,
        activeDropdowns: []
    };

    menuRef = React.createRef();

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    toggleMenu = () => {
        this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
    }

    handleTransitionEnd = (e) => {
        if (e.target === this.menuRef.current) {
            e.target.style.transition = '';
        }
    }

    toggleDropdown = (index, e, isSubDropdown = false) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        this.setState(prevState => {
            let newActiveDropdowns;
            if (prevState.activeDropdowns.includes(index)) {
                // If the clicked dropdown is already active, remove it
                newActiveDropdowns = prevState.activeDropdowns.filter(i => i !== index);
            } else {
                if (isSubDropdown) {
                    // If it's a sub-dropdown, add it to the active dropdowns without removing others
                    newActiveDropdowns = [...prevState.activeDropdowns, index];
                } else {
                    // If it's a top-level dropdown, replace all active dropdowns with this one
                    newActiveDropdowns = [index];
                }
            }
            return { activeDropdowns: newActiveDropdowns };
        });
    }

    handleClickOutside = (e) => {
        if (this.menuRef.current && !this.menuRef.current.contains(e.target)) {
            this.setState({ activeDropdowns: [] });
        }
    }

    render() {
        const { isMenuOpen, activeDropdowns } = this.state;

        return (
            <header className="header-nav">
                <div className="container">
                    <div className="logo nav-logo">
                        <Link to='/'><img src={logo} alt="logo" /></Link>
                    </div>
                    <nav 
                        ref={this.menuRef}
                        className={`menu ${isMenuOpen ? 'open' : ''}`}
                        style={{ transition: isMenuOpen ? 'transform 0.5s ease' : '' }}
                        onTransitionEnd={this.handleTransitionEnd}
                    >
                        <div className="head">
                            <div className="logo"><Link to='/'><img src={logo} alt="logo" /></Link></div>
                            <button type="button" className="close-menu-btn" onClick={this.toggleMenu}></button>
                        </div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className={`dropdown who-we-are ${activeDropdowns.includes('who-we-are') ? 'active' : ''}`}>
                                <Link to="#" onClick={(e) => this.toggleDropdown('who-we-are', e)}>Who We Are</Link>
                                <i className="fa fa-angle-down" onClick={(e) => this.toggleDropdown('who-we-are', e)}></i>
                                <ul className="tab">
                                    <li><a href="/#about"><span>About Us</span></a></li>
                                    <li><Link to="/Team"><span>Our Team</span></Link></li>
                                    <li><Link to="/Impact-Report"><span>Impact Report</span></Link></li>
                                </ul>
                            </li>
                            {/* PROJECT TAB */}
                            <li className={`dropdown project-tab ${activeDropdowns.includes('projects') ? 'active' : ''}`}>
                                <Link to="#" onClick={(e) => this.toggleDropdown('projects', e)}>Projects</Link>
                                <i className="fa fa-angle-down" onClick={(e) => this.toggleDropdown('projects', e)}></i>
                                <ul className="tab">
                                    {/* ECOSYSTEM RESTORATION TAB */}
                                    <li className="sub-drodown dropdown"><Link to="/Projects/Eco-Restoration-for-Climate-Action"><span>Ecosystem Restoration</span></Link></li>
                                    {/* ENVIRONMENTAL EDUCATION TAB */}
                                    <li className="dropdown"><Link to="/Environmental-Education" ><span>Environmental Education</span></Link></li>
                                    <li className="dropdown"><Link to="/CommunityEngagement"><span>Community Engagement</span></Link></li>
                                    <li className="dropdown"><Link to="/Nature-Lab-Project"><span>Nature Lab Project</span></Link></li>
                                    <li className="dropdown"><Link to="/Projects/GreenHangout"><span>Green Hangout</span></Link></li>
                                    <li className="dropdown"><Link to="/Climate-Bootcamp"><span>Climate Bootcamp</span></Link></li>
                                    <li className="dropdown"><Link to="/Projects/YouthClimatePolicy"><span>Youth Climate Policy Training</span></Link></li>
                                </ul>
                            </li>
                            <li><Link to="./blog">Blog</Link></li>
                            <li className={`dropdown get-involved ${activeDropdowns.includes('get-involved') ? 'active' : ''}`}>
                                <Link to="#" onClick={(e) => this.toggleDropdown('get-involved', e)}>Get Involved</Link>
                                <i className="fa fa-angle-down" onClick={(e) => this.toggleDropdown('get-involved', e)}></i>
                                <ul className="tab">
                                    <li><Link to="/Membership"><span>Become a Member</span></Link></li>
                                    <li><Link to="/Volunteer"><span>Volunteer</span></Link></li>
                                    <li><Link to="/Events"><span>Events</span></Link></li>
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
                        <button type="button" className="open-menu-btn" onClick={this.toggleMenu}>
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;