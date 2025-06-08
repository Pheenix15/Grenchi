import React from 'react';
import './Forms.css';
import Button from './Button';

const Volunteer = () => {
    return (
        <div>
            <section>
                <div className="volunteer-hero">
                    <h2>BECOME A VOLUNTEER</h2>
                </div>
            </section>

            <section className="Form-section volunteer-page">
                <div className="volunteer-form">
                    <form className="volunteering-form" action="https://formsubmit.co/191d3b3dfecb291facdd6ba2efb8365a" method="POST">
                        <h3>VOLUNTEER WITH GECCI</h3>
                        <input type="hidden" name="_subject" value="New Volunteer" />
                        <input type="text" name="Name" placeholder="Enter Your Full Name" required />
                        <input type="email" name="Email" placeholder="Enter Email" required />
                        <input type="text" name="PhoneNumber" placeholder="Enter Your Phone Number" required />
                        <textarea name="Skills" placeholder="What Skill do you wish to volunteer with"></textarea>
                        <Button className="member-btn" type="submit">BECOME VOLUNTEER</Button>
                        <input type="hidden" name="_next" value="http://geccinitiative.org/Thank-you-for-volunteering" />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Volunteer;
