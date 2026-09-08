import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown,FaAngleRight, FaBars, FaX } from "react-icons/fa6";
import {  } from "react-icons/fa6";
import '../styles/components/Navbar.css'

type DropdownMenu = 'whoWeAre' | 'projects' | 'getInvolved' | null;
// type SubDropDownMenu = 'ClimateBootcamp' | Uncomment if subdropdown increases then attach to handleClick and hover handlers.

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<DropdownMenu>(null);
    const [openSubDropdown, setOpenSubDropdown] = useState<boolean>(false);
    const navRef = useRef<HTMLElement>(null);

    const isMobile = (): boolean => window.innerWidth <= 850;

    //HANDLES CLICK EVENTS
    // Close everything when clicking outside the navbar
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
                setOpenSubDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleClick = (menu: DropdownMenu): void => {
        if (openDropdown === menu) {
            setOpenDropdown(null); // toggle off
            setOpenSubDropdown(false);
        } else {
            setOpenDropdown(menu); // open new
            setOpenSubDropdown(false);
        }
    };

    const handleSubClick = (e: React.MouseEvent): void => {
        e.stopPropagation(); // prevent the click bubbling up to Projects
        setOpenSubDropdown(prev => !prev);
    };

    // HANDLES MOUSE EVENTS FOR DESKTOP
    const handleMouseEnter = (menu: DropdownMenu): void => {
        if (isMobile()) return;
        setOpenDropdown(menu);
    };

    const handleMouseLeave = (): void => {
        if (isMobile()) return;
        setOpenDropdown(null);
    };

    const handleSubMouseEnter = (): void => {
        if (isMobile()) return;
        setOpenSubDropdown(true);
    };

    const handleSubMouseLeave = (): void => {
        if (isMobile()) return;
        setOpenSubDropdown(false);
    };

    return (
        <nav className="navbar" ref={navRef}>
            <div className="fixed-width">
                <div className="nav-logo">
                    <img src="../img/logo/Logo.png" alt="grenchi's logo" className="grenchi-logo" />
                </div>

                <button className="nav-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaX /> : <FaBars />}
                </button>

                {/* Desktop Menu */}
                <div className="nav-links-and-button desktop-menu">

                    <div className="nav-links">
                        <ul className="nav-links-list">
                            <li className="nav-link"><NavLink to='/'>Home</NavLink></li>
                            {/* Dropdown Menu */}
                            <li className="nav-link"
                                onMouseEnter={() => handleMouseEnter('whoWeAre')}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick('whoWeAre')}
                            >
                                <NavLink to='#'>Who we are <FaAngleDown className={openDropdown === "whoWeAre" ? 'nav-icon rotate-nav-icon' : 'nav-icon'} /></NavLink>

                                {openDropdown === 'whoWeAre' && (
                                    <ul className="dropdown">
                                        <li className="nav-link dropdown-link"><NavLink to='/founders-story'>Founders Story</NavLink></li>
                                        <li className="nav-link dropdown-link"><NavLink to='/grenchi-team'>Our Team</NavLink></li>
                                        <li className="nav-link dropdown-link"><NavLink to='/impact-report'>Impact Report</NavLink></li>
                                    </ul>
                                )}
                            </li>
                            {/* Projects Dropdown Menu */}
                            <li className="nav-link"
                                onMouseEnter={() => handleMouseEnter('projects')}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick('projects')}
                            >
                                <NavLink to='#'>Projects <FaAngleDown className={openDropdown === 'projects' ? 'nav-icon rotate-nav-icon' : 'nav-icon'} /></NavLink>

                                {openDropdown === 'projects' && (
                                    <ul className="dropdown">
                                        {/* Secondary Dropdown Menu */}
                                        <li className="nav-link dropdown-link"
                                            onMouseEnter={handleSubMouseEnter}
                                            onMouseLeave={handleSubMouseLeave}
                                            onClick={handleSubClick}
                                        >
                                            <NavLink to='#'>Climate Bootcamp <FaAngleRight className= {openSubDropdown ? 'nav-icon rotate-nav-icon' : 'nav-icon'} /></NavLink>

                                            {openSubDropdown && (
                                                <ul className="dropdown dropdown-secondary">
                                                    <li className="nav-link dropdown-link"><NavLink to='/climate-bootcamp'>Climate Bootcamp</NavLink></li>
                                                    <li className="nav-link dropdown-link"><NavLink to='/E-STEM-projects'>E-STEM Project</NavLink></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="nav-link dropdown-link"><NavLink to='/community-development-program'>Community Development Program</NavLink></li>
                                        <li className="nav-link dropdown-link"><NavLink to='/environmental-education'>Environmental Education</NavLink></li>
                                        <li className="nav-link dropdown-link"><NavLink to='/ecosystem-restoration'>Ecosystem Restoration</NavLink></li>
                                        <li className="nav-link dropdown-link"><NavLink to='/green-hangout'>Green Hangout</NavLink></li>
                                        <li className="nav-link dropdown-link"><NavLink to='/nature-lab-project'>Nature Lab Project</NavLink></li>
                                        <li className="nav-link dropdown-link"><NavLink to='/youth-climate-policy-training'>Youth Climate Policy Training</NavLink></li>
                                    </ul>
                                )}
                            </li>
                            <li className="nav-link"><NavLink to='/Blog'>Blog</NavLink></li>
                            {/* Dropdown Menu */}
                            <li
                                className="nav-link"
                                onMouseEnter={() => handleMouseEnter('getInvolved')}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick('getInvolved')}
                            >
                                <NavLink to='#'>Get Involved <FaAngleDown className={openDropdown === 'getInvolved' ? 'nav-icon rotate-nav-icon' : 'nav-icon'} /></NavLink>
                                {openDropdown === 'getInvolved' && (
                                    <ul className="dropdown">
                                        <li className="nav-link dropdown-link"><NavLink to='/volunteer'>Volunteer</NavLink></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>

                    {/* Donate Button */}
                    <button className="button nav-button" onClick={() => window.open('https://flutterwave.com/donate/fopgfyqstegl/', '_blank')}>
                       Donate Now
                    </button>

                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="nav-links-and-button mobile-menu">
                        <div className="nav-links">
                            <ul className="nav-links-list">
                                <li className="nav-link"><NavLink to='/Home'>Home</NavLink></li>
                                {/* Dropdown Menu */}
                                <li className="nav-link"
                                    onMouseEnter={() => handleMouseEnter('whoWeAre')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick('whoWeAre')}
                                >
                                    <NavLink to='#'>Who we are <FaAngleDown /></NavLink>

                                    {openDropdown === 'whoWeAre' && (
                                        <ul className="dropdown">
                                            <li className="nav-link dropdown-link"><NavLink to='/founders-story'>Founders Story</NavLink></li>
                                            <li className="nav-link dropdown-link"><NavLink to='/grenchi-team'>Our Team</NavLink></li>
                                            <li className="nav-link dropdown-link"><NavLink to='/impact-report'>Impact Report</NavLink></li>
                                        </ul>
                                    )}
                                </li>
                                {/* Projects Dropdown Menu */}
                                <li className="nav-link"
                                    onMouseEnter={() => handleMouseEnter('projects')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick('projects')}
                                >
                                    <NavLink to='#'>Projects <FaAngleDown /></NavLink>

                                    {openDropdown === 'projects' && (
                                        <ul className="dropdown">
                                            {/* Secondary Dropdown Menu */}
                                            <li className="nav-link dropdown-link"
                                                onMouseEnter={handleSubMouseEnter}
                                                onMouseLeave={handleSubMouseLeave}
                                                onClick={handleSubClick}
                                            >
                                                <NavLink to='#'>Climate Bootcamp <FaAngleDown /></NavLink>

                                                {openSubDropdown && (
                                                    <ul className="dropdown dropdown-secondary">
                                                        <li className="nav-link dropdown-link"><NavLink to='/climate-bootcamp'>Climate Bootcamp</NavLink></li>
                                                        <li className="nav-link dropdown-link"><NavLink to='/E-STEM-projects'>E-STEM Project</NavLink></li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li className="nav-link dropdown-link"><NavLink to='/community-development-program'>Community Development Program</NavLink></li>
                                            <li className="nav-link dropdown-link"><NavLink to='/environmental-education'>Environmental Education</NavLink></li>
                                            <li className="nav-link dropdown-link"><NavLink to='/ecosystem-restoration'>Ecosystem Restoration</NavLink></li>
                                            <li className="nav-link dropdown-link"><NavLink to='/green-hangout'>Green Hangout</NavLink></li>
                                            <li className="nav-link dropdown-link"><NavLink to='/nature-lab-project'>Nature Lab Project</NavLink></li>
                                            <li className="nav-link dropdown-link"><NavLink to='/youth-climate-policy-training'>Youth Climate Policy Training</NavLink></li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-link"><NavLink to='/Blog'>Blog</NavLink></li>
                                {/* Dropdown Menu */}
                                <li
                                    className="nav-link"
                                    onMouseEnter={() => handleMouseEnter('getInvolved')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick('getInvolved')}
                                >
                                    <NavLink to='#'>Get Involved <FaAngleDown /></NavLink>
                                    {openDropdown === 'getInvolved' && (
                                        <ul className="dropdown">
                                            <li className="nav-link dropdown-link"><NavLink to='/volunteer'>Volunteer</NavLink></li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>

                        {/* Donate Button */}
                        <button className="button nav-button" onClick={() => window.open('https://flutterwave.com/donate/fopgfyqstegl/', '_blank')}>
                            Donate Now
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;