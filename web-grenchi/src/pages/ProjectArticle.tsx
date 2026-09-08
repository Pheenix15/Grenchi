// src/pages/ProjectArticle.tsx
import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import Masonry from 'react-masonry-css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { client, urlFor } from '../lib/sanityClient';
import Navbar from '../components/Navbar';
import "../styles/pages/projectArticle.css"

// shape of a single other-project item shown in the sidebar
interface OtherProject {
  title: string;
  slug: { current: string };
}

// shape of the full project article fetched from sanity
interface ProjectArticle {
  title: string;
  date: string;
  description: string;
  heroImage: any;
  body: any[];
  gallery?: any[];
  categoryTitle: string;
  categorySlug: string;
  otherProjects: OtherProject[];
}

// query to get a single project article, its category info, and sibling projects in the same category
const PROJECT_ARTICLE_QUERY = `*[_type == "project" && slug.current == $projectSlug && category->slug.current == $categorySlug][0] {
  title,
  date,
  description,
  heroImage,
  body,
  gallery,
  "categoryTitle": category->title,
  "categorySlug": category->slug.current,
  "otherProjects": *[_type == "project" && category->slug.current == $categorySlug && slug.current != $projectSlug && hasArticle == true] {
    title,
    slug
  }
}`;

// custom components to render portable text blocks in the body
const portableTextComponents = {
  types: {
    // if the block is an image render it with sanity's url builder
    image: ({ value }: any) => (
      <figure className="article-image">
        <img src={urlFor(value).width(1200).url()} alt="" />
        {value.caption && <figcaption>{value.caption}</figcaption>}
      </figure>
    ),
    // if the block is a youtube embed render the stored embed code
    youtube: ({ value }: any) => {
        console.log('youtube block value:', value);
        return (
            <figure className="article-video">
                <div className="video-wrapper" dangerouslySetInnerHTML={{ __html: value.YoutubeEmbed }} />
                {value.caption && <figcaption>{value.caption}</figcaption>}
            </figure>
        )
      
    }
  }
};

// breakpoints for the masonry gallery grid
const masonryBreakpoints = {
  default: 4,
  1024: 3,
  768: 2
};

export default function ProjectArticle() {
  const { categorySlug, projectSlug } = useParams();
  const [article, setArticle] = useState<ProjectArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [wrapperHeight, setWrapperHeight] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const articleContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // fetch the article whenever the slugs change
    async function fetchArticle() {
      const data = await client.fetch(PROJECT_ARTICLE_QUERY, { categorySlug, projectSlug });
      setArticle(data);
      setLoading(false);
    }
    fetchArticle();
  }, [categorySlug, projectSlug]);

  useEffect(() => {
    // if article content is rendered measure its height to size the scroll wrapper
    if (article && articleContentRef.current) {
      const contentHeight = articleContentRef.current.scrollHeight;
      const viewportHeight = window.innerHeight;
      // wrapper height is whichever is taller so short articles don't break the sticky effect
      setWrapperHeight(Math.max(contentHeight, viewportHeight));
    }
  }, [article]);

  // if data is still loading show loading state
  if (loading) return <p>Loading...</p>;

  // if no article was found show not found state
  if (!article) return <p>Project not found.</p>;

  return (
    <div>
      <Navbar />

      <div className="article-hero" style={{ height: '55vh' }}>
        <img src={urlFor(article.heroImage).width(2560).url()} alt={article.title} />
      </div>

      {/* wrapper height is set dynamically so the sticky row scrolls internally until content ends */}
      <div className="article-scroll-wrapper" style={{ height: wrapperHeight ? `${wrapperHeight}px` : 'auto' }}>
        <div className="article-sticky-row">
          <div className="article-main" ref={articleContentRef}>
            <div className="article-body">
              <PortableText value={article.body} components={portableTextComponents} />
            </div>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-box">
              <h4>Project Details</h4>
              <div className="sidebar-field">
                <span className="sidebar-label">Category</span>
                <Link to={`/projects/${article.categorySlug}`}>{article.categoryTitle}</Link>
              </div>

              {article.date && (
                <div className="sidebar-field">
                    <span className="sidebar-label">Date</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              )}

              {/* MANUALLY ADD OTHER SIDEBAR FIELDS */}
            </div>

            {/* other projects only shows if there are any siblings in the same category */}
            {article.otherProjects.length > 0 && (
              <div className="sidebar-box">
                <h4>Other Projects</h4>
                {article.otherProjects.map((other) => (
                  <Link
                    key={other.slug.current}
                    to={`/projects/${article.categorySlug}/${other.slug.current}`}
                    className="sidebar-other-project-link"
                  >
                    {other.title} →
                  </Link>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* gallery only shows if the project has gallery images */}
      {article.gallery && article.gallery.length > 0 && (
        <div className="article-gallery-section">
          <p className="gallery-label">Visual Record</p>
          <h3>Project Gallery</h3>

          <Masonry
            breakpointCols={masonryBreakpoints}
            className="gallery-masonry-grid"
            columnClassName="gallery-masonry-column"
          >
            {article.gallery.map((image, index) => (
              <img
                key={index}
                src={urlFor(image).width(600).url()}
                alt=""
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </Masonry>
        </div>
      )}

      {/* if a gallery image was clicked show the swiper modal starting at that image */}
      {activeImageIndex !== null && article.gallery && (
        <div className="gallery-modal-overlay" onClick={() => setActiveImageIndex(null)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close gallery"
            >
              ✕
            </button>
            <Swiper initialSlide={activeImageIndex} navigation={false}>
              {article.gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={urlFor(image).width(1600).url()} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}