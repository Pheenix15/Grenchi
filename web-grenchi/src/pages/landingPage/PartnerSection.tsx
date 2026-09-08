import "../../styles/pages/landingPage/PartnerSection.css"

const partners = [
  {
    id: 0,
    url: "../../img/partners/partner-1.png",
    alt: "International Sustainability Academy"
  },

  {
    id: 1,
    url: "../../img/partners/partner-2.png",
    alt: "North American Academy for Environmental Education"
  },

  {
    id: 2,
    url: "../../img/partners/partner-3.png",
    alt: "Nigerian Conservation Foundation"
  },

  {
    id: 3,
    url: "../../img/partners/partner-4.png",
    alt: "Nigerian Climate Justice Aliance"
  },

  {
    id: 4,
    url: "../../img/partners/partner-5.png",
    alt: "The Movement Trust"
  },
]

// (spread operator) duplicates logos for scroll loop
const scrollingPartners = [...partners, ...partners];

export default function PartnerSection() {
  return (
    <section className="partner-section">
        <div className="partner-fixed-width">
          <div className="partner-heading">
              <h2>Our Partners and Supporters</h2>
              <p>We partner with organizations, institutions and communities that share our vision for a greener future </p>
          </div>
          
          <div className="partner-logo-wrapper">
            <div className="partners-container">
                {scrollingPartners.map((partner) => (
                  <div key={partner.id} className="partner-logo">
                    <img src={partner.url} alt={partner.alt} />
                  </div>
                ))}
            </div>
          </div>

          <div className="partner-heading">
              <p>"Together we amplify impact and drive lasting change for communities and nature."</p>
          </div>
            
        </div>
    </section>
  )
}
