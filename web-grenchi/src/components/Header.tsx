import { Link } from 'react-router-dom';

import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import '../styles/components/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="slogan">
                    <p className="RightToLeft">GRENCHI: Towards a Greener Future; United in Action&nbsp;&nbsp;&nbsp;</p>
                    <p className="RightToLeft slogan2">GRENCHI: Towards a Greener Future; United in Action&nbsp;&nbsp;&nbsp;</p>
                </div>
                
                <div className="header-icons">
                    <Link target="_blank" aria-label='facebook Link' to="https://www.facebook.com/GreenEnvironmentandClimateChangeInitiative/"><FaFacebookF aria-hidden='true' /></Link>
                    <Link target="_blank" aria-label='Linkedin Link' to="https://www.linkedin.com/company/green-environment-and-climate-change-initiative-gecci/"><FaLinkedinIn /></Link>
                    <Link target="_blank" aria-label='Twitter Link' to="https://twitter.com/GECC_Initiative"><FaXTwitter /></Link>
                    <Link target="_blank" aria-label='Instagram Link' to="https://www.instagram.com/gecc_initiative/"><FaInstagram /></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;