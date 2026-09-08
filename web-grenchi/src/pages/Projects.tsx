// Projects.tsx
import { useEffect, useState } from 'react';
import { client } from '../lib/sanityClient';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import ProjectBox from "../components/ProjectBox"
import "../styles/pages/projects.css"


interface ProjectCategory {
  title: string;
  slug: { current: string };
  coverImage: any;
  description?: string;
};

// query to get all project categories
const CATEGORIES_QUERY = `*[_type == "projectCategory"] {
  title,
  slug,
  coverImage,
  description
}`;

export default function Projects() {
    const [projects, setProjects] = useState<ProjectCategory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch all project categories on mount
        async function fetchProjects() {
        const data = await client.fetch(CATEGORIES_QUERY);
        setProjects(data);
        setLoading(false);
        }
        fetchProjects();
    }, []);

    if (loading) return <p>Loading...</p>;
  return (
    <div className="projects-page">
        <Header />
        <Navbar />
        <div className="project-hero">
            <div className="hero-fixed-width">
                <h2>Projects</h2>
            </div>
            
        </div>

        <div className="projects-fixed-width">
            {projects.map((project) => (
                <ProjectBox
                    key={project.slug.current}
                    title={project.title}
                    description={project.description || ''}
                    image={project.coverImage}
                    linkTo={`/projects/${project.slug.current}`}
                />
            ))}
        </div>
    </div>
  )
}