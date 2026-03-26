'use client';

import { useState, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  categoryId: string;
  year: string;
  technologies: string[];
  description: string;
  image: string;
  featured: boolean;
  client: string;
  url: string;
  status: string;
}

interface Category {
  id: string;
  name: string;
  filterClass: string;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [projectsRes, categoriesRes] = await Promise.all([
        fetch('/api/portfolio/projects?status=published'),
        fetch('/api/portfolio/categories')
      ]);
      const projectsData = await projectsRes.json();
      const categoriesData = await categoriesRes.json();
      setProjects(Array.isArray(projectsData) ? projectsData : []);
      setCategories(Array.isArray(categoriesData) ? categoriesData : []);
    } catch (error) {
      console.error('Failed to fetch portfolio data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.name || categoryId;
  };

  const getCategoryFilterClass = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.filterClass || `filter-${categoryId}`;
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter(project => 
    activeFilter === '*' || `.${getCategoryFilterClass(project.categoryId)}` === activeFilter
  );

  if (loading) {
    return (
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Our Work & Projects</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="isotope-layout" data-default-filter="*" data-layout="fitRows" data-sort="original-order">
          <div className="filters-wrapper" data-aos="fade-up" data-aos-delay="100">
            <ul className="portfolio-filters isotope-filters">
              <li 
                data-filter="*" 
                className={activeFilter === '*' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('*')}
              >
                All Projects
              </li>
              {categories.map((category) => (
                <li 
                  key={category.id}
                  data-filter={`.${category.filterClass}`}
                  className={activeFilter === `.${category.filterClass}` ? 'filter-active' : ''}
                  onClick={() => handleFilterClick(`.${category.filterClass}`)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {projects.length === 0 ? (
              <div className="col-12">
                <div className="empty-portfolio">
                  <i className="bi bi-briefcase"></i>
                  <h3>No projects yet</h3>
                  <p>We&apos;re working on exciting new projects. Check back soon!</p>
                  <a href="#contact" className="btn btn-primary">
                    <i className="bi bi-envelope"></i> Get in Touch
                  </a>
                </div>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="col-12" data-aos="fade-up">
                <div className="empty-portfolio">
                  <i className="bi bi-search"></i>
                  <h3>No matching projects</h3>
                  <p>We don&apos;t have any projects in this category yet. Please explore our other categories!</p>
                  <button 
                    onClick={() => handleFilterClick('*')} 
                    className="btn btn-primary mt-3"
                  >
                    <i className="bi bi-arrow-left"></i> View All Projects
                  </button>
                </div>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item ${getCategoryFilterClass(project.categoryId)}`}
                >
                  <div className={`project-card ${project.featured ? 'featured' : ''}`}>
                    <div className="image-wrapper">
                      <img 
                        src={project.image || '/assets/img/portfolio/portfolio-1.webp'} 
                        alt={project.title} 
                        className="img-fluid" 
                        loading="lazy" 
                      />
                      <div className="hover-overlay">
                        <div className="overlay-actions">
                          <a 
                            href={project.image || '/assets/img/portfolio/portfolio-1.webp'} 
                            className="glightbox action-btn" 
                            data-gallery="portfolio"
                          >
                            <i className="bi bi-eye"></i>
                          </a>
                          <a href={project.url} className="action-btn" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-link-45deg"></i>
                          </a>
                        </div>
                      </div>
                      <span className="category-badge">{getCategoryName(project.categoryId)}</span>
                      {project.featured && (
                        <span className="featured-badge">
                          <i className="bi bi-star-fill"></i> Featured
                        </span>
                      )}
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                      <p className="project-description">{project.description}</p>
                      <div className="project-meta">
                        <div className="tech-tags">
                          {project.technologies?.map((tech, index) => (
                            <span key={index}>{tech}</span>
                          ))}
                        </div>
                        <span className="year">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {projects.length > 0 && (
            <div className="cta-section" data-aos="zoom-in" data-aos-delay="300">
              <div className="cta-content">
                <span className="cta-label">
                  <i className="bi bi-lightning-charge-fill"></i> Ready to Start?
                </span>
                <h3>Let&apos;s Create Something Amazing Together</h3>
                <p>Have a project in mind? We&apos;d love to hear about it and bring your vision to life.</p>
                <div className="cta-buttons">
                  <a href="#contact" className="btn-cta-primary">
                    Start Your Project <i className="bi bi-arrow-right"></i>
                  </a>
                  <a href="#services" className="btn-cta-secondary">
                    <i className="bi bi-play-circle"></i> Explore Services
                  </a>
                </div>
              </div>
              <div className="cta-decoration">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
