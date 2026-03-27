'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  categoryId: string;
  year: string;
  technologies: string[];
  description: string;
  image: string;
  gallery: string[];
  featured: boolean;
  client: string;
  url: string;
  status: string;
}

interface Category {
  id: string;
  name: string;
  filter_class: string;
}

export default function PortfolioDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { settings } = useSettings();
  const [project, setProject] = useState<Project | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjectData();
  }, [id]);

  const fetchProjectData = async () => {
    try {
      setLoading(true);
      const [projectRes, categoriesRes, allProjectsRes] = await Promise.all([
        fetch(`/api/portfolio/projects/${id}`),
        fetch('/api/portfolio/categories'),
        fetch('/api/portfolio/projects?status=published')
      ]);

      const projectData = await projectRes.json();
      const categoriesData = await categoriesRes.json();
      const allProjectsData = await allProjectsRes.json();

      if (!projectRes.ok) {
        setError(projectData.error || 'Project not found');
        return;
      }

      setProject(projectData);
      
      const categories = Array.isArray(categoriesData) ? categoriesData : [];
      const category = categories.find((c: Category) => c.id === projectData.categoryId);
      setCategory(category || null);

      const related = (Array.isArray(allProjectsData) ? allProjectsData : [])
        .filter((p: Project) => p.id !== id && p.categoryId === projectData.categoryId)
        .slice(0, 3);
      setRelatedProjects(related);
    } catch (err) {
      setError('Failed to load project');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <div className="page-title">
          <div className="container">
            <div className="title-wrapper">
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
        <section className="portfolio-details section">
          <div className="container">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error || !project) {
    return (
      <>
        <div className="page-title">
          <div className="container">
            <div className="title-wrapper">
              <h1>Project Not Found</h1>
            </div>
          </div>
        </div>
        <section className="portfolio-details section">
          <div className="container">
            <div className="text-center py-5">
              <i className="bi bi-exclamation-triangle display-1 text-muted"></i>
              <h3 className="mt-3">{error || 'The project you are looking for does not exist.'}</h3>
              <Link href="/#portfolio" className="btn btn-primary mt-4">
                <i className="bi bi-arrow-left"></i> Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  const allImages = [project.image, ...project.gallery].filter(Boolean);

  return (
    <>
      <div className="page-title">
        <div className="breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/"><i className="bi bi-house"></i> Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/#portfolio">Portfolio</Link>
              </li>
              {category && (
                <li className="breadcrumb-item">
                  <Link href={`/#portfolio`}>{category.name}</Link>
                </li>
              )}
              <li className="breadcrumb-item active current">{project.title}</li>
            </ol>
          </nav>
        </div>
        <div className="title-wrapper">
          <h1>{project.title}</h1>
          {project.subtitle && <p>{project.subtitle}</p>}
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-lg-7" data-aos="fade-right" data-aos-delay="100">
              <div className="hero-image-wrapper">
                <div className="portfolio-slider swiper init-swiper">
                  <script type="application/json" className="swiper-config">
                    {JSON.stringify({
                      loop: allImages.length > 1,
                      speed: 700,
                      autoplay: { delay: 4500, disableOnInteraction: false },
                      effect: "slide",
                      slidesPerView: 1,
                      pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                      },
                      navigation: allImages.length > 1 ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                      } : false
                    })}
                  </script>
                  <div className="swiper-wrapper">
                    {allImages.length > 0 ? (
                      allImages.map((img, index) => (
                        <div key={index} className="swiper-slide">
                          <img src={img} alt={`${project.title} - Image ${index + 1}`} className="img-fluid" />
                        </div>
                      ))
                    ) : (
                      <div className="swiper-slide">
                        <img src="/assets/img/portfolio/placeholder.webp" alt={project.title} className="img-fluid" />
                      </div>
                    )}
                  </div>
                  {allImages.length > 1 && (
                    <>
                      <div className="swiper-button-prev"></div>
                      <div className="swiper-button-next"></div>
                      <div className="swiper-pagination"></div>
                    </>
                  )}
                </div>
                {project.featured && (
                  <div className="floating-badge">
                    <i className="bi bi-award"></i>
                    <span>Featured Project</span>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
              <div className="project-info-card">
                {category && (
                  <div className="project-category">
                    <span className="dot"></span>
                    <span>{category.name}</span>
                  </div>
                )}
                <h1 className="project-title">{project.title}</h1>
                {project.subtitle && (
                  <p className="project-subtitle">{project.subtitle}</p>
                )}
                {project.description && (
                  <p className="project-excerpt">{project.description}</p>
                )}
                <div className="meta-grid">
                  {project.client && (
                    <div className="meta-item">
                      <span className="meta-label">Client</span>
                      <span className="meta-value">{project.client}</span>
                    </div>
                  )}
                  {project.year && (
                    <div className="meta-item">
                      <span className="meta-label">Year</span>
                      <span className="meta-value">{project.year}</span>
                    </div>
                  )}
                  <div className="meta-item">
                    <span className="meta-label">Status</span>
                    <span className="meta-value">
                      <span className={`status-badge ${project.status}`}>
                        {project.status === 'published' ? 'Completed' : project.status}
                      </span>
                    </span>
                  </div>
                  {project.url && project.url !== '#' && (
                    <div className="meta-item">
                      <span className="meta-label">Website</span>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="meta-value meta-link">
                        Visit Website <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    </div>
                  )}
                </div>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="tech-stack">
                    <span className="tech-label">Technologies Used</span>
                    <div className="tech-icons">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="project-cta">
                  <a href="#contact" className="btn btn-primary">
                    <i className="bi bi-chat-dots"></i> Start Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-ribbon" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-box">
              <span className="stat-number">{project.year || new Date().getFullYear()}</span>
              <span className="stat-text">Project Year</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{project.technologies?.length || 0}</span>
              <span className="stat-text">Technologies</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{allImages.length}</span>
              <span className="stat-text">Images</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-text">Satisfaction</span>
            </div>
          </div>

          {project.description && (
            <div className="content-sections">
              <div className="row gy-5">
                <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                  <div className="content-block">
                    <div className="block-header">
                      <span className="block-icon"><i className="bi bi-file-text"></i></span>
                      <h3>Project Overview</h3>
                    </div>
                    <p className="lead-text">{project.description}</p>
                  </div>

                  <div className="challenge-solution" data-aos="fade-up" data-aos-delay="200">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="cs-card challenge">
                          <div className="cs-icon">
                            <i className="bi bi-puzzle"></i>
                          </div>
                          <h4>The Challenge</h4>
                          <p>We approached each requirement with careful analysis, ensuring every aspect of the project was thoroughly understood before implementation began.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cs-card solution">
                          <div className="cs-icon">
                            <i className="bi bi-check2-circle"></i>
                          </div>
                          <h4>Our Solution</h4>
                          <p>Through innovative approaches and modern technologies, we delivered a robust solution that exceeds expectations and drives results.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-block" data-aos="fade-up" data-aos-delay="300">
                    <div className="testimonial-card">
                      <div className="testimonial-content">
                        <i className="bi bi-quote quote-icon"></i>
                        <p className="testimonial-text">
                          Working with {settings?.company_name || 'DigitalOrbit'} was an excellent experience. They delivered beyond our expectations and the results have been outstanding.
                        </p>
                        <div className="testimonial-author">
                          <div className="author-avatar">
                            <i className="bi bi-person-circle"></i>
                          </div>
                          <div className="author-info">
                            <span className="author-name">{project.client || 'Happy Client'}</span>
                            <span className="author-title">Project Partner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="features-sidebar">
                    <h3 className="sidebar-title">What We Delivered</h3>
                    <div className="feature-list">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="bi bi-pc-display"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Responsive Design</h5>
                          <p>Works perfectly on all devices</p>
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="bi bi-shield-lock"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Secure Architecture</h5>
                          <p>Enterprise-grade security</p>
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="bi bi-lightning-charge"></i>
                        </div>
                        <div className="feature-content">
                          <h5>High Performance</h5>
                          <p>Optimized for speed</p>
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="bi bi-gear"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Easy Maintenance</h5>
                          <p>Clean, maintainable code</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cta-sidebar" data-aos="fade-up" data-aos-delay="300">
                    <div className="cta-box">
                      <h4>Like This Project?</h4>
                      <p>Let&apos;s create something amazing together for your business.</p>
                      <a href="#contact" className="btn btn-primary w-100">
                        <i className="bi bi-envelope"></i> Get in Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="gallery-section" data-aos="fade-up" data-aos-delay="100">
              <div className="gallery-header">
                <span className="section-label"><i className="bi bi-images"></i> Gallery</span>
                <h3>Project Screenshots</h3>
              </div>
              <div className="row g-4">
                {project.gallery.map((img, index) => (
                  <div key={index} className={`col-md-${index === 0 ? '12' : '6'}`}>
                    <div className={`gallery-card ${index === 0 ? 'large' : ''}`}>
                      <a href={img} className="glightbox" data-gallery="project-gallery">
                        <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="img-fluid" loading="lazy" />
                        <div className="gallery-overlay">
                          <i className="bi bi-zoom-in"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {relatedProjects.length > 0 && (
            <div className="related-projects" data-aos="fade-up" data-aos-delay="100">
              <div className="related-header">
                <span className="section-label"><i className="bi bi-collection"></i> Related</span>
                <h3>Similar Projects</h3>
              </div>
              <div className="row g-4">
                {relatedProjects.map((related) => (
                  <div key={related.id} className="col-lg-4 col-md-6">
                    <div className="related-card">
                      <div className="related-image">
                        <img src={related.image || '/assets/img/portfolio/placeholder.webp'} alt={related.title} className="img-fluid" loading="lazy" />
                        <div className="related-overlay">
                          <Link href={`/portfolio/${related.id}`} className="btn btn-light btn-sm">
                            View Project <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="related-info">
                        <span className="related-category">{category?.name}</span>
                        <h4>{related.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="navigation-bar" data-aos="fade-up" data-aos-delay="100">
            <Link href="/#portfolio" className="nav-link center">
              <span className="nav-icon"><i className="bi bi-grid-3x3-gap"></i></span>
              <span className="nav-text">View All Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
