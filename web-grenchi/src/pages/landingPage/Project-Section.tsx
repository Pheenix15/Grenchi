import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import '../../styles/pages/landingPage/Project-Section.css';

const pastProject = [
    {
        name: "Environmental Education",
        img: "../../img/project-thumbnail/CTT.jpg",
        details: "GRENCHI is committed to fostering a culture of environmental stewardship through education.",
        alt: "",
    },

    {
        name: "Community Development",
        img: "../../img/project-thumbnail/EAEP.jpg",
        details: "We believe that communities are the heart of meaningful environmental action.",
        alt: "",
    },

    {
        name: "Eco-Restoration",
        img: "../../img/project-thumbnail/ERCA.jpg",
        details: "The Ecosystem Restoration Programme is a nature-based solution with focus on bringing back ecological integrity in Nigeria's degraded landscapes.",
        alt: "",
    },
]
export default function ProjectSection() {
  return (
    <section className='project-section'>
        <div className="project-fixed-width">
            <div className="project-section-heading">
                <h2>Past Programs</h2>
                
                <Link to="/projects" role="button">
                    <div className="view-project-button" >
                        See all project <FaArrowRight style={{color: "#094b0e"}} />
                    </div>
                </Link>
            </div>

            <div className="project-grid">
                {pastProject.map((project) => (
                    <div key={project.name} className="project-box">
                        <img src={project.img} alt={project.alt} />

                        <div className="project-box-overlay">
                            <h3>{project.name}</h3>
                            <p>{project.details}</p>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    </section>
  )
}
