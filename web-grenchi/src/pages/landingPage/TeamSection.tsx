import { Swiper, SwiperSlide } from 'swiper/react';
import "../../styles/pages/landingPage/TeamSection.css"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
// Swiper Modules
import { Pagination, Navigation } from 'swiper/modules';


const team = [
    {
        id: 0,
        name: "Mrs. Mmachukwu Loretta Obimdike",
        position: "GRENCHI, founder/Director",
        image: "../../img/team/team-1.png",
    },

    {
        id: 1,
        name: "Dr. Oluropo Apalowo",
        position: "GRENCHI, Programme Director",
        image: "../../img/team/team-2.png",
    },

    {
        id: 3,
        name: "Mr. Princewill Ebubechukwu Okoye",
        position: "GRENCHI Programme Associate",
        image: "../../img/team/team-3.png",
    },
]

export default function TeamSection() {
  return (
    <section className='team-section'>
        <div className="team-fixed-width">
            <div className="team-heading">
                <h2>The people behind the mission</h2>
                <p>A passionate team of enviromentalist, educators and changemakers working together towards a greener future</p>
            </div>
            
            <div className="grenchi-team">
                <Swiper
                    className='mySwiper'
                    modules={[
                        Pagination,
                        Navigation
                    ]}
                    pagination={{ clickable: true }}
                    navigation={true}
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={20}
                    grabCursor={true}
                    breakpoints={{
                        // if screen width is 640px or more show 2 cards
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        // if screen width is 1024px or more show all 3 cards
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {team.map((team) => (
                        <SwiperSlide key={team.id} className="team-box">
                            <img src={team.image} alt={team.name} />

                            <div className="team-overlay">
                                <p className="team-name">{team.name}</p>
                                <p className="team-position">
                                    {team.position}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="team-cta">
                <div className="team-cta-text">
                    <p className="team-cta-heading">Many Hands, One Mission</p>
                    <p>Together we create a greener, more resilient tomorrow</p>
                </div>

                <button className="white-button team-cta-button">See the full team</button>
            </div>
        </div>
    </section>
  )
}
