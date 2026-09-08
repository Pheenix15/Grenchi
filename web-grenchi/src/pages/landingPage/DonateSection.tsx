import "../../styles/pages/landingPage/DonateSection.css"
export default function DonateSection() {
  return (
    <section className='donate-section'>
        <div className="donate-fixed-width">
            <div className="donate-icon">
                <img src="../../img/leaves_in_circle.png" alt="two white leafs in a white circle" />
            </div>

            <div className="donate-cta-container">
                <div className="donate-cta">
                    <h3>Lets make the World Greener Together</h3>

                    <p>Your donation helps sustain local projects that are actively monitored and built for long-term impact.</p>
                </div>

                
                <a 
                    className="donate-inner-button donate-button"
                    href="https://flutterwave.com/donate/fopgfyqstegl"
                    target="_blank"
                >
                    <button className="button white-button">Donate Now</button>
                </a>
            </div>
            
            <a 
                className="donate-outter-button donate-button"
                href="https://flutterwave.com/donate/fopgfyqstegl" 
                target="_blank" 
            >
                <button className="button white-button">Donate Now</button>
            </a>
            
        </div>

            
    </section>
  )
}
