// src/components/ProjectBox.tsx
import { Link } from 'react-router-dom';
import { urlFor } from '../lib/sanityClient';
import '../styles/components/ProjectBox.css';

interface ProjectBoxProps {
  title: string;
  description: string;
  date?: string;
  image?: any;
  embedHtml?: string;
  linkTo?: string;
  onPlayClick?: () => void;
}

function ProjectBox({ title, description, date, image, embedHtml, linkTo, onPlayClick }: ProjectBoxProps) {
  
    const isVideoCard = !!embedHtml && !linkTo;

    const mediaContent = image && (
        <div className="project-box-image">
        <img src={urlFor(image).width(1400).url()} alt={title} />
        {/* if this is a video card show a play button over the thumbnail */}
        {isVideoCard && (
            <button className="project-box-play-btn" onClick={onPlayClick} aria-label="Play video">
            <svg viewBox="0 0 24 24" width="60" height="60">
                <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
            </button>
        )}
        </div>
    );

  const content = (
    <>
      {mediaContent}
      <div className="project-box-content">
        {/* date only renders if it exists */}
        {date && (
          <p className="project-box-meta">
            {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        )}
        <p className="project-box-title">{title}</p>
        <p className="project-box-description">{description}</p>
        {/* view link only renders if the card is clickable */}
        {linkTo && (
          <span className="project-box-link">
            View project <span className="arrow">→</span>
          </span>
        )}
      </div>
    </>
  );

  // if linkTo is provided, wrap the whole card in a link
  if (linkTo) {
    return (
      <Link to={linkTo} className="project-box">
        {content}
      </Link>
    );
  }

  // otherwise render as a non-clickable static card
  return <div className="project-box project-box-static">{content}</div>;
}

export default ProjectBox;