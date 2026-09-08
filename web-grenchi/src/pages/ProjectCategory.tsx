// src/pages/ProjectCategory.tsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client, urlFor } from '../lib/sanityClient';
import Navbar from '../components/Navbar';
import ProjectBox from '../components/ProjectBox';
import "../styles/pages/projectCategory.css"

// shape of category info fetched alongside its projects
interface CategoryInfo {
  title: string;
  heroImage: any;
  longDescription: string;
}

// shape of a project item returned from sanity for this category
interface ProjectListItem {
  title: string;
  slug: { current: string } | null;
  date: string;
  description: string;
  thumbnail: any;
  hasArticle: boolean;
  youtubeEmbed?: string;
}

// query to get category info plus all projects under it
const CATEGORY_WITH_PROJECTS_QUERY = `{
  "category": *[_type == "projectCategory" && slug.current == $categorySlug][0] {
    title,
    heroImage,
    longDescription
  },
  "projects": *[_type == "project" && category->slug.current == $categorySlug] | order(date desc) {
    title,
    slug,
    date,
    description,
    thumbnail,
    hasArticle,
    youtubeEmbed
  }
}`;

const ProjectCategoryPage = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState<CategoryInfo | null>(null);
  const [projects, setProjects] = useState<ProjectListItem[]>([]);
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null); // Modal for youtube embeds
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch category info and its projects whenever categorySlug changes
    async function fetchData() {
      const data = await client.fetch(CATEGORY_WITH_PROJECTS_QUERY, { categorySlug });

      // if only one project exists and it has an article, skip the list and go straight to it
      if (data.projects.length === 1 && data.projects[0].hasArticle) {
        navigate(`/projects/${categorySlug}/${data.projects[0].slug.current}`, { replace: true });
        return;
      }

      setCategory(data.category);
      setProjects(data.projects);
      setLoading(false);
    }
    fetchData();
  }, [categorySlug, navigate]);

  // if data is still loading or a redirect is in progress show loading state
  if (loading) return <p>Loading...</p>;

  // if category itself was not found show not found state
  if (!category) return <p>Category not found.</p>;

  return (
    <div className="project-category-page">
      <Navbar />
      <div className="category-hero">
        <div className="category-hero-image">
          <img src={urlFor(category.heroImage).width(2560).url()} alt={category.title} />
        </div>
        
        <h2>{category.title}</h2>
      </div>

      <div className="category-fixed-width">
        <div className="category-details">
          <p>{category.longDescription}</p>
        </div>

        <h3>Our {category.title} projects</h3>

        {/* if no projects exist under this category show empty state */}
        {projects.length === 0 ? (
          <p>No projects found in this category.</p>
        ) : (
          <div className="projects-list">
            {projects.map((project) => (
              <ProjectBox
                key={project.slug ? project.slug.current : project.title}
                title={project.title}
                description={project.description}
                date={project.date}
                image={project.thumbnail}
                embedHtml={project.youtubeEmbed}
                linkTo={project.hasArticle && project.slug ? `/projects/${categorySlug}/${project.slug.current}` : undefined}
                onPlayClick={() => setActiveEmbed(project.youtubeEmbed || null)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Youtube Modal */}
      {activeEmbed && (
        <div className="project-modal-overlay" onClick={() => setActiveEmbed(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setActiveEmbed(null)} aria-label="Close video">
              ✕
            </button>
            <div className="project-modal-video" dangerouslySetInnerHTML={{ __html: activeEmbed }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCategoryPage;