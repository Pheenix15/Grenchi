import React from 'react';
import './Forms.css';
import Button from './Button';




const Membership = () => {
    return (
        <div>
            <section >
                <div className="membership-hero">
                    <h2>Empower change, preserve Earth's beauty, secure a brighter future</h2>
                </div>
            </section>

            <section className="Form-section member-page">
                <div className="membership-form">
                    <form className="member-form" action="https://formsubmit.co/191d3b3dfecb291facdd6ba2efb8365a" method="POST">
                        <h3>JOIN GECCI</h3>
                        <input type="hidden" name="_subject" value="New Membership" />
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email" placeholder="Enter Email" required />
                        <input type="text" name="PhoneNumber" placeholder="Enter Your Phone Number" required />
                        <textarea name="Why I want to join Gecci" placeholder="Why do you want to join GECCI"></textarea>
                        <Button className="member-btn" type="submit">BECOME A MEMBER</Button>
                        <input type="hidden" name="_next" value="http://geccinitiative.org/Welcome-to-the-family" />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Membership;
