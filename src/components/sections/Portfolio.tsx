import React from 'react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="isotope-layout" data-default-filter="*" data-layout="fitRows" data-sort="original-order">
          <div className="filters-wrapper" data-aos="fade-up" data-aos-delay="100">
            <ul className="portfolio-filters isotope-filters">
              <li data-filter="*" className="filter-active">All Projects</li>
              <li data-filter=".filter-web">Web Design</li>
              <li data-filter=".filter-mobile">Mobile Apps</li>
              <li data-filter=".filter-branding">Branding</li>
              <li data-filter=".filter-ui">UI/UX</li>
            </ul>
          </div>

          <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="project-card">
                <div className="image-wrapper">
                  <img src="/assets/img/portfolio/portfolio-2.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                  <div className="hover-overlay">
                    <div className="overlay-actions">
                      <a href="/assets/img/portfolio/portfolio-2.webp" className="glightbox action-btn" data-gallery="portfolio">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                  <span className="category-badge">Web Design</span>
                </div>
                <div className="project-info">
                  <h3>Corporate Dashboard System</h3>
                  <p>Pellentesque habitant morbi tristique senectus et netus.</p>
                  <div className="project-meta">
                    <div className="tech-tags">
                      <span>Angular</span>
                      <span>Python</span>
                    </div>
                    <span className="year">2024</span>
                  </div>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-mobile">
              <div className="project-card featured">
                <div className="image-wrapper">
                  <img src="/assets/img/portfolio/portfolio-4.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                  <div className="hover-overlay">
                    <div className="overlay-actions">
                      <a href="/assets/img/portfolio/portfolio-4.webp" className="glightbox action-btn" data-gallery="portfolio">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                  <span className="category-badge">Mobile Apps</span>
                  <span className="featured-badge"><i className="bi bi-star-fill"></i> Featured</span>
                </div>
                <div className="project-info">
                  <h3>Smart Finance Application</h3>
                  <p>Maecenas tempus tellus eget condimentum rhoncus.</p>
                  <div className="project-meta">
                    <div className="tech-tags">
                      <span>Swift</span>
                      <span>Kotlin</span>
                    </div>
                    <span className="year">2024</span>
                  </div>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="project-card">
                <div className="image-wrapper">
                  <img src="/assets/img/portfolio/portfolio-6.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                  <div className="hover-overlay">
                    <div className="overlay-actions">
                      <a href="/assets/img/portfolio/portfolio-6.webp" className="glightbox action-btn" data-gallery="portfolio">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                  <span className="category-badge">Branding</span>
                </div>
                <div className="project-info">
                  <h3>Fashion Label Identity</h3>
                  <p>Donec quam felis ultricies nec pellentesque pretium.</p>
                  <div className="project-meta">
                    <div className="tech-tags">
                      <span>Photoshop</span>
                      <span>Illustrator</span>
                    </div>
                    <span className="year">2023</span>
                  </div>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
              <div className="project-card">
                <div className="image-wrapper">
                  <img src="/assets/img/portfolio/portfolio-8.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                  <div className="hover-overlay">
                    <div className="overlay-actions">
                      <a href="/assets/img/portfolio/portfolio-8.webp" className="glightbox action-btn" data-gallery="portfolio">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                  <span className="category-badge">UI/UX</span>
                </div>
                <div className="project-info">
                  <h3>E-Learning Platform Design</h3>
                  <p>Aenean leo ligula porttitor eu consequat vitae.</p>
                  <div className="project-meta">
                    <div className="tech-tags">
                      <span>Figma</span>
                      <span>Principle</span>
                    </div>
                    <span className="year">2024</span>
                  </div>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="project-card">
                <div className="image-wrapper">
                  <img src="/assets/img/portfolio/portfolio-1.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                  <div className="hover-overlay">
                    <div className="overlay-actions">
                      <a href="/assets/img/portfolio/portfolio-1.webp" className="glightbox action-btn" data-gallery="portfolio">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                  <span className="category-badge">Web Design</span>
                </div>
                <div className="project-info">
                  <h3>Social Media Platform</h3>
                  <p>Vivamus elementum semper nisi quisque rutrum.</p>
                  <div className="project-meta">
                    <div className="tech-tags">
                      <span>React</span>
                      <span>MongoDB</span>
                    </div>
                    <span className="year">2023</span>
                  </div>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-mobile">
              <div className="project-card">
                <div className="image-wrapper">
                  <img src="/assets/img/portfolio/portfolio-3.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                  <div className="hover-overlay">
                    <div className="overlay-actions">
                      <a href="/assets/img/portfolio/portfolio-3.webp" className="glightbox action-btn" data-gallery="portfolio">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                  <span className="category-badge">Mobile Apps</span>
                </div>
                <div className="project-info">
                  <h3>Health Monitoring App</h3>
                  <p>Nullam quis ante etiam sit amet orci eget.</p>
                  <div className="project-meta">
                    <div className="tech-tags">
                      <span>Flutter</span>
                      <span>AWS</span>
                    </div>
                    <span className="year">2024</span>
                  </div>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
              <div className="project-card featured">
                <div className="image-wrapper">
                  <img src="/assets/img/portfolio/portfolio-7.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                  <div className="hover-overlay">
                    <div className="overlay-actions">
                      <a href="/assets/img/portfolio/portfolio-7.webp" className="glightbox action-btn" data-gallery="portfolio">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                  <span className="category-badge">UI/UX</span>
                  <span className="featured-badge"><i className="bi bi-star-fill"></i> Featured</span>
                </div>
                <div className="project-info">
                  <h3>Banking Dashboard Redesign</h3>
                  <p>Curabitur ullamcorper ultricies nisi nam eget dui.</p>
                  <div className="project-meta">
                    <div className="tech-tags">
                      <span>Sketch</span>
                      <span>Zeplin</span>
                    </div>
                    <span className="year">2024</span>
                  </div>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="project-card">
                <div className="image-wrapper">
                  <img src="/assets/img/portfolio/portfolio-9.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                  <div className="hover-overlay">
                    <div className="overlay-actions">
                      <a href="/assets/img/portfolio/portfolio-9.webp" className="glightbox action-btn" data-gallery="portfolio">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                  <span className="category-badge">Branding</span>
                </div>
                <div className="project-info">
                  <h3>Tech Company Rebranding</h3>
                  <p>Etiam rhoncus maecenas tempus tellus condimentum.</p>
                  <div className="project-meta">
                    <div className="tech-tags">
                      <span>InDesign</span>
                      <span>Motion</span>
                    </div>
                    <span className="year">2023</span>
                  </div>
                </div>
              </div>
            </div>{/* End Portfolio Item */}
          </div>{/* End Portfolio Container */}
        </div>

        <div className="cta-section" data-aos="zoom-in" data-aos-delay="300">
          <div className="cta-content">
            <span className="cta-label"><i className="bi bi-lightning-charge-fill"></i> Ready to Start?</span>
            <h3>Let&apos;s Create Something Amazing Together</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-cta-primary">Launch Your Project <i className="bi bi-arrow-right"></i></a>
              <a href="#services" className="btn-cta-secondary"><i className="bi bi-play-circle"></i> Explore Services</a>
            </div>
          </div>
          <div className="cta-decoration">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}